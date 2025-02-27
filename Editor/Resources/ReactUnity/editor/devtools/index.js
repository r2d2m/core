/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "../../../node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


exports.ConcurrentRoot = 1;
exports.ContinuousEventPriority = 4;
exports.DefaultEventPriority = 16;
exports.DiscreteEventPriority = 1;
exports.IdleEventPriority = 536870912;
exports.LegacyRoot = 0;

/***/ }),

/***/ "../../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  'use strict';

  var aa = __webpack_require__("../../../node_modules/react/index.js"),
      ba = __webpack_require__("../../../node_modules/scheduler/index.js"),
      ca = Object.assign;

  function m(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var da = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ea = Symbol["for"]("react.element"),
      fa = Symbol["for"]("react.portal"),
      ha = Symbol["for"]("react.fragment"),
      ia = Symbol["for"]("react.strict_mode"),
      ja = Symbol["for"]("react.profiler"),
      ka = Symbol["for"]("react.provider"),
      la = Symbol["for"]("react.context"),
      ma = Symbol["for"]("react.forward_ref"),
      na = Symbol["for"]("react.suspense"),
      oa = Symbol["for"]("react.suspense_list"),
      pa = Symbol["for"]("react.memo"),
      qa = Symbol["for"]("react.lazy");
  Symbol["for"]("react.scope");
  Symbol["for"]("react.debug_trace_mode");
  var ra = Symbol["for"]("react.offscreen");
  Symbol["for"]("react.legacy_hidden");
  Symbol["for"]("react.cache");
  Symbol["for"]("react.tracing_marker");
  var sa = Symbol.iterator;

  function ta(a) {
    if (null === a || "object" !== typeof a) return null;
    a = sa && a[sa] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function ua(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case ha:
        return "Fragment";

      case fa:
        return "Portal";

      case ja:
        return "Profiler";

      case ia:
        return "StrictMode";

      case na:
        return "Suspense";

      case oa:
        return "SuspenseList";
    }

    if ("object" === typeof a) switch (a.$$typeof) {
      case la:
        return (a.displayName || "Context") + ".Consumer";

      case ka:
        return (a._context.displayName || "Context") + ".Provider";

      case ma:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;

      case pa:
        return b = a.displayName || null, null !== b ? b : ua(a.type) || "Memo";

      case qa:
        b = a._payload;
        a = a._init;

        try {
          return ua(a(b));
        } catch (c) {}

    }
    return null;
  }

  function va(a) {
    var b = a.type;

    switch (a.tag) {
      case 24:
        return "Cache";

      case 9:
        return (b.displayName || "Context") + ".Consumer";

      case 10:
        return (b._context.displayName || "Context") + ".Provider";

      case 18:
        return "DehydratedFragment";

      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

      case 7:
        return "Fragment";

      case 5:
        return b;

      case 4:
        return "Portal";

      case 3:
        return "Root";

      case 6:
        return "Text";

      case 16:
        return ua(b);

      case 8:
        return b === ia ? "StrictMode" : "Mode";

      case 22:
        return "Offscreen";

      case 12:
        return "Profiler";

      case 21:
        return "Scope";

      case 13:
        return "Suspense";

      case 19:
        return "SuspenseList";

      case 25:
        return "TracingMarker";

      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }

    return null;
  }

  function wa(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b["return"];) {
      b = b["return"];
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 4098) && (c = b["return"]), a = b["return"];
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function xa(a) {
    if (wa(a) !== a) throw Error(m(188));
  }

  function ya(a) {
    var b = a.alternate;

    if (!b) {
      b = wa(a);
      if (null === b) throw Error(m(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c["return"];
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e["return"];

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return xa(e), a;
          if (f === d) return xa(e), b;
          f = f.sibling;
        }

        throw Error(m(188));
      }

      if (c["return"] !== d["return"]) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(m(189));
        }
      }
      if (c.alternate !== d) throw Error(m(190));
    }

    if (3 !== c.tag) throw Error(m(188));
    return c.stateNode.current === c ? a : b;
  }

  function Aa(a) {
    a = ya(a);
    return null !== a ? Ba(a) : null;
  }

  function Ba(a) {
    if (5 === a.tag || 6 === a.tag) return a;

    for (a = a.child; null !== a;) {
      var b = Ba(a);
      if (null !== b) return b;
      a = a.sibling;
    }

    return null;
  }

  function Ca(a) {
    if (5 === a.tag || 6 === a.tag) return a;

    for (a = a.child; null !== a;) {
      if (4 !== a.tag) {
        var b = Ca(a);
        if (null !== b) return b;
      }

      a = a.sibling;
    }

    return null;
  }

  var Da = Array.isArray,
      Ea = $$$hostConfig.getPublicInstance,
      Fa = $$$hostConfig.getRootHostContext,
      Ga = $$$hostConfig.getChildHostContext,
      Ha = $$$hostConfig.prepareForCommit,
      Ia = $$$hostConfig.resetAfterCommit,
      Ja = $$$hostConfig.createInstance,
      Ka = $$$hostConfig.appendInitialChild,
      La = $$$hostConfig.finalizeInitialChildren,
      Ma = $$$hostConfig.prepareUpdate,
      Na = $$$hostConfig.shouldSetTextContent,
      Oa = $$$hostConfig.createTextInstance,
      Pa = $$$hostConfig.scheduleTimeout,
      Qa = $$$hostConfig.cancelTimeout,
      Ra = $$$hostConfig.noTimeout,
      Sa = $$$hostConfig.isPrimaryRenderer,
      Ta = $$$hostConfig.supportsMutation,
      Ua = $$$hostConfig.supportsPersistence,
      Va = $$$hostConfig.supportsHydration,
      Wa = $$$hostConfig.getInstanceFromNode,
      Xa = $$$hostConfig.preparePortalMount,
      Ya = $$$hostConfig.getCurrentEventPriority,
      Za = $$$hostConfig.detachDeletedInstance,
      $a = $$$hostConfig.supportsMicrotasks,
      ab = $$$hostConfig.scheduleMicrotask,
      bb = $$$hostConfig.supportsTestSelectors,
      cb = $$$hostConfig.findFiberRoot,
      db = $$$hostConfig.getBoundingRect,
      eb = $$$hostConfig.getTextContent,
      fb = $$$hostConfig.isHiddenSubtree,
      gb = $$$hostConfig.matchAccessibilityRole,
      hb = $$$hostConfig.setFocusIfFocusable,
      ib = $$$hostConfig.setupIntersectionObserver,
      jb = $$$hostConfig.appendChild,
      kb = $$$hostConfig.appendChildToContainer,
      lb = $$$hostConfig.commitTextUpdate,
      mb = $$$hostConfig.commitMount,
      nb = $$$hostConfig.commitUpdate,
      ob = $$$hostConfig.insertBefore,
      pb = $$$hostConfig.insertInContainerBefore,
      qb = $$$hostConfig.removeChild,
      rb = $$$hostConfig.removeChildFromContainer,
      sb = $$$hostConfig.resetTextContent,
      tb = $$$hostConfig.hideInstance,
      ub = $$$hostConfig.hideTextInstance,
      vb = $$$hostConfig.unhideInstance,
      wb = $$$hostConfig.unhideTextInstance,
      xb = $$$hostConfig.clearContainer,
      yb = $$$hostConfig.cloneInstance,
      zb = $$$hostConfig.createContainerChildSet,
      Ab = $$$hostConfig.appendChildToContainerChildSet,
      Bb = $$$hostConfig.finalizeContainerChildren,
      Cb = $$$hostConfig.replaceContainerChildren,
      Eb = $$$hostConfig.cloneHiddenInstance,
      Fb = $$$hostConfig.cloneHiddenTextInstance,
      Gb = $$$hostConfig.canHydrateInstance,
      Hb = $$$hostConfig.canHydrateTextInstance,
      Ib = $$$hostConfig.canHydrateSuspenseInstance,
      Jb = $$$hostConfig.isSuspenseInstancePending,
      Kb = $$$hostConfig.isSuspenseInstanceFallback,
      Lb = $$$hostConfig.getSuspenseInstanceFallbackErrorDetails,
      Mb = $$$hostConfig.registerSuspenseInstanceRetry,
      Nb = $$$hostConfig.getNextHydratableSibling,
      Ob = $$$hostConfig.getFirstHydratableChild,
      Pb = $$$hostConfig.getFirstHydratableChildWithinContainer,
      Qb = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,
      Rb = $$$hostConfig.hydrateInstance,
      Sb = $$$hostConfig.hydrateTextInstance,
      Tb = $$$hostConfig.hydrateSuspenseInstance,
      Ub = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      Vb = $$$hostConfig.commitHydratedContainer,
      Wb = $$$hostConfig.commitHydratedSuspenseInstance,
      Xb = $$$hostConfig.clearSuspenseBoundary,
      Yb = $$$hostConfig.clearSuspenseBoundaryFromContainer,
      Zb = $$$hostConfig.shouldDeleteUnhydratedTailInstances,
      $b = $$$hostConfig.didNotMatchHydratedContainerTextInstance,
      ac = $$$hostConfig.didNotMatchHydratedTextInstance,
      bc;

  function cc(a) {
    if (void 0 === bc) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      bc = b && b[1] || "";
    }
    return "\n" + bc + a;
  }

  var dc = !1;

  function ec(a, b) {
    if (!a || dc) return "";
    dc = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }

        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      dc = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? cc(a) : "";
  }

  var fc = Object.prototype.hasOwnProperty,
      gc = [],
      hc = -1;

  function ic(a) {
    return {
      current: a
    };
  }

  function q(a) {
    0 > hc || (a.current = gc[hc], gc[hc] = null, hc--);
  }

  function v(a, b) {
    hc++;
    gc[hc] = a.current;
    a.current = b;
  }

  var jc = {},
      x = ic(jc),
      z = ic(!1),
      kc = jc;

  function lc(a, b) {
    var c = a.type.contextTypes;
    if (!c) return jc;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function A(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function mc() {
    q(z);
    q(x);
  }

  function nc(a, b, c) {
    if (x.current !== jc) throw Error(m(168));
    v(x, b);
    v(z, c);
  }

  function oc(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in b)) throw Error(m(108, va(a) || "Unknown", e));
    }

    return ca({}, c, d);
  }

  function pc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || jc;
    kc = x.current;
    v(x, a);
    v(z, z.current);
    return !0;
  }

  function rc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(m(169));
    c ? (a = oc(a, b, kc), d.__reactInternalMemoizedMergedChildContext = a, q(z), q(x), v(x, a)) : q(z);
    v(z, c);
  }

  var tc = Math.clz32 ? Math.clz32 : sc,
      uc = Math.log,
      vc = Math.LN2;

  function sc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
  }

  var wc = 64,
      xc = 4194304;

  function yc(a) {
    switch (a & -a) {
      case 1:
        return 1;

      case 2:
        return 2;

      case 4:
        return 4;

      case 8:
        return 8;

      case 16:
        return 16;

      case 32:
        return 32;

      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;

      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;

      case 134217728:
        return 134217728;

      case 268435456:
        return 268435456;

      case 536870912:
        return 536870912;

      case 1073741824:
        return 1073741824;

      default:
        return a;
    }
  }

  function zc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0,
        e = a.suspendedLanes,
        f = a.pingedLanes,
        g = c & 268435455;

    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = yc(h) : (f &= g, 0 !== f && (d = yc(f)));
    } else g = c & ~e, 0 !== g ? d = yc(g) : 0 !== f && (d = yc(f));

    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - tc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function Ac(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;

      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5E3;

      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;

      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;

      default:
        return -1;
    }
  }

  function Bc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
      var g = 31 - tc(f),
          h = 1 << g,
          k = e[g];

      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = Ac(h, b);
      } else k <= b && (a.expiredLanes |= h);

      f &= ~h;
    }
  }

  function Cc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function Dc() {
    var a = wc;
    wc <<= 1;
    0 === (wc & 4194240) && (wc = 64);
    return a;
  }

  function Ec(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function Fc(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - tc(b);
    a[b] = c;
  }

  function Gc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;

    for (a = a.expirationTimes; 0 < c;) {
      var e = 31 - tc(c),
          f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }

  function Hc(a, b) {
    var c = a.entangledLanes |= b;

    for (a = a.entanglements; c;) {
      var d = 31 - tc(c),
          e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }

  var C = 0;

  function Ic(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }

  var Jc = ba.unstable_scheduleCallback,
      Kc = ba.unstable_cancelCallback,
      Lc = ba.unstable_shouldYield,
      Mc = ba.unstable_requestPaint,
      D = ba.unstable_now,
      Nc = ba.unstable_ImmediatePriority,
      Oc = ba.unstable_UserBlockingPriority,
      Pc = ba.unstable_NormalPriority,
      Qc = ba.unstable_IdlePriority,
      Rc = null,
      Sc = null;

  function Tc(a) {
    if (Sc && "function" === typeof Sc.onCommitFiberRoot) try {
      Sc.onCommitFiberRoot(Rc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
  }

  function Uc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var Vc = "function" === typeof Object.is ? Object.is : Uc,
      Wc = null,
      Xc = !1,
      Yc = !1;

  function Zc(a) {
    null === Wc ? Wc = [a] : Wc.push(a);
  }

  function $c(a) {
    Xc = !0;
    Zc(a);
  }

  function ad() {
    if (!Yc && null !== Wc) {
      Yc = !0;
      var a = 0,
          b = C;

      try {
        var c = Wc;

        for (C = 1; a < c.length; a++) {
          var d = c[a];

          do {
            d = d(!0);
          } while (null !== d);
        }

        Wc = null;
        Xc = !1;
      } catch (e) {
        throw null !== Wc && (Wc = Wc.slice(a + 1)), Jc(Nc, ad), e;
      } finally {
        C = b, Yc = !1;
      }
    }

    return null;
  }

  var bd = [],
      cd = 0,
      dd = null,
      ed = 0,
      fd = [],
      gd = 0,
      hd = null,
      id = 1,
      jd = "";

  function kd(a, b) {
    bd[cd++] = ed;
    bd[cd++] = dd;
    dd = a;
    ed = b;
  }

  function ld(a, b, c) {
    fd[gd++] = id;
    fd[gd++] = jd;
    fd[gd++] = hd;
    hd = a;
    var d = id;
    a = jd;
    var e = 32 - tc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - tc(b) + e;

    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      id = 1 << 32 - tc(b) + e | c << e | d;
      jd = f + a;
    } else id = 1 << f | c << e | d, jd = a;
  }

  function md(a) {
    null !== a["return"] && (kd(a, 1), ld(a, 1, 0));
  }

  function nd(a) {
    for (; a === dd;) {
      dd = bd[--cd], bd[cd] = null, ed = bd[--cd], bd[cd] = null;
    }

    for (; a === hd;) {
      hd = fd[--gd], fd[gd] = null, jd = fd[--gd], fd[gd] = null, id = fd[--gd], fd[gd] = null;
    }
  }

  var od = null,
      pd = null,
      F = !1,
      qd = !1,
      rd = null;

  function sd(a, b) {
    var c = td(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c["return"] = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }

  function ud(a, b) {
    switch (a.tag) {
      case 5:
        return b = Gb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = Ob(b), !0) : !1;

      case 6:
        return b = Hb(b, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = null, !0) : !1;

      case 13:
        b = Ib(b);

        if (null !== b) {
          var c = null !== hd ? {
            id: id,
            overflow: jd
          } : null;
          a.memoizedState = {
            dehydrated: b,
            treeContext: c,
            retryLane: 1073741824
          };
          c = td(18, null, null, 0);
          c.stateNode = b;
          c["return"] = a;
          a.child = c;
          od = a;
          pd = null;
          return !0;
        }

        return !1;

      default:
        return !1;
    }
  }

  function vd(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }

  function wd(a) {
    if (F) {
      var b = pd;

      if (b) {
        var c = b;

        if (!ud(a, b)) {
          if (vd(a)) throw Error(m(418));
          b = Nb(c);
          var d = od;
          b && ud(a, b) ? sd(d, c) : (a.flags = a.flags & -4097 | 2, F = !1, od = a);
        }
      } else {
        if (vd(a)) throw Error(m(418));
        a.flags = a.flags & -4097 | 2;
        F = !1;
        od = a;
      }
    }
  }

  function xd(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a["return"];
    }

    od = a;
  }

  function yd(a) {
    if (!Va || a !== od) return !1;
    if (!F) return xd(a), F = !0, !1;

    if (3 !== a.tag && (5 !== a.tag || Zb(a.type) && !Na(a.type, a.memoizedProps))) {
      var b = pd;

      if (b) {
        if (vd(a)) throw zd(), Error(m(418));

        for (; b;) {
          sd(a, b), b = Nb(b);
        }
      }
    }

    xd(a);

    if (13 === a.tag) {
      if (!Va) throw Error(m(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(m(317));
      pd = Ub(a);
    } else pd = od ? Nb(a.stateNode) : null;

    return !0;
  }

  function zd() {
    for (var a = pd; a;) {
      a = Nb(a);
    }
  }

  function Ad() {
    Va && (pd = od = null, qd = F = !1);
  }

  function Bd(a) {
    null === rd ? rd = [a] : rd.push(a);
  }

  var Cd = da.ReactCurrentBatchConfig;

  function Dd(a, b) {
    if (Vc(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!fc.call(b, e) || !Vc(a[e], b[e])) return !1;
    }

    return !0;
  }

  function Ed(a) {
    switch (a.tag) {
      case 5:
        return cc(a.type);

      case 16:
        return cc("Lazy");

      case 13:
        return cc("Suspense");

      case 19:
        return cc("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = ec(a.type, !1), a;

      case 11:
        return a = ec(a.type.render, !1), a;

      case 1:
        return a = ec(a.type, !0), a;

      default:
        return "";
    }
  }

  function Fd(a, b) {
    if (a && a.defaultProps) {
      b = ca({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var Gd = ic(null),
      Hd = null,
      Id = null,
      Jd = null;

  function Kd() {
    Jd = Id = Hd = null;
  }

  function Ld(a, b, c) {
    Sa ? (v(Gd, b._currentValue), b._currentValue = c) : (v(Gd, b._currentValue2), b._currentValue2 = c);
  }

  function Md(a) {
    var b = Gd.current;
    q(Gd);
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }

  function Nd(a, b, c) {
    for (; null !== a;) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a["return"];
    }
  }

  function Od(a, b) {
    Hd = a;
    Jd = Id = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (G = !0), a.firstContext = null);
  }

  function Pd(a) {
    var b = Sa ? a._currentValue : a._currentValue2;
    if (Jd !== a) if (a = {
      context: a,
      memoizedValue: b,
      next: null
    }, null === Id) {
      if (null === Hd) throw Error(m(308));
      Id = a;
      Hd.dependencies = {
        lanes: 0,
        firstContext: a
      };
    } else Id = Id.next = a;
    return b;
  }

  var Qd = null;

  function Rd(a) {
    null === Qd ? Qd = [a] : Qd.push(a);
  }

  function Sd(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, Rd(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Td(a, d);
  }

  function Td(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a["return"]; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a["return"];
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  var Ud = !1;

  function Vd(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }

  function Wd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function Xd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function Yd(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;

    if (0 !== (H & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return Td(a, c);
    }

    e = d.interleaved;
    null === e ? (b.next = b, Rd(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Td(a, c);
  }

  function Zd(a, b, c) {
    b = b.updateQueue;

    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }

  function $d(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function ae(a, b, c, d) {
    var e = a.updateQueue;
    Ud = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var n = a.alternate;
      null !== n && (n = n.updateQueue, h = n.lastBaseUpdate, h !== g && (null === h ? n.firstBaseUpdate = l : h.next = l, n.lastBaseUpdate = k));
    }

    if (null !== f) {
      var t = e.baseState;
      g = 0;
      n = l = k = null;
      h = f;

      do {
        var p = h.lane,
            B = h.eventTime;

        if ((d & p) === p) {
          null !== n && (n = n.next = {
            eventTime: B,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });

          a: {
            var w = a,
                Z = h;
            p = b;
            B = c;

            switch (Z.tag) {
              case 1:
                w = Z.payload;

                if ("function" === typeof w) {
                  t = w.call(B, t, p);
                  break a;
                }

                t = w;
                break a;

              case 3:
                w.flags = w.flags & -65537 | 128;

              case 0:
                w = Z.payload;
                p = "function" === typeof w ? w.call(B, t, p) : w;
                if (null === p || void 0 === p) break a;
                t = ca({}, t, p);
                break a;

              case 2:
                Ud = !0;
            }
          }

          null !== h.callback && 0 !== h.lane && (a.flags |= 64, p = e.effects, null === p ? e.effects = [h] : p.push(h));
        } else B = {
          eventTime: B,
          lane: p,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        }, null === n ? (l = n = B, k = t) : n = n.next = B, g |= p;

        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;else p = h, h = p.next, p.next = null, e.lastBaseUpdate = p, e.shared.pending = null;
      } while (1);

      null === n && (k = t);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      b = e.shared.interleaved;

      if (null !== b) {
        e = b;

        do {
          g |= e.lane, e = e.next;
        } while (e !== b);
      } else null === f && (e.shared.lanes = 0);

      be |= g;
      a.lanes = g;
      a.memoizedState = t;
    }
  }

  function ce(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(m(191, e));
        e.call(d);
      }
    }
  }

  var de = new aa.Component().refs;

  function ee(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var he = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? wa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = I(),
          e = fe(a),
          f = Xd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Yd(a, f, e);
      null !== b && (ge(b, a, e, d), Zd(b, a, e));
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = I(),
          e = fe(a),
          f = Xd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = Yd(a, f, e);
      null !== b && (ge(b, a, e, d), Zd(b, a, e));
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = I(),
          d = fe(a),
          e = Xd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = Yd(a, e, d);
      null !== b && (ge(b, a, d, c), Zd(b, a, d));
    }
  };

  function ie(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Dd(c, d) || !Dd(e, f) : !0;
  }

  function je(a, b, c) {
    var d = !1,
        e = jc;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = Pd(f) : (e = A(b) ? kc : x.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? lc(a, e) : jc);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = he;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function ke(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && he.enqueueReplaceState(b, b.state, null);
  }

  function le(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = de;
    Vd(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = Pd(f) : (f = A(b) ? kc : x.current, e.context = lc(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (ee(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && he.enqueueReplaceState(e, e.state, null), ae(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }

  function me(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(m(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(m(147, a));
        var e = d,
            f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;

        b = function b(a) {
          var b = e.refs;
          b === de && (b = e.refs = {});
          null === a ? delete b[f] : b[f] = a;
        };

        b._stringRef = f;
        return b;
      }

      if ("string" !== typeof a) throw Error(m(284));
      if (!c._owner) throw Error(m(290, a));
    }

    return a;
  }

  function ne(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(m(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }

  function oe(a) {
    var b = a._init;
    return b(a._payload);
  }

  function pe(a) {
    function b(b, c) {
      if (a) {
        var d = b.deletions;
        null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = qe(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return b.flags |= 1048576, c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
      b.flags |= 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags |= 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = re(c, a.mode, d), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function k(a, b, c, d) {
      var f = c.type;
      if (f === ha) return n(a, b, c.props.children, d, c.key);
      if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === qa && oe(f) === b.type)) return d = e(b, c.props), d.ref = me(a, b, c), d["return"] = a, d;
      d = se(c.type, c.key, c.props, null, a.mode, d);
      d.ref = me(a, b, c);
      d["return"] = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = te(c, a.mode, d), b["return"] = a, b;
      b = e(b, c.children || []);
      b["return"] = a;
      return b;
    }

    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = ue(c, a.mode, d, f), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function t(a, b, c) {
      if ("string" === typeof b && "" !== b || "number" === typeof b) return b = re("" + b, a.mode, c), b["return"] = a, b;

      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case ea:
            return c = se(b.type, b.key, b.props, null, a.mode, c), c.ref = me(a, null, b), c["return"] = a, c;

          case fa:
            return b = te(b, a.mode, c), b["return"] = a, b;

          case qa:
            var d = b._init;
            return t(a, d(b._payload), c);
        }

        if (Da(b) || ta(b)) return b = ue(b, a.mode, c, null), b["return"] = a, b;
        ne(a, b);
      }

      return null;
    }

    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case ea:
            return c.key === e ? k(a, b, c, d) : null;

          case fa:
            return c.key === e ? l(a, b, c, d) : null;

          case qa:
            return e = c._init, p(a, b, e(c._payload), d);
        }

        if (Da(c) || ta(c)) return null !== e ? null : n(a, b, c, d, null);
        ne(a, c);
      }

      return null;
    }

    function B(a, b, c, d, e) {
      if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

          case fa:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

          case qa:
            var f = d._init;
            return B(a, b, c, f(d._payload), e);
        }

        if (Da(d) || ta(d)) return a = a.get(c) || null, n(b, a, d, e, null);
        ne(b, d);
      }

      return null;
    }

    function w(e, g, h, k) {
      for (var l = null, n = null, r = g, u = g = 0, E = null; null !== r && u < h.length; u++) {
        r.index > u ? (E = r, r = null) : E = r.sibling;
        var y = p(e, r, h[u], k);

        if (null === y) {
          null === r && (r = E);
          break;
        }

        a && r && null === y.alternate && b(e, r);
        g = f(y, g, u);
        null === n ? l = y : n.sibling = y;
        n = y;
        r = E;
      }

      if (u === h.length) return c(e, r), F && kd(e, u), l;

      if (null === r) {
        for (; u < h.length; u++) {
          r = t(e, h[u], k), null !== r && (g = f(r, g, u), null === n ? l = r : n.sibling = r, n = r);
        }

        F && kd(e, u);
        return l;
      }

      for (r = d(e, r); u < h.length; u++) {
        E = B(r, e, u, h[u], k), null !== E && (a && null !== E.alternate && r["delete"](null === E.key ? u : E.key), g = f(E, g, u), null === n ? l = E : n.sibling = E, n = E);
      }

      a && r.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, u);
      return l;
    }

    function Z(e, g, h, k) {
      var l = ta(h);
      if ("function" !== typeof l) throw Error(m(150));
      h = l.call(h);
      if (null == h) throw Error(m(151));

      for (var n = l = null, r = g, u = g = 0, E = null, y = h.next(); null !== r && !y.done; u++, y = h.next()) {
        r.index > u ? (E = r, r = null) : E = r.sibling;
        var w = p(e, r, y.value, k);

        if (null === w) {
          null === r && (r = E);
          break;
        }

        a && r && null === w.alternate && b(e, r);
        g = f(w, g, u);
        null === n ? l = w : n.sibling = w;
        n = w;
        r = E;
      }

      if (y.done) return c(e, r), F && kd(e, u), l;

      if (null === r) {
        for (; !y.done; u++, y = h.next()) {
          y = t(e, y.value, k), null !== y && (g = f(y, g, u), null === n ? l = y : n.sibling = y, n = y);
        }

        F && kd(e, u);
        return l;
      }

      for (r = d(e, r); !y.done; u++, y = h.next()) {
        y = B(r, e, u, y.value, k), null !== y && (a && null !== y.alternate && r["delete"](null === y.key ? u : y.key), g = f(y, g, u), null === n ? l = y : n.sibling = y, n = y);
      }

      a && r.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, u);
      return l;
    }

    function za(a, d, f, h) {
      "object" === typeof f && null !== f && f.type === ha && null === f.key && (f = f.props.children);

      if ("object" === typeof f && null !== f) {
        switch (f.$$typeof) {
          case ea:
            a: {
              for (var k = f.key, l = d; null !== l;) {
                if (l.key === k) {
                  k = f.type;

                  if (k === ha) {
                    if (7 === l.tag) {
                      c(a, l.sibling);
                      d = e(l, f.props.children);
                      d["return"] = a;
                      a = d;
                      break a;
                    }
                  } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === qa && oe(k) === l.type) {
                    c(a, l.sibling);
                    d = e(l, f.props);
                    d.ref = me(a, l, f);
                    d["return"] = a;
                    a = d;
                    break a;
                  }

                  c(a, l);
                  break;
                } else b(a, l);

                l = l.sibling;
              }

              f.type === ha ? (d = ue(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = se(f.type, f.key, f.props, null, a.mode, h), h.ref = me(a, d, f), h["return"] = a, a = h);
            }

            return g(a);

          case fa:
            a: {
              for (l = f.key; null !== d;) {
                if (d.key === l) {
                  if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d["return"] = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                } else b(a, d);
                d = d.sibling;
              }

              d = te(f, a.mode, h);
              d["return"] = a;
              a = d;
            }

            return g(a);

          case qa:
            return l = f._init, za(a, d, l(f._payload), h);
        }

        if (Da(f)) return w(a, d, f, h);
        if (ta(f)) return Z(a, d, f, h);
        ne(a, f);
      }

      return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d["return"] = a, a = d) : (c(a, d), d = re(f, a.mode, h), d["return"] = a, a = d), g(a)) : c(a, d);
    }

    return za;
  }

  var ve = pe(!0),
      we = pe(!1),
      xe = {},
      ye = ic(xe),
      ze = ic(xe),
      Ae = ic(xe);

  function Be(a) {
    if (a === xe) throw Error(m(174));
    return a;
  }

  function Ce(a, b) {
    v(Ae, b);
    v(ze, a);
    v(ye, xe);
    a = Fa(b);
    q(ye);
    v(ye, a);
  }

  function De() {
    q(ye);
    q(ze);
    q(Ae);
  }

  function Ee(a) {
    var b = Be(Ae.current),
        c = Be(ye.current);
    b = Ga(c, a.type, b);
    c !== b && (v(ze, a), v(ye, b));
  }

  function Fe(a) {
    ze.current === a && (q(ye), q(ze));
  }

  var J = ic(0);

  function Ge(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Jb(c) || Kb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child["return"] = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b["return"] || b["return"] === a) return null;
        b = b["return"];
      }

      b.sibling["return"] = b["return"];
      b = b.sibling;
    }

    return null;
  }

  var He = [];

  function Ie() {
    for (var a = 0; a < He.length; a++) {
      var b = He[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }

    He.length = 0;
  }

  var Je = da.ReactCurrentDispatcher,
      Ke = da.ReactCurrentBatchConfig,
      Le = 0,
      K = null,
      L = null,
      M = null,
      Me = !1,
      Ne = !1,
      Oe = 0,
      Pe = 0;

  function N() {
    throw Error(m(321));
  }

  function Qe(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!Vc(a[c], b[c])) return !1;
    }

    return !0;
  }

  function Re(a, b, c, d, e, f) {
    Le = f;
    K = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Je.current = null === a || null === a.memoizedState ? Se : Te;
    a = c(d, e);

    if (Ne) {
      f = 0;

      do {
        Ne = !1;
        Oe = 0;
        if (25 <= f) throw Error(m(301));
        f += 1;
        M = L = null;
        b.updateQueue = null;
        Je.current = Ue;
        a = c(d, e);
      } while (Ne);
    }

    Je.current = Ve;
    b = null !== L && null !== L.next;
    Le = 0;
    M = L = K = null;
    Me = !1;
    if (b) throw Error(m(300));
    return a;
  }

  function We() {
    var a = 0 !== Oe;
    Oe = 0;
    return a;
  }

  function Xe() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === M ? K.memoizedState = M = a : M = M.next = a;
    return M;
  }

  function Ye() {
    if (null === L) {
      var a = K.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = L.next;

    var b = null === M ? K.memoizedState : M.next;
    if (null !== b) M = b, L = a;else {
      if (null === a) throw Error(m(310));
      L = a;
      a = {
        memoizedState: L.memoizedState,
        baseState: L.baseState,
        baseQueue: L.baseQueue,
        queue: L.queue,
        next: null
      };
      null === M ? K.memoizedState = M = a : M = M.next = a;
    }
    return M;
  }

  function Ze(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function $e(a) {
    var b = Ye(),
        c = b.queue;
    if (null === c) throw Error(m(311));
    c.lastRenderedReducer = a;
    var d = L,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null,
          k = null,
          l = f;

      do {
        var n = l.lane;
        if ((Le & n) === n) null !== k && (k = k.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
          var t = {
            lane: n,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = t, g = d) : k = k.next = t;
          K.lanes |= n;
          be |= n;
        }
        l = l.next;
      } while (null !== l && l !== f);

      null === k ? g = d : k.next = h;
      Vc(d, b.memoizedState) || (G = !0);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }

    a = c.interleaved;

    if (null !== a) {
      e = a;

      do {
        f = e.lane, K.lanes |= f, be |= f, e = e.next;
      } while (e !== a);
    } else null === e && (c.lanes = 0);

    return [b.memoizedState, c.dispatch];
  }

  function af(a) {
    var b = Ye(),
        c = b.queue;
    if (null === c) throw Error(m(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      Vc(f, b.memoizedState) || (G = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function bf() {}

  function cf(a, b) {
    var c = K,
        d = Ye(),
        e = b(),
        f = !Vc(d.memoizedState, e);
    f && (d.memoizedState = e, G = !0);
    d = d.queue;
    df(ef.bind(null, c, d, a), [a]);

    if (d.getSnapshot !== b || f || null !== M && M.memoizedState.tag & 1) {
      c.flags |= 2048;
      ff(9, gf.bind(null, c, d, e, b), void 0, null);
      if (null === O) throw Error(m(349));
      0 !== (Le & 30) || hf(c, b, e);
    }

    return e;
  }

  function hf(a, b, c) {
    a.flags |= 16384;
    a = {
      getSnapshot: b,
      value: c
    };
    b = K.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }

  function gf(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    jf(b) && kf(a);
  }

  function ef(a, b, c) {
    return c(function () {
      jf(b) && kf(a);
    });
  }

  function jf(a) {
    var b = a.getSnapshot;
    a = a.value;

    try {
      var c = b();
      return !Vc(a, c);
    } catch (d) {
      return !0;
    }
  }

  function kf(a) {
    var b = Td(a, 1);
    null !== b && ge(b, a, 1, -1);
  }

  function lf(a) {
    var b = Xe();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ze,
      lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = mf.bind(null, K, a);
    return [b.memoizedState, a];
  }

  function ff(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = K.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, K.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function nf() {
    return Ye().memoizedState;
  }

  function of(a, b, c, d) {
    var e = Xe();
    K.flags |= a;
    e.memoizedState = ff(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function pf(a, b, c, d) {
    var e = Ye();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== L) {
      var g = L.memoizedState;
      f = g.destroy;

      if (null !== d && Qe(d, g.deps)) {
        e.memoizedState = ff(b, c, f, d);
        return;
      }
    }

    K.flags |= a;
    e.memoizedState = ff(1 | b, c, f, d);
  }

  function qf(a, b) {
    return of(8390656, 8, a, b);
  }

  function df(a, b) {
    return pf(2048, 8, a, b);
  }

  function rf(a, b) {
    return pf(4, 2, a, b);
  }

  function sf(a, b) {
    return pf(4, 4, a, b);
  }

  function tf(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function uf(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return pf(4, 4, tf.bind(null, b, a), c);
  }

  function vf() {}

  function wf(a, b) {
    var c = Ye();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Qe(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function xf(a, b) {
    var c = Ye();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Qe(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function yf(a, b, c) {
    if (0 === (Le & 21)) return a.baseState && (a.baseState = !1, G = !0), a.memoizedState = c;
    Vc(c, b) || (c = Dc(), K.lanes |= c, be |= c, a.baseState = !0);
    return b;
  }

  function zf(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Ke.transition;
    Ke.transition = {};

    try {
      a(!1), b();
    } finally {
      C = c, Ke.transition = d;
    }
  }

  function Af() {
    return Ye().memoizedState;
  }

  function Bf(a, b, c) {
    var d = fe(a);
    c = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cf(a)) Df(b, c);else if (c = Sd(a, b, c, d), null !== c) {
      var e = I();
      ge(c, a, d, e);
      Ef(c, b, d);
    }
  }

  function mf(a, b, c) {
    var d = fe(a),
        e = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Cf(a)) Df(b, e);else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState,
            h = f(g, c);
        e.hasEagerState = !0;
        e.eagerState = h;

        if (Vc(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, Rd(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {} finally {}
      c = Sd(a, b, e, d);
      null !== c && (e = I(), ge(c, a, d, e), Ef(c, b, d));
    }
  }

  function Cf(a) {
    var b = a.alternate;
    return a === K || null !== b && b === K;
  }

  function Df(a, b) {
    Ne = Me = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }

  function Ef(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }

  var Ve = {
    readContext: Pd,
    useCallback: N,
    useContext: N,
    useEffect: N,
    useImperativeHandle: N,
    useInsertionEffect: N,
    useLayoutEffect: N,
    useMemo: N,
    useReducer: N,
    useRef: N,
    useState: N,
    useDebugValue: N,
    useDeferredValue: N,
    useTransition: N,
    useMutableSource: N,
    useSyncExternalStore: N,
    useId: N,
    unstable_isNewReconciler: !1
  },
      Se = {
    readContext: Pd,
    useCallback: function useCallback(a, b) {
      Xe().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: Pd,
    useEffect: qf,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return of(4194308, 4, tf.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return of(4194308, 4, a, b);
    },
    useInsertionEffect: function useInsertionEffect(a, b) {
      return of(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = Xe();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = Xe();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      d.queue = a;
      a = a.dispatch = Bf.bind(null, K, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = Xe();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: lf,
    useDebugValue: vf,
    useDeferredValue: function useDeferredValue(a) {
      return Xe().memoizedState = a;
    },
    useTransition: function useTransition() {
      var a = lf(!1),
          b = a[0];
      a = zf.bind(null, a[1]);
      Xe().memoizedState = a;
      return [b, a];
    },
    useMutableSource: function useMutableSource() {},
    useSyncExternalStore: function useSyncExternalStore(a, b, c) {
      var d = K,
          e = Xe();

      if (F) {
        if (void 0 === c) throw Error(m(407));
        c = c();
      } else {
        c = b();
        if (null === O) throw Error(m(349));
        0 !== (Le & 30) || hf(d, b, c);
      }

      e.memoizedState = c;
      var f = {
        value: c,
        getSnapshot: b
      };
      e.queue = f;
      qf(ef.bind(null, d, f, a), [a]);
      d.flags |= 2048;
      ff(9, gf.bind(null, d, f, c, b), void 0, null);
      return c;
    },
    useId: function useId() {
      var a = Xe(),
          b = O.identifierPrefix;

      if (F) {
        var c = jd;
        var d = id;
        c = (d & ~(1 << 32 - tc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Oe++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Pe++, b = ":" + b + "r" + c.toString(32) + ":";

      return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
  },
      Te = {
    readContext: Pd,
    useCallback: wf,
    useContext: Pd,
    useEffect: df,
    useImperativeHandle: uf,
    useInsertionEffect: rf,
    useLayoutEffect: sf,
    useMemo: xf,
    useReducer: $e,
    useRef: nf,
    useState: function useState() {
      return $e(Ze);
    },
    useDebugValue: vf,
    useDeferredValue: function useDeferredValue(a) {
      var b = Ye();
      return yf(b, L.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = $e(Ze)[0],
          b = Ye().memoizedState;
      return [a, b];
    },
    useMutableSource: bf,
    useSyncExternalStore: cf,
    useId: Af,
    unstable_isNewReconciler: !1
  },
      Ue = {
    readContext: Pd,
    useCallback: wf,
    useContext: Pd,
    useEffect: df,
    useImperativeHandle: uf,
    useInsertionEffect: rf,
    useLayoutEffect: sf,
    useMemo: xf,
    useReducer: af,
    useRef: nf,
    useState: function useState() {
      return af(Ze);
    },
    useDebugValue: vf,
    useDeferredValue: function useDeferredValue(a) {
      var b = Ye();
      return null === L ? b.memoizedState = a : yf(b, L.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = af(Ze)[0],
          b = Ye().memoizedState;
      return [a, b];
    },
    useMutableSource: bf,
    useSyncExternalStore: cf,
    useId: Af,
    unstable_isNewReconciler: !1
  };

  function Ff(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += Ed(d), d = d["return"];
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e,
      digest: null
    };
  }

  function Gf(a, b, c) {
    return {
      value: a,
      source: null,
      stack: null != c ? c : null,
      digest: null != b ? b : null
    };
  }

  function Hf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var If = "function" === typeof WeakMap ? WeakMap : Map;

  function Jf(a, b, c) {
    c = Xd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Kf || (Kf = !0, Lf = d);
      Hf(a, b);
    };

    return c;
  }

  function Mf(a, b, c) {
    c = Xd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        return d(e);
      };

      c.callback = function () {
        Hf(a, b);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      Hf(a, b);
      "function" !== typeof d && (null === Nf ? Nf = new Set([this]) : Nf.add(this));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  function Of(a, b, c) {
    var d = a.pingCache;

    if (null === d) {
      d = a.pingCache = new If();
      var e = new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));

    e.has(c) || (e.add(c), a = Pf.bind(null, a, b, c), b.then(a, a));
  }

  function Qf(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
      if (b) return a;
      a = a["return"];
    } while (null !== a);

    return null;
  }

  function Rf(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = Xd(-1, 1), b.tag = 2, Yd(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }

  var Sf = da.ReactCurrentOwner,
      G = !1;

  function P(a, b, c, d) {
    b.child = null === a ? we(b, null, c, d) : ve(b, a.child, c, d);
  }

  function Tf(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Od(b, e);
    d = Re(a, b, c, d, f, e);
    c = We();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Uf(a, b, e);
    F && c && md(b);
    b.flags |= 1;
    P(a, b, d, e);
    return b.child;
  }

  function Vf(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !Wf(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, Xf(a, b, f, d, e);
      a = se(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a["return"] = b;
      return b.child = a;
    }

    f = a.child;

    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Dd;
      if (c(g, d) && a.ref === b.ref) return Uf(a, b, e);
    }

    b.flags |= 1;
    a = qe(f, d);
    a.ref = b.ref;
    a["return"] = b;
    return b.child = a;
  }

  function Xf(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Dd(f, d) && a.ref === b.ref) if (G = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (G = !0);else return b.lanes = a.lanes, Uf(a, b, e);
    }

    return Yf(a, b, c, d, e);
  }

  function Zf(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
      if (0 === (b.mode & 1)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, v($f, ag), ag |= c;else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
          baseLanes: a,
          cachePool: null,
          transitions: null
        }, b.updateQueue = null, v($f, ag), ag |= a, null;
        b.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        d = null !== f ? f.baseLanes : c;
        v($f, ag);
        ag |= d;
      }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, v($f, ag), ag |= d;
    P(a, b, e, c);
    return b.child;
  }

  function bg(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }

  function Yf(a, b, c, d, e) {
    var f = A(c) ? kc : x.current;
    f = lc(b, f);
    Od(b, e);
    c = Re(a, b, c, d, f, e);
    d = We();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Uf(a, b, e);
    F && d && md(b);
    b.flags |= 1;
    P(a, b, c, e);
    return b.child;
  }

  function cg(a, b, c, d, e) {
    if (A(c)) {
      var f = !0;
      pc(b);
    } else f = !1;

    Od(b, e);
    if (null === b.stateNode) dg(a, b), je(b, c, d), le(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === typeof l && null !== l ? l = Pd(l) : (l = A(c) ? kc : x.current, l = lc(b, l));
      var n = c.getDerivedStateFromProps,
          t = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
      t || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && ke(b, g, d, l);
      Ud = !1;
      var p = b.memoizedState;
      g.state = p;
      ae(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || z.current || Ud ? ("function" === typeof n && (ee(b, c, n, d), k = b.memoizedState), (h = Ud || ie(b, c, h, d, p, k, l)) ? (t || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
      g = b.stateNode;
      Wd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Fd(b.type, h);
      g.props = l;
      t = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = Pd(k) : (k = A(c) ? kc : x.current, k = lc(b, k));
      var B = c.getDerivedStateFromProps;
      (n = "function" === typeof B || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== t || p !== k) && ke(b, g, d, k);
      Ud = !1;
      p = b.memoizedState;
      g.state = p;
      ae(b, d, g, e);
      var w = b.memoizedState;
      h !== t || p !== w || z.current || Ud ? ("function" === typeof B && (ee(b, c, B, d), w = b.memoizedState), (l = Ud || ie(b, c, l, d, p, w, k) || !1) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return eg(a, b, c, d, f, e);
  }

  function eg(a, b, c, d, e, f) {
    bg(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && rc(b, c, !1), Uf(a, b, f);
    d = b.stateNode;
    Sf.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = ve(b, a.child, null, f), b.child = ve(b, null, h, f)) : P(a, b, h, f);
    b.memoizedState = d.state;
    e && rc(b, c, !0);
    return b.child;
  }

  function fg(a) {
    var b = a.stateNode;
    b.pendingContext ? nc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && nc(a, b.context, !1);
    Ce(a, b.containerInfo);
  }

  function gg(a, b, c, d, e) {
    Ad();
    Bd(e);
    b.flags |= 256;
    P(a, b, c, d);
    return b.child;
  }

  var hg = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };

  function ig(a) {
    return {
      baseLanes: a,
      cachePool: null,
      transitions: null
    };
  }

  function jg(a, b, c) {
    var d = b.pendingProps,
        e = J.current,
        f = !1,
        g = 0 !== (b.flags & 128),
        h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
    v(J, e & 1);

    if (null === a) {
      wd(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = {
        mode: "hidden",
        children: g
      }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = kg(g, d, 0, null), a = ue(a, d, c, null), f["return"] = b, a["return"] = b, f.sibling = a, b.child = f, b.child.memoizedState = ig(c), b.memoizedState = hg, a) : lg(b, g);
    }

    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return mg(a, b, g, d, h, e, c);

    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = {
        mode: "hidden",
        children: d.children
      };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = qe(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = qe(h, f) : (f = ue(f, g, c, null), f.flags |= 2);
      f["return"] = b;
      d["return"] = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? ig(c) : {
        baseLanes: g.baseLanes | c,
        cachePool: null,
        transitions: g.transitions
      };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = hg;
      return d;
    }

    f = a.child;
    a = f.sibling;
    d = qe(f, {
      mode: "visible",
      children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d["return"] = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }

  function lg(a, b) {
    b = kg({
      mode: "visible",
      children: b
    }, a.mode, 0, null);
    b["return"] = a;
    return a.child = b;
  }

  function ng(a, b, c, d) {
    null !== d && Bd(d);
    ve(b, a.child, null, c);
    a = lg(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }

  function mg(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Gf(Error(m(422))), ng(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = kg({
        mode: "visible",
        children: d.children
      }, e, 0, null);
      f = ue(f, e, g, null);
      f.flags |= 2;
      d["return"] = b;
      f["return"] = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && ve(b, a.child, null, g);
      b.child.memoizedState = ig(g);
      b.memoizedState = hg;
      return f;
    }

    if (0 === (b.mode & 1)) return ng(a, b, g, null);
    if (Kb(e)) return d = Lb(e).digest, f = Error(m(419)), d = Gf(f, d, void 0), ng(a, b, g, d);
    c = 0 !== (g & a.childLanes);

    if (G || c) {
      d = O;

      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;

          case 16:
            e = 8;
            break;

          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;

          case 536870912:
            e = 268435456;
            break;

          default:
            e = 0;
        }

        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, Td(a, e), ge(d, a, e, -1));
      }

      og();
      d = Gf(Error(m(421)));
      return ng(a, b, g, d);
    }

    if (Jb(e)) return b.flags |= 128, b.child = a.child, b = pg.bind(null, a), Mb(e, b), null;
    a = f.treeContext;
    Va && (pd = Qb(e), od = b, F = !0, rd = null, qd = !1, null !== a && (fd[gd++] = id, fd[gd++] = jd, fd[gd++] = hd, id = a.id, jd = a.overflow, hd = b));
    b = lg(b, d.children);
    b.flags |= 4096;
    return b;
  }

  function qg(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Nd(a["return"], b, c);
  }

  function rg(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }

  function sg(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    P(a, b, d.children, c);
    d = J.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && qg(a, c, b);else if (19 === a.tag) qg(a, c, b);else if (null !== a.child) {
          a.child["return"] = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a["return"] || a["return"] === b) break a;
          a = a["return"];
        }

        a.sibling["return"] = a["return"];
        a = a.sibling;
      }
      d &= 1;
    }
    v(J, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === Ge(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        rg(b, !1, e, c, f);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === Ge(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        rg(b, !0, c, null, f);
        break;

      case "together":
        rg(b, !1, null, null, void 0);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function dg(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }

  function Uf(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    be |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(m(153));

    if (null !== b.child) {
      a = b.child;
      c = qe(a, a.pendingProps);
      b.child = c;

      for (c["return"] = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = qe(a, a.pendingProps), c["return"] = b;
      }

      c.sibling = null;
    }

    return b.child;
  }

  function tg(a, b, c) {
    switch (b.tag) {
      case 3:
        fg(b);
        Ad();
        break;

      case 5:
        Ee(b);
        break;

      case 1:
        A(b.type) && pc(b);
        break;

      case 4:
        Ce(b, b.stateNode.containerInfo);
        break;

      case 10:
        Ld(b, b.type._context, b.memoizedProps.value);
        break;

      case 13:
        var d = b.memoizedState;

        if (null !== d) {
          if (null !== d.dehydrated) return v(J, J.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return jg(a, b, c);
          v(J, J.current & 1);
          a = Uf(a, b, c);
          return null !== a ? a.sibling : null;
        }

        v(J, J.current & 1);
        break;

      case 19:
        d = 0 !== (c & b.childLanes);

        if (0 !== (a.flags & 128)) {
          if (d) return sg(a, b, c);
          b.flags |= 128;
        }

        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        v(J, J.current);
        if (d) break;else return null;

      case 22:
      case 23:
        return b.lanes = 0, Zf(a, b, c);
    }

    return Uf(a, b, c);
  }

  function ug(a) {
    a.flags |= 4;
  }

  function vg(a, b) {
    if (null !== a && a.child === b.child) return !0;
    if (0 !== (b.flags & 16)) return !1;

    for (a = b.child; null !== a;) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return !1;
      a = a.sibling;
    }

    return !0;
  }

  var _wg, xg, yg, zg;

  if (Ta) _wg = function wg(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ka(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child["return"] = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c["return"] || c["return"] === b) return;
        c = c["return"];
      }

      c.sibling["return"] = c["return"];
      c = c.sibling;
    }
  }, xg = function xg() {}, yg = function yg(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = Be(ye.current);
      c = Ma(f, c, a, d, e, g);
      (b.updateQueue = c) && ug(b);
    }
  }, zg = function zg(a, b, c, d) {
    c !== d && ug(b);
  };else if (Ua) {
    _wg = function wg(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ka(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ka(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), _wg(a, e, !0, !0);else if (null !== e.child) {
          e.child["return"] = e;
          e = e.child;
          continue;
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === b) return;
          e = e["return"];
        }

        e.sibling["return"] = e["return"];
        e = e.sibling;
      }
    };

    var Ag = function Ag(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), Ag(a, e, !0, !0);else if (null !== e.child) {
          e.child["return"] = e;
          e = e.child;
          continue;
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === b) return;
          e = e["return"];
        }

        e.sibling["return"] = e["return"];
        e = e.sibling;
      }
    };

    xg = function xg(a, b) {
      var c = b.stateNode;

      if (!vg(a, b)) {
        a = c.containerInfo;
        var d = zb(a);
        Ag(d, b, !1, !1);
        c.pendingChildren = d;
        ug(b);
        Bb(a, d);
      }
    };

    yg = function yg(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = vg(a, b)) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = Be(ye.current),
            l = null;
        g !== d && (l = Ma(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), La(f, c, d, e, k) && ug(b), b.stateNode = f, a ? ug(b) : _wg(f, b, !1, !1));
      }
    };

    zg = function zg(a, b, c, d) {
      c !== d ? (a = Be(Ae.current), c = Be(ye.current), b.stateNode = Oa(d, a, c, b), ug(b)) : b.stateNode = a.stateNode;
    };
  } else xg = function xg() {}, yg = function yg() {}, zg = function zg() {};

  function Bg(a, b) {
    if (!F) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function Q(a) {
    var b = null !== a.alternate && a.alternate.child === a.child,
        c = 0,
        d = 0;
    if (b) for (var e = a.child; null !== e;) {
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e["return"] = a, e = e.sibling;
    } else for (e = a.child; null !== e;) {
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e["return"] = a, e = e.sibling;
    }
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }

  function Cg(a, b, c) {
    var d = b.pendingProps;
    nd(b);

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Q(b), null;

      case 1:
        return A(b.type) && mc(), Q(b), null;

      case 3:
        c = b.stateNode;
        De();
        q(z);
        q(x);
        Ie();
        c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
        if (null === a || null === a.child) yd(b) ? ug(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== rd && (Dg(rd), rd = null));
        xg(a, b);
        Q(b);
        return null;

      case 5:
        Fe(b);
        c = Be(Ae.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) yg(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
          if (!d) {
            if (null === b.stateNode) throw Error(m(166));
            Q(b);
            return null;
          }

          a = Be(ye.current);

          if (yd(b)) {
            if (!Va) throw Error(m(175));
            a = Rb(b.stateNode, b.type, b.memoizedProps, c, a, b, !qd);
            b.updateQueue = a;
            null !== a && ug(b);
          } else {
            var f = Ja(e, d, c, a, b);

            _wg(f, b, !1, !1);

            b.stateNode = f;
            La(f, e, d, c, a) && ug(b);
          }

          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        Q(b);
        return null;

      case 6:
        if (a && null != b.stateNode) zg(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(m(166));
          a = Be(Ae.current);
          c = Be(ye.current);

          if (yd(b)) {
            if (!Va) throw Error(m(176));
            a = b.stateNode;
            c = b.memoizedProps;
            if (d = Sb(a, c, b, !qd)) if (e = od, null !== e) switch (e.tag) {
              case 3:
                $b(e.stateNode.containerInfo, a, c, 0 !== (e.mode & 1));
                break;

              case 5:
                ac(e.type, e.memoizedProps, e.stateNode, a, c, 0 !== (e.mode & 1));
            }
            d && ug(b);
          } else b.stateNode = Oa(d, a, c, b);
        }
        Q(b);
        return null;

      case 13:
        q(J);
        d = b.memoizedState;

        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (F && null !== pd && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) zd(), Ad(), b.flags |= 98560, e = !1;else if (e = yd(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!e) throw Error(m(318));
              if (!Va) throw Error(m(344));
              e = b.memoizedState;
              e = null !== e ? e.dehydrated : null;
              if (!e) throw Error(m(317));
              Tb(e, b);
            } else Ad(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;

            Q(b);
            e = !1;
          } else null !== rd && (Dg(rd), rd = null), e = !0;
          if (!e) return b.flags & 65536 ? b : null;
        }

        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        c = null !== d;
        c !== (null !== a && null !== a.memoizedState) && c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (J.current & 1) ? 0 === R && (R = 3) : og()));
        null !== b.updateQueue && (b.flags |= 4);
        Q(b);
        return null;

      case 4:
        return De(), xg(a, b), null === a && Xa(b.stateNode.containerInfo), Q(b), null;

      case 10:
        return Md(b.type._context), Q(b), null;

      case 17:
        return A(b.type) && mc(), Q(b), null;

      case 19:
        q(J);
        e = b.memoizedState;
        if (null === e) return Q(b), null;
        d = 0 !== (b.flags & 128);
        f = e.rendering;
        if (null === f) {
          if (d) Bg(e, !1);else {
            if (0 !== R || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
              f = Ge(a);

              if (null !== f) {
                b.flags |= 128;
                Bg(e, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                b.subtreeFlags = 0;
                a = c;

                for (c = b.child; null !== c;) {
                  d = c, e = a, d.flags &= 14680066, f = d.alternate, null === f ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = f.childLanes, d.lanes = f.lanes, d.child = f.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = f.memoizedProps, d.memoizedState = f.memoizedState, d.updateQueue = f.updateQueue, d.type = f.type, e = f.dependencies, d.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), c = c.sibling;
                }

                v(J, J.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== e.tail && D() > Eg && (b.flags |= 128, d = !0, Bg(e, !1), b.lanes = 4194304);
          }
        } else {
          if (!d) if (a = Ge(f), null !== a) {
            if (b.flags |= 128, d = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Bg(e, !0), null === e.tail && "hidden" === e.tailMode && !f.alternate && !F) return Q(b), null;
          } else 2 * D() - e.renderingStartTime > Eg && 1073741824 !== c && (b.flags |= 128, d = !0, Bg(e, !1), b.lanes = 4194304);
          e.isBackwards ? (f.sibling = b.child, b.child = f) : (a = e.last, null !== a ? a.sibling = f : b.child = f, e.last = f);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D(), b.sibling = null, a = J.current, v(J, d ? a & 1 | 2 : a & 1), b;
        Q(b);
        return null;

      case 22:
      case 23:
        return Fg(), c = null !== b.memoizedState, null !== a && null !== a.memoizedState !== c && (b.flags |= 8192), c && 0 !== (b.mode & 1) ? 0 !== (ag & 1073741824) && (Q(b), Ta && b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;

      case 24:
        return null;

      case 25:
        return null;
    }

    throw Error(m(156, b.tag));
  }

  function Gg(a, b) {
    nd(b);

    switch (b.tag) {
      case 1:
        return A(b.type) && mc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

      case 3:
        return De(), q(z), q(x), Ie(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;

      case 5:
        return Fe(b), null;

      case 13:
        q(J);
        a = b.memoizedState;

        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(m(340));
          Ad();
        }

        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

      case 19:
        return q(J), null;

      case 4:
        return De(), null;

      case 10:
        return Md(b.type._context), null;

      case 22:
      case 23:
        return Fg(), null;

      case 24:
        return null;

      default:
        return null;
    }
  }

  var Hg = !1,
      S = !1,
      Ig = "function" === typeof WeakSet ? WeakSet : Set,
      T = null;

  function Jg(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      U(a, b, d);
    } else c.current = null;
  }

  function Kg(a, b, c) {
    try {
      c();
    } catch (d) {
      U(a, b, d);
    }
  }

  var Lg = !1;

  function Mg(a, b) {
    Ha(a.containerInfo);

    for (T = b; null !== T;) {
      if (a = T, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b["return"] = a, T = b;else for (; null !== T;) {
        a = T;

        try {
          var c = a.alternate;
          if (0 !== (a.flags & 1024)) switch (a.tag) {
            case 0:
            case 11:
            case 15:
              break;

            case 1:
              if (null !== c) {
                var d = c.memoizedProps,
                    e = c.memoizedState,
                    f = a.stateNode,
                    g = f.getSnapshotBeforeUpdate(a.elementType === a.type ? d : Fd(a.type, d), e);
                f.__reactInternalSnapshotBeforeUpdate = g;
              }

              break;

            case 3:
              Ta && xb(a.stateNode.containerInfo);
              break;

            case 5:
            case 6:
            case 4:
            case 17:
              break;

            default:
              throw Error(m(163));
          }
        } catch (h) {
          U(a, a["return"], h);
        }

        b = a.sibling;

        if (null !== b) {
          b["return"] = a["return"];
          T = b;
          break;
        }

        T = a["return"];
      }
    }

    c = Lg;
    Lg = !1;
    return c;
  }

  function Ng(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;

    if (null !== d) {
      var e = d = d.next;

      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Kg(b, c, f);
        }

        e = e.next;
      } while (e !== d);
    }
  }

  function Og(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Pg(a) {
    var b = a.ref;

    if (null !== b) {
      var c = a.stateNode;

      switch (a.tag) {
        case 5:
          a = Ea(c);
          break;

        default:
          a = c;
      }

      "function" === typeof b ? b(a) : b.current = a;
    }
  }

  function Qg(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Qg(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && Za(b));
    a.stateNode = null;
    a["return"] = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }

  function Rg(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Sg(a) {
    a: for (;;) {
      for (; null === a.sibling;) {
        if (null === a["return"] || Rg(a["return"])) return null;
        a = a["return"];
      }

      a.sibling["return"] = a["return"];

      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;else a.child["return"] = a, a = a.child;
      }

      if (!(a.flags & 2)) return a.stateNode;
    }
  }

  function Tg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Tg(a, b, c), a = a.sibling; null !== a;) {
      Tg(a, b, c), a = a.sibling;
    }
  }

  function Ug(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Ug(a, b, c), a = a.sibling; null !== a;) {
      Ug(a, b, c), a = a.sibling;
    }
  }

  var V = null,
      Vg = !1;

  function Wg(a, b, c) {
    for (c = c.child; null !== c;) {
      Xg(a, b, c), c = c.sibling;
    }
  }

  function Xg(a, b, c) {
    if (Sc && "function" === typeof Sc.onCommitFiberUnmount) try {
      Sc.onCommitFiberUnmount(Rc, c);
    } catch (h) {}

    switch (c.tag) {
      case 5:
        S || Jg(c, b);

      case 6:
        if (Ta) {
          var d = V,
              e = Vg;
          V = null;
          Wg(a, b, c);
          V = d;
          Vg = e;
          null !== V && (Vg ? rb(V, c.stateNode) : qb(V, c.stateNode));
        } else Wg(a, b, c);

        break;

      case 18:
        Ta && null !== V && (Vg ? Yb(V, c.stateNode) : Xb(V, c.stateNode));
        break;

      case 4:
        Ta ? (d = V, e = Vg, V = c.stateNode.containerInfo, Vg = !0, Wg(a, b, c), V = d, Vg = e) : (Ua && (d = c.stateNode.containerInfo, e = zb(d), Cb(d, e)), Wg(a, b, c));
        break;

      case 0:
      case 11:
      case 14:
      case 15:
        if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;

          do {
            var f = e,
                g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Kg(c, b, g) : 0 !== (f & 4) && Kg(c, b, g));
            e = e.next;
          } while (e !== d);
        }

        Wg(a, b, c);
        break;

      case 1:
        if (!S && (Jg(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          U(c, b, h);
        }
        Wg(a, b, c);
        break;

      case 21:
        Wg(a, b, c);
        break;

      case 22:
        c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Wg(a, b, c), S = d) : Wg(a, b, c);
        break;

      default:
        Wg(a, b, c);
    }
  }

  function Yg(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Ig());
      b.forEach(function (b) {
        var d = Zg.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function $g(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];

      try {
        var f = a,
            g = b;

        if (Ta) {
          var h = g;

          a: for (; null !== h;) {
            switch (h.tag) {
              case 5:
                V = h.stateNode;
                Vg = !1;
                break a;

              case 3:
                V = h.stateNode.containerInfo;
                Vg = !0;
                break a;

              case 4:
                V = h.stateNode.containerInfo;
                Vg = !0;
                break a;
            }

            h = h["return"];
          }

          if (null === V) throw Error(m(160));
          Xg(f, g, e);
          V = null;
          Vg = !1;
        } else Xg(f, g, e);

        var k = e.alternate;
        null !== k && (k["return"] = null);
        e["return"] = null;
      } catch (l) {
        U(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) {
      ah(b, a), b = b.sibling;
    }
  }

  function ah(a, b) {
    var c = a.alternate,
        d = a.flags;

    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $g(b, a);
        bh(a);

        if (d & 4) {
          try {
            Ng(3, a, a["return"]), Og(3, a);
          } catch (p) {
            U(a, a["return"], p);
          }

          try {
            Ng(5, a, a["return"]);
          } catch (p) {
            U(a, a["return"], p);
          }
        }

        break;

      case 1:
        $g(b, a);
        bh(a);
        d & 512 && null !== c && Jg(c, c["return"]);
        break;

      case 5:
        $g(b, a);
        bh(a);
        d & 512 && null !== c && Jg(c, c["return"]);

        if (Ta) {
          if (a.flags & 32) {
            var e = a.stateNode;

            try {
              sb(e);
            } catch (p) {
              U(a, a["return"], p);
            }
          }

          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps;
            c = null !== c ? c.memoizedProps : f;
            d = a.type;
            b = a.updateQueue;
            a.updateQueue = null;
            if (null !== b) try {
              nb(e, b, d, c, f, a);
            } catch (p) {
              U(a, a["return"], p);
            }
          }
        }

        break;

      case 6:
        $g(b, a);
        bh(a);

        if (d & 4 && Ta) {
          if (null === a.stateNode) throw Error(m(162));
          e = a.stateNode;
          f = a.memoizedProps;
          c = null !== c ? c.memoizedProps : f;

          try {
            lb(e, c, f);
          } catch (p) {
            U(a, a["return"], p);
          }
        }

        break;

      case 3:
        $g(b, a);
        bh(a);

        if (d & 4) {
          if (Ta && Va && null !== c && c.memoizedState.isDehydrated) try {
            Vb(b.containerInfo);
          } catch (p) {
            U(a, a["return"], p);
          }

          if (Ua) {
            e = b.containerInfo;
            f = b.pendingChildren;

            try {
              Cb(e, f);
            } catch (p) {
              U(a, a["return"], p);
            }
          }
        }

        break;

      case 4:
        $g(b, a);
        bh(a);

        if (d & 4 && Ua) {
          f = a.stateNode;
          e = f.containerInfo;
          f = f.pendingChildren;

          try {
            Cb(e, f);
          } catch (p) {
            U(a, a["return"], p);
          }
        }

        break;

      case 13:
        $g(b, a);
        bh(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (ch = D()));
        d & 4 && Yg(a);
        break;

      case 22:
        var g = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (S = (c = S) || g, $g(b, a), S = c) : $g(b, a);
        bh(a);

        if (d & 8192) {
          c = null !== a.memoizedState;
          if ((a.stateNode.isHidden = c) && !g && 0 !== (a.mode & 1)) for (T = a, d = a.child; null !== d;) {
            for (b = T = d; null !== T;) {
              g = T;
              var h = g.child;

              switch (g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ng(4, g, g["return"]);
                  break;

                case 1:
                  Jg(g, g["return"]);
                  var k = g.stateNode;

                  if ("function" === typeof k.componentWillUnmount) {
                    var l = g,
                        n = g["return"];

                    try {
                      var t = l;
                      k.props = t.memoizedProps;
                      k.state = t.memoizedState;
                      k.componentWillUnmount();
                    } catch (p) {
                      U(l, n, p);
                    }
                  }

                  break;

                case 5:
                  Jg(g, g["return"]);
                  break;

                case 22:
                  if (null !== g.memoizedState) {
                    dh(b);
                    continue;
                  }

              }

              null !== h ? (h["return"] = g, T = h) : dh(b);
            }

            d = d.sibling;
          }
          if (Ta) a: if (d = null, Ta) for (b = a;;) {
            if (5 === b.tag) {
              if (null === d) {
                d = b;

                try {
                  e = b.stateNode, c ? tb(e) : vb(b.stateNode, b.memoizedProps);
                } catch (p) {
                  U(a, a["return"], p);
                }
              }
            } else if (6 === b.tag) {
              if (null === d) try {
                f = b.stateNode, c ? ub(f) : wb(f, b.memoizedProps);
              } catch (p) {
                U(a, a["return"], p);
              }
            } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
              b.child["return"] = b;
              b = b.child;
              continue;
            }

            if (b === a) break a;

            for (; null === b.sibling;) {
              if (null === b["return"] || b["return"] === a) break a;
              d === b && (d = null);
              b = b["return"];
            }

            d === b && (d = null);
            b.sibling["return"] = b["return"];
            b = b.sibling;
          }
        }

        break;

      case 19:
        $g(b, a);
        bh(a);
        d & 4 && Yg(a);
        break;

      case 21:
        break;

      default:
        $g(b, a), bh(a);
    }
  }

  function bh(a) {
    var b = a.flags;

    if (b & 2) {
      try {
        if (Ta) {
          b: {
            for (var c = a["return"]; null !== c;) {
              if (Rg(c)) {
                var d = c;
                break b;
              }

              c = c["return"];
            }

            throw Error(m(160));
          }

          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (sb(e), d.flags &= -33);
              var f = Sg(a);
              Ug(a, f, e);
              break;

            case 3:
            case 4:
              var g = d.stateNode.containerInfo,
                  h = Sg(a);
              Tg(a, h, g);
              break;

            default:
              throw Error(m(161));
          }
        }
      } catch (k) {
        U(a, a["return"], k);
      }

      a.flags &= -3;
    }

    b & 4096 && (a.flags &= -4097);
  }

  function eh(a, b, c) {
    T = a;
    fh(a, b, c);
  }

  function fh(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== T;) {
      var e = T,
          f = e.child;

      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Hg;

        if (!g) {
          var h = e.alternate,
              k = null !== h && null !== h.memoizedState || S;
          h = Hg;
          var l = S;
          Hg = g;
          if ((S = k) && !l) for (T = e; null !== T;) {
            g = T, k = g.child, 22 === g.tag && null !== g.memoizedState ? gh(e) : null !== k ? (k["return"] = g, T = k) : gh(e);
          }

          for (; null !== f;) {
            T = f, fh(f, b, c), f = f.sibling;
          }

          T = e;
          Hg = h;
          S = l;
        }

        hh(a, b, c);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f["return"] = e, T = f) : hh(a, b, c);
    }
  }

  function hh(a) {
    for (; null !== T;) {
      var b = T;

      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;

        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              S || Og(5, b);
              break;

            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !S) if (null === c) d.componentDidMount();else {
                var e = b.elementType === b.type ? c.memoizedProps : Fd(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && ce(b, f, d);
              break;

            case 3:
              var g = b.updateQueue;

              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = Ea(b.child.stateNode);
                    break;

                  case 1:
                    c = b.child.stateNode;
                }
                ce(b, g, c);
              }

              break;

            case 5:
              var h = b.stateNode;
              null === c && b.flags & 4 && mb(h, b.type, b.memoizedProps, b);
              break;

            case 6:
              break;

            case 4:
              break;

            case 12:
              break;

            case 13:
              if (Va && null === b.memoizedState) {
                var k = b.alternate;

                if (null !== k) {
                  var l = k.memoizedState;

                  if (null !== l) {
                    var n = l.dehydrated;
                    null !== n && Wb(n);
                  }
                }
              }

              break;

            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;

            default:
              throw Error(m(163));
          }
          S || b.flags & 512 && Pg(b);
        } catch (t) {
          U(b, b["return"], t);
        }
      }

      if (b === a) {
        T = null;
        break;
      }

      c = b.sibling;

      if (null !== c) {
        c["return"] = b["return"];
        T = c;
        break;
      }

      T = b["return"];
    }
  }

  function dh(a) {
    for (; null !== T;) {
      var b = T;

      if (b === a) {
        T = null;
        break;
      }

      var c = b.sibling;

      if (null !== c) {
        c["return"] = b["return"];
        T = c;
        break;
      }

      T = b["return"];
    }
  }

  function gh(a) {
    for (; null !== T;) {
      var b = T;

      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b["return"];

            try {
              Og(4, b);
            } catch (k) {
              U(b, c, k);
            }

            break;

          case 1:
            var d = b.stateNode;

            if ("function" === typeof d.componentDidMount) {
              var e = b["return"];

              try {
                d.componentDidMount();
              } catch (k) {
                U(b, e, k);
              }
            }

            var f = b["return"];

            try {
              Pg(b);
            } catch (k) {
              U(b, f, k);
            }

            break;

          case 5:
            var g = b["return"];

            try {
              Pg(b);
            } catch (k) {
              U(b, g, k);
            }

        }
      } catch (k) {
        U(b, b["return"], k);
      }

      if (b === a) {
        T = null;
        break;
      }

      var h = b.sibling;

      if (null !== h) {
        h["return"] = b["return"];
        T = h;
        break;
      }

      T = b["return"];
    }
  }

  var ih = 0,
      jh = 1,
      kh = 2,
      lh = 3,
      mh = 4;

  if ("function" === typeof Symbol && Symbol["for"]) {
    var nh = Symbol["for"];
    ih = nh("selector.component");
    jh = nh("selector.has_pseudo_class");
    kh = nh("selector.role");
    lh = nh("selector.test_id");
    mh = nh("selector.text");
  }

  function oh(a) {
    var b = Wa(a);

    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(m(364));
      return b;
    }

    a = cb(a);
    if (null === a) throw Error(m(362));
    return a.stateNode.current;
  }

  function ph(a, b) {
    switch (b.$$typeof) {
      case ih:
        if (a.type === b.value) return !0;
        break;

      case jh:
        a: {
          b = b.value;
          a = [a, 0];

          for (var c = 0; c < a.length;) {
            var d = a[c++],
                e = a[c++],
                f = b[e];

            if (5 !== d.tag || !fb(d)) {
              for (; null != f && ph(d, f);) {
                e++, f = b[e];
              }

              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) {
                a.push(d, e), d = d.sibling;
              }
            }
          }

          b = !1;
        }

        return b;

      case kh:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;

      case mh:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;

      case lh:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;

      default:
        throw Error(m(365));
    }

    return !1;
  }

  function qh(a) {
    switch (a.$$typeof) {
      case ih:
        return "<" + (ua(a.value) || "Unknown") + ">";

      case jh:
        return ":has(" + (qh(a) || "") + ")";

      case kh:
        return '[role="' + a.value + '"]';

      case mh:
        return '"' + a.value + '"';

      case lh:
        return '[data-testname="' + a.value + '"]';

      default:
        throw Error(m(365));
    }
  }

  function rh(a, b) {
    var c = [];
    a = [a, 0];

    for (var d = 0; d < a.length;) {
      var e = a[d++],
          f = a[d++],
          g = b[f];

      if (5 !== e.tag || !fb(e)) {
        for (; null != g && ph(e, g);) {
          f++, g = b[f];
        }

        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) {
          a.push(e, f), e = e.sibling;
        }
      }
    }

    return c;
  }

  function sh(a, b) {
    if (!bb) throw Error(m(363));
    a = oh(a);
    a = rh(a, b);
    b = [];
    a = Array.from(a);

    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) {
        a.push(d), d = d.sibling;
      }
    }

    return b;
  }

  var th = Math.ceil,
      uh = da.ReactCurrentDispatcher,
      vh = da.ReactCurrentOwner,
      W = da.ReactCurrentBatchConfig,
      H = 0,
      O = null,
      X = null,
      Y = 0,
      ag = 0,
      $f = ic(0),
      R = 0,
      wh = null,
      be = 0,
      xh = 0,
      yh = 0,
      zh = null,
      Ah = null,
      ch = 0,
      Eg = Infinity,
      Bh = null;

  function Ch() {
    Eg = D() + 500;
  }

  var Kf = !1,
      Lf = null,
      Nf = null,
      Dh = !1,
      Eh = null,
      Fh = 0,
      Gh = 0,
      Hh = null,
      Ih = -1,
      Jh = 0;

  function I() {
    return 0 !== (H & 6) ? D() : -1 !== Ih ? Ih : Ih = D();
  }

  function fe(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (H & 2) && 0 !== Y) return Y & -Y;
    if (null !== Cd.transition) return 0 === Jh && (Jh = Dc()), Jh;
    a = C;
    return 0 !== a ? a : Ya();
  }

  function ge(a, b, c, d) {
    if (50 < Gh) throw Gh = 0, Hh = null, Error(m(185));
    Fc(a, c, d);
    if (0 === (H & 2) || a !== O) a === O && (0 === (H & 2) && (xh |= c), 4 === R && Kh(a, Y)), Lh(a, d), 1 === c && 0 === H && 0 === (b.mode & 1) && (Ch(), Xc && ad());
  }

  function Lh(a, b) {
    var c = a.callbackNode;
    Bc(a, b);
    var d = zc(a, a === O ? Y : 0);
    if (0 === d) null !== c && Kc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Kc(c);
      if (1 === b) 0 === a.tag ? $c(Mh.bind(null, a)) : Zc(Mh.bind(null, a)), $a ? ab(function () {
        0 === (H & 6) && ad();
      }) : Jc(Nc, ad), c = null;else {
        switch (Ic(d)) {
          case 1:
            c = Nc;
            break;

          case 4:
            c = Oc;
            break;

          case 16:
            c = Pc;
            break;

          case 536870912:
            c = Qc;
            break;

          default:
            c = Pc;
        }

        c = Nh(c, Oh.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Oh(a, b) {
    Ih = -1;
    Jh = 0;
    if (0 !== (H & 6)) throw Error(m(327));
    var c = a.callbackNode;
    if (Ph() && a.callbackNode !== c) return null;
    var d = zc(a, a === O ? Y : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Qh(a, d);else {
      b = d;
      var e = H;
      H |= 2;
      var f = Rh();
      if (O !== a || Y !== b) Bh = null, Ch(), Sh(a, b);

      do {
        try {
          Th();
          break;
        } catch (h) {
          Uh(a, h);
        }
      } while (1);

      Kd();
      uh.current = f;
      H = e;
      null !== X ? b = 0 : (O = null, Y = 0, b = R);
    }

    if (0 !== b) {
      2 === b && (e = Cc(a), 0 !== e && (d = e, b = Vh(a, e)));
      if (1 === b) throw c = wh, Sh(a, 0), Kh(a, d), Lh(a, D()), c;
      if (6 === b) Kh(a, d);else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Wh(e) && (b = Qh(a, d), 2 === b && (f = Cc(a), 0 !== f && (d = f, b = Vh(a, f))), 1 === b)) throw c = wh, Sh(a, 0), Kh(a, d), Lh(a, D()), c;
        a.finishedWork = e;
        a.finishedLanes = d;

        switch (b) {
          case 0:
          case 1:
            throw Error(m(345));

          case 2:
            Xh(a, Ah, Bh);
            break;

          case 3:
            Kh(a, d);

            if ((d & 130023424) === d && (b = ch + 500 - D(), 10 < b)) {
              if (0 !== zc(a, 0)) break;
              e = a.suspendedLanes;

              if ((e & d) !== d) {
                I();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }

              a.timeoutHandle = Pa(Xh.bind(null, a, Ah, Bh), b);
              break;
            }

            Xh(a, Ah, Bh);
            break;

          case 4:
            Kh(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;

            for (e = -1; 0 < d;) {
              var g = 31 - tc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }

            d = e;
            d = D() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * th(d / 1960)) - d;

            if (10 < d) {
              a.timeoutHandle = Pa(Xh.bind(null, a, Ah, Bh), d);
              break;
            }

            Xh(a, Ah, Bh);
            break;

          case 5:
            Xh(a, Ah, Bh);
            break;

          default:
            throw Error(m(329));
        }
      }
    }

    Lh(a, D());
    return a.callbackNode === c ? Oh.bind(null, a) : null;
  }

  function Vh(a, b) {
    var c = zh;
    a.current.memoizedState.isDehydrated && (Sh(a, b).flags |= 256);
    a = Qh(a, b);
    2 !== a && (b = Ah, Ah = c, null !== b && Dg(b));
    return a;
  }

  function Dg(a) {
    null === Ah ? Ah = a : Ah.push.apply(Ah, a);
  }

  function Wh(a) {
    for (var b = a;;) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d],
              f = e.getSnapshot;
          e = e.value;

          try {
            if (!Vc(f(), e)) return !1;
          } catch (g) {
            return !1;
          }
        }
      }

      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c["return"] = b, b = c;else {
        if (b === a) break;

        for (; null === b.sibling;) {
          if (null === b["return"] || b["return"] === a) return !0;
          b = b["return"];
        }

        b.sibling["return"] = b["return"];
        b = b.sibling;
      }
    }

    return !0;
  }

  function Kh(a, b) {
    b &= ~yh;
    b &= ~xh;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - tc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Mh(a) {
    if (0 !== (H & 6)) throw Error(m(327));
    Ph();
    var b = zc(a, 0);
    if (0 === (b & 1)) return Lh(a, D()), null;
    var c = Qh(a, b);

    if (0 !== a.tag && 2 === c) {
      var d = Cc(a);
      0 !== d && (b = d, c = Vh(a, d));
    }

    if (1 === c) throw c = wh, Sh(a, 0), Kh(a, b), Lh(a, D()), c;
    if (6 === c) throw Error(m(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Xh(a, Ah, Bh);
    Lh(a, D());
    return null;
  }

  function Yh(a) {
    null !== Eh && 0 === Eh.tag && 0 === (H & 6) && Ph();
    var b = H;
    H |= 1;
    var c = W.transition,
        d = C;

    try {
      if (W.transition = null, C = 1, a) return a();
    } finally {
      C = d, W.transition = c, H = b, 0 === (H & 6) && ad();
    }
  }

  function Fg() {
    ag = $f.current;
    q($f);
  }

  function Sh(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== X) for (c = X["return"]; null !== c;) {
      var d = c;
      nd(d);

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && mc();
          break;

        case 3:
          De();
          q(z);
          q(x);
          Ie();
          break;

        case 5:
          Fe(d);
          break;

        case 4:
          De();
          break;

        case 13:
          q(J);
          break;

        case 19:
          q(J);
          break;

        case 10:
          Md(d.type._context);
          break;

        case 22:
        case 23:
          Fg();
      }

      c = c["return"];
    }
    O = a;
    X = a = qe(a.current, null);
    Y = ag = b;
    R = 0;
    wh = null;
    yh = xh = be = 0;
    Ah = zh = null;

    if (null !== Qd) {
      for (b = 0; b < Qd.length; b++) {
        if (c = Qd[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next,
              f = c.pending;

          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }

          c.pending = d;
        }
      }

      Qd = null;
    }

    return a;
  }

  function Uh(a, b) {
    do {
      var c = X;

      try {
        Kd();
        Je.current = Ve;

        if (Me) {
          for (var d = K.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          Me = !1;
        }

        Le = 0;
        M = L = K = null;
        Ne = !1;
        Oe = 0;
        vh.current = null;

        if (null === c || null === c["return"]) {
          R = 1;
          wh = b;
          X = null;
          break;
        }

        a: {
          var f = a,
              g = c["return"],
              h = c,
              k = b;
          b = Y;
          h.flags |= 32768;

          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k,
                n = h,
                t = n.tag;

            if (0 === (n.mode & 1) && (0 === t || 11 === t || 15 === t)) {
              var p = n.alternate;
              p ? (n.updateQueue = p.updateQueue, n.memoizedState = p.memoizedState, n.lanes = p.lanes) : (n.updateQueue = null, n.memoizedState = null);
            }

            var B = Qf(g);

            if (null !== B) {
              B.flags &= -257;
              Rf(B, g, h, f, b);
              B.mode & 1 && Of(f, l, b);
              b = B;
              k = l;
              var w = b.updateQueue;

              if (null === w) {
                var Z = new Set();
                Z.add(k);
                b.updateQueue = Z;
              } else w.add(k);

              break a;
            } else {
              if (0 === (b & 1)) {
                Of(f, l, b);
                og();
                break a;
              }

              k = Error(m(426));
            }
          } else if (F && h.mode & 1) {
            var za = Qf(g);

            if (null !== za) {
              0 === (za.flags & 65536) && (za.flags |= 256);
              Rf(za, g, h, f, b);
              Bd(Ff(k, h));
              break a;
            }
          }

          f = k = Ff(k, h);
          4 !== R && (R = 2);
          null === zh ? zh = [f] : zh.push(f);
          f = g;

          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var E = Jf(f, k, b);
                $d(f, E);
                break a;

              case 1:
                h = k;
                var r = f.type,
                    u = f.stateNode;

                if (0 === (f.flags & 128) && ("function" === typeof r.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Nf || !Nf.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var Db = Mf(f, h, b);
                  $d(f, Db);
                  break a;
                }

            }

            f = f["return"];
          } while (null !== f);
        }

        Zh(c);
      } catch (qc) {
        b = qc;
        X === c && null !== c && (X = c = c["return"]);
        continue;
      }

      break;
    } while (1);
  }

  function Rh() {
    var a = uh.current;
    uh.current = Ve;
    return null === a ? Ve : a;
  }

  function og() {
    if (0 === R || 3 === R || 2 === R) R = 4;
    null === O || 0 === (be & 268435455) && 0 === (xh & 268435455) || Kh(O, Y);
  }

  function Qh(a, b) {
    var c = H;
    H |= 2;
    var d = Rh();
    if (O !== a || Y !== b) Bh = null, Sh(a, b);

    do {
      try {
        $h();
        break;
      } catch (e) {
        Uh(a, e);
      }
    } while (1);

    Kd();
    H = c;
    uh.current = d;
    if (null !== X) throw Error(m(261));
    O = null;
    Y = 0;
    return R;
  }

  function $h() {
    for (; null !== X;) {
      ai(X);
    }
  }

  function Th() {
    for (; null !== X && !Lc();) {
      ai(X);
    }
  }

  function ai(a) {
    var b = bi(a.alternate, a, ag);
    a.memoizedProps = a.pendingProps;
    null === b ? Zh(a) : X = b;
    vh.current = null;
  }

  function Zh(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b["return"];

      if (0 === (b.flags & 32768)) {
        if (c = Cg(c, b, ag), null !== c) {
          X = c;
          return;
        }
      } else {
        c = Gg(c, b);

        if (null !== c) {
          c.flags &= 32767;
          X = c;
          return;
        }

        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
          R = 6;
          X = null;
          return;
        }
      }

      b = b.sibling;

      if (null !== b) {
        X = b;
        return;
      }

      X = b = a;
    } while (null !== b);

    0 === R && (R = 5);
  }

  function Xh(a, b, c) {
    var d = C,
        e = W.transition;

    try {
      W.transition = null, C = 1, ci(a, b, c, d);
    } finally {
      W.transition = e, C = d;
    }

    return null;
  }

  function ci(a, b, c, d) {
    do {
      Ph();
    } while (null !== Eh);

    if (0 !== (H & 6)) throw Error(m(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(m(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Gc(a, f);
    a === O && (X = O = null, Y = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || Dh || (Dh = !0, Nh(Pc, function () {
      Ph();
      return null;
    }));
    f = 0 !== (c.flags & 15990);

    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = W.transition;
      W.transition = null;
      var g = C;
      C = 1;
      var h = H;
      H |= 4;
      vh.current = null;
      Mg(a, c);
      ah(c, a);
      Ia(a.containerInfo);
      a.current = c;
      eh(c, a, e);
      Mc();
      H = h;
      C = g;
      W.transition = f;
    } else a.current = c;

    Dh && (Dh = !1, Eh = a, Fh = e);
    f = a.pendingLanes;
    0 === f && (Nf = null);
    Tc(c.stateNode, d);
    Lh(a, D());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) {
      e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
      });
    }
    if (Kf) throw Kf = !1, a = Lf, Lf = null, a;
    0 !== (Fh & 1) && 0 !== a.tag && Ph();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Hh ? Gh++ : (Gh = 0, Hh = a) : Gh = 0;
    ad();
    return null;
  }

  function Ph() {
    if (null !== Eh) {
      var a = Ic(Fh),
          b = W.transition,
          c = C;

      try {
        W.transition = null;
        C = 16 > a ? 16 : a;
        if (null === Eh) var d = !1;else {
          a = Eh;
          Eh = null;
          Fh = 0;
          if (0 !== (H & 6)) throw Error(m(331));
          var e = H;
          H |= 4;

          for (T = a.current; null !== T;) {
            var f = T,
                g = f.child;

            if (0 !== (T.flags & 16)) {
              var h = f.deletions;

              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];

                  for (T = l; null !== T;) {
                    var n = T;

                    switch (n.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ng(8, n, f);
                    }

                    var t = n.child;
                    if (null !== t) t["return"] = n, T = t;else for (; null !== T;) {
                      n = T;
                      var p = n.sibling,
                          B = n["return"];
                      Qg(n);

                      if (n === l) {
                        T = null;
                        break;
                      }

                      if (null !== p) {
                        p["return"] = B;
                        T = p;
                        break;
                      }

                      T = B;
                    }
                  }
                }

                var w = f.alternate;

                if (null !== w) {
                  var Z = w.child;

                  if (null !== Z) {
                    w.child = null;

                    do {
                      var za = Z.sibling;
                      Z.sibling = null;
                      Z = za;
                    } while (null !== Z);
                  }
                }

                T = f;
              }
            }

            if (0 !== (f.subtreeFlags & 2064) && null !== g) g["return"] = f, T = g;else b: for (; null !== T;) {
              f = T;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Ng(9, f, f["return"]);
              }
              var E = f.sibling;

              if (null !== E) {
                E["return"] = f["return"];
                T = E;
                break b;
              }

              T = f["return"];
            }
          }

          var r = a.current;

          for (T = r; null !== T;) {
            g = T;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u["return"] = g, T = u;else b: for (g = r; null !== T;) {
              h = T;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Og(9, h);
                }
              } catch (qc) {
                U(h, h["return"], qc);
              }

              if (h === g) {
                T = null;
                break b;
              }

              var Db = h.sibling;

              if (null !== Db) {
                Db["return"] = h["return"];
                T = Db;
                break b;
              }

              T = h["return"];
            }
          }

          H = e;
          ad();
          if (Sc && "function" === typeof Sc.onPostCommitFiberRoot) try {
            Sc.onPostCommitFiberRoot(Rc, a);
          } catch (qc) {}
          d = !0;
        }
        return d;
      } finally {
        C = c, W.transition = b;
      }
    }

    return !1;
  }

  function di(a, b, c) {
    b = Ff(c, b);
    b = Jf(a, b, 1);
    a = Yd(a, b, 1);
    b = I();
    null !== a && (Fc(a, 1, b), Lh(a, b));
  }

  function U(a, b, c) {
    if (3 === a.tag) di(a, a, c);else for (; null !== b;) {
      if (3 === b.tag) {
        di(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;

        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Nf || !Nf.has(d))) {
          a = Ff(c, a);
          a = Mf(b, a, 1);
          b = Yd(b, a, 1);
          a = I();
          null !== b && (Fc(b, 1, a), Lh(b, a));
          break;
        }
      }

      b = b["return"];
    }
  }

  function Pf(a, b, c) {
    var d = a.pingCache;
    null !== d && d["delete"](b);
    b = I();
    a.pingedLanes |= a.suspendedLanes & c;
    O === a && (Y & c) === c && (4 === R || 3 === R && (Y & 130023424) === Y && 500 > D() - ch ? Sh(a, 0) : yh |= c);
    Lh(a, b);
  }

  function ei(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = xc, xc <<= 1, 0 === (xc & 130023424) && (xc = 4194304)));
    var c = I();
    a = Td(a, b);
    null !== a && (Fc(a, b, c), Lh(a, c));
  }

  function pg(a) {
    var b = a.memoizedState,
        c = 0;
    null !== b && (c = b.retryLane);
    ei(a, c);
  }

  function Zg(a, b) {
    var c = 0;

    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;

      case 19:
        d = a.stateNode;
        break;

      default:
        throw Error(m(314));
    }

    null !== d && d["delete"](b);
    ei(a, c);
  }

  var bi;

  bi = function bi(a, b, c) {
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || z.current) G = !0;else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return G = !1, tg(a, b, c);
        G = 0 !== (a.flags & 131072) ? !0 : !1;
      }
    } else G = !1, F && 0 !== (b.flags & 1048576) && ld(b, ed, b.index);
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        var d = b.type;
        dg(a, b);
        a = b.pendingProps;
        var e = lc(b, x.current);
        Od(b, c);
        e = Re(null, b, d, a, e, c);
        var f = We();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A(d) ? (f = !0, pc(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, Vd(b), e.updater = he, b.stateNode = e, e._reactInternals = b, le(b, d, a, c), b = eg(null, b, d, !0, f, c)) : (b.tag = 0, F && f && md(b), P(null, b, e, c), b = b.child);
        return b;

      case 16:
        d = b.elementType;

        a: {
          dg(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = fi(d);
          a = Fd(d, a);

          switch (e) {
            case 0:
              b = Yf(null, b, d, a, c);
              break a;

            case 1:
              b = cg(null, b, d, a, c);
              break a;

            case 11:
              b = Tf(null, b, d, a, c);
              break a;

            case 14:
              b = Vf(null, b, d, Fd(d.type, a), c);
              break a;
          }

          throw Error(m(306, d, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), Yf(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), cg(a, b, d, e, c);

      case 3:
        a: {
          fg(b);
          if (null === a) throw Error(m(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          Wd(a, b);
          ae(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (Va && f.isDehydrated) {
            if (f = {
              element: d,
              isDehydrated: !1,
              cache: g.cache,
              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
              transitions: g.transitions
            }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ff(Error(m(423)), b);
              b = gg(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ff(Error(m(424)), b);
              b = gg(a, b, d, c, e);
              break a;
            } else for (Va && (pd = Pb(b.stateNode.containerInfo), od = b, F = !0, rd = null, qd = !1), c = we(b, null, d, c), b.child = c; c;) {
              c.flags = c.flags & -3 | 4096, c = c.sibling;
            }
          } else {
            Ad();

            if (d === e) {
              b = Uf(a, b, c);
              break a;
            }

            P(a, b, d, c);
          }
          b = b.child;
        }

        return b;

      case 5:
        return Ee(b), null === a && wd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Na(d, e) ? g = null : null !== f && Na(d, f) && (b.flags |= 32), bg(a, b), P(a, b, g, c), b.child;

      case 6:
        return null === a && wd(b), null;

      case 13:
        return jg(a, b, c);

      case 4:
        return Ce(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = ve(b, null, d, c) : P(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), Tf(a, b, d, e, c);

      case 7:
        return P(a, b, b.pendingProps, c), b.child;

      case 8:
        return P(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return P(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          Ld(b, d, g);
          if (null !== f) if (Vc(f.value, g)) {
            if (f.children === e.children && !z.current) {
              b = Uf(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f["return"] = b); null !== f;) {
            var h = f.dependencies;

            if (null !== h) {
              g = f.child;

              for (var k = h.firstContext; null !== k;) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = Xd(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;

                    if (null !== l) {
                      l = l.shared;
                      var n = l.pending;
                      null === n ? k.next = k : (k.next = n.next, n.next = k);
                      l.pending = k;
                    }
                  }

                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  Nd(f["return"], c, b);
                  h.lanes |= c;
                  break;
                }

                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
              g = f["return"];
              if (null === g) throw Error(m(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              Nd(g, c, b);
              g = f.sibling;
            } else g = f.child;

            if (null !== g) g["return"] = f;else for (g = f; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              f = g.sibling;

              if (null !== f) {
                f["return"] = g["return"];
                g = f;
                break;
              }

              g = g["return"];
            }
            f = g;
          }
          P(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, d = b.pendingProps.children, Od(b, c), e = Pd(e), d = d(e), b.flags |= 1, P(a, b, d, c), b.child;

      case 14:
        return d = b.type, e = Fd(d, b.pendingProps), e = Fd(d.type, e), Vf(a, b, d, e, c);

      case 15:
        return Xf(a, b, b.type, b.pendingProps, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Fd(d, e), dg(a, b), b.tag = 1, A(d) ? (a = !0, pc(b)) : a = !1, Od(b, c), je(b, d, e), le(b, d, e, c), eg(null, b, d, !0, a, c);

      case 19:
        return sg(a, b, c);

      case 22:
        return Zf(a, b, c);
    }

    throw Error(m(156, b.tag));
  };

  function Nh(a, b) {
    return Jc(a, b);
  }

  function gi(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function td(a, b, c, d) {
    return new gi(a, b, c, d);
  }

  function Wf(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function fi(a) {
    if ("function" === typeof a) return Wf(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === ma) return 11;
      if (a === pa) return 14;
    }

    return 2;
  }

  function qe(a, b) {
    var c = a.alternate;
    null === c ? (c = td(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function se(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Wf(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ha:
        return ue(c.children, e, f, b);

      case ia:
        g = 8;
        e |= 8;
        break;

      case ja:
        return a = td(12, c, b, e | 2), a.elementType = ja, a.lanes = f, a;

      case na:
        return a = td(13, c, b, e), a.elementType = na, a.lanes = f, a;

      case oa:
        return a = td(19, c, b, e), a.elementType = oa, a.lanes = f, a;

      case ra:
        return kg(c, e, f, b);

      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ka:
            g = 10;
            break a;

          case la:
            g = 9;
            break a;

          case ma:
            g = 11;
            break a;

          case pa:
            g = 14;
            break a;

          case qa:
            g = 16;
            d = null;
            break a;
        }
        throw Error(m(130, null == a ? a : typeof a, ""));
    }
    b = td(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function ue(a, b, c, d) {
    a = td(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function kg(a, b, c, d) {
    a = td(22, a, d, b);
    a.elementType = ra;
    a.lanes = c;
    a.stateNode = {
      isHidden: !1
    };
    return a;
  }

  function re(a, b, c) {
    a = td(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function te(a, b, c) {
    b = td(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function hi(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ec(0);
    this.expirationTimes = Ec(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ec(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    Va && (this.mutableSourceEagerHydrationData = null);
  }

  function ii(a, b, c, d, e, f, g, h, k) {
    a = new hi(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = td(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
      element: d,
      isDehydrated: c,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    Vd(f);
    return a;
  }

  function ji(a) {
    if (!a) return jc;
    a = a._reactInternals;

    a: {
      if (wa(a) !== a || 1 !== a.tag) throw Error(m(170));
      var b = a;

      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;

          case 1:
            if (A(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }

        }

        b = b["return"];
      } while (null !== b);

      throw Error(m(171));
    }

    if (1 === a.tag) {
      var c = a.type;
      if (A(c)) return oc(a, c, b);
    }

    return b;
  }

  function ki(a) {
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(m(188));
      a = Object.keys(a).join(",");
      throw Error(m(268, a));
    }

    a = Aa(b);
    return null === a ? null : a.stateNode;
  }

  function li(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function mi(a, b) {
    li(a, b);
    (a = a.alternate) && li(a, b);
  }

  function ni(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }

  function oi() {
    return null;
  }

  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = Td(a, 134217728);

      if (null !== b) {
        var c = I();
        ge(b, a, 134217728, c);
      }

      mi(a, 134217728);
    }
  };

  exports.attemptDiscreteHydration = function (a) {
    if (13 === a.tag) {
      var b = Td(a, 1);

      if (null !== b) {
        var c = I();
        ge(b, a, 1, c);
      }

      mi(a, 1);
    }
  };

  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = fe(a),
          c = Td(a, b);

      if (null !== c) {
        var d = I();
        ge(c, a, b, d);
      }

      mi(a, b);
    }
  };

  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;

        if (b.current.memoizedState.isDehydrated) {
          var c = yc(b.pendingLanes);
          0 !== c && (Hc(b, c | 1), Lh(b, D()), 0 === (H & 6) && (Ch(), ad()));
        }

        break;

      case 13:
        Yh(function () {
          var b = Td(a, 1);

          if (null !== b) {
            var c = I();
            ge(b, a, 1, c);
          }
        }), mi(a, 1);
    }
  };

  exports.batchedUpdates = function (a, b) {
    var c = H;
    H |= 1;

    try {
      return a(b);
    } finally {
      H = c, 0 === H && (Ch(), Xc && ad());
    }
  };

  exports.createComponentSelector = function (a) {
    return {
      $$typeof: ih,
      value: a
    };
  };

  exports.createContainer = function (a, b, c, d, e, f, g) {
    return ii(a, b, !1, null, c, d, e, f, g);
  };

  exports.createHasPseudoClassSelector = function (a) {
    return {
      $$typeof: jh,
      value: a
    };
  };

  exports.createHydrationContainer = function (a, b, c, d, e, f, g, h, k) {
    a = ii(c, d, !0, a, e, f, g, h, k);
    a.context = ji(null);
    c = a.current;
    d = I();
    e = fe(c);
    f = Xd(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    Yd(c, f, e);
    a.current.lanes = e;
    Fc(a, e, d);
    Lh(a, d);
    return a;
  };

  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: fa,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };

  exports.createRoleSelector = function (a) {
    return {
      $$typeof: kh,
      value: a
    };
  };

  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: lh,
      value: a
    };
  };

  exports.createTextSelector = function (a) {
    return {
      $$typeof: mh,
      value: a
    };
  };

  exports.deferredUpdates = function (a) {
    var b = C,
        c = W.transition;

    try {
      return W.transition = null, C = 16, a();
    } finally {
      C = b, W.transition = c;
    }
  };

  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = C,
        g = W.transition;

    try {
      return W.transition = null, C = 1, a(b, c, d, e);
    } finally {
      C = f, W.transition = g, 0 === H && Ch();
    }
  };

  exports.findAllNodes = sh;

  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(m(363));
    b = sh(a, b);
    a = [];

    for (var c = 0; c < b.length; c++) {
      a.push(db(b[c]));
    }

    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];

      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
        if (b !== h) {
          var k = a[h],
              l = k.x,
              n = l + k.width,
              t = k.y,
              p = t + k.height;

          if (d >= l && f >= t && e <= n && g <= p) {
            a.splice(b, 1);
            break;
          } else if (!(d !== l || c.width !== k.width || p < f || t > g)) {
            t > f && (k.height += t - f, k.y = f);
            p < g && (k.height = g - t);
            a.splice(b, 1);
            break;
          } else if (!(f !== t || c.height !== k.height || n < d || l > e)) {
            l > d && (k.width += l - d, k.x = d);
            n < e && (k.width = e - l);
            a.splice(b, 1);
            break;
          }
        }
      }
    }

    return a;
  };

  exports.findHostInstance = ki;

  exports.findHostInstanceWithNoPortals = function (a) {
    a = ya(a);
    a = null !== a ? Ca(a) : null;
    return null === a ? null : a.stateNode;
  };

  exports.findHostInstanceWithWarning = function (a) {
    return ki(a);
  };

  exports.flushControlled = function (a) {
    var b = H;
    H |= 1;
    var c = W.transition,
        d = C;

    try {
      W.transition = null, C = 1, a();
    } finally {
      C = d, W.transition = c, H = b, 0 === H && (Ch(), ad());
    }
  };

  exports.flushPassiveEffects = Ph;
  exports.flushSync = Yh;

  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(m(363));
    a = oh(a);
    b = rh(a, b);
    b = Array.from(b);

    for (a = 0; a < b.length;) {
      var c = b[a++];

      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;

        for (c = c.child; null !== c;) {
          b.push(c), c = c.sibling;
        }
      }
    }

    return !1;
  };

  exports.getCurrentUpdatePriority = function () {
    return C;
  };

  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(m(363));
    var c = 0,
        d = [];
    a = [oh(a), 0];

    for (var e = 0; e < a.length;) {
      var f = a[e++],
          g = a[e++],
          h = b[g];
      if (5 !== f.tag || !fb(f)) if (ph(f, h) && (d.push(qh(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) {
        a.push(f, g), f = f.sibling;
      }
    }

    if (c < b.length) {
      for (a = []; c < b.length; c++) {
        a.push(qh(b[c]));
      }

      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }

    return null;
  };

  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return Ea(a.child.stateNode);

      default:
        return a.child.stateNode;
    }
  };

  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: da.ReactCurrentDispatcher,
      findHostInstanceByFiber: ni,
      findFiberByHostInstance: a.findFiberByHostInstance || oi,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0"
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = !0;else {
        try {
          Rc = b.inject(a), Sc = b;
        } catch (c) {}

        a = b.checkDCE ? !0 : !1;
      }
    }
    return a;
  };

  exports.isAlreadyRendering = function () {
    return !1;
  };

  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(m(363));
    a = sh(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };

  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };

  exports.runWithPriority = function (a, b) {
    var c = C;

    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };

  exports.shouldError = function () {
    return null;
  };

  exports.shouldSuspend = function () {
    return !1;
  };

  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
        f = I(),
        g = fe(e);
    c = ji(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = Xd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = Yd(e, b, g);
    null !== a && (ge(a, e, g, f), Zd(a, e, g));
    return g;
  };

  return exports;
};

/***/ }),

/***/ "../../../node_modules/react-reconciler/constants.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/react-reconciler/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__("../../../node_modules/react/index.js"),
    k = Symbol["for"]("react.element"),
    l = Symbol["for"]("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, g) {
  var b,
      d = {},
      e = null,
      h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);

  for (b in a) {
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}

exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "../../../node_modules/react/cjs/react.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol["for"]("react.element"),
    n = Symbol["for"]("react.portal"),
    p = Symbol["for"]("react.fragment"),
    q = Symbol["for"]("react.strict_mode"),
    r = Symbol["for"]("react.profiler"),
    t = Symbol["for"]("react.provider"),
    u = Symbol["for"]("react.context"),
    v = Symbol["for"]("react.forward_ref"),
    w = Symbol["for"]("react.suspense"),
    x = Symbol["for"]("react.memo"),
    y = Symbol["for"]("react.lazy"),
    z = Symbol.iterator;

function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

var B = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    C = Object.assign,
    D = {};

function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    K = {
  current: null
},
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, e) {
  var d,
      c = {},
      k = null,
      h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  }
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) {
    void 0 === c[d] && (c[d] = g[d]);
  }
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}

function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g;

function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }

  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  } else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}

