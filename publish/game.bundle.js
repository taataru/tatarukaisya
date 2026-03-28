(() => {
  // node_modules/three/build/three.module.min.js
  var t = "161";
  var l = 1;
  var c = 2;
  var h = 3;
  var u = 0;
  var d = 1;
  var y = 100;
  var C = 204;
  var P = 205;
  var Y = 0;
  var Z = 1;
  var J = 2;
  var K = 0;
  var $ = 1;
  var Q = 2;
  var tt = 3;
  var et = 4;
  var nt = 5;
  var it = 6;
  var at = 300;
  var ot = 301;
  var lt = 302;
  var ct = 303;
  var ht = 304;
  var ut = 306;
  var dt = 1e3;
  var pt = 1001;
  var mt = 1002;
  var ft = 1003;
  var gt = 1004;
  var vt = 1005;
  var yt = 1006;
  var Mt = 1007;
  var bt = 1008;
  var Tt = 1009;
  var Rt = 1012;
  var Ct = 1013;
  var Pt = 1014;
  var Lt = 1015;
  var It = 1016;
  var Ut = 1017;
  var Nt = 1018;
  var Dt = 1020;
  var Ft = 1023;
  var Ht = 1026;
  var Vt = 1027;
  var Gt = 1029;
  var Xt = 1031;
  var jt = 1033;
  var qt = 33776;
  var Yt = 33777;
  var Zt = 33778;
  var Jt = 33779;
  var Kt = 35840;
  var $t = 35841;
  var Qt = 35842;
  var te = 35843;
  var ee = 36196;
  var ne = 37492;
  var ie = 37496;
  var re = 37808;
  var se = 37809;
  var ae = 37810;
  var oe = 37811;
  var le = 37812;
  var ce = 37813;
  var he = 37814;
  var ue = 37815;
  var de = 37816;
  var pe = 37817;
  var me = 37818;
  var fe = 37819;
  var ge = 37820;
  var _e = 37821;
  var ve = 36492;
  var xe = 36494;
  var ye = 36495;
  var Se = 36284;
  var be = 36285;
  var Ee = 36286;
  var Re = 2300;
  var Ce = 2301;
  var Pe = 2302;
  var Le = 2400;
  var Ie = 2401;
  var Ue = 2402;
  var ze = 3e3;
  var He = 3001;
  var Xe = "";
  var je = "srgb";
  var qe = "srgb-linear";
  var Ye = "display-p3";
  var Ze = "display-p3-linear";
  var Je = "linear";
  var Ke = "srgb";
  var $e = "rec709";
  var Qe = "p3";
  var en = 7680;
  var Tn = 35044;
  var Dn = "300 es";
  var On = 1035;
  var Fn = 2e3;
  var Bn = 2001;
  var zn = class {
    addEventListener(t2, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t2] && (n[t2] = []), -1 === n[t2].indexOf(e) && n[t2].push(e);
    }
    hasEventListener(t2, e) {
      if (void 0 === this._listeners) return false;
      const n = this._listeners;
      return void 0 !== n[t2] && -1 !== n[t2].indexOf(e);
    }
    removeEventListener(t2, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t2];
      if (void 0 !== n) {
        const t3 = n.indexOf(e);
        -1 !== t3 && n.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t2.type];
      if (void 0 !== e) {
        t2.target = this;
        const n = e.slice(0);
        for (let e2 = 0, i = n.length; e2 < i; e2++) n[e2].call(this, t2);
        t2.target = null;
      }
    }
  };
  var Hn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var Vn = 1234567;
  var kn = Math.PI / 180;
  var Gn = 180 / Math.PI;
  function Wn() {
    const t2 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
    return (Hn[255 & t2] + Hn[t2 >> 8 & 255] + Hn[t2 >> 16 & 255] + Hn[t2 >> 24 & 255] + "-" + Hn[255 & e] + Hn[e >> 8 & 255] + "-" + Hn[e >> 16 & 15 | 64] + Hn[e >> 24 & 255] + "-" + Hn[63 & n | 128] + Hn[n >> 8 & 255] + "-" + Hn[n >> 16 & 255] + Hn[n >> 24 & 255] + Hn[255 & i] + Hn[i >> 8 & 255] + Hn[i >> 16 & 255] + Hn[i >> 24 & 255]).toLowerCase();
  }
  function Xn(t2, e, n) {
    return Math.max(e, Math.min(n, t2));
  }
  function jn(t2, e) {
    return (t2 % e + e) % e;
  }
  function qn(t2, e, n) {
    return (1 - n) * t2 + n * e;
  }
  function Yn(t2) {
    return 0 == (t2 & t2 - 1) && 0 !== t2;
  }
  function Zn(t2) {
    return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
  }
  function Jn(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Kn(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var $n = { DEG2RAD: kn, RAD2DEG: Gn, generateUUID: Wn, clamp: Xn, euclideanModulo: jn, mapLinear: function(t2, e, n, i, r) {
    return i + (t2 - e) * (r - i) / (n - e);
  }, inverseLerp: function(t2, e, n) {
    return t2 !== e ? (n - t2) / (e - t2) : 0;
  }, lerp: qn, damp: function(t2, e, n, i) {
    return qn(t2, e, 1 - Math.exp(-n * i));
  }, pingpong: function(t2, e = 1) {
    return e - Math.abs(jn(t2, 2 * e) - e);
  }, smoothstep: function(t2, e, n) {
    return t2 <= e ? 0 : t2 >= n ? 1 : (t2 = (t2 - e) / (n - e)) * t2 * (3 - 2 * t2);
  }, smootherstep: function(t2, e, n) {
    return t2 <= e ? 0 : t2 >= n ? 1 : (t2 = (t2 - e) / (n - e)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, randInt: function(t2, e) {
    return t2 + Math.floor(Math.random() * (e - t2 + 1));
  }, randFloat: function(t2, e) {
    return t2 + Math.random() * (e - t2);
  }, randFloatSpread: function(t2) {
    return t2 * (0.5 - Math.random());
  }, seededRandom: function(t2) {
    void 0 !== t2 && (Vn = t2);
    let e = Vn += 1831565813;
    return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
  }, degToRad: function(t2) {
    return t2 * kn;
  }, radToDeg: function(t2) {
    return t2 * Gn;
  }, isPowerOfTwo: Yn, ceilPowerOfTwo: function(t2) {
    return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
  }, floorPowerOfTwo: Zn, setQuaternionFromProperEuler: function(t2, e, n, i, r) {
    const s = Math.cos, a = Math.sin, o = s(n / 2), l2 = a(n / 2), c2 = s((e + i) / 2), h2 = a((e + i) / 2), u2 = s((e - i) / 2), d2 = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
    switch (r) {
      case "XYX":
        t2.set(o * h2, l2 * u2, l2 * d2, o * c2);
        break;
      case "YZY":
        t2.set(l2 * d2, o * h2, l2 * u2, o * c2);
        break;
      case "ZXZ":
        t2.set(l2 * u2, l2 * d2, o * h2, o * c2);
        break;
      case "XZX":
        t2.set(o * h2, l2 * m, l2 * p, o * c2);
        break;
      case "YXY":
        t2.set(l2 * p, o * h2, l2 * m, o * c2);
        break;
      case "ZYZ":
        t2.set(l2 * m, l2 * p, o * h2, o * c2);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
    }
  }, normalize: Kn, denormalize: Jn };
  var Qn = class _Qn {
    constructor(t2 = 0, e = 0) {
      _Qn.prototype.isVector2 = true, this.x = t2, this.y = e;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e) {
      return this.x = t2, this.y = e, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = t2.elements;
      return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Xn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this;
    }
    rotateAround(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = this.x - t2.x, s = this.y - t2.y;
      return this.x = r * n - s * i + t2.x, this.y = r * i + s * n + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var ti = class _ti {
    constructor(t2, e, n, i, r, s, a, o, l2) {
      _ti.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l2);
    }
    set(t2, e, n, i, r, s, a, o, l2) {
      const c2 = this.elements;
      return c2[0] = t2, c2[1] = i, c2[2] = a, c2[3] = e, c2[4] = r, c2[5] = o, c2[6] = n, c2[7] = s, c2[8] = l2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e = t2.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l2 = n[1], c2 = n[4], h2 = n[7], u2 = n[2], d2 = n[5], p = n[8], m = i[0], f = i[3], g = i[6], _ = i[1], v = i[4], x = i[7], y2 = i[2], M = i[5], S = i[8];
      return r[0] = s * m + a * _ + o * y2, r[3] = s * f + a * v + o * M, r[6] = s * g + a * x + o * S, r[1] = l2 * m + c2 * _ + h2 * y2, r[4] = l2 * f + c2 * v + h2 * M, r[7] = l2 * g + c2 * x + h2 * S, r[2] = u2 * m + d2 * _ + p * y2, r[5] = u2 * f + d2 * v + p * M, r[8] = u2 * g + d2 * x + p * S, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[3] *= t2, e[6] *= t2, e[1] *= t2, e[4] *= t2, e[7] *= t2, e[2] *= t2, e[5] *= t2, e[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8];
      return e * s * c2 - e * a * l2 - n * r * c2 + n * a * o + i * r * l2 - i * s * o;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8], h2 = c2 * s - a * l2, u2 = a * o - c2 * r, d2 = l2 * r - s * o, p = e * h2 + n * u2 + i * d2;
      if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p;
      return t2[0] = h2 * m, t2[1] = (i * l2 - c2 * n) * m, t2[2] = (a * n - i * s) * m, t2[3] = u2 * m, t2[4] = (c2 * e - i * o) * m, t2[5] = (i * r - a * e) * m, t2[6] = d2 * m, t2[7] = (n * o - l2 * e) * m, t2[8] = (s * e - n * r) * m, this;
    }
    transpose() {
      let t2;
      const e = this.elements;
      return t2 = e[1], e[1] = e[3], e[3] = t2, t2 = e[2], e[2] = e[6], e[6] = t2, t2 = e[5], e[5] = e[7], e[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e = this.elements;
      return t2[0] = e[0], t2[1] = e[3], t2[2] = e[6], t2[3] = e[1], t2[4] = e[4], t2[5] = e[7], t2[6] = e[2], t2[7] = e[5], t2[8] = e[8], this;
    }
    setUvTransform(t2, e, n, i, r, s, a) {
      const o = Math.cos(r), l2 = Math.sin(r);
      return this.set(n * o, n * l2, -n * (o * s + l2 * a) + s + t2, -i * l2, i * o, -i * (-l2 * s + o * a) + a + e, 0, 0, 1), this;
    }
    scale(t2, e) {
      return this.premultiply(ei.makeScale(t2, e)), this;
    }
    rotate(t2) {
      return this.premultiply(ei.makeRotation(-t2)), this;
    }
    translate(t2, e) {
      return this.premultiply(ei.makeTranslation(t2, e)), this;
    }
    makeTranslation(t2, e) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t2, e) {
      return this.set(t2, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var ei = new ti();
  function ni(t2) {
    for (let e = t2.length - 1; e >= 0; --e) if (t2[e] >= 65535) return true;
    return false;
  }
  function si(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function ai() {
    const t2 = si("canvas");
    return t2.style.display = "block", t2;
  }
  var oi = {};
  function li(t2) {
    t2 in oi || (oi[t2] = true, console.warn(t2));
  }
  var ci = new ti().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199);
  var hi = new ti().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735);
  var ui = { [qe]: { transfer: Je, primaries: $e, toReference: (t2) => t2, fromReference: (t2) => t2 }, [je]: { transfer: Ke, primaries: $e, toReference: (t2) => t2.convertSRGBToLinear(), fromReference: (t2) => t2.convertLinearToSRGB() }, [Ze]: { transfer: Je, primaries: Qe, toReference: (t2) => t2.applyMatrix3(hi), fromReference: (t2) => t2.applyMatrix3(ci) }, [Ye]: { transfer: Ke, primaries: Qe, toReference: (t2) => t2.convertSRGBToLinear().applyMatrix3(hi), fromReference: (t2) => t2.applyMatrix3(ci).convertLinearToSRGB() } };
  var di = /* @__PURE__ */ new Set([qe, Ze]);
  var pi = { enabled: true, _workingColorSpace: qe, get workingColorSpace() {
    return this._workingColorSpace;
  }, set workingColorSpace(t2) {
    if (!di.has(t2)) throw new Error(`Unsupported working color space, "${t2}".`);
    this._workingColorSpace = t2;
  }, convert: function(t2, e, n) {
    if (false === this.enabled || e === n || !e || !n) return t2;
    const i = ui[e].toReference;
    return (0, ui[n].fromReference)(i(t2));
  }, fromWorkingColorSpace: function(t2, e) {
    return this.convert(t2, this._workingColorSpace, e);
  }, toWorkingColorSpace: function(t2, e) {
    return this.convert(t2, e, this._workingColorSpace);
  }, getPrimaries: function(t2) {
    return ui[t2].primaries;
  }, getTransfer: function(t2) {
    return t2 === Xe ? Je : ui[t2].transfer;
  } };
  function mi(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function fi(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var gi;
  var _i = class {
    static getDataURL(t2) {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let e;
      if (t2 instanceof HTMLCanvasElement) e = t2;
      else {
        void 0 === gi && (gi = si("canvas")), gi.width = t2.width, gi.height = t2.height;
        const n = gi.getContext("2d");
        t2 instanceof ImageData ? n.putImageData(t2, 0, 0) : n.drawImage(t2, 0, 0, t2.width, t2.height), e = gi;
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t2), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e = si("canvas");
        e.width = t2.width, e.height = t2.height;
        const n = e.getContext("2d");
        n.drawImage(t2, 0, 0, t2.width, t2.height);
        const i = n.getImageData(0, 0, t2.width, t2.height), r = i.data;
        for (let t3 = 0; t3 < r.length; t3++) r[t3] = 255 * mi(r[t3] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t2.data) {
        const e = t2.data.slice(0);
        for (let t3 = 0; t3 < e.length; t3++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t3] = Math.floor(255 * mi(e[t3] / 255)) : e[t3] = mi(e[t3]);
        return { data: e, width: t2.width, height: t2.height };
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var vi = 0;
  var xi = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: vi++ }), this.uuid = Wn(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const n = { uuid: this.uuid, url: "" }, i = this.data;
      if (null !== i) {
        let t3;
        if (Array.isArray(i)) {
          t3 = [];
          for (let e2 = 0, n2 = i.length; e2 < n2; e2++) i[e2].isDataTexture ? t3.push(yi(i[e2].image)) : t3.push(yi(i[e2]));
        } else t3 = yi(i);
        n.url = t3;
      }
      return e || (t2.images[this.uuid] = n), n;
    }
  };
  function yi(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? _i.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  var Mi = 0;
  var Si = class _Si extends zn {
    constructor(t2 = _Si.DEFAULT_IMAGE, e = _Si.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l2 = _Si.DEFAULT_ANISOTROPY, c2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Mi++ }), this.uuid = Wn(), this.name = "", this.source = new xi(t2), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l2, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Qn(0, 0), this.repeat = new Qn(1, 1), this.center = new Qn(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new ti(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, "string" == typeof c2 ? this.colorSpace = c2 : (li("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = c2 === He ? je : Xe), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
    }
    get image() {
      return this.source.data;
    }
    set image(t2 = null) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t2.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== at) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case dt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case pt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case mt:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case dt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case pt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case mt:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    get encoding() {
      return li("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === je ? He : ze;
    }
    set encoding(t2) {
      li("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t2 === He ? je : Xe;
    }
  };
  Si.DEFAULT_IMAGE = null, Si.DEFAULT_MAPPING = at, Si.DEFAULT_ANISOTROPY = 1;
  var bi = class _bi {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      _bi.prototype.isVector4 = true, this.x = t2, this.y = e, this.z = n, this.w = i;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e, n, i) {
      return this.x = t2, this.y = e, this.z = n, this.w = i, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this.w = t2.w + e.w, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this.w += t2.w * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this.w = t2.w - e.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = this.w, s = t2.elements;
      return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e = Math.sqrt(1 - t2.w * t2.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e, this.y = t2.y / e, this.z = t2.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e, n, i, r;
      const s = 0.01, a = 0.1, o = t2.elements, l2 = o[0], c2 = o[4], h2 = o[8], u2 = o[1], d2 = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
      if (Math.abs(c2 - u2) < s && Math.abs(h2 - m) < s && Math.abs(p - f) < s) {
        if (Math.abs(c2 + u2) < a && Math.abs(h2 + m) < a && Math.abs(p + f) < a && Math.abs(l2 + d2 + g - 3) < a) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t3 = (l2 + 1) / 2, o2 = (d2 + 1) / 2, _2 = (g + 1) / 2, v = (c2 + u2) / 4, x = (h2 + m) / 4, y2 = (p + f) / 4;
        return t3 > o2 && t3 > _2 ? t3 < s ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(t3), i = v / n, r = x / n) : o2 > _2 ? o2 < s ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(o2), n = v / i, r = y2 / i) : _2 < s ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(_2), n = x / r, i = y2 / r), this.set(n, i, r, e), this;
      }
      let _ = Math.sqrt((f - p) * (f - p) + (h2 - m) * (h2 - m) + (u2 - c2) * (u2 - c2));
      return Math.abs(_) < 1e-3 && (_ = 1), this.x = (f - p) / _, this.y = (h2 - m) / _, this.z = (u2 - c2) / _, this.w = Math.acos((l2 + d2 + g - 1) / 2), this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this.w = Math.max(t2.w, Math.min(e.w, this.w)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this.w = Math.max(t2, Math.min(e, this.w)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this.w += (t2.w - this.w) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this.w = t2.w + (e.w - t2.w) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this.w = t2[e + 3], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2[e + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this.w = t2.getW(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Ei = class extends zn {
    constructor(t2 = 1, e = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = t2, this.height = e, this.depth = 1, this.scissor = new bi(0, 0, t2, e), this.scissorTest = false, this.viewport = new bi(0, 0, t2, e);
      const i = { width: t2, height: e, depth: 1 };
      void 0 !== n.encoding && (li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === He ? je : Xe), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: yt, depthBuffer: true, stencilBuffer: false, depthTexture: null, samples: 0 }, n), this.texture = new Si(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
    }
    setSize(t2, e, n = 1) {
      this.width === t2 && this.height === e && this.depth === n || (this.width = t2, this.height = e, this.depth = n, this.texture.image.width = t2, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t2, e), this.scissor.set(0, 0, t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.texture = t2.texture.clone(), this.texture.isRenderTargetTexture = true;
      const e = Object.assign({}, t2.texture.image);
      return this.texture.source = new xi(e), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Ti = class extends Ei {
    constructor(t2 = 1, e = 1, n = {}) {
      super(t2, e, n), this.isWebGLRenderTarget = true;
    }
  };
  var wi = class extends Si {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = pt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ri = class extends Si {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = ft, this.minFilter = ft, this.wrapR = pt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Li = class {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e, this._z = n, this._w = i;
    }
    static slerpFlat(t2, e, n, i, r, s, a) {
      let o = n[i + 0], l2 = n[i + 1], c2 = n[i + 2], h2 = n[i + 3];
      const u2 = r[s + 0], d2 = r[s + 1], p = r[s + 2], m = r[s + 3];
      if (0 === a) return t2[e + 0] = o, t2[e + 1] = l2, t2[e + 2] = c2, void (t2[e + 3] = h2);
      if (1 === a) return t2[e + 0] = u2, t2[e + 1] = d2, t2[e + 2] = p, void (t2[e + 3] = m);
      if (h2 !== m || o !== u2 || l2 !== d2 || c2 !== p) {
        let t3 = 1 - a;
        const e2 = o * u2 + l2 * d2 + c2 * p + h2 * m, n2 = e2 >= 0 ? 1 : -1, i2 = 1 - e2 * e2;
        if (i2 > Number.EPSILON) {
          const r3 = Math.sqrt(i2), s2 = Math.atan2(r3, e2 * n2);
          t3 = Math.sin(t3 * s2) / r3, a = Math.sin(a * s2) / r3;
        }
        const r2 = a * n2;
        if (o = o * t3 + u2 * r2, l2 = l2 * t3 + d2 * r2, c2 = c2 * t3 + p * r2, h2 = h2 * t3 + m * r2, t3 === 1 - a) {
          const t4 = 1 / Math.sqrt(o * o + l2 * l2 + c2 * c2 + h2 * h2);
          o *= t4, l2 *= t4, c2 *= t4, h2 *= t4;
        }
      }
      t2[e] = o, t2[e + 1] = l2, t2[e + 2] = c2, t2[e + 3] = h2;
    }
    static multiplyQuaternionsFlat(t2, e, n, i, r, s) {
      const a = n[i], o = n[i + 1], l2 = n[i + 2], c2 = n[i + 3], h2 = r[s], u2 = r[s + 1], d2 = r[s + 2], p = r[s + 3];
      return t2[e] = a * p + c2 * h2 + o * d2 - l2 * u2, t2[e + 1] = o * p + c2 * u2 + l2 * h2 - a * d2, t2[e + 2] = l2 * p + c2 * d2 + a * u2 - o * h2, t2[e + 3] = c2 * p - a * h2 - o * u2 - l2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e, n, i) {
      return this._x = t2, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e = true) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._order, a = Math.cos, o = Math.sin, l2 = a(n / 2), c2 = a(i / 2), h2 = a(r / 2), u2 = o(n / 2), d2 = o(i / 2), p = o(r / 2);
      switch (s) {
        case "XYZ":
          this._x = u2 * c2 * h2 + l2 * d2 * p, this._y = l2 * d2 * h2 - u2 * c2 * p, this._z = l2 * c2 * p + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p;
          break;
        case "YXZ":
          this._x = u2 * c2 * h2 + l2 * d2 * p, this._y = l2 * d2 * h2 - u2 * c2 * p, this._z = l2 * c2 * p - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p;
          break;
        case "ZXY":
          this._x = u2 * c2 * h2 - l2 * d2 * p, this._y = l2 * d2 * h2 + u2 * c2 * p, this._z = l2 * c2 * p + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p;
          break;
        case "ZYX":
          this._x = u2 * c2 * h2 - l2 * d2 * p, this._y = l2 * d2 * h2 + u2 * c2 * p, this._z = l2 * c2 * p - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p;
          break;
        case "YZX":
          this._x = u2 * c2 * h2 + l2 * d2 * p, this._y = l2 * d2 * h2 + u2 * c2 * p, this._z = l2 * c2 * p - u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p;
          break;
        case "XZY":
          this._x = u2 * c2 * h2 - l2 * d2 * p, this._y = l2 * d2 * h2 - u2 * c2 * p, this._z = l2 * c2 * p + u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
      }
      return true === e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e) {
      const n = e / 2, i = Math.sin(n);
      return this._x = t2.x * i, this._y = t2.y * i, this._z = t2.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e = t2.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l2 = e[2], c2 = e[6], h2 = e[10], u2 = n + a + h2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (c2 - o) * t3, this._y = (r - l2) * t3, this._z = (s - i) * t3;
      } else if (n > a && n > h2) {
        const t3 = 2 * Math.sqrt(1 + n - a - h2);
        this._w = (c2 - o) / t3, this._x = 0.25 * t3, this._y = (i + s) / t3, this._z = (r + l2) / t3;
      } else if (a > h2) {
        const t3 = 2 * Math.sqrt(1 + a - n - h2);
        this._w = (r - l2) / t3, this._x = (i + s) / t3, this._y = 0.25 * t3, this._z = (o + c2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + h2 - n - a);
        this._w = (s - i) / t3, this._x = (r + l2) / t3, this._y = (o + c2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e) {
      let n = t2.dot(e) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = n)) : (this._x = t2.y * e.z - t2.z * e.y, this._y = t2.z * e.x - t2.x * e.z, this._z = t2.x * e.y - t2.y * e.x, this._w = n), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(Xn(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e) {
      const n = this.angleTo(t2);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t2, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._w, a = e._x, o = e._y, l2 = e._z, c2 = e._w;
      return this._x = n * c2 + s * a + i * l2 - r * o, this._y = i * c2 + s * o + r * a - n * l2, this._z = r * c2 + s * l2 + n * o - i * a, this._w = s * c2 - n * a - i * o - r * l2, this._onChangeCallback(), this;
    }
    slerp(t2, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t2);
      const n = this._x, i = this._y, r = this._z, s = this._w;
      let a = s * t2._w + n * t2._x + i * t2._y + r * t2._z;
      if (a < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a = -a) : this.copy(t2), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t3 = 1 - e;
        return this._w = t3 * s + e * this._w, this._x = t3 * n + e * this._x, this._y = t3 * i + e * this._y, this._z = t3 * r + e * this._z, this.normalize(), this;
      }
      const l2 = Math.sqrt(o), c2 = Math.atan2(l2, a), h2 = Math.sin((1 - e) * c2) / l2, u2 = Math.sin(e * c2) / l2;
      return this._w = s * h2 + this._w * u2, this._x = n * h2 + this._x * u2, this._y = i * h2 + this._y * u2, this._z = r * h2 + this._z * u2, this._onChangeCallback(), this;
    }
    slerpQuaternions(t2, e, n) {
      return this.copy(t2).slerp(e, n);
    }
    random() {
      const t2 = Math.random(), e = Math.sqrt(1 - t2), n = Math.sqrt(t2), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
      return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e = 0) {
      return this._x = t2[e], this._y = t2[e + 1], this._z = t2[e + 2], this._w = t2[e + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this._x = t2.getX(e), this._y = t2.getY(e), this._z = t2.getZ(e), this._w = t2.getW(e), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var Ii = class _Ii {
    constructor(t2 = 0, e = 0, n = 0) {
      _Ii.prototype.isVector3 = true, this.x = t2, this.y = e, this.z = n;
    }
    set(t2, e, n) {
      return void 0 === n && (n = this.z), this.x = t2, this.y = e, this.z = n, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e) {
      return this.x = t2.x * e.x, this.y = t2.y * e.y, this.z = t2.z * e.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Ni.setFromEuler(t2));
    }
    applyAxisAngle(t2, e) {
      return this.applyQuaternion(Ni.setFromAxisAngle(t2, e));
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
    }
    applyQuaternion(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.x, s = t2.y, a = t2.z, o = t2.w, l2 = 2 * (s * i - a * n), c2 = 2 * (a * e - r * i), h2 = 2 * (r * n - s * e);
      return this.x = e + o * l2 + s * h2 - a * c2, this.y = n + o * c2 + a * l2 - r * h2, this.z = i + o * h2 + r * c2 - s * l2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e) {
      const n = t2.x, i = t2.y, r = t2.z, s = e.x, a = e.y, o = e.z;
      return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
    }
    projectOnVector(t2) {
      const e = t2.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t2.dot(this) / e;
      return this.copy(t2).multiplyScalar(n);
    }
    projectOnPlane(t2) {
      return Ui.copy(this).projectOnVector(t2), this.sub(Ui);
    }
    reflect(t2) {
      return this.sub(Ui.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Xn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y, i = this.z - t2.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e, n) {
      const i = Math.sin(e) * t2;
      return this.x = i * Math.sin(n), this.y = Math.cos(e) * t2, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e, n) {
      return this.x = t2 * Math.sin(e), this.y = n, this.z = t2 * Math.cos(e), this;
    }
    setFromMatrixPosition(t2) {
      const e = t2.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t2) {
      const e = this.setFromMatrixColumn(t2, 0).length(), n = this.setFromMatrixColumn(t2, 1).length(), i = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(t2, e) {
      return this.fromArray(t2.elements, 4 * e);
    }
    setFromMatrix3Column(t2, e) {
      return this.fromArray(t2.elements, 3 * e);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = 2 * (Math.random() - 0.5), e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t2 ** 2);
      return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t2, this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var Ui = new Ii();
  var Ni = new Li();
  var Di = class {
    constructor(t2 = new Ii(1 / 0, 1 / 0, 1 / 0), e = new Ii(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e;
    }
    set(t2, e) {
      return this.min.copy(t2), this.max.copy(e), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e += 3) this.expandByPoint(Fi.fromArray(t2, e));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.count; e < n; e++) this.expandByPoint(Fi.fromBufferAttribute(t2, e));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e++) this.expandByPoint(t2[e]);
      return this;
    }
    setFromCenterAndSize(t2, e) {
      const n = Fi.copy(e).multiplyScalar(0.5);
      return this.min.copy(t2).sub(n), this.max.copy(t2).add(n), this;
    }
    setFromObject(t2, e = false) {
      return this.makeEmpty(), this.expandByObject(t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e = false) {
      t2.updateWorldMatrix(false, false);
      const n = t2.geometry;
      if (void 0 !== n) {
        const i2 = n.getAttribute("position");
        if (true === e && void 0 !== i2 && true !== t2.isInstancedMesh) for (let e2 = 0, n2 = i2.count; e2 < n2; e2++) true === t2.isMesh ? t2.getVertexPosition(e2, Fi) : Fi.fromBufferAttribute(i2, e2), Fi.applyMatrix4(t2.matrixWorld), this.expandByPoint(Fi);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Bi.copy(t2.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(), Bi.copy(n.boundingBox)), Bi.applyMatrix4(t2.matrixWorld), this.union(Bi);
      }
      const i = t2.children;
      for (let t3 = 0, n2 = i.length; t3 < n2; t3++) this.expandByObject(i[t3], e);
      return this;
    }
    containsPoint(t2) {
      return !(t2.x < this.min.x || t2.x > this.max.x || t2.y < this.min.y || t2.y > this.max.y || t2.z < this.min.z || t2.z > this.max.z);
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e) {
      return e.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return !(t2.max.x < this.min.x || t2.min.x > this.max.x || t2.max.y < this.min.y || t2.min.y > this.max.y || t2.max.z < this.min.z || t2.min.z > this.max.z);
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Fi), Fi.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e, n;
      return t2.normal.x > 0 ? (e = t2.normal.x * this.min.x, n = t2.normal.x * this.max.x) : (e = t2.normal.x * this.max.x, n = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e += t2.normal.y * this.min.y, n += t2.normal.y * this.max.y) : (e += t2.normal.y * this.max.y, n += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e += t2.normal.z * this.min.z, n += t2.normal.z * this.max.z) : (e += t2.normal.z * this.max.z, n += t2.normal.z * this.min.z), e <= -t2.constant && n >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(Xi), ji.subVectors(this.max, Xi), zi.subVectors(t2.a, Xi), Hi.subVectors(t2.b, Xi), Vi.subVectors(t2.c, Xi), ki.subVectors(Hi, zi), Gi.subVectors(Vi, Hi), Wi.subVectors(zi, Vi);
      let e = [0, -ki.z, ki.y, 0, -Gi.z, Gi.y, 0, -Wi.z, Wi.y, ki.z, 0, -ki.x, Gi.z, 0, -Gi.x, Wi.z, 0, -Wi.x, -ki.y, ki.x, 0, -Gi.y, Gi.x, 0, -Wi.y, Wi.x, 0];
      return !!Zi(e, zi, Hi, Vi, ji) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Zi(e, zi, Hi, Vi, ji) && (qi.crossVectors(ki, Gi), e = [qi.x, qi.y, qi.z], Zi(e, zi, Hi, Vi, ji)));
    }
    clampPoint(t2, e) {
      return e.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Fi).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Fi).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Oi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Oi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Oi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Oi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Oi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Oi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Oi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Oi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Oi)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
  };
  var Oi = [new Ii(), new Ii(), new Ii(), new Ii(), new Ii(), new Ii(), new Ii(), new Ii()];
  var Fi = new Ii();
  var Bi = new Di();
  var zi = new Ii();
  var Hi = new Ii();
  var Vi = new Ii();
  var ki = new Ii();
  var Gi = new Ii();
  var Wi = new Ii();
  var Xi = new Ii();
  var ji = new Ii();
  var qi = new Ii();
  var Yi = new Ii();
  function Zi(t2, e, n, i, r) {
    for (let s = 0, a = t2.length - 3; s <= a; s += 3) {
      Yi.fromArray(t2, s);
      const a2 = r.x * Math.abs(Yi.x) + r.y * Math.abs(Yi.y) + r.z * Math.abs(Yi.z), o = e.dot(Yi), l2 = n.dot(Yi), c2 = i.dot(Yi);
      if (Math.max(-Math.max(o, l2, c2), Math.min(o, l2, c2)) > a2) return false;
    }
    return true;
  }
  var Ji = new Di();
  var Ki = new Ii();
  var $i = new Ii();
  var Qi = class {
    constructor(t2 = new Ii(), e = -1) {
      this.isSphere = true, this.center = t2, this.radius = e;
    }
    set(t2, e) {
      return this.center.copy(t2), this.radius = e, this;
    }
    setFromPoints(t2, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : Ji.setFromPoints(t2).getCenter(n);
      let i = 0;
      for (let e2 = 0, r = t2.length; e2 < r; e2++) i = Math.max(i, n.distanceToSquared(t2[e2]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e) {
      const n = this.center.distanceToSquared(t2);
      return e.copy(t2), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Ki.subVectors(t2, this.center);
      const e = Ki.lengthSq();
      if (e > this.radius * this.radius) {
        const t3 = Math.sqrt(e), n = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Ki, n / t3), this.radius += n;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : ($i.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Ki.copy(t2.center).add($i)), this.expandByPoint(Ki.copy(t2.center).sub($i))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var tr = new Ii();
  var er = new Ii();
  var nr = new Ii();
  var ir = new Ii();
  var rr = new Ii();
  var sr = new Ii();
  var ar = new Ii();
  var or = class {
    constructor(t2 = new Ii(), e = new Ii(0, 0, -1)) {
      this.origin = t2, this.direction = e;
    }
    set(t2, e) {
      return this.origin.copy(t2), this.direction.copy(e), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, tr)), this;
    }
    closestPointToPoint(t2, e) {
      e.subVectors(t2, this.origin);
      const n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e = tr.subVectors(t2, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t2) : (tr.copy(this.origin).addScaledVector(this.direction, e), tr.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e, n, i) {
      er.copy(t2).add(e).multiplyScalar(0.5), nr.copy(e).sub(t2).normalize(), ir.copy(this.origin).sub(er);
      const r = 0.5 * t2.distanceTo(e), s = -this.direction.dot(nr), a = ir.dot(this.direction), o = -ir.dot(nr), l2 = ir.lengthSq(), c2 = Math.abs(1 - s * s);
      let h2, u2, d2, p;
      if (c2 > 0) if (h2 = s * o - a, u2 = s * a - o, p = r * c2, h2 >= 0) if (u2 >= -p) if (u2 <= p) {
        const t3 = 1 / c2;
        h2 *= t3, u2 *= t3, d2 = h2 * (h2 + s * u2 + 2 * a) + u2 * (s * h2 + u2 + 2 * o) + l2;
      } else u2 = r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 = -r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      else u2 <= -p ? (h2 = Math.max(0, -(-s * r + a)), u2 = h2 > 0 ? -r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2) : u2 <= p ? (h2 = 0, u2 = Math.min(Math.max(-r, -o), r), d2 = u2 * (u2 + 2 * o) + l2) : (h2 = Math.max(0, -(s * r + a)), u2 = h2 > 0 ? r : Math.min(Math.max(-r, -o), r), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2);
      else u2 = s > 0 ? -r : r, h2 = Math.max(0, -(s * u2 + a)), d2 = -h2 * h2 + u2 * (u2 + 2 * o) + l2;
      return n && n.copy(this.origin).addScaledVector(this.direction, h2), i && i.copy(er).addScaledVector(nr, u2), d2;
    }
    intersectSphere(t2, e) {
      tr.subVectors(t2.center, this.origin);
      const n = tr.dot(this.direction), i = tr.dot(tr) - n * n, r = t2.radius * t2.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i), a = n - s, o = n + s;
      return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
    }
    intersectsSphere(t2) {
      return this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e = t2.normal.dot(this.direction);
      if (0 === e) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t2.normal) + t2.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t2, e) {
      const n = this.distanceToPlane(t2);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t2) {
      const e = t2.distanceToPoint(this.origin);
      if (0 === e) return true;
      return t2.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t2, e) {
      let n, i, r, s, a, o;
      const l2 = 1 / this.direction.x, c2 = 1 / this.direction.y, h2 = 1 / this.direction.z, u2 = this.origin;
      return l2 >= 0 ? (n = (t2.min.x - u2.x) * l2, i = (t2.max.x - u2.x) * l2) : (n = (t2.max.x - u2.x) * l2, i = (t2.min.x - u2.x) * l2), c2 >= 0 ? (r = (t2.min.y - u2.y) * c2, s = (t2.max.y - u2.y) * c2) : (r = (t2.max.y - u2.y) * c2, s = (t2.min.y - u2.y) * c2), n > s || r > i ? null : ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h2 >= 0 ? (a = (t2.min.z - u2.z) * h2, o = (t2.max.z - u2.z) * h2) : (a = (t2.max.z - u2.z) * h2, o = (t2.min.z - u2.z) * h2), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, tr);
    }
    intersectTriangle(t2, e, n, i, r) {
      rr.subVectors(e, t2), sr.subVectors(n, t2), ar.crossVectors(rr, sr);
      let s, a = this.direction.dot(ar);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        s = -1, a = -a;
      }
      ir.subVectors(this.origin, t2);
      const o = s * this.direction.dot(sr.crossVectors(ir, sr));
      if (o < 0) return null;
      const l2 = s * this.direction.dot(rr.cross(ir));
      if (l2 < 0) return null;
      if (o + l2 > a) return null;
      const c2 = -s * ir.dot(ar);
      return c2 < 0 ? null : this.at(c2 / a, r);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var lr = class _lr {
    constructor(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p, m, f) {
      _lr.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p, m, f);
    }
    set(t2, e, n, i, r, s, a, o, l2, c2, h2, u2, d2, p, m, f) {
      const g = this.elements;
      return g[0] = t2, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l2, g[6] = c2, g[10] = h2, g[14] = u2, g[3] = d2, g[7] = p, g[11] = m, g[15] = f, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _lr().fromArray(this.elements);
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    }
    copyPosition(t2) {
      const e = this.elements, n = t2.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    }
    setFromMatrix3(t2) {
      const e = t2.elements;
      return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e, n) {
      return this.set(t2.x, e.x, n.x, 0, t2.y, e.y, n.y, 0, t2.z, e.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e = this.elements, n = t2.elements, i = 1 / cr.setFromMatrixColumn(t2, 0).length(), r = 1 / cr.setFromMatrixColumn(t2, 1).length(), s = 1 / cr.setFromMatrixColumn(t2, 2).length();
      return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l2 = Math.sin(i), c2 = Math.cos(r), h2 = Math.sin(r);
      if ("XYZ" === t2.order) {
        const t3 = s * c2, n2 = s * h2, i2 = a * c2, r2 = a * h2;
        e[0] = o * c2, e[4] = -o * h2, e[8] = l2, e[1] = n2 + i2 * l2, e[5] = t3 - r2 * l2, e[9] = -a * o, e[2] = r2 - t3 * l2, e[6] = i2 + n2 * l2, e[10] = s * o;
      } else if ("YXZ" === t2.order) {
        const t3 = o * c2, n2 = o * h2, i2 = l2 * c2, r2 = l2 * h2;
        e[0] = t3 + r2 * a, e[4] = i2 * a - n2, e[8] = s * l2, e[1] = s * h2, e[5] = s * c2, e[9] = -a, e[2] = n2 * a - i2, e[6] = r2 + t3 * a, e[10] = s * o;
      } else if ("ZXY" === t2.order) {
        const t3 = o * c2, n2 = o * h2, i2 = l2 * c2, r2 = l2 * h2;
        e[0] = t3 - r2 * a, e[4] = -s * h2, e[8] = i2 + n2 * a, e[1] = n2 + i2 * a, e[5] = s * c2, e[9] = r2 - t3 * a, e[2] = -s * l2, e[6] = a, e[10] = s * o;
      } else if ("ZYX" === t2.order) {
        const t3 = s * c2, n2 = s * h2, i2 = a * c2, r2 = a * h2;
        e[0] = o * c2, e[4] = i2 * l2 - n2, e[8] = t3 * l2 + r2, e[1] = o * h2, e[5] = r2 * l2 + t3, e[9] = n2 * l2 - i2, e[2] = -l2, e[6] = a * o, e[10] = s * o;
      } else if ("YZX" === t2.order) {
        const t3 = s * o, n2 = s * l2, i2 = a * o, r2 = a * l2;
        e[0] = o * c2, e[4] = r2 - t3 * h2, e[8] = i2 * h2 + n2, e[1] = h2, e[5] = s * c2, e[9] = -a * c2, e[2] = -l2 * c2, e[6] = n2 * h2 + i2, e[10] = t3 - r2 * h2;
      } else if ("XZY" === t2.order) {
        const t3 = s * o, n2 = s * l2, i2 = a * o, r2 = a * l2;
        e[0] = o * c2, e[4] = -h2, e[8] = l2 * c2, e[1] = t3 * h2 + r2, e[5] = s * c2, e[9] = n2 * h2 - i2, e[2] = i2 * h2 - n2, e[6] = a * c2, e[10] = r2 * h2 + t3;
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(ur, t2, dr);
    }
    lookAt(t2, e, n) {
      const i = this.elements;
      return fr.subVectors(t2, e), 0 === fr.lengthSq() && (fr.z = 1), fr.normalize(), pr.crossVectors(n, fr), 0 === pr.lengthSq() && (1 === Math.abs(n.z) ? fr.x += 1e-4 : fr.z += 1e-4, fr.normalize(), pr.crossVectors(n, fr)), pr.normalize(), mr.crossVectors(fr, pr), i[0] = pr.x, i[4] = mr.x, i[8] = fr.x, i[1] = pr.y, i[5] = mr.y, i[9] = fr.y, i[2] = pr.z, i[6] = mr.z, i[10] = fr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l2 = n[12], c2 = n[1], h2 = n[5], u2 = n[9], d2 = n[13], p = n[2], m = n[6], f = n[10], g = n[14], _ = n[3], v = n[7], x = n[11], y2 = n[15], M = i[0], S = i[4], b = i[8], E = i[12], T = i[1], w = i[5], A = i[9], R = i[13], C2 = i[2], P2 = i[6], L = i[10], I = i[14], U = i[3], N = i[7], D = i[11], O = i[15];
      return r[0] = s * M + a * T + o * C2 + l2 * U, r[4] = s * S + a * w + o * P2 + l2 * N, r[8] = s * b + a * A + o * L + l2 * D, r[12] = s * E + a * R + o * I + l2 * O, r[1] = c2 * M + h2 * T + u2 * C2 + d2 * U, r[5] = c2 * S + h2 * w + u2 * P2 + d2 * N, r[9] = c2 * b + h2 * A + u2 * L + d2 * D, r[13] = c2 * E + h2 * R + u2 * I + d2 * O, r[2] = p * M + m * T + f * C2 + g * U, r[6] = p * S + m * w + f * P2 + g * N, r[10] = p * b + m * A + f * L + g * D, r[14] = p * E + m * R + f * I + g * O, r[3] = _ * M + v * T + x * C2 + y2 * U, r[7] = _ * S + v * w + x * P2 + y2 * N, r[11] = _ * b + v * A + x * L + y2 * D, r[15] = _ * E + v * R + x * I + y2 * O, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[4] *= t2, e[8] *= t2, e[12] *= t2, e[1] *= t2, e[5] *= t2, e[9] *= t2, e[13] *= t2, e[2] *= t2, e[6] *= t2, e[10] *= t2, e[14] *= t2, e[3] *= t2, e[7] *= t2, e[11] *= t2, e[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[4], i = t2[8], r = t2[12], s = t2[1], a = t2[5], o = t2[9], l2 = t2[13], c2 = t2[2], h2 = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r * o * h2 - i * l2 * h2 - r * a * u2 + n * l2 * u2 + i * a * d2 - n * o * d2) + t2[7] * (+e * o * d2 - e * l2 * u2 + r * s * u2 - i * s * d2 + i * l2 * c2 - r * o * c2) + t2[11] * (+e * l2 * h2 - e * a * d2 - r * s * h2 + n * s * d2 + r * a * c2 - n * l2 * c2) + t2[15] * (-i * a * c2 - e * o * h2 + e * a * u2 + i * s * h2 - n * s * u2 + n * o * c2);
    }
    transpose() {
      const t2 = this.elements;
      let e;
      return e = t2[1], t2[1] = t2[4], t2[4] = e, e = t2[2], t2[2] = t2[8], t2[8] = e, e = t2[6], t2[6] = t2[9], t2[9] = e, e = t2[3], t2[3] = t2[12], t2[12] = e, e = t2[7], t2[7] = t2[13], t2[13] = e, e = t2[11], t2[11] = t2[14], t2[14] = e, this;
    }
    setPosition(t2, e, n) {
      const i = this.elements;
      return t2.isVector3 ? (i[12] = t2.x, i[13] = t2.y, i[14] = t2.z) : (i[12] = t2, i[13] = e, i[14] = n), this;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l2 = t2[7], c2 = t2[8], h2 = t2[9], u2 = t2[10], d2 = t2[11], p = t2[12], m = t2[13], f = t2[14], g = t2[15], _ = h2 * f * l2 - m * u2 * l2 + m * o * d2 - a * f * d2 - h2 * o * g + a * u2 * g, v = p * u2 * l2 - c2 * f * l2 - p * o * d2 + s * f * d2 + c2 * o * g - s * u2 * g, x = c2 * m * l2 - p * h2 * l2 + p * a * d2 - s * m * d2 - c2 * a * g + s * h2 * g, y2 = p * h2 * o - c2 * m * o - p * a * u2 + s * m * u2 + c2 * a * f - s * h2 * f, M = e * _ + n * v + i * x + r * y2;
      if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / M;
      return t2[0] = _ * S, t2[1] = (m * u2 * r - h2 * f * r - m * i * d2 + n * f * d2 + h2 * i * g - n * u2 * g) * S, t2[2] = (a * f * r - m * o * r + m * i * l2 - n * f * l2 - a * i * g + n * o * g) * S, t2[3] = (h2 * o * r - a * u2 * r - h2 * i * l2 + n * u2 * l2 + a * i * d2 - n * o * d2) * S, t2[4] = v * S, t2[5] = (c2 * f * r - p * u2 * r + p * i * d2 - e * f * d2 - c2 * i * g + e * u2 * g) * S, t2[6] = (p * o * r - s * f * r - p * i * l2 + e * f * l2 + s * i * g - e * o * g) * S, t2[7] = (s * u2 * r - c2 * o * r + c2 * i * l2 - e * u2 * l2 - s * i * d2 + e * o * d2) * S, t2[8] = x * S, t2[9] = (p * h2 * r - c2 * m * r - p * n * d2 + e * m * d2 + c2 * n * g - e * h2 * g) * S, t2[10] = (s * m * r - p * a * r + p * n * l2 - e * m * l2 - s * n * g + e * a * g) * S, t2[11] = (c2 * a * r - s * h2 * r - c2 * n * l2 + e * h2 * l2 + s * n * d2 - e * a * d2) * S, t2[12] = y2 * S, t2[13] = (c2 * m * i - p * h2 * i + p * n * u2 - e * m * u2 - c2 * n * f + e * h2 * f) * S, t2[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * S, t2[15] = (s * h2 * i - c2 * a * i + c2 * n * o - e * h2 * o - s * n * u2 + e * a * u2) * S, this;
    }
    scale(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z;
      return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], n = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t2, e, n) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t2.x, a = t2.y, o = t2.z, l2 = r * s, c2 = r * a;
      return this.set(l2 * s + n, l2 * a - i * o, l2 * o + i * a, 0, l2 * a + i * o, c2 * a + n, c2 * o - i * s, 0, l2 * o - i * a, c2 * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e, n) {
      return this.set(t2, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e, n, i, r, s) {
      return this.set(1, n, r, 0, t2, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e, n) {
      const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l2 = r + r, c2 = s + s, h2 = a + a, u2 = r * l2, d2 = r * c2, p = r * h2, m = s * c2, f = s * h2, g = a * h2, _ = o * l2, v = o * c2, x = o * h2, y2 = n.x, M = n.y, S = n.z;
      return i[0] = (1 - (m + g)) * y2, i[1] = (d2 + x) * y2, i[2] = (p - v) * y2, i[3] = 0, i[4] = (d2 - x) * M, i[5] = (1 - (u2 + g)) * M, i[6] = (f + _) * M, i[7] = 0, i[8] = (p + v) * S, i[9] = (f - _) * S, i[10] = (1 - (u2 + m)) * S, i[11] = 0, i[12] = t2.x, i[13] = t2.y, i[14] = t2.z, i[15] = 1, this;
    }
    decompose(t2, e, n) {
      const i = this.elements;
      let r = cr.set(i[0], i[1], i[2]).length();
      const s = cr.set(i[4], i[5], i[6]).length(), a = cr.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t2.x = i[12], t2.y = i[13], t2.z = i[14], hr.copy(this);
      const o = 1 / r, l2 = 1 / s, c2 = 1 / a;
      return hr.elements[0] *= o, hr.elements[1] *= o, hr.elements[2] *= o, hr.elements[4] *= l2, hr.elements[5] *= l2, hr.elements[6] *= l2, hr.elements[8] *= c2, hr.elements[9] *= c2, hr.elements[10] *= c2, e.setFromRotationMatrix(hr), n.x = r, n.y = s, n.z = a, this;
    }
    makePerspective(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 2 * r / (e - t2), c2 = 2 * r / (n - i), h2 = (e + t2) / (e - t2), u2 = (n + i) / (n - i);
      let d2, p;
      if (a === Fn) d2 = -(s + r) / (s - r), p = -2 * s * r / (s - r);
      else {
        if (a !== Bn) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        d2 = -s / (s - r), p = -s * r / (s - r);
      }
      return o[0] = l2, o[4] = 0, o[8] = h2, o[12] = 0, o[1] = 0, o[5] = c2, o[9] = u2, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d2, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }
    makeOrthographic(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l2 = 1 / (e - t2), c2 = 1 / (n - i), h2 = 1 / (s - r), u2 = (e + t2) * l2, d2 = (n + i) * c2;
      let p, m;
      if (a === Fn) p = (s + r) * h2, m = -2 * h2;
      else {
        if (a !== Bn) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        p = r * h2, m = -1 * h2;
      }
      return o[0] = 2 * l2, o[4] = 0, o[8] = 0, o[12] = -u2, o[1] = 0, o[5] = 2 * c2, o[9] = 0, o[13] = -d2, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2[e + 9] = n[9], t2[e + 10] = n[10], t2[e + 11] = n[11], t2[e + 12] = n[12], t2[e + 13] = n[13], t2[e + 14] = n[14], t2[e + 15] = n[15], t2;
    }
  };
  var cr = new Ii();
  var hr = new lr();
  var ur = new Ii(0, 0, 0);
  var dr = new Ii(1, 1, 1);
  var pr = new Ii();
  var mr = new Ii();
  var fr = new Ii();
  var gr = new lr();
  var _r = new Li();
  var vr = class _vr {
    constructor(t2 = 0, e = 0, n = 0, i = _vr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e, n, i = this._order) {
      return this._x = t2, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e = this._order, n = true) {
      const i = t2.elements, r = i[0], s = i[4], a = i[8], o = i[1], l2 = i[5], c2 = i[9], h2 = i[2], u2 = i[6], d2 = i[10];
      switch (e) {
        case "XYZ":
          this._y = Math.asin(Xn(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-c2, d2), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u2, l2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Xn(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._y = Math.atan2(a, d2), this._z = Math.atan2(o, l2)) : (this._y = Math.atan2(-h2, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Xn(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-h2, d2), this._z = Math.atan2(-s, l2)) : (this._y = 0, this._z = Math.atan2(o, r));
          break;
        case "ZYX":
          this._y = Math.asin(-Xn(h2, -1, 1)), Math.abs(h2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l2));
          break;
        case "YZX":
          this._z = Math.asin(Xn(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-c2, l2), this._y = Math.atan2(-h2, r)) : (this._x = 0, this._y = Math.atan2(a, d2));
          break;
        case "XZY":
          this._z = Math.asin(-Xn(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u2, l2), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c2, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      return this._order = e, true === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e, n) {
      return gr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(gr, e, n);
    }
    setFromVector3(t2, e = this._order) {
      return this.set(t2.x, t2.y, t2.z, e);
    }
    reorder(t2) {
      return _r.setFromEuler(this), this.setFromQuaternion(_r, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  vr.DEFAULT_ORDER = "XYZ";
  var xr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = (1 << t2 | 0) >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2 | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2 | 0;
    }
    disable(t2) {
      this.mask &= ~(1 << t2 | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 != (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return 0 != (this.mask & (1 << t2 | 0));
    }
  };
  var yr = 0;
  var Mr = new Ii();
  var Sr = new Li();
  var br = new lr();
  var Er = new Ii();
  var Tr = new Ii();
  var wr = new Ii();
  var Ar = new Li();
  var Rr = new Ii(1, 0, 0);
  var Cr = new Ii(0, 1, 0);
  var Pr = new Ii(0, 0, 1);
  var Lr = { type: "added" };
  var Ir = { type: "removed" };
  var Ur = class _Ur extends zn {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: yr++ }), this.uuid = Wn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Ur.DEFAULT_UP.clone();
      const t2 = new Ii(), e = new vr(), n = new Li(), i = new Ii(1, 1, 1);
      e._onChange((function() {
        n.setFromEuler(e, false);
      })), n._onChange((function() {
        e.setFromQuaternion(n, void 0, false);
      })), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new lr() }, normalMatrix: { value: new ti() } }), this.matrix = new lr(), this.matrixWorld = new lr(), this.matrixAutoUpdate = _Ur.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new xr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e) {
      this.quaternion.setFromAxisAngle(t2, e);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e) {
      return Sr.setFromAxisAngle(t2, e), this.quaternion.multiply(Sr), this;
    }
    rotateOnWorldAxis(t2, e) {
      return Sr.setFromAxisAngle(t2, e), this.quaternion.premultiply(Sr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(Rr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(Cr, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Pr, t2);
    }
    translateOnAxis(t2, e) {
      return Mr.copy(t2).applyQuaternion(this.quaternion), this.position.add(Mr.multiplyScalar(e)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(Rr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(Cr, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Pr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(br.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e, n) {
      t2.isVector3 ? Er.copy(t2) : Er.set(t2, e, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), Tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? br.lookAt(Tr, Er, this.up) : br.lookAt(Er, Tr, this.up), this.quaternion.setFromRotationMatrix(br), i && (br.extractRotation(i.matrixWorld), Sr.setFromRotationMatrix(br), this.quaternion.premultiply(Sr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (null !== t2.parent && t2.parent.remove(t2), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Lr)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e = this.children.indexOf(t2);
      return -1 !== e && (t2.parent = null, this.children.splice(e, 1), t2.dispatchEvent(Ir)), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), br.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), br.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(br), this.add(t2), t2.updateWorldMatrix(false, true), this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e) {
      if (this[t2] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i2 = this.children[n].getObjectByProperty(t2, e);
        if (void 0 !== i2) return i2;
      }
    }
    getObjectsByProperty(t2, e, n = []) {
      this[t2] === e && n.push(this);
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) i[r].getObjectsByProperty(t2, e, n);
      return n;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Tr, t2, wr), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Tr, Ar, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return t2.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e = this.parent;
      null !== e && (t2(e), e.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        const i2 = e[n];
        true !== i2.matrixWorldAutoUpdate && true !== t2 || i2.updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e) {
      const n = this.parent;
      if (true === t2 && null !== n && true === n.matrixWorldAutoUpdate && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), true === e) {
        const t3 = this.children;
        for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) {
          const n3 = t3[e2];
          true === n3.matrixWorldAutoUpdate && n3.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2, n = {};
      e && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
      const i = {};
      function r(e2, n2) {
        return void 0 === e2[n2.uuid] && (e2[n2.uuid] = n2.toJSON(t2)), n2.uuid;
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), true === this.castShadow && (i.castShadow = true), true === this.receiveShadow && (i.receiveShadow = true), false === this.visible && (i.visible = false), false === this.frustumCulled && (i.frustumCulled = false), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), false === this.matrixAutoUpdate && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(((t3) => ({ boxInitialized: t3.boxInitialized, boxMin: t3.box.min.toArray(), boxMax: t3.box.max.toArray(), sphereInitialized: t3.sphereInitialized, sphereRadius: t3.sphere.radius, sphereCenter: t3.sphere.center.toArray() }))), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t2), null !== this.boundingSphere && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), null !== this.boundingBox && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t2.geometries, this.geometry);
        const e2 = this.geometry.parameters;
        if (void 0 !== e2 && void 0 !== e2.shapes) {
          const n2 = e2.shapes;
          if (Array.isArray(n2)) for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
            const i3 = n2[e3];
            r(t2.shapes, i3);
          }
          else r(t2.shapes, n2);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t2.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e2 = [];
        for (let n2 = 0, i2 = this.material.length; n2 < i2; n2++) e2.push(r(t2.materials, this.material[n2]));
        i.material = e2;
      } else i.material = r(t2.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e2 = 0; e2 < this.children.length; e2++) i.children.push(this.children[e2].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e2 = 0; e2 < this.animations.length; e2++) {
          const n2 = this.animations[e2];
          i.animations.push(r(t2.animations, n2));
        }
      }
      if (e) {
        const e2 = s(t2.geometries), i2 = s(t2.materials), r2 = s(t2.textures), a = s(t2.images), o = s(t2.shapes), l2 = s(t2.skeletons), c2 = s(t2.animations), h2 = s(t2.nodes);
        e2.length > 0 && (n.geometries = e2), i2.length > 0 && (n.materials = i2), r2.length > 0 && (n.textures = r2), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l2.length > 0 && (n.skeletons = l2), c2.length > 0 && (n.animations = c2), h2.length > 0 && (n.nodes = h2);
      }
      return n.object = i, n;
      function s(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e) for (let e2 = 0; e2 < t2.children.length; e2++) {
        const n = t2.children[e2];
        this.add(n.clone());
      }
      return this;
    }
  };
  Ur.DEFAULT_UP = new Ii(0, 1, 0), Ur.DEFAULT_MATRIX_AUTO_UPDATE = true, Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Nr = new Ii();
  var Dr = new Ii();
  var Or = new Ii();
  var Fr = new Ii();
  var Br = new Ii();
  var zr = new Ii();
  var Hr = new Ii();
  var Vr = new Ii();
  var kr = new Ii();
  var Gr = new Ii();
  var Wr = class _Wr {
    constructor(t2 = new Ii(), e = new Ii(), n = new Ii()) {
      this.a = t2, this.b = e, this.c = n;
    }
    static getNormal(t2, e, n, i) {
      i.subVectors(n, e), Nr.subVectors(t2, e), i.cross(Nr);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t2, e, n, i, r) {
      Nr.subVectors(i, e), Dr.subVectors(n, e), Or.subVectors(t2, e);
      const s = Nr.dot(Nr), a = Nr.dot(Dr), o = Nr.dot(Or), l2 = Dr.dot(Dr), c2 = Dr.dot(Or), h2 = s * l2 - a * a;
      if (0 === h2) return r.set(0, 0, 0), null;
      const u2 = 1 / h2, d2 = (l2 * o - a * c2) * u2, p = (s * c2 - a * o) * u2;
      return r.set(1 - d2 - p, p, d2);
    }
    static containsPoint(t2, e, n, i) {
      return null !== this.getBarycoord(t2, e, n, i, Fr) && (Fr.x >= 0 && Fr.y >= 0 && Fr.x + Fr.y <= 1);
    }
    static getInterpolation(t2, e, n, i, r, s, a, o) {
      return null === this.getBarycoord(t2, e, n, i, Fr) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, Fr.x), o.addScaledVector(s, Fr.y), o.addScaledVector(a, Fr.z), o);
    }
    static isFrontFacing(t2, e, n, i) {
      return Nr.subVectors(n, e), Dr.subVectors(t2, e), Nr.cross(Dr).dot(i) < 0;
    }
    set(t2, e, n) {
      return this.a.copy(t2), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t2, e, n, i) {
      return this.a.copy(t2[e]), this.b.copy(t2[n]), this.c.copy(t2[i]), this;
    }
    setFromAttributeAndIndices(t2, e, n, i) {
      return this.a.fromBufferAttribute(t2, e), this.b.fromBufferAttribute(t2, n), this.c.fromBufferAttribute(t2, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Nr.subVectors(this.c, this.b), Dr.subVectors(this.a, this.b), 0.5 * Nr.cross(Dr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _Wr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e) {
      return _Wr.getBarycoord(t2, this.a, this.b, this.c, e);
    }
    getInterpolation(t2, e, n, i, r) {
      return _Wr.getInterpolation(t2, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t2) {
      return _Wr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _Wr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e) {
      const n = this.a, i = this.b, r = this.c;
      let s, a;
      Br.subVectors(i, n), zr.subVectors(r, n), Vr.subVectors(t2, n);
      const o = Br.dot(Vr), l2 = zr.dot(Vr);
      if (o <= 0 && l2 <= 0) return e.copy(n);
      kr.subVectors(t2, i);
      const c2 = Br.dot(kr), h2 = zr.dot(kr);
      if (c2 >= 0 && h2 <= c2) return e.copy(i);
      const u2 = o * h2 - c2 * l2;
      if (u2 <= 0 && o >= 0 && c2 <= 0) return s = o / (o - c2), e.copy(n).addScaledVector(Br, s);
      Gr.subVectors(t2, r);
      const d2 = Br.dot(Gr), p = zr.dot(Gr);
      if (p >= 0 && d2 <= p) return e.copy(r);
      const m = d2 * l2 - o * p;
      if (m <= 0 && l2 >= 0 && p <= 0) return a = l2 / (l2 - p), e.copy(n).addScaledVector(zr, a);
      const f = c2 * p - d2 * h2;
      if (f <= 0 && h2 - c2 >= 0 && d2 - p >= 0) return Hr.subVectors(r, i), a = (h2 - c2) / (h2 - c2 + (d2 - p)), e.copy(i).addScaledVector(Hr, a);
      const g = 1 / (f + m + u2);
      return s = m * g, a = u2 * g, e.copy(n).addScaledVector(Br, s).addScaledVector(zr, a);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var Xr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var jr = { h: 0, s: 0, l: 0 };
  var qr = { h: 0, s: 0, l: 0 };
  function Yr(t2, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t2 + 6 * (e - t2) * n : n < 0.5 ? e : n < 2 / 3 ? t2 + 6 * (e - t2) * (2 / 3 - n) : t2;
  }
  var Zr = class {
    constructor(t2, e, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e, n);
    }
    set(t2, e, n) {
      if (void 0 === e && void 0 === n) {
        const e2 = t2;
        e2 && e2.isColor ? this.copy(e2) : "number" == typeof e2 ? this.setHex(e2) : "string" == typeof e2 && this.setStyle(e2);
      } else this.setRGB(t2, e, n);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e = je) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, pi.toWorkingColorSpace(this, e), this;
    }
    setRGB(t2, e, n, i = pi.workingColorSpace) {
      return this.r = t2, this.g = e, this.b = n, pi.toWorkingColorSpace(this, i), this;
    }
    setHSL(t2, e, n, i = pi.workingColorSpace) {
      if (t2 = jn(t2, 1), e = Xn(e, 0, 1), n = Xn(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
      else {
        const i2 = n <= 0.5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i2;
        this.r = Yr(r, i2, t2 + 1 / 3), this.g = Yr(r, i2, t2), this.b = Yr(r, i2, t2 - 1 / 3);
      }
      return pi.toWorkingColorSpace(this, i), this;
    }
    setStyle(t2, e = je) {
      function n(e2) {
        void 0 !== e2 && parseFloat(e2) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r;
        const s = i[1], a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t2);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const n2 = i[1], r = n2.length;
        if (3 === r) return this.setRGB(parseInt(n2.charAt(0), 16) / 15, parseInt(n2.charAt(1), 16) / 15, parseInt(n2.charAt(2), 16) / 15, e);
        if (6 === r) return this.setHex(parseInt(n2, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e);
      return this;
    }
    setColorName(t2, e = je) {
      const n = Xr[t2.toLowerCase()];
      return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = mi(t2.r), this.g = mi(t2.g), this.b = mi(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = fi(t2.r), this.g = fi(t2.g), this.b = fi(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = je) {
      return pi.fromWorkingColorSpace(Jr.copy(this), t2), 65536 * Math.round(Xn(255 * Jr.r, 0, 255)) + 256 * Math.round(Xn(255 * Jr.g, 0, 255)) + Math.round(Xn(255 * Jr.b, 0, 255));
    }
    getHexString(t2 = je) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e = pi.workingColorSpace) {
      pi.fromWorkingColorSpace(Jr.copy(this), e);
      const n = Jr.r, i = Jr.g, r = Jr.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
      let o, l2;
      const c2 = (a + s) / 2;
      if (a === s) o = 0, l2 = 0;
      else {
        const t3 = s - a;
        switch (l2 = c2 <= 0.5 ? t3 / (s + a) : t3 / (2 - s - a), s) {
          case n:
            o = (i - r) / t3 + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t3 + 2;
            break;
          case r:
            o = (n - i) / t3 + 4;
        }
        o /= 6;
      }
      return t2.h = o, t2.s = l2, t2.l = c2, t2;
    }
    getRGB(t2, e = pi.workingColorSpace) {
      return pi.fromWorkingColorSpace(Jr.copy(this), e), t2.r = Jr.r, t2.g = Jr.g, t2.b = Jr.b, t2;
    }
    getStyle(t2 = je) {
      pi.fromWorkingColorSpace(Jr.copy(this), t2);
      const e = Jr.r, n = Jr.g, i = Jr.b;
      return t2 !== je ? `color(${t2} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(255 * i)})`;
    }
    offsetHSL(t2, e, n) {
      return this.getHSL(jr), this.setHSL(jr.h + t2, jr.s + e, jr.l + n);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e) {
      return this.r = t2.r + e.r, this.g = t2.g + e.g, this.b = t2.b + e.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e) {
      return this.r += (t2.r - this.r) * e, this.g += (t2.g - this.g) * e, this.b += (t2.b - this.b) * e, this;
    }
    lerpColors(t2, e, n) {
      return this.r = t2.r + (e.r - t2.r) * n, this.g = t2.g + (e.g - t2.g) * n, this.b = t2.b + (e.b - t2.b) * n, this;
    }
    lerpHSL(t2, e) {
      this.getHSL(jr), t2.getHSL(qr);
      const n = qn(jr.h, qr.h, e), i = qn(jr.s, qr.s, e), r = qn(jr.l, qr.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e = this.r, n = this.g, i = this.b, r = t2.elements;
      return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e = 0) {
      return this.r = t2[e], this.g = t2[e + 1], this.b = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.r, t2[e + 1] = this.g, t2[e + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.r = t2.getX(e), this.g = t2.getY(e), this.b = t2.getZ(e), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var Jr = new Zr();
  Zr.NAMES = Xr;
  var Kr = 0;
  var $r = class extends zn {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Kr++ }), this.uuid = Wn(), this.name = "", this.type = "Material", this.blending = 1, this.side = u, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = C, this.blendDst = P, this.blendEquation = y, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Zr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = en, this.stencilZFail = en, this.stencilZPass = en, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBuild() {
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e in t2) {
        const n = t2[e];
        if (void 0 === n) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      e && (t2 = { textures: {}, images: {} });
      const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
      function i(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t2).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t2).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t2).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t2).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t2).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), this.side !== u && (n.side = this.side), true === this.vertexColors && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), true === this.transparent && (n.transparent = true), this.blendSrc !== C && (n.blendSrc = this.blendSrc), this.blendDst !== P && (n.blendDst = this.blendDst), this.blendEquation !== y && (n.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (n.depthFunc = this.depthFunc), false === this.depthTest && (n.depthTest = this.depthTest), false === this.depthWrite && (n.depthWrite = this.depthWrite), false === this.colorWrite && (n.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== en && (n.stencilFail = this.stencilFail), this.stencilZFail !== en && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== en && (n.stencilZPass = this.stencilZPass), true === this.stencilWrite && (n.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), true === this.polygonOffset && (n.polygonOffset = true), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), true === this.dithering && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), true === this.alphaHash && (n.alphaHash = true), true === this.alphaToCoverage && (n.alphaToCoverage = true), true === this.premultipliedAlpha && (n.premultipliedAlpha = true), true === this.forceSinglePass && (n.forceSinglePass = true), true === this.wireframe && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (n.flatShading = true), false === this.visible && (n.visible = false), false === this.toneMapped && (n.toneMapped = false), false === this.fog && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
        const e2 = i(t2.textures), r = i(t2.images);
        e2.length > 0 && (n.textures = e2), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e = t2.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t3 = e.length;
        n = new Array(t3);
        for (let i = 0; i !== t3; ++i) n[i] = e[i].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var Qr = class extends $r {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Zr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Y, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var ts = es();
  function es() {
    const t2 = new ArrayBuffer(4), e = new Float32Array(t2), n = new Uint32Array(t2), i = new Uint32Array(512), r = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e2 = t3 - 127;
      e2 < -27 ? (i[t3] = 0, i[256 | t3] = 32768, r[t3] = 24, r[256 | t3] = 24) : e2 < -14 ? (i[t3] = 1024 >> -e2 - 14, i[256 | t3] = 1024 >> -e2 - 14 | 32768, r[t3] = -e2 - 1, r[256 | t3] = -e2 - 1) : e2 <= 15 ? (i[t3] = e2 + 15 << 10, i[256 | t3] = e2 + 15 << 10 | 32768, r[t3] = 13, r[256 | t3] = 13) : e2 < 128 ? (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 24, r[256 | t3] = 24) : (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 13, r[256 | t3] = 13);
    }
    const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e2 = t3 << 13, n2 = 0;
      for (; 0 == (8388608 & e2); ) e2 <<= 1, n2 -= 8388608;
      e2 &= -8388609, n2 += 947912704, s[t3] = e2 | n2;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) s[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a[t3] = t3 << 23;
    a[31] = 1199570944, a[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a[t3] = 2147483648 + (t3 - 32 << 23);
    a[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o[t3] = 1024);
    return { floatView: e, uint32View: n, baseTable: i, shiftTable: r, mantissaTable: s, exponentTable: a, offsetTable: o };
  }
  var ss = new Ii();
  var as = new Qn();
  var os = class {
    constructor(t2, e, n = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = t2, this.itemSize = e, this.count = void 0 !== t2 ? t2.length / e : 0, this.normalized = n, this.usage = Tn, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Lt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    get updateRange() {
      return li("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e) {
      this.updateRanges.push({ start: t2, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e, n) {
      t2 *= this.itemSize, n *= e.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[t2 + i] = e.array[n + i];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) as.fromBufferAttribute(this, e), as.applyMatrix3(t2), this.setXY(e, as.x, as.y);
      else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) ss.fromBufferAttribute(this, e), ss.applyMatrix3(t2), this.setXYZ(e, ss.x, ss.y, ss.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e = 0, n = this.count; e < n; e++) ss.fromBufferAttribute(this, e), ss.applyMatrix4(t2), this.setXYZ(e, ss.x, ss.y, ss.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e = 0, n = this.count; e < n; e++) ss.fromBufferAttribute(this, e), ss.applyNormalMatrix(t2), this.setXYZ(e, ss.x, ss.y, ss.z);
      return this;
    }
    transformDirection(t2) {
      for (let e = 0, n = this.count; e < n; e++) ss.fromBufferAttribute(this, e), ss.transformDirection(t2), this.setXYZ(e, ss.x, ss.y, ss.z);
      return this;
    }
    set(t2, e = 0) {
      return this.array.set(t2, e), this;
    }
    getComponent(t2, e) {
      let n = this.array[t2 * this.itemSize + e];
      return this.normalized && (n = Jn(n, this.array)), n;
    }
    setComponent(t2, e, n) {
      return this.normalized && (n = Kn(n, this.array)), this.array[t2 * this.itemSize + e] = n, this;
    }
    getX(t2) {
      let e = this.array[t2 * this.itemSize];
      return this.normalized && (e = Jn(e, this.array)), e;
    }
    setX(t2, e) {
      return this.normalized && (e = Kn(e, this.array)), this.array[t2 * this.itemSize] = e, this;
    }
    getY(t2) {
      let e = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e = Jn(e, this.array)), e;
    }
    setY(t2, e) {
      return this.normalized && (e = Kn(e, this.array)), this.array[t2 * this.itemSize + 1] = e, this;
    }
    getZ(t2) {
      let e = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e = Jn(e, this.array)), e;
    }
    setZ(t2, e) {
      return this.normalized && (e = Kn(e, this.array)), this.array[t2 * this.itemSize + 2] = e, this;
    }
    getW(t2) {
      let e = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e = Jn(e, this.array)), e;
    }
    setW(t2, e) {
      return this.normalized && (e = Kn(e, this.array)), this.array[t2 * this.itemSize + 3] = e, this;
    }
    setXY(t2, e, n) {
      return t2 *= this.itemSize, this.normalized && (e = Kn(e, this.array), n = Kn(n, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this;
    }
    setXYZ(t2, e, n, i) {
      return t2 *= this.itemSize, this.normalized && (e = Kn(e, this.array), n = Kn(n, this.array), i = Kn(i, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this;
    }
    setXYZW(t2, e, n, i, r) {
      return t2 *= this.itemSize, this.normalized && (e = Kn(e, this.array), n = Kn(n, this.array), i = Kn(i, this.array), r = Kn(r, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this.array[t2 + 3] = r, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Tn && (t2.usage = this.usage), t2;
    }
  };
  var ds = class extends os {
    constructor(t2, e, n) {
      super(new Uint16Array(t2), e, n);
    }
  };
  var ms = class extends os {
    constructor(t2, e, n) {
      super(new Uint32Array(t2), e, n);
    }
  };
  var gs = class extends os {
    constructor(t2, e, n) {
      super(new Float32Array(t2), e, n);
    }
  };
  var vs = 0;
  var xs = new lr();
  var ys = new Ur();
  var Ms = new Ii();
  var Ss = new Di();
  var bs = new Di();
  var Es = new Ii();
  var Ts = class _Ts extends zn {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: vs++ }), this.uuid = Wn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (ni(t2) ? ms : ds)(t2, 1) : this.index = t2, this;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e) {
      return this.attributes[t2] = e, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e, n = 0) {
      this.groups.push({ start: t2, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e) {
      this.drawRange.start = t2, this.drawRange.count = e;
    }
    applyMatrix4(t2) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t2), e.needsUpdate = true);
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e2 = new ti().getNormalMatrix(t2);
        n.applyNormalMatrix(e2), n.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t2), i.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return xs.makeRotationFromQuaternion(t2), this.applyMatrix4(xs), this;
    }
    rotateX(t2) {
      return xs.makeRotationX(t2), this.applyMatrix4(xs), this;
    }
    rotateY(t2) {
      return xs.makeRotationY(t2), this.applyMatrix4(xs), this;
    }
    rotateZ(t2) {
      return xs.makeRotationZ(t2), this.applyMatrix4(xs), this;
    }
    translate(t2, e, n) {
      return xs.makeTranslation(t2, e, n), this.applyMatrix4(xs), this;
    }
    scale(t2, e, n) {
      return xs.makeScale(t2, e, n), this.applyMatrix4(xs), this;
    }
    lookAt(t2) {
      return ys.lookAt(t2), ys.updateMatrix(), this.applyMatrix4(ys.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Ms).negate(), this.translate(Ms.x, Ms.y, Ms.z), this;
    }
    setFromPoints(t2) {
      const e = [];
      for (let n = 0, i = t2.length; n < i; n++) {
        const i2 = t2[n];
        e.push(i2.x, i2.y, i2.z || 0);
      }
      return this.setAttribute("position", new gs(e, 3)), this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Di());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Ii(-1 / 0, -1 / 0, -1 / 0), new Ii(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e) for (let t3 = 0, n = e.length; t3 < n; t3++) {
          const n2 = e[t3];
          Ss.setFromBufferAttribute(n2), this.morphTargetsRelative ? (Es.addVectors(this.boundingBox.min, Ss.min), this.boundingBox.expandByPoint(Es), Es.addVectors(this.boundingBox.max, Ss.max), this.boundingBox.expandByPoint(Es)) : (this.boundingBox.expandByPoint(Ss.min), this.boundingBox.expandByPoint(Ss.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Qi());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Ii(), 1 / 0);
      if (t2) {
        const n = this.boundingSphere.center;
        if (Ss.setFromBufferAttribute(t2), e) for (let t3 = 0, n2 = e.length; t3 < n2; t3++) {
          const n3 = e[t3];
          bs.setFromBufferAttribute(n3), this.morphTargetsRelative ? (Es.addVectors(Ss.min, bs.min), Ss.expandByPoint(Es), Es.addVectors(Ss.max, bs.max), Ss.expandByPoint(Es)) : (Ss.expandByPoint(bs.min), Ss.expandByPoint(bs.max));
        }
        Ss.getCenter(n);
        let i = 0;
        for (let e2 = 0, r = t2.count; e2 < r; e2++) Es.fromBufferAttribute(t2, e2), i = Math.max(i, n.distanceToSquared(Es));
        if (e) for (let r = 0, s = e.length; r < s; r++) {
          const s2 = e[r], a = this.morphTargetsRelative;
          for (let e2 = 0, r2 = s2.count; e2 < r2; e2++) Es.fromBufferAttribute(s2, e2), a && (Ms.fromBufferAttribute(t2, e2), Es.add(Ms)), i = Math.max(i, n.distanceToSquared(Es));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e = this.attributes;
      if (null === t2 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n = t2.array, i = e.position.array, r = e.normal.array, s = e.uv.array, a = i.length / 3;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new os(new Float32Array(4 * a), 4));
      const o = this.getAttribute("tangent").array, l2 = [], c2 = [];
      for (let t3 = 0; t3 < a; t3++) l2[t3] = new Ii(), c2[t3] = new Ii();
      const h2 = new Ii(), u2 = new Ii(), d2 = new Ii(), p = new Qn(), m = new Qn(), f = new Qn(), g = new Ii(), _ = new Ii();
      function v(t3, e2, n2) {
        h2.fromArray(i, 3 * t3), u2.fromArray(i, 3 * e2), d2.fromArray(i, 3 * n2), p.fromArray(s, 2 * t3), m.fromArray(s, 2 * e2), f.fromArray(s, 2 * n2), u2.sub(h2), d2.sub(h2), m.sub(p), f.sub(p);
        const r2 = 1 / (m.x * f.y - f.x * m.y);
        isFinite(r2) && (g.copy(u2).multiplyScalar(f.y).addScaledVector(d2, -m.y).multiplyScalar(r2), _.copy(d2).multiplyScalar(m.x).addScaledVector(u2, -f.x).multiplyScalar(r2), l2[t3].add(g), l2[e2].add(g), l2[n2].add(g), c2[t3].add(_), c2[e2].add(_), c2[n2].add(_));
      }
      let x = this.groups;
      0 === x.length && (x = [{ start: 0, count: n.length }]);
      for (let t3 = 0, e2 = x.length; t3 < e2; ++t3) {
        const e3 = x[t3], i2 = e3.start;
        for (let t4 = i2, r2 = i2 + e3.count; t4 < r2; t4 += 3) v(n[t4 + 0], n[t4 + 1], n[t4 + 2]);
      }
      const y2 = new Ii(), M = new Ii(), S = new Ii(), b = new Ii();
      function E(t3) {
        S.fromArray(r, 3 * t3), b.copy(S);
        const e2 = l2[t3];
        y2.copy(e2), y2.sub(S.multiplyScalar(S.dot(e2))).normalize(), M.crossVectors(b, e2);
        const n2 = M.dot(c2[t3]) < 0 ? -1 : 1;
        o[4 * t3] = y2.x, o[4 * t3 + 1] = y2.y, o[4 * t3 + 2] = y2.z, o[4 * t3 + 3] = n2;
      }
      for (let t3 = 0, e2 = x.length; t3 < e2; ++t3) {
        const e3 = x[t3], i2 = e3.start;
        for (let t4 = i2, r2 = i2 + e3.count; t4 < r2; t4 += 3) E(n[t4 + 0]), E(n[t4 + 1]), E(n[t4 + 2]);
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n) n = new os(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
        else for (let t3 = 0, e2 = n.count; t3 < e2; t3++) n.setXYZ(t3, 0, 0, 0);
        const i = new Ii(), r = new Ii(), s = new Ii(), a = new Ii(), o = new Ii(), l2 = new Ii(), c2 = new Ii(), h2 = new Ii();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p = t2.getX(u2 + 1), m = t2.getX(u2 + 2);
          i.fromBufferAttribute(e, d3), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c2.subVectors(s, r), h2.subVectors(i, r), c2.cross(h2), a.fromBufferAttribute(n, d3), o.fromBufferAttribute(n, p), l2.fromBufferAttribute(n, m), a.add(c2), o.add(c2), l2.add(c2), n.setXYZ(d3, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l2.x, l2.y, l2.z);
        }
        else for (let t3 = 0, a2 = e.count; t3 < a2; t3 += 3) i.fromBufferAttribute(e, t3 + 0), r.fromBufferAttribute(e, t3 + 1), s.fromBufferAttribute(e, t3 + 2), c2.subVectors(s, r), h2.subVectors(i, r), c2.cross(h2), n.setXYZ(t3 + 0, c2.x, c2.y, c2.z), n.setXYZ(t3 + 1, c2.x, c2.y, c2.z), n.setXYZ(t3 + 2, c2.x, c2.y, c2.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e = 0, n = t2.count; e < n; e++) Es.fromBufferAttribute(t2, e), Es.normalize(), t2.setXYZ(e, Es.x, Es.y, Es.z);
    }
    toNonIndexed() {
      function t2(t3, e2) {
        const n2 = t3.array, i2 = t3.itemSize, r2 = t3.normalized, s2 = new n2.constructor(e2.length * i2);
        let a = 0, o = 0;
        for (let r3 = 0, l2 = e2.length; r3 < l2; r3++) {
          a = t3.isInterleavedBufferAttribute ? e2[r3] * t3.data.stride + t3.offset : e2[r3] * i2;
          for (let t4 = 0; t4 < i2; t4++) s2[o++] = n2[a++];
        }
        return new os(s2, i2, r2);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e = new _Ts(), n = this.index.array, i = this.attributes;
      for (const r2 in i) {
        const s2 = t2(i[r2], n);
        e.setAttribute(r2, s2);
      }
      const r = this.morphAttributes;
      for (const i2 in r) {
        const s2 = [], a = r[i2];
        for (let e2 = 0, i3 = a.length; e2 < i3; e2++) {
          const i4 = t2(a[e2], n);
          s2.push(i4);
        }
        e.morphAttributes[i2] = s2;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t3 = 0, n2 = s.length; t3 < n2; t3++) {
        const n3 = s[t3];
        e.addGroup(n3.start, n3.count, n3.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e2 = this.parameters;
        for (const n2 in e2) void 0 !== e2[n2] && (t2[n2] = e2[n2]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e = this.index;
      null !== e && (t2.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
      const n = this.attributes;
      for (const e2 in n) {
        const i2 = n[e2];
        t2.data.attributes[e2] = i2.toJSON(t2.data);
      }
      const i = {};
      let r = false;
      for (const e2 in this.morphAttributes) {
        const n2 = this.morphAttributes[e2], s2 = [];
        for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
          const i3 = n2[e3];
          s2.push(i3.toJSON(t2.data));
        }
        s2.length > 0 && (i[e2] = s2, r = true);
      }
      r && (t2.data.morphAttributes = i, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const s = this.groups;
      s.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return null !== a && (t2.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e = {};
      this.name = t2.name;
      const n = t2.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t2.attributes;
      for (const t3 in i) {
        const n2 = i[t3];
        this.setAttribute(t3, n2.clone(e));
      }
      const r = t2.morphAttributes;
      for (const t3 in r) {
        const n2 = [], i2 = r[t3];
        for (let t4 = 0, r2 = i2.length; t4 < r2; t4++) n2.push(i2[t4].clone(e));
        this.morphAttributes[t3] = n2;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const s = t2.groups;
      for (let t3 = 0, e2 = s.length; t3 < e2; t3++) {
        const e3 = s[t3];
        this.addGroup(e3.start, e3.count, e3.materialIndex);
      }
      const a = t2.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = t2.boundingSphere;
      return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var ws = new lr();
  var As = new or();
  var Rs = new Qi();
  var Cs = new Ii();
  var Ps = new Ii();
  var Ls = new Ii();
  var Is = new Ii();
  var Us = new Ii();
  var Ns = new Ii();
  var Ds = new Qn();
  var Os = new Qn();
  var Fs = new Qn();
  var Bs = new Ii();
  var zs = new Ii();
  var Hs = new Ii();
  var Vs = new Ii();
  var ks = new Ii();
  var Gs = class extends Ur {
    constructor(t2 = new Ts(), e = new Qr()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e, this.updateMorphTargets();
    }
    copy(t2, e) {
      return super.copy(t2, e), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e = Object.keys(t2);
      if (e.length > 0) {
        const n = t2[e[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e2 = n.length; t3 < e2; t3++) {
            const e3 = n[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e3] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e) {
      const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t2);
      const a = this.morphTargetInfluences;
      if (r && a) {
        Ns.set(0, 0, 0);
        for (let n2 = 0, i2 = r.length; n2 < i2; n2++) {
          const i3 = a[n2], o = r[n2];
          0 !== i3 && (Us.fromBufferAttribute(o, t2), s ? Ns.addScaledVector(Us, i3) : Ns.addScaledVector(Us.sub(e), i3));
        }
        e.add(Ns);
      }
      return e;
    }
    raycast(t2, e) {
      const n = this.geometry, i = this.material, r = this.matrixWorld;
      if (void 0 !== i) {
        if (null === n.boundingSphere && n.computeBoundingSphere(), Rs.copy(n.boundingSphere), Rs.applyMatrix4(r), As.copy(t2.ray).recast(t2.near), false === Rs.containsPoint(As.origin)) {
          if (null === As.intersectSphere(Rs, Cs)) return;
          if (As.origin.distanceToSquared(Cs) > (t2.far - t2.near) ** 2) return;
        }
        ws.copy(r).invert(), As.copy(t2.ray).applyMatrix4(ws), null !== n.boundingBox && false === As.intersectsBox(n.boundingBox) || this._computeIntersections(t2, e, As);
      }
    }
    _computeIntersections(t2, e, n) {
      let i;
      const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l2 = r.attributes.uv, c2 = r.attributes.uv1, h2 = r.attributes.normal, u2 = r.groups, d2 = r.drawRange;
      if (null !== a) if (Array.isArray(s)) for (let r2 = 0, o2 = u2.length; r2 < o2; r2++) {
        const o3 = u2[r2], p = s[o3.materialIndex];
        for (let r3 = Math.max(o3.start, d2.start), s2 = Math.min(a.count, Math.min(o3.start + o3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = Ws(this, p, t2, n, l2, c2, h2, a.getX(r3), a.getX(r3 + 1), a.getX(r3 + 2)), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = o3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), o2 = Math.min(a.count, d2.start + d2.count); r2 < o2; r2 += 3) {
          i = Ws(this, s, t2, n, l2, c2, h2, a.getX(r2), a.getX(r2 + 1), a.getX(r2 + 2)), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
      else if (void 0 !== o) if (Array.isArray(s)) for (let r2 = 0, a2 = u2.length; r2 < a2; r2++) {
        const a3 = u2[r2], p = s[a3.materialIndex];
        for (let r3 = Math.max(a3.start, d2.start), s2 = Math.min(o.count, Math.min(a3.start + a3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = Ws(this, p, t2, n, l2, c2, h2, r3, r3 + 1, r3 + 2), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = a3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), a2 = Math.min(o.count, d2.start + d2.count); r2 < a2; r2 += 3) {
          i = Ws(this, s, t2, n, l2, c2, h2, r2, r2 + 1, r2 + 2), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
    }
  };
  function Ws(t2, e, n, i, r, s, a, o, l2, c2) {
    t2.getVertexPosition(o, Ps), t2.getVertexPosition(l2, Ls), t2.getVertexPosition(c2, Is);
    const h2 = (function(t3, e2, n2, i2, r2, s2, a2, o2) {
      let l3;
      if (l3 = e2.side === d ? i2.intersectTriangle(a2, s2, r2, true, o2) : i2.intersectTriangle(r2, s2, a2, e2.side === u, o2), null === l3) return null;
      ks.copy(o2), ks.applyMatrix4(t3.matrixWorld);
      const c3 = n2.ray.origin.distanceTo(ks);
      return c3 < n2.near || c3 > n2.far ? null : { distance: c3, point: ks.clone(), object: t3 };
    })(t2, e, n, i, Ps, Ls, Is, Vs);
    if (h2) {
      r && (Ds.fromBufferAttribute(r, o), Os.fromBufferAttribute(r, l2), Fs.fromBufferAttribute(r, c2), h2.uv = Wr.getInterpolation(Vs, Ps, Ls, Is, Ds, Os, Fs, new Qn())), s && (Ds.fromBufferAttribute(s, o), Os.fromBufferAttribute(s, l2), Fs.fromBufferAttribute(s, c2), h2.uv1 = Wr.getInterpolation(Vs, Ps, Ls, Is, Ds, Os, Fs, new Qn()), h2.uv2 = h2.uv1), a && (Bs.fromBufferAttribute(a, o), zs.fromBufferAttribute(a, l2), Hs.fromBufferAttribute(a, c2), h2.normal = Wr.getInterpolation(Vs, Ps, Ls, Is, Bs, zs, Hs, new Ii()), h2.normal.dot(i.direction) > 0 && h2.normal.multiplyScalar(-1));
      const t3 = { a: o, b: l2, c: c2, normal: new Ii(), materialIndex: 0 };
      Wr.getNormal(Ps, Ls, Is, t3.normal), h2.face = t3;
    }
    return h2;
  }
  var Xs = class _Xs extends Ts {
    constructor(t2 = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s };
      const a = this;
      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      const o = [], l2 = [], c2 = [], h2 = [];
      let u2 = 0, d2 = 0;
      function p(t3, e2, n2, i2, r2, s2, p2, m, f, g, _) {
        const v = s2 / f, x = p2 / g, y2 = s2 / 2, M = p2 / 2, S = m / 2, b = f + 1, E = g + 1;
        let T = 0, w = 0;
        const A = new Ii();
        for (let s3 = 0; s3 < E; s3++) {
          const a2 = s3 * x - M;
          for (let o2 = 0; o2 < b; o2++) {
            const u3 = o2 * v - y2;
            A[t3] = u3 * i2, A[e2] = a2 * r2, A[n2] = S, l2.push(A.x, A.y, A.z), A[t3] = 0, A[e2] = 0, A[n2] = m > 0 ? 1 : -1, c2.push(A.x, A.y, A.z), h2.push(o2 / f), h2.push(1 - s3 / g), T += 1;
          }
        }
        for (let t4 = 0; t4 < g; t4++) for (let e3 = 0; e3 < f; e3++) {
          const n3 = u2 + e3 + b * t4, i3 = u2 + e3 + b * (t4 + 1), r3 = u2 + (e3 + 1) + b * (t4 + 1), s3 = u2 + (e3 + 1) + b * t4;
          o.push(n3, i3, s3), o.push(i3, r3, s3), w += 6;
        }
        a.addGroup(d2, w, _), d2 += w, u2 += T;
      }
      p("z", "y", "x", -1, -1, n, e, t2, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t2, s, r, 1), p("x", "z", "y", 1, 1, t2, n, e, i, s, 2), p("x", "z", "y", 1, -1, t2, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t2, e, n, i, r, 4), p("x", "y", "z", -1, -1, t2, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new gs(l2, 3)), this.setAttribute("normal", new gs(c2, 3)), this.setAttribute("uv", new gs(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Xs(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function js(t2) {
    const e = {};
    for (const n in t2) {
      e[n] = {};
      for (const i in t2[n]) {
        const r = t2[n][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
      }
    }
    return e;
  }
  function qs(t2) {
    const e = {};
    for (let n = 0; n < t2.length; n++) {
      const i = js(t2[n]);
      for (const t3 in i) e[t3] = i[t3];
    }
    return e;
  }
  function Ys(t2) {
    return null === t2.getRenderTarget() ? t2.outputColorSpace : pi.workingColorSpace;
  }
  var Zs = { clone: js, merge: qs };
  var Js = class extends $r {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false, clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = js(t2.uniforms), this.uniformsGroups = (function(t3) {
        const e = [];
        for (let n = 0; n < t3.length; n++) e.push(t3[n].clone());
        return e;
      })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (const n2 in this.uniforms) {
        const i = this.uniforms[n2].value;
        i && i.isTexture ? e.uniforms[n2] = { type: "t", value: i.toJSON(t2).uuid } : i && i.isColor ? e.uniforms[n2] = { type: "c", value: i.getHex() } : i && i.isVector2 ? e.uniforms[n2] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? e.uniforms[n2] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? e.uniforms[n2] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? e.uniforms[n2] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? e.uniforms[n2] = { type: "m4", value: i.toArray() } : e.uniforms[n2] = { value: i };
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
      const n = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (n[t3] = true);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  };
  var Ks = class extends Ur {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new lr(), this.projectionMatrix = new lr(), this.projectionMatrixInverse = new lr(), this.coordinateSystem = Fn;
    }
    copy(t2, e) {
      return super.copy(t2, e), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e) {
      super.updateWorldMatrix(t2, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var $s = new Ii();
  var Qs = new Qn();
  var ta = new Qn();
  var ea = class extends Ks {
    constructor(t2 = 50, e = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * Gn * Math.atan(e), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * kn * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * Gn * Math.atan(Math.tan(0.5 * kn * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e, n) {
      $s.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set($s.x, $s.y).multiplyScalar(-t2 / $s.z), $s.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set($s.x, $s.y).multiplyScalar(-t2 / $s.z);
    }
    getViewSize(t2, e) {
      return this.getViewBounds(t2, Qs, ta), e.subVectors(ta, Qs);
    }
    setViewOffset(t2, e, n, i, r, s) {
      this.aspect = t2 / e, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e = t2 * Math.tan(0.5 * kn * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = s.fullWidth, a2 = s.fullHeight;
        r += s.offsetX * i / t3, e -= s.offsetY * n / a2, i *= s.width / t3, n *= s.height / a2;
      }
      const a = this.filmOffset;
      0 !== a && (r += t2 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t2, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  };
  var na = -90;
  var ia = class extends Ur {
    constructor(t2, e, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new ea(na, 1, t2, e);
      i.layers = this.layers, this.add(i);
      const r = new ea(na, 1, t2, e);
      r.layers = this.layers, this.add(r);
      const s = new ea(na, 1, t2, e);
      s.layers = this.layers, this.add(s);
      const a = new ea(na, 1, t2, e);
      a.layers = this.layers, this.add(a);
      const o = new ea(na, 1, t2, e);
      o.layers = this.layers, this.add(o);
      const l2 = new ea(na, 1, t2, e);
      l2.layers = this.layers, this.add(l2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e = this.children.concat(), [n, i, r, s, a, o] = e;
      for (const t3 of e) this.remove(t3);
      if (t2 === Fn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
      else {
        if (t2 !== Bn) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
      }
      for (const t3 of e) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r, s, a, o, l2, c2] = this.children, h2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p = t2.xr.enabled;
      t2.xr.enabled = false;
      const m = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, t2.setRenderTarget(n, 0, i), t2.render(e, r), t2.setRenderTarget(n, 1, i), t2.render(e, s), t2.setRenderTarget(n, 2, i), t2.render(e, a), t2.setRenderTarget(n, 3, i), t2.render(e, o), t2.setRenderTarget(n, 4, i), t2.render(e, l2), n.texture.generateMipmaps = m, t2.setRenderTarget(n, 5, i), t2.render(e, c2), t2.setRenderTarget(h2, u2, d2), t2.xr.enabled = p, n.texture.needsPMREMUpdate = true;
    }
  };
  var ra = class extends Si {
    constructor(t2, e, n, i, r, s, a, o, l2, c2) {
      super(t2 = void 0 !== t2 ? t2 : [], e = void 0 !== e ? e : ot, n, i, r, s, a, o, l2, c2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var sa = class extends Ti {
    constructor(t2 = 1, e = {}) {
      super(t2, t2, e), this.isWebGLCubeRenderTarget = true;
      const n = { width: t2, height: t2, depth: 1 }, i = [n, n, n, n, n, n];
      void 0 !== e.encoding && (li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e.colorSpace = e.encoding === He ? je : Xe), this.texture = new ra(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : yt;
    }
    fromEquirectangularTexture(t2, e) {
      this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      const n = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i = new Xs(5, 5, 5), r = new Js({ name: "CubemapFromEquirect", uniforms: js(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: d, blending: 0 });
      r.uniforms.tEquirect.value = e;
      const s = new Gs(i, r), a = e.minFilter;
      e.minFilter === bt && (e.minFilter = yt);
      return new ia(1, 10, this).update(t2, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
    }
    clear(t2, e, n, i) {
      const r = t2.getRenderTarget();
      for (let r2 = 0; r2 < 6; r2++) t2.setRenderTarget(this, r2), t2.clear(e, n, i);
      t2.setRenderTarget(r);
    }
  };
  var aa = new Ii();
  var oa = new Ii();
  var la = new ti();
  var ca = class {
    constructor(t2 = new Ii(1, 0, 0), e = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e;
    }
    set(t2, e) {
      return this.normal.copy(t2), this.constant = e, this;
    }
    setComponents(t2, e, n, i) {
      return this.normal.set(t2, e, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(t2, e) {
      return this.normal.copy(t2), this.constant = -e.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e, n) {
      const i = aa.subVectors(n, e).cross(oa.subVectors(t2, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e) {
      return e.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e) {
      const n = t2.delta(aa), i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(t2.start) ? e.copy(t2.start) : null;
      const r = -(t2.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t2.start).addScaledVector(n, r);
    }
    intersectsLine(t2) {
      const e = this.distanceToPoint(t2.start), n = this.distanceToPoint(t2.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e) {
      const n = e || la.getNormalMatrix(t2), i = this.coplanarPoint(aa).applyMatrix4(t2), r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ha = new Qi();
  var ua = new Ii();
  var da = class {
    constructor(t2 = new ca(), e = new ca(), n = new ca(), i = new ca(), r = new ca(), s = new ca()) {
      this.planes = [t2, e, n, i, r, s];
    }
    set(t2, e, n, i, r, s) {
      const a = this.planes;
      return a[0].copy(t2), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
    }
    copy(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t2.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t2, e = 2e3) {
      const n = this.planes, i = t2.elements, r = i[0], s = i[1], a = i[2], o = i[3], l2 = i[4], c2 = i[5], h2 = i[6], u2 = i[7], d2 = i[8], p = i[9], m = i[10], f = i[11], g = i[12], _ = i[13], v = i[14], x = i[15];
      if (n[0].setComponents(o - r, u2 - l2, f - d2, x - g).normalize(), n[1].setComponents(o + r, u2 + l2, f + d2, x + g).normalize(), n[2].setComponents(o + s, u2 + c2, f + p, x + _).normalize(), n[3].setComponents(o - s, u2 - c2, f - p, x - _).normalize(), n[4].setComponents(o - a, u2 - h2, f - m, x - v).normalize(), e === Fn) n[5].setComponents(o + a, u2 + h2, f + m, x + v).normalize();
      else {
        if (e !== Bn) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        n[5].setComponents(a, h2, m, v).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), ha.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e = t2.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(), ha.copy(e.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(ha);
    }
    intersectsSprite(t2) {
      return ha.center.set(0, 0, 0), ha.radius = 0.7071067811865476, ha.applyMatrix4(t2.matrixWorld), this.intersectsSphere(ha);
    }
    intersectsSphere(t2) {
      const e = this.planes, n = t2.center, i = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e[t3].distanceToPoint(n) < i) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (ua.x = i.normal.x > 0 ? t2.max.x : t2.min.x, ua.y = i.normal.y > 0 ? t2.max.y : t2.min.y, ua.z = i.normal.z > 0 ? t2.max.z : t2.min.z, i.distanceToPoint(ua) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  function pa() {
    let t2 = null, e = false, n = null, i = null;
    function r(e2, s) {
      n(e2, s), i = t2.requestAnimationFrame(r);
    }
    return { start: function() {
      true !== e && null !== n && (i = t2.requestAnimationFrame(r), e = true);
    }, stop: function() {
      t2.cancelAnimationFrame(i), e = false;
    }, setAnimationLoop: function(t3) {
      n = t3;
    }, setContext: function(e2) {
      t2 = e2;
    } };
  }
  function ma(t2, e) {
    const n = e.isWebGL2, i = /* @__PURE__ */ new WeakMap();
    return { get: function(t3) {
      return t3.isInterleavedBufferAttribute && (t3 = t3.data), i.get(t3);
    }, remove: function(e2) {
      e2.isInterleavedBufferAttribute && (e2 = e2.data);
      const n2 = i.get(e2);
      n2 && (t2.deleteBuffer(n2.buffer), i.delete(e2));
    }, update: function(e2, r) {
      if (e2.isGLBufferAttribute) {
        const t3 = i.get(e2);
        return void ((!t3 || t3.version < e2.version) && i.set(e2, { buffer: e2.buffer, type: e2.type, bytesPerElement: e2.elementSize, version: e2.version }));
      }
      e2.isInterleavedBufferAttribute && (e2 = e2.data);
      const s = i.get(e2);
      if (void 0 === s) i.set(e2, (function(e3, i2) {
        const r2 = e3.array, s2 = e3.usage, a = r2.byteLength, o = t2.createBuffer();
        let l2;
        if (t2.bindBuffer(i2, o), t2.bufferData(i2, r2, s2), e3.onUploadCallback(), r2 instanceof Float32Array) l2 = t2.FLOAT;
        else if (r2 instanceof Uint16Array) if (e3.isFloat16BufferAttribute) {
          if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
          l2 = t2.HALF_FLOAT;
        } else l2 = t2.UNSIGNED_SHORT;
        else if (r2 instanceof Int16Array) l2 = t2.SHORT;
        else if (r2 instanceof Uint32Array) l2 = t2.UNSIGNED_INT;
        else if (r2 instanceof Int32Array) l2 = t2.INT;
        else if (r2 instanceof Int8Array) l2 = t2.BYTE;
        else if (r2 instanceof Uint8Array) l2 = t2.UNSIGNED_BYTE;
        else {
          if (!(r2 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r2);
          l2 = t2.UNSIGNED_BYTE;
        }
        return { buffer: o, type: l2, bytesPerElement: r2.BYTES_PER_ELEMENT, version: e3.version, size: a };
      })(e2, r));
      else if (s.version < e2.version) {
        if (s.size !== e2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !(function(e3, i2, r2) {
          const s2 = i2.array, a = i2._updateRange, o = i2.updateRanges;
          if (t2.bindBuffer(r2, e3), -1 === a.count && 0 === o.length && t2.bufferSubData(r2, 0, s2), 0 !== o.length) {
            for (let e4 = 0, i3 = o.length; e4 < i3; e4++) {
              const i4 = o[e4];
              n ? t2.bufferSubData(r2, i4.start * s2.BYTES_PER_ELEMENT, s2, i4.start, i4.count) : t2.bufferSubData(r2, i4.start * s2.BYTES_PER_ELEMENT, s2.subarray(i4.start, i4.start + i4.count));
            }
            i2.clearUpdateRanges();
          }
          -1 !== a.count && (n ? t2.bufferSubData(r2, a.offset * s2.BYTES_PER_ELEMENT, s2, a.offset, a.count) : t2.bufferSubData(r2, a.offset * s2.BYTES_PER_ELEMENT, s2.subarray(a.offset, a.offset + a.count)), a.count = -1), i2.onUploadCallback();
        })(s.buffer, e2, r), s.version = e2.version;
      }
    } };
  }
  var fa = class _fa extends Ts {
    constructor(t2 = 1, e = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e, widthSegments: n, heightSegments: i };
      const r = t2 / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l2 = a + 1, c2 = o + 1, h2 = t2 / a, u2 = e / o, d2 = [], p = [], m = [], f = [];
      for (let t3 = 0; t3 < c2; t3++) {
        const e2 = t3 * u2 - s;
        for (let n2 = 0; n2 < l2; n2++) {
          const i2 = n2 * h2 - r;
          p.push(i2, -e2, 0), m.push(0, 0, 1), f.push(n2 / a), f.push(1 - t3 / o);
        }
      }
      for (let t3 = 0; t3 < o; t3++) for (let e2 = 0; e2 < a; e2++) {
        const n2 = e2 + l2 * t3, i2 = e2 + l2 * (t3 + 1), r2 = e2 + 1 + l2 * (t3 + 1), s2 = e2 + 1 + l2 * t3;
        d2.push(n2, i2, s2), d2.push(i2, r2, s2);
      }
      this.setIndex(d2), this.setAttribute("position", new gs(p, 3)), this.setAttribute("normal", new gs(m, 3)), this.setAttribute("uv", new gs(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _fa(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var ga = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	attribute float batchId;\n	uniform highp sampler2D batchingTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n	vec3( 0.8224621, 0.177538, 0.0 ),\n	vec3( 0.0331941, 0.9668058, 0.0 ),\n	vec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n	vec3( 1.2249401, - 0.2249404, 0.0 ),\n	vec3( - 0.0420569, 1.0420571, 0.0 ),\n	vec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return sRGBTransferOETF( value );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( LEGACY_LIGHTS )\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#else\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n	return packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var _a = { common: { diffuse: { value: new Zr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new ti() }, alphaMap: { value: null }, alphaMapTransform: { value: new ti() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ti() } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ti() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new ti() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new ti() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new ti() }, normalScale: { value: new Qn(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new ti() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new ti() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new ti() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new ti() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Zr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Zr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new ti() }, alphaTest: { value: 0 }, uvTransform: { value: new ti() } }, sprite: { diffuse: { value: new Zr(16777215) }, opacity: { value: 1 }, center: { value: new Qn(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new ti() }, alphaMap: { value: null }, alphaMapTransform: { value: new ti() }, alphaTest: { value: 0 } } };
  var va = { basic: { uniforms: qs([_a.common, _a.specularmap, _a.envmap, _a.aomap, _a.lightmap, _a.fog]), vertexShader: ga.meshbasic_vert, fragmentShader: ga.meshbasic_frag }, lambert: { uniforms: qs([_a.common, _a.specularmap, _a.envmap, _a.aomap, _a.lightmap, _a.emissivemap, _a.bumpmap, _a.normalmap, _a.displacementmap, _a.fog, _a.lights, { emissive: { value: new Zr(0) } }]), vertexShader: ga.meshlambert_vert, fragmentShader: ga.meshlambert_frag }, phong: { uniforms: qs([_a.common, _a.specularmap, _a.envmap, _a.aomap, _a.lightmap, _a.emissivemap, _a.bumpmap, _a.normalmap, _a.displacementmap, _a.fog, _a.lights, { emissive: { value: new Zr(0) }, specular: { value: new Zr(1118481) }, shininess: { value: 30 } }]), vertexShader: ga.meshphong_vert, fragmentShader: ga.meshphong_frag }, standard: { uniforms: qs([_a.common, _a.envmap, _a.aomap, _a.lightmap, _a.emissivemap, _a.bumpmap, _a.normalmap, _a.displacementmap, _a.roughnessmap, _a.metalnessmap, _a.fog, _a.lights, { emissive: { value: new Zr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ga.meshphysical_vert, fragmentShader: ga.meshphysical_frag }, toon: { uniforms: qs([_a.common, _a.aomap, _a.lightmap, _a.emissivemap, _a.bumpmap, _a.normalmap, _a.displacementmap, _a.gradientmap, _a.fog, _a.lights, { emissive: { value: new Zr(0) } }]), vertexShader: ga.meshtoon_vert, fragmentShader: ga.meshtoon_frag }, matcap: { uniforms: qs([_a.common, _a.bumpmap, _a.normalmap, _a.displacementmap, _a.fog, { matcap: { value: null } }]), vertexShader: ga.meshmatcap_vert, fragmentShader: ga.meshmatcap_frag }, points: { uniforms: qs([_a.points, _a.fog]), vertexShader: ga.points_vert, fragmentShader: ga.points_frag }, dashed: { uniforms: qs([_a.common, _a.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ga.linedashed_vert, fragmentShader: ga.linedashed_frag }, depth: { uniforms: qs([_a.common, _a.displacementmap]), vertexShader: ga.depth_vert, fragmentShader: ga.depth_frag }, normal: { uniforms: qs([_a.common, _a.bumpmap, _a.normalmap, _a.displacementmap, { opacity: { value: 1 } }]), vertexShader: ga.meshnormal_vert, fragmentShader: ga.meshnormal_frag }, sprite: { uniforms: qs([_a.sprite, _a.fog]), vertexShader: ga.sprite_vert, fragmentShader: ga.sprite_frag }, background: { uniforms: { uvTransform: { value: new ti() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ga.background_vert, fragmentShader: ga.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: ga.backgroundCube_vert, fragmentShader: ga.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ga.cube_vert, fragmentShader: ga.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ga.equirect_vert, fragmentShader: ga.equirect_frag }, distanceRGBA: { uniforms: qs([_a.common, _a.displacementmap, { referencePosition: { value: new Ii() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ga.distanceRGBA_vert, fragmentShader: ga.distanceRGBA_frag }, shadow: { uniforms: qs([_a.lights, _a.fog, { color: { value: new Zr(0) }, opacity: { value: 1 } }]), vertexShader: ga.shadow_vert, fragmentShader: ga.shadow_frag } };
  va.physical = { uniforms: qs([va.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new ti() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new ti() }, clearcoatNormalScale: { value: new Qn(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new ti() }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new ti() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new ti() }, sheen: { value: 0 }, sheenColor: { value: new Zr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new ti() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new ti() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new ti() }, transmissionSamplerSize: { value: new Qn() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new ti() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Zr(0) }, specularColor: { value: new Zr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new ti() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new ti() }, anisotropyVector: { value: new Qn() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new ti() } }]), vertexShader: ga.meshphysical_vert, fragmentShader: ga.meshphysical_frag };
  var xa = { r: 0, b: 0, g: 0 };
  function ya(t2, e, n, i, r, s, a) {
    const o = new Zr(0);
    let l2, c2, h2 = true === s ? 0 : 1, p = null, m = 0, f = null;
    function g(e2, n2) {
      e2.getRGB(xa, Ys(t2)), i.buffers.color.setClear(xa.r, xa.g, xa.b, n2, a);
    }
    return { getClearColor: function() {
      return o;
    }, setClearColor: function(t3, e2 = 1) {
      o.set(t3), h2 = e2, g(o, h2);
    }, getClearAlpha: function() {
      return h2;
    }, setClearAlpha: function(t3) {
      h2 = t3, g(o, h2);
    }, render: function(s2, _) {
      let v = false, x = true === _.isScene ? _.background : null;
      if (x && x.isTexture) {
        x = (_.backgroundBlurriness > 0 ? n : e).get(x);
      }
      null === x ? g(o, h2) : x && x.isColor && (g(x, 1), v = true);
      const y2 = t2.xr.getEnvironmentBlendMode();
      "additive" === y2 ? i.buffers.color.setClear(0, 0, 0, 1, a) : "alpha-blend" === y2 && i.buffers.color.setClear(0, 0, 0, 0, a), (t2.autoClear || v) && t2.clear(t2.autoClearColor, t2.autoClearDepth, t2.autoClearStencil), x && (x.isCubeTexture || x.mapping === ut) ? (void 0 === c2 && (c2 = new Gs(new Xs(1, 1, 1), new Js({ name: "BackgroundCubeMaterial", uniforms: js(va.backgroundCube.uniforms), vertexShader: va.backgroundCube.vertexShader, fragmentShader: va.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false })), c2.geometry.deleteAttribute("normal"), c2.geometry.deleteAttribute("uv"), c2.onBeforeRender = function(t3, e2, n2) {
        this.matrixWorld.copyPosition(n2.matrixWorld);
      }, Object.defineProperty(c2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r.update(c2)), c2.material.uniforms.envMap.value = x, c2.material.uniforms.flipEnvMap.value = x.isCubeTexture && false === x.isRenderTargetTexture ? -1 : 1, c2.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, c2.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c2.material.toneMapped = pi.getTransfer(x.colorSpace) !== Ke, p === x && m === x.version && f === t2.toneMapping || (c2.material.needsUpdate = true, p = x, m = x.version, f = t2.toneMapping), c2.layers.enableAll(), s2.unshift(c2, c2.geometry, c2.material, 0, 0, null)) : x && x.isTexture && (void 0 === l2 && (l2 = new Gs(new fa(2, 2), new Js({ name: "BackgroundMaterial", uniforms: js(va.background.uniforms), vertexShader: va.background.vertexShader, fragmentShader: va.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false })), l2.geometry.deleteAttribute("normal"), Object.defineProperty(l2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r.update(l2)), l2.material.uniforms.t2D.value = x, l2.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, l2.material.toneMapped = pi.getTransfer(x.colorSpace) !== Ke, true === x.matrixAutoUpdate && x.updateMatrix(), l2.material.uniforms.uvTransform.value.copy(x.matrix), p === x && m === x.version && f === t2.toneMapping || (l2.material.needsUpdate = true, p = x, m = x.version, f = t2.toneMapping), l2.layers.enableAll(), s2.unshift(l2, l2.geometry, l2.material, 0, 0, null));
    } };
  }
  function Ma(t2, e, n, i) {
    const r = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || null !== s, o = {}, l2 = p(null);
    let c2 = l2, h2 = false;
    function u2(e2) {
      return i.isWebGL2 ? t2.bindVertexArray(e2) : s.bindVertexArrayOES(e2);
    }
    function d2(e2) {
      return i.isWebGL2 ? t2.deleteVertexArray(e2) : s.deleteVertexArrayOES(e2);
    }
    function p(t3) {
      const e2 = [], n2 = [], i2 = [];
      for (let t4 = 0; t4 < r; t4++) e2[t4] = 0, n2[t4] = 0, i2[t4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: e2, enabledAttributes: n2, attributeDivisors: i2, object: t3, attributes: {}, index: null };
    }
    function m() {
      const t3 = c2.newAttributes;
      for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) t3[e2] = 0;
    }
    function f(t3) {
      g(t3, 0);
    }
    function g(n2, r2) {
      const s2 = c2.newAttributes, a2 = c2.enabledAttributes, o2 = c2.attributeDivisors;
      if (s2[n2] = 1, 0 === a2[n2] && (t2.enableVertexAttribArray(n2), a2[n2] = 1), o2[n2] !== r2) {
        (i.isWebGL2 ? t2 : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n2, r2), o2[n2] = r2;
      }
    }
    function _() {
      const e2 = c2.newAttributes, n2 = c2.enabledAttributes;
      for (let i2 = 0, r2 = n2.length; i2 < r2; i2++) n2[i2] !== e2[i2] && (t2.disableVertexAttribArray(i2), n2[i2] = 0);
    }
    function v(e2, n2, i2, r2, s2, a2, o2) {
      true === o2 ? t2.vertexAttribIPointer(e2, n2, i2, s2, a2) : t2.vertexAttribPointer(e2, n2, i2, r2, s2, a2);
    }
    function x() {
      y2(), h2 = true, c2 !== l2 && (c2 = l2, u2(c2.object));
    }
    function y2() {
      l2.geometry = null, l2.program = null, l2.wireframe = false;
    }
    return { setup: function(r2, l3, d3, x2, y3) {
      let M = false;
      if (a) {
        const e2 = (function(e3, n2, r3) {
          const a2 = true === r3.wireframe;
          let l4 = o[e3.id];
          void 0 === l4 && (l4 = {}, o[e3.id] = l4);
          let c3 = l4[n2.id];
          void 0 === c3 && (c3 = {}, l4[n2.id] = c3);
          let h3 = c3[a2];
          void 0 === h3 && (h3 = p(i.isWebGL2 ? t2.createVertexArray() : s.createVertexArrayOES()), c3[a2] = h3);
          return h3;
        })(x2, d3, l3);
        c2 !== e2 && (c2 = e2, u2(c2.object)), M = (function(t3, e3, n2, i2) {
          const r3 = c2.attributes, s2 = e3.attributes;
          let a2 = 0;
          const o2 = n2.getAttributes();
          for (const e4 in o2) {
            if (o2[e4].location >= 0) {
              const n3 = r3[e4];
              let i3 = s2[e4];
              if (void 0 === i3 && ("instanceMatrix" === e4 && t3.instanceMatrix && (i3 = t3.instanceMatrix), "instanceColor" === e4 && t3.instanceColor && (i3 = t3.instanceColor)), void 0 === n3) return true;
              if (n3.attribute !== i3) return true;
              if (i3 && n3.data !== i3.data) return true;
              a2++;
            }
          }
          return c2.attributesNum !== a2 || c2.index !== i2;
        })(r2, x2, d3, y3), M && (function(t3, e3, n2, i2) {
          const r3 = {}, s2 = e3.attributes;
          let a2 = 0;
          const o2 = n2.getAttributes();
          for (const e4 in o2) {
            if (o2[e4].location >= 0) {
              let n3 = s2[e4];
              void 0 === n3 && ("instanceMatrix" === e4 && t3.instanceMatrix && (n3 = t3.instanceMatrix), "instanceColor" === e4 && t3.instanceColor && (n3 = t3.instanceColor));
              const i3 = {};
              i3.attribute = n3, n3 && n3.data && (i3.data = n3.data), r3[e4] = i3, a2++;
            }
          }
          c2.attributes = r3, c2.attributesNum = a2, c2.index = i2;
        })(r2, x2, d3, y3);
      } else {
        const t3 = true === l3.wireframe;
        c2.geometry === x2.id && c2.program === d3.id && c2.wireframe === t3 || (c2.geometry = x2.id, c2.program = d3.id, c2.wireframe = t3, M = true);
      }
      null !== y3 && n.update(y3, t2.ELEMENT_ARRAY_BUFFER), (M || h2) && (h2 = false, (function(r3, s2, a2, o2) {
        if (false === i.isWebGL2 && (r3.isInstancedMesh || o2.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
        m();
        const l4 = o2.attributes, c3 = a2.getAttributes(), h3 = s2.defaultAttributeValues;
        for (const e2 in c3) {
          const s3 = c3[e2];
          if (s3.location >= 0) {
            let a3 = l4[e2];
            if (void 0 === a3 && ("instanceMatrix" === e2 && r3.instanceMatrix && (a3 = r3.instanceMatrix), "instanceColor" === e2 && r3.instanceColor && (a3 = r3.instanceColor)), void 0 !== a3) {
              const e3 = a3.normalized, l5 = a3.itemSize, c4 = n.get(a3);
              if (void 0 === c4) continue;
              const h4 = c4.buffer, u3 = c4.type, d4 = c4.bytesPerElement, p2 = true === i.isWebGL2 && (u3 === t2.INT || u3 === t2.UNSIGNED_INT || a3.gpuType === Ct);
              if (a3.isInterleavedBufferAttribute) {
                const n2 = a3.data, i2 = n2.stride, c5 = a3.offset;
                if (n2.isInstancedInterleavedBuffer) {
                  for (let t3 = 0; t3 < s3.locationSize; t3++) g(s3.location + t3, n2.meshPerAttribute);
                  true !== r3.isInstancedMesh && void 0 === o2._maxInstanceCount && (o2._maxInstanceCount = n2.meshPerAttribute * n2.count);
                } else for (let t3 = 0; t3 < s3.locationSize; t3++) f(s3.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, h4);
                for (let t3 = 0; t3 < s3.locationSize; t3++) v(s3.location + t3, l5 / s3.locationSize, u3, e3, i2 * d4, (c5 + l5 / s3.locationSize * t3) * d4, p2);
              } else {
                if (a3.isInstancedBufferAttribute) {
                  for (let t3 = 0; t3 < s3.locationSize; t3++) g(s3.location + t3, a3.meshPerAttribute);
                  true !== r3.isInstancedMesh && void 0 === o2._maxInstanceCount && (o2._maxInstanceCount = a3.meshPerAttribute * a3.count);
                } else for (let t3 = 0; t3 < s3.locationSize; t3++) f(s3.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, h4);
                for (let t3 = 0; t3 < s3.locationSize; t3++) v(s3.location + t3, l5 / s3.locationSize, u3, e3, l5 * d4, l5 / s3.locationSize * t3 * d4, p2);
              }
            } else if (void 0 !== h3) {
              const n2 = h3[e2];
              if (void 0 !== n2) switch (n2.length) {
                case 2:
                  t2.vertexAttrib2fv(s3.location, n2);
                  break;
                case 3:
                  t2.vertexAttrib3fv(s3.location, n2);
                  break;
                case 4:
                  t2.vertexAttrib4fv(s3.location, n2);
                  break;
                default:
                  t2.vertexAttrib1fv(s3.location, n2);
              }
            }
          }
        }
        _();
      })(r2, l3, d3, x2), null !== y3 && t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, n.get(y3).buffer));
    }, reset: x, resetDefaultState: y2, dispose: function() {
      x();
      for (const t3 in o) {
        const e2 = o[t3];
        for (const t4 in e2) {
          const n2 = e2[t4];
          for (const t5 in n2) d2(n2[t5].object), delete n2[t5];
          delete e2[t4];
        }
        delete o[t3];
      }
    }, releaseStatesOfGeometry: function(t3) {
      if (void 0 === o[t3.id]) return;
      const e2 = o[t3.id];
      for (const t4 in e2) {
        const n2 = e2[t4];
        for (const t5 in n2) d2(n2[t5].object), delete n2[t5];
        delete e2[t4];
      }
      delete o[t3.id];
    }, releaseStatesOfProgram: function(t3) {
      for (const e2 in o) {
        const n2 = o[e2];
        if (void 0 === n2[t3.id]) continue;
        const i2 = n2[t3.id];
        for (const t4 in i2) d2(i2[t4].object), delete i2[t4];
        delete n2[t3.id];
      }
    }, initAttributes: m, enableAttribute: f, disableUnusedAttributes: _ };
  }
  function Sa(t2, e, n, i) {
    const r = i.isWebGL2;
    let s;
    this.setMode = function(t3) {
      s = t3;
    }, this.render = function(e2, i2) {
      t2.drawArrays(s, e2, i2), n.update(i2, s, 1);
    }, this.renderInstances = function(i2, a, o) {
      if (0 === o) return;
      let l2, c2;
      if (r) l2 = t2, c2 = "drawArraysInstanced";
      else if (l2 = e.get("ANGLE_instanced_arrays"), c2 = "drawArraysInstancedANGLE", null === l2) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      l2[c2](s, i2, a, o), n.update(a, s, o);
    }, this.renderMultiDraw = function(t3, i2, r2) {
      if (0 === r2) return;
      const a = e.get("WEBGL_multi_draw");
      if (null === a) for (let e2 = 0; e2 < r2; e2++) this.render(t3[e2], i2[e2]);
      else {
        a.multiDrawArraysWEBGL(s, t3, 0, i2, 0, r2);
        let e2 = 0;
        for (let t4 = 0; t4 < r2; t4++) e2 += i2[t4];
        n.update(e2, s, 1);
      }
    };
  }
  function ba(t2, e, n) {
    let i;
    function r(e2) {
      if ("highp" === e2) {
        if (t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.HIGH_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.HIGH_FLOAT).precision > 0) return "highp";
        e2 = "mediump";
      }
      return "mediump" === e2 && t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.MEDIUM_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    const s = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === t2.constructor.name;
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    const l2 = s || e.has("WEBGL_draw_buffers"), c2 = true === n.logarithmicDepthBuffer, h2 = t2.getParameter(t2.MAX_TEXTURE_IMAGE_UNITS), u2 = t2.getParameter(t2.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d2 = t2.getParameter(t2.MAX_TEXTURE_SIZE), p = t2.getParameter(t2.MAX_CUBE_MAP_TEXTURE_SIZE), m = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), f = t2.getParameter(t2.MAX_VERTEX_UNIFORM_VECTORS), g = t2.getParameter(t2.MAX_VARYING_VECTORS), _ = t2.getParameter(t2.MAX_FRAGMENT_UNIFORM_VECTORS), v = u2 > 0, x = s || e.has("OES_texture_float");
    return { isWebGL2: s, drawBuffers: l2, getMaxAnisotropy: function() {
      if (void 0 !== i) return i;
      if (true === e.has("EXT_texture_filter_anisotropic")) {
        const n2 = e.get("EXT_texture_filter_anisotropic");
        i = t2.getParameter(n2.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i = 0;
      return i;
    }, getMaxPrecision: r, precision: a, logarithmicDepthBuffer: c2, maxTextures: h2, maxVertexTextures: u2, maxTextureSize: d2, maxCubemapSize: p, maxAttributes: m, maxVertexUniforms: f, maxVaryings: g, maxFragmentUniforms: _, vertexTextures: v, floatFragmentTextures: x, floatVertexTextures: v && x, maxSamples: s ? t2.getParameter(t2.MAX_SAMPLES) : 0 };
  }
  function Ea(t2) {
    const e = this;
    let n = null, i = 0, r = false, s = false;
    const a = new ca(), o = new ti(), l2 = { value: null, needsUpdate: false };
    function c2(t3, n2, i2, r2) {
      const s2 = null !== t3 ? t3.length : 0;
      let c3 = null;
      if (0 !== s2) {
        if (c3 = l2.value, true !== r2 || null === c3) {
          const e2 = i2 + 4 * s2, r3 = n2.matrixWorldInverse;
          o.getNormalMatrix(r3), (null === c3 || c3.length < e2) && (c3 = new Float32Array(e2));
          for (let e3 = 0, n3 = i2; e3 !== s2; ++e3, n3 += 4) a.copy(t3[e3]).applyMatrix4(r3, o), a.normal.toArray(c3, n3), c3[n3 + 3] = a.constant;
        }
        l2.value = c3, l2.needsUpdate = true;
      }
      return e.numPlanes = s2, e.numIntersection = 0, c3;
    }
    this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t3, e2) {
      const n2 = 0 !== t3.length || e2 || 0 !== i || r;
      return r = e2, i = t3.length, n2;
    }, this.beginShadows = function() {
      s = true, c2(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(t3, e2) {
      n = c2(t3, e2, 0);
    }, this.setState = function(a2, o2, h2) {
      const u2 = a2.clippingPlanes, d2 = a2.clipIntersection, p = a2.clipShadows, m = t2.get(a2);
      if (!r || null === u2 || 0 === u2.length || s && !p) s ? c2(null) : (function() {
        l2.value !== n && (l2.value = n, l2.needsUpdate = i > 0);
        e.numPlanes = i, e.numIntersection = 0;
      })();
      else {
        const t3 = s ? 0 : i, e2 = 4 * t3;
        let r2 = m.clippingState || null;
        l2.value = r2, r2 = c2(u2, o2, e2, h2);
        for (let t4 = 0; t4 !== e2; ++t4) r2[t4] = n[t4];
        m.clippingState = r2, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += t3;
      }
    };
  }
  function Ta(t2) {
    let e = /* @__PURE__ */ new WeakMap();
    function n(t3, e2) {
      return e2 === ct ? t3.mapping = ot : e2 === ht && (t3.mapping = lt), t3;
    }
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping;
        if (s === ct || s === ht) {
          if (e.has(r)) {
            return n(e.get(r).texture, r.mapping);
          }
          {
            const s2 = r.image;
            if (s2 && s2.height > 0) {
              const a = new sa(s2.height);
              return a.fromEquirectangularTexture(t2, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping);
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap();
    } };
  }
  var wa = class extends Ks {
    constructor(t2 = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e, n, i, r, s) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n - t2, s = n + t2, a = i + e, o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e2 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += t3 * this.view.offsetX, s = r + t3 * this.view.width, a -= e2 * this.view.offsetY, o = a - e2 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
    }
  };
  var Aa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Ra = 20;
  var Ca = new wa();
  var Pa = new Zr();
  var La = null;
  var Ia = 0;
  var Ua = 0;
  var Na = (1 + Math.sqrt(5)) / 2;
  var Da = 1 / Na;
  var Oa = [new Ii(1, 1, 1), new Ii(-1, 1, 1), new Ii(1, 1, -1), new Ii(-1, 1, -1), new Ii(0, Na, Da), new Ii(0, Na, -Da), new Ii(Da, 0, Na), new Ii(-Da, 0, Na), new Ii(Na, Da, 0), new Ii(-Na, Da, 0)];
  var Fa = class {
    constructor(t2) {
      this._renderer = t2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(t2, e = 0, n = 0.1, i = 100) {
      La = this._renderer.getRenderTarget(), Ia = this._renderer.getActiveCubeFace(), Ua = this._renderer.getActiveMipmapLevel(), this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(t2, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    fromCubemap(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = Va(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = Ha(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t2) {
      this._lodMax = Math.floor(Math.log2(t2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let t2 = 0; t2 < this._lodPlanes.length; t2++) this._lodPlanes[t2].dispose();
    }
    _cleanup(t2) {
      this._renderer.setRenderTarget(La, Ia, Ua), t2.scissorTest = false, za(t2, 0, 0, t2.width, t2.height);
    }
    _fromTexture(t2, e) {
      t2.mapping === ot || t2.mapping === lt ? this._setSize(0 === t2.image.length ? 16 : t2.image[0].width || t2.image[0].image.width) : this._setSize(t2.image.width / 4), La = this._renderer.getRenderTarget(), Ia = this._renderer.getActiveCubeFace(), Ua = this._renderer.getActiveMipmapLevel();
      const n = e || this._allocateTargets();
      return this._textureToCubeUV(t2, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const t2 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: yt, minFilter: yt, generateMipmaps: false, type: It, format: Ft, colorSpace: qe, depthBuffer: false }, i = Ba(t2, e, n);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t2 || this._pingPongRenderTarget.height !== e) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Ba(t2, e, n);
        const { _lodMax: i2 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = (function(t3) {
          const e2 = [], n2 = [], i3 = [];
          let r = t3;
          const s = t3 - 4 + 1 + Aa.length;
          for (let a = 0; a < s; a++) {
            const s2 = Math.pow(2, r);
            n2.push(s2);
            let o = 1 / s2;
            a > t3 - 4 ? o = Aa[a - t3 + 4 - 1] : 0 === a && (o = 0), i3.push(o);
            const l2 = 1 / (s2 - 2), c2 = -l2, h2 = 1 + l2, u2 = [c2, c2, h2, c2, h2, h2, c2, c2, h2, h2, c2, h2], d2 = 6, p = 6, m = 3, f = 2, g = 1, _ = new Float32Array(m * p * d2), v = new Float32Array(f * p * d2), x = new Float32Array(g * p * d2);
            for (let t4 = 0; t4 < d2; t4++) {
              const e3 = t4 % 3 * 2 / 3 - 1, n3 = t4 > 2 ? 0 : -1, i4 = [e3, n3, 0, e3 + 2 / 3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3 + 1, 0];
              _.set(i4, m * p * t4), v.set(u2, f * p * t4);
              const r2 = [t4, t4, t4, t4, t4, t4];
              x.set(r2, g * p * t4);
            }
            const y2 = new Ts();
            y2.setAttribute("position", new os(_, m)), y2.setAttribute("uv", new os(v, f)), y2.setAttribute("faceIndex", new os(x, g)), e2.push(y2), r > 4 && r--;
          }
          return { lodPlanes: e2, sizeLods: n2, sigmas: i3 };
        })(i2)), this._blurMaterial = (function(t3, e2, n2) {
          const i3 = new Float32Array(Ra), r = new Ii(0, 1, 0), s = new Js({ name: "SphericalGaussianBlur", defines: { n: Ra, CUBEUV_TEXEL_WIDTH: 1 / e2, CUBEUV_TEXEL_HEIGHT: 1 / n2, CUBEUV_MAX_MIP: `${t3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i3 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
          return s;
        })(i2, t2, e);
      }
      return i;
    }
    _compileMaterial(t2) {
      const e = new Gs(this._lodPlanes[0], t2);
      this._renderer.compile(e, Ca);
    }
    _sceneToCubeUV(t2, e, n, i) {
      const r = new ea(90, 1, e, n), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer, l2 = o.autoClear, c2 = o.toneMapping;
      o.getClearColor(Pa), o.toneMapping = K, o.autoClear = false;
      const h2 = new Qr({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false }), u2 = new Gs(new Xs(), h2);
      let p = false;
      const m = t2.background;
      m ? m.isColor && (h2.color.copy(m), t2.background = null, p = true) : (h2.color.copy(Pa), p = true);
      for (let e2 = 0; e2 < 6; e2++) {
        const n2 = e2 % 3;
        0 === n2 ? (r.up.set(0, s[e2], 0), r.lookAt(a[e2], 0, 0)) : 1 === n2 ? (r.up.set(0, 0, s[e2]), r.lookAt(0, a[e2], 0)) : (r.up.set(0, s[e2], 0), r.lookAt(0, 0, a[e2]));
        const l3 = this._cubeSize;
        za(i, n2 * l3, e2 > 2 ? l3 : 0, l3, l3), o.setRenderTarget(i), p && o.render(u2, r), o.render(t2, r);
      }
      u2.geometry.dispose(), u2.material.dispose(), o.toneMapping = c2, o.autoClear = l2, t2.background = m;
    }
    _textureToCubeUV(t2, e) {
      const n = this._renderer, i = t2.mapping === ot || t2.mapping === lt;
      i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Va()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === t2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ha());
      const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new Gs(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t2;
      const a = this._cubeSize;
      za(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Ca);
    }
    _applyPMREM(t2) {
      const e = this._renderer, n = e.autoClear;
      e.autoClear = false;
      for (let e2 = 1; e2 < this._lodPlanes.length; e2++) {
        const n2 = Math.sqrt(this._sigmas[e2] * this._sigmas[e2] - this._sigmas[e2 - 1] * this._sigmas[e2 - 1]), i = Oa[(e2 - 1) % Oa.length];
        this._blur(t2, e2 - 1, e2, n2, i);
      }
      e.autoClear = n;
    }
    _blur(t2, e, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(t2, s, e, n, i, "latitudinal", r), this._halfBlur(s, t2, n, n, i, "longitudinal", r);
    }
    _halfBlur(t2, e, n, i, r, s, a) {
      const o = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
      const c2 = new Gs(this._lodPlanes[i], l2), h2 = l2.uniforms, u2 = this._sizeLods[n] - 1, d2 = isFinite(r) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p = r / d2, m = isFinite(r) ? 1 + Math.floor(3 * p) : Ra;
      m > Ra && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
      const f = [];
      let g = 0;
      for (let t3 = 0; t3 < Ra; ++t3) {
        const e2 = t3 / p, n2 = Math.exp(-e2 * e2 / 2);
        f.push(n2), 0 === t3 ? g += n2 : t3 < m && (g += 2 * n2);
      }
      for (let t3 = 0; t3 < f.length; t3++) f[t3] = f[t3] / g;
      h2.envMap.value = t2.texture, h2.samples.value = m, h2.weights.value = f, h2.latitudinal.value = "latitudinal" === s, a && (h2.poleAxis.value = a);
      const { _lodMax: _ } = this;
      h2.dTheta.value = d2, h2.mipInt.value = _ - n;
      const v = this._sizeLods[i];
      za(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c2, Ca);
    }
  };
  function Ba(t2, e, n) {
    const i = new Ti(t2, e, n);
    return i.texture.mapping = ut, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
  }
  function za(t2, e, n, i, r) {
    t2.viewport.set(e, n, i, r), t2.scissor.set(e, n, i, r);
  }
  function Ha() {
    return new Js({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function Va() {
    return new Js({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function ka() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function Ga(t2) {
    let e = /* @__PURE__ */ new WeakMap(), n = null;
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping, a = s === ct || s === ht, o = s === ot || s === lt;
        if (a || o) {
          if (r.isRenderTargetTexture && true === r.needsPMREMUpdate) {
            r.needsPMREMUpdate = false;
            let i2 = e.get(r);
            return null === n && (n = new Fa(t2)), i2 = a ? n.fromEquirectangular(r, i2) : n.fromCubemap(r, i2), e.set(r, i2), i2.texture;
          }
          if (e.has(r)) return e.get(r).texture;
          {
            const s2 = r.image;
            if (a && s2 && s2.height > 0 || o && s2 && (function(t3) {
              let e2 = 0;
              const n2 = 6;
              for (let i2 = 0; i2 < n2; i2++) void 0 !== t3[i2] && e2++;
              return e2 === n2;
            })(s2)) {
              null === n && (n = new Fa(t2));
              const s3 = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
              return e.set(r, s3), r.addEventListener("dispose", i), s3.texture;
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap(), null !== n && (n.dispose(), n = null);
    } };
  }
  function Wa(t2) {
    const e = {};
    function n(n2) {
      if (void 0 !== e[n2]) return e[n2];
      let i;
      switch (n2) {
        case "WEBGL_depth_texture":
          i = t2.getExtension("WEBGL_depth_texture") || t2.getExtension("MOZ_WEBGL_depth_texture") || t2.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = t2.getExtension("WEBGL_compressed_texture_s3tc") || t2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = t2.getExtension("WEBGL_compressed_texture_pvrtc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t2.getExtension(n2);
      }
      return e[n2] = i, i;
    }
    return { has: function(t3) {
      return null !== n(t3);
    }, init: function(t3) {
      t3.isWebGL2 ? (n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance")) : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
    }, get: function(t3) {
      const e2 = n(t3);
      return null === e2 && console.warn("THREE.WebGLRenderer: " + t3 + " extension not supported."), e2;
    } };
  }
  function Xa(t2, e, n, i) {
    const r = {}, s = /* @__PURE__ */ new WeakMap();
    function a(t3) {
      const o2 = t3.target;
      null !== o2.index && e.remove(o2.index);
      for (const t4 in o2.attributes) e.remove(o2.attributes[t4]);
      for (const t4 in o2.morphAttributes) {
        const n2 = o2.morphAttributes[t4];
        for (let t5 = 0, i2 = n2.length; t5 < i2; t5++) e.remove(n2[t5]);
      }
      o2.removeEventListener("dispose", a), delete r[o2.id];
      const l2 = s.get(o2);
      l2 && (e.remove(l2), s.delete(o2)), i.releaseStatesOfGeometry(o2), true === o2.isInstancedBufferGeometry && delete o2._maxInstanceCount, n.memory.geometries--;
    }
    function o(t3) {
      const n2 = [], i2 = t3.index, r2 = t3.attributes.position;
      let a2 = 0;
      if (null !== i2) {
        const t4 = i2.array;
        a2 = i2.version;
        for (let e2 = 0, i3 = t4.length; e2 < i3; e2 += 3) {
          const i4 = t4[e2 + 0], r3 = t4[e2 + 1], s2 = t4[e2 + 2];
          n2.push(i4, r3, r3, s2, s2, i4);
        }
      } else {
        if (void 0 === r2) return;
        {
          const t4 = r2.array;
          a2 = r2.version;
          for (let e2 = 0, i3 = t4.length / 3 - 1; e2 < i3; e2 += 3) {
            const t5 = e2 + 0, i4 = e2 + 1, r3 = e2 + 2;
            n2.push(t5, i4, i4, r3, r3, t5);
          }
        }
      }
      const o2 = new (ni(n2) ? ms : ds)(n2, 1);
      o2.version = a2;
      const l2 = s.get(t3);
      l2 && e.remove(l2), s.set(t3, o2);
    }
    return { get: function(t3, e2) {
      return true === r[e2.id] || (e2.addEventListener("dispose", a), r[e2.id] = true, n.memory.geometries++), e2;
    }, update: function(n2) {
      const i2 = n2.attributes;
      for (const n3 in i2) e.update(i2[n3], t2.ARRAY_BUFFER);
      const r2 = n2.morphAttributes;
      for (const n3 in r2) {
        const i3 = r2[n3];
        for (let n4 = 0, r3 = i3.length; n4 < r3; n4++) e.update(i3[n4], t2.ARRAY_BUFFER);
      }
    }, getWireframeAttribute: function(t3) {
      const e2 = s.get(t3);
      if (e2) {
        const n2 = t3.index;
        null !== n2 && e2.version < n2.version && o(t3);
      } else o(t3);
      return s.get(t3);
    } };
  }
  function ja(t2, e, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    this.setMode = function(t3) {
      s = t3;
    }, this.setIndex = function(t3) {
      a = t3.type, o = t3.bytesPerElement;
    }, this.render = function(e2, i2) {
      t2.drawElements(s, i2, a, e2 * o), n.update(i2, s, 1);
    }, this.renderInstances = function(i2, l2, c2) {
      if (0 === c2) return;
      let h2, u2;
      if (r) h2 = t2, u2 = "drawElementsInstanced";
      else if (h2 = e.get("ANGLE_instanced_arrays"), u2 = "drawElementsInstancedANGLE", null === h2) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      h2[u2](s, l2, a, i2 * o, c2), n.update(l2, s, c2);
    }, this.renderMultiDraw = function(t3, i2, r2) {
      if (0 === r2) return;
      const l2 = e.get("WEBGL_multi_draw");
      if (null === l2) for (let e2 = 0; e2 < r2; e2++) this.render(t3[e2] / o, i2[e2]);
      else {
        l2.multiDrawElementsWEBGL(s, i2, 0, a, t3, 0, r2);
        let e2 = 0;
        for (let t4 = 0; t4 < r2; t4++) e2 += i2[t4];
        n.update(e2, s, 1);
      }
    };
  }
  function qa(t2) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: true, reset: function() {
      e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
    }, update: function(n, i, r) {
      switch (e.calls++, i) {
        case t2.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t2.LINES:
          e.lines += r * (n / 2);
          break;
        case t2.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t2.LINE_LOOP:
          e.lines += r * n;
          break;
        case t2.POINTS:
          e.points += r * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    } };
  }
  function Ya(t2, e) {
    return t2[0] - e[0];
  }
  function Za(t2, e) {
    return Math.abs(e[1]) - Math.abs(t2[1]);
  }
  function Ja(t2, e, n) {
    const i = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new bi(), o = [];
    for (let t3 = 0; t3 < 8; t3++) o[t3] = [t3, 0];
    return { update: function(l2, c2, h2) {
      const u2 = l2.morphTargetInfluences;
      if (true === e.isWebGL2) {
        const d2 = c2.morphAttributes.position || c2.morphAttributes.normal || c2.morphAttributes.color, p = void 0 !== d2 ? d2.length : 0;
        let m = s.get(c2);
        if (void 0 === m || m.count !== p) {
          let C2 = function() {
            A.dispose(), s.delete(c2), c2.removeEventListener("dispose", C2);
          };
          void 0 !== m && m.texture.dispose();
          const _ = void 0 !== c2.morphAttributes.position, v = void 0 !== c2.morphAttributes.normal, x = void 0 !== c2.morphAttributes.color, y2 = c2.morphAttributes.position || [], M = c2.morphAttributes.normal || [], S = c2.morphAttributes.color || [];
          let b = 0;
          true === _ && (b = 1), true === v && (b = 2), true === x && (b = 3);
          let E = c2.attributes.position.count * b, T = 1;
          E > e.maxTextureSize && (T = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
          const w = new Float32Array(E * T * 4 * p), A = new wi(w, E, T, p);
          A.type = Lt, A.needsUpdate = true;
          const R = 4 * b;
          for (let P2 = 0; P2 < p; P2++) {
            const L = y2[P2], I = M[P2], U = S[P2], N = E * T * 4 * P2;
            for (let D = 0; D < L.count; D++) {
              const O = D * R;
              true === _ && (a.fromBufferAttribute(L, D), w[N + O + 0] = a.x, w[N + O + 1] = a.y, w[N + O + 2] = a.z, w[N + O + 3] = 0), true === v && (a.fromBufferAttribute(I, D), w[N + O + 4] = a.x, w[N + O + 5] = a.y, w[N + O + 6] = a.z, w[N + O + 7] = 0), true === x && (a.fromBufferAttribute(U, D), w[N + O + 8] = a.x, w[N + O + 9] = a.y, w[N + O + 10] = a.z, w[N + O + 11] = 4 === U.itemSize ? a.w : 1);
            }
          }
          m = { count: p, texture: A, size: new Qn(E, T) }, s.set(c2, m), c2.addEventListener("dispose", C2);
        }
        let f = 0;
        for (let F = 0; F < u2.length; F++) f += u2[F];
        const g = c2.morphTargetsRelative ? 1 : 1 - f;
        h2.getUniforms().setValue(t2, "morphTargetBaseInfluence", g), h2.getUniforms().setValue(t2, "morphTargetInfluences", u2), h2.getUniforms().setValue(t2, "morphTargetsTexture", m.texture, n), h2.getUniforms().setValue(t2, "morphTargetsTextureSize", m.size);
      } else {
        const B = void 0 === u2 ? 0 : u2.length;
        let z = i[c2.id];
        if (void 0 === z || z.length !== B) {
          z = [];
          for (let W = 0; W < B; W++) z[W] = [W, 0];
          i[c2.id] = z;
        }
        for (let X = 0; X < B; X++) {
          const j = z[X];
          j[0] = X, j[1] = u2[X];
        }
        z.sort(Za);
        for (let q = 0; q < 8; q++) q < B && z[q][1] ? (o[q][0] = z[q][0], o[q][1] = z[q][1]) : (o[q][0] = Number.MAX_SAFE_INTEGER, o[q][1] = 0);
        o.sort(Ya);
        const H = c2.morphAttributes.position, V = c2.morphAttributes.normal;
        let k = 0;
        for (let Y2 = 0; Y2 < 8; Y2++) {
          const Z2 = o[Y2], J2 = Z2[0], K2 = Z2[1];
          J2 !== Number.MAX_SAFE_INTEGER && K2 ? (H && c2.getAttribute("morphTarget" + Y2) !== H[J2] && c2.setAttribute("morphTarget" + Y2, H[J2]), V && c2.getAttribute("morphNormal" + Y2) !== V[J2] && c2.setAttribute("morphNormal" + Y2, V[J2]), r[Y2] = K2, k += K2) : (H && true === c2.hasAttribute("morphTarget" + Y2) && c2.deleteAttribute("morphTarget" + Y2), V && true === c2.hasAttribute("morphNormal" + Y2) && c2.deleteAttribute("morphNormal" + Y2), r[Y2] = 0);
        }
        const G = c2.morphTargetsRelative ? 1 : 1 - k;
        h2.getUniforms().setValue(t2, "morphTargetBaseInfluence", G), h2.getUniforms().setValue(t2, "morphTargetInfluences", r);
      }
    } };
  }
  function Ka(t2, e, n, i) {
    let r = /* @__PURE__ */ new WeakMap();
    function s(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", s), n.remove(e2.instanceMatrix), null !== e2.instanceColor && n.remove(e2.instanceColor);
    }
    return { update: function(a) {
      const o = i.render.frame, l2 = a.geometry, c2 = e.get(a, l2);
      if (r.get(c2) !== o && (e.update(c2), r.set(c2, o)), a.isInstancedMesh && (false === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s), r.get(a) !== o && (n.update(a.instanceMatrix, t2.ARRAY_BUFFER), null !== a.instanceColor && n.update(a.instanceColor, t2.ARRAY_BUFFER), r.set(a, o))), a.isSkinnedMesh) {
        const t3 = a.skeleton;
        r.get(t3) !== o && (t3.update(), r.set(t3, o));
      }
      return c2;
    }, dispose: function() {
      r = /* @__PURE__ */ new WeakMap();
    } };
  }
  var $a = class extends Si {
    constructor(t2, e, n, i, r, s, a, o, l2, c2) {
      if ((c2 = void 0 !== c2 ? c2 : Ht) !== Ht && c2 !== Vt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c2 === Ht && (n = Pt), void 0 === n && c2 === Vt && (n = Dt), super(null, i, r, s, a, o, c2, n, l2), this.isDepthTexture = true, this.image = { width: t2, height: e }, this.magFilter = void 0 !== a ? a : ft, this.minFilter = void 0 !== o ? o : ft, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.compareFunction && (e.compareFunction = this.compareFunction), e;
    }
  };
  var Qa = new Si();
  var to = new $a(1, 1);
  to.compareFunction = 515;
  var eo = new wi();
  var no = new Ri();
  var io = new ra();
  var ro = [];
  var so = [];
  var ao = new Float32Array(16);
  var oo = new Float32Array(9);
  var lo = new Float32Array(4);
  function co(t2, e, n) {
    const i = t2[0];
    if (i <= 0 || i > 0) return t2;
    const r = e * n;
    let s = ro[r];
    if (void 0 === s && (s = new Float32Array(r), ro[r] = s), 0 !== e) {
      i.toArray(s, 0);
      for (let i2 = 1, r2 = 0; i2 !== e; ++i2) r2 += n, t2[i2].toArray(s, r2);
    }
    return s;
  }
  function ho(t2, e) {
    if (t2.length !== e.length) return false;
    for (let n = 0, i = t2.length; n < i; n++) if (t2[n] !== e[n]) return false;
    return true;
  }
  function uo(t2, e) {
    for (let n = 0, i = e.length; n < i; n++) t2[n] = e[n];
  }
  function po(t2, e) {
    let n = so[e];
    void 0 === n && (n = new Int32Array(e), so[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t2.allocateTextureUnit();
    return n;
  }
  function mo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1f(this.addr, e), n[0] = e);
  }
  function fo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ho(n, e)) return;
      t2.uniform2fv(this.addr, e), uo(n, e);
    }
  }
  function go(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t2.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else {
      if (ho(n, e)) return;
      t2.uniform3fv(this.addr, e), uo(n, e);
    }
  }
  function _o(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ho(n, e)) return;
      t2.uniform4fv(this.addr, e), uo(n, e);
    }
  }
  function vo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ho(n, e)) return;
      t2.uniformMatrix2fv(this.addr, false, e), uo(n, e);
    } else {
      if (ho(n, i)) return;
      lo.set(i), t2.uniformMatrix2fv(this.addr, false, lo), uo(n, i);
    }
  }
  function xo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ho(n, e)) return;
      t2.uniformMatrix3fv(this.addr, false, e), uo(n, e);
    } else {
      if (ho(n, i)) return;
      oo.set(i), t2.uniformMatrix3fv(this.addr, false, oo), uo(n, i);
    }
  }
  function yo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ho(n, e)) return;
      t2.uniformMatrix4fv(this.addr, false, e), uo(n, e);
    } else {
      if (ho(n, i)) return;
      ao.set(i), t2.uniformMatrix4fv(this.addr, false, ao), uo(n, i);
    }
  }
  function Mo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1i(this.addr, e), n[0] = e);
  }
  function So(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ho(n, e)) return;
      t2.uniform2iv(this.addr, e), uo(n, e);
    }
  }
  function bo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (ho(n, e)) return;
      t2.uniform3iv(this.addr, e), uo(n, e);
    }
  }
  function Eo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ho(n, e)) return;
      t2.uniform4iv(this.addr, e), uo(n, e);
    }
  }
  function To(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1ui(this.addr, e), n[0] = e);
  }
  function wo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ho(n, e)) return;
      t2.uniform2uiv(this.addr, e), uo(n, e);
    }
  }
  function Ao(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (ho(n, e)) return;
      t2.uniform3uiv(this.addr, e), uo(n, e);
    }
  }
  function Ro(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ho(n, e)) return;
      t2.uniform4uiv(this.addr, e), uo(n, e);
    }
  }
  function Co(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r);
    const s = this.type === t2.SAMPLER_2D_SHADOW ? to : Qa;
    n.setTexture2D(e || s, r);
  }
  function Po(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || no, r);
  }
  function Lo(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || io, r);
  }
  function Io(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || eo, r);
  }
  function Uo(t2, e) {
    t2.uniform1fv(this.addr, e);
  }
  function No(t2, e) {
    const n = co(e, this.size, 2);
    t2.uniform2fv(this.addr, n);
  }
  function Do(t2, e) {
    const n = co(e, this.size, 3);
    t2.uniform3fv(this.addr, n);
  }
  function Oo(t2, e) {
    const n = co(e, this.size, 4);
    t2.uniform4fv(this.addr, n);
  }
  function Fo(t2, e) {
    const n = co(e, this.size, 4);
    t2.uniformMatrix2fv(this.addr, false, n);
  }
  function Bo(t2, e) {
    const n = co(e, this.size, 9);
    t2.uniformMatrix3fv(this.addr, false, n);
  }
  function zo(t2, e) {
    const n = co(e, this.size, 16);
    t2.uniformMatrix4fv(this.addr, false, n);
  }
  function Ho(t2, e) {
    t2.uniform1iv(this.addr, e);
  }
  function Vo(t2, e) {
    t2.uniform2iv(this.addr, e);
  }
  function ko(t2, e) {
    t2.uniform3iv(this.addr, e);
  }
  function Go(t2, e) {
    t2.uniform4iv(this.addr, e);
  }
  function Wo(t2, e) {
    t2.uniform1uiv(this.addr, e);
  }
  function Xo(t2, e) {
    t2.uniform2uiv(this.addr, e);
  }
  function jo(t2, e) {
    t2.uniform3uiv(this.addr, e);
  }
  function qo(t2, e) {
    t2.uniform4uiv(this.addr, e);
  }
  function Yo(t2, e, n) {
    const i = this.cache, r = e.length, s = po(n, r);
    ho(i, s) || (t2.uniform1iv(this.addr, s), uo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2D(e[t3] || Qa, s[t3]);
  }
  function Zo(t2, e, n) {
    const i = this.cache, r = e.length, s = po(n, r);
    ho(i, s) || (t2.uniform1iv(this.addr, s), uo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture3D(e[t3] || no, s[t3]);
  }
  function Jo(t2, e, n) {
    const i = this.cache, r = e.length, s = po(n, r);
    ho(i, s) || (t2.uniform1iv(this.addr, s), uo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTextureCube(e[t3] || io, s[t3]);
  }
  function Ko(t2, e, n) {
    const i = this.cache, r = e.length, s = po(n, r);
    ho(i, s) || (t2.uniform1iv(this.addr, s), uo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2DArray(e[t3] || eo, s[t3]);
  }
  var $o = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return mo;
          case 35664:
            return fo;
          case 35665:
            return go;
          case 35666:
            return _o;
          case 35674:
            return vo;
          case 35675:
            return xo;
          case 35676:
            return yo;
          case 5124:
          case 35670:
            return Mo;
          case 35667:
          case 35671:
            return So;
          case 35668:
          case 35672:
            return bo;
          case 35669:
          case 35673:
            return Eo;
          case 5125:
            return To;
          case 36294:
            return wo;
          case 36295:
            return Ao;
          case 36296:
            return Ro;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Co;
          case 35679:
          case 36299:
          case 36307:
            return Po;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Lo;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Io;
        }
      })(e.type);
    }
  };
  var Qo = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return Uo;
          case 35664:
            return No;
          case 35665:
            return Do;
          case 35666:
            return Oo;
          case 35674:
            return Fo;
          case 35675:
            return Bo;
          case 35676:
            return zo;
          case 5124:
          case 35670:
            return Ho;
          case 35667:
          case 35671:
            return Vo;
          case 35668:
          case 35672:
            return ko;
          case 35669:
          case 35673:
            return Go;
          case 5125:
            return Wo;
          case 36294:
            return Xo;
          case 36295:
            return jo;
          case 36296:
            return qo;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Yo;
          case 35679:
          case 36299:
          case 36307:
            return Zo;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Jo;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Ko;
        }
      })(e.type);
    }
  };
  var tl = class {
    constructor(t2) {
      this.id = t2, this.seq = [], this.map = {};
    }
    setValue(t2, e, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s2 = i[r];
        s2.setValue(t2, e[s2.id], n);
      }
    }
  };
  var el = /(\w+)(\])?(\[|\.)?/g;
  function nl(t2, e) {
    t2.seq.push(e), t2.map[e.id] = e;
  }
  function il(t2, e, n) {
    const i = t2.name, r = i.length;
    for (el.lastIndex = 0; ; ) {
      const s = el.exec(i), a = el.lastIndex;
      let o = s[1];
      const l2 = "]" === s[2], c2 = s[3];
      if (l2 && (o |= 0), void 0 === c2 || "[" === c2 && a + 2 === r) {
        nl(n, void 0 === c2 ? new $o(o, t2, e) : new Qo(o, t2, e));
        break;
      }
      {
        let t3 = n.map[o];
        void 0 === t3 && (t3 = new tl(o), nl(n, t3)), n = t3;
      }
    }
  }
  var rl = class {
    constructor(t2, e) {
      this.seq = [], this.map = {};
      const n = t2.getProgramParameter(e, t2.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n2 = t2.getActiveUniform(e, i);
        il(n2, t2.getUniformLocation(e, n2.name), this);
      }
    }
    setValue(t2, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t2, n, i);
    }
    setOptional(t2, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t2, n, i);
    }
    static upload(t2, e, n, i) {
      for (let r = 0, s = e.length; r !== s; ++r) {
        const s2 = e[r], a = n[s2.id];
        false !== a.needsUpdate && s2.setValue(t2, a.value, i);
      }
    }
    static seqWithValue(t2, e) {
      const n = [];
      for (let i = 0, r = t2.length; i !== r; ++i) {
        const r2 = t2[i];
        r2.id in e && n.push(r2);
      }
      return n;
    }
  };
  function sl(t2, e, n) {
    const i = t2.createShader(e);
    return t2.shaderSource(i, n), t2.compileShader(i), i;
  }
  var al = 37297;
  var ol = 0;
  function ll(t2, e, n) {
    const i = t2.getShaderParameter(e, t2.COMPILE_STATUS), r = t2.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i2 = parseInt(s[1]);
      return n.toUpperCase() + "\n\n" + r + "\n\n" + (function(t3, e2) {
        const n2 = t3.split("\n"), i3 = [], r2 = Math.max(e2 - 6, 0), s2 = Math.min(e2 + 6, n2.length);
        for (let t4 = r2; t4 < s2; t4++) {
          const r3 = t4 + 1;
          i3.push(`${r3 === e2 ? ">" : " "} ${r3}: ${n2[t4]}`);
        }
        return i3.join("\n");
      })(t2.getShaderSource(e), i2);
    }
    return r;
  }
  function cl(t2, e) {
    const n = (function(t3) {
      const e2 = pi.getPrimaries(pi.workingColorSpace), n2 = pi.getPrimaries(t3);
      let i;
      switch (e2 === n2 ? i = "" : e2 === Qe && n2 === $e ? i = "LinearDisplayP3ToLinearSRGB" : e2 === $e && n2 === Qe && (i = "LinearSRGBToLinearDisplayP3"), t3) {
        case qe:
        case Ze:
          return [i, "LinearTransferOETF"];
        case je:
        case Ye:
          return [i, "sRGBTransferOETF"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported color space:", t3), [i, "LinearTransferOETF"];
      }
    })(e);
    return `vec4 ${t2}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
  }
  function hl(t2, e) {
    let n;
    switch (e) {
      case $:
        n = "Linear";
        break;
      case Q:
        n = "Reinhard";
        break;
      case tt:
        n = "OptimizedCineon";
        break;
      case et:
        n = "ACESFilmic";
        break;
      case it:
        n = "AgX";
        break;
      case nt:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }
    return "vec3 " + t2 + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }
  function ul(t2) {
    return "" !== t2;
  }
  function dl(t2, e) {
    const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return t2.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function pl(t2, e) {
    return t2.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  var ml = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function fl(t2) {
    return t2.replace(ml, _l);
  }
  var gl = /* @__PURE__ */ new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]);
  function _l(t2, e) {
    let n = ga[e];
    if (void 0 === n) {
      const t3 = gl.get(e);
      if (void 0 === t3) throw new Error("Can not resolve #include <" + e + ">");
      n = ga[t3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, t3);
    }
    return fl(n);
  }
  var vl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function xl(t2) {
    return t2.replace(vl, yl);
  }
  function yl(t2, e, n, i) {
    let r = "";
    for (let t3 = parseInt(e); t3 < parseInt(n); t3++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t3);
    return r;
  }
  function Ml(t2) {
    let e = `precision ${t2.precision} float;
	precision ${t2.precision} int;
	precision ${t2.precision} sampler2D;
	precision ${t2.precision} samplerCube;
	`;
    return t2.isWebGL2 && (e += `precision ${t2.precision} sampler3D;
		precision ${t2.precision} sampler2DArray;
		precision ${t2.precision} sampler2DShadow;
		precision ${t2.precision} samplerCubeShadow;
		precision ${t2.precision} sampler2DArrayShadow;
		precision ${t2.precision} isampler2D;
		precision ${t2.precision} isampler3D;
		precision ${t2.precision} isamplerCube;
		precision ${t2.precision} isampler2DArray;
		precision ${t2.precision} usampler2D;
		precision ${t2.precision} usampler3D;
		precision ${t2.precision} usamplerCube;
		precision ${t2.precision} usampler2DArray;
		`), "highp" === t2.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t2.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t2.precision && (e += "\n#define LOW_PRECISION"), e;
  }
  function Sl(t2, e, n, i) {
    const r = t2.getContext(), s = n.defines;
    let a = n.vertexShader, o = n.fragmentShader;
    const u2 = (function(t3) {
      let e2 = "SHADOWMAP_TYPE_BASIC";
      return t3.shadowMapType === l ? e2 = "SHADOWMAP_TYPE_PCF" : t3.shadowMapType === c ? e2 = "SHADOWMAP_TYPE_PCF_SOFT" : t3.shadowMapType === h && (e2 = "SHADOWMAP_TYPE_VSM"), e2;
    })(n), d2 = (function(t3) {
      let e2 = "ENVMAP_TYPE_CUBE";
      if (t3.envMap) switch (t3.envMapMode) {
        case ot:
        case lt:
          e2 = "ENVMAP_TYPE_CUBE";
          break;
        case ut:
          e2 = "ENVMAP_TYPE_CUBE_UV";
      }
      return e2;
    })(n), p = (function(t3) {
      let e2 = "ENVMAP_MODE_REFLECTION";
      t3.envMap && t3.envMapMode === lt && (e2 = "ENVMAP_MODE_REFRACTION");
      return e2;
    })(n), m = (function(t3) {
      let e2 = "ENVMAP_BLENDING_NONE";
      if (t3.envMap) switch (t3.combine) {
        case Y:
          e2 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case Z:
          e2 = "ENVMAP_BLENDING_MIX";
          break;
        case J:
          e2 = "ENVMAP_BLENDING_ADD";
      }
      return e2;
    })(n), f = (function(t3) {
      const e2 = t3.envMapCubeUVHeight;
      if (null === e2) return null;
      const n2 = Math.log2(e2) - 2, i2 = 1 / e2;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n2), 112)), texelHeight: i2, maxMip: n2 };
    })(n), g = n.isWebGL2 ? "" : (function(t3) {
      return [t3.extensionDerivatives || t3.envMapCubeUVHeight || t3.bumpMap || t3.normalMapTangentSpace || t3.clearcoatNormalMap || t3.flatShading || t3.alphaToCoverage || "physical" === t3.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t3.extensionFragDepth || t3.logarithmicDepthBuffer) && t3.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t3.extensionDrawBuffers && t3.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t3.extensionShaderTextureLOD || t3.envMap || t3.transmission) && t3.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ul).join("\n");
    })(n), _ = (function(t3) {
      return [t3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", t3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ul).join("\n");
    })(n), v = (function(t3) {
      const e2 = [];
      for (const n2 in t3) {
        const i2 = t3[n2];
        false !== i2 && e2.push("#define " + n2 + " " + i2);
      }
      return e2.join("\n");
    })(s), x = r.createProgram();
    let y2, M, S = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (y2 = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v].filter(ul).join("\n"), y2.length > 0 && (y2 += "\n"), M = [g, "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v].filter(ul).join("\n"), M.length > 0 && (M += "\n")) : (y2 = [Ml(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && false === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u2 : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(ul).join("\n"), M = [g, Ml(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, v, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d2 : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u2 : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== K ? "#define TONE_MAPPING" : "", n.toneMapping !== K ? ga.tonemapping_pars_fragment : "", n.toneMapping !== K ? hl("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", ga.colorspace_pars_fragment, cl("linearToOutputTexel", n.outputColorSpace), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(ul).join("\n")), a = fl(a), a = dl(a, n), a = pl(a, n), o = fl(o), o = dl(o, n), o = pl(o, n), a = xl(a), o = xl(o), n.isWebGL2 && true !== n.isRawShaderMaterial && (S = "#version 300 es\n", y2 = [_, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + y2, M = ["precision mediump sampler2DArray;", "#define varying in", n.glslVersion === Dn ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === Dn ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + M);
    const b = S + y2 + a, E = S + M + o, T = sl(r, r.VERTEX_SHADER, b), w = sl(r, r.FRAGMENT_SHADER, E);
    function A(e2) {
      if (t2.debug.checkShaderErrors) {
        const n2 = r.getProgramInfoLog(x).trim(), i2 = r.getShaderInfoLog(T).trim(), s2 = r.getShaderInfoLog(w).trim();
        let a2 = true, o2 = true;
        if (false === r.getProgramParameter(x, r.LINK_STATUS)) if (a2 = false, "function" == typeof t2.debug.onShaderError) t2.debug.onShaderError(r, x, T, w);
        else {
          const t3 = ll(r, T, "vertex"), i3 = ll(r, w, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + "\n\nMaterial Name: " + e2.name + "\nMaterial Type: " + e2.type + "\n\nProgram Info Log: " + n2 + "\n" + t3 + "\n" + i3);
        }
        else "" !== n2 ? console.warn("THREE.WebGLProgram: Program Info Log:", n2) : "" !== i2 && "" !== s2 || (o2 = false);
        o2 && (e2.diagnostics = { runnable: a2, programLog: n2, vertexShader: { log: i2, prefix: y2 }, fragmentShader: { log: s2, prefix: M } });
      }
      r.deleteShader(T), r.deleteShader(w), R = new rl(r, x), C2 = (function(t3, e3) {
        const n2 = {}, i2 = t3.getProgramParameter(e3, t3.ACTIVE_ATTRIBUTES);
        for (let r2 = 0; r2 < i2; r2++) {
          const i3 = t3.getActiveAttrib(e3, r2), s2 = i3.name;
          let a2 = 1;
          i3.type === t3.FLOAT_MAT2 && (a2 = 2), i3.type === t3.FLOAT_MAT3 && (a2 = 3), i3.type === t3.FLOAT_MAT4 && (a2 = 4), n2[s2] = { type: i3.type, location: t3.getAttribLocation(e3, s2), locationSize: a2 };
        }
        return n2;
      })(r, x);
    }
    let R, C2;
    r.attachShader(x, T), r.attachShader(x, w), void 0 !== n.index0AttributeName ? r.bindAttribLocation(x, 0, n.index0AttributeName) : true === n.morphTargets && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), this.getUniforms = function() {
      return void 0 === R && A(this), R;
    }, this.getAttributes = function() {
      return void 0 === C2 && A(this), C2;
    };
    let P2 = false === n.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === P2 && (P2 = r.getProgramParameter(x, al)), P2;
    }, this.destroy = function() {
      i.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
    }, this.type = n.shaderType, this.name = n.shaderName, this.id = ol++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = T, this.fragmentShader = w, this;
  }
  var bl = 0;
  var El = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(t2) {
      const e = t2.vertexShader, n = t2.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t2);
      return false === s.has(i) && (s.add(i), i.usedTimes++), false === s.has(r) && (s.add(r), r.usedTimes++), this;
    }
    remove(t2) {
      const e = this.materialCache.get(t2);
      for (const t3 of e) t3.usedTimes--, 0 === t3.usedTimes && this.shaderCache.delete(t3.code);
      return this.materialCache.delete(t2), this;
    }
    getVertexShaderID(t2) {
      return this._getShaderStage(t2.vertexShader).id;
    }
    getFragmentShaderID(t2) {
      return this._getShaderStage(t2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t2) {
      const e = this.materialCache;
      let n = e.get(t2);
      return void 0 === n && (n = /* @__PURE__ */ new Set(), e.set(t2, n)), n;
    }
    _getShaderStage(t2) {
      const e = this.shaderCache;
      let n = e.get(t2);
      return void 0 === n && (n = new Tl(t2), e.set(t2, n)), n;
    }
  };
  var Tl = class {
    constructor(t2) {
      this.id = bl++, this.code = t2, this.usedTimes = 0;
    }
  };
  function wl(t2, e, n, i, r, s, a) {
    const o = new xr(), l2 = new El(), c2 = /* @__PURE__ */ new Set(), h2 = [], u2 = r.isWebGL2, p = r.logarithmicDepthBuffer, m = r.vertexTextures;
    let f = r.precision;
    const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function _(t3) {
      return c2.add(t3), 0 === t3 ? "uv" : `uv${t3}`;
    }
    return { getParameters: function(s2, o2, h3, v, x) {
      const y2 = v.fog, M = x.geometry, S = s2.isMeshStandardMaterial ? v.environment : null, b = (s2.isMeshStandardMaterial ? n : e).get(s2.envMap || S), E = b && b.mapping === ut ? b.image.height : null, T = g[s2.type];
      null !== s2.precision && (f = r.getMaxPrecision(s2.precision), f !== s2.precision && console.warn("THREE.WebGLProgram.getParameters:", s2.precision, "not supported, using", f, "instead."));
      const w = M.morphAttributes.position || M.morphAttributes.normal || M.morphAttributes.color, A = void 0 !== w ? w.length : 0;
      let R, C2, P2, L, I = 0;
      if (void 0 !== M.morphAttributes.position && (I = 1), void 0 !== M.morphAttributes.normal && (I = 2), void 0 !== M.morphAttributes.color && (I = 3), T) {
        const t3 = va[T];
        R = t3.vertexShader, C2 = t3.fragmentShader;
      } else R = s2.vertexShader, C2 = s2.fragmentShader, l2.update(s2), P2 = l2.getVertexShaderID(s2), L = l2.getFragmentShaderID(s2);
      const U = t2.getRenderTarget(), N = true === x.isInstancedMesh, D = true === x.isBatchedMesh, O = !!s2.map, F = !!s2.matcap, B = !!b, z = !!s2.aoMap, H = !!s2.lightMap, V = !!s2.bumpMap, k = !!s2.normalMap, G = !!s2.displacementMap, W = !!s2.emissiveMap, X = !!s2.metalnessMap, j = !!s2.roughnessMap, q = s2.anisotropy > 0, Y2 = s2.clearcoat > 0, Z2 = s2.iridescence > 0, J2 = s2.sheen > 0, $2 = s2.transmission > 0, Q2 = q && !!s2.anisotropyMap, tt2 = Y2 && !!s2.clearcoatMap, et2 = Y2 && !!s2.clearcoatNormalMap, nt2 = Y2 && !!s2.clearcoatRoughnessMap, it2 = Z2 && !!s2.iridescenceMap, rt = Z2 && !!s2.iridescenceThicknessMap, st = J2 && !!s2.sheenColorMap, at2 = J2 && !!s2.sheenRoughnessMap, ot2 = !!s2.specularMap, lt2 = !!s2.specularColorMap, ct2 = !!s2.specularIntensityMap, ht2 = $2 && !!s2.transmissionMap, dt2 = $2 && !!s2.thicknessMap, pt2 = !!s2.gradientMap, mt2 = !!s2.alphaMap, ft2 = s2.alphaTest > 0, gt2 = !!s2.alphaHash, _t = !!s2.extensions;
      let vt2 = K;
      s2.toneMapped && (null !== U && true !== U.isXRRenderTarget || (vt2 = t2.toneMapping));
      const xt = { isWebGL2: u2, shaderID: T, shaderType: s2.type, shaderName: s2.name, vertexShader: R, fragmentShader: C2, defines: s2.defines, customVertexShaderID: P2, customFragmentShaderID: L, isRawShaderMaterial: true === s2.isRawShaderMaterial, glslVersion: s2.glslVersion, precision: f, batching: D, instancing: N, instancingColor: N && null !== x.instanceColor, supportsVertexTextures: m, outputColorSpace: null === U ? t2.outputColorSpace : true === U.isXRRenderTarget ? U.texture.colorSpace : qe, alphaToCoverage: !!s2.alphaToCoverage, map: O, matcap: F, envMap: B, envMapMode: B && b.mapping, envMapCubeUVHeight: E, aoMap: z, lightMap: H, bumpMap: V, normalMap: k, displacementMap: m && G, emissiveMap: W, normalMapObjectSpace: k && 1 === s2.normalMapType, normalMapTangentSpace: k && 0 === s2.normalMapType, metalnessMap: X, roughnessMap: j, anisotropy: q, anisotropyMap: Q2, clearcoat: Y2, clearcoatMap: tt2, clearcoatNormalMap: et2, clearcoatRoughnessMap: nt2, iridescence: Z2, iridescenceMap: it2, iridescenceThicknessMap: rt, sheen: J2, sheenColorMap: st, sheenRoughnessMap: at2, specularMap: ot2, specularColorMap: lt2, specularIntensityMap: ct2, transmission: $2, transmissionMap: ht2, thicknessMap: dt2, gradientMap: pt2, opaque: false === s2.transparent && 1 === s2.blending && false === s2.alphaToCoverage, alphaMap: mt2, alphaTest: ft2, alphaHash: gt2, combine: s2.combine, mapUv: O && _(s2.map.channel), aoMapUv: z && _(s2.aoMap.channel), lightMapUv: H && _(s2.lightMap.channel), bumpMapUv: V && _(s2.bumpMap.channel), normalMapUv: k && _(s2.normalMap.channel), displacementMapUv: G && _(s2.displacementMap.channel), emissiveMapUv: W && _(s2.emissiveMap.channel), metalnessMapUv: X && _(s2.metalnessMap.channel), roughnessMapUv: j && _(s2.roughnessMap.channel), anisotropyMapUv: Q2 && _(s2.anisotropyMap.channel), clearcoatMapUv: tt2 && _(s2.clearcoatMap.channel), clearcoatNormalMapUv: et2 && _(s2.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: nt2 && _(s2.clearcoatRoughnessMap.channel), iridescenceMapUv: it2 && _(s2.iridescenceMap.channel), iridescenceThicknessMapUv: rt && _(s2.iridescenceThicknessMap.channel), sheenColorMapUv: st && _(s2.sheenColorMap.channel), sheenRoughnessMapUv: at2 && _(s2.sheenRoughnessMap.channel), specularMapUv: ot2 && _(s2.specularMap.channel), specularColorMapUv: lt2 && _(s2.specularColorMap.channel), specularIntensityMapUv: ct2 && _(s2.specularIntensityMap.channel), transmissionMapUv: ht2 && _(s2.transmissionMap.channel), thicknessMapUv: dt2 && _(s2.thicknessMap.channel), alphaMapUv: mt2 && _(s2.alphaMap.channel), vertexTangents: !!M.attributes.tangent && (k || q), vertexColors: s2.vertexColors, vertexAlphas: true === s2.vertexColors && !!M.attributes.color && 4 === M.attributes.color.itemSize, pointsUvs: true === x.isPoints && !!M.attributes.uv && (O || mt2), fog: !!y2, useFog: true === s2.fog, fogExp2: !!y2 && y2.isFogExp2, flatShading: true === s2.flatShading, sizeAttenuation: true === s2.sizeAttenuation, logarithmicDepthBuffer: p, skinning: true === x.isSkinnedMesh, morphTargets: void 0 !== M.morphAttributes.position, morphNormals: void 0 !== M.morphAttributes.normal, morphColors: void 0 !== M.morphAttributes.color, morphTargetsCount: A, morphTextureStride: I, numDirLights: o2.directional.length, numPointLights: o2.point.length, numSpotLights: o2.spot.length, numSpotLightMaps: o2.spotLightMap.length, numRectAreaLights: o2.rectArea.length, numHemiLights: o2.hemi.length, numDirLightShadows: o2.directionalShadowMap.length, numPointLightShadows: o2.pointShadowMap.length, numSpotLightShadows: o2.spotShadowMap.length, numSpotLightShadowsWithMaps: o2.numSpotLightShadowsWithMaps, numLightProbes: o2.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s2.dithering, shadowMapEnabled: t2.shadowMap.enabled && h3.length > 0, shadowMapType: t2.shadowMap.type, toneMapping: vt2, useLegacyLights: t2._useLegacyLights, decodeVideoTexture: O && true === s2.map.isVideoTexture && pi.getTransfer(s2.map.colorSpace) === Ke, premultipliedAlpha: s2.premultipliedAlpha, doubleSided: 2 === s2.side, flipSided: s2.side === d, useDepthPacking: s2.depthPacking >= 0, depthPacking: s2.depthPacking || 0, index0AttributeName: s2.index0AttributeName, extensionDerivatives: _t && true === s2.extensions.derivatives, extensionFragDepth: _t && true === s2.extensions.fragDepth, extensionDrawBuffers: _t && true === s2.extensions.drawBuffers, extensionShaderTextureLOD: _t && true === s2.extensions.shaderTextureLOD, extensionClipCullDistance: _t && true === s2.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: _t && true === s2.extensions.multiDraw && i.has("WEBGL_multi_draw"), rendererExtensionFragDepth: u2 || i.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u2 || i.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u2 || i.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: s2.customProgramCacheKey() };
      return xt.vertexUv1s = c2.has(1), xt.vertexUv2s = c2.has(2), xt.vertexUv3s = c2.has(3), c2.clear(), xt;
    }, getProgramCacheKey: function(e2) {
      const n2 = [];
      if (e2.shaderID ? n2.push(e2.shaderID) : (n2.push(e2.customVertexShaderID), n2.push(e2.customFragmentShaderID)), void 0 !== e2.defines) for (const t3 in e2.defines) n2.push(t3), n2.push(e2.defines[t3]);
      return false === e2.isRawShaderMaterial && (!(function(t3, e3) {
        t3.push(e3.precision), t3.push(e3.outputColorSpace), t3.push(e3.envMapMode), t3.push(e3.envMapCubeUVHeight), t3.push(e3.mapUv), t3.push(e3.alphaMapUv), t3.push(e3.lightMapUv), t3.push(e3.aoMapUv), t3.push(e3.bumpMapUv), t3.push(e3.normalMapUv), t3.push(e3.displacementMapUv), t3.push(e3.emissiveMapUv), t3.push(e3.metalnessMapUv), t3.push(e3.roughnessMapUv), t3.push(e3.anisotropyMapUv), t3.push(e3.clearcoatMapUv), t3.push(e3.clearcoatNormalMapUv), t3.push(e3.clearcoatRoughnessMapUv), t3.push(e3.iridescenceMapUv), t3.push(e3.iridescenceThicknessMapUv), t3.push(e3.sheenColorMapUv), t3.push(e3.sheenRoughnessMapUv), t3.push(e3.specularMapUv), t3.push(e3.specularColorMapUv), t3.push(e3.specularIntensityMapUv), t3.push(e3.transmissionMapUv), t3.push(e3.thicknessMapUv), t3.push(e3.combine), t3.push(e3.fogExp2), t3.push(e3.sizeAttenuation), t3.push(e3.morphTargetsCount), t3.push(e3.morphAttributeCount), t3.push(e3.numDirLights), t3.push(e3.numPointLights), t3.push(e3.numSpotLights), t3.push(e3.numSpotLightMaps), t3.push(e3.numHemiLights), t3.push(e3.numRectAreaLights), t3.push(e3.numDirLightShadows), t3.push(e3.numPointLightShadows), t3.push(e3.numSpotLightShadows), t3.push(e3.numSpotLightShadowsWithMaps), t3.push(e3.numLightProbes), t3.push(e3.shadowMapType), t3.push(e3.toneMapping), t3.push(e3.numClippingPlanes), t3.push(e3.numClipIntersection), t3.push(e3.depthPacking);
      })(n2, e2), (function(t3, e3) {
        o.disableAll(), e3.isWebGL2 && o.enable(0);
        e3.supportsVertexTextures && o.enable(1);
        e3.instancing && o.enable(2);
        e3.instancingColor && o.enable(3);
        e3.matcap && o.enable(4);
        e3.envMap && o.enable(5);
        e3.normalMapObjectSpace && o.enable(6);
        e3.normalMapTangentSpace && o.enable(7);
        e3.clearcoat && o.enable(8);
        e3.iridescence && o.enable(9);
        e3.alphaTest && o.enable(10);
        e3.vertexColors && o.enable(11);
        e3.vertexAlphas && o.enable(12);
        e3.vertexUv1s && o.enable(13);
        e3.vertexUv2s && o.enable(14);
        e3.vertexUv3s && o.enable(15);
        e3.vertexTangents && o.enable(16);
        e3.anisotropy && o.enable(17);
        e3.alphaHash && o.enable(18);
        e3.batching && o.enable(19);
        t3.push(o.mask), o.disableAll(), e3.fog && o.enable(0);
        e3.useFog && o.enable(1);
        e3.flatShading && o.enable(2);
        e3.logarithmicDepthBuffer && o.enable(3);
        e3.skinning && o.enable(4);
        e3.morphTargets && o.enable(5);
        e3.morphNormals && o.enable(6);
        e3.morphColors && o.enable(7);
        e3.premultipliedAlpha && o.enable(8);
        e3.shadowMapEnabled && o.enable(9);
        e3.useLegacyLights && o.enable(10);
        e3.doubleSided && o.enable(11);
        e3.flipSided && o.enable(12);
        e3.useDepthPacking && o.enable(13);
        e3.dithering && o.enable(14);
        e3.transmission && o.enable(15);
        e3.sheen && o.enable(16);
        e3.opaque && o.enable(17);
        e3.pointsUvs && o.enable(18);
        e3.decodeVideoTexture && o.enable(19);
        e3.alphaToCoverage && o.enable(20);
        t3.push(o.mask);
      })(n2, e2), n2.push(t2.outputColorSpace)), n2.push(e2.customProgramCacheKey), n2.join();
    }, getUniforms: function(t3) {
      const e2 = g[t3.type];
      let n2;
      if (e2) {
        const t4 = va[e2];
        n2 = Zs.clone(t4.uniforms);
      } else n2 = t3.uniforms;
      return n2;
    }, acquireProgram: function(e2, n2) {
      let i2;
      for (let t3 = 0, e3 = h2.length; t3 < e3; t3++) {
        const e4 = h2[t3];
        if (e4.cacheKey === n2) {
          i2 = e4, ++i2.usedTimes;
          break;
        }
      }
      return void 0 === i2 && (i2 = new Sl(t2, n2, e2, s), h2.push(i2)), i2;
    }, releaseProgram: function(t3) {
      if (0 == --t3.usedTimes) {
        const e2 = h2.indexOf(t3);
        h2[e2] = h2[h2.length - 1], h2.pop(), t3.destroy();
      }
    }, releaseShaderCache: function(t3) {
      l2.remove(t3);
    }, programs: h2, dispose: function() {
      l2.dispose();
    } };
  }
  function Al() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e) {
      let n = t2.get(e);
      return void 0 === n && (n = {}, t2.set(e, n)), n;
    }, remove: function(e) {
      t2.delete(e);
    }, update: function(e, n, i) {
      t2.get(e)[n] = i;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Rl(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.material.id !== e.material.id ? t2.material.id - e.material.id : t2.z !== e.z ? t2.z - e.z : t2.id - e.id;
  }
  function Cl(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.z !== e.z ? e.z - t2.z : t2.id - e.id;
  }
  function Pl() {
    const t2 = [];
    let e = 0;
    const n = [], i = [], r = [];
    function s(n2, i2, r2, s2, a, o) {
      let l2 = t2[e];
      return void 0 === l2 ? (l2 = { id: n2.id, object: n2, geometry: i2, material: r2, groupOrder: s2, renderOrder: n2.renderOrder, z: a, group: o }, t2[e] = l2) : (l2.id = n2.id, l2.object = n2, l2.geometry = i2, l2.material = r2, l2.groupOrder = s2, l2.renderOrder = n2.renderOrder, l2.z = a, l2.group = o), e++, l2;
    }
    return { opaque: n, transmissive: i, transparent: r, init: function() {
      e = 0, n.length = 0, i.length = 0, r.length = 0;
    }, push: function(t3, e2, a, o, l2, c2) {
      const h2 = s(t3, e2, a, o, l2, c2);
      a.transmission > 0 ? i.push(h2) : true === a.transparent ? r.push(h2) : n.push(h2);
    }, unshift: function(t3, e2, a, o, l2, c2) {
      const h2 = s(t3, e2, a, o, l2, c2);
      a.transmission > 0 ? i.unshift(h2) : true === a.transparent ? r.unshift(h2) : n.unshift(h2);
    }, finish: function() {
      for (let n2 = e, i2 = t2.length; n2 < i2; n2++) {
        const e2 = t2[n2];
        if (null === e2.id) break;
        e2.id = null, e2.object = null, e2.geometry = null, e2.material = null, e2.group = null;
      }
    }, sort: function(t3, e2) {
      n.length > 1 && n.sort(t3 || Rl), i.length > 1 && i.sort(e2 || Cl), r.length > 1 && r.sort(e2 || Cl);
    } };
  }
  function Ll() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e, n) {
      const i = t2.get(e);
      let r;
      return void 0 === i ? (r = new Pl(), t2.set(e, [r])) : n >= i.length ? (r = new Pl(), i.push(r)) : r = i[n], r;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Il() {
    const t2 = {};
    return { get: function(e) {
      if (void 0 !== t2[e.id]) return t2[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = { direction: new Ii(), color: new Zr() };
          break;
        case "SpotLight":
          n = { position: new Ii(), direction: new Ii(), color: new Zr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          n = { position: new Ii(), color: new Zr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new Ii(), skyColor: new Zr(), groundColor: new Zr() };
          break;
        case "RectAreaLight":
          n = { color: new Zr(), position: new Ii(), halfWidth: new Ii(), halfHeight: new Ii() };
      }
      return t2[e.id] = n, n;
    } };
  }
  var Ul = 0;
  function Nl(t2, e) {
    return (e.castShadow ? 2 : 0) - (t2.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t2.map ? 1 : 0);
  }
  function Dl(t2, e) {
    const n = new Il(), i = /* @__PURE__ */ (function() {
      const t3 = {};
      return { get: function(e2) {
        if (void 0 !== t3[e2.id]) return t3[e2.id];
        let n2;
        switch (e2.type) {
          case "DirectionalLight":
          case "SpotLight":
            n2 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Qn() };
            break;
          case "PointLight":
            n2 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Qn(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return t3[e2.id] = n2, n2;
      } };
    })(), r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let t3 = 0; t3 < 9; t3++) r.probe.push(new Ii());
    const s = new Ii(), a = new lr(), o = new lr();
    return { setup: function(s2, a2) {
      let o2 = 0, l2 = 0, c2 = 0;
      for (let t3 = 0; t3 < 9; t3++) r.probe[t3].set(0, 0, 0);
      let h2 = 0, u2 = 0, d2 = 0, p = 0, m = 0, f = 0, g = 0, _ = 0, v = 0, x = 0, y2 = 0;
      s2.sort(Nl);
      const M = true === a2 ? Math.PI : 1;
      for (let t3 = 0, e2 = s2.length; t3 < e2; t3++) {
        const e3 = s2[t3], a3 = e3.color, S2 = e3.intensity, b = e3.distance, E = e3.shadow && e3.shadow.map ? e3.shadow.map.texture : null;
        if (e3.isAmbientLight) o2 += a3.r * S2 * M, l2 += a3.g * S2 * M, c2 += a3.b * S2 * M;
        else if (e3.isLightProbe) {
          for (let t4 = 0; t4 < 9; t4++) r.probe[t4].addScaledVector(e3.sh.coefficients[t4], S2);
          y2++;
        } else if (e3.isDirectionalLight) {
          const t4 = n.get(e3);
          if (t4.color.copy(e3.color).multiplyScalar(e3.intensity * M), e3.castShadow) {
            const t5 = e3.shadow, n2 = i.get(e3);
            n2.shadowBias = t5.bias, n2.shadowNormalBias = t5.normalBias, n2.shadowRadius = t5.radius, n2.shadowMapSize = t5.mapSize, r.directionalShadow[h2] = n2, r.directionalShadowMap[h2] = E, r.directionalShadowMatrix[h2] = e3.shadow.matrix, f++;
          }
          r.directional[h2] = t4, h2++;
        } else if (e3.isSpotLight) {
          const t4 = n.get(e3);
          t4.position.setFromMatrixPosition(e3.matrixWorld), t4.color.copy(a3).multiplyScalar(S2 * M), t4.distance = b, t4.coneCos = Math.cos(e3.angle), t4.penumbraCos = Math.cos(e3.angle * (1 - e3.penumbra)), t4.decay = e3.decay, r.spot[d2] = t4;
          const s3 = e3.shadow;
          if (e3.map && (r.spotLightMap[v] = e3.map, v++, s3.updateMatrices(e3), e3.castShadow && x++), r.spotLightMatrix[d2] = s3.matrix, e3.castShadow) {
            const t5 = i.get(e3);
            t5.shadowBias = s3.bias, t5.shadowNormalBias = s3.normalBias, t5.shadowRadius = s3.radius, t5.shadowMapSize = s3.mapSize, r.spotShadow[d2] = t5, r.spotShadowMap[d2] = E, _++;
          }
          d2++;
        } else if (e3.isRectAreaLight) {
          const t4 = n.get(e3);
          t4.color.copy(a3).multiplyScalar(S2), t4.halfWidth.set(0.5 * e3.width, 0, 0), t4.halfHeight.set(0, 0.5 * e3.height, 0), r.rectArea[p] = t4, p++;
        } else if (e3.isPointLight) {
          const t4 = n.get(e3);
          if (t4.color.copy(e3.color).multiplyScalar(e3.intensity * M), t4.distance = e3.distance, t4.decay = e3.decay, e3.castShadow) {
            const t5 = e3.shadow, n2 = i.get(e3);
            n2.shadowBias = t5.bias, n2.shadowNormalBias = t5.normalBias, n2.shadowRadius = t5.radius, n2.shadowMapSize = t5.mapSize, n2.shadowCameraNear = t5.camera.near, n2.shadowCameraFar = t5.camera.far, r.pointShadow[u2] = n2, r.pointShadowMap[u2] = E, r.pointShadowMatrix[u2] = e3.shadow.matrix, g++;
          }
          r.point[u2] = t4, u2++;
        } else if (e3.isHemisphereLight) {
          const t4 = n.get(e3);
          t4.skyColor.copy(e3.color).multiplyScalar(S2 * M), t4.groundColor.copy(e3.groundColor).multiplyScalar(S2 * M), r.hemi[m] = t4, m++;
        }
      }
      p > 0 && (e.isWebGL2 ? true === t2.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = _a.LTC_FLOAT_1, r.rectAreaLTC2 = _a.LTC_FLOAT_2) : (r.rectAreaLTC1 = _a.LTC_HALF_1, r.rectAreaLTC2 = _a.LTC_HALF_2) : true === t2.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = _a.LTC_FLOAT_1, r.rectAreaLTC2 = _a.LTC_FLOAT_2) : true === t2.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = _a.LTC_HALF_1, r.rectAreaLTC2 = _a.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o2, r.ambient[1] = l2, r.ambient[2] = c2;
      const S = r.hash;
      S.directionalLength === h2 && S.pointLength === u2 && S.spotLength === d2 && S.rectAreaLength === p && S.hemiLength === m && S.numDirectionalShadows === f && S.numPointShadows === g && S.numSpotShadows === _ && S.numSpotMaps === v && S.numLightProbes === y2 || (r.directional.length = h2, r.spot.length = d2, r.rectArea.length = p, r.point.length = u2, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, r.numLightProbes = y2, S.directionalLength = h2, S.pointLength = u2, S.spotLength = d2, S.rectAreaLength = p, S.hemiLength = m, S.numDirectionalShadows = f, S.numPointShadows = g, S.numSpotShadows = _, S.numSpotMaps = v, S.numLightProbes = y2, r.version = Ul++);
    }, setupView: function(t3, e2) {
      let n2 = 0, i2 = 0, l2 = 0, c2 = 0, h2 = 0;
      const u2 = e2.matrixWorldInverse;
      for (let e3 = 0, d2 = t3.length; e3 < d2; e3++) {
        const d3 = t3[e3];
        if (d3.isDirectionalLight) {
          const t4 = r.directional[n2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), s.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s), t4.direction.transformDirection(u2), n2++;
        } else if (d3.isSpotLight) {
          const t4 = r.spot[l2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), t4.direction.setFromMatrixPosition(d3.matrixWorld), s.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s), t4.direction.transformDirection(u2), l2++;
        } else if (d3.isRectAreaLight) {
          const t4 = r.rectArea[c2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), o.identity(), a.copy(d3.matrixWorld), a.premultiply(u2), o.extractRotation(a), t4.halfWidth.set(0.5 * d3.width, 0, 0), t4.halfHeight.set(0, 0.5 * d3.height, 0), t4.halfWidth.applyMatrix4(o), t4.halfHeight.applyMatrix4(o), c2++;
        } else if (d3.isPointLight) {
          const t4 = r.point[i2];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), i2++;
        } else if (d3.isHemisphereLight) {
          const t4 = r.hemi[h2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), t4.direction.transformDirection(u2), h2++;
        }
      }
    }, state: r };
  }
  function Ol(t2, e) {
    const n = new Dl(t2, e), i = [], r = [];
    return { init: function() {
      i.length = 0, r.length = 0;
    }, state: { lightsArray: i, shadowsArray: r, lights: n }, setupLights: function(t3) {
      n.setup(i, t3);
    }, setupLightsView: function(t3) {
      n.setupView(i, t3);
    }, pushLight: function(t3) {
      i.push(t3);
    }, pushShadow: function(t3) {
      r.push(t3);
    } };
  }
  function Fl(t2, e) {
    let n = /* @__PURE__ */ new WeakMap();
    return { get: function(i, r = 0) {
      const s = n.get(i);
      let a;
      return void 0 === s ? (a = new Ol(t2, e), n.set(i, [a])) : r >= s.length ? (a = new Ol(t2, e), s.push(a)) : a = s[r], a;
    }, dispose: function() {
      n = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Bl = class extends $r {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var zl = class extends $r {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function Hl(t2, e, n) {
    let i = new da();
    const r = new Qn(), s = new Qn(), a = new bi(), o = new Bl({ depthPacking: 3201 }), c2 = new zl(), p = {}, m = n.maxTextureSize, f = { [u]: d, [d]: u, 2: 2 }, g = new Js({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Qn() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), _ = g.clone();
    _.defines.HORIZONTAL_PASS = 1;
    const v = new Ts();
    v.setAttribute("position", new os(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const x = new Gs(v, g), y2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = l;
    let M = this.type;
    function S(n2, i2) {
      const s2 = e.update(x);
      g.defines.VSM_SAMPLES !== n2.blurSamples && (g.defines.VSM_SAMPLES = n2.blurSamples, _.defines.VSM_SAMPLES = n2.blurSamples, g.needsUpdate = true, _.needsUpdate = true), null === n2.mapPass && (n2.mapPass = new Ti(r.x, r.y)), g.uniforms.shadow_pass.value = n2.map.texture, g.uniforms.resolution.value = n2.mapSize, g.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.mapPass), t2.clear(), t2.renderBufferDirect(i2, null, s2, g, x, null), _.uniforms.shadow_pass.value = n2.mapPass.texture, _.uniforms.resolution.value = n2.mapSize, _.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.map), t2.clear(), t2.renderBufferDirect(i2, null, s2, _, x, null);
    }
    function b(e2, n2, i2, r2) {
      let s2 = null;
      const a2 = true === i2.isPointLight ? e2.customDistanceMaterial : e2.customDepthMaterial;
      if (void 0 !== a2) s2 = a2;
      else if (s2 = true === i2.isPointLight ? c2 : o, t2.localClippingEnabled && true === n2.clipShadows && Array.isArray(n2.clippingPlanes) && 0 !== n2.clippingPlanes.length || n2.displacementMap && 0 !== n2.displacementScale || n2.alphaMap && n2.alphaTest > 0 || n2.map && n2.alphaTest > 0) {
        const t3 = s2.uuid, e3 = n2.uuid;
        let i3 = p[t3];
        void 0 === i3 && (i3 = {}, p[t3] = i3);
        let r3 = i3[e3];
        void 0 === r3 && (r3 = s2.clone(), i3[e3] = r3, n2.addEventListener("dispose", T)), s2 = r3;
      }
      if (s2.visible = n2.visible, s2.wireframe = n2.wireframe, s2.side = r2 === h ? null !== n2.shadowSide ? n2.shadowSide : n2.side : null !== n2.shadowSide ? n2.shadowSide : f[n2.side], s2.alphaMap = n2.alphaMap, s2.alphaTest = n2.alphaTest, s2.map = n2.map, s2.clipShadows = n2.clipShadows, s2.clippingPlanes = n2.clippingPlanes, s2.clipIntersection = n2.clipIntersection, s2.displacementMap = n2.displacementMap, s2.displacementScale = n2.displacementScale, s2.displacementBias = n2.displacementBias, s2.wireframeLinewidth = n2.wireframeLinewidth, s2.linewidth = n2.linewidth, true === i2.isPointLight && true === s2.isMeshDistanceMaterial) {
        t2.properties.get(s2).light = i2;
      }
      return s2;
    }
    function E(n2, r2, s2, a2, o2) {
      if (false === n2.visible) return;
      if (n2.layers.test(r2.layers) && (n2.isMesh || n2.isLine || n2.isPoints) && (n2.castShadow || n2.receiveShadow && o2 === h) && (!n2.frustumCulled || i.intersectsObject(n2))) {
        n2.modelViewMatrix.multiplyMatrices(s2.matrixWorldInverse, n2.matrixWorld);
        const i2 = e.update(n2), l3 = n2.material;
        if (Array.isArray(l3)) {
          const e2 = i2.groups;
          for (let c3 = 0, h2 = e2.length; c3 < h2; c3++) {
            const h3 = e2[c3], u2 = l3[h3.materialIndex];
            if (u2 && u2.visible) {
              const e3 = b(n2, u2, a2, o2);
              n2.onBeforeShadow(t2, n2, r2, s2, i2, e3, h3), t2.renderBufferDirect(s2, null, i2, e3, n2, h3), n2.onAfterShadow(t2, n2, r2, s2, i2, e3, h3);
            }
          }
        } else if (l3.visible) {
          const e2 = b(n2, l3, a2, o2);
          n2.onBeforeShadow(t2, n2, r2, s2, i2, e2, null), t2.renderBufferDirect(s2, null, i2, e2, n2, null), n2.onAfterShadow(t2, n2, r2, s2, i2, e2, null);
        }
      }
      const l2 = n2.children;
      for (let t3 = 0, e2 = l2.length; t3 < e2; t3++) E(l2[t3], r2, s2, a2, o2);
    }
    function T(t3) {
      t3.target.removeEventListener("dispose", T);
      for (const e2 in p) {
        const n2 = p[e2], i2 = t3.target.uuid;
        if (i2 in n2) {
          n2[i2].dispose(), delete n2[i2];
        }
      }
    }
    this.render = function(e2, n2, o2) {
      if (false === y2.enabled) return;
      if (false === y2.autoUpdate && false === y2.needsUpdate) return;
      if (0 === e2.length) return;
      const l2 = t2.getRenderTarget(), c3 = t2.getActiveCubeFace(), u2 = t2.getActiveMipmapLevel(), d2 = t2.state;
      d2.setBlending(0), d2.buffers.color.setClear(1, 1, 1, 1), d2.buffers.depth.setTest(true), d2.setScissorTest(false);
      const p2 = M !== h && this.type === h, f2 = M === h && this.type !== h;
      for (let l3 = 0, c4 = e2.length; l3 < c4; l3++) {
        const c5 = e2[l3], u3 = c5.shadow;
        if (void 0 === u3) {
          console.warn("THREE.WebGLShadowMap:", c5, "has no shadow.");
          continue;
        }
        if (false === u3.autoUpdate && false === u3.needsUpdate) continue;
        r.copy(u3.mapSize);
        const g2 = u3.getFrameExtents();
        if (r.multiply(g2), s.copy(u3.mapSize), (r.x > m || r.y > m) && (r.x > m && (s.x = Math.floor(m / g2.x), r.x = s.x * g2.x, u3.mapSize.x = s.x), r.y > m && (s.y = Math.floor(m / g2.y), r.y = s.y * g2.y, u3.mapSize.y = s.y)), null === u3.map || true === p2 || true === f2) {
          const t3 = this.type !== h ? { minFilter: ft, magFilter: ft } : {};
          null !== u3.map && u3.map.dispose(), u3.map = new Ti(r.x, r.y, t3), u3.map.texture.name = c5.name + ".shadowMap", u3.camera.updateProjectionMatrix();
        }
        t2.setRenderTarget(u3.map), t2.clear();
        const _2 = u3.getViewportCount();
        for (let t3 = 0; t3 < _2; t3++) {
          const e3 = u3.getViewport(t3);
          a.set(s.x * e3.x, s.y * e3.y, s.x * e3.z, s.y * e3.w), d2.viewport(a), u3.updateMatrices(c5, t3), i = u3.getFrustum(), E(n2, o2, u3.camera, c5, this.type);
        }
        true !== u3.isPointLightShadow && this.type === h && S(u3, o2), u3.needsUpdate = false;
      }
      M = this.type, y2.needsUpdate = false, t2.setRenderTarget(l2, c3, u2);
    };
  }
  function Vl(t2, e, n) {
    const i = n.isWebGL2;
    const r = new function() {
      let e2 = false;
      const n2 = new bi();
      let i2 = null;
      const r2 = new bi(0, 0, 0, 0);
      return { setMask: function(n3) {
        i2 === n3 || e2 || (t2.colorMask(n3, n3, n3, n3), i2 = n3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3, i3, s2, a2, o2) {
        true === o2 && (e3 *= a2, i3 *= a2, s2 *= a2), n2.set(e3, i3, s2, a2), false === r2.equals(n2) && (t2.clearColor(e3, i3, s2, a2), r2.copy(n2));
      }, reset: function() {
        e2 = false, i2 = null, r2.set(-1, 0, 0, 0);
      } };
    }(), s = new function() {
      let e2 = false, n2 = null, i2 = null, r2 = null;
      return { setTest: function(e3) {
        e3 ? j(t2.DEPTH_TEST) : q(t2.DEPTH_TEST);
      }, setMask: function(i3) {
        n2 === i3 || e2 || (t2.depthMask(i3), n2 = i3);
      }, setFunc: function(e3) {
        if (i2 !== e3) {
          switch (e3) {
            case 0:
              t2.depthFunc(t2.NEVER);
              break;
            case 1:
              t2.depthFunc(t2.ALWAYS);
              break;
            case 2:
              t2.depthFunc(t2.LESS);
              break;
            case 3:
            default:
              t2.depthFunc(t2.LEQUAL);
              break;
            case 4:
              t2.depthFunc(t2.EQUAL);
              break;
            case 5:
              t2.depthFunc(t2.GEQUAL);
              break;
            case 6:
              t2.depthFunc(t2.GREATER);
              break;
            case 7:
              t2.depthFunc(t2.NOTEQUAL);
          }
          i2 = e3;
        }
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3) {
        r2 !== e3 && (t2.clearDepth(e3), r2 = e3);
      }, reset: function() {
        e2 = false, n2 = null, i2 = null, r2 = null;
      } };
    }(), a = new function() {
      let e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c3 = null;
      return { setTest: function(n3) {
        e2 || (n3 ? j(t2.STENCIL_TEST) : q(t2.STENCIL_TEST));
      }, setMask: function(i3) {
        n2 === i3 || e2 || (t2.stencilMask(i3), n2 = i3);
      }, setFunc: function(e3, n3, a3) {
        i2 === e3 && r2 === n3 && s2 === a3 || (t2.stencilFunc(e3, n3, a3), i2 = e3, r2 = n3, s2 = a3);
      }, setOp: function(e3, n3, i3) {
        a2 === e3 && o2 === n3 && l3 === i3 || (t2.stencilOp(e3, n3, i3), a2 = e3, o2 = n3, l3 = i3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3) {
        c3 !== e3 && (t2.clearStencil(e3), c3 = e3);
      }, reset: function() {
        e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l3 = null, c3 = null;
      } };
    }(), o = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap();
    let c2 = {}, h2 = {}, u2 = /* @__PURE__ */ new WeakMap(), p = [], m = null, f = false, g = null, _ = null, v = null, x = null, M = null, S = null, b = null, E = new Zr(0, 0, 0), T = 0, w = false, A = null, R = null, L = null, I = null, U = null;
    const N = t2.getParameter(t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let D = false, O = 0;
    const F = t2.getParameter(t2.VERSION);
    -1 !== F.indexOf("WebGL") ? (O = parseFloat(/^WebGL (\d)/.exec(F)[1]), D = O >= 1) : -1 !== F.indexOf("OpenGL ES") && (O = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), D = O >= 2);
    let B = null, z = {};
    const H = t2.getParameter(t2.SCISSOR_BOX), V = t2.getParameter(t2.VIEWPORT), k = new bi().fromArray(H), G = new bi().fromArray(V);
    function W(e2, n2, r2, s2) {
      const a2 = new Uint8Array(4), o2 = t2.createTexture();
      t2.bindTexture(e2, o2), t2.texParameteri(e2, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(e2, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
      for (let o3 = 0; o3 < r2; o3++) !i || e2 !== t2.TEXTURE_3D && e2 !== t2.TEXTURE_2D_ARRAY ? t2.texImage2D(n2 + o3, 0, t2.RGBA, 1, 1, 0, t2.RGBA, t2.UNSIGNED_BYTE, a2) : t2.texImage3D(n2, 0, t2.RGBA, 1, 1, s2, 0, t2.RGBA, t2.UNSIGNED_BYTE, a2);
      return o2;
    }
    const X = {};
    function j(e2) {
      true !== c2[e2] && (t2.enable(e2), c2[e2] = true);
    }
    function q(e2) {
      false !== c2[e2] && (t2.disable(e2), c2[e2] = false);
    }
    X[t2.TEXTURE_2D] = W(t2.TEXTURE_2D, t2.TEXTURE_2D, 1), X[t2.TEXTURE_CUBE_MAP] = W(t2.TEXTURE_CUBE_MAP, t2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (X[t2.TEXTURE_2D_ARRAY] = W(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_2D_ARRAY, 1, 1), X[t2.TEXTURE_3D] = W(t2.TEXTURE_3D, t2.TEXTURE_3D, 1, 1)), r.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), j(t2.DEPTH_TEST), s.setFunc(3), K2(false), $2(1), j(t2.CULL_FACE), J2(0);
    const Y2 = { [y]: t2.FUNC_ADD, 101: t2.FUNC_SUBTRACT, 102: t2.FUNC_REVERSE_SUBTRACT };
    if (i) Y2[103] = t2.MIN, Y2[104] = t2.MAX;
    else {
      const t3 = e.get("EXT_blend_minmax");
      null !== t3 && (Y2[103] = t3.MIN_EXT, Y2[104] = t3.MAX_EXT);
    }
    const Z2 = { 200: t2.ZERO, 201: t2.ONE, 202: t2.SRC_COLOR, [C]: t2.SRC_ALPHA, 210: t2.SRC_ALPHA_SATURATE, 208: t2.DST_COLOR, 206: t2.DST_ALPHA, 203: t2.ONE_MINUS_SRC_COLOR, [P]: t2.ONE_MINUS_SRC_ALPHA, 209: t2.ONE_MINUS_DST_COLOR, 207: t2.ONE_MINUS_DST_ALPHA, 211: t2.CONSTANT_COLOR, 212: t2.ONE_MINUS_CONSTANT_COLOR, 213: t2.CONSTANT_ALPHA, 214: t2.ONE_MINUS_CONSTANT_ALPHA };
    function J2(e2, n2, i2, r2, s2, a2, o2, l3, c3, h3) {
      if (0 !== e2) {
        if (false === f && (j(t2.BLEND), f = true), 5 === e2) s2 = s2 || n2, a2 = a2 || i2, o2 = o2 || r2, n2 === _ && s2 === M || (t2.blendEquationSeparate(Y2[n2], Y2[s2]), _ = n2, M = s2), i2 === v && r2 === x && a2 === S && o2 === b || (t2.blendFuncSeparate(Z2[i2], Z2[r2], Z2[a2], Z2[o2]), v = i2, x = r2, S = a2, b = o2), false !== l3.equals(E) && c3 === T || (t2.blendColor(l3.r, l3.g, l3.b, c3), E.copy(l3), T = c3), g = e2, w = false;
        else if (e2 !== g || h3 !== w) {
          if (_ === y && M === y || (t2.blendEquation(t2.FUNC_ADD), _ = y, M = y), h3) switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.ONE, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.ONE, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFuncSeparate(t2.ZERO, t2.SRC_COLOR, t2.ZERO, t2.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          else switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.SRC_ALPHA, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.SRC_ALPHA, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFunc(t2.ZERO, t2.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          v = null, x = null, S = null, b = null, E.set(0, 0, 0), T = 0, g = e2, w = h3;
        }
      } else true === f && (q(t2.BLEND), f = false);
    }
    function K2(e2) {
      A !== e2 && (e2 ? t2.frontFace(t2.CW) : t2.frontFace(t2.CCW), A = e2);
    }
    function $2(e2) {
      0 !== e2 ? (j(t2.CULL_FACE), e2 !== R && (1 === e2 ? t2.cullFace(t2.BACK) : 2 === e2 ? t2.cullFace(t2.FRONT) : t2.cullFace(t2.FRONT_AND_BACK))) : q(t2.CULL_FACE), R = e2;
    }
    function Q2(e2, n2, i2) {
      e2 ? (j(t2.POLYGON_OFFSET_FILL), I === n2 && U === i2 || (t2.polygonOffset(n2, i2), I = n2, U = i2)) : q(t2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: r, depth: s, stencil: a }, enable: j, disable: q, bindFramebuffer: function(e2, n2) {
      return h2[e2] !== n2 && (t2.bindFramebuffer(e2, n2), h2[e2] = n2, i && (e2 === t2.DRAW_FRAMEBUFFER && (h2[t2.FRAMEBUFFER] = n2), e2 === t2.FRAMEBUFFER && (h2[t2.DRAW_FRAMEBUFFER] = n2)), true);
    }, drawBuffers: function(i2, r2) {
      let s2 = p, a2 = false;
      if (i2) if (s2 = u2.get(r2), void 0 === s2 && (s2 = [], u2.set(r2, s2)), i2.isWebGLMultipleRenderTargets) {
        const e2 = i2.texture;
        if (s2.length !== e2.length || s2[0] !== t2.COLOR_ATTACHMENT0) {
          for (let n2 = 0, i3 = e2.length; n2 < i3; n2++) s2[n2] = t2.COLOR_ATTACHMENT0 + n2;
          s2.length = e2.length, a2 = true;
        }
      } else s2[0] !== t2.COLOR_ATTACHMENT0 && (s2[0] = t2.COLOR_ATTACHMENT0, a2 = true);
      else s2[0] !== t2.BACK && (s2[0] = t2.BACK, a2 = true);
      a2 && (n.isWebGL2 ? t2.drawBuffers(s2) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s2));
    }, useProgram: function(e2) {
      return m !== e2 && (t2.useProgram(e2), m = e2, true);
    }, setBlending: J2, setMaterial: function(e2, n2) {
      2 === e2.side ? q(t2.CULL_FACE) : j(t2.CULL_FACE);
      let i2 = e2.side === d;
      n2 && (i2 = !i2), K2(i2), 1 === e2.blending && false === e2.transparent ? J2(0) : J2(e2.blending, e2.blendEquation, e2.blendSrc, e2.blendDst, e2.blendEquationAlpha, e2.blendSrcAlpha, e2.blendDstAlpha, e2.blendColor, e2.blendAlpha, e2.premultipliedAlpha), s.setFunc(e2.depthFunc), s.setTest(e2.depthTest), s.setMask(e2.depthWrite), r.setMask(e2.colorWrite);
      const o2 = e2.stencilWrite;
      a.setTest(o2), o2 && (a.setMask(e2.stencilWriteMask), a.setFunc(e2.stencilFunc, e2.stencilRef, e2.stencilFuncMask), a.setOp(e2.stencilFail, e2.stencilZFail, e2.stencilZPass)), Q2(e2.polygonOffset, e2.polygonOffsetFactor, e2.polygonOffsetUnits), true === e2.alphaToCoverage ? j(t2.SAMPLE_ALPHA_TO_COVERAGE) : q(t2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: K2, setCullFace: $2, setLineWidth: function(e2) {
      e2 !== L && (D && t2.lineWidth(e2), L = e2);
    }, setPolygonOffset: Q2, setScissorTest: function(e2) {
      e2 ? j(t2.SCISSOR_TEST) : q(t2.SCISSOR_TEST);
    }, activeTexture: function(e2) {
      void 0 === e2 && (e2 = t2.TEXTURE0 + N - 1), B !== e2 && (t2.activeTexture(e2), B = e2);
    }, bindTexture: function(e2, n2, i2) {
      void 0 === i2 && (i2 = null === B ? t2.TEXTURE0 + N - 1 : B);
      let r2 = z[i2];
      void 0 === r2 && (r2 = { type: void 0, texture: void 0 }, z[i2] = r2), r2.type === e2 && r2.texture === n2 || (B !== i2 && (t2.activeTexture(i2), B = i2), t2.bindTexture(e2, n2 || X[e2]), r2.type = e2, r2.texture = n2);
    }, unbindTexture: function() {
      const e2 = z[B];
      void 0 !== e2 && void 0 !== e2.type && (t2.bindTexture(e2.type, null), e2.type = void 0, e2.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        t2.compressedTexImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexImage3D: function() {
      try {
        t2.compressedTexImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage2D: function() {
      try {
        t2.texImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage3D: function() {
      try {
        t2.texImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, updateUBOMapping: function(e2, n2) {
      let i2 = l2.get(n2);
      void 0 === i2 && (i2 = /* @__PURE__ */ new WeakMap(), l2.set(n2, i2));
      let r2 = i2.get(e2);
      void 0 === r2 && (r2 = t2.getUniformBlockIndex(n2, e2.name), i2.set(e2, r2));
    }, uniformBlockBinding: function(e2, n2) {
      const i2 = l2.get(n2).get(e2);
      o.get(n2) !== i2 && (t2.uniformBlockBinding(n2, i2, e2.__bindingPointIndex), o.set(n2, i2));
    }, texStorage2D: function() {
      try {
        t2.texStorage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texStorage3D: function() {
      try {
        t2.texStorage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage2D: function() {
      try {
        t2.texSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage3D: function() {
      try {
        t2.texSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        t2.compressedTexSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        t2.compressedTexSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, scissor: function(e2) {
      false === k.equals(e2) && (t2.scissor(e2.x, e2.y, e2.z, e2.w), k.copy(e2));
    }, viewport: function(e2) {
      false === G.equals(e2) && (t2.viewport(e2.x, e2.y, e2.z, e2.w), G.copy(e2));
    }, reset: function() {
      t2.disable(t2.BLEND), t2.disable(t2.CULL_FACE), t2.disable(t2.DEPTH_TEST), t2.disable(t2.POLYGON_OFFSET_FILL), t2.disable(t2.SCISSOR_TEST), t2.disable(t2.STENCIL_TEST), t2.disable(t2.SAMPLE_ALPHA_TO_COVERAGE), t2.blendEquation(t2.FUNC_ADD), t2.blendFunc(t2.ONE, t2.ZERO), t2.blendFuncSeparate(t2.ONE, t2.ZERO, t2.ONE, t2.ZERO), t2.blendColor(0, 0, 0, 0), t2.colorMask(true, true, true, true), t2.clearColor(0, 0, 0, 0), t2.depthMask(true), t2.depthFunc(t2.LESS), t2.clearDepth(1), t2.stencilMask(4294967295), t2.stencilFunc(t2.ALWAYS, 0, 4294967295), t2.stencilOp(t2.KEEP, t2.KEEP, t2.KEEP), t2.clearStencil(0), t2.cullFace(t2.BACK), t2.frontFace(t2.CCW), t2.polygonOffset(0, 0), t2.activeTexture(t2.TEXTURE0), t2.bindFramebuffer(t2.FRAMEBUFFER, null), true === i && (t2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), t2.bindFramebuffer(t2.READ_FRAMEBUFFER, null)), t2.useProgram(null), t2.lineWidth(1), t2.scissor(0, 0, t2.canvas.width, t2.canvas.height), t2.viewport(0, 0, t2.canvas.width, t2.canvas.height), c2 = {}, B = null, z = {}, h2 = {}, u2 = /* @__PURE__ */ new WeakMap(), p = [], m = null, f = false, g = null, _ = null, v = null, x = null, M = null, S = null, b = null, E = new Zr(0, 0, 0), T = 0, w = false, A = null, R = null, L = null, I = null, U = null, k.set(0, 0, t2.canvas.width, t2.canvas.height), G.set(0, 0, t2.canvas.width, t2.canvas.height), r.reset(), s.reset(), a.reset();
    } };
  }
  function kl(t2, e, n, i, r, s, a) {
    const o = r.isWebGL2, l2 = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), h2 = /* @__PURE__ */ new WeakMap();
    let u2;
    const d2 = /* @__PURE__ */ new WeakMap();
    let p = false;
    try {
      p = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t3) {
    }
    function m(t3, e2) {
      return p ? new OffscreenCanvas(t3, e2) : si("canvas");
    }
    function f(t3, e2, n2, i2) {
      let r2 = 1;
      if ((t3.width > i2 || t3.height > i2) && (r2 = i2 / Math.max(t3.width, t3.height)), r2 < 1 || true === e2) {
        if ("undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap) {
          const i3 = e2 ? Zn : Math.floor, s2 = i3(r2 * t3.width), a2 = i3(r2 * t3.height);
          void 0 === u2 && (u2 = m(s2, a2));
          const o2 = n2 ? m(s2, a2) : u2;
          o2.width = s2, o2.height = a2;
          return o2.getContext("2d").drawImage(t3, 0, 0, s2, a2), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t3.width + "x" + t3.height + ") to (" + s2 + "x" + a2 + ")."), o2;
        }
        return "data" in t3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t3.width + "x" + t3.height + ")."), t3;
      }
      return t3;
    }
    function g(t3) {
      return Yn(t3.width) && Yn(t3.height);
    }
    function _(t3, e2) {
      return t3.generateMipmaps && e2 && t3.minFilter !== ft && t3.minFilter !== yt;
    }
    function v(e2) {
      t2.generateMipmap(e2);
    }
    function x(n2, i2, r2, s2, a2 = false) {
      if (false === o) return i2;
      if (null !== n2) {
        if (void 0 !== t2[n2]) return t2[n2];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n2 + "'");
      }
      let l3 = i2;
      if (i2 === t2.RED && (r2 === t2.FLOAT && (l3 = t2.R32F), r2 === t2.HALF_FLOAT && (l3 = t2.R16F), r2 === t2.UNSIGNED_BYTE && (l3 = t2.R8)), i2 === t2.RED_INTEGER && (r2 === t2.UNSIGNED_BYTE && (l3 = t2.R8UI), r2 === t2.UNSIGNED_SHORT && (l3 = t2.R16UI), r2 === t2.UNSIGNED_INT && (l3 = t2.R32UI), r2 === t2.BYTE && (l3 = t2.R8I), r2 === t2.SHORT && (l3 = t2.R16I), r2 === t2.INT && (l3 = t2.R32I)), i2 === t2.RG && (r2 === t2.FLOAT && (l3 = t2.RG32F), r2 === t2.HALF_FLOAT && (l3 = t2.RG16F), r2 === t2.UNSIGNED_BYTE && (l3 = t2.RG8)), i2 === t2.RGBA) {
        const e2 = a2 ? Je : pi.getTransfer(s2);
        r2 === t2.FLOAT && (l3 = t2.RGBA32F), r2 === t2.HALF_FLOAT && (l3 = t2.RGBA16F), r2 === t2.UNSIGNED_BYTE && (l3 = e2 === Ke ? t2.SRGB8_ALPHA8 : t2.RGBA8), r2 === t2.UNSIGNED_SHORT_4_4_4_4 && (l3 = t2.RGBA4), r2 === t2.UNSIGNED_SHORT_5_5_5_1 && (l3 = t2.RGB5_A1);
      }
      return l3 !== t2.R16F && l3 !== t2.R32F && l3 !== t2.RG16F && l3 !== t2.RG32F && l3 !== t2.RGBA16F && l3 !== t2.RGBA32F || e.get("EXT_color_buffer_float"), l3;
    }
    function y2(t3, e2, n2) {
      return true === _(t3, n2) || t3.isFramebufferTexture && t3.minFilter !== ft && t3.minFilter !== yt ? Math.log2(Math.max(e2.width, e2.height)) + 1 : void 0 !== t3.mipmaps && t3.mipmaps.length > 0 ? t3.mipmaps.length : t3.isCompressedTexture && Array.isArray(t3.image) ? e2.mipmaps.length : 1;
    }
    function M(e2) {
      return e2 === ft || e2 === gt || e2 === vt ? t2.NEAREST : t2.LINEAR;
    }
    function S(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", S), (function(t4) {
        const e3 = i.get(t4);
        if (void 0 === e3.__webglInit) return;
        const n2 = t4.source, r2 = d2.get(n2);
        if (r2) {
          const i2 = r2[e3.__cacheKey];
          i2.usedTimes--, 0 === i2.usedTimes && E(t4), 0 === Object.keys(r2).length && d2.delete(n2);
        }
        i.remove(t4);
      })(e2), e2.isVideoTexture && h2.delete(e2);
    }
    function b(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", b), (function(e3) {
        const n3 = e3.texture, r2 = i.get(e3), s2 = i.get(n3);
        void 0 !== s2.__webglTexture && (t2.deleteTexture(s2.__webglTexture), a.memory.textures--);
        e3.depthTexture && e3.depthTexture.dispose();
        if (e3.isWebGLCubeRenderTarget) for (let e4 = 0; e4 < 6; e4++) {
          if (Array.isArray(r2.__webglFramebuffer[e4])) for (let n4 = 0; n4 < r2.__webglFramebuffer[e4].length; n4++) t2.deleteFramebuffer(r2.__webglFramebuffer[e4][n4]);
          else t2.deleteFramebuffer(r2.__webglFramebuffer[e4]);
          r2.__webglDepthbuffer && t2.deleteRenderbuffer(r2.__webglDepthbuffer[e4]);
        }
        else {
          if (Array.isArray(r2.__webglFramebuffer)) for (let e4 = 0; e4 < r2.__webglFramebuffer.length; e4++) t2.deleteFramebuffer(r2.__webglFramebuffer[e4]);
          else t2.deleteFramebuffer(r2.__webglFramebuffer);
          if (r2.__webglDepthbuffer && t2.deleteRenderbuffer(r2.__webglDepthbuffer), r2.__webglMultisampledFramebuffer && t2.deleteFramebuffer(r2.__webglMultisampledFramebuffer), r2.__webglColorRenderbuffer) for (let e4 = 0; e4 < r2.__webglColorRenderbuffer.length; e4++) r2.__webglColorRenderbuffer[e4] && t2.deleteRenderbuffer(r2.__webglColorRenderbuffer[e4]);
          r2.__webglDepthRenderbuffer && t2.deleteRenderbuffer(r2.__webglDepthRenderbuffer);
        }
        if (e3.isWebGLMultipleRenderTargets) for (let e4 = 0, r3 = n3.length; e4 < r3; e4++) {
          const r4 = i.get(n3[e4]);
          r4.__webglTexture && (t2.deleteTexture(r4.__webglTexture), a.memory.textures--), i.remove(n3[e4]);
        }
        i.remove(n3), i.remove(e3);
      })(n2);
    }
    function E(e2) {
      const n2 = i.get(e2);
      t2.deleteTexture(n2.__webglTexture);
      const r2 = e2.source;
      delete d2.get(r2)[n2.__cacheKey], a.memory.textures--;
    }
    let T = 0;
    function w(e2, r2) {
      const s2 = i.get(e2);
      if (e2.isVideoTexture && (function(t3) {
        const e3 = a.render.frame;
        h2.get(t3) !== e3 && (h2.set(t3, e3), t3.update());
      })(e2), false === e2.isRenderTargetTexture && e2.version > 0 && s2.__version !== e2.version) {
        const t3 = e2.image;
        if (null === t3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== t3.complete) return void I(s2, e2, r2);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }
      n.bindTexture(t2.TEXTURE_2D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }
    const A = { [dt]: t2.REPEAT, [pt]: t2.CLAMP_TO_EDGE, [mt]: t2.MIRRORED_REPEAT }, R = { [ft]: t2.NEAREST, [gt]: t2.NEAREST_MIPMAP_NEAREST, [vt]: t2.NEAREST_MIPMAP_LINEAR, [yt]: t2.LINEAR, [Mt]: t2.LINEAR_MIPMAP_NEAREST, [bt]: t2.LINEAR_MIPMAP_LINEAR }, C2 = { 512: t2.NEVER, 519: t2.ALWAYS, 513: t2.LESS, 515: t2.LEQUAL, 514: t2.EQUAL, 518: t2.GEQUAL, 516: t2.GREATER, 517: t2.NOTEQUAL };
    function P2(n2, s2, a2) {
      if (s2.type !== Lt || false !== e.has("OES_texture_float_linear") || s2.magFilter !== yt && s2.magFilter !== Mt && s2.magFilter !== vt && s2.magFilter !== bt && s2.minFilter !== yt && s2.minFilter !== Mt && s2.minFilter !== vt && s2.minFilter !== bt || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), a2 ? (t2.texParameteri(n2, t2.TEXTURE_WRAP_S, A[s2.wrapS]), t2.texParameteri(n2, t2.TEXTURE_WRAP_T, A[s2.wrapT]), n2 !== t2.TEXTURE_3D && n2 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n2, t2.TEXTURE_WRAP_R, A[s2.wrapR]), t2.texParameteri(n2, t2.TEXTURE_MAG_FILTER, R[s2.magFilter]), t2.texParameteri(n2, t2.TEXTURE_MIN_FILTER, R[s2.minFilter])) : (t2.texParameteri(n2, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(n2, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), n2 !== t2.TEXTURE_3D && n2 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n2, t2.TEXTURE_WRAP_R, t2.CLAMP_TO_EDGE), s2.wrapS === pt && s2.wrapT === pt || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t2.texParameteri(n2, t2.TEXTURE_MAG_FILTER, M(s2.magFilter)), t2.texParameteri(n2, t2.TEXTURE_MIN_FILTER, M(s2.minFilter)), s2.minFilter !== ft && s2.minFilter !== yt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), s2.compareFunction && (t2.texParameteri(n2, t2.TEXTURE_COMPARE_MODE, t2.COMPARE_REF_TO_TEXTURE), t2.texParameteri(n2, t2.TEXTURE_COMPARE_FUNC, C2[s2.compareFunction])), true === e.has("EXT_texture_filter_anisotropic")) {
        const a3 = e.get("EXT_texture_filter_anisotropic");
        if (s2.magFilter === ft) return;
        if (s2.minFilter !== vt && s2.minFilter !== bt) return;
        if (s2.type === Lt && false === e.has("OES_texture_float_linear")) return;
        if (false === o && s2.type === It && false === e.has("OES_texture_half_float_linear")) return;
        (s2.anisotropy > 1 || i.get(s2).__currentAnisotropy) && (t2.texParameterf(n2, a3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s2.anisotropy, r.getMaxAnisotropy())), i.get(s2).__currentAnisotropy = s2.anisotropy);
      }
    }
    function L(e2, n2) {
      let i2 = false;
      void 0 === e2.__webglInit && (e2.__webglInit = true, n2.addEventListener("dispose", S));
      const r2 = n2.source;
      let s2 = d2.get(r2);
      void 0 === s2 && (s2 = {}, d2.set(r2, s2));
      const o2 = (function(t3) {
        const e3 = [];
        return e3.push(t3.wrapS), e3.push(t3.wrapT), e3.push(t3.wrapR || 0), e3.push(t3.magFilter), e3.push(t3.minFilter), e3.push(t3.anisotropy), e3.push(t3.internalFormat), e3.push(t3.format), e3.push(t3.type), e3.push(t3.generateMipmaps), e3.push(t3.premultiplyAlpha), e3.push(t3.flipY), e3.push(t3.unpackAlignment), e3.push(t3.colorSpace), e3.join();
      })(n2);
      if (o2 !== e2.__cacheKey) {
        void 0 === s2[o2] && (s2[o2] = { texture: t2.createTexture(), usedTimes: 0 }, a.memory.textures++, i2 = true), s2[o2].usedTimes++;
        const r3 = s2[e2.__cacheKey];
        void 0 !== r3 && (s2[e2.__cacheKey].usedTimes--, 0 === r3.usedTimes && E(n2)), e2.__cacheKey = o2, e2.__webglTexture = s2[o2].texture;
      }
      return i2;
    }
    function I(e2, a2, l3) {
      let c3 = t2.TEXTURE_2D;
      (a2.isDataArrayTexture || a2.isCompressedArrayTexture) && (c3 = t2.TEXTURE_2D_ARRAY), a2.isData3DTexture && (c3 = t2.TEXTURE_3D);
      const h3 = L(e2, a2), u3 = a2.source;
      n.bindTexture(c3, e2.__webglTexture, t2.TEXTURE0 + l3);
      const d3 = i.get(u3);
      if (u3.version !== d3.__version || true === h3) {
        n.activeTexture(t2.TEXTURE0 + l3);
        const e3 = pi.getPrimaries(pi.workingColorSpace), i2 = a2.colorSpace === Xe ? null : pi.getPrimaries(a2.colorSpace), p2 = a2.colorSpace === Xe || e3 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
        t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a2.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a2.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a2.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, p2);
        const m2 = (function(t3) {
          return !o && (t3.wrapS !== pt || t3.wrapT !== pt || t3.minFilter !== ft && t3.minFilter !== yt);
        })(a2) && false === g(a2.image);
        let M2 = f(a2.image, m2, false, r.maxTextureSize);
        M2 = B(a2, M2);
        const S2 = g(M2) || o, b2 = s.convert(a2.format, a2.colorSpace);
        let E2, T2 = s.convert(a2.type), w2 = x(a2.internalFormat, b2, T2, a2.colorSpace, a2.isVideoTexture);
        P2(c3, a2, S2);
        const A2 = a2.mipmaps, R2 = o && true !== a2.isVideoTexture && w2 !== ee, C3 = void 0 === d3.__version || true === h3, L2 = u3.dataReady, I2 = y2(a2, M2, S2);
        if (a2.isDepthTexture) w2 = t2.DEPTH_COMPONENT, o ? w2 = a2.type === Lt ? t2.DEPTH_COMPONENT32F : a2.type === Pt ? t2.DEPTH_COMPONENT24 : a2.type === Dt ? t2.DEPTH24_STENCIL8 : t2.DEPTH_COMPONENT16 : a2.type === Lt && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), a2.format === Ht && w2 === t2.DEPTH_COMPONENT && a2.type !== Rt && a2.type !== Pt && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), a2.type = Pt, T2 = s.convert(a2.type)), a2.format === Vt && w2 === t2.DEPTH_COMPONENT && (w2 = t2.DEPTH_STENCIL, a2.type !== Dt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), a2.type = Dt, T2 = s.convert(a2.type))), C3 && (R2 ? n.texStorage2D(t2.TEXTURE_2D, 1, w2, M2.width, M2.height) : n.texImage2D(t2.TEXTURE_2D, 0, w2, M2.width, M2.height, 0, b2, T2, null));
        else if (a2.isDataTexture) if (A2.length > 0 && S2) {
          R2 && C3 && n.texStorage2D(t2.TEXTURE_2D, I2, w2, A2[0].width, A2[0].height);
          for (let e4 = 0, i3 = A2.length; e4 < i3; e4++) E2 = A2[e4], R2 ? L2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, E2.width, E2.height, b2, T2, E2.data) : n.texImage2D(t2.TEXTURE_2D, e4, w2, E2.width, E2.height, 0, b2, T2, E2.data);
          a2.generateMipmaps = false;
        } else R2 ? (C3 && n.texStorage2D(t2.TEXTURE_2D, I2, w2, M2.width, M2.height), L2 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, M2.width, M2.height, b2, T2, M2.data)) : n.texImage2D(t2.TEXTURE_2D, 0, w2, M2.width, M2.height, 0, b2, T2, M2.data);
        else if (a2.isCompressedTexture) if (a2.isCompressedArrayTexture) {
          R2 && C3 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, I2, w2, A2[0].width, A2[0].height, M2.depth);
          for (let e4 = 0, i3 = A2.length; e4 < i3; e4++) E2 = A2[e4], a2.format !== Ft ? null !== b2 ? R2 ? L2 && n.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, E2.width, E2.height, M2.depth, b2, E2.data, 0, 0) : n.compressedTexImage3D(t2.TEXTURE_2D_ARRAY, e4, w2, E2.width, E2.height, M2.depth, 0, E2.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R2 ? L2 && n.texSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, E2.width, E2.height, M2.depth, b2, T2, E2.data) : n.texImage3D(t2.TEXTURE_2D_ARRAY, e4, w2, E2.width, E2.height, M2.depth, 0, b2, T2, E2.data);
        } else {
          R2 && C3 && n.texStorage2D(t2.TEXTURE_2D, I2, w2, A2[0].width, A2[0].height);
          for (let e4 = 0, i3 = A2.length; e4 < i3; e4++) E2 = A2[e4], a2.format !== Ft ? null !== b2 ? R2 ? L2 && n.compressedTexSubImage2D(t2.TEXTURE_2D, e4, 0, 0, E2.width, E2.height, b2, E2.data) : n.compressedTexImage2D(t2.TEXTURE_2D, e4, w2, E2.width, E2.height, 0, E2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R2 ? L2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, E2.width, E2.height, b2, T2, E2.data) : n.texImage2D(t2.TEXTURE_2D, e4, w2, E2.width, E2.height, 0, b2, T2, E2.data);
        }
        else if (a2.isDataArrayTexture) R2 ? (C3 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, I2, w2, M2.width, M2.height, M2.depth), L2 && n.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, M2.width, M2.height, M2.depth, b2, T2, M2.data)) : n.texImage3D(t2.TEXTURE_2D_ARRAY, 0, w2, M2.width, M2.height, M2.depth, 0, b2, T2, M2.data);
        else if (a2.isData3DTexture) R2 ? (C3 && n.texStorage3D(t2.TEXTURE_3D, I2, w2, M2.width, M2.height, M2.depth), L2 && n.texSubImage3D(t2.TEXTURE_3D, 0, 0, 0, 0, M2.width, M2.height, M2.depth, b2, T2, M2.data)) : n.texImage3D(t2.TEXTURE_3D, 0, w2, M2.width, M2.height, M2.depth, 0, b2, T2, M2.data);
        else if (a2.isFramebufferTexture) {
          if (C3) if (R2) n.texStorage2D(t2.TEXTURE_2D, I2, w2, M2.width, M2.height);
          else {
            let e4 = M2.width, i3 = M2.height;
            for (let r2 = 0; r2 < I2; r2++) n.texImage2D(t2.TEXTURE_2D, r2, w2, e4, i3, 0, b2, T2, null), e4 >>= 1, i3 >>= 1;
          }
        } else if (A2.length > 0 && S2) {
          R2 && C3 && n.texStorage2D(t2.TEXTURE_2D, I2, w2, A2[0].width, A2[0].height);
          for (let e4 = 0, i3 = A2.length; e4 < i3; e4++) E2 = A2[e4], R2 ? L2 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, b2, T2, E2) : n.texImage2D(t2.TEXTURE_2D, e4, w2, b2, T2, E2);
          a2.generateMipmaps = false;
        } else R2 ? (C3 && n.texStorage2D(t2.TEXTURE_2D, I2, w2, M2.width, M2.height), L2 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, b2, T2, M2)) : n.texImage2D(t2.TEXTURE_2D, 0, w2, b2, T2, M2);
        _(a2, S2) && v(c3), d3.__version = u3.version, a2.onUpdate && a2.onUpdate(a2);
      }
      e2.__version = a2.version;
    }
    function U(e2, r2, a2, o2, c3, h3) {
      const u3 = s.convert(a2.format, a2.colorSpace), d3 = s.convert(a2.type), p2 = x(a2.internalFormat, u3, d3, a2.colorSpace);
      if (!i.get(r2).__hasExternalTextures) {
        const e3 = Math.max(1, r2.width >> h3), i2 = Math.max(1, r2.height >> h3);
        c3 === t2.TEXTURE_3D || c3 === t2.TEXTURE_2D_ARRAY ? n.texImage3D(c3, h3, p2, e3, i2, r2.depth, 0, u3, d3, null) : n.texImage2D(c3, h3, p2, e3, i2, 0, u3, d3, null);
      }
      n.bindFramebuffer(t2.FRAMEBUFFER, e2), F(r2) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, o2, c3, i.get(a2).__webglTexture, 0, O(r2)) : (c3 === t2.TEXTURE_2D || c3 >= t2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= t2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t2.framebufferTexture2D(t2.FRAMEBUFFER, o2, c3, i.get(a2).__webglTexture, h3), n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function N(e2, n2, i2) {
      if (t2.bindRenderbuffer(t2.RENDERBUFFER, e2), n2.depthBuffer && !n2.stencilBuffer) {
        let r2 = true === o ? t2.DEPTH_COMPONENT24 : t2.DEPTH_COMPONENT16;
        if (i2 || F(n2)) {
          const e3 = n2.depthTexture;
          e3 && e3.isDepthTexture && (e3.type === Lt ? r2 = t2.DEPTH_COMPONENT32F : e3.type === Pt && (r2 = t2.DEPTH_COMPONENT24));
          const i3 = O(n2);
          F(n2) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, i3, r2, n2.width, n2.height) : t2.renderbufferStorageMultisample(t2.RENDERBUFFER, i3, r2, n2.width, n2.height);
        } else t2.renderbufferStorage(t2.RENDERBUFFER, r2, n2.width, n2.height);
        t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.RENDERBUFFER, e2);
      } else if (n2.depthBuffer && n2.stencilBuffer) {
        const r2 = O(n2);
        i2 && false === F(n2) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, r2, t2.DEPTH24_STENCIL8, n2.width, n2.height) : F(n2) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, r2, t2.DEPTH24_STENCIL8, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, t2.DEPTH_STENCIL, n2.width, n2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.RENDERBUFFER, e2);
      } else {
        const e3 = true === n2.isWebGLMultipleRenderTargets ? n2.texture : [n2.texture];
        for (let r2 = 0; r2 < e3.length; r2++) {
          const a2 = e3[r2], o2 = s.convert(a2.format, a2.colorSpace), c3 = s.convert(a2.type), h3 = x(a2.internalFormat, o2, c3, a2.colorSpace), u3 = O(n2);
          i2 && false === F(n2) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, u3, h3, n2.width, n2.height) : F(n2) ? l2.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, u3, h3, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, h3, n2.width, n2.height);
        }
      }
      t2.bindRenderbuffer(t2.RENDERBUFFER, null);
    }
    function D(e2) {
      const r2 = i.get(e2), s2 = true === e2.isWebGLCubeRenderTarget;
      if (e2.depthTexture && !r2.__autoAllocateDepthBuffer) {
        if (s2) throw new Error("target.depthTexture not supported in Cube render targets");
        !(function(e3, r3) {
          if (r3 && r3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(t2.FRAMEBUFFER, e3), !r3.depthTexture || !r3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          i.get(r3.depthTexture).__webglTexture && r3.depthTexture.image.width === r3.width && r3.depthTexture.image.height === r3.height || (r3.depthTexture.image.width = r3.width, r3.depthTexture.image.height = r3.height, r3.depthTexture.needsUpdate = true), w(r3.depthTexture, 0);
          const s3 = i.get(r3.depthTexture).__webglTexture, a2 = O(r3);
          if (r3.depthTexture.format === Ht) F(r3) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          else {
            if (r3.depthTexture.format !== Vt) throw new Error("Unknown depthTexture format");
            F(r3) ? l2.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0, a2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, s3, 0);
          }
        })(r2.__webglFramebuffer, e2);
      } else if (s2) {
        r2.__webglDepthbuffer = [];
        for (let i2 = 0; i2 < 6; i2++) n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer[i2]), r2.__webglDepthbuffer[i2] = t2.createRenderbuffer(), N(r2.__webglDepthbuffer[i2], e2, false);
      } else n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer), r2.__webglDepthbuffer = t2.createRenderbuffer(), N(r2.__webglDepthbuffer, e2, false);
      n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function O(t3) {
      return Math.min(r.maxSamples, t3.samples);
    }
    function F(t3) {
      const n2 = i.get(t3);
      return o && t3.samples > 0 && true === e.has("WEBGL_multisampled_render_to_texture") && false !== n2.__useRenderToTexture;
    }
    function B(t3, n2) {
      const i2 = t3.colorSpace, r2 = t3.format, s2 = t3.type;
      return true === t3.isCompressedTexture || true === t3.isVideoTexture || t3.format === On || i2 !== qe && i2 !== Xe && (pi.getTransfer(i2) === Ke ? false === o ? true === e.has("EXT_sRGB") && r2 === Ft ? (t3.format = On, t3.minFilter = yt, t3.generateMipmaps = false) : n2 = _i.sRGBToLinear(n2) : r2 === Ft && s2 === Tt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", i2)), n2;
    }
    this.allocateTextureUnit = function() {
      const t3 = T;
      return t3 >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t3 + " texture units while this GPU supports only " + r.maxTextures), T += 1, t3;
    }, this.resetTextureUnits = function() {
      T = 0;
    }, this.setTexture2D = w, this.setTexture2DArray = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? I(s2, e2, r2) : n.bindTexture(t2.TEXTURE_2D_ARRAY, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTexture3D = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? I(s2, e2, r2) : n.bindTexture(t2.TEXTURE_3D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTextureCube = function(e2, a2) {
      const l3 = i.get(e2);
      e2.version > 0 && l3.__version !== e2.version ? (function(e3, a3, l4) {
        if (6 !== a3.image.length) return;
        const c3 = L(e3, a3), h3 = a3.source;
        n.bindTexture(t2.TEXTURE_CUBE_MAP, e3.__webglTexture, t2.TEXTURE0 + l4);
        const u3 = i.get(h3);
        if (h3.version !== u3.__version || true === c3) {
          n.activeTexture(t2.TEXTURE0 + l4);
          const e4 = pi.getPrimaries(pi.workingColorSpace), i2 = a3.colorSpace === Xe ? null : pi.getPrimaries(a3.colorSpace), d3 = a3.colorSpace === Xe || e4 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
          t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a3.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a3.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a3.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, d3);
          const p2 = a3.isCompressedTexture || a3.image[0].isCompressedTexture, m2 = a3.image[0] && a3.image[0].isDataTexture, M2 = [];
          for (let t3 = 0; t3 < 6; t3++) M2[t3] = p2 || m2 ? m2 ? a3.image[t3].image : a3.image[t3] : f(a3.image[t3], false, true, r.maxCubemapSize), M2[t3] = B(a3, M2[t3]);
          const S2 = M2[0], b2 = g(S2) || o, E2 = s.convert(a3.format, a3.colorSpace), T2 = s.convert(a3.type), w2 = x(a3.internalFormat, E2, T2, a3.colorSpace), A2 = o && true !== a3.isVideoTexture, R2 = void 0 === u3.__version || true === c3, C3 = h3.dataReady;
          let L2, I2 = y2(a3, S2, b2);
          if (P2(t2.TEXTURE_CUBE_MAP, a3, b2), p2) {
            A2 && R2 && n.texStorage2D(t2.TEXTURE_CUBE_MAP, I2, w2, S2.width, S2.height);
            for (let e5 = 0; e5 < 6; e5++) {
              L2 = M2[e5].mipmaps;
              for (let i3 = 0; i3 < L2.length; i3++) {
                const r2 = L2[i3];
                a3.format !== Ft ? null !== E2 ? A2 ? C3 && n.compressedTexSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, E2, r2.data) : n.compressedTexImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, w2, r2.width, r2.height, 0, r2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : A2 ? C3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, E2, T2, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, w2, r2.width, r2.height, 0, E2, T2, r2.data);
              }
            }
          } else {
            L2 = a3.mipmaps, A2 && R2 && (L2.length > 0 && I2++, n.texStorage2D(t2.TEXTURE_CUBE_MAP, I2, w2, M2[0].width, M2[0].height));
            for (let e5 = 0; e5 < 6; e5++) if (m2) {
              A2 ? C3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, M2[e5].width, M2[e5].height, E2, T2, M2[e5].data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, w2, M2[e5].width, M2[e5].height, 0, E2, T2, M2[e5].data);
              for (let i3 = 0; i3 < L2.length; i3++) {
                const r2 = L2[i3].image[e5].image;
                A2 ? C3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, r2.width, r2.height, E2, T2, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, w2, r2.width, r2.height, 0, E2, T2, r2.data);
              }
            } else {
              A2 ? C3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, E2, T2, M2[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, w2, E2, T2, M2[e5]);
              for (let i3 = 0; i3 < L2.length; i3++) {
                const r2 = L2[i3];
                A2 ? C3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, E2, T2, r2.image[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, w2, E2, T2, r2.image[e5]);
              }
            }
          }
          _(a3, b2) && v(t2.TEXTURE_CUBE_MAP), u3.__version = h3.version, a3.onUpdate && a3.onUpdate(a3);
        }
        e3.__version = a3.version;
      })(l3, e2, a2) : n.bindTexture(t2.TEXTURE_CUBE_MAP, l3.__webglTexture, t2.TEXTURE0 + a2);
    }, this.rebindTextures = function(e2, n2, r2) {
      const s2 = i.get(e2);
      void 0 !== n2 && U(s2.__webglFramebuffer, e2, e2.texture, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, 0), void 0 !== r2 && D(e2);
    }, this.setupRenderTarget = function(e2) {
      const l3 = e2.texture, c3 = i.get(e2), h3 = i.get(l3);
      e2.addEventListener("dispose", b), true !== e2.isWebGLMultipleRenderTargets && (void 0 === h3.__webglTexture && (h3.__webglTexture = t2.createTexture()), h3.__version = l3.version, a.memory.textures++);
      const u3 = true === e2.isWebGLCubeRenderTarget, d3 = true === e2.isWebGLMultipleRenderTargets, p2 = g(e2) || o;
      if (u3) {
        c3.__webglFramebuffer = [];
        for (let e3 = 0; e3 < 6; e3++) if (o && l3.mipmaps && l3.mipmaps.length > 0) {
          c3.__webglFramebuffer[e3] = [];
          for (let n2 = 0; n2 < l3.mipmaps.length; n2++) c3.__webglFramebuffer[e3][n2] = t2.createFramebuffer();
        } else c3.__webglFramebuffer[e3] = t2.createFramebuffer();
      } else {
        if (o && l3.mipmaps && l3.mipmaps.length > 0) {
          c3.__webglFramebuffer = [];
          for (let e3 = 0; e3 < l3.mipmaps.length; e3++) c3.__webglFramebuffer[e3] = t2.createFramebuffer();
        } else c3.__webglFramebuffer = t2.createFramebuffer();
        if (d3) if (r.drawBuffers) {
          const n2 = e2.texture;
          for (let e3 = 0, r2 = n2.length; e3 < r2; e3++) {
            const r3 = i.get(n2[e3]);
            void 0 === r3.__webglTexture && (r3.__webglTexture = t2.createTexture(), a.memory.textures++);
          }
        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        if (o && e2.samples > 0 && false === F(e2)) {
          const i2 = d3 ? l3 : [l3];
          c3.__webglMultisampledFramebuffer = t2.createFramebuffer(), c3.__webglColorRenderbuffer = [], n.bindFramebuffer(t2.FRAMEBUFFER, c3.__webglMultisampledFramebuffer);
          for (let n2 = 0; n2 < i2.length; n2++) {
            const r2 = i2[n2];
            c3.__webglColorRenderbuffer[n2] = t2.createRenderbuffer(), t2.bindRenderbuffer(t2.RENDERBUFFER, c3.__webglColorRenderbuffer[n2]);
            const a2 = s.convert(r2.format, r2.colorSpace), o2 = s.convert(r2.type), l4 = x(r2.internalFormat, a2, o2, r2.colorSpace, true === e2.isXRRenderTarget), h4 = O(e2);
            t2.renderbufferStorageMultisample(t2.RENDERBUFFER, h4, l4, e2.width, e2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + n2, t2.RENDERBUFFER, c3.__webglColorRenderbuffer[n2]);
          }
          t2.bindRenderbuffer(t2.RENDERBUFFER, null), e2.depthBuffer && (c3.__webglDepthRenderbuffer = t2.createRenderbuffer(), N(c3.__webglDepthRenderbuffer, e2, true)), n.bindFramebuffer(t2.FRAMEBUFFER, null);
        }
      }
      if (u3) {
        n.bindTexture(t2.TEXTURE_CUBE_MAP, h3.__webglTexture), P2(t2.TEXTURE_CUBE_MAP, l3, p2);
        for (let n2 = 0; n2 < 6; n2++) if (o && l3.mipmaps && l3.mipmaps.length > 0) for (let i2 = 0; i2 < l3.mipmaps.length; i2++) U(c3.__webglFramebuffer[n2][i2], e2, l3, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, i2);
        else U(c3.__webglFramebuffer[n2], e2, l3, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, 0);
        _(l3, p2) && v(t2.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (d3) {
        const r2 = e2.texture;
        for (let s2 = 0, a2 = r2.length; s2 < a2; s2++) {
          const a3 = r2[s2], o2 = i.get(a3);
          n.bindTexture(t2.TEXTURE_2D, o2.__webglTexture), P2(t2.TEXTURE_2D, a3, p2), U(c3.__webglFramebuffer, e2, a3, t2.COLOR_ATTACHMENT0 + s2, t2.TEXTURE_2D, 0), _(a3, p2) && v(t2.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i2 = t2.TEXTURE_2D;
        if ((e2.isWebGL3DRenderTarget || e2.isWebGLArrayRenderTarget) && (o ? i2 = e2.isWebGL3DRenderTarget ? t2.TEXTURE_3D : t2.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(i2, h3.__webglTexture), P2(i2, l3, p2), o && l3.mipmaps && l3.mipmaps.length > 0) for (let n2 = 0; n2 < l3.mipmaps.length; n2++) U(c3.__webglFramebuffer[n2], e2, l3, t2.COLOR_ATTACHMENT0, i2, n2);
        else U(c3.__webglFramebuffer, e2, l3, t2.COLOR_ATTACHMENT0, i2, 0);
        _(l3, p2) && v(i2), n.unbindTexture();
      }
      e2.depthBuffer && D(e2);
    }, this.updateRenderTargetMipmap = function(e2) {
      const r2 = g(e2) || o, s2 = true === e2.isWebGLMultipleRenderTargets ? e2.texture : [e2.texture];
      for (let a2 = 0, o2 = s2.length; a2 < o2; a2++) {
        const o3 = s2[a2];
        if (_(o3, r2)) {
          const r3 = e2.isWebGLCubeRenderTarget ? t2.TEXTURE_CUBE_MAP : t2.TEXTURE_2D, s3 = i.get(o3).__webglTexture;
          n.bindTexture(r3, s3), v(r3), n.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(e2) {
      if (o && e2.samples > 0 && false === F(e2)) {
        const r2 = e2.isWebGLMultipleRenderTargets ? e2.texture : [e2.texture], s2 = e2.width, a2 = e2.height;
        let o2 = t2.COLOR_BUFFER_BIT;
        const l3 = [], h3 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, u3 = i.get(e2), d3 = true === e2.isWebGLMultipleRenderTargets;
        if (d3) for (let e3 = 0; e3 < r2.length; e3++) n.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, null), n.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, null, 0);
        n.bindFramebuffer(t2.READ_FRAMEBUFFER, u3.__webglMultisampledFramebuffer), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, u3.__webglFramebuffer);
        for (let n2 = 0; n2 < r2.length; n2++) {
          l3.push(t2.COLOR_ATTACHMENT0 + n2), e2.depthBuffer && l3.push(h3);
          const p2 = void 0 !== u3.__ignoreDepthValues && u3.__ignoreDepthValues;
          if (false === p2 && (e2.depthBuffer && (o2 |= t2.DEPTH_BUFFER_BIT), e2.stencilBuffer && (o2 |= t2.STENCIL_BUFFER_BIT)), d3 && t2.framebufferRenderbuffer(t2.READ_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.RENDERBUFFER, u3.__webglColorRenderbuffer[n2]), true === p2 && (t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, [h3]), t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, [h3])), d3) {
            const e3 = i.get(r2[n2]).__webglTexture;
            t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e3, 0);
          }
          t2.blitFramebuffer(0, 0, s2, a2, 0, 0, s2, a2, o2, t2.NEAREST), c2 && t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, l3);
        }
        if (n.bindFramebuffer(t2.READ_FRAMEBUFFER, null), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), d3) for (let e3 = 0; e3 < r2.length; e3++) {
          n.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, u3.__webglColorRenderbuffer[e3]);
          const s3 = i.get(r2[e3]).__webglTexture;
          n.bindFramebuffer(t2.FRAMEBUFFER, u3.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, s3, 0);
        }
        n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, u3.__webglMultisampledFramebuffer);
      }
    }, this.setupDepthRenderbuffer = D, this.setupFrameBufferTexture = U, this.useMultisampledRTT = F;
  }
  function Gl(t2, e, n) {
    const i = n.isWebGL2;
    return { convert: function(n2, r = "") {
      let s;
      const a = pi.getTransfer(r);
      if (n2 === Tt) return t2.UNSIGNED_BYTE;
      if (n2 === Ut) return t2.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Nt) return t2.UNSIGNED_SHORT_5_5_5_1;
      if (1010 === n2) return t2.BYTE;
      if (1011 === n2) return t2.SHORT;
      if (n2 === Rt) return t2.UNSIGNED_SHORT;
      if (n2 === Ct) return t2.INT;
      if (n2 === Pt) return t2.UNSIGNED_INT;
      if (n2 === Lt) return t2.FLOAT;
      if (n2 === It) return i ? t2.HALF_FLOAT : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
      if (1021 === n2) return t2.ALPHA;
      if (n2 === Ft) return t2.RGBA;
      if (1024 === n2) return t2.LUMINANCE;
      if (1025 === n2) return t2.LUMINANCE_ALPHA;
      if (n2 === Ht) return t2.DEPTH_COMPONENT;
      if (n2 === Vt) return t2.DEPTH_STENCIL;
      if (n2 === On) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
      if (1028 === n2) return t2.RED;
      if (n2 === Gt) return t2.RED_INTEGER;
      if (1030 === n2) return t2.RG;
      if (n2 === Xt) return t2.RG_INTEGER;
      if (n2 === jt) return t2.RGBA_INTEGER;
      if (n2 === qt || n2 === Yt || n2 === Zt || n2 === Jt) if (a === Ke) {
        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
        if (n2 === qt) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === Yt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === Zt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === Jt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
        if (n2 === qt) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === Yt) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === Zt) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === Jt) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n2 === Kt || n2 === $t || n2 === Qt || n2 === te) {
        if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
        if (n2 === Kt) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === $t) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === Qt) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === te) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n2 === ee) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
      if (n2 === ne || n2 === ie) {
        if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
        if (n2 === ne) return a === Ke ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n2 === ie) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n2 === re || n2 === se || n2 === ae || n2 === oe || n2 === le || n2 === ce || n2 === he || n2 === ue || n2 === de || n2 === pe || n2 === me || n2 === fe || n2 === ge || n2 === _e) {
        if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
        if (n2 === re) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === se) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === ae) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === oe) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === le) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === ce) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === he) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === ue) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === de) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === pe) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === me) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === fe) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === ge) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === _e) return a === Ke ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n2 === ve || n2 === xe || n2 === ye) {
        if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
        if (n2 === ve) return a === Ke ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === xe) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === ye) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (36283 === n2 || n2 === Se || n2 === be || n2 === Ee) {
        if (s = e.get("EXT_texture_compression_rgtc"), null === s) return null;
        if (n2 === ve) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === Se) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === be) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === Ee) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n2 === Dt ? i ? t2.UNSIGNED_INT_24_8 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t2[n2] ? t2[n2] : null;
    } };
  }
  var Wl = class extends ea {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.cameras = t2;
    }
  };
  var Xl = class extends Ur {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var jl = { type: "move" };
  var ql = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new Xl(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new Xl(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ii(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ii()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new Xl(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ii(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ii()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e = this._hand;
        if (e) for (const n of t2.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e, n) {
      let i = null, r = null, s = null;
      const a = this._targetRay, o = this._grip, l2 = this._hand;
      if (t2 && "visible-blurred" !== e.session.visibilityState) {
        if (l2 && t2.hand) {
          s = true;
          for (const i3 of t2.hand.values()) {
            const t3 = e.getJointPose(i3, n), r3 = this._getHandJoint(l2, i3);
            null !== t3 && (r3.matrix.fromArray(t3.transform.matrix), r3.matrix.decompose(r3.position, r3.rotation, r3.scale), r3.matrixWorldNeedsUpdate = true, r3.jointRadius = t3.radius), r3.visible = null !== t3;
          }
          const i2 = l2.joints["index-finger-tip"], r2 = l2.joints["thumb-tip"], a2 = i2.position.distanceTo(r2.position), o2 = 0.02, c2 = 5e-3;
          l2.inputState.pinching && a2 > o2 + c2 ? (l2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !l2.inputState.pinching && a2 <= o2 - c2 && (l2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o && t2.gripSpace && (r = e.getPose(t2.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false));
        null !== a && (i = e.getPose(t2.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(jl)));
      }
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l2 && (l2.visible = null !== s), this;
    }
    _getHandJoint(t2, e) {
      if (void 0 === t2.joints[e.jointName]) {
        const n = new Xl();
        n.matrixAutoUpdate = false, n.visible = false, t2.joints[e.jointName] = n, t2.add(n);
      }
      return t2.joints[e.jointName];
    }
  };
  var Yl = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(t2, e, n) {
      if (null === this.texture) {
        const i = new Si();
        t2.properties.get(i).__webglTexture = e.texture, e.depthNear == n.depthNear && e.depthFar == n.depthFar || (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
      }
    }
    render(t2, e) {
      if (null !== this.texture) {
        if (null === this.mesh) {
          const t3 = e.cameras[0].viewport, n = new Js({ extensions: { fragDepth: true }, vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t3.z }, depthHeight: { value: t3.w } } });
          this.mesh = new Gs(new fa(20, 20), n);
        }
        t2.render(this.mesh, e);
      }
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
  };
  var Zl = class extends zn {
    constructor(t2, e) {
      super();
      const n = this;
      let i = null, r = 1, s = null, a = "local-floor", o = 1, l2 = null, c2 = null, h2 = null, u2 = null, d2 = null, p = null;
      const m = new Yl(), f = e.getContextAttributes();
      let g = null, _ = null;
      const v = [], x = [], y2 = new Qn();
      let M = null;
      const S = new ea();
      S.layers.enable(1), S.viewport = new bi();
      const b = new ea();
      b.layers.enable(2), b.viewport = new bi();
      const E = [S, b], T = new Wl();
      T.layers.enable(1), T.layers.enable(2);
      let w = null, A = null;
      function R(t3) {
        const e2 = x.indexOf(t3.inputSource);
        if (-1 === e2) return;
        const n2 = v[e2];
        void 0 !== n2 && (n2.update(t3.inputSource, t3.frame, l2 || s), n2.dispatchEvent({ type: t3.type, data: t3.inputSource }));
      }
      function C2() {
        i.removeEventListener("select", R), i.removeEventListener("selectstart", R), i.removeEventListener("selectend", R), i.removeEventListener("squeeze", R), i.removeEventListener("squeezestart", R), i.removeEventListener("squeezeend", R), i.removeEventListener("end", C2), i.removeEventListener("inputsourceschange", P2);
        for (let t3 = 0; t3 < v.length; t3++) {
          const e2 = x[t3];
          null !== e2 && (x[t3] = null, v[t3].disconnect(e2));
        }
        w = null, A = null, m.reset(), t2.setRenderTarget(g), d2 = null, u2 = null, h2 = null, i = null, _ = null, D.stop(), n.isPresenting = false, t2.setPixelRatio(M), t2.setSize(y2.width, y2.height, false), n.dispatchEvent({ type: "sessionend" });
      }
      function P2(t3) {
        for (let e2 = 0; e2 < t3.removed.length; e2++) {
          const n2 = t3.removed[e2], i2 = x.indexOf(n2);
          i2 >= 0 && (x[i2] = null, v[i2].disconnect(n2));
        }
        for (let e2 = 0; e2 < t3.added.length; e2++) {
          const n2 = t3.added[e2];
          let i2 = x.indexOf(n2);
          if (-1 === i2) {
            for (let t4 = 0; t4 < v.length; t4++) {
              if (t4 >= x.length) {
                x.push(n2), i2 = t4;
                break;
              }
              if (null === x[t4]) {
                x[t4] = n2, i2 = t4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r2 = v[i2];
          r2 && r2.connect(n2);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(t3) {
        let e2 = v[t3];
        return void 0 === e2 && (e2 = new ql(), v[t3] = e2), e2.getTargetRaySpace();
      }, this.getControllerGrip = function(t3) {
        let e2 = v[t3];
        return void 0 === e2 && (e2 = new ql(), v[t3] = e2), e2.getGripSpace();
      }, this.getHand = function(t3) {
        let e2 = v[t3];
        return void 0 === e2 && (e2 = new ql(), v[t3] = e2), e2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(t3) {
        r = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(t3) {
        a = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return l2 || s;
      }, this.setReferenceSpace = function(t3) {
        l2 = t3;
      }, this.getBaseLayer = function() {
        return null !== u2 ? u2 : d2;
      }, this.getBinding = function() {
        return h2;
      }, this.getFrame = function() {
        return p;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(c3) {
        if (i = c3, null !== i) {
          if (g = t2.getRenderTarget(), i.addEventListener("select", R), i.addEventListener("selectstart", R), i.addEventListener("selectend", R), i.addEventListener("squeeze", R), i.addEventListener("squeezestart", R), i.addEventListener("squeezeend", R), i.addEventListener("end", C2), i.addEventListener("inputsourceschange", P2), true !== f.xrCompatible && await e.makeXRCompatible(), M = t2.getPixelRatio(), t2.getSize(y2), void 0 === i.renderState.layers || false === t2.capabilities.isWebGL2) {
            const n2 = { antialias: void 0 !== i.renderState.layers || f.antialias, alpha: true, depth: f.depth, stencil: f.stencil, framebufferScaleFactor: r };
            d2 = new XRWebGLLayer(i, e, n2), i.updateRenderState({ baseLayer: d2 }), t2.setPixelRatio(1), t2.setSize(d2.framebufferWidth, d2.framebufferHeight, false), _ = new Ti(d2.framebufferWidth, d2.framebufferHeight, { format: Ft, type: Tt, colorSpace: t2.outputColorSpace, stencilBuffer: f.stencil });
          } else {
            let n2 = null, s2 = null, a2 = null;
            f.depth && (a2 = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n2 = f.stencil ? Vt : Ht, s2 = f.stencil ? Dt : Pt);
            const o2 = { colorFormat: e.RGBA8, depthFormat: a2, scaleFactor: r };
            h2 = new XRWebGLBinding(i, e), u2 = h2.createProjectionLayer(o2), i.updateRenderState({ layers: [u2] }), t2.setPixelRatio(1), t2.setSize(u2.textureWidth, u2.textureHeight, false), _ = new Ti(u2.textureWidth, u2.textureHeight, { format: Ft, type: Tt, depthTexture: new $a(u2.textureWidth, u2.textureHeight, s2, void 0, void 0, void 0, void 0, void 0, void 0, n2), stencilBuffer: f.stencil, colorSpace: t2.outputColorSpace, samples: f.antialias ? 4 : 0 });
            t2.properties.get(_).__ignoreDepthValues = u2.ignoreDepthValues;
          }
          _.isXRRenderTarget = true, this.setFoveation(o), l2 = null, s = await i.requestReferenceSpace(a), D.setContext(i), D.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== i) return i.environmentBlendMode;
      };
      const L = new Ii(), I = new Ii();
      function U(t3, e2) {
        null === e2 ? t3.matrixWorld.copy(t3.matrix) : t3.matrixWorld.multiplyMatrices(e2.matrixWorld, t3.matrix), t3.matrixWorldInverse.copy(t3.matrixWorld).invert();
      }
      this.updateCamera = function(t3) {
        if (null === i) return;
        null !== m.texture && (t3.near = m.depthNear, t3.far = m.depthFar), T.near = b.near = S.near = t3.near, T.far = b.far = S.far = t3.far, w === T.near && A === T.far || (i.updateRenderState({ depthNear: T.near, depthFar: T.far }), w = T.near, A = T.far, S.near = w, S.far = A, b.near = w, b.far = A, S.updateProjectionMatrix(), b.updateProjectionMatrix(), t3.updateProjectionMatrix());
        const e2 = t3.parent, n2 = T.cameras;
        U(T, e2);
        for (let t4 = 0; t4 < n2.length; t4++) U(n2[t4], e2);
        2 === n2.length ? (function(t4, e3, n3) {
          L.setFromMatrixPosition(e3.matrixWorld), I.setFromMatrixPosition(n3.matrixWorld);
          const i2 = L.distanceTo(I), r2 = e3.projectionMatrix.elements, s2 = n3.projectionMatrix.elements, a2 = r2[14] / (r2[10] - 1), o2 = r2[14] / (r2[10] + 1), l3 = (r2[9] + 1) / r2[5], c3 = (r2[9] - 1) / r2[5], h3 = (r2[8] - 1) / r2[0], u3 = (s2[8] + 1) / s2[0], d3 = a2 * h3, p2 = a2 * u3, m2 = i2 / (-h3 + u3), f2 = m2 * -h3;
          e3.matrixWorld.decompose(t4.position, t4.quaternion, t4.scale), t4.translateX(f2), t4.translateZ(m2), t4.matrixWorld.compose(t4.position, t4.quaternion, t4.scale), t4.matrixWorldInverse.copy(t4.matrixWorld).invert();
          const g2 = a2 + m2, _2 = o2 + m2, v2 = d3 - f2, x2 = p2 + (i2 - f2), y3 = l3 * o2 / _2 * g2, M2 = c3 * o2 / _2 * g2;
          t4.projectionMatrix.makePerspective(v2, x2, y3, M2, g2, _2), t4.projectionMatrixInverse.copy(t4.projectionMatrix).invert();
        })(T, S, b) : T.projectionMatrix.copy(S.projectionMatrix), (function(t4, e3, n3) {
          null === n3 ? t4.matrix.copy(e3.matrixWorld) : (t4.matrix.copy(n3.matrixWorld), t4.matrix.invert(), t4.matrix.multiply(e3.matrixWorld));
          t4.matrix.decompose(t4.position, t4.quaternion, t4.scale), t4.updateMatrixWorld(true), t4.projectionMatrix.copy(e3.projectionMatrix), t4.projectionMatrixInverse.copy(e3.projectionMatrixInverse), t4.isPerspectiveCamera && (t4.fov = 2 * Gn * Math.atan(1 / t4.projectionMatrix.elements[5]), t4.zoom = 1);
        })(t3, T, e2);
      }, this.getCamera = function() {
        return T;
      }, this.getFoveation = function() {
        if (null !== u2 || null !== d2) return o;
      }, this.setFoveation = function(t3) {
        o = t3, null !== u2 && (u2.fixedFoveation = t3), null !== d2 && void 0 !== d2.fixedFoveation && (d2.fixedFoveation = t3);
      }, this.hasDepthSensing = function() {
        return null !== m.texture;
      };
      let N = null;
      const D = new pa();
      D.setAnimationLoop((function(e2, r2) {
        if (c2 = r2.getViewerPose(l2 || s), p = r2, null !== c2) {
          const e3 = c2.views;
          null !== d2 && (t2.setRenderTargetFramebuffer(_, d2.framebuffer), t2.setRenderTarget(_));
          let n2 = false;
          e3.length !== T.cameras.length && (T.cameras.length = 0, n2 = true);
          for (let i2 = 0; i2 < e3.length; i2++) {
            const r4 = e3[i2];
            let s2 = null;
            if (null !== d2) s2 = d2.getViewport(r4);
            else {
              const e4 = h2.getViewSubImage(u2, r4);
              s2 = e4.viewport, 0 === i2 && (t2.setRenderTargetTextures(_, e4.colorTexture, u2.ignoreDepthValues ? void 0 : e4.depthStencilTexture), t2.setRenderTarget(_));
            }
            let a2 = E[i2];
            void 0 === a2 && (a2 = new ea(), a2.layers.enable(i2), a2.viewport = new bi(), E[i2] = a2), a2.matrix.fromArray(r4.transform.matrix), a2.matrix.decompose(a2.position, a2.quaternion, a2.scale), a2.projectionMatrix.fromArray(r4.projectionMatrix), a2.projectionMatrixInverse.copy(a2.projectionMatrix).invert(), a2.viewport.set(s2.x, s2.y, s2.width, s2.height), 0 === i2 && (T.matrix.copy(a2.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), true === n2 && T.cameras.push(a2);
          }
          const r3 = i.enabledFeatures;
          if (r3 && r3.includes("depth-sensing")) {
            const n3 = h2.getDepthInformation(e3[0]);
            n3 && n3.isValid && n3.texture && m.init(t2, n3, i.renderState);
          }
        }
        for (let t3 = 0; t3 < v.length; t3++) {
          const e3 = x[t3], n2 = v[t3];
          null !== e3 && void 0 !== n2 && n2.update(e3, r2, l2 || s);
        }
        m.render(t2, T), N && N(e2, r2), r2.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: r2 }), p = null;
      })), this.setAnimationLoop = function(t3) {
        N = t3;
      }, this.dispose = function() {
      };
    }
  };
  function Jl(t2, e) {
    function n(t3, e2) {
      true === t3.matrixAutoUpdate && t3.updateMatrix(), e2.value.copy(t3.matrix);
    }
    function i(i2, r) {
      i2.opacity.value = r.opacity, r.color && i2.diffuse.value.copy(r.color), r.emissive && i2.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (i2.map.value = r.map, n(r.map, i2.mapTransform)), r.alphaMap && (i2.alphaMap.value = r.alphaMap, n(r.alphaMap, i2.alphaMapTransform)), r.bumpMap && (i2.bumpMap.value = r.bumpMap, n(r.bumpMap, i2.bumpMapTransform), i2.bumpScale.value = r.bumpScale, r.side === d && (i2.bumpScale.value *= -1)), r.normalMap && (i2.normalMap.value = r.normalMap, n(r.normalMap, i2.normalMapTransform), i2.normalScale.value.copy(r.normalScale), r.side === d && i2.normalScale.value.negate()), r.displacementMap && (i2.displacementMap.value = r.displacementMap, n(r.displacementMap, i2.displacementMapTransform), i2.displacementScale.value = r.displacementScale, i2.displacementBias.value = r.displacementBias), r.emissiveMap && (i2.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, i2.emissiveMapTransform)), r.specularMap && (i2.specularMap.value = r.specularMap, n(r.specularMap, i2.specularMapTransform)), r.alphaTest > 0 && (i2.alphaTest.value = r.alphaTest);
      const s = e.get(r).envMap;
      if (s && (i2.envMap.value = s, i2.flipEnvMap.value = s.isCubeTexture && false === s.isRenderTargetTexture ? -1 : 1, i2.reflectivity.value = r.reflectivity, i2.ior.value = r.ior, i2.refractionRatio.value = r.refractionRatio), r.lightMap) {
        i2.lightMap.value = r.lightMap;
        const e2 = true === t2._useLegacyLights ? Math.PI : 1;
        i2.lightMapIntensity.value = r.lightMapIntensity * e2, n(r.lightMap, i2.lightMapTransform);
      }
      r.aoMap && (i2.aoMap.value = r.aoMap, i2.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, i2.aoMapTransform));
    }
    return { refreshFogUniforms: function(e2, n2) {
      n2.color.getRGB(e2.fogColor.value, Ys(t2)), n2.isFog ? (e2.fogNear.value = n2.near, e2.fogFar.value = n2.far) : n2.isFogExp2 && (e2.fogDensity.value = n2.density);
    }, refreshMaterialUniforms: function(t3, r, s, a, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t3, r) : r.isMeshToonMaterial ? (i(t3, r), (function(t4, e2) {
        e2.gradientMap && (t4.gradientMap.value = e2.gradientMap);
      })(t3, r)) : r.isMeshPhongMaterial ? (i(t3, r), (function(t4, e2) {
        t4.specular.value.copy(e2.specular), t4.shininess.value = Math.max(e2.shininess, 1e-4);
      })(t3, r)) : r.isMeshStandardMaterial ? (i(t3, r), (function(t4, i2) {
        t4.metalness.value = i2.metalness, i2.metalnessMap && (t4.metalnessMap.value = i2.metalnessMap, n(i2.metalnessMap, t4.metalnessMapTransform));
        t4.roughness.value = i2.roughness, i2.roughnessMap && (t4.roughnessMap.value = i2.roughnessMap, n(i2.roughnessMap, t4.roughnessMapTransform));
        const r2 = e.get(i2).envMap;
        r2 && (t4.envMapIntensity.value = i2.envMapIntensity);
      })(t3, r), r.isMeshPhysicalMaterial && (function(t4, e2, i2) {
        t4.ior.value = e2.ior, e2.sheen > 0 && (t4.sheenColor.value.copy(e2.sheenColor).multiplyScalar(e2.sheen), t4.sheenRoughness.value = e2.sheenRoughness, e2.sheenColorMap && (t4.sheenColorMap.value = e2.sheenColorMap, n(e2.sheenColorMap, t4.sheenColorMapTransform)), e2.sheenRoughnessMap && (t4.sheenRoughnessMap.value = e2.sheenRoughnessMap, n(e2.sheenRoughnessMap, t4.sheenRoughnessMapTransform)));
        e2.clearcoat > 0 && (t4.clearcoat.value = e2.clearcoat, t4.clearcoatRoughness.value = e2.clearcoatRoughness, e2.clearcoatMap && (t4.clearcoatMap.value = e2.clearcoatMap, n(e2.clearcoatMap, t4.clearcoatMapTransform)), e2.clearcoatRoughnessMap && (t4.clearcoatRoughnessMap.value = e2.clearcoatRoughnessMap, n(e2.clearcoatRoughnessMap, t4.clearcoatRoughnessMapTransform)), e2.clearcoatNormalMap && (t4.clearcoatNormalMap.value = e2.clearcoatNormalMap, n(e2.clearcoatNormalMap, t4.clearcoatNormalMapTransform), t4.clearcoatNormalScale.value.copy(e2.clearcoatNormalScale), e2.side === d && t4.clearcoatNormalScale.value.negate()));
        e2.iridescence > 0 && (t4.iridescence.value = e2.iridescence, t4.iridescenceIOR.value = e2.iridescenceIOR, t4.iridescenceThicknessMinimum.value = e2.iridescenceThicknessRange[0], t4.iridescenceThicknessMaximum.value = e2.iridescenceThicknessRange[1], e2.iridescenceMap && (t4.iridescenceMap.value = e2.iridescenceMap, n(e2.iridescenceMap, t4.iridescenceMapTransform)), e2.iridescenceThicknessMap && (t4.iridescenceThicknessMap.value = e2.iridescenceThicknessMap, n(e2.iridescenceThicknessMap, t4.iridescenceThicknessMapTransform)));
        e2.transmission > 0 && (t4.transmission.value = e2.transmission, t4.transmissionSamplerMap.value = i2.texture, t4.transmissionSamplerSize.value.set(i2.width, i2.height), e2.transmissionMap && (t4.transmissionMap.value = e2.transmissionMap, n(e2.transmissionMap, t4.transmissionMapTransform)), t4.thickness.value = e2.thickness, e2.thicknessMap && (t4.thicknessMap.value = e2.thicknessMap, n(e2.thicknessMap, t4.thicknessMapTransform)), t4.attenuationDistance.value = e2.attenuationDistance, t4.attenuationColor.value.copy(e2.attenuationColor));
        e2.anisotropy > 0 && (t4.anisotropyVector.value.set(e2.anisotropy * Math.cos(e2.anisotropyRotation), e2.anisotropy * Math.sin(e2.anisotropyRotation)), e2.anisotropyMap && (t4.anisotropyMap.value = e2.anisotropyMap, n(e2.anisotropyMap, t4.anisotropyMapTransform)));
        t4.specularIntensity.value = e2.specularIntensity, t4.specularColor.value.copy(e2.specularColor), e2.specularColorMap && (t4.specularColorMap.value = e2.specularColorMap, n(e2.specularColorMap, t4.specularColorMapTransform));
        e2.specularIntensityMap && (t4.specularIntensityMap.value = e2.specularIntensityMap, n(e2.specularIntensityMap, t4.specularIntensityMapTransform));
      })(t3, r, o)) : r.isMeshMatcapMaterial ? (i(t3, r), (function(t4, e2) {
        e2.matcap && (t4.matcap.value = e2.matcap);
      })(t3, r)) : r.isMeshDepthMaterial ? i(t3, r) : r.isMeshDistanceMaterial ? (i(t3, r), (function(t4, n2) {
        const i2 = e.get(n2).light;
        t4.referencePosition.value.setFromMatrixPosition(i2.matrixWorld), t4.nearDistance.value = i2.shadow.camera.near, t4.farDistance.value = i2.shadow.camera.far;
      })(t3, r)) : r.isMeshNormalMaterial ? i(t3, r) : r.isLineBasicMaterial ? ((function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
      })(t3, r), r.isLineDashedMaterial && (function(t4, e2) {
        t4.dashSize.value = e2.dashSize, t4.totalSize.value = e2.dashSize + e2.gapSize, t4.scale.value = e2.scale;
      })(t3, r)) : r.isPointsMaterial ? (function(t4, e2, i2, r2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.size.value = e2.size * i2, t4.scale.value = 0.5 * r2, e2.map && (t4.map.value = e2.map, n(e2.map, t4.uvTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r, s, a) : r.isSpriteMaterial ? (function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.rotation.value = e2.rotation, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r) : r.isShadowMaterial ? (t3.color.value.copy(r.color), t3.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = false);
    } };
  }
  function Kl(t2, e, n, i) {
    let r = {}, s = {}, a = [];
    const o = n.isWebGL2 ? t2.getParameter(t2.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
    function l2(t3, e2, n2, i2) {
      const r2 = t3.value, s2 = e2 + "_" + n2;
      if (void 0 === i2[s2]) return i2[s2] = "number" == typeof r2 || "boolean" == typeof r2 ? r2 : r2.clone(), true;
      {
        const t4 = i2[s2];
        if ("number" == typeof r2 || "boolean" == typeof r2) {
          if (t4 !== r2) return i2[s2] = r2, true;
        } else if (false === t4.equals(r2)) return t4.copy(r2), true;
      }
      return false;
    }
    function c2(t3) {
      const e2 = { boundary: 0, storage: 0 };
      return "number" == typeof t3 || "boolean" == typeof t3 ? (e2.boundary = 4, e2.storage = 4) : t3.isVector2 ? (e2.boundary = 8, e2.storage = 8) : t3.isVector3 || t3.isColor ? (e2.boundary = 16, e2.storage = 12) : t3.isVector4 ? (e2.boundary = 16, e2.storage = 16) : t3.isMatrix3 ? (e2.boundary = 48, e2.storage = 48) : t3.isMatrix4 ? (e2.boundary = 64, e2.storage = 64) : t3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t3), e2;
    }
    function h2(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", h2);
      const i2 = a.indexOf(n2.__bindingPointIndex);
      a.splice(i2, 1), t2.deleteBuffer(r[n2.id]), delete r[n2.id], delete s[n2.id];
    }
    return { bind: function(t3, e2) {
      const n2 = e2.program;
      i.uniformBlockBinding(t3, n2);
    }, update: function(n2, u2) {
      let d2 = r[n2.id];
      void 0 === d2 && (!(function(t3) {
        const e2 = t3.uniforms;
        let n3 = 0;
        const i2 = 16;
        for (let t4 = 0, r3 = e2.length; t4 < r3; t4++) {
          const r4 = Array.isArray(e2[t4]) ? e2[t4] : [e2[t4]];
          for (let t5 = 0, e3 = r4.length; t5 < e3; t5++) {
            const e4 = r4[t5], s2 = Array.isArray(e4.value) ? e4.value : [e4.value];
            for (let t6 = 0, r5 = s2.length; t6 < r5; t6++) {
              const r6 = c2(s2[t6]), a2 = n3 % i2;
              0 !== a2 && i2 - a2 < r6.boundary && (n3 += i2 - a2), e4.__data = new Float32Array(r6.storage / Float32Array.BYTES_PER_ELEMENT), e4.__offset = n3, n3 += r6.storage;
            }
          }
        }
        const r2 = n3 % i2;
        r2 > 0 && (n3 += i2 - r2);
        t3.__size = n3, t3.__cache = {};
      })(n2), d2 = (function(e2) {
        const n3 = (function() {
          for (let t3 = 0; t3 < o; t3++) if (-1 === a.indexOf(t3)) return a.push(t3), t3;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        })();
        e2.__bindingPointIndex = n3;
        const i2 = t2.createBuffer(), r2 = e2.__size, s2 = e2.usage;
        return t2.bindBuffer(t2.UNIFORM_BUFFER, i2), t2.bufferData(t2.UNIFORM_BUFFER, r2, s2), t2.bindBuffer(t2.UNIFORM_BUFFER, null), t2.bindBufferBase(t2.UNIFORM_BUFFER, n3, i2), i2;
      })(n2), r[n2.id] = d2, n2.addEventListener("dispose", h2));
      const p = u2.program;
      i.updateUBOMapping(n2, p);
      const m = e.render.frame;
      s[n2.id] !== m && (!(function(e2) {
        const n3 = r[e2.id], i2 = e2.uniforms, s2 = e2.__cache;
        t2.bindBuffer(t2.UNIFORM_BUFFER, n3);
        for (let e3 = 0, n4 = i2.length; e3 < n4; e3++) {
          const n5 = Array.isArray(i2[e3]) ? i2[e3] : [i2[e3]];
          for (let i3 = 0, r2 = n5.length; i3 < r2; i3++) {
            const r3 = n5[i3];
            if (true === l2(r3, e3, i3, s2)) {
              const e4 = r3.__offset, n6 = Array.isArray(r3.value) ? r3.value : [r3.value];
              let i4 = 0;
              for (let s3 = 0; s3 < n6.length; s3++) {
                const a2 = n6[s3], o2 = c2(a2);
                "number" == typeof a2 || "boolean" == typeof a2 ? (r3.__data[0] = a2, t2.bufferSubData(t2.UNIFORM_BUFFER, e4 + i4, r3.__data)) : a2.isMatrix3 ? (r3.__data[0] = a2.elements[0], r3.__data[1] = a2.elements[1], r3.__data[2] = a2.elements[2], r3.__data[3] = 0, r3.__data[4] = a2.elements[3], r3.__data[5] = a2.elements[4], r3.__data[6] = a2.elements[5], r3.__data[7] = 0, r3.__data[8] = a2.elements[6], r3.__data[9] = a2.elements[7], r3.__data[10] = a2.elements[8], r3.__data[11] = 0) : (a2.toArray(r3.__data, i4), i4 += o2.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              t2.bufferSubData(t2.UNIFORM_BUFFER, e4, r3.__data);
            }
          }
        }
        t2.bindBuffer(t2.UNIFORM_BUFFER, null);
      })(n2), s[n2.id] = m);
    }, dispose: function() {
      for (const e2 in r) t2.deleteBuffer(r[e2]);
      a = [], r = {}, s = {};
    } };
  }
  var $l = class {
    constructor(e = {}) {
      const { canvas: n = ai(), context: i = null, depth: r = true, stencil: s = true, alpha: a = false, antialias: o = false, premultipliedAlpha: l2 = true, preserveDrawingBuffer: c2 = false, powerPreference: h2 = "default", failIfMajorPerformanceCaveat: p = false } = e;
      let m;
      this.isWebGLRenderer = true, m = null !== i ? i.getContextAttributes().alpha : a;
      const f = new Uint32Array(4), g = new Int32Array(4);
      let _ = null, v = null;
      const x = [], y2 = [];
      this.domElement = n, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = je, this._useLegacyLights = false, this.toneMapping = K, this.toneMappingExposure = 1;
      const M = this;
      let S = false, b = 0, E = 0, T = null, w = -1, A = null;
      const R = new bi(), C2 = new bi();
      let P2 = null;
      const L = new Zr(0);
      let I = 0, U = n.width, N = n.height, D = 1, O = null, F = null;
      const B = new bi(0, 0, U, N), z = new bi(0, 0, U, N);
      let H = false;
      const V = new da();
      let k = false, G = false, W = null;
      const X = new lr(), j = new Qn(), q = new Ii(), Y2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      function Z2() {
        return null === T ? D : 1;
      }
      let J2, $2, Q2, tt2, et2, nt2, it2, rt, st, at2, ot2, lt2, ct2, ht2, ut2, dt2, pt2, mt2, ft2, gt2, _t, vt2, xt, yt2, Mt2 = i;
      function St(t2, e2) {
        for (let i2 = 0; i2 < t2.length; i2++) {
          const r2 = t2[i2], s2 = n.getContext(r2, e2);
          if (null !== s2) return s2;
        }
        return null;
      }
      try {
        const e2 = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l2, preserveDrawingBuffer: c2, powerPreference: h2, failIfMajorPerformanceCaveat: p };
        if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`), n.addEventListener("webglcontextlost", At, false), n.addEventListener("webglcontextrestored", Ct2, false), n.addEventListener("webglcontextcreationerror", Ot, false), null === Mt2) {
          const t2 = ["webgl2", "webgl", "experimental-webgl"];
          if (true === M.isWebGL1Renderer && t2.shift(), Mt2 = St(t2, e2), null === Mt2) throw St(t2) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        "undefined" != typeof WebGLRenderingContext && Mt2 instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), void 0 === Mt2.getShaderPrecisionFormat && (Mt2.getShaderPrecisionFormat = function() {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
      } catch (t2) {
        throw console.error("THREE.WebGLRenderer: " + t2.message), t2;
      }
      function Et() {
        J2 = new Wa(Mt2), $2 = new ba(Mt2, J2, e), J2.init($2), vt2 = new Gl(Mt2, J2, $2), Q2 = new Vl(Mt2, J2, $2), tt2 = new qa(Mt2), et2 = new Al(), nt2 = new kl(Mt2, J2, Q2, et2, $2, vt2, tt2), it2 = new Ta(M), rt = new Ga(M), st = new ma(Mt2, $2), xt = new Ma(Mt2, J2, st, $2), at2 = new Xa(Mt2, st, tt2, xt), ot2 = new Ka(Mt2, at2, st, tt2), ft2 = new Ja(Mt2, $2, nt2), dt2 = new Ea(et2), lt2 = new wl(M, it2, rt, J2, $2, xt, dt2), ct2 = new Jl(M, et2), ht2 = new Ll(), ut2 = new Fl(J2, $2), mt2 = new ya(M, it2, rt, Q2, ot2, m, l2), pt2 = new Hl(M, ot2, $2), yt2 = new Kl(Mt2, tt2, $2, Q2), gt2 = new Sa(Mt2, J2, tt2, $2), _t = new ja(Mt2, J2, tt2, $2), tt2.programs = lt2.programs, M.capabilities = $2, M.extensions = J2, M.properties = et2, M.renderLists = ht2, M.shadowMap = pt2, M.state = Q2, M.info = tt2;
      }
      Et();
      const wt = new Zl(M, Mt2);
      function At(t2) {
        t2.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = true;
      }
      function Ct2() {
        console.log("THREE.WebGLRenderer: Context Restored."), S = false;
        const t2 = tt2.autoReset, e2 = pt2.enabled, n2 = pt2.autoUpdate, i2 = pt2.needsUpdate, r2 = pt2.type;
        Et(), tt2.autoReset = t2, pt2.enabled = e2, pt2.autoUpdate = n2, pt2.needsUpdate = i2, pt2.type = r2;
      }
      function Ot(t2) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t2.statusMessage);
      }
      function Bt(t2) {
        const e2 = t2.target;
        e2.removeEventListener("dispose", Bt), (function(t3) {
          (function(t4) {
            const e3 = et2.get(t4).programs;
            void 0 !== e3 && (e3.forEach((function(t5) {
              lt2.releaseProgram(t5);
            })), t4.isShaderMaterial && lt2.releaseShaderCache(t4));
          })(t3), et2.remove(t3);
        })(e2);
      }
      function zt(t2, e2, n2) {
        true === t2.transparent && 2 === t2.side && false === t2.forceSinglePass ? (t2.side = d, t2.needsUpdate = true, Kt2(t2, e2, n2), t2.side = u, t2.needsUpdate = true, Kt2(t2, e2, n2), t2.side = 2) : Kt2(t2, e2, n2);
      }
      this.xr = wt, this.getContext = function() {
        return Mt2;
      }, this.getContextAttributes = function() {
        return Mt2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const t2 = J2.get("WEBGL_lose_context");
        t2 && t2.loseContext();
      }, this.forceContextRestore = function() {
        const t2 = J2.get("WEBGL_lose_context");
        t2 && t2.restoreContext();
      }, this.getPixelRatio = function() {
        return D;
      }, this.setPixelRatio = function(t2) {
        void 0 !== t2 && (D = t2, this.setSize(U, N, false));
      }, this.getSize = function(t2) {
        return t2.set(U, N);
      }, this.setSize = function(t2, e2, i2 = true) {
        wt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (U = t2, N = e2, n.width = Math.floor(t2 * D), n.height = Math.floor(e2 * D), true === i2 && (n.style.width = t2 + "px", n.style.height = e2 + "px"), this.setViewport(0, 0, t2, e2));
      }, this.getDrawingBufferSize = function(t2) {
        return t2.set(U * D, N * D).floor();
      }, this.setDrawingBufferSize = function(t2, e2, i2) {
        U = t2, N = e2, D = i2, n.width = Math.floor(t2 * i2), n.height = Math.floor(e2 * i2), this.setViewport(0, 0, t2, e2);
      }, this.getCurrentViewport = function(t2) {
        return t2.copy(R);
      }, this.getViewport = function(t2) {
        return t2.copy(B);
      }, this.setViewport = function(t2, e2, n2, i2) {
        t2.isVector4 ? B.set(t2.x, t2.y, t2.z, t2.w) : B.set(t2, e2, n2, i2), Q2.viewport(R.copy(B).multiplyScalar(D).floor());
      }, this.getScissor = function(t2) {
        return t2.copy(z);
      }, this.setScissor = function(t2, e2, n2, i2) {
        t2.isVector4 ? z.set(t2.x, t2.y, t2.z, t2.w) : z.set(t2, e2, n2, i2), Q2.scissor(C2.copy(z).multiplyScalar(D).floor());
      }, this.getScissorTest = function() {
        return H;
      }, this.setScissorTest = function(t2) {
        Q2.setScissorTest(H = t2);
      }, this.setOpaqueSort = function(t2) {
        O = t2;
      }, this.setTransparentSort = function(t2) {
        F = t2;
      }, this.getClearColor = function(t2) {
        return t2.copy(mt2.getClearColor());
      }, this.setClearColor = function() {
        mt2.setClearColor.apply(mt2, arguments);
      }, this.getClearAlpha = function() {
        return mt2.getClearAlpha();
      }, this.setClearAlpha = function() {
        mt2.setClearAlpha.apply(mt2, arguments);
      }, this.clear = function(t2 = true, e2 = true, n2 = true) {
        let i2 = 0;
        if (t2) {
          let t3 = false;
          if (null !== T) {
            const e3 = T.texture.format;
            t3 = e3 === jt || e3 === Xt || e3 === Gt;
          }
          if (t3) {
            const t4 = T.texture.type, e3 = t4 === Tt || t4 === Pt || t4 === Rt || t4 === Dt || t4 === Ut || t4 === Nt, n3 = mt2.getClearColor(), i3 = mt2.getClearAlpha(), r2 = n3.r, s2 = n3.g, a2 = n3.b;
            e3 ? (f[0] = r2, f[1] = s2, f[2] = a2, f[3] = i3, Mt2.clearBufferuiv(Mt2.COLOR, 0, f)) : (g[0] = r2, g[1] = s2, g[2] = a2, g[3] = i3, Mt2.clearBufferiv(Mt2.COLOR, 0, g));
          } else i2 |= Mt2.COLOR_BUFFER_BIT;
        }
        e2 && (i2 |= Mt2.DEPTH_BUFFER_BIT), n2 && (i2 |= Mt2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Mt2.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        n.removeEventListener("webglcontextlost", At, false), n.removeEventListener("webglcontextrestored", Ct2, false), n.removeEventListener("webglcontextcreationerror", Ot, false), ht2.dispose(), ut2.dispose(), et2.dispose(), it2.dispose(), rt.dispose(), ot2.dispose(), xt.dispose(), yt2.dispose(), lt2.dispose(), wt.dispose(), wt.removeEventListener("sessionstart", Vt2), wt.removeEventListener("sessionend", kt), W && (W.dispose(), W = null), Wt.stop();
      }, this.renderBufferDirect = function(t2, e2, n2, i2, r2, s2) {
        null === e2 && (e2 = Y2);
        const a2 = r2.isMesh && r2.matrixWorld.determinant() < 0, o2 = (function(t3, e3, n3, i3, r3) {
          true !== e3.isScene && (e3 = Y2);
          nt2.resetTextureUnits();
          const s3 = e3.fog, a3 = i3.isMeshStandardMaterial ? e3.environment : null, o3 = null === T ? M.outputColorSpace : true === T.isXRRenderTarget ? T.texture.colorSpace : qe, l4 = (i3.isMeshStandardMaterial ? rt : it2).get(i3.envMap || a3), c4 = true === i3.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, h4 = !!n3.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), u3 = !!n3.morphAttributes.position, d3 = !!n3.morphAttributes.normal, p3 = !!n3.morphAttributes.color;
          let m3 = K;
          i3.toneMapped && (null !== T && true !== T.isXRRenderTarget || (m3 = M.toneMapping));
          const f3 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, g3 = void 0 !== f3 ? f3.length : 0, _2 = et2.get(i3), x2 = v.state.lights;
          if (true === k && (true === G || t3 !== A)) {
            const e4 = t3 === A && i3.id === w;
            dt2.setState(i3, t3, e4);
          }
          let y3 = false;
          i3.version === _2.__version ? _2.needsLights && _2.lightsStateVersion !== x2.state.version || _2.outputColorSpace !== o3 || r3.isBatchedMesh && false === _2.batching ? y3 = true : r3.isBatchedMesh || true !== _2.batching ? r3.isInstancedMesh && false === _2.instancing ? y3 = true : r3.isInstancedMesh || true !== _2.instancing ? r3.isSkinnedMesh && false === _2.skinning ? y3 = true : r3.isSkinnedMesh || true !== _2.skinning ? r3.isInstancedMesh && true === _2.instancingColor && null === r3.instanceColor || r3.isInstancedMesh && false === _2.instancingColor && null !== r3.instanceColor || _2.envMap !== l4 || true === i3.fog && _2.fog !== s3 ? y3 = true : void 0 === _2.numClippingPlanes || _2.numClippingPlanes === dt2.numPlanes && _2.numIntersection === dt2.numIntersection ? (_2.vertexAlphas !== c4 || _2.vertexTangents !== h4 || _2.morphTargets !== u3 || _2.morphNormals !== d3 || _2.morphColors !== p3 || _2.toneMapping !== m3 || true === $2.isWebGL2 && _2.morphTargetsCount !== g3) && (y3 = true) : y3 = true : y3 = true : y3 = true : y3 = true : (y3 = true, _2.__version = i3.version);
          let S2 = _2.currentProgram;
          true === y3 && (S2 = Kt2(i3, e3, r3));
          let b2 = false, E2 = false, R2 = false;
          const C3 = S2.getUniforms(), P3 = _2.uniforms;
          Q2.useProgram(S2.program) && (b2 = true, E2 = true, R2 = true);
          i3.id !== w && (w = i3.id, E2 = true);
          if (b2 || A !== t3) {
            C3.setValue(Mt2, "projectionMatrix", t3.projectionMatrix), C3.setValue(Mt2, "viewMatrix", t3.matrixWorldInverse);
            const e4 = C3.map.cameraPosition;
            void 0 !== e4 && e4.setValue(Mt2, q.setFromMatrixPosition(t3.matrixWorld)), $2.logarithmicDepthBuffer && C3.setValue(Mt2, "logDepthBufFC", 2 / (Math.log(t3.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C3.setValue(Mt2, "isOrthographic", true === t3.isOrthographicCamera), A !== t3 && (A = t3, E2 = true, R2 = true);
          }
          if (r3.isSkinnedMesh) {
            C3.setOptional(Mt2, r3, "bindMatrix"), C3.setOptional(Mt2, r3, "bindMatrixInverse");
            const t4 = r3.skeleton;
            t4 && ($2.floatVertexTextures ? (null === t4.boneTexture && t4.computeBoneTexture(), C3.setValue(Mt2, "boneTexture", t4.boneTexture, nt2)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
          }
          r3.isBatchedMesh && (C3.setOptional(Mt2, r3, "batchingTexture"), C3.setValue(Mt2, "batchingTexture", r3._matricesTexture, nt2));
          const L2 = n3.morphAttributes;
          (void 0 !== L2.position || void 0 !== L2.normal || void 0 !== L2.color && true === $2.isWebGL2) && ft2.update(r3, n3, S2);
          (E2 || _2.receiveShadow !== r3.receiveShadow) && (_2.receiveShadow = r3.receiveShadow, C3.setValue(Mt2, "receiveShadow", r3.receiveShadow));
          i3.isMeshGouraudMaterial && null !== i3.envMap && (P3.envMap.value = l4, P3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
          E2 && (C3.setValue(Mt2, "toneMappingExposure", M.toneMappingExposure), _2.needsLights && (U2 = R2, (I2 = P3).ambientLightColor.needsUpdate = U2, I2.lightProbe.needsUpdate = U2, I2.directionalLights.needsUpdate = U2, I2.directionalLightShadows.needsUpdate = U2, I2.pointLights.needsUpdate = U2, I2.pointLightShadows.needsUpdate = U2, I2.spotLights.needsUpdate = U2, I2.spotLightShadows.needsUpdate = U2, I2.rectAreaLights.needsUpdate = U2, I2.hemisphereLights.needsUpdate = U2), s3 && true === i3.fog && ct2.refreshFogUniforms(P3, s3), ct2.refreshMaterialUniforms(P3, i3, D, N, W), rl.upload(Mt2, $t2(_2), P3, nt2));
          var I2, U2;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (rl.upload(Mt2, $t2(_2), P3, nt2), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C3.setValue(Mt2, "center", r3.center);
          if (C3.setValue(Mt2, "modelViewMatrix", r3.modelViewMatrix), C3.setValue(Mt2, "normalMatrix", r3.normalMatrix), C3.setValue(Mt2, "modelMatrix", r3.matrixWorld), i3.isShaderMaterial || i3.isRawShaderMaterial) {
            const t4 = i3.uniformsGroups;
            for (let e4 = 0, n4 = t4.length; e4 < n4; e4++) if ($2.isWebGL2) {
              const n5 = t4[e4];
              yt2.update(n5, S2), yt2.bind(n5, S2);
            } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
          }
          return S2;
        })(t2, e2, n2, i2, r2);
        Q2.setMaterial(i2, a2);
        let l3 = n2.index, c3 = 1;
        if (true === i2.wireframe) {
          if (l3 = at2.getWireframeAttribute(n2), void 0 === l3) return;
          c3 = 2;
        }
        const h3 = n2.drawRange, u2 = n2.attributes.position;
        let d2 = h3.start * c3, p2 = (h3.start + h3.count) * c3;
        null !== s2 && (d2 = Math.max(d2, s2.start * c3), p2 = Math.min(p2, (s2.start + s2.count) * c3)), null !== l3 ? (d2 = Math.max(d2, 0), p2 = Math.min(p2, l3.count)) : null != u2 && (d2 = Math.max(d2, 0), p2 = Math.min(p2, u2.count));
        const m2 = p2 - d2;
        if (m2 < 0 || m2 === 1 / 0) return;
        let f2;
        xt.setup(r2, i2, o2, n2, l3);
        let g2 = gt2;
        if (null !== l3 && (f2 = st.get(l3), g2 = _t, g2.setIndex(f2)), r2.isMesh) true === i2.wireframe ? (Q2.setLineWidth(i2.wireframeLinewidth * Z2()), g2.setMode(Mt2.LINES)) : g2.setMode(Mt2.TRIANGLES);
        else if (r2.isLine) {
          let t3 = i2.linewidth;
          void 0 === t3 && (t3 = 1), Q2.setLineWidth(t3 * Z2()), r2.isLineSegments ? g2.setMode(Mt2.LINES) : r2.isLineLoop ? g2.setMode(Mt2.LINE_LOOP) : g2.setMode(Mt2.LINE_STRIP);
        } else r2.isPoints ? g2.setMode(Mt2.POINTS) : r2.isSprite && g2.setMode(Mt2.TRIANGLES);
        if (r2.isBatchedMesh) g2.renderMultiDraw(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount);
        else if (r2.isInstancedMesh) g2.renderInstances(d2, m2, r2.count);
        else if (n2.isInstancedBufferGeometry) {
          const t3 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, e3 = Math.min(n2.instanceCount, t3);
          g2.renderInstances(d2, m2, e3);
        } else g2.render(d2, m2);
      }, this.compile = function(t2, e2, n2 = null) {
        null === n2 && (n2 = t2), v = ut2.get(n2), v.init(), y2.push(v), n2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        })), t2 !== n2 && t2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        })), v.setupLights(M._useLegacyLights);
        const i2 = /* @__PURE__ */ new Set();
        return t2.traverse((function(t3) {
          const e3 = t3.material;
          if (e3) if (Array.isArray(e3)) for (let r2 = 0; r2 < e3.length; r2++) {
            const s2 = e3[r2];
            zt(s2, n2, t3), i2.add(s2);
          }
          else zt(e3, n2, t3), i2.add(e3);
        })), y2.pop(), v = null, i2;
      }, this.compileAsync = function(t2, e2, n2 = null) {
        const i2 = this.compile(t2, e2, n2);
        return new Promise(((e3) => {
          function n3() {
            i2.forEach((function(t3) {
              et2.get(t3).currentProgram.isReady() && i2.delete(t3);
            })), 0 !== i2.size ? setTimeout(n3, 10) : e3(t2);
          }
          null !== J2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        }));
      };
      let Ht2 = null;
      function Vt2() {
        Wt.stop();
      }
      function kt() {
        Wt.start();
      }
      const Wt = new pa();
      function qt2(t2, e2, n2, i2) {
        if (false === t2.visible) return;
        if (t2.layers.test(e2.layers)) {
          if (t2.isGroup) n2 = t2.renderOrder;
          else if (t2.isLOD) true === t2.autoUpdate && t2.update(e2);
          else if (t2.isLight) v.pushLight(t2), t2.castShadow && v.pushShadow(t2);
          else if (t2.isSprite) {
            if (!t2.frustumCulled || V.intersectsSprite(t2)) {
              i2 && q.setFromMatrixPosition(t2.matrixWorld).applyMatrix4(X);
              const e3 = ot2.update(t2), r3 = t2.material;
              r3.visible && _.push(t2, e3, r3, n2, q.z, null);
            }
          } else if ((t2.isMesh || t2.isLine || t2.isPoints) && (!t2.frustumCulled || V.intersectsObject(t2))) {
            const e3 = ot2.update(t2), r3 = t2.material;
            if (i2 && (void 0 !== t2.boundingSphere ? (null === t2.boundingSphere && t2.computeBoundingSphere(), q.copy(t2.boundingSphere.center)) : (null === e3.boundingSphere && e3.computeBoundingSphere(), q.copy(e3.boundingSphere.center)), q.applyMatrix4(t2.matrixWorld).applyMatrix4(X)), Array.isArray(r3)) {
              const i3 = e3.groups;
              for (let s2 = 0, a2 = i3.length; s2 < a2; s2++) {
                const a3 = i3[s2], o2 = r3[a3.materialIndex];
                o2 && o2.visible && _.push(t2, e3, o2, n2, q.z, a3);
              }
            } else r3.visible && _.push(t2, e3, r3, n2, q.z, null);
          }
        }
        const r2 = t2.children;
        for (let t3 = 0, s2 = r2.length; t3 < s2; t3++) qt2(r2[t3], e2, n2, i2);
      }
      function Yt2(t2, e2, n2, i2) {
        const r2 = t2.opaque, s2 = t2.transmissive, a2 = t2.transparent;
        v.setupLightsView(n2), true === k && dt2.setGlobalState(M.clippingPlanes, n2), s2.length > 0 && (function(t3, e3, n3, i3) {
          const r3 = true === n3.isScene ? n3.overrideMaterial : null;
          if (null !== r3) return;
          const s3 = $2.isWebGL2;
          null === W && (W = new Ti(1, 1, { generateMipmaps: true, type: J2.has("EXT_color_buffer_half_float") ? It : Tt, minFilter: bt, samples: s3 ? 4 : 0 }));
          M.getDrawingBufferSize(j), s3 ? W.setSize(j.x, j.y) : W.setSize(Zn(j.x), Zn(j.y));
          const a3 = M.getRenderTarget();
          M.setRenderTarget(W), M.getClearColor(L), I = M.getClearAlpha(), I < 1 && M.setClearColor(16777215, 0.5);
          M.clear();
          const o2 = M.toneMapping;
          M.toneMapping = K, Zt2(t3, n3, i3), nt2.updateMultisampleRenderTarget(W), nt2.updateRenderTargetMipmap(W);
          let l3 = false;
          for (let t4 = 0, r4 = e3.length; t4 < r4; t4++) {
            const r5 = e3[t4], s4 = r5.object, a4 = r5.geometry, o3 = r5.material, c3 = r5.group;
            if (2 === o3.side && s4.layers.test(i3.layers)) {
              const t5 = o3.side;
              o3.side = d, o3.needsUpdate = true, Jt2(s4, n3, i3, a4, o3, c3), o3.side = t5, o3.needsUpdate = true, l3 = true;
            }
          }
          true === l3 && (nt2.updateMultisampleRenderTarget(W), nt2.updateRenderTargetMipmap(W));
          M.setRenderTarget(a3), M.setClearColor(L, I), M.toneMapping = o2;
        })(r2, s2, e2, n2), i2 && Q2.viewport(R.copy(i2)), r2.length > 0 && Zt2(r2, e2, n2), s2.length > 0 && Zt2(s2, e2, n2), a2.length > 0 && Zt2(a2, e2, n2), Q2.buffers.depth.setTest(true), Q2.buffers.depth.setMask(true), Q2.buffers.color.setMask(true), Q2.setPolygonOffset(false);
      }
      function Zt2(t2, e2, n2) {
        const i2 = true === e2.isScene ? e2.overrideMaterial : null;
        for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
          const s3 = t2[r2], a2 = s3.object, o2 = s3.geometry, l3 = null === i2 ? s3.material : i2, c3 = s3.group;
          a2.layers.test(n2.layers) && Jt2(a2, e2, n2, o2, l3, c3);
        }
      }
      function Jt2(t2, e2, n2, i2, r2, s2) {
        t2.onBeforeRender(M, e2, n2, i2, r2, s2), t2.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, t2.matrixWorld), t2.normalMatrix.getNormalMatrix(t2.modelViewMatrix), r2.onBeforeRender(M, e2, n2, i2, t2, s2), true === r2.transparent && 2 === r2.side && false === r2.forceSinglePass ? (r2.side = d, r2.needsUpdate = true, M.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = u, r2.needsUpdate = true, M.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = 2) : M.renderBufferDirect(n2, e2, i2, r2, t2, s2), t2.onAfterRender(M, e2, n2, i2, r2, s2);
      }
      function Kt2(t2, e2, n2) {
        true !== e2.isScene && (e2 = Y2);
        const i2 = et2.get(t2), r2 = v.state.lights, s2 = v.state.shadowsArray, a2 = r2.state.version, o2 = lt2.getParameters(t2, r2.state, s2, e2, n2), l3 = lt2.getProgramCacheKey(o2);
        let c3 = i2.programs;
        i2.environment = t2.isMeshStandardMaterial ? e2.environment : null, i2.fog = e2.fog, i2.envMap = (t2.isMeshStandardMaterial ? rt : it2).get(t2.envMap || i2.environment), void 0 === c3 && (t2.addEventListener("dispose", Bt), c3 = /* @__PURE__ */ new Map(), i2.programs = c3);
        let h3 = c3.get(l3);
        if (void 0 !== h3) {
          if (i2.currentProgram === h3 && i2.lightsStateVersion === a2) return Qt2(t2, o2), h3;
        } else o2.uniforms = lt2.getUniforms(t2), t2.onBuild(n2, o2, M), t2.onBeforeCompile(o2, M), h3 = lt2.acquireProgram(o2, l3), c3.set(l3, h3), i2.uniforms = o2.uniforms;
        const u2 = i2.uniforms;
        return (t2.isShaderMaterial || t2.isRawShaderMaterial) && true !== t2.clipping || (u2.clippingPlanes = dt2.uniform), Qt2(t2, o2), i2.needsLights = (function(t3) {
          return t3.isMeshLambertMaterial || t3.isMeshToonMaterial || t3.isMeshPhongMaterial || t3.isMeshStandardMaterial || t3.isShadowMaterial || t3.isShaderMaterial && true === t3.lights;
        })(t2), i2.lightsStateVersion = a2, i2.needsLights && (u2.ambientLightColor.value = r2.state.ambient, u2.lightProbe.value = r2.state.probe, u2.directionalLights.value = r2.state.directional, u2.directionalLightShadows.value = r2.state.directionalShadow, u2.spotLights.value = r2.state.spot, u2.spotLightShadows.value = r2.state.spotShadow, u2.rectAreaLights.value = r2.state.rectArea, u2.ltc_1.value = r2.state.rectAreaLTC1, u2.ltc_2.value = r2.state.rectAreaLTC2, u2.pointLights.value = r2.state.point, u2.pointLightShadows.value = r2.state.pointShadow, u2.hemisphereLights.value = r2.state.hemi, u2.directionalShadowMap.value = r2.state.directionalShadowMap, u2.directionalShadowMatrix.value = r2.state.directionalShadowMatrix, u2.spotShadowMap.value = r2.state.spotShadowMap, u2.spotLightMatrix.value = r2.state.spotLightMatrix, u2.spotLightMap.value = r2.state.spotLightMap, u2.pointShadowMap.value = r2.state.pointShadowMap, u2.pointShadowMatrix.value = r2.state.pointShadowMatrix), i2.currentProgram = h3, i2.uniformsList = null, h3;
      }
      function $t2(t2) {
        if (null === t2.uniformsList) {
          const e2 = t2.currentProgram.getUniforms();
          t2.uniformsList = rl.seqWithValue(e2.seq, t2.uniforms);
        }
        return t2.uniformsList;
      }
      function Qt2(t2, e2) {
        const n2 = et2.get(t2);
        n2.outputColorSpace = e2.outputColorSpace, n2.batching = e2.batching, n2.instancing = e2.instancing, n2.instancingColor = e2.instancingColor, n2.skinning = e2.skinning, n2.morphTargets = e2.morphTargets, n2.morphNormals = e2.morphNormals, n2.morphColors = e2.morphColors, n2.morphTargetsCount = e2.morphTargetsCount, n2.numClippingPlanes = e2.numClippingPlanes, n2.numIntersection = e2.numClipIntersection, n2.vertexAlphas = e2.vertexAlphas, n2.vertexTangents = e2.vertexTangents, n2.toneMapping = e2.toneMapping;
      }
      Wt.setAnimationLoop((function(t2) {
        Ht2 && Ht2(t2);
      })), "undefined" != typeof self && Wt.setContext(self), this.setAnimationLoop = function(t2) {
        Ht2 = t2, wt.setAnimationLoop(t2), null === t2 ? Wt.stop() : Wt.start();
      }, wt.addEventListener("sessionstart", Vt2), wt.addEventListener("sessionend", kt), this.render = function(t2, e2) {
        if (void 0 !== e2 && true !== e2.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === S) return;
        true === t2.matrixWorldAutoUpdate && t2.updateMatrixWorld(), null === e2.parent && true === e2.matrixWorldAutoUpdate && e2.updateMatrixWorld(), true === wt.enabled && true === wt.isPresenting && (true === wt.cameraAutoUpdate && wt.updateCamera(e2), e2 = wt.getCamera()), true === t2.isScene && t2.onBeforeRender(M, t2, e2, T), v = ut2.get(t2, y2.length), v.init(), y2.push(v), X.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), V.setFromProjectionMatrix(X), G = this.localClippingEnabled, k = dt2.init(this.clippingPlanes, G), _ = ht2.get(t2, x.length), _.init(), x.push(_), qt2(t2, e2, 0, M.sortObjects), _.finish(), true === M.sortObjects && _.sort(O, F), this.info.render.frame++, true === k && dt2.beginShadows();
        const n2 = v.state.shadowsArray;
        if (pt2.render(n2, t2, e2), true === k && dt2.endShadows(), true === this.info.autoReset && this.info.reset(), false !== wt.enabled && false !== wt.isPresenting && false !== wt.hasDepthSensing() || mt2.render(_, t2), v.setupLights(M._useLegacyLights), e2.isArrayCamera) {
          const n3 = e2.cameras;
          for (let e3 = 0, i2 = n3.length; e3 < i2; e3++) {
            const i3 = n3[e3];
            Yt2(_, t2, i3, i3.viewport);
          }
        } else Yt2(_, t2, e2);
        null !== T && (nt2.updateMultisampleRenderTarget(T), nt2.updateRenderTargetMipmap(T)), true === t2.isScene && t2.onAfterRender(M, t2, e2), xt.resetDefaultState(), w = -1, A = null, y2.pop(), v = y2.length > 0 ? y2[y2.length - 1] : null, x.pop(), _ = x.length > 0 ? x[x.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return b;
      }, this.getActiveMipmapLevel = function() {
        return E;
      }, this.getRenderTarget = function() {
        return T;
      }, this.setRenderTargetTextures = function(t2, e2, n2) {
        et2.get(t2.texture).__webglTexture = e2, et2.get(t2.depthTexture).__webglTexture = n2;
        const i2 = et2.get(t2);
        i2.__hasExternalTextures = true, i2.__hasExternalTextures && (i2.__autoAllocateDepthBuffer = void 0 === n2, i2.__autoAllocateDepthBuffer || true === J2.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i2.__useRenderToTexture = false));
      }, this.setRenderTargetFramebuffer = function(t2, e2) {
        const n2 = et2.get(t2);
        n2.__webglFramebuffer = e2, n2.__useDefaultFramebuffer = void 0 === e2;
      }, this.setRenderTarget = function(t2, e2 = 0, n2 = 0) {
        T = t2, b = e2, E = n2;
        let i2 = true, r2 = null, s2 = false, a2 = false;
        if (t2) {
          const o2 = et2.get(t2);
          void 0 !== o2.__useDefaultFramebuffer ? (Q2.bindFramebuffer(Mt2.FRAMEBUFFER, null), i2 = false) : void 0 === o2.__webglFramebuffer ? nt2.setupRenderTarget(t2) : o2.__hasExternalTextures && nt2.rebindTextures(t2, et2.get(t2.texture).__webglTexture, et2.get(t2.depthTexture).__webglTexture);
          const l3 = t2.texture;
          (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (a2 = true);
          const c3 = et2.get(t2).__webglFramebuffer;
          t2.isWebGLCubeRenderTarget ? (r2 = Array.isArray(c3[e2]) ? c3[e2][n2] : c3[e2], s2 = true) : r2 = $2.isWebGL2 && t2.samples > 0 && false === nt2.useMultisampledRTT(t2) ? et2.get(t2).__webglMultisampledFramebuffer : Array.isArray(c3) ? c3[n2] : c3, R.copy(t2.viewport), C2.copy(t2.scissor), P2 = t2.scissorTest;
        } else R.copy(B).multiplyScalar(D).floor(), C2.copy(z).multiplyScalar(D).floor(), P2 = H;
        if (Q2.bindFramebuffer(Mt2.FRAMEBUFFER, r2) && $2.drawBuffers && i2 && Q2.drawBuffers(t2, r2), Q2.viewport(R), Q2.scissor(C2), Q2.setScissorTest(P2), s2) {
          const i3 = et2.get(t2.texture);
          Mt2.framebufferTexture2D(Mt2.FRAMEBUFFER, Mt2.COLOR_ATTACHMENT0, Mt2.TEXTURE_CUBE_MAP_POSITIVE_X + e2, i3.__webglTexture, n2);
        } else if (a2) {
          const i3 = et2.get(t2.texture), r3 = e2 || 0;
          Mt2.framebufferTextureLayer(Mt2.FRAMEBUFFER, Mt2.COLOR_ATTACHMENT0, i3.__webglTexture, n2 || 0, r3);
        }
        w = -1;
      }, this.readRenderTargetPixels = function(t2, e2, n2, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = et2.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          Q2.bindFramebuffer(Mt2.FRAMEBUFFER, o2);
          try {
            const a3 = t2.texture, o3 = a3.format, l3 = a3.type;
            if (o3 !== Ft && vt2.convert(o3) !== Mt2.getParameter(Mt2.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            const c3 = l3 === It && (J2.has("EXT_color_buffer_half_float") || $2.isWebGL2 && J2.has("EXT_color_buffer_float"));
            if (!(l3 === Tt || vt2.convert(l3) === Mt2.getParameter(Mt2.IMPLEMENTATION_COLOR_READ_TYPE) || l3 === Lt && ($2.isWebGL2 || J2.has("OES_texture_float") || J2.has("WEBGL_color_buffer_float")) || c3)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            e2 >= 0 && e2 <= t2.width - i2 && n2 >= 0 && n2 <= t2.height - r2 && Mt2.readPixels(e2, n2, i2, r2, vt2.convert(o3), vt2.convert(l3), s2);
          } finally {
            const t3 = null !== T ? et2.get(T).__webglFramebuffer : null;
            Q2.bindFramebuffer(Mt2.FRAMEBUFFER, t3);
          }
        }
      }, this.copyFramebufferToTexture = function(t2, e2, n2 = 0) {
        const i2 = Math.pow(2, -n2), r2 = Math.floor(e2.image.width * i2), s2 = Math.floor(e2.image.height * i2);
        nt2.setTexture2D(e2, 0), Mt2.copyTexSubImage2D(Mt2.TEXTURE_2D, n2, 0, 0, t2.x, t2.y, r2, s2), Q2.unbindTexture();
      }, this.copyTextureToTexture = function(t2, e2, n2, i2 = 0) {
        const r2 = e2.image.width, s2 = e2.image.height, a2 = vt2.convert(n2.format), o2 = vt2.convert(n2.type);
        nt2.setTexture2D(n2, 0), Mt2.pixelStorei(Mt2.UNPACK_FLIP_Y_WEBGL, n2.flipY), Mt2.pixelStorei(Mt2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n2.premultiplyAlpha), Mt2.pixelStorei(Mt2.UNPACK_ALIGNMENT, n2.unpackAlignment), e2.isDataTexture ? Mt2.texSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, r2, s2, a2, o2, e2.image.data) : e2.isCompressedTexture ? Mt2.compressedTexSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, e2.mipmaps[0].width, e2.mipmaps[0].height, a2, e2.mipmaps[0].data) : Mt2.texSubImage2D(Mt2.TEXTURE_2D, i2, t2.x, t2.y, a2, o2, e2.image), 0 === i2 && n2.generateMipmaps && Mt2.generateMipmap(Mt2.TEXTURE_2D), Q2.unbindTexture();
      }, this.copyTextureToTexture3D = function(t2, e2, n2, i2, r2 = 0) {
        if (M.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const s2 = t2.max.x - t2.min.x + 1, a2 = t2.max.y - t2.min.y + 1, o2 = t2.max.z - t2.min.z + 1, l3 = vt2.convert(i2.format), c3 = vt2.convert(i2.type);
        let h3;
        if (i2.isData3DTexture) nt2.setTexture3D(i2, 0), h3 = Mt2.TEXTURE_3D;
        else {
          if (!i2.isDataArrayTexture && !i2.isCompressedArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
          nt2.setTexture2DArray(i2, 0), h3 = Mt2.TEXTURE_2D_ARRAY;
        }
        Mt2.pixelStorei(Mt2.UNPACK_FLIP_Y_WEBGL, i2.flipY), Mt2.pixelStorei(Mt2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i2.premultiplyAlpha), Mt2.pixelStorei(Mt2.UNPACK_ALIGNMENT, i2.unpackAlignment);
        const u2 = Mt2.getParameter(Mt2.UNPACK_ROW_LENGTH), d2 = Mt2.getParameter(Mt2.UNPACK_IMAGE_HEIGHT), p2 = Mt2.getParameter(Mt2.UNPACK_SKIP_PIXELS), m2 = Mt2.getParameter(Mt2.UNPACK_SKIP_ROWS), f2 = Mt2.getParameter(Mt2.UNPACK_SKIP_IMAGES), g2 = n2.isCompressedTexture ? n2.mipmaps[r2] : n2.image;
        Mt2.pixelStorei(Mt2.UNPACK_ROW_LENGTH, g2.width), Mt2.pixelStorei(Mt2.UNPACK_IMAGE_HEIGHT, g2.height), Mt2.pixelStorei(Mt2.UNPACK_SKIP_PIXELS, t2.min.x), Mt2.pixelStorei(Mt2.UNPACK_SKIP_ROWS, t2.min.y), Mt2.pixelStorei(Mt2.UNPACK_SKIP_IMAGES, t2.min.z), n2.isDataTexture || n2.isData3DTexture ? Mt2.texSubImage3D(h3, r2, e2.x, e2.y, e2.z, s2, a2, o2, l3, c3, g2.data) : n2.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Mt2.compressedTexSubImage3D(h3, r2, e2.x, e2.y, e2.z, s2, a2, o2, l3, g2.data)) : Mt2.texSubImage3D(h3, r2, e2.x, e2.y, e2.z, s2, a2, o2, l3, c3, g2), Mt2.pixelStorei(Mt2.UNPACK_ROW_LENGTH, u2), Mt2.pixelStorei(Mt2.UNPACK_IMAGE_HEIGHT, d2), Mt2.pixelStorei(Mt2.UNPACK_SKIP_PIXELS, p2), Mt2.pixelStorei(Mt2.UNPACK_SKIP_ROWS, m2), Mt2.pixelStorei(Mt2.UNPACK_SKIP_IMAGES, f2), 0 === r2 && i2.generateMipmaps && Mt2.generateMipmap(h3), Q2.unbindTexture();
      }, this.initTexture = function(t2) {
        t2.isCubeTexture ? nt2.setTextureCube(t2, 0) : t2.isData3DTexture ? nt2.setTexture3D(t2, 0) : t2.isDataArrayTexture || t2.isCompressedArrayTexture ? nt2.setTexture2DArray(t2, 0) : nt2.setTexture2D(t2, 0), Q2.unbindTexture();
      }, this.resetState = function() {
        b = 0, E = 0, T = null, Q2.reset(), xt.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Fn;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t2) {
      this._outputColorSpace = t2;
      const e = this.getContext();
      e.drawingBufferColorSpace = t2 === Ye ? "display-p3" : "srgb", e.unpackColorSpace = pi.workingColorSpace === Ze ? "display-p3" : "srgb";
    }
    get outputEncoding() {
      return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === je ? He : ze;
    }
    set outputEncoding(t2) {
      console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t2 === He ? je : qe;
    }
    get useLegacyLights() {
      return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
    }
    set useLegacyLights(t2) {
      console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t2;
    }
  };
  var Ql = class extends $l {
  };
  Ql.prototype.isWebGL1Renderer = true;
  var ec = class _ec {
    constructor(t2, e = 1, n = 1e3) {
      this.isFog = true, this.name = "", this.color = new Zr(t2), this.near = e, this.far = n;
    }
    clone() {
      return new _ec(this.color, this.near, this.far);
    }
    toJSON() {
      return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
    }
  };
  var nc = class extends Ur {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e) {
      return super.copy(t2, e), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e;
    }
  };
  var rc = new Ii();
  var lc = new Ii();
  var cc = new Ii();
  var hc = new Ii();
  var uc = new Qn();
  var dc = new Qn();
  var pc = new lr();
  var mc = new Ii();
  var fc = new Ii();
  var gc = new Ii();
  var _c = new Qn();
  var vc = new Qn();
  var xc = new Qn();
  var Sc = new Ii();
  var bc = new Ii();
  var Tc = new Ii();
  var wc = new bi();
  var Ac = new bi();
  var Rc = new Ii();
  var Cc = new lr();
  var Pc = new Ii();
  var Lc = new Qi();
  var Ic = new lr();
  var Uc = new or();
  var Fc = new lr();
  var Bc = new lr();
  var Vc = new lr();
  var kc = new lr();
  var Wc = new Di();
  var Xc = new lr();
  var jc = new Gs();
  var qc = new Qi();
  var Kc = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e) {
      const n = this.pool, i = this.list;
      this.index >= n.length && n.push({ start: -1, count: -1, z: -1 });
      const r = n[this.index];
      i.push(r), this.index++, r.start = t2.start, r.count = t2.count, r.z = e;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var Qc = new lr();
  var th = new lr();
  var eh = new lr();
  var nh = new lr();
  var ih = new da();
  var rh = new Di();
  var sh = new Qi();
  var ah = new Ii();
  var oh = new Kc();
  var lh = new Gs();
  var dh = class extends $r {
    constructor(t2) {
      super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Zr(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
    }
  };
  var ph = new Ii();
  var mh = new Ii();
  var fh = new lr();
  var gh = new or();
  var _h = new Qi();
  var vh = class extends Ur {
    constructor(t2 = new Ts(), e = new dh()) {
      super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e, this.updateMorphTargets();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e = t2.attributes.position, n = [0];
        for (let t3 = 1, i = e.count; t3 < i; t3++) ph.fromBufferAttribute(e, t3 - 1), mh.fromBufferAttribute(e, t3), n[t3] = n[t3 - 1], n[t3] += ph.distanceTo(mh);
        t2.setAttribute("lineDistance", new gs(n, 1));
      } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
    raycast(t2, e) {
      const n = this.geometry, i = this.matrixWorld, r = t2.params.Line.threshold, s = n.drawRange;
      if (null === n.boundingSphere && n.computeBoundingSphere(), _h.copy(n.boundingSphere), _h.applyMatrix4(i), _h.radius += r, false === t2.ray.intersectsSphere(_h)) return;
      fh.copy(i).invert(), gh.copy(t2.ray).applyMatrix4(fh);
      const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l2 = new Ii(), c2 = new Ii(), h2 = new Ii(), u2 = new Ii(), d2 = this.isLineSegments ? 2 : 1, p = n.index, m = n.attributes.position;
      if (null !== p) {
        for (let n2 = Math.max(0, s.start), i2 = Math.min(p.count, s.start + s.count) - 1; n2 < i2; n2 += d2) {
          const i3 = p.getX(n2), r2 = p.getX(n2 + 1);
          l2.fromBufferAttribute(m, i3), c2.fromBufferAttribute(m, r2);
          if (gh.distanceSqToSegment(l2, c2, u2, h2) > o) continue;
          u2.applyMatrix4(this.matrixWorld);
          const s2 = t2.ray.origin.distanceTo(u2);
          s2 < t2.near || s2 > t2.far || e.push({ distance: s2, point: h2.clone().applyMatrix4(this.matrixWorld), index: n2, face: null, faceIndex: null, object: this });
        }
      } else {
        for (let n2 = Math.max(0, s.start), i2 = Math.min(m.count, s.start + s.count) - 1; n2 < i2; n2 += d2) {
          l2.fromBufferAttribute(m, n2), c2.fromBufferAttribute(m, n2 + 1);
          if (gh.distanceSqToSegment(l2, c2, u2, h2) > o) continue;
          u2.applyMatrix4(this.matrixWorld);
          const i3 = t2.ray.origin.distanceTo(u2);
          i3 < t2.near || i3 > t2.far || e.push({ distance: i3, point: h2.clone().applyMatrix4(this.matrixWorld), index: n2, face: null, faceIndex: null, object: this });
        }
      }
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e = Object.keys(t2);
      if (e.length > 0) {
        const n = t2[e[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e2 = n.length; t3 < e2; t3++) {
            const e3 = n[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e3] = t3;
          }
        }
      }
    }
  };
  var xh = new Ii();
  var yh = new Ii();
  var Mh = class extends vh {
    constructor(t2, e) {
      super(t2, e), this.isLineSegments = true, this.type = "LineSegments";
    }
    computeLineDistances() {
      const t2 = this.geometry;
      if (null === t2.index) {
        const e = t2.attributes.position, n = [];
        for (let t3 = 0, i = e.count; t3 < i; t3 += 2) xh.fromBufferAttribute(e, t3), yh.fromBufferAttribute(e, t3 + 1), n[t3] = 0 === t3 ? 0 : n[t3 - 1], n[t3 + 1] = n[t3] + xh.distanceTo(yh);
        t2.setAttribute("lineDistance", new gs(n, 1));
      } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      return this;
    }
  };
  var Eh = new lr();
  var Th = new or();
  var wh = new Qi();
  var Ah = new Ii();
  var Dh = class extends Si {
    constructor(t2, e, n, i, r, s, a, o, l2) {
      super(t2, e, n, i, r, s, a, o, l2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var Oh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getPoint(n, e);
    }
    getPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return e;
    }
    getSpacedPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPointAt(n / t2));
      return e;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e = [];
      let n, i = this.getPoint(0), r = 0;
      e.push(0);
      for (let s = 1; s <= t2; s++) n = this.getPoint(s / t2), r += n.distanceTo(i), e.push(r), i = n;
      return this.cacheArcLengths = e, e;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = e || t2 * n[r - 1];
      let a, o = 0, l2 = r - 1;
      for (; o <= l2; ) if (i = Math.floor(o + (l2 - o) / 2), a = n[i] - s, a < 0) o = i + 1;
      else {
        if (!(a > 0)) {
          l2 = i;
          break;
        }
        l2 = i - 1;
      }
      if (i = l2, n[i] === s) return i / (r - 1);
      const c2 = n[i];
      return (i + (s - c2) / (n[i + 1] - c2)) / (r - 1);
    }
    getTangent(t2, e) {
      const n = 1e-4;
      let i = t2 - n, r = t2 + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new Qn() : new Ii());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t2, e) {
      const n = new Ii(), i = [], r = [], s = [], a = new Ii(), o = new lr();
      for (let e2 = 0; e2 <= t2; e2++) {
        const n2 = e2 / t2;
        i[e2] = this.getTangentAt(n2, new Ii());
      }
      r[0] = new Ii(), s[0] = new Ii();
      let l2 = Number.MAX_VALUE;
      const c2 = Math.abs(i[0].x), h2 = Math.abs(i[0].y), u2 = Math.abs(i[0].z);
      c2 <= l2 && (l2 = c2, n.set(1, 0, 0)), h2 <= l2 && (l2 = h2, n.set(0, 1, 0)), u2 <= l2 && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
      for (let e2 = 1; e2 <= t2; e2++) {
        if (r[e2] = r[e2 - 1].clone(), s[e2] = s[e2 - 1].clone(), a.crossVectors(i[e2 - 1], i[e2]), a.length() > Number.EPSILON) {
          a.normalize();
          const t3 = Math.acos(Xn(i[e2 - 1].dot(i[e2]), -1, 1));
          r[e2].applyMatrix4(o.makeRotationAxis(a, t3));
        }
        s[e2].crossVectors(i[e2], r[e2]);
      }
      if (true === e) {
        let e2 = Math.acos(Xn(r[0].dot(r[t2]), -1, 1));
        e2 /= t2, i[0].dot(a.crossVectors(r[0], r[t2])) > 0 && (e2 = -e2);
        for (let n2 = 1; n2 <= t2; n2++) r[n2].applyMatrix4(o.makeRotationAxis(i[n2], e2 * n2)), s[n2].crossVectors(i[n2], r[n2]);
      }
      return { tangents: i, normals: r, binormals: s };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var Fh = class extends Oh {
    constructor(t2 = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = false, o = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
    }
    getPoint(t2, e) {
      const n = e || new Qn(), i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), true !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const a = this.aStartAngle + t2 * r;
      let o = this.aX + this.xRadius * Math.cos(a), l2 = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e2 = Math.sin(this.aRotation), n2 = o - this.aX, i2 = l2 - this.aY;
        o = n2 * t3 - i2 * e2 + this.aX, l2 = n2 * e2 + i2 * t3 + this.aY;
      }
      return n.set(o, l2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Bh = class extends Fh {
    constructor(t2, e, n, i, r, s) {
      super(t2, e, n, n, i, r, s), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function zh() {
    let t2 = 0, e = 0, n = 0, i = 0;
    function r(r2, s, a, o) {
      t2 = r2, e = a, n = -3 * r2 + 3 * s - 2 * a - o, i = 2 * r2 - 2 * s + a + o;
    }
    return { initCatmullRom: function(t3, e2, n2, i2, s) {
      r(e2, n2, s * (n2 - t3), s * (i2 - e2));
    }, initNonuniformCatmullRom: function(t3, e2, n2, i2, s, a, o) {
      let l2 = (e2 - t3) / s - (n2 - t3) / (s + a) + (n2 - e2) / a, c2 = (n2 - e2) / a - (i2 - e2) / (a + o) + (i2 - n2) / o;
      l2 *= a, c2 *= a, r(e2, n2, l2, c2);
    }, calc: function(r2) {
      const s = r2 * r2;
      return t2 + e * r2 + n * s + i * (s * r2);
    } };
  }
  var Hh = new Ii();
  var Vh = new zh();
  var kh = new zh();
  var Gh = new zh();
  var Wh = class extends Oh {
    constructor(t2 = [], e = false, n = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e, this.curveType = n, this.tension = i;
    }
    getPoint(t2, e = new Ii()) {
      const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t2;
      let a, o, l2 = Math.floor(s), c2 = s - l2;
      this.closed ? l2 += l2 > 0 ? 0 : (Math.floor(Math.abs(l2) / r) + 1) * r : 0 === c2 && l2 === r - 1 && (l2 = r - 2, c2 = 1), this.closed || l2 > 0 ? a = i[(l2 - 1) % r] : (Hh.subVectors(i[0], i[1]).add(i[0]), a = Hh);
      const h2 = i[l2 % r], u2 = i[(l2 + 1) % r];
      if (this.closed || l2 + 2 < r ? o = i[(l2 + 2) % r] : (Hh.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Hh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e2 = Math.pow(a.distanceToSquared(h2), t3), n2 = Math.pow(h2.distanceToSquared(u2), t3), i2 = Math.pow(u2.distanceToSquared(o), t3);
        n2 < 1e-4 && (n2 = 1), e2 < 1e-4 && (e2 = n2), i2 < 1e-4 && (i2 = n2), Vh.initNonuniformCatmullRom(a.x, h2.x, u2.x, o.x, e2, n2, i2), kh.initNonuniformCatmullRom(a.y, h2.y, u2.y, o.y, e2, n2, i2), Gh.initNonuniformCatmullRom(a.z, h2.z, u2.z, o.z, e2, n2, i2);
      } else "catmullrom" === this.curveType && (Vh.initCatmullRom(a.x, h2.x, u2.x, o.x, this.tension), kh.initCatmullRom(a.y, h2.y, u2.y, o.y, this.tension), Gh.initCatmullRom(a.z, h2.z, u2.z, o.z, this.tension));
      return n.set(Vh.calc(c2), kh.calc(c2), Gh.calc(c2)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new Ii().fromArray(n2));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Xh(t2, e, n, i, r) {
    const s = 0.5 * (i - e), a = 0.5 * (r - n), o = t2 * t2;
    return (2 * n - 2 * i + s + a) * (t2 * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t2 + n;
  }
  function jh(t2, e, n, i) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      return 2 * (1 - t3) * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return t3 * t3 * e2;
    })(t2, i);
  }
  function qh(t2, e, n, i, r) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      const n2 = 1 - t3;
      return 3 * n2 * n2 * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return 3 * (1 - t3) * t3 * t3 * e2;
    })(t2, i) + (function(t3, e2) {
      return t3 * t3 * t3 * e2;
    })(t2, r);
  }
  var Yh = class extends Oh {
    constructor(t2 = new Qn(), e = new Qn(), n = new Qn(), i = new Qn()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new Qn()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(qh(t2, i.x, r.x, s.x, a.x), qh(t2, i.y, r.y, s.y, a.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Zh = class extends Oh {
    constructor(t2 = new Ii(), e = new Ii(), n = new Ii(), i = new Ii()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new Ii()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(qh(t2, i.x, r.x, s.x, a.x), qh(t2, i.y, r.y, s.y, a.y), qh(t2, i.z, r.z, s.z, a.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Jh = class extends Oh {
    constructor(t2 = new Qn(), e = new Qn()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new Qn()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new Qn()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Kh = class extends Oh {
    constructor(t2 = new Ii(), e = new Ii()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new Ii()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new Ii()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var $h = class extends Oh {
    constructor(t2 = new Qn(), e = new Qn(), n = new Qn()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new Qn()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(jh(t2, i.x, r.x, s.x), jh(t2, i.y, r.y, s.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Qh = class extends Oh {
    constructor(t2 = new Ii(), e = new Ii(), n = new Ii()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new Ii()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set(jh(t2, i.x, r.x, s.x), jh(t2, i.y, r.y, s.y), jh(t2, i.z, r.z, s.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var tu = class extends Oh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e = new Qn()) {
      const n = e, i = this.points, r = (i.length - 1) * t2, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l2 = i[s], c2 = i[s > i.length - 2 ? i.length - 1 : s + 1], h2 = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(Xh(a, o.x, l2.x, c2.x, h2.x), Xh(a, o.y, l2.y, c2.y, h2.y)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new Qn().fromArray(n2));
      }
      return this;
    }
  };
  var eu = Object.freeze({ __proto__: null, ArcCurve: Bh, CatmullRomCurve3: Wh, CubicBezierCurve: Yh, CubicBezierCurve3: Zh, EllipseCurve: Fh, LineCurve: Jh, LineCurve3: Kh, QuadraticBezierCurve: $h, QuadraticBezierCurve3: Qh, SplineCurve: tu });
  var nu = class extends Oh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e)) {
        const n = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new eu[n](e, t2));
      }
      return this;
    }
    getPoint(t2, e) {
      const n = t2 * this.getLength(), i = this.getCurveLengths();
      let r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n) {
          const t3 = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t3 / a;
          return s.getPointAt(o, e);
        }
        r++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t2.push(e);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t2 = 12) {
      const e = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i], a = s.isEllipseCurve ? 2 * t2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t2 * s.points.length : t2, o = s.getPoints(a);
        for (let t3 = 0; t3 < o.length; t3++) {
          const i2 = o[t3];
          n && n.equals(i2) || (e.push(i2), n = i2);
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(n2.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e = 0, n = this.curves.length; e < n; e++) {
        const n2 = this.curves[e];
        t2.curves.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(new eu[n2.type]().fromJSON(n2));
      }
      return this;
    }
  };
  var iu = class extends nu {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new Qn(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e = 1, n = t2.length; e < n; e++) this.lineTo(t2[e].x, t2[e].y);
      return this;
    }
    moveTo(t2, e) {
      return this.currentPoint.set(t2, e), this;
    }
    lineTo(t2, e) {
      const n = new Jh(this.currentPoint.clone(), new Qn(t2, e));
      return this.curves.push(n), this.currentPoint.set(t2, e), this;
    }
    quadraticCurveTo(t2, e, n, i) {
      const r = new $h(this.currentPoint.clone(), new Qn(t2, e), new Qn(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(t2, e, n, i, r, s) {
      const a = new Yh(this.currentPoint.clone(), new Qn(t2, e), new Qn(n, i), new Qn(r, s));
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(t2) {
      const e = [this.currentPoint.clone()].concat(t2), n = new tu(e);
      return this.curves.push(n), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e, n, i, r, s) {
      const a = this.currentPoint.x, o = this.currentPoint.y;
      return this.absarc(t2 + a, e + o, n, i, r, s), this;
    }
    absarc(t2, e, n, i, r, s) {
      return this.absellipse(t2, e, n, n, i, r, s), this;
    }
    ellipse(t2, e, n, i, r, s, a, o) {
      const l2 = this.currentPoint.x, c2 = this.currentPoint.y;
      return this.absellipse(t2 + l2, e + c2, n, i, r, s, a, o), this;
    }
    absellipse(t2, e, n, i, r, s, a, o) {
      const l2 = new Fh(t2, e, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t3 = l2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(l2);
      const c2 = l2.getPoint(1);
      return this.currentPoint.copy(c2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var ru = class _ru extends Ts {
    constructor(t2 = [new Qn(0, -0.5), new Qn(0.5, 0), new Qn(0, 0.5)], e = 12, n = 0, i = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e, phiStart: n, phiLength: i }, e = Math.floor(e), i = Xn(i, 0, 2 * Math.PI);
      const r = [], s = [], a = [], o = [], l2 = [], c2 = 1 / e, h2 = new Ii(), u2 = new Qn(), d2 = new Ii(), p = new Ii(), m = new Ii();
      let f = 0, g = 0;
      for (let e2 = 0; e2 <= t2.length - 1; e2++) switch (e2) {
        case 0:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, m.copy(d2), d2.normalize(), o.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, p.copy(d2), d2.x += m.x, d2.y += m.y, d2.z += m.z, d2.normalize(), o.push(d2.x, d2.y, d2.z), m.copy(p);
      }
      for (let r2 = 0; r2 <= e; r2++) {
        const d3 = n + r2 * c2 * i, p2 = Math.sin(d3), m2 = Math.cos(d3);
        for (let n2 = 0; n2 <= t2.length - 1; n2++) {
          h2.x = t2[n2].x * p2, h2.y = t2[n2].y, h2.z = t2[n2].x * m2, s.push(h2.x, h2.y, h2.z), u2.x = r2 / e, u2.y = n2 / (t2.length - 1), a.push(u2.x, u2.y);
          const i2 = o[3 * n2 + 0] * p2, c3 = o[3 * n2 + 1], d4 = o[3 * n2 + 0] * m2;
          l2.push(i2, c3, d4);
        }
      }
      for (let n2 = 0; n2 < e; n2++) for (let e2 = 0; e2 < t2.length - 1; e2++) {
        const i2 = e2 + n2 * t2.length, s2 = i2, a2 = i2 + t2.length, o2 = i2 + t2.length + 1, l3 = i2 + 1;
        r.push(s2, a2, l3), r.push(o2, l3, a2);
      }
      this.setIndex(r), this.setAttribute("position", new gs(s, 3)), this.setAttribute("uv", new gs(a, 2)), this.setAttribute("normal", new gs(l2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ru(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var su = class _su extends ru {
    constructor(t2 = 1, e = 1, n = 4, i = 8) {
      const r = new iu();
      r.absarc(0, -e / 2, t2, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t2, 0, 0.5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = { radius: t2, length: e, capSegments: n, radialSegments: i };
    }
    static fromJSON(t2) {
      return new _su(t2.radius, t2.length, t2.capSegments, t2.radialSegments);
    }
  };
  var au = class _au extends Ts {
    constructor(t2 = 1, e = 32, n = 0, i = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e);
      const r = [], s = [], a = [], o = [], l2 = new Ii(), c2 = new Qn();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
      for (let r2 = 0, h2 = 3; r2 <= e; r2++, h2 += 3) {
        const u2 = n + r2 / e * i;
        l2.x = t2 * Math.cos(u2), l2.y = t2 * Math.sin(u2), s.push(l2.x, l2.y, l2.z), a.push(0, 0, 1), c2.x = (s[h2] / t2 + 1) / 2, c2.y = (s[h2 + 1] / t2 + 1) / 2, o.push(c2.x, c2.y);
      }
      for (let t3 = 1; t3 <= e; t3++) r.push(t3, t3 + 1, 0);
      this.setIndex(r), this.setAttribute("position", new gs(s, 3)), this.setAttribute("normal", new gs(a, 3)), this.setAttribute("uv", new gs(o, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _au(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var ou = class _ou extends Ts {
    constructor(t2 = 1, e = 1, n = 1, i = 32, r = 1, s = false, a = 0, o = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o };
      const l2 = this;
      i = Math.floor(i), r = Math.floor(r);
      const c2 = [], h2 = [], u2 = [], d2 = [];
      let p = 0;
      const m = [], f = n / 2;
      let g = 0;
      function _(n2) {
        const r2 = p, s2 = new Qn(), m2 = new Ii();
        let _2 = 0;
        const v = true === n2 ? t2 : e, x = true === n2 ? 1 : -1;
        for (let t3 = 1; t3 <= i; t3++) h2.push(0, f * x, 0), u2.push(0, x, 0), d2.push(0.5, 0.5), p++;
        const y2 = p;
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * o + a, n3 = Math.cos(e2), r3 = Math.sin(e2);
          m2.x = v * r3, m2.y = f * x, m2.z = v * n3, h2.push(m2.x, m2.y, m2.z), u2.push(0, x, 0), s2.x = 0.5 * n3 + 0.5, s2.y = 0.5 * r3 * x + 0.5, d2.push(s2.x, s2.y), p++;
        }
        for (let t3 = 0; t3 < i; t3++) {
          const e2 = r2 + t3, i2 = y2 + t3;
          true === n2 ? c2.push(i2, i2 + 1, e2) : c2.push(i2 + 1, i2, e2), _2 += 3;
        }
        l2.addGroup(g, _2, true === n2 ? 1 : 2), g += _2;
      }
      !(function() {
        const s2 = new Ii(), _2 = new Ii();
        let v = 0;
        const x = (e - t2) / n;
        for (let l3 = 0; l3 <= r; l3++) {
          const c3 = [], g2 = l3 / r, v2 = g2 * (e - t2) + t2;
          for (let t3 = 0; t3 <= i; t3++) {
            const e2 = t3 / i, r2 = e2 * o + a, l4 = Math.sin(r2), m2 = Math.cos(r2);
            _2.x = v2 * l4, _2.y = -g2 * n + f, _2.z = v2 * m2, h2.push(_2.x, _2.y, _2.z), s2.set(l4, x, m2).normalize(), u2.push(s2.x, s2.y, s2.z), d2.push(e2, 1 - g2), c3.push(p++);
          }
          m.push(c3);
        }
        for (let t3 = 0; t3 < i; t3++) for (let e2 = 0; e2 < r; e2++) {
          const n2 = m[e2][t3], i2 = m[e2 + 1][t3], r2 = m[e2 + 1][t3 + 1], s3 = m[e2][t3 + 1];
          c2.push(n2, i2, s3), c2.push(i2, r2, s3), v += 6;
        }
        l2.addGroup(g, v, 0), g += v;
      })(), false === s && (t2 > 0 && _(true), e > 0 && _(false)), this.setIndex(c2), this.setAttribute("position", new gs(h2, 3)), this.setAttribute("normal", new gs(u2, 3)), this.setAttribute("uv", new gs(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ou(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var lu = class _lu extends ou {
    constructor(t2 = 1, e = 1, n = 32, i = 1, r = false, s = 0, a = 2 * Math.PI) {
      super(0, t2, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: s, thetaLength: a };
    }
    static fromJSON(t2) {
      return new _lu(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var cu = class _cu extends Ts {
    constructor(t2 = [], e = [], n = 1, i = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e, radius: n, detail: i };
      const r = [], s = [];
      function a(t3, e2, n2, i2) {
        const r2 = i2 + 1, s2 = [];
        for (let i3 = 0; i3 <= r2; i3++) {
          s2[i3] = [];
          const a2 = t3.clone().lerp(n2, i3 / r2), o2 = e2.clone().lerp(n2, i3 / r2), l3 = r2 - i3;
          for (let t4 = 0; t4 <= l3; t4++) s2[i3][t4] = 0 === t4 && i3 === r2 ? a2 : a2.clone().lerp(o2, t4 / l3);
        }
        for (let t4 = 0; t4 < r2; t4++) for (let e3 = 0; e3 < 2 * (r2 - t4) - 1; e3++) {
          const n3 = Math.floor(e3 / 2);
          e3 % 2 == 0 ? (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3]), o(s2[t4][n3])) : (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3 + 1]), o(s2[t4 + 1][n3]));
        }
      }
      function o(t3) {
        r.push(t3.x, t3.y, t3.z);
      }
      function l2(e2, n2) {
        const i2 = 3 * e2;
        n2.x = t2[i2 + 0], n2.y = t2[i2 + 1], n2.z = t2[i2 + 2];
      }
      function c2(t3, e2, n2, i2) {
        i2 < 0 && 1 === t3.x && (s[e2] = t3.x - 1), 0 === n2.x && 0 === n2.z && (s[e2] = i2 / 2 / Math.PI + 0.5);
      }
      function h2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      !(function(t3) {
        const n2 = new Ii(), i2 = new Ii(), r2 = new Ii();
        for (let s2 = 0; s2 < e.length; s2 += 3) l2(e[s2 + 0], n2), l2(e[s2 + 1], i2), l2(e[s2 + 2], r2), a(n2, i2, r2, t3);
      })(i), (function(t3) {
        const e2 = new Ii();
        for (let n2 = 0; n2 < r.length; n2 += 3) e2.x = r[n2 + 0], e2.y = r[n2 + 1], e2.z = r[n2 + 2], e2.normalize().multiplyScalar(t3), r[n2 + 0] = e2.x, r[n2 + 1] = e2.y, r[n2 + 2] = e2.z;
      })(n), (function() {
        const t3 = new Ii();
        for (let n2 = 0; n2 < r.length; n2 += 3) {
          t3.x = r[n2 + 0], t3.y = r[n2 + 1], t3.z = r[n2 + 2];
          const i2 = h2(t3) / 2 / Math.PI + 0.5, a2 = (e2 = t3, Math.atan2(-e2.y, Math.sqrt(e2.x * e2.x + e2.z * e2.z)) / Math.PI + 0.5);
          s.push(i2, 1 - a2);
        }
        var e2;
        (function() {
          const t4 = new Ii(), e3 = new Ii(), n2 = new Ii(), i2 = new Ii(), a2 = new Qn(), o2 = new Qn(), l3 = new Qn();
          for (let u2 = 0, d2 = 0; u2 < r.length; u2 += 9, d2 += 6) {
            t4.set(r[u2 + 0], r[u2 + 1], r[u2 + 2]), e3.set(r[u2 + 3], r[u2 + 4], r[u2 + 5]), n2.set(r[u2 + 6], r[u2 + 7], r[u2 + 8]), a2.set(s[d2 + 0], s[d2 + 1]), o2.set(s[d2 + 2], s[d2 + 3]), l3.set(s[d2 + 4], s[d2 + 5]), i2.copy(t4).add(e3).add(n2).divideScalar(3);
            const p = h2(i2);
            c2(a2, d2 + 0, t4, p), c2(o2, d2 + 2, e3, p), c2(l3, d2 + 4, n2, p);
          }
        })(), (function() {
          for (let t4 = 0; t4 < s.length; t4 += 6) {
            const e3 = s[t4 + 0], n2 = s[t4 + 2], i2 = s[t4 + 4], r2 = Math.max(e3, n2, i2), a2 = Math.min(e3, n2, i2);
            r2 > 0.9 && a2 < 0.1 && (e3 < 0.2 && (s[t4 + 0] += 1), n2 < 0.2 && (s[t4 + 2] += 1), i2 < 0.2 && (s[t4 + 4] += 1));
          }
        })();
      })(), this.setAttribute("position", new gs(r, 3)), this.setAttribute("normal", new gs(r.slice(), 3)), this.setAttribute("uv", new gs(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _cu(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var hu = class _hu extends cu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _hu(t2.radius, t2.detail);
    }
  };
  var uu = new Ii();
  var du = new Ii();
  var pu = new Ii();
  var mu = new Wr();
  var fu = class extends Ts {
    constructor(t2 = null, e = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e }, null !== t2) {
        const n = 4, i = Math.pow(10, n), r = Math.cos(kn * e), s = t2.getIndex(), a = t2.getAttribute("position"), o = s ? s.count : a.count, l2 = [0, 0, 0], c2 = ["a", "b", "c"], h2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o; t3 += 3) {
          s ? (l2[0] = s.getX(t3), l2[1] = s.getX(t3 + 1), l2[2] = s.getX(t3 + 2)) : (l2[0] = t3, l2[1] = t3 + 1, l2[2] = t3 + 2);
          const { a: e2, b: n2, c: o2 } = mu;
          if (e2.fromBufferAttribute(a, l2[0]), n2.fromBufferAttribute(a, l2[1]), o2.fromBufferAttribute(a, l2[2]), mu.getNormal(pu), h2[0] = `${Math.round(e2.x * i)},${Math.round(e2.y * i)},${Math.round(e2.z * i)}`, h2[1] = `${Math.round(n2.x * i)},${Math.round(n2.y * i)},${Math.round(n2.z * i)}`, h2[2] = `${Math.round(o2.x * i)},${Math.round(o2.y * i)},${Math.round(o2.z * i)}`, h2[0] !== h2[1] && h2[1] !== h2[2] && h2[2] !== h2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e3 = (t4 + 1) % 3, n3 = h2[t4], i2 = h2[e3], s2 = mu[c2[t4]], a2 = mu[c2[e3]], o3 = `${n3}_${i2}`, p = `${i2}_${n3}`;
            p in u2 && u2[p] ? (pu.dot(u2[p].normal) <= r && (d2.push(s2.x, s2.y, s2.z), d2.push(a2.x, a2.y, a2.z)), u2[p] = null) : o3 in u2 || (u2[o3] = { index0: l2[t4], index1: l2[e3], normal: pu.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e2, index1: n2 } = u2[t3];
          uu.fromBufferAttribute(a, e2), du.fromBufferAttribute(a, n2), d2.push(uu.x, uu.y, uu.z), d2.push(du.x, du.y, du.z);
        }
        this.setAttribute("position", new gs(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var gu = class extends iu {
    constructor(t2) {
      super(t2), this.uuid = Wn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e = [];
      for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t2);
      return e;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e = 0, n = this.holes.length; e < n; e++) {
        const n2 = this.holes[e];
        t2.holes.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(new iu().fromJSON(n2));
      }
      return this;
    }
  };
  var _u = function(t2, e, n = 2) {
    const i = e && e.length, r = i ? e[0] * n : t2.length;
    let s = vu(t2, 0, r, n, true);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l2, c2, h2, u2, d2, p;
    if (i && (s = (function(t3, e2, n2, i2) {
      const r2 = [];
      let s2, a2, o2, l3, c3;
      for (s2 = 0, a2 = e2.length; s2 < a2; s2++) o2 = e2[s2] * i2, l3 = s2 < a2 - 1 ? e2[s2 + 1] * i2 : t3.length, c3 = vu(t3, o2, l3, i2, false), c3 === c3.next && (c3.steiner = true), r2.push(Cu(c3));
      for (r2.sort(Tu), s2 = 0; s2 < r2.length; s2++) n2 = wu(r2[s2], n2);
      return n2;
    })(t2, e, s, n)), t2.length > 80 * n) {
      o = c2 = t2[0], l2 = h2 = t2[1];
      for (let e2 = n; e2 < r; e2 += n) u2 = t2[e2], d2 = t2[e2 + 1], u2 < o && (o = u2), d2 < l2 && (l2 = d2), u2 > c2 && (c2 = u2), d2 > h2 && (h2 = d2);
      p = Math.max(c2 - o, h2 - l2), p = 0 !== p ? 32767 / p : 0;
    }
    return yu(s, a, n, o, l2, p, 0), a;
  };
  function vu(t2, e, n, i, r) {
    let s, a;
    if (r === (function(t3, e2, n2, i2) {
      let r2 = 0;
      for (let s2 = e2, a2 = n2 - i2; s2 < n2; s2 += i2) r2 += (t3[a2] - t3[s2]) * (t3[s2 + 1] + t3[a2 + 1]), a2 = s2;
      return r2;
    })(t2, e, n, i) > 0) for (s = e; s < n; s += i) a = zu(s, t2[s], t2[s + 1], a);
    else for (s = n - i; s >= e; s -= i) a = zu(s, t2[s], t2[s + 1], a);
    return a && Uu(a, a.next) && (Hu(a), a = a.next), a;
  }
  function xu(t2, e) {
    if (!t2) return t2;
    e || (e = t2);
    let n, i = t2;
    do {
      if (n = false, i.steiner || !Uu(i, i.next) && 0 !== Iu(i.prev, i, i.next)) i = i.next;
      else {
        if (Hu(i), i = e = i.prev, i === i.next) break;
        n = true;
      }
    } while (n || i !== e);
    return e;
  }
  function yu(t2, e, n, i, r, s, a) {
    if (!t2) return;
    !a && s && (function(t3, e2, n2, i2) {
      let r2 = t3;
      do {
        0 === r2.z && (r2.z = Ru(r2.x, r2.y, e2, n2, i2)), r2.prevZ = r2.prev, r2.nextZ = r2.next, r2 = r2.next;
      } while (r2 !== t3);
      r2.prevZ.nextZ = null, r2.prevZ = null, (function(t4) {
        let e3, n3, i3, r3, s2, a2, o2, l3, c3 = 1;
        do {
          for (n3 = t4, t4 = null, s2 = null, a2 = 0; n3; ) {
            for (a2++, i3 = n3, o2 = 0, e3 = 0; e3 < c3 && (o2++, i3 = i3.nextZ, i3); e3++) ;
            for (l3 = c3; o2 > 0 || l3 > 0 && i3; ) 0 !== o2 && (0 === l3 || !i3 || n3.z <= i3.z) ? (r3 = n3, n3 = n3.nextZ, o2--) : (r3 = i3, i3 = i3.nextZ, l3--), s2 ? s2.nextZ = r3 : t4 = r3, r3.prevZ = s2, s2 = r3;
            n3 = i3;
          }
          s2.nextZ = null, c3 *= 2;
        } while (a2 > 1);
      })(r2);
    })(t2, i, r, s);
    let o, l2, c2 = t2;
    for (; t2.prev !== t2.next; ) if (o = t2.prev, l2 = t2.next, s ? Su(t2, i, r, s) : Mu(t2)) e.push(o.i / n | 0), e.push(t2.i / n | 0), e.push(l2.i / n | 0), Hu(t2), t2 = l2.next, c2 = l2.next;
    else if ((t2 = l2) === c2) {
      a ? 1 === a ? yu(t2 = bu(xu(t2), e, n), e, n, i, r, s, 2) : 2 === a && Eu(t2, e, n, i, r, s) : yu(xu(t2), e, n, i, r, s, 1);
      break;
    }
  }
  function Mu(t2) {
    const e = t2.prev, n = t2, i = t2.next;
    if (Iu(e, n, i) >= 0) return false;
    const r = e.x, s = n.x, a = i.x, o = e.y, l2 = n.y, c2 = i.y, h2 = r < s ? r < a ? r : a : s < a ? s : a, u2 = o < l2 ? o < c2 ? o : c2 : l2 < c2 ? l2 : c2, d2 = r > s ? r > a ? r : a : s > a ? s : a, p = o > l2 ? o > c2 ? o : c2 : l2 > c2 ? l2 : c2;
    let m = i.next;
    for (; m !== e; ) {
      if (m.x >= h2 && m.x <= d2 && m.y >= u2 && m.y <= p && Pu(r, o, s, l2, a, c2, m.x, m.y) && Iu(m.prev, m, m.next) >= 0) return false;
      m = m.next;
    }
    return true;
  }
  function Su(t2, e, n, i) {
    const r = t2.prev, s = t2, a = t2.next;
    if (Iu(r, s, a) >= 0) return false;
    const o = r.x, l2 = s.x, c2 = a.x, h2 = r.y, u2 = s.y, d2 = a.y, p = o < l2 ? o < c2 ? o : c2 : l2 < c2 ? l2 : c2, m = h2 < u2 ? h2 < d2 ? h2 : d2 : u2 < d2 ? u2 : d2, f = o > l2 ? o > c2 ? o : c2 : l2 > c2 ? l2 : c2, g = h2 > u2 ? h2 > d2 ? h2 : d2 : u2 > d2 ? u2 : d2, _ = Ru(p, m, e, n, i), v = Ru(f, g, e, n, i);
    let x = t2.prevZ, y2 = t2.nextZ;
    for (; x && x.z >= _ && y2 && y2.z <= v; ) {
      if (x.x >= p && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Pu(o, h2, l2, u2, c2, d2, x.x, x.y) && Iu(x.prev, x, x.next) >= 0) return false;
      if (x = x.prevZ, y2.x >= p && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && Pu(o, h2, l2, u2, c2, d2, y2.x, y2.y) && Iu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    for (; x && x.z >= _; ) {
      if (x.x >= p && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Pu(o, h2, l2, u2, c2, d2, x.x, x.y) && Iu(x.prev, x, x.next) >= 0) return false;
      x = x.prevZ;
    }
    for (; y2 && y2.z <= v; ) {
      if (y2.x >= p && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && Pu(o, h2, l2, u2, c2, d2, y2.x, y2.y) && Iu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    return true;
  }
  function bu(t2, e, n) {
    let i = t2;
    do {
      const r = i.prev, s = i.next.next;
      !Uu(r, s) && Nu(r, i, i.next, s) && Fu(r, s) && Fu(s, r) && (e.push(r.i / n | 0), e.push(i.i / n | 0), e.push(s.i / n | 0), Hu(i), Hu(i.next), i = t2 = s), i = i.next;
    } while (i !== t2);
    return xu(i);
  }
  function Eu(t2, e, n, i, r, s) {
    let a = t2;
    do {
      let t3 = a.next.next;
      for (; t3 !== a.prev; ) {
        if (a.i !== t3.i && Lu(a, t3)) {
          let o = Bu(a, t3);
          return a = xu(a, a.next), o = xu(o, o.next), yu(a, e, n, i, r, s, 0), void yu(o, e, n, i, r, s, 0);
        }
        t3 = t3.next;
      }
      a = a.next;
    } while (a !== t2);
  }
  function Tu(t2, e) {
    return t2.x - e.x;
  }
  function wu(t2, e) {
    const n = (function(t3, e2) {
      let n2, i2 = e2, r = -1 / 0;
      const s = t3.x, a = t3.y;
      do {
        if (a <= i2.y && a >= i2.next.y && i2.next.y !== i2.y) {
          const t4 = i2.x + (a - i2.y) * (i2.next.x - i2.x) / (i2.next.y - i2.y);
          if (t4 <= s && t4 > r && (r = t4, n2 = i2.x < i2.next.x ? i2 : i2.next, t4 === s)) return n2;
        }
        i2 = i2.next;
      } while (i2 !== e2);
      if (!n2) return null;
      const o = n2, l2 = n2.x, c2 = n2.y;
      let h2, u2 = 1 / 0;
      i2 = n2;
      do {
        s >= i2.x && i2.x >= l2 && s !== i2.x && Pu(a < c2 ? s : r, a, l2, c2, a < c2 ? r : s, a, i2.x, i2.y) && (h2 = Math.abs(a - i2.y) / (s - i2.x), Fu(i2, t3) && (h2 < u2 || h2 === u2 && (i2.x > n2.x || i2.x === n2.x && Au(n2, i2))) && (n2 = i2, u2 = h2)), i2 = i2.next;
      } while (i2 !== o);
      return n2;
    })(t2, e);
    if (!n) return e;
    const i = Bu(n, t2);
    return xu(i, i.next), xu(n, n.next);
  }
  function Au(t2, e) {
    return Iu(t2.prev, t2, e.prev) < 0 && Iu(e.next, t2, t2.next) < 0;
  }
  function Ru(t2, e, n, i, r) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - n) * r | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }
  function Cu(t2) {
    let e = t2, n = t2;
    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t2);
    return n;
  }
  function Pu(t2, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) >= (t2 - a) * (s - o) && (t2 - a) * (i - o) >= (n - a) * (e - o) && (n - a) * (s - o) >= (r - a) * (i - o);
  }
  function Lu(t2, e) {
    return t2.next.i !== e.i && t2.prev.i !== e.i && !(function(t3, e2) {
      let n = t3;
      do {
        if (n.i !== t3.i && n.next.i !== t3.i && n.i !== e2.i && n.next.i !== e2.i && Nu(n, n.next, t3, e2)) return true;
        n = n.next;
      } while (n !== t3);
      return false;
    })(t2, e) && (Fu(t2, e) && Fu(e, t2) && (function(t3, e2) {
      let n = t3, i = false;
      const r = (t3.x + e2.x) / 2, s = (t3.y + e2.y) / 2;
      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
      } while (n !== t3);
      return i;
    })(t2, e) && (Iu(t2.prev, t2, e.prev) || Iu(t2, e.prev, e)) || Uu(t2, e) && Iu(t2.prev, t2, t2.next) > 0 && Iu(e.prev, e, e.next) > 0);
  }
  function Iu(t2, e, n) {
    return (e.y - t2.y) * (n.x - e.x) - (e.x - t2.x) * (n.y - e.y);
  }
  function Uu(t2, e) {
    return t2.x === e.x && t2.y === e.y;
  }
  function Nu(t2, e, n, i) {
    const r = Ou(Iu(t2, e, n)), s = Ou(Iu(t2, e, i)), a = Ou(Iu(n, i, t2)), o = Ou(Iu(n, i, e));
    return r !== s && a !== o || (!(0 !== r || !Du(t2, n, e)) || (!(0 !== s || !Du(t2, i, e)) || (!(0 !== a || !Du(n, t2, i)) || !(0 !== o || !Du(n, e, i)))));
  }
  function Du(t2, e, n) {
    return e.x <= Math.max(t2.x, n.x) && e.x >= Math.min(t2.x, n.x) && e.y <= Math.max(t2.y, n.y) && e.y >= Math.min(t2.y, n.y);
  }
  function Ou(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function Fu(t2, e) {
    return Iu(t2.prev, t2, t2.next) < 0 ? Iu(t2, e, t2.next) >= 0 && Iu(t2, t2.prev, e) >= 0 : Iu(t2, e, t2.prev) < 0 || Iu(t2, t2.next, e) < 0;
  }
  function Bu(t2, e) {
    const n = new Vu(t2.i, t2.x, t2.y), i = new Vu(e.i, e.x, e.y), r = t2.next, s = e.prev;
    return t2.next = e, e.prev = t2, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
  }
  function zu(t2, e, n, i) {
    const r = new Vu(t2, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }
  function Hu(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function Vu(t2, e, n) {
    this.i = t2, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  var ku = class _ku {
    static area(t2) {
      const e = t2.length;
      let n = 0;
      for (let i = e - 1, r = 0; r < e; i = r++) n += t2[i].x * t2[r].y - t2[r].x * t2[i].y;
      return 0.5 * n;
    }
    static isClockWise(t2) {
      return _ku.area(t2) < 0;
    }
    static triangulateShape(t2, e) {
      const n = [], i = [], r = [];
      Gu(t2), Wu(n, t2);
      let s = t2.length;
      e.forEach(Gu);
      for (let t3 = 0; t3 < e.length; t3++) i.push(s), s += e[t3].length, Wu(n, e[t3]);
      const a = _u(n, i);
      for (let t3 = 0; t3 < a.length; t3 += 3) r.push(a.slice(t3, t3 + 3));
      return r;
    }
  };
  function Gu(t2) {
    const e = t2.length;
    e > 2 && t2[e - 1].equals(t2[0]) && t2.pop();
  }
  function Wu(t2, e) {
    for (let n = 0; n < e.length; n++) t2.push(e[n].x), t2.push(e[n].y);
  }
  var Xu = class _Xu extends Ts {
    constructor(t2 = new gu([new Qn(0.5, 0.5), new Qn(-0.5, 0.5), new Qn(-0.5, -0.5), new Qn(0.5, -0.5)]), e = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e }, t2 = Array.isArray(t2) ? t2 : [t2];
      const n = this, i = [], r = [];
      for (let e2 = 0, n2 = t2.length; e2 < n2; e2++) {
        s(t2[e2]);
      }
      function s(t3) {
        const s2 = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l2 = void 0 !== e.depth ? e.depth : 1;
        let c2 = void 0 === e.bevelEnabled || e.bevelEnabled, h2 = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2, u2 = void 0 !== e.bevelSize ? e.bevelSize : h2 - 0.1, d2 = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : ju;
        let g, _, v, x, y2, M = false;
        m && (g = m.getSpacedPoints(o), M = true, c2 = false, _ = m.computeFrenetFrames(o, false), v = new Ii(), x = new Ii(), y2 = new Ii()), c2 || (p = 0, h2 = 0, u2 = 0, d2 = 0);
        const S = t3.extractPoints(a);
        let b = S.shape;
        const E = S.holes;
        if (!ku.isClockWise(b)) {
          b = b.reverse();
          for (let t4 = 0, e2 = E.length; t4 < e2; t4++) {
            const e3 = E[t4];
            ku.isClockWise(e3) && (E[t4] = e3.reverse());
          }
        }
        const T = ku.triangulateShape(b, E), w = b;
        for (let t4 = 0, e2 = E.length; t4 < e2; t4++) {
          const e3 = E[t4];
          b = b.concat(e3);
        }
        function A(t4, e2, n2) {
          return e2 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e2, n2);
        }
        const R = b.length, C2 = T.length;
        function P2(t4, e2, n2) {
          let i2, r2, s3;
          const a2 = t4.x - e2.x, o2 = t4.y - e2.y, l3 = n2.x - t4.x, c3 = n2.y - t4.y, h3 = a2 * a2 + o2 * o2, u3 = a2 * c3 - o2 * l3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(h3), d3 = Math.sqrt(l3 * l3 + c3 * c3), p2 = e2.x - o2 / u4, m2 = e2.y + a2 / u4, f2 = ((n2.x - c3 / d3 - p2) * c3 - (n2.y + l3 / d3 - m2) * l3) / (a2 * c3 - o2 * l3);
            i2 = p2 + a2 * f2 - t4.x, r2 = m2 + o2 * f2 - t4.y;
            const g2 = i2 * i2 + r2 * r2;
            if (g2 <= 2) return new Qn(i2, r2);
            s3 = Math.sqrt(g2 / 2);
          } else {
            let t5 = false;
            a2 > Number.EPSILON ? l3 > Number.EPSILON && (t5 = true) : a2 < -Number.EPSILON ? l3 < -Number.EPSILON && (t5 = true) : Math.sign(o2) === Math.sign(c3) && (t5 = true), t5 ? (i2 = -o2, r2 = a2, s3 = Math.sqrt(h3)) : (i2 = a2, r2 = o2, s3 = Math.sqrt(h3 / 2));
          }
          return new Qn(i2 / s3, r2 / s3);
        }
        const L = [];
        for (let t4 = 0, e2 = w.length, n2 = e2 - 1, i2 = t4 + 1; t4 < e2; t4++, n2++, i2++) n2 === e2 && (n2 = 0), i2 === e2 && (i2 = 0), L[t4] = P2(w[t4], w[n2], w[i2]);
        const I = [];
        let U, N = L.concat();
        for (let t4 = 0, e2 = E.length; t4 < e2; t4++) {
          const e3 = E[t4];
          U = [];
          for (let t5 = 0, n2 = e3.length, i2 = n2 - 1, r2 = t5 + 1; t5 < n2; t5++, i2++, r2++) i2 === n2 && (i2 = 0), r2 === n2 && (r2 = 0), U[t5] = P2(e3[t5], e3[i2], e3[r2]);
          I.push(U), N = N.concat(U);
        }
        for (let t4 = 0; t4 < p; t4++) {
          const e2 = t4 / p, n2 = h2 * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = w.length; t5 < e3; t5++) {
            const e4 = A(w[t5], L[t5], i2);
            F(e4.x, e4.y, -n2);
          }
          for (let t5 = 0, e3 = E.length; t5 < e3; t5++) {
            const e4 = E[t5];
            U = I[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A(e4[t6], U[t6], i2);
              F(r3.x, r3.y, -n2);
            }
          }
        }
        const D = u2 + d2;
        for (let t4 = 0; t4 < R; t4++) {
          const e2 = c2 ? A(b[t4], N[t4], D) : b[t4];
          M ? (x.copy(_.normals[0]).multiplyScalar(e2.x), v.copy(_.binormals[0]).multiplyScalar(e2.y), y2.copy(g[0]).add(x).add(v), F(y2.x, y2.y, y2.z)) : F(e2.x, e2.y, 0);
        }
        for (let t4 = 1; t4 <= o; t4++) for (let e2 = 0; e2 < R; e2++) {
          const n2 = c2 ? A(b[e2], N[e2], D) : b[e2];
          M ? (x.copy(_.normals[t4]).multiplyScalar(n2.x), v.copy(_.binormals[t4]).multiplyScalar(n2.y), y2.copy(g[t4]).add(x).add(v), F(y2.x, y2.y, y2.z)) : F(n2.x, n2.y, l2 / o * t4);
        }
        for (let t4 = p - 1; t4 >= 0; t4--) {
          const e2 = t4 / p, n2 = h2 * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = w.length; t5 < e3; t5++) {
            const e4 = A(w[t5], L[t5], i2);
            F(e4.x, e4.y, l2 + n2);
          }
          for (let t5 = 0, e3 = E.length; t5 < e3; t5++) {
            const e4 = E[t5];
            U = I[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A(e4[t6], U[t6], i2);
              M ? F(r3.x, r3.y + g[o - 1].y, g[o - 1].x + n2) : F(r3.x, r3.y, l2 + n2);
            }
          }
        }
        function O(t4, e2) {
          let n2 = t4.length;
          for (; --n2 >= 0; ) {
            const i2 = n2;
            let r2 = n2 - 1;
            r2 < 0 && (r2 = t4.length - 1);
            for (let t5 = 0, n3 = o + 2 * p; t5 < n3; t5++) {
              const n4 = R * t5, s3 = R * (t5 + 1);
              z(e2 + i2 + n4, e2 + r2 + n4, e2 + r2 + s3, e2 + i2 + s3);
            }
          }
        }
        function F(t4, e2, n2) {
          s2.push(t4), s2.push(e2), s2.push(n2);
        }
        function B(t4, e2, r2) {
          H(t4), H(e2), H(r2);
          const s3 = i.length / 3, a2 = f.generateTopUV(n, i, s3 - 3, s3 - 2, s3 - 1);
          V(a2[0]), V(a2[1]), V(a2[2]);
        }
        function z(t4, e2, r2, s3) {
          H(t4), H(e2), H(s3), H(e2), H(r2), H(s3);
          const a2 = i.length / 3, o2 = f.generateSideWallUV(n, i, a2 - 6, a2 - 3, a2 - 2, a2 - 1);
          V(o2[0]), V(o2[1]), V(o2[3]), V(o2[1]), V(o2[2]), V(o2[3]);
        }
        function H(t4) {
          i.push(s2[3 * t4 + 0]), i.push(s2[3 * t4 + 1]), i.push(s2[3 * t4 + 2]);
        }
        function V(t4) {
          r.push(t4.x), r.push(t4.y);
        }
        !(function() {
          const t4 = i.length / 3;
          if (c2) {
            let t5 = 0, e2 = R * t5;
            for (let t6 = 0; t6 < C2; t6++) {
              const n2 = T[t6];
              B(n2[2] + e2, n2[1] + e2, n2[0] + e2);
            }
            t5 = o + 2 * p, e2 = R * t5;
            for (let t6 = 0; t6 < C2; t6++) {
              const n2 = T[t6];
              B(n2[0] + e2, n2[1] + e2, n2[2] + e2);
            }
          } else {
            for (let t5 = 0; t5 < C2; t5++) {
              const e2 = T[t5];
              B(e2[2], e2[1], e2[0]);
            }
            for (let t5 = 0; t5 < C2; t5++) {
              const e2 = T[t5];
              B(e2[0] + R * o, e2[1] + R * o, e2[2] + R * o);
            }
          }
          n.addGroup(t4, i.length / 3 - t4, 0);
        })(), (function() {
          const t4 = i.length / 3;
          let e2 = 0;
          O(w, e2), e2 += w.length;
          for (let t5 = 0, n2 = E.length; t5 < n2; t5++) {
            const n3 = E[t5];
            O(n3, e2), e2 += n3.length;
          }
          n.addGroup(t4, i.length / 3 - t4, 1);
        })();
      }
      this.setAttribute("position", new gs(i, 3)), this.setAttribute("uv", new gs(r, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e, n) {
        if (n.shapes = [], Array.isArray(t3)) for (let e2 = 0, i = t3.length; e2 < i; e2++) {
          const i2 = t3[e2];
          n.shapes.push(i2.uuid);
        }
        else n.shapes.push(t3.uuid);
        n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      })(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i2 = 0, r = t2.shapes.length; i2 < r; i2++) {
        const r2 = e[t2.shapes[i2]];
        n.push(r2);
      }
      const i = t2.options.extrudePath;
      return void 0 !== i && (t2.options.extrudePath = new eu[i.type]().fromJSON(i)), new _Xu(n, t2.options);
    }
  };
  var ju = { generateTopUV: function(t2, e, n, i, r) {
    const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l2 = e[3 * i + 1], c2 = e[3 * r], h2 = e[3 * r + 1];
    return [new Qn(s, a), new Qn(o, l2), new Qn(c2, h2)];
  }, generateSideWallUV: function(t2, e, n, i, r, s) {
    const a = e[3 * n], o = e[3 * n + 1], l2 = e[3 * n + 2], c2 = e[3 * i], h2 = e[3 * i + 1], u2 = e[3 * i + 2], d2 = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], _ = e[3 * s + 2];
    return Math.abs(o - h2) < Math.abs(a - c2) ? [new Qn(a, 1 - l2), new Qn(c2, 1 - u2), new Qn(d2, 1 - m), new Qn(f, 1 - _)] : [new Qn(o, 1 - l2), new Qn(h2, 1 - u2), new Qn(p, 1 - m), new Qn(g, 1 - _)];
  } };
  var qu = class _qu extends cu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2;
      super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _qu(t2.radius, t2.detail);
    }
  };
  var Yu = class _Yu extends cu {
    constructor(t2 = 1, e = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _Yu(t2.radius, t2.detail);
    }
  };
  var Zu = class _Zu extends Ts {
    constructor(t2 = 0.5, e = 1, n = 32, i = 1, r = 0, s = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: s }, n = Math.max(3, n);
      const a = [], o = [], l2 = [], c2 = [];
      let h2 = t2;
      const u2 = (e - t2) / (i = Math.max(1, i)), d2 = new Ii(), p = new Qn();
      for (let t3 = 0; t3 <= i; t3++) {
        for (let t4 = 0; t4 <= n; t4++) {
          const i2 = r + t4 / n * s;
          d2.x = h2 * Math.cos(i2), d2.y = h2 * Math.sin(i2), o.push(d2.x, d2.y, d2.z), l2.push(0, 0, 1), p.x = (d2.x / e + 1) / 2, p.y = (d2.y / e + 1) / 2, c2.push(p.x, p.y);
        }
        h2 += u2;
      }
      for (let t3 = 0; t3 < i; t3++) {
        const e2 = t3 * (n + 1);
        for (let t4 = 0; t4 < n; t4++) {
          const i2 = t4 + e2, r2 = i2, s2 = i2 + n + 1, o2 = i2 + n + 2, l3 = i2 + 1;
          a.push(r2, s2, l3), a.push(s2, o2, l3);
        }
      }
      this.setIndex(a), this.setAttribute("position", new gs(o, 3)), this.setAttribute("normal", new gs(l2, 3)), this.setAttribute("uv", new gs(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Zu(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Ju = class _Ju extends Ts {
    constructor(t2 = new gu([new Qn(0, 0.5), new Qn(-0.5, -0.5), new Qn(0.5, -0.5)]), e = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e };
      const n = [], i = [], r = [], s = [];
      let a = 0, o = 0;
      if (false === Array.isArray(t2)) l2(t2);
      else for (let e2 = 0; e2 < t2.length; e2++) l2(t2[e2]), this.addGroup(a, o, e2), a += o, o = 0;
      function l2(t3) {
        const a2 = i.length / 3, l3 = t3.extractPoints(e);
        let c2 = l3.shape;
        const h2 = l3.holes;
        false === ku.isClockWise(c2) && (c2 = c2.reverse());
        for (let t4 = 0, e2 = h2.length; t4 < e2; t4++) {
          const e3 = h2[t4];
          true === ku.isClockWise(e3) && (h2[t4] = e3.reverse());
        }
        const u2 = ku.triangulateShape(c2, h2);
        for (let t4 = 0, e2 = h2.length; t4 < e2; t4++) {
          const e3 = h2[t4];
          c2 = c2.concat(e3);
        }
        for (let t4 = 0, e2 = c2.length; t4 < e2; t4++) {
          const e3 = c2[t4];
          i.push(e3.x, e3.y, 0), r.push(0, 0, 1), s.push(e3.x, e3.y);
        }
        for (let t4 = 0, e2 = u2.length; t4 < e2; t4++) {
          const e3 = u2[t4], i2 = e3[0] + a2, r2 = e3[1] + a2, s2 = e3[2] + a2;
          n.push(i2, r2, s2), o += 3;
        }
      }
      this.setIndex(n), this.setAttribute("position", new gs(i, 3)), this.setAttribute("normal", new gs(r, 3)), this.setAttribute("uv", new gs(s, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e) {
        if (e.shapes = [], Array.isArray(t3)) for (let n = 0, i = t3.length; n < i; n++) {
          const i2 = t3[n];
          e.shapes.push(i2.uuid);
        }
        else e.shapes.push(t3.uuid);
        return e;
      })(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i = 0, r = t2.shapes.length; i < r; i++) {
        const r2 = e[t2.shapes[i]];
        n.push(r2);
      }
      return new _Ju(n, t2.curveSegments);
    }
  };
  var Ku = class _Ku extends Ts {
    constructor(t2 = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: s, thetaLength: a }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      const o = Math.min(s + a, Math.PI);
      let l2 = 0;
      const c2 = [], h2 = new Ii(), u2 = new Ii(), d2 = [], p = [], m = [], f = [];
      for (let d3 = 0; d3 <= n; d3++) {
        const g = [], _ = d3 / n;
        let v = 0;
        0 === d3 && 0 === s ? v = 0.5 / e : d3 === n && o === Math.PI && (v = -0.5 / e);
        for (let n2 = 0; n2 <= e; n2++) {
          const o2 = n2 / e;
          h2.x = -t2 * Math.cos(i + o2 * r) * Math.sin(s + _ * a), h2.y = t2 * Math.cos(s + _ * a), h2.z = t2 * Math.sin(i + o2 * r) * Math.sin(s + _ * a), p.push(h2.x, h2.y, h2.z), u2.copy(h2).normalize(), m.push(u2.x, u2.y, u2.z), f.push(o2 + v, 1 - _), g.push(l2++);
        }
        c2.push(g);
      }
      for (let t3 = 0; t3 < n; t3++) for (let i2 = 0; i2 < e; i2++) {
        const e2 = c2[t3][i2 + 1], r2 = c2[t3][i2], a2 = c2[t3 + 1][i2], l3 = c2[t3 + 1][i2 + 1];
        (0 !== t3 || s > 0) && d2.push(e2, r2, l3), (t3 !== n - 1 || o < Math.PI) && d2.push(r2, a2, l3);
      }
      this.setIndex(d2), this.setAttribute("position", new gs(p, 3)), this.setAttribute("normal", new gs(m, 3)), this.setAttribute("uv", new gs(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ku(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var $u = class _$u extends cu {
    constructor(t2 = 1, e = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _$u(t2.radius, t2.detail);
    }
  };
  var Qu = class _Qu extends Ts {
    constructor(t2 = 1, e = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
      const s = [], a = [], o = [], l2 = [], c2 = new Ii(), h2 = new Ii(), u2 = new Ii();
      for (let s2 = 0; s2 <= n; s2++) for (let d2 = 0; d2 <= i; d2++) {
        const p = d2 / i * r, m = s2 / n * Math.PI * 2;
        h2.x = (t2 + e * Math.cos(m)) * Math.cos(p), h2.y = (t2 + e * Math.cos(m)) * Math.sin(p), h2.z = e * Math.sin(m), a.push(h2.x, h2.y, h2.z), c2.x = t2 * Math.cos(p), c2.y = t2 * Math.sin(p), u2.subVectors(h2, c2).normalize(), o.push(u2.x, u2.y, u2.z), l2.push(d2 / i), l2.push(s2 / n);
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * t3 + e2 - 1, r2 = (i + 1) * (t3 - 1) + e2 - 1, a2 = (i + 1) * (t3 - 1) + e2, o2 = (i + 1) * t3 + e2;
        s.push(n2, r2, o2), s.push(r2, a2, o2);
      }
      this.setIndex(s), this.setAttribute("position", new gs(a, 3)), this.setAttribute("normal", new gs(o, 3)), this.setAttribute("uv", new gs(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Qu(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var td = class _td extends Ts {
    constructor(t2 = 1, e = 0.4, n = 64, i = 8, r = 2, s = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e, tubularSegments: n, radialSegments: i, p: r, q: s }, n = Math.floor(n), i = Math.floor(i);
      const a = [], o = [], l2 = [], c2 = [], h2 = new Ii(), u2 = new Ii(), d2 = new Ii(), p = new Ii(), m = new Ii(), f = new Ii(), g = new Ii();
      for (let a2 = 0; a2 <= n; ++a2) {
        const v = a2 / n * r * Math.PI * 2;
        _(v, r, s, t2, d2), _(v + 0.01, r, s, t2, p), f.subVectors(p, d2), g.addVectors(p, d2), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
        for (let t3 = 0; t3 <= i; ++t3) {
          const r2 = t3 / i * Math.PI * 2, s2 = -e * Math.cos(r2), p2 = e * Math.sin(r2);
          h2.x = d2.x + (s2 * g.x + p2 * m.x), h2.y = d2.y + (s2 * g.y + p2 * m.y), h2.z = d2.z + (s2 * g.z + p2 * m.z), o.push(h2.x, h2.y, h2.z), u2.subVectors(h2, d2).normalize(), l2.push(u2.x, u2.y, u2.z), c2.push(a2 / n), c2.push(t3 / i);
        }
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, o2 = (i + 1) * (t3 - 1) + e2;
        a.push(n2, r2, o2), a.push(r2, s2, o2);
      }
      function _(t3, e2, n2, i2, r2) {
        const s2 = Math.cos(t3), a2 = Math.sin(t3), o2 = n2 / e2 * t3, l3 = Math.cos(o2);
        r2.x = i2 * (2 + l3) * 0.5 * s2, r2.y = i2 * (2 + l3) * a2 * 0.5, r2.z = i2 * Math.sin(o2) * 0.5;
      }
      this.setIndex(a), this.setAttribute("position", new gs(o, 3)), this.setAttribute("normal", new gs(l2, 3)), this.setAttribute("uv", new gs(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _td(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var ed = class _ed extends Ts {
    constructor(t2 = new Qh(new Ii(-1, -1, 0), new Ii(-1, 1, 0), new Ii(1, 1, 0)), e = 64, n = 1, i = 8, r = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e, radius: n, radialSegments: i, closed: r };
      const s = t2.computeFrenetFrames(e, r);
      this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
      const a = new Ii(), o = new Ii(), l2 = new Qn();
      let c2 = new Ii();
      const h2 = [], u2 = [], d2 = [], p = [];
      function m(r2) {
        c2 = t2.getPointAt(r2 / e, c2);
        const l3 = s.normals[r2], d3 = s.binormals[r2];
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * Math.PI * 2, r3 = Math.sin(e2), s2 = -Math.cos(e2);
          o.x = s2 * l3.x + r3 * d3.x, o.y = s2 * l3.y + r3 * d3.y, o.z = s2 * l3.z + r3 * d3.z, o.normalize(), u2.push(o.x, o.y, o.z), a.x = c2.x + n * o.x, a.y = c2.y + n * o.y, a.z = c2.z + n * o.z, h2.push(a.x, a.y, a.z);
        }
      }
      !(function() {
        for (let t3 = 0; t3 < e; t3++) m(t3);
        m(false === r ? e : 0), (function() {
          for (let t3 = 0; t3 <= e; t3++) for (let n2 = 0; n2 <= i; n2++) l2.x = t3 / e, l2.y = n2 / i, d2.push(l2.x, l2.y);
        })(), (function() {
          for (let t3 = 1; t3 <= e; t3++) for (let e2 = 1; e2 <= i; e2++) {
            const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, a2 = (i + 1) * (t3 - 1) + e2;
            p.push(n2, r2, a2), p.push(r2, s2, a2);
          }
        })();
      })(), this.setIndex(p), this.setAttribute("position", new gs(h2, 3)), this.setAttribute("normal", new gs(u2, 3)), this.setAttribute("uv", new gs(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _ed(new eu[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var nd = class extends Ts {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e = [], n = /* @__PURE__ */ new Set(), i = new Ii(), r = new Ii();
        if (null !== t2.index) {
          const s = t2.attributes.position, a = t2.index;
          let o = t2.groups;
          0 === o.length && (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
          for (let t3 = 0, l2 = o.length; t3 < l2; ++t3) {
            const l3 = o[t3], c2 = l3.start;
            for (let t4 = c2, o2 = c2 + l3.count; t4 < o2; t4 += 3) for (let o3 = 0; o3 < 3; o3++) {
              const l4 = a.getX(t4 + o3), c3 = a.getX(t4 + (o3 + 1) % 3);
              i.fromBufferAttribute(s, l4), r.fromBufferAttribute(s, c3), true === id(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
          }
        } else {
          const s = t2.attributes.position;
          for (let t3 = 0, a = s.count / 3; t3 < a; t3++) for (let a2 = 0; a2 < 3; a2++) {
            const o = 3 * t3 + a2, l2 = 3 * t3 + (a2 + 1) % 3;
            i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l2), true === id(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
        }
        this.setAttribute("position", new gs(e, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function id(t2, e, n) {
    const i = `${t2.x},${t2.y},${t2.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== n.has(i) && true !== n.has(r) && (n.add(i), n.add(r), true);
  }
  var rd = Object.freeze({ __proto__: null, BoxGeometry: Xs, CapsuleGeometry: su, CircleGeometry: au, ConeGeometry: lu, CylinderGeometry: ou, DodecahedronGeometry: hu, EdgesGeometry: fu, ExtrudeGeometry: Xu, IcosahedronGeometry: qu, LatheGeometry: ru, OctahedronGeometry: Yu, PlaneGeometry: fa, PolyhedronGeometry: cu, RingGeometry: Zu, ShapeGeometry: Ju, SphereGeometry: Ku, TetrahedronGeometry: $u, TorusGeometry: Qu, TorusKnotGeometry: td, TubeGeometry: ed, WireframeGeometry: nd });
  var od = class extends $r {
    constructor(t2) {
      super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Zr(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Zr(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Qn(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  function fd(t2, e, n) {
    return !t2 || !n && t2.constructor === e ? t2 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t2) : Array.prototype.slice.call(t2);
  }
  function gd(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  var Md = class {
    constructor(t2, e, n, i) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e = this.parameterPositions;
      let n = this._cachedIndex, i = e[n], r = e[n - 1];
      t: {
        e: {
          let s;
          n: {
            i: if (!(t2 < i)) {
              for (let s2 = n + 2; ; ) {
                if (void 0 === i) {
                  if (t2 < r) break i;
                  return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === s2) break;
                if (r = i, i = e[++n], t2 < i) break e;
              }
              s = e.length;
              break n;
            }
            if (t2 >= r) break t;
            {
              const a = e[1];
              t2 < a && (n = 2, r = a);
              for (let s2 = n - 2; ; ) {
                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === s2) break;
                if (i = r, r = e[--n - 1], t2 >= r) break e;
              }
              s = n, n = 0;
            }
          }
          for (; n < s; ) {
            const i2 = n + s >>> 1;
            t2 < e[i2] ? s = i2 : n = i2 + 1;
          }
          if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t2, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t2 * i;
      for (let t3 = 0; t3 !== i; ++t3) e[t3] = n[r + t3];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var Sd = class extends Md {
    constructor(t2, e, n, i) {
      super(t2, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Le, endingEnd: Le };
    }
    intervalChanged_(t2, e, n) {
      const i = this.parameterPositions;
      let r = t2 - 2, s = t2 + 1, a = i[r], o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case Ie:
          r = t2, a = 2 * e - n;
          break;
        case Ue:
          r = i.length - 2, a = e + i[r] - i[r + 1];
          break;
        default:
          r = t2, a = n;
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case Ie:
          s = t2, o = 2 * n - e;
          break;
        case Ue:
          s = 1, o = n + i[1] - i[0];
          break;
        default:
          s = t2 - 1, o = e;
      }
      const l2 = 0.5 * (n - e), c2 = this.valueSize;
      this._weightPrev = l2 / (e - a), this._weightNext = l2 / (o - n), this._offsetPrev = r * c2, this._offsetNext = s * c2;
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c2 = this._offsetPrev, h2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p = (n - e) / (i - e), m = p * p, f = m * p, g = -u2 * f + 2 * u2 * m - u2 * p, _ = (1 + u2) * f + (-1.5 - 2 * u2) * m + (-0.5 + u2) * p + 1, v = (-1 - d2) * f + (1.5 + d2) * m + 0.5 * p, x = d2 * f - d2 * m;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = g * s[c2 + t3] + _ * s[l2 + t3] + v * s[o + t3] + x * s[h2 + t3];
      return r;
    }
  };
  var bd = class extends Md {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l2 = o - a, c2 = (n - e) / (i - e), h2 = 1 - c2;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = s[l2 + t3] * h2 + s[o + t3] * c2;
      return r;
    }
  };
  var Ed = class extends Md {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var Td = class {
    constructor(t2, e, n, i) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = fd(e, this.TimeBufferType), this.values = fd(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e = t2.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t2);
      else {
        n = { name: t2.name, times: fd(t2.times, Array), values: fd(t2.values, Array) };
        const e2 = t2.getInterpolation();
        e2 !== t2.DefaultInterpolation && (n.interpolation = e2);
      }
      return n.type = t2.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new Ed(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new bd(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new Sd(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e;
      switch (t2) {
        case Re:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ce:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case Pe:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e2 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e2);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e2), this;
      }
      return this.createInterpolant = e, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Re;
        case this.InterpolantFactoryMethodLinear:
          return Ce;
        case this.InterpolantFactoryMethodSmooth:
          return Pe;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t2;
      }
      return this;
    }
    trim(t2, e) {
      const n = this.times, i = n.length;
      let r = 0, s = i - 1;
      for (; r !== i && n[r] < t2; ) ++r;
      for (; -1 !== s && n[s] > e; ) --s;
      if (++s, 0 !== r || s !== i) {
        r >= s && (s = Math.max(s, 1), r = s - 1);
        const t3 = this.getValueSize();
        this.times = n.slice(r, s), this.values = this.values.slice(r * t3, s * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const n = this.times, i = this.values, r = n.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
      let s = null;
      for (let e2 = 0; e2 !== r; e2++) {
        const i2 = n[e2];
        if ("number" == typeof i2 && isNaN(i2)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e2, i2), t2 = false;
          break;
        }
        if (null !== s && s > i2) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e2, i2, s), t2 = false;
          break;
        }
        s = i2;
      }
      if (void 0 !== i && gd(i)) for (let e2 = 0, n2 = i.length; e2 !== n2; ++e2) {
        const n3 = i[e2];
        if (isNaN(n3)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e2, n3), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Pe, r = t2.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r2 = false;
        const o = t2[a];
        if (o !== t2[a + 1] && (1 !== a || o !== t2[0])) if (i) r2 = true;
        else {
          const t3 = a * n, i2 = t3 - n, s2 = t3 + n;
          for (let a2 = 0; a2 !== n; ++a2) {
            const n2 = e[t3 + a2];
            if (n2 !== e[i2 + a2] || n2 !== e[s2 + a2]) {
              r2 = true;
              break;
            }
          }
        }
        if (r2) {
          if (a !== s) {
            t2[s] = t2[a];
            const i2 = a * n, r3 = s * n;
            for (let t3 = 0; t3 !== n; ++t3) e[r3 + t3] = e[i2 + t3];
          }
          ++s;
        }
      }
      if (r > 0) {
        t2[s] = t2[r];
        for (let t3 = r * n, i2 = s * n, a = 0; a !== n; ++a) e[i2 + a] = e[t3 + a];
        ++s;
      }
      return s !== t2.length ? (this.times = t2.slice(0, s), this.values = e.slice(0, s * n)) : (this.times = t2, this.values = e), this;
    }
    clone() {
      const t2 = this.times.slice(), e = this.values.slice(), n = new (0, this.constructor)(this.name, t2, e);
      return n.createInterpolant = this.createInterpolant, n;
    }
  };
  Td.prototype.TimeBufferType = Float32Array, Td.prototype.ValueBufferType = Float32Array, Td.prototype.DefaultInterpolation = Ce;
  var wd = class extends Td {
  };
  wd.prototype.ValueTypeName = "bool", wd.prototype.ValueBufferType = Array, wd.prototype.DefaultInterpolation = Re, wd.prototype.InterpolantFactoryMethodLinear = void 0, wd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Ad = class extends Td {
  };
  Ad.prototype.ValueTypeName = "color";
  var Rd = class extends Td {
  };
  Rd.prototype.ValueTypeName = "number";
  var Cd = class extends Md {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
      let l2 = t2 * a;
      for (let t3 = l2 + a; l2 !== t3; l2 += 4) Li.slerpFlat(r, 0, s, l2 - a, s, l2, o);
      return r;
    }
  };
  var Pd = class extends Td {
    InterpolantFactoryMethodLinear(t2) {
      return new Cd(this.times, this.values, this.getValueSize(), t2);
    }
  };
  Pd.prototype.ValueTypeName = "quaternion", Pd.prototype.DefaultInterpolation = Ce, Pd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Ld = class extends Td {
  };
  Ld.prototype.ValueTypeName = "string", Ld.prototype.ValueBufferType = Array, Ld.prototype.DefaultInterpolation = Re, Ld.prototype.InterpolantFactoryMethodLinear = void 0, Ld.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Id = class extends Td {
  };
  Id.prototype.ValueTypeName = "vector";
  var Od = class {
    constructor(t2, e, n) {
      const i = this;
      let r, s = false, a = 0, o = 0;
      const l2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e, this.onError = n, this.itemStart = function(t3) {
        o++, false === s && void 0 !== i.onStart && i.onStart(t3, a, o), s = true;
      }, this.itemEnd = function(t3) {
        a++, void 0 !== i.onProgress && i.onProgress(t3, a, o), a === o && (s = false, void 0 !== i.onLoad && i.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i.onError && i.onError(t3);
      }, this.resolveURL = function(t3) {
        return r ? r(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r = t3, this;
      }, this.addHandler = function(t3, e2) {
        return l2.push(t3, e2), this;
      }, this.removeHandler = function(t3) {
        const e2 = l2.indexOf(t3);
        return -1 !== e2 && l2.splice(e2, 2), this;
      }, this.getHandler = function(t3) {
        for (let e2 = 0, n2 = l2.length; e2 < n2; e2 += 2) {
          const n3 = l2[e2], i2 = l2[e2 + 1];
          if (n3.global && (n3.lastIndex = 0), n3.test(t3)) return i2;
        }
        return null;
      };
    }
  };
  var Fd = new Od();
  var Bd = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : Fd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e) {
      const n = this;
      return new Promise((function(i, r) {
        n.load(t2, i, e, r);
      }));
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
  };
  Bd.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var Yd = class extends Ur {
    constructor(t2, e = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new Zr(t2), this.intensity = e;
    }
    dispose() {
    }
    copy(t2, e) {
      return super.copy(t2, e), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
    }
  };
  var Zd = class extends Yd {
    constructor(t2, e, n) {
      super(t2, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Ur.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Zr(e);
    }
    copy(t2, e) {
      return super.copy(t2, e), this.groundColor.copy(t2.groundColor), this;
    }
  };
  var Jd = new lr();
  var Kd = new Ii();
  var $d = new Ii();
  var Qd = class {
    constructor(t2) {
      this.camera = t2, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Qn(512, 512), this.map = null, this.mapPass = null, this.matrix = new lr(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new da(), this._frameExtents = new Qn(1, 1), this._viewportCount = 1, this._viewports = [new bi(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e = this.camera, n = this.matrix;
      Kd.setFromMatrixPosition(t2.matrixWorld), e.position.copy(Kd), $d.setFromMatrixPosition(t2.target.matrixWorld), e.lookAt($d), e.updateMatrixWorld(), Jd.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Jd), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Jd);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.bias = t2.bias, this.radius = t2.radius, this.mapSize.copy(t2.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var np = new lr();
  var ip = new Ii();
  var rp = new Ii();
  var sp = class extends Qd {
    constructor() {
      super(new ea(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Qn(4, 2), this._viewportCount = 6, this._viewports = [new bi(2, 1, 1, 1), new bi(0, 1, 1, 1), new bi(3, 1, 1, 1), new bi(1, 1, 1, 1), new bi(3, 0, 1, 1), new bi(1, 0, 1, 1)], this._cubeDirections = [new Ii(1, 0, 0), new Ii(-1, 0, 0), new Ii(0, 0, 1), new Ii(0, 0, -1), new Ii(0, 1, 0), new Ii(0, -1, 0)], this._cubeUps = [new Ii(0, 1, 0), new Ii(0, 1, 0), new Ii(0, 1, 0), new Ii(0, 1, 0), new Ii(0, 0, 1), new Ii(0, 0, -1)];
    }
    updateMatrices(t2, e = 0) {
      const n = this.camera, i = this.matrix, r = t2.distance || n.far;
      r !== n.far && (n.far = r, n.updateProjectionMatrix()), ip.setFromMatrixPosition(t2.matrixWorld), n.position.copy(ip), rp.copy(n.position), rp.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(rp), n.updateMatrixWorld(), i.makeTranslation(-ip.x, -ip.y, -ip.z), np.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(np);
    }
  };
  var ap = class extends Yd {
    constructor(t2, e, n = 0, i = 2) {
      super(t2, e), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new sp();
    }
    get power() {
      return 4 * this.intensity * Math.PI;
    }
    set power(t2) {
      this.intensity = t2 / (4 * Math.PI);
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.distance = t2.distance, this.decay = t2.decay, this.shadow = t2.shadow.clone(), this;
    }
  };
  var op = class extends Qd {
    constructor() {
      super(new wa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var lp = class extends Yd {
    constructor(t2, e) {
      super(t2, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Ur.DEFAULT_UP), this.updateMatrix(), this.target = new Ur(), this.shadow = new op();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var Tp = new lr();
  var wp = new lr();
  var Ap = new lr();
  var Cp = class {
    constructor(t2 = true) {
      this.autoStart = t2, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
    }
    start() {
      this.startTime = Pp(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
    }
    stop() {
      this.getElapsedTime(), this.running = false, this.autoStart = false;
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let t2 = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const e = Pp();
        t2 = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t2;
      }
      return t2;
    }
  };
  function Pp() {
    return ("undefined" == typeof performance ? Date : performance).now();
  }
  var Lp = new Ii();
  var Ip = new Li();
  var Up = new Ii();
  var Np = new Ii();
  var Fp = new Ii();
  var Bp = new Li();
  var zp = new Ii();
  var Hp = new Ii();
  var Wp = "\\[\\]\\.:\\/";
  var Xp = new RegExp("[" + Wp + "]", "g");
  var jp = "[^" + Wp + "]";
  var qp = "[^" + Wp.replace("\\.", "") + "]";
  var Yp = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", jp) + /(WCOD+)?/.source.replace("WCOD", qp) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", jp) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", jp) + "$");
  var Zp = ["material", "materials", "bones", "map"];
  var Jp = class _Jp {
    constructor(t2, e, n) {
      this.path = e, this.parsedPath = n || _Jp.parseTrackName(e), this.node = _Jp.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e, n) {
      return t2 && t2.isAnimationObjectGroup ? new _Jp.Composite(t2, e, n) : new _Jp(t2, e, n);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Xp, "");
    }
    static parseTrackName(t2) {
      const e = Yp.exec(t2);
      if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t3 = n.nodeName.substring(i + 1);
        -1 !== Zp.indexOf(t3) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t3);
      }
      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return n;
    }
    static findNode(t2, e) {
      if (void 0 === e || "" === e || "." === e || -1 === e || e === t2.name || e === t2.uuid) return t2;
      if (t2.skeleton) {
        const n = t2.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t2.children) {
        const n = function(t3) {
          for (let i2 = 0; i2 < t3.length; i2++) {
            const r = t3[i2];
            if (r.name === e || r.uuid === e) return r;
            const s = n(r.children);
            if (s) return s;
          }
          return null;
        }, i = n(t2.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e) {
      t2[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t2[e++] = n[i];
    }
    _getValue_arrayElement(t2, e) {
      t2[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e) {
      this.resolvedProperty.toArray(t2, e);
    }
    _setValue_direct(t2, e) {
      this.targetObject[this.propertyName] = t2[e];
    }
    _setValue_direct_setNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
    }
    _setValue_array_setNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e) {
      this.resolvedProperty.fromArray(t2, e);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e) {
      this.bind(), this.getValue(t2, e);
    }
    _setValue_unbound(t2, e) {
      this.bind(), this.setValue(t2, e);
    }
    bind() {
      let t2 = this.node;
      const e = this.parsedPath, n = e.objectName, i = e.propertyName;
      let r = e.propertyIndex;
      if (t2 || (t2 = _Jp.findNode(this.rootNode, e.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (n) {
        let i2 = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].name === i2) {
              i2 = e2;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[n];
        }
        if (void 0 !== i2) {
          if (void 0 === t2[i2]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i2];
        }
      }
      const s = t2[i];
      if (void 0 === s) {
        const n2 = e.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n2 + "." + i + " but it wasn't found.", t2);
      }
      let a = this.Versioning.None;
      this.targetObject = t2, void 0 !== t2.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t2.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t2.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r] && (r = t2.morphTargetDictionary[r]);
        }
        o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
      } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  Jp.Composite = class {
    constructor(t2, e, n) {
      const i = n || Jp.parseTrackName(e);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e, i);
    }
    getValue(t2, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      void 0 !== i && i.getValue(t2, e);
    }
    setValue(t2, e) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t2, e);
    }
    bind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].unbind();
    }
  }, Jp.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Jp.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Jp.prototype.GetterByBindingType = [Jp.prototype._getValue_direct, Jp.prototype._getValue_array, Jp.prototype._getValue_arrayElement, Jp.prototype._getValue_toArray], Jp.prototype.SetterByBindingTypeAndVersioning = [[Jp.prototype._setValue_direct, Jp.prototype._setValue_direct_setNeedsUpdate, Jp.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Jp.prototype._setValue_array, Jp.prototype._setValue_array_setNeedsUpdate, Jp.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Jp.prototype._setValue_arrayElement, Jp.prototype._setValue_arrayElement_setNeedsUpdate, Jp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Jp.prototype._setValue_fromArray, Jp.prototype._setValue_fromArray_setNeedsUpdate, Jp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var Qp = new Float32Array(1);
  var am = class {
    constructor(t2, e, n = 0, i = 1 / 0) {
      this.ray = new or(t2, e), this.near = n, this.far = i, this.camera = null, this.layers = new xr(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
    }
    set(t2, e) {
      this.ray.set(t2, e);
    }
    setFromCamera(t2, e) {
      e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t2.x, t2.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t2.x, t2.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
    }
    intersectObject(t2, e = true, n = []) {
      return lm(t2, this, n, e), n.sort(om), n;
    }
    intersectObjects(t2, e = true, n = []) {
      for (let i = 0, r = t2.length; i < r; i++) lm(t2[i], this, n, e);
      return n.sort(om), n;
    }
  };
  function om(t2, e) {
    return t2.distance - e.distance;
  }
  function lm(t2, e, n, i) {
    if (t2.layers.test(e.layers) && t2.raycast(e, n), true === i) {
      const i2 = t2.children;
      for (let t3 = 0, r = i2.length; t3 < r; t3++) lm(i2[t3], e, n, true);
    }
  }
  var um = new Qn();
  var pm = new Ii();
  var mm = new Ii();
  var gm = new Ii();
  var vm = new Ii();
  var xm = new lr();
  var ym = new lr();
  var Em = new Ii();
  var Tm = new Zr();
  var wm = new Zr();
  var Pm = new Ii();
  var Lm = new Ii();
  var Im = new Ii();
  var Nm = new Ii();
  var Dm = new Ks();
  var Bm = new Di();
  var km = new Ii();
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // game.js
  var overlay = document.getElementById("overlay");
  var playButton = document.getElementById("playButton");
  var loadNote = document.getElementById("loadNote");
  var missionTextEl = document.getElementById("missionText");
  var hpValueEl = document.getElementById("hpValue");
  var armorValueEl = document.getElementById("armorValue");
  var hpFillEl = document.getElementById("hpFill");
  var armorFillEl = document.getElementById("armorFill");
  var levelValueEl = document.getElementById("levelValue");
  var scoreValueEl = document.getElementById("scoreValue");
  var materialsValueEl = document.getElementById("materialsValue");
  var weaponNameEl = document.getElementById("weaponName");
  var weaponMetaEl = document.getElementById("weaponMeta");
  var ammoTextEl = document.getElementById("ammoText");
  var grenadeTextEl = document.getElementById("grenadeText");
  var craftTextEl = document.getElementById("craftText");
  var reloadTextEl = document.getElementById("reloadText");
  var targetCardEl = document.getElementById("targetCard");
  var targetNameEl = document.getElementById("targetName");
  var targetHpEl = document.getElementById("targetHp");
  var crosshairEl = document.getElementById("crosshair");
  var hitMarkerEl = document.getElementById("hitMarker");
  var minimapCanvas = document.getElementById("minimapCanvas");
  var minimapInfoEl = document.getElementById("minimapInfo");
  var mobileHudEl = document.getElementById("mobileHud");
  var mobileLookZoneEl = document.getElementById("mobileLookZone");
  var joystickBaseEl = document.getElementById("joystickBase");
  var joystickKnobEl = document.getElementById("joystickKnob");
  var mobileFireEl = document.getElementById("mobileFire");
  var mobileJumpEl = document.getElementById("mobileJump");
  var mobileReloadEl = document.getElementById("mobileReload");
  var mobileSwitchEl = document.getElementById("mobileSwitch");
  var mobileGrenadeEl = document.getElementById("mobileGrenade");
  var mobileCraftEl = document.getElementById("mobileCraft");
  var rotateHintEl = document.getElementById("rotateHint");
  var isTouchDevice = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;
  var minimapCtx = minimapCanvas.getContext("2d");
  var mobileSessionActive = false;
  var pointerLocked = false;
  var statusTimer = 0;
  var hitMarkerTime = 0;
  var nextFireTime = 0;
  var reloading = false;
  var reloadTimer = 0;
  var muzzleFlashStrength = 0;
  var currentTargetEnemy = null;
  var currentWeaponKey = "handgun";
  var renderer = new $l({ antialias: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = c;
  renderer.outputColorSpace = je;
  renderer.toneMapping = et;
  renderer.toneMappingExposure = 1.08;
  document.body.appendChild(renderer.domElement);
  var scene = new nc();
  scene.background = new Zr(9225471);
  scene.fog = new ec(9225471, 18, 110);
  var camera = new ea(72, window.innerWidth / window.innerHeight, 0.1, 180);
  scene.add(camera);
  var playerRig = new Xl();
  scene.add(playerRig);
  var worldGroup = new Xl();
  scene.add(worldGroup);
  var decorGroup = new Xl();
  scene.add(decorGroup);
  var clock = new Cp();
  var raycaster = new am();
  raycaster.firstHitOnly = true;
  var tempVecA = new Ii();
  var tempVecB = new Ii();
  var tempVecC = new Ii();
  var tempVecD = new Ii();
  var tempVecE = new Ii();
  var tempOrigin = new Ii();
  var tempDirection = new Ii();
  var tempRight = new Ii();
  var tempUp = new Ii(0, 1, 0);
  var tempEuler = new vr(0, 0, 0, "YXZ");
  var zeroVec = new Ii();
  var colliders = [];
  var walkableMeshes = [];
  var obstacleMeshes = [];
  var raycastTargets = [];
  var destructibleBlocks = [];
  var enemies = [];
  var pickups = [];
  var impactParticles = [];
  var tracers = [];
  var grenades = [];
  var explosionBursts = [];
  var input = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    jumpQueued: false,
    triggerHeld: false,
    queuedSemiShot: false
  };
  var touchInput = {
    moveX: 0,
    moveY: 0,
    joystickPointerId: null,
    lookPointerId: null,
    lookLastX: 0,
    lookLastY: 0
  };
  var player = {
    radius: 0.38,
    height: 1.82,
    eyeHeight: 1.58,
    gravity: 23,
    jumpSpeed: 7.5,
    moveSpeed: 7.2,
    airMoveSpeed: 4.7,
    velocity: new Ii(),
    onGround: false,
    bobTime: 0,
    moveAmount: 0,
    hp: 100,
    maxHp: 100,
    armor: 60,
    maxArmor: 100,
    score: 0,
    level: 1,
    materials: 0,
    grenadeCount: 2,
    damageCooldown: 0
  };
  var view = {
    yaw: Math.PI,
    pitch: -0.14,
    pitchMin: -0.95,
    pitchMax: 0.65,
    distance: 4.9,
    shoulder: 1.08,
    focusHeight: 1.42,
    currentCameraPos: new Ii(0, 3.8, 10),
    currentLookPos: new Ii(0, 1.6, 0)
  };
  var recoil = {
    cam: 0,
    camTarget: 0,
    pos: new Ii(),
    posTarget: new Ii(),
    rot: new Ii(),
    rotTarget: new Ii(),
    reloadLift: 0,
    reloadTarget: 0
  };
  var sway = {
    x: 0,
    y: 0,
    xTarget: 0,
    yTarget: 0
  };
  if (isTouchDevice) {
    document.documentElement.classList.add("touch-device");
    mobileHudEl.setAttribute("aria-hidden", "false");
  }
  window.addEventListener("error", () => {
    loadNote.textContent = "Battlefield loading failed. Reload this page.";
    loadNote.classList.add("error");
  });
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function damp(value, target, lambda, dt2) {
    return $n.lerp(value, target, 1 - Math.exp(-lambda * dt2));
  }
  function dampVector(vector, target, lambda, dt2) {
    vector.lerp(target, 1 - Math.exp(-lambda * dt2));
  }
  function dampAngle(value, target, lambda, dt2) {
    const delta = Math.atan2(Math.sin(target - value), Math.cos(target - value));
    return value + delta * (1 - Math.exp(-lambda * dt2));
  }
  function removeFromArray(list, item) {
    const index = list.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
    }
  }
  function setStatus(text, hold = 2.2) {
    missionTextEl.textContent = text;
    statusTimer = hold;
  }
  function isGameActive() {
    return isTouchDevice ? mobileSessionActive : pointerLocked;
  }
  function updateOrientationState() {
    if (!isTouchDevice) {
      return;
    }
    const portrait = window.innerHeight > window.innerWidth;
    document.documentElement.classList.toggle("portrait-touch", portrait);
    rotateHintEl.hidden = !portrait;
  }
  async function tryLockLandscape() {
    if (!isTouchDevice || !screen.orientation || !screen.orientation.lock) {
      return;
    }
    try {
      await screen.orientation.lock("landscape");
    } catch (_error) {
      updateOrientationState();
    }
  }
  function startGameSession() {
    if (isTouchDevice) {
      mobileSessionActive = true;
      overlay.classList.add("hidden");
      loadNote.textContent = "Touch deployment active.";
      setStatus("Touch deployment active. Sweep the streets of Cubis.", 1.6);
      tryLockLandscape();
      return;
    }
    renderer.domElement.requestPointerLock();
  }
  function getDefaultMissionText() {
    if (roundState.current === 0) {
      return "Deploy when ready. Round combat begins the moment you enter the district.";
    }
    if (roundState.pending) {
      return `Round ${roundState.current} clear. Next wave in ${Math.max(1, Math.ceil(roundState.countdown))}.`;
    }
    return `Round ${roundState.current} live. Hostiles left: ${roundState.activeCount}. Scrap ${player.materials} fuels ammo and grenades.`;
  }
  function createVoxelTexture(kind) {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    const fill = (color) => {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 64, 64);
    };
    if (kind === "grassTop") {
      fill("#6db95a");
      for (let i = 0; i < 230; i += 1) {
        ctx.fillStyle = i % 3 === 0 ? "#84d164" : i % 3 === 1 ? "#4f8e3f" : "#6ab94c";
        ctx.fillRect(Math.random() * 64 | 0, Math.random() * 64 | 0, 3, 3);
      }
    } else if (kind === "dirt") {
      fill("#7b5737");
      for (let i = 0; i < 220; i += 1) {
        ctx.fillStyle = i % 2 ? "#5f4128" : "#92653f";
        ctx.fillRect(Math.random() * 64 | 0, Math.random() * 64 | 0, 3, 3);
      }
    } else if (kind === "road") {
      fill("#6a7684");
      ctx.fillStyle = "#a7b5c6";
      ctx.fillRect(0, 28, 64, 8);
      for (let i = 0; i < 180; i += 1) {
        ctx.fillStyle = i % 2 ? "#4d5764" : "#7a8696";
        ctx.fillRect(Math.random() * 64 | 0, Math.random() * 64 | 0, 2, 2);
      }
    } else if (kind === "concrete") {
      fill("#8f99a8");
      for (let i = 0; i < 180; i += 1) {
        ctx.fillStyle = i % 3 === 0 ? "#6e7787" : i % 3 === 1 ? "#9da9b8" : "#7c8795";
        ctx.fillRect(Math.random() * 64 | 0, Math.random() * 64 | 0, 3, 3);
      }
    } else if (kind === "metalBlue") {
      fill("#325885");
      for (let y2 = 0; y2 < 64; y2 += 8) {
        ctx.fillStyle = y2 % 16 === 0 ? "#4f7eb4" : "#2b476c";
        ctx.fillRect(0, y2, 64, 5);
      }
      for (let i = 0; i < 48; i += 1) {
        ctx.fillStyle = "#8dbfff";
        ctx.fillRect((Math.random() * 60 | 0) + 2, (Math.random() * 60 | 0) + 2, 2, 2);
      }
    } else if (kind === "metalYellow") {
      fill("#8d6c22");
      for (let y2 = 0; y2 < 64; y2 += 8) {
        ctx.fillStyle = y2 % 16 === 0 ? "#c49a35" : "#73561c";
        ctx.fillRect(0, y2, 64, 5);
      }
      for (let i = 0; i < 48; i += 1) {
        ctx.fillStyle = "#ffe08f";
        ctx.fillRect((Math.random() * 60 | 0) + 2, (Math.random() * 60 | 0) + 2, 2, 2);
      }
    } else if (kind === "darkMetal") {
      fill("#3b4654");
      for (let y2 = 0; y2 < 64; y2 += 10) {
        ctx.fillStyle = y2 % 20 === 0 ? "#566173" : "#2e3743";
        ctx.fillRect(0, y2, 64, 6);
      }
    } else if (kind === "neon") {
      fill("#203044");
      ctx.fillStyle = "#7bffce";
      ctx.fillRect(10, 8, 12, 48);
      ctx.fillRect(42, 8, 12, 48);
      ctx.fillStyle = "#dffff3";
      ctx.fillRect(14, 12, 4, 40);
      ctx.fillRect(46, 12, 4, 40);
    } else {
      fill("#9a7d46");
    }
    const texture = new Dh(canvas);
    texture.colorSpace = je;
    texture.magFilter = ft;
    texture.minFilter = ft;
    texture.wrapS = dt;
    texture.wrapT = dt;
    return texture;
  }
  var textures = {
    grassTop: createVoxelTexture("grassTop"),
    dirt: createVoxelTexture("dirt"),
    road: createVoxelTexture("road"),
    concrete: createVoxelTexture("concrete"),
    metalBlue: createVoxelTexture("metalBlue"),
    metalYellow: createVoxelTexture("metalYellow"),
    darkMetal: createVoxelTexture("darkMetal"),
    neon: createVoxelTexture("neon")
  };
  var unitBlockGeometry = new Xs(1, 1, 1);
  function makeStandardMaterial(options) {
    return new od({
      flatShading: true,
      roughness: 0.82,
      metalness: 0.08,
      ...options
    });
  }
  var styleSets = {
    terrain: {
      materials: [
        makeStandardMaterial({ map: textures.dirt }),
        makeStandardMaterial({ map: textures.dirt }),
        makeStandardMaterial({ map: textures.grassTop }),
        makeStandardMaterial({ map: textures.dirt }),
        makeStandardMaterial({ map: textures.dirt }),
        makeStandardMaterial({ map: textures.dirt })
      ],
      debris: [11962200, 7126875, 8016950],
      minimap: "#62784f"
    },
    concrete: {
      materials: new Array(6).fill(0).map(() => makeStandardMaterial({ map: textures.concrete })),
      debris: [13883877, 11450567, 7832210],
      minimap: "#8a94a1"
    },
    road: {
      materials: [
        makeStandardMaterial({ map: textures.concrete }),
        makeStandardMaterial({ map: textures.concrete }),
        makeStandardMaterial({ map: textures.road }),
        makeStandardMaterial({ map: textures.concrete }),
        makeStandardMaterial({ map: textures.concrete }),
        makeStandardMaterial({ map: textures.concrete })
      ],
      debris: [15261640, 11187912, 7437196],
      minimap: "#6c7787"
    },
    blue: {
      materials: new Array(6).fill(0).map(() => makeStandardMaterial({
        map: textures.metalBlue,
        metalness: 0.22,
        roughness: 0.58
      })),
      debris: [10934527, 5146049, 2379134],
      minimap: "#3e75c0"
    },
    yellow: {
      materials: new Array(6).fill(0).map(() => makeStandardMaterial({
        map: textures.metalYellow,
        metalness: 0.18,
        roughness: 0.62
      })),
      debris: [16769192, 13737274, 8281893],
      minimap: "#c99d38"
    },
    dark: {
      materials: new Array(6).fill(0).map(() => makeStandardMaterial({
        map: textures.darkMetal,
        metalness: 0.28,
        roughness: 0.66
      })),
      debris: [13160923, 6582915, 2634305],
      minimap: "#506172"
    },
    neon: {
      materials: new Array(6).fill(0).map(() => makeStandardMaterial({
        map: textures.neon,
        emissive: 6619091,
        emissiveIntensity: 0.5,
        metalness: 0.12,
        roughness: 0.62
      })),
      debris: [14811124, 8123848, 2917234],
      minimap: "#63ffcf"
    }
  };
  function addSimpleOutline(mesh, color = 1185824, opacity = 0.4) {
    const outline = new Mh(
      new fu(mesh.geometry),
      new dh({ color, transparent: true, opacity })
    );
    mesh.add(outline);
  }
  function registerCollider(mesh, bounds, options = {}) {
    const collider = {
      mesh,
      bounds,
      style: options.style || "concrete",
      destructible: Boolean(options.destructible),
      hp: options.hp || 1,
      maxHp: options.hp || 1,
      reward: options.reward || 0,
      debris: options.debris || styleSets[options.style || "concrete"].debris,
      minimap: options.minimap || styleSets[options.style || "concrete"].minimap
    };
    mesh.userData.colliderRef = collider;
    colliders.push(collider);
    obstacleMeshes.push(mesh);
    walkableMeshes.push(mesh);
    raycastTargets.push(mesh);
    if (collider.destructible) {
      mesh.userData.blockRef = collider;
      destructibleBlocks.push(collider);
    }
    return collider;
  }
  function makeSolidBox(width, height, depth, x, y2, z, style = "concrete", options = {}) {
    const geometry = options.geometry || new Xs(width, height, depth);
    const materials = options.materials || styleSets[style].materials;
    const mesh = new Gs(geometry, materials);
    mesh.position.set(x, y2 + height * 0.5, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    worldGroup.add(mesh);
    if (options.outline !== false) {
      addSimpleOutline(mesh, 988448, 0.3);
    }
    if (options.collider !== false) {
      registerCollider(
        mesh,
        new Di(
          new Ii(x - width * 0.5, y2, z - depth * 0.5),
          new Ii(x + width * 0.5, y2 + height, z + depth * 0.5)
        ),
        {
          style,
          destructible: options.destructible,
          hp: options.hp,
          reward: options.reward,
          debris: styleSets[style].debris
        }
      );
    }
    return mesh;
  }
  function makeUnitBlock(x, y2, z, style = "concrete", options = {}) {
    return makeSolidBox(1, 1, 1, x, y2, z, style, {
      geometry: unitBlockGeometry,
      destructible: options.destructible ?? true,
      hp: options.hp || 1,
      reward: options.reward ?? 1,
      outline: options.outline
    });
  }
  function createCloudCluster(x, y2, z, size = 4) {
    const material = new od({
      color: 16777215,
      roughness: 1,
      flatShading: true
    });
    for (let ix = 0; ix < size; ix += 1) {
      const piece = new Gs(
        new Xs(
          1.2 + Math.random() * 2.2,
          0.8 + Math.random() * 0.8,
          1.2 + Math.random() * 2.2
        ),
        material
      );
      piece.position.set(
        x + $n.randFloatSpread(4),
        y2 + $n.randFloatSpread(0.8),
        z + $n.randFloatSpread(4)
      );
      piece.castShadow = true;
      decorGroup.add(piece);
    }
  }
  function createSkylineBlock(width, height, depth, x, z, color, glow = false) {
    const material = new od({
      color,
      roughness: 0.88,
      metalness: 0.14,
      flatShading: true,
      emissive: glow ? 3995606 : 0,
      emissiveIntensity: glow ? 0.24 : 0
    });
    const mesh = new Gs(new Xs(width, height, depth), material);
    mesh.position.set(x, height * 0.5 - 6, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    decorGroup.add(mesh);
  }
  function createGlowSpire(x, z, height, style) {
    makeSolidBox(2, height, 2, x, 0, z, style, {
      destructible: false,
      outline: true
    });
    makeSolidBox(1, height + 3, 1, x, 0, z, "neon", {
      destructible: false,
      outline: false
    });
  }
  function buildWorld() {
    makeSolidBox(82, 6, 82, 0, -6, 0, "terrain", {
      destructible: false,
      outline: false
    });
    makeSolidBox(10, 1, 10, 0, 0, 0, "road", { destructible: false });
    makeSolidBox(17, 1, 10, -13.5, 0, 0, "road", { destructible: false });
    makeSolidBox(17, 1, 10, 13.5, 0, 0, "road", { destructible: false });
    makeSolidBox(10, 1, 14, 0, 0, -12, "road", { destructible: false });
    makeSolidBox(10, 1, 14, 0, 0, 12, "road", { destructible: false });
    makeSolidBox(14, 1, 4, 0, 3, -8, "road", { destructible: false });
    makeSolidBox(8, 1, 4, 12, 2, 8, "road", { destructible: false });
    makeSolidBox(8, 1, 4, -12, 2, 8, "road", { destructible: false });
    const tower = (baseX, baseZ, width, depth, height, style, hp = 2) => {
      for (let y2 = 0; y2 < height; y2 += 1) {
        for (let x = 0; x < width; x += 1) {
          for (let z = 0; z < depth; z += 1) {
            makeUnitBlock(baseX + x, y2, baseZ + z, style, {
              destructible: true,
              hp,
              reward: 1
            });
          }
        }
      }
    };
    const wall = (startX, startZ, length, height, axis, style) => {
      for (let step = 0; step < length; step += 1) {
        for (let y2 = 0; y2 < height; y2 += 1) {
          const x = axis === "x" ? startX + step : startX;
          const z = axis === "z" ? startZ + step : startZ;
          makeUnitBlock(x, y2, z, style, { destructible: true, hp: 1, reward: 1 });
        }
      }
    };
    tower(-15, -16, 4, 4, 5, "blue");
    tower(10, -18, 5, 4, 6, "yellow");
    tower(-17, 10, 4, 5, 4, "dark");
    tower(12, 11, 5, 5, 5, "blue");
    tower(-3, -20, 3, 3, 7, "neon", 3);
    tower(4, 16, 3, 3, 6, "yellow", 2);
    wall(-9, -4, 6, 2, "x", "concrete");
    wall(4, 3, 7, 2, "x", "concrete");
    wall(-4, 10, 5, 2, "z", "dark");
    wall(8, -6, 5, 2, "z", "dark");
    for (let step = 0; step < 4; step += 1) {
      makeUnitBlock(-6 + step, step, 7, "road", { destructible: true, hp: 1, reward: 1 });
      makeUnitBlock(7 + step, step, -3, "road", { destructible: true, hp: 1, reward: 1 });
    }
    for (let ix = -2; ix <= 2; ix += 1) {
      makeUnitBlock(ix, 1, -8, ix === 0 ? "neon" : "concrete", { destructible: true, hp: 2, reward: 1 });
      makeUnitBlock(ix, 2, -8, "dark", { destructible: true, hp: 2, reward: 1 });
    }
    for (let i = 0; i < 10; i += 1) {
      const x = $n.randInt(-18, 18);
      const z = $n.randInt(-18, 18);
      const y2 = $n.randInt(0, 2);
      makeUnitBlock(x, y2, z, i % 3 === 0 ? "yellow" : i % 3 === 1 ? "blue" : "concrete", {
        destructible: true,
        hp: 1,
        reward: 1
      });
    }
    createGlowSpire(0, -24, 9, "dark");
    createGlowSpire(20, 0, 8, "blue");
    createGlowSpire(-22, 3, 7, "yellow");
    for (let i = 0; i < 18; i += 1) {
      createSkylineBlock(
        $n.randFloat(4, 10),
        $n.randFloat(12, 28),
        $n.randFloat(4, 10),
        $n.randFloatSpread(110),
        -42 - Math.random() * 18,
        i % 2 ? 5532807 : 4150384,
        i % 5 === 0
      );
    }
    createCloudCluster(-18, 22, -12, 5);
    createCloudCluster(6, 20, -28, 4);
    createCloudCluster(20, 24, -6, 6);
    createCloudCluster(-2, 18, 18, 3);
  }
  var hemiLight = new Zd(13625343, 2964272, 1.8);
  scene.add(hemiLight);
  var sun = new lp(16774616, 1.55);
  sun.position.set(16, 28, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -42;
  sun.shadow.camera.right = 42;
  sun.shadow.camera.top = 42;
  sun.shadow.camera.bottom = -42;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 120;
  scene.add(sun);
  var cityBounce = new ap(8388565, 0.9, 26, 2);
  cityBounce.position.set(0, 8, -14);
  scene.add(cityBounce);
  function makeVoxelPart(width, height, depth, material, position, group) {
    const mesh = new Gs(new Xs(width, height, depth), material);
    mesh.position.copy(position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    addSimpleOutline(mesh, 988448, 0.5);
    group.add(mesh);
    return mesh;
  }
  function createPlayerModel() {
    const root = new Xl();
    const bodyYaw = new Xl();
    const upper = new Xl();
    const lower = new Xl();
    const weaponPivot = new Xl();
    const rightHandMount = new Xl();
    const blueMat = new od({
      color: 3049424,
      roughness: 0.72,
      metalness: 0.16,
      flatShading: true
    });
    const blueDarkMat = new od({
      color: 2051966,
      roughness: 0.8,
      metalness: 0.12,
      flatShading: true
    });
    const visorMat = new od({
      color: 9562367,
      emissive: 2090495,
      emissiveIntensity: 0.34,
      roughness: 0.24,
      metalness: 0.42,
      flatShading: true
    });
    const greyMat = new od({
      color: 12372440,
      roughness: 0.52,
      metalness: 0.24,
      flatShading: true
    });
    root.add(bodyYaw);
    bodyYaw.add(lower, upper);
    upper.position.y = 0.88;
    const torso = makeVoxelPart(0.68, 0.82, 0.38, blueMat, new Ii(0, 0.1, 0), upper);
    makeVoxelPart(0.54, 0.2, 0.42, greyMat, new Ii(0, 0.14, 0.06), upper);
    makeVoxelPart(0.34, 0.54, 0.18, blueDarkMat, new Ii(0, 0.02, -0.26), upper);
    const head = makeVoxelPart(0.5, 0.5, 0.5, blueDarkMat, new Ii(0, 0.72, 0), upper);
    const visor = makeVoxelPart(0.38, 0.14, 0.08, visorMat, new Ii(0, 0.72, 0.24), upper);
    makeVoxelPart(0.18, 0.18, 0.18, greyMat, new Ii(-0.42, 0.26, 0), upper);
    makeVoxelPart(0.18, 0.18, 0.18, greyMat, new Ii(0.42, 0.26, 0), upper);
    const armL = makeVoxelPart(0.2, 0.62, 0.2, blueMat, new Ii(-0.28, 0.02, 0.14), upper);
    const armR = makeVoxelPart(0.2, 0.62, 0.2, blueMat, new Ii(0.28, -0.02, 0.16), upper);
    const handL = makeVoxelPart(0.16, 0.18, 0.16, greyMat, new Ii(-0.14, -0.18, 0.34), upper);
    const handR = makeVoxelPart(0.16, 0.18, 0.16, greyMat, new Ii(0.16, -0.2, 0.36), upper);
    const legL = makeVoxelPart(0.24, 0.82, 0.24, blueDarkMat, new Ii(-0.16, 0.4, 0), lower);
    const legR = makeVoxelPart(0.24, 0.82, 0.24, blueDarkMat, new Ii(0.16, 0.4, 0), lower);
    upper.add(weaponPivot);
    weaponPivot.position.set(0.08, -0.04, 0.34);
    weaponPivot.add(rightHandMount);
    rightHandMount.position.set(0.1, -0.06, -0.12);
    return {
      root,
      bodyYaw,
      upper,
      torso,
      head,
      visor,
      armL,
      armR,
      handL,
      handR,
      legL,
      legR,
      weaponPivot,
      rightHandMount
    };
  }
  function createWorldWeapon(kind) {
    const root = new Xl();
    const muzzle = new Ur();
    const steel = new od({
      color: 6714498,
      roughness: 0.42,
      metalness: 0.52,
      flatShading: true
    });
    const dark = new od({
      color: 2306625,
      roughness: 0.62,
      metalness: 0.24,
      flatShading: true
    });
    const accentBlue = new od({
      color: 4165861,
      roughness: 0.6,
      metalness: 0.24,
      flatShading: true
    });
    const wood = new od({
      color: 9397557,
      roughness: 0.88,
      metalness: 0.04,
      flatShading: true
    });
    const box = (w, h2, d2, x, y2, z, mat) => makeVoxelPart(w, h2, d2, mat, new Ii(x, y2, z), root);
    if (kind === "handgun") {
      box(0.16, 0.12, 0.38, 0, 0, -0.02, steel);
      box(0.1, 0.2, 0.12, 0, -0.18, 0.04, dark);
      box(0.08, 0.06, 0.18, 0, -0.05, -0.17, dark);
      muzzle.position.set(0, 0, -0.28);
    } else if (kind === "assault") {
      box(0.18, 0.14, 0.58, 0, 0, -0.02, steel);
      box(0.14, 0.12, 0.36, 0, -0.02, 0.32, dark);
      box(0.14, 0.1, 0.52, 0, -0.02, -0.56, dark);
      box(0.08, 0.24, 0.12, 0, -0.2, -0.02, accentBlue);
      box(0.05, 0.05, 0.14, 0, 0.08, -0.76, accentBlue);
      const barrel = new Gs(new ou(0.025, 0.025, 0.72, 12), steel);
      barrel.rotation.x = Math.PI * 0.5;
      barrel.position.set(0, 0, -0.94);
      barrel.castShadow = true;
      barrel.receiveShadow = true;
      root.add(barrel);
      muzzle.position.set(0, 0, -1.28);
    } else {
      box(0.22, 0.15, 0.42, 0, 0, 0, steel);
      box(0.18, 0.14, 0.42, 0, -0.02, 0.42, wood);
      box(0.16, 0.12, 0.2, 0, -0.06, -0.3, wood);
      const barrel = new Gs(new ou(0.032, 0.032, 0.92, 14), steel);
      barrel.rotation.x = Math.PI * 0.5;
      barrel.position.set(0, 0.02, -0.56);
      barrel.castShadow = true;
      barrel.receiveShadow = true;
      root.add(barrel);
      const tube = new Gs(new ou(0.022, 0.022, 0.78, 12), dark);
      tube.rotation.x = Math.PI * 0.5;
      tube.position.set(0, -0.05, -0.46);
      tube.castShadow = true;
      tube.receiveShadow = true;
      root.add(tube);
      muzzle.position.set(0, 0.02, -1.02);
    }
    root.scale.setScalar(0.92);
    root.rotation.set(-0.18, Math.PI, 0.08);
    root.position.set(0.05, -0.05, -0.08);
    root.add(muzzle);
    return { group: root, muzzle };
  }
  var playerVisual = createPlayerModel();
  playerRig.add(playerVisual.root);
  var weaponWorlds = {
    handgun: createWorldWeapon("handgun"),
    assault: createWorldWeapon("assault"),
    shotgun: createWorldWeapon("shotgun")
  };
  Object.values(weaponWorlds).forEach((weaponVisual) => {
    weaponVisual.group.visible = false;
    playerVisual.weaponPivot.add(weaponVisual.group);
  });
  var muzzleFlash = new Xl();
  var flashCore = new Gs(
    new Ku(0.09, 12, 10),
    new Qr({ color: 16773796, transparent: true, opacity: 0 })
  );
  var flashCone = new Gs(
    new lu(0.14, 0.34, 10),
    new Qr({ color: 16747852, transparent: true, opacity: 0 })
  );
  var flashLight = new ap(16763002, 0, 8, 2);
  flashCone.rotation.x = Math.PI * 0.5;
  flashCone.position.z = -0.18;
  muzzleFlash.add(flashCore, flashCone, flashLight);
  muzzleFlash.visible = false;
  var weapons = {
    handgun: {
      key: "handgun",
      slot: 1,
      name: "HANDGUN",
      meta: "SIDEARM / precise semi auto",
      magSize: 10,
      ammoInMag: 10,
      reserve: 30,
      reloadTime: 1.05,
      fireInterval: 0.23,
      auto: false,
      pellets: 1,
      damage: 34,
      blockDamage: 1,
      knockback: 4.8,
      baseSpread: $n.degToRad(0.2),
      spreadGrowth: $n.degToRad(0.45),
      moveSpread: $n.degToRad(0.35),
      heatGain: 0.24,
      coolRate: 1.8,
      flashScale: 1,
      recoil: { cam: 0.06, back: 0.12, up: 0.06, pitch: 0.15, yaw: 0.03, roll: 0.06 },
      craftCost: 4,
      craftAmount: 12,
      heat: 0
    },
    assault: {
      key: "assault",
      slot: 2,
      name: "VOXEL RIFLE",
      meta: "FULL AUTO / urban breach rifle",
      magSize: 30,
      ammoInMag: 30,
      reserve: 120,
      reloadTime: 1.48,
      fireInterval: 0.085,
      auto: true,
      pellets: 1,
      damage: 16,
      blockDamage: 1,
      knockback: 3.2,
      baseSpread: $n.degToRad(0.24),
      spreadGrowth: $n.degToRad(1.45),
      moveSpread: $n.degToRad(0.56),
      heatGain: 0.12,
      coolRate: 1.06,
      flashScale: 0.95,
      recoil: { cam: 0.035, back: 0.09, up: 0.05, pitch: 0.11, yaw: 0.02, roll: 0.045 },
      craftCost: 6,
      craftAmount: 30,
      heat: 0
    },
    shotgun: {
      key: "shotgun",
      slot: 3,
      name: "SHOTGUN",
      meta: "BREACHER / 10 pellet blast",
      magSize: 5,
      ammoInMag: 5,
      reserve: 10,
      reloadTime: 1.75,
      fireInterval: 0.82,
      auto: false,
      pellets: 10,
      damage: 12,
      blockDamage: 1,
      knockback: 9.2,
      baseSpread: $n.degToRad(4.6),
      spreadGrowth: $n.degToRad(0.8),
      moveSpread: $n.degToRad(1.2),
      heatGain: 0.52,
      coolRate: 1.25,
      flashScale: 1.8,
      recoil: { cam: 0.095, back: 0.18, up: 0.1, pitch: 0.22, yaw: 0.035, roll: 0.08 },
      craftCost: 5,
      craftAmount: 4,
      heat: 0
    }
  };
  var activeWeapon = weapons[currentWeaponKey];
  var enemySpawnPoints = [
    new Ii(-20, 0, -22),
    new Ii(-11, 0, -24),
    new Ii(0, 0, -25),
    new Ii(13, 0, -23),
    new Ii(24, 0, -11),
    new Ii(24, 0, 10),
    new Ii(14, 0, 23),
    new Ii(0, 0, 25),
    new Ii(-14, 0, 23),
    new Ii(-24, 0, 9)
  ];
  var playerSpawnAnchor = new Ii(-23, 0, 23);
  var roundState = {
    current: 0,
    activeCount: 0,
    pending: false,
    countdown: 0,
    nextRound: 1,
    announcedSecond: -1
  };
  function equipWeapon(key) {
    currentWeaponKey = key;
    activeWeapon = weapons[key];
    reloading = false;
    reloadTimer = 0;
    recoil.reloadTarget = 0;
    Object.entries(weaponWorlds).forEach(([weaponKey, weaponVisual]) => {
      weaponVisual.group.visible = weaponKey === key;
    });
    weaponWorlds[key].muzzle.add(muzzleFlash);
    mobileSwitchEl.textContent = `SWAP ${activeWeapon.slot}`;
    setStatus(`${activeWeapon.name} online.`, 1.2);
  }
  function cycleWeapon() {
    const order = ["handgun", "assault", "shotgun"];
    const nextIndex = (order.indexOf(currentWeaponKey) + 1) % order.length;
    equipWeapon(order[nextIndex]);
  }
  function beginReload(force = false) {
    if (reloading || activeWeapon.reserve <= 0) {
      return;
    }
    if (!force && activeWeapon.ammoInMag >= activeWeapon.magSize) {
      return;
    }
    reloading = true;
    reloadTimer = activeWeapon.reloadTime;
    input.queuedSemiShot = false;
    setStatus(`${activeWeapon.name} reloading.`, 0.9);
  }
  function finishReload() {
    const need = activeWeapon.magSize - activeWeapon.ammoInMag;
    const taken = Math.min(need, activeWeapon.reserve);
    activeWeapon.ammoInMag += taken;
    activeWeapon.reserve -= taken;
    reloading = false;
    reloadTimer = 0;
    setStatus(`${activeWeapon.name} ready.`, 0.9);
  }
  function craftAmmo() {
    if (player.materials < activeWeapon.craftCost) {
      setStatus(`Need ${activeWeapon.craftCost} scrap for ${activeWeapon.name} ammo.`, 1.2);
      return;
    }
    player.materials -= activeWeapon.craftCost;
    activeWeapon.reserve += activeWeapon.craftAmount;
    setStatus(`${activeWeapon.name} ammo crafted +${activeWeapon.craftAmount}.`, 1.2);
  }
  function craftGrenade() {
    const cost = 8;
    if (player.materials < cost) {
      setStatus(`Need ${cost} scrap to build a grenade.`, 1.2);
      return;
    }
    player.materials -= cost;
    player.grenadeCount += 1;
    setStatus("Grenade fabricated from salvage.", 1.2);
  }
  function createPickup(type, position, amount = 1) {
    const group = new Xl();
    const colors = {
      ammo: 16767112,
      scrap: 8841471,
      grenade: 9633674
    };
    const emissive = {
      ammo: 6441240,
      scrap: 1196626,
      grenade: 1329436
    };
    const core = new Gs(
      new Xs(0.28, 0.28, 0.28),
      new od({
        color: colors[type],
        emissive: emissive[type],
        emissiveIntensity: 0.72,
        roughness: 0.48,
        metalness: 0.2,
        flatShading: true
      })
    );
    core.castShadow = true;
    group.add(core);
    if (type === "ammo") {
      const band = new Gs(
        new Xs(0.1, 0.42, 0.1),
        new od({ color: 5979939, roughness: 0.4, metalness: 0.24, flatShading: true })
      );
      band.castShadow = true;
      group.add(band);
    } else if (type === "scrap") {
      const shard = new Gs(
        new Xs(0.42, 0.08, 0.18),
        new od({ color: 15268095, roughness: 0.32, metalness: 0.42, flatShading: true })
      );
      shard.rotation.set(0.3, 0.6, 0.1);
      shard.castShadow = true;
      group.add(shard);
    } else {
      const cap = new Gs(
        new Ku(0.12, 10, 8),
        new od({ color: 15267801, roughness: 0.2, metalness: 0.14, flatShading: true })
      );
      cap.position.y = 0.14;
      cap.castShadow = true;
      group.add(cap);
    }
    group.position.copy(position);
    scene.add(group);
    pickups.push({
      type,
      amount,
      group,
      baseY: position.y,
      phase: Math.random() * Math.PI * 2,
      pickupRadius: 1.05
    });
  }
  function spawnImpact(point, normal, palette, scale = 1, count = 12) {
    for (let i = 0; i < count; i += 1) {
      const size = $n.randFloat(0.03, 0.08) * scale;
      const material = new od({
        color: palette[Math.random() * palette.length | 0],
        emissive: 2364171,
        emissiveIntensity: 0.32,
        transparent: true,
        opacity: 1,
        roughness: 0.72,
        flatShading: true
      });
      const mesh = new Gs(new Xs(size, size, size), material);
      mesh.castShadow = true;
      mesh.position.copy(point).addScaledVector(normal, 0.04);
      const velocity = normal.clone().multiplyScalar($n.randFloat(1.6, 4.4) * scale).add(new Ii(
        $n.randFloatSpread(1.2),
        $n.randFloat(0.4, 1.8),
        $n.randFloatSpread(1.2)
      ).multiplyScalar(scale));
      const spin = new Ii(
        $n.randFloatSpread(8),
        $n.randFloatSpread(8),
        $n.randFloatSpread(8)
      );
      scene.add(mesh);
      impactParticles.push({
        mesh,
        velocity,
        spin,
        life: $n.randFloat(0.28, 0.56),
        maxLife: 0
      });
      impactParticles[impactParticles.length - 1].maxLife = impactParticles[impactParticles.length - 1].life;
    }
  }
  function spawnTracer(start, end, color, opacity = 0.9) {
    const geometry = new Ts().setFromPoints([start, end]);
    const material = new dh({ color, transparent: true, opacity });
    const line = new vh(geometry, material);
    scene.add(line);
    tracers.push({ line, material, life: 0.08, maxLife: 0.08 });
  }
  function spawnExplosionBurst(position, radius = 5, color = 16756814) {
    const light = new ap(color, 7, radius * 4, 2);
    light.position.copy(position);
    scene.add(light);
    const mesh = new Gs(
      new Ku(radius * 0.22, 12, 10),
      new Qr({ color, transparent: true, opacity: 0.48 })
    );
    mesh.position.copy(position);
    scene.add(mesh);
    explosionBursts.push({ light, mesh, life: 0.22, maxLife: 0.22, radius });
  }
  function removeRayTarget(object) {
    removeFromArray(raycastTargets, object);
  }
  function removeCollider(collider) {
    removeFromArray(colliders, collider);
    removeFromArray(destructibleBlocks, collider);
    removeFromArray(walkableMeshes, collider.mesh);
    removeFromArray(obstacleMeshes, collider.mesh);
    removeRayTarget(collider.mesh);
    delete collider.mesh.userData.blockRef;
  }
  function destroyBlock(collider, point, normal) {
    removeCollider(collider);
    worldGroup.remove(collider.mesh);
    spawnImpact(point || collider.mesh.position.clone(), normal || new Ii(0, 1, 0), collider.debris, 1.2, 18);
    if (Math.random() < 0.7) {
      createPickup("scrap", collider.mesh.position.clone().add(new Ii(0, 0.4, 0)), $n.randInt(1, 2));
    }
    player.score += 10;
  }
  function damageBlock(collider, amount, point, normal) {
    if (!collider.destructible) {
      spawnImpact(point, normal, collider.debris, 0.9, 8);
      return;
    }
    collider.hp -= amount;
    spawnImpact(point, normal, collider.debris, 0.75, 8);
    if (collider.hp <= 0) {
      destroyBlock(collider, point, normal);
    }
  }
  function createEnemy(x, z, hp = 120, options = {}) {
    const spawnPosition = findSpawnPosition(new Ii(x, 0, z), 0.38, 1.62);
    const group = new Xl();
    scene.add(group);
    const greenMat = new od({
      color: 5027919,
      emissive: 1920543,
      emissiveIntensity: 0.34,
      roughness: 0.74,
      metalness: 0.08,
      flatShading: true
    });
    const darkMat = new od({
      color: 2377003,
      roughness: 0.82,
      metalness: 0.08,
      flatShading: true
    });
    const eyeMat = new od({
      color: 15269847,
      emissive: 13762448,
      emissiveIntensity: 0.44,
      roughness: 0.22,
      metalness: 0.12,
      flatShading: true
    });
    const torso = makeVoxelPart(0.54, 0.64, 0.32, greenMat, new Ii(0, 0.1, 0), group);
    const pelvis = makeVoxelPart(0.4, 0.22, 0.26, darkMat, new Ii(0, -0.34, 0), group);
    const head = makeVoxelPart(0.42, 0.42, 0.42, greenMat, new Ii(0, 0.58, 0.02), group);
    const jaw = makeVoxelPart(0.36, 0.12, 0.28, darkMat, new Ii(0, 0.38, 0.12), group);
    const eyeL = makeVoxelPart(0.08, 0.08, 0.06, eyeMat, new Ii(-0.12, 0.62, 0.22), group);
    const eyeR = makeVoxelPart(0.08, 0.08, 0.06, eyeMat, new Ii(0.12, 0.62, 0.22), group);
    const armL = makeVoxelPart(0.16, 0.56, 0.16, greenMat, new Ii(-0.38, 0.04, 0), group);
    const armR = makeVoxelPart(0.16, 0.56, 0.16, greenMat, new Ii(0.38, 0.04, 0), group);
    const legL = makeVoxelPart(0.18, 0.62, 0.18, darkMat, new Ii(-0.14, -0.74, 0), group);
    const legR = makeVoxelPart(0.18, 0.62, 0.18, darkMat, new Ii(0.14, -0.74, 0), group);
    const enemy = {
      name: "Tetta Virus",
      hp,
      maxHp: hp,
      group,
      bodyMeshes: [torso, pelvis, head, jaw, eyeL, eyeR, armL, armR, legL, legR],
      materials: [greenMat, darkMat, eyeMat],
      position: spawnPosition.clone(),
      velocity: new Ii(),
      radius: 0.38,
      height: 1.62,
      flash: 0,
      alive: true,
      pulse: Math.random() * Math.PI * 2,
      detectionRange: 40,
      stopRange: 1.55,
      maxSpeed: options.maxSpeed || 3.1,
      accel: options.accel || 7.8,
      stepHeight: options.stepHeight || 1.08,
      jumpHeight: options.jumpHeight || 5.55,
      jumpSpeed: options.jumpSpeed || 17.7,
      repathTimer: 0,
      steerDir: new Ii(),
      attackCooldown: $n.randFloat(0.2, 0.7),
      attackDamage: options.attackDamage || 16,
      round: options.round || 1,
      onGround: true,
      jumpCooldown: $n.randFloat(0.1, 0.35)
    };
    group.position.set(spawnPosition.x, spawnPosition.y + enemy.height * 0.5, spawnPosition.z);
    enemy.bodyMeshes.forEach((mesh) => {
      mesh.userData.enemyRef = enemy;
      raycastTargets.push(mesh);
    });
    enemies.push(enemy);
  }
  function removeEnemy(enemy) {
    enemy.alive = false;
    enemy.bodyMeshes.forEach((mesh) => removeRayTarget(mesh));
    scene.remove(enemy.group);
    player.score += 220 + enemy.round * 30;
    player.level = 1 + Math.floor(player.score / 1500);
    spawnImpact(enemy.group.position.clone(), new Ii(0, 1, 0), [15204303, 7660395, 2055207], 2.2, 28);
    createPickup("ammo", enemy.position.clone().add(new Ii(0, 0.45, 0)), 1);
    createPickup("scrap", enemy.position.clone().add(new Ii(0.24, 0.4, 0.12)), $n.randInt(2, 4) + Math.floor(enemy.round / 3));
    if (Math.random() < 0.28) {
      createPickup("grenade", enemy.position.clone().add(new Ii(-0.18, 0.42, -0.12)), 1);
    }
    setStatus(`${enemy.name} shattered into salvage.`, 1.2);
  }
  function getRoundConfig(round) {
    return {
      count: Math.min(18, 4 + round * 2),
      hpBase: 96 + round * 18,
      hpStep: 7,
      maxSpeed: Math.min(4.8, 3.05 + round * 0.14),
      accel: 7.8 + round * 0.22,
      attackDamage: 13 + round * 2,
      countdown: clamp(3.8 - round * 0.14, 1.8, 3.8)
    };
  }
  function spawnRound(round) {
    const config = getRoundConfig(round);
    roundState.current = round;
    roundState.activeCount = config.count;
    roundState.pending = false;
    roundState.countdown = 0;
    roundState.nextRound = round + 1;
    roundState.announcedSecond = -1;
    for (let index = 0; index < config.count; index += 1) {
      const spawn = enemySpawnPoints[index % enemySpawnPoints.length];
      const offsetX = $n.randFloatSpread(1.6);
      const offsetZ = $n.randFloatSpread(1.6);
      createEnemy(
        spawn.x + offsetX,
        spawn.z + offsetZ,
        config.hpBase + index * config.hpStep,
        {
          maxSpeed: config.maxSpeed,
          accel: config.accel,
          attackDamage: config.attackDamage,
          round
        }
      );
    }
    player.armor = Math.min(player.maxArmor, player.armor + 10 + round * 2);
    setStatus(`Round ${round} incoming. ${config.count} hostiles breaching the district.`, 2.2);
  }
  function queueNextRound() {
    if (roundState.pending) {
      return;
    }
    roundState.pending = true;
    roundState.countdown = getRoundConfig(roundState.nextRound).countdown;
    roundState.announcedSecond = -1;
    setStatus(`Round ${roundState.current} clear. Salvage fast, next wave inbound.`, 1.8);
  }
  function updateRounds(dt2) {
    if (!isGameActive()) {
      return;
    }
    if (roundState.current === 0) {
      spawnRound(1);
      return;
    }
    if (!roundState.pending && roundState.activeCount === 0) {
      queueNextRound();
    }
    if (!roundState.pending) {
      return;
    }
    roundState.countdown -= dt2;
    const secondsLeft = Math.max(0, Math.ceil(roundState.countdown));
    if (secondsLeft !== roundState.announcedSecond) {
      roundState.announcedSecond = secondsLeft;
      missionTextEl.textContent = `Round ${roundState.current} clear. Next wave in ${secondsLeft}.`;
    }
    if (roundState.countdown <= 0) {
      spawnRound(roundState.nextRound);
    }
  }
  function sampleGroundHeight(x, z, feetY, radius = player.radius, startOffset = 1.1, rayDistance = 2.3) {
    const probeOffsets = [
      [0, 0],
      [radius * 0.7, 0],
      [-radius * 0.7, 0],
      [0, radius * 0.7],
      [0, -radius * 0.7]
    ];
    let best = null;
    for (const [ox, oz] of probeOffsets) {
      tempOrigin.set(x + ox, feetY + startOffset, z + oz);
      raycaster.set(tempOrigin, tempDirection.set(0, -1, 0));
      raycaster.far = rayDistance;
      const hit = raycaster.intersectObjects(walkableMeshes, false)[0];
      if (!hit) {
        continue;
      }
      if (hit.face && hit.face.normal.y < 0.4) {
        continue;
      }
      if (!best || hit.point.y > best.height) {
        best = { height: hit.point.y, object: hit.object };
      }
    }
    return best;
  }
  function overlapsBody(bounds, x, feetY, z, radius, height) {
    const minY = feetY + 0.04;
    const maxY = feetY + height - 0.04;
    return x + radius > bounds.min.x && x - radius < bounds.max.x && z + radius > bounds.min.z && z - radius < bounds.max.z && maxY > bounds.min.y && minY < bounds.max.y;
  }
  function hasBlockingCollision(x, feetY, z, radius, height) {
    for (const collider of colliders) {
      if (overlapsBody(collider.bounds, x, feetY, z, radius, height)) {
        return true;
      }
    }
    return false;
  }
  function hasSpawnConflict(x, feetY, z, radius, height) {
    if (hasBlockingCollision(x, feetY, z, radius, height)) {
      return true;
    }
    const playerDistance = Math.hypot(playerRig.position.x - x, playerRig.position.z - z);
    if (playerDistance < 3.2) {
      return true;
    }
    for (const enemy of enemies) {
      if (!enemy.alive) {
        continue;
      }
      const distance = Math.hypot(enemy.position.x - x, enemy.position.z - z);
      if (distance < radius + enemy.radius + 0.45) {
        return true;
      }
    }
    return false;
  }
  function findSpawnPosition(anchor, radius, height) {
    const radii = [0, 1.8, 3.4, 5.2, 7];
    const angles = [0, Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4, Math.PI, Math.PI * 5 / 4, Math.PI * 3 / 2, Math.PI * 7 / 4];
    for (const radiusOffset of radii) {
      for (const angle of angles) {
        const x = anchor.x + Math.cos(angle) * radiusOffset;
        const z = anchor.z + Math.sin(angle) * radiusOffset;
        const ground = sampleGroundHeight(x, z, 2.5, radius, 3.6, 6);
        if (!ground) {
          continue;
        }
        const groundStyle = ground.object?.userData?.colliderRef?.style;
        if (groundStyle === "road") {
          continue;
        }
        const feetY = ground.height;
        if (hasSpawnConflict(x, feetY + 0.02, z, radius, height)) {
          continue;
        }
        return new Ii(x, feetY, z);
      }
    }
    for (const [ox, oz] of [
      [0, 0],
      [6, 0],
      [-6, 0],
      [0, 6],
      [0, -6]
    ]) {
      const x = anchor.x + ox;
      const z = anchor.z + oz;
      const ground = sampleGroundHeight(x, z, 2.5, radius, 3.6, 6);
      if (!ground) {
        continue;
      }
      const groundStyle = ground.object?.userData?.colliderRef?.style;
      const feetY = ground.height;
      if (groundStyle === "road") {
        continue;
      }
      if (hasSpawnConflict(x, feetY + 0.02, z, radius, height)) {
        continue;
      }
      return new Ii(x, feetY, z);
    }
    const fallbackGround = sampleGroundHeight(anchor.x, anchor.z, 6, radius, 6.5, 8);
    return new Ii(anchor.x, fallbackGround ? fallbackGround.height : 0, anchor.z);
  }
  function findPlayerSpawnPosition() {
    for (const radiusOffset of [0, 2, 4, 6]) {
      for (const angle of [0, Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4, Math.PI, Math.PI * 5 / 4, Math.PI * 3 / 2, Math.PI * 7 / 4]) {
        const x = playerSpawnAnchor.x + Math.cos(angle) * radiusOffset;
        const z = playerSpawnAnchor.z + Math.sin(angle) * radiusOffset;
        const ground = sampleGroundHeight(x, z, 4, player.radius, 4.5, 7);
        if (!ground) {
          continue;
        }
        const groundStyle = ground.object?.userData?.colliderRef?.style;
        const feetY = ground.height;
        if (groundStyle === "road" || hasBlockingCollision(x, feetY + 0.02, z, player.radius, player.height)) {
          continue;
        }
        let enemyTooClose = false;
        for (const enemy of enemies) {
          if (!enemy.alive) {
            continue;
          }
          const distance = Math.hypot(enemy.position.x - x, enemy.position.z - z);
          if (distance < 2.8) {
            enemyTooClose = true;
            break;
          }
        }
        if (enemyTooClose) {
          continue;
        }
        return new Ii(x, feetY, z);
      }
    }
    const fallbackGround = sampleGroundHeight(playerSpawnAnchor.x, playerSpawnAnchor.z, 6, player.radius, 6.5, 8);
    return new Ii(playerSpawnAnchor.x, fallbackGround ? fallbackGround.height : 0, playerSpawnAnchor.z);
  }
  function placePlayerAtSpawn() {
    playerRig.position.copy(findPlayerSpawnPosition());
  }
  function tryStepUp(nextPos, currentFeetY, radius, height, stepHeight) {
    const ground = sampleGroundHeight(
      nextPos.x,
      nextPos.z,
      currentFeetY + stepHeight,
      radius,
      1.4 + stepHeight,
      3.4 + stepHeight
    );
    if (!ground) {
      return false;
    }
    const delta = ground.height - currentFeetY;
    if (delta <= 0.04 || delta > stepHeight) {
      return false;
    }
    if (hasBlockingCollision(nextPos.x, ground.height + 0.02, nextPos.z, radius, height)) {
      return false;
    }
    nextPos.y = ground.height;
    return true;
  }
  function resolveHorizontal(nextPos, velocity, radius, height, axis, currentFeetY = nextPos.y, stepHeight = 0) {
    for (const collider of colliders) {
      if (!overlapsBody(collider.bounds, nextPos.x, nextPos.y, nextPos.z, radius, height)) {
        continue;
      }
      if (stepHeight > 0 && tryStepUp(nextPos, currentFeetY, radius, height, stepHeight)) {
        continue;
      }
      if (axis === "x") {
        if (velocity.x > 0) {
          nextPos.x = collider.bounds.min.x - radius;
        } else if (velocity.x < 0) {
          nextPos.x = collider.bounds.max.x + radius;
        }
        velocity.x = 0;
      } else {
        if (velocity.z > 0) {
          nextPos.z = collider.bounds.min.z - radius;
        } else if (velocity.z < 0) {
          nextPos.z = collider.bounds.max.z + radius;
        }
        velocity.z = 0;
      }
    }
  }
  function resolveCeiling(previousFeetY, nextPos) {
    if (player.velocity.y <= 0) {
      return;
    }
    const previousHead = previousFeetY + player.height;
    const nextHead = nextPos.y + player.height;
    for (const collider of colliders) {
      if (nextPos.x + player.radius <= collider.bounds.min.x || nextPos.x - player.radius >= collider.bounds.max.x || nextPos.z + player.radius <= collider.bounds.min.z || nextPos.z - player.radius >= collider.bounds.max.z) {
        continue;
      }
      if (previousHead <= collider.bounds.min.y && nextHead >= collider.bounds.min.y && nextPos.y < collider.bounds.min.y) {
        nextPos.y = collider.bounds.min.y - player.height;
        player.velocity.y = 0;
        return;
      }
    }
  }
  function getAimDirection(target = tempVecA, applyRecoil = true) {
    const pitch = view.pitch + (applyRecoil ? recoil.cam : 0);
    target.set(
      Math.sin(view.yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(view.yaw) * Math.cos(pitch)
    );
    return target.normalize();
  }
  function getMoveForward(target = tempVecA) {
    target.set(Math.sin(view.yaw), 0, Math.cos(view.yaw)).normalize();
    return target;
  }
  function applyLookDelta(deltaX, deltaY) {
    view.yaw -= deltaX * 32e-4;
    view.pitch = clamp(view.pitch - deltaY * 24e-4, view.pitchMin, view.pitchMax);
    sway.xTarget = clamp(sway.xTarget - deltaX * 18e-5, -0.08, 0.08);
    sway.yTarget = clamp(sway.yTarget + deltaY * 12e-5, -0.08, 0.08);
  }
  function updatePlayer(dt2) {
    player.damageCooldown = Math.max(0, player.damageCooldown - dt2);
    const keyboardForward = (input.forward ? 1 : 0) - (input.backward ? 1 : 0);
    const keyboardSide = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    const moveForward = clamp(keyboardForward + -touchInput.moveY, -1, 1);
    const moveSide = clamp(keyboardSide + touchInput.moveX, -1, 1);
    getMoveForward(tempVecA);
    tempRight.crossVectors(tempVecA, tempUp).normalize();
    const wish = tempVecB.set(0, 0, 0).addScaledVector(tempVecA, moveForward).addScaledVector(tempRight, moveSide);
    if (wish.lengthSq() > 0) {
      wish.normalize().multiplyScalar(player.onGround ? player.moveSpeed : player.airMoveSpeed);
    }
    player.velocity.x = damp(player.velocity.x, wish.x, player.onGround ? 18 : 5.8, dt2);
    player.velocity.z = damp(player.velocity.z, wish.z, player.onGround ? 18 : 5.8, dt2);
    player.moveAmount = Math.hypot(player.velocity.x, player.velocity.z);
    if (input.jumpQueued && player.onGround) {
      player.velocity.y = player.jumpSpeed;
      player.onGround = false;
    }
    input.jumpQueued = false;
    player.velocity.y -= player.gravity * dt2;
    const nextPos = playerRig.position.clone();
    nextPos.x += player.velocity.x * dt2;
    resolveHorizontal(nextPos, player.velocity, player.radius, player.height, "x");
    nextPos.z += player.velocity.z * dt2;
    resolveHorizontal(nextPos, player.velocity, player.radius, player.height, "z");
    const previousFeetY = playerRig.position.y;
    nextPos.y += player.velocity.y * dt2;
    resolveCeiling(previousFeetY, nextPos);
    const ground = sampleGroundHeight(nextPos.x, nextPos.z, nextPos.y);
    if (ground && player.velocity.y <= 0 && nextPos.y <= ground.height + 0.15 && nextPos.y >= ground.height - 0.55) {
      nextPos.y = ground.height;
      player.velocity.y = 0;
      player.onGround = true;
    } else {
      player.onGround = false;
    }
    if (nextPos.y < -14) {
      nextPos.copy(findPlayerSpawnPosition());
      player.velocity.set(0, 0, 0);
      damagePlayer(18, "Fall impact");
    }
    playerRig.position.copy(nextPos);
  }
  function updatePlayerVisual(dt2) {
    if (player.onGround && player.moveAmount > 0.2) {
      player.bobTime += dt2 * 9.8;
    }
    const walkAlpha = player.onGround ? clamp(player.moveAmount / player.moveSpeed, 0, 1) : 0;
    const stride = Math.sin(player.bobTime * 1.8) * 0.68 * walkAlpha;
    const torsoBounce = Math.abs(Math.cos(player.bobTime * 3.6)) * 0.04 * walkAlpha;
    const targetYaw = Math.atan2(tempVecA.x || Math.sin(view.yaw), tempVecA.z || Math.cos(view.yaw));
    playerVisual.bodyYaw.rotation.y = dampAngle(playerVisual.bodyYaw.rotation.y, targetYaw, 10, dt2);
    playerVisual.upper.position.y = damp(playerVisual.upper.position.y, 0.88 + torsoBounce, 10, dt2);
    playerVisual.legL.rotation.x = stride;
    playerVisual.legR.rotation.x = -stride;
    recoil.reloadTarget = reloading ? 1 : 0;
    recoil.reloadLift = damp(recoil.reloadLift, recoil.reloadTarget, 9, dt2);
    sway.x = damp(sway.x, sway.xTarget, 12, dt2);
    sway.y = damp(sway.y, sway.yTarget, 12, dt2);
    sway.xTarget = damp(sway.xTarget, 0, 16, dt2);
    sway.yTarget = damp(sway.yTarget, 0, 16, dt2);
    dampVector(recoil.pos, recoil.posTarget, 26, dt2);
    dampVector(recoil.posTarget, zeroVec, 12, dt2);
    dampVector(recoil.rot, recoil.rotTarget, 24, dt2);
    dampVector(recoil.rotTarget, zeroVec, 12, dt2);
    recoil.cam = damp(recoil.cam, recoil.camTarget, 28, dt2);
    recoil.camTarget = damp(recoil.camTarget, 0, 14, dt2);
    const reloadArc = Math.sin(recoil.reloadLift * Math.PI) * recoil.reloadLift;
    const holdForward = 0.34 + recoil.pos.z * 0.25 + reloadArc * 0.1;
    const holdHeight = -0.02 + recoil.pos.y * 0.3 - reloadArc * 0.1;
    const holdYaw = sway.x * 0.26 - recoil.rot.y * 0.18;
    playerVisual.weaponPivot.position.set(
      0.08 + recoil.pos.x * 0.6 - sway.x * 0.05,
      holdHeight - reloadArc * 0.22,
      holdForward
    );
    playerVisual.weaponPivot.rotation.set(
      -0.22 - recoil.rot.x * 0.9 - sway.y * 0.28 - reloadArc * 0.36,
      0.12 + holdYaw,
      0.04 - recoil.rot.z * 0.7 - reloadArc * 0.2
    );
    playerVisual.armL.position.set(-0.26, 0.02 + torsoBounce * 0.4, 0.16 + recoil.pos.z * 0.12);
    playerVisual.armR.position.set(0.24, -0.02 + torsoBounce * 0.4, 0.18 + recoil.pos.z * 0.1);
    playerVisual.handL.position.set(-0.08, -0.18 - reloadArc * 0.06, 0.38 + recoil.pos.z * 0.16);
    playerVisual.handR.position.set(0.14, -0.2 - reloadArc * 0.08, 0.42 + recoil.pos.z * 0.12);
    playerVisual.armL.rotation.set(
      -1.26 - recoil.rot.x * 0.32 + stride * 0.08 - reloadArc * 0.18,
      0.06 + sway.x * 0.22,
      -0.9 + recoil.rot.z * 0.15
    );
    playerVisual.armR.rotation.set(
      -1.38 - recoil.rot.x * 0.38 - stride * 0.06 - reloadArc * 0.22,
      -0.18 + sway.x * 0.32,
      0.54 - recoil.rot.z * 0.16
    );
    playerVisual.handL.rotation.set(-0.22, 0.12, -0.34);
    playerVisual.handR.rotation.set(-0.18, -0.16, 0.18);
    const flashScale = 0.8 + muzzleFlashStrength * 0.9;
    flashCore.material.opacity = muzzleFlashStrength * 0.95;
    flashCone.material.opacity = muzzleFlashStrength * 0.72;
    flashCore.scale.setScalar(flashScale);
    flashCone.scale.set(activeWeapon.flashScale, activeWeapon.flashScale, activeWeapon.flashScale + muzzleFlashStrength * 0.3);
    flashLight.intensity = 5.2 * muzzleFlashStrength;
    muzzleFlash.visible = muzzleFlashStrength > 0.05;
    muzzleFlashStrength = damp(muzzleFlashStrength, 0, 30, dt2);
  }
  function updateCamera(dt2) {
    const focus = tempVecA.copy(playerRig.position).add(new Ii(0, view.focusHeight, 0));
    const aimDir = getAimDirection(tempVecB);
    tempRight.crossVectors(aimDir, tempUp).normalize();
    const desiredLook = tempVecC.copy(focus).addScaledVector(aimDir, 12).addScaledVector(tempRight, sway.x * 1.2).addScaledVector(tempUp, sway.y * -0.8);
    const desiredCamera = tempVecD.copy(focus).addScaledVector(tempRight, view.shoulder + sway.x * 0.4).addScaledVector(tempUp, 0.8 + sway.y * 0.3).addScaledVector(aimDir, -(view.distance + recoil.pos.z * 3.2));
    const cameraVector = tempVecE.subVectors(desiredCamera, focus);
    const cameraDistance = cameraVector.length();
    cameraVector.normalize();
    raycaster.set(focus, cameraVector);
    raycaster.far = cameraDistance;
    const cameraHit = raycaster.intersectObjects(obstacleMeshes, false)[0];
    if (cameraHit) {
      desiredCamera.copy(cameraHit.point).addScaledVector(cameraHit.face ? cameraHit.face.normal.clone().transformDirection(cameraHit.object.matrixWorld).normalize() : tempUp, 0.28);
    }
    dampVector(view.currentCameraPos, desiredCamera, 10, dt2);
    dampVector(view.currentLookPos, desiredLook, 12, dt2);
    camera.position.copy(view.currentCameraPos);
    camera.lookAt(view.currentLookPos);
  }
  function damagePlayer(amount, reason = "Hostile impact") {
    if (player.damageCooldown > 0) {
      return;
    }
    player.damageCooldown = 0.48;
    const armorAbsorb = Math.min(player.armor, amount * 0.7);
    player.armor -= armorAbsorb;
    const hpDamage = Math.max(0, amount - armorAbsorb);
    player.hp = Math.max(0, player.hp - hpDamage);
    playerVisual.visor.material.emissiveIntensity = 1.2;
    setStatus(`${reason}. HP ${player.hp} / ${player.maxHp}.`, 1.1);
    if (player.hp <= 0) {
      player.hp = player.maxHp;
      player.armor = Math.max(30, player.maxArmor * 0.4);
      placePlayerAtSpawn();
      player.velocity.set(0, 0, 0);
      setStatus("Suit rebooted at extraction point.", 1.8);
    }
  }
  function isEnemyPathBlocked(origin, direction, distance) {
    raycaster.set(origin, direction);
    raycaster.far = distance;
    const hit = raycaster.intersectObjects(obstacleMeshes, false)[0];
    return Boolean(hit && hit.distance < distance - 0.12);
  }
  function chooseEnemySteer(enemy) {
    const toPlayer = tempVecA.subVectors(playerRig.position, enemy.position);
    const horizontalDistance = Math.hypot(toPlayer.x, toPlayer.z);
    if (horizontalDistance < 1e-3 || horizontalDistance > enemy.detectionRange) {
      return enemy.steerDir.set(0, 0, 0);
    }
    if (horizontalDistance < enemy.stopRange) {
      return enemy.steerDir.set(0, 0, 0);
    }
    const desired = enemy.steerDir.set(toPlayer.x, 0, toPlayer.z).normalize();
    const origin = tempOrigin.set(enemy.position.x, enemy.position.y + enemy.height * 0.6, enemy.position.z);
    const testDistance = Math.min(2.2, horizontalDistance);
    if (!isEnemyPathBlocked(origin, desired, testDistance)) {
      return desired;
    }
    let bestDir = desired.clone();
    let bestScore = -Infinity;
    const angles = [Math.PI / 6, -Math.PI / 6, Math.PI / 3, -Math.PI / 3, Math.PI / 2, -Math.PI / 2];
    for (const angle of angles) {
      const candidate = desired.clone().applyAxisAngle(tempUp, angle);
      const blocked = isEnemyPathBlocked(origin, candidate, 1.8);
      const score = (blocked ? -10 : 0) + candidate.dot(desired);
      if (score > bestScore) {
        bestScore = score;
        bestDir = candidate;
      }
    }
    return enemy.steerDir.copy(bestDir.normalize());
  }
  function shouldEnemyJump(enemy) {
    if (!enemy.onGround || enemy.jumpCooldown > 0 || enemy.steerDir.lengthSq() < 0.04) {
      return false;
    }
    const origin = tempOrigin.set(enemy.position.x, enemy.position.y + enemy.height * 0.55, enemy.position.z);
    if (!isEnemyPathBlocked(origin, enemy.steerDir, 0.9)) {
      return false;
    }
    const aheadX = enemy.position.x + enemy.steerDir.x * 0.95;
    const aheadZ = enemy.position.z + enemy.steerDir.z * 0.95;
    const aheadGround = sampleGroundHeight(aheadX, aheadZ, enemy.position.y + enemy.jumpHeight, enemy.radius, 1.8 + enemy.jumpHeight, 4.6);
    if (!aheadGround) {
      return false;
    }
    const delta = aheadGround.height - enemy.position.y;
    return delta > enemy.stepHeight * 0.9 && delta <= enemy.jumpHeight;
  }
  function updateEnemyPhysics(enemy, dt2) {
    enemy.repathTimer -= dt2;
    enemy.jumpCooldown = Math.max(0, enemy.jumpCooldown - dt2);
    if (enemy.repathTimer <= 0) {
      chooseEnemySteer(enemy);
      enemy.repathTimer = 0.18 + Math.random() * 0.1;
    }
    if (enemy.steerDir.lengthSq() > 0) {
      enemy.velocity.x += enemy.steerDir.x * enemy.accel * dt2;
      enemy.velocity.z += enemy.steerDir.z * enemy.accel * dt2;
    }
    if (shouldEnemyJump(enemy)) {
      enemy.velocity.y = enemy.jumpSpeed;
      enemy.onGround = false;
      enemy.jumpCooldown = 0.9;
    }
    enemy.velocity.y -= 18 * dt2;
    enemy.velocity.x = damp(enemy.velocity.x, 0, 5.5, dt2);
    enemy.velocity.z = damp(enemy.velocity.z, 0, 5.5, dt2);
    const horizontalSpeed = Math.hypot(enemy.velocity.x, enemy.velocity.z);
    if (horizontalSpeed > enemy.maxSpeed) {
      const scale = enemy.maxSpeed / horizontalSpeed;
      enemy.velocity.x *= scale;
      enemy.velocity.z *= scale;
    }
    const nextPos = enemy.position.clone();
    nextPos.x += enemy.velocity.x * dt2;
    resolveHorizontal(nextPos, enemy.velocity, enemy.radius, enemy.height, "x", enemy.position.y, enemy.stepHeight);
    nextPos.z += enemy.velocity.z * dt2;
    resolveHorizontal(nextPos, enemy.velocity, enemy.radius, enemy.height, "z", nextPos.y, enemy.stepHeight);
    nextPos.y += enemy.velocity.y * dt2;
    const ground = sampleGroundHeight(nextPos.x, nextPos.z, nextPos.y);
    if (ground && enemy.velocity.y <= 0 && nextPos.y <= ground.height + 0.08) {
      nextPos.y = ground.height;
      enemy.velocity.y = 0;
      enemy.onGround = true;
    } else {
      enemy.onGround = false;
    }
    enemy.position.copy(nextPos);
    const hover = 0.08 + Math.sin(clock.elapsedTime * 2.6 + enemy.pulse) * 0.03;
    enemy.group.position.set(enemy.position.x, enemy.position.y + enemy.height * 0.5 + hover, enemy.position.z);
    if (enemy.steerDir.lengthSq() > 0.01) {
      const targetYaw = Math.atan2(enemy.steerDir.x, enemy.steerDir.z);
      enemy.group.rotation.y = dampAngle(enemy.group.rotation.y, targetYaw, 10, dt2);
    }
    enemy.flash = damp(enemy.flash, 0, 9, dt2);
    enemy.materials[0].color.setHex(5027919).lerp(new Zr(16777215), enemy.flash);
    enemy.materials[1].color.setHex(2377003).lerp(new Zr(16777215), enemy.flash * 0.6);
    enemy.materials[0].emissiveIntensity = 0.34 + enemy.flash * 0.85;
    enemy.materials[2].emissiveIntensity = 0.44 + enemy.flash * 1.2;
    enemy.attackCooldown -= dt2;
    const distanceToPlayer = enemy.position.distanceTo(playerRig.position);
    if (distanceToPlayer < 1.26 && enemy.attackCooldown <= 0) {
      enemy.attackCooldown = 0.75;
      damagePlayer(enemy.attackDamage, "Tetta Virus strike");
      recoil.camTarget += 0.04;
    }
  }
  function buildShotDirection(baseDirection, spreadAngle) {
    tempRight.crossVectors(baseDirection, tempUp);
    if (tempRight.lengthSq() < 1e-4) {
      tempRight.set(1, 0, 0);
    } else {
      tempRight.normalize();
    }
    tempVecC.crossVectors(tempRight, baseDirection).normalize();
    const radius = Math.tan(spreadAngle * Math.sqrt(Math.random()));
    const theta = Math.random() * Math.PI * 2;
    return baseDirection.clone().addScaledVector(tempRight, Math.cos(theta) * radius).addScaledVector(tempVecC, Math.sin(theta) * radius).normalize();
  }
  function getAimPoint(baseDirection) {
    const focus = tempOrigin.copy(playerRig.position).add(new Ii(0, player.eyeHeight, 0));
    raycaster.set(camera.position, baseDirection);
    raycaster.far = 120;
    const hit = raycaster.intersectObjects(raycastTargets, false)[0];
    return hit ? hit.point.clone() : focus.addScaledVector(baseDirection, 90);
  }
  function applyShotHit(enemy, direction, damage, knockback, point, normal) {
    enemy.hp = Math.max(0, enemy.hp - damage);
    enemy.flash = 1;
    enemy.velocity.addScaledVector(direction, knockback);
    enemy.velocity.y += knockback * 0.2;
    spawnImpact(point, normal, [15400906, 7991154, 2845231], 1.05, 16);
    if (enemy.hp <= 0 && enemy.alive) {
      removeEnemy(enemy);
    }
  }
  function throwGrenade() {
    if (!isGameActive() || player.grenadeCount <= 0) {
      if (player.grenadeCount <= 0) {
        setStatus("No grenades left. Craft more from scrap.", 1.2);
      }
      return;
    }
    player.grenadeCount -= 1;
    const grenade = new Gs(
      new Ku(0.16, 10, 8),
      new od({
        color: 7000172,
        emissive: 1920290,
        emissiveIntensity: 0.46,
        roughness: 0.36,
        metalness: 0.12,
        flatShading: true
      })
    );
    grenade.castShadow = true;
    scene.add(grenade);
    const origin = playerRig.position.clone().add(new Ii(0, player.eyeHeight * 0.8, 0));
    const direction = getAimDirection(new Ii()).clone();
    const velocity = direction.multiplyScalar(10).add(new Ii(0, 2.4, 0)).addScaledVector(player.velocity, 0.28);
    grenade.position.copy(origin).addScaledVector(direction, 0.8);
    grenades.push({
      mesh: grenade,
      velocity,
      fuse: 1.05,
      bounces: 0
    });
    setStatus("Grenade out.", 0.8);
  }
  function explodeGrenade(grenade) {
    const position = grenade.mesh.position.clone();
    spawnExplosionBurst(position, 4.8, 16755023);
    spawnImpact(position, new Ii(0, 1, 0), [16773563, 16758363, 8115711], 2.4, 42);
    for (const enemy of enemies) {
      if (!enemy.alive) {
        continue;
      }
      const distance = enemy.position.distanceTo(position);
      if (distance > 4.8) {
        continue;
      }
      const falloff = 1 - distance / 4.8;
      const dir = enemy.position.clone().sub(position).setY(0.2).normalize();
      applyShotHit(enemy, dir, 54 * falloff, 8.5 * falloff, enemy.group.position.clone(), dir);
    }
    for (const block of [...destructibleBlocks]) {
      const distance = block.mesh.position.distanceTo(position);
      if (distance > 3.3) {
        continue;
      }
      const hits = distance < 2.2 ? 999 : 1;
      if (hits >= block.hp) {
        destroyBlock(block, block.mesh.position.clone(), block.mesh.position.clone().sub(position).normalize());
      }
    }
  }
  function fireWeapon(now) {
    if (reloading) {
      return;
    }
    if (activeWeapon.ammoInMag <= 0) {
      if (activeWeapon.reserve > 0) {
        beginReload(true);
      } else {
        setStatus("Magazine dry. Craft ammo from scrap.", 1.2);
      }
      return;
    }
    activeWeapon.ammoInMag -= 1;
    activeWeapon.heat = clamp(activeWeapon.heat + activeWeapon.heatGain, 0, 1.4);
    nextFireTime = now + activeWeapon.fireInterval;
    recoil.camTarget += activeWeapon.recoil.cam;
    recoil.posTarget.z += activeWeapon.recoil.back;
    recoil.posTarget.y += activeWeapon.recoil.up;
    recoil.rotTarget.x += activeWeapon.recoil.pitch;
    recoil.rotTarget.y += $n.randFloatSpread(activeWeapon.recoil.yaw);
    recoil.rotTarget.z += $n.randFloatSpread(activeWeapon.recoil.roll);
    muzzleFlashStrength = activeWeapon.flashScale;
    muzzleFlash.visible = true;
    const baseSpread = activeWeapon.baseSpread + activeWeapon.spreadGrowth * activeWeapon.heat + (player.moveAmount > 1.4 ? activeWeapon.moveSpread : 0);
    const aimDir = getAimDirection(tempVecA).clone();
    const aimPoint = getAimPoint(aimDir);
    const muzzleOrigin = weaponWorlds[currentWeaponKey].muzzle.getWorldPosition(new Ii());
    let hitAnyEnemy = false;
    for (let pelletIndex = 0; pelletIndex < activeWeapon.pellets; pelletIndex += 1) {
      const pelletAim = activeWeapon.pellets === 1 ? aimPoint.clone().sub(muzzleOrigin).normalize().applyEuler(tempEuler.set(
        $n.randFloatSpread(baseSpread * 0.6),
        $n.randFloatSpread(baseSpread),
        0
      )).normalize() : buildShotDirection(aimPoint.clone().sub(muzzleOrigin).normalize(), baseSpread);
      raycaster.set(muzzleOrigin, pelletAim);
      raycaster.far = 120;
      const hit = raycaster.intersectObjects(raycastTargets, false)[0];
      const endPoint = hit ? hit.point.clone() : muzzleOrigin.clone().addScaledVector(pelletAim, 90);
      if (activeWeapon.pellets === 1 || pelletIndex < 5) {
        spawnTracer(muzzleOrigin.clone(), endPoint, activeWeapon.key === "shotgun" ? 16766868 : 16773302, activeWeapon.pellets === 1 ? 0.92 : 0.62);
      }
      if (!hit) {
        continue;
      }
      const hitNormal = hit.face ? hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize() : new Ii(0, 1, 0);
      const enemy = hit.object.userData.enemyRef;
      if (enemy && enemy.alive) {
        hitAnyEnemy = true;
        applyShotHit(enemy, pelletAim, activeWeapon.damage, activeWeapon.knockback / activeWeapon.pellets, hit.point.clone(), hitNormal);
        continue;
      }
      const block = hit.object.userData.blockRef;
      if (block) {
        damageBlock(block, activeWeapon.blockDamage, hit.point.clone(), hitNormal);
      } else {
        spawnImpact(hit.point.clone(), hitNormal, styleSets.concrete.debris, activeWeapon.pellets > 1 ? 0.8 : 1, activeWeapon.pellets > 1 ? 8 : 12);
      }
    }
    if (hitAnyEnemy) {
      hitMarkerTime = 0.14;
    }
    if (activeWeapon.ammoInMag <= 0 && activeWeapon.reserve > 0) {
      beginReload(true);
    }
  }
  function handleReload(dt2) {
    if (!reloading) {
      return;
    }
    reloadTimer -= dt2;
    if (reloadTimer <= 0) {
      finishReload();
    }
  }
  function handleShooting(now) {
    if (!isGameActive() || reloading) {
      return;
    }
    const wantsToShoot = activeWeapon.auto ? input.triggerHeld : input.queuedSemiShot;
    if (wantsToShoot && now >= nextFireTime) {
      fireWeapon(now);
      if (!activeWeapon.auto) {
        input.queuedSemiShot = false;
      }
    }
  }
  function updatePickups(dt2) {
    for (let i = pickups.length - 1; i >= 0; i -= 1) {
      const pickup = pickups[i];
      pickup.group.rotation.y += dt2 * 1.8;
      pickup.group.position.y = pickup.baseY + 0.12 + Math.sin(clock.elapsedTime * 3.1 + pickup.phase) * 0.06;
      const dx = pickup.group.position.x - playerRig.position.x;
      const dz = pickup.group.position.z - playerRig.position.z;
      const distance = Math.hypot(dx, dz);
      if (distance > pickup.pickupRadius || Math.abs(pickup.group.position.y - (playerRig.position.y + 0.6)) > 1.5) {
        continue;
      }
      if (pickup.type === "ammo") {
        const gain = activeWeapon.key === "handgun" ? 10 : activeWeapon.key === "assault" ? 30 : 4;
        activeWeapon.reserve += gain;
        setStatus(`${activeWeapon.name} ammo +${gain}.`, 1);
      } else if (pickup.type === "scrap") {
        player.materials += pickup.amount;
        setStatus(`Scrap recovered +${pickup.amount}.`, 1);
      } else {
        player.grenadeCount += pickup.amount;
        setStatus(`Grenade stock +${pickup.amount}.`, 1);
      }
      scene.remove(pickup.group);
      pickups.splice(i, 1);
    }
  }
  function updateGrenades(dt2) {
    for (let i = grenades.length - 1; i >= 0; i -= 1) {
      const grenade = grenades[i];
      grenade.fuse -= dt2;
      grenade.velocity.y -= 16 * dt2;
      grenade.mesh.position.addScaledVector(grenade.velocity, dt2);
      grenade.mesh.rotation.x += dt2 * 7;
      grenade.mesh.rotation.z += dt2 * 5;
      const ground = sampleGroundHeight(grenade.mesh.position.x, grenade.mesh.position.z, grenade.mesh.position.y - 0.16);
      if (ground && grenade.velocity.y < 0 && grenade.mesh.position.y <= ground.height + 0.16) {
        grenade.mesh.position.y = ground.height + 0.16;
        grenade.velocity.y *= -0.34;
        grenade.velocity.x *= 0.72;
        grenade.velocity.z *= 0.72;
        grenade.bounces += 1;
      }
      if (grenade.fuse <= 0) {
        explodeGrenade(grenade);
        scene.remove(grenade.mesh);
        grenades.splice(i, 1);
      }
    }
  }
  function updateParticles(dt2) {
    for (let i = impactParticles.length - 1; i >= 0; i -= 1) {
      const particle = impactParticles[i];
      particle.life -= dt2;
      if (particle.life <= 0) {
        scene.remove(particle.mesh);
        particle.mesh.geometry.dispose();
        particle.mesh.material.dispose();
        impactParticles.splice(i, 1);
        continue;
      }
      const alpha = particle.life / particle.maxLife;
      particle.velocity.y -= 9 * dt2;
      particle.velocity.multiplyScalar(Math.exp(-4.6 * dt2));
      particle.mesh.position.addScaledVector(particle.velocity, dt2);
      particle.mesh.rotation.x += particle.spin.x * dt2;
      particle.mesh.rotation.y += particle.spin.y * dt2;
      particle.mesh.rotation.z += particle.spin.z * dt2;
      particle.mesh.material.opacity = alpha;
      particle.mesh.scale.setScalar(0.55 + alpha * 0.85);
    }
    for (let i = explosionBursts.length - 1; i >= 0; i -= 1) {
      const burst = explosionBursts[i];
      burst.life -= dt2;
      if (burst.life <= 0) {
        scene.remove(burst.light);
        scene.remove(burst.mesh);
        burst.mesh.geometry.dispose();
        burst.mesh.material.dispose();
        explosionBursts.splice(i, 1);
        continue;
      }
      const alpha = burst.life / burst.maxLife;
      burst.light.intensity = 6 * alpha;
      burst.mesh.material.opacity = 0.45 * alpha;
      burst.mesh.scale.setScalar(1 + (1 - alpha) * 2.4);
    }
  }
  function updateTracers(dt2) {
    for (let i = tracers.length - 1; i >= 0; i -= 1) {
      const tracer = tracers[i];
      tracer.life -= dt2;
      if (tracer.life <= 0) {
        scene.remove(tracer.line);
        tracer.line.geometry.dispose();
        tracer.material.dispose();
        tracers.splice(i, 1);
        continue;
      }
      tracer.material.opacity = tracer.life / tracer.maxLife;
    }
  }
  function updateTargetCard() {
    const aimDirection = getAimDirection(tempVecA);
    raycaster.set(camera.position, aimDirection);
    raycaster.far = 120;
    const hit = raycaster.intersectObjects(raycastTargets, false)[0];
    currentTargetEnemy = hit && hit.object.userData.enemyRef && hit.object.userData.enemyRef.alive ? hit.object.userData.enemyRef : null;
    if (currentTargetEnemy) {
      targetCardEl.classList.add("visible");
      targetNameEl.textContent = currentTargetEnemy.name;
      targetHpEl.textContent = `HP ${Math.ceil(currentTargetEnemy.hp)} / ${currentTargetEnemy.maxHp}`;
    } else {
      targetCardEl.classList.remove("visible");
    }
  }
  function updateMinimap() {
    const ctx = minimapCtx;
    const width = minimapCanvas.width;
    const height = minimapCanvas.height;
    const range = 24;
    const scale = width / (range * 2);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#101722";
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(113, 148, 184, 0.18)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 8; i += 1) {
      const line = i / 8 * width;
      ctx.beginPath();
      ctx.moveTo(line, 0);
      ctx.lineTo(line, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, line);
      ctx.lineTo(width, line);
      ctx.stroke();
    }
    const playerX = playerRig.position.x;
    const playerZ = playerRig.position.z;
    for (const collider of colliders) {
      const centerX = (collider.bounds.min.x + collider.bounds.max.x) * 0.5;
      const centerZ = (collider.bounds.min.z + collider.bounds.max.z) * 0.5;
      if (Math.abs(centerX - playerX) > range + 4 || Math.abs(centerZ - playerZ) > range + 4) {
        continue;
      }
      const w = Math.max(2, (collider.bounds.max.x - collider.bounds.min.x) * scale);
      const h2 = Math.max(2, (collider.bounds.max.z - collider.bounds.min.z) * scale);
      const px = width * 0.5 + (centerX - playerX) * scale - w * 0.5;
      const py = height * 0.5 + (centerZ - playerZ) * scale - h2 * 0.5;
      ctx.fillStyle = collider.minimap || "#788396";
      ctx.fillRect(px, py, w, h2);
    }
    for (const pickup of pickups) {
      const px = width * 0.5 + (pickup.group.position.x - playerX) * scale;
      const py = height * 0.5 + (pickup.group.position.z - playerZ) * scale;
      ctx.fillStyle = pickup.type === "scrap" ? "#74e8ff" : pickup.type === "grenade" ? "#88ff7a" : "#ffd68c";
      ctx.fillRect(px - 1.5, py - 1.5, 3, 3);
    }
    for (const enemy of enemies) {
      if (!enemy.alive) {
        continue;
      }
      const px = width * 0.5 + (enemy.position.x - playerX) * scale;
      const py = height * 0.5 + (enemy.position.z - playerZ) * scale;
      ctx.fillStyle = "#ff6760";
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.save();
    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate(-view.yaw);
    ctx.fillStyle = "#7dd0ff";
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(6, 7);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 7);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = "rgba(178, 218, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);
  }
  function updateUI(dt2) {
    hitMarkerTime = Math.max(0, hitMarkerTime - dt2);
    hitMarkerEl.classList.toggle("visible", hitMarkerTime > 0);
    crosshairEl.classList.toggle("dim", !isGameActive());
    weaponNameEl.textContent = activeWeapon.name;
    weaponMetaEl.textContent = activeWeapon.meta;
    ammoTextEl.textContent = `${activeWeapon.ammoInMag} / ${activeWeapon.reserve}`;
    grenadeTextEl.textContent = `GRENADES x${player.grenadeCount}`;
    craftTextEl.textContent = `C AMMO ${activeWeapon.craftCost} SCRAP // F GRENADE 8 // G THROW`;
    reloadTextEl.textContent = reloading ? `RELOADING ${Math.max(0, reloadTimer).toFixed(1)}` : activeWeapon.ammoInMag === 0 && activeWeapon.reserve === 0 ? "OUT OF AMMO" : "";
    hpValueEl.textContent = `${Math.ceil(player.hp)} / ${player.maxHp}`;
    armorValueEl.textContent = `${Math.ceil(player.armor)} / ${player.maxArmor}`;
    hpFillEl.style.width = `${player.hp / player.maxHp * 100}%`;
    armorFillEl.style.width = `${player.armor / player.maxArmor * 100}%`;
    levelValueEl.textContent = `${player.level}`;
    scoreValueEl.textContent = `${player.score.toLocaleString()}`;
    materialsValueEl.textContent = `${player.materials}`;
    minimapInfoEl.textContent = roundState.current === 0 ? "Stand by for deployment" : roundState.pending ? `Round ${roundState.current} clear // next wave ${Math.max(1, Math.ceil(roundState.countdown))}` : `Round ${roundState.current} // ${roundState.activeCount} hostiles live`;
    const gap = 8 + activeWeapon.heat * 16 + (player.moveAmount > 1.2 ? 6 : 0) + (reloading ? 5 : 0);
    crosshairEl.style.setProperty("--gap", `${gap}px`);
    updateTargetCard();
    updateMinimap();
  }
  function updateEnemies(dt2) {
    let aliveCount = 0;
    if (!isGameActive()) {
      roundState.activeCount = enemies.filter((enemy) => enemy.alive).length;
      return;
    }
    for (const enemy of enemies) {
      if (!enemy.alive) {
        continue;
      }
      aliveCount += 1;
      updateEnemyPhysics(enemy, dt2);
    }
    roundState.activeCount = aliveCount;
  }
  function updateWeaponsCooling(dt2) {
    Object.values(weapons).forEach((weapon) => {
      weapon.heat = Math.max(0, weapon.heat - weapon.coolRate * dt2);
    });
  }
  function onKeyChange(event, pressed) {
    switch (event.code) {
      case "KeyW":
        input.forward = pressed;
        break;
      case "KeyS":
        input.backward = pressed;
        break;
      case "KeyA":
        input.left = pressed;
        break;
      case "KeyD":
        input.right = pressed;
        break;
      case "Space":
        if (pressed) {
          input.jumpQueued = true;
        }
        break;
      case "KeyR":
        if (pressed) {
          beginReload(false);
        }
        break;
      case "Digit1":
        if (pressed) {
          equipWeapon("handgun");
        }
        break;
      case "Digit2":
        if (pressed) {
          equipWeapon("assault");
        }
        break;
      case "Digit3":
        if (pressed) {
          equipWeapon("shotgun");
        }
        break;
      case "KeyC":
        if (pressed) {
          craftAmmo();
        }
        break;
      case "KeyF":
        if (pressed) {
          craftGrenade();
        }
        break;
      case "KeyG":
        if (pressed) {
          throwGrenade();
        }
        break;
      default:
        break;
    }
  }
  function updateJoystickVisual(x, y2) {
    joystickKnobEl.style.transform = `translate(${x}px, ${y2}px)`;
  }
  function releaseJoystick() {
    touchInput.moveX = 0;
    touchInput.moveY = 0;
    touchInput.joystickPointerId = null;
    updateJoystickVisual(0, 0);
  }
  function handleJoystickPointer(clientX, clientY) {
    const rect = joystickBaseEl.getBoundingClientRect();
    const centerX = rect.left + rect.width * 0.5;
    const centerY = rect.top + rect.height * 0.5;
    const maxRadius = rect.width * 0.32;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const length = Math.hypot(dx, dy) || 1;
    const clamped = Math.min(maxRadius, length);
    const nx = dx / length * clamped;
    const ny = dy / length * clamped;
    touchInput.moveX = clamp(nx / maxRadius, -1, 1);
    touchInput.moveY = clamp(ny / maxRadius, -1, 1);
    updateJoystickVisual(nx, ny);
  }
  function startTouchFire() {
    input.triggerHeld = true;
    if (!activeWeapon.auto) {
      input.queuedSemiShot = true;
    }
  }
  function stopTouchFire() {
    input.triggerHeld = false;
  }
  buildWorld();
  placePlayerAtSpawn();
  equipWeapon("assault");
  document.addEventListener("keydown", (event) => onKeyChange(event, true));
  document.addEventListener("keyup", (event) => onKeyChange(event, false));
  document.addEventListener("mousedown", (event) => {
    if (isTouchDevice || event.button !== 0) {
      return;
    }
    if (!pointerLocked) {
      renderer.domElement.requestPointerLock();
      return;
    }
    input.triggerHeld = true;
    if (!activeWeapon.auto) {
      input.queuedSemiShot = true;
    }
  });
  document.addEventListener("mouseup", (event) => {
    if (isTouchDevice || event.button !== 0) {
      return;
    }
    input.triggerHeld = false;
  });
  document.addEventListener("mousemove", (event) => {
    if (isTouchDevice || !pointerLocked) {
      return;
    }
    applyLookDelta(event.movementX, event.movementY);
  });
  document.addEventListener("pointerlockchange", () => {
    pointerLocked = document.pointerLockElement === renderer.domElement;
    overlay.classList.toggle("hidden", pointerLocked);
    if (!pointerLocked) {
      input.triggerHeld = false;
      input.queuedSemiShot = false;
    }
  });
  playButton.addEventListener("click", () => startGameSession());
  if (isTouchDevice) {
    loadNote.textContent = "Tap DEPLOY, rotate sideways, and sweep the district.";
    updateOrientationState();
    joystickBaseEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      touchInput.joystickPointerId = event.pointerId;
      joystickBaseEl.setPointerCapture(event.pointerId);
      handleJoystickPointer(event.clientX, event.clientY);
    });
    joystickBaseEl.addEventListener("pointermove", (event) => {
      if (touchInput.joystickPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      handleJoystickPointer(event.clientX, event.clientY);
    });
    const endJoystick = (event) => {
      if (touchInput.joystickPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      releaseJoystick();
    };
    joystickBaseEl.addEventListener("pointerup", endJoystick);
    joystickBaseEl.addEventListener("pointercancel", endJoystick);
    mobileLookZoneEl.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".mobile-btn")) {
        return;
      }
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      touchInput.lookPointerId = event.pointerId;
      touchInput.lookLastX = event.clientX;
      touchInput.lookLastY = event.clientY;
      mobileLookZoneEl.setPointerCapture(event.pointerId);
    });
    mobileLookZoneEl.addEventListener("pointermove", (event) => {
      if (touchInput.lookPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      const dx = event.clientX - touchInput.lookLastX;
      const dy = event.clientY - touchInput.lookLastY;
      touchInput.lookLastX = event.clientX;
      touchInput.lookLastY = event.clientY;
      applyLookDelta(dx, dy);
    });
    const endLook = (event) => {
      if (touchInput.lookPointerId !== event.pointerId) {
        return;
      }
      event.preventDefault();
      touchInput.lookPointerId = null;
    };
    mobileLookZoneEl.addEventListener("pointerup", endLook);
    mobileLookZoneEl.addEventListener("pointercancel", endLook);
    mobileFireEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      startTouchFire();
    });
    mobileFireEl.addEventListener("pointerup", (event) => {
      event.preventDefault();
      stopTouchFire();
    });
    mobileFireEl.addEventListener("pointercancel", (event) => {
      event.preventDefault();
      stopTouchFire();
    });
    mobileJumpEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      input.jumpQueued = true;
    });
    mobileReloadEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      beginReload(false);
    });
    mobileSwitchEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      cycleWeapon();
    });
    mobileGrenadeEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      throwGrenade();
    });
    mobileCraftEl.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      if (!mobileSessionActive) {
        startGameSession();
      }
      if (player.grenadeCount < 2) {
        craftGrenade();
      } else {
        craftAmmo();
      }
    });
  }
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateOrientationState();
  });
  window.addEventListener("orientationchange", () => updateOrientationState());
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  function animate() {
    const dt2 = Math.min(clock.getDelta(), 0.033);
    const now = clock.elapsedTime;
    updateWeaponsCooling(dt2);
    updateRounds(dt2);
    updatePlayer(dt2);
    handleReload(dt2);
    handleShooting(now);
    updatePlayerVisual(dt2);
    updateCamera(dt2);
    updateEnemies(dt2);
    updatePickups(dt2);
    updateGrenades(dt2);
    updateParticles(dt2);
    updateTracers(dt2);
    updateUI(dt2);
    player.level = 1 + Math.floor(player.score / 1500);
    playerVisual.visor.material.emissiveIntensity = damp(playerVisual.visor.material.emissiveIntensity, 0.34, 6, dt2);
    if (statusTimer > 0) {
      statusTimer -= dt2;
    } else if (missionTextEl.textContent !== getDefaultMissionText()) {
      missionTextEl.textContent = getDefaultMissionText();
    }
    renderer.render(scene, camera);
  }
  loadNote.textContent = isTouchDevice ? "Battlefield loaded. Tap DEPLOY and rotate to landscape." : "Battlefield loaded. Click DEPLOY to lock the cursor.";
  renderer.setAnimationLoop(animate);
})();
/*! Bundled license information:

three/build/three.module.min.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
