"""
たあたる式AI - 感情波関数
f(t) = (15sin(t) + 7sin(t/7) + 15sin(t/30)) / 37 * 100

・X軸もY軸も同じ関数を使う
・入力がなくても常に動き続ける
・単語が来たら加算 → 一番近い点から乗り直す
・補正なし、飛んだら飛んだまま
・範囲外は自動的に±100の端に吸い寄せられる
"""
import math
import json
import os
from config import (
    WAVE_COEFF_1, WAVE_COEFF_2, WAVE_COEFF_3,
    WAVE_DIVISOR, WAVE_SCALE, TIME_STEP,
    WAVE_SEARCH_RANGE, WAVE_SEARCH_STEP,
    EMOTION_STATE_PATH
)


def emotion_function(t: float) -> float:
    """
    感情波関数
    f(t) = (15sin(t) + 7sin(t/7) + 15sin(t/30)) / 37 * 100
    戻り値: -100 〜 +100
    """
    value = (
        WAVE_COEFF_1 * math.sin(t)
        + WAVE_COEFF_2 * math.sin(t / 7)
        + WAVE_COEFF_3 * math.sin(t / 30)
    ) / WAVE_DIVISOR * WAVE_SCALE
    return value


def find_nearest_t(target_value: float, current_t: float) -> float:
    """
    target_value に一番近い f(t) となる t を探す（段階的探索で超高速＆超高精度化）。
    現在の t の周辺を探索して、最も近い点を返す。
    
    - target_value が ±100 の範囲外なら、関数の端に吸い寄せられる
    - 一番近い t を返す
    """
    # 関数の範囲は -100〜+100 なのでクランプ
    clamped = max(-WAVE_SCALE, min(WAVE_SCALE, target_value))
    
    best_t = current_t
    best_diff = abs(emotion_function(current_t) - clamped)
    
    # 段階的探索 (Coarse-to-fine)
    # 1段階目: 粗い探索 (WAVE_SEARCH_RANGE 範囲を 200 分割)
    search_start = current_t - WAVE_SEARCH_RANGE
    search_end = current_t + WAVE_SEARCH_RANGE
    coarse_step = WAVE_SEARCH_RANGE / 200.0  # デフォルト設定なら 5.0 刻み
    
    t = search_start
    while t <= search_end:
        diff = abs(emotion_function(t) - clamped)
        if diff < best_diff:
            best_diff = diff
            best_t = t
        t += coarse_step
        
    # 2段階目: 中程度の探索 (発見した best_t の前後 coarse_step * 2 の範囲をさらに 200 分割)
    fine_step = coarse_step / 100.0  # デフォルト設定なら 0.05 刻み
    fine_start = best_t - (coarse_step * 2)
    fine_end = best_t + (coarse_step * 2)
    
    t = fine_start
    while t <= fine_end:
        diff = abs(emotion_function(t) - clamped)
        if diff < best_diff:
            best_diff = diff
            best_t = t
        t += fine_step
        
    # 3段階目: 精密な探索 (さらに fine_step * 2 の範囲を WAVE_SEARCH_STEP / 10.0 で極限まで絞り込む)
    # 元の WAVE_SEARCH_STEP (0.01) より 10 倍細かい 0.001 精度を目指す
    super_fine_step = WAVE_SEARCH_STEP / 10.0  # デフォルト設定なら 0.001 刻み
    super_fine_start = best_t - (fine_step * 2)
    super_fine_end = best_t + (fine_step * 2)
    
    t = super_fine_start
    while t <= super_fine_end:
        diff = abs(emotion_function(t) - clamped)
        if diff < best_diff:
            best_diff = diff
            best_t = t
        t += super_fine_step
        
    return best_t


class EmotionState:
    """
    AIの現在の感情状態を管理する。
    
    - tx: X軸（ポジ/ネガ）の sin関数上の位置
    - ty: Y軸（興奮/落ち着き）の sin関数上の位置
    - 時間経過で tx, ty が進み、感情が自然に揺れ続ける
    """
    
    def __init__(self, state_path: str = EMOTION_STATE_PATH):
        self.state_path = state_path
        self.tx = 0.0
        self.ty = 0.0
        self.load()
    
    @property
    def x(self) -> float:
        """現在のX軸感情値（ポジ/ネガ）"""
        return emotion_function(self.tx)
    
    @property
    def y(self) -> float:
        """現在のY軸感情値（興奮/落ち着き）"""
        return emotion_function(self.ty)
    
    def tick(self):
        """時間を1ステップ進める（感情が自然に揺れる）"""
        self.tx += TIME_STEP
        self.ty += TIME_STEP
    
    def apply_impact(self, word_x: float, word_y: float):
        """
        単語の感情座標を受け取り、感情値を変動させる。
        
        1. 現在の感情値に単語の座標を加算
        2. その値に一番近い t を探す
        3. そこから波に乗り直す
        4. 補正なし
        """
        # 現在の感情値に加算
        new_x = self.x + word_x
        new_y = self.y + word_y
        
        # 一番近い点を探して乗り直す
        self.tx = find_nearest_t(new_x, self.tx)
        self.ty = find_nearest_t(new_y, self.ty)
    
    def get_zone(self) -> str:
        """
        現在の感情ゾーンを返す
        喜: x>0, y>0  /  怒: x<0, y>0  /  哀: x<0, y<0  /  楽: x>0, y<0
        """
        ex, ey = self.x, self.y
        if ex >= 0 and ey >= 0:
            return "喜"
        elif ex < 0 and ey >= 0:
            return "怒"
        elif ex < 0 and ey < 0:
            return "哀"
        else:
            return "楽"
    
    def save(self):
        """感情状態をファイルに保存"""
        data = {"tx": self.tx, "ty": self.ty}
        os.makedirs(os.path.dirname(self.state_path), exist_ok=True)
        with open(self.state_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def load(self):
        """感情状態をファイルから読み込み"""
        if os.path.exists(self.state_path):
            with open(self.state_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                self.tx = data.get("tx", 0.0)
                self.ty = data.get("ty", 0.0)
    
    def __repr__(self):
        return (
            f"EmotionState(x={self.x:.1f}, y={self.y:.1f}, "
            f"zone={self.get_zone()}, tx={self.tx:.2f}, ty={self.ty:.2f})"
        )
