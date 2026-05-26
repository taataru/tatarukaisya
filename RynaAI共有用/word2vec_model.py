"""
たあたる式AI - Word2Vec（意味理解）
単語の「意味の近さ」を自動学習するレイヤー。

・「しね」と「死ね」は近い
・「嬉しい」と「楽しい」は近い
・返答生成時に意味が近い候補を出す
"""
from collections import Counter
import json
import os

try:
    from gensim.models import Word2Vec
except ImportError:
    Word2Vec = None
from config import (
    WORD2VEC_MODEL_PATH, WORD2VEC_DIMS,
    WORD2VEC_WINDOW, WORD2VEC_MIN_COUNT,
    WORD2VEC_EPOCHS, WORD2VEC_TOP_N
)

FALLBACK_MODEL_PATH = f"{WORD2VEC_MODEL_PATH}.json"


class MeaningModel:
    """
    Word2Vecで単語の意味を学習・管理するクラス。
    
    Layer 1 の担当:
    - 会話データから意味ベクトル（100次元）を自動生成
    - 意味が近い単語の候補を返す
    """
    
    def __init__(self):
        self.model = None
        self.fallback_vocab: set[str] = set()
        self.cooccurrence: dict[str, Counter[str]] = {}
        self.backend = "gensim" if Word2Vec is not None else "cooccurrence"
        self.load()
    
    def train(self, sentences: list[list[str]]):
        """
        文のリスト（各文は単語リスト）からWord2Vecを学習。
        
        例:
        sentences = [
            ["おはよう", "今日", "は", "いい", "天気"],
            ["しね", "と", "言わ", "ない", "で"],
        ]
        """
        if Word2Vec is not None:
            self.backend = "gensim"
            self.model = Word2Vec(
                sentences=sentences,
                vector_size=WORD2VEC_DIMS,
                window=WORD2VEC_WINDOW,
                min_count=WORD2VEC_MIN_COUNT,
                epochs=WORD2VEC_EPOCHS,
                workers=1
            )
        else:
            self.backend = "cooccurrence"
            self._train_fallback(sentences, reset=True)
        self.save()
    
    def retrain(self, new_sentences: list[list[str]]):
        """既存モデルに新しい文を追加学習"""
        if self.model is not None:
            self.model.build_vocab(new_sentences, update=True)
            self.model.train(
                new_sentences,
                total_examples=len(new_sentences),
                epochs=WORD2VEC_EPOCHS
            )
            self.save()
        elif self.backend == "cooccurrence" and self.fallback_vocab:
            self._train_fallback(new_sentences, reset=False)
            self.save()
        else:
            self.train(new_sentences)
    
    def get_similar_words(self, word: str, top_n: int = WORD2VEC_TOP_N) -> list[tuple[str, float]]:
        """
        意味が近い単語の候補を返す。
        戻り値: [(単語, 類似度スコア), ...]
        """
        if self.model is not None:
            if word not in self.model.wv:
                return []
            return self.model.wv.most_similar(word, topn=top_n)

        nearby = self.cooccurrence.get(word, Counter())
        total = sum(nearby.values())
        if total == 0:
            return []
        return [(candidate, count / total) for candidate, count in nearby.most_common(top_n)]
    
    def get_candidates(self, word: str, top_n: int = WORD2VEC_TOP_N) -> list[str]:
        """意味が近い単語名だけをリストで返す"""
        similar = self.get_similar_words(word, top_n)
        return [w for w, _ in similar]
    
    def has_word(self, word: str) -> bool:
        """単語がモデルに存在するか"""
        if self.model is not None:
            return word in self.model.wv
        return word in self.fallback_vocab
    
    def get_vocabulary(self) -> list[str]:
        """学習済みの全単語リストを返す"""
        if self.model is not None:
            return list(self.model.wv.key_to_index.keys())
        return sorted(self.fallback_vocab)
    
    def save(self):
        """モデルをファイルに保存"""
        if self.model is not None:
            os.makedirs(os.path.dirname(WORD2VEC_MODEL_PATH), exist_ok=True)
            self.model.save(WORD2VEC_MODEL_PATH)
        elif self.fallback_vocab:
            os.makedirs(os.path.dirname(FALLBACK_MODEL_PATH), exist_ok=True)
            data = {
                "backend": "cooccurrence",
                "vocab": sorted(self.fallback_vocab),
                "cooccurrence": {
                    word: dict(counts) for word, counts in self.cooccurrence.items()
                }
            }
            with open(FALLBACK_MODEL_PATH, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
    
    def load(self):
        """モデルをファイルから読み込み"""
        if Word2Vec is not None and os.path.exists(WORD2VEC_MODEL_PATH):
            self.model = Word2Vec.load(WORD2VEC_MODEL_PATH)
            self.backend = "gensim"
        elif os.path.exists(FALLBACK_MODEL_PATH):
            with open(FALLBACK_MODEL_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
            self.fallback_vocab = set(data.get("vocab", []))
            self.cooccurrence = {
                word: Counter(counts)
                for word, counts in data.get("cooccurrence", {}).items()
            }
            self.backend = "cooccurrence"
    
    def __repr__(self):
        if self.model is None and not self.fallback_vocab:
            return "MeaningModel(未学習)"
        if self.model is not None:
            vocab_size = len(self.model.wv)
            return f"MeaningModel({vocab_size} words, {WORD2VEC_DIMS}dim, gensim)"
        return f"MeaningModel({len(self.fallback_vocab)} words, 共起モデル)"

    def _train_fallback(self, sentences: list[list[str]], reset: bool):
        """依存ライブラリ不要の近傍共起モデルを学習する。"""
        if reset:
            self.fallback_vocab = set()
            self.cooccurrence = {}

        for sentence in sentences:
            self.fallback_vocab.update(sentence)
            for index, word in enumerate(sentence):
                nearby = self.cooccurrence.setdefault(word, Counter())
                start = max(0, index - WORD2VEC_WINDOW)
                end = min(len(sentence), index + WORD2VEC_WINDOW + 1)
                nearby.update(
                    sentence[position]
                    for position in range(start, end)
                    if position != index
                )
