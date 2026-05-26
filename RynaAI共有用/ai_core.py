"""
たあたる式AI - コア（頭脳）
全コンポーネントを統合して、会話を行うメインクラス。

返答生成パイプライン:
  入力文
  → Step1: 全単語のユークリッド距離を計算、最大インパクト語を選ぶ
  → Step2: 最大インパクト語で感情を飛ばす（加算→乗り直し）
  → Step3: 意味モデルで関連が強い候補を出す
  → Step4: 今の感情ゾーンに合う単語に絞る
  → Step5: マルコフ連鎖の確率で並べて出力
"""
import json
import os
import random
import re
from emotion_wave import EmotionState
from emotion_space import EmotionSpace
from word2vec_model import MeaningModel
from markov_chain import MarkovChain
from tokenizer import tokenize
from config import CONVERSATION_LOG_PATH, DATA_DIR, USER_EMOTION_STATE_PATH


TOPIC_WORDS_PER_TURN = 3
TOPIC_MEMORY_TURNS = 5
NON_TOPIC_TOKEN_RE = re.compile(r"^[。、！？!?…．.]+$")
NON_TOPIC_WORDS = {
    "は", "が", "を", "に", "で", "と", "の", "も", "へ", "や",
    "ね", "よ", "だ", "です", "ます", "て",
}