function S(a, b, e) {
  if (null == a) return a;
  var d = [],
      c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}

function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }

  if (1 === a._status) return a._result["default"];
  throw a._result;
}

var U = {
  current: null
},
    V = {
  transition: null
},
    W = {
  ReactCurrentDispatcher: U,
  ReactCurrentBatchConfig: V,
  ReactCurrentOwner: K
};
exports.Children = {
  map: S,
  forEach: function forEach(a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function count(a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;

exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};

exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};

  try {
    a();
  } finally {
    V.transition = b;
  }
};

exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};

exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};

exports.useContext = function (a) {
  return U.current.useContext(a);
};

exports.useDebugValue = function () {};

exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};

exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};

exports.useId = function () {
  return U.current.useId();
};

exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};

exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};

exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};

exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};

exports.useRef = function (a) {
  return U.current.useRef(a);
};

exports.useState = function (a) {
  return U.current.useState(a);
};

exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};

exports.useTransition = function () {
  return U.current.useTransition();
};

exports.version = "18.2.0";

/***/ }),

/***/ "../../../node_modules/react/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/scheduler/cjs/scheduler.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function f(a, b) {
  var c = a.length;
  a.push(b);

  a: for (; 0 < c;) {
    var d = c - 1 >>> 1,
        e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function h(a) {
  return 0 === a.length ? null : a[0];
}

function k(a) {
  if (0 === a.length) return null;
  var b = a[0],
      c = a.pop();

  if (c !== b) {
    a[0] = c;

    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
      var m = 2 * (d + 1) - 1,
          C = a[m],
          n = m + 1,
          x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
    }
  }

  return b;
}

