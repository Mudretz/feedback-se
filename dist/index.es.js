import * as Os from "react";
import ot, { createContext as Qt, useState as Rt, useLayoutEffect as xo, useEffect as Pt, useContext as ht, useRef as bt, useInsertionEffect as bo, useCallback as te, useMemo as pe, forwardRef as se, Fragment as Eo, createElement as Ju, useId as En, Component as Zu, cloneElement as Co, Children as ko, isValidElement as $u, useImperativeHandle as tl } from "react";
import { createPortal as So } from "react-dom";
function el(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function nl() {
  if (Ii) return Fe;
  Ii = 1;
  var e = ot, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, u, c) {
    var l, h = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (l in u) s.call(u, l) && !r.hasOwnProperty(l) && (h[l] = u[l]);
    if (a && a.defaultProps) for (l in u = a.defaultProps, u) h[l] === void 0 && (h[l] = u[l]);
    return { $$typeof: t, type: a, key: d, ref: p, props: h, _owner: i.current };
  }
  return Fe.Fragment = n, Fe.jsx = o, Fe.jsxs = o, Fe;
}
var Ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oi;
function sl() {
  return Oi || (Oi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ot, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var E = m && f[m] || f[g];
      return typeof E == "function" ? E : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(f) {
      {
        for (var E = arguments.length, w = new Array(E > 1 ? E - 1 : 0), _ = 1; _ < E; _++)
          w[_ - 1] = arguments[_];
        A("error", f, w);
      }
    }
    function A(f, E, w) {
      {
        var _ = C.ReactDebugCurrentFrame, Z = _.getStackAddendum();
        Z !== "" && (E += "%s", w = w.concat([Z]));
        var st = w.map(function(G) {
          return String(G);
        });
        st.unshift("Warning: " + E), Function.prototype.apply.call(console[f], console, st);
      }
    }
    var S = !1, y = !1, j = !1, it = !1, P = !1, Q;
    Q = Symbol.for("react.module.reference");
    function W(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === s || f === r || P || f === i || f === c || f === l || it || f === p || S || y || j || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === o || f.$$typeof === a || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Q || f.getModuleId !== void 0));
    }
    function pt(f, E, w) {
      var _ = f.displayName;
      if (_)
        return _;
      var Z = E.displayName || E.name || "";
      return Z !== "" ? w + "(" + Z + ")" : w;
    }
    function Tt(f) {
      return f.displayName || "Context";
    }
    function at(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case r:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var E = f;
            return Tt(E) + ".Consumer";
          case o:
            var w = f;
            return Tt(w._context) + ".Provider";
          case u:
            return pt(f, f.render, "ForwardRef");
          case h:
            var _ = f.displayName || null;
            return _ !== null ? _ : at(f.type) || "Memo";
          case d: {
            var Z = f, st = Z._payload, G = Z._init;
            try {
              return at(G(st));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, J = 0, nt, dt, yt, Mt, v, k, F;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function V() {
      {
        if (J === 0) {
          nt = console.log, dt = console.info, yt = console.warn, Mt = console.error, v = console.group, k = console.groupCollapsed, F = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        J++;
      }
    }
    function K() {
      {
        if (J--, J === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, f, {
              value: nt
            }),
            info: et({}, f, {
              value: dt
            }),
            warn: et({}, f, {
              value: yt
            }),
            error: et({}, f, {
              value: Mt
            }),
            group: et({}, f, {
              value: v
            }),
            groupCollapsed: et({}, f, {
              value: k
            }),
            groupEnd: et({}, f, {
              value: F
            })
          });
        }
        J < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = C.ReactCurrentDispatcher, O;
    function U(f, E, w) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (Z) {
            var _ = Z.stack.trim().match(/\n( *(at )?)/);
            O = _ && _[1] || "";
          }
        return `
` + O + f;
      }
    }
    var q = !1, H;
    {
      var At = typeof WeakMap == "function" ? WeakMap : Map;
      H = new At();
    }
    function T(f, E) {
      if (!f || q)
        return "";
      {
        var w = H.get(f);
        if (w !== void 0)
          return w;
      }
      var _;
      q = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var st;
      st = N.current, N.current = null, V();
      try {
        if (E) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (St) {
              _ = St;
            }
            Reflect.construct(f, [], G);
          } else {
            try {
              G.call();
            } catch (St) {
              _ = St;
            }
            f.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            _ = St;
          }
          f();
        }
      } catch (St) {
        if (St && _ && typeof St.stack == "string") {
          for (var z = St.stack.split(`
`), kt = _.stack.split(`
`), ut = z.length - 1, ct = kt.length - 1; ut >= 1 && ct >= 0 && z[ut] !== kt[ct]; )
            ct--;
          for (; ut >= 1 && ct >= 0; ut--, ct--)
            if (z[ut] !== kt[ct]) {
              if (ut !== 1 || ct !== 1)
                do
                  if (ut--, ct--, ct < 0 || z[ut] !== kt[ct]) {
                    var Vt = `
` + z[ut].replace(" at new ", " at ");
                    return f.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", f.displayName)), typeof f == "function" && H.set(f, Vt), Vt;
                  }
                while (ut >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = st, K(), Error.prepareStackTrace = Z;
      }
      var ye = f ? f.displayName || f.name : "", oe = ye ? U(ye) : "";
      return typeof f == "function" && H.set(f, oe), oe;
    }
    function Ft(f, E, w) {
      return T(f, !1);
    }
    function ge(f) {
      var E = f.prototype;
      return !!(E && E.isReactComponent);
    }
    function re(f, E, w) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return T(f, ge(f));
      if (typeof f == "string")
        return U(f);
      switch (f) {
        case c:
          return U("Suspense");
        case l:
          return U("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return Ft(f.render);
          case h:
            return re(f.type, E, w);
          case d: {
            var _ = f, Z = _._payload, st = _._init;
            try {
              return re(st(Z), E, w);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, Ei = {}, Ci = C.ReactDebugCurrentFrame;
    function Ze(f) {
      if (f) {
        var E = f._owner, w = re(f.type, f._source, E ? E.type : null);
        Ci.setExtraStackFrame(w);
      } else
        Ci.setExtraStackFrame(null);
    }
    function Pu(f, E, w, _, Z) {
      {
        var st = Function.call.bind(De);
        for (var G in f)
          if (st(f, G)) {
            var z = void 0;
            try {
              if (typeof f[G] != "function") {
                var kt = Error((_ || "React class") + ": " + w + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              z = f[G](E, G, _, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ut) {
              z = ut;
            }
            z && !(z instanceof Error) && (Ze(Z), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", w, G, typeof z), Ze(null)), z instanceof Error && !(z.message in Ei) && (Ei[z.message] = !0, Ze(Z), b("Failed %s type: %s", w, z.message), Ze(null));
          }
      }
    }
    var Du = Array.isArray;
    function Nn(f) {
      return Du(f);
    }
    function Mu(f) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, w = E && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return w;
      }
    }
    function Fu(f) {
      try {
        return ki(f), !1;
      } catch {
        return !0;
      }
    }
    function ki(f) {
      return "" + f;
    }
    function Si(f) {
      if (Fu(f))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mu(f)), ki(f);
    }
    var Me = C.ReactCurrentOwner, Vu = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ti, wi, Un;
    Un = {};
    function Bu(f) {
      if (De.call(f, "ref")) {
        var E = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Iu(f) {
      if (De.call(f, "key")) {
        var E = Object.getOwnPropertyDescriptor(f, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ou(f, E) {
      if (typeof f.ref == "string" && Me.current && E && Me.current.stateNode !== E) {
        var w = at(Me.current.type);
        Un[w] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', at(Me.current.type), f.ref), Un[w] = !0);
      }
    }
    function _u(f, E) {
      {
        var w = function() {
          Ti || (Ti = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Lu(f, E) {
      {
        var w = function() {
          wi || (wi = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        w.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var ju = function(f, E, w, _, Z, st, G) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: E,
        ref: w,
        props: G,
        // Record the component responsible for creating this element.
        _owner: st
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Nu(f, E, w, _, Z) {
      {
        var st, G = {}, z = null, kt = null;
        w !== void 0 && (Si(w), z = "" + w), Iu(E) && (Si(E.key), z = "" + E.key), Bu(E) && (kt = E.ref, Ou(E, Z));
        for (st in E)
          De.call(E, st) && !Vu.hasOwnProperty(st) && (G[st] = E[st]);
        if (f && f.defaultProps) {
          var ut = f.defaultProps;
          for (st in ut)
            G[st] === void 0 && (G[st] = ut[st]);
        }
        if (z || kt) {
          var ct = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          z && _u(G, ct), kt && Lu(G, ct);
        }
        return ju(f, z, kt, Z, _, Me.current, G);
      }
    }
    var Yn = C.ReactCurrentOwner, Ri = C.ReactDebugCurrentFrame;
    function ve(f) {
      if (f) {
        var E = f._owner, w = re(f.type, f._source, E ? E.type : null);
        Ri.setExtraStackFrame(w);
      } else
        Ri.setExtraStackFrame(null);
    }
    var Wn;
    Wn = !1;
    function Hn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Pi() {
      {
        if (Yn.current) {
          var f = at(Yn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Uu(f) {
      return "";
    }
    var Di = {};
    function Yu(f) {
      {
        var E = Pi();
        if (!E) {
          var w = typeof f == "string" ? f : f.displayName || f.name;
          w && (E = `

Check the top-level render call using <` + w + ">.");
        }
        return E;
      }
    }
    function Mi(f, E) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var w = Yu(E);
        if (Di[w])
          return;
        Di[w] = !0;
        var _ = "";
        f && f._owner && f._owner !== Yn.current && (_ = " It was passed a child from " + at(f._owner.type) + "."), ve(f), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, _), ve(null);
      }
    }
    function Fi(f, E) {
      {
        if (typeof f != "object")
          return;
        if (Nn(f))
          for (var w = 0; w < f.length; w++) {
            var _ = f[w];
            Hn(_) && Mi(_, E);
          }
        else if (Hn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var Z = x(f);
          if (typeof Z == "function" && Z !== f.entries)
            for (var st = Z.call(f), G; !(G = st.next()).done; )
              Hn(G.value) && Mi(G.value, E);
        }
      }
    }
    function Wu(f) {
      {
        var E = f.type;
        if (E == null || typeof E == "string")
          return;
        var w;
        if (typeof E == "function")
          w = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === h))
          w = E.propTypes;
        else
          return;
        if (w) {
          var _ = at(E);
          Pu(w, f.props, "prop", _, f);
        } else if (E.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var Z = at(E);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Hu(f) {
      {
        for (var E = Object.keys(f.props), w = 0; w < E.length; w++) {
          var _ = E[w];
          if (_ !== "children" && _ !== "key") {
            ve(f), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ve(null);
            break;
          }
        }
        f.ref !== null && (ve(f), b("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var Vi = {};
    function Bi(f, E, w, _, Z, st) {
      {
        var G = W(f);
        if (!G) {
          var z = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = Uu();
          kt ? z += kt : z += Pi();
          var ut;
          f === null ? ut = "null" : Nn(f) ? ut = "array" : f !== void 0 && f.$$typeof === t ? (ut = "<" + (at(f.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof f, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, z);
        }
        var ct = Nu(f, E, w, Z, st);
        if (ct == null)
          return ct;
        if (G) {
          var Vt = E.children;
          if (Vt !== void 0)
            if (_)
              if (Nn(Vt)) {
                for (var ye = 0; ye < Vt.length; ye++)
                  Fi(Vt[ye], f);
                Object.freeze && Object.freeze(Vt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fi(Vt, f);
        }
        if (De.call(E, "key")) {
          var oe = at(f), St = Object.keys(E).filter(function(Xu) {
            return Xu !== "key";
          }), Kn = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vi[oe + Kn]) {
            var qu = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Kn, oe, qu, oe), Vi[oe + Kn] = !0;
          }
        }
        return f === s ? Hu(ct) : Wu(ct), ct;
      }
    }
    function Ku(f, E, w) {
      return Bi(f, E, w, !0);
    }
    function zu(f, E, w) {
      return Bi(f, E, w, !1);
    }
    var Gu = zu, Qu = Ku;
    Ve.Fragment = s, Ve.jsx = Gu, Ve.jsxs = Qu;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? vs.exports = nl() : vs.exports = sl();
var R = vs.exports;
const To = Qt(null), il = ({ children: e }) => {
  const [t, n] = Rt(null), [s, i] = Rt(0), [r, o] = Rt(""), a = (l) => {
    n(l);
  }, u = (l) => {
    o(l);
  }, c = (l) => {
    i(l);
  };
  return /* @__PURE__ */ R.jsx(
    To.Provider,
    {
      value: {
        rateValue: t,
        text: r,
        stage: s,
        onChangeStage: c,
        onSetText: u,
        onChangeRate: a
      },
      children: e
    }
  );
}, rl = "_modal_r868b_1", ol = {
  modal: rl
}, Cn = Qt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), kn = Qt({}), Sn = Qt(null), _s = typeof document < "u", Tn = _s ? xo : Pt, wo = Qt({ strict: !1 }), Ls = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), al = "framerAppearId", Ro = "data-" + Ls(al), ul = {
  skipAnimations: !1,
  useManualTiming: !1
};
class _i {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function ll(e) {
  let t = new _i(), n = new _i(), s = 0, i = !1, r = !1;
  const o = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, l = !1) => {
      const h = l && i, d = h ? t : n;
      return c && o.add(u), d.add(u) && h && i && (s = t.order.length), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.remove(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (i) {
        r = !0;
        return;
      }
      if (i = !0, [t, n] = [n, t], n.clear(), s = t.order.length, s)
        for (let c = 0; c < s; c++) {
          const l = t.order[c];
          o.has(l) && (a.schedule(l), e()), l(u);
        }
      i = !1, r && (r = !1, a.process(u));
    }
  };
  return a;
}
const $e = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], cl = 40;
function Po(e, t) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = $e.reduce((h, d) => (h[d] = ll(() => n = !0), h), {}), o = (h) => {
    r[h].process(i);
  }, a = () => {
    const h = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, cl), 1), i.timestamp = h, i.isProcessing = !0, $e.forEach(o), i.isProcessing = !1, n && t && (s = !1, e(a));
  }, u = () => {
    n = !0, s = !0, i.isProcessing || e(a);
  };
  return { schedule: $e.reduce((h, d) => {
    const p = r[d];
    return h[d] = (m, g = !1, x = !1) => (n || u(), p.schedule(m, g, x)), h;
  }, {}), cancel: (h) => $e.forEach((d) => r[d].cancel(h)), state: i, steps: r };
}
const { schedule: js, cancel: km } = Po(queueMicrotask, !1);
function Ae(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const Do = Qt({});
let Li = !1;
function hl(e, t, n, s, i) {
  const { visualElement: r } = ht(kn), o = ht(wo), a = ht(Sn), u = ht(Cn).reducedMotion, c = bt();
  s = s || o.renderer, !c.current && s && (c.current = s(e, {
    visualState: t,
    parent: r,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const l = c.current, h = ht(Do);
  l && !l.projection && i && (l.type === "html" || l.type === "svg") && fl(c.current, n, i, h), bo(() => {
    l && l.update(n, a);
  });
  const d = bt(!!(n[Ro] && !window.HandoffComplete));
  return Tn(() => {
    l && (l.updateFeatures(), js.render(l.render), d.current && l.animationState && l.animationState.animateChanges());
  }), Pt(() => {
    l && (!d.current && l.animationState && l.animationState.animateChanges(), d.current && (d.current = !1, Li || (Li = !0, queueMicrotask(dl))));
  }), l;
}
function dl() {
  window.HandoffComplete = !0;
}
function fl(e, t, n, s) {
  const { layoutId: i, layout: r, drag: o, dragConstraints: a, layoutScroll: u, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Mo(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: r,
    alwaysMeasureLayout: !!o || a && Ae(a),
    visualElement: e,
    scheduleRender: () => e.scheduleRender(),
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: s,
    layoutScroll: u,
    layoutRoot: c
  });
}
function Mo(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Mo(e.parent);
}
function pl(e, t, n) {
  return te(
    (s) => {
      s && e.mount && e.mount(s), t && (s ? t.mount(s) : t.unmount()), n && (typeof n == "function" ? n(s) : Ae(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function He(e) {
  return typeof e == "string" || Array.isArray(e);
}
function wn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ns = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Us = ["initial", ...Ns];
function Rn(e) {
  return wn(e.animate) || Us.some((t) => He(e[t]));
}
function Fo(e) {
  return !!(Rn(e) || e.variants);
}
function ml(e, t) {
  if (Rn(e)) {
    const { initial: n, animate: s } = e;
    return {
      initial: n === !1 || He(n) ? n : void 0,
      animate: He(s) ? s : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function gl(e) {
  const { initial: t, animate: n } = ml(e, ht(kn));
  return pe(() => ({ initial: t, animate: n }), [ji(t), ji(n)]);
}
function ji(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ni = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ce = {};
for (const e in Ni)
  Ce[e] = {
    isEnabled: (t) => Ni[e].some((n) => !!t[n])
  };
function vl(e) {
  for (const t in e)
    Ce[t] = {
      ...Ce[t],
      ...e[t]
    };
}
const Ys = Qt({}), yl = Symbol.for("motionComponentSymbol"), vt = (e) => e;
let we = vt, Nt = vt;
process.env.NODE_ENV !== "production" && (we = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Nt = (e, t) => {
  if (!e)
    throw new Error(t);
});
function Al({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: s, Component: i }) {
  e && vl(e);
  function r(a, u) {
    let c;
    const l = {
      ...ht(Cn),
      ...a,
      layoutId: xl(a)
    }, { isStatic: h } = l, d = gl(a), p = s(a, h);
    if (!h && _s) {
      bl(l, e);
      const m = El(l);
      c = m.MeasureLayout, d.visualElement = hl(i, p, l, t, m.ProjectionNode);
    }
    return R.jsxs(kn.Provider, { value: d, children: [c && d.visualElement ? R.jsx(c, { visualElement: d.visualElement, ...l }) : null, n(i, a, pl(p, d.visualElement, u), p, h, d.visualElement)] });
  }
  const o = se(r);
  return o[yl] = i, o;
}
function xl({ layoutId: e }) {
  const t = ht(Ys).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function bl(e, t) {
  const n = ht(wo).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? we(!1, s) : Nt(!1, s);
  }
}
function El(e) {
  const { drag: t, layout: n } = Ce;
  if (!t && !n)
    return {};
  const s = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function Cl(e) {
  function t(s, i = {}) {
    return Al(e(s, i));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
  });
}
const kl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ws(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(kl.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const hn = {};
function Sl(e) {
  Object.assign(hn, e);
}
const Qe = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], me = new Set(Qe);
function Vo(e, { layout: t, layoutId: n }) {
  return me.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!hn[e] || e === "opacity");
}
const ft = (e) => !!(e && e.getVelocity), Tl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, wl = Qe.length;
function Rl(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, s, i) {
  let r = "";
  for (let o = 0; o < wl; o++) {
    const a = Qe[o];
    if (e[a] !== void 0) {
      const u = Tl[a] || a;
      r += `${u}(${e[a]}) `;
    }
  }
  return t && !e.z && (r += "translateZ(0)"), r = r.trim(), i ? r = i(e, s ? "" : r) : n && s && (r = "none"), r;
}
const Bo = (e) => (t) => typeof t == "string" && t.startsWith(e), Io = Bo("--"), Pl = Bo("var(--"), Hs = (e) => Pl(e) ? Dl.test(e.split("/*")[0].trim()) : !1, Dl = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ml = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ee = (e, t, n) => n > t ? t : n < e ? e : n, Re = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Le = {
  ...Re,
  transform: (e) => ee(0, 1, e)
}, tn = {
  ...Re,
  default: 1
}, je = (e) => Math.round(e * 1e5) / 1e5, Ks = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Fl = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Vl = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function qe(e) {
  return typeof e == "string";
}
const Xe = (e) => ({
  test: (t) => qe(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), qt = Xe("deg"), _t = Xe("%"), B = Xe("px"), Bl = Xe("vh"), Il = Xe("vw"), Ui = {
  ..._t,
  parse: (e) => _t.parse(e) / 100,
  transform: (e) => _t.transform(e * 100)
}, Yi = {
  ...Re,
  transform: Math.round
}, Oo = {
  // Border props
  borderWidth: B,
  borderTopWidth: B,
  borderRightWidth: B,
  borderBottomWidth: B,
  borderLeftWidth: B,
  borderRadius: B,
  radius: B,
  borderTopLeftRadius: B,
  borderTopRightRadius: B,
  borderBottomRightRadius: B,
  borderBottomLeftRadius: B,
  // Positioning props
  width: B,
  maxWidth: B,
  height: B,
  maxHeight: B,
  size: B,
  top: B,
  right: B,
  bottom: B,
  left: B,
  // Spacing props
  padding: B,
  paddingTop: B,
  paddingRight: B,
  paddingBottom: B,
  paddingLeft: B,
  margin: B,
  marginTop: B,
  marginRight: B,
  marginBottom: B,
  marginLeft: B,
  // Transform props
  rotate: qt,
  rotateX: qt,
  rotateY: qt,
  rotateZ: qt,
  scale: tn,
  scaleX: tn,
  scaleY: tn,
  scaleZ: tn,
  skew: qt,
  skewX: qt,
  skewY: qt,
  distance: B,
  translateX: B,
  translateY: B,
  translateZ: B,
  x: B,
  y: B,
  z: B,
  perspective: B,
  transformPerspective: B,
  opacity: Le,
  originX: Ui,
  originY: Ui,
  originZ: B,
  // Misc
  zIndex: Yi,
  backgroundPositionX: B,
  backgroundPositionY: B,
  // SVG
  fillOpacity: Le,
  strokeOpacity: Le,
  numOctaves: Yi
};
function zs(e, t, n, s) {
  const { style: i, vars: r, transform: o, transformOrigin: a } = e;
  let u = !1, c = !1, l = !0;
  for (const h in t) {
    const d = t[h];
    if (Io(h)) {
      r[h] = d;
      continue;
    }
    const p = Oo[h], m = Ml(d, p);
    if (me.has(h)) {
      if (u = !0, o[h] = m, !l)
        continue;
      d !== (p.default || 0) && (l = !1);
    } else h.startsWith("origin") ? (c = !0, a[h] = m) : i[h] = m;
  }
  if (t.transform || (u || s ? i.transform = Rl(e.transform, n, l, s) : i.transform && (i.transform = "none")), c) {
    const { originX: h = "50%", originY: d = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${h} ${d} ${p}`;
  }
}
const Gs = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function _o(e, t, n) {
  for (const s in t)
    !ft(t[s]) && !Vo(s, n) && (e[s] = t[s]);
}
function Ol({ transformTemplate: e }, t, n) {
  return pe(() => {
    const s = Gs();
    return zs(s, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, s.vars, s.style);
  }, [t]);
}
function _l(e, t, n) {
  const s = e.style || {}, i = {};
  return _o(i, s, e), Object.assign(i, Ol(e, t, n)), i;
}
function Ll(e, t, n) {
  const s = {}, i = _l(e, t, n);
  return e.drag && e.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (s.tabIndex = 0), s.style = i, s;
}
const jl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function dn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || jl.has(e);
}
let Lo = (e) => !dn(e);
function Nl(e) {
  e && (Lo = (t) => t.startsWith("on") ? !dn(t) : e(t));
}
try {
  Nl(require("@emotion/is-prop-valid").default);
} catch {
}
function Ul(e, t, n) {
  const s = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (Lo(i) || n === !0 && dn(i) || !t && !dn(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (s[i] = e[i]);
  return s;
}
function Wi(e, t, n) {
  return typeof e == "string" ? e : B.transform(t + n * e);
}
function Yl(e, t, n) {
  const s = Wi(t, e.x, e.width), i = Wi(n, e.y, e.height);
  return `${s} ${i}`;
}
const Wl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Hl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Kl(e, t, n = 1, s = 0, i = !0) {
  e.pathLength = 1;
  const r = i ? Wl : Hl;
  e[r.offset] = B.transform(-s);
  const o = B.transform(t), a = B.transform(n);
  e[r.array] = `${o} ${a}`;
}
function Qs(e, {
  attrX: t,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: r,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: u = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, l, h, d) {
  if (zs(e, c, l, d), h) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: g } = e;
  p.transform && (g && (m.transform = p.transform), delete p.transform), g && (i !== void 0 || r !== void 0 || m.transform) && (m.transformOrigin = Yl(g, i !== void 0 ? i : 0.5, r !== void 0 ? r : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), s !== void 0 && (p.scale = s), o !== void 0 && Kl(p, o, a, u, !1);
}
const jo = () => ({
  ...Gs(),
  attrs: {}
}), qs = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function zl(e, t, n, s) {
  const i = pe(() => {
    const r = jo();
    return Qs(r, t, { enableHardwareAcceleration: !1 }, qs(s), e.transformTemplate), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [t]);
  if (e.style) {
    const r = {};
    _o(r, e.style, e), i.style = { ...r, ...i.style };
  }
  return i;
}
function Gl(e = !1) {
  return (n, s, i, { latestValues: r }, o) => {
    const u = (Ws(n) ? zl : Ll)(s, r, o, n), c = Ul(s, typeof n == "string", e), l = n !== Eo ? { ...c, ...u, ref: i } : {}, { children: h } = s, d = pe(() => ft(h) ? h.get() : h, [h]);
    return Ju(n, {
      ...l,
      children: d
    });
  };
}
function No(e, { style: t, vars: n }, s, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(s));
  for (const r in n)
    e.style.setProperty(r, n[r]);
}
const Uo = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Yo(e, t, n, s) {
  No(e, t, void 0, s);
  for (const i in t.attrs)
    e.setAttribute(Uo.has(i) ? i : Ls(i), t.attrs[i]);
}
function Xs(e, t, n) {
  var s;
  const { style: i } = e, r = {};
  for (const o in i)
    (ft(i[o]) || t.style && ft(t.style[o]) || Vo(o, e) || ((s = n == null ? void 0 : n.getValue(o)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (r[o] = i[o]);
  return r;
}
function Wo(e, t, n) {
  const s = Xs(e, t, n);
  for (const i in e)
    if (ft(e[i]) || ft(t[i])) {
      const r = Qe.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[r] = e[i];
    }
  return s;
}
function Hi(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, s) => {
    t[0][s] = n.get(), t[1][s] = n.getVelocity();
  }), t;
}
function Js(e, t, n, s) {
  if (typeof t == "function") {
    const [i, r] = Hi(s);
    t = t(n !== void 0 ? n : e.custom, i, r);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, r] = Hi(s);
    t = t(n !== void 0 ? n : e.custom, i, r);
  }
  return t;
}
function Pn(e) {
  const t = bt(null);
  return t.current === null && (t.current = e()), t.current;
}
const ys = (e) => Array.isArray(e), Ql = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), ql = (e) => ys(e) ? e[e.length - 1] || 0 : e;
function an(e) {
  const t = ft(e) ? e.get() : e;
  return Ql(t) ? t.toValue() : t;
}
function Xl({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, s, i, r) {
  const o = {
    latestValues: Jl(s, i, r, e),
    renderState: t()
  };
  return n && (o.mount = (a) => n(s, a, o)), o;
}
const Ho = (e) => (t, n) => {
  const s = ht(kn), i = ht(Sn), r = () => Xl(e, t, s, i);
  return n ? r() : Pn(r);
};
function Jl(e, t, n, s) {
  const i = {}, r = s(e, {});
  for (const d in r)
    i[d] = an(r[d]);
  let { initial: o, animate: a } = e;
  const u = Rn(e), c = Fo(e);
  t && c && !u && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let l = n ? n.initial === !1 : !1;
  l = l || o === !1;
  const h = l ? a : o;
  return h && typeof h != "boolean" && !wn(h) && (Array.isArray(h) ? h : [h]).forEach((p) => {
    const m = Js(e, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: x, ...C } = m;
    for (const b in C) {
      let A = C[b];
      if (Array.isArray(A)) {
        const S = l ? A.length - 1 : 0;
        A = A[S];
      }
      A !== null && (i[b] = A);
    }
    for (const b in g)
      i[b] = g[b];
  }), i;
}
const { schedule: X, cancel: Ut, state: gt, steps: zn } = Po(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0), Zl = {
  useVisualState: Ho({
    scrapeMotionValuesFromProps: Wo,
    createRenderState: jo,
    onMount: (e, t, { renderState: n, latestValues: s }) => {
      X.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), X.render(() => {
        Qs(n, s, { enableHardwareAcceleration: !1 }, qs(t.tagName), e.transformTemplate), Yo(t, n);
      });
    }
  })
}, $l = {
  useVisualState: Ho({
    scrapeMotionValuesFromProps: Xs,
    createRenderState: Gs
  })
};
function tc(e, { forwardMotionProps: t = !1 }, n, s) {
  return {
    ...Ws(e) ? Zl : $l,
    preloadedFeatures: n,
    useRender: Gl(t),
    createVisualElement: s,
    Component: e
  };
}
function Wt(e, t, n, s = { passive: !0 }) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n);
}
const Ko = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Dn(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const ec = (e) => (t) => Ko(t) && e(t, Dn(t));
function Kt(e, t, n, s) {
  return Wt(e, t, ec(n), s);
}
const nc = (e, t) => (n) => t(e(n)), zt = (...e) => e.reduce(nc);
function zo(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Ki = zo("dragHorizontal"), zi = zo("dragVertical");
function Go(e) {
  let t = !1;
  if (e === "y")
    t = zi();
  else if (e === "x")
    t = Ki();
  else {
    const n = Ki(), s = zi();
    n && s ? t = () => {
      n(), s();
    } : (n && n(), s && s());
  }
  return t;
}
function Qo() {
  const e = Go(!0);
  return e ? (e(), !1) : !0;
}
class ie {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Gi(e, t) {
  const n = t ? "pointerenter" : "pointerleave", s = t ? "onHoverStart" : "onHoverEnd", i = (r, o) => {
    if (r.pointerType === "touch" || Qo())
      return;
    const a = e.getProps();
    e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
    const u = a[s];
    u && X.postRender(() => u(r, o));
  };
  return Kt(e.current, n, i, {
    passive: !e.getProps()[s]
  });
}
class sc extends ie {
  mount() {
    this.unmount = zt(Gi(this.node, !0), Gi(this.node, !1));
  }
  unmount() {
  }
}
class ic extends ie {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = zt(Wt(this.node.current, "focus", () => this.onFocus()), Wt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const qo = (e, t) => t ? e === t ? !0 : qo(e, t.parentElement) : !1;
function Gn(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Dn(n));
}
class rc extends ie {
  constructor() {
    super(...arguments), this.removeStartListeners = vt, this.removeEndListeners = vt, this.removeAccessibleListeners = vt, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const s = this.node.getProps(), r = Kt(window, "pointerup", (a, u) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: l, globalTapTarget: h } = this.node.getProps(), d = !h && !qo(this.node.current, a.target) ? l : c;
        d && X.update(() => d(a, u));
      }, {
        passive: !(s.onTap || s.onPointerUp)
      }), o = Kt(window, "pointercancel", (a, u) => this.cancelPress(a, u), {
        passive: !(s.onTapCancel || s.onPointerCancel)
      });
      this.removeEndListeners = zt(r, o), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (r) => {
        if (r.key !== "Enter" || this.isPressing)
          return;
        const o = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || Gn("up", (u, c) => {
            const { onTap: l } = this.node.getProps();
            l && X.postRender(() => l(u, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Wt(this.node.current, "keyup", o), Gn("down", (a, u) => {
          this.startPress(a, u);
        });
      }, n = Wt(this.node.current, "keydown", t), s = () => {
        this.isPressing && Gn("cancel", (r, o) => this.cancelPress(r, o));
      }, i = Wt(this.node.current, "blur", s);
      this.removeAccessibleListeners = zt(n, i);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && X.postRender(() => s(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Qo();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: s } = this.node.getProps();
    s && X.postRender(() => s(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Kt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), s = Wt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = zt(n, s);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const As = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), oc = (e) => {
  const t = As.get(e.target);
  t && t(e);
}, ac = (e) => {
  e.forEach(oc);
};
function uc({ root: e, ...t }) {
  const n = e || document;
  Qn.has(n) || Qn.set(n, {});
  const s = Qn.get(n), i = JSON.stringify(t);
  return s[i] || (s[i] = new IntersectionObserver(ac, { root: e, ...t })), s[i];
}
function lc(e, t, n) {
  const s = uc(t);
  return As.set(e, n), s.observe(e), () => {
    As.delete(e), s.unobserve(e);
  };
}
const cc = {
  some: 0,
  all: 1
};
class hc extends ie {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: r } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : cc[i]
    }, a = (u) => {
      const { isIntersecting: c } = u;
      if (this.isInView === c || (this.isInView = c, r && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: l, onViewportLeave: h } = this.node.getProps(), d = c ? l : h;
      d && d(u);
    };
    return lc(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(dc(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function dc({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const fc = {
  inView: {
    Feature: hc
  },
  tap: {
    Feature: rc
  },
  focus: {
    Feature: ic
  },
  hover: {
    Feature: sc
  }
};
function Xo(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
function Mn(e, t, n) {
  const s = e.getProps();
  return Js(s, t, n !== void 0 ? n : s.custom, e);
}
const Lt = (e) => e * 1e3, jt = (e) => e / 1e3, pc = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, mc = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), gc = {
  type: "keyframes",
  duration: 0.8
}, vc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, yc = (e, { keyframes: t }) => t.length > 2 ? gc : me.has(e) ? e.startsWith("scale") ? mc(t[1]) : pc : vc;
function Ac({ when: e, delay: t, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: r, repeatType: o, repeatDelay: a, from: u, elapsed: c, ...l }) {
  return !!Object.keys(l).length;
}
function Zs(e, t) {
  return e[t] || e.default || e;
}
const xc = (e) => e !== null;
function Fn(e, { repeat: t, repeatType: n = "loop" }, s) {
  const i = e.filter(xc), r = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !r || s === void 0 ? i[r] : s;
}
let un;
function bc() {
  un = void 0;
}
const Jt = {
  now: () => (un === void 0 && Jt.set(gt.isProcessing || ul.useManualTiming ? gt.timestamp : performance.now()), un),
  set: (e) => {
    un = e, queueMicrotask(bc);
  }
}, Jo = (e) => /^0[^.\s]+$/u.test(e);
function Ec(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Jo(e) : !0;
}
const Zo = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Cc = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function kc(e) {
  const t = Cc.exec(e);
  if (!t)
    return [,];
  const [, n, s, i] = t;
  return [`--${n ?? s}`, i];
}
const Sc = 4;
function $o(e, t, n = 1) {
  Nt(n <= Sc, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [s, i] = kc(e);
  if (!s)
    return;
  const r = window.getComputedStyle(t).getPropertyValue(s);
  if (r) {
    const o = r.trim();
    return Zo(o) ? parseFloat(o) : o;
  }
  return Hs(i) ? $o(i, t, n + 1) : i;
}
const Tc = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Qi = (e) => e === Re || e === B, qi = (e, t) => parseFloat(e.split(", ")[t]), Xi = (e, t) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return qi(i[1], t);
  {
    const r = s.match(/^matrix\((.+)\)$/u);
    return r ? qi(r[1], e) : 0;
  }
}, wc = /* @__PURE__ */ new Set(["x", "y", "z"]), Rc = Qe.filter((e) => !wc.has(e));
function Pc(e) {
  const t = [];
  return Rc.forEach((n) => {
    const s = e.getValue(n);
    s !== void 0 && (t.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const ke = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Xi(4, 13),
  y: Xi(5, 14)
};
ke.translateX = ke.x;
ke.translateY = ke.y;
const ta = (e) => (t) => t.test(e), Dc = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ea = [Re, B, _t, qt, Il, Bl, Dc], Ji = (e) => ea.find(ta(e)), fe = /* @__PURE__ */ new Set();
let xs = !1, bs = !1;
function na() {
  if (bs) {
    const e = Array.from(fe).filter((s) => s.needsMeasurement), t = new Set(e.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    t.forEach((s) => {
      const i = Pc(s);
      i.length && (n.set(s, i), s.render());
    }), e.forEach((s) => s.measureInitialState()), t.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([r, o]) => {
        var a;
        (a = s.getValue(r)) === null || a === void 0 || a.set(o);
      });
    }), e.forEach((s) => s.measureEndState()), e.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  bs = !1, xs = !1, fe.forEach((e) => e.complete()), fe.clear();
}
function sa() {
  fe.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (bs = !0);
  });
}
function Mc() {
  sa(), na();
}
class $s {
  constructor(t, n, s, i, r, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (fe.add(this), xs || (xs = !0, X.read(sa), X.resolveKeyframes(na))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: s, motionValue: i } = this;
    for (let r = 0; r < t.length; r++)
      if (t[r] === null)
        if (r === 0) {
          const o = i == null ? void 0 : i.get(), a = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (s && n) {
            const u = s.readValue(n, a);
            u != null && (t[0] = u);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else
          t[r] = t[r - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), fe.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, fe.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ti = (e, t) => (n) => !!(qe(n) && Vl.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), ia = (e, t, n) => (s) => {
  if (!qe(s))
    return s;
  const [i, r, o, a] = s.match(Ks);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(r),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Fc = (e) => ee(0, 255, e), qn = {
  ...Re,
  transform: (e) => Math.round(Fc(e))
}, he = {
  test: ti("rgb", "red"),
  parse: ia("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: s = 1 }) => "rgba(" + qn.transform(e) + ", " + qn.transform(t) + ", " + qn.transform(n) + ", " + je(Le.transform(s)) + ")"
};
function Vc(e) {
  let t = "", n = "", s = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), s = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), s = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, s += s, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Es = {
  test: ti("#"),
  parse: Vc,
  transform: he.transform
}, xe = {
  test: ti("hsl", "hue"),
  parse: ia("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(e) + ", " + _t.transform(je(t)) + ", " + _t.transform(je(n)) + ", " + je(Le.transform(s)) + ")"
}, xt = {
  test: (e) => he.test(e) || Es.test(e) || xe.test(e),
  parse: (e) => he.test(e) ? he.parse(e) : xe.test(e) ? xe.parse(e) : Es.parse(e),
  transform: (e) => qe(e) ? e : e.hasOwnProperty("red") ? he.transform(e) : xe.transform(e)
};
function Bc(e) {
  var t, n;
  return isNaN(e) && qe(e) && (((t = e.match(Ks)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Fl)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ra = "number", oa = "color", Ic = "var", Oc = "var(", Zi = "${}", _c = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ke(e) {
  const t = e.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let r = 0;
  const a = t.replace(_c, (u) => (xt.test(u) ? (s.color.push(r), i.push(oa), n.push(xt.parse(u))) : u.startsWith(Oc) ? (s.var.push(r), i.push(Ic), n.push(u)) : (s.number.push(r), i.push(ra), n.push(parseFloat(u))), ++r, Zi)).split(Zi);
  return { values: n, split: a, indexes: s, types: i };
}
function aa(e) {
  return Ke(e).values;
}
function ua(e) {
  const { split: t, types: n } = Ke(e), s = t.length;
  return (i) => {
    let r = "";
    for (let o = 0; o < s; o++)
      if (r += t[o], i[o] !== void 0) {
        const a = n[o];
        a === ra ? r += je(i[o]) : a === oa ? r += xt.transform(i[o]) : r += i[o];
      }
    return r;
  };
}
const Lc = (e) => typeof e == "number" ? 0 : e;
function jc(e) {
  const t = aa(e);
  return ua(e)(t.map(Lc));
}
const ne = {
  test: Bc,
  parse: aa,
  createTransformer: ua,
  getAnimatableNone: jc
}, Nc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Uc(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [s] = n.match(Ks) || [];
  if (!s)
    return e;
  const i = n.replace(s, "");
  let r = Nc.has(t) ? 1 : 0;
  return s !== n && (r *= 100), t + "(" + r + i + ")";
}
const Yc = /\b([a-z-]*)\(.*?\)/gu, Cs = {
  ...ne,
  getAnimatableNone: (e) => {
    const t = e.match(Yc);
    return t ? t.map(Uc).join(" ") : e;
  }
}, Wc = {
  ...Oo,
  // Color props
  color: xt,
  backgroundColor: xt,
  outlineColor: xt,
  fill: xt,
  stroke: xt,
  // Border props
  borderColor: xt,
  borderTopColor: xt,
  borderRightColor: xt,
  borderBottomColor: xt,
  borderLeftColor: xt,
  filter: Cs,
  WebkitFilter: Cs
}, ei = (e) => Wc[e];
function la(e, t) {
  let n = ei(e);
  return n !== Cs && (n = ne), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Hc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Kc(e, t, n) {
  let s = 0, i;
  for (; s < e.length && !i; ) {
    const r = e[s];
    typeof r == "string" && !Hc.has(r) && Ke(r).values.length && (i = e[s]), s++;
  }
  if (i && n)
    for (const r of t)
      e[r] = la(n, i);
}
class ca extends $s {
  constructor(t, n, s, i) {
    super(t, n, s, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: s } = this;
    if (!n.current)
      return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let c = t[u];
      if (typeof c == "string" && (c = c.trim(), Hs(c))) {
        const l = $o(c, n.current);
        l !== void 0 && (t[u] = l), u === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !Tc.has(s) || t.length !== 2)
      return;
    const [i, r] = t, o = Ji(i), a = Ji(r);
    if (o !== a)
      if (Qi(o) && Qi(a))
        for (let u = 0; u < t.length; u++) {
          const c = t[u];
          typeof c == "string" && (t[u] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, s = [];
    for (let i = 0; i < t.length; i++)
      Ec(t[i]) && s.push(i);
    s.length && Kc(t, s, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: s } = this;
    if (!t.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ke[s](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n.current)
      return;
    const r = n.getValue(s);
    r && r.jump(this.measuredOrigin, !1);
    const o = i.length - 1, a = i[o];
    i[o] = ke[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([u, c]) => {
      n.getValue(u).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function ha(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $i = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ne.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function zc(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Gc(e, t, n, s) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const r = e[e.length - 1], o = $i(i, t), a = $i(r, t);
  return we(o === a, `You are trying to animate ${t} from "${i}" to "${r}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${r} via the \`style\` property.`), !o || !a ? !1 : zc(e) || n === "spring" && s;
}
class da {
  constructor({ autoplay: t = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: r = 0, repeatType: o = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
      autoplay: t,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: r,
      repeatType: o,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Mc(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: r, delay: o, onComplete: a, onUpdate: u, isGenerator: c } = this.options;
    if (!c && !Gc(t, s, i, r))
      if (o)
        this.options.duration = 0;
      else {
        u == null || u(Fn(t, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const l = this.initPlayback(t, n);
    l !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...l
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function fa(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Qc = 5;
function pa(e, t, n) {
  const s = Math.max(t - Qc, 0);
  return fa(n - e(s), t - s);
}
const Xn = 1e-3, qc = 0.01, tr = 10, Xc = 0.05, Jc = 1;
function Zc({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: s = 1 }) {
  let i, r;
  we(e <= Lt(tr), "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = ee(Xc, Jc, o), e = ee(qc, tr, jt(e)), o < 1 ? (i = (c) => {
    const l = c * o, h = l * e, d = l - n, p = ks(c, o), m = Math.exp(-h);
    return Xn - d / p * m;
  }, r = (c) => {
    const h = c * o * e, d = h * n + n, p = Math.pow(o, 2) * Math.pow(c, 2) * e, m = Math.exp(-h), g = ks(Math.pow(c, 2), o);
    return (-i(c) + Xn > 0 ? -1 : 1) * ((d - p) * m) / g;
  }) : (i = (c) => {
    const l = Math.exp(-c * e), h = (c - n) * e + 1;
    return -Xn + l * h;
  }, r = (c) => {
    const l = Math.exp(-c * e), h = (n - c) * (e * e);
    return l * h;
  });
  const a = 5 / e, u = th(i, r, a);
  if (e = Lt(e), isNaN(u))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(u, 2) * s;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(s * c),
      duration: e
    };
  }
}
const $c = 12;
function th(e, t, n) {
  let s = n;
  for (let i = 1; i < $c; i++)
    s = s - e(s) / t(s);
  return s;
}
function ks(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const eh = ["duration", "bounce"], nh = ["stiffness", "damping", "mass"];
function er(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function sh(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!er(e, nh) && er(e, eh)) {
    const n = Zc(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function ni({ keyframes: e, restDelta: t, restSpeed: n, ...s }) {
  const i = e[0], r = e[e.length - 1], o = { done: !1, value: i }, { stiffness: a, damping: u, mass: c, duration: l, velocity: h, isResolvedFromDuration: d } = sh({
    ...s,
    velocity: -jt(s.velocity || 0)
  }), p = h || 0, m = u / (2 * Math.sqrt(a * c)), g = r - i, x = jt(Math.sqrt(a / c)), C = Math.abs(g) < 5;
  n || (n = C ? 0.01 : 2), t || (t = C ? 5e-3 : 0.5);
  let b;
  if (m < 1) {
    const A = ks(x, m);
    b = (S) => {
      const y = Math.exp(-m * x * S);
      return r - y * ((p + m * x * g) / A * Math.sin(A * S) + g * Math.cos(A * S));
    };
  } else if (m === 1)
    b = (A) => r - Math.exp(-x * A) * (g + (p + x * g) * A);
  else {
    const A = x * Math.sqrt(m * m - 1);
    b = (S) => {
      const y = Math.exp(-m * x * S), j = Math.min(A * S, 300);
      return r - y * ((p + m * x * g) * Math.sinh(j) + A * g * Math.cosh(j)) / A;
    };
  }
  return {
    calculatedDuration: d && l || null,
    next: (A) => {
      const S = b(A);
      if (d)
        o.done = A >= l;
      else {
        let y = p;
        A !== 0 && (m < 1 ? y = pa(b, A, S) : y = 0);
        const j = Math.abs(y) <= n, it = Math.abs(r - S) <= t;
        o.done = j && it;
      }
      return o.value = o.done ? r : S, o;
    }
  };
}
function nr({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: u, restDelta: c = 0.5, restSpeed: l }) {
  const h = e[0], d = {
    done: !1,
    value: h
  }, p = (P) => a !== void 0 && P < a || u !== void 0 && P > u, m = (P) => a === void 0 ? u : u === void 0 || Math.abs(a - P) < Math.abs(u - P) ? a : u;
  let g = n * t;
  const x = h + g, C = o === void 0 ? x : o(x);
  C !== x && (g = C - h);
  const b = (P) => -g * Math.exp(-P / s), A = (P) => C + b(P), S = (P) => {
    const Q = b(P), W = A(P);
    d.done = Math.abs(Q) <= c, d.value = d.done ? C : W;
  };
  let y, j;
  const it = (P) => {
    p(d.value) && (y = P, j = ni({
      keyframes: [d.value, m(d.value)],
      velocity: pa(A, P, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: r,
      restDelta: c,
      restSpeed: l
    }));
  };
  return it(0), {
    calculatedDuration: null,
    next: (P) => {
      let Q = !1;
      return !j && y === void 0 && (Q = !0, S(P), it(P)), y !== void 0 && P >= y ? j.next(P - y) : (!Q && S(P), d);
    }
  };
}
const ma = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ih = 1e-7, rh = 12;
function oh(e, t, n, s, i) {
  let r, o, a = 0;
  do
    o = t + (n - t) / 2, r = ma(o, s, i) - e, r > 0 ? n = o : t = o;
  while (Math.abs(r) > ih && ++a < rh);
  return o;
}
function Je(e, t, n, s) {
  if (e === t && n === s)
    return vt;
  const i = (r) => oh(r, 0, 1, e, n);
  return (r) => r === 0 || r === 1 ? r : ma(i(r), t, s);
}
const ah = Je(0.42, 0, 1, 1), uh = Je(0, 0, 0.58, 1), ga = Je(0.42, 0, 0.58, 1), va = (e) => Array.isArray(e) && typeof e[0] != "number", ya = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Aa = (e) => (t) => 1 - e(1 - t), si = (e) => 1 - Math.sin(Math.acos(e)), xa = Aa(si), lh = ya(si), ba = Je(0.33, 1.53, 0.69, 0.99), ii = Aa(ba), ch = ya(ii), hh = (e) => (e *= 2) < 1 ? 0.5 * ii(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), sr = {
  linear: vt,
  easeIn: ah,
  easeInOut: ga,
  easeOut: uh,
  circIn: si,
  circInOut: lh,
  circOut: xa,
  backIn: ii,
  backInOut: ch,
  backOut: ba,
  anticipate: hh
}, ir = (e) => {
  if (Array.isArray(e)) {
    Nt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, s, i] = e;
    return Je(t, n, s, i);
  } else if (typeof e == "string")
    return Nt(sr[e] !== void 0, `Invalid easing type '${e}'`), sr[e];
  return e;
}, Se = (e, t, n) => {
  const s = t - e;
  return s === 0 ? 1 : (n - e) / s;
}, rt = (e, t, n) => e + (t - e) * n;
function Jn(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function dh({ hue: e, saturation: t, lightness: n, alpha: s }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, r = 0, o = 0;
  if (!t)
    i = r = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, u = 2 * n - a;
    i = Jn(u, a, e + 1 / 3), r = Jn(u, a, e), o = Jn(u, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(r * 255),
    blue: Math.round(o * 255),
    alpha: s
  };
}
function fn(e, t) {
  return (n) => n > 0 ? t : e;
}
const Zn = (e, t, n) => {
  const s = e * e, i = n * (t * t - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, fh = [Es, he, xe], ph = (e) => fh.find((t) => t.test(e));
function rr(e) {
  const t = ph(e);
  if (we(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === xe && (n = dh(n)), n;
}
const or = (e, t) => {
  const n = rr(e), s = rr(t);
  if (!n || !s)
    return fn(e, t);
  const i = { ...n };
  return (r) => (i.red = Zn(n.red, s.red, r), i.green = Zn(n.green, s.green, r), i.blue = Zn(n.blue, s.blue, r), i.alpha = rt(n.alpha, s.alpha, r), he.transform(i));
}, Ss = /* @__PURE__ */ new Set(["none", "hidden"]);
function mh(e, t) {
  return Ss.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function gh(e, t) {
  return (n) => rt(e, t, n);
}
function ri(e) {
  return typeof e == "number" ? gh : typeof e == "string" ? Hs(e) ? fn : xt.test(e) ? or : Ah : Array.isArray(e) ? Ea : typeof e == "object" ? xt.test(e) ? or : vh : fn;
}
function Ea(e, t) {
  const n = [...e], s = n.length, i = e.map((r, o) => ri(r)(r, t[o]));
  return (r) => {
    for (let o = 0; o < s; o++)
      n[o] = i[o](r);
    return n;
  };
}
function vh(e, t) {
  const n = { ...e, ...t }, s = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (s[i] = ri(e[i])(e[i], t[i]));
  return (i) => {
    for (const r in s)
      n[r] = s[r](i);
    return n;
  };
}
function yh(e, t) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < t.values.length; r++) {
    const o = t.types[r], a = e.indexes[o][i[o]], u = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    s[r] = u, i[o]++;
  }
  return s;
}
const Ah = (e, t) => {
  const n = ne.createTransformer(t), s = Ke(e), i = Ke(t);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Ss.has(e) && !i.values.length || Ss.has(t) && !s.values.length ? mh(e, t) : zt(Ea(yh(s, i), i.values), n) : (we(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), fn(e, t));
};
function Ca(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? rt(e, t, n) : ri(e)(e, t);
}
function xh(e, t, n) {
  const s = [], i = n || Ca, r = e.length - 1;
  for (let o = 0; o < r; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || vt : t;
      a = zt(u, a);
    }
    s.push(a);
  }
  return s;
}
function ka(e, t, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const r = e.length;
  if (Nt(r === t.length, "Both input and output ranges must be the same length"), r === 1)
    return () => t[0];
  if (r === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[r - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = xh(t, s, i), a = o.length, u = (c) => {
    let l = 0;
    if (a > 1)
      for (; l < e.length - 2 && !(c < e[l + 1]); l++)
        ;
    const h = Se(e[l], e[l + 1], c);
    return o[l](h);
  };
  return n ? (c) => u(ee(e[0], e[r - 1], c)) : u;
}
function Sa(e, t) {
  const n = e[e.length - 1];
  for (let s = 1; s <= t; s++) {
    const i = Se(0, t, s);
    e.push(rt(n, 1, i));
  }
}
function Ta(e) {
  const t = [0];
  return Sa(t, e.length - 1), t;
}
function bh(e, t) {
  return e.map((n) => n * t);
}
function Eh(e, t) {
  return e.map(() => t || ga).splice(0, e.length - 1);
}
function pn({ duration: e = 300, keyframes: t, times: n, ease: s = "easeInOut" }) {
  const i = va(s) ? s.map(ir) : ir(s), r = {
    done: !1,
    value: t[0]
  }, o = bh(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Ta(t),
    e
  ), a = ka(o, t, {
    ease: Array.isArray(i) ? i : Eh(t, i)
  });
  return {
    calculatedDuration: e,
    next: (u) => (r.value = a(u), r.done = u >= e, r)
  };
}
const Ts = 2e4;
function wa(e) {
  let t = 0;
  const n = 50;
  let s = e.next(t);
  for (; !s.done && t < Ts; )
    t += n, s = e.next(t);
  return t >= Ts ? 1 / 0 : t;
}
const Ch = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => X.update(t, !0),
    stop: () => Ut(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => gt.isProcessing ? gt.timestamp : Jt.now()
  };
}, kh = {
  decay: nr,
  inertia: nr,
  tween: pn,
  keyframes: pn,
  spring: ni
}, Sh = (e) => e / 100;
class oi extends da {
  constructor({ KeyframeResolver: t = $s, ...n }) {
    super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: s, motionValue: i, keyframes: r } = this.options, o = (a, u) => this.onKeyframesResolved(a, u);
    s && i && i.owner ? this.resolver = i.owner.resolveKeyframes(r, o, s, i) : this.resolver = new t(r, o, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: r, velocity: o = 0 } = this.options, a = kh[n] || pn;
    let u, c;
    a !== pn && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && Nt(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), u = zt(Sh, Ca(t[0], t[1])), t = [0, 100]);
    const l = a({ ...this.options, keyframes: t });
    r === "mirror" && (c = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), l.calculatedDuration === null && (l.calculatedDuration = wa(l));
    const { calculatedDuration: h } = l, d = h + i, p = d * (s + 1) - i;
    return {
      generator: l,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: i, generator: r, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: u, calculatedDuration: c, totalDuration: l, resolvedDuration: h } = s;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d, repeat: p, repeatType: m, repeatDelay: g, onUpdate: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - l / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const C = this.currentTime - d * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? C < 0 : C > l;
    this.currentTime = Math.max(C, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let A = this.currentTime, S = r;
    if (p) {
      const P = Math.min(this.currentTime, l) / h;
      let Q = Math.floor(P), W = P % 1;
      !W && P >= 1 && (W = 1), W === 1 && Q--, Q = Math.min(Q, p + 1), !!(Q % 2) && (m === "reverse" ? (W = 1 - W, g && (W -= g / h)) : m === "mirror" && (S = o)), A = ee(0, 1, W) * h;
    }
    const y = b ? { done: !1, value: u[0] } : S.next(A);
    a && (y.value = a(y.value));
    let { done: j } = y;
    !b && c !== null && (j = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const it = this.holdTime === null && (this.state === "finished" || this.state === "running" && j);
    return it && i !== void 0 && (y.value = Fn(u, this.options, i)), x && x(y.value), it && this.finish(), y;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? jt(t.calculatedDuration) : 0;
  }
  get time() {
    return jt(this.currentTime);
  }
  set time(t) {
    t = Lt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = jt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = Ch, onPlay: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = s), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Ra = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pa(e) {
  return !!(!e || typeof e == "string" && e in ai || Ra(e) || Array.isArray(e) && e.every(Pa));
}
const _e = ([e, t, n, s]) => `cubic-bezier(${e}, ${t}, ${n}, ${s})`, ai = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: _e([0, 0.65, 0.55, 1]),
  circOut: _e([0.55, 0, 1, 0.45]),
  backIn: _e([0.31, 0.01, 0.66, -0.59]),
  backOut: _e([0.33, 1.53, 0.69, 0.99])
};
function Th(e) {
  return Da(e) || ai.easeOut;
}
function Da(e) {
  if (e)
    return Ra(e) ? _e(e) : Array.isArray(e) ? e.map(Th) : ai[e];
}
function wh(e, t, n, { delay: s = 0, duration: i = 300, repeat: r = 0, repeatType: o = "loop", ease: a, times: u } = {}) {
  const c = { [t]: n };
  u && (c.offset = u);
  const l = Da(a);
  return Array.isArray(l) && (c.easing = l), e.animate(c, {
    delay: s,
    duration: i,
    easing: Array.isArray(l) ? "linear" : l,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const Rh = ha(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Ph = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), mn = 10, Dh = 2e4;
function Mh(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Pa(e.ease);
}
function Fh(e, t) {
  const n = new oi({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: e[0] };
  const i = [];
  let r = 0;
  for (; !s.done && r < Dh; )
    s = n.sample(r), i.push(s.value), r += mn;
  return {
    times: void 0,
    keyframes: i,
    duration: r - mn,
    ease: "linear"
  };
}
class ar extends da {
  constructor(t) {
    super(t);
    const { name: n, motionValue: s, keyframes: i } = this.options;
    this.resolver = new ca(i, (r, o) => this.onKeyframesResolved(r, o), n, s), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var s;
    let { duration: i = 300, times: r, ease: o, type: a, motionValue: u, name: c } = this.options;
    if (!(!((s = u.owner) === null || s === void 0) && s.current))
      return !1;
    if (Mh(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: p, ...m } = this.options, g = Fh(t, m);
      t = g.keyframes, t.length === 1 && (t[1] = t[0]), i = g.duration, r = g.times, o = g.ease, a = "keyframes";
    }
    const l = wh(u.owner.current, c, t, { ...this.options, duration: i, times: r, ease: o });
    return l.startTime = Jt.now(), this.pendingTimeline ? (l.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : l.onfinish = () => {
      const { onComplete: h } = this.options;
      u.set(Fn(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: l,
      duration: i,
      times: r,
      type: a,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return jt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return jt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = Lt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return vt;
      const { animation: s } = n;
      s.timeline = t, s.onfinish = null;
    }
    return vt;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: s, duration: i, type: r, ease: o, times: a } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const { motionValue: u, onUpdate: c, onComplete: l, ...h } = this.options, d = new oi({
          ...h,
          keyframes: s,
          duration: i,
          type: r,
          ease: o,
          times: a,
          isGenerator: !0
        }), p = Lt(this.time);
        u.setWithVelocity(d.sample(p - mn).value, d.sample(p).value, mn);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: r, damping: o, type: a } = t;
    return Rh() && s && Ph.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && r !== "mirror" && o !== 0 && a !== "inertia";
  }
}
function Vh(e, t) {
  let n;
  const s = () => {
    const { currentTime: i } = t, o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), n = o;
  };
  return X.update(s, !0), () => Ut(s);
}
const Bh = ha(() => window.ScrollTimeline !== void 0);
class ui {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((s) => {
      if (Bh() && s.attachTimeline)
        s.attachTimeline(t);
      else
        return s.pause(), Vh((i) => {
          s.time = s.duration * i;
        }, t);
    });
    return () => {
      n.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const li = (e, t, n, s = {}, i, r) => (o) => {
  const a = Zs(s, e) || {}, u = a.delay || s.delay || 0;
  let { elapsed: c = 0 } = s;
  c = c - Lt(u);
  let l = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: r ? void 0 : i
  };
  Ac(a) || (l = {
    ...l,
    ...yc(e, l)
  }), l.duration && (l.duration = Lt(l.duration)), l.repeatDelay && (l.repeatDelay = Lt(l.repeatDelay)), l.from !== void 0 && (l.keyframes[0] = l.from);
  let h = !1;
  if ((l.type === !1 || l.duration === 0 && !l.repeatDelay) && (l.duration = 0, l.delay === 0 && (h = !0)), h && !r && t.get() !== void 0) {
    const d = Fn(l.keyframes, a);
    if (d !== void 0)
      return X.update(() => {
        l.onUpdate(d), l.onComplete();
      }), new ui([]);
  }
  return !r && ar.supports(l) ? new ar(l) : new oi(l);
};
function gn(e) {
  return !!(ft(e) && e.add);
}
function ci(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Vn(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class hi {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ci(this.subscriptions, t), () => Vn(this.subscriptions, t);
  }
  notify(t, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, s);
      else
        for (let r = 0; r < i; r++) {
          const o = this.subscriptions[r];
          o && o(t, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ur = /* @__PURE__ */ new Set();
function Bn(e, t, n) {
  e || ur.has(t) || (console.warn(t), ur.add(t));
}
const lr = 30, Ih = (e) => !isNaN(parseFloat(e)), Ne = {
  current: void 0
};
class Oh {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.2.12", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const r = Jt.now();
      this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Jt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Ih(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Bn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new hi());
    const s = this.events[t].add(n);
    return t === "change" ? () => {
      s(), X.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Ne.current && Ne.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Jt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > lr)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, lr);
    return fa(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Te(e, t) {
  return new Oh(e, t);
}
function _h(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Te(n));
}
function Lh(e, t) {
  const n = Mn(e, t);
  let { transitionEnd: s = {}, transition: i = {}, ...r } = n || {};
  r = { ...r, ...s };
  for (const o in r) {
    const a = ql(r[o]);
    _h(e, o, a);
  }
}
function Ma(e) {
  return e.getProps()[Ro];
}
function jh({ protectedKeys: e, needsAnimating: t }, n) {
  const s = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, s;
}
function di(e, t, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var r;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...u } = t;
  const c = e.getValue("willChange");
  s && (o = s);
  const l = [], h = i && e.animationState && e.animationState.getState()[i];
  for (const d in u) {
    const p = e.getValue(d, (r = e.latestValues[d]) !== null && r !== void 0 ? r : null), m = u[d];
    if (m === void 0 || h && jh(h, d))
      continue;
    const g = {
      delay: n,
      elapsed: 0,
      ...Zs(o || {}, d)
    };
    let x = !1;
    if (window.HandoffAppearAnimations) {
      const b = Ma(e);
      if (b) {
        const A = window.HandoffAppearAnimations(b, d, p, X);
        A !== null && (g.elapsed = A, x = !0);
      }
    }
    p.start(li(d, p, m, e.shouldReduceMotion && me.has(d) ? { type: !1 } : g, e, x));
    const C = p.animation;
    C && (gn(c) && (c.add(d), C.then(() => c.remove(d))), l.push(C));
  }
  return a && Promise.all(l).then(() => {
    X.update(() => {
      a && Lh(e, a);
    });
  }), l;
}
function ws(e, t, n = {}) {
  var s;
  const i = Mn(e, t, n.type === "exit" ? (s = e.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: r = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (r = n.transitionOverride);
  const o = i ? () => Promise.all(di(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: l = 0, staggerChildren: h, staggerDirection: d } = r;
    return Nh(e, t, l + c, h, d, n);
  } : () => Promise.resolve(), { when: u } = r;
  if (u) {
    const [c, l] = u === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => l());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function Nh(e, t, n = 0, s = 0, i = 1, r) {
  const o = [], a = (e.variantChildren.size - 1) * s, u = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return Array.from(e.variantChildren).sort(Uh).forEach((c, l) => {
    c.notify("AnimationStart", t), o.push(ws(c, t, {
      ...r,
      delay: n + u(l)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function Uh(e, t) {
  return e.sortNodePosition(t);
}
function Yh(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let s;
  if (Array.isArray(t)) {
    const i = t.map((r) => ws(e, r, n));
    s = Promise.all(i);
  } else if (typeof t == "string")
    s = ws(e, t, n);
  else {
    const i = typeof t == "function" ? Mn(e, t, n.custom) : t;
    s = Promise.all(di(e, i, n));
  }
  return s.then(() => {
    X.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const Wh = [...Ns].reverse(), Hh = Ns.length;
function Kh(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: s }) => Yh(e, n, s)));
}
function zh(e) {
  let t = Kh(e), n = cr(), s = !0;
  const i = (u) => (c, l) => {
    var h;
    const d = Mn(e, l, u === "exit" ? (h = e.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: m, ...g } = d;
      c = { ...c, ...g, ...m };
    }
    return c;
  };
  function r(u) {
    t = u(e);
  }
  function o(u) {
    const c = e.getProps(), l = e.getVariantContext(!0) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let x = 0; x < Hh; x++) {
      const C = Wh[x], b = n[C], A = c[C] !== void 0 ? c[C] : l[C], S = He(A), y = C === u ? b.isActive : null;
      y === !1 && (m = x);
      let j = A === l[C] && A !== c[C] && S;
      if (j && s && e.manuallyAnimateOnMount && (j = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && y === null || // If we didn't and don't have any defined prop for this animation type
      !A && !b.prevProp || // Or if the prop doesn't define an animation
      wn(A) || typeof A == "boolean")
        continue;
      let P = Gh(b.prevProp, A) || // If we're making this variant active, we want to always make it active
      C === u && b.isActive && !j && S || // If we removed a higher-priority variant (i is in reverse order)
      x > m && S, Q = !1;
      const W = Array.isArray(A) ? A : [A];
      let pt = W.reduce(i(C), {});
      y === !1 && (pt = {});
      const { prevResolvedValues: Tt = {} } = b, at = {
        ...Tt,
        ...pt
      }, et = (J) => {
        P = !0, d.has(J) && (Q = !0, d.delete(J)), b.needsAnimating[J] = !0;
        const nt = e.getValue(J);
        nt && (nt.liveStyle = !1);
      };
      for (const J in at) {
        const nt = pt[J], dt = Tt[J];
        if (p.hasOwnProperty(J))
          continue;
        let yt = !1;
        ys(nt) && ys(dt) ? yt = !Xo(nt, dt) : yt = nt !== dt, yt ? nt != null ? et(J) : d.add(J) : nt !== void 0 && d.has(J) ? et(J) : b.protectedKeys[J] = !0;
      }
      b.prevProp = A, b.prevResolvedValues = pt, b.isActive && (p = { ...p, ...pt }), s && e.blockInitialAnimation && (P = !1), P && (!j || Q) && h.push(...W.map((J) => ({
        animation: J,
        options: { type: C }
      })));
    }
    if (d.size) {
      const x = {};
      d.forEach((C) => {
        const b = e.getBaseTarget(C), A = e.getValue(C);
        A && (A.liveStyle = !0), x[C] = b ?? null;
      }), h.push({ animation: x });
    }
    let g = !!h.length;
    return s && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1), s = !1, g ? t(h) : Promise.resolve();
  }
  function a(u, c) {
    var l;
    if (n[u].isActive === c)
      return Promise.resolve();
    (l = e.variantChildren) === null || l === void 0 || l.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(u, c);
    }), n[u].isActive = c;
    const h = o(u);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = cr(), s = !0;
    }
  };
}
function Gh(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xo(t, e) : !1;
}
function ae(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function cr() {
  return {
    animate: ae(!0),
    whileInView: ae(),
    whileHover: ae(),
    whileTap: ae(),
    whileDrag: ae(),
    whileFocus: ae(),
    exit: ae()
  };
}
class Qh extends ie {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = zh(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    wn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let qh = 0;
class Xh extends ie {
  constructor() {
    super(...arguments), this.id = qh++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Jh = {
  animation: {
    Feature: Qh
  },
  exit: {
    Feature: Xh
  }
}, hr = (e, t) => Math.abs(e - t);
function Zh(e, t) {
  const n = hr(e.x, t.x), s = hr(e.y, t.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Fa {
  constructor(t, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: r = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = ts(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = Zh(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: m } = h, { timestamp: g } = gt;
      this.history.push({ ...m, timestamp: g });
      const { onStart: x, onMove: C } = this.handlers;
      d || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), C && C(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = $n(d, this.transformPagePoint), X.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: m, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = ts(h.type === "pointercancel" ? this.lastMoveEventInfo : $n(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, x), m && m(h, x);
    }, !Ko(t))
      return;
    this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const o = Dn(t), a = $n(o, this.transformPagePoint), { point: u } = a, { timestamp: c } = gt;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: l } = n;
    l && l(t, ts(a, this.history)), this.removeListeners = zt(Kt(this.contextWindow, "pointermove", this.handlePointerMove), Kt(this.contextWindow, "pointerup", this.handlePointerUp), Kt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ut(this.updatePoint);
  }
}
function $n(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dr(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ts({ point: e }, t) {
  return {
    point: e,
    delta: dr(e, Va(t)),
    offset: dr(e, $h(t)),
    velocity: td(t, 0.1)
  };
}
function $h(e) {
  return e[0];
}
function Va(e) {
  return e[e.length - 1];
}
function td(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, s = null;
  const i = Va(e);
  for (; n >= 0 && (s = e[n], !(i.timestamp - s.timestamp > Lt(t))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const r = jt(i.timestamp - s.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - s.x) / r,
    y: (i.y - s.y) / r
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Dt(e) {
  return e.max - e.min;
}
function Rs(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function fr(e, t, n, s = 0.5) {
  e.origin = s, e.originPoint = rt(t.min, t.max, e.origin), e.scale = Dt(n) / Dt(t), (Rs(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = rt(n.min, n.max, e.origin) - e.originPoint, (Rs(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ue(e, t, n, s) {
  fr(e.x, t.x, n.x, s ? s.originX : void 0), fr(e.y, t.y, n.y, s ? s.originY : void 0);
}
function pr(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Dt(t);
}
function ed(e, t, n) {
  pr(e.x, t.x, n.x), pr(e.y, t.y, n.y);
}
function mr(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Dt(t);
}
function Ye(e, t, n) {
  mr(e.x, t.x, n.x), mr(e.y, t.y, n.y);
}
function nd(e, { min: t, max: n }, s) {
  return t !== void 0 && e < t ? e = s ? rt(t, e, s.min) : Math.max(e, t) : n !== void 0 && e > n && (e = s ? rt(n, e, s.max) : Math.min(e, n)), e;
}
function gr(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function sd(e, { top: t, left: n, bottom: s, right: i }) {
  return {
    x: gr(e.x, n, i),
    y: gr(e.y, t, s)
  };
}
function vr(e, t) {
  let n = t.min - e.min, s = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s };
}
function id(e, t) {
  return {
    x: vr(e.x, t.x),
    y: vr(e.y, t.y)
  };
}
function rd(e, t) {
  let n = 0.5;
  const s = Dt(e), i = Dt(t);
  return i > s ? n = Se(t.min, t.max - s, e.min) : s > i && (n = Se(e.min, e.max - i, t.min)), ee(0, 1, n);
}
function od(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ps = 0.35;
function ad(e = Ps) {
  return e === !1 ? e = 0 : e === !0 && (e = Ps), {
    x: yr(e, "left", "right"),
    y: yr(e, "top", "bottom")
  };
}
function yr(e, t, n) {
  return {
    min: Ar(e, t),
    max: Ar(e, n)
  };
}
function Ar(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xr = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), be = () => ({
  x: xr(),
  y: xr()
}), br = () => ({ min: 0, max: 0 }), lt = () => ({
  x: br(),
  y: br()
});
function It(e) {
  return [e("x"), e("y")];
}
function Ba({ top: e, left: t, right: n, bottom: s }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: s }
  };
}
function ud({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ld(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), s = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function es(e) {
  return e === void 0 || e === 1;
}
function Ds({ scale: e, scaleX: t, scaleY: n }) {
  return !es(e) || !es(t) || !es(n);
}
function ue(e) {
  return Ds(e) || Ia(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Ia(e) {
  return Er(e.x) || Er(e.y);
}
function Er(e) {
  return e && e !== "0%";
}
function vn(e, t, n) {
  const s = e - n, i = t * s;
  return n + i;
}
function Cr(e, t, n, s, i) {
  return i !== void 0 && (e = vn(e, i, s)), vn(e, n, s) + t;
}
function Ms(e, t = 0, n = 1, s, i) {
  e.min = Cr(e.min, t, n, s, i), e.max = Cr(e.max, t, n, s, i);
}
function Oa(e, { x: t, y: n }) {
  Ms(e.x, t.translate, t.scale, t.originPoint), Ms(e.y, n.translate, n.scale, n.originPoint);
}
function cd(e, t, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let r, o;
  for (let a = 0; a < i; a++) {
    r = n[a], o = r.projectionDelta;
    const u = r.instance;
    u && u.style && u.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && Ee(e, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Oa(e, o)), s && ue(r.latestValues) && Ee(e, r.latestValues));
  }
  t.x = kr(t.x), t.y = kr(t.y);
}
function kr(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Xt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Sr(e, t, [n, s, i]) {
  const r = t[i] !== void 0 ? t[i] : 0.5, o = rt(e.min, e.max, r);
  Ms(e, t[n], t[s], o, t.scale);
}
const hd = ["x", "scaleX", "originX"], dd = ["y", "scaleY", "originY"];
function Ee(e, t) {
  Sr(e.x, t, hd), Sr(e.y, t, dd);
}
function _a(e, t) {
  return Ba(ld(e.getBoundingClientRect(), t));
}
function fd(e, t, n) {
  const s = _a(e, n), { scroll: i } = t;
  return i && (Xt(s.x, i.offset.x), Xt(s.y, i.offset.y)), s;
}
const La = ({ current: e }) => e ? e.ownerDocument.defaultView : null, pd = /* @__PURE__ */ new WeakMap();
class md {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = lt(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (l) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Dn(l, "page").point);
    }, r = (l, h) => {
      const { drag: d, dragPropagation: p, onDragStart: m } = this.getProps();
      if (d && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Go(d), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), It((x) => {
        let C = this.getAxisMotionValue(x).get() || 0;
        if (_t.test(C)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const A = b.layout.layoutBox[x];
            A && (C = Dt(A) * (parseFloat(C) / 100));
          }
        }
        this.originPoint[x] = C;
      }), m && X.postRender(() => m(l, h));
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, o = (l, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: m, onDrag: g } = this.getProps();
      if (!d && !this.openGlobalLock)
        return;
      const { offset: x } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = gd(x), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, x), this.updateAxis("y", h.point, x), this.visualElement.render(), g && g(l, h);
    }, a = (l, h) => this.stop(l, h), u = () => It((l) => {
      var h;
      return this.getAnimationState(l) === "paused" && ((h = this.getAxisMotionValue(l).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Fa(t, {
      onSessionStart: i,
      onStart: r,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: La(this.visualElement)
    });
  }
  stop(t, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: r } = this.getProps();
    r && X.postRender(() => r(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !en(t, i, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + s[t];
    this.constraints && this.constraints[t] && (o = nd(o, this.constraints[t], this.elastic[t])), r.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, r = this.constraints;
    n && Ae(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = sd(i.layoutBox, n) : this.constraints = !1, this.elastic = ad(s), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && It((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = od(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ae(t))
      return !1;
    const s = t.current;
    Nt(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const r = fd(s, i.root, this.visualElement.getTransformPagePoint());
    let o = id(i.layout.layoutBox, r);
    if (n) {
      const a = n(ud(o));
      this.hasMutatedConstraints = !!a, a && (o = Ba(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), u = this.constraints || {}, c = It((l) => {
      if (!en(l, n, this.currentDirection))
        return;
      let h = u && u[l] || {};
      o && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, p = i ? 40 : 1e7, m = {
        type: "inertia",
        velocity: s ? t[l] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...h
      };
      return this.startAxisValueAnimation(l, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const s = this.getAxisMotionValue(t);
    return s.start(li(t, s, 0, n, this.visualElement));
  }
  stopAnimation() {
    It((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    It((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    It((n) => {
      const { drag: s } = this.getProps();
      if (!en(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, r = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        r.set(t[n] - rt(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Ae(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    It((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[o] = rd({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), It((o) => {
      if (!en(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: u, max: c } = this.constraints[o];
      a.set(rt(u, c, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    pd.set(this.visualElement, this);
    const t = this.visualElement.current, n = Kt(t, "pointerdown", (u) => {
      const { drag: c, dragListener: l = !0 } = this.getProps();
      c && l && this.start(u);
    }), s = () => {
      const { dragConstraints: u } = this.getProps();
      Ae(u) && u.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, r = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), X.read(s);
    const o = Wt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
      this.isDragging && c && (It((l) => {
        const h = this.getAxisMotionValue(l);
        h && (this.originPoint[l] += u[l].translate, h.set(h.get() + u[l].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), r(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: r = !1, dragElastic: o = Ps, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function en(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function gd(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class vd extends ie {
  constructor(t) {
    super(t), this.removeGroupControls = vt, this.removeListeners = vt, this.controls = new md(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || vt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Tr = (e) => (t, n) => {
  e && X.postRender(() => e(t, n));
};
class yd extends ie {
  constructor() {
    super(...arguments), this.removePointerDownListener = vt;
  }
  onPointerDown(t) {
    this.session = new Fa(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: La(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Tr(t),
      onStart: Tr(n),
      onMove: s,
      onEnd: (r, o) => {
        delete this.session, i && X.postRender(() => i(r, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Kt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Ad() {
  const e = ht(Sn);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: s } = e, i = En();
  return Pt(() => s(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const ln = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function wr(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Be = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (B.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = wr(e, t.target.x), s = wr(e, t.target.y);
    return `${n}% ${s}%`;
  }
}, xd = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const s = e, i = ne.parse(e);
    if (i.length > 5)
      return s;
    const r = ne.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, u = n.y.scale * t.y;
    i[0 + o] /= a, i[1 + o] /= u;
    const c = rt(a, u, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), r(i);
  }
};
class bd extends Zu {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: r } = t;
    Sl(Ed), r && (n.group && n.group.add(r), s && s.register && i && s.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), ln.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: r } = this.props, o = s.projection;
    return o && (o.isPresent = r, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? o.promote() : o.relegate() || X.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), js.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ja(e) {
  const [t, n] = Ad(), s = ht(Ys);
  return R.jsx(bd, { ...e, layoutGroup: s, switchLayoutGroup: ht(Do), isPresent: t, safeToRemove: n });
}
const Ed = {
  borderRadius: {
    ...Be,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Be,
  borderTopRightRadius: Be,
  borderBottomLeftRadius: Be,
  borderBottomRightRadius: Be,
  boxShadow: xd
}, Na = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Cd = Na.length, Rr = (e) => typeof e == "string" ? parseFloat(e) : e, Pr = (e) => typeof e == "number" || B.test(e);
function kd(e, t, n, s, i, r) {
  i ? (e.opacity = rt(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Sd(s)
  ), e.opacityExit = rt(t.opacity !== void 0 ? t.opacity : 1, 0, Td(s))) : r && (e.opacity = rt(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let o = 0; o < Cd; o++) {
    const a = `border${Na[o]}Radius`;
    let u = Dr(t, a), c = Dr(n, a);
    if (u === void 0 && c === void 0)
      continue;
    u || (u = 0), c || (c = 0), u === 0 || c === 0 || Pr(u) === Pr(c) ? (e[a] = Math.max(rt(Rr(u), Rr(c), s), 0), (_t.test(c) || _t.test(u)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = rt(t.rotate || 0, n.rotate || 0, s));
}
function Dr(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Sd = Ua(0, 0.5, xa), Td = Ua(0.5, 0.95, vt);
function Ua(e, t, n) {
  return (s) => s < e ? 0 : s > t ? 1 : n(Se(e, t, s));
}
function Mr(e, t) {
  e.min = t.min, e.max = t.max;
}
function Bt(e, t) {
  Mr(e.x, t.x), Mr(e.y, t.y);
}
function Fr(e, t, n, s, i) {
  return e -= t, e = vn(e, 1 / n, s), i !== void 0 && (e = vn(e, 1 / i, s)), e;
}
function wd(e, t = 0, n = 1, s = 0.5, i, r = e, o = e) {
  if (_t.test(t) && (t = parseFloat(t), t = rt(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = rt(r.min, r.max, s);
  e === r && (a -= t), e.min = Fr(e.min, t, n, a, i), e.max = Fr(e.max, t, n, a, i);
}
function Vr(e, t, [n, s, i], r, o) {
  wd(e, t[n], t[s], t[i], t.scale, r, o);
}
const Rd = ["x", "scaleX", "originX"], Pd = ["y", "scaleY", "originY"];
function Br(e, t, n, s) {
  Vr(e.x, t, Rd, n ? n.x : void 0, s ? s.x : void 0), Vr(e.y, t, Pd, n ? n.y : void 0, s ? s.y : void 0);
}
function Ir(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ya(e) {
  return Ir(e.x) && Ir(e.y);
}
function Dd(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Wa(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Or(e) {
  return Dt(e.x) / Dt(e.y);
}
class Md {
  constructor() {
    this.members = [];
  }
  add(t) {
    ci(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Vn(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const r = this.members[i];
      if (r.isPresent !== !1) {
        s = r;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(t, n) {
    const s = this.lead;
    if (t !== s && (this.prevLead = s, this.lead = t, t.show(), s)) {
      s.instance && s.scheduleRender(), t.scheduleRender(), t.resumeFrom = s, n && (t.resumeFrom.preserveOpacity = !0), s.snapshot && (t.snapshot = s.snapshot, t.snapshot.latestValues = s.animationValues || s.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: s } = t;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function _r(e, t, n) {
  let s = "";
  const i = e.x.translate / t.x, r = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((i || r || o) && (s = `translate3d(${i}px, ${r}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (s += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: l, rotateX: h, rotateY: d, skewX: p, skewY: m } = n;
    c && (s = `perspective(${c}px) ${s}`), l && (s += `rotate(${l}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), p && (s += `skewX(${p}deg) `), m && (s += `skewY(${m}deg) `);
  }
  const a = e.x.scale * t.x, u = e.y.scale * t.y;
  return (a !== 1 || u !== 1) && (s += `scale(${a}, ${u})`), s || "none";
}
const Fd = (e, t) => e.depth - t.depth;
class Vd {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ci(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Vn(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Fd), this.isDirty = !1, this.children.forEach(t);
  }
}
function Bd(e, t) {
  const n = Jt.now(), s = ({ timestamp: i }) => {
    const r = i - n;
    r >= t && (Ut(s), e(r - t));
  };
  return X.read(s, !0), () => Ut(s);
}
function Id(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Ha(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function fi(e, t, n) {
  const s = ft(e) ? e : Te(e);
  return s.start(li("", s, t, n)), s.animation;
}
const ns = ["", "X", "Y", "Z"], Od = { visibility: "hidden" }, Lr = 1e3;
let _d = 0;
const le = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function ss(e, t, n, s) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), s && (s[e] = 0));
}
function Ka(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return !1;
  const { visualElement: t } = e.options;
  return t ? Ma(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? Ka(e.parent) : !1 : !1;
}
function za({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = _d++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, le.totalNodes = le.resolvedTargetDeltas = le.recalculatedProjection = 0, this.nodes.forEach(Nd), this.nodes.forEach(Kd), this.nodes.forEach(zd), this.nodes.forEach(Ud), Id(le);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vd());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new hi()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Ha(o), this.instance = o;
      const { layoutId: u, layout: c, visualElement: l } = this.options;
      if (l && !l.current && l.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || u) && (this.isLayoutDirty = !0), e) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Bd(d, 250), ln.hasAnimatedSinceResize && (ln.hasAnimatedSinceResize = !1, this.nodes.forEach(Nr));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && l && (u || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || l.getDefaultTransition() || Jd, { onLayoutAnimationStart: x, onLayoutAnimationComplete: C } = l.getProps(), b = !this.targetLayout || !Wa(this.targetLayout, m) || p, A = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || A || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, A);
          const S = {
            ...Zs(g, "layout"),
            onPlay: x,
            onComplete: C
          };
          (l.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          d || Nr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ut(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Gd), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.HandoffCancelAllAnimations && Ka(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let l = 0; l < this.path.length; l++) {
        const h = this.path[l];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jr);
        return;
      }
      this.isUpdating || this.nodes.forEach(Wd), this.isUpdating = !1, this.nodes.forEach(Hd), this.nodes.forEach(Ld), this.nodes.forEach(jd), this.clearAllSnapshots();
      const a = Jt.now();
      gt.delta = ee(0, 1e3 / 60, a - gt.timestamp), gt.timestamp = a, gt.isProcessing = !0, zn.update.process(gt), zn.preRender.process(gt), zn.render.process(gt), gt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, js.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Yd), this.sharedNodes.forEach(Qd);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, X.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      X.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++)
          this.path[u].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = lt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: o,
        isRoot: s(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ya(this.projectionDelta), u = this.getTransformTemplate(), c = u ? u(this.latestValues, "") : void 0, l = c !== this.prevTransformTemplateValue;
      o && (a || ue(this.latestValues) || l) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return o && (u = this.removeTransform(u)), Zd(u), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: u,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return lt();
      const a = o.measureViewportBox(), { scroll: u } = this.root;
      return u && (Xt(a.x, u.offset.x), Xt(a.y, u.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = lt();
      Bt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: l, options: h } = c;
        if (c !== this.root && l && h.layoutScroll) {
          if (l.isRoot) {
            Bt(a, o);
            const { scroll: d } = this.root;
            d && (Xt(a.x, -d.offset.x), Xt(a.y, -d.offset.y));
          }
          Xt(a.x, l.offset.x), Xt(a.y, l.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const u = lt();
      Bt(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        !a && l.options.layoutScroll && l.scroll && l !== l.root && Ee(u, {
          x: -l.scroll.offset.x,
          y: -l.scroll.offset.y
        }), ue(l.latestValues) && Ee(u, l.latestValues);
      }
      return ue(this.latestValues) && Ee(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = lt();
      Bt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !ue(c.latestValues))
          continue;
        Ds(c.latestValues) && c.updateSnapshot();
        const l = lt(), h = c.measurePageBox();
        Bt(l, h), Br(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, l);
      }
      return ue(this.latestValues) && Br(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== gt.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== u;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = gt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = lt(), this.relativeTargetOrigin = lt(), Ye(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = lt(), this.targetWithTransforms = lt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ed(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Bt(this.target, this.layout.layoutBox), Oa(this.target, this.targetDelta)) : Bt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = lt(), this.relativeTargetOrigin = lt(), Ye(this.relativeTargetOrigin, this.target, p.target), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          le.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ds(this.parent.latestValues) || Ia(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), u = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === gt.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || h))
        return;
      Bt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      cd(this.layoutCorrected, this.treeScale, this.path, u), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = lt());
      const { target: m } = a;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = be(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = be(), this.projectionDeltaWithTransform = be());
      const g = this.projectionTransform;
      Ue(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = _r(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== d || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), le.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot, c = u ? u.latestValues : {}, l = { ...this.latestValues }, h = be();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = lt(), p = u ? u.source : void 0, m = this.layout ? this.layout.source : void 0, g = p !== m, x = this.getStack(), C = !x || x.members.length <= 1, b = !!(g && !C && this.options.crossfade === !0 && !this.path.some(Xd));
      this.animationProgress = 0;
      let A;
      this.mixTargetDelta = (S) => {
        const y = S / 1e3;
        Ur(h.x, o.x, y), Ur(h.y, o.y, y), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ye(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), qd(this.relativeTarget, this.relativeTargetOrigin, d, y), A && Dd(this.relativeTarget, A) && (this.isProjectionDirty = !1), A || (A = lt()), Bt(A, this.relativeTarget)), g && (this.animationValues = l, kd(l, c, this.latestValues, y, b, C)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = y;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ut(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = X.update(() => {
        ln.hasAnimatedSinceResize = !0, this.currentAnimation = fi(0, Lr, {
          ...o,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Lr), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: u, layout: c, latestValues: l } = o;
      if (!(!a || !u || !c)) {
        if (this !== o && this.layout && c && Ga(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          u = this.target || lt();
          const h = Dt(this.layout.layoutBox.x);
          u.x.min = o.target.x.min, u.x.max = u.x.min + h;
          const d = Dt(this.layout.layoutBox.y);
          u.y.min = o.target.y.min, u.y.max = u.y.min + d;
        }
        Bt(a, u), Ee(a, l), Ue(this.projectionDeltaWithTransform, this.layoutCorrected, a, l);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Md()), this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: u } = o;
      if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = !0), !a)
        return;
      const c = {};
      u.z && ss("z", o, c, this.animationValues);
      for (let l = 0; l < ns.length; l++)
        ss(`rotate${ns[l]}`, o, c, this.animationValues), ss(`skew${ns[l]}`, o, c, this.animationValues);
      o.render();
      for (const l in c)
        o.setStaticValue(l, c[l]), this.animationValues && (this.animationValues[l] = c[l]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Od;
      const c = {
        visibility: ""
      }, l = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = an(o == null ? void 0 : o.pointerEvents) || "", c.transform = l ? l(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = an(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !ue(this.latestValues) && (g.transform = l ? l({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = _r(this.projectionDeltaWithTransform, this.treeScale, d), l && (c.transform = l(d, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (u = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in hn) {
        if (d[g] === void 0)
          continue;
        const { correct: x, applyTo: C } = hn[g], b = c.transform === "none" ? d[g] : x(d[g], h);
        if (C) {
          const A = C.length;
          for (let S = 0; S < A; S++)
            c[C[S]] = b;
        } else
          c[g] = b;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? an(o == null ? void 0 : o.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(jr), this.root.sharedNodes.clear();
    }
  };
}
function Ld(e) {
  e.updateLayout();
}
function jd(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: r } = e.options, o = n.source !== e.layout.source;
    r === "size" ? It((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], p = Dt(d);
      d.min = s[h].min, d.max = d.min + p;
    }) : Ga(r, n.layoutBox, s) && It((h) => {
      const d = o ? n.measuredBox[h] : n.layoutBox[h], p = Dt(s[h]);
      d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[h].max = e.relativeTarget[h].min + p);
    });
    const a = be();
    Ue(a, s, n.layoutBox);
    const u = be();
    o ? Ue(u, e.applyTransform(i, !0), n.measuredBox) : Ue(u, s, n.layoutBox);
    const c = !Ya(a);
    let l = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const m = lt();
          Ye(m, n.layoutBox, d.layoutBox);
          const g = lt();
          Ye(g, s, p.layoutBox), Wa(m, g) || (l = !0), h.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = h);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l
    });
  } else if (e.isLead()) {
    const { onExitComplete: s } = e.options;
    s && s();
  }
  e.options.transition = void 0;
}
function Nd(e) {
  le.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ud(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Yd(e) {
  e.clearSnapshot();
}
function jr(e) {
  e.clearMeasurements();
}
function Wd(e) {
  e.isLayoutDirty = !1;
}
function Hd(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Nr(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Kd(e) {
  e.resolveTargetDelta();
}
function zd(e) {
  e.calcProjection();
}
function Gd(e) {
  e.resetSkewAndRotation();
}
function Qd(e) {
  e.removeLeadSnapshot();
}
function Ur(e, t, n) {
  e.translate = rt(t.translate, 0, n), e.scale = rt(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Yr(e, t, n, s) {
  e.min = rt(t.min, n.min, s), e.max = rt(t.max, n.max, s);
}
function qd(e, t, n, s) {
  Yr(e.x, t.x, n.x, s), Yr(e.y, t.y, n.y, s);
}
function Xd(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Jd = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Wr = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Hr = Wr("applewebkit/") && !Wr("chrome/") ? Math.round : vt;
function Kr(e) {
  e.min = Hr(e.min), e.max = Hr(e.max);
}
function Zd(e) {
  Kr(e.x), Kr(e.y);
}
function Ga(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Rs(Or(t), Or(n), 0.2);
}
const $d = za({
  attachResizeListener: (e, t) => Wt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), is = {
  current: void 0
}, Qa = za({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!is.current) {
      const e = new $d({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), is.current = e;
    }
    return is.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), tf = {
  pan: {
    Feature: yd
  },
  drag: {
    Feature: vd,
    ProjectionNode: Qa,
    MeasureLayout: ja
  }
}, yn = { current: null }, pi = { current: !1 };
function qa() {
  if (pi.current = !0, !!_s)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => yn.current = e.matches;
      e.addListener(t), t();
    } else
      yn.current = !1;
}
function ef(e, t, n) {
  const { willChange: s } = t;
  for (const i in t) {
    const r = t[i], o = n[i];
    if (ft(r))
      e.addValue(i, r), gn(s) && s.add(i), process.env.NODE_ENV === "development" && Bn(r.version === "11.2.12", `Attempting to mix Framer Motion versions ${r.version} with 11.2.12 may not work as expected.`);
    else if (ft(o))
      e.addValue(i, Te(r, { owner: e })), gn(s) && s.remove(i);
    else if (o !== r)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(r) : a.hasAnimated || a.set(r);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, Te(a !== void 0 ? a : r, { owner: e }));
      }
  }
  for (const i in n)
    t[i] === void 0 && e.removeValue(i);
  return t;
}
const ze = /* @__PURE__ */ new WeakMap(), nf = [...ea, xt, ne], sf = (e) => nf.find(ta(e)), zr = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], rf = Us.length;
class of {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, s) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: r, visualState: o }, a = {}) {
    this.resolveKeyframes = (d, p, m, g) => new this.KeyframeResolver(d, p, m, g, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = $s, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => X.render(this.render, !1, !0);
    const { latestValues: u, renderState: c } = o;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = Rn(n), this.isVariantNode = Fo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: l, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      u[d] !== void 0 && ft(p) && (p.set(u[d], !1), gn(l) && l.add(d));
    }
  }
  mount(t) {
    this.current = t, ze.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), pi.current || qa(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : yn.current, process.env.NODE_ENV !== "production" && Bn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ze.delete(this.current), this.projection && this.projection.unmount(), Ut(this.notifyUpdate), Ut(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const s = me.has(t), i = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && X.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), r = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), r(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ce) {
      const n = Ce[t];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[t] && i && s(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const r = this.features[t];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : lt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < zr.length; s++) {
      const i = zr[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const r = "on" + i, o = t[r];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = ef(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const n = {};
    for (let s = 0; s < rf; s++) {
      const i = Us[s], r = this.props[i];
      (He(r) || r === !1) && (n[i] = r);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const s = this.values.get(t);
    n !== s && (s && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let s = this.values.get(t);
    return s === void 0 && n !== void 0 && (s = Te(n === null ? void 0 : n, { owner: this }), this.addValue(t, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Zo(i) || Jo(i)) ? i = parseFloat(i) : !sf(i) && ne.test(n) && (i = la(t, n)), this.setBaseTarget(t, ft(i) ? i.get() : i)), ft(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const o = Js(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (s && i !== void 0)
      return i;
    const r = this.getBaseTargetFromProps(this.props, t);
    return r !== void 0 && !ft(r) ? r : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new hi()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Xa extends of {
  constructor() {
    super(...arguments), this.KeyframeResolver = ca;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: s }) {
    delete n[t], delete s[t];
  }
}
function af(e) {
  return window.getComputedStyle(e);
}
class Ja extends Xa {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(t, n) {
    if (me.has(n)) {
      const s = ei(n);
      return s && s.default || 0;
    } else {
      const s = af(t), i = (Io(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _a(t, n);
  }
  build(t, n, s, i) {
    zs(t, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return Xs(t, n, s);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ft(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, s, i) {
    No(t, n, s, i);
  }
}
class Za extends Xa {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (me.has(n)) {
      const s = ei(n);
      return s && s.default || 0;
    }
    return n = Uo.has(n) ? n : Ls(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return lt();
  }
  scrapeMotionValuesFromProps(t, n, s) {
    return Wo(t, n, s);
  }
  build(t, n, s, i) {
    Qs(t, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, s, i) {
    Yo(t, n, s, i);
  }
  mount(t) {
    this.isSVGTag = qs(t.tagName), super.mount(t);
  }
}
const uf = (e, t) => Ws(e) ? new Za(t, { enableHardwareAcceleration: !1 }) : new Ja(t, {
  allowProjection: e !== Eo,
  enableHardwareAcceleration: !0
}), lf = {
  layout: {
    ProjectionNode: Qa,
    MeasureLayout: ja
  }
}, cf = {
  ...Jh,
  ...fc,
  ...tf,
  ...lf
}, Zt = /* @__PURE__ */ Cl((e, t) => tc(e, t, cf, uf));
function $a() {
  const e = bt(!1);
  return Tn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function hf() {
  const e = $a(), [t, n] = Rt(0), s = te(() => {
    e.current && n(t + 1);
  }, [t]);
  return [te(() => X.postRender(s), [s]), t];
}
class df extends Os.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function ff({ children: e, isPresent: t }) {
  const n = En(), s = bt(null), i = bt({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: r } = ht(Cn);
  return bo(() => {
    const { width: o, height: a, top: u, left: c } = i.current;
    if (t || !s.current || !o || !a)
      return;
    s.current.dataset.motionPopId = n;
    const l = document.createElement("style");
    return r && (l.nonce = r), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(l);
    };
  }, [t]), R.jsx(df, { isPresent: t, childRef: s, sizeRef: i, children: Os.cloneElement(e, { ref: s }) });
}
const rs = ({ children: e, initial: t, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: r, mode: o }) => {
  const a = Pn(pf), u = En(), c = pe(
    () => ({
      id: u,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: (l) => {
        a.set(l, !0);
        for (const h of a.values())
          if (!h)
            return;
        s && s();
      },
      register: (l) => (a.set(l, !1), () => a.delete(l))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    r ? [Math.random()] : [n]
  );
  return pe(() => {
    a.forEach((l, h) => a.set(h, !1));
  }, [n]), Os.useEffect(() => {
    !n && !a.size && s && s();
  }, [n]), o === "popLayout" && (e = R.jsx(ff, { isPresent: n, children: e })), R.jsx(Sn.Provider, { value: c, children: e });
};
function pf() {
  return /* @__PURE__ */ new Map();
}
function mf(e) {
  return Pt(() => () => e(), []);
}
const ce = (e) => e.key || "";
function gf(e, t) {
  e.forEach((n) => {
    const s = ce(n);
    t.set(s, n);
  });
}
function vf(e) {
  const t = [];
  return ko.forEach(e, (n) => {
    $u(n) && t.push(n);
  }), t;
}
const yf = ({ children: e, custom: t, initial: n = !0, onExitComplete: s, exitBeforeEnter: i, presenceAffectsLayout: r = !0, mode: o = "sync" }) => {
  Nt(!i, "Replace exitBeforeEnter with mode='wait'");
  const a = ht(Ys).forceRender || hf()[0], u = $a(), c = vf(e);
  let l = c;
  const h = bt(/* @__PURE__ */ new Map()).current, d = bt(l), p = bt(/* @__PURE__ */ new Map()).current, m = bt(!0);
  if (Tn(() => {
    m.current = !1, gf(c, p), d.current = l;
  }), mf(() => {
    m.current = !0, p.clear(), h.clear();
  }), m.current)
    return R.jsx(R.Fragment, { children: l.map((b) => R.jsx(rs, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: r, mode: o, children: b }, ce(b))) });
  l = [...l];
  const g = d.current.map(ce), x = c.map(ce), C = g.length;
  for (let b = 0; b < C; b++) {
    const A = g[b];
    x.indexOf(A) === -1 && !h.has(A) && h.set(A, void 0);
  }
  return o === "wait" && h.size && (l = []), h.forEach((b, A) => {
    if (x.indexOf(A) !== -1)
      return;
    const S = p.get(A);
    if (!S)
      return;
    const y = g.indexOf(A);
    let j = b;
    if (!j) {
      const it = () => {
        h.delete(A);
        const P = Array.from(p.keys()).filter((Q) => !x.includes(Q));
        if (P.forEach((Q) => p.delete(Q)), d.current = c.filter((Q) => {
          const W = ce(Q);
          return (
            // filter out the node exiting
            W === A || // filter out the leftover children
            P.includes(W)
          );
        }), !h.size) {
          if (u.current === !1)
            return;
          a(), s && s();
        }
      };
      j = R.jsx(rs, { isPresent: !1, onExitComplete: it, custom: t, presenceAffectsLayout: r, mode: o, children: S }, ce(S)), h.set(A, j);
    }
    l.splice(y, 0, j);
  }), l = l.map((b) => {
    const A = b.key;
    return h.has(A) ? b : R.jsx(rs, { isPresent: !0, presenceAffectsLayout: r, mode: o, children: b }, ce(b));
  }), process.env.NODE_ENV !== "production" && o === "wait" && l.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), R.jsx(R.Fragment, { children: h.size ? l : l.map((b) => Co(b)) });
};
function Fs(e) {
  const t = Pn(() => Te(e)), { isStatic: n } = ht(Cn);
  if (n) {
    const [, s] = Rt(e);
    Pt(() => t.on("change", s), []);
  }
  return t;
}
const Af = (e) => e && typeof e == "object" && e.mix, xf = (e) => Af(e) ? e.mix : void 0;
function bf(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, s = e[0 + n], i = e[1 + n], r = e[2 + n], o = e[3 + n], a = ka(i, r, {
    mixer: xf(r[0]),
    ...o
  });
  return t ? a(s) : a;
}
function tu(e, t) {
  const n = Fs(t()), s = () => n.set(t());
  return s(), Tn(() => {
    const i = () => X.preRender(s, !1, !0), r = e.map((o) => o.on("change", i));
    return () => {
      r.forEach((o) => o()), Ut(s);
    };
  }), n;
}
function Ef(e) {
  Ne.current = [], e();
  const t = tu(Ne.current, e);
  return Ne.current = void 0, t;
}
function An(e, t, n, s) {
  if (typeof e == "function")
    return Ef(e);
  const i = typeof t == "function" ? t : bf(t, n, s);
  return Array.isArray(e) ? Gr(e, i) : Gr([e], ([r]) => i(r));
}
function Gr(e, t) {
  const n = Pn(() => []);
  return tu(e, () => {
    n.length = 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
function eu(e, t, n) {
  var s;
  if (typeof e == "string") {
    let i = document;
    n ? ((s = n[e]) !== null && s !== void 0 || (n[e] = i.querySelectorAll(e)), e = n[e]) : e = i.querySelectorAll(e);
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
function Cf() {
  !pi.current && qa();
  const [e] = Rt(yn.current);
  return process.env.NODE_ENV !== "production" && Bn(e !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), e;
}
function kf(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Sf(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = Ha(e) ? new Za(t, {
    enableHardwareAcceleration: !1
  }) : new Ja(t, {
    enableHardwareAcceleration: !0
  });
  n.mount(e), ze.set(e, n);
}
function Tf(e, t = 100) {
  const n = ni({ keyframes: [0, t], ...e }), s = Math.min(wa(n), Ts);
  return {
    type: "keyframes",
    ease: (i) => n.next(s * i).value / t,
    duration: jt(s)
  };
}
function Qr(e, t, n, s) {
  var i;
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = s.get(t)) !== null && i !== void 0 ? i : e;
}
const wf = (e, t, n) => {
  const s = t - e;
  return ((n - e) % s + s) % s + e;
};
function Rf(e, t) {
  return va(e) ? e[wf(0, e.length, t)] : e;
}
function Pf(e, t, n) {
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    i.at > t && i.at < n && (Vn(e, i), s--);
  }
}
function Df(e, t, n, s, i, r) {
  Pf(e, i, r);
  for (let o = 0; o < t.length; o++)
    e.push({
      value: t[o],
      at: rt(i, r, s[o]),
      easing: Rf(n, o)
    });
}
function Mf(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const Ff = "easeInOut";
function Vf(e, { defaultTransition: t = {}, ...n } = {}, s) {
  const i = t.duration || 0.3, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = {}, u = /* @__PURE__ */ new Map();
  let c = 0, l = 0, h = 0;
  for (let d = 0; d < e.length; d++) {
    const p = e[d];
    if (typeof p == "string") {
      u.set(p, l);
      continue;
    } else if (!Array.isArray(p)) {
      u.set(p.name, Qr(l, p.at, c, u));
      continue;
    }
    let [m, g, x = {}] = p;
    x.at !== void 0 && (l = Qr(l, x.at, c, u));
    let C = 0;
    const b = (A, S, y, j = 0, it = 0) => {
      const P = Bf(A), { delay: Q = 0, times: W = Ta(P), type: pt = "keyframes", ...Tt } = S;
      let { ease: at = t.ease || "easeOut", duration: et } = S;
      const J = typeof Q == "function" ? Q(j, it) : Q, nt = P.length;
      if (nt <= 2 && pt === "spring") {
        let v = 100;
        if (nt === 2 && _f(P)) {
          const I = P[1] - P[0];
          v = Math.abs(I);
        }
        const k = { ...Tt };
        et !== void 0 && (k.duration = Lt(et));
        const F = Tf(k, v);
        at = F.ease, et = F.duration;
      }
      et ?? (et = i);
      const dt = l + J, yt = dt + et;
      W.length === 1 && W[0] === 0 && (W[1] = 1);
      const Mt = W.length - P.length;
      Mt > 0 && Sa(W, Mt), P.length === 1 && P.unshift(null), Df(y, P, at, W, dt, yt), C = Math.max(J + et, C), h = Math.max(yt, h);
    };
    if (ft(m)) {
      const A = qr(m, o);
      b(g, x, Xr("default", A));
    } else {
      const A = eu(m, s, a), S = A.length;
      for (let y = 0; y < S; y++) {
        g = g, x = x;
        const j = A[y], it = qr(j, o);
        for (const P in g)
          b(g[P], If(x, P), Xr(P, it), y, S);
      }
    }
    c = l, l += C;
  }
  return o.forEach((d, p) => {
    for (const m in d) {
      const g = d[m];
      g.sort(Mf);
      const x = [], C = [], b = [];
      for (let S = 0; S < g.length; S++) {
        const { at: y, value: j, easing: it } = g[S];
        x.push(j), C.push(Se(0, h, y)), b.push(it || "easeOut");
      }
      C[0] !== 0 && (C.unshift(0), x.unshift(x[0]), b.unshift(Ff)), C[C.length - 1] !== 1 && (C.push(1), x.push(null)), r.has(p) || r.set(p, {
        keyframes: {},
        transition: {}
      });
      const A = r.get(p);
      A.keyframes[m] = x, A.transition[m] = {
        ...t,
        duration: h,
        ease: b,
        times: C,
        ...n
      };
    }
  }), r;
}
function qr(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Xr(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function Bf(e) {
  return Array.isArray(e) ? e : [e];
}
function If(e, t) {
  return e[t] ? {
    ...e,
    ...e[t]
  } : { ...e };
}
const Of = (e) => typeof e == "number", _f = (e) => e.every(Of);
function nu(e, t, n, s) {
  const i = eu(e), r = i.length;
  Nt(!!r, "No valid element provided.");
  const o = [];
  for (let a = 0; a < r; a++) {
    const u = i[a];
    ze.has(u) || Sf(u);
    const c = ze.get(u), l = { ...n };
    typeof l.delay == "function" && (l.delay = l.delay(a, r)), o.push(...di(c, { ...t, transition: l }, {}));
  }
  return new ui(o);
}
const Lf = (e) => Array.isArray(e) && Array.isArray(e[0]);
function jf(e, t, n) {
  const s = [];
  return Vf(e, t, n).forEach(({ keyframes: r, transition: o }, a) => {
    let u;
    ft(a) ? u = fi(a, r.default, o.default) : u = nu(a, r, o), s.push(u);
  }), new ui(s);
}
const Nf = (e) => {
  function t(n, s, i) {
    let r;
    return Lf(n) ? r = jf(n, s, e) : kf(s) ? r = nu(n, s, i) : r = fi(n, s, i), r;
  }
  return t;
}, Jr = Nf(), Uf = typeof document < "u" ? ot.useLayoutEffect : () => {
};
function Vs(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
function mi(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Yf() {
  return mi(/^Mac/i);
}
function Wf() {
  return mi(/^iPhone/i);
}
function Hf() {
  return mi(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Yf() && navigator.maxTouchPoints > 1;
}
function Kf() {
  return Wf() || Hf();
}
function Zr(e, t) {
  let n = window.getComputedStyle(e), s = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return s && t && (s = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), s;
}
function su(e, t) {
  let n = e;
  for (Zr(n, t) && (n = n.parentElement); n && !Zr(n, t); ) n = n.parentElement;
  return n || document.scrollingElement || document.documentElement;
}
var $r = "calc(100% - env(safe-area-inset-top) - 34px)", iu = typeof window > "u", zf = {
  ease: "easeOut",
  duration: 0.2
}, Gf = {
  ease: "linear",
  duration: 0.01
}, Qf = 0.6, qf = 500;
function to(e, t) {
  let n = e[0], s = Math.abs(e[0] - t);
  for (let i = 1; i < e.length; i++) {
    const r = Math.abs(e[i] - t);
    r < s && (n = e[i], s = r);
  }
  return n;
}
function Xf(e) {
  const t = document.querySelector("body"), n = document.querySelector(`#${e}`);
  if (n) {
    const i = window.innerHeight, r = (i - 24) / i;
    t.style.backgroundColor = "#000", n.style.overflow = "hidden", n.style.willChange = "transform", n.style.transition = "transform 200ms ease-in-out, border-radius 200ms linear", n.style.transform = `translateY(calc(env(safe-area-inset-top) + ${24 / 2}px)) scale(${r})`, n.style.borderTopRightRadius = "10px", n.style.borderTopLeftRadius = "10px";
  }
}
function eo(e) {
  const t = document.querySelector("body"), n = document.getElementById(e);
  function s() {
    n.style.removeProperty("overflow"), n.style.removeProperty("will-change"), n.style.removeProperty("transition"), t.style.removeProperty("background-color"), n.removeEventListener("transitionend", s);
  }
  n && (n.style.removeProperty("border-top-right-radius"), n.style.removeProperty("border-top-left-radius"), n.style.removeProperty("transform"), n.addEventListener("transitionend", s));
}
function Jf(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t + 1] > e[t])
      return !1;
  return !0;
}
function no({
  snapTo: e,
  sheetHeight: t
}) {
  return e < 0 && console.warn(
    `Snap point is out of bounds. Sheet height is ${t} but snap point is ${t + Math.abs(e)}.`
  ), Math.max(Math.round(e), 0);
}
function gi(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n && (n.current = t);
    });
  };
}
function Zf() {
  return typeof window > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
var vi = iu ? Pt : xo;
function $f(e, t) {
  const n = ru(e);
  Pt(() => {
    t && !n && e ? Xf(t) : t && !e && n && eo(t);
  }, [e, n]), Pt(() => () => {
    t && e && eo(t);
  }, [e]);
}
function tp(e, t) {
  const n = ru(e), s = bt(!1), i = te(() => {
    var r, o, a, u;
    s.current ? ((u = (a = t.current).onCloseEnd) == null || u.call(a), s.current = !1) : ((o = (r = t.current).onOpenEnd) == null || o.call(r), s.current = !0);
  }, [e, n]);
  return Pt(() => {
    var r, o, a, u;
    !n && e ? (o = (r = t.current).onOpenStart) == null || o.call(r) : !e && n && ((u = (a = t.current).onCloseStart) == null || u.call(a));
  }, [e, n]), { handleAnimationComplete: i };
}
function ep() {
  const [e, t] = Rt({ height: 0, width: 0 });
  return vi(() => {
    function n() {
      t({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    return n(), window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), e;
}
function ru(e) {
  const t = bt();
  return Pt(() => {
    t.current = e;
  }), t.current;
}
function os(e) {
  const t = bt();
  return vi(() => {
    t.current = e;
  }), te((...n) => {
    const s = t.current;
    return s == null ? void 0 : s(...n);
  }, []);
}
var np = { bottom: 0, top: 0, left: 0, right: 0 };
function ou() {
  const e = bt(null), t = te(() => np, []);
  return { constraintsRef: e, onMeasureDragConstraints: t };
}
var au = Qt(
  void 0
), In = () => {
  const e = ht(au);
  if (!e)
    throw Error("Sheet context error");
  return e;
}, uu = Qt(void 0);
function sp({
  children: e
}) {
  const t = In(), [n, s] = Rt(!!t.disableDrag);
  function i() {
    t.disableDrag || s(!1);
  }
  function r() {
    n || s(!0);
  }
  return /* @__PURE__ */ ot.createElement(
    uu.Provider,
    {
      value: { disableDrag: n, setDragEnabled: i, setDragDisabled: r }
    },
    e
  );
}
var lu = () => {
  const e = ht(uu);
  if (!e)
    throw Error("Sheet scroller context error");
  return e;
}, as = typeof window < "u" ? window.visualViewport : void 0, ip = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]), nn = 0, us;
function rp(e = {}) {
  const { isDisabled: t } = e;
  Uf(() => {
    if (!t)
      return nn++, nn === 1 && (Kf() ? us = ap() : us = op()), () => {
        nn--, nn === 0 && us();
      };
  }, [t]);
}
function op() {
  return Vs(
    We(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    We(document.documentElement, "overflow", "hidden")
  );
}
function ap() {
  let e, t = 0;
  const n = (h) => {
    e = su(h.target), !(e === document.documentElement && e === document.body) && (t = h.changedTouches[0].pageY);
  }, s = (h) => {
    if (e === void 0)
      return;
    if (e === document.documentElement || e === document.body) {
      h.preventDefault();
      return;
    }
    const d = h.changedTouches[0].pageY, p = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((p <= 0 && d > t || p >= m && d < t) && h.preventDefault(), t = d);
  }, i = (h) => {
    const d = h.target;
    io(d) && d !== document.activeElement && (h.preventDefault(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    }));
  }, r = (h) => {
    const d = h.target;
    io(d) && (d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", as && (as.height < window.innerHeight ? requestAnimationFrame(() => {
        so(d);
      }) : as.addEventListener(
        "resize",
        () => {
          so(d);
        },
        { once: !0 }
      ));
    }));
  }, o = () => {
    window.scrollTo(0, 0);
  }, a = window.pageXOffset, u = window.pageYOffset, c = Vs(
    We(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    We(document.documentElement, "overflow", "hidden"),
    We(document.body, "marginTop", `-${u}px`)
  );
  window.scrollTo(0, 0);
  const l = Vs(
    Ie(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchmove", s, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchend", i, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "focus", r, !0),
    Ie(window, "scroll", o)
  );
  return () => {
    c(), l(), window.scrollTo(a, u);
  };
}
function We(e, t, n) {
  const s = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = s;
  };
}
function Ie(e, t, n, s) {
  return e.addEventListener(t, n, s), () => {
    e.removeEventListener(t, n, s);
  };
}
function so(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const n = su(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      const s = n.getBoundingClientRect().top, i = e.getBoundingClientRect().top;
      i > s + e.clientHeight && (n.scrollTop += i - s);
    }
    e = n.parentElement;
  }
}
function io(e) {
  return e instanceof HTMLInputElement && !ip.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var up = {
  wrapper: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    pointerEvents: "none"
  },
  backdrop: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    touchAction: "none",
    // Disable iOS body scrolling
    border: "none"
  },
  container: {
    zIndex: 2,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  },
  headerWrapper: {
    width: "100%"
  },
  header: {
    height: "40px",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  indicator: {
    width: "18px",
    height: "4px",
    borderRadius: "99px",
    backgroundColor: "#ddd"
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "0px",
    position: "relative"
  },
  scroller: {
    height: "100%",
    overflowY: "auto"
  }
}, Ht = up, cu = se(
  ({
    onOpenStart: e,
    onOpenEnd: t,
    onClose: n,
    onCloseStart: s,
    onCloseEnd: i,
    onSnap: r,
    children: o,
    disableScrollLocking: a = !1,
    isOpen: u,
    snapPoints: c,
    rootId: l,
    mountPoint: h,
    style: d,
    detent: p = "full-height",
    initialSnap: m = 0,
    disableDrag: g = !1,
    prefersReducedMotion: x = !1,
    tweenConfig: C = zf,
    ...b
  }, A) => {
    const S = bt(null), y = Fs(0), { height: j } = ep(), it = Cf(), P = !!(x || it), Q = {
      type: "tween",
      ...P ? Gf : C
    }, W = Fs(0), pt = An(
      W,
      (v) => v + 2 >= j ? -1 : 9999999
    ), Tt = An(
      W,
      (v) => v + 2 >= j ? "hidden" : "visible"
    ), at = bt({
      onOpenStart: e,
      onOpenEnd: t,
      onCloseStart: s,
      onCloseEnd: i
    });
    vi(() => {
      at.current = {
        onOpenStart: e,
        onOpenEnd: t,
        onCloseStart: s,
        onCloseEnd: i
      };
    }), c && (c = c.map((v) => v > 0 && v <= 1 ? Math.round(v * j) : v < 0 ? j + v : v), console.assert(
      Jf(c) || j === 0,
      `Snap points need to be in descending order got: [${c.join(
        ", "
      )}]`
    ));
    const et = os((v, { delta: k }) => {
      const F = W.getVelocity();
      F > 0 && y.set(10), F < 0 && y.set(-10), W.set(Math.max(W.get() + k.y, 0));
    }), J = os(() => {
      const v = document.activeElement;
      if (!v || !S.current)
        return;
      (v.tagName === "INPUT" || v.tagName === "TEXTAREA") && S.current.contains(v) && v.blur();
    }), nt = os((v, { velocity: k }) => {
      if (k.y > qf)
        n();
      else {
        const F = S.current.getBoundingClientRect().height, I = W.get();
        let V = 0;
        if (c) {
          const O = c.map(
            (U) => F - Math.min(U, F)
          );
          p === "content-height" && !O.includes(0) && O.unshift(0), V = to(O, I);
        } else I / F > Qf && (V = F);
        if (V = no({ snapTo: V, sheetHeight: F }), Jr(W, V, Q), c && r) {
          const O = Math.abs(Math.round(c[0] - V)), U = c.indexOf(to(c, O));
          r(U);
        }
        const K = Math.round(F);
        V + 2 >= K && n();
      }
      y.set(0);
    });
    Pt(() => {
      if (!c || !r)
        return;
      const v = u ? m : c.length - 1;
      r(v);
    }, [u]), tl(A, () => ({
      y: W,
      snapTo: (v) => {
        const k = S.current;
        if ((c == null ? void 0 : c[v]) !== void 0 && k) {
          const F = k.getBoundingClientRect().height, I = c[v], V = no({
            snapTo: F - I,
            sheetHeight: F
          });
          Jr(W, V, Q), r && r(v), V >= F && n();
        }
      }
    })), $f(u, l), rp({ isDisabled: a || !u });
    const dt = pe(() => g ? void 0 : {
      drag: "y",
      dragElastic: 0,
      dragMomentum: !1,
      dragPropagation: !1,
      onDrag: et,
      onDragStart: J,
      onDragEnd: nt
    }, [g, j]), yt = {
      y: W,
      sheetRef: S,
      isOpen: u,
      initialSnap: m,
      snapPoints: c,
      detent: p,
      indicatorRotation: y,
      callbacks: at,
      dragProps: dt,
      windowHeight: j,
      animationOptions: Q,
      reduceMotion: P,
      disableDrag: g
    }, Mt = /* @__PURE__ */ ot.createElement(au.Provider, { value: yt }, /* @__PURE__ */ ot.createElement(
      Zt.div,
      {
        ...b,
        ref: A,
        style: { ...Ht.wrapper, zIndex: pt, visibility: Tt, ...d }
      },
      /* @__PURE__ */ ot.createElement(yf, null, u ? /* @__PURE__ */ ot.createElement(sp, null, ko.map(
        o,
        (v, k) => Co(v, { key: `sheet-child-${k}` })
      )) : null)
    ));
    return iu ? Mt : So(Mt, h ?? document.body);
  }
);
cu.displayName = "Sheet";
var lp = cu, hu = se(
  ({ children: e, style: t = {}, className: n = "", ...s }, i) => {
    const {
      y: r,
      isOpen: o,
      callbacks: a,
      snapPoints: u,
      initialSnap: c = 0,
      sheetRef: l,
      windowHeight: h,
      detent: d,
      animationOptions: p,
      reduceMotion: m
    } = In(), { handleAnimationComplete: g } = tp(o, a), x = u ? u[0] - u[c] : 0, C = u ? u[0] : null, b = C !== null ? `min(${C}px, ${$r})` : $r;
    return /* @__PURE__ */ ot.createElement(
      Zt.div,
      {
        ...s,
        ref: gi([l, i]),
        className: `react-modal-sheet-container ${n}`,
        style: {
          ...Ht.container,
          ...t,
          ...d === "full-height" && { height: b },
          ...d === "content-height" && { maxHeight: b },
          y: r
        },
        initial: m ? !1 : { y: h },
        animate: { y: x, transition: p },
        exit: { y: h, transition: p },
        onAnimationComplete: g
      },
      e
    );
  }
);
hu.displayName = "SheetContainer";
var cp = hu, du = se(
  ({ children: e, style: t, disableDrag: n, className: s = "", ...i }, r) => {
    const o = In(), a = lu(), { constraintsRef: u, onMeasureDragConstraints: c } = ou(), l = n || a.disableDrag ? void 0 : o.dragProps;
    return /* @__PURE__ */ ot.createElement(
      Zt.div,
      {
        ...i,
        ref: gi([r, u]),
        className: `react-modal-sheet-content ${s}`,
        style: { ...Ht.content, ...t },
        ...l,
        dragConstraints: u,
        onMeasureDragConstraints: c
      },
      e
    );
  }
);
du.displayName = "SheetContent";
var hp = du, fu = se(
  ({ children: e, style: t, disableDrag: n, ...s }, i) => {
    const { indicatorRotation: r, dragProps: o } = In(), { constraintsRef: a, onMeasureDragConstraints: u } = ou(), c = n ? void 0 : o, l = An(
      r,
      (d) => `translateX(2px) rotate(${d}deg)`
    ), h = An(
      r,
      (d) => `translateX(-2px) rotate(${-1 * d}deg)`
    );
    return /* @__PURE__ */ ot.createElement(
      Zt.div,
      {
        ...s,
        ref: gi([i, a]),
        style: { ...Ht.headerWrapper, ...t },
        ...c,
        dragConstraints: a,
        onMeasureDragConstraints: u
      },
      e || /* @__PURE__ */ ot.createElement("div", { className: "react-modal-sheet-header", style: Ht.header }, /* @__PURE__ */ ot.createElement(
        Zt.span,
        {
          className: "react-modal-sheet-drag-indicator",
          style: { ...Ht.indicator, transform: l }
        }
      ), /* @__PURE__ */ ot.createElement(
        Zt.span,
        {
          className: "react-modal-sheet-drag-indicator",
          style: { ...Ht.indicator, transform: h }
        }
      ))
    );
  }
);
fu.displayName = "SheetHeader";
var dp = fu, ro = (e) => !!e.onClick || !!e.onTap, pu = se(
  ({ style: e = {}, className: t = "", ...n }, s) => {
    const i = ro(n) ? Zt.button : Zt.div, r = ro(n) ? "auto" : "none";
    return /* @__PURE__ */ ot.createElement(
      i,
      {
        ...n,
        ref: s,
        className: `react-modal-sheet-backdrop ${t}`,
        style: { ...Ht.backdrop, ...e, pointerEvents: r },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      }
    );
  }
);
pu.displayName = "SheetBackdrop";
var fp = pu, mu = se(
  ({ draggableAt: e = "top", children: t, style: n, className: s = "", ...i }, r) => {
    const o = lu();
    function a(h) {
      const { scrollTop: d, scrollHeight: p, clientHeight: m } = h;
      if (!(p > m))
        return;
      const x = d <= 0, C = p - d === m;
      e === "top" && x || e === "bottom" && C || e === "both" && (x || C) ? o.setDragEnabled() : o.setDragDisabled();
    }
    function u(h) {
      a(h.currentTarget);
    }
    function c(h) {
      a(h.currentTarget);
    }
    const l = Zf() ? { onScroll: u, onTouchStart: c } : void 0;
    return /* @__PURE__ */ ot.createElement(
      "div",
      {
        ...i,
        ref: r,
        className: `react-modal-sheet-scroller ${s}`,
        style: { ...Ht.scroller, ...n },
        ...l
      },
      t
    );
  }
);
mu.displayName = "SheetScroller";
var pp = mu, Pe = lp;
Pe.Container = cp;
Pe.Header = dp;
Pe.Content = hp;
Pe.Backdrop = fp;
Pe.Scroller = pp;
var Oe = Pe;
function oo() {
  const { innerWidth: e, innerHeight: t } = window;
  return {
    width: e,
    height: t
  };
}
function mp() {
  const [e, t] = Rt(
    oo()
  );
  return Pt(() => {
    function n() {
      t(oo());
    }
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}
const gp = ({ isVisible: e, onClose: t, children: n }) => {
  const { width: s } = mp();
  return s < 640 ? /* @__PURE__ */ R.jsxs(Oe, { isOpen: e, onClose: t, detent: "content-height", children: [
    /* @__PURE__ */ R.jsxs(Oe.Container, { children: [
      /* @__PURE__ */ R.jsx(Oe.Header, {}),
      /* @__PURE__ */ R.jsx(Oe.Content, { children: n })
    ] }),
    /* @__PURE__ */ R.jsx(Oe.Backdrop, { onTap: t })
  ] }) : e ? So(
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: ol.modal,
        onMouseDown: (i) => {
          i.target === i.currentTarget && t();
        },
        children: n
      }
    ),
    document.body
  ) : null;
}, vp = "data:image/png;base64,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", yp = "data:image/png;base64,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", Ap = "data:image/png;base64,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", xp = "data:image/png;base64,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", bp = "data:image/png;base64,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", gu = "#66B22C", Ep = "+7 (___) ___-__-__", Cp = [
  {
    id: 1,
    value: 1,
    image: vp,
    text: "Ужасно"
  },
  {
    id: 2,
    value: 2,
    image: yp,
    text: "Плохо"
  },
  {
    id: 3,
    value: 3,
    image: Ap,
    text: "Нейтрально"
  },
  {
    id: 4,
    value: 4,
    image: xp,
    text: "Хорошо"
  },
  {
    id: 5,
    value: 5,
    image: bp,
    text: "Отлично"
  }
], kp = [
  {
    id: "1",
    title: "Насколько легко пользоваться нашим сайтом?",
    text: "Оцените наш сайт, чтобы помочь нам сделать сервис еще лучше",
    button: null,
    placeholder: null,
    borderColor: "#66B22C",
    buttonColor: "#66B22C"
  },
  {
    id: "2",
    title: "Что нужно сделать лучше?",
    text: null,
    button: "оставить обратную связь",
    placeholder: "Мне бы хотелось, чтобы",
    borderColor: "#66B22C",
    buttonColor: "#66B22C"
  },
  {
    id: "3",
    title: "Спасибо за отзыв",
    text: "Если хотите получить обратную связь по вашему отклику, пожалуйста оставьте свой номер телефона",
    button: "получить обратную связь",
    placeholder: "+7 (___) ___-__-__",
    borderColor: "#66B22C",
    buttonColor: "#66B22C"
  }
], Sp = se(
  ({ borderColor: e = gu, readOnly: t, className: n, ...s }, i) => /* @__PURE__ */ R.jsx(
    "input",
    {
      ...s,
      ref: i,
      className: `border-2 border-[${e}] border-solid h-10 rounded-xl py-3 px-4 outline-none ${t && "cursor-default"} ${n}`
    }
  )
);
function $t(e) {
  return typeof e == "string" || e instanceof String;
}
function ao(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function vu(e, t) {
  return Array.isArray(t) ? vu(e, (n, s) => t.includes(s)) : Object.entries(e).reduce((n, s) => {
    let [i, r] = s;
    return t(r, i) && (n[i] = r), n;
  }, {});
}
const M = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function Tp(e) {
  switch (e) {
    case M.LEFT:
      return M.FORCE_LEFT;
    case M.RIGHT:
      return M.FORCE_RIGHT;
    default:
      return e;
  }
}
function ls(e) {
  return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
function xn(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), s = Array.isArray(e);
  let i;
  if (n && s) {
    if (t.length != e.length) return !1;
    for (i = 0; i < t.length; i++) if (!xn(t[i], e[i])) return !1;
    return !0;
  }
  if (n != s) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const r = t instanceof Date, o = e instanceof Date;
    if (r && o) return t.getTime() == e.getTime();
    if (r != o) return !1;
    const a = t instanceof RegExp, u = e instanceof RegExp;
    if (a && u) return t.toString() == e.toString();
    if (a != u) return !1;
    const c = Object.keys(t);
    for (i = 0; i < c.length; i++) if (!Object.prototype.hasOwnProperty.call(e, c[i])) return !1;
    for (i = 0; i < c.length; i++) if (!xn(e[c[i]], t[c[i]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class wp {
  /** Current input value */
  /** Current cursor position */
  /** Old input value */
  /** Old selection */
  constructor(t) {
    for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
      --this.oldSelection.start;
    if (this.insertedCount)
      for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
        this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
  }
  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }
  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }
  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }
  /** Removed symbols count */
  get removedCount() {
    return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
    this.oldValue.length - this.value.length, 0);
  }
  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }
  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }
  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }
  /** Remove direction */
  get removeDirection() {
    return !this.removedCount || this.insertedCount ? M.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? M.RIGHT : M.LEFT;
  }
}
function L(e, t) {
  return new L.InputMask(e, t);
}
function yu(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? L.MaskedRegExp : $t(e) ? L.MaskedPattern : e === Date ? L.MaskedDate : e === Number ? L.MaskedNumber : Array.isArray(e) || e === Array ? L.MaskedDynamic : L.Masked && e.prototype instanceof L.Masked ? e : L.Masked && e instanceof L.Masked ? e.constructor : e instanceof Function ? L.MaskedFunction : (console.warn("Mask not found for mask", e), L.Masked);
}
function Ge(e) {
  if (!e) throw new Error("Options in not defined");
  if (L.Masked) {
    if (e.prototype instanceof L.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof L.Masked ? {
      mask: e
    } : ao(e) && e.mask instanceof L.Masked ? e : {};
    if (t) {
      const s = t.mask;
      return {
        ...vu(t, (i, r) => !r.startsWith("_")),
        mask: t.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return ao(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Gt(e) {
  if (L.Masked && e instanceof L.Masked) return e;
  const t = Ge(e), n = yu(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
L.createMask = Gt;
class yi {
  /** */
  /** */
  /** */
  /** Safely returns selection start */
  get selectionStart() {
    let t;
    try {
      t = this._unsafeSelectionStart;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely returns selection end */
  get selectionEnd() {
    let t;
    try {
      t = this._unsafeSelectionEnd;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely sets element selection */
  select(t, n) {
    if (!(t == null || n == null || t === this.selectionStart && n === this.selectionEnd))
      try {
        this._unsafeSelect(t, n);
      } catch {
      }
  }
  /** */
  get isActive() {
    return !1;
  }
  /** */
  /** */
  /** */
}
L.MaskElement = yi;
const uo = 90, Rp = 89;
class On extends yi {
  /** HTMLElement to use mask on */
  constructor(t) {
    super(), this.input = t, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var t, n, s;
    return (t = (n = (s = this.input).getRootNode) == null ? void 0 : n.call(s)) != null ? t : document;
  }
  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }
  /** Binds HTMLElement events to mask internal events */
  bindEvents(t) {
    this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", t.drop), this.input.addEventListener("click", t.click), this.input.addEventListener("focus", t.focus), this.input.addEventListener("blur", t.commit), this._handlers = t;
  }
  _onKeydown(t) {
    if (this._handlers.redo && (t.keyCode === uo && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === Rp && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === uo && (t.metaKey || t.ctrlKey))
      return t.preventDefault(), this._handlers.undo(t);
    t.isComposing || this._handlers.selectionChange(t);
  }
  _onBeforeinput(t) {
    if (t.inputType === "historyUndo" && this._handlers.undo)
      return t.preventDefault(), this._handlers.undo(t);
    if (t.inputType === "historyRedo" && this._handlers.redo)
      return t.preventDefault(), this._handlers.redo(t);
  }
  _onCompositionEnd(t) {
    this._handlers.input(t);
  }
  _onInput(t) {
    t.isComposing || this._handlers.input(t);
  }
  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
  }
}
L.HTMLMaskElement = On;
class Pp extends On {
  /** InputElement to use mask on */
  constructor(t) {
    super(t), this.input = t;
  }
  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }
  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }
  /** Sets InputElement selection */
  _unsafeSelect(t, n) {
    this.input.setSelectionRange(t, n);
  }
  get value() {
    return this.input.value;
  }
  set value(t) {
    this.input.value = t;
  }
}
L.HTMLMaskElement = On;
class Au extends On {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), s = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || s == null || s < i ? s : i;
  }
  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), s = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || s == null || s > i ? s : i;
  }
  /** Sets HTMLElement selection */
  _unsafeSelect(t, n) {
    if (!this.rootElement.createRange) return;
    const s = this.rootElement.createRange();
    s.setStart(this.input.firstChild || this.input, t), s.setEnd(this.input.lastChild || this.input, n);
    const i = this.rootElement, r = i.getSelection && i.getSelection();
    r && (r.removeAllRanges(), r.addRange(s));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(t) {
    this.input.textContent = t;
  }
}
L.HTMLContenteditableMaskElement = Au;
class _n {
  constructor() {
    this.states = [], this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(t) {
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > _n.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
  }
  go(t) {
    return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1), this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(1);
  }
  clear() {
    this.states.length = 0, this.currentIndex = 0;
  }
}
_n.MAX_LENGTH = 100;
let Dp = class {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof yi ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new Au(t) : new Pp(t), this.masked = Gt(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new _n(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
  }
  maskEquals(t) {
    var n;
    return t == null || ((n = this.masked) == null ? void 0 : n.maskEquals(t));
  }
  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(t) {
    if (this.maskEquals(t)) return;
    if (!(t instanceof L.Masked) && this.masked.constructor === yu(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof L.Masked ? t : Gt({
      mask: t
    });
    n.unmaskedValue = this.masked.unmaskedValue, this.masked = n;
  }
  /** Raw value */
  get value() {
    return this._value;
  }
  set value(t) {
    this.value !== t && (this.masked.value = t, this.updateControl("auto"));
  }
  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(t) {
    this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl("auto"));
  }
  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(t) {
    this.rawInputValue !== t && (this.masked.rawInputValue = t, this.updateControl(), this.alignCursor());
  }
  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(t) {
    this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl("auto"));
  }
  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }
  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }
  /** Stops listening to element events */
  _unbindEvents() {
    this.el && this.el.unbindEvents();
  }
  /** Fires custom event */
  _fireEvent(t, n) {
    const s = this._listeners[t];
    s && s.forEach((i) => i(n));
  }
  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }
  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(t) {
    !this.el || !this.el.isActive || (this.el.select(t, t), this._saveSelection());
  }
  /** Stores current selection */
  _saveSelection() {
    this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }
  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
  }
  /** Syncronizes view from model value, fires change events */
  updateControl(t) {
    const n = this.masked.unmaskedValue, s = this.masked.value, i = this.masked.rawInputValue, r = this.displayValue, o = this.unmaskedValue !== n || this.value !== s || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = s, this._rawInputValue = i, this.el.value !== r && (this.el.value = r), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), o && this._fireChangeEvents(), !this._historyChanging && (o || this.history.isEmpty) && this.history.push({
      unmaskedValue: n,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }
  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(t) {
    const {
      mask: n,
      ...s
    } = t, i = !this.maskEquals(n), r = this.masked.optionsIsChanged(s);
    i && (this.mask = n), r && this.masked.updateOptions(s), (i || r) && this.updateControl();
  }
  /** Updates cursor */
  updateCursor(t) {
    t != null && (this.cursorPos = t, this._delayUpdateCursor(t));
  }
  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(t) {
    this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
      this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
    }, 10);
  }
  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
  }
  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
  }
  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, M.LEFT));
  }
  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    this.selectionStart === this.cursorPos && this.alignCursor();
  }
  /** Adds listener on custom event */
  on(t, n) {
    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(n), this;
  }
  /** Removes custom event listener */
  off(t, n) {
    if (!this._listeners[t]) return this;
    if (!n)
      return delete this._listeners[t], this;
    const s = this._listeners[t].indexOf(n);
    return s >= 0 && this._listeners[t].splice(s, 1), this;
  }
  /** Handles view input event */
  _onInput(t) {
    this._inputEvent = t, this._abortUpdateCursor();
    const n = new wp({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : M.NONE;
    let o = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== M.NONE && (o = this.masked.nearestInputPos(o, M.NONE)), this.updateControl(o), delete this._inputEvent;
  }
  /** Handles view change event and commits model value */
  _onChange() {
    this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
  }
  /** Handles view drop event, prevents by default */
  _onDrop(t) {
    t.preventDefault(), t.stopPropagation();
  }
  /** Restore last selection on focus */
  _onFocus(t) {
    this.alignCursorFriendly();
  }
  /** Restore last selection on focus */
  _onClick(t) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(t) {
    t && (this._historyChanging = !0, this.unmaskedValue = t.unmaskedValue, this.el.select(t.selection.start, t.selection.end), this._saveSelection(), this._historyChanging = !1);
  }
  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents(), this._listeners.length = 0, delete this.el;
  }
};
L.InputMask = Dp;
class Y {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new Y()];
  }
  constructor(t) {
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      tailShift: 0,
      skip: !1
    }, t);
  }
  /** Aggregate changes */
  aggregate(t) {
    return this.inserted += t.inserted, this.rawInserted += t.rawInserted, this.tailShift += t.tailShift, this.skip = this.skip || t.skip, this;
  }
  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return !!this.rawInserted || this.skip;
  }
  equals(t) {
    return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip;
  }
}
L.ChangeDetails = Y;
class Ot {
  /** Tail value as string */
  /** Tail start position */
  /** Start position */
  constructor(t, n, s) {
    t === void 0 && (t = ""), n === void 0 && (n = 0), this.value = t, this.from = n, this.stop = s;
  }
  toString() {
    return this.value;
  }
  extend(t) {
    this.value += String(t);
  }
  appendTo(t) {
    return t.append(this.toString(), {
      tail: !0
    }).aggregate(t._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  unshift(t) {
    if (!this.value.length || t != null && this.from >= t) return "";
    const n = this.value[0];
    return this.value = this.value.slice(1), n;
  }
  shift() {
    if (!this.value.length) return "";
    const t = this.value[this.value.length - 1];
    return this.value = this.value.slice(0, -1), t;
  }
}
class Et {
  /** */
  /** */
  /** Transforms value before mask processing */
  /** Transforms each char before mask processing */
  /** Validates if value is acceptable */
  /** Does additional processing at the end of editing */
  /** Format typed value to string */
  /** Parse string to get typed value */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    this._value = "", this._update({
      ...Et.DEFAULTS,
      ...t
    }), this._initialized = !0;
  }
  /** Sets and applies new options */
  updateOptions(t) {
    this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t));
  }
  /** Sets new options */
  _update(t) {
    Object.assign(this, t);
  }
  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value;
  }
  /** Resets value */
  reset() {
    this._value = "";
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this.resolve(t, {
      input: !0
    });
  }
  /** Resolve new value */
  resolve(t, n) {
    n === void 0 && (n = {
      input: !0
    }), this.reset(), this.append(t, n, ""), this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(t) {
    this.resolve(t, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(t) {
    this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t);
  }
  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: !0
    });
  }
  set rawInputValue(t) {
    this.resolve(t, {
      raw: !0
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return this.isComplete;
  }
  /** Finds nearest input position in direction */
  nearestInputPos(t, n) {
    return t;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), Math.min(this.displayValue.length, n - t);
  }
  /** Extracts value in range considering flags */
  extractInput(t, n, s) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this.displayValue.slice(t, n);
  }
  /** Extracts tail in range */
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Ot(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return $t(t) && (t = new Ot(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new Y({
      inserted: t,
      rawInserted: t
    })) : new Y();
  }
  /** Appends char */
  _appendChar(t, n, s) {
    n === void 0 && (n = {});
    const i = this.state;
    let r;
    if ([t, r] = this.doPrepareChar(t, n), t && (r = r.aggregate(this._appendCharRaw(t, n)), !r.rawInserted && this.autofix === "pad")) {
      const o = this.state;
      this.state = i;
      let a = this.pad(n);
      const u = this._appendCharRaw(t, n);
      a = a.aggregate(u), u.rawInserted || a.equals(r) ? r = a : this.state = o;
    }
    if (r.inserted) {
      let o, a = this.doValidate(n) !== !1;
      if (a && s != null) {
        const u = this.state;
        if (this.overwrite === !0) {
          o = s.state;
          for (let l = 0; l < r.rawInserted.length; ++l)
            s.unshift(this.displayValue.length - r.tailShift);
        }
        let c = this.appendTail(s);
        if (a = c.rawInserted.length === s.toString().length, !(a && c.inserted) && this.overwrite === "shift") {
          this.state = u, o = s.state;
          for (let l = 0; l < r.rawInserted.length; ++l)
            s.shift();
          c = this.appendTail(s), a = c.rawInserted.length === s.toString().length;
        }
        a && c.inserted && (this.state = u);
      }
      a || (r = new Y(), this.state = i, s && o && (s.state = o));
    }
    return r;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Y();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Y();
  }
  /** Appends symbols considering flags */
  append(t, n, s) {
    if (!$t(t)) throw new Error("value should be string");
    const i = $t(s) ? new Ot(String(s)) : s;
    n != null && n.tail && (n._beforeTailState = this.state);
    let r;
    [t, r] = this.doPrepare(t, n);
    for (let o = 0; o < t.length; ++o) {
      const a = this._appendChar(t[o], n, i);
      if (!a.rawInserted && !this.doSkipInvalid(t[o], n, i)) break;
      r.aggregate(a);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && r.aggregate(this._appendEager()), i != null && (r.tailShift += this.appendTail(i).tailShift), r;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new Y();
  }
  /** Calls function and reapplies current value */
  withValueRefresh(t) {
    if (this._refreshing || !this._initialized) return t();
    this._refreshing = !0;
    const n = this.rawInputValue, s = this.value, i = t();
    return this.rawInputValue = n, this.value && this.value !== s && s.indexOf(this.value) === 0 && (this.append(s.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
  }
  runIsolated(t) {
    if (this._isolated || !this._initialized) return t(this);
    this._isolated = !0;
    const n = this.state, s = t(this);
    return this.state = n, delete this._isolated, s;
  }
  doSkipInvalid(t, n, s) {
    return !!this.skipInvalid;
  }
  /** Prepares string before mask processing */
  doPrepare(t, n) {
    return n === void 0 && (n = {}), Y.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), Y.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
  }
  /** Validates if value is acceptable */
  doValidate(t) {
    return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(t, n, s, i, r) {
    s === void 0 && (s = ""), i === void 0 && (i = M.NONE), r === void 0 && (r = {
      input: !0
    });
    const o = t + n, a = this.extractTail(o), u = this.eager === !0 || this.eager === "remove";
    let c;
    u && (i = Tp(i), c = this.extractInput(0, o, {
      raw: !0
    }));
    let l = t;
    const h = new Y();
    if (i !== M.NONE && (l = this.nearestInputPos(t, n > 1 && t !== 0 && !u ? M.NONE : i), h.tailShift = l - t), h.aggregate(this.remove(l)), u && i !== M.NONE && c === this.rawInputValue)
      if (i === M.FORCE_LEFT) {
        let d;
        for (; c === this.rawInputValue && (d = this.displayValue.length); )
          h.aggregate(new Y({
            tailShift: -1
          })).aggregate(this.remove(d - 1));
      } else i === M.FORCE_RIGHT && a.unshift();
    return h.aggregate(this.append(s, r, a));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !xn(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || Et.EMPTY_VALUES.includes(t) && Et.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new Y();
  }
}
Et.DEFAULTS = {
  skipInvalid: !0
};
Et.EMPTY_VALUES = [void 0, null, ""];
L.Masked = Et;
class de {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = $t(t) ? new Ot(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], s = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof Ot)
      s ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof de) {
      if (t.stop == null) {
        let i;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          i = t.chunks.shift(), i.from += t.from, this.extend(i);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof L.MaskedPattern))
      return new Ot(this.toString()).appendTo(t);
    const n = new Y();
    for (let s = 0; s < this.chunks.length; ++s) {
      const i = this.chunks[s], r = t._mapPosToBlock(t.displayValue.length), o = i.stop;
      let a;
      if (o != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= o) && ((i instanceof de || // for continuous block also check if stop is exist
      t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), a = i instanceof de && t._blocks[o]), a) {
        const u = a.appendTail(i);
        n.aggregate(u);
        const c = i.toString().slice(u.rawInserted.length);
        c && n.aggregate(t.append(c, {
          tail: !0
        }));
      } else
        n.aggregate(t.append(i.toString(), {
          tail: !0
        }));
    }
    return n;
  }
  get state() {
    return {
      chunks: this.chunks.map((t) => t.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(t) {
    const {
      chunks: n,
      ...s
    } = t;
    Object.assign(this, s), this.chunks = n.map((i) => {
      const r = "chunks" in i ? new de() : new Ot();
      return r.state = i, r;
    });
  }
  unshift(t) {
    if (!this.chunks.length || t != null && this.from >= t) return "";
    const n = t != null ? t - this.from : t;
    let s = 0;
    for (; s < this.chunks.length; ) {
      const i = this.chunks[s], r = i.unshift(n);
      if (i.toString()) {
        if (!r) break;
        ++s;
      } else
        this.chunks.splice(s, 1);
      if (r) return r;
    }
    return "";
  }
  shift() {
    if (!this.chunks.length) return "";
    let t = this.chunks.length - 1;
    for (; 0 <= t; ) {
      const n = this.chunks[t], s = n.shift();
      if (n.toString()) {
        if (!s) break;
        --t;
      } else
        this.chunks.splice(t, 1);
      if (s) return s;
    }
    return "";
  }
}
class Mp {
  constructor(t, n) {
    this.masked = t, this._log = [];
    const {
      offset: s,
      index: i
    } = t._mapPosToBlock(n) || (n < 0 ? (
      // first
      {
        index: 0,
        offset: 0
      }
    ) : (
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      }
    ));
    this.offset = s, this.index = i, this.ok = !1;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const t = this._log.pop();
    return t && (this.state = t), t;
  }
  bindBlock() {
    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
  }
  _pushLeft(t) {
    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((n = this.block) == null ? void 0 : n.displayValue.length) || 0) {
      var n;
      if (t()) return this.ok = !0;
    }
    return this.ok = !1;
  }
  _pushRight(t) {
    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
      if (t()) return this.ok = !0;
    return this.ok = !1;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, M.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, M.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, M.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, M.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, M.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, M.NONE), !0;
    });
  }
}
class xu {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    Object.assign(this, t), this._value = "", this.isFixed = !0;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : "";
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : "";
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = !1, this._value = "";
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new Y();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = M.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case M.LEFT:
      case M.FORCE_LEFT:
        return s;
      case M.NONE:
      case M.RIGHT:
      case M.FORCE_RIGHT:
      default:
        return i;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._isRawInput ? n - t : 0;
  }
  extractInput(t, n, s) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), s === void 0 && (s = {}), s.raw && this._isRawInput && this._value.slice(t, n) || "";
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return !!this._value;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Y();
    const s = this.eager === !0 || this.eager === "append", r = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !s) && !n.tail, o = new Y({
      inserted: this.char,
      rawInserted: r ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = r && (n.raw || n.input), o;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const t = new Y();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new Ot("");
  }
  appendTail(t) {
    return $t(t) && (t = new Ot(String(t))), t.appendTo(this);
  }
  append(t, n, s) {
    const i = this._appendChar(t[0], n);
    return s != null && (i.tailShift += this.appendTail(s).tailShift), i;
  }
  doCommit() {
  }
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value, this._isRawInput = !!t._rawInputValue;
  }
  pad(t) {
    return this._appendPlaceholder();
  }
}
class bn {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    const {
      parent: n,
      isOptional: s,
      placeholderChar: i,
      displayChar: r,
      lazy: o,
      eager: a,
      ...u
    } = t;
    this.masked = Gt(u), Object.assign(this, {
      parent: n,
      isOptional: s,
      placeholderChar: i,
      displayChar: r,
      lazy: o,
      eager: a
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new Y();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return !!this.masked.value || this.isOptional;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Y();
    const s = this.masked.state;
    let i = this.masked._appendChar(t, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Y(), this.masked.state = s), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(t, n, s) {
    return this.masked.append(t, this.currentMaskFlags(n), s);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Y() : (this.isFilled = !0, new Y({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Y();
  }
  extractTail(t, n) {
    return this.masked.extractTail(t, n);
  }
  appendTail(t) {
    return this.masked.appendTail(t);
  }
  extractInput(t, n, s) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.masked.extractInput(t, n, s);
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = M.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(t, s), i);
    switch (n) {
      case M.LEFT:
      case M.FORCE_LEFT:
        return this.isComplete ? r : s;
      case M.RIGHT:
      case M.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case M.NONE:
      default:
        return r;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.value.slice(t, n).length;
  }
  doValidate(t) {
    return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(t) {
    this.masked.state = t.masked, this.isFilled = t.isFilled;
  }
  currentMaskFlags(t) {
    var n;
    return {
      ...t,
      _beforeTailState: (t == null || (n = t._beforeTailState) == null ? void 0 : n.masked) || (t == null ? void 0 : t._beforeTailState)
    };
  }
  pad(t) {
    return new Y();
  }
}
bn.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class Fp extends Et {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const n = t.mask;
    n && (t.validate = (s) => s.search(n) >= 0), super._update(t);
  }
}
L.MaskedRegExp = Fp;
class Ct extends Et {
  /** */
  /** */
  /** Single char for empty input */
  /** Single char for filled input */
  /** Show placeholder only when needed */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(t) {
    super({
      ...Ct.DEFAULTS,
      ...t,
      definitions: Object.assign({}, bn.DEFAULT_DEFINITIONS, t == null ? void 0 : t.definitions)
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask();
  }
  _rebuildMask() {
    const t = this.definitions;
    this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
    const n = this.mask;
    if (!n || !t) return;
    let s = !1, i = !1;
    for (let r = 0; r < n.length; ++r) {
      if (this.blocks) {
        const c = n.slice(r), l = Object.keys(this.blocks).filter((d) => c.indexOf(d) === 0);
        l.sort((d, p) => p.length - d.length);
        const h = l[0];
        if (h) {
          const {
            expose: d,
            repeat: p,
            ...m
          } = Ge(this.blocks[h]), g = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...m,
            repeat: p,
            parent: this
          }, x = p != null ? new L.RepeatBlock(
            g
            /* TODO */
          ) : Gt(g);
          x && (this._blocks.push(x), d && (this.exposeBlock = x), this._maskedBlocks[h] || (this._maskedBlocks[h] = []), this._maskedBlocks[h].push(this._blocks.length - 1)), r += h.length - 1;
          continue;
        }
      }
      let o = n[r], a = o in t;
      if (o === Ct.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (o === "{" || o === "}") {
        s = !s;
        continue;
      }
      if (o === "[" || o === "]") {
        i = !i;
        continue;
      }
      if (o === Ct.ESCAPE_CHAR) {
        if (++r, o = n[r], !o) break;
        a = !1;
      }
      const u = a ? new bn({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ge(t[o]),
        parent: this
      }) : new xu({
        char: o,
        eager: this.eager,
        isUnmasking: s
      });
      this._blocks.push(u);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map((t) => t.state)
    };
  }
  set state(t) {
    if (!t) {
      this.reset();
      return;
    }
    const {
      _blocks: n,
      ...s
    } = t;
    this._blocks.forEach((i, r) => i.state = n[r]), super.state = s;
  }
  reset() {
    super.reset(), this._blocks.forEach((t) => t.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((t) => t.isComplete);
  }
  get isFilled() {
    return this._blocks.every((t) => t.isFilled);
  }
  get isFixed() {
    return this._blocks.every((t) => t.isFixed);
  }
  get isOptional() {
    return this._blocks.every((t) => t.isOptional);
  }
  doCommit() {
    this._blocks.forEach((t) => t.doCommit()), super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, n) => t += n.unmaskedValue, "");
  }
  set unmaskedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = t, this.appendTail(n), this.doCommit();
    } else super.unmaskedValue = t;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value : (
      // TODO return _value when not in change?
      this._blocks.reduce((t, n) => t += n.value, "")
    );
  }
  set value(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = t, this.appendTail(n), this.doCommit();
    } else super.value = t;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = t, this.appendTail(n), this.doCommit();
    } else super.typedValue = t;
  }
  get displayValue() {
    return this._blocks.reduce((t, n) => t += n.displayValue, "");
  }
  appendTail(t) {
    return super.appendTail(t).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var t;
    const n = new Y();
    let s = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
    if (s == null) return n;
    this._blocks[s].isFilled && ++s;
    for (let i = s; i < this._blocks.length; ++i) {
      const r = this._blocks[i]._appendEager();
      if (!r.inserted) break;
      n.aggregate(r);
    }
    return n;
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const s = this._mapPosToBlock(this.displayValue.length), i = new Y();
    if (!s) return i;
    for (let o = s.index, a; a = this._blocks[o]; ++o) {
      var r;
      const u = a._appendChar(t, {
        ...n,
        _beforeTailState: (r = n._beforeTailState) == null || (r = r._blocks) == null ? void 0 : r[o]
      });
      if (i.aggregate(u), u.consumed) break;
    }
    return i;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const s = new de();
    return t === n || this._forEachBlocksInRange(t, n, (i, r, o, a) => {
      const u = i.extractTail(o, a);
      u.stop = this._findStopBefore(r), u.from = this._blockStartPos(r), u instanceof de && (u.blockIndex = r), s.extend(u);
    }), s;
  }
  extractInput(t, n, s) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), s === void 0 && (s = {}), t === n) return "";
    let i = "";
    return this._forEachBlocksInRange(t, n, (r, o, a, u) => {
      i += r.extractInput(a, u, s);
    }), i;
  }
  _findStopBefore(t) {
    let n;
    for (let s = 0; s < this._stops.length; ++s) {
      const i = this._stops[s];
      if (i <= t) n = i;
      else break;
    }
    return n;
  }
  /** Appends placeholder depending on laziness */
  _appendPlaceholder(t) {
    const n = new Y();
    if (this.lazy && t == null) return n;
    const s = this._mapPosToBlock(this.displayValue.length);
    if (!s) return n;
    const i = s.index, r = t ?? this._blocks.length;
    return this._blocks.slice(i, r).forEach((o) => {
      if (!o.lazy || t != null) {
        var a;
        n.aggregate(o._appendPlaceholder((a = o._blocks) == null ? void 0 : a.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(t) {
    let n = "";
    for (let s = 0; s < this._blocks.length; ++s) {
      const i = this._blocks[s], r = n.length;
      if (n += i.displayValue, t <= n.length)
        return {
          index: s,
          offset: t - r
        };
    }
  }
  _blockStartPos(t) {
    return this._blocks.slice(0, t).reduce((n, s) => n += s.displayValue.length, 0);
  }
  _forEachBlocksInRange(t, n, s) {
    n === void 0 && (n = this.displayValue.length);
    const i = this._mapPosToBlock(t);
    if (i) {
      const r = this._mapPosToBlock(n), o = r && i.index === r.index, a = i.offset, u = r && o ? r.offset : this._blocks[i.index].displayValue.length;
      if (s(this._blocks[i.index], i.index, a, u), r && !o) {
        for (let c = i.index + 1; c < r.index; ++c)
          s(this._blocks[c], c, 0, this._blocks[c].displayValue.length);
        s(this._blocks[r.index], r.index, 0, r.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const s = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (i, r, o, a) => {
      s.aggregate(i.remove(o, a));
    }), s;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = M.NONE), !this._blocks.length) return 0;
    const s = new Mp(this, t);
    if (n === M.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === M.LEFT || n === M.FORCE_LEFT) {
      if (n === M.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === t) return t;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === M.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= t || (s.popState(), s.ok && s.pos <= t)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === M.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === M.RIGHT || n === M.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === M.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(t, M.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let s = 0;
    return this._forEachBlocksInRange(t, n, (i, r, o, a) => {
      s += i.totalInputPositions(o, a);
    }), s;
  }
  /** Get block by name */
  maskedBlock(t) {
    return this.maskedBlocks(t)[0];
  }
  /** Get all blocks by name */
  maskedBlocks(t) {
    const n = this._maskedBlocks[t];
    return n ? n.map((s) => this._blocks[s]) : [];
  }
  pad(t) {
    const n = new Y();
    return this._forEachBlocksInRange(0, this.displayValue.length, (s) => n.aggregate(s.pad(t))), n;
  }
}
Ct.DEFAULTS = {
  ...Et.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Ct.STOP_CHAR = "`";
Ct.ESCAPE_CHAR = "\\";
Ct.InputDefinition = bn;
Ct.FixedDefinition = xu;
L.MaskedPattern = Ct;
class cn extends Ct {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */
  /** Min bound */
  /** Max bound */
  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      to: n = this.to || 0,
      from: s = this.from || 0,
      maxLength: i = this.maxLength || 0,
      autofix: r = this.autofix,
      ...o
    } = t;
    this.to = n, this.from = s, this.maxLength = Math.max(String(n).length, i), this.autofix = r;
    const a = String(this.from).padStart(this.maxLength, "0"), u = String(this.to).padStart(this.maxLength, "0");
    let c = 0;
    for (; c < u.length && u[c] === a[c]; ) ++c;
    o.mask = u.slice(0, c).replace(/0/g, "\\0") + "0".repeat(this.maxLength - c), super._update(o);
  }
  get isComplete() {
    return super.isComplete && !!this.value;
  }
  boundaries(t) {
    let n = "", s = "";
    const [, i, r] = t.match(/^(\D*)(\d*)(\D*)/) || [];
    return r && (n = "0".repeat(i.length) + r, s = "9".repeat(i.length) + r), n = n.padEnd(this.maxLength, "0"), s = s.padEnd(this.maxLength, "9"), [n, s];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let s;
    return [t, s] = super.doPrepareChar(t.replace(/\D/g, ""), n), t || (s.skip = !this.isComplete), [t, s];
  }
  _appendCharRaw(t, n) {
    if (n === void 0 && (n = {}), !this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(t, n);
    const s = String(this.from).padStart(this.maxLength, "0"), i = String(this.to).padStart(this.maxLength, "0"), [r, o] = this.boundaries(this.value + t);
    return Number(o) < this.from ? super._appendCharRaw(s[this.value.length], n) : Number(r) > this.to ? !n.tail && this.autofix === "pad" && this.value.length + 1 < this.maxLength ? super._appendCharRaw(s[this.value.length], n).aggregate(this._appendCharRaw(t, n)) : super._appendCharRaw(i[this.value.length], n) : super._appendCharRaw(t, n);
  }
  doValidate(t) {
    const n = this.value;
    if (n.search(/[^0]/) === -1 && n.length <= this._matchFrom) return !0;
    const [i, r] = this.boundaries(n);
    return this.from <= Number(r) && Number(i) <= this.to && super.doValidate(t);
  }
  pad(t) {
    const n = new Y();
    if (this.value.length === this.maxLength) return n;
    const s = this.value, i = this.maxLength - this.value.length;
    if (i) {
      this.reset();
      for (let r = 0; r < i; ++r)
        n.aggregate(super._appendCharRaw("0", t));
      s.split("").forEach((r) => this._appendCharRaw(r));
    }
    return n;
  }
}
L.MaskedRange = cn;
const Vp = "d{.}`m{.}`Y";
class Yt extends Ct {
  static extractPatternOptions(t) {
    const {
      mask: n,
      pattern: s,
      ...i
    } = t;
    return {
      ...i,
      mask: $t(n) ? n : s
    };
  }
  /** Pattern mask for date according to {@link MaskedDate#format} */
  /** Start date */
  /** End date */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super(Yt.extractPatternOptions({
      ...Yt.DEFAULTS,
      ...t
    }));
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      mask: n,
      pattern: s,
      blocks: i,
      ...r
    } = {
      ...Yt.DEFAULTS,
      ...t
    }, o = Object.assign({}, Yt.GET_DEFAULT_BLOCKS());
    t.min && (o.Y.from = t.min.getFullYear()), t.max && (o.Y.to = t.max.getFullYear()), t.min && t.max && o.Y.from === o.Y.to && (o.m.from = t.min.getMonth() + 1, o.m.to = t.max.getMonth() + 1, o.m.from === o.m.to && (o.d.from = t.min.getDate(), o.d.to = t.max.getDate())), Object.assign(o, this.blocks, i), super._update({
      ...r,
      mask: $t(n) ? n : s,
      blocks: o
    });
  }
  doValidate(t) {
    const n = this.date;
    return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && n != null && (this.min == null || this.min <= n) && (this.max == null || n <= this.max));
  }
  /** Checks if date is exists */
  isDateExist(t) {
    return this.format(this.parse(t, this), this).indexOf(t) >= 0;
  }
  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(t) {
    this.typedValue = t;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(t) {
    super.typedValue = t;
  }
  maskEquals(t) {
    return t === Date || super.maskEquals(t);
  }
  optionsIsChanged(t) {
    return super.optionsIsChanged(Yt.extractPatternOptions(t));
  }
}
Yt.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: cn,
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: cn,
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: cn,
    from: 1900,
    to: 9999
  }
});
Yt.DEFAULTS = {
  ...Ct.DEFAULTS,
  mask: Date,
  pattern: Vp,
  format: (e, t) => {
    if (!e) return "";
    const n = String(e.getDate()).padStart(2, "0"), s = String(e.getMonth() + 1).padStart(2, "0"), i = e.getFullYear();
    return [n, s, i].join(".");
  },
  parse: (e, t) => {
    const [n, s, i] = e.split(".").map(Number);
    return new Date(i, s - 1, n);
  }
};
L.MaskedDate = Yt;
class Ln extends Et {
  constructor(t) {
    super({
      ...Ln.DEFAULTS,
      ...t
    }), this.currentMask = void 0;
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), "mask" in t && (this.exposeMask = void 0, this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((n) => {
      const {
        expose: s,
        ...i
      } = Ge(n), r = Gt({
        overwrite: this._overwrite,
        eager: this._eager,
        skipInvalid: this._skipInvalid,
        ...i
      });
      return s && (this.exposeMask = r), r;
    }) : []);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const s = this._applyDispatch(t, n);
    return this.currentMask && s.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(n))), s;
  }
  _applyDispatch(t, n, s) {
    t === void 0 && (t = ""), n === void 0 && (n = {}), s === void 0 && (s = "");
    const i = n.tail && n._beforeTailState != null ? n._beforeTailState._value : this.value, r = this.rawInputValue, o = n.tail && n._beforeTailState != null ? n._beforeTailState._rawInputValue : r, a = r.slice(o.length), u = this.currentMask, c = new Y(), l = u == null ? void 0 : u.state;
    return this.currentMask = this.doDispatch(t, {
      ...n
    }, s), this.currentMask && (this.currentMask !== u ? (this.currentMask.reset(), o && (this.currentMask.append(o, {
      raw: !0
    }), c.tailShift = this.currentMask.value.length - i.length), a && (c.tailShift += this.currentMask.append(a, {
      raw: !0,
      tail: !0
    }).tailShift)) : l && (this.currentMask.state = l)), c;
  }
  _appendPlaceholder() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
  }
  _appendEager() {
    const t = this._applyDispatch();
    return this.currentMask && t.aggregate(this.currentMask._appendEager()), t;
  }
  appendTail(t) {
    const n = new Y();
    return t && n.aggregate(this._applyDispatch("", {}, t)), n.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t));
  }
  currentMaskFlags(t) {
    var n, s;
    return {
      ...t,
      _beforeTailState: ((n = t._beforeTailState) == null ? void 0 : n.currentMaskRef) === this.currentMask && ((s = t._beforeTailState) == null ? void 0 : s.currentMask) || t._beforeTailState
    };
  }
  doDispatch(t, n, s) {
    return n === void 0 && (n = {}), s === void 0 && (s = ""), this.dispatch(t, this, n, s);
  }
  doValidate(t) {
    return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)));
  }
  doPrepare(t, n) {
    n === void 0 && (n = {});
    let [s, i] = super.doPrepare(t, n);
    if (this.currentMask) {
      let r;
      [s, r] = super.doPrepare(s, this.currentMaskFlags(n)), i = i.aggregate(r);
    }
    return [s, i];
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    let [s, i] = super.doPrepareChar(t, n);
    if (this.currentMask) {
      let r;
      [s, r] = super.doPrepareChar(s, this.currentMaskFlags(n)), i = i.aggregate(r);
    }
    return [s, i];
  }
  reset() {
    var t;
    (t = this.currentMask) == null || t.reset(), this.compiledMasks.forEach((n) => n.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
  }
  set value(t) {
    this.exposeMask ? (this.exposeMask.value = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.value = t;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
  }
  set unmaskedValue(t) {
    this.exposeMask ? (this.exposeMask.unmaskedValue = t, this.currentMask = this.exposeMask, this._applyDispatch()) : super.unmaskedValue = t;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
  }
  set typedValue(t) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = t, this.currentMask = this.exposeMask, this._applyDispatch();
      return;
    }
    let n = String(t);
    this.currentMask && (this.currentMask.typedValue = t, n = this.currentMask.unmaskedValue), this.unmaskedValue = n;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : "";
  }
  get isComplete() {
    var t;
    return !!((t = this.currentMask) != null && t.isComplete);
  }
  get isFilled() {
    var t;
    return !!((t = this.currentMask) != null && t.isFilled);
  }
  remove(t, n) {
    const s = new Y();
    return this.currentMask && s.aggregate(this.currentMask.remove(t, n)).aggregate(this._applyDispatch()), s;
  }
  get state() {
    var t;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map((n) => n.state),
      currentMaskRef: this.currentMask,
      currentMask: (t = this.currentMask) == null ? void 0 : t.state
    };
  }
  set state(t) {
    const {
      compiledMasks: n,
      currentMaskRef: s,
      currentMask: i,
      ...r
    } = t;
    n && this.compiledMasks.forEach((o, a) => o.state = n[a]), s != null && (this.currentMask = s, this.currentMask.state = i), super.state = r;
  }
  extractInput(t, n, s) {
    return this.currentMask ? this.currentMask.extractInput(t, n, s) : "";
  }
  extractTail(t, n) {
    return this.currentMask ? this.currentMask.extractTail(t, n) : super.extractTail(t, n);
  }
  doCommit() {
    this.currentMask && this.currentMask.doCommit(), super.doCommit();
  }
  nearestInputPos(t, n) {
    return this.currentMask ? this.currentMask.nearestInputPos(t, n) : super.nearestInputPos(t, n);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(t) {
    this._overwrite = t;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(t) {
    this._eager = t;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(t) {
    this._skipInvalid = t;
  }
  get autofix() {
    return this.currentMask ? this.currentMask.autofix : this._autofix;
  }
  set autofix(t) {
    this._autofix = t;
  }
  maskEquals(t) {
    return Array.isArray(t) ? this.compiledMasks.every((n, s) => {
      if (!t[s]) return;
      const {
        mask: i,
        ...r
      } = t[s];
      return xn(n, r) && n.maskEquals(i);
    }) : super.maskEquals(t);
  }
  typedValueEquals(t) {
    var n;
    return !!((n = this.currentMask) != null && n.typedValueEquals(t));
  }
}
Ln.DEFAULTS = {
  ...Et.DEFAULTS,
  dispatch: (e, t, n, s) => {
    if (!t.compiledMasks.length) return;
    const i = t.rawInputValue, r = t.compiledMasks.map((o, a) => {
      const u = t.currentMask === o, c = u ? o.displayValue.length : o.nearestInputPos(o.displayValue.length, M.FORCE_LEFT);
      return o.rawInputValue !== i ? (o.reset(), o.append(i, {
        raw: !0
      })) : u || o.remove(c), o.append(e, t.currentMaskFlags(n)), o.appendTail(s), {
        index: a,
        weight: o.rawInputValue.length,
        totalInputPositions: o.totalInputPositions(0, Math.max(c, o.nearestInputPos(o.displayValue.length, M.FORCE_LEFT)))
      };
    });
    return r.sort((o, a) => a.weight - o.weight || a.totalInputPositions - o.totalInputPositions), t.compiledMasks[r[0].index];
  }
};
L.MaskedDynamic = Ln;
class jn extends Ct {
  constructor(t) {
    super({
      ...jn.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const {
      enum: n,
      ...s
    } = t;
    if (n) {
      const i = n.map((a) => a.length), r = Math.min(...i), o = Math.max(...i) - r;
      s.mask = "*".repeat(r), o && (s.mask += "[" + "*".repeat(o) + "]"), this.enum = n;
    }
    super._update(s);
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const s = Math.min(this.nearestInputPos(0, M.FORCE_RIGHT), this.value.length), i = this.enum.filter((r) => this.matchValue(r, this.unmaskedValue + t, s));
    if (i.length) {
      i.length === 1 && this._forEachBlocksInRange(0, this.value.length, (o, a) => {
        const u = i[0][a];
        a >= this.value.length || u === o.value || (o.reset(), o._appendChar(u, n));
      });
      const r = super._appendCharRaw(i[0][this.value.length], n);
      return i.length === 1 && i[0].slice(this.unmaskedValue.length).split("").forEach((o) => r.aggregate(super._appendCharRaw(o))), r;
    }
    return new Y({
      skip: !this.isComplete
    });
  }
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new Ot("", t);
  }
  remove(t, n) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), t === n) return new Y();
    const s = Math.min(super.nearestInputPos(0, M.FORCE_RIGHT), this.value.length);
    let i;
    for (i = t; i >= 0 && !(this.enum.filter((a) => this.matchValue(a, this.value.slice(s, i), s)).length > 1); --i)
      ;
    const r = super.remove(i, n);
    return r.tailShift += i - t, r;
  }
  get isComplete() {
    return this.enum.indexOf(this.value) >= 0;
  }
}
jn.DEFAULTS = {
  ...Ct.DEFAULTS,
  matchValue: (e, t, n) => e.indexOf(t, n) === n
};
L.MaskedEnum = jn;
class Bp extends Et {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update({
      ...t,
      validate: t.mask
    });
  }
}
L.MaskedFunction = Bp;
var bu;
class wt extends Et {
  /** Single char */
  /** Single char */
  /** Array of single chars */
  /** */
  /** */
  /** Digits after point */
  /** Flag to remove leading and trailing zeros in the end of editing */
  /** Flag to pad trailing zeros after point in the end of editing */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** Format typed value to string */
  /** Parse string to get typed value */
  constructor(t) {
    super({
      ...wt.DEFAULTS,
      ...t
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    super._update(t), this._updateRegExps();
  }
  _updateRegExps() {
    const t = "^" + (this.allowNegative ? "[+|\\-]?" : ""), n = "\\d*", s = (this.scale ? "(" + ls(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
    this._numberRegExp = new RegExp(t + n + s), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(ls).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ls(this.thousandsSeparator), "g");
  }
  _removeThousandsSeparators(t) {
    return t.replace(this._thousandsSeparatorRegExp, "");
  }
  _insertThousandsSeparators(t) {
    const n = t.split(this.radix);
    return n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), n.join(this.radix);
  }
  doPrepareChar(t, n) {
    n === void 0 && (n = {});
    const [s, i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    (n.input && n.raw || !n.input && !n.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), n);
    return t && !s && (i.skip = !0), s && !this.allowPositive && !this.value && s !== "-" && i.aggregate(this._appendChar("-")), [s, i];
  }
  _separatorsCount(t, n) {
    n === void 0 && (n = !1);
    let s = 0;
    for (let i = 0; i < t; ++i)
      this._value.indexOf(this.thousandsSeparator, i) === i && (++s, n && (t += this.thousandsSeparator.length));
    return s;
  }
  _separatorsCountFromSlice(t) {
    return t === void 0 && (t = this._value), this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
  }
  extractInput(t, n, s) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n), this._removeThousandsSeparators(super.extractInput(t, n, s));
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const s = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, i = this._separatorsCountFromSlice(s);
    this._value = this._removeThousandsSeparators(this.value);
    const r = this._value;
    this._value += t;
    const o = this.number;
    let a = !isNaN(o), u = !1;
    if (a) {
      let d;
      this.min != null && this.min < 0 && this.number < this.min && (d = this.min), this.max != null && this.max > 0 && this.number > this.max && (d = this.max), d != null && (this.autofix ? (this._value = this.format(d, this).replace(wt.UNMASKED_RADIX, this.radix), u || (u = r === this._value && !n.tail)) : a = !1), a && (a = !!this._value.match(this._numberRegExp));
    }
    let c;
    a ? c = new Y({
      inserted: this._value.slice(r.length),
      rawInserted: u ? "" : t,
      skip: u
    }) : (this._value = r, c = new Y()), this._value = this._insertThousandsSeparators(this._value);
    const l = n.tail && n._beforeTailState ? n._beforeTailState._value : this._value, h = this._separatorsCountFromSlice(l);
    return c.tailShift += (h - i) * this.thousandsSeparator.length, c;
  }
  _findSeparatorAround(t) {
    if (this.thousandsSeparator) {
      const n = t - this.thousandsSeparator.length + 1, s = this.value.indexOf(this.thousandsSeparator, n);
      if (s <= t) return s;
    }
    return -1;
  }
  _adjustRangeWithSeparators(t, n) {
    const s = this._findSeparatorAround(t);
    s >= 0 && (t = s);
    const i = this._findSeparatorAround(n);
    return i >= 0 && (n = i + this.thousandsSeparator.length), [t, n];
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), [t, n] = this._adjustRangeWithSeparators(t, n);
    const s = this.value.slice(0, t), i = this.value.slice(n), r = this._separatorsCount(s.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
    const o = this._separatorsCountFromSlice(s);
    return new Y({
      tailShift: (o - r) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(t, n) {
    if (!this.thousandsSeparator) return t;
    switch (n) {
      case M.NONE:
      case M.LEFT:
      case M.FORCE_LEFT: {
        const s = this._findSeparatorAround(t - 1);
        if (s >= 0) {
          const i = s + this.thousandsSeparator.length;
          if (t < i || this.value.length <= i || n === M.FORCE_LEFT)
            return s;
        }
        break;
      }
      case M.RIGHT:
      case M.FORCE_RIGHT: {
        const s = this._findSeparatorAround(t);
        if (s >= 0)
          return s + this.thousandsSeparator.length;
      }
    }
    return t;
  }
  doCommit() {
    if (this.value) {
      const t = this.number;
      let n = t;
      this.min != null && (n = Math.max(n, this.min)), this.max != null && (n = Math.min(n, this.max)), n !== t && (this.unmaskedValue = this.format(n, this));
      let s = this.value;
      this.normalizeZeros && (s = this._normalizeZeros(s)), this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)), this._value = s;
    }
    super.doCommit();
  }
  _normalizeZeros(t) {
    const n = this._removeThousandsSeparators(t).split(this.radix);
    return n[0] = n[0].replace(/^(\D*)(0*)(\d*)/, (s, i, r, o) => i + o), t.length && !/\d$/.test(n[0]) && (n[0] = n[0] + "0"), n.length > 1 && (n[1] = n[1].replace(/0*$/, ""), n[1].length || (n.length = 1)), this._insertThousandsSeparators(n.join(this.radix));
  }
  _padFractionalZeros(t) {
    if (!t) return t;
    const n = t.split(this.radix);
    return n.length < 2 && n.push(""), n[1] = n[1].padEnd(this.scale, "0"), n.join(this.radix);
  }
  doSkipInvalid(t, n, s) {
    n === void 0 && (n = {});
    const i = this.scale === 0 && t !== this.thousandsSeparator && (t === this.radix || t === wt.UNMASKED_RADIX || this.mapToRadix.includes(t));
    return super.doSkipInvalid(t, n, s) && !i;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, wt.UNMASKED_RADIX);
  }
  set unmaskedValue(t) {
    super.unmaskedValue = t;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(t) {
    this.rawInputValue = this.format(t, this).replace(wt.UNMASKED_RADIX, this.radix);
  }
  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(t) {
    this.typedValue = t;
  }
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(t) {
    return (super.typedValueEquals(t) || wt.EMPTY_VALUES.includes(t) && wt.EMPTY_VALUES.includes(this.typedValue)) && !(t === 0 && this.value === "");
  }
}
bu = wt;
wt.UNMASKED_RADIX = ".";
wt.EMPTY_VALUES = [...Et.EMPTY_VALUES, 0];
wt.DEFAULTS = {
  ...Et.DEFAULTS,
  mask: Number,
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: [bu.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: !0,
  padFractionalZeros: !1,
  parse: Number,
  format: (e) => e.toLocaleString("en-US", {
    useGrouping: !1,
    maximumFractionDigits: 20
  })
};
L.MaskedNumber = wt;
const Bs = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function Eu(e, t, n) {
  t === void 0 && (t = Bs.MASKED), n === void 0 && (n = Bs.MASKED);
  const s = Gt(e);
  return (i) => s.runIsolated((r) => (r[t] = i, r[n]));
}
function Ip(e, t, n, s) {
  return Eu(t, n, s)(e);
}
L.PIPE_TYPE = Bs;
L.createPipe = Eu;
L.pipe = Ip;
class Op extends Ct {
  get repeatFrom() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) != null ? t : 0;
  }
  get repeatTo() {
    var t;
    return (t = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? t : 1 / 0;
  }
  constructor(t) {
    super(t);
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    var n, s, i;
    const {
      repeat: r,
      ...o
    } = Ge(t);
    this._blockOpts = Object.assign({}, this._blockOpts, o);
    const a = Gt(this._blockOpts);
    this.repeat = (n = (s = r ?? a.repeat) != null ? s : this.repeat) != null ? n : 1 / 0, super._update({
      mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && ((i = this._blocks) == null ? void 0 : i.length) || 0, this.repeatFrom)),
      blocks: {
        m: a
      },
      eager: a.eager,
      overwrite: a.overwrite,
      skipInvalid: a.skipInvalid,
      lazy: a.lazy,
      placeholderChar: a.placeholderChar,
      displayChar: a.displayChar
    });
  }
  _allocateBlock(t) {
    if (t < this._blocks.length) return this._blocks[t];
    if (this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo)
      return this._blocks.push(Gt(this._blockOpts)), this.mask += "m", this._blocks[this._blocks.length - 1];
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const s = new Y();
    for (
      let u = (i = (r = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : r.index) != null ? i : Math.max(this._blocks.length - 1, 0), c, l;
      // try to get a block or
      // try to allocate a new block if not allocated already
      c = (o = this._blocks[u]) != null ? o : l = !l && this._allocateBlock(u);
      ++u
    ) {
      var i, r, o, a;
      const h = c._appendChar(t, {
        ...n,
        _beforeTailState: (a = n._beforeTailState) == null || (a = a._blocks) == null ? void 0 : a[u]
      });
      if (h.skip && l) {
        this._blocks.pop(), this.mask = this.mask.slice(1);
        break;
      }
      if (s.aggregate(h), h.consumed) break;
    }
    return s;
  }
  _trimEmptyTail(t, n) {
    var s, i;
    t === void 0 && (t = 0);
    const r = Math.max(((s = this._mapPosToBlock(t)) == null ? void 0 : s.index) || 0, this.repeatFrom, 0);
    let o;
    n != null && (o = (i = this._mapPosToBlock(n)) == null ? void 0 : i.index), o == null && (o = this._blocks.length - 1);
    let a = 0;
    for (let u = o; r <= u && !this._blocks[u].unmaskedValue; --u, ++a)
      ;
    a && (this._blocks.splice(o - a + 1, a), this.mask = this.mask.slice(a));
  }
  reset() {
    super.reset(), this._trimEmptyTail();
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const s = super.remove(t, n);
    return this._trimEmptyTail(t, n), s;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n == null && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(t, n);
  }
  get state() {
    return super.state;
  }
  set state(t) {
    this._blocks.length = t._blocks.length, this.mask = this.mask.slice(0, this._blocks.length), super.state = t;
  }
}
L.RepeatBlock = Op;
try {
  globalThis.IMask = L;
} catch {
}
var Is = { exports: {} }, sn = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function _p() {
  if (lo) return $;
  lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function A(y) {
    if (typeof y == "object" && y !== null) {
      var j = y.$$typeof;
      switch (j) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case s:
            case r:
            case i:
            case h:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case l:
                case m:
                case p:
                case o:
                  return y;
                default:
                  return j;
              }
          }
        case n:
          return j;
      }
    }
  }
  function S(y) {
    return A(y) === c;
  }
  return $.AsyncMode = u, $.ConcurrentMode = c, $.ContextConsumer = a, $.ContextProvider = o, $.Element = t, $.ForwardRef = l, $.Fragment = s, $.Lazy = m, $.Memo = p, $.Portal = n, $.Profiler = r, $.StrictMode = i, $.Suspense = h, $.isAsyncMode = function(y) {
    return S(y) || A(y) === u;
  }, $.isConcurrentMode = S, $.isContextConsumer = function(y) {
    return A(y) === a;
  }, $.isContextProvider = function(y) {
    return A(y) === o;
  }, $.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, $.isForwardRef = function(y) {
    return A(y) === l;
  }, $.isFragment = function(y) {
    return A(y) === s;
  }, $.isLazy = function(y) {
    return A(y) === m;
  }, $.isMemo = function(y) {
    return A(y) === p;
  }, $.isPortal = function(y) {
    return A(y) === n;
  }, $.isProfiler = function(y) {
    return A(y) === r;
  }, $.isStrictMode = function(y) {
    return A(y) === i;
  }, $.isSuspense = function(y) {
    return A(y) === h;
  }, $.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === s || y === c || y === r || y === i || y === h || y === d || typeof y == "object" && y !== null && (y.$$typeof === m || y.$$typeof === p || y.$$typeof === o || y.$$typeof === a || y.$$typeof === l || y.$$typeof === x || y.$$typeof === C || y.$$typeof === b || y.$$typeof === g);
  }, $.typeOf = A, $;
}
var tt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Lp() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function A(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === s || T === c || T === r || T === i || T === h || T === d || typeof T == "object" && T !== null && (T.$$typeof === m || T.$$typeof === p || T.$$typeof === o || T.$$typeof === a || T.$$typeof === l || T.$$typeof === x || T.$$typeof === C || T.$$typeof === b || T.$$typeof === g);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var Ft = T.$$typeof;
        switch (Ft) {
          case t:
            var ge = T.type;
            switch (ge) {
              case u:
              case c:
              case s:
              case r:
              case i:
              case h:
                return ge;
              default:
                var re = ge && ge.$$typeof;
                switch (re) {
                  case a:
                  case l:
                  case m:
                  case p:
                  case o:
                    return re;
                  default:
                    return Ft;
                }
            }
          case n:
            return Ft;
        }
      }
    }
    var y = u, j = c, it = a, P = o, Q = t, W = l, pt = s, Tt = m, at = p, et = n, J = r, nt = i, dt = h, yt = !1;
    function Mt(T) {
      return yt || (yt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(T) || S(T) === u;
    }
    function v(T) {
      return S(T) === c;
    }
    function k(T) {
      return S(T) === a;
    }
    function F(T) {
      return S(T) === o;
    }
    function I(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function V(T) {
      return S(T) === l;
    }
    function K(T) {
      return S(T) === s;
    }
    function N(T) {
      return S(T) === m;
    }
    function O(T) {
      return S(T) === p;
    }
    function U(T) {
      return S(T) === n;
    }
    function q(T) {
      return S(T) === r;
    }
    function H(T) {
      return S(T) === i;
    }
    function At(T) {
      return S(T) === h;
    }
    tt.AsyncMode = y, tt.ConcurrentMode = j, tt.ContextConsumer = it, tt.ContextProvider = P, tt.Element = Q, tt.ForwardRef = W, tt.Fragment = pt, tt.Lazy = Tt, tt.Memo = at, tt.Portal = et, tt.Profiler = J, tt.StrictMode = nt, tt.Suspense = dt, tt.isAsyncMode = Mt, tt.isConcurrentMode = v, tt.isContextConsumer = k, tt.isContextProvider = F, tt.isElement = I, tt.isForwardRef = V, tt.isFragment = K, tt.isLazy = N, tt.isMemo = O, tt.isPortal = U, tt.isProfiler = q, tt.isStrictMode = H, tt.isSuspense = At, tt.isValidElementType = A, tt.typeOf = S;
  }()), tt;
}
var ho;
function Cu() {
  return ho || (ho = 1, process.env.NODE_ENV === "production" ? sn.exports = _p() : sn.exports = Lp()), sn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cs, fo;
function jp() {
  if (fo) return cs;
  fo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function s(r) {
    if (r == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var r = new String("abc");
      if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return cs = i() ? Object.assign : function(r, o) {
    for (var a, u = s(r), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var h in a)
        t.call(a, h) && (u[h] = a[h]);
      if (e) {
        c = e(a);
        for (var d = 0; d < c.length; d++)
          n.call(a, c[d]) && (u[c[d]] = a[c[d]]);
      }
    }
    return u;
  }, cs;
}
var hs, po;
function Ai() {
  if (po) return hs;
  po = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hs = e, hs;
}
var ds, mo;
function ku() {
  return mo || (mo = 1, ds = Function.call.bind(Object.prototype.hasOwnProperty)), ds;
}
var fs, go;
function Np() {
  if (go) return fs;
  go = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ai(), n = {}, s = ku();
    e = function(r) {
      var o = "Warning: " + r;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(r, o, a, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in r)
        if (s(r, l)) {
          var h;
          try {
            if (typeof r[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            h = r[l](o, l, u, a, null, t);
          } catch (m) {
            h = m;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + a + " type: " + h.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, fs = i, fs;
}
var ps, vo;
function Up() {
  if (vo) return ps;
  vo = 1;
  var e = Cu(), t = jp(), n = Ai(), s = ku(), i = Np(), r = function() {
  };
  process.env.NODE_ENV !== "production" && (r = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return ps = function(a, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function h(v) {
      var k = v && (c && v[c] || v[l]);
      if (typeof k == "function")
        return k;
    }
    var d = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: b(),
      arrayOf: A,
      element: S(),
      elementType: y(),
      instanceOf: j,
      node: W(),
      objectOf: P,
      oneOf: it,
      oneOfType: Q,
      shape: Tt,
      exact: at
    };
    function m(v, k) {
      return v === k ? v !== 0 || 1 / v === 1 / k : v !== v && k !== k;
    }
    function g(v, k) {
      this.message = v, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function x(v) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, F = 0;
      function I(K, N, O, U, q, H, At) {
        if (U = U || d, H = H || O, At !== n) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ft = U + ":" + O;
            !k[Ft] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (r(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ft] = !0, F++);
          }
        }
        return N[O] == null ? K ? N[O] === null ? new g("The " + q + " `" + H + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new g("The " + q + " `" + H + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : v(N, O, U, q, H);
      }
      var V = I.bind(null, !1);
      return V.isRequired = I.bind(null, !0), V;
    }
    function C(v) {
      function k(F, I, V, K, N, O) {
        var U = F[I], q = nt(U);
        if (q !== v) {
          var H = dt(U);
          return new g(
            "Invalid " + K + " `" + N + "` of type " + ("`" + H + "` supplied to `" + V + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return x(k);
    }
    function b() {
      return x(o);
    }
    function A(v) {
      function k(F, I, V, K, N) {
        if (typeof v != "function")
          return new g("Property `" + N + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var O = F[I];
        if (!Array.isArray(O)) {
          var U = nt(O);
          return new g("Invalid " + K + " `" + N + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an array."));
        }
        for (var q = 0; q < O.length; q++) {
          var H = v(O, q, V, K, N + "[" + q + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return x(k);
    }
    function S() {
      function v(k, F, I, V, K) {
        var N = k[F];
        if (!a(N)) {
          var O = nt(N);
          return new g("Invalid " + V + " `" + K + "` of type " + ("`" + O + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(v);
    }
    function y() {
      function v(k, F, I, V, K) {
        var N = k[F];
        if (!e.isValidElementType(N)) {
          var O = nt(N);
          return new g("Invalid " + V + " `" + K + "` of type " + ("`" + O + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(v);
    }
    function j(v) {
      function k(F, I, V, K, N) {
        if (!(F[I] instanceof v)) {
          var O = v.name || d, U = Mt(F[I]);
          return new g("Invalid " + K + " `" + N + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return x(k);
    }
    function it(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? r(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : r("Invalid argument supplied to oneOf, expected an array.")), o;
      function k(F, I, V, K, N) {
        for (var O = F[I], U = 0; U < v.length; U++)
          if (m(O, v[U]))
            return null;
        var q = JSON.stringify(v, function(At, T) {
          var Ft = dt(T);
          return Ft === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + K + " `" + N + "` of value `" + String(O) + "` " + ("supplied to `" + V + "`, expected one of " + q + "."));
      }
      return x(k);
    }
    function P(v) {
      function k(F, I, V, K, N) {
        if (typeof v != "function")
          return new g("Property `" + N + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var O = F[I], U = nt(O);
        if (U !== "object")
          return new g("Invalid " + K + " `" + N + "` of type " + ("`" + U + "` supplied to `" + V + "`, expected an object."));
        for (var q in O)
          if (s(O, q)) {
            var H = v(O, q, V, K, N + "." + q, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return x(k);
    }
    function Q(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && r("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var k = 0; k < v.length; k++) {
        var F = v[k];
        if (typeof F != "function")
          return r(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + yt(F) + " at index " + k + "."
          ), o;
      }
      function I(V, K, N, O, U) {
        for (var q = [], H = 0; H < v.length; H++) {
          var At = v[H], T = At(V, K, N, O, U, n);
          if (T == null)
            return null;
          T.data && s(T.data, "expectedType") && q.push(T.data.expectedType);
        }
        var Ft = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new g("Invalid " + O + " `" + U + "` supplied to " + ("`" + N + "`" + Ft + "."));
      }
      return x(I);
    }
    function W() {
      function v(k, F, I, V, K) {
        return et(k[F]) ? null : new g("Invalid " + V + " `" + K + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return x(v);
    }
    function pt(v, k, F, I, V) {
      return new g(
        (v || "React class") + ": " + k + " type `" + F + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function Tt(v) {
      function k(F, I, V, K, N) {
        var O = F[I], U = nt(O);
        if (U !== "object")
          return new g("Invalid " + K + " `" + N + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var q in v) {
          var H = v[q];
          if (typeof H != "function")
            return pt(V, K, N, q, dt(H));
          var At = H(O, q, V, K, N + "." + q, n);
          if (At)
            return At;
        }
        return null;
      }
      return x(k);
    }
    function at(v) {
      function k(F, I, V, K, N) {
        var O = F[I], U = nt(O);
        if (U !== "object")
          return new g("Invalid " + K + " `" + N + "` of type `" + U + "` " + ("supplied to `" + V + "`, expected `object`."));
        var q = t({}, F[I], v);
        for (var H in q) {
          var At = v[H];
          if (s(v, H) && typeof At != "function")
            return pt(V, K, N, H, dt(At));
          if (!At)
            return new g(
              "Invalid " + K + " `" + N + "` key `" + H + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(F[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var T = At(O, H, V, K, N + "." + H, n);
          if (T)
            return T;
        }
        return null;
      }
      return x(k);
    }
    function et(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(et);
          if (v === null || a(v))
            return !0;
          var k = h(v);
          if (k) {
            var F = k.call(v), I;
            if (k !== v.entries) {
              for (; !(I = F.next()).done; )
                if (!et(I.value))
                  return !1;
            } else
              for (; !(I = F.next()).done; ) {
                var V = I.value;
                if (V && !et(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(v, k) {
      return v === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function nt(v) {
      var k = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : J(k, v) ? "symbol" : k;
    }
    function dt(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var k = nt(v);
      if (k === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function yt(v) {
      var k = dt(v);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function Mt(v) {
      return !v.constructor || !v.constructor.name ? d : v.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, ps;
}
var ms, yo;
function Yp() {
  if (yo) return ms;
  yo = 1;
  var e = Ai();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ms = function() {
    function s(o, a, u, c, l, h) {
      if (h !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    s.isRequired = s;
    function i() {
      return s;
    }
    var r = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: i,
      element: s,
      elementType: s,
      instanceOf: i,
      node: s,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return r.PropTypes = r, r;
  }, ms;
}
if (process.env.NODE_ENV !== "production") {
  var Wp = Cu(), Hp = !0;
  Is.exports = Up()(Wp.isElement, Hp);
} else
  Is.exports = Yp()();
var Kp = Is.exports;
const D = /* @__PURE__ */ el(Kp), Su = {
  // common
  mask: D.oneOfType([D.array, D.func, D.string, D.instanceOf(RegExp), D.oneOf([Date, Number, L.Masked]), D.instanceOf(L.Masked)]),
  value: D.any,
  unmask: D.oneOfType([D.bool, D.oneOf(["typed"])]),
  prepare: D.func,
  prepareChar: D.func,
  validate: D.func,
  commit: D.func,
  overwrite: D.oneOfType([D.bool, D.oneOf(["shift"])]),
  eager: D.oneOfType([D.bool, D.oneOf(["append", "remove"])]),
  skipInvalid: D.bool,
  // events
  onAccept: D.func,
  onComplete: D.func,
  // pattern
  placeholderChar: D.string,
  displayChar: D.string,
  lazy: D.bool,
  definitions: D.object,
  blocks: D.object,
  // enum
  enum: D.arrayOf(D.string),
  // range
  maxLength: D.number,
  from: D.number,
  to: D.number,
  // date
  pattern: D.string,
  format: D.func,
  parse: D.func,
  autofix: D.oneOfType([D.bool, D.oneOf(["pad"])]),
  // number
  radix: D.string,
  thousandsSeparator: D.string,
  mapToRadix: D.arrayOf(D.string),
  scale: D.number,
  normalizeZeros: D.bool,
  padFractionalZeros: D.bool,
  min: D.oneOfType([D.number, D.instanceOf(Date)]),
  max: D.oneOfType([D.number, D.instanceOf(Date)]),
  // dynamic
  dispatch: D.func,
  // ref
  inputRef: D.oneOfType([D.func, D.shape({
    current: D.object
  })])
}, Tu = Object.keys(Su).filter((e) => e !== "value"), zp = ["value", "unmask", "onAccept", "onComplete", "inputRef"], Gp = Tu.filter((e) => zp.indexOf(e) < 0);
function wu(e) {
  var t;
  const n = (t = class extends ot.Component {
    constructor(r) {
      super(r), this._inputRef = this._inputRef.bind(this);
    }
    componentDidMount() {
      this.props.mask && this.initMask();
    }
    componentDidUpdate() {
      const r = this.props, o = this._extractMaskOptionsFromProps(r);
      if (o.mask)
        this.maskRef ? (this.maskRef.updateOptions(o), "value" in r && r.value !== void 0 && (this.maskValue = r.value)) : this.initMask(o);
      else if (this.destroyMask(), "value" in r && r.value !== void 0) {
        var a;
        (a = this.element) != null && a.isContentEditable && this.element.tagName !== "INPUT" && this.element.tagName !== "TEXTAREA" ? this.element.textContent = r.value : this.element.value = r.value;
      }
    }
    componentWillUnmount() {
      this.destroyMask();
    }
    _inputRef(r) {
      this.element = r, this.props.inputRef && (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current") ? this.props.inputRef.current = r : this.props.inputRef(r));
    }
    initMask(r) {
      r === void 0 && (r = this._extractMaskOptionsFromProps(this.props)), this.maskRef = L(this.element, r).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this)), "value" in this.props && this.props.value !== void 0 && (this.maskValue = this.props.value);
    }
    destroyMask() {
      this.maskRef && (this.maskRef.destroy(), delete this.maskRef);
    }
    _extractMaskOptionsFromProps(r) {
      const {
        ...o
      } = r;
      return Object.keys(o).filter((a) => Gp.indexOf(a) < 0).forEach((a) => {
        delete o[a];
      }), o;
    }
    _extractNonMaskProps(r) {
      const {
        ...o
      } = r;
      return Tu.forEach((a) => {
        a !== "maxLength" && delete o[a];
      }), "defaultValue" in o || (o.defaultValue = r.mask ? "" : o.value), delete o.value, o;
    }
    get maskValue() {
      return this.maskRef ? this.props.unmask === "typed" ? this.maskRef.typedValue : this.props.unmask ? this.maskRef.unmaskedValue : this.maskRef.value : "";
    }
    set maskValue(r) {
      this.maskRef && (r = r == null && this.props.unmask !== "typed" ? "" : r, this.props.unmask === "typed" ? this.maskRef.typedValue = r : this.props.unmask ? this.maskRef.unmaskedValue = r : this.maskRef.value = r);
    }
    _onAccept(r) {
      this.props.onAccept && this.maskRef && this.props.onAccept(this.maskValue, this.maskRef, r);
    }
    _onComplete(r) {
      this.props.onComplete && this.maskRef && this.props.onComplete(this.maskValue, this.maskRef, r);
    }
    render() {
      return ot.createElement(e, {
        ...this._extractNonMaskProps(this.props),
        inputRef: this._inputRef
      });
    }
  }, t.displayName = void 0, t.propTypes = void 0, t), s = e.displayName || e.name || "Component";
  return n.displayName = "IMask(" + s + ")", n.propTypes = Su, ot.forwardRef((i, r) => ot.createElement(n, {
    ...i,
    ref: r
  }));
}
const Qp = wu((e) => {
  let {
    inputRef: t,
    ...n
  } = e;
  return ot.createElement("input", {
    ...n,
    ref: t
  });
}), qp = (e, t) => ot.createElement(Qp, {
  ...e,
  ref: t
});
ot.forwardRef(qp);
const Xp = wu(({ inputRef: e, ...t }) => /* @__PURE__ */ R.jsx(Sp, { ...t, ref: e })), Jp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEhSURBVHgBrVK7cYNAFHzHuAEKgFEHtjuwK7BSaIHAZJDZyiAySkidQSp34IBc7sCiAkQDnPZuDs0TnDQE2pmd+71d9h0naIKu614wvIFrcGW2/ww3ruseeL2YiL8wxHQbhTE6XhhAvMfwRMug0rwqE4d9eamYTO2HmjgQr4jFruuaoiiaKfI8p6qq+Fas7ssZnUa0basLuYkSZ1lGTdNMfde6d1ByJkkicSjDMJRpmup5EARyWgf+K4POcnA2uSHWdOgKhBDW+Qy2Fnhs3o4lwV4ZFNfEtjvhtX3ffz/gYAe+j4k8zyOIqSzLc0qY6tH3/Yv0wzBshGmj4CYLscVLjO/zlBWweFauC8TbUawWs/9jnvYn+MgSHcAfcAfhL68/AdPnFIscUh0eAAAAAElFTkSuQmCC", xi = ({
  title: e,
  onClose: t,
  className: n,
  children: s,
  ...i
}) => /* @__PURE__ */ R.jsxs(
  "form",
  {
    className: `w-full sm:w-[28rem] bg-white rounded-xl pb-6 px-4 sm:py-6 flex flex-col gap-3 relative ${n}`,
    ...i,
    children: [
      /* @__PURE__ */ R.jsx(
        "button",
        {
          onClick: t,
          type: "button",
          className: "absolute right-4",
          children: /* @__PURE__ */ R.jsx("img", { src: Jp })
        }
      ),
      /* @__PURE__ */ R.jsx("div", { className: "text-2xl text-center w-1/2 self-center", children: /* @__PURE__ */ R.jsx("h2", { children: e }) }),
      /* @__PURE__ */ R.jsx("div", { className: "min-h-px bg-line" }),
      s
    ]
  }
), Ru = ({
  bgColor: e = gu,
  children: t,
  className: n,
  ...s
}) => /* @__PURE__ */ R.jsx(
  "button",
  {
    className: `rounded-xl py-3 px-4 text-white bg-[${e}] disabled:bg-[#BFBFBF] disabled:text-opacity-50 outline-none ${n}`,
    ...s,
    children: "получить обратную связь"
  }
), Zp = "получить обратную связь", $p = ({ onClose: e, item: t }) => {
  const [n, s] = Rt(""), i = (a) => {
    s(a.target.value);
  }, r = (a) => {
    a.preventDefault(), console.log(n);
  }, o = te(
    (a) => !a.length || a.length < 18,
    [n]
  );
  return /* @__PURE__ */ R.jsxs(
    xi,
    {
      onSubmit: r,
      onClose: e,
      title: t.title,
      children: [
        t.text && /* @__PURE__ */ R.jsx("p", { className: "text-xs", children: t.text }),
        /* @__PURE__ */ R.jsx(
          Xp,
          {
            mask: "+7 (000) 000-00-00",
            placeholder: t.placeholder ?? Ep,
            onChange: i,
            value: n
          }
        ),
        /* @__PURE__ */ R.jsx(
          Ru,
          {
            type: "submit",
            disabled: o(n),
            children: t.text ?? Zp
          }
        )
      ]
    }
  );
}, bi = () => {
  const e = ht(To);
  if (!e)
    throw new Error("error");
  return e;
}, tm = "_container_1c297_1", em = "_text_1c297_13", nm = "_list_1c297_17", sm = "_title_1c297_22", im = "_line_1c297_27", rm = {
  container: tm,
  text: em,
  list: nm,
  title: sm,
  line: im
}, om = "_item_1llsg_1", am = "_text_1llsg_7", um = "_button_1llsg_11", lm = "_image_1llsg_19", rn = {
  item: om,
  text: am,
  button: um,
  image: lm
}, cm = ({ item: e, onClick: t }) => /* @__PURE__ */ R.jsxs("div", { className: rn.item, children: [
  /* @__PURE__ */ R.jsx(
    "button",
    {
      className: rn.button,
      onClick: () => t(e.value),
      children: /* @__PURE__ */ R.jsx(
        "img",
        {
          src: e.image,
          alt: e.text,
          className: rn.image
        }
      )
    }
  ),
  /* @__PURE__ */ R.jsx("p", { className: rn.text, children: e.text })
] }, e.id), hm = ({ item: e, onClose: t }) => {
  const { stage: n, onChangeRate: s, onChangeStage: i } = bi(), r = (o) => {
    s(o), i(n + 1);
  };
  return /* @__PURE__ */ R.jsxs(xi, { title: e.title, onClose: t, children: [
    e.text && /* @__PURE__ */ R.jsx("p", { className: "text-xs", children: e.text }),
    /* @__PURE__ */ R.jsx("div", { className: rm.list, children: Cp.map((o) => /* @__PURE__ */ R.jsx(cm, { item: o, onClick: r }, o.id)) })
  ] });
}, dm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAXCAYAAADpwXTaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgBpZWxbhNBEIZn9s5RlOoqRMfRISURh3gBp4xQkGlpHBdEJg3hCQJPgNMgKxQ4FXQnAojS5gEQhxQkyqOlcoUitLvDzK7PXCxzd4GRrPPO7n43M//sHsIlrP92o61JJYpsBIjZmgkmg3vZtJjHJpAH75MEtUkBKb44gzn7Rsc7Z09lFNSBHr5b71oLrxHpqnMQAwAYAjKO+Ne+ff8KfHr14yPWgYzFkU8Bcwb2hjtnExn30yS2gX7GfzsyVghb2BjUCraG21leXrObJtGK0mNekDBoov4VJDaS4iOduOwBEtUUJErunW52FtcTqELNSDUBOREIxrw13U/Xk/IeBBvNqNkcJm/9G6jsX4FWXuwREYDUIzcXYIaF0wTmMwJFVaBy7Zyayox97+FUtYJbLjJx/g+IAj+HUlhfD98r0kdlXxPQiztZ5vYb65tO+qRoSGvx5WVBYiFHc5O8Gl/ksc/nUBsdO1gDkPiJTwIhZCHM+wWmsGCr595XBXJ+gBgsxIoIv3tp6Zo8n/Mi9IcZfrLCe282nlSCCn8Y9hSgdTmTxc4BnzUHVtSbxRtz4Q5rQTO/+mVaI/ApRhzJoSBECGXC60hwJMLIU/qoCjQTkbufU3ER+GgeH9/9OoAlVqemg5WvEp8mjpDoZFWHmVzL/Q83YqvDLtf3QJp7GWgO+wM0A35rFyptOegCbJ7K6eYuAXW5VdqLECA6WrPhoPwRqYQVJsqeh9pfN6HOh9vfcqix31/Wm+B+aGglAAAAAElFTkSuQmCC", fm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgB7ZLBCYAwDEV/xaMDdAxX8+QYjuEYruMY5pBCKBJriKCYByG0oT/hN0AQvIlMsVIs8rKHD5mFMx6gTL5xdm3yQ/G54cEt8a46j9A3QtZ2iolzM9p0bp6fCZnFk9JEWgEYbUlKrf4Lk+dXFGvc91wycAQf5QDRWiP2UJqX7wAAAABJRU5ErkJggg==", pm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgBrZUvb8JQEMDvHl2WCVhJplA4JF2CJWMWwVcAgZ/iU2CQCMQQCCwCSwgW0W+wKtQWmpFsY396u3sUAmx9bJRf0vB6fe+Xu/fKFSFk7jg2BMEdIZYIwOGQDWZ8BHADxO6V696vgxjKsgHRiIdZOA5PId6mXdfTwqd8/iGGbFt6nXh0nBpbaxAfm7drqRRRFU4EEt1Y4QHscF6pbMYXjQaoZFKPabGAl2Zz82w5GOysExfy/tG+MD2ZAIaSKEQ+LxZ/xNVvk7eziCJqjoIDWbz1ept7KTHgmAnL9DCYzeC13dZiQeSpXA5ArmOECV6Y6nTguV7X0st+X8dMGEsW3kcj/SuHtB6bMGb4OZ2uyuQsBcn0rFAAi6+jhLJQylSZjL63h8ODr5OU7BsnhDLhkExcSlrQfvSDS5UTjkIOSObsg4iuxX/oMRCVth+IzC+X4b8EAF3FNbd47EF8PGm0ipuiL80xptQLHauOvUZ6I2dcJaK/fQJ4z74AxvyqtCQxCX4DHO+Vksdja9oAAAAASUVORK5CYII=";
var mt = [];
for (var gs = 0; gs < 256; ++gs)
  mt.push((gs + 256).toString(16).slice(1));
function mm(e, t = 0) {
  return (mt[e[t + 0]] + mt[e[t + 1]] + mt[e[t + 2]] + mt[e[t + 3]] + "-" + mt[e[t + 4]] + mt[e[t + 5]] + "-" + mt[e[t + 6]] + mt[e[t + 7]] + "-" + mt[e[t + 8]] + mt[e[t + 9]] + "-" + mt[e[t + 10]] + mt[e[t + 11]] + mt[e[t + 12]] + mt[e[t + 13]] + mt[e[t + 14]] + mt[e[t + 15]]).toLowerCase();
}
var on, gm = new Uint8Array(16);
function vm() {
  if (!on && (on = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !on))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return on(gm);
}
var ym = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ao = {
  randomUUID: ym
};
function Am(e, t, n) {
  if (Ao.randomUUID && !t && !e)
    return Ao.randomUUID();
  e = e || {};
  var s = e.random || (e.rng || vm)();
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, mm(s);
}
const xm = ({ item: e, onClose: t }) => {
  const { stage: n, onChangeStage: s } = bi(), [i, r] = Rt(""), [o, a] = Rt([]), u = En(), c = (m) => {
    r(m.target.value);
  }, l = async (m) => {
    var g;
    try {
      if (!((g = m.target.files) != null && g[0])) return;
      const x = {
        id: Am(),
        name: m.target.files[0].name
        // image64: await convertFileToBase64(event.target.files[0]),
      };
      a((C) => [...C, x]);
    } catch {
      a(o);
    }
  }, h = (m) => {
    a((g) => [...g.filter((x) => x.id !== m)]);
  }, d = (m) => {
    m.preventDefault(), console.log(i), console.log(o), s(n + 1);
  }, p = te(
    (m) => !m.length || m.length > 1e3,
    [i]
  );
  return /* @__PURE__ */ R.jsxs(xi, { onSubmit: d, title: e.title, onClose: t, children: [
    /* @__PURE__ */ R.jsx(
      "textarea",
      {
        className: "border-2 border-[#66B22C] border-solid h-36 rounded-xl resize-none py-3 px-4 outline-none",
        placeholder: "Мне бы хотелось, чтобы",
        onChange: c,
        value: i
      }
    ),
    /* @__PURE__ */ R.jsx("ul", { className: "flex flex-col gap-2", children: o.map((m) => /* @__PURE__ */ R.jsxs("li", { className: "flex gap-2 items-center", children: [
      /* @__PURE__ */ R.jsx("img", { src: fm }),
      /* @__PURE__ */ R.jsx("p", { children: m.name }),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          onClick: () => h(m.id),
          className: "ml-auto",
          children: /* @__PURE__ */ R.jsx("img", { src: pm })
        }
      )
    ] }, m.id)) }),
    /* @__PURE__ */ R.jsxs("div", { className: "self-end w-full", children: [
      /* @__PURE__ */ R.jsx(
        "input",
        {
          type: "file",
          accept: "image/png, image/jpeg",
          className: "opacity-0 absolute invisible",
          onChange: l,
          id: u
        }
      ),
      /* @__PURE__ */ R.jsxs(
        "label",
        {
          htmlFor: u,
          className: "h-20 bg-[#ECF5E4] rounded-xl flex items-center justify-center gap-4 px-5 py-4 cursor-pointer",
          children: [
            /* @__PURE__ */ R.jsx("img", { src: dm, alt: "прикрепить изображение" }),
            /* @__PURE__ */ R.jsx("p", { className: "font-bold text-start", children: "Прикрепить скриншот" })
          ]
        }
      )
    ] }),
    e.button && /* @__PURE__ */ R.jsx(
      Ru,
      {
        type: "submit",
        disabled: p(i),
        bgColor: e.buttonColor,
        children: e.button
      }
    )
  ] });
}, bm = (e) => {
  const { stage: t, onChangeStage: n } = bi(), [s, i] = Rt(!1);
  Pt(() => {
    const a = setTimeout(() => {
      i(!0);
    }, 5e3);
    return () => clearTimeout(a);
  }, [s]);
  const r = () => {
    i(!1), n(0);
  }, o = (a) => {
    switch (t) {
      case 0:
        return /* @__PURE__ */ R.jsx(
          hm,
          {
            item: a,
            ...e,
            onClose: r,
            isVisible: s
          },
          a.id
        );
      case 1:
        return /* @__PURE__ */ R.jsx(
          xm,
          {
            item: a,
            ...e,
            onClose: r,
            isVisible: s
          },
          a.id
        );
      case 2:
        return /* @__PURE__ */ R.jsx(
          $p,
          {
            item: a,
            ...e,
            onClose: r,
            isVisible: s
          },
          a.id
        );
    }
  };
  return /* @__PURE__ */ R.jsx(gp, { ...e, isVisible: s, onClose: r, children: kp.map((a, u) => {
    if (u === t)
      return o(a);
  }) });
}, Rm = (e) => /* @__PURE__ */ R.jsx(il, { children: /* @__PURE__ */ R.jsx(bm, { ...e }) });
export {
  Rm as Feedback
};
//# sourceMappingURL=index.es.js.map
