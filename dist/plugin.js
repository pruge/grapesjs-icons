var ae = Object.defineProperty;
var le = (t, e, n) => e in t ? ae(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (le(t, typeof e != "symbol" ? e + "" : e, n), n);
const C = "grapesjs-icons", ue = "rgba(0, 0, 0, .7)", pt = "open-icons-modal", fe = `${C}-mode`, de = `${C}-modal-container`, _t = `${C}-container`, he = `${C}-actions`, U = `${C}-content`, Nt = `${C}-search`, pe = `${C}-icon-target`;
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
const $t = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), D = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), j = Object.freeze({
  ...$t,
  ...D
}), tt = Object.freeze({
  ...j,
  body: "",
  hidden: !1
}), ve = Object.freeze({
  width: null,
  height: null
}), Ft = Object.freeze({
  // Dimensions
  ...ve,
  // Transformations
  ...D
});
function Se(t, e = 0) {
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
const Ce = /[\s,]+/;
function Ee(t, e) {
  e.split(Ce).forEach((n) => {
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
const Rt = {
  ...Ft,
  preserveAspectRatio: ""
};
function gt(t) {
  const e = {
    ...Rt
  }, n = (r, o) => t.getAttribute(r) || o;
  return e.width = n("width", null), e.height = n("height", null), e.rotate = Se(n("rotate", "")), Ee(e, n("flip", "")), e.preserveAspectRatio = n("preserveAspectRatio", n("preserveaspectratio", "")), e;
}
function Te(t, e) {
  for (const n in Rt)
    if (t[n] !== e[n])
      return !0;
  return !1;
}
const A = /^[a-z0-9]+(-[a-z0-9]+)*$/, _ = (t, e, n, r = "") => {
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
}, q = (t, e) => t ? !!((t.provider === "" || t.provider.match(A)) && (e && t.prefix === "" || t.prefix.match(A)) && t.name.match(A)) : !1;
function Ae(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function mt(t, e) {
  const n = Ae(t, e);
  for (const r in tt)
    r in D ? r in t && !(r in n) && (n[r] = D[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function ke(t, e) {
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
function Pe(t, e, n) {
  const r = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function i(a) {
    s = mt(
      r[a] || o[a],
      s
    );
  }
  return i(e), n.forEach(i), mt(t, s);
}
function qt(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    e(o, null), n.push(o);
  });
  const r = ke(t);
  for (const o in r) {
    const s = r[o];
    s && (e(o, Pe(t, o, s)), n.push(o));
  }
  return n;
}
const Me = {
  provider: "",
  aliases: {},
  not_found: {},
  ...$t
};
function K(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Bt(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !K(t, Me))
    return null;
  const n = e.icons;
  for (const o in n) {
    const s = n[o];
    if (!o.match(A) || typeof s.body != "string" || !K(
      s,
      tt
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const s = r[o], i = s.parent;
    if (!o.match(A) || typeof i != "string" || !n[i] && !r[i] || !K(
      s,
      tt
    ))
      return null;
  }
  return e;
}
const H = /* @__PURE__ */ Object.create(null);
function Le(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function x(t, e) {
  const n = H[t] || (H[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Le(t, e));
}
function lt(t, e) {
  return Bt(e) ? qt(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Oe(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function je(t, e) {
  let n = [];
  return (typeof t == "string" ? [t] : Object.keys(H)).forEach((o) => {
    (typeof o == "string" && typeof e == "string" ? [e] : Object.keys(H[o] || {})).forEach((i) => {
      const a = x(o, i);
      n = n.concat(
        Object.keys(a.icons).map(
          (c) => (o !== "" ? "@" + o + ":" : "") + i + ":" + c
        )
      );
    });
  }), n;
}
let M = !1;
function Dt(t) {
  return typeof t == "boolean" && (M = t), M;
}
function L(t) {
  const e = typeof t == "string" ? _(t, !0, M) : t;
  if (e) {
    const n = x(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Ht(t, e) {
  const n = _(t, !0, M);
  if (!n)
    return !1;
  const r = x(n.provider, n.prefix);
  return Oe(r, n.name, e);
}
function yt(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), M && !e && !t.prefix) {
    let o = !1;
    return Bt(t) && (t.prefix = "", qt(t, (s, i) => {
      i && Ht(s, i) && (o = !0);
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
  return !!lt(r, t);
}
function _e(t) {
  return !!L(t);
}
function Ne(t) {
  const e = L(t);
  return e ? {
    ...j,
    ...e
  } : null;
}
function $e(t) {
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
function Qt(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== e));
  });
}
function Fe(t) {
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
      }), i.pending.length !== a && (n || Qt([t], s.id), s.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Re = 0;
function qe(t, e, n) {
  const r = Re++, o = Qt.bind(null, n, r);
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
const et = /* @__PURE__ */ Object.create(null);
function bt(t, e) {
  et[t] = e;
}
function nt(t) {
  return et[t] || et[""];
}
function Be(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((o) => {
    const s = typeof o == "string" ? _(o, e, n) : o;
    s && r.push(s);
  }), r;
}
var De = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function He(t, e, n, r) {
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
  function G(h, w) {
    w && (p = []), typeof h == "function" && p.push(h);
  }
  function N() {
    return {
      startTime: a,
      payload: e,
      status: c,
      queriesSent: l,
      queriesPending: d.length,
      subscribe: G,
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
  function ce(h, w, E) {
    const $ = w !== "success";
    switch (d = d.filter((I) => I !== h), c) {
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
      u = E, d.length || (i.length ? J() : y());
      return;
    }
    if (g(), b(), !t.random) {
      const I = t.resources.indexOf(h.resource);
      I !== -1 && I !== t.index && (t.index = I);
    }
    c = "completed", p.forEach((I) => {
      I(E);
    });
  }
  function J() {
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
        ce(w, E, $);
      }
    };
    d.push(w), l++, f = setTimeout(J, t.rotate), n(h, e, w.callback);
  }
  return setTimeout(J), N;
}
function Ut(t) {
  const e = {
    ...De,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, l) {
    const u = He(
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
function ut(t) {
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
const V = /* @__PURE__ */ Object.create(null), T = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], B = [];
for (; T.length > 0; )
  T.length === 1 || Math.random() > 0.5 ? B.push(T.shift()) : B.push(T.pop());
V[""] = ut({
  resources: ["https://api.iconify.design"].concat(B)
});
function wt(t, e) {
  const n = ut(e);
  return n === null ? !1 : (V[t] = n, !0);
}
function z(t) {
  return V[t];
}
function Qe() {
  return Object.keys(V);
}
function xt() {
}
const W = /* @__PURE__ */ Object.create(null);
function Ue(t) {
  if (!W[t]) {
    const e = z(t);
    if (!e)
      return;
    const n = Ut(e), r = {
      config: e,
      redundancy: n
    };
    W[t] = r;
  }
  return W[t];
}
function Vt(t, e, n) {
  let r, o;
  if (typeof t == "string") {
    const s = nt(t);
    if (!s)
      return n(void 0, 424), xt;
    o = s.send;
    const i = Ue(t);
    i && (r = i.redundancy);
  } else {
    const s = ut(t);
    if (s) {
      r = Ut(s);
      const i = t.resources ? t.resources[0] : "", a = nt(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), xt) : r.query(e, o, n)().abort;
}
const It = "iconify2", O = "iconify", zt = O + "-count", vt = O + "-version", Gt = 36e5, Ve = 168;
function ot(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function ft(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function St(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function rt(t, e) {
  return ft(t, zt, e.toString());
}
function st(t) {
  return parseInt(ot(t, zt)) || 0;
}
const S = {
  local: !0,
  session: !0
}, Jt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let dt = !1;
function ze(t) {
  dt = t;
}
let R = typeof window > "u" ? {} : window;
function Kt(t) {
  const e = t + "Storage";
  try {
    if (R && R[e] && typeof R[e].length == "number")
      return R[e];
  } catch {
  }
  S[t] = !1;
}
function Wt(t, e) {
  const n = Kt(t);
  if (!n)
    return;
  const r = ot(n, vt);
  if (r !== It) {
    if (r) {
      const a = st(n);
      for (let c = 0; c < a; c++)
        St(n, O + c.toString());
    }
    ft(n, vt, It), rt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Gt) - Ve, s = (a) => {
    const c = O + a.toString(), l = ot(n, c);
    if (typeof l == "string") {
      try {
        const u = JSON.parse(l);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, a))
          return !0;
      } catch {
      }
      St(n, c);
    }
  };
  let i = st(n);
  for (let a = i - 1; a >= 0; a--)
    s(a) || (a === i - 1 ? (i--, rt(n, i)) : Jt[t].add(a));
}
function Yt() {
  if (!dt) {
    ze(!0);
    for (const t in S)
      Wt(t, (e) => {
        const n = e.data, r = e.provider, o = n.prefix, s = x(
          r,
          o
        );
        if (!lt(s, n).length)
          return !1;
        const i = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i, !0;
      });
  }
}
function Ge(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in S)
      Wt(r, (o) => {
        const s = o.data;
        return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function Je(t, e) {
  dt || Yt();
  function n(r) {
    let o;
    if (!S[r] || !(o = Kt(r)))
      return;
    const s = Jt[r];
    let i;
    if (s.size)
      s.delete(i = Array.from(s).shift());
    else if (i = st(o), !rt(o, i + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Gt),
      provider: t.provider,
      data: e
    };
    return ft(
      o,
      O + i.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !Ge(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Ct() {
}
function Ke(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Fe(t);
  }));
}
function We(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = t, o = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!o || !(s = nt(n)))
      return;
    s.prepare(n, r, o).forEach((a) => {
      Vt(n, a, (c) => {
        if (typeof c != "object")
          a.icons.forEach((l) => {
            t.missing.add(l);
          });
        else
          try {
            const l = lt(
              t,
              c
            );
            if (!l.length)
              return;
            const u = t.pendingIcons;
            u && l.forEach((f) => {
              u.delete(f);
            }), Je(t, c);
          } catch (l) {
            console.error(l);
          }
        Ke(t);
      });
    });
  }));
}
const ht = (t, e) => {
  const n = Be(t, !0, Dt()), r = $e(n);
  if (!r.pending.length) {
    let c = !0;
    return e && setTimeout(() => {
      c && e(
        r.loaded,
        r.missing,
        r.pending,
        Ct
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
    o[l][u].length && We(c, o[l][u]);
  }), e ? qe(e, r, s) : Ct;
}, Ye = (t) => new Promise((e, n) => {
  const r = typeof t == "string" ? _(t, !0) : t;
  if (!r) {
    n(t);
    return;
  }
  ht([r || t], (o) => {
    if (o.length && r) {
      const s = L(r);
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
function Xe(t) {
  try {
    const e = typeof t == "string" ? JSON.parse(t) : t;
    if (typeof e.body == "string")
      return {
        ...e
      };
  } catch {
  }
}
function Ze(t, e) {
  const n = typeof t == "string" ? _(t, !0, !0) : null;
  if (!n) {
    const s = Xe(t);
    return {
      value: t,
      data: s
    };
  }
  const r = L(n);
  if (r !== void 0 || !n.prefix)
    return {
      value: t,
      name: n,
      data: r
      // could be 'null' -> icon is missing
    };
  const o = ht([n], () => e(t, n, L(n)));
  return {
    value: t,
    name: n,
    loading: o
  };
}
function Y(t) {
  return t.hasAttribute("inline");
}
let Xt = !1;
try {
  Xt = navigator.vendor.indexOf("Apple") === 0;
} catch {
}
function tn(t, e) {
  switch (e) {
    case "svg":
    case "bg":
    case "mask":
      return e;
  }
  return e !== "style" && (Xt || t.indexOf("<a") === -1) ? "svg" : t.indexOf("currentColor") === -1 ? "bg" : "mask";
}
const en = /(-?[0-9.]*[0-9]+[0-9.]*)/g, nn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function it(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(en);
  if (r === null || !r.length)
    return t;
  const o = [];
  let s = r.shift(), i = nn.test(s);
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
const on = (t) => t === "unset" || t === "undefined" || t === "none";
function Zt(t, e) {
  const n = {
    ...j,
    ...t
  }, r = {
    ...Ft,
    ...e
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, r].forEach((g) => {
    const m = [], G = g.hFlip, N = g.vFlip;
    let y = g.rotate;
    G ? N ? y += 2 : (m.push(
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
  i === null ? (f = a === null ? "1em" : a === "auto" ? l : a, u = it(f, c / l)) : (u = i === "auto" ? c : i, f = a === null ? it(u, l / c) : a === "auto" ? l : a);
  const d = {}, p = (g, m) => {
    on(m) || (d[g] = m.toString());
  };
  return p("width", u), p("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + c.toString() + " " + l.toString(), {
    attributes: d,
    body: s
  };
}
const rn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Q = rn();
function sn(t) {
  Q = t;
}
function cn() {
  return Q;
}
function an(t, e) {
  const n = z(t);
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
function ln(t) {
  return t === 404;
}
const un = (t, e, n) => {
  const r = [], o = an(t, e), s = "icons";
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
function fn(t) {
  if (typeof t == "string") {
    const e = z(t);
    if (e)
      return e.path;
  }
  return "/";
}
const dn = (t, e, n) => {
  if (!Q) {
    n("abort", 424);
    return;
  }
  let r = fn(e.provider);
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
  Q(t + r).then((s) => {
    const i = s.status;
    if (i !== 200) {
      setTimeout(() => {
        n(ln(i) ? "abort" : "next", i);
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
}, hn = {
  prepare: un,
  send: dn
};
function Et(t, e) {
  switch (t) {
    case "local":
    case "session":
      S[t] = e;
      break;
    case "all":
      for (const n in S)
        S[n] = e;
      break;
  }
}
const X = "data-style";
let te = "";
function pn(t) {
  te = t;
}
function Tt(t, e) {
  let n = Array.from(t.childNodes).find((r) => r.hasAttribute && r.hasAttribute(X));
  n || (n = document.createElement("style"), n.setAttribute(X, X), t.appendChild(n)), n.textContent = ":host{display:inline-block;vertical-align:" + (e ? "-0.125em" : "0") + "}span,svg{display:block}" + te;
}
function ee() {
  bt("", hn), Dt(!0);
  let t;
  try {
    t = window;
  } catch {
  }
  if (t) {
    if (Yt(), t.IconifyPreload !== void 0) {
      const n = t.IconifyPreload, r = "Invalid IconifyPreload syntax.";
      typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((o) => {
        try {
          // Check if item is an object and not null/array
          (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
          typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
          !yt(o)) && console.error(r);
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
            wt(r, s) || console.error(o);
          } catch {
            console.error(o);
          }
        }
    }
  }
  return {
    enableCache: (n) => Et(n, !0),
    disableCache: (n) => Et(n, !1),
    iconExists: _e,
    getIcon: Ne,
    listIcons: je,
    addIcon: Ht,
    addCollection: yt,
    calculateSize: it,
    buildIcon: Zt,
    loadIcons: ht,
    loadIcon: Ye,
    addAPIProvider: wt,
    appendCustomStyle: pn,
    _api: {
      getAPIConfig: z,
      setAPIModule: bt,
      sendAPIQuery: Vt,
      setFetch: sn,
      getFetch: cn,
      listAPIProviders: Qe
    }
  };
}
function ne(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function gn(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function mn(t) {
  return "data:image/svg+xml," + gn(t);
}
function yn(t) {
  return 'url("' + mn(t) + '")';
}
const ct = {
  "background-color": "currentColor"
}, oe = {
  "background-color": "transparent"
}, At = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, kt = {
  "-webkit-mask": ct,
  mask: ct,
  background: oe
};
for (const t in kt) {
  const e = kt[t];
  for (const n in At)
    e[t + "-" + n] = At[n];
}
function Pt(t) {
  return t ? t + (t.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
}
function bn(t, e, n) {
  const r = document.createElement("span");
  let o = t.body;
  o.indexOf("<a") !== -1 && (o += "<!-- " + Date.now() + " -->");
  const s = t.attributes, i = ne(o, {
    ...s,
    width: e.width + "",
    height: e.height + ""
  }), a = yn(i), c = r.style, l = {
    "--svg": a,
    width: Pt(s.width),
    height: Pt(s.height),
    ...n ? ct : oe
  };
  for (const u in l)
    c.setProperty(u, l[u]);
  return r;
}
let k;
function wn() {
  try {
    k = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (t) => t
    });
  } catch {
    k = null;
  }
}
function xn(t) {
  return k === void 0 && wn(), k ? k.createHTML(t) : t;
}
function In(t) {
  const e = document.createElement("span"), n = t.attributes;
  let r = "";
  n.width || (r = "width: inherit;"), n.height || (r += "height: inherit;"), r && (n.style = r);
  const o = ne(t.body, n);
  return e.innerHTML = xn(o), e.firstChild;
}
function Mt(t, e) {
  const n = e.icon.data, r = e.customisations, o = Zt(n, r);
  r.preserveAspectRatio && (o.attributes.preserveAspectRatio = r.preserveAspectRatio);
  const s = e.renderedMode;
  let i;
  switch (s) {
    case "svg":
      i = In(o);
      break;
    default:
      i = bn(o, {
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
function Lt(t, e, n) {
  const r = n && (n.rendered ? n : n.lastRender);
  return {
    rendered: !1,
    inline: e,
    icon: t,
    lastRender: r
  };
}
function vn(t = "iconify-icon") {
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
      }), l = Y(this);
      Tt(c, l), this._state = Lt({
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
        const l = Y(this), u = this._state;
        l !== u.inline && (u.inline = l, Tt(this._shadowRoot, l));
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
      return Y(this);
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
      const u = this.getAttribute("mode"), f = gt(this);
      (c.attrMode !== u || Te(c.customisations, f)) && this._renderIcon(c.icon, f, u);
    }
    /**
     * Icon value has changed
     */
    _iconChanged(c) {
      const l = Ze(c, (u, f, d) => {
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
      l.data ? this._gotIconData(l) : this._state = Lt(l, this._state.inline, this._state);
    }
    /**
     * Got new icon data, icon is ready to (re)render
     */
    _gotIconData(c) {
      this._checkQueued = !1, this._renderIcon(c, gt(this), this.getAttribute("mode"));
    }
    /**
     * Re-render based on icon data
     */
    _renderIcon(c, l, u) {
      const f = tn(c.data.body, u), d = this._state.inline;
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
  const i = ee();
  for (const a in i)
    s[a] = s.prototype[a] = i[a];
  return e.define(t, s), s;
}
const Sn = vn() || ee(), { enableCache: Cn, disableCache: no, iconExists: En, getIcon: Tn, listIcons: oo, addIcon: ro, addCollection: so, calculateSize: io, buildIcon: co, loadIcons: An, loadIcon: ao, addAPIProvider: lo, _api: uo } = Sn;
async function re(t, e = 10) {
  if (e === 0)
    return null;
  if (!En(t))
    return await new Promise((a) => setTimeout(a, 50)), await re(t, e - 1);
  const { body: n, width: r, height: o } = Tn(t);
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${r} ${o}"
      width="100%"
      height="100%"
    >
      ${n}
    </svg>
  `.replace(/^\s+/gm, "").replace(/[\r\n]+/g, " ");
}
const P = [];
function kn(t, e) {
  return P.findIndex((n) => n.type === t && n.element === e);
}
function Pn(t, e) {
  return kn(t, e) !== -1;
}
function at(t, e, n) {
  Pn(t, e) || (e.addEventListener(t, n), P.push({
    type: t,
    element: e,
    listener: n
  }));
}
function se(t) {
  const e = P.length, n = [];
  if (e !== 0) {
    for (let r = 0; r < e; r++) {
      const { type: o, element: s, listener: i } = P[r];
      t && !s.classList.contains(t) || (s.removeEventListener(o, i), n.push(r));
    }
    for (const r of n)
      P.splice(r, 1);
  }
}
function Mn(t) {
  const e = document.createElement("input");
  return e.type = "search", e.placeholder = t, e.style.padding = "10px 14px", e.style.borderRadius = "6px", e.style.border = `1px solid ${ue}`, e.style.fontSize = "inherit", e.style.fontFamily = "inherit", e.style.color = "hsl(var(--foreground))", e.style.backgroundColor = "hsl(var(--accent))", e.classList.add(Nt), e;
}
function Ln(t) {
  const e = document.createElement("div"), n = Mn(t);
  return e.style.display = "flex", e.style.gap = "10px", e.style.marginBottom = "10px", e.classList.add(he), n.style.flexGrow = "1", e.appendChild(n), e;
}
async function On(t, e) {
  const n = document.createElement("div");
  n.style.width = "48px", n.style.height = "48px", n.style.cursor = "pointer", n.style.borderRadius = "6px", n.classList.add(pe), n.dataset.iconPrefix = t, n.dataset.iconName = e;
  const r = `${t}:${e}`, o = await re(r);
  return o && (n.innerHTML = o, at("click", n, () => {
    const s = window.editor.getSelected();
    s && (s.set({
      content: o
    }), window.editor.Modal.close());
  })), n;
}
function jn() {
  const t = document.createElement("div");
  return t.style.display = "flex", t.style.gap = "10px", t.style.flexWrap = "wrap", t.style.overflowY = "auto", t.classList.add(U), t;
}
async function _n(t) {
  const e = new DocumentFragment();
  for (const n of t) {
    const [r, o] = n.split(":"), s = await On(r, o);
    e.appendChild(s);
  }
  return e;
}
function Nn() {
  const t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "10px", t.style.width = "100%", t.classList.add(_t), t;
}
function $n(t) {
  const e = Nn();
  return e.appendChild(t), e;
}
function Fn(t) {
  const e = new DocumentFragment(), n = Ln(t), r = jn();
  return e.appendChild(n), e.appendChild(r), $n(e);
}
let Z = {};
const Rn = (t, e, n) => {
  Z[t] || (Z[t] = !0, setTimeout(() => {
    e(), Z[t] = !1;
  }, n));
};
let Ot = {};
const qn = (t, e, n) => {
  clearTimeout(Ot[t]), Ot[t] = setTimeout(() => {
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
function jt(t, e) {
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
    o += e[s], o = jt(o, "+-a^+6");
  return o = jt(o, "+-3^+b+-f"), o ^= Number(n[1]) || 0, 0 > o && (o = (o & 2147483647) + 2147483648), n = o % 1e6, n.toString() + "." + (n ^ r);
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
let v;
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
        }).then((s) => s[0].translation)), v = { ...t, query: o }, Kn(), await ie(v);
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
          const { start: o, limit: s, total: i } = v, a = s - o;
          if (i < o)
            return;
          v = { ...v, start: o + a, limit: s + a }, await ie(v);
        }
      },
      t.throttle
    );
  };
}
const ie = async (t) => {
  if (t.query === "" || t.query === void 0)
    return;
  const e = await Ie(t), n = (e == null ? void 0 : e.icons) || [];
  v.total = (e == null ? void 0 : e.total) || 0, An(n);
  const r = document.querySelector(`.${U}`), o = await _n(n);
  r && r.appendChild(o);
}, Kn = () => {
  const t = document.querySelector(`.${U}`);
  t && (t.innerHTML = "");
};
function Wn(t) {
  const e = document.querySelector(`.${Nt}`), n = document.querySelector(`.${U}`);
  if (!e || !n)
    return;
  const r = Gn(t), o = Jn(t);
  at("input", e, r), at("scroll", n, o);
}
function Yn(t, e, n) {
  const { Modal: r } = t, { title: o, searchText: s } = e, i = Fn(s);
  r.open({
    title: o,
    content: i,
    attributes: {
      class: de
    }
  }).onceClose(() => {
    se();
  }), setTimeout(() => Wn(n), 200);
}
function Xn(t) {
  const e = t || "click";
  localStorage.setItem(fe, e);
}
function Zn() {
  for (const t in localStorage)
    t.includes("iconify") && localStorage.removeItem(t);
}
const to = {
  insertionMode: "drop"
}, fo = (t, e) => {
  const { modal: n = {}, component: r = {}, block: o = {}, search: s = {} } = e, i = ge(n), a = ye(s), { type: c, name: l } = me(r);
  function u() {
    t.on("load", async () => {
      Cn("session"), window.editor = t;
    }), t.on("modal:close", () => {
      document.querySelector(`.${_t}`) && (Zn(), se());
    }), t.on("block:drag:stop", (f) => {
      const { "data-type": d } = f.getAttributes();
      d !== c || t.Modal.isOpen() || (t.select(f), t.Commands.run(pt, to));
    });
  }
  t.Commands.add(pt, (f, d, p = {}) => {
    Xn(p.insertionMode), Yn(t, i, a);
  }), t.BlockManager.add(c, {
    category: "Basic",
    label: l,
    content: {
      type: c
    },
    ...o
  }), u();
};
export {
  fo as default
};
