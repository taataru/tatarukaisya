"""Collect conversation topics that the current AI has not learned yet."""
from __future__ import annotations

import argparse
from collections import Counter
from datetime import datetime
import json
from pathlib import Path
import re
import urllib.error
import urllib.request


HERE = Path(__file__).resolve().parent
ROOT_DIR = HERE.parent
COORDS_PATH = ROOT_DIR / "data" / "emotion_coords.json"
DUAL_TRAINING_PATH = ROOT_DIR / "dual_emotion_learning" / "training_data.json"
UNKNOWN_PATH = HERE / "unknown_words.json"
UTTERANCE_PATH = HERE / "utterance_history.json"
PROMPT_PATH = HERE / "gemini_material_prompt.txt"

SKIP_KEYWORDS = {
    "今日", "今", "私", "僕", "俺", "自分", "相手", "こと", "もの",
    "これ", "それ", "あれ", "ここ", "そこ", "する", "ある", "いる",
    "なる", "思う", "感じ", "話", "日常", "会話", "作る", "行く",
    "出かける", "食べる", "飲む", "見る", "聞く", "寝る", "休む",
    "嬉しい", "悲しい", "楽しい", "疲れる",
}


def read_json(path: Path, default):
    if not path.exists():
        return default
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def write_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
        file.write("\n")


def clean_keyword(value: str) -> str:
    word = re.sub(r"[\s　、。！？!?「」『』（）()…・,.]", "", str(value))
    return word.strip()


def useful_keyword(keyword: str) -> bool:
    if not keyword or len(keyword) < 2 or keyword in SKIP_KEYWORDS:
        return False
    # Gemma occasionally returns sentence fragments instead of topic words.
    if keyword.endswith(("なくて", "したい", "きたい", "ている", "ってる")):
        return False
    return True


class KnownVocabulary:
    def __init__(self) -> None:
        coords = read_json(COORDS_PATH, {})
        records = read_json(DUAL_TRAINING_PATH, [])
        self.coordinate_words = {clean_keyword(word) for word in coords}
        self.learned_text = "\n".join(
            (
                str(record.get("input", ""))
                + "\n"
                + str(record.get("response", "")).replace(" ", "")
            )
            for record in records
        )

    def knows(self, keyword: str) -> bool:
        return keyword in self.coordinate_words or keyword in self.learned_text


class GemmaExplorer:
    def __init__(self, model: str, timeout: int) -> None:
        self.model = model
        self.timeout = timeout

    def generate(self, count: int, previous: list[dict]) -> list[dict]:
        recent = [item["utterance"] for item in previous[-30:] if "utterance" in item]
        prompt = f"""あなたは短い日常雑談を作る役です。
感情をもつ小さな会話AIが、まだ知らない生活語や話題を探すために使います。

次の条件で、ユーザーがAIに話しかける自然な一言を {count} 件作ってください。
- 挨拶だけではなく、食べ物、外出、家事、趣味、学校、仕事、天気、体調、出来事などを散らす
- 攻撃的、性的、危険な内容は避ける
- 各 utterance は自然な日本語の短文
- keywords は、その文の題材になる具体的な名詞を1〜3個だけ入れる
- keywords は「今日」「思う」「作る」「出かける」「疲れる」のような汎用語・動詞・感情語を入れない
- keywords は文章断片や活用文を入れず、「苺大福」「図書館」「寝坊」「衣替え」「不眠」「水族館」のような教材化する価値がある名詞にする
- 具体的な名詞が含まれる発話を優先する
- 過去の発話と同じ内容は避ける

最近すでに生成した発話:
{json.dumps(recent, ensure_ascii=False)}

JSON配列だけを返してください。"""
        schema = {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "utterance": {"type": "string"},
                    "keywords": {
                        "type": "array",
                        "items": {"type": "string"},
                    },
                },
                "required": ["utterance", "keywords"],
            },
        }
        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "format": schema,
            "options": {"temperature": 0.8},
        }
        request = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                result = json.load(response)
            items = json.loads(result["response"])
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, KeyError) as error:
            raise RuntimeError(f"Gemma request failed: {error}") from error
        return [
            item for item in items
            if isinstance(item, dict)
            and isinstance(item.get("utterance"), str)
            and isinstance(item.get("keywords"), list)
        ][:count]


