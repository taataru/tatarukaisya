const STORAGE_KEY = "ai-cloud-gemma4-config";
const SIDEBAR_STORAGE_KEY = "ai-cloud-sidebar-collapsed";
const PERSONA_STORAGE_KEY = "ai-cloud-persona";
const CHAT_SESSIONS_STORAGE_KEY = "ai-cloud-chat-sessions";
const CURRENT_SESSION_STORAGE_KEY = "ai-cloud-current-session";
const DAILY_QUOTA_STORAGE_KEY = "ai-cloud-daily-quota";
const REQUEST_TIMEOUT_MS = 600000;
const HISTORY_LIMIT = 6;
const SESSION_LIMIT = 30;
const MESSAGE_LIMIT = 100;
const DAILY_CONVERSATION_TARGET = 20;
const MAX_IMAGES = 3;
const MAX_IMAGE_EDGE = 1024;
const IMAGE_QUALITY = 0.78;

const composer = document.querySelector("#composer");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messages");
const sendButton = document.querySelector(".send-button");
const attachImageButton = document.querySelector("#attachImageButton");
const imageInput = document.querySelector("#imageInput");
const attachmentPreview = document.querySelector("#attachmentPreview");
const chipButtons = document.querySelectorAll(".prompt-chips button");
const chatList = document.querySelector(".chat-list");
const endpointInput = document.querySelector("#endpointInput");
const modelInput = document.querySelector("#modelInput");
const testConnectionButton = document.querySelector("#testConnection");
const connectionStatus = document.querySelector("#connectionStatus");
const connectionLabel = document.querySelector("#connectionLabel");
const connectionDot = document.querySelector("#connectionDot");
const newChatButton = document.querySelector(".new-chat");
const sidebarToggle = document.querySelector("#sidebarToggle");
const personaModal = document.querySelector("#personaModal");
const personaForm = document.querySelector("#personaForm");
const personaOther = document.querySelector("#personaOther");
const closePersonaButton = document.querySelector("#closePersona");
const cancelPersonaButton = document.querySelector("#cancelPersona");
const dailyQuota = document.querySelector("#dailyQuota");
const quotaCount = document.querySelector("#quotaCount");
const quotaState = document.querySelector("#quotaState");
const quotaProgress = document.querySelector("#quotaProgress");
const quotaClose = document.querySelector("#quotaClose");

let conversationHistory = [];
let chatSessions = [];
let currentSessionId = "";
let pendingImages = [];
let personaModalMode = "new-chat";
let quotaStateValue = {
  date: "",
  count: 0,
  dismissed: false,
};
let activePersona = {
  gender: "女性",
  relationship: "友達",
  personality: "やさしい",
  species: "人",
  other: "",
};

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

const nowIso = () => new Date().toISOString();

const getTodayKey = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatMessageTime = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return getTime();

  return new Intl.DateTimeFormat("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const formatSessionTime = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const setSendState = () => {
  sendButton.disabled = input.value.trim().length === 0 && pendingImages.length === 0;
};

const escapeHtml = (value) => {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
};

const sanitizeImages = (imagesValue) => {
  if (!Array.isArray(imagesValue)) return [];

  return imagesValue
    .filter((image) => typeof image?.dataUrl === "string" && image.dataUrl.startsWith("data:image/"))
    .map((image) => ({
      dataUrl: image.dataUrl,
      name: typeof image.name === "string" ? image.name.slice(0, 80) : "image",
      type: typeof image.type === "string" ? image.type : "image/jpeg",
    }))
    .slice(0, MAX_IMAGES);
};

const stripDataUrlPrefix = (dataUrl) => dataUrl.split(",")[1] || dataUrl;