function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;

  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
      q = p.now();

  exports.unstable_now = function () {
    return p.now() - q;
  };
}

var r = [],
    t = [],
    u = 1,
    v = null,
    y = 3,
    z = !1,
    A = !1,
    B = !1,
    D = "function" === typeof setTimeout ? setTimeout : null,
    E = "function" === typeof clearTimeout ? clearTimeout : null,
    F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);

function G(a) {
  for (var b = h(t); null !== b;) {
    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
    b = h(t);
  }
}

function H(a) {
  B = !1;
  G(a);
  if (!A) if (null !== h(r)) A = !0, I(J);else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}

function J(a, b) {
  A = !1;
  B && (B = !1, E(L), L = -1);
  z = !0;
  var c = y;

  try {
    G(b);

    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
      var d = v.callback;

      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);

      v = h(r);
    }

    if (null !== v) var w = !0;else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = !1;
    }
    return w;
  } finally {
    v = null, y = c, z = !1;
  }
}

var N = !1,
    O = null,
    L = -1,
    P = 5,
    Q = -1;

function M() {
  return exports.unstable_now() - Q < P ? !1 : !0;
}

function R() {
  if (null !== O) {
    var a = exports.unstable_now();
    Q = a;
    var b = !0;

    try {
      b = O(!0, a);
    } finally {
      b ? S() : (N = !1, O = null);
    }
  } else N = !1;
}

