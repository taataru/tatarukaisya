# Colab one-cell complete setup for Taruko.
# Runs Ollama, saves only user messages to Google Drive, and exposes a proxy with cloudflared.

import datetime
import json
import os
import re
import subprocess
import threading
import time
from pathlib import Path

import requests

MODEL = "gemma4:e2b"
OLLAMA_URL = "http://localhost:11434"
OLLAMA_BIN = "/usr/local/bin/ollama"
PROXY_PORT = 7860
PROXY_URL = f"http://localhost:{PROXY_PORT}"
DRIVE_CHAT_DIR = Path("/content/drive/MyDrive/たるこ/chats")
PUBLIC_CHAT_TEST = True


def run(command, **kwargs):
    print("$", " ".join(command))
    return subprocess.run(command, check=True, **kwargs)


def wait_until(name, check, timeout=120, interval=1):
    deadline = time.time() + timeout
    while time.time() < deadline:
        if check():
            print(f"OK: {name}")
            return
        time.sleep(interval)
    raise RuntimeError(f"{name} が時間内に起動しませんでした")


def safe_chat_id(value):
    value = str(value or "unknown_chat")
    value = re.sub(r"[^a-zA-Z0-9_.-]+", "_", value).strip("._-")
    return value[:120] or "unknown_chat"


print("Google Driveをマウントします")
from google.colab import drive

drive.mount("/content/drive")
DRIVE_CHAT_DIR.mkdir(parents=True, exist_ok=True)
print("保存先:", DRIVE_CHAT_DIR)

print("必要なパッケージを入れます")
run(["apt-get", "update", "-y"])
run(["apt-get", "install", "-y", "zstd", "curl", "wget"])
run(["pip", "install", "-q", "fastapi", "uvicorn"])

print("Ollamaをインストールします")
subprocess.run("curl -fsSL https://ollama.com/install.sh | sh", shell=True, check=True)

os.environ["OLLAMA_ORIGINS"] = "*"
os.environ["OLLAMA_HOST"] = "0.0.0.0:11434"

old_ollama_proc = globals().get("ollama_proc")
if old_ollama_proc is not None and old_ollama_proc.poll() is None:
    old_ollama_proc.terminate()
subprocess.run(["pkill", "-f", "ollama serve"], check=False)
time.sleep(2)

ollama_proc = subprocess.Popen(
    [OLLAMA_BIN, "serve"],
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
    env=os.environ.copy(),
)


def ollama_ready():
    try:
        return requests.get(f"{OLLAMA_URL}/api/version", timeout=3).ok
    except Exception:
        return False


wait_until("Ollama", ollama_ready, timeout=120)
run([OLLAMA_BIN, "pull", MODEL])

print("cloudflaredをインストールします")
run(
    [
        "wget",
        "-q",
        "-O",
        "cloudflared-linux-amd64.deb",
        "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb",
    ]
)
run(["dpkg", "-i", "cloudflared-linux-amd64.deb"])
run(["cloudflared", "--version"])

from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def save_user_message(chat_id, body):
    messages = body.get("messages") if isinstance(body, dict) else []
    if not isinstance(messages, list):
        return

    last_user = next((item for item in reversed(messages) if item.get("role") == "user"), None)
    if not last_user:
        return

    images = last_user.get("images") or []
    record = {
        "time": datetime.datetime.now(datetime.timezone.utc).astimezone().isoformat(),
        "chat_id": chat_id,
        "role": "user",
        "content": last_user.get("content", ""),
        "has_image": bool(images),
        "image_count": len(images) if isinstance(images, list) else 0,
        "model": body.get("model", MODEL),
    }

    log_path = DRIVE_CHAT_DIR / f"{safe_chat_id(chat_id)}.jsonl"
    with log_path.open("a", encoding="utf-8") as file:
        file.write(json.dumps(record, ensure_ascii=False) + "\n")


@app.get("/api/version")
async def version_proxy():
    upstream = requests.get(f"{OLLAMA_URL}/api/version", timeout=30)
    return Response(
        content=upstream.content,
        status_code=upstream.status_code,
        media_type=upstream.headers.get("content-type", "application/json"),
    )


