function g() {}
function A(t) {
  return t()
}
function N() {
  return Object.create(null)
}
function $(t) {
  t.forEach(A)
}
function E(t) {
  return typeof t == 'function'
}
function B(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function'
}
let p
function O(t, e) {
  return p || (p = document.createElement('a')), (p.href = e), t === p.href
}
function F(t) {
  return Object.keys(t).length === 0
}
function k(t, e, n) {
  t.insertBefore(e, n || null)
}
function x(t) {
  t.parentNode && t.parentNode.removeChild(t)
}
function L(t) {
  return document.createElement(t)
}
function l(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function P(t) {
  return Array.from(t.childNodes)
}
function V(t) {
  const e = {}
  for (const n of t) e[n.name] = n.value
  return e
}
let w
function b(t) {
  w = t
}
function W() {
  if (!w) throw new Error('Function called outside component initialization')
  return w
}
function D(t) {
  W().$$.on_mount.push(t)
}
const m = [],
  T = [],
  y = [],
  q = [],
  G = Promise.resolve()
let j = !1
function J() {
  j || ((j = !0), G.then(h))
}
function C(t) {
  y.push(t)
}
const v = new Set()
let _ = 0
function h() {
  if (_ !== 0) return
  const t = w
  do {
    try {
      for (; _ < m.length; ) {
        const e = m[_]
        _++, b(e), K(e.$$)
      }
    } catch (e) {
      throw ((m.length = 0), (_ = 0), e)
    }
    for (b(null), m.length = 0, _ = 0; T.length; ) T.pop()()
    for (let e = 0; e < y.length; e += 1) {
      const n = y[e]
      v.has(n) || (v.add(n), n())
    }
    y.length = 0
  } while (m.length)
  for (; q.length; ) q.pop()()
  ;(j = !1), v.clear(), b(t)
}
function K(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update)
    const e = t.dirty
    ;(t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(C)
  }
}
const Q = new Set()
function U(t, e) {
  t && t.i && (Q.delete(t), t.i(e))
}
function X(t, e, n, i) {
  const {fragment: s, after_update: c} = t.$$
  s && s.m(e, n),
    i ||
      C(() => {
        const r = t.$$.on_mount.map(A).filter(E)
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : $(r),
          (t.$$.on_mount = [])
      }),
    c.forEach(C)
}
function Y(t, e) {
  const n = t.$$
  n.fragment !== null &&
    ($(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function Z(t, e) {
  t.$$.dirty[0] === -1 && (m.push(t), J(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
}
function tt(t, e, n, i, s, c, r, u = [-1]) {
  const d = w
  b(t)
  const o = (t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: g,
    not_equal: s,
    bound: N(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    callbacks: N(),
    dirty: u,
    skip_bound: !1,
    root: e.target || d.$$.root,
  })
  r && r(o.root)
  let a = !1
  if (
    ((o.ctx = n
      ? n(t, e.props || {}, (f, M, ...H) => {
          const S = H.length ? H[0] : M
          return (
            o.ctx &&
              s(o.ctx[f], (o.ctx[f] = S)) &&
              (!o.skip_bound && o.bound[f] && o.bound[f](S), a && Z(t, f)),
            M
          )
        })
      : []),
    o.update(),
    (a = !0),
    $(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const f = P(e.target)
      o.fragment && o.fragment.l(f), f.forEach(x)
    } else o.fragment && o.fragment.c()
    e.intro && U(t.$$.fragment), X(t, e.target, e.anchor, e.customElement), h()
  }
  b(d)
}
let R
typeof HTMLElement == 'function' &&
  (R = class extends HTMLElement {
    constructor() {
      super(), this.attachShadow({mode: 'open'})
    }
    connectedCallback() {
      const {on_mount: t} = this.$$
      this.$$.on_disconnect = t.map(A).filter(E)
      for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
    }
    attributeChangedCallback(t, e, n) {
      this[t] = n
    }
    disconnectedCallback() {
      $(this.$$.on_disconnect)
    }
    $destroy() {
      Y(this, 1), (this.$destroy = g)
    }
    $on(t, e) {
      if (!E(e)) return g
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
      return (
        n.push(e),
        () => {
          const i = n.indexOf(e)
          i !== -1 && n.splice(i, 1)
        }
      )
    }
    $set(t) {
      this.$$set &&
        !F(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
    }
  })
function et(t) {
  let e, n
  return {
    c() {
      ;(e = L('img')),
        O(e.src, (n = t[0])) || l(e, 'src', n),
        l(e, 'loading', 'eager'),
        l(e, 'aria-label', 'membership card'),
        l(e, 'alt', 'membership card')
    },
    m(i, s) {
      k(i, e, s)
    },
    p(i, s) {
      s & 1 && !O(e.src, (n = i[0])) && l(e, 'src', n)
    },
    d(i) {
      i && x(e)
    },
  }
}
function nt(t) {
  let e
  return {
    c() {
      ;(e = L('div')), l(e, 'class', 'loader-bg')
    },
    m(n, i) {
      k(n, e, i)
    },
    p: g,
    d(n) {
      n && x(e)
    },
  }
}
function rt(t) {
  let e, n
  function i(r, u) {
    return r[5] ? nt : et
  }
  let s = i(t),
    c = s(t)
  return {
    c() {
      ;(e = L('div')),
        c.c(),
        (this.c = g),
        l(e, 'class', 'container'),
        l(
          e,
          'style',
          (n = `--border-radius: ${t[1]}px; 
            --container-height: ${t[4]}${t[2]};
            --container-width: ${t[3]}${t[2]};
                  min-width: ${z}${t[2]}; 
                  min-height:${I}${t[2]}`),
        )
    },
    m(r, u) {
      k(r, e, u), c.m(e, null)
    },
    p(r, [u]) {
      s === (s = i(r)) && c
        ? c.p(r, u)
        : (c.d(1), (c = s(r)), c && (c.c(), c.m(e, null))),
        u & 30 &&
          n !==
            (n = `--border-radius: ${r[1]}px; 
            --container-height: ${r[4]}${r[2]};
            --container-width: ${r[3]}${r[2]};
                  min-width: ${z}${r[2]}; 
                  min-height:${I}${r[2]}`) &&
          l(e, 'style', n)
    },
    i: g,
    o: g,
    d(r) {
      r && x(e), c.d()
    },
  }
}
const z = 220,
  I = 120
function it(t, e, n) {
  let {src: i = ''} = e,
    {border_radius: s = 12} = e,
    {unit: c = 'px'} = e,
    {width: r = null} = e,
    {height: u = null} = e,
    d = !0
  const o = new Image()
  return (
    D(() => {
      ;(o.src = i),
        (o.onload = () => {
          n(5, (d = !1))
        }),
        (o.onerror = () => {
          n(5, (d = !1))
        })
    }),
    (t.$$set = a => {
      'src' in a && n(0, (i = a.src)),
        'border_radius' in a && n(1, (s = a.border_radius)),
        'unit' in a && n(2, (c = a.unit)),
        'width' in a && n(3, (r = a.width)),
        'height' in a && n(4, (u = a.height))
    }),
    [i, s, c, r, u, d]
  )
}
class ot extends R {
  constructor(e) {
    super(),
      (this.shadowRoot.innerHTML =
        '<style>@keyframes pulse{50%{opacity:0.5}}.loader-bg{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}img,.loader-bg{width:100%;height:100%;border-radius:var(--border-radius);bottom:-3px}.loader-bg{background:#f3f4f6;position:relative}img{object-fit:fill;overflow:hidden;position:relative}.container{width:var(--container-width, 100%);height:var(--container-height, 100%);border-radius:var(--border-radius);--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);background:transparent}</style>'),
      tt(
        this,
        {target: this.shadowRoot, props: V(this.attributes), customElement: !0},
        it,
        rt,
        B,
        {src: 0, border_radius: 1, unit: 2, width: 3, height: 4},
        null,
      ),
      e &&
        (e.target && k(e.target, this, e.anchor),
        e.props && (this.$set(e.props), h()))
  }
  static get observedAttributes() {
    return ['src', 'border_radius', 'unit', 'width', 'height']
  }
  get src() {
    return this.$$.ctx[0]
  }
  set src(e) {
    this.$$set({src: e}), h()
  }
  get border_radius() {
    return this.$$.ctx[1]
  }
  set border_radius(e) {
    this.$$set({border_radius: e}), h()
  }
  get unit() {
    return this.$$.ctx[2]
  }
  set unit(e) {
    this.$$set({unit: e}), h()
  }
  get width() {
    return this.$$.ctx[3]
  }
  set width(e) {
    this.$$set({width: e}), h()
  }
  get height() {
    return this.$$.ctx[4]
  }
  set height(e) {
    this.$$set({height: e}), h()
  }
}
customElements.define('c-image-loader', ot)