var S;
if ("function" === typeof F) S = function S() {
  F(R);
};else if ("undefined" !== typeof MessageChannel) {
  var T = new MessageChannel(),
      U = T.port2;
  T.port1.onmessage = R;

  S = function S() {
    U.postMessage(null);
  };
} else S = function S() {
  D(R, 0);
};

function I(a) {
  O = a;
  N || (N = !0, S());
}

function K(a, b) {
  L = D(function () {
    a(exports.unstable_now());
  }, b);
}

exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_continueExecution = function () {
  A || z || (A = !0, I(J));
};

exports.unstable_forceFrameRate = function (a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};

exports.unstable_getCurrentPriorityLevel = function () {
  return y;
};

exports.unstable_getFirstCallbackNode = function () {
  return h(r);
};

exports.unstable_next = function (a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = y;
  }

  var c = y;
  y = b;

  try {
    return a();
  } finally {
    y = c;
  }
};

exports.unstable_pauseExecution = function () {};

exports.unstable_requestPaint = function () {};

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = y;
  y = a;

  try {
    return b();
  } finally {
    y = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

  switch (a) {
    case 1:
      var e = -1;
      break;

    case 2:
      e = 250;
      break;

    case 5:
      e = 1073741823;
      break;

    case 4:
      e = 1E4;
      break;

    default:
      e = 5E3;
  }

  e = c + e;
  a = {
    id: u++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
  return a;
};

exports.unstable_shouldYield = M;

exports.unstable_wrapCallback = function (a) {
  var b = y;
  return function () {
    var c = y;
    y = b;

    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};

/***/ }),

