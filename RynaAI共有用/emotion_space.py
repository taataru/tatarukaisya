"""
たあたる式AI - 感情座標空間
2次元の感情空間で単語の位置を管理する。

        興奮(+Y)
        ↑
  怒    |    喜
(-x,+y) |  (+x,+y)
        |
ネガ ←--+--→ ポジ
        |
  哀    |    楽
(-x,-y) |  (+x,-y)
        ↓
       落ち着き(-Y)

・各単語は (x, y) の座標を持つ
・原点からのユークリッド距離がインパクトの大きさ
・入力文の中で最大インパクトの1語だけが感情を動かす
"""
import json
import math
import os
import random
from config import (
    EMOTION_COORDS_PATH,
    EMOTION_RANGE_MIN, EMOTION_RANGE_MAX,
    RANDOM_DISTANCE_MIN, RANDOM_DISTANCE_MAX
)


class EmotionSpace:
    """
    単語の感情座標を管理するクラス。
    
    座標データ形式:
    {
        "しね": {"x": -87, "y": 43},
        "ありがとう": {"x": 62, "y": 28},
        ...
    }
    """
    
    def __init__(self):
        self.coords: dict[str, dict[str, float]] = {}
        self.load()
    
    def get(self, word: str) -> dict[str, float] | None:
        """単語の座標を取得。未登録なら None"""
        return self.coords.get(word)
    
    def set(self, word: str, x: float, y: float):
        """単語の座標を設定"""
        x = max(EMOTION_RANGE_MIN, min(EMOTION_RANGE_MAX, x))
        y = max(EMOTION_RANGE_MIN, min(EMOTION_RANGE_MAX, y))
        self.coords[word] = {"x": x, "y": y}
    
    def euclidean_distance(self, word: str) -> float:
        """
        単語の原点からのユークリッド距離を計算。
        d = √(x² + y²)
        未登録の単語は 0.0 を返す。
        """
        coord = self.get(word)
        if coord is None:
            return 0.0
        return math.sqrt(coord["x"] ** 2 + coord["y"] ** 2)
    
    def find_max_impact_word(self, words: list[str]) -> str | None:
        """
        単語リストからユークリッド距離が最大の1語を返す。
        全て未登録の場合は None を返す。
        """
        max_word = None
        max_dist = -1.0
        
        for word in words:
            dist = self.euclidean_distance(word)
            if dist > max_dist:
                max_dist = dist
                max_word = word
        
        # 距離0（全部未登録）の場合は None
        if max_dist <= 0:
            return None
        return max_word
    
    def get_zone_for_word(self, word: str) -> str | None:
        """単語の座標から所属ゾーンを返す"""
        coord = self.get(word)
        if coord is None:
            return None
        x, y = coord["x"], coord["y"]
        if x >= 0 and y >= 0:
            return "喜"
        elif x < 0 and y >= 0:
            return "怒"
        elif x < 0 and y < 0:
            return "哀"
        else:
            return "楽"
    
    def initialize_word_with_direction(self, word: str, x_positive: bool, y_positive: bool):
        """
        Gemmaに方向だけ聞いて、距離はランダムで決める。
        
        x_positive: True ならポジ方向、False ならネガ方向
        y_positive: True なら興奮方向、False なら落ち着き方向
        距離: 1〜100 のランダム
        """
        dist_x = random.randint(RANDOM_DISTANCE_MIN, RANDOM_DISTANCE_MAX)
        dist_y = random.randint(RANDOM_DISTANCE_MIN, RANDOM_DISTANCE_MAX)
        
        x = dist_x if x_positive else -dist_x
        y = dist_y if y_positive else -dist_y
        
        self.set(word, x, y)

    def reinitialize_word(self, word: str, x_positive: bool, y_positive: bool):
        """
        低スコア単語の座標を再設定する。
        方向だけGemmaに聞いて、距離は1〜100でランダムに飛ばし直す。
        前回より小さい範囲で飛ばすなどの補正はかけない。
        """
        self.initialize_word_with_direction(word, x_positive, y_positive)
    
    def get_words_in_zone(self, zone: str) -> list[str]:
        """指定ゾーンに属する全単語を返す"""
        result = []
        for word in self.coords:
            if self.get_zone_for_word(word) == zone:
                result.append(word)
        return result
    
    def save(self):
        """座標データをファイルに保存"""
        os.makedirs(os.path.dirname(EMOTION_COORDS_PATH), exist_ok=True)
        with open(EMOTION_COORDS_PATH, "w", encoding="utf-8") as f:
            json.dump(self.coords, f, ensure_ascii=False, indent=2)
    
    def load(self):
        """座標データをファイルから読み込み"""
        if os.path.exists(EMOTION_COORDS_PATH):
            with open(EMOTION_COORDS_PATH, "r", encoding="utf-8") as f:
                self.coords = json.load(f)
    
    def __len__(self):
        return len(self.coords)
    
    def __repr__(self):
        return f"EmotionSpace({len(self.coords)} words)"