@app.post("/api/chat")
async def chat_proxy(request: Request):
    body = await request.json()
    if not isinstance(body, dict):
        return Response(
            content=json.dumps({"error": "JSON object is required"}, ensure_ascii=False),
            status_code=400,
            media_type="application/json",
        )

    chat_id = request.query_params.get("chat_id") or body.pop("chat_id", None) or "unknown_chat"

    save_user_message(chat_id, body)

    upstream = requests.post(
        f"{OLLAMA_URL}/api/chat",
        json=body,
        timeout=600,
    )
    return Response(
        content=upstream.content,
        status_code=upstream.status_code,
        media_type=upstream.headers.get("content-type", "application/json"),
    )


old_api_server = globals().get("api_server")
if old_api_server is not None:
    old_api_server.should_exit = True
    time.sleep(2)

api_server = uvicorn.Server(
    uvicorn.Config(app, host="0.0.0.0", port=PROXY_PORT, log_level="info")
)
api_thread = threading.Thread(target=api_server.run, daemon=True)
api_thread.start()


def proxy_ready():
    try:
        return requests.get(f"{PROXY_URL}/api/version", timeout=3).ok
    except Exception:
        return False


wait_until("Drive保存つき中継API", proxy_ready, timeout=60)

old_tunnel_proc = globals().get("tunnel_proc")
if old_tunnel_proc is not None and old_tunnel_proc.poll() is None:
    old_tunnel_proc.terminate()
subprocess.run(["pkill", "-f", "cloudflared tunnel"], check=False)
time.sleep(2)

public_url_box = {"url": None}
tunnel_proc = subprocess.Popen(
    [
        "cloudflared",
        "tunnel",
        "--protocol",
        "http2",
        "--url",
        PROXY_URL,
        "--http-host-header",
        f"localhost:{PROXY_PORT}",
    ],
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True,
    bufsize=1,
)


def read_tunnel_output():
    pattern = re.compile(r"https://[-a-zA-Z0-9.]+\.trycloudflare\.com")
    for line in tunnel_proc.stdout:
        print(line.rstrip())
        match = pattern.search(line)
        if match and public_url_box["url"] is None:
            public_url_box["url"] = match.group(0)


threading.Thread(target=read_tunnel_output, daemon=True).start()

deadline = time.time() + 120
while time.time() < deadline:
    if public_url_box["url"]:
        break
    if tunnel_proc.poll() is not None:
        raise RuntimeError("cloudflaredが終了しました。上のログを確認してください")
    time.sleep(1)
else:
    raise RuntimeError("trycloudflare URLを取得できませんでした")

PUBLIC_URL = public_url_box["url"]

print("\nたるこに貼るURL:", PUBLIC_URL)
print("モデル:", MODEL)
print("保存先:", DRIVE_CHAT_DIR)


def public_request(method, path, timeout=60, wait_seconds=180, **kwargs):
    url = f"{PUBLIC_URL}{path}"
    deadline = time.time() + wait_seconds
    last_error = None

    while time.time() < deadline:
        if tunnel_proc.poll() is not None:
            raise RuntimeError("cloudflaredが終了しました。上のログを確認してください")

        try:
            response = requests.request(method, url, timeout=timeout, **kwargs)
            response.raise_for_status()
            return response
        except requests.RequestException as error:
            last_error = error
            print(f"公開URLの準備待ち: {type(error).__name__}")
            time.sleep(5)

    raise RuntimeError(f"公開URLに接続できませんでした: {last_error}")


print("\n公開URLを確認します")
version_test = public_request("GET", "/api/version")
print("/api/version:", version_test.text[:200])

cors_test = public_request(
    "OPTIONS",
    "/api/chat",
    headers={
        "Origin": "https://example.github.io",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
    },
    timeout=60,
)
print("CORS status:", cors_test.status_code)
print("CORS allow-origin:", cors_test.headers.get("access-control-allow-origin"))

if PUBLIC_CHAT_TEST:
    chat_test = public_request(
        "POST",
        "/api/chat?chat_id=colab_test",
        json={
            "model": MODEL,
            "stream": False,
            "keep_alive": "30m",
            "think": True,
            "options": {
                "num_ctx": 4096,
                "num_predict": 1024,
                "temperature": 0.8,
            },
            "messages": [
                {"role": "user", "content": "短くOKと返して。"},
            ],
        },
        timeout=600,
        wait_seconds=900,
    )
    data = chat_test.json()
    print("chat test:", data.get("message", {}).get("content") or data.get("response") or data)

print("\n完了。このURLをたるこの trycloudflare URL 欄に貼ってください。")