/***/ "../../../node_modules/scheduler/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var e = __webpack_require__("../../../node_modules/react/index.js");

function h(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var k = "function" === typeof Object.is ? Object.is : h,
    l = e.useState,
    m = e.useEffect,
    n = e.useLayoutEffect,
    p = e.useDebugValue;

function q(a, b) {
  var d = b(),
      f = l({
    inst: {
      value: d,
      getSnapshot: b
    }
  }),
      c = f[0].inst,
      g = f[1];
  n(function () {
    c.value = d;
    c.getSnapshot = b;
    r(c) && g({
      inst: c
    });
  }, [a, d, b]);
  m(function () {
    r(c) && g({
      inst: c
    });
    return a(function () {
      r(c) && g({
        inst: c
      });
    });
  }, [a]);
  p(d);
  return d;
}

function r(a) {
  var b = a.getSnapshot;
  a = a.value;

  try {
    var d = b();
    return !k(a, d);
  } catch (f) {
    return !0;
  }
}

function t(a, b) {
  return b();
}

var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
exports.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;

/***/ }),

/***/ "../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var g = __webpack_require__("../../../node_modules/react/index.js");

function n(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var p = "function" === typeof Object.is ? Object.is : n,
    q = g.useSyncExternalStore,
    r = g.useRef,
    t = g.useEffect,
    u = g.useMemo,
    v = g.useDebugValue;

exports.useSyncExternalStoreWithSelector = function (a, b, e, l, h) {
  var c = r(null);

  if (null === c.current) {
    var f = {
      hasValue: !1,
      value: null
    };
    c.current = f;
  } else f = c.current;

  c = u(function () {
    function a(a) {
      if (!c) {
        c = !0;
        d = a;
        a = l(a);

        if (void 0 !== h && f.hasValue) {
          var b = f.value;
          if (h(b, a)) return k = b;
        }

        return k = a;
      }

      b = k;
      if (p(d, a)) return b;
      var e = l(a);
      if (void 0 !== h && h(b, e)) return b;
      d = a;
      return k = e;
    }

    var c = !1,
        d,
        k,
        m = void 0 === e ? null : e;
    return [function () {
      return a(b());
    }, null === m ? void 0 : function () {
      return a(m());
    }];
  }, [b, e, l, h]);
  var d = q(a, c[0], c[1]);
  t(function () {
    f.hasValue = !0;
    f.value = d;
  }, [d]);
  v(d);
  return d;
};

/***/ }),