const createMessage = (role, text, createdAt = nowIso(), imagesValue = []) => {
  const imageList = sanitizeImages(imagesValue);
  const article = document.createElement("article");
  article.className = `message ${role === "user" ? "user-message" : "assistant-message"}`;

  if (role !== "user") {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerHTML = `<img src="assets/ai-avatar.png" alt="" />`;
    article.append(avatar);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  const imageMarkup = imageList.length
    ? `<div class="bubble-images">${imageList
        .map((image) => `<img src="${image.dataUrl}" alt="${escapeHtml(image.name)}" />`)
        .join("")}</div>`
    : "";
  bubble.innerHTML = `
    <div class="bubble-head">
      <strong>${role === "user" ? "You" : "たるこ"}</strong>
      <span>${formatMessageTime(createdAt)}</span>
    </div>
    ${imageMarkup}
    <p>${escapeHtml(text)}</p>
  `;
  article.append(bubble);
  return article;
};

const createTyping = () => {
  const article = document.createElement("article");
  article.className = "message assistant-message typing";
  article.innerHTML = `
    <div class="avatar"><img src="assets/ai-avatar.png" alt="" /></div>
    <div class="bubble">
      <div class="bubble-head">
        <strong>たるこ</strong>
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

const renderIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const createEmptyQuota = () => ({
  date: getTodayKey(),
  count: 0,
  dismissed: false,
});

const saveDailyQuota = () => {
  try {
    localStorage.setItem(DAILY_QUOTA_STORAGE_KEY, JSON.stringify(quotaStateValue));
  } catch {
    localStorage.removeItem(DAILY_QUOTA_STORAGE_KEY);
  }
};

const loadDailyQuota = () => {
  try {
    const savedValue = JSON.parse(localStorage.getItem(DAILY_QUOTA_STORAGE_KEY) || "{}");
    const saved = savedValue && typeof savedValue === "object" ? savedValue : {};
    const savedCount = Number(saved.count);
    quotaStateValue = {
      ...createEmptyQuota(),
      ...saved,
      count: Number.isFinite(savedCount) ? savedCount : 0,
    };
  } catch {
    quotaStateValue = createEmptyQuota();
  }

  if (quotaStateValue.date !== getTodayKey()) {
    quotaStateValue = createEmptyQuota();
    saveDailyQuota();
  }
};

const renderDailyQuota = () => {
  const count = Math.max(0, quotaStateValue.count);
  const visibleCount = Math.min(count, DAILY_CONVERSATION_TARGET);
  const remaining = Math.max(0, DAILY_CONVERSATION_TARGET - count);
  const ratio = Math.min(100, Math.round((count / DAILY_CONVERSATION_TARGET) * 100));
  const isComplete = count >= DAILY_CONVERSATION_TARGET;

  dailyQuota.hidden = Boolean(quotaStateValue.dismissed);
  dailyQuota.classList.toggle("is-complete", isComplete);
  quotaCount.textContent = `${visibleCount}/${DAILY_CONVERSATION_TARGET}`;
  quotaState.textContent = isComplete ? "達成" : `あと${remaining}回`;
  quotaProgress.style.width = `${ratio}%`;
};

const incrementDailyQuota = () => {
  if (quotaStateValue.date !== getTodayKey()) {
    quotaStateValue = createEmptyQuota();
  }

  quotaStateValue.count += 1;
  saveDailyQuota();
  renderDailyQuota();
};

const readFileAsDataUrl = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(new Error("画像を読み込めませんでした。")));
    reader.readAsDataURL(file);
  });
};

const loadImageElement = (dataUrl) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => reject(new Error("画像を表示できませんでした。")));
    image.src = dataUrl;
  });
};

const compressImageFile = async (file) => {
  if (!file.type.startsWith("image/")) {
    throw new Error("画像ファイルだけ添付できます。");
  }

  const sourceDataUrl = await readFileAsDataUrl(file);
  const image = await loadImageElement(sourceDataUrl);
  const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  return {
    dataUrl: canvas.toDataURL("image/jpeg", IMAGE_QUALITY),
    name: file.name || "image.jpg",
    type: "image/jpeg",
  };
};

const renderAttachmentPreview = () => {
  attachmentPreview.innerHTML = pendingImages
    .map(
      (image, index) => `
        <div class="attachment-card">
          <img src="${image.dataUrl}" alt="${escapeHtml(image.name)}" />
          <span class="attachment-name">${escapeHtml(image.name)}</span>
          <button class="attachment-remove" type="button" data-index="${index}" aria-label="画像を外す" title="画像を外す">
            <i data-lucide="x"></i>
          </button>
        </div>
      `,
    )
    .join("");
  renderIcons();
  setSendState();
};

const clearPendingImages = () => {
  pendingImages = [];
  imageInput.value = "";
  renderAttachmentPreview();
};

const setSidebarCollapsed = (collapsed) => {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", collapsed ? "会話ログを開く" : "会話ログを閉じる");
  sidebarToggle.title = collapsed ? "会話ログを開く" : "会話ログを閉じる";
  sidebarToggle.innerHTML = `<i data-lucide="${collapsed ? "panel-left-open" : "panel-left-close"}"></i>`;
  localStorage.setItem(SIDEBAR_STORAGE_KEY, collapsed ? "1" : "0");
  renderIcons();
};

const loadSidebarState = () => {
  setSidebarCollapsed(localStorage.getItem(SIDEBAR_STORAGE_KEY) === "1");
};

const getCheckedValue = (name) => {
  return personaForm.querySelector(`input[name="${name}"]:checked`)?.value || "";
};

const setCheckedValue = (name, value) => {
  const input = [...personaForm.querySelectorAll(`input[name="${name}"]`)].find((item) => item.value === value);
  if (input) input.checked = true;
};

const readPersonaForm = () => ({
  gender: getCheckedValue("gender") || "女性",
  relationship: getCheckedValue("relationship") || "友達",
  personality: getCheckedValue("personality") || "やさしい",
  species: getCheckedValue("species") || "人",
  other: personaOther.value.trim().slice(0, 120),
});

const savePersona = (persona) => {
  activePersona = persona;
  localStorage.setItem(PERSONA_STORAGE_KEY, JSON.stringify(activePersona));
};

const loadPersona = () => {
  try {
    activePersona = {
      ...activePersona,
      ...JSON.parse(localStorage.getItem(PERSONA_STORAGE_KEY) || "{}"),
    };
  } catch {
    localStorage.removeItem(PERSONA_STORAGE_KEY);
  }
};

const syncPersonaForm = () => {
  setCheckedValue("gender", activePersona.gender);
  setCheckedValue("relationship", activePersona.relationship);
  setCheckedValue("personality", activePersona.personality);
  setCheckedValue("species", activePersona.species);
  personaOther.value = activePersona.other || "";
};

const openPersonaModal = (mode = "new-chat") => {
  personaModalMode = mode;
  syncPersonaForm();
  personaModal.classList.add("is-open");
  personaModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("persona-open");
  personaForm.querySelector("input:checked")?.focus();
};

const closePersonaModal = () => {
  personaModal.classList.remove("is-open");
  personaModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("persona-open");
};

const buildPersonaPrompt = () => {
  const base = `${activePersona.gender}/${activePersona.relationship}/${activePersona.personality}/${activePersona.species}`;
  const other = activePersona.other ? ` ${activePersona.other.slice(0, 120)}` : "";
  return `名前は必ず「たるこ」。AI設定:${base}.${other} 日本語で自然に短めに返答。`;
};

const createSessionId = () => {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const createTitle = (text) => {
  const title = text.replace(/\s+/g, " ").trim();
  return title ? title.slice(0, 26) : "新しい会話";
};

const normalizeStoredMessages = (messagesValue) => {
  if (!Array.isArray(messagesValue)) return [];

  return messagesValue
    .filter((message) => ["user", "assistant"].includes(message?.role) && typeof message?.content === "string")
    .map((message) => ({
      role: message.role,
      content: message.content,
      createdAt: message.createdAt || nowIso(),
      images: sanitizeImages(message.images),
    }))
    .slice(-MESSAGE_LIMIT);
};

const getCurrentSession = () => {
  return chatSessions.find((session) => session.id === currentSessionId) || null;
};

const stripSessionImages = (sessionsValue) => {
  return sessionsValue.map((session) => ({
    ...session,
    messages: session.messages.map((message) => ({
      ...message,
      images: [],
    })),
  }));
};

const persistChatSessions = () => {
  chatSessions = chatSessions
    .map((session) => ({
      ...session,
      messages: normalizeStoredMessages(session.messages),
    }))
    .slice(0, SESSION_LIMIT);

  try {
    localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify(chatSessions));
  } catch {
    const textOnlySessions = stripSessionImages(chatSessions);
    try {
      localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify(textOnlySessions));
      chatSessions = textOnlySessions;
    } catch {
      const compactSessions = textOnlySessions.slice(0, 8).map((session) => ({
        ...session,
        messages: session.messages.slice(-30),
      }));
      chatSessions = compactSessions;
      try {
        localStorage.setItem(CHAT_SESSIONS_STORAGE_KEY, JSON.stringify(compactSessions));
      } catch {
        localStorage.removeItem(CHAT_SESSIONS_STORAGE_KEY);
      }
    }
  }

  if (currentSessionId) {
    try {
      localStorage.setItem(CURRENT_SESSION_STORAGE_KEY, currentSessionId);
    } catch {
      localStorage.removeItem(CURRENT_SESSION_STORAGE_KEY);
    }
  } else {
    localStorage.removeItem(CURRENT_SESSION_STORAGE_KEY);
  }
};

const renderChatList = () => {
  chatList.innerHTML = "";

  chatSessions.forEach((session) => {
    const row = document.createElement("div");
    row.className = "chat-thread-row";

    const button = document.createElement("button");
    button.className = `chat-thread${session.id === currentSessionId ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.sessionId = session.id;
    button.innerHTML = `
      <span class="thread-title">${escapeHtml(session.title || "新しい会話")}</span>
      <span class="thread-meta">${escapeHtml(formatSessionTime(session.updatedAt))}</span>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.className = "chat-delete";
    deleteButton.type = "button";
    deleteButton.dataset.sessionId = session.id;
    deleteButton.setAttribute("aria-label", "会話を削除");
    deleteButton.title = "削除";
    deleteButton.innerHTML = `<i data-lucide="trash-2"></i>`;

    row.append(button, deleteButton);
    chatList.append(row);
  });

  renderIcons();
};

const renderConversation = () => {
  messages.innerHTML = "";
  conversationHistory.forEach((message) => {
    messages.append(createMessage(message.role, message.content, message.createdAt, message.images));
  });
  scrollToLatest();
};

const loadChatSessions = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(CHAT_SESSIONS_STORAGE_KEY) || "[]");
    chatSessions = Array.isArray(saved)
      ? saved
          .filter((session) => session?.id)
          .map((session) => ({
            id: session.id,
            title: session.title || "新しい会話",
            updatedAt: session.updatedAt || nowIso(),
            persona: session.persona || null,
            messages: normalizeStoredMessages(session.messages),
          }))
      : [];
  } catch {
    chatSessions = [];
  }

  currentSessionId = localStorage.getItem(CURRENT_SESSION_STORAGE_KEY) || chatSessions[0]?.id || "";
  if (!chatSessions.some((session) => session.id === currentSessionId)) {
    currentSessionId = chatSessions[0]?.id || "";
  }

  const session = getCurrentSession();
  if (session) {
    conversationHistory = normalizeStoredMessages(session.messages);
    if (session.persona) activePersona = { ...activePersona, ...session.persona };
  }

  renderChatList();
  renderConversation();
};

const selectChatSession = (sessionId) => {
  const session = chatSessions.find((item) => item.id === sessionId);
  if (!session) return;

  currentSessionId = session.id;
  conversationHistory = normalizeStoredMessages(session.messages);
  if (session.persona) {
    activePersona = { ...activePersona, ...session.persona };
    savePersona(activePersona);
  }
  persistChatSessions();
  renderChatList();
  renderConversation();
};

const deleteChatSession = (sessionId) => {
  const wasCurrentSession = sessionId === currentSessionId;
  chatSessions = chatSessions.filter((session) => session.id !== sessionId);

  if (wasCurrentSession) {
    currentSessionId = chatSessions[0]?.id || "";
    const nextSession = getCurrentSession();
    conversationHistory = nextSession ? normalizeStoredMessages(nextSession.messages) : [];
    if (nextSession?.persona) {
      activePersona = { ...activePersona, ...nextSession.persona };
      savePersona(activePersona);
    }
    renderConversation();
  }

  persistChatSessions();
  renderChatList();
};

const startChatSession = () => {
  const session = {
    id: createSessionId(),
    title: "新しい会話",
    updatedAt: nowIso(),
    persona: { ...activePersona },
    messages: [],
  };

  chatSessions.unshift(session);
  currentSessionId = session.id;
  conversationHistory = [];
  persistChatSessions();
  renderChatList();
  renderConversation();
};

const ensureChatSession = () => {
  let session = getCurrentSession();
  if (session) return session;

  startChatSession();
  session = getCurrentSession();
  return session;
};

const saveCurrentConversation = () => {
  const session = ensureChatSession();
  if (!session) return;

  session.messages = normalizeStoredMessages(conversationHistory);
  session.persona = { ...activePersona };
  session.updatedAt = nowIso();

  const firstUserMessage = session.messages.find((message) => message.role === "user");
  if (firstUserMessage) {
    session.title = createTitle(firstUserMessage.content);
  }

  chatSessions = [session, ...chatSessions.filter((item) => item.id !== session.id)];
  currentSessionId = session.id;
  persistChatSessions();
  renderChatList();
};

const loadConfig = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    endpointInput.value = saved.endpoint || "";
    modelInput.value = saved.model || "gemma4:e2b";
  } catch {
    endpointInput.value = "";
    modelInput.value = "gemma4:e2b";
  }

  setConnectionStatus(endpointInput.value ? "saved" : "idle", endpointInput.value ? "設定済み" : "未設定");
};

const getConfig = () => ({
  endpoint: endpointInput.value.trim(),
  mode: "ollama",
  model: modelInput.value.trim() || "gemma4:e2b",
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

const buildRequestBody = ({ mode, model }, message, history, imagesValue = []) => {
  const apiHistory = history
    .slice(-HISTORY_LIMIT)
    .filter((item) => ["user", "assistant"].includes(item.role) && item.content)
    .map((item) => ({
      role: item.role,
      content: item.content,
    }));
  const ollamaImages = sanitizeImages(imagesValue).map((image) => stripDataUrlPrefix(image.dataUrl));
  const userMessage = {
    role: "user",
    content: message,
  };

  if (ollamaImages.length) {
    userMessage.images = ollamaImages;
  }

  if (mode === "openai") {
    return {
      model,
      stream: false,
      messages: [
        {
          role: "system",
          content: buildPersonaPrompt(),
        },
        ...apiHistory,
        userMessage,
      ],
    };
  }

  if (mode === "ollama") {
    return {
      model,
      stream: false,
      keep_alive: "30m",
      think: true,
      options: {
        num_ctx: 4096,
        num_predict: 2048,
        temperature: 0.8,
      },
      messages: [
        {
          role: "system",
          content: buildPersonaPrompt(),
        },
        ...apiHistory,
        userMessage,
      ],
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

const requestGemma = async (message, imagesValue = [], history = conversationHistory, config = saveConfig()) => {
  const url = new URL(makeApiUrl(config.endpoint, config.mode));
  if (currentSessionId) {
    url.searchParams.set("chat_id", currentSessionId);
  }
  const body = buildRequestBody(config, message, history, imagesValue);

  const response = await fetchWithTimeout(url.toString(), {
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
    return "接続がタイムアウトしました。trycloudflare URLとOllamaの起動状態を確認してください。";
  }

  if (error.name === "TypeError") {
    return "接続できませんでした。Colab側のOllamaとtrycloudflare URLを確認してください。";
  }

  return error.message;
};

composer.addEventListener("submit", async (event) => {
  event.preventDefault();

  const typedText = input.value.trim();
  const attachedImages = pendingImages.slice();
  if (!typedText && attachedImages.length === 0) return;
  const text = typedText || "この画像を見て";

  ensureChatSession();
  const historyBeforeSend = conversationHistory.slice();
  const userMessage = {
    role: "user",
    content: text,
    createdAt: nowIso(),
    images: attachedImages,
  };
  messages.append(createMessage(userMessage.role, userMessage.content, userMessage.createdAt, userMessage.images));
  conversationHistory.push(userMessage);
  saveCurrentConversation();
  incrementDailyQuota();
  input.value = "";
  clearPendingImages();
  resizeInput();
  setSendState();
  scrollToLatest();

  const typing = createTyping();
  messages.append(typing);
  scrollToLatest();
  setConnectionStatus("testing", "送信中");

  try {
    const reply = await requestGemma(text, attachedImages, historyBeforeSend);
    const assistantMessage = { role: "assistant", content: reply, createdAt: nowIso() };
    conversationHistory.push(assistantMessage);
    typing.replaceWith(createMessage(assistantMessage.role, assistantMessage.content, assistantMessage.createdAt));
    saveCurrentConversation();
    setConnectionStatus("connected", "接続OK");
  } catch (error) {
    const errorText = formatConnectionError(error);
    typing.replaceWith(createMessage("assistant", errorText));
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

chatList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".chat-delete");
  if (deleteButton) {
    deleteChatSession(deleteButton.dataset.sessionId);
    return;
  }

  const button = event.target.closest(".chat-thread");
  if (!button) return;
  selectChatSession(button.dataset.sessionId);
});

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
});

[endpointInput, modelInput].forEach((field) => {
  field.addEventListener("change", () => {
    saveConfig();
    setConnectionStatus("saved", "設定済み");
  });

  field.addEventListener("input", () => {
    saveConfig();
    setConnectionStatus("editing", "編集中");
  });
});

attachImageButton.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener("change", async () => {
  const files = [...imageInput.files];
  const availableSlots = MAX_IMAGES - pendingImages.length;
  const selectedFiles = files.slice(0, Math.max(0, availableSlots));

  if (selectedFiles.length === 0) {
    imageInput.value = "";
    return;
  }

  setConnectionStatus("testing", "画像処理中");

  try {
    const compressedImages = [];
    for (const file of selectedFiles) {
      compressedImages.push(await compressImageFile(file));
    }
    pendingImages = [...pendingImages, ...compressedImages].slice(0, MAX_IMAGES);
    renderAttachmentPreview();
    setConnectionStatus(endpointInput.value ? "saved" : "idle", endpointInput.value ? "設定済み" : "未設定");
  } catch (error) {
    messages.append(createMessage("assistant", error.message));
    setConnectionStatus("error", "画像エラー");
    scrollToLatest();
  } finally {
    imageInput.value = "";
  }
});

attachmentPreview.addEventListener("click", (event) => {
  const button = event.target.closest(".attachment-remove");
  if (!button) return;
  const index = Number(button.dataset.index);
  pendingImages = pendingImages.filter((_, itemIndex) => itemIndex !== index);
  renderAttachmentPreview();
});

quotaClose.addEventListener("click", () => {
  quotaStateValue.dismissed = true;
  saveDailyQuota();
  renderDailyQuota();
});

testConnectionButton.addEventListener("click", async () => {
  setConnectionStatus("testing", "テスト中");

  try {
    await requestGemma("接続テストです。短くOKと返してください。", [], []);
    setConnectionStatus("connected", "接続OK");
  } catch (error) {
    setConnectionStatus("error", "接続エラー");
    messages.append(createMessage("assistant", formatConnectionError(error)));
    scrollToLatest();
  }
});

newChatButton.addEventListener("click", () => {
  openPersonaModal("new-chat");
});

personaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  savePersona(readPersonaForm());
  if (personaModalMode === "new-chat" || !getCurrentSession()) {
    startChatSession();
    input.value = "";
    clearPendingImages();
    resizeInput();
    setSendState();
    scrollToLatest();
  } else {
    const session = getCurrentSession();
    session.persona = { ...activePersona };
    persistChatSessions();
    renderChatList();
  }
  closePersonaModal();
  input.focus();
});

closePersonaButton.addEventListener("click", closePersonaModal);
cancelPersonaButton.addEventListener("click", closePersonaModal);

personaModal.addEventListener("click", (event) => {
  if (event.target === personaModal) {
    closePersonaModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && personaModal.classList.contains("is-open")) {
    closePersonaModal();
  }
});

loadConfig();
loadPersona();
loadDailyQuota();
loadChatSessions();
loadSidebarState();
renderDailyQuota();
renderIcons();

resizeInput();
setSendState();
window.requestAnimationFrame(() => openPersonaModal("startup"));
