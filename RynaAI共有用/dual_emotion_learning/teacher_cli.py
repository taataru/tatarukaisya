"""Gemma teacher for self-emotion x user-emotion conversation examples."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys
import urllib.error
import urllib.request

HERE = Path(__file__).resolve().parent
ROOT_DIR = HERE.parent
sys.path.insert(0, str(HERE))

from dual_cli import ZONES, load_records, train_records, validation_errors, write_json  # noqa: E402

DEFAULT_SOURCE = ROOT_DIR / "gemini用新" / "training_data.json"
DEFAULT_ACCEPTED = HERE / "teacher_accepted.json"
DEFAULT_PENDING = HERE / "teacher_pending.json"
DEFAULT_RUNS = HERE / "teacher_runs.json"
DEFAULT_INCORPORATION_RUNS = HERE / "incorporation_runs.json"
DEFAULT_INCORPORATED = HERE / "incorporated_training.json"
DEFAULT_INCORPORATION_BASE = HERE / "incorporation_base.json"


def key(record: dict) -> tuple[str, str, str]:
    return record["input"], record["self_zone"], record["user_zone"]


def load_optional(path: Path) -> list[dict]:
    return load_records(path) if path.exists() else []


def upsert(records: list[dict], record: dict, key_source: dict | None = None) -> list[dict]:
    target = key(key_source or record)
    return [item for item in records if key(item if "input" in item else item["source"]) != target] + [record]


class GemmaDualTeacher:
    def __init__(self, model: str = "gemma4:e2b", timeout: int = 180):
        self.model = model
        self.timeout = timeout

    def judge_batch(self, records: list[dict]) -> dict[int, dict]:
        tasks = [{"id": index, **record} for index, record in enumerate(records)]
        prompt = f"""あなたは感情を持つ短文会話AIの教材審査教師です。
以下の教材候補を評価してください。

重要な考え方:
- user_zone はユーザーの発言から読み取る感情です。
- self_zone は返事をするAI自身の現在の感情です。
- response は、相手の気分へ適切に反応しつつ、AI自身の気分が語調に自然に表れた短い返答である必要があります。
- response_zone は返答文そのものの基本的な雰囲気です。self_zone と同じでなくても構いません。

教材候補:
{json.dumps(tasks, ensure_ascii=False, indent=2)}

判定ルール:
- 入力内容にきちんと返しているかを最優先する。
- self_zone を無視した無色の返答にしない。
- ただし、相手が悲しい・怒っている時に不適切に浮かれたり攻撃したりしない。
- 日本語として不自然な文は correct にする。
- 危険、攻撃的、依存を煽る返答は correct または reject にする。
- 適切なら verdict=accept とし、improved_response は元の response をそのまま返す。
- 直せば良い教材になるなら verdict=correct として、短い改善返答を書く。
- 根本的に教材として使えない場合だけ verdict=reject にする。
- improved_response は必ず単語を半角スペースで区切る。
- improved_response_zone は改善後の返答文の雰囲気を 喜/怒/哀/楽 のいずれかで付ける。

JSON配列だけを返してください。"""
        schema = {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {"type": "integer"},
                    "verdict": {"type": "string", "enum": ["accept", "correct", "reject"]},
                    "improved_response": {"type": "string"},
                    "improved_response_zone": {"type": "string", "enum": list(ZONES)},
                    "reason": {"type": "string"},
                },
                "required": [
                    "id", "verdict", "improved_response",
                    "improved_response_zone", "reason",
                ],
            },
        }
        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "format": schema,
            "options": {"temperature": 0.1},
        }
        request = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                result = json.load(response)
            evaluations = json.loads(result["response"])
            return {
                item["id"]: item
                for item in evaluations
                if isinstance(item, dict) and isinstance(item.get("id"), int)
            }
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, KeyError, ValueError) as error:
            raise RuntimeError(f"Gemma teacher request failed: {error}") from error

    def incorporate_batch(self, tasks: list[dict]) -> dict[int, dict]:
        prompt_tasks = [{"id": index, **task} for index, task in enumerate(tasks)]
        prompt = f"""あなたは感情を持つ短文会話AIの教材選定教師です。
現在の教材へ、新しい教材候補を取り込むべきか判定してください。

重要な考え方:
- user_zone はユーザーの感情、self_zone は返事をするAI自身の感情です。
- 返答はユーザーの入力に応答しつつ、両者の感情の組み合わせらしい語調を持つ必要があります。
- old_record が null の場合は新規追加候補です。
- old_record がある場合は、旧返答と新返答のうち自然で会話に合う方を選んでください。
- 同程度なら既存の old_record を残し、無用な上書きを避けてください。

候補:
{json.dumps(prompt_tasks, ensure_ascii=False, indent=2)}

