# RynaAI / らいな 共有用パッケージ

作成日: 2026-05-26

このフォルダは、別のPCでらいなの学習・審査・未知語探索・公開版更新を
続けるための最小構成です。現在の採用済み自他感情教材は **727件** です。

## 含まれるもの

| 場所 | 内容 | 公開してよいか |
| --- | --- | --- |
| `web_chat/` | GitHub Pages向けブラウザ会話版 | 公開用 |
| `dual_emotion_learning/` | 自他感情教材、学習処理、Gemma審査記録 | 通常は非公開 |
| `vocabulary_explorer/` | Gemmaによる未知語探索 | 非公開 |
| `data/` | 学習済み座標・連鎖・共起モデル | 通常は非公開 |
| `gemini用新/` | 今回取り込んだ候補JSON | 非公開 |
| `RynaAI/` | Obsidian用の設計・運用ノート | 必要に応じ共有 |

会話ログは含めていません。`data/conversation_log.json` は空の状態で開始します。
感情の現在位置も共有元の会話状態を持ち込まず、初期状態にしています。

## 公開する場合

GitHub Pagesへ公開するのは **`web_chat/` の中身だけ** にしてください。

`web_chat/data/model-data.js` には、公開版が話すための感情辞書と返答モデルが
埋め込まれています。学習履歴や会話ログは含まれていません。

らいなは、荒い言葉や重い感情表現を返す場合がある実験人格です。
この注意書きは公開ページ上にも表示済みです。

## 別PCで必要なもの

- Python 3.10以降
- Gemma審査・未知語探索を使う場合: Ollama と `gemma4:e2b`

```powershell
ollama pull gemma4:e2b
```

`gensim` は任意です。入っていない場合は軽量な共起モデルで学習できます。

## 現在の教材を確認

このフォルダをターミナルで開いて実行します。

```powershell
python dual_emotion_learning\dual_cli.py validate "dual_emotion_learning\training_data.json"
```

## 新しいJSONを審査して取り込む

候補JSONを `gemini用新/` に置きます。まず検査します。

```powershell
python dual_emotion_learning\dual_cli.py validate "gemini用新\新しい候補.json"
```

新しい候補セットごとに、判断履歴のファイル名を分けてGemma審査と反映を行います。
例として `batch_001` を使う場合:

```powershell
Copy-Item "dual_emotion_learning\training_data.json" "dual_emotion_learning\batch_001_base.json"
python dual_emotion_learning\teacher_cli.py incorporate --candidate "gemini用新\新しい候補.json" --base "dual_emotion_learning\training_data.json" --incorporation-base "dual_emotion_learning\batch_001_base.json" --incorporation-runs "dual_emotion_learning\batch_001_runs.json" --incorporated "dual_emotion_learning\batch_001_incorporated.json" --batch-size 10 --loop --publish
```

処理後、`dual_emotion_learning/training_data.json` と `web_chat/data/model-data.js`
が更新されます。新しい公開版は更新された `web_chat/` を再公開します。

## 未知語探索

Gemmaに日常発話をさせ、まだ教材で扱っていない話題語を集めます。

```powershell
python vocabulary_explorer\explorer_cli.py collect --count 10
python vocabulary_explorer\explorer_cli.py loop --count 10
python vocabulary_explorer\explorer_cli.py status
python vocabulary_explorer\explorer_cli.py export-prompt --limit 50
```

集めた未知語は、Geminiに新しい教材JSONを作らせる題材として使います。

## 公開版をローカルで確認

```powershell
cd web_chat
python -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。

## 記録

- 現在の教材: `dual_emotion_learning/training_data.json`
- 今回の472候補に対するGemma判定: `dual_emotion_learning/ryna_batch_runs.json`
- 以前の統合記録: `dual_emotion_learning/history/`
- 設計ノート: `RynaAI/ようこそ.md`
