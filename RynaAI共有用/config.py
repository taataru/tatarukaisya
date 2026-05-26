"""
たあたる式AI - 設定ファイル
全定数・パスをここで一元管理する
"""
import os

# === パス設定 ===
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")

# データファイルのパス
EMOTION_COORDS_PATH = os.path.join(DATA_DIR, "emotion_coords.json")
MARKOV_TABLE_PATH = os.path.join(DATA_DIR, "markov_table.json")
EMOTION_STATE_PATH = os.path.join(DATA_DIR, "emotion_state.json")
USER_EMOTION_STATE_PATH = os.path.join(DATA_DIR, "user_emotion_state.json")
CONVERSATION_LOG_PATH = os.path.join(DATA_DIR, "conversation_log.json")
WORD2VEC_MODEL_PATH = os.path.join(DATA_DIR, "word2vec.model")
TRAINING_DATA_PATH = os.path.join(DATA_DIR, "training_data.json")

# === 感情空間 ===
EMOTION_RANGE_MIN = -100
EMOTION_RANGE_MAX = 100

# 感情ゾーンの定義
EMOTION_ZONES = {
    "喜": {"x_min": 0, "x_max": 100, "y_min": 0, "y_max": 100},      # ポジ・興奮
    "怒": {"x_min": -100, "x_max": 0, "y_min": 0, "y_max": 100},      # ネガ・興奮
    "哀": {"x_min": -100, "x_max": 0, "y_min": -100, "y_max": 0},     # ネガ・落ち着き
    "楽": {"x_min": 0, "x_max": 100, "y_min": -100, "y_max": 0},      # ポジ・落ち着き
}

# === 感情波関数 ===
# f(t) = (15sin(t) + 7sin(t/7) + 15sin(t/30)) / 37 * 100
WAVE_COEFF_1 = 15     # sin(t) の係数
WAVE_COEFF_2 = 7      # sin(t/7) の係数
WAVE_COEFF_3 = 15     # sin(t/30) の係数
WAVE_DIVISOR = 37     # 正規化の除数
WAVE_SCALE = 100      # -100〜+100 にスケール

# 時間の進み（1回の会話で t がどれだけ進むか）
TIME_STEP = 0.1

# 乗り直し時の探索範囲と精度
WAVE_SEARCH_RANGE = 1000.0   # 現在の t から前後どれだけ探すか
WAVE_SEARCH_STEP = 0.01      # 探索の刻み幅

# === 意味モデル / Word2Vec ===
WORD2VEC_DIMS = 100           # ベクトルの次元数
WORD2VEC_WINDOW = 5           # 学習時のウィンドウサイズ
WORD2VEC_MIN_COUNT = 1        # 最低出現回数
WORD2VEC_EPOCHS = 100         # 学習エポック数
WORD2VEC_TOP_N = 20           # 類似単語の候補数

# === マルコフ連鎖 ===
MARKOV_LEARNING_RATE_UP = 0.1    # 正解時の確率アップ量
MARKOV_LEARNING_RATE_DOWN = 0.05 # 不正解時の確率ダウン量

# === 強化学習 ===
BATCH_SIZE = 100              # Gemma採点をまとめる件数
SCORE_THRESHOLD = 5           # この点数以下で座標を再調整

# === 感情座標の初期化 ===
RANDOM_DISTANCE_MIN = 1
RANDOM_DISTANCE_MAX = 100
