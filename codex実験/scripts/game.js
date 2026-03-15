(function () {
  const G = window.VoxelGame;
  const el = {
    root: document.getElementById("game-root"),
    coords: document.getElementById("coords"),
    chunk: document.getElementById("chunk"),
    biomeTime: document.getElementById("biome-time"),
    health: document.getElementById("health"),
    world: document.getElementById("world"),
    enemies: document.getElementById("enemies"),
    town: document.getElementById("town"),
    nest: document.getElementById("nest"),
    breakInfo: document.getElementById("break"),
    wand: document.getElementById("wand"),
    msg: document.getElementById("message"),
    center: document.getElementById("center"),
    crosshair: document.getElementById("crosshair"),
    inventory: document.getElementById("inventory"),
    hotbar: document.getElementById("hotbar"),
    grid: document.getElementById("inventory-grid"),
    craftBtn: document.getElementById("craft-btn"),
    craftStatus: document.getElementById("craft-status"),
    prevRecipe: document.getElementById("prev-recipe"),
    nextRecipe: document.getElementById("next-recipe"),
    recipeIcon: document.getElementById("recipe-icon"),
    recipeName: document.getElementById("recipe-name"),
    recipeCost: document.getElementById("recipe-cost"),
    handView: document.getElementById("hand-view"),
    mobileControls: document.getElementById("mobile-controls"),
    touchUp: document.getElementById("touch-up"),
    touchLeft: document.getElementById("touch-left"),
    touchDown: document.getElementById("touch-down"),
    touchRight: document.getElementById("touch-right"),
    touchJump: document.getElementById("touch-jump"),
    touchAttack: document.getElementById("touch-attack"),
    touchPlace: document.getElementById("touch-place"),
    touchUse: document.getElementById("touch-use"),
    touchInventory: document.getElementById("touch-inventory"),
    lookPad: document.getElementById("look-pad")
  };

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.Fog(0x87ceeb, 70, 260);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200);
  camera.rotation.order = "YXZ";

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  el.root.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.62);
  scene.add(ambientLight);
  const sunLight = new THREE.DirectionalLight(0xffffff, 1.0);
  sunLight.position.set(120, 180, 80);
  scene.add(sunLight);

  const worldState = { time: G.DAY_DURATION * 0.32, cleansedNests: 0, frontierLevel: 0, lanternActive: false, currentBiomeKey: null, currentTownKey: null };
  const brokenNests = new Set();
  const worldGen = new G.WorldGenerator(20260316, brokenNests);
  const chunkRenderer = new G.ChunkRenderer(scene);
  const chunkMgr = new G.ChunkManager(worldGen, chunkRenderer);
  const inventory = new G.Inventory(36);
  const messageState = { text: "木を集めて木の剣を作ろう", until: performance.now() + 5000 };
  const detectorState = { timer: 0, result: null, revealUntil: 0 };
  const player = {
    pos: new THREE.Vector3(0.5, worldGen.getSurfaceHeight(0, 0) + 2, 0.5),
    vel: new THREE.Vector3(),
    yaw: 0,
    pitch: 0,
    onGround: false,
    hp: G.PLAYER_CONFIG.baseMaxHp,
    maxHp: G.PLAYER_CONFIG.baseMaxHp,
    invulnerable: 0
  };
  const input = { w: false, s: false, a: false, d: false, jumpQueued: false, leftDown: false };
  const mobileState = { enabled: matchMedia("(max-width: 720px), (pointer: coarse)").matches, looking: false, lastX: 0, lastY: 0 };
  const breakState = { key: null, progress: 0, duration: 0 };
  let pointerLocked = false;
  let inventoryOpen = false;
  let lastTime = performance.now();
  let streamTimer = 0;
  let actionCooldown = 0;
  let currentTarget = null;
  let currentRecipeIndex = 0;

  function pushMessage(text, seconds) {
    messageState.text = text;
    messageState.until = performance.now() + (seconds || 4) * 1000;
  }

  function selectedSlot() { return inventory.getSlot(inventory.selectedHotbarIndex); }
  function selectedItemDef() {
    const slot = selectedSlot();
    return slot ? G.ITEMS[slot.itemKey] || null : null;
  }
  function updatePlayerMaxHp() {
    const tier = G.getFrontierTier(worldState.cleansedNests);
    worldState.frontierLevel = tier.level;
    const amuletBonus = inventory.hasItem("magic_amulet") ? G.ITEMS.magic_amulet.bonusHp : 0;
    const next = G.PLAYER_CONFIG.baseMaxHp + tier.bonusHp + amuletBonus;
    if (next !== player.maxHp) {
      const delta = next - player.maxHp;
      player.maxHp = next;
      player.hp = G.clamp(player.hp + Math.max(delta, 0), 1, player.maxHp);
    }
  }
  function healPlayer(amount, reason) {
    const before = player.hp;
    player.hp = G.clamp(player.hp + amount, 0, player.maxHp);
    if (player.hp > before) {
      pushMessage(`${reason}で HP が ${player.hp - before} 回復`, 2.6);
      return true;
    }
    return false;
  }

  function findSafeSpawn() {
    const town = worldGen.getTownAt(0, 0);
    if (town) {
      const y = worldGen.getSurfaceHeight(town.centerX, town.centerZ) + 1;
      return new THREE.Vector3(town.centerX + 0.5, y, town.centerZ + 0.5);
    }
    for (let radius = 0; radius <= 80; radius += 1) {
      const steps = Math.max(1, radius * 8);
      for (let i = 0; i < steps; i += 1) {
        const angle = (i / steps) * Math.PI * 2;
        const wx = Math.round(Math.cos(angle) * radius);
        const wz = Math.round(Math.sin(angle) * radius);
        const surface = worldGen.getSurfaceHeight(wx, wz);
        if (surface < 58) continue;
        chunkMgr.update(new THREE.Vector3(wx + 0.5, surface + 2, wz + 0.5));
        const feet = chunkMgr.getBlock(wx, surface + 1, wz);
        const head = chunkMgr.getBlock(wx, surface + 2, wz);
        const floor = chunkMgr.getBlock(wx, surface, wz);
        if (!G.BlockData.isSolid(feet) && !G.BlockData.isSolid(head) && G.BlockData.isSolid(floor)) return new THREE.Vector3(wx + 0.5, surface + 1, wz + 0.5);
      }
    }
    return new THREE.Vector3(0.5, worldGen.getSurfaceHeight(0, 0) + 2, 0.5);
  }
  function respawnPlayer() {
    const spawn = findSafeSpawn();
    player.pos.copy(spawn);
    player.vel.set(0, 0, 0);
    player.hp = player.maxHp;
    player.invulnerable = 1.2;
    pushMessage("倒れたが、安全な場所に戻った", 4.2);
  }
  function dealPlayerDamage(amount, type) {
    if (player.invulnerable > 0) return false;
    let reduction = 0;
    const held = selectedItemDef();
    if (held && held.kind === "defense") reduction += held.damageReduction || 0;
    if (inventory.hasItem("magic_amulet") && type === "magic") reduction += G.ITEMS.magic_amulet.magicReduction;
    const final = Math.max(1, Math.round(amount * (1 - reduction)));
    player.hp = G.clamp(player.hp - final, 0, player.maxHp);
    player.invulnerable = 0.55;
    pushMessage(`被弾: -${final} HP`, 2.0);
    if (player.hp <= 0) respawnPlayer();
    return true;
  }

  const drops = new G.ItemDropManager(scene);
  const enemies = new G.EnemyManager(scene, chunkMgr, worldGen, drops, dealPlayerDamage);
  const projectiles = new G.ProjectileSystem(scene, chunkMgr, enemies);
  const nests = new G.NestSystem(chunkMgr, worldGen, enemies, brokenNests, worldState);
  const villagers = new G.VillagerManager(scene, chunkMgr, worldGen);
  const raycaster = new THREE.Raycaster();

  function recipeCanCraft(recipe) {
    for (const entry of Object.entries(recipe.input)) if (inventory.countItem(entry[0]) < entry[1]) return false;
    return true;
  }
  function updateCraftStatus() {
    const recipe = G.RECIPES[currentRecipeIndex];
    const canCraft = recipeCanCraft(recipe);
    el.recipeName.textContent = recipe.label;
    el.recipeCost.textContent = `必要素材: ${G.describeInput(recipe.input)}`;
    el.craftBtn.disabled = !canCraft;
    el.craftBtn.style.opacity = canCraft ? "1" : "0.5";
    const outDef = G.ITEMS[recipe.output.itemKey];
    if (outDef && outDef.icon) {
      el.recipeIcon.style.backgroundImage = `url('${outDef.icon}')`;
      el.recipeIcon.style.backgroundColor = "transparent";
    } else {
      el.recipeIcon.style.backgroundImage = "none";
      el.recipeIcon.style.backgroundColor = outDef ? `#${outDef.color.toString(16).padStart(6, "0")}` : "#444";
    }
    const craftableTotal = G.RECIPES.filter(recipeCanCraft).length;
    el.craftStatus.textContent = craftableTotal > 0 ? `${craftableTotal} 個のレシピが作成可能` : "今は作れるレシピがありません";
  }
  function tryCraftSelected() {
    const recipe = G.RECIPES[currentRecipeIndex];
    if (!recipeCanCraft(recipe)) {
      pushMessage("素材が足りない", 2.2);
      return false;
    }
    for (const entry of Object.entries(recipe.input)) inventory.removeItems(entry[0], entry[1]);
    inventory.addItem(recipe.output.itemKey, recipe.output.count);
    updatePlayerMaxHp();
    pushMessage(`${recipe.label} をクラフトした`, 2.8);
    return true;
  }
  function tryCraftNext() {
    if (tryCraftSelected()) return true;
    for (let offset = 1; offset < G.RECIPES.length; offset += 1) {
      const index = (currentRecipeIndex + offset) % G.RECIPES.length;
      if (!recipeCanCraft(G.RECIPES[index])) continue;
      currentRecipeIndex = index;
      updateCraftStatus();
      return tryCraftSelected();
    }
    return false;
  }

  const hotbarViews = [];
  const gridViews = [];
  function createSlotView(index) {
    const slotEl = document.createElement("div");
    slotEl.className = "slot empty";
    slotEl.draggable = true;
    const label = document.createElement("span");
    label.className = "slot-label";
    const count = document.createElement("span");
    count.className = "slot-count";
    slotEl.appendChild(label);
    slotEl.appendChild(count);
    slotEl.addEventListener("dragstart", (event) => {
      const slot = inventory.getSlot(index);
      if (!slot) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.setData("text/plain", String(index));
    });
    slotEl.addEventListener("dragover", (event) => event.preventDefault());
    slotEl.addEventListener("drop", (event) => {
      event.preventDefault();
      const from = Number(event.dataTransfer.getData("text/plain"));
      if (Number.isFinite(from)) inventory.moveOrMerge(from, index);
    });
    slotEl.addEventListener("click", () => { if (index <= 8) inventory.setSelectedHotbarIndex(index); });
    return { index: index, slotEl: slotEl, label: label, count: count };
  }
  function updateSlotView(view) {
    const slot = inventory.getSlot(view.index);
    view.slotEl.classList.toggle("selected", view.index === inventory.selectedHotbarIndex);
    view.slotEl.classList.toggle("empty", !slot);
    view.slotEl.style.backgroundColor = "";
    view.slotEl.innerHTML = "";
    const label = document.createElement("span");
    label.className = "slot-label";
    const count = document.createElement("span");
    count.className = "slot-count";
    if (!slot) {
      label.textContent = "-";
      count.textContent = "0";
      view.slotEl.appendChild(label);
      view.slotEl.appendChild(count);
      return;
    }
    const def = G.ITEMS[slot.itemKey];
    if (def && def.icon) {
      const iconEl = document.createElement("div");
      iconEl.className = "item-icon";
      iconEl.style.backgroundImage = `url('${def.icon}')`;
      view.slotEl.appendChild(iconEl);
    } else {
      label.textContent = def ? def.label : slot.itemKey;
      view.slotEl.style.backgroundColor = def ? `#${def.color.toString(16).padStart(6, "0")}` : "rgba(0,0,0,0.5)";
      view.slotEl.appendChild(label);
    }
    count.textContent = String(slot.count);
    view.slotEl.appendChild(count);
  }
  function refreshInventoryUI() {
    for (const view of hotbarViews) updateSlotView(view);
    for (const view of gridViews) updateSlotView(view);
    updateCraftStatus();
    updatePlayerMaxHp();
  }
  function buildInventoryUI() {
    for (let i = 0; i < 9; i += 1) {
      const view = createSlotView(i);
      hotbarViews.push(view);
      el.hotbar.appendChild(view.slotEl);
    }
    for (let i = 0; i < 36; i += 1) {
      const view = createSlotView(i);
      gridViews.push(view);
      el.grid.appendChild(view.slotEl);
    }
  }
  function seedInventory() {
    inventory.addItem("grass_block", 12);
    inventory.addItem("dirt_block", 12);
    inventory.addItem("wood_log_block", 2);
  }

  function getPlayerBounds(position) {
    return {
      minX: position.x - G.PLAYER_CONFIG.radius,
      maxX: position.x + G.PLAYER_CONFIG.radius,
      minY: position.y,
      maxY: position.y + G.PLAYER_CONFIG.height,
      minZ: position.z - G.PLAYER_CONFIG.radius,
      maxZ: position.z + G.PLAYER_CONFIG.radius
    };
  }
  function collidesAt(position) {
    const b = getPlayerBounds(position);
    for (let x = Math.floor(b.minX); x <= Math.floor(b.maxX); x += 1) {
      for (let y = Math.floor(b.minY); y <= Math.floor(b.maxY); y += 1) {
        for (let z = Math.floor(b.minZ); z <= Math.floor(b.maxZ); z += 1) {
          if (G.BlockData.isSolid(chunkMgr.getBlock(x, y, z)) && b.maxX > x && b.minX < x + 1 && b.maxY > y && b.minY < y + 1 && b.maxZ > z && b.minZ < z + 1) return true;
        }
      }
    }
    return false;
  }
  function overlapsPlayerBlock(x, y, z) {
    const b = getPlayerBounds(player.pos);
    return b.maxX > x && b.minX < x + 1 && b.maxY > y && b.minY < y + 1 && b.maxZ > z && b.minZ < z + 1;
  }
  function moveAxis(axis, amount) {
    if (amount === 0) return false;
    const direction = Math.sign(amount);
    let remaining = Math.abs(amount);
    let hit = false;
    while (remaining > 0) {
      const distance = Math.min(0.08, remaining) * direction;
      const test = player.pos.clone();
      test[axis] += distance;
      if (collidesAt(test)) {
        hit = true;
        break;
      }
      player.pos.copy(test);
      remaining -= Math.abs(distance);
    }
    return hit;
  }
  function updatePlayer(dt) {
    const forward = (input.w ? 1 : 0) - (input.s ? 1 : 0);
    const right = (input.d ? 1 : 0) - (input.a ? 1 : 0);
    const move = new THREE.Vector3(right, 0, -forward);
    if (move.lengthSq() > 0) move.normalize();
    move.applyMatrix4(new THREE.Matrix4().makeRotationY(player.yaw));
    player.vel.x = move.x * G.PLAYER_CONFIG.walkSpeed;
    player.vel.z = move.z * G.PLAYER_CONFIG.walkSpeed;
    player.vel.y -= G.PLAYER_CONFIG.gravity * dt;
    if (input.jumpQueued && player.onGround) {
      player.vel.y = G.PLAYER_CONFIG.jumpPower;
      player.onGround = false;
    }
    input.jumpQueued = false;
    moveAxis("x", player.vel.x * dt);
    moveAxis("z", player.vel.z * dt);
    const hitY = moveAxis("y", player.vel.y * dt);
    if (hitY) {
      if (player.vel.y < 0) player.onGround = true;
      player.vel.y = 0;
    } else {
      player.onGround = false;
    }
    if (player.pos.y < -40) respawnPlayer();
    player.invulnerable = Math.max(0, player.invulnerable - dt);
    camera.position.set(player.pos.x, player.pos.y + G.PLAYER_CONFIG.eyeHeight, player.pos.z);
    camera.rotation.y = player.yaw;
    camera.rotation.x = player.pitch;
  }
  function updateEnvironment(dt) {
    worldState.time = (worldState.time + dt) % G.DAY_DURATION;
    const info = G.getTimeOfDayInfo(worldState.time);
    const lanternBonus = worldState.lanternActive && inventory.hasItem("lantern") ? 0.18 : 0;
    ambientLight.intensity = 0.2 + info.daylight * 0.55 + lanternBonus;
    sunLight.intensity = 0.15 + info.daylight * 1.1;
    sunLight.position.set(Math.cos(info.ratio * Math.PI * 2) * 180, 32 + info.daylight * 190, Math.sin(info.ratio * Math.PI * 2) * 120);
    scene.background.copy(info.sky);
    scene.fog.color.copy(info.sky);
    return info;
  }

  function targetFromHit(hit, direction) {
    if (!hit) return null;
    const breakPoint = hit.point.clone().addScaledVector(direction, 0.01);
    const placePoint = hit.point.clone().addScaledVector(direction, -0.01);
    return {
      break: { x: Math.floor(breakPoint.x), y: Math.floor(breakPoint.y), z: Math.floor(breakPoint.z) },
      place: { x: Math.floor(placePoint.x), y: Math.floor(placePoint.y), z: Math.floor(placePoint.z) }
    };
  }
  function updateTarget() {
    const targets = chunkRenderer.getRaycastTargets();
    if (!targets.length) {
      currentTarget = null;
      return;
    }
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    raycaster.far = 7.2;
    const hits = raycaster.intersectObjects(targets, false);
    if (!hits.length) {
      currentTarget = null;
      return;
    }
    const target = targetFromHit(hits[0], raycaster.ray.direction);
    if (!target || !G.BlockData.isSolid(chunkMgr.getBlock(target.break.x, target.break.y, target.break.z))) {
      currentTarget = null;
      return;
    }
    currentTarget = target;
  }
  function breakBlockNow() {
    if (!currentTarget) return;
    const p = currentTarget.break;
    const blockId = chunkMgr.getBlock(p.x, p.y, p.z);
    if (!G.BlockData.isSolid(blockId) || !chunkMgr.setBlock(p.x, p.y, p.z, G.BLOCK.AIR)) return;
    if (G.NESTS[blockId]) {
      nests.onNestBroken(G.keyXYZ(p.x, p.y, p.z), blockId);
      updatePlayerMaxHp();
      pushMessage(`${G.NESTS[blockId].label} を破壊した`, 3.2);
    }
    drops.spawnDrops(G.BlockData.getDrops(blockId), new THREE.Vector3(p.x + 0.5, p.y + 0.55, p.z + 0.5));
  }
  function updateBreaking(dt) {
    const held = selectedItemDef();
    if (held && (held.kind === "weapon" || held.kind === "consumable" || held.kind === "utility" || held.kind === "defense" || held.kind === "accessory")) {
      breakState.key = null;
      breakState.progress = 0;
      el.breakInfo.textContent = "採掘: 道具を外してブロックを壊す";
      return;
    }
    if (!pointerLocked || !input.leftDown || !currentTarget) {
      breakState.key = null;
      breakState.progress = 0;
      el.breakInfo.textContent = "採掘: -";
      return;
    }
    const p = currentTarget.break;
    const blockId = chunkMgr.getBlock(p.x, p.y, p.z);
    if (!G.BlockData.isSolid(blockId)) {
      breakState.key = null;
      breakState.progress = 0;
      el.breakInfo.textContent = "採掘: -";
      return;
    }
    const key = G.keyXYZ(p.x, p.y, p.z);
    const duration = G.BlockData.getBreakTime(blockId);
    if (breakState.key !== key) {
      breakState.key = key;
      breakState.progress = 0;
      breakState.duration = duration;
    }
    breakState.progress += dt;
    const percent = Math.min(100, Math.floor((breakState.progress / breakState.duration) * 100));
    el.breakInfo.textContent = `採掘中: ${G.BlockData.getLabel(blockId)} ${percent}%`;
    if (breakState.progress >= breakState.duration) {
      breakBlockNow();
      breakState.key = null;
      breakState.progress = 0;
    }
  }
  function tryPlace() {
    if (!currentTarget) return;
    const slot = selectedSlot();
    if (!slot) return;
    const def = G.ITEMS[slot.itemKey];
    if (!def || def.kind !== "block") return;
    const p = currentTarget.place;
    if (p.y < 0 || p.y >= G.CHUNK_HEIGHT || chunkMgr.getBlock(p.x, p.y, p.z) !== G.BLOCK.AIR || overlapsPlayerBlock(p.x, p.y, p.z)) return;
    if (chunkMgr.setBlock(p.x, p.y, p.z, def.blockId)) inventory.removeOne(inventory.selectedHotbarIndex);
  }
  function tryAttack() {
    const slot = selectedSlot();
    const def = slot ? G.ITEMS[slot.itemKey] : null;
    if (actionCooldown > 0) return false;
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction).normalize();
    if (!def || def.kind !== "weapon") {
      const hit = enemies.damageAlongRay(camera.position.clone(), direction, G.HAND_ATTACK.reach, G.HAND_ATTACK.radius, G.HAND_ATTACK.damage);
      if (hit) {
        actionCooldown = G.HAND_ATTACK.cooldown;
        pushMessage("素手で攻撃した", 1.2);
        return true;
      }
      return false;
    }
    if (def.style === "melee") {
      enemies.damageAlongRay(camera.position.clone(), direction, def.reach, def.radius, def.damage);
      actionCooldown = def.cooldown;
      return true;
    }
    if (def.style === "projectile") {
      projectiles.cast(camera.position.clone().add(direction.clone().multiplyScalar(0.6)), direction, def.projectile);
      actionCooldown = def.cooldown;
      return true;
    }
    if (def.style === "heal") {
      if (healPlayer(def.heal, def.label)) actionCooldown = def.cooldown;
      else pushMessage("HP は満タンに近い", 1.5);
      return true;
    }
    return false;
  }
  function useSelectedItem() {
    const slot = selectedSlot();
    if (!slot) {
      pushMessage("使えるものを持っていない", 1.8);
      return false;
    }
    const def = G.ITEMS[slot.itemKey];
    if (!def) return false;
    if (def.kind === "consumable") {
      const healed = healPlayer(def.heal, def.label);
      if (healed) inventory.removeOne(inventory.selectedHotbarIndex);
      else pushMessage("HP は満タンに近い", 1.8);
      return true;
    }
    if (slot.itemKey === "nest_detector") {
      detectorState.revealUntil = performance.now() + 6000;
      pushMessage("巣探知機を起動した", 2.4);
      return true;
    }
    if (slot.itemKey === "nest_bomb") {
      let center = camera.position.clone();
      let nestBroken = false;
      if (currentTarget) {
        const p = currentTarget.break;
        center = new THREE.Vector3(p.x + 0.5, p.y + 0.5, p.z + 0.5);
        const targetBlock = chunkMgr.getBlock(p.x, p.y, p.z);
        if (G.NESTS[targetBlock]) {
          chunkMgr.setBlock(p.x, p.y, p.z, G.BLOCK.AIR);
          nests.onNestBroken(G.keyXYZ(p.x, p.y, p.z), targetBlock);
          updatePlayerMaxHp();
          drops.spawnDrops(G.BlockData.getDrops(targetBlock), center.clone());
          nestBroken = true;
        }
      } else {
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction).normalize();
        center = camera.position.clone().addScaledVector(direction, 4.2);
      }
      enemies.damageAt(center, 3.2, 42, true);
      inventory.removeOne(inventory.selectedHotbarIndex);
      pushMessage(nestBroken ? "巣を爆破した" : "爆弾を投げた", 3.0);
      return true;
    }
    if (slot.itemKey === "lantern") {
      worldState.lanternActive = !worldState.lanternActive;
      pushMessage(worldState.lanternActive ? "ランタンを灯した" : "ランタンを消した", 2.0);
      return true;
    }
    pushMessage("このアイテムは F で使えない", 1.8);
    return false;
  }
  function toggleInventory(force) {
    inventoryOpen = force === null || force === undefined ? !inventoryOpen : force;
    el.inventory.classList.toggle("hidden", !inventoryOpen);
    el.crosshair.classList.toggle("hidden", inventoryOpen);
    if (inventoryOpen) {
      document.exitPointerLock();
      el.center.classList.add("hidden");
    } else if (!pointerLocked) {
      el.center.classList.remove("hidden");
    }
  }
  function bindHoldButton(element, onStart, onEnd) {
    if (!element) return;
    const start = (event) => {
      event.preventDefault();
      onStart();
    };
    const end = (event) => {
      event.preventDefault();
      onEnd();
    };
    element.addEventListener("touchstart", start, { passive: false });
    element.addEventListener("touchend", end, { passive: false });
    element.addEventListener("touchcancel", end, { passive: false });
    element.addEventListener("mousedown", start);
    element.addEventListener("mouseup", end);
    element.addEventListener("mouseleave", end);
  }
  function initMobileControls() {
    if (!mobileState.enabled) return;
    el.mobileControls.classList.remove("hidden");
    bindHoldButton(el.touchUp, () => { input.w = true; }, () => { input.w = false; });
    bindHoldButton(el.touchDown, () => { input.s = true; }, () => { input.s = false; });
    bindHoldButton(el.touchLeft, () => { input.a = true; }, () => { input.a = false; });
    bindHoldButton(el.touchRight, () => { input.d = true; }, () => { input.d = false; });
    bindHoldButton(el.touchJump, () => { input.jumpQueued = true; }, () => {});
    bindHoldButton(el.touchAttack, () => {
      if (!tryAttack()) input.leftDown = true;
    }, () => { input.leftDown = false; });
    bindHoldButton(el.touchPlace, () => { tryPlace(); }, () => {});
    bindHoldButton(el.touchUse, () => { useSelectedItem(); }, () => {});
    bindHoldButton(el.touchInventory, () => { toggleInventory(); }, () => {});

    const startLook = (event) => {
      event.preventDefault();
      const point = event.touches ? event.touches[0] : event;
      mobileState.looking = true;
      mobileState.lastX = point.clientX;
      mobileState.lastY = point.clientY;
    };
    const moveLook = (event) => {
      if (!mobileState.looking) return;
      event.preventDefault();
      const point = event.touches ? event.touches[0] : event;
      const dx = point.clientX - mobileState.lastX;
      const dy = point.clientY - mobileState.lastY;
      mobileState.lastX = point.clientX;
      mobileState.lastY = point.clientY;
      player.yaw -= dx * 0.012;
      player.pitch -= dy * 0.012;
      player.pitch = G.clamp(player.pitch, -Math.PI / 2, Math.PI / 2);
    };
    const endLook = (event) => {
      event.preventDefault();
      mobileState.looking = false;
    };
    el.lookPad.addEventListener("touchstart", startLook, { passive: false });
    el.lookPad.addEventListener("touchmove", moveLook, { passive: false });
    el.lookPad.addEventListener("touchend", endLook, { passive: false });
    el.lookPad.addEventListener("touchcancel", endLook, { passive: false });
  }
  function onKey(event, down) {
    if (event.code === "KeyE" && down && !event.repeat) {
      toggleInventory();
      return;
    }
    if (event.code === "KeyC" && down && !event.repeat) {
      tryCraftNext();
      return;
    }
    if (event.code === "KeyF" && down && !event.repeat) {
      useSelectedItem();
      return;
    }
    switch (event.code) {
      case "KeyW": input.w = down; break;
      case "KeyS": input.s = down; break;
      case "KeyA": input.a = down; break;
      case "KeyD": input.d = down; break;
      case "Space": if (down) input.jumpQueued = true; break;
      default:
        if (/^Digit[1-9]$/.test(event.code) && down) inventory.setSelectedHotbarIndex(Number(event.code.replace("Digit", "")) - 1);
        break;
    }
  }
  function onMouseMove(event) {
    if (!pointerLocked || inventoryOpen) return;
    player.yaw -= event.movementX * 0.0022;
    player.pitch -= event.movementY * 0.0022;
    player.pitch = G.clamp(player.pitch, -Math.PI / 2, Math.PI / 2);
  }
  function onMouseDown(event) {
    if (inventoryOpen) return;
    if (mobileState.enabled) return;
    if (!pointerLocked) {
      renderer.domElement.requestPointerLock();
      return;
    }
    if (event.button === 0) {
      if (!tryAttack()) input.leftDown = true;
    } else if (event.button === 2) {
      tryPlace();
    }
  }
  function onMouseUp(event) { if (event.button === 0) input.leftDown = false; }
  function onPointerLockChange() {
    pointerLocked = document.pointerLockElement === renderer.domElement;
    if (pointerLocked) el.center.classList.add("hidden");
    else if (!inventoryOpen) el.center.classList.remove("hidden");
  }
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  function scanNearestNest() {
    const detectorActive = inventory.hasItem("nest_detector") || detectorState.revealUntil > performance.now();
    detectorState.result = detectorActive ? nests.findNearestNest(player.pos, 128) : null;
  }
  function updateHud(timeInfo) {
    const biome = worldGen.getBiome(player.pos.x, player.pos.z);
    if (worldState.currentBiomeKey !== biome.key) {
      worldState.currentBiomeKey = biome.key;
      pushMessage(`${biome.label} に入った`, 2.4);
    }
    const town = worldGen.getTownAt(player.pos.x, player.pos.z);
    if ((town && town.key) !== worldState.currentTownKey) {
      worldState.currentTownKey = town ? town.key : null;
      if (town) pushMessage(`${town.label} に到着した`, 2.8);
    }
    const frontierTier = G.getFrontierTier(worldState.cleansedNests);
    const selected = selectedItemDef();
    el.coords.textContent = `座標: X ${player.pos.x.toFixed(2)} / Y ${player.pos.y.toFixed(2)} / Z ${player.pos.z.toFixed(2)}`;
    const cx = chunkMgr.worldToChunk(Math.floor(player.pos.x));
    const cz = chunkMgr.worldToChunk(Math.floor(player.pos.z));
    el.chunk.textContent = `チャンク: ${cx}, ${cz} | 読み込み: ${chunkMgr.getLoadedChunkCount()}`;
    el.biomeTime.textContent = `バイオーム: ${biome.label} | 時間: ${timeInfo.label} (${String(timeInfo.hour).padStart(2, "0")}:00)`;
    el.health.textContent = `HP: ${player.hp} / ${player.maxHp}`;
    el.world.textContent = `世界進行: ${frontierTier.label} | 巣破壊: ${worldState.cleansedNests}`;
    el.enemies.textContent = `敵: スライム ${enemies.countByType("slime")} / ウッドマン ${enemies.countByType("woodman")} / レア ${enemies.countByType("prism_slime") + enemies.countByType("ancient_woodman")}`;
    el.town.textContent = town ? `町: ${town.label} | 城内は安全` : "町: なし";
    el.nest.textContent = detectorState.result ? `巣探知: ${detectorState.result.label} まで ${detectorState.result.distance.toFixed(1)}m` : (inventory.hasItem("nest_detector") ? "巣探知: 近くに反応なし" : "巣探知: 未所持");
    el.wand.textContent = selected ? `装備: ${selected.label}` : "装備: 素手";
    el.msg.textContent = messageState.until > performance.now() ? `メッセージ: ${messageState.text}` : "メッセージ: -";

    if (selected && selected.icon) {
      el.handView.style.backgroundImage = `url('${selected.icon}')`;
      el.handView.style.backgroundColor = "transparent";
    } else if (selected) {
      el.handView.style.backgroundImage = "none";
      el.handView.style.backgroundColor = `#${selected.color.toString(16).padStart(6, "0")}`;
    } else {
      el.handView.style.backgroundImage = "none";
      el.handView.style.backgroundColor = "transparent";
    }
  }
  function animate(now) {
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    const timeInfo = updateEnvironment(dt);
    updatePlayer(dt);
    streamTimer += dt;
    if (streamTimer > 0.15) {
      chunkMgr.update(player.pos);
      villagers.ensureTownVillagers(player.pos);
      streamTimer = 0;
    }
    detectorState.timer += dt;
    if (detectorState.timer > 0.45) {
      scanNearestNest();
      detectorState.timer = 0;
    }
    chunkMgr.rebuildDirty(2);
    actionCooldown = Math.max(0, actionCooldown - dt);
    updateTarget();
    updateBreaking(dt);
    projectiles.update(dt);
    enemies.update(dt, player.pos, timeInfo);
    nests.update(dt, now / 1000, player.pos, timeInfo);
    villagers.update(dt, now);
    drops.update(dt, player.pos, inventory, (x, y, z) => chunkMgr.getBlock(x, y, z));
    updateHud(timeInfo);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  function init() {
    buildInventoryUI();
    inventory.subscribe(refreshInventoryUI);
    seedInventory();
    chunkMgr.update(player.pos);
    villagers.ensureTownVillagers(player.pos);
    player.pos.copy(findSafeSpawn());
    updatePlayerMaxHp();
    updateCraftStatus();
    initMobileControls();
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", (event) => onKey(event, true));
    document.addEventListener("keyup", (event) => onKey(event, false));
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("pointerlockchange", onPointerLockChange);
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    el.craftBtn.addEventListener("click", tryCraftSelected);
    el.prevRecipe.addEventListener("click", () => {
      currentRecipeIndex = (currentRecipeIndex - 1 + G.RECIPES.length) % G.RECIPES.length;
      updateCraftStatus();
    });
    el.nextRecipe.addEventListener("click", () => {
      currentRecipeIndex = (currentRecipeIndex + 1) % G.RECIPES.length;
      updateCraftStatus();
    });
    requestAnimationFrame(animate);
  }
  init();
})();
