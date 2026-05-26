"""
たあたる式AI - マルコフ連鎖（感情ゾーン別）
感情の状態ごとに別々の確率テーブルを持ち、
「この単語の次にはどの単語が来やすいか」を学習する。
"""
import json
import os
import random
from config import (
    MARKOV_TABLE_PATH, EMOTION_ZONES,
    MARKOV_LEARNING_RATE_UP, MARKOV_LEARNING_RATE_DOWN
)


class MarkovChain:
    def __init__(self):
        self.tables: dict = {zone: {} for zone in EMOTION_ZONES}
        # 各ゾーンの「返答の最初の単語」リスト
        self.start_words: dict = {zone: [] for zone in EMOTION_ZONES}
        self.load()

    def add_sequence(self, zone: str, words: list, is_response_start: bool = False):
        """単語列をゾーンのテーブルに追加する"""
        if zone not in self.tables:
            return
        table = self.tables[zone]
        # 最初の単語を記録
        if is_response_start and words:
            if words[0] not in self.start_words[zone]:
                self.start_words[zone].append(words[0])
        for i in range(len(words) - 1):
            current = words[i]
            next_word = words[i + 1]
            if current not in table:
                table[current] = {}
            if next_word not in table[current]:
                table[current][next_word] = 0.0
            table[current][next_word] += 1.0
        self._normalize_zone(zone)

    def generate_response(self, zone: str, start_word: str | None = None,
                          max_length: int = 6, candidates: list | None = None) -> list:
        """
        指定ゾーンのテーブルから返答を生成する。
        必ず返答の先頭単語（start_words）から始める。
        """
        table = self.tables.get(zone, {})
        if not table:
            return []

        starts = self.start_words.get(zone, [])

        # 開始単語の決定：start_wordsの中からcandidatesに近いものを選ぶ
        if candidates and starts:
            valid_starts = [w for w in starts if w in candidates]
            current = random.choice(valid_starts) if valid_starts else random.choice(starts)
        elif starts:
            current = random.choice(starts)
        elif candidates:
            valid = [w for w in candidates if w in table]
            current = random.choice(valid) if valid else random.choice(list(table.keys()))
        else:
            current = random.choice(list(table.keys()))

        result = [current]

        for _ in range(max_length - 1):
            if current not in table:
                break
            next_options = table[current]
            if not next_options:
                break
            words_list = list(next_options.keys())
            weights = list(next_options.values())
            total = sum(weights)
            if total <= 0:
                break
            weights = [w / total for w in weights]
            current = random.choices(words_list, weights=weights, k=1)[0]
            result.append(current)

        return result

    def update_correct(self, zone: str, word: str, next_word: str):
        table = self.tables.get(zone, {})
        if word in table and next_word in table[word]:
            table[word][next_word] += MARKOV_LEARNING_RATE_UP
            self._normalize_zone(zone)

    def update_incorrect(self, zone: str, word: str, wrong_word: str):
        table = self.tables.get(zone, {})
        if word in table and wrong_word in table[word]:
            table[word][wrong_word] = max(0.0, table[word][wrong_word] - MARKOV_LEARNING_RATE_DOWN)
            self._normalize_zone(zone)

    def predict(self, zone: str, word: str) -> str | None:
        table = self.tables.get(zone, {})
        if word not in table or not table[word]:
            return None
        options = table[word]
        words_list = list(options.keys())
        weights = list(options.values())
        total = sum(weights)
        if total <= 0:
            return None
        weights = [w / total for w in weights]
        return random.choices(words_list, weights=weights, k=1)[0]

    def _normalize_zone(self, zone: str):
        table = self.tables.get(zone, {})
        for word in table:
            total = sum(table[word].values())
            if total > 0:
                for next_word in table[word]:
                    table[word][next_word] /= total

    def get_zone_stats(self) -> dict:
        return {zone: len(table) for zone, table in self.tables.items()}

    def save(self):
        os.makedirs(os.path.dirname(MARKOV_TABLE_PATH), exist_ok=True)
        data = {"tables": self.tables, "start_words": self.start_words}
        with open(MARKOV_TABLE_PATH, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

    def load(self):
        if os.path.exists(MARKOV_TABLE_PATH):
            with open(MARKOV_TABLE_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
            # 新形式と旧形式の両方に対応
            if "tables" in data:
                for zone in EMOTION_ZONES:
                    if zone in data["tables"]:
                        self.tables[zone] = data["tables"][zone]
                for zone in EMOTION_ZONES:
                    if zone in data.get("start_words", {}):
                        self.start_words[zone] = data["start_words"][zone]
            else:
                for zone in EMOTION_ZONES:
                    if zone in data:
                        self.tables[zone] = data[zone]

    def __repr__(self):
        stats = self.get_zone_stats()
        return f"MarkovChain(喜={stats['喜']}, 怒={stats['怒']}, 哀={stats['哀']}, 楽={stats['楽']})"
