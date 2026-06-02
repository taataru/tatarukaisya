const STORAGE_KEY = "ai-cloud-gemma4-config";
const REQUEST_TIMEOUT_MS = 300000;

const composer = document.querySelector("#composer");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messages");
const sendButton = document.querySelector(".send-button");
const chipButtons = document.querySelectorAll(".prompt-chips button");
const threadButtons = document.querySelectorAll(".chat-thread");
const endpointInput = document.querySelector("#endpointInput");
const apiMode = document.querySelector("#apiMode");
const modelInput = document.querySelector("#modelInput");
const saveConnectionButton = document.querySelector("#saveConnection");
const testConnectionButton = document.querySelector("#testConnection");
const connectionStatus = document.querySelector("#connectionStatus");
const connectionLabel = document.querySelector("#connectionLabel");
const connectionDot = document.querySelector("#connectionDot");
const newChatButton = document.querySelector(".new-chat");

let conversationHistory = [];

const resizeInput = () => {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 138)}px`;
};

const getTime = () => {
  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
};

const setSendState = () => {
  sendButton.disabled = input.value.trim().length === 0;
};

const escapeHtml = (value) => {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
};

const createMessage = (role, text) => {
  const article = document.createElement("article");
  article.className = `message ${role === "user" ? "user-message" : "assistant-message"}`;

  if (role !== "user") {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "G4";
    article.append(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = `
    <div class="bubble-head">
      <strong>${role === "user" ? "You" : "Gemma4"}</strong>
      <span>${getTime()}</span>
    </div>
    <p>${escapeHtml(text)}</p>
  `;
  article.append(bubble);
  return article;
};

const createTyping = () => {
  const article = document.createElement("article");
  article.className = "message assistant-message typing";
  article.innerHTML = `
    <div class="avatar">G4</div>
    <div class="bubble">
      <div class="bubble-head">
        <strong>Gemma4</strong>
        <span>${getTime()}</span>
      </div>
      <p>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </p>
    </div>
  `;
  return article;
};

const scrollToLatest = () => {
  messages.scrollTop = messages.scrollHeight;
};

const setConnectionStatus = (state, text) => {
  connectionStatus.textContent = text;
  connectionStatus.className = `status-pill is-${state}`;
  connectionLabel.textContent = text;
  connectionDot.className = `is-${state}`;
};

const loadConfig = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    endpointInput.value = saved.endpoint || "";
    apiMode.value = saved.mode || "ollama";
    modelInput.value = saved.model || "gemma4:26b";
  } catch {
    endpointInput.value = "";
    apiMode.value = "ollama";
    modelInput.value = "gemma4:26b";
  }

  setConnectionStatus(endpointInput.value ? "saved" : "idle", endpointInput.value ? "保存済み" : "未設定");
};

const getConfig = () => ({
  endpoint: endpointInput.value.trim(),
  mode: apiMode.value,
  model: modelInput.value.trim() || "gemma4:26b",
});

const saveConfig = () => {
  const config = getConfig();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  return config;
};

const normalizeEndpoint = (endpoint) => {
  let value = endpoint.trim();
  if (!value) {
    throw new Error("trycloudflare URLを入力してください。");
  }

  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("URLは http または https で始めてください。");
  }

  if (window.location.protocol === "https:" && url.protocol !== "https:") {
    throw new Error("GitHub Pagesでは https のtrycloudflare URLを使ってください。");
  }

  return url;
};

const makeApiUrl = (endpoint, mode) => {
  const url = normalizeEndpoint(endpoint);

  if (mode === "openai" && !url.pathname.endsWith("/v1/chat/completions")) {
    url.pathname = `${url.pathname.replace(/\/$/, "")}/v1/chat/completions`;
  }

  if (mode === "ollama" && !url.pathname.endsWith("/api/chat")) {
    url.pathname = `${url.pathname.replace(/\/$/, "")}/api/chat`;
  }

  return url.toString();
};

const buildRequestBody = ({ mode, model }, message, history) => {
  const apiHistory = history.slice(-12);

  if (mode === "openai") {
    return {
      model,
      stream: false,
      messages: [
        {
          role: "system",
          content: "あなたはGemma4です。日本語で簡潔に、必要な時だけ詳しく答えてください。",
        },
        ...apiHistory,
        { role: "user", content: message },
      ],
    };
  }

  if (mode === "ollama") {
    return {
      model,
      stream: false,
      keep_alive: "30m",
      messages: [...apiHistory, { role: "user", content: message }],
    };
  }

  return {
    model,
    message,
    prompt: message,
    history: apiHistory,
  };
};

const readContent = (content) => {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map((item) => readContent(item?.text || item?.content || item)).join("");
  }
  if (content && typeof content === "object") {
    return readContent(content.text || content.content || content.value || "");
  }
  return "";
};

const cleanReplyText = (text) => {
  return text
    .replace(/<\|channel\>thought[\s\S]*?<channel\|>/g, "")
    .replace(/<\|channel\>final\s*/g, "")
    .trim();
};

const extractReply = (data) => {
  if (typeof data === "string") {
    const trimmed = data.trim();
    const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
    for (let index = lines.length - 1; index >= 0; index -= 1) {
      try {
        const parsed = JSON.parse(lines[index]);
        const reply = extractReply(parsed);
        if (reply) return reply;
      } catch {
        break;
      }
    }
    return trimmed;
  }

  const candidates = [
    data?.reply,
    data?.response,
    data?.text,
    data?.answer,
    data?.content,
    data?.message?.content,
    typeof data?.message === "string" ? data.message : "",
    data?.choices?.[0]?.message?.content,
    data?.choices?.[0]?.text,
    data?.output?.[0]?.content,
  ];

  for (const candidate of candidates) {
    const text = readContent(candidate).trim();
    if (text) return text;
  }

  return data ? JSON.stringify(data, null, 2) : "";
};

const fetchWithTimeout = async (url, options, timeoutMs = REQUEST_TIMEOUT_MS) => {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
};

const requestGemma = async (message, history = conversationHistory, config = saveConfig()) => {
  const url = makeApiUrl(config.endpoint, config.mode);
  const body = buildRequestBody(config, message, history);

  const response = await fetchWithTimeout(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await response.json() : await response.text();

  if (!response.ok) {
    const detail = extractReply(data);
    throw new Error(detail || `接続先が ${response.status} を返しました。`);
  }

  const reply = cleanReplyText(extractReply(data));
  if (!reply) {
    throw new Error("接続先から空の応答が返りました。");
  }

  return reply;
};

const formatConnectionError = (error) => {
  if (error.name === "AbortError") {
    return "接続がタイムアウトしました。trycloudflare URLとGemma4サーバーの起動状態を確認してください。";
  }

  if (error.name === "TypeError") {
    return "接続できませんでした。GitHub Pagesから使うには、Gemma4サーバー側でCORSのOPTIONS/POSTを許可してください。";
  }

  return error.message;
};

composer.addEventListener("submit", async (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const historyBeforeSend = conversationHistory.slice();
  messages.append(createMessage("user", text));
  conversationHistory.push({ role: "user", content: text });
  input.value = "";
  resizeInput();
  setSendState();
  scrollToLatest();

  const typing = createTyping();
  messages.append(typing);
  scrollToLatest();
  setConnectionStatus("testing", "送信中");

  try {
    const reply = await requestGemma(text, historyBeforeSend);
    conversationHistory.push({ role: "assistant", content: reply });
    typing.replaceWith(createMessage("assistant", reply));
    setConnectionStatus("connected", "接続OK");
  } catch (error) {
    typing.replaceWith(createMessage("assistant", formatConnectionError(error)));
    setConnectionStatus("error", "接続エラー");
  }

  scrollToLatest();
});

input.addEventListener("input", () => {
  resizeInput();
  setSendState();
});

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.textContent;
    input.focus();
    resizeInput();
    setSendState();
  });
});

threadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    threadButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
  });
});

[endpointInput, apiMode, modelInput].forEach((field) => {
  field.addEventListener("change", () => {
    saveConfig();
    setConnectionStatus("saved", "保存済み");
  });

  field.addEventListener("input", () => {
    setConnectionStatus("editing", "編集中");
  });
});

saveConnectionButton.addEventListener("click", () => {
  try {
    const config = saveConfig();
    if (config.endpoint) {
      endpointInput.value = normalizeEndpoint(config.endpoint).toString();
      saveConfig();
    }
    setConnectionStatus(config.endpoint ? "saved" : "idle", config.endpoint ? "保存済み" : "未設定");
  } catch (error) {
    setConnectionStatus("error", "URLエラー");
    messages.append(createMessage("assistant", error.message));
    scrollToLatest();
  }
});

testConnectionButton.addEventListener("click", async () => {
  setConnectionStatus("testing", "テスト中");

  try {
    await requestGemma("接続テストです。短くOKと返してください。", []);
    setConnectionStatus("connected", "接続OK");
  } catch (error) {
    setConnectionStatus("error", "接続エラー");
    messages.append(createMessage("assistant", formatConnectionError(error)));
    scrollToLatest();
  }
});

newChatButton.addEventListener("click", () => {
  conversationHistory = [];
  messages.innerHTML = "";
  messages.append(createMessage("assistant", "新しい会話を始めました。Gemma4へ送る内容を入力してください。"));
  input.focus();
  scrollToLatest();
});

loadConfig();

if (window.lucide) {
  window.lucide.createIcons();
}

resizeInput();
setSendState();