/***/ "../../../node_modules/use-sync-external-store/shim/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/use-sync-external-store/with-selector.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.min.js");
} else {}

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/classes/index.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".classes_host__Moref{flex-shrink:0;margin-bottom:16px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"host": "classes_host__Moref"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/global-style/index.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".global-style_host__rZeXA{flex-shrink:0;padding:16px}.global-style_scroll__Zskza{flex-grow:1}.global-style_input__XwojZ{flex-grow:1;min-height:100%}.global-style_dialog__38IPC{left:100%;top:0;position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"host": "global-style_host__rZeXA",
	"scroll": "global-style_scroll__Zskza",
	"input": "global-style_input__XwojZ",
	"dialog": "global-style_dialog__38IPC"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/grouped-styles/index.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".grouped-styles_styles__ZStIb{flex-direction:column;align-items:stretch}.grouped-styles_styles__ZStIb .grouped-styles_showAllButton__VwkE5{margin-bottom:20px}.grouped-styles_row__mcjuc{flex-direction:row;flex-shrink:0;align-items:center;margin-bottom:4px;overflow:hidden}.grouped-styles_row__mcjuc:hover{background:.82}.grouped-styles_row__mcjuc .grouped-styles_removeButton__CBBCF{visibility:hidden;padding-left:4px;padding-right:4px;padding-top:2px;padding-bottom:2px;margin:0}.grouped-styles_row__mcjuc.grouped-styles_exists__uF9UB{font-weight:bold}.grouped-styles_row__mcjuc.grouped-styles_exists__uF9UB .grouped-styles_removeButton__CBBCF{font-weight:none;visibility:visible}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD{flex-grow:0;width:100px}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD .grouped-styles_rowContent__KpNMD{align-items:stretch;justify-content:center;text-align:center}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-top__wu6xs .grouped-styles_rowContent__KpNMD{flex-direction:column}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-bottom__g9KqD .grouped-styles_rowContent__KpNMD{flex-direction:column-reverse}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-left__We7Fo .grouped-styles_rowContent__KpNMD,.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-start__3Z2cE .grouped-styles_rowContent__KpNMD{flex-direction:row}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-right__9r3WY,.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-end__OHeZ9{margin-left:40px;flex-direction:row-reverse}.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-right__9r3WY .grouped-styles_rowContent__KpNMD,.grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-end__OHeZ9 .grouped-styles_rowContent__KpNMD{flex-direction:row-reverse}.grouped-styles_propRectContainer__N9LgK{padding-top:6px;padding-bottom:6px;flex-direction:row}.grouped-styles_propRectContainer__N9LgK:not(:first-child){border-top-color:.78;border-top-width:2px}.grouped-styles_propRectContainer__N9LgK:hover{background:.82}.grouped-styles_rectHead__RpSTb{width:150px;align-self:center}.grouped-styles_rectHead__RpSTb .grouped-styles_rowContent__KpNMD{flex-direction:column;align-self:center}.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD{width:180px}.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-top__wu6xs,.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-right__9r3WY{margin-left:12px;flex-direction:row-reverse}.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-top__wu6xs .grouped-styles_rowContent__KpNMD,.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-right__9r3WY .grouped-styles_rowContent__KpNMD{flex-direction:row-reverse}.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-bottom__g9KqD,.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-left__We7Fo{flex-direction:row}.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-bottom__g9KqD .grouped-styles_rowContent__KpNMD,.grouped-styles_propRect__qSakV.grouped-styles_corner__mGAEH .grouped-styles_row__mcjuc.grouped-styles_rectPart__hwZRD.grouped-styles_part-left__We7Fo .grouped-styles_rowContent__KpNMD{flex-direction:row}.grouped-styles_propRectRow__2DTbc{flex-direction:row;justify-content:center}.grouped-styles_rowContent__KpNMD{flex-grow:1;flex-basis:0;align-items:stretch;align-self:stretch}.grouped-styles_group__pfFO7{border-radius:8px;padding:6px;margin:6px;background:.86;border-width:2px;border-color:.83}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"styles": "grouped-styles_styles__ZStIb",
	"showAllButton": "grouped-styles_showAllButton__VwkE5",
	"row": "grouped-styles_row__mcjuc",
	"removeButton": "grouped-styles_removeButton__CBBCF",
	"exists": "grouped-styles_exists__uF9UB",
	"rectPart": "grouped-styles_rectPart__hwZRD",
	"rowContent": "grouped-styles_rowContent__KpNMD",
	"part-top": "grouped-styles_part-top__wu6xs",
	"part-bottom": "grouped-styles_part-bottom__g9KqD",
	"part-left": "grouped-styles_part-left__We7Fo",
	"part-start": "grouped-styles_part-start__3Z2cE",
	"part-right": "grouped-styles_part-right__9r3WY",
	"part-end": "grouped-styles_part-end__OHeZ9",
	"propRectContainer": "grouped-styles_propRectContainer__N9LgK",
	"rectHead": "grouped-styles_rectHead__RpSTb",
	"propRect": "grouped-styles_propRect__qSakV",
	"corner": "grouped-styles_corner__mGAEH",
	"propRectRow": "grouped-styles_propRectRow__2DTbc",
	"group": "grouped-styles_group__pfFO7"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/index.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main_host__z\\+xYX{flex-direction:column;align-items:stretch}.main_logo__OwTft{max-height:200px;max-width:200px;align-self:center;transform-origin:center}.main_logo__OwTft+view{font-size:16px;align-self:center}.main_logo__OwTft~span{font-size:12px;align-self:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"host": "main_host__z+xYX",
	"logo": "main_logo__OwTft"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react-reconciler/constants.js
var constants = __webpack_require__("../../../node_modules/react-reconciler/constants.js");
;// CONCATENATED MODULE: ../../../renderer/dist/src/version.js
var version = '0.13.0';
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__("../../../node_modules/use-sync-external-store/shim/index.js");
// EXTERNAL MODULE: ../../../node_modules/use-sync-external-store/with-selector.js
var with_selector = __webpack_require__("../../../node_modules/use-sync-external-store/with-selector.js");
;// CONCATENATED MODULE: ../../../renderer/dist/src/helpers/dictionary-watcher.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




/**
 * Creates a context that updates its value when the values in the dictionary change
 * @param dictionary The dictionary to be watched. Must implement the EventDictionary type in the C#
 * @param displayName A displayName to identify this context easier in case of problems
 */

function createDictionaryWatcher(dictionary, displayName) {
  var ctx = (0,react.createContext)(undefined);
  if (displayName) ctx.displayName = displayName;

  var snapshot = __assign({}, dictionary);

  var subscribe = function subscribe(onStoreChange) {
    snapshot = __assign({}, dictionary);
    var remove = dictionary === null || dictionary === void 0 ? void 0 : dictionary.AddListener(function (key, value, dic) {
      snapshot = __assign({}, dictionary);
      onStoreChange();
    });

    if (!remove) {
      if (displayName) console.warn("".concat(displayName, " dictionary does not provide a change listener"));else console.warn('The dictionary does not provide a change listener');
    }

    return function () {
      return remove === null || remove === void 0 ? void 0 : remove();
    };
  };

  var getSnapshot = function getSnapshot() {
    return snapshot;
  };

  var Provider = function GlobalsProvider(_a) {
    var children = _a.children;
    var value = (0,shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    return (0,react.createElement)(ctx.Provider, {
      value: value
    }, children);
  };

  function useSelector(selector) {
    return (0,with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, selector);
  }

  function useDictionaryContext() {
    var context = (0,react.useContext)(ctx);

    if (context === undefined) {
      if (displayName) throw new Error("".concat(displayName, ".useContext must be used within a ").concat(displayName, ".Provider"));else throw new Error('useContext must be used within a provider');
    }

    return context;
  }

  return {
    context: ctx,
    Provider: Provider,
    useContext: useDictionaryContext,
    useSelector: useSelector
  };
}
var globalsWatcher = createDictionaryWatcher(Globals, 'globalsContext');
var useGlobals = globalsWatcher.useContext;
var GlobalsProvider = globalsWatcher.Provider;
;// CONCATENATED MODULE: ../../../renderer/dist/src/views/error-boundary.js
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var error_boundary_assign = undefined && undefined.__assign || function () {
  error_boundary_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return error_boundary_assign.apply(this, arguments);
};




var ErrorBoundary =
/** @class */
function (_super) {
  __extends(ErrorBoundary, _super);

  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function (error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error
    };
  };

  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {// You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  };

  ErrorBoundary.prototype.render = function () {
    var _a, _b;

    if (this.state.hasError) {
      return (0,jsx_runtime.jsxs)("view", error_boundary_assign({
        style: {
          color: 'crimson',
          padding: 20
        }
      }, {
        children: [(0,jsx_runtime.jsx)("view", error_boundary_assign({
          style: {
            marginBottom: '12px'
          }
        }, {
          children: ((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || ''
        })), (0,jsx_runtime.jsx)("view", {
          children: ((_b = this.state.error) === null || _b === void 0 ? void 0 : _b.stack) || ''
        })]
      }));
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(react.Component);


;// CONCATENATED MODULE: ../../../renderer/dist/src/views/default-view.js



function DefaultView(_a) {
  var children = _a.children,
      withHelpers = _a.withHelpers;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: !withHelpers ? children : (0,jsx_runtime.jsx)(ErrorBoundary, {
      children: (0,jsx_runtime.jsx)(GlobalsProvider, {
        children: children
      })
    })
  });
}
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/async/objects.js
var ObjectsRepo =
/** @class */
function () {
  function ObjectsRepo() {
    var _this = this;

    this.indices = [{}];
    this.objects = new WeakMap();

    this.setObject = function (index, item) {
      var it = _this.indices[index];

      if (!it) {
        it = _this.indices[index] = {};
      }

      _this.objects.set(it, item);
    };

    this.addObject = function (item) {
      if (!item) return -1;
      var it = {};
      var ind = _this.indices.length;

      _this.indices.push(it);

      _this.objects.set(it, item);

      return ind;
    };

    this.getObject = function (index) {
      if (index < 0) return undefined;
      var it = _this.indices[index];
      return _this.objects.get(it);
    };
  }

  return ObjectsRepo;
}();


// EXTERNAL MODULE: ../../../node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__("../../../node_modules/react-reconciler/index.js");
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/diffing.js
var styleStringSymbol = '__style_as_string__';
function diffProperties(lastProps, nextProps, deepDiffing) {
  if (deepDiffing === void 0) {
    deepDiffing = 0;
  }

  if (lastProps === nextProps) return null;
  var updatePayload = null;
  var propKey;

  for (propKey in lastProps) {
    // This loop is for removing properties that existed in the previous properties, but not on current
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }

    var prop = null; // If style existed in the previous properties as string, set it to null

    if (propKey === 'style' && typeof lastProps.style === 'string') {
      (updatePayload = updatePayload || {})[styleStringSymbol] = null;
    } else {
      var depth = deepDiffing > 0 ? deepDiffing : propKey === 'style' ? 1 : 0;

      if (depth > 0) {
        prop = diffProperties(lastProps[propKey], {}, depth - 1);
        if (!prop) continue;
      } // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.


      (updatePayload = updatePayload || {})[propKey] = prop;
    }
  }

  for (propKey in nextProps) {
    // This loop is for finding difference between current properties and previous properties
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;

    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    var prop = nextProp;

    if (propKey === 'style') {
      var prevWasString = typeof lastProp === 'string';
      var curIsString = typeof prop === 'string';

      if (prevWasString !== curIsString) {
        (updatePayload = updatePayload || {})[styleStringSymbol] = typeof prop === 'string' ? prop : null;

        if (curIsString) {
          // Current style is string while previous is object, so revert all changes from the previous one
          prop = diffProperties(lastProp, {}, 0);
          if (!prop) continue;
        }
      } else {
        if (curIsString) {
          // Both styles are string, style does not need changing
          continue;
        } else {
          // Both styles are object, take the difference
          prop = diffProperties(lastProp, nextProp, 0);
          if (!prop) continue;
        }
      }
    }

    if (deepDiffing > 0) {
      prop = diffProperties(lastProp, nextProp, deepDiffing - 1);
      if (!prop) continue;
    }

    (updatePayload = updatePayload || {})[propKey] = prop;
  }

  return updatePayload;
}
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/constants.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var hideClass = 'react-unity__renderer__hidden';
var eventPriorities = {
  discrete: constants.DiscreteEventPriority,
  continuous: constants.ContinuousEventPriority,
  "default": constants.DefaultEventPriority,
  idle: constants.IdleEventPriority
};
var textTypes = {
  text: true,
  icon: true,
  style: true,
  script: true
};
function getAllowedProps(props, type) {
  var children = props.children,
      tag = props.tag,
      rest = __rest(props, ["children", "tag"]);

  if (textTypes[type] && 'children' in props) {
    rest.children = !children || typeof children === 'boolean' ? null : Array.isArray(children) ? children.join('') : children + '';
  }

  if (typeof props.style === 'string') rest[styleStringSymbol] = props.style;
  return rest;
}
var commonReconciler = {
  // -------------------
  //     Scheduling
  // -------------------
  now: Date.now,
  getCurrentEventPriority: function getCurrentEventPriority() {
    return UnityBridge.CurrentEventPriority || eventPriorities["default"];
  },
  noTimeout: -1,
  scheduleTimeout: function scheduleTimeout(callback, delay) {
    return setTimeout(callback, delay);
  },
  scheduleMicrotask: typeof queueMicrotask === 'function' ? queueMicrotask : function (callback) {
    return Promise.resolve(null).then(callback)["catch"](function (error) {
      return setTimeout(function () {
        throw error;
      }, 0);
    });
  },
  cancelTimeout: function cancelTimeout(handle) {
    return clearTimeout(handle);
  },
  beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
  getInstanceFromNode: function getInstanceFromNode(node) {
    return undefined;
  },
  getInstanceFromScope: function getInstanceFromScope(scopeInstance) {
    return undefined;
  },
  prepareScopeUpdate: function prepareScopeUpdate(scopeInstance, instance) {}
};
var isDevelopment = "production" === 'development';
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/subcontexts/richtext.js
function parametrizeValue(value) {
  if (typeof value === 'number') return value + '';
  value = value + '';
  if (value.includes(' ') || value.includes('-')) return '"' + value + '"';
  return value;
}
function stringifyRichText(node) {
  var _a, _b, _c;

  if (node.hidden) return '';
  if ('text' in node) return node.text;
  var acc = [];
  var tag = node.tag;

  if (tag) {
    acc.push('<');
    acc.push(tag);

    if (((_a = node.attributes) === null || _a === void 0 ? void 0 : _a.value) != null) {
      var value = (_b = node.attributes) === null || _b === void 0 ? void 0 : _b.value;
      acc.push('=');
      acc.push(parametrizeValue(value));
    }

    for (var key in node.attributes) {
      if (key === 'value') continue;

      if (Object.prototype.hasOwnProperty.call(node.attributes, key)) {
        var value = node.attributes[key];

        if (value != null) {
          acc.push(' ');
          acc.push(key);
          acc.push('=');
          acc.push(parametrizeValue(value));
        }
      }
    }

    acc.push('>');
  }

  if (((_c = node.children) === null || _c === void 0 ? void 0 : _c.length) > 0) {
    for (var _i = 0, _d = node.children; _i < _d.length; _i++) {
      var child = _d[_i];
      acc.push(stringifyRichText(child));
    }

    if (tag) {
      acc.push('</');
      acc.push(tag);
      acc.push('>');
    }
  }

  return acc.join('');
}
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/subcontexts/svg.js
function kebabize(str) {
  return str.split('').map(function (letter, idx) {
    return letter.toUpperCase() === letter ? "".concat(idx !== 0 ? '-' : '').concat(letter.toLowerCase()) : letter;
  }).join('');
}

;
function stringifyStyle(style) {
  if (typeof style === 'string') return style;
  var acc = [];

  for (var key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      var element = style[key];

      if (element != null) {
        acc.push(kebabize(key));
        acc.push(':');
        acc.push(element);
        acc.push(';');
      }
    }
  }

  return acc.join('');
}
function stringifySVG(node) {
  var _a;

  if (node.hidden) return '';
  if ('text' in node) return node.text;
  var acc = [];
  var tag = node.tag;

  if (tag) {
    acc.push('<');
    acc.push(tag);

    for (var key in node.attributes) {
      if (Object.prototype.hasOwnProperty.call(node.attributes, key)) {
        var element = node.attributes[key];
        if (key === 'style') element = stringifyStyle(element);

        if (element != null) {
          acc.push(' ');
          acc.push(kebabize(key));
          acc.push('="');
          acc.push(element);
          acc.push('"');
        }
      }
    }
  }

  if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
    if (tag) acc.push('>');

    for (var _i = 0, _b = node.children; _i < _b.length; _i++) {
      var child = _b[_i];
      acc.push(stringifySVG(child));
    }

    if (tag) {
      acc.push('</');
      acc.push(tag);
      acc.push('>');
    }
  } else {
    if (tag) acc.push(' />');
  }

  return acc.join('');
}
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/subcontexts/index.js


var subContextRenderers = {
  'richtext': stringifyRichText,
  'svg': stringifySVG
};
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/async/callbacks.js
var callbacks_extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var CallbacksRepo =
/** @class */
function (_super) {
  callbacks_extends(CallbacksRepo, _super);

  function CallbacksRepo() {
    var _this = _super.call(this) || this;

    _this.call = function (ind, args) {
      var cb = _this.getObject(ind);

      var argsAsList = args;
      var argsAsArray = args;

      if (typeof argsAsArray.Length === 'number') {
        // C# Array
        args = [];
        var length = argsAsArray.Length;

        for (var index = 0; index < length; index++) {
          args.push(argsAsArray.GetValue(index));
        }
      } else if (typeof argsAsList.Count === 'number') {
        // C# List
        args = [];
        var length = argsAsList.Count;

        for (var index = 0; index < length; index++) {
          args.push(argsAsList[index]);
        }
      } else if (typeof argsAsList.Count === 'function') {
        // C# IList
        args = [];
        var length = argsAsList.Count();

        for (var index = 0; index < length; index++) {
          args.push(argsAsArray.GetValue(index));
        }
      }

      return cb.apply(null, args);
    };

    return _this;
  }

  return CallbacksRepo;
}(ObjectsRepo);


;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/async/serializer.js


var callbacksRepo = new CallbacksRepo();
var objectsRepo = new ObjectsRepo(); // Separates properties in 3 categories: regular props, callbacks and non-serializable objects

function convertPropsToSerializable(props) {
  var res = {};

  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      var value = props[key];

      if (value == null) {
        (res.p || (res.p = {}))[key] = null;
      } else if (key === 'style') {
        (res.p || (res.p = {}))[key] = convertPropsToSerializable(value);
      } else if (key[0] === 'o' && key[1] === 'n' && typeof value === 'function') {
        var ind = callbacksRepo.addObject(value);
        (res.e || (res.e = {}))[key] = ind;
      } else if (typeof value === 'object' || typeof value === 'function') {
        var ind = objectsRepo.addObject(value);
        (res.o || (res.o = {}))[key] = ind;
      } else {
        (res.p || (res.p = {}))[key] = value;
      }
    }
  }

  return res;
}
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/async/reconciler.js
var reconciler_assign = undefined && undefined.__assign || function () {
  reconciler_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return reconciler_assign.apply(this, arguments);
};






var refId = 0;
var ctxMap = new Map();

var updateSubContext = function updateSubContext(instance) {
  var rend = subContextRenderers[instance.type];
  var root = instance === null || instance === void 0 ? void 0 : instance.root;
  var cur = instance;

  while (cur && !root) {
    root = cur.root;
    cur = cur.parent;
  }

  if (!root) return;
  var content = rend(root.subContext.node);

  if (instance.type === 'richtext') {
    instance.hostContext.commands.push(['x', {
      r: root.refId,
      c: content
    }]);
  } else if (instance.type === 'svg') {
    instance.hostContext.commands.push(['u', reconciler_assign({
      r: root.refId,
      t: 'svg'
    }, convertPropsToSerializable({
      innerContent: content
    }))]);
  }
};

var hostConfig = reconciler_assign(reconciler_assign({}, commonReconciler), {
  getRootHostContext: function getRootHostContext(rootContainer) {
    var context = rootContainer.context;

    if (rootContainer.refId < 0) {
      refId++;
      rootContainer.context.SetRef(refId, rootContainer.component);
      rootContainer.refId = refId;
    }

    var existing = ctxMap.get(context);
    if (existing) return existing;
    var commands = rootContainer.commands;

    var flushCommands = function flushCommands() {
      var serialized = JSON.stringify(commands);
      commands.length = 0;
      return serialized;
    };

    var fireEventByRef = function fireEventByRef(ind, args) {
      return callbacksRepo.call(ind, args);
    };

    var getObjectRef = function getObjectRef(ind) {
      return objectsRepo.getObject(ind);
    };

    var getEventAsObjectRef = function getEventAsObjectRef(ind) {
      return callbacksRepo.getObject(ind);
    };

    context.BindCommands(flushCommands, fireEventByRef, getObjectRef, getEventAsObjectRef);
    var ctx = {
      context: context,
      commands: commands,
      refId: rootContainer.refId,
      type: 'native'
    };
    ctxMap.set(context, ctx);
    return ctx;
  },
  getChildHostContext: function getChildHostContext(parentCtx, type) {
    if (type === 'richtext' && parentCtx.type === 'native') return {
      type: 'richtext',
      hostContext: parentCtx,
      node: null,
      parent: null,
      root: null
    };
    if (type === 'svg' && parentCtx.type === 'native') return {
      type: 'svg',
      hostContext: parentCtx,
      node: null,
      parent: null,
      root: null
    };
    return parentCtx;
  },
  getPublicInstance: function getPublicInstance(instance) {
    if (instance.type === 'native') return instance.context.GetRef(instance.refId, instance.commands.length > 0);
    return null;
  },
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsTestSelectors: false,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  clearContainer: function clearContainer(container) {
    UnityBridge.clearContainer(container);
  },
  createInstance: function createInstance(type, props, rootContainer, ctx, internalHandle) {
    var aProps = getAllowedProps(props, type);

    if (ctx.type === 'native') {
      refId++;
      ctx.commands.push(['c', reconciler_assign({
        t: type,
        r: refId
      }, convertPropsToSerializable(aProps))]);
      if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);

      var res = reconciler_assign(reconciler_assign({}, ctx), {
        refId: refId
      });

      if (type === 'richtext') {
        res.subContext = {
          type: 'richtext',
          node: {
            tag: '',
            children: [],
            attributes: aProps
          },
          root: res,
          hostContext: res,
          parent: null
        };
      }

      if (type === 'svg') {
        res.subContext = {
          type: 'svg',
          node: {
            tag: '',
            children: [],
            attributes: aProps
          },
          root: res,
          hostContext: res,
          parent: null
        };
      }

      return res;
    } else if (ctx.type === 'richtext' || ctx.type === 'svg') {
      return reconciler_assign(reconciler_assign({}, ctx), {
        node: {
          tag: type,
          children: [],
          attributes: aProps
        }
      });
    }
  },
  createTextInstance: function createTextInstance(text, rootContainer, ctx, internalHandle) {
    if (ctx.type === 'native') {
      refId++;
      ctx.commands.push(['t', {
        r: refId,
        c: text
      }]);
      if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);
      return reconciler_assign(reconciler_assign({}, ctx), {
        refId: refId
      });
    } else if (ctx.type === 'richtext' || ctx.type === 'svg') {
      return reconciler_assign(reconciler_assign({}, ctx), {
        node: {
          text: text
        }
      });
    }
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;

    if (parent.type === 'native' && child.type === 'native') {
      parent.commands.push(['a', {
        p: parent.refId,
        c: child.refId
      }]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) parent.node.children.push(child.node);
      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  commitMount: function commitMount(instance) {},
  shouldSetTextContent: function shouldSetTextContent(type) {
    return textTypes[type];
  },
  // -------------------
  //     Mutation
  // -------------------
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps) {
    return diffProperties(oldProps, newProps);
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type) {
    var props = getAllowedProps(updatePayload, type);

    if (instance.type === 'native') {
      instance.commands.push(['u', reconciler_assign({
        r: instance.refId,
        t: type
      }, convertPropsToSerializable(props))]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      if ('attributes' in instance.node) instance.node.attributes = reconciler_assign(reconciler_assign({}, instance.node.attributes), props);
      updateSubContext(instance);
    }
  },
  commitTextUpdate: function commitTextUpdate(instance, oldText, newText) {
    if (instance.type === 'native') {
      instance.commands.push(['x', {
        r: instance.refId,
        c: newText
      }]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node = {
        text: newText
      };
      updateSubContext(instance);
    }
  },
  appendChild: function appendChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;

    if (parent.type === 'native' && child.type === 'native') {
      child.commands.push(['a', {
        p: parent.refId,
        c: child.refId
      }]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) parent.node.children.push(child.node);
      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    if (child.type === 'native') child.commands.push(['a', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;

    if (parent.type === 'native' && child.type === 'native' && beforeChild.type === 'native') {
      child.commands.push(['i', {
        p: parent.refId,
        c: child.refId,
        i: beforeChild.refId
      }]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' && beforeChild.type === 'richtext' || parent.type === 'svg' && child.type === 'svg' && beforeChild.type === 'svg') {
      if ('children' in parent.node) {
        var index = parent.node.children.indexOf(beforeChild.node);
        if (index >= 0) parent.node.children.splice(index, 0, child.node);else parent.node.children.push(child.node);
      }

      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    if (child.type === 'native' && beforeChild.type === 'native') child.commands.push(['i', {
      p: parent.refId,
      c: child.refId,
      i: beforeChild.refId
    }]);
  },
  removeChild: function removeChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;

    if (parent.type === 'native' && child.type === 'native') {
      child.commands.push(['r', {
        p: parent.refId,
        c: child.refId
      }]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) {
        var index = parent.node.children.indexOf(child.node);
        if (index >= 0) parent.node.children.splice(index, 1);
      }

      updateSubContext(parent);
    }
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    if (child.type === 'native') child.commands.push(['r', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  hideInstance: function hideInstance(instance) {
    if (instance.type === 'native') instance.commands.push(['h', {
      r: instance.refId,
      h: true
    }]);else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = true;
      updateSubContext(instance);
    }
  },
  hideTextInstance: function hideTextInstance(instance) {
    if (instance.type === 'native') instance.commands.push(['h', {
      r: instance.refId,
      h: true
    }]);else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = true;
      updateSubContext(instance);
    }
  },
  unhideInstance: function unhideInstance(instance) {
    if (instance.type === 'native') instance.commands.push(['h', {
      r: instance.refId,
      h: false
    }]);else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = false;
      updateSubContext(instance);
    }
  },
  unhideTextInstance: function unhideTextInstance(instance) {
    if (instance.type === 'native') instance.commands.push(['h', {
      r: instance.refId,
      h: false
    }]);else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = false;
      updateSubContext(instance);
    }
  }
});

var asyncReconciler = react_reconciler(hostConfig);
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/sync/reconciler.js
var sync_reconciler_assign = undefined && undefined.__assign || function () {
  sync_reconciler_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return sync_reconciler_assign.apply(this, arguments);
};




var hostContext = {};
var childContext = {};

var reconciler_hostConfig = sync_reconciler_assign(sync_reconciler_assign({}, commonReconciler), {
  getRootHostContext: function getRootHostContext() {
    return hostContext;
  },
  getChildHostContext: function getChildHostContext() {
    return childContext;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsTestSelectors: false,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  clearContainer: function clearContainer(container) {
    return UnityBridge.clearContainer(container);
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  createInstance: function createInstance(type, props, rootContainerInstance) {
    var aProps = getAllowedProps(props, type);
    var children = aProps.children || null;
    delete aProps.children;
    return UnityBridge.createElement(props.tag || type, children, rootContainerInstance, aProps);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance) {
    return UnityBridge.createText(text, rootContainerInstance);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    UnityBridge.appendChild(parent, child);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  commitMount: function commitMount() {},
  shouldSetTextContent: function shouldSetTextContent(type) {
    return textTypes[type];
  },
  // -------------------
  //     Mutation
  // -------------------
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps) {
    return diffProperties(oldProps, newProps);
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type) {
    UnityBridge.applyUpdate(instance, getAllowedProps(updatePayload, type), type);
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    UnityBridge.setText(textInstance, newText);
  },
  appendChild: function appendChild(parent, child) {
    return UnityBridge.appendChild(parent, child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    return UnityBridge.appendChildToContainer(parent, child);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  removeChild: function removeChild(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  hideInstance: function hideInstance(instance) {
    instance.ClassList.Add(hideClass);
  },
  hideTextInstance: function hideTextInstance(instance) {
    instance.ClassList.Add(hideClass);
  },
  unhideInstance: function unhideInstance(instance) {
    instance.ClassList.Remove(hideClass);
  },
  unhideTextInstance: function unhideTextInstance(instance) {
    instance.ClassList.Remove(hideClass);
  }
});

var syncReconciler = react_reconciler(reconciler_hostConfig);
;// CONCATENATED MODULE: ../../../renderer/dist/src/renderer/renderer.js








var containerMap = new Map();
var Renderer = {
  render: function render(element, options) {
    if (options === void 0) {
      options = {};
    }

    var hostContainer = (options === null || options === void 0 ? void 0 : options.hostContainer) || HostContainer;
    var isAsync = !(options === null || options === void 0 ? void 0 : options.disableBatchRendering);

    var _a = containerMap.get(hostContainer) || {},
        hostRoot = _a.hostRoot,
        asyncJobCallback = _a.asyncJobCallback;

    var findFiberByHostInstance = function findFiberByHostInstance() {
      return null;
    };

    if (!hostRoot) {
      var mode = (options === null || options === void 0 ? void 0 : options.mode) === 'legacy' ? constants.LegacyRoot : constants.ConcurrentRoot;

      if (isAsync) {
        var fiberCache_1 = isDevelopment ? new ObjectsRepo() : null;

        if (isDevelopment) {
          findFiberByHostInstance = function findFiberByHostInstance(instance) {
            return !instance ? null : fiberCache_1.getObject(instance.refId);
          };
        }

        var scheduled_1 = false;
        var commands_1 = [];

        commands_1.push = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!scheduled_1) {
            scheduled_1 = true;
            Promise.resolve().then(function () {
              asyncJobCallback();
              scheduled_1 = false;
            });
          }

          return Array.prototype.push.apply(commands_1, args);
        };

        var hostContainerInstance = {
          type: 'native',
          commands: commands_1,
          component: hostContainer,
          context: hostContainer.Context,
          refId: hostContainer.RefId,
          fiberCache: fiberCache_1
        };

        asyncJobCallback = function asyncJobCallback() {
          if (!commands_1.length) return;
          var serialized = JSON.stringify(commands_1);
          commands_1.length = 0;
          hostContainer.Context.FlushCommands(serialized);
        };

        hostRoot = asyncReconciler.createContainer(hostContainerInstance, mode, null, false, undefined, '', function (error) {
          return console.error(error);
        }, null);
      } else {
        hostRoot = syncReconciler.createContainer(hostContainer, mode, null, false, undefined, '', function (error) {
          return console.error(error);
        }, null);
      }

      containerMap.set(hostContainer, {
        hostRoot: hostRoot,
        asyncJobCallback: asyncJobCallback
      });
    }

    var shouldWrapWithHelpers = !(options === null || options === void 0 ? void 0 : options.disableHelpers);

    if (shouldWrapWithHelpers) {
      var viewWrapperProps = {
        withHelpers: !(options === null || options === void 0 ? void 0 : options.disableHelpers)
      };
      element = (0,react.createElement)(DefaultView, viewWrapperProps, element);
    }

    var rc = isAsync ? asyncReconciler : syncReconciler;
    rc.updateContainer(element, hostRoot, null);
    rc.injectIntoDevTools({
      bundleType: isDevelopment ? 1 : 0,
      version: version,
      rendererPackageName: '@reactunity/renderer',
      rendererConfig: {
        isAsync: isAsync
      },
      findFiberByHostInstance: findFiberByHostInstance
    });
    return rc;
  }
};
var batchedUpdates = asyncReconciler.batchedUpdates;
var flushSync = asyncReconciler.flushSync;
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/context/selection.tsx
var Window=Globals.Window;var Inspector=Globals.Inspector;function getSelection(){if(Window){var activeObject=Interop.UnityEditor.Selection.activeGameObject;if(!activeObject)return null;return activeObject.GetComponent('ReactElement');}else if(Inspector){return Inspector.target;}return null;}var ctx=/*#__PURE__*/react.createContext(undefined);function SelectionProvider(_ref){var children=_ref.children;var _useState=(0,react.useState)(getSelection()),_useState2=_slicedToArray(_useState,2),selection=_useState2[0],setSelection=_useState2[1];var updateSelection=function updateSelection(){return setSelection(getSelection());};(0,react.useEffect)(function(){if(Window){var removeSelectionChange=Window.AddSelectionChange(updateSelection);var removeStateChange=Window.AddPlayModeStateChange(updateSelection);var removeVisibilityChange=Window.AddVisibilityChange(updateSelection);return function(){removeSelectionChange();removeStateChange();removeVisibilityChange();};}},[]);return/*#__PURE__*/react.createElement(ctx.Provider,{value:selection},children);};function useSelection(){var context=react.useContext(ctx);if(context===undefined){throw new Error('useSelection must be used within a provider');}return context;}
;// CONCATENATED MODULE: ./src/context/style.tsx
var styleContext=/*#__PURE__*/react.createContext(null);var useStyleContext=function useStyleContext(){return (0,react.useContext)(styleContext);};var findElementId=function findElementId(state,el){var ind=state.findIndex(function(x){return x.element===el;});if(ind<0){ind=state.length;var st={element:el,styles:{},ind:ind};state.push(st);el.SetData('devtools-el',ind+'');}return ind;};var buildSheet=function buildSheet(state){var sheet=new Interop.ReactUnity.Styling.StyleSheet(state.element.Context.Style,'',1,null,null);var style=state.styles;var selector="[devtools-el=".concat(state.ind,"]");var values=[];var valuesDic=Globals.Window.CreateStyleDictionary();for(var _prop in style){if(Object.prototype.hasOwnProperty.call(style,_prop)){var val=style[_prop];values.push("".concat(_prop,": ").concat(val,";\n"));valuesDic.Add(_prop,val);}}if(values.length)sheet.AddRules(selector,valuesDic);state.sheet=sheet;return sheet;};var changed=function changed(state){var ctx=state.element.Context;if(state.sheet){ctx.RemoveStyle(state.sheet);state.sheet=null;}var newSheet=buildSheet(state);state.sheet=ctx.InsertStyle(newSheet);};function StyleContext(_ref){var children=_ref.children;var state=(0,react.useRef)([]);var ctx=(0,react.useMemo)(function(){return{setProp:function setProp(el,prop,value){var ind=findElementId(state.current,el);state.current[ind].styles[prop]=value;changed(state.current[ind]);},removeProp:function removeProp(el,prop){var ind=findElementId(state.current,el);Reflect.deleteProperty(state.current[ind].styles,prop);changed(state.current[ind]);},hasProp:function hasProp(el,prop){var ind=findElementId(state.current,el);return Object.prototype.hasOwnProperty.call(state.current[ind].styles,prop);},getProp:function getProp(el,prop){var ind=findElementId(state.current,el);return state.current[ind].styles[prop];},getStyles:function getStyles(el){var ind=findElementId(state.current,el);return state.current[ind].styles;},getElementId:function getElementId(el){return findElementId(state.current,el);}};},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)(styleContext.Provider,{value:ctx,children:children});}
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/classes/index.module.scss
var index_module = __webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/classes/index.module.scss");
;// CONCATENATED MODULE: ./src/main/classes/index.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_module/* default */.Z, options);




       /* harmony default export */ const classes_index_module = (index_module/* default */.Z && index_module/* default.locals */.Z.locals ? index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main/classes/index.tsx
var savedClasses={};function Classes(){var _useSelection;var selection=(_useSelection=useSelection())===null||_useSelection===void 0?void 0:_useSelection.Component;var ctx=useStyleContext();var _useState=(0,react.useState)(0),_useState2=_slicedToArray(_useState,2),render=_useState2[0],setRender=_useState2[1];var submit=(0,react.useCallback)(function(ev,sender){if(ev.keyCode===Interop.UnityEngine.KeyCode.Return||ev.keyCode===Interop.UnityEngine.KeyCode.KeypadEnter){selection.ClassList.Add(sender.Value);sender.SetValueWithoutNotify('');setRender(function(x){return x+1;});}},[selection]);var toggled=(0,react.useCallback)(function(ev,sender){selection.ClassList.Toggle(sender.Data['id'],sender.Value);setRender(function(x){return x+1;});},[selection]);var classes=(0,react.useMemo)(function(){if(!selection)return null;void render;var dataId=ctx.getElementId(selection);var saved=new Set(savedClasses[dataId]||[]);var list=selection.ClassList.Name.split(' ');var len=list.length;for(var index=0;index<len;index++){var element=list[index];saved.add(element);}return savedClasses[dataId]=Array.from(saved).filter(function(x){return x;});},[selection,ctx,render]);if(!selection)return;return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:classes_index_module.host,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{label:"Add class",onKeyDown:submit}),/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:classes_index_module.classes,children:classes.map(function(x){return/*#__PURE__*/(0,jsx_runtime.jsx)("toggle",{label:x,"data-id":x,onChange:toggled,value:selection.ClassList.Contains(x)},x);})})]});}
// EXTERNAL MODULE: ../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/global-style/index.module.scss
var global_style_index_module = __webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/global-style/index.module.scss");
;// CONCATENATED MODULE: ./src/main/global-style/index.module.scss

      
      
      
      
      
      
      
      
      

var index_module_options = {};

index_module_options.styleTagTransform = (styleTagTransform_default());
index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      index_module_options.insert = insertBySelector_default().bind(null, "head");
    
index_module_options.domAPI = (styleDomAPI_default());
index_module_options.insertStyleElement = (insertStyleElement_default());

var index_module_update = injectStylesIntoStyleTag_default()(global_style_index_module/* default */.Z, index_module_options);




       /* harmony default export */ const main_global_style_index_module = (global_style_index_module/* default */.Z && global_style_index_module/* default.locals */.Z.locals ? global_style_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main/global-style/index.tsx
var stylesheets={};function GlobalStyle(){var _useState=(0,react.useState)(false),_useState2=_slicedToArray(_useState,2),show=_useState2[0],setShow=_useState2[1];var _useState3=(0,react.useState)(''),_useState4=_slicedToArray(_useState3,2),savedInput=_useState4[0],setSavedInput=_useState4[1];var selection=useSelection();(0,react.useEffect)(function(){if(!selection)return;var sheet=stylesheets[savedInput];if(sheet){selection.Component.Context.InsertStyle(sheet);}else{sheet=stylesheets[savedInput]=selection.Component.Context.InsertStyle(savedInput);}return function(){if(sheet)selection.Component.Context.RemoveStyle(sheet);};},[savedInput,selection]);var inputRef=(0,react.useRef)();var save=function save(){setSavedInput(inputRef.current.Value);};var cancel=function cancel(){inputRef.current.Value=savedInput;setShow(false);};var keyup=function keyup(ev){if(ev.ctrlKey&&(ev.keyCode===Interop.UnityEngine.KeyCode.Return||ev.keyCode===Interop.UnityEngine.KeyCode.KeypadEnter)){ev.PreventDefault();ev.StopImmediatePropagation();ev.StopPropagation();save(null);}else if(ev.keyCode===Interop.UnityEngine.KeyCode.Escape){ev.PreventDefault();ev.StopImmediatePropagation();ev.StopPropagation();cancel(null);}};var closeCallback=(0,react.useCallback)(function(){return setShow(false);},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:main_global_style_index_module.host,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onButtonClick:function onButtonClick(){return setShow(function(x){return!x;});},children:"Edit Global Styles"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("dialog",{show:show,onClose:closeCallback,title:"Global Styles",className:main_global_style_index_module.dialog,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("scroll",{className:main_global_style_index_module.scroll,children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:main_global_style_index_module.input,value:savedInput,ref:inputRef,multiline:true,onKeyUp:keyup})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:main_global_style_index_module.actions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onButtonClick:cancel,children:"Cancel (Esc)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onButtonClick:save,children:"Save (Ctrl + Enter)"})]})]})]});}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
;// CONCATENATED MODULE: ../../../node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

/* harmony default export */ function clsx_m() {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./src/components/other.tsx
function sliderComponent(){var min=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var max=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("slider",_objectSpread2(_objectSpread2({},props),{},{min:min,max:max,showInput:true}));};}function sliderintComponent(){var min=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var max=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1000;return function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("sliderint",_objectSpread2(_objectSpread2({},props),{},{min:min,max:max,showInput:true}));};}function enumComponent(typeName){return function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("enum",_objectSpread2(_objectSpread2({},props),{},{type:typeName}));};}function flagsComponent(typeName){return function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("flags",_objectSpread2(_objectSpread2({},props),{},{type:typeName}));};}function objectComponent(typeName){return function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("object",_objectSpread2(_objectSpread2({},props),{},{type:typeName}));};}
;// CONCATENATED MODULE: ./src/common/helpers.ts
var StyleLength=Interop.UnityEngine.UIElements.StyleLength;var StyleKeyword=Interop.UnityEngine.UIElements.StyleKeyword;var Length=Interop.UnityEngine.UIElements.Length;var LengthUnit=Interop.UnityEngine.UIElements.LengthUnit;var YogaUnit=Interop.Facebook.Yoga.YogaUnit;/* eslint-disable eqeqeq */function convertLengthToYoga(value){if(!value||value.keyword==StyleKeyword.Auto)return Interop.Facebook.Yoga.YogaValue.Auto();if(value.keyword==StyleKeyword.Null||value.keyword==StyleKeyword.None||value.keyword==StyleKeyword.Initial)return Interop.Facebook.Yoga.YogaValue.Undefined();if(value.value.unit==LengthUnit.Percent)return Interop.Facebook.Yoga.YogaValue.Percent(value.value.value);if(value.value.unit==LengthUnit.Pixel)return Interop.Facebook.Yoga.YogaValue.Point(value.value.value);return Interop.Facebook.Yoga.YogaValue.Undefined();}function convertYogaToLength(value){var len=new StyleLength(0);len.keyword=StyleKeyword.Initial;if(!value||value.Unit==YogaUnit.Auto)len.keyword=StyleKeyword.Auto;else if(value.Unit==YogaUnit.Undefined)len.keyword=StyleKeyword.None;else if(isNaN(value.Value))len.keyword=StyleKeyword.Null;else if(value.Unit==YogaUnit.Percent)len.value=new Length(value.Value,LengthUnit.Percent);else if(value.Unit==YogaUnit.Point)len.value=new Length(value.Value,LengthUnit.Pixel);return len;}function convertLengthToFloat(value){if(!value||value.keyword==StyleKeyword.Auto)return 0;if(value.keyword==StyleKeyword.Null||value.keyword==StyleKeyword.None||value.keyword==StyleKeyword.Initial)return 0;if(value.value.unit==LengthUnit.Percent)return value.value.value/100;if(value.value.unit==LengthUnit.Pixel)return value.value.value;return 0;}function convertFloatToLength(value){var len=new StyleLength(0);len.keyword=StyleKeyword.Initial;if(!value){return len;}else if(value<1){len.value=new Length(Math.fround(+value*100),LengthUnit.Percent);}else{len.value=new Length(Math.fround(+value),LengthUnit.Pixel);}return len;}/* eslint-enable eqeqeq */function floatDefaultGetter(value){return value||0;}
;// CONCATENATED MODULE: ./src/components/yogavalue2.tsx
var YogaValue2=Interop.ReactUnity.Types.YogaValue2;function YogaValue2Field(_ref){var className=_ref.className,label=_ref.label,onChange=_ref.onChange,value=_ref.value;var x=convertYogaToLength(value===null||value===void 0?void 0:value.X);var y=convertYogaToLength(value===null||value===void 0?void 0:value.Y);var xRef=(0,react.useRef)();var yRef=(0,react.useRef)();var changed=function changed(){var xVal=xRef.current.Element.value;var yVal=yRef.current.Element.value;var val=new YogaValue2(convertLengthToYoga(xVal),convertLengthToYoga(yVal));onChange===null||onChange===void 0?void 0:onChange({newValue:val});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(className,'unity-composite-field','unity-base-field'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("text",{className:clsx_m('unity-base-field__label','unity-composite-field__label'),children:label}),/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m('unity-base-field__input','unity-composite-field__input'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("length",{label:"X",value:x,onChange:changed,ref:xRef,style:{minWidth:60},className:clsx_m('react-unity_field_no-grow','react-unity__field__inline','unity-composite-field__field','unity-composite-field__field--first')}),/*#__PURE__*/(0,jsx_runtime.jsx)("length",{label:"Y",value:y,onChange:changed,ref:yRef,style:{minWidth:60},className:clsx_m('react-unity_field_no-grow','react-unity__field__inline','unity-composite-field__field')}),/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:"unity-composite-field__field-spacer"})]})]});}
;// CONCATENATED MODULE: ./src/common/props.ts
var _excluded=["arrangement","partTemplate"];var fourDirectionParts=['','top','right','bottom','left'];var CornerHack={'left':'TopLeft','top':'TopRight','right':'BottomRight','bottom':'BottomLeft','':''};var CornerLabels={'left':'TL','top':'TR','right':'BR','bottom':'BL','':''};var PartCapitalize={'left':'Left','right':'Right','top':'Top','bottom':'Bottom','start':'Start','end':'End','':''};var lengthField={component:'length',getter:convertYogaToLength,setter:convertLengthToYoga};var borderRadiusField={component:YogaValue2Field};var styleProps=[{props:[{name:'Display',component:enumComponent('Facebook.Yoga.YogaDisplay'),label:'Display',source:'layout'},{name:'position',component:enumComponent('ReactUnity.Types.PositionType'),label:'Position Type'},{name:'backgroundColor',component:'color',label:'Background Color'},{name:'backgroundImage',component:objectComponent('UnityEngine.Texture2D'),label:'Background Image'},{name:'opacity',component:sliderComponent(),label:'Opacity'},{name:'zIndex',component:sliderintComponent(),label:'Z-Index'},{name:'visibility',component:'toggle',label:'Visibility'}]},{label:'Text',props:[{name:'StyleDirection',component:enumComponent('Facebook.Yoga.YogaDirection'),label:'Direction',source:'layout'},{name:'fontFamily',component:objectComponent('TMPro.TMP_FontAsset'),label:'Font Family'},{name:'color',component:'color',label:'Color'},{name:'fontWeight',component:enumComponent('TMPro.FontWeight'),label:'Font Weight'},{name:'fontStyle',component:flagsComponent('TMPro.FontStyles'),label:'Font Style'},_objectSpread2({name:'fontSize',label:'Font Size'},lengthField),{name:'textAlign',component:enumComponent('TMPro.TextAlignmentOptions'),label:'Text Align'},{name:'textOverflow',component:enumComponent('TMPro.TextOverflowModes'),label:'Text Overflow'},{name:'textWrap',component:'toggle',label:'Text Wrap'},{name:'content',component:'input',label:'Content'}]},{props:[{name:'transformOrigin',component:YogaValue2Field,label:'Transform Origin'},{name:'translate',component:YogaValue2Field,label:'Translate'},{name:'scale',component:'vector3',label:'Scale'},{name:'rotate',component:'vector3',label:'Rotate'}]},{props:[{name:'pointerEvents',component:enumComponent('ReactUnity.Types.PointerEvents'),label:'Pointer Events'},{name:'appearance',component:enumComponent('ReactUnity.Types.Appearance'),label:'Appearance'},{name:'navigation',component:flagsComponent('UnityEngine.UI.Navigation+Mode'),label:'Navigation'}]},{props:[_objectSpread2(_objectSpread2({name:'Width'},lengthField),{},{label:'Width',source:'layout'}),_objectSpread2(_objectSpread2({name:'Height'},lengthField),{},{label:'Height',source:'layout'}),_objectSpread2(_objectSpread2({name:'MinWidth'},lengthField),{},{label:'Min Width',source:'layout'}),_objectSpread2(_objectSpread2({name:'MinHeight'},lengthField),{},{label:'Min Height',source:'layout'}),_objectSpread2(_objectSpread2({name:'MaxWidth'},lengthField),{},{label:'Max Width',source:'layout'}),_objectSpread2(_objectSpread2({name:'MaxHeight'},lengthField),{},{label:'Max Height',source:'layout'})]},{props:[{name:'FlexDirection',component:enumComponent('Facebook.Yoga.YogaFlexDirection'),label:'Flex Direction',source:'layout'},{name:'Overflow',component:enumComponent('Facebook.Yoga.YogaOverflow'),label:'Overflow',source:'layout'},{name:'Wrap',component:enumComponent('Facebook.Yoga.YogaWrap'),label:'Wrap',source:'layout'}]},{props:[{name:'JustifyContent',component:enumComponent('Facebook.Yoga.YogaJustify'),label:'Justify Content',source:'layout'},{name:'AlignItems',component:enumComponent('Facebook.Yoga.YogaAlign'),label:'Align Items',source:'layout'},{name:'AlignContent',component:enumComponent('Facebook.Yoga.YogaAlign'),label:'Align Content',source:'layout'},{name:'AlignSelf',component:enumComponent('Facebook.Yoga.YogaAlign'),label:'Align Self',source:'layout'}]},{props:[{name:'AspectRatio',component:'float',label:'Aspect Ratio',source:'layout'},{name:'FlexGrow',component:'float',label:'Flex Grow',source:'layout'},{name:'FlexShrink',component:'float',label:'Flex Shrink',source:'layout'},_objectSpread2(_objectSpread2({name:'FlexBasis'},lengthField),{},{label:'Flex Basis',source:'layout'})]},{props:[_objectSpread2(_objectSpread2({name:'borderRadius'},borderRadiusField),{},{label:'Border Radius',arrangement:'corner',partTemplate:function partTemplate(part){return"border".concat(CornerHack[part],"Radius");}}),{name:'borderColor',component:'color',arrangement:'rect',partTemplate:function partTemplate(part){return"border".concat(PartCapitalize[part],"Color");},label:'Border Color'},{name:'BorderWidth',component:'float',arrangement:'rect',getter:floatDefaultGetter,partTemplate:function partTemplate(part){return"Border".concat(PartCapitalize[part],"Width");},label:'Border Width',source:'layout'}]},{props:[_objectSpread2(_objectSpread2({name:'Margin'},lengthField),{},{arrangement:'rect',partTemplate:function partTemplate(part){return"Margin".concat(PartCapitalize[part]);},label:'Margin',source:'layout'}),_objectSpread2(_objectSpread2({name:'Padding'},lengthField),{},{arrangement:'rect',partTemplate:function partTemplate(part){return"Padding".concat(PartCapitalize[part]);},label:'Padding',source:'layout'}),_objectSpread2(_objectSpread2({name:'Position'},lengthField),{},{arrangement:'rect',partTemplate:function partTemplate(part){return PartCapitalize[part];},label:'Position',source:'layout'})]}];var allProps=[];for(var pIndex=0;pIndex<styleProps.length;pIndex++){var group=styleProps[pIndex];for(var index=0;index<group.props.length;index++){var prop=group.props[index];if(prop.arrangement){for(var partIndex=0;partIndex<fourDirectionParts.length;partIndex++){var _part=fourDirectionParts[partIndex];var partName=typeof prop.partTemplate==='string'?prop.partTemplate.replace('{part}',_part):prop.partTemplate(_part);var arrangement=prop.arrangement,partTemplate=prop.partTemplate,rest=_objectWithoutProperties(prop,_excluded);allProps.push(_objectSpread2(_objectSpread2({},rest),{},{name:partName,partlessName:prop.name,label:partName}));}}else{allProps.push(prop);}}}
// EXTERNAL MODULE: ../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/grouped-styles/index.module.scss
var grouped_styles_index_module = __webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/grouped-styles/index.module.scss");
;// CONCATENATED MODULE: ./src/main/grouped-styles/index.module.scss

      
      
      
      
      
      
      
      
      

