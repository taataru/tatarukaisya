(function () {
  const G = window.VoxelGame;

  G.Inventory = class {
    constructor(slotCount) {
      this.slots = Array.from({ length: slotCount || 36 }, () => null);
      this.selectedHotbarIndex = 0;
      this.listeners = new Set();
    }
    subscribe(listener) { this.listeners.add(listener); listener(this); }
    notify() { for (const listener of this.listeners) listener(this); }
    getSlot(index) { const slot = this.slots[index]; return slot ? { ...slot } : null; }
    setSelectedHotbarIndex(index) { if (index < 0 || index > 8) return; this.selectedHotbarIndex = index; this.notify(); }
    countItem(itemKey) { let total = 0; for (const slot of this.slots) if (slot && slot.itemKey === itemKey) total += slot.count; return total; }
    hasItem(itemKey) { return this.countItem(itemKey) > 0; }
    addItem(itemKey, count) {
      const def = G.ITEMS[itemKey];
      if (!def || count <= 0) return count;
      let remaining = count;
      const maxStack = def.stack || G.MAX_STACK;
      for (let i = 0; i < this.slots.length && remaining > 0; i += 1) {
        const slot = this.slots[i];
        if (!slot || slot.itemKey !== itemKey || slot.count >= maxStack) continue;
        const moved = Math.min(maxStack - slot.count, remaining);
        slot.count += moved;
        remaining -= moved;
      }
      for (let i = 0; i < this.slots.length && remaining > 0; i += 1) {
        if (this.slots[i]) continue;
        const moved = Math.min(maxStack, remaining);
        this.slots[i] = { itemKey: itemKey, count: moved };
        remaining -= moved;
      }
      if (remaining !== count) this.notify();
      return remaining;
    }
    removeOne(index) {
      const slot = this.slots[index];
      if (!slot) return null;
      slot.count -= 1;
      const itemKey = slot.itemKey;
      if (slot.count <= 0) this.slots[index] = null;
      this.notify();
      return itemKey;
    }
    removeItems(itemKey, count) {
      if (this.countItem(itemKey) < count) return false;
      let needed = count;
      for (let i = 0; i < this.slots.length && needed > 0; i += 1) {
        const slot = this.slots[i];
        if (!slot || slot.itemKey !== itemKey) continue;
        const taken = Math.min(slot.count, needed);
        slot.count -= taken;
        needed -= taken;
        if (slot.count <= 0) this.slots[i] = null;
      }
      this.notify();
      return true;
    }
    moveOrMerge(fromIndex, toIndex) {
      if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0 || fromIndex >= this.slots.length || toIndex >= this.slots.length) return;
      const fromSlot = this.slots[fromIndex];
      const toSlot = this.slots[toIndex];
      if (!fromSlot) return;
      if (!toSlot) {
        this.slots[toIndex] = fromSlot;
        this.slots[fromIndex] = null;
        this.notify();
        return;
      }
      if (fromSlot.itemKey === toSlot.itemKey) {
        const maxStack = G.ITEMS[toSlot.itemKey].stack || G.MAX_STACK;
        const space = maxStack - toSlot.count;
        if (space > 0) {
          const moved = Math.min(space, fromSlot.count);
          toSlot.count += moved;
          fromSlot.count -= moved;
          if (fromSlot.count <= 0) this.slots[fromIndex] = null;
          this.notify();
          return;
        }
      }
      this.slots[toIndex] = fromSlot;
      this.slots[fromIndex] = toSlot;
      this.notify();
    }
  };

  G.ItemDropManager = class {
    constructor(scene) {
      this.scene = scene;
      this.geometry = new THREE.BoxGeometry(0.34, 0.34, 0.34);
      this.materials = new Map();
      this.entities = [];
    }
    getMaterial(itemKey) {
      if (this.materials.has(itemKey)) return this.materials.get(itemKey);
      const material = new THREE.MeshLambertMaterial({ color: (G.ITEMS[itemKey] && G.ITEMS[itemKey].color) || 0xffffff });
      this.materials.set(itemKey, material);
      return material;
    }
    spawn(itemKey, count, position) {
      if (!G.ITEMS[itemKey] || count <= 0) return;
      const mesh = new THREE.Mesh(this.geometry, this.getMaterial(itemKey));
      mesh.position.copy(position);
      this.scene.add(mesh);
      this.entities.push({ itemKey: itemKey, count: count, mesh: mesh, velocity: new THREE.Vector3((Math.random() - 0.5) * 1.2, 2.2, (Math.random() - 0.5) * 1.2) });
    }
    spawnDrops(dropList, position) {
      for (const drop of dropList) {
        if (drop.chance !== undefined && Math.random() > drop.chance) continue;
        const count = G.randInt(drop.min, drop.max);
        if (count > 0) this.spawn(drop.itemKey, count, position);
      }
    }
    removeAt(index) {
      const entity = this.entities[index];
      this.scene.remove(entity.mesh);
      this.entities.splice(index, 1);
    }
    update(dt, playerPos, inventory, getBlockAt) {
      for (let i = this.entities.length - 1; i >= 0; i -= 1) {
        const entity = this.entities[i];
        entity.velocity.y -= 18 * dt;
        const next = entity.mesh.position.clone().addScaledVector(entity.velocity, dt);
        const floorY = Math.floor(next.y - 0.18);
        if (G.BlockData.isSolid(getBlockAt(Math.floor(next.x), floorY, Math.floor(next.z))) && entity.velocity.y < 0) {
          next.y = floorY + 1.18;
          entity.velocity.y = 0;
        }
        entity.mesh.position.copy(next);
        entity.mesh.rotation.y += dt * 1.8;
        if (entity.mesh.position.distanceTo(playerPos) < 1.35) {
          const remaining = inventory.addItem(entity.itemKey, entity.count);
          if (remaining <= 0) {
            this.removeAt(i);
            continue;
          }
          entity.count = remaining;
        }
      }
    }
  };

  G.EnemyManager = class {
    constructor(scene, chunkManager, worldGenerator, dropManager, damagePlayer) {
      this.scene = scene;
      this.chunkManager = chunkManager;
      this.worldGenerator = worldGenerator;
      this.dropManager = dropManager;
      this.damagePlayer = damagePlayer;
      this.enemies = [];
      this.nextId = 1;
    }
    makeMesh(type) {
      const data = G.ENEMIES[type];
      const height = data.height || data.size;
      return new THREE.Mesh(new THREE.BoxGeometry(data.size, height, data.size), new THREE.MeshLambertMaterial({ color: data.color }));
    }
    spawn(type, nestKey, position) {
      const data = G.ENEMIES[type];
      if (!data) return false;
      if (this.worldGenerator.isInsideTownSafeRadius(position.x, position.z)) return false;
      const height = data.height || data.size;
      const mesh = this.makeMesh(type);
      mesh.position.copy(position).y += height / 2;
      this.scene.add(mesh);
      this.enemies.push({ id: this.nextId++, type: type, nestKey: nestKey, hp: data.hp, velocity: new THREE.Vector3(), mesh: mesh, hitCooldown: 0 });
      return true;
    }
    removeAt(index) {
      const enemy = this.enemies[index];
      this.scene.remove(enemy.mesh);
      this.enemies.splice(index, 1);
    }
    countByType(type) { let count = 0; for (const enemy of this.enemies) if (enemy.type === type) count += 1; return count; }
    countByNest(nestKey) { let count = 0; for (const enemy of this.enemies) if (enemy.nestKey === nestKey) count += 1; return count; }
    groundY(x, z, guess) {
      for (let y = G.clamp(Math.floor(guess), 1, G.CHUNK_HEIGHT - 2); y >= 1; y -= 1) {
        if (G.BlockData.isSolid(this.chunkManager.getBlock(Math.floor(x), y, Math.floor(z)))) return y + 1;
      }
      return 2;
    }
    update(dt, playerPos, timeInfo) {
      for (let i = this.enemies.length - 1; i >= 0; i -= 1) {
        const enemy = this.enemies[i];
        const data = G.ENEMIES[enemy.type];
        const height = data.height || data.size;
        enemy.hitCooldown = Math.max(0, enemy.hitCooldown - dt);
        if (this.worldGenerator.isInsideTownSafeRadius(enemy.mesh.position.x, enemy.mesh.position.z)) {
          this.removeAt(i);
          continue;
        }
        const toPlayer = playerPos.clone().sub(enemy.mesh.position);
        const distance = toPlayer.length();
        const moveDir = new THREE.Vector3();
        if (distance < data.chaseRange) {
          moveDir.copy(toPlayer).setY(0);
          if (moveDir.lengthSq() > 0) moveDir.normalize();
        }
        enemy.velocity.x = moveDir.x * data.speed * timeInfo.enemySpeed;
        enemy.velocity.z = moveDir.z * data.speed * timeInfo.enemySpeed;
        enemy.velocity.y -= 20 * dt;
        const next = enemy.mesh.position.clone().addScaledVector(enemy.velocity, dt);
        const ground = this.groundY(next.x, next.z, next.y + 3);
        enemy.mesh.position.copy(next);
        enemy.mesh.lookAt(playerPos.x, enemy.mesh.position.y, playerPos.z);
        const feetY = enemy.mesh.position.y - height / 2;
        const heightDiff = ground - feetY;
        if (heightDiff > 2) {
          enemy.velocity.x = 0;
          enemy.velocity.z = 0;
          enemy.mesh.position.x -= moveDir.x * data.speed * timeInfo.enemySpeed * dt;
          enemy.mesh.position.z -= moveDir.z * data.speed * timeInfo.enemySpeed * dt;
        } else if (heightDiff > 0.05) {
          enemy.mesh.position.y += Math.min(heightDiff, 3.5 * dt);
          enemy.velocity.y = Math.max(0, enemy.velocity.y);
        } else if (enemy.mesh.position.y < ground + height / 2) {
          enemy.mesh.position.y = ground + height / 2;
          enemy.velocity.y = 0;
        }
        if (distance < data.contactRadius && enemy.hitCooldown <= 0) {
          this.damagePlayer(data.touchDamage, enemy.type === "prism_slime" ? "magic" : "physical");
          enemy.hitCooldown = data.attackCooldown;
        }
        if (distance > 120) this.removeAt(i);
      }
    }
    damageAt(position, radius, damage, hitAll) {
      let hits = 0;
      for (let i = this.enemies.length - 1; i >= 0; i -= 1) {
        const enemy = this.enemies[i];
        if (enemy.mesh.position.distanceTo(position) > radius) continue;
        enemy.hp -= damage;
        hits += 1;
        if (enemy.hp <= 0) {
          this.dropManager.spawnDrops(G.ENEMIES[enemy.type].drops, enemy.mesh.position.clone());
          this.removeAt(i);
        }
        if (!hitAll) break;
      }
      return hits;
    }
    damageAlongRay(origin, direction, reach, radius, damage) {
      let bestIndex = -1;
      let bestProjection = Number.POSITIVE_INFINITY;
      for (let i = 0; i < this.enemies.length; i += 1) {
        const enemy = this.enemies[i];
        const toEnemy = enemy.mesh.position.clone().sub(origin);
        const projection = toEnemy.dot(direction);
        if (projection < 0 || projection > reach) continue;
        const closest = origin.clone().addScaledVector(direction, projection);
        const perpendicular = enemy.mesh.position.distanceTo(closest);
        if (perpendicular > radius + G.ENEMIES[enemy.type].size * 0.45) continue;
        if (projection < bestProjection) {
          bestProjection = projection;
          bestIndex = i;
        }
      }
      if (bestIndex < 0) return false;
      const enemy = this.enemies[bestIndex];
      enemy.hp -= damage;
      if (enemy.hp <= 0) {
        this.dropManager.spawnDrops(G.ENEMIES[enemy.type].drops, enemy.mesh.position.clone());
        this.removeAt(bestIndex);
      }
      return true;
    }
  };

  G.ProjectileSystem = class {
    constructor(scene, chunkManager, enemyManager) {
      this.scene = scene;
      this.chunkManager = chunkManager;
      this.enemyManager = enemyManager;
      this.projectiles = [];
      this.materials = new Map();
    }
    getMaterial(color) {
      if (this.materials.has(color)) return this.materials.get(color);
      const material = new THREE.MeshBasicMaterial({ color: color });
      this.materials.set(color, material);
      return material;
    }
    cast(origin, direction, projectileDef) {
      const geometry = new THREE.SphereGeometry(projectileDef.size || 0.14, 10, 10);
      const mesh = new THREE.Mesh(geometry, this.getMaterial(projectileDef.color));
      mesh.position.copy(origin);
      this.scene.add(mesh);
      this.projectiles.push({ mesh: mesh, velocity: direction.clone().multiplyScalar(projectileDef.speed), life: projectileDef.life, damage: projectileDef.damage, splashRadius: projectileDef.splashRadius || 0 });
    }
    removeAt(index) {
      const projectile = this.projectiles[index];
      this.scene.remove(projectile.mesh);
      projectile.mesh.geometry.dispose();
      this.projectiles.splice(index, 1);
    }
    update(dt) {
      for (let i = this.projectiles.length - 1; i >= 0; i -= 1) {
        const projectile = this.projectiles[i];
        projectile.life -= dt;
        if (projectile.life <= 0) {
          this.removeAt(i);
          continue;
        }
        projectile.mesh.position.addScaledVector(projectile.velocity, dt);
        const bx = Math.floor(projectile.mesh.position.x);
        const by = Math.floor(projectile.mesh.position.y);
        const bz = Math.floor(projectile.mesh.position.z);
        if (G.BlockData.isSolid(this.chunkManager.getBlock(bx, by, bz))) {
          if (projectile.splashRadius > 0) this.enemyManager.damageAt(projectile.mesh.position, projectile.splashRadius, projectile.damage, true);
          this.removeAt(i);
          continue;
        }
        const hitCount = this.enemyManager.damageAt(projectile.mesh.position, projectile.splashRadius > 0 ? 0.95 : 0.85, projectile.damage, projectile.splashRadius > 0);
        if (hitCount > 0) {
          if (projectile.splashRadius > 0) this.enemyManager.damageAt(projectile.mesh.position, projectile.splashRadius, Math.floor(projectile.damage * 0.55), true);
          this.removeAt(i);
        }
      }
    }
  };

  G.NestSystem = class {
    constructor(chunkManager, worldGenerator, enemyManager, brokenNests, worldState) {
      this.chunkManager = chunkManager;
      this.worldGenerator = worldGenerator;
      this.enemyManager = enemyManager;
      this.brokenNests = brokenNests;
      this.worldState = worldState;
      this.state = new Map();
      this.timer = 0;
    }
    onNestBroken(nestKey, nestId) {
      const nestData = G.NESTS[nestId];
      this.brokenNests.add(nestKey);
      this.state.delete(nestKey);
      this.worldState.cleansedNests += nestData ? nestData.worldValue : 1;
    }
    spawnPosNear(nx, ny, nz, enemyType) {
      const preferredMin = enemyType === "slime" ? 1.8 : 3.2;
      const preferredSpread = enemyType === "slime" ? 3.4 : 5.6;
      for (let attempt = 0; attempt < 18; attempt += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = preferredMin + Math.random() * preferredSpread;
        const sx = nx + 0.5 + Math.cos(angle) * radius;
        const sz = nz + 0.5 + Math.sin(angle) * radius;
        if (this.worldGenerator.isInsideTownSafeRadius(sx, sz)) continue;
        const baseSurface = this.worldGenerator.getSurfaceHeight(Math.floor(sx), Math.floor(sz));
        for (let offset = 2; offset >= -2; offset -= 1) {
          const sy = baseSurface + offset + 1;
          const floor = this.chunkManager.getBlock(Math.floor(sx), sy - 1, Math.floor(sz));
          const feet = this.chunkManager.getBlock(Math.floor(sx), sy, Math.floor(sz));
          const head = this.chunkManager.getBlock(Math.floor(sx), sy + 1, Math.floor(sz));
          if (G.BlockData.isSolid(floor) && !G.BlockData.isSolid(feet) && !G.BlockData.isSolid(head)) return new THREE.Vector3(sx, sy, sz);
        }
      }
      for (let ring = 1; ring <= 3; ring += 1) {
        for (let ox = -ring; ox <= ring; ox += 1) {
          for (let oz = -ring; oz <= ring; oz += 1) {
            if (Math.abs(ox) !== ring && Math.abs(oz) !== ring) continue;
            const sx = nx + ox + 0.5;
            const sz = nz + oz + 0.5;
            if (this.worldGenerator.isInsideTownSafeRadius(sx, sz)) continue;
            const sy = this.worldGenerator.getSurfaceHeight(Math.floor(sx), Math.floor(sz)) + 1;
            const floor = this.chunkManager.getBlock(Math.floor(sx), sy - 1, Math.floor(sz));
            const feet = this.chunkManager.getBlock(Math.floor(sx), sy, Math.floor(sz));
            const head = this.chunkManager.getBlock(Math.floor(sx), sy + 1, Math.floor(sz));
            if (G.BlockData.isSolid(floor) && !G.BlockData.isSolid(feet) && !G.BlockData.isSolid(head)) return new THREE.Vector3(sx, sy, sz);
          }
        }
      }
      return null;
    }
    findNearestNest(playerPos, maxDistance) {
      let best = null;
      const pcx = this.chunkManager.worldToChunk(Math.floor(playerPos.x));
      const pcz = this.chunkManager.worldToChunk(Math.floor(playerPos.z));
      for (let dx = -G.RENDER_DISTANCE; dx <= G.RENDER_DISTANCE; dx += 1) {
        for (let dz = -G.RENDER_DISTANCE; dz <= G.RENDER_DISTANCE; dz += 1) {
          const chunk = this.chunkManager.getChunk(pcx + dx, pcz + dz);
          if (!chunk) continue;
          for (let lx = 0; lx < G.CHUNK_SIZE; lx += 1) {
            const wx = chunk.cx * G.CHUNK_SIZE + lx;
            for (let lz = 0; lz < G.CHUNK_SIZE; lz += 1) {
              const wz = chunk.cz * G.CHUNK_SIZE + lz;
              const sy = this.worldGenerator.getSurfaceHeight(wx, wz);
              const blockId = this.chunkManager.getBlock(wx, sy, wz);
              if (!G.NESTS[blockId]) continue;
              const distance = Math.hypot(wx + 0.5 - playerPos.x, wz + 0.5 - playerPos.z);
              if (distance > maxDistance) continue;
              if (!best || distance < best.distance) best = { x: wx, y: sy, z: wz, distance: distance, label: G.NESTS[blockId].label };
            }
          }
        }
      }
      return best;
    }
    update(dt, now, playerPos, timeInfo) {
      this.timer += dt;
      if (this.timer < 0.75) return;
      this.timer = 0;
      const frontierTier = G.getFrontierTier(this.worldState.cleansedNests);
      const pcx = this.chunkManager.worldToChunk(Math.floor(playerPos.x));
      const pcz = this.chunkManager.worldToChunk(Math.floor(playerPos.z));
      for (let dx = -G.RENDER_DISTANCE; dx <= G.RENDER_DISTANCE; dx += 1) {
        for (let dz = -G.RENDER_DISTANCE; dz <= G.RENDER_DISTANCE; dz += 1) {
          const cx = pcx + dx;
          const cz = pcz + dz;
          const chunk = this.chunkManager.getChunk(cx, cz);
          if (!chunk) continue;
          for (let lx = 0; lx < G.CHUNK_SIZE; lx += 1) {
            const wx = cx * G.CHUNK_SIZE + lx;
            for (let lz = 0; lz < G.CHUNK_SIZE; lz += 1) {
              const wz = cz * G.CHUNK_SIZE + lz;
              const sy = this.worldGenerator.getSurfaceHeight(wx, wz);
              const blockId = this.chunkManager.getBlock(wx, sy, wz);
              const nestData = G.NESTS[blockId];
              if (!nestData) continue;
              const nestKey = G.keyXYZ(wx, sy, wz);
              if (this.brokenNests.has(nestKey)) continue;
              const distance = Math.hypot(wx + 0.5 - playerPos.x, wz + 0.5 - playerPos.z);
              if (distance < nestData.minDist || distance > nestData.maxDist) continue;
              const extraAlive = timeInfo.label === "深夜" ? 1 : 0;
              const alive = this.enemyManager.countByNest(nestKey);
              if (alive >= nestData.maxAlive + extraAlive) continue;
              let state = this.state.get(nestKey);
              if (!state) {
                state = { next: now + Math.random() * Math.max(1.5, nestData.spawnInterval * 0.35) };
                this.state.set(nestKey, state);
              }
              if (now < state.next) continue;
              const spawnPosition = this.spawnPosNear(wx, sy, wz, nestData.enemyType);
              if (spawnPosition) {
                this.enemyManager.spawn(nestData.enemyType, nestKey, spawnPosition);
              } else if (nestData.enemyType === "slime") {
                this.enemyManager.spawn(nestData.enemyType, nestKey, new THREE.Vector3(wx + 1.5, sy + 1, wz + 0.5));
              }
              const interval = nestData.spawnInterval * timeInfo.spawnFactor * frontierTier.spawnSlowdown * (nestData.tier === "rare" ? 0.92 : 1);
              state.next = now + interval * (0.7 + Math.random() * 0.35);
            }
          }
        }
      }
    }
  };

  G.VillagerManager = class {
    constructor(scene, chunkManager, worldGenerator) {
      this.scene = scene;
      this.chunkManager = chunkManager;
      this.worldGenerator = worldGenerator;
      this.villagers = new Map();
      this.materialBody = new THREE.MeshLambertMaterial({ color: 0xe8d0b0 });
      this.materialHead = new THREE.MeshLambertMaterial({ color: 0xf5e2c8 });
    }
    ensureTownVillagers(playerPos) {
      const pcx = this.chunkManager.worldToChunk(Math.floor(playerPos.x));
      const pcz = this.chunkManager.worldToChunk(Math.floor(playerPos.z));
      const activeTowns = new Set();
      for (let dx = -G.RENDER_DISTANCE; dx <= G.RENDER_DISTANCE; dx += 1) {
        for (let dz = -G.RENDER_DISTANCE; dz <= G.RENDER_DISTANCE; dz += 1) {
          const wx = (pcx + dx) * G.CHUNK_SIZE + 8;
          const wz = (pcz + dz) * G.CHUNK_SIZE + 8;
          const town = this.worldGenerator.getTownAt(wx, wz);
          if (!town) continue;
          activeTowns.add(town.key);
          if (!this.villagers.has(town.key)) this.spawnTownVillagers(town);
        }
      }
      for (const [key, group] of this.villagers.entries()) {
        if (activeTowns.has(key)) continue;
        for (const villager of group) this.scene.remove(villager.group);
        this.villagers.delete(key);
      }
    }
    spawnTownVillagers(town) {
      const villagers = [];
      const count = G.TOWN_CONFIG.villagerCountMin + Math.floor(G.hash2D01(town.centerX, town.centerZ, 1723) * (G.TOWN_CONFIG.villagerCountMax - G.TOWN_CONFIG.villagerCountMin + 1));
      for (let i = 0; i < count; i += 1) {
        const angle = (i / Math.max(1, count)) * Math.PI * 2;
        const radius = 4 + (i % 3) * 3;
        const x = town.centerX + Math.cos(angle) * radius;
        const z = town.centerZ + Math.sin(angle) * radius;
        const y = this.worldGenerator.getSurfaceHeight(Math.floor(x), Math.floor(z)) + 1;
        const group = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.0, 0.5), this.materialBody);
        const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), this.materialHead);
        body.position.y = 0.9;
        head.position.y = 1.65;
        group.add(body);
        group.add(head);
        group.position.set(x + 0.5, y, z + 0.5);
        this.scene.add(group);
        villagers.push({ group: group, homeX: x + 0.5, homeZ: z + 0.5, phase: Math.random() * Math.PI * 2 });
      }
      this.villagers.set(town.key, villagers);
    }
    update(dt, now) {
      for (const villagers of this.villagers.values()) {
        for (const villager of villagers) {
          const sway = Math.sin(now * 0.0012 + villager.phase) * 0.8;
          const swayZ = Math.cos(now * 0.0009 + villager.phase) * 0.8;
          villager.group.position.x = villager.homeX + sway;
          villager.group.position.z = villager.homeZ + swayZ;
          villager.group.rotation.y += dt * 0.4;
        }
      }
    }
  };
})();
