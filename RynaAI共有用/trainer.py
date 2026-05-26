"""
たあたる式AI - トレーナー（全4フェーズの学習）

フェーズ1: 意味モデルで単語の関連を学習
フェーズ2: 感情座標の初期設定（Gemma方向 + ランダム距離）
フェーズ3: マルコフ連鎖の虫食いクイズ
フェーズ4: Gemma4との会話による強化学習
"""
import json
import os
import random
from ai_core import TaataruAI
from tokenizer import tokenize
from config import TRAINING_DATA_PATH, DATA_DIR, BATCH_SIZE, SCORE_THRESHOLD


def load_training_data() -> list[dict]:
    """
    学習データを読み込む。
    形式: [
        {"input": "おはよう", "response": "おはよう！", "zone": "喜"},
        {"input": "しね", "response": "え。。。", "zone": "怒"},
        ...
    ]
    """
    if os.path.exists(TRAINING_DATA_PATH):
        with open(TRAINING_DATA_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


# =============================================================
# フェーズ1: 意味モデルで単語の関連を学習
# =============================================================
def train_phase1_word2vec(ai: TaataruAI, training_data: list[dict] | None = None):
    """
    会話データから利用可能な意味モデルを学習させる。
    
    - 入力文と応答文の両方から学習
    - 普通のPCで動く、GPUなし
    """
    if training_data is None:
        training_data = load_training_data()
    
    if not training_data:
        print("学習データがありません。data/training_data.json を用意してください。")
        return
    
    sentences = []
    for item in training_data:
        input_tokens = tokenize(item["input"])
        response_tokens = tokenize(item["response"])
        if input_tokens:
            sentences.append(input_tokens)
        if response_tokens:
            sentences.append(response_tokens)
    
    print(f"意味モデル学習開始: {len(sentences)} 文")
    ai.meaning.train(sentences)
    print(f"意味モデル学習完了: {ai.meaning}")


# =============================================================
# フェーズ2: 感情座標の初期設定
# =============================================================
def train_phase2_emotion_coords_manual(ai: TaataruAI, direction_map: dict[str, dict[str, bool]]):
    """
    手動で方向を指定して感情座標を初期化する。
    Gemma4の代わりに自分で方向を決める場合に使う。
    
    direction_map 形式:
    {
        "しね": {"x_positive": False, "y_positive": True},
        "ありがとう": {"x_positive": True, "y_positive": True},
        ...
    }
    """
    count = 0
    for word, directions in direction_map.items():
        ai.emotion_space.initialize_word_with_direction(
            word,
            x_positive=directions["x_positive"],
            y_positive=directions["y_positive"]
        )
        count += 1
    
    ai.emotion_space.save()
    print(f"感情座標初期化完了: {count} 単語")


def train_phase2_emotion_coords_auto(ai: TaataruAI, training_data: list[dict] | None = None):
    """
    学習データのゾーン情報から自動で方向を決定し、座標を初期化。
    Gemma4を使わない簡易版。
    
    ゾーン → 方向の対応:
    喜: x+, y+  /  怒: x-, y+  /  哀: x-, y-  /  楽: x+, y-
    """
    if training_data is None:
        training_data = load_training_data()
    
    zone_to_direction = {
        "喜": {"x_positive": True, "y_positive": True},
        "怒": {"x_positive": False, "y_positive": True},
        "哀": {"x_positive": False, "y_positive": False},
        "楽": {"x_positive": True, "y_positive": False},
    }
    
    count = 0
    processed = set()
    
    for item in training_data:
        zone = item.get("zone", "喜")
        directions = zone_to_direction[zone]

        # 入力と応答の両方の単語に座標を設定
        all_words = tokenize(item["input"]) + tokenize(item["response"])
        for word in all_words:
            if word not in processed:
                # すでに座標が登録されている単語は上書きしない（過去の調整を保護）
                if ai.emotion_space.get(word) is None:
                    ai.emotion_space.initialize_word_with_direction(
                        word,
                        x_positive=directions["x_positive"],
                        y_positive=directions["y_positive"]
                    )
                    count += 1
                processed.add(word)
    
    ai.emotion_space.save()
    print(f"感情座標自動初期化完了: {count} 単語")


def train_phase2_with_gemma(ai: TaataruAI, gemma_judge_fn):
    """
    Gemma4に方向を聞いて座標を初期化する。
    
    gemma_judge_fn: 単語を受け取り、方向を返す関数
    戻り値: {"x_positive": bool, "y_positive": bool}
    
    使い方:
    def ask_gemma(word):
        # Gemma4 APIを呼んで方向を聞く
        return {"x_positive": False, "y_positive": True}
    
    train_phase2_with_gemma(ai, ask_gemma)
    """
    vocab = ai.meaning.get_vocabulary()
    if not vocab:
        print("意味モデルが未学習です。先にフェーズ1を実行してください。")
        return
    
    count = 0
    for word in vocab:
        if ai.emotion_space.get(word) is None:
            directions = gemma_judge_fn(word)
            ai.emotion_space.initialize_word_with_direction(
                word,
                x_positive=directions["x_positive"],
                y_positive=directions["y_positive"]
            )
            count += 1
            if count % 50 == 0:
                print(f"  {count} 単語処理完了...")
    
    ai.emotion_space.save()
    print(f"Gemma4による感情座標初期化完了: {count} 単語")


# =============================================================
# フェーズ3: マルコフ連鎖の虫食いクイズ
# =============================================================
def train_phase3_markov(ai: TaataruAI, training_data: list[dict] | None = None,
                        quiz_rounds: int = 1000):
    """
    虫食いクイズでマルコフ連鎖を学習する。
    
    1. 文からランダムに1語を隠す
    2. AIが確率テーブルから予測
    3. 正解 → 確率アップ（アメ）/ 不正解 → 確率ダウン（ムチ）
    """
    if training_data is None:
        training_data = load_training_data()
    
    if not training_data:
        print("学習データがありません。")
        return

    # まず全データをマルコフテーブルに登録（返答だけ、先頭単語を記録）
    for item in training_data:
        zone = item.get("zone", "喜")
        response = item["response"]
        response_tokens = response.split() if " " in response else tokenize(response)
        if len(response_tokens) >= 1:
            ai.markov.add_sequence(zone, response_tokens, is_response_start=True)
    
    print(f"マルコフ連鎖初期登録完了: {ai.markov}")
    
    # 虫食いクイズで確率を鍛える
    correct = 0
    total = 0
    
    all_sequences = []
    for item in training_data:
        zone = item.get("zone", "喜")
        response = item["response"]
        tokens = response.split() if " " in response else tokenize(response)
        if len(tokens) >= 2:
            all_sequences.append((zone, tokens))
    
    if not all_sequences:
        print("十分なデータがありません。")
        return
    
    for round_num in range(quiz_rounds):
        # ランダムに文を選ぶ
        zone, tokens = random.choice(all_sequences)
        
        # ランダムに1箇所を隠す（先頭以外）
        if len(tokens) < 2:
            continue
        
        hide_idx = random.randint(1, len(tokens) - 1)
        prev_word = tokens[hide_idx - 1]
        correct_word = tokens[hide_idx]
        
        # AIが予測
        predicted = ai.markov.predict(zone, prev_word)
        total += 1
        
        if predicted == correct_word:
            # 正解 → アメ
            ai.markov.update_correct(zone, prev_word, correct_word)
            correct += 1
        else:
            # 不正解 → ムチ
            if predicted:
                ai.markov.update_incorrect(zone, prev_word, predicted)
            # 正解の方をアップ
            ai.markov.update_correct(zone, prev_word, correct_word)
    
    ai.markov.save()
    accuracy = (correct / total * 100) if total > 0 else 0
    print(f"虫食いクイズ完了: {quiz_rounds}回, 正答率 {accuracy:.1f}%")
    print(f"マルコフ連鎖: {ai.markov}")


# =============================================================
# フェーズ4: Gemma4との会話による強化学習
# =============================================================
def train_phase4_reinforcement(ai: TaataruAI, gemma_chat_fn, gemma_score_fn,
                                gemma_direction_fn, num_conversations: int = 100):
    """
    Gemma4との会話で強化学習する。
    
    gemma_chat_fn: Gemma4がユーザー役で話しかける関数
        戻り値: str（入力文）
    
    gemma_score_fn: Gemma4が返答を採点する関数
        引数: (input_text, response, emotion_x, emotion_y)
        戻り値: int（0〜10点）
    
    gemma_direction_fn: 低スコア単語の新しい方向を聞く関数
        引数: word
        戻り値: {"x_positive": bool, "y_positive": bool}
    """
    low_score_words = []
    
    for i in range(num_conversations):
        # Gemma4がユーザー役で話しかける
        input_text = gemma_chat_fn()
        
        # AIが返答
        response = ai.respond(input_text)
        
        # Gemma4が採点
        score = gemma_score_fn(
            input_text, response,
            ai.emotion_state.x, ai.emotion_state.y
        )
        
        # 会話ログにスコアを記録
        if ai.conversation_log:
            ai.conversation_log[-1]["score"] = score
        
        # 低スコアの場合、インパクト語を記録
        if score <= SCORE_THRESHOLD:
            words = tokenize(input_text)
            impact_word = ai.emotion_space.find_max_impact_word(words)
            if impact_word:
                low_score_words.append(impact_word)
        
        if (i + 1) % 10 == 0:
            print(f"  会話 {i+1}/{num_conversations} 完了")
    
    # バッチで低スコア単語の座標を再調整
    if low_score_words:
        unique_words = list(set(low_score_words))
        print(f"\n低スコア単語の座標を再調整: {len(unique_words)} 語")
        
        for word in unique_words:
            directions = gemma_direction_fn(word)
            ai.emotion_space.reinitialize_word(
                word,
                x_positive=directions["x_positive"],
                y_positive=directions["y_positive"]
            )
        
        ai.emotion_space.save()
    
    ai.save_all()
    
    # 結果レポート
    scored = [e for e in ai.conversation_log if e.get("score") is not None]
    if scored:
        recent = scored[-num_conversations:]
        avg = sum(e["score"] for e in recent) / len(recent)
        print(f"\n強化学習完了: 平均スコア {avg:.1f}/10")


# =============================================================
# 全フェーズ一括実行
# =============================================================
def train_all(ai: TaataruAI, quiz_rounds: int = 1000):
    """
    フェーズ1〜3を一括実行する（Gemma4なしの自動版）。
    フェーズ4は Gemma4 連携が必要なので別途実行。
    """
    training_data = load_training_data()
    if not training_data:
        print("学習データがありません。data/training_data.json を用意してください。")
        return
    
    print("=" * 50)
    print("フェーズ1: 意味モデル学習")
    print("=" * 50)
    train_phase1_word2vec(ai, training_data)
    
    print()
    print("=" * 50)
    print("フェーズ2: 感情座標の初期化")
    print("=" * 50)
    train_phase2_emotion_coords_auto(ai, training_data)
    
    print()
    print("=" * 50)
    print("フェーズ3: マルコフ連鎖の虫食いクイズ")
    print("=" * 50)
    train_phase3_markov(ai, training_data, quiz_rounds)
    
    print()
    print("=" * 50)
    print("全フェーズ完了！")
    print("=" * 50)
    print(ai)
