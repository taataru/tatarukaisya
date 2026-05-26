"""
たあたる式AI - メインプログラム
学習と会話の両方をここから実行する。

使い方:
  python main.py train    → 学習（フェーズ1〜3）
  python main.py chat     → 会話モード
  python main.py status   → AIの状態を表示
  python main.py demo     → 学習 → 会話 のデモ
"""
import sys
import os

# Windows の cp932 端末でも絵文字を含む表示で実行を止めない。
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(errors="replace")

# プロジェクトルートをパスに追加
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from ai_core import TaataruAI
from trainer import train_all


def mode_train(ai: TaataruAI):
    """学習モード: フェーズ1〜3を実行"""
    print("\n== たあたる式AI - 学習開始 ==\n")
    train_all(ai, quiz_rounds=100000)


def mode_chat(ai: TaataruAI):
    """会話モード: AIとリアルタイムで会話"""
    print("\n== たあたる式AI - 会話モード ==")
    print("   （'quit' で終了、'status' で状態表示）\n")
    
    while True:
        try:
            user_input = input("あなた > ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n\nバイバイ！")
            break
        
        if not user_input:
            continue
        
        if user_input.lower() == "quit":
            print("バイバイ！")
            break
        
        if user_input.lower() == "status":
            status = ai.get_status()
            print(f"\n  感情X (ポジ/ネガ): {status['emotion_x']}")
            print(f"  感情Y (興奮/落ち着き): {status['emotion_y']}")
            print(f"  感情ゾーン: {status['zone']}")
            print(f"  相手感情X (ポジ/ネガ): {status['user_emotion_x']}")
            print(f"  相手感情Y (興奮/落ち着き): {status['user_emotion_y']}")
            print(f"  相手推定ゾーン: {status['user_zone']}")
            print(f"  語彙数: {status['vocab_size']}")
            print(f"  話題記憶: {', '.join(status['topic_memory']) or 'なし'}")
            print(f"  {status['word2vec']}")
            print(f"  {status['markov']}\n")
            continue
        
        # AIの返答を生成
        response = ai.respond(user_input)
        
        # 感情の状態も表示
        status = ai.get_status()
        print(f"AI > {response}")
        print(f"       [自分: ({status['emotion_x']}, {status['emotion_y']}) {status['zone']}"
              f" / 相手推定: ({status['user_emotion_x']}, {status['user_emotion_y']}) {status['user_zone']}]")
        print()


def mode_status(ai: TaataruAI):
    """状態表示モード"""
    print("\n== たあたる式AI - 状態 ==\n")
    print(ai)
    print()
    status = ai.get_status()
    for key, value in status.items():
        print(f"  {key}: {value}")


def mode_demo(ai: TaataruAI):
    """デモモード: 学習してから会話"""
    mode_train(ai)
    print("\n" + "=" * 50)
    print("学習完了！会話モードに入ります。")
    print("=" * 50)
    mode_chat(ai)


def main():
    ai = TaataruAI()
    
    if len(sys.argv) < 2:
        print("\nたあたる式AI")
        print("=" * 40)
        print("  python main.py train   → 学習")
        print("  python main.py chat    → 会話")
        print("  python main.py status  → 状態表示")
        print("  python main.py demo    → 学習+会話")
        print("=" * 40)
        return
    
    mode = sys.argv[1].lower()
    
    if mode == "train":
        mode_train(ai)
    elif mode == "chat":
        mode_chat(ai)
    elif mode == "status":
        mode_status(ai)
    elif mode == "demo":
        mode_demo(ai)
    else:
        print(f"不明なモード: {mode}")
        print("使い方: python main.py [train|chat|status|demo]")


if __name__ == "__main__":
    main()
