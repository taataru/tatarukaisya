# AIクラウド Gemma4 Chat

GitHub Pagesで公開できる静的チャット画面です。画面上部の `trycloudflare URL` に、Gemma4サーバーを公開している `https://....trycloudflare.com` を入れて使います。

## ColabでGemma4を動かす

[colab_gemma4_ollama.ipynb](colab_gemma4_ollama.ipynb) をGoogle Colabで開き、上から順番に実行してください。

このノートブックは次を行います。

- OllamaをColabにインストール
- `gemma4:26b` をpull
- FastAPIでCORS許可済みのAPIを起動
- Cloudflare Quick Tunnelで `trycloudflare.com` URLを発行

AIクラウド側では次の設定にします。

```txt
trycloudflare URL: Colabが表示した https://....trycloudflare.com
形式: Ollama
モデル: gemma4:26b
```

Colabの無料枠はGPUや実行時間が保証されません。`gemma4:26b` は18GB級のモデルなので、うまく読み込めない場合は高メモリ/有料GPUランタイムを使ってください。

## GitHub Pagesでの注意

GitHub Pagesは静的サイトなので、ブラウザから `trycloudflare.com` へ直接POSTします。そのためCORSはGemma4サーバー側で許可する必要があります。

最低限、接続先サーバーで次のヘッダーと `OPTIONS` を返してください。ColabノートブックのFastAPIサーバーはこの処理を入れています。

```txt
Access-Control-Allow-Origin: https://あなたのユーザー名.github.io
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

テスト中だけ全公開にする場合は `Access-Control-Allow-Origin: *` でも動きます。

## 送信形式

画面の `形式` で送信先に合わせて選べます。

- `カスタムJSON`: 入力したURLへ `{ "model", "message", "prompt", "history" }` をPOST
- `OpenAI互換`: URL末尾に `/v1/chat/completions` を付けてPOST
- `Ollama`: URL末尾に `/api/chat` を付けてPOST

応答は `reply`、`response`、`text`、`message.content`、OpenAI互換の `choices[0].message.content` などを自動で読み取ります。
