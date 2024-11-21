import { defineComponent as F, withDirectives as G, openBlock as d, createElementBlock as h, normalizeStyle as $e, unref as a, createTextVNode as Y, toDisplayString as se, mergeModels as Re, useModel as Xe, Fragment as oe, renderList as re, normalizeClass as le, createBlock as B, toValue as ht, ref as T, computed as N, h as on, provide as Ce, inject as he, createElementVNode as c, renderSlot as Qe, createCommentVNode as U, isRef as Ze, getCurrentScope as ln, onScopeDispose as sn, watch as Q, onMounted as Nt, nextTick as ze, readonly as an, getCurrentInstance as et, reactive as gt, shallowRef as Ct, toRaw as Rt, mergeProps as ke, withModifiers as ve, withCtx as L, createVNode as x, watchEffect as tt, onUnmounted as we, vShow as rn, createStaticVNode as un } from "vue";
import { vTooltip as W, VueButton as de, VueIcon as ie, VueDropdown as cn, VueDropdownButton as _t, VueInput as _e, VueIcIcon as Be, VueCodeBlock as dn, VueDialog as pn, VueSwitch as fn, VueSelect as vn } from "@vue/devtools-ui";
import { isPlainObject as mn, UNDEFINED as At, NAN as hn, INFINITY as gn, NEGATIVE_INFINITY as Cn, getRaw as Dt, toSubmit as je, formatInspectorStateValue as _n, getInspectorStateValueType as yt, toEdit as yn, parse as ee } from "@vue/devtools-kit";
import { rpc as D, useDevToolsState as Pt, DevToolsMessagingEvents as J, onRpcConnected as Ae } from "@vue/devtools-core";
import { Splitpanes as De, Pane as ce } from "splitpanes";
import { isArray as xt, isObject as bt, sortByKey as Mt, isInSeparateWindow as xn, isInChromePanel as wt } from "@vue/devtools-shared";
import { debounce as bn } from "perfect-debounce";
import { RecycleScroller as wn } from "vue-virtual-scroller";
import { flatten as kn, groupBy as In } from "lodash-es";
function kt(n) {
  return n.toString(16).padStart(6, "0");
}
function $n(n, e) {
  const o = new Date(n);
  return `${o.toString().match(/\d\d:\d\d:\d\d/)[0]}${e === "ms" ? `.${String(o.getMilliseconds()).padStart(3, "0")}` : ""}`;
}
function Sn(n, e) {
  const o = /* @__PURE__ */ new Map(), t = Lt(n, e.toLowerCase(), o, 0);
  return o.clear(), t;
}
const Ht = 10;
function Lt(n, e, o, t) {
  if (t > Ht)
    return !1;
  let l = !1;
  const s = Object.keys(n);
  let p, i;
  for (let u = 0; u < s.length && (p = s[u], i = n[p], l = Ot(e, p, i, o, t + 1), !l); u++)
    ;
  return l;
}
function Ot(n, e, o, t, l) {
  let s = !1, p;
  return e === "_custom" && (e = o.display, o = o.value), (p = Tn(o)) && (o = p), e && It(e, n) ? (s = !0, t.set(o, !0)) : t.has(o) ? s = t.get(o) : Array.isArray(o) ? (t.set(o, null), s = En(o, n, t, l), t.set(o, s)) : mn(o) ? (t.set(o, null), s = Lt(o, n, t, l), t.set(o, s)) : It(o, n) && (s = !0, t.set(o, !0)), s;
}
function It(n, e) {
  return `${n}`.toLowerCase().includes(e);
}
function Tn(n) {
  return n === null ? "null" : n === At ? "undefined" : n === hn ? "NaN" : n === gn ? "Infinity" : n === Cn ? "-Infinity" : !1;
}
function En(n, e, o, t) {
  if (t > Ht)
    return !1;
  let l = !1, s;
  for (let p = 0; p < n.length && (s = n[p], l = Ot(e, null, s, o, t + 1), !l); p++)
    ;
  return l;
}
function nt(n) {
  const { state: e, filterKey: o, processGroup: t } = n;
  if (!o || !o.trim().length)
    return e;
  const l = {};
  for (const s in e) {
    const i = e[s].filter((u) => Sn({
      // @ts-expect-error typing weak
      [u.key]: u.value
    }, o));
    i.length && (l[s] = t ? t(i) : i);
  }
  return l;
}
const Ut = /* @__PURE__ */ F({
  __name: "NodeTag",
  props: {
    tag: {}
  },
  setup(n) {
    return (e, o) => G((d(), h("span", {
      style: $e({
        color: `#${a(kt)(e.tag.textColor)}`,
        backgroundColor: `#${a(kt)(e.tag.backgroundColor)}`
      }),
      class: "ml-2 rounded-sm px-1 text-[0.75rem] leading-snug"
    }, [
      Y(se(e.tag.label), 1)
    ], 4)), [
      [a(W), {
        content: e.tag.tooltip,
        html: !0
      }]
    ]);
  }
}), Vn = { class: "p2" }, Nn = ["onClick"], Rn = /* @__PURE__ */ F({
  __name: "SelectiveList",
  props: /* @__PURE__ */ Re({
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Re(["select"], ["update:modelValue"]),
  setup(n, { emit: e }) {
    const o = e, t = Xe(n, "modelValue");
    function l(s) {
      t.value = s, o("select", s);
    }
    return (s, p) => (d(), h("ul", Vn, [
      (d(!0), h(oe, null, re(s.data, (i) => (d(), h("li", {
        key: i.id,
        class: le(["selectable-item", { active: i.id === t.value }]),
        onClick: (u) => l(i.id)
      }, [
        Y(se(i.label) + " ", 1),
        (d(!0), h(oe, null, re(i.tags, (u, m) => (d(), B(Ut, {
          key: m,
          tag: u
        }, null, 8, ["tag"]))), 128))
      ], 10, Nn))), 128))
    ]));
  }
}), ot = Symbol("VirtualRouteKey"), jt = Symbol("VirtualRoutesKey");
function lt(n, e) {
  const o = (e == null ? void 0 : e.defaultRoutePath) ?? ht(n)[0].path, t = T({
    path: o
  }), l = N(() => ht(n)), s = N(() => t.value.path), p = F({
    setup() {
      return () => {
        const u = l.value.find((m) => m.path === s.value);
        return u ? on(u.component) : null;
      };
    }
  });
  function i() {
    t.value.path = o;
  }
  return Ce(ot, t), Ce(jt, l), { VirtualRouterView: p, restoreRouter: i };
}
function Pe() {
  const n = he(ot);
  return {
    push(e) {
      n.value.path = e;
    }
  };
}
function An() {
  const n = he(jt), e = he(ot);
  return {
    routes: n,
    currentRoute: e
  };
}
const Dn = {
  border: "b base",
  class: "flex items-center justify-between px3"
}, Pn = ["href"], Mn = ["href"], Se = /* @__PURE__ */ F({
  __name: "DevToolsHeader",
  props: {
    githubRepoLink: {},
    docLink: {}
  },
  setup(n) {
    const e = Pe();
    return (o, t) => (d(), h("div", Dn, [
      c("div", null, [
        Qe(o.$slots, "default", {}, () => [
          c("i", {
            class: "i-ep:back cursor-pointer op70 text-base hover:op100",
            onClick: t[0] || (t[0] = (l) => a(e).push("/"))
          })
        ])
      ]),
      c("div", null, [
        c("a", {
          class: "pr2",
          href: o.docLink,
          target: "_blank",
          title: "View Documentation"
        }, t[1] || (t[1] = [
          c("i", { class: "i-clarity:document-line cursor-pointer op70 text-base hover:op100" }, null, -1)
        ]), 8, Pn),
        o.githubRepoLink ? (d(), h("a", {
          key: 0,
          href: o.githubRepoLink,
          target: "_blank",
          title: "Star on GitHub"
        }, t[2] || (t[2] = [
          c("i", { class: "i-mdi:github cursor-pointer op70 text-base hover:op100" }, null, -1)
        ]), 8, Mn)) : U("", !0)
      ])
    ]));
  }
}), xe = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [t, l] of e)
    o[t] = l;
  return o;
}, Hn = {}, Ln = { class: "h-full flex flex-col items-center justify-center op50" };
function On(n, e) {
  return d(), h("div", Ln, [
    e[0] || (e[0] = c("i", { class: "i-lets-icons:blank-light" }, null, -1)),
    c("span", null, [
      Qe(n.$slots, "default")
    ])
  ]);
}
const Ie = /* @__PURE__ */ xe(Hn, [["render", On]]), Un = { class: "flex gap3" }, jn = ["onClick"], Te = /* @__PURE__ */ F({
  __name: "Navbar",
  setup(n) {
    const { routes: e, currentRoute: o } = An(), t = Pe();
    return (l, s) => (d(), h("ul", Un, [
      (d(!0), h(oe, null, re(a(e), (p, i) => (d(), h("li", {
        key: i,
        class: le(["h-10 flex cursor-pointer items-center justify-center border-b-[2px] border-solid text-size-sm leading-none hover:op100", a(o).path === p.path ? "op-100 font-medium text-primary-400 border-primary-400" : "border-transparent op-70"]),
        onClick: (u) => a(t).push(p.path)
      }, se(p.name), 11, jn))), 128))
    ]));
  }
}), st = /* @__PURE__ */ F({
  __name: "ToggleExpanded",
  props: {
    value: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (d(), h("i", {
      class: le(["i-radix-icons:triangle-right flex-none text-4 op-50 transition-base", {
        "transform rotate-90": e.value
      }])
    }, null, 2));
  }
}), zt = Symbol("StateEditorSymbol");
function zn(n) {
  const e = T(n);
  return Ce(zt, e), {
    context: e
  };
}
function at() {
  return he(zt);
}
function Bn() {
  const n = T(""), e = T("string"), o = T(!1), t = at();
  return {
    editingText: n,
    editing: o,
    toggleEditing(l) {
      l && (e.value = l), o.value = !o.value;
    },
    editingType: e,
    nodeId: N(() => t.value.nodeId)
  };
}
function Fn(n, e) {
  if (n === "array")
    return e.length;
  const o = "newProp";
  let t = 1;
  for (; ; ) {
    const l = `${o}${t}`;
    if (!e[l])
      return l;
    t++;
  }
}
function Zn() {
  const n = T({
    enable: !1,
    key: "",
    value: "undefined"
  });
  function e(t, l) {
    const s = Fn(t, l);
    n.value = {
      enable: !0,
      key: s.toString(),
      value: "undefined"
    };
  }
  function o() {
    n.value = {
      enable: !1,
      key: "",
      value: "undefined"
    };
  }
  return {
    addNewProp: e,
    resetDrafting: o,
    draftingNewProp: n
  };
}
const Bt = "expanded-state";
function ge(n = "") {
  const e = T([]);
  return Ce(`${Bt}-${n}`, e), {
    expanded: e
  };
}
function it(n = "") {
  const e = he(`${Bt}-${n}`, T([]));
  function o(t) {
    const l = e.value.indexOf(t);
    l === -1 ? e.value.push(t) : e.value.splice(l, 1);
  }
  return {
    expanded: e,
    toggleExpanded: o
  };
}
function rt(n) {
  return ln() ? (sn(n), !0) : !1;
}
function ne(n) {
  return typeof n == "function" ? n() : a(n);
}
const ut = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kn = (n) => typeof n < "u", Gn = Object.prototype.toString, Wn = (n) => Gn.call(n) === "[object Object]", Fe = () => {
};
function Ft(n, e) {
  function o(...t) {
    return new Promise((l, s) => {
      Promise.resolve(n(() => e.apply(this, t), { fn: e, thisArg: this, args: t })).then(l).catch(s);
    });
  }
  return o;
}
const qn = (n) => n();
function Zt(n, e = {}) {
  let o, t, l = Fe;
  const s = (i) => {
    clearTimeout(i), l(), l = Fe;
  };
  return (i) => {
    const u = ne(n), m = ne(e.maxWait);
    return o && s(o), u <= 0 || m !== void 0 && m <= 0 ? (t && (s(t), t = null), Promise.resolve(i())) : new Promise((f, r) => {
      l = e.rejectOnCancel ? r : f, m && !t && (t = setTimeout(() => {
        o && s(o), t = null, f(i());
      }, m)), o = setTimeout(() => {
        t && s(t), t = null, f(i());
      }, u);
    });
  };
}
function $t(n, e = !1, o = "Timeout") {
  return new Promise((t, l) => {
    setTimeout(e ? () => l(o) : t, n);
  });
}
function Jn(n) {
  let e;
  function o() {
    return e || (e = n()), e;
  }
  return o.reset = async () => {
    const t = e;
    e = void 0, t && await t;
  }, o;
}
function Yn(n) {
  return et();
}
function St(n, e = 200, o = {}) {
  return Ft(
    Zt(e, o),
    n
  );
}
function Xn(n, e, o = {}) {
  const {
    eventFilter: t = qn,
    ...l
  } = o;
  return Q(
    n,
    Ft(
      t,
      e
    ),
    l
  );
}
function Qn(n, e = !0, o) {
  Yn() ? Nt(n, o) : e ? n() : ze(n);
}
function Ye(n, e = !1) {
  function o(r, { flush: g = "sync", deep: V = !1, timeout: w, throwOnTimeout: C } = {}) {
    let S = null;
    const A = [new Promise((k) => {
      S = Q(
        n,
        (_) => {
          r(_) !== e && (S ? S() : ze(() => S == null ? void 0 : S()), k(_));
        },
        {
          flush: g,
          deep: V,
          immediate: !0
        }
      );
    })];
    return w != null && A.push(
      $t(w, C).then(() => ne(n)).finally(() => S == null ? void 0 : S())
    ), Promise.race(A);
  }
  function t(r, g) {
    if (!Ze(r))
      return o((_) => _ === r, g);
    const { flush: V = "sync", deep: w = !1, timeout: C, throwOnTimeout: S } = g ?? {};
    let z = null;
    const k = [new Promise((_) => {
      z = Q(
        [n, r],
        ([E, H]) => {
          e !== (E === H) && (z ? z() : ze(() => z == null ? void 0 : z()), _(E));
        },
        {
          flush: V,
          deep: w,
          immediate: !0
        }
      );
    })];
    return C != null && k.push(
      $t(C, S).then(() => ne(n)).finally(() => (z == null || z(), ne(n)))
    ), Promise.race(k);
  }
  function l(r) {
    return o((g) => !!g, r);
  }
  function s(r) {
    return t(null, r);
  }
  function p(r) {
    return t(void 0, r);
  }
  function i(r) {
    return o(Number.isNaN, r);
  }
  function u(r, g) {
    return o((V) => {
      const w = Array.from(V);
      return w.includes(r) || w.includes(ne(r));
    }, g);
  }
  function m(r) {
    return f(1, r);
  }
  function f(r = 1, g) {
    let V = -1;
    return o(() => (V += 1, V >= r), g);
  }
  return Array.isArray(ne(n)) ? {
    toMatch: o,
    toContains: u,
    changed: m,
    changedTimes: f,
    get not() {
      return Ye(n, !e);
    }
  } : {
    toMatch: o,
    toBe: t,
    toBeTruthy: l,
    toBeNull: s,
    toBeNaN: i,
    toBeUndefined: p,
    changed: m,
    changedTimes: f,
    get not() {
      return Ye(n, !e);
    }
  };
}
function Kt(n) {
  return Ye(n);
}
function eo(n, e, o = {}) {
  const {
    immediate: t = !0
  } = o, l = T(!1);
  let s = null;
  function p() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = !1, p();
  }
  function u(...m) {
    p(), l.value = !0, s = setTimeout(() => {
      l.value = !1, s = null, n(...m);
    }, ne(e));
  }
  return t && (l.value = !0, ut && u()), rt(i), {
    isPending: an(l),
    start: u,
    stop: i
  };
}
function to(n = !1, e = {}) {
  const {
    truthyValue: o = !0,
    falsyValue: t = !1
  } = e, l = Ze(n), s = T(n);
  function p(i) {
    if (arguments.length)
      return s.value = i, s.value;
    {
      const u = ne(o);
      return s.value = s.value === u ? ne(t) : u, s.value;
    }
  }
  return l ? p : [s, p];
}
function no(n, e, o = {}) {
  const {
    debounce: t = 0,
    maxWait: l = void 0,
    ...s
  } = o;
  return Xn(
    n,
    e,
    {
      ...s,
      eventFilter: Zt(t, { maxWait: l })
    }
  );
}
const Ke = ut ? window : void 0, Gt = ut ? window.navigator : void 0;
function be(n) {
  var e;
  const o = ne(n);
  return (e = o == null ? void 0 : o.$el) != null ? e : o;
}
function me(...n) {
  let e, o, t, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([o, t, l] = n, e = Ke) : [e, o, t, l] = n, !e)
    return Fe;
  Array.isArray(o) || (o = [o]), Array.isArray(t) || (t = [t]);
  const s = [], p = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, r, g, V) => (f.addEventListener(r, g, V), () => f.removeEventListener(r, g, V)), u = Q(
    () => [be(e), ne(l)],
    ([f, r]) => {
      if (p(), !f)
        return;
      const g = Wn(r) ? { ...r } : r;
      s.push(
        ...o.flatMap((V) => t.map((w) => i(f, V, w, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    u(), p();
  };
  return rt(m), m;
}
function oo() {
  const n = T(!1), e = et();
  return e && Nt(() => {
    n.value = !0;
  }, e), n;
}
function ct(n) {
  const e = oo();
  return N(() => (e.value, !!n()));
}
function Tt(n, e = {}) {
  const {
    controls: o = !1,
    navigator: t = Gt
  } = e, l = ct(() => t && "permissions" in t), s = Ct(), p = typeof n == "string" ? { name: n } : n, i = Ct(), u = () => {
    var f, r;
    i.value = (r = (f = s.value) == null ? void 0 : f.state) != null ? r : "prompt";
  };
  me(s, "change", u);
  const m = Jn(async () => {
    if (l.value) {
      if (!s.value)
        try {
          s.value = await t.permissions.query(p);
        } catch {
          s.value = void 0;
        } finally {
          u();
        }
      if (o)
        return Rt(s.value);
    }
  });
  return m(), o ? {
    state: i,
    isSupported: l,
    query: m
  } : i;
}
function lo(n = {}) {
  const {
    navigator: e = Gt,
    read: o = !1,
    source: t,
    copiedDuring: l = 1500,
    legacy: s = !1
  } = n, p = ct(() => e && "clipboard" in e), i = Tt("clipboard-read"), u = Tt("clipboard-write"), m = N(() => p.value || s), f = T(""), r = T(!1), g = eo(() => r.value = !1, l);
  function V() {
    p.value && z(i.value) ? e.clipboard.readText().then((A) => {
      f.value = A;
    }) : f.value = S();
  }
  m.value && o && me(["copy", "cut"], V);
  async function w(A = ne(t)) {
    m.value && A != null && (p.value && z(u.value) ? await e.clipboard.writeText(A) : C(A), f.value = A, r.value = !0, g.start());
  }
  function C(A) {
    const k = document.createElement("textarea");
    k.value = A ?? "", k.style.position = "absolute", k.style.opacity = "0", document.body.appendChild(k), k.select(), document.execCommand("copy"), k.remove();
  }
  function S() {
    var A, k, _;
    return (_ = (k = (A = document == null ? void 0 : document.getSelection) == null ? void 0 : A.call(document)) == null ? void 0 : k.toString()) != null ? _ : "";
  }
  function z(A) {
    return A === "granted" || A === "prompt";
  }
  return {
    isSupported: m,
    text: f,
    copied: r,
    copy: w
  };
}
function so(n) {
  return JSON.parse(JSON.stringify(n));
}
function ao(n, e, o = {}) {
  const { window: t = Ke, ...l } = o;
  let s;
  const p = ct(() => t && "ResizeObserver" in t), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = N(() => {
    const r = ne(n);
    return Array.isArray(r) ? r.map((g) => be(g)) : [be(r)];
  }), m = Q(
    u,
    (r) => {
      if (i(), p.value && t) {
        s = new ResizeObserver(e);
        for (const g of r)
          g && s.observe(g, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    i(), m();
  };
  return rt(f), {
    isSupported: p,
    stop: f
  };
}
function io(n, e = { width: 0, height: 0 }, o = {}) {
  const { window: t = Ke, box: l = "content-box" } = o, s = N(() => {
    var r, g;
    return (g = (r = be(n)) == null ? void 0 : r.namespaceURI) == null ? void 0 : g.includes("svg");
  }), p = T(e.width), i = T(e.height), { stop: u } = ao(
    n,
    ([r]) => {
      const g = l === "border-box" ? r.borderBoxSize : l === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
      if (t && s.value) {
        const V = be(n);
        if (V) {
          const w = V.getBoundingClientRect();
          p.value = w.width, i.value = w.height;
        }
      } else if (g) {
        const V = Array.isArray(g) ? g : [g];
        p.value = V.reduce((w, { inlineSize: C }) => w + C, 0), i.value = V.reduce((w, { blockSize: C }) => w + C, 0);
      } else
        p.value = r.contentRect.width, i.value = r.contentRect.height;
    },
    o
  );
  Qn(() => {
    const r = be(n);
    r && (p.value = "offsetWidth" in r ? r.offsetWidth : e.width, i.value = "offsetHeight" in r ? r.offsetHeight : e.height);
  });
  const m = Q(
    () => be(n),
    (r) => {
      p.value = r ? e.width : 0, i.value = r ? e.height : 0;
    }
  );
  function f() {
    u(), m();
  }
  return {
    width: p,
    height: i,
    stop: f
  };
}
const ro = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function uo(n = {}) {
  const {
    reactive: e = !1,
    target: o = Ke,
    aliasMap: t = ro,
    passive: l = !0,
    onEventFired: s = Fe
  } = n, p = gt(/* @__PURE__ */ new Set()), i = {
    toJSON() {
      return {};
    },
    current: p
  }, u = e ? gt(i) : i, m = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  function r(C, S) {
    C in u && (e ? u[C] = S : u[C].value = S);
  }
  function g() {
    p.clear();
    for (const C of f)
      r(C, !1);
  }
  function V(C, S) {
    var z, A;
    const k = (z = C.key) == null ? void 0 : z.toLowerCase(), E = [(A = C.code) == null ? void 0 : A.toLowerCase(), k].filter(Boolean);
    k && (S ? p.add(k) : p.delete(k));
    for (const H of E)
      f.add(H), r(H, S);
    k === "meta" && !S ? (m.forEach((H) => {
      p.delete(H), r(H, !1);
    }), m.clear()) : typeof C.getModifierState == "function" && C.getModifierState("Meta") && S && [...p, ...E].forEach((H) => m.add(H));
  }
  me(o, "keydown", (C) => (V(C, !0), s(C)), { passive: l }), me(o, "keyup", (C) => (V(C, !1), s(C)), { passive: l }), me("blur", g, { passive: !0 }), me("focus", g, { passive: !0 });
  const w = new Proxy(
    u,
    {
      get(C, S, z) {
        if (typeof S != "string")
          return Reflect.get(C, S, z);
        if (S = S.toLowerCase(), S in t && (S = t[S]), !(S in u))
          if (/[+_-]/.test(S)) {
            const k = S.split(/[+_-]/g).map((_) => _.trim());
            u[S] = N(() => k.every((_) => ne(w[_])));
          } else
            u[S] = T(!1);
        const A = Reflect.get(C, S, z);
        return e ? ne(A) : A;
      }
    }
  );
  return w;
}
function co(n, e, o, t = {}) {
  var l, s, p;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: m,
    deep: f = !1,
    defaultValue: r,
    shouldEmit: g
  } = t, V = et(), w = o || (V == null ? void 0 : V.emit) || ((l = V == null ? void 0 : V.$emit) == null ? void 0 : l.bind(V)) || ((p = (s = V == null ? void 0 : V.proxy) == null ? void 0 : s.$emit) == null ? void 0 : p.bind(V == null ? void 0 : V.proxy));
  let C = m;
  C = C || `update:${e.toString()}`;
  const S = (k) => i ? typeof i == "function" ? i(k) : so(k) : k, z = () => Kn(n[e]) ? S(n[e]) : r, A = (k) => {
    g ? g(k) && w(C, k) : w(C, k);
  };
  if (u) {
    const k = z(), _ = T(k);
    let E = !1;
    return Q(
      () => n[e],
      (H) => {
        E || (E = !0, _.value = S(H), ze(() => E = !1));
      }
    ), Q(
      _,
      (H) => {
        !E && (H !== n[e] || f) && A(H);
      },
      { deep: f }
    ), _;
  } else
    return N({
      get() {
        return z();
      },
      set(k) {
        A(k);
      }
    });
}
function po(n, e = {}) {
  const {
    enter: o = () => {
    },
    leave: t = () => {
    },
    initial: l = !1
  } = e, s = T(l);
  return me(n, "mouseenter", () => {
    s.value = !0, o();
  }), me(n, "mouseleave", () => {
    s.value = !1, t();
  }), {
    isHovering: s
  };
}
const fo = { class: "flex pl5px" }, vo = { class: "w160px py5px" }, mo = /* @__PURE__ */ F({
  __name: "StateFieldEditor",
  props: {
    data: {},
    hovering: { type: Boolean },
    depth: {},
    showAddIfNeeded: { type: Boolean, default: !0 },
    disableEdit: { type: Boolean }
  },
  emits: ["enableEditInput", "addNewProp"],
  setup(n) {
    const e = n, o = at(), { copy: t, isSupported: l } = lo(), s = T(!1), p = N(() => Dt(e.data.value)), i = N(() => p.value.value), u = N(() => p.value.customType), m = N(() => i.value === null ? "null" : typeof i.value), f = {
      flat: !0,
      size: "mini"
    }, r = N(() => ({
      "opacity-0": !e.hovering
    }));
    async function g(w, C = !1) {
      await D.value.editInspectorState({
        path: e.data.path || [e.data.key],
        inspectorId: o.value.inspectorId,
        type: e.data.stateType,
        nodeId: o.value.nodeId,
        state: {
          newKey: null,
          value: Rt(w),
          type: m.value,
          remove: C
        }
      }), await D.value.sendInspectorState(o.value.inspectorId);
    }
    function V(w, C) {
      const S = typeof w == "number" ? w + C : BigInt(w) + BigInt(C);
      g(S);
    }
    return (w, C) => (d(), h("div", fo, [
      !e.disableEdit && w.data.editable ? (d(), h(oe, { key: 0 }, [
        m.value === "string" || m.value === "number" || m.value === "object" || m.value === "null" ? (d(), h(oe, { key: 0 }, [
          G((d(), B(a(de), ke(f, {
            class: r.value,
            onClick: C[0] || (C[0] = ve((S) => w.$emit("enableEditInput", m.value), ["stop"]))
          }), {
            icon: L(() => [
              x(a(ie), { icon: "i-material-symbols-edit-rounded" })
            ]),
            _: 1
          }, 16, ["class"])), [
            [a(W), {
              content: "Edit value"
            }]
          ]),
          m.value === "object" && w.showAddIfNeeded ? G((d(), B(a(de), ke({ key: 0 }, f, {
            class: r.value,
            onClick: C[1] || (C[1] = ve((S) => w.$emit("addNewProp", Array.isArray(i.value) ? "array" : "object"), ["stop"]))
          }), {
            icon: L(() => [
              x(a(ie), { icon: "i-material-symbols-add-circle-rounded" })
            ]),
            _: 1
          }, 16, ["class"])), [
            [a(W), {
              content: "Add new value"
            }]
          ]) : U("", !0)
        ], 64)) : U("", !0),
        m.value === "boolean" ? (d(), B(a(de), ke({ key: 1 }, f, {
          class: r.value,
          onClick: C[2] || (C[2] = (S) => g(!i.value))
        }), {
          icon: L(() => [
            x(a(ie), {
              icon: i.value ? "i-material-symbols-check-box-sharp" : "i-material-symbols-check-box-outline-blank-sharp"
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 16, ["class"])) : m.value === "number" || u.value === "bigint" ? (d(), h(oe, { key: 2 }, [
          x(a(de), ke(f, {
            class: r.value,
            onClick: C[3] || (C[3] = ve((S) => V(i.value, 1), ["stop"]))
          }), {
            icon: L(() => [
              x(a(ie), { icon: "i-carbon-add" })
            ]),
            _: 1
          }, 16, ["class"]),
          x(a(de), ke(f, {
            class: r.value,
            onClick: C[4] || (C[4] = ve((S) => V(i.value, -1), ["stop"]))
          }), {
            icon: L(() => [
              x(a(ie), { icon: "i-carbon-subtract" })
            ]),
            _: 1
          }, 16, ["class"])
        ], 64)) : U("", !0)
      ], 64)) : U("", !0),
      !e.disableEdit && w.depth > 0 && w.data.editable ? (d(), B(a(de), ke({ key: 1 }, f, {
        class: r.value,
        onClick: C[5] || (C[5] = ve((S) => g(i.value, !0), ["stop"]))
      }), {
        icon: L(() => [
          x(a(ie), { icon: "i-material-symbols-delete-rounded" })
        ]),
        _: 1
      }, 16, ["class"])) : U("", !0),
      x(a(cn), {
        class: le({
          "opacity-0": !w.hovering && !s.value
        }),
        "button-props": {
          flat: !0,
          size: "mini"
        },
        disabled: !a(l),
        "onUpdate:visible": C[8] || (C[8] = (S) => s.value = S)
      }, {
        popper: L(() => [
          c("div", vo, [
            x(a(_t), {
              onClick: C[6] || (C[6] = (S) => a(t)(typeof i.value == "object" ? JSON.stringify(i.value) : i.value.toString()))
            }, {
              icon: L(() => [
                x(a(ie), {
                  icon: "i-material-symbols-copy-all-rounded",
                  class: "mt4px"
                }),
                C[9] || (C[9] = Y(" Copy Value "))
              ]),
              _: 1
            }),
            x(a(_t), {
              onClick: C[7] || (C[7] = () => {
                a(t)(w.data.key);
              })
            }, {
              icon: L(() => [
                x(a(ie), {
                  icon: "i-material-symbols-copy-all-rounded",
                  class: "mt4px"
                }),
                C[10] || (C[10] = Y(" Copy Path "))
              ]),
              _: 1
            })
          ])
        ]),
        "button-icon": L(() => [
          x(a(ie), { icon: "i-material-symbols:more-vert" })
        ]),
        _: 1
      }, 8, ["class", "disabled"])
    ]));
  }
}), ho = { class: "flex-inline items-center gap4px" }, Je = /* @__PURE__ */ F({
  __name: "StateFieldInputEditor",
  props: {
    modelValue: {},
    customType: {},
    showActions: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !0 }
  },
  emits: ["cancel", "submit", "update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = N(() => o.customType === "date" ? "datetime-local" : ""), { escape: s, enter: p } = uo();
    tt(() => {
      s.value ? t("cancel") : p.value && t("submit");
    });
    const i = co(o, "modelValue", t);
    function u(r) {
      try {
        return je(r, o.customType), !0;
      } catch {
        return !1;
      }
    }
    const m = T(!1);
    return Q(i, bn(() => {
      m.value = !u(i.value);
    }, 300)), (r, g) => (d(), h("span", ho, [
      x(a(_e), {
        modelValue: a(i),
        "onUpdate:modelValue": g[0] || (g[0] = (V) => Ze(i) ? i.value = V : null),
        type: l.value,
        variant: m.value ? "warning" : "normal",
        class: le(["h25px px4px", r.customType === "date" ? "w240px" : "w120px"]),
        "auto-focus": r.autoFocus,
        onClick: g[1] || (g[1] = ve(() => {
        }, ["stop"]))
      }, null, 8, ["modelValue", "type", "variant", "class", "auto-focus"]),
      r.showActions ? (d(), h(oe, { key: 0 }, [
        G((d(), B(a(de), {
          size: "mini",
          flat: "",
          class: "p2px!",
          onClick: g[2] || (g[2] = ve((V) => r.$emit("cancel"), ["stop"]))
        }, {
          icon: L(() => [
            x(a(ie), { icon: "i-material-symbols-cancel" })
          ]),
          _: 1
        })), [
          [a(W), {
            content: "Esc to cancel"
          }]
        ]),
        m.value ? G((d(), B(a(ie), {
          key: 1,
          icon: "i-material-symbols-warning",
          class: "color-warning-500 dark:color-warning-300"
        }, null, 512)), [
          [a(W), {
            content: "Invalid value"
          }]
        ]) : G((d(), B(a(de), {
          key: 0,
          size: "mini",
          flat: "",
          class: "p2px!",
          onClick: g[3] || (g[3] = ve((V) => r.$emit("submit"), ["stop"]))
        }, {
          icon: L(() => [
            x(a(ie), { icon: "i-material-symbols-save" })
          ]),
          _: 1
        })), [
          [a(W), {
            content: "Enter to submit change"
          }]
        ])
      ], 64)) : U("", !0)
    ]));
  }
}), go = {
  key: 1,
  pl5: ""
}, Co = {
  "whitespace-nowrap": "",
  "text-purple-700": "",
  op70: "",
  "dark:text-purple-300": ""
}, _o = ["innerHTML"], yo = { key: 0 }, xo = {
  "overflow-hidden": "",
  "text-ellipsis": "",
  "whitespace-nowrap": "",
  "state-key": ""
}, Et = 30, bo = /* @__PURE__ */ F({
  __name: "StateFieldViewer",
  props: {
    data: {},
    depth: {},
    index: {},
    expandedStateId: {}
  },
  setup(n) {
    const e = n, o = T(Et), t = N(() => _n(e.data.value, !1, {
      customClass: {
        string: "max-w-120 truncate"
      }
    })), l = N(() => yt(e.data.value)), s = N(() => Dt(e.data.value)), { expanded: p, toggleExpanded: i } = it(e.expandedStateId ?? ""), u = N(() => {
      var M;
      return l.value === "custom" ? `${((M = e.data.value._custom) == null ? void 0 : M.type) ?? "string"}-custom-state` : "unknown-state-type";
    }), m = N(() => {
      const { value: M } = s.value;
      return xt(M) ? M.length : bt(M) ? Object.keys(M).length : 0;
    }), f = N(() => e.data.path || [e.data.key]), r = N(() => f.value[f.value.length - 1]), g = N(() => {
      var v, y, R, P, Z, ae, Ee;
      const M = ["Reactive"], b = ((y = (v = e.data.value) == null ? void 0 : v._custom) == null ? void 0 : y.stateTypeName) || ((R = e.data) == null ? void 0 : R.stateTypeName);
      if (M.includes(b))
        return b;
      if ((Z = (P = e.data.value) == null ? void 0 : P.fields) != null && Z.abstract)
        return "";
      {
        const Ve = (Ee = (ae = e.data.value) == null ? void 0 : ae._custom) == null ? void 0 : Ee.type, Le = l.value === "custom" && !Ve ? `"${t.value}"` : t.value === "" ? '""' : t.value, Ge = l.value === "custom" && Ve === "ref" ? yt(Le) : l.value, Oe = l.value === "string" ? "select-text" : "", Ue = `<span title="${l.value === "string" ? e.data.value : ""}" class="${Ge}-state-type flex whitespace-nowrap ${Oe}">${Le}</span>`;
        return b ? `${Ue} <span class="text-gray-500">(${b})</span>` : Ue;
      }
    }), V = N(() => {
      const { value: M, inherit: b, customType: v } = s.value, y = v === "set";
      let R = [];
      return xt(M) ? M.slice(0, o.value).map((Z, ae) => ({
        key: ae.toString(),
        path: [...f.value, ae.toString()],
        value: Z,
        ...b,
        editable: e.data.editable && !y,
        creating: !1
      })) : (bt(M) && (R = Object.keys(M).slice(0, o.value).map((P) => ({
        key: P,
        path: [...f.value, P],
        value: M[P],
        ...b,
        editable: e.data.editable && !y,
        creating: !1
      })), l.value !== "custom" && (R = Mt(R))), R === e.data.value ? [] : R);
    }), w = N(() => V.value.length > 0), C = T(), S = at(), { isHovering: z } = po(() => C.value), { editingType: A, editing: k, editingText: _, toggleEditing: E, nodeId: H } = Bn();
    Q(() => k.value, (M) => {
      if (M) {
        const { value: b } = s.value;
        _.value = yn(b, s.value.customType);
      } else
        _.value = "";
    });
    async function q() {
      const M = e.data;
      await D.value.editInspectorState({
        path: f.value,
        inspectorId: S.value.inspectorId,
        type: M.stateType,
        nodeId: H.value,
        state: {
          newKey: null,
          type: A.value,
          value: je(_.value, s.value.customType)
        }
      }), await D.value.sendInspectorState(S.value.inspectorId), E();
    }
    const { addNewProp: X, draftingNewProp: j, resetDrafting: ue } = Zn();
    function pe(M) {
      const b = `${e.depth}-${e.index}`;
      p.value.includes(b) || i(b), X(M, s.value.value);
    }
    async function fe() {
      const M = e.data;
      await D.value.editInspectorState({
        path: [...f.value, j.value.key],
        inspectorId: S.value.inspectorId,
        type: M.stateType,
        nodeId: H.value,
        state: {
          newKey: j.value.key,
          type: typeof je(j.value.value),
          value: je(j.value.value)
        }
      }), await D.value.sendInspectorState(S.value.inspectorId), ue();
    }
    return (M, b) => (d(), h("div", null, [
      c("div", {
        ref_key: "containerRef",
        ref: C,
        class: le(["font-state-field flex items-center text-3.5", [w.value && "cursor-pointer hover:bg-active"]]),
        style: $e({ paddingLeft: `${M.depth * 15 + 4}px` }),
        onClick: b[1] || (b[1] = (v) => a(i)(`${M.depth}-${M.index}`))
      }, [
        w.value ? (d(), B(st, {
          key: 0,
          value: a(p).includes(`${M.depth}-${M.index}`)
        }, null, 8, ["value"])) : (d(), h("span", go)),
        c("span", Co, se(r.value), 1),
        b[5] || (b[5] = c("span", { mx1: "" }, ":", -1)),
        a(k) ? (d(), B(Je, {
          key: 2,
          modelValue: a(_),
          "onUpdate:modelValue": b[0] || (b[0] = (v) => Ze(_) ? _.value = v : null),
          class: "mr-1",
          "custom-type": s.value.customType,
          onCancel: a(E),
          onSubmit: q
        }, null, 8, ["modelValue", "custom-type", "onCancel"])) : U("", !0),
        c("span", {
          class: le([u.value, "flex whitespace-nowrap dark:text-#bdc6cf"])
        }, [
          c("span", {
            class: "flex",
            innerHTML: g.value
          }, null, 8, _o)
        ], 2),
        x(mo, {
          hovering: a(z),
          "disable-edit": a(S).disableEdit || a(k),
          data: M.data,
          depth: M.depth,
          onEnableEditInput: a(E),
          onAddNewProp: pe
        }, null, 8, ["hovering", "disable-edit", "data", "depth", "onEnableEditInput"])
      ], 6),
      w.value && a(p).includes(`${M.depth}-${M.index}`) ? (d(), h("div", yo, [
        x(Wt, {
          data: V.value,
          depth: M.depth,
          index: M.index
        }, null, 8, ["data", "depth", "index"]),
        m.value > o.value ? G((d(), B(a(de), {
          key: 0,
          flat: "",
          size: "mini",
          class: "ml-4",
          onClick: b[2] || (b[2] = (v) => o.value += Et)
        }, {
          icon: L(() => [
            x(a(ie), { icon: "i-material-symbols-more-horiz" })
          ]),
          _: 1
        })), [
          [a(W), "Show more"]
        ]) : U("", !0),
        a(j).enable ? (d(), h("div", {
          key: 1,
          style: $e({ paddingLeft: `${(M.depth + 1) * 15 + 4}px` })
        }, [
          c("span", xo, [
            x(Je, {
              modelValue: a(j).key,
              "onUpdate:modelValue": b[3] || (b[3] = (v) => a(j).key = v),
              "show-actions": !1
            }, null, 8, ["modelValue"])
          ]),
          b[6] || (b[6] = c("span", { "mx-1": "" }, ":", -1)),
          x(Je, {
            modelValue: a(j).value,
            "onUpdate:modelValue": b[4] || (b[4] = (v) => a(j).value = v),
            "auto-focus": !1,
            onCancel: a(ue),
            onSubmit: fe
          }, null, 8, ["modelValue", "onCancel"])
        ], 4)) : U("", !0)
      ])) : U("", !0)
    ]));
  }
}), wo = /* @__PURE__ */ xe(bo, [["__scopeId", "data-v-809b5df7"]]), Wt = /* @__PURE__ */ F({
  __name: "ChildStateViewer",
  props: {
    data: {},
    depth: { default: 0 },
    index: {},
    expandedStateId: { default: "" }
  },
  setup(n) {
    return (e, o) => (d(), h("div", null, [
      (d(!0), h(oe, null, re(e.data, (t, l) => (d(), h("div", { key: l }, [
        x(wo, {
          data: t,
          depth: e.depth + 1,
          index: `${e.index}-${l}`,
          "expanded-state-id": e.expandedStateId
        }, null, 8, ["data", "depth", "index", "expanded-state-id"])
      ]))), 128))
    ]));
  }
}), ko = ["onClick"], Io = {
  key: 1,
  pl5: ""
}, $o = {
  "font-state-field": "",
  "text-3.5": "",
  "text-hex-a3a3a3": ""
}, So = { key: 0 }, Me = /* @__PURE__ */ F({
  __name: "RootStateViewer",
  props: {
    data: {},
    nodeId: {},
    inspectorId: {},
    disableEdit: { type: Boolean, default: !1 },
    expandedStateId: { default: "" }
  },
  setup(n) {
    const e = n;
    function o() {
      return {
        nodeId: e.nodeId,
        inspectorId: e.inspectorId,
        disableEdit: e.disableEdit
      };
    }
    const { context: t } = zn(o());
    tt(() => {
      t.value = o();
    });
    const { expanded: l, toggleExpanded: s } = it(e.expandedStateId);
    return (p, i) => (d(), h("div", null, [
      (d(!0), h(oe, null, re(p.data, (u, m, f) => (d(), h("div", { key: f }, [
        c("div", {
          class: le(["flex items-center", [(u == null ? void 0 : u.length) && "cursor-pointer hover:bg-active"]]),
          onClick: (r) => a(s)(`${f}`)
        }, [
          u != null && u.length ? (d(), B(st, {
            key: 0,
            value: a(l).includes(`${f}`)
          }, null, 8, ["value"])) : (d(), h("span", Io)),
          c("span", $o, se(m), 1)
        ], 10, ko),
        u != null && u.length && a(l).includes(`${f}`) ? (d(), h("div", So, [
          x(Wt, {
            data: u,
            index: `${f}`,
            "expanded-state-id": p.expandedStateId
          }, null, 8, ["data", "index", "expanded-state-id"])
        ])) : U("", !0)
      ]))), 128))
    ]));
  }
}), To = { class: "p3" }, Eo = ["onClick"], Vo = {
  key: 0,
  class: "absolute left-5px top-4.5 h10 w0 border-l-2",
  border: "solid gray2"
}, No = { class: "h-full flex items-center truncate pl5" }, Ro = {
  absolute: "",
  "top-5": "",
  pr2: "",
  "text-3": "",
  op40: ""
}, Ao = {
  pl2: "",
  op30: ""
}, Do = /* @__PURE__ */ F({
  __name: "EventList",
  props: /* @__PURE__ */ Re({
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    const e = n, o = Xe(n, "modelValue"), t = ["#3e5770", "#42b983", "#0098c4"], l = T(null), s = N(() => {
      let p = -1, i = 0;
      return e.data.forEach((u, m) => {
        (u.groupId !== i || p === -1) && (p = (p + 1) % t.length), i = u.groupId ?? i, u.id = m, u.color = t[p];
      }), e.data;
    });
    return Q(() => s.value.length, (p) => {
      var i;
      (i = l.value) == null || i.scrollToItem(p - 1);
    }, { flush: "post" }), (p, i) => (d(), h("div", To, [
      x(a(wn), {
        ref_key: "scrollerRef",
        ref: l,
        items: s.value,
        "min-item-size": 52,
        "key-field": "id",
        "page-mode": "",
        "item-tag": "li",
        "list-tag": "ul",
        buffer: 20
      }, {
        default: L(({ item: u }) => [
          c("div", {
            class: "relative mb7 h6 cursor-pointer",
            style: $e({ color: o.value === u.id ? u.color : "" }),
            onClick: (m) => o.value = u.id
          }, [
            c("span", {
              class: "absolute top-1.5 inline-block h3 w3 b rounded-50%",
              style: $e({ border: `3px solid ${u.color}` })
            }, null, 4),
            u.id < p.data.length - 1 ? (d(), h("span", Vo)) : U("", !0),
            c("p", No, [
              c("span", Ro, "[" + se(a($n)(u.time)) + "]", 1),
              Y(" " + se(u.title) + " ", 1),
              c("span", Ao, se(u.subtitle), 1)
            ])
          ], 12, Eo)
        ]),
        _: 1
      }, 8, ["items"])
    ]));
  }
}), Po = { class: "relative h-full flex flex-col" }, Mo = {
  key: 1,
  class: "flex-1 overflow-hidden"
}, Ho = {
  "h-full": "",
  "select-none": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, Lo = {
  "h-full": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, Oo = {
  key: 3,
  class: "absolute right-3 top-12 flex items-center justify-end b-1 border-base rounded-1 b-solid px2 py1"
}, Uo = { class: "flex items-center gap-2 px-1" }, jo = {
  key: 0,
  class: "recording recording-btn bg-[#ef4444]"
}, zo = {
  key: 1,
  class: "recording-btn bg-black op70 dark:bg-white hover:op100"
}, Bo = { class: "flex items-center gap1" }, Fo = /* @__PURE__ */ F({
  __name: "index",
  props: {
    layerIds: {},
    pluginId: {},
    docLink: {},
    githubRepoLink: {},
    headerVisible: { type: Boolean, default: !0 },
    switcherVisible: { type: Boolean, default: !0 }
  },
  setup(n, { expose: e }) {
    const o = n, { expanded: t } = ge("timeline-state");
    t.value = ["0", "1"];
    const l = T([]), s = T(/* @__PURE__ */ new Map()), p = T(0), i = Pt(), u = N(() => {
      var A;
      return (A = i.timelineLayersState.value) == null ? void 0 : A[o.pluginId];
    }), m = N(() => l.value[p.value] ?? null), f = N(() => u.value ? "Stop recording" : "Start recording"), r = N(() => {
      var k;
      const A = [];
      for (const _ in (k = m.value) == null ? void 0 : k.data)
        A.push({
          key: _,
          type: _,
          editable: !1,
          value: m.value.data[_]
        });
      return A;
    }), g = N(() => {
      var _, E, H;
      const A = (_ = m.value) == null ? void 0 : _.groupId, k = s.value.get(A);
      if (k) {
        const q = ((E = k[k.length - 1]) == null ? void 0 : E.time) - (((H = k[0]) == null ? void 0 : H.time) ?? 0);
        return [{
          key: "events",
          type: "events",
          editable: !1,
          value: k.length
        }, q && {
          key: "duration",
          type: "duration",
          editable: !1,
          value: `${q}ms`
        }].filter(Boolean);
      }
    }), V = N(() => ({ "Event Info": r.value, ...g.value && { "Group Info": g.value } }));
    function w(A) {
      var _;
      const k = A.groupId;
      k !== void 0 && (s.value.set(k, s.value.get(k) ?? []), (_ = s.value.get(k)) == null || _.push(A));
    }
    function C(A) {
      const k = ee(A);
      if (!k)
        return;
      const { layerId: _, event: E } = k;
      o.layerIds.includes(_) && (l.value.push(E), w(E));
    }
    D.functions.on(J.TIMELINE_EVENT_UPDATED, C), we(() => {
      D.functions.off(J.TIMELINE_EVENT_UPDATED, C);
    });
    function S() {
      l.value = [], s.value.clear();
    }
    e({
      clear: S
    });
    function z() {
      D.value.updateTimelineLayersState({
        [o.pluginId]: !u.value
      });
    }
    return (A, k) => (d(), h("div", Po, [
      A.headerVisible ? (d(), B(Se, {
        key: 0,
        "doc-link": A.docLink,
        "github-repo-link": A.githubRepoLink
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }, 8, ["doc-link", "github-repo-link"])) : U("", !0),
      l.value.length ? (d(), h("div", Mo, [
        x(a(De), { class: "h-full" }, {
          default: L(() => [
            x(a(ce), {
              border: "r base",
              size: "40",
              "h-full": ""
            }, {
              default: L(() => [
                c("div", Ho, [
                  x(Do, {
                    modelValue: p.value,
                    "onUpdate:modelValue": k[0] || (k[0] = (_) => p.value = _),
                    data: l.value
                  }, null, 8, ["modelValue", "data"])
                ])
              ]),
              _: 1
            }),
            x(a(ce), { size: "60" }, {
              default: L(() => [
                c("div", Lo, [
                  x(Me, {
                    class: "p3",
                    data: V.value,
                    "node-id": "",
                    "inspector-id": "",
                    "disable-edit": !0,
                    "expanded-state-id": "timeline-state"
                  }, null, 8, ["data"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : (d(), B(Ie, {
        key: 2,
        class: "flex-1"
      }, {
        default: L(() => k[1] || (k[1] = [
          Y(" No events ")
        ])),
        _: 1
      })),
      A.switcherVisible ? (d(), h("div", Oo, [
        c("div", Uo, [
          G((d(), h("div", {
            class: "flex items-center gap1",
            onClick: z
          }, [
            u.value ? (d(), h("span", jo)) : (d(), h("span", zo))
          ])), [
            [
              a(W),
              { content: f.value },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          G((d(), h("div", {
            class: "flex items-center gap1",
            onClick: S
          }, [
            x(a(Be), {
              name: "baseline-delete",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              a(W),
              { content: "Clear all timelines" },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          G((d(), h("div", Bo, [
            x(a(Be), {
              name: "baseline-tips-and-updates",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              a(W),
              { content: "<p style='width: 285px'>Timeline events can cause significant performance overhead in large applications, so we recommend enabling it only when needed and on-demand. </p>", html: !0 },
              void 0,
              { "bottom-end": !0 }
            ]
          ])
        ])
      ])) : U("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ xe(Fo, [["__scopeId", "data-v-3dbcfd2a"]]);
function us() {
  const n = T([]), e = T([]);
  function o(l) {
    e.value = l, l.length < n.value.length && (n.value = []), e.value.forEach((s) => {
      t(s);
    });
  }
  Ae(() => {
    D.value.getCustomInspector().then((l) => {
      e.value = l, e.value.forEach((s) => {
        t(s);
      });
    }), D.functions.on(J.INSPECTOR_UPDATED, o);
  });
  function t(l) {
    n.value.some((s) => s.id === l.id) || n.value.push(l);
  }
  return we(() => {
    D.functions.off(J.INSPECTOR_UPDATED, o);
  }), {
    registeredInspector: n,
    register: t
  };
}
const qt = Symbol("SelectedSymbolKey");
function Zo() {
  const n = T("");
  return Ce(qt, n), {
    selected: n
  };
}
function Ko() {
  const n = he(qt, T(""));
  function e(o) {
    n.value = o;
  }
  return {
    selected: n,
    select: e
  };
}
const Go = ["onClick", "onDblclick", "onMouseover"], Wo = {
  key: 1,
  pl5: ""
}, qo = {
  "font-state-field": "",
  "text-3.5": ""
}, Jo = {
  key: 0,
  class: "text-gray-400 dark:text-gray-600 group-hover:text-white group-hover:op50 [.active_&]:op50 [.active_&]:text-white!"
}, Yo = {
  "group-hover:text-white": "",
  class: "ws-nowrap [.active_&]:text-white"
}, Xo = {
  key: 2,
  class: "text-gray-400 dark:text-gray-600 group-hover:text-white group-hover:op50 [.active_&]:op50 [.active_&]:text-white!"
}, Qo = {
  key: 2,
  class: "ml-2 rounded-sm bg-blue-400 px-1 text-[0.75rem] leading-snug dark:bg-blue-800"
}, el = {
  key: 3,
  class: "ml-2 rounded-sm bg-gray-500 px-1 text-[0.75rem] leading-snug"
}, tl = { key: 0 }, He = /* @__PURE__ */ F({
  __name: "TreeViewer",
  props: /* @__PURE__ */ Re({
    data: {},
    depth: { default: 0 },
    withTag: { type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Re(["hover", "leave"], ["update:modelValue"]),
  setup(n, { emit: e }) {
    const o = e, t = Xe(n, "modelValue"), { expanded: l, toggleExpanded: s } = it();
    Ko();
    function p(u) {
      return "name" in u && (u == null ? void 0 : u.name) || "label" in u && u.label;
    }
    function i(u) {
      t.value = u;
    }
    return (u, m) => (d(!0), h(oe, null, re(u.data, (f, r) => {
      var g, V;
      return d(), h("div", {
        key: r,
        class: le({
          "min-w-max": u.depth === 0
        })
      }, [
        c("div", {
          class: le(["group flex cursor-pointer items-center rounded-1 hover:bg-primary-300 hover:dark:bg-gray-600", { "bg-primary-600! active": t.value === f.id }]),
          style: $e({ paddingLeft: `${15 * u.depth + 4}px` }),
          onClick: (w) => i(f.id),
          onDblclick: (w) => a(s)(f.id),
          onMouseover: () => o("hover", f.id),
          onMouseleave: m[0] || (m[0] = () => o("leave"))
        }, [
          (g = f == null ? void 0 : f.children) != null && g.length ? (d(), B(st, {
            key: 0,
            value: a(l).includes(f.id),
            class: "[.active_&]:op20 group-hover:op20",
            onClick: ve((w) => a(s)(f.id), ["stop"])
          }, null, 8, ["value", "onClick"])) : (d(), h("span", Wo)),
          c("span", qo, [
            u.withTag ? (d(), h("span", Jo, "<")) : U("", !0),
            c("span", Yo, se(p(f)), 1),
            (f.renderKey === 0 || f.renderKey) && f.renderKey !== a(At) ? (d(), h("span", {
              key: 1,
              class: le(["text-xs opacity-50", {
                "opacity-100": t.value === f.id
              }])
            }, [
              c("span", {
                class: le([t.value === f.id ? "text-purple-200" : "text-purple-500"])
              }, " key", 2),
              m[4] || (m[4] = Y("=")),
              c("span", null, se(f.renderKey), 1)
            ], 2)) : U("", !0),
            u.withTag ? (d(), h("span", Xo, ">")) : U("", !0)
          ]),
          f.isFragment ? G((d(), h("span", Qo, m[5] || (m[5] = [
            Y(" fragment ")
          ]))), [
            [a(W), "Has multiple root DOM nodes"]
          ]) : U("", !0),
          f.inactive ? G((d(), h("span", el, m[6] || (m[6] = [
            Y(" inactive ")
          ]))), [
            [a(W), "Currently inactive but not destroyed"]
          ]) : U("", !0),
          (d(!0), h(oe, null, re(f.tags, (w, C) => (d(), B(Ut, {
            key: C,
            tag: w
          }, null, 8, ["tag"]))), 128))
        ], 46, Go),
        (V = f == null ? void 0 : f.children) != null && V.length && a(l).includes(f.id) ? (d(), h("div", tl, [
          x(He, {
            modelValue: t.value,
            "onUpdate:modelValue": m[1] || (m[1] = (w) => t.value = w),
            data: f == null ? void 0 : f.children,
            depth: u.depth + 1,
            "with-tag": u.withTag,
            onHover: m[2] || (m[2] = (w) => o("hover", w)),
            onLeave: m[3] || (m[3] = (w) => o("leave"))
          }, null, 8, ["modelValue", "data", "depth", "with-tag"])
        ])) : U("", !0)
      ], 2);
    }), 128));
  }
}), Vt = 200;
function nl() {
  const n = St((o) => D.value.highlighComponent(o), Vt), e = St(() => D.value.unhighlight(), Vt);
  return {
    highlight: n,
    unhighlight: e
  };
}
const ol = { class: "absolute left-0 top-0 h-full w-full flex flex-col rounded-br-2.5 rounded-tr-2.5 bg-white p2 dark:bg-#121212" }, ll = { class: "flex-1 overflow-scroll text-3.5" }, sl = /* @__PURE__ */ F({
  __name: "RenderCode",
  props: {
    code: {}
  },
  emits: ["close"],
  setup(n, { emit: e }) {
    const o = e;
    function t() {
      o("close");
    }
    return (l, s) => (d(), h("div", ol, [
      c("div", { class: "h-12 w-full flex items-center justify-between p-2" }, [
        s[0] || (s[0] = c("span", { class: "font-500" }, "Render Code", -1)),
        c("i", {
          class: "i-carbon-close cursor-pointer hover:op80",
          onClick: t
        })
      ]),
      c("div", ll, [
        x(a(dn), {
          code: l.code,
          lang: "javascript"
        }, null, 8, ["code"])
      ])
    ]));
  }
}), al = { class: "h-full w-full" }, il = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, rl = {
  key: 0,
  class: "h-full flex flex-col p2"
}, ul = { class: "flex py2" }, cl = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { height: "1.1em", width: "1.1em" },
  class: "op-80 hover:op-100",
  viewBox: "0 0 24 24"
}, dl = { class: "h-full flex flex-col p2" }, pl = { class: "flex py2" }, fl = {
  key: 0,
  class: "font-state-field flex items-center px-1 text-3.5"
}, vl = {
  "group-hover:text-white": "",
  class: "max-w-40 of-hidden text-ellipsis ws-nowrap [.active_&]:text-white"
}, ml = { class: "flex items-center gap-2 px-1" }, hl = { class: "h-full flex flex-col items-center justify-center gap-2" }, gl = { class: "block" }, Cl = {
  xmlns: "http://www.w3.org/2000/svg",
  style: { height: "2em", width: "2em", opacity: "0.5", color: "#00dc82" },
  class: "animate-fade",
  viewBox: "0 0 24 24"
}, _l = { class: "flex items-center justify-center" }, Ne = "components", yl = /* @__PURE__ */ F({
  __name: "index",
  emits: ["openInEditor", "onInspectComponentStart", "onInspectComponentEnd"],
  setup(n, { emit: e }) {
    const o = e, t = T(), l = T(!1), { width: s } = io(t), p = N(() => l.value ? s.value < 700 : !1), i = T(""), u = T(""), [m, f] = to(!0), r = T(!1), g = T(!1), V = T(""), w = T(!1), C = nl();
    function S(I, $ = [], O = []) {
      var K;
      return $.push(I.id), ((K = I.children) == null ? void 0 : K.length) === 0 && O.push([...$]), Array.isArray(I.children) && I.children.forEach((te) => {
        S(te, $, O);
      }), $.pop(), O;
    }
    function z(I) {
      const $ = [], O = (K) => {
        K == null || K.forEach((te) => {
          var mt;
          $.push(te), (mt = te.children) != null && mt.length && O(te.children);
        });
      };
      return O(I), $;
    }
    function A(I, $) {
      const O = [];
      return I == null || I.forEach((K) => {
        O.push(...K.slice(0, $ + 1));
      }), [...new Set(O)];
    }
    function k(I, $) {
      const O = [];
      return I.forEach((K) => {
        const te = K.indexOf($);
        te !== -1 && O.push(...K.slice(0, te + 1));
      }), [...new Set(O)];
    }
    const _ = T([]), E = N(() => {
      var I, $;
      return (I = _.value) != null && I.length ? S(($ = _.value) == null ? void 0 : $[0]) : [];
    }), H = N(() => z(_.value)), q = N(() => H.value.map((I) => I.id)), X = T({}), j = T(""), ue = N(() => {
      const I = [], $ = (O) => {
        O.forEach((K) => {
          var te;
          K.id === j.value && I.push(K), (te = K.children) != null && te.length && $(K.children);
        });
      };
      return $(_.value), I[0];
    }), pe = N(() => {
      var I;
      return ((I = ue.value) == null ? void 0 : I.file) ?? "";
    }), fe = N(() => nt({
      state: X.value,
      filterKey: u.value,
      processGroup(I) {
        return kn(Object.values(In(Mt(I), "stateType")));
      }
    })), { expanded: M } = ge(), { expanded: b } = ge("component-state");
    Zo();
    async function v(I = "") {
      return D.value.getInspectorTree({ inspectorId: Ne, filter: I }).then(($) => {
        var K, te;
        const O = ee($);
        _.value = O, j.value = (te = (K = _.value) == null ? void 0 : K[0]) == null ? void 0 : te.id, M.value = A(E.value, 1), r.value = !0;
      });
    }
    function y(I) {
      if (!I || !(I != null && I.state))
        return {};
      const $ = {};
      return I.state.forEach((O) => {
        $[O.type] || ($[O.type] = []), $[O.type].push(O);
      }), $;
    }
    function R(I) {
      D.value.getInspectorState({ inspectorId: Ne, nodeId: I }).then(($) => {
        const O = ee($);
        O && (X.value = y(O), b.value = Array.from({ length: Object.keys(X.value).length }, (K, te) => `${te}`));
      });
    }
    Q(j, (I) => {
      R(I), w.value && Oe();
    });
    function P(I) {
      const $ = ee(I);
      $.inspectorId !== Ne || $.nodeId !== j.value || (X.value = y({ state: $.state.state }));
    }
    D.functions.on(J.INSPECTOR_STATE_UPDATED, P), v();
    function Z(I) {
      const $ = I.trim().toLowerCase();
      f(), v($).then(() => {
        f();
      });
    }
    no(i, (I) => {
      Z(I);
    }, { debounce: 300 });
    function ae(I) {
      var O, K;
      const $ = ee(I);
      $.inspectorId === Ne && (i.value ? Z(i.value) : _.value = $.rootNodes, q.value.includes(j.value) || (j.value = (K = (O = _.value) == null ? void 0 : O[0]) == null ? void 0 : K.id, M.value = A(E.value, 1)));
    }
    D.functions.on(J.INSPECTOR_TREE_UPDATED, ae), we(() => {
      D.functions.off(J.INSPECTOR_STATE_UPDATED, P), D.functions.off(J.INSPECTOR_TREE_UPDATED, ae);
    });
    function Ee() {
      g.value = !0, o("onInspectComponentStart"), D.value.inspectComponentInspector().then((I) => {
        const $ = JSON.parse(I);
        j.value = $.id, M.value.includes($.id) || M.value.push($.id), M.value = [.../* @__PURE__ */ new Set([...M.value, ...k(E.value, $.id)])], Qt();
      }).finally(() => {
        g.value = !1, o("onInspectComponentEnd");
      });
    }
    function Ve() {
      g.value = !1, D.value.cancelInspectComponentInspector();
    }
    me("keydown", (I) => {
      I.key === "s" && (I.ctrlKey || I.metaKey) && !g.value ? Ee() : I.key === "Escape" && g.value && Ve();
    });
    function Le() {
      D.value.scrollToComponent(j.value);
    }
    function Ge() {
      D.value.inspectDOM(j.value).then(() => {
        chrome.devtools.inspectedWindow.eval("inspect(window.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__)");
      });
    }
    function Oe() {
      D.value.getComponentRenderCode(j.value).then((I) => {
        V.value = I, w.value = !0;
      });
    }
    function Ue() {
      o("openInEditor", pe.value);
    }
    const ft = T();
    function Qt() {
      setTimeout(() => {
        var $;
        const I = ($ = ft.value) == null ? void 0 : $.querySelector(".active");
        I == null || I.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
    function en() {
      V.value = "", w.value = !1;
    }
    const We = Pt(), vt = N(() => We.appRecords.value.map((I) => ({
      label: I.name + (I.version ? ` (${I.version})` : ""),
      value: I.id
    }))), tn = N(() => vt.value.map((I) => ({
      label: I.label,
      id: I.value
    }))), qe = T(We.activeAppRecordId.value);
    tt(() => {
      qe.value = We.activeAppRecordId.value;
    });
    function nn(I) {
      D.value.toggleApp(I).then(() => {
        j.value = "", v();
      });
    }
    return (I, $) => (d(), h("div", al, [
      x(a(De), {
        ref_key: "splitpanesRef",
        ref: t,
        class: "flex-1 overflow-auto",
        horizontal: p.value,
        onReady: $[4] || ($[4] = (O) => l.value = !0)
      }, {
        default: L(() => [
          vt.value.length > 1 ? (d(), B(a(ce), {
            key: 0,
            border: "base h-full",
            size: "20"
          }, {
            default: L(() => [
              c("div", il, [
                x(Rn, {
                  modelValue: qe.value,
                  "onUpdate:modelValue": $[0] || ($[0] = (O) => qe.value = O),
                  data: tn.value,
                  class: "w-full",
                  onSelect: nn
                }, null, 8, ["modelValue", "data"])
              ])
            ]),
            _: 1
          })) : U("", !0),
          x(a(ce), {
            border: "base",
            "h-full": ""
          }, {
            default: L(() => [
              r.value ? (d(), h("div", rl, [
                c("div", ul, [
                  x(a(_e), {
                    modelValue: i.value,
                    "onUpdate:modelValue": $[1] || ($[1] = (O) => i.value = O),
                    "loading-debounce-time": 250,
                    loading: !a(m),
                    placeholder: "Find components...",
                    class: "flex-1 text-3.5"
                  }, null, 8, ["modelValue", "loading"]),
                  a(xn) ? U("", !0) : G((d(), h("button", {
                    key: 0,
                    "px-1": "",
                    class: "hover:color-#00dc82",
                    onClick: Ee
                  }, [
                    (d(), h("svg", cl, $[6] || ($[6] = [
                      c("path", {
                        fill: "currentColor",
                        d: "M10.611 10.611a1 1 0 0 1 1.11-.208l8.839 3.889a1 1 0 0 1-.14 1.88l-3.338.91l-.91 3.338a1 1 0 0 1-1.88.14l-3.89-8.84a1 1 0 0 1 .209-1.109M17 3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-3.73 10.269l1.715 3.9l.318-1.164a1 1 0 0 1 .701-.702l1.165-.318l-3.9-1.716Z"
                      }, null, -1)
                    ])))
                  ])), [
                    [
                      a(W),
                      "Select component in the page",
                      void 0,
                      { bottom: !0 }
                    ]
                  ])
                ]),
                c("div", {
                  ref_key: "componentTreeContainer",
                  ref: ft,
                  class: "no-scrollbar flex-1 select-none overflow-scroll"
                }, [
                  x(He, {
                    modelValue: j.value,
                    "onUpdate:modelValue": $[2] || ($[2] = (O) => j.value = O),
                    data: _.value,
                    "with-tag": !0,
                    onHover: a(C).highlight,
                    onLeave: a(C).unhighlight
                  }, null, 8, ["modelValue", "data", "onHover", "onLeave"])
                ], 512)
              ])) : U("", !0)
            ]),
            _: 1
          }),
          x(a(ce), {
            relative: "",
            "h-full": ""
          }, {
            default: L(() => {
              var O;
              return [
                c("div", dl, [
                  c("div", pl, [
                    (O = ue.value) != null && O.name ? (d(), h("span", fl, [
                      $[7] || ($[7] = c("span", { class: "text-gray-400 dark:text-gray-600" }, "<", -1)),
                      c("span", vl, se(ue.value.name), 1),
                      $[8] || ($[8] = c("span", { class: "text-gray-400 dark:text-gray-600" }, ">", -1))
                    ])) : U("", !0),
                    x(a(_e), {
                      modelValue: u.value,
                      "onUpdate:modelValue": $[3] || ($[3] = (K) => u.value = K),
                      "loading-debounce-time": 250,
                      placeholder: "Filter State...",
                      class: "flex-1 text-3.5"
                    }, null, 8, ["modelValue"]),
                    c("div", ml, [
                      G(c("i", {
                        class: "i-material-symbols-light:eye-tracking-outline h-4 w-4 cursor-pointer hover:op-70",
                        onClick: Le
                      }, null, 512), [
                        [
                          a(W),
                          "Scroll to component",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]),
                      G(c("i", {
                        class: "i-material-symbols-light:code h-5 w-5 cursor-pointer hover:op-70",
                        onClick: Oe
                      }, null, 512), [
                        [
                          a(W),
                          "Show render code",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]),
                      a(wt) ? G((d(), h("i", {
                        key: 0,
                        class: "i-material-symbols-light:menu-open h-5 w-5 cursor-pointer hover:op-70",
                        onClick: Ge
                      }, null, 512)), [
                        [
                          a(W),
                          "Inspect DOM",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]) : U("", !0),
                      pe.value ? G((d(), h("i", {
                        key: 1,
                        class: "i-carbon-launch h-4 w-4 cursor-pointer hover:op-70",
                        onClick: Ue
                      }, null, 512)), [
                        [
                          a(W),
                          "Open in Editor",
                          void 0,
                          { bottom: !0 }
                        ]
                      ]) : U("", !0)
                    ])
                  ]),
                  x(Me, {
                    class: "no-scrollbar flex-1 overflow-scroll",
                    data: fe.value,
                    "node-id": j.value,
                    "inspector-id": Ne,
                    "expanded-state-id": "component-state"
                  }, null, 8, ["data", "node-id"])
                ]),
                w.value && V.value ? (d(), B(sl, {
                  key: 0,
                  code: V.value,
                  onClose: en
                }, null, 8, ["code"])) : U("", !0)
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["horizontal"]),
      a(wt) ? (d(), B(a(pn), {
        key: 0,
        modelValue: g.value,
        "onUpdate:modelValue": $[5] || ($[5] = (O) => g.value = O),
        title: "",
        height: "12rem",
        closable: !1
      }, {
        footer: L(() => [
          c("div", _l, [
            x(a(de), { onClick: Ve }, {
              default: L(() => $[11] || ($[11] = [
                Y(" Cancel ")
              ])),
              _: 1
            })
          ])
        ]),
        default: L(() => [
          c("div", hl, [
            c("span", gl, [
              (d(), h("svg", Cl, $[9] || ($[9] = [
                c("g", {
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2"
                }, [
                  c("circle", {
                    cx: "12",
                    cy: "12",
                    r: ".5",
                    fill: "currentColor"
                  }),
                  c("path", { d: "M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2" })
                ], -1)
              ])))
            ]),
            $[10] || ($[10] = c("p", null, " Click on a component on the page to select it ", -1))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])) : U("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ xe(yl, [["__scopeId", "data-v-7c513123"]]), xl = {}, bl = { class: "h-screen w-screen $ui-fcc flex-col" };
function wl(n, e) {
  return d(), h("div", bl, [
    e[0] || (e[0] = c("div", { class: "outer" }, [
      c("div", { class: "inner" }, [
        c("i", {
          class: "i-logos-vue inline-block h8! w8!",
          alt: "Vue logo"
        })
      ])
    ], -1)),
    Qe(n.$slots, "default", {}, void 0, !0)
  ]);
}
const kl = /* @__PURE__ */ xe(xl, [["render", wl], ["__scopeId", "data-v-b8018f07"]]), Jt = Symbol.for("VueDevToolsCustomInspectorStateSymbol");
function ye() {
  return he(Jt);
}
function pt() {
  const n = T({
    homepage: "",
    id: "",
    label: "",
    logo: "",
    timelineLayerIds: []
  });
  return Ce(Jt, n), n;
}
const Il = {}, $l = {
  width: "175",
  height: "34",
  viewBox: "0 0 175 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Sl(n, e) {
  return d(), h("svg", $l, e[0] || (e[0] = [
    c("path", {
      fill: "currentColor",
      d: "M0.570999 33.3121V1.80715H10.8288C13.6975 1.80715 16.3198 2.39225 18.6962 3.56242C21.0721 4.73263 22.9701 6.5029 24.3901 8.87327C25.81 11.2136 26.52 14.1091 26.52 17.5596C26.52 20.9801 25.81 23.8756 24.3901 26.2458C22.9701 28.6162 21.0721 30.3868 18.6962 31.5568C16.3198 32.7269 13.6975 33.3121 10.8288 33.3121H0.570999ZM10.1332 27.461C12.9439 27.461 15.2767 26.6812 17.1314 25.1208C18.9858 23.5306 19.913 21.0102 19.913 17.5596C19.913 14.1091 18.9858 11.5887 17.1314 9.99846C15.2767 8.40819 12.9439 7.61306 10.1332 7.61306H7.09085V27.461H10.1332ZM50.3628 25.6159C49.928 28.0463 48.7544 29.9966 46.8421 31.4669C44.9297 32.9368 42.6257 33.672 39.931 33.672C37.5551 33.672 35.5119 33.117 33.8024 32.007C32.1216 30.8668 30.8468 29.3965 29.9772 27.5961C29.1081 25.7961 28.6733 23.9056 28.6733 21.9253C28.6733 19.915 29.0645 18.0247 29.8468 16.2544C30.6584 14.4841 31.8756 13.0439 33.498 11.9337C35.1499 10.8236 37.1491 10.2685 39.4962 10.2685C41.9306 10.2685 43.9589 10.8086 45.5817 11.8888C47.2045 12.9689 48.3924 14.3491 49.1456 16.0294C49.928 17.7097 50.3192 19.4799 50.3192 21.3402C50.3192 22.0303 50.2904 22.7054 50.2324 23.3656H34.4979C34.7295 24.9858 35.3091 26.2612 36.2363 27.191C37.1927 28.0914 38.4243 28.5412 39.931 28.5412C41.1482 28.5412 42.1478 28.3014 42.9301 27.8214C43.7125 27.3111 44.2197 26.5759 44.4513 25.6159H50.3628ZM39.4962 14.8592C38.1055 14.8592 37.0043 15.2343 36.1931 15.9844C35.3815 16.7045 34.8455 17.8447 34.5847 19.4049H44.2777C44.1905 18.0847 43.7269 17.0045 42.8865 16.1644C42.0466 15.2943 40.9162 14.8592 39.4962 14.8592ZM64.1603 33.3121H58.5969L50.599 10.6285H56.7713L61.3788 25.3008L65.9427 10.6285H72.1582L64.1603 33.3121ZM88.2757 33.3121H81.7559V7.61306H72.7585V1.80715H97.2731V7.61306H88.2757V33.3121ZM106.325 33.672C104.123 33.672 102.138 33.1771 100.37 32.1868C98.6029 31.1667 97.2266 29.7717 96.2414 28.0011C95.2562 26.2011 94.7634 24.1907 94.7634 21.9703C94.7634 19.75 95.2562 17.7547 96.2414 15.9844C97.2266 14.1841 98.6029 12.7889 100.37 11.7987C102.138 10.7786 104.123 10.2685 106.325 10.2685C108.528 10.2685 110.513 10.7786 112.28 11.7987C114.048 12.7889 115.424 14.1841 116.409 15.9844C117.395 17.7547 117.887 19.75 117.887 21.9703C117.887 24.1907 117.395 26.2011 116.409 28.0011C115.424 29.7717 114.048 31.1667 112.28 32.1868C110.513 33.1771 108.528 33.672 106.325 33.672ZM106.325 28.2712C107.948 28.2712 109.266 27.6864 110.281 26.5159C111.295 25.3458 111.802 23.8306 111.802 21.9703C111.802 20.08 111.295 18.5498 110.281 17.3796C109.266 16.2094 107.948 15.6243 106.325 15.6243C104.702 15.6243 103.384 16.2094 102.37 17.3796C101.356 18.5498 100.848 20.08 100.848 21.9703C100.848 23.8306 101.356 25.3458 102.37 26.5159C103.384 27.6864 104.702 28.2712 106.325 28.2712ZM131.624 33.672C129.422 33.672 127.436 33.1771 125.669 32.1868C123.901 31.1667 122.525 29.7717 121.54 28.0011C120.555 26.2011 120.062 24.1907 120.062 21.9703C120.062 19.75 120.555 17.7547 121.54 15.9844C122.525 14.1841 123.901 12.7889 125.669 11.7987C127.436 10.7786 129.422 10.2685 131.624 10.2685C133.826 10.2685 135.811 10.7786 137.579 11.7987C139.346 12.7889 140.722 14.1841 141.708 15.9844C142.693 17.7547 143.186 19.75 143.186 21.9703C143.186 24.1907 142.693 26.2011 141.708 28.0011C140.722 29.7717 139.346 31.1667 137.579 32.1868C135.811 33.1771 133.826 33.672 131.624 33.672ZM131.624 28.2712C133.246 28.2712 134.565 27.6864 135.579 26.5159C136.593 25.3458 137.101 23.8306 137.101 21.9703C137.101 20.08 136.593 18.5498 135.579 17.3796C134.565 16.2094 133.246 15.6243 131.624 15.6243C130.001 15.6243 128.682 16.2094 127.668 17.3796C126.654 18.5498 126.147 20.08 126.147 21.9703C126.147 23.8306 126.654 25.3458 127.668 26.5159C128.682 27.6864 130.001 28.2712 131.624 28.2712ZM152.88 33.3121H146.838V0.771999H152.88V33.3121ZM165.652 33.672C162.957 33.672 160.769 32.9522 159.088 31.5117C157.437 30.0418 156.553 28.0914 156.437 25.661H161.653C161.768 26.6812 162.174 27.4913 162.87 28.0914C163.594 28.6613 164.522 28.9463 165.652 28.9463C166.579 28.9463 167.332 28.7363 167.912 28.3163C168.52 27.8963 168.825 27.3712 168.825 26.7412C168.825 25.9008 168.477 25.3159 167.782 24.9858C167.086 24.6557 165.985 24.3557 164.478 24.0856C162.913 23.7856 161.638 23.4556 160.653 23.0955C159.668 22.7354 158.813 22.0903 158.089 21.1602C157.393 20.2 157.045 18.8498 157.045 17.1096C157.045 15.7893 157.379 14.6192 158.045 13.599C158.741 12.5488 159.682 11.7387 160.871 11.1686C162.058 10.5685 163.391 10.2685 164.869 10.2685C167.506 10.2685 169.636 10.9436 171.259 12.2938C172.91 13.644 173.794 15.4293 173.91 17.6496H168.651C168.535 16.7195 168.115 15.9994 167.39 15.4893C166.695 14.9492 165.912 14.6792 165.043 14.6792C164.174 14.6792 163.478 14.8742 162.957 15.2643C162.435 15.6543 162.174 16.1944 162.174 16.8845C162.174 17.7246 162.508 18.2948 163.174 18.5948C163.87 18.8648 164.956 19.1049 166.434 19.3149C168.028 19.5549 169.331 19.855 170.346 20.215C171.389 20.5451 172.287 21.2052 173.041 22.1953C173.794 23.1855 174.171 24.6257 174.171 26.5159C174.171 28.6762 173.389 30.4166 171.824 31.737C170.288 33.0271 168.23 33.672 165.652 33.672Z"
    }, null, -1)
  ]));
}
const Tl = /* @__PURE__ */ xe(Il, [["render", Sl]]), El = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, Vl = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, Nl = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, Rl = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, Al = { class: "mr-1" }, Dl = {
  key: 0,
  class: "inline-block w20"
}, Pl = ["src", "alt"], Ml = {
  key: 1,
  class: "mr2 inline-block min-w-20 text-center text-10 font-600"
}, Hl = {
  mb6: "",
  "mt--1": "",
  "text-center": "",
  "text-sm": "",
  flex: "~ gap-1"
}, Ll = { op40: "" }, Ol = { flex: "~ gap2 wrap" }, Ul = {
  flex: "~ gap-6 wrap",
  "mt-5": "",
  "items-center": "",
  "justify-center": ""
}, jl = ["href"], zl = /* @__PURE__ */ F({
  __name: "About",
  setup(n) {
    const e = Pe(), o = ye(), t = T(!1), l = T(!1);
    function s() {
      t.value = !0;
    }
    function p() {
      t.value = !0, l.value = !0;
    }
    return (i, u) => {
      var m;
      return d(), h("div", El, [
        c("div", Vl, [
          u[5] || (u[5] = c("div", { "flex-auto": "" }, null, -1)),
          c("div", Nl, [
            c("div", Rl, [
              c("span", Al, [
                t.value ? U("", !0) : (d(), h("span", Dl)),
                G(c("img", {
                  src: a(o).logo,
                  alt: `${a(o).label} Logo`,
                  class: "inline-block h16",
                  onError: p,
                  onLoad: s
                }, null, 40, Pl), [
                  [rn, t.value && !l.value]
                ]),
                l.value ? (d(), h("span", Ml, se(a(o).label), 1)) : U("", !0)
              ]),
              c("span", null, [
                x(Tl, { "h-18": "" })
              ])
            ]),
            c("div", Hl, [
              c("span", Ll, se(a(o).label) + " DevTools ", 1)
            ])
          ]),
          u[6] || (u[6] = c("div", { "flex-auto": "" }, null, -1)),
          c("div", Ol, [
            c("div", {
              flex: "~ col auto",
              "min-w-40": "",
              p4: "",
              "theme-card-lime": "",
              onClick: u[0] || (u[0] = (f) => a(e).push("/state"))
            }, u[2] || (u[2] = [
              c("div", {
                "i-carbon-tree-view-alt": "",
                "text-3xl": ""
              }, null, -1),
              c("code", null, "State", -1)
            ])),
            (m = a(o).timelineLayerIds) != null && m.length ? (d(), h("div", {
              key: 0,
              flex: "~ col auto",
              "min-w-40": "",
              p4: "",
              "theme-card-lime": "",
              onClick: u[1] || (u[1] = (f) => a(e).push("/timeline"))
            }, u[3] || (u[3] = [
              c("div", {
                "i-mdi:timeline-clock-outline": "",
                "text-3xl": ""
              }, null, -1),
              c("div", null, "Timeline", -1)
            ]))) : U("", !0)
          ]),
          c("div", Ul, [
            c("a", {
              href: a(o).homepage,
              target: "_blank",
              flex: "~ gap1",
              "items-center": "",
              op50: "",
              hover: "op100 text-yellow",
              transition: ""
            }, u[4] || (u[4] = [
              c("div", { "i-carbon-document": "" }, null, -1),
              Y(" View Documentation ")
            ]), 8, jl)
          ]),
          u[7] || (u[7] = c("div", { "flex-auto": "" }, null, -1))
        ])
      ]);
    };
  }
}), Bl = { class: "flex-1 overflow-y-auto p2" }, Fl = { class: "max-w-[190px] flex-1 select-none py-1.5 text-sm" }, Zl = { class: "w-4/5" }, Kl = {
  key: 0,
  class: "flex justify-start"
}, Gl = { key: 1 }, Yt = /* @__PURE__ */ F({
  __name: "Settings",
  props: {
    pluginId: {},
    options: {},
    values: {}
  },
  emits: ["update"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = N(() => o.options), s = N(() => o.values);
    function p(i, u) {
      D.value.updatePluginSettings(o.pluginId, i, u), D.value.getPluginSettings(o.pluginId).then((m) => {
        t("update", m);
      });
    }
    return (i, u) => (d(), h("div", Bl, [
      c("ul", null, [
        (d(!0), h(oe, null, re(l.value, (m, f) => (d(), h("li", {
          key: f,
          class: "flex items-center py-2"
        }, [
          c("div", Fl, se(m.label), 1),
          c("div", Zl, [
            m.type === "boolean" ? (d(), h("div", Kl, [
              x(a(fn), {
                "model-value": s.value[f],
                class: "row-reverse flex hover:bg-active py1 pl2 pr1",
                "onUpdate:modelValue": (r) => p(f, r)
              }, null, 8, ["model-value", "onUpdate:modelValue"])
            ])) : m.type === "choice" ? (d(), h("div", Gl, [
              x(a(vn), {
                "model-value": s.value[f],
                options: m.options,
                "onUpdate:modelValue": (r) => p(f, r)
              }, null, 8, ["model-value", "options", "onUpdate:modelValue"])
            ])) : m.type === "text" ? (d(), B(a(_e), {
              key: 2,
              "model-value": s.value[f],
              "onUpdate:modelValue": (r) => p(f, r)
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : U("", !0)
          ])
        ]))), 128))
      ])
    ]));
  }
}), Wl = { class: "h-full flex flex-col" }, ql = /* @__PURE__ */ F({
  __name: "Settings",
  setup(n) {
    const e = he("pluginSettings"), o = ye(), t = N(() => e.value.options), l = N(() => e.value.values);
    function s(p) {
      e.value = p;
    }
    return (p, i) => (d(), h("div", Wl, [
      x(Se, {
        "doc-link": a(o).homepage
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }, 8, ["doc-link"]),
      x(Yt, {
        "plugin-id": a(o).pluginId,
        options: t.value,
        values: l.value,
        onUpdate: s
      }, null, 8, ["plugin-id", "options", "values"])
    ]));
  }
}), Jl = { class: "h-full flex flex-col" }, Yl = { class: "h-full flex flex-col p2" }, Xl = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, Ql = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, e1 = ["onClick"], t1 = {
  key: 0,
  class: "no-scrollbar flex-1 select-none overflow-scroll"
}, n1 = { class: "h-full flex flex-col p2" }, o1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, l1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, s1 = ["onClick"], a1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const { expanded: e } = ge(), { expanded: o } = ge("custom-inspector-state"), t = ye(), l = N(() => t.value.id), s = T([]), p = T([]), i = T([]), u = N(() => {
      var v, y;
      return (v = i.value) != null && v.length ? A((y = i.value) == null ? void 0 : y[0]) : [];
    }), m = N(() => _(i.value)), f = N(() => m.value.map((v) => v.id)), r = T(""), g = T({}), V = N(() => !Object.keys(g.value).length), w = ye(), C = T(""), S = T("");
    Q(C, (v, y) => {
      !v.trim().length && !y.trim().length || fe(v);
    });
    const z = N(() => nt({
      state: g.value,
      filterKey: S.value
    }));
    function A(v, y = [], R = []) {
      var P;
      return y.push(v.id), ((P = v.children) == null ? void 0 : P.length) === 0 && R.push([...y]), Array.isArray(v.children) && v.children.forEach((Z) => {
        A(Z, y, R);
      }), y.pop(), R;
    }
    function k(v, y) {
      const R = [];
      return v == null || v.forEach((P) => {
        R.push(...P.slice(0, y + 1));
      }), [...new Set(R)];
    }
    function _(v) {
      const y = [], R = (P) => {
        P == null || P.forEach((Z) => {
          var ae;
          y.push(Z), (ae = Z.children) != null && ae.length && R(Z.children);
        });
      };
      return R(v), y;
    }
    function E() {
      D.value.getInspectorNodeActions(l.value).then((v) => {
        s.value = v;
      });
    }
    function H() {
      D.value.getInspectorActions(l.value).then((v) => {
        p.value = v;
      });
    }
    E(), H();
    function q(v) {
      D.value.callInspectorNodeAction(l.value, v, r.value);
    }
    function X(v) {
      D.value.callInspectorAction(l.value, v);
    }
    function j(v) {
      var y;
      for (const R in v)
        (y = v[R]) != null && y.length || delete v[R];
      return v;
    }
    function ue(v) {
      D.value.getInspectorState({ inspectorId: l.value, nodeId: v }).then((y) => {
        const R = ee(y);
        R && (g.value = j(R), o.value = Array.from({ length: Object.keys(g.value).length }, (P, Z) => `${Z}`));
      });
    }
    function pe() {
      g.value = {};
    }
    Q(r, () => {
      pe(), ue(r.value);
    });
    function fe(v = "") {
      D.value.getInspectorTree({ inspectorId: l.value, filter: v }).then((y) => {
        const R = ee(y);
        i.value = R, !r.value && R.length && (r.value = R[0].id, e.value = k(u.value, 1), ue(R[0].id));
      });
    }
    Kt(l).toBeTruthy().then(() => fe());
    function M(v) {
      var R, P;
      const y = ee(v);
      !y.rootNodes.length || y.inspectorId !== l.value || (i.value = y.rootNodes, f.value.includes(r.value) || (r.value = (P = (R = i.value) == null ? void 0 : R[0]) == null ? void 0 : P.id, e.value = k(u.value, 1)));
    }
    function b(v) {
      const y = ee(v);
      if (y.inspectorId !== l.value || !y.state || y.nodeId !== r.value)
        return;
      const { inspectorId: R, ...P } = y.state;
      g.value = j(P);
    }
    return Ae(() => {
      D.functions.on(J.INSPECTOR_TREE_UPDATED, M), D.functions.on(J.INSPECTOR_STATE_UPDATED, b);
    }), we(() => {
      D.functions.off(J.INSPECTOR_TREE_UPDATED, M), D.functions.off(J.INSPECTOR_STATE_UPDATED, b);
    }), (v, y) => (d(), h("div", Jl, [
      x(Se, {
        "doc-link": a(t).homepage
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }, 8, ["doc-link"]),
      !i.value.length && !C.value.trim().length ? (d(), B(Ie, { key: 0 }, {
        default: L(() => y[3] || (y[3] = [
          Y(" No Data ")
        ])),
        _: 1
      })) : (d(), B(a(De), {
        key: 1,
        class: "flex-1 overflow-auto"
      }, {
        default: L(() => [
          x(a(ce), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: L(() => {
              var R;
              return [
                c("div", Yl, [
                  c("div", Xl, [
                    x(a(_e), {
                      modelValue: C.value,
                      "onUpdate:modelValue": y[0] || (y[0] = (P) => C.value = P),
                      placeholder: a(w).treeFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (R = p.value) != null && R.length ? (d(), h("div", Ql, [
                      (d(!0), h(oe, null, re(p.value, (P, Z) => G((d(), h("div", {
                        key: Z,
                        class: "flex items-center gap1",
                        onClick: (ae) => X(Z)
                      }, [
                        x(a(Be), {
                          name: `baseline-${P.icon.replace(/\_/g, "-")}`,
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 8, ["name"])
                      ], 8, e1)), [
                        [
                          a(W),
                          { content: P.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : U("", !0)
                  ]),
                  i.value.length ? (d(), h("div", t1, [
                    x(He, {
                      modelValue: r.value,
                      "onUpdate:modelValue": y[1] || (y[1] = (P) => r.value = P),
                      data: i.value
                    }, null, 8, ["modelValue", "data"])
                  ])) : (d(), B(Ie, { key: 1 }, {
                    default: L(() => y[4] || (y[4] = [
                      Y(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          }),
          x(a(ce), { size: "60" }, {
            default: L(() => {
              var R;
              return [
                c("div", n1, [
                  c("div", o1, [
                    x(a(_e), {
                      modelValue: S.value,
                      "onUpdate:modelValue": y[2] || (y[2] = (P) => S.value = P),
                      placeholder: a(w).stateFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (R = s.value) != null && R.length ? (d(), h("div", l1, [
                      (d(!0), h(oe, null, re(s.value, (P, Z) => G((d(), h("div", {
                        key: Z,
                        class: "flex items-center gap1",
                        onClick: (ae) => q(Z)
                      }, [
                        x(a(Be), {
                          name: `baseline-${P.icon.replace(/\_/g, "-")}`,
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 8, ["name"])
                      ], 8, s1)), [
                        [
                          a(W),
                          { content: P.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : U("", !0)
                  ]),
                  r.value && !V.value ? (d(), B(Me, {
                    key: 0,
                    data: z.value,
                    "node-id": r.value,
                    "inspector-id": l.value,
                    "expanded-state-id": "custom-inspector-state",
                    class: "no-scrollbar flex-1 overflow-scroll"
                  }, null, 8, ["data", "node-id", "inspector-id"])) : (d(), B(Ie, { key: 1 }, {
                    default: L(() => y[5] || (y[5] = [
                      Y(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }))
    ]));
  }
}), i1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const e = ye();
    return (o, t) => (d(), B(dt, {
      "layer-ids": a(e).timelineLayerIds,
      "doc-link": a(e).homepage,
      "plugin-id": a(e).pluginId
    }, null, 8, ["layer-ids", "doc-link", "plugin-id"]));
  }
}), r1 = {
  "h-full": "",
  "w-full": ""
}, u1 = { key: 0 }, ds = /* @__PURE__ */ F({
  __name: "index",
  props: {
    id: {},
    pluginId: {}
  },
  emits: ["loadError"],
  setup(n, { emit: e }) {
    const o = n, t = e, l = pt(), s = T(!1), p = T(null);
    Ce("pluginSettings", p);
    const i = N(() => {
      var r;
      return [
        {
          path: "/state",
          name: "State",
          component: a1,
          icon: "i-carbon-tree-view-alt"
        },
        ((r = l.value.timelineLayerIds) == null ? void 0 : r.length) && {
          path: "/timeline",
          name: "Timeline",
          component: i1,
          icon: "i-mdi:timeline-clock-outline"
        },
        {
          path: "/about",
          name: "About",
          component: zl
        },
        p.value && {
          path: "/settings",
          name: "Settings",
          component: ql,
          icon: "i-mdi:cog-outline"
        }
      ].filter(Boolean);
    }), { VirtualRouterView: u, restoreRouter: m } = lt(i, {
      defaultRoutePath: "/state"
    });
    function f() {
      s.value = !0, Ae(() => {
        D.value.getInspectorInfo(o.id).then((r) => {
          if (!r) {
            t("loadError");
            return;
          }
          const g = {
            homepage: r == null ? void 0 : r.homepage,
            id: r == null ? void 0 : r.id,
            label: r == null ? void 0 : r.label,
            logo: r == null ? void 0 : r.logo,
            timelineLayerIds: r == null ? void 0 : r.timelineLayers.map((V) => V.id),
            pluginId: o.pluginId,
            treeFilterPlaceholder: r.treeFilterPlaceholder,
            stateFilterPlaceholder: r.stateFilterPlaceholder
          };
          l.value = g, m(), s.value = !1;
        }), D.value.getPluginSettings(o.pluginId).then((r) => {
          r.options ? p.value = r : p.value = null;
        });
      });
    }
    return Q(() => o.id, () => {
      f();
    }, {
      immediate: !0
    }), we(() => {
      D.value.unhighlight();
    }), (r, g) => (d(), h("div", r1, [
      s.value ? (d(), h("div", u1, [
        x(kl)
      ])) : (d(), B(a(u), { key: 1 }))
    ]));
  }
}), c1 = {}, d1 = {
  viewBox: "0 0 566 154",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function p1(n, e) {
  return d(), h("svg", d1, e[0] || (e[0] = [
    un('<svg height="130" viewBox="0 0 319 477" width="180" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a"><stop offset="0" stop-color="#52ce63"></stop><stop offset="1" stop-color="#51a256"></stop></linearGradient><linearGradient id="b" x1="55.342075%" x2="42.816933%" xlink:href="#a" y1="0%" y2="42.862855%"></linearGradient><linearGradient id="c" x1="55.348642%" x2="42.808103%" xlink:href="#a" y1="0%" y2="42.862855%"></linearGradient><linearGradient id="d" x1="50%" x2="50%" y1="0%" y2="58.811243%"><stop offset="0" stop-color="#8ae99c"></stop><stop offset="1" stop-color="#52ce63"></stop></linearGradient><linearGradient id="e" x1="51.37763%" x2="44.584719%" y1="17.472551%" y2="100%"><stop offset="0" stop-color="#ffe56c"></stop><stop offset="1" stop-color="#ffc63a"></stop></linearGradient><g fill="none" fill-rule="evenodd" transform="translate(-34 -24)"><g transform="matrix(.99254615 .12186934 -.12186934 .99254615 33.922073 .976691)"><path d="m103.950535 258.274149c44.361599-4.360825 60.014503-40.391282 65.353094-94.699444s-30.93219-103.451001-46.020347-101.9678079c-15.088156 1.4831932-63.0385313 58.9051239-68.3771222 113.2132869-5.3385908 54.308162 4.6827754 87.814791 49.0443752 83.453965z" fill="url(#b)" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -80.496332 125.892944)"></path><path d="m275.876752 258.273992c44.3616 4.360826 53.167133-29.265322 47.828542-83.573485-5.338591-54.308162-52.073133-111.6105744-67.16129-113.0937675-15.088156-1.4831931-52.57477 47.5401275-47.236179 101.8482895s22.207328 90.458137 66.568927 94.818963z" fill="url(#c)" transform="matrix(.70710678 .70710678 -.70710678 .70710678 191.403399 -141.861963)"></path><path d="m188.370027 216.876305c39.941834 0 50.95265-38.251987 50.95265-97.89874 0-59.6467532-37.367733-118.10125956-50.95265-118.10125956s-52.04735 58.45450636-52.04735 118.10125956c0 59.646753 12.105516 97.89874 52.04735 97.89874z" fill="url(#d)"></path></g><path d="m184.473473 501c83.118854 0 150.526527-24.145148 150.526527-133.645148s-67.407673-199.354852-150.526527-199.354852c-83.118855 0-150.473473 89.854852-150.473473 199.354852s67.354618 133.645148 150.473473 133.645148z" fill="url(#e)"></path><ellipse cx="260.5" cy="335" fill="#eaadcc" rx="21.5" ry="10"></ellipse><ellipse cx="102.5" cy="329" fill="#eaadcc" rx="21.5" ry="10" transform="matrix(.99254615 .12186934 -.12186934 .99254615 40.859033 -10.039292)"></ellipse><g transform="matrix(-.99939083 .0348995 .0348995 .99939083 269.284825 271.027667)"><path d="m73.1046985 58.2728794c6.7372416 4.9130333 14.3132632 6.6640587 22.7280649 5.2530761 8.4148016-1.4109825 14.5054466-5.2535769 18.2719346-11.527783" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" transform="matrix(.9998477 .01745241 -.01745241 .9998477 1.026464 -1.624794)"></path><path d="m154.501124 3c-5.937545 0-11.312782 2.40629805-15.203644 6.29680621-3.89094 3.89058529-6.29748 9.26545449-6.29748 15.20263179 0 5.9376888 2.406488 11.3127422 6.297291 15.2034272 3.890886 3.8907673 9.266197 6.2971348 15.203833 6.2971348 5.937109 0 11.311896-2.4063889 15.202387-6.2972348 3.890299-3.8906535 6.296489-9.2656636 6.296489-15.2033272 0-5.9371521-2.406242-11.3119781-6.296677-15.20253181-3.890469-3.89058674-9.265181-6.29690619-15.202199-6.29690619z" fill="#000"></path><path d="m154 21c0-3.865549 3.135362-7 6.999413-7 3.866399 0 7.000587 3.134451 7.000587 7s-3.134188 7-7.000587 7c-3.864051-.0011735-6.999413-3.134451-6.999413-7z" fill="#fff"></path><path d="m24.5 13c-5.9375292 0-11.312426 2.406268-15.20299427 6.2967181-3.89069464 3.8905765-6.29700573 9.2654765-6.29700573 15.2027199 0 5.9377549 2.40625962 11.3128391 6.29681766 15.2035153 3.89059104 3.8907092 9.26556184 6.2970467 15.20318234 6.2970467 5.9371249 0 11.3122514-2.406419 15.2030371-6.2973229 3.8905441-3.8906623 6.2969629-9.2656416 6.2969629-15.2032391 0-5.937086-2.4064703-11.3118811-6.297151-15.2024437-3.890763-3.8906448-9.2658154-6.2969943-15.202849-6.2969943z" fill="#000"></path><g fill="#fff"><path d="m136 24.499438c0 10.2185232 8.282911 18.500562 18.501124 18.500562 10.217089 0 18.498876-8.2820388 18.498876-18.500562 0-10.2173992-8.281787-18.499438-18.498876-18.499438-10.218213 0-18.501124 8.2820388-18.501124 18.499438zm-6 0c0-13.5311954 10.96929-24.499438 24.501124-24.499438 13.530838 0 24.498876 10.9683711 24.498876 24.499438 0 13.5319607-10.967808 24.500562-24.498876 24.500562-13.532064 0-24.501124-10.9684728-24.501124-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"></path><path d="m6 34.499438c0 10.2185232 8.2817873 18.500562 18.5 18.500562 10.2170889 0 18.5-8.2820388 18.5-18.500562 0-10.2173992-8.2829111-18.499438-18.5-18.499438-10.2182127 0-18.5 8.2820388-18.5 18.499438zm-6 0c0-13.531297 10.9682681-24.499438 24.5-24.499438 13.5309398 0 24.5 10.9684728 24.5 24.499438 0 13.5318591-10.96883 24.500562-24.5 24.500562-13.531962 0-24.5-10.9683711-24.5-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"></path><path d="m24 31c0-3.865549 3.134451-7 7-7s7 3.134451 7 7-3.134451 7-7 7-7-3.134451-7-7z"></path></g></g><g stroke-linecap="round" stroke-width="11"><g stroke="#ecb732"><path d="m70.5 377.5 74 77"></path><path d="m134.5 386.5-47 50"></path></g><g stroke="#ecb732" transform="matrix(-1 0 0 1 298 377)"><path d="m.5.5 74 77"></path><path d="m64.5 9.5-47 50"></path></g><g stroke="#ffc73b" transform="matrix(0 1 -1 0 215 207)"><path d="m.5.5 49 49"></path><path d="m.5 10.5 49 49" transform="matrix(-1 0 0 1 50 0)"></path></g></g></g></svg><path d="M152.571 118V46.1333H176.8C183.576 46.1333 189.77 47.468 195.383 50.1373C200.995 52.8067 205.478 56.8449 208.832 62.252C212.186 67.5907 213.863 74.1956 213.863 82.0667C213.863 89.8693 212.186 96.4742 208.832 101.881C205.478 107.288 200.995 111.327 195.383 113.996C189.77 116.665 183.576 118 176.8 118H152.571ZM175.157 104.653C181.796 104.653 187.306 102.874 191.687 99.3147C196.067 95.6871 198.257 89.9378 198.257 82.0667C198.257 74.1956 196.067 68.4462 191.687 64.8187C187.306 61.1911 181.796 59.3773 175.157 59.3773H167.971V104.653H175.157ZM270.18 100.444C269.153 105.988 266.381 110.437 261.864 113.791C257.347 117.144 251.905 118.821 245.54 118.821C239.928 118.821 235.102 117.555 231.064 115.023C227.094 112.422 224.083 109.068 222.029 104.961C219.976 100.855 218.949 96.5427 218.949 92.0253C218.949 87.4396 219.873 83.1276 221.721 79.0893C223.638 75.0511 226.513 71.7658 230.345 69.2333C234.247 66.7009 238.969 65.4347 244.513 65.4347C250.263 65.4347 255.054 66.6667 258.887 69.1307C262.72 71.5947 265.526 74.7431 267.305 78.576C269.153 82.4089 270.077 86.4471 270.077 90.6907C270.077 92.2649 270.009 93.8049 269.872 95.3107H232.707C233.254 99.0067 234.623 101.916 236.813 104.037C239.072 106.091 241.981 107.117 245.54 107.117C248.415 107.117 250.776 106.57 252.624 105.475C254.472 104.311 255.67 102.634 256.217 100.444H270.18ZM244.513 75.9067C241.228 75.9067 238.627 76.7622 236.711 78.4733C234.794 80.116 233.528 82.7169 232.912 86.276H255.807C255.601 83.2644 254.506 80.8004 252.521 78.884C250.537 76.8991 247.867 75.9067 244.513 75.9067ZM302.77 118H289.629L270.738 66.256H285.317L296.2 99.7253L306.98 66.256H321.661L302.77 118ZM359.731 118H344.331V59.3773H323.079V46.1333H380.983V59.3773H359.731V118ZM402.364 118.821C397.163 118.821 392.474 117.692 388.299 115.433C384.124 113.106 380.873 109.924 378.546 105.885C376.219 101.779 375.055 97.1929 375.055 92.128C375.055 87.0631 376.219 82.5116 378.546 78.4733C380.873 74.3667 384.124 71.184 388.299 68.9253C392.474 66.5982 397.163 65.4347 402.364 65.4347C407.566 65.4347 412.255 66.5982 416.43 68.9253C420.605 71.184 423.856 74.3667 426.183 78.4733C428.51 82.5116 429.674 87.0631 429.674 92.128C429.674 97.1929 428.51 101.779 426.183 105.885C423.856 109.924 420.605 113.106 416.43 115.433C412.255 117.692 407.566 118.821 402.364 118.821ZM402.364 106.501C406.197 106.501 409.311 105.167 411.707 102.497C414.103 99.828 415.3 96.3716 415.3 92.128C415.3 87.816 414.103 84.3253 411.707 81.656C409.311 78.9867 406.197 77.652 402.364 77.652C398.531 77.652 395.417 78.9867 393.022 81.656C390.626 84.3253 389.428 87.816 389.428 92.128C389.428 96.3716 390.626 99.828 393.022 102.497C395.417 105.167 398.531 106.501 402.364 106.501ZM462.12 118.821C456.918 118.821 452.229 117.692 448.054 115.433C443.879 113.106 440.628 109.924 438.301 105.885C435.974 101.779 434.81 97.1929 434.81 92.128C434.81 87.0631 435.974 82.5116 438.301 78.4733C440.628 74.3667 443.879 71.184 448.054 68.9253C452.229 66.5982 456.918 65.4347 462.12 65.4347C467.321 65.4347 472.01 66.5982 476.185 68.9253C480.36 71.184 483.611 74.3667 485.938 78.4733C488.265 82.5116 489.429 87.0631 489.429 92.128C489.429 97.1929 488.265 101.779 485.938 105.885C483.611 109.924 480.36 113.106 476.185 115.433C472.01 117.692 467.321 118.821 462.12 118.821ZM462.12 106.501C465.952 106.501 469.067 105.167 471.462 102.497C473.858 99.828 475.056 96.3716 475.056 92.128C475.056 87.816 473.858 84.3253 471.462 81.656C469.067 78.9867 465.952 77.652 462.12 77.652C458.287 77.652 455.172 78.9867 452.777 81.656C450.381 84.3253 449.184 87.816 449.184 92.128C449.184 96.3716 450.381 99.828 452.777 102.497C455.172 105.167 458.287 106.501 462.12 106.501ZM512.327 118H498.056V43.772H512.327V118ZM542.494 118.821C536.129 118.821 530.961 117.179 526.991 113.893C523.09 110.54 521.002 106.091 520.729 100.547H533.049C533.322 102.874 534.281 104.722 535.923 106.091C537.634 107.391 539.825 108.041 542.494 108.041C544.684 108.041 546.464 107.562 547.833 106.604C549.27 105.646 549.989 104.448 549.989 103.011C549.989 101.094 549.167 99.7596 547.525 99.0067C545.882 98.2538 543.281 97.5693 539.722 96.9533C536.026 96.2689 533.014 95.516 530.687 94.6947C528.36 93.8733 526.341 92.4018 524.63 90.28C522.987 88.0898 522.166 85.0098 522.166 81.04C522.166 78.0284 522.953 75.3591 524.527 73.032C526.17 70.6364 528.394 68.7884 531.201 67.488C534.007 66.1191 537.155 65.4347 540.646 65.4347C546.874 65.4347 551.905 66.9747 555.738 70.0547C559.639 73.1347 561.727 77.2071 562.001 82.272H549.578C549.304 80.1502 548.312 78.5076 546.601 77.344C544.958 76.112 543.11 75.496 541.057 75.496C539.003 75.496 537.361 75.9409 536.129 76.8307C534.897 77.7204 534.281 78.9524 534.281 80.5267C534.281 82.4431 535.068 83.7436 536.642 84.428C538.285 85.044 540.851 85.5916 544.342 86.0707C548.106 86.6182 551.186 87.3027 553.582 88.124C556.046 88.8769 558.168 90.3827 559.947 92.6413C561.727 94.9 562.617 98.1853 562.617 102.497C562.617 107.425 560.769 111.395 557.073 114.407C553.445 117.35 548.585 118.821 542.494 118.821Z" fill="currentColor"></path>', 2)
  ]));
}
const f1 = /* @__PURE__ */ xe(c1, [["render", p1]]), v1 = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, m1 = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, h1 = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, g1 = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, C1 = { flex: "~ gap2 wrap" }, _1 = /* @__PURE__ */ F({
  __name: "About",
  setup(n) {
    const e = Pe();
    return (o, t) => (d(), h("div", v1, [
      c("div", m1, [
        t[5] || (t[5] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", h1, [
          c("div", g1, [
            x(f1, { "h-18": "" })
          ]),
          t[2] || (t[2] = c("div", {
            mb6: "",
            "mt--1": "",
            "text-center": "",
            "text-sm": "",
            flex: "~ gap-1"
          }, [
            c("span", { op40: "" }, " Pinia DevTools ")
          ], -1))
        ]),
        t[6] || (t[6] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", C1, [
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[0] || (t[0] = (l) => a(e).push("/store"))
          }, t[3] || (t[3] = [
            c("div", {
              "i-carbon-tree-view-alt": "",
              "text-3xl": ""
            }, null, -1),
            c("code", null, "Store", -1)
          ])),
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[1] || (t[1] = (l) => a(e).push("/timeline"))
          }, t[4] || (t[4] = [
            c("div", {
              "i-mdi:timeline-clock-outline": "",
              "text-3xl": ""
            }, null, -1),
            c("div", null, "Timeline", -1)
          ]))
        ]),
        t[7] || (t[7] = c("div", {
          flex: "~ gap-6 wrap",
          "mt-5": "",
          "items-center": "",
          "justify-center": ""
        }, [
          c("a", {
            href: "https://github.com/vuejs/pinia",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-blue",
            transition: ""
          }, [
            c("div", { "i-carbon-star": "" }),
            Y(" Star on GitHub ")
          ]),
          c("a", {
            href: "https://pinia.vuejs.org/",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-yellow",
            transition: ""
          }, [
            c("div", { "i-carbon-document": "" }),
            Y(" View Documentation ")
          ])
        ], -1)),
        t[8] || (t[8] = c("div", { "flex-auto": "" }, null, -1))
      ])
    ]));
  }
}), y1 = { class: "h-full flex flex-col" }, x1 = /* @__PURE__ */ F({
  __name: "Settings",
  setup(n) {
    const e = he("pluginSettings"), o = N(() => e.value.options), t = N(() => e.value.values);
    function l(s) {
      e.value = s;
    }
    return (s, p) => (d(), h("div", y1, [
      x(Se, {
        "doc-link": "https://pinia.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/pinia"
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }),
      x(Yt, {
        "plugin-id": "dev.esm.pinia",
        options: o.value,
        values: t.value,
        onUpdate: l
      }, null, 8, ["options", "values"])
    ]));
  }
}), b1 = "dev.esm.pinia", Xt = "pinia", w1 = { class: "h-full flex flex-col" }, k1 = { class: "h-full flex flex-col p2" }, I1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, $1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, S1 = ["onClick"], T1 = { class: "no-scrollbar flex-1 select-none overflow-scroll" }, E1 = { class: "h-full flex flex-col p2" }, V1 = {
  class: "grid grid-cols-[1fr_auto] mb1 items-center gap2 pb1",
  border: "b dashed base"
}, N1 = {
  key: 0,
  class: "flex items-center gap-2 px-1"
}, R1 = ["onClick"], A1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const { expanded: e } = ge(), { expanded: o } = ge("pinia-store-state"), t = Xt, l = T([]), s = T([]), p = ye(), i = T(""), u = T([]), m = N(() => {
      var b, v;
      return (b = u.value) != null && b.length ? z((v = u.value) == null ? void 0 : v[0]) : [];
    }), f = N(() => k(u.value)), r = N(() => f.value.map((b) => b.id)), g = T({}), V = T(""), w = T("");
    Q(V, (b, v) => {
      !b.trim().length && !v.trim().length || pe(b);
    });
    const C = N(() => nt({
      state: g.value,
      filterKey: w.value
    })), S = N(() => {
      var b, v;
      return !((b = g.value.state) != null && b.length) && !((v = g.value.getters) != null && v.length);
    });
    function z(b, v = [], y = []) {
      var R;
      return v.push(b.id), ((R = b.children) == null ? void 0 : R.length) === 0 && y.push([...v]), Array.isArray(b.children) && b.children.forEach((P) => {
        z(P, v, y);
      }), v.pop(), y;
    }
    function A(b, v) {
      const y = [];
      return b == null || b.forEach((R) => {
        y.push(...R.slice(0, v + 1));
      }), [...new Set(y)];
    }
    function k(b) {
      const v = [], y = (R) => {
        R == null || R.forEach((P) => {
          var Z;
          v.push(P), (Z = P.children) != null && Z.length && y(P.children);
        });
      };
      return y(b), v;
    }
    function _() {
      D.value.getInspectorNodeActions(t).then((b) => {
        l.value = b;
      });
    }
    function E() {
      D.value.getInspectorActions(t).then((b) => {
        s.value = b;
      });
    }
    _(), E();
    function H(b) {
      D.value.callInspectorNodeAction(t, b, i.value);
    }
    function q(b) {
      D.value.callInspectorAction(t, b);
    }
    function X(b) {
      var v;
      for (const y in b)
        (v = b[y]) != null && v.length || delete b[y];
      return b;
    }
    function j(b) {
      D.value.getInspectorState({ inspectorId: t, nodeId: b }).then((v) => {
        const y = ee(v);
        y && (g.value = X(y), o.value = Array.from({ length: Object.keys(g.value).length }, (R, P) => `${P}`));
      });
    }
    function ue() {
      g.value = {};
    }
    Q(i, () => {
      ue(), j(i.value);
    });
    function pe(b = "") {
      D.value.getInspectorTree({ inspectorId: t, filter: b }).then((v) => {
        const y = ee(v);
        u.value = y, !i.value && y.length && (i.value = y[0].id, j(y[0].id), e.value = A(m.value, 1));
      });
    }
    pe();
    function fe(b) {
      const v = ee(b);
      v.inspectorId !== t || !v.rootNodes.length || (u.value = v.rootNodes, r.value.includes(i.value) || (i.value = v.rootNodes[0].id, e.value = A(m.value, 1), j(v.rootNodes[0].id)));
    }
    function M(b) {
      const v = ee(b);
      if (v.inspectorId !== t)
        return;
      const y = v.state;
      g.value = X({
        state: y.state,
        getters: y.getters
      });
    }
    return D.functions.on(J.INSPECTOR_TREE_UPDATED, fe), D.functions.on(J.INSPECTOR_STATE_UPDATED, M), we(() => {
      D.functions.off(J.INSPECTOR_TREE_UPDATED, fe), D.functions.off(J.INSPECTOR_STATE_UPDATED, M);
    }), (b, v) => (d(), h("div", w1, [
      x(Se, {
        "doc-link": "https://pinia.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/pinia"
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }),
      x(a(De), { class: "flex-1 overflow-auto" }, {
        default: L(() => [
          x(a(ce), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: L(() => {
              var y;
              return [
                c("div", k1, [
                  c("div", I1, [
                    x(a(_e), {
                      modelValue: V.value,
                      "onUpdate:modelValue": v[0] || (v[0] = (R) => V.value = R),
                      placeholder: a(p).treeFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (y = s.value) != null && y.length ? (d(), h("div", $1, [
                      (d(!0), h(oe, null, re(s.value, (R, P) => G((d(), h("div", {
                        key: P,
                        class: "flex items-center gap1",
                        onClick: (Z) => q(P)
                      }, [
                        c("i", {
                          class: le(`i-ic-baseline-${R.icon.replace(/\_/g, "-")}`),
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 2)
                      ], 8, S1)), [
                        [
                          a(W),
                          { content: R.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : U("", !0)
                  ]),
                  c("div", T1, [
                    x(He, {
                      modelValue: i.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (R) => i.value = R),
                      data: u.value
                    }, null, 8, ["modelValue", "data"])
                  ])
                ])
              ];
            }),
            _: 1
          }),
          x(a(ce), { size: "60" }, {
            default: L(() => {
              var y;
              return [
                c("div", E1, [
                  c("div", V1, [
                    x(a(_e), {
                      modelValue: w.value,
                      "onUpdate:modelValue": v[2] || (v[2] = (R) => w.value = R),
                      placeholder: a(p).stateFilterPlaceholder
                    }, null, 8, ["modelValue", "placeholder"]),
                    (y = l.value) != null && y.length ? (d(), h("div", N1, [
                      (d(!0), h(oe, null, re(l.value, (R, P) => G((d(), h("div", {
                        key: P,
                        class: "flex items-center gap1",
                        onClick: (Z) => H(P)
                      }, [
                        c("i", {
                          class: le(`i-ic-baseline-${R.icon.replace(/\_/g, "-")}`),
                          "cursor-pointer": "",
                          op70: "",
                          "text-base": "",
                          "hover:op100": ""
                        }, null, 2)
                      ], 8, R1)), [
                        [
                          a(W),
                          { content: R.tooltip },
                          void 0,
                          { "bottom-end": !0 }
                        ]
                      ])), 128))
                    ])) : U("", !0)
                  ]),
                  i.value && !S.value ? (d(), B(Me, {
                    key: 0,
                    class: "no-scrollbar flex-1 overflow-scroll",
                    data: C.value,
                    "node-id": i.value,
                    "inspector-id": a(t),
                    "expanded-state-id": "pinia-store-state"
                  }, null, 8, ["data", "node-id", "inspector-id"])) : (d(), B(Ie, { key: 1 }, {
                    default: L(() => v[3] || (v[3] = [
                      Y(" No Data ")
                    ])),
                    _: 1
                  }))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), D1 = "dev.esm.pinia", P1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const e = ["pinia:mutations"];
    return (o, t) => (d(), B(dt, {
      "layer-ids": e,
      "doc-link": "https://pinia.vuejs.org/",
      "plugin-id": D1,
      "github-repo-link": "https://github.com/vuejs/pinia"
    }));
  }
}), M1 = {
  "h-full": "",
  "w-full": ""
}, ps = /* @__PURE__ */ F({
  __name: "index",
  setup(n) {
    const e = T(null);
    Ce("pluginSettings", e);
    const o = N(() => [
      {
        path: "/store",
        name: "Store",
        component: A1,
        icon: "i-carbon-tree-view-alt"
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: P1,
        icon: "i-mdi:timeline-clock-outline"
      },
      {
        path: "/",
        name: "About",
        component: _1,
        icon: "i-logos-pinia"
      },
      e.value && {
        path: "/settings",
        name: "Settings",
        component: x1,
        icon: "i-mdi:cog-outline"
      }
    ].filter(Boolean)), { VirtualRouterView: t, restoreRouter: l } = lt(o, {
      defaultRoutePath: "/store"
    }), s = pt();
    return Ae(() => {
      D.value.getPluginSettings(b1).then((p) => {
        p.options ? e.value = p : e.value = null;
      }), D.value.getInspectorInfo(Xt).then((p) => {
        p && (s.value = {
          stateFilterPlaceholder: p.stateFilterPlaceholder,
          treeFilterPlaceholder: p.treeFilterPlaceholder
        });
      });
    }), (p, i) => (d(), h("div", M1, [
      x(a(t))
    ]));
  }
}), H1 = {}, L1 = {
  viewBox: "0 0 566 154",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function O1(n, e) {
  return d(), h("svg", L1, e[0] || (e[0] = [
    c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "8em",
      height: "8em",
      viewBox: "0 -4 24 24"
    }, [
      c("path", {
        fill: "#3dd68c",
        d: "M4 15V8.5a4.5 4.5 0 0 1 9 0v7a2.5 2.5 0 0 0 5 0V8.83a3.001 3.001 0 1 1 2 0v6.67a4.5 4.5 0 1 1-9 0v-7a2.5 2.5 0 0 0-5 0V15h3l-4 5l-4-5zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
      })
    ], -1),
    c("path", {
      d: "M152.571 118V46.1333H176.8C183.576 46.1333 189.77 47.468 195.383 50.1373C200.995 52.8067 205.478 56.8449 208.832 62.252C212.186 67.5907 213.863 74.1956 213.863 82.0667C213.863 89.8693 212.186 96.4742 208.832 101.881C205.478 107.288 200.995 111.327 195.383 113.996C189.77 116.665 183.576 118 176.8 118H152.571ZM175.157 104.653C181.796 104.653 187.306 102.874 191.687 99.3147C196.067 95.6871 198.257 89.9378 198.257 82.0667C198.257 74.1956 196.067 68.4462 191.687 64.8187C187.306 61.1911 181.796 59.3773 175.157 59.3773H167.971V104.653H175.157ZM270.18 100.444C269.153 105.988 266.381 110.437 261.864 113.791C257.347 117.144 251.905 118.821 245.54 118.821C239.928 118.821 235.102 117.555 231.064 115.023C227.094 112.422 224.083 109.068 222.029 104.961C219.976 100.855 218.949 96.5427 218.949 92.0253C218.949 87.4396 219.873 83.1276 221.721 79.0893C223.638 75.0511 226.513 71.7658 230.345 69.2333C234.247 66.7009 238.969 65.4347 244.513 65.4347C250.263 65.4347 255.054 66.6667 258.887 69.1307C262.72 71.5947 265.526 74.7431 267.305 78.576C269.153 82.4089 270.077 86.4471 270.077 90.6907C270.077 92.2649 270.009 93.8049 269.872 95.3107H232.707C233.254 99.0067 234.623 101.916 236.813 104.037C239.072 106.091 241.981 107.117 245.54 107.117C248.415 107.117 250.776 106.57 252.624 105.475C254.472 104.311 255.67 102.634 256.217 100.444H270.18ZM244.513 75.9067C241.228 75.9067 238.627 76.7622 236.711 78.4733C234.794 80.116 233.528 82.7169 232.912 86.276H255.807C255.601 83.2644 254.506 80.8004 252.521 78.884C250.537 76.8991 247.867 75.9067 244.513 75.9067ZM302.77 118H289.629L270.738 66.256H285.317L296.2 99.7253L306.98 66.256H321.661L302.77 118ZM359.731 118H344.331V59.3773H323.079V46.1333H380.983V59.3773H359.731V118ZM402.364 118.821C397.163 118.821 392.474 117.692 388.299 115.433C384.124 113.106 380.873 109.924 378.546 105.885C376.219 101.779 375.055 97.1929 375.055 92.128C375.055 87.0631 376.219 82.5116 378.546 78.4733C380.873 74.3667 384.124 71.184 388.299 68.9253C392.474 66.5982 397.163 65.4347 402.364 65.4347C407.566 65.4347 412.255 66.5982 416.43 68.9253C420.605 71.184 423.856 74.3667 426.183 78.4733C428.51 82.5116 429.674 87.0631 429.674 92.128C429.674 97.1929 428.51 101.779 426.183 105.885C423.856 109.924 420.605 113.106 416.43 115.433C412.255 117.692 407.566 118.821 402.364 118.821ZM402.364 106.501C406.197 106.501 409.311 105.167 411.707 102.497C414.103 99.828 415.3 96.3716 415.3 92.128C415.3 87.816 414.103 84.3253 411.707 81.656C409.311 78.9867 406.197 77.652 402.364 77.652C398.531 77.652 395.417 78.9867 393.022 81.656C390.626 84.3253 389.428 87.816 389.428 92.128C389.428 96.3716 390.626 99.828 393.022 102.497C395.417 105.167 398.531 106.501 402.364 106.501ZM462.12 118.821C456.918 118.821 452.229 117.692 448.054 115.433C443.879 113.106 440.628 109.924 438.301 105.885C435.974 101.779 434.81 97.1929 434.81 92.128C434.81 87.0631 435.974 82.5116 438.301 78.4733C440.628 74.3667 443.879 71.184 448.054 68.9253C452.229 66.5982 456.918 65.4347 462.12 65.4347C467.321 65.4347 472.01 66.5982 476.185 68.9253C480.36 71.184 483.611 74.3667 485.938 78.4733C488.265 82.5116 489.429 87.0631 489.429 92.128C489.429 97.1929 488.265 101.779 485.938 105.885C483.611 109.924 480.36 113.106 476.185 115.433C472.01 117.692 467.321 118.821 462.12 118.821ZM462.12 106.501C465.952 106.501 469.067 105.167 471.462 102.497C473.858 99.828 475.056 96.3716 475.056 92.128C475.056 87.816 473.858 84.3253 471.462 81.656C469.067 78.9867 465.952 77.652 462.12 77.652C458.287 77.652 455.172 78.9867 452.777 81.656C450.381 84.3253 449.184 87.816 449.184 92.128C449.184 96.3716 450.381 99.828 452.777 102.497C455.172 105.167 458.287 106.501 462.12 106.501ZM512.327 118H498.056V43.772H512.327V118ZM542.494 118.821C536.129 118.821 530.961 117.179 526.991 113.893C523.09 110.54 521.002 106.091 520.729 100.547H533.049C533.322 102.874 534.281 104.722 535.923 106.091C537.634 107.391 539.825 108.041 542.494 108.041C544.684 108.041 546.464 107.562 547.833 106.604C549.27 105.646 549.989 104.448 549.989 103.011C549.989 101.094 549.167 99.7596 547.525 99.0067C545.882 98.2538 543.281 97.5693 539.722 96.9533C536.026 96.2689 533.014 95.516 530.687 94.6947C528.36 93.8733 526.341 92.4018 524.63 90.28C522.987 88.0898 522.166 85.0098 522.166 81.04C522.166 78.0284 522.953 75.3591 524.527 73.032C526.17 70.6364 528.394 68.7884 531.201 67.488C534.007 66.1191 537.155 65.4347 540.646 65.4347C546.874 65.4347 551.905 66.9747 555.738 70.0547C559.639 73.1347 561.727 77.2071 562.001 82.272H549.578C549.304 80.1502 548.312 78.5076 546.601 77.344C544.958 76.112 543.11 75.496 541.057 75.496C539.003 75.496 537.361 75.9409 536.129 76.8307C534.897 77.7204 534.281 78.9524 534.281 80.5267C534.281 82.4431 535.068 83.7436 536.642 84.428C538.285 85.044 540.851 85.5916 544.342 86.0707C548.106 86.6182 551.186 87.3027 553.582 88.124C556.046 88.8769 558.168 90.3827 559.947 92.6413C561.727 94.9 562.617 98.1853 562.617 102.497C562.617 107.425 560.769 111.395 557.073 114.407C553.445 117.35 548.585 118.821 542.494 118.821Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const U1 = /* @__PURE__ */ xe(H1, [["render", O1]]), j1 = {
  "h-full": "",
  "w-full": "",
  flex: "",
  "items-center": ""
}, z1 = {
  flex: "~ col gap2",
  ma: "",
  "px-5": ""
}, B1 = {
  flex: "~ col",
  "mt-20": "",
  "items-center": ""
}, F1 = {
  flex: "~",
  "mt--10": "",
  "items-center": "",
  "justify-center": ""
}, Z1 = { flex: "~ gap2 wrap" }, K1 = /* @__PURE__ */ F({
  __name: "About",
  setup(n) {
    const e = Pe();
    return (o, t) => (d(), h("div", j1, [
      c("div", z1, [
        t[5] || (t[5] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", B1, [
          c("div", F1, [
            x(U1, { "h-18": "" })
          ]),
          t[2] || (t[2] = c("div", {
            mb6: "",
            "mt--1": "",
            "text-center": "",
            "text-sm": "",
            flex: "~ gap-1"
          }, [
            c("span", { op40: "" }, " Router DevTools ")
          ], -1))
        ]),
        t[6] || (t[6] = c("div", { "flex-auto": "" }, null, -1)),
        c("div", Z1, [
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[0] || (t[0] = (l) => a(e).push("/routes"))
          }, t[3] || (t[3] = [
            c("div", {
              "i-carbon-tree-view-alt": "",
              "text-3xl": ""
            }, null, -1),
            c("code", null, "Routes", -1)
          ])),
          c("div", {
            flex: "~ col auto",
            "min-w-40": "",
            p4: "",
            "theme-card-lime": "",
            onClick: t[1] || (t[1] = (l) => a(e).push("/timeline"))
          }, t[4] || (t[4] = [
            c("div", {
              "i-mdi:timeline-clock-outline": "",
              "text-3xl": ""
            }, null, -1),
            c("div", null, "Timeline", -1)
          ]))
        ]),
        t[7] || (t[7] = c("div", {
          flex: "~ gap-6 wrap",
          "mt-5": "",
          "items-center": "",
          "justify-center": ""
        }, [
          c("a", {
            href: "https://github.com/vuejs/router",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-blue",
            transition: ""
          }, [
            c("div", { "i-carbon-star": "" }),
            Y(" Star on GitHub ")
          ]),
          c("a", {
            href: "https://router.vuejs.org/",
            target: "_blank",
            flex: "~ gap1",
            "items-center": "",
            op50: "",
            hover: "op100 text-yellow",
            transition: ""
          }, [
            c("div", { "i-carbon-document": "" }),
            Y(" View Documentation ")
          ])
        ], -1)),
        t[8] || (t[8] = c("div", { "flex-auto": "" }, null, -1))
      ])
    ]));
  }
}), G1 = { class: "h-full flex flex-col" }, W1 = {
  "h-full": "",
  "select-none": "",
  "overflow-scroll": "",
  p2: "",
  class: "no-scrollbar"
}, q1 = {
  "h-full": "",
  "overflow-scroll": "",
  class: "no-scrollbar"
}, J1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const { expanded: e } = ge(), { expanded: o } = ge("routes-state"), t = ye(), l = N(() => t.value.id), s = T(""), p = T([]), i = N(() => {
      var _, E;
      return (_ = p.value) != null && _.length ? r((E = p.value) == null ? void 0 : E[0]) : [];
    }), u = N(() => V(p.value)), m = N(() => u.value.map((_) => _.id)), f = T({});
    function r(_, E = [], H = []) {
      var q;
      return E.push(_.id), ((q = _.children) == null ? void 0 : q.length) === 0 && H.push([...E]), Array.isArray(_.children) && _.children.forEach((X) => {
        r(X, E, H);
      }), E.pop(), H;
    }
    function g(_, E) {
      const H = [];
      return _ == null || _.forEach((q) => {
        H.push(...q.slice(0, E + 1));
      }), [...new Set(H)];
    }
    function V(_) {
      const E = [], H = (q) => {
        q == null || q.forEach((X) => {
          var j;
          E.push(X), (j = X.children) != null && j.length && H(X.children);
        });
      };
      return H(_), E;
    }
    function w(_) {
      var E;
      for (const H in _)
        (E = _[H]) != null && E.length || delete _[H];
      return _;
    }
    function C(_) {
      D.value.getInspectorState({ inspectorId: l.value, nodeId: _ }).then((E) => {
        const H = ee(E);
        H && (f.value = w(H), o.value = Array.from({ length: Object.keys(f.value).length }, (q, X) => `${X}`));
      });
    }
    function S() {
      f.value = {};
    }
    Q(s, () => {
      S(), C(s.value);
    });
    const z = () => {
      D.value.getInspectorTree({ inspectorId: l.value, filter: "" }).then((_) => {
        const E = ee(_);
        p.value = E, !s.value && E.length && (s.value = E[0].id, C(E[0].id), e.value = g(i.value, 1));
      });
    };
    Kt(l).toBeTruthy().then(z);
    function A(_) {
      const E = ee(_);
      E.inspectorId !== l.value || !E.rootNodes.length || (p.value = E.rootNodes, m.value.includes(s.value) || (s.value = E.rootNodes[0].id, e.value = g(i.value, 1), C(E.rootNodes[0].id)));
    }
    function k(_) {
      const E = ee(_);
      if (E.inspectorId !== l.value)
        return;
      const H = E.state;
      f.value = w(H);
    }
    return D.functions.on(J.INSPECTOR_TREE_UPDATED, A), D.functions.on(J.INSPECTOR_STATE_UPDATED, k), we(() => {
      D.functions.off(J.INSPECTOR_TREE_UPDATED, A), D.functions.off(J.INSPECTOR_STATE_UPDATED, k);
    }), (_, E) => (d(), h("div", G1, [
      x(Se, {
        "doc-link": "https://router.vuejs.org/",
        "github-repo-link": "https://github.com/vuejs/router"
      }, {
        default: L(() => [
          x(Te)
        ]),
        _: 1
      }),
      x(a(De), { class: "flex-1 overflow-auto" }, {
        default: L(() => [
          x(a(ce), {
            border: "r base",
            size: "40",
            "h-full": ""
          }, {
            default: L(() => [
              c("div", W1, [
                x(He, {
                  modelValue: s.value,
                  "onUpdate:modelValue": E[0] || (E[0] = (H) => s.value = H),
                  data: p.value
                }, null, 8, ["modelValue", "data"])
              ])
            ]),
            _: 1
          }),
          x(a(ce), { size: "60" }, {
            default: L(() => [
              c("div", q1, [
                s.value ? (d(), B(Me, {
                  key: 0,
                  class: "p3",
                  data: f.value,
                  "node-id": "",
                  "inspector-id": "router",
                  "expanded-state-id": "routes-state"
                }, null, 8, ["data"])) : (d(), B(Ie, { key: 1 }, {
                  default: L(() => E[1] || (E[1] = [
                    Y(" No Data ")
                  ])),
                  _: 1
                }))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), Y1 = "org.vuejs.router", X1 = /* @__PURE__ */ F({
  __name: "Index",
  setup(n) {
    const e = ye();
    return (o, t) => (d(), B(dt, {
      "layer-ids": a(e).timelineLayerIds,
      "doc-link": "https://router.vuejs.org/",
      "plugin-id": Y1,
      "github-repo-link": "https://github.com/vuejs/router"
    }, null, 8, ["layer-ids"]));
  }
}), Q1 = {
  "h-full": "",
  "w-full": ""
}, fs = /* @__PURE__ */ F({
  __name: "index",
  props: {
    id: {}
  },
  setup(n) {
    const e = n, o = pt(), t = T(!1), { VirtualRouterView: l, restoreRouter: s } = lt([
      {
        path: "/routes",
        name: "Routes",
        component: J1,
        icon: "i-carbon-tree-view-alt"
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: X1,
        icon: "i-mdi:timeline-clock-outline"
      },
      {
        path: "/about",
        name: "About",
        component: K1,
        icon: "i-ri-route-line"
      }
    ], {
      defaultRoutePath: "/routes"
    });
    function p() {
      t.value = !0, Ae(() => {
        D.value.getInspectorInfo(e.id).then((i) => {
          if (!i)
            return;
          const u = {
            homepage: i == null ? void 0 : i.homepage,
            id: i == null ? void 0 : i.id,
            label: i == null ? void 0 : i.label,
            logo: i == null ? void 0 : i.logo,
            timelineLayerIds: i == null ? void 0 : i.timelineLayers.map((m) => m.id)
          };
          o.value = u, s(), t.value = !1;
        });
      });
    }
    return Q(() => e.id, (i) => {
      i && p();
    }), (i, u) => (d(), h("div", Q1, [
      x(a(l))
    ]));
  }
});
export {
  cs as Components,
  ds as CustomInspector,
  ps as Pinia,
  fs as Router,
  Rn as SelectiveList,
  dt as Timeline,
  us as useCustomInspector
};
