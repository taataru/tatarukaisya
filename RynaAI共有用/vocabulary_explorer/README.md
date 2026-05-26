# 未知語探索

Gemmaに自然な日常発話と内容キーワードを作らせ、現在のAIがまだ教材で
扱っていない話題だけを収集する独立機能です。この処理だけでは本体の学習
データ、感情座標、HTML版モデルを書き換えません。

## 何を未知語とするか

- Gemmaは発話と、その題材になる具体的な `keywords` を返す
- Pythonは `data/emotion_coords.json` と
  `dual_emotion_learning/training_data.json` を既知語の基準として参照する
- 既に教材中に登場する語、過去に収集済みの語、汎用すぎる語は新規追加しない
- 再登場した未知語は `count` と例文だけを増やす
- 収集後に教材へ取り込まれた語は、`status` とプロンプト出力の対象から自動で外れる

日本語の文を機械的に細切れにして集めるのではなく、Gemmaに内容語を選ばせ、
Pythonで重複と既知判定を管理します。

## 使い方

まず保存せずに発話生成だけ試す:

```powershell
python vocabulary_explorer\explorer_cli.py collect --count 10 --dry-run
```

未知語を10発話分収集する:

```powershell
python vocabulary_explorer\explorer_cli.py collect --count 10
```

`Ctrl+C` まで繰り返し収集する:

```powershell
python vocabulary_explorer\explorer_cli.py loop --count 10
```

集まった未知語を確認する:

```powershell
python vocabulary_explorer\explorer_cli.py status
```

頻出の未知語50件から、Geminiに教材JSONを作らせるためのプロンプトを出力する:

```powershell
python vocabulary_explorer\explorer_cli.py export-prompt --limit 50
```

## 生成ファイル

- `utterance_history.json`: Gemmaが作った発話とキーワードの履歴
- `unknown_words.json`: 未学習語、出現回数、発見例
- `gemini_material_prompt.txt`: 教材JSON生成用のプロンプト

生成された教材JSONは、確認後に従来どおり
`dual_emotion_learning/teacher_cli.py` の取り込み審査に渡します。
