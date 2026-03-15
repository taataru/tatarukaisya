(function () {
  const G = window.VoxelGame = window.VoxelGame || {};

  G.CHUNK_SIZE = 16;
  G.CHUNK_HEIGHT = 192;
  G.MAX_STACK = 64;
  G.RENDER_DISTANCE = 3;
  G.UNLOAD_DISTANCE = 5;
  G.DAY_DURATION = 240;

  G.PLAYER_CONFIG = {
    height: 1.8,
    radius: 0.34,
    eyeHeight: 1.62,
    walkSpeed: 5.5,
    jumpPower: 8.8,
    gravity: 24,
    baseMaxHp: 100
  };

  G.HAND_ATTACK = { damage: 6, reach: 2.3, radius: 0.9, cooldown: 0.32 };

  G.BLOCK = {
    AIR: 0,
    GRASS: 1,
    DIRT: 2,
    STONE: 3,
    SLIME_NEST: 4,
    WOOD_NEST: 5,
    WOOD_LOG: 6,
    LEAVES: 7,
    PLANKS: 8,
    COBBLE: 9,
    MYSTIC_GRASS: 10,
    SLIME_RIFT: 11,
    ANCIENT_TREE: 12,
    TOWN_STONE: 13,
    TOWN_PATH: 14,
    TOWN_ROOF: 15,
    TOWN_GLASS: 16,
    TOWN_LANTERN: 17
  };

  G.BLOCKS = {
    0: { id: 0, key: "air", label: "空気", solid: false, breakTime: 0, color: 0x000000, drops: [] },
    1: { id: 1, key: "grass", label: "草ブロック", solid: true, breakTime: 0.45, color: 0x66a84f, topColor: 0x69b54f, sideColor: 0x7e6438, bottomColor: 0x8b5a2b, drops: [{ itemKey: "grass_block", min: 1, max: 1 }, { itemKey: "grass_fiber", min: 0, max: 1 }, { itemKey: "spring_water", min: 0, max: 1, chance: 0.2 }] },
    2: { id: 2, key: "dirt", label: "土", solid: true, breakTime: 0.35, color: 0x8b5a2b, drops: [{ itemKey: "dirt_block", min: 1, max: 1 }] },
    3: { id: 3, key: "stone", label: "石", solid: true, breakTime: 0.9, color: 0x808080, drops: [{ itemKey: "stone_block", min: 1, max: 1 }] },
    4: { id: 4, key: "slime_nest", label: "スライムの巣", solid: true, breakTime: 1.1, color: 0x49d97f, drops: [{ itemKey: "slime_gel", min: 2, max: 4 }, { itemKey: "magic_stone", min: 0, max: 1, chance: 0.2 }] },
    5: { id: 5, key: "wood_nest", label: "ウッドマンの巣", solid: true, breakTime: 1.2, color: 0x9f6d3a, drops: [{ itemKey: "mystic_branch", min: 2, max: 4 }, { itemKey: "leaf_bundle", min: 1, max: 2 }] },
    6: { id: 6, key: "wood_log", label: "木", solid: true, breakTime: 0.5, color: 0x7a532b, drops: [{ itemKey: "wood_log_block", min: 1, max: 1 }] },
    7: { id: 7, key: "leaves", label: "葉", solid: true, breakTime: 0.22, color: 0x4f8b3f, drops: [{ itemKey: "leaves_block", min: 0, max: 1, chance: 0.7 }, { itemKey: "leaf_bundle", min: 1, max: 2 }] },
    8: { id: 8, key: "planks", label: "木の壁", solid: true, breakTime: 0.45, color: 0xb1824f, drops: [{ itemKey: "planks_block", min: 1, max: 1 }] },
    9: { id: 9, key: "cobble", label: "石レンガ", solid: true, breakTime: 0.8, color: 0x6f6f72, drops: [{ itemKey: "cobble_block", min: 1, max: 1 }] },
    10: { id: 10, key: "mystic_grass", label: "魔法草地", solid: true, breakTime: 0.5, color: 0x58c7a0, topColor: 0x68f2bf, sideColor: 0x5d7e62, bottomColor: 0x7b5d42, drops: [{ itemKey: "grass_block", min: 1, max: 1 }, { itemKey: "grass_fiber", min: 1, max: 2 }, { itemKey: "magic_stone", min: 0, max: 1, chance: 0.24 }] },
    11: { id: 11, key: "slime_rift", label: "巨大スライム巣", solid: true, breakTime: 1.5, color: 0x2ce3a6, drops: [{ itemKey: "slime_gel", min: 3, max: 5 }, { itemKey: "slime_core", min: 1, max: 1 }, { itemKey: "magic_stone", min: 1, max: 2 }] },
    12: { id: 12, key: "ancient_tree", label: "古代の木", solid: true, breakTime: 1.6, color: 0xc48a45, drops: [{ itemKey: "mystic_branch", min: 3, max: 5 }, { itemKey: "ancient_branch", min: 1, max: 1 }, { itemKey: "leaf_bundle", min: 2, max: 4 }] },
    13: { id: 13, key: "town_stone", label: "町の石壁", solid: true, breakTime: 1.0, color: 0x9aa0a8, drops: [{ itemKey: "cobble_block", min: 1, max: 1 }] },
    14: { id: 14, key: "town_path", label: "石畳の道", solid: true, breakTime: 0.55, color: 0xb69c76, drops: [{ itemKey: "cobble_block", min: 1, max: 1 }] },
    15: { id: 15, key: "town_roof", label: "町の屋根", solid: true, breakTime: 0.6, color: 0x8b4336, drops: [{ itemKey: "planks_block", min: 1, max: 1 }] },
    16: { id: 16, key: "town_glass", label: "町の窓", solid: false, breakTime: 0.2, color: 0xa8e7ff, drops: [] },
    17: { id: 17, key: "town_lantern", label: "街灯", solid: true, breakTime: 0.35, color: 0xffd36c, drops: [{ itemKey: "lantern", min: 1, max: 1 }] }
  };

  G.BIOMES = {
    meadow: { key: "meadow", label: "草原", surfaceBlock: G.BLOCK.GRASS, heightBias: 0, treeDensity: 0.1, nestChance: 0.18 },
    forest: { key: "forest", label: "森", surfaceBlock: G.BLOCK.GRASS, heightBias: 3, treeDensity: 0.28, nestChance: 0.28 },
    swamp: { key: "swamp", label: "沼地", surfaceBlock: G.BLOCK.GRASS, heightBias: -4, treeDensity: 0.22, nestChance: 0.32 },
    highlands: { key: "highlands", label: "岩山", surfaceBlock: G.BLOCK.STONE, heightBias: 8, treeDensity: 0.05, nestChance: 0.2 },
    mystic: { key: "mystic", label: "魔法の森", surfaceBlock: G.BLOCK.MYSTIC_GRASS, heightBias: 2, treeDensity: 0.2, nestChance: 0.34 }
  };

  G.TOWN_CONFIG = {
    cellSize: 128,
    chance: 0.3,
    minHalfSize: 18,
    maxHalfSize: 28,
    wallHeight: 5,
    safeRadiusPadding: 5,
    villagerCountMin: 4,
    villagerCountMax: 8
  };

  G.ITEMS = {
    grass_block: { key: "grass_block", label: "草ブロック", kind: "block", blockId: 1, stack: 64, color: 0x66a84f, icon: "" },
    dirt_block: { key: "dirt_block", label: "土", kind: "block", blockId: 2, stack: 64, color: 0x8b5a2b, icon: "" },
    stone_block: { key: "stone_block", label: "石", kind: "block", blockId: 3, stack: 64, color: 0x808080, icon: "icon_stone_1773608464428.png" },
    wood_log_block: { key: "wood_log_block", label: "木", kind: "block", blockId: 6, stack: 64, color: 0x7a532b, icon: "icon_wood_log_1773608449426.png" },
    leaves_block: { key: "leaves_block", label: "葉ブロック", kind: "block", blockId: 7, stack: 64, color: 0x4f8b3f, icon: "" },
    planks_block: { key: "planks_block", label: "木の壁", kind: "block", blockId: 8, stack: 64, color: 0xb1824f, icon: "" },
    cobble_block: { key: "cobble_block", label: "石レンガ", kind: "block", blockId: 9, stack: 64, color: 0x6f6f72, icon: "" },
    grass_fiber: { key: "grass_fiber", label: "草", kind: "material", stack: 64, color: 0x87cc5c, icon: "" },
    leaf_bundle: { key: "leaf_bundle", label: "葉", kind: "material", stack: 64, color: 0x60a04d, icon: "" },
    spring_water: { key: "spring_water", label: "水", kind: "material", stack: 64, color: 0x74d3ff, icon: "" },
    slime_gel: { key: "slime_gel", label: "粘液", kind: "material", stack: 64, color: 0x6bff9d, icon: "icon_slime_gel_1773608479405.png" },
    mystic_branch: { key: "mystic_branch", label: "不思議な枝", kind: "material", stack: 64, color: 0xc38a4d, icon: "icon_mystic_branch_1773608499095.png" },
    magic_stone: { key: "magic_stone", label: "魔石", kind: "material", stack: 64, color: 0x8f7cff, icon: "" },
    slime_core: { key: "slime_core", label: "スライムコア", kind: "material", stack: 64, color: 0x46ffc5, icon: "icon_slime_core_1773608577107.png" },
    ancient_branch: { key: "ancient_branch", label: "古代の枝", kind: "material", stack: 64, color: 0xf0b36a, icon: "icon_ancient_branch_1773608636408.png" },
    wooden_sword: { key: "wooden_sword", label: "木の剣", kind: "weapon", stack: 1, color: 0x8b5a2b, style: "melee", damage: 15, reach: 3.3, radius: 0.95, cooldown: 0.24, icon: "icon_wooden_sword_1773608514264.png" },
    stone_sword: { key: "stone_sword", label: "石の剣", kind: "weapon", stack: 1, color: 0x8d8d8d, style: "melee", damage: 25, reach: 3.5, radius: 1.0, cooldown: 0.27, icon: "icon_stone_sword_1773608530488.png" },
    magic_wand: { key: "magic_wand", label: "魔法の杖", kind: "weapon", stack: 1, color: 0x66ccff, style: "projectile", cooldown: 0.35, projectile: { speed: 27, damage: 28, life: 1.2, color: 0x66ccff, size: 0.14 }, icon: "icon_magic_wand_1773608544843.png" },
    forest_wand: { key: "forest_wand", label: "森の杖", kind: "weapon", stack: 1, color: 0x7dffb4, style: "projectile", cooldown: 0.28, projectile: { speed: 34, damage: 35, life: 1.35, color: 0x7dffb4, size: 0.14 }, icon: "icon_forest_wand_1773608564421.png" },
    explosion_wand: { key: "explosion_wand", label: "爆発の杖", kind: "weapon", stack: 1, color: 0xffb74b, style: "projectile", cooldown: 0.55, projectile: { speed: 22, damage: 42, life: 1.0, color: 0xffb74b, size: 0.18, splashRadius: 2.4 }, icon: "" },
    healing_wand: { key: "healing_wand", label: "回復の杖", kind: "weapon", stack: 1, color: 0x7bf7ff, style: "heal", cooldown: 0.7, heal: 24, icon: "" },
    wooden_shield: { key: "wooden_shield", label: "木の盾", kind: "defense", stack: 1, color: 0x8a5b2e, damageReduction: 0.22, icon: "icon_wooden_shield_1773608718437.png" },
    stone_shield: { key: "stone_shield", label: "石の盾", kind: "defense", stack: 1, color: 0x8b8b8f, damageReduction: 0.38, icon: "icon_stone_shield_amulet_bomb_1773608737466.png" },
    magic_amulet: { key: "magic_amulet", label: "魔法の護符", kind: "accessory", stack: 1, color: 0x9e77ff, magicReduction: 0.18, bonusHp: 20, icon: "" },
    grass_potion: { key: "grass_potion", label: "草の薬", kind: "consumable", stack: 16, color: 0x8ad15d, heal: 18, icon: "icon_grass_potion_1773608674848.png" },
    forest_potion: { key: "forest_potion", label: "森の薬", kind: "consumable", stack: 16, color: 0x5cff8e, heal: 34, icon: "icon_forest_potion_1773608687003.png" },
    life_potion: { key: "life_potion", label: "生命ポーション", kind: "consumable", stack: 8, color: 0xff667f, heal: 62, icon: "icon_life_potion_1773608703380.png" },
    nest_detector: { key: "nest_detector", label: "巣探知器", kind: "utility", stack: 1, color: 0x62f6ff, icon: "icon_nest_detector_1773608757455.png" },
    nest_bomb: { key: "nest_bomb", label: "巣破壊爆弾", kind: "utility", stack: 16, color: 0xff8e52, icon: "" },
    lantern: { key: "lantern", label: "ランタン", kind: "utility", stack: 1, color: 0xffd36c, icon: "icon_lantern_1773608654087.png" }
  };

  G.ENEMIES = {
    slime: { key: "slime", label: "スライム", hp: 40, speed: 2.0, size: 1.5, height: 1.4, color: 0x4fd96d, touchDamage: 9, attackCooldown: 1.0, contactRadius: 1.25, chaseRange: 26, drops: [{ itemKey: "slime_gel", min: 1, max: 2 }, { itemKey: "slime_core", min: 0, max: 1, chance: 0.06 }] },
    woodman: { key: "woodman", label: "ウッドマン", hp: 70, speed: 1.7, size: 1.0, height: 2.0, color: 0x9f6d3a, touchDamage: 13, attackCooldown: 1.15, contactRadius: 1.45, chaseRange: 28, drops: [{ itemKey: "mystic_branch", min: 1, max: 2 }, { itemKey: "leaf_bundle", min: 1, max: 1 }] },
    prism_slime: { key: "prism_slime", label: "巨大スライム", hp: 110, speed: 1.6, size: 2.1, height: 1.8, color: 0x33ffd0, touchDamage: 18, attackCooldown: 1.2, contactRadius: 1.9, chaseRange: 30, drops: [{ itemKey: "slime_gel", min: 2, max: 4 }, { itemKey: "slime_core", min: 1, max: 1 }, { itemKey: "magic_stone", min: 1, max: 2 }] },
    ancient_woodman: { key: "ancient_woodman", label: "古代ウッドマン", hp: 135, speed: 1.8, size: 1.2, height: 2.3, color: 0xd1a16a, touchDamage: 20, attackCooldown: 1.1, contactRadius: 1.6, chaseRange: 32, drops: [{ itemKey: "mystic_branch", min: 2, max: 4 }, { itemKey: "ancient_branch", min: 1, max: 1 }, { itemKey: "leaf_bundle", min: 2, max: 3 }] }
  };

  G.NESTS = {
    [G.BLOCK.SLIME_NEST]: { label: "スライムの巣", enemyType: "slime", spawnInterval: 7.2, maxAlive: 5, minDist: 9, maxDist: 56, tier: "normal", worldValue: 1 },
    [G.BLOCK.WOOD_NEST]: { label: "ウッドマンの巣", enemyType: "woodman", spawnInterval: 8.2, maxAlive: 4, minDist: 10, maxDist: 60, tier: "normal", worldValue: 1 },
    [G.BLOCK.SLIME_RIFT]: { label: "巨大スライム巣", enemyType: "prism_slime", spawnInterval: 12.8, maxAlive: 2, minDist: 14, maxDist: 64, tier: "rare", worldValue: 2 },
    [G.BLOCK.ANCIENT_TREE]: { label: "古代の木", enemyType: "ancient_woodman", spawnInterval: 13.5, maxAlive: 2, minDist: 14, maxDist: 66, tier: "rare", worldValue: 2 }
  };

  G.RECIPES = [
    { label: "木の剣", input: { wood_log_block: 2 }, output: { itemKey: "wooden_sword", count: 1 }, desc: "基本の近接武器" },
    { label: "石の剣", input: { stone_block: 1, wood_log_block: 1 }, output: { itemKey: "stone_sword", count: 1 }, desc: "強力な近接武器" },
    { label: "魔法の杖", input: { stone_block: 1, slime_gel: 1 }, output: { itemKey: "magic_wand", count: 1 }, desc: "基本の魔法杖" },
    { label: "森の杖", input: { stone_block: 1, mystic_branch: 1 }, output: { itemKey: "forest_wand", count: 1 }, desc: "遠距離の自然魔法" },
    { label: "爆発の杖", input: { magic_stone: 1, slime_gel: 1 }, output: { itemKey: "explosion_wand", count: 1 }, desc: "範囲攻撃の一品物" },
    { label: "回復の杖", input: { leaf_bundle: 1, slime_gel: 1 }, output: { itemKey: "healing_wand", count: 1 }, desc: "自己回復用の杖" },
    { label: "草の薬", input: { grass_fiber: 1, spring_water: 1 }, output: { itemKey: "grass_potion", count: 1 }, desc: "少し回復" },
    { label: "森の薬", input: { leaf_bundle: 1, slime_gel: 1 }, output: { itemKey: "forest_potion", count: 1 }, desc: "中回復" },
    { label: "生命ポーション", input: { magic_stone: 1, leaf_bundle: 1 }, output: { itemKey: "life_potion", count: 1 }, desc: "大回復" },
    { label: "木の盾", input: { wood_log_block: 2 }, output: { itemKey: "wooden_shield", count: 1 }, desc: "ダメージ軽減" },
    { label: "石の盾", input: { stone_block: 1, wood_log_block: 1 }, output: { itemKey: "stone_shield", count: 1 }, desc: "さらに固い盾" },
    { label: "魔法の護符", input: { slime_core: 1, magic_stone: 1 }, output: { itemKey: "magic_amulet", count: 1 }, desc: "最大HPと魔法耐性を強化" },
    { label: "巣探知機", input: { slime_gel: 1, stone_block: 1 }, output: { itemKey: "nest_detector", count: 1 }, desc: "近くの巣を表示" },
    { label: "巣破壊爆弾", input: { stone_block: 1, slime_gel: 1, mystic_branch: 1 }, output: { itemKey: "nest_bomb", count: 1 }, desc: "巣に大ダメージ" },
    { label: "木の壁", input: { wood_log_block: 2 }, output: { itemKey: "planks_block", count: 2 }, desc: "建築用ブロック" },
    { label: "石レンガ", input: { stone_block: 2 }, output: { itemKey: "cobble_block", count: 2 }, desc: "硬い建築ブロック" },
    { label: "ランタン", input: { mystic_branch: 1, slime_gel: 1 }, output: { itemKey: "lantern", count: 1 }, desc: "夜を少し明るくする" }
  ];

  G.FRONTIER_TIERS = [
    { min: 0, level: 0, label: "未開の辺境", bonusHp: 0, spawnSlowdown: 1.0 },
    { min: 2, level: 1, label: "開拓の火種", bonusHp: 12, spawnSlowdown: 1.05 },
    { min: 5, level: 2, label: "安定した前哨地", bonusHp: 22, spawnSlowdown: 1.12 },
    { min: 9, level: 3, label: "浄化の最前線", bonusHp: 34, spawnSlowdown: 1.2 }
  ];

  G.clamp = function (v, min, max) { return Math.max(min, Math.min(max, v)); };
  G.randInt = function (min, max) { return Math.floor(min + Math.random() * (max - min + 1)); };
  G.keyXYZ = function (x, y, z) { return `${x},${y},${z}`; };
  G.hash2DInt = function (x, z, seed) {
    let h = x * 374761393 + z * 668265263 + seed * 982451653;
    h = (h ^ (h >>> 13)) * 1274126177;
    return (h ^ (h >>> 16)) >>> 0;
  };
  G.hash2D01 = function (x, z, seed) { return G.hash2DInt(x, z, seed) / 4294967295; };
  G.createColor = function (hex) { return new THREE.Color(hex); };
  G.blendColors = function (a, b, t) { return G.createColor(a).lerp(G.createColor(b), G.clamp(t, 0, 1)); };
  G.describeInput = function (input) { return Object.entries(input).map(([k, c]) => `${G.ITEMS[k].label} x${c}`).join(" + "); };
  G.getFrontierTier = function (cleansedNests) {
    let current = G.FRONTIER_TIERS[0];
    for (const tier of G.FRONTIER_TIERS) if (cleansedNests >= tier.min) current = tier;
    return current;
  };
  G.getTimeOfDayInfo = function (timeValue) {
    const ratio = ((timeValue % G.DAY_DURATION) + G.DAY_DURATION) % G.DAY_DURATION / G.DAY_DURATION;
    const hour = Math.floor(ratio * 24);
    const daylight = G.clamp(Math.sin(ratio * Math.PI * 2 - Math.PI / 2) * 0.5 + 0.5, 0, 1);
    if (hour >= 22 || hour < 4) return { ratio: ratio, hour: hour, daylight: daylight, label: "深夜", sky: G.blendColors(0x02050b, 0x10192a, daylight), spawnFactor: 0.55, enemySpeed: 1.18 };
    if (hour >= 18 || hour < 6) return { ratio: ratio, hour: hour, daylight: daylight, label: "夜", sky: G.blendColors(0x08111c, 0x1c2f52, daylight), spawnFactor: 0.76, enemySpeed: 1.08 };
    if (hour < 9) return { ratio: ratio, hour: hour, daylight: daylight, label: "朝", sky: G.blendColors(0xffb26c, 0x87ceeb, G.clamp((hour - 5) / 4, 0, 1)), spawnFactor: 1.08, enemySpeed: 1.0 };
    if (hour < 17) return { ratio: ratio, hour: hour, daylight: daylight, label: "昼", sky: G.blendColors(0x87ceeb, 0xa7ddff, daylight), spawnFactor: 1.2, enemySpeed: 1.0 };
    return { ratio: ratio, hour: hour, daylight: daylight, label: "夕方", sky: G.blendColors(0xff9654, 0x87ceeb, G.clamp((19 - hour) / 3, 0, 1)), spawnFactor: 0.9, enemySpeed: 1.02 };
  };

  G.PerlinNoise2D = class {
    constructor(seed) {
      this.perm = new Uint8Array(512);
      const source = new Uint8Array(256);
      for (let i = 0; i < 256; i += 1) source[i] = i;
      let state = seed >>> 0;
      const random = () => { state = (1664525 * state + 1013904223) >>> 0; return state / 0xffffffff; };
      for (let i = 255; i > 0; i -= 1) {
        const j = Math.floor(random() * (i + 1));
        const tmp = source[i]; source[i] = source[j]; source[j] = tmp;
      }
      for (let i = 0; i < 512; i += 1) this.perm[i] = source[i & 255];
    }
    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(a, b, t) { return a + t * (b - a); }
    grad(hash, x, y) { const h = hash & 3; if (h === 0) return x + y; if (h === 1) return -x + y; if (h === 2) return x - y; return -x - y; }
    noise(x, y) {
      const xi = Math.floor(x) & 255;
      const yi = Math.floor(y) & 255;
      const xf = x - Math.floor(x);
      const yf = y - Math.floor(y);
      const u = this.fade(xf);
      const v = this.fade(yf);
      const aa = this.perm[this.perm[xi] + yi];
      const ab = this.perm[this.perm[xi] + yi + 1];
      const ba = this.perm[this.perm[xi + 1] + yi];
      const bb = this.perm[this.perm[xi + 1] + yi + 1];
      const x1 = this.lerp(this.grad(aa, xf, yf), this.grad(ba, xf - 1, yf), u);
      const x2 = this.lerp(this.grad(ab, xf, yf - 1), this.grad(bb, xf - 1, yf - 1), u);
      return this.lerp(x1, x2, v);
    }
    fractal(x, y, octaves, persistence, lacunarity) {
      let amplitude = 1;
      let frequency = 1;
      let total = 0;
      let normalizer = 0;
      for (let i = 0; i < octaves; i += 1) {
        total += this.noise(x * frequency, y * frequency) * amplitude;
        normalizer += amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
      }
      return total / normalizer;
    }
  };

  G.BlockData = class {
    static isSolid(id) { return !!(G.BLOCKS[id] && G.BLOCKS[id].solid); }
    static getBreakTime(id) { return (G.BLOCKS[id] && G.BLOCKS[id].breakTime) || 0; }
    static getDrops(id) { return (G.BLOCKS[id] && G.BLOCKS[id].drops) || []; }
    static getLabel(id) { return (G.BLOCKS[id] && G.BLOCKS[id].label) || "?"; }
    static getFaceColor(id, dir) {
      const data = G.BLOCKS[id] || G.BLOCKS[0];
      if (id === G.BLOCK.GRASS || id === G.BLOCK.MYSTIC_GRASS) {
        if (dir[1] > 0) return data.topColor;
        if (dir[1] < 0) return data.bottomColor;
        return data.sideColor;
      }
      return data.color;
    }
    static getFaceShade(dir) {
      if (dir[1] > 0) return 1;
      if (dir[1] < 0) return 0.72;
      if (dir[0] !== 0) return 0.86;
      return 0.92;
    }
  };
})();
