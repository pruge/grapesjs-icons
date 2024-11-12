var ce = Object.defineProperty;
var ae = (t, e, n) => e in t ? ce(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (ae(t, typeof e != "symbol" ? e + "" : e, n), n);
const I = "grapesjs-icons", le = "rgba(0, 0, 0, .7)", gt = "open-icons-modal", ue = `${I}-mode`, fe = `${I}-modal-container`, de = `${I}-container`, he = `${I}-actions`, V = `${I}-content`, Nt = `${I}-search`, D = `${I}-icon-target`, pe = `${I}-icon`;
function ge(t) {
  return {
    title: t.title || "Icons",
    collectionText: t.collectionText || "Collection",
    categoryText: t.categoryText || "Category",
    searchText: t.searchText || "Search an icon..."
  };
}
function me(t) {
  return {
    type: t.type || "icon",
    name: t.name || "Icon"
  };
}
function ye(t) {
  return {
    total: t.total || 0,
    limit: t.limit || 100,
    start: t.start || 0,
    prefix: t.prefix,
    prefixes: t.prefixes,
    translate: t.translate,
    debounce: t.debounce || 500,
    throttle: t.throttle || 500
  };
}
const be = "https://api.iconify.design", we = "grapesjs-icons", xe = `[${we}::utils/icon]`;
async function Ie(t) {
  try {
    const { query: e, limit: n, start: r, prefix: o, prefixes: s } = t;
    let i = "";
    return e && (i += `query=${e}`), n && (i += `&limit=${n}`), r && (i += `&start=${r}`), o && (i += `&prefix=${o}`), s && (i += `&prefixes=${s}`), await (await fetch(`${be}/search?${i}`)).json();
  } catch (e) {
    return console.error(`${xe} "${t.query}" fetching error`, e), null;
  }
}
function ve(t) {
  const e = document.createElement("input");
  return e.type = "search", e.placeholder = t, e.style.padding = "10px 14px", e.style.borderRadius = "6px", e.style.border = `1px solid ${le}`, e.style.fontSize = "inherit", e.style.fontFamily = "inherit", e.style.color = "hsl(var(--foreground))", e.style.backgroundColor = "hsl(var(--accent))", e.classList.add(Nt), e;
}
function Se(t) {
  const e = document.createElement("div"), n = ve(t);
  return e.style.display = "flex", e.style.gap = "10px", e.style.marginBottom = "10px", e.classList.add(he), n.style.flexGrow = "1", e.appendChild(n), e;
}
function Ce(t, e) {
  const n = document.createElement("div");
  return n.style.width = "48px", n.style.height = "48px", n.style.cursor = "pointer", n.style.borderRadius = "6px", n.classList.add(D), n.dataset.iconPrefix = t, n.dataset.iconName = e, n;
}
function Ee() {
  const t = document.createElement("div");
  return t.style.display = "flex", t.style.gap = "10px", t.style.flexWrap = "wrap", t.style.overflowY = "auto", t.classList.add(V), t;
}
function Te(t) {
  const e = new DocumentFragment();
  for (const n of t) {
    const [r, o] = n.split(":"), s = Ce(r, o);
    e.appendChild(s);
  }
  return e;
}
function Ae() {
  const t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "10px", t.style.width = "100%", t.classList.add(de), t;
}
function ke(t) {
  const e = Ae();
  return e.appendChild(t), e;
}
function Pe(t) {
  const e = new DocumentFragment(), n = Se(t), r = Ee();
  return e.appendChild(n), e.appendChild(r), ke(e);
}
const A = [];
function Le(t, e) {
  return A.findIndex((n) => n.type === t && n.element === e);
}
function Me(t, e) {
  return Le(t, e) !== -1;
}
function et(t, e, n) {
  Me(t, e) || (e.addEventListener(t, n), A.push({
    type: t,
    element: e,
    listener: n
  }));
}
function $t(t) {
  const e = A.length, n = [];
  if (e !== 0) {
    for (let r = 0; r < e; r++) {
      const { type: o, element: s, listener: i } = A[r];
      t && !s.classList.contains(t) || (s.removeEventListener(o, i), n.push(r));
    }
    for (const r of n)
      A.splice(r, 1);
  }
}
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.8
*/
const Ft = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), H = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), j = Object.freeze({
  ...Ft,
  ...H
}), nt = Object.freeze({
  ...j,
  body: "",
  hidden: !1
}), Oe = Object.freeze({
  width: null,
  height: null
}), Rt = Object.freeze({
  // Dimensions
  ...Oe,
  // Transformations
  ...H
});
function je(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(t);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== t) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? r(s) : 0);
    }
  }
  return e;
}
const _e = /[\s,]+/;
function Ne(t, e) {
  e.split(_e).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
const qt = {
  ...Rt,
  preserveAspectRatio: ""
};
function mt(t) {
  const e = {
    ...qt
  }, n = (r, o) => t.getAttribute(r) || o;
  return e.width = n("width", null), e.height = n("height", null), e.rotate = je(n("rotate", "")), Ne(e, n("flip", "")), e.preserveAspectRatio = n("preserveAspectRatio", n("preserveaspectratio", "")), e;
}
function $e(t, e) {
  for (const n in qt)
    if (t[n] !== e[n])
      return !0;
  return !1;
}
const k = /^[a-z0-9]+(-[a-z0-9]+)*$/, _ = (t, e, n, r = "") => {
  const o = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), c = o.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: c,
      name: a
    };
    return e && !q(l) ? null : l;
  }
  const s = o[0], i = s.split("-");
  if (i.length > 1) {
    const a = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return e && !q(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !q(a, n) ? null : a;
  }
  return null;
}, q = (t, e) => t ? !!((t.provider === "" || t.provider.match(k)) && (e && t.prefix === "" || t.prefix.match(k)) && t.name.match(k)) : !1;
function Fe(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function yt(t, e) {
  const n = Fe(t, e);
  for (const r in nt)
    r in H ? r in t && !(r in n) && (n[r] = H[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Re(t, e) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function s(i) {
    if (n[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const a = r[i] && r[i].parent, c = a && s(a);
      c && (o[i] = [a].concat(c));
    }
    return o[i];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(s), o;
}
function qe(t, e, n) {
  const r = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function i(a) {
    s = yt(
      r[a] || o[a],
      s
    );
  }
  return i(e), n.forEach(i), yt(t, s);
}
function Bt(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    e(o, null), n.push(o);
  });
  const r = Re(t);
  for (const o in r) {
    const s = r[o];
    s && (e(o, qe(t, o, s)), n.push(o));
  }
  return n;
}
const Be = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ft
};
function W(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Dt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !W(t, Be))
    return null;
  const n = e.icons;
  for (const o in n) {
    const s = n[o];
    if (!o.match(k) || typeof s.body != "string" || !W(
      s,
      nt
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const s = r[o], i = s.parent;
    if (!o.match(k) || typeof i != "string" || !n[i] && !r[i] || !W(
      s,
      nt
    ))
      return null;
  }
  return e;
}
const Q = /* @__PURE__ */ Object.create(null);
function De(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function x(t, e) {
  const n = Q[t] || (Q[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = De(t, e));
}
function ut(t, e) {
  return Dt(e) ? Bt(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function He(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function Qe(t, e) {
  let n = [];
  return (typeof t == "string" ? [t] : Object.keys(Q)).forEach((o) => {
    (typeof o == "string" && typeof e == "string" ? [e] : Object.keys(Q[o] || {})).forEach((i) => {
      const a = x(o, i);
      n = n.concat(
        Object.keys(a.icons).map(
          (c) => (o !== "" ? "@" + o + ":" : "") + i + ":" + c
        )
      );
    });
  }), n;
}
let L = !1;
function Ht(t) {
  return typeof t == "boolean" && (L = t), L;
}
function M(t) {
  const e = typeof t == "string" ? _(t, !0, L) : t;
  if (e) {
    const n = x(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Qt(t, e) {
  const n = _(t, !0, L);
  if (!n)
    return !1;
  const r = x(n.provider, n.prefix);
  return He(r, n.name, e);
}
function bt(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), L && !e && !t.prefix) {
    let o = !1;
    return Dt(t) && (t.prefix = "", Bt(t, (s, i) => {
      i && Qt(s, i) && (o = !0);
    })), o;
  }
  const n = t.prefix;
  if (!q({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = x(e, n);
  return !!ut(r, t);
}
function Ue(t) {
  return !!M(t);
}
function Ve(t) {
  const e = M(t);
  return e ? {
    ...j,
    ...e
  } : null;
}
function ze(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const s = o.provider, i = o.prefix, a = o.name, c = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), l = c[i] || (c[i] = x(s, i));
    let u;
    a in l.icons ? u = e.loaded : i === "" || l.missing.has(a) ? u = e.missing : u = e.pending;
    const f = {
      provider: s,
      prefix: i,
      name: a
    };
    u.push(f);
  }), e;
}
function Ut(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== e));
  });
}
function Ge(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const r = t.provider, o = t.prefix;
    e.forEach((s) => {
      const i = s.icons, a = i.pending.length;
      i.pending = i.pending.filter((c) => {
        if (c.prefix !== o)
          return !0;
        const l = c.name;
        if (t.icons[l])
          i.loaded.push({
            provider: r,
            prefix: o,
            name: l
          });
        else if (t.missing.has(l))
          i.missing.push({
            provider: r,
            prefix: o,
            name: l
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== a && (n || Ut([t], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Je = 0;
function Ke(t, e, n) {
  const r = Je++, o = Ut.bind(null, n, r);
  if (!e.pending.length)
    return o;
  const s = {
    id: r,
    icons: e,
    callback: t,
    abort: o
  };
  return n.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s);
  }), o;
}
const ot = /* @__PURE__ */ Object.create(null);
function wt(t, e) {
  ot[t] = e;
}
function rt(t) {
  return ot[t] || ot[""];
}
function We(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((o) => {
    const s = typeof o == "string" ? _(o, e, n) : o;
    s && r.push(s);
  }), r;
}
var Ye = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Xe(t, e, n, r) {
  const o = t.resources.length, s = t.random ? Math.floor(Math.random() * o) : t.index;
  let i;
  if (t.random) {
    let h = t.resources.slice(0);
    for (i = []; h.length > 1; ) {
      const w = Math.floor(Math.random() * h.length);
      i.push(h[w]), h = h.slice(0, w).concat(h.slice(w + 1));
    }
    i = i.concat(h);
  } else
    i = t.resources.slice(s).concat(t.resources.slice(0, s));
  const a = Date.now();
  let c = "pending", l = 0, u, f = null, d = [], p = [];
  typeof r == "function" && p.push(r);
  function g() {
    f && (clearTimeout(f), f = null);
  }
  function m() {
    c === "pending" && (c = "aborted"), g(), d.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), d = [];
  }
  function J(h, w) {
    w && (p = []), typeof h == "function" && p.push(h);
  }
  function N() {
    return {
      startTime: a,
      payload: e,
      status: c,
      queriesSent: l,
      queriesPending: d.length,
      subscribe: J,
      abort: m
    };
  }
  function y() {
    c = "failed", p.forEach((h) => {
      h(void 0, u);
    });
  }
  function b() {
    d.forEach((h) => {
      h.status === "pending" && (h.status = "aborted");
    }), d = [];
  }
  function ie(h, w, E) {
    const $ = w !== "success";
    switch (d = d.filter((v) => v !== h), c) {
      case "pending":
        break;
      case "failed":
        if ($ || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (w === "abort") {
      u = E, y();
      return;
    }
    if ($) {
      u = E, d.length || (i.length ? K() : y());
      return;
    }
    if (g(), b(), !t.random) {
      const v = t.resources.indexOf(h.resource);
      v !== -1 && v !== t.index && (t.index = v);
    }
    c = "completed", p.forEach((v) => {
      v(E);
    });
  }
  function K() {
    if (c !== "pending")
      return;
    g();
    const h = i.shift();
    if (h === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          g(), c === "pending" && (b(), y());
        }, t.timeout);
        return;
      }
      y();
      return;
    }
    const w = {
      status: "pending",
      resource: h,
      callback: (E, $) => {
        ie(w, E, $);
      }
    };
    d.push(w), l++, f = setTimeout(K, t.rotate), n(h, e, w.callback);
  }
  return setTimeout(K), N;
}
function Vt(t) {
  const e = {
    ...Ye,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, l) {
    const u = Xe(
      e,
      a,
      c,
      (f, d) => {
        r(), l && l(f, d);
      }
    );
    return n.push(u), u;
  }
  function s(a) {
    return n.find((c) => a(c)) || null;
  }
  return {
    query: o,
    find: s,
    setIndex: (a) => {
      e.index = a;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function ft(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const z = /* @__PURE__ */ Object.create(null), T = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], B = [];
for (; T.length > 0; )
  T.length === 1 || Math.random() > 0.5 ? B.push(T.shift()) : B.push(T.pop());
z[""] = ft({
  resources: ["https://api.iconify.design"].concat(B)
});
function xt(t, e) {
  const n = ft(e);
  return n === null ? !1 : (z[t] = n, !0);
}
function G(t) {
  return z[t];
}
function Ze() {
  return Object.keys(z);
}
function It() {
}
const Y = /* @__PURE__ */ Object.create(null);
function tn(t) {
  if (!Y[t]) {
    const e = G(t);
    if (!e)
      return;
    const n = Vt(e), r = {
      config: e,
      redundancy: n
    };
    Y[t] = r;
  }
  return Y[t];
}
function zt(t, e, n) {
  let r, o;
  if (typeof t == "string") {
    const s = rt(t);
    if (!s)
      return n(void 0, 424), It;
    o = s.send;
    const i = tn(t);
    i && (r = i.redundancy);
  } else {
    const s = ft(t);
    if (s) {
      r = Vt(s);
      const i = t.resources ? t.resources[0] : "", a = rt(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), It) : r.query(e, o, n)().abort;
}
const vt = "iconify2", O = "iconify", Gt = O + "-count", St = O + "-version", Jt = 36e5, en = 168;
function st(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function dt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Ct(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function it(t, e) {
  return dt(t, Gt, e.toString());
}
function ct(t) {
  return parseInt(st(t, Gt)) || 0;
}
const C = {
  local: !0,
  session: !0
}, Kt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ht = !1;
function nn(t) {
  ht = t;
}
let R = typeof window > "u" ? {} : window;
function Wt(t) {
  const e = t + "Storage";
  try {
    if (R && R[e] && typeof R[e].length == "number")
      return R[e];
  } catch {
  }
  C[t] = !1;
}
function Yt(t, e) {
  const n = Wt(t);
  if (!n)
    return;
  const r = st(n, St);
  if (r !== vt) {
    if (r) {
      const a = ct(n);
      for (let c = 0; c < a; c++)
        Ct(n, O + c.toString());
    }
    dt(n, St, vt), it(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Jt) - en, s = (a) => {
    const c = O + a.toString(), l = st(n, c);
    if (typeof l == "string") {
      try {
        const u = JSON.parse(l);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, a))
          return !0;
      } catch {
      }
      Ct(n, c);
    }
  };
  let i = ct(n);
  for (let a = i - 1; a >= 0; a--)
    s(a) || (a === i - 1 ? (i--, it(n, i)) : Kt[t].add(a));
}
function Xt() {
  if (!ht) {
    nn(!0);
    for (const t in C)
      Yt(t, (e) => {
        const n = e.data, r = e.provider, o = n.prefix, s = x(
          r,
          o
        );
        if (!ut(s, n).length)
          return !1;
        const i = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i, !0;
      });
  }
}
function on(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in C)
      Yt(r, (o) => {
        const s = o.data;
        return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function rn(t, e) {
  ht || Xt();
  function n(r) {
    let o;
    if (!C[r] || !(o = Wt(r)))
      return;
    const s = Kt[r];
    let i;
    if (s.size)
      s.delete(i = Array.from(s).shift());
    else if (i = ct(o), !it(o, i + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Jt),
      provider: t.provider,
      data: e
    };
    return dt(
      o,
      O + i.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !on(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Et() {
}
function sn(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Ge(t);
  }));
}
function cn(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, o = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!o || !(s = rt(n)))
      return;
    s.prepare(n, r, o).forEach((a) => {
      zt(n, a, (c) => {
        if (typeof c != "object")
          a.icons.forEach((l) => {
            t.missing.add(l);
          });
        else
          try {
            const l = ut(
              t,
              c
            );
            if (!l.length)
              return;
            const u = t.pendingIcons;
            u && l.forEach((f) => {
              u.delete(f);
            }), rn(t, c);
          } catch (l) {
            console.error(l);
          }
        sn(t);
      });
    });
  }));
}
const pt = (t, e) => {
  const n = We(t, !0, Ht()), r = ze(n);
  if (!r.pending.length) {
    let c = !0;
    return e && setTimeout(() => {
      c && e(
        r.loaded,
        r.missing,
        r.pending,
        Et
      );
    }), () => {
      c = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), s = [];
  let i, a;
  return r.pending.forEach((c) => {
    const { provider: l, prefix: u } = c;
    if (u === a && l === i)
      return;
    i = l, a = u, s.push(x(l, u));
    const f = o[l] || (o[l] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), r.pending.forEach((c) => {
    const { provider: l, prefix: u, name: f } = c, d = x(l, u), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(f) || (p.add(f), o[l][u].push(f));
  }), s.forEach((c) => {
    const { provider: l, prefix: u } = c;
    o[l][u].length && cn(c, o[l][u]);
  }), e ? Ke(e, r, s) : Et;
}, an = (t) => new Promise((e, n) => {
  const r = typeof t == "string" ? _(t, !0) : t;
  if (!r) {
    n(t);
    return;
  }
  pt([r || t], (o) => {
    if (o.length && r) {
      const s = M(r);
      if (s) {
        e({
          ...j,
          ...s
        });
        return;
      }
    }
    n(t);
  });
});
function ln(t) {
  try {
    const e = typeof t == "string" ? JSON.parse(t) : t;
    if (typeof e.body == "string")
      return {
        ...e
      };
  } catch {
  }
}
function un(t, e) {
  const n = typeof t == "string" ? _(t, !0, !0) : null;
  if (!n) {
    const s = ln(t);
    return {
      value: t,
      data: s
    };
  }
  const r = M(n);
  if (r !== void 0 || !n.prefix)
    return {
      value: t,
      name: n,
      data: r
      // could be 'null' -> icon is missing
    };
  const o = pt([n], () => e(t, n, M(n)));
  return {
    value: t,
    name: n,
    loading: o
  };
}
function X(t) {
  return t.hasAttribute("inline");
}
let Zt = !1;
try {
  Zt = navigator.vendor.indexOf("Apple") === 0;
} catch {
}
function fn(t, e) {
  switch (e) {
    case "svg":
    case "bg":
    case "mask":
      return e;
  }
  return e !== "style" && (Zt || t.indexOf("<a") === -1) ? "svg" : t.indexOf("currentColor") === -1 ? "bg" : "mask";
}
const dn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, hn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function at(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(dn);
  if (r === null || !r.length)
    return t;
  const o = [];
  let s = r.shift(), i = hn.test(s);
  for (; ; ) {
    if (i) {
      const a = parseFloat(s);
      isNaN(a) ? o.push(s) : o.push(Math.ceil(a * e * n) / n);
    } else
      o.push(s);
    if (s = r.shift(), s === void 0)
      return o.join("");
    i = !i;
  }
}
const pn = (t) => t === "unset" || t === "undefined" || t === "none";
function te(t, e) {
  const n = {
    ...j,
    ...t
  }, r = {
    ...Rt,
    ...e
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((g) => {
    const m = [], J = g.hFlip, N = g.vFlip;
    let y = g.rotate;
    J ? N ? y += 2 : (m.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), m.push("scale(-1 1)"), o.top = o.left = 0) : N && (m.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), m.push("scale(1 -1)"), o.top = o.left = 0);
    let b;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        b = o.height / 2 + o.top, m.unshift(
          "rotate(90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        b = o.width / 2 + o.left, m.unshift(
          "rotate(-90 " + b.toString() + " " + b.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (o.left !== o.top && (b = o.left, o.left = o.top, o.top = b), o.width !== o.height && (b = o.width, o.width = o.height, o.height = b)), m.length && (s = '<g transform="' + m.join(" ") + '">' + s + "</g>");
  });
  const i = r.width, a = r.height, c = o.width, l = o.height;
  let u, f;
  i === null ? (f = a === null ? "1em" : a === "auto" ? l : a, u = at(f, c / l)) : (u = i === "auto" ? c : i, f = a === null ? at(u, l / c) : a === "auto" ? l : a);
  const d = {}, p = (g, m) => {
    pn(m) || (d[g] = m.toString());
  };
  return p("width", u), p("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + c.toString() + " " + l.toString(), {
    attributes: d,
    body: s
  };
}
const gn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let U = gn();
function mn(t) {
  U = t;
}
function yn() {
  return U;
}
function bn(t, e) {
  const n = G(t);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const s = e + ".json?icons=";
    r = n.maxURL - o - n.path.length - s.length;
  }
  return r;
}
function wn(t) {
  return t === 404;
}
const xn = (t, e, n) => {
  const r = [], o = bn(t, e), s = "icons";
  let i = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, a = 0;
  return n.forEach((c, l) => {
    a += c.length + 1, a >= o && l > 0 && (r.push(i), i = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, a = c.length), i.icons.push(c);
  }), r.push(i), r;
};
function In(t) {
  if (typeof t == "string") {
    const e = G(t);
    if (e)
      return e.path;
  }
  return "/";
}
const vn = (t, e, n) => {
  if (!U) {
    n("abort", 424);
    return;
  }
  let r = In(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, a = e.icons.join(","), c = new URLSearchParams({
        icons: a
      });
      r += s + ".json?" + c.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      r += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  U(t + r).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(wn(i) ? "abort" : "next", i);
      });
      return;
    }
    return o = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", o);
  });
}, Sn = {
  prepare: xn,
  send: vn
};
function Tt(t, e) {
  switch (t) {
    case "local":
    case "session":
      C[t] = e;
      break;
    case "all":
      for (const n in C)
        C[n] = e;
      break;
  }
}
const Z = "data-style";
let ee = "";
function Cn(t) {
  ee = t;
}
function At(t, e) {
  let n = Array.from(t.childNodes).find((r) => r.hasAttribute && r.hasAttribute(Z));
  n || (n = document.createElement("style"), n.setAttribute(Z, Z), t.appendChild(n)), n.textContent = ":host{display:inline-block;vertical-align:" + (e ? "-0.125em" : "0") + "}span,svg{display:block}" + ee;
}
function ne() {
  wt("", Sn), Ht(!0);
  let t;
  try {
    t = window;
  } catch {
  }
  if (t) {
    if (Xt(), t.IconifyPreload !== void 0) {
      const n = t.IconifyPreload, r = "Invalid IconifyPreload syntax.";
      typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((o) => {
        try {
          // Check if item is an object and not null/array
          (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
          typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
          !bt(o)) && console.error(r);
        } catch {
          console.error(r);
        }
      });
    }
    if (t.IconifyProviders !== void 0) {
      const n = t.IconifyProviders;
      if (typeof n == "object" && n !== null)
        for (const r in n) {
          const o = "IconifyProviders[" + r + "] is invalid.";
          try {
            const s = n[r];
            if (typeof s != "object" || !s || s.resources === void 0)
              continue;
            xt(r, s) || console.error(o);
          } catch {
            console.error(o);
          }
        }
    }
  }
  return {
    enableCache: (n) => Tt(n, !0),
    disableCache: (n) => Tt(n, !1),
    iconExists: Ue,
    getIcon: Ve,
    listIcons: Qe,
    addIcon: Qt,
    addCollection: bt,
    calculateSize: at,
    buildIcon: te,
    loadIcons: pt,
    loadIcon: an,
    addAPIProvider: xt,
    appendCustomStyle: Cn,
    _api: {
      getAPIConfig: G,
      setAPIModule: wt,
      sendAPIQuery: zt,
      setFetch: mn,
      getFetch: yn,
      listAPIProviders: Ze
    }
  };
}
function oe(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function En(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Tn(t) {
  return "data:image/svg+xml," + En(t);
}
function An(t) {
  return 'url("' + Tn(t) + '")';
}
const lt = {
  "background-color": "currentColor"
}, re = {
  "background-color": "transparent"
}, kt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Pt = {
  "-webkit-mask": lt,
  mask: lt,
  background: re
};
for (const t in Pt) {
  const e = Pt[t];
  for (const n in kt)
    e[t + "-" + n] = kt[n];
}
function Lt(t) {
  return t ? t + (t.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
}
function kn(t, e, n) {
  const r = document.createElement("span");
  let o = t.body;
  o.indexOf("<a") !== -1 && (o += "<!-- " + Date.now() + " -->");
  const s = t.attributes, i = oe(o, {
    ...s,
    width: e.width + "",
    height: e.height + ""
  }), a = An(i), c = r.style, l = {
    "--svg": a,
    width: Lt(s.width),
    height: Lt(s.height),
    ...n ? lt : re
  };
  for (const u in l)
    c.setProperty(u, l[u]);
  return r;
}
let P;
function Pn() {
  try {
    P = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (t) => t
    });
  } catch {
    P = null;
  }
}
function Ln(t) {
  return P === void 0 && Pn(), P ? P.createHTML(t) : t;
}
function Mn(t) {
  const e = document.createElement("span"), n = t.attributes;
  let r = "";
  n.width || (r = "width: inherit;"), n.height || (r += "height: inherit;"), r && (n.style = r);
  const o = oe(t.body, n);
  return e.innerHTML = Ln(o), e.firstChild;
}
function Mt(t, e) {
  const n = e.icon.data, r = e.customisations, o = te(n, r);
  r.preserveAspectRatio && (o.attributes.preserveAspectRatio = r.preserveAspectRatio);
  const s = e.renderedMode;
  let i;
  switch (s) {
    case "svg":
      i = Mn(o);
      break;
    default:
      i = kn(o, {
        ...j,
        ...n
      }, s === "mask");
  }
  const a = Array.from(t.childNodes).find((c) => {
    const l = c.tagName && c.tagName.toUpperCase();
    return l === "SPAN" || l === "SVG";
  });
  a ? i.tagName === "SPAN" && a.tagName === i.tagName ? a.setAttribute("style", i.getAttribute("style")) : t.replaceChild(i, a) : t.appendChild(i);
}
function Ot(t, e, n) {
  const r = n && (n.rendered ? n : n.lastRender);
  return {
    rendered: !1,
    inline: e,
    icon: t,
    lastRender: r
  };
}
function On(t = "iconify-icon") {
  let e, n;
  try {
    e = window.customElements, n = window.HTMLElement;
  } catch {
    return;
  }
  if (!e || !n)
    return;
  const r = e.get(t);
  if (r)
    return r;
  const o = [
    // Icon
    "icon",
    // Mode
    "mode",
    "inline",
    // Customisations
    "width",
    "height",
    "rotate",
    "flip"
  ], s = class extends n {
    /**
     * Constructor
     */
    constructor() {
      super();
      // Root
      F(this, "_shadowRoot");
      // State
      F(this, "_state");
      // Attributes check queued
      F(this, "_checkQueued", !1);
      const c = this._shadowRoot = this.attachShadow({
        mode: "open"
      }), l = X(this);
      At(c, l), this._state = Ot({
        value: ""
      }, l), this._queueCheck();
    }
    /**
     * Observed attributes
     */
    static get observedAttributes() {
      return o.slice(0);
    }
    /**
     * Observed properties that are different from attributes
     *
     * Experimental! Need to test with various frameworks that support it
     */
    /*
    static get properties() {
        return {
            inline: {
                type: Boolean,
                reflect: true,
            },
            // Not listing other attributes because they are strings or combination
            // of string and another type. Cannot have multiple types
        };
    }
    */
    /**
     * Attribute has changed
     */
    attributeChangedCallback(c) {
      if (c === "inline") {
        const l = X(this), u = this._state;
        l !== u.inline && (u.inline = l, At(this._shadowRoot, l));
      } else
        this._queueCheck();
    }
    /**
     * Get/set icon
     */
    get icon() {
      const c = this.getAttribute("icon");
      if (c && c.slice(0, 1) === "{")
        try {
          return JSON.parse(c);
        } catch {
        }
      return c;
    }
    set icon(c) {
      typeof c == "object" && (c = JSON.stringify(c)), this.setAttribute("icon", c);
    }
    /**
     * Get/set inline
     */
    get inline() {
      return X(this);
    }
    set inline(c) {
      c ? this.setAttribute("inline", "true") : this.removeAttribute("inline");
    }
    /**
     * Restart animation
     */
    restartAnimation() {
      const c = this._state;
      if (c.rendered) {
        const l = this._shadowRoot;
        if (c.renderedMode === "svg")
          try {
            l.lastChild.setCurrentTime(0);
            return;
          } catch {
          }
        Mt(l, c);
      }
    }
    /**
     * Get status
     */
    get status() {
      const c = this._state;
      return c.rendered ? "rendered" : c.icon.data === null ? "failed" : "loading";
    }
    /**
     * Queue attributes re-check
     */
    _queueCheck() {
      this._checkQueued || (this._checkQueued = !0, setTimeout(() => {
        this._check();
      }));
    }
    /**
     * Check for changes
     */
    _check() {
      if (!this._checkQueued)
        return;
      this._checkQueued = !1;
      const c = this._state, l = this.getAttribute("icon");
      if (l !== c.icon.value) {
        this._iconChanged(l);
        return;
      }
      if (!c.rendered)
        return;
      const u = this.getAttribute("mode"), f = mt(this);
      (c.attrMode !== u || $e(c.customisations, f)) && this._renderIcon(c.icon, f, u);
    }
    /**
     * Icon value has changed
     */
    _iconChanged(c) {
      const l = un(c, (u, f, d) => {
        const p = this._state;
        if (p.rendered || this.getAttribute("icon") !== u)
          return;
        const g = {
          value: u,
          name: f,
          data: d
        };
        g.data ? this._gotIconData(g) : p.icon = g;
      });
      l.data ? this._gotIconData(l) : this._state = Ot(l, this._state.inline, this._state);
    }
    /**
     * Got new icon data, icon is ready to (re)render
     */
    _gotIconData(c) {
      this._checkQueued = !1, this._renderIcon(c, mt(this), this.getAttribute("mode"));
    }
    /**
     * Re-render based on icon data
     */
    _renderIcon(c, l, u) {
      const f = fn(c.data.body, u), d = this._state.inline;
      Mt(this._shadowRoot, this._state = {
        rendered: !0,
        icon: c,
        inline: d,
        customisations: l,
        attrMode: u,
        renderedMode: f
      });
    }
  };
  o.forEach((a) => {
    a in s.prototype || Object.defineProperty(s.prototype, a, {
      get: function() {
        return this.getAttribute(a);
      },
      set: function(c) {
        c !== null ? this.setAttribute(a, c) : this.removeAttribute(a);
      }
    });
  });
  const i = ne();
  for (const a in i)
    s[a] = s.prototype[a] = i[a];
  return e.define(t, s), s;
}
const jn = On() || ne(), { enableCache: oo, disableCache: ro, iconExists: _n, getIcon: Nn, listIcons: so, addIcon: io, addCollection: co, calculateSize: ao, buildIcon: lo, loadIcons: $n, loadIcon: uo, addAPIProvider: fo, _api: ho } = jn;
function Fn(t, e) {
  let n = 0;
  const r = (s) => {
    const i = s - n;
    return n && i < e ? !1 : (n = s, !0);
  }, o = (s = 0) => (r(s) && t(), window.requestAnimationFrame(o));
  return o();
}
let tt = {};
const Rn = (t, e, n) => {
  tt[t] || (tt[t] = !0, setTimeout(() => {
    e(), tt[t] = !1;
  }, n));
};
let jt = {};
const qn = (t, e, n) => {
  clearTimeout(jt[t]), jt[t] = setTimeout(() => {
    e();
  }, n);
};
function Bn(t) {
  for (var e = [], n = 0, r = 0; r < t.length; r++) {
    var o = t.charCodeAt(r);
    128 > o ? e[n++] = o : (2048 > o ? e[n++] = o >> 6 | 192 : ((o & 64512) == 55296 && r + 1 < t.length && (t.charCodeAt(r + 1) & 64512) == 56320 ? (o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++r) & 1023), e[n++] = o >> 18 | 240, e[n++] = o >> 12 & 63 | 128) : e[n++] = o >> 12 | 224, e[n++] = o >> 6 & 63 | 128), e[n++] = o & 63 | 128);
  }
  return e;
}
function _t(t, e) {
  for (var n = 0; n < e.length - 2; n += 3) {
    var r = e.charAt(n + 2);
    r = "a" <= r ? r.charCodeAt(0) - 87 : Number(r), r = e.charAt(n + 1) == "+" ? t >>> r : t << r, t = e.charAt(n) == "+" ? t + r & 4294967295 : t ^ r;
  }
  return t;
}
function Dn(t) {
  var e = t.join(""), n = ["471414", "523112976"], r = Number(n[0]) || 0;
  e = Bn(e);
  for (var o = r, s = 0; s < e.length; s++)
    o += e[s], o = _t(o, "+-a^+6");
  return o = _t(o, "+-3^+b+-f"), o ^= Number(n[1]) || 0, 0 > o && (o = (o & 2147483647) + 2147483648), n = o % 1e6, n.toString() + "." + (n ^ r);
}
function Hn({
  translateFrom: t,
  translateTo: e,
  generatedToken: n
}) {
  const r = "https://translate.googleapis.com/translate_a/t", o = new URLSearchParams({
    client: "te",
    v: "1.0",
    sl: t,
    tl: e,
    tk: n
  });
  return `${r}?${o.toString()}`;
}
function Qn() {
  const t = new Headers();
  return t.append("accept", "*/*"), t.append("Content-Type", "application/x-www-form-urlencoded"), t;
}
function Un({ phrases: t }) {
  const e = new URLSearchParams();
  return t.forEach((n) => e.append("q", n)), e;
}
async function Vn({ listOfWordsToTranslate: t = [], translateFrom: e = "en", translateTo: n = "en" }) {
  var r = t.map((u) => ({
    original: u,
    translation: u
  }));
  if (e === n)
    return r;
  var o = Dn(t);
  const s = Hn({
    generatedToken: o,
    translateFrom: e,
    translateTo: n
  }), i = Qn(), a = Un({
    phrases: t
  }), c = {
    method: "POST",
    headers: i,
    body: a,
    redirect: "follow"
  };
  try {
    var l = await (await fetch(s, c)).json();
    const f = (d) => Array.isArray(l[d]) ? l[d][0] : l[d];
    r = t.map((d, p) => ({
      original: d,
      translation: l[p].length == 0 ? d : f(p)
    }));
  } catch (u) {
    console.error("Error:", u);
  }
  return r;
}
const zn = async ({
  listOfWordsToTranslate: t,
  fromLanguage: e,
  toLanguage: n
}) => {
  var r = await Vn({
    listOfWordsToTranslate: t,
    translateFrom: e,
    translateTo: n
  });
  return r;
};
let S;
function Gn(t) {
  return async (e) => {
    const n = e.target;
    if (!n)
      return;
    const r = n.value;
    qn(
      "search",
      async () => {
        let o = r;
        t.translate && (o = await zn({
          listOfWordsToTranslate: [r],
          fromLanguage: t.translate.from || "auto",
          toLanguage: t.translate.to || "en"
        }).then((s) => s[0].translation)), S = { ...t, query: o }, Kn(), await se(S);
      },
      t.debounce
    );
  };
}
function Jn(t) {
  return async (e) => {
    const n = e.target;
    n && Rn(
      "infinite-scroll",
      async () => {
        if (Math.ceil(n.clientHeight + n.scrollTop) >= n.scrollHeight) {
          const { start: o, limit: s, total: i } = S, a = s - o;
          if (i < o)
            return;
          S = { ...S, start: o + a, limit: s + a }, await se(S);
        }
      },
      t.throttle
    );
  };
}
const se = async (t) => {
  if (console.log("searchOptions", t), t.query === "" || t.query === void 0)
    return;
  const e = await Ie(t), n = (e == null ? void 0 : e.icons) || [];
  S.total = (e == null ? void 0 : e.total) || 0, $n(n);
  const r = document.querySelector(`.${V}`);
  console.log("currentContentElement", r);
  const o = Te(n);
  console.log("iconElements", o), r && ($t(`.${D}`), r.appendChild(o));
}, Kn = () => {
  const t = document.querySelector(`.${V}`);
  t && (t.innerHTML = "");
};
function Wn(t) {
  const e = document.querySelector(`.${Nt}`), n = document.querySelector(`.${V}`);
  if (!e || !n)
    return;
  const r = Gn(t), o = Jn(t);
  et("input", e, r), et("scroll", n, o);
}
function Yn(t, e, n) {
  const { Modal: r } = t, { title: o, searchText: s } = e, i = Pe(s);
  r.open({
    title: o,
    content: i,
    attributes: {
      class: fe
    }
  }).onceClose(() => {
    $t();
  }), setTimeout(() => Wn(n), 200);
}
function Xn(t) {
  const e = t || "click";
  localStorage.setItem(ue, e);
}
function Zn(t) {
  if (!_n(t))
    return null;
  const {
    body: e,
    width: n,
    height: r
  } = Nn(t);
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${n} ${r}"
      width="100%"
      height="100%"
    >
      ${e}
    </svg>
  `.replace(/^\s+/gm, "").replace(/[\r\n]+/g, " ");
}
function to(t, e = 1e3) {
  Fn(() => {
    const n = document.querySelectorAll(`.${D}`);
    if (n.length !== 0)
      for (const r of n) {
        const o = r.dataset.iconPrefix, s = r.dataset.iconName, i = `${o}:${s}`, a = Zn(i);
        a && (r.classList.replace(D, pe), r.innerHTML = a, et("click", r, () => {
          const c = t.getSelected();
          c && (c.set({
            content: a
          }), t.Modal.close());
        }));
      }
  }, e);
}
const eo = {
  insertionMode: "drop"
}, po = (t, e) => {
  const { modal: n = {}, component: r = {}, block: o = {}, search: s = {} } = e, i = ge(n), a = ye(s), { type: c, name: l } = me(r);
  function u() {
    t.on("load", async () => {
      to(t);
    }), t.on("block:drag:stop", (f) => {
      const { "data-type": d } = f.getAttributes();
      d !== c || t.Modal.isOpen() || (t.select(f), t.Commands.run(gt, eo));
    });
  }
  t.Commands.add(gt, (f, d, p = {}) => {
    Xn(p.insertionMode), Yn(t, i, a);
  }), t.BlockManager.add(c, {
    category: "basic",
    label: l,
    content: {
      type: c
    },
    ...o
  }), u();
};
export {
  po as default
};