var grouped_styles_index_module_options = {};

grouped_styles_index_module_options.styleTagTransform = (styleTagTransform_default());
grouped_styles_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      grouped_styles_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
grouped_styles_index_module_options.domAPI = (styleDomAPI_default());
grouped_styles_index_module_options.insertStyleElement = (insertStyleElement_default());

var grouped_styles_index_module_update = injectStylesIntoStyleTag_default()(grouped_styles_index_module/* default */.Z, grouped_styles_index_module_options);




       /* harmony default export */ const main_grouped_styles_index_module = (grouped_styles_index_module/* default */.Z && grouped_styles_index_module/* default.locals */.Z.locals ? grouped_styles_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main/grouped-styles/index.tsx
function GroupedStyles(_ref){var showShowAll=_ref.showShowAll;var _useState=(0,react.useState)(true),_useState2=_slicedToArray(_useState,2),showAll=_useState2[0],setShowAll=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("scroll",{className:main_grouped_styles_index_module.styles,children:[!!showShowAll&&/*#__PURE__*/(0,jsx_runtime.jsx)("toggle",{label:"Show All",value:showAll,onChange:function onChange(ev){return setShowAll(ev.newValue);},className:main_grouped_styles_index_module.showAllButton}),showAll?styleProps.map(function(x,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(Group,{group:x},i);}):allProps.map(function(x,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRow,{prop:x,optional:true},i);})]});}function Group(_ref2){var group=_ref2.group,className=_ref2.className;return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(main_grouped_styles_index_module.group,className),children:[!!group.label&&/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:main_grouped_styles_index_module.groupHeader,children:group.label}),group.props.map(function(x){return/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropView,{prop:x},x.name);})]});}function StylePropView(_ref3){var prop=_ref3.prop;return prop.arrangement==='rect'||prop.arrangement==='corner'?/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRect,{prop:prop},prop.name):/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRow,{prop:prop},prop.name);}function StylePropRow(_ref4){var _prop$label;var prop=_ref4.prop,className=_ref4.className,optional=_ref4.optional;var element=useSelection();var cmp=element.Component;var ctx=useStyleContext();var styles=ctx.getStyles(cmp);var changedDebounce=react.useRef();var changed=function changed(debounce){if(changedDebounce.current!=null){clearTimeout(changedDebounce.current);changedDebounce.current=null;}changedDebounce.current=setTimeout(function(){changedDebounce.current=null;cmp.ResolveStyle(true);if(prop.source==='layout'){cmp.ApplyLayoutStyles();}setRender(function(x){return x+1;});},debounce);};var changeStyle=function changeStyle(name,value){if(prop.setter){var res=prop.setter(value.newValue,element);if(res!==undefined)ctx.setProp(cmp,name,res);}else ctx.setProp(cmp,name,value.newValue);changed(500);};var _useState3=(0,react.useState)(0),_useState4=_slicedToArray(_useState3,2),setRender=_useState4[1];if(!prop.component)return null;var val=prop.source==='layout'?element.Layout[prop.name]:cmp.ComputedStyle[prop.name];var gval=(prop.getter?prop.getter(val,element):val)||null;var exists=(prop.name in styles);var removeStyle=function removeStyle(){ctx.removeProp(cmp,prop.name);changed(0);};return optional&&!exists?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}):/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(className,main_grouped_styles_index_module.row,exists&&main_grouped_styles_index_module.exists),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onButtonClick:removeStyle,className:main_grouped_styles_index_module.removeButton,children:"X"}),/*#__PURE__*/(0,jsx_runtime.jsx)(prop.component,{className:main_grouped_styles_index_module.rowContent,value:gval,label:(_prop$label=prop.label)!==null&&_prop$label!==void 0?_prop$label:prop.name,onChange:function onChange(val){return changeStyle(prop.name,val);}})]});}function StylePropRect(_ref5){var _prop$label2;var prop=_ref5.prop;var partName=typeof prop.partTemplate==='string'?prop.partTemplate.replace('{part}',''):prop.partTemplate('');var isCorner=prop.arrangement==='corner';return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(main_grouped_styles_index_module.propRectContainer),children:[partName?/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRow,{prop:prop,className:clsx_m(main_grouped_styles_index_module.rectHead,'react-unity__field__inline','react-unity__field__no-grow')}):/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{style:{flexDirection:'row'},className:main_grouped_styles_index_module.rectHead,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:main_grouped_styles_index_module.removeButton,style:{visibility:'hidden'},children:"X"}),(_prop$label2=prop.label)!==null&&_prop$label2!==void 0?_prop$label2:prop.name]}),!isCorner?/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(main_grouped_styles_index_module.propRect),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:main_grouped_styles_index_module.propRectRow,children:/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'top'})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:main_grouped_styles_index_module.propRectRow,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'left'}),/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'right'})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:main_grouped_styles_index_module.propRectRow,children:/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'bottom'})})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:clsx_m(main_grouped_styles_index_module.propRect,main_grouped_styles_index_module.corner),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:main_grouped_styles_index_module.propRectRow,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'left'}),/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'top'})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:main_grouped_styles_index_module.propRectRow,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'bottom'}),/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRectPart,{prop:prop,part:'right'})]})]})]});}function StylePropRectPart(_ref6){var prop=_ref6.prop,part=_ref6.part;var partName=!part?prop.name:typeof prop.partTemplate==='string'?prop.partTemplate.replace('{part}',part):prop.partTemplate(part);var isCorner=prop.arrangement==='corner';var label=part?isCorner?CornerLabels[part]:part[0].toUpperCase():prop.label;var partProp=_objectSpread2(_objectSpread2({},prop),{},{partlessName:prop.name,name:partName,label:label});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(StylePropRow,{prop:partProp,className:clsx_m(main_grouped_styles_index_module.rectPart,main_grouped_styles_index_module['part-'+part],'react-unity__field__inline',isCorner&&main_grouped_styles_index_module.corner)})});}
// EXTERNAL MODULE: ../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/index.module.scss
var main_index_module = __webpack_require__("../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[3]!./src/main/index.module.scss");
;// CONCATENATED MODULE: ./src/main/index.module.scss

      
      
      
      
      
      
      
      
      

