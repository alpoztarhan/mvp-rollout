/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(
            ((e = "undefined" != typeof globalThis ? globalThis : e || self).tf =
              e.tf || {}),
          );
  })(this, function (e) {
    "use strict";
    function t(e, t) {
      return (
        t.forEach(function (t) {
          t &&
            "string" != typeof t &&
            !Array.isArray(t) &&
            Object.keys(t).forEach(function (n) {
              if ("default" !== n && !(n in e)) {
                var r = Object.getOwnPropertyDescriptor(t, n);
                Object.defineProperty(
                  e,
                  n,
                  r.get
                    ? r
                    : {
                        enumerable: !0,
                        get: function () {
                          return t[n];
                        },
                      },
                );
              }
            });
        }),
        e
      );
    }
    var n = function (e, t) {
      return (
        (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        n(e, t)
      );
    };
    function r(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Class extends value " + String(t) + " is not a constructor or null",
        );
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype =
          null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
    }
    function a(e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function i(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(i, s);
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function o(e, t) {
      var n,
        r,
        a,
        o,
        i = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (a =
                      2 & o[0]
                        ? r.return
                        : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                    !(a = a.call(r, o[1])).done)
                )
                  return a;
                switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                  case 0:
                  case 1:
                    a = o;
                    break;
                  case 4:
                    return i.label++, { value: o[1], done: !1 };
                  case 5:
                    i.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !((a = i.trys),
                      (a = a.length > 0 && a[a.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0]))
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                      i.label = o[1];
                      break;
                    }
                    if (6 === o[0] && i.label < a[1]) {
                      (i.label = a[1]), (a = o);
                      break;
                    }
                    if (a && i.label < a[2]) {
                      (i.label = a[2]), i.ops.push(o);
                      break;
                    }
                    a[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                o = t.call(e, i);
              } catch (e) {
                (o = [6, e]), (r = 0);
              } finally {
                n = a = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, s]);
        };
      }
    }
    function i(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    }
    function s(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        a,
        o = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
          i.push(r.value);
      } catch (e) {
        a = { error: e };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (a) throw a.error;
        }
      }
      return i;
    }
    function u(e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, a = 0, o = t.length; a < o; a++)
          (!r && a in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
      return e.concat(r || Array.prototype.slice.call(t));
    }
    var c = (function () {
        function e(e, t) {
          (this.backend = e),
            (this.dataMover = t),
            (this.data = new WeakMap()),
            (this.dataIdsCount = 0);
        }
        return (
          (e.prototype.get = function (e) {
            return (
              this.data.has(e) || this.dataMover.moveData(this.backend, e),
              this.data.get(e)
            );
          }),
          (e.prototype.set = function (e, t) {
            this.dataIdsCount++, this.data.set(e, t);
          }),
          (e.prototype.has = function (e) {
            return this.data.has(e);
          }),
          (e.prototype.delete = function (e) {
            return this.dataIdsCount--, this.data.delete(e);
          }),
          (e.prototype.numDataIds = function () {
            return this.dataIdsCount;
          }),
          e
        );
      })(),
      l = (function () {
        function e() {}
        return (
          (e.prototype.refCount = function (e) {
            return h("refCount");
          }),
          (e.prototype.incRef = function (e) {
            return h("incRef");
          }),
          (e.prototype.timerAvailable = function () {
            return !0;
          }),
          (e.prototype.time = function (e) {
            return h("time");
          }),
          (e.prototype.read = function (e) {
            return h("read");
          }),
          (e.prototype.readSync = function (e) {
            return h("readSync");
          }),
          (e.prototype.readToGPU = function (e, t) {
            return h("readToGPU");
          }),
          (e.prototype.numDataIds = function () {
            return h("numDataIds");
          }),
          (e.prototype.disposeData = function (e, t) {
            return h("disposeData");
          }),
          (e.prototype.write = function (e, t, n) {
            return h("write");
          }),
          (e.prototype.move = function (e, t, n, r, a) {
            return h("move");
          }),
          (e.prototype.createTensorFromGPUData = function (e, t, n) {
            return h("createTensorFromGPUData");
          }),
          (e.prototype.memory = function () {
            return h("memory");
          }),
          (e.prototype.floatPrecision = function () {
            return h("floatPrecision");
          }),
          (e.prototype.epsilon = function () {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
          }),
          (e.prototype.dispose = function () {
            return h("dispose");
          }),
          e
        );
      })();
    function h(e) {
      throw new Error(
        "'".concat(e, "' not yet implemented or not found in the registry. ") +
          "This kernel may not be supported by the tfjs backend you have chosen",
      );
    }
    function f(e) {
      for (var t = e.length, n = 0; t > 0; )
        (n = (Math.random() * t) | 0), p(e, --t, n);
    }
    function d(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }
    function p(e, t, n) {
      var r = e[t];
      (e[t] = e[n]), (e[n] = r);
    }
    function g(e, t) {
      if (!e) throw new Error("string" == typeof t ? t : t());
    }
    function v(e, t, n) {
      void 0 === n && (n = ""),
        g(w(e, t), function () {
          return n + " Shapes ".concat(e, " and ").concat(t, " must match");
        });
    }
    function m(e) {
      g(null != e, function () {
        return "The input to the tensor constructor must be a non-null value.";
      });
    }
    function y(e) {
      if (0 === e.length) return 1;
      for (var t = e[0], n = 1; n < e.length; n++) t *= e[n];
      return t;
    }
    function b(e, t) {
      if (e === t) return !0;
      if (null == e || null == t) return !1;
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++)
        if (null !== e[n] && null !== t[n] && e[n] !== t[n]) return !1;
      return !0;
    }
    function w(e, t) {
      if (e === t) return !0;
      if (null == e || null == t) return !1;
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    function k(e) {
      return e % 1 == 0;
    }
    function x(e, t) {
      return t <= e.length ? e : e + " ".repeat(t - e.length);
    }
    function E(e, t) {
      var n = t.length;
      return (
        g(
          (e =
            null == e
              ? t.map(function (e, t) {
                  return t;
                })
              : [].concat(e)).every(function (e) {
            return e >= -n && e < n;
          }),
          function () {
            return (
              "All values in axis param must be in range [-"
                .concat(n, ", ")
                .concat(n, ") but ") + "got axis ".concat(e)
            );
          },
        ),
        g(
          e.every(function (e) {
            return k(e);
          }),
          function () {
            return (
              "All values in axis param must be integers but " +
              "got axis ".concat(e)
            );
          },
        ),
        e.map(function (e) {
          return e < 0 ? n + e : e;
        })
      );
    }
    function S(e, t) {
      for (
        var n = [],
          r = [],
          a = null != t && Array.isArray(t) && 0 === t.length,
          o = null == t || a ? null : E(t, e).sort(),
          i = 0,
          s = 0;
        s < e.length;
        ++s
      ) {
        if (null != o) {
          if (o[i] === s && 1 !== e[s])
            throw new Error(
              "Can't squeeze axis "
                .concat(s, " since its dim '")
                .concat(e[s], "' is not 1"),
            );
          (null == o[i] || o[i] > s) && 1 === e[s] && (n.push(e[s]), r.push(s)),
            o[i] <= s && i++;
        }
        1 !== e[s] && (n.push(e[s]), r.push(s));
      }
      return { newShape: n, keptDims: r };
    }
    function A(e, t) {
      return _(e, t);
    }
    function _(e, t) {
      var n = null;
      if (null == e || "float32" === e) n = new Float32Array(t);
      else if ("int32" === e) n = new Int32Array(t);
      else if ("bool" === e) n = new Uint8Array(t);
      else {
        if ("string" !== e) throw new Error("Unknown data type ".concat(e));
        n = new Array(t);
      }
      return n;
    }
    function I(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (isNaN(r) || !isFinite(r))
          throw Error(
            "A tensor of type "
              .concat(t, " being uploaded contains ")
              .concat(r, "."),
          );
      }
    }
    function N(e) {
      return (
        "bool" === e ||
        "complex64" === e ||
        "float32" === e ||
        "int32" === e ||
        "string" === e
      );
    }
    function M(e) {
      if ("float32" === e || "int32" === e) return 4;
      if ("complex64" === e) return 8;
      if ("bool" === e) return 1;
      throw new Error("Unknown dtype ".concat(e));
    }
    function T(e) {
      if (null == e) return 0;
      var t = 0;
      return (
        e.forEach(function (e) {
          return (t += e.length);
        }),
        t
      );
    }
    function D(e) {
      return "string" == typeof e || e instanceof String;
    }
    function R(e) {
      return "boolean" == typeof e;
    }
    function B(e) {
      return "number" == typeof e;
    }
    function F(e) {
      return Array.isArray(e)
        ? F(e[0])
        : e instanceof Float32Array
          ? "float32"
          : e instanceof Int32Array ||
              e instanceof Uint8Array ||
              e instanceof Uint8ClampedArray
            ? "int32"
            : B(e)
              ? "float32"
              : D(e)
                ? "string"
                : R(e)
                  ? "bool"
                  : "float32";
    }
    function C(e) {
      return !!(e && e.constructor && e.call && e.apply);
    }
    function P(e, t) {
      for (var n = t; n < e; ++n) if (e % n == 0) return n;
      return e;
    }
    function O(e) {
      var t = e.length;
      if (t < 2) return [];
      var n = new Array(t - 1);
      n[t - 2] = e[t - 1];
      for (var r = t - 3; r >= 0; --r) n[r] = n[r + 1] * e[r + 1];
      return n;
    }
    function L(e, t, n, r) {
      void 0 === r && (r = !1);
      var a = new Array();
      if (1 === t.length)
        for (var o = t[0] * (r ? 2 : 1), i = 0; i < o; i++) a[i] = n[e + i];
      else {
        o = t[0];
        var s = t.slice(1),
          u =
            s.reduce(function (e, t) {
              return e * t;
            }) * (r ? 2 : 1);
        for (i = 0; i < o; i++) a[i] = L(e + i * u, s, n, r);
      }
      return a;
    }
    function z(e, t, n) {
      if ((void 0 === n && (n = !1), 0 === e.length)) return t[0];
      var r =
        e.reduce(function (e, t) {
          return e * t;
        }) * (n ? 2 : 1);
      if (0 === r) return [];
      if (r !== t.length)
        throw new Error(
          "["
            .concat(e, "] does not match the input size ")
            .concat(t.length)
            .concat(n ? " for a complex tensor" : "", "."),
        );
      return L(0, e, t, n);
    }
    function U(e, t) {
      for (var n = W(e, t), r = 0; r < n.length; r++) n[r] = 1;
      return n;
    }
    function W(e, t) {
      if (null == t || "float32" === t || "complex64" === t)
        return new Float32Array(e);
      if ("int32" === t) return new Int32Array(e);
      if ("bool" === t) return new Uint8Array(e);
      throw new Error("Unknown data type ".concat(t));
    }
    function G(e) {
      e.forEach(function (t) {
        g(Number.isInteger(t) && t >= 0, function () {
          return (
            "Tensor must have a shape comprised of positive integers but got " +
            "shape [".concat(e, "].")
          );
        });
      });
    }
    function q(e) {
      return e && e.then && "function" == typeof e.then;
    }
    var K,
      V = "tfjsflags",
      H = (function () {
        function e(e) {
          (this.global = e),
            (this.flags = {}),
            (this.flagRegistry = {}),
            (this.urlFlags = {}),
            (this.getQueryParams = j),
            this.populateURLFlags();
        }
        return (
          (e.prototype.setPlatform = function (e, t) {
            null != this.platform &&
              (Z().getBool("IS_TEST") ||
                Z().getBool("PROD") ||
                console.warn(
                  "Platform ".concat(
                    this.platformName,
                    " has already been set. ",
                  ) + "Overwriting the platform with ".concat(e, "."),
                )),
              (this.platformName = e),
              (this.platform = t);
          }),
          (e.prototype.registerFlag = function (e, t, n) {
            if (
              ((this.flagRegistry[e] = { evaluationFn: t, setHook: n }),
              null != this.urlFlags[e])
            ) {
              var r = this.urlFlags[e];
              Z().getBool("IS_TEST") ||
                Z().getBool("PROD") ||
                console.warn(
                  "Setting feature override from URL "
                    .concat(e, ": ")
                    .concat(r, "."),
                ),
                this.set(e, r);
            }
          }),
          (e.prototype.getAsync = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return e in this.flags
                      ? [2, this.flags[e]]
                      : ((t = this.flags), (n = e), [4, this.evaluateFlag(e)]);
                  case 1:
                    return (t[n] = r.sent()), [2, this.flags[e]];
                }
              });
            });
          }),
          (e.prototype.get = function (e) {
            if (e in this.flags) return this.flags[e];
            var t = this.evaluateFlag(e);
            if (q(t))
              throw new Error(
                "Flag ".concat(e, " cannot be synchronously evaluated. ") +
                  "Please use getAsync() instead.",
              );
            return (this.flags[e] = t), this.flags[e];
          }),
          (e.prototype.getNumber = function (e) {
            return this.get(e);
          }),
          (e.prototype.getBool = function (e) {
            return this.get(e);
          }),
          (e.prototype.getString = function (e) {
            return this.get(e);
          }),
          (e.prototype.getFlags = function () {
            return this.flags;
          }),
          Object.defineProperty(e.prototype, "features", {
            get: function () {
              return this.flags;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.set = function (e, t) {
            if (null == this.flagRegistry[e])
              throw new Error(
                "Cannot set flag ".concat(e, " as it has not been registered."),
              );
            (this.flags[e] = t),
              null != this.flagRegistry[e].setHook &&
                this.flagRegistry[e].setHook(t);
          }),
          (e.prototype.evaluateFlag = function (e) {
            if (null == this.flagRegistry[e])
              throw new Error(
                "Cannot evaluate flag '".concat(
                  e,
                  "': no evaluation function found.",
                ),
              );
            return this.flagRegistry[e].evaluationFn();
          }),
          (e.prototype.setFlags = function (e) {
            this.flags = Object.assign({}, e);
          }),
          (e.prototype.reset = function () {
            (this.flags = {}), (this.urlFlags = {}), this.populateURLFlags();
          }),
          (e.prototype.populateURLFlags = function () {
            var e = this;
            if (
              "undefined" != typeof this.global &&
              "undefined" != typeof this.global.location &&
              "undefined" != typeof this.global.location.search
            ) {
              var t = this.getQueryParams(this.global.location.search);
              if (V in t)
                t.tfjsflags.split(",").forEach(function (t) {
                  var n = s(t.split(":"), 2),
                    r = n[0],
                    a = n[1];
                  e.urlFlags[r] = (function (e, t) {
                    var n = t.toLowerCase();
                    return "true" === n || "false" === n
                      ? "true" === n
                      : "".concat(+n) === n
                        ? +n
                        : t;
                  })(0, a);
                });
            }
          }),
          e
        );
      })();
    function j(e) {
      var t = {};
      return (
        e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (e) {
          for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          return J(t, n[0], n[1]), n.join("=");
        }),
        t
      );
    }
    function J(e, t, n) {
      e[decodeURIComponent(t)] = decodeURIComponent(n || "");
    }
    function Z() {
      return e.ENV;
    }
    function Y() {
      if (null == K) {
        var e = void 0;
        if ("undefined" != typeof window) e = window;
        else if ("undefined" != typeof global) e = global;
        else if ("undefined" != typeof process) e = process;
        else {
          if ("undefined" == typeof self)
            throw new Error("Could not find a global object");
          e = self;
        }
        K = e;
      }
      return K;
    }
    function X(e, t) {
      var n,
        r =
          (null == (n = Y())._tfGlobals && (n._tfGlobals = new Map()),
          n._tfGlobals);
      if (r.has(e)) return r.get(e);
      var a = t();
      return r.set(e, a), r.get(e);
    }
    e.ENV = null;
    var Q = "Acos",
      $ = "Acosh",
      ee = "Add",
      te = "AddN",
      ne = "ArgMax",
      re = "ArgMin",
      ae = "Asin",
      oe = "Asinh",
      ie = "Atan",
      se = "Atanh",
      ue = "Atan2",
      ce = "AvgPool",
      le = "AvgPool3D",
      he = "BatchMatMul",
      fe = "BatchToSpaceND",
      de = "Bincount",
      pe = "BitwiseAnd",
      ge = "BroadcastArgs",
      ve = "Cast",
      me = "Ceil",
      ye = "ClipByValue",
      be = "Complex",
      we = "ComplexAbs",
      ke = "Concat",
      xe = "Conv2D",
      Ee = "Conv2DBackpropFilter",
      Se = "Conv2DBackpropInput",
      Ae = "Conv3D",
      _e = "Conv3DBackpropInputV2",
      Ie = "Cosh",
      Ne = "Cumprod",
      Me = "Cumsum",
      Te = "CropAndResize",
      De = "DenseBincount",
      Re = "DepthToSpace",
      Be = "DepthwiseConv2dNative",
      Fe = "DepthwiseConv2dNativeBackpropFilter",
      Ce = "DepthwiseConv2dNativeBackpropInput",
      Pe = "Diag",
      Oe = "Dilation2D",
      Le = "Draw",
      ze = "RealDiv",
      Ue = "Einsum",
      We = "Equal",
      Ge = "ExpandDims",
      qe = "Expm1",
      Ke = "Fill",
      Ve = "FlipLeftRight",
      He = "Floor",
      je = "FloorDiv",
      Je = "FusedBatchNorm",
      Ze = "GatherV2",
      Ye = "GatherNd",
      Xe = "Greater",
      Qe = "GreaterEqual",
      $e = "Identity",
      et = "IFFT",
      tt = "Imag",
      nt = "IsFinite",
      rt = "IsInf",
      at = "IsNan",
      ot = "LeakyRelu",
      it = "Less",
      st = "LessEqual",
      ut = "LinSpace",
      ct = "Log1p",
      lt = "LogicalAnd",
      ht = "LogicalNot",
      ft = "LogicalOr",
      dt = "Maximum",
      pt = "MaxPool",
      gt = "MaxPool3D",
      vt = "MaxPoolWithArgmax",
      mt = "Mean",
      yt = "Minimum",
      bt = "MirrorPad",
      wt = "Multinomial",
      kt = "Multiply",
      xt = "NotEqual",
      Et = "NonMaxSuppressionV3",
      St = "NonMaxSuppressionV4",
      At = "NonMaxSuppressionV5",
      _t = "OnesLike",
      It = "OneHot",
      Nt = "Pack",
      Mt = "PadV2",
      Tt = "Prelu",
      Dt = "Prod",
      Rt = "RaggedGather",
      Bt = "RaggedRange",
      Ft = "RaggedTensorToTensor",
      Ct = "Range",
      Pt = "Real",
      Ot = "Reciprocal",
      Lt = "Relu",
      zt = "Reshape",
      Ut = "ResizeNearestNeighbor",
      Wt = "ResizeBilinear",
      Gt = "Relu6",
      qt = "Reverse",
      Kt = "Round",
      Vt = "Rsqrt",
      Ht = "ScatterNd",
      jt = "TensorScatterUpdate",
      Jt = "SearchSorted",
      Zt = "Select",
      Yt = "Selu",
      Xt = "Slice",
      Qt = "Sinh",
      $t = "Sign",
      en = "Sigmoid",
      tn = "Softplus",
      nn = "Sqrt",
      rn = "SpaceToBatchND",
      an = "SplitV",
      on = "Softmax",
      sn = "SparseFillEmptyRows",
      un = "SparseReshape",
      cn = "SparseSegmentMean",
      ln = "SparseSegmentSum",
      hn = "SparseToDense",
      fn = "SquaredDifference",
      dn = "StaticRegexReplace",
      pn = "StridedSlice",
      gn = "StringNGrams",
      vn = "StringSplit",
      mn = "StringToHashBucketFast",
      yn = "Tanh",
      bn = "Tile",
      wn = "TopK",
      kn = "Transform",
      xn = "Transpose",
      En = "Unique",
      Sn = "Unpack",
      An = "UnsortedSegmentSum",
      _n = "ZerosLike",
      In = "Step",
      Nn = "FromPixels",
      Mn = "RotateWithOffset",
      Tn = "_FusedMatMul",
      Dn = "FusedConv2D",
      Rn = "FusedDepthwiseConv2D";
    function Bn() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      Z().getBool("IS_TEST") ||
        Z().getBool("PROD") ||
        console.warn.apply(console, u([], s(e), !1));
    }
    var Fn = X("kernelRegistry", function () {
        return new Map();
      }),
      Cn = X("gradRegistry", function () {
        return new Map();
      });
    function Pn(e, t) {
      var n = Un(e, t);
      return Fn.get(n);
    }
    function On(e) {
      return Cn.get(e);
    }
    function Ln(e) {
      for (var t = Fn.entries(), n = []; ; ) {
        var r = t.next(),
          a = r.done,
          o = r.value;
        if (a) break;
        var i = s(o, 2),
          u = i[0],
          c = i[1];
        s(u.split("_"), 1)[0] === e && n.push(c);
      }
      return n;
    }
    function zn(e) {
      var t = e.kernelName,
        n = e.backendName,
        r = Un(t, n);
      Fn.has(r) &&
        Bn(
          "The kernel '".concat(t, "' for backend ") +
            "'".concat(n, "' is already registered"),
        ),
        Fn.set(r, e);
    }
    function Un(e, t) {
      return "".concat(t, "_").concat(e);
    }
    function Wn(e) {
      return (
        e instanceof Float32Array ||
        e instanceof Int32Array ||
        e instanceof Uint8Array ||
        e instanceof Uint8ClampedArray
      );
    }
    var Gn =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {};
    function qn(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
    }
    var Kn = Hn,
      Vn = null;
    try {
      Vn = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
            127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0,
            11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2,
            5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5,
            114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103,
            104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173,
            32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
            132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
            126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
            66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32,
            4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
            32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
            167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
            32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4,
            66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
          ]),
        ),
        {},
      ).exports;
    } catch (e) {}
    function Hn(e, t, n) {
      (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!n);
    }
    function jn(e) {
      return !0 === (e && e.__isLong__);
    }
    Hn.prototype.__isLong__,
      Object.defineProperty(Hn.prototype, "__isLong__", { value: !0 }),
      (Hn.isLong = jn);
    var Jn = {},
      Zn = {};
    function Yn(e, t) {
      var n, r, a;
      return t
        ? (a = 0 <= (e >>>= 0) && e < 256) && (r = Zn[e])
          ? r
          : ((n = Qn(e, (0 | e) < 0 ? -1 : 0, !0)), a && (Zn[e] = n), n)
        : (a = -128 <= (e |= 0) && e < 128) && (r = Jn[e])
          ? r
          : ((n = Qn(e, e < 0 ? -1 : 0, !1)), a && (Jn[e] = n), n);
    }
    function Xn(e, t) {
      if (isNaN(e)) return t ? sr : ir;
      if (t) {
        if (e < 0) return sr;
        if (e >= rr) return fr;
      } else {
        if (e <= -ar) return dr;
        if (e + 1 >= ar) return hr;
      }
      return e < 0 ? Xn(-e, t).neg() : Qn(e % nr | 0, (e / nr) | 0, t);
    }
    function Qn(e, t, n) {
      return new Hn(e, t, n);
    }
    (Hn.fromInt = Yn), (Hn.fromNumber = Xn), (Hn.fromBits = Qn);
    var $n = Math.pow;
    function er(e, t, n) {
      if (0 === e.length) throw Error("empty string");
      if (
        "NaN" === e ||
        "Infinity" === e ||
        "+Infinity" === e ||
        "-Infinity" === e
      )
        return ir;
      if (
        ("number" == typeof t ? ((n = t), (t = !1)) : (t = !!t),
        (n = n || 10) < 2 || 36 < n)
      )
        throw RangeError("radix");
      var r;
      if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === r) return er(e.substring(1), t, n).neg();
      for (var a = Xn($n(n, 8)), o = ir, i = 0; i < e.length; i += 8) {
        var s = Math.min(8, e.length - i),
          u = parseInt(e.substring(i, i + s), n);
        if (s < 8) {
          var c = Xn($n(n, s));
          o = o.mul(c).add(Xn(u));
        } else o = (o = o.mul(a)).add(Xn(u));
      }
      return (o.unsigned = t), o;
    }
    function tr(e, t) {
      return "number" == typeof e
        ? Xn(e, t)
        : "string" == typeof e
          ? er(e, t)
          : Qn(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
    }
    (Hn.fromString = er), (Hn.fromValue = tr);
    var nr = 4294967296,
      rr = nr * nr,
      ar = rr / 2,
      or = Yn(1 << 24),
      ir = Yn(0);
    Hn.ZERO = ir;
    var sr = Yn(0, !0);
    Hn.UZERO = sr;
    var ur = Yn(1);
    Hn.ONE = ur;
    var cr = Yn(1, !0);
    Hn.UONE = cr;
    var lr = Yn(-1);
    Hn.NEG_ONE = lr;
    var hr = Qn(-1, 2147483647, !1);
    Hn.MAX_VALUE = hr;
    var fr = Qn(-1, -1, !0);
    Hn.MAX_UNSIGNED_VALUE = fr;
    var dr = Qn(0, -2147483648, !1);
    Hn.MIN_VALUE = dr;
    var pr = Hn.prototype;
    (pr.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (pr.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * nr + (this.low >>> 0)
          : this.high * nr + (this.low >>> 0);
      }),
      (pr.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(dr)) {
            var t = Xn(e),
              n = this.div(t),
              r = n.mul(t).sub(this);
            return n.toString(e) + r.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        for (var a = Xn($n(e, 6), this.unsigned), o = this, i = ""; ; ) {
          var s = o.div(a),
            u = (o.sub(s.mul(a)).toInt() >>> 0).toString(e);
          if ((o = s).isZero()) return u + i;
          for (; u.length < 6; ) u = "0" + u;
          i = "" + u + i;
        }
      }),
      (pr.getHighBits = function () {
        return this.high;
      }),
      (pr.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (pr.getLowBits = function () {
        return this.low;
      }),
      (pr.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (pr.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(dr) ? 64 : this.neg().getNumBitsAbs();
        for (
          var e = 0 != this.high ? this.high : this.low, t = 31;
          t > 0 && 0 == (e & (1 << t));
          t--
        );
        return 0 != this.high ? t + 33 : t + 1;
      }),
      (pr.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (pr.eqz = pr.isZero),
      (pr.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (pr.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (pr.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (pr.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (pr.equals = function (e) {
        return (
          jn(e) || (e = tr(e)),
          (this.unsigned === e.unsigned ||
            this.high >>> 31 != 1 ||
            e.high >>> 31 != 1) &&
            this.high === e.high &&
            this.low === e.low
        );
      }),
      (pr.eq = pr.equals),
      (pr.notEquals = function (e) {
        return !this.eq(e);
      }),
      (pr.neq = pr.notEquals),
      (pr.ne = pr.notEquals),
      (pr.lessThan = function (e) {
        return this.comp(e) < 0;
      }),
      (pr.lt = pr.lessThan),
      (pr.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      }),
      (pr.lte = pr.lessThanOrEqual),
      (pr.le = pr.lessThanOrEqual),
      (pr.greaterThan = function (e) {
        return this.comp(e) > 0;
      }),
      (pr.gt = pr.greaterThan),
      (pr.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      }),
      (pr.gte = pr.greaterThanOrEqual),
      (pr.ge = pr.greaterThanOrEqual),
      (pr.compare = function (e) {
        if ((jn(e) || (e = tr(e)), this.eq(e))) return 0;
        var t = this.isNegative(),
          n = e.isNegative();
        return t && !n
          ? -1
          : !t && n
            ? 1
            : this.unsigned
              ? e.high >>> 0 > this.high >>> 0 ||
                (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                ? -1
                : 1
              : this.sub(e).isNegative()
                ? -1
                : 1;
      }),
      (pr.comp = pr.compare),
      (pr.negate = function () {
        return !this.unsigned && this.eq(dr) ? dr : this.not().add(ur);
      }),
      (pr.neg = pr.negate),
      (pr.add = function (e) {
        jn(e) || (e = tr(e));
        var t = this.high >>> 16,
          n = 65535 & this.high,
          r = this.low >>> 16,
          a = 65535 & this.low,
          o = e.high >>> 16,
          i = 65535 & e.high,
          s = e.low >>> 16,
          u = 0,
          c = 0,
          l = 0,
          h = 0;
        return (
          (l += (h += a + (65535 & e.low)) >>> 16),
          (c += (l += r + s) >>> 16),
          (u += (c += n + i) >>> 16),
          (u += t + o),
          Qn(
            ((l &= 65535) << 16) | (h &= 65535),
            ((u &= 65535) << 16) | (c &= 65535),
            this.unsigned,
          )
        );
      }),
      (pr.subtract = function (e) {
        return jn(e) || (e = tr(e)), this.add(e.neg());
      }),
      (pr.sub = pr.subtract),
      (pr.multiply = function (e) {
        if (this.isZero()) return ir;
        if ((jn(e) || (e = tr(e)), Vn))
          return Qn(
            Vn.mul(this.low, this.high, e.low, e.high),
            Vn.get_high(),
            this.unsigned,
          );
        if (e.isZero()) return ir;
        if (this.eq(dr)) return e.isOdd() ? dr : ir;
        if (e.eq(dr)) return this.isOdd() ? dr : ir;
        if (this.isNegative())
          return e.isNegative()
            ? this.neg().mul(e.neg())
            : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(or) && e.lt(or))
          return Xn(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16,
          n = 65535 & this.high,
          r = this.low >>> 16,
          a = 65535 & this.low,
          o = e.high >>> 16,
          i = 65535 & e.high,
          s = e.low >>> 16,
          u = 65535 & e.low,
          c = 0,
          l = 0,
          h = 0,
          f = 0;
        return (
          (h += (f += a * u) >>> 16),
          (l += (h += r * u) >>> 16),
          (h &= 65535),
          (l += (h += a * s) >>> 16),
          (c += (l += n * u) >>> 16),
          (l &= 65535),
          (c += (l += r * s) >>> 16),
          (l &= 65535),
          (c += (l += a * i) >>> 16),
          (c += t * u + n * s + r * i + a * o),
          Qn(
            ((h &= 65535) << 16) | (f &= 65535),
            ((c &= 65535) << 16) | (l &= 65535),
            this.unsigned,
          )
        );
      }),
      (pr.mul = pr.multiply),
      (pr.divide = function (e) {
        if ((jn(e) || (e = tr(e)), e.isZero())) throw Error("division by zero");
        var t, n, r;
        if (Vn)
          return this.unsigned ||
            -2147483648 !== this.high ||
            -1 !== e.low ||
            -1 !== e.high
            ? Qn(
                (this.unsigned ? Vn.div_u : Vn.div_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high,
                ),
                Vn.get_high(),
                this.unsigned,
              )
            : this;
        if (this.isZero()) return this.unsigned ? sr : ir;
        if (this.unsigned) {
          if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return sr;
          if (e.gt(this.shru(1))) return cr;
          r = sr;
        } else {
          if (this.eq(dr))
            return e.eq(ur) || e.eq(lr)
              ? dr
              : e.eq(dr)
                ? ur
                : (t = this.shr(1).div(e).shl(1)).eq(ir)
                  ? e.isNegative()
                    ? ur
                    : lr
                  : ((n = this.sub(e.mul(t))), (r = t.add(n.div(e))));
          if (e.eq(dr)) return this.unsigned ? sr : ir;
          if (this.isNegative())
            return e.isNegative()
              ? this.neg().div(e.neg())
              : this.neg().div(e).neg();
          if (e.isNegative()) return this.div(e.neg()).neg();
          r = ir;
        }
        for (n = this; n.gte(e); ) {
          t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
          for (
            var a = Math.ceil(Math.log(t) / Math.LN2),
              o = a <= 48 ? 1 : $n(2, a - 48),
              i = Xn(t),
              s = i.mul(e);
            s.isNegative() || s.gt(n);
  
          )
            s = (i = Xn((t -= o), this.unsigned)).mul(e);
          i.isZero() && (i = ur), (r = r.add(i)), (n = n.sub(s));
        }
        return r;
      }),
      (pr.div = pr.divide),
      (pr.modulo = function (e) {
        return (
          jn(e) || (e = tr(e)),
          Vn
            ? Qn(
                (this.unsigned ? Vn.rem_u : Vn.rem_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high,
                ),
                Vn.get_high(),
                this.unsigned,
              )
            : this.sub(this.div(e).mul(e))
        );
      }),
      (pr.mod = pr.modulo),
      (pr.rem = pr.modulo),
      (pr.not = function () {
        return Qn(~this.low, ~this.high, this.unsigned);
      }),
      (pr.and = function (e) {
        return (
          jn(e) || (e = tr(e)),
          Qn(this.low & e.low, this.high & e.high, this.unsigned)
        );
      }),
      (pr.or = function (e) {
        return (
          jn(e) || (e = tr(e)),
          Qn(this.low | e.low, this.high | e.high, this.unsigned)
        );
      }),
      (pr.xor = function (e) {
        return (
          jn(e) || (e = tr(e)),
          Qn(this.low ^ e.low, this.high ^ e.high, this.unsigned)
        );
      }),
      (pr.shiftLeft = function (e) {
        return (
          jn(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
              ? Qn(
                  this.low << e,
                  (this.high << e) | (this.low >>> (32 - e)),
                  this.unsigned,
                )
              : Qn(0, this.low << (e - 32), this.unsigned)
        );
      }),
      (pr.shl = pr.shiftLeft),
      (pr.shiftRight = function (e) {
        return (
          jn(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
              ? Qn(
                  (this.low >>> e) | (this.high << (32 - e)),
                  this.high >> e,
                  this.unsigned,
                )
              : Qn(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (pr.shr = pr.shiftRight),
      (pr.shiftRightUnsigned = function (e) {
        if ((jn(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
        var t = this.high;
        return e < 32
          ? Qn((this.low >>> e) | (t << (32 - e)), t >>> e, this.unsigned)
          : Qn(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
      }),
      (pr.shru = pr.shiftRightUnsigned),
      (pr.shr_u = pr.shiftRightUnsigned),
      (pr.toSigned = function () {
        return this.unsigned ? Qn(this.low, this.high, !1) : this;
      }),
      (pr.toUnsigned = function () {
        return this.unsigned ? this : Qn(this.low, this.high, !0);
      }),
      (pr.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      }),
      (pr.toBytesLE = function () {
        var e = this.high,
          t = this.low;
        return [
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
          255 & e,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          e >>> 24,
        ];
      }),
      (pr.toBytesBE = function () {
        var e = this.high,
          t = this.low;
        return [
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          255 & e,
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ];
      }),
      (Hn.fromBytes = function (e, t, n) {
        return n ? Hn.fromBytesLE(e, t) : Hn.fromBytesBE(e, t);
      }),
      (Hn.fromBytesLE = function (e, t) {
        return new Hn(
          e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
          e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
          t,
        );
      }),
      (Hn.fromBytesBE = function (e, t) {
        return new Hn(
          (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
          (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
          t,
        );
      });
    var gr = qn(Kn),
      vr = gr || t({ __proto__: null, default: gr }, [Kn]);
    function mr(e) {
      return vr.fromString(e, !0, 16);
    }
    var yr = mr("c3a5c85c97cb3127"),
      br = mr("b492b66fbe98f273"),
      wr = mr("9ae16a3b2f90404f");
    function kr(e) {
      return e.xor(e.shru(47));
    }
    function xr(e, t, n) {
      var r = e.slice(t, t + n);
      return vr.fromBytes(Array.from(r), !0, !0);
    }
    function Er(e, t) {
      return xr(e, t, 8);
    }
    function Sr(e, t) {
      return xr(e, t, 4);
    }
    function Ar(e, t) {
      return 0 === t ? e : e.shru(t).or(e.shl(64 - t));
    }
    function _r(e, t, n) {
      void 0 === n && (n = mr("9ddfea08eb382d69"));
      var r = e.xor(t).mul(n);
      r = r.xor(r.shru(47));
      var a = t.xor(r).mul(n);
      return (a = (a = a.xor(a.shru(47))).mul(n));
    }
    function Ir(e, t, n, r) {
      return (function (e, t, n, r, a, o) {
        (a = a.add(e)), (o = Ar(o.add(a).add(r), 21));
        var i = a;
        return (
          (a = (a = a.add(t)).add(n)),
          (o = o.add(Ar(a, 44))),
          [a.add(r), o.add(i)]
        );
      })(Er(e, t), Er(e, t + 8), Er(e, t + 16), Er(e, t + 24), n, r);
    }
    function Nr(e, t) {
      if ("string" === t)
        throw new Error("Cannot convert a string[] to a TypedArray");
      if (
        (Array.isArray(e) && (e = Br(e)),
        Z().getBool("DEBUG") && I(e, t),
        (function (e, t) {
          return (
            (e instanceof Float32Array && "float32" === t) ||
            (e instanceof Int32Array && "int32" === t) ||
            (e instanceof Uint8Array && "bool" === t)
          );
        })(e, t))
      )
        return e;
      if (null == t || "float32" === t || "complex64" === t)
        return new Float32Array(e);
      if ("int32" === t) return new Int32Array(e);
      if ("bool" === t) {
        for (var n = new Uint8Array(e.length), r = 0; r < n.length; ++r)
          0 !== Math.round(e[r]) && (n[r] = 1);
        return n;
      }
      throw new Error("Unknown data type ".concat(t));
    }
    function Mr() {
      return Z().platform.now();
    }
    function Tr(e, t) {
      return (
        void 0 === t && (t = "utf-8"),
        (t = t || "utf-8"),
        Z().platform.encode(e, t)
      );
    }
    function Dr(e, t) {
      return (
        void 0 === t && (t = "utf-8"),
        (t = t || "utf-8"),
        Z().platform.decode(e, t)
      );
    }
    function Rr(e) {
      return null != Z().platform.isTypedArray
        ? Z().platform.isTypedArray(e)
        : Wn(e);
    }
    function Br(e, t, n) {
      var r, a;
      if (
        (void 0 === t && (t = []),
        void 0 === n && (n = !1),
        null == t && (t = []),
        "boolean" == typeof e ||
          "number" == typeof e ||
          "string" == typeof e ||
          q(e) ||
          null == e ||
          (Rr(e) && n))
      )
        t.push(e);
      else if (Array.isArray(e) || Rr(e))
        for (var o = 0; o < e.length; ++o) Br(e[o], t, n);
      else {
        var s = -1;
        try {
          for (var u = i(Object.keys(e)), c = u.next(); !c.done; c = u.next()) {
            var l = c.value;
            /^([1-9]+[0-9]*|0)$/.test(l) && (s = Math.max(s, Number(l)));
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            c && !c.done && (a = u.return) && a.call(u);
          } finally {
            if (r) throw r.error;
          }
        }
        for (o = 0; o <= s; o++) Br(e[o], t, n);
      }
      return t;
    }
    var Fr = {
        __proto__: null,
        arraysEqual: w,
        arraysEqualWithNull: b,
        assert: g,
        assertNonNegativeIntegerDimensions: G,
        assertNonNull: m,
        assertShapesMatch: v,
        bytesFromStringArray: T,
        bytesPerElement: M,
        checkConversionForErrors: I,
        clamp: d,
        computeStrides: O,
        convertBackendValuesAndArrayBuffer: function (e, t) {
          if (Array.isArray(e)) return e;
          if ("float32" === t)
            return e instanceof Float32Array ? e : new Float32Array(e);
          if ("int32" === t)
            return e instanceof Int32Array ? e : new Int32Array(e);
          if ("bool" === t || "string" === t)
            return Uint8Array.from(new Int32Array(e));
          throw new Error("Unknown dtype ".concat(t));
        },
        createScalarValue: function (e, t) {
          return "string" === t ? Tr(e) : Nr([e], t);
        },
        createShuffledIndices: function (e) {
          for (var t = new Uint32Array(e), n = 0; n < e; ++n) t[n] = n;
          return f(t), t;
        },
        decodeString: Dr,
        distSquared: function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var a = Number(e[r]) - Number(t[r]);
            n += a * a;
          }
          return n;
        },
        encodeString: Tr,
        fetch: function (e, t) {
          return Z().platform.fetch(e, t);
        },
        fingerPrint64: function (e, t) {
          var n, r;
          void 0 === t && (t = e.length);
          var a = vr.fromNumber(81, !0);
          if (t <= 32)
            return t <= 16
              ? (function (e, t) {
                  if ((void 0 === t && (t = e.length), t >= 8)) {
                    var n = wr.add(2 * t),
                      r = Er(e, 0).add(wr);
                    return _r(
                      Ar((a = Er(e, t - 8)), 37)
                        .mul(n)
                        .add(r),
                      Ar(r, 25).add(a).mul(n),
                      n,
                    );
                  }
                  if (t >= 4)
                    return (
                      (n = wr.add(2 * t)),
                      _r((r = Sr(e, 0)).shl(3).add(t), Sr(e, t - 4), n)
                    );
                  if (t > 0) {
                    var a,
                      o = (r = e[0]) + ((a = e[t >> 1]) << 8),
                      i = t + (e[t - 1] << 2);
                    return kr(wr.mul(o).xor(yr.mul(i))).mul(wr);
                  }
                  return wr;
                })(e, t)
              : (function (e, t) {
                  void 0 === t && (t = e.length);
                  var n = wr.add(2 * t),
                    r = Er(e, 0).mul(br),
                    a = Er(e, 8),
                    o = Er(e, t - 8).mul(n),
                    i = Er(e, t - 16).mul(wr);
                  return _r(
                    Ar(r.add(a), 43).add(Ar(o, 30)).add(i),
                    r.add(Ar(a.add(wr), 18)).add(o),
                    n,
                  );
                })(e, t);
          if (t <= 64)
            return (function (e, t) {
              void 0 === t && (t = e.length);
              var n = wr.add(2 * t),
                r = Er(e, 0).mul(wr),
                a = Er(e, 8),
                o = Er(e, t - 8).mul(n),
                i = Er(e, t - 16).mul(wr),
                s = Ar(r.add(a), 43).add(Ar(o, 30)).add(i),
                u = _r(s, r.add(Ar(a.add(wr), 18)).add(o), n),
                c = Er(e, 16).mul(n),
                l = Er(e, 24),
                h = s.add(Er(e, t - 32)).mul(n),
                f = u.add(Er(e, t - 24)).mul(n);
              return _r(
                Ar(c.add(l), 43).add(Ar(h, 30)).add(f),
                c.add(Ar(l.add(r), 18)).add(h),
                n,
              );
            })(e, t);
          var o = a,
            i = a.mul(br).add(113),
            u = kr(i.mul(wr).add(113)).mul(wr),
            c = [vr.UZERO, vr.UZERO],
            l = [vr.UZERO, vr.UZERO];
          o = o.mul(wr).add(Er(e, 0));
          var h = 0,
            f = 64 * ((t - 1) >> 6),
            d = f + ((t - 1) & 63) - 63;
          do {
            (o = Ar(
              o
                .add(i)
                .add(c[0])
                .add(Er(e, h + 8)),
              37,
            ).mul(br)),
              (i = Ar(i.add(c[1]).add(Er(e, h + 48)), 42).mul(br)),
              (o = o.xor(l[1])),
              (i = i.add(c[0]).add(Er(e, h + 40))),
              (u = Ar(u.add(l[0]), 33).mul(br)),
              (c = Ir(e, h, c[1].mul(br), o.add(l[0]))),
              (l = Ir(e, h + 32, u.add(l[1]), i.add(Er(e, h + 16)))),
              (u = (n = s([o, u], 2))[0]),
              (o = n[1]),
              (h += 64);
          } while (h !== f);
          var p = br.add(u.and(255).shl(1));
          return (
            (h = d),
            (l[0] = l[0].add((t - 1) & 63)),
            (c[0] = c[0].add(l[0])),
            (l[0] = l[0].add(c[0])),
            (o = Ar(
              o
                .add(i)
                .add(c[0])
                .add(Er(e, h + 8)),
              37,
            ).mul(p)),
            (i = Ar(i.add(c[1]).add(Er(e, h + 48)), 42).mul(p)),
            (o = o.xor(l[1].mul(9))),
            (i = i.add(c[0].mul(9).add(Er(e, h + 40)))),
            (u = Ar(u.add(l[0]), 33).mul(p)),
            (c = Ir(e, h, c[1].mul(p), o.add(l[0]))),
            (l = Ir(e, h + 32, u.add(l[1]), i.add(Er(e, h + 16)))),
            (u = (r = s([o, u], 2))[0]),
            (o = r[1]),
            _r(
              _r(c[0], l[0], p).add(kr(i).mul(yr)).add(u),
              _r(c[1], l[1], p).add(o),
              p,
            )
          );
        },
        flatten: Br,
        getArrayFromDType: _,
        getTypedArrayFromDType: A,
        hasEncodingLoss: function (e, t) {
          return (
            "complex64" !== t &&
            ("float32" !== t || "complex64" === e) &&
            ("int32" !== t || "float32" === e || "complex64" === e) &&
            ("bool" !== t || "bool" !== e)
          );
        },
        hexToLong: mr,
        indexToLoc: function (e, t, n) {
          if (0 === t) return [];
          if (1 === t) return [e];
          for (var r = new Array(t), a = 0; a < r.length - 1; ++a)
            (r[a] = Math.floor(e / n[a])), (e -= r[a] * n[a]);
          return (r[r.length - 1] = e), r;
        },
        inferDtype: F,
        inferFromImplicitShape: function (e, t) {
          for (var n = 1, r = -1, a = 0; a < e.length; ++a)
            if (e[a] >= 0) n *= e[a];
            else if (-1 === e[a]) {
              if (-1 !== r)
                throw Error(
                  "Shapes can only have 1 implicit size. " +
                    "Found -1 at dim ".concat(r, " and dim ").concat(a),
                );
              r = a;
            } else if (e[a] < 0)
              throw Error(
                "Shapes can not be < 0. Found "
                  .concat(e[a], " at dim ")
                  .concat(a),
              );
          if (-1 === r) {
            if (t > 0 && t !== n)
              throw Error(
                "Size(".concat(t, ") must match the product of shape ").concat(e),
              );
            return e;
          }
          if (0 === n)
            throw Error(
              "Cannot infer the missing size in [".concat(e, "] when ") +
                "there are 0 elements",
            );
          if (t % n != 0)
            throw Error(
              "The implicit shape can't be a fractional number. " +
                "Got ".concat(t, " / ").concat(n),
            );
          var o = e.slice();
          return (o[r] = t / n), o;
        },
        isBoolean: R,
        isFunction: C,
        isInt: k,
        isNumber: B,
        isPromise: q,
        isScalarShape: function (e) {
          return 0 === e.length;
        },
        isString: D,
        isTypedArray: Rr,
        isValidDtype: N,
        locToIndex: function (e, t, n) {
          if (0 === t) return 0;
          if (1 === t) return e[0];
          for (var r = e[e.length - 1], a = 0; a < e.length - 1; ++a)
            r += n[a] * e[a];
          return r;
        },
        makeOnesTypedArray: U,
        makeZerosNestedTypedArray: function (e, t) {
          var n = e.reduce(function (e, t) {
            return e * t;
          }, 1);
          if (null == t || "float32" === t) return z(e, new Float32Array(n));
          if ("int32" === t) return z(e, new Int32Array(n));
          if ("bool" === t) return z(e, new Uint8Array(n));
          throw new Error("Unknown data type ".concat(t));
        },
        makeZerosTypedArray: W,
        nearestDivisor: P,
        nearestLargerEven: function (e) {
          return e % 2 == 0 ? e : e + 1;
        },
        now: Mr,
        parseAxisParam: E,
        randUniform: function (e, t) {
          var n = Math.random();
          return t * n + (1 - n) * e;
        },
        repeatedTry: function (e, t, n, r) {
          return (
            void 0 === t &&
              (t = function (e) {
                return 0;
              }),
            new Promise(function (a, o) {
              var i = 0,
                s = function () {
                  if (e()) a();
                  else {
                    i++;
                    var u = t(i);
                    null != n && i >= n
                      ? o()
                      : null != r
                        ? r(s, u)
                        : setTimeout(s, u);
                  }
                };
              s();
            })
          );
        },
        rightPad: x,
        shuffle: f,
        shuffleCombo: function (e, t) {
          if (e.length !== t.length)
            throw new Error(
              "Array sizes must match to be shuffled together " +
                "First array length was ".concat(e.length) +
                "Second array length was ".concat(t.length),
            );
          for (var n = e.length, r = 0; n > 0; )
            (r = (Math.random() * n) | 0), p(e, --n, r), p(t, n, r);
        },
        sizeFromShape: y,
        sizeToSquarishShape: function (e) {
          var t = Math.ceil(Math.sqrt(e));
          return [t, Math.ceil(e / t)];
        },
        squeezeShape: S,
        sum: function (e) {
          for (var t = 0, n = 0; n < e.length; n++) t += e[n];
          return t;
        },
        swap: p,
        tanh: function (e) {
          if (null != Math.tanh) return Math.tanh(e);
          if (e === 1 / 0) return 1;
          if (e === -1 / 0) return -1;
          var t = Math.exp(2 * e);
          return (t - 1) / (t + 1);
        },
        toNestedArray: z,
        toTypedArray: Nr,
      },
      Cr = (function () {
        function e(e, t) {
          (this.backendTimer = e),
            (this.logger = t),
            null == t && (this.logger = new Pr());
        }
        return (
          (e.prototype.profileKernel = function (e, t, n) {
            var r,
              a,
              o,
              s,
              u = function () {
                o = n();
              },
              c = Mr();
            if (this.backendTimer.timerAvailable()) s = this.backendTimer.time(u);
            else {
              u();
              try {
                for (var l = i(o), h = l.next(); !h.done; h = l.next()) {
                  h.value.dataSync();
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  h && !h.done && (a = l.return) && a.call(l);
                } finally {
                  if (r) throw r.error;
                }
              }
              s = Promise.resolve({ kernelMs: Mr() - c });
            }
            if (Z().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
              for (
                var f = function (t) {
                    var n = o[t];
                    n.data().then(function (t) {
                      !(function (e, t, n) {
                        if ("float32" !== t) return !1;
                        for (var r = 0; r < e.length; r++) {
                          var a = e[r];
                          if (isNaN(a) || !isFinite(a))
                            return (
                              console.warn(
                                "Found "
                                  .concat(a, " in the result of '")
                                  .concat(n, "'"),
                              ),
                              !0
                            );
                        }
                      })(t, n.dtype, e);
                    });
                  },
                  d = 0;
                d < o.length;
                d++
              )
                f(d);
            return {
              kernelName: e,
              outputs: o,
              inputs: t,
              timeMs: s.then(function (e) {
                return e.kernelMs;
              }),
              extraInfo: s.then(function (e) {
                return null != e.getExtraProfileInfo
                  ? e.getExtraProfileInfo()
                  : "";
              }),
            };
          }),
          (e.prototype.logKernelProfile = function (e) {
            var t = this,
              n = e.kernelName,
              r = e.outputs,
              a = e.timeMs,
              o = e.inputs,
              i = e.extraInfo;
            r.forEach(function (e) {
              Promise.all([e.data(), a, i]).then(function (r) {
                t.logger.logKernelProfile(n, e, r[0], r[1], o, r[2]);
              });
            });
          }),
          e
        );
      })();
    var Pr = (function () {
      function e() {}
      return (
        (e.prototype.logKernelProfile = function (e, t, n, r, a, o) {
          var i = "number" == typeof r ? x("".concat(r, "ms"), 9) : r.error,
            s = x(e, 25),
            u = t.rank,
            c = t.size,
            l = x(t.shape.toString(), 14),
            h = "";
          for (var f in a) {
            var d = a[f];
            if (null != d) {
              var p = d.shape || t.shape,
                g = p.length;
              h += ""
                .concat(f, ": ")
                .concat(g, "D ")
                .concat(g > 0 ? p : "", " ");
            }
          }
          console.log(
            "%c"
              .concat(s, "\t%c")
              .concat(i, "\t%c")
              .concat(u, "D ")
              .concat(l, "\t%c")
              .concat(c, "\t%c")
              .concat(h, "\t%c")
              .concat(o),
            "font-weight:bold",
            "color:red",
            "color:blue",
            "color: orange",
            "color: green",
            "color: steelblue",
          );
        }),
        e
      );
    })();
    function Or(e, t, n, r) {
      var a = O(t),
        o = (function (e, t, n, r) {
          var a = y(t),
            o = r[r.length - 1],
            i = new Array(o).fill(0),
            s = t.length,
            u = "complex64" === n ? Wr(e) : e;
          if (s > 1)
            for (var c = 0; c < a / o; c++)
              for (var l = c * o, h = 0; h < o; h++)
                i[h] = Math.max(i[h], Lr(u[l + h], 0, n).length);
          return i;
        })(e, t, n, a),
        i = t.length,
        s = Ur(e, t, n, a, o),
        u = ["Tensor"];
      return (
        r &&
          (u.push("  dtype: ".concat(n)),
          u.push("  rank: ".concat(i)),
          u.push("  shape: [".concat(t, "]")),
          u.push("  values:")),
        u.push(
          s
            .map(function (e) {
              return "    " + e;
            })
            .join("\n"),
        ),
        u.join("\n")
      );
    }
    function Lr(e, t, n) {
      return x(
        Array.isArray(e)
          ? "".concat(parseFloat(e[0].toFixed(7)), " + ") +
              "".concat(parseFloat(e[1].toFixed(7)), "j")
          : D(e)
            ? "'".concat(e, "'")
            : "bool" === n
              ? zr(e)
              : parseFloat(e.toFixed(7)).toString(),
        t,
      );
    }
    function zr(e) {
      return 0 === e ? "false" : "true";
    }
    function Ur(e, t, n, r, a, o) {
      void 0 === o && (o = !0);
      var i = "complex64" === n ? 2 : 1,
        c = t[0],
        l = t.length;
      if (0 === l)
        return "complex64" === n
          ? [Lr(Wr(e)[0], 0, n)]
          : "bool" === n
            ? [zr(e[0])]
            : [e[0].toString()];
      if (1 === l) {
        if (c > 20) {
          var h = 3 * i,
            f = Array.from(e.slice(0, h)),
            d = Array.from(e.slice((c - 3) * i, c * i));
          return (
            "complex64" === n && ((f = Wr(f)), (d = Wr(d))),
            [
              "[" +
                f
                  .map(function (e, t) {
                    return Lr(e, a[t], n);
                  })
                  .join(", ") +
                ", ..., " +
                d
                  .map(function (e, t) {
                    return Lr(e, a[c - 3 + t], n);
                  })
                  .join(", ") +
                "]",
            ]
          );
        }
        return [
          "[" +
            ("complex64" === n ? Wr(e) : Array.from(e))
              .map(function (e, t) {
                return Lr(e, a[t], n);
              })
              .join(", ") +
            "]",
        ];
      }
      var p = t.slice(1),
        g = r.slice(1),
        v = r[0] * i,
        m = [];
      if (c > 20) {
        for (var y = 0; y < 3; y++) {
          var b = (w = y * v) + v;
          m.push.apply(m, u([], s(Ur(e.slice(w, b), p, n, g, a, !1)), !1));
        }
        m.push("...");
        for (y = c - 3; y < c; y++) {
          b = (w = y * v) + v;
          m.push.apply(
            m,
            u([], s(Ur(e.slice(w, b), p, n, g, a, y === c - 1)), !1),
          );
        }
      } else
        for (y = 0; y < c; y++) {
          var w;
          b = (w = y * v) + v;
          m.push.apply(
            m,
            u([], s(Ur(e.slice(w, b), p, n, g, a, y === c - 1)), !1),
          );
        }
      var k = 2 === l ? "," : "";
      m[0] = "[" + (c > 0 ? m[0] + k : "");
      for (y = 1; y < m.length - 1; y++) m[y] = " " + m[y] + k;
      var x = ",\n";
      for (y = 2; y < l; y++) x += "\n";
      return (m[m.length - 1] = " " + m[m.length - 1] + "]" + (o ? "" : x)), m;
    }
    function Wr(e) {
      for (var t = [], n = 0; n < e.length; n += 2) t.push([e[n], e[n + 1]]);
      return t;
    }
    var Gr = (function () {
        function e(e, t, n) {
          var r = this;
          if (
            ((this.dtype = t),
            (this.shape = e.slice()),
            (this.size = y(e)),
            null != n)
          ) {
            var a = n.length;
            g(a === this.size, function () {
              return (
                "Length of values '".concat(a, "' does not match the size ") +
                "inferred by the shape '".concat(r.size, "'.")
              );
            });
          }
          if ("complex64" === t)
            throw new Error(
              "complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).",
            );
          (this.values = n || _(t, this.size)), (this.strides = O(e));
        }
        return (
          (e.prototype.set = function (e) {
            for (var t = this, n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r];
            0 === n.length && (n = [0]),
              g(n.length === this.rank, function () {
                return (
                  "The number of provided coordinates (".concat(
                    n.length,
                    ") must ",
                  ) + "match the rank (".concat(t.rank, ")")
                );
              });
            var a = this.locToIndex(n);
            this.values[a] = e;
          }),
          (e.prototype.get = function () {
            for (var e, t, n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            0 === n.length && (n = [0]);
            var a = 0;
            try {
              for (var o = i(n), s = o.next(); !s.done; s = o.next()) {
                var u = s.value;
                if (u < 0 || u >= this.shape[a]) {
                  var c =
                    "Requested out of range element at ".concat(n, ". ") +
                    "  Buffer shape=".concat(this.shape);
                  throw new Error(c);
                }
                a++;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (t = o.return) && t.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            for (var l = n[n.length - 1], h = 0; h < n.length - 1; ++h)
              l += this.strides[h] * n[h];
            return this.values[l];
          }),
          (e.prototype.locToIndex = function (e) {
            if (0 === this.rank) return 0;
            if (1 === this.rank) return e[0];
            for (var t = e[e.length - 1], n = 0; n < e.length - 1; ++n)
              t += this.strides[n] * e[n];
            return t;
          }),
          (e.prototype.indexToLoc = function (e) {
            if (0 === this.rank) return [];
            if (1 === this.rank) return [e];
            for (
              var t = new Array(this.shape.length), n = 0;
              n < t.length - 1;
              ++n
            )
              (t[n] = Math.floor(e / this.strides[n])),
                (e -= t[n] * this.strides[n]);
            return (t[t.length - 1] = e), t;
          }),
          Object.defineProperty(e.prototype, "rank", {
            get: function () {
              return this.shape.length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.toTensor = function () {
            return qr().makeTensor(this.values, this.shape, this.dtype);
          }),
          e
        );
      })(),
      qr = null,
      Kr = null;
    var Vr = (function () {
      function e(e, t, n, r) {
        (this.kept = !1),
          (this.isDisposedInternal = !1),
          (this.shape = e.slice()),
          (this.dtype = t || "float32"),
          (this.size = y(e)),
          (this.strides = O(e)),
          (this.dataId = n),
          (this.id = r),
          (this.rankType = this.rank < 5 ? this.rank.toString() : "higher");
      }
      return (
        Object.defineProperty(e.prototype, "rank", {
          get: function () {
            return this.shape.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.buffer = function () {
          return a(this, void 0, void 0, function () {
            var e;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.data()];
                case 1:
                  return (
                    (e = t.sent()), [2, Kr.buffer(this.shape, this.dtype, e)]
                  );
              }
            });
          });
        }),
        (e.prototype.bufferSync = function () {
          return Kr.buffer(this.shape, this.dtype, this.dataSync());
        }),
        (e.prototype.array = function () {
          return a(this, void 0, void 0, function () {
            var e;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.data()];
                case 1:
                  return (
                    (e = t.sent()),
                    [2, z(this.shape, e, "complex64" === this.dtype)]
                  );
              }
            });
          });
        }),
        (e.prototype.arraySync = function () {
          return z(this.shape, this.dataSync(), "complex64" === this.dtype);
        }),
        (e.prototype.data = function () {
          return a(this, void 0, void 0, function () {
            var e, t;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    this.throwIfDisposed(),
                    (e = qr().read(this.dataId)),
                    "string" !== this.dtype ? [3, 2] : [4, e]
                  );
                case 1:
                  t = n.sent();
                  try {
                    return [
                      2,
                      t.map(function (e) {
                        return Dr(e);
                      }),
                    ];
                  } catch (e) {
                    throw new Error(
                      "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().",
                    );
                  }
                  n.label = 2;
                case 2:
                  return [2, e];
              }
            });
          });
        }),
        (e.prototype.dataToGPU = function (e) {
          return this.throwIfDisposed(), qr().readToGPU(this.dataId, e);
        }),
        (e.prototype.dataSync = function () {
          this.throwIfDisposed();
          var e = qr().readSync(this.dataId);
          if ("string" === this.dtype)
            try {
              return e.map(function (e) {
                return Dr(e);
              });
            } catch (e) {
              throw new Error(
                "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().",
              );
            }
          return e;
        }),
        (e.prototype.bytes = function () {
          return a(this, void 0, void 0, function () {
            var e;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.throwIfDisposed(), [4, qr().read(this.dataId)];
                case 1:
                  return (
                    (e = t.sent()),
                    "string" === this.dtype
                      ? [2, e]
                      : [2, new Uint8Array(e.buffer)]
                  );
              }
            });
          });
        }),
        (e.prototype.dispose = function () {
          this.isDisposed ||
            (this.kerasMask && this.kerasMask.dispose(),
            qr().disposeTensor(this),
            (this.isDisposedInternal = !0));
        }),
        Object.defineProperty(e.prototype, "isDisposed", {
          get: function () {
            return this.isDisposedInternal;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.throwIfDisposed = function () {
          if (this.isDisposed) throw new Error("Tensor is disposed.");
        }),
        (e.prototype.print = function (e) {
          return void 0 === e && (e = !1), Kr.print(this, e);
        }),
        (e.prototype.clone = function () {
          return this.throwIfDisposed(), Kr.clone(this);
        }),
        (e.prototype.toString = function (e) {
          return (
            void 0 === e && (e = !1),
            Or(this.dataSync(), this.shape, this.dtype, e)
          );
        }),
        (e.prototype.cast = function (e) {
          return this.throwIfDisposed(), Kr.cast(this, e);
        }),
        (e.prototype.variable = function (e, t, n) {
          return (
            void 0 === e && (e = !0),
            this.throwIfDisposed(),
            qr().makeVariable(this, e, t, n)
          );
        }),
        e
      );
    })();
    function Hr() {
      return X("Tensor", function () {
        return Vr;
      });
    }
    Object.defineProperty(Vr, Symbol.hasInstance, {
      value: function (e) {
        return (
          !!e && null != e.data && null != e.dataSync && null != e.throwIfDisposed
        );
      },
    }),
      Hr();
    var jr,
      Jr,
      Zr,
      Yr,
      Xr,
      Qr = (function (e) {
        function t(t, n, r, a) {
          var o = e.call(this, t.shape, t.dtype, t.dataId, a) || this;
          return (o.trainable = n), (o.name = r), o;
        }
        return (
          r(t, e),
          (t.prototype.assign = function (e) {
            if (e.dtype !== this.dtype)
              throw new Error(
                "dtype of the new value (".concat(e.dtype, ") and ") +
                  "previous value (".concat(this.dtype, ") must match"),
              );
            if (!w(e.shape, this.shape))
              throw new Error(
                "shape of the new value (".concat(e.shape, ") and ") +
                  "previous value (".concat(this.shape, ") must match"),
              );
            qr().disposeTensor(this),
              (this.dataId = e.dataId),
              qr().incRef(this, null);
          }),
          (t.prototype.dispose = function () {
            qr().disposeVariable(this), (this.isDisposedInternal = !0);
          }),
          t
        );
      })(Vr);
    Object.defineProperty(Qr, Symbol.hasInstance, {
      value: function (e) {
        return (
          e instanceof Vr && null != e.assign && e.assign instanceof Function
        );
      },
    }),
      (e.Rank = void 0),
      ((jr = e.Rank || (e.Rank = {})).R0 = "R0"),
      (jr.R1 = "R1"),
      (jr.R2 = "R2"),
      (jr.R3 = "R3"),
      (jr.R4 = "R4"),
      (jr.R5 = "R5"),
      (jr.R6 = "R6"),
      (function (e) {
        (e.float32 = "float32"),
          (e.int32 = "int32"),
          (e.bool = "int32"),
          (e.complex64 = "complex64");
      })(Jr || (Jr = {})),
      (function (e) {
        (e.float32 = "float32"),
          (e.int32 = "int32"),
          (e.bool = "bool"),
          (e.complex64 = "complex64");
      })(Zr || (Zr = {})),
      (function (e) {
        (e.float32 = "float32"),
          (e.int32 = "float32"),
          (e.bool = "float32"),
          (e.complex64 = "complex64");
      })(Yr || (Yr = {})),
      (function (e) {
        (e.float32 = "complex64"),
          (e.int32 = "complex64"),
          (e.bool = "complex64"),
          (e.complex64 = "complex64");
      })(Xr || (Xr = {}));
    var $r = { float32: Yr, int32: Jr, bool: Zr, complex64: Xr };
    function ea(e, t) {
      if ("string" === e || "string" === t) {
        if ("string" === e && "string" === t) return "string";
        throw new Error("Can not upcast ".concat(e, " with ").concat(t));
      }
      return $r[e][t];
    }
    function ta(e) {
      return (
        null != e &&
        "object" == typeof e &&
        "texture" in e &&
        e.texture instanceof WebGLTexture
      );
    }
    function na(e) {
      return (
        "undefined" != typeof GPUBuffer &&
        null != e &&
        "object" == typeof e &&
        "buffer" in e &&
        e.buffer instanceof GPUBuffer
      );
    }
    function ra(e, t) {
      if (e.dtype === t.dtype) return [e, t];
      var n = ea(e.dtype, t.dtype);
      return [e.cast(n), t.cast(n)];
    }
    function aa(e, t) {
      g(e.dtype === t.dtype, function () {
        return (
          "The dtypes of the first(".concat(e.dtype, ") and") +
          " second(".concat(t.dtype, ") input must match")
        );
      });
    }
    function oa(e) {
      var t = [];
      return ia(e, t, new Set()), t;
    }
    function ia(e, t, n) {
      if (null != e)
        if (e instanceof Vr) t.push(e);
        else if (((r = e), Array.isArray(r) || "object" == typeof r)) {
          var r,
            a = e;
          for (var o in a) {
            var i = a[o];
            n.has(i) || (n.add(i), ia(i, t, n));
          }
        }
    }
    var sa = {
      __proto__: null,
      assertTypesMatch: aa,
      getTensorsInContainer: oa,
      isTensorInList: function (e, t) {
        return t.some(function (t) {
          return t.id === e.id;
        });
      },
      makeTypesMatch: ra,
    };
    function ua(e) {
      return null != e.kernelName;
    }
    var ca = (function () {
        function e() {
          (this.registeredVariables = {}),
            (this.nextTapeNodeId = 0),
            (this.numBytes = 0),
            (this.numTensors = 0),
            (this.numStringTensors = 0),
            (this.numDataBuffers = 0),
            (this.gradientDepth = 0),
            (this.kernelDepth = 0),
            (this.scopeStack = []),
            (this.numDataMovesStack = []),
            (this.nextScopeId = 0),
            (this.tensorInfo = new WeakMap()),
            (this.profiling = !1),
            (this.activeProfile = {
              newBytes: 0,
              newTensors: 0,
              peakBytes: 0,
              kernels: [],
              result: null,
              get kernelNames() {
                return Array.from(
                  new Set(
                    this.kernels.map(function (e) {
                      return e.name;
                    }),
                  ),
                );
              },
            });
        }
        return (
          (e.prototype.dispose = function () {
            for (var e in this.registeredVariables)
              this.registeredVariables[e].dispose();
          }),
          e
        );
      })(),
      la = (function () {
        function e(e) {
          (this.ENV = e),
            (this.registry = {}),
            (this.registryFactory = {}),
            (this.pendingBackendInitId = 0),
            (this.state = new ca());
        }
        return (
          (e.prototype.ready = function () {
            return a(this, void 0, void 0, function () {
              var e, t, n;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (null != this.pendingBackendInit)
                      return [2, this.pendingBackendInit.then(function () {})];
                    if (null != this.backendInstance) return [2];
                    (e = this.getSortedBackends()), (t = 0), (r.label = 1);
                  case 1:
                    return t < e.length
                      ? ((n = e[t]), [4, this.initializeBackend(n).success])
                      : [3, 5];
                  case 2:
                    return r.sent() ? [4, this.setBackend(n)] : [3, 4];
                  case 3:
                    return r.sent(), [2];
                  case 4:
                    return t++, [3, 1];
                  case 5:
                    throw new Error(
                      "Could not initialize any backends, all backend initializations failed.",
                    );
                }
              });
            });
          }),
          Object.defineProperty(e.prototype, "backend", {
            get: function () {
              if (null != this.pendingBackendInit)
                throw new Error(
                  "Backend '".concat(
                    this.backendName,
                    "' has not yet been initialized. Make ",
                  ) +
                    "sure to await tf.ready() or await tf.setBackend() before calling other methods",
                );
              if (null == this.backendInstance) {
                var e = this.initializeBackendsAndReturnBest(),
                  t = e.name;
                if (e.asyncInit)
                  throw new Error(
                    "The highest priority backend '".concat(
                      t,
                      "' has not yet been ",
                    ) +
                      "initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods",
                  );
                this.setBackend(t);
              }
              return this.backendInstance;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.backendNames = function () {
            return Object.keys(this.registryFactory);
          }),
          (e.prototype.findBackend = function (e) {
            if (!(e in this.registry)) {
              if (!(e in this.registryFactory)) return null;
              if (this.initializeBackend(e).asyncInit) return null;
            }
            return this.registry[e];
          }),
          (e.prototype.findBackendFactory = function (e) {
            return e in this.registryFactory
              ? this.registryFactory[e].factory
              : null;
          }),
          (e.prototype.registerBackend = function (e, t, n) {
            return (
              void 0 === n && (n = 1),
              e in this.registryFactory
                ? (Bn(
                    "".concat(e, " backend was already registered. ") +
                      "Reusing existing backend factory.",
                  ),
                  !1)
                : ((this.registryFactory[e] = { factory: t, priority: n }), !0)
            );
          }),
          (e.prototype.setBackend = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n, r;
              return o(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (null == this.registryFactory[e])
                      throw new Error(
                        "Backend name '".concat(e, "' not found in registry"),
                      );
                    return (
                      (this.backendName = e),
                      null != this.registry[e]
                        ? [3, 4]
                        : ((this.backendInstance = null),
                          (t = this.initializeBackend(e)),
                          (n = t.success),
                          t.asyncInit ? [4, n] : [3, 2])
                    );
                  case 1:
                    return (r = a.sent()), [3, 3];
                  case 2:
                    (r = n), (a.label = 3);
                  case 3:
                    if (!r) return [2, !1];
                    a.label = 4;
                  case 4:
                    return (
                      (this.backendInstance = this.registry[e]),
                      this.setupRegisteredKernels(),
                      (this.profiler = new Cr(this.backendInstance)),
                      [2, !0]
                    );
                }
              });
            });
          }),
          (e.prototype.setupRegisteredKernels = function () {
            var e = this;
            Ln(this.backendName).forEach(function (t) {
              null != t.setupFunc && t.setupFunc(e.backendInstance);
            });
          }),
          (e.prototype.disposeRegisteredKernels = function (e) {
            var t = this;
            Ln(e).forEach(function (n) {
              null != n.disposeFunc && n.disposeFunc(t.registry[e]);
            });
          }),
          (e.prototype.initializeBackend = function (e) {
            var t = this,
              n = this.registryFactory[e];
            if (null == n)
              throw new Error(
                "Cannot initialize backend ".concat(
                  e,
                  ", no registration found.",
                ),
              );
            try {
              var r = n.factory();
              if (!r || r instanceof l || "function" != typeof r.then)
                return (this.registry[e] = r), { success: !0, asyncInit: !1 };
              var a = ++this.pendingBackendInitId,
                o = r
                  .then(function (n) {
                    return (
                      !(a < t.pendingBackendInitId) &&
                      ((t.registry[e] = n), (t.pendingBackendInit = null), !0)
                    );
                  })
                  .catch(function (n) {
                    return (
                      a < t.pendingBackendInitId ||
                        ((t.pendingBackendInit = null),
                        Bn("Initialization of backend ".concat(e, " failed")),
                        Bn(n.stack || n.message)),
                      !1
                    );
                  });
              return (this.pendingBackendInit = o), { success: o, asyncInit: !0 };
            } catch (t) {
              return (
                Bn("Initialization of backend ".concat(e, " failed")),
                Bn(t.stack || t.message),
                { success: !1, asyncInit: !1 }
              );
            }
          }),
          (e.prototype.removeBackend = function (e) {
            if (!(e in this.registryFactory))
              throw new Error("".concat(e, " backend not found in registry"));
            this.backendName === e &&
              null != this.pendingBackendInit &&
              this.pendingBackendInitId++,
              e in this.registry &&
                (this.disposeRegisteredKernels(e),
                this.registry[e].dispose(),
                delete this.registry[e]),
              delete this.registryFactory[e],
              this.backendName === e &&
                ((this.pendingBackendInit = null),
                (this.backendName = null),
                (this.backendInstance = null));
          }),
          (e.prototype.getSortedBackends = function () {
            var e = this;
            if (0 === Object.keys(this.registryFactory).length)
              throw new Error("No backend found in registry.");
            return Object.keys(this.registryFactory).sort(function (t, n) {
              return (
                e.registryFactory[n].priority - e.registryFactory[t].priority
              );
            });
          }),
          (e.prototype.initializeBackendsAndReturnBest = function () {
            for (var e = this.getSortedBackends(), t = 0; t < e.length; t++) {
              var n = e[t],
                r = this.initializeBackend(n),
                a = r.success,
                o = r.asyncInit;
              if (o || a) return { name: n, asyncInit: o };
            }
            throw new Error(
              "Could not initialize any backends, all backend initializations failed.",
            );
          }),
          (e.prototype.moveData = function (e, t) {
            var n = this.state.tensorInfo.get(t),
              r = n.backend,
              a = this.readSync(t),
              o = r.refCount(t);
            r.disposeData(t, !0),
              (n.backend = e),
              e.move(t, a, n.shape, n.dtype, o),
              this.shouldCheckForMemLeaks() &&
                this.state.numDataMovesStack[
                  this.state.numDataMovesStack.length - 1
                ]++;
          }),
          (e.prototype.tidy = function (e, t) {
            var n,
              r = this,
              a = null;
            if (null == t) {
              if ("function" != typeof e)
                throw new Error("Please provide a function to tidy()");
              t = e;
            } else {
              if ("string" != typeof e && !(e instanceof String))
                throw new Error(
                  "When calling with two arguments, the first argument to tidy() must be a string",
                );
              if ("function" != typeof t)
                throw new Error(
                  "When calling with two arguments, the 2nd argument to tidy() must be a function",
                );
              a = e;
            }
            return this.scopedRun(
              function () {
                return r.startScope(a);
              },
              function () {
                return r.endScope(n);
              },
              function () {
                return (
                  (n = t()) instanceof Promise &&
                    console.error("Cannot return a Promise inside of tidy."),
                  n
                );
              },
            );
          }),
          (e.prototype.scopedRun = function (e, t, n) {
            e();
            try {
              var r = n();
              return t(), r;
            } catch (e) {
              throw (t(), e);
            }
          }),
          (e.prototype.nextTensorId = function () {
            return e.nextTensorId++;
          }),
          (e.prototype.nextVariableId = function () {
            return e.nextVariableId++;
          }),
          (e.prototype.clone = function (e) {
            var t = da.runKernel($e, { x: e }),
              n = { x: e };
            return (
              this.addTapeNode(
                this.state.activeScope.name,
                n,
                [t],
                function (e) {
                  return {
                    x: function () {
                      var t = { x: e },
                        n = { dtype: "float32" };
                      return da.runKernel(ve, t, n);
                    },
                  };
                },
                [],
                {},
              ),
              t
            );
          }),
          (e.prototype.runKernel = function (e, t, n) {
            if (
              (null == this.backendName && this.backend,
              !(null != Pn(e, this.backendName)))
            )
              throw new Error(
                "Kernel '"
                  .concat(e, "' not registered for backend '")
                  .concat(this.backendName, "'"),
              );
            return this.runKernelFunc({ kernelName: e, inputs: t, attrs: n });
          }),
          (e.prototype.shouldCheckForMemLeaks = function () {
            return this.ENV.getBool("IS_TEST");
          }),
          (e.prototype.checkKernelForMemLeak = function (e, t, n) {
            var r = this.backend.numDataIds(),
              a = 0;
            n.forEach(function (e) {
              a += "complex64" === e.dtype ? 3 : 1;
            });
            var o =
                this.state.numDataMovesStack[
                  this.state.numDataMovesStack.length - 1
                ],
              i = r - t - a - o;
            if (i > 0)
              throw new Error(
                "Backend '".concat(
                  this.backendName,
                  "' has an internal memory leak ",
                ) + "(".concat(i, " data ids) after running '").concat(e, "'"),
              );
          }),
          (e.prototype.runKernelFunc = function (e) {
            var t,
              n,
              r,
              a = this,
              o = [],
              i = this.isTapeOn(),
              s = this.state.numBytes,
              u = this.state.numTensors;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0),
              null == this.backendName && this.backend;
            var c = ua(e)
              ? e.kernelName
              : null != this.state.activeScope
                ? this.state.activeScope.name
                : "";
            if (ua(e)) {
              var l = e.kernelName,
                h = e.inputs,
                f = e.attrs;
              null == this.backendName && this.backend;
              var d = Pn(l, this.backendName);
              g(null != d, function () {
                return "Cannot find registered kernel '"
                  .concat(l, "' for backend '")
                  .concat(a.backendName, "'");
              }),
                (n = function () {
                  var e = a.backend.numDataIds();
                  r = d.kernelFunc({ inputs: h, attrs: f, backend: a.backend });
                  var t = Array.isArray(r) ? r : [r];
                  a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(l, e, t);
                  var n = t.map(function (e) {
                    return null != e.rank ? e : a.makeTensorFromTensorInfo(e);
                  });
                  if (i) {
                    var s = a.getTensorsForGradient(l, h, n);
                    o = a.saveTensorsForBackwardMode(s);
                  }
                  return n;
                });
            } else {
              var p = e.forwardFunc,
                v = function (e) {
                  i &&
                    (o = e.map(function (e) {
                      return a.keep(a.clone(e));
                    }));
                };
              n = function () {
                var e = a.backend.numDataIds();
                r = a.tidy(function () {
                  return p(a.backend, v);
                });
                var t = Array.isArray(r) ? r : [r];
                return (
                  a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(c, e, t),
                  t
                );
              };
            }
            var m,
              y = e.inputs,
              b = e.attrs,
              w = ua(e) ? null : e.backwardsFunc;
            return (
              this.scopedRun(
                function () {
                  return a.state.kernelDepth++;
                },
                function () {
                  return a.state.kernelDepth--;
                },
                function () {
                  a.ENV.getBool("DEBUG") || a.state.profiling
                    ? ((m = a.profiler.profileKernel(c, y, function () {
                        return n();
                      })),
                      a.ENV.getBool("DEBUG") && a.profiler.logKernelProfile(m),
                      (t = m.outputs))
                    : (t = n());
                },
              ),
              i && this.addTapeNode(c, y, t, w, o, b),
              this.state.profiling &&
                this.state.activeProfile.kernels.push({
                  name: c,
                  bytesAdded: this.state.numBytes - s,
                  totalBytesSnapshot: this.state.numBytes,
                  tensorsAdded: this.state.numTensors - u,
                  totalTensorsSnapshot: this.state.numTensors,
                  inputShapes: Object.keys(y).map(function (e) {
                    return null != y[e] ? y[e].shape : null;
                  }),
                  outputShapes: t.map(function (e) {
                    return e.shape;
                  }),
                  kernelTimeMs: m.timeMs,
                  extraInfo: m.extraInfo,
                }),
              Array.isArray(r) ? t : t[0]
            );
          }),
          (e.prototype.saveTensorsForBackwardMode = function (e) {
            var t = this,
              n = e.map(function (e) {
                return t.keep(t.clone(e));
              });
            return n;
          }),
          (e.prototype.getTensorsForGradient = function (e, t, n) {
            var r = On(e);
            if (null != r) {
              var a = r.inputsToSave || [],
                o = r.outputsToSave || [],
                i = void 0;
              r.saveAllInputs
                ? (g(Array.isArray(t), function () {
                    return "saveAllInputs is true, expected inputs to be an array.";
                  }),
                  (i = Object.keys(t).map(function (e) {
                    return t[e];
                  })))
                : (i = a.map(function (e) {
                    return t[e];
                  }));
              var s = n.filter(function (e, t) {
                return o[t];
              });
              return i.concat(s);
            }
            return [];
          }),
          (e.prototype.makeTensor = function (e, t, n, r) {
            if (null == e)
              throw new Error("Values passed to engine.makeTensor() are null");
            (n = n || "float32"), (r = r || this.backend);
            var a = e;
            "string" === n &&
              D(e[0]) &&
              (a = e.map(function (e) {
                return Tr(e);
              }));
            var o = r.write(a, t, n),
              i = new Vr(t, n, o, this.nextTensorId());
            if ((this.trackTensor(i, r), "string" === n)) {
              var s = this.state.tensorInfo.get(o),
                u = T(a);
              (this.state.numBytes += u - s.bytes), (s.bytes = u);
            }
            return i;
          }),
          (e.prototype.makeTensorFromDataId = function (e, t, n, r) {
            var a = { dataId: e, shape: t, dtype: (n = n || "float32") };
            return this.makeTensorFromTensorInfo(a, r);
          }),
          (e.prototype.makeTensorFromTensorInfo = function (e, t) {
            var n = e.dataId,
              r = e.shape,
              a = e.dtype,
              o = new Vr(r, a, n, this.nextTensorId());
            return this.trackTensor(o, t), o;
          }),
          (e.prototype.makeVariable = function (e, t, n, r) {
            void 0 === t && (t = !0),
              (n = n || this.nextVariableId().toString()),
              null != r && r !== e.dtype && (e = e.cast(r));
            var a = new Qr(e, t, n, this.nextTensorId());
            if (null != this.state.registeredVariables[a.name])
              throw new Error(
                "Variable with name ".concat(a.name, " was already registered"),
              );
            return (
              (this.state.registeredVariables[a.name] = a),
              this.incRef(a, this.backend),
              a
            );
          }),
          (e.prototype.trackTensor = function (e, t) {
            this.state.numTensors++,
              "string" === e.dtype && this.state.numStringTensors++;
            var n = 0;
            "complex64" !== e.dtype &&
              "string" !== e.dtype &&
              (n = e.size * M(e.dtype)),
              (this.state.numBytes += n),
              this.state.tensorInfo.has(e.dataId) ||
                (this.state.numDataBuffers++,
                this.state.tensorInfo.set(e.dataId, {
                  backend: t || this.backend,
                  dtype: e.dtype,
                  shape: e.shape,
                  bytes: n,
                })),
              e instanceof Qr || this.track(e);
          }),
          (e.prototype.incRef = function (e, t) {
            this.trackTensor(e, t), this.backend.incRef(e.dataId);
          }),
          (e.prototype.removeDataId = function (e, t) {
            this.state.tensorInfo.has(e) &&
              this.state.tensorInfo.get(e).backend === t &&
              (this.state.tensorInfo.delete(e), this.state.numDataBuffers--);
          }),
          (e.prototype.disposeTensor = function (e) {
            if (this.state.tensorInfo.has(e.dataId)) {
              var t = this.state.tensorInfo.get(e.dataId);
              if (
                (this.state.numTensors--,
                "string" === e.dtype &&
                  (this.state.numStringTensors--,
                  (this.state.numBytes -= t.bytes)),
                "complex64" !== e.dtype && "string" !== e.dtype)
              ) {
                var n = e.size * M(e.dtype);
                this.state.numBytes -= n;
              }
              t.backend.disposeData(e.dataId) &&
                this.removeDataId(e.dataId, t.backend);
            }
          }),
          (e.prototype.disposeVariables = function () {
            for (var e in this.state.registeredVariables) {
              var t = this.state.registeredVariables[e];
              this.disposeVariable(t);
            }
          }),
          (e.prototype.disposeVariable = function (e) {
            this.disposeTensor(e),
              null != this.state.registeredVariables[e.name] &&
                delete this.state.registeredVariables[e.name];
          }),
          (e.prototype.memory = function () {
            var e = this.backend.memory();
            return (
              (e.numTensors = this.state.numTensors),
              (e.numDataBuffers = this.state.numDataBuffers),
              (e.numBytes = this.state.numBytes),
              this.state.numStringTensors > 0 &&
                ((e.unreliable = !0),
                null == e.reasons && (e.reasons = []),
                e.reasons.push(
                  "Memory usage by string tensors is approximate (2 bytes per character)",
                )),
              e
            );
          }),
          (e.prototype.profile = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n, r, a, c, l, h, f, d, p, g;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (this.state.profiling = !0),
                      (t = this.state.numBytes),
                      (n = this.state.numTensors),
                      (this.state.activeProfile.kernels = []),
                      (r = this.state.activeProfile),
                      [4, e()]
                    );
                  case 1:
                    (r.result = o.sent()),
                      (this.state.profiling = !1),
                      (this.state.activeProfile.peakBytes = Math.max.apply(
                        Math,
                        u(
                          [],
                          s(
                            this.state.activeProfile.kernels.map(function (e) {
                              return e.totalBytesSnapshot;
                            }),
                          ),
                          !1,
                        ),
                      )),
                      (this.state.activeProfile.newBytes =
                        this.state.numBytes - t),
                      (this.state.activeProfile.newTensors =
                        this.state.numTensors - n),
                      (o.label = 2);
                  case 2:
                    o.trys.push([2, 8, 9, 10]),
                      (a = i(this.state.activeProfile.kernels)),
                      (c = a.next()),
                      (o.label = 3);
                  case 3:
                    return c.done
                      ? [3, 7]
                      : ((l = c.value), (h = l), [4, l.kernelTimeMs]);
                  case 4:
                    return (h.kernelTimeMs = o.sent()), (f = l), [4, l.extraInfo];
                  case 5:
                    (f.extraInfo = o.sent()), (o.label = 6);
                  case 6:
                    return (c = a.next()), [3, 3];
                  case 7:
                    return [3, 10];
                  case 8:
                    return (d = o.sent()), (p = { error: d }), [3, 10];
                  case 9:
                    try {
                      c && !c.done && (g = a.return) && g.call(a);
                    } finally {
                      if (p) throw p.error;
                    }
                    return [7];
                  case 10:
                    return [2, this.state.activeProfile];
                }
              });
            });
          }),
          (e.prototype.isTapeOn = function () {
            return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
          }),
          (e.prototype.addTapeNode = function (e, t, n, r, a, o) {
            var i = this,
              s = {
                id: this.state.nextTapeNodeId++,
                kernelName: e,
                inputs: t,
                outputs: n,
                saved: a,
              },
              u = On(e);
            null != u && (r = u.gradFunc),
              null != r &&
                (s.gradient = function (e) {
                  return (
                    (e = e.map(function (e, t) {
                      if (null == e) {
                        var r = n[t],
                          a = W(r.size, r.dtype);
                        return i.makeTensor(a, r.shape, r.dtype);
                      }
                      return e;
                    })),
                    r(e.length > 1 ? e : e[0], a, o)
                  );
                }),
              this.state.activeTape.push(s);
          }),
          (e.prototype.keep = function (e) {
            return (e.kept = !0), e;
          }),
          (e.prototype.startTape = function () {
            0 === this.state.gradientDepth && (this.state.activeTape = []),
              this.state.gradientDepth++;
          }),
          (e.prototype.endTape = function () {
            this.state.gradientDepth--;
          }),
          (e.prototype.startScope = function (e) {
            var t = {
              track: [],
              name: "unnamed scope",
              id: this.state.nextScopeId++,
            };
            e && (t.name = e),
              this.state.scopeStack.push(t),
              (this.state.activeScope = t);
          }),
          (e.prototype.endScope = function (e) {
            for (
              var t = this,
                n = oa(e),
                r = new Set(
                  n.map(function (e) {
                    return e.id;
                  }),
                ),
                a = 0;
              a < this.state.activeScope.track.length;
              a++
            ) {
              var o = this.state.activeScope.track[a];
              o.kept || r.has(o.id) || o.dispose();
            }
            var i = this.state.scopeStack.pop();
            (this.state.activeScope =
              0 === this.state.scopeStack.length
                ? null
                : this.state.scopeStack[this.state.scopeStack.length - 1]),
              n.forEach(function (e) {
                e.kept || e.scopeId !== i.id || t.track(e);
              });
          }),
          (e.prototype.gradients = function (e, t, n, r) {
            var a = this;
            if (
              (void 0 === r && (r = !1),
              g(t.length > 0, function () {
                return "gradients() received an empty list of xs.";
              }),
              null != n && "float32" !== n.dtype)
            )
              throw new Error(
                "dy must have 'float32' dtype, but has '".concat(n.dtype, "'"),
              );
            var o = this.scopedRun(
              function () {
                return a.startTape();
              },
              function () {
                return a.endTape();
              },
              function () {
                return a.tidy("forward", e);
              },
            );
            g(o instanceof Vr, function () {
              return "The result y returned by f() must be a tensor.";
            });
            var s = (function (e, t, n) {
              for (var r = {}, a = {}, o = 0; o < t.length; o++) r[t[o].id] = !0;
              for (o = 0; o < e.length; o++) {
                var i = (p = e[o]).inputs;
                for (var s in i) {
                  for (var u = i[s], c = !1, l = 0; l < t.length; l++)
                    if (r[u.id]) {
                      p.outputs.forEach(function (e) {
                        return (r[e.id] = !0);
                      }),
                        (c = !0),
                        (a[p.id] = !0);
                      break;
                    }
                  if (c) break;
                }
              }
              var h = {};
              h[n.id] = !0;
              var f = {};
              for (o = e.length - 1; o >= 0; o--)
                for (i = (p = e[o]).inputs, l = 0; l < p.outputs.length; l++)
                  if (h[p.outputs[l].id]) {
                    for (var s in i) (h[i[s].id] = !0), (f[p.id] = !0);
                    break;
                  }
              var d = [];
              for (o = 0; o < e.length; o++) {
                var p;
                if (a[(p = e[o]).id] && f[p.id]) {
                  var g = {};
                  for (var s in p.inputs) {
                    var v = p.inputs[s];
                    r[v.id] && (g[s] = v);
                  }
                  var m = Object.assign({}, p);
                  (m.inputs = g), (m.outputs = p.outputs), d.push(m);
                }
              }
              return d;
            })(this.state.activeTape, t, o);
            if (!r && 0 === s.length && t.length > 0)
              throw new Error(
                "Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.",
              );
            return this.tidy("backward", function () {
              var e,
                r,
                u = {};
              (u[o.id] =
                null == n
                  ? ((e = o.shape),
                    (r = U(y(e), "float32")),
                    da.makeTensor(r, e, "float32"))
                  : n),
                (function (e, t, n, r) {
                  for (
                    var a = function (a) {
                        var o = t[a],
                          i = [];
                        if (
                          (o.outputs.forEach(function (t) {
                            var n = e[t.id];
                            null != n ? i.push(n) : i.push(null);
                          }),
                          null == o.gradient)
                        )
                          throw new Error(
                            "Cannot compute gradient: gradient function not found " +
                              "for ".concat(o.kernelName, "."),
                          );
                        var s = o.gradient(i),
                          u = function (t) {
                            if (!(t in s))
                              throw new Error(
                                "Cannot backprop through input ".concat(t, ". ") +
                                  "Available gradients found: ".concat(
                                    Object.keys(s),
                                    ".",
                                  ),
                              );
                            var a = n(function () {
                              return s[t]();
                            });
                            if ("float32" !== a.dtype)
                              throw new Error(
                                "Error in gradient for op ".concat(
                                  o.kernelName,
                                  ". The gradient of input ",
                                ) +
                                  ""
                                    .concat(
                                      t,
                                      " must have 'float32' dtype, but has '",
                                    )
                                    .concat(a.dtype, "'"),
                              );
                            var i = o.inputs[t];
                            if (!w(a.shape, i.shape))
                              throw new Error(
                                "Error in gradient for op ".concat(
                                  o.kernelName,
                                  ". The gradient of input ",
                                ) +
                                  "'"
                                    .concat(t, "' has shape '")
                                    .concat(a.shape, "', which does not match ") +
                                  "the shape of the input '".concat(i.shape, "'"),
                              );
                            if (null == e[i.id]) e[i.id] = a;
                            else {
                              var u = e[i.id];
                              (e[i.id] = r(u, a)), u.dispose();
                            }
                          };
                        for (var c in o.inputs) u(c);
                      },
                      o = t.length - 1;
                    o >= 0;
                    o--
                  )
                    a(o);
                })(
                  u,
                  s,
                  function (e) {
                    return a.tidy(e);
                  },
                  pa,
                );
              var c = t.map(function (e) {
                return u[e.id];
              });
              return (
                0 === a.state.gradientDepth &&
                  (a.state.activeTape.forEach(function (e) {
                    var t, n;
                    try {
                      for (
                        var r = i(e.saved), a = r.next();
                        !a.done;
                        a = r.next()
                      ) {
                        a.value.dispose();
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        a && !a.done && (n = r.return) && n.call(r);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                  }),
                  (a.state.activeTape = null)),
                { value: o, grads: c }
              );
            });
          }),
          (e.prototype.customGrad = function (e) {
            var t = this;
            return (
              g(C(e), function () {
                return "The f passed in customGrad(f) must be a function.";
              }),
              function () {
                for (var n, r = [], a = 0; a < arguments.length; a++)
                  r[a] = arguments[a];
                g(
                  r.every(function (e) {
                    return e instanceof Vr;
                  }),
                  function () {
                    return "The args passed in customGrad(f)(x1, x2,...) must all be tensors";
                  },
                );
                var o = {};
                r.forEach(function (e, t) {
                  o[t] = e;
                });
                var i = function (t, a) {
                    return (
                      g(
                        (n = e.apply(
                          void 0,
                          u([], s(u(u([], s(r), !1), [a], !1)), !1),
                        )).value instanceof Vr,
                        function () {
                          return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor";
                        },
                      ),
                      g(C(n.gradFunc), function () {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.";
                      }),
                      n.value
                    );
                  },
                  c = function (e, t) {
                    var a = n.gradFunc(e, t),
                      o = Array.isArray(a) ? a : [a];
                    g(o.length === r.length, function () {
                      return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).";
                    }),
                      g(
                        o.every(function (e) {
                          return e instanceof Vr;
                        }),
                        function () {
                          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.";
                        },
                      );
                    var i = {};
                    return (
                      o.forEach(function (e, t) {
                        i[t] = function () {
                          return e;
                        };
                      }),
                      i
                    );
                  };
                return t.runKernelFunc({
                  forwardFunc: i,
                  backwardsFunc: c,
                  inputs: o,
                });
              }
            );
          }),
          (e.prototype.readSync = function (e) {
            return this.state.tensorInfo.get(e).backend.readSync(e);
          }),
          (e.prototype.read = function (e) {
            return this.state.tensorInfo.get(e).backend.read(e);
          }),
          (e.prototype.readToGPU = function (e, t) {
            return this.state.tensorInfo.get(e).backend.readToGPU(e, t);
          }),
          (e.prototype.time = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (t = Mr()), [4, this.backend.time(e)];
                  case 1:
                    return ((n = r.sent()).wallMs = Mr() - t), [2, n];
                }
              });
            });
          }),
          (e.prototype.track = function (e) {
            return (
              null != this.state.activeScope &&
                ((e.scopeId = this.state.activeScope.id),
                this.state.activeScope.track.push(e)),
              e
            );
          }),
          Object.defineProperty(e.prototype, "registeredVariables", {
            get: function () {
              return this.state.registeredVariables;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.reset = function () {
            for (var e in (this.pendingBackendInitId++,
            this.state.dispose(),
            this.ENV.reset(),
            (this.state = new ca()),
            this.registry))
              this.disposeRegisteredKernels(e),
                this.registry[e].dispose(),
                delete this.registry[e];
            (this.backendName = null),
              (this.backendInstance = null),
              (this.pendingBackendInit = null);
          }),
          e
        );
      })();
    function ha() {
      var t = Y();
      if (null == t._tfengine) {
        var n = new H(t);
        t._tfengine = new la(n);
      }
      return (
        (function (t) {
          e.ENV = t;
        })(t._tfengine.ENV),
        (qr = function () {
          return t._tfengine;
        }),
        t._tfengine
      );
    }
    (la.nextTensorId = 0), (la.nextVariableId = 0);
    var fa,
      da = ha();
    function pa(e, t) {
      var n = { a: e, b: t };
      return da.runKernel(ee, n);
    }
    function ga() {
      return (
        ("undefined" != typeof window && null != window.document) ||
        "undefined" != typeof WorkerGlobalScope
      );
    }
    var va = {
        __proto__: null,
        isBrowser: ga,
        isMobile: function (e) {
          if (void 0 !== fa) return fa;
          if (e || ("undefined" != typeof navigator && null != navigator)) {
            if ((e || (e = navigator), "ReactNative" === e.product)) return !0;
            var t =
              e.userAgent ||
              e.vendor ||
              ("undefined" != typeof window ? window.opera : "");
            if (!t) {
              var n = e;
              return n.userAgentData && n.userAgentData.mobile;
            }
            return (
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                t,
              ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                t.substr(0, 4),
              )
            );
          }
          return !1;
        },
        mockIsMobile: function (e) {
          fa = e;
        },
      },
      ma = Z();
    function ya(e, t) {
      var n = e;
      if (Rr(e)) return "string" === t ? [] : [e.length];
      if (ta(e)) {
        var r = e.channels || "RGBA";
        return [e.height, e.width * r.length];
      }
      if (na(e)) return [e.buffer.size / (null == t ? 4 : M(t))];
      if (!Array.isArray(e)) return [];
      for (var a = []; Array.isArray(n) || (Rr(n) && "string" !== t); )
        a.push(n.length), (n = n[0]);
      return (
        Array.isArray(e) &&
          Z().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") &&
          ba(e, a, []),
        a
      );
    }
    function ba(e, t, n) {
      if (((n = n || []), Array.isArray(e) || Rr(e))) {
        g(t.length > 0, function () {
          return (
            "Element arr[".concat(n.join("]["), "] should be a primitive, ") +
            "but is an array of ".concat(e.length, " elements")
          );
        }),
          g(e.length === t[0], function () {
            return (
              "Element arr["
                .concat(n.join("]["), "] should have ")
                .concat(t[0], " ") +
              "elements, but has ".concat(e.length, " elements")
            );
          });
        for (var r = t.slice(1), a = 0; a < e.length; ++a)
          ba(e[a], r, n.concat(a));
      } else
        g(0 === t.length, function () {
          return (
            "Element arr[".concat(n.join("]["), "] is a primitive, ") +
            "but should be an array/TypedArray of ".concat(t[0], " elements")
          );
        });
    }
    function wa(e, t, n, r) {
      if ("string_or_numeric" !== e) {
        if (null == e) throw new Error("Expected dtype cannot be null.");
        if (("numeric" !== e && e !== t) || ("numeric" === e && "string" === t))
          throw new Error(
            "Argument '".concat(n, "' passed to '").concat(r, "' must ") +
              "be ".concat(e, " tensor, but got ").concat(t, " tensor"),
          );
      }
    }
    function ka(e, t, n, r) {
      if ((void 0 === r && (r = "numeric"), e instanceof Hr()))
        return wa(r, e.dtype, t, n), e;
      var a = F(e);
      if (
        ("string" !== a &&
          ["bool", "int32", "float32"].indexOf(r) >= 0 &&
          (a = r),
        wa(r, a, t, n),
        null == e ||
          (!Rr(e) &&
            !Array.isArray(e) &&
            "number" != typeof e &&
            "boolean" != typeof e &&
            "string" != typeof e))
      ) {
        var o = null == e ? "null" : e.constructor.name;
        throw new Error(
          "Argument '".concat(t, "' passed to '").concat(n, "' must be a ") +
            "Tensor or TensorLike, but got '".concat(o, "'"),
        );
      }
      var i = ya(e, a);
      Rr(e) || Array.isArray(e) || (e = [e]);
      var s = "string" !== a ? Nr(e, a) : Br(e, [], !0);
      return da.makeTensor(s, i, a);
    }
    function xa(e, t, n, r) {
      if ((void 0 === r && (r = "numeric"), !Array.isArray(e)))
        throw new Error(
          "Argument ".concat(t, " passed to ").concat(n, " must be a ") +
            "`Tensor[]` or `TensorLike[]`",
        );
      return e.map(function (e, a) {
        return ka(e, "".concat(t, "[").concat(a, "]"), n, r);
      });
    }
    ma.registerFlag(
      "DEBUG",
      function () {
        return !1;
      },
      function (e) {
        e &&
          console.warn(
            "Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.",
          );
      },
    ),
      ma.registerFlag("IS_BROWSER", function () {
        return ga();
      }),
      ma.registerFlag("IS_NODE", function () {
        return (
          "undefined" != typeof process &&
          "undefined" != typeof process.versions &&
          "undefined" != typeof process.versions.node
        );
      }),
      ma.registerFlag("IS_CHROME", function () {
        return (
          "undefined" != typeof navigator &&
          null != navigator &&
          null != navigator.userAgent &&
          /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor)
        );
      }),
      ma.registerFlag("IS_SAFARI", function () {
        return (
          "undefined" != typeof navigator &&
          null != navigator &&
          null != navigator.userAgent &&
          /Safari/.test(navigator.userAgent) &&
          /Apple/.test(navigator.vendor)
        );
      }),
      ma.registerFlag("PROD", function () {
        return !1;
      }),
      ma.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function () {
        return ma.getBool("DEBUG");
      }),
      ma.registerFlag("DEPRECATION_WARNINGS_ENABLED", function () {
        return !0;
      }),
      ma.registerFlag("IS_TEST", function () {
        return !1;
      }),
      ma.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", function () {
        return ma.getBool("DEBUG");
      }),
      ma.registerFlag("WRAP_TO_IMAGEBITMAP", function () {
        return !1;
      }),
      ma.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU", function () {
        return !1;
      }),
      ma.registerFlag("USE_SETTIMEOUTCUSTOM", function () {
        return !1;
      });
    var Ea = "__op";
    function Sa(e) {
      var t = Object.keys(e);
      if (1 !== t.length)
        throw new Error(
          "Please provide an object with a single key (operation name) mapping to a function. Got an object with " +
            "".concat(t.length, " keys."),
        );
      var n = t[0],
        r = e[n];
      n.endsWith("_") && (n = n.substring(0, n.length - 1)), (n += Ea);
      var a = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        da.startScope(n);
        try {
          var a = r.apply(void 0, u([], s(e), !1));
          return (
            q(a) && console.error("Cannot return a Promise inside of tidy."),
            da.endScope(a),
            a
          );
        } catch (e) {
          throw (da.endScope(null), e);
        }
      };
      return Object.defineProperty(a, "name", { value: n, configurable: !0 }), a;
    }
    var Aa = Sa({
      complex_: function (e, t) {
        var n = ka(e, "real", "complex"),
          r = ka(t, "imag", "complex");
        v(
          n.shape,
          r.shape,
          "real and imag shapes, "
            .concat(n.shape, " and ")
            .concat(r.shape, ", ") + "must match in call to tf.complex().",
        );
        var a = { real: n, imag: r };
        return da.runKernel(be, a);
      },
    });
    function _a(e, t, n, r) {
      if (null == r) r = F(e);
      else if ("complex64" === r)
        throw new Error(
          "Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).",
        );
      if (na(e) || ta(e)) {
        if ("float32" !== r && "int32" !== r)
          throw new Error(
            "Creating tensor from GPU data only supports " +
              "'float32'|'int32' dtype, while the dtype is ".concat(r, "."),
          );
        return da.backend.createTensorFromGPUData(e, t || n, r);
      }
      if (
        !Rr(e) &&
        !Array.isArray(e) &&
        "number" != typeof e &&
        "boolean" != typeof e &&
        "string" != typeof e
      )
        throw new Error(
          "values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray",
        );
      if (null != t) {
        G(t);
        var a = y(t),
          o = y(n);
        g(a === o, function () {
          return (
            "Based on the provided shape, [".concat(
              t,
              "], the tensor should have ",
            ) + "".concat(a, " values but has ").concat(o)
          );
        });
        for (var i = 0; i < n.length; ++i) {
          var s = n[i],
            u = i !== n.length - 1 || s !== y(t.slice(i));
          g(n[i] === t[i] || !u, function () {
            return (
              "Error creating a new Tensor. Inferred shape " +
              "(".concat(n, ") does not match the provided ") +
              "shape (".concat(t, "). ")
            );
          });
        }
      }
      return (
        Rr(e) || Array.isArray(e) || (e = [e]),
        (t = t || n),
        (e = "string" !== r ? Nr(e, r) : Br(e, [], !0)),
        da.makeTensor(e, t, r)
      );
    }
    function Ia(e, t, n) {
      return _a(e, t, ya(e, n), n);
    }
    var Na = {
        float32: 4,
        float16: 2,
        int32: 4,
        uint16: 2,
        uint8: 1,
        bool: 1,
        complex64: 8,
      },
      Ma = (function () {
        function e(e) {
          if (
            ((this.shards = []),
            (this.previousShardIndex = 0),
            null != e &&
              (e instanceof Array || (e = [e]),
              0 !==
                (e = e.map(function (e) {
                  return Rr(e) ? e.buffer : e;
                })).length))
          ) {
            this.bufferUniformSize = e[0].byteLength;
            for (var t = 0, n = 0; n < e.length; n++) {
              var r = e[n];
              n !== e.length - 1 &&
                r.byteLength !== this.bufferUniformSize &&
                (this.bufferUniformSize = void 0);
              var a = t + r.byteLength;
              this.shards.push({ buffer: r, start: t, end: a }), (t = a);
            }
            0 === this.shards.length && (this.byteLength = 0),
              (this.byteLength = this.shards[this.shards.length - 1].end);
          }
        }
        return (
          (e.join = function (t) {
            return new e(t).slice();
          }),
          (e.prototype.slice = function (e, t) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.byteLength),
              0 === this.shards.length)
            )
              return new ArrayBuffer(0);
            if (
              ((e = isNaN(Number(e)) ? 0 : e),
              (t = isNaN(Number(t)) ? 0 : t),
              (e = Math.max(0, e)),
              (t = Math.min(this.byteLength, t)) <= e)
            )
              return new ArrayBuffer(0);
            var n = this.findShardForByte(e);
            if (-1 === n)
              throw new Error("Could not find start shard for byte ".concat(e));
            for (
              var r = new ArrayBuffer(t - e), a = new Uint8Array(r), o = 0, i = n;
              i < this.shards.length;
              i++
            ) {
              var s = this.shards[i],
                u = e + o - s.start,
                c = o,
                l = Math.min(t, s.end) - s.start,
                h = new Uint8Array(s.buffer, u, l - u);
              if ((a.set(h, c), (o += h.length), t < s.end)) break;
            }
            return r;
          }),
          (e.prototype.findShardForByte = function (e) {
            if (0 === this.shards.length || e < 0 || e >= this.byteLength)
              return -1;
            if (null != this.bufferUniformSize)
              return (
                (this.previousShardIndex = Math.floor(
                  e / this.bufferUniformSize,
                )),
                this.previousShardIndex
              );
            function t(t) {
              return e < t.start ? -1 : e >= t.end ? 1 : 0;
            }
            if (0 === t(this.shards[this.previousShardIndex]))
              return this.previousShardIndex;
            var n = (function (e, t) {
              var n = 0,
                r = e.length;
              for (; n <= r; ) {
                var a = Math.floor((r - n) / 2) + n,
                  o = t(e[a]);
                if (0 === o) return a;
                o < 0 ? (r = a) : (n = a + 1);
              }
              return -1;
            })(this.shards, t);
            return -1 === n
              ? -1
              : ((this.previousShardIndex = n), this.previousShardIndex);
          }),
          e
        );
      })();
    function Ta(e, t) {
      return da.tidy(e, t);
    }
    function Da(e) {
      oa(e).forEach(function (e) {
        return e.dispose();
      });
    }
    function Ra(e) {
      return da.keep(e);
    }
    function Ba() {
      return da.backendName;
    }
    function Fa() {
      return da.backend;
    }
    function Ca(e, t) {
      var n,
        r,
        a = new Ma(e),
        o = {},
        s = 0;
      try {
        for (var u = i(t), c = u.next(); !c.done; c = u.next()) {
          var l = c.value,
            h = Pa(l, function (e, t) {
              return a.slice(s + e, s + t);
            });
          (o[l.name] = La(l, a.slice(s, s + h))), (s += h);
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (n) throw n.error;
        }
      }
      return o;
    }
    function Pa(e, t) {
      var n,
        r = y(e.shape);
      if ("quantization" in e) {
        var a = e.quantization;
        n = Na[a.dtype];
      } else {
        if ("string" === e.dtype) {
          for (var o = 0, i = 0; i < r; i++)
            o += 4 + new Uint32Array(t(o, o + 4))[0];
          return o;
        }
        n = Na[e.dtype];
      }
      return r * n;
    }
    function Oa(e, t) {
      return a(this, void 0, void 0, function () {
        var n, r, a, i, s, u, c, l;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                (n = y(e.shape)),
                "quantization" in e
                  ? ((a = e.quantization), (r = Na[a.dtype]), [3, 7])
                  : [3, 1]
              );
            case 1:
              if ("string" !== e.dtype) return [3, 6];
              (i = 0), (s = 0), (o.label = 2);
            case 2:
              return s < n
                ? ((u = i), (c = 4), (l = Uint32Array.bind), [4, t(i, i + 4)])
                : [3, 5];
            case 3:
              (i = u + (c + new (l.apply(Uint32Array, [void 0, o.sent()]))()[0])),
                (o.label = 4);
            case 4:
              return s++, [3, 2];
            case 5:
              return [2, i];
            case 6:
              (r = Na[e.dtype]), (o.label = 7);
            case 7:
              return [2, n * r];
          }
        });
      });
    }
    function La(e, t) {
      var n,
        r,
        a,
        o,
        i = e.name,
        s = e.dtype,
        u = e.shape,
        c = y(u),
        l = 0;
      if ("quantization" in e) {
        var h = e.quantization;
        if ("uint8" === h.dtype || "uint16" === h.dtype) {
          if (!("min" in h) || !("scale" in h))
            throw new Error(
              "Weight "
                .concat(e.name, " with quantization ")
                .concat(h.dtype, " ") +
                "doesn't have corresponding metadata min and scale.",
            );
        } else {
          if ("float16" !== h.dtype)
            throw new Error(
              "Weight ".concat(e.name, " has unknown ") +
                "quantization dtype ".concat(h.dtype, ". ") +
                "Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.",
            );
          if ("float32" !== s)
            throw new Error(
              "Weight "
                .concat(e.name, " is quantized with ")
                .concat(h.dtype, " ") +
                "which only supports weights of type float32 not ".concat(s, "."),
            );
        }
        var f = Na[h.dtype],
          d = "uint8" === h.dtype ? new Uint8Array(t) : new Uint16Array(t);
        if ("float32" === s)
          if ("uint8" === h.dtype || "uint16" === h.dtype) {
            n = new Float32Array(d.length);
            for (var p = 0; p < d.length; p++) {
              var g = d[p];
              n[p] = g * h.scale + h.min;
            }
          } else {
            if ("float16" !== h.dtype)
              throw new Error(
                "Unsupported quantization type ".concat(h.dtype, " ") +
                  "for weight type float32.",
              );
            var v =
              ((r = (function () {
                var e = function (e) {
                    for (var t = e << 13, n = 0; 0 == (8388608 & t); )
                      (n -= 8388608), (t <<= 1);
                    return (t &= -8388609) | (n += 947912704);
                  },
                  t = new Uint32Array(2048);
                t[0] = 0;
                for (var n = 1; n < 1024; n++) t[n] = e(n);
                for (n = 1024; n < 2048; n++)
                  t[n] = 939524096 + ((n - 1024) << 13);
                return t;
              })()),
              (a = (function () {
                var e = new Uint32Array(64);
                (e[0] = 0),
                  (e[31] = 1199570944),
                  (e[32] = 2147483648),
                  (e[63] = 3347054592);
                for (var t = 1; t < 31; t++) e[t] = t << 23;
                for (t = 33; t < 63; t++) e[t] = 2147483648 + ((t - 32) << 23);
                return e;
              })()),
              (o = (function () {
                for (var e = new Uint32Array(64), t = 0; t < 64; t++) e[t] = 1024;
                return (e[0] = e[32] = 0), e;
              })()),
              function (e) {
                for (
                  var t = new ArrayBuffer(4 * e.length),
                    n = new Uint32Array(t),
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var s = e[i],
                    u = r[o[s >> 10] + (1023 & s)] + a[s >> 10];
                  n[i] = u;
                }
                return new Float32Array(t);
              });
            n = v(d);
          }
        else {
          if ("int32" !== s)
            throw new Error(
              "Unsupported dtype in weight '".concat(i, "': ").concat(s),
            );
          if ("uint8" !== h.dtype && "uint16" !== h.dtype)
            throw new Error(
              "Unsupported quantization type ".concat(h.dtype, " ") +
                "for weight type int32.",
            );
          n = new Int32Array(d.length);
          for (p = 0; p < d.length; p++) {
            g = d[p];
            n[p] = Math.round(g * h.scale + h.min);
          }
        }
        l += c * f;
      } else if ("string" === s) {
        var m = y(e.shape);
        n = [];
        for (p = 0; p < m; p++) {
          var b = new Uint32Array(t.slice(l, l + 4))[0];
          l += 4;
          var w = new Uint8Array(t.slice(l, l + b));
          n.push(w), (l += b);
        }
      } else {
        var k = Na[s];
        if ("float32" === s) n = new Float32Array(t);
        else if ("int32" === s) n = new Int32Array(t);
        else {
          if ("bool" !== s) {
            if ("complex64" === s) {
              n = new Float32Array(t);
              var x = new Float32Array(n.length / 2),
                E = new Float32Array(n.length / 2);
              for (p = 0; p < x.length; p++)
                (x[p] = n[2 * p]), (E[p] = n[2 * p + 1]);
              var S = Ia(x, u, "float32"),
                A = Ia(E, u, "float32"),
                _ = Aa(S, A);
              return S.dispose(), A.dispose(), _;
            }
            throw new Error(
              "Unsupported dtype in weight '".concat(i, "': ").concat(s),
            );
          }
          n = new Uint8Array(t);
        }
        l += c * k;
      }
      return Ia(n, u, s);
    }
    function za(e, t, n) {
      return a(this, void 0, void 0, function () {
        var r, a, i, s, u, c;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              (r = new Uint8Array(t)), (o.label = 1);
            case 1:
              return r.byteLength < n ? [4, e.read()] : [3, 3];
            case 2:
              if (((a = o.sent()), (i = a.done), (s = a.value), i && null == s))
                throw (
                  ((u = n - r.byteLength),
                  new Error(
                    "Reader is done but ".concat(u, " bytes are still expected"),
                  ))
                );
              return (
                (c = new Uint8Array(r.length + s.byteLength)).set(r, 0),
                c.set(new Uint8Array(s), r.length),
                (r = c),
                [3, 1]
              );
            case 3:
              return [2, r.buffer];
          }
        });
      });
    }
    function Ua(e) {
      if (null === e)
        throw new Error("Invalid input value: ".concat(JSON.stringify(e)));
      var t = 0,
        n = [];
      e.forEach(function (e) {
        if (
          ((t += e.byteLength),
          n.push(e.byteLength === e.buffer.byteLength ? e : new e.constructor(e)),
          !(
            e instanceof Float32Array ||
            e instanceof Int32Array ||
            e instanceof Uint8Array
          ))
        )
          throw new Error(
            "Unsupported TypedArray subtype: ".concat(e.constructor.name),
          );
      });
      var r = new Uint8Array(t),
        a = 0;
      return (
        n.forEach(function (e) {
          r.set(new Uint8Array(e.buffer), a), (a += e.byteLength);
        }),
        r.buffer
      );
    }
    var Wa =
      "undefined" != typeof Buffer &&
      ("undefined" == typeof Blob ||
        "undefined" == typeof atob ||
        "undefined" == typeof btoa);
    function Ga(e) {
      return Wa ? Buffer.byteLength(e, "utf8") : new Blob([e]).size;
    }
    function qa(e) {
      for (e = e.trim(); e.endsWith("/"); ) e = e.slice(0, e.length - 1);
      var t = e.split("/");
      return t[t.length - 1];
    }
    function Ka(e, t) {
      var n = {
        modelTopology: e.modelTopology,
        format: e.format,
        generatedBy: e.generatedBy,
        convertedBy: e.convertedBy,
        weightsManifest: t,
      };
      return (
        null != e.signature && (n.signature = e.signature),
        null != e.userDefinedMetadata &&
          (n.userDefinedMetadata = e.userDefinedMetadata),
        null != e.modelInitializer && (n.modelInitializer = e.modelInitializer),
        null != e.initializerSignature &&
          (n.initializerSignature = e.initializerSignature),
        null != e.trainingConfig && (n.trainingConfig = e.trainingConfig),
        n
      );
    }
    function Va(e, t, n) {
      var r = {
        modelTopology: e.modelTopology,
        format: e.format,
        generatedBy: e.generatedBy,
        convertedBy: e.convertedBy,
      };
      if (
        (null != e.trainingConfig && (r.trainingConfig = e.trainingConfig),
        null != e.weightsManifest)
      ) {
        if (!t)
          throw new Error(
            "modelJSON has weightsManifest but weightSpecs is null",
          );
        if (!n)
          throw new Error("modelJSON has weightsManifest but weightData is null");
        (r.weightSpecs = t), (r.weightData = n);
      }
      return (
        null != e.signature && (r.signature = e.signature),
        null != e.userDefinedMetadata &&
          (r.userDefinedMetadata = e.userDefinedMetadata),
        null != e.modelInitializer && (r.modelInitializer = e.modelInitializer),
        null != e.initializerSignature &&
          (r.initializerSignature = e.initializerSignature),
        r
      );
    }
    function Ha(e, t) {
      return a(this, void 0, void 0, function () {
        var n, r, a;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return null == e.weightsManifest
                ? [3, 2]
                : [4, t(e.weightsManifest)];
            case 1:
              (a = s.apply(void 0, [o.sent(), 2])),
                (n = a[0]),
                (r = a[1]),
                (o.label = 2);
            case 2:
              return [2, Va(e, n, r)];
          }
        });
      });
    }
    function ja(e) {
      if (e.modelTopology instanceof ArrayBuffer)
        throw new Error("Expected JSON model topology, received ArrayBuffer.");
      return {
        dateSaved: new Date(),
        modelTopologyType: "JSON",
        modelTopologyBytes:
          null == e.modelTopology ? 0 : Ga(JSON.stringify(e.modelTopology)),
        weightSpecsBytes:
          null == e.weightSpecs ? 0 : Ga(JSON.stringify(e.weightSpecs)),
        weightDataBytes:
          null == e.weightData ? 0 : new Ma(e.weightData).byteLength,
      };
    }
    function Ja(e) {
      var t,
        n,
        r = [];
      try {
        for (var a = i(e), o = a.next(); !o.done; o = a.next()) {
          var c = o.value;
          r.push.apply(r, u([], s(c.weights), !1));
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    }
    var Za = (function () {
        function e() {
          (this.saveRouters = []), (this.loadRouters = []);
        }
        return (
          (e.getInstance = function () {
            return null == e.instance && (e.instance = new e()), e.instance;
          }),
          (e.registerSaveRouter = function (t) {
            e.getInstance().saveRouters.push(t);
          }),
          (e.registerLoadRouter = function (t) {
            e.getInstance().loadRouters.push(t);
          }),
          (e.getSaveHandlers = function (t) {
            return e.getHandlers(t, "save");
          }),
          (e.getLoadHandlers = function (t, n) {
            return e.getHandlers(t, "load", n);
          }),
          (e.getHandlers = function (t, n, r) {
            var a = [];
            return (
              ("load" === n
                ? e.getInstance().loadRouters
                : e.getInstance().saveRouters
              ).forEach(function (e) {
                var n = e(t, r);
                null !== n && a.push(n);
              }),
              a
            );
          }),
          e
        );
      })(),
      Ya = "tensorflowjs",
      Xa = "models_store",
      Qa = "model_info_store";
    function $a() {
      if (!Z().getBool("IS_BROWSER"))
        throw new Error(
          "Failed to obtain IndexedDB factory because the current environmentis not a web browser.",
        );
      var e = "undefined" == typeof window ? self : window,
        t =
          e.indexedDB ||
          e.mozIndexedDB ||
          e.webkitIndexedDB ||
          e.msIndexedDB ||
          e.shimIndexedDB;
      if (null == t)
        throw new Error(
          "The current browser does not appear to support IndexedDB.",
        );
      return t;
    }
    function eo(e) {
      var t = e.result;
      t.createObjectStore(Xa, { keyPath: "modelPath" }),
        t.createObjectStore(Qa, { keyPath: "modelPath" });
    }
    var to = (function () {
      function e(e) {
        if (((this.indexedDB = $a()), null == e || !e))
          throw new Error(
            "For IndexedDB, modelPath must not be null, undefined or empty.",
          );
        this.modelPath = e;
      }
      return (
        (e.prototype.save = function (e) {
          return a(this, void 0, void 0, function () {
            return o(this, function (t) {
              if (e.modelTopology instanceof ArrayBuffer)
                throw new Error(
                  "BrowserLocalStorage.save() does not support saving model topology in binary formats yet.",
                );
              return [2, this.databaseAction(this.modelPath, e)];
            });
          });
        }),
        (e.prototype.load = function () {
          return a(this, void 0, void 0, function () {
            return o(this, function (e) {
              return [2, this.databaseAction(this.modelPath)];
            });
          });
        }),
        (e.prototype.databaseAction = function (e, t) {
          var n = this;
          return new Promise(function (e, r) {
            var a = n.indexedDB.open(Ya, 1);
            (a.onupgradeneeded = function () {
              return eo(a);
            }),
              (a.onsuccess = function () {
                var o = a.result;
                if (null == t) {
                  var i = o.transaction(Xa, "readonly"),
                    s = i.objectStore(Xa).get(n.modelPath);
                  (s.onsuccess = function () {
                    if (null == s.result)
                      return (
                        o.close(),
                        r(
                          new Error(
                            "Cannot find model with path '".concat(
                              n.modelPath,
                              "' ",
                            ) + "in IndexedDB.",
                          ),
                        )
                      );
                    e(s.result.modelArtifacts);
                  }),
                    (s.onerror = function (e) {
                      return o.close(), r(s.error);
                    }),
                    (i.oncomplete = function () {
                      return o.close();
                    });
                } else {
                  t.weightData = Ma.join(t.weightData);
                  var u,
                    c,
                    l = ja(t),
                    h = o.transaction(Qa, "readwrite"),
                    f = h.objectStore(Qa);
                  try {
                    u = f.put({ modelPath: n.modelPath, modelArtifactsInfo: l });
                  } catch (e) {
                    return r(e);
                  }
                  (u.onsuccess = function () {
                    var a,
                      i = (c = o.transaction(Xa, "readwrite")).objectStore(Xa);
                    try {
                      a = i.put({
                        modelPath: n.modelPath,
                        modelArtifacts: t,
                        modelArtifactsInfo: l,
                      });
                    } catch (e) {
                      return r(e);
                    }
                    (a.onsuccess = function () {
                      return e({ modelArtifactsInfo: l });
                    }),
                      (a.onerror = function (e) {
                        var t = (f = h.objectStore(Qa)).delete(n.modelPath);
                        (t.onsuccess = function () {
                          return o.close(), r(a.error);
                        }),
                          (t.onerror = function (e) {
                            return o.close(), r(a.error);
                          });
                      });
                  }),
                    (u.onerror = function (e) {
                      return o.close(), r(u.error);
                    }),
                    (h.oncomplete = function () {
                      null == c
                        ? o.close()
                        : (c.oncomplete = function () {
                            return o.close();
                          });
                    });
                }
              }),
              (a.onerror = function (e) {
                return r(a.error);
              });
          });
        }),
        e
      );
    })();
    to.URL_SCHEME = "indexeddb://";
    var no = function (e) {
      return Z().getBool("IS_BROWSER") &&
        !Array.isArray(e) &&
        e.startsWith(to.URL_SCHEME)
        ? ((t = e.slice(to.URL_SCHEME.length)), new to(t))
        : null;
      var t;
    };
    Za.registerSaveRouter(no), Za.registerLoadRouter(no);
    var ro = (function () {
        function e() {
          this.indexedDB = $a();
        }
        return (
          (e.prototype.listModels = function () {
            return a(this, void 0, void 0, function () {
              var e = this;
              return o(this, function (t) {
                return [
                  2,
                  new Promise(function (t, n) {
                    var r = e.indexedDB.open(Ya, 1);
                    (r.onupgradeneeded = function () {
                      return eo(r);
                    }),
                      (r.onsuccess = function () {
                        var e = r.result,
                          a = e.transaction(Qa, "readonly"),
                          o = a.objectStore(Qa).getAll();
                        (o.onsuccess = function () {
                          var e,
                            n,
                            r = {};
                          try {
                            for (
                              var a = i(o.result), s = a.next();
                              !s.done;
                              s = a.next()
                            ) {
                              var u = s.value;
                              r[u.modelPath] = u.modelArtifactsInfo;
                            }
                          } catch (t) {
                            e = { error: t };
                          } finally {
                            try {
                              s && !s.done && (n = a.return) && n.call(a);
                            } finally {
                              if (e) throw e.error;
                            }
                          }
                          t(r);
                        }),
                          (o.onerror = function (t) {
                            return e.close(), n(o.error);
                          }),
                          (a.oncomplete = function () {
                            return e.close();
                          });
                      }),
                      (r.onerror = function (e) {
                        return n(r.error);
                      });
                  }),
                ];
              });
            });
          }),
          (e.prototype.removeModel = function (e) {
            return a(this, void 0, void 0, function () {
              var t = this;
              return o(this, function (n) {
                var r;
                return (
                  (e = (r = e).startsWith(to.URL_SCHEME)
                    ? r.slice(to.URL_SCHEME.length)
                    : r),
                  [
                    2,
                    new Promise(function (n, r) {
                      var a = t.indexedDB.open(Ya, 1);
                      (a.onupgradeneeded = function () {
                        return eo(a);
                      }),
                        (a.onsuccess = function () {
                          var t,
                            o = a.result,
                            i = o.transaction(Qa, "readwrite"),
                            s = i.objectStore(Qa),
                            u = s.get(e);
                          (u.onsuccess = function () {
                            if (null == u.result)
                              return (
                                o.close(),
                                r(
                                  new Error(
                                    "Cannot find model with path '".concat(
                                      e,
                                      "' ",
                                    ) + "in IndexedDB.",
                                  ),
                                )
                              );
                            var a = s.delete(e),
                              i = function () {
                                var a = (t = o.transaction(Xa, "readwrite"))
                                  .objectStore(Xa)
                                  .delete(e);
                                (a.onsuccess = function () {
                                  return n(u.result.modelArtifactsInfo);
                                }),
                                  (a.onerror = function (e) {
                                    return r(u.error);
                                  });
                              };
                            (a.onsuccess = i),
                              (a.onerror = function (e) {
                                return i(), o.close(), r(u.error);
                              });
                          }),
                            (u.onerror = function (e) {
                              return o.close(), r(u.error);
                            }),
                            (i.oncomplete = function () {
                              null == t
                                ? o.close()
                                : (t.oncomplete = function () {
                                    return o.close();
                                  });
                            });
                        }),
                        (a.onerror = function (e) {
                          return r(a.error);
                        });
                    }),
                  ]
                );
              });
            });
          }),
          e
        );
      })(),
      ao = "/",
      oo = "tensorflowjs_models",
      io = "info",
      so = "model_topology",
      uo = "weight_specs",
      co = "weight_data",
      lo = "model_metadata";
    function ho(e) {
      return {
        info: [oo, e, io].join(ao),
        topology: [oo, e, so].join(ao),
        weightSpecs: [oo, e, uo].join(ao),
        weightData: [oo, e, co].join(ao),
        modelMetadata: [oo, e, lo].join(ao),
      };
    }
    function fo(e) {
      var t, n;
      try {
        for (var r = i(Object.values(e)), a = r.next(); !a.done; a = r.next()) {
          var o = a.value;
          window.localStorage.removeItem(o);
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          a && !a.done && (n = r.return) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }
    function po(e) {
      var t = e.split(ao);
      if (t.length < 3) throw new Error("Invalid key format: ".concat(e));
      return t.slice(1, t.length - 1).join(ao);
    }
    var go = (function () {
      function e(e) {
        if (
          !Z().getBool("IS_BROWSER") ||
          "undefined" == typeof window ||
          "undefined" == typeof window.localStorage
        )
          throw new Error(
            "The current environment does not support local storage.",
          );
        if (((this.LS = window.localStorage), null == e || !e))
          throw new Error(
            "For local storage, modelPath must not be null, undefined or empty.",
          );
        (this.modelPath = e), (this.keys = ho(this.modelPath));
      }
      return (
        (e.prototype.save = function (e) {
          return a(this, void 0, void 0, function () {
            var t, n, r, a, i;
            return o(this, function (o) {
              if (e.modelTopology instanceof ArrayBuffer)
                throw new Error(
                  "BrowserLocalStorage.save() does not support saving model topology in binary formats yet.",
                );
              (t = JSON.stringify(e.modelTopology)),
                (n = JSON.stringify(e.weightSpecs)),
                (r = ja(e)),
                (a = Ma.join(e.weightData));
              try {
                return (
                  this.LS.setItem(this.keys.info, JSON.stringify(r)),
                  this.LS.setItem(this.keys.topology, t),
                  this.LS.setItem(this.keys.weightSpecs, n),
                  this.LS.setItem(
                    this.keys.weightData,
                    (function (e) {
                      if (Wa) return Buffer.from(e).toString("base64");
                      for (
                        var t = new Uint8Array(e), n = "", r = 0, a = t.length;
                        r < a;
                        r++
                      )
                        n += String.fromCharCode(t[r]);
                      return btoa(n);
                    })(a),
                  ),
                  (i = {
                    format: e.format,
                    generatedBy: e.generatedBy,
                    convertedBy: e.convertedBy,
                    signature: null != e.signature ? e.signature : void 0,
                    userDefinedMetadata:
                      null != e.userDefinedMetadata
                        ? e.userDefinedMetadata
                        : void 0,
                    modelInitializer:
                      null != e.modelInitializer ? e.modelInitializer : void 0,
                    initializerSignature:
                      null != e.initializerSignature
                        ? e.initializerSignature
                        : void 0,
                    trainingConfig:
                      null != e.trainingConfig ? e.trainingConfig : void 0,
                  }),
                  this.LS.setItem(this.keys.modelMetadata, JSON.stringify(i)),
                  [2, { modelArtifactsInfo: r }]
                );
              } catch (e) {
                throw (
                  (fo(this.keys),
                  new Error(
                    "Failed to save model '".concat(
                      this.modelPath,
                      "' to local storage: ",
                    ) +
                      "size quota being exceeded is a possible cause of this failure: " +
                      "modelTopologyBytes=".concat(r.modelTopologyBytes, ", ") +
                      "weightSpecsBytes=".concat(r.weightSpecsBytes, ", ") +
                      "weightDataBytes=".concat(r.weightDataBytes, "."),
                  ))
                );
              }
              return [2];
            });
          });
        }),
        (e.prototype.load = function () {
          return a(this, void 0, void 0, function () {
            var e, t, n, r, a, i, s;
            return o(this, function (o) {
              if (null == (e = JSON.parse(this.LS.getItem(this.keys.info))))
                throw new Error(
                  "In local storage, there is no model with name '".concat(
                    this.modelPath,
                    "'",
                  ),
                );
              if ("JSON" !== e.modelTopologyType)
                throw new Error(
                  "BrowserLocalStorage does not support loading non-JSON model topology yet.",
                );
              if (
                ((t = {}),
                null == (n = JSON.parse(this.LS.getItem(this.keys.topology))))
              )
                throw new Error(
                  "In local storage, the topology of model '".concat(
                    this.modelPath,
                    "' ",
                  ) + "is missing.",
                );
              if (
                ((t.modelTopology = n),
                null == (r = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
              )
                throw new Error(
                  "In local storage, the weight specs of model '".concat(
                    this.modelPath,
                    "' ",
                  ) + "are missing.",
                );
              if (
                ((t.weightSpecs = r),
                null != (a = this.LS.getItem(this.keys.modelMetadata)) &&
                  ((i = JSON.parse(a)),
                  (t.format = i.format),
                  (t.generatedBy = i.generatedBy),
                  (t.convertedBy = i.convertedBy),
                  null != i.signature && (t.signature = i.signature),
                  null != i.userDefinedMetadata &&
                    (t.userDefinedMetadata = i.userDefinedMetadata),
                  null != i.modelInitializer &&
                    (t.modelInitializer = i.modelInitializer),
                  null != i.initializerSignature &&
                    (t.initializerSignature = i.initializerSignature),
                  null != i.trainingConfig &&
                    (t.trainingConfig = i.trainingConfig)),
                null == (s = this.LS.getItem(this.keys.weightData)))
              )
                throw new Error(
                  "In local storage, the binary weight values of model " +
                    "'".concat(this.modelPath, "' are missing."),
                );
              return (
                (t.weightData = (function (e) {
                  if (Wa) {
                    var t = Buffer.from(e, "base64");
                    return t.buffer.slice(
                      t.byteOffset,
                      t.byteOffset + t.byteLength,
                    );
                  }
                  for (
                    var n = atob(e), r = new Uint8Array(n.length), a = 0;
                    a < n.length;
                    ++a
                  )
                    r.set([n.charCodeAt(a)], a);
                  return r.buffer;
                })(s)),
                [2, t]
              );
            });
          });
        }),
        e
      );
    })();
    go.URL_SCHEME = "localstorage://";
    var vo = function (e) {
      return Z().getBool("IS_BROWSER") &&
        !Array.isArray(e) &&
        e.startsWith(go.URL_SCHEME)
        ? ((t = e.slice(go.URL_SCHEME.length)), new go(t))
        : null;
      var t;
    };
    Za.registerSaveRouter(vo), Za.registerLoadRouter(vo);
    var mo = (function () {
        function e() {
          g(Z().getBool("IS_BROWSER"), function () {
            return "Current environment is not a web browser";
          }),
            g(
              "undefined" == typeof window ||
                "undefined" != typeof window.localStorage,
              function () {
                return "Current browser does not appear to support localStorage";
              },
            ),
            (this.LS = window.localStorage);
        }
        return (
          (e.prototype.listModels = function () {
            return a(this, void 0, void 0, function () {
              var e, t, n, r, a, i;
              return o(this, function (o) {
                for (
                  e = {}, t = oo + ao, n = ao + io, r = 0;
                  r < this.LS.length;
                  ++r
                )
                  (a = this.LS.key(r)).startsWith(t) &&
                    a.endsWith(n) &&
                    ((i = po(a)), (e[i] = JSON.parse(this.LS.getItem(a))));
                return [2, e];
              });
            });
          }),
          (e.prototype.removeModel = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n;
              return o(this, function (r) {
                var a;
                if (
                  ((e = (a = e).startsWith(go.URL_SCHEME)
                    ? a.slice(go.URL_SCHEME.length)
                    : a),
                  (t = ho(e)),
                  null == this.LS.getItem(t.info))
                )
                  throw new Error("Cannot find model at path '".concat(e, "'"));
                return (n = JSON.parse(this.LS.getItem(t.info))), fo(t), [2, n];
              });
            });
          }),
          e
        );
      })(),
      yo = "://",
      bo = (function () {
        function e() {
          this.managers = {};
        }
        return (
          (e.getInstance = function () {
            return null == e.instance && (e.instance = new e()), e.instance;
          }),
          (e.registerManager = function (t, n) {
            g(null != t, function () {
              return "scheme must not be undefined or null.";
            }),
              t.endsWith(yo) && (t = t.slice(0, t.indexOf(yo))),
              g(t.length > 0, function () {
                return "scheme must not be an empty string.";
              });
            var r = e.getInstance();
            g(null == r.managers[t], function () {
              return "A model store manager is already registered for scheme '".concat(
                t,
                "'.",
              );
            }),
              (r.managers[t] = n);
          }),
          (e.getManager = function (t) {
            var n = e.getInstance().managers[t];
            if (null == n)
              throw new Error(
                "Cannot find model manager for scheme '".concat(t, "'"),
              );
            return n;
          }),
          (e.getSchemes = function () {
            return Object.keys(e.getInstance().managers);
          }),
          e
        );
      })();
    function wo(e) {
      if (-1 === e.indexOf(yo))
        throw new Error(
          "The url string provided does not contain a scheme. Supported schemes are: " +
            "".concat(bo.getSchemes().join(",")),
        );
      return { scheme: e.split(yo)[0], path: e.split(yo)[1] };
    }
    function ko(e, t, n) {
      return (
        void 0 === n && (n = !1),
        a(this, void 0, void 0, function () {
          var r, a, i, s, u, c, l, h, f;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  g(e !== t, function () {
                    return "Old path and new path are the same: '".concat(e, "'");
                  }),
                  g((r = Za.getLoadHandlers(e)).length > 0, function () {
                    return "Copying failed because no load handler is found for source URL ".concat(
                      e,
                      ".",
                    );
                  }),
                  g(r.length < 2, function () {
                    return (
                      "Copying failed because more than one (".concat(
                        r.length,
                        ") ",
                      ) + "load handlers for source URL ".concat(e, ".")
                    );
                  }),
                  (a = r[0]),
                  g((i = Za.getSaveHandlers(t)).length > 0, function () {
                    return (
                      "Copying failed because no save handler is found for destination " +
                      "URL ".concat(t, ".")
                    );
                  }),
                  g(i.length < 2, function () {
                    return (
                      "Copying failed because more than one (".concat(
                        r.length,
                        ") ",
                      ) + "save handlers for destination URL ".concat(t, ".")
                    );
                  }),
                  (s = i[0]),
                  (u = wo(e).scheme),
                  (c = wo(e).path),
                  (l = u === wo(e).scheme),
                  [4, a.load()]
                );
              case 1:
                return (
                  (h = o.sent()),
                  n && l ? [4, bo.getManager(u).removeModel(c)] : [3, 3]
                );
              case 2:
                o.sent(), (o.label = 3);
              case 3:
                return [4, s.save(h)];
              case 4:
                return (
                  (f = o.sent()),
                  !n || l ? [3, 6] : [4, bo.getManager(u).removeModel(c)]
                );
              case 5:
                o.sent(), (o.label = 6);
              case 6:
                return [2, f.modelArtifactsInfo];
            }
          });
        })
      );
    }
    var xo = (function () {
      function e() {
        (this.messageName = "setTimeoutCustom"),
          (this.functionRefs = []),
          (this.handledMessageCount = 0),
          (this.hasEventListener = !1);
      }
      return (
        (e.prototype.fetch = function (e, t) {
          return fetch(e, t);
        }),
        (e.prototype.now = function () {
          return performance.now();
        }),
        (e.prototype.encode = function (e, t) {
          if ("utf-8" !== t && "utf8" !== t)
            throw new Error(
              "Browser's encoder only supports utf-8, but got ".concat(t),
            );
          return (
            null == this.textEncoder && (this.textEncoder = new TextEncoder()),
            this.textEncoder.encode(e)
          );
        }),
        (e.prototype.decode = function (e, t) {
          return new TextDecoder(t).decode(e);
        }),
        (e.prototype.setTimeoutCustom = function (e, t) {
          var n = this;
          "undefined" != typeof window && Z().getBool("USE_SETTIMEOUTCUSTOM")
            ? (this.functionRefs.push(e),
              setTimeout(function () {
                window.postMessage(
                  { name: n.messageName, index: n.functionRefs.length - 1 },
                  "*",
                );
              }, t),
              this.hasEventListener ||
                ((this.hasEventListener = !0),
                window.addEventListener(
                  "message",
                  function (e) {
                    e.source === window &&
                      e.data.name === n.messageName &&
                      (e.stopPropagation(),
                      (0, n.functionRefs[e.data.index])(),
                      n.handledMessageCount++,
                      n.handledMessageCount === n.functionRefs.length &&
                        ((n.functionRefs = []), (n.handledMessageCount = 0)));
                  },
                  !0,
                )))
            : setTimeout(e, t);
        }),
        (e.prototype.isTypedArray = function (e) {
          return Wn(e);
        }),
        e
      );
    })();
    if (Z().get("IS_BROWSER")) {
      Z().setPlatform("browser", new xo());
      try {
        bo.registerManager(go.URL_SCHEME, new mo());
      } catch (e) {}
      try {
        bo.registerManager(to.URL_SCHEME, new ro());
      } catch (e) {}
    }
    var Eo,
      So = function () {
        return require("node-fetch");
      },
      Ao = (function () {
        function e() {
          (this.util = require("util")),
            (this.textEncoder = new this.util.TextEncoder());
        }
        return (
          (e.prototype.fetch = function (e, t) {
            return null != Z().global.fetch
              ? Z().global.fetch(e, t)
              : (null == Eo && (Eo = So()), Eo(e, t));
          }),
          (e.prototype.now = function () {
            var e = process.hrtime();
            return 1e3 * e[0] + e[1] / 1e6;
          }),
          (e.prototype.encode = function (e, t) {
            if ("utf-8" !== t && "utf8" !== t)
              throw new Error(
                "Node built-in encoder only supports utf-8, but got ".concat(t),
              );
            return this.textEncoder.encode(e);
          }),
          (e.prototype.decode = function (e, t) {
            return 0 === e.length ? "" : new this.util.TextDecoder(t).decode(e);
          }),
          (e.prototype.isTypedArray = function (e) {
            return (
              this.util.types.isFloat32Array(e) ||
              this.util.types.isInt32Array(e) ||
              this.util.types.isUint8Array(e) ||
              this.util.types.isUint8ClampedArray(e)
            );
          }),
          e
        );
      })();
    function _o(e, t, n) {
      return (
        void 0 === t && (t = "float32"),
        (t = t || "float32"),
        G(e),
        new Gr(e, t, n)
      );
    }
    Z().get("IS_NODE") &&
      !Z().get("IS_BROWSER") &&
      Z().setPlatform("node", new Ao());
    var Io = Sa({
      cast_: function (e, t) {
        var n = ka(e, "x", "cast");
        if (!N(t)) throw new Error("Failed to cast to unknown dtype ".concat(t));
        if (
          ("string" === t && "string" !== n.dtype) ||
          ("string" !== t && "string" === n.dtype)
        )
          throw new Error("Only strings can be casted to strings");
        var r = { x: n },
          a = { dtype: t };
        return da.runKernel(ve, r, a);
      },
    });
    var No = Sa({
      clone_: function (e) {
        var t = { x: ka(e, "x", "clone", "string_or_numeric") };
        return da.runKernel($e, t);
      },
    });
    function Mo(e, t) {
      void 0 === t && (t = !1), console.log(e.toString(t));
    }
    ha(), (Kr = { buffer: _o, cast: Io, clone: No, print: Mo });
    var To = Sa({
      add_: function (e, t) {
        var n,
          r = ka(e, "a", "add"),
          a = ka(t, "b", "add"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel(ee, o);
      },
    });
    var Do = Sa({
      floorDiv_: function (e, t) {
        var n,
          r = ka(e, "a", "floorDiv"),
          a = ka(t, "b", "floorDiv"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel(je, o);
      },
    });
    var Ro = Sa({
      div_: function (e, t) {
        var n,
          r = ka(e, "a", "div"),
          a = ka(t, "b", "div");
        if (
          ((r = (n = s(ra(r, a), 2))[0]),
          (a = n[1]),
          "int32" === r.dtype && "int32" === a.dtype)
        )
          return Do(r, a);
        var o = { a: r, b: a };
        return da.runKernel(ze, o, {});
      },
    });
    var Bo = Sa({
      mul_: function (e, t) {
        var n,
          r = ka(e, "a", "mul"),
          a = ka(t, "b", "mul"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel(kt, o);
      },
    });
    var Fo = Sa({
      abs_: function (e) {
        var t = ka(e, "x", "abs");
        if ("complex64" === t.dtype) {
          var n = { x: t };
          return da.runKernel(we, n);
        }
        return (n = { x: t }), da.runKernel("Abs", n);
      },
    });
    var Co = Sa({
      acos_: function (e) {
        var t = { x: ka(e, "x", "acos") };
        return da.runKernel(Q, t);
      },
    });
    var Po = Sa({
      acosh_: function (e) {
        var t = { x: ka(e, "x", "acosh") };
        return da.runKernel($, t);
      },
    });
    var Oo = Sa({
      addN_: function (e) {
        g(Array.isArray(e), function () {
          return "The argument passed to tf.addN() must be a list of tensors";
        }),
          g(e.length >= 1, function () {
            return (
              "Must pass at least one tensor to tf.addN(), but got " +
              "".concat(e.length)
            );
          });
        var t = e.map(function (e, t) {
            return ka(e, "tensors".concat(t), "addN");
          }),
          n = t[0];
        t.forEach(function (e) {
          if (e.dtype !== n.dtype)
            throw new Error(
              "All tensors passed to tf.addN() must have the same dtype",
            );
        }),
          t.forEach(function (e) {
            if (!w(e.shape, n.shape))
              throw new Error(
                "All tensors passed to tf.addN() must have the same shape",
              );
          });
        var r = t;
        return da.runKernel(te, r);
      },
    });
    var Lo = Sa({
      all_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = { x: ka(e, "x", "all", "bool") },
          a = { axis: t, keepDims: n };
        return da.runKernel("All", r, a);
      },
    });
    var zo = Sa({
      any_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = { x: ka(e, "x", "any", "bool") },
          a = { axis: t, keepDims: n };
        return da.runKernel("Any", r, a);
      },
    });
    var Uo = Sa({
      argMax_: function (e, t) {
        void 0 === t && (t = 0);
        var n = { x: ka(e, "x", "argMax") },
          r = { axis: t };
        return da.runKernel(ne, n, r);
      },
    });
    var Wo = Sa({
      argMin_: function (e, t) {
        void 0 === t && (t = 0);
        var n = { x: ka(e, "x", "argMin") },
          r = { axis: t };
        return da.runKernel(re, n, r);
      },
    });
    var Go = Sa({
      asin_: function (e) {
        var t = { x: ka(e, "x", "asin") };
        return da.runKernel(ae, t);
      },
    });
    var qo = Sa({
      asinh_: function (e) {
        var t = { x: ka(e, "x", "asinh") };
        return da.runKernel(oe, t);
      },
    });
    var Ko = Sa({
      atan_: function (e) {
        var t = { x: ka(e, "x", "atan") };
        return da.runKernel(ie, t);
      },
    });
    var Vo = Sa({
      atan2_: function (e, t) {
        var n,
          r = ka(e, "a", "atan2"),
          a = ka(t, "b", "atan2"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel(ue, o);
      },
    });
    var Ho = Sa({
      atanh_: function (e) {
        var t = { x: ka(e, "x", "atanh") };
        return da.runKernel(se, t);
      },
    });
    function jo(e, t, n, r, a, o, i) {
      void 0 === i && (i = "channelsLast");
      var u,
        c = s(Xo(t), 2),
        l = c[0],
        h = c[1];
      if ("channelsLast" === i) u = [l, h, e[3], e[3]];
      else {
        if ("channelsFirst" !== i)
          throw new Error("Unknown dataFormat ".concat(i));
        u = [l, h, e[1], e[1]];
      }
      return Jo(e, u, n, r, a, o, !1, i);
    }
    function Jo(e, t, n, r, a, o, i, u) {
      var c, l;
      void 0 === i && (i = !1), void 0 === u && (u = "channelsLast");
      var h = s([-1, -1, -1, -1], 4),
        f = h[0],
        d = h[1],
        p = h[2],
        g = h[3];
      if ("channelsLast" === u)
        (f = (c = s(e, 4))[0]), (d = c[1]), (p = c[2]), (g = c[3]);
      else {
        if ("channelsFirst" !== u)
          throw new Error("Unknown dataFormat ".concat(u));
        (f = (l = s(e, 4))[0]), (g = l[1]), (d = l[2]), (p = l[3]);
      }
      var v,
        m = s(t, 4),
        y = m[0],
        b = m[1],
        w = m[3],
        k = s(Xo(n), 2),
        x = k[0],
        E = k[1],
        S = s(Xo(r), 2),
        A = S[0],
        _ = S[1],
        I = $o(y, A),
        N = $o(b, _),
        M = (function (e, t, n, r, a, o, i, s, u) {
          var c, l, h;
          if ("number" == typeof e) {
            c = {
              top: e,
              bottom: e,
              left: e,
              right: e,
              type: 0 === e ? "VALID" : "NUMBER",
            };
            var f = (function (e, t, n, r, a) {
              null == r && (r = Yo(e, t, n));
              var o = e[0],
                i = e[1],
                s = ei((o - t + 2 * r) / n + 1, a),
                u = ei((i - t + 2 * r) / n + 1, a);
              return [s, u];
            })([t, n], o, r, e, s);
            (l = f[0]), (h = f[1]);
          } else if ("same" === e) {
            (l = Math.ceil(t / r)), (h = Math.ceil(n / a));
            var d = Math.max(0, (l - 1) * r + o - t),
              p = Math.max(0, (h - 1) * a + i - n);
            c = {
              top: (g = Math.floor(d / 2)),
              bottom: (v = d - g),
              left: (m = Math.floor(p / 2)),
              right: (y = p - m),
              type: "SAME",
            };
          } else if ("valid" === e)
            (c = { top: 0, bottom: 0, left: 0, right: 0, type: "VALID" }),
              (l = Math.ceil((t - o + 1) / r)),
              (h = Math.ceil((n - i + 1) / a));
          else {
            if ("object" != typeof e)
              throw Error("Unknown padding parameter: ".concat(e));
            var g, v, m, y;
            (c = {
              top: (g = "channelsLast" === u ? e[1][0] : e[2][0]),
              bottom: (v = "channelsLast" === u ? e[1][1] : e[2][1]),
              left: (m = "channelsLast" === u ? e[2][0] : e[3][0]),
              right: (y = "channelsLast" === u ? e[2][1] : e[3][1]),
              type:
                0 === g && 0 === v && 0 === m && 0 === y ? "VALID" : "EXPLICIT",
            }),
              (l = ei((t - o + g + v) / r + 1, s)),
              (h = ei((n - i + m + y) / a + 1, s));
          }
          return { padInfo: c, outHeight: l, outWidth: h };
        })(a, d, p, x, E, I, N, o, u),
        T = M.padInfo,
        D = M.outHeight,
        R = M.outWidth,
        B = i ? w * g : w;
      return (
        "channelsFirst" === u
          ? (v = [f, B, D, R])
          : "channelsLast" === u && (v = [f, D, R, B]),
        {
          batchSize: f,
          dataFormat: u,
          inHeight: d,
          inWidth: p,
          inChannels: g,
          outHeight: D,
          outWidth: R,
          outChannels: B,
          padInfo: T,
          strideHeight: x,
          strideWidth: E,
          filterHeight: y,
          filterWidth: b,
          effectiveFilterHeight: I,
          effectiveFilterWidth: N,
          dilationHeight: A,
          dilationWidth: _,
          inShape: e,
          outShape: v,
          filterShape: t,
        }
      );
    }
    function Zo(e, t, n, r, a, o, i, u) {
      var c, l;
      void 0 === o && (o = !1), void 0 === i && (i = "channelsLast");
      var h = s([-1, -1, -1, -1, -1], 5),
        f = h[0],
        d = h[1],
        p = h[2],
        g = h[3],
        v = h[4];
      if ("channelsLast" === i)
        (f = (c = s(e, 5))[0]), (d = c[1]), (p = c[2]), (g = c[3]), (v = c[4]);
      else {
        if ("channelsFirst" !== i)
          throw new Error("Unknown dataFormat ".concat(i));
        (f = (l = s(e, 5))[0]), (v = l[1]), (d = l[2]), (p = l[3]), (g = l[4]);
      }
      var m,
        y = s(t, 5),
        b = y[0],
        w = y[1],
        k = y[2],
        x = y[4],
        E = s(Qo(n), 3),
        S = E[0],
        A = E[1],
        _ = E[2],
        I = s(Qo(r), 3),
        N = I[0],
        M = I[1],
        T = I[2],
        D = $o(b, N),
        R = $o(w, M),
        B = $o(k, T),
        F = (function (e, t, n, r, a, o, i, s, u, c, l) {
          var h, f, d, p;
          "valid" === e && (e = 0);
          if ("number" == typeof e) {
            h = {
              top: e,
              bottom: e,
              left: e,
              right: e,
              front: e,
              back: e,
              type: 0 === e ? "VALID" : "NUMBER",
            };
            var g = (function (e, t, n, r, a, o) {
              null == a && (a = Yo(e, t[0], r[0]));
              for (var i = [0, 0, 0, n], s = 0; s < 3; s++)
                e[s] + 2 * a >= t[s] &&
                  (i[s] = ei((e[s] - t[s] + 2 * a) / r[s] + 1, o));
              return i;
            })([t, n, r, 1], [s, u, c], 1, [a, o, i], e, l);
            (f = g[0]), (d = g[1]), (p = g[2]);
          } else {
            if ("same" !== e)
              throw Error("Unknown padding parameter: ".concat(e));
            var v = ((f = Math.ceil(t / a)) - 1) * a + s - t,
              m = ((d = Math.ceil(n / o)) - 1) * o + u - n,
              y = ((p = Math.ceil(r / i)) - 1) * i + c - r,
              b = Math.floor(v / 2),
              w = v - b,
              k = Math.floor(m / 2),
              x = m - k,
              E = Math.floor(y / 2);
            h = {
              top: k,
              bottom: x,
              left: E,
              right: y - E,
              front: b,
              back: w,
              type: "SAME",
            };
          }
          return { padInfo: h, outDepth: f, outHeight: d, outWidth: p };
        })(a, d, p, g, S, A, _, D, R, B, u),
        C = F.padInfo,
        P = F.outDepth,
        O = F.outHeight,
        L = F.outWidth,
        z = o ? x * v : x;
      return (
        "channelsFirst" === i
          ? (m = [f, z, P, O, L])
          : "channelsLast" === i && (m = [f, P, O, L, z]),
        {
          batchSize: f,
          dataFormat: i,
          inDepth: d,
          inHeight: p,
          inWidth: g,
          inChannels: v,
          outDepth: P,
          outHeight: O,
          outWidth: L,
          outChannels: z,
          padInfo: C,
          strideDepth: S,
          strideHeight: A,
          strideWidth: _,
          filterDepth: b,
          filterHeight: w,
          filterWidth: k,
          effectiveFilterDepth: D,
          effectiveFilterHeight: R,
          effectiveFilterWidth: B,
          dilationDepth: N,
          dilationHeight: M,
          dilationWidth: T,
          inShape: e,
          outShape: m,
          filterShape: t,
        }
      );
    }
    function Yo(e, t, n, r) {
      void 0 === r && (r = 1);
      var a = $o(t, r);
      return Math.floor((e[0] * (n - 1) - n + a) / 2);
    }
    function Xo(e) {
      return "number" == typeof e
        ? [e, e, e]
        : 2 === e.length
          ? [e[0], e[1], 1]
          : e;
    }
    function Qo(e) {
      return "number" == typeof e ? [e, e, e] : e;
    }
    function $o(e, t) {
      return t <= 1 ? e : e + (e - 1) * (t - 1);
    }
    function ei(e, t) {
      if (!t) return Math.trunc(e);
      switch (t) {
        case "round":
          return Math.round(e);
        case "ceil":
          return Math.ceil(e);
        case "floor":
          return Math.floor(e);
        default:
          throw new Error("Unknown roundingMode ".concat(t));
      }
    }
    function ti(e) {
      var t = s(Xo(e), 3),
        n = t[0],
        r = t[1],
        a = t[2];
      return 1 === n && 1 === r && 1 === a;
    }
    function ni(e, t) {
      return ti(e) || ti(t);
    }
    function ri(e) {
      return Xo(e).every(function (e) {
        return e > 0;
      });
    }
    function ai(e) {
      if ("NHWC" === e) return "channelsLast";
      if ("NCHW" === e) return "channelsFirst";
      throw new Error("Unknown dataFormat ".concat(e));
    }
    function oi(e, t, n) {
      if (null != n) {
        if ("string" == typeof t)
          throw Error(
            "Error in ".concat(e, ": pad must be an integer when using ") +
              "dimRoundingMode ".concat(n, " but got pad ").concat(t, "."),
          );
        if ("number" == typeof t)
          g(k(t), function () {
            return (
              "Error in ".concat(e, ": pad must be an integer when using ") +
              "dimRoundingMode ".concat(n, " but got pad ").concat(t, ".")
            );
          });
        else {
          if ("object" != typeof t)
            throw Error(
              "Error in ".concat(e, ": Unknown padding parameter: ").concat(t),
            );
          t.forEach(function (t) {
            t.forEach(function (t) {
              g(k(t), function () {
                return (
                  "Error in ".concat(e, ": pad must be an integer when using ") +
                  "dimRoundingMode ".concat(n, " but got pad ").concat(t, ".")
                );
              });
            });
          });
        }
      }
    }
    var ii = Sa({
      reshape_: function (e, t) {
        var n = { x: ka(e, "x", "reshape", "string_or_numeric") },
          r = { shape: t };
        return da.runKernel(zt, n, r);
      },
    });
    var si = Sa({
      avgPool_: function (e, t, n, r, a) {
        var o = ka(e, "x", "avgPool", "float32");
        g(ni(n, 1), function () {
          return (
            "Error in avgPool: Either strides or dilations must be 1. " +
            "Got strides ".concat(n, " and dilations '").concat(1, "'")
          );
        });
        var i = o,
          s = !1;
        3 === o.rank &&
          ((s = !0), (i = ii(o, [1, o.shape[0], o.shape[1], o.shape[2]]))),
          g(4 === i.rank, function () {
            return "Error in avgPool: x must be rank 4 but got rank ".concat(
              i.rank,
              ".",
            );
          }),
          oi("avgPool", r, a);
        var u = { x: i },
          c = { filterSize: t, strides: n, pad: r, dimRoundingMode: a },
          l = da.runKernel(ce, u, c);
        return (
          (l = Io(l, o.dtype)),
          s ? ii(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
        );
      },
    });
    var ui = Sa({
      avgPool3d_: function (e, t, n, r, a, o) {
        void 0 === o && (o = "NDHWC");
        var i = ka(e, "x", "avgPool3d", "float32"),
          s = i,
          u = !1;
        4 === i.rank &&
          ((u = !0),
          (s = ii(i, [1, i.shape[0], i.shape[1], i.shape[2], i.shape[3]]))),
          g(5 === s.rank, function () {
            return "Error in avgPool3d: x must be rank 5 but got rank ".concat(
              s.rank,
              ".",
            );
          }),
          g("NDHWC" === o, function () {
            return (
              "Error in avgPool3d: Only NDHWC is currently supported, " +
              "but got dataFormat of ".concat(o)
            );
          }),
          g(
            ("number" == typeof n && n > 0) ||
              (Array.isArray(n) && n[0] > 0 && n[1] > 0 && n[2] > 0),
            function () {
              return "Error in avgPool3d: Stride must be > 0, but got '".concat(
                n,
                "'",
              );
            },
          ),
          oi("avgPool3d", r, a);
        var c = { x: s },
          l = {
            filterSize: t,
            strides: n,
            pad: r,
            dimRoundingMode: a,
            dataFormat: o,
          },
          h = da.runKernel(le, c, l);
        return (
          (h = Io(h, s.dtype)),
          u ? ii(h, [h.shape[1], h.shape[2], h.shape[3], h.shape[4]]) : h
        );
      },
    });
    var ci = Sa({
      concat_: function (e, t) {
        void 0 === t && (t = 0),
          g(e.length >= 1, function () {
            return "Pass at least one tensor to concat";
          });
        var n = xa(e, "tensors", "concat", "string_or_numeric");
        if (
          ("complex64" === n[0].dtype &&
            n.forEach(function (e) {
              if ("complex64" !== e.dtype)
                throw new Error(
                  "Cannot concatenate complex64 tensors with a tensor\n          with dtype ".concat(
                    e.dtype,
                    ". ",
                  ),
                );
            }),
          1 === n.length)
        )
          return No(n[0]);
        var r = n,
          a = { axis: t };
        return da.runKernel(ke, r, a);
      },
    });
    var li = Sa({
      matMul_: function (e, t, n, r) {
        var a;
        void 0 === n && (n = !1), void 0 === r && (r = !1);
        var o = ka(e, "a", "matMul"),
          i = ka(t, "b", "matMul"),
          u = { a: (o = (a = s(ra(o, i), 2))[0]), b: (i = a[1]) },
          c = { transposeA: n, transposeB: r };
        return da.runKernel(he, u, c);
      },
    });
    var hi = Sa({
      sigmoid_: function (e) {
        var t = { x: ka(e, "x", "sigmoid", "float32") };
        return da.runKernel(en, t);
      },
    });
    var fi = Sa({
      slice_: function (e, t, n) {
        var r = ka(e, "x", "slice", "string_or_numeric");
        if (0 === r.rank) throw new Error("Slicing scalar is not possible");
        var a = { x: r },
          o = { begin: t, size: n };
        return da.runKernel(Xt, a, o);
      },
    });
    var di = Sa({
      tanh_: function (e) {
        var t = { x: ka(e, "x", "tanh", "float32") };
        return da.runKernel(yn, t);
      },
    });
    var pi = Sa({
      basicLSTMCell_: function (e, t, n, r, a, o) {
        var i = ka(e, "forgetBias", "basicLSTMCell"),
          s = ka(t, "lstmKernel", "basicLSTMCell"),
          u = ka(n, "lstmBias", "basicLSTMCell"),
          c = ka(r, "data", "basicLSTMCell"),
          l = ka(a, "c", "basicLSTMCell"),
          h = ka(o, "h", "basicLSTMCell"),
          f = ci([c, h], 1),
          d = li(f, s),
          p = To(d, u),
          g = p.shape[0],
          v = p.shape[1] / 4,
          m = [g, v],
          y = fi(p, [0, 0], m),
          b = fi(p, [0, v], m),
          w = fi(p, [0, 2 * v], m),
          k = fi(p, [0, 3 * v], m),
          x = To(Bo(hi(y), di(b)), Bo(l, hi(To(i, w))));
        return [x, Bo(di(x), hi(k))];
      },
    });
    var gi = Sa({
      batchToSpaceND_: function (e, t, n) {
        var r = ka(e, "x", "batchToSpaceND"),
          a = t.reduce(function (e, t) {
            return e * t;
          });
        g(r.rank >= 1 + t.length, function () {
          return "input rank is "
            .concat(r.rank, " but should be > than blockShape.length ")
            .concat(t.length);
        }),
          g(n.length === t.length, function () {
            return "crops.length is "
              .concat(n.length, " but should be equal to blockShape.length  ")
              .concat(t.length);
          }),
          g(r.shape[0] % a == 0, function () {
            return (
              "input tensor batch is ".concat(
                r.shape[0],
                " but is not divisible by the product of ",
              ) +
              "the elements of blockShape "
                .concat(t.join(" * "), " === ")
                .concat(a)
            );
          });
        var o = { x: r },
          i = { blockShape: t, crops: n };
        return da.runKernel(fe, o, i);
      },
    });
    var vi = Sa({
      batchNorm_: function (e, t, n, r, a, o) {
        null == o && (o = 0.001);
        var i,
          s,
          u = ka(e, "x", "batchNorm"),
          c = ka(t, "mean", "batchNorm"),
          l = ka(n, "variance", "batchNorm");
        null != a && (i = ka(a, "scale", "batchNorm")),
          null != r && (s = ka(r, "offset", "batchNorm")),
          g(c.rank === l.rank, function () {
            return "Batch normalization gradient requires mean and variance to have equal ranks.";
          }),
          g(null == s || c.rank === s.rank, function () {
            return "Batch normalization gradient requires mean and offset to have equal ranks.";
          }),
          g(null == i || c.rank === i.rank, function () {
            return "Batch normalization gradient requires mean and scale to have equal ranks.";
          });
        var h = (function (e) {
            return 0 === e.rank || 1 === e.rank
              ? ii(e, [1, 1, 1, e.size])
              : 2 === e.rank
                ? ii(e, [1, 1, e.shape[0], e.shape[1]])
                : 3 === e.rank
                  ? ii(e, [1, e.shape[0], e.shape[1], e.shape[2]])
                  : e;
          })(u),
          f = { x: h, scale: i, offset: s, mean: c, variance: l },
          d = { varianceEpsilon: o },
          p = da.runKernel(Je, f, d);
        return ii(p, u.shape);
      },
    });
    var mi = Sa({
      batchNorm2d_: function (e, t, n, r, a, o) {
        var i,
          s,
          u = ka(e, "x", "batchNorm"),
          c = ka(t, "mean", "batchNorm"),
          l = ka(n, "variance", "batchNorm");
        return (
          null != a && (i = ka(a, "scale", "batchNorm")),
          null != r && (s = ka(r, "offset", "batchNorm")),
          g(2 === u.rank, function () {
            return (
              "Error in batchNorm2D: x must be rank 2 but got rank " +
              "".concat(u.rank, ".")
            );
          }),
          g(2 === c.rank || 1 === c.rank, function () {
            return (
              "Error in batchNorm2D: mean must be rank 2 or rank 1 but " +
              "got rank ".concat(c.rank, ".")
            );
          }),
          g(2 === l.rank || 1 === l.rank, function () {
            return (
              "Error in batchNorm2D: variance must be rank 2 or rank 1 " +
              "but got rank ".concat(l.rank, ".")
            );
          }),
          null != i &&
            g(2 === i.rank || 1 === i.rank, function () {
              return (
                "Error in batchNorm2D: scale must be rank 2 or rank 1 " +
                "but got rank ".concat(i.rank, ".")
              );
            }),
          null != s &&
            g(2 === s.rank || 1 === s.rank, function () {
              return (
                "Error in batchNorm2D: offset must be rank 2 or rank 1 " +
                "but got rank ".concat(s.rank, ".")
              );
            }),
          vi(u, c, l, s, i, o)
        );
      },
    });
    var yi = Sa({
      batchNorm3d_: function (e, t, n, r, a, o) {
        var i,
          s,
          u = ka(e, "x", "batchNorm"),
          c = ka(t, "mean", "batchNorm"),
          l = ka(n, "variance", "batchNorm");
        return (
          null != a && (i = ka(a, "scale", "batchNorm")),
          null != r && (s = ka(r, "offset", "batchNorm")),
          g(3 === u.rank, function () {
            return (
              "Error in batchNorm3D: x must be rank 3 but got rank " +
              "".concat(u.rank, ".")
            );
          }),
          g(3 === c.rank || 1 === c.rank, function () {
            return (
              "Error in batchNorm3D: mean must be rank 3 or rank 1 but " +
              "got rank ".concat(c.rank, ".")
            );
          }),
          g(3 === l.rank || 1 === l.rank, function () {
            return (
              "Error in batchNorm3D: variance must be rank 3 or rank 1 " +
              "but got rank ".concat(l.rank, ".")
            );
          }),
          null != i &&
            g(3 === i.rank || 1 === i.rank, function () {
              return (
                "Error in batchNorm3D: scale must be rank 3 or rank 1 " +
                "but got rank ".concat(i.rank, ".")
              );
            }),
          null != s &&
            g(3 === s.rank || 1 === s.rank, function () {
              return (
                "Error in batchNorm3D: offset must be rank 3 or rank 1 " +
                "but got rank ".concat(s.rank, ".")
              );
            }),
          vi(u, c, l, s, i, o)
        );
      },
    });
    var bi = Sa({
      batchNorm4d_: function (e, t, n, r, a, o) {
        var i,
          s,
          u = ka(e, "x", "batchNorm"),
          c = ka(t, "mean", "batchNorm"),
          l = ka(n, "variance", "batchNorm");
        return (
          null != a && (i = ka(a, "scale", "batchNorm")),
          null != r && (s = ka(r, "offset", "batchNorm")),
          g(4 === u.rank, function () {
            return (
              "Error in batchNorm4D: x must be rank 4 but got rank " +
              "".concat(u.rank, ".")
            );
          }),
          g(4 === c.rank || 1 === c.rank, function () {
            return (
              "Error in batchNorm4D: mean must be rank 4 or rank 1 but " +
              "got rank ".concat(c.rank, ".")
            );
          }),
          g(4 === l.rank || 1 === l.rank, function () {
            return (
              "Error in batchNorm4D: variance must be rank 4 or rank 1 " +
              "but got rank ".concat(l.rank, ".")
            );
          }),
          null != i &&
            g(4 === i.rank || 1 === i.rank, function () {
              return (
                "Error in batchNorm4D: scale must be rank 4 or rank 1 " +
                "but got rank ".concat(i.rank, ".")
              );
            }),
          null != s &&
            g(4 === s.rank || 1 === s.rank, function () {
              return (
                "Error in batchNorm4D: offset must be rank 4 or rank 1 " +
                "but got rank ".concat(s.rank, ".")
              );
            }),
          vi(u, c, l, s, i, o)
        );
      },
    });
    var wi = Sa({
      bincount_: function (e, t, n) {
        var r = ka(e, "x", "bincount"),
          a = ka(t, "weights", "bincount");
        g("int32" === r.dtype, function () {
          return (
            "Error in bincount: input " +
            "dtype must be int32, but got ".concat(r.dtype)
          );
        }),
          g(n >= 0, function () {
            return "size must be non-negative, but got ".concat(n, ".");
          }),
          g(a.size === r.size || 0 === a.size, function () {
            return (
              "Error in bincount: weights must have the same size as input or" +
              "0-length, but got input shape: ".concat(
                r.shape,
                ", weights shape: ",
              ) +
              "".concat(a.shape, ".")
            );
          });
        var o = { x: r, weights: a },
          i = { size: n };
        return da.runKernel(de, o, i);
      },
    });
    var ki = Sa({
      bitwiseAnd_: function (e, t) {
        var n = ka(e, "x", "bitwiseAnd"),
          r = ka(t, "y", "bitwiseAnd");
        if (!w(n.shape, r.shape))
          throw new Error(
            "BitwiseAnd: Tensors must have the same shape. x: "
              .concat(n.shape, ", y: ")
              .concat(r.shape),
          );
        if ("int32" !== n.dtype || "int32" !== r.dtype)
          throw new Error(
            "BitwiseAnd: Only supports 'int32' values in tensor, found type of x: "
              .concat(n.dtype, " and type of y: ")
              .concat(r.dtype),
          );
        var a = { a: n, b: r };
        return da.runKernel(pe, a);
      },
    });
    var xi = Sa({
      broadcastArgs_: function (e, t) {
        var n = ka(e, "s0", "broadcastArgs", "int32"),
          r = ka(t, "s1", "broadcastArgs", "int32");
        if (1 !== n.rank)
          throw new Error(
            "broadcastArgs(): first input must be a vector (rank=1). " +
              "Has rank ".concat(n.rank),
          );
        if (1 !== r.rank)
          throw new Error(
            "broadcastArgs(): second input must be a vector (rank=1). " +
              "Has rank ".concat(r.rank),
          );
        var a = { s0: n, s1: r };
        return da.runKernel(ge, a);
      },
    });
    var Ei = Sa({
      broadcastTo_: function (e, t) {
        var n = ka(e, "broadcastTo", "x"),
          r = n.shape;
        if ((G(t), t.length < n.rank))
          throw new Error(
            "broadcastTo(): shape.length="
              .concat(t.length, " < input.rank=")
              .concat(n.rank, "."),
          );
        if (t.length > n.rank) {
          for (var a = n.shape.slice(); a.length < t.length; ) a.unshift(1);
          n = ii(n, a);
        }
        for (var o = n.shape, i = Array.from(t), s = t.length - 1; s >= 0; s--)
          if (o[s] === t[s]) i[s] = 1;
          else if (1 !== n.shape[s])
            throw new Error(
              "broadcastTo(): ["
                .concat(r, "] cannot be broadcast to [")
                .concat(t, "]."),
            );
        var u = i
          .map(function (e, t) {
            return e > 1 ? t : -1;
          })
          .filter(function (e) {
            return e >= 0;
          });
        if (0 === u.length) return No(n);
        var c = { x: n },
          l = { reps: i };
        return da.runKernel(bn, c, l);
      },
    });
    var Si = Sa({
      ceil_: function (e) {
        var t = { x: ka(e, "x", "ceil", "float32") };
        return da.runKernel(me, t);
      },
    });
    function Ai(e, t, n) {
      G(e);
      var r = { shape: e, value: t, dtype: (n = n || F(t)) };
      return da.runKernel(Ke, {}, r);
    }
    var _i = Sa({
      clipByValue_: function (e, t, n) {
        var r = ka(e, "x", "clipByValue");
        if (
          (g(t <= n, function () {
            return (
              "Error in clip: min (".concat(t, ") must be ") +
              "less than or equal to max (".concat(n, ").")
            );
          }),
          t === n)
        )
          return Ai(r.shape, t, r.dtype);
        var a = { x: r },
          o = { clipValueMin: t, clipValueMax: n };
        return da.runKernel(ye, a, o);
      },
    });
    var Ii = Sa({
      concat1d_: function (e) {
        return ci(e, 0);
      },
    });
    var Ni = Sa({
      concat2d_: function (e, t) {
        return ci(e, t);
      },
    });
    var Mi = Sa({
      concat3d_: function (e, t) {
        return ci(e, t);
      },
    });
    var Ti = Sa({
      concat4d_: function (e, t) {
        return ci(e, t);
      },
    });
    var Di = Sa({
      conv2d_: function (e, t, n, r, a, o, i) {
        void 0 === a && (a = "NHWC"), void 0 === o && (o = [1, 1]);
        var s = ka(e, "x", "conv2d", "float32"),
          u = ka(t, "filter", "conv2d", "float32"),
          c = s,
          l = !1;
        3 === s.rank &&
          ((l = !0), (c = ii(s, [1, s.shape[0], s.shape[1], s.shape[2]]))),
          g(4 === c.rank, function () {
            return "Error in conv2d: input must be rank 4, but got rank ".concat(
              c.rank,
              ".",
            );
          }),
          g(4 === u.rank, function () {
            return (
              "Error in conv2d: filter must be rank 4, but got rank " +
              "".concat(u.rank, ".")
            );
          }),
          oi("conv2d", r, i);
        var h = "NHWC" === a ? c.shape[3] : c.shape[1];
        g(h === u.shape[2], function () {
          return (
            "Error in conv2d: depth of input (".concat(h, ") must match ") +
            "input depth for filter ".concat(u.shape[2], ".")
          );
        }),
          g(ni(n, o), function () {
            return (
              "Error in conv2D: Either strides or dilations must be 1. " +
              "Got strides ".concat(n, " and dilations '").concat(o, "'")
            );
          }),
          g(ri(o), function () {
            return "Error in conv2D: Dilated rates should be larger than 0.";
          }),
          g(ri(n), function () {
            return "Error in conv2D: Strides should be larger than 0.";
          });
        var f = { x: c, filter: u },
          d = {
            strides: n,
            pad: r,
            dataFormat: a,
            dilations: o,
            dimRoundingMode: i,
          },
          p = da.runKernel(xe, f, d);
        return l ? ii(p, [p.shape[1], p.shape[2], p.shape[3]]) : p;
      },
    });
    var Ri = Sa({
      conv1d_: function (e, t, n, r, a, o, i) {
        void 0 === a && (a = "NWC"), void 0 === o && (o = 1);
        var s = ka(e, "x", "conv1d"),
          u = ka(t, "filter", "conv1d"),
          c = s,
          l = !1;
        2 === s.rank && ((l = !0), (c = ii(s, [1, s.shape[0], s.shape[1]]))),
          g(3 === c.rank, function () {
            return "Error in conv1d: input must be rank 3, but got rank ".concat(
              c.rank,
              ".",
            );
          }),
          g(3 === u.rank, function () {
            return (
              "Error in conv1d: filter must be rank 3, but got rank " +
              "".concat(u.rank, ".")
            );
          }),
          oi("conv1d", r, i),
          g(c.shape[2] === u.shape[1], function () {
            return (
              "Error in conv1d: depth of input (".concat(
                c.shape[2],
                ") must match ",
              ) + "input depth for filter ".concat(u.shape[1], ".")
            );
          }),
          g(ni(n, o), function () {
            return (
              "Error in conv1D: Either stride or dilation must be 1. " +
              "Got stride ".concat(n, " and dilation '").concat(o, "'")
            );
          }),
          g(ri(o), function () {
            return "Error in conv1D: Dilated rates should be larger than 0.";
          }),
          g(ri(n), function () {
            return "Error in conv1D: Stride should be larger than 0.";
          }),
          g("NWC" === a, function () {
            return "Error in conv1d: got dataFormat of ".concat(
              a,
              " but only NWC is currently supported.",
            );
          });
        var h = ii(u, [1, u.shape[0], u.shape[1], u.shape[2]]),
          f = ii(c, [c.shape[0], 1, c.shape[1], c.shape[2]]),
          d = Di(f, h, [1, n], r, "NHWC", [1, o], i);
        return ii(
          d,
          l ? [d.shape[2], d.shape[3]] : [d.shape[0], d.shape[2], d.shape[3]],
        );
      },
    });
    var Bi = Sa({
      conv2DBackpropInput_: function (e, t, n, r, a, o, i) {
        void 0 === o && (o = "NHWC"),
          g(e.length === t.rank, function () {
            return (
              "Length of inShape " +
              "("
                .concat(e.length, ") and rank of dy (")
                .concat(t.rank, ") must match")
            );
          });
        var s = e,
          u = t,
          c = !1;
        3 === t.rank &&
          ((c = !0),
          (u = ii(t, [1, t.shape[0], t.shape[1], t.shape[2]])),
          (s = [1, e[0], e[1], e[2]])),
          g(4 === s.length, function () {
            return (
              "Error in conv2dDerInput: inShape must be length 4, but got length " +
              "".concat(s.length, ".")
            );
          }),
          g(4 === u.rank, function () {
            return (
              "Error in conv2dDerInput: dy must be rank 4, but got " +
              "rank ".concat(u.rank)
            );
          }),
          g(4 === n.rank, function () {
            return (
              "Error in conv2dDerInput: filter must be rank 4, but got " +
              "rank ".concat(n.rank)
            );
          });
        var l = "NHWC" === o ? s[3] : s[1],
          h = "NHWC" === o ? u.shape[3] : u.shape[1];
        g(l === n.shape[2], function () {
          return (
            "Error in conv2dDerInput: depth of input (".concat(l, ") must ") +
            "match input depth for filter ".concat(n.shape[2], ".")
          );
        }),
          g(h === n.shape[3], function () {
            return (
              "Error in conv2dDerInput: depth of output (".concat(h, ") must ") +
              "match output depth for filter ".concat(n.shape[3], ".")
            );
          }),
          oi("conv2dDerInput", a, i);
        var f = { dy: u, filter: n },
          d = {
            strides: r,
            pad: a,
            dataFormat: o,
            dimRoundingMode: i,
            inputShape: s,
          },
          p = da.runKernel(Se, f, d);
        return c ? ii(p, [p.shape[1], p.shape[2], p.shape[3]]) : p;
      },
    });
    var Fi = Sa({
      conv2dTranspose_: function (e, t, n, r, a, o) {
        var i = ka(e, "x", "conv2dTranspose"),
          s = ka(t, "filter", "conv2dTranspose");
        return Bi(n, i, s, r, a, "NHWC", o);
      },
    });
    var Ci = Sa({
      conv3d_: function (e, t, n, r, a, o) {
        void 0 === a && (a = "NDHWC"), void 0 === o && (o = [1, 1, 1]);
        var i = ka(e, "x", "conv3d"),
          s = ka(t, "filter", "conv3d"),
          u = i,
          c = !1;
        4 === i.rank &&
          ((c = !0),
          (u = ii(i, [1, i.shape[0], i.shape[1], i.shape[2], i.shape[3]]))),
          g(5 === u.rank, function () {
            return "Error in conv3d: input must be rank 5, but got rank ".concat(
              u.rank,
              ".",
            );
          }),
          g(5 === s.rank, function () {
            return (
              "Error in conv3d: filter must be rank 5, but got rank " +
              "".concat(s.rank, ".")
            );
          }),
          g(u.shape[4] === s.shape[3], function () {
            return (
              "Error in conv3d: depth of input (".concat(
                u.shape[4],
                ") must match ",
              ) + "input depth for filter ".concat(s.shape[3], ".")
            );
          }),
          g(ni(n, o), function () {
            return (
              "Error in conv3D: Either strides or dilations must be 1. " +
              "Got strides ".concat(n, " and dilations '").concat(o, "'")
            );
          }),
          g("NDHWC" === a, function () {
            return "Error in conv3d: got dataFormat of ".concat(
              a,
              " but only NDHWC is currently supported.",
            );
          }),
          g(ri(o), function () {
            return "Error in conv3D: Dilated rates should be larger than 0.";
          }),
          g(ri(n), function () {
            return "Error in conv3D: Strides should be larger than 0.";
          });
        var l = { x: u, filter: s },
          h = { strides: n, pad: r, dataFormat: a, dilations: o },
          f = da.runKernel(Ae, l, h);
        return c ? ii(f, [f.shape[1], f.shape[2], f.shape[3], f.shape[4]]) : f;
      },
    });
    var Pi = Sa({
      conv3DBackpropInput_: function (e, t, n, r, a) {
        g(e.length === t.rank, function () {
          return (
            "Length of inShape " +
            "("
              .concat(e.length, ") and rank of dy (")
              .concat(t.rank, ") must match")
          );
        });
        var o = e,
          i = t,
          s = !1;
        4 === t.rank &&
          ((s = !0),
          (i = ii(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]])),
          (o = [1, e[0], e[1], e[2], e[3]]));
        var u = o[4],
          c = i.shape[4];
        g(5 === o.length, function () {
          return (
            "Error in conv3dDerInput: inShape must be length 5, but got length " +
            "".concat(o.length, ".")
          );
        }),
          g(5 === i.rank, function () {
            return (
              "Error in conv3dDerInput: dy must be rank 5, but got " +
              "rank ".concat(i.rank)
            );
          }),
          g(5 === n.rank, function () {
            return (
              "Error in conv3dDerInput: filter must be rank 5, but got " +
              "rank ".concat(n.rank)
            );
          }),
          g(u === n.shape[3], function () {
            return (
              "Error in conv3dDerInput: depth of input (".concat(u, ") must ") +
              "match input depth for filter ".concat(n.shape[3], ".")
            );
          }),
          g(c === n.shape[4], function () {
            return (
              "Error in conv3dDerInput: depth of output (".concat(c, ") must ") +
              "match output depth for filter ".concat(n.shape[4], ".")
            );
          });
        var l = { dy: i, filter: n },
          h = { pad: a, strides: r, inputShape: o },
          f = da.runKernel(_e, l, h);
        return s ? ii(f, [f.shape[1], f.shape[2], f.shape[3], f.shape[4]]) : f;
      },
    });
    var Oi = Sa({
      conv3dTranspose_: function (e, t, n, r, a) {
        var o = ka(e, "x", "conv3dTranspose"),
          i = ka(t, "filter", "conv3dTranspose");
        return Pi(n, o, i, r, a);
      },
    });
    var Li = Sa({
      cos_: function (e) {
        var t = { x: ka(e, "x", "cos", "float32") };
        return da.runKernel("Cos", t);
      },
    });
    var zi = Sa({
      cosh_: function (e) {
        var t = { x: ka(e, "x", "cosh", "float32") };
        return da.runKernel(Ie, t);
      },
    });
    var Ui = Sa({
      cumprod_: function (e, t, n, r) {
        void 0 === t && (t = 0),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1);
        var a = { x: ka(e, "x", "cumprod") },
          o = { axis: t, exclusive: n, reverse: r };
        return da.runKernel(Ne, a, o);
      },
    });
    var Wi = Sa({
      cumsum_: function (e, t, n, r) {
        void 0 === t && (t = 0),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1);
        var a = { x: ka(e, "x", "cumsum") },
          o = { axis: t, exclusive: n, reverse: r };
        return da.runKernel(Me, a, o);
      },
    });
    var Gi = Sa({
      denseBincount_: function (e, t, n, r) {
        void 0 === r && (r = !1);
        var a = ka(e, "x", "denseBincount"),
          o = ka(t, "weights", "denseBincount");
        g("int32" === a.dtype, function () {
          return (
            "Error in denseBincount: input " +
            "dtype must be int32, but got ".concat(a.dtype)
          );
        }),
          g(a.rank <= 2, function () {
            return (
              "Error in denseBincount: input must be at most rank 2, but got " +
              "rank ".concat(a.rank, ".")
            );
          }),
          g(n >= 0, function () {
            return "size must be non-negative, but got ".concat(n, ".");
          }),
          g(o.size === a.size || 0 === o.size, function () {
            return (
              "Error in denseBincount: weights must have the same shape as x or " +
              "0-length, but got x shape: ".concat(a.shape, ", weights shape: ") +
              "".concat(o.shape, ".")
            );
          });
        var i = { x: a, weights: o },
          s = { size: n, binaryOutput: r };
        return da.runKernel(De, i, s);
      },
    });
    var qi = Sa({
      depthToSpace_: function (e, t, n) {
        void 0 === n && (n = "NHWC");
        var r = ka(e, "x", "depthToSpace", "float32"),
          a = "NHWC" === n ? r.shape[1] : r.shape[2],
          o = "NHWC" === n ? r.shape[2] : r.shape[3],
          i = "NHWC" === n ? r.shape[3] : r.shape[1];
        g(t > 1, function () {
          return "blockSize should be > 1 for depthToSpace, but was: ".concat(t);
        }),
          g(a * t >= 0, function () {
            return "Negative dimension size caused by overflow when multiplying\n    "
              .concat(a, " and ")
              .concat(t, "  for depthToSpace with input shape\n    ")
              .concat(r.shape);
          }),
          g(o * t >= 0, function () {
            return "Negative dimension size caused by overflow when multiplying\n    "
              .concat(o, " and ")
              .concat(t, " for depthToSpace with input shape\n        ")
              .concat(r.shape);
          }),
          g(i % (t * t) == 0, function () {
            return "Dimension size must be evenly divisible by "
              .concat(t * t, " but is ")
              .concat(i, " for depthToSpace with input shape ")
              .concat(r.shape);
          });
        var s = { x: r },
          u = { blockSize: t, dataFormat: n };
        return da.runKernel(Re, s, u);
      },
    });
    var Ki = Sa({
      depthwiseConv2d_: function (e, t, n, r, a, o, i) {
        void 0 === a && (a = "NHWC"), void 0 === o && (o = [1, 1]);
        var s = ka(e, "x", "depthwiseConv2d", "float32"),
          u = ka(t, "filter", "depthwiseConv2d", "float32"),
          c = s,
          l = !1;
        3 === s.rank &&
          ((l = !0), (c = ii(s, [1, s.shape[0], s.shape[1], s.shape[2]]))),
          g(4 === c.rank, function () {
            return (
              "Error in depthwiseConv2d: input must be rank 4, but got " +
              "rank ".concat(c.rank, ".")
            );
          }),
          g(4 === u.rank, function () {
            return (
              "Error in depthwiseConv2d: filter must be rank 4, but got rank " +
              "".concat(u.rank, ".")
            );
          });
        var h = "NHWC" === a ? c.shape[3] : c.shape[1];
        g(h === u.shape[2], function () {
          return (
            "Error in depthwiseConv2d: number of input channels " +
            "(".concat(h, ") must match the inChannels dimension in ") +
            "filter ".concat(u.shape[2], ".")
          );
        }),
          oi("depthwiseConv2d", r, i);
        var f = { x: c, filter: u },
          d = {
            strides: n,
            pad: r,
            dataFormat: a,
            dilations: o,
            dimRoundingMode: i,
          },
          p = da.runKernel(Be, f, d);
        return l ? ii(p, [p.shape[1], p.shape[2], p.shape[3]]) : p;
      },
    });
    var Vi = Sa({
      diag_: function (e) {
        var t = { x: ka(e, "x", "diag") };
        return da.runKernel(Pe, t);
      },
    });
    var Hi = Sa({
      dilation2d_: function (e, t, n, r, a, o) {
        void 0 === a && (a = [1, 1]), void 0 === o && (o = "NHWC");
        var i = ka(e, "x", "dilation2d"),
          s = ka(t, "filter", "dilation2d");
        g(3 === i.rank || 4 === i.rank, function () {
          return (
            "Error in dilation2d: input must be rank 3 or 4, but got rank " +
            "".concat(i.rank, ".")
          );
        }),
          g(3 === s.rank, function () {
            return (
              "Error in dilation2d: filter must be rank 3, but got rank " +
              "".concat(s.rank, ".")
            );
          }),
          g("NHWC" === o, function () {
            return (
              "Error in dilation2d: Only NHWC is currently supported, " +
              "but got dataFormat of ".concat(o)
            );
          });
        var u = i,
          c = !1;
        3 === i.rank &&
          ((u = ii(i, [1, i.shape[0], i.shape[1], i.shape[2]])), (c = !0)),
          g(u.shape[3] === s.shape[2], function () {
            return "Error in dilation2d:  input and filter must have the same depth: "
              .concat(u.shape[3], " vs ")
              .concat(s.shape[2]);
          });
        var l = { x: u, filter: s },
          h = { strides: n, pad: r, dilations: a },
          f = da.runKernel(Oe, l, h);
        return c ? ii(f, [f.shape[1], f.shape[2], f.shape[3]]) : f;
      },
    });
    function ji(e, t) {
      for (var n = e.length, r = [], a = 0; a < n; a++) {
        var o = n - 1 - a,
          i = e[o] || 1;
        (t[t.length - 1 - a] || 1) > 1 && 1 === i && r.unshift(o);
      }
      return r;
    }
    function Ji(e, t) {
      for (var n = [], r = 0; r < t.length; r++) {
        var a = e[e.length - r - 1],
          o = t.length - r - 1,
          i = t[o];
        (null == a || (1 === a && i > 1)) && n.unshift(o);
      }
      return n;
    }
    function Zi(e, t) {
      for (
        var n = Math.max(e.length, t.length), r = new Array(n), a = 0;
        a < n;
        a++
      ) {
        var o = e[e.length - a - 1];
        null == o && (o = 1);
        var i = t[t.length - a - 1];
        if ((null == i && (i = 1), 1 === o)) r[n - a - 1] = i;
        else if (1 === i) r[n - a - 1] = o;
        else {
          if (o !== i) {
            var s =
              "Operands could not be broadcast together with shapes " +
              "".concat(e, " and ").concat(t, ".");
            throw Error(s);
          }
          r[n - a - 1] = o;
        }
      }
      return r;
    }
    var Yi = {
      __proto__: null,
      assertAndGetBroadcastShape: Zi,
      getBroadcastDims: ji,
      getReductionAxes: Ji,
    };
    var Xi = Sa({
      equal_: function (e, t) {
        var n,
          r = ka(e, "a", "equal", "string_or_numeric"),
          a = ka(t, "b", "equal", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(We, o);
      },
    });
    var Qi = Sa({
      where_: function (e, t, n) {
        var r = ka(t, "a", "where"),
          a = ka(n, "b", "where"),
          o = ka(e, "condition", "where", "bool"),
          i = Zi(Zi(o.shape, r.shape), a.shape),
          s = { condition: Ei(o, i), t: Ei(r, i), e: Ei(a, i) };
        return da.runKernel(Zt, s);
      },
    });
    var $i = Sa({
      zerosLike_: function (e) {
        var t = { x: ka(e, "x", "zerosLike") };
        return da.runKernel(_n, t);
      },
    });
    var es = Sa({
      divNoNan_: function (e, t) {
        var n,
          r = ka(e, "a", "div"),
          a = ka(t, "b", "div");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]);
        var o = Ro(r, a),
          i = $i(o),
          u = Xi(a, i);
        return Qi(u, i, o);
      },
    });
    var ts = Sa({
      dot_: function (e, t) {
        var n = ka(e, "t1", "dot"),
          r = ka(t, "t2", "dot");
        g(
          !((1 !== n.rank && 2 !== n.rank) || (1 !== r.rank && 2 !== r.rank)),
          function () {
            return (
              "Error in dot: inputs must all be rank 1 or 2, but got ranks " +
              "".concat(n.rank, " and ").concat(r.rank, ".")
            );
          },
        );
        var a = 1 === n.rank ? n.size : n.shape[1],
          o = 1 === r.rank ? r.size : r.shape[0];
        if (
          (g(a === o, function () {
            return (
              "Error in dot: inner dimensions of inputs must match, but got " +
              "".concat(a, " and ").concat(o, ".")
            );
          }),
          1 === n.rank && 1 === r.rank)
        ) {
          var i = ii(n, [1, -1]),
            s = ii(r, [-1, 1]),
            u = li(i, s);
          return ii(u, []);
        }
        if (1 === n.rank && 2 === r.rank) {
          (i = ii(n, [1, -1])),
            (s = ii(r, [r.shape[0], r.shape[1]])),
            (u = li(i, s));
          return ii(u, [u.size]);
        }
        if (2 === n.rank && 1 === r.rank) {
          (s = ii(r, [-1, 1])), (u = li(n, s));
          return ii(u, [u.size]);
        }
        return (s = ii(r, [r.shape[0], r.shape[1]])), (u = li(n, s));
      },
    });
    var ns = Sa({
      einsum_: function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = t.map(function (e, t) {
            return ka(e, "tensors".concat(t), "einsum");
          }),
          a = { equation: e };
        return da.runKernel(Ue, r, a);
      },
    });
    var rs = Sa({
      elu_: function (e) {
        var t = { x: ka(e, "x", "elu", "float32") };
        return da.runKernel("Elu", t);
      },
    });
    var as = Sa({
      ensureShape_: function (e, t) {
        var n = ka(e, "x", "ensureShape", "string_or_numeric");
        if (!b(n.shape, t))
          throw new Error(
            "EnsureShape: Shape of tensor "
              .concat(n.shape, " is not compatible with expected shape ")
              .concat(t),
          );
        return e;
      },
    });
    var os = Sa({
      erf_: function (e) {
        var t = ka(e, "x", "erf");
        g("int32" === t.dtype || "float32" === t.dtype, function () {
          return "Input dtype must be `int32` or `float32`.";
        }),
          "int32" === t.dtype && (t = Io(t, "float32"));
        var n = { x: t };
        return da.runKernel("Erf", n);
      },
    });
    function is(e, t) {
      for (var n = 0; n < e.length; ++n)
        if (e[e.length - n - 1] !== t - 1 - n) return !1;
      return !0;
    }
    function ss(e, t, n) {
      for (var r = e.length + t.length, a = [], o = 0, i = 0, s = 0; s < r; s++)
        -1 === n.indexOf(s) ? a.push(e[o++]) : a.push(t[i++]);
      return a;
    }
    function us(e, t) {
      return ss(
        e,
        t.map(function (e) {
          return 1;
        }),
        t,
      );
    }
    var cs = Sa({
      max_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = { x: ka(e, "x", "max") },
          a = { reductionIndices: t, keepDims: n };
        return da.runKernel("Max", r, a);
      },
    });
    var ls = Sa({
      min_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = { x: ka(e, "x", "min") },
          a = { axis: t, keepDims: n };
        return da.runKernel("Min", r, a);
      },
    });
    var hs = Sa({
      pow_: function (e, t) {
        var n,
          r = ka(e, "base", "pow"),
          a = ka(t, "exp", "pow"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel("Pow", o);
      },
    });
    function fs(e, t) {
      if (((Rr(e) && "string" !== t) || Array.isArray(e)) && "complex64" !== t)
        throw new Error(
          "Error creating a new Scalar: value must be a primitive (number|boolean|string)",
        );
      if ("string" === t && Rr(e) && !(e instanceof Uint8Array))
        throw new Error(
          "When making a scalar from encoded string, the value must be `Uint8Array`.",
        );
      return _a(e, [], [], t);
    }
    var ds = Sa({
      sqrt_: function (e) {
        var t = { x: ka(e, "x", "sqrt", "float32") };
        return da.runKernel(nn, t);
      },
    });
    var ps = Sa({
      square_: function (e) {
        var t = ka(e, "x", "square");
        return da.runKernel("Square", { x: t }, {});
      },
    });
    var gs = Sa({
      sum_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = ka(e, "x", "sum");
        "bool" === r.dtype && (r = Io(r, "int32"));
        var a = { x: r },
          o = { axis: t, keepDims: n };
        return da.runKernel("Sum", a, o);
      },
    });
    function vs(e, t, n) {
      if ((void 0 === n && (n = null), 0 === e.rank)) return Fo(e);
      if (1 !== e.rank && null === n) return vs(ii(e, [-1]), t, n);
      if (
        1 === e.rank ||
        "number" == typeof n ||
        (Array.isArray(n) && 1 === n.length)
      ) {
        if (1 === t) return gs(Fo(e), n);
        if (t === 1 / 0) return cs(Fo(e), n);
        if (t === -1 / 0) return ls(Fo(e), n);
        if ("euclidean" === t || 2 === t)
          return ds(gs(hs(Fo(e), fs(2, "int32")), n));
        throw new Error("Error in norm: invalid ord value: ".concat(t));
      }
      if (Array.isArray(n) && 2 === n.length) {
        if (1 === t) return cs(gs(Fo(e), n[0]), n[1] - 1);
        if (t === 1 / 0) return cs(gs(Fo(e), n[1]), n[0]);
        if (t === -1 / 0) return ls(gs(Fo(e), n[1]), n[0]);
        if ("fro" === t || "euclidean" === t) return ds(gs(ps(e), n));
        throw new Error("Error in norm: invalid ord value: ".concat(t));
      }
      throw new Error("Error in norm: invalid axis: ".concat(n));
    }
    var ms = Sa({
      norm_: function (e, t, n, r) {
        void 0 === t && (t = "euclidean"),
          void 0 === n && (n = null),
          void 0 === r && (r = !1);
        var a = vs((e = ka(e, "x", "norm")), t, n),
          o = a.shape;
        if (r) {
          var i = E(n, e.shape);
          o = us(a.shape, i);
        }
        return ii(a, o);
      },
    });
    var ys = Sa({
      euclideanNorm_: function (e, t, n) {
        return (
          void 0 === t && (t = null),
          void 0 === n && (n = !1),
          ms(e, "euclidean", t, n)
        );
      },
    });
    var bs = Sa({
      exp_: function (e) {
        var t = { x: ka(e, "x", "exp") };
        return da.runKernel("Exp", t);
      },
    });
    var ws = Sa({
      expandDims_: function (e, t) {
        void 0 === t && (t = 0);
        var n = ka(e, "x", "expandDims", "string_or_numeric");
        g(t <= n.rank, function () {
          return "Axis must be <= rank of the tensor";
        });
        var r = { input: n },
          a = { dim: t };
        return da.runKernel(Ge, r, a);
      },
    });
    var ks = Sa({
      expm1_: function (e) {
        var t = { x: ka(e, "x", "expm1") };
        return da.runKernel(qe, t);
      },
    });
    var xs = Sa({
      tile_: function (e, t) {
        var n = ka(e, "x", "tile", "string_or_numeric");
        g(n.rank === t.length, function () {
          return (
            "Error in transpose: rank of input ".concat(n.rank, " ") +
            "must match length of reps ".concat(t, ".")
          );
        });
        var r = { x: n },
          a = { reps: t };
        return da.runKernel(bn, r, a);
      },
    });
    var Es = Sa({
      eye_: function (e, t, n, r) {
        void 0 === r && (r = "float32"), null == t && (t = e);
        for (var a = _o([e, t], r), o = e <= t ? e : t, i = 0; i < o; ++i)
          a.set(1, i, i);
        var s = ii(a.toTensor(), [e, t]);
        if (null == n) return s;
        if (1 === n.length) return xs(ws(s, 0), [n[0], 1, 1]);
        if (2 === n.length) return xs(ws(ws(s, 0), 0), [n[0], n[1], 1, 1]);
        if (3 === n.length)
          return xs(ws(ws(ws(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
        throw new Error(
          "eye() currently supports only 1D and 2D " +
            "batchShapes, but received ".concat(n.length, "D."),
        );
      },
    });
    var Ss = Sa({
      floor_: function (e) {
        var t = { x: ka(e, "x", "floor", "float32") };
        return da.runKernel(He, t);
      },
    });
    var As = Sa({
      gather_: function (e, t, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0);
        var a = {
            x: ka(e, "x", "gather"),
            indices: ka(t, "indices", "gather", "int32"),
          },
          o = { axis: n, batchDims: r };
        return da.runKernel(Ze, a, o);
      },
    });
    var _s = Sa({
      greater_: function (e, t) {
        var n,
          r = ka(e, "a", "greater", "string_or_numeric"),
          a = ka(t, "b", "greater", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(Xe, o);
      },
    });
    var Is = Sa({
      greaterEqual_: function (e, t) {
        var n,
          r = ka(e, "a", "greaterEqual", "string_or_numeric"),
          a = ka(t, "b", "greaterEqual", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(Qe, o);
      },
    });
    var Ns = Sa({
      imag_: function (e) {
        var t = { input: ka(e, "input", "imag") };
        return da.runKernel(tt, t);
      },
    });
    var Ms = Sa({
      isFinite_: function (e) {
        var t = { x: ka(e, "x", "isFinite") };
        return da.runKernel(nt, t);
      },
    });
    var Ts = Sa({
      isInf_: function (e) {
        var t = { x: ka(e, "x", "isInf") };
        return da.runKernel(rt, t);
      },
    });
    var Ds = Sa({
      isNaN_: function (e) {
        var t = { x: ka(e, "x", "isNaN") };
        return da.runKernel(at, t);
      },
    });
    var Rs = Sa({
      leakyRelu_: function (e, t) {
        void 0 === t && (t = 0.2);
        var n = { x: ka(e, "x", "leakyRelu") },
          r = { alpha: t };
        return da.runKernel(ot, n, r);
      },
    });
    var Bs = Sa({
      less_: function (e, t) {
        var n,
          r = ka(e, "a", "less", "string_or_numeric"),
          a = ka(t, "b", "less", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(it, o);
      },
    });
    var Fs = Sa({
      lessEqual_: function (e, t) {
        var n,
          r = ka(e, "a", "lessEqual", "string_or_numeric"),
          a = ka(t, "b", "lessEqual", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(st, o);
      },
    });
    var Cs = Sa({
      localResponseNormalization_: function (e, t, n, r, a) {
        void 0 === t && (t = 5),
          void 0 === n && (n = 1),
          void 0 === r && (r = 1),
          void 0 === a && (a = 0.5);
        var o = ka(e, "x", "localResponseNormalization");
        g(4 === o.rank || 3 === o.rank, function () {
          return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ".concat(
            o.rank,
            ".",
          );
        }),
          g(k(t), function () {
            return (
              "Error in localResponseNormalization: depthRadius must be an " +
              "integer but got depthRadius ".concat(t, ".")
            );
          });
        var i = o,
          s = !1;
        3 === o.rank &&
          ((s = !0), (i = ii(o, [1, o.shape[0], o.shape[1], o.shape[2]])));
        var u = { x: i },
          c = { depthRadius: t, bias: n, alpha: r, beta: a },
          l = da.runKernel("LRN", u, c);
        return s ? ii(l, [l.shape[1], l.shape[2], l.shape[3]]) : l;
      },
    });
    var Ps = Sa({
      log_: function (e) {
        var t = { x: ka(e, "x", "log", "float32") };
        return da.runKernel("Log", t);
      },
    });
    var Os = Sa({
      log1p_: function (e) {
        var t = { x: ka(e, "x", "log1p") };
        return da.runKernel(ct, t);
      },
    });
    function Ls(e, t) {
      g(C(e), function () {
        return "The f passed in variableGrads(f) must be a function";
      }),
        g(
          null == t ||
            (Array.isArray(t) &&
              t.every(function (e) {
                return e instanceof Qr;
              })),
          function () {
            return "The varList passed in variableGrads(f, varList) must be an array of variables";
          },
        );
      var n = null != t;
      if (!n)
        for (var r in ((t = []), da.registeredVariables))
          t.push(da.registeredVariables[r]);
      var a = n
          ? t.filter(function (e) {
              return !e.trainable;
            })
          : null,
        o = t.length;
      (t = t.filter(function (e) {
        return e.trainable;
      })),
        g(t.length > 0, function () {
          return (
            "variableGrads() expects at least one of the input variables to " +
            "be trainable, but none of the ".concat(o, " variables is ") +
            "trainable."
          );
        });
      var i = da.gradients(e, t, null, !0),
        s = i.value,
        u = i.grads;
      g(
        u.some(function (e) {
          return null != e;
        }),
        function () {
          return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().";
        },
      ),
        g(0 === s.rank, function () {
          return (
            "The f passed in variableGrads(f) must return a scalar, but it " +
            "returned a rank-".concat(s.rank, " tensor")
          );
        });
      var c = {};
      return (
        t.forEach(function (e, t) {
          null != u[t] && (c[e.name] = u[t]);
        }),
        null != a &&
          a.forEach(function (e) {
            return (c[e.name] = null);
          }),
        { value: s, grads: c }
      );
    }
    function zs(e) {
      return da.customGrad(e);
    }
    function Us(e) {
      if (
        e.filter(function (e) {
          return null == e;
        }).length > 0
      )
        throw new Error(
          "Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.",
        );
    }
    var Ws = Sa({
      neg_: function (e) {
        var t = { x: ka(e, "x", "neg") };
        return da.runKernel("Neg", t);
      },
    });
    var Gs = Sa({
      softplus_: function (e) {
        var t = { x: ka(e, "x", "softplus") };
        return da.runKernel(tn, t);
      },
    });
    var qs = Sa({
      logSigmoid_: function (e) {
        var t = ka(e, "x", "logSigmoid"),
          n = zs(function (e) {
            return {
              value: Ws(Gs(Ws(e))),
              gradFunc: function (t) {
                return Bo(t, hi(Ws(e)));
              },
            };
          });
        return n(t);
      },
    });
    var Ks = Sa({
      sub_: function (e, t) {
        var n,
          r = ka(e, "a", "sub"),
          a = ka(t, "b", "sub"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel("Sub", o);
      },
    });
    var Vs = Sa({
      logSoftmax_: function (e, t) {
        void 0 === t && (t = -1);
        var n = ka(e, "logits", "logSoftmax");
        if ((-1 === t && (t = n.rank - 1), t !== n.rank - 1))
          throw Error(
            "Log Softmax along a non-last dimension is not yet supported. " +
              "Logits was rank ".concat(n.rank, " and axis was ").concat(t),
          );
        var r = zs(function (e, n) {
          var r = cs(e, t, !0),
            a = Ks(e, r),
            o = Ks(Io(a, "float32"), Ps(gs(bs(a), t, !0)));
          n([o]);
          return {
            value: o,
            gradFunc: function (e, n) {
              var r = s(n, 1)[0],
                a = bs(r);
              return Ks(e, Bo(gs(e, t, !0), a));
            },
          };
        });
        return r(n);
      },
    });
    var Hs = Sa({
      logSumExp_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = ka(e, "x", "logSumExp"),
          a = E(t, r.shape),
          o = cs(r, a, !0),
          i = Ks(r, o),
          s = bs(i),
          u = gs(s, a),
          c = Ps(u),
          l = To(ii(o, c.shape), c);
        if (n) {
          var h = us(l.shape, a);
          return ii(l, h);
        }
        return l;
      },
    });
    var js = Sa({
      logicalAnd_: function (e, t) {
        var n = ka(e, "a", "logicalAnd", "bool"),
          r = ka(t, "b", "logicalAnd", "bool");
        Zi(n.shape, r.shape);
        var a = { a: n, b: r };
        return da.runKernel(lt, a);
      },
    });
    var Js = Sa({
      logicalNot_: function (e) {
        var t = { x: ka(e, "x", "logicalNot", "bool") };
        return da.runKernel(ht, t);
      },
    });
    var Zs = Sa({
      logicalOr_: function (e, t) {
        var n = ka(e, "a", "logicalOr", "bool"),
          r = ka(t, "b", "logicalOr", "bool");
        Zi(n.shape, r.shape);
        var a = { a: n, b: r };
        return da.runKernel(ft, a);
      },
    });
    var Ys = Sa({
        logicalXor_: function (e, t) {
          var n = ka(e, "a", "logicalXor", "bool"),
            r = ka(t, "b", "logicalXor", "bool");
          return Zi(n.shape, r.shape), js(Zs(e, t), Js(js(e, t)));
        },
      }),
      Xs = 2147483648;
    var Qs = Sa({
      searchSorted_: function (e, t, n) {
        void 0 === n && (n = "left");
        var r = ka(e, "sortedSequence", "searchSorted"),
          a = ka(t, "values", "searchSorted"),
          o = r.shape[r.shape.length - 1],
          i = a.shape[a.shape.length - 1],
          s = ii(r, [-1, o]),
          u = ii(a, [-1, i]);
        if (s.rank < 2)
          throw new Error("Sorted input argument must be at least 2-dimensional");
        if (s.shape[0] !== u.shape[0])
          throw new Error(
            "Leading dimension of 'sortedSequence' and 'values' must match.",
          );
        if (y(u.shape) >= Xs)
          throw new Error("values tensor size must less than ".concat(Xs));
        if (s.shape[1] >= Xs)
          throw new Error(
            "trailing dim_size must less than "
              .concat(Xs, " for int32 output type, was ")
              .concat(s.shape[1]),
          );
        var c = { sortedSequence: s, values: u },
          l = { side: n };
        return da.runKernel(Jt, c, l);
      },
    });
    var $s = Sa({
      maxPool_: function (e, t, n, r, a) {
        var o = ka(e, "x", "maxPool"),
          i = o,
          s = !1;
        3 === o.rank &&
          ((s = !0), (i = ii(o, [1, o.shape[0], o.shape[1], o.shape[2]]))),
          g(4 === i.rank, function () {
            return "Error in maxPool: input must be rank 4 but got rank ".concat(
              i.rank,
              ".",
            );
          }),
          g(ni(n, 1), function () {
            return (
              "Error in maxPool: Either strides or dilations must be 1. " +
              "Got strides ".concat(n, " and dilations '").concat(1, "'")
            );
          }),
          oi("maxPool", r, a);
        var u = { x: i },
          c = { filterSize: t, strides: n, pad: r, dimRoundingMode: a },
          l = da.runKernel(pt, u, c);
        return s ? ii(l, [l.shape[1], l.shape[2], l.shape[3]]) : l;
      },
    });
    var eu = Sa({
      maxPool3d_: function (e, t, n, r, a, o) {
        void 0 === t && (t = [1, 1, 1]), void 0 === o && (o = "NDHWC");
        var i = ka(e, "x", "maxPool3d"),
          s = i,
          u = !1;
        4 === i.rank &&
          ((u = !0),
          (s = ii(i, [1, i.shape[0], i.shape[1], i.shape[2], i.shape[3]]))),
          g(5 === s.rank, function () {
            return "Error in maxPool3d: x must be rank 5 but got rank ".concat(
              s.rank,
              ".",
            );
          }),
          g("NDHWC" === o, function () {
            return (
              "Error in maxPool3d: Only NDHWC is currently supported, " +
              "but got dataFormat of ".concat(o)
            );
          }),
          oi("maxPool3d", r, a);
        var c = { x: s },
          l = {
            filterSize: t,
            strides: n,
            pad: r,
            dimRoundingMode: a,
            dataFormat: o,
          },
          h = da.runKernel(gt, c, l);
        return u ? ii(h, [h.shape[1], h.shape[2], h.shape[3], h.shape[4]]) : h;
      },
    });
    var tu = Sa({
      maxPoolWithArgmax_: function (e, t, n, r, a) {
        void 0 === a && (a = !1);
        var o = { x: ka(e, "x", "maxPoolWithArgmax") },
          i = { filterSize: t, strides: n, pad: r, includeBatchInIndex: a },
          s = da.runKernel(vt, o, i);
        return { result: s[0], indexes: s[1] };
      },
    });
    var nu = Sa({
      maximum_: function (e, t) {
        var n,
          r = ka(e, "a", "maximum"),
          a = ka(t, "b", "maximum");
        (r = (n = s(ra(r, a), 2))[0]),
          (a = n[1]),
          "bool" === r.dtype && ((r = Io(r, "int32")), (a = Io(a, "int32"))),
          Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(dt, o);
      },
    });
    var ru = Sa({
      mean_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = { x: ka(e, "x", "mean") },
          a = { axis: t, keepDims: n };
        return da.runKernel(mt, r, a);
      },
    });
    function au(e, t) {
      if ((void 0 === t && (t = "float32"), G(e), "complex64" === t)) {
        var n = au(e, "float32"),
          r = au(e, "float32");
        return Aa(n, r);
      }
      var a = W(y(e), t);
      return da.makeTensor(a, e, t);
    }
    function ou(e, t) {
      if ((void 0 === t && (t = "float32"), G(e), "complex64" === t)) {
        var n = ou(e, "float32"),
          r = au(e, "float32");
        return Aa(n, r);
      }
      var a = U(y(e), t);
      return da.makeTensor(a, e, t);
    }
    var iu = Sa({
      minimum_: function (e, t) {
        var n,
          r = ka(e, "a", "minimum"),
          a = ka(t, "b", "minimum");
        (r = (n = s(ra(r, a), 2))[0]),
          (a = n[1]),
          "bool" === r.dtype && ((r = Io(r, "int32")), (a = Io(a, "int32"))),
          Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(yt, o);
      },
    });
    var su = Sa({
      mirrorPad_: function (e, t, n) {
        g("reflect" === n || "symmetric" === n, function () {
          return (
            "Invalid mode. Mode must be either reflect or symmetric. " +
            "Got ".concat(n, ".")
          );
        });
        var r = ka(e, "x", "mirrorPad");
        if (0 === r.rank)
          throw new Error(
            "mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad",
          );
        g(t.length === r.rank, function () {
          return (
            "Padding doesn't match input. Must be ".concat(r.rank, ". ") +
            "Got ".concat(t.length, ".")
          );
        });
        for (
          var a = "reflect" === n ? 1 : 0,
            o = function (e) {
              g(2 === t[e].length, function () {
                return "Invalid number of paddings. Must be length of 2 each.";
              }),
                g(
                  t[e][0] >= 0 &&
                    t[e][0] <= r.shape[e] - a &&
                    t[e][1] >= 0 &&
                    t[e][1] <= r.shape[e] - a,
                  function () {
                    return (
                      "Padding in dimension ".concat(
                        e,
                        " cannot be greater than or equal ",
                      ) +
                      "to ".concat(
                        r.shape[e] - a,
                        " or less than 0 for input of ",
                      ) +
                      "shape ".concat(r.shape)
                    );
                  },
                );
            },
            i = 0;
          i < r.rank;
          i++
        )
          o(i);
        var s = { paddings: t, mode: n },
          u = { x: r };
        return da.runKernel(bt, u, s);
      },
    });
    var uu = Sa({
      mod_: function (e, t) {
        var n,
          r = ka(e, "a", "mod"),
          a = ka(t, "b", "mod"),
          o = { a: (r = (n = s(ra(r, a), 2))[0]), b: (a = n[1]) };
        return da.runKernel("Mod", o);
      },
    });
    var cu = Sa({
      moments_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = E(t, (e = ka(e, "x", "moments")).shape),
          a = ru(e, r, n),
          o = a.shape;
        n || (o = us(a.shape, r));
        var i = ps(Ks(Io(e, "float32"), ii(a, o)));
        return { mean: a, variance: ru(i, r, n) };
      },
    });
    var lu = Sa({
      multiRNNCell_: function (e, t, n, r) {
        for (
          var a = ka(t, "data", "multiRNNCell"),
            o = xa(n, "c", "multiRNNCell"),
            i = xa(r, "h", "multiRNNCell"),
            s = a,
            u = [],
            c = 0;
          c < e.length;
          c++
        ) {
          var l = e[c](s, o[c], i[c]);
          u.push(l[0]), u.push(l[1]), (s = l[1]);
        }
        var h = [],
          f = [];
        for (c = 0; c < u.length; c += 2) h.push(u[c]), f.push(u[c + 1]);
        return [h, f];
      },
    });
    var hu = Sa({
      multinomial_: function (e, t, n, r) {
        void 0 === r && (r = !1);
        var a = ka(e, "logits", "multinomial"),
          o = a.size,
          i = a.rank;
        if (o < 2)
          throw new Error(
            "Error in multinomial: you need at least 2 outcomes, but got " +
              "".concat(o, "."),
          );
        if (i > 2)
          throw new Error(
            "Rank of probabilities must be 1 or 2, but is ".concat(i),
          );
        n = n || Math.random();
        var s = { logits: 1 === i ? ii(a, [1, -1]) : a },
          u = { numSamples: t, seed: n, normalized: r },
          c = da.runKernel(wt, s, u);
        return 1 === i ? ii(c, [c.size]) : c;
      },
    });
    var fu = Sa({
      notEqual_: function (e, t) {
        var n,
          r = ka(e, "a", "notEqual", "string_or_numeric"),
          a = ka(t, "b", "notEqual", "string_or_numeric");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(xt, o);
      },
    });
    var du = Sa({
      oneHot_: function (e, t, n, r, a) {
        if (
          (void 0 === n && (n = 1),
          void 0 === r && (r = 0),
          void 0 === a && (a = "int32"),
          t < 2)
        )
          throw new Error(
            "Error in oneHot: depth must be >=2, but it is ".concat(t),
          );
        var o = { indices: ka(e, "indices", "oneHot", "int32") },
          i = { dtype: a, depth: t, onValue: n, offValue: r };
        return da.runKernel(It, o, i);
      },
    });
    var pu = Sa({
      onesLike_: function (e) {
        var t = { x: ka(e, "x", "onesLike") };
        return da.runKernel(_t, t);
      },
    });
    var gu = Sa({
      outerProduct_: function (e, t) {
        var n = ka(e, "v1", "outerProduct"),
          r = ka(t, "v2", "outerProduct");
        g(1 === n.rank && 1 === r.rank, function () {
          return (
            "Error in outerProduct: inputs must be rank 1, but got ranks " +
            "".concat(n.rank, " and ").concat(r.rank, ".")
          );
        });
        var a = ii(n, [-1, 1]),
          o = ii(r, [1, -1]);
        return li(a, o);
      },
    });
    var vu = Sa({
      pad_: function (e, t, n) {
        void 0 === n && (n = 0);
        var r = ka(e, "x", "pad");
        if (0 === r.rank)
          throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
        var a = { paddings: t, constantValue: n },
          o = { x: r };
        return da.runKernel(Mt, o, a);
      },
    });
    var mu = Sa({
      pad1d_: function (e, t, n) {
        return (
          void 0 === n && (n = 0),
          g(2 === t.length, function () {
            return "Invalid number of paddings. Must be length of 2.";
          }),
          vu(e, [t], n)
        );
      },
    });
    var yu = Sa({
      pad2d_: function (e, t, n) {
        return (
          void 0 === n && (n = 0),
          g(
            2 === t.length && 2 === t[0].length && 2 === t[1].length,
            function () {
              return "Invalid number of paddings. Must be length of 2 each.";
            },
          ),
          vu(e, t, n)
        );
      },
    });
    var bu = Sa({
      pad3d_: function (e, t, n) {
        return (
          void 0 === n && (n = 0),
          g(
            3 === t.length &&
              2 === t[0].length &&
              2 === t[1].length &&
              2 === t[2].length,
            function () {
              return "Invalid number of paddings. Must be length of 2 each.";
            },
          ),
          vu(e, t, n)
        );
      },
    });
    var wu = Sa({
      pad4d_: function (e, t, n) {
        return (
          void 0 === n && (n = 0),
          g(
            4 === t.length &&
              2 === t[0].length &&
              2 === t[1].length &&
              2 === t[2].length &&
              2 === t[3].length,
            function () {
              return "Invalid number of paddings. Must be length of 2 each.";
            },
          ),
          vu(e, t, n)
        );
      },
    });
    var ku = Sa({
      spaceToBatchND_: function (e, t, n) {
        var r = ka(e, "x", "spaceToBatchND");
        g(r.rank >= 1 + t.length, function () {
          return "input rank "
            .concat(r.rank, " should be > than [blockShape] ")
            .concat(t.length);
        }),
          g(n.length === t.length, function () {
            return "paddings.shape[0] "
              .concat(n.length, " must be equal to [blockShape] ")
              .concat(t.length);
          }),
          g(
            r.shape.reduce(function (e, r, a) {
              return a > 0 && a <= t.length
                ? e && (r + n[a - 1][0] + n[a - 1][1]) % t[a - 1] == 0
                : e;
            }, !0),
            function () {
              return "input spatial dimensions "
                .concat(r.shape.slice(1), " with paddings ")
                .concat(n.toString(), " must be divisible by blockShapes ")
                .concat(t.toString());
            },
          );
        var a = { x: r },
          o = { blockShape: t, paddings: n };
        return da.runKernel(rn, a, o);
      },
    });
    var xu = Sa({
      pool_: function (e, t, n, r, a, o, i) {
        null == a && (a = [1, 1]), null == o && (o = 1), 0 === r && (r = "valid");
        var u = ka(e, "x", "maxPool"),
          c = u,
          l = !1;
        3 === u.rank &&
          ((l = !0), (c = ii(u, [1, u.shape[0], u.shape[1], u.shape[2]]))),
          g(ni(o, a), function () {
            return (
              "Error in pool: Either strides or dilations must be 1. " +
              "Got strides ".concat(o, " and dilations '").concat(a, "'")
            );
          });
        var h,
          f = jo(c.shape, t, o, a, r),
          d = [f.dilationHeight, f.dilationWidth];
        h =
          "same" === r
            ? (function (e, t) {
                var n = e
                    .map(function (e, n) {
                      return e + (e - 1) * (t[n] - 1);
                    })
                    .map(function (e) {
                      return e - 1;
                    }),
                  r = n.map(function (e) {
                    return Math.floor(e / 2);
                  }),
                  a = n.map(function (e, t) {
                    return e - r[t];
                  });
                return n.map(function (e, t) {
                  return [r[t], a[t]];
                });
              })([f.filterHeight, f.filterWidth], d)
            : [
                [0, 0],
                [0, 0],
              ];
        var p = 1 === d[0] && 1 === d[1],
          v = s(
            (function (e, t, n) {
              var r = n.map(function (e) {
                  return e[0];
                }),
                a = n.map(function (e) {
                  return e[1];
                }),
                o = e.concat(r, a),
                i = t.map(function (e, t) {
                  return (e - (o[t] % e)) % e;
                }),
                s = a.map(function (e, t) {
                  return e + i[t];
                }),
                u = t.map(function (e, t) {
                  return [r[t], s[t]];
                }),
                c = t.map(function (e, t) {
                  return [0, i[t]];
                });
              return [u, c];
            })([f.inHeight, f.inWidth], d, h),
            2,
          ),
          m = v[0],
          y = v[1],
          b = p ? r : "valid",
          w = p ? c : ku(c, d, m),
          k = (
            "avg" === n
              ? function () {
                  return si(w, t, o, b, i);
                }
              : function () {
                  return $s(w, t, o, b, i);
                }
          )(),
          x = p ? k : gi(k, d, y);
        return l ? ii(x, [x.shape[1], x.shape[2], x.shape[3]]) : x;
      },
    });
    var Eu = Sa({
      prelu_: function (e, t) {
        var n = { x: ka(e, "x", "prelu"), alpha: ka(t, "alpha", "prelu") };
        return da.runKernel(Tt, n);
      },
    });
    var Su = Sa({
      prod_: function (e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = !1);
        var r = ka(e, "x", "prod");
        "bool" === r.dtype && (r = Io(r, "int32"));
        var a = { x: r },
          o = { axis: t, keepDims: n };
        return da.runKernel(Dt, a, o);
      },
    });
    var Au = Sa({
      raggedGather_: function (e, t, n, r) {
        var a = {
            paramsNestedSplits: e.map(function (e, t) {
              return ka(e, "tensors".concat(t), "raggedGather", "int32");
            }),
            paramsDenseValues: ka(t, "paramsDenseValues", "raggedGather"),
            indices: ka(n, "indices", "raggedGather", "int32"),
          },
          o = { outputRaggedRank: r },
          i = da.runKernel(Rt, a, o);
        return {
          outputNestedSplits: i.slice(0, i.length - 1),
          outputDenseValues: i[i.length - 1],
        };
      },
    });
    var _u = Sa({
      raggedRange_: function (e, t, n) {
        var r = ka(e, "starts", "raggedRange"),
          a = {
            starts: r,
            limits: ka(t, "limits", "raggedRange", r.dtype),
            deltas: ka(n, "deltas", "raggedRange", r.dtype),
          },
          o = da.runKernel(Bt, a);
        return { rtNestedSplits: o[0], rtDenseValues: o[1] };
      },
    });
    var Iu = Sa({
      raggedTensorToTensor_: function (e, t, n, r, a) {
        var o = ka(e, "shape", "raggedTensorToTensor", "int32"),
          i = ka(t, "values", "raggedTensorToTensor"),
          s = {
            shape: o,
            values: i,
            defaultValue: ka(n, "defaultValue", "raggedTensorToTensor", i.dtype),
            rowPartitionTensors: r.map(function (e, t) {
              return ka(e, "tensors".concat(t), "raggedTensorToTensor", "int32");
            }),
          },
          u = { rowPartitionTypes: a };
        return da.runKernel(Ft, s, u);
      },
    });
    var Nu = Sa({
        rand_: function (e, t, n) {
          G(e);
          var r = y(e),
            a = null;
          if (null == n || "float32" === n) a = new Float32Array(r);
          else if ("int32" === n) a = new Int32Array(r);
          else {
            if ("bool" !== n) throw new Error("Unknown data type ".concat(n));
            a = new Uint8Array(r);
          }
          for (var o = 0; o < r; o++) a[o] = t();
          return da.makeTensor(a, e, n);
        },
      }),
      Mu = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t,
            n = this,
            r =
              ((t = 4022871197),
              function (e) {
                e = String(e);
                for (var n = 0; n < e.length; n++) {
                  var r = 0.02519603282416938 * (t += e.charCodeAt(n));
                  (r -= t = r >>> 0),
                    (t = (r *= t) >>> 0),
                    (t += 4294967296 * (r -= t));
                }
                return 2.3283064365386963e-10 * (t >>> 0);
              });
          (n.next = function () {
            var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
            return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = e - (n.c = 0 | e));
          }),
            (n.c = 1),
            (n.s0 = r(" ")),
            (n.s1 = r(" ")),
            (n.s2 = r(" ")),
            (n.s0 -= r(e)),
            n.s0 < 0 && (n.s0 += 1),
            (n.s1 -= r(e)),
            n.s1 < 0 && (n.s1 += 1),
            (n.s2 -= r(e)),
            n.s2 < 0 && (n.s2 += 1),
            (r = null);
        }
        function a(e, t) {
          return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
        }
        function o(e, t) {
          var n = new r(e),
            o = t && t.state,
            i = n.next;
          return (
            (i.int32 = function () {
              return (4294967296 * n.next()) | 0;
            }),
            (i.double = function () {
              return i() + 11102230246251565e-32 * ((2097152 * i()) | 0);
            }),
            (i.quick = i),
            o &&
              ("object" == typeof o && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.alea = o);
      })(0, e, !1);
    })(Mu);
    var Tu = Mu.exports,
      Du = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t = this,
            n = "";
          (t.x = 0),
            (t.y = 0),
            (t.z = 0),
            (t.w = 0),
            (t.next = function () {
              var e = t.x ^ (t.x << 11);
              return (
                (t.x = t.y),
                (t.y = t.z),
                (t.z = t.w),
                (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
              );
            }),
            e === (0 | e) ? (t.x = e) : (n += e);
          for (var r = 0; r < n.length + 64; r++)
            (t.x ^= 0 | n.charCodeAt(r)), t.next();
        }
        function a(e, t) {
          return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
        }
        function o(e, t) {
          var n = new r(e),
            o = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (i.double = function () {
              do {
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            o &&
              ("object" == typeof o && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.xor128 = o);
      })(0, e, !1);
    })(Du);
    var Ru = Du.exports,
      Bu = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t = this,
            n = "";
          (t.next = function () {
            var e = t.x ^ (t.x >>> 2);
            return (
              (t.x = t.y),
              (t.y = t.z),
              (t.z = t.w),
              (t.w = t.v),
              ((t.d = (t.d + 362437) | 0) +
                (t.v = t.v ^ (t.v << 4) ^ e ^ (e << 1))) |
                0
            );
          }),
            (t.x = 0),
            (t.y = 0),
            (t.z = 0),
            (t.w = 0),
            (t.v = 0),
            e === (0 | e) ? (t.x = e) : (n += e);
          for (var r = 0; r < n.length + 64; r++)
            (t.x ^= 0 | n.charCodeAt(r)),
              r == n.length && (t.d = (t.x << 10) ^ (t.x >>> 4)),
              t.next();
        }
        function a(e, t) {
          return (
            (t.x = e.x),
            (t.y = e.y),
            (t.z = e.z),
            (t.w = e.w),
            (t.v = e.v),
            (t.d = e.d),
            t
          );
        }
        function o(e, t) {
          var n = new r(e),
            o = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (i.double = function () {
              do {
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            o &&
              ("object" == typeof o && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.xorwow = o);
      })(0, e, !1);
    })(Bu);
    var Fu = Bu.exports,
      Cu = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t = this;
          (t.next = function () {
            var e,
              n,
              r = t.x,
              a = t.i;
            return (
              (e = r[a]),
              (n = (e ^= e >>> 7) ^ (e << 24)),
              (n ^= (e = r[(a + 1) & 7]) ^ (e >>> 10)),
              (n ^= (e = r[(a + 3) & 7]) ^ (e >>> 3)),
              (n ^= (e = r[(a + 4) & 7]) ^ (e << 7)),
              (e = r[(a + 7) & 7]),
              (n ^= (e ^= e << 13) ^ (e << 9)),
              (r[a] = n),
              (t.i = (a + 1) & 7),
              n
            );
          }),
            (function (e, t) {
              var n,
                r = [];
              if (t === (0 | t)) r[0] = t;
              else
                for (t = "" + t, n = 0; n < t.length; ++n)
                  r[7 & n] =
                    (r[7 & n] << 15) ^ ((t.charCodeAt(n) + r[(n + 1) & 7]) << 13);
              for (; r.length < 8; ) r.push(0);
              for (n = 0; n < 8 && 0 === r[n]; ++n);
              for (
                8 == n ? (r[7] = -1) : r[n], e.x = r, e.i = 0, n = 256;
                n > 0;
                --n
              )
                e.next();
            })(t, e);
        }
        function a(e, t) {
          return (t.x = e.x.slice()), (t.i = e.i), t;
        }
        function o(e, t) {
          null == e && (e = +new Date());
          var n = new r(e),
            o = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (i.double = function () {
              do {
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            o &&
              (o.x && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.xorshift7 = o);
      })(0, e, !1);
    })(Cu);
    var Pu = Cu.exports,
      Ou = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t = this;
          (t.next = function () {
            var e,
              n,
              r = t.w,
              a = t.X,
              o = t.i;
            return (
              (t.w = r = (r + 1640531527) | 0),
              (n = a[(o + 34) & 127]),
              (e = a[(o = (o + 1) & 127)]),
              (n ^= n << 13),
              (e ^= e << 17),
              (n ^= n >>> 15),
              (e ^= e >>> 12),
              (n = a[o] = n ^ e),
              (t.i = o),
              (n + (r ^ (r >>> 16))) | 0
            );
          }),
            (function (e, t) {
              var n,
                r,
                a,
                o,
                i,
                s = [],
                u = 128;
              for (
                t === (0 | t)
                  ? ((r = t), (t = null))
                  : ((t += "\0"), (r = 0), (u = Math.max(u, t.length))),
                  a = 0,
                  o = -32;
                o < u;
                ++o
              )
                t && (r ^= t.charCodeAt((o + 32) % t.length)),
                  0 === o && (i = r),
                  (r ^= r << 10),
                  (r ^= r >>> 15),
                  (r ^= r << 4),
                  (r ^= r >>> 13),
                  o >= 0 &&
                    ((i = (i + 1640531527) | 0),
                    (a = 0 == (n = s[127 & o] ^= r + i) ? a + 1 : 0));
              for (
                a >= 128 && (s[127 & ((t && t.length) || 0)] = -1),
                  a = 127,
                  o = 512;
                o > 0;
                --o
              )
                (r = s[(a + 34) & 127]),
                  (n = s[(a = (a + 1) & 127)]),
                  (r ^= r << 13),
                  (n ^= n << 17),
                  (r ^= r >>> 15),
                  (n ^= n >>> 12),
                  (s[a] = r ^ n);
              (e.w = i), (e.X = s), (e.i = a);
            })(t, e);
        }
        function a(e, t) {
          return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
        }
        function o(e, t) {
          null == e && (e = +new Date());
          var n = new r(e),
            o = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (i.double = function () {
              do {
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            o &&
              (o.X && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.xor4096 = o);
      })(0, e, !1);
    })(Ou);
    var Lu = Ou.exports,
      zu = { exports: {} };
    !(function (e) {
      !(function (e, t, n) {
        function r(e) {
          var t = this,
            n = "";
          (t.next = function () {
            var e = t.b,
              n = t.c,
              r = t.d,
              a = t.a;
            return (
              (e = (e << 25) ^ (e >>> 7) ^ n),
              (n = (n - r) | 0),
              (r = (r << 24) ^ (r >>> 8) ^ a),
              (a = (a - e) | 0),
              (t.b = e = (e << 20) ^ (e >>> 12) ^ n),
              (t.c = n = (n - r) | 0),
              (t.d = (r << 16) ^ (n >>> 16) ^ a),
              (t.a = (a - e) | 0)
            );
          }),
            (t.a = 0),
            (t.b = 0),
            (t.c = -1640531527),
            (t.d = 1367130551),
            e === Math.floor(e)
              ? ((t.a = (e / 4294967296) | 0), (t.b = 0 | e))
              : (n += e);
          for (var r = 0; r < n.length + 20; r++)
            (t.b ^= 0 | n.charCodeAt(r)), t.next();
        }
        function a(e, t) {
          return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
        }
        function o(e, t) {
          var n = new r(e),
            o = t && t.state,
            i = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (i.double = function () {
              do {
                var e =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === e);
              return e;
            }),
            (i.int32 = n.next),
            (i.quick = i),
            o &&
              ("object" == typeof o && a(o, n),
              (i.state = function () {
                return a(n, {});
              })),
            i
          );
        }
        t && t.exports
          ? (t.exports = o)
          : n && n.amd
            ? n(function () {
                return o;
              })
            : (this.tychei = o);
      })(0, e, !1);
    })(zu);
    var Uu = zu.exports,
      Wu = { exports: {} };
    !(function (e) {
      !(function (t, n, r) {
        var a,
          o = 256,
          i = r.pow(o, 6),
          s = r.pow(2, 52),
          u = 2 * s,
          c = 255;
        function l(e, c, l) {
          var v = [],
            m = p(
              d(
                (c = 1 == c ? { entropy: !0 } : c || {}).entropy
                  ? [e, g(n)]
                  : null == e
                    ? (function () {
                        try {
                          var e;
                          return (
                            a && (e = a.randomBytes)
                              ? (e = e(o))
                              : ((e = new Uint8Array(o)),
                                (t.crypto || t.msCrypto).getRandomValues(e)),
                            g(e)
                          );
                        } catch (e) {
                          var r = t.navigator,
                            i = r && r.plugins;
                          return [+new Date(), t, i, t.screen, g(n)];
                        }
                      })()
                    : e,
                3,
              ),
              v,
            ),
            y = new h(v),
            b = function () {
              for (var e = y.g(6), t = i, n = 0; e < s; )
                (e = (e + n) * o), (t *= o), (n = y.g(1));
              for (; e >= u; ) (e /= 2), (t /= 2), (n >>>= 1);
              return (e + n) / t;
            };
          return (
            (b.int32 = function () {
              return 0 | y.g(4);
            }),
            (b.quick = function () {
              return y.g(4) / 4294967296;
            }),
            (b.double = b),
            p(g(y.S), n),
            (
              c.pass ||
              l ||
              function (e, t, n, a) {
                return (
                  a &&
                    (a.S && f(a, y),
                    (e.state = function () {
                      return f(y, {});
                    })),
                  n ? ((r.random = e), t) : e
                );
              }
            )(b, m, "global" in c ? c.global : this == r, c.state)
          );
        }
        function h(e) {
          var t,
            n = e.length,
            r = this,
            a = 0,
            i = (r.i = r.j = 0),
            s = (r.S = []);
          for (n || (e = [n++]); a < o; ) s[a] = a++;
          for (a = 0; a < o; a++)
            (s[a] = s[(i = c & (i + e[a % n] + (t = s[a])))]), (s[i] = t);
          (r.g = function (e) {
            for (var t, n = 0, a = r.i, i = r.j, s = r.S; e--; )
              (t = s[(a = c & (a + 1))]),
                (n = n * o + s[c & ((s[a] = s[(i = c & (i + t))]) + (s[i] = t))]);
            return (r.i = a), (r.j = i), n;
          })(o);
        }
        function f(e, t) {
          return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
        }
        function d(e, t) {
          var n,
            r = [],
            a = typeof e;
          if (t && "object" == a)
            for (n in e)
              try {
                r.push(d(e[n], t - 1));
              } catch (e) {}
          return r.length ? r : "string" == a ? e : e + "\0";
        }
        function p(e, t) {
          for (var n, r = e + "", a = 0; a < r.length; )
            t[c & a] = c & ((n ^= 19 * t[c & a]) + r.charCodeAt(a++));
          return g(t);
        }
        function g(e) {
          return String.fromCharCode.apply(0, e);
        }
        if ((p(r.random(), n), e.exports)) {
          e.exports = l;
          try {
            a = require("crypto");
          } catch (e) {}
        } else r.seedrandom = l;
      })("undefined" != typeof self ? self : Gn, [], Math);
    })(Wu);
    var Gu = Tu,
      qu = Ru,
      Ku = Fu,
      Vu = Pu,
      Hu = Lu,
      ju = Uu,
      Ju = Wu.exports;
    (Ju.alea = Gu),
      (Ju.xor128 = qu),
      (Ju.xorwow = Ku),
      (Ju.xorshift7 = Vu),
      (Ju.xor4096 = Hu),
      (Ju.tychei = ju);
    var Zu = Ju;
    function Yu() {
      return 32 === da.backend.floatPrecision() ? 0.001 : 0.1;
    }
    function Xu(e, t, n) {
      var r = !0;
      if (((Rr(e) || Rr(t)) && (r = !1), Rr(e) && Rr(t) && (r = !0), r)) {
        var a = e.constructor.name,
          o = t.constructor.name;
        if (a !== o)
          throw new Error(
            "Arrays are of different type. Actual: ".concat(a, ". ") +
              "Expected: ".concat(o),
          );
      }
      if (Array.isArray(e) && Array.isArray(t)) {
        var i = ya(e),
          s = ya(t);
        if (!w(i, s))
          throw new Error(
            "Arrays have different shapes. " +
              "Actual: [".concat(i, "]. Expected: [").concat(s, "]"),
          );
      }
      var u = Rr(e) ? e : Br(e),
        c = Rr(t) ? t : Br(t);
      if (u.length !== c.length)
        throw new Error(
          "Arrays have different lengths actual: ".concat(u.length, " vs ") +
            "expected: ".concat(c.length, ".\n") +
            "Actual:   ".concat(u, ".\n") +
            "Expected: ".concat(c, "."),
        );
      for (var l = 0; l < c.length; ++l) {
        var h = u[l],
          f = c[l];
        if (!n(h, f))
          throw new Error(
            "Arrays differ: actual["
              .concat(l, "] = ")
              .concat(h, ", expected[")
              .concat(l, "] = ")
              .concat(f, ".\n") +
              "Actual:   ".concat(u, ".\n") +
              "Expected: ".concat(c, "."),
          );
      }
      "undefined" != typeof expect && expect().nothing();
    }
    function Qu(e, t, n) {
      return (
        (!isFinite(e) && !isFinite(t)) ||
        !(isNaN(e) || isNaN(t) || Math.abs(e - t) > n)
      );
    }
    var $u = {
        __proto__: null,
        TEST_EPSILON_FLOAT16: 0.1,
        createVideoElement: function (e) {
          var t = document.createElement("video");
          return (
            "playsInline" in t && (t.playsInline = !0),
            (t.muted = !0),
            (t.loop = !0),
            (t.style.position = "fixed"),
            (t.style.left = "0px"),
            (t.style.top = "0px"),
            (t.preload = "auto"),
            t.appendChild(e),
            new Promise(function (e) {
              t.addEventListener("loadeddata", function (n) {
                return e(t);
              }),
                t.load();
            })
          );
        },
        encodeStrings: function e(t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            Array.isArray(r) ? e(r) : (t[n] = Tr(r));
          }
          return t;
        },
        expectArrayBuffersEqual: function (e, t) {
          var n = new Float32Array(e),
            r = new Float32Array(t);
          if (n.length !== r.length)
            throw new Error(
              "Expected ArrayBuffer to be of length " +
                "".concat(r.length, ", but it was ").concat(n.length),
            );
          for (var a = 0; a < r.length; a++)
            if (n[a] !== r[a])
              throw new Error(
                "Expected ArrayBuffer value at ".concat(a, " to be ") +
                  "".concat(r[a], " but got ").concat(n[a], " instead"),
              );
        },
        expectArraysClose: function (e, t, n) {
          return (
            null == n && (n = Yu()),
            Xu(e, t, function (e, t) {
              return Qu(e, t, n);
            })
          );
        },
        expectArraysEqual: function (e, t) {
          var n =
            "string" == typeof t || "number" == typeof t || "boolean" == typeof t
              ? [t]
              : t;
          return D(e) || D(e[0]) || D(t) || D(t[0])
            ? Xu(e, n, function (e, t) {
                return e == t;
              })
            : Xu(e, t, function (e, t) {
                return Qu(e, t, 0);
              });
        },
        expectNumbersClose: function (e, t, n) {
          if ((null == n && (n = Yu()), !Qu(e, t, n)))
            throw new Error(
              "Numbers differ: actual === "
                .concat(e, ", expected === ")
                .concat(t),
            );
          "undefined" != typeof expect && expect().nothing();
        },
        expectPromiseToFail: function (e, t) {
          e().then(
            function () {
              return t.fail();
            },
            function () {
              return t();
            },
          ),
            "undefined" != typeof expect && expect().nothing();
        },
        expectValuesInRange: function (e, t, n) {
          for (var r = 0; r < e.length; r++)
            if (e[r] < t || e[r] > n)
              throw new Error(
                "Value out of range:"
                  .concat(e[r], " low: ")
                  .concat(t, ", high: ")
                  .concat(n),
              );
        },
        play: function (e) {
          return a(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, e.play()];
                case 1:
                  return (
                    t.sent(),
                    "requestVideoFrameCallback" in e
                      ? [
                          4,
                          new Promise(function (t) {
                            e.requestVideoFrameCallback(t);
                          }),
                        ]
                      : [3, 3]
                  );
                case 2:
                  t.sent(), (t.label = 3);
                case 3:
                  return [2];
              }
            });
          });
        },
        testEpsilon: Yu,
      },
      ec = (function () {
        function e(e, t, n, r, a) {
          (this.mean = e),
            (this.stdDev = t),
            (this.dtype = n),
            (this.nextVal = NaN),
            (this.truncated = r),
            this.truncated &&
              ((this.upper = this.mean + 2 * this.stdDev),
              (this.lower = this.mean - 2 * this.stdDev));
          var o = a || Math.random();
          this.random = Zu.alea(o.toString());
        }
        return (
          (e.prototype.nextValue = function () {
            if (!isNaN(this.nextVal)) {
              var e = this.nextVal;
              return (this.nextVal = NaN), e;
            }
            for (var t, n, r = !1; !r; ) {
              var a = void 0,
                o = void 0,
                i = void 0;
              do {
                i =
                  (a = 2 * this.random() - 1) * a +
                  (o = 2 * this.random() - 1) * o;
              } while (i >= 1 || 0 === i);
              var s = Math.sqrt((-2 * Math.log(i)) / i);
              (t = this.mean + this.stdDev * a * s),
                (n = this.mean + this.stdDev * o * s),
                (this.truncated && !this.isValidTruncated(t)) || (r = !0);
            }
            return (
              (this.truncated && !this.isValidTruncated(n)) ||
                (this.nextVal = this.convertValue(n)),
              this.convertValue(t)
            );
          }),
          (e.prototype.convertValue = function (e) {
            return null == this.dtype || "float32" === this.dtype
              ? e
              : Math.round(e);
          }),
          (e.prototype.isValidTruncated = function (e) {
            return e <= this.upper && e >= this.lower;
          }),
          e
        );
      })(),
      tc = (function () {
        function e(e, t, n, r) {
          (this.alpha = e), (this.beta = 1 / t), (this.dtype = n);
          var a = r || Math.random();
          (this.randu = Zu.alea(a.toString())),
            (this.randn = new ec(0, 1, n, !1, this.randu())),
            (this.d = e < 1 ? e + 2 / 3 : e - 1 / 3),
            (this.c = 1 / Math.sqrt(9 * this.d));
        }
        return (
          (e.prototype.nextValue = function () {
            for (var e, t, n, r, a, o; ; ) {
              do {
                (r = this.randn.nextValue()), (o = 1 + this.c * r);
              } while (o <= 0);
              if (
                ((o *= o * o),
                (t = 1 - 0.331 * (e = r * r) * e),
                (n = 0.5 * e + this.d * (1 - o + Math.log(o))),
                (a = this.randu()) < t || Math.log(a) < n)
              )
                break;
            }
            return (
              (o = (1 / this.beta) * this.d * o),
              this.alpha < 1 && (o *= Math.pow(this.randu(), 1 / this.alpha)),
              this.convertValue(o)
            );
          }),
          (e.prototype.convertValue = function (e) {
            return "float32" === this.dtype ? e : Math.round(e);
          }),
          e
        );
      })(),
      nc = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = 0), void 0 === t && (t = 1);
          var a = this;
          if (
            ((this.canReturnFloat = function () {
              return null == a.dtype || "float32" === a.dtype;
            }),
            (this.min = e),
            (this.range = t - e),
            (this.dtype = n),
            null == r && (r = Math.random()),
            "number" == typeof r && (r = r.toString()),
            !this.canReturnFloat() && this.range <= 1)
          )
            throw new Error(
              "The difference between "
                .concat(e, " - ")
                .concat(t, " <= 1 and dtype is not float"),
            );
          this.random = Zu.alea(r);
        }
        return (
          (e.prototype.convertValue = function (e) {
            return this.canReturnFloat() ? e : Math.round(e);
          }),
          (e.prototype.nextValue = function () {
            return this.convertValue(this.min + this.range * this.random());
          }),
          e
        );
      })();
    var rc = Sa({
      randomGamma_: function (e, t, n, r, a) {
        if (
          (void 0 === n && (n = 1),
          void 0 === r && (r = "float32"),
          G(e),
          null == n && (n = 1),
          null == r && (r = "float32"),
          "float32" !== r && "int32" !== r)
        )
          throw new Error("Unsupported data type ".concat(r));
        for (
          var o = new tc(t, n, r, a), i = _o(e, r), s = 0;
          s < i.values.length;
          s++
        )
          i.values[s] = o.nextValue();
        return i.toTensor();
      },
    });
    var ac = Sa({
      randomNormal_: function (e, t, n, r, a) {
        if (
          (void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          G(e),
          null != r && "bool" === r)
        )
          throw new Error("Unsupported data type ".concat(r));
        for (
          var o = new ec(t, n, r, !1, a), i = _o(e, r), s = 0;
          s < i.values.length;
          s++
        )
          i.values[s] = o.nextValue();
        return i.toTensor();
      },
    });
    var oc = Sa({
      randomStandardNormal_: function (e, t, n) {
        if (null != t && "bool" === t)
          throw new Error("Unsupported data type ".concat(t));
        return ac(e, 0, 1, t, n);
      },
    });
    var ic = Sa({
      randomUniform_: function (e, t, n, r, a) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          void 0 === r && (r = "float32"),
          G(e);
        for (
          var o = _o(e, r), i = new nc(t, n, null, a), s = 0;
          s < o.values.length;
          s++
        )
          o.values[s] = i.nextValue();
        return o.toTensor();
      },
    });
    var sc = Sa({
      randomUniformInt_: function (e, t, n, r) {
        return ic(e, t, n, "int32", r);
      },
    });
    function uc(e, t, n, r) {
      if ((void 0 === n && (n = 1), void 0 === r && (r = "float32"), 0 === n))
        throw new Error("Cannot have a step of zero");
      var a = { start: e, stop: t, step: n, dtype: r };
      return da.runKernel(Ct, {}, a);
    }
    var cc = Sa({
      real_: function (e) {
        var t = { input: ka(e, "input", "real") };
        return da.runKernel(Pt, t);
      },
    });
    var lc = Sa({
      reciprocal_: function (e) {
        var t = { x: ka(e, "x", "reciprocal") };
        return da.runKernel(Ot, t);
      },
    });
    var hc = Sa({
      relu_: function (e) {
        var t = { x: ka(e, "x", "relu") };
        return da.runKernel(Lt, t);
      },
    });
    var fc = Sa({
      relu6_: function (e) {
        var t = { x: ka(e, "x", "relu6") };
        return da.runKernel(Gt, t);
      },
    });
    var dc = Sa({
      reverse_: function (e, t) {
        var n = { x: ka(e, "x", "reverse") },
          r = { dims: t };
        return da.runKernel(qt, n, r);
      },
    });
    var pc = Sa({
      reverse1d_: function (e) {
        var t = ka(e, "x", "reverse");
        return (
          g(1 === t.rank, function () {
            return "Error in reverse1D: x must be rank 1 but got rank ".concat(
              t.rank,
              ".",
            );
          }),
          dc(t, 0)
        );
      },
    });
    var gc = Sa({
      reverse2d_: function (e, t) {
        var n = ka(e, "x", "reverse");
        return (
          g(2 === n.rank, function () {
            return "Error in reverse2D: x must be rank 2 but got rank ".concat(
              n.rank,
              ".",
            );
          }),
          dc(n, t)
        );
      },
    });
    var vc = Sa({
      reverse3d_: function (e, t) {
        var n = ka(e, "x", "reverse");
        return (
          g(3 === n.rank, function () {
            return "Error in reverse3D: x must be rank 3 but got rank ".concat(
              n.rank,
              ".",
            );
          }),
          dc(n, t)
        );
      },
    });
    var mc = Sa({
      reverse4d_: function (e, t) {
        var n = ka(e, "x", "reverse");
        return (
          g(4 === n.rank, function () {
            return "Error in reverse4D: x must be rank 4 but got rank ".concat(
              n.rank,
              ".",
            );
          }),
          dc(n, t)
        );
      },
    });
    var yc = Sa({
      round_: function (e) {
        var t = { x: ka(e, "x", "round") };
        return da.runKernel(Kt, t);
      },
    });
    var bc = Sa({
      rsqrt_: function (e) {
        var t = { x: ka(e, "x", "rsqrt", "float32") };
        return da.runKernel(Vt, t);
      },
    });
    var wc = Sa({
      selu_: function (e) {
        var t = { x: ka(e, "x", "selu") };
        return da.runKernel(Yt, t);
      },
    });
    var kc = Sa({
      separableConv2d_: function (e, t, n, r, a, o, i) {
        void 0 === o && (o = [1, 1]), void 0 === i && (i = "NHWC");
        var s = ka(e, "x", "separableConv2d"),
          u = ka(t, "depthwiseFilter", "separableConv2d"),
          c = ka(n, "pointwiseFilter", "separableConv2d"),
          l = s,
          h = !1;
        if (
          (3 === s.rank &&
            ((h = !0), (l = ii(s, [1, s.shape[0], s.shape[1], s.shape[2]]))),
          "NCHW" === i)
        )
          throw new Error(
            "separableConv2d currently does not support dataFormat NCHW; only NHWC is supported",
          );
        g(4 === l.rank, function () {
          return (
            "Error in separableConv2d: input must be rank 4, but got " +
            "rank ".concat(l.rank, ".")
          );
        }),
          g(4 === u.rank, function () {
            return (
              "Error in separableConv2d: depthwise filter must be rank 4, but " +
              "got rank ".concat(u.rank, ".")
            );
          }),
          g(4 === c.rank, function () {
            return (
              "Error in separableConv2d: pointwise filter must be rank 4, but " +
              "got rank ".concat(u.rank, ".")
            );
          }),
          g(1 === c.shape[0], function () {
            return (
              "Error in separableConv2d: the first dimension of pointwise filter " +
              " must be 1, but got ".concat(c.shape[0], ".")
            );
          }),
          g(1 === c.shape[1], function () {
            return (
              "Error in separableConv2d: the second dimension of pointwise " +
              "filter must be 1, but got ".concat(c.shape[1], ".")
            );
          });
        var f = u.shape[2],
          d = u.shape[3];
        g(c.shape[2] === f * d, function () {
          return (
            "Error in separableConv2d: the third dimension of pointwise filter " +
            "must be ".concat(f * d, ", ") +
            "but got ".concat(c.shape[2], ".")
          );
        });
        var p = Ki(l, u, r, a, i, o),
          v = Di(p, c, 1, "valid", i);
        return h ? ii(v, [v.shape[1], v.shape[2], v.shape[3]]) : v;
      },
    });
    var xc = function (e, t) {
      return a(this, void 0, void 0, function () {
        var n, r, a, i, s, u, c, l, h, f;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                (n = ka(e, "x", "setdiff1d")),
                (r = ka(t, "y", "setdiff1d")),
                g(n.dtype === r.dtype, function () {
                  return "x and y should have the same dtype, but got x ("
                    .concat(n.dtype, ") and y (")
                    .concat(r.dtype, ").");
                }),
                g(1 === n.rank, function () {
                  return "x should be 1D tensor, but got x (".concat(
                    n.shape,
                    ").",
                  );
                }),
                g(1 === r.rank, function () {
                  return "y should be 1D tensor, but got y (".concat(
                    r.shape,
                    ").",
                  );
                }),
                [4, n.data()]
              );
            case 1:
              return (a = o.sent()), [4, r.data()];
            case 2:
              for (i = o.sent(), s = new Set(i), u = 0, h = 0; h < a.length; h++)
                s.has(a[h]) || u++;
              for (
                c = new Gr([u], n.dtype), l = new Gr([u], "int32"), h = 0, f = 0;
                h < a.length;
                h++
              )
                s.has(a[h]) || ((c.values[f] = a[h]), (l.values[f] = h), f++);
              return [2, [c.toTensor(), l.toTensor()]];
          }
        });
      });
    };
    var Ec = Sa({
      sign_: function (e) {
        var t = { x: ka(e, "x", "sign") };
        return da.runKernel($t, t);
      },
    });
    var Sc = Sa({
      sin_: function (e) {
        var t = { x: ka(e, "x", "sin", "float32") };
        return da.runKernel("Sin", t);
      },
    });
    var Ac = Sa({
      sinh_: function (e) {
        var t = { x: ka(e, "x", "sinh") };
        return da.runKernel(Qt, t);
      },
    });
    var _c = Sa({
      slice1d_: function (e, t, n) {
        var r = ka(e, "x", "slice1d");
        return (
          g(1 === r.rank, function () {
            return "slice1d expects a rank-1 tensor, but got a rank-".concat(
              r.rank,
              " tensor",
            );
          }),
          fi(r, [t], [n])
        );
      },
    });
    var Ic = Sa({
      slice2d_: function (e, t, n) {
        var r = ka(e, "x", "slice2d");
        return (
          g(2 === r.rank, function () {
            return "slice2d expects a rank-2 tensor, but got a rank-".concat(
              r.rank,
              " tensor",
            );
          }),
          fi(r, t, n)
        );
      },
    });
    var Nc = Sa({
      slice3d_: function (e, t, n) {
        var r = ka(e, "x", "slice3d");
        return (
          g(3 === r.rank, function () {
            return "slice3d expects a rank-3 tensor, but got a rank-".concat(
              r.rank,
              " tensor",
            );
          }),
          fi(r, t, n)
        );
      },
    });
    var Mc = Sa({
      slice4d_: function (e, t, n) {
        var r = ka(e, "x", "slice4d");
        return (
          g(4 === r.rank, function () {
            return "slice4d expects a rank-4 tensor, but got a rank-".concat(
              r.rank,
              " tensor",
            );
          }),
          fi(r, t, n)
        );
      },
    });
    var Tc = Sa({
      softmax_: function (e, t) {
        void 0 === t && (t = -1);
        var n = ka(e, "logits", "softmax", "float32");
        if ((-1 === t && (t = n.rank - 1), t !== n.rank - 1))
          throw Error(
            "Softmax along a non-last dimension is not yet supported. " +
              "Logits was rank ".concat(n.rank, " and dim was ").concat(t),
          );
        var r = { logits: n },
          a = { dim: t };
        return da.runKernel(on, r, a);
      },
    });
    var Dc = Sa({
      fft_: function (e) {
        g("complex64" === e.dtype, function () {
          return (
            "The dtype for tf.spectral.fft() must be complex64 " +
            "but got ".concat(e.dtype, ".")
          );
        });
        var t = { input: e };
        return da.runKernel("FFT", t);
      },
    });
    var Rc = Sa({
      ifft_: function (e) {
        g("complex64" === e.dtype, function () {
          return (
            "The dtype for tf.spectral.ifft() must be complex64 " +
            "but got ".concat(e.dtype, ".")
          );
        });
        var t = { input: e };
        return da.runKernel(et, t);
      },
    });
    var Bc = Sa({
      irfft_: function (e) {
        var t,
          n = e.shape[e.shape.length - 1],
          r = e.size / n;
        if (n <= 2) {
          var a = ii(e, [r, n]);
          t = Rc(a);
        } else {
          var o = [r, 2 * (n - 1)],
            i = ii(cc(e), [r, n]),
            s = ii(Ns(e), [r, n]),
            u = dc(fi(i, [0, 1], [r, n - 2]), 1),
            c = Bo(dc(fi(s, [0, 1], [r, n - 2]), 1), fs(-1)),
            l = ci([i, u], 1),
            h = ci([s, c], 1);
          a = ii(Aa(l, h), [o[0], o[1]]);
          t = Rc(a);
        }
        if (((t = cc(t)), 3 === e.rank && 0 !== e.shape[0])) {
          var f = t,
            d = e.shape[0];
          (t = ii(t, [d, t.shape[0] / d, t.shape[1]])), f.dispose();
        }
        return t;
      },
    });
    var Fc = Sa({
      split_: function (e, t, n) {
        void 0 === n && (n = 0);
        var r = { x: ka(e, "x", "split") },
          a = { numOrSizeSplits: t, axis: n };
        return da.runKernel(an, r, a);
      },
    });
    var Cc = Sa({
      rfft_: function (e, t) {
        g("float32" === e.dtype, function () {
          return "The dtype for rfft() must be real value but got ".concat(
            e.dtype,
          );
        });
        var n,
          r = e.shape[e.shape.length - 1],
          a = e.size / r;
        if (null != t && t < r) {
          var o = e.shape.map(function (e) {
              return 0;
            }),
            i = e.shape.map(function (e) {
              return e;
            });
          (i[e.shape.length - 1] = t), (n = fi(e, o, i)), (r = t);
        } else if (null != t && t > r) {
          var s = e.shape.map(function (e) {
            return e;
          });
          (s[e.shape.length - 1] = t - r),
            (n = ci([e, au(s)], e.shape.length - 1)),
            (r = t);
        } else n = e;
        var u = $i(n),
          c = ii(Aa(n, u), [a, r]),
          l = Dc(c),
          h = Math.floor(r / 2) + 1,
          f = cc(l),
          d = Ns(l),
          p = Fc(f, [h, r - h], f.shape.length - 1),
          v = Fc(d, [h, r - h], d.shape.length - 1),
          m = n.shape.slice();
        return (m[n.shape.length - 1] = h), ii(Aa(p[0], v[0]), m);
      },
    });
    var Pc = Sa({
      squaredDifference_: function (e, t) {
        var n,
          r = ka(e, "a", "squaredDifference"),
          a = ka(t, "b", "squaredDifference");
        (r = (n = s(ra(r, a), 2))[0]), (a = n[1]), Zi(r.shape, a.shape);
        var o = { a: r, b: a };
        return da.runKernel(fn, o, {});
      },
    });
    var Oc = Sa({
      squeeze_: function (e, t) {
        var n = ka(e, "x", "squeeze", "string_or_numeric");
        return ii(n, S(n.shape, t).newShape);
      },
    });
    var Lc = Sa({
      stack_: function (e, t) {
        void 0 === t && (t = 0);
        var n = xa(e, "tensors", "stack", "string_or_numeric");
        g(n.length >= 1, function () {
          return "Pass at least one tensor to tf.stack";
        }),
          n.length > 0 &&
            g(t <= n[0].rank, function () {
              return "Axis must be <= rank of the tensor";
            });
        var r = n,
          a = { axis: t };
        return da.runKernel(Nt, r, a);
      },
    });
    var zc = Sa({
      step_: function (e, t) {
        void 0 === t && (t = 0);
        var n = { x: ka(e, "x", "step") },
          r = { alpha: t };
        return da.runKernel(In, n, r);
      },
    });
    var Uc = Sa({
      stridedSlice_: function (e, t, n, r, a, o, i, s, u) {
        void 0 === a && (a = 0),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          void 0 === s && (s = 0),
          void 0 === u && (u = 0);
        var c = { x: ka(e, "x", "stridedSlice", "string_or_numeric") },
          l = {
            begin: t,
            end: n,
            strides: r,
            beginMask: a,
            endMask: o,
            ellipsisMask: i,
            newAxisMask: s,
            shrinkAxisMask: u,
          };
        return da.runKernel(pn, c, l);
      },
    });
    var Wc = Sa({
      tan_: function (e) {
        var t = { x: ka(e, "x", "tan", "float32") };
        return da.runKernel("Tan", t);
      },
    });
    function Gc(e, t) {
      m(e);
      var n = ya(e, t);
      if (1 !== n.length)
        throw new Error("tensor1d() requires values to be a flat/TypedArray");
      return _a(e, null, n, t);
    }
    function qc(e, t, n) {
      if ((m(e), null != t && 2 !== t.length))
        throw new Error("tensor2d() requires shape to have two numbers");
      var r = ya(e, n);
      if (2 !== r.length && 1 !== r.length)
        throw new Error(
          "tensor2d() requires values to be number[][] or flat/TypedArray",
        );
      if (1 === r.length && null == t)
        throw new Error(
          "tensor2d() requires shape to be provided when `values` are a flat/TypedArray",
        );
      return _a(e, t, r, n);
    }
    function Kc(e, t, n) {
      if ((m(e), null != t && 3 !== t.length))
        throw new Error("tensor3d() requires shape to have three numbers");
      var r = ya(e, n);
      if (3 !== r.length && 1 !== r.length)
        throw new Error(
          "tensor3d() requires values to be number[][][] or flat/TypedArray",
        );
      if (1 === r.length && null == t)
        throw new Error(
          "tensor3d() requires shape to be provided when `values` are a flat array",
        );
      return _a(e, t, r, n);
    }
    function Vc(e, t, n) {
      var r = t.rank > 1 ? t.shape[t.rank - 1] : 1,
        a = t.rank > 1 ? t.rank - 1 : 1,
        o =
          "Must have updates.shape = indices.shape[:batchDim] + " +
          "shape[sliceDim:], got updates.shape: ".concat(n.shape) +
          ", indices.shape: ".concat(t.shape, ", shape: ").concat(e) +
          ", sliceDim: ".concat(r, ", and batchDim: ").concat(a, ".");
      if (n.rank < a) throw new Error(o + " update.rank < ".concat(a, ". "));
      if (e.length < r + (n.rank - a))
        throw new Error(o + " Output shape length < ".concat(r + (n.rank - a)));
      if (n.rank !== a + e.length - r)
        throw new Error(o + " update.rank != ".concat(a + e.length - r));
      for (var i = 0; i < a; ++i)
        if (n.shape[i] !== t.shape[i])
          throw new Error(
            o +
              " updates.shape["
                .concat(i, "] (")
                .concat(n.shape[i], ") != indices.shape[")
                .concat(i, "] (")
                .concat(t.shape[i], ")."),
          );
      for (i = 0; i < n.rank - a; ++i)
        if (n.shape[i + a] !== e[i + r])
          throw new Error(
            o +
              " updates.shape["
                .concat(i + a, "] (")
                .concat(n.shape[i + a], ") != shape[")
                .concat(i + a, "] (")
                .concat(e[i + a], ")"),
          );
    }
    function Hc(e, t, n) {
      if (t.rank < 1)
        throw new Error(
          "tf.scatterND() expects the indices to be rank 1 or higher," +
            " but the rank was ".concat(t.rank, "."),
        );
      if (e.rank < 1)
        throw new Error(
          "tf.scatterND() expects the updates to be rank 1 or higher," +
            " but the rank was ".concat(e.rank, "."),
        );
      if ("int32" !== t.dtype)
        throw new Error(
          "The dtype of 'indices' should be int32, but got dtype: ".concat(
            t.dtype,
          ),
        );
      if (n.length < 1)
        throw new Error(
          "Output rank must be greater or equal to 1, but got shape: ".concat(n),
        );
      if (0 === n.length) {
        if (0 === t.size)
          throw new Error(
            "Indices specified for empty output. indices shape: ".concat(t.shape),
          );
        if (0 === e.size)
          throw new Error(
            "Updates specified for empty output. updates shape: ".concat(e.shape),
          );
      }
      Vc(n, t, e);
    }
    function jc(e, t, n) {
      for (
        var r = t.shape.length,
          a = r > 1 ? t.shape[r - 1] : 1,
          o = n.length,
          i = 1,
          c = a;
        c < o;
        ++c
      )
        i *= n[c];
      var l = a < 1 ? 1 : a;
      return {
        sliceRank: a,
        numUpdates: y(t.shape) / l,
        sliceSize: i,
        strides: u(u([], s(O(n.slice(0, a))), !1), [1], !1),
        outputSize: y(n),
      };
    }
    var Jc = {
      __proto__: null,
      calculateShapes: jc,
      validateInput: Hc,
      validateUpdateShape: Vc,
    };
    var Zc = Sa({
      tensorScatterUpdate_: function (e, t, n) {
        var r = ka(e, "tensor", "tensorScatterupdate"),
          a = ka(t, "indices", "tensorScatterupdate", "int32"),
          o = ka(n, "updates", "tensorScatterupdate");
        if ((Hc(o, a, r.shape), r.dtype !== o.dtype))
          throw new Error(
            "tensor and updates must have the same dtype, instead they are "
              .concat(r.dtype, " and ")
              .concat(o.dtype, "."),
          );
        var i = { tensor: r, indices: a, updates: o };
        return da.runKernel(jt, i, {});
      },
    });
    var Yc = Sa({
      topk_: function (e, t, n) {
        void 0 === t && (t = 1), void 0 === n && (n = !0);
        var r = ka(e, "x", "topk");
        if (0 === r.rank)
          throw new Error("topk() expects the input to be of rank 1 or higher");
        var a = r.shape[r.shape.length - 1];
        if (t < 0)
          throw new Error("'k' passed to topk() must be >= 0 but got ".concat(t));
        if (t > a)
          throw new Error(
            "'k' passed to topk() must be <= the last dimension (".concat(
              a,
              ") ",
            ) + "but got ".concat(t),
          );
        var o = { x: r },
          i = { k: t, sorted: n },
          u = s(da.runKernel(wn, o, i), 2);
        return { values: u[0], indices: u[1] };
      },
    });
    var Xc = Sa({
      truncatedNormal_: function (e, t, n, r, a) {
        if (
          (void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          G(e),
          null != r && "bool" === r)
        )
          throw new Error("Unsupported data type $ { dtype }");
        for (
          var o = new ec(t, n, r, !0, a), i = _o(e, r), s = 0;
          s < i.values.length;
          s++
        )
          i.values[s] = o.nextValue();
        return i.toTensor();
      },
    });
    var Qc = Sa({
      unique_: function (e, t) {
        void 0 === t && (t = 0);
        var n = ka(e, "x", "unique", "string_or_numeric");
        g(n.rank > 0, function () {
          return "The input tensor must be at least 1D";
        });
        var r = { x: n },
          a = { axis: t },
          o = s(da.runKernel(En, r, a), 2);
        return { values: o[0], indices: o[1] };
      },
    });
    var $c = Sa({
      unsortedSegmentSum_: function (e, t, n) {
        var r = ka(e, "x", "unsortedSegmentSum"),
          a = ka(t, "segmentIds", "unsortedSegmentSum", "int32");
        g(k(n), function () {
          return "numSegments must be of dtype int";
        });
        var o = { x: r, segmentIds: a },
          i = { numSegments: n };
        return da.runKernel(An, o, i);
      },
    });
    var el = Sa({
      unstack_: function (e, t) {
        void 0 === t && (t = 0);
        var n = ka(e, "x", "unstack", "string_or_numeric");
        g(t >= -n.shape.length && t < n.shape.length, function () {
          return "Axis = "
            .concat(t, " is not in [-")
            .concat(n.shape.length, ", ")
            .concat(n.shape.length, ")");
        });
        var r = { value: n },
          a = { axis: t };
        return da.runKernel(Sn, r, a);
      },
    });
    function tl(e, t) {
      for (var n = [], r = 0; r < t.length; r++) t[r] && n.push(r);
      var a = _o(e, "int32"),
        o = _o([n.length, e.length], "int32");
      for (r = 0; r < n.length; r++) {
        var i = a.indexToLoc(n[r]),
          s = r * e.length;
        o.values.set(i, s);
      }
      return o.toTensor();
    }
    var nl = function (e) {
      return a(this, void 0, void 0, function () {
        var t, n, r;
        return o(this, function (a) {
          switch (a.label) {
            case 0:
              return [4, (t = ka(e, "condition", "whereAsync", "bool")).data()];
            case 1:
              return (
                (n = a.sent()),
                (r = tl(t.shape, n)),
                e !== t && t.dispose(),
                [2, r]
              );
          }
        });
      });
    };
    var rl = function (e, t, n) {
      return a(this, void 0, void 0, function () {
        var r, a, i, s, u, c, l, h, f, d, p, m, y;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              for (
                r = ka(e, "tensor", "boolMask"),
                  a = ka(t, "mask", "boolMask", "bool"),
                  i = null == n ? 0 : n,
                  s = a.rank,
                  u = r.shape,
                  g(s > 0, function () {
                    return "mask cannot be scalar";
                  }),
                  v(
                    u.slice(i, i + s),
                    a.shape,
                    "mask's shape must match the first K dimensions of tensor's shape,",
                  ),
                  c = 1,
                  l = i;
                l < i + s;
                l++
              )
                c *= u[l];
              return (
                (h = u.slice(0, i).concat([c], u.slice(i + s))),
                (f = ii(r, h)),
                (d = ii(a, [-1])),
                [4, nl(d)]
              );
            case 1:
              return (
                (p = o.sent()),
                (m = Oc(p, [1])),
                (y = As(f, m, i)),
                e !== r && r.dispose(),
                t !== a && a.dispose(),
                m.dispose(),
                f.dispose(),
                d.dispose(),
                p.dispose(),
                [2, y]
              );
          }
        });
      });
    };
    var al = Sa({
      transpose_: function (e, t, n) {
        var r = ka(e, "x", "transpose");
        if (
          (null == t &&
            (t = r.shape
              .map(function (e, t) {
                return t;
              })
              .reverse()),
          g(r.rank === t.length, function () {
            return (
              "Error in transpose: rank of input ".concat(r.rank, " ") +
              "must match length of perm ".concat(t, ".")
            );
          }),
          t.forEach(function (e) {
            g(e >= 0 && e < r.rank, function () {
              return (
                "All entries in 'perm' must be between 0 and ".concat(
                  r.rank - 1,
                ) + " but got ".concat(t)
              );
            });
          }),
          r.rank <= 1)
        )
          return r.clone();
        var a = { x: r },
          o = { perm: t };
        return "complex64" === r.dtype
          ? Ta(function () {
              var e = cc(r),
                t = Ns(r);
              return (
                (e = da.runKernel(xn, { x: e }, o)),
                (t = da.runKernel(xn, { x: t }, o)),
                n && (t = Ws(t)),
                Aa(e, t)
              );
            })
          : da.runKernel(xn, a, o);
      },
    });
    var ol = Sa({
      movingAverage_: function (e, t, n, r, a) {
        void 0 === a && (a = !0);
        var o = ka(e, "v", "movingAverage"),
          i = ka(t, "x", "movingAverage"),
          s = ka(n, "decay", "movingAverage");
        aa(o, i),
          g(w(o.shape, i.shape), function () {
            return "Shape mismatch in v and x";
          });
        var u = fs(1),
          c = Ks(u, s),
          l = Bo(Ks(i, o), c);
        if (a) {
          g(null != r, function () {
            return "When using zeroDebias: true, step is required.";
          });
          var h = ka(r, "step", "movingAverage");
          l = Ro(l, Ks(u, hs(s, h)));
        }
        return To(o, l);
      },
    });
    var il = Sa({
      scatterND_: function (e, t, n) {
        G(n);
        var r = ka(e, "indices", "scatterND", "int32"),
          a = ka(t, "updates", "scatterND");
        Hc(a, r, n);
        var o = { indices: r, updates: a },
          i = { shape: n };
        return da.runKernel(Ht, o, i);
      },
    });
    var sl = Sa({
      sparseToDense_: function (e, t, n, r) {
        void 0 === r && (r = 0), G(n);
        var a = ka(e, "sparseIndices", "sparseToDense", "int32"),
          o = ka(t, "sparseValues", "sparseToDense", "string_or_numeric"),
          i = ka(r, "defaultValue", "sparseToDense", o.dtype);
        !(function (e, t, n, r) {
          if ("int32" !== e.dtype)
            throw new Error(
              "tf.sparseToDense() expects the indices to be int32 type," +
                " but the dtype was ".concat(e.dtype, "."),
            );
          if (e.rank > 2)
            throw new Error(
              "sparseIndices should be a scalar, vector, or matrix," +
                " but got shape ".concat(e.shape, "."),
            );
          var a = e.rank > 0 ? e.shape[0] : 1,
            o = e.rank > 1 ? e.shape[1] : 1;
          if (n.length !== o)
            throw new Error(
              "outputShape has incorrect number of elements:," +
                " ".concat(n.length, ", should be: ").concat(o, "."),
            );
          var i = t.size;
          if (0 !== t.rank && (1 !== t.rank || i !== a))
            throw new Error(
              "sparseValues has incorrect shape " +
                "".concat(t.shape, ", should be [] or [").concat(a, "]"),
            );
          if (t.dtype !== r.dtype)
            throw new Error("sparseValues.dtype must match defaultValues.dtype");
        })(a, o, n, i);
        var s = { sparseIndices: a, sparseValues: o, defaultValue: i },
          u = { outputShape: n };
        return da.runKernel(hn, s, u);
      },
    });
    var ul = Sa({
      gatherND_: function (e, t) {
        var n = ka(t, "indices", "gatherND", "int32"),
          r = { params: ka(e, "x", "gatherND", "string_or_numeric"), indices: n };
        return da.runKernel(Ye, r);
      },
    });
    var cl = Sa({
      dropout_: function (e, t, n, r) {
        var a = ka(e, "x", "dropout");
        if (
          (g("float32" === a.dtype, function () {
            return (
              "x has to be a floating point tensor since it's going to be " +
              "scaled, but got a ".concat(a.dtype, " tensor instead.")
            );
          }),
          g(t >= 0 && t < 1, function () {
            return "rate must be a float in the range [0, 1), but got ".concat(
              t,
              ".",
            );
          }),
          0 === t)
        )
          return e instanceof Vr ? a.clone() : a;
        var o = (function (e, t) {
            if (null == t) return e.shape.slice();
            if (w(e.shape, t)) return t;
            if (e.shape.length === t.length) {
              for (var n = [], r = 0; r < e.shape.length; r++)
                null == t[r] && null != e.shape[r]
                  ? n.push(e.shape[r])
                  : n.push(t[r]);
              return n;
            }
            return t;
          })(a, n),
          i = 1 - t,
          s = Ro(Ss(To(ic(o, 0, 1, "float32", r), i)), i);
        return Bo(a, s);
      },
    });
    function ll(e) {
      return Math.floor(Math.pow(2, Math.ceil(Math.log(e) / Math.log(2))));
    }
    function hl(e, t, n) {
      for (var r = 1 - (e % 2), a = new Float32Array(e), o = 0; o < e; ++o) {
        var i = (2 * Math.PI * o) / (e + r - 1);
        a[o] = t - n * Math.cos(i);
      }
      return Gc(a, "float32");
    }
    var fl = function (e, t, n) {
      return (
        void 0 === n && (n = 1),
        a(this, void 0, void 0, function () {
          var r, a, i, u, c, l, h, f, d, p, m, y, b, w;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (r = ka(e, "predictions", "inTopK")),
                  (a = ka(t, "targets", "inTopK")),
                  g(r.rank > 1, function () {
                    return (
                      "inTopK() expects the predictions to be of rank 2 or higher, " +
                      "but got ".concat(r.rank)
                    );
                  }),
                  g(r.rank - 1 === a.rank, function () {
                    return (
                      "predictions rank should be 1 larger than targets rank, but got predictions rank " +
                      "".concat(r.rank, " and targets rank ").concat(a.rank)
                    );
                  }),
                  v(
                    r.shape.slice(0, r.shape.length - 1),
                    a.shape,
                    "predictions's shape should be align with the targets' shape, except the last dimension.",
                  ),
                  (i = r.shape[r.shape.length - 1]),
                  g(n > 0 && n <= i, function () {
                    return (
                      "'k' passed to inTopK() must be > 0 && <= the predictions last " +
                      "dimension (".concat(i, "), but got ").concat(n)
                    );
                  }),
                  [4, r.data()]
                );
              case 1:
                return (u = o.sent()), [4, a.data()];
              case 2:
                for (
                  c = o.sent(),
                    l = s([u.length / i, i], 2),
                    h = l[0],
                    f = l[1],
                    d = A("bool", h),
                    p = 0;
                  p < h;
                  p++
                ) {
                  for (
                    m = p * f, y = u.subarray(m, m + f), b = [], w = 0;
                    w < y.length;
                    w++
                  )
                    b.push({ value: y[w], index: w });
                  for (
                    b.sort(function (e, t) {
                      return t.value - e.value;
                    }),
                      d[p] = 0,
                      w = 0;
                    w < n;
                    w++
                  )
                    if (b[w].index === c[p]) {
                      d[p] = 1;
                      break;
                    }
                }
                return (
                  e !== r && r.dispose(),
                  t !== a && a.dispose(),
                  [2, Ia(d, a.shape, "bool")]
                );
            }
          });
        })
      );
    };
    var dl = Sa({
      conv2DBackpropFilter_: function (e, t, n, r, a, o, i) {
        void 0 === o && (o = "NHWC");
        var s = e;
        3 === e.rank && (s = ii(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
        var u = t;
        3 === u.rank && (u = ii(t, [1, t.shape[0], t.shape[1], t.shape[2]])),
          g(4 === s.rank, function () {
            return (
              "Error in conv2dDerFilter: input must be rank 4, but got shape " +
              "".concat(s.shape, ".")
            );
          }),
          g(4 === u.rank, function () {
            return (
              "Error in conv2dDerFilter: dy must be rank 4, but got shape " +
              "".concat(u.shape, ".")
            );
          }),
          g(4 === n.length, function () {
            return (
              "Error in conv2dDerFilter: filterShape must be length 4, but got " +
              "".concat(n, ".")
            );
          });
        var c = "NHWC" === o ? s.shape[3] : s.shape[1],
          l = "NHWC" === o ? u.shape[3] : u.shape[1];
        g(c === n[2], function () {
          return (
            "Error in conv2dDerFilter: depth of input ".concat(c, ") must ") +
            "match input depth in filter (".concat(n[2], ".")
          );
        }),
          g(l === n[3], function () {
            return (
              "Error in conv2dDerFilter: depth of dy (".concat(l, ") must ") +
              "match output depth for filter (".concat(n[3], ").")
            );
          }),
          oi("conv2dDerFilter", a, i);
        var h = { x: s, dy: u },
          f = {
            strides: r,
            pad: a,
            dataFormat: o,
            dimRoundingMode: i,
            filterShape: n,
          };
        return da.runKernel(Ee, h, f);
      },
    });
    function pl(e, t, n) {
      if (null == n || "linear" === n) return e;
      if ("relu" === n) return Bo(e, zc(t));
      throw new Error(
        "Cannot compute gradient for fused activation ".concat(n, "."),
      );
    }
    function gl(e, t) {
      var n = t,
        r = Ji(e.shape, t.shape);
      return r.length > 0 && (n = gs(n, r)), ii(n, e.shape);
    }
    function vl(e, t, n, r) {
      if ("linear" === t) return e;
      if ("relu" === t) return hc(e);
      if ("elu" === t) return rs(e);
      if ("relu6" === t) return fc(e);
      if ("prelu" === t) return Eu(e, n);
      if ("leakyrelu" === t) return Rs(e, r);
      if ("sigmoid" === t) return hi(e);
      throw new Error("Unknown fused activation ".concat(t, "."));
    }
    var ml = function (e, t) {
      return !(e > 0) || "linear" === t;
    };
    var yl = Sa({
      fusedConv2d_: function (e) {
        var t,
          n = e.x,
          r = e.filter,
          a = e.strides,
          o = e.pad,
          i = e.dataFormat,
          u = void 0 === i ? "NHWC" : i,
          c = e.dilations,
          l = void 0 === c ? [1, 1] : c,
          h = e.dimRoundingMode,
          f = e.bias,
          d = e.activation,
          p = void 0 === d ? "linear" : d,
          v = e.preluActivationWeights,
          m = e.leakyreluAlpha;
        if (((p = p || "linear"), !1 === ml(da.state.gradientDepth, p))) {
          g("NHWC" === u, function () {
            return (
              "Error in fused conv2d: got dataFormat of ".concat(u, " but ") +
              "only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear."
            );
          });
          var y = Di(n, r, a, o, u, l, h);
          return null != f && (y = To(y, f)), vl(y, p, v, m);
        }
        var b = ka(n, "x", "conv2d", "float32"),
          w = ka(r, "filter", "conv2d", "float32"),
          k = b,
          x = !1;
        3 === b.rank &&
          ((x = !0), (k = ii(b, [1, b.shape[0], b.shape[1], b.shape[2]]))),
          g(4 === k.rank, function () {
            return (
              "Error in fused conv2d: input must be rank 4, but got rank " +
              "".concat(k.rank, ".")
            );
          }),
          g(4 === w.rank, function () {
            return (
              "Error in fused conv2d: filter must be rank 4, but got rank " +
              "".concat(w.rank, ".")
            );
          }),
          oi("fused conv2d", o, h);
        var E = "NHWC" === u ? k.shape[3] : k.shape[1];
        g(w.shape[2] === E, function () {
          return (
            "Error in conv2d: depth of input (".concat(E, ") must match ") +
            "input depth for filter ".concat(w.shape[2], ".")
          );
        }),
          g(ni(a, l), function () {
            return (
              "Error in conv2D: Either strides or dilations must be 1. " +
              "Got strides ".concat(a, " and dilations '").concat(l, "'")
            );
          });
        var S,
          A,
          _ = Jo(k.shape, w.shape, a, l, o, h);
        if (
          (null != f &&
            ((t = s(ra((S = ka(f, "bias", "fused conv2d")), b), 1)),
            (S = t[0]),
            "NHWC" === u
              ? Zi(_.outShape, S.shape)
              : (g(S.shape.length <= 1, function () {
                  return (
                    "Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of " +
                    "rank-".concat(S.shape.length, ".")
                  );
                }),
                g(
                  0 === S.shape.length ||
                    S.shape[0] === _.outChannels ||
                    1 === S.shape[0],
                  function () {
                    return (
                      "Error in fused conv2d: bias shape (".concat(
                        S.shape,
                        ") is not ",
                      ) +
                      "compatible with the number of output channels " +
                      "(".concat(_.outChannels, ")")
                    );
                  },
                ))),
          null != v)
        ) {
          var I = v.shape;
          if (
            (g(I.length <= 1 || 3 === I.length, function () {
              return (
                "Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of " +
                "rank-".concat(I.length, ".")
              );
            }),
            1 === I.length)
          )
            g(1 === I[0] || I[0] === _.outChannels, function () {
              return (
                "Error in fused conv2d: PReLU activation weights " +
                "(".concat(I, ") is not compatible with the number of output ") +
                "channels (".concat(_.outChannels, ").")
              );
            });
          else if (3 === I.length)
            try {
              Zi(I, _.outShape);
            } catch (e) {
              var N =
                "Error in fused conv2d: PReLU activation weights (".concat(
                  I,
                  ") ",
                ) +
                "is not compatible with the output shape of the conv2d " +
                "(".concat(_.outShape, ").");
              throw Error(N);
            }
          A = ka(v, "prelu weights", "fused conv2d");
        }
        var M = function (e, t) {
            g("NHWC" === u, function () {
              return "Error in gradient of fused conv2D: got dataFormat of ".concat(
                u,
                " but only NHWC is currently supported.",
              );
            });
            var n = s(t, 4),
              r = n[0],
              i = n[1],
              c = n[2],
              h = n[3],
              f = pl(e, c, p);
            g(ti(l), function () {
              return (
                "Error in gradient of fused conv2D: dilation rates greater than 1 " +
                "are not yet supported in gradients. Got dilations '".concat(
                  l,
                  "'",
                )
              );
            });
            var d = [Bi(i.shape, f, r, a, o), dl(i, f, r.shape, a, o)];
            if (null != h) {
              var v = gl(h, f);
              d.push(v);
            }
            return d;
          },
          T = { x: k, filter: w, bias: S, preluActivationWeights: A },
          D = {
            strides: a,
            pad: o,
            dataFormat: u,
            dilations: l,
            dimRoundingMode: h,
            activation: p,
            leakyreluAlpha: m,
          };
        if (null == f) {
          var R = zs(function (e, t, n) {
            var r = da.runKernel(Dn, T, D);
            return (
              n([t, e, r]),
              x && (r = ii(r, [r.shape[1], r.shape[2], r.shape[3]])),
              { value: r, gradFunc: M }
            );
          });
          return R(k, w);
        }
        var B = zs(function (e, t, n, r) {
          var a = da.runKernel(Dn, T, D);
          return (
            r([t, e, a, n]),
            x && (a = ii(a, [a.shape[1], a.shape[2], a.shape[3]])),
            { value: a, gradFunc: M }
          );
        });
        return B(k, w, S);
      },
    });
    var bl = Sa({
      depthwiseConv2dNativeBackpropFilter_: function (e, t, n, r, a, o, i) {
        void 0 === o && (o = [1, 1]);
        var s = e;
        3 === e.rank && (s = ii(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
        var u = t;
        3 === u.rank && (u = ii(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
        var c = { x: s, dy: u },
          l = {
            strides: r,
            pad: a,
            dimRoundingMode: i,
            dilations: o,
            filterShape: n,
          };
        return da.runKernel(Fe, c, l);
      },
    });
    var wl = Sa({
      depthwiseConv2dNativeBackpropInput_: function (e, t, n, r, a, o, i) {
        void 0 === o && (o = [1, 1]);
        var s = t,
          u = !1;
        3 === t.rank &&
          ((u = !0), (s = ii(t, [1, t.shape[0], t.shape[1], t.shape[2]])));
        var c = { dy: s, filter: n },
          l = {
            strides: r,
            pad: a,
            dimRoundingMode: i,
            dilations: o,
            inputShape: e,
          },
          h = da.runKernel(Ce, c, l);
        return u ? ii(h, [h.shape[1], h.shape[2], h.shape[3]]) : h;
      },
    });
    var kl = Sa({
      fusedDepthwiseConv2d_: function (e) {
        var t,
          n = e.x,
          r = e.filter,
          a = e.strides,
          o = e.pad,
          i = e.dataFormat,
          u = void 0 === i ? "NHWC" : i,
          c = e.dilations,
          l = void 0 === c ? [1, 1] : c,
          h = e.dimRoundingMode,
          f = e.bias,
          d = e.activation,
          p = void 0 === d ? "linear" : d,
          v = e.preluActivationWeights,
          m = e.leakyreluAlpha;
        if (!1 === ml(da.state.gradientDepth, p)) {
          var y = Ki(n, r, a, o, u, l, h);
          return null != f && (y = To(y, f)), vl(y, p, v, m);
        }
        var b = ka(n, "x", "depthwiseConv2d", "float32"),
          w = ka(r, "filter", "depthwiseConv2d", "float32"),
          k = b,
          x = !1;
        3 === b.rank &&
          ((x = !0), (k = ii(b, [1, b.shape[0], b.shape[1], b.shape[2]]))),
          g(4 === k.rank, function () {
            return (
              "Error in fused depthwiseConv2d: input must be rank 4, but got " +
              "rank ".concat(k.rank, ".")
            );
          }),
          g(4 === w.rank, function () {
            return (
              "Error in fused depthwiseConv2d: filter must be rank 4, " +
              "but got rank ".concat(w.rank, ".")
            );
          }),
          g(k.shape[3] === w.shape[2], function () {
            return (
              "Error in fused depthwiseConv2d: number of input channels " +
              "(".concat(
                k.shape[3],
                ") must match the inChannels dimension in ",
              ) +
              "filter ".concat(w.shape[2], ".")
            );
          }),
          null == l && (l = [1, 1]),
          g(ni(a, l), function () {
            return (
              "Error in fused depthwiseConv2d: Either strides or dilations must " +
              "be 1. Got strides ".concat(a, " and dilations '").concat(l, "'")
            );
          }),
          oi("fused depthwiseConv2d", o, h);
        var E,
          S,
          A = Jo(k.shape, w.shape, a, l, o, h, !0);
        null != f &&
          ((t = s(ra((E = ka(f, "bias", "fused conv2d")), b), 1)),
          (E = t[0]),
          Zi(A.outShape, E.shape)),
          null != v && (S = ka(v, "prelu weights", "fused depthwiseConv2d"));
        var _ = function (e, t) {
            g(ti(l), function () {
              return (
                "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations " +
                "'".concat(l, "'")
              );
            });
            var n = s(t, 4),
              r = n[0],
              i = n[1],
              u = n[2],
              c = n[3],
              f = pl(e, u, p),
              d = wl(i.shape, f, r, a, o, l, h),
              v = bl(i, f, r.shape, a, o, l, h);
            return null != c ? [d, v, gl(E, f)] : [d, v];
          },
          I = { x: k, filter: w, bias: E, preluActivationWeights: S },
          N = {
            strides: a,
            pad: o,
            dataFormat: u,
            dilations: l,
            dimRoundingMode: h,
            activation: p,
            leakyreluAlpha: m,
          };
        if (null == f) {
          var M = zs(function (e, t, n) {
            var r = da.runKernel(Rn, I, N);
            return (
              n([t, e, r]),
              x && (r = ii(r, [r.shape[1], r.shape[2], r.shape[3]])),
              { value: r, gradFunc: _ }
            );
          });
          return M(k, w);
        }
        var T = zs(function (e, t, n, r) {
          var a = da.runKernel(Rn, I, N);
          return (
            r([t, e, a, n]),
            x && (a = ii(a, [a.shape[1], a.shape[2], a.shape[3]])),
            { value: a, gradFunc: _ }
          );
        });
        return T(k, w, E);
      },
    });
    var xl = Sa({
        fusedMatMul_: function (e) {
          var t,
            n = e.a,
            r = e.b,
            a = e.transposeA,
            o = void 0 !== a && a,
            i = e.transposeB,
            u = void 0 !== i && i,
            c = e.bias,
            l = e.activation,
            h = void 0 === l ? "linear" : l,
            f = e.preluActivationWeights,
            d = e.leakyreluAlpha,
            p = void 0 === d ? 0.2 : d;
          if (!1 === ml(da.state.gradientDepth, h)) {
            var v = li(n, r, o, u);
            return null != c && (v = To(v, c)), vl(v, h, f, p);
          }
          var m = ka(n, "a", "fused matMul"),
            b = ka(r, "b", "fused matMul");
          (t = s(ra(m, b), 2)), (m = t[0]), (b = t[1]);
          var w = o ? m.shape[m.rank - 2] : m.shape[m.rank - 1],
            k = u ? b.shape[b.rank - 1] : b.shape[b.rank - 2],
            x = o ? m.shape[m.rank - 1] : m.shape[m.rank - 2],
            E = u ? b.shape[b.rank - 2] : b.shape[b.rank - 1],
            S = m.shape.slice(0, -2),
            A = b.shape.slice(0, -2),
            _ = y(S),
            I = y(A);
          g(w === k, function () {
            return (
              "Error in fused matMul: inner shapes (".concat(w, ") and (") +
              "".concat(k, ") of Tensors with shapes ").concat(m.shape, " and ") +
              "".concat(b.shape, " and transposeA=").concat(o) +
              " and transposeB=".concat(u, " must match.")
            );
          });
          var N,
            M,
            T = Zi(m.shape.slice(0, -2), b.shape.slice(0, -2)).concat([x, E]),
            D = ii(m, o ? [_, w, x] : [_, x, w]),
            R = ii(b, u ? [I, E, k] : [I, k, E]);
          null != c &&
            ((N = s(ra((N = ka(c, "bias", "fused matMul")), m), 1)[0]),
            Zi(T, N.shape)),
            null != f && (M = ka(f, "prelu weights", "fused matMul"));
          var B = function (e, t) {
              var n,
                r,
                a = s(t, 4),
                i = a[0],
                l = a[1],
                f = a[2],
                d = a[3],
                p = pl(ii(e, f.shape), f, h);
              return (
                o || u
                  ? !o && u
                    ? ((n = li(p, l, !1, !1)), (r = li(p, i, !0, !1)))
                    : o && !u
                      ? ((n = li(l, p, !1, !0)), (r = li(i, p, !1, !1)))
                      : ((n = li(l, p, !0, !0)), (r = li(p, i, !0, !0)))
                  : ((n = li(p, l, !1, !0)), (r = li(i, p, !0, !1))),
                null != c ? [n, r, gl(d, p)] : [n, r]
              );
            },
            F = { a: D, b: R, bias: N, preluActivationWeights: M },
            C = {
              transposeA: o,
              transposeB: u,
              activation: h,
              leakyreluAlpha: p,
            };
          if (null == c) {
            var P = zs(function (e, t, n) {
              var r = da.runKernel(Tn, F, C);
              return n([e, t, r]), { value: ii(r, T), gradFunc: B };
            });
            return P(D, R);
          }
          var O = zs(function (e, t, n, r) {
            var a = da.runKernel(Tn, F, C);
            return r([e, t, a, n]), { value: ii(a, T), gradFunc: B };
          });
          return O(D, R, N);
        },
      }),
      El = { __proto__: null, conv2d: yl, depthwiseConv2d: kl, matMul: xl };
    var Sl = Sa({
      hammingWindow_: function (e) {
        return hl(e, 0.54, 0.46);
      },
    });
    var Al = Sa({
      hannWindow_: function (e) {
        return hl(e, 0.5, 0.5);
      },
    });
    var _l = Sa({
      frame_: function (e, t, n, r, a) {
        void 0 === r && (r = !1), void 0 === a && (a = 0);
        for (var o = 0, i = []; o + t <= e.size; ) i.push(fi(e, o, t)), (o += n);
        if (r)
          for (; o < e.size; ) {
            var s = o + t - e.size,
              u = ci([fi(e, o, t - s), Ai([s], a)]);
            i.push(u), (o += n);
          }
        return 0 === i.length ? qc([], [0, t]) : ii(ci(i), [i.length, t]);
      },
    });
    var Il = Sa({
      stft_: function (e, t, n, r, a) {
        void 0 === a && (a = Al), null == r && (r = ll(t));
        var o = _l(e, t, n),
          i = Bo(o, a(t));
        return Cc(i, r);
      },
    });
    var Nl = Sa({
      cropAndResize_: function (e, t, n, r, a, o) {
        void 0 === a && (a = "bilinear"), void 0 === o && (o = 0);
        var i = ka(e, "image", "cropAndResize"),
          s = ka(t, "boxes", "cropAndResize", "float32"),
          u = ka(n, "boxInd", "cropAndResize", "int32"),
          c = s.shape[0];
        g(4 === i.rank, function () {
          return (
            "Error in cropAndResize: image must be rank 4," +
            "but got rank ".concat(i.rank, ".")
          );
        }),
          g(2 === s.rank && 4 === s.shape[1], function () {
            return (
              "Error in cropAndResize: boxes must be have size [".concat(
                c,
                ",4] ",
              ) + "but had shape ".concat(s.shape, ".")
            );
          }),
          g(1 === u.rank && u.shape[0] === c, function () {
            return (
              "Error in cropAndResize: boxInd must be have size [".concat(
                c,
                "] ",
              ) + "but had shape ".concat(s.shape, ".")
            );
          }),
          g(2 === r.length, function () {
            return (
              "Error in cropAndResize: cropSize must be of length 2, but got " +
              "length ".concat(r.length, ".")
            );
          }),
          g(r[0] >= 1 && r[1] >= 1, function () {
            return "cropSize must be atleast [1,1], but was ".concat(r);
          }),
          g("bilinear" === a || "nearest" === a, function () {
            return "method must be bilinear or nearest, but was ".concat(a);
          });
        var l = { image: i, boxes: s, boxInd: u },
          h = { method: a, extrapolationValue: o, cropSize: r };
        return da.runKernel(Te, l, h);
      },
    });
    var Ml = Sa({
      flipLeftRight_: function (e) {
        var t = ka(e, "image", "flipLeftRight", "float32");
        g(4 === t.rank, function () {
          return (
            "Error in flipLeftRight: image must be rank 4," +
            "but got rank ".concat(t.rank, ".")
          );
        });
        var n = { image: t };
        return da.runKernel(Ve, n, {});
      },
    });
    var Tl = Sa({
      grayscaleToRGB_: function (e) {
        var t = ka(e, "image", "grayscaleToRGB"),
          n = t.rank - 1,
          r = t.shape[n];
        g(t.rank >= 2, function () {
          return (
            "Error in grayscaleToRGB: images must be at least rank 2, " +
            "but got rank ".concat(t.rank, ".")
          );
        }),
          g(1 === r, function () {
            return (
              "Error in grayscaleToRGB: last dimension of a grayscale image " +
              "should be size 1, but got size ".concat(r, ".")
            );
          });
        var a = new Array(t.rank);
        return a.fill(1, 0, n), (a[n] = 3), xs(t, a);
      },
    });
    var Dl = Sa({
      rgbToGrayscale_: function (e) {
        var t = ka(e, "image", "RGBToGrayscale"),
          n = t.rank - 1,
          r = t.shape[n];
        g(t.rank >= 2, function () {
          return (
            "Error in RGBToGrayscale: images must be at least rank 2, " +
            "but got rank ".concat(t.rank, ".")
          );
        }),
          g(3 === r, function () {
            return (
              "Error in RGBToGrayscale: last dimension of an RGB image " +
              "should be size 3, but got size ".concat(r, ".")
            );
          });
        var a,
          o = t.dtype,
          i = Io(t, "float32"),
          s = Gc([0.2989, 0.587, 0.114]);
        switch (t.rank) {
          case 2:
            a = ns("ij,j->i", i, s);
            break;
          case 3:
            a = ns("ijk,k->ij", i, s);
            break;
          case 4:
            a = ns("ijkl,l->ijk", i, s);
            break;
          case 5:
            a = ns("ijklm,m->ijkl", i, s);
            break;
          case 6:
            a = ns("ijklmn,n->ijklm", i, s);
            break;
          default:
            throw new Error("Not a valid tensor rank.");
        }
        return (a = ws(a, -1)), Io(a, o);
      },
    });
    var Rl = Sa({
      rotateWithOffset_: function (e, t, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0.5);
        var a = ka(e, "image", "rotateWithOffset", "float32");
        g(4 === a.rank, function () {
          return (
            "Error in rotateWithOffset: image must be rank 4," +
            "but got rank ".concat(a.rank, ".")
          );
        });
        var o = { image: a },
          i = { radians: t, fillValue: n, center: r };
        return da.runKernel(Mn, o, i);
      },
    });
    function Bl(e, t, n, r, a, o) {
      null == r && (r = 0.5),
        null == a && (a = Number.NEGATIVE_INFINITY),
        null == o && (o = 0);
      var i = e.shape[0];
      return (
        (n = Math.min(n, i)),
        g(0 <= r && r <= 1, function () {
          return "iouThreshold must be in [0, 1], but was '".concat(r, "'");
        }),
        g(2 === e.rank, function () {
          return "boxes must be a 2D tensor, but was of rank '".concat(
            e.rank,
            "'",
          );
        }),
        g(4 === e.shape[1], function () {
          return "boxes must have 4 columns, but 2nd dimension was ".concat(
            e.shape[1],
          );
        }),
        g(1 === t.rank, function () {
          return "scores must be a 1D tensor";
        }),
        g(t.shape[0] === i, function () {
          return (
            "scores has incompatible shape with boxes. Expected ".concat(
              i,
              ", ",
            ) + "but was ".concat(t.shape[0])
          );
        }),
        g(0 <= o && o <= 1, function () {
          return "softNmsSigma must be in [0, 1], but was '".concat(o, "'");
        }),
        { maxOutputSize: n, iouThreshold: r, scoreThreshold: a, softNmsSigma: o }
      );
    }
    var Fl = Sa({
      nonMaxSuppression_: function (e, t, n, r, a) {
        void 0 === r && (r = 0.5), void 0 === a && (a = Number.NEGATIVE_INFINITY);
        var o = ka(e, "boxes", "nonMaxSuppression", "float32"),
          i = ka(t, "scores", "nonMaxSuppression", "float32"),
          s = Bl(o, i, n, r, a),
          u = {
            maxOutputSize: (n = s.maxOutputSize),
            iouThreshold: (r = s.iouThreshold),
            scoreThreshold: (a = s.scoreThreshold),
          };
        return da.runKernel(Et, { boxes: o, scores: i }, u);
      },
    });
    function Cl(e, t, n) {
      var r = (function (e, t, n) {
          return (function (e, t, n) {
            var r = 0,
              a = e.length,
              o = 0,
              i = !1;
            for (; r < a; ) {
              var s = n(t, e[(o = r + ((a - r) >>> 1))]);
              s > 0 ? (r = o + 1) : ((a = o), (i = !s));
            }
            return i ? r : -r - 1;
          })(e, t, n || Pl);
        })(e, t, n),
        a = r < 0 ? -(r + 1) : r;
      e.splice(a, 0, t);
    }
    function Pl(e, t) {
      return e > t ? 1 : e < t ? -1 : 0;
    }
    function Ol(e, t, n, r, a) {
      return Ul(e, t, n, r, a, 0);
    }
    function Ll(e, t, n, r, a, o) {
      return Ul(e, t, n, r, a, 0, !1, o, !0);
    }
    function zl(e, t, n, r, a, o) {
      return Ul(e, t, n, r, a, o, !0);
    }
    function Ul(e, t, n, r, a, o, i, c, l) {
      void 0 === i && (i = !1),
        void 0 === c && (c = !1),
        void 0 === l && (l = !1);
      for (var h = [], f = 0; f < t.length; f++)
        t[f] > a && h.push({ score: t[f], boxIndex: f, suppressBeginIndex: 0 });
      h.sort(ql);
      for (
        var d = o > 0 ? -0.5 / o : 0, p = [], g = [];
        p.length < n && h.length > 0;
  
      ) {
        var v = h.pop(),
          m = v.score,
          y = v.boxIndex,
          b = v.suppressBeginIndex;
        if (m < a) break;
        for (var w = !1, k = p.length - 1; k >= b; --k) {
          var x = Wl(e, y, p[k]);
          if (x >= r) {
            w = !0;
            break;
          }
          if (((v.score = v.score * Gl(r, d, x)), v.score <= a)) break;
        }
        (v.suppressBeginIndex = p.length),
          w ||
            (v.score === m
              ? (p.push(y), g.push(v.score))
              : v.score > a && Cl(h, v, ql));
      }
      var E = p.length,
        S = n - E;
      c &&
        S > 0 &&
        (p.push.apply(p, u([], s(new Array(S).fill(0)), !1)),
        g.push.apply(g, u([], s(new Array(S).fill(0)), !1)));
      var A = { selectedIndices: p };
      return i && (A.selectedScores = g), l && (A.validOutputs = E), A;
    }
    function Wl(e, t, n) {
      var r = e.subarray(4 * t, 4 * t + 4),
        a = e.subarray(4 * n, 4 * n + 4),
        o = Math.min(r[0], r[2]),
        i = Math.min(r[1], r[3]),
        s = Math.max(r[0], r[2]),
        u = Math.max(r[1], r[3]),
        c = Math.min(a[0], a[2]),
        l = Math.min(a[1], a[3]),
        h = Math.max(a[0], a[2]),
        f = Math.max(a[1], a[3]),
        d = (s - o) * (u - i),
        p = (h - c) * (f - l);
      if (d <= 0 || p <= 0) return 0;
      var g = Math.max(o, c),
        v = Math.max(i, l),
        m = Math.min(s, h),
        y = Math.min(u, f),
        b = Math.max(m - g, 0) * Math.max(y - v, 0);
      return b / (d + p - b);
    }
    function Gl(e, t, n) {
      var r = Math.exp(t * n * n);
      return n <= e ? r : 0;
    }
    function ql(e, t) {
      return (
        e.score - t.score || (e.score === t.score && t.boxIndex - e.boxIndex)
      );
    }
    var Kl = function (e, t, n, r, i) {
      return (
        void 0 === r && (r = 0.5),
        void 0 === i && (i = Number.NEGATIVE_INFINITY),
        a(this, void 0, void 0, function () {
          var a, s, u, c, l, h, f;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (a = ka(e, "boxes", "nonMaxSuppressionAsync")),
                  (s = ka(t, "scores", "nonMaxSuppressionAsync")),
                  (u = Bl(a, s, n, r, i)),
                  (n = u.maxOutputSize),
                  (r = u.iouThreshold),
                  (i = u.scoreThreshold),
                  [4, Promise.all([a.data(), s.data()])]
                );
              case 1:
                return (
                  (c = o.sent()),
                  (l = c[0]),
                  (h = c[1]),
                  (f = Ol(l, h, n, r, i).selectedIndices),
                  a !== e && a.dispose(),
                  s !== t && s.dispose(),
                  [2, Gc(f, "int32")]
                );
            }
          });
        })
      );
    };
    var Vl = Sa({
      nonMaxSuppressionWithScore_: function (e, t, n, r, a, o) {
        void 0 === r && (r = 0.5),
          void 0 === a && (a = Number.NEGATIVE_INFINITY),
          void 0 === o && (o = 0);
        var i = ka(e, "boxes", "nonMaxSuppression"),
          s = ka(t, "scores", "nonMaxSuppression"),
          u = Bl(i, s, n, r, a, o),
          c = { boxes: i, scores: s },
          l = {
            maxOutputSize: (n = u.maxOutputSize),
            iouThreshold: (r = u.iouThreshold),
            scoreThreshold: (a = u.scoreThreshold),
            softNmsSigma: (o = u.softNmsSigma),
          },
          h = da.runKernel(At, c, l);
        return { selectedIndices: h[0], selectedScores: h[1] };
      },
    });
    var Hl = function (e, t, n, r, i, s) {
      return (
        void 0 === r && (r = 0.5),
        void 0 === i && (i = Number.NEGATIVE_INFINITY),
        void 0 === s && (s = 0),
        a(this, void 0, void 0, function () {
          var a, u, c, l, h, f, d, p, g;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (a = ka(e, "boxes", "nonMaxSuppressionAsync")),
                  (u = ka(t, "scores", "nonMaxSuppressionAsync")),
                  (c = Bl(a, u, n, r, i, s)),
                  (n = c.maxOutputSize),
                  (r = c.iouThreshold),
                  (i = c.scoreThreshold),
                  (s = c.softNmsSigma),
                  [4, Promise.all([a.data(), u.data()])]
                );
              case 1:
                return (
                  (l = o.sent()),
                  (h = l[0]),
                  (f = l[1]),
                  (d = zl(h, f, n, r, i, s)),
                  (p = d.selectedIndices),
                  (g = d.selectedScores),
                  a !== e && a.dispose(),
                  u !== t && u.dispose(),
                  [2, { selectedIndices: Gc(p, "int32"), selectedScores: Gc(g) }]
                );
            }
          });
        })
      );
    };
    var jl = Sa({
      nonMaxSuppressionPadded_: function (e, t, n, r, a, o) {
        void 0 === r && (r = 0.5),
          void 0 === a && (a = Number.NEGATIVE_INFINITY),
          void 0 === o && (o = !1);
        var i = ka(e, "boxes", "nonMaxSuppression"),
          s = ka(t, "scores", "nonMaxSuppression"),
          u = Bl(i, s, n, r, a, null),
          c = { boxes: i, scores: s },
          l = {
            maxOutputSize: u.maxOutputSize,
            iouThreshold: u.iouThreshold,
            scoreThreshold: u.scoreThreshold,
            padToMaxOutputSize: o,
          },
          h = da.runKernel(St, c, l);
        return { selectedIndices: h[0], validOutputs: h[1] };
      },
    });
    var Jl = function (e, t, n, r, i, u) {
      return (
        void 0 === r && (r = 0.5),
        void 0 === i && (i = Number.NEGATIVE_INFINITY),
        void 0 === u && (u = !1),
        a(this, void 0, void 0, function () {
          var a, c, l, h, f, d, p, g, v, m, y, b;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (a = ka(e, "boxes", "nonMaxSuppressionAsync")),
                  (c = ka(t, "scores", "nonMaxSuppressionAsync")),
                  (l = Bl(a, c, n, r, i, null)),
                  (h = l.maxOutputSize),
                  (f = l.iouThreshold),
                  (d = l.scoreThreshold),
                  [4, Promise.all([a.data(), c.data()])]
                );
              case 1:
                return (
                  (p = s.apply(void 0, [o.sent(), 2])),
                  (g = p[0]),
                  (v = p[1]),
                  (m = Ll(g, v, h, f, d, u)),
                  (y = m.selectedIndices),
                  (b = m.validOutputs),
                  a !== e && a.dispose(),
                  c !== t && c.dispose(),
                  [
                    2,
                    {
                      selectedIndices: Gc(y, "int32"),
                      validOutputs: fs(b, "int32"),
                    },
                  ]
                );
            }
          });
        })
      );
    };
    var Zl = Sa({
      resizeBilinear_: function (e, t, n, r) {
        void 0 === n && (n = !1), void 0 === r && (r = !1);
        var a = ka(e, "images", "resizeBilinear");
        g(3 === a.rank || 4 === a.rank, function () {
          return (
            "Error in resizeBilinear: x must be rank 3 or 4, but got " +
            "rank ".concat(a.rank, ".")
          );
        }),
          g(2 === t.length, function () {
            return (
              "Error in resizeBilinear: new shape must 2D, but got shape " +
              "".concat(t, ".")
            );
          }),
          g(!1 === r || !1 === n, function () {
            return "Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.";
          });
        var o = a,
          i = !1;
        3 === a.rank &&
          ((i = !0), (o = ii(a, [1, a.shape[0], a.shape[1], a.shape[2]]))),
          s(t, 0);
        var u = { images: o },
          c = { alignCorners: n, halfPixelCenters: r, size: t },
          l = da.runKernel(Wt, u, c);
        return i ? ii(l, [l.shape[1], l.shape[2], l.shape[3]]) : l;
      },
    });
    var Yl = Sa({
      resizeNearestNeighbor_: function (e, t, n, r) {
        void 0 === n && (n = !1), void 0 === r && (r = !1);
        var a = ka(e, "images", "resizeNearestNeighbor");
        g(3 === a.rank || 4 === a.rank, function () {
          return (
            "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got " +
            "rank ".concat(a.rank, ".")
          );
        }),
          g(2 === t.length, function () {
            return (
              "Error in resizeNearestNeighbor: new shape must 2D, but got shape " +
              "".concat(t, ".")
            );
          }),
          g("float32" === a.dtype || "int32" === a.dtype, function () {
            return "`images` must have `int32` or `float32` as dtype";
          }),
          g(!1 === r || !1 === n, function () {
            return "Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.";
          });
        var o = a,
          i = !1;
        3 === a.rank &&
          ((i = !0), (o = ii(a, [1, a.shape[0], a.shape[1], a.shape[2]]))),
          s(t, 0);
        var u = { images: o },
          c = { alignCorners: n, halfPixelCenters: r, size: t },
          l = da.runKernel(Ut, u, c);
        return i ? ii(l, [l.shape[1], l.shape[2], l.shape[3]]) : l;
      },
    });
    var Xl = Sa({
      threshold_: function (e, t, n, r) {
        var a;
        void 0 === t && (t = "binary"),
          void 0 === n && (n = !1),
          void 0 === r && (r = 0.5);
        var o,
          i,
          u,
          c,
          l = ka(e, "image", "threshold"),
          h = l.shape[0] * l.shape[1],
          f = Bo(Gc([r]), 255);
        if (
          (g(3 === l.rank, function () {
            return (
              "Error in threshold: image must be rank 3," +
              "but got rank ".concat(l.rank, ".")
            );
          }),
          g(3 === l.shape[2] || 1 === l.shape[2], function () {
            return (
              "Error in threshold: image color channel must be equal to 3 or 1" +
              "but got ".concat(l.shape[2], ".")
            );
          }),
          g("int32" === l.dtype || "float32" === l.dtype, function () {
            return (
              "Error in dtype: image dtype must be int32 or float32," +
              "but got dtype ".concat(l.dtype, ".")
            );
          }),
          g("otsu" === t || "binary" === t, function () {
            return "Method must be binary or otsu, but was ".concat(t);
          }),
          3 === l.shape[2])
        ) {
          (o = (a = s(Fc(l, [1, 1, 1], -1), 3))[0]), (i = a[1]), (u = a[2]);
          var d = Bo(o, 0.2989),
            p = Bo(i, 0.587),
            v = Bo(u, 0.114);
          c = To(To(d, p), v);
        } else c = e;
        "otsu" === t &&
          (f = (function (e, t) {
            for (
              var n, r, a, o, i, s, u = Gc([-1]), c = Gc([0]), l = Gc([0]), h = 0;
              h < e.size - 1;
              h++
            ) {
              (n = fi(e, 0, h + 1)),
                (r = fi(e, h + 1)),
                (i = Ro(gs(n), t)),
                (s = Ro(gs(r), t));
              var f = gs(Bo(n, uc(0, n.size)));
              a = Ro(f, gs(n));
              var d = Ai(r.shape, n.size),
                p = To(uc(0, r.size), d),
                g = Bo(r, p);
              o = Ro(gs(g), gs(r));
              var v = Ks(a, o),
                m = Ks(a, o),
                y = Bo(i, s);
              l = Bo(Bo(y, v), m);
              var b = _s(l, c);
              (c = Qi(b, l, c)), (u = Qi(b, Gc([h]), u));
            }
            return u;
          })(wi(Io(yc(c), "int32"), Ia([]), 256), h));
        var m = n ? Fs(c, f) : _s(c, f);
        return Io(Bo(m, 255), "int32");
      },
    });
    var Ql = Sa({
      transform_: function (e, t, n, r, a, o) {
        void 0 === n && (n = "nearest"),
          void 0 === r && (r = "constant"),
          void 0 === a && (a = 0);
        var i = ka(e, "image", "transform", "float32"),
          s = ka(t, "transforms", "transform", "float32");
        g(4 === i.rank, function () {
          return (
            "Error in transform: image must be rank 4," +
            "but got rank ".concat(i.rank, ".")
          );
        }),
          g(
            2 === s.rank &&
              (s.shape[0] === i.shape[0] || 1 === s.shape[0]) &&
              8 === s.shape[1],
            function () {
              return "Error in transform: Input transform should be batch x 8 or 1 x 8";
            },
          ),
          g(null == o || 2 === o.length, function () {
            return (
              "Error in transform: outputShape must be [height, width] or null, " +
              "but got ".concat(o, ".")
            );
          });
        var u = { image: i, transforms: s },
          c = { interpolation: n, fillMode: r, fillValue: a, outputShape: o };
        return da.runKernel(kn, u, c);
      },
    });
    var $l = Sa({
      bandPart_: function (e, t, n) {
        var r = ka(e, "a", "bandPart");
        g(r.rank >= 2, function () {
          return "bandPart(): Rank must be at least 2, got ".concat(r.rank, ".");
        });
        var a,
          o,
          i = r.shape,
          u = s(r.shape.slice(-2), 2),
          c = u[0],
          l = u[1];
        "number" == typeof t
          ? (g(t % 1 == 0, function () {
              return "bandPart(): numLower must be an integer, got ".concat(
                t,
                ".",
              );
            }),
            g(t <= c, function () {
              return (
                "bandPart(): numLower (".concat(t, ")") +
                " must not be greater than the number of rows (".concat(c, ").")
              );
            }),
            (a = ka(t < 0 ? c : t, "numLower", "bandPart")))
          : (g("int32" === t.dtype, function () {
              return "bandPart(): numLower's dtype must be an int32.";
            }),
            (a = Qi(Bs(t, 0), c, iu(t, c)))),
          "number" == typeof n
            ? (g(n % 1 == 0, function () {
                return "bandPart(): numUpper must be an integer, got ".concat(
                  n,
                  ".",
                );
              }),
              g(n <= l, function () {
                return (
                  "bandPart(): numUpper (".concat(n, ")") +
                  " must not be greater than the number of columns (".concat(
                    l,
                    ").",
                  )
                );
              }),
              (o = ka(n < 0 ? l : n, "numUpper", "bandPart")))
            : (g("int32" === n.dtype, function () {
                return "bandPart(): numUpper's dtype must be an int32.";
              }),
              (o = Qi(Bs(n, 0), l, iu(n, l))));
        var h = ii(uc(0, c, 1, "int32"), [-1, 1]),
          f = uc(0, l, 1, "int32"),
          d = Ks(h, f),
          p = js(Fs(d, a), Is(d, Ws(o))),
          v = au([c, l], r.dtype);
        return ii(
          Lc(
            el(ii(r, [-1, c, l])).map(function (e) {
              return Qi(p, e, v);
            }),
          ),
          i,
        );
      },
    });
    var eh = Sa({
      gramSchmidt_: function (e) {
        var t;
        if (Array.isArray(e)) {
          (t = !1),
            g(null != e && e.length > 0, function () {
              return "Gram-Schmidt process: input must not be null, undefined, or empty";
            });
          for (
            var n = e[0].shape[0],
              r = function (t) {
                g(e[t].shape[0] === n, function () {
                  return (
                    "Gram-Schmidt: Non-unique lengths found in the input vectors: " +
                    "(".concat(e[t].shape[0], " vs. ").concat(n, ")")
                  );
                });
              },
              a = 1;
            a < e.length;
            ++a
          )
            r(a);
        } else
          (t = !0),
            (e = Fc(e, e.shape[0], 0).map(function (e) {
              return Oc(e, [0]);
            }));
        g(e.length <= e[0].shape[0], function () {
          return (
            "Gram-Schmidt: Number of vectors (".concat(e.length, ") exceeds ") +
            "number of dimensions (".concat(e[0].shape[0], ").")
          );
        });
        var o = [],
          i = e,
          s = function (e) {
            o.push(
              da.tidy(function () {
                var t = i[e];
                if (e > 0)
                  for (var n = 0; n < e; ++n) {
                    var r = Bo(gs(Bo(o[n], t)), o[n]);
                    t = Ks(t, r);
                  }
                return Ro(t, ms(t, "euclidean"));
              }),
            );
          };
        for (a = 0; a < e.length; ++a) s(a);
        return t ? Lc(o, 0) : o;
      },
    });
    function th(e, t) {
      return (
        void 0 === t && (t = !1),
        da.tidy(function () {
          g(2 === e.shape.length, function () {
            return "qr2d() requires a 2D Tensor, but got a ".concat(
              e.shape.length,
              "D Tensor.",
            );
          });
          for (
            var n = e.shape[0],
              r = e.shape[1],
              a = Es(n),
              o = No(e),
              i = qc([[1]], [1, 1]),
              u = No(i),
              c = n >= r ? r : n,
              l = function (e) {
                var t,
                  c = o,
                  l = u,
                  h = a;
                (t = s(
                  da.tidy(function () {
                    var t = fi(o, [e, e], [n - e, 1]),
                      s = ms(t),
                      c = fi(o, [e, e], [1, 1]),
                      l = Qi(_s(c, 0), qc([[-1]]), qc([[1]])),
                      h = Ks(c, Bo(l, s)),
                      f = Ro(t, h);
                    u =
                      1 === f.shape[0]
                        ? No(i)
                        : ci([i, fi(f, [1, 0], [f.shape[0] - 1, f.shape[1]])], 0);
                    var d = Ws(Ro(li(l, h), s)),
                      p = fi(o, [e, 0], [n - e, r]),
                      g = Bo(d, u),
                      v = al(u);
                    if (0 === e) o = Ks(p, li(g, li(v, p)));
                    else {
                      var m = Ks(p, li(g, li(v, p)));
                      o = ci([fi(o, [0, 0], [e, r]), m], 0);
                    }
                    var y = al(g),
                      b = fi(a, [0, e], [n, a.shape[1] - e]);
                    if (0 === e) a = Ks(b, li(li(b, u), y));
                    else {
                      var w = Ks(b, li(li(b, u), y));
                      a = ci([fi(a, [0, 0], [n, e]), w], 1);
                    }
                    return [u, o, a];
                  }),
                  3,
                )),
                  (u = t[0]),
                  (o = t[1]),
                  (a = t[2]),
                  Da([c, l, h]);
              },
              h = 0;
            h < c;
            ++h
          )
            l(h);
          return (
            !t &&
              n > r &&
              ((a = fi(a, [0, 0], [n, r])), (o = fi(o, [0, 0], [r, r]))),
            [a, o]
          );
        })
      );
    }
    var nh,
      rh = Sa({
        qr_: function (e, t) {
          if (
            (void 0 === t && (t = !1),
            g(e.rank >= 2, function () {
              return "qr() requires input tensor to have a rank >= 2, but got rank ".concat(
                e.rank,
              );
            }),
            2 === e.rank)
          )
            return th(e, t);
          var n = e.shape.slice(0, e.shape.length - 2).reduce(function (e, t) {
              return e * t;
            }),
            r = el(
              ii(e, [
                n,
                e.shape[e.shape.length - 2],
                e.shape[e.shape.length - 1],
              ]),
              0,
            ),
            a = [],
            o = [];
          return (
            r.forEach(function (e) {
              var n = s(th(e, t), 2),
                r = n[0],
                i = n[1];
              a.push(r), o.push(i);
            }),
            [ii(Lc(a, 0), e.shape), ii(Lc(o, 0), e.shape)]
          );
        },
      });
    (e.Reduction = void 0),
      ((nh = e.Reduction || (e.Reduction = {}))[(nh.NONE = 0)] = "NONE"),
      (nh[(nh.MEAN = 1)] = "MEAN"),
      (nh[(nh.SUM = 2)] = "SUM"),
      (nh[(nh.SUM_BY_NONZERO_WEIGHTS = 3)] = "SUM_BY_NONZERO_WEIGHTS");
    var ah = Sa({
      computeWeightedLoss_: function (t, n, r) {
        void 0 === r && (r = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var a = ka(t, "losses", "computeWeightedLoss"),
          o = null;
        null != n && (o = ka(n, "weights", "computeWeightedLoss"));
        var i = null == o ? a : Bo(a, o);
        if (r === e.Reduction.NONE) return i;
        if (r === e.Reduction.SUM) return gs(i);
        if (r === e.Reduction.MEAN) {
          if (null == o) return ru(i);
          var s = a.size / o.size,
            u = Ro(gs(i), gs(o));
          return s > 1 ? Ro(u, fs(s)) : u;
        }
        if (r === e.Reduction.SUM_BY_NONZERO_WEIGHTS) {
          if (null == o) return Ro(gs(i), fs(a.size));
          var c = Bo(o, ou(a.shape)),
            l = Io(gs(fu(c, fs(0))), "float32");
          return Ro(gs(i), l);
        }
        throw Error("Unknown reduction: ".concat(r));
      },
    });
    var oh = Sa({
      absoluteDifference_: function (t, n, r, a) {
        void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var o = ka(t, "labels", "absoluteDifference"),
          i = ka(n, "predictions", "absoluteDifference"),
          s = null;
        null != r && (s = ka(r, "weights", "absoluteDifference")),
          v(o.shape, i.shape, "Error in absoluteDifference: ");
        var u = Fo(Ks(o, i));
        return ah(u, s, a);
      },
    });
    var ih = Sa({
      cosineDistance_: function (t, n, r, a, o) {
        void 0 === o && (o = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var i = ka(t, "labels", "cosineDistance"),
          s = ka(n, "predictions", "cosineDistance"),
          u = null;
        null != a && (u = ka(a, "weights", "cosineDistance")),
          v(i.shape, s.shape, "Error in cosineDistance: ");
        var c = fs(1),
          l = Ks(c, gs(Bo(i, s), r, !0));
        return ah(l, u, o);
      },
    });
    var sh = Sa({
      hingeLoss_: function (t, n, r, a) {
        void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var o = ka(t, "labels", "hingeLoss"),
          i = ka(n, "predictions", "hingeLoss"),
          s = null;
        null != r && (s = ka(r, "weights", "hingeLoss")),
          v(o.shape, i.shape, "Error in hingeLoss: ");
        var u = fs(1);
        o = Ks(Bo(fs(2), o), u);
        var c = hc(Ks(u, Bo(o, i)));
        return ah(c, s, a);
      },
    });
    var uh = Sa({
      huberLoss_: function (t, n, r, a, o) {
        void 0 === a && (a = 1),
          void 0 === o && (o = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var i = ka(t, "labels", "huberLoss"),
          s = ka(n, "predictions", "huberLoss"),
          u = null;
        null != r && (u = ka(r, "weights", "huberLoss")),
          v(i.shape, s.shape, "Error in huberLoss: ");
        var c = fs(a),
          l = Fo(Ks(s, i)),
          h = iu(l, c),
          f = Ks(l, h),
          d = To(Bo(fs(0.5), ps(h)), Bo(c, f));
        return ah(d, u, o);
      },
    });
    var ch = Sa({
      logLoss_: function (t, n, r, a, o) {
        void 0 === a && (a = 1e-7),
          void 0 === o && (o = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var i = ka(t, "labels", "logLoss"),
          s = ka(n, "predictions", "logLoss"),
          u = null;
        null != r && (u = ka(r, "weights", "logLoss")),
          v(i.shape, s.shape, "Error in logLoss: ");
        var c = fs(1),
          l = fs(a),
          h = Ws(Bo(i, Ps(To(s, l)))),
          f = Bo(Ks(c, i), Ps(To(Ks(c, s), l))),
          d = Ks(h, f);
        return ah(d, u, o);
      },
    });
    var lh = Sa({
      meanSquaredError_: function (t, n, r, a) {
        void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var o = ka(t, "labels", "meanSquaredError"),
          i = ka(n, "predictions", "meanSquaredError"),
          s = null;
        null != r && (s = ka(r, "weights", "meanSquaredError")),
          v(o.shape, i.shape, "Error in meanSquaredError: ");
        var u = Pc(o, i);
        return ah(u, s, a);
      },
    });
    var hh = Sa({
      sigmoidCrossEntropy_: function (t, n, r, a, o) {
        void 0 === a && (a = 0),
          void 0 === o && (o = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var i = ka(t, "multiClassLabels", "sigmoidCrossEntropy"),
          s = ka(n, "logits", "sigmoidCrossEntropy"),
          u = null;
        if (
          (null != r && (u = ka(r, "weights", "sigmoidCrossEntropy")),
          v(i.shape, s.shape, "Error in sigmoidCrossEntropy: "),
          a > 0)
        ) {
          var c = fs(a),
            l = fs(1),
            h = fs(0.5);
          i = To(Bo(i, Ks(l, c)), Bo(h, c));
        }
        var f = (function (e, t) {
          var n = ka(e, "labels", "sigmoidCrossEntropyWithLogits"),
            r = ka(t, "logits", "sigmoidCrossEntropyWithLogits");
          v(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
          var a = hc(r),
            o = Bo(r, n),
            i = Os(bs(Ws(Fo(r))));
          return To(Ks(a, o), i);
        })(i, s);
        return ah(f, u, o);
      },
    });
    var fh = Sa({
      softmaxCrossEntropy_: function (t, n, r, a, o) {
        void 0 === a && (a = 0),
          void 0 === o && (o = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
        var i = ka(t, "onehotLabels", "softmaxCrossEntropy"),
          u = ka(n, "logits", "softmaxCrossEntropy"),
          c = null;
        if (
          (null != r && (c = ka(r, "weights", "softmaxCrossEntropy")),
          v(i.shape, u.shape, "Error in softmaxCrossEntropy: "),
          a > 0)
        ) {
          var l = fs(a),
            h = fs(1),
            f = fs(i.shape[1]);
          i = To(Bo(i, Ks(h, l)), Ro(l, f));
        }
        var d = (function (e, t, n) {
          if (
            (void 0 === n && (n = -1),
            -1 === n && (n = t.rank - 1),
            n !== t.rank - 1)
          )
            throw Error(
              "Softmax cross entropy along a non-last dimension is not yet " +
                "supported. Labels / logits was rank ".concat(t.rank, " ") +
                "and dim was ".concat(n),
            );
          var r = zs(function (e, t, r) {
            var a = Hs(t, [n], !0),
              o = Ks(Io(t, "float32"), a);
            r([e, o]);
            var i = Ws(Bo(o, e));
            return {
              value: gs(i, [n]),
              gradFunc: function (e, t) {
                var r = s(t, 2),
                  a = r[0],
                  o = r[1],
                  i = us(e.shape, [n]);
                return [
                  Bo(ii(e, i), Ks(Io(a, "float32"), bs(o))),
                  Bo(ii(e, i), Ks(bs(o), Io(a, "float32"))),
                ];
              },
            };
          });
          return r(e, t);
        })(i, u);
        return ah(d, c, o);
      },
    });
    var dh = Sa({
      sparseFillEmptyRows_: function (e, t, n, r) {
        var a = ka(e, "indices", "sparseFillEmptyRows", "int32"),
          o = ka(t, "values", "sparseFillEmptyRows"),
          i = ka(n, "denseShape", "sparseFillEmptyRows", "int32"),
          s = ka(r, "defaultValue", "sparseFillEmptyRows", o.dtype);
        if (2 !== a.rank)
          throw new Error(
            "Indices should be Tensor2D but received shape\n        ".concat(
              a.shape,
            ),
          );
        if (1 !== o.rank)
          throw new Error(
            "Values should be Tensor1D but received shape ".concat(o.shape),
          );
        if (1 !== i.rank)
          throw new Error(
            "Dense shape should be Tensor1D but received shape ".concat(i.shape),
          );
        if (0 !== s.rank)
          throw new Error(
            "Default value should be a scalar but received shape ".concat(
              s.shape,
            ),
          );
        var u = { indices: a, values: o, denseShape: i, defaultValue: s },
          c = da.runKernel(sn, u);
        return {
          outputIndices: c[0],
          outputValues: c[1],
          emptyRowIndicator: c[2],
          reverseIndexMap: c[3],
        };
      },
    });
    var ph = Sa({
      sparseReshape_: function (e, t, n) {
        var r = ka(e, "inputIndices", "sparseReshape", "int32"),
          a = ka(t, "inputShape", "sparseReshape", "int32"),
          o = ka(n, "newShape", "sparseReshape", "int32");
        if (2 !== r.rank)
          throw new Error(
            "Input indices should be Tensor2D but received shape\n        ".concat(
              r.shape,
            ),
          );
        if (1 !== a.rank)
          throw new Error(
            "Input shape should be Tensor1D but received shape ".concat(a.shape),
          );
        if (1 !== o.rank)
          throw new Error(
            "New shape should be Tensor1D but received shape ".concat(o.shape),
          );
        var i = { inputIndices: r, inputShape: a, newShape: o },
          s = da.runKernel(un, i);
        return { outputIndices: s[0], outputShape: s[1] };
      },
    });
    var gh = Sa({
      sparseSegmentMean_: function (e, t, n) {
        var r = ka(e, "data", "sparseSegmentMean"),
          a = ka(t, "indices", "sparseSegmentMean", "int32"),
          o = ka(n, "segmentIds", "sparseSegmentMean", "int32");
        if (r.rank < 1)
          throw new Error(
            "Data should be at least 1 dimensional but received scalar",
          );
        if (1 !== a.rank)
          throw new Error(
            "Indices should be Tensor1D but received shape\n          ".concat(
              a.shape,
            ),
          );
        if (1 !== o.rank)
          throw new Error(
            "Segment ids should be Tensor1D but received shape\n          ".concat(
              o.shape,
            ),
          );
        var i = { data: r, indices: a, segmentIds: o };
        return da.runKernel(cn, i);
      },
    });
    var vh = Sa({
      sparseSegmentSum_: function (e, t, n) {
        var r = ka(e, "data", "sparseSegmentSum"),
          a = ka(t, "indices", "sparseSegmentSum", "int32"),
          o = ka(n, "segmentIds", "sparseSegmentSum", "int32");
        if (r.rank < 1)
          throw new Error(
            "Data should be at least 1 dimensional but received scalar",
          );
        if (1 !== a.rank)
          throw new Error(
            "Indices should be Tensor1D but received shape\n         ".concat(
              a.shape,
            ),
          );
        if (1 !== o.rank)
          throw new Error(
            "Segment ids should be Tensor1D but received shape\n         ".concat(
              o.shape,
            ),
          );
        var i = { data: r, indices: a, segmentIds: o };
        return da.runKernel(ln, i);
      },
    });
    var mh = Sa({
      stringNGrams_: function (e, t, n, r, a, o, i, s) {
        var u = ka(e, "data", "stringNGrams", "string");
        if ("string" !== u.dtype)
          throw new Error("Data must be of datatype string");
        if (1 !== u.shape.length)
          throw new Error("Data must be a vector, saw: ".concat(u.shape));
        var c = ka(t, "dataSplits", "stringNGrams");
        if ("int32" !== c.dtype)
          throw new Error("Data splits must be of datatype int32");
        var l = {
            separator: n,
            nGramWidths: r,
            leftPad: a,
            rightPad: o,
            padWidth: i,
            preserveShortSequences: s,
          },
          h = { data: u, dataSplits: c },
          f = da.runKernel(gn, h, l);
        return { nGrams: f[0], nGramsSplits: f[1] };
      },
    });
    var yh = { fft: Dc, ifft: Rc, rfft: Cc, irfft: Bc },
      bh = { hammingWindow: Sl, hannWindow: Al, frame: _l, stft: Il },
      wh = {
        flipLeftRight: Ml,
        grayscaleToRGB: Tl,
        resizeNearestNeighbor: Yl,
        resizeBilinear: Zl,
        rgbToGrayscale: Dl,
        rotateWithOffset: Rl,
        cropAndResize: Nl,
        nonMaxSuppression: Fl,
        nonMaxSuppressionAsync: Kl,
        nonMaxSuppressionWithScore: Vl,
        nonMaxSuppressionWithScoreAsync: Hl,
        nonMaxSuppressionPadded: jl,
        nonMaxSuppressionPaddedAsync: Jl,
        threshold: Xl,
        transform: Ql,
      },
      kh = { bandPart: $l, gramSchmidt: eh, qr: rh },
      xh = {
        absoluteDifference: oh,
        computeWeightedLoss: ah,
        cosineDistance: ih,
        hingeLoss: sh,
        huberLoss: uh,
        logLoss: ch,
        meanSquaredError: lh,
        sigmoidCrossEntropy: hh,
        softmaxCrossEntropy: fh,
      },
      Eh = {
        sparseFillEmptyRows: dh,
        sparseReshape: ph,
        sparseSegmentMean: gh,
        sparseSegmentSum: vh,
      },
      Sh = {
        stringNGrams: mh,
        stringSplit: Sa({
          stringSplit_: function (e, t, n) {
            void 0 === n && (n = !0);
            var r = ka(e, "input", "stringSplit", "string"),
              a = ka(t, "delimiter", "stringSplit", "string");
            if (1 !== r.rank)
              throw new Error(
                "Input should be Tensor1D but received shape ".concat(r.shape),
              );
            if (0 !== a.rank)
              throw new Error(
                "Delimiter should be a scalar but received shape ".concat(
                  a.shape,
                ),
              );
            var o = { skipEmpty: n },
              i = { input: r, delimiter: a },
              s = da.runKernel(vn, i, o);
            return { indices: s[0], values: s[1], shape: s[2] };
          },
        }),
        stringToHashBucketFast: Sa({
          stringToHashBucketFast_: function (e, t) {
            var n = ka(e, "input", "stringToHashBucketFast", "string"),
              r = { numBuckets: t };
            if (t <= 0) throw new Error("Number of buckets must be at least 1");
            var a = { input: n };
            return da.runKernel(mn, a, r);
          },
        }),
        staticRegexReplace: Sa({
          staticRegexReplace_: function (e, t, n, r) {
            void 0 === r && (r = !0);
            var a = ka(e, "input", "staticRegexReplace", "string"),
              o = { pattern: t, rewrite: n, replaceGlobal: r };
            return da.runKernel(dn, { x: a }, o);
          },
        }),
      },
      Ah = new Map(),
      _h = new Map(),
      Ih = (function () {
        function e() {}
        return (
          (e.prototype.getClassName = function () {
            return this.constructor.className;
          }),
          (e.fromConfig = function (e, t) {
            return new e(t);
          }),
          e
        );
      })(),
      Nh = (function () {
        function e() {
          this.classNameMap = {};
        }
        return (
          (e.getMap = function () {
            return null == e.instance && (e.instance = new e()), e.instance;
          }),
          (e.register = function (t) {
            e.getMap().classNameMap[t.className] = [t, t.fromConfig];
          }),
          e
        );
      })();
    function Mh(e, t, n) {
      g(null != e.className, function () {
        return "Class being registered does not have the static className property defined.";
      }),
        g("string" == typeof e.className, function () {
          return (
            "className is required to be a string, but got type " +
            typeof e.className
          );
        }),
        g(e.className.length > 0, function () {
          return "Class being registered has an empty-string as its className, which is disallowed.";
        }),
        "undefined" == typeof t && (t = "Custom"),
        "undefined" == typeof n && (n = e.className);
      var r = t + ">" + n;
      return Nh.register(e), Ah.set(r, e), _h.set(e, r), e;
    }
    var Th = {
        __proto__: null,
        Serializable: Ih,
        SerializationMap: Nh,
        getRegisteredName: function (e) {
          return _h.has(e) ? _h.get(e) : e.className;
        },
        registerClass: Mh,
      },
      Dh = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.prototype.minimize = function (e, t, n) {
            void 0 === t && (t = !1);
            var r = this.computeGradients(e, n),
              a = r.value,
              o = r.grads;
            if (null != n) {
              var i = n.map(function (e) {
                return { name: e.name, tensor: o[e.name] };
              });
              this.applyGradients(i);
            } else this.applyGradients(o);
            return Da(o), t ? a : (a.dispose(), null);
          }),
          Object.defineProperty(t.prototype, "iterations", {
            get: function () {
              return (
                null == this.iterations_ && (this.iterations_ = 0),
                this.iterations_
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.incrementIterations = function () {
            this.iterations_ = this.iterations + 1;
          }),
          (t.prototype.computeGradients = function (e, t) {
            return Ls(e, t);
          }),
          (t.prototype.dispose = function () {
            null != this.iterations_ && Da(this.iterations_);
          }),
          (t.prototype.saveIterations = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                return (
                  null == this.iterations_ && (this.iterations_ = 0),
                  [2, { name: "iter", tensor: fs(this.iterations_, "int32") }]
                );
              });
            });
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                throw new Error(
                  "getWeights() is not implemented for this optimizer yet.",
                );
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                throw new Error(
                  "setWeights() is not implemented for this optimizer class " +
                    "".concat(this.getClassName()),
                );
              });
            });
          }),
          (t.prototype.extractIterations = function (e) {
            return a(this, void 0, void 0, function () {
              var t;
              return o(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (t = this), [4, e[0].tensor.data()];
                  case 1:
                    return (t.iterations_ = n.sent()[0]), [2, e.slice(1)];
                }
              });
            });
          }),
          t
        );
      })(Ih);
    Object.defineProperty(Dh, Symbol.hasInstance, {
      value: function (e) {
        return (
          null != e.minimize &&
          null != e.computeGradients &&
          null != e.applyGradients
        );
      },
    });
    var Rh = (function (e) {
        function t(t, n, r) {
          void 0 === r && (r = null);
          var a = e.call(this) || this;
          return (
            (a.learningRate = t),
            (a.rho = n),
            (a.epsilon = r),
            (a.accumulatedGrads = []),
            (a.accumulatedUpdates = []),
            null == r && (a.epsilon = da.backend.epsilon()),
            a
          );
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "Adadelta";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this;
            (Array.isArray(e)
              ? e.map(function (e) {
                  return e.name;
                })
              : Object.keys(e)
            ).forEach(function (n, r) {
              var a = da.registeredVariables[n];
              null == t.accumulatedGrads[r] &&
                (t.accumulatedGrads[r] = {
                  originalName: "".concat(n, "/accum_grad"),
                  variable: Ta(function () {
                    return $i(a).variable(false);
                  }),
                }),
                null == t.accumulatedUpdates[r] &&
                  (t.accumulatedUpdates[r] = {
                    originalName: "".concat(n, "/accum_var"),
                    variable: Ta(function () {
                      return $i(a).variable(false);
                    }),
                  });
              var o = Array.isArray(e) ? e[r].tensor : e[n];
              if (null != o) {
                var i = t.accumulatedGrads[r].variable,
                  s = t.accumulatedUpdates[r].variable;
                Ta(function () {
                  var e = To(Bo(i, t.rho), Bo(ps(o), 1 - t.rho)),
                    n = Bo(Ro(ds(To(s, t.epsilon)), ds(To(i, t.epsilon))), o),
                    r = To(Bo(s, t.rho), Bo(ps(n), 1 - t.rho));
                  i.assign(e), s.assign(r);
                  var u = To(Bo(n, -t.learningRate), a);
                  a.assign(u);
                });
              }
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            null != this.accumulatedUpdates &&
              (Da(
                this.accumulatedGrads.map(function (e) {
                  return e.variable;
                }),
              ),
              Da(
                this.accumulatedUpdates.map(function (e) {
                  return e.variable;
                }),
              ));
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = u(
                        u([], s(this.accumulatedGrads), !1),
                        s(this.accumulatedUpdates),
                        !1,
                      )),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [t.sent()].concat(
                        e.map(function (e) {
                          return { name: e.originalName, tensor: e.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              var t;
              return o(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    return (
                      (e = n.sent()),
                      (t = e.length / 2),
                      !1,
                      (this.accumulatedGrads = e.slice(0, t).map(function (e) {
                        return {
                          originalName: e.name,
                          variable: e.tensor.variable(false),
                        };
                      })),
                      (this.accumulatedUpdates = e
                        .slice(t, 2 * t)
                        .map(function (e) {
                          return {
                            originalName: e.name,
                            variable: e.tensor.variable(false),
                          };
                        })),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              rho: this.rho,
              epsilon: this.epsilon,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate, t.rho, t.epsilon);
          }),
          t
        );
      })(Dh),
      Bh = (function (e) {
        function t(t, n) {
          void 0 === n && (n = 0.1);
          var r = e.call(this) || this;
          return (
            (r.learningRate = t),
            (r.initialAccumulatorValue = n),
            (r.accumulatedGrads = []),
            r
          );
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "Adagrad";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this;
            (Array.isArray(e)
              ? e.map(function (e) {
                  return e.name;
                })
              : Object.keys(e)
            ).forEach(function (n, r) {
              var a = da.registeredVariables[n];
              if (null == t.accumulatedGrads[r]) {
                t.accumulatedGrads[r] = {
                  originalName: "".concat(n, "/accumulator"),
                  variable: Ta(function () {
                    return Ai(a.shape, t.initialAccumulatorValue).variable(false);
                  }),
                };
              }
              var o = Array.isArray(e) ? e[r].tensor : e[n];
              if (null != o) {
                var i = t.accumulatedGrads[r].variable;
                Ta(function () {
                  var e = To(i, ps(o));
                  i.assign(e);
                  var n = To(
                    Bo(Ro(o, ds(To(e, da.backend.epsilon()))), -t.learningRate),
                    a,
                  );
                  a.assign(n);
                });
              }
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            null != this.accumulatedGrads &&
              Da(
                this.accumulatedGrads.map(function (e) {
                  return e.variable;
                }),
              );
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.saveIterations()];
                  case 1:
                    return [
                      2,
                      [e.sent()].concat(
                        this.accumulatedGrads.map(function (e) {
                          return { name: e.originalName, tensor: e.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    return (
                      (e = t.sent()),
                      !1,
                      (this.accumulatedGrads = e.map(function (e) {
                        return {
                          originalName: e.name,
                          variable: e.tensor.variable(false),
                        };
                      })),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              initialAccumulatorValue: this.initialAccumulatorValue,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate, t.initialAccumulatorValue);
          }),
          t
        );
      })(Dh),
      Fh = (function (e) {
        function t(t, n, r, a) {
          void 0 === a && (a = null);
          var o = e.call(this) || this;
          return (
            (o.learningRate = t),
            (o.beta1 = n),
            (o.beta2 = r),
            (o.epsilon = a),
            (o.accumulatedFirstMoment = []),
            (o.accumulatedSecondMoment = []),
            Ta(function () {
              (o.accBeta1 = fs(n).variable()), (o.accBeta2 = fs(r).variable());
            }),
            null == a && (o.epsilon = da.backend.epsilon()),
            o
          );
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "Adam";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this,
              n = Array.isArray(e)
                ? e.map(function (e) {
                    return e.name;
                  })
                : Object.keys(e);
            Ta(function () {
              var r = Ks(1, t.accBeta1),
                a = Ks(1, t.accBeta2);
              n.forEach(function (n, o) {
                var i = da.registeredVariables[n];
                null == t.accumulatedFirstMoment[o] &&
                  (t.accumulatedFirstMoment[o] = {
                    originalName: "".concat(n, "/m"),
                    variable: Ta(function () {
                      return $i(i).variable(false);
                    }),
                  }),
                  null == t.accumulatedSecondMoment[o] &&
                    (t.accumulatedSecondMoment[o] = {
                      originalName: "".concat(n, "/v"),
                      variable: Ta(function () {
                        return $i(i).variable(false);
                      }),
                    });
                var s = Array.isArray(e) ? e[o].tensor : e[n];
                if (null != s) {
                  var u = t.accumulatedFirstMoment[o].variable,
                    c = t.accumulatedSecondMoment[o].variable,
                    l = To(Bo(u, t.beta1), Bo(s, 1 - t.beta1)),
                    h = To(Bo(c, t.beta2), Bo(ps(s), 1 - t.beta2)),
                    f = Ro(l, r),
                    d = Ro(h, a);
                  u.assign(l), c.assign(h);
                  var p = To(Bo(Ro(f, To(ds(d), t.epsilon)), -t.learningRate), i);
                  i.assign(p);
                }
              }),
                t.accBeta1.assign(Bo(t.accBeta1, t.beta1)),
                t.accBeta2.assign(Bo(t.accBeta2, t.beta2));
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            this.accBeta1.dispose(),
              this.accBeta2.dispose(),
              null != this.accumulatedFirstMoment &&
                Da(
                  this.accumulatedFirstMoment.map(function (e) {
                    return e.variable;
                  }),
                ),
              null != this.accumulatedSecondMoment &&
                Da(
                  this.accumulatedSecondMoment.map(function (e) {
                    return e.variable;
                  }),
                );
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = u(
                        u([], s(this.accumulatedFirstMoment), !1),
                        s(this.accumulatedSecondMoment),
                        !1,
                      )),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [t.sent()].concat(
                        e.map(function (e) {
                          return { name: e.originalName, tensor: e.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              var t,
                n = this;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    return (
                      (e = r.sent()),
                      Ta(function () {
                        n.accBeta1.assign(hs(n.beta1, n.iterations_ + 1)),
                          n.accBeta2.assign(hs(n.beta2, n.iterations_ + 1));
                      }),
                      (t = e.length / 2),
                      !1,
                      (this.accumulatedFirstMoment = e
                        .slice(0, t)
                        .map(function (e) {
                          return {
                            originalName: e.name,
                            variable: e.tensor.variable(false),
                          };
                        })),
                      (this.accumulatedSecondMoment = e
                        .slice(t, 2 * t)
                        .map(function (e) {
                          return {
                            originalName: e.name,
                            variable: e.tensor.variable(false),
                          };
                        })),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              beta1: this.beta1,
              beta2: this.beta2,
              epsilon: this.epsilon,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate, t.beta1, t.beta2, t.epsilon);
          }),
          t
        );
      })(Dh),
      Ch = (function (e) {
        function t(t, n, r, a, o) {
          void 0 === a && (a = null), void 0 === o && (o = 0);
          var i = e.call(this) || this;
          return (
            (i.learningRate = t),
            (i.beta1 = n),
            (i.beta2 = r),
            (i.epsilon = a),
            (i.decay = o),
            (i.accumulatedFirstMoment = []),
            (i.accumulatedWeightedInfNorm = []),
            Ta(function () {
              (i.iteration = fs(0).variable()), (i.accBeta1 = fs(n).variable());
            }),
            null == a && (i.epsilon = da.backend.epsilon()),
            i
          );
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "Adamax";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this,
              n = Array.isArray(e)
                ? e.map(function (e) {
                    return e.name;
                  })
                : Object.keys(e);
            Ta(function () {
              var r = Ks(1, t.accBeta1),
                a = Ro(-t.learningRate, To(Bo(t.iteration, t.decay), 1));
              n.forEach(function (n, o) {
                var i = da.registeredVariables[n];
                null == t.accumulatedFirstMoment[o] &&
                  (t.accumulatedFirstMoment[o] = {
                    originalName: "".concat(n, "/m"),
                    variable: $i(i).variable(false),
                  }),
                  null == t.accumulatedWeightedInfNorm[o] &&
                    (t.accumulatedWeightedInfNorm[o] = {
                      originalName: "".concat(n, "/v"),
                      variable: $i(i).variable(false),
                    });
                var s = Array.isArray(e) ? e[o].tensor : e[n];
                if (null != s) {
                  var u = t.accumulatedFirstMoment[o].variable,
                    c = t.accumulatedWeightedInfNorm[o].variable,
                    l = To(Bo(u, t.beta1), Bo(s, 1 - t.beta1)),
                    h = Bo(c, t.beta2),
                    f = Fo(s),
                    d = nu(h, f);
                  u.assign(l), c.assign(d);
                  var p = To(Bo(Ro(a, r), Ro(l, To(d, t.epsilon))), i);
                  i.assign(p);
                }
              }),
                t.iteration.assign(To(t.iteration, 1)),
                t.accBeta1.assign(Bo(t.accBeta1, t.beta1));
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            this.accBeta1.dispose(),
              this.iteration.dispose(),
              null != this.accumulatedFirstMoment &&
                Da(
                  this.accumulatedFirstMoment.map(function (e) {
                    return e.variable;
                  }),
                ),
              null != this.accumulatedWeightedInfNorm &&
                Da(
                  this.accumulatedWeightedInfNorm.map(function (e) {
                    return e.variable;
                  }),
                );
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                throw new Error(
                  "getWeights() is not implemented for Adamax yet.",
                );
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                throw new Error(
                  "setWeights() is not implemented for Adamax yet.",
                );
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              beta1: this.beta1,
              beta2: this.beta2,
              epsilon: this.epsilon,
              decay: this.decay,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate, t.beta1, t.beta2, t.epsilon, t.decay);
          }),
          t
        );
      })(Dh),
      Ph = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.learningRate = t), n.setLearningRate(t), n;
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "SGD";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this;
            (Array.isArray(e)
              ? e.map(function (e) {
                  return e.name;
                })
              : Object.keys(e)
            ).forEach(function (n, r) {
              var a = Array.isArray(e) ? e[r].tensor : e[n];
              if (null != a) {
                var o = da.registeredVariables[n];
                Ta(function () {
                  var e = To(Bo(t.c, a), o);
                  o.assign(e);
                });
              }
            }),
              this.incrementIterations();
          }),
          (t.prototype.setLearningRate = function (e) {
            (this.learningRate = e),
              null != this.c && this.c.dispose(),
              (this.c = Ra(fs(-e)));
          }),
          (t.prototype.dispose = function () {
            this.c.dispose();
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.saveIterations()];
                  case 1:
                    return [2, [e.sent()]];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    if (0 !== (e = t.sent()).length)
                      throw new Error(
                        "SGD optimizer does not have settable weights.",
                      );
                    return [2];
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return { learningRate: this.learningRate };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate);
          }),
          t
        );
      })(Dh),
      Oh = (function (e) {
        function t(t, n, r) {
          void 0 === r && (r = !1);
          var a = e.call(this, t) || this;
          return (
            (a.learningRate = t),
            (a.momentum = n),
            (a.useNesterov = r),
            (a.accumulations = []),
            (a.m = fs(a.momentum)),
            a
          );
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "Momentum";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this;
            (Array.isArray(e)
              ? e.map(function (e) {
                  return e.name;
                })
              : Object.keys(e)
            ).forEach(function (n, r) {
              var a = da.registeredVariables[n];
              if (null == t.accumulations[r]) {
                t.accumulations[r] = {
                  originalName: "".concat(n, "/momentum"),
                  variable: Ta(function () {
                    return $i(a).variable(false);
                  }),
                };
              }
              var o = t.accumulations[r].variable,
                i = Array.isArray(e) ? e[r].tensor : e[n];
              null != i &&
                Ta(function () {
                  var e,
                    n = To(Bo(t.m, o), i);
                  (e = t.useNesterov
                    ? To(Bo(t.c, To(i, Bo(n, t.m))), a)
                    : To(Bo(t.c, n), a)),
                    o.assign(n),
                    a.assign(e);
                });
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            this.m.dispose(),
              null != this.accumulations &&
                Da(
                  this.accumulations.map(function (e) {
                    return e.variable;
                  }),
                );
          }),
          (t.prototype.setMomentum = function (e) {
            this.momentum = e;
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.saveIterations()];
                  case 1:
                    return [
                      2,
                      [e.sent()].concat(
                        this.accumulations.map(function (e) {
                          return { name: e.originalName, tensor: e.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    return (
                      (e = t.sent()),
                      !1,
                      (this.accumulations = e.map(function (e) {
                        return {
                          originalName: e.name,
                          variable: e.tensor.variable(false),
                        };
                      })),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              momentum: this.momentum,
              useNesterov: this.useNesterov,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(t.learningRate, t.momentum, t.useNesterov);
          }),
          t
        );
      })(Ph),
      Lh = (function (e) {
        function t(t, n, r, a, o) {
          void 0 === n && (n = 0.9),
            void 0 === r && (r = 0),
            void 0 === a && (a = null),
            void 0 === o && (o = !1);
          var i = e.call(this) || this;
          if (
            ((i.learningRate = t),
            (i.decay = n),
            (i.momentum = r),
            (i.epsilon = a),
            (i.accumulatedMeanSquares = []),
            (i.accumulatedMoments = []),
            (i.accumulatedMeanGrads = []),
            (i.centered = o),
            null == a && (i.epsilon = da.backend.epsilon()),
            null == t)
          )
            throw new Error("learningRate for RMSPropOptimizer must be defined.");
          return i;
        }
        return (
          r(t, e),
          Object.defineProperty(t, "className", {
            get: function () {
              return "RMSProp";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.applyGradients = function (e) {
            var t = this;
            (Array.isArray(e)
              ? e.map(function (e) {
                  return e.name;
                })
              : Object.keys(e)
            ).forEach(function (n, r) {
              var a = da.registeredVariables[n],
                o = !1;
              null == t.accumulatedMeanSquares[r] &&
                (t.accumulatedMeanSquares[r] = {
                  originalName: "".concat(n, "/rms"),
                  variable: Ta(function () {
                    return $i(a).variable(o);
                  }),
                }),
                null == t.accumulatedMoments[r] &&
                  (t.accumulatedMoments[r] = {
                    originalName: "".concat(n, "/momentum"),
                    variable: Ta(function () {
                      return $i(a).variable(o);
                    }),
                  }),
                null == t.accumulatedMeanGrads[r] &&
                  t.centered &&
                  (t.accumulatedMeanGrads[r] = {
                    originalName: "".concat(n, "/mg"),
                    variable: Ta(function () {
                      return $i(a).variable(o);
                    }),
                  });
              var i = Array.isArray(e) ? e[r].tensor : e[n];
              if (null != i) {
                var s = t.accumulatedMeanSquares[r].variable,
                  u = t.accumulatedMoments[r].variable;
                Ta(function () {
                  var e = To(Bo(s, t.decay), Bo(ps(i), 1 - t.decay));
                  if (t.centered) {
                    var n = t.accumulatedMeanGrads[r].variable,
                      o = To(Bo(n, t.decay), Bo(i, 1 - t.decay)),
                      c = Ro(
                        Bo(i, t.learningRate),
                        ds(Ks(e, To(ps(o), t.epsilon))),
                      ),
                      l = To(Bo(u, t.momentum), c);
                    s.assign(e), n.assign(o), u.assign(l);
                    var h = Ks(a, l);
                    a.assign(h);
                  } else {
                    var f = To(Bo(s, t.decay), Bo(ps(i), 1 - t.decay));
                    l = To(
                      Bo(u, t.momentum),
                      Ro(Bo(i, t.learningRate), ds(To(f, t.epsilon))),
                    );
                    s.assign(f), u.assign(l);
                    h = Ks(a, l);
                    a.assign(h);
                  }
                });
              }
            }),
              this.incrementIterations();
          }),
          (t.prototype.dispose = function () {
            null != this.accumulatedMeanSquares &&
              Da(
                this.accumulatedMeanSquares.map(function (e) {
                  return e.variable;
                }),
              ),
              null != this.accumulatedMeanGrads &&
                this.centered &&
                Da(
                  this.accumulatedMeanGrads.map(function (e) {
                    return e.variable;
                  }),
                ),
              null != this.accumulatedMoments &&
                Da(
                  this.accumulatedMoments.map(function (e) {
                    return e.variable;
                  }),
                );
          }),
          (t.prototype.getWeights = function () {
            return a(this, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = u(
                        u([], s(this.accumulatedMeanSquares), !1),
                        s(this.accumulatedMoments),
                        !1,
                      )),
                      this.centered &&
                        e.push.apply(e, u([], s(this.accumulatedMeanGrads), !1)),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [t.sent()].concat(
                        e.map(function (e) {
                          return { name: e.originalName, tensor: e.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (t.prototype.setWeights = function (e) {
            return a(this, void 0, void 0, function () {
              var t, n;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.extractIterations(e)];
                  case 1:
                    return (
                      (e = r.sent()),
                      (t = this.centered ? e.length / 3 : e.length / 2),
                      (n = !1),
                      (this.accumulatedMeanSquares = e
                        .slice(0, t)
                        .map(function (e) {
                          return {
                            originalName: e.name,
                            variable: e.tensor.variable(n),
                          };
                        })),
                      (this.accumulatedMoments = e
                        .slice(t, 2 * t)
                        .map(function (e) {
                          return {
                            originalName: e.name,
                            variable: e.tensor.variable(n),
                          };
                        })),
                      this.centered &&
                        (this.accumulatedMeanGrads = e
                          .slice(2 * t, 3 * t)
                          .map(function (e) {
                            return {
                              originalName: e.name,
                              variable: e.tensor.variable(n),
                            };
                          })),
                      [2]
                    );
                }
              });
            });
          }),
          (t.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              decay: this.decay,
              momentum: this.momentum,
              epsilon: this.epsilon,
              centered: this.centered,
            };
          }),
          (t.fromConfig = function (e, t) {
            return new e(
              t.learningRate,
              t.decay,
              t.momentum,
              t.epsilon,
              t.centered,
            );
          }),
          t
        );
      })(Dh),
      zh = [Rh, Bh, Fh, Ch, Oh, Lh, Ph];
    function Uh(e) {
      return new Promise(function (e) {
        return setTimeout(e);
      }).then(e);
    }
    var Wh = (function () {
      function e(t) {
        if (!Z().getBool("IS_BROWSER"))
          throw new Error(
            "browserDownloads() cannot proceed because the current environment is not a browser.",
          );
        t.startsWith(e.URL_SCHEME) && (t = t.slice(e.URL_SCHEME.length)),
          (null != t && 0 !== t.length) || (t = "model"),
          (this.modelJsonFileName = t + ".json"),
          (this.weightDataFileName = t + ".weights.bin");
      }
      return (
        (e.prototype.save = function (e) {
          return a(this, void 0, void 0, function () {
            var t, n, r, a, i, s, u;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if ("undefined" == typeof document)
                    throw new Error(
                      "Browser downloads are not supported in this environment since `document` is not present",
                    );
                  if (
                    ((t = Ma.join(e.weightData)),
                    (n = window.URL.createObjectURL(
                      new Blob([t], { type: "application/octet-stream" }),
                    )),
                    !(e.modelTopology instanceof ArrayBuffer))
                  )
                    return [3, 1];
                  throw new Error(
                    "BrowserDownloads.save() does not support saving model topology in binary formats yet.",
                  );
                case 1:
                  return (
                    (r = [
                      {
                        paths: ["./" + this.weightDataFileName],
                        weights: e.weightSpecs,
                      },
                    ]),
                    (a = Ka(e, r)),
                    (i = window.URL.createObjectURL(
                      new Blob([JSON.stringify(a)], { type: "application/json" }),
                    )),
                    ((s =
                      null == this.modelJsonAnchor
                        ? document.createElement("a")
                        : this.modelJsonAnchor).download =
                      this.modelJsonFileName),
                    (s.href = i),
                    [
                      4,
                      Uh(function () {
                        return s.dispatchEvent(new MouseEvent("click"));
                      }),
                    ]
                  );
                case 2:
                  return (
                    o.sent(),
                    null == e.weightData
                      ? [3, 4]
                      : (((u =
                          null == this.weightDataAnchor
                            ? document.createElement("a")
                            : this.weightDataAnchor).download =
                          this.weightDataFileName),
                        (u.href = n),
                        [
                          4,
                          Uh(function () {
                            return u.dispatchEvent(new MouseEvent("click"));
                          }),
                        ])
                  );
                case 3:
                  o.sent(), (o.label = 4);
                case 4:
                  return [2, { modelArtifactsInfo: ja(e) }];
              }
            });
          });
        }),
        e
      );
    })();
    Wh.URL_SCHEME = "downloads://";
    var Gh = (function () {
      function e(e) {
        if (null == e || e.length < 1)
          throw new Error(
            "When calling browserFiles, at least 1 file is required, " +
              "but received ".concat(e),
          );
        (this.jsonFile = e[0]), (this.weightsFiles = e.slice(1));
      }
      return (
        (e.prototype.load = function () {
          return a(this, void 0, void 0, function () {
            var e = this;
            return o(this, function (t) {
              return [
                2,
                new Promise(function (t, n) {
                  var r = new FileReader();
                  (r.onload = function (r) {
                    var a = JSON.parse(r.target.result),
                      o = a.modelTopology;
                    if (null != o)
                      if (null != a.weightsManifest)
                        if (0 !== e.weightsFiles.length) {
                          var i = Ha(a, function (t) {
                            return e.loadWeights(t);
                          });
                          t(i);
                        } else t({ modelTopology: o });
                      else
                        n(
                          new Error(
                            "weightManifest field is missing from file ".concat(
                              e.jsonFile.name,
                            ),
                          ),
                        );
                    else
                      n(
                        new Error(
                          "modelTopology field is missing from file ".concat(
                            e.jsonFile.name,
                          ),
                        ),
                      );
                  }),
                    (r.onerror = function (t) {
                      return n(
                        "Failed to read model topology and weights manifest JSON " +
                          "from file '".concat(
                            e.jsonFile.name,
                            "'. BrowserFiles supports loading ",
                          ) +
                          "Keras-style tf.Model artifacts only.",
                      );
                    }),
                    r.readAsText(e.jsonFile);
                }),
              ];
            });
          });
        }),
        (e.prototype.loadWeights = function (e) {
          var t,
            n,
            r = this,
            a = [],
            o = [];
          try {
            for (var c = i(e), l = c.next(); !l.done; l = c.next()) {
              var h = l.value;
              a.push.apply(a, u([], s(h.weights), !1)),
                o.push.apply(o, u([], s(h.paths), !1));
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              l && !l.done && (n = c.return) && n.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
          var f = this.checkManifestAndWeightFiles(e),
            d = o.map(function (e) {
              return r.loadWeightsFile(e, f[e]);
            });
          return Promise.all(d).then(function (e) {
            return [a, e];
          });
        }),
        (e.prototype.loadWeightsFile = function (e, t) {
          return new Promise(function (n, r) {
            var a = new FileReader();
            (a.onload = function (e) {
              var t = e.target.result;
              n(t);
            }),
              (a.onerror = function (t) {
                return r(
                  "Failed to weights data from file of path '".concat(e, "'."),
                );
              }),
              a.readAsArrayBuffer(t);
          });
        }),
        (e.prototype.checkManifestAndWeightFiles = function (e) {
          var t,
            n,
            r = this,
            a = [],
            o = this.weightsFiles.map(function (e) {
              return qa(e.name);
            }),
            s = {};
          try {
            for (var u = i(e), c = u.next(); !c.done; c = u.next()) {
              c.value.paths.forEach(function (e) {
                var t = qa(e);
                if (-1 !== a.indexOf(t))
                  throw new Error(
                    "Duplicate file basename found in weights manifest: " +
                      "'".concat(t, "'"),
                  );
                if ((a.push(t), -1 === o.indexOf(t)))
                  throw new Error(
                    "Weight file with basename '".concat(t, "' is not provided."),
                  );
                s[e] = r.weightsFiles[o.indexOf(t)];
              });
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              c && !c.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
          if (a.length !== this.weightsFiles.length)
            throw new Error(
              "Mismatch in the number of files in weights manifest " +
                "(".concat(
                  a.length,
                  ") and the number of weight files provided ",
                ) +
                "(".concat(this.weightsFiles.length, ")."),
            );
          return s;
        }),
        e
      );
    })();
    function qh(e, t, n, r) {
      !(function (e) {
        g(null != e && Array.isArray(e) && e.length > 0, function () {
          return "promises must be a none empty array";
        });
      })(e),
        (function (e, t) {
          g(e >= 0 && e <= 1, function () {
            return (
              "Progress fraction must be in range [0, 1], but " +
              "got startFraction ".concat(e)
            );
          }),
            g(t >= 0 && t <= 1, function () {
              return (
                "Progress fraction must be in range [0, 1], but " +
                "got endFraction ".concat(t)
              );
            }),
            g(t >= e, function () {
              return (
                "startFraction must be no more than endFraction, but " +
                "got startFraction ".concat(e, " and endFraction ") +
                "".concat(t)
              );
            });
        })((n = null == n ? 0 : n), (r = null == r ? 1 : r));
      var a = 0;
      return Promise.all(
        e.map(function (o) {
          return (
            o.then(function (o) {
              var i = n + (++a / e.length) * (r - n);
              return t(i), o;
            }),
            o
          );
        }),
      );
    }
    function Kh(e, t) {
      return a(this, void 0, void 0, function () {
        var n, r, a, i, s, u, c, l, h;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return (
                null == t && (t = {}),
                (n = null == t.fetchFunc ? Z().platform.fetch : t.fetchFunc),
                (r = e.map(function (e) {
                  return n(e, t.requestInit, { isBinary: !0 });
                })),
                (a = 0),
                (i = 0.5),
                null != t.onProgress ? [3, 2] : [4, Promise.all(r)]
              );
            case 1:
              return (s = o.sent()), [3, 4];
            case 2:
              return [4, qh(r, t.onProgress, a, i)];
            case 3:
              (s = o.sent()), (o.label = 4);
            case 4:
              return (
                (u = s.map(function (e) {
                  return e.arrayBuffer();
                })),
                (c = 0.5),
                (l = 1),
                null != t.onProgress ? [3, 6] : [4, Promise.all(u)]
              );
            case 5:
              return (h = o.sent()), [3, 8];
            case 6:
              return [4, qh(u, t.onProgress, c, l)];
            case 7:
              (h = o.sent()), (o.label = 8);
            case 8:
              return [2, h];
          }
        });
      });
    }
    function Vh(e) {
      var t = this;
      return function (n, r, i) {
        return (
          void 0 === r && (r = ""),
          a(t, void 0, void 0, function () {
            var t, a, s, u, c, l, h, f, d, p;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (
                    ((t = n.map(function () {
                      return !1;
                    })),
                    (a = {}),
                    (s =
                      null != i
                        ? i.map(function () {
                            return !1;
                          })
                        : []),
                    (u = []),
                    n.forEach(function (e, n) {
                      var r = 0;
                      e.weights.forEach(function (e) {
                        var o =
                            "quantization" in e ? e.quantization.dtype : e.dtype,
                          c = Na[o] * y(e.shape),
                          l = function () {
                            (t[n] = !0),
                              null == a[n] && (a[n] = []),
                              a[n].push({
                                manifestEntry: e,
                                groupOffset: r,
                                sizeBytes: c,
                              });
                          };
                        null != i
                          ? i.forEach(function (t, n) {
                              t === e.name && (l(), (s[n] = !0));
                            })
                          : l(),
                          u.push(e.name),
                          (r += c);
                      });
                    }),
                    !s.every(function (e) {
                      return e;
                    }))
                  )
                    throw (
                      ((c = i.filter(function (e, t) {
                        return !s[t];
                      })),
                      new Error(
                        "Could not find weights in manifest with names: " +
                          "".concat(c.join(", "), ". \n") +
                          "Manifest JSON has weights with names: " +
                          "".concat(u.join(", "), "."),
                      ))
                    );
                  return (
                    (l = t.reduce(function (e, t, n) {
                      return t && e.push(n), e;
                    }, [])),
                    (h = []),
                    l.forEach(function (e) {
                      n[e].paths.forEach(function (e) {
                        var t = r + (r.endsWith("/") ? "" : "/") + e;
                        h.push(t);
                      });
                    }),
                    [4, e(h)]
                  );
                case 1:
                  return (
                    (f = o.sent()),
                    (d = {}),
                    (p = 0),
                    l.forEach(function (e) {
                      var t = n[e].paths.length,
                        r = new Ma(f.slice(p, p + t));
                      a[e].forEach(function (e) {
                        var t = Ca(
                          r.slice(e.groupOffset, e.groupOffset + e.sizeBytes),
                          [e.manifestEntry],
                        );
                        for (var n in t) d[n] = t[n];
                      }),
                        (p += t);
                    }),
                    [2, d]
                  );
              }
            });
          })
        );
      };
    }
    Za.registerSaveRouter(function (e) {
      return Z().getBool("IS_BROWSER") &&
        !Array.isArray(e) &&
        e.startsWith(Wh.URL_SCHEME)
        ? (function (e) {
            void 0 === e && (e = "model");
            return new Wh(e);
          })(e.slice(Wh.URL_SCHEME.length))
        : null;
    });
    var Hh = (function () {
      function e(e, t) {
        if (
          ((this.DEFAULT_METHOD = "POST"),
          null == t && (t = {}),
          (this.weightPathPrefix = t.weightPathPrefix),
          (this.weightUrlConverter = t.weightUrlConverter),
          null != t.fetchFunc
            ? (g("function" == typeof t.fetchFunc, function () {
                return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)";
              }),
              (this.fetch = t.fetchFunc))
            : (this.fetch = Z().platform.fetch),
          g(null != e && e.length > 0, function () {
            return "URL path for http must not be null, undefined or empty.";
          }),
          Array.isArray(e) &&
            g(2 === e.length, function () {
              return (
                "URL paths for http must have a length of 2, " +
                "(actual length is ".concat(e.length, ").")
              );
            }),
          (this.path = e),
          null != t.requestInit && null != t.requestInit.body)
        )
          throw new Error(
            "requestInit is expected to have no pre-existing body, but has one.",
          );
        (this.requestInit = t.requestInit || {}), (this.loadOptions = t);
      }
      return (
        (e.prototype.save = function (e) {
          return a(this, void 0, void 0, function () {
            var t, n, r, a, i;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (e.modelTopology instanceof ArrayBuffer)
                    throw new Error(
                      "BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.",
                    );
                  return (
                    ((t = Object.assign(
                      { method: this.DEFAULT_METHOD },
                      this.requestInit,
                    )).body = new FormData()),
                    (n = [
                      { paths: ["./model.weights.bin"], weights: e.weightSpecs },
                    ]),
                    (r = Ka(e, n)),
                    t.body.append(
                      "model.json",
                      new Blob([JSON.stringify(r)], { type: "application/json" }),
                      "model.json",
                    ),
                    null != e.weightData &&
                      ((a = Ma.join(e.weightData)),
                      t.body.append(
                        "model.weights.bin",
                        new Blob([a], { type: "application/octet-stream" }),
                        "model.weights.bin",
                      )),
                    [4, this.fetch(this.path, t)]
                  );
                case 1:
                  if ((i = o.sent()).ok)
                    return [2, { modelArtifactsInfo: ja(e), responses: [i] }];
                  throw new Error(
                    "BrowserHTTPRequest.save() failed due to HTTP response status " +
                      "".concat(i.status, "."),
                  );
              }
            });
          });
        }),
        (e.prototype.loadModelJSON = function () {
          return a(this, void 0, void 0, function () {
            var e, t, n, r, a;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, this.fetch(this.path, this.requestInit)];
                case 1:
                  if (!(e = o.sent()).ok)
                    throw new Error(
                      "Request to ".concat(
                        this.path,
                        " failed with status code ",
                      ) +
                        "".concat(
                          e.status,
                          ". Please verify this URL points to ",
                        ) +
                        "the model JSON of the model to load.",
                    );
                  o.label = 2;
                case 2:
                  return o.trys.push([2, 4, , 5]), [4, e.json()];
                case 3:
                  return (t = o.sent()), [3, 5];
                case 4:
                  throw (
                    (o.sent(),
                    (n = "Failed to parse model JSON of response from ".concat(
                      this.path,
                      ".",
                    )),
                    this.path.endsWith(".pb")
                      ? (n +=
                          " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.")
                      : (n +=
                          " Please make sure the server is serving valid JSON for this request."),
                    new Error(n))
                  );
                case 5:
                  if (
                    ((r = t.modelTopology),
                    (a = t.weightsManifest),
                    null == r && null == a)
                  )
                    throw new Error(
                      "The JSON from HTTP path ".concat(
                        this.path,
                        " contains neither model ",
                      ) + "topology or manifest for weights.",
                    );
                  return [2, t];
              }
            });
          });
        }),
        (e.prototype.load = function () {
          return a(this, void 0, void 0, function () {
            var e = this;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.loadOptions.streamWeights
                    ? [2, this.loadStream()]
                    : [4, this.loadModelJSON()];
                case 1:
                  return [
                    2,
                    Ha(t.sent(), function (t) {
                      return e.loadWeights(t);
                    }),
                  ];
              }
            });
          });
        }),
        (e.prototype.loadStream = function () {
          return a(this, void 0, void 0, function () {
            var e,
              t,
              n,
              r,
              i = this;
            return o(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, this.loadModelJSON()];
                case 1:
                  return (
                    (e = s.sent()), [4, this.getWeightUrls(e.weightsManifest)]
                  );
                case 2:
                  return (
                    (t = s.sent()),
                    (n = Ja(e.weightsManifest)),
                    (r = function () {
                      return (function (e, t) {
                        var n,
                          r,
                          i = this,
                          s =
                            null == t.fetchFunc
                              ? Z().platform.fetch
                              : t.fetchFunc,
                          u = 0;
                        return (
                          null === (n = t.onProgress) ||
                            void 0 === n ||
                            n.call(t, 0),
                          new ReadableStream({
                            pull: function (n) {
                              return a(i, void 0, void 0, function () {
                                var a, i, c, l, h;
                                return o(this, function (o) {
                                  switch (o.label) {
                                    case 0:
                                      return u < e.length
                                        ? r
                                          ? [3, 2]
                                          : [
                                              4,
                                              s(e[u], t.requestInit, {
                                                isBinary: !0,
                                              }),
                                            ]
                                        : [3, 4];
                                    case 1:
                                      (i = o.sent().body),
                                        (r = i.getReader()),
                                        (o.label = 2);
                                    case 2:
                                      return [4, r.read()];
                                    case 3:
                                      return (
                                        (c = o.sent()),
                                        (l = c.done),
                                        (h = c.value),
                                        l
                                          ? (u++,
                                            (r = void 0),
                                            null === (a = t.onProgress) ||
                                              void 0 === a ||
                                              a.call(t, u / e.length),
                                            [3, 0])
                                          : (n.enqueue(h), [2])
                                      );
                                    case 4:
                                      return n.close(), [2];
                                  }
                                });
                              });
                            },
                          })
                        );
                      })(t, i.loadOptions);
                    }),
                    [
                      2,
                      Object.assign(Object.assign({}, e), {
                        weightSpecs: n,
                        getWeightStream: r,
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (e.prototype.getWeightUrls = function (e) {
          return a(this, void 0, void 0, function () {
            var t, n, r, a, c, l, h, f, d, p, g, v, m, y, b, w, k, x, E, S, A;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  (t = Array.isArray(this.path) ? this.path[1] : this.path),
                    (n = s(
                      (function (e) {
                        var t = e.lastIndexOf("/"),
                          n = e.lastIndexOf("?"),
                          r = e.substring(0, t),
                          a = n > t ? e.substring(n) : "";
                        return [r + "/", a];
                      })(t),
                      2,
                    )),
                    (r = n[0]),
                    (a = n[1]),
                    (c = this.weightPathPrefix || r),
                    (l = []),
                    (h = []);
                  try {
                    for (f = i(e), d = f.next(); !d.done; d = f.next()) {
                      p = d.value;
                      try {
                        for (
                          S = void 0, g = i(p.paths), v = g.next();
                          !v.done;
                          v = g.next()
                        )
                          (m = v.value),
                            null != this.weightUrlConverter
                              ? h.push(this.weightUrlConverter(m))
                              : l.push(c + m + a);
                      } catch (e) {
                        S = { error: e };
                      } finally {
                        try {
                          v && !v.done && (A = g.return) && A.call(g);
                        } finally {
                          if (S) throw S.error;
                        }
                      }
                    }
                  } catch (e) {
                    x = { error: e };
                  } finally {
                    try {
                      d && !d.done && (E = f.return) && E.call(f);
                    } finally {
                      if (x) throw x.error;
                    }
                  }
                  return this.weightUrlConverter
                    ? ((b = (y = l.push).apply),
                      (w = [l]),
                      (k = [[]]),
                      [4, Promise.all(h)])
                    : [3, 2];
                case 1:
                  b.apply(
                    y,
                    w.concat([
                      u.apply(
                        void 0,
                        k.concat([s.apply(void 0, [o.sent()]), !1]),
                      ),
                    ]),
                  ),
                    (o.label = 2);
                case 2:
                  return [2, l];
              }
            });
          });
        }),
        (e.prototype.loadWeights = function (e) {
          return a(this, void 0, void 0, function () {
            var t, n, r;
            return o(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, this.getWeightUrls(e)];
                case 1:
                  return (
                    (t = a.sent()), (n = Ja(e)), [4, Kh(t, this.loadOptions)]
                  );
                case 2:
                  return (r = a.sent()), [2, [n, r]];
              }
            });
          });
        }),
        e
      );
    })();
    function jh(e) {
      return null != e.match(Hh.URL_SCHEME_REGEX);
    }
    Hh.URL_SCHEME_REGEX = /^https?:\/\//;
    var Jh = function (e, t) {
      if ("undefined" == typeof fetch && (null == t || null == t.fetchFunc))
        return null;
      return (
        Array.isArray(e)
          ? e.every(function (e) {
              return jh(e);
            })
          : jh(e)
      )
        ? Zh(e, t)
        : null;
    };
    function Zh(e, t) {
      return new Hh(e, t);
    }
    Za.registerSaveRouter(Jh), Za.registerLoadRouter(Jh);
    var Yh = (function () {
        function e(e) {
          this.modelArtifacts = e;
        }
        return (
          (e.prototype.load = function () {
            return this.modelArtifacts;
          }),
          e
        );
      })(),
      Xh = (function () {
        function e(e) {
          this.saveHandler = e;
        }
        return (
          (e.prototype.save = function (e) {
            return this.saveHandler(e);
          }),
          e
        );
      })(),
      Qh = function (e) {
        e.load &&
          (this.load = function () {
            return Promise.resolve(e.load());
          }),
          e.save &&
            (this.save = function (t) {
              return Promise.resolve(e.save(t));
            });
      };
    function $h(e, t, n, r) {
      if (1 === arguments.length) {
        var a = null != e.modelTopology || null != e.weightSpecs;
        return a
          ? new Yh(e)
          : (console.warn(
              "Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.",
            ),
            new Yh({ modelTopology: e }));
      }
      return (
        console.warn(
          "Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.",
        ),
        new Yh({
          modelTopology: e,
          weightSpecs: t,
          weightData: n,
          trainingConfig: r,
        })
      );
    }
    var ef = {
      __proto__: null,
      CompositeArrayBuffer: Ma,
      browserFiles: function (e) {
        return new Gh(e);
      },
      browserHTTPRequest: function (e, t) {
        return Zh(e, t);
      },
      concatenateArrayBuffers: function (e) {
        return Ma.join(e);
      },
      copyModel: function (e, t) {
        return a(this, void 0, void 0, function () {
          return o(this, function (n) {
            return !1, [2, ko(e, t, false)];
          });
        });
      },
      decodeWeights: Ca,
      decodeWeightsStream: function (e, t) {
        return a(this, void 0, void 0, function () {
          var n,
            r,
            s,
            u,
            c,
            l,
            h,
            f,
            d,
            p,
            g,
            v,
            m,
            b = this;
          return o(this, function (w) {
            switch (w.label) {
              case 0:
                (n = {}),
                  (r = e.getReader()),
                  (s = new ArrayBuffer(0)),
                  (w.label = 1);
              case 1:
                w.trys.push([1, 7, 8, 9]),
                  (u = i(t)),
                  (c = u.next()),
                  (w.label = 2);
              case 2:
                return c.done
                  ? [3, 6]
                  : [
                      4,
                      Oa((l = c.value), function (e, t) {
                        return a(b, void 0, void 0, function () {
                          return o(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return [4, za(r, s, t)];
                              case 1:
                                return [2, (s = n.sent()).slice(e, t)];
                            }
                          });
                        });
                      }),
                    ];
              case 3:
                return (h = w.sent()), [4, za(r, s, h)];
              case 4:
                (s = w.sent()),
                  (f = s.slice(0, h)),
                  (s = s.slice(h)),
                  (d = La(l, f)),
                  (n[l.name] = d),
                  "webgpu" === Ba() &&
                    "uploadToGPU" in (p = Fa()) &&
                    y(d.shape) >= Z().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD") &&
                    p.uploadToGPU(d.dataId),
                  (w.label = 5);
              case 5:
                return (c = u.next()), [3, 2];
              case 6:
                return [3, 9];
              case 7:
                return (g = w.sent()), (v = { error: g }), [3, 9];
              case 8:
                try {
                  c && !c.done && (m = u.return) && m.call(u);
                } finally {
                  if (v) throw v.error;
                }
                return [7];
              case 9:
                return [2, n];
            }
          });
        });
      },
      encodeWeights: function (e, t) {
        return a(this, void 0, void 0, function () {
          var n,
            r,
            i,
            s,
            u,
            c = this;
          return o(this, function (l) {
            switch (l.label) {
              case 0:
                for (
                  n = [],
                    r = [],
                    i = Array.isArray(e)
                      ? e.map(function (e) {
                          return e.name;
                        })
                      : Object.keys(e),
                    s = function (s) {
                      var u = i[s],
                        l = Array.isArray(e) ? e[s].tensor : e[u];
                      if (
                        "float32" !== l.dtype &&
                        "int32" !== l.dtype &&
                        "bool" !== l.dtype &&
                        "string" !== l.dtype &&
                        "complex64" !== l.dtype
                      )
                        throw new Error(
                          "Unsupported dtype in weight '"
                            .concat(u, "': ")
                            .concat(l.dtype),
                        );
                      var h = { name: u, shape: l.shape, dtype: l.dtype };
                      if ("string" === l.dtype) {
                        var f = new Promise(function (e) {
                          return a(c, void 0, void 0, function () {
                            var t, n, r, a, i, s, u;
                            return o(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  return [4, l.bytes()];
                                case 1:
                                  for (
                                    t = o.sent(),
                                      n =
                                        t.reduce(function (e, t) {
                                          return e + t.length;
                                        }, 0) +
                                        4 * t.length,
                                      r = new Uint8Array(n),
                                      a = 0,
                                      i = 0;
                                    i < t.length;
                                    i++
                                  )
                                    (s = t[i]),
                                      (u = new Uint8Array(
                                        new Uint32Array([s.length]).buffer,
                                      )),
                                      r.set(u, a),
                                      (a += 4),
                                      r.set(s, a),
                                      (a += s.length);
                                  return e(r), [2];
                              }
                            });
                          });
                        });
                        r.push(f);
                      } else r.push(l.data());
                      null != t && (h.group = t), n.push(h);
                    },
                    u = 0;
                  u < i.length;
                  ++u
                )
                  s(u);
                return [4, Promise.all(r)];
              case 1:
                return [2, { data: Ua(l.sent()), specs: n }];
            }
          });
        });
      },
      fromMemory: function (e, t, n, r) {
        var a = arguments;
        return new Qh($h.apply(void 0, u([], s(a), !1)));
      },
      fromMemorySync: $h,
      getLoadHandlers: function (e, t) {
        return Za.getLoadHandlers(e, t);
      },
      getModelArtifactsForJSON: Ha,
      getModelArtifactsForJSONSync: Va,
      getModelArtifactsInfoForJSON: ja,
      getSaveHandlers: function (e) {
        return Za.getSaveHandlers(e);
      },
      getWeightSpecs: Ja,
      http: Zh,
      isHTTPScheme: jh,
      listModels: function () {
        return a(this, void 0, void 0, function () {
          var e, t, n, r, a, s, u, c, l, h;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                (e = bo.getSchemes()), (t = {}), (o.label = 1);
              case 1:
                o.trys.push([1, 6, 7, 8]),
                  (n = i(e)),
                  (r = n.next()),
                  (o.label = 2);
              case 2:
                return r.done
                  ? [3, 5]
                  : ((a = r.value), [4, bo.getManager(a).listModels()]);
              case 3:
                for (u in (s = o.sent())) t[a + yo + u] = s[u];
                o.label = 4;
              case 4:
                return (r = n.next()), [3, 2];
              case 5:
                return [3, 8];
              case 6:
                return (c = o.sent()), (l = { error: c }), [3, 8];
              case 7:
                try {
                  r && !r.done && (h = n.return) && h.call(n);
                } finally {
                  if (l) throw l.error;
                }
                return [7];
              case 8:
                return [2, t];
            }
          });
        });
      },
      loadWeights: function (e, t, n, r) {
        return (
          void 0 === t && (t = ""),
          a(this, void 0, void 0, function () {
            return o(this, function (a) {
              return [
                2,
                Vh(function (e) {
                  return Kh(e, { requestInit: r });
                })(e, t, n),
              ];
            });
          })
        );
      },
      moveModel: function (e, t) {
        return a(this, void 0, void 0, function () {
          return o(this, function (n) {
            return !0, [2, ko(e, t, true)];
          });
        });
      },
      registerLoadRouter: function (e) {
        return Za.registerLoadRouter(e);
      },
      registerSaveRouter: function (e) {
        return Za.registerSaveRouter(e);
      },
      removeModel: function (e) {
        return a(this, void 0, void 0, function () {
          var t;
          return o(this, function (n) {
            return (t = wo(e)), [2, bo.getManager(t.scheme).removeModel(t.path)];
          });
        });
      },
      weightsLoaderFactory: Vh,
      withSaveHandler: function (e) {
        return new Xh(e);
      },
      withSaveHandlerSync: function (e) {
        return new Xh(e);
      },
    };
    var tf,
      nf = {
        __proto__: null,
        confusionMatrix: Sa({
          confusionMatrix_: function (e, t, n) {
            var r = ka(e, "labels", "confusionMatrix"),
              a = ka(t, "predictions", "confusionMatrix");
            g(null == n || (n > 0 && Number.isInteger(n)), function () {
              return (
                "If provided, numClasses must be a positive integer, " +
                "but got ".concat(n)
              );
            }),
              g(1 === r.rank, function () {
                return "Expected the rank of labels to be 1, but got ".concat(
                  r.rank,
                );
              }),
              g(1 === a.rank, function () {
                return (
                  "Expected the rank of predictions to be 1, " +
                  "but got ".concat(a.rank)
                );
              }),
              g(r.shape[0] === a.shape[0], function () {
                return (
                  "Mismatch in the number of examples: " +
                  "".concat(r.shape[0], " vs. ").concat(a.shape[0], ". ") +
                  "Labels and predictions should have the same number of elements."
                );
              }),
              g(n > 0 && Number.isInteger(n), function () {
                return (
                  "numClasses is required to be a positive integer, but got " +
                  "".concat(n)
                );
              });
            var o = du(Io(r, "int32"), n),
              i = du(Io(a, "int32"), n),
              s = al(o),
              u = li(s, i);
            return Io(u, "int32");
          },
        }),
      },
      rf = !1;
    function af(e, t) {
      if ((void 0 === t && (t = 3), t > 4))
        throw new Error(
          "Cannot construct Tensor with more than 4 channels from pixels.",
        );
      if (null == e)
        throw new Error(
          "pixels passed to tf.browser.fromPixels() can not be null",
        );
      var n = !1,
        r = !1,
        a = !1,
        o = !1,
        i = !1,
        u = !1;
      if (e.data instanceof Uint8Array) n = !0;
      else if ("undefined" != typeof ImageData && e instanceof ImageData) r = !0;
      else if (
        "undefined" != typeof HTMLVideoElement &&
        e instanceof HTMLVideoElement
      )
        a = !0;
      else if (
        "undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement
      )
        o = !0;
      else if (null != e.getContext) i = !0;
      else {
        if (!("undefined" != typeof ImageBitmap && e instanceof ImageBitmap))
          throw new Error(
            "pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, " +
              "but was ".concat(e.constructor.name),
          );
        u = !0;
      }
      if (null != Pn(Nn, da.backendName)) {
        var c = { pixels: e },
          l = { numChannels: t };
        return da.runKernel(Nn, c, l);
      }
      var h,
        f,
        d = s(a ? [e.videoWidth, e.videoHeight] : [e.width, e.height], 2),
        p = d[0],
        g = d[1];
      if (i) h = e.getContext("2d").getImageData(0, 0, p, g).data;
      else if (r || n) h = e.data;
      else if (o || a || u) {
        if (null == tf)
          if ("undefined" == typeof document) {
            if (
              "undefined" == typeof OffscreenCanvas ||
              "undefined" == typeof OffscreenCanvasRenderingContext2D
            )
              throw new Error(
                "Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.",
              );
            tf = new OffscreenCanvas(1, 1).getContext("2d");
          } else
            tf = document
              .createElement("canvas")
              .getContext("2d", { willReadFrequently: !0 });
        (tf.canvas.width = p),
          (tf.canvas.height = g),
          tf.drawImage(e, 0, 0, p, g),
          (h = tf.getImageData(0, 0, p, g).data);
      }
      if (4 === t) f = new Int32Array(h);
      else {
        var v = p * g;
        f = new Int32Array(v * t);
        for (var m = 0; m < v; m++)
          for (var y = 0; y < t; ++y) f[m * t + y] = h[4 * m + y];
      }
      return Kc(f, [g, p, t], "int32");
    }
    function of(e) {
      return (
        "undefined" != typeof window &&
        "undefined" != typeof ImageBitmap &&
        window.hasOwnProperty("createImageBitmap") &&
        !(e instanceof ImageBitmap) &&
        (function (e) {
          return null != e && 0 !== e.width && 0 !== e.height;
        })(e) &&
        !(function (e) {
          return null != e && e.data instanceof Uint8Array;
        })(e)
      );
    }
    function sf(e) {
      if (2 !== e.rank && 3 !== e.rank)
        throw new Error(
          "toPixels only supports rank 2 or 3 tensors, got rank ".concat(
            e.rank,
            ".",
          ),
        );
      var t = 2 === e.rank ? 1 : e.shape[2];
      if (t > 4 || 2 === t)
        throw new Error(
          "toPixels only supports depth of size " +
            "1, 3 or 4 but got ".concat(t),
        );
      if ("float32" !== e.dtype && "int32" !== e.dtype)
        throw new Error(
          "Unsupported type for toPixels: ".concat(e.dtype, ".") +
            " Please use float32 or int32 tensors.",
        );
    }
    var uf = {
      __proto__: null,
      draw: function (e, t, n) {
        var r = ka(e, "img", "draw");
        if (!(e instanceof Vr)) {
          var a = r;
          (r = Io(a, "int32")), a.dispose();
        }
        sf(r),
          (function (e) {
            var t = (null == e ? void 0 : e.alpha) || 1;
            if (t > 1 || t < 0)
              throw new Error(
                "Alpha value ".concat(t, " is suppoed to be in range [0 - 1]."),
              );
          })(null == n ? void 0 : n.imageOptions);
        var o = { image: r },
          i = { canvas: t, options: n };
        da.runKernel(Le, o, i);
      },
      fromPixels: Sa({ fromPixels_: af }),
      fromPixelsAsync: function (e, t) {
        return (
          void 0 === t && (t = 3),
          a(this, void 0, void 0, function () {
            var n, r;
            return o(this, function (a) {
              switch (a.label) {
                case 0:
                  if (((n = null), !Z().getBool("WRAP_TO_IMAGEBITMAP") || !of(e)))
                    return [3, 5];
                  (r = void 0), (a.label = 1);
                case 1:
                  return (
                    a.trys.push([1, 3, , 4]),
                    [4, createImageBitmap(e, { premultiplyAlpha: "none" })]
                  );
                case 2:
                  return (r = a.sent()), [3, 4];
                case 3:
                  return a.sent(), (r = null), [3, 4];
                case 4:
                  return (
                    (n =
                      null != r && r.width === e.width && r.height === e.height
                        ? r
                        : e),
                    [3, 6]
                  );
                case 5:
                  (n = e), (a.label = 6);
                case 6:
                  return [2, af(n, t)];
              }
            });
          })
        );
      },
      toPixels: function (e, t) {
        return a(this, void 0, void 0, function () {
          var n, r, a, i, u, c, l, h, f, d, p, g, v, m, y, b;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (n = ka(e, "img", "toPixels")),
                  e instanceof Vr || ((n = Io((r = n), "int32")), r.dispose()),
                  sf(n),
                  (a = s(n.shape.slice(0, 2), 2)),
                  (i = a[0]),
                  (u = a[1]),
                  (c = 2 === n.rank ? 1 : n.shape[2]),
                  [4, n.data()]
                );
              case 1:
                for (
                  l = o.sent(),
                    h = "float32" === n.dtype ? 255 : 1,
                    f = new Uint8ClampedArray(u * i * 4),
                    d = 0;
                  d < i * u;
                  ++d
                ) {
                  for (p = [0, 0, 0, 255], g = 0; g < c; g++) {
                    if (((v = l[d * c + g]), "float32" === n.dtype)) {
                      if (v < 0 || v > 1)
                        throw new Error(
                          "Tensor values for a float32 Tensor must be in the " +
                            "range [0 - 1] but encountered ".concat(v, "."),
                        );
                    } else if ("int32" === n.dtype && (v < 0 || v > 255))
                      throw new Error(
                        "Tensor values for a int32 Tensor must be in the " +
                          "range [0 - 255] but encountered ".concat(v, "."),
                      );
                    1 === c
                      ? ((p[0] = v * h), (p[1] = v * h), (p[2] = v * h))
                      : (p[g] = v * h);
                  }
                  (f[(m = 4 * d) + 0] = Math.round(p[0])),
                    (f[m + 1] = Math.round(p[1])),
                    (f[m + 2] = Math.round(p[2])),
                    (f[m + 3] = Math.round(p[3]));
                }
                return (
                  null != t &&
                    (rf ||
                      (null != Pn(Le, da.backendName) &&
                        (console.warn(
                          "tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead.",
                        ),
                        (rf = !0))),
                    (t.width = u),
                    (t.height = i),
                    (y = t.getContext("2d")),
                    (b = new ImageData(f, u, i)),
                    y.putImageData(b, 0, 0)),
                  n !== e && n.dispose(),
                  [2, f]
                );
            }
          });
        });
      },
    };
    function cf(e, t) {
      var n = e.shape.length,
        r = t.shape.length;
      if (n < 1)
        throw new Error(
          "tf.gatherND() expects the input to be rank 1 or higher," +
            " but the rank was ".concat(n, "."),
        );
      if (r < 1)
        throw new Error(
          "tf.gatherND() expects the indices to be rank 1 or higher," +
            " but the rank was ".concat(r, "."),
        );
      if ("int32" !== t.dtype)
        throw new Error(
          "tf.gatherND() expects the indices to be int32 type," +
            " but the dtype was ".concat(t.dtype, "."),
        );
      if (t.shape[r - 1] > n)
        throw new Error(
          "index innermost dimension length must be <= tensor rank; saw: " +
            "".concat(t.shape[r - 1], " vs. ").concat(n),
        );
      if (0 === y(e.shape))
        throw new Error(
          "Requested more than 0 entries, but input is empty." +
            " Input shape: ".concat(e.shape, "."),
        );
      for (
        var a = t.shape, o = a[a.length - 1], i = 1, c = 0;
        c < a.length - 1;
        ++c
      )
        i *= a[c];
      var l = e.shape,
        h = a.slice();
      h.pop();
      var f = 1;
      for (c = o; c < n; ++c) (f *= l[c]), h.push(l[c]);
      var d = u(
        u(
          [],
          s(
            O(e.shape).map(function (e) {
              return e / f;
            }),
          ),
          !1,
        ),
        [1],
        !1,
      ).slice(0, o);
      return [h, i, f, d];
    }
    var lf = { __proto__: null, prepareAndValidate: cf };
    function hf(e, t, n, r) {
      for (var a = u([], s(e), !1), o = a.length; o < r.length; o++) a.push(1);
      for (o = 0; o < n; o++) 0 === o ? (a[t] = 1) : (a.splice(t, 0, 1), a.pop());
      return a;
    }
    function ff(e, t, n) {
      return n <= e ? n : n - (t - 1);
    }
    function df(e, t) {
      for (var n = [], r = 0; r < e; r++) n.push(t + r);
      return n;
    }
    function pf(e, t, n, r, a) {
      for (var o = u([], s(a), !1), i = df(n, t), c = 0; c < o.length; c++)
        if (i.indexOf(c) > -1) o[c] = 0;
        else {
          var l = ff(t, n, c),
            h = r[l];
          e & (1 << l) && (h = 0), (o[c] = h);
        }
      return o;
    }
    function gf(e, t, n, r, a) {
      for (var o = u([], s(a), !1), i = df(n, t), c = 0; c < o.length; c++)
        if (i.indexOf(c) > -1) o[c] = Number.MAX_SAFE_INTEGER;
        else {
          var l = ff(t, n, c),
            h = r[l];
          e & (1 << l) && (h = Number.MAX_SAFE_INTEGER), (o[c] = h);
        }
      for (var f = 0; f < o.length; f++) {
        var p = a[f];
        o[f] < 0 && (o[f] += p), (o[f] = d(0, o[f], a[f]));
      }
      return o;
    }
    function vf(e, t, n) {
      var r = e[t];
      return (n & (1 << t) || null == r) && (r = 1), r;
    }
    function mf(e, t, n, r, a, o) {
      var i = t[a],
        s = n[a] || 1;
      (e & (1 << a) || o & (1 << a) || null == i) &&
        (i = s > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
      var u = r[a];
      return i < 0 && (i += u), (i = d(0, i, u - 1));
    }
    function yf(e, t, n, r, a, o) {
      var i = t[a],
        s = n[a] || 1;
      (e & (1 << a) || o & (1 << a) || null == i) &&
        (i = s > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
      var u = r[a];
      return i < 0 && (i += u), (i = s > 0 ? d(0, i, u) : d(-1, i, u - 1));
    }
    function bf(e, t, n, r, a, o) {
      if (a[t]) return n > 0 ? o[t] : o[(t + 1) & 1];
      var i = e < 0 ? r + e : e;
      return i < o[0] ? o[0] : i > o[1] ? o[1] : i;
    }
    var wf,
      kf = {
        __proto__: null,
        assertParamsValid: function (e, t, n) {
          var r = e.shape.length;
          g(r === t.length, function () {
            return (
              "Error in slice"
                .concat(r, "D: Length of begin ")
                .concat(t, " must ") +
              "match the rank of the array (".concat(r, ").")
            );
          }),
            g(r === n.length, function () {
              return (
                "Error in slice"
                  .concat(r, "D: Length of size ")
                  .concat(n, " must ") +
                "match the rank of the array (".concat(r, ").")
              );
            });
          for (
            var a = function (a) {
                g(t[a] + n[a] <= e.shape[a], function () {
                  return (
                    "Error in slice"
                      .concat(r, "D: begin[")
                      .concat(a, "] + size[")
                      .concat(a, "] ") +
                    "("
                      .concat(t[a] + n[a], ") would overflow input.shape[")
                      .concat(a, "] (")
                      .concat(e.shape[a], ")")
                  );
                });
              },
              o = 0;
            o < r;
            ++o
          )
            a(o);
        },
        computeFlatOffset: function (e, t) {
          for (
            var n = e.length > 0 ? e[e.length - 1] : 1, r = 0;
            r < e.length - 1;
            r++
          )
            n += e[r] * t[r];
          return n;
        },
        computeOutShape: function (e, t, n) {
          for (var r = [], a = 0; a < e.length; a++)
            r[a] = Math.ceil((t[a] - e[a]) / n[a]);
          return r;
        },
        getNormalizedAxes: function (e, t, n, r, a, o, i, s, u) {
          var c = e.length,
            l = new Array(c),
            h = new Array(c),
            f = new Array(c);
          if (t.length && n > 0) {
            var d = t[0],
              p = n + 1;
            (l = pf(i, d, p, r, e)),
              (h = gf(s, d, p, a, e)),
              (f = hf(o, d, p, e));
          } else
            for (var g = 0; g < c; g++)
              (l[g] = mf(i, r, o, e, g, u)),
                (h[g] = yf(s, a, o, e, g, u)),
                (f[g] = vf(o, g, u));
          return { begin: l, end: h, strides: f };
        },
        isSliceContinous: function (e, t, n) {
          for (var r = n.length, a = 0; a < n.length; a++)
            if (n[a] > 1) {
              r = a;
              break;
            }
          for (a = r + 1; a < n.length; a++)
            if (t[a] > 0 || n[a] !== e[a]) return !1;
          return !0;
        },
        maskToAxes: function (e) {
          for (var t = [], n = 0; e > 0; ) 1 & e && t.push(n), (e /= 2), n++;
          return t;
        },
        parseSliceParams: function (e, t, n) {
          var r,
            a,
            o = e.shape.length;
          return (
            (r =
              "number" == typeof t
                ? u([t], s(new Array(o - 1).fill(0)), !1)
                : t.length < o
                  ? t.concat(new Array(o - t.length).fill(0))
                  : t.slice()).forEach(function (e) {
              g(-1 !== e, function () {
                return "slice() does not support negative begin indexing.";
              });
            }),
            (a = (a =
              null == n
                ? new Array(o).fill(-1)
                : "number" == typeof n
                  ? u([n], s(new Array(o - 1).fill(-1)), !1)
                  : n.length < o
                    ? n.concat(new Array(o - n.length).fill(-1))
                    : n).map(function (t, n) {
              return t >= 0
                ? t
                : (g(-1 === t, function () {
                    return (
                      "Negative size values should be exactly -1 but got " +
                      ""
                        .concat(t, " for the slice() size at index ")
                        .concat(n, ".")
                    );
                  }),
                  e.shape[n] - r[n]);
            })),
            [r, a]
          );
        },
        sliceInfo: function (e, t, n, r, a, o, i, s, u) {
          var c;
          if (
            (null == r ? (c = new Array(t.length)).fill(1) : (c = r),
            null != i && 0 != (i & (i - 1)))
          )
            throw new Error("Multiple ellipses in slice is not allowed.");
          for (
            var l = !1,
              h = {
                dims: c.length,
                numAddAxisAfterEllipsis: 0,
                begin: t.slice(),
                end: n.slice(),
                strides: c.slice(),
                beginMask: a,
                endMask: o,
                ellipsisMask: i,
                newAxisMask: s,
                shrinkAxisMask: u,
              },
              f = 0;
            f < h.dims;
            f++
          )
            l && 0 != ((1 << f) & s) && h.numAddAxisAfterEllipsis++,
              (1 << f) & i && (l = !0);
          l || ((h.ellipsisMask |= 1 << h.dims), h.dims++);
          var d = {
            dims: e.length,
            beginMask: 0,
            endMask: 0,
            beginValid: !1,
            endValid: !1,
          };
          !(function (e, t) {
            (t.beginMask = 0), (t.endMask = 0), (t.shrinkAxisMask = 0);
            var n = 0;
            (t.beginValid = null != e.begin),
              (t.endValid = null != e.end),
              (t.begin = new Array(t.dims)),
              (t.end = new Array(t.dims)),
              (t.strides = new Array(t.dims)),
              (t.finalShapeGatherIndices = []),
              (t.finalShapeGatherIndicesSparse = []),
              (t.inputShapeGatherIndicesSparse = new Array(t.dims));
            for (var r = 0; r < e.dims; r++)
              if ((1 << r) & e.ellipsisMask)
                for (
                  var a = Math.min(
                    t.dims - (e.dims - r) + 1 + e.numAddAxisAfterEllipsis,
                    t.dims,
                  );
                  n < a;
                  n++
                )
                  (t.begin[n] = 0),
                    (t.end[n] = 0),
                    (t.strides[n] = 1),
                    (t.beginMask |= 1 << n),
                    (t.endMask |= 1 << n),
                    t.finalShapeGatherIndices.push(n),
                    t.finalShapeGatherIndicesSparse.push(-1),
                    (t.inputShapeGatherIndicesSparse[n] = r);
              else if ((1 << r) & e.newAxisMask)
                t.finalShapeGatherIndices.push(-2),
                  t.finalShapeGatherIndicesSparse.push(-1);
              else {
                if (n === t.begin.length)
                  throw Error(
                    "Index out of range using input dim ".concat(n, "; input ") +
                      "has only "
                        .concat(t.dims, " dims, ")
                        .concat(t.begin.length, "."),
                  );
                null != e.begin && (t.begin[n] = e.begin[r]),
                  null != e.end && (t.end[n] = e.end[r]),
                  (t.strides[n] = e.strides[r]),
                  e.beginMask & (1 << r) && (t.beginMask |= 1 << n),
                  e.endMask & (1 << r) && (t.endMask |= 1 << n),
                  e.shrinkAxisMask & (1 << r)
                    ? (t.finalShapeGatherIndices.push(-1),
                      t.finalShapeGatherIndicesSparse.push(-1),
                      (t.shrinkAxisMask |= 1 << n))
                    : (t.finalShapeGatherIndices.push(n),
                      t.finalShapeGatherIndicesSparse.push(r)),
                  (t.inputShapeGatherIndicesSparse[n] = r),
                  n++;
              }
          })(h, d);
          var p = !0,
            g = !0,
            v = !0,
            m = [],
            y = [];
          for (f = 0; f < e.length; ++f) {
            if (0 === d.strides[f])
              throw Error("strides[".concat(f, "] must be non-zero"));
            var b = !!(d.shrinkAxisMask & (1 << f)),
              w = e[f];
            if (-1 !== w) {
              var k = [d.beginMask & (1 << f), d.endMask & (1 << f)],
                x = [d.strides[f] > 0 ? 0 : -1, d.strides[f] > 0 ? w : w - 1];
              if (b && d.strides[f] <= 0)
                throw Error("only stride 1 allowed on non-range indexing.");
              v = v && 1 === d.strides[f];
              var E = !!(d.beginMask & (1 << f) && d.endMask & (1 << f));
              if (d.beginValid && d.endValid) {
                if (b) {
                  var S = d.begin[f] < 0 ? w + d.begin[f] : d.begin[f];
                  if (
                    ((d.begin[f] = S),
                    (d.end[f] = d.begin[f] + 1),
                    S < 0 || S >= w)
                  )
                    throw Error(
                      "slice index "
                        .concat(d.begin[f], " of dimension ")
                        .concat(f, " out of bounds."),
                    );
                } else
                  (d.begin[f] = bf(d.begin[f], 0, d.strides[f], w, k, x)),
                    (d.end[f] = bf(d.end[f], 1, d.strides[f], w, k, x));
                var A = 1 === d.strides[f] && 0 === d.begin[f] && d.end[f] === w;
                (p = p && A), (g = g && ((0 === f && 1 === d.strides[f]) || A));
              } else
                (p = p && 1 === d.strides[f] && E),
                  (g = g && ((0 === f && 1 === d.strides[f]) || E));
              var _ = void 0,
                I = !1;
              if (
                (d.beginValid && d.endValid
                  ? ((_ = d.end[f] - d.begin[f]), (I = !0))
                  : b
                    ? ((_ = 1), (I = !0))
                    : E && w >= 0 && ((_ = d.strides[f] < 0 ? -w : w), (I = !0)),
                I)
              ) {
                var N = void 0;
                (N =
                  0 === _ || _ < 0 != d.strides[f] < 0
                    ? 0
                    : Math.trunc(_ / d.strides[f]) +
                      (_ % d.strides[f] != 0 ? 1 : 0)),
                  m.push(N);
              } else m.push(-1);
            } else m.push(b ? 1 : -1);
          }
          for (var M = 0; M < d.finalShapeGatherIndices.length; ++M) {
            var T = d.finalShapeGatherIndices[M];
            T >= 0 ? y.push(m[T]) : -2 === T && y.push(1);
          }
          var D = y.filter(function (e, t) {
            return -2 !== d.finalShapeGatherIndices[t];
          });
          return {
            finalShapeSparse: D,
            finalShape: y,
            isIdentity: p,
            sliceDim0: g,
            isSimpleSlice: v,
            begin: d.begin,
            end: d.end,
            strides: d.strides,
          };
        },
        startForAxis: mf,
        startIndicesWithElidedDims: pf,
        stopForAxis: yf,
        stopIndicesWithElidedDims: gf,
        stridesForAxis: vf,
        stridesWithElidedDims: hf,
      },
      xf = (function () {
        function e() {}
        return (
          (e.sgd = function (e) {
            return new Ph(e);
          }),
          (e.momentum = function (e, t, n) {
            return void 0 === n && (n = !1), new Oh(e, t, n);
          }),
          (e.rmsprop = function (e, t, n, r, a) {
            return (
              void 0 === t && (t = 0.9),
              void 0 === n && (n = 0),
              void 0 === r && (r = null),
              void 0 === a && (a = !1),
              new Lh(e, t, n, r, a)
            );
          }),
          (e.adam = function (e, t, n, r) {
            return (
              void 0 === e && (e = 0.001),
              void 0 === t && (t = 0.9),
              void 0 === n && (n = 0.999),
              void 0 === r && (r = null),
              new Fh(e, t, n, r)
            );
          }),
          (e.adadelta = function (e, t, n) {
            return (
              void 0 === e && (e = 0.001),
              void 0 === t && (t = 0.95),
              void 0 === n && (n = null),
              new Rh(e, t, n)
            );
          }),
          (e.adamax = function (e, t, n, r, a) {
            return (
              void 0 === e && (e = 0.002),
              void 0 === t && (t = 0.9),
              void 0 === n && (n = 0.999),
              void 0 === r && (r = null),
              void 0 === a && (a = 0),
              new Ch(e, t, n, r, a)
            );
          }),
          (e.adagrad = function (e, t) {
            return void 0 === t && (t = 0.1), new Bh(e, t);
          }),
          e
        );
      })(),
      Ef = xf,
      Sf =
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : "undefined" != typeof setImmediate
            ? setImmediate
            : function (e) {
                return e();
              };
    !(function (e) {
      (e[(e.FIRST_DIM_SIZE = 0)] = "FIRST_DIM_SIZE"),
        (e[(e.VALUE_ROWIDS = 1)] = "VALUE_ROWIDS"),
        (e[(e.ROW_LENGTHS = 2)] = "ROW_LENGTHS"),
        (e[(e.ROW_SPLITS = 3)] = "ROW_SPLITS"),
        (e[(e.ROW_LIMITS = 4)] = "ROW_LIMITS"),
        (e[(e.ROW_STARTS = 5)] = "ROW_STARTS");
    })(wf || (wf = {}));
    var Af = "->",
      _f = /->/g;
    function If(e, t) {
      for (var n = [], r = 0; r < e.length; ++r)
        (0 !== e[r].length && -1 === e[r].indexOf(t) && -1 !== t) || n.push(r);
      return n;
    }
    var Nf = {
        __proto__: null,
        ERF_A1: 0.254829592,
        ERF_A2: -0.284496736,
        ERF_A3: 1.421413741,
        ERF_A4: -1.453152027,
        ERF_A5: 1.061405429,
        ERF_P: 0.3275911,
        PARALLELIZE_THRESHOLD: 30,
        get RowPartitionType() {
          return wf;
        },
        SELU_SCALE: 1.0507009873554805,
        SELU_SCALEALPHA: 1.7580993408473768,
        applyActivation: vl,
        assertAndGetBroadcastShape: Zi,
        assertAxesAreInnerMostDims: function (e, t, n) {
          g(is(t, n), function () {
            return (
              "".concat(e, " supports only inner-most axes for now. ") +
              "Got axes ".concat(t, " and rank-").concat(n, " input.")
            );
          });
        },
        assertParamsConsistent: function (e, t) {
          var n = e[0].length;
          e.forEach(function (e, t) {
            g(e.length === n, function () {
              return (
                "Error in concat"
                  .concat(n, "D: rank of tensors[")
                  .concat(t, "] must be the same ") +
                "as the rank of the rest (".concat(n, ")")
              );
            });
          }),
            g(t >= 0 && t < n, function () {
              return "Error in concat"
                .concat(n, "D: axis must be between 0 and ")
                .concat(n - 1, ".");
            });
          var r = e[0];
          e.forEach(function (e, a) {
            for (var o = 0; o < n; o++)
              g(o === t || e[o] === r[o], function () {
                return (
                  "Error in concat"
                    .concat(n, "D: Shape of tensors[")
                    .concat(a, "] (")
                    .concat(e, ") ") +
                  "does not match the shape of the rest (".concat(r, ") ") +
                  "along the non-concatenated axis ".concat(a, ".")
                );
              });
          });
        },
        assignToTypedArray: function (e, t, n, r) {
          (e[2 * r] = t), (e[2 * r + 1] = n);
        },
        axesAreInnerMostDims: is,
        calculateShapes: jc,
        checkEinsumDimSizes: function (e, t, n) {
          for (
            var r = new Array(e),
              a = function (e) {
                for (
                  var a = n[e].shape,
                    o = function (n) {
                      void 0 === r[t[e][n]]
                        ? (r[t[e][n]] = a[n])
                        : g(r[t[e][n]] === a[n], function () {
                            return (
                              "Expected dimension "
                                .concat(r[t[e][n]], " at axis ")
                                .concat(n, " ") +
                              "of input shaped ".concat(JSON.stringify(a), ", ") +
                              "but got dimension ".concat(a[n])
                            );
                          });
                    },
                    i = 0;
                  i < t[e].length;
                  ++i
                )
                  o(i);
              },
              o = 0;
            o < n.length;
            ++o
          )
            a(o);
        },
        checkPadOnDimRoundingMode: oi,
        combineLocations: ss,
        combineRaggedTensorToTensorShapes: function (e, t, n) {
          var r = new Array();
          if (null == n && null == t) return r;
          if (null == t) for (; r.length < e + n.length; ) r.push(-1);
          else r = t.slice();
          if (null == n) return r;
          if (e + n.length !== r.length)
            throw new Error(
              "rt input.shape and shape="
                .concat(t, " are incompatible: rt input.rank = ")
                .concat(e + n.length, ", but shape.rank = ")
                .concat(r.length),
            );
          for (var a = 1; a < n.length; ++a) {
            var o = n[a],
              i = r[r.length - n.length + a],
              s = r[i];
            if (o >= 0)
              if (s >= 0) {
                if (s !== o)
                  throw new Error(
                    "rt input.shape and shape="
                      .concat(t, " are incompatible: rt input.shape[")
                      .concat(a + e, "] = ")
                      .concat(o, " but shape[")
                      .concat(a + e, "] = ")
                      .concat(s),
                  );
              } else r[i] = o;
          }
          return r;
        },
        complexWithEvenIndex: function (e) {
          for (
            var t = Math.ceil(e.length / 4),
              n = new Float32Array(t),
              r = new Float32Array(t),
              a = 0;
            a < e.length;
            a += 4
          )
            (n[Math.floor(a / 4)] = e[a]), (r[Math.floor(a / 4)] = e[a + 1]);
          return { real: n, imag: r };
        },
        complexWithOddIndex: function (e) {
          for (
            var t = Math.floor(e.length / 4),
              n = new Float32Array(t),
              r = new Float32Array(t),
              a = 2;
            a < e.length;
            a += 4
          )
            (n[Math.floor(a / 4)] = e[a]), (r[Math.floor(a / 4)] = e[a + 1]);
          return { real: n, imag: r };
        },
        computeConv2DInfo: Jo,
        computeConv3DInfo: Zo,
        computeDefaultPad: Yo,
        computeDilation2DInfo: function (e, t, n, r, a, o) {
          void 0 === a && (a = "NHWC");
          var i = e[3];
          return Jo(e, u(u([], s(t), !1), [i], !1), n, o, r, null, null, ai(a));
        },
        computeOptimalWindowSize: function (e) {
          return e <= 30 ? e : P(e, Math.floor(Math.sqrt(e)));
        },
        computeOutAndReduceShapes: function (e, t) {
          for (var n = [], r = e.length, a = 0; a < r; a++)
            -1 === t.indexOf(a) && n.push(e[a]);
          var o = t.map(function (t) {
            return e[t];
          });
          return [n, o];
        },
        computeOutShape: function (e, t) {
          for (var n = e[0].slice(), r = 1; r < e.length; r++) n[t] += e[r][t];
          return n;
        },
        computePool2DInfo: jo,
        computePool3DInfo: function (e, t, n, r, a, o, i) {
          void 0 === i && (i = "NDHWC");
          var u,
            c,
            l = s(Qo(t), 3),
            h = l[0],
            f = l[1],
            d = l[2];
          if ("NDHWC" === i) (c = "channelsLast"), (u = [h, f, d, e[4], e[4]]);
          else {
            if ("NCDHW" !== i) throw new Error("Unknown dataFormat ".concat(i));
            (c = "channelsFirst"), (u = [h, f, d, e[1], e[1]]);
          }
          return Zo(e, u, n, r, a, !1, c, o);
        },
        convertConv2DDataFormat: ai,
        decodeEinsumEquation: function (e, t) {
          var n =
            ((e = e.replace(/\s/g, "")).length - e.replace(_f, "").length) /
            Af.length;
          if (n < 1)
            throw new Error("Equations without an arrow are not supported.");
          if (n > 1)
            throw new Error(
              'Equation must contain exactly one arrow ("'.concat(Af, '").'),
            );
          var r = s(e.split(Af), 2),
            a = r[0],
            o = r[1];
          g(-1 === a.indexOf("..."), function () {
            return 'The ellipsis notation ("'.concat(
              "...",
              '") is not supported yet.',
            );
          });
          var i = a.split(","),
            u = i.length;
          if (t !== u)
            throw new Error(
              "Expected ".concat(u, " input tensors, received ").concat(t),
            );
          if (u > 2)
            throw new Error(
              "Support for more than 2 input tensors is not implemented yet.",
            );
          for (
            var c = [],
              l = function (e) {
                var t = o[e];
                if (
                  !i.some(function (e) {
                    return -1 !== e.indexOf(t);
                  })
                )
                  throw new Error(
                    "Output subscripts contain the label ".concat(t, " ") +
                      "not present in the input subscripts.",
                  );
                -1 === c.indexOf(t) && c.push(t);
              },
              h = 0;
            h < o.length;
            ++h
          )
            l(h);
          for (h = 0; h < a.length; ++h) {
            var f = a[h];
            -1 === c.indexOf(f) && "," !== f && c.push(f);
          }
          var d = new Array(i.length);
          for (h = 0; h < u; ++h) {
            if (new Set(i[h].split("")).size !== i[h].length)
              throw new Error(
                "Found duplicate axes in input component ".concat(i[h], ". ") +
                  "Support for duplicate axes in input is not implemented yet.",
              );
            d[h] = [];
            for (var p = 0; p < i[h].length; ++p) d[h].push(c.indexOf(i[h][p]));
          }
          var v = c.length,
            m = [];
          for (h = o.length; h < v; ++h) m.push(h);
          return { allDims: c, summedDims: m, idDims: d };
        },
        eitherStridesOrDilationsAreOne: ni,
        expandShapeToKeepDim: us,
        exponent: function (e, t, n) {
          var r = (n ? 2 : -2) * Math.PI * (e / t);
          return { real: Math.cos(r), imag: Math.sin(r) };
        },
        exponents: function (e, t) {
          for (
            var n = new Float32Array(e / 2), r = new Float32Array(e / 2), a = 0;
            a < Math.ceil(e / 2);
            a++
          ) {
            var o = (t ? 2 : -2) * Math.PI * (a / e);
            (n[a] = Math.cos(o)), (r[a] = Math.sin(o));
          }
          return { real: n, imag: r };
        },
        fromStringArrayToUint8: function (e) {
          return e.map(function (e) {
            return Tr(e);
          });
        },
        fromUint8ToStringArray: function (e) {
          try {
            return e.map(function (e) {
              return Dr(e);
            });
          } catch (e) {
            throw new Error(
              "Failed to decode encoded string bytes into utf-8, error: ".concat(
                e,
              ),
            );
          }
        },
        getAxesPermutation: function (e, t) {
          if (is(e, t)) return null;
          for (var n = [], r = 0; r < t; ++r) -1 === e.indexOf(r) && n.push(r);
          return (
            e.forEach(function (e) {
              return n.push(e);
            }),
            n
          );
        },
        getBroadcastDims: ji,
        getComplexWithIndex: function (e, t) {
          return { real: e[2 * t], imag: e[2 * t + 1] };
        },
        getEinsumComputePath: function (e, t) {
          var n,
            r,
            a,
            o = e,
            s = [];
          0 === e.length && o.push(-1), (a = e.length + 1);
          for (var u = 0; u < a; ++u) s.push([]);
          var c = [];
          for (u = 0; u < o.length; ++u) {
            var l = If(t, o[u]);
            try {
              for (
                var h = ((n = void 0), i(l)), f = h.next();
                !f.done;
                f = h.next()
              ) {
                var d = f.value;
                -1 === c.indexOf(d) && (s[u].push(d), c.push(d));
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                f && !f.done && (r = h.return) && r.call(h);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          return { path: o, steps: s };
        },
        getEinsumPermutation: function (e, t) {
          var n = new Array(e);
          n.fill(-1);
          for (var r = 0; r < t.length; ++r) n[t[r]] = r;
          var a = [];
          for (r = 0; r < e; ++r) -1 === n[r] && a.push(r);
          return {
            permutationIndices: (n = n.filter(function (e) {
              return -1 !== e;
            })),
            expandDims: a,
          };
        },
        getFusedBiasGradient: gl,
        getFusedDyActivation: pl,
        getImageCenter: function (e, t, n) {
          return [
            n * ("number" == typeof e ? e : e[0]),
            t * ("number" == typeof e ? e : e[1]),
          ];
        },
        getInnerMostAxes: function (e, t) {
          for (var n = [], r = t - e; r < t; ++r) n.push(r);
          return n;
        },
        getPermuted: function (e, t, n) {
          void 0 === n && (n = !0);
          var r = [];
          if (n) {
            r.push(t);
            for (var a = t + 1; a < e; ++a)
              a <= 2 * t ? (r.push(a), r.push(a - (t + 1))) : r.push(a);
          } else {
            var o = [],
              i = [];
            for (a = 1; a < e; ++a)
              a >= 2 * t + 1 || a % 2 == 1 ? i.push(a) : o.push(a);
            r.push.apply(r, u([], s(o), !1)),
              r.push(0),
              r.push.apply(r, u([], s(i), !1));
          }
          return r;
        },
        getRaggedRank: function (e) {
          return 0 === e.length
            ? 0
            : e[0] === wf.FIRST_DIM_SIZE
              ? e.length - 1
              : e.length;
        },
        getReductionAxes: Ji,
        getReshaped: function (e, t, n, r) {
          void 0 === r && (r = !0);
          var a = [];
          if (r)
            (a = a.concat(t.slice(0))).push(e[0] / n), (a = a.concat(e.slice(1)));
          else {
            a = a.concat(e[0]);
            for (var o = t.length, i = 0; i < o; ++i)
              a = a.concat([e[i + 1] / t[i], t[i]]);
            a = a.concat(e.slice(o + 1));
          }
          return a;
        },
        getReshapedPermuted: function (e, t, n, r) {
          void 0 === r && (r = !0);
          var a = [];
          r ? a.push(e[0] / n) : a.push(e[0] * n);
          for (var o = 1; o < e.length; ++o)
            o <= t.length
              ? r
                ? a.push(t[o - 1] * e[o])
                : a.push(e[o] / t[o - 1])
              : a.push(e[o]);
          return a;
        },
        getRowPartitionTypesHelper: function (e) {
          var t,
            n,
            r = {
              FIRST_DIM_SIZE: wf.FIRST_DIM_SIZE,
              VALUE_ROWIDS: wf.VALUE_ROWIDS,
              ROW_LENGTHS: wf.ROW_LENGTHS,
              ROW_SPLITS: wf.ROW_SPLITS,
              ROW_LIMITS: wf.ROW_LIMITS,
              ROW_STARTS: wf.ROW_STARTS,
            },
            a = [];
          try {
            for (var o = i(e), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              if (!(u in r)) break;
              a.push(r[u]);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          return a;
        },
        getSliceBeginCoords: function (e, t) {
          for (var n = [0], r = 0; r < t; ++r) n.push(e[r][0]);
          return n;
        },
        getSliceSize: function (e, t, n) {
          for (var r = e.slice(0, 1), a = 0; a < n; ++a)
            r.push(e[a + 1] - t[a][0] - t[a][1]);
          return r;
        },
        getSparseFillEmptyRowsIndicesDenseShapeMismatch: function (e) {
          return "Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ".concat(
            e,
          );
        },
        getSparseFillEmptyRowsNegativeIndexErrorMessage: function (e, t) {
          return "indices(".concat(e, ", 0) is invalid: ").concat(t, " < 0");
        },
        getSparseFillEmptyRowsOutOfRangeIndexErrorMessage: function (e, t, n) {
          return "indices("
            .concat(e, ", 0) is invalid: ")
            .concat(t, " >= ")
            .concat(n);
        },
        getSparseReshapeEmptyTensorZeroOutputDimErrorMessage: function () {
          return "reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero";
        },
        getSparseReshapeInputOutputMismatchErrorMessage: function (e, t) {
          var n = y(e),
            r = y(t);
          return "Input to reshape is a tensor with "
            .concat(n, " dense values, but the requested shape has ")
            .concat(r, ". inputShape=")
            .concat(e, " outputShape=")
            .concat(t);
        },
        getSparseReshapeInputOutputMultipleErrorMessage: function (e, t) {
          var n = y(e),
            r = y(t);
          return "Input to reshape is a SparseTensor with "
            .concat(
              n,
              "\n  dense values, but the requested shape requires a multiple of ",
            )
            .concat(r, ". inputShape=")
            .concat(e, " outputShape= ")
            .concat(t);
        },
        getSparseReshapeMultipleNegativeOneOutputDimErrorMessage: function (
          e,
          t,
        ) {
          return "only one output dimension may be -1, not both "
            .concat(e, " and ")
            .concat(t);
        },
        getSparseReshapeNegativeOutputDimErrorMessage: function (e, t) {
          return "size ".concat(e, " must be non-negative, not ").concat(t);
        },
        getSparseSegmentReductionIndicesOutOfRangeErrorMessage: function (
          e,
          t,
          n,
        ) {
          return "Bad: indices["
            .concat(e, "] == ")
            .concat(t, " out of range [0, ")
            .concat(n, ")");
        },
        getSparseSegmentReductionNegativeSegmentIdsErrorMessage: function () {
          return "segment ids must be >= 0";
        },
        getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:
          function () {
            return "segment ids are not increasing";
          },
        getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage: function (
          e,
          t,
        ) {
          return "Segment id "
            .concat(e, " out of range [0, ")
            .concat(t, "), possibly because segmentIds input is not sorted.");
        },
        getUndoAxesPermutation: function (e) {
          return e
            .map(function (e, t) {
              return [t, e];
            })
            .sort(function (e, t) {
              return e[1] - t[1];
            })
            .map(function (e) {
              return e[0];
            });
        },
        isIdentityPermutation: function (e) {
          return e.every(function (e, t) {
            return e === t;
          });
        },
        log: function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          Z().getBool("IS_TEST") ||
            Z().getBool("PROD") ||
            console.log.apply(console, u([], s(e), !1));
        },
        mergeRealAndImagArrays: function (e, t) {
          if (e.length !== t.length)
            throw new Error(
              "Cannot merge real and imag arrays of different lengths. real:" +
                "".concat(e.length, ", imag: ").concat(t.length, "."),
            );
          for (
            var n = new Float32Array(2 * e.length), r = 0;
            r < n.length;
            r += 2
          )
            (n[r] = e[r / 2]), (n[r + 1] = t[r / 2]);
          return n;
        },
        prepareAndValidate: cf,
        prepareSplitSize: function (e, t, n) {
          void 0 === n && (n = 0);
          var r = [];
          if ("number" == typeof t)
            g(e.shape[n] % t == 0, function () {
              return "Number of splits must evenly divide the axis.";
            }),
              (r = new Array(t).fill(e.shape[n] / t));
          else {
            g(
              t.reduce(function (e, t) {
                return -1 === t && (e += 1), e;
              }, 0) <= 1,
              function () {
                return "There should be only one negative value in split array.";
              },
            );
            var a = t.indexOf(-1);
            if (-1 !== a) {
              var o = t.reduce(function (e, t) {
                return t > 0 ? e + t : e;
              });
              t[a] = e.shape[n] - o;
            }
            g(
              e.shape[n] ===
                t.reduce(function (e, t) {
                  return e + t;
                }),
              function () {
                return "The sum of sizes must match the size of the axis dimension.";
              },
            ),
              (r = t);
          }
          return r;
        },
        segment_util: {
          __proto__: null,
          collectGatherOpShapeInfo: function (e, t, n, r) {
            var a = t.shape.length,
              o = e.shape.length;
            if (0 !== r && (r < -a || r > a))
              throw new Error(
                "Expect batchDims in the range of [-"
                  .concat(a, ", ")
                  .concat(a, "], but got ")
                  .concat(r),
              );
            if ((r < 0 && (r += a), r > o))
              throw new Error(
                "batchDims ("
                  .concat(r, ") must be less than rank(x) (\n    ")
                  .concat(o, ")."),
              );
            if (n < r)
              throw new Error(
                "batchDims ("
                  .concat(r, ") must be less than or equal to axis (")
                  .concat(n, ")."),
              );
            for (var i = 0; i < r; ++i)
              if (e.shape[i] !== t.shape[i])
                throw new Error(
                  "x.shape["
                    .concat(i, "]: ")
                    .concat(e.shape[i], " should be equal to indices.shape[")
                    .concat(i, "]: ")
                    .concat(t.shape[i], "."),
                );
            var s = e.shape[n],
              u = [],
              c = 1,
              l = 1,
              h = 1;
            for (i = 0; i < r; ++i) u.push(e.shape[i]), (c *= e.shape[i]);
            for (i = r; i < n; i++) u.push(e.shape[i]), (l *= e.shape[i]);
            for (i = r; i < a; i++) u.push(t.shape[i]);
            for (i = n + 1; i < o; i++) u.push(e.shape[i]), (h *= e.shape[i]);
            return {
              batchSize: c,
              sliceSize: h,
              outerSize: l,
              dimSize: s,
              outputShape: u,
            };
          },
          computeOutShape: function (e, t, n) {
            for (var r = [], a = e.length, o = 0; o < a; o++)
              o !== t ? r.push(e[o]) : r.push(n);
            return r;
          },
          segOpComputeOptimalWindowSize: function (e, t) {
            var n,
              r = !1;
            for (
              e <= 30
                ? ((n = e), (r = !0))
                : (n = P(e, Math.floor(Math.sqrt(e))));
              !r;
  
            )
              n > t || n === e ? (r = !0) : (n = P(e, n + 1));
            return n;
          },
        },
        shouldFuse: ml,
        slice_util: kf,
        splitRealAndImagArrays: function (e) {
          for (
            var t = new Float32Array(e.length / 2),
              n = new Float32Array(e.length / 2),
              r = 0;
            r < e.length;
            r += 2
          )
            (t[r / 2] = e[r]), (n[r / 2] = e[r + 1]);
          return { real: t, imag: n };
        },
        stridesOrDilationsArePositive: ri,
        tupleValuesAreOne: ti,
        upcastType: ea,
        validateDefaultValueShape: function (e, t) {
          if (null != e && null != t) {
            var n = e.length,
              r = t.length;
            if (n >= r)
              throw new Error(
                "defaultValue.shape="
                  .concat(e, " and ragged tensor flatValues.shape=")
                  .concat(t, ", are incompatible: defaultValue.rank = ")
                  .concat(
                    n,
                    " must be less than ragged tensor input flatValues.rank = ",
                  )
                  .concat(r, ")"),
              );
            for (var a = 0; a < Math.min(n, r - 1); ++a) {
              var o = e[a],
                i = t[a + 1];
              if (o >= 0 && i >= 0 && 1 !== o && o !== i)
                throw new Error(
                  "defaultValue.shape="
                    .concat(e, ", and ragged tensor input flatValues.shape=")
                    .concat(t, " are incompatible: defaultValue.shape[")
                    .concat(a - e.length, "] = ")
                    .concat(o, " but ragged tensor input.flatValues.shape[")
                    .concat(a - e.length, "] = ")
                    .concat(i),
                );
            }
          }
        },
        validateInput: Hc,
        validateUpdateShape: Vc,
        warn: Bn,
      },
      Mf = {
        __proto__: null,
        nonMaxSuppressionV3Impl: Ol,
        nonMaxSuppressionV4Impl: Ll,
        nonMaxSuppressionV5Impl: zl,
        whereImpl: tl,
      };
    !(function () {
      var e, t;
      try {
        for (var n = i(zh), r = n.next(); !r.done; r = n.next()) {
          Mh(r.value);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          r && !r.done && (t = n.return) && t.call(n);
        } finally {
          if (e) throw e.error;
        }
      }
    })(),
      (e.Abs = "Abs"),
      (e.Acos = Q),
      (e.Acosh = $),
      (e.AdadeltaOptimizer = Rh),
      (e.AdagradOptimizer = Bh),
      (e.AdamOptimizer = Fh),
      (e.AdamaxOptimizer = Ch),
      (e.Add = ee),
      (e.AddN = te),
      (e.All = "All"),
      (e.Any = "Any"),
      (e.ArgMax = ne),
      (e.ArgMin = re),
      (e.Asin = ae),
      (e.Asinh = oe),
      (e.Atan = ie),
      (e.Atan2 = ue),
      (e.Atanh = se),
      (e.AvgPool = ce),
      (e.AvgPool3D = le),
      (e.AvgPool3DGrad = "AvgPool3DGrad"),
      (e.AvgPoolGrad = "AvgPoolGrad"),
      (e.BatchMatMul = he),
      (e.BatchToSpaceND = fe),
      (e.Bincount = de),
      (e.BitwiseAnd = pe),
      (e.BroadcastArgs = ge),
      (e.BroadcastTo = "BroadcastTo"),
      (e.Cast = ve),
      (e.Ceil = me),
      (e.ClipByValue = ye),
      (e.Complex = be),
      (e.ComplexAbs = we),
      (e.Concat = ke),
      (e.Conv2D = xe),
      (e.Conv2DBackpropFilter = Ee),
      (e.Conv2DBackpropInput = Se),
      (e.Conv3D = Ae),
      (e.Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2"),
      (e.Conv3DBackpropInputV2 = _e),
      (e.Cos = "Cos"),
      (e.Cosh = Ie),
      (e.CropAndResize = Te),
      (e.Cumprod = Ne),
      (e.Cumsum = Me),
      (e.DataStorage = c),
      (e.DenseBincount = De),
      (e.DepthToSpace = Re),
      (e.DepthwiseConv2dNative = Be),
      (e.DepthwiseConv2dNativeBackpropFilter = Fe),
      (e.DepthwiseConv2dNativeBackpropInput = Ce),
      (e.Diag = Pe),
      (e.Dilation2D = Oe),
      (e.Dilation2DBackpropFilter = "Dilation2DBackpropFilter"),
      (e.Dilation2DBackpropInput = "Dilation2DBackpropInput"),
      (e.Draw = Le),
      (e.Einsum = Ue),
      (e.Elu = "Elu"),
      (e.EluGrad = "EluGrad"),
      (e.Environment = H),
      (e.Equal = We),
      (e.Erf = "Erf"),
      (e.Exp = "Exp"),
      (e.ExpandDims = Ge),
      (e.Expm1 = qe),
      (e.FFT = "FFT"),
      (e.Fill = Ke),
      (e.FlipLeftRight = Ve),
      (e.Floor = He),
      (e.FloorDiv = je),
      (e.FromPixels = Nn),
      (e.FusedBatchNorm = Je),
      (e.FusedConv2D = Dn),
      (e.FusedDepthwiseConv2D = Rn),
      (e.GatherNd = Ye),
      (e.GatherV2 = Ze),
      (e.Greater = Xe),
      (e.GreaterEqual = Qe),
      (e.IFFT = et),
      (e.Identity = $e),
      (e.Imag = tt),
      (e.IsFinite = nt),
      (e.IsInf = rt),
      (e.IsNan = at),
      (e.KernelBackend = l),
      (e.LRN = "LRN"),
      (e.LRNGrad = "LRNGrad"),
      (e.LeakyRelu = ot),
      (e.Less = it),
      (e.LessEqual = st),
      (e.LinSpace = ut),
      (e.Log = "Log"),
      (e.Log1p = ct),
      (e.LogSoftmax = "LogSoftmax"),
      (e.LogicalAnd = lt),
      (e.LogicalNot = ht),
      (e.LogicalOr = ft),
      (e.LogicalXor = "LogicalXor"),
      (e.LowerBound = "LowerBound"),
      (e.MatrixBandPart = "MatrixBandPart"),
      (e.Max = "Max"),
      (e.MaxPool = pt),
      (e.MaxPool3D = gt),
      (e.MaxPool3DGrad = "MaxPool3DGrad"),
      (e.MaxPoolGrad = "MaxPoolGrad"),
      (e.MaxPoolWithArgmax = vt),
      (e.Maximum = dt),
      (e.Mean = mt),
      (e.Min = "Min"),
      (e.Minimum = yt),
      (e.MirrorPad = bt),
      (e.Mod = "Mod"),
      (e.MomentumOptimizer = Oh),
      (e.Multinomial = wt),
      (e.Multiply = kt),
      (e.Neg = "Neg"),
      (e.NonMaxSuppressionV3 = Et),
      (e.NonMaxSuppressionV4 = St),
      (e.NonMaxSuppressionV5 = At),
      (e.NotEqual = xt),
      (e.OP_SCOPE_SUFFIX = Ea),
      (e.OneHot = It),
      (e.OnesLike = _t),
      (e.Optimizer = Dh),
      (e.OptimizerConstructors = xf),
      (e.Pack = Nt),
      (e.PadV2 = Mt),
      (e.Pool = "Pool"),
      (e.Pow = "Pow"),
      (e.Prelu = Tt),
      (e.Prod = Dt),
      (e.RMSPropOptimizer = Lh),
      (e.RaggedGather = Rt),
      (e.RaggedRange = Bt),
      (e.RaggedTensorToTensor = Ft),
      (e.Range = Ct),
      (e.Real = Pt),
      (e.RealDiv = ze),
      (e.Reciprocal = Ot),
      (e.Relu = Lt),
      (e.Relu6 = Gt),
      (e.Reshape = zt),
      (e.ResizeBilinear = Wt),
      (e.ResizeBilinearGrad = "ResizeBilinearGrad"),
      (e.ResizeNearestNeighbor = Ut),
      (e.ResizeNearestNeighborGrad = "ResizeNearestNeighborGrad"),
      (e.Reverse = qt),
      (e.RotateWithOffset = Mn),
      (e.Round = Kt),
      (e.Rsqrt = Vt),
      (e.SGDOptimizer = Ph),
      (e.ScatterNd = Ht),
      (e.SearchSorted = Jt),
      (e.Select = Zt),
      (e.Selu = Yt),
      (e.Sigmoid = en),
      (e.Sign = $t),
      (e.Sin = "Sin"),
      (e.Sinh = Qt),
      (e.Slice = Xt),
      (e.Softmax = on),
      (e.Softplus = tn),
      (e.SpaceToBatchND = rn),
      (e.SparseFillEmptyRows = sn),
      (e.SparseReshape = un),
      (e.SparseSegmentMean = cn),
      (e.SparseSegmentSum = ln),
      (e.SparseToDense = hn),
      (e.SplitV = an),
      (e.Sqrt = nn),
      (e.Square = "Square"),
      (e.SquaredDifference = fn),
      (e.StaticRegexReplace = dn),
      (e.Step = In),
      (e.StridedSlice = pn),
      (e.StringNGrams = gn),
      (e.StringSplit = vn),
      (e.StringToHashBucketFast = mn),
      (e.Sub = "Sub"),
      (e.Sum = "Sum"),
      (e.Tan = "Tan"),
      (e.Tanh = yn),
      (e.Tensor = Vr),
      (e.TensorBuffer = Gr),
      (e.TensorScatterUpdate = jt),
      (e.Tile = bn),
      (e.TopK = wn),
      (e.Transform = kn),
      (e.Transpose = xn),
      (e.Unique = En),
      (e.Unpack = Sn),
      (e.UnsortedSegmentSum = An),
      (e.UpperBound = "UpperBound"),
      (e.Variable = Qr),
      (e.ZerosLike = _n),
      (e._FusedMatMul = Tn),
      (e.abs = Fo),
      (e.acos = Co),
      (e.acosh = Po),
      (e.add = To),
      (e.addN = Oo),
      (e.all = Lo),
      (e.any = zo),
      (e.argMax = Uo),
      (e.argMin = Wo),
      (e.asin = Go),
      (e.asinh = qo),
      (e.atan = Ko),
      (e.atan2 = Vo),
      (e.atanh = Ho),
      (e.avgPool = si),
      (e.avgPool3d = ui),
      (e.backend = Fa),
      (e.backend_util = Nf),
      (e.basicLSTMCell = pi),
      (e.batchNorm = vi),
      (e.batchNorm2d = mi),
      (e.batchNorm3d = yi),
      (e.batchNorm4d = bi),
      (e.batchToSpaceND = gi),
      (e.bincount = wi),
      (e.bitwiseAnd = ki),
      (e.booleanMaskAsync = rl),
      (e.broadcastArgs = xi),
      (e.broadcastTo = Ei),
      (e.broadcast_util = Yi),
      (e.browser = uf),
      (e.buffer = _o),
      (e.cast = Io),
      (e.ceil = Si),
      (e.clipByValue = _i),
      (e.clone = No),
      (e.complex = Aa),
      (e.concat = ci),
      (e.concat1d = Ii),
      (e.concat2d = Ni),
      (e.concat3d = Mi),
      (e.concat4d = Ti),
      (e.conv1d = Ri),
      (e.conv2d = Di),
      (e.conv2dTranspose = Fi),
      (e.conv3d = Ci),
      (e.conv3dTranspose = Oi),
      (e.copyRegisteredKernels = function (e, t) {
        Ln(e).forEach(function (e) {
          zn(Object.assign({}, e, { backendName: t }));
        });
      }),
      (e.cos = Li),
      (e.cosh = zi),
      (e.cosineWindow = hl),
      (e.cumprod = Ui),
      (e.cumsum = Wi),
      (e.customGrad = zs),
      (e.denseBincount = Gi),
      (e.deprecationWarn = function (e) {
        Z().getBool("DEPRECATION_WARNINGS_ENABLED") &&
          console.warn(
            e +
              " You can disable deprecation warnings with tf.disableDeprecationWarnings().",
          );
      }),
      (e.depthToSpace = qi),
      (e.depthwiseConv2d = Ki),
      (e.device_util = va),
      (e.diag = Vi),
      (e.dilation2d = Hi),
      (e.disableDeprecationWarnings = function () {
        Z().set("DEPRECATION_WARNINGS_ENABLED", !1),
          console.warn("TensorFlow.js deprecation warnings have been disabled.");
      }),
      (e.dispose = Da),
      (e.disposeVariables = function () {
        da.disposeVariables();
      }),
      (e.div = Ro),
      (e.divNoNan = es),
      (e.dot = ts),
      (e.dropout = cl),
      (e.einsum = ns),
      (e.elu = rs),
      (e.enableDebugMode = function () {
        Z().set("DEBUG", !0);
      }),
      (e.enableProdMode = function () {
        Z().set("PROD", !0);
      }),
      (e.enclosingPowerOfTwo = ll),
      (e.engine = function () {
        return da;
      }),
      (e.ensureShape = as),
      (e.env = Z),
      (e.equal = Xi),
      (e.erf = os),
      (e.euclideanNorm = ys),
      (e.exp = bs),
      (e.expandDims = ws),
      (e.expm1 = ks),
      (e.eye = Es),
      (e.fft = Dc),
      (e.fill = Ai),
      (e.findBackend = function (e) {
        return da.findBackend(e);
      }),
      (e.findBackendFactory = function (e) {
        return da.findBackendFactory(e);
      }),
      (e.floor = Ss),
      (e.floorDiv = Do),
      (e.fused = El),
      (e.gather = As),
      (e.gatherND = ul),
      (e.gather_util = lf),
      (e.getBackend = Ba),
      (e.getGradient = On),
      (e.getKernel = Pn),
      (e.getKernelsForBackend = Ln),
      (e.grad = function (e) {
        return (
          g(C(e), function () {
            return "The f passed in grad(f) must be a function";
          }),
          function (t, n) {
            var r = ka(t, "x", "tf.grad", "string_or_numeric"),
              a = null != n ? ka(n, "dy", "tf.grad") : null;
            return da.tidy(function () {
              var t = da.gradients(
                  function () {
                    return e(r);
                  },
                  [r],
                  a,
                ),
                n = t.value,
                o = t.grads;
              return (
                null != a &&
                  v(
                    n.shape,
                    a.shape,
                    "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)",
                  ),
                Us(o),
                o[0]
              );
            });
          }
        );
      }),
      (e.grads = function (e) {
        return (
          g(C(e), function () {
            return "The f passed in grads(f) must be a function";
          }),
          function (t, n) {
            g(Array.isArray(t), function () {
              return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s";
            });
            var r = xa(t, "args", "tf.grads", "string_or_numeric"),
              a = null != n ? ka(n, "dy", "tf.grads") : null;
            return da.tidy(function () {
              var t = da.gradients(
                  function () {
                    return e.apply(void 0, u([], s(r), !1));
                  },
                  r,
                  a,
                ),
                n = t.value,
                o = t.grads;
              return (
                null != a &&
                  v(
                    n.shape,
                    a.shape,
                    "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])",
                  ),
                Us(o),
                o
              );
            });
          }
        );
      }),
      (e.greater = _s),
      (e.greaterEqual = Is),
      (e.ifft = Rc),
      (e.imag = Ns),
      (e.image = wh),
      (e.inTopKAsync = fl),
      (e.io = ef),
      (e.irfft = Bc),
      (e.isFinite = Ms),
      (e.isInf = Ts),
      (e.isNaN = Ds),
      (e.keep = Ra),
      (e.kernel_impls = Mf),
      (e.leakyRelu = Rs),
      (e.less = Bs),
      (e.lessEqual = Fs),
      (e.linalg = kh),
      (e.linspace = function (e, t, n) {
        if (n <= 0) throw new Error("The number of values should be positive.");
        var r = { start: e, stop: t, num: n };
        return da.runKernel(ut, {}, r);
      }),
      (e.localResponseNormalization = Cs),
      (e.log = Ps),
      (e.log1p = Os),
      (e.logSigmoid = qs),
      (e.logSoftmax = Vs),
      (e.logSumExp = Hs),
      (e.logicalAnd = js),
      (e.logicalNot = Js),
      (e.logicalOr = Zs),
      (e.logicalXor = Ys),
      (e.losses = xh),
      (e.lowerBound = function (e, t) {
        return Qs(e, t, "left");
      }),
      (e.matMul = li),
      (e.math = nf),
      (e.max = cs),
      (e.maxPool = $s),
      (e.maxPool3d = eu),
      (e.maxPoolWithArgmax = tu),
      (e.maximum = nu),
      (e.mean = ru),
      (e.memory = function () {
        return da.memory();
      }),
      (e.meshgrid = function (e, t, n) {
        var r = (void 0 === n ? {} : n).indexing,
          a = void 0 === r ? "xy" : r;
        if ("xy" !== a && "ij" !== a)
          throw new TypeError(
            "".concat(a, " is not a valid third argument to meshgrid"),
          );
        if (void 0 === e) return [];
        var o = ka(e, "x", "meshgrid", e instanceof Vr ? e.dtype : "float32");
        if (void 0 === t) return [o];
        var i = ka(t, "y", "meshgrid", t instanceof Vr ? t.dtype : "float32"),
          s = y(o.shape),
          u = y(i.shape);
        return "xy" === a
          ? ((o = ii(o, [1, -1])),
            (i = ii(i, [-1, 1])),
            [li(ou([u, 1], o.dtype), o), li(i, ou([1, s], i.dtype))])
          : ((o = ii(o, [-1, 1])),
            (i = ii(i, [1, -1])),
            [li(o, ou([1, u], o.dtype)), li(ou([s, 1], i.dtype), i)]);
      }),
      (e.min = ls),
      (e.minimum = iu),
      (e.mirrorPad = su),
      (e.mod = uu),
      (e.moments = cu),
      (e.movingAverage = ol),
      (e.mul = Bo),
      (e.multiRNNCell = lu),
      (e.multinomial = hu),
      (e.neg = Ws),
      (e.nextFrame = function () {
        return new Promise(function (e) {
          return Sf(function () {
            return e();
          });
        });
      }),
      (e.norm = ms),
      (e.notEqual = fu),
      (e.oneHot = du),
      (e.ones = ou),
      (e.onesLike = pu),
      (e.op = Sa),
      (e.outerProduct = gu),
      (e.pad = vu),
      (e.pad1d = mu),
      (e.pad2d = yu),
      (e.pad3d = bu),
      (e.pad4d = wu),
      (e.pool = xu),
      (e.pow = hs),
      (e.prelu = Eu),
      (e.print = Mo),
      (e.prod = Su),
      (e.profile = function (e) {
        return da.profile(e);
      }),
      (e.raggedGather = Au),
      (e.raggedRange = _u),
      (e.raggedTensorToTensor = Iu),
      (e.rand = Nu),
      (e.randomGamma = rc),
      (e.randomNormal = ac),
      (e.randomStandardNormal = oc),
      (e.randomUniform = ic),
      (e.randomUniformInt = sc),
      (e.range = uc),
      (e.ready = function () {
        return da.ready();
      }),
      (e.real = cc),
      (e.reciprocal = lc),
      (e.registerBackend = function (e, t, n) {
        return void 0 === n && (n = 1), da.registerBackend(e, t, n);
      }),
      (e.registerGradient = function (e) {
        var t = e.kernelName;
        Cn.has(t) &&
          Z().getBool("DEBUG") &&
          Bn("Overriding the gradient for '".concat(t, "'")),
          Cn.set(t, e);
      }),
      (e.registerKernel = zn),
      (e.relu = hc),
      (e.relu6 = fc),
      (e.removeBackend = function (e) {
        da.removeBackend(e);
      }),
      (e.reshape = ii),
      (e.reverse = dc),
      (e.reverse1d = pc),
      (e.reverse2d = gc),
      (e.reverse3d = vc),
      (e.reverse4d = mc),
      (e.rfft = Cc),
      (e.round = yc),
      (e.rsqrt = bc),
      (e.scalar = fs),
      (e.scatterND = il),
      (e.scatter_util = Jc),
      (e.searchSorted = Qs),
      (e.selu = wc),
      (e.separableConv2d = kc),
      (e.serialization = Th),
      (e.setBackend = function (e) {
        return da.setBackend(e);
      }),
      (e.setPlatform = function (e, t) {
        Z().setPlatform(e, t);
      }),
      (e.setdiff1dAsync = xc),
      (e.sigmoid = hi),
      (e.sign = Ec),
      (e.signal = bh),
      (e.sin = Sc),
      (e.sinh = Ac),
      (e.slice = fi),
      (e.slice1d = _c),
      (e.slice2d = Ic),
      (e.slice3d = Nc),
      (e.slice4d = Mc),
      (e.slice_util = kf),
      (e.softmax = Tc),
      (e.softplus = Gs),
      (e.spaceToBatchND = ku),
      (e.sparse = Eh),
      (e.sparseToDense = sl),
      (e.spectral = yh),
      (e.split = Fc),
      (e.sqrt = ds),
      (e.square = ps),
      (e.squaredDifference = Pc),
      (e.squeeze = Oc),
      (e.stack = Lc),
      (e.step = zc),
      (e.stridedSlice = Uc),
      (e.string = Sh),
      (e.sub = Ks),
      (e.sum = gs),
      (e.sumOutType = function (e) {
        return ea(e, "int32");
      }),
      (e.tan = Wc),
      (e.tanh = di),
      (e.tensor = Ia),
      (e.tensor1d = Gc),
      (e.tensor2d = qc),
      (e.tensor3d = Kc),
      (e.tensor4d = function (e, t, n) {
        if ((m(e), null != t && 4 !== t.length))
          throw new Error("tensor4d() requires shape to have four numbers");
        var r = ya(e, n);
        if (4 !== r.length && 1 !== r.length)
          throw new Error(
            "tensor4d() requires values to be number[][][][] or flat/TypedArray",
          );
        if (1 === r.length && null == t)
          throw new Error(
            "tensor4d() requires shape to be provided when `values` are a flat array",
          );
        return _a(e, t, r, n);
      }),
      (e.tensor5d = function (e, t, n) {
        if ((m(e), null != t && 5 !== t.length))
          throw new Error("tensor5d() requires shape to have five numbers");
        var r = ya(e, n);
        if (5 !== r.length && 1 !== r.length)
          throw new Error(
            "tensor5d() requires values to be number[][][][][] or flat/TypedArray",
          );
        if (1 === r.length && null == t)
          throw new Error(
            "tensor5d() requires shape to be provided when `values` are a flat array",
          );
        return _a(e, t, r, n);
      }),
      (e.tensor6d = function (e, t, n) {
        if ((m(e), null != t && 6 !== t.length))
          throw new Error("tensor6d() requires shape to have six numbers");
        var r = ya(e, n);
        if (6 !== r.length && 1 !== r.length)
          throw new Error(
            "tensor6d() requires values to be number[][][][][][] or flat/TypedArray",
          );
        if (1 === r.length && null == t)
          throw new Error(
            "tensor6d() requires shape to be provided when `values` are a flat array",
          );
        return _a(e, (t = t || r), r, n);
      }),
      (e.tensorScatterUpdate = Zc),
      (e.tensor_util = sa),
      (e.test_util = $u),
      (e.tidy = Ta),
      (e.tile = xs),
      (e.time = function (e) {
        return da.time(e);
      }),
      (e.topk = Yc),
      (e.train = Ef),
      (e.transpose = al),
      (e.truncatedNormal = Xc),
      (e.unique = Qc),
      (e.unregisterGradient = function (e) {
        if (!Cn.has(e))
          throw new Error(
            "The gradient '".concat(e, "' for backend is not registered"),
          );
        Cn.delete(e);
      }),
      (e.unregisterKernel = function (e, t) {
        var n = Un(e, t);
        if (!Fn.has(n))
          throw new Error(
            "The kernel '".concat(e, "' for backend ") +
              "'".concat(t, "' is not registered"),
          );
        Fn.delete(n);
      }),
      (e.unsortedSegmentSum = $c),
      (e.unstack = el),
      (e.upcastType = ea),
      (e.upperBound = function (e, t) {
        return Qs(e, t, "right");
      }),
      (e.util = Fr),
      (e.valueAndGrad = function (e) {
        return (
          g(C(e), function () {
            return "The f passed in valueAndGrad(f) must be a function";
          }),
          function (t, n) {
            g(t instanceof Vr, function () {
              return "The x passed in valueAndGrad(f)(x) must be a tensor";
            }),
              g(null == n || n instanceof Vr, function () {
                return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor";
              });
            var r = da.gradients(
                function () {
                  return e(t);
                },
                [t],
                n,
              ),
              a = r.grads,
              o = r.value;
            return Us(a), { grad: a[0], value: o };
          }
        );
      }),
      (e.valueAndGrads = function (e) {
        return (
          g(C(e), function () {
            return "The f passed in valueAndGrads(f) must be a function";
          }),
          function (t, n) {
            g(
              Array.isArray(t) &&
                t.every(function (e) {
                  return e instanceof Vr;
                }),
              function () {
                return "The args passed in valueAndGrads(f)(args) must be array of tensors";
              },
            ),
              g(null == n || n instanceof Vr, function () {
                return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor";
              });
            var r = da.gradients(
              function () {
                return e.apply(void 0, u([], s(t), !1));
              },
              t,
              n,
            );
            return (
              null != n &&
                v(
                  r.value.shape,
                  n.shape,
                  "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])",
                ),
              Us(r.grads),
              r
            );
          }
        );
      }),
      (e.variable = function (e, t, n, r) {
        return void 0 === t && (t = !0), da.makeVariable(e, t, n, r);
      }),
      (e.variableGrads = Ls),
      (e.version_core = "4.17.0"),
      (e.where = Qi),
      (e.whereAsync = nl),
      (e.zeros = au),
      (e.zerosLike = $i);
  });
  //# sourceMappingURL=tf-core.min.js.map
  