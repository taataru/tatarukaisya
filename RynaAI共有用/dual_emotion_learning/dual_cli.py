"""Import and train the self-emotion x user-emotion conversation model."""
from __future__ import annotations

import argparse
from collections import Counter
from datetime import datetime
import json
from pathlib import Path
import shutil
import sys

HERE = Path(__file__).resolve().parent
ROOT_DIR = HERE.parent
sys.path.insert(0, str(ROOT_DIR))

from ai_core import TaataruAI  # noqa: E402
from emotion_space import EmotionSpace  # noqa: E402
from tokenizer import tokenize  # noqa: E402
from trainer import (  # noqa: E402
    train_phase1_word2vec,
    train_phase3_markov,
)

ZONES = ("喜", "怒", "哀", "楽")
REQUIRED_FIELDS = {"input", "self_zone", "user_zone", "response", "response_zone"}
REJECTED_RESPONSE_FRAGMENTS = (
    "爆発 しろ",
    "叩き潰して",
    "現想",
)
DEFAULT_DATA_PATH = HERE / "training_data.json"
DEFAULT_MODEL_PATH = HERE / "dual_model.json"
ACTIVE_TRAINING_PATH = ROOT_DIR / "data" / "training_data.json"
ACTIVE_MARKOV_PATH = ROOT_DIR / "data" / "markov_table.json"
ACTIVE_MEANING_PATH = ROOT_DIR / "data" / "word2vec.model.json"
COORDS_PATH = ROOT_DIR / "data" / "emotion_coords.json"
BASE_COORDS_PATH = HERE / "base_emotion_coords.json"
STATE_PATH = ROOT_DIR / "data" / "emotion_state.json"
PUBLIC_BUNDLE_PATH = ROOT_DIR / "web_chat" / "data" / "model-data.js"


def load_records(path: Path) -> list[dict]:
    with path.open("r", encoding="utf-8") as file:
        records = json.load(file)
    if not isinstance(records, list):
        raise ValueError(f"{path} must contain a JSON array")
    return records


def write_json(path: Path, data) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)
        file.write("\n")


def validation_errors(records: list[dict]) -> list[str]:
    errors: list[str] = []
    seen_keys: set[tuple[str, str, str]] = set()
    response_counts: Counter[str] = Counter()
    combination_counts: Counter[tuple[str, str]] = Counter()
    for index, record in enumerate(records, 1):
        if not isinstance(record, dict) or set(record) != REQUIRED_FIELDS:
            errors.append(f"record {index}: fields must be {sorted(REQUIRED_FIELDS)}")
            continue
        for field in ("self_zone", "user_zone", "response_zone"):
            if record[field] not in ZONES:
                errors.append(f"record {index}: invalid {field}={record[field]!r}")
        if not isinstance(record["input"], str) or not record["input"].strip():
            errors.append(f"record {index}: input must be non-empty")
        response = record["response"].strip()
        if len(response.split()) < 2:
            errors.append(f"record {index}: response must be space-separated")
        for fragment in REJECTED_RESPONSE_FRAGMENTS:
            if fragment in response:
                errors.append(f"record {index}: rejected response fragment: {fragment}")
        key = (record["input"], record["self_zone"], record["user_zone"])
        if key in seen_keys:
            errors.append(f"record {index}: duplicate input/self_zone/user_zone")
        seen_keys.add(key)
        response_counts[response] += 1
        combination_counts[(record["self_zone"], record["user_zone"])] += 1

    for response, count in response_counts.items():
        if count > 6:
            errors.append(f"response used too often ({count}): {response}")
        if "やめて ほしい" in response and count > 2:
            errors.append(f"'やめて ほしい' used too often ({count})")
    return errors


def print_summary(records: list[dict]) -> None:
    combinations = Counter((record["self_zone"], record["user_zone"]) for record in records)
    responses = Counter(record["response"] for record in records)
    print(f"records={len(records)}")
    for self_zone in ZONES:
        details = ", ".join(
            f"{user_zone}={combinations[(self_zone, user_zone)]}"
            for user_zone in ZONES
        )
        print(f"  self={self_zone}: {details}")
    print(f"unique_responses={len(responses)} max_response_use={max(responses.values(), default=0)}")


def merge_records(existing: list[dict], incoming: list[dict]) -> list[dict]:
    merged = {
        (record["input"], record["self_zone"], record["user_zone"]): record
        for record in existing
    }
    for record in incoming:
        merged[(record["input"], record["self_zone"], record["user_zone"])] = record
    return list(merged.values())


def build_dual_model(records: list[dict]) -> dict:
    combinations: dict[str, list[dict]] = {
        f"{self_zone}|{user_zone}": []
        for self_zone in ZONES for user_zone in ZONES
    }
    for record in records:
        key = f"{record['self_zone']}|{record['user_zone']}"
        combinations[key].append({
            "input": record["input"],
            "response": record["response"].replace(" ", ""),
            "response_words": record["response"].split(),
            "response_zone": record["response_zone"],
        })
    return {
        "version": 1,
        "record_count": len(records),
        "combinations": combinations,
    }


