(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;inset:0 3px 3px 0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{inset:0 0 3px 3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as $o, inject as Ri, ref as Re, reactive as Te, toRef as bf, onBeforeMount as Uo, onMounted as Ko, watchEffect as yf, onBeforeUnmount as Zo, computed as Rr, watch as Ct, openBlock as be, createElementBlock as dn, normalizeClass as Ti, unref as Yn, normalizeStyle as Jo, renderSlot as ua, createCommentVNode as xf, nextTick as mr, provide as Oi, toRefs as zi, Fragment as Sf, renderList as Ef, createBlock as wf, mergeProps as _f, withCtx as Cf, withDirectives as Df, createVNode as Mf, vShow as Rf } from "vue";
const Tf = typeof window < "u";
var Pi;
Tf && ((Pi = window == null ? void 0 : window.navigator) != null && Pi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ut(t) {
  return t == null;
}
function Qo() {
}
const Of = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(Of)));
function zf() {
  const t = /* @__PURE__ */ new Map();
  return {
    on(r, e) {
      const n = t.get(r);
      n != null && n.add(e) || t.set(r, /* @__PURE__ */ new Set([e]));
    },
    off(r, e) {
      const n = t.get(r);
      n && n.delete(e);
    },
    clear(r) {
      const e = t.get(r);
      e && e.clear();
    },
    clearAll() {
      t.clear();
    },
    emit(r, ...e) {
      const n = t.get(r);
      n && n.forEach((a) => {
        a(...e);
      });
    }
  };
}
function Ii(t, r = 16) {
  if (typeof t != "function")
    return Qo;
  const e = (...i) => {
    t(...i);
  };
  if (r <= 0)
    return ts(e);
  let n = 0, a;
  return function(...i) {
    const o = Date.now(), s = o - n;
    clearTimeout(a), s >= r ? (n = o, e(...i)) : a = setTimeout(
      () => {
        n = Date.now(), e(...i);
      },
      Math.max(0, r - s)
    );
  };
}
function Pf(t, r = 100) {
  if (typeof t != "function")
    return Qo;
  const e = (...a) => {
    t(...a);
  };
  if (r <= 0)
    return ts(e);
  let n;
  return function(...a) {
    clearTimeout(n), n = setTimeout(() => {
      e(...a);
    }, r);
  };
}
function ts(t) {
  if (typeof t != "function")
    return t;
  let r = !1, e, n;
  return function(...a) {
    return e = a, r || (r = !0, n = Promise.resolve().then(() => (r = !1, n = void 0, t(...e)))), n;
  };
}
const ye = /* @__PURE__ */ new Set(), rs = /* @__PURE__ */ new WeakMap();
function If() {
  ye.forEach((t) => {
    t(...rs.get(t));
  }), ye.clear();
}
function Ft(t, ...r) {
  if (typeof t != "function")
    return t;
  rs.set(t, r), !ye.has(t) && (ye.add(t), ye.size === 1 && Promise.resolve().then(If));
}
const es = Symbol("LAYOUT_KEY"), ns = Symbol("EMITTER_KEY");
function Bf(t) {
  let r = 0, e;
  for (let n = 0, a = t.length; n < a; n++)
    e = t[n].y + t[n].h, e > r && (r = e);
  return r;
}
function fa(t) {
  const r = Array(t.length);
  for (let e = 0, n = t.length; e < n; e++)
    r[e] = kf(t[e]);
  return r;
}
function kf(t) {
  return { ...t };
}
function as(t, r) {
  return !(t === r || t.x + t.w <= r.x || t.x >= r.x + r.w || t.y + t.h <= r.y || t.y >= r.y + r.h);
}
function qr(t, r, e) {
  const n = os(t), a = ss(t), i = Array(t.length);
  for (let o = 0, s = a.length; o < s; o++) {
    let u = a[o];
    u.static || (u = Gf(n, u, r, e), n.push(u)), i[t.indexOf(u)] = u, u.moved = !1;
  }
  return i;
}
function Gf(t, r, e, n) {
  if (e)
    for (; r.y > 0 && !xe(t, r); )
      r.y--;
  else if (n) {
    const i = n[r.i].y;
    for (; r.y > i && !xe(t, r); )
      r.y--;
  }
  let a;
  for (; a = xe(t, r); )
    r.y = a.y + a.h;
  return r;
}
function Af(t, r) {
  const e = os(t);
  for (let n = 0, a = t.length; n < a; n++) {
    const i = t[n];
    if (i.x + i.w > r.cols && (i.x = r.cols - i.w), i.x < 0 && (i.x = 0, i.w = r.cols), !i.static)
      e.push(i);
    else
      for (; xe(e, i); )
        i.y++;
  }
  return t;
}
function Bi(t, r) {
  for (let e = 0, n = t.length; e < n; e++)
    if (t[e].i === r)
      return t[e];
}
function xe(t, r) {
  for (let e = 0, n = t.length; e < n; e++)
    if (as(t[e], r))
      return t[e];
}
function is(t, r) {
  return t.filter((e) => as(e, r));
}
function os(t) {
  return t.filter((r) => r.static);
}
function la(t, r, e, n, a = !1, i = !1) {
  if (r.static)
    return t;
  const o = r.x, s = r.y, u = n && r.y > n;
  typeof e == "number" && (r.x = e), typeof n == "number" && (r.y = n), r.moved = !0;
  let f = ss(t);
  u && (f = f.reverse());
  const l = is(f, r);
  if (i && l.length)
    return r.x = o, r.y = s, r.moved = !1, t;
  for (let v = 0, c = l.length; v < c; v++) {
    const d = l[v];
    d.moved || r.y > d.y && r.y - d.y > d.h / 4 || (d.static ? t = ki(t, d, r, a) : t = ki(t, r, d, a));
  }
  return t;
}
function ki(t, r, e, n) {
  if (n) {
    const i = {
      x: e.x,
      y: e.y,
      w: e.w,
      h: e.h,
      i: "-1"
    };
    if (i.y = Math.max(r.y - e.h, 0), !xe(t, i))
      return la(t, e, void 0, i.y, !1);
  }
  return la(t, e, void 0, e.y + 1, !1);
}
function Ff(t, r, e, n) {
  const a = "translate3d(" + r + "px," + t + "px, 0)";
  return {
    transform: a,
    WebkitTransform: a,
    MozTransform: a,
    msTransform: a,
    OTransform: a,
    width: e + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Nf(t, r, e, n) {
  const a = "translate3d(" + r * -1 + "px," + t + "px, 0)";
  return {
    transform: a,
    WebkitTransform: a,
    MozTransform: a,
    msTransform: a,
    OTransform: a,
    width: e + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Wf(t, r, e, n) {
  return {
    top: t + "px",
    left: r + "px",
    width: e + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Hf(t, r, e, n) {
  return {
    top: t + "px",
    right: r + "px",
    width: e + "px",
    height: n + "px",
    position: "absolute"
  };
}
function ss(t) {
  return Array.from(t).sort(function(r, e) {
    return r.y === e.y && r.x === e.x ? 0 : r.y > e.y || r.y === e.y && r.x > e.x ? 1 : -1;
  });
}
function Lf(t, r) {
  r = r || "Layout";
  const e = ["x", "y", "w", "h"], n = [];
  if (!Array.isArray(t))
    throw new Error(r + " must be an array!");
  for (let a = 0, i = t.length; a < i; a++) {
    const o = t[a];
    for (let s = 0; s < e.length; s++)
      if (typeof o[e[s]] != "number")
        throw new Error(
          "VueGridLayout: " + r + "[" + a + "]." + e[s] + " must be a number!"
        );
    if (o.i === void 0 || o.i === null)
      throw new Error("VueGridLayout: " + r + "[" + a + "].i cannot be null!");
    if (typeof o.i != "number" && typeof o.i != "string")
      throw new Error("VueGridLayout: " + r + "[" + a + "].i must be a string or number!");
    if (n.indexOf(o.i) >= 0)
      throw new Error("VueGridLayout: " + r + "[" + a + "].i must be unique!");
    if (n.push(o.i), o.static !== void 0 && typeof o.static != "boolean")
      throw new Error("VueGridLayout: " + r + "[" + a + "].static must be a boolean!");
  }
}
function Yf(t, r = "vgl") {
  const e = () => `${r}-${t}`;
  return {
    b: e,
    be: (o) => `${e()}__${o}`,
    bm: (o) => `${e()}--${o}`,
    bem: (o, s) => `${e()}__${o}--${s}`
  };
}
function Gi(t) {
  return Xf(t);
}
function Xf(t) {
  var i;
  const r = ((i = t.target) == null ? void 0 : i.offsetParent) || document.body, e = t.offsetParent === document.body ? { left: 0, top: 0 } : r.getBoundingClientRect(), n = t.clientX + r.scrollLeft - e.left, a = t.clientY + r.scrollTop - e.top;
  return { x: n, y: a };
}
function Ai(t, r, e, n) {
  return qf(t) ? {
    deltaX: e - t,
    deltaY: n - r,
    lastX: t,
    lastY: r,
    x: e,
    y: n
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: e,
    lastY: n,
    x: e,
    y: n
  };
}
function qf(t) {
  return typeof t == "number" && !Number.isNaN(t);
}
function Vf(t, r) {
  const e = us(t);
  let n = e[0];
  for (let a = 1, i = e.length; a < i; a++) {
    const o = e[a];
    r > t[o] && (n = o);
  }
  return n;
}
function ca(t, r) {
  if (!r[t])
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + t + " is missing!");
  return r[t];
}
function jf(t, r, e, n, a, i, o) {
  if (r[n])
    return fa(r[n]);
  let s = t;
  const u = us(e), f = u.slice(u.indexOf(n));
  for (let l = 0, v = f.length; l < v; l++) {
    const c = f[l];
    if (r[c]) {
      s = r[c];
      break;
    }
  }
  return s = fa(s || []), qr(Af(s, { cols: i }), o);
}
function us(t) {
  return Object.keys(t).sort((e, n) => t[e] - t[n]);
}
let $f = "auto";
function Uf() {
  return typeof document < "u";
}
function Fi() {
  return Uf() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : $f;
}
function Kf(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  return r.map(function(n) {
    return n.split(" ").map(function(a) {
      return a ? "" + t + a : "";
    }).join(" ");
  }).join(" ");
}
function Zf(t, r) {
  return r.replace(/([^}{]*){/gm, function(e, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function vr(t, r) {
  return function(e) {
    e && (t[r] = e);
  };
}
function fs(t, r, e) {
  return function(n) {
    n && (t[r][e] = n);
  };
}
function Ni(t, r) {
  return function(e) {
    var n = e.prototype;
    t.forEach(function(a) {
      r(n, a);
    });
  };
}
function Jf(t, r) {
  return r === void 0 && (r = {}), function(e, n) {
    t.forEach(function(a) {
      var i = r[a] || a;
      i in e || (e[i] = function() {
        for (var o, s = [], u = 0; u < arguments.length; u++)
          s[u] = arguments[u];
        var f = (o = this[n])[a].apply(o, s);
        return f === this[n] ? this : f;
      });
    });
  };
}
var Qf = "function", tl = "object", rl = "string", el = "number", Ha = "undefined", ls = typeof window !== Ha, nl = typeof document !== Ha && document, al = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], Tt = 1e-7, je = {
  cm: function(t) {
    return t * 96 / 2.54;
  },
  mm: function(t) {
    return t * 96 / 254;
  },
  in: function(t) {
    return t * 96;
  },
  pt: function(t) {
    return t * 96 / 72;
  },
  pc: function(t) {
    return t * 96 / 6;
  },
  "%": function(t, r) {
    return t * r / 100;
  },
  vw: function(t, r) {
    return r === void 0 && (r = window.innerWidth), t / 100 * r;
  },
  vh: function(t, r) {
    return r === void 0 && (r = window.innerHeight), t / 100 * r;
  },
  vmax: function(t, r) {
    return r === void 0 && (r = Math.max(window.innerWidth, window.innerHeight)), t / 100 * r;
  },
  vmin: function(t, r) {
    return r === void 0 && (r = Math.min(window.innerWidth, window.innerHeight)), t / 100 * r;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function il() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), a = 0, r = 0; r < e; r++)
    for (var i = arguments[r], o = 0, s = i.length; o < s; o++, a++)
      n[a] = i[o];
  return n;
}
function pn(t, r, e, n) {
  return (t * n + r * e) / (e + n);
}
function Rn(t) {
  return typeof t === Ha;
}
function ar(t) {
  return t && typeof t === tl;
}
function Ot(t) {
  return Array.isArray(t);
}
function qt(t) {
  return typeof t === rl;
}
function te(t) {
  return typeof t === el;
}
function La(t) {
  return typeof t === Qf;
}
function ol(t, r) {
  var e = t === "" || t == " ", n = r === "" || r == " ";
  return n && e || t === r;
}
function cs(t, r, e, n, a) {
  var i = Ya(t, r, e);
  return i ? e : sl(t, r, e + 1, n, a);
}
function Ya(t, r, e) {
  if (!t.ignore)
    return null;
  var n = r.slice(Math.max(e - 3, 0), e + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function sl(t, r, e, n, a) {
  for (var i = function(f) {
    var l = r[f].trim();
    if (l === t.close && !Ya(t, r, f))
      return {
        value: f
      };
    var v = f, c = Vt(a, function(d) {
      var p = d.open;
      return p === l;
    });
    if (c && (v = cs(c, r, f, n, a)), v === -1)
      return o = f, "break";
    f = v, o = f;
  }, o, s = e; s < n; ++s) {
    var u = i(s);
    if (s = o, typeof u == "object")
      return u.value;
    if (u === "break")
      break;
  }
  return -1;
}
function Xa(t, r) {
  var e = qt(r) ? {
    separator: r
  } : r, n = e.separator, a = n === void 0 ? "," : n, i = e.isSeparateFirst, o = e.isSeparateOnlyOpenClose, s = e.isSeparateOpenClose, u = s === void 0 ? o : s, f = e.openCloseCharacters, l = f === void 0 ? al : f, v = l.map(function(C) {
    var w = C.open, D = C.close;
    return w === D ? w : w + "|" + D;
  }).join("|"), c = "(\\s*" + a + "\\s*|" + v + "|\\s+)", d = new RegExp(c, "g"), p = t.split(d).filter(function(C) {
    return C && C !== "undefined";
  }), h = p.length, g = [], m = [];
  function b() {
    return m.length ? (g.push(m.join("")), m = [], !0) : !1;
  }
  for (var y = function(C) {
    var w = p[C].trim(), D = C, _ = Vt(l, function(R) {
      var P = R.open;
      return P === w;
    }), z = Vt(l, function(R) {
      var P = R.close;
      return P === w;
    });
    if (_) {
      if (D = cs(_, p, C, h, l), D !== -1 && u)
        return b() && i || (g.push(p.slice(C, D + 1).join("")), C = D, i) ? (x = C, "break") : (x = C, "continue");
    } else if (z && !Ya(z, p, C)) {
      var O = il(l);
      return O.splice(l.indexOf(z), 1), {
        value: Xa(t, {
          separator: a,
          isSeparateFirst: i,
          isSeparateOnlyOpenClose: o,
          isSeparateOpenClose: u,
          openCloseCharacters: O
        })
      };
    } else if (ol(w, a) && !o)
      return b(), i ? (x = C, "break") : (x = C, "continue");
    D === -1 && (D = h - 1), m.push(p.slice(C, D + 1).join("")), C = D, x = C;
  }, x, E = 0; E < h; ++E) {
    var S = y(E);
    if (E = x, typeof S == "object")
      return S.value;
    if (S === "break")
      break;
  }
  return m.length && g.push(m.join("")), g;
}
function Er(t) {
  return Xa(t, "");
}
function Ir(t) {
  return Xa(t, ",");
}
function vs(t) {
  var r = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !r || r.length < 4 ? {} : {
    prefix: r[1],
    value: r[2],
    suffix: r[3]
  };
}
function Ae(t) {
  var r = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
  if (!r)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var e = r[1], n = r[2], a = r[3];
  return {
    prefix: e,
    unit: a,
    value: parseFloat(n)
  };
}
function ul(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(r, e) {
    return e.toUpperCase();
  });
}
function ln(t, r) {
  return r === void 0 && (r = "-"), t.replace(/([a-z])([A-Z])/g, function(e, n, a) {
    return "" + n + r + a.toLowerCase();
  });
}
function Oe() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function hr(t, r, e) {
  e === void 0 && (e = -1);
  for (var n = t.length, a = 0; a < n; ++a)
    if (r(t[a], a, t))
      return a;
  return e;
}
function Vt(t, r, e) {
  var n = hr(t, r);
  return n > -1 ? t[n] : e;
}
var ds = /* @__PURE__ */ function() {
  var t = Oe(), r = ls && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return r ? r.bind(window) : function(e) {
    var n = Oe(), a = setTimeout(function() {
      e(n - t);
    }, 1e3 / 60);
    return a;
  };
}(), fl = /* @__PURE__ */ function() {
  var t = ls && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(r) {
    clearTimeout(r);
  };
}();
function gr(t) {
  return Object.keys(t);
}
function ll(t) {
  var r = gr(t);
  return r.map(function(e) {
    return t[e];
  });
}
function yt(t, r) {
  var e = Ae(t), n = e.value, a = e.unit;
  if (ar(r)) {
    var i = r[a];
    if (i) {
      if (La(i))
        return i(n);
      if (je[a])
        return je[a](n, i);
    }
  } else if (a === "%")
    return n * r / 100;
  return je[a] ? je[a](n) : n;
}
function va(t, r, e) {
  return Math.max(r, Math.min(t, e));
}
function Wi(t, r, e, n) {
  return n === void 0 && (n = t[0] / t[1]), [[ot(r[0], Tt), ot(r[0] / n, Tt)], [ot(r[1] * n, Tt), ot(r[1], Tt)]].filter(function(a) {
    return a.every(function(i, o) {
      var s = r[o], u = ot(s, Tt);
      return e ? i <= s || i <= u : i >= s || i >= u;
    });
  })[0] || t;
}
function ps(t, r, e, n) {
  if (!n)
    return t.map(function(d, p) {
      return va(d, r[p], e[p]);
    });
  var a = t[0], i = t[1], o = n === !0 ? a / i : n, s = Wi(t, r, !1, o), u = s[0], f = s[1], l = Wi(t, e, !0, o), v = l[0], c = l[1];
  return a < u || i < f ? (a = u, i = f) : (a > v || i > c) && (a = v, i = c), [a, i];
}
function cl(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return e;
}
function da(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return r ? e / r : 0;
}
function Mt(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], a = Math.atan2(n, e);
  return a >= 0 ? a : a + Math.PI * 2;
}
function vl(t) {
  return [0, 1].map(function(r) {
    return da(t.map(function(e) {
      return e[r];
    }));
  });
}
function Hi(t) {
  var r = vl(t), e = Mt(r, t[0]), n = Mt(r, t[1]);
  return e < n && n - e < Math.PI || e > n && n - e < -Math.PI ? 1 : -1;
}
function dr(t, r) {
  return Math.sqrt(Math.pow((r ? r[0] : 0) - t[0], 2) + Math.pow((r ? r[1] : 0) - t[1], 2));
}
function ot(t, r) {
  if (!r)
    return t;
  var e = 1 / r;
  return Math.round(t / r) / e;
}
function Li(t, r) {
  return t.forEach(function(e, n) {
    t[n] = ot(t[n], r);
  }), t;
}
function dl(t) {
  for (var r = [], e = 0; e < t; ++e)
    r.push(e);
  return r;
}
function hs(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function gs(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function Pt(t, r) {
  return t.classList ? t.classList.contains(r) : !!t.className.match(new RegExp("(\\s|^)" + r + "(\\s|$)"));
}
function ms(t, r) {
  t.classList ? t.classList.add(r) : t.className += " " + r;
}
function bs(t, r) {
  if (t.classList)
    t.classList.remove(r);
  else {
    var e = new RegExp("(\\s|^)" + r + "(\\s|$)");
    t.className = t.className.replace(e, " ");
  }
}
function kt(t, r, e, n) {
  t.addEventListener(r, e, n);
}
function zt(t, r, e, n) {
  t.removeEventListener(r, e, n);
}
function se(t) {
  return (t == null ? void 0 : t.ownerDocument) || nl;
}
function qa(t) {
  return se(t).documentElement;
}
function Cr(t) {
  return se(t).body;
}
function Sr(t) {
  var r;
  return ((r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView) || window;
}
function ys(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function ue(t) {
  return ar(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var pl = /* @__PURE__ */ function() {
  function t() {
    this.keys = [], this.values = [];
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.values[this.keys.indexOf(e)];
  }, r.set = function(e, n) {
    var a = this.keys, i = this.values, o = a.indexOf(e), s = o === -1 ? a.length : o;
    a[s] = e, i[s] = n;
  }, t;
}(), hl = /* @__PURE__ */ function() {
  function t() {
    this.object = {};
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.object[e];
  }, r.set = function(e, n) {
    this.object[e] = n;
  }, t;
}(), gl = typeof Map == "function", ml = /* @__PURE__ */ function() {
  function t() {
  }
  var r = t.prototype;
  return r.connect = function(e, n) {
    this.prev = e, this.next = n, e && (e.next = this), n && (n.prev = this);
  }, r.disconnect = function() {
    var e = this.prev, n = this.next;
    e && (e.next = n), n && (n.prev = e);
  }, r.getIndex = function() {
    for (var e = this, n = -1; e; )
      e = e.prev, ++n;
    return n;
  }, t;
}();
function bl(t, r) {
  var e = [], n = [];
  return t.forEach(function(a) {
    var i = a[0], o = a[1], s = new ml();
    e[i] = s, n[o] = s;
  }), e.forEach(function(a, i) {
    a.connect(e[i - 1]);
  }), t.filter(function(a, i) {
    return !r[i];
  }).map(function(a, i) {
    var o = a[0], s = a[1];
    if (o === s)
      return [0, 0];
    var u = e[o], f = n[s - 1], l = u.getIndex();
    u.disconnect(), f ? u.connect(f, f.next) : u.connect(void 0, e[0]);
    var v = u.getIndex();
    return [l, v];
  });
}
var yl = /* @__PURE__ */ function() {
  function t(e, n, a, i, o, s, u, f) {
    this.prevList = e, this.list = n, this.added = a, this.removed = i, this.changed = o, this.maintained = s, this.changedBeforeAdded = u, this.fixed = f;
  }
  var r = t.prototype;
  return Object.defineProperty(r, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(r, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), r.caculateOrdered = function() {
    var e = bl(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = e.filter(function(i, o) {
      var s = i[0], u = i[1], f = n[o], l = f[0], v = f[1];
      if (s !== u)
        return a.push([l, v]), !0;
    }), this.cachePureChanged = a;
  }, t;
}();
function Fe(t, r, e) {
  var n = gl ? Map : e ? hl : pl, a = e || function(b) {
    return b;
  }, i = [], o = [], s = [], u = t.map(a), f = r.map(a), l = new n(), v = new n(), c = [], d = [], p = {}, h = [], g = 0, m = 0;
  return u.forEach(function(b, y) {
    l.set(b, y);
  }), f.forEach(function(b, y) {
    v.set(b, y);
  }), u.forEach(function(b, y) {
    var x = v.get(b);
    typeof x > "u" ? (++m, o.push(y)) : p[x] = m;
  }), f.forEach(function(b, y) {
    var x = l.get(b);
    typeof x > "u" ? (i.push(y), ++g) : (s.push([x, y]), m = p[y] || 0, c.push([x - m, y - g]), d.push(y === x), x !== y && h.push([x, y]));
  }), o.reverse(), new yl(t, r, i, o, h, s, c, d);
}
var xl = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = []), this.findKeyCallback = n, this.list = [].slice.call(e);
  }
  var r = t.prototype;
  return r.update = function(e) {
    var n = [].slice.call(e), a = Fe(this.list, n, this.findKeyCallback);
    return this.list = n, a;
  }, t;
}(), pa = function(t, r) {
  return pa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  }, pa(t, r);
};
function Ne(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  pa(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var sr = function() {
  return sr = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, sr.apply(this, arguments);
};
function xs(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
function Yi(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, a = r.length, i; n < a; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return t.concat(i || Array.prototype.slice.call(r));
}
function Xi(t) {
  var r = 0;
  return t.map(function(e) {
    return e == null ? "$compat".concat(++r) : "".concat(e);
  });
}
function Ss(t) {
  var r = [];
  return t.forEach(function(e) {
    r = r.concat(Ot(e) ? Ss(e) : e);
  }), r;
}
function Xn(t, r) {
  if (!r)
    return t;
  for (var e in r)
    Rn(t[e]) && (t[e] = r[e]);
  return t;
}
function hn(t, r) {
  if (t === r)
    return !1;
  for (var e in t)
    if (!(e in r))
      return !0;
  for (var e in r)
    if (t[e] !== r[e])
      return !0;
  return !1;
}
function qi(t) {
  var r = t.className, e = xs(t, ["className"]);
  return r != null && (e.class = r), delete e.style, delete e.children, e;
}
function Vi(t) {
  var r = {}, e = {};
  for (var n in t)
    n.indexOf("on") === 0 ? e[n] = t[n] : r[n] = t[n];
  return [r, e];
}
function Tn(t) {
  if (!t)
    return null;
  var r = t.b;
  return ue(r) ? r : Tn(t.c);
}
function Es(t) {
  var r = t.parentNode;
  r && r.removeChild(t);
}
function ws(t) {
  t.forEach(function(r) {
    r();
  });
}
function Sl() {
  return this.constructor(this.props, this.context);
}
var Va = 0, On = /* @__PURE__ */ function() {
  function t(e, n, a, i, o, s, u) {
    u === void 0 && (u = {}), this.t = e, this.d = n, this.k = a, this.i = i, this.c = o, this.ref = s, this.ps = u, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var r = t.prototype;
  return r.s = function() {
    return !0;
  }, r.u = function(e, n, a, i, o) {
    var s = this, u = s.d, f = ll(n).filter(function(p) {
      return p.$_req;
    }), l = Ss(f.map(function(p) {
      return p.$_subs;
    })), v = Vt(l, function(p) {
      return p.d === u;
    });
    if (s.b && !qt(a) && !o && !s.s(a.props, i) && !v) {
      var c = l.reduce(function(p, h) {
        var g = h.d;
        return p[0] ? p[0].d === g && p.push(h) : g > u && p.push(h), p;
      }, []);
      return c.forEach(function(p) {
        We(p, p._ps, [p.o], e, n, !0);
      }), !1;
    }
    s.o = a, s.ss(i);
    var d = s.ps;
    return qt(a) || (s.ps = a.props, s.ref = a.ref), ja(this), s.r(e, n, s.b ? d : {}, i), !0;
  }, r.md = function() {
    this.rr();
  }, r.ss = function() {
  }, r.ud = function() {
    this.rr();
  }, r.rr = function() {
    var e = this, n = e.ref, a = e.fr;
    n && n(a ? a.current : e.b);
  }, t;
}();
function _s() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function El() {
  return Va;
}
function wl(t) {
  Va = t;
}
function ja(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, Va = 0, t;
}
var $a = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = {}), this.props = e, this.context = n, this.state = {}, this.$_timer = 0, this.$_state = {}, this.$_subs = [], this.$_cs = {};
  }
  var r = t.prototype;
  return r.render = function() {
    return null;
  }, r.shouldComponentUpdate = function(e, n) {
    return this.props !== e || this.state !== n;
  }, r.setState = function(e, n, a) {
    var i = this;
    i.$_timer || (i.$_state = {}), clearTimeout(i.$_timer), i.$_timer = 0, i.$_state = sr(sr({}, i.$_state), e), a ? i.$_setState(n, a) : i.$_timer = window.setTimeout(function() {
      i.$_timer = 0, i.$_setState(n, a);
    });
  }, r.forceUpdate = function(e) {
    this.setState({}, e, !0);
  }, r.componentDidMount = function() {
  }, r.componentDidUpdate = function(e, n) {
  }, r.componentWillUnmount = function() {
  }, r.$_setState = function(e, n) {
    var a = [], i = this.$_p, o = We(i.c, [i], [i.o], a, i._cs, sr(sr({}, this.state), this.$_state), n);
    o && (e && a.push(e), ws(a), ja(null));
  }, t;
}(), Cs = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var e = r.prototype;
  return e.shouldComponentUpdate = function(n, a) {
    return hn(this.props, n) || hn(this.state, a);
  }, r;
}($a);
function Ds(t) {
  var r = function(e) {
    r.current = e;
  };
  return r.current = t, r;
}
function _l(t) {
  return t._fr = !0, t;
}
function Cl(t, r, e, n) {
  var a, i;
  return !((a = t == null ? void 0 : t.prototype) === null || a === void 0) && a.render ? i = new t(r, e) : (i = new $a(r, e), i.constructor = t, t._fr ? (n.fr = Ds(), i.render = function() {
    return this.constructor(this.props, n.fr);
  }) : i.render = Sl), i.$_p = n, i;
}
var Dl = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r(n, a, i, o, s, u, f) {
    f === void 0 && (f = {});
    var l = t.call(this, n, a, i, o, s, u, Xn(f, n.defaultProps)) || this;
    return l.typ = "comp", l._usefs = [], l._uefs = [], l._defs = [], l;
  }
  var e = r.prototype;
  return e.s = function(n, a) {
    var i = this.b;
    return i.shouldComponentUpdate(Xn(n, this.t.defaultProps), a || i.state) !== !1;
  }, e.r = function(n, a, i) {
    var o, s, u = this, f = u.t;
    u.ps = Xn(u.ps, u.t.defaultProps);
    var l = u.ps, v = !u.b, c = f.contextType, d = u.b, p = c == null ? void 0 : c.get(u);
    u._cs = a, v ? (d = Cl(f, l, p, u), u.b = d) : (d.props = l, d.context = p);
    var h = d.state;
    u._usefs = [], u._uefs = [];
    var g = d.render();
    ((s = (o = g == null ? void 0 : g.props) === null || o === void 0 ? void 0 : o.children) === null || s === void 0 ? void 0 : s.length) === 0 && (g.props.children = u.ps.children);
    var m = sr(sr({}, a), d.$_cs);
    We(u, u._ps, g ? [g] : [], n, m), v ? u._uefs.push(function() {
      c == null || c.register(u), d.componentDidMount();
    }) : u._uefs.push(function() {
      d.componentDidUpdate(i, h);
    }), n.push(function() {
      u._usefs.forEach(function(b) {
        b();
      }), v ? u.md() : u.ud(), u._defs = u._uefs.map(function(b) {
        return b();
      });
    });
  }, e.ss = function(n) {
    var a = this.b;
    !a || !n || (a.state = n);
  }, e.un = function() {
    var n, a = this;
    a._ps.forEach(function(o) {
      o.un();
    });
    var i = a.t;
    (n = i.contextType) === null || n === void 0 || n.unregister(a), clearTimeout(a.b.$_timer), a._defs.forEach(function(o) {
      o && o();
    }), a.b.componentWillUnmount();
  }, r;
}(On);
function Ml(t, r, e) {
  var n = Ua(qi(t), qi(r)), a = n.added, i = n.removed, o = n.changed;
  for (var s in a)
    e.setAttribute(s, a[s]);
  for (var u in o)
    e.setAttribute(u, o[u][1]);
  for (var f in i)
    e.removeAttribute(f);
}
function Rl(t, r, e) {
  var n = Ua(t, r), a = n.added, i = n.removed;
  for (var o in i)
    e.e(o, !0);
  for (var s in a)
    e.e(s);
}
function Ua(t, r) {
  var e = gr(t), n = gr(r), a = Fe(e, n, function(u) {
    return u;
  }), i = {}, o = {}, s = {};
  return a.added.forEach(function(u) {
    var f = n[u];
    i[f] = r[f];
  }), a.removed.forEach(function(u) {
    var f = e[u];
    o[f] = t[f];
  }), a.maintained.forEach(function(u) {
    var f = u[0], l = e[f], v = [t[l], r[l]];
    t[l] !== r[l] && (s[l] = v);
  }), {
    added: i,
    removed: o,
    changed: s
  };
}
function Tl(t, r, e) {
  var n = e.style, a = Ua(t, r), i = a.added, o = a.removed, s = a.changed;
  for (var u in i) {
    var f = ln(u, "-");
    n.setProperty(f, i[u]);
  }
  for (var u in s) {
    var l = ln(u, "-");
    n.setProperty(l, s[u][1]);
  }
  for (var u in o) {
    var v = ln(u, "-");
    n.removeProperty(v);
  }
}
function Ol(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var zl = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var e = r.prototype;
  return e.e = function(n, a) {
    var i = this, o = i._es, s = i.b, u = Ol(n);
    a ? (zt(s, u, o[n]), delete o[n]) : (o[n] = function(f) {
      var l, v;
      (v = (l = i.ps)[n]) === null || v === void 0 || v.call(l, f);
    }, kt(s, u, o[n]));
  }, e.s = function(n) {
    return hn(this.ps, n);
  }, e.r = function(n, a, i) {
    var o, s = this, u = !s.b, f = s.ps;
    if (u) {
      var l = Tn(s.c), v = !1;
      s._svg || s.t === "svg" ? v = !0 : v = l && l.ownerSVGElement, s._svg = v;
      var c = (o = s._hyd) === null || o === void 0 ? void 0 : o.splice(0, 1)[0], d = s.t;
      if (c)
        s._hyd = [].slice.call(c.children || []);
      else {
        var p = se(l);
        v ? c = p.createElementNS("http://www.w3.org/2000/svg", d) : c = p.createElement(d);
      }
      s.b = c;
    }
    We(s, s._ps, f.children, n, a);
    var h = s.b, g = Vi(i), m = g[0], b = g[1], y = Vi(f), x = y[0], E = y[1];
    return Ml(m, x, h), Rl(b, E, s), Tl(i.style || {}, f.style || {}, h), n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, e.un = function() {
    var n = this, a = n._es, i = n.b;
    for (var o in a)
      zt(i, o, a[o]);
    n._ps.forEach(function(s) {
      s.un();
    }), n._es = {}, n._sel || Es(i);
  }, r;
}(On);
function ze(t) {
  if (!t || ue(t))
    return t;
  var r = t.$_p._ps;
  return r.length ? ze(r[0].b) : null;
}
function Ms(t) {
  if (t) {
    if (t.b && ue(t.b))
      return t;
    var r = t._ps;
    return r.length ? Ms(r[0]) : null;
  }
}
function er(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var a = r || {}, i = a.key, o = a.ref, s = xs(a, ["key", "ref"]);
  return {
    type: t,
    key: i,
    ref: o,
    props: sr(sr({}, s), {
      children: hs(e).filter(function(u) {
        return u != null && u !== !1;
      })
    })
  };
}
var Rs = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r(n, a) {
    a === void 0 && (a = 0);
    var i = t.call(this, "container", a, "container", 0, null) || this;
    return i.typ = "container", i.b = n, i;
  }
  var e = r.prototype;
  return e.r = function() {
    return !0;
  }, e.un = function() {
  }, r;
}(On), Pl = /* @__PURE__ */ function(t) {
  Ne(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var e = r.prototype;
  return e.r = function(n) {
    var a, i = this, o = !i.b;
    if (o) {
      var s = Tn(i.c), u = (a = i._hyd) === null || a === void 0 ? void 0 : a.splice(0, 1)[0];
      i.b = u || se(s).createTextNode(i.t.replace("text_", ""));
    }
    return n.push(function() {
      o ? i.md() : i.ud();
    }), !0;
  }, e.un = function() {
    Es(this.b);
  }, r;
}(On);
function Il(t, r, e) {
  var n = e.map(function(u) {
    return qt(u) ? null : u.key;
  }), a = Xi(r.map(function(u) {
    return u.k;
  })), i = Xi(n), o = Fe(a, i, function(u) {
    return u;
  });
  o.removed.forEach(function(u) {
    r.splice(u, 1)[0].un();
  }), o.ordered.forEach(function(u) {
    var f = u[0], l = u[1], v = r.splice(f, 1)[0];
    r.splice(l, 0, v);
    var c = ze(v.b), d = ze(r[l + 1] && r[l + 1].b);
    c && c.parentNode.insertBefore(c, d);
  }), o.added.forEach(function(u) {
    r.splice(u, 0, ji(e[u], n[u], u, t));
  });
  var s = o.maintained.filter(function(u) {
    u[0];
    var f = u[1], l = e[f], v = r[f], c = qt(l) ? "text_".concat(l) : l.type;
    return c !== v.t ? (v.un(), r.splice(f, 1, ji(l, n[f], f, t)), !0) : (v.i = f, !1);
  });
  return Yi(Yi([], o.added, !0), s.map(function(u) {
    u[0];
    var f = u[1];
    return f;
  }), !0);
}
function Bl(t, r) {
  for (var e = t._ps, n = e.length, a = r.i + 1; a < n; ++a) {
    var i = ze(e[a].b);
    if (i)
      return i;
  }
  return null;
}
function ji(t, r, e, n) {
  var a = n.d + 1;
  if (qt(t) || te(t))
    return new Pl("text_".concat(t), a, r, e, n, null, {});
  var i = t.type, o = typeof i == "string" ? zl : Dl;
  return new o(i, a, r, e, n, t.ref, t.props);
}
function We(t, r, e, n, a, i, o) {
  var s = Il(t, r, e), u = t._hyd, f = r.filter(function(v, c) {
    return v._hyd = u, v.u(n, a, e[c], i, o);
  });
  t.typ === "container" && t._sel && r.forEach(function(v) {
    var c = Ms(v);
    c && (c._sel = !0);
  }), t._hyd = null;
  var l = Tn(t);
  return l && s.reverse().forEach(function(v) {
    var c = r[v], d = ze(c.b);
    if (d && l !== d && !d.parentNode) {
      var p = Bl(t, c);
      l.insertBefore(d, p);
    }
  }), f.length > 0;
}
function kl(t, r, e, n) {
  e === void 0 && (e = r.__CROACT__), n === void 0 && (n = {});
  var a = !!e;
  e || (e = new Rs(r));
  var i = [];
  return We(e, e._ps, t ? [t] : [], i, n, void 0, void 0), ws(i), ja(null), a || (r.__CROACT__ = e), e;
}
function $i(t, r, e) {
  return !e && t && (e = new Rs(r.parentElement), e._hyd = [r], e._sel = !0), kl(t, r, e), e;
}
function Ts(t) {
  var r = _s(), e = r._hs || (r._hs = []), n = El(), a = e[n];
  if (wl(n + 1), a) {
    if (!hn(a.deps, t.deps))
      return a.updated = !1, a;
    e[n] = t;
  } else
    e.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function Gl(t, r) {
  var e = Ts({
    func: t,
    deps: r
  });
  return e.value;
}
function Al(t) {
  return Gl(function() {
    return Ds(t);
  }, []);
}
function Os(t, r, e) {
  var n = _s(), a = Ts({
    func: function() {
      return t;
    },
    deps: r
  }), i = e ? n._usefs : n._uefs;
  a.updated ? i.push(function() {
    return a.effect && a.effect(), a.effect = t(), a.effect;
  }) : i.push(function() {
    return a.effect;
  });
}
function Fl(t, r, e) {
  Os(function() {
    t == null || t(r());
  }, e, !0);
}
function Ka(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return !0;
  return !1;
}
function zs(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return t[n];
  return null;
}
function Ps(t) {
  var r = t;
  if (typeof r > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    r = navigator.userAgent || "";
  }
  return r.toLowerCase();
}
function Za(t, r) {
  try {
    return new RegExp(t, "g").exec(r);
  } catch {
    return null;
  }
}
function Nl() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, r = t.brands || t.uaList;
  return !!(r && r.length);
}
function Wl(t, r) {
  var e = Za("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", r);
  return e ? e[3] : "";
}
function ha(t) {
  return t.replace(/_/g, ".");
}
function he(t, r) {
  var e = null, n = "-1";
  return Ka(t, function(a) {
    var i = Za("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", r);
    return !i || a.brand ? !1 : (e = a, n = i[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = Wl(a.versionTest.toLowerCase(), r) || n), n = ha(n), !0);
  }), {
    preset: e,
    version: n
  };
}
function pe(t, r) {
  var e = {
    brand: "",
    version: "-1"
  };
  return Ka(t, function(n) {
    var a = Is(r, n);
    return a ? (e.brand = n.id, e.version = n.versionAlias || a.version, e.version !== "-1") : !1;
  }), e;
}
function Is(t, r) {
  return zs(t, function(e) {
    var n = e.brand;
    return Za("" + r.test, n.toLowerCase());
  });
}
var ga = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], Bs = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], ma = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], ks = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], Gs = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function As(t) {
  return !!he(ks, t).preset;
}
function Hl(t) {
  var r = Ps(t), e = !!/mobi/g.exec(r), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: As(r),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, i = he(ga, r), o = i.preset, s = i.version, u = he(Gs, r), f = u.preset, l = u.version, v = he(Bs, r);
  if (n.chromium = !!v.preset, n.chromiumVersion = v.version, !n.chromium) {
    var c = he(ma, r);
    n.webkit = !!c.preset, n.webkitVersion = c.version;
  }
  return f && (a.name = f.id, a.version = l, a.majorVersion = parseInt(l, 10)), o && (n.name = o.id, n.version = s, n.webview && a.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: a,
    isMobile: e,
    isHints: !1
  };
}
function Ll(t) {
  var r = navigator.userAgentData, e = (r.uaList || r.brands).slice(), n = t && t.fullVersionList, a = r.mobile || !1, i = e[0], o = (t && t.platform || r.platform || navigator.platform).toLowerCase(), s = {
    name: i.brand,
    version: i.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!pe(ks, e).brand || As(Ps())
  }, u = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  s.webkit = !s.chromium && Ka(ma, function(p) {
    return Is(e, p);
  });
  var f = pe(Bs, e);
  if (s.chromium = !!f.brand, s.chromiumVersion = f.version, !s.chromium) {
    var l = pe(ma, e);
    s.webkit = !!l.brand, s.webkitVersion = l.version;
  }
  var v = zs(Gs, function(p) {
    return new RegExp("" + p.test, "g").exec(o);
  });
  if (u.name = v ? v.id : "", t && (u.version = t.platformVersion), n && n.length) {
    var c = pe(ga, n);
    s.name = c.brand || s.name, s.version = c.version || s.version;
  } else {
    var d = pe(ga, e);
    s.name = d.brand || s.name, s.version = d.brand && t ? t.uaFullVersion : d.version;
  }
  return s.webkit && (u.name = a ? "ios" : "mac"), u.name === "ios" && s.webview && (s.version = "-1"), u.version = ha(u.version), s.version = ha(s.version), u.majorVersion = parseInt(u.version, 10), s.majorVersion = parseInt(s.version, 10), {
    browser: s,
    os: u,
    isMobile: a,
    isHints: !0
  };
}
function Yl(t) {
  return typeof t > "u" && Nl() ? Ll() : Hl(t);
}
function Xl(t, r, e, n, a, i) {
  for (var o = 0; o < a; ++o) {
    var s = e + o * a, u = n + o * a;
    t[s] += t[u] * i, r[s] += r[u] * i;
  }
}
function ql(t, r, e, n, a) {
  for (var i = 0; i < a; ++i) {
    var o = e + i * a, s = n + i * a, u = t[o], f = r[o];
    t[o] = t[s], t[s] = u, r[o] = r[s], r[s] = f;
  }
}
function Vl(t, r, e, n, a) {
  for (var i = 0; i < n; ++i) {
    var o = e + i * n;
    t[o] /= a, r[o] /= a;
  }
}
function Fs(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var n = t.slice(), a = 0; a < e; ++a)
    n[a * e + r - 1] = 0, n[(r - 1) * e + a] = 0;
  return n[(r - 1) * (e + 1)] = 1, n;
}
function fr(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = t.slice(), n = _t(r), a = 0; a < r; ++a) {
    var i = r * a + a;
    if (!ot(e[i], Tt)) {
      for (var o = a + 1; o < r; ++o)
        if (e[r * a + o]) {
          ql(e, n, a, o, r);
          break;
        }
    }
    if (!ot(e[i], Tt))
      return [];
    Vl(e, n, a, r, e[i]);
    for (var o = 0; o < r; ++o) {
      var s = o, u = o + a * r, f = e[u];
      !ot(f, Tt) || a === o || Xl(e, n, s, a, r, -f);
    }
  }
  return n;
}
function jl(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = 0; n < r; ++n)
    for (var a = 0; a < r; ++a)
      e[a * r + n] = t[r * n + a];
  return e;
}
function Ns(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = t[r * r - 1], a = 0; a < r - 1; ++a)
    e[a] = t[r * (r - 1) + a] / n;
  return e[r - 1] = 0, e;
}
function $l(t, r) {
  for (var e = _t(r), n = 0; n < r - 1; ++n)
    e[r * (r - 1) + n] = t[n] || 0;
  return e;
}
function Gr(t, r) {
  for (var e = t.slice(), n = t.length; n < r - 1; ++n)
    e[n] = 0;
  return e[r - 1] = 1, e;
}
function ir(t, r, e) {
  if (r === void 0 && (r = Math.sqrt(t.length)), r === e)
    return t;
  for (var n = _t(e), a = Math.min(r, e), i = 0; i < a - 1; ++i) {
    for (var o = 0; o < a - 1; ++o)
      n[i * e + o] = t[i * r + o];
    n[(i + 1) * e - 1] = t[(i + 1) * r - 1], n[(e - 1) * e + i] = t[(r - 1) * r + i];
  }
  return n[e * e - 1] = t[r * r - 1], n;
}
function gn(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  var n = _t(t);
  return r.forEach(function(a) {
    n = xt(n, a, t);
  }), n;
}
function xt(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  var n = [], a = t.length / e, i = r.length / a;
  if (a) {
    if (!i)
      return t;
  } else
    return r;
  for (var o = 0; o < e; ++o)
    for (var s = 0; s < i; ++s) {
      n[s * e + o] = 0;
      for (var u = 0; u < a; ++u)
        n[s * e + o] += t[u * e + o] * r[s * a + u];
    }
  return n;
}
function ht(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), a = 0; a < e; ++a)
    n[a] = n[a] + r[a];
  return n;
}
function rt(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), a = 0; a < e; ++a)
    n[a] = n[a] - r[a];
  return n;
}
function Ul(t, r) {
  return r === void 0 && (r = t.length === 6), r ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function Ws(t, r) {
  return r === void 0 && (r = t.length === 9), r ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Gt(t, r, e) {
  e === void 0 && (e = r.length);
  var n = xt(t, r, e), a = n[e - 1];
  return n.map(function(i) {
    return i / a;
  });
}
function Kl(t, r) {
  return xt(t, [1, 0, 0, 0, 0, Math.cos(r), Math.sin(r), 0, 0, -Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function Zl(t, r) {
  return xt(t, [Math.cos(r), 0, -Math.sin(r), 0, 0, 1, 0, 0, Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function Jl(t, r) {
  return xt(t, Le(r, 4));
}
function $e(t, r) {
  var e = r[0], n = e === void 0 ? 1 : e, a = r[1], i = a === void 0 ? 1 : a, o = r[2], s = o === void 0 ? 1 : o;
  return xt(t, [n, 0, 0, 0, 0, i, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], 4);
}
function He(t, r) {
  return Gt(Le(r, 3), Gr(t, 3));
}
function qn(t, r) {
  var e = r[0], n = e === void 0 ? 0 : e, a = r[1], i = a === void 0 ? 0 : a, o = r[2], s = o === void 0 ? 0 : o;
  return xt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, i, s, 1], 4);
}
function Ui(t, r) {
  return xt(t, r, 4);
}
function Le(t, r) {
  var e = Math.cos(t), n = Math.sin(t), a = _t(r);
  return a[0] = e, a[1] = n, a[r] = -n, a[r + 1] = e, a;
}
function _t(t) {
  for (var r = t * t, e = [], n = 0; n < r; ++n)
    e[n] = n % (t + 1) ? 0 : 1;
  return e;
}
function Ja(t, r) {
  for (var e = _t(r), n = Math.min(t.length, r - 1), a = 0; a < n; ++a)
    e[(r + 1) * a] = t[a];
  return e;
}
function Ar(t, r) {
  for (var e = _t(r), n = Math.min(t.length, r - 1), a = 0; a < n; ++a)
    e[r * (r - 1) + a] = t[a];
  return e;
}
function Qa(t, r, e, n, a, i, o, s) {
  var u = t[0], f = t[1], l = r[0], v = r[1], c = e[0], d = e[1], p = n[0], h = n[1], g = a[0], m = a[1], b = i[0], y = i[1], x = o[0], E = o[1], S = s[0], C = s[1], w = [u, 0, l, 0, c, 0, p, 0, f, 0, v, 0, d, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, u, 0, l, 0, c, 0, p, 0, f, 0, v, 0, d, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, -g * u, -m * u, -b * l, -y * l, -x * c, -E * c, -S * p, -C * p, -g * f, -m * f, -b * v, -y * v, -x * d, -E * d, -S * h, -C * h], D = fr(w, 8);
  if (!D.length)
    return [];
  var _ = xt(D, [g, m, b, y, x, E, S, C], 8);
  return _[8] = 1, ir(jl(_), 3, 4);
}
var Se = function() {
  return Se = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, Se.apply(this, arguments);
};
function Ql() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function Pe(t, r) {
  return r === void 0 && (r = 0), Vr(re(t, r));
}
function tc(t, r) {
  var e = Gt(t, [r[0], r[1] || 0, r[2] || 0, 1], 4), n = e[3] || 1;
  return [
    e[0] / n,
    e[1] / n,
    e[2] / n
  ];
}
function Vr(t) {
  var r = Ql();
  return t.forEach(function(e) {
    var n = e.matrixFunction, a = e.functionValue;
    n && (r = n(r, a));
  }), r;
}
function re(t, r) {
  r === void 0 && (r = 0);
  var e = Ot(t) ? t : Er(t);
  return e.map(function(n) {
    var a = vs(n), i = a.prefix, o = a.value, s = null, u = i, f = "";
    if (i === "translate" || i === "translateX" || i === "translate3d") {
      var l = ar(r) ? Se(Se({}, r), { "o%": r["%"] }) : {
        "%": r,
        "o%": r
      }, v = Ir(o).map(function(R, P) {
        return P === 0 && "x%" in l ? l["%"] = r["x%"] : P === 1 && "y%" in l ? l["%"] = r["y%"] : l["%"] = r["o%"], yt(R, l);
      }), c = v[0], d = v[1], p = d === void 0 ? 0 : d, h = v[2], g = h === void 0 ? 0 : h;
      s = qn, f = [c, p, g];
    } else if (i === "translateY") {
      var m = ar(r) ? Se({ "%": r["y%"] }, r) : {
        "%": r
      }, p = yt(o, m);
      s = qn, f = [0, p, 0];
    } else if (i === "translateZ") {
      var g = parseFloat(o);
      s = qn, f = [0, 0, g];
    } else if (i === "scale" || i === "scale3d") {
      var b = Ir(o).map(function(R) {
        return parseFloat(R);
      }), y = b[0], x = b[1], E = x === void 0 ? y : x, S = b[2], C = S === void 0 ? 1 : S;
      s = $e, f = [y, E, C];
    } else if (i === "scaleX") {
      var y = parseFloat(o);
      s = $e, f = [y, 1, 1];
    } else if (i === "scaleY") {
      var E = parseFloat(o);
      s = $e, f = [1, E, 1];
    } else if (i === "scaleZ") {
      var C = parseFloat(o);
      s = $e, f = [1, 1, C];
    } else if (i === "rotate" || i === "rotateZ" || i === "rotateX" || i === "rotateY") {
      var w = Ae(o), D = w.unit, _ = w.value, z = D === "rad" ? _ : _ * Math.PI / 180;
      i === "rotate" || i === "rotateZ" ? (u = "rotateZ", s = Jl) : i === "rotateX" ? s = Kl : i === "rotateY" && (s = Zl), f = z;
    } else if (i === "matrix3d")
      s = Ui, f = Ir(o).map(function(R) {
        return parseFloat(R);
      });
    else if (i === "matrix") {
      var O = Ir(o).map(function(R) {
        return parseFloat(R);
      });
      s = Ui, f = [
        O[0],
        O[1],
        0,
        0,
        O[2],
        O[3],
        0,
        0,
        0,
        0,
        1,
        0,
        O[4],
        O[5],
        0,
        1
      ];
    } else
      u = "";
    return {
      name: i,
      functionName: u,
      value: o,
      matrixFunction: s,
      functionValue: f
    };
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ba = function(t, r) {
  return ba = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (e[a] = n[a]);
  }, ba(t, r);
};
function rc(t, r) {
  ba(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Hs = typeof Map == "function" ? void 0 : function() {
  var t = 0;
  return function(r) {
    return r.__DIFF_KEY__ || (r.__DIFF_KEY__ = ++t);
  };
}(), ec = /* @__PURE__ */ function(t) {
  rc(r, t);
  function r(e) {
    return e === void 0 && (e = []), t.call(this, e, Hs) || this;
  }
  return r;
}(xl);
function nc(t, r) {
  return Fe(t, r, Hs);
}
const Ls = ec;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ya = function() {
  return ya = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, ya.apply(this, arguments);
};
function ac() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), a = 0, r = 0; r < e; r++)
    for (var i = arguments[r], o = 0, s = i.length; o < s; o++, a++)
      n[a] = i[o];
  return n;
}
var ic = /* @__PURE__ */ function() {
  function t() {
    this._events = {};
  }
  var r = t.prototype;
  return r.on = function(e, n) {
    if (ar(e))
      for (var a in e)
        this.on(a, e[a]);
    else
      this._addEvent(e, n, {});
    return this;
  }, r.off = function(e, n) {
    if (!e)
      this._events = {};
    else if (ar(e))
      for (var a in e)
        this.off(a);
    else if (!n)
      this._events[e] = [];
    else {
      var i = this._events[e];
      if (i) {
        var o = hr(i, function(s) {
          return s.listener === n;
        });
        o > -1 && i.splice(o, 1);
      }
    }
    return this;
  }, r.once = function(e, n) {
    var a = this;
    return n && this._addEvent(e, n, {
      once: !0
    }), new Promise(function(i) {
      a._addEvent(e, i, {
        once: !0
      });
    });
  }, r.emit = function(e, n) {
    var a = this;
    n === void 0 && (n = {});
    var i = this._events[e];
    if (!e || !i)
      return !0;
    var o = !1;
    return n.eventType = e, n.stop = function() {
      o = !0;
    }, n.currentTarget = this, ac(i).forEach(function(s) {
      s.listener(n), s.once && a.off(e, s.listener);
    }), !o;
  }, r.trigger = function(e, n) {
    return n === void 0 && (n = {}), this.emit(e, n);
  }, r._addEvent = function(e, n, a) {
    var i = this._events;
    i[e] = i[e] || [];
    var o = i[e];
    o.push(ya({
      listener: n
    }, a));
  }, t;
}();
const zn = ic;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var xa = function(t, r) {
  return xa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (e[a] = n[a]);
  }, xa(t, r);
};
function oc(t, r) {
  xa(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var jr = function() {
  return jr = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, jr.apply(this, arguments);
};
function sc(t) {
  var r = t.container;
  return r === document.body ? [r.scrollLeft || document.documentElement.scrollLeft, r.scrollTop || document.documentElement.scrollTop] : [r.scrollLeft, r.scrollTop];
}
function Ki(t, r) {
  return t.addEventListener("scroll", r), function() {
    t.removeEventListener("scroll", r);
  };
}
function Ue(t) {
  if (t) {
    if (qt(t))
      return document.querySelector(t);
  } else
    return null;
  if (La(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var uc = /* @__PURE__ */ function(t) {
  oc(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n._startRect = null, n._startPos = [], n._prevTime = 0, n._timer = 0, n._prevScrollPos = [0, 0], n._isWait = !1, n._flag = !1, n._currentOptions = null, n._lock = !1, n._unregister = null, n._onScroll = function() {
      var a = n._currentOptions;
      n._lock || !a || n.emit("scrollDrag", {
        next: function(i) {
          n.checkScroll({
            container: a.container,
            inputEvent: i
          });
        }
      });
    }, n;
  }
  var e = r.prototype;
  return e.dragStart = function(n, a) {
    var i = Ue(a.container);
    if (!i) {
      this._flag = !1;
      return;
    }
    var o = 0, s = 0, u = 0, f = 0;
    if (i === document.body)
      u = window.innerWidth, f = window.innerHeight;
    else {
      var l = i.getBoundingClientRect();
      o = l.top, s = l.left, u = l.width, f = l.height;
    }
    this._flag = !0, this._startPos = [n.clientX, n.clientY], this._startRect = {
      top: o,
      left: s,
      width: u,
      height: f
    }, this._prevScrollPos = this._getScrollPosition([0, 0], a), this._currentOptions = a, this._registerScrollEvent(a);
  }, e.drag = function(n, a) {
    if (clearTimeout(this._timer), !!this._flag) {
      var i = n.clientX, o = n.clientY, s = a.threshold, u = s === void 0 ? 0 : s, f = this, l = f._startRect, v = f._startPos;
      this._currentOptions = a;
      var c = [0, 0];
      return l.top > o - u ? (v[1] > l.top || o < v[1]) && (c[1] = -1) : l.top + l.height < o + u && (v[1] < l.top + l.height || o > v[1]) && (c[1] = 1), l.left > i - u ? (v[0] > l.left || i < v[0]) && (c[0] = -1) : l.left + l.width < i + u && (v[0] < l.left + l.width || i > v[0]) && (c[0] = 1), !c[0] && !c[1] ? !1 : this._continueDrag(jr(jr({}, a), {
        direction: c,
        inputEvent: n,
        isDrag: !0
      }));
    }
  }, e.checkScroll = function(n) {
    var a = this;
    if (this._isWait)
      return !1;
    var i = n.prevScrollPos, o = i === void 0 ? this._prevScrollPos : i, s = n.direction, u = n.throttleTime, f = u === void 0 ? 0 : u, l = n.inputEvent, v = n.isDrag, c = this._getScrollPosition(s || [0, 0], n), d = c[0] - o[0], p = c[1] - o[1], h = s || [d ? Math.abs(d) / d : 0, p ? Math.abs(p) / p : 0];
    return this._prevScrollPos = c, this._lock = !1, !d && !p ? !1 : (this.emit("move", {
      offsetX: h[0] ? d : 0,
      offsetY: h[1] ? p : 0,
      inputEvent: l
    }), f && v && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      a._continueDrag(n);
    }, f)), !0);
  }, e.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, e._getScrollPosition = function(n, a) {
    var i = a.container, o = a.getScrollPosition, s = o === void 0 ? sc : o;
    return s({
      container: Ue(i),
      direction: n
    });
  }, e._continueDrag = function(n) {
    var a = this, i, o = n.container, s = n.direction, u = n.throttleTime, f = n.useScroll, l = n.isDrag, v = n.inputEvent;
    if (!(!this._flag || l && this._isWait)) {
      var c = Oe(), d = Math.max(u + this._prevTime - c, 0);
      if (d > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          a._continueDrag(n);
        }, d), !1;
      this._prevTime = c;
      var p = this._getScrollPosition(s, n);
      this._prevScrollPos = p, l && (this._isWait = !0), f || (this._lock = !0);
      var h = {
        container: Ue(o),
        direction: s,
        inputEvent: v
      };
      return (i = n.requestScroll) === null || i === void 0 || i.call(n, h), this.emit("scroll", h), this._isWait = !1, f || this.checkScroll(jr(jr({}, n), {
        prevScrollPos: p,
        direction: s,
        inputEvent: v
      }));
    }
  }, e._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var a = n.checkScrollEvent;
    if (a) {
      var i = a === !0 ? Ki : a, o = Ue(n.container);
      a === !0 && (o === document.body || o === document.documentElement) ? this._unregister = Ki(window, this._onScroll) : this._unregister = i(o, this._onScroll);
    }
  }, e._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, r;
}(zn);
const fc = uc;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lc() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), a = 0, r = 0; r < e; r++)
    for (var i = arguments[r], o = 0, s = i.length; o < s; o++, a++)
      n[a] = i[o];
  return n;
}
function Xt(t) {
  return ot(t, Tt);
}
function cc(t, r) {
  return t.every(function(e, n) {
    return Xt(e - r[n]) === 0;
  });
}
function vc(t, r) {
  return !Xt(t[0] - r[0]) && !Xt(t[1] - r[1]);
}
function Ys(t) {
  return t.length < 3 ? 0 : Math.abs(cl(t.map(function(r, e) {
    var n = t[e + 1] || t[0];
    return r[0] * n[1] - n[0] * r[1];
  }))) / 2;
}
function Zi(t, r) {
  var e = r.width, n = r.height, a = r.left, i = r.top, o = Fr(t), s = o.minX, u = o.minY, f = o.maxX, l = o.maxY, v = e / (f - s), c = n / (l - u);
  return t.map(function(d) {
    return [a + (d[0] - s) * v, i + (d[1] - u) * c];
  });
}
function Fr(t) {
  var r = t.map(function(n) {
    return n[0];
  }), e = t.map(function(n) {
    return n[1];
  });
  return {
    minX: Math.min.apply(Math, r),
    minY: Math.min.apply(Math, e),
    maxX: Math.max.apply(Math, r),
    maxY: Math.max.apply(Math, e)
  };
}
function Sa(t, r, e) {
  var n = t[0], a = t[1], i = Fr(r), o = i.minX, s = i.maxX, u = [[o, a], [s, a]], f = mn(u[0], u[1]), l = Ea(r), v = [];
  if (l.forEach(function(p) {
    var h = mn(p[0], p[1]), g = p[0];
    if (cc(f, h))
      v.push({
        pos: t,
        line: p,
        type: "line"
      });
    else {
      var m = Xs(ti(f, h), [u, p]);
      m.forEach(function(b) {
        p.some(function(y) {
          return vc(y, b);
        }) ? v.push({
          pos: b,
          line: p,
          type: "point"
        }) : Xt(g[1] - a) !== 0 && v.push({
          pos: b,
          line: p,
          type: "intersection"
        });
      });
    }
  }), !e && Vt(v, function(p) {
    return p[0] === n;
  }))
    return !0;
  var c = 0, d = {};
  return v.forEach(function(p) {
    var h = p.pos, g = p.type, m = p.line;
    if (!(h[0] > n))
      if (g === "intersection")
        ++c;
      else {
        if (g === "line")
          return;
        if (g === "point") {
          var b = Vt(m, function(E) {
            return E[1] !== a;
          }), y = d[h[0]], x = b[1] > a ? 1 : -1;
          y ? y !== x && ++c : d[h[0]] = x;
        }
      }
  }), c % 2 === 1;
}
function mn(t, r) {
  var e = t[0], n = t[1], a = r[0], i = r[1], o = a - e, s = i - n;
  Math.abs(o) < Tt && (o = 0), Math.abs(s) < Tt && (s = 0);
  var u = 0, f = 0, l = 0;
  return o ? s ? (u = -s / o, f = 1, l = -u * e - n) : (f = 1, l = -n) : s && (u = -1, l = e), [u, f, l];
}
function ti(t, r) {
  var e = t[0], n = t[1], a = t[2], i = r[0], o = r[1], s = r[2], u = e === 0 && i === 0, f = n === 0 && o === 0, l = [];
  if (u && f)
    return [];
  if (u) {
    var v = -a / n, c = -s / o;
    return v !== c ? [] : [[-1 / 0, v], [1 / 0, v]];
  } else if (f) {
    var d = -a / e, p = -s / i;
    return d !== p ? [] : [[d, -1 / 0], [d, 1 / 0]];
  } else if (e === 0) {
    var h = -a / n, g = -(o * h + s) / i;
    l = [[g, h]];
  } else if (i === 0) {
    var h = -s / o, g = -(n * h + a) / e;
    l = [[g, h]];
  } else if (n === 0) {
    var g = -a / e, h = -(i * g + s) / o;
    l = [[g, h]];
  } else if (o === 0) {
    var g = -s / i, h = -(e * g + a) / n;
    l = [[g, h]];
  } else {
    var g = (n * s - o * a) / (o * e - n * i), h = -(e * g + a) / n;
    l = [[g, h]];
  }
  return l.map(function(m) {
    return [m[0], m[1]];
  });
}
function Xs(t, r) {
  var e = r.map(function(v) {
    return [0, 1].map(function(c) {
      return [Math.min(v[0][c], v[1][c]), Math.max(v[0][c], v[1][c])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], i = a[0], o = a[1];
    if (Xt(i - t[1][0])) {
      if (!Xt(o - t[1][1])) {
        var f = Math.max.apply(Math, e.map(function(v) {
          return v[0][0];
        })), l = Math.min.apply(Math, e.map(function(v) {
          return v[0][1];
        }));
        if (Xt(f - l) > 0)
          return [];
        n = [[f, o], [l, o]];
      }
    } else {
      var s = Math.max.apply(Math, e.map(function(v) {
        return v[1][0];
      })), u = Math.min.apply(Math, e.map(function(v) {
        return v[1][1];
      }));
      if (Xt(s - u) > 0)
        return [];
      n = [[i, s], [i, u]];
    }
  }
  return n.length || (n = t.filter(function(v) {
    var c = v[0], d = v[1];
    return e.every(function(p) {
      return 0 <= Xt(c - p[0][0]) && 0 <= Xt(p[0][1] - c) && 0 <= Xt(d - p[1][0]) && 0 <= Xt(p[1][1] - d);
    });
  })), n.map(function(v) {
    return [Xt(v[0]), Xt(v[1])];
  });
}
function Ea(t) {
  return lc(t.slice(1), [t[0]]).map(function(r, e) {
    return [t[e], r];
  });
}
function dc(t, r) {
  var e = t.slice(), n = r.slice();
  Hi(e) === -1 && e.reverse(), Hi(n) === -1 && n.reverse();
  var a = Ea(e), i = Ea(n), o = a.map(function(l) {
    return mn(l[0], l[1]);
  }), s = i.map(function(l) {
    return mn(l[0], l[1]);
  }), u = [];
  o.forEach(function(l, v) {
    var c = a[v], d = [];
    s.forEach(function(p, h) {
      var g = ti(l, p), m = Xs(g, [c, i[h]]);
      d.push.apply(d, m.map(function(b) {
        return {
          index1: v,
          index2: h,
          pos: b,
          type: "intersection"
        };
      }));
    }), d.sort(function(p, h) {
      return dr(c[0], p.pos) - dr(c[0], h.pos);
    }), u.push.apply(u, d), Sa(c[1], n) && u.push({
      index1: v,
      index2: -1,
      pos: c[1],
      type: "inside"
    });
  }), i.forEach(function(l, v) {
    if (Sa(l[1], e)) {
      var c = !1, d = hr(u, function(p) {
        var h = p.index2;
        return h === v ? (c = !0, !1) : !!c;
      });
      d === -1 && (c = !1, d = hr(u, function(p) {
        var h = p.index1, g = p.index2;
        return h === -1 && g + 1 === v ? (c = !0, !1) : !!c;
      })), d === -1 ? u.push({
        index1: -1,
        index2: v,
        pos: l[1],
        type: "inside"
      }) : u.splice(d, 0, {
        index1: -1,
        index2: v,
        pos: l[1],
        type: "inside"
      });
    }
  });
  var f = {};
  return u.filter(function(l) {
    var v = l.pos, c = v[0] + "x" + v[1];
    return f[c] ? !1 : (f[c] = !0, !0);
  });
}
function pc(t, r) {
  var e = dc(t, r);
  return e.map(function(n) {
    var a = n.pos;
    return a;
  });
}
function hc(t, r) {
  var e = pc(t, r);
  return Ys(e);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var wa = function(t, r) {
  return wa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (e[a] = n[a]);
  }, wa(t, r);
};
function gc(t, r) {
  wa(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Rt = function() {
  return Rt = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, Rt.apply(this, arguments);
};
function mc(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], a = Math.atan2(n, e);
  return a >= 0 ? a : a + Math.PI * 2;
}
function Vn(t) {
  return mc([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function bc(t) {
  return t.touches && t.touches.length >= 2;
}
function Ke(t) {
  return t ? t.touches ? xc(t.touches) : [qs(t)] : [];
}
function yc(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function Ji(t, r, e) {
  var n = e.length, a = Ee(t, n), i = a.clientX, o = a.clientY, s = a.originalClientX, u = a.originalClientY, f = Ee(r, n), l = f.clientX, v = f.clientY, c = Ee(e, n), d = c.clientX, p = c.clientY, h = i - l, g = o - v, m = i - d, b = o - p;
  return {
    clientX: s,
    clientY: u,
    deltaX: h,
    deltaY: g,
    distX: m,
    distY: b
  };
}
function jn(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function xc(t) {
  for (var r = Math.min(t.length, 2), e = [], n = 0; n < r; ++n)
    e.push(qs(t[n]));
  return e;
}
function qs(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function Ee(t, r) {
  r === void 0 && (r = t.length);
  for (var e = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, n = Math.min(t.length, r), a = 0; a < n; ++a) {
    var i = t[a];
    e.originalClientX += "originalClientX" in i ? i.originalClientX : i.clientX, e.originalClientY += "originalClientY" in i ? i.originalClientY : i.clientY, e.clientX += i.clientX, e.clientY += i.clientY;
  }
  return r ? {
    clientX: e.clientX / r,
    clientY: e.clientY / r,
    originalClientX: e.originalClientX / r,
    originalClientY: e.originalClientY / r
  } : e;
}
var $n = /* @__PURE__ */ function() {
  function t(r) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = r, this.prevClients = r, this.length = r.length;
  }
  return t.prototype.getAngle = function(r) {
    return r === void 0 && (r = this.prevClients), Vn(r);
  }, t.prototype.getRotation = function(r) {
    return r === void 0 && (r = this.prevClients), Vn(r) - Vn(this.startClients);
  }, t.prototype.getPosition = function(r, e) {
    r === void 0 && (r = this.prevClients);
    var n = Ji(r || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, i = n.deltaY;
    return this.movement += Math.sqrt(a * a + i * i), this.prevClients = r, n;
  }, t.prototype.getPositions = function(r) {
    r === void 0 && (r = this.prevClients);
    for (var e = this.prevClients, n = this.startClients, a = Math.min(this.length, e.length), i = [], o = 0; o < a; ++o)
      i[o] = Ji([r[o]], [e[o]], [n[o]]);
    return i;
  }, t.prototype.getMovement = function(r) {
    var e = this.movement;
    if (!r)
      return e;
    var n = Ee(r, this.length), a = Ee(this.prevClients, this.length), i = n.clientX - a.clientX, o = n.clientY - a.clientY;
    return Math.sqrt(i * i + o * o) + e;
  }, t.prototype.getDistance = function(r) {
    return r === void 0 && (r = this.prevClients), jn(r);
  }, t.prototype.getScale = function(r) {
    return r === void 0 && (r = this.prevClients), jn(r) / jn(this.startClients);
  }, t.prototype.move = function(r, e) {
    this.startClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    });
  }, t;
}(), Qi = ["textarea", "input"], Sc = /* @__PURE__ */ function(t) {
  gc(r, t);
  function r(e, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(c, d) {
      if (d === void 0 && (d = !0), !(!a.flag && c.cancelable === !1)) {
        var p = c.type.indexOf("drag") >= -1;
        if (!(a.flag && p)) {
          a._isDragAPI = !0;
          var h = a.options, g = h.container, m = h.pinchOutside, b = h.preventWheelClick, y = h.preventRightClick, x = h.preventDefault, E = h.checkInput, S = h.dragFocusedInput, C = h.preventClickEventOnDragStart, w = h.preventClickEventOnDrag, D = h.preventClickEventByCondition, _ = a._useTouch, z = !a.flag;
          if (a._isSecondaryButton = c.which === 3 || c.button === 2, b && (c.which === 2 || c.button === 1) || y && (c.which === 3 || c.button === 2))
            return a.stop(), !1;
          if (z) {
            var O = a._window.document.activeElement, R = c.target;
            if (R) {
              var P = R.tagName.toLowerCase(), I = Qi.indexOf(P) > -1, B = R.isContentEditable;
              if (I || B) {
                if (E || !S && O === R)
                  return !1;
                if (O && (O === R || B && O.isContentEditable && O.contains(R)))
                  if (S)
                    R.blur();
                  else
                    return !1;
              } else if ((x || c.type === "touchstart") && O) {
                var W = O.tagName.toLowerCase();
                (O.isContentEditable || Qi.indexOf(W) > -1) && O.blur();
              }
              (C || w || D) && kt(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new $n(Ke(c))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = d, a._dragFlag = !0, a._prevInputEvent = c, a.data = {}, a.doubleFlag = Oe() - a.prevTime < 200, a._isMouseEvent = yc(c), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
            var G = a._preventMouseEvent || a.emit("dragStart", Rt(Rt({ data: a.data, datas: a.data, inputEvent: c, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, isTrusted: d, isDouble: a.doubleFlag }, a.getCurrentStore().getPosition()), { preventDefault: function() {
              c.preventDefault();
            }, preventDrag: function() {
              a._dragFlag = !1;
            } }));
            G === !1 && a.stop(), a._isMouseEvent && a.flag && x && c.preventDefault();
          }
          if (!a.flag)
            return !1;
          var H = 0;
          if (z ? (a._attchDragEvent(), _ && m && (H = setTimeout(function() {
            kt(g, "touchstart", a.onDragStart, {
              passive: !1
            });
          }))) : _ && m && zt(g, "touchstart", a.onDragStart), a.flag && bc(c)) {
            if (clearTimeout(H), z && c.touches.length !== c.changedTouches.length)
              return;
            a.pinchFlag || a.onPinchStart(c);
          }
        }
      }
    }, a.onDrag = function(c, d) {
      if (a.flag) {
        var p = a.options.preventDefault;
        !a._isMouseEvent && p && c.preventDefault(), a._prevInputEvent = c;
        var h = Ke(c), g = a.moveClients(h, c, !1);
        if (a._dragFlag) {
          if (a.pinchFlag || g.deltaX || g.deltaY) {
            var m = a._preventMouseEvent || a.emit("drag", Rt(Rt({}, g), { isScroll: !!d, inputEvent: c }));
            if (m === !1) {
              a.stop();
              return;
            }
          }
          a.pinchFlag && a.onPinch(c, h);
        }
        a.getCurrentStore().getPosition(h, !0);
      }
    }, a.onDragEnd = function(c) {
      if (a.flag) {
        var d = a.options, p = d.pinchOutside, h = d.container, g = d.preventClickEventOnDrag, m = d.preventClickEventOnDragStart, b = d.preventClickEventByCondition, y = a.isDrag;
        (g || m || b) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !b && !m && g && !y && a._allowClickEvent(), a._useTouch && p && zt(h, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(c);
        var x = c != null && c.touches ? Ke(c) : [], E = x.length;
        E === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new $n(x));
        var S = a._getPosition(), C = Oe(), w = !y && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = y || w ? 0 : C, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", Rt({ data: a.data, datas: a.data, isDouble: w, isDrag: y, isClick: !y, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: c, isTrusted: a._isTrusted }, S)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
          a._preventMouseEvent = !1;
        }, 200)), a._isIdle = !0);
      }
    }, a.onBlur = function() {
      a.onDragEnd();
    }, a._allowClickEvent = function() {
      zt(a._window, "click", a._onClick, !0);
    }, a._onClick = function(c) {
      a._allowClickEvent(), a._allowMouseEvent();
      var d = a.options.preventClickEventByCondition;
      d != null && d(c) || (c.stopPropagation(), c.preventDefault());
    }, a._onContextMenu = function(c) {
      var d = a.options;
      d.preventRightClick ? a.onDragEnd(c) : c.preventDefault();
    }, a._passCallback = function() {
    };
    var i = [].concat(e), o = i[0];
    a._window = ys(o) ? o : Sr(o), a.options = Rt({ checkInput: !1, container: o && !("document" in o) ? Sr(o) : o, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var s = a.options, u = s.container, f = s.events, l = s.checkWindowBlur;
    if (a._useDrag = f.indexOf("drag") > -1, a._useTouch = f.indexOf("touch") > -1, a._useMouse = f.indexOf("mouse") > -1, a.targets = i, a._useDrag && i.forEach(function(c) {
      kt(c, "dragstart", a.onDragStart);
    }), a._useMouse && (i.forEach(function(c) {
      kt(c, "mousedown", a.onDragStart), kt(c, "mousemove", a._passCallback);
    }), kt(u, "contextmenu", a._onContextMenu)), l && kt(Sr(), "blur", a.onBlur), a._useTouch) {
      var v = {
        passive: !1
      };
      i.forEach(function(c) {
        kt(c, "touchstart", a.onDragStart, v), kt(c, "touchmove", a._passCallback, v);
      });
    }
    return a;
  }
  return r.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, r.prototype.getMovement = function(e) {
    return this.getCurrentStore().getMovement(e) + this.clientStores.slice(1).reduce(function(n, a) {
      return n + a.movement;
    }, 0);
  }, r.prototype.isDragging = function() {
    return this.isDrag;
  }, r.prototype.isIdle = function() {
    return this._isIdle;
  }, r.prototype.isFlag = function() {
    return this.flag;
  }, r.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, r.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, r.prototype.isPinching = function() {
    return this.isPinch;
  }, r.prototype.scrollBy = function(e, n, a, i) {
    i === void 0 && (i = !0), this.flag && (this.clientStores[0].move(e, n), i && this.onDrag(a, !0));
  }, r.prototype.move = function(e, n) {
    var a = e[0], i = e[1], o = this.getCurrentStore(), s = o.prevClients;
    return this.moveClients(s.map(function(u) {
      var f = u.clientX, l = u.clientY;
      return {
        clientX: f + a,
        clientY: l + i,
        originalClientX: f,
        originalClientY: l
      };
    }), n, !0);
  }, r.prototype.triggerDragStart = function(e) {
    this.onDragStart(e, !1);
  }, r.prototype.setEventData = function(e) {
    var n = this.data;
    for (var a in e)
      n[a] = e[a];
    return this;
  }, r.prototype.setEventDatas = function(e) {
    return this.setEventData(e);
  }, r.prototype.getCurrentEvent = function(e) {
    return e === void 0 && (e = this._prevInputEvent), Rt(Rt({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: e });
  }, r.prototype.getEventData = function() {
    return this.data;
  }, r.prototype.getEventDatas = function() {
    return this.data;
  }, r.prototype.unset = function() {
    var e = this, n = this.targets, a = this.options.container;
    this.off(), zt(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(i) {
      zt(i, "dragstart", e.onDragStart);
    }), this._useMouse && (n.forEach(function(i) {
      zt(i, "mousedown", e.onDragStart);
    }), zt(a, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(i) {
      zt(i, "touchstart", e.onDragStart);
    }), zt(a, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, r.prototype.onPinchStart = function(e) {
    var n = this, a = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > a)) {
      var i = new $n(Ke(e));
      this.pinchFlag = !0, this._addStore(i);
      var o = this.emit("pinchStart", Rt(Rt({ data: this.data, datas: this.data, angle: i.getAngle(), touches: this.getCurrentStore().getPositions() }, i.getPosition()), { inputEvent: e, isTrusted: this._isTrusted, preventDefault: function() {
        e.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      o === !1 && (this.pinchFlag = !1);
    }
  }, r.prototype.onPinch = function(e, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var a = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", Rt(Rt({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: a.getAngle(n), rotation: a.getRotation(n), touches: a.getPositions(n), scale: a.getScale(n), distance: a.getDistance(n) }, a.getPosition(n)), { inputEvent: e, isTrusted: this._isTrusted }));
    }
  }, r.prototype.onPinchEnd = function(e) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var a = this.getCurrentStore();
      this.emit("pinchEnd", Rt(Rt({ data: this.data, datas: this.data, isPinch: n, touches: a.getPositions() }, a.getPosition()), { inputEvent: e }));
    }
  }, r.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, r.prototype.moveClients = function(e, n, a) {
    var i = this._getPosition(e, a), o = this.isDrag;
    (i.deltaX || i.deltaY) && (this.isDrag = !0);
    var s = !1;
    return !o && this.isDrag && (s = !0), Rt(Rt({ data: this.data, datas: this.data }, i), { movement: this.getMovement(e), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: s });
  }, r.prototype._addStore = function(e) {
    this.clientStores.splice(0, 0, e);
  }, r.prototype._getPosition = function(e, n) {
    var a = this.getCurrentStore(), i = a.getPosition(e, n), o = this.clientStores.slice(1).reduce(function(f, l) {
      var v = l.getPosition();
      return f.distX += v.distX, f.distY += v.distY, f;
    }, i), s = o.distX, u = o.distY;
    return Rt(Rt({}, i), { distX: s, distY: u });
  }, r.prototype._attchDragEvent = function() {
    var e = this._window, n = this.options.container, a = {
      passive: !1
    };
    this._isDragAPI && (kt(n, "dragover", this.onDrag, a), kt(e, "dragend", this.onDragEnd)), this._useMouse && (kt(n, "mousemove", this.onDrag), kt(e, "mouseup", this.onDragEnd)), this._useTouch && (kt(n, "touchmove", this.onDrag, a), kt(e, "touchend", this.onDragEnd, a), kt(e, "touchcancel", this.onDragEnd, a));
  }, r.prototype._dettachDragEvent = function() {
    var e = this._window, n = this.options.container;
    this._isDragAPI && (zt(n, "dragover", this.onDrag), zt(e, "dragend", this.onDragEnd)), this._useMouse && (zt(n, "mousemove", this.onDrag), zt(e, "mouseup", this.onDragEnd)), this._useTouch && (zt(n, "touchstart", this.onDragStart), zt(n, "touchmove", this.onDrag), zt(e, "touchend", this.onDragEnd), zt(e, "touchcancel", this.onDragEnd));
  }, r.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, r;
}(zn);
function Ec(t) {
  for (var r = 5381, e = t.length; e; )
    r = r * 33 ^ t.charCodeAt(--e);
  return r >>> 0;
}
var wc = Ec;
function _c(t) {
  return wc(t).toString(36);
}
function Cc(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function Dc(t, r, e) {
  return e.original ? r : r.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, a) {
    var i = a.trim();
    return (i ? Ir(i) : [""]).map(function(o) {
      var s = o.trim();
      return s.indexOf("@") === 0 ? s : s.indexOf(":global") > -1 ? s.replace(/\:global/g, "") : s.indexOf(":host") > -1 ? "".concat(s.replace(/\:host/g, ".".concat(t))) : s ? ".".concat(t, " ").concat(s) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function Mc(t, r, e, n, a) {
  var i = se(n), o = i.createElement("style");
  return o.setAttribute("type", "text/css"), o.setAttribute("data-styled-id", t), o.setAttribute("data-styled-count", "1"), e.nonce && o.setAttribute("nonce", e.nonce), o.innerHTML = Dc(t, r, e), (a || i.head || i.body).appendChild(o), o;
}
function Rc(t) {
  var r = "rCS" + _c(t);
  return {
    className: r,
    inject: function(e, n) {
      n === void 0 && (n = {});
      var a = Cc(e), i = (a || e.ownerDocument || document).querySelector('style[data-styled-id="'.concat(r, '"]'));
      if (!i)
        i = Mc(r, t, n, e, a);
      else {
        var o = parseFloat(i.getAttribute("data-styled-count")) || 0;
        i.setAttribute("data-styled-count", "".concat(o + 1));
      }
      return {
        destroy: function() {
          var s, u = parseFloat(i.getAttribute("data-styled-count")) || 0;
          u <= 1 ? (i.remove ? i.remove() : (s = i.parentNode) === null || s === void 0 || s.removeChild(i), i = null) : i.setAttribute("data-styled-count", "".concat(u - 1));
        }
      };
    }
  };
}
var _a = function() {
  return _a = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, _a.apply(this, arguments);
};
function Tc(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
function Vs(t, r) {
  var e = Rc(r), n = e.className;
  return _l(function(a, i) {
    var o = a.className, s = o === void 0 ? "" : o;
    a.cspNonce;
    var u = Tc(a, ["className", "cspNonce"]), f = Al();
    return Fl(i, function() {
      return f.current;
    }, []), Os(function() {
      var l = e.inject(f.current, {
        nonce: a.cspNonce
      });
      return function() {
        l.destroy();
      };
    }, []), er(t, _a({
      ref: f,
      "data-styled-id": n,
      className: "".concat(s, " ").concat(n)
    }, u));
  });
}
var Ca = function(t, r) {
  return Ca = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  }, Ca(t, r);
};
function Ye(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ca(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var M = function() {
  return M = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, M.apply(this, arguments);
};
function Oc(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
function zc(t, r, e, n) {
  var a = arguments.length, i = a < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(r, e, i) : o(r, e)) || i);
  return a > 3 && i && Object.defineProperty(r, e, i), i;
}
function Pc(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function T(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), a, i = [], o;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = n.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (e = n.return) && e.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function L(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, a = r.length, i; n < a; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return t.concat(i || Array.prototype.slice.call(r));
}
function Xe(t, r) {
  return M({ events: [], props: [], name: t }, r);
}
var Ic = ["n", "w", "s", "e"], ri = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function Bc(t, r) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(r, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function kc(t) {
  var r = Bc(1, t), e = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return e === 135 ? n = "nwse-resize" : e === 45 ? n = "nesw-resize" : e === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(r, "') 16 16, ").concat(n, ";");
}
var fe = Yl(), js = fe.browser.webkit, $s = js && function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, r = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return r ? parseFloat(r[1]) < 605 : !1;
}(), Us = fe.browser.name, Ks = parseInt(fe.browser.version, 10), Gc = Us === "chrome", Ac = fe.browser.chromium, Fc = parseInt(fe.browser.chromiumVersion, 10) || 0, Nc = Gc && Ks >= 109 || Ac && Fc >= 109, Wc = Us === "firefox", Hc = parseInt(fe.browser.webkitVersion, 10) >= 612 || Ks >= 15, ei = "moveable-", Lc = ri.map(function(t) {
  var r = "", e = "", n = "center", a = "center", i = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (r = "top: ".concat(i, ";"), a = "bottom"), t.indexOf("s") > -1 && (r = "top: 0px;", a = "top"), t.indexOf("w") > -1 && (e = "left: ".concat(i, ";"), n = "right"), t.indexOf("e") > -1 && (e = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(e).concat(r, `
        transform-origin: `).concat(n, " ").concat(a, `;
    }`);
}).join(`
`), Yc = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(Lc, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(t) {
  return `
.direction[data-rotation="`.concat(t, '"], :global .view-control-rotation').concat(t, ` {
`).concat(kc(t), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat($s ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), Xc = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Da = 1e-4, Lt = 1e-7, Ze = 1e-9, Ma = Math.pow(10, 10), to = -Ma, qc = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, ni = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, Zs = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, Js = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function qe(t, r, e, n, a, i) {
  var o, s;
  i === void 0 && (i = "draggable");
  var u = (s = (o = r.gestos[i]) === null || o === void 0 ? void 0 : o.move(e, t.inputEvent)) !== null && s !== void 0 ? s : {}, f = u.originalDatas || u.datas, l = f[i] || (f[i] = {});
  return M(M({}, a ? Wu(r, u) : u), { isPinch: !!n, parentEvent: !0, datas: l, originalDatas: t.originalDatas });
}
var ee = /* @__PURE__ */ function() {
  function t(r) {
    var e;
    r === void 0 && (r = "draggable"), this.ableName = r, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (e = {}, e[r] = {}, e);
  }
  return t.prototype.dragStart = function(r, e) {
    this.isDrag = !1, this.isFlag = !1;
    var n = e.originalDatas;
    return this.datas = n, n[this.ableName] || (n[this.ableName] = {}), M(M({}, this.move(r, e.inputEvent)), { type: "dragstart" });
  }, t.prototype.drag = function(r, e) {
    return this.move([
      r[0] - this.prevX,
      r[1] - this.prevY
    ], e);
  }, t.prototype.move = function(r, e) {
    var n, a, i = !1;
    if (!this.isFlag)
      this.prevX = r[0], this.prevY = r[1], this.startX = r[0], this.startY = r[1], n = r[0], a = r[1], this.isFlag = !0;
    else {
      var o = this.isDrag;
      n = this.prevX + r[0], a = this.prevY + r[1], (r[0] || r[1]) && (this.isDrag = !0), !o && this.isDrag && (i = !0);
    }
    return this.prevX = n, this.prevY = a, {
      type: "drag",
      clientX: n,
      clientY: a,
      inputEvent: e,
      isFirstDrag: i,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: a - this.startY,
      deltaX: r[0],
      deltaY: r[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, t;
}();
function Jr(t, r, e, n) {
  var a = t.length === 16, i = a ? 4 : 3, o = Hr(t, e, n, i), s = T(o, 4), u = T(s[0], 2), f = u[0], l = u[1], v = T(s[1], 2), c = v[0], d = v[1], p = T(s[2], 2), h = p[0], g = p[1], m = T(s[3], 2), b = m[0], y = m[1], x = T(Dt(t, r, i), 2), E = x[0], S = x[1], C = Math.min(f, c, h, b), w = Math.min(l, d, g, y), D = Math.max(f, c, h, b), _ = Math.max(l, d, g, y);
  f = f - C || 0, c = c - C || 0, h = h - C || 0, b = b - C || 0, l = l - w || 0, d = d - w || 0, g = g - w || 0, y = y - w || 0, E = E - C || 0, S = S - w || 0;
  var z = t[0], O = t[i + 1], R = Wt(z * O);
  return {
    left: C,
    top: w,
    right: D,
    bottom: _,
    origin: [E, S],
    pos1: [f, l],
    pos2: [c, d],
    pos3: [h, g],
    pos4: [b, y],
    direction: R
  };
}
function Qs(t, r) {
  var e = r.clientX, n = r.clientY, a = r.datas, i = t.state, o = i.moveableClientRect, s = i.rootMatrix, u = i.is3d, f = i.pos1, l = o.left, v = o.top, c = u ? 4 : 3, d = T(rt(ie(s, [e - l, n - v], c), f), 2), p = d[0], h = d[1], g = T(lr({ datas: a, distX: p, distY: h }), 2), m = g[0], b = g[1];
  return [m, b];
}
function Wr(t, r) {
  var e = r.datas, n = t.state, a = n.allMatrix, i = n.beforeMatrix, o = n.is3d, s = n.left, u = n.top, f = n.origin, l = n.offsetMatrix, v = n.targetMatrix, c = n.transformOrigin, d = o ? 4 : 3;
  e.is3d = o, e.matrix = a, e.targetMatrix = v, e.beforeMatrix = i, e.offsetMatrix = l, e.transformOrigin = c, e.inverseMatrix = fr(a, d), e.inverseBeforeMatrix = fr(i, d), e.absoluteOrigin = Gr(ht([s, u], f), d), e.startDragBeforeDist = Gt(e.inverseBeforeMatrix, e.absoluteOrigin, d), e.startDragDist = Gt(e.inverseMatrix, e.absoluteOrigin, d);
}
function Vc(t) {
  return Jr(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Pn(t, r, e) {
  var n = r.datas, a = r.originalDatas.beforeRenderable, i = n.transformIndex, o = a.nextTransforms, s = o.length, u = a.nextTransformAppendedIndexes, f = -1;
  i === -1 ? (e === "translate" ? f = 0 : e === "rotate" && (f = hr(o, function(d) {
    return d.match(/scale\(/g);
  })), f === -1 && (f = o.length), n.transformIndex = f) : Vt(u, function(d) {
    return d.index === i && d.functionName === e;
  }) ? f = i : f = i + u.filter(function(d) {
    return d.index < i;
  }).length;
  var l = md(o, t.state, f), v = l.targetFunction, c = e === "rotate" ? "rotateZ" : e;
  n.beforeFunctionTexts = l.beforeFunctionTexts, n.afterFunctionTexts = l.afterFunctionTexts, n.beforeTransform = l.beforeFunctionMatrix, n.beforeTransform2 = l.beforeFunctionMatrix2, n.targetTansform = l.targetFunctionMatrix, n.afterTransform = l.afterFunctionMatrix, n.afterTransform2 = l.afterFunctionMatrix2, n.targetAllTransform = l.allFunctionMatrix, v.functionName === c ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : s > f && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = L(L([], T(u), !1), [{
    functionName: e,
    index: f,
    isAppend: !0
  }], !1));
}
function In(t, r, e) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? e : r, " ").concat(t.afterFunctionTexts.join(" "));
}
function jc(t) {
  var r = t.datas, e = t.distX, n = t.distY, a = T(ru({ datas: r, distX: e, distY: n }), 2), i = a[0], o = a[1], s = tu(r, $l([i, o], 4));
  return Gt(s, Gr([0, 0, 0], 4), 4);
}
function tu(t, r, e) {
  var n = t.beforeTransform, a = t.afterTransform, i = t.beforeTransform2, o = t.afterTransform2, s = t.targetAllTransform, u = e ? xt(s, r, 4) : xt(r, s, 4), f = xt(fr(e ? i : n, 4), u, 4), l = xt(f, fr(e ? o : a, 4), 4);
  return l;
}
function ru(t) {
  var r = t.datas, e = t.distX, n = t.distY, a = r.inverseBeforeMatrix, i = r.is3d, o = r.startDragBeforeDist, s = r.absoluteOrigin, u = i ? 4 : 3;
  return rt(Gt(a, ht(s, [e, n]), u), o);
}
function lr(t, r) {
  var e = t.datas, n = t.distX, a = t.distY, i = e.inverseBeforeMatrix, o = e.inverseMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.startDragDist, l = e.absoluteOrigin, v = s ? 4 : 3;
  return rt(Gt(r ? i : o, ht(l, [n, a]), v), r ? u : f);
}
function $c(t, r) {
  var e = t.datas, n = t.distX, a = t.distY, i = e.beforeMatrix, o = e.matrix, s = e.is3d, u = e.startDragBeforeDist, f = e.startDragDist, l = e.absoluteOrigin, v = s ? 4 : 3;
  return rt(Gt(r ? i : o, ht(r ? u : f, [n, a]), v), l);
}
function Uc(t, r, e, n, a, i) {
  return n === void 0 && (n = r), a === void 0 && (a = e), i === void 0 && (i = [0, 0]), t ? t.map(function(o, s) {
    var u = Ae(o), f = u.value, l = u.unit, v = s ? a : n, c = s ? e : r;
    if (o === "%" || isNaN(f)) {
      var d = v ? i[s] / v : 0;
      return c * d;
    } else if (l !== "%")
      return f;
    return c * f / 100;
  }) : i;
}
function eu(t) {
  var r = [];
  return t[1] >= 0 && (t[0] >= 0 && r.push(3), t[0] <= 0 && r.push(2)), t[1] <= 0 && (t[0] >= 0 && r.push(1), t[0] <= 0 && r.push(0)), r;
}
function Kc(t, r) {
  return eu(r).map(function(e) {
    return t[e];
  });
}
function Un(t, r) {
  var e = (r + 1) / 2;
  return [
    pn(t[0][0], t[1][0], e, 1 - e),
    pn(t[0][1], t[1][1], e, 1 - e)
  ];
}
function It(t, r) {
  var e = Un([t[0], t[1]], r[0]), n = Un([t[2], t[3]], r[0]);
  return Un([e, n], r[1]);
}
function Zc(t, r, e, n, a, i) {
  var o = Hr(r, e, n, a), s = It(o, i), u = t[0] - s[0], f = t[1] - s[1];
  return [u, f];
}
function Ve(t, r, e, n) {
  return xt(t, _e(r, n, e), n);
}
function Jc(t, r, e, n) {
  var a = t.transformOrigin, i = t.offsetMatrix, o = t.is3d, s = o ? 4 : 3, u;
  if (qt(e)) {
    var f = r.beforeTransform, l = r.afterTransform;
    n ? u = ir(Pe(e), 4, s) : u = ir(xt(xt(f, Pe([e]), 4), l, 4), 4, s);
  } else
    u = e;
  return Ve(i, u, a, s);
}
function Qc(t, r) {
  var e = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, i = t.targetMatrix, o = t.targetAllTransform, s = a ? 4 : 3;
  return Ve(n, xt(o || i, Ja(r, s), s), e, s);
}
function Bn(t, r) {
  var e = le(r);
  return {
    setTransform: function(n, a) {
      a === void 0 && (a = -1), e.startTransforms = Ot(n) ? n : Er(n), Ra(t, r, a);
    },
    setTransformIndex: function(n) {
      Ra(t, r, n);
    }
  };
}
function kn(t, r, e) {
  var n = le(r), a = n.startTransforms;
  Ra(t, r, hr(a, function(i) {
    return i.indexOf("".concat(e, "(")) === 0;
  }));
}
function Ra(t, r, e) {
  var n = le(r), a = r.datas;
  if (a.transformIndex = e, e !== -1) {
    var i = n.startTransforms[e];
    if (i) {
      var o = t.state, s = re([i], {
        "x%": function(u) {
          return u / 100 * o.offsetWidth;
        },
        "y%": function(u) {
          return u / 100 * o.offsetHeight;
        }
      });
      a.startValue = s[0].functionValue;
    }
  }
}
function ai(t, r) {
  var e = le(t);
  e.nextTransforms = Er(r);
}
function le(t) {
  return t.originalDatas.beforeRenderable;
}
function bn(t) {
  var r = t.originalDatas.beforeRenderable;
  return r.nextTransforms;
}
function Je(t) {
  return (bn(t) || []).join(" ");
}
function Qe(t) {
  return le(t).nextStyle;
}
function nu(t, r, e, n, a) {
  ai(a, r);
  var i = Nt.drag(t, qe(a, t.state, e, n, !1)), o = i ? i.transform : r;
  return M(M({ transform: r, drag: i }, Ht({
    transform: o
  }, a)), { afterTransform: o });
}
function ii(t, r, e, n, a, i) {
  var o = Jc(t.state, a, r, i), s = ev(t, e, n, o);
  return s;
}
function au(t, r, e, n, a, i, o) {
  var s = ii(t, r, e, a, i, o), u = t.state, f = u.left, l = u.top, v = t.props.groupable, c = v ? f : 0, d = v ? l : 0, p = rt(n, s);
  return rt(p, [c, d]);
}
function tv(t, r, e, n, a, i, o) {
  var s = au(t, r, e, n, a, i, o);
  return s;
}
function rv(t, r, e) {
  return [
    r ? -1 + t[0] / (r / 2) : 0,
    e ? -1 + t[1] / (e / 2) : 0
  ];
}
function ev(t, r, e, n) {
  n === void 0 && (n = t.state.allMatrix);
  var a = t.state, i = a.width, o = a.height, s = a.is3d, u = s ? 4 : 3, f = [
    i / 2 * (1 + r[0]) + e[0],
    o / 2 * (1 + r[1]) + e[1]
  ];
  return Dt(n, f, u);
}
function nv(t, r, e) {
  var n = e.fixedDirection, a = e.fixedPosition, i = e.fixedOffset;
  return au(t, "rotate(".concat(r, "deg)"), n, a, i, e);
}
function av(t, r, e, n, a, i) {
  var o = t.props.groupable, s = t.state, u = s.transformOrigin, f = s.offsetMatrix, l = s.is3d, v = s.width, c = s.height, d = s.left, p = s.top, h = i.fixedDirection, g = i.nextTargetMatrix || s.targetMatrix, m = l ? 4 : 3, b = Uc(a, r, e, v, c, u), y = o ? d : 0, x = o ? p : 0, E = Ve(f, g, b, m), S = Zc(n, E, r, e, m, h);
  return rt(S, [y, x]);
}
function iv(t, r) {
  return It(tr(t.state), r);
}
function ov(t, r) {
  var e = t.targetGesto, n = t.controlGesto, a;
  return e != null && e.isFlag() && (a = e.getEventData()[r]), !a && (n != null && n.isFlag()) && (a = n.getEventData()[r]), a || {};
}
function sv(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function uv(t) {
  var r = t("scale"), e = t("rotate"), n = t("translate"), a = [];
  return n && n !== "0px" && n !== "none" && a.push("translate(".concat(n.split(/\s+/).join(","), ")")), e && e !== "1" && e !== "none" && a.push("rotate(".concat(e, ")")), r && r !== "1" && r !== "none" && a.push("scale(".concat(r.split(/\s+/).join(","), ")")), a;
}
function iu(t, r, e) {
  for (var n = t, a = [], i = qa(t) || Cr(t), o = !e && t === r || t === i, s = o, u = !1, f = 3, l, v, c, d = !1, p = Be(r, r, !0).offsetParent, h = 1; n && !s; ) {
    s = o;
    var g = jt(n), m = g("position"), b = Tu(n), y = m === "fixed", x = uv(g), E = Ul(id(b)), S = void 0, C = !1, w = !1, D = 0, _ = 0, z = 0, O = 0, R = {
      hasTransform: !1,
      fixedContainer: null
    };
    y && (d = !0, R = ld(n), p = R.fixedContainer);
    var P = E.length;
    !u && (P === 16 || x.length) && (u = !0, f = 4, Ba(a), c && (c = ir(c, 3, 4))), u && P === 9 && (E = ir(E, 3, 4));
    var I = fd(n, t), B = I.tagName, W = I.hasOffset, G = I.isSVG, H = I.origin, N = I.targetOrigin, k = I.offset, Y = T(k, 2), $ = Y[0], V = Y[1];
    B === "svg" && !n.ownerSVGElement && c && (a.push({
      type: "target",
      target: n,
      matrix: cd(n, f)
    }), a.push({
      type: "offset",
      target: n,
      matrix: _t(f)
    }));
    var j = parseFloat(g("zoom")) || 1;
    if (y)
      S = R.fixedContainer, C = !0;
    else {
      var q = Be(n, r, !1, !0, g), U = q.offsetZoom;
      if (S = q.offsetParent, C = q.isEnd, w = q.isStatic, h *= U, (q.isCustomElement || U !== 1) && w)
        $ -= S.offsetLeft, V -= S.offsetTop;
      else if (Wc || Nc) {
        var J = q.parentSlotElement;
        if (J) {
          for (var at = S, dt = 0, X = 0; at && sv(at); )
            dt += at.offsetLeft, X += at.offsetTop, at = at.offsetParent;
          $ -= dt, V -= X;
        }
      }
    }
    if (js && !Hc && W && !G && w && (m === "relative" || m === "static") && ($ -= S.offsetLeft, V -= S.offsetTop, o = o || C), y)
      W && R.hasTransform && (z = S.clientLeft, O = S.clientTop);
    else if (W && p !== S && (D = S.clientLeft, _ = S.clientTop), W && S === i) {
      var Z = Ou(n, !1);
      $ += Z[0], V += Z[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: _e(E, f, H)
    }), x.length && (a.push({
      type: "offset",
      target: n,
      matrix: _t(f)
    }), a.push({
      type: "target",
      target: n,
      matrix: _e(Pe(x), f, H)
    })), W) {
      var pt = n === t, nt = pt ? 0 : n.scrollLeft, it = pt ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: Ar([
          $ - nt + D - z,
          V - it + _ - O
        ], f)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: H
      });
    if (j !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: _e(Ja([j, j], f), f, [0, 0])
    }), c || (c = E), l || (l = H), v || (v = N), s || y)
      break;
    n = S, o = C, (!e || n === i) && (s = o);
  }
  return c || (c = _t(f)), l || (l = [0, 0]), v || (v = [0, 0]), {
    zoom: h,
    offsetContainer: p,
    matrixes: a,
    targetMatrix: c,
    transformOrigin: l,
    targetOrigin: v,
    is3d: u,
    hasFixed: d
  };
}
var Tr = null, Or = null, $r = null;
function ne(t) {
  t ? (window.Map && (Tr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map()), $r = []) : (Tr = null, $r = null, Or = null);
}
function fv(t) {
  var r = Or == null ? void 0 : Or.get(t);
  if (r)
    return r;
  var e = Ce(t, !0);
  return Or && Or.set(t, e), e;
}
function lv(t, r) {
  if ($r) {
    var e = Vt($r, function(a) {
      return a[0][0] == t && a[0][1] == r;
    });
    if (e)
      return e[1];
  }
  var n = iu(t, r, !0);
  return $r && $r.push([[t, r], n]), n;
}
function jt(t) {
  var r = Tr == null ? void 0 : Tr.get(t);
  if (!r) {
    var e = Sr(t).getComputedStyle(t);
    if (!Tr)
      return function(i) {
        return e[i];
      };
    r = {
      style: e,
      cached: {}
    }, Tr.set(t, r);
  }
  var n = r.cached, a = r.style;
  return function(i) {
    return i in n || (n[i] = a[i]), n[i];
  };
}
function nr(t, r, e) {
  var n = e.originalDatas;
  n.groupable = n.groupable || {};
  var a = n.groupable;
  a.childDatas = a.childDatas || [];
  var i = a.childDatas;
  return t.moveables.map(function(o, s) {
    return i[s] = i[s] || {}, i[s][r] = i[s][r] || {}, M(M({}, e), { isRequestChild: !0, datas: i[s][r], originalDatas: i[s] });
  });
}
function Kn(t, r, e, n, a, i, o) {
  var s = !!e.match(/Start$/g), u = !!e.match(/End$/g), f = a.isPinch, l = a.datas, v = nr(t, r.name, a), c = t.moveables, d = [], p = v.map(function(h, g) {
    var m = c[g], b = m.state, y = b.gestos, x = h;
    if (s)
      x = new ee(o).dragStart(n, h), d.push(x);
    else {
      if (y[o] || (y[o] = l.childGestos[g]), !y[o])
        return;
      x = qe(h, b, n, f, i, o), d.push(x);
    }
    var E = r[e](m, M(M({}, x), { parentFlag: !0 }));
    return u && (y[o] = null), E;
  });
  return s && (l.childGestos = c.map(function(h) {
    return h.state.gestos[o];
  })), {
    eventParams: p,
    childEvents: d
  };
}
function pr(t, r, e, n, a, i) {
  a === void 0 && (a = function(l, v) {
    return v;
  });
  var o = !!e.match(/End$/g), s = nr(t, r.name, n), u = t.moveables, f = s.map(function(l, v) {
    var c = u[v], d = l;
    d = a(c, l);
    var p = r[e](c, M(M({}, d), { parentFlag: !0 }));
    return p && i && i(c, l, p, v), o && (c.state.gestos = {}), p;
  });
  return f;
}
function yn(t, r, e, n) {
  var a = e.fixedDirection, i = e.fixedPosition, o = n.datas.startPositions || tr(r.state), s = It(o, a), u = T(Gt(Le(-t.rotation / 180 * Math.PI, 3), [s[0] - i[0], s[1] - i[1], 1], 3), 2), f = u[0], l = u[1];
  return n.datas.originalX = f, n.datas.originalY = l, n;
}
function ou(t, r, e, n) {
  var a = t.getState(), i = a.renderPoses, o = a.rotation, s = a.direction, u = Nr(t.props, r).zoom, f = we(o / Math.PI * 180), l = {}, v = t.renderState;
  v.renderDirectionMap || (v.renderDirectionMap = {});
  var c = v.renderDirectionMap;
  e.forEach(function(p) {
    var h = p.dir;
    l[h] = !0;
  });
  var d = Wt(s);
  return e.map(function(p) {
    var h = p.data, g = p.classNames, m = p.dir, b = ni[m];
    if (!b || !l[m])
      return null;
    c[m] = !0;
    var y = (ot(f, 15) + d * Zs[m] + 720) % 180, x = {};
    return gr(h).forEach(function(E) {
      x["data-".concat(E)] = h[E];
    }), n.createElement("div", M({ className: Q.apply(void 0, L(["control", "direction", m, r], T(g), !1)), "data-rotation": y, "data-direction": m }, x, { key: "direction-".concat(m), style: wn.apply(void 0, L([o, u], T(b.map(function(E) {
      return i[E];
    })), !1)) }));
  });
}
function su(t, r, e, n) {
  var a = Nr(t.props, e), i = a.renderDirections, o = i === void 0 ? r : i, s = a.displayAroundControls;
  if (!o)
    return [];
  var u = o === !0 ? ri : o;
  return L(L([], T(s ? cu(t, n, e, u) : []), !1), T(ou(t, e, u.map(function(f) {
    return {
      data: {},
      classNames: [],
      dir: f
    };
  }), n)), !1);
}
function Ie(t, r, e, n, a, i) {
  for (var o = [], s = 6; s < arguments.length; s++)
    o[s - 6] = arguments[s];
  var u = Mt(e, n), f = r ? ot(u / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(i), className: Q.apply(void 0, L(["line", "direction", r ? "edge" : "", r], T(o), !1)), "data-rotation": f, "data-line-key": i, "data-direction": r, style: me(e, n, a, u) });
}
function uu(t, r, e, n, a) {
  var i = e === !0 ? Ic : e;
  return i.map(function(o, s) {
    var u = T(ni[o], 2), f = u[0], l = u[1];
    if (l != null)
      return Ie(t, o, n[f], n[l], a, "".concat(r, "Edge").concat(s), r);
  }).filter(Boolean);
}
function fu(t) {
  return function(r, e) {
    var n = Nr(r.props, t).edge;
    return n && (n === !0 || n.length) ? L(L([], T(uu(e, t, n, r.getState().renderPoses, r.props.zoom)), !1), T(cv(r, t, e)), !1) : lu(r, t, e);
  };
}
function lu(t, r, e) {
  return su(t, ri, r, e);
}
function cv(t, r, e) {
  return su(t, ["nw", "ne", "sw", "se"], r, e);
}
function cu(t, r, e, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var i = t.getState(), o = i.renderPoses, s = i.rotation, u = i.direction, f = a.renderDirectionMap, l = t.props.zoom, v = Wt(u), c = s / Math.PI * 180;
  return (n || gr(f)).map(function(d) {
    var p = ni[d];
    if (!p)
      return null;
    var h = (ot(c, 15) + v * Zs[d] + 720) % 180, g = ["around-control"];
    return e && g.push("direction", e), r.createElement("div", { className: Q.apply(void 0, L([], T(g), !1)), "data-rotation": h, "data-direction": d, key: "direction-around-".concat(d), style: wn.apply(void 0, L([s, l], T(p.map(function(m) {
      return o[m];
    })), !1)) });
  });
}
function oi(t, r, e) {
  var n = t || {}, a = n.position, i = a === void 0 ? "client" : a, o = n.left, s = o === void 0 ? -1 / 0 : o, u = n.top, f = u === void 0 ? -1 / 0 : u, l = n.right, v = l === void 0 ? 1 / 0 : l, c = n.bottom, d = c === void 0 ? 1 / 0 : c, p = {
    position: i,
    left: s,
    top: f,
    right: v,
    bottom: d
  };
  return {
    vertical: ro(p, r, !0),
    horizontal: ro(p, e, !1)
  };
}
function Gn(t, r) {
  var e = t.state, n = e.containerClientRect, a = n.clientHeight, i = n.clientWidth, o = n.clientLeft, s = n.clientTop, u = e.snapOffset, f = u.left, l = u.top, v = u.right, c = u.bottom, d = r || t.props.bounds || {}, p = d.position || "client", h = p === "css", g = d.left, m = g === void 0 ? -1 / 0 : g, b = d.top, y = b === void 0 ? -1 / 0 : b, x = d.right, E = x === void 0 ? h ? -1 / 0 : 1 / 0 : x, S = d.bottom, C = S === void 0 ? h ? -1 / 0 : 1 / 0 : S;
  return h && (E = i + v - f - E, C = a + c - l - C), {
    left: m + f - o,
    right: E + f - o,
    top: y + l - s,
    bottom: C + l - s
  };
}
function vv(t, r, e) {
  var n = Gn(t), a = n.left, i = n.top, o = n.right, s = n.bottom, u = T(e, 2), f = u[0], l = u[1], v = T(rt(e, r), 2), c = v[0], d = v[1];
  A(c) < Lt && (c = 0), A(d) < Lt && (d = 0);
  var p = d > 0, h = c > 0, g = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, m = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (c === 0 && d === 0)
    return {
      vertical: g,
      horizontal: m
    };
  if (c === 0)
    p ? s < l && (m.pos = s, m.offset = l - s) : i > l && (m.pos = i, m.offset = l - i);
  else if (d === 0)
    h ? o < f && (g.pos = o, g.offset = f - o) : a > f && (g.pos = a, g.offset = f - a);
  else {
    var b = d / c, y = e[1] - b * f, x = 0, E = 0, S = !1;
    h && o <= f ? (x = b * o + y, E = o, S = !0) : !h && f <= a && (x = b * a + y, E = a, S = !0), S && (x < i || x > s) && (S = !1), S || (p && s <= l ? (x = s, E = (x - y) / b, S = !0) : !p && l <= i && (x = i, E = (x - y) / b, S = !0)), S && (g.isBound = !0, g.pos = E, g.offset = f - E, m.isBound = !0, m.pos = x, m.offset = l - x);
  }
  return {
    vertical: g,
    horizontal: m
  };
}
function ro(t, r, e) {
  var n = t[e ? "left" : "top"], a = t[e ? "right" : "bottom"], i = Math.min.apply(Math, L([], T(r), !1)), o = Math.max.apply(Math, L([], T(r), !1)), s = [];
  return n + 1 > i && s.push({
    direction: "start",
    isBound: !0,
    offset: i - n,
    pos: n
  }), a - 1 < o && s.push({
    direction: "end",
    isBound: !0,
    offset: o - a,
    pos: a
  }), s.length || s.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), s.sort(function(u, f) {
    return A(f.offset) - A(u.offset);
  });
}
function eo(t, r, e) {
  var n = e ? t.map(function(a) {
    return He(a, e);
  }) : t;
  return n.some(function(a) {
    return a[0] < r.left && A(a[0] - r.left) > 0.1 || a[0] > r.right && A(a[0] - r.right) > 0.1 || a[1] < r.top && A(a[1] - r.top) > 0.1 || a[1] > r.bottom && A(a[1] - r.bottom) > 0.1;
  });
}
function dv(t, r, e) {
  var n = Qt(t), a = Math.sqrt(n * n - r * r) || 0;
  return [a, -a].sort(function(i, o) {
    return A(i - t[e ? 0 : 1]) - A(o - t[e ? 0 : 1]);
  }).map(function(i) {
    return Mt([0, 0], e ? [i, r] : [r, i]);
  });
}
function pv(t, r, e, n, a) {
  if (!t.props.bounds)
    return [];
  var i = a * Math.PI / 180, o = Gn(t), s = o.left, u = o.top, f = o.right, l = o.bottom, v = s - n[0], c = f - n[0], d = u - n[1], p = l - n[1], h = {
    left: v,
    top: d,
    right: c,
    bottom: p
  };
  if (!eo(e, h, 0))
    return [];
  var g = [];
  return [
    [v, 0],
    [c, 0],
    [d, 1],
    [p, 1]
  ].forEach(function(m) {
    var b = T(m, 2), y = b[0], x = b[1];
    e.forEach(function(E) {
      var S = Mt([0, 0], E);
      g.push.apply(g, L([], T(dv(E, y, x).map(function(C) {
        return i + C - S;
      }).filter(function(C) {
        return !eo(r, h, C);
      }).map(function(C) {
        return ot(C * 180 / Math.PI, Lt);
      })), !1));
    });
  }), g;
}
var hv = ["left", "right", "center"], gv = ["top", "bottom", "middle"], no = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, wr = {
  start: "left",
  end: "right",
  center: "center"
}, _r = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function Ur() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function ce(t, r) {
  var e = t.props, n = e.snappable, a = e.bounds, i = e.innerBounds, o = e.verticalGuidelines, s = e.horizontalGuidelines, u = e.snapGridWidth, f = e.snapGridHeight, l = t.state, v = l.guidelines, c = l.enableSnap;
  return !n || !c || r && n !== !0 && n.indexOf(r) < 0 ? !1 : !!(u || f || a || i || v && v.length || o && o.length || s && s.length);
}
function si(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function mv(t, r) {
  var e = si(t), n = {};
  for (var a in e)
    a in r && e[a] && (n[a] = r[a]);
  return n;
}
function ui(t, r) {
  var e = mv(t, r), n = gv.filter(function(i) {
    return i in e;
  }), a = hv.filter(function(i) {
    return i in e;
  });
  return {
    horizontalNames: n,
    verticalNames: a,
    horizontal: n.map(function(i) {
      return e[i];
    }),
    vertical: a.map(function(i) {
      return e[i];
    })
  };
}
function bv(t, r, e) {
  var n = Dt(t, [r.clientLeft, r.clientTop], e);
  return [
    r.left + n[0],
    r.top + n[1]
  ];
}
function yv(t) {
  var r = T(t, 2), e = r[0], n = r[1], a = n[0] - e[0], i = n[1] - e[1];
  Math.abs(a) < Tt && (a = 0), Math.abs(i) < Tt && (i = 0);
  var o = 0, s = 0, u = 0;
  return a ? i ? (o = -i / a, s = 1, u = o * e[0] - e[1]) : (s = 1, u = -e[1]) : (o = -1, u = e[0]), [o, s, u].map(function(f) {
    return ot(f, Tt);
  });
}
var vu = "snapRotationThreshold", du = "snapRotationDegrees", pu = "snapHorizontalThreshold", hu = "snapVerticalThreshold";
function An(t, r, e, n, a, i, o) {
  var s;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var u = t.props, f = ((s = t.state.snapThresholdInfo) === null || s === void 0 ? void 0 : s.multiples) || [1, 1], l = yo(o, u[pu], 5), v = yo(i, u[hu], 5);
  return gu(t.state.guidelines, r, e, n, a, l, v, f);
}
function gu(t, r, e, n, a, i, o, s) {
  return {
    vertical: io(t, "vertical", r, o * s[0], n),
    horizontal: io(t, "horizontal", e, i * s[1], a)
  };
}
function xv(t, r, e) {
  var n = T(e, 2), a = n[0], i = n[1], o = T(r, 2), s = o[0], u = o[1], f = T(rt(e, r), 2), l = f[0], v = f[1], c = v > 0, d = l > 0;
  l = _n(l), v = _n(v);
  var p = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, h = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (l === 0 && v === 0)
    return {
      vertical: p,
      horizontal: h
    };
  var g = An(t, l ? [a] : [], v ? [i] : [], [], [], void 0, void 0), m = g.vertical, b = g.horizontal;
  m.posInfos.filter(function(B) {
    var W = B.pos;
    return d ? W >= s : W <= s;
  }), b.posInfos.filter(function(B) {
    var W = B.pos;
    return c ? W >= u : W <= u;
  }), m.isSnap = m.posInfos.length > 0, b.isSnap = b.posInfos.length > 0;
  var y = Ta(m), x = y.isSnap, E = y.guideline, S = Ta(b), C = S.isSnap, w = S.guideline, D = C ? w.pos[1] : 0, _ = x ? E.pos[0] : 0;
  if (l === 0)
    C && (h.isSnap = !0, h.pos = w.pos[1], h.offset = i - h.pos);
  else if (v === 0)
    x && (p.isSnap = !0, p.pos = _, p.offset = a - _);
  else {
    var z = v / l, O = e[1] - z * a, R = 0, P = 0, I = !1;
    x ? (P = _, R = z * P + O, I = !0) : C && (R = D, P = (R - O) / z, I = !0), I && (p.isSnap = !0, p.pos = P, p.offset = a - P, h.isSnap = !0, h.pos = R, h.offset = i - R);
  }
  return {
    vertical: p,
    horizontal: h
  };
}
function yr(t) {
  var r = "";
  return t === -1 || t === "top" || t === "left" ? r = "start" : t === 0 || t === "center" || t === "middle" ? r = "center" : (t === 1 || t === "right" || t === "bottom") && (r = "end"), r;
}
function ao(t, r, e, n) {
  var a = ui(t.props.snapDirections, r), i = An(t, a.vertical, a.horizontal, a.verticalNames.map(function(u) {
    return yr(u);
  }), a.horizontalNames.map(function(u) {
    return yr(u);
  }), e, n), o = yr(a.horizontalNames[i.horizontal.index]), s = yr(a.verticalNames[i.vertical.index]);
  return {
    vertical: M(M({}, i.vertical), { direction: s }),
    horizontal: M(M({}, i.horizontal), { direction: o })
  };
}
function Ta(t) {
  var r = t.isSnap;
  if (!r)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var e = t.posInfos[0], n = e.guidelineInfos[0], a = n.offset, i = n.dist, o = n.guideline;
  return {
    isSnap: r,
    offset: a,
    dist: i,
    pos: e.pos,
    guideline: o
  };
}
function io(t, r, e, n, a) {
  var i, o;
  if (a === void 0 && (a = []), !t || !t.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var s = r === "vertical", u = s ? 0 : 1, f = e.map(function(v, c) {
    var d = a[c] || "", p = t.map(function(h) {
      var g = h.pos, m = v - g[u];
      return {
        offset: m,
        dist: A(m),
        guideline: h,
        direction: d
      };
    }).filter(function(h) {
      var g = h.guideline, m = h.dist, b = g.type;
      return !(b !== r || m > n);
    }).sort(function(h, g) {
      return h.dist - g.dist;
    });
    return {
      pos: v,
      index: c,
      guidelineInfos: p,
      direction: d
    };
  }).filter(function(v) {
    return v.guidelineInfos.length > 0;
  }).sort(function(v, c) {
    return v.guidelineInfos[0].dist - c.guidelineInfos[0].dist;
  }), l = f.length > 0;
  return {
    isSnap: l,
    index: l ? f[0].index : -1,
    direction: (o = (i = f[0]) === null || i === void 0 ? void 0 : i.direction) !== null && o !== void 0 ? o : "",
    posInfos: f
  };
}
function Sv(t, r, e, n, a) {
  var i = [];
  e[0] && e[1] ? i = [
    e,
    [-e[0], e[1]],
    [e[0], -e[1]]
  ] : !e[0] && !e[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(c, d, p) {
    var h = p[d + 1] || p[0];
    i.push(c), i.push([
      (c[0] + h[0]) / 2,
      (c[1] + h[1]) / 2
    ]);
  }) : t.props.keepRatio ? i.push([-1, -1], [-1, 1], [1, -1], [1, 1], e) : (i.push.apply(i, L([], T(Kc([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], e)), !1)), i.length > 1 && i.push([
    (i[0][0] + i[1][0]) / 2,
    (i[0][1] + i[1][1]) / 2
  ]));
  var o = i.map(function(c) {
    return It(r, c);
  }), s = o.map(function(c) {
    return c[0];
  }), u = o.map(function(c) {
    return c[1];
  }), f = An(t, s, u, i.map(function(c) {
    return yr(c[0]);
  }), i.map(function(c) {
    return yr(c[1]);
  }), n, a), l = yr(i.map(function(c) {
    return c[0];
  })[f.vertical.index]), v = yr(i.map(function(c) {
    return c[1];
  })[f.horizontal.index]);
  return {
    vertical: M(M({}, f.vertical), { direction: l }),
    horizontal: M(M({}, f.horizontal), { direction: v })
  };
}
function mu(t, r) {
  var e = A(t.offset), n = A(r.offset);
  return t.isBound && r.isBound ? n - e : t.isBound ? -1 : r.isBound ? 1 : t.isSnap && r.isSnap ? n - e : t.isSnap ? -1 : r.isSnap || e < Lt ? 1 : n < Lt ? -1 : e - n;
}
function xn(t, r) {
  return t.slice().sort(function(e, n) {
    var a = e.sign[r], i = n.sign[r], o = e.offset[r], s = n.offset[r];
    if (a) {
      if (!i)
        return -1;
    } else
      return 1;
    return mu({ isBound: e.isBound, isSnap: e.isSnap, offset: o }, { isBound: n.isBound, isSnap: n.isSnap, offset: s });
  })[0];
}
function Ev(t, r, e) {
  var n = [];
  if (e)
    A(r[0]) !== 1 || A(r[1]) !== 1 ? n.push([r, [-1, -1]], [r, [-1, 1]], [r, [1, -1]], [r, [1, 1]]) : n.push([r, [t[0], -t[1]]], [r, [-t[0], t[1]]]), n.push([r, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var a = t[0] ? t : [1, 1];
    [1, -1].forEach(function(o) {
      [1, -1].forEach(function(s) {
        var u = [o * a[0], s * a[1]];
        r[0] === u[0] && r[1] === u[1] || n.push([r, u]);
      });
    });
  } else if (t[0]) {
    var i = A(r[0]) === 1 ? [1] : [1, -1];
    i.forEach(function(o) {
      n.push([
        [r[0], -1],
        [o * t[0], -1]
      ], [
        [r[0], 0],
        [o * t[0], 0]
      ], [
        [r[0], 1],
        [o * t[0], 1]
      ]);
    });
  } else if (t[1]) {
    var i = A(r[1]) === 1 ? [1] : [1, -1];
    i.forEach(function(s) {
      n.push([
        [-1, r[1]],
        [-1, s * t[1]]
      ], [
        [0, r[1]],
        [0, s * t[1]]
      ], [
        [1, r[1]],
        [1, s * t[1]]
      ]);
    });
  }
  return n;
}
function bu(t, r) {
  var e = da([r[0][0], r[1][0]]), n = da([r[0][1], r[1][1]]);
  return {
    vertical: e <= t[0],
    horizontal: n <= t[1]
  };
}
function fi(t, r) {
  var e = T(r, 2), n = e[0], a = e[1], i = a[0] - n[0], o = a[1] - n[1];
  A(i) < Lt && (i = 0), A(o) < Lt && (o = 0);
  var s, u;
  if (!i)
    s = n[0], u = t[0];
  else if (!o)
    s = n[1], u = t[1];
  else {
    var f = o / i;
    s = f * (t[0] - n[0]) + n[1], u = t[1];
  }
  return s - u;
}
function yu(t, r, e, n) {
  return n === void 0 && (n = Lt), t.every(function(a) {
    var i = fi(a, r), o = i <= 0;
    return o === e || A(i) <= n;
  });
}
function oo(t, r, e, n, a) {
  return a === void 0 && (a = 0), n && r - a <= t || !n && t <= e + a ? {
    isBound: !0,
    offset: n ? r - t : e - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function wv(t, r) {
  var e = r.line, n = r.centerSign, a = r.verticalSign, i = r.horizontalSign, o = r.lineConstants, s = t.props.innerBounds;
  if (!s)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var u = s.left, f = s.top, l = s.width, v = s.height, c = [[u, f], [u, f + v]], d = [[u, f], [u + l, f]], p = [[u + l, f], [u + l, f + v]], h = [[u, f + v], [u + l, f + v]];
  if (yu([
    [u, f],
    [u + l, f],
    [u, f + v],
    [u + l, f + v]
  ], e, n))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var g = xr(e, o, d, a), m = xr(e, o, h, a), b = xr(e, o, c, i), y = xr(e, o, p, i), x = g.isBound && m.isBound, E = g.isBound || m.isBound, S = b.isBound && y.isBound, C = b.isBound || y.isBound, w = ae(g.offset, m.offset), D = ae(b.offset, y.offset), _ = [0, 0], z = !1, O = !1;
  return A(D) < A(w) ? (_ = [w, 0], z = E, O = x) : (_ = [0, D], z = C, O = S), {
    isAllBound: O,
    isVerticalBound: E,
    isHorizontalBound: C,
    isBound: z,
    offset: _
  };
}
function xr(t, r, e, n, a, i) {
  var o = T(r, 2), s = o[0], u = o[1], f = t[0], l = e[0], v = e[1], c = _n(v[1] - l[1]), d = _n(v[0] - l[0]), p = u, h = s, g = -s / u;
  if (d) {
    if (!c) {
      if (i && !p)
        return {
          isBound: !1,
          offset: 0
        };
      if (h) {
        var x = (l[1] - f[1]) / g + f[0];
        return oo(x, l[0], v[0], n, a);
      } else {
        var b = l[1] - f[1], y = A(b) <= (a || 0);
        return {
          isBound: y,
          offset: y ? b : 0
        };
      }
    }
  } else {
    if (i && !h)
      return {
        isBound: !1,
        offset: 0
      };
    if (p) {
      var m = g * (l[0] - f[0]) + f[1];
      return oo(m, l[1], v[1], n, a);
    } else {
      var b = l[0] - f[0], y = A(b) <= (a || 0);
      return {
        isBound: y,
        offset: y ? b : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function xu(t, r, e) {
  return r.map(function(n) {
    var a = wv(t, n), i = a.isBound, o = a.offset, s = a.isVerticalBound, u = a.isHorizontalBound, f = n.multiple, l = lr({
      datas: e,
      distX: o[0],
      distY: o[1]
    }).map(function(v, c) {
      return v * (f[c] ? 2 / f[c] : 0);
    });
    return {
      sign: f,
      isBound: i,
      isVerticalBound: s,
      isHorizontalBound: u,
      isSnap: !1,
      offset: l
    };
  });
}
function _v(t, r, e) {
  var n, a = li(t, r, [0, 0], !1).map(function(c) {
    return M(M({}, c), { multiple: c.multiple.map(function(d) {
      return A(d) * 2;
    }) });
  }), i = xu(t, a, e), o = xn(i, 0), s = xn(i, 1), u = 0, f = 0, l = o.isVerticalBound || s.isVerticalBound, v = o.isHorizontalBound || s.isHorizontalBound;
  return (l || v) && (n = T($c({
    datas: e,
    distX: -o.offset[0],
    distY: -s.offset[1]
  }), 2), u = n[0], f = n[1]), {
    vertical: {
      isBound: l,
      offset: u
    },
    horizontal: {
      isBound: v,
      offset: f
    }
  };
}
function Cv(t, r) {
  var e = [], n = t[0], a = t[1];
  return n && a ? e.push([[0, a * 2], t, [-n, a]], [[n * 2, 0], t, [n, -a]]) : n ? (e.push([[n * 2, 0], [n, 1], [n, -1]]), r && e.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : a ? (e.push([[0, a * 2], [1, a], [-1, a]]), r && e.push([[-1, 0], [-1, a], [-1, -a]], [[1, 0], [1, a], [1, -a]])) : e.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), e;
}
function li(t, r, e, n) {
  var a = t.state, i = a.allMatrix, o = a.is3d, s = Hr(i, 100, 100, o ? 4 : 3), u = It(s, [0, 0]);
  return Cv(e, n).map(function(f) {
    var l = T(f, 3), v = l[0], c = l[1], d = l[2], p = [
      It(s, c),
      It(s, d)
    ], h = yv(p), g = bu(u, p), m = g.vertical, b = g.horizontal, y = fi(u, p) <= 0;
    return {
      multiple: v,
      centerSign: y,
      verticalSign: m,
      horizontalSign: b,
      lineConstants: h,
      line: [
        It(r, c),
        It(r, d)
      ]
    };
  });
}
function so(t, r, e, n) {
  var a = n ? t.map(function(i) {
    return He(i, n);
  }) : t;
  return [
    [a[0], a[1]],
    [a[1], a[3]],
    [a[3], a[2]],
    [a[2], a[0]]
  ].some(function(i) {
    var o = fi(e, i) <= 0;
    return !yu(r, i, o);
  });
}
function Dv(t) {
  var r = T(t, 2), e = r[0], n = r[1], a = n[0] - e[0], i = n[1] - e[1];
  if (!a)
    return A(e[0]);
  if (!i)
    return A(e[1]);
  var o = i / a;
  return A((-o * e[0] + e[1]) / Math.sqrt(Math.pow(o, 2) + 1));
}
function Mv(t) {
  var r = T(t, 2), e = r[0], n = r[1], a = n[0] - e[0], i = n[1] - e[1];
  if (!a)
    return [e[0], 0];
  if (!i)
    return [0, e[1]];
  var o = i / a, s = -o * e[0] + e[1];
  return [
    -s / (o + 1 / o),
    s / (o * o + 1)
  ];
}
function Rv(t, r, e, n, a) {
  var i = t.props.innerBounds, o = a * Math.PI / 180;
  if (!i)
    return [];
  var s = i.left, u = i.top, f = i.width, l = i.height, v = s - n[0], c = s + f - n[0], d = u - n[1], p = u + l - n[1], h = [
    [v, d],
    [c, d],
    [v, p],
    [c, p]
  ], g = It(e, [0, 0]);
  if (!so(e, h, g, 0))
    return [];
  var m = [], b = h.map(function(y) {
    return [
      Qt(y),
      Mt([0, 0], y)
    ];
  });
  return [
    [e[0], e[1]],
    [e[1], e[3]],
    [e[3], e[2]],
    [e[2], e[0]]
  ].forEach(function(y) {
    var x = Mt([0, 0], Mv(y)), E = Dv(y);
    m.push.apply(m, L([], T(b.filter(function(S) {
      var C = T(S, 1), w = C[0];
      return w && E <= w;
    }).map(function(S) {
      var C = T(S, 2), w = C[0], D = C[1], _ = Math.acos(w ? E / w : 0), z = D + _, O = D - _;
      return [
        o + z - x,
        o + O - x
      ];
    }).reduce(function(S, C) {
      return S.push.apply(S, L([], T(C), !1)), S;
    }, []).filter(function(S) {
      return !so(r, h, g, S);
    }).map(function(S) {
      return ot(S * 180 / Math.PI, Lt);
    })), !1));
  }), m;
}
function Tv(t) {
  var r = t.props.innerBounds, e = Ur();
  if (!r)
    return {
      boundMap: e,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, i = n.pos2, o = n.pos3, s = n.pos4, u = [a, i, o, s], f = It(u, [0, 0]), l = r.left, v = r.top, c = r.width, d = r.height, p = [[l, v], [l, v + d]], h = [[l, v], [l + c, v]], g = [[l + c, v], [l + c, v + d]], m = [[l, v + d], [l + c, v + d]], b = li(t, u, [0, 0], !1), y = [], x = [];
  return b.forEach(function(E) {
    var S = E.line, C = E.lineConstants, w = bu(f, S), D = w.horizontal, _ = w.vertical, z = xr(S, C, h, _, 1, !0), O = xr(S, C, m, _, 1, !0), R = xr(S, C, p, D, 1, !0), P = xr(S, C, g, D, 1, !0);
    z.isBound && !e.top && (y.push(v), e.top = !0), O.isBound && !e.bottom && (y.push(v + d), e.bottom = !0), R.isBound && !e.left && (x.push(l), e.left = !0), P.isBound && !e.right && (x.push(l + c), e.right = !0);
  }), {
    boundMap: e,
    horizontal: y,
    vertical: x
  };
}
function Ov(t, r, e, n) {
  var a = r[0] - t[0], i = r[1] - t[1];
  if (A(a) < Tt && (a = 0), A(i) < Tt && (i = 0), !a)
    return n ? [0, 0] : [0, e];
  if (!i)
    return n ? [e, 0] : [0, 0];
  var o = i / a, s = t[1] - o * t[0];
  if (n) {
    var u = o * (r[0] + e) + s;
    return [e, u - r[1]];
  } else {
    var f = (r[1] + e - s) / o;
    return [f - r[0], e];
  }
}
function Oa(t, r, e, n, a) {
  var i = Ov(t, r, e, n);
  if (!i)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var o = dr(t, r), s = dr(i, t), u = dr(i, r), f = s > o || u > o, l = T(lr({
    datas: a,
    distX: i[0],
    distY: i[1]
  }), 2), v = l[0], c = l[1];
  return {
    offset: [v, c],
    isOutside: f
  };
}
function Sn(t, r) {
  return t.isBound ? t.offset : r.isSnap ? Ta(r).offset : 0;
}
function zv(t, r, e, n, a) {
  var i = T(r, 2), o = i[0], s = i[1], u = T(e, 2), f = u[0], l = u[1], v = T(n, 2), c = v[0], d = v[1], p = T(a, 2), h = p[0], g = p[1], m = -h, b = -g;
  if (t && o && s) {
    m = 0, b = 0;
    var y = [];
    if (f && l ? y.push([0, g], [h, 0]) : f ? y.push([h, 0]) : l ? y.push([0, g]) : c && d ? y.push([0, g], [h, 0]) : c ? y.push([h, 0]) : d && y.push([0, g]), y.length) {
      y.sort(function(C, w) {
        return Qt(rt([o, s], C)) - Qt(rt([o, s], w));
      });
      var x = y[0];
      if (x[0] && A(o) > Tt)
        m = -x[0], b = s * A(o + m) / A(o) - s;
      else if (x[1] && A(s) > Tt) {
        var E = s;
        b = -x[1], m = o * A(s + b) / A(E) - o;
      }
      if (t && l && f)
        if (A(m) > Tt && A(m) < A(h)) {
          var S = A(h) / A(m);
          m *= S, b *= S;
        } else if (A(b) > Tt && A(b) < A(g)) {
          var S = A(g) / A(b);
          m *= S, b *= S;
        } else
          m = ae(-h, m), b = ae(-g, b);
    }
  } else
    m = o || f ? -h : 0, b = s || l ? -g : 0;
  return [m, b];
}
function Pv(t, r, e, n, a, i) {
  if (!ce(t, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var o = di(i.absolutePoses, [r, e]), s = Jt(o), u = s.left, f = s.right, l = s.top, v = s.bottom, c = {
    horizontal: o.map(function(P) {
      return P[1];
    }),
    vertical: o.map(function(P) {
      return P[0];
    })
  }, d = si(t.props.snapDirections), p = ui(d, {
    left: u,
    right: f,
    top: l,
    bottom: v,
    center: (u + f) / 2,
    middle: (l + v) / 2
  }), h = Fn(t, a, p, c), g = h.vertical, m = h.horizontal, b = _v(t, o, i), y = b.vertical, x = b.horizontal, E = g.isSnap, S = m.isSnap, C = g.isBound || y.isBound, w = m.isBound || x.isBound, D = ae(g.offset, y.offset), _ = ae(m.offset, x.offset), z = T(zv(n, [r, e], [C, w], [E, S], [D, _]), 2), O = z[0], R = z[1];
  return [
    {
      isBound: C,
      isSnap: E,
      offset: O
    },
    {
      isBound: w,
      isSnap: S,
      offset: R
    }
  ];
}
function Fn(t, r, e, n) {
  n === void 0 && (n = e);
  var a = oi(Gn(t), n.vertical, n.horizontal), i = a.horizontal, o = a.vertical, s = r ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : An(t, e.vertical, e.horizontal, void 0, void 0, void 0, void 0), u = s.horizontal, f = s.vertical, l = Sn(i[0], u), v = Sn(o[0], f), c = A(l), d = A(v);
  return {
    horizontal: {
      isBound: i[0].isBound,
      isSnap: u.isSnap,
      snapIndex: u.index,
      offset: l,
      dist: c,
      bounds: i,
      snap: u
    },
    vertical: {
      isBound: o[0].isBound,
      isSnap: f.isSnap,
      snapIndex: f.index,
      offset: v,
      dist: d,
      bounds: o,
      snap: f
    }
  };
}
function uo(t, r, e, n, a, i, o) {
  o === void 0 && (o = [1, 1]);
  var s = oi(r, e, n), u = s.horizontal, f = s.vertical, l = gu(t, e, n, [], [], a, i, o), v = l.horizontal, c = l.vertical, d = Sn(u[0], v), p = Sn(f[0], c), h = A(d), g = A(p);
  return {
    horizontal: {
      isBound: u[0].isBound,
      isSnap: v.isSnap,
      snapIndex: v.index,
      offset: d,
      dist: h,
      bounds: u,
      snap: v
    },
    vertical: {
      isBound: f[0].isBound,
      isSnap: c.isSnap,
      snapIndex: c.index,
      offset: p,
      dist: g,
      bounds: f,
      snap: c
    }
  };
}
function Iv(t, r, e, n) {
  var a = Mt(t, r) / Math.PI * 180, i = e.vertical, o = i.isBound, s = i.isSnap, u = i.dist, f = e.horizontal, l = f.isBound, v = f.isSnap, c = f.dist, d = a % 180, p = d < 3 || d > 177, h = d > 87 && d < 93;
  return c < u && (o || s && !h && (!n || !p)) ? "vertical" : l || v && !p && (!n || !h) ? "horizontal" : "";
}
function Bv(t, r, e, n, a, i) {
  return e.map(function(o) {
    var s = T(o, 2), u = s[0], f = s[1], l = It(r, u), v = It(r, f), c = n ? kv(t, l, v, a) : Fn(t, a, {
      vertical: [v[0]],
      horizontal: [v[1]]
    }), d = c.horizontal, p = d.offset, h = d.isBound, g = d.isSnap, m = c.vertical, b = m.offset, y = m.isBound, x = m.isSnap, E = rt(f, u);
    if (!b && !p)
      return {
        isBound: y || h,
        isSnap: x || g,
        sign: E,
        offset: [0, 0]
      };
    var S = Iv(l, v, c, n);
    if (!S)
      return {
        sign: E,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var C = S === "vertical", w = [0, 0];
    return !n && A(f[0]) === 1 && A(f[1]) === 1 && u[0] !== f[0] && u[1] !== f[1] ? w = lr({
      datas: i,
      distX: -b,
      distY: -p
    }) : w = Oa(l, v, -(C ? b : p), C, i).offset, w = w.map(function(D, _) {
      return D * (E[_] ? 2 / E[_] : 0);
    }), {
      sign: E,
      isBound: C ? y : h,
      isSnap: C ? x : g,
      offset: w
    };
  });
}
function fo(t, r) {
  return t.isBound ? t.offset : r.isSnap ? r.offset : 0;
}
function kv(t, r, e, n) {
  var a = vv(t, r, e), i = a.horizontal, o = a.vertical, s = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : xv(t, r, e), u = s.horizontal, f = s.vertical, l = fo(i, u), v = fo(o, f), c = A(l), d = A(v);
  return {
    horizontal: {
      isBound: i.isBound,
      isSnap: u.isSnap,
      offset: l,
      dist: c
    },
    vertical: {
      isBound: o.isBound,
      isSnap: f.isSnap,
      offset: v,
      dist: d
    }
  };
}
function Gv(t, r, e, n, a) {
  var i = [-e[0], -e[1]], o = t.state, s = o.width, u = o.height, f = t.props.bounds, l = 1 / 0, v = 1 / 0;
  if (f) {
    var c = [
      [e[0], -e[1]],
      [-e[0], e[1]]
    ], d = f.left, p = d === void 0 ? -1 / 0 : d, h = f.top, g = h === void 0 ? -1 / 0 : h, m = f.right, b = m === void 0 ? 1 / 0 : m, y = f.bottom, x = y === void 0 ? 1 / 0 : y;
    c.forEach(function(E) {
      var S = E[0] !== i[0], C = E[1] !== i[1], w = It(r, E), D = Mt(n, w) * 360 / Math.PI;
      if (C) {
        var _ = w.slice();
        (A(D - 360) < 2 || A(D - 180) < 2) && (_[1] = n[1]);
        var z = Oa(n, _, (n[1] < w[1] ? x : g) - w[1], !1, a), O = T(z.offset, 2), R = O[1], P = z.isOutside;
        isNaN(R) || (v = u + (P ? 1 : -1) * A(R));
      }
      if (S) {
        var _ = w.slice();
        (A(D - 90) < 2 || A(D - 270) < 2) && (_[0] = n[0]);
        var I = Oa(n, _, (n[0] < w[0] ? b : p) - w[0], !0, a), B = T(I.offset, 1), W = B[0], G = I.isOutside;
        isNaN(W) || (l = s + (G ? 1 : -1) * A(W));
      }
    });
  }
  return {
    maxWidth: l,
    maxHeight: v
  };
}
var Nt = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(t, r) {
    var e = t.props, n = e.hideThrottleDragRotateLine, a = e.throttleDragRotate, i = e.zoom, o = t.getState(), s = o.dragInfo, u = o.beforeOrigin;
    if (n || !a || !s)
      return [];
    var f = s.dist;
    if (!f[0] && !f[1])
      return [];
    var l = Qt(f), v = Mt(f, [0, 0]);
    return [r.createElement("div", { className: Q("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(l, "px"),
      transform: "translate(".concat(u[0], "px, ").concat(u[1], "px) rotate(").concat(v, "rad) scaleY(").concat(i, ")")
    } })];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.parentEvent, a = r.parentGesto, i = t.state, o = i.gestos, s = i.style;
    if (o.draggable)
      return !1;
    o.draggable = a || t.targetGesto, e.datas = {}, e.left = parseFloat(s.left || "") || 0, e.top = parseFloat(s.top || "") || 0, e.bottom = parseFloat(s.bottom || "") || 0, e.right = parseFloat(s.right || "") || 0, e.startValue = [0, 0], Wr(t, r), kn(t, r, "translate"), rd(t, e), e.prevDist = [0, 0], e.prevBeforeDist = [0, 0], e.isDrag = !1, e.deltaOffset = [0, 0];
    var u = lt(t, r, M({ set: function(l) {
      e.startValue = l;
    } }, Bn(t, r))), f = n || K(t, "onDragStart", u);
    return f !== !1 ? (e.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (o.draggable = null, e.isPinch = !1), e.isDrag ? u : !1;
  },
  drag: function(t, r) {
    if (r) {
      Pn(t, r, "translate");
      var e = r.datas, n = r.parentEvent, a = r.parentFlag, i = r.isPinch, o = r.deltaOffset, s = r.useSnap, u = r.isRequest, f = r.isGroup, l = r.parentThrottleDrag, v = r.distX, c = r.distY, d = e.isDrag, p = e.prevDist, h = e.prevBeforeDist, g = e.startValue;
      if (d) {
        o && (v += o[0], c += o[1]);
        var m = t.props, b = m.parentMoveable, y = f ? 0 : m.throttleDrag || l || 0, x = n ? 0 : m.throttleDragRotate || 0, E = 0, S = !1, C = !1, w = !1, D = !1;
        if (!n && x > 0 && (v || c)) {
          var _ = m.startDragRotate || 0, z = ot(_ + Mt([0, 0], [v, c]) * 180 / Math.PI, x) - _, O = c * Math.abs(Math.cos((z - 90) / 180 * Math.PI)), R = v * Math.abs(Math.cos(z / 180 * Math.PI)), P = Qt([R, O]);
          E = z * Math.PI / 180, v = P * Math.cos(E), c = P * Math.sin(E);
        }
        if (!i && !n && !a) {
          var I = T(Pv(t, v, c, x, !s && u || o, e), 2), B = I[0], W = I[1];
          S = B.isSnap, C = B.isBound, w = W.isSnap, D = W.isBound;
          var G = B.offset, H = W.offset;
          v += G, c += H;
        }
        var N = ht(ru({ datas: e, distX: v, distY: c }), g), k = ht(jc({ datas: e, distX: v, distY: c }), g);
        Li(k, Lt), Li(N, Lt), x || (!S && !C && (k[0] = ot(k[0], y), N[0] = ot(N[0], y)), !w && !D && (k[1] = ot(k[1], y), N[1] = ot(N[1], y)));
        var Y = rt(N, g), $ = rt(k, g), V = rt($, p), j = rt(Y, h);
        e.prevDist = $, e.prevBeforeDist = Y, e.passDelta = V, e.passDist = $;
        var q = e.left + Y[0], U = e.top + Y[1], J = e.right - Y[0], at = e.bottom - Y[1], dt = In(e, "translate(".concat(k[0], "px, ").concat(k[1], "px)"), "translate(".concat($[0], "px, ").concat($[1], "px)"));
        if (ai(r, dt), t.state.dragInfo.dist = n ? [0, 0] : $, !(!n && !b && V.every(function(it) {
          return !it;
        }) && j.some(function(it) {
          return !it;
        }))) {
          var X = t.state, Z = X.width, pt = X.height, nt = lt(t, r, M({ transform: dt, dist: $, delta: V, translate: k, beforeDist: Y, beforeDelta: j, beforeTranslate: N, left: q, top: U, right: J, bottom: at, width: Z, height: pt, isPinch: i }, Ht({
            transform: dt
          }, r)));
          return !n && K(t, "onDrag", nt), nt;
        }
      }
    }
  },
  dragAfter: function(t, r) {
    var e = r.datas, n = e.deltaOffset;
    return n[0] || n[1] ? (e.deltaOffset = [0, 0], this.drag(t, M(M({}, r), { deltaOffset: n }))) : !1;
  },
  dragEnd: function(t, r) {
    var e = r.parentEvent, n = r.datas;
    if (t.state.dragInfo = null, !!n.isDrag) {
      n.isDrag = !1;
      var a = Kt(t, r, {});
      return !e && K(t, "onDragEnd", a), a;
    }
  },
  dragGroupStart: function(t, r) {
    var e, n, a = r.datas, i = r.clientX, o = r.clientY, s = this.dragStart(t, r);
    if (!s)
      return !1;
    var u = Kn(t, this, "dragStart", [
      i || 0,
      o || 0
    ], r, !1, "draggable"), f = u.childEvents, l = u.eventParams, v = M(M({}, s), { targets: t.props.targets, events: l }), c = K(t, "onDragGroupStart", v);
    a.isDrag = c !== !1;
    var d = (n = (e = f[0]) === null || e === void 0 ? void 0 : e.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return a.throttleOffset = [d[0] % 1, d[1] % 1], a.isDrag ? s : !1;
  },
  dragGroup: function(t, r) {
    var e = r.datas;
    if (e.isDrag) {
      var n = this.drag(t, M(M({}, r), { parentThrottleDrag: t.props.throttleDrag })), a = r.datas.passDelta, i = Kn(t, this, "drag", a, r, !1, "draggable").eventParams;
      if (n) {
        var o = M({ targets: t.props.targets, events: i }, n);
        return K(t, "onDragGroup", o), o;
      }
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isDrag) {
      this.dragEnd(t, r);
      var a = Kn(t, this, "dragEnd", [0, 0], r, !1, "draggable").eventParams;
      return K(t, "onDragGroupEnd", Kt(t, r, {
        targets: t.props.targets,
        events: a
      })), e;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, a = 0, i = !1;
    return {
      isControl: !1,
      requestStart: function(o) {
        return i = o.useSnap, { datas: r, useSnap: i };
      },
      request: function(o) {
        return "x" in o ? n = o.x - e.left : "deltaX" in o && (n += o.deltaX), "y" in o ? a = o.y - e.top : "deltaY" in o && (a += o.deltaY), { datas: r, distX: n, distY: a, useSnap: i };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: i };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.draggable = null, t.state.dragInfo = null;
  }
};
function Su(t, r) {
  var e = It(t, r), n = [0, 0];
  return {
    fixedPosition: e,
    fixedDirection: r,
    fixedOffset: n
  };
}
function Av(t, r) {
  var e = t.allMatrix, n = t.is3d, a = t.width, i = t.height, o = n ? 4 : 3, s = [
    a / 2 * (1 + r[0]),
    i / 2 * (1 + r[1])
  ], u = Dt(e, s, o), f = [0, 0];
  return {
    fixedPosition: u,
    fixedDirection: r,
    fixedOffset: f
  };
}
function Eu(t, r) {
  var e = t.allMatrix, n = t.is3d, a = t.width, i = t.height, o = n ? 4 : 3, s = rv(r, a, i), u = Dt(e, r, o), f = [
    a ? 0 : r[0],
    i ? 0 : r[1]
  ];
  return {
    fixedPosition: u,
    fixedDirection: s,
    fixedOffset: f
  };
}
var lo = gi("resizable"), za = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: fu("resizable"),
  dragControlCondition: lo,
  viewClassName: hi("resizable"),
  dragControlStart: function(t, r) {
    var e, n = r.inputEvent, a = r.isPinch, i = r.isGroup, o = r.parentDirection, s = r.parentGesto, u = r.datas, f = r.parentFixedDirection, l = r.parentEvent, v = ku(o, a, n, u), c = t.state, d = c.target, p = c.width, h = c.height, g = c.gestos;
    if (!v || !d || g.resizable)
      return !1;
    g.resizable = s || t.controlGesto, !a && Wr(t, r), u.datas = {}, u.direction = v, u.startOffsetWidth = p, u.startOffsetHeight = h, u.prevWidth = 0, u.prevHeight = 0, u.minSize = [0, 0], u.startWidth = c.inlineCSSWidth || c.cssWidth, u.startHeight = c.inlineCSSHeight || c.cssHeight, u.maxSize = [1 / 0, 1 / 0], i || (u.minSize = [
      c.minOffsetWidth,
      c.minOffsetHeight
    ], u.maxSize = [
      c.maxOffsetWidth,
      c.maxOffsetHeight
    ]);
    var m = t.props.transformOrigin || "% %";
    u.transformOrigin = m && qt(m) ? m.split(" ") : m, u.startOffsetMatrix = c.offsetMatrix, u.startTransformOrigin = c.transformOrigin, u.isWidth = (e = r == null ? void 0 : r.parentIsWidth) !== null && e !== void 0 ? e : !v[0] && !v[1] || v[0] || !v[1];
    function b(D) {
      u.ratio = D && isFinite(D) ? D : 0;
    }
    u.startPositions = tr(t.state);
    function y(D) {
      var _ = Su(u.startPositions, D);
      u.fixedDirection = _.fixedDirection, u.fixedPosition = _.fixedPosition, u.fixedOffset = _.fixedOffset;
    }
    function x(D) {
      var _ = Eu(t.state, D);
      u.fixedDirection = _.fixedDirection, u.fixedPosition = _.fixedPosition, u.fixedOffset = _.fixedOffset;
    }
    function E(D) {
      u.minSize = [
        yt("".concat(D[0]), 0) || 0,
        yt("".concat(D[1]), 0) || 0
      ];
    }
    function S(D) {
      var _ = [
        D[0] || 1 / 0,
        D[1] || 1 / 0
      ];
      (!te(_[0]) || isFinite(_[0])) && (_[0] = yt("".concat(_[0]), 0) || 1 / 0), (!te(_[1]) || isFinite(_[1])) && (_[1] = yt("".concat(_[1]), 0) || 1 / 0), u.maxSize = _;
    }
    b(p / h), y(f || [-v[0], -v[1]]), u.setFixedDirection = y, u.setFixedPosition = x, u.setMin = E, u.setMax = S;
    var C = lt(t, r, {
      direction: v,
      startRatio: u.ratio,
      set: function(D) {
        var _ = T(D, 2), z = _[0], O = _[1];
        u.startWidth = z, u.startHeight = O;
      },
      setMin: E,
      setMax: S,
      setRatio: b,
      setFixedDirection: y,
      setFixedPosition: x,
      setOrigin: function(D) {
        u.transformOrigin = D;
      },
      dragStart: Nt.dragStart(t, new ee().dragStart([0, 0], r))
    }), w = l || K(t, "onResizeStart", C);
    return u.startFixedDirection = u.fixedDirection, u.startFixedPosition = u.fixedPosition, w !== !1 && (u.isResize = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: v
    }), u.isResize ? C : !1;
  },
  dragControl: function(t, r) {
    var e, n = r.datas, a = r.parentFlag, i = r.isPinch, o = r.parentKeepRatio, s = r.dragClient, u = r.parentDist, f = r.useSnap, l = r.isRequest, v = r.isGroup, c = r.parentEvent, d = r.resolveMatrix, p = n.isResize, h = n.transformOrigin, g = n.startWidth, m = n.startHeight, b = n.prevWidth, y = n.prevHeight, x = n.minSize, E = n.maxSize, S = n.ratio, C = n.startOffsetWidth, w = n.startOffsetHeight, D = n.isWidth;
    if (!p)
      return;
    if (d) {
      var _ = t.state.is3d, z = n.startOffsetMatrix, O = n.startTransformOrigin, R = _ ? 4 : 3, P = Pe(bn(r)), I = Math.sqrt(P.length);
      R !== I && (P = ir(P, I, R));
      var B = Ve(z, P, O, R), W = Hr(B, C, w, R);
      n.startPositions = W, n.nextTargetMatrix = P, n.nextAllMatrix = B;
    }
    var G = Nr(t.props, "resizable"), H = G.resizeFormat, N = G.throttleResize, k = N === void 0 ? a ? 0 : 1 : N, Y = G.parentMoveable, $ = G.keepRatioFinally, V = n.direction, j = V, q = 0, U = 0;
    !V[0] && !V[1] && (j = [1, 1]);
    var J = S && (o ?? G.keepRatio) || !1;
    function at() {
      var st = n.fixedDirection, ut = Lu(j, J, n, r);
      q = ut.distWidth, U = ut.distHeight;
      var St = j[0] - st[0] || J ? Math.max(C + q, Lt) : C, vt = j[1] - st[1] || J ? Math.max(w + U, Lt) : w;
      return J && C && w && (D ? vt = St / S : St = vt * S), [St, vt];
    }
    var dt = T(at(), 2), X = dt[0], Z = dt[1];
    c || (n.setFixedDirection(n.fixedDirection), K(t, "onBeforeResize", lt(t, r, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(st) {
        var ut;
        return n.setFixedDirection(st), ut = T(at(), 2), X = ut[0], Z = ut[1], [X, Z];
      },
      setFixedPosition: function(st) {
        var ut;
        return n.setFixedPosition(st), ut = T(at(), 2), X = ut[0], Z = ut[1], [X, Z];
      },
      boundingWidth: X,
      boundingHeight: Z,
      setSize: function(st) {
        var ut;
        ut = T(st, 2), X = ut[0], Z = ut[1];
      }
    }, !0)));
    var pt = s;
    s || (!a && i ? pt = iv(t, [0, 0]) : pt = n.fixedPosition);
    var nt = [0, 0];
    i || (nt = Qv(t, X, Z, V, pt, !f && l, n)), u && (!u[0] && (nt[0] = 0), !u[1] && (nt[1] = 0));
    function it() {
      var st;
      H && (st = T(H([X, Z]), 2), X = st[0], Z = st[1]), X = ot(X, k), Z = ot(Z, k);
    }
    if (J) {
      j[0] && j[1] && nt[0] && nt[1] && (A(nt[0]) > A(nt[1]) ? nt[1] = 0 : nt[0] = 0);
      var ct = !nt[0] && !nt[1];
      ct && it(), j[0] && !j[1] || nt[0] && !nt[1] || ct && D ? (X += nt[0], Z = X / S) : (!j[0] && j[1] || !nt[0] && nt[1] || ct && !D) && (Z += nt[1], X = Z * S);
    } else
      X += nt[0], Z += nt[1], X = Math.max(0, X), Z = Math.max(0, Z);
    e = T(ps([X, Z], x, E, J ? S : !1), 2), X = e[0], Z = e[1], it(), J && (v || $) && (D ? Z = X / S : X = Z * S), q = X - C, U = Z - w;
    var mt = [q - b, U - y];
    n.prevWidth = q, n.prevHeight = U;
    var bt = av(t, X, Z, pt, h, n);
    if (!(!Y && mt.every(function(st) {
      return !st;
    }) && bt.every(function(st) {
      return !st;
    }))) {
      var ft = Nt.drag(t, qe(r, t.state, bt, !!i, !1, "draggable")), gt = ft.transform, wt = g + q, F = m + U, tt = lt(t, r, M({ width: wt, height: F, offsetWidth: Math.round(X), offsetHeight: Math.round(Z), startRatio: S, boundingWidth: X, boundingHeight: Z, direction: V, dist: [q, U], delta: mt, isPinch: !!i, drag: ft }, Au({
        style: {
          width: "".concat(wt, "px"),
          height: "".concat(F, "px")
        },
        transform: gt
      }, ft, r)));
      return !c && K(t, "onResize", tt), tt;
    }
  },
  dragControlAfter: function(t, r) {
    var e = r.datas, n = e.isResize, a = e.startOffsetWidth, i = e.startOffsetHeight, o = e.prevWidth, s = e.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var u = t.state, f = u.width, l = u.height, v = f - (a + o), c = l - (i + s), d = A(v) > 3, p = A(c) > 3;
      if (d && (e.startWidth += v, e.startOffsetWidth += v, e.prevWidth += v), p && (e.startHeight += c, e.startOffsetHeight += c, e.prevHeight += c), d || p)
        return this.dragControl(t, r);
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.parentEvent;
    if (e.isResize) {
      e.isResize = !1;
      var a = Kt(t, r, {});
      return !n && K(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: lo,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, M(M({}, r), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = nr(t, "resizable", r), i = e.startOffsetWidth, o = e.startOffsetHeight;
    function s() {
      var d = e.minSize;
      a.forEach(function(p) {
        var h = p.datas, g = h.minSize, m = h.startOffsetWidth, b = h.startOffsetHeight, y = i * (m ? g[0] / m : 0), x = o * (b ? g[1] / b : 0);
        d[0] = Math.max(d[0], y), d[1] = Math.max(d[1], x);
      });
    }
    function u() {
      var d = e.maxSize;
      a.forEach(function(p) {
        var h = p.datas, g = h.maxSize, m = h.startOffsetWidth, b = h.startOffsetHeight, y = i * (m ? g[0] / m : 0), x = o * (b ? g[1] / b : 0);
        d[0] = Math.min(d[0], y), d[1] = Math.min(d[1], x);
      });
    }
    var f = pr(t, this, "dragControlStart", r, function(d, p) {
      return yn(t, d, e, p);
    });
    s(), u();
    var l = function(d) {
      n.setFixedDirection(d), f.forEach(function(p, h) {
        p.setFixedDirection(d), yn(t, p.moveable, e, a[h]);
      });
    };
    e.setFixedDirection = l;
    var v = M(M({}, n), { targets: t.props.targets, events: f.map(function(d) {
      return M(M({}, d), { setMin: function(p) {
        d.setMin(p), s();
      }, setMax: function(p) {
        d.setMax(p), u();
      } });
    }), setFixedDirection: l, setMin: function(d) {
      n.setMin(d), s();
    }, setMax: function(d) {
      n.setMax(d), u();
    } }), c = K(t, "onResizeGroupStart", v);
    return e.isResize = c !== !1, e.isResize ? n : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isResize) {
      var n = Nr(t.props, "resizable");
      Wn(t, "onBeforeResize", function(d) {
        K(t, "onBeforeResizeGroup", lt(t, r, M(M({}, d), { targets: n.targets }), !0));
      });
      var a = this.dragControl(t, M(M({}, r), { isGroup: !0 }));
      if (a) {
        var i = a.boundingWidth, o = a.boundingHeight, s = a.dist, u = n.keepRatio, f = [
          i / (i - s[0]),
          o / (o - s[1])
        ], l = e.fixedPosition, v = pr(t, this, "dragControl", r, function(d, p) {
          var h = T(Gt(Le(t.rotation / 180 * Math.PI, 3), [
            p.datas.originalX * f[0],
            p.datas.originalY * f[1],
            1
          ], 3), 2), g = h[0], m = h[1];
          return M(M({}, p), { parentDist: null, parentScale: f, dragClient: ht(l, [g, m]), parentKeepRatio: u });
        }), c = M({ targets: n.targets, events: v }, a);
        return K(t, "onResizeGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isResize) {
      this.dragControlEnd(t, r);
      var a = pr(t, this, "dragControlEnd", r), i = Kt(t, r, {
        targets: t.props.targets,
        events: a
      });
      return K(t, "onResizeGroupEnd", i), e;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = 0, a = !1, i = t.getRect();
    return {
      isControl: !0,
      requestStart: function(o) {
        var s;
        return a = o.useSnap, {
          datas: r,
          parentDirection: o.direction || [1, 1],
          parentIsWidth: (s = o == null ? void 0 : o.horizontal) !== null && s !== void 0 ? s : !0,
          useSnap: a
        };
      },
      request: function(o) {
        return "offsetWidth" in o ? e = o.offsetWidth - i.offsetWidth : "deltaWidth" in o && (e += o.deltaWidth), "offsetHeight" in o ? n = o.offsetHeight - i.offsetHeight : "deltaHeight" in o && (n += o.deltaHeight), {
          datas: r,
          parentDist: [e, n],
          parentKeepRatio: o.keepRatio,
          useSnap: a
        };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: a };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.resizable = null;
  }
};
function Zn(t, r, e, n, a) {
  var i = t.props.groupable, o = t.state, s = o.is3d ? 4 : 3, u = r.origin, f = Dt(
    t.state.rootMatrix,
    // TO-DO #710
    rt([u[0], u[1]], i ? [0, 0] : [o.left, o.top]),
    s
  ), l = ht([a.left, a.top], f);
  r.startAbsoluteOrigin = l, r.prevDeg = Mt(l, [e, n]) / Math.PI * 180, r.defaultDeg = r.prevDeg, r.prevSnapDeg = 0, r.loop = 0, r.startDist = dr(l, [e, n]);
}
function cn(t, r, e) {
  var n = e.defaultDeg, a = e.prevDeg, i = a % 360, o = Math.floor(a / 360);
  i < 0 && (i += 360), i > t && i > 270 && t < 90 ? ++o : i < t && i < 90 && t > 270 && --o;
  var s = r * (o * 360 + t - n);
  return e.prevDeg = n + s, s;
}
function Jn(t, r, e, n) {
  return cn(Mt(n.startAbsoluteOrigin, [t, r]) / Math.PI * 180, e, n);
}
function Qn(t, r, e, n, a, i) {
  var o = t.props.throttleRotate, s = o === void 0 ? 0 : o, u = e.prevSnapDeg, f = 0, l = !1;
  if (i) {
    var v = Jv(t, r, n, a + n);
    l = v.isSnap, f = a + v.dist;
  }
  l || (f = ot(a + n, s));
  var c = f - a;
  return e.prevSnapDeg = c, [c - u, c, f];
}
function wu(t, r, e) {
  var n = T(r, 4), a = n[0], i = n[1], o = n[2], s = n[3];
  if (t === "none")
    return [];
  if (Ot(t))
    return t.map(function(g) {
      return wu(g, [a, i, o, s], e)[0];
    });
  var u = T((t || "top").split("-"), 2), f = u[0], l = u[1], v = [a, i];
  f === "left" ? v = [o, a] : f === "right" ? v = [i, s] : f === "bottom" && (v = [s, o]);
  var c = [
    (v[0][0] + v[1][0]) / 2,
    (v[0][1] + v[1][1]) / 2
  ], d = Iu(v, e);
  if (l) {
    var p = l === "top" || l === "left", h = f === "bottom" || f === "left";
    c = v[p && !h || !p && h ? 0 : 1];
  }
  return [[c, d]];
}
function Pa(t, r) {
  if (r.isRequest)
    return r.requestAble === "rotatable";
  var e = r.inputEvent.target;
  if (Pt(e, Q("rotation-control")) || t.props.rotateAroundControls && Pt(e, Q("around-control")) || Pt(e, Q("control")) && Pt(e, Q("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? mi(n, !0).some(function(a) {
    return a ? e === a || e.contains(a) : !1;
  }) : !1;
}
var Fv = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, Nv = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [Fv],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? Q("view-rotation-dragging") : "";
  },
  render: function(t, r) {
    var e = Nr(t.props, "rotatable"), n = e.rotatable, a = e.rotationPosition, i = e.zoom, o = e.renderDirections, s = e.rotateAroundControls, u = e.resolveAblesWithRotatable, f = t.getState(), l = f.renderPoses, v = f.direction;
    if (!n)
      return null;
    var c = wu(a, l, v), d = [];
    if (c.forEach(function(m, b) {
      var y = T(m, 2), x = y[0], E = y[1];
      d.push(r.createElement(
        "div",
        { key: "rotation".concat(b), className: Q("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(x[0], "px, ").concat(x[1], "px) rotate(").concat(E, "rad)")
        } },
        r.createElement("div", { className: Q("line rotation-line"), style: {
          transform: "scaleX(".concat(i, ")")
        } }),
        r.createElement("div", { className: Q("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(i, ")")
        } })
      ));
    }), o) {
      var p = gr(u || {}), h = {};
      p.forEach(function(m) {
        u[m].forEach(function(b) {
          h[b] = m;
        });
      });
      var g = [];
      Ot(o) && (g = o.map(function(m) {
        var b = h[m];
        return {
          data: b ? { resolve: b } : {},
          classNames: b ? ["move"] : [],
          dir: m
        };
      })), d.push.apply(d, L([], T(ou(t, "rotatable", g, r)), !1));
    }
    return s && d.push.apply(d, L([], T(cu(t, r)), !1)), d;
  },
  dragControlCondition: Pa,
  dragControlStart: function(t, r) {
    var e, n, a = r.datas, i = r.clientX, o = r.clientY, s = r.parentRotate, u = r.parentFlag, f = r.isPinch, l = r.isRequest, v = t.state, c = v.target, d = v.left, p = v.top, h = v.direction, g = v.beforeDirection, m = v.targetTransform, b = v.moveableClientRect, y = v.offsetMatrix, x = v.targetMatrix, E = v.allMatrix, S = v.width, C = v.height;
    if (!l && !c)
      return !1;
    var w = t.getRect();
    a.rect = w, a.transform = m, a.left = d, a.top = p;
    var D = function(j) {
      var q = Eu(t.state, j);
      a.fixedDirection = q.fixedDirection, a.fixedOffset = q.fixedOffset, a.fixedPosition = q.fixedPosition, k && k.setFixedPosition(j);
    }, _ = function(j) {
      var q = Av(t.state, j);
      a.fixedDirection = q.fixedDirection, a.fixedOffset = q.fixedOffset, a.fixedPosition = q.fixedPosition, k && k.setFixedDirection(j);
    }, z = i, O = o;
    if (l || f || u) {
      var R = s || 0;
      a.beforeInfo = {
        origin: w.beforeOrigin,
        prevDeg: R,
        defaultDeg: R,
        prevSnapDeg: 0,
        startDist: 0
      }, a.afterInfo = M(M({}, a.beforeInfo), { origin: w.origin }), a.absoluteInfo = M(M({}, a.beforeInfo), { origin: w.origin, startValue: R });
    } else {
      var P = (n = r.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (P) {
        var I = P.getAttribute("data-direction") || "", B = qc[I];
        if (B) {
          a.isControl = !0, a.isAroundControl = Pt(P, Q("around-control")), a.controlDirection = B;
          var W = P.getAttribute("data-resolve");
          W && (a.resolveAble = W);
          var G = pd(v.rootMatrix, v.renderPoses, b);
          e = T(It(G, B), 2), z = e[0], O = e[1];
        }
      }
      a.beforeInfo = { origin: w.beforeOrigin }, a.afterInfo = { origin: w.origin }, a.absoluteInfo = {
        origin: w.origin,
        startValue: w.rotation
      };
      var H = D;
      D = function(j) {
        var q = v.is3d ? 4 : 3, U = T(ht(Ns(x, q), j), 2), J = U[0], at = U[1], dt = Gt(y, Gr([J, at], q)), X = Gt(E, Gr([j[0], j[1]], q));
        H(j);
        var Z = v.posDelta;
        a.beforeInfo.origin = rt(dt, Z), a.afterInfo.origin = rt(X, Z), a.absoluteInfo.origin = rt(X, Z), Zn(t, a.beforeInfo, z, O, b), Zn(t, a.afterInfo, z, O, b), Zn(t, a.absoluteInfo, z, O, b);
      }, _ = function(j) {
        var q = It([
          [0, 0],
          [S, 0],
          [0, C],
          [S, C]
        ], j);
        D(q);
      };
    }
    a.startClientX = z, a.startClientY = O, a.direction = h, a.beforeDirection = g, a.startValue = 0, a.datas = {}, kn(t, r, "rotate");
    var N = !1, k = !1;
    if (a.isControl && a.resolveAble) {
      var Y = a.resolveAble;
      Y === "resizable" && (k = za.dragControlStart(t, M(M({}, new ee("resizable").dragStart([0, 0], r)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    k || (N = Nt.dragStart(t, new ee().dragStart([0, 0], r))), D(hd(t));
    var $ = lt(t, r, M(M({ set: function(j) {
      a.startValue = j * Math.PI / 180;
    }, setFixedDirection: _, setFixedPosition: D }, Bn(t, r)), { dragStart: N, resizeStart: k })), V = K(t, "onRotateStart", $);
    return a.isRotate = V !== !1, v.snapRenderInfo = {
      request: r.isRequest
    }, a.isRotate ? $ : !1;
  },
  dragControl: function(t, r) {
    var e, n, a, i = r.datas, o = r.clientDistX, s = r.clientDistY, u = r.parentRotate, f = r.parentFlag, l = r.isPinch, v = r.groupDelta, c = r.resolveMatrix, d = i.beforeDirection, p = i.beforeInfo, h = i.afterInfo, g = i.absoluteInfo, m = i.isRotate, b = i.startValue, y = i.rect, x = i.startClientX, E = i.startClientY;
    if (m) {
      Pn(t, r, "rotate");
      var S = Vc(r), C = d * S, w = t.props.parentMoveable, D = 0, _, z, O = 0, R, P, I = 0, B, W, G = 180 / Math.PI * b, H = g.startValue, N = !1, k = x + o, Y = E + s;
      if (!f && "parentDist" in r) {
        var $ = r.parentDist;
        _ = $, R = $, B = $;
      } else
        l || f ? (_ = cn(u, d, p), R = cn(u, C, h), B = cn(u, C, g)) : (_ = Jn(k, Y, d, p), R = Jn(k, Y, C, h), B = Jn(k, Y, C, g), N = !0);
      if (z = G + _, P = G + R, W = H + B, K(t, "onBeforeRotate", lt(t, r, {
        beforeRotation: z,
        rotation: P,
        absoluteRotation: W,
        setRotation: function(pt) {
          R = pt - G, _ = R, B = R;
        }
      }, !0)), e = T(Qn(t, y, p, _, G, N), 3), D = e[0], _ = e[1], z = e[2], n = T(Qn(t, y, h, R, G, N), 3), O = n[0], R = n[1], P = n[2], a = T(Qn(t, y, g, B, H, N), 3), I = a[0], B = a[1], W = a[2], !(!I && !O && !D && !w && !c)) {
        var V = In(i, "rotate(".concat(P, "deg)"), "rotate(".concat(R, "deg)"));
        c && (i.fixedPosition = ii(t, i.targetAllTransform, i.fixedDirection, i.fixedOffset, i));
        var j = nv(t, R, i), q = rt(ht(v || [0, 0], j), i.prevInverseDist || [0, 0]);
        i.prevInverseDist = j, i.requestValue = null;
        var U = nu(t, V, q, l, r), J = U, at = dr([k, Y], g.startAbsoluteOrigin) - g.startDist, dt = void 0;
        if (i.resolveAble === "resizable") {
          var X = za.dragControl(t, M(M({}, qe(r, t.state, [r.deltaX, r.deltaY], !!l, !1, "resizable")), { resolveMatrix: !0, parentDistance: at }));
          X && (dt = X, J = Au(J, X, r));
        }
        var Z = lt(t, r, M(M({ delta: O, dist: R, rotate: P, rotation: P, beforeDist: _, beforeDelta: D, beforeRotate: z, beforeRotation: z, absoluteDist: B, absoluteDelta: I, absoluteRotate: W, absoluteRotation: W, isPinch: !!l, resize: dt }, U), J));
        return K(t, "onRotate", Z), Z;
      }
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      e.isRotate = !1;
      var n = Kt(t, r, {});
      return K(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: Pa,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = t.state, a = n.left, i = n.top, o = n.beforeOrigin, s = this.dragControlStart(t, r);
    if (!s)
      return !1;
    s.set(e.beforeDirection * t.rotation);
    var u = pr(t, this, "dragControlStart", r, function(v, c) {
      var d = v.state, p = d.left, h = d.top, g = d.beforeOrigin, m = ht(rt([p, h], [a, i]), rt(g, o));
      return c.datas.startGroupClient = m, c.datas.groupClient = m, M(M({}, c), { parentRotate: 0 });
    }), f = M(M({}, s), { targets: t.props.targets, events: u }), l = K(t, "onRotateGroupStart", f);
    return e.isRotate = l !== !1, e.isRotate ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      Wn(t, "onBeforeRotate", function(f) {
        K(t, "onBeforeRotateGroup", lt(t, r, M(M({}, f), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var a = e.beforeDirection, i = n.beforeDist, o = i / 180 * Math.PI, s = pr(t, this, "dragControl", r, function(f, l) {
          var v = l.datas.startGroupClient, c = T(l.datas.groupClient, 2), d = c[0], p = c[1], h = T(He(v, o * a), 2), g = h[0], m = h[1], b = [g - d, m - p];
          return l.datas.groupClient = [g, m], M(M({}, l), { parentRotate: i, groupDelta: b });
        });
        t.rotation = a * n.beforeRotation;
        var u = M({ targets: t.props.targets, events: s, set: function(f) {
          t.rotation = f;
        }, setGroupRotation: function(f) {
          t.rotation = f;
        } }, n);
        return K(t, "onRotateGroup", u), u;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, r);
      var a = pr(t, this, "dragControlEnd", r), i = Kt(t, r, {
        targets: t.props.targets,
        events: a
      });
      return K(t, "onRotateGroupEnd", i), e;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = t.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(a) {
        return "deltaRotate" in a ? e += a.deltaRotate : "rotate" in a && (e = a.rotate - n), { datas: r, parentDist: e };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function Wv(t, r) {
  var e, n = t.direction, a = t.classNames, i = t.size, o = t.pos, s = t.zoom, u = t.key, f = n === "horizontal", l = f ? "Y" : "X";
  return r.createElement("div", {
    key: u,
    className: a.join(" "),
    style: (e = {}, e[f ? "width" : "height"] = "".concat(i), e.transform = "translate(".concat(o[0], ", ").concat(o[1], ") translate").concat(l, "(-50%) scale").concat(l, "(").concat(s, ")"), e)
  });
}
function ci(t, r) {
  return Wv(M(M({}, t), { classNames: L([
    Q("line", "guideline", t.direction)
  ], T(t.classNames), !1).filter(function(e) {
    return e;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(e) {
    return "".concat(ot(e, 0.1), "px");
  }) }), r);
}
function co(t, r, e, n, a, i, o, s) {
  var u = t.props.zoom;
  return e.map(function(f, l) {
    var v = f.type, c = f.pos, d = [0, 0];
    return d[o] = n, d[o ? 0 : 1] = -a + c, ci({
      key: "".concat(r, "TargetGuideline").concat(l),
      classNames: [Q("target", "bold", v)],
      posValue: d,
      sizeValue: i,
      zoom: u,
      direction: r
    }, s);
  });
}
function vo(t, r, e, n, a, i) {
  var o = t.props, s = o.zoom, u = o.isDisplayInnerSnapDigit, f = r === "horizontal" ? wr : _r, l = a[f.start], v = a[f.end];
  return e.filter(function(c) {
    var d = c.hide, p = c.elementRect;
    if (d)
      return !1;
    if (u && p) {
      var h = p.rect;
      if (h[f.start] <= l && v <= h[f.end])
        return !1;
    }
    return !0;
  }).map(function(c, d) {
    var p = c.pos, h = c.size, g = c.element, m = c.className, b = [
      -n[0] + p[0],
      -n[1] + p[1]
    ];
    return ci({
      key: "".concat(r, "-default-guideline-").concat(d),
      classNames: g ? [Q("bold"), m] : [Q("normal"), m],
      direction: r,
      posValue: b,
      sizeValue: h,
      zoom: s
    }, i);
  });
}
function ge(t, r, e, n, a, i, o, s) {
  var u, f = t.props, l = f.snapDigit, v = l === void 0 ? 0 : l, c = f.isDisplaySnapDigit, d = c === void 0 ? !0 : c, p = f.snapDistFormat, h = p === void 0 ? function(E, S) {
    return E;
  } : p, g = f.zoom, m = r === "horizontal" ? "X" : "Y", b = r === "vertical" ? "height" : "width", y = Math.abs(a), x = d ? parseFloat(y.toFixed(v)) : 0;
  return s.createElement(
    "div",
    { key: "".concat(r, "-").concat(e, "-guideline-").concat(n), className: Q("guideline-group", r), style: (u = {
      left: "".concat(i[0], "px"),
      top: "".concat(i[1], "px")
    }, u[b] = "".concat(y, "px"), u) },
    ci({
      direction: r,
      classNames: [Q(e), o],
      size: "100%",
      posValue: [0, 0],
      sizeValue: y,
      zoom: g
    }, s),
    s.createElement("div", { className: Q("size-value", "gap"), style: {
      transform: "translate".concat(m, "(-50%) scale(").concat(g, ")")
    } }, x > 0 ? h(x, r) : "")
  );
}
function Hv(t, r, e, n) {
  var a = t === "vertical" ? 0 : 1, i = t === "vertical" ? 1 : 0, o = a ? wr : _r, s = e[o.start], u = e[o.end];
  return Fu(r, function(f) {
    return f.pos[a];
  }).map(function(f) {
    var l = [], v = [], c = [];
    return f.forEach(function(d) {
      var p, h, g = d.element, m = d.elementRect.rect;
      if (m[o.end] < s)
        l.push(d);
      else if (u < m[o.start])
        v.push(d);
      else if (m[o.start] <= s && u <= m[o.end] && n) {
        var b = d.pos, y = { element: g, rect: M(M({}, m), (p = {}, p[o.end] = m[o.start], p)) }, x = { element: g, rect: M(M({}, m), (h = {}, h[o.start] = m[o.end], h)) }, E = [0, 0], S = [0, 0];
        E[a] = b[a], E[i] = b[i], S[a] = b[a], S[i] = b[i] + d.size, l.push({
          type: t,
          pos: E,
          size: 0,
          elementRect: y,
          direction: "",
          elementDirection: "end"
        }), v.push({
          type: t,
          pos: S,
          size: 0,
          elementRect: x,
          direction: "",
          elementDirection: "start"
        });
      }
    }), l.sort(function(d, p) {
      return p.pos[i] - d.pos[i];
    }), v.sort(function(d, p) {
      return d.pos[i] - p.pos[i];
    }), {
      total: f,
      start: l,
      end: v,
      inner: c
    };
  });
}
function Lv(t, r, e, n, a) {
  var i = t.props.isDisplayInnerSnapDigit, o = [];
  return ["vertical", "horizontal"].forEach(function(s) {
    var u = r.filter(function(g) {
      return g.type === s;
    }), f = s === "vertical" ? 1 : 0, l = f ? 0 : 1, v = Hv(s, u, n, i), c = f ? _r : wr, d = f ? wr : _r, p = n[c.start], h = n[c.end];
    v.forEach(function(g) {
      var m = g.total, b = g.start, y = g.end, x = g.inner, E = e[l] + m[0].pos[l] - n[d.start], S = n;
      b.forEach(function(C) {
        var w = C.elementRect.rect, D = S[c.start] - w[c.end];
        if (D > 0) {
          var _ = [0, 0];
          _[f] = e[f] + S[c.start] - p - D, _[l] = E, o.push(ge(t, s, "dashed", o.length, D, _, C.className, a));
        }
        S = w;
      }), S = n, y.forEach(function(C) {
        var w = C.elementRect.rect, D = w[c.start] - S[c.end];
        if (D > 0) {
          var _ = [0, 0];
          _[f] = e[f] + S[c.end] - p, _[l] = E, o.push(ge(t, s, "dashed", o.length, D, _, C.className, a));
        }
        S = w;
      }), x.forEach(function(C) {
        var w = C.elementRect.rect, D = p - w[c.start], _ = w[c.end] - h, z = [0, 0], O = [0, 0];
        z[f] = e[f] - D, z[l] = E, O[f] = e[f] + h - p, O[l] = E, o.push(ge(t, s, "dashed", o.length, D, z, C.className, a)), o.push(ge(t, s, "dashed", o.length, _, O, C.className, a));
      });
    });
  }), o;
}
function Yv(t, r, e, n, a) {
  var i = [];
  return ["horizontal", "vertical"].forEach(function(o) {
    var s = r.filter(function(g) {
      return g.type === o;
    }).slice(0, 1), u = o === "vertical" ? 0 : 1, f = u ? 0 : 1, l = u ? _r : wr, v = u ? wr : _r, c = n[l.start], d = n[l.end], p = n[v.start], h = n[v.end];
    s.forEach(function(g) {
      var m = g.gap, b = g.gapRects, y = Math.max.apply(Math, L([p], T(b.map(function(S) {
        var C = S.rect;
        return C[v.start];
      })), !1)), x = Math.min.apply(Math, L([h], T(b.map(function(S) {
        var C = S.rect;
        return C[v.end];
      })), !1)), E = (y + x) / 2;
      y === x || E === (p + h) / 2 || b.forEach(function(S) {
        var C = S.rect, w = S.className, D = [e[0], e[1]];
        if (C[l.end] < c)
          D[u] += C[l.end] - c;
        else if (d < C[l.start])
          D[u] += C[l.start] - c - m;
        else
          return;
        D[f] += E - p, i.push(ge(t, u ? "vertical" : "horizontal", "gap", i.length, m, D, w, a));
      });
    });
  }), i;
}
function Ia(t) {
  var r, e, n = t.state, a = n.containerClientRect, i = n.hasFixed, o = a.overflow, s = a.scrollHeight, u = a.scrollWidth, f = a.clientHeight, l = a.clientWidth, v = a.clientLeft, c = a.clientTop, d = t.props, p = d.snapGap, h = p === void 0 ? !0 : p, g = d.verticalGuidelines, m = d.horizontalGuidelines, b = d.snapThreshold, y = b === void 0 ? 5 : b, x = d.maxSnapElementGuidelineDistance, E = x === void 0 ? 1 / 0 : x, S = d.isDisplayGridGuidelines, C = Jt(tr(t.state)), w = C.top, D = C.left, _ = C.bottom, z = C.right, O = { top: w, left: D, bottom: _, right: z, center: (D + z) / 2, middle: (w + _) / 2 }, R = jv(t), P = L([], T(R), !1), I = ((e = (r = n.snapThresholdInfo) === null || r === void 0 ? void 0 : r.multiples) !== null && e !== void 0 ? e : [1, 1]).map(function(H) {
    return H * y;
  });
  h && P.push.apply(P, L([], T(Xv(t, O, I)), !1));
  var B = M({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (P.push.apply(P, L([], T(Vv(t, o ? u : l, o ? s : f, v, c, B, S)), !1)), i) {
    var W = a.left, G = a.top;
    B.left += W, B.top += G, B.right += W, B.bottom += G;
  }
  return P.push.apply(P, L([], T(Cu(m || !1, g || !1, o ? u : l, o ? s : f, v, c, B)), !1)), P = P.filter(function(H) {
    var N = H.element, k = H.elementRect, Y = H.type;
    if (!N || !k)
      return !0;
    var $ = k.rect;
    return _u(O, $, Y, E);
  }), P;
}
function Xv(t, r, e) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, i = a === void 0 ? 1 / 0 : a, o = n.maxSnapElementGapDistance, s = o === void 0 ? 1 / 0 : o, u = t.state.elementRects, f = [];
  return [
    ["vertical", wr, _r],
    ["horizontal", _r, wr]
  ].forEach(function(l) {
    var v = T(l, 3), c = v[0], d = v[1], p = v[2], h = r[d.start], g = r[d.end], m = r[d.center], b = r[p.start], y = r[p.end], x = {
      left: e[0],
      top: e[1]
    };
    function E(w) {
      var D = w.rect, _ = x[d.start];
      return D[d.end] < h + _ ? h - D[d.end] : g - _ < D[d.start] ? D[d.start] - g : -1;
    }
    var S = u.filter(function(w) {
      var D = w.rect;
      return D[p.start] > y || D[p.end] < b ? !1 : E(w) > 0;
    }).sort(function(w, D) {
      return E(w) - E(D);
    }), C = [];
    S.forEach(function(w) {
      S.forEach(function(D) {
        if (w !== D) {
          var _ = w.rect, z = D.rect, O = _[p.start], R = _[p.end], P = z[p.start], I = z[p.end];
          O > I || P > R || C.push([w, D]);
        }
      });
    }), C.forEach(function(w) {
      var D = T(w, 2), _ = D[0], z = D[1], O = _.rect, R = z.rect, P = O[d.start], I = O[d.end], B = R[d.start], W = R[d.end], G = x[d.start], H = 0, N = 0, k = !1, Y = !1, $ = !1;
      if (I <= h && g <= B) {
        if (Y = !0, H = (B - I - (g - h)) / 2, N = I + H + (g - h) / 2, A(N - m) > G)
          return;
      } else if (I < B && W < h + G) {
        if (k = !0, H = B - I, N = W + H, A(N - h) > G)
          return;
      } else if (I < B && g - G < P) {
        if ($ = !0, H = B - I, N = P - H, A(N - g) > G)
          return;
      } else
        return;
      H && _u(r, R, c, i) && (H > s || f.push({
        type: c,
        pos: c === "vertical" ? [N, 0] : [0, N],
        element: z.element,
        size: 0,
        className: z.className,
        isStart: k,
        isCenter: Y,
        isEnd: $,
        gap: H,
        hide: !0,
        gapRects: [_, z],
        direction: "",
        elementDirection: ""
      }));
    });
  }), f;
}
function qv(t, r, e, n) {
  var a, i, o = t.props, s = t.state, u = o.snapGridAll, f = o.snapGridWidth, l = f === void 0 ? 0 : f, v = o.snapGridHeight, c = v === void 0 ? 0 : v, d = s.snapRenderInfo, p = d && (((a = d.direction) === null || a === void 0 ? void 0 : a[0]) || ((i = d.direction) === null || i === void 0 ? void 0 : i[1])), h = t.moveables;
  if (u && h && p && (l || c)) {
    if (s.snapThresholdInfo)
      return;
    s.snapThresholdInfo = {
      multiples: [1, 1],
      offset: [0, 0]
    };
    var g = t.getRect(), m = g.children, b = d.direction;
    if (m) {
      var y = b.map(function(E, S) {
        var C = S === 0 ? {
          snapSize: l,
          posName: "left",
          sizeName: "width",
          clientOffset: n.left - r
        } : {
          snapSize: c,
          posName: "top",
          sizeName: "height",
          clientOffset: n.top - e
        }, w = C.snapSize, D = C.posName, _ = C.sizeName, z = C.clientOffset;
        if (!w)
          return {
            dir: E,
            multiple: 1,
            snapSize: w,
            snapOffset: 0
          };
        var O = g[_], R = g[D], P = hs(m.map(function(k) {
          return [
            k[D] - R,
            k[_],
            O - k[_] - k[D] + R
          ];
        })).filter(function(k) {
          return k;
        }).sort(function(k, Y) {
          return k - Y;
        }), I = P[0], B = P.map(function(k) {
          return ot(k / I, 0.1) * w;
        }), W = 1, G = ot(O / I, 0.1);
        for (W = 1; W <= 10 && !B.every(function(k) {
          return k * W % 1 === 0;
        }); ++W)
          ;
        var H = (-E + 1) / 2, N = pn(R - z, R - z + O, H, 1 - H);
        return {
          multiple: G * W,
          dir: E,
          snapSize: w,
          snapOffset: Math.round(N / w)
        };
      }), x = y.map(function(E) {
        return E.multiple || 1;
      });
      s.snapThresholdInfo.multiples = x, s.snapThresholdInfo.offset = y.map(function(E) {
        return E.snapOffset;
      }), y.forEach(function(E, S) {
        E.snapSize;
      });
    }
  } else
    s.snapThresholdInfo = null;
}
function Vv(t, r, e, n, a, i, o) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var s = t.props, u = t.state, f = s.snapGridWidth, l = f === void 0 ? 0 : f, v = s.snapGridHeight, c = v === void 0 ? 0 : v, d = [], p = i.left, h = i.top, g = [0, 0];
  qv(t, n, a, i);
  var m = u.snapThresholdInfo, b = l, y = c;
  if (m && (l *= m.multiples[0] || 1, c *= m.multiples[1] || 1, g = m.offset), c) {
    for (var x = function(S) {
      d.push({
        type: "horizontal",
        pos: [
          p,
          ot(g[1] * y + S - a + h, 0.1)
        ],
        className: Q("grid-guideline"),
        size: r,
        hide: !o,
        direction: "",
        grid: !0
      });
    }, E = 0; E <= e * 2; E += c)
      x(E);
    for (var E = -c; E >= -e; E -= c)
      x(E);
  }
  if (l) {
    for (var x = function(C) {
      d.push({
        type: "vertical",
        pos: [
          ot(g[0] * b + C - n + p, 0.1),
          h
        ],
        className: Q("grid-guideline"),
        size: e,
        hide: !o,
        direction: "",
        grid: !0
      });
    }, E = 0; E <= r * 2; E += l)
      x(E);
    for (var E = -l; E >= -r; E -= l)
      x(E);
  }
  return d;
}
function _u(t, r, e, n) {
  return e === "horizontal" ? A(t.right - r.left) <= n || A(t.left - r.right) <= n || t.left <= r.right && r.left <= t.right : e === "vertical" ? A(t.bottom - r.top) <= n || A(t.top - r.bottom) <= n || t.top <= r.bottom && r.top <= t.bottom : !0;
}
function jv(t) {
  var r = t.state, e = t.props.elementGuidelines, n = e === void 0 ? [] : e;
  if (!n.length)
    return r.elementRects = [], [];
  var a = (r.elementRects || []).filter(function(c) {
    return !c.refresh;
  }), i = n.map(function(c) {
    return ar(c) && "element" in c ? M(M({}, c), { element: ur(c.element, !0) }) : {
      element: ur(c, !0)
    };
  }).filter(function(c) {
    return c.element;
  }), o = nc(a.map(function(c) {
    return c.element;
  }), i.map(function(c) {
    return c.element;
  })), s = o.maintained, u = o.added, f = [];
  s.forEach(function(c) {
    var d = T(c, 2), p = d[0], h = d[1];
    f[h] = a[p];
  }), $v(t, u.map(function(c) {
    return i[c];
  })).map(function(c, d) {
    f[u[d]] = c;
  }), r.elementRects = f;
  var l = si(t.props.elementSnapDirections), v = [];
  return f.forEach(function(c) {
    var d = c.element, p = c.top, h = p === void 0 ? l.top : p, g = c.left, m = g === void 0 ? l.left : g, b = c.right, y = b === void 0 ? l.right : b, x = c.bottom, E = x === void 0 ? l.bottom : x, S = c.center, C = S === void 0 ? l.center : S, w = c.middle, D = w === void 0 ? l.middle : w, _ = c.className, z = c.rect, O = ui({
      top: h,
      right: y,
      left: m,
      bottom: E,
      center: C,
      middle: D
    }, z), R = O.horizontal, P = O.vertical, I = O.horizontalNames, B = O.verticalNames, W = z.top, G = z.left, H = z.right - G, N = z.bottom - W, k = [H, N];
    P.forEach(function(Y, $) {
      v.push({
        type: "vertical",
        element: d,
        pos: [
          ot(Y, 0.1),
          W
        ],
        size: N,
        sizes: k,
        className: _,
        elementRect: c,
        elementDirection: no[B[$]] || B[$],
        direction: ""
      });
    }), R.forEach(function(Y, $) {
      v.push({
        type: "horizontal",
        element: d,
        pos: [
          G,
          ot(Y, 0.1)
        ],
        size: H,
        sizes: k,
        className: _,
        elementRect: c,
        elementDirection: no[I[$]] || I[$],
        direction: ""
      });
    });
  }), v;
}
function po(t, r) {
  return t ? t.map(function(e) {
    var n = ar(e) ? e : { pos: e }, a = n.pos;
    return te(a) ? n : M(M({}, n), { pos: yt(a, r) });
  }) : [];
}
function Cu(t, r, e, n, a, i, o) {
  a === void 0 && (a = 0), i === void 0 && (i = 0), o === void 0 && (o = { left: 0, top: 0, right: 0, bottom: 0 });
  var s = [], u = o.left, f = o.top, l = o.bottom, v = o.right, c = e + v - u, d = n + l - f;
  return po(t, d).forEach(function(p) {
    s.push({
      type: "horizontal",
      pos: [
        u,
        ot(p.pos - i + f, 0.1)
      ],
      size: c,
      className: p.className,
      direction: ""
    });
  }), po(r, c).forEach(function(p) {
    s.push({
      type: "vertical",
      pos: [
        ot(p.pos - a + u, 0.1),
        f
      ],
      size: d,
      className: p.className,
      direction: ""
    });
  }), s;
}
function $v(t, r) {
  if (!r.length)
    return [];
  var e = t.props.groupable, n = t.state, a = n.containerClientRect, i = n.rootMatrix, o = n.is3d, s = n.offsetDelta, u = o ? 4 : 3, f = T(bv(i, a, u), 2), l = f[0], v = f[1], c = e ? 0 : s[0], d = e ? 0 : s[1];
  return r.map(function(p) {
    var h = p.element.getBoundingClientRect(), g = h.left - l - c, m = h.top - v - d, b = m + h.height, y = g + h.width, x = T(ie(i, [g, m], u), 2), E = x[0], S = x[1], C = T(ie(i, [y, b], u), 2), w = C[0], D = C[1];
    return M(M({}, p), { rect: {
      left: E,
      right: w,
      top: S,
      bottom: D,
      center: (E + w) / 2,
      middle: (S + D) / 2
    } });
  });
}
function tn(t) {
  var r = t.state, e = r.container, n = t.props.snapContainer || e;
  if (r.snapContainer === n && r.guidelines && r.guidelines.length)
    return !1;
  var a = r.containerClientRect, i = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (e !== n) {
    var o = ur(n, !0);
    if (o) {
      var s = Ce(o), u = xo(r, [
        s.left - a.left,
        s.top - a.top
      ]), f = xo(r, [
        s.right - a.right,
        s.bottom - a.bottom
      ]);
      i.left = ot(u[0], 1e-5), i.top = ot(u[1], 1e-5), i.right = ot(f[0], 1e-5), i.bottom = ot(f[1], 1e-5);
    }
  }
  return r.snapContainer = n, r.snapOffset = i, r.guidelines = Ia(t), r.enableSnap = !0, !0;
}
function Du(t, r, e, n, a, i) {
  var o = Hr(t, r, e, i ? 4 : 3), s = It(o, n);
  return di(o, rt(a, s));
}
function ho(t) {
  return t ? t / A(t) : 0;
}
function Uv(t, r, e, n, a, i) {
  var o = i.fixedDirection, s = Ev(e, o, n), u = li(t, r, e, n), f = L(L([], T(Bv(t, r, s, n, a, i)), !1), T(xu(t, u, i)), !1), l = xn(f, 0), v = xn(f, 1);
  return {
    width: {
      isBound: l.isBound,
      offset: l.offset[0]
    },
    height: {
      isBound: v.isBound,
      offset: v.offset[1]
    }
  };
}
function Kv(t, r, e, n, a, i, o, s, u) {
  var f = It(r, o), l = Fn(t, s, {
    vertical: [f[0]],
    horizontal: [f[1]]
  }), v = l.horizontal.offset, c = l.vertical.offset;
  if (ot(c, Da) || ot(v, Da)) {
    var d = T(lr({
      datas: u,
      distX: -c,
      distY: -v
    }), 2), p = d[0], h = d[1], g = Math.min(a || 1 / 0, e + o[0] * p), m = Math.min(i || 1 / 0, n + o[1] * h);
    return [g - e, m - n];
  }
  return [0, 0];
}
function Mu(t, r, e, n, a, i, o, s) {
  for (var u = tr(t.state), f = t.props.keepRatio, l = 0, v = 0, c = 0; c < 2; ++c) {
    var d = r(l, v), p = Uv(t, d, a, f, o, s), h = p.width, g = p.height, m = h.isBound, b = g.isBound, y = h.offset, x = g.offset;
    if (c === 1 && (m || (y = 0), b || (x = 0)), c === 0 && o && !m && !b)
      return [0, 0];
    if (f) {
      var E = A(y) * (e ? 1 / e : 1), S = A(x) * (n ? 1 / n : 1), C = m && b ? E < S : b || !m && E < S;
      C ? y = e * x / n : x = n * y / e;
    }
    l += y, v += x;
  }
  if (!f && a[0] && a[1]) {
    var w = Gv(t, u, a, i, s), D = w.maxWidth, _ = w.maxHeight, z = T(Kv(t, r(l, v).map(function(P) {
      return P.map(function(I) {
        return ot(I, Da);
      });
    }), e + l, n + v, D, _, a, o, s), 2), y = z[0], x = z[1];
    l += y, v += x;
  }
  return [l, v];
}
function we(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function Zv(t, r) {
  r = we(r);
  var e = Math.floor(t / 360), n = e * 360 + 360 - r, a = e * 360 + r;
  return A(t - n) < A(t - a) ? n : a;
}
function ta(t, r) {
  t = we(t), r = we(r);
  var e = we(t - r);
  return Math.min(e, 360 - e);
}
function Jv(t, r, e, n) {
  var a, i = t.props, o = (a = i[vu]) !== null && a !== void 0 ? a : 5, s = i[du];
  if (ce(t, "rotatable")) {
    var u = r.pos1, f = r.pos2, l = r.pos3, v = r.pos4, c = r.origin, d = e * Math.PI / 180, p = [u, f, l, v].map(function(x) {
      return rt(x, c);
    }), h = p.map(function(x) {
      return He(x, d);
    }), g = L(L([], T(pv(t, p, h, c, e)), !1), T(Rv(t, p, h, c, e)), !1);
    g.sort(function(x, E) {
      return A(x - e) - A(E - e);
    });
    var m = g.length > 0;
    if (m)
      return {
        isSnap: m,
        dist: m ? g[0] : e
      };
  }
  if (s != null && s.length && o) {
    var b = s.slice().sort(function(x, E) {
      return ta(x, n) - ta(E, n);
    }), y = b[0];
    if (ta(y, n) <= o)
      return {
        isSnap: !0,
        dist: e + Zv(n, y) - n
      };
  }
  return {
    isSnap: !1,
    dist: e
  };
}
function Qv(t, r, e, n, a, i, o) {
  if (!ce(t, "resizable"))
    return [0, 0];
  var s = o.fixedDirection, u = o.nextAllMatrix, f = t.state, l = f.allMatrix, v = f.is3d;
  return Mu(t, function(c, d) {
    return Du(u || l, r + c, e + d, s, a, v);
  }, r, e, n, a, i, o);
}
function td(t, r, e, n, a) {
  if (!ce(t, "scalable"))
    return [0, 0];
  var i = a.startOffsetWidth, o = a.startOffsetHeight, s = a.fixedPosition, u = a.fixedDirection, f = a.is3d, l = Mu(t, function(v, c) {
    return Du(Qc(a, ht(r, [v / i, c / o])), i, o, u, s, f);
  }, i, o, e, s, n, a);
  return [l[0] / i, l[1] / o];
}
function rd(t, r) {
  r.absolutePoses = tr(t.state);
}
function go(t) {
  var r = [];
  return t.forEach(function(e) {
    e.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Vt(r, function(i) {
        return i.guideline === a;
      }) || (a.direction = "", r.push({ guideline: a, posInfo: e }));
    });
  }), r.map(function(e) {
    var n = e.guideline, a = e.posInfo;
    return M(M({}, n), { direction: a.direction });
  });
}
function mo(t, r, e, n, a, i) {
  var o = oi(Gn(t, i), r, e), s = o.vertical, u = o.horizontal, f = Ur();
  s.forEach(function(p) {
    p.isBound && (p.direction === "start" && (f.left = !0), p.direction === "end" && (f.right = !0), n.push({
      type: "bounds",
      pos: p.pos
    }));
  }), u.forEach(function(p) {
    p.isBound && (p.direction === "start" && (f.top = !0), p.direction === "end" && (f.bottom = !0), a.push({
      type: "bounds",
      pos: p.pos
    }));
  });
  var l = Tv(t), v = l.boundMap, c = l.vertical, d = l.horizontal;
  return c.forEach(function(p) {
    hr(n, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === p;
    }) >= 0 || n.push({
      type: "bounds",
      pos: p
    });
  }), d.forEach(function(p) {
    hr(a, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === p;
    }) >= 0 || a.push({
      type: "bounds",
      pos: p
    });
  }), {
    boundMap: f,
    innerBoundMap: v
  };
}
var ed = gi("", ["resizable", "scalable"]), nd = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    "snapGridAll",
    vu,
    du,
    pu,
    hu,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(t, r) {
    var e = t.state, n = e.top, a = e.left, i = e.pos1, o = e.pos2, s = e.pos3, u = e.pos4, f = e.snapRenderInfo, l = t.props.snapRenderThreshold, v = l === void 0 ? 1 : l;
    if (!f || !f.render || !ce(t, ""))
      return Zr(t, "boundMap", Ur(), function(V) {
        return JSON.stringify(V);
      }), Zr(t, "innerBoundMap", Ur(), function(V) {
        return JSON.stringify(V);
      }), [];
    e.guidelines = Ia(t);
    var c = Math.min(i[0], o[0], s[0], u[0]), d = Math.min(i[1], o[1], s[1], u[1]), p = f.externalPoses || [], h = tr(t.state), g = [], m = [], b = [], y = [], x = [], E = Jt(h), S = E.width, C = E.height, w = E.top, D = E.left, _ = E.bottom, z = E.right, O = { left: D, right: z, top: w, bottom: _, center: (D + z) / 2, middle: (w + _) / 2 }, R = p.length > 0, P = R ? Jt(p) : {};
    if (!f.request) {
      if (f.direction && x.push(Sv(t, h, f.direction, v, v)), f.snap) {
        var I = Jt(h);
        f.center && (I.middle = (I.top + I.bottom) / 2, I.center = (I.left + I.right) / 2), x.push(ao(t, I, v, v));
      }
      R && (f.center && (P.middle = (P.top + P.bottom) / 2, P.center = (P.left + P.right) / 2), x.push(ao(t, P, v, v))), x.forEach(function(V) {
        var j = V.vertical.posInfos, q = V.horizontal.posInfos;
        g.push.apply(g, L([], T(j.filter(function(U) {
          var J = U.guidelineInfos;
          return J.some(function(at) {
            var dt = at.guideline;
            return !dt.hide;
          });
        }).map(function(U) {
          return {
            type: "snap",
            pos: U.pos
          };
        })), !1)), m.push.apply(m, L([], T(q.filter(function(U) {
          var J = U.guidelineInfos;
          return J.some(function(at) {
            var dt = at.guideline;
            return !dt.hide;
          });
        }).map(function(U) {
          return {
            type: "snap",
            pos: U.pos
          };
        })), !1)), b.push.apply(b, L([], T(go(j)), !1)), y.push.apply(y, L([], T(go(q)), !1));
      });
    }
    var B = mo(t, [D, z], [w, _], g, m), W = B.boundMap, G = B.innerBoundMap;
    R && mo(t, [P.left, P.right], [P.top, P.bottom], g, m, f.externalBounds);
    var H = L(L([], T(b), !1), T(y), !1), N = H.filter(function(V) {
      return V.element && !V.gapRects;
    }), k = H.filter(function(V) {
      return V.gapRects;
    }).sort(function(V, j) {
      return V.gap - j.gap;
    });
    K(t, "onSnap", {
      guidelines: H.filter(function(V) {
        var j = V.element;
        return !j;
      }),
      elements: N,
      gaps: k
    }, !0);
    var Y = Zr(t, "boundMap", W, function(V) {
      return JSON.stringify(V);
    }, Ur()), $ = Zr(t, "innerBoundMap", G, function(V) {
      return JSON.stringify(V);
    }, Ur());
    return (W === Y || G === $) && K(t, "onBound", {
      bounds: W,
      innerBounds: G
    }, !0), L(L(L(L(L(L([], T(Lv(t, N, [c, d], O, r)), !1), T(Yv(t, k, [c, d], O, r)), !1), T(vo(t, "horizontal", y, [a, n], O, r)), !1), T(vo(t, "vertical", b, [a, n], O, r)), !1), T(co(t, "horizontal", m, c, n, S, 0, r)), !1), T(co(t, "vertical", g, d, a, C, 1, r)), !1);
  },
  dragStart: function(t, r) {
    t.state.snapRenderInfo = {
      request: r.isRequest,
      snap: !0,
      center: !0
    }, tn(t);
  },
  drag: function(t) {
    var r = t.state;
    tn(t) || (r.guidelines = Ia(t)), r.snapRenderInfo && (r.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, r) {
    if (ed(t, r) || Pa(t, r))
      return !0;
    if (!r.isRequest && r.inputEvent)
      return Pt(r.inputEvent.target, Q("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, tn(t);
  },
  dragControl: function(t) {
    this.drag(t);
  },
  dragControlEnd: function(t) {
    this.unset(t);
  },
  dragGroupStart: function(t, r) {
    this.dragStart(t, r);
  },
  dragGroup: function(t) {
    this.drag(t);
  },
  dragGroupEnd: function(t) {
    this.unset(t);
  },
  dragGroupControlStart: function(t) {
    t.state.snapRenderInfo = null, tn(t);
  },
  dragGroupControl: function(t) {
    this.drag(t);
  },
  dragGroupControlEnd: function(t) {
    this.unset(t);
  },
  unset: function(t) {
    var r = t.state;
    r.enableSnap = !1, r.guidelines = [], r.snapRenderInfo = null, r.elementRects = [];
  }
};
function ad(t, r) {
  return [
    t[0] * r[0],
    t[1] * r[1]
  ];
}
function Q() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return Kf.apply(void 0, L([ei], T(t), !1));
}
function Ru(t) {
  t();
}
function id(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : ar(t) ? t : Pe(t);
}
function _e(t, r, e) {
  return gn(r, Ar(e, r), t, Ar(e.map(function(n) {
    return -n;
  }), r));
}
function od(t, r, e) {
  if (r === "%") {
    var n = vi(t.ownerSVGElement);
    return n[e ? "width" : "height"] / 100;
  }
  return 1;
}
function sd(t) {
  var r = ud(pi(t, ":before"));
  return r.map(function(e, n) {
    var a = Ae(e), i = a.value, o = a.unit;
    return i * od(t, o, n === 0);
  });
}
function En(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function ud(t) {
  return En(t.transformOrigin);
}
function Tu(t) {
  var r = jt(t), e = r("transform");
  if (e && e !== "none")
    return e;
  if ("transform" in t) {
    var n = t.transform, a = n.baseVal;
    if (!a)
      return "";
    var i = a.length;
    if (!i)
      return "";
    for (var o = [], s = function(f) {
      var l = a[f].matrix;
      o.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(v) {
        return l[v];
      }).join(", "), ")"));
    }, u = 0; u < i; ++u)
      s(u);
    return o.join(" ");
  }
  return "";
}
function Be(t, r, e, n, a) {
  var i, o, s = qa(t) || Cr(t), u = !1, f, l;
  if (!t || e)
    f = t;
  else {
    var v = (i = t == null ? void 0 : t.assignedSlot) === null || i === void 0 ? void 0 : i.parentElement, c = t.parentElement;
    v ? (u = !0, l = c, f = v) : f = c;
  }
  for (var d = !1, p = t === r || f === r, h = "relative", g = 1, m = parseFloat(a == null ? void 0 : a("zoom")) || 1, b = a == null ? void 0 : a("position"); f && f !== s; ) {
    r === f && (p = !0);
    var y = jt(f), x = f.tagName.toLowerCase(), E = Tu(f), S = y("willChange"), C = parseFloat(y("zoom")) || 1;
    if (h = y("position"), n && C !== 1) {
      g = C;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !e && n && m !== 1 && b && b !== "absolute" || x === "svg" || x === "foreignobject" || h !== "static" || E && E !== "none" || S === "transform"
    )
      break;
    var w = (o = t == null ? void 0 : t.assignedSlot) === null || o === void 0 ? void 0 : o.parentNode, D = f.parentNode;
    w && (u = !0, l = D);
    var _ = D;
    if (_ && _.nodeType === 11) {
      f = _.host, d = !0, h = jt(f)("position");
      break;
    }
    f = _, h = "relative";
  }
  return {
    offsetZoom: g,
    hasSlot: u,
    parentSlotElement: l,
    isCustomElement: d,
    isStatic: h === "static",
    isEnd: p || !f || f === s,
    offsetParent: f || s
  };
}
function fd(t, r) {
  var e, n = t.tagName.toLowerCase(), a = t.offsetLeft, i = t.offsetTop, o = jt(t), s = Rn(a), u = !s, f, l;
  return !u && (n !== "svg" || t.ownerSVGElement) ? (f = $s ? sd(t) : En(o("transformOrigin")).map(function(v) {
    return parseFloat(v);
  }), l = f.slice(), u = !0, n === "svg" ? (a = 0, i = 0) : (e = T(vd(t, f, t === r && r.tagName.toLowerCase() === "g"), 4), a = e[0], i = e[1], f[0] = e[2], f[1] = e[3])) : (f = En(o("transformOrigin")).map(function(v) {
    return parseFloat(v);
  }), l = f.slice()), {
    tagName: n,
    isSVG: s,
    hasOffset: u,
    offset: [a || 0, i || 0],
    origin: f,
    targetOrigin: l
  };
}
function Ou(t, r) {
  var e = jt(t), n = jt(Cr(t)), a = n("position");
  if (!r && (!a || a === "static"))
    return [0, 0];
  var i = parseInt(n("marginLeft"), 10), o = parseInt(n("marginTop"), 10);
  return e("position") === "absolute" && ((e("top") !== "auto" || e("bottom") !== "auto") && (o = 0), (e("left") !== "auto" || e("right") !== "auto") && (i = 0)), [i, o];
}
function Ba(t) {
  t.forEach(function(r) {
    var e = r.matrix;
    e && (r.matrix = ir(e, 3, 4));
  });
}
function ld(t) {
  for (var r = t.parentElement, e = !1, n = Cr(t); r; ) {
    var a = pi(r).transform;
    if (a && a !== "none") {
      e = !0;
      break;
    }
    if (r === n)
      break;
    r = r.parentElement;
  }
  return {
    fixedContainer: r || n,
    hasTransform: e
  };
}
function Nn(t, r) {
  return r === void 0 && (r = t.length > 9), "".concat(r ? "matrix3d" : "matrix", "(").concat(Ws(t, !r).join(","), ")");
}
function vi(t) {
  var r = t.clientWidth, e = t.clientHeight;
  if (!t)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: r, clientHeight: e };
  var n = t.viewBox, a = n && n.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: a.x,
    y: a.y,
    width: a.width || r,
    height: a.height || e,
    clientWidth: r,
    clientHeight: e
  };
}
function cd(t, r) {
  var e, n = vi(t), a = n.width, i = n.height, o = n.clientWidth, s = n.clientHeight, u = o / a, f = s / i, l = t.preserveAspectRatio.baseVal, v = l.align, c = l.meetOrSlice, d = [0, 0], p = [u, f], h = [0, 0];
  if (v !== 1) {
    var g = (v - 2) % 3, m = Math.floor((v - 2) / 3);
    d[0] = a * g / 2, d[1] = i * m / 2;
    var b = c === 2 ? Math.max(f, u) : Math.min(u, f);
    p[0] = b, p[1] = b, h[0] = (o - a) / 2 * g, h[1] = (s - i) / 2 * m;
  }
  var y = Ja(p, r);
  return e = T(h, 2), y[r * (r - 1)] = e[0], y[r * (r - 1) + 1] = e[1], _e(y, r, d);
}
function vd(t, r, e) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !e && n === "g")
    return [0, 0, 0, 0];
  var a = jt(t), i = a("transform-box") === "fill-box", o = t.getBBox(), s = vi(t.ownerSVGElement), u = o.x, f = o.y;
  n === "foreignobject" && !u && !f && (u = parseFloat(t.getAttribute("x")) || 0, f = parseFloat(t.getAttribute("y")) || 0);
  var l = u - s.x, v = f - s.y, c = i ? r[0] : r[0] - l, d = i ? r[1] : r[1] - v;
  return [l, v, c, d];
}
function Dt(t, r, e) {
  return Gt(t, Gr(r, e), e);
}
function Hr(t, r, e, n) {
  return [[0, 0], [r, 0], [0, e], [r, e]].map(function(a) {
    return Dt(t, a, n);
  });
}
function Jt(t) {
  var r = t.map(function(f) {
    return f[0];
  }), e = t.map(function(f) {
    return f[1];
  }), n = Math.min.apply(Math, L([], T(r), !1)), a = Math.min.apply(Math, L([], T(e), !1)), i = Math.max.apply(Math, L([], T(r), !1)), o = Math.max.apply(Math, L([], T(e), !1)), s = i - n, u = o - a;
  return {
    left: n,
    top: a,
    right: i,
    bottom: o,
    width: s,
    height: u
  };
}
function bo(t, r, e, n) {
  var a = Hr(t, r, e, n);
  return Jt(a);
}
function dd(t, r, e, n, a) {
  var i, o = t.target, s = t.origin, u = r.matrix, f = Pu(o), l = f.offsetWidth, v = f.offsetHeight, c = e.getBoundingClientRect(), d = [0, 0];
  e === Cr(e) && (d = Ou(o, !0));
  for (var p = o.getBoundingClientRect(), h = p.left - c.left + e.scrollLeft - (e.clientLeft || 0) + d[0], g = p.top - c.top + e.scrollTop - (e.clientTop || 0) + d[1], m = p.width, b = p.height, y = gn(n, a, u), x = bo(y, l, v, n), E = x.left, S = x.top, C = x.width, w = x.height, D = Dt(y, s, n), _ = rt(D, [E, S]), z = [
    h + _[0] * m / C,
    g + _[1] * b / w
  ], O = [0, 0], R = 0; ++R < 10; ) {
    var P = fr(a, n);
    i = T(rt(Dt(P, z, n), Dt(P, D, n)), 2), O[0] = i[0], O[1] = i[1];
    var I = gn(n, a, Ar(O, n), u), B = bo(I, l, v, n), W = B.left, G = B.top, H = W - h, N = G - g;
    if (A(H) < 2 && A(N) < 2)
      break;
    z[0] -= H, z[1] -= N;
  }
  return O.map(function(k) {
    return Math.round(k);
  });
}
function pd(t, r, e) {
  var n = t.length === 16, a = n ? 4 : 3, i = r.map(function(u) {
    return Dt(t, u, a);
  }), o = e.left, s = e.top;
  return i.map(function(u) {
    return [u[0] + o, u[1] + s];
  });
}
function Qt(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function zu(t, r) {
  return Qt([
    r[0] - t[0],
    r[1] - t[1]
  ]);
}
function me(t, r, e, n) {
  e === void 0 && (e = 1), n === void 0 && (n = Mt(t, r));
  var a = zu(t, r);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(e, ")"),
    width: "".concat(a, "px")
  };
}
function wn(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var a = e.length, i = e.reduce(function(s, u) {
    return s + u[0];
  }, 0) / a, o = e.reduce(function(s, u) {
    return s + u[1];
  }, 0) / a;
  return {
    transform: "translateZ(0px) translate(".concat(i, "px, ").concat(o, "px) rotate(").concat(t, "rad) scale(").concat(r, ")")
  };
}
function Nr(t, r) {
  var e = t[r];
  return ar(e) ? M(M({}, t), e) : t;
}
function Pu(t) {
  var r = t && !Rn(t.offsetWidth), e = 0, n = 0, a = 0, i = 0, o = 0, s = 0, u = 0, f = 0, l = 0, v = 0, c = 0, d = 0, p = 1 / 0, h = 1 / 0, g = 1 / 0, m = 1 / 0, b = 0, y = 0, x = !1;
  if (t)
    if (!r && t.ownerSVGElement) {
      var E = t.getBBox();
      x = !0, e = E.width, n = E.height, o = e, s = n, u = e, f = n, a = e, i = n;
    } else {
      var S = jt(t), C = t.style, w = S("boxSizing") === "border-box", D = parseFloat(S("borderLeftWidth")) || 0, _ = parseFloat(S("borderRightWidth")) || 0, z = parseFloat(S("borderTopWidth")) || 0, O = parseFloat(S("borderBottomWidth")) || 0, R = parseFloat(S("paddingLeft")) || 0, P = parseFloat(S("paddingRight")) || 0, I = parseFloat(S("paddingTop")) || 0, B = parseFloat(S("paddingBottom")) || 0, W = R + P, G = I + B, H = D + _, N = z + O, k = W + H, Y = G + N, $ = S("position"), V = 0, j = 0;
      if ("clientLeft" in t) {
        var q = null;
        if ($ === "absolute") {
          var U = Be(t, Cr(t));
          q = U.offsetParent;
        } else
          q = t.parentElement;
        if (q) {
          var J = jt(q);
          V = parseFloat(J("width")), j = parseFloat(J("height"));
        }
      }
      l = Math.max(W, yt(S("minWidth"), V) || 0), v = Math.max(G, yt(S("minHeight"), j) || 0), p = yt(S("maxWidth"), V), h = yt(S("maxHeight"), j), isNaN(p) && (p = 1 / 0), isNaN(h) && (h = 1 / 0), b = yt(C.width, 0) || 0, y = yt(C.height, 0) || 0, o = parseFloat(S("width")) || 0, s = parseFloat(S("height")) || 0, u = A(o - b) < 1 ? va(l, b || o, p) : o, f = A(s - y) < 1 ? va(v, y || s, h) : s, e = u, n = f, a = u, i = f, w ? (g = p, m = h, c = l, d = v, u = e - k, f = n - Y) : (g = p + k, m = h + Y, c = l + k, d = v + Y, e = u + k, n = f + Y), a = u + W, i = f + G;
    }
  return {
    svg: x,
    offsetWidth: e,
    offsetHeight: n,
    clientWidth: a,
    clientHeight: i,
    contentWidth: u,
    contentHeight: f,
    inlineCSSWidth: b,
    inlineCSSHeight: y,
    cssWidth: o,
    cssHeight: s,
    minWidth: l,
    minHeight: v,
    maxWidth: p,
    maxHeight: h,
    minOffsetWidth: c,
    minOffsetHeight: d,
    maxOffsetWidth: g,
    maxOffsetHeight: m
  };
}
function Iu(t, r) {
  return Mt(r > 0 ? t[0] : t[1], r > 0 ? t[1] : t[0]);
}
function rn() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function Bu(t, r) {
  var e = t === Cr(t) || t === qa(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return e && (n.clientHeight = Math.max(r.height, n.clientHeight), n.scrollHeight = Math.max(r.height, n.scrollHeight)), n.overflow = jt(t)("overflow") !== "visible", M(M({}, r), n);
}
function ra(t, r, e, n) {
  var a = t.left, i = t.right, o = t.top, s = t.bottom, u = r.top, f = r.left, l = {
    left: f + a,
    top: u + o,
    right: f + i,
    bottom: u + s,
    width: i - a,
    height: s - o
  };
  return e && n ? Bu(e, l) : l;
}
function Ce(t, r) {
  var e = 0, n = 0, a = 0, i = 0;
  if (t) {
    var o = t.getBoundingClientRect();
    e = o.left, n = o.top, a = o.width, i = o.height;
  }
  var s = {
    left: e,
    top: n,
    width: a,
    height: i,
    right: e + a,
    bottom: n + i
  };
  return t && r ? Bu(t, s) : s;
}
function hd(t) {
  var r = t.props, e = r.groupable, n = r.svgOrigin, a = t.getState(), i = a.offsetWidth, o = a.offsetHeight, s = a.svg, u = a.transformOrigin;
  return !e && s && n ? bi(n, i, o) : u;
}
function ku(t, r, e, n) {
  var a;
  if (t)
    a = t;
  else if (r)
    a = [0, 0];
  else {
    var i = e.target;
    a = Gu(i, n);
  }
  return a;
}
function Gu(t, r) {
  if (t) {
    var e = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (r.deg = e, !!n) {
      var a = [0, 0];
      return n.indexOf("w") > -1 && (a[0] = -1), n.indexOf("e") > -1 && (a[0] = 1), n.indexOf("n") > -1 && (a[1] = -1), n.indexOf("s") > -1 && (a[1] = 1), a;
    }
  }
}
function di(t, r) {
  return [
    ht(r, t[0]),
    ht(r, t[1]),
    ht(r, t[2]),
    ht(r, t[3])
  ];
}
function tr(t) {
  var r = t.left, e = t.top, n = t.pos1, a = t.pos2, i = t.pos3, o = t.pos4;
  return di([n, a, i, o], [r, e]);
}
function ka(t, r) {
  t[r ? "controlAbles" : "targetAbles"].forEach(function(e) {
    e.unset && e.unset(t);
  });
}
function Kr(t, r) {
  var e = r ? "controlGesto" : "targetGesto", n = t[e];
  (n == null ? void 0 : n.isIdle()) === !1 && ka(t, r), n == null || n.unset(), t[e] = null;
}
function Ht(t, r) {
  if (r) {
    var e = le(r);
    e.nextStyle = M(M({}, e.nextStyle), t);
  }
  return {
    style: t,
    cssText: gr(t).map(function(n) {
      return "".concat(ln(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function Au(t, r, e) {
  var n = r.afterTransform || r.transform;
  return M(M({}, Ht(M(M(M({}, t.style), r.style), { transform: n }), e)), { afterTransform: n, transform: t.transform });
}
function lt(t, r, e, n) {
  var a = r.datas;
  a.datas || (a.datas = {});
  var i = M(M({}, e), { target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, moveable: t, datas: a.datas, isRequest: r.isRequest, isRequestChild: r.isRequestChild, isFirstDrag: !!r.isFirstDrag, isTrusted: r.isTrusted !== !1, stopAble: function() {
    a.isEventStart = !1;
  }, stopDrag: function() {
    var o;
    (o = r.stop) === null || o === void 0 || o.call(r);
  } });
  return a.isStartEvent ? n || (a.lastEvent = i) : a.isStartEvent = !0, i;
}
function Kt(t, r, e) {
  var n = r.datas, a = "isDrag" in e ? e.isDrag : r.isDrag;
  return n.datas || (n.datas = {}), M(M({ isDrag: a }, e), { moveable: t, target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: r.isDouble, datas: n.datas, isFirstDrag: !!r.isFirstDrag });
}
function Wn(t, r, e) {
  t._emitter.on(r, e);
}
function K(t, r, e, n, a) {
  return t.triggerEvent(r, e, n, a);
}
function pi(t, r) {
  return Sr(t).getComputedStyle(t, r);
}
function en(t, r, e) {
  var n = {}, a = {};
  return t.filter(function(i) {
    var o = i.name;
    if (n[o] || !r.some(function(s) {
      return i[s];
    }))
      return !1;
    if (!e && i.ableGroup) {
      if (a[i.ableGroup])
        return !1;
      a[i.ableGroup] = !0;
    }
    return n[o] = !0, !0;
  });
}
function Ga(t, r) {
  return t === r || t == null && r == null;
}
function yo() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  for (var e = t.length - 1, n = 0; n < e; ++n) {
    var a = t[n];
    if (!Rn(a))
      return a;
  }
  return t[e];
}
function Fu(t, r) {
  var e = [], n = [];
  return t.forEach(function(a, i) {
    var o = r(a, i, t), s = n.indexOf(o), u = e[s] || [];
    s === -1 && (n.push(o), e.push(u)), u.push(a);
  }), e;
}
function gd(t, r) {
  var e = [], n = {};
  return t.forEach(function(a, i) {
    var o = r(a, i, t), s = n[o];
    s || (s = [], n[o] = s, e.push(s)), s.push(a);
  }), e;
}
function Nu(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function ae() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return t.sort(function(e, n) {
    return A(n) - A(e);
  }), t[0];
}
function ie(t, r, e) {
  return Gt(fr(t, e), Gr(r, e), e);
}
function Wu(t, r) {
  var e, n = t.is3d, a = t.rootMatrix, i = n ? 4 : 3;
  return e = T(ie(a, [r.distX, r.distY], i), 2), r.distX = e[0], r.distY = e[1], r;
}
function Zt(t, r, e, n) {
  if (!e[0] && !e[1])
    return r;
  var a = Dt(t, [ho(e[0] || 1), 0], n), i = Dt(t, [0, ho(e[1] || 1)], n), o = Dt(t, [
    e[0] / Qt(a),
    e[1] / Qt(i)
  ], n);
  return ht(r, o);
}
function rr(t, r, e) {
  return e ? "".concat(t / r * 100, "%") : "".concat(t, "px");
}
function _n(t) {
  return A(t) <= Lt ? 0 : t;
}
function hi(t) {
  return function(r) {
    if (!r.isDragging(t))
      return "";
    var e = ov(r, t), n = e.deg;
    return n ? Q("view-control-rotation".concat(n)) : "";
  };
}
function gi(t, r) {
  return r === void 0 && (r = [t]), function(e, n) {
    if (n.isRequest)
      return r.some(function(i) {
        return n.requestAble === i;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return Pt(a, Q("direction")) && (!t || Pt(a, Q(t)));
  };
}
function md(t, r, e) {
  var n, a = re(t, {
    "x%": function(E) {
      return E / 100 * r.offsetWidth;
    },
    "y%": function(E) {
      return E / 100 * r.offsetHeight;
    }
  }), i = t.slice(0, e < 0 ? void 0 : e), o = t.slice(0, e < 0 ? void 0 : e + 1), s = t[e] || "", u = e < 0 ? [] : t.slice(e), f = e < 0 ? [] : t.slice(e + 1), l = a.slice(0, e < 0 ? void 0 : e), v = a.slice(0, e < 0 ? void 0 : e + 1), c = (n = a[e]) !== null && n !== void 0 ? n : re([""])[0], d = e < 0 ? [] : a.slice(e), p = e < 0 ? [] : a.slice(e + 1), h = c ? [c] : [], g = Vr(l), m = Vr(v), b = Vr(d), y = Vr(p), x = xt(g, b, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: g,
    beforeFunctionMatrix2: m,
    targetFunctionMatrix: Vr(h),
    afterFunctionMatrix: b,
    afterFunctionMatrix2: y,
    allFunctionMatrix: x,
    beforeFunctions: l,
    beforeFunctions2: v,
    targetFunction: h[0],
    afterFunctions: d,
    afterFunctions2: p,
    beforeFunctionTexts: i,
    beforeFunctionTexts2: o,
    targetFunctionText: s,
    afterFunctionTexts: u,
    afterFunctionTexts2: f
  };
}
function bd(t) {
  return !t || !ar(t) || ue(t) ? !1 : Ot(t) || "length" in t;
}
function ur(t, r) {
  return t ? ue(t) ? t : qt(t) ? r ? document.querySelector(t) : t : La(t) ? t() : ys(t) ? t : "current" in t ? t.current : t : null;
}
function mi(t, r) {
  if (!t)
    return [];
  var e = bd(t) ? [].slice.call(t) : [t];
  return e.reduce(function(n, a) {
    return qt(a) && r ? L(L([], T(n), !1), T([].slice.call(document.querySelectorAll(a))), !1) : (Ot(a) ? n.push(mi(a, r)) : n.push(ur(a, r)), n);
  }, []);
}
function yd(t, r, e) {
  var n = Mt(t, r) / Math.PI * 180;
  return n = e >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function xo(t, r) {
  var e = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, i = fr(e, a);
  return n || (i = ir(i, 3, 4)), i[12] = 0, i[13] = 0, i[14] = 0, tc(i, r);
}
function Hu(t, r, e, n, a) {
  var i = T(t, 2), o = i[0], s = i[1], u = 0, f = 0;
  if (a && o && s) {
    var l = Mt([0, 0], r), v = Mt([0, 0], n), c = Qt(r), d = Math.cos(l - v) * c;
    if (!n[0])
      f = d, u = f * e;
    else if (!n[1])
      u = d, f = u / e;
    else {
      var p = n[0] * o, h = n[1] * s, g = Math.atan2(p + r[0], h + r[1]), m = Math.atan2(p, h);
      g < 0 && (g += Math.PI * 2), m < 0 && (m += Math.PI * 2);
      var b = 0;
      A(g - m) < Math.PI / 2 || A(g - m) > Math.PI / 2 * 3 || (m += Math.PI), b = g - m, b > Math.PI * 2 ? b -= Math.PI * 2 : b > Math.PI ? b = 2 * Math.PI - b : b < -Math.PI && (b = -2 * Math.PI - b);
      var y = Qt([p + r[0], h + r[1]]) * Math.cos(b);
      u = y * Math.sin(m) - p, f = y * Math.cos(m) - h, n[0] < 0 && (u *= -1), n[1] < 0 && (f *= -1);
    }
  } else
    u = n[0] * r[0], f = n[1] * r[1];
  return [u, f];
}
function Lu(t, r, e, n) {
  var a, i = e.ratio, o = e.startOffsetWidth, s = e.startOffsetHeight, u = 0, f = 0, l = n.distX, v = n.distY, c = n.pinchScale, d = n.parentDistance, p = n.parentDist, h = n.parentScale, g = e.fixedDirection, m = [0, 1].map(function(C) {
    return A(t[C] - g[C]);
  }), b = [0, 1].map(function(C) {
    var w = m[C];
    return w !== 0 && (w = 2 / w), w;
  });
  if (p)
    u = p[0], f = p[1], r && (u ? f || (f = u / i) : u = f * i);
  else if (te(c))
    u = (c - 1) * o, f = (c - 1) * s;
  else if (h)
    u = (h[0] - 1) * o, f = (h[1] - 1) * s;
  else if (d) {
    var y = o * m[0], x = s * m[1], E = Qt([y, x]);
    u = d / E * y * b[0], f = d / E * x * b[1];
  } else {
    var S = lr({ datas: e, distX: l, distY: v });
    S = b.map(function(C, w) {
      return S[w] * C;
    }), a = T(Hu([o, s], S, i, t, r), 2), u = a[0], f = a[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: u,
    distHeight: f
  };
}
function Aa(t, r) {
  if (r) {
    if (t === "left")
      return { x: "0%", y: "50%" };
    if (t === "top")
      return { x: "50%", y: "50%" };
    if (t === "center")
      return { x: "50%", y: "50%" };
    if (t === "right")
      return { x: "100%", y: "50%" };
    if (t === "bottom")
      return { x: "50%", y: "100%" };
    var e = T(t.split(" "), 2), n = e[0], a = e[1], i = Aa(n || ""), o = Aa(a || ""), s = M(M({}, i), o), u = {
      x: "50%",
      y: "50%"
    };
    return s.x && (u.x = s.x), s.y && (u.y = s.y), s.value && (s.x && !s.y && (u.y = s.value), !s.x && s.y && (u.x = s.value)), u;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function bi(t, r, e) {
  var n = Aa(t, !0), a = n.x, i = n.y;
  return [
    yt(a, r) || 0,
    yt(i, e) || 0
  ];
}
function xd(t, r, e) {
  var n = t.map(function(i) {
    return rt(i, r);
  }), a = n.map(function(i) {
    return He(i, e);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(i) {
      return ht(i, r);
    })
  };
}
function Yu(t, r) {
  return t.length === r.length && t.every(function(e, n) {
    var a = r[n], i = Ot(e), o = Ot(a);
    return i && o ? Yu(e, a) : !i && !o ? e === a : !1;
  });
}
function Zr(t, r, e, n, a) {
  var i = t._store, o = i[r];
  if (!(r in i))
    if (a != null)
      i[r] = a, o = a;
    else
      return i[r] = e, e;
  return o === e || n(o) === n(e) ? o : (i[r] = e, e);
}
function Wt(t) {
  return t >= 0 ? 1 : -1;
}
function A(t) {
  return Math.abs(t);
}
function ea(t, r) {
  return dl(t).map(function(e) {
    return r(e);
  });
}
function Xu(t) {
  return te(t) ? {
    top: t,
    left: t,
    right: t,
    bottom: t
  } : {
    left: t.left || 0,
    top: t.top || 0,
    right: t.right || 0,
    bottom: t.bottom || 0
  };
}
var Sd = Xe("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(t, r) {
    var e = r.datas, n = r.targets, a = r.angle, i = r.originalDatas, o = t.props, s = o.pinchable, u = o.ables;
    if (!s)
      return !1;
    var f = "onPinch".concat(n ? "Group" : "", "Start"), l = "drag".concat(n ? "Group" : "", "ControlStart"), v = (s === !0 ? t.controlAbles : u.filter(function(h) {
      return s.indexOf(h.name) > -1;
    })).filter(function(h) {
      return h.canPinch && h[l];
    }), c = lt(t, r, {});
    n && (c.targets = n);
    var d = K(t, f, c);
    e.isPinch = d !== !1, e.ables = v;
    var p = e.isPinch;
    return p ? (v.forEach(function(h) {
      if (i[h.name] = i[h.name] || {}, !!h[l]) {
        var g = M(M({}, r), { datas: i[h.name], parentRotate: a, isPinch: !0 });
        h[l](t, g);
      }
    }), t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: [0, 0]
    }, p) : !1;
  },
  pinch: function(t, r) {
    var e = r.datas, n = r.scale, a = r.distance, i = r.originalDatas, o = r.inputEvent, s = r.targets, u = r.angle;
    if (e.isPinch) {
      var f = a * (1 - 1 / n), l = lt(t, r, {});
      s && (l.targets = s);
      var v = "onPinch".concat(s ? "Group" : "");
      K(t, v, l);
      var c = e.ables, d = "drag".concat(s ? "Group" : "", "Control");
      return c.forEach(function(p) {
        p[d] && p[d](t, M(M({}, r), { datas: i[p.name], inputEvent: o, resolveMatrix: !0, pinchScale: n, parentDistance: f, parentRotate: u, isPinch: !0 }));
      }), l;
    }
  },
  pinchEnd: function(t, r) {
    var e = r.datas, n = r.isPinch, a = r.inputEvent, i = r.targets, o = r.originalDatas;
    if (e.isPinch) {
      var s = "onPinch".concat(i ? "Group" : "", "End"), u = Kt(t, r, { isDrag: n });
      i && (u.targets = i), K(t, s, u);
      var f = e.ables, l = "drag".concat(i ? "Group" : "", "ControlEnd");
      return f.forEach(function(v) {
        v[l] && v[l](t, M(M({}, r), { isDrag: n, datas: o[v.name], inputEvent: a, isPinch: !0 }));
      }), n;
    }
  },
  pinchGroupStart: function(t, r) {
    return this.pinchStart(t, M(M({}, r), { targets: t.props.targets }));
  },
  pinchGroup: function(t, r) {
    return this.pinch(t, M(M({}, r), { targets: t.props.targets }));
  },
  pinchGroupEnd: function(t, r) {
    return this.pinchEnd(t, M(M({}, r), { targets: t.props.targets }));
  }
}), So = gi("scalable"), Ed = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: fu("scalable"),
  dragControlCondition: So,
  viewClassName: hi("scalable"),
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.isPinch, a = r.inputEvent, i = r.parentDirection, o = ku(i, n, a, e), s = t.state, u = s.width, f = s.height, l = s.targetTransform, v = s.target, c = s.pos1, d = s.pos2, p = s.pos4;
    if (!o || !v)
      return !1;
    n || Wr(t, r), e.datas = {}, e.transform = l, e.prevDist = [1, 1], e.direction = o, e.startOffsetWidth = u, e.startOffsetHeight = f, e.startValue = [1, 1];
    var h = !o[0] && !o[1] || o[0] || !o[1];
    kn(t, r, "scale"), e.isWidth = h;
    function g(S) {
      e.ratio = S && isFinite(S) ? S : 0;
    }
    e.startPositions = tr(t.state);
    function m(S) {
      var C = Su(e.startPositions, S);
      e.fixedDirection = C.fixedDirection, e.fixedPosition = C.fixedPosition, e.fixedOffset = C.fixedOffset;
    }
    e.setFixedDirection = m, g(dr(c, d) / dr(d, p)), m([-o[0], -o[1]]);
    var b = function(S) {
      e.minScaleSize = S;
    }, y = function(S) {
      e.maxScaleSize = S;
    };
    b([-1 / 0, -1 / 0]), y([1 / 0, 1 / 0]);
    var x = lt(t, r, M(M({ direction: o, set: function(S) {
      e.startValue = S;
    }, setRatio: g, setFixedDirection: m, setMinScaleSize: b, setMaxScaleSize: y }, Bn(t, r)), { dragStart: Nt.dragStart(t, new ee().dragStart([0, 0], r)) })), E = K(t, "onScaleStart", x);
    return e.startFixedDirection = e.fixedDirection, E !== !1 && (e.isScale = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    }), e.isScale ? x : !1;
  },
  dragControl: function(t, r) {
    Pn(t, r, "scale");
    var e = r.datas, n = r.parentKeepRatio, a = r.parentFlag, i = r.isPinch, o = r.dragClient, s = r.isRequest, u = r.useSnap, f = r.resolveMatrix, l = e.prevDist, v = e.direction, c = e.startOffsetWidth, d = e.startOffsetHeight, p = e.isScale, h = e.startValue, g = e.isWidth, m = e.ratio;
    if (!p)
      return !1;
    var b = t.props, y = b.throttleScale, x = b.parentMoveable, E = v;
    !v[0] && !v[1] && (E = [1, 1]);
    var S = m && (n ?? b.keepRatio) || !1, C = t.state, w = [
      h[0],
      h[1]
    ];
    function D() {
      var X = Lu(E, S, e, r), Z = X.distWidth, pt = X.distHeight, nt = c ? (c + Z) / c : 1, it = d ? (d + pt) / d : 1;
      h[0] || (w[0] = Z / c), h[1] || (w[1] = pt / d);
      var ct = (E[0] || S ? nt : 1) * w[0], mt = (E[1] || S ? it : 1) * w[1];
      return ct === 0 && (ct = Wt(l[0]) * Ze), mt === 0 && (mt = Wt(l[1]) * Ze), [ct, mt];
    }
    var _ = D();
    if (!i && t.props.groupable) {
      var z = C.snapRenderInfo || {}, O = z.direction;
      Ot(O) && (O[0] || O[1]) && (C.snapRenderInfo = { direction: v, request: r.isRequest });
    }
    K(t, "onBeforeScale", lt(t, r, {
      scale: _,
      setFixedDirection: function(X) {
        return e.setFixedDirection(X), _ = D(), _;
      },
      startFixedDirection: e.startFixedDirection,
      setScale: function(X) {
        _ = X;
      }
    }, !0));
    var R = [
      _[0] / w[0],
      _[1] / w[1]
    ], P = o, I = [0, 0], B = Wt(R[0] * R[1]), W = !o && !a && i;
    if (W || f ? P = ii(t, e.targetAllTransform, [0, 0], [0, 0], e) : o || (P = e.fixedPosition), i || (I = td(t, R, v, !u && s, e)), S) {
      E[0] && E[1] && I[0] && I[1] && (Math.abs(I[0] * c) > Math.abs(I[1] * d) ? I[1] = 0 : I[0] = 0);
      var G = !I[0] && !I[1];
      if (G && (g ? R[0] = ot(R[0] * w[0], y) / w[0] : R[1] = ot(R[1] * w[1], y) / w[1]), E[0] && !E[1] || I[0] && !I[1] || G && g) {
        R[0] += I[0];
        var H = c * R[0] * w[0] / m;
        R[1] = Wt(B * R[0]) * A(H / d / w[1]);
      } else if (!E[0] && E[1] || !I[0] && I[1] || G && !g) {
        R[1] += I[1];
        var N = d * R[1] * w[1] * m;
        R[0] = Wt(B * R[1]) * A(N / c / w[0]);
      }
    } else
      R[0] += I[0], R[1] += I[1], I[0] || (R[0] = ot(R[0] * w[0], y) / w[0]), I[1] || (R[1] = ot(R[1] * w[1], y) / w[1]);
    R[0] === 0 && (R[0] = Wt(l[0]) * Ze), R[1] === 0 && (R[1] = Wt(l[1]) * Ze), _ = ad(R, [w[0], w[1]]);
    var k = [
      c,
      d
    ], Y = [
      c * _[0],
      d * _[1]
    ];
    Y = ps(Y, e.minScaleSize, e.maxScaleSize, S ? m : !1), _ = ea(2, function(X) {
      return k[X] ? Y[X] / k[X] : Y[X];
    }), R = ea(2, function(X) {
      return _[X] / w[X];
    });
    var $ = ea(2, function(X) {
      return l[X] ? R[X] / l[X] : R[X];
    }), V = "scale(".concat(R.join(", "), ")"), j = "scale(".concat(_.join(", "), ")"), q = In(e, j, V), U = !h[0] || !h[1], J = tv(t, U ? j : V, e.fixedDirection, P, e.fixedOffset, e, U), at = W ? J : rt(J, e.prevInverseDist || [0, 0]);
    if (e.prevDist = R, e.prevInverseDist = J, _[0] === l[0] && _[1] === l[1] && at.every(function(X) {
      return !X;
    }) && !x && !W)
      return !1;
    var dt = lt(t, r, M({ offsetWidth: c, offsetHeight: d, direction: v, scale: _, dist: R, delta: $, isPinch: !!i }, nu(t, q, at, i, r)));
    return K(t, "onScale", dt), dt;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (!e.isScale)
      return !1;
    e.isScale = !1;
    var n = Kt(t, r, {});
    return K(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: So,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, r);
    if (!n)
      return !1;
    var a = nr(t, "resizable", r);
    e.moveableScale = t.scale;
    var i = pr(t, this, "dragControlStart", r, function(f, l) {
      return yn(t, f, e, l);
    }), o = function(f) {
      n.setFixedDirection(f), i.forEach(function(l, v) {
        l.setFixedDirection(f), yn(t, l.moveable, e, a[v]);
      });
    };
    e.setFixedDirection = o;
    var s = M(M({}, n), { targets: t.props.targets, events: i, setFixedDirection: o }), u = K(t, "onScaleGroupStart", s);
    return e.isScale = u !== !1, e.isScale ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isScale) {
      Wn(t, "onBeforeScale", function(l) {
        K(t, "onBeforeScaleGroup", lt(t, r, M(M({}, l), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var a = n.dist, i = e.moveableScale;
        t.scale = [
          a[0] * i[0],
          a[1] * i[1]
        ];
        var o = t.props.keepRatio, s = e.fixedPosition, u = pr(t, this, "dragControl", r, function(l, v) {
          var c = T(Gt(Le(t.rotation / 180 * Math.PI, 3), [
            v.datas.originalX * a[0],
            v.datas.originalY * a[1],
            1
          ], 3), 2), d = c[0], p = c[1];
          return M(M({}, v), {
            parentDist: null,
            parentScale: a,
            parentKeepRatio: o,
            // recalculate child fixed position for parent group's dragging.
            dragClient: ht(s, [d, p])
          });
        }), f = M({ targets: t.props.targets, events: u }, n);
        return K(t, "onScaleGroup", f), f;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isScale) {
      this.dragControlEnd(t, r);
      var a = pr(t, this, "dragControlEnd", r), i = Kt(t, r, {
        targets: t.props.targets,
        events: a
      });
      return K(t, "onScaleGroupEnd", i), e;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var t = {}, r = 0, e = 0, n = !1;
    return {
      isControl: !0,
      requestStart: function(a) {
        return n = a.useSnap, {
          datas: t,
          parentDirection: a.direction || [1, 1],
          useSnap: n
        };
      },
      request: function(a) {
        return r += a.deltaWidth, e += a.deltaHeight, {
          datas: t,
          parentDist: [r, e],
          parentKeepRatio: a.keepRatio,
          useSnap: n
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: n };
      }
    };
  }
};
function br(t, r) {
  return t.map(function(e, n) {
    return pn(e, r[n], 1, 2);
  });
}
function Eo(t, r, e) {
  var n = Mt(t, r), a = Mt(t, e), i = a - n;
  return i >= 0 ? i : i + 2 * Math.PI;
}
function wd(t, r) {
  var e = Eo(t[0], t[1], t[2]), n = Eo(r[0], r[1], r[2]), a = Math.PI;
  return !(e >= a && n <= a || e <= a && n >= a);
}
var _d = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: hi("warpable"),
  render: function(t, r) {
    var e = t.props, n = e.resizable, a = e.scalable, i = e.warpable, o = e.zoom;
    if (n || a || !i)
      return [];
    var s = t.state, u = s.pos1, f = s.pos2, l = s.pos3, v = s.pos4, c = br(u, f), d = br(f, u), p = br(u, l), h = br(l, u), g = br(l, v), m = br(v, l), b = br(f, v), y = br(v, f);
    return L([
      r.createElement("div", { className: Q("line"), key: "middeLine1", style: me(c, g, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine2", style: me(d, m, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine3", style: me(p, b, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine4", style: me(h, y, o) })
    ], T(lu(t, "warpable", r)), !1);
  },
  dragControlCondition: function(t, r) {
    if (r.isRequest)
      return !1;
    var e = r.inputEvent.target;
    return Pt(e, Q("direction")) && Pt(e, Q("warpable"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.inputEvent, a = t.props.target, i = n.target, o = Gu(i, e);
    if (!o || !a)
      return !1;
    var s = t.state, u = s.transformOrigin, f = s.is3d, l = s.targetTransform, v = s.targetMatrix, c = s.width, d = s.height, p = s.left, h = s.top;
    e.datas = {}, e.targetTransform = l, e.warpTargetMatrix = f ? v : ir(v, 3, 4), e.targetInverseMatrix = Fs(fr(e.warpTargetMatrix, 4), 3, 4), e.direction = o, e.left = p, e.top = h, e.poses = [
      [0, 0],
      [c, 0],
      [0, d],
      [c, d]
    ].map(function(b) {
      return rt(b, u);
    }), e.nextPoses = e.poses.map(function(b) {
      var y = T(b, 2), x = y[0], E = y[1];
      return Gt(e.warpTargetMatrix, [x, E, 0, 1], 4);
    }), e.startValue = _t(4), e.prevMatrix = _t(4), e.absolutePoses = tr(s), e.posIndexes = eu(o), Wr(t, r), kn(t, r, "matrix3d"), s.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    };
    var g = lt(t, r, M({ set: function(b) {
      e.startValue = b;
    } }, Bn(t, r))), m = K(t, "onWarpStart", g);
    return m !== !1 && (e.isWarp = !0), e.isWarp;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isRequest, a = r.distX, i = r.distY, o = e.targetInverseMatrix, s = e.prevMatrix, u = e.isWarp, f = e.startValue, l = e.poses, v = e.posIndexes, c = e.absolutePoses;
    if (!u)
      return !1;
    if (Pn(t, r, "matrix3d"), ce(t, "warpable")) {
      var d = v.map(function(D) {
        return c[D];
      });
      d.length > 1 && d.push([
        (d[0][0] + d[1][0]) / 2,
        (d[0][1] + d[1][1]) / 2
      ]);
      var p = Fn(t, n, {
        horizontal: d.map(function(D) {
          return D[1] + i;
        }),
        vertical: d.map(function(D) {
          return D[0] + a;
        })
      }), h = p.horizontal, g = p.vertical;
      i -= h.offset, a -= g.offset;
    }
    var m = lr({ datas: e, distX: a, distY: i }, !0), b = e.nextPoses.slice();
    if (v.forEach(function(D) {
      b[D] = ht(b[D], m);
    }), !Xc.every(function(D) {
      return wd(D.map(function(_) {
        return l[_];
      }), D.map(function(_) {
        return b[_];
      }));
    }))
      return !1;
    var y = Qa(l[0], l[2], l[1], l[3], b[0], b[2], b[1], b[3]);
    if (!y.length)
      return !1;
    var x = xt(o, y, 4), E = tu(e, x, !0), S = xt(fr(s, 4), E, 4);
    e.prevMatrix = E;
    var C = xt(f, E, 4), w = In(e, "matrix3d(".concat(C.join(", "), ")"), "matrix3d(".concat(E.join(", "), ")"));
    return ai(r, w), K(t, "onWarp", lt(t, r, M({ delta: S, matrix: C, dist: E, multiply: xt, transform: w }, Ht({
      transform: w
    }, r)))), !0;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.isDrag;
    return e.isWarp ? (e.isWarp = !1, K(t, "onWarpEnd", Kt(t, r, {})), n) : !1;
  }
}, Cd = /* @__PURE__ */ Q("area-pieces"), nn = /* @__PURE__ */ Q("area-piece"), qu = /* @__PURE__ */ Q("avoid"), Dd = Q("view-dragging");
function na(t) {
  var r = t.areaElement;
  if (r) {
    var e = t.state, n = e.width, a = e.height;
    bs(r, qu), r.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function wo(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: Cd },
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn })
  );
}
var Vu = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(t, r) {
    var e = t.props, n = e.target, a = e.dragArea, i = e.groupable, o = e.passDragArea, s = t.getState(), u = s.width, f = s.height, l = s.renderPoses, v = o ? Q("area", "pass") : Q("area");
    if (i)
      return [
        r.createElement("div", { key: "area", ref: vr(t, "areaElement"), className: v }),
        wo(r)
      ];
    if (!n || !a)
      return [];
    var c = Qa([0, 0], [u, 0], [0, f], [u, f], l[0], l[1], l[2], l[3]), d = c.length ? Nn(c, !0) : "none";
    return [
      r.createElement("div", { key: "area", ref: vr(t, "areaElement"), className: v, style: {
        top: "0px",
        left: "0px",
        width: "".concat(u, "px"),
        height: "".concat(f, "px"),
        transformOrigin: "0 0",
        transform: d
      } }),
      wo(r)
    ];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.clientX, a = r.clientY, i = r.inputEvent;
    if (!i)
      return !1;
    e.isDragArea = !1;
    var o = t.areaElement, s = t.state, u = s.moveableClientRect, f = s.renderPoses, l = s.rootMatrix, v = s.is3d, c = u.left, d = u.top, p = Jt(f), h = p.left, g = p.top, m = p.width, b = p.height, y = v ? 4 : 3, x = T(ie(l, [n - c, a - d], y), 2), E = x[0], S = x[1];
    E -= h, S -= g;
    var C = [
      { left: h, top: g, width: m, height: S - 10 },
      { left: h, top: g, width: E - 10, height: b },
      { left: h, top: g + S + 10, width: m, height: b - S - 10 },
      { left: h + E + 10, top: g, width: m - E - 10, height: b }
    ], w = [].slice.call(o.nextElementSibling.children);
    C.forEach(function(D, _) {
      w[_].style.cssText = "left: ".concat(D.left, "px;top: ").concat(D.top, "px; width: ").concat(D.width, "px; height: ").concat(D.height, "px;");
    }), ms(o, qu), s.disableNativeEvent = !0;
  },
  drag: function(t, r) {
    var e = r.datas, n = r.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    e.isDragArea || (e.isDragArea = !0, na(t));
  },
  dragEnd: function(t, r) {
    this.enableNativeEvent(t);
    var e = r.inputEvent, n = r.datas;
    if (!e)
      return !1;
    n.isDragArea || na(t);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragGroup: function(t, r) {
    return this.drag(t, r);
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  unset: function(t) {
    na(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var r = t.state;
    r.disableNativeEvent && ds(function() {
      r.disableNativeEvent = !1;
    });
  }
}, Md = Xe("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, r) {
    var e = t.props, n = e.zoom, a = e.svgOrigin, i = e.groupable, o = t.getState(), s = o.beforeOrigin, u = o.rotation, f = o.svg, l = o.allMatrix, v = o.is3d, c = o.left, d = o.top, p = o.offsetWidth, h = o.offsetHeight, g;
    if (!i && f && a) {
      var m = T(bi(a, p, h), 2), b = m[0], y = m[1], x = v ? 4 : 3, E = Dt(l, [b, y], x);
      g = wn(u, n, rt(E, [c, d]));
    } else
      g = wn(u, n, s);
    return [
      r.createElement("div", { className: Q("control", "origin"), style: g, key: "beforeOrigin" })
    ];
  }
});
function Rd(t) {
  var r = t.scrollContainer;
  return [
    r.scrollLeft,
    r.scrollTop
  ];
}
var Td = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(t, r) {
    var e = t.props, n = e.scrollContainer, a = n === void 0 ? t.getContainer() : n, i = e.scrollOptions, o = new fc(), s = ur(a, !0);
    r.datas.dragScroll = o, t.state.dragScroll = o;
    var u = r.isControl ? "controlGesto" : "targetGesto", f = r.targets;
    o.on("scroll", function(l) {
      var v = l.container, c = l.direction, d = lt(t, r, {
        scrollContainer: v,
        direction: c
      }), p = f ? "onScrollGroup" : "onScroll";
      f && (d.targets = f), K(t, p, d);
    }).on("move", function(l) {
      var v = l.offsetX, c = l.offsetY, d = l.inputEvent;
      t[u].scrollBy(v, c, d.inputEvent, !1);
    }).on("scrollDrag", function(l) {
      var v = l.next;
      v(t[u].getCurrentEvent());
    }), o.dragStart(r, M({ container: s }, i));
  },
  checkScroll: function(t, r) {
    var e = r.datas.dragScroll;
    if (e) {
      var n = t.props, a = n.scrollContainer, i = a === void 0 ? t.getContainer() : a, o = n.scrollThreshold, s = o === void 0 ? 0 : o, u = n.scrollThrottleTime, f = u === void 0 ? 0 : u, l = n.getScrollPosition, v = l === void 0 ? Rd : l, c = n.scrollOptions;
      return e.drag(r, M({ container: i, threshold: s, throttleTime: f, getScrollPosition: function(d) {
        return v({ scrollContainer: d.container, direction: d.direction });
      } }, c)), !0;
    }
  },
  drag: function(t, r) {
    return this.checkScroll(t, r);
  },
  dragEnd: function(t, r) {
    r.datas.dragScroll.dragEnd(), r.datas.dragScroll = null;
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { isControl: !0 }));
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroup: function(t, r) {
    return this.drag(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupControlStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { targets: t.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(t, r) {
    return this.drag(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupControEnd: function(t, r) {
    return this.dragEnd(t, M(M({}, r), { targets: t.props.targets }));
  },
  unset: function(t) {
    var r, e = t.state;
    (r = e.dragScroll) === null || r === void 0 || r.dragEnd(), e.dragScroll = null;
  }
}, ju = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "preventRightClick",
    "preventWheelClick",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, Od = Xe("padding", {
  props: ["padding"],
  render: function(t, r) {
    var e = t.props;
    if (e.dragArea)
      return [];
    var n = Xu(e.padding || {}), a = n.left, i = n.top, o = n.right, s = n.bottom, u = t.getState(), f = u.renderPoses, l = u.pos1, v = u.pos2, c = u.pos3, d = u.pos4, p = [l, v, c, d], h = [];
    return a > 0 && h.push([0, 2]), i > 0 && h.push([0, 1]), o > 0 && h.push([1, 3]), s > 0 && h.push([2, 3]), h.map(function(g, m) {
      var b = T(g, 2), y = b[0], x = b[1], E = p[y], S = p[x], C = f[y], w = f[x], D = Qa([0, 0], [100, 0], [0, 100], [100, 100], E, S, C, w);
      if (D.length)
        return r.createElement("div", { key: "padding".concat(m), className: Q("padding"), style: {
          transform: Nn(D, !0)
        } });
    });
  }
}), _o = ["nw", "ne", "se", "sw"];
function an(t, r) {
  var e = t[0] + t[1], n = e > r ? r / e : 1;
  return t[0] *= n, t[1] = r - t[1] * n, t;
}
var zd = [1, 2, 5, 6], Pd = [0, 3, 4, 7], zr = [1, -1, -1, 1], Pr = [1, 1, -1, -1];
function yi(t, r, e, n, a, i, o, s) {
  a === void 0 && (a = 0), i === void 0 && (i = 0), o === void 0 && (o = e), s === void 0 && (s = n);
  var u = [], f = !1, l = t.filter(function(c) {
    return !c.virtual;
  }), v = l.map(function(c) {
    var d = c.horizontal, p = c.vertical, h = c.pos;
    if (p && !f && (f = !0, u.push("/")), f) {
      var g = Math.max(0, p === 1 ? h[1] - i : s - h[1]);
      return u.push(rr(g, n, r)), g;
    } else {
      var g = Math.max(0, d === 1 ? h[0] - a : o - h[0]);
      return u.push(rr(g, e, r)), g;
    }
  });
  return {
    radiusPoses: l,
    styles: u,
    raws: v
  };
}
function $u(t) {
  for (var r = [0, 0], e = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var i = t[a];
    i.sub && (i.horizontal && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1, e[0] = a + 1), i.vertical && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1));
  }
  return {
    horizontalRange: r,
    verticalRange: e
  };
}
function Uu(t, r, e, n, a, i, o) {
  var s, u, f, l;
  i === void 0 && (i = [0, 0]), o === void 0 && (o = !1);
  var v = t.indexOf("/"), c = (v > -1 ? t.slice(0, v) : t).length, d = t.slice(0, c), p = t.slice(c + 1), h = d.length, g = p.length, m = g > 0, b = T(d, 4), y = b[0], x = y === void 0 ? "0px" : y, E = b[1], S = E === void 0 ? x : E, C = b[2], w = C === void 0 ? x : C, D = b[3], _ = D === void 0 ? S : D, z = T(p, 4), O = z[0], R = O === void 0 ? x : O, P = z[1], I = P === void 0 ? m ? R : S : P, B = z[2], W = B === void 0 ? m ? R : w : B, G = z[3], H = G === void 0 ? m ? I : _ : G, N = [x, S, w, _].map(function(q) {
    return yt(q, r);
  }), k = [R, I, W, H].map(function(q) {
    return yt(q, e);
  }), Y = N.slice(), $ = k.slice();
  s = T(an([Y[0], Y[1]], r), 2), Y[0] = s[0], Y[1] = s[1], u = T(an([Y[3], Y[2]], r), 2), Y[3] = u[0], Y[2] = u[1], f = T(an([$[0], $[3]], e), 2), $[0] = f[0], $[3] = f[1], l = T(an([$[1], $[2]], e), 2), $[1] = l[0], $[2] = l[1];
  var V = o ? Y : Y.slice(0, Math.max(i[0], h)), j = o ? $ : $.slice(0, Math.max(i[1], g));
  return L(L([], T(V.map(function(q, U) {
    var J = _o[U];
    return {
      virtual: U >= h,
      horizontal: zr[U],
      vertical: 0,
      pos: [n + q, a + (Pr[U] === -1 ? e : 0)],
      sub: !0,
      raw: N[U],
      direction: J
    };
  })), !1), T(j.map(function(q, U) {
    var J = _o[U];
    return {
      virtual: U >= g,
      horizontal: 0,
      vertical: Pr[U],
      pos: [n + (zr[U] === -1 ? r : 0), a + q],
      sub: !0,
      raw: k[U],
      direction: J
    };
  })), !1);
}
function Id(t, r, e, n, a) {
  a === void 0 && (a = r.length);
  var i = $u(t.slice(n)), o = i.horizontalRange, s = i.verticalRange, u = e - n, f = 0;
  if (u === 0)
    f = a;
  else if (u > 0 && u < o[1])
    f = o[1] - u;
  else if (u >= s[0])
    f = s[0] + s[1] - u;
  else
    return;
  t.splice(e, f), r.splice(e, f);
}
function Bd(t, r, e, n, a, i, o, s, u, f, l) {
  f === void 0 && (f = 0), l === void 0 && (l = 0);
  var v = $u(t.slice(e)), c = v.horizontalRange, d = v.verticalRange;
  if (n > -1)
    for (var p = zr[n] === 1 ? i - f : s - i, h = c[1]; h <= n; ++h) {
      var g = Pr[h] === 1 ? l : u, m = 0;
      if (n === h ? m = i : h === 0 ? m = f + p : zr[h] === -1 && (m = s - (r[e][0] - f)), t.splice(e + h, 0, {
        horizontal: zr[h],
        vertical: 0,
        pos: [m, g]
      }), r.splice(e + h, 0, [m, g]), h === 0)
        break;
    }
  else if (a > -1) {
    var b = Pr[a] === 1 ? o - l : u - o;
    if (c[1] === 0 && d[1] === 0) {
      var y = [
        f + b,
        l
      ];
      t.push({
        horizontal: zr[0],
        vertical: 0,
        pos: y
      }), r.push(y);
    }
    for (var x = d[0], h = d[1]; h <= a; ++h) {
      var m = zr[h] === 1 ? f : s, g = 0;
      if (a === h ? g = o : h === 0 ? g = l + b : Pr[h] === 1 ? g = r[e + x][1] : Pr[h] === -1 && (g = u - (r[e + x][1] - l)), t.push({
        horizontal: 0,
        vertical: Pr[h],
        pos: [m, g]
      }), r.push([m, g]), h === 0)
        break;
    }
  }
}
function kd(t, r) {
  r === void 0 && (r = t.map(function(a) {
    return a.raw;
  }));
  var e = t.map(function(a, i) {
    return a.horizontal ? r[i] : null;
  }).filter(function(a) {
    return a != null;
  }), n = t.map(function(a, i) {
    return a.vertical ? r[i] : null;
  }).filter(function(a) {
    return a != null;
  });
  return {
    horizontals: e,
    verticals: n
  };
}
var Gd = [
  [0, -1, "n"],
  [1, 0, "e"]
], Ad = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function xi(t, r, e) {
  var n = t.props.clipRelative, a = t.state, i = a.width, o = a.height, s = r, u = s.type, f = s.poses, l = u === "rect", v = u === "circle";
  if (u === "polygon")
    return e.map(function(S) {
      return "".concat(rr(S[0], i, n), " ").concat(rr(S[1], o, n));
    });
  if (l || u === "inset") {
    var c = e[1][1], d = e[3][0], p = e[7][0], h = e[5][1];
    if (l)
      return [
        c,
        d,
        h,
        p
      ].map(function(S) {
        return "".concat(S, "px");
      });
    var g = [c, i - d, o - h, p].map(function(S, C) {
      return rr(S, C % 2 ? i : o, n);
    });
    if (e.length > 8) {
      var m = T(rt(e[4], e[0]), 2), b = m[0], y = m[1];
      g.push.apply(g, L(["round"], T(yi(f.slice(8).map(function(S, C) {
        return M(M({}, S), { pos: e[C] });
      }), n, b, y, p, c, d, h).styles), !1));
    }
    return g;
  } else if (v || u === "ellipse") {
    var x = e[0], E = rr(A(e[1][1] - x[1]), v ? Math.sqrt((i * i + o * o) / 2) : o, n), g = v ? [E] : [rr(A(e[2][0] - x[0]), i, n), E];
    return g.push("at", rr(x[0], i, n), rr(x[1], o, n)), g;
  }
}
function Cn(t, r, e, n) {
  var a = [n, (n + r) / 2, r], i = [t, (t + e) / 2, e];
  return Ad.map(function(o) {
    var s = T(o, 3), u = s[0], f = s[1], l = s[2], v = a[u + 1], c = i[f + 1];
    return {
      vertical: A(f),
      horizontal: A(u),
      direction: l,
      pos: [v, c]
    };
  });
}
function Ku(t) {
  var r = [1 / 0, -1 / 0], e = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    r[0] = Math.min(r[0], a[0]), r[1] = Math.max(r[1], a[0]), e[0] = Math.min(e[0], a[1]), e[1] = Math.max(e[1], a[1]);
  }), [
    A(r[1] - r[0]),
    A(e[1] - e[0])
  ];
}
function Co(t, r, e, n, a) {
  var i, o, s, u, f, l, v, c, d;
  if (t) {
    var p = a;
    if (!p) {
      var h = jt(t), g = h("clipPath");
      p = g !== "none" ? g : h("clip");
    }
    if (!((!p || p === "none" || p === "auto") && (p = n, !p))) {
      var m = vs(p), b = m.prefix, y = b === void 0 ? p : b, x = m.value, E = x === void 0 ? "" : x, S = y === "circle", C = " ";
      if (y === "polygon") {
        var w = Ir(E || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        C = ",";
        var D = w.map(function(wt) {
          var F = T(wt.split(" "), 2), tt = F[0], st = F[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              yt(tt, r),
              yt(st, e)
            ]
          };
        }), _ = Fr(D.map(function(wt) {
          return wt.pos;
        }));
        return {
          type: y,
          clipText: p,
          poses: D,
          splitter: C,
          left: _.minX,
          right: _.maxX,
          top: _.minY,
          bottom: _.maxY
        };
      } else if (S || y === "ellipse") {
        var z = "", O = "", R = 0, P = 0, w = Er(E);
        if (S) {
          var I = "";
          i = T(w, 4), o = i[0], I = o === void 0 ? "50%" : o, s = i[2], z = s === void 0 ? "50%" : s, u = i[3], O = u === void 0 ? "50%" : u, R = yt(I, Math.sqrt((r * r + e * e) / 2)), P = R;
        } else {
          var B = "", W = "";
          f = T(w, 5), l = f[0], B = l === void 0 ? "50%" : l, v = f[1], W = v === void 0 ? "50%" : v, c = f[3], z = c === void 0 ? "50%" : c, d = f[4], O = d === void 0 ? "50%" : d, R = yt(B, r), P = yt(W, e);
        }
        var G = [
          yt(z, r),
          yt(O, e)
        ], D = L([
          {
            vertical: 1,
            horizontal: 1,
            pos: G,
            direction: "nesw"
          }
        ], T(Gd.slice(0, S ? 1 : 2).map(function(tt) {
          return {
            vertical: A(tt[1]),
            horizontal: tt[0],
            direction: tt[2],
            sub: !0,
            pos: [
              G[0] + tt[0] * R,
              G[1] + tt[1] * P
            ]
          };
        })), !1);
        return {
          type: y,
          clipText: p,
          radiusX: R,
          radiusY: P,
          left: G[0] - R,
          top: G[1] - P,
          right: G[0] + R,
          bottom: G[1] + P,
          poses: D,
          splitter: C
        };
      } else if (y === "inset") {
        var w = Er(E || "0 0 0 0"), H = w.indexOf("round"), N = (H > -1 ? w.slice(0, H) : w).length, k = w.slice(N + 1), Y = T(w.slice(0, N), 4), $ = Y[0], V = Y[1], j = V === void 0 ? $ : V, q = Y[2], U = q === void 0 ? $ : q, J = Y[3], at = J === void 0 ? j : J, dt = T([$, U].map(function(tt) {
          return yt(tt, e);
        }), 2), X = dt[0], Z = dt[1], pt = T([at, j].map(function(tt) {
          return yt(tt, r);
        }), 2), nt = pt[0], it = pt[1], ct = r - it, mt = e - Z, bt = Uu(k, ct - nt, mt - X, nt, X), D = L(L([], T(Cn(X, ct, mt, nt)), !1), T(bt), !1);
        return {
          type: "inset",
          clipText: p,
          poses: D,
          top: X,
          left: nt,
          right: ct,
          bottom: mt,
          radius: k,
          splitter: C
        };
      } else if (y === "rect") {
        var w = Ir(E || "0px, ".concat(r, "px, ").concat(e, "px, 0px"));
        C = ",";
        var ft = T(w.map(function(St) {
          var vt = Ae(St).value;
          return vt;
        }), 4), gt = ft[0], it = ft[1], Z = ft[2], nt = ft[3], D = Cn(gt, it, Z, nt);
        return {
          type: "rect",
          clipText: p,
          poses: D,
          top: gt,
          right: it,
          bottom: Z,
          left: nt,
          values: w,
          splitter: C
        };
      }
    }
  }
}
function Fd(t, r, e, n, a) {
  var i = t[r], o = i.direction, s = i.sub, u = t.map(function() {
    return [0, 0];
  }), f = o ? o.split("") : [];
  if (n && r < 8) {
    var l = f.filter(function(R) {
      return R === "w" || R === "e";
    }), v = f.filter(function(R) {
      return R === "n" || R === "s";
    }), c = l[0], d = v[0];
    u[r] = e;
    var p = T(Ku(t), 2), h = p[0], g = p[1], m = h && g ? h / g : 0;
    if (m && a) {
      var b = (r + 4) % 8, y = t[b].pos, x = [0, 0];
      o.indexOf("w") > -1 ? x[0] = -1 : o.indexOf("e") > -1 && (x[0] = 1), o.indexOf("n") > -1 ? x[1] = -1 : o.indexOf("s") > -1 && (x[1] = 1);
      var E = Hu([h, g], e, m, x, !0), S = h + E[0], C = g + E[1], w = y[1], D = y[1], _ = y[0], z = y[0];
      x[0] === -1 ? _ = z - S : x[0] === 1 ? z = _ + S : (_ = _ - S / 2, z = z + S / 2), x[1] === -1 ? w = D - C : (x[1] === 1 || (w = D - C / 2), D = w + C);
      var O = Cn(w, z, D, _);
      t.forEach(function(R, P) {
        u[P][0] = O[P].pos[0] - R.pos[0], u[P][1] = O[P].pos[1] - R.pos[1];
      });
    } else
      t.forEach(function(R, P) {
        var I = R.direction;
        I && (I.indexOf(c) > -1 && (u[P][0] = e[0]), I.indexOf(d) > -1 && (u[P][1] = e[1]));
      }), c && (u[1][0] = e[0] / 2, u[5][0] = e[0] / 2), d && (u[3][1] = e[1] / 2, u[7][1] = e[1] / 2);
  } else
    o && !s ? f.forEach(function(R) {
      var P = R === "n" || R === "s";
      t.forEach(function(I, B) {
        var W = I.direction, G = I.horizontal, H = I.vertical;
        !W || W.indexOf(R) === -1 || (u[B] = [
          P || !G ? 0 : e[0],
          !P || !H ? 0 : e[1]
        ]);
      });
    }) : u[r] = e;
  return u;
}
function Nd(t, r) {
  var e = T(Qs(t, r), 2), n = e[0], a = e[1], i = r.datas, o = i.clipPath, s = i.clipIndex, u = o, f = u.type, l = u.poses, v = u.splitter, c = l.map(function(b) {
    return b.pos;
  });
  if (f === "polygon")
    c.splice(s, 0, [n, a]);
  else if (f === "inset") {
    var d = zd.indexOf(s), p = Pd.indexOf(s), h = l.length;
    if (Bd(l, c, 8, d, p, n, a, c[4][0], c[4][1], c[0][0], c[0][1]), h === l.length)
      return;
  } else
    return;
  var g = xi(t, o, c), m = "".concat(f, "(").concat(g.join(v), ")");
  K(t, "onClip", lt(t, r, M({ clipEventType: "added", clipType: f, poses: c, clipStyles: g, clipStyle: m, distX: 0, distY: 0 }, Ht({
    clipPath: m
  }, r))));
}
function Wd(t, r) {
  var e = r.datas, n = e.clipPath, a = e.clipIndex, i = n, o = i.type, s = i.poses, u = i.splitter, f = s.map(function(d) {
    return d.pos;
  }), l = f.length;
  if (o === "polygon")
    s.splice(a, 1), f.splice(a, 1);
  else if (o === "inset") {
    if (a < 8 || (Id(s, f, a, 8, l), l === s.length))
      return;
  } else
    return;
  var v = xi(t, n, f), c = "".concat(o, "(").concat(v.join(u), ")");
  K(t, "onClip", lt(t, r, M({ clipEventType: "removed", clipType: o, poses: f, clipStyles: v, clipStyle: c, distX: 0, distY: 0 }, Ht({
    clipPath: c
  }, r))));
}
var Hd = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.customClipPath, a = e.defaultClipPath, i = e.clipArea, o = e.zoom, s = e.groupable, u = t.getState(), f = u.target, l = u.width, v = u.height, c = u.allMatrix, d = u.is3d, p = u.left, h = u.top, g = u.pos1, m = u.pos2, b = u.pos3, y = u.pos4, x = u.clipPathState, E = u.snapBoundInfos, S = u.rotation;
    if (!f || s)
      return [];
    var C = Co(f, l, v, a || "inset", x || n);
    if (!C)
      return [];
    var w = d ? 4 : 3, D = C.type, _ = C.poses, z = _.map(function(it) {
      var ct = Dt(c, it.pos, w);
      return [
        ct[0] - p,
        ct[1] - h
      ];
    }), O = [], R = [], P = D === "rect", I = D === "inset", B = D === "polygon";
    if (P || I || B) {
      var W = I ? z.slice(0, 8) : z;
      R = W.map(function(it, ct) {
        var mt = ct === 0 ? W[W.length - 1] : W[ct - 1], bt = Mt(mt, it), ft = zu(mt, it);
        return r.createElement("div", { key: "clipLine".concat(ct), className: Q("line", "clip-line", "snap-control"), "data-clip-index": ct, style: {
          width: "".concat(ft, "px"),
          transform: "translate(".concat(mt[0], "px, ").concat(mt[1], "px) rotate(").concat(bt, "rad) scaleY(").concat(o, ")")
        } });
      });
    }
    if (O = z.map(function(it, ct) {
      return r.createElement("div", { key: "clipControl".concat(ct), className: Q("control", "clip-control", "snap-control"), "data-clip-index": ct, style: {
        transform: "translate(".concat(it[0], "px, ").concat(it[1], "px) rotate(").concat(S, "rad) scale(").concat(o, ")")
      } });
    }), I && O.push.apply(O, L([], T(z.slice(8).map(function(it, ct) {
      return r.createElement("div", { key: "clipRadiusControl".concat(ct), className: Q("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + ct, style: {
        transform: "translate(".concat(it[0], "px, ").concat(it[1], "px) rotate(").concat(S, "rad) scale(").concat(o, ")")
      } });
    })), !1)), D === "circle" || D === "ellipse") {
      var G = C.left, H = C.top, N = C.radiusX, k = C.radiusY, Y = T(rt(Dt(c, [G, H], w), Dt(c, [0, 0], w)), 2), $ = Y[0], V = Y[1], j = "none";
      if (!i) {
        for (var q = Math.max(10, N / 5, k / 5), U = [], J = 0; J <= q; ++J) {
          var at = Math.PI * 2 / q * J;
          U.push([
            N + (N - o) * Math.cos(at),
            k + (k - o) * Math.sin(at)
          ]);
        }
        U.push([N, -2]), U.push([-2, -2]), U.push([-2, k * 2 + 2]), U.push([N * 2 + 2, k * 2 + 2]), U.push([N * 2 + 2, -2]), U.push([N, -2]), j = "polygon(".concat(U.map(function(it) {
          return "".concat(it[0], "px ").concat(it[1], "px");
        }).join(", "), ")");
      }
      O.push(r.createElement("div", { key: "clipEllipse", className: Q("clip-ellipse", "snap-control"), style: {
        width: "".concat(N * 2, "px"),
        height: "".concat(k * 2, "px"),
        clipPath: j,
        transform: "translate(".concat(-p + $, "px, ").concat(-h + V, "px) ").concat(Nn(c))
      } }));
    }
    if (i) {
      var dt = Jt(L([g, m, b, y], T(z), !1)), X = dt.width, Z = dt.height, pt = dt.left, nt = dt.top;
      if (B || P || I) {
        var U = I ? z.slice(0, 8) : z;
        O.push(r.createElement("div", { key: "clipArea", className: Q("clip-area", "snap-control"), style: {
          width: "".concat(X, "px"),
          height: "".concat(Z, "px"),
          transform: "translate(".concat(pt, "px, ").concat(nt, "px)"),
          clipPath: "polygon(".concat(U.map(function(ct) {
            return "".concat(ct[0] - pt, "px ").concat(ct[1] - nt, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return E && ["vertical", "horizontal"].forEach(function(it) {
      var ct = E[it], mt = it === "horizontal";
      ct.isSnap && R.push.apply(R, L([], T(ct.snap.posInfos.map(function(bt, ft) {
        var gt = bt.pos, wt = rt(Dt(c, mt ? [0, gt] : [gt, 0], w), [p, h]), F = rt(Dt(c, mt ? [l, gt] : [gt, v], w), [p, h]);
        return Ie(r, "", wt, F, o, "clip".concat(it, "snap").concat(ft), "guideline");
      })), !1)), ct.isBound && R.push.apply(R, L([], T(ct.bounds.map(function(bt, ft) {
        var gt = bt.pos, wt = rt(Dt(c, mt ? [0, gt] : [gt, 0], w), [p, h]), F = rt(Dt(c, mt ? [l, gt] : [gt, v], w), [p, h]);
        return Ie(r, "", wt, F, o, "clip".concat(it, "bounds").concat(ft), "guideline", "bounds", "bold");
      })), !1));
    }), L(L([], T(O), !1), T(R), !1);
  },
  dragControlCondition: function(t, r) {
    return r.inputEvent && (r.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(t, r) {
    var e = t.props, n = e.dragWithClip, a = n === void 0 ? !0 : n;
    return a ? !1 : this.dragControlStart(t, r);
  },
  drag: function(t, r) {
    return this.dragControl(t, M(M({}, r), { isDragTarget: !0 }));
  },
  dragEnd: function(t, r) {
    return this.dragControlEnd(t, r);
  },
  dragControlStart: function(t, r) {
    var e = t.state, n = t.props, a = n.defaultClipPath, i = n.customClipPath, o = e.target, s = e.width, u = e.height, f = r.inputEvent ? r.inputEvent.target : null, l = f && f.getAttribute("class") || "", v = r.datas, c = Co(o, s, u, a || "inset", i);
    if (!c)
      return !1;
    var d = c.clipText, p = c.type, h = c.poses, g = K(t, "onClipStart", lt(t, r, {
      clipType: p,
      clipStyle: d,
      poses: h.map(function(m) {
        return m.pos;
      })
    }));
    return g === !1 ? (v.isClipStart = !1, !1) : (v.isControl = l && l.indexOf("clip-control") > -1, v.isLine = l.indexOf("clip-line") > -1, v.isArea = l.indexOf("clip-area") > -1 || l.indexOf("clip-ellipse") > -1, v.clipIndex = f ? parseInt(f.getAttribute("data-clip-index"), 10) : -1, v.clipPath = c, v.isClipStart = !0, e.clipPathState = d, Wr(t, r), !0);
  },
  dragControl: function(t, r) {
    var e, n, a, i = r.datas, o = r.originalDatas, s = r.isDragTarget;
    if (!i.isClipStart)
      return !1;
    var u = i, f = u.isControl, l = u.isLine, v = u.isArea, c = u.clipIndex, d = u.clipPath;
    if (!d)
      return !1;
    var p = Nr(t.props, "clippable"), h = p.keepRatio, g = 0, m = 0, b = o.draggable, y = lr(r);
    s && b ? (e = T(b.prevBeforeDist, 2), g = e[0], m = e[1]) : (n = T(y, 2), g = n[0], m = n[1]);
    var x = [g, m], E = t.state, S = E.width, C = E.height, w = !v && !f && !l, D = d.type, _ = d.poses, z = d.splitter, O = _.map(function(Et) {
      return Et.pos;
    });
    w && (g = -g, m = -m);
    var R = !f || _[c].direction === "nesw", P = D === "inset" || D === "rect", I = _.map(function() {
      return [0, 0];
    });
    if (f && !R) {
      var B = _[c], W = B.horizontal, G = B.vertical, H = [
        g * A(W),
        m * A(G)
      ];
      I = Fd(_, c, H, P, h);
    } else
      R && (I = O.map(function() {
        return [g, m];
      }));
    var N = O.map(function(Et, At) {
      return ht(Et, I[At]);
    }), k = L([], T(N), !1);
    E.snapBoundInfos = null;
    var Y = d.type === "circle", $ = d.type === "ellipse";
    if (Y || $) {
      var V = Jt(N), j = A(V.bottom - V.top), q = A($ ? V.right - V.left : j), U = N[0][1] + j, J = N[0][0] - q, at = N[0][0] + q;
      Y && (k.push([at, V.bottom]), I.push([1, 0])), k.push([V.left, U]), I.push([0, 1]), k.push([J, V.bottom]), I.push([1, 0]);
    }
    var dt = Cu((p.clipHorizontalGuidelines || []).map(function(Et) {
      return yt("".concat(Et), C);
    }), (p.clipVerticalGuidelines || []).map(function(Et) {
      return yt("".concat(Et), S);
    }), S, C), X = [], Z = [];
    if (Y || $)
      X = [k[4][0], k[2][0]], Z = [k[1][1], k[3][1]];
    else if (P) {
      var pt = [k[0], k[2], k[4], k[6]], nt = [I[0], I[2], I[4], I[6]];
      X = pt.filter(function(Et, At) {
        return nt[At][0];
      }).map(function(Et) {
        return Et[0];
      }), Z = pt.filter(function(Et, At) {
        return nt[At][1];
      }).map(function(Et) {
        return Et[1];
      });
    } else
      X = k.filter(function(Et, At) {
        return I[At][0];
      }).map(function(Et) {
        return Et[0];
      }), Z = k.filter(function(Et, At) {
        return I[At][1];
      }).map(function(Et) {
        return Et[1];
      });
    var it = [0, 0], ct = uo(dt, p.clipTargetBounds && { left: 0, top: 0, right: S, bottom: C }, X, Z, 5, 5), mt = ct.horizontal, bt = ct.vertical, ft = mt.offset, gt = bt.offset;
    if (mt.isBound && (it[1] += ft), bt.isBound && (it[0] += gt), ($ || Y) && I[0][0] === 0 && I[0][1] === 0) {
      var V = Jt(N), wt = V.bottom - V.top, F = $ ? V.right - V.left : wt, tt = bt.isBound ? A(gt) : bt.snapIndex === 0 ? -gt : gt, st = mt.isBound ? A(ft) : mt.snapIndex === 0 ? -ft : ft;
      F -= tt, wt -= st, Y && (wt = mu(bt, mt) > 0 ? wt : F, F = wt);
      var ut = k[0];
      k[1][1] = ut[1] - wt, k[2][0] = ut[0] + F, k[3][1] = ut[1] + wt, k[4][0] = ut[0] - F;
    } else if (P && h && f) {
      var St = T(Ku(_), 2), vt = St[0], et = St[1], Bt = vt && et ? vt / et : 0, $t = _[c], Yt = $t.direction || "", cr = k[1][1], U = k[5][1], J = k[7][0], at = k[3][0];
      A(ft) <= A(gt) ? ft = Wt(ft) * A(gt) / Bt : gt = Wt(gt) * A(ft) * Bt, Yt.indexOf("w") > -1 ? J -= gt : Yt.indexOf("e") > -1 ? at -= gt : (J += gt / 2, at -= gt / 2), Yt.indexOf("n") > -1 ? cr -= ft : Yt.indexOf("s") > -1 ? U -= ft : (cr += ft / 2, U -= ft / 2);
      var Dr = Cn(cr, at, U, J);
      k.forEach(function(Mi, mf) {
        var Ln;
        Ln = T(Dr[mf].pos, 2), Mi[0] = Ln[0], Mi[1] = Ln[1];
      });
    } else
      k.forEach(function(Et, At) {
        var Di = I[At];
        Di[0] && (Et[0] -= gt), Di[1] && (Et[1] -= ft);
      });
    var Yr = xi(t, d, N), Mr = "".concat(D, "(").concat(Yr.join(z), ")");
    if (E.clipPathState = Mr, Y || $)
      X = [k[4][0], k[2][0]], Z = [k[1][1], k[3][1]];
    else if (P) {
      var pt = [k[0], k[2], k[4], k[6]];
      X = pt.map(function(At) {
        return At[0];
      }), Z = pt.map(function(At) {
        return At[1];
      });
    } else
      X = k.map(function(Et) {
        return Et[0];
      }), Z = k.map(function(Et) {
        return Et[1];
      });
    if (E.snapBoundInfos = uo(dt, p.clipTargetBounds && { left: 0, top: 0, right: S, bottom: C }, X, Z, 1, 1), b) {
      var ve = E.is3d, de = E.allMatrix, gf = ve ? 4 : 3, Hn = it;
      s && (Hn = [
        x[0] + it[0] - y[0],
        x[1] + it[1] - y[1]
      ]), b.deltaOffset = xt(de, [Hn[0], Hn[1], 0, 0], gf);
    }
    return K(t, "onClip", lt(t, r, M({ clipEventType: "changed", clipType: D, poses: N, clipStyle: Mr, clipStyles: Yr, distX: g, distY: m }, Ht((a = {}, a[D === "rect" ? "clip" : "clipPath"] = Mr, a), r)))), !0;
  },
  dragControlEnd: function(t, r) {
    this.unset(t);
    var e = r.isDrag, n = r.datas, a = r.isDouble, i = n.isLine, o = n.isClipStart, s = n.isControl;
    return o ? (K(t, "onClipEnd", Kt(t, r, {})), a && (s ? Wd(t, r) : i && Nd(t, r)), a || e) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, Ld = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(t, r) {
    return r.isRequest ? r.requestAble === "originDraggable" : Pt(r.inputEvent.target, Q("origin"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas;
    Wr(t, r);
    var n = lt(t, r, {
      dragStart: Nt.dragStart(t, new ee().dragStart([0, 0], r))
    }), a = K(t, "onDragOriginStart", n);
    return e.startOrigin = t.state.transformOrigin, e.startTargetOrigin = t.state.targetOrigin, e.prevOrigin = [0, 0], e.isDragOrigin = !0, a === !1 ? (e.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isPinch, a = r.isRequest;
    if (!e.isDragOrigin)
      return !1;
    var i = T(lr(r), 2), o = i[0], s = i[1], u = t.state, f = u.width, l = u.height, v = u.offsetMatrix, c = u.targetMatrix, d = u.is3d, p = t.props.originRelative, h = p === void 0 ? !0 : p, g = d ? 4 : 3, m = [o, s];
    if (a) {
      var b = r.distOrigin;
      (b[0] || b[1]) && (m = b);
    }
    var y = ht(e.startOrigin, m), x = ht(e.startTargetOrigin, m), E = rt(m, e.prevOrigin), S = Ve(v, c, y, g), C = t.getRect(), w = Jt(Hr(S, f, l, g)), D = [
      C.left - w.left,
      C.top - w.top
    ];
    e.prevOrigin = m;
    var _ = [
      rr(x[0], f, h),
      rr(x[1], l, h)
    ].join(" "), z = Nt.drag(t, qe(r, t.state, D, !!n, !1)), O = lt(t, r, M(M({ width: f, height: l, origin: y, dist: m, delta: E, transformOrigin: _, drag: z }, Ht({
      transformOrigin: _,
      transform: z.transform
    }, r)), { afterTransform: z.transform }));
    return K(t, "onDragOrigin", O), O;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    return e.isDragOrigin ? (K(t, "onDragOriginEnd", Kt(t, r, {})), !0) : !1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    return !!e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    return e ? (t.transformOrigin = e.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, a = 0, i = e.transformOrigin, o = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(s) {
        return "deltaOrigin" in s ? (o[0] += s.deltaOrigin[0], o[1] += s.deltaOrigin[1]) : "origin" in s ? (o[0] = s.origin[0] - i[0], o[1] = s.origin[1] - i[1]) : ("x" in s ? n = s.x - e.left : "deltaX" in s && (n += s.deltaX), "y" in s ? a = s.y - e.top : "deltaY" in s && (a += s.deltaY)), { datas: r, distX: n, distY: a, distOrigin: o };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function Yd(t, r, e, n) {
  var a = t.filter(function(u) {
    var f = u.virtual, l = u.horizontal;
    return l && !f;
  }).length, i = t.filter(function(u) {
    var f = u.virtual, l = u.vertical;
    return l && !f;
  }).length, o = -1;
  if (r === 0 && (a === 0 ? o = 0 : a === 1 && (o = 1)), r === 2 && (a <= 2 ? o = 2 : a <= 3 && (o = 3)), r === 3 && (i === 0 ? o = 4 : i < 4 && (o = 7)), r === 1 && (i <= 1 ? o = 5 : i <= 2 && (o = 6)), !(o === -1 || !t[o].virtual)) {
    var s = t[o];
    Xd(t, o), o < 4 ? s.pos[0] = e : s.pos[1] = n;
  }
}
function Xd(t, r) {
  r < 4 ? t.slice(0, r + 1).forEach(function(e) {
    e.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, r + 1).forEach(function(e) {
    e.virtual = !1;
  }));
}
function qd(t, r) {
  r < 4 ? t.slice(r, 4).forEach(function(e) {
    e.virtual = !0;
  }) : t.slice(r).forEach(function(e) {
    e.virtual = !0;
  });
}
function Do(t, r, e, n, a) {
  n === void 0 && (n = [0, 0]);
  var i = [];
  return !t || t === "0px" ? i = [] : i = Er(t), Uu(i, r, e, 0, 0, n, a);
}
function Mo(t, r, e, n, a) {
  var i = t.state, o = i.width, s = i.height, u = yi(a, t.props.roundRelative, o, s), f = u.raws, l = u.styles, v = u.radiusPoses, c = kd(v, f), d = c.horizontals, p = c.verticals, h = l.join(" ");
  i.borderRadiusState = h;
  var g = lt(t, r, M({ horizontals: d, verticals: p, borderRadius: h, width: o, height: s, delta: n, dist: e }, Ht({
    borderRadius: h
  }, r)));
  return K(t, "onRound", g), g;
}
function Ro(t) {
  var r, e, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var i = t.moveables[0], o = t.getTargets()[0];
    o && ((i == null ? void 0 : i.props.target) === o ? (a = (e = (r = t.moveables[0]) === null || r === void 0 ? void 0 : r.state.style.borderRadius) !== null && e !== void 0 ? e : "", n.borderRadius = a) : (a = pi(o).borderRadius, n.borderRadius = a));
  }
  return a;
}
var Vd = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(t) {
    var r = t.props.roundClickable;
    return r === !0 || r === "line" ? Q("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, r) {
    var e = t.getState(), n = e.target, a = e.width, i = e.height, o = e.allMatrix, s = e.is3d, u = e.left, f = e.top, l = e.borderRadiusState, v = t.props, c = v.minRoundControls, d = c === void 0 ? [0, 0] : c, p = v.maxRoundControls, h = p === void 0 ? [4, 4] : p, g = v.zoom, m = v.roundPadding, b = m === void 0 ? 0 : m, y = v.isDisplayShadowRoundControls, x = v.groupable;
    if (!n)
      return null;
    var E = l || Ro(t), S = s ? 4 : 3, C = Do(E, a, i, d, !0);
    if (!C)
      return null;
    var w = 0, D = 0, _ = x ? [0, 0] : [u, f];
    return C.map(function(z, O) {
      var R = z.horizontal, P = z.vertical, I = z.direction || "", B = L([], T(z.pos), !1);
      D += Math.abs(R), w += Math.abs(P), R && I.indexOf("n") > -1 && (B[1] -= b), P && I.indexOf("w") > -1 && (B[0] -= b), R && I.indexOf("s") > -1 && (B[1] += b), P && I.indexOf("e") > -1 && (B[0] += b);
      var W = rt(Dt(o, B, S), _), G = y && y !== "horizontal", H = z.vertical ? w <= h[1] && (G || !z.virtual) : D <= h[0] && (y || !z.virtual);
      return r.createElement("div", { key: "borderRadiusControl".concat(O), className: Q("control", "border-radius", z.vertical ? "vertical" : "", z.virtual ? "virtual" : ""), "data-radius-index": O, style: {
        display: H ? "block" : "none",
        transform: "translate(".concat(W[0], "px, ").concat(W[1], "px) scale(").concat(g, ")")
      } });
    });
  },
  dragControlCondition: function(t, r) {
    if (!r.inputEvent || r.isRequest)
      return !1;
    var e = r.inputEvent.target.getAttribute("class") || "";
    return e.indexOf("border-radius") > -1 || e.indexOf("moveable-line") > -1 && e.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragControlStart: function(t, r) {
    var e = r.inputEvent, n = r.datas, a = e.target, i = a.getAttribute("class") || "", o = i.indexOf("border-radius") > -1, s = i.indexOf("moveable-line") > -1 && i.indexOf("moveable-direction") > -1, u = o ? parseInt(a.getAttribute("data-radius-index"), 10) : -1, f = -1;
    if (s) {
      var l = a.getAttribute("data-line-key") || "";
      l && (f = parseInt(l.replace(/render-line-/g, ""), 10), isNaN(f) && (f = -1));
    }
    if (!o && !s)
      return !1;
    var v = lt(t, r, {}), c = K(t, "onRoundStart", v);
    if (c === !1)
      return !1;
    n.lineIndex = f, n.controlIndex = u, n.isControl = o, n.isLine = s, Wr(t, r);
    var d = t.props, p = d.roundRelative, h = d.minRoundControls, g = h === void 0 ? [0, 0] : h, m = t.state, b = m.width, y = m.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var x = Ro(t), E = Do(x || "", b, y, g, !0) || [];
    return n.controlPoses = E, m.borderRadiusState = yi(E, p, b, y).styles.join(" "), v;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = e.controlPoses;
    if (!e.isRound || !e.isControl || !n.length)
      return !1;
    var a = e.controlIndex, i = T(lr(r), 2), o = i[0], s = i[1], u = [o, s], f = rt(u, e.prevDist), l = t.props.maxRoundControls, v = l === void 0 ? [4, 4] : l, c = t.state, d = c.width, p = c.height, h = n[a], g = h.vertical, m = h.horizontal, b = n.map(function(x) {
      var E = x.horizontal, S = x.vertical, C = [
        E * m * u[0],
        S * g * u[1]
      ];
      if (E) {
        if (v[0] === 1)
          return C;
        if (v[0] < 4 && E !== m)
          return C;
      } else {
        if (v[1] === 0)
          return C[1] = S * m * u[0] / d * p, C;
        if (g) {
          if (v[1] === 1)
            return C;
          if (v[1] < 4 && S !== g)
            return C;
        }
      }
      return [0, 0];
    });
    b[a] = u;
    var y = n.map(function(x, E) {
      return M(M({}, x), { pos: ht(x.pos, b[E]) });
    });
    return a < 4 ? y.slice(0, a + 1).forEach(function(x) {
      x.virtual = !1;
    }) : y.slice(4, a + 1).forEach(function(x) {
      x.virtual = !1;
    }), e.prevDist = [o, s], Mo(t, r, u, f, y);
  },
  dragControlEnd: function(t, r) {
    var e = t.state;
    e.borderRadiusState = "";
    var n = r.datas, a = r.isDouble;
    if (!n.isRound)
      return !1;
    var i = n.isControl, o = n.controlIndex, s = n.isLine, u = n.lineIndex, f = n.controlPoses, l = f.filter(function(m) {
      var b = m.virtual;
      return b;
    }).length, v = t.props.roundClickable, c = v === void 0 ? !0 : v;
    if (a && c) {
      if (i && (c === !0 || c === "control"))
        qd(f, o);
      else if (s && (c === !0 || c === "line")) {
        var d = T(Qs(t, r), 2), p = d[0], h = d[1];
        Yd(f, u, p, h);
      }
      l !== f.filter(function(m) {
        var b = m.virtual;
        return b;
      }).length && Mo(t, r, [0, 0], [0, 0], f);
    }
    var g = Kt(t, r, {});
    return K(t, "onRoundEnd", g), e.borderRadiusState = "", g;
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    if (!e)
      return !1;
    var n = t.moveables, a = t.props.targets, i = nr(t, "roundable", r), o = M({ targets: t.props.targets, events: i.map(function(s, u) {
      return M(M({}, s), { target: a[u], moveable: n[u], currentTarget: n[u] });
    }) }, e);
    return K(t, "onRoundGroupStart", o), e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    if (!e)
      return !1;
    var n = t.moveables, a = t.props.targets, i = nr(t, "roundable", r), o = M({ targets: t.props.targets, events: i.map(function(s, u) {
      return M(M(M({}, s), { target: a[u], moveable: n[u], currentTarget: n[u] }), Ht({
        borderRadius: e.borderRadius
      }, s));
    }) }, e);
    return K(t, "onRoundGroup", o), o;
  },
  dragGroupControlEnd: function(t, r) {
    var e = t.moveables, n = t.props.targets, a = nr(t, "roundable", r);
    Wn(t, "onRound", function(s) {
      var u = M({ targets: t.props.targets, events: a.map(function(f, l) {
        return M(M(M({}, f), { target: n[l], moveable: e[l], currentTarget: e[l] }), Ht({
          borderRadius: s.borderRadius
        }, f));
      }) }, s);
      K(t, "onRoundGroup", u);
    });
    var i = this.dragControlEnd(t, r);
    if (!i)
      return !1;
    var o = M({ targets: t.props.targets, events: a.map(function(s, u) {
      var f;
      return M(M({}, s), { target: n[u], moveable: e[u], currentTarget: e[u], lastEvent: (f = s.datas) === null || f === void 0 ? void 0 : f.lastEvent });
    }) }, i);
    return K(t, "onRoundGroupEnd", o), o;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function jd(t, r) {
  var e = r ? 4 : 3, n = _t(e), a = "matrix".concat(r ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var Zu = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(t, r) {
    var e = t.state, n = e.is3d, a = e.targetMatrix, i = e.inlineTransform, o = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(Ws(a, !0), ")"), s = !i || i === "none" ? o : i;
    r.datas.startTransforms = jd(s, n) ? [] : Er(s);
  },
  resetStyle: function(t) {
    var r = t.datas;
    r.nextStyle = {}, r.nextTransforms = t.datas.startTransforms, r.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, r) {
    return lt(t, r, {
      setTransform: function(e) {
        r.datas.startTransforms = Ot(e) ? e : Er(e);
      },
      isPinch: !!r.isPinch
    });
  },
  fillDragParams: function(t, r) {
    return lt(t, r, {
      isPinch: !!r.isPinch
    });
  },
  dragStart: function(t, r) {
    this.setTransform(t, r), this.resetStyle(r), K(t, "onBeforeRenderStart", this.fillDragStartParams(t, r));
  },
  drag: function(t, r) {
    r.datas.startTransforms || this.setTransform(t, r), this.resetStyle(r), K(t, "onBeforeRender", lt(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  dragEnd: function(t, r) {
    r.datas.startTransforms || (this.setTransform(t, r), this.resetStyle(r)), K(t, "onBeforeRenderEnd", lt(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag
    }));
  },
  dragGroupStart: function(t, r) {
    var e = this;
    this.dragStart(t, r);
    var n = nr(t, "beforeRenderable", r), a = t.moveables, i = n.map(function(o, s) {
      var u = a[s];
      return e.setTransform(u, o), e.resetStyle(o), e.fillDragStartParams(u, o);
    });
    K(t, "onBeforeRenderGroupStart", lt(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      setTransform: function() {
      },
      events: i
    }));
  },
  dragGroup: function(t, r) {
    var e = this;
    this.drag(t, r);
    var n = nr(t, "beforeRenderable", r), a = t.moveables, i = n.map(function(o, s) {
      var u = a[s];
      return e.resetStyle(o), e.fillDragParams(u, o);
    });
    K(t, "onBeforeRenderGroup", lt(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      events: i
    }));
  },
  dragGroupEnd: function(t, r) {
    this.dragEnd(t, r), K(t, "onBeforeRenderGroupEnd", lt(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag,
      targets: t.props.targets
    }));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  }
}, Ju = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(t, r) {
    K(t, "onRenderStart", lt(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  drag: function(t, r) {
    K(t, "onRender", this.fillDragParams(t, r));
  },
  dragAfter: function(t, r) {
    return this.drag(t, r);
  },
  dragEnd: function(t, r) {
    K(t, "onRenderEnd", this.fillDragEndParams(t, r));
  },
  dragGroupStart: function(t, r) {
    K(t, "onRenderGroupStart", lt(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, r) {
    var e = this, n = nr(t, "beforeRenderable", r), a = t.moveables, i = n.map(function(o, s) {
      var u = a[s];
      return e.fillDragParams(u, o);
    });
    K(t, "onRenderGroup", lt(t, r, M(M({ isPinch: !!r.isPinch, targets: t.props.targets, transform: Je(r), transformObject: {} }, Ht(Qe(r))), { events: i })));
  },
  dragGroupEnd: function(t, r) {
    var e = this, n = nr(t, "beforeRenderable", r), a = t.moveables, i = n.map(function(o, s) {
      var u = a[s];
      return e.fillDragEndParams(u, o);
    });
    K(t, "onRenderGroupEnd", lt(t, r, M({ isPinch: !!r.isPinch, isDrag: r.isDrag, targets: t.props.targets, events: i, transformObject: {}, transform: Je(r) }, Ht(Qe(r)))));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlAfter: function(t, r) {
    return this.dragAfter(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  },
  fillDragParams: function(t, r) {
    var e = {};
    return re(bn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), lt(t, r, M({ isPinch: !!r.isPinch, transformObject: e, transform: Je(r) }, Ht(Qe(r))));
  },
  fillDragEndParams: function(t, r) {
    var e = {};
    return re(bn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), lt(t, r, M({ isPinch: !!r.isPinch, isDrag: r.isDrag, transformObject: e, transform: Je(r) }, Ht(Qe(r))));
  }
};
function De(t, r, e, n, a, i, o) {
  i.clientDistX = i.distX, i.clientDistY = i.distY;
  var s = a === "Start", u = a === "End", f = a === "After", l = t.state.target, v = i.isRequest, c = n.indexOf("Control") > -1;
  if (!l || s && c && !v && t.areaElement === i.inputEvent.target)
    return !1;
  var d = L([], T(r), !1);
  if (v) {
    var p = i.requestAble;
    d.some(function(O) {
      return O.name === p;
    }) || d.push.apply(d, L([], T(t.props.ables.filter(function(O) {
      return O.name === p;
    })), !1));
  }
  if (!d.length || d.every(function(O) {
    return O.dragRelation;
  }))
    return !1;
  var h = i.inputEvent, g;
  u && h && (g = document.elementFromPoint(i.clientX, i.clientY) || h.target);
  var m = !1, b = function() {
    var O;
    m = !0, (O = i.stop) === null || O === void 0 || O.call(i);
  }, y = s && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  y && t.updateRect(a, !0, !1);
  var x = i.datas, E = c ? "controlGesto" : "targetGesto", S = t[E], C = function(O, R, P) {
    if (!(R in O) || S !== t[E])
      return !1;
    var I = O.name, B = x[I] || (x[I] = {});
    if (s && (B.isEventStart = !P || !O[P] || O[P](t, i)), !B.isEventStart)
      return !1;
    var W = O[R](t, M(M({}, i), { stop: b, datas: B, originalDatas: x, inputTarget: g }));
    return t._emitter.off(), s && W === !1 && (B.isEventStart = !1), W;
  };
  y && d.forEach(function(O) {
    O.unset && O.unset(t);
  }), C(Zu, "drag".concat(n).concat(a));
  var w = 0, D = 0;
  e.forEach(function(O) {
    if (m)
      return !1;
    var R = "".concat(O).concat(n).concat(a), P = "".concat(O).concat(n, "Condition");
    a === "" && !v && Wu(t.state, i);
    var I = d.filter(function(G) {
      return G[R];
    });
    I = I.filter(function(G, H) {
      return G.name && I.indexOf(G) === H;
    });
    var B = I.filter(function(G) {
      return C(G, R, P);
    }), W = B.length;
    m && ++w, W && ++D, !m && s && I.length && !W && (w += I.filter(function(G) {
      var H = G.name, N = x[H];
      return N.isEventStart ? G.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!f || D) && C(Ju, "drag".concat(n).concat(a));
  var _ = S !== t[E] || w === e.length;
  if ((u || m || _) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(O) {
    O.state.gestos = {};
  }), d.forEach(function(O) {
    O.unset && O.unset(t);
  })), s && !_ && !v && D && t.props.preventDefault && (i == null || i.preventDefault()), t.isUnmounted || _)
    return !1;
  if (!s && D && !o || u) {
    var z = t.props.flushSync || Ru;
    z(function() {
      t.updateRect(u ? a : "", !0, !1), t.forceUpdate();
    });
  }
  return !s && !u && !f && D && !o && De(t, r, e, n, a + "After", i), !0;
}
function Si(t, r) {
  return function(e, n) {
    var a;
    n === void 0 && (n = e.inputEvent.target);
    var i = n, o = t.areaElement, s = t._dragTarget;
    return !s || !r && (!((a = t.controlGesto) === null || a === void 0) && a.isFlag()) ? !1 : i === s || s.contains(i) || i === o || !t.isMoveableElement(i) && !t.controlBox.contains(i) || Pt(i, "moveable-area") || Pt(i, "moveable-padding") || Pt(i, "moveable-edgeDraggable");
  };
}
function Qu(t, r, e) {
  var n = t.controlBox, a = [], i = t.props, o = i.dragArea, s = t.state.target, u = i.dragTarget;
  a.push(n), (!o || u) && a.push(r), !o && u && s && r !== s && i.dragTargetSelf && a.push(s);
  var f = Si(t);
  return rf(t, a, "targetAbles", e, {
    dragStart: f,
    pinchStart: f
  });
}
function tf(t, r) {
  var e = t.controlBox, n = [];
  n.push(e);
  var a = Si(t, !0), i = function(o, s) {
    if (s === void 0 && (s = o.inputEvent.target), s === e)
      return !0;
    var u = a(o, s);
    return !u;
  };
  return rf(t, n, "controlAbles", r, {
    dragStart: i,
    pinchStart: i
  });
}
function rf(t, r, e, n, a) {
  a === void 0 && (a = {});
  var i = e === "targetAbles", o = t.props, s = o.pinchOutside, u = o.pinchThreshold, f = o.preventClickEventOnDrag, l = o.preventClickDefault, v = o.checkInput, c = o.dragFocusedInput, d = o.preventDefault, p = d === void 0 ? !0 : d, h = o.preventRightClick, g = h === void 0 ? !0 : h, m = o.preventWheelClick, b = m === void 0 ? !0 : m, y = o.dragContainer, x = ur(y, !0), E = {
    preventDefault: p,
    preventRightClick: g,
    preventWheelClick: b,
    container: x || Sr(t.getControlBoxElement()),
    pinchThreshold: u,
    pinchOutside: s,
    preventClickEventOnDrag: i ? f : !1,
    preventClickEventOnDragStart: i ? l : !1,
    preventClickEventByCondition: i ? null : function(w) {
      return t.controlBox.contains(w.target);
    },
    checkInput: i ? v : !1,
    dragFocusedInput: c
  }, S = new Sc(r, E), C = n === "Control";
  return ["drag", "pinch"].forEach(function(w) {
    ["Start", "", "End"].forEach(function(D) {
      S.on("".concat(w).concat(D), function(_) {
        var z, O = _.eventType, R = w === "drag" && _.isPinch;
        if (a[O] && !a[O](_)) {
          _.stop();
          return;
        }
        if (!R) {
          var P = w === "drag" ? [w] : ["drag", w], I = L([], T(t[e]), !1), B = De(t, I, P, n, D, _);
          B ? (t.props.stopPropagation || D === "Start" && C) && ((z = _ == null ? void 0 : _.inputEvent) === null || z === void 0 || z.stopPropagation()) : _.stop();
        }
      });
    });
  }), S;
}
var $d = /* @__PURE__ */ function() {
  function t(r, e, n) {
    var a = this;
    this.target = r, this.moveable = e, this.eventName = n, this.ables = [], this._onEvent = function(i) {
      var o = a.eventName, s = a.moveable;
      s.state.disableNativeEvent || a.ables.forEach(function(u) {
        u[o](s, {
          inputEvent: i
        });
      });
    }, r.addEventListener(n.toLowerCase(), this._onEvent);
  }
  return t.prototype.setAbles = function(r) {
    this.ables = r;
  }, t.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, t;
}();
function Ud(t, r, e, n) {
  var a;
  e === void 0 && (e = r);
  var i = iu(t, r), o = i.matrixes, s = i.is3d, u = i.targetMatrix, f = i.transformOrigin, l = i.targetOrigin, v = i.offsetContainer, c = i.hasFixed, d = i.zoom, p = lv(v, e), h = p.matrixes, g = p.is3d, m = p.offsetContainer, b = p.zoom, y = n || g || s, x = y ? 4 : 3, E = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, S = u, C = _t(x), w = _t(x), D = _t(x), _ = _t(x), z = o.length, O = h.map(function(H) {
    return M(M({}, H), { matrix: H.matrix ? L([], T(H.matrix), !1) : void 0 });
  }).reverse();
  o.reverse(), !s && y && (S = ir(S, 3, 4), Ba(o)), !g && y && Ba(O), O.forEach(function(H) {
    w = xt(w, H.matrix, x);
  });
  var R = e || Cr(t), P = ((a = O[0]) === null || a === void 0 ? void 0 : a.target) || Be(R, R, !0).offsetParent, I = O.slice(1).reduce(function(H, N) {
    return xt(H, N.matrix, x);
  }, _t(x));
  o.forEach(function(H, N) {
    if (z - 2 === N && (D = C.slice()), z - 1 === N && (_ = C.slice()), !H.matrix) {
      var k = o[N + 1], Y = dd(H, k, P, x, xt(I, C, x));
      H.matrix = Ar(Y, x);
    }
    C = xt(C, H.matrix, x);
  });
  var B = !E && s;
  S || (S = _t(B ? 4 : 3));
  var W = Nn(E && S.length === 16 ? ir(S, 4, 3) : S, B), G = w;
  return w = Fs(w, x, x), {
    hasZoom: d !== 1 || b !== 1,
    hasFixed: c,
    matrixes: o,
    rootMatrix: w,
    originalRootMatrix: G,
    beforeMatrix: D,
    offsetMatrix: _,
    allMatrix: C,
    targetMatrix: S,
    targetTransform: W,
    inlineTransform: t.style.transform,
    transformOrigin: f,
    targetOrigin: l,
    is3d: y,
    offsetContainer: v,
    offsetRootContainer: m
  };
}
function Kd(t, r, e, n) {
  e === void 0 && (e = r);
  var a = 0, i = 0, o = 0, s = {}, u = Pu(t);
  if (t && (a = u.offsetWidth, i = u.offsetHeight), t) {
    var f = Ud(t, r, e, n), l = Jr(f.allMatrix, f.transformOrigin, a, i);
    s = M(M({}, f), l);
    var v = Jr(f.allMatrix, [50, 50], 100, 100);
    o = Iu([v.pos1, v.pos2], v.direction);
  }
  var c = n ? 4 : 3;
  return M(M(M({ hasZoom: !1, width: a, height: i, rotation: o }, u), { originalRootMatrix: _t(c), rootMatrix: _t(c), beforeMatrix: _t(c), offsetMatrix: _t(c), allMatrix: _t(c), targetMatrix: _t(c), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !!n, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), s);
}
function Fa(t, r, e, n, a, i) {
  i === void 0 && (i = []);
  var o = 1, s = [0, 0], u = rn(), f = rn(), l = rn(), v = rn(), c = [0, 0], d = {}, p = Kd(r, e, a, !0);
  if (r) {
    var h = jt(r);
    i.forEach(function(O) {
      d[O] = h(O);
    });
    var g = p.is3d ? 4 : 3, m = Jr(p.offsetMatrix, ht(p.transformOrigin, Ns(p.targetMatrix, g)), p.width, p.height);
    o = m.direction, s = ht(m.origin, [m.left - p.left, m.top - p.top]), v = Ce(p.offsetRootContainer);
    var b = Be(n, n, !0).offsetParent || p.offsetRootContainer;
    if (p.hasZoom) {
      var y = Jr(xt(p.originalRootMatrix, p.allMatrix), p.transformOrigin, p.width, p.height), x = Jr(p.originalRootMatrix, En(jt(b)("transformOrigin")).map(function(O) {
        return parseFloat(O);
      }), b.offsetWidth, b.offsetHeight);
      if (u = ra(y, v), l = ra(x, v, b, !0), t) {
        var E = y.left, S = y.top;
        f = ra({
          left: E,
          top: S,
          bottom: S,
          right: S
        }, v);
      }
    } else {
      u = Ce(r), l = fv(b), t && (f = Ce(t));
      var C = l.left, w = l.top, D = l.clientLeft, _ = l.clientTop, z = [
        u.left - C,
        u.top - w
      ];
      c = rt(ie(p.rootMatrix, z, 4), [D + p.left, _ + p.top]);
    }
  }
  return M({ targetClientRect: u, containerClientRect: l, moveableClientRect: f, rootContainerClientRect: v, beforeDirection: o, beforeOrigin: s, originalBeforeOrigin: s, target: r, style: d, offsetDelta: c }, p);
}
function To(t) {
  var r = t.pos1, e = t.pos2, n = t.pos3, a = t.pos4;
  if (!r || !e || !n || !a)
    return null;
  var i = Fr([r, e, n, a]), o = [i.minX, i.minY], s = rt(t.origin, o);
  return r = rt(r, o), e = rt(e, o), n = rt(n, o), a = rt(a, o), M(M({}, t), {
    left: t.left,
    top: t.top,
    posDelta: o,
    pos1: r,
    pos2: e,
    pos3: n,
    pos4: a,
    origin: s,
    beforeOrigin: s,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var oe = /* @__PURE__ */ function(t) {
  Ye(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.state = M({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Fa(null)), e.renderState = {}, e.enabledAbles = [], e.targetAbles = [], e.controlAbles = [], e.rotation = 0, e.scale = [1, 1], e.isMoveableMounted = !1, e.isUnmounted = !1, e.events = {
      mouseEnter: null,
      mouseLeave: null
    }, e._emitter = new zn(), e._prevOriginalDragTarget = null, e._originalDragTarget = null, e._prevDragTarget = null, e._dragTarget = null, e._prevPropTarget = null, e._propTarget = null, e._prevDragArea = !1, e._isPropTargetChanged = !1, e._hasFirstTarget = !1, e._reiszeObserver = null, e._observerId = 0, e._mutationObserver = null, e._rootContainer = null, e._viewContainer = null, e._viewClassNames = [], e._store = {}, e.checkUpdateRect = function() {
      if (!e.isDragging()) {
        var n = e.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        fl(e._observerId), e._observerId = ds(function() {
          e.isDragging() || e.updateRect();
        });
      }
    }, e._onPreventClick = function(n) {
      n.stopPropagation(), n.preventDefault();
    }, e;
  }
  return r.prototype.render = function() {
    var e = this.props, n = this.getState(), a = e.parentPosition, i = e.className, o = e.target, s = e.zoom, u = e.cspNonce, f = e.translateZ, l = e.cssStyled, v = e.groupable, c = e.linePadding, d = e.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var p = T(a || [0, 0], 2), h = p[0], g = p[1], m = n.left, b = n.top, y = n.target, x = n.direction, E = n.hasFixed, S = n.offsetDelta, C = e.targets, w = this.isDragging(), D = {};
    this.getEnabledAbles().forEach(function(I) {
      D["data-able-".concat(I.name.toLowerCase())] = !0;
    });
    var _ = this._getAbleClassName(), z = C && C.length && (y || v) || o || !this._hasFirstTarget && this.state.isPersisted, O = this.controlBox || this.props.firstRenderState || this.props.persistData, R = [m - h, b - g];
    !v && e.useAccuratePosition && (R[0] += S[0], R[1] += S[1]);
    var P = {
      position: E ? "fixed" : "absolute",
      display: z ? "block" : "none",
      visibility: O ? "visible" : "hidden",
      transform: "translate3d(".concat(R[0], "px, ").concat(R[1], "px, ").concat(f, ")"),
      "--zoom": s,
      "--zoompx": "".concat(s, "px")
    };
    return c && (P["--moveable-line-padding"] = c), d && (P["--moveable-control-padding"] = d), er(
      l,
      M({ cspNonce: u, ref: vr(this, "controlBox"), className: "".concat(Q("control-box", x === -1 ? "reverse" : "", w ? "dragging" : ""), " ").concat(_, " ").concat(i) }, D, { onClick: this._onPreventClick, style: P }),
      this.renderAbles(),
      this._renderLines()
    );
  }, r.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var e = this.props, n = e.parentMoveable, a = e.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !a && !n && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, r.prototype.componentDidUpdate = function(e) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(e);
  }, r.prototype.componentWillUnmount = function() {
    var e, n;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (e = this._reiszeObserver) === null || e === void 0 || e.disconnect(), (n = this._mutationObserver) === null || n === void 0 || n.disconnect();
    var a = this._viewContainer;
    a && this._changeAbleViewClassNames([]), Kr(this, !1), Kr(this, !0);
    var i = this.events;
    for (var o in i) {
      var s = i[o];
      s && s.destroy();
    }
  }, r.prototype.getTargets = function() {
    var e = this.props.target;
    return e ? [e] : [];
  }, r.prototype.getAble = function(e) {
    var n = this.props.ables || [];
    return Vt(n, function(a) {
      return a.name === e;
    });
  }, r.prototype.getContainer = function() {
    var e = this.props, n = e.parentMoveable, a = e.wrapperMoveable, i = e.container;
    return i || a && a.getContainer() || n && n.getContainer() || this.controlBox.parentElement;
  }, r.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, r.prototype.getDragElement = function() {
    return this._dragTarget;
  }, r.prototype.isMoveableElement = function(e) {
    var n;
    return e && (((n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "class")) || "").indexOf(ei) > -1;
  }, r.prototype.dragStart = function(e, n) {
    n === void 0 && (n = e.target);
    var a = this.targetGesto, i = this.controlGesto;
    return a && Si(this)({ inputEvent: e }, n) ? a.isFlag() || a.triggerDragStart(e) : i && this.isMoveableElement(n) && (i.isFlag() || i.triggerDragStart(e)), this;
  }, r.prototype.hitTest = function(e) {
    var n = this.state, a = n.target, i = n.pos1, o = n.pos2, s = n.pos3, u = n.pos4, f = n.targetClientRect;
    if (!a)
      return 0;
    var l;
    if (ue(e)) {
      var v = e.getBoundingClientRect();
      l = {
        left: v.left,
        top: v.top,
        width: v.width,
        height: v.height
      };
    } else
      l = M({ width: 0, height: 0 }, e);
    var c = l.left, d = l.top, p = l.width, h = l.height, g = Zi([i, o, u, s], f), m = hc(g, [
      [c, d],
      [c + p, d],
      [c + p, d + h],
      [c, d + h]
    ]), b = Ys(g);
    return !m || !b ? 0 : Math.min(100, m / b * 100);
  }, r.prototype.isInside = function(e, n) {
    var a = this.state, i = a.target, o = a.pos1, s = a.pos2, u = a.pos3, f = a.pos4, l = a.targetClientRect;
    return i ? Sa([e, n], Zi([o, s, f, u], l)) : !1;
  }, r.prototype.updateRect = function(e, n, a) {
    a === void 0 && (a = !0);
    var i = this.props, o = !i.parentPosition && !i.wrapperMoveable;
    o && ne(!0);
    var s = i.parentMoveable, u = this.state, f = u.target || i.target, l = this.getContainer(), v = s ? s._rootContainer : this._rootContainer, c = Fa(this.controlBox, f, l, l, v || l, this._getRequestStyles());
    if (!f && this._hasFirstTarget && i.persistData) {
      var d = To(i.persistData);
      for (var p in d)
        c[p] = d[p];
    }
    o && ne(), this.updateState(c, s ? !1 : a);
  }, r.prototype.isDragging = function(e) {
    var n, a, i = this.targetGesto, o = this.controlGesto;
    if (i != null && i.isFlag()) {
      if (!e)
        return !0;
      var s = i.getEventData();
      return !!(!((n = s[e]) === null || n === void 0) && n.isEventStart);
    }
    if (o != null && o.isFlag()) {
      if (!e)
        return !0;
      var s = o.getEventData();
      return !!(!((a = s[e]) === null || a === void 0) && a.isEventStart);
    }
    return !1;
  }, r.prototype.updateTarget = function(e) {
    this.updateRect(e, !0);
  }, r.prototype.getRect = function() {
    var e = this.state, n = tr(this.state), a = T(n, 4), i = a[0], o = a[1], s = a[2], u = a[3], f = Jt(n), l = e.width, v = e.height, c = f.width, d = f.height, p = f.left, h = f.top, g = [e.left, e.top], m = ht(g, e.origin), b = ht(g, e.beforeOrigin), y = e.transformOrigin;
    return {
      width: c,
      height: d,
      left: p,
      top: h,
      pos1: i,
      pos2: o,
      pos3: s,
      pos4: u,
      offsetWidth: l,
      offsetHeight: v,
      beforeOrigin: b,
      origin: m,
      transformOrigin: y,
      rotation: this.getRotation()
    };
  }, r.prototype.getManager = function() {
    return this;
  }, r.prototype.stopDrag = function(e) {
    if (!e || e === "target") {
      var n = this.targetGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && ka(this, !1), n == null || n.stop();
    }
    if (!e || e === "control") {
      var n = this.controlGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && ka(this, !0), n == null || n.stop();
    }
  }, r.prototype.getRotation = function() {
    var e = this.state, n = e.pos1, a = e.pos2, i = e.direction;
    return yd(n, a, i);
  }, r.prototype.request = function(e, n, a) {
    n === void 0 && (n = {});
    var i = this, o = i.props, s = o.parentMoveable || o.wrapperMoveable || i, u = s.props.ables, f = o.groupable, l = Vt(u, function(m) {
      return m.name === e;
    });
    if (this.isDragging() || !l || !l.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var v = l.request(i), c = a || n.isInstant, d = v.isControl ? "controlAbles" : "targetAbles", p = "".concat(f ? "Group" : "").concat(v.isControl ? "Control" : ""), h = L([], T(s[d]), !1), g = {
      request: function(m) {
        return De(i, h, ["drag"], p, "", M(M({}, v.request(m)), { requestAble: e, isRequest: !0 }), c), g;
      },
      requestEnd: function() {
        return De(i, h, ["drag"], p, "End", M(M({}, v.requestEnd()), { requestAble: e, isRequest: !0 }), c), g;
      }
    };
    return De(i, h, ["drag"], p, "Start", M(M({}, v.requestStart(n)), { requestAble: e, isRequest: !0 }), c), c ? g.request(n).requestEnd() : g;
  }, r.prototype.getMoveables = function() {
    return [this];
  }, r.prototype.destroy = function() {
    this.componentWillUnmount();
  }, r.prototype.updateRenderPoses = function() {
    var e = this.getState(), n = this.props, a = n.padding, i = e.originalBeforeOrigin, o = e.transformOrigin, s = e.allMatrix, u = e.is3d, f = e.pos1, l = e.pos2, v = e.pos3, c = e.pos4, d = e.left, p = e.top, h = e.isPersisted, g = n.zoom || 1;
    if (!a && g <= 1) {
      e.renderPoses = [
        f,
        l,
        v,
        c
      ], e.renderLines = [
        [f, l],
        [l, c],
        [c, v],
        [v, f]
      ];
      return;
    }
    var m = Xu(a || {}), b = m.left, y = m.top, x = m.bottom, E = m.right, S = u ? 4 : 3, C = [];
    h ? C = o : this.controlBox && n.groupable ? C = i : C = ht(i, [d, p]);
    var w = gn(S, Ar(C.map(function(P) {
      return -P;
    }), S), s, Ar(o, S)), D = Zt(w, f, [-b, -y], S), _ = Zt(w, l, [E, -y], S), z = Zt(w, v, [-b, x], S), O = Zt(w, c, [E, x], S);
    if (e.renderPoses = [
      D,
      _,
      z,
      O
    ], e.renderLines = [
      [D, _],
      [_, O],
      [O, z],
      [z, D]
    ], g) {
      var R = g / 2;
      e.renderLines = [
        [
          Zt(w, f, [-b - R, -y], S),
          Zt(w, l, [E + R, -y], S)
        ],
        [
          Zt(w, l, [E, -y - R], S),
          Zt(w, c, [E, x + R], S)
        ],
        [
          Zt(w, c, [E + R, x], S),
          Zt(w, v, [-b - R, x], S)
        ],
        [
          Zt(w, v, [-b, x + R], S),
          Zt(w, f, [-b, -y - R], S)
        ]
      ];
    }
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var e = this.props, n = e.target, a = e.container, i = e.parentMoveable, o = this.state, s = o.target, u = o.container;
    if (!(!s && !n)) {
      this.updateAbles();
      var f = !Ga(s, n), l = f || !Ga(u, a);
      if (l) {
        var v = a || this.controlBox;
        v && this.unsetAbles(), this.updateState({ target: n, container: a }), !i && v && this.updateRect("End", !1, !1), this._isPropTargetChanged = f;
      }
    }
  }, r.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, r.prototype.triggerEvent = function(e, n) {
    var a = this.props;
    if (this._emitter.trigger(e, n), a.parentMoveable && n.isRequest && !n.isRequestChild)
      return a.parentMoveable.triggerEvent(e, n, !0);
    var i = a[e];
    return i && i(n);
  }, r.prototype.useCSS = function(e, n) {
    var a = this.props.customStyledMap, i = e + n;
    return a[i] || (a[i] = Vs(e, n)), a[i];
  }, r.prototype.getState = function() {
    var e, n = this.props;
    (n.target || !((e = n.targets) === null || e === void 0) && e.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, i = n.persistData, o = n.firstRenderState;
    if (o && !a)
      return o;
    if (!this._hasFirstTarget && i) {
      var s = To(i);
      if (s)
        return this.updateState(s, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, r.prototype.updateSelectors = function() {
  }, r.prototype.unsetAbles = function() {
    var e = this;
    this.targetAbles.forEach(function(n) {
      n.unset && n.unset(e);
    });
  }, r.prototype.updateAbles = function(e, n) {
    e === void 0 && (e = this.props.ables), n === void 0 && (n = "");
    var a = this.props, i = a.triggerAblesSimultaneously, o = this.getEnabledAbles(e), s = "drag".concat(n, "Start"), u = "pinch".concat(n, "Start"), f = "drag".concat(n, "ControlStart"), l = en(o, [s, u], i), v = en(o, [f], i);
    this.enabledAbles = o, this.targetAbles = l, this.controlAbles = v;
  }, r.prototype.updateState = function(e, n) {
    if (n) {
      if (this.isUnmounted)
        return;
      this.setState(e);
    } else {
      var a = this.state;
      for (var i in e)
        a[i] = e[i];
    }
  }, r.prototype.getEnabledAbles = function(e) {
    e === void 0 && (e = this.props.ables);
    var n = this.props;
    return e.filter(function(a) {
      return a && (a.always && n[a.name] !== !1 || n[a.name]);
    });
  }, r.prototype.renderAbles = function() {
    var e = this, n = this.props, a = n.triggerAblesSimultaneously, i = {
      createElement: er
    };
    return this.renderState = {}, gd(Nu(en(this.getEnabledAbles(), ["render"], a).map(function(o) {
      var s = o.render;
      return s(e, i) || [];
    })).filter(function(o) {
      return o;
    }), function(o) {
      var s = o.key;
      return s;
    }).map(function(o) {
      return o[0];
    });
  }, r.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, r.prototype._getRequestStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, a) {
      var i, o, s = (o = (i = a.requestStyle) === null || i === void 0 ? void 0 : i.call(a)) !== null && o !== void 0 ? o : [];
      return L(L([], T(n), !1), T(s), !1);
    }, L([], T(this.props.requestStyles || []), !1));
    return e;
  }, r.prototype._updateObserver = function(e) {
    this._updateResizeObserver(e), this._updateMutationObserver(e);
  }, r.prototype._updateEvents = function() {
    var e = this.targetAbles.length, n = this.controlAbles.length, a = this._dragTarget, i = !e && this.targetGesto || this._isTargetChanged(!0);
    i && (Kr(this, !1), this.updateState({ gestos: {} })), n || Kr(this, !0), a && e && !this.targetGesto && (this.targetGesto = Qu(this, a, "")), !this.controlGesto && n && (this.controlGesto = tf(this, "Control"));
  }, r.prototype._updateTargets = function() {
    var e = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = e.dragArea, this._propTarget = e.target, this._originalDragTarget = e.dragTarget || e.target, this._dragTarget = ur(this._originalDragTarget, !0);
  }, r.prototype._renderLines = function() {
    var e = this.props, n = e, a = n.zoom, i = n.hideDefaultLines, o = n.hideChildMoveableDefaultLines, s = n.parentMoveable;
    if (i || s && o)
      return [];
    var u = this.getState(), f = {
      createElement: er
    };
    return u.renderLines.map(function(l, v) {
      return Ie(f, "", l[0], l[1], a, "render-line-".concat(v));
    });
  }, r.prototype._isTargetChanged = function(e) {
    var n = this.props, a = n.dragTarget || n.target, i = this._prevOriginalDragTarget, o = this._prevDragArea, s = n.dragArea, u = !s && i !== a, f = (e || s) && o !== s;
    return u || f || this._prevPropTarget != this._propTarget;
  }, r.prototype._updateNativeEvents = function() {
    var e = this, n = this.props, a = n.dragArea ? this.areaElement : this.state.target, i = this.events, o = gr(i);
    if (this._isTargetChanged())
      for (var s in i) {
        var u = i[s];
        u && u.destroy(), i[s] = null;
      }
    if (a) {
      var f = this.enabledAbles;
      o.forEach(function(l) {
        var v = en(f, [l]), c = v.length > 0, d = i[l];
        if (!c) {
          d && (d.destroy(), i[l] = null);
          return;
        }
        d || (d = new $d(a, e, l), i[l] = d), d.setAbles(v);
      });
    }
  }, r.prototype._checkUpdateRootContainer = function() {
    var e = this.props.rootContainer;
    !this._rootContainer && e && (this._rootContainer = ur(e, !0));
  }, r.prototype._checkUpdateViewContainer = function() {
    var e = this.props.viewContainer;
    !this._viewContainer && e && (this._viewContainer = ur(e, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(L(L([], T(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? Dd : ""
    ], !1));
  }, r.prototype._changeAbleViewClassNames = function(e) {
    var n = this._viewContainer, a = Fu(e.filter(Boolean), function(f) {
      return f;
    }).map(function(f) {
      var l = T(f, 1), v = l[0];
      return v;
    }), i = this._viewClassNames, o = Fe(i, a), s = o.removed, u = o.added;
    s.forEach(function(f) {
      bs(n, i[f]);
    }), u.forEach(function(f) {
      ms(n, a[f]);
    }), this._viewClassNames = a;
  }, r.prototype._getAbleViewClassNames = function() {
    var e = this;
    return (this.getEnabledAbles().map(function(n) {
      var a;
      return ((a = n.viewClassName) === null || a === void 0 ? void 0 : a.call(n, e)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, r.prototype._getAbleClassName = function(e) {
    var n = this;
    e === void 0 && (e = "");
    var a = this.getEnabledAbles(), i = this.targetGesto, o = this.controlGesto, s = i != null && i.isFlag() ? i.getEventData() : {}, u = o != null && o.isFlag() ? o.getEventData() : {};
    return a.map(function(f) {
      var l, v, c, d = f.name, p = ((l = f.className) === null || l === void 0 ? void 0 : l.call(f, n)) || "";
      return (!((v = s[d]) === null || v === void 0) && v.isEventStart || !((c = u[d]) === null || c === void 0) && c.isEventStart) && (p += " ".concat(Q("".concat(d).concat(e, "-dragging")))), p.trim();
    }).filter(Boolean).join(" ");
  }, r.prototype._updateResizeObserver = function(e) {
    var n, a = this.props, i = a.target, o = Sr(this.getControlBoxElement());
    if (!o.ResizeObserver || !i || !a.useResizeObserver) {
      (n = this._reiszeObserver) === null || n === void 0 || n.disconnect();
      return;
    }
    if (!(e.target === i && this._reiszeObserver)) {
      var s = new o.ResizeObserver(this.checkUpdateRect);
      s.observe(i, {
        box: "border-box"
      }), this._reiszeObserver = s;
    }
  }, r.prototype._updateMutationObserver = function(e) {
    var n = this, a, i = this.props, o = i.target, s = Sr(this.getControlBoxElement());
    if (!s.MutationObserver || !o || !i.useMutationObserver) {
      (a = this._mutationObserver) === null || a === void 0 || a.disconnect();
      return;
    }
    if (!(e.target === o && this._mutationObserver)) {
      var u = new s.MutationObserver(function(f) {
        var l, v;
        try {
          for (var c = Pc(f), d = c.next(); !d.done; d = c.next()) {
            var p = d.value;
            p.type === "attributes" && p.attributeName === "style" && n.checkUpdateRect();
          }
        } catch (h) {
          l = { error: h };
        } finally {
          try {
            d && !d.done && (v = c.return) && v.call(c);
          } finally {
            if (l)
              throw l.error;
          }
        }
      });
      u.observe(o, {
        attributes: !0
      }), this._mutationObserver = u;
    }
  }, r.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    preventRightClick: !0,
    preventWheelClick: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: Ru,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, r;
}(Cs), Ei = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(t, r) {
    var e, n = t.props, a = n.targets || [], i = t.getState(), o = i.left, s = i.top, u = i.isPersisted, f = n.zoom || 1, l = t.renderGroupRects, v = ((e = n.persistData) === null || e === void 0 ? void 0 : e.children) || [];
    u ? a = v.map(function() {
      return null;
    }) : v = [];
    var c = Zr(t, "parentPosition", [o, s], function(p) {
      return p.join(",");
    }), d = Zr(t, "requestStyles", t.getRequestChildStyles(), function(p) {
      return p.join(",");
    });
    return t.moveables = t.moveables.slice(0, a.length), L(L([], T(a.map(function(p, h) {
      return r.createElement(oe, { key: "moveable" + h, ref: fs(t, "moveables", h), target: p, origin: !1, requestStyles: d, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [o, s], persistData: v[h], zoom: f });
    })), !1), T(Nu(l.map(function(p, h) {
      var g = p.pos1, m = p.pos2, b = p.pos3, y = p.pos4, x = [g, m, b, y];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(E, S) {
        var C = T(E, 2), w = C[0], D = C[1];
        return Ie(r, "", rt(x[w], c), rt(x[D], c), f, "group-rect-".concat(h, "-").concat(S));
      });
    }))), !1);
  }
}, Zd = Xe("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(t, r) {
    r.datas.inputTarget = r.inputEvent && r.inputEvent.target;
  },
  dragEnd: function(t, r) {
    var e = t.props.target, n = r.inputEvent, a = r.inputTarget, i = t.isMoveableElement(a), o = !i && t.controlBox.contains(a);
    if (!(!n || !a || r.isDrag || t.isMoveableElement(a) || o)) {
      var s = e.contains(a);
      K(t, "onClick", lt(t, r, {
        isDouble: r.isDouble,
        inputTarget: a,
        isTarget: e === a,
        moveableTarget: t.props.target,
        containsTarget: s
      }));
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.inputEvent, n = r.inputTarget;
    if (!(!e || !n || r.isDrag || t.isMoveableElement(n) || r.datas.inputTarget === n)) {
      var a = t.props.targets, i = a.indexOf(n), o = i > -1, s = !1;
      i === -1 && (i = hr(a, function(u) {
        return u.contains(n);
      }), s = i > -1), K(t, "onClickGroup", lt(t, r, {
        isDouble: r.isDouble,
        targets: a,
        inputTarget: n,
        targetIndex: i,
        isTarget: o,
        containsTarget: s,
        moveableTarget: a[i]
      }));
    }
  },
  dragControlEnd: function(t, r) {
    this.dragEnd(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    this.dragEnd(t, r);
  }
});
function Xr(t) {
  var r = t.originalDatas.draggable;
  return r || (t.originalDatas.draggable = {}, r = t.originalDatas.draggable), M(M({}, t), { datas: r });
}
var Jd = Xe("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.edgeDraggable;
    return n ? uu(r, "edgeDraggable", n, t.getState().renderPoses, e.zoom) : [];
  },
  dragCondition: function(t, r) {
    var e, n = t.props, a = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Pt(a, Q("direction")) && Pt(a, Q("edge")) && Pt(a, Q("edgeDraggable"));
  },
  dragStart: function(t, r) {
    return Nt.dragStart(t, Xr(r));
  },
  drag: function(t, r) {
    return Nt.drag(t, Xr(r));
  },
  dragEnd: function(t, r) {
    return Nt.dragEnd(t, Xr(r));
  },
  dragGroupCondition: function(t, r) {
    var e, n = t.props, a = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Pt(a, Q("direction")) && Pt(a, Q("line"));
  },
  dragGroupStart: function(t, r) {
    return Nt.dragGroupStart(t, Xr(r));
  },
  dragGroup: function(t, r) {
    return Nt.dragGroup(t, Xr(r));
  },
  dragGroupEnd: function(t, r) {
    return Nt.dragGroupEnd(t, Xr(r));
  },
  unset: function(t) {
    return Nt.unset(t);
  }
}), ef = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, wi = [
  Zu,
  ju,
  nd,
  Sd,
  Nt,
  Jd,
  za,
  Ed,
  _d,
  Nv,
  Td,
  Od,
  Md,
  Ld,
  Hd,
  Vd,
  Ei,
  ef,
  Zd,
  Vu,
  Ju
], Qd = /* @__PURE__ */ wi.reduce(function(t, r) {
  return (r.events || []).forEach(function(e) {
    gs(t, e);
  }), t;
}, []), tp = /* @__PURE__ */ wi.reduce(function(t, r) {
  return (r.props || []).forEach(function(e) {
    gs(t, e);
  }), t;
}, []);
function Oo(t, r) {
  var e = T(t, 3), n = e[0], a = e[1], i = e[2];
  return (n * r[0] + a * r[1] + i) / Math.sqrt(n * n + a * a);
}
function on(t, r) {
  var e = T(t, 2), n = e[0], a = e[1];
  return -n * r[0] - a * r[1];
}
function zo(t, r) {
  return Math.max.apply(Math, L([], T(t.map(function(e) {
    var n = T(e, 4), a = n[0], i = n[1], o = n[2], s = n[3];
    return Math.max(a[r], i[r], o[r], s[r]);
  })), !1));
}
function Po(t, r) {
  return Math.min.apply(Math, L([], T(t.map(function(e) {
    var n = T(e, 4), a = n[0], i = n[1], o = n[2], s = n[3];
    return Math.min(a[r], i[r], o[r], s[r]);
  })), !1));
}
function rp(t, r) {
  var e, n, a, i = [0, 0], o = [0, 0], s = [0, 0], u = [0, 0], f = 0, l = 0;
  if (!t.length)
    return {
      pos1: i,
      pos2: o,
      pos3: s,
      pos4: u,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: f,
      height: l,
      rotation: r
    };
  var v = ot(r, Lt);
  if (v % 90) {
    var c = v / 180 * Math.PI, d = Math.tan(c), p = -1 / d, h = [Ma, to], g = [[0, 0], [0, 0]], m = [Ma, to], b = [[0, 0], [0, 0]];
    t.forEach(function($) {
      $.forEach(function(V) {
        var j = Oo([-d, 1, 0], V), q = Oo([-p, 1, 0], V);
        h[0] > j && (g[0] = V, h[0] = j), h[1] < j && (g[1] = V, h[1] = j), m[0] > q && (b[0] = V, m[0] = q), m[1] < q && (b[1] = V, m[1] = q);
      });
    });
    var y = T(g, 2), x = y[0], E = y[1], S = T(b, 2), C = S[0], w = S[1], D = [-d, 1, on([-d, 1], x)], _ = [-d, 1, on([-d, 1], E)], z = [-p, 1, on([-p, 1], C)], O = [-p, 1, on([-p, 1], w)];
    e = T([
      [D, z],
      [D, O],
      [_, z],
      [_, O]
    ].map(function($) {
      var V = T($, 2), j = V[0], q = V[1];
      return ti(j, q)[0];
    }), 4), i = e[0], o = e[1], s = e[2], u = e[3], f = m[1] - m[0], l = h[1] - h[0];
  } else {
    var R = Po(t, 0), P = Po(t, 1), I = zo(t, 0), B = zo(t, 1);
    if (i = [R, P], o = [I, P], s = [R, B], u = [I, B], f = I - R, l = B - P, v % 180) {
      var W = [s, i, u, o];
      n = T(W, 4), i = n[0], o = n[1], s = n[2], u = n[3], f = B - P, l = I - R;
    }
  }
  if (v % 360 > 180) {
    var W = [u, s, o, i];
    a = T(W, 4), i = a[0], o = a[1], s = a[2], u = a[3];
  }
  var G = Fr([i, o, s, u]), H = G.minX, N = G.minY, k = G.maxX, Y = G.maxY;
  return {
    pos1: i,
    pos2: o,
    pos3: s,
    pos4: u,
    width: f,
    height: l,
    minX: H,
    minY: N,
    maxX: k,
    maxY: Y,
    rotation: r
  };
}
function nf(t, r) {
  var e = r.map(function(n) {
    if (Ot(n)) {
      var a = nf(t, n), i = a.length;
      return i > 1 ? a : i === 1 ? a[0] : null;
    } else {
      var o = Vt(t, function(s) {
        var u = s.manager;
        return u.props.target === n;
      });
      return o ? (o.finded = !0, o.manager) : null;
    }
  }).filter(Boolean);
  return e.length === 1 && Ot(e[0]) ? e[0] : e;
}
var ep = /* @__PURE__ */ function(t) {
  Ye(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.differ = new Ls(), e.moveables = [], e.transformOrigin = "50% 50%", e.renderGroupRects = [], e._targetGroups = [], e._hasFirstTargets = !1, e;
  }
  return r.prototype.componentDidMount = function() {
    t.prototype.componentDidMount.call(this);
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, a) {
    var i;
    a === void 0 && (a = !0);
    var o = this.state;
    if (!this.controlBox || o.isPersisted)
      return;
    ne(!0), this.moveables.forEach(function(J) {
      J.updateRect(e, !1, !1);
    });
    var s = this.props, u = this.moveables, f = o.target || s.target, l = u.map(function(J) {
      return { finded: !1, manager: J };
    }), v = this.props.targetGroups || [], c = nf(l, v), d = s.useDefaultGroupRotate;
    c.push.apply(c, L([], T(l.filter(function(J) {
      var at = J.finded;
      return !at;
    }).map(function(J) {
      var at = J.manager;
      return at;
    })), !1));
    var p = [], h = !n || e !== "" && s.updateGroup, g = s.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var m = (i = s.persistData) === null || i === void 0 ? void 0 : i.rotation;
      m != null && (g = m);
    }
    function b(J, at, dt) {
      var X = J.map(function(bt) {
        if (Ot(bt)) {
          var ft = b(bt, at), gt = [ft.pos1, ft.pos2, ft.pos3, ft.pos4];
          return p.push(ft), { poses: gt, rotation: ft.rotation };
        } else
          return {
            poses: tr(bt.state),
            rotation: bt.getRotation()
          };
      }), Z = X.map(function(bt) {
        var ft = bt.rotation;
        return ft;
      }), pt = 0, nt = Z[0], it = Z.every(function(bt) {
        return Math.abs(nt - bt) < 0.1;
      });
      h ? pt = !d && it ? nt : g : pt = !d && !dt && it ? nt : at;
      var ct = X.map(function(bt) {
        var ft = bt.poses;
        return ft;
      }), mt = rp(ct, pt);
      return mt;
    }
    var y = b(c, this.rotation, !0);
    h && (this.rotation = y.rotation, this.transformOrigin = s.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = v, this.renderGroupRects = p;
    var x = this.transformOrigin, E = this.rotation, S = this.scale, C = y.width, w = y.height, D = y.minX, _ = y.minY, z = xd([
      [0, 0],
      [C, 0],
      [0, w],
      [C, w]
    ], bi(x, C, w), this.rotation / 180 * Math.PI), O = Fr(z.result), R = O.minX, P = O.minY, I = " rotate(".concat(E, "deg)") + " scale(".concat(Wt(S[0]), ", ").concat(Wt(S[1]), ")"), B = "translate(".concat(-R, "px, ").concat(-P, "px)").concat(I);
    this.controlBox.style.transform = "translate3d(".concat(D, "px, ").concat(_, "px, ").concat(this.props.translateZ || 0, ")"), f.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(x, ";") + "width:".concat(C, "px;height:").concat(w, "px;") + "transform: ".concat(B), o.width = C, o.height = w;
    var W = this.getContainer(), G = Fa(this.controlBox, f, this.controlBox, this.getContainer(), this._rootContainer || W, []), H = [G.left, G.top], N = T(tr(G), 4), k = N[0], Y = N[1], $ = N[2], V = N[3], j = Fr([k, Y, $, V]), q = [j.minX, j.minY], U = Wt(S[0] * S[1]);
    G.pos1 = rt(k, q), G.pos2 = rt(Y, q), G.pos3 = rt($, q), G.pos4 = rt(V, q), G.left = D - G.left + q[0], G.top = _ - G.top + q[1], G.origin = rt(ht(H, G.origin), q), G.beforeOrigin = rt(ht(H, G.beforeOrigin), q), G.originalBeforeOrigin = ht(H, G.originalBeforeOrigin), G.transformOrigin = rt(ht(H, G.transformOrigin), q), f.style.transform = "translate(".concat(-R - q[0], "px, ").concat(-P - q[1], "px)") + I, ne(), this.updateState(M(M({}, G), { posDelta: q, direction: U, beforeDirection: U }), a);
  }, r.prototype.getRect = function() {
    return M(M({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.triggerEvent = function(e, n, a) {
    if (a || e.indexOf("Group") > -1)
      return t.prototype.triggerEvent.call(this, e, n);
    this._emitter.trigger(e, n);
  }, r.prototype.getRequestChildStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, a) {
      var i, o, s = (o = (i = a.requestChildStyle) === null || i === void 0 ? void 0 : i.call(a)) !== null && o !== void 0 ? o : [];
      return L(L([], T(n), !1), T(s), !1);
    }, []);
    return e;
  }, r.prototype.getMoveables = function() {
    return L([], T(this.moveables), !1);
  }, r.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, L(L([], T(this.props.ables), !1), [Ei], !1), "Group");
  }, r.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = ur(this._originalDragTarget, !0);
  }, r.prototype._updateEvents = function() {
    var e = this.state, n = this.props, a = this._prevDragTarget, i = n.dragTarget || this.areaElement, o = n.targets, s = this.differ.update(o), u = s.added, f = s.changed, l = s.removed, v = u.length || l.length;
    (v || this._prevOriginalDragTarget !== this._originalDragTarget) && (Kr(this, !1), Kr(this, !0), this.updateState({ gestos: {} })), a !== i && (e.target = null), e.target || (e.target = this.areaElement, this.controlBox.style.display = "block"), e.target && (this.targetGesto || (this.targetGesto = Qu(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = tf(this, "GroupControl")));
    var c = !Ga(e.container, n.container);
    c && (e.container = n.container), (c || v || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || f.length || o.length && !Yu(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!v;
  }, r.prototype._updateObserver = function() {
  }, r.defaultProps = M(M({}, oe.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), r;
}(oe), np = /* @__PURE__ */ function(t) {
  Ye(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.moveables = [], e;
  }
  return r.prototype.render = function() {
    var e = this, n, a = this.props, i = a.cspNonce, o = a.cssStyled, s = a.persistData, u = a.targets || [], f = u.length, l = this.isUnmounted || !f, v = (n = s == null ? void 0 : s.children) !== null && n !== void 0 ? n : [];
    return l && !f && v.length ? u = v.map(function() {
      return null;
    }) : l || (v = []), er(o, { cspNonce: i, ref: vr(this, "controlBox"), className: Q("control-box") }, u.map(function(c, d) {
      var p, h, g = (h = (p = a.individualGroupableProps) === null || p === void 0 ? void 0 : p.call(a, c, d)) !== null && h !== void 0 ? h : {};
      return er(oe, M({ key: "moveable" + d, ref: fs(e, "moveables", d) }, a, g, { target: c, wrapperMoveable: e, isWrapperMounted: e.isMoveableMounted, persistData: v[d] }));
    }));
  }, r.prototype.componentDidMount = function() {
  }, r.prototype.componentDidUpdate = function() {
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, a) {
    a === void 0 && (a = !0), ne(!0), this.moveables.forEach(function(i) {
      i.updateRect(e, n, a);
    }), ne();
  }, r.prototype.getRect = function() {
    return M(M({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.request = function(e, n, a) {
    n === void 0 && (n = {});
    var i = this.moveables.map(function(u) {
      return u.request(e, M(M({}, n), { isInstant: !1 }), !1);
    }), o = a || n.isInstant, s = {
      request: function(u) {
        return i.forEach(function(f) {
          return f.request(u);
        }), this;
      },
      requestEnd: function() {
        return i.forEach(function(u) {
          return u.requestEnd();
        }), this;
      }
    };
    return o ? s.request(n).requestEnd() : s;
  }, r.prototype.dragStart = function(e, n) {
    n === void 0 && (n = e.target);
    var a = n, i = Vt(this.moveables, function(o) {
      var s = o.getTargets()[0], u = o.getControlBoxElement(), f = o.getDragElement();
      return !s || !f ? !1 : f === a || f.contains(a) || f !== s && s === a || s.contains(a) || u === a || u.contains(a);
    });
    return i && i.dragStart(e, n), this;
  }, r.prototype.hitTest = function() {
    return 0;
  }, r.prototype.isInside = function() {
    return !1;
  }, r.prototype.isDragging = function() {
    return !1;
  }, r.prototype.getDragElement = function() {
    return null;
  }, r.prototype.getMoveables = function() {
    return L([], T(this.moveables), !1);
  }, r.prototype.updateRenderPoses = function() {
  }, r.prototype.checkUpdate = function() {
  }, r.prototype.triggerEvent = function() {
  }, r.prototype.updateAbles = function() {
  }, r.prototype._updateEvents = function() {
  }, r.prototype._updateObserver = function() {
  }, r;
}(oe);
function af(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if (qt(n)) {
        r[n] && e.push.apply(e, L([], T(r[n]), !1));
        return;
      }
      Ot(n) ? e.push.apply(e, L([], T(af(n, r)), !1)) : e.push(n);
    }
  }), e;
}
function of(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if (qt(n)) {
        r[n] && e.push.apply(e, L([], T(r[n]), !1));
        return;
      }
      Ot(n) ? e.push(of(n, r)) : e.push(n);
    }
  }), e;
}
function sf(t, r) {
  return t.length !== r.length || t.some(function(e, n) {
    var a = r[n];
    return !e && !a ? !1 : e != a ? Ot(e) && Ot(a) ? sf(e, a) : !0 : !1;
  });
}
var ap = /* @__PURE__ */ function(t) {
  Ye(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.refTargets = [], e.selectorMap = {}, e._differ = new Ls(), e._elementTargets = [], e._tmpRefTargets = [], e._tmpSelectorMap = {}, e._onChangeTargets = null, e;
  }
  return r.makeStyled = function() {
    var e = {}, n = this.getTotalAbles();
    n.forEach(function(i) {
      var o = i.css;
      o && o.forEach(function(s) {
        e[s] = !0;
      });
    });
    var a = gr(e).join(`
`);
    this.defaultStyled = Vs("div", Zf(ei, Yc + a));
  }, r.getTotalAbles = function() {
    return L([ju, Ei, ef, Vu], T(this.defaultAbles), !1);
  }, r.prototype.render = function() {
    var e, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, i = a.ables, o = a.props, s = Oc(a, ["ables", "props"]), u = T(this._updateRefs(!0), 2), f = u[0], l = u[1], v = af(f, l), c = v.length > 1, d = n.getTotalAbles(), p = L(L([], T(d), !1), T(i || []), !1), h = M(M(M({}, s), o || {}), { ables: p, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = v;
    var g = null, m = this.moveable, b = s.persistData;
    if (b != null && b.children && (c = !0), s.individualGroupable)
      return er(np, M({ key: "individual-group", ref: vr(this, "moveable") }, h, { target: null, targets: v }));
    if (c) {
      var y = of(f, l);
      if (m && !m.props.groupable && !m.props.individualGroupable) {
        var x = m.props.target;
        x && v.indexOf(x) > -1 && (g = M({}, m.state));
      }
      return er(ep, M({ key: "group", ref: vr(this, "moveable") }, h, (e = s.groupableProps) !== null && e !== void 0 ? e : {}, { target: null, targets: v, targetGroups: y, firstRenderState: g }));
    } else {
      var E = v[0];
      if (m && (m.props.groupable || m.props.individualGroupable)) {
        var S = m.moveables || [], C = Vt(S, function(w) {
          return w.props.target === E;
        });
        C && (g = M({}, C.state));
      }
      return er(oe, M({ key: "single", ref: vr(this, "moveable") }, h, { target: E, firstRenderState: g }));
    }
  }, r.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, r.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, r.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, r.prototype.getTargets = function() {
    var e, n;
    return (n = (e = this.moveable) === null || e === void 0 ? void 0 : e.getTargets()) !== null && n !== void 0 ? n : [];
  }, r.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs(), this.forceUpdate();
  }, r.prototype.waitToChangeTarget = function() {
    var e = this, n;
    return this._onChangeTargets = function() {
      e._onChangeTargets = null, n();
    }, new Promise(function(a) {
      n = a;
    });
  }, r.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, r.prototype.getManager = function() {
    return this.moveable;
  }, r.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, r.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, r.prototype._updateRefs = function(e) {
    var n = this.refTargets, a = mi(this.props.target || this.props.targets), i = typeof document < "u", o = sf(n, a), s = this.selectorMap, u = {};
    return this.refTargets.forEach(function f(l) {
      if (qt(l)) {
        var v = s[l];
        v ? u[l] = s[l] : i && (o = !0, u[l] = [].slice.call(document.querySelectorAll(l)));
      } else
        Ot(l) && l.forEach(f);
    }), this._tmpRefTargets = a, this._tmpSelectorMap = u, [
      a,
      u,
      !e && o
    ];
  }, r.prototype._checkChangeTargets = function() {
    var e, n, a;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var i = this._differ.update(this._elementTargets), o = i.added, s = i.removed, u = o.length || s.length;
    u && ((n = (e = this.props).onChangeTargets) === null || n === void 0 || n.call(e, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (a = this._onChangeTargets) === null || a === void 0 || a.call(this));
    var f = T(this._updateRefs(), 3), l = f[0], v = f[1], c = f[2];
    this.refTargets = l, this.selectorMap = v, c && this.forceUpdate();
  }, r.defaultAbles = [], r.customStyledMap = {}, r.defaultStyled = null, zc([
    Jf(Js)
  ], r.prototype, "moveable", void 0), r;
}(Cs), ip = /* @__PURE__ */ function(t) {
  Ye(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.defaultAbles = wi, r;
}(ap), Na = function(t, r) {
  return Na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  }, Na(t, r);
};
function _i(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Na(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var ke = function() {
  return ke = Object.assign || function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, ke.apply(this, arguments);
};
function op(t, r, e, n) {
  var a = arguments.length, i = a < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(r, e, i) : o(r, e)) || i);
  return a > 3 && i && Object.defineProperty(r, e, i), i;
}
var sp = /* @__PURE__ */ function(t) {
  _i(r, t);
  function r(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var e = r.prototype;
  return e.render = function() {
    return er(ip, ke({
      ref: vr(this, "moveable")
    }, this.state));
  }, r;
}($a), up = tp, fp = Js, lp = Qd, cp = /* @__PURE__ */ function(t) {
  _i(r, t);
  function r(n, a) {
    a === void 0 && (a = {});
    var i = t.call(this) || this;
    i.containerProvider = null, i.selfElement = null, i._warp = !1;
    var o = ke({}, a), s = {};
    lp.forEach(function(l) {
      s[ul("on ".concat(l))] = function(v) {
        return i.trigger(l, v);
      };
    });
    var u;
    a.warpSelf ? (delete a.warpSelf, i._warp = !0, u = n) : (u = se(n).createElement("div"), n.appendChild(u)), i.containerProvider = $i(er(sp, ke({
      ref: vr(i, "innerMoveable")
    }, o, s)), u), i.selfElement = u;
    var f = o.target;
    return Ot(f) && f.length > 1 && i.updateRect(), i;
  }
  var e = r.prototype;
  return e.setState = function(n, a) {
    this.innerMoveable.setState(n, a);
  }, e.forceUpdate = function(n) {
    this.innerMoveable.forceUpdate(n);
  }, e.dragStart = function(n, a) {
    a === void 0 && (a = n.target);
    var i = this.innerMoveable;
    i.$_timer && this.forceUpdate(), this.getMoveable().dragStart(n, a);
  }, e.destroy = function() {
    var n, a = this.selfElement;
    $i(null, a, this.containerProvider), this._warp || (n = a == null ? void 0 : a.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, e.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, r = op([Ni(fp, function(n, a) {
    n[a] || (n[a] = function() {
      for (var i = [], o = 0; o < arguments.length; o++)
        i[o] = arguments[o];
      var s = this.getMoveable();
      if (!(!s || !s[a]))
        return s[a].apply(s, i);
    });
  }), Ni(up, function(n, a) {
    Object.defineProperty(n, a, {
      get: function() {
        return this.getMoveable().props[a];
      },
      set: function(i) {
        var o;
        this.setState((o = {}, o[a] = i, o));
      },
      enumerable: !0,
      configurable: !0
    });
  })], r), r;
}(zn), vp = /* @__PURE__ */ function(t) {
  _i(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r;
}(cp);
const Io = /* @__PURE__ */ $o({
  __name: "grid-item",
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    isBounded: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: !1
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      type: [Number, String],
      required: !0
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(t, { expose: r, emit: e }) {
    const n = t, a = Ri(es), i = Ri(ns);
    if (!a)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const o = Re(null), s = Te({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1
    });
    let u = !1, f = !1, l = NaN, v = NaN, c = NaN, d = NaN, p = -1, h = -1, g = -1, m = -1, b = n.x, y = n.y, x = n.w, E = n.h;
    const S = Re(), C = Te({
      i: bf(n, "i"),
      state: s,
      wrapper: S,
      calcXY: dt
    });
    function w(F) {
      it(F);
    }
    function D() {
      ct();
    }
    function _(F) {
      Ut(n.isDraggable) && (s.draggable = F);
    }
    function z(F) {
      Ut(n.isResizable) && (s.resizable = F);
    }
    function O(F) {
      Ut(n.isBounded) && (s.bounded = F);
    }
    function R(F) {
      s.transformScale = F;
    }
    function P(F) {
      s.rowHeight = F;
    }
    function I(F) {
      s.maxRows = F;
    }
    function B() {
      s.rtl = Fi() === "rtl", ct();
    }
    function W(F) {
      s.cols = Math.floor(F);
    }
    a.increaseItem(C), Uo(() => {
      s.rtl = Fi() === "rtl";
    }), Ko(() => {
      a.responsive && a.lastBreakpoint ? s.cols = ca(a.lastBreakpoint, a.cols) : s.cols = a.colNum, s.rowHeight = a.rowHeight, s.containerWidth = a.width !== null ? a.width : 100, s.margin = a.margin !== void 0 ? a.margin.map(Number) : [10, 10], s.maxRows = a.maxRows, Ut(n.isDraggable) ? s.draggable = a.isDraggable : s.draggable = n.isDraggable, Ut(n.isResizable) ? s.resizable = a.isResizable : s.resizable = n.isResizable, Ut(n.isBounded) ? s.bounded = a.isBounded : s.bounded = n.isBounded, s.transformScale = a.transformScale, s.useCssTransforms = a.useCssTransforms, s.useStyleCursor = a.useStyleCursor, yf(() => {
        b = n.x, y = n.y, E = n.h, x = n.w, Ft(j);
      }), i.on("updateWidth", w), i.on("compact", D), i.on("setDraggable", _), i.on("setResizable", z), i.on("setBounded", O), i.on("setTransformScale", R), i.on("setRowHeight", P), i.on("setMaxRows", I), i.on("directionchange", B), i.on("setColNum", W);
    }), Zo(() => {
      i.off("updateWidth", w), i.off("compact", D), i.off("setDraggable", _), i.off("setResizable", z), i.off("setBounded", O), i.off("setTransformScale", R), i.off("setRowHeight", P), i.off("setMaxRows", I), i.off("directionchange", B), i.off("setColNum", W), o.value && o.value.destroy(), a.decreaseItem(C);
    }), r({ state: s, wrapper: S });
    const G = navigator.userAgent.toLowerCase().includes("android"), H = Rr(() => s.resizable && !n.static), N = Rr(() => a.isMirrored ? !s.rtl : s.rtl), k = Rr(() => (s.draggable || s.resizable) && !n.static), Y = Yf("item"), $ = Rr(() => ({
      [Y.b()]: !0,
      [Y.bm("resizable")]: H.value,
      [Y.bm("static")]: n.static,
      [Y.bm("resizing")]: s.isResizing,
      [Y.bm("dragging")]: s.isDragging,
      [Y.bm("transform")]: s.useCssTransforms,
      [Y.bm("rtl")]: N.value,
      [Y.bm("no-touch")]: G && k.value
    })), V = Rr(() => [Y.be("resizer"), N.value && Y.bem("resizer", "rtl")].filter(Boolean));
    Ct(
      () => n.isDraggable,
      (F) => {
        s.draggable = F;
      }
    ), Ct(
      () => n.static,
      () => {
        Ft(ft), Ft(wt);
      }
    ), Ct(
      () => s.draggable,
      () => {
        Ft(ft);
      }
    ), Ct(
      () => n.isResizable,
      (F) => {
        s.resizable = F;
      }
    ), Ct(
      () => n.isBounded,
      (F) => {
        s.bounded = F;
      }
    ), Ct(
      () => s.resizable,
      () => {
        Ft(wt);
      }
    ), Ct(
      () => s.rowHeight,
      () => {
        Ft(j), Ft(q);
      }
    ), Ct([() => s.cols, () => s.containerWidth], () => {
      Ft(wt), Ft(j), Ft(q);
    }), Ct([() => n.minH, () => n.maxH, () => n.minW, () => n.maxW], () => {
      Ft(wt);
    }), Ct(N, () => {
      Ft(wt), Ft(j);
    }), Ct([() => a.margin, () => a.margin[0], () => a.margin[1]], () => {
      const F = a.margin;
      !F || F[0] === s.margin[0] && F[1] === s.margin[1] || (s.margin = F.map(Number), Ft(j), Ft(q));
    });
    function j() {
      n.x + n.w > s.cols ? (b = 0, x = n.w > s.cols ? s.cols : n.w) : (b = n.x, x = n.w);
      const F = at(b, y, x, E);
      s.isDragging && (F.top = s.dragging.top, N.value ? F.right = s.dragging.left : F.left = s.dragging.left), s.isResizing && (F.width = s.resizing.width, F.height = s.resizing.height);
      let tt;
      s.useCssTransforms ? N.value ? tt = Nf(F.top, F.right, F.width, F.height) : tt = Ff(F.top, F.left, F.width, F.height) : N.value ? tt = Hf(F.top, F.right, F.width, F.height) : tt = Wf(F.top, F.left, F.width, F.height), s.style = tt;
    }
    function q() {
      const F = {};
      for (const tt of ["width", "height"]) {
        const ut = s.style[tt].match(/^(\d+)px$/);
        if (!ut)
          return;
        F[tt] = ut[1];
      }
      e("container-resized", n.i, n.h, n.w, F.height, F.width);
    }
    function U(F, tt) {
      if (n.static || tt === "resizestart" && s.isResizing || tt !== "resizestart" && !s.isResizing)
        return;
      const st = Gi(F);
      if (Ut(st))
        return;
      const { x: ut, y: St } = st, vt = { width: 0, height: 0 };
      let et;
      switch (tt) {
        case "resizestart": {
          wt(), p = x, h = E, et = at(b, y, x, E), vt.width = et.width, vt.height = et.height, s.resizing = vt, s.isResizing = !0;
          break;
        }
        case "resizemove": {
          const Bt = Ai(c, d, ut, St);
          N.value ? vt.width = s.resizing.width - Bt.deltaX / s.transformScale : vt.width = s.resizing.width + Bt.deltaX / s.transformScale, vt.height = s.resizing.height + Bt.deltaY / s.transformScale, s.resizing = vt;
          break;
        }
        case "resizeend": {
          et = at(b, y, x, E), vt.width = et.width, vt.height = et.height, s.resizing = { width: -1, height: -1 }, s.isResizing = !1;
          break;
        }
      }
      et = nt(vt.height, vt.width), et.w < n.minW && (et.w = n.minW), et.w > n.maxW && (et.w = n.maxW), et.h < n.minH && (et.h = n.minH), et.h > n.maxH && (et.h = n.maxH), et.h < 1 && (et.h = 1), et.w < 1 && (et.w = 1), c = ut, d = St, (x !== et.w || E !== et.h) && e("resize", n.i, et.h, et.w, vt.height, vt.width), tt === "resizeend" && (p !== x || h !== E) && e("resized", n.i, et.h, et.w, vt.height, vt.width), i.emit("resizeEvent", tt, n.i, b, y, et.h, et.w);
    }
    function J(F, tt) {
      if (n.static || s.isResizing || tt === "dragstart" && s.isDragging || tt !== "dragstart" && !s.isDragging)
        return;
      const st = Gi(F);
      if (Ut(st))
        return;
      const { x: ut, y: St } = st, vt = F.target;
      if (!vt.offsetParent)
        return;
      const et = { top: 0, left: 0 };
      switch (tt) {
        case "dragstart": {
          g = b, m = y;
          const $t = vt.offsetParent.getBoundingClientRect(), Yt = vt.getBoundingClientRect(), cr = Yt.left / s.transformScale, Dr = $t.left / s.transformScale, Yr = Yt.right / s.transformScale, Mr = $t.right / s.transformScale, ve = Yt.top / s.transformScale, de = $t.top / s.transformScale;
          N.value ? et.left = (Yr - Mr) * -1 : et.left = cr - Dr, et.top = ve - de, s.dragging = et, s.isDragging = !0;
          break;
        }
        case "dragmove": {
          const $t = Ai(l, v, ut, St);
          if (N.value ? et.left = s.dragging.left - $t.deltaX / s.transformScale : et.left = s.dragging.left + $t.deltaX / s.transformScale, et.top = s.dragging.top + $t.deltaY / s.transformScale, s.bounded) {
            const Yt = vt.offsetParent.clientHeight - Z(n.h, s.rowHeight, s.margin[1]);
            et.top = pt(et.top, 0, Yt);
            const cr = X(), Dr = s.containerWidth - Z(n.w, cr, s.margin[0]);
            et.left = pt(et.left, 0, Dr);
          }
          s.dragging = et;
          break;
        }
        case "dragend": {
          const $t = vt.offsetParent.getBoundingClientRect(), Yt = vt.getBoundingClientRect(), cr = Yt.left / s.transformScale, Dr = $t.left / s.transformScale, Yr = Yt.right / s.transformScale, Mr = $t.right / s.transformScale, ve = Yt.top / s.transformScale, de = $t.top / s.transformScale;
          N.value ? et.left = (Yr - Mr) * -1 : et.left = cr - Dr, et.top = ve - de, s.dragging = { top: -1, left: -1 }, s.isDragging = !1;
          break;
        }
      }
      let Bt;
      N.value, Bt = dt(et.top, et.left), l = ut, v = St, (b !== Bt.x || y !== Bt.y) && e("move", n.i, Bt.x, Bt.y), tt === "dragend" && (g !== b || m !== y) && e("moved", n.i, Bt.x, Bt.y), i.emit("dragEvent", tt, n.i, Bt.x, Bt.y, E, x);
    }
    function at(F, tt, st, ut) {
      const St = X();
      let vt;
      return N.value ? vt = {
        right: Math.round(St * F + (F + 1) * s.margin[0]),
        top: Math.round(s.rowHeight * tt + (tt + 1) * s.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: st === 1 / 0 ? st : Math.round(St * st + Math.max(0, st - 1) * s.margin[0]),
        height: ut === 1 / 0 ? ut : Math.round(s.rowHeight * ut + Math.max(0, ut - 1) * s.margin[1])
      } : vt = {
        left: Math.round(St * F + (F + 1) * s.margin[0]),
        top: Math.round(s.rowHeight * tt + (tt + 1) * s.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: st === 1 / 0 ? st : Math.round(St * st + Math.max(0, st - 1) * s.margin[0]),
        height: ut === 1 / 0 ? ut : Math.round(s.rowHeight * ut + Math.max(0, ut - 1) * s.margin[1])
      }, vt;
    }
    function dt(F, tt) {
      const st = X();
      let ut = Math.round((tt - s.margin[0]) / (st + s.margin[0])), St = Math.round((F - s.margin[1]) / (s.rowHeight + s.margin[1]));
      return ut = Math.max(Math.min(ut, s.cols - x), 0), St = Math.max(Math.min(St, s.maxRows - E), 0), { x: ut, y: St };
    }
    function X() {
      return (s.containerWidth - s.margin[0] * (s.cols + 1)) / s.cols;
    }
    function Z(F, tt, st) {
      return Number.isFinite(F) ? Math.round(tt * F + Math.max(0, F - 1) * st) : F;
    }
    function pt(F, tt, st) {
      return Math.max(Math.min(F, st), tt);
    }
    function nt(F, tt, st = !1) {
      const ut = X();
      let St = Math.round((tt + s.margin[0]) / (ut + s.margin[0])), vt = 0;
      return st ? vt = Math.ceil((F + s.margin[1]) / (s.rowHeight + s.margin[1])) : vt = Math.round((F + s.margin[1]) / (s.rowHeight + s.margin[1])), St = Math.max(Math.min(St, s.cols - b), 0), vt = Math.max(Math.min(vt, s.maxRows - y), 0), { w: St, h: vt };
    }
    function it(F, tt) {
      s.containerWidth = F, tt != null && (s.cols = tt);
    }
    function ct() {
      j();
    }
    function mt() {
      !o.value && S.value && (o.value = new vp(document.body, {
        target: S.value,
        hideDefaultLines: !0,
        origin: !1
      }));
    }
    const bt = Ii(J);
    function ft() {
      mt(), o.value && (s.draggable && !n.static ? (o.value.setState({
        draggable: !0
      }), u || (u = !0, o.value.on("dragStart", (F) => J(F, "dragstart")).on("drag", (F) => bt(F, "dragmove")).on("dragEnd", (F) => J(F, "dragend")))) : o.value.setState({
        draggable: !1
      }));
    }
    const gt = Ii(U);
    function wt() {
      mt(), o.value && (s.resizable && !n.static ? (o.value.setState({
        resizable: !0
      }), f || (f = !0, o.value.on("resizeStart", (F) => U(F, "resizestart")).on("resize", (F) => gt(F, "resizemove")).on("resizeEnd", (F) => U(F, "resizeend")))) : o.value.setState({
        resizable: !1
      }));
    }
    return (F, tt) => (be(), dn("section", {
      ref_key: "wrapper",
      ref: S,
      class: Ti(Yn($)),
      style: Jo(s.style)
    }, [
      ua(F.$slots, "default"),
      Yn(H) ? (be(), dn("span", {
        key: 0,
        class: Ti(Yn(V))
      }, null, 2)) : xf("", !0)
    ], 6));
  }
}), Lr = typeof window < "u";
var Bo;
Lr && (Bo = window == null ? void 0 : window.navigator) != null && Bo.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ko(t) {
  return t != null;
}
function aa() {
}
const dp = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(dp)));
const pp = Lr && ("ontouchstart" in window || gp() > 0), hp = pp ? "pointerdown" : "click";
function gp() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function mp(t, r, e = window.Event) {
  const { type: n, bubbles: a = !1, cancelable: i = !1, ...o } = r;
  if (!ko(n) || n === "")
    return !1;
  let s;
  return ko(e) ? s = new e(n, { bubbles: a, cancelable: i }) : (s = document.createEvent("HTMLEvents"), s.initEvent(n, a, i)), Object.assign(s, o), t.dispatchEvent(s);
}
const bp = "clickoutside", yp = /* @__PURE__ */ new Set();
Lr && document.addEventListener(
  hp,
  (t) => {
    const r = t.target, e = t.composedPath && t.composedPath();
    yp.forEach((n) => {
      n !== r && (e ? !e.includes(n) : !n.contains(r)) && (!n.__transferElement || n.__transferElement !== r && !n.__transferElement.contains(r)) && mp(n, { type: bp });
    });
  },
  !0
);
const xp = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let Dn;
if (Lr) {
  for (const t of xp)
    if (t[1] in document) {
      Dn = t;
      break;
    }
}
const Sp = !!Dn;
Rr(() => !1);
const Ep = /* @__PURE__ */ new Set(), wp = /* @__PURE__ */ new WeakMap();
if (Lr && Dn) {
  const t = Dn[4];
  document.addEventListener(
    t,
    (r) => {
      if (Ep.forEach((e) => {
        e.value = !1;
      }), r.target) {
        const e = wp.get(r.target);
        e && (e.value = !0);
      }
    },
    !1
  );
}
const uf = /* @__PURE__ */ new Map();
uf.set("x", 0);
uf.set("y", 0);
var Br = [], _p = function() {
  return Br.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, Cp = function() {
  return Br.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, Go = "ResizeObserver loop completed with undelivered notifications.", Dp = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: Go
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = Go), window.dispatchEvent(t);
}, Ge;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Ge || (Ge = {}));
var kr = function(t) {
  return Object.freeze(t);
}, Mp = /* @__PURE__ */ function() {
  function t(r, e) {
    this.inlineSize = r, this.blockSize = e, kr(this);
  }
  return t;
}(), ff = function() {
  function t(r, e, n, a) {
    return this.x = r, this.y = e, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, kr(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, e = r.x, n = r.y, a = r.top, i = r.right, o = r.bottom, s = r.left, u = r.width, f = r.height;
    return { x: e, y: n, top: a, right: i, bottom: o, left: s, width: u, height: f };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
}(), Ci = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, lf = function(t) {
  if (Ci(t)) {
    var r = t.getBBox(), e = r.width, n = r.height;
    return !e && !n;
  }
  var a = t, i = a.offsetWidth, o = a.offsetHeight;
  return !(i || o || t.getClientRects().length);
}, Ao = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var e = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(e && t instanceof e.Element);
}, Rp = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Me = typeof window < "u" ? window : {}, sn = /* @__PURE__ */ new WeakMap(), Fo = /auto|scroll/, Tp = /^tb|vertical/, Op = /msie|trident/i.test(Me.navigator && Me.navigator.userAgent), or = function(t) {
  return parseFloat(t || "0");
}, Qr = function(t, r, e) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), e === void 0 && (e = !1), new Mp((e ? r : t) || 0, (e ? t : r) || 0);
}, No = kr({
  devicePixelContentBoxSize: Qr(),
  borderBoxSize: Qr(),
  contentBoxSize: Qr(),
  contentRect: new ff(0, 0, 0, 0)
}), cf = function(t, r) {
  if (r === void 0 && (r = !1), sn.has(t) && !r)
    return sn.get(t);
  if (lf(t))
    return sn.set(t, No), No;
  var e = getComputedStyle(t), n = Ci(t) && t.ownerSVGElement && t.getBBox(), a = !Op && e.boxSizing === "border-box", i = Tp.test(e.writingMode || ""), o = !n && Fo.test(e.overflowY || ""), s = !n && Fo.test(e.overflowX || ""), u = n ? 0 : or(e.paddingTop), f = n ? 0 : or(e.paddingRight), l = n ? 0 : or(e.paddingBottom), v = n ? 0 : or(e.paddingLeft), c = n ? 0 : or(e.borderTopWidth), d = n ? 0 : or(e.borderRightWidth), p = n ? 0 : or(e.borderBottomWidth), h = n ? 0 : or(e.borderLeftWidth), g = v + f, m = u + l, b = h + d, y = c + p, x = s ? t.offsetHeight - y - t.clientHeight : 0, E = o ? t.offsetWidth - b - t.clientWidth : 0, S = a ? g + b : 0, C = a ? m + y : 0, w = n ? n.width : or(e.width) - S - E, D = n ? n.height : or(e.height) - C - x, _ = w + g + E + b, z = D + m + x + y, O = kr({
    devicePixelContentBoxSize: Qr(Math.round(w * devicePixelRatio), Math.round(D * devicePixelRatio), i),
    borderBoxSize: Qr(_, z, i),
    contentBoxSize: Qr(w, D, i),
    contentRect: new ff(v, u, w, D)
  });
  return sn.set(t, O), O;
}, vf = function(t, r, e) {
  var n = cf(t, e), a = n.borderBoxSize, i = n.contentBoxSize, o = n.devicePixelContentBoxSize;
  switch (r) {
    case Ge.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case Ge.BORDER_BOX:
      return a;
    default:
      return i;
  }
}, zp = /* @__PURE__ */ function() {
  function t(r) {
    var e = cf(r);
    this.target = r, this.contentRect = e.contentRect, this.borderBoxSize = kr([e.borderBoxSize]), this.contentBoxSize = kr([e.contentBoxSize]), this.devicePixelContentBoxSize = kr([e.devicePixelContentBoxSize]);
  }
  return t;
}(), df = function(t) {
  if (lf(t))
    return 1 / 0;
  for (var r = 0, e = t.parentNode; e; )
    r += 1, e = e.parentNode;
  return r;
}, Pp = function() {
  var t = 1 / 0, r = [];
  Br.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var o = [];
      i.activeTargets.forEach(function(s) {
        var u = new zp(s.target), f = df(s.target);
        o.push(u), s.lastReportedSize = vf(s.target, s.observedBox), f < t && (t = f);
      }), r.push(function() {
        i.callback.call(i.observer, o, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var e = 0, n = r; e < n.length; e++) {
    var a = n[e];
    a();
  }
  return t;
}, Wo = function(t) {
  Br.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(e) {
      e.isActive() && (df(e.target) > t ? r.activeTargets.push(e) : r.skippedTargets.push(e));
    });
  });
}, Ip = function() {
  var t = 0;
  for (Wo(t); _p(); )
    t = Pp(), Wo(t);
  return Cp() && Dp(), t > 0;
}, ia, pf = [], Bp = function() {
  return pf.splice(0).forEach(function(t) {
    return t();
  });
}, kp = function(t) {
  if (!ia) {
    var r = 0, e = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Bp();
    }).observe(e, n), ia = function() {
      e.textContent = "".concat(r ? r-- : r++);
    };
  }
  pf.push(t), ia();
}, Gp = function(t) {
  kp(function() {
    requestAnimationFrame(t);
  });
}, vn = 0, Ap = function() {
  return !!vn;
}, Fp = 250, Np = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ho = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Lo = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, oa = !1, Wp = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var e = this;
    if (r === void 0 && (r = Fp), !oa) {
      oa = !0;
      var n = Lo(r);
      Gp(function() {
        var a = !1;
        try {
          a = Ip();
        } finally {
          if (oa = !1, r = n - Lo(), !Ap())
            return;
          a ? e.run(1e3) : r > 0 ? e.run(r) : e.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, e = function() {
      return r.observer && r.observer.observe(document.body, Np);
    };
    document.body ? e() : Me.addEventListener("DOMContentLoaded", e);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ho.forEach(function(e) {
      return Me.addEventListener(e, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ho.forEach(function(e) {
      return Me.removeEventListener(e, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Wa = new Wp(), Yo = function(t) {
  !vn && t > 0 && Wa.start(), vn += t, !vn && Wa.stop();
}, Hp = function(t) {
  return !Ci(t) && !Rp(t) && getComputedStyle(t).display === "inline";
}, Lp = function() {
  function t(r, e) {
    this.target = r, this.observedBox = e || Ge.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = vf(this.target, this.observedBox, !0);
    return Hp(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), Yp = /* @__PURE__ */ function() {
  function t(r, e) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = e;
  }
  return t;
}(), un = /* @__PURE__ */ new WeakMap(), Xo = function(t, r) {
  for (var e = 0; e < t.length; e += 1)
    if (t[e].target === r)
      return e;
  return -1;
}, fn = function() {
  function t() {
  }
  return t.connect = function(r, e) {
    var n = new Yp(r, e);
    un.set(r, n);
  }, t.observe = function(r, e, n) {
    var a = un.get(r), i = a.observationTargets.length === 0;
    Xo(a.observationTargets, e) < 0 && (i && Br.push(a), a.observationTargets.push(new Lp(e, n && n.box)), Yo(1), Wa.schedule());
  }, t.unobserve = function(r, e) {
    var n = un.get(r), a = Xo(n.observationTargets, e), i = n.observationTargets.length === 1;
    a >= 0 && (i && Br.splice(Br.indexOf(n), 1), n.observationTargets.splice(a, 1), Yo(-1));
  }, t.disconnect = function(r) {
    var e = this, n = un.get(r);
    n.observationTargets.slice().forEach(function(a) {
      return e.unobserve(r, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, t;
}(), Xp = function() {
  function t(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    fn.connect(this, r);
  }
  return t.prototype.observe = function(r, e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ao(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    fn.observe(this, r, e);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ao(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    fn.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    fn.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
const Mn = /* @__PURE__ */ new WeakMap();
function qp(t) {
  for (let r = 0, e = t.length; r < e; ++r) {
    const n = t[r], a = Mn.get(n.target);
    typeof a == "function" && a(n);
  }
}
const hf = new (Lr && window.ResizeObserver || Xp)(
  qp
);
function Vp(t, r) {
  Mn.set(t, r), hf.observe(t);
}
function jp(t) {
  Mn.has(t) && (hf.unobserve(t), Mn.delete(t));
}
function $p() {
  return {
    observeResize: Vp,
    unobserveResize: jp
  };
}
const Up = Re(!1);
Rr(() => Up.value);
const qo = "__theme_style__", sa = "__theme_observer__", Vo = Te(/* @__PURE__ */ new Map()), jo = /* @__PURE__ */ new Map();
Ct(Vo, () => {
  if (!Lr)
    return;
  jo.clear();
  const t = document.head.querySelector(`#${qo}`);
  t && document.head.removeChild(t);
  const r = document.createElement("style");
  let e = `.${sa} { width: 1px }`, n = 1;
  for (const [a, [i, o]] of Vo.entries())
    e += ` html.${i} .${sa}, .${o} .${sa} { width: ${++n}px }`, jo.set(n, a);
  r.textContent = e, r.id = qo, document.head.appendChild(r);
});
const Zp = /* @__PURE__ */ $o({
  __name: "grid-layout",
  props: {
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    isBounded: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    restoreOnDrag: {
      type: Boolean,
      default: !1
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !1
    },
    responsiveLayouts: {
      type: Object,
      default: () => ({})
    },
    transformScale: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object,
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })
    },
    cols: {
      type: Object,
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })
    },
    preventCollision: {
      type: Boolean,
      default: !1
    },
    useStyleCursor: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(t, { expose: r, emit: e }) {
    const n = t, a = Te({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), i = /* @__PURE__ */ new Map(), o = Re(n.layout), s = Re(), { observeResize: u, unobserveResize: f } = $p(), l = zf();
    l.on("resizeEvent", v), l.on("dragEvent", c), Uo(() => {
      e("layout-before-mount", o.value);
    }), Ko(() => {
      e("layout-mounted", o.value), mr(() => {
        Lf(o.value), a.originalLayout = o.value, mr(() => {
          w(), s.value && u(s.value, Pf(b, 16)), qr(o.value, n.verticalCompact), e("layout-updated", o.value), m(), b();
        });
      });
    }), Zo(() => {
      l.clearAll(), s.value && f(s.value);
    });
    function v(_, z, O, R, P, I) {
      S(_, z, O, R, P, I);
    }
    function c(_, z, O, R, P, I) {
      E(_, z, O, R, P, I);
    }
    Ct(
      () => a.width,
      (_, z) => {
        mr(() => {
          l.emit("updateWidth", _), z === -1 && mr(() => {
            e("layout-ready", o.value);
          }), m();
        });
      }
    ), Ct(
      () => [n.layout, n.layout.length],
      () => {
        o.value = n.layout, g();
      }
    ), Ct(
      () => n.colNum,
      (_) => {
        l.emit("setColNum", _);
      }
    ), Ct(
      () => n.rowHeight,
      (_) => {
        l.emit("setRowHeight", _);
      }
    ), Ct(
      () => n.isDraggable,
      (_) => {
        l.emit("setDraggable", _);
      }
    ), Ct(
      () => n.isResizable,
      (_) => {
        l.emit("setResizable", _);
      }
    ), Ct(
      () => n.isBounded,
      (_) => {
        l.emit("setBounded", _);
      }
    ), Ct(
      () => n.transformScale,
      (_) => {
        l.emit("setTransformScale", _);
      }
    ), Ct(
      () => n.responsive,
      (_) => {
        _ || (e("update:layout", a.originalLayout), l.emit("setColNum", n.colNum)), b();
      }
    ), Ct(
      () => n.maxRows,
      (_) => {
        l.emit("setMaxRows", _);
      }
    ), Ct([() => n.margin, () => n.margin[1]], m), Oi(
      es,
      Te({
        ...zi(n),
        ...zi(a),
        increaseItem: d,
        decreaseItem: p
      })
    ), Oi(ns, l), r({ state: a, getItem: h, resizeEvent: S, dragEvent: E });
    function d(_) {
      i.set(_.i, _);
    }
    function p(_) {
      i.delete(_.i);
    }
    function h(_) {
      return i.get(_);
    }
    function g() {
      if (!Ut(o.value) && !Ut(a.originalLayout)) {
        if (o.value.length !== a.originalLayout.length) {
          const _ = D(o.value, a.originalLayout);
          if (_.length > 0)
            if (o.value.length > a.originalLayout.length)
              a.originalLayout = a.originalLayout.concat(_);
            else {
              const z = new Set(_.map((O) => O.i));
              a.originalLayout = a.originalLayout.filter((O) => !z.has(O.i));
            }
          a.lastLayoutLength = o.value.length, w();
        }
        qr(o.value, n.verticalCompact), l.emit("updateWidth", a.width), m(), e("layout-updated", o.value);
      }
    }
    function m() {
      a.mergedStyle = {
        height: y()
      };
    }
    function b() {
      s.value && (a.width = s.value.offsetWidth), l.emit("resizeEvent");
    }
    function y() {
      if (!n.autoSize)
        return;
      const _ = parseFloat(n.margin[1]);
      return Bf(o.value) * (n.rowHeight + _) + _ + "px";
    }
    let x;
    function E(_, z, O, R, P, I) {
      let B = Bi(o.value, z);
      Ut(B) && (B = { h: 0, w: 0, x: 0, y: 0, i: "" }), _ === "dragstart" && !n.verticalCompact && (x = o.value.reduce(
        (W, { i: G, x: H, y: N }) => ({
          ...W,
          [G]: { x: H, y: N }
        }),
        {}
      )), _ === "dragmove" || _ === "dragstart" ? (a.placeholder.i = z, a.placeholder.x = B.x, a.placeholder.y = B.y, a.placeholder.w = I, a.placeholder.h = P, mr(() => {
        a.isDragging = !0;
      }), l.emit("updateWidth", a.width)) : mr(() => {
        a.isDragging = !1;
      }), o.value = la(o.value, B, O, R, !0, n.preventCollision), n.restoreOnDrag ? (B.static = !0, qr(o.value, n.verticalCompact, x), B.static = !1) : qr(o.value, n.verticalCompact), l.emit("compact"), m(), _ === "dragend" && (x = void 0, e("layout-updated", o.value));
    }
    function S(_, z, O, R, P, I) {
      let B = Bi(o.value, z);
      Ut(B) && (B = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let W;
      if (n.preventCollision) {
        const G = is(o.value, { ...B, w: I, h: P }).filter(
          (H) => H.i !== B.i
        );
        if (W = G.length > 0, W) {
          let H = 1 / 0, N = 1 / 0;
          G.forEach((k) => {
            k.x > B.x && (H = Math.min(H, k.x)), k.y > B.y && (N = Math.min(N, k.y));
          }), Number.isFinite(H) && (B.w = H - B.x), Number.isFinite(N) && (B.h = N - B.y);
        }
      }
      W || (B.w = I, B.h = P), _ === "resizestart" || _ === "resizemove" ? (a.placeholder.i = z, a.placeholder.x = O, a.placeholder.y = R, a.placeholder.w = B.w, a.placeholder.h = B.h, mr(() => {
        a.isDragging = !0;
      }), l.emit("updateWidth", a.width)) : mr(() => {
        a.isDragging = !1;
      }), n.responsive && C(), qr(o.value, n.verticalCompact), l.emit("compact"), m(), _ === "resizeend" && e("layout-updated", o.value);
    }
    function C() {
      const _ = Vf(n.breakpoints, a.width), z = ca(_, n.cols);
      !Ut(a.lastBreakpoint) && !a.layouts[a.lastBreakpoint] && (a.layouts[a.lastBreakpoint] = fa(o.value));
      const O = jf(
        a.originalLayout,
        a.layouts,
        n.breakpoints,
        _,
        a.lastBreakpoint,
        z,
        n.verticalCompact
      );
      a.layouts[_] = O, a.lastBreakpoint !== _ && e("breakpoint-changed", _, O), e("update:layout", O), a.lastBreakpoint = _, l.emit("setColNum", ca(_, n.cols));
    }
    function w() {
      a.layouts = Object.assign({}, n.responsiveLayouts);
    }
    function D(_, z) {
      const O = new Set(z.map((B) => B.i)), R = new Set(_.map((B) => B.i)), P = _.filter((B) => !O.has(B.i)), I = z.filter((B) => !R.has(B.i));
      return P.concat(I);
    }
    return (_, z) => (be(), dn("div", {
      ref_key: "wrapper",
      ref: s,
      class: "vgl-layout",
      style: Jo(a.mergedStyle)
    }, [
      _.$slots.default ? ua(_.$slots, "default", { key: 0 }) : (be(!0), dn(Sf, { key: 1 }, Ef(o.value, (O) => (be(), wf(Io, _f({
        key: O.i
      }, O), {
        default: Cf(() => [
          ua(_.$slots, "item", { item: O })
        ]),
        _: 2
      }, 1040))), 128)),
      Df(Mf(Io, {
        class: "vgl-item--placeholder",
        x: a.placeholder.x,
        y: a.placeholder.y,
        w: a.placeholder.w,
        h: a.placeholder.h,
        i: a.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [Rf, a.isDragging]
      ])
    ], 4));
  }
});
export {
  Io as GridItem,
  Zp as GridLayout
};
//# sourceMappingURL=grid-layout-plus.mjs.map
