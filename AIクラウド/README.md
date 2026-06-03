# たるこ

GitHub Pagesで公開できる静的チャット画面です。画面上部の `trycloudflare URL` に、Ollamaを公開している `https://....trycloudflare.com` を入れて使います。

## ColabでOllamaを動かす

[colab_gemma4_ollama.ipynb](colab_gemma4_ollama.ipynb) をGoogle Colabで開き、上から順番に実行してください。

このノートブックは次を行います。

- OllamaをColabにインストール
- `gemma4:e2b` をpull
- `OLLAMA_ORIGINS="*"` でCORSを許可
- Cloudflare Quick TunnelでOllama本体の `http://localhost:11434` を公開
- 公開URLの `/api/version`、CORS preflight、`/api/chat` を確認

たるこ側では次の設定にします。

```txt
trycloudflare URL: Colabが表示した https://....trycloudflare.com
形式: Ollama
モデル: gemma4:e2b
```

別モデルを使う場合は、ノートブック先頭の `MODEL` とたるこ側のモデル欄を同じ名前にしてください。

## GitHub Pagesでの注意

GitHub Pagesは静的サイトなので、ブラウザから `trycloudflare.com` へ直接POSTします。そのためCORSはOllama側で許可する必要があります。

最低限、接続先サーバーで次のヘッダーと `OPTIONS` を返してください。この構成では `OLLAMA_ORIGINS="*"` でOllama側にCORSを許可させます。

```txt
Access-Control-Allow-Origin: https://あなたのユーザー名.github.io
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

テスト中だけ全公開にする場合は `Access-Control-Allow-Origin: *` でも動きます。

## 送信形式

たるこはOllama固定で送信します。入力した `trycloudflare URL` の末尾に `/api/chat` を付けてPOSTします。

応答は `reply`、`response`、`text`、`message.content`、OpenAI互換の `choices[0].message.content` などを自動で読み取ります。

## 画像送信

入力欄左のクリップボタンからPNG/JPEG/WebP画像を添付できます。

サイト側で長辺1024pxに縮小してから、Ollamaの `/api/chat` に `messages[].images` としてbase64送信します。

画像を読むには、Ollama側のモデルが画像入力に対応している必要があります。画像非対応モデルの場合は、通信はできても画像内容は理解できません。

Colab上で画像対応を直接テストする場合は、`/api/generate` ではなく、サイトと同じ `/api/chat` で確認すると切り分けしやすいです。

```python
import base64
from pathlib import Path

import requests

MODEL = "gemma4:e2b"
IMAGE_PATH = "/content/test.jpg"

image_base64 = base64.b64encode(Path(IMAGE_PATH).read_bytes()).decode("utf-8")

res = requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": MODEL,
        "stream": False,
        "messages": [
            {
                "role": "user",
                "content": "この画像を見て、短く説明して。",
                "images": [image_base64],
            }
        ],
    },
    timeout=300,
)

res.raise_for_status()
print(res.json()["message"]["content"])
```
