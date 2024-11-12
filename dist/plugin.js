var le = Object.defineProperty;
var ue = (t, e, n) => e in t ? le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var R = (t, e, n) => (ue(t, typeof e != "symbol" ? e + "" : e, n), n);
const C = "grapesjs-icons", fe = "rgba(0, 0, 0, .7)", gt = "open-icons-modal", de = `${C}-mode`, he = `${C}-modal-container`, Nt = `${C}-container`, pe = `${C}-actions`, O = `${C}-content`, $t = `${C}-search`, ge = `${C}-icon-target`;
function me(t) {
  return {
    title: t.title || "Icons",
    collectionText: t.collectionText || "Collection",
    categoryText: t.categoryText || "Category",
    searchText: t.searchText || "Search an icon..."
  };
}
function ye(t) {
  return {
    type: t.type || "icon",
    name: t.name || "Icon"
  };
}
function be(t) {
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
), D = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), _ = Object.freeze({
  ...Ft,
  ...D
}), tt = Object.freeze({
  ..._,
  body: "",
  hidden: !1
}), we = Object.freeze({
  width: null,
  height: null
}), Rt = Object.freeze({
  // Dimensions
  ...we,
  // Transformations
  ...D
});
function xe(t, e = 0) {
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
const Ie = /[\s,]+/;
function ve(t, e) {
  e.split(Ie).forEach((n) => {
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
  return e.width = n("width", null), e.height = n("height", null), e.rotate = xe(n("rotate", "")), ve(e, n("flip", "")), e.preserveAspectRatio = n("preserveAspectRatio", n("preserveaspectratio", "")), e;
}
function Se(t, e) {
  for (const n in qt)
    if (t[n] !== e[n])
      return !0;
  return !1;
}
const A = /^[a-z0-9]+(-[a-z0-9]+)*$/, N = (t, e, n, r = "") => {
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
    return e && !H(l) ? null : l;
  }
  const s = o[0], i = s.split("-");
  if (i.length > 1) {
    const a = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return e && !H(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !H(a, n) ? null : a;
  }
  return null;
}, H = (t, e) => t ? !!((t.provider === "" || t.provider.match(A)) && (e && t.prefix === "" || t.prefix.match(A)) && t.name.match(A)) : !1;
function Ce(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function yt(t, e) {
  const n = Ce(t, e);
  for (const r in tt)
    r in D ? r in t && !(r in n) && (n[r] = D[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
  return n;
}
function Ee(t, e) {
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
function Te(t, e, n) {
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
function Ht(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((o) => {
    e(o, null), n.push(o);
  });
  const r = Ee(t);
  for (const o in r) {
    const s = r[o];
    s && (e(o, Te(t, o, s)), n.push(o));
  }
  return n;
}
const Ae = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ft
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
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !K(t, Ae))
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
const Q = /* @__PURE__ */ Object.create(null);
function ke(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function x(t, e) {
  const n = Q[t] || (Q[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = ke(t, e));
}
function lt(t, e) {
  return Bt(e) ? Ht(e, (n, r) => {
    r ? t.icons[n] = r : t.missing.add(n);
  }) : [];
}
function Pe(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
function Me(t, e) {
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
let M = !1;
function Dt(t) {
  return typeof t == "boolean" && (M = t), M;
}
function L(t) {
  const e = typeof t == "string" ? N(t, !0, M) : t;
  if (e) {
    const n = x(e.provider, e.prefix), r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Qt(t, e) {
  const n = N(t, !0, M);
  if (!n)
    return !1;
  const r = x(n.provider, n.prefix);
  return Pe(r, n.name, e);
}
function bt(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), M && !e && !t.prefix) {
    let o = !1;
    return Bt(t) && (t.prefix = "", Ht(t, (s, i) => {
      i && Qt(s, i) && (o = !0);
    })), o;
  }
  const n = t.prefix;
  if (!H({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = x(e, n);
  return !!lt(r, t);
}
function Le(t) {
  return !!L(t);
}
function je(t) {
  const e = L(t);
  return e ? {
    ..._,
    ...e
  } : null;
}
function Oe(t) {
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
function _e(t) {
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
let Ne = 0;
function $e(t, e, n) {
  const r = Ne++, o = Ut.bind(null, n, r);
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
function wt(t, e) {
  et[t] = e;
}
function nt(t) {
  return et[t] || et[""];
}
function Fe(t, e = !0, n = !1) {
  const r = [];
  return t.forEach((o) => {
    const s = typeof o == "string" ? N(o, e, n) : o;
    s && r.push(s);
  }), r;
}
var Re = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function qe(t, e, n, r) {
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
  function $() {
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
  function ae(h, w, E) {
    const F = w !== "success";
    switch (d = d.filter((I) => I !== h), c) {
      case "pending":
        break;
      case "failed":
        if (F || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (w === "abort") {
      u = E, y();
      return;
    }
    if (F) {
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
      callback: (E, F) => {
        ae(w, E, F);
      }
    };
    d.push(w), l++, f = setTimeout(J, t.rotate), n(h, e, w.callback);
  }
  return setTimeout(J), $;
}
function zt(t) {
  const e = {
    ...Re,
    ...t
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, c, l) {
    const u = qe(
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
const z = /* @__PURE__ */ Object.create(null), T = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], B = [];
for (; T.length > 0; )
  T.length === 1 || Math.random() > 0.5 ? B.push(T.shift()) : B.push(T.pop());
z[""] = ut({
  resources: ["https://api.iconify.design"].concat(B)
});
function xt(t, e) {
  const n = ut(e);
  return n === null ? !1 : (z[t] = n, !0);
}
function V(t) {
  return z[t];
}
function He() {
  return Object.keys(z);
}
function It() {
}
const W = /* @__PURE__ */ Object.create(null);
function Be(t) {
  if (!W[t]) {
    const e = V(t);
    if (!e)
      return;
    const n = zt(e), r = {
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
      return n(void 0, 424), It;
    o = s.send;
    const i = Be(t);
    i && (r = i.redundancy);
  } else {
    const s = ut(t);
    if (s) {
      r = zt(s);
      const i = t.resources ? t.resources[0] : "", a = nt(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), It) : r.query(e, o, n)().abort;
}
const vt = "iconify2", j = "iconify", Gt = j + "-count", St = j + "-version", Jt = 36e5, De = 168;
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
function Ct(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function rt(t, e) {
  return ft(t, Gt, e.toString());
}
function st(t) {
  return parseInt(ot(t, Gt)) || 0;
}
const S = {
  local: !0,
  session: !0
}, Kt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let dt = !1;
function Qe(t) {
  dt = t;
}
let q = typeof window > "u" ? {} : window;
function Wt(t) {
  const e = t + "Storage";
  try {
    if (q && q[e] && typeof q[e].length == "number")
      return q[e];
  } catch {
  }
  S[t] = !1;
}
function Yt(t, e) {
  const n = Wt(t);
  if (!n)
    return;
  const r = ot(n, St);
  if (r !== vt) {
    if (r) {
      const a = st(n);
      for (let c = 0; c < a; c++)
        Ct(n, j + c.toString());
    }
    ft(n, St, vt), rt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Jt) - De, s = (a) => {
    const c = j + a.toString(), l = ot(n, c);
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
  let i = st(n);
  for (let a = i - 1; a >= 0; a--)
    s(a) || (a === i - 1 ? (i--, rt(n, i)) : Kt[t].add(a));
}
function Xt() {
  if (!dt) {
    Qe(!0);
    for (const t in S)
      Yt(t, (e) => {
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
function Ue(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const r in S)
      Yt(r, (o) => {
        const s = o.data;
        return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function ze(t, e) {
  dt || Xt();
  function n(r) {
    let o;
    if (!S[r] || !(o = Wt(r)))
      return;
    const s = Kt[r];
    let i;
    if (s.size)
      s.delete(i = Array.from(s).shift());
    else if (i = st(o), !rt(o, i + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Jt),
      provider: t.provider,
      data: e
    };
    return ft(
      o,
      j + i.toString(),
      JSON.stringify(a)
    );
  }
  e.lastModified && !Ue(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Et() {
}
function Ve(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, _e(t);
  }));
}
function Ge(t, e) {
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
            }), ze(t, c);
          } catch (l) {
            console.error(l);
          }
        Ve(t);
      });
    });
  }));
}
const ht = (t, e) => {
  const n = Fe(t, !0, Dt()), r = Oe(n);
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
    o[l][u].length && Ge(c, o[l][u]);
  }), e ? $e(e, r, s) : Et;
}, Je = (t) => new Promise((e, n) => {
  const r = typeof t == "string" ? N(t, !0) : t;
  if (!r) {
    n(t);
    return;
  }
  ht([r || t], (o) => {
    if (o.length && r) {
      const s = L(r);
      if (s) {
        e({
          ..._,
          ...s
        });
        return;
      }
    }
    n(t);
  });
});
function Ke(t) {
  try {
    const e = typeof t == "string" ? JSON.parse(t) : t;
    if (typeof e.body == "string")
      return {
        ...e
      };
  } catch {
  }
}
function We(t, e) {
  const n = typeof t == "string" ? N(t, !0, !0) : null;
  if (!n) {
    const s = Ke(t);
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
let Zt = !1;
try {
  Zt = navigator.vendor.indexOf("Apple") === 0;
} catch {
}
function Ye(t, e) {
  switch (e) {
    case "svg":
    case "bg":
    case "mask":
      return e;
  }
  return e !== "style" && (Zt || t.indexOf("<a") === -1) ? "svg" : t.indexOf("currentColor") === -1 ? "bg" : "mask";
}
const Xe = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ze = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function it(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const r = t.split(Xe);
  if (r === null || !r.length)
    return t;
  const o = [];
  let s = r.shift(), i = Ze.test(s);
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
const tn = (t) => t === "unset" || t === "undefined" || t === "none";
function te(t, e) {
  const n = {
    ..._,
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
    const m = [], G = g.hFlip, $ = g.vFlip;
    let y = g.rotate;
    G ? $ ? y += 2 : (m.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), m.push("scale(-1 1)"), o.top = o.left = 0) : $ && (m.push(
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
    tn(m) || (d[g] = m.toString());
  };
  return p("width", u), p("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + c.toString() + " " + l.toString(), {
    attributes: d,
    body: s
  };
}
const en = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let U = en();
function nn(t) {
  U = t;
}
function on() {
  return U;
}
function rn(t, e) {
  const n = V(t);
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
function sn(t) {
  return t === 404;
}
const cn = (t, e, n) => {
  const r = [], o = rn(t, e), s = "icons";
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
function an(t) {
  if (typeof t == "string") {
    const e = V(t);
    if (e)
      return e.path;
  }
  return "/";
}
const ln = (t, e, n) => {
  if (!U) {
    n("abort", 424);
    return;
  }
  let r = an(e.provider);
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
        n(sn(i) ? "abort" : "next", i);
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
}, un = {
  prepare: cn,
  send: ln
};
function Tt(t, e) {
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
let ee = "";
function fn(t) {
  ee = t;
}
function At(t, e) {
  let n = Array.from(t.childNodes).find((r) => r.hasAttribute && r.hasAttribute(X));
  n || (n = document.createElement("style"), n.setAttribute(X, X), t.appendChild(n)), n.textContent = ":host{display:inline-block;vertical-align:" + (e ? "-0.125em" : "0") + "}span,svg{display:block}" + ee;
}
function ne() {
  wt("", un), Dt(!0);
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
    iconExists: Le,
    getIcon: je,
    listIcons: Me,
    addIcon: Qt,
    addCollection: bt,
    calculateSize: it,
    buildIcon: te,
    loadIcons: ht,
    loadIcon: Je,
    addAPIProvider: xt,
    appendCustomStyle: fn,
    _api: {
      getAPIConfig: V,
      setAPIModule: wt,
      sendAPIQuery: Vt,
      setFetch: nn,
      getFetch: on,
      listAPIProviders: He
    }
  };
}
function oe(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function dn(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function hn(t) {
  return "data:image/svg+xml," + dn(t);
}
function pn(t) {
  return 'url("' + hn(t) + '")';
}
const ct = {
  "background-color": "currentColor"
}, re = {
  "background-color": "transparent"
}, kt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Pt = {
  "-webkit-mask": ct,
  mask: ct,
  background: re
};
for (const t in Pt) {
  const e = Pt[t];
  for (const n in kt)
    e[t + "-" + n] = kt[n];
}
function Mt(t) {
  return t ? t + (t.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
}
function gn(t, e, n) {
  const r = document.createElement("span");
  let o = t.body;
  o.indexOf("<a") !== -1 && (o += "<!-- " + Date.now() + " -->");
  const s = t.attributes, i = oe(o, {
    ...s,
    width: e.width + "",
    height: e.height + ""
  }), a = pn(i), c = r.style, l = {
    "--svg": a,
    width: Mt(s.width),
    height: Mt(s.height),
    ...n ? ct : re
  };
  for (const u in l)
    c.setProperty(u, l[u]);
  return r;
}
let k;
function mn() {
  try {
    k = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (t) => t
    });
  } catch {
    k = null;
  }
}
function yn(t) {
  return k === void 0 && mn(), k ? k.createHTML(t) : t;
}
function bn(t) {
  const e = document.createElement("span"), n = t.attributes;
  let r = "";
  n.width || (r = "width: inherit;"), n.height || (r += "height: inherit;"), r && (n.style = r);
  const o = oe(t.body, n);
  return e.innerHTML = yn(o), e.firstChild;
}
function Lt(t, e) {
  const n = e.icon.data, r = e.customisations, o = te(n, r);
  r.preserveAspectRatio && (o.attributes.preserveAspectRatio = r.preserveAspectRatio);
  const s = e.renderedMode;
  let i;
  switch (s) {
    case "svg":
      i = bn(o);
      break;
    default:
      i = gn(o, {
        ..._,
        ...n
      }, s === "mask");
  }
  const a = Array.from(t.childNodes).find((c) => {
    const l = c.tagName && c.tagName.toUpperCase();
    return l === "SPAN" || l === "SVG";
  });
  a ? i.tagName === "SPAN" && a.tagName === i.tagName ? a.setAttribute("style", i.getAttribute("style")) : t.replaceChild(i, a) : t.appendChild(i);
}
function jt(t, e, n) {
  const r = n && (n.rendered ? n : n.lastRender);
  return {
    rendered: !1,
    inline: e,
    icon: t,
    lastRender: r
  };
}
function wn(t = "iconify-icon") {
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
      R(this, "_shadowRoot");
      // State
      R(this, "_state");
      // Attributes check queued
      R(this, "_checkQueued", !1);
      const c = this._shadowRoot = this.attachShadow({
        mode: "open"
      }), l = Y(this);
      At(c, l), this._state = jt({
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
        Lt(l, c);
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
      (c.attrMode !== u || Se(c.customisations, f)) && this._renderIcon(c.icon, f, u);
    }
    /**
     * Icon value has changed
     */
    _iconChanged(c) {
      const l = We(c, (u, f, d) => {
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
      l.data ? this._gotIconData(l) : this._state = jt(l, this._state.inline, this._state);
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
      const f = Ye(c.data.body, u), d = this._state.inline;
      Lt(this._shadowRoot, this._state = {
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
const xn = wn() || ne(), { enableCache: In, disableCache: oo, iconExists: ro, getIcon: vn, listIcons: so, addIcon: io, addCollection: co, calculateSize: ao, buildIcon: lo, loadIcons: Sn, loadIcon: uo, addAPIProvider: fo, _api: ho } = xn;
async function se(t, e = 10) {
  if (e === 0)
    return null;
  try {
    const { body: n, width: r, height: o } = vn(t);
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
  } catch {
    return await new Promise((r) => setTimeout(r, 100)), await se(t, e - 1);
  }
}
const P = [];
function Cn(t, e) {
  return P.findIndex((n) => n.type === t && n.element === e);
}
function En(t, e) {
  return Cn(t, e) !== -1;
}
function at(t, e, n) {
  En(t, e) || (e.addEventListener(t, n), P.push({
    type: t,
    element: e,
    listener: n
  }));
}
function ie(t) {
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
function Tn(t) {
  const e = document.createElement("input");
  return e.type = "search", e.placeholder = t, e.style.padding = "10px 14px", e.style.borderRadius = "6px", e.style.border = `1px solid ${fe}`, e.style.fontSize = "inherit", e.style.fontFamily = "inherit", e.style.color = "hsl(var(--foreground))", e.style.backgroundColor = "hsl(var(--accent))", e.classList.add($t), e;
}
function An(t) {
  const e = document.createElement("div"), n = Tn(t);
  return e.style.display = "flex", e.style.gap = "10px", e.style.marginBottom = "10px", e.classList.add(pe), n.style.flexGrow = "1", e.appendChild(n), e;
}
async function kn(t, e) {
  const n = document.createElement("div");
  n.style.width = "48px", n.style.height = "48px", n.style.cursor = "pointer", n.style.borderRadius = "6px", n.classList.add(ge), n.dataset.iconPrefix = t, n.dataset.iconName = e;
  const r = `${t}:${e}`, o = await se(r);
  return o && (n.innerHTML = o, at("click", n, () => {
    const s = window.editor.getSelected();
    s && (s.set({
      content: o
    }), window.editor.Modal.close());
  })), n;
}
function Pn() {
  const t = document.createElement("div");
  t.style.display = "flex", t.style.gap = "10px", t.style.flexWrap = "wrap", t.style.overflowY = "auto", t.classList.add(O);
  const e = pt();
  return t.appendChild(e), t;
}
function pt() {
  const t = document.createElement("div");
  return t.style.width = "100%", t.style.height = "100%", t.style.display = "flex", t.style.justifyContent = "center", t.style.alignItems = "center", t.style.fontSize = "34px", t.style.color = "hsl(var(--foreground))", t.innerHTML = "No icons found", t.id = "empty-icon", t;
}
async function Mn(t) {
  const e = new DocumentFragment();
  for (const n of t) {
    const [r, o] = n.split(":"), s = await kn(r, o);
    e.appendChild(s);
  }
  return e;
}
function Ln() {
  const t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "10px", t.style.width = "100%", t.classList.add(Nt), t;
}
function jn(t) {
  const e = Ln();
  return e.appendChild(t), e;
}
function On(t) {
  const e = new DocumentFragment(), n = An(t), r = Pn();
  return e.appendChild(n), e.appendChild(r), jn(e);
}
const _n = "https://api.iconify.design", Nn = "grapesjs-icons", $n = `[${Nn}::utils/icon]`;
async function Fn(t) {
  try {
    const { query: e, limit: n, start: r, prefix: o, prefixes: s } = t;
    let i = "";
    return e && (i += `query=${e}`), n && (i += `&limit=${n}`), r && (i += `&start=${r}`), o && (i += `&prefix=${o}`), s && (i += `&prefixes=${s}`), await (await fetch(`${_n}/search?${i}`)).json();
  } catch (e) {
    return console.error(`${$n} "${t.query}" fetching error`, e), null;
  }
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
function Hn(t) {
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
function Bn(t) {
  var e = t.join(""), n = ["471414", "523112976"], r = Number(n[0]) || 0;
  e = Hn(e);
  for (var o = r, s = 0; s < e.length; s++)
    o += e[s], o = _t(o, "+-a^+6");
  return o = _t(o, "+-3^+b+-f"), o ^= Number(n[1]) || 0, 0 > o && (o = (o & 2147483647) + 2147483648), n = o % 1e6, n.toString() + "." + (n ^ r);
}
function Dn({
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
async function zn({ listOfWordsToTranslate: t = [], translateFrom: e = "en", translateTo: n = "en" }) {
  var r = t.map((u) => ({
    original: u,
    translation: u
  }));
  if (e === n)
    return r;
  var o = Bn(t);
  const s = Dn({
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
const Vn = async ({
  listOfWordsToTranslate: t,
  fromLanguage: e,
  toLanguage: n
}) => {
  var r = await zn({
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
        t.translate && (o = await Vn({
          listOfWordsToTranslate: [r],
          fromLanguage: t.translate.from || "auto",
          toLanguage: t.translate.to || "en"
        }).then((s) => s[0].translation)), v = { ...t, query: o }, await ce(v, { clear: !0 });
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
          v = { ...v, start: o + a, limit: s + a }, await ce(v, { clear: !1 });
        }
      },
      t.throttle
    );
  };
}
const ce = async (t, e) => {
  if (e.clear && Kn(), t.query === "" || t.query === void 0)
    return Wn();
  const n = await Fn(t), r = (n == null ? void 0 : n.icons) || [];
  v.total = (n == null ? void 0 : n.total) || 0, Sn(r);
  const o = document.querySelector(`.${O}`);
  if (o)
    if (r.length === 0) {
      const s = pt();
      o.appendChild(s);
    } else {
      const s = await Mn(r);
      o.appendChild(s);
    }
}, Kn = () => {
  const t = document.querySelector(`.${O}`);
  t && (t.innerHTML = "");
}, Wn = () => {
  const t = document.querySelector(`.${O}`);
  if (t) {
    t.innerHTML = "";
    const e = pt();
    t.appendChild(e);
  }
};
function Yn(t) {
  const e = document.querySelector(`.${$t}`), n = document.querySelector(`.${O}`);
  if (!e || !n)
    return;
  const r = Gn(t), o = Jn(t);
  at("input", e, r), at("scroll", n, o);
}
function Xn(t, e, n) {
  const { Modal: r } = t, { title: o, searchText: s } = e, i = On(s);
  r.open({
    title: o,
    content: i,
    attributes: {
      class: he
    }
  }).onceClose(() => {
    ie();
  }), setTimeout(() => Yn(n), 200);
}
function Zn(t) {
  const e = t || "click";
  localStorage.setItem(de, e);
}
function to() {
  for (const t in localStorage)
    t.includes("iconify") && localStorage.removeItem(t);
}
const eo = {
  insertionMode: "drop"
}, po = (t, e) => {
  const { modal: n = {}, component: r = {}, block: o = {}, search: s = {} } = e, i = me(n), a = be(s), { type: c, name: l } = ye(r);
  function u() {
    t.on("load", async () => {
      In("session"), window.editor = t;
    }), t.on("modal:close", () => {
      document.querySelector(`.${Nt}`) && (to(), ie());
    }), t.on("block:drag:stop", (f) => {
      const { "data-type": d } = f.getAttributes();
      d !== c || t.Modal.isOpen() || (t.select(f), t.Commands.run(gt, eo));
    });
  }
  t.Commands.add(gt, (f, d, p = {}) => {
    Zn(p.insertionMode), Xn(t, i, a);
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
  po as default
};