var main_index_module_options = {};

main_index_module_options.styleTagTransform = (styleTagTransform_default());
main_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      main_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
main_index_module_options.domAPI = (styleDomAPI_default());
main_index_module_options.insertStyleElement = (insertStyleElement_default());

var main_index_module_update = injectStylesIntoStyleTag_default()(main_index_module/* default */.Z, main_index_module_options);




       /* harmony default export */ const src_main_index_module = (main_index_module/* default */.Z && main_index_module/* default.locals */.Z.locals ? main_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main/index.tsx
function App(){var selection=useSelection();return/*#__PURE__*/(0,jsx_runtime.jsx)("view",{className:src_main_index_module.host,children:selection?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Classes,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(GroupedStyles,{})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(NotSelectedView,{})});}function NotSelectedView(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:"url(resource:ReactUnity/editor/logo)",className:src_main_index_module.logo}),/*#__PURE__*/(0,jsx_runtime.jsx)("view",{children:"Select an element in the scene to edit its styles"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Only works for UGUI, for UI Document use builtin UI Toolkit Editor"})]});}Renderer.render(/*#__PURE__*/(0,jsx_runtime.jsx)(StyleContext,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SelectionProvider,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(App,{})})}));
;// CONCATENATED MODULE: ./src/index.ts

})();

/******/ })()
;