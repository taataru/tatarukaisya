(function () {
  const G = window.VoxelGame;

  G.Chunk = class {
    constructor(cx, cz) {
      this.cx = cx;
      this.cz = cz;
      this.blocks = new Uint8Array(G.CHUNK_SIZE * G.CHUNK_HEIGHT * G.CHUNK_SIZE);
      this.dirty = true;
    }
    index(lx, y, lz) { return lx + lz * G.CHUNK_SIZE + y * G.CHUNK_SIZE * G.CHUNK_SIZE; }
    get(lx, y, lz) {
      if (lx < 0 || lx >= G.CHUNK_SIZE || lz < 0 || lz >= G.CHUNK_SIZE || y < 0 || y >= G.CHUNK_HEIGHT) return G.BLOCK.AIR;
      return this.blocks[this.index(lx, y, lz)];
    }
    set(lx, y, lz, id) {
      if (lx < 0 || lx >= G.CHUNK_SIZE || lz < 0 || lz >= G.CHUNK_SIZE || y < 0 || y >= G.CHUNK_HEIGHT) return false;
      const idx = this.index(lx, y, lz);
      if (this.blocks[idx] === id) return false;
      this.blocks[idx] = id;
      this.dirty = true;
      return true;
    }
  };

  G.WorldGenerator = class {
    constructor(seed, brokenNestSet) {
      this.seed = seed;
      this.noise = new G.PerlinNoise2D(seed);
      this.brokenNests = brokenNestSet;
    }
    getTemperature(wx, wz) { return this.noise.fractal(wx * 0.0028 + 140, wz * 0.0028 - 70, 4, 0.55, 2.1); }
    getMoisture(wx, wz) { return this.noise.fractal(wx * 0.003 + 300, wz * 0.003 - 220, 4, 0.55, 2.05); }
    getMagic(wx, wz) { return this.noise.fractal(wx * 0.0017 - 180, wz * 0.0017 + 310, 4, 0.52, 2.1); }
    getPeaks(wx, wz) { return this.noise.fractal(wx * 0.0065 + 100, wz * 0.0065 - 130, 3, 0.5, 2.2); }
    getBiomeKey(wx, wz) {
      const magic = this.getMagic(wx, wz);
      const moisture = this.getMoisture(wx, wz);
      const peaks = this.getPeaks(wx, wz);
      const temp = this.getTemperature(wx, wz);
      if (magic > 0.28 && moisture > 0.02) return "mystic";
      if (peaks > 0.22 || temp < -0.15) return "highlands";
      if (moisture > 0.24) return "swamp";
      if (moisture > -0.05) return "forest";
      return "meadow";
    }
    getBiome(wx, wz) { return G.BIOMES[this.getBiomeKey(wx, wz)]; }
    getSurfaceHeight(wx, wz) {
      const biome = this.getBiome(wx, wz);
      const continental = this.noise.fractal(wx * 0.0022, wz * 0.0022, 3, 0.55, 2.1);
      const hills = this.noise.fractal(wx * 0.009, wz * 0.009, 4, 0.5, 2);
      const detail = this.noise.fractal(wx * 0.035, wz * 0.035, 2, 0.55, 2);
      const peaks = Math.max(0, this.getPeaks(wx, wz));
      return G.clamp(Math.floor(72 + (continental * 0.58 + hills * 0.31 + detail * 0.11) * 22 + biome.heightBias + peaks * 10), 6, G.CHUNK_HEIGHT - 3);
    }
    localCoord(v) {
      const mod = v % G.CHUNK_SIZE;
      return mod < 0 ? mod + G.CHUNK_SIZE : mod;
    }
    setWorldBlockInChunk(chunk, wx, wy, wz, id) {
      if (wy < 0 || wy >= G.CHUNK_HEIGHT) return;
      const cx = Math.floor(wx / G.CHUNK_SIZE);
      const cz = Math.floor(wz / G.CHUNK_SIZE);
      if (cx !== chunk.cx || cz !== chunk.cz) return;
      chunk.set(this.localCoord(wx), wy, this.localCoord(wz), id);
    }
    clearWorldBlockInChunk(chunk, wx, startY, endY, wz) {
      for (let y = startY; y <= endY; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.AIR);
    }
    getTownForCell(cellX, cellZ) {
      if (G.hash2D01(cellX, cellZ, this.seed + 1401) > G.TOWN_CONFIG.chance) return null;
      const baseX = cellX * G.TOWN_CONFIG.cellSize;
      const baseZ = cellZ * G.TOWN_CONFIG.cellSize;
      const centerX = baseX + Math.floor(G.hash2D01(cellX, cellZ, this.seed + 1427) * (G.TOWN_CONFIG.cellSize - 32)) + 16;
      const centerZ = baseZ + Math.floor(G.hash2D01(cellX, cellZ, this.seed + 1459) * (G.TOWN_CONFIG.cellSize - 32)) + 16;
      const radiusX = G.TOWN_CONFIG.minHalfSize + Math.floor(G.hash2D01(cellX, cellZ, this.seed + 1493) * (G.TOWN_CONFIG.maxHalfSize - G.TOWN_CONFIG.minHalfSize + 1));
      const radiusZ = G.TOWN_CONFIG.minHalfSize + Math.floor(G.hash2D01(cellX, cellZ, this.seed + 1511) * (G.TOWN_CONFIG.maxHalfSize - G.TOWN_CONFIG.minHalfSize + 1));
      return {
        key: `${cellX},${cellZ}`,
        label: `城壁都市 ${Math.abs(cellX)}-${Math.abs(cellZ)}`,
        centerX: centerX,
        centerZ: centerZ,
        radiusX: radiusX,
        radiusZ: radiusZ,
        safeRadius: Math.max(radiusX, radiusZ) + G.TOWN_CONFIG.safeRadiusPadding
      };
    }
    getTownAt(wx, wz) {
      const cellSize = G.TOWN_CONFIG.cellSize;
      const cellX = Math.floor(wx / cellSize);
      const cellZ = Math.floor(wz / cellSize);
      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dz = -1; dz <= 1; dz += 1) {
          const town = this.getTownForCell(cellX + dx, cellZ + dz);
          if (!town) continue;
          if (Math.abs(wx - town.centerX) <= town.radiusX + 2 && Math.abs(wz - town.centerZ) <= town.radiusZ + 2) return town;
        }
      }
      return null;
    }
    isInsideTown(wx, wz) {
      const town = this.getTownAt(wx, wz);
      if (!town) return false;
      return Math.abs(wx - town.centerX) <= town.radiusX && Math.abs(wz - town.centerZ) <= town.radiusZ;
    }
    isInsideTownSafeRadius(wx, wz) {
      const town = this.getTownAt(wx, wz);
      if (!town) return false;
      return Math.abs(wx - town.centerX) <= town.safeRadius && Math.abs(wz - town.centerZ) <= town.safeRadius;
    }
    pickNest(wx, wy, wz) {
      if (wy < 58 || this.isInsideTownSafeRadius(wx, wz)) return G.BLOCK.AIR;
      const cell = 24;
      const cx = Math.floor(wx / cell);
      const cz = Math.floor(wz / cell);
      const candidateX = cx * cell + Math.floor(G.hash2D01(cx, cz, this.seed + 17) * cell);
      const candidateZ = cz * cell + Math.floor(G.hash2D01(cx, cz, this.seed + 41) * cell);
      if (candidateX !== wx || candidateZ !== wz) return G.BLOCK.AIR;
      if (this.brokenNests.has(G.keyXYZ(wx, wy, wz))) return G.BLOCK.AIR;
      const biomeKey = this.getBiomeKey(wx, wz);
      const biome = G.BIOMES[biomeKey];
      if (G.hash2D01(cx, cz, this.seed + 67) > biome.nestChance) return G.BLOCK.AIR;
      const rareRoll = G.hash2D01(cx, cz, this.seed + 93);
      if (biomeKey === "swamp") return rareRoll < 0.14 ? G.BLOCK.SLIME_RIFT : G.BLOCK.SLIME_NEST;
      if (biomeKey === "forest") return rareRoll < 0.1 ? G.BLOCK.ANCIENT_TREE : G.BLOCK.WOOD_NEST;
      if (biomeKey === "highlands") return rareRoll < 0.08 ? G.BLOCK.SLIME_RIFT : (rareRoll < 0.48 ? G.BLOCK.SLIME_NEST : G.BLOCK.WOOD_NEST);
      if (biomeKey === "mystic") return rareRoll < 0.32 ? G.BLOCK.ANCIENT_TREE : G.BLOCK.SLIME_RIFT;
      return rareRoll < 0.1 ? G.BLOCK.WOOD_NEST : G.BLOCK.SLIME_NEST;
    }
    clearSpawnSpace(chunk, wx, wz, surface) {
      for (let x = wx - 2; x <= wx + 2; x += 1) {
        for (let z = wz - 2; z <= wz + 2; z += 1) {
          for (let y = surface + 1; y <= surface + 4; y += 1) this.setWorldBlockInChunk(chunk, x, y, z, G.BLOCK.AIR);
          if (Math.abs(x - wx) <= 1 && Math.abs(z - wz) <= 1) this.setWorldBlockInChunk(chunk, x, surface, z, this.getBiome(x, z).surfaceBlock);
        }
      }
    }
    placeTree(chunk, wx, wz) {
      if (this.isInsideTownSafeRadius(wx, wz)) return;
      const biomeKey = this.getBiomeKey(wx, wz);
      const surface = this.getSurfaceHeight(wx, wz);
      if (this.getBiome(wx, wz).surfaceBlock === G.BLOCK.STONE) return;
      const trunkHeight = (biomeKey === "mystic" ? 6 : 4) + (G.hash2DInt(wx, wz, this.seed + 503) % 3);
      for (let y = surface + 1; y <= surface + trunkHeight; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.WOOD_LOG);
      const crownY = surface + trunkHeight;
      const crownRadius = biomeKey === "mystic" ? 3 : 2;
      for (let x = wx - crownRadius; x <= wx + crownRadius; x += 1) {
        for (let z = wz - crownRadius; z <= wz + crownRadius; z += 1) {
          for (let y = crownY - 2; y <= crownY + 1; y += 1) {
            const d = Math.abs(x - wx) + Math.abs(z - wz) + Math.abs(y - crownY);
            if (d > (biomeKey === "mystic" ? 5 : 4)) continue;
            if (x === wx && z === wz && y <= crownY) continue;
            this.setWorldBlockInChunk(chunk, x, y, z, G.BLOCK.LEAVES);
          }
        }
      }
    }
    placeStoneOutcrop(chunk, wx, wz) {
      if (this.isInsideTownSafeRadius(wx, wz)) return;
      const surface = this.getSurfaceHeight(wx, wz);
      const height = 2 + (G.hash2DInt(wx, wz, this.seed + 711) % 3);
      for (let y = surface + 1; y <= surface + height; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.COBBLE);
    }
    decorateTrees(chunk) {
      const minX = chunk.cx * G.CHUNK_SIZE;
      const maxX = minX + G.CHUNK_SIZE - 1;
      const minZ = chunk.cz * G.CHUNK_SIZE;
      const maxZ = minZ + G.CHUNK_SIZE - 1;
      for (let cx = Math.floor((minX - 2) / 7); cx <= Math.floor((maxX + 2) / 7); cx += 1) {
        for (let cz = Math.floor((minZ - 2) / 7); cz <= Math.floor((maxZ + 2) / 7); cz += 1) {
          const tx = cx * 7 + Math.floor(G.hash2D01(cx, cz, this.seed + 311) * 7);
          const tz = cz * 7 + Math.floor(G.hash2D01(cx, cz, this.seed + 353) * 7);
          if (tx < minX - 2 || tx > maxX + 2 || tz < minZ - 2 || tz > maxZ + 2) continue;
          const biome = this.getBiome(tx, tz);
          if (G.hash2D01(cx, cz, this.seed + 389) > biome.treeDensity) continue;
          if (this.getSurfaceHeight(tx, tz) < 58 || this.pickNest(tx, this.getSurfaceHeight(tx, tz), tz) !== G.BLOCK.AIR) continue;
          this.placeTree(chunk, tx, tz);
        }
      }
    }
    decorateStoneOutcrops(chunk) {
      const minX = chunk.cx * G.CHUNK_SIZE;
      const maxX = minX + G.CHUNK_SIZE - 1;
      const minZ = chunk.cz * G.CHUNK_SIZE;
      const maxZ = minZ + G.CHUNK_SIZE - 1;
      for (let cx = Math.floor((minX - 2) / 11); cx <= Math.floor((maxX + 2) / 11); cx += 1) {
        for (let cz = Math.floor((minZ - 2) / 11); cz <= Math.floor((maxZ + 2) / 11); cz += 1) {
          const tx = cx * 11 + Math.floor(G.hash2D01(cx, cz, this.seed + 801) * 11);
          const tz = cz * 11 + Math.floor(G.hash2D01(cx, cz, this.seed + 843) * 11);
          if (tx < minX - 2 || tx > maxX + 2 || tz < minZ - 2 || tz > maxZ + 2) continue;
          const biomeKey = this.getBiomeKey(tx, tz);
          if (biomeKey !== "highlands" && biomeKey !== "mystic") continue;
          if (G.hash2D01(cx, cz, this.seed + 907) > (biomeKey === "highlands" ? 0.18 : 0.08)) continue;
          this.placeStoneOutcrop(chunk, tx, tz);
        }
      }
    }
    applyTown(chunk) {
      const minX = chunk.cx * G.CHUNK_SIZE;
      const maxX = minX + G.CHUNK_SIZE - 1;
      const minZ = chunk.cz * G.CHUNK_SIZE;
      const maxZ = minZ + G.CHUNK_SIZE - 1;
      const cellSize = G.TOWN_CONFIG.cellSize;
      for (let cellX = Math.floor((minX - cellSize) / cellSize); cellX <= Math.floor((maxX + cellSize) / cellSize); cellX += 1) {
        for (let cellZ = Math.floor((minZ - cellSize) / cellSize); cellZ <= Math.floor((maxZ + cellSize) / cellSize); cellZ += 1) {
          const town = this.getTownForCell(cellX, cellZ);
          if (!town) continue;
          const left = town.centerX - town.radiusX;
          const right = town.centerX + town.radiusX;
          const top = town.centerZ - town.radiusZ;
          const bottom = town.centerZ + town.radiusZ;
          for (let wx = Math.max(minX, left - 2); wx <= Math.min(maxX, right + 2); wx += 1) {
            for (let wz = Math.max(minZ, top - 2); wz <= Math.min(maxZ, bottom + 2); wz += 1) {
              const surface = this.getSurfaceHeight(wx, wz);
              const inside = Math.abs(wx - town.centerX) <= town.radiusX && Math.abs(wz - town.centerZ) <= town.radiusZ;
              const wall = (Math.abs(wx - town.centerX) === town.radiusX && Math.abs(wz - town.centerZ) <= town.radiusZ) || (Math.abs(wz - town.centerZ) === town.radiusZ && Math.abs(wx - town.centerX) <= town.radiusX);
              const road = inside && (Math.abs(wx - town.centerX) <= 1 || Math.abs(wz - town.centerZ) <= 1);
              const plaza = inside && Math.abs(wx - town.centerX) <= 4 && Math.abs(wz - town.centerZ) <= 4;
              if (!inside && !wall) continue;
              for (let y = surface + 1; y <= surface + 8; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.AIR);
              this.setWorldBlockInChunk(chunk, wx, surface, wz, road || plaza ? G.BLOCK.TOWN_PATH : G.BLOCK.GRASS);
              if (wall) {
                for (let y = surface + 1; y <= surface + G.TOWN_CONFIG.wallHeight; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.TOWN_STONE);
              }
            }
          }
          const houses = [
            { x: town.centerX - 8, z: town.centerZ - 8, w: 6, d: 5 },
            { x: town.centerX + 5, z: town.centerZ - 8, w: 5, d: 6 },
            { x: town.centerX - 9, z: town.centerZ + 5, w: 7, d: 5 },
            { x: town.centerX + 4, z: town.centerZ + 5, w: 6, d: 6 }
          ];
          for (const house of houses) this.placeTownHouse(chunk, house.x, house.z, house.w, house.d);
          this.placeTownLantern(chunk, town.centerX - 3, town.centerZ - 3);
          this.placeTownLantern(chunk, town.centerX + 3, town.centerZ - 3);
          this.placeTownLantern(chunk, town.centerX - 3, town.centerZ + 3);
          this.placeTownLantern(chunk, town.centerX + 3, town.centerZ + 3);
        }
      }
    }
    placeTownHouse(chunk, startX, startZ, width, depth) {
      for (let wx = startX; wx < startX + width; wx += 1) {
        for (let wz = startZ; wz < startZ + depth; wz += 1) {
          const surface = this.getSurfaceHeight(wx, wz);
          const edge = wx === startX || wx === startX + width - 1 || wz === startZ || wz === startZ + depth - 1;
          this.setWorldBlockInChunk(chunk, wx, surface, wz, G.BLOCK.TOWN_PATH);
          for (let y = surface + 1; y <= surface + 4; y += 1) {
            const isDoor = wx === startX + Math.floor(width / 2) && wz === startZ;
            if (edge && !(isDoor && y <= surface + 2)) {
              const isWindow = (y === surface + 2) && ((wx === startX || wx === startX + width - 1) && wz === startZ + Math.floor(depth / 2) || (wz === startZ || wz === startZ + depth - 1) && wx === startX + Math.floor(width / 2));
              this.setWorldBlockInChunk(chunk, wx, y, wz, isWindow ? G.BLOCK.TOWN_GLASS : G.BLOCK.PLANKS);
            } else {
              this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.AIR);
            }
          }
          this.setWorldBlockInChunk(chunk, wx, surface + 5, wz, G.BLOCK.TOWN_ROOF);
        }
      }
    }
    placeTownLantern(chunk, wx, wz) {
      const surface = this.getSurfaceHeight(wx, wz);
      for (let y = surface + 1; y <= surface + 3; y += 1) this.setWorldBlockInChunk(chunk, wx, y, wz, G.BLOCK.WOOD_LOG);
      this.setWorldBlockInChunk(chunk, wx, surface + 4, wz, G.BLOCK.TOWN_LANTERN);
    }
    fillChunk(chunk) {
      for (let lx = 0; lx < G.CHUNK_SIZE; lx += 1) {
        const wx = chunk.cx * G.CHUNK_SIZE + lx;
        for (let lz = 0; lz < G.CHUNK_SIZE; lz += 1) {
          const wz = chunk.cz * G.CHUNK_SIZE + lz;
          const biome = this.getBiome(wx, wz);
          const surface = this.getSurfaceHeight(wx, wz);
          for (let y = 0; y <= surface; y += 1) {
            let id = G.BLOCK.STONE;
            if (y === surface) id = biome.surfaceBlock;
            else if (y >= surface - 3 && biome.surfaceBlock !== G.BLOCK.STONE) id = G.BLOCK.DIRT;
            chunk.set(lx, y, lz, id);
          }
          const nest = this.pickNest(wx, surface, wz);
          if (nest !== G.BLOCK.AIR) {
            chunk.set(lx, surface, lz, nest);
            this.clearSpawnSpace(chunk, wx, wz, surface);
            chunk.set(lx, surface, lz, nest);
          }
        }
      }
      this.decorateTrees(chunk);
      this.decorateStoneOutcrops(chunk);
      this.applyTown(chunk);
      chunk.dirty = true;
    }
  };

  G.FACE_DEFS = [
    { dir: [1, 0, 0], corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]] },
    { dir: [-1, 0, 0], corners: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]] },
    { dir: [0, 1, 0], corners: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]] },
    { dir: [0, -1, 0], corners: [[0, 0, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1]] },
    { dir: [0, 0, 1], corners: [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]] },
    { dir: [0, 0, -1], corners: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]] }
  ];

  G.pushFace = function (position, normal, color, bx, by, bz, face, blockId) {
    const base = new THREE.Color(G.BlockData.getFaceColor(blockId, face.dir));
    const shade = G.BlockData.getFaceShade(face.dir);
    const verts = [face.corners[0], face.corners[1], face.corners[2], face.corners[0], face.corners[2], face.corners[3]];
    for (const vert of verts) {
      position.push(bx + vert[0], by + vert[1], bz + vert[2]);
      normal.push(face.dir[0], face.dir[1], face.dir[2]);
      color.push(base.r * shade, base.g * shade, base.b * shade);
    }
  };

  G.ChunkRenderer = class {
    constructor(scene) {
      this.scene = scene;
      this.groups = new Map();
      this.material = new THREE.MeshLambertMaterial({ vertexColors: true });
    }
    removeChunk(key) {
      const group = this.groups.get(key);
      if (!group) return;
      this.scene.remove(group);
      group.traverse((node) => { if (node.isMesh) node.geometry.dispose(); });
      this.groups.delete(key);
    }
    rebuildChunk(chunk, getWorldBlock) {
      const key = `${chunk.cx},${chunk.cz}`;
      this.removeChunk(key);
      const position = [];
      const normal = [];
      const color = [];
      for (let lx = 0; lx < G.CHUNK_SIZE; lx += 1) {
        for (let lz = 0; lz < G.CHUNK_SIZE; lz += 1) {
          for (let y = 0; y < G.CHUNK_HEIGHT; y += 1) {
            const id = chunk.get(lx, y, lz);
            if (!G.BlockData.isSolid(id)) continue;
            const wx = chunk.cx * G.CHUNK_SIZE + lx;
            const wz = chunk.cz * G.CHUNK_SIZE + lz;
            for (const face of G.FACE_DEFS) {
              const nx = face.dir[0];
              const ny = face.dir[1];
              const nz = face.dir[2];
              if (G.BlockData.isSolid(getWorldBlock(wx + nx, y + ny, wz + nz))) continue;
              G.pushFace(position, normal, color, wx, y, wz, face, id);
            }
          }
        }
      }
      const group = new THREE.Group();
      if (position.length) {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(position, 3));
        geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normal, 3));
        geometry.setAttribute("color", new THREE.Float32BufferAttribute(color, 3));
        geometry.computeBoundingSphere();
        group.add(new THREE.Mesh(geometry, this.material));
      }
      this.scene.add(group);
      this.groups.set(key, group);
    }
    getRaycastTargets() {
      const targets = [];
      for (const group of this.groups.values()) for (const child of group.children) if (child.isMesh) targets.push(child);
      return targets;
    }
  };

  G.ChunkManager = class {
    constructor(generator, renderer) {
      this.generator = generator;
      this.renderer = renderer;
      this.chunks = new Map();
      this.dirty = new Set();
    }
    key(cx, cz) { return `${cx},${cz}`; }
    worldToChunk(v) { return Math.floor(v / G.CHUNK_SIZE); }
    worldToLocal(v) { const mod = v % G.CHUNK_SIZE; return mod < 0 ? mod + G.CHUNK_SIZE : mod; }
    getChunk(cx, cz) { return this.chunks.get(this.key(cx, cz)) || null; }
    ensureChunk(cx, cz) {
      const key = this.key(cx, cz);
      if (this.chunks.has(key)) return this.chunks.get(key);
      const chunk = new G.Chunk(cx, cz);
      this.generator.fillChunk(chunk);
      this.chunks.set(key, chunk);
      this.dirty.add(key);
      return chunk;
    }
    unloadChunk(cx, cz) {
      const key = this.key(cx, cz);
      if (!this.chunks.has(key)) return;
      this.renderer.removeChunk(key);
      this.chunks.delete(key);
      this.dirty.delete(key);
    }
    getBlock(wx, wy, wz) {
      if (wy < 0 || wy >= G.CHUNK_HEIGHT) return G.BLOCK.AIR;
      const chunk = this.getChunk(this.worldToChunk(wx), this.worldToChunk(wz));
      if (!chunk) return G.BLOCK.AIR;
      return chunk.get(this.worldToLocal(wx), wy, this.worldToLocal(wz));
    }
    setBlock(wx, wy, wz, id) {
      if (wy < 0 || wy >= G.CHUNK_HEIGHT) return false;
      const cx = this.worldToChunk(wx);
      const cz = this.worldToChunk(wz);
      const chunk = this.ensureChunk(cx, cz);
      const lx = this.worldToLocal(wx);
      const lz = this.worldToLocal(wz);
      const changed = chunk.set(lx, wy, lz, id);
      if (!changed) return false;
      this.dirty.add(this.key(cx, cz));
      if (lx === 0) this.dirty.add(this.key(cx - 1, cz));
      if (lx === G.CHUNK_SIZE - 1) this.dirty.add(this.key(cx + 1, cz));
      if (lz === 0) this.dirty.add(this.key(cx, cz - 1));
      if (lz === G.CHUNK_SIZE - 1) this.dirty.add(this.key(cx, cz + 1));
      return true;
    }
    update(playerPos) {
      const pcx = this.worldToChunk(Math.floor(playerPos.x));
      const pcz = this.worldToChunk(Math.floor(playerPos.z));
      for (let dx = -G.RENDER_DISTANCE; dx <= G.RENDER_DISTANCE; dx += 1) {
        for (let dz = -G.RENDER_DISTANCE; dz <= G.RENDER_DISTANCE; dz += 1) this.ensureChunk(pcx + dx, pcz + dz);
      }
      for (const key of Array.from(this.chunks.keys())) {
        const parts = key.split(",").map(Number);
        if (Math.abs(parts[0] - pcx) > G.UNLOAD_DISTANCE || Math.abs(parts[1] - pcz) > G.UNLOAD_DISTANCE) this.unloadChunk(parts[0], parts[1]);
      }
    }
    rebuildDirty(maxCount) {
      const keys = Array.from(this.dirty).slice(0, maxCount);
      for (const key of keys) {
        const chunk = this.chunks.get(key);
        if (chunk) this.renderer.rebuildChunk(chunk, (x, y, z) => this.getBlock(x, y, z));
        this.dirty.delete(key);
      }
    }
    getLoadedChunkCount() { return this.chunks.size; }
  };
})();