def collect_batch(args) -> None:
    history = read_json(UTTERANCE_PATH, [])
    unknown = read_json(UNKNOWN_PATH, [])
    known = KnownVocabulary()
    explorer = GemmaExplorer(args.ollama_model, args.timeout)
    utterances = explorer.generate(args.count, history)
    unknown_by_word = {item["word"]: item for item in unknown}
    now = datetime.now().isoformat(timespec="seconds")
    found: Counter[str] = Counter()

    for item in utterances:
        utterance = item["utterance"].strip()
        keywords = []
        for raw_keyword in item["keywords"]:
            keyword = clean_keyword(raw_keyword)
            if (
                not useful_keyword(keyword)
                or keyword in keywords
            ):
                continue
            keywords.append(keyword)
            if known.knows(keyword):
                continue
            found[keyword] += 1
            if keyword not in unknown_by_word:
                unknown_by_word[keyword] = {
                    "word": keyword,
                    "count": 0,
                    "examples": [],
                    "first_seen": now,
                    "last_seen": now,
                    "status": "pending",
                }
            entry = unknown_by_word[keyword]
            entry["count"] += 1
            entry["last_seen"] = now
            if utterance not in entry["examples"]:
                entry["examples"].append(utterance)
                entry["examples"] = entry["examples"][-5:]
        history.append({
            "utterance": utterance,
            "keywords": keywords,
            "created_at": now,
        })

    ordered = sorted(
        unknown_by_word.values(),
        key=lambda item: (-item["count"], item["word"]),
    )
    print(f"utterances={len(utterances)} unknown_hits={sum(found.values())} new_words={len(found)}")
    if args.dry_run:
        for item in utterances:
            print(f"  sample: {item['utterance']} / {', '.join(item['keywords'])}")
    for word, count in found.most_common():
        print(f"  {word}: +{count}")
    if args.dry_run:
        print("dry_run=true (files were not changed)")
        return
    write_json(UTTERANCE_PATH, history)
    write_json(UNKNOWN_PATH, ordered)
    print(f"saved_unknown_words={len(ordered)} path={UNKNOWN_PATH}")


def command_loop(args) -> None:
    rounds = 0
    try:
        while args.rounds is None or rounds < args.rounds:
            rounds += 1
            print(f"Batch {rounds}")
            collect_batch(args)
    except KeyboardInterrupt:
        print("\nStopped by Ctrl+C.")


def command_status(_args) -> None:
    unknown = read_json(UNKNOWN_PATH, [])
    history = read_json(UTTERANCE_PATH, [])
    known = KnownVocabulary()
    pending = [
        item for item in unknown
        if item.get("status") == "pending" and not known.knows(item["word"])
    ]
    learned = sum(1 for item in unknown if known.knows(item["word"]))
    print(
        f"utterances={len(history)} unknown_words={len(unknown)} "
        f"pending={len(pending)} now_learned={learned}"
    )
    for item in sorted(pending, key=lambda value: (-value["count"], value["word"]))[:30]:
        example = item.get("examples", [""])[0]
        print(f"  {item['word']} ({item['count']}): {example}")


def command_export_prompt(args) -> None:
    unknown = read_json(UNKNOWN_PATH, [])
    known = KnownVocabulary()
    pending = [
        item for item in unknown
        if item.get("status") == "pending" and not known.knows(item["word"])
    ]
    pending.sort(key=lambda item: (-item["count"], item["word"]))
    selected = pending[:args.limit]
    words = "、".join(item["word"] for item in selected)
    examples = "\n".join(
        f"- {item['word']}: {item.get('examples', [''])[0]}"
        for item in selected
    )
    prompt = f"""次の未学習語を題材に、自他感情会話AI用の学習データをJSON配列で生成してください。

未学習語:
{words}

発見された会話例:
{examples}

各レコードの形式:
{{"input":"自然な日常会話","self_zone":"喜|怒|哀|楽","user_zone":"喜|怒|哀|楽","response":"単語 単語 単語","response_zone":"喜|怒|哀|楽"}}

条件:
- input または response に未学習語を自然に含める
- response は必ず単語を半角スペースで区切る
- 相手の感情 user_zone に沿った受け答えにする
- AI自身の self_zone の調子も自然ににじませる
- 同じ input / self_zone / user_zone の組み合わせは重複させない
- 脅迫、攻撃、依存を煽る返答は入れない
- JSON配列だけを出力する
"""
    PROMPT_PATH.write_text(prompt, encoding="utf-8")
    print(f"selected_words={len(selected)} prompt={PROMPT_PATH}")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Use Gemma conversation seeds to collect unlearned daily-life keywords."
    )
    subparsers = parser.add_subparsers(dest="command", required=True)
    collect = subparsers.add_parser("collect", help="Generate one batch and collect unknown keywords.")
    collect.add_argument("--count", type=int, default=10)
    collect.add_argument("--ollama-model", default="gemma4:e2b")
    collect.add_argument("--timeout", type=int, default=180)
    collect.add_argument("--dry-run", action="store_true")
    collect.set_defaults(func=collect_batch)

    loop = subparsers.add_parser("loop", help="Collect batches until Ctrl+C or --rounds completes.")
    loop.add_argument("--count", type=int, default=10)
    loop.add_argument("--rounds", type=int)
    loop.add_argument("--ollama-model", default="gemma4:e2b")
    loop.add_argument("--timeout", type=int, default=180)
    loop.add_argument("--dry-run", action="store_true")
    loop.set_defaults(func=command_loop)

    status = subparsers.add_parser("status", help="Display collected unknown words.")
    status.set_defaults(func=command_status)

    export_prompt = subparsers.add_parser(
        "export-prompt",
        help="Make a Gemini prompt from frequent pending unknown words.",
    )
    export_prompt.add_argument("--limit", type=int, default=50)
    export_prompt.set_defaults(func=command_export_prompt)
    return parser


def main() -> None:
    args = build_parser().parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
