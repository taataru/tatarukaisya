# 自他感情会話学習

新しい会話の返し方を育てるための作業領域。

## 方針

- `self_zone` と `user_zone` の16組み合わせを扱う。
- 旧 `gemma_teacher` の採用回答や旧4ゾーン返答連鎖は混ぜない。
- 新教材は語彙・文章連鎖・自他感情による返答選択の土台として使用する。
- 同じ返答への偏りを検査してから学習する。

## 教材形式

```json
{
  "input": "今日は仕事で疲れた",
  "self_zone": "楽",
  "user_zone": "哀",
  "response": "ゆっくり 休んで ね",
  "response_zone": "哀"
}
```

## 状態

旧学習成果は `archive/legacy_learning_20260526/` に隔離済み。

## 取り込みと学習

候補データをまず検査する:

```powershell
python dual_emotion_learning\dual_cli.py validate "gemini用新\training_data.json"
```

検査済みデータを取り込み、基本語彙・文章連鎖・公開版スナップショットを更新する:

```powershell
python dual_emotion_learning\dual_cli.py import-train "gemini用新\training_data.json"
```

生成物:

- `training_data.json`: 取り込み済みの自他感情教材
- `dual_model.json`: 16組み合わせ別の短文返答モデル
- `base_emotion_coords.json`: 旧会話の癖を戻さず、観測用に保持する基準感情座標
- `../data/training_data.json`: `response_zone` で学習する基本発話用データ
- `../web_chat/data/model-data.js`: HTML公開版用の更新済みスナップショット

座標の追加では、入力側の新語は `user_zone`、返答側の新語は `response_zone` を使用する。
これにより、相手の感情を読むための語と、AIが発話する語の調子を取り違えない。

## Gemma4先生による審査

`gemma4:e2b` に、候補返答が `self_zone` と `user_zone` の組み合わせに合っているかを審査させる。
元の候補ファイルは変更せず、承認済み・保留・判定記録を別ファイルに保存する。

10件だけ審査:

```powershell
python dual_emotion_learning\teacher_cli.py review --count 10
```

全件を10件ずつ審査:

```powershell
python dual_emotion_learning\teacher_cli.py loop --count 10
```

進捗確認:

```powershell
python dual_emotion_learning\teacher_cli.py status
```

全件確認後、Gemma承認済みデータだけで再学習しHTML版へ反映:

```powershell
python dual_emotion_learning\teacher_cli.py publish
```

保存される審査結果:

- `teacher_accepted.json`: 承認または修正承認された教材
- `teacher_pending.json`: 却下または形式不良で保留になった教材
- `teacher_runs.json`: Gemmaの判定理由を含む記録

## 追加データの統合審査

すでに学習済みの教材へ新しいGeminiデータを加える場合、同じ
`input / self_zone / user_zone` が存在すればGemmaが旧返答と新返答を比較し、
新規レコードであれば追加の可否を判断する。

追加候補を10件だけ判定:

```powershell
python dual_emotion_learning\teacher_cli.py incorporate --candidate "gemini用新\training_data_new_160.json" --batch-size 10
```

全候補を判定し、完了後に採用結果を学習・HTML版へ反映:

```powershell
python dual_emotion_learning\teacher_cli.py incorporate --candidate "gemini用新\training_data_new_160.json" --batch-size 10 --loop --publish
```

統合進捗確認:

```powershell
python dual_emotion_learning\teacher_cli.py incorporation-status --candidate "gemini用新\training_data_new_160.json"
```

統合結果:

- `incorporation_runs.json`: 旧回答、新回答、Gemma判断の記録
- `incorporated_training.json`: 判断を反映した最終教材候補

Gemmaが誤って暴力的な返答や明らかな破損語を採用した場合に備え、
`dual_cli.py` の品質ゲートでも最終検査する。品質ゲート適用後に統合教材を再構築して反映するには:

```powershell
python dual_emotion_learning\teacher_cli.py rebuild-incorporated --publish
```