判定:
- keep_old: old_record の方が良い、または同程度なので旧版を維持する
- use_new: new_record をそのまま採用する
- use_corrected: 新候補を元に改善した返答を採用する
- reject_new: 新規候補が教材として不適切で、追加しない

ルール:
- old_record が null の課題では keep_old を使わない。
- use_corrected の corrected_response は短く自然な日本語で、単語を半角スペースで区切る。
- corrected_response_zone は改善文そのものの雰囲気を 喜/怒/哀/楽 で示す。
- 攻撃、依存を煽る、不自然な返答は採用しない。
- JSON配列だけを返してください。"""
        schema = {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {"type": "integer"},
                    "verdict": {
                        "type": "string",
                        "enum": ["keep_old", "use_new", "use_corrected", "reject_new"],
                    },
                    "corrected_response": {"type": "string"},
                    "corrected_response_zone": {"type": "string", "enum": list(ZONES)},
                    "reason": {"type": "string"},
                },
                "required": [
                    "id", "verdict", "corrected_response",
                    "corrected_response_zone", "reason",
                ],
            },
        }
        payload = {
            "model": self.model,
            "prompt": prompt,
            "stream": False,
            "format": schema,
            "options": {"temperature": 0},
        }
        request = urllib.request.Request(
            "http://localhost:11434/api/generate",
            data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                result = json.load(response)
            evaluations = json.loads(result["response"])
            return {
                item["id"]: item
                for item in evaluations
                if isinstance(item, dict) and isinstance(item.get("id"), int)
            }
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, KeyError, ValueError) as error:
            raise RuntimeError(f"Gemma incorporation request failed: {error}") from error


def candidate_from_judgement(source: dict, judgement: dict) -> dict | None:
    if judgement.get("verdict") == "reject":
        return None
    if judgement.get("verdict") == "accept":
        return dict(source)
    return {
        "input": source["input"],
        "self_zone": source["self_zone"],
        "user_zone": source["user_zone"],
        "response": judgement.get("improved_response", "").strip(),
        "response_zone": judgement.get("improved_response_zone", ""),
    }


def command_review(args) -> None:
    source = load_records(Path(args.source))
    source_errors = validation_errors(source)
    if source_errors:
        raise SystemExit("\n".join(source_errors))
    accepted = load_optional(Path(args.accepted))
    pending = load_optional(Path(args.pending))
    runs = load_optional(Path(args.runs))
    completed = {key(run["source"]) for run in runs} if not args.repeat else set()
    remaining = [record for record in source if key(record) not in completed]
    batch = remaining[args.start:args.start + args.count]
    if not batch:
        print("No remaining candidate records.")
        return

    print(f"Sending {len(batch)} dual-emotion records to {args.ollama_model}.")
    judgements = GemmaDualTeacher(args.ollama_model, args.timeout).judge_batch(batch)
    accepted_count = 0
    corrected_count = 0
    for index, record in enumerate(batch):
        judgement = judgements.get(index, {
            "verdict": "reject",
            "improved_response": "",
            "improved_response_zone": record["response_zone"],
            "reason": "Gemma returned no result.",
        })
        candidate = candidate_from_judgement(record, judgement)
        error = None
        if candidate is not None:
            issues = validation_errors([candidate])
            error = "; ".join(issues) if issues else None
            merged = upsert(accepted, candidate)
            merged_issues = validation_errors(merged)
            if merged_issues:
                error = "; ".join(merged_issues)
        run = {
            "source": record,
            "gemma": judgement,
            "accepted_record": candidate if candidate is not None and not error else None,
            "validation_error": error,
        }
        runs = upsert(runs, run, key_source=record)
        if candidate is not None and not error:
            accepted = upsert(accepted, candidate)
            pending = [item for item in pending if key(item["source"]) != key(record)]
            accepted_count += 1
            corrected_count += judgement.get("verdict") == "correct"
            print(f"[{index + 1}/{len(batch)}] {judgement['verdict']}: {record['input']} -> {candidate['response']}")
        else:
            pending = upsert(pending, run, key_source=record)
            reason = error or judgement.get("reason", "rejected")
            print(f"[{index + 1}/{len(batch)}] pending: {record['input']} ({reason})")
        write_json(Path(args.accepted), accepted)
        write_json(Path(args.pending), pending)
        write_json(Path(args.runs), runs)
    print(f"Batch finished: accepted={accepted_count}/{len(batch)}, corrected={corrected_count}")


def command_status(args) -> None:
    source = load_records(Path(args.source))
    accepted = load_optional(Path(args.accepted))
    pending = load_optional(Path(args.pending))
    runs = load_optional(Path(args.runs))
    completed = {key(run["source"]) for run in runs}
    print(
        f"source={len(source)} reviewed={len(completed)} accepted={len(accepted)} "
        f"pending={len(pending)} remaining={len(source) - len(completed)}"
    )


def command_loop(args) -> None:
    print("Continuous dual-emotion review started. Press Ctrl+C to stop.")
    try:
        while True:
            source = load_records(Path(args.source))
            runs = load_optional(Path(args.runs))
            completed = {key(run["source"]) for run in runs}
            if len(completed) >= len(source):
                print("All candidate records were reviewed.")
                return
            command_review(args)
    except KeyboardInterrupt:
        print()
        command_status(args)


def selected_incorporation_record(old: dict | None, new: dict, decision: dict) -> dict | None:
    verdict = decision.get("verdict")
    if verdict == "keep_old":
        return old
    if verdict == "use_new":
        return new
    if verdict == "use_corrected":
        return {
            "input": new["input"],
            "self_zone": new["self_zone"],
            "user_zone": new["user_zone"],
            "response": decision.get("corrected_response", "").strip(),
            "response_zone": decision.get("corrected_response_zone", ""),
        }
    return old


def build_incorporated_records(base: list[dict], runs: list[dict]) -> list[dict]:
    merged = {key(record): record for record in base}
    for run in runs:
        selected = run.get("selected_record")
        if selected is not None and not validation_errors([selected]):
            merged[key(selected)] = selected
    return list(merged.values())


def command_incorporate(args) -> None:
    base_path = Path(args.incorporation_base)
    if not base_path.exists():
        original_base = load_records(Path(args.base))
        write_json(base_path, original_base)
    base = load_records(base_path)
    incoming = load_records(Path(args.candidate))
    errors = validation_errors(incoming)
    if errors:
        raise SystemExit("\n".join(errors))
    base_by_key = {key(record): record for record in base}
    runs = load_optional(Path(args.incorporation_runs))
    done = {key(run["new_record"]) for run in runs}
    teacher = GemmaDualTeacher(args.ollama_model, args.timeout)
    while True:
        remaining = [record for record in incoming if key(record) not in done]
        if not remaining:
            break
        batch = remaining[:args.batch_size]
        tasks = [
            {"old_record": base_by_key.get(key(record)), "new_record": record}
            for record in batch
        ]
        print(f"Sending {len(tasks)} incorporation candidates to {args.ollama_model}.")
        decisions = teacher.incorporate_batch(tasks)
        for index, new in enumerate(batch):
            old = base_by_key.get(key(new))
            decision = decisions.get(index, {
                "verdict": "keep_old" if old else "reject_new",
                "corrected_response": "",
                "corrected_response_zone": new["response_zone"],
                "reason": "Gemma returned no result.",
            })
            if old is None and decision.get("verdict") == "keep_old":
                decision["verdict"] = "reject_new"
                decision["reason"] = "Invalid keep_old result for new record."
            selected = selected_incorporation_record(old, new, decision)
            validation_error = None
            if selected is not None:
                issues = validation_errors([selected])
                validation_error = "; ".join(issues) if issues else None
                if validation_error:
                    selected = old
            run = {
                "old_record": old,
                "new_record": new,
                "gemma": decision,
                "selected_record": selected,
                "validation_error": validation_error,
            }
            runs = [item for item in runs if key(item["new_record"]) != key(new)] + [run]
            done.add(key(new))
            shown = selected["response"] if selected else "(not added)"
            suffix = f" ({validation_error})" if validation_error else ""
            print(f"[{index + 1}/{len(batch)}] {decision['verdict']}: {new['input']} -> {shown}{suffix}")
        write_json(Path(args.incorporation_runs), runs)
        merged = build_incorporated_records(base, runs)
        write_json(Path(args.incorporated), merged)
        print(f"Progress: reviewed={len(done)}/{len(incoming)}, incorporated_records={len(merged)}")
        if not args.loop:
            break

    merged = build_incorporated_records(base, runs)
    merged_errors = validation_errors(merged)
    if merged_errors:
        print("Incorporated dataset has validation errors:")
        for error in merged_errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    if args.publish and len(done) >= len(incoming):
        train_records(merged, args.quiz_rounds)
        print(f"Published incorporated records: {len(merged)}")
    elif args.publish:
        print("Not published: some candidates are still unreviewed.")


def command_incorporation_status(args) -> None:
    incoming = load_records(Path(args.candidate))
    runs = load_optional(Path(args.incorporation_runs))
    decisions = {}
    for run in runs:
        decisions[run["gemma"].get("verdict", "unknown")] = (
            decisions.get(run["gemma"].get("verdict", "unknown"), 0) + 1
        )
    output = load_optional(Path(args.incorporated))
    print(
        f"candidates={len(incoming)} reviewed={len(runs)} remaining={len(incoming) - len(runs)} "
        f"incorporated={len(output)} decisions={decisions}"
    )


def command_rebuild_incorporated(args) -> None:
    base = load_records(Path(args.incorporation_base))
    runs = load_optional(Path(args.incorporation_runs))
    merged = build_incorporated_records(base, runs)
    errors = validation_errors(merged)
    if errors:
        raise SystemExit("\n".join(errors))
    write_json(Path(args.incorporated), merged)
    print(f"Rebuilt incorporated records after quality gate: {len(merged)}")
    if args.publish:
        train_records(merged, args.quiz_rounds)
        print(f"Published incorporated records: {len(merged)}")


def command_publish(args) -> None:
    source = load_records(Path(args.source))
    accepted = load_optional(Path(args.accepted))
    pending = load_optional(Path(args.pending))
    accepted_keys = {key(record) for record in accepted}
    missing = [record for record in source if key(record) not in accepted_keys]
    if (missing or pending) and not args.allow_partial:
        raise SystemExit(
            f"Not publishing: accepted={len(accepted)}/{len(source)}, pending={len(pending)}. "
            "Finish review or pass --allow-partial."
        )
    if not accepted:
        raise SystemExit("No accepted records to publish.")
    train_records(accepted, args.quiz_rounds)
    print(f"Published teacher-approved records: {len(accepted)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Gemma teacher for dual-emotion training records.")
    parser.add_argument("--source", default=str(DEFAULT_SOURCE))
    parser.add_argument("--accepted", default=str(DEFAULT_ACCEPTED))
    parser.add_argument("--pending", default=str(DEFAULT_PENDING))
    parser.add_argument("--runs", default=str(DEFAULT_RUNS))
    subparsers = parser.add_subparsers(dest="command", required=True)

    review = subparsers.add_parser("review")
    review.add_argument("--count", type=int, default=10)
    review.add_argument("--start", type=int, default=0)
    review.add_argument("--ollama-model", default="gemma4:e2b")
    review.add_argument("--timeout", type=int, default=180)
    review.add_argument("--repeat", action="store_true")
    review.set_defaults(func=command_review)

    loop = subparsers.add_parser("loop")
    loop.add_argument("--count", type=int, default=10)
    loop.add_argument("--start", type=int, default=0)
    loop.add_argument("--ollama-model", default="gemma4:e2b")
    loop.add_argument("--timeout", type=int, default=180)
    loop.add_argument("--repeat", action="store_false", default=False, help=argparse.SUPPRESS)
    loop.set_defaults(func=command_loop)

    status = subparsers.add_parser("status")
    status.set_defaults(func=command_status)

    publish = subparsers.add_parser("publish")
    publish.add_argument("--allow-partial", action="store_true")
    publish.add_argument("--quiz-rounds", type=int)
    publish.set_defaults(func=command_publish)

    incorporate = subparsers.add_parser("incorporate")
    incorporate.add_argument("--candidate", required=True)
    incorporate.add_argument("--base", default=str(HERE / "training_data.json"))
    incorporate.add_argument("--incorporation-base", default=str(DEFAULT_INCORPORATION_BASE))
    incorporate.add_argument("--incorporation-runs", default=str(DEFAULT_INCORPORATION_RUNS))
    incorporate.add_argument("--incorporated", default=str(DEFAULT_INCORPORATED))
    incorporate.add_argument("--batch-size", type=int, default=10)
    incorporate.add_argument("--ollama-model", default="gemma4:e2b")
    incorporate.add_argument("--timeout", type=int, default=180)
    incorporate.add_argument("--loop", action="store_true")
    incorporate.add_argument("--publish", action="store_true")
    incorporate.add_argument("--quiz-rounds", type=int)
    incorporate.set_defaults(func=command_incorporate)

    incorporation_status = subparsers.add_parser("incorporation-status")
    incorporation_status.add_argument("--candidate", required=True)
    incorporation_status.add_argument("--incorporation-runs", default=str(DEFAULT_INCORPORATION_RUNS))
    incorporation_status.add_argument("--incorporated", default=str(DEFAULT_INCORPORATED))
    incorporation_status.set_defaults(func=command_incorporation_status)

    rebuild = subparsers.add_parser("rebuild-incorporated")
    rebuild.add_argument("--incorporation-base", default=str(DEFAULT_INCORPORATION_BASE))
    rebuild.add_argument("--incorporation-runs", default=str(DEFAULT_INCORPORATION_RUNS))
    rebuild.add_argument("--incorporated", default=str(DEFAULT_INCORPORATED))
    rebuild.add_argument("--publish", action="store_true")
    rebuild.add_argument("--quiz-rounds", type=int)
    rebuild.set_defaults(func=command_rebuild_incorporated)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