class TaataruAI:
    """
    たあたる式AI本体。
    
    3層の情報:
      Layer 1: 意味モデル（Word2Vec / 共起モデル）
      Layer 2: 感情座標 (x, y)
      Layer 3: 感情波関数（自律変動）
    
    + マルコフ連鎖（感情ゾーン別の文生成）
    """
    
    def __init__(self):
        self.emotion_state = EmotionState()      # AIの感情状態
        self.user_emotion_state = EmotionState(USER_EMOTION_STATE_PATH)  # 相手の推定感情状態
        self.emotion_space = EmotionSpace()       # 単語の感情座標
        self.meaning = MeaningModel()             # 意味モデル
        self.markov = MarkovChain()               # マルコフ連鎖
        self.conversation_log: list[dict] = []    # 会話ログ
        self.topic_memory: list[dict] = []        # 短期話題記憶
        self.last_user_utterance_emotion: tuple[float, float] | None = None
        self._load_log()
    
    def respond(self, input_text: str) -> str:
        """
        入力テキストに対して返答を生成する。
        全パイプラインを実行する。
        """
        # 時間を進める（感情が自然に揺れる）
        self.emotion_state.tick()
        
        # トークン化
        words = tokenize(input_text)
        
        if not words:
            return ""

        # 相手の感情は入力全体の平均座標で観測し、別の感情波へ反映する。
        self._update_user_emotion(words)
        
        # === Step 1: ユークリッド距離で最大インパクト語を選ぶ ===
        impact_word = self.emotion_space.find_max_impact_word(words)
        
        # === Step 2: 感情を飛ばす ===
        if impact_word:
            coord = self.emotion_space.get(impact_word)
            if coord:
                self.emotion_state.apply_impact(coord["x"], coord["y"])
        
        # 現在の感情ゾーンを取得
        current_zone = self.emotion_state.get_zone()
        
        # === Step 3: 意味モデルで関連が強い候補を出す ===
        all_candidates = set()
        remembered_words = self._remembered_topic_words()
        for word in words + remembered_words:
            candidates = self.meaning.get_candidates(word)
            all_candidates.update(candidates)
        
        # 入力単語と直近の話題語も候補に入れる。
        # 完成文へ直接差し込まないため、マルコフ連鎖の語順は壊さない。
        all_candidates.update(words)
        all_candidates.update(remembered_words)
        
        # === Step 4: 感情ゾーンに合う単語に絞る ===
        zone_words = set(self.emotion_space.get_words_in_zone(current_zone))
        
        # 候補と感情ゾーンの共通部分
        filtered = list(all_candidates & zone_words)
        
        # 絞り込みで候補がなくなった場合、ゾーン内の全単語を候補にする
        if not filtered:
            filtered = list(zone_words) if zone_words else None
        
        # === Step 5: マルコフ連鎖で並べて出力 ===
        response_words = self.markov.generate_response(
            zone=current_zone,
            candidates=filtered,
            max_length=5
        )
        
        response = "".join(response_words)

        # 過去の記憶を1ターン消費した後、今回の入力から最大3語を追加する。
        self._age_topic_memory()
        self._remember_topic_words(words)
        
        # 会話ログに記録
        self._log_conversation(input_text, response, impact_word, current_zone)
        
        # 状態を保存
        self.save_all()
        
        return response
    
    def get_status(self) -> dict:
        """AIの現在の状態を返す"""
        return {
            "emotion_x": round(self.emotion_state.x, 1),
            "emotion_y": round(self.emotion_state.y, 1),
            "zone": self.emotion_state.get_zone(),
            "tx": round(self.emotion_state.tx, 2),
            "ty": round(self.emotion_state.ty, 2),
            "vocab_size": len(self.emotion_space),
            "word2vec": repr(self.meaning),
            "markov": repr(self.markov),
            "topic_memory": self._remembered_topic_words(),
            "user_emotion_x": round(self.user_emotion_state.x, 1),
            "user_emotion_y": round(self.user_emotion_state.y, 1),
            "user_zone": self.user_emotion_state.get_zone(),
            "user_tx": round(self.user_emotion_state.tx, 2),
            "user_ty": round(self.user_emotion_state.ty, 2),
        }

    def _update_user_emotion(self, words: list[str]):
        """入力語の平均感情座標を、相手の推定感情波へ反映する。"""
        self.user_emotion_state.tick()
        coordinates = [
            self.emotion_space.get(word)
            for word in words
            if self.emotion_space.get(word) is not None
        ]
        if not coordinates:
            self.last_user_utterance_emotion = None
            return
        average_x = sum(coord["x"] for coord in coordinates) / len(coordinates)
        average_y = sum(coord["y"] for coord in coordinates) / len(coordinates)
        self.last_user_utterance_emotion = (average_x, average_y)
        self.user_emotion_state.apply_impact(average_x, average_y)

    def _remembered_topic_words(self) -> list[str]:
        """まだ有効な話題語を重複なしで返す。"""
        result = []
        for item in self.topic_memory:
            if item["turns_left"] > 0 and item["word"] not in result:
                result.append(item["word"])
        return result

    def _remember_topic_words(self, words: list[str]):
        """入力中の単語からランダムに最大3語を5ターン保持する。"""
        candidates = list(dict.fromkeys(
            word for word in words
            if word and word not in NON_TOPIC_WORDS and not NON_TOPIC_TOKEN_RE.fullmatch(word)
        ))
        chosen = random.sample(candidates, min(TOPIC_WORDS_PER_TURN, len(candidates)))
        current = {item["word"]: item for item in self.topic_memory}
        for word in chosen:
            if word in current:
                current[word]["turns_left"] = TOPIC_MEMORY_TURNS
            else:
                self.topic_memory.append({"word": word, "turns_left": TOPIC_MEMORY_TURNS})

    def _age_topic_memory(self):
        """話題語の寿命を1ターン進める。"""
        for item in self.topic_memory:
            item["turns_left"] -= 1
        self.topic_memory = [
            item for item in self.topic_memory if item["turns_left"] > 0
        ]
    
    def save_all(self):
        """全データを保存"""
        self.emotion_state.save()
        self.user_emotion_state.save()
        self.emotion_space.save()
        self.meaning.save()
        self.markov.save()
        self._save_log()
    
    def _log_conversation(self, input_text: str, response: str,
                          impact_word: str | None, zone: str):
        """会話をログに記録（強化学習用）"""
        entry = {
            "input": input_text,
            "response": response,
            "impact_word": impact_word,
            "zone": zone,
            "emotion_x": round(self.emotion_state.x, 1),
            "emotion_y": round(self.emotion_state.y, 1),
            "topic_memory": self._remembered_topic_words(),
            "user_zone": self.user_emotion_state.get_zone(),
            "user_emotion_x": round(self.user_emotion_state.x, 1),
            "user_emotion_y": round(self.user_emotion_state.y, 1),
            "user_utterance_emotion": (
                [round(value, 1) for value in self.last_user_utterance_emotion]
                if self.last_user_utterance_emotion else None
            ),
            "score": None  # Gemmaが後で採点
        }
        self.conversation_log.append(entry)
    
    def _save_log(self):
        """会話ログを保存"""
        os.makedirs(DATA_DIR, exist_ok=True)
        with open(CONVERSATION_LOG_PATH, "w", encoding="utf-8") as f:
            json.dump(self.conversation_log, f, ensure_ascii=False, indent=2)
    
    def _load_log(self):
        """会話ログを読み込み"""
        if os.path.exists(CONVERSATION_LOG_PATH):
            with open(CONVERSATION_LOG_PATH, "r", encoding="utf-8") as f:
                self.conversation_log = json.load(f)
    
    def __repr__(self):
        return (
            f"TaataruAI(\n"
            f"  感情: {self.emotion_state}\n"
            f"  感情空間: {self.emotion_space}\n"
            f"  意味: {self.meaning}\n"
            f"  連鎖: {self.markov}\n"
            f")"
        )
