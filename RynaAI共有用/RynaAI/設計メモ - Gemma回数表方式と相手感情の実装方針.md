# 設計メモ - Gemma回数表方式と相手感情の実装方針

作成: 2026-05-26

---

> [!warning] 過去時点の検討メモ
> このメモは `user_emotion` と16組み合わせ教材を実装する前の設計検討記録。
> 現在の実装状況は [[ようこそ]] と [[02 現在の仕組み]] を参照する。

## 現在の実装状態

### 実装済み

- AI自身のsin波感情（tick, apply_impact, find_nearest_t）
- 最大インパクト1語選択で感情を動かす
- マルコフ連鎖 + 回数表スコアリング（16回候補生成して最高点を選ぶ）
- `predict_zone`（入力から期待ゾーンを予測）
- Gemma添削 → accepted_pairs保存 → teacher_model学習

### 未実装

- **user_emotion（相手感情状態）** → Phase 1から手つかず
- self_zone × user_zone の16組み合わせキー
- 発言感情の平均計算（現在は最大インパクト1語方式のみ）
- 会話履歴つきGemma授業（teacher_cli.pyは一問一答のみ）

---

## コードで発見した重大な矛盾

`context_learning/context_cli.py` の GuidedChat に矛盾がある。

```python
# 入力から「哀」が適切と予測
expected_zone = expected_zones[0][0]
predicted = self.model.predict_words(input_text, expected_zone)  # 哀の回答語を予測

# でもAI自身の今のゾーン（例: 楽）で候補を絞り込む
zone_words = set(self.ai.emotion_space.get_words_in_zone(zone))
candidates = [word for word in predicted if word in zone_words]  # 哀の語 AND 楽の語 → ほぼ空
```

**expected_zone で予測した語を、AI自身の zone で絞り込んでいるせいで、適切な返答が候補に入らない。**  
これがメモの「AI自身のゾーンに固定されて哀の返答が出ない」問題のコード上の実体。

→ ただし、相手の気分を感じながら自分の気分で返すというコンセプトを守るために、  
　 この修正は **user_emotion を実装してから** 整合させる方針。

---

## Gemma回数表方式の評価

### できること

| 場面 | 判定 |
|---|---|
| 「疲れた」への共感返答 | ✅ 736ペアでカバー可能 |
| 感情的な短いリアクション | ✅ |
| 「カレー好き？」への直接回答 | ❌ 論理的回答は保証できない |
| 複数ターンの話題継続 | △ 履歴語キーで改善できるが疎さが問題 |

### self_zone × user_zone の16組み合わせについて

現在736ペア ÷ 16組み合わせ = 平均 **46ペア/組み合わせ**。  
履歴語をキーに加えると signature ヒットがほぼなくなり、fallback が常態化する。  
**最低1600ペア以上ないと、zone分割の恩恵よりノイズが勝る。**

→ まず user_zone 4通りだけ追加して8組み合わせからはじめる方が現実的。

### 「返答タイプ」ラベルについて

`共感 / 祝福 / 質問への回答 / 聞き返し / 励まし / 同意 / 軽い反発 / 話題継続`

付ける価値は高い。ただし返答タイプ別に独立テーブルにすると疎さが悪化するため、  
**候補の重み調整に使い、独立テーブルにはしない**のが現実的。

---

## 実装方針の決定

**相手感情（user_emotion）の追加を進める。**

コンセプト: 「相手の気分を感じ取りながら、自分の気分を通して返す」

### Phase 1（次の実装対象）

- `user_emotion_state` を新規追加（別モジュール/別状態）
- 入力語座標の**平均**から相手感情を更新（最大インパクト1語ではなく平均）
- sin波方式と減衰方式を切り替えられるようにする
- 会話ログと status に `自分の感情 / 相手の推定感情` を表示
- **返答生成にはまだ使用しない**（壊さないで観測のみ）

### 発言感情の計算（平均方式）

```
utterance_x = 有効単語のx座標の平均
utterance_y = 有効単語のy座標の平均
未学習語しかない場合 → (0, 0)
```

### 相手感情の更新（sin波案）

```
user_target_x = clamp(user_current_x + utterance_x * USER_INPUT_GAIN)
user_tx = find_nearest_t(user_target_x, user_tx)
```

USER_INPUT_GAIN は 0.25〜0.5 で検証。

### 相手感情の更新（減衰案・比較用）

```
user_x = user_x * DECAY + utterance_x * USER_INPUT_GAIN
```

発言にのみ基づいて動き、会話が止まると中立へ戻る。  
AI本人のsin波の固有性はそのまま保てる。

### AI自身への影響（Phase 1では現状維持）

将来的には符号つき二乗で弱める：

```
signed_square(v) = sign(v) * (abs(v) / 100)^2 * 100
```

---

## 守る条件

- 既存のAI自身の感情波は壊さない
- 相手感情は別モジュール/別状態として追加する
- Gemma学習の新方式は既存の gemma_teacher を直接上書きしない
- 実行時の公開版は完全にブラウザ内で動作し、Ollamaや外部APIを必要としない
