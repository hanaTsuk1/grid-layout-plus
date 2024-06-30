import { defineComponent as Ie, inject as he, ref as pe, reactive as be, toRef as Le, onBeforeMount as Pe, onMounted as Ye, watchEffect as Xe, onBeforeUnmount as _e, computed as C, watch as w, openBlock as we, createElementBlock as ze, normalizeClass as ve, unref as q, normalizeStyle as qe, renderSlot as Ae, createCommentVNode as Oe } from "vue";
import { isNull as S, nextTickOnce as f, throttle as Re } from "@vexip-ui/utils";
import { LAYOUT_KEY as Ge, EMITTER_KEY as je, setTransformRtl as Fe, setTransform as Ke, setTopRight as $e, setTopLeft as Ve, useNameHelper as Je } from "../helpers/common.mjs";
import { getControlPosition as ye, createCoreData as Se } from "../helpers/draggable.mjs";
import { getColsFromBreakpoint as Qe } from "../helpers/responsive.mjs";
import { getDocumentDir as xe } from "../helpers/dom.mjs";
import Ze from "moveable";
const ot = /* @__PURE__ */ Ie({
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
  setup(He, { expose: Me, emit: M }) {
    const i = He, o = he(Ge), g = he(je);
    if (!o)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const u = pe(null), e = be({
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
    let A = !1, O = !1, G = NaN, j = NaN, F = NaN, K = NaN, $ = -1, V = -1, J = -1, Q = -1, h = i.x, v = i.y, p = i.w, R = i.h;
    const N = pe(), Z = be({
      i: Le(i, "i"),
      state: e,
      wrapper: N,
      calcXY: L
    });
    function U(t) {
      Te(t);
    }
    function ee() {
      de();
    }
    function te(t) {
      S(i.isDraggable) && (e.draggable = t);
    }
    function ie(t) {
      S(i.isResizable) && (e.resizable = t);
    }
    function re(t) {
      S(i.isBounded) && (e.bounded = t);
    }
    function ae(t) {
      e.transformScale = t;
    }
    function ne(t) {
      e.rowHeight = t;
    }
    function oe(t) {
      e.maxRows = t;
    }
    function se() {
      e.rtl = xe() === "rtl", de();
    }
    function le(t) {
      e.cols = Math.floor(t);
    }
    o.increaseItem(Z), Pe(() => {
      e.rtl = xe() === "rtl";
    }), Ye(() => {
      o.responsive && o.lastBreakpoint ? e.cols = Qe(o.lastBreakpoint, o.cols) : e.cols = o.colNum, e.rowHeight = o.rowHeight, e.containerWidth = o.width !== null ? o.width : 100, e.margin = o.margin !== void 0 ? o.margin.map(Number) : [10, 10], e.maxRows = o.maxRows, S(i.isDraggable) ? e.draggable = o.isDraggable : e.draggable = i.isDraggable, S(i.isResizable) ? e.resizable = o.isResizable : e.resizable = i.isResizable, S(i.isBounded) ? e.bounded = o.isBounded : e.bounded = i.isBounded, e.transformScale = o.transformScale, e.useCssTransforms = o.useCssTransforms, e.useStyleCursor = o.useStyleCursor, Xe(() => {
        h = i.x, v = i.y, R = i.h, p = i.w, f(x);
      }), g.on("updateWidth", U), g.on("compact", ee), g.on("setDraggable", te), g.on("setResizable", ie), g.on("setBounded", re), g.on("setTransformScale", ae), g.on("setRowHeight", ne), g.on("setMaxRows", oe), g.on("directionchange", se), g.on("setColNum", le);
    }), _e(() => {
      g.off("updateWidth", U), g.off("compact", ee), g.off("setDraggable", te), g.off("setResizable", ie), g.off("setBounded", re), g.off("setTransformScale", ae), g.off("setRowHeight", ne), g.off("setMaxRows", oe), g.off("directionchange", se), g.off("setColNum", le), u.value && u.value.destroy(), o.decreaseItem(Z);
    }), Me({ state: e, wrapper: N });
    const Ne = navigator.userAgent.toLowerCase().includes("android"), ge = C(() => e.resizable && !i.static), m = C(() => o.isMirrored ? !e.rtl : e.rtl), We = C(() => (e.draggable || e.resizable) && !i.static), z = Je("item"), Be = C(() => ({
      [z.b()]: !0,
      [z.bm("resizable")]: ge.value,
      [z.bm("static")]: i.static,
      [z.bm("resizing")]: e.isResizing,
      [z.bm("dragging")]: e.isDragging,
      [z.bm("transform")]: e.useCssTransforms,
      [z.bm("rtl")]: m.value,
      [z.bm("no-touch")]: Ne && We.value
    })), Ce = C(() => [z.be("resizer"), m.value && z.bem("resizer", "rtl")].filter(Boolean));
    w(
      () => i.isDraggable,
      (t) => {
        e.draggable = t;
      }
    ), w(
      () => i.static,
      () => {
        f(me), f(H);
      }
    ), w(
      () => e.draggable,
      () => {
        f(me);
      }
    ), w(
      () => i.isResizable,
      (t) => {
        e.resizable = t;
      }
    ), w(
      () => i.isBounded,
      (t) => {
        e.bounded = t;
      }
    ), w(
      () => e.resizable,
      () => {
        f(H);
      }
    ), w(
      () => e.rowHeight,
      () => {
        f(x), f(T);
      }
    ), w([() => e.cols, () => e.containerWidth], () => {
      f(H), f(x), f(T);
    }), w([() => i.minH, () => i.maxH, () => i.minW, () => i.maxW], () => {
      f(H);
    }), w(m, () => {
      f(H), f(x);
    }), w([() => o.margin, () => o.margin[0], () => o.margin[1]], () => {
      const t = o.margin;
      !t || t[0] === e.margin[0] && t[1] === e.margin[1] || (e.margin = t.map(Number), f(x), f(T));
    });
    function x() {
      i.x + i.w > e.cols ? (h = 0, p = i.w > e.cols ? e.cols : i.w) : (h = i.x, p = i.w);
      const t = I(h, v, p, R);
      e.isDragging && (t.top = e.dragging.top, m.value ? t.right = e.dragging.left : t.left = e.dragging.left), e.isResizing && (t.width = e.resizing.width, t.height = e.resizing.height);
      let a;
      e.useCssTransforms ? m.value ? a = Fe(t.top, t.right, t.width, t.height) : a = Ke(t.top, t.left, t.width, t.height) : m.value ? a = $e(t.top, t.right, t.width, t.height) : a = Ve(t.top, t.left, t.width, t.height), e.style = a;
    }
    function T() {
      const t = {};
      for (const a of ["width", "height"]) {
        const l = e.style[a].match(/^(\d+)px$/);
        if (!l)
          return;
        t[a] = l[1];
      }
      M("container-resized", i.i, i.h, i.w, t.height, t.width);
    }
    function k(t, a) {
      if (i.static || a === "resizestart" && e.isResizing || a !== "resizestart" && !e.isResizing)
        return;
      const s = ye(t);
      if (S(s))
        return;
      const { x: l, y: c } = s, n = { width: 0, height: 0 };
      let r;
      switch (a) {
        case "resizestart": {
          H(), $ = p, V = R, r = I(h, v, p, R), n.width = r.width, n.height = r.height, e.resizing = n, e.isResizing = !0;
          break;
        }
        case "resizemove": {
          const d = Se(F, K, l, c);
          m.value ? n.width = e.resizing.width - d.deltaX / e.transformScale : n.width = e.resizing.width + d.deltaX / e.transformScale, n.height = e.resizing.height + d.deltaY / e.transformScale, e.resizing = n;
          break;
        }
        case "resizeend": {
          r = I(h, v, p, R), n.width = r.width, n.height = r.height, e.resizing = { width: -1, height: -1 }, e.isResizing = !1;
          break;
        }
      }
      r = De(n.height, n.width), r.w < i.minW && (r.w = i.minW), r.w > i.maxW && (r.w = i.maxW), r.h < i.minH && (r.h = i.minH), r.h > i.maxH && (r.h = i.maxH), r.h < 1 && (r.h = 1), r.w < 1 && (r.w = 1), F = l, K = c, (p !== r.w || R !== r.h) && M("resize", i.i, r.h, r.w, n.height, n.width), a === "resizeend" && ($ !== p || V !== R) && M("resized", i.i, r.h, r.w, n.height, n.width), g.emit("resizeEvent", a, i.i, h, v, r.h, r.w);
    }
    function E(t, a) {
      if (i.static || e.isResizing || a === "dragstart" && e.isDragging || a !== "dragstart" && !e.isDragging)
        return;
      const s = ye(t);
      if (S(s))
        return;
      const { x: l, y: c } = s, n = t.target;
      if (!n.offsetParent)
        return;
      const r = { top: 0, left: 0 };
      switch (a) {
        case "dragstart": {
          J = h, Q = v;
          const b = n.offsetParent.getBoundingClientRect(), y = n.getBoundingClientRect(), W = y.left / e.transformScale, B = b.left / e.transformScale, P = y.right / e.transformScale, Y = b.right / e.transformScale, X = y.top / e.transformScale, _ = b.top / e.transformScale;
          m.value ? r.left = (P - Y) * -1 : r.left = W - B, r.top = X - _, e.dragging = r, e.isDragging = !0;
          break;
        }
        case "dragmove": {
          const b = Se(G, j, l, c);
          if (m.value ? r.left = e.dragging.left - b.deltaX / e.transformScale : r.left = e.dragging.left + b.deltaX / e.transformScale, r.top = e.dragging.top + b.deltaY / e.transformScale, e.bounded) {
            const y = n.offsetParent.clientHeight - ce(i.h, e.rowHeight, e.margin[1]);
            r.top = fe(r.top, 0, y);
            const W = D(), B = e.containerWidth - ce(i.w, W, e.margin[0]);
            r.left = fe(r.left, 0, B);
          }
          e.dragging = r;
          break;
        }
        case "dragend": {
          const b = n.offsetParent.getBoundingClientRect(), y = n.getBoundingClientRect(), W = y.left / e.transformScale, B = b.left / e.transformScale, P = y.right / e.transformScale, Y = b.right / e.transformScale, X = y.top / e.transformScale, _ = b.top / e.transformScale;
          m.value ? r.left = (P - Y) * -1 : r.left = W - B, r.top = X - _, e.dragging = { top: -1, left: -1 }, e.isDragging = !1;
          break;
        }
      }
      let d;
      m.value, d = L(r.top, r.left), G = l, j = c, (h !== d.x || v !== d.y) && M("move", i.i, d.x, d.y), a === "dragend" && (J !== h || Q !== v) && M("moved", i.i, d.x, d.y), g.emit("dragEvent", a, i.i, d.x, d.y, R, p);
    }
    function I(t, a, s, l) {
      const c = D();
      let n;
      return m.value ? n = {
        right: Math.round(c * t + (t + 1) * e.margin[0]),
        top: Math.round(e.rowHeight * a + (a + 1) * e.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s === 1 / 0 ? s : Math.round(c * s + Math.max(0, s - 1) * e.margin[0]),
        height: l === 1 / 0 ? l : Math.round(e.rowHeight * l + Math.max(0, l - 1) * e.margin[1])
      } : n = {
        left: Math.round(c * t + (t + 1) * e.margin[0]),
        top: Math.round(e.rowHeight * a + (a + 1) * e.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s === 1 / 0 ? s : Math.round(c * s + Math.max(0, s - 1) * e.margin[0]),
        height: l === 1 / 0 ? l : Math.round(e.rowHeight * l + Math.max(0, l - 1) * e.margin[1])
      }, n;
    }
    function L(t, a) {
      const s = D();
      let l = Math.round((a - e.margin[0]) / (s + e.margin[0])), c = Math.round((t - e.margin[1]) / (e.rowHeight + e.margin[1]));
      return l = Math.max(Math.min(l, e.cols - p), 0), c = Math.max(Math.min(c, e.maxRows - R), 0), { x: l, y: c };
    }
    function D() {
      return (e.containerWidth - e.margin[0] * (e.cols + 1)) / e.cols;
    }
    function ce(t, a, s) {
      return Number.isFinite(t) ? Math.round(a * t + Math.max(0, t - 1) * s) : t;
    }
    function fe(t, a, s) {
      return Math.max(Math.min(t, s), a);
    }
    function De(t, a, s = !1) {
      const l = D();
      let c = Math.round((a + e.margin[0]) / (l + e.margin[0])), n = 0;
      return s ? n = Math.ceil((t + e.margin[1]) / (e.rowHeight + e.margin[1])) : n = Math.round((t + e.margin[1]) / (e.rowHeight + e.margin[1])), c = Math.max(Math.min(c, e.cols - h), 0), n = Math.max(Math.min(n, e.maxRows - v), 0), { w: c, h: n };
    }
    function Te(t, a) {
      e.containerWidth = t, a != null && (e.cols = a);
    }
    function de() {
      x();
    }
    function ue() {
      !u.value && N.value && (u.value = new Ze(document.body, {
        target: N.value,
        hideDefaultLines: !0,
        origin: !1
      }));
    }
    const ke = Re(E);
    function me() {
      ue(), u.value && (e.draggable && !i.static ? (u.value.setState({
        draggable: !0
      }), A || (A = !0, u.value.on("dragStart", (t) => E(t, "dragstart")).on("drag", (t) => ke(t, "dragmove")).on("dragEnd", (t) => E(t, "dragend")))) : u.value.setState({
        draggable: !1
      }));
    }
    const Ee = Re(k);
    function H() {
      ue(), u.value && (e.resizable && !i.static ? (u.value.setState({
        resizable: !0
      }), O || (O = !0, u.value.on("resizeStart", (t) => k(t, "resizestart")).on("resize", (t) => Ee(t, "resizemove")).on("resizeEnd", (t) => k(t, "resizeend")))) : u.value.setState({
        resizable: !1
      }));
    }
    return (t, a) => (we(), ze("section", {
      ref_key: "wrapper",
      ref: N,
      class: ve(q(Be)),
      style: qe(e.style)
    }, [
      Ae(t.$slots, "default"),
      q(ge) ? (we(), ze("span", {
        key: 0,
        class: ve(q(Ce))
      }, null, 2)) : Oe("", !0)
    ], 6));
  }
});
export {
  ot as default
};
//# sourceMappingURL=grid-item.vue.mjs.map