def rebuild_emotion_coordinates(records: list[dict]) -> None:
    """Keep the original emotion vocabulary and add new input/response words correctly."""
    if not BASE_COORDS_PATH.exists():
        shutil.copy2(COORDS_PATH, BASE_COORDS_PATH)
    shutil.copy2(BASE_COORDS_PATH, COORDS_PATH)
    space = EmotionSpace()
    directions = {
        "喜": (True, True),
        "怒": (False, True),
        "哀": (False, False),
        "楽": (True, False),
    }
    added = 0
    for record in records:
        groups = (
            (tokenize(record["input"]), record["user_zone"]),
            (record["response"].split(), record["response_zone"]),
        )
        for words, zone in groups:
            x_positive, y_positive = directions[zone]
            for word in words:
                if space.get(word) is None:
                    space.initialize_word_with_direction(word, x_positive, y_positive)
                    added += 1
    space.save()
    print(f"自他感情座標追加完了: {added} 新単語")


def rebuild_basic_models(records: list[dict], quiz_rounds: int) -> None:
    basic_records = [
        {
            "input": record["input"],
            "response": record["response"],
            "zone": record["response_zone"],
        }
        for record in records
    ]
    write_json(ACTIVE_TRAINING_PATH, basic_records)
    write_json(ACTIVE_MARKOV_PATH, {
        "tables": {zone: {} for zone in ZONES},
        "start_words": {zone: [] for zone in ZONES},
    })
    write_json(ACTIVE_MEANING_PATH, {
        "backend": "cooccurrence",
        "vocab": [],
        "cooccurrence": {},
    })
    rebuild_emotion_coordinates(records)
    ai = TaataruAI()
    train_phase1_word2vec(ai, basic_records)
    train_phase3_markov(ai, basic_records, quiz_rounds=quiz_rounds)
    ai.save_all()


def build_public_bundle(dual_model: dict) -> None:
    bundle = {
        "coords": json.loads(COORDS_PATH.read_text(encoding="utf-8")),
        "markov": json.loads(ACTIVE_MARKOV_PATH.read_text(encoding="utf-8")),
        "meaning": json.loads(ACTIVE_MEANING_PATH.read_text(encoding="utf-8")),
        "initialState": json.loads(STATE_PATH.read_text(encoding="utf-8")),
        "teacher": None,
        "dual": dual_model,
    }
    output = "window.TAATARU_MODEL = " + json.dumps(
        bundle, ensure_ascii=False, separators=(",", ":")
    ) + ";\n"
    PUBLIC_BUNDLE_PATH.write_text(output, encoding="utf-8")


def backup_if_exists(path: Path) -> None:
    if not path.exists() or path.stat().st_size == 0:
        return
    backup_dir = HERE / "backups"
    backup_dir.mkdir(exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
    shutil.copy2(path, backup_dir / f"{path.stem}.{stamp}{path.suffix}")


def command_validate(args) -> None:
    records = load_records(Path(args.source))
    errors = validation_errors(records)
    print_summary(records)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    print("validation=ok")


def command_import_train(args) -> None:
    incoming = load_records(Path(args.source))
    errors = validation_errors(incoming)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    existing = load_records(DEFAULT_DATA_PATH) if DEFAULT_DATA_PATH.exists() else []
    merged = merge_records(existing, incoming)
    errors = validation_errors(merged)
    if errors:
        for error in errors:
            print(f"ERROR after merge: {error}")
        raise SystemExit(1)
    backup_if_exists(DEFAULT_DATA_PATH)
    write_json(DEFAULT_DATA_PATH, merged)
    dual_model = build_dual_model(merged)
    write_json(DEFAULT_MODEL_PATH, dual_model)
    rounds = args.quiz_rounds or max(1000, len(merged) * 20)
    rebuild_basic_models(merged, rounds)
    build_public_bundle(dual_model)
    print_summary(merged)
    print(f"trained_dual_model={DEFAULT_MODEL_PATH}")
    print(f"public_bundle={PUBLIC_BUNDLE_PATH}")


def train_records(records: list[dict], quiz_rounds: int | None = None) -> None:
    """Train and publish an already validated complete dual-emotion dataset."""
    errors = validation_errors(records)
    if errors:
        raise ValueError("\n".join(errors))
    backup_if_exists(DEFAULT_DATA_PATH)
    write_json(DEFAULT_DATA_PATH, records)
    dual_model = build_dual_model(records)
    write_json(DEFAULT_MODEL_PATH, dual_model)
    rounds = quiz_rounds or max(1000, len(records) * 20)
    rebuild_basic_models(records, rounds)
    build_public_bundle(dual_model)
    print_summary(records)
    print(f"trained_dual_model={DEFAULT_MODEL_PATH}")
    print(f"public_bundle={PUBLIC_BUNDLE_PATH}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Train self-zone x user-zone conversation data.")
    subparsers = parser.add_subparsers(dest="command", required=True)
    validate = subparsers.add_parser("validate")
    validate.add_argument("source")
    validate.set_defaults(func=command_validate)
    train = subparsers.add_parser("import-train")
    train.add_argument("source")
    train.add_argument("--quiz-rounds", type=int)
    train.set_defaults(func=command_import_train)
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
