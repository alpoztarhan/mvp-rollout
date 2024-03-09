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
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("@tensorflow/tfjs-core"))
      : "function" == typeof define && define.amd
        ? define(["exports", "@tensorflow/tfjs-core"], e)
        : e(
            ((t = "undefined" != typeof globalThis ? globalThis : t || self).tf =
              t.tf || {}),
            t.tf,
          );
  })(this, function (t, e) {
    "use strict";
    function n(t) {
      var e = Object.create(null);
      return (
        t &&
          Object.keys(t).forEach(function (n) {
            if ("default" !== n) {
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
          }),
        (e.default = t),
        e
      );
    }
    function r(t, e) {
      return (
        e.forEach(function (e) {
          e &&
            "string" != typeof e &&
            !Array.isArray(e) &&
            Object.keys(e).forEach(function (n) {
              if ("default" !== n && !(n in t)) {
                var r = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(
                  t,
                  n,
                  r.get
                    ? r
                    : {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      },
                );
              }
            });
        }),
        t
      );
    }
    var i = n(e),
      a = function (t, e) {
        return (
          (a =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          a(t, e)
        );
      };
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Class extends value " + String(e) + " is not a constructor or null",
        );
      function n() {
        this.constructor = t;
      }
      a(t, e),
        (t.prototype =
          null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    }
    function s(t, e, n, r) {
      return new (n || (n = Promise))(function (i, a) {
        function o(t) {
          try {
            u(r.next(t));
          } catch (t) {
            a(t);
          }
        }
        function s(t) {
          try {
            u(r.throw(t));
          } catch (t) {
            a(t);
          }
        }
        function u(t) {
          var e;
          t.done
            ? i(t.value)
            : ((e = t.value),
              e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  })).then(o, s);
        }
        u((r = r.apply(t, e || [])).next());
      });
    }
    function u(t, e) {
      var n,
        r,
        i,
        a,
        o = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(a) {
        return function (s) {
          return (function (a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & a[0]
                        ? r.return
                        : a[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, a[1])).done)
                )
                  return i;
                switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                  case 0:
                  case 1:
                    i = a;
                    break;
                  case 4:
                    return o.label++, { value: a[1], done: !1 };
                  case 5:
                    o.label++, (r = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !((i = o.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0]))
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                      o.label = a[1];
                      break;
                    }
                    if (6 === a[0] && o.label < i[1]) {
                      (o.label = i[1]), (i = a);
                      break;
                    }
                    if (i && o.label < i[2]) {
                      (o.label = i[2]), o.ops.push(a);
                      break;
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                a = e.call(t, o);
              } catch (t) {
                (a = [6, t]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, s]);
        };
      }
    }
    function l(t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length)
        return {
          next: function () {
            return (
              t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
            );
          },
        };
      throw new TypeError(
        e ? "Object is not iterable." : "Symbol.iterator is not defined.",
      );
    }
    function c(t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        i,
        a = n.call(t),
        o = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = a.next()).done; )
          o.push(r.value);
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function h(t, e, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, a = e.length; i < a; i++)
          (!r && i in e) ||
            (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
      return t.concat(r || Array.prototype.slice.call(e));
    }
    var p = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          return Object.setPrototypeOf(r, e.prototype), r;
        }
        return o(e, t), e;
      })(Error),
      f = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          return Object.setPrototypeOf(r, e.prototype), r;
        }
        return o(e, t), e;
      })(Error),
      d = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          return Object.setPrototypeOf(r, e.prototype), r;
        }
        return o(e, t), e;
      })(Error),
      g = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          return Object.setPrototypeOf(r, e.prototype), r;
        }
        return o(e, t), e;
      })(Error),
      v = (function (t) {
        function e(n) {
          var r = t.call(this, n) || this;
          return Object.setPrototypeOf(r, e.prototype), r;
        }
        return o(e, t), e;
      })(Error);
    !(function (t) {
      function e(n) {
        var r = t.call(this, n) || this;
        return Object.setPrototypeOf(r, e.prototype), r;
      }
      o(e, t);
    })(Error);
    var y = (function () {
      function t(t) {
        (this.maxEntries = t || 100), (this.cache = new Map());
      }
      return (
        (t.prototype.get = function (t) {
          var e;
          return (
            this.cache.has(t) &&
              ((e = this.cache.get(t)),
              this.cache.delete(t),
              this.cache.set(t, e)),
            e
          );
        }),
        (t.prototype.put = function (t, e) {
          if (this.cache.has(t)) this.cache.delete(t);
          else if (this.cache.size >= this.maxEntries) {
            var n = this.cache.keys().next().value;
            this.cache.delete(n);
          }
          this.cache.set(t, e);
        }),
        (t.prototype.getMaxEntries = function () {
          return this.maxEntries;
        }),
        (t.prototype.setMaxEntries = function (t) {
          if (t < 0)
            throw new Error(
              "The maxEntries of LRU caches must be at least 0, but got ".concat(
                t,
                ".",
              ),
            );
          if (this.maxEntries > t)
            for (var e = 0; e < this.maxEntries - t; e++) {
              var n = this.cache.keys().next().value;
              this.cache.delete(n);
            }
          this.maxEntries = t;
        }),
        t
      );
    })();
    function m(t, e) {
      if (Array.isArray(t)) {
        for (var n = [], r = 0; r < e; r++) n = n.concat(t);
        return n;
      }
      return (n = new Array(e)).fill(t), n;
    }
    function b(t, e) {
      if (!t) throw new v(e);
    }
    function w(t, e) {
      var n,
        r,
        i = 0;
      try {
        for (var a = l(t), o = a.next(); !o.done; o = a.next()) {
          o.value === e && i++;
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return i;
    }
    function k(t) {
      return 1 === t.length ? t[0] : t;
    }
    function x(t) {
      return Array.isArray(t) ? t : [t];
    }
    function S(t) {
      var e = t
        .replace(/(.)([A-Z][a-z0-9]+)/g, "$1_$2")
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase();
      return "_" !== e[0] ? e : "private" + e;
    }
    function N(t) {
      return t.length <= 1 || -1 === t.indexOf("_")
        ? t
        : t.replace(/[_]+(\w|$)/g, function (t, e) {
            return e.toUpperCase();
          });
    }
    var I = {};
    function A(t) {
      if (null == t) return null;
      var e = {};
      return (e.className = t.getClassName()), (e.config = t.getConfig()), e;
    }
    function z(t) {
      var e, n;
      if (null != t && "object" == typeof t)
        if (Array.isArray(t))
          t.forEach(function (t) {
            return z(t);
          });
        else {
          var r = Object.keys(t);
          try {
            for (var i = l(r), a = i.next(); !a.done; a = i.next()) {
              var o = a.value,
                s = t[o];
              null != s &&
                "object" == typeof s &&
                (Array.isArray(s) ||
                "ndarray" !== s.type ||
                "number" != typeof s.value
                  ? z(s)
                  : (t[o] = s.value));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        }
    }
    function E(t, e, n, r, i) {
      var a, o, s, u, h, p, f, g, v, y, m;
      if (
        (void 0 === e && (e = {}),
        void 0 === n && (n = {}),
        void 0 === r && (r = "object"),
        void 0 === i && (i = !1),
        "string" == typeof t)
      ) {
        var b = t,
          w = void 0;
        if (b in n) w = n[b];
        else if (b in I) w = I[b];
        else if (null == (w = e[b]))
          throw new d(
            "Unknown ".concat(r, ": ").concat(t, ". ") +
              "This may be due to one of the following reasons:\n" +
              "1. The ".concat(r, " is defined in Python, in which ") +
              "case it needs to be ported to TensorFlow.js or your JavaScript code.\n" +
              "2. The custom ".concat(r, " is defined in JavaScript, ") +
              "but is not registered properly with tf.serialization.registerClass().",
          );
        return w;
      }
      var k = t;
      if (null == k.className || null == k.config)
        throw new d(
          "".concat(r, ": Improper config format: ") +
            "".concat(JSON.stringify(k), ".\n") +
            "'className' and 'config' must set.",
        );
      var x = k.className,
        S = void 0,
        N = void 0;
      if (
        (x in n
          ? ((S = (a = c(n[x], 2))[0]), (N = a[1]))
          : x in I
            ? ((S = (o = c(I.className, 2))[0]), (N = o[1]))
            : x in e && ((S = (s = c(e[x], 2))[0]), (N = s[1])),
        null == S)
      )
        throw new d(
          "Unknown ".concat(r, ": ").concat(x, ". ") +
            "This may be due to one of the following reasons:\n" +
            "1. The ".concat(r, " is defined in Python, in which ") +
            "case it needs to be ported to TensorFlow.js or your JavaScript code.\n" +
            "2. The custom ".concat(r, " is defined in JavaScript, ") +
            "but is not registered properly with tf.serialization.registerClass().",
        );
      if (null != N) {
        var A = {};
        try {
          for (var E = l(Object.keys(I)), T = E.next(); !T.done; T = E.next()) {
            A[(R = T.value)] = I[R];
          }
        } catch (t) {
          u = { error: t };
        } finally {
          try {
            T && !T.done && (h = E.return) && h.call(E);
          } finally {
            if (u) throw u.error;
          }
        }
        try {
          for (var C = l(Object.keys(n)), F = C.next(); !F.done; F = C.next()) {
            A[(R = F.value)] = n[R];
          }
        } catch (t) {
          p = { error: t };
        } finally {
          try {
            F && !F.done && (f = C.return) && f.call(C);
          } finally {
            if (p) throw p.error;
          }
        }
        k.config.customObjects = A;
        var D = Object.assign({}, I);
        try {
          for (var _ = l(Object.keys(n)), L = _.next(); !L.done; L = _.next()) {
            var R = L.value;
            I[R] = n[R];
          }
        } catch (t) {
          g = { error: t };
        } finally {
          try {
            L && !L.done && (v = _.return) && v.call(_);
          } finally {
            if (g) throw g.error;
          }
        }
        z(k.config);
        var O = N(S, k.config, n, i);
        return (I = Object.assign({}, D)), O;
      }
      D = Object.assign({}, I);
      try {
        for (var M = l(Object.keys(n)), B = M.next(); !B.done; B = M.next()) {
          R = B.value;
          I[R] = n[R];
        }
      } catch (t) {
        y = { error: t };
      } finally {
        try {
          B && !B.done && (m = M.return) && m.call(M);
        } finally {
          if (y) throw y.error;
        }
      }
      O = new S(k.config);
      return (I = Object.assign({}, D)), O;
    }
    function T(t, e) {
      return (
        -1 *
        (function (t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        })(t, e)
      );
    }
    function C(t) {
      var e, n;
      if (null == t) return t;
      var r = [];
      try {
        for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          -1 === r.indexOf(o) && r.push(o);
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }
    function F(t) {
      if (null == t)
        throw new d("Invalid value in obj: ".concat(JSON.stringify(t)));
      for (var e in t) if (t.hasOwnProperty(e)) return !1;
      return !0;
    }
    function D(t, e, n) {
      if (null != n && t.indexOf(n) < 0)
        throw new d(
          ""
            .concat(n, " is not a valid ")
            .concat(e, ".  Valid values are ")
            .concat(t, " or null/undefined."),
        );
    }
    function _(t, e, n, r) {
      return (
        void 0 === n && (n = 0),
        void 0 === r && (r = 1 / 0),
        b(n >= 0),
        b(r >= n),
        Array.isArray(t) &&
          t.length >= n &&
          t.length <= r &&
          t.every(function (t) {
            return typeof t === e;
          })
      );
    }
    function L(t, n) {
      Array.isArray(t)
        ? (e.util.assert(t.length > 0, function () {
            return "".concat(n, " is unexpectedly an empty array.");
          }),
          t.forEach(function (t, e) {
            return L(t, "element ".concat(e + 1, " of ").concat(n));
          }))
        : e.util.assert(Number.isInteger(t) && t > 0, function () {
            return (
              "Expected ".concat(n, " to be a positive integer, but got ") +
              "".concat(R(t), ".")
            );
          });
    }
    function R(t) {
      return null === t
        ? "null"
        : Array.isArray(t)
          ? "[" +
            t
              .map(function (t) {
                return R(t);
              })
              .join(",") +
            "]"
          : "string" == typeof t
            ? '"'.concat(t, '"')
            : "".concat(t);
    }
    function O(t) {
      return "relu" === t
        ? "relu"
        : "linear" === t
          ? "linear"
          : "elu" === t
            ? "elu"
            : null;
    }
    var M = 0;
    function B() {
      return M++;
    }
    var P = {};
    function j(t) {
      return (
        void 0 === t && (t = ""),
        t in P || (P[t] = 0),
        (P[t] += 1),
        t + P[t].toString()
      );
    }
    var U = ["channelsFirst", "channelsLast"],
      W = ["nearest", "bilinear"],
      V = ["valid", "same", "causal"],
      q = ["max", "avg"],
      G = ["sum", "mul", "concat", "ave"],
      K = new Map();
    function H(t) {
      D(U, "DataFormat", t);
    }
    function J(t) {
      D(V, "PaddingMode", t);
    }
    function Z(t) {
      D(q, "PoolMode", t);
    }
    var Y = [];
    function X(t, e) {
      Y.push(t);
      try {
        var n = e();
        return Y.pop(), n;
      } catch (t) {
        throw (Y.pop(), t);
      }
    }
    function $(t) {
      if (!nt(t)) throw new Error("Not a valid tensor name: '" + t + "'");
      return (0 === Y.length ? "" : Y.join("/") + "/") + t;
    }
    function Q(t) {
      if (!nt(t)) throw new Error("Not a valid tensor name: '" + t + "'");
      K.has(t) || K.set(t, 0);
      var e = K.get(t);
      if ((K.set(t, K.get(t) + 1), e > 0)) {
        var n = "".concat(t, "_").concat(e);
        return K.set(n, 1), n;
      }
      return t;
    }
    var tt,
      et = new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);
    function nt(t) {
      return !!t.match(et);
    }
    function rt(t, e, n) {
      null == e && (e = 0), null == n && (n = t.length);
      for (var r = 1, i = e; i < n; ++i) r *= t[i];
      return r;
    }
    function it(t) {
      if (0 === t.length) return Number.NaN;
      for (var e = Number.POSITIVE_INFINITY, n = 0; n < t.length; n++) {
        var r = t[n];
        r < e && (e = r);
      }
      return e;
    }
    function at(t) {
      if (0 === t.length) return Number.NaN;
      for (var e = Number.NEGATIVE_INFINITY, n = 0; n < t.length; n++) {
        var r = t[n];
        r > e && (e = r);
      }
      return e;
    }
    function ot(t, e) {
      if (e < t)
        throw new d(
          "end (".concat(e, ") < begin (").concat(t, ") is forbidden."),
        );
      for (var n = [], r = t; r < e; ++r) n.push(r);
      return n;
    }
    function st() {
      return null == tt && (tt = e.backend().epsilon()), tt;
    }
    function ut(t, e) {
      return i.cast(t, e);
    }
    function lt(t, e) {
      void 0 === e && (e = -1);
      var n = t.shape.slice();
      return e < 0 && (e = n.length + e + 1), n.splice(e, 0, 1), i.reshape(t, n);
    }
    function ct(t, n, r) {
      return e.tidy(function () {
        switch (t.rank) {
          case 1:
            return i.slice1d(t, n, r);
          case 2:
            return i.slice2d(t, [n, 0], [r, t.shape[1]]);
          case 3:
            return i.slice3d(t, [n, 0, 0], [r, t.shape[1], t.shape[2]]);
          case 4:
            return i.slice4d(
              t,
              [n, 0, 0, 0],
              [r, t.shape[1], t.shape[2], t.shape[3]],
            );
          case 5:
            return i.slice(
              t,
              [n, 0, 0, 0, 0],
              [r, t.shape[1], t.shape[2], t.shape[3], t.shape[4]],
            );
          case 6:
            return i.slice(
              t,
              [n, 0, 0, 0, 0, 0],
              [r, t.shape[1], t.shape[2], t.shape[3], t.shape[4], t.shape[5]],
            );
          default:
            throw new d(
              "sliceAlongFirstAxis() received an unsupported tensor rank: " +
                "".concat(t.rank),
            );
        }
      });
    }
    function ht(t, n, r) {
      return e.tidy(function () {
        switch (t.rank) {
          case 1:
            return i.slice1d(t, n, r);
          case 2:
            return i.slice2d(t, [0, n], [t.shape[0], r]);
          case 3:
            return i.slice3d(t, [0, 0, n], [t.shape[0], t.shape[1], r]);
          case 4:
            return i.slice4d(
              t,
              [0, 0, 0, n],
              [t.shape[0], t.shape[1], t.shape[2], r],
            );
          default:
            throw new d(
              "sliceAlongLastAxis() received an unsupported tensor rank: " +
                "".concat(t.rank),
            );
        }
      });
    }
    function pt(t, n, r, a) {
      return e.tidy(function () {
        switch (t.rank) {
          case 1:
            return i.slice1d(t, n, r);
          case 2:
            switch (a) {
              case 1:
                return ct(t, n, r);
              case 2:
                return ht(t, n, r);
              default:
                throw new d(
                  "The axis is not within the rank of the tensor " + "".concat(a),
                );
            }
          case 3:
            switch (a) {
              case 1:
                return ct(t, n, r);
              case 2:
                return i.slice3d(t, [0, n, 0], [t.shape[0], r, t.shape[2]]);
              case 3:
                return ht(t, n, r);
              default:
                throw new d(
                  "The axis is not within the rank of the tensor " + "".concat(a),
                );
            }
          case 4:
            switch (a) {
              case 1:
                return ct(t, n, r);
              case 2:
                return i.slice4d(
                  t,
                  [0, n, 0, 0],
                  [t.shape[0], r, t.shape[2], t.shape[3]],
                );
              case 3:
                return i.slice4d(
                  t,
                  [0, 0, n, 0],
                  [t.shape[0], t.shape[1], r, t.shape[3]],
                );
              case 4:
                return ht(t, n, r);
              default:
                throw new d(
                  "The axis is not within the rank of the tensor " + "".concat(a),
                );
            }
          default:
            throw new d(
              "sliceAlongLastAxis() received an unsupported tensor rank: " +
                "".concat(t.rank),
            );
        }
      });
    }
    function ft(t, e) {
      var n;
      return (
        void 0 === e && (e = -1),
        e < 0 && (e = 0 !== (n = t[0].rank) ? n : 0),
        e === t[0].rank && (e = -1),
        i.concat(t, e)
      );
    }
    function dt(t, e) {
      switch (t.rank) {
        case 1:
          return i.concat1d([t, e]);
        case 2:
          return i.concat2d([t, e], 0);
        case 3:
          return i.concat3d([t, e], 0);
        case 4:
          return i.concat4d([t, e], 0);
        default:
          throw new d(
            "concatAlongFirstAxis() received an unsupported " +
              "tensor rank: ".concat(t.rank),
          );
      }
    }
    function gt(t, e) {
      if ((Array.isArray(e) || (e = [e]), t.rank !== e.length))
        throw new d(
          "The length of input n (".concat(e.length, ") does not match ") +
            "the number of dimensions in input x (".concat(t.rank, ")"),
        );
      return i.tile(t, e);
    }
    function vt(t, e, n, r, a) {
      return (
        void 0 === e && (e = 0),
        void 0 === n && (n = 1),
        i.randomNormal(t, e, n, r, a)
      );
    }
    function yt(t, e, n, r) {
      if (t.rank < 2 || e.rank < 2)
        throw new g(
          "dot requires both inputs to be rank >= 2" +
            " but got x shape = "
              .concat(t.shape, " and y shape = ")
              .concat(e.shape),
        );
      if (e.rank >= 3 && t.shape.slice(-1)[0] !== (f = e.shape.slice(-2)[0]))
        throw new g(
          "If rank y >= 3, then the second last dim" +
            " of y must equal the last dim of x but got x shape = ".concat(
              t.shape,
              " and ",
            ) +
            " y shape = ".concat(e.shape),
        );
      if (2 === t.rank && 2 === e.rank) {
        var a = !1,
          o = !1;
        return i.fused.matMul({
          a: t,
          b: e,
          transposeA: a,
          transposeB: o,
          bias: r ? wt(t.rank, r, "channelsLast") : null,
          activation: n,
        });
      }
      var s = t.shape.slice(),
        u = s.pop();
      t = i.reshape(t, [-1, u]);
      var l = e.shape.slice(),
        p = l.pop(),
        f = l.pop(),
        d = h(h([], c(l), !1), [p], !1),
        v = Array.from({ length: e.rank }, function (t, n) {
          return 0 === n ? e.rank - 2 : n <= e.rank - 2 ? n - 1 : n;
        });
      e = i.reshape(i.transpose(e, v), [f, -1]);
      var y = h(h([], c(s), !1), c(d), !1);
      (a = !1), (o = !1);
      return i.reshape(
        i.fused.matMul({
          a: t,
          b: e,
          transposeA: a,
          transposeB: o,
          bias: r ? wt(t.rank, r, "channelsLast") : null,
          activation: n,
        }),
        y,
      );
    }
    function mt(t, n, r) {
      return e.tidy(function () {
        return (
          (n = Array.isArray(n) ? e.tensor1d(n, "int32") : i.cast(n, "int32")),
          i.gather(t, n, r)
        );
      });
    }
    function bt(t) {
      return i.mul(t, t);
    }
    function wt(t, e, n) {
      var r = e.shape;
      if (1 !== e.rank && e.rank !== t)
        throw new d(
          "Unexpected bias dimensions: ".concat(e.rank) +
            "; expected it to be 1 or ".concat(t),
        );
      if (5 === t) {
        if ("channelsFirst" === n)
          return 1 === r.length
            ? i.reshape(e, [1, r[0], 1, 1, 1])
            : i.reshape(e, [1, r[3], r[0], r[1], r[2]]);
        if ("channelsLast" === n)
          return 1 === r.length
            ? i.reshape(e, [1, 1, 1, 1, r[0]])
            : i.reshape(e, [1].concat(r));
      } else if (4 === t) {
        if ("channelsFirst" === n)
          return 1 === r.length
            ? i.reshape(e, [1, r[0], 1, 1])
            : i.reshape(e, [1, r[2], r[0], r[1]]);
        if ("channelsLast" === n)
          return 1 === r.length
            ? i.reshape(e, [1, 1, 1, r[0]])
            : i.reshape(e, [1].concat(r));
      } else if (3 === t) {
        if ("channelsFirst" === n)
          return 1 === r.length
            ? i.reshape(e, [1, r[0], 1])
            : i.reshape(e, [1, r[1], r[0]]);
        if ("channelsLast" === n)
          return 1 === r.length
            ? i.reshape(e, [1, 1, r[0]])
            : i.reshape(e, [1].concat(r));
      } else if (t < 3) return e;
      throw new d("Unsupported input rank by biasAdd: ".concat(e.rank));
    }
    function kt(t, n, r) {
      return e.tidy(function () {
        return (
          null == r && (r = "channelsLast"), H(r), i.add(t, wt(t.rank, n, r))
        );
      });
    }
    function xt(t, n, r, a) {
      return e.tidy(function () {
        return i.dropout(t, n, r, a);
      });
    }
    function St(t, e, n) {
      return void 0 === n && (n = !1), n ? t() : e();
    }
    var Nt = ["fanIn", "fanOut", "fanAvg"],
      It = ["normal", "uniform", "truncatedNormal"];
    var At = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.fromConfigUsesCustomObjects = function () {
            return !1;
          }),
          (e.prototype.getConfig = function () {
            return {};
          }),
          e
        );
      })(e.serialization.Serializable),
      zt = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(n, t),
          (n.prototype.apply = function (t, n) {
            return e.zeros(t, n);
          }),
          n
        );
      })(At);
    (zt.className = "Zeros"), e.serialization.registerClass(zt);
    var Et = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          return e.ones(t, n);
        }),
        n
      );
    })(At);
    (Et.className = "Ones"), e.serialization.registerClass(Et);
    var Tt = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        if ("object" != typeof e)
          throw new d(
            "Expected argument of type ConstantConfig but got ".concat(e),
          );
        if (void 0 === e.value)
          throw new d("config must have value set but got ".concat(e));
        return (n.value = e.value), n;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          var r = this;
          return e.tidy(function () {
            return e.mul(e.scalar(r.value), e.ones(t, n));
          });
        }),
        (n.prototype.getConfig = function () {
          return { value: this.value };
        }),
        n
      );
    })(At);
    (Tt.className = "Constant"), e.serialization.registerClass(Tt);
    var Ct = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.DEFAULT_MINVAL = -0.05),
          (n.DEFAULT_MAXVAL = 0.05),
          (n.minval = e.minval || n.DEFAULT_MINVAL),
          (n.maxval = e.maxval || n.DEFAULT_MAXVAL),
          (n.seed = e.seed),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          return e.randomUniform(t, this.minval, this.maxval, n, this.seed);
        }),
        (n.prototype.getConfig = function () {
          return { minval: this.minval, maxval: this.maxval, seed: this.seed };
        }),
        n
      );
    })(At);
    (Ct.className = "RandomUniform"), e.serialization.registerClass(Ct);
    var Ft = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        return (
          (n.DEFAULT_MEAN = 0),
          (n.DEFAULT_STDDEV = 0.05),
          (n.mean = e.mean || n.DEFAULT_MEAN),
          (n.stddev = e.stddev || n.DEFAULT_STDDEV),
          (n.seed = e.seed),
          n
        );
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t, e) {
          if ("float32" !== (e = e || "float32") && "int32" !== e)
            throw new g("randomNormal does not support dType ".concat(e, "."));
          return vt(t, this.mean, this.stddev, e, this.seed);
        }),
        (e.prototype.getConfig = function () {
          return { mean: this.mean, stddev: this.stddev, seed: this.seed };
        }),
        e
      );
    })(At);
    (Ft.className = "RandomNormal"), e.serialization.registerClass(Ft);
    var Dt = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.DEFAULT_MEAN = 0),
          (n.DEFAULT_STDDEV = 0.05),
          (n.mean = e.mean || n.DEFAULT_MEAN),
          (n.stddev = e.stddev || n.DEFAULT_STDDEV),
          (n.seed = e.seed),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          if ("float32" !== (n = n || "float32") && "int32" !== n)
            throw new g("truncatedNormal does not support dType ".concat(n, "."));
          return e.truncatedNormal(t, this.mean, this.stddev, n, this.seed);
        }),
        (n.prototype.getConfig = function () {
          return { mean: this.mean, stddev: this.stddev, seed: this.seed };
        }),
        n
      );
    })(At);
    (Dt.className = "TruncatedNormal"), e.serialization.registerClass(Dt);
    var _t = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (n.gain = null != e.gain ? e.gain : 1), n;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          var r = this;
          return e.tidy(function () {
            if (2 !== t.length || t[0] !== t[1])
              throw new d(
                "Identity matrix initializer can only be used for 2D square matrices.",
              );
            return e.mul(r.gain, e.eye(t[0]));
          });
        }),
        (n.prototype.getConfig = function () {
          return { gain: this.gain };
        }),
        n
      );
    })(At);
    (_t.className = "Identity"), e.serialization.registerClass(_t);
    var Lt = (function (t) {
      function n(e) {
        var n,
          r = t.call(this) || this;
        if (e.scale < 0)
          throw new d("scale must be a positive float. Got: ".concat(e.scale));
        return (
          (r.scale = null == e.scale ? 1 : e.scale),
          (r.mode = null == e.mode ? "fanIn" : e.mode),
          (n = r.mode),
          D(Nt, "FanMode", n),
          (r.distribution = null == e.distribution ? "normal" : e.distribution),
          (function (t) {
            D(It, "Distribution", t);
          })(r.distribution),
          (r.seed = e.seed),
          r
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          var r = (function (t, e) {
              var n, r;
              if ((void 0 === e && (e = "channelsLast"), H(e), 2 === t.length))
                (n = t[0]), (r = t[1]);
              else if (-1 !== [3, 4, 5].indexOf(t.length))
                if ("channelsFirst" === e) {
                  var i = rt(t, 2);
                  (n = t[1] * i), (r = t[0] * i);
                } else
                  "channelsLast" === e &&
                    ((i = rt(t, 0, t.length - 2)),
                    (n = t[t.length - 2] * i),
                    (r = t[t.length - 1] * i));
              else {
                var a = rt(t);
                (n = Math.sqrt(a)), (r = Math.sqrt(a));
              }
              return [n, r];
            })(t),
            i = r[0],
            a = r[1],
            o = this.scale;
          if (
            ("fanIn" === this.mode
              ? (o /= Math.max(1, i))
              : "fanOut" === this.mode
                ? (o /= Math.max(1, a))
                : (o /= Math.max(1, (i + a) / 2)),
            "normal" === this.distribution)
          ) {
            var s = Math.sqrt(o);
            if ("float32" !== (n = n || "float32") && "int32" !== n)
              throw new g(
                ""
                  .concat(this.getClassName(), " does not support dType ")
                  .concat(n, "."),
              );
            return e.truncatedNormal(t, 0, s, n, this.seed);
          }
          var u = Math.sqrt(3 * o);
          return e.randomUniform(t, -u, u, n, this.seed);
        }),
        (n.prototype.getConfig = function () {
          return {
            scale: this.scale,
            mode: this.mode,
            distribution: this.distribution,
            seed: this.seed,
          };
        }),
        n
      );
    })(At);
    (Lt.className = "VarianceScaling"), e.serialization.registerClass(Lt);
    var Rt = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 1,
            mode: "fanAvg",
            distribution: "uniform",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (Rt.className = "GlorotUniform"), e.serialization.registerClass(Rt);
    var Ot = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 1,
            mode: "fanAvg",
            distribution: "normal",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (Ot.className = "GlorotNormal"), e.serialization.registerClass(Ot);
    var Mt = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 2,
            mode: "fanIn",
            distribution: "normal",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (Mt.className = "HeNormal"), e.serialization.registerClass(Mt);
    var Bt = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 2,
            mode: "fanIn",
            distribution: "uniform",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (Bt.className = "HeUniform"), e.serialization.registerClass(Bt);
    var Pt = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 1,
            mode: "fanIn",
            distribution: "normal",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (Pt.className = "LeCunNormal"), e.serialization.registerClass(Pt);
    var jt = (function (t) {
      function e(e) {
        return (
          t.call(this, {
            scale: 1,
            mode: "fanIn",
            distribution: "uniform",
            seed: null == e ? null : e.seed,
          }) || this
        );
      }
      return (
        o(e, t),
        (e.prototype.getClassName = function () {
          return Lt.className;
        }),
        e
      );
    })(Lt);
    (jt.className = "LeCunUniform"), e.serialization.registerClass(jt);
    var Ut = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.DEFAULT_GAIN = 1),
          (n.ELEMENTS_WARN_SLOW = 2e3),
          (n.gain = null == e.gain ? n.DEFAULT_GAIN : e.gain),
          (n.seed = e.seed),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          var r = this;
          return e.tidy(function () {
            if (t.length < 2) throw new g("Shape must be at least 2D.");
            if ("int32" !== n && "float32" !== n && void 0 !== n)
              throw new TypeError("Unsupported data type ".concat(n, "."));
            var i = e.util.sizeFromShape(t.slice(0, -1)),
              a = t[t.length - 1],
              o = i * a;
            o > r.ELEMENTS_WARN_SLOW &&
              console.warn(
                "Orthogonal initializer is being called on a matrix with more " +
                  "than "
                    .concat(r.ELEMENTS_WARN_SLOW, " (")
                    .concat(o, ") elements: ") +
                  "Slowness may result.",
              );
            var s = vt([Math.max(a, i), Math.min(a, i)], 0, 1, n, r.seed),
              u = e.linalg.qr(s, !1),
              l = u[0],
              c = u[1]
                .flatten()
                .stridedSlice(
                  [0],
                  [Math.min(a, i) * Math.min(a, i)],
                  [Math.min(a, i) + 1],
                );
            return (
              (l = e.mul(l, c.sign())),
              i < a && (l = l.transpose()),
              e.mul(e.scalar(r.gain), l.reshape(t))
            );
          });
        }),
        (n.prototype.getConfig = function () {
          return { gain: this.gain, seed: this.seed };
        }),
        n
      );
    })(At);
    (Ut.className = "Orthogonal"), e.serialization.registerClass(Ut);
    var Wt = {
      constant: "Constant",
      glorotNormal: "GlorotNormal",
      glorotUniform: "GlorotUniform",
      heNormal: "HeNormal",
      heUniform: "HeUniform",
      identity: "Identity",
      leCunNormal: "LeCunNormal",
      leCunUniform: "LeCunUniform",
      ones: "Ones",
      orthogonal: "Orthogonal",
      randomNormal: "RandomNormal",
      randomUniform: "RandomUniform",
      truncatedNormal: "TruncatedNormal",
      varianceScaling: "VarianceScaling",
      zeros: "Zeros",
    };
    function Vt(t, n) {
      return (
        void 0 === n && (n = {}),
        E(
          t,
          e.serialization.SerializationMap.getMap().classNameMap,
          n,
          "initializer",
        )
      );
    }
    function qt(t) {
      return A(t);
    }
    function Gt(t) {
      if ("string" == typeof t) {
        var e = t in Wt ? Wt[t] : t;
        if ("GlorotNormal" === e) return new Ot();
        if ("GlorotUniform" === e) return new Rt();
        if ("HeNormal" === e) return new Mt();
        if ("HeUniform" === e) return new Bt();
        if ("LeCunNormal" === e) return new Pt();
        if ("LeCunUniform" === e) return new jt();
        var n = {};
        return (n.className = e), (n.config = {}), Vt(n);
      }
      return t instanceof At ? t : Vt(t);
    }
    function Kt(t) {
      return Array.isArray(t) && Array.isArray(t[0]);
    }
    function Ht(t) {
      return 0 === t.length ? [] : Array.isArray(t[0]) ? t : [t];
    }
    function Jt(t) {
      var e;
      if (Array.isArray(t)) {
        if (1 !== t.length)
          throw new d("Expected Tensor length to be 1; got ".concat(t.length));
        e = t[0];
      } else e = t;
      return e;
    }
    function Zt(t) {
      if (Array.isArray(t) && Array.isArray(t[0])) {
        if (1 === t.length) return t[0];
        throw new d("Expected exactly 1 Shape; got ".concat(t.length));
      }
      return t;
    }
    function Yt(t) {
      var e,
        n,
        r = 0;
      try {
        for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          0 === o.shape.length
            ? (r += 1)
            : (r += o.shape.reduce(function (t, e) {
                return t * e;
              }));
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }
    var Xt = "Variable",
      $t = (function () {
        function t(t, e, n, r, a) {
          void 0 === e && (e = "float32"),
            void 0 === n && (n = Xt),
            void 0 === r && (r = !0),
            void 0 === a && (a = null),
            (this.dtype = null == e ? "float32" : e),
            (this.shape = t.shape),
            (this.id = B()),
            (n = null == n ? Xt : n),
            (this.originalName = $(n)),
            (this.name = Q(this.originalName)),
            (this.trainable_ = r),
            (this.constraint = a),
            (this.val = i.variable(t, this.trainable_, this.name, this.dtype));
        }
        return (
          (t.prototype.read = function () {
            return this.assertNotDisposed(), this.val;
          }),
          (t.prototype.write = function (t) {
            return (
              this.assertNotDisposed(),
              (function (t, e) {
                if (t.shape.toString() !== e.shape.toString())
                  throw new Error(
                    "Shape mismatch: " +
                      JSON.stringify(t.shape) +
                      " vs. " +
                      JSON.stringify(e.shape),
                  );
              })(this.val, t),
              this.val.id !== t.id &&
                (this.val.assign(t),
                null != this.constraint &&
                  this.val.assign(this.constraint.apply(this.val))),
              this
            );
          }),
          (t.prototype.dispose = function () {
            this.assertNotDisposed(), this.val.dispose();
          }),
          (t.prototype.assertNotDisposed = function () {
            if (this.val.isDisposed)
              throw new Error(
                "LayersVariable ".concat(this.name, " is already disposed."),
              );
          }),
          Object.defineProperty(t.prototype, "trainable", {
            get: function () {
              return this.trainable_;
            },
            set: function (t) {
              (this.trainable_ = t), (this.val.trainable = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
    function Qt(t) {
      return t.map(function (t) {
        return t.read();
      });
    }
    function te(t) {
      t.forEach(function (t) {
        t[0].write(t[1]);
      });
    }
    var ee = function (t) {
        (this.dtype = t.dtype),
          (this.shape = t.shape),
          null != t.shape ? (this.ndim = t.shape.length) : (this.ndim = t.ndim),
          (this.maxNDim = t.maxNDim),
          (this.minNDim = t.minNDim),
          (this.axes = t.axes || {});
      },
      ne = function (t, e, n, r, i, a, o) {
        (this.dtype = t),
          (this.shape = e),
          (this.sourceLayer = n),
          (this.inputs = r),
          (this.callArgs = i),
          (this.outputTensorIndex = o),
          (this.id = B()),
          null != a &&
            ((this.originalName = $(a)), (this.name = Q(this.originalName))),
          (this.rank = e.length);
      },
      re = 0,
      ie = (function () {
        function t(t, e) {
          var n, r;
          (this.callArgs = e),
            (this.id = re++),
            (this.outboundLayer = t.outboundLayer),
            (this.inboundLayers = t.inboundLayers),
            (this.nodeIndices = t.nodeIndices),
            (this.tensorIndices = t.tensorIndices),
            (this.inputTensors = t.inputTensors),
            (this.outputTensors = t.outputTensors),
            (this.inputMasks = t.inputMasks),
            (this.outputMasks = t.outputMasks),
            (this.inputShapes = t.inputShapes),
            (this.outputShapes = t.outputShapes);
          try {
            for (
              var i = l(t.inboundLayers), a = i.next();
              !a.done;
              a = i.next()
            ) {
              var o = a.value;
              null != o && o.outboundNodes.push(this);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              a && !a.done && (r = i.return) && r.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          t.outboundLayer.inboundNodes.push(this);
        }
        return (
          (t.prototype.getConfig = function () {
            var t,
              e,
              n = [];
            try {
              for (
                var r = l(this.inboundLayers), i = r.next();
                !i.done;
                i = r.next()
              ) {
                var a = i.value;
                null != a ? n.push(a.name) : n.push(null);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = r.return) && e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            return {
              outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
              inboundLayers: n,
              nodeIndices: this.nodeIndices,
              tensorIndices: this.tensorIndices,
            };
          }),
          t
        );
      })(),
      ae = 0,
      oe = (function (t) {
        function n(e) {
          void 0 === e && (e = {});
          var n = t.call(this) || this;
          (n._callHook = null),
            (n._addedWeightNames = []),
            (n._stateful = !1),
            (n.id = ae++),
            (n.activityRegularizer = null),
            (n.inputSpec = null),
            (n.supportsMasking = !1),
            (n._trainableWeights = []),
            (n._nonTrainableWeights = []),
            (n._losses = []),
            (n._updates = []),
            (n._built = !1),
            (n.inboundNodes = []),
            (n.outboundNodes = []);
          var r = e.name;
          if (!r) {
            var i = n.getClassName();
            r = S(i) + "_" + j(i);
          }
          if (
            ((n.name = r),
            (n.trainable_ = null == e.trainable || e.trainable),
            null != e.inputShape || null != e.batchInputShape)
          ) {
            var a = void 0;
            if (null != e.batchInputShape) a = e.batchInputShape;
            else if (null != e.inputShape) {
              var o = null;
              null != e.batchSize && (o = e.batchSize),
                (a = [o].concat(e.inputShape));
            }
            n.batchInputShape = a;
            var s = e.dtype;
            null == s && (s = e.inputDType),
              null == s && (s = "float32"),
              (n.dtype = s);
          }
          return (
            null != e.weights
              ? (n.initialWeights = e.weights)
              : (n.initialWeights = null),
            (n._refCount = null),
            (n.fastWeightInitDuringBuild = !1),
            n
          );
        }
        return (
          o(n, t),
          (n.nodeKey = function (t, e) {
            return t.name + "_ib-" + e.toString();
          }),
          (n.prototype.getNodeAtIndex = function (t, e) {
            if (0 === this.inboundNodes.length)
              throw new f(
                "The layer has never been called " +
                  "and thus has no defined ".concat(e, "."),
              );
            if (this.inboundNodes.length <= t)
              throw new d(
                "Asked to get ".concat(e, " at node ").concat(t, ", ") +
                  "but the layer has only ".concat(
                    this.inboundNodes.length,
                    " inbound nodes.",
                  ),
              );
            return this.inboundNodes[t];
          }),
          (n.prototype.getInputAt = function (t) {
            return k(this.getNodeAtIndex(t, "input").inputTensors);
          }),
          (n.prototype.getOutputAt = function (t) {
            return k(this.getNodeAtIndex(t, "output").outputTensors);
          }),
          Object.defineProperty(n.prototype, "input", {
            get: function () {
              if (this.inboundNodes.length > 1)
                throw new p(
                  "Layer ".concat(this.name) +
                    ' has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use `getInputAt(nodeIndex)` instead.',
                );
              if (0 === this.inboundNodes.length)
                throw new p(
                  "Layer ".concat(this.name) +
                    " is not connected, no input to return.",
                );
              return k(this.getNodeAtIndex(0, "input").inputTensors);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "output", {
            get: function () {
              if (0 === this.inboundNodes.length)
                throw new p(
                  "Layer ".concat(this.name) + " has no inbound nodes.",
                );
              if (this.inboundNodes.length > 1)
                throw new p(
                  "Layer ".concat(this.name) +
                    ' has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use `getOutputAt(nodeIndex)` instead.',
                );
              return k(this.getNodeAtIndex(0, "output").outputTensors);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "losses", {
            get: function () {
              return this._losses;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.calculateLosses = function () {
            return this.losses.map(function (t) {
              return t();
            });
          }),
          Object.defineProperty(n.prototype, "updates", {
            get: function () {
              return this._updates;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "built", {
            get: function () {
              return this._built;
            },
            set: function (t) {
              this._built = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "trainable", {
            get: function () {
              return this.trainable_;
            },
            set: function (t) {
              this._trainableWeights.forEach(function (e) {
                return (e.trainable = t);
              }),
                (this.trainable_ = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "trainableWeights", {
            get: function () {
              return this.trainable_
                ? this._trainableWeights.filter(function (t) {
                    return t.trainable;
                  })
                : [];
            },
            set: function (t) {
              this._trainableWeights = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "nonTrainableWeights", {
            get: function () {
              return this.trainable
                ? this._trainableWeights
                    .filter(function (t) {
                      return !t.trainable;
                    })
                    .concat(this._nonTrainableWeights)
                : this._trainableWeights.concat(this._nonTrainableWeights);
            },
            set: function (t) {
              this._nonTrainableWeights = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "weights", {
            get: function () {
              return this.trainableWeights.concat(this.nonTrainableWeights);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "stateful", {
            get: function () {
              return this._stateful;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.resetStates = function () {
            if (!this.stateful)
              throw new Error(
                "Cannot call the resetStates() method of a non-stateful Layer object.",
              );
          }),
          (n.prototype.assertInputCompatibility = function (t) {
            var e = x(t);
            if (null != this.inputSpec && 0 !== this.inputSpec.length) {
              var n = x(this.inputSpec);
              if (e.length !== n.length)
                throw new d(
                  "Layer "
                    .concat(this.name, " expects ")
                    .concat(n.length, " inputs, ") +
                    "but it received ".concat(e.length, " input tensors. ") +
                    "Input received: ".concat(t),
                );
              for (var r = 0; r < e.length; r++) {
                var i = e[r],
                  a = n[r];
                if (null != a) {
                  var o = i.rank;
                  if (null != a.ndim && o !== a.ndim)
                    throw new d(
                      "Input "
                        .concat(r, " is incompatible with layer ")
                        .concat(this.name, ": ") +
                        "expected ndim="
                          .concat(a.ndim, ", found ndim=")
                          .concat(o),
                    );
                  if (null != a.maxNDim && o > a.maxNDim)
                    throw new d(
                      "Input "
                        .concat(r, " is incompatible with layer ")
                        .concat(this.name) +
                        ": expected max_ndim="
                          .concat(a.maxNDim, ", found ndim=")
                          .concat(o),
                    );
                  if (null != a.minNDim && o < a.minNDim)
                    throw new d(
                      "Input "
                        .concat(r, " is incompatible with layer ")
                        .concat(this.name) +
                        ": expected min_ndim="
                          .concat(a.minNDim, ", found ndim=")
                          .concat(o, "."),
                    );
                  if (null != a.dtype && i.dtype !== a.dtype)
                    throw new d(
                      "Input "
                        .concat(r, " is incompatible with layer ")
                        .concat(this.name, " ") +
                        ": expected dtype="
                          .concat(a.dtype, ", found dtype=")
                          .concat(i.dtype, "."),
                    );
                  if (a.axes) {
                    var s = i.shape;
                    for (var u in a.axes) {
                      var l = Number(u),
                        c = a.axes[u],
                        h = l >= 0 ? s[l] : s[s.length + l];
                      if (null != c && -1 === [c, null].indexOf(h))
                        throw new d(
                          "Input ".concat(r, " is incompatible with layer ") +
                            ""
                              .concat(this.name, ": expected axis ")
                              .concat(l, " of input shape to ") +
                            "have value "
                              .concat(c, " but got shape ")
                              .concat(s, "."),
                        );
                    }
                  }
                  if (null != a.shape)
                    for (var p = 0; p < a.shape.length; ++p) {
                      var f = a.shape[p],
                        g = i.shape[p];
                      if (null != f && null != g && f !== g)
                        throw new d(
                          "Input ".concat(r, " is incompatible with layer ") +
                            ""
                              .concat(this.name, ": expected shape=")
                              .concat(a.shape, ", ") +
                            "found shape=".concat(i.shape, "."),
                        );
                    }
                }
              }
            }
          }),
          (n.prototype.call = function (t, e) {
            return t;
          }),
          (n.prototype.invokeCallHook = function (t, e) {
            null != this._callHook && this._callHook(t, e);
          }),
          (n.prototype.setCallHook = function (t) {
            this._callHook = t;
          }),
          (n.prototype.clearCallHook = function () {
            this._callHook = null;
          }),
          (n.prototype.apply = function (t, e) {
            var n = this;
            (e = e || {}), this.assertNotDisposed();
            var r = x(t),
              i = (function (t) {
                var e,
                  n,
                  r = !0;
                try {
                  for (var i = l(x(t)), a = i.next(); !a.done; a = i.next()) {
                    if (!(a.value instanceof ne)) {
                      r = !1;
                      break;
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              })(t),
              a = (function (t) {
                var e,
                  n,
                  r = !0;
                try {
                  for (var i = l(x(t)), a = i.next(); !a.done; a = i.next()) {
                    if (a.value instanceof ne) {
                      r = !1;
                      break;
                    }
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    a && !a.done && (n = i.return) && n.call(i);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return r;
              })(t);
            if (i === a)
              throw new d(
                "Arguments to apply() must be all SymbolicTensors or all Tensors",
              );
            return X(this.name, function () {
              var i, o, s, u;
              if (!n.built) {
                n.assertInputCompatibility(t);
                var c = [];
                try {
                  for (var h = l(x(t)), p = h.next(); !p.done; p = h.next()) {
                    var f = p.value;
                    c.push(f.shape);
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    p && !p.done && (o = h.return) && o.call(h);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                n.build(k(c)),
                  (n.built = !0),
                  n.initialWeights && n.setWeights(n.initialWeights),
                  null === n._refCount && a && (n._refCount = 1);
              }
              if ((n.assertInputCompatibility(t), a)) {
                var d = n.call(t, e);
                n.supportsMasking && n.setMaskMetadata(t, d);
                var v = x(d),
                  y = [];
                try {
                  for (var m = l(v), b = m.next(); !b.done; b = m.next()) {
                    var w = b.value;
                    -1 !== r.indexOf(w) && (w = w.clone()), y.push(w);
                  }
                } catch (t) {
                  s = { error: t };
                } finally {
                  try {
                    b && !b.done && (u = m.return) && u.call(m);
                  } finally {
                    if (s) throw s.error;
                  }
                }
                if (((d = k(y)), null != n.activityRegularizer))
                  throw new g(
                    "Layer invocation in the presence of activity regularizer(s) is not supported yet.",
                  );
                return d;
              }
              var S = (function (t) {
                  var e, n;
                  t = x(t);
                  var r = [];
                  try {
                    for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
                      var o = a.value;
                      r.push(o.shape);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      a && !a.done && (n = i.return) && n.call(i);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  return k(r);
                })(t),
                N = n.computeOutputShape(S),
                I = ((d = void 0), "float32");
              if (
                (n.warnOnIncompatibleInputShape(Array.isArray(t) ? S[0] : S),
                (d =
                  null != N && N.length > 0 && Array.isArray(N[0])
                    ? N.map(function (r, i) {
                        return new ne(I, r, n, x(t), e, n.name, i);
                      })
                    : new ne(I, N, n, x(t), e, n.name)),
                n.addInboundNode(t, d, null, null, S, N, e),
                n._refCount++,
                null != n.activityRegularizer)
              )
                throw new g(
                  "Layer invocation in the presence of activity regularizer(s) is not supported yet.",
                );
              return d;
            });
          }),
          (n.prototype.warnOnIncompatibleInputShape = function (t) {
            if (null != this.batchInputShape)
              if (t.length !== this.batchInputShape.length)
                console.warn(
                  "The rank of the input tensor provided (shape: " +
                    "".concat(
                      JSON.stringify(t),
                      ") does not match that of the ",
                    ) +
                    "batchInputShape (".concat(
                      JSON.stringify(this.batchInputShape),
                      ") ",
                    ) +
                    "of the layer ".concat(this.name),
                );
              else {
                var e = !1;
                this.batchInputShape.forEach(function (n, r) {
                  null != n && null != t[r] && t[r] !== n && (e = !0);
                }),
                  e &&
                    console.warn(
                      "The shape of the input tensor " +
                        "(".concat(JSON.stringify(t), ") does not ") +
                        "match the expectation of layer ".concat(
                          this.name,
                          ": ",
                        ) +
                        "".concat(JSON.stringify(this.batchInputShape)),
                    );
              }
          }),
          Object.defineProperty(n.prototype, "outputShape", {
            get: function () {
              var t, e;
              if (null == this.inboundNodes || 0 === this.inboundNodes.length)
                throw new p(
                  "The layer ".concat(
                    this.name,
                    " has never been called and thus has no ",
                  ) + "defined output shape.",
                );
              var n = [];
              try {
                for (
                  var r = l(this.inboundNodes), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var a = i.value,
                    o = JSON.stringify(a.outputShapes);
                  -1 === n.indexOf(o) && n.push(o);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (e = r.return) && e.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              if (1 === n.length) {
                var s = this.inboundNodes[0].outputShapes;
                return Array.isArray(s) && Array.isArray(s[0]) && 1 === s.length
                  ? s[0]
                  : s;
              }
              throw new p(
                "The layer ".concat(
                  this.name,
                  " has multiple inbound nodes with different ",
                ) +
                  'output shapes. Hence the notion of "output shape" is ill-defined for the layer.',
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.countParams = function () {
            if (!this.built)
              throw new f(
                "You tried to call countParams() on ".concat(this.name, ", ") +
                  "but the layer is not built yet. Build it first by calling build(batchInputShape).",
              );
            return Yt(this.weights);
          }),
          (n.prototype.build = function (t) {
            this.built = !0;
          }),
          (n.prototype.getWeights = function (t) {
            return (
              void 0 === t && (t = !1),
              Qt(t ? this.trainableWeights : this.weights)
            );
          }),
          (n.prototype.setWeights = function (t) {
            var n = this;
            e.tidy(function () {
              var r = n.weights;
              if (r.length !== t.length)
                throw new d(
                  'You called setWeights(weights) on layer "'.concat(
                    n.name,
                    '" ',
                  ) +
                    "with a weight list of length ".concat(t.length, ", ") +
                    "but the layer was expecting ".concat(
                      r.length,
                      " weights. ",
                    ) +
                    "Provided weights: ".concat(t, "..."),
                );
              if (0 !== r.length) {
                for (var i = [], a = Qt(r), o = 0; o < a.length; ++o) {
                  var s = a[o],
                    u = r[o],
                    l = t[o];
                  if (!e.util.arraysEqual(s.shape, l.shape))
                    throw new d(
                      "Layer weight shape ".concat(s.shape, " ") +
                        "not compatible with provided weight shape ".concat(
                          l.shape,
                        ),
                    );
                  i.push([u, l]);
                }
                te(i);
              }
            });
          }),
          (n.prototype.addWeight = function (t, e, n, r, i, a, o, s) {
            if (-1 !== this._addedWeightNames.indexOf(t))
              throw new d(
                "Duplicate weight name "
                  .concat(t, " for layer ")
                  .concat(this.name),
              );
            this._addedWeightNames.push(t),
              null == n && (n = "float32"),
              this.fastWeightInitDuringBuild &&
                (r = null != s ? s() : Gt("zeros"));
            var u = r.apply(e, n),
              l = new $t(u, n, t, a, o);
            return (
              u.dispose(),
              null != i &&
                this.addLoss(function () {
                  return i.apply(l.read());
                }),
              null == a && (a = !0),
              a
                ? this._trainableWeights.push(l)
                : this._nonTrainableWeights.push(l),
              l
            );
          }),
          (n.prototype.setFastWeightInitDuringBuild = function (t) {
            this.fastWeightInitDuringBuild = t;
          }),
          (n.prototype.addLoss = function (t) {
            var e;
            null == t ||
              (Array.isArray(t) && 0 === t.length) ||
              ((t = x(t)),
              void 0 !== this._losses &&
                null !== this._losses &&
                (e = this.losses).push.apply(e, h([], c(t), !1)));
          }),
          (n.prototype.computeOutputShape = function (t) {
            return t;
          }),
          (n.prototype.computeMask = function (t, e) {
            var n = this;
            if (!this.supportsMasking) {
              if (null != e) {
                if (!Array.isArray(e))
                  throw new TypeError(
                    "Layer ".concat(this.name, " does not support masking, ") +
                      "but was passed an inputMask.",
                  );
                e.forEach(function (t) {
                  if (null != t)
                    throw new TypeError(
                      "Layer ".concat(n.name, " does not support masking, ") +
                        "but was passed an inputMask.",
                    );
                });
              }
              return null;
            }
            return e;
          }),
          (n.prototype.setMaskMetadata = function (t, e, n) {
            if (this.supportsMasking) {
              var r = this.computeMask(t, n),
                i = x(e),
                a = x(r);
              if (i.length !== a.length)
                throw new Error(
                  ""
                    .concat(this.name, " outputs ")
                    .concat(i.length, " tensors ") +
                    "but ".concat(i.length, " masks for those tensors"),
                );
              for (var o = 0; o < i.length; o++) i[o].kerasMask = a[o];
            }
          }),
          (n.prototype.addInboundNode = function (t, e, n, r, i, a, o) {
            var s, u;
            void 0 === o && (o = null);
            var c = x(t);
            (e = x(e)), (n = x(n)), (r = x(r)), (i = Ht(i)), (a = Ht(a));
            var h = [],
              p = [],
              f = [];
            try {
              for (var d = l(c), g = d.next(); !g.done; g = d.next()) {
                var v = g.value;
                h.push(v.sourceLayer), p.push(v.nodeIndex), f.push(v.tensorIndex);
              }
            } catch (t) {
              s = { error: t };
            } finally {
              try {
                g && !g.done && (u = d.return) && u.call(d);
              } finally {
                if (s) throw s.error;
              }
            }
            new ie(
              {
                outboundLayer: this,
                inboundLayers: h,
                nodeIndices: p,
                tensorIndices: f,
                inputTensors: c,
                outputTensors: e,
                inputMasks: n,
                outputMasks: r,
                inputShapes: i,
                outputShapes: a,
              },
              o,
            );
            for (var y = 0; y < e.length; y++)
              (e[y].sourceLayer = this),
                (e[y].nodeIndex = this.inboundNodes.length - 1),
                (e[y].tensorIndex = y);
          }),
          (n.prototype.getConfig = function () {
            var t = { name: this.name, trainable: this.trainable };
            return (
              null != this.batchInputShape &&
                (t.batchInputShape = this.batchInputShape),
              null != this.dtype && (t.dtype = this.dtype),
              t
            );
          }),
          (n.prototype.disposeWeights = function () {
            return (
              this.weights.forEach(function (t) {
                return t.dispose();
              }),
              this.weights.length
            );
          }),
          (n.prototype.assertNotDisposed = function () {
            if (0 === this._refCount)
              throw new Error(
                "Layer '".concat(this.name, "' is already disposed."),
              );
          }),
          (n.prototype.dispose = function () {
            if (!this.built)
              throw new Error(
                "Cannot dispose Layer ".concat(
                  this.name,
                  " because it has not been ",
                ) + "built yet.",
              );
            if (null === this._refCount)
              throw new Error(
                "Cannot dispose Layer ".concat(
                  this.name,
                  " because it has not been used ",
                ) + "yet.",
              );
            this.assertNotDisposed();
            var t = 0;
            return (
              0 == --this._refCount && (t = this.disposeWeights()),
              { refCountAfterDispose: this._refCount, numDisposedVariables: t }
            );
          }),
          n
        );
      })(e.serialization.Serializable);
    function se(t, e, n) {
      var r, i;
      if (
        ((null == e || (null != n && n > 0)) &&
          ((e = t.sourceLayer), (n = t.nodeIndex)),
        0 === e.inboundNodes.length)
      )
        return [t];
      var a = e.inboundNodes[n];
      if (0 === a.inboundLayers.length) return a.inputTensors;
      for (var o = [], s = 0; s < a.inboundLayers.length; s++) {
        var u = se(a.inputTensors[s], a.inboundLayers[s], a.nodeIndices[s]);
        try {
          for (
            var c = ((r = void 0), l(u)), h = c.next();
            !h.done;
            h = c.next()
          ) {
            var p = h.value;
            -1 === o.indexOf(p) && o.push(p);
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            h && !h.done && (i = c.return) && i.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      return o;
    }
    var ue = (function (t) {
      function e(e) {
        var n =
          t.call(this, {
            dtype: e.dtype,
            name: null != e.name ? e.name : j("input").toString(),
          }) || this;
        if (
          (null == e.batchSize && (e.batchSize = null),
          null == e.sparse && (e.sparse = !1),
          (n.trainable = !1),
          (n.built = !0),
          (n.sparse = e.sparse),
          null != e.inputShape && null != e.batchInputShape)
        )
          throw new d(
            "Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.",
          );
        var r = e.batchInputShape;
        if (null == r) {
          if (null == e.inputShape)
            throw new d(
              "An InputLayer should be passed either a `batchInputShape` or an `inputShape`.",
            );
          r = [e.batchSize].concat(e.inputShape);
        } else if (null != e.batchSize)
          throw new d(
            "Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.",
          );
        var i = e.dtype || "float32";
        (n.batchInputShape = r), (n.dtype = i), (n.inputSpec = [{ shape: r }]);
        var a = new ne(n.dtype, n.batchInputShape, n, [], {}, n.name);
        return (
          (a.nodeIndex = 0),
          (a.tensorIndex = 0),
          new ie({
            outboundLayer: n,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: [a],
            outputTensors: [a],
            inputMasks: [null],
            outputMasks: [null],
            inputShapes: [r],
            outputShapes: [r],
          }),
          n
        );
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t, e) {
          throw new d(
            "Cannot pass any input to an " +
              "InputLayer's apply() method. InputLayer name: ".concat(this.name),
          );
        }),
        (e.prototype.dispose = function () {
          return {
            refCountAfterDispose: this._refCount,
            numDisposedVariables: 0,
          };
        }),
        (e.prototype.getConfig = function () {
          return {
            batchInputShape: this.batchInputShape,
            dtype: this.dtype,
            sparse: this.sparse,
            name: this.name,
          };
        }),
        e
      );
    })(oe);
    function le(t) {
      if (null == t.batchShape && null == t.shape)
        throw new Error(
          "Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.",
        );
      if (null != t.batchShape && null != t.shape)
        throw new d(
          "Please provide either a `shape` or `batchShape` argument to Input, but not both.",
        );
      var e = t.batchShape;
      null != t.shape && null == e && (e = [null].concat(t.shape));
      var n = t.dtype;
      return (
        null == n && (n = "float32"),
        new ue({ batchInputShape: e, name: t.name, dtype: n, sparse: t.sparse })
          .inboundNodes[0].outputTensors[0]
      );
    }
    (ue.className = "InputLayer"), e.serialization.registerClass(ue);
    var ce = (function () {
        function t(e) {
          var n, r;
          if (
            ((this.id2Value = {}),
            (this.id2Mask = {}),
            (this.name2Id = {}),
            e instanceof t)
          )
            for (var i in e.id2Value)
              (this.id2Value[i] = e.id2Value[i]),
                i in e.id2Mask && (this.id2Mask[i] = e.id2Mask[i]);
          else {
            if (null == e) return;
            try {
              for (var a = l(e), o = a.next(); !o.done; o = a.next()) {
                var s = o.value;
                this.add(s.key, s.value);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                o && !o.done && (r = a.return) && r.call(a);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        }
        return (
          (t.prototype.add = function (t, n, r) {
            if (null != this.id2Value[t.id])
              throw new d(
                "Duplicate key: name=".concat(t.name, ", id=").concat(t.id),
              );
            return (
              (this.id2Value[t.id] = (function (t, n) {
                if (null == t.dtype || t.dtype === n.dtype) return n;
                try {
                  return e.cast(n, t.dtype);
                } catch (e) {
                  throw new d(
                    "The dtype of the feed (".concat(
                      n.dtype,
                      ") can not be cast to the dtype ",
                    ) +
                      "of the key '".concat(t.name, "' (").concat(t.dtype, ")."),
                  );
                }
              })(t, n)),
              (this.name2Id[t.name] = t.id),
              null != r && (this.id2Mask[t.id] = r),
              this
            );
          }),
          (t.prototype.addFeed = function (t) {
            this.add(t.key, t.value);
          }),
          (t.prototype.hasKey = function (t) {
            return null != this.id2Value[t.id];
          }),
          (t.prototype.names = function () {
            return Object.keys(this.name2Id);
          }),
          (t.prototype.getValue = function (t) {
            if (t instanceof ne) {
              if (null == this.id2Value[t.id])
                throw new d("Nonexistent key: ".concat(t.name));
              return this.id2Value[t.id];
            }
            var e = this.name2Id[t];
            if (null == e)
              throw new d("Feed dict has no SymbolicTensor name: ".concat(t));
            return this.id2Value[e];
          }),
          (t.prototype.getMask = function (t) {
            if (t instanceof ne) {
              if (null == this.id2Value[t.id])
                throw new d("Nonexistent key: ".concat(t.name));
              return this.id2Mask[t.id];
            }
            var e = this.name2Id[t];
            if (null == e)
              throw new d("Feed dict has no SymbolicTensor name: ".concat(t));
            return this.id2Mask[e];
          }),
          (t.prototype.disposeMasks = function () {
            null != this.id2Mask && e.dispose(this.id2Mask);
          }),
          t
        );
      })(),
      he = new y(),
      pe = new y();
    function fe(t, n, r, i) {
      var a,
        o,
        s,
        u,
        c = null != r && r.training,
        h = Array.isArray(t),
        p = h ? t : [t],
        f = p.map(function (t) {
          return t.name;
        }),
        d = [],
        g = n.names();
      try {
        for (var v = l(f), y = v.next(); !y.done; y = v.next()) {
          var m = y.value;
          -1 !== g.indexOf(m) ? d.push(n.getValue(m)) : d.push(null);
        }
      } catch (t) {
        a = { error: t };
      } finally {
        try {
          y && !y.done && (o = v.return) && o.call(v);
        } finally {
          if (a) throw a.error;
        }
      }
      null != i && ((i.maxNumTensors = -1 / 0), (i.minNumTensors = 1 / 0));
      var b,
        w = f.join(",") + "|" + n.names().sort().join(","),
        k = he.get(w);
      if (null == k) {
        var S = (function (t, n) {
          var r, i, a, o;
          e.util.assert(null != t && t.length > 0, function () {
            return "Expected at least one fetch, got none";
          });
          var s = [],
            u = {};
          if (1 === t.length) {
            var c = ge(t[0], n);
            (s = c.sorted), (u = c.recipientMap);
          } else {
            var h = new Set();
            try {
              for (var p = l(t), f = p.next(); !f.done; f = p.next()) {
                var d = ge(f.value, n),
                  g = d.sorted,
                  v = d.recipientMap;
                try {
                  for (
                    var y = ((a = void 0), l(g)), m = y.next();
                    !m.done;
                    m = y.next()
                  ) {
                    var b = m.value;
                    h.has(b.name) || (s.push(b), h.add(b.name));
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    m && !m.done && (o = y.return) && o.call(y);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                var w = function (t) {
                  null == u[t] && (u[t] = new Set()),
                    v[t].forEach(function (e) {
                      return u[t].add(e);
                    });
                };
                for (var k in v) w(k);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                f && !f.done && (i = p.return) && i.call(p);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return { sorted: s, recipientCounts: de(u) };
        })(p, n);
        (k = S.sorted), (b = S.recipientCounts), he.put(w, k), pe.put(w, b);
      }
      (b = {}), c || Object.assign(b, pe.get(w));
      for (var N = new ce(n), I = 0; I < k.length; ++I) {
        if (null != i) {
          var A = e.memory().numTensors;
          A > i.maxNumTensors && (i.maxNumTensors = A),
            A < i.minNumTensors && (i.minNumTensors = A);
        }
        var z = k[I],
          E = z.sourceLayer;
        if (!(E instanceof ue)) {
          var T = [],
            C = [],
            F = [],
            D = !1;
          try {
            for (
              var _ = ((s = void 0), l(z.inputs)), L = _.next();
              !L.done;
              L = _.next()
            ) {
              var R = L.value,
                O = N.getValue(R),
                M = N.getMask(R);
              T.push(O),
                C.push(M),
                null != M && (D = !0),
                c ||
                  (b[R.name]--,
                  0 !== b[R.name] ||
                    n.hasKey(R) ||
                    -1 !== f.indexOf(R.name) ||
                    O.isDisposed ||
                    !0 === R.sourceLayer.stateful ||
                    F.push(O));
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              L && !L.done && (u = _.return) && u.call(_);
            } finally {
              if (s) throw s.error;
            }
          }
          D && ((r = r || {}).mask = C[0]);
          var B = x(E.apply(T, r)),
            P = null;
          E.supportsMasking && (P = E.computeMask(T, C));
          for (
            var j = ve(z), U = Array.isArray(j) ? j : [j], W = 0;
            W < U.length;
            ++W
          ) {
            N.hasKey(U[W]) || N.add(U[W], B[W], Array.isArray(P) ? P[0] : P);
            var V = f.indexOf(U[W].name);
            -1 !== V && (d[V] = B[W]);
          }
          c || e.dispose(F);
        }
      }
      return N.disposeMasks(), h ? d : d[0];
    }
    function de(t) {
      var e = {};
      for (var n in t) e[n] = t[n].size;
      return e;
    }
    function ge(t, e) {
      var n,
        r,
        i,
        a,
        o = new Set(),
        s = [],
        u = {};
      try {
        for (var c = l(e.names()), h = c.next(); !h.done; h = c.next()) {
          var p = h.value;
          o.add(p);
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          h && !h.done && (r = c.return) && r.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      var f = [],
        d = [];
      for (f.push(t); f.length > 0; ) {
        var g = f[f.length - 1];
        if (o.has(g.name)) f.pop();
        else {
          var v = d[d.length - 1] === f.length - 1;
          if (0 === g.inputs.length || v)
            f.pop(), s.push(g), o.add(g.name), v && d.pop();
          else {
            d.push(f.length - 1);
            try {
              for (
                var y = ((i = void 0), l(g.inputs)), m = y.next();
                !m.done;
                m = y.next()
              ) {
                var b = m.value;
                null == u[b.name] && (u[b.name] = new Set()),
                  u[b.name].add(g.name),
                  o.has(b.name) || f.push(b);
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                m && !m.done && (a = y.return) && a.call(y);
              } finally {
                if (i) throw i.error;
              }
            }
          }
        }
      }
      return { sorted: s, recipientMap: u };
    }
    function ve(t) {
      var e, n, r;
      if (1 === t.sourceLayer.inboundNodes.length) r = t.sourceLayer.output;
      else {
        for (var i = null, a = 0; a < t.sourceLayer.inboundNodes.length; ++a)
          try {
            for (
              var o =
                  ((e = void 0), l(t.sourceLayer.inboundNodes[a].outputTensors)),
                s = o.next();
              !s.done;
              s = o.next()
            ) {
              if (s.value.id === t.id) {
                i = a;
                break;
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        r = t.sourceLayer.getOutputAt(i);
      }
      return r;
    }
    e.env().registerFlag(
      "TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",
      function () {
        return 100;
      },
      function (t) {
        null != he && he.setMaxEntries(t), null != pe && pe.setMaxEntries(t);
      },
    );
    var ye = "Add",
      me = "BatchMatMul",
      be = "BatchToSpaceND",
      we = "Cast",
      ke = "ComplexAbs",
      xe = "Concat",
      Se = "Conv2D",
      Ne = "Conv2DBackpropInput",
      Ie = "Cosh",
      Ae = "Cumsum",
      ze = "RealDiv",
      Ee = "ExpandDims",
      Te = "Floor",
      Ce = "FloorDiv",
      Fe = "GatherV2",
      De = "GreaterEqual",
      _e = "Identity",
      Le = "Maximum",
      Re = "Multiply",
      Oe = "Pack",
      Me = "PadV2",
      Be = "Reshape",
      Pe = "Reverse",
      je = "Rsqrt",
      Ue = "Select",
      We = "Slice",
      Ve = "Sinh",
      qe = "Sigmoid",
      Ge = "Sqrt",
      Ke = "SpaceToBatchND",
      He = "SplitV",
      Je = "Tile",
      Ze = "Transpose",
      Ye = "Unpack",
      Xe = "UnsortedSegmentSum",
      $e = "ZerosLike",
      Qe = "Step",
      tn = (function () {
        function t() {}
        return (
          (t.prototype.refCount = function (t) {
            return en("refCount");
          }),
          (t.prototype.incRef = function (t) {
            return en("incRef");
          }),
          (t.prototype.timerAvailable = function () {
            return !0;
          }),
          (t.prototype.time = function (t) {
            return en("time");
          }),
          (t.prototype.read = function (t) {
            return en("read");
          }),
          (t.prototype.readSync = function (t) {
            return en("readSync");
          }),
          (t.prototype.readToGPU = function (t, e) {
            return en("readToGPU");
          }),
          (t.prototype.numDataIds = function () {
            return en("numDataIds");
          }),
          (t.prototype.disposeData = function (t, e) {
            return en("disposeData");
          }),
          (t.prototype.write = function (t, e, n) {
            return en("write");
          }),
          (t.prototype.move = function (t, e, n, r, i) {
            return en("move");
          }),
          (t.prototype.createTensorFromGPUData = function (t, e, n) {
            return en("createTensorFromGPUData");
          }),
          (t.prototype.memory = function () {
            return en("memory");
          }),
          (t.prototype.floatPrecision = function () {
            return en("floatPrecision");
          }),
          (t.prototype.epsilon = function () {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
          }),
          (t.prototype.dispose = function () {
            return en("dispose");
          }),
          t
        );
      })();
    function en(t) {
      throw new Error(
        "'".concat(t, "' not yet implemented or not found in the registry. ") +
          "This kernel may not be supported by the tfjs backend you have chosen",
      );
    }
    function nn(t, e) {
      if (!t) throw new Error("string" == typeof e ? e : e());
    }
    function rn(t) {
      if (0 === t.length) return 1;
      for (var e = t[0], n = 1; n < t.length; n++) e *= t[n];
      return e;
    }
    function an(t, e) {
      if (t === e) return !0;
      if (null == t || null == e) return !1;
      if (t.length !== e.length) return !1;
      for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
      return !0;
    }
    function on(t) {
      return t % 1 == 0;
    }
    function sn(t, e) {
      return e <= t.length ? t : t + " ".repeat(e - t.length);
    }
    function un(t, e) {
      var n = e.length;
      return (
        nn(
          (t =
            null == t
              ? e.map(function (t, e) {
                  return e;
                })
              : [].concat(t)).every(function (t) {
            return t >= -n && t < n;
          }),
          function () {
            return (
              "All values in axis param must be in range [-"
                .concat(n, ", ")
                .concat(n, ") but ") + "got axis ".concat(t)
            );
          },
        ),
        nn(
          t.every(function (t) {
            return on(t);
          }),
          function () {
            return (
              "All values in axis param must be integers but " +
              "got axis ".concat(t)
            );
          },
        ),
        t.map(function (t) {
          return t < 0 ? n + t : t;
        })
      );
    }
    function ln(t) {
      if ("float32" === t || "int32" === t) return 4;
      if ("complex64" === t) return 8;
      if ("bool" === t) return 1;
      throw new Error("Unknown dtype ".concat(t));
    }
    function cn(t) {
      return "string" == typeof t || t instanceof String;
    }
    function hn(t) {
      return Array.isArray(t)
        ? hn(t[0])
        : t instanceof Float32Array
          ? "float32"
          : t instanceof Int32Array ||
              t instanceof Uint8Array ||
              t instanceof Uint8ClampedArray
            ? "int32"
            : "number" == typeof t
              ? "float32"
              : cn(t)
                ? "string"
                : (function (t) {
                      return "boolean" == typeof t;
                    })(t)
                  ? "bool"
                  : "float32";
    }
    function pn(t) {
      return !!(t && t.constructor && t.call && t.apply);
    }
    function fn(t) {
      var e = t.length;
      if (e < 2) return [];
      var n = new Array(e - 1);
      n[e - 2] = t[e - 1];
      for (var r = e - 3; r >= 0; --r) n[r] = n[r + 1] * t[r + 1];
      return n;
    }
    function dn(t, e, n, r) {
      void 0 === r && (r = !1);
      var i = new Array();
      if (1 === e.length)
        for (var a = e[0] * (r ? 2 : 1), o = 0; o < a; o++) i[o] = n[t + o];
      else {
        a = e[0];
        var s = e.slice(1),
          u =
            s.reduce(function (t, e) {
              return t * e;
            }) * (r ? 2 : 1);
        for (o = 0; o < a; o++) i[o] = dn(t + o * u, s, n, r);
      }
      return i;
    }
    function gn(t, e, n) {
      if ((void 0 === n && (n = !1), 0 === t.length)) return e[0];
      var r =
        t.reduce(function (t, e) {
          return t * e;
        }) * (n ? 2 : 1);
      if (0 === r) return [];
      if (r !== e.length)
        throw new Error(
          "["
            .concat(t, "] does not match the input size ")
            .concat(e.length)
            .concat(n ? " for a complex tensor" : "", "."),
        );
      return dn(0, t, e, n);
    }
    function vn(t, e) {
      for (var n = yn(t, e), r = 0; r < n.length; r++) n[r] = 1;
      return n;
    }
    function yn(t, e) {
      if (null == e || "float32" === e || "complex64" === e)
        return new Float32Array(t);
      if ("int32" === e) return new Int32Array(t);
      if ("bool" === e) return new Uint8Array(t);
      throw new Error("Unknown data type ".concat(e));
    }
    function mn(t) {
      t.forEach(function (e) {
        nn(Number.isInteger(e) && e >= 0, function () {
          return (
            "Tensor must have a shape comprised of positive integers but got " +
            "shape [".concat(t, "].")
          );
        });
      });
    }
    function bn(t) {
      return t && t.then && "function" == typeof t.then;
    }
    var wn = "tfjsflags",
      kn = (function () {
        function t(t) {
          (this.global = t),
            (this.flags = {}),
            (this.flagRegistry = {}),
            (this.urlFlags = {}),
            (this.getQueryParams = xn),
            this.populateURLFlags();
        }
        return (
          (t.prototype.setPlatform = function (t, e) {
            null != this.platform &&
              (Nn().getBool("IS_TEST") ||
                Nn().getBool("PROD") ||
                console.warn(
                  "Platform ".concat(
                    this.platformName,
                    " has already been set. ",
                  ) + "Overwriting the platform with ".concat(t, "."),
                )),
              (this.platformName = t),
              (this.platform = e);
          }),
          (t.prototype.registerFlag = function (t, e, n) {
            if (
              ((this.flagRegistry[t] = { evaluationFn: e, setHook: n }),
              null != this.urlFlags[t])
            ) {
              var r = this.urlFlags[t];
              Nn().getBool("IS_TEST") ||
                Nn().getBool("PROD") ||
                console.warn(
                  "Setting feature override from URL "
                    .concat(t, ": ")
                    .concat(r, "."),
                ),
                this.set(t, r);
            }
          }),
          (t.prototype.getAsync = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    return t in this.flags
                      ? [2, this.flags[t]]
                      : ((e = this.flags), (n = t), [4, this.evaluateFlag(t)]);
                  case 1:
                    return (e[n] = r.sent()), [2, this.flags[t]];
                }
              });
            });
          }),
          (t.prototype.get = function (t) {
            if (t in this.flags) return this.flags[t];
            var e = this.evaluateFlag(t);
            if (bn(e))
              throw new Error(
                "Flag ".concat(t, " cannot be synchronously evaluated. ") +
                  "Please use getAsync() instead.",
              );
            return (this.flags[t] = e), this.flags[t];
          }),
          (t.prototype.getNumber = function (t) {
            return this.get(t);
          }),
          (t.prototype.getBool = function (t) {
            return this.get(t);
          }),
          (t.prototype.getString = function (t) {
            return this.get(t);
          }),
          (t.prototype.getFlags = function () {
            return this.flags;
          }),
          Object.defineProperty(t.prototype, "features", {
            get: function () {
              return this.flags;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.set = function (t, e) {
            if (null == this.flagRegistry[t])
              throw new Error(
                "Cannot set flag ".concat(t, " as it has not been registered."),
              );
            (this.flags[t] = e),
              null != this.flagRegistry[t].setHook &&
                this.flagRegistry[t].setHook(e);
          }),
          (t.prototype.evaluateFlag = function (t) {
            if (null == this.flagRegistry[t])
              throw new Error(
                "Cannot evaluate flag '".concat(
                  t,
                  "': no evaluation function found.",
                ),
              );
            return this.flagRegistry[t].evaluationFn();
          }),
          (t.prototype.setFlags = function (t) {
            this.flags = Object.assign({}, t);
          }),
          (t.prototype.reset = function () {
            (this.flags = {}), (this.urlFlags = {}), this.populateURLFlags();
          }),
          (t.prototype.populateURLFlags = function () {
            var t = this;
            if (
              "undefined" != typeof this.global &&
              "undefined" != typeof this.global.location &&
              "undefined" != typeof this.global.location.search
            ) {
              var e = this.getQueryParams(this.global.location.search);
              if (wn in e)
                e.tfjsflags.split(",").forEach(function (e) {
                  var n = c(e.split(":"), 2),
                    r = n[0],
                    i = n[1];
                  t.urlFlags[r] = (function (t, e) {
                    var n = e.toLowerCase();
                    return "true" === n || "false" === n
                      ? "true" === n
                      : "".concat(+n) === n
                        ? +n
                        : e;
                  })(0, i);
                });
            }
          }),
          t
        );
      })();
    function xn(t) {
      var e = {};
      return (
        t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (t) {
          for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          return Sn(e, n[0], n[1]), n.join("=");
        }),
        e
      );
    }
    function Sn(t, e, n) {
      t[decodeURIComponent(e)] = decodeURIComponent(n || "");
    }
    function Nn() {
      return An;
    }
    var In,
      An = null;
    function zn() {
      if (null == In) {
        var t = void 0;
        if ("undefined" != typeof window) t = window;
        else if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof process) t = process;
        else {
          if ("undefined" == typeof self)
            throw new Error("Could not find a global object");
          t = self;
        }
        In = t;
      }
      return In;
    }
    function En(t, e) {
      var n,
        r =
          (null == (n = zn())._tfGlobals && (n._tfGlobals = new Map()),
          n._tfGlobals);
      if (r.has(t)) return r.get(t);
      var i = e();
      return r.set(t, i), r.get(t);
    }
    function Tn() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      Nn().getBool("IS_TEST") ||
        Nn().getBool("PROD") ||
        console.warn.apply(console, h([], c(t), !1));
    }
    var Cn = En("kernelRegistry", function () {
        return new Map();
      }),
      Fn = En("gradRegistry", function () {
        return new Map();
      });
    function Dn(t, e) {
      var n = (function (t, e) {
        return "".concat(e, "_").concat(t);
      })(t, e);
      return Cn.get(n);
    }
    function _n(t) {
      return Fn.get(t);
    }
    function Ln(t) {
      for (var e = Cn.entries(), n = []; ; ) {
        var r = e.next(),
          i = r.done,
          a = r.value;
        if (i) break;
        var o = c(a, 2),
          s = o[0],
          u = o[1];
        c(s.split("_"), 1)[0] === t && n.push(u);
      }
      return n;
    }
    var Rn =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {};
    function On(t) {
      return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
    }
    function Mn(t) {
      if (t.__esModule) return t;
      var e = t.default;
      if ("function" == typeof e) {
        var n = function t() {
          if (this instanceof t) {
            var n = [null];
            n.push.apply(n, arguments);
            var r = Function.bind.apply(e, n);
            return new r();
          }
          return e.apply(this, arguments);
        };
        n.prototype = e.prototype;
      } else n = {};
      return (
        Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.keys(t).forEach(function (e) {
          var r = Object.getOwnPropertyDescriptor(t, e);
          Object.defineProperty(
            n,
            e,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return t[e];
                  },
                },
          );
        }),
        n
      );
    }
    var Bn = jn,
      Pn = null;
    try {
      Pn = new WebAssembly.Instance(
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
    } catch (t) {}
    function jn(t, e, n) {
      (this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!n);
    }
    function Un(t) {
      return !0 === (t && t.__isLong__);
    }
    jn.prototype.__isLong__,
      Object.defineProperty(jn.prototype, "__isLong__", { value: !0 }),
      (jn.isLong = Un);
    var Wn = {},
      Vn = {};
    function qn(t, e) {
      var n, r, i;
      return e
        ? (i = 0 <= (t >>>= 0) && t < 256) && (r = Vn[t])
          ? r
          : ((n = Kn(t, (0 | t) < 0 ? -1 : 0, !0)), i && (Vn[t] = n), n)
        : (i = -128 <= (t |= 0) && t < 128) && (r = Wn[t])
          ? r
          : ((n = Kn(t, t < 0 ? -1 : 0, !1)), i && (Wn[t] = n), n);
    }
    function Gn(t, e) {
      if (isNaN(t)) return e ? er : tr;
      if (e) {
        if (t < 0) return er;
        if (t >= Xn) return or;
      } else {
        if (t <= -$n) return sr;
        if (t + 1 >= $n) return ar;
      }
      return t < 0 ? Gn(-t, e).neg() : Kn(t % Yn | 0, (t / Yn) | 0, e);
    }
    function Kn(t, e, n) {
      return new jn(t, e, n);
    }
    (jn.fromInt = qn), (jn.fromNumber = Gn), (jn.fromBits = Kn);
    var Hn = Math.pow;
    function Jn(t, e, n) {
      if (0 === t.length) throw Error("empty string");
      if (
        "NaN" === t ||
        "Infinity" === t ||
        "+Infinity" === t ||
        "-Infinity" === t
      )
        return tr;
      if (
        ("number" == typeof e ? ((n = e), (e = !1)) : (e = !!e),
        (n = n || 10) < 2 || 36 < n)
      )
        throw RangeError("radix");
      var r;
      if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === r) return Jn(t.substring(1), e, n).neg();
      for (var i = Gn(Hn(n, 8)), a = tr, o = 0; o < t.length; o += 8) {
        var s = Math.min(8, t.length - o),
          u = parseInt(t.substring(o, o + s), n);
        if (s < 8) {
          var l = Gn(Hn(n, s));
          a = a.mul(l).add(Gn(u));
        } else a = (a = a.mul(i)).add(Gn(u));
      }
      return (a.unsigned = e), a;
    }
    function Zn(t, e) {
      return "number" == typeof t
        ? Gn(t, e)
        : "string" == typeof t
          ? Jn(t, e)
          : Kn(t.low, t.high, "boolean" == typeof e ? e : t.unsigned);
    }
    (jn.fromString = Jn), (jn.fromValue = Zn);
    var Yn = 4294967296,
      Xn = Yn * Yn,
      $n = Xn / 2,
      Qn = qn(1 << 24),
      tr = qn(0);
    jn.ZERO = tr;
    var er = qn(0, !0);
    jn.UZERO = er;
    var nr = qn(1);
    jn.ONE = nr;
    var rr = qn(1, !0);
    jn.UONE = rr;
    var ir = qn(-1);
    jn.NEG_ONE = ir;
    var ar = Kn(-1, 2147483647, !1);
    jn.MAX_VALUE = ar;
    var or = Kn(-1, -1, !0);
    jn.MAX_UNSIGNED_VALUE = or;
    var sr = Kn(0, -2147483648, !1);
    jn.MIN_VALUE = sr;
    var ur = jn.prototype;
    (ur.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (ur.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * Yn + (this.low >>> 0)
          : this.high * Yn + (this.low >>> 0);
      }),
      (ur.toString = function (t) {
        if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(sr)) {
            var e = Gn(t),
              n = this.div(e),
              r = n.mul(e).sub(this);
            return n.toString(t) + r.toInt().toString(t);
          }
          return "-" + this.neg().toString(t);
        }
        for (var i = Gn(Hn(t, 6), this.unsigned), a = this, o = ""; ; ) {
          var s = a.div(i),
            u = (a.sub(s.mul(i)).toInt() >>> 0).toString(t);
          if ((a = s).isZero()) return u + o;
          for (; u.length < 6; ) u = "0" + u;
          o = "" + u + o;
        }
      }),
      (ur.getHighBits = function () {
        return this.high;
      }),
      (ur.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (ur.getLowBits = function () {
        return this.low;
      }),
      (ur.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (ur.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(sr) ? 64 : this.neg().getNumBitsAbs();
        for (
          var t = 0 != this.high ? this.high : this.low, e = 31;
          e > 0 && 0 == (t & (1 << e));
          e--
        );
        return 0 != this.high ? e + 33 : e + 1;
      }),
      (ur.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (ur.eqz = ur.isZero),
      (ur.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (ur.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (ur.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (ur.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (ur.equals = function (t) {
        return (
          Un(t) || (t = Zn(t)),
          (this.unsigned === t.unsigned ||
            this.high >>> 31 != 1 ||
            t.high >>> 31 != 1) &&
            this.high === t.high &&
            this.low === t.low
        );
      }),
      (ur.eq = ur.equals),
      (ur.notEquals = function (t) {
        return !this.eq(t);
      }),
      (ur.neq = ur.notEquals),
      (ur.ne = ur.notEquals),
      (ur.lessThan = function (t) {
        return this.comp(t) < 0;
      }),
      (ur.lt = ur.lessThan),
      (ur.lessThanOrEqual = function (t) {
        return this.comp(t) <= 0;
      }),
      (ur.lte = ur.lessThanOrEqual),
      (ur.le = ur.lessThanOrEqual),
      (ur.greaterThan = function (t) {
        return this.comp(t) > 0;
      }),
      (ur.gt = ur.greaterThan),
      (ur.greaterThanOrEqual = function (t) {
        return this.comp(t) >= 0;
      }),
      (ur.gte = ur.greaterThanOrEqual),
      (ur.ge = ur.greaterThanOrEqual),
      (ur.compare = function (t) {
        if ((Un(t) || (t = Zn(t)), this.eq(t))) return 0;
        var e = this.isNegative(),
          n = t.isNegative();
        return e && !n
          ? -1
          : !e && n
            ? 1
            : this.unsigned
              ? t.high >>> 0 > this.high >>> 0 ||
                (t.high === this.high && t.low >>> 0 > this.low >>> 0)
                ? -1
                : 1
              : this.sub(t).isNegative()
                ? -1
                : 1;
      }),
      (ur.comp = ur.compare),
      (ur.negate = function () {
        return !this.unsigned && this.eq(sr) ? sr : this.not().add(nr);
      }),
      (ur.neg = ur.negate),
      (ur.add = function (t) {
        Un(t) || (t = Zn(t));
        var e = this.high >>> 16,
          n = 65535 & this.high,
          r = this.low >>> 16,
          i = 65535 & this.low,
          a = t.high >>> 16,
          o = 65535 & t.high,
          s = t.low >>> 16,
          u = 0,
          l = 0,
          c = 0,
          h = 0;
        return (
          (c += (h += i + (65535 & t.low)) >>> 16),
          (l += (c += r + s) >>> 16),
          (u += (l += n + o) >>> 16),
          (u += e + a),
          Kn(
            ((c &= 65535) << 16) | (h &= 65535),
            ((u &= 65535) << 16) | (l &= 65535),
            this.unsigned,
          )
        );
      }),
      (ur.subtract = function (t) {
        return Un(t) || (t = Zn(t)), this.add(t.neg());
      }),
      (ur.sub = ur.subtract),
      (ur.multiply = function (t) {
        if (this.isZero()) return tr;
        if ((Un(t) || (t = Zn(t)), Pn))
          return Kn(
            Pn.mul(this.low, this.high, t.low, t.high),
            Pn.get_high(),
            this.unsigned,
          );
        if (t.isZero()) return tr;
        if (this.eq(sr)) return t.isOdd() ? sr : tr;
        if (t.eq(sr)) return this.isOdd() ? sr : tr;
        if (this.isNegative())
          return t.isNegative()
            ? this.neg().mul(t.neg())
            : this.neg().mul(t).neg();
        if (t.isNegative()) return this.mul(t.neg()).neg();
        if (this.lt(Qn) && t.lt(Qn))
          return Gn(this.toNumber() * t.toNumber(), this.unsigned);
        var e = this.high >>> 16,
          n = 65535 & this.high,
          r = this.low >>> 16,
          i = 65535 & this.low,
          a = t.high >>> 16,
          o = 65535 & t.high,
          s = t.low >>> 16,
          u = 65535 & t.low,
          l = 0,
          c = 0,
          h = 0,
          p = 0;
        return (
          (h += (p += i * u) >>> 16),
          (c += (h += r * u) >>> 16),
          (h &= 65535),
          (c += (h += i * s) >>> 16),
          (l += (c += n * u) >>> 16),
          (c &= 65535),
          (l += (c += r * s) >>> 16),
          (c &= 65535),
          (l += (c += i * o) >>> 16),
          (l += e * u + n * s + r * o + i * a),
          Kn(
            ((h &= 65535) << 16) | (p &= 65535),
            ((l &= 65535) << 16) | (c &= 65535),
            this.unsigned,
          )
        );
      }),
      (ur.mul = ur.multiply),
      (ur.divide = function (t) {
        if ((Un(t) || (t = Zn(t)), t.isZero())) throw Error("division by zero");
        var e, n, r;
        if (Pn)
          return this.unsigned ||
            -2147483648 !== this.high ||
            -1 !== t.low ||
            -1 !== t.high
            ? Kn(
                (this.unsigned ? Pn.div_u : Pn.div_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                ),
                Pn.get_high(),
                this.unsigned,
              )
            : this;
        if (this.isZero()) return this.unsigned ? er : tr;
        if (this.unsigned) {
          if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return er;
          if (t.gt(this.shru(1))) return rr;
          r = er;
        } else {
          if (this.eq(sr))
            return t.eq(nr) || t.eq(ir)
              ? sr
              : t.eq(sr)
                ? nr
                : (e = this.shr(1).div(t).shl(1)).eq(tr)
                  ? t.isNegative()
                    ? nr
                    : ir
                  : ((n = this.sub(t.mul(e))), (r = e.add(n.div(t))));
          if (t.eq(sr)) return this.unsigned ? er : tr;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().div(t.neg())
              : this.neg().div(t).neg();
          if (t.isNegative()) return this.div(t.neg()).neg();
          r = tr;
        }
        for (n = this; n.gte(t); ) {
          e = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
          for (
            var i = Math.ceil(Math.log(e) / Math.LN2),
              a = i <= 48 ? 1 : Hn(2, i - 48),
              o = Gn(e),
              s = o.mul(t);
            s.isNegative() || s.gt(n);
  
          )
            s = (o = Gn((e -= a), this.unsigned)).mul(t);
          o.isZero() && (o = nr), (r = r.add(o)), (n = n.sub(s));
        }
        return r;
      }),
      (ur.div = ur.divide),
      (ur.modulo = function (t) {
        return (
          Un(t) || (t = Zn(t)),
          Pn
            ? Kn(
                (this.unsigned ? Pn.rem_u : Pn.rem_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                ),
                Pn.get_high(),
                this.unsigned,
              )
            : this.sub(this.div(t).mul(t))
        );
      }),
      (ur.mod = ur.modulo),
      (ur.rem = ur.modulo),
      (ur.not = function () {
        return Kn(~this.low, ~this.high, this.unsigned);
      }),
      (ur.and = function (t) {
        return (
          Un(t) || (t = Zn(t)),
          Kn(this.low & t.low, this.high & t.high, this.unsigned)
        );
      }),
      (ur.or = function (t) {
        return (
          Un(t) || (t = Zn(t)),
          Kn(this.low | t.low, this.high | t.high, this.unsigned)
        );
      }),
      (ur.xor = function (t) {
        return (
          Un(t) || (t = Zn(t)),
          Kn(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        );
      }),
      (ur.shiftLeft = function (t) {
        return (
          Un(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
              ? Kn(
                  this.low << t,
                  (this.high << t) | (this.low >>> (32 - t)),
                  this.unsigned,
                )
              : Kn(0, this.low << (t - 32), this.unsigned)
        );
      }),
      (ur.shl = ur.shiftLeft),
      (ur.shiftRight = function (t) {
        return (
          Un(t) && (t = t.toInt()),
          0 == (t &= 63)
            ? this
            : t < 32
              ? Kn(
                  (this.low >>> t) | (this.high << (32 - t)),
                  this.high >> t,
                  this.unsigned,
                )
              : Kn(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (ur.shr = ur.shiftRight),
      (ur.shiftRightUnsigned = function (t) {
        if ((Un(t) && (t = t.toInt()), 0 === (t &= 63))) return this;
        var e = this.high;
        return t < 32
          ? Kn((this.low >>> t) | (e << (32 - t)), e >>> t, this.unsigned)
          : Kn(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
      }),
      (ur.shru = ur.shiftRightUnsigned),
      (ur.shr_u = ur.shiftRightUnsigned),
      (ur.toSigned = function () {
        return this.unsigned ? Kn(this.low, this.high, !1) : this;
      }),
      (ur.toUnsigned = function () {
        return this.unsigned ? this : Kn(this.low, this.high, !0);
      }),
      (ur.toBytes = function (t) {
        return t ? this.toBytesLE() : this.toBytesBE();
      }),
      (ur.toBytesLE = function () {
        var t = this.high,
          e = this.low;
        return [
          255 & e,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          e >>> 24,
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
        ];
      }),
      (ur.toBytesBE = function () {
        var t = this.high,
          e = this.low;
        return [
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          255 & e,
        ];
      }),
      (jn.fromBytes = function (t, e, n) {
        return n ? jn.fromBytesLE(t, e) : jn.fromBytesBE(t, e);
      }),
      (jn.fromBytesLE = function (t, e) {
        return new jn(
          t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
          t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
          e,
        );
      }),
      (jn.fromBytesBE = function (t, e) {
        return new jn(
          (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
          (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
          e,
        );
      });
    var lr = On(Bn),
      cr = lr || r({ __proto__: null, default: lr }, [Bn]);
    function hr(t) {
      return cr.fromString(t, !0, 16);
    }
    function pr(t, e) {
      if ("string" === e)
        throw new Error("Cannot convert a string[] to a TypedArray");
      if (
        (Array.isArray(t) && (t = vr(t)),
        Nn().getBool("DEBUG") &&
          (function (t, e) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              if (isNaN(r) || !isFinite(r))
                throw Error(
                  "A tensor of type "
                    .concat(e, " being uploaded contains ")
                    .concat(r, "."),
                );
            }
          })(t, e),
        (function (t, e) {
          return (
            (t instanceof Float32Array && "float32" === e) ||
            (t instanceof Int32Array && "int32" === e) ||
            (t instanceof Uint8Array && "bool" === e)
          );
        })(t, e))
      )
        return t;
      if (null == e || "float32" === e || "complex64" === e)
        return new Float32Array(t);
      if ("int32" === e) return new Int32Array(t);
      if ("bool" === e) {
        for (var n = new Uint8Array(t.length), r = 0; r < n.length; ++r)
          0 !== Math.round(t[r]) && (n[r] = 1);
        return n;
      }
      throw new Error("Unknown data type ".concat(e));
    }
    function fr() {
      return Nn().platform.now();
    }
    function dr(t, e) {
      return (
        void 0 === e && (e = "utf-8"),
        (e = e || "utf-8"),
        Nn().platform.decode(t, e)
      );
    }
    function gr(t) {
      return null != Nn().platform.isTypedArray
        ? Nn().platform.isTypedArray(t)
        : (function (t) {
            return (
              t instanceof Float32Array ||
              t instanceof Int32Array ||
              t instanceof Uint8Array ||
              t instanceof Uint8ClampedArray
            );
          })(t);
    }
    function vr(t, e, n) {
      var r, i;
      if (
        (void 0 === e && (e = []),
        void 0 === n && (n = !1),
        null == e && (e = []),
        "boolean" == typeof t ||
          "number" == typeof t ||
          "string" == typeof t ||
          bn(t) ||
          null == t ||
          (gr(t) && n))
      )
        e.push(t);
      else if (Array.isArray(t) || gr(t))
        for (var a = 0; a < t.length; ++a) vr(t[a], e, n);
      else {
        var o = -1;
        try {
          for (var s = l(Object.keys(t)), u = s.next(); !u.done; u = s.next()) {
            var c = u.value;
            /^([1-9]+[0-9]*|0)$/.test(c) && (o = Math.max(o, Number(c)));
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        for (a = 0; a <= o; a++) vr(t[a], e, n);
      }
      return e;
    }
    hr("c3a5c85c97cb3127"), hr("b492b66fbe98f273"), hr("9ae16a3b2f90404f");
    var yr = (function () {
      function t(t, e) {
        (this.backendTimer = t),
          (this.logger = e),
          null == e && (this.logger = new mr());
      }
      return (
        (t.prototype.profileKernel = function (t, e, n) {
          var r,
            i,
            a,
            o,
            s = function () {
              a = n();
            },
            u = fr();
          if (this.backendTimer.timerAvailable()) o = this.backendTimer.time(s);
          else {
            s();
            try {
              for (var c = l(a), h = c.next(); !h.done; h = c.next()) {
                h.value.dataSync();
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                h && !h.done && (i = c.return) && i.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
            o = Promise.resolve({ kernelMs: fr() - u });
          }
          if (Nn().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
            for (
              var p = function (e) {
                  var n = a[e];
                  n.data().then(function (e) {
                    !(function (t, e, n) {
                      if ("float32" !== e) return !1;
                      for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (isNaN(i) || !isFinite(i))
                          return (
                            console.warn(
                              "Found "
                                .concat(i, " in the result of '")
                                .concat(n, "'"),
                            ),
                            !0
                          );
                      }
                    })(e, n.dtype, t);
                  });
                },
                f = 0;
              f < a.length;
              f++
            )
              p(f);
          return {
            kernelName: t,
            outputs: a,
            inputs: e,
            timeMs: o.then(function (t) {
              return t.kernelMs;
            }),
            extraInfo: o.then(function (t) {
              return null != t.getExtraProfileInfo ? t.getExtraProfileInfo() : "";
            }),
          };
        }),
        (t.prototype.logKernelProfile = function (t) {
          var e = this,
            n = t.kernelName,
            r = t.outputs,
            i = t.timeMs,
            a = t.inputs,
            o = t.extraInfo;
          r.forEach(function (t) {
            Promise.all([t.data(), i, o]).then(function (r) {
              e.logger.logKernelProfile(n, t, r[0], r[1], a, r[2]);
            });
          });
        }),
        t
      );
    })();
    var mr = (function () {
      function t() {}
      return (
        (t.prototype.logKernelProfile = function (t, e, n, r, i, a) {
          var o = "number" == typeof r ? sn("".concat(r, "ms"), 9) : r.error,
            s = sn(t, 25),
            u = e.rank,
            l = e.size,
            c = sn(e.shape.toString(), 14),
            h = "";
          for (var p in i) {
            var f = i[p];
            if (null != f) {
              var d = f.shape || e.shape,
                g = d.length;
              h += ""
                .concat(p, ": ")
                .concat(g, "D ")
                .concat(g > 0 ? d : "", " ");
            }
          }
          console.log(
            "%c"
              .concat(s, "\t%c")
              .concat(o, "\t%c")
              .concat(u, "D ")
              .concat(c, "\t%c")
              .concat(l, "\t%c")
              .concat(h, "\t%c")
              .concat(a),
            "font-weight:bold",
            "color:red",
            "color:blue",
            "color: orange",
            "color: green",
            "color: steelblue",
          );
        }),
        t
      );
    })();
    function br(t, e, n, r) {
      var i = fn(e),
        a = (function (t, e, n, r) {
          var i = rn(e),
            a = r[r.length - 1],
            o = new Array(a).fill(0),
            s = e.length,
            u = "complex64" === n ? Sr(t) : t;
          if (s > 1)
            for (var l = 0; l < i / a; l++)
              for (var c = l * a, h = 0; h < a; h++)
                o[h] = Math.max(o[h], wr(u[c + h], 0, n).length);
          return o;
        })(t, e, n, i),
        o = e.length,
        s = xr(t, e, n, i, a),
        u = ["Tensor"];
      return (
        r &&
          (u.push("  dtype: ".concat(n)),
          u.push("  rank: ".concat(o)),
          u.push("  shape: [".concat(e, "]")),
          u.push("  values:")),
        u.push(
          s
            .map(function (t) {
              return "    " + t;
            })
            .join("\n"),
        ),
        u.join("\n")
      );
    }
    function wr(t, e, n) {
      return sn(
        Array.isArray(t)
          ? "".concat(parseFloat(t[0].toFixed(7)), " + ") +
              "".concat(parseFloat(t[1].toFixed(7)), "j")
          : cn(t)
            ? "'".concat(t, "'")
            : "bool" === n
              ? kr(t)
              : parseFloat(t.toFixed(7)).toString(),
        e,
      );
    }
    function kr(t) {
      return 0 === t ? "false" : "true";
    }
    function xr(t, e, n, r, i, a) {
      void 0 === a && (a = !0);
      var o = "complex64" === n ? 2 : 1,
        s = e[0],
        u = e.length;
      if (0 === u)
        return "complex64" === n
          ? [wr(Sr(t)[0], 0, n)]
          : "bool" === n
            ? [kr(t[0])]
            : [t[0].toString()];
      if (1 === u) {
        if (s > 20) {
          var l = 3 * o,
            p = Array.from(t.slice(0, l)),
            f = Array.from(t.slice((s - 3) * o, s * o));
          return (
            "complex64" === n && ((p = Sr(p)), (f = Sr(f))),
            [
              "[" +
                p
                  .map(function (t, e) {
                    return wr(t, i[e], n);
                  })
                  .join(", ") +
                ", ..., " +
                f
                  .map(function (t, e) {
                    return wr(t, i[s - 3 + e], n);
                  })
                  .join(", ") +
                "]",
            ]
          );
        }
        return [
          "[" +
            ("complex64" === n ? Sr(t) : Array.from(t))
              .map(function (t, e) {
                return wr(t, i[e], n);
              })
              .join(", ") +
            "]",
        ];
      }
      var d = e.slice(1),
        g = r.slice(1),
        v = r[0] * o,
        y = [];
      if (s > 20) {
        for (var m = 0; m < 3; m++) {
          var b = (w = m * v) + v;
          y.push.apply(y, h([], c(xr(t.slice(w, b), d, n, g, i, !1)), !1));
        }
        y.push("...");
        for (m = s - 3; m < s; m++) {
          b = (w = m * v) + v;
          y.push.apply(
            y,
            h([], c(xr(t.slice(w, b), d, n, g, i, m === s - 1)), !1),
          );
        }
      } else
        for (m = 0; m < s; m++) {
          var w;
          b = (w = m * v) + v;
          y.push.apply(
            y,
            h([], c(xr(t.slice(w, b), d, n, g, i, m === s - 1)), !1),
          );
        }
      var k = 2 === u ? "," : "";
      y[0] = "[" + (s > 0 ? y[0] + k : "");
      for (m = 1; m < y.length - 1; m++) y[m] = " " + y[m] + k;
      var x = ",\n";
      for (m = 2; m < u; m++) x += "\n";
      return (y[y.length - 1] = " " + y[y.length - 1] + "]" + (a ? "" : x)), y;
    }
    function Sr(t) {
      for (var e = [], n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
      return e;
    }
    !(function () {
      function t(t, e, n) {
        var r = this;
        if (
          ((this.dtype = e),
          (this.shape = t.slice()),
          (this.size = rn(t)),
          null != n)
        ) {
          var i = n.length;
          nn(i === this.size, function () {
            return (
              "Length of values '".concat(i, "' does not match the size ") +
              "inferred by the shape '".concat(r.size, "'.")
            );
          });
        }
        if ("complex64" === e)
          throw new Error(
            "complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).",
          );
        (this.values =
          n ||
          (function (t, e) {
            var n = null;
            if (null == t || "float32" === t) n = new Float32Array(e);
            else if ("int32" === t) n = new Int32Array(e);
            else if ("bool" === t) n = new Uint8Array(e);
            else {
              if ("string" !== t) throw new Error("Unknown data type ".concat(t));
              n = new Array(e);
            }
            return n;
          })(e, this.size)),
          (this.strides = fn(t));
      }
      (t.prototype.set = function (t) {
        for (var e = this, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        0 === n.length && (n = [0]),
          nn(n.length === this.rank, function () {
            return (
              "The number of provided coordinates (".concat(n.length, ") must ") +
              "match the rank (".concat(e.rank, ")")
            );
          });
        var i = this.locToIndex(n);
        this.values[i] = t;
      }),
        (t.prototype.get = function () {
          for (var t, e, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          0 === n.length && (n = [0]);
          var i = 0;
          try {
            for (var a = l(n), o = a.next(); !o.done; o = a.next()) {
              var s = o.value;
              if (s < 0 || s >= this.shape[i]) {
                var u =
                  "Requested out of range element at ".concat(n, ". ") +
                  "  Buffer shape=".concat(this.shape);
                throw new Error(u);
              }
              i++;
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              o && !o.done && (e = a.return) && e.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
          for (var c = n[n.length - 1], h = 0; h < n.length - 1; ++h)
            c += this.strides[h] * n[h];
          return this.values[c];
        }),
        (t.prototype.locToIndex = function (t) {
          if (0 === this.rank) return 0;
          if (1 === this.rank) return t[0];
          for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n)
            e += this.strides[n] * t[n];
          return e;
        }),
        (t.prototype.indexToLoc = function (t) {
          if (0 === this.rank) return [];
          if (1 === this.rank) return [t];
          for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n)
            (e[n] = Math.floor(t / this.strides[n])),
              (t -= e[n] * this.strides[n]);
          return (e[e.length - 1] = t), e;
        }),
        Object.defineProperty(t.prototype, "rank", {
          get: function () {
            return this.shape.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toTensor = function () {
          return Nr().makeTensor(this.values, this.shape, this.dtype);
        });
    })();
    var Nr = null,
      Ir = null;
    var Ar = (function () {
      function t(t, e, n, r) {
        (this.kept = !1),
          (this.isDisposedInternal = !1),
          (this.shape = t.slice()),
          (this.dtype = e || "float32"),
          (this.size = rn(t)),
          (this.strides = fn(t)),
          (this.dataId = n),
          (this.id = r),
          (this.rankType = this.rank < 5 ? this.rank.toString() : "higher");
      }
      return (
        Object.defineProperty(t.prototype, "rank", {
          get: function () {
            return this.shape.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.buffer = function () {
          return s(this, void 0, void 0, function () {
            var t;
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.data()];
                case 1:
                  return (
                    (t = e.sent()), [2, Ir.buffer(this.shape, this.dtype, t)]
                  );
              }
            });
          });
        }),
        (t.prototype.bufferSync = function () {
          return Ir.buffer(this.shape, this.dtype, this.dataSync());
        }),
        (t.prototype.array = function () {
          return s(this, void 0, void 0, function () {
            var t;
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.data()];
                case 1:
                  return (
                    (t = e.sent()),
                    [2, gn(this.shape, t, "complex64" === this.dtype)]
                  );
              }
            });
          });
        }),
        (t.prototype.arraySync = function () {
          return gn(this.shape, this.dataSync(), "complex64" === this.dtype);
        }),
        (t.prototype.data = function () {
          return s(this, void 0, void 0, function () {
            var t, e;
            return u(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    this.throwIfDisposed(),
                    (t = Nr().read(this.dataId)),
                    "string" !== this.dtype ? [3, 2] : [4, t]
                  );
                case 1:
                  e = n.sent();
                  try {
                    return [
                      2,
                      e.map(function (t) {
                        return dr(t);
                      }),
                    ];
                  } catch (t) {
                    throw new Error(
                      "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().",
                    );
                  }
                  n.label = 2;
                case 2:
                  return [2, t];
              }
            });
          });
        }),
        (t.prototype.dataToGPU = function (t) {
          return this.throwIfDisposed(), Nr().readToGPU(this.dataId, t);
        }),
        (t.prototype.dataSync = function () {
          this.throwIfDisposed();
          var t = Nr().readSync(this.dataId);
          if ("string" === this.dtype)
            try {
              return t.map(function (t) {
                return dr(t);
              });
            } catch (t) {
              throw new Error(
                "Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().",
              );
            }
          return t;
        }),
        (t.prototype.bytes = function () {
          return s(this, void 0, void 0, function () {
            var t;
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.throwIfDisposed(), [4, Nr().read(this.dataId)];
                case 1:
                  return (
                    (t = e.sent()),
                    "string" === this.dtype
                      ? [2, t]
                      : [2, new Uint8Array(t.buffer)]
                  );
              }
            });
          });
        }),
        (t.prototype.dispose = function () {
          this.isDisposed ||
            (this.kerasMask && this.kerasMask.dispose(),
            Nr().disposeTensor(this),
            (this.isDisposedInternal = !0));
        }),
        Object.defineProperty(t.prototype, "isDisposed", {
          get: function () {
            return this.isDisposedInternal;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.throwIfDisposed = function () {
          if (this.isDisposed) throw new Error("Tensor is disposed.");
        }),
        (t.prototype.print = function (t) {
          return void 0 === t && (t = !1), Ir.print(this, t);
        }),
        (t.prototype.clone = function () {
          return this.throwIfDisposed(), Ir.clone(this);
        }),
        (t.prototype.toString = function (t) {
          return (
            void 0 === t && (t = !1),
            br(this.dataSync(), this.shape, this.dtype, t)
          );
        }),
        (t.prototype.cast = function (t) {
          return this.throwIfDisposed(), Ir.cast(this, t);
        }),
        (t.prototype.variable = function (t, e, n) {
          return (
            void 0 === t && (t = !0),
            this.throwIfDisposed(),
            Nr().makeVariable(this, t, e, n)
          );
        }),
        t
      );
    })();
    function zr() {
      return En("Tensor", function () {
        return Ar;
      });
    }
    Object.defineProperty(Ar, Symbol.hasInstance, {
      value: function (t) {
        return (
          !!t && null != t.data && null != t.dataSync && null != t.throwIfDisposed
        );
      },
    }),
      zr();
    var Er,
      Tr,
      Cr,
      Fr,
      Dr,
      _r = (function (t) {
        function e(e, n, r, i) {
          var a = t.call(this, e.shape, e.dtype, e.dataId, i) || this;
          return (a.trainable = n), (a.name = r), a;
        }
        return (
          o(e, t),
          (e.prototype.assign = function (t) {
            if (t.dtype !== this.dtype)
              throw new Error(
                "dtype of the new value (".concat(t.dtype, ") and ") +
                  "previous value (".concat(this.dtype, ") must match"),
              );
            if (!an(t.shape, this.shape))
              throw new Error(
                "shape of the new value (".concat(t.shape, ") and ") +
                  "previous value (".concat(this.shape, ") must match"),
              );
            Nr().disposeTensor(this),
              (this.dataId = t.dataId),
              Nr().incRef(this, null);
          }),
          (e.prototype.dispose = function () {
            Nr().disposeVariable(this), (this.isDisposedInternal = !0);
          }),
          e
        );
      })(Ar);
    Object.defineProperty(_r, Symbol.hasInstance, {
      value: function (t) {
        return (
          t instanceof Ar && null != t.assign && t.assign instanceof Function
        );
      },
    }),
      (function (t) {
        (t.R0 = "R0"),
          (t.R1 = "R1"),
          (t.R2 = "R2"),
          (t.R3 = "R3"),
          (t.R4 = "R4"),
          (t.R5 = "R5"),
          (t.R6 = "R6");
      })(Er || (Er = {})),
      (function (t) {
        (t.float32 = "float32"),
          (t.int32 = "int32"),
          (t.bool = "int32"),
          (t.complex64 = "complex64");
      })(Tr || (Tr = {})),
      (function (t) {
        (t.float32 = "float32"),
          (t.int32 = "int32"),
          (t.bool = "bool"),
          (t.complex64 = "complex64");
      })(Cr || (Cr = {})),
      (function (t) {
        (t.float32 = "float32"),
          (t.int32 = "float32"),
          (t.bool = "float32"),
          (t.complex64 = "complex64");
      })(Fr || (Fr = {})),
      (function (t) {
        (t.float32 = "complex64"),
          (t.int32 = "complex64"),
          (t.bool = "complex64"),
          (t.complex64 = "complex64");
      })(Dr || (Dr = {}));
    var Lr = { float32: Fr, int32: Tr, bool: Cr, complex64: Dr };
    function Rr(t) {
      return (
        null != t &&
        "object" == typeof t &&
        "texture" in t &&
        t.texture instanceof WebGLTexture
      );
    }
    function Or(t) {
      return (
        "undefined" != typeof GPUBuffer &&
        null != t &&
        "object" == typeof t &&
        "buffer" in t &&
        t.buffer instanceof GPUBuffer
      );
    }
    function Mr(t, e) {
      if (t.dtype === e.dtype) return [t, e];
      var n = (function (t, e) {
        if ("string" === t || "string" === e) {
          if ("string" === t && "string" === e) return "string";
          throw new Error("Can not upcast ".concat(t, " with ").concat(e));
        }
        return Lr[t][e];
      })(t.dtype, e.dtype);
      return [t.cast(n), e.cast(n)];
    }
    function Br(t) {
      var e = [];
      return Pr(t, e, new Set()), e;
    }
    function Pr(t, e, n) {
      if (null != t)
        if (t instanceof Ar) e.push(t);
        else if (((r = t), Array.isArray(r) || "object" == typeof r)) {
          var r,
            i = t;
          for (var a in i) {
            var o = i[a];
            n.has(o) || (n.add(o), Pr(o, e, n));
          }
        }
    }
    function jr(t) {
      return null != t.kernelName;
    }
    var Ur = (function () {
        function t() {
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
                    this.kernels.map(function (t) {
                      return t.name;
                    }),
                  ),
                );
              },
            });
        }
        return (
          (t.prototype.dispose = function () {
            for (var t in this.registeredVariables)
              this.registeredVariables[t].dispose();
          }),
          t
        );
      })(),
      Wr = (function () {
        function t(t) {
          (this.ENV = t),
            (this.registry = {}),
            (this.registryFactory = {}),
            (this.pendingBackendInitId = 0),
            (this.state = new Ur());
        }
        return (
          (t.prototype.ready = function () {
            return s(this, void 0, void 0, function () {
              var t, e, n;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (null != this.pendingBackendInit)
                      return [2, this.pendingBackendInit.then(function () {})];
                    if (null != this.backendInstance) return [2];
                    (t = this.getSortedBackends()), (e = 0), (r.label = 1);
                  case 1:
                    return e < t.length
                      ? ((n = t[e]), [4, this.initializeBackend(n).success])
                      : [3, 5];
                  case 2:
                    return r.sent() ? [4, this.setBackend(n)] : [3, 4];
                  case 3:
                    return r.sent(), [2];
                  case 4:
                    return e++, [3, 1];
                  case 5:
                    throw new Error(
                      "Could not initialize any backends, all backend initializations failed.",
                    );
                }
              });
            });
          }),
          Object.defineProperty(t.prototype, "backend", {
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
                var t = this.initializeBackendsAndReturnBest(),
                  e = t.name;
                if (t.asyncInit)
                  throw new Error(
                    "The highest priority backend '".concat(
                      e,
                      "' has not yet been ",
                    ) +
                      "initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods",
                  );
                this.setBackend(e);
              }
              return this.backendInstance;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.backendNames = function () {
            return Object.keys(this.registryFactory);
          }),
          (t.prototype.findBackend = function (t) {
            if (!(t in this.registry)) {
              if (!(t in this.registryFactory)) return null;
              if (this.initializeBackend(t).asyncInit) return null;
            }
            return this.registry[t];
          }),
          (t.prototype.findBackendFactory = function (t) {
            return t in this.registryFactory
              ? this.registryFactory[t].factory
              : null;
          }),
          (t.prototype.registerBackend = function (t, e, n) {
            return (
              void 0 === n && (n = 1),
              t in this.registryFactory
                ? (Tn(
                    "".concat(t, " backend was already registered. ") +
                      "Reusing existing backend factory.",
                  ),
                  !1)
                : ((this.registryFactory[t] = { factory: e, priority: n }), !0)
            );
          }),
          (t.prototype.setBackend = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n, r;
              return u(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (null == this.registryFactory[t])
                      throw new Error(
                        "Backend name '".concat(t, "' not found in registry"),
                      );
                    return (
                      (this.backendName = t),
                      null != this.registry[t]
                        ? [3, 4]
                        : ((this.backendInstance = null),
                          (e = this.initializeBackend(t)),
                          (n = e.success),
                          e.asyncInit ? [4, n] : [3, 2])
                    );
                  case 1:
                    return (r = i.sent()), [3, 3];
                  case 2:
                    (r = n), (i.label = 3);
                  case 3:
                    if (!r) return [2, !1];
                    i.label = 4;
                  case 4:
                    return (
                      (this.backendInstance = this.registry[t]),
                      this.setupRegisteredKernels(),
                      (this.profiler = new yr(this.backendInstance)),
                      [2, !0]
                    );
                }
              });
            });
          }),
          (t.prototype.setupRegisteredKernels = function () {
            var t = this;
            Ln(this.backendName).forEach(function (e) {
              null != e.setupFunc && e.setupFunc(t.backendInstance);
            });
          }),
          (t.prototype.disposeRegisteredKernels = function (t) {
            var e = this;
            Ln(t).forEach(function (n) {
              null != n.disposeFunc && n.disposeFunc(e.registry[t]);
            });
          }),
          (t.prototype.initializeBackend = function (t) {
            var e = this,
              n = this.registryFactory[t];
            if (null == n)
              throw new Error(
                "Cannot initialize backend ".concat(
                  t,
                  ", no registration found.",
                ),
              );
            try {
              var r = n.factory();
              if (!r || r instanceof tn || "function" != typeof r.then)
                return (this.registry[t] = r), { success: !0, asyncInit: !1 };
              var i = ++this.pendingBackendInitId,
                a = r
                  .then(function (n) {
                    return (
                      !(i < e.pendingBackendInitId) &&
                      ((e.registry[t] = n), (e.pendingBackendInit = null), !0)
                    );
                  })
                  .catch(function (n) {
                    return (
                      i < e.pendingBackendInitId ||
                        ((e.pendingBackendInit = null),
                        Tn("Initialization of backend ".concat(t, " failed")),
                        Tn(n.stack || n.message)),
                      !1
                    );
                  });
              return (this.pendingBackendInit = a), { success: a, asyncInit: !0 };
            } catch (e) {
              return (
                Tn("Initialization of backend ".concat(t, " failed")),
                Tn(e.stack || e.message),
                { success: !1, asyncInit: !1 }
              );
            }
          }),
          (t.prototype.removeBackend = function (t) {
            if (!(t in this.registryFactory))
              throw new Error("".concat(t, " backend not found in registry"));
            this.backendName === t &&
              null != this.pendingBackendInit &&
              this.pendingBackendInitId++,
              t in this.registry &&
                (this.disposeRegisteredKernels(t),
                this.registry[t].dispose(),
                delete this.registry[t]),
              delete this.registryFactory[t],
              this.backendName === t &&
                ((this.pendingBackendInit = null),
                (this.backendName = null),
                (this.backendInstance = null));
          }),
          (t.prototype.getSortedBackends = function () {
            var t = this;
            if (0 === Object.keys(this.registryFactory).length)
              throw new Error("No backend found in registry.");
            return Object.keys(this.registryFactory).sort(function (e, n) {
              return (
                t.registryFactory[n].priority - t.registryFactory[e].priority
              );
            });
          }),
          (t.prototype.initializeBackendsAndReturnBest = function () {
            for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
              var n = t[e],
                r = this.initializeBackend(n),
                i = r.success,
                a = r.asyncInit;
              if (a || i) return { name: n, asyncInit: a };
            }
            throw new Error(
              "Could not initialize any backends, all backend initializations failed.",
            );
          }),
          (t.prototype.moveData = function (t, e) {
            var n = this.state.tensorInfo.get(e),
              r = n.backend,
              i = this.readSync(e),
              a = r.refCount(e);
            r.disposeData(e, !0),
              (n.backend = t),
              t.move(e, i, n.shape, n.dtype, a),
              this.shouldCheckForMemLeaks() &&
                this.state.numDataMovesStack[
                  this.state.numDataMovesStack.length - 1
                ]++;
          }),
          (t.prototype.tidy = function (t, e) {
            var n,
              r = this,
              i = null;
            if (null == e) {
              if ("function" != typeof t)
                throw new Error("Please provide a function to tidy()");
              e = t;
            } else {
              if ("string" != typeof t && !(t instanceof String))
                throw new Error(
                  "When calling with two arguments, the first argument to tidy() must be a string",
                );
              if ("function" != typeof e)
                throw new Error(
                  "When calling with two arguments, the 2nd argument to tidy() must be a function",
                );
              i = t;
            }
            return this.scopedRun(
              function () {
                return r.startScope(i);
              },
              function () {
                return r.endScope(n);
              },
              function () {
                return (
                  (n = e()) instanceof Promise &&
                    console.error("Cannot return a Promise inside of tidy."),
                  n
                );
              },
            );
          }),
          (t.prototype.scopedRun = function (t, e, n) {
            t();
            try {
              var r = n();
              return e(), r;
            } catch (t) {
              throw (e(), t);
            }
          }),
          (t.prototype.nextTensorId = function () {
            return t.nextTensorId++;
          }),
          (t.prototype.nextVariableId = function () {
            return t.nextVariableId++;
          }),
          (t.prototype.clone = function (t) {
            var e = Vr.runKernel(_e, { x: t }),
              n = { x: t };
            return (
              this.addTapeNode(
                this.state.activeScope.name,
                n,
                [e],
                function (t) {
                  return {
                    x: function () {
                      var e = { x: t },
                        n = { dtype: "float32" };
                      return Vr.runKernel(we, e, n);
                    },
                  };
                },
                [],
                {},
              ),
              e
            );
          }),
          (t.prototype.runKernel = function (t, e, n) {
            if (
              (null == this.backendName && this.backend,
              !(null != Dn(t, this.backendName)))
            )
              throw new Error(
                "Kernel '"
                  .concat(t, "' not registered for backend '")
                  .concat(this.backendName, "'"),
              );
            return this.runKernelFunc({ kernelName: t, inputs: e, attrs: n });
          }),
          (t.prototype.shouldCheckForMemLeaks = function () {
            return this.ENV.getBool("IS_TEST");
          }),
          (t.prototype.checkKernelForMemLeak = function (t, e, n) {
            var r = this.backend.numDataIds(),
              i = 0;
            n.forEach(function (t) {
              i += "complex64" === t.dtype ? 3 : 1;
            });
            var a =
                this.state.numDataMovesStack[
                  this.state.numDataMovesStack.length - 1
                ],
              o = r - e - i - a;
            if (o > 0)
              throw new Error(
                "Backend '".concat(
                  this.backendName,
                  "' has an internal memory leak ",
                ) + "(".concat(o, " data ids) after running '").concat(t, "'"),
              );
          }),
          (t.prototype.runKernelFunc = function (t) {
            var e,
              n,
              r,
              i = this,
              a = [],
              o = this.isTapeOn(),
              s = this.state.numBytes,
              u = this.state.numTensors;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0),
              null == this.backendName && this.backend;
            var l = jr(t)
              ? t.kernelName
              : null != this.state.activeScope
                ? this.state.activeScope.name
                : "";
            if (jr(t)) {
              var c = t.kernelName,
                h = t.inputs,
                p = t.attrs;
              null == this.backendName && this.backend;
              var f = Dn(c, this.backendName);
              nn(null != f, function () {
                return "Cannot find registered kernel '"
                  .concat(c, "' for backend '")
                  .concat(i.backendName, "'");
              }),
                (n = function () {
                  var t = i.backend.numDataIds();
                  r = f.kernelFunc({ inputs: h, attrs: p, backend: i.backend });
                  var e = Array.isArray(r) ? r : [r];
                  i.shouldCheckForMemLeaks() && i.checkKernelForMemLeak(c, t, e);
                  var n = e.map(function (t) {
                    return null != t.rank ? t : i.makeTensorFromTensorInfo(t);
                  });
                  if (o) {
                    var s = i.getTensorsForGradient(c, h, n);
                    a = i.saveTensorsForBackwardMode(s);
                  }
                  return n;
                });
            } else {
              var d = t.forwardFunc,
                g = function (t) {
                  o &&
                    (a = t.map(function (t) {
                      return i.keep(i.clone(t));
                    }));
                };
              n = function () {
                var t = i.backend.numDataIds();
                r = i.tidy(function () {
                  return d(i.backend, g);
                });
                var e = Array.isArray(r) ? r : [r];
                return (
                  i.shouldCheckForMemLeaks() && i.checkKernelForMemLeak(l, t, e),
                  e
                );
              };
            }
            var v,
              y = t.inputs,
              m = t.attrs,
              b = jr(t) ? null : t.backwardsFunc;
            return (
              this.scopedRun(
                function () {
                  return i.state.kernelDepth++;
                },
                function () {
                  return i.state.kernelDepth--;
                },
                function () {
                  i.ENV.getBool("DEBUG") || i.state.profiling
                    ? ((v = i.profiler.profileKernel(l, y, function () {
                        return n();
                      })),
                      i.ENV.getBool("DEBUG") && i.profiler.logKernelProfile(v),
                      (e = v.outputs))
                    : (e = n());
                },
              ),
              o && this.addTapeNode(l, y, e, b, a, m),
              this.state.profiling &&
                this.state.activeProfile.kernels.push({
                  name: l,
                  bytesAdded: this.state.numBytes - s,
                  totalBytesSnapshot: this.state.numBytes,
                  tensorsAdded: this.state.numTensors - u,
                  totalTensorsSnapshot: this.state.numTensors,
                  inputShapes: Object.keys(y).map(function (t) {
                    return null != y[t] ? y[t].shape : null;
                  }),
                  outputShapes: e.map(function (t) {
                    return t.shape;
                  }),
                  kernelTimeMs: v.timeMs,
                  extraInfo: v.extraInfo,
                }),
              Array.isArray(r) ? e : e[0]
            );
          }),
          (t.prototype.saveTensorsForBackwardMode = function (t) {
            var e = this;
            return t.map(function (t) {
              return e.keep(e.clone(t));
            });
          }),
          (t.prototype.getTensorsForGradient = function (t, e, n) {
            var r = _n(t);
            if (null != r) {
              var i = r.inputsToSave || [],
                a = r.outputsToSave || [],
                o = void 0;
              r.saveAllInputs
                ? (nn(Array.isArray(e), function () {
                    return "saveAllInputs is true, expected inputs to be an array.";
                  }),
                  (o = Object.keys(e).map(function (t) {
                    return e[t];
                  })))
                : (o = i.map(function (t) {
                    return e[t];
                  }));
              var s = n.filter(function (t, e) {
                return a[e];
              });
              return o.concat(s);
            }
            return [];
          }),
          (t.prototype.makeTensor = function (t, e, n, r) {
            if (null == t)
              throw new Error("Values passed to engine.makeTensor() are null");
            (n = n || "float32"), (r = r || this.backend);
            var i = t;
            "string" === n &&
              cn(t[0]) &&
              (i = t.map(function (t) {
                return (
                  (e = t),
                  void 0 === n && (n = "utf-8"),
                  (n = n || "utf-8"),
                  Nn().platform.encode(e, n)
                );
                var e, n;
              }));
            var a = r.write(i, e, n),
              o = new Ar(e, n, a, this.nextTensorId());
            if ((this.trackTensor(o, r), "string" === n)) {
              var s = this.state.tensorInfo.get(a),
                u = (function (t) {
                  if (null == t) return 0;
                  var e = 0;
                  return (
                    t.forEach(function (t) {
                      return (e += t.length);
                    }),
                    e
                  );
                })(i);
              (this.state.numBytes += u - s.bytes), (s.bytes = u);
            }
            return o;
          }),
          (t.prototype.makeTensorFromDataId = function (t, e, n, r) {
            var i = { dataId: t, shape: e, dtype: (n = n || "float32") };
            return this.makeTensorFromTensorInfo(i, r);
          }),
          (t.prototype.makeTensorFromTensorInfo = function (t, e) {
            var n = t.dataId,
              r = t.shape,
              i = t.dtype,
              a = new Ar(r, i, n, this.nextTensorId());
            return this.trackTensor(a, e), a;
          }),
          (t.prototype.makeVariable = function (t, e, n, r) {
            void 0 === e && (e = !0),
              (n = n || this.nextVariableId().toString()),
              null != r && r !== t.dtype && (t = t.cast(r));
            var i = new _r(t, e, n, this.nextTensorId());
            if (null != this.state.registeredVariables[i.name])
              throw new Error(
                "Variable with name ".concat(i.name, " was already registered"),
              );
            return (
              (this.state.registeredVariables[i.name] = i),
              this.incRef(i, this.backend),
              i
            );
          }),
          (t.prototype.trackTensor = function (t, e) {
            this.state.numTensors++,
              "string" === t.dtype && this.state.numStringTensors++;
            var n = 0;
            "complex64" !== t.dtype &&
              "string" !== t.dtype &&
              (n = t.size * ln(t.dtype)),
              (this.state.numBytes += n),
              this.state.tensorInfo.has(t.dataId) ||
                (this.state.numDataBuffers++,
                this.state.tensorInfo.set(t.dataId, {
                  backend: e || this.backend,
                  dtype: t.dtype,
                  shape: t.shape,
                  bytes: n,
                })),
              t instanceof _r || this.track(t);
          }),
          (t.prototype.incRef = function (t, e) {
            this.trackTensor(t, e), this.backend.incRef(t.dataId);
          }),
          (t.prototype.removeDataId = function (t, e) {
            this.state.tensorInfo.has(t) &&
              this.state.tensorInfo.get(t).backend === e &&
              (this.state.tensorInfo.delete(t), this.state.numDataBuffers--);
          }),
          (t.prototype.disposeTensor = function (t) {
            if (this.state.tensorInfo.has(t.dataId)) {
              var e = this.state.tensorInfo.get(t.dataId);
              if (
                (this.state.numTensors--,
                "string" === t.dtype &&
                  (this.state.numStringTensors--,
                  (this.state.numBytes -= e.bytes)),
                "complex64" !== t.dtype && "string" !== t.dtype)
              ) {
                var n = t.size * ln(t.dtype);
                this.state.numBytes -= n;
              }
              e.backend.disposeData(t.dataId) &&
                this.removeDataId(t.dataId, e.backend);
            }
          }),
          (t.prototype.disposeVariables = function () {
            for (var t in this.state.registeredVariables) {
              var e = this.state.registeredVariables[t];
              this.disposeVariable(e);
            }
          }),
          (t.prototype.disposeVariable = function (t) {
            this.disposeTensor(t),
              null != this.state.registeredVariables[t.name] &&
                delete this.state.registeredVariables[t.name];
          }),
          (t.prototype.memory = function () {
            var t = this.backend.memory();
            return (
              (t.numTensors = this.state.numTensors),
              (t.numDataBuffers = this.state.numDataBuffers),
              (t.numBytes = this.state.numBytes),
              this.state.numStringTensors > 0 &&
                ((t.unreliable = !0),
                null == t.reasons && (t.reasons = []),
                t.reasons.push(
                  "Memory usage by string tensors is approximate (2 bytes per character)",
                )),
              t
            );
          }),
          (t.prototype.profile = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n, r, i, a, o, s, p, f, d, g;
              return u(this, function (u) {
                switch (u.label) {
                  case 0:
                    return (
                      (this.state.profiling = !0),
                      (e = this.state.numBytes),
                      (n = this.state.numTensors),
                      (this.state.activeProfile.kernels = []),
                      (r = this.state.activeProfile),
                      [4, t()]
                    );
                  case 1:
                    (r.result = u.sent()),
                      (this.state.profiling = !1),
                      (this.state.activeProfile.peakBytes = Math.max.apply(
                        Math,
                        h(
                          [],
                          c(
                            this.state.activeProfile.kernels.map(function (t) {
                              return t.totalBytesSnapshot;
                            }),
                          ),
                          !1,
                        ),
                      )),
                      (this.state.activeProfile.newBytes =
                        this.state.numBytes - e),
                      (this.state.activeProfile.newTensors =
                        this.state.numTensors - n),
                      (u.label = 2);
                  case 2:
                    u.trys.push([2, 8, 9, 10]),
                      (i = l(this.state.activeProfile.kernels)),
                      (a = i.next()),
                      (u.label = 3);
                  case 3:
                    return a.done
                      ? [3, 7]
                      : ((o = a.value), (s = o), [4, o.kernelTimeMs]);
                  case 4:
                    return (s.kernelTimeMs = u.sent()), (p = o), [4, o.extraInfo];
                  case 5:
                    (p.extraInfo = u.sent()), (u.label = 6);
                  case 6:
                    return (a = i.next()), [3, 3];
                  case 7:
                    return [3, 10];
                  case 8:
                    return (f = u.sent()), (d = { error: f }), [3, 10];
                  case 9:
                    try {
                      a && !a.done && (g = i.return) && g.call(i);
                    } finally {
                      if (d) throw d.error;
                    }
                    return [7];
                  case 10:
                    return [2, this.state.activeProfile];
                }
              });
            });
          }),
          (t.prototype.isTapeOn = function () {
            return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth;
          }),
          (t.prototype.addTapeNode = function (t, e, n, r, i, a) {
            var o = this,
              s = {
                id: this.state.nextTapeNodeId++,
                kernelName: t,
                inputs: e,
                outputs: n,
                saved: i,
              },
              u = _n(t);
            null != u && (r = u.gradFunc),
              null != r &&
                (s.gradient = function (t) {
                  return (
                    (t = t.map(function (t, e) {
                      if (null == t) {
                        var r = n[e],
                          i = yn(r.size, r.dtype);
                        return o.makeTensor(i, r.shape, r.dtype);
                      }
                      return t;
                    })),
                    r(t.length > 1 ? t : t[0], i, a)
                  );
                }),
              this.state.activeTape.push(s);
          }),
          (t.prototype.keep = function (t) {
            return (t.kept = !0), t;
          }),
          (t.prototype.startTape = function () {
            0 === this.state.gradientDepth && (this.state.activeTape = []),
              this.state.gradientDepth++;
          }),
          (t.prototype.endTape = function () {
            this.state.gradientDepth--;
          }),
          (t.prototype.startScope = function (t) {
            var e = {
              track: [],
              name: "unnamed scope",
              id: this.state.nextScopeId++,
            };
            t && (e.name = t),
              this.state.scopeStack.push(e),
              (this.state.activeScope = e);
          }),
          (t.prototype.endScope = function (t) {
            for (
              var e = this,
                n = Br(t),
                r = new Set(
                  n.map(function (t) {
                    return t.id;
                  }),
                ),
                i = 0;
              i < this.state.activeScope.track.length;
              i++
            ) {
              var a = this.state.activeScope.track[i];
              a.kept || r.has(a.id) || a.dispose();
            }
            var o = this.state.scopeStack.pop();
            (this.state.activeScope =
              0 === this.state.scopeStack.length
                ? null
                : this.state.scopeStack[this.state.scopeStack.length - 1]),
              n.forEach(function (t) {
                t.kept || t.scopeId !== o.id || e.track(t);
              });
          }),
          (t.prototype.gradients = function (t, e, n, r) {
            var i = this;
            if (
              (void 0 === r && (r = !1),
              nn(e.length > 0, function () {
                return "gradients() received an empty list of xs.";
              }),
              null != n && "float32" !== n.dtype)
            )
              throw new Error(
                "dy must have 'float32' dtype, but has '".concat(n.dtype, "'"),
              );
            var a = this.scopedRun(
              function () {
                return i.startTape();
              },
              function () {
                return i.endTape();
              },
              function () {
                return i.tidy("forward", t);
              },
            );
            nn(a instanceof Ar, function () {
              return "The result y returned by f() must be a tensor.";
            });
            var o = (function (t, e, n) {
              for (var r = {}, i = {}, a = 0; a < e.length; a++) r[e[a].id] = !0;
              for (a = 0; a < t.length; a++) {
                var o = (d = t[a]).inputs;
                for (var s in o) {
                  for (var u = o[s], l = !1, c = 0; c < e.length; c++)
                    if (r[u.id]) {
                      d.outputs.forEach(function (t) {
                        return (r[t.id] = !0);
                      }),
                        (l = !0),
                        (i[d.id] = !0);
                      break;
                    }
                  if (l) break;
                }
              }
              var h = {};
              h[n.id] = !0;
              var p = {};
              for (a = t.length - 1; a >= 0; a--)
                for (o = (d = t[a]).inputs, c = 0; c < d.outputs.length; c++)
                  if (h[d.outputs[c].id]) {
                    for (var s in o) (h[o[s].id] = !0), (p[d.id] = !0);
                    break;
                  }
              var f = [];
              for (a = 0; a < t.length; a++) {
                var d;
                if (i[(d = t[a]).id] && p[d.id]) {
                  var g = {};
                  for (var s in d.inputs) {
                    var v = d.inputs[s];
                    r[v.id] && (g[s] = v);
                  }
                  var y = Object.assign({}, d);
                  (y.inputs = g), (y.outputs = d.outputs), f.push(y);
                }
              }
              return f;
            })(this.state.activeTape, e, a);
            if (!r && 0 === o.length && e.length > 0)
              throw new Error(
                "Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.",
              );
            return this.tidy("backward", function () {
              var t,
                r,
                s = {};
              (s[a.id] =
                null == n
                  ? ((t = a.shape),
                    (r = vn(rn(t), "float32")),
                    Vr.makeTensor(r, t, "float32"))
                  : n),
                (function (t, e, n, r) {
                  for (
                    var i = function (i) {
                        var a = e[i],
                          o = [];
                        if (
                          (a.outputs.forEach(function (e) {
                            var n = t[e.id];
                            null != n ? o.push(n) : o.push(null);
                          }),
                          null == a.gradient)
                        )
                          throw new Error(
                            "Cannot compute gradient: gradient function not found " +
                              "for ".concat(a.kernelName, "."),
                          );
                        var s = a.gradient(o),
                          u = function (e) {
                            if (!(e in s))
                              throw new Error(
                                "Cannot backprop through input ".concat(e, ". ") +
                                  "Available gradients found: ".concat(
                                    Object.keys(s),
                                    ".",
                                  ),
                              );
                            var i = n(function () {
                              return s[e]();
                            });
                            if ("float32" !== i.dtype)
                              throw new Error(
                                "Error in gradient for op ".concat(
                                  a.kernelName,
                                  ". The gradient of input ",
                                ) +
                                  ""
                                    .concat(
                                      e,
                                      " must have 'float32' dtype, but has '",
                                    )
                                    .concat(i.dtype, "'"),
                              );
                            var o = a.inputs[e];
                            if (!an(i.shape, o.shape))
                              throw new Error(
                                "Error in gradient for op ".concat(
                                  a.kernelName,
                                  ". The gradient of input ",
                                ) +
                                  "'"
                                    .concat(e, "' has shape '")
                                    .concat(i.shape, "', which does not match ") +
                                  "the shape of the input '".concat(o.shape, "'"),
                              );
                            if (null == t[o.id]) t[o.id] = i;
                            else {
                              var u = t[o.id];
                              (t[o.id] = r(u, i)), u.dispose();
                            }
                          };
                        for (var l in a.inputs) u(l);
                      },
                      a = e.length - 1;
                    a >= 0;
                    a--
                  )
                    i(a);
                })(
                  s,
                  o,
                  function (t) {
                    return i.tidy(t);
                  },
                  qr,
                );
              var u = e.map(function (t) {
                return s[t.id];
              });
              return (
                0 === i.state.gradientDepth &&
                  (i.state.activeTape.forEach(function (t) {
                    var e, n;
                    try {
                      for (
                        var r = l(t.saved), i = r.next();
                        !i.done;
                        i = r.next()
                      ) {
                        i.value.dispose();
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        i && !i.done && (n = r.return) && n.call(r);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  }),
                  (i.state.activeTape = null)),
                { value: a, grads: u }
              );
            });
          }),
          (t.prototype.customGrad = function (t) {
            var e = this;
            return (
              nn(pn(t), function () {
                return "The f passed in customGrad(f) must be a function.";
              }),
              function () {
                for (var n, r = [], i = 0; i < arguments.length; i++)
                  r[i] = arguments[i];
                nn(
                  r.every(function (t) {
                    return t instanceof Ar;
                  }),
                  function () {
                    return "The args passed in customGrad(f)(x1, x2,...) must all be tensors";
                  },
                );
                var a = {};
                r.forEach(function (t, e) {
                  a[e] = t;
                });
                var o = function (e, i) {
                    return (
                      nn(
                        (n = t.apply(
                          void 0,
                          h([], c(h(h([], c(r), !1), [i], !1)), !1),
                        )).value instanceof Ar,
                        function () {
                          return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor";
                        },
                      ),
                      nn(pn(n.gradFunc), function () {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.";
                      }),
                      n.value
                    );
                  },
                  s = function (t, e) {
                    var i = n.gradFunc(t, e),
                      a = Array.isArray(i) ? i : [i];
                    nn(a.length === r.length, function () {
                      return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).";
                    }),
                      nn(
                        a.every(function (t) {
                          return t instanceof Ar;
                        }),
                        function () {
                          return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.";
                        },
                      );
                    var o = {};
                    return (
                      a.forEach(function (t, e) {
                        o[e] = function () {
                          return t;
                        };
                      }),
                      o
                    );
                  };
                return e.runKernelFunc({
                  forwardFunc: o,
                  backwardsFunc: s,
                  inputs: a,
                });
              }
            );
          }),
          (t.prototype.readSync = function (t) {
            return this.state.tensorInfo.get(t).backend.readSync(t);
          }),
          (t.prototype.read = function (t) {
            return this.state.tensorInfo.get(t).backend.read(t);
          }),
          (t.prototype.readToGPU = function (t, e) {
            return this.state.tensorInfo.get(t).backend.readToGPU(t, e);
          }),
          (t.prototype.time = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (e = fr()), [4, this.backend.time(t)];
                  case 1:
                    return ((n = r.sent()).wallMs = fr() - e), [2, n];
                }
              });
            });
          }),
          (t.prototype.track = function (t) {
            return (
              null != this.state.activeScope &&
                ((t.scopeId = this.state.activeScope.id),
                this.state.activeScope.track.push(t)),
              t
            );
          }),
          Object.defineProperty(t.prototype, "registeredVariables", {
            get: function () {
              return this.state.registeredVariables;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.reset = function () {
            for (var t in (this.pendingBackendInitId++,
            this.state.dispose(),
            this.ENV.reset(),
            (this.state = new Ur()),
            this.registry))
              this.disposeRegisteredKernels(t),
                this.registry[t].dispose(),
                delete this.registry[t];
            (this.backendName = null),
              (this.backendInstance = null),
              (this.pendingBackendInit = null);
          }),
          t
        );
      })();
    (Wr.nextTensorId = 0), (Wr.nextVariableId = 0);
    var Vr = (function () {
      var t = zn();
      if (null == t._tfengine) {
        var e = new kn(t);
        t._tfengine = new Wr(e);
      }
      return (
        (function (t) {
          An = t;
        })(t._tfengine.ENV),
        (Nr = function () {
          return t._tfengine;
        }),
        t._tfengine
      );
    })();
    function qr(t, e) {
      var n = { a: t, b: e };
      return Vr.runKernel(ye, n);
    }
    function Gr(t, e) {
      var n = t;
      if (gr(t)) return "string" === e ? [] : [t.length];
      if (Rr(t)) {
        var r = t.channels || "RGBA";
        return [t.height, t.width * r.length];
      }
      if (Or(t)) return [t.buffer.size / (null == e ? 4 : ln(e))];
      if (!Array.isArray(t)) return [];
      for (var i = []; Array.isArray(n) || (gr(n) && "string" !== e); )
        i.push(n.length), (n = n[0]);
      return (
        Array.isArray(t) &&
          Nn().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") &&
          Kr(t, i, []),
        i
      );
    }
    function Kr(t, e, n) {
      if (((n = n || []), Array.isArray(t) || gr(t))) {
        nn(e.length > 0, function () {
          return (
            "Element arr[".concat(n.join("]["), "] should be a primitive, ") +
            "but is an array of ".concat(t.length, " elements")
          );
        }),
          nn(t.length === e[0], function () {
            return (
              "Element arr["
                .concat(n.join("]["), "] should have ")
                .concat(e[0], " ") +
              "elements, but has ".concat(t.length, " elements")
            );
          });
        for (var r = e.slice(1), i = 0; i < t.length; ++i)
          Kr(t[i], r, n.concat(i));
      } else
        nn(0 === e.length, function () {
          return (
            "Element arr[".concat(n.join("]["), "] is a primitive, ") +
            "but should be an array/TypedArray of ".concat(e[0], " elements")
          );
        });
    }
    function Hr(t, e, n, r) {
      if ("string_or_numeric" !== t) {
        if (null == t) throw new Error("Expected dtype cannot be null.");
        if (("numeric" !== t && t !== e) || ("numeric" === t && "string" === e))
          throw new Error(
            "Argument '".concat(n, "' passed to '").concat(r, "' must ") +
              "be ".concat(t, " tensor, but got ").concat(e, " tensor"),
          );
      }
    }
    function Jr(t, e, n, r) {
      if ((void 0 === r && (r = "numeric"), t instanceof zr()))
        return Hr(r, t.dtype, e, n), t;
      var i = hn(t);
      if (
        ("string" !== i &&
          ["bool", "int32", "float32"].indexOf(r) >= 0 &&
          (i = r),
        Hr(r, i, e, n),
        null == t ||
          (!gr(t) &&
            !Array.isArray(t) &&
            "number" != typeof t &&
            "boolean" != typeof t &&
            "string" != typeof t))
      ) {
        var a = null == t ? "null" : t.constructor.name;
        throw new Error(
          "Argument '".concat(e, "' passed to '").concat(n, "' must be a ") +
            "Tensor or TensorLike, but got '".concat(a, "'"),
        );
      }
      var o = Gr(t, i);
      gr(t) || Array.isArray(t) || (t = [t]);
      var s = "string" !== i ? pr(t, i) : vr(t, [], !0);
      return Vr.makeTensor(s, o, i);
    }
    function Zr(t, e, n, r) {
      if ((void 0 === r && (r = "numeric"), !Array.isArray(t)))
        throw new Error(
          "Argument ".concat(e, " passed to ").concat(n, " must be a ") +
            "`Tensor[]` or `TensorLike[]`",
        );
      return t.map(function (t, i) {
        return Jr(t, "".concat(e, "[").concat(i, "]"), n, r);
      });
    }
    function Yr(t) {
      var e = Object.keys(t);
      if (1 !== e.length)
        throw new Error(
          "Please provide an object with a single key (operation name) mapping to a function. Got an object with " +
            "".concat(e.length, " keys."),
        );
      var n = e[0],
        r = t[n];
      n.endsWith("_") && (n = n.substring(0, n.length - 1)), (n += "__op");
      var i = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        Vr.startScope(n);
        try {
          var i = r.apply(void 0, h([], c(t), !1));
          return (
            bn(i) && console.error("Cannot return a Promise inside of tidy."),
            Vr.endScope(i),
            i
          );
        } catch (t) {
          throw (Vr.endScope(null), t);
        }
      };
      return Object.defineProperty(i, "name", { value: n, configurable: !0 }), i;
    }
    var Xr = Yr({
      cast_: function (t, e) {
        var n = Jr(t, "x", "cast");
        if (
          !(function (t) {
            return (
              "bool" === t ||
              "complex64" === t ||
              "float32" === t ||
              "int32" === t ||
              "string" === t
            );
          })(e)
        )
          throw new Error("Failed to cast to unknown dtype ".concat(e));
        if (
          ("string" === e && "string" !== n.dtype) ||
          ("string" !== e && "string" === n.dtype)
        )
          throw new Error("Only strings can be casted to strings");
        var r = { x: n },
          i = { dtype: e };
        return Vr.runKernel(we, r, i);
      },
    });
    var $r = Yr({
      mul_: function (t, e) {
        var n,
          r = Jr(t, "a", "mul"),
          i = Jr(e, "b", "mul"),
          a = { a: (r = (n = c(Mr(r, i), 2))[0]), b: (i = n[1]) };
        return Vr.runKernel(Re, a);
      },
    });
    var Qr = Yr({
        step_: function (t, e) {
          void 0 === e && (e = 0);
          var n = { x: Jr(t, "x", "step") },
            r = { alpha: e };
          return Vr.runKernel(Qe, n, r);
        },
      }),
      ti = {
        kernelName: "Abs",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return $r(t, Qr(Xr(n, "float32"), -1));
            },
          };
        },
      };
    var ei = Yr({
      floorDiv_: function (t, e) {
        var n,
          r = Jr(t, "a", "floorDiv"),
          i = Jr(e, "b", "floorDiv"),
          a = { a: (r = (n = c(Mr(r, i), 2))[0]), b: (i = n[1]) };
        return Vr.runKernel(Ce, a);
      },
    });
    var ni = Yr({
      div_: function (t, e) {
        var n,
          r = Jr(t, "a", "div"),
          i = Jr(e, "b", "div");
        if (
          ((r = (n = c(Mr(r, i), 2))[0]),
          (i = n[1]),
          "int32" === r.dtype && "int32" === i.dtype)
        )
          return ei(r, i);
        var a = { a: r, b: i };
        return Vr.runKernel(ze, a, {});
      },
    });
    var ri = Yr({
      neg_: function (t) {
        var e = { x: Jr(t, "x", "neg") };
        return Vr.runKernel("Neg", e);
      },
    });
    function ii(t, e) {
      if (((gr(t) && "string" !== e) || Array.isArray(t)) && "complex64" !== e)
        throw new Error(
          "Error creating a new Scalar: value must be a primitive (number|boolean|string)",
        );
      if ("string" === e && gr(t) && !(t instanceof Uint8Array))
        throw new Error(
          "When making a scalar from encoded string, the value must be `Uint8Array`.",
        );
      return (function (t, e, n, r) {
        if (null == r) r = hn(t);
        else if ("complex64" === r)
          throw new Error(
            "Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).",
          );
        if (Or(t) || Rr(t)) {
          if ("float32" !== r && "int32" !== r)
            throw new Error(
              "Creating tensor from GPU data only supports " +
                "'float32'|'int32' dtype, while the dtype is ".concat(r, "."),
            );
          return Vr.backend.createTensorFromGPUData(t, e || n, r);
        }
        if (
          !gr(t) &&
          !Array.isArray(t) &&
          "number" != typeof t &&
          "boolean" != typeof t &&
          "string" != typeof t
        )
          throw new Error(
            "values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray",
          );
        if (null != e) {
          mn(e);
          var i = rn(e),
            a = rn(n);
          nn(i === a, function () {
            return (
              "Based on the provided shape, [".concat(
                e,
                "], the tensor should have ",
              ) + "".concat(i, " values but has ").concat(a)
            );
          });
          for (var o = 0; o < n.length; ++o) {
            var s = n[o],
              u = o !== n.length - 1 || s !== rn(e.slice(o));
            nn(n[o] === e[o] || !u, function () {
              return (
                "Error creating a new Tensor. Inferred shape " +
                "(".concat(n, ") does not match the provided ") +
                "shape (".concat(e, "). ")
              );
            });
          }
        }
        return (
          gr(t) || Array.isArray(t) || (t = [t]),
          (e = e || n),
          (t = "string" !== r ? pr(t, r) : vr(t, [], !0)),
          Vr.makeTensor(t, e, r)
        );
      })(t, [], [], e);
    }
    var ai = Yr({
      sqrt_: function (t) {
        var e = { x: Jr(t, "x", "sqrt", "float32") };
        return Vr.runKernel(Ge, e);
      },
    });
    var oi = Yr({
      square_: function (t) {
        var e = Jr(t, "x", "square");
        return Vr.runKernel("Square", { x: e }, {});
      },
    });
    var si = Yr({
        sub_: function (t, e) {
          var n,
            r = Jr(t, "a", "sub"),
            i = Jr(e, "b", "sub"),
            a = { a: (r = (n = c(Mr(r, i), 2))[0]), b: (i = n[1]) };
          return Vr.runKernel("Sub", a);
        },
      }),
      ui = {
        kernelName: "Acos",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              var e = oi(Xr(n, "float32")),
                r = ai(si(ii(1), e));
              return ri(ni(t, r));
            },
          };
        },
      },
      li = {
        kernelName: "Acosh",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              var e = ai(si(oi(Xr(n, "float32")), 1));
              return ni(t, e);
            },
          };
        },
      };
    function ci(t, e) {
      for (var n = [], r = 0; r < e.length; r++) {
        var i = t[t.length - r - 1],
          a = e.length - r - 1,
          o = e[a];
        (null == i || (1 === i && o > 1)) && n.unshift(a);
      }
      return n;
    }
    function hi(t, e) {
      for (
        var n = Math.max(t.length, e.length), r = new Array(n), i = 0;
        i < n;
        i++
      ) {
        var a = t[t.length - i - 1];
        null == a && (a = 1);
        var o = e[e.length - i - 1];
        if ((null == o && (o = 1), 1 === a)) r[n - i - 1] = o;
        else if (1 === o) r[n - i - 1] = a;
        else {
          if (a !== o) {
            var s =
              "Operands could not be broadcast together with shapes " +
              "".concat(t, " and ").concat(e, ".");
            throw Error(s);
          }
          r[n - i - 1] = a;
        }
      }
      return r;
    }
    var pi = Yr({
      reshape_: function (t, e) {
        var n = { x: Jr(t, "x", "reshape", "string_or_numeric") },
          r = { shape: e };
        return Vr.runKernel(Be, n, r);
      },
    });
    var fi = Yr({
        sum_: function (t, e, n) {
          void 0 === e && (e = null), void 0 === n && (n = !1);
          var r = Jr(t, "x", "sum");
          "bool" === r.dtype && (r = Xr(r, "int32"));
          var i = { x: r },
            a = { axis: e, keepDims: n };
          return Vr.runKernel("Sum", i, a);
        },
      }),
      di = {
        kernelName: ye,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = t,
                n = ci(r.shape, a);
              return n.length > 0 && (e = fi(e, n)), pi(e, r.shape);
            },
            b: function () {
              var e = t,
                n = ci(i.shape, a);
              return n.length > 0 && (e = fi(e, n)), pi(e, i.shape);
            },
          };
        },
      },
      gi = {
        kernelName: "AddN",
        saveAllInputs: !0,
        gradFunc: function (t, e) {
          var n = {};
          return (
            e.forEach(function (e, r) {
              n[r] = function () {
                return t.clone();
              };
            }),
            n
          );
        },
      };
    var vi = Yr({
        zerosLike_: function (t) {
          var e = { x: Jr(t, "x", "zerosLike") };
          return Vr.runKernel($e, e);
        },
      }),
      yi = {
        kernelName: "ArgMax",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return vi(n);
            },
          };
        },
      },
      mi = {
        kernelName: "ArgMin",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return vi(n);
            },
          };
        },
      },
      bi = {
        kernelName: "Asin",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return ni(t, ai(si(ii(1), oi(Xr(n, "float32")))));
            },
          };
        },
      };
    var wi = Yr({
        add_: function (t, e) {
          var n,
            r = Jr(t, "a", "add"),
            i = Jr(e, "b", "add"),
            a = { a: (r = (n = c(Mr(r, i), 2))[0]), b: (i = n[1]) };
          return Vr.runKernel(ye, a);
        },
      }),
      ki = {
        kernelName: "Asinh",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              var e = ai(wi(ii(1), oi(Xr(n, "float32"))));
              return ni(t, e);
            },
          };
        },
      },
      xi = {
        kernelName: "Atan2",
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = wi(oi(r), oi(i)),
                n = $r(t, ni(i, e)),
                o = ci(r.shape, a);
              return o.length > 0 && (n = fi(n, o)), pi(n, r.shape);
            },
            b: function () {
              var e = wi(oi(r), oi(i)),
                n = ri($r(t, ni(r, e))),
                o = ci(i.shape, a);
              return o.length > 0 && (n = fi(n, o)), pi(n, i.shape);
            },
          };
        },
      },
      Si = {
        kernelName: "Atan",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return ni(t, wi(oi(Xr(n, "float32")), 1));
            },
          };
        },
      },
      Ni = {
        kernelName: "Atanh",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return ni(t, si(ii(1), oi(Xr(n, "float32"))));
            },
          };
        },
      };
    function Ii(t) {
      return "number" == typeof t
        ? [t, t, t]
        : 2 === t.length
          ? [t[0], t[1], 1]
          : t;
    }
    function Ai(t) {
      var e = c(Ii(t), 3),
        n = e[0],
        r = e[1],
        i = e[2];
      return 1 === n && 1 === r && 1 === i;
    }
    function zi(t, e) {
      return Ai(t) || Ai(e);
    }
    function Ei(t) {
      return Ii(t).every(function (t) {
        return t > 0;
      });
    }
    function Ti(t, e, n) {
      if (null != n) {
        if ("string" == typeof e)
          throw Error(
            "Error in ".concat(t, ": pad must be an integer when using ") +
              "dimRoundingMode ".concat(n, " but got pad ").concat(e, "."),
          );
        if ("number" == typeof e)
          nn(on(e), function () {
            return (
              "Error in ".concat(t, ": pad must be an integer when using ") +
              "dimRoundingMode ".concat(n, " but got pad ").concat(e, ".")
            );
          });
        else {
          if ("object" != typeof e)
            throw Error(
              "Error in ".concat(t, ": Unknown padding parameter: ").concat(e),
            );
          e.forEach(function (e) {
            e.forEach(function (e) {
              nn(on(e), function () {
                return (
                  "Error in ".concat(t, ": pad must be an integer when using ") +
                  "dimRoundingMode ".concat(n, " but got pad ").concat(e, ".")
                );
              });
            });
          });
        }
      }
    }
    var Ci = Yr({
        avgPool3dGrad_: function (t, e, n, r, i, a) {
          var o = Jr(t, "dy", "avgPool3dGrad"),
            s = Jr(e, "input", "avgPool3dGrad"),
            u = o,
            l = s,
            c = !1;
          4 === s.rank &&
            ((c = !0),
            (u = pi(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            (l = pi(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]]))),
            nn(5 === u.rank, function () {
              return (
                "Error in avgPool3dGrad: dy must be rank 5 but got rank " +
                "".concat(u.rank, ".")
              );
            }),
            nn(5 === l.rank, function () {
              return (
                "Error in avgPool3dGrad: input must be rank 5 but got rank " +
                "".concat(l.rank, ".")
              );
            }),
            Ti("avgPool3dGrad", i, a);
          var h = { dy: u, input: l },
            p = { filterSize: n, strides: r, pad: i, dimRoundingMode: a },
            f = Vr.runKernel("AvgPool3DGrad", h, p);
          return c ? pi(f, [f.shape[1], f.shape[2], f.shape[3], f.shape[4]]) : f;
        },
      }),
      Fi = {
        kernelName: "AvgPool3D",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.filterSize,
            a = n.strides,
            o = n.pad,
            s = n.dimRoundingMode;
          return {
            x: function () {
              return Ci(t, r, i, a, o, s);
            },
          };
        },
      };
    var Di = Yr({
        avgPoolGrad_: function (t, e, n, r, i) {
          var a = Jr(t, "dy", "avgPoolGrad"),
            o = Jr(e, "input", "avgPoolGrad");
          nn(o.rank === a.rank, function () {
            return "Rank of input ("
              .concat(o.rank, ") does not match rank of dy (")
              .concat(a.rank, ")");
          });
          var s = o,
            u = a,
            l = !1;
          3 === o.rank &&
            ((l = !0),
            (s = pi(o, [1, o.shape[0], o.shape[1], o.shape[2]])),
            (u = pi(a, [1, a.shape[0], a.shape[1], a.shape[2]]))),
            nn(4 === u.rank, function () {
              return (
                "Error in avgPoolGrad: dy must be rank 4 but got rank " +
                "".concat(u.rank, ".")
              );
            }),
            nn(4 === s.rank, function () {
              return (
                "Error in avgPoolGrad: input must be rank 4 but got rank " +
                "".concat(s.rank, ".")
              );
            });
          var c = { dy: u, input: s },
            h = { filterSize: n, strides: r, pad: i },
            p = Vr.runKernel("AvgPoolGrad", c, h);
          return l ? pi(p, [p.shape[1], p.shape[2], p.shape[3]]) : p;
        },
      }),
      _i = {
        kernelName: "AvgPool",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.filterSize,
            a = n.strides,
            o = n.pad;
          return {
            x: function () {
              return Di(t, r, i, a, o);
            },
          };
        },
      };
    var Li = Yr({
        matMul_: function (t, e, n, r) {
          var i;
          void 0 === n && (n = !1), void 0 === r && (r = !1);
          var a = Jr(t, "a", "matMul"),
            o = Jr(e, "b", "matMul"),
            s = { a: (a = (i = c(Mr(a, o), 2))[0]), b: (o = i[1]) },
            u = { transposeA: n, transposeB: r };
          return Vr.runKernel(me, s, u);
        },
      }),
      Ri = {
        kernelName: me,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.transposeA,
            s = n.transposeB;
          return o || s
            ? !o && s
              ? {
                  a: function () {
                    return Li(t, a, !1, !1);
                  },
                  b: function () {
                    return Li(t, i, !0, !1);
                  },
                }
              : o && !s
                ? {
                    a: function () {
                      return Li(a, t, !1, !0);
                    },
                    b: function () {
                      return Li(i, t, !1, !1);
                    },
                  }
                : {
                    a: function () {
                      return Li(a, t, !0, !0);
                    },
                    b: function () {
                      return Li(t, i, !0, !0);
                    },
                  }
            : {
                a: function () {
                  return Li(t, a, !1, !0);
                },
                b: function () {
                  return Li(i, t, !0, !1);
                },
              };
        },
      };
    var Oi = Yr({
        spaceToBatchND_: function (t, e, n) {
          var r = Jr(t, "x", "spaceToBatchND");
          nn(r.rank >= 1 + e.length, function () {
            return "input rank "
              .concat(r.rank, " should be > than [blockShape] ")
              .concat(e.length);
          }),
            nn(n.length === e.length, function () {
              return "paddings.shape[0] "
                .concat(n.length, " must be equal to [blockShape] ")
                .concat(e.length);
            }),
            nn(
              r.shape.reduce(function (t, r, i) {
                return i > 0 && i <= e.length
                  ? t && (r + n[i - 1][0] + n[i - 1][1]) % e[i - 1] == 0
                  : t;
              }, !0),
              function () {
                return "input spatial dimensions "
                  .concat(r.shape.slice(1), " with paddings ")
                  .concat(n.toString(), " must be divisible by blockShapes ")
                  .concat(e.toString());
              },
            );
          var i = { x: r },
            a = { blockShape: e, paddings: n };
          return Vr.runKernel(Ke, i, a);
        },
      }),
      Mi = {
        kernelName: be,
        gradFunc: function (t, e, n) {
          var r = n.blockShape,
            i = n.crops;
          return {
            x: function () {
              return Oi(t, r, i);
            },
          };
        },
      },
      Bi = {
        kernelName: "BroadcastTo",
        gradFunc: function (t, e, n) {
          for (
            var r = n,
              i = r.inputShape,
              a = r.shape,
              o = Array.from(a),
              s = i.length - 1;
            s >= 0;
            s--
          )
            if (i[s] === a[s]) o[s] = 1;
            else if (1 !== i[s])
              throw new Error(
                "broadcastTo(): ["
                  .concat(i, "] cannot be broadcast to [")
                  .concat(a, "]."),
              );
          var u = [];
          for (s = 0; s < o.length; s++) o[s] > 1 && u.push(s);
          return {
            x: function () {
              return fi(t, u, !0);
            },
          };
        },
      },
      Pi = {
        kernelName: we,
        gradFunc: function (t) {
          return {
            x: function () {
              return t.clone();
            },
          };
        },
      },
      ji = {
        kernelName: "Ceil",
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      };
    var Ui = Yr({
      greaterEqual_: function (t, e) {
        var n,
          r = Jr(t, "a", "greaterEqual", "string_or_numeric"),
          i = Jr(e, "b", "greaterEqual", "string_or_numeric");
        (r = (n = c(Mr(r, i), 2))[0]), (i = n[1]), hi(r.shape, i.shape);
        var a = { a: r, b: i };
        return Vr.runKernel(De, a);
      },
    });
    var Wi = Yr({
      lessEqual_: function (t, e) {
        var n,
          r = Jr(t, "a", "lessEqual", "string_or_numeric"),
          i = Jr(e, "b", "lessEqual", "string_or_numeric");
        (r = (n = c(Mr(r, i), 2))[0]), (i = n[1]), hi(r.shape, i.shape);
        var a = { a: r, b: i };
        return Vr.runKernel("LessEqual", a);
      },
    });
    var Vi = Yr({
      logicalAnd_: function (t, e) {
        var n = Jr(t, "a", "logicalAnd", "bool"),
          r = Jr(e, "b", "logicalAnd", "bool");
        hi(n.shape, r.shape);
        var i = { a: n, b: r };
        return Vr.runKernel("LogicalAnd", i);
      },
    });
    var qi = Yr({
      clone_: function (t) {
        var e = { x: Jr(t, "x", "clone", "string_or_numeric") };
        return Vr.runKernel(_e, e);
      },
    });
    var Gi = Yr({
      broadcastTo_: function (t, e) {
        var n = Jr(t, "broadcastTo", "x"),
          r = n.shape;
        if ((mn(e), e.length < n.rank))
          throw new Error(
            "broadcastTo(): shape.length="
              .concat(e.length, " < input.rank=")
              .concat(n.rank, "."),
          );
        if (e.length > n.rank) {
          for (var i = n.shape.slice(); i.length < e.length; ) i.unshift(1);
          n = pi(n, i);
        }
        for (var a = n.shape, o = Array.from(e), s = e.length - 1; s >= 0; s--)
          if (a[s] === e[s]) o[s] = 1;
          else if (1 !== n.shape[s])
            throw new Error(
              "broadcastTo(): ["
                .concat(r, "] cannot be broadcast to [")
                .concat(e, "]."),
            );
        var u = o
          .map(function (t, e) {
            return t > 1 ? e : -1;
          })
          .filter(function (t) {
            return t >= 0;
          });
        if (0 === u.length) return qi(n);
        var l = { x: n },
          c = { reps: o };
        return Vr.runKernel(Je, l, c);
      },
    });
    var Ki = Yr({
        where_: function (t, e, n) {
          var r = Jr(e, "a", "where"),
            i = Jr(n, "b", "where"),
            a = Jr(t, "condition", "where", "bool"),
            o = hi(hi(a.shape, r.shape), i.shape),
            s = { condition: Gi(a, o), t: Gi(r, o), e: Gi(i, o) };
          return Vr.runKernel(Ue, s);
        },
      }),
      Hi = {
        kernelName: "ClipByValue",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.clipValueMin,
            a = n.clipValueMax;
          return {
            x: function () {
              return Ki(Vi(Ui(r, i), Wi(r, a)), t, vi(t));
            },
          };
        },
      },
      Ji = { kernelName: ke, inputsToSave: ["x"], gradFunc: ti.gradFunc };
    var Zi = Yr({
        split_: function (t, e, n) {
          void 0 === n && (n = 0);
          var r = { x: Jr(t, "x", "split") },
            i = { numOrSizeSplits: e, axis: n };
          return Vr.runKernel(He, r, i);
        },
      }),
      Yi = {
        kernelName: xe,
        saveAllInputs: !0,
        gradFunc: function (t, e, n) {
          var r = e.map(function (t) {
              return t.shape;
            }),
            i = un(n.axis, e[0].shape)[0],
            a = r.map(function (t) {
              return t[i];
            });
          return Zi(t, a, i).map(function (t) {
            return function () {
              return t;
            };
          });
        },
      };
    var Xi = Yr({
      conv2DBackpropFilter_: function (t, e, n, r, i, a, o) {
        void 0 === a && (a = "NHWC");
        var s = t;
        3 === t.rank && (s = pi(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
        var u = e;
        3 === u.rank && (u = pi(e, [1, e.shape[0], e.shape[1], e.shape[2]])),
          nn(4 === s.rank, function () {
            return (
              "Error in conv2dDerFilter: input must be rank 4, but got shape " +
              "".concat(s.shape, ".")
            );
          }),
          nn(4 === u.rank, function () {
            return (
              "Error in conv2dDerFilter: dy must be rank 4, but got shape " +
              "".concat(u.shape, ".")
            );
          }),
          nn(4 === n.length, function () {
            return (
              "Error in conv2dDerFilter: filterShape must be length 4, but got " +
              "".concat(n, ".")
            );
          });
        var l = "NHWC" === a ? s.shape[3] : s.shape[1],
          c = "NHWC" === a ? u.shape[3] : u.shape[1];
        nn(l === n[2], function () {
          return (
            "Error in conv2dDerFilter: depth of input ".concat(l, ") must ") +
            "match input depth in filter (".concat(n[2], ".")
          );
        }),
          nn(c === n[3], function () {
            return (
              "Error in conv2dDerFilter: depth of dy (".concat(c, ") must ") +
              "match output depth for filter (".concat(n[3], ").")
            );
          }),
          Ti("conv2dDerFilter", i, o);
        var h = { x: s, dy: u },
          p = {
            strides: r,
            pad: i,
            dataFormat: a,
            dimRoundingMode: o,
            filterShape: n,
          };
        return Vr.runKernel("Conv2DBackpropFilter", h, p);
      },
    });
    var $i = Yr({
        conv2DBackpropInput_: function (t, e, n, r, i, a, o) {
          void 0 === a && (a = "NHWC"),
            nn(t.length === e.rank, function () {
              return (
                "Length of inShape " +
                "("
                  .concat(t.length, ") and rank of dy (")
                  .concat(e.rank, ") must match")
              );
            });
          var s = t,
            u = e,
            l = !1;
          3 === e.rank &&
            ((l = !0),
            (u = pi(e, [1, e.shape[0], e.shape[1], e.shape[2]])),
            (s = [1, t[0], t[1], t[2]])),
            nn(4 === s.length, function () {
              return (
                "Error in conv2dDerInput: inShape must be length 4, but got length " +
                "".concat(s.length, ".")
              );
            }),
            nn(4 === u.rank, function () {
              return (
                "Error in conv2dDerInput: dy must be rank 4, but got " +
                "rank ".concat(u.rank)
              );
            }),
            nn(4 === n.rank, function () {
              return (
                "Error in conv2dDerInput: filter must be rank 4, but got " +
                "rank ".concat(n.rank)
              );
            });
          var c = "NHWC" === a ? s[3] : s[1],
            h = "NHWC" === a ? u.shape[3] : u.shape[1];
          nn(c === n.shape[2], function () {
            return (
              "Error in conv2dDerInput: depth of input (".concat(c, ") must ") +
              "match input depth for filter ".concat(n.shape[2], ".")
            );
          }),
            nn(h === n.shape[3], function () {
              return (
                "Error in conv2dDerInput: depth of output (".concat(
                  h,
                  ") must ",
                ) + "match output depth for filter ".concat(n.shape[3], ".")
              );
            }),
            Ti("conv2dDerInput", i, o);
          var p = { dy: u, filter: n },
            f = {
              strides: r,
              pad: i,
              dataFormat: a,
              dimRoundingMode: o,
              inputShape: s,
            },
            d = Vr.runKernel(Ne, p, f);
          return l ? pi(d, [d.shape[1], d.shape[2], d.shape[3]]) : d;
        },
      }),
      Qi = {
        kernelName: Se,
        inputsToSave: ["x", "filter"],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.dilations,
            s = n.strides,
            u = n.pad,
            l = n.dataFormat;
          return (
            nn(Ai(o), function () {
              return (
                "Error in gradient of conv2D: dilation rates greater than 1 " +
                "are not yet supported in gradients. Got dilations '".concat(
                  o,
                  "'",
                )
              );
            }),
            {
              x: function () {
                return $i(i.shape, t, a, s, u, l);
              },
              filter: function () {
                return Xi(i, t, a.shape, s, u, l);
              },
            }
          );
        },
      };
    var ta = Yr({
        conv2d_: function (t, e, n, r, i, a, o) {
          void 0 === i && (i = "NHWC"), void 0 === a && (a = [1, 1]);
          var s = Jr(t, "x", "conv2d", "float32"),
            u = Jr(e, "filter", "conv2d", "float32"),
            l = s,
            c = !1;
          3 === s.rank &&
            ((c = !0), (l = pi(s, [1, s.shape[0], s.shape[1], s.shape[2]]))),
            nn(4 === l.rank, function () {
              return "Error in conv2d: input must be rank 4, but got rank ".concat(
                l.rank,
                ".",
              );
            }),
            nn(4 === u.rank, function () {
              return (
                "Error in conv2d: filter must be rank 4, but got rank " +
                "".concat(u.rank, ".")
              );
            }),
            Ti("conv2d", r, o);
          var h = "NHWC" === i ? l.shape[3] : l.shape[1];
          nn(h === u.shape[2], function () {
            return (
              "Error in conv2d: depth of input (".concat(h, ") must match ") +
              "input depth for filter ".concat(u.shape[2], ".")
            );
          }),
            nn(zi(n, a), function () {
              return (
                "Error in conv2D: Either strides or dilations must be 1. " +
                "Got strides ".concat(n, " and dilations '").concat(a, "'")
              );
            }),
            nn(Ei(a), function () {
              return "Error in conv2D: Dilated rates should be larger than 0.";
            }),
            nn(Ei(n), function () {
              return "Error in conv2D: Strides should be larger than 0.";
            });
          var p = { x: l, filter: u },
            f = {
              strides: n,
              pad: r,
              dataFormat: i,
              dilations: a,
              dimRoundingMode: o,
            },
            d = Vr.runKernel(Se, p, f);
          return c ? pi(d, [d.shape[1], d.shape[2], d.shape[3]]) : d;
        },
      }),
      ea = {
        kernelName: Ne,
        inputsToSave: ["dy", "filter"],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.strides,
            s = n.pad,
            u = n.dataFormat,
            l = n.dimRoundingMode;
          return {
            dy: function () {
              return ta(t, a, o, s, u, 1, l);
            },
            filter: function () {
              return Xi(t, i, a.shape, o, s, u, l);
            },
          };
        },
      };
    var na = Yr({
      conv3DBackpropFilter_: function (t, e, n, r, i) {
        var a = t;
        4 === t.rank &&
          (a = pi(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]]));
        var o = e;
        4 === o.rank &&
          (o = pi(e, [1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]])),
          nn(5 === a.rank, function () {
            return (
              "Error in conv3dDerFilter: input must be rank 5, but got shape " +
              "".concat(a.shape, ".")
            );
          }),
          nn(5 === o.rank, function () {
            return (
              "Error in conv3dDerFilter: dy must be rank 5, but got shape " +
              "".concat(o.shape, ".")
            );
          }),
          nn(5 === n.length, function () {
            return (
              "Error in conv3dDerFilter: filterShape must be length 5, but got " +
              "".concat(n, ".")
            );
          }),
          nn(a.shape[4] === n[3], function () {
            return (
              "Error in conv3dDerFilter: depth of input ".concat(
                a.shape[4],
                ") must ",
              ) + "match input depth in filter (".concat(n[3], ".")
            );
          }),
          nn(o.shape[4] === n[4], function () {
            return (
              "Error in conv3dDerFilter: depth of dy (".concat(
                o.shape[4],
                ") must ",
              ) + "match output depth for filter (".concat(n[4], ").")
            );
          });
        var s = { x: a, dy: o },
          u = { strides: r, pad: i, filterShape: n };
        return Vr.runKernel("Conv3DBackpropFilterV2", s, u);
      },
    });
    var ra = Yr({
        conv3DBackpropInput_: function (t, e, n, r, i) {
          nn(t.length === e.rank, function () {
            return (
              "Length of inShape " +
              "("
                .concat(t.length, ") and rank of dy (")
                .concat(e.rank, ") must match")
            );
          });
          var a = t,
            o = e,
            s = !1;
          4 === e.rank &&
            ((s = !0),
            (o = pi(e, [1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]])),
            (a = [1, t[0], t[1], t[2], t[3]]));
          var u = a[4],
            l = o.shape[4];
          nn(5 === a.length, function () {
            return (
              "Error in conv3dDerInput: inShape must be length 5, but got length " +
              "".concat(a.length, ".")
            );
          }),
            nn(5 === o.rank, function () {
              return (
                "Error in conv3dDerInput: dy must be rank 5, but got " +
                "rank ".concat(o.rank)
              );
            }),
            nn(5 === n.rank, function () {
              return (
                "Error in conv3dDerInput: filter must be rank 5, but got " +
                "rank ".concat(n.rank)
              );
            }),
            nn(u === n.shape[3], function () {
              return (
                "Error in conv3dDerInput: depth of input (".concat(u, ") must ") +
                "match input depth for filter ".concat(n.shape[3], ".")
              );
            }),
            nn(l === n.shape[4], function () {
              return (
                "Error in conv3dDerInput: depth of output (".concat(
                  l,
                  ") must ",
                ) + "match output depth for filter ".concat(n.shape[4], ".")
              );
            });
          var c = { dy: o, filter: n },
            h = { pad: i, strides: r, inputShape: a },
            p = Vr.runKernel("Conv3DBackpropInputV2", c, h);
          return s ? pi(p, [p.shape[1], p.shape[2], p.shape[3], p.shape[4]]) : p;
        },
      }),
      ia = {
        kernelName: "Conv3D",
        inputsToSave: ["x", "filter"],
        gradFunc: function (t, e, n) {
          var r = n.dilations,
            i = n.strides,
            a = n.pad;
          nn(Ai(r), function () {
            return (
              "Error in gradient of conv3D: dilation rates greater than 1 are " +
              "not yet supported in gradients. Got dilations '".concat(r, "'")
            );
          });
          var o = c(e, 2),
            s = o[0],
            u = o[1];
          return {
            x: function () {
              return ra(s.shape, t, u, i, a);
            },
            filter: function () {
              return na(s, t, u.shape, i, a);
            },
          };
        },
      };
    var aa = Yr({
        sin_: function (t) {
          var e = { x: Jr(t, "x", "sin", "float32") };
          return Vr.runKernel("Sin", e);
        },
      }),
      oa = {
        kernelName: "Cos",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return $r(ri(aa(Xr(n, "float32"))), t);
            },
          };
        },
      };
    var sa = Yr({
        sinh_: function (t) {
          var e = { x: Jr(t, "x", "sinh") };
          return Vr.runKernel(Ve, e);
        },
      }),
      ua = {
        kernelName: Ie,
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return $r(sa(Xr(n, "float32")), t);
            },
          };
        },
      };
    function la(t, e) {
      return (function (t, e, n) {
        for (var r = t.length + e.length, i = [], a = 0, o = 0, s = 0; s < r; s++)
          -1 === n.indexOf(s) ? i.push(t[a++]) : i.push(e[o++]);
        return i;
      })(
        t,
        e.map(function (t) {
          return 1;
        }),
        e,
      );
    }
    function ca(t, e) {
      if (
        (function (t, e) {
          for (var n = 0; n < t.length; ++n)
            if (t[t.length - n - 1] !== e - 1 - n) return !1;
          return !0;
        })(t, e)
      )
        return null;
      for (var n = [], r = 0; r < e; ++r) -1 === t.indexOf(r) && n.push(r);
      return (
        t.forEach(function (t) {
          return n.push(t);
        }),
        n
      );
    }
    function ha(t) {
      return t
        .map(function (t, e) {
          return [e, t];
        })
        .sort(function (t, e) {
          return t[1] - e[1];
        })
        .map(function (t) {
          return t[0];
        });
    }
    var pa = Yr({
      cumsum_: function (t, e, n, r) {
        void 0 === e && (e = 0),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1);
        var i = { x: Jr(t, "x", "cumsum") },
          a = { axis: e, exclusive: n, reverse: r };
        return Vr.runKernel(Ae, i, a);
      },
    });
    function fa(t, e) {
      return Vr.tidy(t, e);
    }
    function da(t) {
      Br(t).forEach(function (t) {
        return t.dispose();
      });
    }
    var ga = Yr({
      complex_: function (t, e) {
        var n,
          r,
          i,
          a = Jr(t, "real", "complex"),
          o = Jr(e, "imag", "complex");
        (n = a.shape),
          (r = o.shape),
          void 0 ===
            (i =
              "real and imag shapes, "
                .concat(a.shape, " and ")
                .concat(o.shape, ", ") + "must match in call to tf.complex().") &&
            (i = ""),
          nn(an(n, r), function () {
            return i + " Shapes ".concat(n, " and ").concat(r, " must match");
          });
        var s = { real: a, imag: o };
        return Vr.runKernel("Complex", s);
      },
    });
    var va = Yr({
      imag_: function (t) {
        var e = { input: Jr(t, "input", "imag") };
        return Vr.runKernel("Imag", e);
      },
    });
    var ya = Yr({
      real_: function (t) {
        var e = { input: Jr(t, "input", "real") };
        return Vr.runKernel("Real", e);
      },
    });
    var ma = Yr({
        transpose_: function (t, e, n) {
          var r = Jr(t, "x", "transpose");
          if (
            (null == e &&
              (e = r.shape
                .map(function (t, e) {
                  return e;
                })
                .reverse()),
            nn(r.rank === e.length, function () {
              return (
                "Error in transpose: rank of input ".concat(r.rank, " ") +
                "must match length of perm ".concat(e, ".")
              );
            }),
            e.forEach(function (t) {
              nn(t >= 0 && t < r.rank, function () {
                return (
                  "All entries in 'perm' must be between 0 and ".concat(
                    r.rank - 1,
                  ) + " but got ".concat(e)
                );
              });
            }),
            r.rank <= 1)
          )
            return r.clone();
          var i = { x: r },
            a = { perm: e };
          return "complex64" === r.dtype
            ? fa(function () {
                var t = ya(r),
                  e = va(r);
                return (
                  (t = Vr.runKernel(Ze, { x: t }, a)),
                  (e = Vr.runKernel(Ze, { x: e }, a)),
                  n && (e = ri(e)),
                  ga(t, e)
                );
              })
            : Vr.runKernel(Ze, i, a);
        },
      }),
      ba = {
        kernelName: Ae,
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.axis,
            a = n.exclusive,
            o = n.reverse;
          return {
            x: function () {
              var e = ca([i], r.rank),
                n = pa(t, i, a, !o);
              return null != e && (n = ma(n, e)), n;
            },
          };
        },
      };
    var wa = Yr({
      depthwiseConv2dNativeBackpropFilter_: function (t, e, n, r, i, a, o) {
        void 0 === a && (a = [1, 1]);
        var s = t;
        3 === t.rank && (s = pi(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
        var u = e;
        3 === u.rank && (u = pi(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
        var l = { x: s, dy: u },
          c = {
            strides: r,
            pad: i,
            dimRoundingMode: o,
            dilations: a,
            filterShape: n,
          };
        return Vr.runKernel("DepthwiseConv2dNativeBackpropFilter", l, c);
      },
    });
    var ka = Yr({
        depthwiseConv2dNativeBackpropInput_: function (t, e, n, r, i, a, o) {
          void 0 === a && (a = [1, 1]);
          var s = e,
            u = !1;
          3 === e.rank &&
            ((u = !0), (s = pi(e, [1, e.shape[0], e.shape[1], e.shape[2]])));
          var l = { dy: s, filter: n },
            c = {
              strides: r,
              pad: i,
              dimRoundingMode: o,
              dilations: a,
              inputShape: t,
            },
            h = Vr.runKernel("DepthwiseConv2dNativeBackpropInput", l, c);
          return u ? pi(h, [h.shape[1], h.shape[2], h.shape[3]]) : h;
        },
      }),
      xa = {
        kernelName: "DepthwiseConv2dNative",
        inputsToSave: ["x", "filter"],
        gradFunc: function (t, e, n) {
          var r = n.dilations,
            i = n.strides,
            a = n.pad,
            o = n.dimRoundingMode,
            s = null == r ? [1, 1] : r;
          nn(Ai(s), function () {
            return (
              "Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations " +
              "'".concat(s, "'")
            );
          });
          var u = c(e, 2),
            l = u[0],
            h = u[1];
          return (
            nn(4 === l.rank, function () {
              return (
                "Error in gradient of depthwiseConv2dNative: input must be " +
                "rank 4, but got rank ".concat(l.rank, ".")
              );
            }),
            nn(4 === h.rank, function () {
              return (
                "Error in gradient of depthwiseConv2dNative: filter must be " +
                "rank 4, but got rank ".concat(h.rank, ".")
              );
            }),
            nn(l.shape[3] === h.shape[2], function () {
              return (
                "Error in gradient of depthwiseConv2d: number of input " +
                "channels (".concat(
                  l.shape[3],
                  ") must match the inChannels dimension ",
                ) +
                "in filter ".concat(h.shape[2], ".")
              );
            }),
            nn(zi(i, s), function () {
              return (
                "Error in gradient of depthwiseConv2d: Either strides or " +
                "dilations must be  1. Got strides ".concat(
                  i,
                  " and dilations ",
                ) +
                "'".concat(s, "'.")
              );
            }),
            Ti("depthwiseConv2d", a, o),
            {
              x: function () {
                return ka(l.shape, t, h, i, a, s, o);
              },
              filter: function () {
                return wa(l, t, h.shape, i, a, s, o);
              },
            }
          );
        },
      },
      Sa = {
        kernelName: "Dilation2D",
        inputsToSave: ["x", "filter"],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = { x: i, filter: a, dy: t },
            s = { x: i, filter: a, dy: t };
          return {
            x: function () {
              return Vr.runKernel("Dilation2DBackpropInput", o, n);
            },
            filter: function () {
              return Vr.runKernel("Dilation2DBackpropFilter", s, n);
            },
          };
        },
      },
      Na = {
        kernelName: "Elu",
        outputsToSave: [!0],
        gradFunc: function (t, e) {
          var n = { dy: t, y: c(e, 1)[0] };
          return {
            x: function () {
              return Vr.runKernel("EluGrad", n);
            },
          };
        },
      };
    var Ia = Yr({
        exp_: function (t) {
          var e = { x: Jr(t, "x", "exp") };
          return Vr.runKernel("Exp", e);
        },
      }),
      Aa = {
        kernelName: "Erf",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0],
            r = $r(Ia(ri(oi(n))), 2 / Math.sqrt(Math.PI));
          return {
            x: function () {
              return $r(t, r);
            },
          };
        },
      },
      za = {
        kernelName: "Exp",
        outputsToSave: [!0],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return $r(t, n);
            },
          };
        },
      },
      Ea = {
        kernelName: Ee,
        inputsToSave: ["input"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            input: function () {
              return pi(t, n.shape);
            },
          };
        },
      },
      Ta = {
        kernelName: "Expm1",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return $r(t, Ia(n));
            },
          };
        },
      },
      Ca = {
        kernelName: Te,
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      },
      Fa = {
        kernelName: Ce,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = ni(t, Xr(i, "float32")),
                n = ci(r.shape, a);
              return n.length > 0 ? pi(fi(e, n), r.shape) : e;
            },
            b: function () {
              var e = $r(t, Xr(r, "float32")),
                n = ci(i.shape, a);
              n.length > 0 && (e = pi(fi(e, n), i.shape));
              var o = oi(i);
              return ri(ni(e, Xr(o, "float32")));
            },
          };
        },
      };
    var Da = Yr({
      rsqrt_: function (t) {
        var e = { x: Jr(t, "x", "rsqrt", "float32") };
        return Vr.runKernel(je, e);
      },
    });
    var _a = Yr({
        tile_: function (t, e) {
          var n = Jr(t, "x", "tile", "string_or_numeric");
          nn(n.rank === e.length, function () {
            return (
              "Error in transpose: rank of input ".concat(n.rank, " ") +
              "must match length of reps ".concat(e, ".")
            );
          });
          var r = { x: n },
            i = { reps: e };
          return Vr.runKernel(Je, r, i);
        },
      }),
      La = {
        kernelName: "FusedBatchNorm",
        inputsToSave: ["x", "mean", "variance", "scale"],
        gradFunc: function (t, e, n) {
          var r = n.varianceEpsilon,
            i = c(e, 4),
            a = i[0],
            o = i[1],
            s = i[2],
            u = i[3],
            l = null == u ? ii(1) : u,
            h = ci(o.shape, a.shape),
            p = [];
          if (1 === o.rank) {
            for (var f = 0; f < a.shape.length - 1; ++f) p.push(a.shape[f]);
            p.push(1);
          }
          var d = si(a, o),
            g = $r(t, l),
            v = Da(wi(s, ii(r))),
            y = $r($r($r(v, v), v), ii(-0.5));
          return {
            x: function () {
              return 1 === o.rank
                ? pi($r($r(t, _a(pi(v, [1, 1, 1, o.shape[0]]), p)), l), a.shape)
                : pi($r($r(t, v), l), a.shape);
            },
            mean: function () {
              var t = $r($r(v, ii(-1)), g);
              return 1 === o.rank && (t = fi(t, h)), pi(t, o.shape);
            },
            variance: function () {
              var t = $r($r(y, d), g);
              return 1 === o.rank && (t = fi(t, h)), pi(t, o.shape);
            },
            scale: function () {
              var e = $r(d, v),
                n = $r(t, e);
              return 1 === o.rank && (n = fi(n, h)), pi(n, o.shape);
            },
            offset: function () {
              var e = t;
              return 1 === o.rank && (e = fi(e, h)), pi(e, o.shape);
            },
          };
        },
      };
    var Ra = Yr({
      stack_: function (t, e) {
        void 0 === e && (e = 0);
        var n = Zr(t, "tensors", "stack", "string_or_numeric");
        nn(n.length >= 1, function () {
          return "Pass at least one tensor to tf.stack";
        }),
          n.length > 0 &&
            nn(e <= n[0].rank, function () {
              return "Axis must be <= rank of the tensor";
            });
        var r = n,
          i = { axis: e };
        return Vr.runKernel(Oe, r, i);
      },
    });
    var Oa = Yr({
        unsortedSegmentSum_: function (t, e, n) {
          var r = Jr(t, "x", "unsortedSegmentSum"),
            i = Jr(e, "segmentIds", "unsortedSegmentSum", "int32");
          nn(on(n), function () {
            return "numSegments must be of dtype int";
          });
          var a = { x: r, segmentIds: i },
            o = { numSegments: n };
          return Vr.runKernel(Xe, a, o);
        },
      }),
      Ma = {
        kernelName: Fe,
        inputsToSave: ["x", "indices"],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.axis,
            s = n.batchDims,
            u = un(o, i.shape)[0],
            l = function (t, e, n) {
              return function () {
                var r = t.shape,
                  i = e.size,
                  a = r.slice(0, u),
                  s = a.length,
                  l = r.slice(o, r.length).slice(1),
                  c = l.length,
                  h = Ba(0, s),
                  p = Ba(s + 1, s + 1 + c),
                  f = Pa([a, [i], l]),
                  d = pi(n, f),
                  g = pi(e, [i]),
                  v = Pa([[s], h, p]),
                  y = ma(d, v),
                  m = Oa(y, g, t.shape[u]),
                  b = ha(v);
                return (m = ma(m, b));
              };
            };
          if (1 === s) {
            var h = i.shape[0],
              p = i.split(h, 0);
            return {
              x: function () {
                var e = Ra(
                  p.map(function (e, n) {
                    return l(e, a.slice(n, 1), t.slice(n, 1))();
                  }),
                );
                return e.reshape(i.shape);
              },
              indices: function () {
                return a;
              },
            };
          }
          return {
            x: l(i, a, t),
            indices: function () {
              return a;
            },
          };
        },
      };
    function Ba(t, e) {
      for (var n = [], r = t; r < e; ++r) n.push(r);
      return n;
    }
    function Pa(t) {
      for (var e = [], n = 0; n < t.length; ++n)
        for (var r = 0; r < t[n].length; ++r) e.push(t[n][r]);
      return e;
    }
    var ja = {
        kernelName: De,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1];
          return {
            a: function () {
              return vi(r);
            },
            b: function () {
              return vi(i);
            },
          };
        },
      },
      Ua = {
        kernelName: _e,
        gradFunc: function (t) {
          return {
            x: function () {
              return Xr(t, "float32");
            },
          };
        },
      },
      Wa = {
        kernelName: "IsFinite",
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      },
      Va = {
        kernelName: "IsInf",
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      },
      qa = {
        kernelName: "IsNan",
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      };
    var Ga = Yr({
        greater_: function (t, e) {
          var n,
            r = Jr(t, "a", "greater", "string_or_numeric"),
            i = Jr(e, "b", "greater", "string_or_numeric");
          (r = (n = c(Mr(r, i), 2))[0]), (i = n[1]), hi(r.shape, i.shape);
          var a = { a: r, b: i };
          return Vr.runKernel("Greater", a);
        },
      }),
      Ka = {
        kernelName: "LeakyRelu",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.alpha,
            a = Ga(r, 0);
          return {
            x: function () {
              return Ki(a, t, $r(t, i));
            },
          };
        },
      },
      Ha = {
        kernelName: "Log1p",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return ni(t, wi(n, 1));
            },
          };
        },
      },
      Ja = {
        kernelName: "Log",
        inputsToSave: ["x"],
        gradFunc: function (t, e) {
          var n = c(e, 1)[0];
          return {
            x: function () {
              return ni(t, Xr(n, "float32"));
            },
          };
        },
      },
      Za = {
        kernelName: "LogSoftmax",
        inputsToSave: [],
        outputsToSave: [!0],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = n.axis;
          return {
            logits: function () {
              var e = Ia(r);
              return si(t, $r(fi(t, i, !0), e));
            },
          };
        },
      };
    var Ya = Yr({
        localResponseNormalizationBackprop_: function (t, e, n, r, i, a, o) {
          void 0 === r && (r = 5),
            void 0 === i && (i = 1),
            void 0 === a && (a = 1),
            void 0 === o && (o = 0.5);
          var s = { x: t, y: e, dy: n },
            u = { depthRadius: r, bias: i, alpha: a, beta: o };
          return Vr.runKernel("LRNGrad", s, u);
        },
      }),
      Xa = {
        kernelName: "LRN",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.depthRadius,
            s = n.bias,
            u = n.alpha,
            l = n.beta;
          return {
            x: function () {
              return Ya(i, a, t, o, s, u, l);
            },
          };
        },
      };
    var $a = Yr({
      equal_: function (t, e) {
        var n,
          r = Jr(t, "a", "equal", "string_or_numeric"),
          i = Jr(e, "b", "equal", "string_or_numeric");
        (r = (n = c(Mr(r, i), 2))[0]), (i = n[1]), hi(r.shape, i.shape);
        var a = { a: r, b: i };
        return Vr.runKernel("Equal", a);
      },
    });
    function Qa(t, e, n, r) {
      return (
        e.rank < n.rank && (e = pi(e, la(e.shape, r))),
        t.rank < n.rank && (t = pi(t, la(t.shape, r))),
        {
          x: function () {
            return $r(t, Xr($a(n, e), t.dtype));
          },
        }
      );
    }
    var to = {
      kernelName: "Max",
      inputsToSave: ["x"],
      outputsToSave: [!0],
      gradFunc: function (t, e, n) {
        var r = n.reductionIndices,
          i = e[0],
          a = Qa(t, e[1], i, un(r, i.shape));
        return {
          x: function () {
            return a.x();
          },
        };
      },
    };
    var eo = Yr({
        less_: function (t, e) {
          var n,
            r = Jr(t, "a", "less", "string_or_numeric"),
            i = Jr(e, "b", "less", "string_or_numeric");
          (r = (n = c(Mr(r, i), 2))[0]), (i = n[1]), hi(r.shape, i.shape);
          var a = { a: r, b: i };
          return Vr.runKernel("Less", a);
        },
      }),
      no = {
        kernelName: Le,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1];
          return {
            a: function () {
              return $r(t, Xr(Ui(r, i), "float32"));
            },
            b: function () {
              return $r(t, Xr(eo(r, i), "float32"));
            },
          };
        },
      };
    var ro = Yr({
        maxPool3dGrad_: function (t, e, n, r, i, a, o) {
          var s = Jr(t, "dy", "maxPool3dGrad"),
            u = Jr(e, "input", "maxPool3dGrad"),
            l = Jr(n, "output", "maxPool3dGrad"),
            c = s,
            h = u,
            p = l,
            f = !1;
          4 === u.rank &&
            ((f = !0),
            (c = pi(s, [1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]])),
            (h = pi(u, [1, u.shape[0], u.shape[1], u.shape[2], u.shape[3]])),
            (p = pi(l, [1, l.shape[0], l.shape[1], l.shape[2], l.shape[3]]))),
            nn(5 === c.rank, function () {
              return (
                "Error in maxPool3dGrad: dy must be rank 5 but got rank " +
                "".concat(c.rank, ".")
              );
            }),
            nn(5 === h.rank, function () {
              return (
                "Error in maxPool3dGrad: input must be rank 5 but got rank " +
                "".concat(h.rank, ".")
              );
            }),
            nn(5 === p.rank, function () {
              return (
                "Error in maxPool3dGrad: output must be rank 5 but got rank " +
                "".concat(p.rank, ".")
              );
            }),
            Ti("maxPool3dGrad", a, o);
          var d = { dy: c, input: h, output: p },
            g = { filterSize: r, strides: i, pad: a, dimRoundingMode: o },
            v = Vr.runKernel("MaxPool3DGrad", d, g);
          return f ? pi(v, [v.shape[1], v.shape[2], v.shape[3], v.shape[4]]) : v;
        },
      }),
      io = {
        kernelName: "MaxPool3D",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.filterSize,
            s = n.strides,
            u = n.pad,
            l = n.dimRoundingMode;
          return {
            x: function () {
              return ro(t, i, a, o, s, u, l);
            },
          };
        },
      };
    var ao = Yr({
        maxPoolGrad_: function (t, e, n, r, i, a, o) {
          var s = Jr(t, "dy", "maxPoolGrad"),
            u = Jr(e, "input", "maxPoolGrad"),
            l = Jr(n, "output", "maxPoolGrad");
          nn(u.rank === s.rank, function () {
            return (
              "Rank of input (".concat(u.rank, ") does not match rank of dy ") +
              "(".concat(s.rank, ")")
            );
          }),
            nn(4 === s.rank, function () {
              return (
                "Error in maxPoolGrad: dy must be rank 4 but got rank " +
                "".concat(s.rank, ".")
              );
            }),
            nn(4 === u.rank, function () {
              return (
                "Error in maxPoolGrad: input must be rank 4 but got rank " +
                "".concat(u.rank, ".")
              );
            }),
            Ti("maxPoolGrad", a, o);
          var c = { dy: s, input: u, output: l },
            h = { filterSize: r, strides: i, pad: a, dimRoundingMode: o };
          return Vr.runKernel("MaxPoolGrad", c, h);
        },
      }),
      oo = {
        kernelName: "MaxPool",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function (t, e, n) {
          var r = c(e, 2),
            i = r[0],
            a = r[1],
            o = n.filterSize,
            s = n.strides,
            u = n.pad;
          return {
            x: function () {
              return ao(t, i, a, o, s, u);
            },
          };
        },
      };
    function so(t, e) {
      if ((void 0 === e && (e = "float32"), mn(t), "complex64" === e)) {
        var n = so(t, "float32"),
          r = so(t, "float32");
        return ga(n, r);
      }
      var i = yn(rn(t), e);
      return Vr.makeTensor(i, t, e);
    }
    function uo(t, e) {
      if ((void 0 === e && (e = "float32"), mn(t), "complex64" === e)) {
        var n = uo(t, "float32"),
          r = so(t, "float32");
        return ga(n, r);
      }
      var i = vn(rn(t), e);
      return Vr.makeTensor(i, t, e);
    }
    var lo = {
        kernelName: "Mean",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = c(e, 1)[0],
            i = un(n.axis, r.shape),
            a = (function (t, e) {
              for (var n = [], r = t.length, i = 0; i < r; i++)
                -1 === e.indexOf(i) && n.push(t[i]);
              var a = e.map(function (e) {
                return t[e];
              });
              return [n, a];
            })(r.shape, i),
            o = rn(a[1]);
          return {
            x: function () {
              var e = r.shape.slice();
              i.forEach(function (t) {
                e[t] = 1;
              });
              var n = pi(t, e);
              return ni($r(n, uo(r.shape, "float32")), o);
            },
          };
        },
      },
      co = {
        kernelName: "Min",
        inputsToSave: ["x"],
        outputsToSave: [!0],
        gradFunc: function (t, e, n) {
          var r = n.axis,
            i = c(e, 2),
            a = i[0],
            o = Qa(t, i[1], a, un(r, a.shape));
          return {
            x: function () {
              return o.x();
            },
          };
        },
      },
      ho = {
        kernelName: "Minimum",
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1];
          return {
            a: function () {
              return $r(t, Xr(Wi(r, i), "float32"));
            },
            b: function () {
              return $r(t, Xr(Ga(r, i), "float32"));
            },
          };
        },
      };
    var po = Yr({
        slice_: function (t, e, n) {
          var r = Jr(t, "x", "slice", "string_or_numeric");
          if (0 === r.rank) throw new Error("Slicing scalar is not possible");
          var i = { x: r },
            a = { begin: e, size: n };
          return Vr.runKernel(We, i, a);
        },
      }),
      fo = {
        kernelName: "MirrorPad",
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = e[0],
            i = n.paddings.map(function (t) {
              return t[0];
            });
          return {
            x: function () {
              return po(t, i, r.shape);
            },
          };
        },
      };
    var go = Yr({
        floor_: function (t) {
          var e = { x: Jr(t, "x", "floor", "float32") };
          return Vr.runKernel(Te, e);
        },
      }),
      vo = {
        kernelName: "Mod",
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = ci(r.shape, a);
              return e.length > 0 ? pi(fi(t, e), r.shape) : t;
            },
            b: function () {
              var e = $r(t, ri(go(ni(r, i)))),
                n = ci(i.shape, a);
              return n.length > 0 ? pi(fi(e, n), i.shape) : e;
            },
          };
        },
      },
      yo = {
        kernelName: Re,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = $r(t, Xr(i, "float32")),
                n = ci(r.shape, a);
              return n.length > 0 ? pi(fi(e, n), r.shape) : e;
            },
            b: function () {
              var e = $r(t, Xr(r, "float32")),
                n = ci(i.shape, a);
              return n.length > 0 ? pi(fi(e, n), i.shape) : e;
            },
          };
        },
      },
      mo = {
        kernelName: "Neg",
        gradFunc: function (t) {
          return {
            x: function () {
              return ri(t);
            },
          };
        },
      },
      bo = {
        kernelName: "OneHot",
        inputsToSave: ["indices"],
        gradFunc: function (t, e) {
          var n = e[0];
          return {
            indices: function () {
              return so(n.shape, "float32");
            },
          };
        },
      },
      wo = {
        kernelName: "OnesLike",
        gradFunc: function (t) {
          return {
            x: function () {
              return vi(t);
            },
          };
        },
      };
    var ko = Yr({
        unstack_: function (t, e) {
          void 0 === e && (e = 0);
          var n = Jr(t, "x", "unstack", "string_or_numeric");
          nn(e >= -n.shape.length && e < n.shape.length, function () {
            return "Axis = "
              .concat(e, " is not in [-")
              .concat(n.shape.length, ", ")
              .concat(n.shape.length, ")");
          });
          var r = { value: n },
            i = { axis: e };
          return Vr.runKernel(Ye, r, i);
        },
      }),
      xo = {
        kernelName: Oe,
        saveAllInputs: !0,
        gradFunc: function (t, e, n) {
          var r = n.axis;
          return ko(t, r).map(function (t) {
            return function () {
              return t;
            };
          });
        },
      },
      So = {
        kernelName: Me,
        inputsToSave: ["x"],
        gradFunc: function (t, e, n) {
          var r = e[0],
            i = n.paddings.map(function (t) {
              return t[0];
            });
          return {
            x: function () {
              return po(t, i, r.shape);
            },
          };
        },
      };
    var No = Yr({
      log_: function (t) {
        var e = { x: Jr(t, "x", "log", "float32") };
        return Vr.runKernel("Log", e);
      },
    });
    var Io = Yr({
        pow_: function (t, e) {
          var n,
            r = Jr(t, "base", "pow"),
            i = Jr(e, "exp", "pow"),
            a = { a: (r = (n = c(Mr(r, i), 2))[0]), b: (i = n[1]) };
          return Vr.runKernel("Pow", a);
        },
      }),
      Ao = {
        kernelName: "Pow",
        inputsToSave: ["a", "b"],
        outputsToSave: [!0],
        gradFunc: function (t, e) {
          var n = c(e, 3),
            r = n[0],
            i = n[1],
            a = n[2],
            o = r,
            s = i,
            u = hi(o.shape, s.shape);
          return {
            a: function () {
              var e = Xr(s, "float32"),
                n = $r(t, $r(e, Io(o, si(e, ii(1))))),
                r = ci(o.shape, u);
              return r.length > 0 && (n = fi(n, r)), pi(n, o.shape);
            },
            b: function () {
              var e = Ga(o, 0),
                n = Ki(e, No(o), vi(o)),
                r = $r(t, $r(a, n)),
                i = ci(s.shape, u);
              return i.length > 0 && (r = fi(r, i)), pi(r, s.shape);
            },
          };
        },
      },
      zo = {
        kernelName: "Prelu",
        inputsToSave: ["x", "alpha"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = Ga(r, 0);
          return {
            x: function () {
              return Ki(a, t, $r(t, i));
            },
            alpha: function () {
              var e = Ki(a, vi(t), $r(t, r)),
                n = ci(i.shape, t.shape);
              return n.length > 0 && (e = fi(e, n)), pi(e, i.shape);
            },
          };
        },
      };
    var Eo = Nn();
    Eo.registerFlag(
      "DEBUG",
      function () {
        return !1;
      },
      function (t) {
        t &&
          console.warn(
            "Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.",
          );
      },
    ),
      Eo.registerFlag("IS_BROWSER", function () {
        return (
          ("undefined" != typeof window && null != window.document) ||
          "undefined" != typeof WorkerGlobalScope
        );
      }),
      Eo.registerFlag("IS_NODE", function () {
        return (
          "undefined" != typeof process &&
          "undefined" != typeof process.versions &&
          "undefined" != typeof process.versions.node
        );
      }),
      Eo.registerFlag("IS_CHROME", function () {
        return (
          "undefined" != typeof navigator &&
          null != navigator &&
          null != navigator.userAgent &&
          /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor)
        );
      }),
      Eo.registerFlag("IS_SAFARI", function () {
        return (
          "undefined" != typeof navigator &&
          null != navigator &&
          null != navigator.userAgent &&
          /Safari/.test(navigator.userAgent) &&
          /Apple/.test(navigator.vendor)
        );
      }),
      Eo.registerFlag("PROD", function () {
        return !1;
      }),
      Eo.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", function () {
        return Eo.getBool("DEBUG");
      }),
      Eo.registerFlag("DEPRECATION_WARNINGS_ENABLED", function () {
        return !0;
      }),
      Eo.registerFlag("IS_TEST", function () {
        return !1;
      }),
      Eo.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", function () {
        return Eo.getBool("DEBUG");
      }),
      Eo.registerFlag("WRAP_TO_IMAGEBITMAP", function () {
        return !1;
      }),
      Eo.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU", function () {
        return !1;
      }),
      Eo.registerFlag("USE_SETTIMEOUTCUSTOM", function () {
        return !1;
      });
    var To = (function () {
      function t(t) {
        if (
          ((this.shards = []),
          (this.previousShardIndex = 0),
          null != t &&
            (t instanceof Array || (t = [t]),
            0 !==
              (t = t.map(function (t) {
                return gr(t) ? t.buffer : t;
              })).length))
        ) {
          this.bufferUniformSize = t[0].byteLength;
          for (var e = 0, n = 0; n < t.length; n++) {
            var r = t[n];
            n !== t.length - 1 &&
              r.byteLength !== this.bufferUniformSize &&
              (this.bufferUniformSize = void 0);
            var i = e + r.byteLength;
            this.shards.push({ buffer: r, start: e, end: i }), (e = i);
          }
          0 === this.shards.length && (this.byteLength = 0),
            (this.byteLength = this.shards[this.shards.length - 1].end);
        }
      }
      return (
        (t.join = function (e) {
          return new t(e).slice();
        }),
        (t.prototype.slice = function (t, e) {
          if (
            (void 0 === t && (t = 0),
            void 0 === e && (e = this.byteLength),
            0 === this.shards.length)
          )
            return new ArrayBuffer(0);
          if (
            ((t = isNaN(Number(t)) ? 0 : t),
            (e = isNaN(Number(e)) ? 0 : e),
            (t = Math.max(0, t)),
            (e = Math.min(this.byteLength, e)) <= t)
          )
            return new ArrayBuffer(0);
          var n = this.findShardForByte(t);
          if (-1 === n)
            throw new Error("Could not find start shard for byte ".concat(t));
          for (
            var r = new ArrayBuffer(e - t), i = new Uint8Array(r), a = 0, o = n;
            o < this.shards.length;
            o++
          ) {
            var s = this.shards[o],
              u = t + a - s.start,
              l = a,
              c = Math.min(e, s.end) - s.start,
              h = new Uint8Array(s.buffer, u, c - u);
            if ((i.set(h, l), (a += h.length), e < s.end)) break;
          }
          return r;
        }),
        (t.prototype.findShardForByte = function (t) {
          if (0 === this.shards.length || t < 0 || t >= this.byteLength)
            return -1;
          if (null != this.bufferUniformSize)
            return (
              (this.previousShardIndex = Math.floor(t / this.bufferUniformSize)),
              this.previousShardIndex
            );
          function e(e) {
            return t < e.start ? -1 : t >= e.end ? 1 : 0;
          }
          if (0 === e(this.shards[this.previousShardIndex]))
            return this.previousShardIndex;
          var n = (function (t, e) {
            var n = 0,
              r = t.length;
            for (; n <= r; ) {
              var i = Math.floor((r - n) / 2) + n,
                a = e(t[i]);
              if (0 === a) return i;
              a < 0 ? (r = i) : (n = i + 1);
            }
            return -1;
          })(this.shards, e);
          return -1 === n
            ? -1
            : ((this.previousShardIndex = n), this.previousShardIndex);
        }),
        t
      );
    })();
    var Co =
      "undefined" != typeof Buffer &&
      ("undefined" == typeof Blob ||
        "undefined" == typeof atob ||
        "undefined" == typeof btoa);
    function Fo(t) {
      return Co ? Buffer.byteLength(t, "utf8") : new Blob([t]).size;
    }
    function Do(t, e) {
      var n = {
        modelTopology: t.modelTopology,
        format: t.format,
        generatedBy: t.generatedBy,
        convertedBy: t.convertedBy,
        weightsManifest: e,
      };
      return (
        null != t.signature && (n.signature = t.signature),
        null != t.userDefinedMetadata &&
          (n.userDefinedMetadata = t.userDefinedMetadata),
        null != t.modelInitializer && (n.modelInitializer = t.modelInitializer),
        null != t.initializerSignature &&
          (n.initializerSignature = t.initializerSignature),
        null != t.trainingConfig && (n.trainingConfig = t.trainingConfig),
        n
      );
    }
    function _o(t, e, n) {
      var r = {
        modelTopology: t.modelTopology,
        format: t.format,
        generatedBy: t.generatedBy,
        convertedBy: t.convertedBy,
      };
      if (
        (null != t.trainingConfig && (r.trainingConfig = t.trainingConfig),
        null != t.weightsManifest)
      ) {
        if (!e)
          throw new Error(
            "modelJSON has weightsManifest but weightSpecs is null",
          );
        if (!n)
          throw new Error("modelJSON has weightsManifest but weightData is null");
        (r.weightSpecs = e), (r.weightData = n);
      }
      return (
        null != t.signature && (r.signature = t.signature),
        null != t.userDefinedMetadata &&
          (r.userDefinedMetadata = t.userDefinedMetadata),
        null != t.modelInitializer && (r.modelInitializer = t.modelInitializer),
        null != t.initializerSignature &&
          (r.initializerSignature = t.initializerSignature),
        r
      );
    }
    function Lo(t, e) {
      return s(this, void 0, void 0, function () {
        var n, r, i;
        return u(this, function (a) {
          switch (a.label) {
            case 0:
              return null == t.weightsManifest
                ? [3, 2]
                : [4, e(t.weightsManifest)];
            case 1:
              (i = c.apply(void 0, [a.sent(), 2])),
                (n = i[0]),
                (r = i[1]),
                (a.label = 2);
            case 2:
              return [2, _o(t, n, r)];
          }
        });
      });
    }
    function Ro(t) {
      if (t.modelTopology instanceof ArrayBuffer)
        throw new Error("Expected JSON model topology, received ArrayBuffer.");
      return {
        dateSaved: new Date(),
        modelTopologyType: "JSON",
        modelTopologyBytes:
          null == t.modelTopology ? 0 : Fo(JSON.stringify(t.modelTopology)),
        weightSpecsBytes:
          null == t.weightSpecs ? 0 : Fo(JSON.stringify(t.weightSpecs)),
        weightDataBytes:
          null == t.weightData ? 0 : new To(t.weightData).byteLength,
      };
    }
    function Oo(t) {
      var e,
        n,
        r = [];
      try {
        for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          r.push.apply(r, h([], c(o.weights), !1));
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return r;
    }
    var Mo = (function () {
        function t() {
          (this.saveRouters = []), (this.loadRouters = []);
        }
        return (
          (t.getInstance = function () {
            return null == t.instance && (t.instance = new t()), t.instance;
          }),
          (t.registerSaveRouter = function (e) {
            t.getInstance().saveRouters.push(e);
          }),
          (t.registerLoadRouter = function (e) {
            t.getInstance().loadRouters.push(e);
          }),
          (t.getSaveHandlers = function (e) {
            return t.getHandlers(e, "save");
          }),
          (t.getLoadHandlers = function (e, n) {
            return t.getHandlers(e, "load", n);
          }),
          (t.getHandlers = function (e, n, r) {
            var i = [];
            return (
              ("load" === n
                ? t.getInstance().loadRouters
                : t.getInstance().saveRouters
              ).forEach(function (t) {
                var n = t(e, r);
                null !== n && i.push(n);
              }),
              i
            );
          }),
          t
        );
      })(),
      Bo = "models_store",
      Po = "model_info_store";
    var jo = (function () {
      function t(t) {
        if (
          ((this.indexedDB = (function () {
            if (!Nn().getBool("IS_BROWSER"))
              throw new Error(
                "Failed to obtain IndexedDB factory because the current environmentis not a web browser.",
              );
            var t = "undefined" == typeof window ? self : window,
              e =
                t.indexedDB ||
                t.mozIndexedDB ||
                t.webkitIndexedDB ||
                t.msIndexedDB ||
                t.shimIndexedDB;
            if (null == e)
              throw new Error(
                "The current browser does not appear to support IndexedDB.",
              );
            return e;
          })()),
          null == t || !t)
        )
          throw new Error(
            "For IndexedDB, modelPath must not be null, undefined or empty.",
          );
        this.modelPath = t;
      }
      return (
        (t.prototype.save = function (t) {
          return s(this, void 0, void 0, function () {
            return u(this, function (e) {
              if (t.modelTopology instanceof ArrayBuffer)
                throw new Error(
                  "BrowserLocalStorage.save() does not support saving model topology in binary formats yet.",
                );
              return [2, this.databaseAction(this.modelPath, t)];
            });
          });
        }),
        (t.prototype.load = function () {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              return [2, this.databaseAction(this.modelPath)];
            });
          });
        }),
        (t.prototype.databaseAction = function (t, e) {
          var n = this;
          return new Promise(function (t, r) {
            var i = n.indexedDB.open("tensorflowjs", 1);
            (i.onupgradeneeded = function () {
              return (function (t) {
                var e = t.result;
                e.createObjectStore(Bo, { keyPath: "modelPath" }),
                  e.createObjectStore(Po, { keyPath: "modelPath" });
              })(i);
            }),
              (i.onsuccess = function () {
                var a = i.result;
                if (null == e) {
                  var o = a.transaction(Bo, "readonly"),
                    s = o.objectStore(Bo).get(n.modelPath);
                  (s.onsuccess = function () {
                    if (null == s.result)
                      return (
                        a.close(),
                        r(
                          new Error(
                            "Cannot find model with path '".concat(
                              n.modelPath,
                              "' ",
                            ) + "in IndexedDB.",
                          ),
                        )
                      );
                    t(s.result.modelArtifacts);
                  }),
                    (s.onerror = function (t) {
                      return a.close(), r(s.error);
                    }),
                    (o.oncomplete = function () {
                      return a.close();
                    });
                } else {
                  e.weightData = To.join(e.weightData);
                  var u,
                    l,
                    c = Ro(e),
                    h = a.transaction(Po, "readwrite"),
                    p = h.objectStore(Po);
                  try {
                    u = p.put({ modelPath: n.modelPath, modelArtifactsInfo: c });
                  } catch (t) {
                    return r(t);
                  }
                  (u.onsuccess = function () {
                    var i,
                      o = (l = a.transaction(Bo, "readwrite")).objectStore(Bo);
                    try {
                      i = o.put({
                        modelPath: n.modelPath,
                        modelArtifacts: e,
                        modelArtifactsInfo: c,
                      });
                    } catch (t) {
                      return r(t);
                    }
                    (i.onsuccess = function () {
                      return t({ modelArtifactsInfo: c });
                    }),
                      (i.onerror = function (t) {
                        var e = (p = h.objectStore(Po)).delete(n.modelPath);
                        (e.onsuccess = function () {
                          return a.close(), r(i.error);
                        }),
                          (e.onerror = function (t) {
                            return a.close(), r(i.error);
                          });
                      });
                  }),
                    (u.onerror = function (t) {
                      return a.close(), r(u.error);
                    }),
                    (h.oncomplete = function () {
                      null == l
                        ? a.close()
                        : (l.oncomplete = function () {
                            return a.close();
                          });
                    });
                }
              }),
              (i.onerror = function (t) {
                return r(i.error);
              });
          });
        }),
        t
      );
    })();
    jo.URL_SCHEME = "indexeddb://";
    var Uo = function (t) {
      return Nn().getBool("IS_BROWSER") &&
        !Array.isArray(t) &&
        t.startsWith(jo.URL_SCHEME)
        ? ((e = t.slice(jo.URL_SCHEME.length)), new jo(e))
        : null;
      var e;
    };
    Mo.registerSaveRouter(Uo), Mo.registerLoadRouter(Uo);
    var Wo = "/",
      Vo = "tensorflowjs_models",
      qo = "info",
      Go = "model_topology",
      Ko = "weight_specs",
      Ho = "weight_data",
      Jo = "model_metadata";
    var Zo = (function () {
      function t(t) {
        if (
          !Nn().getBool("IS_BROWSER") ||
          "undefined" == typeof window ||
          "undefined" == typeof window.localStorage
        )
          throw new Error(
            "The current environment does not support local storage.",
          );
        if (((this.LS = window.localStorage), null == t || !t))
          throw new Error(
            "For local storage, modelPath must not be null, undefined or empty.",
          );
        var e;
        (this.modelPath = t),
          (this.keys =
            ((e = this.modelPath),
            {
              info: [Vo, e, qo].join(Wo),
              topology: [Vo, e, Go].join(Wo),
              weightSpecs: [Vo, e, Ko].join(Wo),
              weightData: [Vo, e, Ho].join(Wo),
              modelMetadata: [Vo, e, Jo].join(Wo),
            }));
      }
      return (
        (t.prototype.save = function (t) {
          return s(this, void 0, void 0, function () {
            var e, n, r, i, a;
            return u(this, function (o) {
              if (t.modelTopology instanceof ArrayBuffer)
                throw new Error(
                  "BrowserLocalStorage.save() does not support saving model topology in binary formats yet.",
                );
              (e = JSON.stringify(t.modelTopology)),
                (n = JSON.stringify(t.weightSpecs)),
                (r = Ro(t)),
                (i = To.join(t.weightData));
              try {
                return (
                  this.LS.setItem(this.keys.info, JSON.stringify(r)),
                  this.LS.setItem(this.keys.topology, e),
                  this.LS.setItem(this.keys.weightSpecs, n),
                  this.LS.setItem(
                    this.keys.weightData,
                    (function (t) {
                      if (Co) return Buffer.from(t).toString("base64");
                      for (
                        var e = new Uint8Array(t), n = "", r = 0, i = e.length;
                        r < i;
                        r++
                      )
                        n += String.fromCharCode(e[r]);
                      return btoa(n);
                    })(i),
                  ),
                  (a = {
                    format: t.format,
                    generatedBy: t.generatedBy,
                    convertedBy: t.convertedBy,
                    signature: null != t.signature ? t.signature : void 0,
                    userDefinedMetadata:
                      null != t.userDefinedMetadata
                        ? t.userDefinedMetadata
                        : void 0,
                    modelInitializer:
                      null != t.modelInitializer ? t.modelInitializer : void 0,
                    initializerSignature:
                      null != t.initializerSignature
                        ? t.initializerSignature
                        : void 0,
                    trainingConfig:
                      null != t.trainingConfig ? t.trainingConfig : void 0,
                  }),
                  this.LS.setItem(this.keys.modelMetadata, JSON.stringify(a)),
                  [2, { modelArtifactsInfo: r }]
                );
              } catch (t) {
                throw (
                  ((function (t) {
                    var e, n;
                    try {
                      for (
                        var r = l(Object.values(t)), i = r.next();
                        !i.done;
                        i = r.next()
                      ) {
                        var a = i.value;
                        window.localStorage.removeItem(a);
                      }
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        i && !i.done && (n = r.return) && n.call(r);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  })(this.keys),
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
        (t.prototype.load = function () {
          return s(this, void 0, void 0, function () {
            var t, e, n, r, i, a, o;
            return u(this, function (s) {
              if (null == (t = JSON.parse(this.LS.getItem(this.keys.info))))
                throw new Error(
                  "In local storage, there is no model with name '".concat(
                    this.modelPath,
                    "'",
                  ),
                );
              if ("JSON" !== t.modelTopologyType)
                throw new Error(
                  "BrowserLocalStorage does not support loading non-JSON model topology yet.",
                );
              if (
                ((e = {}),
                null == (n = JSON.parse(this.LS.getItem(this.keys.topology))))
              )
                throw new Error(
                  "In local storage, the topology of model '".concat(
                    this.modelPath,
                    "' ",
                  ) + "is missing.",
                );
              if (
                ((e.modelTopology = n),
                null == (r = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
              )
                throw new Error(
                  "In local storage, the weight specs of model '".concat(
                    this.modelPath,
                    "' ",
                  ) + "are missing.",
                );
              if (
                ((e.weightSpecs = r),
                null != (i = this.LS.getItem(this.keys.modelMetadata)) &&
                  ((a = JSON.parse(i)),
                  (e.format = a.format),
                  (e.generatedBy = a.generatedBy),
                  (e.convertedBy = a.convertedBy),
                  null != a.signature && (e.signature = a.signature),
                  null != a.userDefinedMetadata &&
                    (e.userDefinedMetadata = a.userDefinedMetadata),
                  null != a.modelInitializer &&
                    (e.modelInitializer = a.modelInitializer),
                  null != a.initializerSignature &&
                    (e.initializerSignature = a.initializerSignature),
                  null != a.trainingConfig &&
                    (e.trainingConfig = a.trainingConfig)),
                null == (o = this.LS.getItem(this.keys.weightData)))
              )
                throw new Error(
                  "In local storage, the binary weight values of model " +
                    "'".concat(this.modelPath, "' are missing."),
                );
              return (
                (e.weightData = (function (t) {
                  if (Co) {
                    var e = Buffer.from(t, "base64");
                    return e.buffer.slice(
                      e.byteOffset,
                      e.byteOffset + e.byteLength,
                    );
                  }
                  for (
                    var n = atob(t), r = new Uint8Array(n.length), i = 0;
                    i < n.length;
                    ++i
                  )
                    r.set([n.charCodeAt(i)], i);
                  return r.buffer;
                })(o)),
                [2, e]
              );
            });
          });
        }),
        t
      );
    })();
    Zo.URL_SCHEME = "localstorage://";
    var Yo = function (t) {
      return Nn().getBool("IS_BROWSER") &&
        !Array.isArray(t) &&
        t.startsWith(Zo.URL_SCHEME)
        ? ((e = t.slice(Zo.URL_SCHEME.length)), new Zo(e))
        : null;
      var e;
    };
    Mo.registerSaveRouter(Yo), Mo.registerLoadRouter(Yo);
    function Xo(t) {
      return new Promise(function (t) {
        return setTimeout(t);
      }).then(t);
    }
    var $o = (function () {
      function t(e) {
        if (!Nn().getBool("IS_BROWSER"))
          throw new Error(
            "browserDownloads() cannot proceed because the current environment is not a browser.",
          );
        e.startsWith(t.URL_SCHEME) && (e = e.slice(t.URL_SCHEME.length)),
          (null != e && 0 !== e.length) || (e = "model"),
          (this.modelJsonFileName = e + ".json"),
          (this.weightDataFileName = e + ".weights.bin");
      }
      return (
        (t.prototype.save = function (t) {
          return s(this, void 0, void 0, function () {
            var e, n, r, i, a, o, s;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  if ("undefined" == typeof document)
                    throw new Error(
                      "Browser downloads are not supported in this environment since `document` is not present",
                    );
                  if (
                    ((e = To.join(t.weightData)),
                    (n = window.URL.createObjectURL(
                      new Blob([e], { type: "application/octet-stream" }),
                    )),
                    !(t.modelTopology instanceof ArrayBuffer))
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
                        weights: t.weightSpecs,
                      },
                    ]),
                    (i = Do(t, r)),
                    (a = window.URL.createObjectURL(
                      new Blob([JSON.stringify(i)], { type: "application/json" }),
                    )),
                    ((o =
                      null == this.modelJsonAnchor
                        ? document.createElement("a")
                        : this.modelJsonAnchor).download =
                      this.modelJsonFileName),
                    (o.href = a),
                    [
                      4,
                      Xo(function () {
                        return o.dispatchEvent(new MouseEvent("click"));
                      }),
                    ]
                  );
                case 2:
                  return (
                    u.sent(),
                    null == t.weightData
                      ? [3, 4]
                      : (((s =
                          null == this.weightDataAnchor
                            ? document.createElement("a")
                            : this.weightDataAnchor).download =
                          this.weightDataFileName),
                        (s.href = n),
                        [
                          4,
                          Xo(function () {
                            return s.dispatchEvent(new MouseEvent("click"));
                          }),
                        ])
                  );
                case 3:
                  u.sent(), (u.label = 4);
                case 4:
                  return [2, { modelArtifactsInfo: Ro(t) }];
              }
            });
          });
        }),
        t
      );
    })();
    $o.URL_SCHEME = "downloads://";
    function Qo(t, e, n, r) {
      !(function (t) {
        nn(null != t && Array.isArray(t) && t.length > 0, function () {
          return "promises must be a none empty array";
        });
      })(t),
        (function (t, e) {
          nn(t >= 0 && t <= 1, function () {
            return (
              "Progress fraction must be in range [0, 1], but " +
              "got startFraction ".concat(t)
            );
          }),
            nn(e >= 0 && e <= 1, function () {
              return (
                "Progress fraction must be in range [0, 1], but " +
                "got endFraction ".concat(e)
              );
            }),
            nn(e >= t, function () {
              return (
                "startFraction must be no more than endFraction, but " +
                "got startFraction ".concat(t, " and endFraction ") +
                "".concat(e)
              );
            });
        })((n = null == n ? 0 : n), (r = null == r ? 1 : r));
      var i = 0;
      return Promise.all(
        t.map(function (a) {
          return (
            a.then(function (a) {
              var o = n + (++i / t.length) * (r - n);
              return e(o), a;
            }),
            a
          );
        }),
      );
    }
    function ts(t, e) {
      return s(this, void 0, void 0, function () {
        var n, r, i, a, o, s, l, c, h;
        return u(this, function (u) {
          switch (u.label) {
            case 0:
              return (
                null == e && (e = {}),
                (n = null == e.fetchFunc ? Nn().platform.fetch : e.fetchFunc),
                (r = t.map(function (t) {
                  return n(t, e.requestInit, { isBinary: !0 });
                })),
                (i = 0),
                (a = 0.5),
                null != e.onProgress ? [3, 2] : [4, Promise.all(r)]
              );
            case 1:
              return (o = u.sent()), [3, 4];
            case 2:
              return [4, Qo(r, e.onProgress, i, a)];
            case 3:
              (o = u.sent()), (u.label = 4);
            case 4:
              return (
                (s = o.map(function (t) {
                  return t.arrayBuffer();
                })),
                (l = 0.5),
                (c = 1),
                null != e.onProgress ? [3, 6] : [4, Promise.all(s)]
              );
            case 5:
              return (h = u.sent()), [3, 8];
            case 6:
              return [4, Qo(s, e.onProgress, l, c)];
            case 7:
              (h = u.sent()), (u.label = 8);
            case 8:
              return [2, h];
          }
        });
      });
    }
    Mo.registerSaveRouter(function (t) {
      return Nn().getBool("IS_BROWSER") &&
        !Array.isArray(t) &&
        t.startsWith($o.URL_SCHEME)
        ? (function (t) {
            void 0 === t && (t = "model");
            return new $o(t);
          })(t.slice($o.URL_SCHEME.length))
        : null;
    });
    var es = (function () {
      function t(t, e) {
        if (
          ((this.DEFAULT_METHOD = "POST"),
          null == e && (e = {}),
          (this.weightPathPrefix = e.weightPathPrefix),
          (this.weightUrlConverter = e.weightUrlConverter),
          null != e.fetchFunc
            ? (nn("function" == typeof e.fetchFunc, function () {
                return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)";
              }),
              (this.fetch = e.fetchFunc))
            : (this.fetch = Nn().platform.fetch),
          nn(null != t && t.length > 0, function () {
            return "URL path for http must not be null, undefined or empty.";
          }),
          Array.isArray(t) &&
            nn(2 === t.length, function () {
              return (
                "URL paths for http must have a length of 2, " +
                "(actual length is ".concat(t.length, ").")
              );
            }),
          (this.path = t),
          null != e.requestInit && null != e.requestInit.body)
        )
          throw new Error(
            "requestInit is expected to have no pre-existing body, but has one.",
          );
        (this.requestInit = e.requestInit || {}), (this.loadOptions = e);
      }
      return (
        (t.prototype.save = function (t) {
          return s(this, void 0, void 0, function () {
            var e, n, r, i, a;
            return u(this, function (o) {
              switch (o.label) {
                case 0:
                  if (t.modelTopology instanceof ArrayBuffer)
                    throw new Error(
                      "BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.",
                    );
                  return (
                    ((e = Object.assign(
                      { method: this.DEFAULT_METHOD },
                      this.requestInit,
                    )).body = new FormData()),
                    (n = [
                      { paths: ["./model.weights.bin"], weights: t.weightSpecs },
                    ]),
                    (r = Do(t, n)),
                    e.body.append(
                      "model.json",
                      new Blob([JSON.stringify(r)], { type: "application/json" }),
                      "model.json",
                    ),
                    null != t.weightData &&
                      ((i = To.join(t.weightData)),
                      e.body.append(
                        "model.weights.bin",
                        new Blob([i], { type: "application/octet-stream" }),
                        "model.weights.bin",
                      )),
                    [4, this.fetch(this.path, e)]
                  );
                case 1:
                  if ((a = o.sent()).ok)
                    return [2, { modelArtifactsInfo: Ro(t), responses: [a] }];
                  throw new Error(
                    "BrowserHTTPRequest.save() failed due to HTTP response status " +
                      "".concat(a.status, "."),
                  );
              }
            });
          });
        }),
        (t.prototype.loadModelJSON = function () {
          return s(this, void 0, void 0, function () {
            var t, e, n, r, i;
            return u(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, this.fetch(this.path, this.requestInit)];
                case 1:
                  if (!(t = a.sent()).ok)
                    throw new Error(
                      "Request to ".concat(
                        this.path,
                        " failed with status code ",
                      ) +
                        "".concat(
                          t.status,
                          ". Please verify this URL points to ",
                        ) +
                        "the model JSON of the model to load.",
                    );
                  a.label = 2;
                case 2:
                  return a.trys.push([2, 4, , 5]), [4, t.json()];
                case 3:
                  return (e = a.sent()), [3, 5];
                case 4:
                  throw (
                    (a.sent(),
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
                    ((r = e.modelTopology),
                    (i = e.weightsManifest),
                    null == r && null == i)
                  )
                    throw new Error(
                      "The JSON from HTTP path ".concat(
                        this.path,
                        " contains neither model ",
                      ) + "topology or manifest for weights.",
                    );
                  return [2, e];
              }
            });
          });
        }),
        (t.prototype.load = function () {
          return s(this, void 0, void 0, function () {
            var t = this;
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.loadOptions.streamWeights
                    ? [2, this.loadStream()]
                    : [4, this.loadModelJSON()];
                case 1:
                  return [
                    2,
                    Lo(e.sent(), function (e) {
                      return t.loadWeights(e);
                    }),
                  ];
              }
            });
          });
        }),
        (t.prototype.loadStream = function () {
          return s(this, void 0, void 0, function () {
            var t,
              e,
              n,
              r,
              i = this;
            return u(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, this.loadModelJSON()];
                case 1:
                  return (
                    (t = a.sent()), [4, this.getWeightUrls(t.weightsManifest)]
                  );
                case 2:
                  return (
                    (e = a.sent()),
                    (n = Oo(t.weightsManifest)),
                    (r = function () {
                      return (function (t, e) {
                        var n,
                          r,
                          i = this,
                          a =
                            null == e.fetchFunc
                              ? Nn().platform.fetch
                              : e.fetchFunc,
                          o = 0;
                        return (
                          null === (n = e.onProgress) ||
                            void 0 === n ||
                            n.call(e, 0),
                          new ReadableStream({
                            pull: function (n) {
                              return s(i, void 0, void 0, function () {
                                var i, s, l, c, h;
                                return u(this, function (u) {
                                  switch (u.label) {
                                    case 0:
                                      return o < t.length
                                        ? r
                                          ? [3, 2]
                                          : [
                                              4,
                                              a(t[o], e.requestInit, {
                                                isBinary: !0,
                                              }),
                                            ]
                                        : [3, 4];
                                    case 1:
                                      (s = u.sent().body),
                                        (r = s.getReader()),
                                        (u.label = 2);
                                    case 2:
                                      return [4, r.read()];
                                    case 3:
                                      return (
                                        (l = u.sent()),
                                        (c = l.done),
                                        (h = l.value),
                                        c
                                          ? (o++,
                                            (r = void 0),
                                            null === (i = e.onProgress) ||
                                              void 0 === i ||
                                              i.call(e, o / t.length),
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
                      })(e, i.loadOptions);
                    }),
                    [
                      2,
                      Object.assign(Object.assign({}, t), {
                        weightSpecs: n,
                        getWeightStream: r,
                      }),
                    ]
                  );
              }
            });
          });
        }),
        (t.prototype.getWeightUrls = function (t) {
          return s(this, void 0, void 0, function () {
            var e, n, r, i, a, o, s, p, f, d, g, v, y, m, b, w, k, x, S, N, I;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  (e = Array.isArray(this.path) ? this.path[1] : this.path),
                    (n = c(
                      (function (t) {
                        var e = t.lastIndexOf("/"),
                          n = t.lastIndexOf("?"),
                          r = t.substring(0, e),
                          i = n > e ? t.substring(n) : "";
                        return [r + "/", i];
                      })(e),
                      2,
                    )),
                    (r = n[0]),
                    (i = n[1]),
                    (a = this.weightPathPrefix || r),
                    (o = []),
                    (s = []);
                  try {
                    for (p = l(t), f = p.next(); !f.done; f = p.next()) {
                      d = f.value;
                      try {
                        for (
                          N = void 0, g = l(d.paths), v = g.next();
                          !v.done;
                          v = g.next()
                        )
                          (y = v.value),
                            null != this.weightUrlConverter
                              ? s.push(this.weightUrlConverter(y))
                              : o.push(a + y + i);
                      } catch (t) {
                        N = { error: t };
                      } finally {
                        try {
                          v && !v.done && (I = g.return) && I.call(g);
                        } finally {
                          if (N) throw N.error;
                        }
                      }
                    }
                  } catch (t) {
                    x = { error: t };
                  } finally {
                    try {
                      f && !f.done && (S = p.return) && S.call(p);
                    } finally {
                      if (x) throw x.error;
                    }
                  }
                  return this.weightUrlConverter
                    ? ((b = (m = o.push).apply),
                      (w = [o]),
                      (k = [[]]),
                      [4, Promise.all(s)])
                    : [3, 2];
                case 1:
                  b.apply(
                    m,
                    w.concat([
                      h.apply(
                        void 0,
                        k.concat([c.apply(void 0, [u.sent()]), !1]),
                      ),
                    ]),
                  ),
                    (u.label = 2);
                case 2:
                  return [2, o];
              }
            });
          });
        }),
        (t.prototype.loadWeights = function (t) {
          return s(this, void 0, void 0, function () {
            var e, n, r;
            return u(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.getWeightUrls(t)];
                case 1:
                  return (
                    (e = i.sent()), (n = Oo(t)), [4, ts(e, this.loadOptions)]
                  );
                case 2:
                  return (r = i.sent()), [2, [n, r]];
              }
            });
          });
        }),
        t
      );
    })();
    function ns(t) {
      return null != t.match(es.URL_SCHEME_REGEX);
    }
    es.URL_SCHEME_REGEX = /^https?:\/\//;
    var rs = function (t, e) {
      if ("undefined" == typeof fetch && (null == e || null == e.fetchFunc))
        return null;
      return (
        Array.isArray(t)
          ? t.every(function (t) {
              return ns(t);
            })
          : ns(t)
      )
        ? (function (t, e) {
            return new es(t, e);
          })(t, e)
        : null;
    };
    function is(t, e, n) {
      if (e.rank < 1)
        throw new Error(
          "tf.scatterND() expects the indices to be rank 1 or higher," +
            " but the rank was ".concat(e.rank, "."),
        );
      if (t.rank < 1)
        throw new Error(
          "tf.scatterND() expects the updates to be rank 1 or higher," +
            " but the rank was ".concat(t.rank, "."),
        );
      if ("int32" !== e.dtype)
        throw new Error(
          "The dtype of 'indices' should be int32, but got dtype: ".concat(
            e.dtype,
          ),
        );
      if (n.length < 1)
        throw new Error(
          "Output rank must be greater or equal to 1, but got shape: ".concat(n),
        );
      if (0 === n.length) {
        if (0 === e.size)
          throw new Error(
            "Indices specified for empty output. indices shape: ".concat(e.shape),
          );
        if (0 === t.size)
          throw new Error(
            "Updates specified for empty output. updates shape: ".concat(t.shape),
          );
      }
      !(function (t, e, n) {
        var r = e.rank > 1 ? e.shape[e.rank - 1] : 1,
          i = e.rank > 1 ? e.rank - 1 : 1,
          a =
            "Must have updates.shape = indices.shape[:batchDim] + " +
            "shape[sliceDim:], got updates.shape: ".concat(n.shape) +
            ", indices.shape: ".concat(e.shape, ", shape: ").concat(t) +
            ", sliceDim: ".concat(r, ", and batchDim: ").concat(i, ".");
        if (n.rank < i) throw new Error(a + " update.rank < ".concat(i, ". "));
        if (t.length < r + (n.rank - i))
          throw new Error(a + " Output shape length < ".concat(r + (n.rank - i)));
        if (n.rank !== i + t.length - r)
          throw new Error(a + " update.rank != ".concat(i + t.length - r));
        for (var o = 0; o < i; ++o)
          if (n.shape[o] !== e.shape[o])
            throw new Error(
              a +
                " updates.shape["
                  .concat(o, "] (")
                  .concat(n.shape[o], ") != indices.shape[")
                  .concat(o, "] (")
                  .concat(e.shape[o], ")."),
            );
        for (o = 0; o < n.rank - i; ++o)
          if (n.shape[o + i] !== t[o + r])
            throw new Error(
              a +
                " updates.shape["
                  .concat(o + i, "] (")
                  .concat(n.shape[o + i], ") != shape[")
                  .concat(o + i, "] (")
                  .concat(t[o + i], ")"),
            );
      })(n, e, t);
    }
    Mo.registerSaveRouter(rs), Mo.registerLoadRouter(rs);
    var as = (function () {
      function t() {}
      return (
        (t.prototype.getClassName = function () {
          return this.constructor.className;
        }),
        (t.fromConfig = function (t, e) {
          return new t(e);
        }),
        t
      );
    })();
    var os = Yr({
      abs_: function (t) {
        var e = Jr(t, "x", "abs");
        if ("complex64" === e.dtype) {
          var n = { x: e };
          return Vr.runKernel(ke, n);
        }
        return (n = { x: e }), Vr.runKernel("Abs", n);
      },
    });
    var ss = Yr({
      concat_: function (t, e) {
        void 0 === e && (e = 0),
          nn(t.length >= 1, function () {
            return "Pass at least one tensor to concat";
          });
        var n = Zr(t, "tensors", "concat", "string_or_numeric");
        if (
          ("complex64" === n[0].dtype &&
            n.forEach(function (t) {
              if ("complex64" !== t.dtype)
                throw new Error(
                  "Cannot concatenate complex64 tensors with a tensor\n          with dtype ".concat(
                    t.dtype,
                    ". ",
                  ),
                );
            }),
          1 === n.length)
        )
          return qi(n[0]);
        var r = n,
          i = { axis: e };
        return Vr.runKernel(xe, r, i);
      },
    });
    var us = Yr({
      sigmoid_: function (t) {
        var e = { x: Jr(t, "x", "sigmoid", "float32") };
        return Vr.runKernel(qe, e);
      },
    });
    var ls = Yr({
      batchToSpaceND_: function (t, e, n) {
        var r = Jr(t, "x", "batchToSpaceND"),
          i = e.reduce(function (t, e) {
            return t * e;
          });
        nn(r.rank >= 1 + e.length, function () {
          return "input rank is "
            .concat(r.rank, " but should be > than blockShape.length ")
            .concat(e.length);
        }),
          nn(n.length === e.length, function () {
            return "crops.length is "
              .concat(n.length, " but should be equal to blockShape.length  ")
              .concat(e.length);
          }),
          nn(r.shape[0] % i == 0, function () {
            return (
              "input tensor batch is ".concat(
                r.shape[0],
                " but is not divisible by the product of ",
              ) +
              "the elements of blockShape "
                .concat(e.join(" * "), " === ")
                .concat(i)
            );
          });
        var a = { x: r },
          o = { blockShape: e, crops: n };
        return Vr.runKernel(be, a, o);
      },
    });
    var cs = Yr({
      cos_: function (t) {
        var e = { x: Jr(t, "x", "cos", "float32") };
        return Vr.runKernel("Cos", e);
      },
    });
    var hs = Yr({
      cosh_: function (t) {
        var e = { x: Jr(t, "x", "cosh", "float32") };
        return Vr.runKernel(Ie, e);
      },
    });
    var ps = Yr({
      cumprod_: function (t, e, n, r) {
        void 0 === e && (e = 0),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1);
        var i = { x: Jr(t, "x", "cumprod") },
          a = { axis: e, exclusive: n, reverse: r };
        return Vr.runKernel("Cumprod", i, a);
      },
    });
    var fs = Yr({
      expandDims_: function (t, e) {
        void 0 === e && (e = 0);
        var n = Jr(t, "x", "expandDims", "string_or_numeric");
        nn(e <= n.rank, function () {
          return "Axis must be <= rank of the tensor";
        });
        var r = { input: n },
          i = { dim: e };
        return Vr.runKernel(Ee, r, i);
      },
    });
    var ds = Yr({
      gather_: function (t, e, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0);
        var i = {
            x: Jr(t, "x", "gather"),
            indices: Jr(e, "indices", "gather", "int32"),
          },
          a = { axis: n, batchDims: r };
        return Vr.runKernel(Fe, i, a);
      },
    });
    var gs = Yr({
      logicalNot_: function (t) {
        var e = { x: Jr(t, "x", "logicalNot", "bool") };
        return Vr.runKernel("LogicalNot", e);
      },
    });
    var vs = Yr({
      maximum_: function (t, e) {
        var n,
          r = Jr(t, "a", "maximum"),
          i = Jr(e, "b", "maximum");
        (r = (n = c(Mr(r, i), 2))[0]),
          (i = n[1]),
          "bool" === r.dtype && ((r = Xr(r, "int32")), (i = Xr(i, "int32"))),
          hi(r.shape, i.shape);
        var a = { a: r, b: i };
        return Vr.runKernel(Le, a);
      },
    });
    var ys = Yr({
        pad_: function (t, e, n) {
          void 0 === n && (n = 0);
          var r = Jr(t, "x", "pad");
          if (0 === r.rank)
            throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
          var i = { paddings: e, constantValue: n },
            a = { x: r };
          return Vr.runKernel(Me, a, i);
        },
      }),
      ms = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e,
            n = this,
            r =
              ((e = 4022871197),
              function (t) {
                t = String(t);
                for (var n = 0; n < t.length; n++) {
                  var r = 0.02519603282416938 * (e += t.charCodeAt(n));
                  (r -= e = r >>> 0),
                    (e = (r *= e) >>> 0),
                    (e += 4294967296 * (r -= e));
                }
                return 2.3283064365386963e-10 * (e >>> 0);
              });
          (n.next = function () {
            var t = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
            return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = t - (n.c = 0 | t));
          }),
            (n.c = 1),
            (n.s0 = r(" ")),
            (n.s1 = r(" ")),
            (n.s2 = r(" ")),
            (n.s0 -= r(t)),
            n.s0 < 0 && (n.s0 += 1),
            (n.s1 -= r(t)),
            n.s1 < 0 && (n.s1 += 1),
            (n.s2 -= r(t)),
            n.s2 < 0 && (n.s2 += 1),
            (r = null);
        }
        function i(t, e) {
          return (e.c = t.c), (e.s0 = t.s0), (e.s1 = t.s1), (e.s2 = t.s2), e;
        }
        function a(t, e) {
          var n = new r(t),
            a = e && e.state,
            o = n.next;
          return (
            (o.int32 = function () {
              return (4294967296 * n.next()) | 0;
            }),
            (o.double = function () {
              return o() + 11102230246251565e-32 * ((2097152 * o()) | 0);
            }),
            (o.quick = o),
            a &&
              ("object" == typeof a && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.alea = a);
      })(0, t, !1);
    })(ms);
    var bs = ms.exports,
      ws = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e = this,
            n = "";
          (e.x = 0),
            (e.y = 0),
            (e.z = 0),
            (e.w = 0),
            (e.next = function () {
              var t = e.x ^ (e.x << 11);
              return (
                (e.x = e.y),
                (e.y = e.z),
                (e.z = e.w),
                (e.w ^= (e.w >>> 19) ^ t ^ (t >>> 8))
              );
            }),
            t === (0 | t) ? (e.x = t) : (n += t);
          for (var r = 0; r < n.length + 64; r++)
            (e.x ^= 0 | n.charCodeAt(r)), e.next();
        }
        function i(t, e) {
          return (e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e;
        }
        function a(t, e) {
          var n = new r(t),
            a = e && e.state,
            o = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (o.double = function () {
              do {
                var t =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === t);
              return t;
            }),
            (o.int32 = n.next),
            (o.quick = o),
            a &&
              ("object" == typeof a && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.xor128 = a);
      })(0, t, !1);
    })(ws);
    var ks = ws.exports,
      xs = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e = this,
            n = "";
          (e.next = function () {
            var t = e.x ^ (e.x >>> 2);
            return (
              (e.x = e.y),
              (e.y = e.z),
              (e.z = e.w),
              (e.w = e.v),
              ((e.d = (e.d + 362437) | 0) +
                (e.v = e.v ^ (e.v << 4) ^ t ^ (t << 1))) |
                0
            );
          }),
            (e.x = 0),
            (e.y = 0),
            (e.z = 0),
            (e.w = 0),
            (e.v = 0),
            t === (0 | t) ? (e.x = t) : (n += t);
          for (var r = 0; r < n.length + 64; r++)
            (e.x ^= 0 | n.charCodeAt(r)),
              r == n.length && (e.d = (e.x << 10) ^ (e.x >>> 4)),
              e.next();
        }
        function i(t, e) {
          return (
            (e.x = t.x),
            (e.y = t.y),
            (e.z = t.z),
            (e.w = t.w),
            (e.v = t.v),
            (e.d = t.d),
            e
          );
        }
        function a(t, e) {
          var n = new r(t),
            a = e && e.state,
            o = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (o.double = function () {
              do {
                var t =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === t);
              return t;
            }),
            (o.int32 = n.next),
            (o.quick = o),
            a &&
              ("object" == typeof a && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.xorwow = a);
      })(0, t, !1);
    })(xs);
    var Ss = xs.exports,
      Ns = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e = this;
          (e.next = function () {
            var t,
              n,
              r = e.x,
              i = e.i;
            return (
              (t = r[i]),
              (n = (t ^= t >>> 7) ^ (t << 24)),
              (n ^= (t = r[(i + 1) & 7]) ^ (t >>> 10)),
              (n ^= (t = r[(i + 3) & 7]) ^ (t >>> 3)),
              (n ^= (t = r[(i + 4) & 7]) ^ (t << 7)),
              (t = r[(i + 7) & 7]),
              (n ^= (t ^= t << 13) ^ (t << 9)),
              (r[i] = n),
              (e.i = (i + 1) & 7),
              n
            );
          }),
            (function (t, e) {
              var n,
                r = [];
              if (e === (0 | e)) r[0] = e;
              else
                for (e = "" + e, n = 0; n < e.length; ++n)
                  r[7 & n] =
                    (r[7 & n] << 15) ^ ((e.charCodeAt(n) + r[(n + 1) & 7]) << 13);
              for (; r.length < 8; ) r.push(0);
              for (n = 0; n < 8 && 0 === r[n]; ++n);
              for (
                8 == n ? (r[7] = -1) : r[n], t.x = r, t.i = 0, n = 256;
                n > 0;
                --n
              )
                t.next();
            })(e, t);
        }
        function i(t, e) {
          return (e.x = t.x.slice()), (e.i = t.i), e;
        }
        function a(t, e) {
          null == t && (t = +new Date());
          var n = new r(t),
            a = e && e.state,
            o = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (o.double = function () {
              do {
                var t =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === t);
              return t;
            }),
            (o.int32 = n.next),
            (o.quick = o),
            a &&
              (a.x && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.xorshift7 = a);
      })(0, t, !1);
    })(Ns);
    var Is = Ns.exports,
      As = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e = this;
          (e.next = function () {
            var t,
              n,
              r = e.w,
              i = e.X,
              a = e.i;
            return (
              (e.w = r = (r + 1640531527) | 0),
              (n = i[(a + 34) & 127]),
              (t = i[(a = (a + 1) & 127)]),
              (n ^= n << 13),
              (t ^= t << 17),
              (n ^= n >>> 15),
              (t ^= t >>> 12),
              (n = i[a] = n ^ t),
              (e.i = a),
              (n + (r ^ (r >>> 16))) | 0
            );
          }),
            (function (t, e) {
              var n,
                r,
                i,
                a,
                o,
                s = [],
                u = 128;
              for (
                e === (0 | e)
                  ? ((r = e), (e = null))
                  : ((e += "\0"), (r = 0), (u = Math.max(u, e.length))),
                  i = 0,
                  a = -32;
                a < u;
                ++a
              )
                e && (r ^= e.charCodeAt((a + 32) % e.length)),
                  0 === a && (o = r),
                  (r ^= r << 10),
                  (r ^= r >>> 15),
                  (r ^= r << 4),
                  (r ^= r >>> 13),
                  a >= 0 &&
                    ((o = (o + 1640531527) | 0),
                    (i = 0 == (n = s[127 & a] ^= r + o) ? i + 1 : 0));
              for (
                i >= 128 && (s[127 & ((e && e.length) || 0)] = -1),
                  i = 127,
                  a = 512;
                a > 0;
                --a
              )
                (r = s[(i + 34) & 127]),
                  (n = s[(i = (i + 1) & 127)]),
                  (r ^= r << 13),
                  (n ^= n << 17),
                  (r ^= r >>> 15),
                  (n ^= n >>> 12),
                  (s[i] = r ^ n);
              (t.w = o), (t.X = s), (t.i = i);
            })(e, t);
        }
        function i(t, e) {
          return (e.i = t.i), (e.w = t.w), (e.X = t.X.slice()), e;
        }
        function a(t, e) {
          null == t && (t = +new Date());
          var n = new r(t),
            a = e && e.state,
            o = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (o.double = function () {
              do {
                var t =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === t);
              return t;
            }),
            (o.int32 = n.next),
            (o.quick = o),
            a &&
              (a.X && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.xor4096 = a);
      })(0, t, !1);
    })(As);
    var zs = As.exports,
      Es = { exports: {} };
    !(function (t) {
      !(function (t, e, n) {
        function r(t) {
          var e = this,
            n = "";
          (e.next = function () {
            var t = e.b,
              n = e.c,
              r = e.d,
              i = e.a;
            return (
              (t = (t << 25) ^ (t >>> 7) ^ n),
              (n = (n - r) | 0),
              (r = (r << 24) ^ (r >>> 8) ^ i),
              (i = (i - t) | 0),
              (e.b = t = (t << 20) ^ (t >>> 12) ^ n),
              (e.c = n = (n - r) | 0),
              (e.d = (r << 16) ^ (n >>> 16) ^ i),
              (e.a = (i - t) | 0)
            );
          }),
            (e.a = 0),
            (e.b = 0),
            (e.c = -1640531527),
            (e.d = 1367130551),
            t === Math.floor(t)
              ? ((e.a = (t / 4294967296) | 0), (e.b = 0 | t))
              : (n += t);
          for (var r = 0; r < n.length + 20; r++)
            (e.b ^= 0 | n.charCodeAt(r)), e.next();
        }
        function i(t, e) {
          return (e.a = t.a), (e.b = t.b), (e.c = t.c), (e.d = t.d), e;
        }
        function a(t, e) {
          var n = new r(t),
            a = e && e.state,
            o = function () {
              return (n.next() >>> 0) / 4294967296;
            };
          return (
            (o.double = function () {
              do {
                var t =
                  ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
              } while (0 === t);
              return t;
            }),
            (o.int32 = n.next),
            (o.quick = o),
            a &&
              ("object" == typeof a && i(a, n),
              (o.state = function () {
                return i(n, {});
              })),
            o
          );
        }
        e && e.exports
          ? (e.exports = a)
          : n && n.amd
            ? n(function () {
                return a;
              })
            : (this.tychei = a);
      })(0, t, !1);
    })(Es);
    var Ts = Es.exports,
      Cs = { exports: {} },
      Fs = Mn({ __proto__: null, default: {} });
    !(function (t) {
      !(function (e, n, r) {
        var i,
          a = 256,
          o = r.pow(a, 6),
          s = r.pow(2, 52),
          u = 2 * s,
          l = 255;
        function c(t, l, c) {
          var v = [],
            y = d(
              f(
                (l = 1 == l ? { entropy: !0 } : l || {}).entropy
                  ? [t, g(n)]
                  : null == t
                    ? (function () {
                        try {
                          var t;
                          return (
                            i && (t = i.randomBytes)
                              ? (t = t(a))
                              : ((t = new Uint8Array(a)),
                                (e.crypto || e.msCrypto).getRandomValues(t)),
                            g(t)
                          );
                        } catch (t) {
                          var r = e.navigator,
                            o = r && r.plugins;
                          return [+new Date(), e, o, e.screen, g(n)];
                        }
                      })()
                    : t,
                3,
              ),
              v,
            ),
            m = new h(v),
            b = function () {
              for (var t = m.g(6), e = o, n = 0; t < s; )
                (t = (t + n) * a), (e *= a), (n = m.g(1));
              for (; t >= u; ) (t /= 2), (e /= 2), (n >>>= 1);
              return (t + n) / e;
            };
          return (
            (b.int32 = function () {
              return 0 | m.g(4);
            }),
            (b.quick = function () {
              return m.g(4) / 4294967296;
            }),
            (b.double = b),
            d(g(m.S), n),
            (
              l.pass ||
              c ||
              function (t, e, n, i) {
                return (
                  i &&
                    (i.S && p(i, m),
                    (t.state = function () {
                      return p(m, {});
                    })),
                  n ? ((r.random = t), e) : t
                );
              }
            )(b, y, "global" in l ? l.global : this == r, l.state)
          );
        }
        function h(t) {
          var e,
            n = t.length,
            r = this,
            i = 0,
            o = (r.i = r.j = 0),
            s = (r.S = []);
          for (n || (t = [n++]); i < a; ) s[i] = i++;
          for (i = 0; i < a; i++)
            (s[i] = s[(o = l & (o + t[i % n] + (e = s[i])))]), (s[o] = e);
          (r.g = function (t) {
            for (var e, n = 0, i = r.i, o = r.j, s = r.S; t--; )
              (e = s[(i = l & (i + 1))]),
                (n = n * a + s[l & ((s[i] = s[(o = l & (o + e))]) + (s[o] = e))]);
            return (r.i = i), (r.j = o), n;
          })(a);
        }
        function p(t, e) {
          return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
        }
        function f(t, e) {
          var n,
            r = [],
            i = typeof t;
          if (e && "object" == i)
            for (n in t)
              try {
                r.push(f(t[n], e - 1));
              } catch (t) {}
          return r.length ? r : "string" == i ? t : t + "\0";
        }
        function d(t, e) {
          for (var n, r = t + "", i = 0; i < r.length; )
            e[l & i] = l & ((n ^= 19 * e[l & i]) + r.charCodeAt(i++));
          return g(e);
        }
        function g(t) {
          return String.fromCharCode.apply(0, t);
        }
        if ((d(r.random(), n), t.exports)) {
          t.exports = c;
          try {
            i = Fs;
          } catch (t) {}
        } else r.seedrandom = c;
      })("undefined" != typeof self ? self : Rn, [], Math);
    })(Cs);
    var Ds = bs,
      _s = ks,
      Ls = Ss,
      Rs = Is,
      Os = zs,
      Ms = Ts,
      Bs = Cs.exports;
    (Bs.alea = Ds),
      (Bs.xor128 = _s),
      (Bs.xorwow = Ls),
      (Bs.xorshift7 = Rs),
      (Bs.xor4096 = Os),
      (Bs.tychei = Ms);
    var Ps,
      js = Yr({
        reverse_: function (t, e) {
          var n = { x: Jr(t, "x", "reverse") },
            r = { dims: e };
          return Vr.runKernel(Pe, n, r);
        },
      });
    Yr({
      tensorScatterUpdate_: function (t, e, n) {
        var r = Jr(t, "tensor", "tensorScatterupdate"),
          i = Jr(e, "indices", "tensorScatterupdate", "int32"),
          a = Jr(n, "updates", "tensorScatterupdate");
        if ((is(a, i, r.shape), r.dtype !== a.dtype))
          throw new Error(
            "tensor and updates must have the same dtype, instead they are "
              .concat(r.dtype, " and ")
              .concat(a.dtype, "."),
          );
        var o = { tensor: r, indices: i, updates: a };
        return Vr.runKernel("TensorScatterUpdate", o, {});
      },
    }),
      (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.MEAN = 1)] = "MEAN"),
          (t[(t.SUM = 2)] = "SUM"),
          (t[(t.SUM_BY_NONZERO_WEIGHTS = 3)] = "SUM_BY_NONZERO_WEIGHTS");
      })(Ps || (Ps = {}));
    var Us = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.minimize = function (t, e, n) {
          void 0 === e && (e = !1);
          var r = this.computeGradients(t, n),
            i = r.value,
            a = r.grads;
          if (null != n) {
            var o = n.map(function (t) {
              return { name: t.name, tensor: a[t.name] };
            });
            this.applyGradients(o);
          } else this.applyGradients(a);
          return da(a), e ? i : (i.dispose(), null);
        }),
        Object.defineProperty(e.prototype, "iterations", {
          get: function () {
            return (
              null == this.iterations_ && (this.iterations_ = 0), this.iterations_
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.incrementIterations = function () {
          this.iterations_ = this.iterations + 1;
        }),
        (e.prototype.computeGradients = function (t, e) {
          return (function (t, e) {
            nn(pn(t), function () {
              return "The f passed in variableGrads(f) must be a function";
            }),
              nn(
                null == e ||
                  (Array.isArray(e) &&
                    e.every(function (t) {
                      return t instanceof _r;
                    })),
                function () {
                  return "The varList passed in variableGrads(f, varList) must be an array of variables";
                },
              );
            var n = null != e;
            if (!n)
              for (var r in ((e = []), Vr.registeredVariables))
                e.push(Vr.registeredVariables[r]);
            var i = n
                ? e.filter(function (t) {
                    return !t.trainable;
                  })
                : null,
              a = e.length;
            nn(
              (e = e.filter(function (t) {
                return t.trainable;
              })).length > 0,
              function () {
                return (
                  "variableGrads() expects at least one of the input variables to " +
                  "be trainable, but none of the ".concat(a, " variables is ") +
                  "trainable."
                );
              },
            );
            var o = Vr.gradients(t, e, null, !0),
              s = o.value,
              u = o.grads;
            nn(
              u.some(function (t) {
                return null != t;
              }),
              function () {
                return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().";
              },
            ),
              nn(0 === s.rank, function () {
                return (
                  "The f passed in variableGrads(f) must return a scalar, but it " +
                  "returned a rank-".concat(s.rank, " tensor")
                );
              });
            var l = {};
            return (
              e.forEach(function (t, e) {
                null != u[e] && (l[t.name] = u[e]);
              }),
              null != i &&
                i.forEach(function (t) {
                  return (l[t.name] = null);
                }),
              { value: s, grads: l }
            );
          })(t, e);
        }),
        (e.prototype.dispose = function () {
          null != this.iterations_ && da(this.iterations_);
        }),
        (e.prototype.saveIterations = function () {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              return (
                null == this.iterations_ && (this.iterations_ = 0),
                [2, { name: "iter", tensor: ii(this.iterations_, "int32") }]
              );
            });
          });
        }),
        (e.prototype.getWeights = function () {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              throw new Error(
                "getWeights() is not implemented for this optimizer yet.",
              );
            });
          });
        }),
        (e.prototype.setWeights = function (t) {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              throw new Error(
                "setWeights() is not implemented for this optimizer class " +
                  "".concat(this.getClassName()),
              );
            });
          });
        }),
        (e.prototype.extractIterations = function (t) {
          return s(this, void 0, void 0, function () {
            var e;
            return u(this, function (n) {
              switch (n.label) {
                case 0:
                  return (e = this), [4, t[0].tensor.data()];
                case 1:
                  return (e.iterations_ = n.sent()[0]), [2, t.slice(1)];
              }
            });
          });
        }),
        e
      );
    })(as);
    Object.defineProperty(Us, Symbol.hasInstance, {
      value: function (t) {
        return (
          null != t.minimize &&
          null != t.computeGradients &&
          null != t.applyGradients
        );
      },
    }),
      (function (t) {
        function e(e, n, r) {
          void 0 === r && (r = null);
          var i = t.call(this) || this;
          return (
            (i.learningRate = e),
            (i.rho = n),
            (i.epsilon = r),
            (i.accumulatedGrads = []),
            (i.accumulatedUpdates = []),
            null == r && (i.epsilon = Vr.backend.epsilon()),
            i
          );
        }
        o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "Adadelta";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this;
            (Array.isArray(t)
              ? t.map(function (t) {
                  return t.name;
                })
              : Object.keys(t)
            ).forEach(function (n, r) {
              var i = Vr.registeredVariables[n];
              null == e.accumulatedGrads[r] &&
                (e.accumulatedGrads[r] = {
                  originalName: "".concat(n, "/accum_grad"),
                  variable: fa(function () {
                    return vi(i).variable(false);
                  }),
                }),
                null == e.accumulatedUpdates[r] &&
                  (e.accumulatedUpdates[r] = {
                    originalName: "".concat(n, "/accum_var"),
                    variable: fa(function () {
                      return vi(i).variable(false);
                    }),
                  });
              var a = Array.isArray(t) ? t[r].tensor : t[n];
              if (null != a) {
                var o = e.accumulatedGrads[r].variable,
                  s = e.accumulatedUpdates[r].variable;
                fa(function () {
                  var t = wi($r(o, e.rho), $r(oi(a), 1 - e.rho)),
                    n = $r(ni(ai(wi(s, e.epsilon)), ai(wi(o, e.epsilon))), a),
                    r = wi($r(s, e.rho), $r(oi(n), 1 - e.rho));
                  o.assign(t), s.assign(r);
                  var u = wi($r(n, -e.learningRate), i);
                  i.assign(u);
                });
              }
            }),
              this.incrementIterations();
          }),
          (e.prototype.dispose = function () {
            null != this.accumulatedUpdates &&
              (da(
                this.accumulatedGrads.map(function (t) {
                  return t.variable;
                }),
              ),
              da(
                this.accumulatedUpdates.map(function (t) {
                  return t.variable;
                }),
              ));
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              var t;
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = h(
                        h([], c(this.accumulatedGrads), !1),
                        c(this.accumulatedUpdates),
                        !1,
                      )),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [e.sent()].concat(
                        t.map(function (t) {
                          return { name: t.originalName, tensor: t.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              var e;
              return u(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.extractIterations(t)];
                  case 1:
                    return (
                      (t = n.sent()),
                      (e = t.length / 2),
                      !1,
                      (this.accumulatedGrads = t.slice(0, e).map(function (t) {
                        return {
                          originalName: t.name,
                          variable: t.tensor.variable(false),
                        };
                      })),
                      (this.accumulatedUpdates = t
                        .slice(e, 2 * e)
                        .map(function (t) {
                          return {
                            originalName: t.name,
                            variable: t.tensor.variable(false),
                          };
                        })),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              rho: this.rho,
              epsilon: this.epsilon,
            };
          }),
          (e.fromConfig = function (t, e) {
            return new t(e.learningRate, e.rho, e.epsilon);
          });
      })(Us),
      (function (t) {
        function e(e, n) {
          void 0 === n && (n = 0.1);
          var r = t.call(this) || this;
          return (
            (r.learningRate = e),
            (r.initialAccumulatorValue = n),
            (r.accumulatedGrads = []),
            r
          );
        }
        o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "Adagrad";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this;
            (Array.isArray(t)
              ? t.map(function (t) {
                  return t.name;
                })
              : Object.keys(t)
            ).forEach(function (n, r) {
              var i = Vr.registeredVariables[n];
              if (null == e.accumulatedGrads[r]) {
                e.accumulatedGrads[r] = {
                  originalName: "".concat(n, "/accumulator"),
                  variable: fa(function () {
                    return (function (t, e, n) {
                      mn(t);
                      var r = { shape: t, value: e, dtype: (n = n || hn(e)) };
                      return Vr.runKernel("Fill", {}, r);
                    })(i.shape, e.initialAccumulatorValue).variable(false);
                  }),
                };
              }
              var a = Array.isArray(t) ? t[r].tensor : t[n];
              if (null != a) {
                var o = e.accumulatedGrads[r].variable;
                fa(function () {
                  var t = wi(o, oi(a));
                  o.assign(t);
                  var n = wi(
                    $r(ni(a, ai(wi(t, Vr.backend.epsilon()))), -e.learningRate),
                    i,
                  );
                  i.assign(n);
                });
              }
            }),
              this.incrementIterations();
          }),
          (e.prototype.dispose = function () {
            null != this.accumulatedGrads &&
              da(
                this.accumulatedGrads.map(function (t) {
                  return t.variable;
                }),
              );
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.saveIterations()];
                  case 1:
                    return [
                      2,
                      [t.sent()].concat(
                        this.accumulatedGrads.map(function (t) {
                          return { name: t.originalName, tensor: t.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.extractIterations(t)];
                  case 1:
                    return (
                      (t = e.sent()),
                      !1,
                      (this.accumulatedGrads = t.map(function (t) {
                        return {
                          originalName: t.name,
                          variable: t.tensor.variable(false),
                        };
                      })),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              initialAccumulatorValue: this.initialAccumulatorValue,
            };
          }),
          (e.fromConfig = function (t, e) {
            return new t(e.learningRate, e.initialAccumulatorValue);
          });
      })(Us),
      (function (t) {
        function e(e, n, r, i) {
          void 0 === i && (i = null);
          var a = t.call(this) || this;
          return (
            (a.learningRate = e),
            (a.beta1 = n),
            (a.beta2 = r),
            (a.epsilon = i),
            (a.accumulatedFirstMoment = []),
            (a.accumulatedSecondMoment = []),
            fa(function () {
              (a.accBeta1 = ii(n).variable()), (a.accBeta2 = ii(r).variable());
            }),
            null == i && (a.epsilon = Vr.backend.epsilon()),
            a
          );
        }
        o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "Adam";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this,
              n = Array.isArray(t)
                ? t.map(function (t) {
                    return t.name;
                  })
                : Object.keys(t);
            fa(function () {
              var r = si(1, e.accBeta1),
                i = si(1, e.accBeta2);
              n.forEach(function (n, a) {
                var o = Vr.registeredVariables[n];
                null == e.accumulatedFirstMoment[a] &&
                  (e.accumulatedFirstMoment[a] = {
                    originalName: "".concat(n, "/m"),
                    variable: fa(function () {
                      return vi(o).variable(false);
                    }),
                  }),
                  null == e.accumulatedSecondMoment[a] &&
                    (e.accumulatedSecondMoment[a] = {
                      originalName: "".concat(n, "/v"),
                      variable: fa(function () {
                        return vi(o).variable(false);
                      }),
                    });
                var s = Array.isArray(t) ? t[a].tensor : t[n];
                if (null != s) {
                  var u = e.accumulatedFirstMoment[a].variable,
                    l = e.accumulatedSecondMoment[a].variable,
                    c = wi($r(u, e.beta1), $r(s, 1 - e.beta1)),
                    h = wi($r(l, e.beta2), $r(oi(s), 1 - e.beta2)),
                    p = ni(c, r),
                    f = ni(h, i);
                  u.assign(c), l.assign(h);
                  var d = wi($r(ni(p, wi(ai(f), e.epsilon)), -e.learningRate), o);
                  o.assign(d);
                }
              }),
                e.accBeta1.assign($r(e.accBeta1, e.beta1)),
                e.accBeta2.assign($r(e.accBeta2, e.beta2));
            }),
              this.incrementIterations();
          }),
          (e.prototype.dispose = function () {
            this.accBeta1.dispose(),
              this.accBeta2.dispose(),
              null != this.accumulatedFirstMoment &&
                da(
                  this.accumulatedFirstMoment.map(function (t) {
                    return t.variable;
                  }),
                ),
              null != this.accumulatedSecondMoment &&
                da(
                  this.accumulatedSecondMoment.map(function (t) {
                    return t.variable;
                  }),
                );
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              var t;
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = h(
                        h([], c(this.accumulatedFirstMoment), !1),
                        c(this.accumulatedSecondMoment),
                        !1,
                      )),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [e.sent()].concat(
                        t.map(function (t) {
                          return { name: t.originalName, tensor: t.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              var e,
                n = this;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.extractIterations(t)];
                  case 1:
                    return (
                      (t = r.sent()),
                      fa(function () {
                        n.accBeta1.assign(Io(n.beta1, n.iterations_ + 1)),
                          n.accBeta2.assign(Io(n.beta2, n.iterations_ + 1));
                      }),
                      (e = t.length / 2),
                      !1,
                      (this.accumulatedFirstMoment = t
                        .slice(0, e)
                        .map(function (t) {
                          return {
                            originalName: t.name,
                            variable: t.tensor.variable(false),
                          };
                        })),
                      (this.accumulatedSecondMoment = t
                        .slice(e, 2 * e)
                        .map(function (t) {
                          return {
                            originalName: t.name,
                            variable: t.tensor.variable(false),
                          };
                        })),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              beta1: this.beta1,
              beta2: this.beta2,
              epsilon: this.epsilon,
            };
          }),
          (e.fromConfig = function (t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon);
          });
      })(Us),
      (function (t) {
        function e(e, n, r, i, a) {
          void 0 === i && (i = null), void 0 === a && (a = 0);
          var o = t.call(this) || this;
          return (
            (o.learningRate = e),
            (o.beta1 = n),
            (o.beta2 = r),
            (o.epsilon = i),
            (o.decay = a),
            (o.accumulatedFirstMoment = []),
            (o.accumulatedWeightedInfNorm = []),
            fa(function () {
              (o.iteration = ii(0).variable()), (o.accBeta1 = ii(n).variable());
            }),
            null == i && (o.epsilon = Vr.backend.epsilon()),
            o
          );
        }
        o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "Adamax";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this,
              n = Array.isArray(t)
                ? t.map(function (t) {
                    return t.name;
                  })
                : Object.keys(t);
            fa(function () {
              var r = si(1, e.accBeta1),
                i = ni(-e.learningRate, wi($r(e.iteration, e.decay), 1));
              n.forEach(function (n, a) {
                var o = Vr.registeredVariables[n];
                null == e.accumulatedFirstMoment[a] &&
                  (e.accumulatedFirstMoment[a] = {
                    originalName: "".concat(n, "/m"),
                    variable: vi(o).variable(false),
                  }),
                  null == e.accumulatedWeightedInfNorm[a] &&
                    (e.accumulatedWeightedInfNorm[a] = {
                      originalName: "".concat(n, "/v"),
                      variable: vi(o).variable(false),
                    });
                var s = Array.isArray(t) ? t[a].tensor : t[n];
                if (null != s) {
                  var u = e.accumulatedFirstMoment[a].variable,
                    l = e.accumulatedWeightedInfNorm[a].variable,
                    c = wi($r(u, e.beta1), $r(s, 1 - e.beta1)),
                    h = $r(l, e.beta2),
                    p = os(s),
                    f = vs(h, p);
                  u.assign(c), l.assign(f);
                  var d = wi($r(ni(i, r), ni(c, wi(f, e.epsilon))), o);
                  o.assign(d);
                }
              }),
                e.iteration.assign(wi(e.iteration, 1)),
                e.accBeta1.assign($r(e.accBeta1, e.beta1));
            }),
              this.incrementIterations();
          }),
          (e.prototype.dispose = function () {
            this.accBeta1.dispose(),
              this.iteration.dispose(),
              null != this.accumulatedFirstMoment &&
                da(
                  this.accumulatedFirstMoment.map(function (t) {
                    return t.variable;
                  }),
                ),
              null != this.accumulatedWeightedInfNorm &&
                da(
                  this.accumulatedWeightedInfNorm.map(function (t) {
                    return t.variable;
                  }),
                );
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                throw new Error(
                  "getWeights() is not implemented for Adamax yet.",
                );
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                throw new Error(
                  "setWeights() is not implemented for Adamax yet.",
                );
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              beta1: this.beta1,
              beta2: this.beta2,
              epsilon: this.epsilon,
              decay: this.decay,
            };
          }),
          (e.fromConfig = function (t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon, e.decay);
          });
      })(Us);
    var Ws,
      Vs = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (n.learningRate = e), n.setLearningRate(e), n;
        }
        return (
          o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "SGD";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this;
            (Array.isArray(t)
              ? t.map(function (t) {
                  return t.name;
                })
              : Object.keys(t)
            ).forEach(function (n, r) {
              var i = Array.isArray(t) ? t[r].tensor : t[n];
              if (null != i) {
                var a = Vr.registeredVariables[n];
                fa(function () {
                  var t = wi($r(e.c, i), a);
                  a.assign(t);
                });
              }
            }),
              this.incrementIterations();
          }),
          (e.prototype.setLearningRate = function (t) {
            var e;
            (this.learningRate = t),
              null != this.c && this.c.dispose(),
              (this.c = ((e = ii(-t)), Vr.keep(e)));
          }),
          (e.prototype.dispose = function () {
            this.c.dispose();
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.saveIterations()];
                  case 1:
                    return [2, [t.sent()]];
                }
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.extractIterations(t)];
                  case 1:
                    if (0 !== (t = e.sent()).length)
                      throw new Error(
                        "SGD optimizer does not have settable weights.",
                      );
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return { learningRate: this.learningRate };
          }),
          (e.fromConfig = function (t, e) {
            return new t(e.learningRate);
          }),
          e
        );
      })(Us);
    !(function (t) {
      function e(e, n, r) {
        void 0 === r && (r = !1);
        var i = t.call(this, e) || this;
        return (
          (i.learningRate = e),
          (i.momentum = n),
          (i.useNesterov = r),
          (i.accumulations = []),
          (i.m = ii(i.momentum)),
          i
        );
      }
      o(e, t),
        Object.defineProperty(e, "className", {
          get: function () {
            return "Momentum";
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.applyGradients = function (t) {
          var e = this;
          (Array.isArray(t)
            ? t.map(function (t) {
                return t.name;
              })
            : Object.keys(t)
          ).forEach(function (n, r) {
            var i = Vr.registeredVariables[n];
            if (null == e.accumulations[r]) {
              e.accumulations[r] = {
                originalName: "".concat(n, "/momentum"),
                variable: fa(function () {
                  return vi(i).variable(false);
                }),
              };
            }
            var a = e.accumulations[r].variable,
              o = Array.isArray(t) ? t[r].tensor : t[n];
            null != o &&
              fa(function () {
                var t,
                  n = wi($r(e.m, a), o);
                (t = e.useNesterov
                  ? wi($r(e.c, wi(o, $r(n, e.m))), i)
                  : wi($r(e.c, n), i)),
                  a.assign(n),
                  i.assign(t);
              });
          }),
            this.incrementIterations();
        }),
        (e.prototype.dispose = function () {
          this.m.dispose(),
            null != this.accumulations &&
              da(
                this.accumulations.map(function (t) {
                  return t.variable;
                }),
              );
        }),
        (e.prototype.setMomentum = function (t) {
          this.momentum = t;
        }),
        (e.prototype.getWeights = function () {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.saveIterations()];
                case 1:
                  return [
                    2,
                    [t.sent()].concat(
                      this.accumulations.map(function (t) {
                        return { name: t.originalName, tensor: t.variable };
                      }),
                    ),
                  ];
              }
            });
          });
        }),
        (e.prototype.setWeights = function (t) {
          return s(this, void 0, void 0, function () {
            return u(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.extractIterations(t)];
                case 1:
                  return (
                    (t = e.sent()),
                    !1,
                    (this.accumulations = t.map(function (t) {
                      return {
                        originalName: t.name,
                        variable: t.tensor.variable(false),
                      };
                    })),
                    [2]
                  );
              }
            });
          });
        }),
        (e.prototype.getConfig = function () {
          return {
            learningRate: this.learningRate,
            momentum: this.momentum,
            useNesterov: this.useNesterov,
          };
        }),
        (e.fromConfig = function (t, e) {
          return new t(e.learningRate, e.momentum, e.useNesterov);
        });
    })(Vs),
      (function (t) {
        function e(e, n, r, i, a) {
          void 0 === n && (n = 0.9),
            void 0 === r && (r = 0),
            void 0 === i && (i = null),
            void 0 === a && (a = !1);
          var o = t.call(this) || this;
          if (
            ((o.learningRate = e),
            (o.decay = n),
            (o.momentum = r),
            (o.epsilon = i),
            (o.accumulatedMeanSquares = []),
            (o.accumulatedMoments = []),
            (o.accumulatedMeanGrads = []),
            (o.centered = a),
            null == i && (o.epsilon = Vr.backend.epsilon()),
            null == e)
          )
            throw new Error("learningRate for RMSPropOptimizer must be defined.");
          return o;
        }
        o(e, t),
          Object.defineProperty(e, "className", {
            get: function () {
              return "RMSProp";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.applyGradients = function (t) {
            var e = this;
            (Array.isArray(t)
              ? t.map(function (t) {
                  return t.name;
                })
              : Object.keys(t)
            ).forEach(function (n, r) {
              var i = Vr.registeredVariables[n],
                a = !1;
              null == e.accumulatedMeanSquares[r] &&
                (e.accumulatedMeanSquares[r] = {
                  originalName: "".concat(n, "/rms"),
                  variable: fa(function () {
                    return vi(i).variable(a);
                  }),
                }),
                null == e.accumulatedMoments[r] &&
                  (e.accumulatedMoments[r] = {
                    originalName: "".concat(n, "/momentum"),
                    variable: fa(function () {
                      return vi(i).variable(a);
                    }),
                  }),
                null == e.accumulatedMeanGrads[r] &&
                  e.centered &&
                  (e.accumulatedMeanGrads[r] = {
                    originalName: "".concat(n, "/mg"),
                    variable: fa(function () {
                      return vi(i).variable(a);
                    }),
                  });
              var o = Array.isArray(t) ? t[r].tensor : t[n];
              if (null != o) {
                var s = e.accumulatedMeanSquares[r].variable,
                  u = e.accumulatedMoments[r].variable;
                fa(function () {
                  var t = wi($r(s, e.decay), $r(oi(o), 1 - e.decay));
                  if (e.centered) {
                    var n = e.accumulatedMeanGrads[r].variable,
                      a = wi($r(n, e.decay), $r(o, 1 - e.decay)),
                      l = ni(
                        $r(o, e.learningRate),
                        ai(si(t, wi(oi(a), e.epsilon))),
                      ),
                      c = wi($r(u, e.momentum), l);
                    s.assign(t), n.assign(a), u.assign(c);
                    var h = si(i, c);
                    i.assign(h);
                  } else {
                    var p = wi($r(s, e.decay), $r(oi(o), 1 - e.decay));
                    c = wi(
                      $r(u, e.momentum),
                      ni($r(o, e.learningRate), ai(wi(p, e.epsilon))),
                    );
                    s.assign(p), u.assign(c);
                    h = si(i, c);
                    i.assign(h);
                  }
                });
              }
            }),
              this.incrementIterations();
          }),
          (e.prototype.dispose = function () {
            null != this.accumulatedMeanSquares &&
              da(
                this.accumulatedMeanSquares.map(function (t) {
                  return t.variable;
                }),
              ),
              null != this.accumulatedMeanGrads &&
                this.centered &&
                da(
                  this.accumulatedMeanGrads.map(function (t) {
                    return t.variable;
                  }),
                ),
              null != this.accumulatedMoments &&
                da(
                  this.accumulatedMoments.map(function (t) {
                    return t.variable;
                  }),
                );
          }),
          (e.prototype.getWeights = function () {
            return s(this, void 0, void 0, function () {
              var t;
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      (t = h(
                        h([], c(this.accumulatedMeanSquares), !1),
                        c(this.accumulatedMoments),
                        !1,
                      )),
                      this.centered &&
                        t.push.apply(t, h([], c(this.accumulatedMeanGrads), !1)),
                      [4, this.saveIterations()]
                    );
                  case 1:
                    return [
                      2,
                      [e.sent()].concat(
                        t.map(function (t) {
                          return { name: t.originalName, tensor: t.variable };
                        }),
                      ),
                    ];
                }
              });
            });
          }),
          (e.prototype.setWeights = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.extractIterations(t)];
                  case 1:
                    return (
                      (t = r.sent()),
                      (e = this.centered ? t.length / 3 : t.length / 2),
                      (n = !1),
                      (this.accumulatedMeanSquares = t
                        .slice(0, e)
                        .map(function (t) {
                          return {
                            originalName: t.name,
                            variable: t.tensor.variable(n),
                          };
                        })),
                      (this.accumulatedMoments = t
                        .slice(e, 2 * e)
                        .map(function (t) {
                          return {
                            originalName: t.name,
                            variable: t.tensor.variable(n),
                          };
                        })),
                      this.centered &&
                        (this.accumulatedMeanGrads = t
                          .slice(2 * e, 3 * e)
                          .map(function (t) {
                            return {
                              originalName: t.name,
                              variable: t.tensor.variable(n),
                            };
                          })),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.getConfig = function () {
            return {
              learningRate: this.learningRate,
              decay: this.decay,
              momentum: this.momentum,
              epsilon: this.epsilon,
              centered: this.centered,
            };
          }),
          (e.fromConfig = function (t, e) {
            return new t(
              e.learningRate,
              e.decay,
              e.momentum,
              e.epsilon,
              e.centered,
            );
          });
      })(Us),
      "undefined" != typeof requestAnimationFrame
        ? requestAnimationFrame
        : "undefined" != typeof setImmediate && setImmediate,
      (function (t) {
        (t[(t.FIRST_DIM_SIZE = 0)] = "FIRST_DIM_SIZE"),
          (t[(t.VALUE_ROWIDS = 1)] = "VALUE_ROWIDS"),
          (t[(t.ROW_LENGTHS = 2)] = "ROW_LENGTHS"),
          (t[(t.ROW_SPLITS = 3)] = "ROW_SPLITS"),
          (t[(t.ROW_LIMITS = 4)] = "ROW_LIMITS"),
          (t[(t.ROW_STARTS = 5)] = "ROW_STARTS");
      })(Ws || (Ws = {}));
    function qs(t, e, n) {
      var r = t.shape.length,
        i = r - n.length,
        a = ca(n, r),
        o = t;
      null != a && (o = ma(t, a));
      var s = o.shape.slice(),
        u = s.splice(r - n.length, n.length).reduce(function (t, e) {
          return t * e;
        }, 1);
      s.push(u);
      var l = (function (t, e, n) {
        var r = t.shape.slice();
        r[n] = 1;
        var i = pi(e, r),
          a = ps(t, n, !0, !1),
          o = ps(t, n, !0, !0),
          s = $r(a, o);
        return $r(i, s);
      })(o.reshape(s), e, i);
      if (((l = l.reshape(o.shape)), null != a)) {
        var c = ha(a);
        l = ma(l, c);
      }
      return l;
    }
    var Gs = {
        kernelName: ze,
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = ni(t, Xr(i, "float32")),
                n = ci(r.shape, a);
              return n.length > 0 ? pi(fi(e, n), r.shape) : e;
            },
            b: function () {
              var e = $r(t, Xr(r, "float32")),
                n = ci(i.shape, a);
              n.length > 0 && (e = pi(fi(e, n), i.shape));
              var o = oi(i);
              return ri(ni(e, Xr(o, "float32")));
            },
          };
        },
      },
      Ks = {
        kernelName: Ke,
        gradFunc: function (t, e, n) {
          var r = n.blockShape,
            i = n.paddings;
          return {
            x: function () {
              return ls(t, r, i);
            },
          };
        },
      },
      Hs = {
        kernelName: He,
        gradFunc: function (t, e, n) {
          var r = n.axis;
          return {
            x: function () {
              return ss(t, r);
            },
          };
        },
      },
      Js = {
        kernelName: "SquaredDifference",
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = ii(2);
          return {
            a: function () {
              return $r(t, $r(a, si(r, i)));
            },
            b: function () {
              return $r(t, $r(a, si(i, r)));
            },
          };
        },
      },
      Zs = {
        kernelName: "Sub",
        inputsToSave: ["a", "b"],
        gradFunc: function (t, e) {
          var n = c(e, 2),
            r = n[0],
            i = n[1],
            a = hi(r.shape, i.shape);
          return {
            a: function () {
              var e = t,
                n = ci(r.shape, a);
              return n.length > 0 && (e = fi(e, n)), pi(e, r.shape);
            },
            b: function () {
              var e = t,
                n = ci(i.shape, a);
              return n.length > 0 && (e = fi(e, n)), pi(ri(e), i.shape);
            },
          };
        },
      };
    var Ys,
      Xs,
      $s,
      Qs,
      tu = [
        ti,
        ui,
        li,
        di,
        gi,
        yi,
        mi,
        bi,
        ki,
        xi,
        Si,
        Ni,
        Fi,
        _i,
        Ri,
        Mi,
        Bi,
        Pi,
        ji,
        Hi,
        Ji,
        Yi,
        ea,
        Qi,
        ia,
        oa,
        ua,
        ba,
        xa,
        Sa,
        Gs,
        Na,
        Aa,
        za,
        Ea,
        Ta,
        Fa,
        Ca,
        La,
        Ma,
        ja,
        Ua,
        Wa,
        Va,
        qa,
        Ka,
        Ha,
        Ja,
        Za,
        Xa,
        to,
        to,
        no,
        io,
        oo,
        lo,
        co,
        ho,
        fo,
        vo,
        yo,
        mo,
        bo,
        wo,
        xo,
        So,
        So,
        Ao,
        zo,
        {
          kernelName: "Prod",
          inputsToSave: ["x"],
          gradFunc: function (t, e, n) {
            var r = c(e, 1)[0],
              i = n.axis,
              a = [];
            return (
              (a =
                null == i
                  ? r.shape.map(function (t, e) {
                      return e;
                    })
                  : "number" == typeof i
                    ? [i]
                    : i),
              {
                x: function () {
                  return qs(r, t, a);
                },
              }
            );
          },
        },
        {
          kernelName: "Reciprocal",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return ni(t, ri(oi(n)));
              },
            };
          },
        },
        {
          kernelName: "Relu6",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0],
              r = $r(Wi(n, 6), Qr(n));
            return {
              x: function () {
                return $r(t, Xr(r, "float32"));
              },
            };
          },
        },
        {
          kernelName: "Relu",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(t, Xr(Qr(n), "float32"));
              },
            };
          },
        },
        {
          kernelName: Be,
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return pi(t, n.shape);
              },
            };
          },
        },
        {
          kernelName: "ResizeBilinear",
          inputsToSave: ["images"],
          gradFunc: function (t, e, n) {
            var r = { dy: t, images: c(e, 1)[0] };
            return {
              images: function () {
                return Vr.runKernel("ResizeBilinearGrad", r, n);
              },
            };
          },
        },
        {
          kernelName: "ResizeNearestNeighbor",
          inputsToSave: ["images"],
          gradFunc: function (t, e, n) {
            var r = { dy: t, images: c(e, 1)[0] };
            return {
              images: function () {
                return Vr.runKernel("ResizeNearestNeighborGrad", r, n);
              },
            };
          },
        },
        {
          kernelName: Pe,
          gradFunc: function (t, e, n) {
            var r = un(n.dims, t.shape);
            return {
              x: function () {
                return js(t, r);
              },
            };
          },
        },
        {
          kernelName: "Round",
          gradFunc: function (t) {
            return {
              x: function () {
                return vi(t);
              },
            };
          },
        },
        {
          kernelName: je,
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return ri(ni(t, $r(Io(n, 1.5), 2)));
              },
            };
          },
        },
        {
          kernelName: Ue,
          inputsToSave: ["condition"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              condition: function () {
                return Xr(vi(n), "float32");
              },
              t: function () {
                return $r(t, Xr(n, t.dtype));
              },
              e: function () {
                return $r(t, Xr(gs(n), t.dtype));
              },
            };
          },
        },
        {
          kernelName: "Selu",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                var e = Ga(n, ii(0)),
                  r = ii(1.7580993408473768),
                  i = ii(1.0507009873554805),
                  a = $r(t, i),
                  o = $r($r(t, r), Ia(Xr(n, "float32")));
                return Ki(e, a, o);
              },
            };
          },
        },
        {
          kernelName: qe,
          outputsToSave: [!0],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(t, $r(n, si(ii(1), n)));
              },
            };
          },
        },
        {
          kernelName: "Sign",
          gradFunc: function (t) {
            return {
              x: function () {
                return vi(t);
              },
            };
          },
        },
        {
          kernelName: "Sin",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(cs(Xr(n, "float32")), t);
              },
            };
          },
        },
        {
          kernelName: Ve,
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(hs(Xr(n, "float32")), t);
              },
            };
          },
        },
        {
          kernelName: We,
          inputsToSave: ["x"],
          gradFunc: function (t, e, n) {
            for (
              var r = c(e, 1)[0],
                i = n.begin,
                a = n.size,
                o = r.shape,
                s = c(
                  (function (t, e, n) {
                    var r,
                      i,
                      a = t.shape.length;
                    return (
                      (r =
                        "number" == typeof e
                          ? h([e], c(new Array(a - 1).fill(0)), !1)
                          : e.length < a
                            ? e.concat(new Array(a - e.length).fill(0))
                            : e.slice()).forEach(function (t) {
                        nn(-1 !== t, function () {
                          return "slice() does not support negative begin indexing.";
                        });
                      }),
                      (i = (i =
                        null == n
                          ? new Array(a).fill(-1)
                          : "number" == typeof n
                            ? h([n], c(new Array(a - 1).fill(-1)), !1)
                            : n.length < a
                              ? n.concat(new Array(a - n.length).fill(-1))
                              : n).map(function (e, n) {
                        return e >= 0
                          ? e
                          : (nn(-1 === e, function () {
                              return (
                                "Negative size values should be exactly -1 but got " +
                                ""
                                  .concat(e, " for the slice() size at index ")
                                  .concat(n, ".")
                              );
                            }),
                            t.shape[n] - r[n]);
                      })),
                      [r, i]
                    );
                  })(r, i, a),
                  2,
                ),
                u = s[0],
                l = s[1],
                p = [],
                f = 0;
              f < t.rank;
              f++
            )
              p.push([u[f], o[f] - u[f] - l[f]]);
            return {
              x: function () {
                return ys(t, p);
              },
            };
          },
        },
        {
          kernelName: "Softmax",
          outputsToSave: [!0],
          gradFunc: function (t, e, n) {
            var r = c(e, 1)[0],
              i = n.dim,
              a = $r(t, r);
            return {
              logits: function () {
                return si(a, $r(fi(a, [i], true), r));
              },
            };
          },
        },
        {
          kernelName: "Softplus",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(t, us(n));
              },
            };
          },
        },
        Ks,
        Ks,
        Hs,
        Hs,
        {
          kernelName: Ge,
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return ni(t, $r(ai(Xr(n, "float32")), 2));
              },
            };
          },
        },
        Js,
        {
          kernelName: "Square",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(t, $r(Xr(n, "float32"), 2));
              },
            };
          },
        },
        {
          kernelName: Qe,
          gradFunc: function (t) {
            return {
              x: function () {
                return vi(t);
              },
            };
          },
        },
        Zs,
        {
          kernelName: "Sum",
          inputsToSave: ["x"],
          gradFunc: function (t, e, n) {
            var r = c(e, 1)[0],
              i = r.shape.slice();
            un(n.axis, r.shape).forEach(function (t) {
              i[t] = 1;
            });
            var a = pi(t, i),
              o = $r(a, uo(r.shape, "float32"));
            return {
              x: function () {
                return o;
              },
            };
          },
        },
        {
          kernelName: "Tan",
          inputsToSave: ["x"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return ni(t, oi(cs(n)));
              },
            };
          },
        },
        {
          kernelName: "Tanh",
          outputsToSave: [!0],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return $r(si(ii(1), oi(n)), t);
              },
            };
          },
        },
        {
          kernelName: Je,
          inputsToSave: ["x"],
          gradFunc: function (t, e, n) {
            var r = c(e, 1)[0],
              i = n.reps;
            return {
              x: function () {
                var e = vi(r);
                if (1 === r.rank)
                  for (var n = 0; n < i[0]; ++n)
                    e = wi(e, po(t, [n * r.shape[0]], [r.shape[0]]));
                else if (2 === r.rank)
                  for (n = 0; n < i[0]; ++n)
                    for (var a = 0; a < i[1]; ++a)
                      e = wi(
                        e,
                        po(
                          t,
                          [n * r.shape[0], a * r.shape[1]],
                          [r.shape[0], r.shape[1]],
                        ),
                      );
                else if (3 === r.rank)
                  for (n = 0; n < i[0]; ++n)
                    for (a = 0; a < i[1]; ++a)
                      for (var o = 0; o < i[2]; ++o)
                        e = wi(
                          e,
                          po(
                            t,
                            [n * r.shape[0], a * r.shape[1], o * r.shape[2]],
                            [r.shape[0], r.shape[1], r.shape[2]],
                          ),
                        );
                else {
                  if (4 !== r.rank)
                    throw new Error(
                      "Gradient for tile operation is not implemented for rank-" +
                        "".concat(r.rank, " tensors yet."),
                    );
                  for (n = 0; n < i[0]; ++n)
                    for (a = 0; a < i[1]; ++a)
                      for (o = 0; o < i[2]; ++o)
                        for (var s = 0; s < i[3]; ++s)
                          e = wi(
                            e,
                            po(
                              t,
                              [
                                n * r.shape[0],
                                a * r.shape[1],
                                o * r.shape[2],
                                s * r.shape[3],
                              ],
                              [r.shape[0], r.shape[1], r.shape[2], r.shape[3]],
                            ),
                          );
                }
                return e;
              },
            };
          },
        },
        {
          kernelName: Ze,
          gradFunc: function (t, e, n) {
            var r = ha(n.perm);
            return {
              x: function () {
                return ma(t, r);
              },
            };
          },
        },
        {
          kernelName: Ye,
          gradFunc: function (t, e, n) {
            var r = n.axis;
            return {
              value: function () {
                return Ra(t, r);
              },
            };
          },
        },
        {
          kernelName: Xe,
          inputsToSave: ["segmentIds"],
          gradFunc: function (t, e) {
            var n = c(e, 1)[0];
            return {
              x: function () {
                return (function (t, e) {
                  for (
                    var n = vs(e, vi(e)),
                      r = ds(t, n),
                      i = Ui(e, ii(0, "int32")),
                      a = r.rank - i.rank,
                      o = 0;
                    o < a;
                    ++o
                  )
                    i = fs(i, o + 1);
                  i = Vi(i, uo(r.shape, "bool"));
                  var s = vi(r);
                  return Ki(i, r, s);
                })(t, n);
              },
            };
          },
        },
        {
          kernelName: $e,
          gradFunc: function (t) {
            return {
              x: function () {
                return vi(t);
              },
            };
          },
        },
      ];
    try {
      for (var eu = l(tu), nu = eu.next(); !nu.done; nu = eu.next()) {
        var ru = nu.value;
        (Qs = void 0),
          (Qs = ($s = ru).kernelName),
          Fn.has(Qs) &&
            Nn().getBool("DEBUG") &&
            Tn("Overriding the gradient for '".concat(Qs, "'")),
          Fn.set(Qs, $s);
      }
    } catch (t) {
      Ys = { error: t };
    } finally {
      try {
        nu && !nu.done && (Xs = eu.return) && Xs.call(eu);
      } finally {
        if (Ys) throw Ys.error;
      }
    }
    function iu(t, n) {
      return e.tidy(function () {
        return i.sqrt(i.sum(i.mul(t, t), n, !0));
      });
    }
    var au = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.getConfig = function () {
            return {};
          }),
          e
        );
      })(e.serialization.Serializable),
      ou = (function (t) {
        function n(e) {
          var n = t.call(this) || this;
          return (
            (n.defaultMaxValue = 2),
            (n.defaultAxis = 0),
            (n.maxValue = null != e.maxValue ? e.maxValue : n.defaultMaxValue),
            (n.axis = null != e.axis ? e.axis : n.defaultAxis),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.apply = function (t) {
            var n = this;
            return e.tidy(function () {
              var e = iu(t, n.axis),
                r = i.clipByValue(e, 0, n.maxValue);
              return i.mul(t, i.div(r, i.add(st(), e)));
            });
          }),
          (n.prototype.getConfig = function () {
            return { maxValue: this.maxValue, axis: this.axis };
          }),
          n
        );
      })(au);
    (ou.className = "MaxNorm"), e.serialization.registerClass(ou);
    var su = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.defaultAxis = 0),
          (n.axis = null != e.axis ? e.axis : n.defaultAxis),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          var n = this;
          return e.tidy(function () {
            return i.div(t, i.add(st(), iu(t, n.axis)));
          });
        }),
        (n.prototype.getConfig = function () {
          return { axis: this.axis };
        }),
        n
      );
    })(au);
    (su.className = "UnitNorm"), e.serialization.registerClass(su);
    var uu = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.relu(t);
        }),
        e
      );
    })(au);
    (uu.className = "NonNeg"), e.serialization.registerClass(uu);
    var lu = (function (t) {
      function n(e) {
        var n = t.call(this) || this;
        return (
          (n.defaultMinValue = 0),
          (n.defaultMaxValue = 1),
          (n.defaultRate = 1),
          (n.defaultAxis = 0),
          (n.minValue = null != e.minValue ? e.minValue : n.defaultMinValue),
          (n.maxValue = null != e.maxValue ? e.maxValue : n.defaultMaxValue),
          (n.rate = null != e.rate ? e.rate : n.defaultRate),
          (n.axis = null != e.axis ? e.axis : n.defaultAxis),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          var n = this;
          return e.tidy(function () {
            var e = iu(t, n.axis),
              r = i.add(
                i.mul(n.rate, i.clipByValue(e, n.minValue, n.maxValue)),
                i.mul(1 - n.rate, e),
              );
            return i.mul(t, i.div(r, i.add(st(), e)));
          });
        }),
        (n.prototype.getConfig = function () {
          return {
            minValue: this.minValue,
            maxValue: this.maxValue,
            rate: this.rate,
            axis: this.axis,
          };
        }),
        n
      );
    })(au);
    (lu.className = "MinMaxNorm"), e.serialization.registerClass(lu);
    var cu = {
      maxNorm: "MaxNorm",
      minMaxNorm: "MinMaxNorm",
      nonNeg: "NonNeg",
      unitNorm: "UnitNorm",
    };
    function hu(t) {
      return A(t);
    }
    function pu(t, n) {
      return (
        void 0 === n && (n = {}),
        E(
          t,
          e.serialization.SerializationMap.getMap().classNameMap,
          n,
          "constraint",
        )
      );
    }
    function fu(t) {
      return null == t
        ? null
        : "string" == typeof t
          ? pu({ className: t in cu ? cu[t] : t, config: {} })
          : t instanceof au
            ? t
            : pu(t);
    }
    var du = {
      __proto__: null,
      maxNorm: function (t) {
        return new ou(t);
      },
      minMaxNorm: function (t) {
        return new lu(t);
      },
      nonNeg: function () {
        return new uu();
      },
      unitNorm: function (t) {
        return new su(t);
      },
    };
    var gu,
      vu = {
        __proto__: null,
        constant: function (t) {
          return new Tt(t);
        },
        glorotNormal: function (t) {
          return new Ot(t);
        },
        glorotUniform: function (t) {
          return new Rt(t);
        },
        heNormal: function (t) {
          return new Mt(t);
        },
        heUniform: function (t) {
          return new Bt(t);
        },
        identity: function (t) {
          return new _t(t);
        },
        leCunNormal: function (t) {
          return new Pt(t);
        },
        leCunUniform: function (t) {
          return new jt(t);
        },
        ones: function () {
          return new Et();
        },
        orthogonal: function (t) {
          return new Ut(t);
        },
        randomNormal: function (t) {
          return new Ft(t);
        },
        randomUniform: function (t) {
          return new Ct(t);
        },
        truncatedNormal: function (t) {
          return new Dt(t);
        },
        varianceScaling: function (t) {
          return new Lt(t);
        },
        zeros: function () {
          return new zt();
        },
      };
    function yu(t) {
      return s(this, void 0, void 0, function () {
        var n, r, i, a, o, s, l, c;
        return u(this, function (u) {
          switch (u.label) {
            case 0:
              if (null == t) return [2];
              for (a in ((n = []), (r = []), (i = []), t))
                "number" != typeof (o = t[a]) &&
                  ((s = o), n.push(s.data()), r.push(a), i.push(s));
              return n.length > 0 ? [4, Promise.all(n)] : [3, 2];
            case 1:
              for (l = u.sent(), c = 0; c < l.length; ++c) t[r[c]] = l[c][0];
              e.dispose(i), (u.label = 2);
            case 2:
              return [2];
          }
        });
      });
    }
    function mu(t) {
      if (null != t)
        for (var e in t) {
          var n = t[e];
          "number" != typeof n && n.dispose();
        }
    }
    !(function (t) {
      (t[(t.SILENT = 0)] = "SILENT"), (t[(t.VERBOSE = 1)] = "VERBOSE");
    })(gu || (gu = {}));
    var bu = (function () {
        function t() {
          this.validationData = null;
        }
        return (
          (t.prototype.setParams = function (t) {
            this.params = t;
          }),
          (t.prototype.onEpochBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.onEpochEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.onBatchBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.onBatchEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.onTrainBegin = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.onTrainEnd = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return [2];
              });
            });
          }),
          (t.prototype.setModel = function (t) {}),
          t
        );
      })(),
      wu = (function () {
        function t(t, e) {
          void 0 === e && (e = 10),
            null == t && (t = []),
            (this.callbacks = t),
            (this.queueLength = e);
        }
        return (
          (t.prototype.append = function (t) {
            this.callbacks.push(t);
          }),
          (t.prototype.setParams = function (t) {
            var e, n;
            try {
              for (
                var r = l(this.callbacks), i = r.next();
                !i.done;
                i = r.next()
              ) {
                i.value.setParams(t);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (t.prototype.setModel = function (t) {
            var e, n;
            try {
              for (
                var r = l(this.callbacks), i = r.next();
                !i.done;
                i = r.next()
              ) {
                i.value.setModel(t);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          (t.prototype.onEpochBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n, r, i, a, o;
              return u(this, function (s) {
                switch (s.label) {
                  case 0:
                    null == e && (e = {}), (s.label = 1);
                  case 1:
                    s.trys.push([1, 6, 7, 8]),
                      (n = l(this.callbacks)),
                      (r = n.next()),
                      (s.label = 2);
                  case 2:
                    return r.done ? [3, 5] : [4, r.value.onEpochBegin(t, e)];
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return (r = n.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (i = s.sent()), (a = { error: i }), [3, 8];
                  case 7:
                    try {
                      r && !r.done && (o = n.return) && o.call(n);
                    } finally {
                      if (a) throw a.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.onEpochEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n, r, i, a, o;
              return u(this, function (s) {
                switch (s.label) {
                  case 0:
                    null == e && (e = {}), (s.label = 1);
                  case 1:
                    s.trys.push([1, 6, 7, 8]),
                      (n = l(this.callbacks)),
                      (r = n.next()),
                      (s.label = 2);
                  case 2:
                    return r.done ? [3, 5] : [4, r.value.onEpochEnd(t, e)];
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return (r = n.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (i = s.sent()), (a = { error: i }), [3, 8];
                  case 7:
                    try {
                      r && !r.done && (o = n.return) && o.call(n);
                    } finally {
                      if (a) throw a.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.onBatchBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n, r, i, a, o;
              return u(this, function (s) {
                switch (s.label) {
                  case 0:
                    null == e && (e = {}), (s.label = 1);
                  case 1:
                    s.trys.push([1, 6, 7, 8]),
                      (n = l(this.callbacks)),
                      (r = n.next()),
                      (s.label = 2);
                  case 2:
                    return r.done ? [3, 5] : [4, r.value.onBatchBegin(t, e)];
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return (r = n.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (i = s.sent()), (a = { error: i }), [3, 8];
                  case 7:
                    try {
                      r && !r.done && (o = n.return) && o.call(n);
                    } finally {
                      if (a) throw a.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.onBatchEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n, r, i, a, o;
              return u(this, function (s) {
                switch (s.label) {
                  case 0:
                    null == e && (e = {}), (s.label = 1);
                  case 1:
                    s.trys.push([1, 6, 7, 8]),
                      (n = l(this.callbacks)),
                      (r = n.next()),
                      (s.label = 2);
                  case 2:
                    return r.done ? [3, 5] : [4, r.value.onBatchEnd(t, e)];
                  case 3:
                    s.sent(), (s.label = 4);
                  case 4:
                    return (r = n.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (i = s.sent()), (a = { error: i }), [3, 8];
                  case 7:
                    try {
                      r && !r.done && (o = n.return) && o.call(n);
                    } finally {
                      if (a) throw a.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.onTrainBegin = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n, r, i, a;
              return u(this, function (o) {
                switch (o.label) {
                  case 0:
                    null == t && (t = {}), (o.label = 1);
                  case 1:
                    o.trys.push([1, 6, 7, 8]),
                      (e = l(this.callbacks)),
                      (n = e.next()),
                      (o.label = 2);
                  case 2:
                    return n.done ? [3, 5] : [4, n.value.onTrainBegin(t)];
                  case 3:
                    o.sent(), (o.label = 4);
                  case 4:
                    return (n = e.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (r = o.sent()), (i = { error: r }), [3, 8];
                  case 7:
                    try {
                      n && !n.done && (a = e.return) && a.call(e);
                    } finally {
                      if (i) throw i.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.onTrainEnd = function (t) {
            return s(this, void 0, void 0, function () {
              var e, n, r, i, a;
              return u(this, function (o) {
                switch (o.label) {
                  case 0:
                    null == t && (t = {}), (o.label = 1);
                  case 1:
                    o.trys.push([1, 6, 7, 8]),
                      (e = l(this.callbacks)),
                      (n = e.next()),
                      (o.label = 2);
                  case 2:
                    return n.done ? [3, 5] : [4, n.value.onTrainEnd(t)];
                  case 3:
                    o.sent(), (o.label = 4);
                  case 4:
                    return (n = e.next()), [3, 2];
                  case 5:
                    return [3, 8];
                  case 6:
                    return (r = o.sent()), (i = { error: r }), [3, 8];
                  case 7:
                    try {
                      n && !n.done && (a = e.return) && a.call(e);
                    } finally {
                      if (i) throw i.error;
                    }
                    return [7];
                  case 8:
                    return [2];
                }
              });
            });
          }),
          t
        );
      })(),
      ku = (function (t) {
        function n() {
          return t.call(this) || this;
        }
        return (
          o(n, t),
          (n.prototype.onEpochBegin = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return (this.seen = 0), (this.totals = {}), [2];
              });
            });
          }),
          (n.prototype.onBatchEnd = function (t, n) {
            return s(this, void 0, void 0, function () {
              var t,
                r,
                i,
                a,
                o = this;
              return u(this, function (s) {
                for (a in (null == n && (n = {}),
                (t = null == n.size ? 0 : n.size),
                (this.seen += t),
                (r = function (r) {
                  var a = n[r];
                  if ("number" == typeof a)
                    i.totals.hasOwnProperty(r) || (i.totals[r] = 0),
                      (i.totals[r] = i.totals[r] + a * t);
                  else {
                    var s = void 0;
                    r in i.totals ? (s = i.totals[r]) : (i.totals[r] = 0);
                    var u = e.tidy(function () {
                      return e.add(o.totals[r], e.mul(a, t));
                    });
                    (i.totals[r] = u), null != s && s.dispose();
                  }
                }),
                (i = this),
                n))
                  r(a);
                return [2];
              });
            });
          }),
          (n.prototype.onEpochEnd = function (t, n) {
            return s(this, void 0, void 0, function () {
              var t,
                r,
                i,
                a,
                o,
                s,
                c,
                h = this;
              return u(this, function (u) {
                if (null != n) {
                  (t = function (t) {
                    if (null == r.totals[t]) return "continue";
                    "number" == typeof r.totals[t]
                      ? (n[t] = r.totals[t] / r.seen)
                      : e.tidy(function () {
                          var r = e.mul(e.div(1, h.seen), h.totals[t]);
                          (n[t] = r), h.totals[t].dispose(), e.keep(n[t]);
                        });
                  }),
                    (r = this);
                  try {
                    for (
                      i = l(this.params.metrics), a = i.next();
                      !a.done;
                      a = i.next()
                    )
                      (o = a.value), t(o);
                  } catch (t) {
                    s = { error: t };
                  } finally {
                    try {
                      a && !a.done && (c = i.return) && c.call(i);
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                }
                return [2];
              });
            });
          }),
          n
        );
      })(bu),
      xu = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.onTrainBegin = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (t) {
                return (this.epoch = []), (this.history = {}), [2];
              });
            });
          }),
          (e.prototype.onEpochEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n;
              return u(this, function (r) {
                for (n in (null == e && (e = {}), this.epoch.push(t), e))
                  null == this.history[n] && (this.history[n] = []),
                    this.history[n].push(e[n]);
                return [2];
              });
            });
          }),
          (e.prototype.syncData = function () {
            return s(this, void 0, void 0, function () {
              var t, e, n, r, i, a, o, s, l;
              return u(this, function (u) {
                switch (u.label) {
                  case 0:
                    for (r in ((t = []), (e = []), (n = []), this.history))
                      for (i = this.history[r], a = 0; a < i.length; ++a)
                        "number" != typeof i[a] &&
                          ((o = i[a]), t.push(o.data()), e.push(r), n.push(a));
                    return [4, Promise.all(t)];
                  case 1:
                    for (s = u.sent(), l = 0; l < s.length; ++l)
                      this.history[e[l]][n[l]].dispose(),
                        (this.history[e[l]][n[l]] = s[l][0]);
                    return [2];
                }
              });
            });
          }),
          e
        );
      })(bu),
      Su = (function (t) {
        function n(n, r) {
          var i,
            a,
            o,
            s,
            u,
            l = t.call(this) || this;
          if (
            ((l.currentEpoch = 0),
            (l.nowFunc = n.nowFunc),
            (l.nextFrameFunc = n.nextFrameFunc || e.nextFrame),
            (l.yieldEvery = r || "auto"),
            "auto" === l.yieldEvery && (l.yieldEvery = 125),
            "never" === l.yieldEvery && null != n.onYield)
          )
            throw new Error(
              "yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback",
            );
          return (
            e.util.isNumber(l.yieldEvery) &&
              (l.maybeWait =
                ((i = l.maybeWait.bind(l)),
                (a = l.yieldEvery),
                (o = l.nowFunc),
                (u = null != o ? o() : e.util.now()),
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = null != o ? o() : e.util.now();
                  return r - u < a
                    ? s
                    : ((u = r), (s = i.apply(void 0, h([], c(t), !1))));
                })),
            (l.trainBegin = n.onTrainBegin),
            (l.trainEnd = n.onTrainEnd),
            (l.epochBegin = n.onEpochBegin),
            (l.epochEnd = n.onEpochEnd),
            (l.batchBegin = n.onBatchBegin),
            (l.batchEnd = n.onBatchEnd),
            (l.yield = n.onYield),
            l
          );
        }
        return (
          o(n, t),
          (n.prototype.maybeWait = function (t, e, n) {
            return s(this, void 0, void 0, function () {
              var r;
              return u(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (r = []), null == this.yield ? [3, 2] : [4, yu(n)];
                  case 1:
                    i.sent(), r.push(this.yield(t, e, n)), (i.label = 2);
                  case 2:
                    return r.push(this.nextFrameFunc()), [4, Promise.all(r)];
                  case 3:
                    return i.sent(), [2];
                }
              });
            });
          }),
          (n.prototype.onEpochBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (this.currentEpoch = t),
                      null == this.epochBegin ? [3, 3] : [4, yu(e)]
                    );
                  case 1:
                    return n.sent(), [4, this.epochBegin(t, e)];
                  case 2:
                    n.sent(), (n.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (n.prototype.onEpochEnd = function (t, e) {
            return s(this, void 0, void 0, function () {
              var n;
              return u(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (n = []), null == this.epochEnd ? [3, 2] : [4, yu(e)];
                  case 1:
                    r.sent(), n.push(this.epochEnd(t, e)), (r.label = 2);
                  case 2:
                    return (
                      "epoch" === this.yieldEvery && n.push(this.nextFrameFunc()),
                      [4, Promise.all(n)]
                    );
                  case 3:
                    return r.sent(), [2];
                }
              });
            });
          }),
          (n.prototype.onBatchBegin = function (t, e) {
            return s(this, void 0, void 0, function () {
              return u(this, function (n) {
                switch (n.label) {
                  case 0:
                    return null == this.batchBegin ? [3, 3] : [4, yu(e)];
                  case 1:
                    return n.sent(), [4, this.batchBegin(t, e)];
                  case 2:
                    n.sent(), (n.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (n.prototype.onBatchEnd = function (t, n) {
            return s(this, void 0, void 0, function () {
              var r;
              return u(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (r = []), null == this.batchEnd ? [3, 2] : [4, yu(n)];
                  case 1:
                    i.sent(), r.push(this.batchEnd(t, n)), (i.label = 2);
                  case 2:
                    return (
                      "batch" === this.yieldEvery
                        ? r.push(this.nextFrameFunc())
                        : e.util.isNumber(this.yieldEvery) &&
                          r.push(this.maybeWait(this.currentEpoch, t, n)),
                      [4, Promise.all(r)]
                    );
                  case 3:
                    return i.sent(), [2];
                }
              });
            });
          }),
          (n.prototype.onTrainBegin = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null == this.trainBegin ? [3, 3] : [4, yu(t)];
                  case 1:
                    return e.sent(), [4, this.trainBegin(t)];
                  case 2:
                    e.sent(), (e.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (n.prototype.onTrainEnd = function (t) {
            return s(this, void 0, void 0, function () {
              return u(this, function (e) {
                switch (e.label) {
                  case 0:
                    return null == this.trainEnd ? [3, 3] : [4, yu(t)];
                  case 1:
                    return e.sent(), [4, this.trainEnd(t)];
                  case 2:
                    e.sent(), (e.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          n
        );
      })(bu);
    function Nu(t, e) {
      return (
        null == t && (t = {}),
        t instanceof bu
          ? [t]
          : Array.isArray(t) && t[0] instanceof bu
            ? t
            : x(t).map(function (t) {
                return new Su(t, e);
              })
      );
    }
    var Iu = (function () {
      function t() {}
      return (
        (t.registerCallbackConstructor = function (n, r) {
          e.util.assert(n >= 0 && Number.isInteger(n), function () {
            return (
              "Verbosity level is expected to be an integer >= 0, " +
              "but got ".concat(n)
            );
          }),
            t.checkForDuplicate(r),
            null == t.constructors[n] && (t.constructors[n] = []),
            t.constructors[n].push(r);
        }),
        (t.checkForDuplicate = function (e) {
          for (var n in t.constructors) {
            t.constructors[+n].forEach(function (t) {
              if (t === e) throw new d("Duplicate callback constructor.");
            });
          }
        }),
        (t.clear = function () {
          t.constructors = {};
        }),
        (t.createCallbacks = function (e) {
          var n = [];
          for (var r in t.constructors) {
            var i = +r;
            e >= i && n.push.apply(n, h([], c(t.constructors[i]), !1));
          }
          return n.map(function (t) {
            return new t();
          });
        }),
        t
      );
    })();
    function Au(t, e, n, r, i, a, o, s, u) {
      var l = new xu(),
        p = h([new ku()], c(Iu.createCallbacks(e)), !1);
      null != t && p.push.apply(p, h([], c(t), !1)), p.push(l);
      var f = new wu(p);
      return (
        f.setParams({
          epochs: n,
          initialEpoch: r,
          samples: i,
          steps: a,
          batchSize: o,
          verbose: e,
          doValidation: s,
          metrics: u,
        }),
        { callbackList: f, history: l }
      );
    }
    function zu(t, n, r) {
      return (
        void 0 === n && (n = {}),
        void 0 === r && (r = !1),
        E(
          t,
          e.serialization.SerializationMap.getMap().classNameMap,
          n,
          "layer",
          r,
        )
      );
    }
    function Eu(t, n) {
      return e.tidy(function () {
        "float32" !== t.dtype && (t = i.cast(t, "float32"));
        var e = i.sum(bt(t), n, !0),
          r = i.fill(e.shape, st()),
          a = i.sqrt(i.maximum(e, r));
        return i.div(t, a);
      });
    }
    function Tu(t, n) {
      return e.tidy(function () {
        return i.mean(bt(i.sub(n, t)), -1);
      });
    }
    function Cu(t, n) {
      return e.tidy(function () {
        return i.mean(i.abs(i.sub(n, t)), -1);
      });
    }
    function Fu(t, n) {
      return e.tidy(function () {
        var e = i.sub(t, n),
          r = i.clipByValue(i.abs(t), st(), Number.MAX_VALUE),
          a = i.abs(i.div(e, r));
        return i.mul(100, i.mean(a, -1));
      });
    }
    function Du(t, n, r) {
      return (
        void 0 === r && (r = !1),
        e.tidy(function () {
          if (r) n = i.softmax(n);
          else {
            var e = i.sum(n, n.shape.length - 1, !0);
            n = i.div(n, e);
          }
          return (
            (n = i.clipByValue(n, st(), 1 - st())),
            i.neg(
              i.sum(i.mul(i.cast(t, "float32"), i.log(n)), n.shape.length - 1),
            )
          );
        })
      );
    }
    function _u(t, n, r) {
      return (
        void 0 === r && (r = !1),
        e.tidy(function () {
          var e,
            a,
            o = i.cast(
              i.floor(((a = [rt((e = t).shape)]), i.reshape(e, a))),
              "int32",
            ),
            s = (n = i.clipByValue(n, st(), 1 - st())).shape;
          return Du(i.reshape(i.oneHot(o, s[s.length - 1]), s), n, r);
        })
      );
    }
    function Lu(t, n) {
      return e.tidy(function () {
        var r;
        return (
          (r = i.clipByValue(n, st(), 1 - st())),
          (r = i.log(i.div(r, i.sub(1, r)))),
          i.mean(
            (function (t, n) {
              if (!e.util.arraysEqual(t.shape, n.shape))
                throw new d(
                  "logits and labels must have the same shape, but got shapes " +
                    ""
                      .concat(JSON.stringify(t.shape), " and ")
                      .concat(JSON.stringify(n.shape)),
                );
              return e.tidy(function () {
                var e = i.relu(n),
                  r = i.neg(i.abs(n));
                return i.add(i.sub(e, i.mul(n, t)), i.log1p(i.exp(r)));
              });
            })(t, r),
            -1,
          )
        );
      });
    }
    function Ru(t, n) {
      return e.tidy(function () {
        var e = Eu(t, -1),
          r = Eu(n, -1),
          a = i.mul(e, r);
        return i.neg(i.sum(a, -1));
      });
    }
    Iu.constructors = {};
    var Ou = {
      meanSquaredError: Tu,
      meanAbsoluteError: Cu,
      meanAbsolutePercentageError: Fu,
      meanSquaredLogarithmicError: function (t, n) {
        return e.tidy(function () {
          var e = i.clipByValue(n, st(), Number.MAX_VALUE),
            r = i.log(i.add(1, e)),
            a = i.clipByValue(t, st(), Number.MAX_VALUE),
            o = i.log(i.add(1, a));
          return i.mean(bt(i.sub(r, o)), -1);
        });
      },
      squaredHinge: function (t, n) {
        return e.tidy(function () {
          var e = i.maximum(0, i.sub(1, i.mul(t, n)));
          return i.mean(bt(e), -1);
        });
      },
      hinge: function (t, n) {
        return e.tidy(function () {
          var e = i.maximum(0, i.sub(1, i.mul(t, n)));
          return i.mean(e, -1);
        });
      },
      categoricalHinge: function (t, n) {
        return e.tidy(function () {
          var e = i.sum(i.mul(t, n), -1),
            r = i.max(i.mul(i.sub(1, t), n), -1);
          return i.maximum(0, i.add(1, i.sub(r, e)));
        });
      },
      logcosh: function (t, n) {
        return e.tidy(function () {
          var e = Math.log(2),
            r = i.sub(n, t),
            a = i.sub(i.add(r, i.softplus(i.mul(-2, r))), e);
          return i.mean(a, -1);
        });
      },
      categoricalCrossentropy: Du,
      sparseCategoricalCrossentropy: _u,
      binaryCrossentropy: Lu,
      kullbackLeiblerDivergence: function (t, n) {
        return e.tidy(function () {
          var e = i.clipByValue(t, st(), 1),
            r = i.clipByValue(n, st(), 1);
          return i.sum(i.mul(t, i.log(i.div(e, r))), -1);
        });
      },
      poisson: function (t, n) {
        return e.tidy(function () {
          var e = i.log(i.add(st(), n));
          return i.mean(i.sub(n, i.mul(t, e)), -1);
        });
      },
      cosineProximity: Ru,
    };
    function Mu(t) {
      if ("string" == typeof t) {
        if (t in Ou) return Ou[t];
        var e = "Unknown loss ".concat(t);
        throw (
          (t.toLowerCase().includes("softmaxcrossentropy") &&
            (e =
              "Unknown loss ".concat(t, ". ") +
              'Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy'),
          new d(e))
        );
      }
      return t;
    }
    function Bu(t, n) {
      return e.tidy(function () {
        var e = i.mul(0.5, i.onesLike(n)),
          r = ut(i.greater(n, e), t.dtype);
        return i.mean(i.equal(t, r), -1);
      });
    }
    function Pu(t, n) {
      return e.tidy(function () {
        return ut(i.equal(i.argMax(t, -1), i.argMax(n, -1)), "float32");
      });
    }
    function ju(t, n) {
      return e.tidy(function () {
        return i.cast(
          i.sum(i.logicalAnd(i.equal(t, 1), i.equal(n, 1))),
          "float32",
        );
      });
    }
    function Uu(t, n) {
      return e.tidy(function () {
        var r = ju(t, n),
          a = (function (t, n) {
            return e.tidy(function () {
              return i.cast(
                i.sum(i.logicalAnd(i.equal(t, 0), i.equal(n, 1))),
                "float32",
              );
            });
          })(t, n),
          o = i.add(r, a);
        return i.cast(i.where(i.greater(o, 0), i.div(r, o), 0), "float32");
      });
    }
    function Wu(t, n) {
      return e.tidy(function () {
        var r = ju(t, n),
          a = (function (t, n) {
            return e.tidy(function () {
              return i.cast(
                i.sum(i.logicalAnd(i.equal(t, 1), i.equal(n, 0))),
                "float32",
              );
            });
          })(t, n),
          o = i.add(r, a);
        return i.cast(i.where(i.greater(o, 0), i.div(r, o), 0), "float32");
      });
    }
    function Vu(t, e) {
      return Lu(t, e);
    }
    function qu(t, e) {
      return (
        t.rank === e.rank && (t = i.squeeze(t, [t.rank - 1])),
        (e = i.argMax(e, -1)).dtype !== t.dtype && (e = i.cast(e, t.dtype)),
        i.cast(i.equal(t, e), "float32")
      );
    }
    var Gu = Du,
      Ku = _u,
      Hu = {
        binaryAccuracy: Bu,
        categoricalAccuracy: Pu,
        precision: Uu,
        categoricalCrossentropy: Gu,
        sparseCategoricalCrossentropy: Ku,
        mse: Tu,
        MSE: Tu,
        mae: Cu,
        MAE: Cu,
        mape: Fu,
        MAPE: Fu,
        cosine: Ru,
      };
    function Ju(t) {
      var e, n, r, i;
      if (
        (b(null !== t, "Unknown LossOrMetricFn ".concat(t)), "string" == typeof t)
      )
        return t;
      var a = void 0;
      try {
        for (var o = l(Object.keys(Ou)), s = o.next(); !s.done; s = o.next()) {
          var u = s.value;
          if (Ou[u] === t) {
            a = u;
            break;
          }
        }
      } catch (t) {
        e = { error: t };
      } finally {
        try {
          s && !s.done && (n = o.return) && n.call(o);
        } finally {
          if (e) throw e.error;
        }
      }
      if (void 0 !== a) return a;
      try {
        for (var c = l(Object.keys(Hu)), h = c.next(); !h.done; h = c.next()) {
          u = h.value;
          if (Hu[u] === t) {
            a = u;
            break;
          }
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          h && !h.done && (i = c.return) && i.call(c);
        } finally {
          if (r) throw r.error;
        }
      }
      return void 0 !== a ? a : t.name;
    }
    var Zu = 1048576;
    function Yu(t, e, n) {
      if (
        (void 0 === n && (n = !1),
        null == t ||
          "object" != typeof t ||
          Object.getPrototypeOf(t) !== Object.prototype ||
          !Xu(t))
      )
        throw new Error(
          "User-defined metadata is expected to be a JSON object, but is not.",
        );
      if (n) {
        var r = JSON.stringify(t);
        r.length > Zu &&
          console.warn(
            'User-defined metadata of model "'.concat(e, '" is too large in ') +
              "size (length=".concat(r.length, " when serialized). It is not ") +
              "recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= " +
              "".concat(Zu, "."),
          );
      }
    }
    function Xu(t) {
      var e, n, r, i;
      if (null === t) return !0;
      if ("object" == typeof t) {
        if (Object.getPrototypeOf(t) === Object.prototype) {
          var a = Object.keys(t);
          try {
            for (var o = l(a), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              if ("string" != typeof u) return !1;
              if (!Xu(t[u])) return !1;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return !0;
        }
        if (Array.isArray(t)) {
          try {
            for (var c = l(t), h = c.next(); !h.done; h = c.next()) {
              if (!Xu(h.value)) return !1;
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              h && !h.done && (i = c.return) && i.call(c);
            } finally {
              if (r) throw r.error;
            }
          }
          return !0;
        }
        return !1;
      }
      var p = typeof t;
      return "string" === p || "number" === p || "boolean" === p;
    }
    function $u(t, e, n, r) {
      void 0 === r && (r = console.log);
      var i,
        a = (function (t) {
          var e,
            n,
            r,
            i,
            a,
            o,
            s = !0,
            u = [],
            p = [];
          for (var f in t.nodesByDepth) u.push(t.nodesByDepth[f]);
          try {
            for (var d = l(u), g = d.next(); !g.done; g = d.next()) {
              var v = g.value;
              if (
                v.length > 1 ||
                (1 === v.length && v[0].inboundLayers.length > 1)
              ) {
                s = !1;
                break;
              }
              p.push.apply(p, h([], c(v), !1));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              g && !g.done && (n = d.return) && n.call(d);
            } finally {
              if (e) throw e.error;
            }
          }
          if (s)
            try {
              for (var y = l(t.layers), m = y.next(); !m.done; m = y.next()) {
                var b = m.value,
                  w = !1;
                try {
                  for (
                    var k = ((a = void 0), l(b.inboundNodes)), x = k.next();
                    !x.done;
                    x = k.next()
                  ) {
                    var S = x.value;
                    if (-1 !== p.indexOf(S)) {
                      if (w) {
                        s = !1;
                        break;
                      }
                      w = !0;
                    }
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    x && !x.done && (o = k.return) && o.call(k);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                if (!s) break;
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                m && !m.done && (i = y.return) && i.call(y);
              } finally {
                if (r) throw r.error;
              }
            }
          return s;
        })(t),
        o = ["Layer (type)", "Input Shape", "Output shape", "Param #"];
      if (
        (a
          ? ((e = e || 90), (n = n || [0.32, 0.61, 0.89, 1]))
          : ((e = e || 115), (n = n || [0.24, 0.48, 0.7, 0.8, 1])),
        n[n.length - 1] <= 1 &&
          (n = n.map(function (t) {
            return Math.floor(e * t);
          })),
        !a)
      )
        for (var s in (o.push("Receives inputs"), (i = []), t.nodesByDepth))
          i.push.apply(i, h([], c(t.nodesByDepth[s]), !1));
      r("_".repeat(e)), Qu(o, n, r), r("=".repeat(e));
      for (var u = t.layers, p = 0; p < u.length; ++p)
        a ? tl(u[p], n, r) : el(u[p], n, i, r),
          r((p === u.length - 1 ? "=" : "_").repeat(e));
      t.checkTrainableWeightsConsistency();
      var f = (function (t) {
          var e;
          e =
            null != t.collectedTrainableWeights
              ? Yt(t.collectedTrainableWeights)
              : Yt(t.trainableWeights);
          return e;
        })(t),
        d = Yt(t.nonTrainableWeights);
      r("Total params: ".concat(f + d)),
        r("Trainable params: ".concat(f)),
        r("Non-trainable params: ".concat(d)),
        r("_".repeat(e));
    }
    function Qu(t, e, n) {
      void 0 === n && (n = console.log);
      for (var r = "", i = 0; i < t.length; ++i)
        i > 0 && (r = r.slice(0, r.length - 1) + " "),
          (r = (r += t[i]).slice(0, e[i])),
          (r += " ".repeat(e[i] - r.length));
      n(r);
    }
    function tl(t, e, n) {
      var r, i;
      try {
        i = t.inboundNodes
          .map(function (t) {
            return JSON.stringify(t.inputShapes);
          })
          .join(",");
      } catch (t) {
        i = "multiple";
      }
      try {
        r = JSON.stringify(t.outputShape);
      } catch (t) {
        r = "multiple";
      }
      var a = t.name,
        o = t.getClassName();
      Qu(
        ["".concat(a, " (").concat(o, ")"), i, r, t.countParams().toString()],
        e,
        n,
      );
    }
    function el(t, e, n, r) {
      var i, a, o, s;
      try {
        s = t.inboundNodes
          .map(function (t) {
            return JSON.stringify(t.inputShapes);
          })
          .join(",");
      } catch (t) {
        s = "multiple";
      }
      try {
        o = JSON.stringify(t.outputShape);
      } catch (t) {
        o = "multiple";
      }
      var u = [];
      try {
        for (var c = l(t.inboundNodes), h = c.next(); !h.done; h = c.next()) {
          var p = h.value;
          if (!(null != n && n.length > 0 && -1 === n.indexOf(p)))
            for (var f = 0; f < p.inboundLayers.length; ++f) {
              var d = p.inboundLayers[f].name,
                g = p.nodeIndices[f],
                v = p.tensorIndices[f];
              u.push("".concat(d, "[").concat(g, "][").concat(v, "]"));
            }
        }
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      var y = t.name,
        m = t.getClassName(),
        b = 0 === u.length ? "" : u[0];
      Qu(
        ["".concat(y, " (").concat(m, ")"), s, o, t.countParams().toString(), b],
        e,
        r,
      );
      for (f = 1; f < u.length; ++f) Qu(["", "", "", "", u[f]], e, r);
    }
    function nl(t, e, n) {
      return (
        ("inboundNodes" === t || "outputLayers" === t || "inputLayers" === t) &&
        0 === e &&
        "string" == typeof n
      );
    }
    function rl(t, e) {
      var n, r;
      if (null === t) return null;
      if ("string" == typeof t) return N(t);
      if ("number" == typeof t || "boolean" == typeof t) return t;
      if (t instanceof Array) {
        for (var i = [], a = t.length, o = 0; o < a; ++o) {
          var s = t[o];
          nl(e, o, s) ? i.push(s) : i.push(rl(s, e));
        }
        return i;
      }
      var u = {};
      try {
        for (var c = l(Object.keys(t)), h = c.next(); !h.done; h = c.next()) {
          var p = h.value,
            f = t[p];
          if ("name" === p && "string" == typeof f) u[p] = f;
          else {
            var d = N(p);
            u[d] = rl(f, d);
          }
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          h && !h.done && (r = c.return) && r.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      return u;
    }
    function il(t, e) {
      var n, r;
      if (null == t) return null;
      if ("string" == typeof t) return S(t);
      if ("number" == typeof t || "boolean" == typeof t) return t;
      if (t instanceof Array) {
        for (var i = [], a = t.length, o = 0; o < a; ++o) {
          var s = t[o];
          nl(e, o, s) ? i.push(s) : i.push(il(s, e));
        }
        return i;
      }
      var u = {};
      try {
        for (var c = l(Object.keys(t)), h = c.next(); !h.done; h = c.next()) {
          var p = h.value,
            f = t[p],
            d = S(p);
          u[d] =
            ("name" !== p && "className" !== p) || "string" != typeof f
              ? il(f, p)
              : f;
        }
      } catch (t) {
        n = { error: t };
      } finally {
        try {
          h && !h.done && (r = c.return) && r.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      return u;
    }
    var al = "4.17.0",
      ol = (function (t) {
        function n(e) {
          var r,
            i,
            a,
            o,
            s,
            u,
            c,
            h,
            p,
            g,
            v,
            y,
            m,
            w,
            k,
            x,
            S,
            N,
            I,
            A,
            z,
            E,
            F,
            D,
            _ = t.call(this, {}) || this;
          if (
            ((_.containerNodes = new Set()), (_.name = e.name), null == _.name)
          ) {
            var L = _.getClassName().toLowerCase();
            _.name = j(L);
          }
          if (
            ((_.supportsMasking = !1),
            (_.trainable_ = !0),
            Array.isArray(e.inputs)
              ? (_.inputs = e.inputs.slice())
              : (_.inputs = [e.inputs]),
            Array.isArray(e.outputs)
              ? (_.outputs = e.outputs.slice())
              : (_.outputs = [e.outputs]),
            C(_.inputs).length !== _.inputs.length)
          )
            throw new d(
              "The list of inputs passed to the model is redundant. All inputs should only appear once. Found: " +
                "".concat(
                  _.inputs.map(function (t) {
                    return t.name;
                  }),
                ),
            );
          C(_.outputs).length !== _.outputs.length &&
            console.warn(
              "The list of outputs passed to the model is redundant. All outputs should only appear once. Found: " +
                "".concat(
                  _.outputs.map(function (t) {
                    return t.name;
                  }),
                ),
            ),
            (_.inputLayers = []),
            (_.inputLayersNodeIndices = []),
            (_.inputLayersTensorIndices = []),
            (_.outputLayers = []),
            (_.outputLayersNodeIndices = []),
            (_.outputLayersTensorIndices = []),
            (_.layers = []),
            (_.internalContainerRefs = []);
          try {
            for (var R = l(_.outputs), O = R.next(); !O.done; O = R.next()) {
              var M = (rt = O.value).sourceLayer,
                B = rt.nodeIndex,
                P = rt.tensorIndex;
              _.outputLayers.push(M),
                _.outputLayersNodeIndices.push(B),
                _.outputLayersTensorIndices.push(P);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              O && !O.done && (i = R.return) && i.call(R);
            } finally {
              if (r) throw r.error;
            }
          }
          try {
            for (var U = l(_.inputs), W = U.next(); !W.done; W = U.next()) {
              (M = (rt = W.value).sourceLayer),
                (B = rt.nodeIndex),
                (P = rt.tensorIndex);
              b(0 === B, "input layer has >1 nodes"),
                b(0 === P, "input layer has >1 tensors"),
                _.inputLayers.push(M),
                _.inputLayersNodeIndices.push(B),
                _.inputLayersTensorIndices.push(P);
            }
          } catch (t) {
            a = { error: t };
          } finally {
            try {
              W && !W.done && (o = U.return) && o.call(U);
            } finally {
              if (a) throw a.error;
            }
          }
          (_.inputNames = []),
            (_.outputNames = []),
            (_.feedInputShapes = []),
            (_.feedInputNames = []),
            (_.feedOutputNames = []);
          for (var V = 0; V < _.inputLayers.length; V++) {
            if (!((M = _.inputLayers[V]) instanceof ue))
              throw new TypeError(
                "Input layers to a LayersModel must be InputLayer objects. " +
                  "Received inputs: ".concat(e.inputs, ". ") +
                  "Input ".concat(V, " (0-based) originates ") +
                  "from layer type ".concat(M.getClassName(), "."),
              );
            _.inputNames.push(M.name),
              _.feedInputShapes.push(M.batchInputShape),
              _.feedInputNames.push(M.name);
          }
          try {
            for (var q = l(_.outputLayers), G = q.next(); !G.done; G = q.next()) {
              M = G.value;
              _.outputNames.push(M.name);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              G && !G.done && (u = q.return) && u.call(q);
            } finally {
              if (s) throw s.error;
            }
          }
          (_.internalInputShapes = _.inputs.map(function (t) {
            return t.shape;
          })),
            (_.internalOutputShapes = _.outputs.map(function (t) {
              return t.shape;
            }));
          var K = {},
            H = {},
            J = {},
            Z = {},
            Y = {},
            X = [],
            $ = function (t, e, r, i, a, o) {
              (null != i && null != a && null != o) ||
                ((i = t.sourceLayer), (a = t.nodeIndex), (o = t.tensorIndex));
              var s = i.inboundNodes[a];
              if (-1 !== r.indexOf(s))
                throw new f(
                  "The tensor "
                    .concat(t.name, ' at layer "')
                    .concat(i.name, '" ') + "is part of a cycle.",
                );
              if (-1 === e.indexOf(s)) {
                _.containerNodes.add(n.nodeKey(i, a)),
                  i.id in Y || (Y[i.id] = Object.keys(Y).length),
                  -1 === r.indexOf(s) && r.push(s);
                for (var u = s.inboundLayers.length, l = 0; l < u; l++) {
                  var c = s.inputTensors[l],
                    h = s.inboundLayers[l],
                    p = s.nodeIndices[l],
                    d = s.tensorIndices[l];
                  $(c, e, r, h, p, d);
                }
                for (e.push(s); r.indexOf(s) >= 0; ) r.splice(r.indexOf(s), 1);
                X.push(s);
              }
            },
            Q = [],
            tt = [];
          try {
            for (
              var et = l(_.outputs), nt = et.next();
              !nt.done;
              nt = et.next()
            ) {
              var rt = nt.value;
              $(rt, Q, tt);
            }
          } catch (t) {
            c = { error: t };
          } finally {
            try {
              nt && !nt.done && (h = et.return) && h.call(et);
            } finally {
              if (c) throw c.error;
            }
          }
          var it = X.slice().reverse();
          try {
            for (var at = l(it), ot = at.next(); !ot.done; ot = at.next()) {
              (H[(Et = ot.value).id] = Et), Et.id in K || (K[Et.id] = 0);
              var st = K[Et.id],
                ut = null == J[Et.outboundLayer.id] ? 0 : J[Et.outboundLayer.id];
              (st = Math.max(st, ut)),
                (J[Et.outboundLayer.id] = st),
                (Z[Et.outboundLayer.id] = Et.outboundLayer),
                (K[Et.id] = st);
              for (V = 0; V < Et.inboundLayers.length; V++) {
                var lt = Et.inboundLayers[V],
                  ct = ((B = Et.nodeIndices[V]), lt.inboundNodes[B]),
                  ht = null == K[ct.id] ? 0 : K[ct.id];
                (K[ct.id] = Math.max(st + 1, ht)), (H[ct.id] = ct);
              }
            }
          } catch (t) {
            p = { error: t };
          } finally {
            try {
              ot && !ot.done && (g = at.return) && g.call(at);
            } finally {
              if (p) throw p.error;
            }
          }
          var pt = {};
          for (var ft in K) {
            (st = K[ft]) in pt || (pt[st] = []), pt[st].push(H[ft]);
          }
          var dt = {};
          for (var gt in J) {
            (st = J[gt]) in dt || (dt[st] = []), dt[st].push(Z[gt]);
          }
          var vt = Object.keys(dt)
            .map(function (t) {
              return parseInt(t, 10);
            })
            .sort(T);
          _.layers = [];
          try {
            for (var yt = l(vt), mt = yt.next(); !mt.done; mt = yt.next()) {
              var bt = dt[(st = mt.value)];
              bt.sort(function (t, e) {
                var n = Y[t.id],
                  r = Y[e.id];
                return n < r ? -1 : n > r ? 1 : 0;
              });
              try {
                for (
                  var wt = ((m = void 0), l(bt)), kt = wt.next();
                  !kt.done;
                  kt = wt.next()
                ) {
                  (M = kt.value) instanceof n && _.internalContainerRefs.push(M),
                    _.layers.push(M);
                }
              } catch (t) {
                m = { error: t };
              } finally {
                try {
                  kt && !kt.done && (w = wt.return) && w.call(wt);
                } finally {
                  if (m) throw m.error;
                }
              }
            }
          } catch (t) {
            v = { error: t };
          } finally {
            try {
              mt && !mt.done && (y = yt.return) && y.call(yt);
            } finally {
              if (v) throw v.error;
            }
          }
          (_.layersByDepth = dt),
            (vt = Object.keys(pt)
              .map(function (t) {
                return parseInt(t, 10);
              })
              .sort(T));
          var xt = _.inputs.slice(),
            St = [];
          try {
            for (var Nt = l(vt), It = Nt.next(); !It.done; It = Nt.next()) {
              st = It.value;
              try {
                for (
                  var At = ((S = void 0), l(pt[st])), zt = At.next();
                  !zt.done;
                  zt = At.next()
                ) {
                  var Et;
                  if (null != (M = (Et = zt.value).outboundLayer)) {
                    try {
                      for (
                        var Tt = ((I = void 0), l(Et.inputTensors)),
                          Ct = Tt.next();
                        !Ct.done;
                        Ct = Tt.next()
                      ) {
                        rt = Ct.value;
                        if (-1 === xt.indexOf(rt))
                          throw new f(
                            "Graph disconnected: cannot obtain value for tensor ".concat(
                              rt,
                            ) +
                              ' at layer "'.concat(M.name, '". ') +
                              "The following previous layers were accessed without " +
                              "issue: ".concat(St),
                          );
                      }
                    } catch (t) {
                      I = { error: t };
                    } finally {
                      try {
                        Ct && !Ct.done && (A = Tt.return) && A.call(Tt);
                      } finally {
                        if (I) throw I.error;
                      }
                    }
                    try {
                      for (
                        var Ft = ((z = void 0), l(Et.outputTensors)),
                          Dt = Ft.next();
                        !Dt.done;
                        Dt = Ft.next()
                      ) {
                        rt = Dt.value;
                        xt.push(rt);
                      }
                    } catch (t) {
                      z = { error: t };
                    } finally {
                      try {
                        Dt && !Dt.done && (E = Ft.return) && E.call(Ft);
                      } finally {
                        if (z) throw z.error;
                      }
                    }
                    St.push(M.name);
                  }
                }
              } catch (t) {
                S = { error: t };
              } finally {
                try {
                  zt && !zt.done && (N = At.return) && N.call(At);
                } finally {
                  if (S) throw S.error;
                }
              }
            }
          } catch (t) {
            k = { error: t };
          } finally {
            try {
              It && !It.done && (x = Nt.return) && x.call(Nt);
            } finally {
              if (k) throw k.error;
            }
          }
          _.nodesByDepth = pt;
          var _t = _.layers.map(function (t) {
              return t.name;
            }),
            Lt = function (t) {
              var e = _t.filter(function (e) {
                return e === t;
              }).length;
              if (1 !== e)
                throw new f(
                  'The name "'.concat(t, '" is used ').concat(e, " times ") +
                    "in the model. All layer names should be unique. Layer names: " +
                    JSON.stringify(_t),
                );
            };
          try {
            for (var Rt = l(_t), Ot = Rt.next(); !Ot.done; Ot = Rt.next()) {
              Lt(Ot.value);
            }
          } catch (t) {
            F = { error: t };
          } finally {
            try {
              Ot && !Ot.done && (D = Rt.return) && D.call(Rt);
            } finally {
              if (F) throw F.error;
            }
          }
          return (
            (_.outboundNodes = []),
            (_.inboundNodes = []),
            new ie({
              outboundLayer: _,
              inboundLayers: [],
              nodeIndices: [],
              tensorIndices: [],
              inputTensors: _.inputs,
              outputTensors: _.outputs,
              inputMasks: _.inputs.map(function (t) {
                return null;
              }),
              outputMasks: _.outputs.map(function (t) {
                return null;
              }),
              inputShapes: _.inputs.map(function (t) {
                return t.shape;
              }),
              outputShapes: _.outputs.map(function (t) {
                return t.shape;
              }),
            }),
            (_.built = !0),
            (_._refCount = 1),
            _
          );
        }
        return (
          o(n, t),
          (n.prototype.assertNotDisposed = function () {
            if (0 === this._refCount)
              throw new Error(
                "Container '".concat(this.name, "' is already disposed."),
              );
          }),
          (n.prototype.dispose = function () {
            var t, e, n, r;
            this.assertNotDisposed();
            var i = { refCountAfterDispose: null, numDisposedVariables: 0 };
            if (0 == --this._refCount) {
              try {
                for (
                  var a = l(this.layers), o = a.next();
                  !o.done;
                  o = a.next()
                ) {
                  var s = o.value;
                  i.numDisposedVariables += s.dispose().numDisposedVariables;
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o && !o.done && (e = a.return) && e.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
              try {
                for (
                  var u = l(this.internalContainerRefs), c = u.next();
                  !c.done;
                  c = u.next()
                ) {
                  var h = c.value;
                  i.numDisposedVariables += h.dispose().numDisposedVariables;
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  c && !c.done && (r = u.return) && r.call(u);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            return (i.refCountAfterDispose = this._refCount), i;
          }),
          Object.defineProperty(n.prototype, "trainable", {
            get: function () {
              return this.trainable_;
            },
            set: function (t) {
              this.layers.forEach(function (e) {
                e._trainableWeights.forEach(function (e) {
                  return (e.trainable = t);
                });
              }),
                (this.trainable_ = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "trainableWeights", {
            get: function () {
              var t, e;
              if (this._trainableWeights.length > 0)
                throw new d(
                  "Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.",
                );
              if (!this.trainable) return [];
              var n = [];
              try {
                for (
                  var r = l(this.layers), i = r.next();
                  !i.done;
                  i = r.next()
                ) {
                  var a = i.value;
                  n = n.concat(a.trainableWeights);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  i && !i.done && (e = r.return) && e.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return n;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "nonTrainableWeights", {
            get: function () {
              var t,
                e,
                n,
                r,
                i = [];
              try {
                for (
                  var a = l(this.layers), o = a.next();
                  !o.done;
                  o = a.next()
                ) {
                  var s = o.value;
                  i.push.apply(i, h([], c(s.nonTrainableWeights), !1));
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o && !o.done && (e = a.return) && e.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
              if (!this.trainable) {
                var u = [];
                try {
                  for (
                    var p = l(this.layers), f = p.next();
                    !f.done;
                    f = p.next()
                  ) {
                    s = f.value;
                    u.push.apply(u, h([], c(s.trainableWeights), !1));
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    f && !f.done && (r = p.return) && r.call(p);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return u.concat(i);
              }
              return i;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "weights", {
            get: function () {
              return this.trainableWeights.concat(this.nonTrainableWeights);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.loadWeights = function (t, e) {
            var n, r, i, a;
            void 0 === e && (e = !0);
            var o = {},
              s = 0,
              u = (function (t) {
                var e = Object.keys(t);
                if (0 === e.length) return !1;
                var n = e[0].split("/");
                return !isNaN(parseInt(n[n.length - 1], 10));
              })(t);
            u && this.parseWeights(t);
            try {
              for (var h = l(this.layers), p = h.next(); !p.done; p = h.next()) {
                var f = p.value;
                try {
                  for (
                    var g = ((i = void 0), l(f.weights.entries())), v = g.next();
                    !v.done;
                    v = g.next()
                  ) {
                    var y = c(v.value, 2),
                      m = y[0],
                      b = y[1],
                      w = u
                        ? ""
                            .concat(
                              b.name.split("/").slice(0, -1).join("/") + "/",
                            )
                            .concat(m)
                        : b.originalName;
                    if (null != o[w])
                      throw new d("Duplicate weight name: ".concat(w));
                    (o[w] = b), s++;
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    v && !v.done && (a = g.return) && a.call(g);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                p && !p.done && (r = h.return) && r.call(h);
              } finally {
                if (n) throw n.error;
              }
            }
            var k = [];
            for (var x in t) {
              var S = x;
              if (null == o[x]) {
                var N = x.split("/");
                S = N.slice(0, -2)
                  .concat([N[N.length - 1]])
                  .join("/");
              }
              if (null != o[S]) k.push([o[S], t[x]]);
              else if (e)
                throw new d(
                  "Provided weight data has no target variable: ".concat(x),
                );
              delete o[S];
            }
            if (e) {
              var I = [];
              for (var x in o) I.push(x);
              if (I.length > 0)
                throw new d(
                  ""
                    .concat(I.length, " of ")
                    .concat(s, " weights are not set: ") + "".concat(I),
                );
            }
            te(k);
          }),
          (n.prototype.parseWeights = function (t) {
            var e = function (e) {
              var n = e.split("/"),
                r = ["vars", "layer_checkpoint_dependencies"],
                i = n
                  .map(function (t) {
                    return t.startsWith("_") ? t.slice(1) : t;
                  })
                  .filter(function (t) {
                    return !r.includes(t);
                  })
                  .join("/");
              i !== e && ((t[i] = t[e]), delete t[e]);
            };
            for (var n in Object.keys(t)) e(n);
          }),
          (n.prototype.updatedConfig = function () {
            var t = this.getConfig(),
              e = {};
            return (
              (e.className = this.getClassName()),
              (e.config = t),
              (e.kerasVersion = "tfjs-layers ".concat(al)),
              (e.backend = "TensorFlow.js"),
              e
            );
          }),
          (n.prototype.toJSON = function (t, e) {
            void 0 === e && (e = !0);
            var n = il(this.updatedConfig());
            return e ? JSON.stringify(n) : n;
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              t = x(t);
              for (var e = new ce(), i = 0; i < r.inputs.length; ++i)
                e.add(r.inputs[i], t[i]);
              return fe(r.outputs, e, n);
            });
          }),
          (n.prototype.computeMask = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var e;
              return (
                (t = x(t)),
                (e = null == n ? m(null, t.length) : x(n)),
                r.runInternalGraph(t, e)[1]
              );
            });
          }),
          (n.prototype.computeOutputShape = function (t) {
            var e,
              n,
              r,
              i,
              a = Ht(t);
            if (a.length !== this.inputLayers.length)
              throw new d(
                "Invalid inputShape argument ".concat(t, ": ") +
                  "model has ".concat(this.inputLayers.length, " tensor inputs."),
              );
            for (var o = {}, s = 0; s < a.length; s++) {
              var u = this.inputLayers[s],
                c = a[s];
              o[(_ = u.name + "_0_0")] = c;
            }
            var h = Object.keys(this.nodesByDepth)
              .map(function (t) {
                return parseInt(t, 10);
              })
              .sort(T);
            if (h.length > 1)
              try {
                for (var p = l(h), f = p.next(); !f.done; f = p.next()) {
                  var g = f.value,
                    v = this.nodesByDepth[g];
                  try {
                    for (
                      var y = ((r = void 0), l(v)), m = y.next();
                      !m.done;
                      m = y.next()
                    ) {
                      var w = m.value;
                      u = w.outboundLayer;
                      if (
                        -1 ===
                        this.inputLayers
                          .map(function (t) {
                            return t.id;
                          })
                          .indexOf(u.id)
                      ) {
                        for (var x = [], S = 0; S < w.inboundLayers.length; S++) {
                          var N = w.inboundLayers[S],
                            I = w.nodeIndices[S],
                            A = w.tensorIndices[S],
                            z =
                              o[
                                (_ = ""
                                  .concat(N.name, "_")
                                  .concat(I, "_")
                                  .concat(A))
                              ];
                          x.push(z);
                        }
                        var E = Ht(u.computeOutputShape(k(x))),
                          C = u.inboundNodes.indexOf(w);
                        for (S = 0; S < E.length; S++) {
                          o[
                            (_ = "".concat(u.name, "_").concat(C, "_").concat(S))
                          ] = E[S];
                        }
                      }
                    }
                  } catch (t) {
                    r = { error: t };
                  } finally {
                    try {
                      m && !m.done && (i = y.return) && i.call(y);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  f && !f.done && (n = p.return) && n.call(p);
                } finally {
                  if (e) throw e.error;
                }
              }
            var F = [],
              D = [];
            for (s = 0; s < this.outputLayers.length; s++) {
              (u = this.outputLayers[s]),
                (C = this.outputLayersNodeIndices[s]),
                (A = this.outputLayersTensorIndices[s]);
              var _ = "".concat(u.name, "_").concat(C, "_").concat(A);
              D.push(_);
            }
            for (s = 0; s < D.length; s++) {
              var L = D[s];
              b(L in o), F.push(o[L]);
            }
            return k(F);
          }),
          (n.prototype.runInternalGraph = function (t, e) {
            var n, r, i, a, o, s, u, h;
            null == e && (e = m(null, t.length));
            for (var p = {}, f = 0; f < this.inputs.length; ++f) {
              var d = this.inputs[f],
                v = t[f],
                y = e[f];
              p[d.id] = [v, y];
            }
            var w = Object.keys(this.nodesByDepth)
              .map(function (t) {
                return parseInt(t, 10);
              })
              .sort(T);
            try {
              for (var k = l(w), S = k.next(); !S.done; S = k.next()) {
                var N = S.value,
                  I = this.nodesByDepth[N];
                try {
                  for (
                    var A = ((i = void 0), l(I)), z = A.next();
                    !z.done;
                    z = A.next()
                  ) {
                    var E = z.value,
                      C = E.outboundLayer,
                      F = E.inputTensors,
                      D = E.outputTensors,
                      _ = new Array();
                    try {
                      for (
                        var L = ((o = void 0), l(F)), R = L.next();
                        !R.done;
                        R = L.next()
                      ) {
                        (d = R.value).id in p && _.push(p[d.id]);
                      }
                    } catch (t) {
                      o = { error: t };
                    } finally {
                      try {
                        R && !R.done && (s = L.return) && s.call(L);
                      } finally {
                        if (o) throw o.error;
                      }
                    }
                    if (_.length === F.length) {
                      var O = {},
                        M = void 0,
                        B = void 0,
                        P = void 0,
                        j = void 0;
                      if (
                        (null != E.callArgs && (O = E.callArgs), 1 === _.length)
                      ) {
                        var U = c(_[0], 2),
                          W = U[0],
                          V = U[1];
                        null == O.mask && (O.mask = V),
                          (P = x(C.call(W, O))),
                          (j = x(C.computeMask(W, V))),
                          (M = [W]),
                          (B = [V]);
                      } else
                        (M = _.map(function (t) {
                          return t[0];
                        })),
                          (B = _.map(function (t) {
                            return t[1];
                          })),
                          null == O.mask && (O.mask = B),
                          (P = x(C.call(M, O))),
                          (j = x(C.computeMask(M, B)));
                      if (C.activityRegularizer)
                        throw new g(
                          "LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.",
                        );
                      for (f = 0; f < D.length; ++f) {
                        (d = D[f]), (v = P[f]), (y = j[f]);
                        p[d.id] = [v, y];
                      }
                    }
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    z && !z.done && (a = A.return) && a.call(A);
                  } finally {
                    if (i) throw i.error;
                  }
                }
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                S && !S.done && (r = k.return) && r.call(k);
              } finally {
                if (n) throw n.error;
              }
            }
            var q = [],
              G = [],
              K = [];
            try {
              for (var H = l(this.outputs), J = H.next(); !J.done; J = H.next()) {
                b(
                  (d = J.value).id in p,
                  "Could not compute output ".concat(d.name, " : ").concat(d.id),
                );
                var Z = c(p[d.id], 2),
                  Y = Z[0];
                y = Z[1];
                K.push(Y.shape), q.push(Y), G.push(y);
              }
            } catch (t) {
              u = { error: t };
            } finally {
              try {
                J && !J.done && (h = H.return) && h.call(H);
              } finally {
                if (u) throw u.error;
              }
            }
            return [q, G, K];
          }),
          (n.prototype.buildNodeConversionMap = function (t) {
            var e,
              r,
              i,
              a = {};
            try {
              for (var o = l(this.layers), s = o.next(); !s.done; s = o.next()) {
                var u = s.value;
                i = u instanceof n ? 1 : 0;
                for (var c = 0; c < u.inboundNodes.length; c++) {
                  var h = n.nodeKey(u, c);
                  this.containerNodes.has(h) && ((a[h] = i), (i += 1));
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (e) throw e.error;
              }
            }
            return a;
          }),
          (n.prototype.getLayer = function (t, e) {
            var n, r;
            if (null != e) return this.findLayer(e);
            if (null == t)
              throw new d("Provide either a layer name or layer index");
            if ("number" == typeof t) return this.findLayer(t);
            try {
              for (var i = l(this.layers), a = i.next(); !a.done; a = i.next()) {
                var o = a.value;
                if (o.name === t) return o;
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                a && !a.done && (r = i.return) && r.call(i);
              } finally {
                if (n) throw n.error;
              }
            }
            throw new d("No such layer: ".concat(t));
          }),
          (n.prototype.findLayer = function (t) {
            if (this.layers.length <= t)
              throw new d(
                "Was asked to retrieve layer at index ".concat(
                  t,
                  ", but model only ",
                ) + "has ".concat(this.layers.length, " layer(s)."),
              );
            return this.layers[t];
          }),
          (n.prototype.calculateLosses = function () {
            var t = this;
            return e.tidy(function () {
              var e,
                r,
                i = [];
              try {
                for (var a = l(t.layers), o = a.next(); !o.done; o = a.next())
                  for (var s = o.value, u = 0; u < s.inboundNodes.length; ++u) {
                    var p = n.nodeKey(s, u);
                    t.containerNodes.has(p) &&
                      i.push.apply(i, h([], c(s.calculateLosses()), !1));
                  }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (r = a.return) && r.call(a);
                } finally {
                  if (e) throw e.error;
                }
              }
              return i;
            });
          }),
          (n.prototype.getConfig = function () {
            var t,
              e,
              r = { name: this.name },
              i = this.buildNodeConversionMap(this.layers),
              a = [];
            try {
              for (var o = l(this.layers), s = o.next(); !s.done; s = o.next()) {
                for (
                  var u = (S = s.value).getClassName(),
                    c = S.getConfig(),
                    h = [],
                    p = 0;
                  p < S.inboundNodes.length;
                  p++
                ) {
                  var f = S.inboundNodes[p],
                    d = n.nodeKey(S, p),
                    g = {};
                  if (this.containerNodes.has(d)) {
                    if (f.callArgs)
                      try {
                        JSON.stringify(f.callArgs), (g = f.callArgs);
                      } catch (t) {
                        console.warn(
                          "Layer ".concat(S.name, " was passed ") +
                            "non-serializable keyword arguments: " +
                            "".concat(
                              f.callArgs,
                              ". They will not be included ",
                            ) +
                            "in the serialized model (and thus will be missing at deserialization time).",
                        ),
                          (g = {});
                      }
                    if (f.inboundLayers.length > 0) {
                      for (var v = [], y = 0; y < f.inboundLayers.length; y++) {
                        var m = f.inboundLayers[y],
                          b = f.nodeIndices[y],
                          w = f.tensorIndices[y];
                        null == (I = i[n.nodeKey(m, b)]) && (I = 0),
                          v.push([m.name, I, w, g]);
                      }
                      h.push(v);
                    }
                  }
                }
                var k = {};
                (k.name = S.name),
                  (k.className = u),
                  (k.config = c),
                  (k.inboundNodes = h),
                  a.push(k);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (e = o.return) && e.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            r.layers = a;
            var x = [];
            for (y = 0; y < this.inputLayers.length; y++) {
              var S = this.inputLayers[y];
              (b = this.inputLayersNodeIndices[y]), (d = n.nodeKey(S, b));
              if (this.containerNodes.has(d)) {
                null == (I = i[d]) && (I = 0);
                w = this.inputLayersTensorIndices[y];
                x.push([S.name, I, w]);
              }
            }
            r.inputLayers = x;
            var N = [];
            for (y = 0; y < this.outputLayers.length; y++) {
              (S = this.outputLayers[y]),
                (b = this.outputLayersNodeIndices[y]),
                (d = n.nodeKey(S, b));
              if (this.containerNodes.has(d)) {
                var I;
                null == (I = i[d]) && (I = 0);
                w = this.outputLayersTensorIndices[y];
                N.push([S.name, I, w]);
              }
            }
            return (r.outputLayers = N), r;
          }),
          (n.fromConfig = function (t, e, n, r) {
            var i, a, o, s, u, c, h, p, f, g;
            void 0 === r && (r = !1);
            var v = {},
              y = {};
            function m(t, e) {
              t.name in y ? y[t.name].push(e) : (y[t.name] = [e]);
            }
            function w(t, e) {
              var n,
                r,
                i,
                a = [];
              try {
                for (var o = l(e), s = o.next(); !s.done; s = o.next()) {
                  var u = s.value,
                    c = u[0],
                    h = u[1],
                    p = u[2];
                  if (((i = null == u[3] ? {} : u[3]), !(c in v)))
                    return void m(t, e);
                  var f = v[c];
                  if (f.inboundNodes.length <= h) return void m(t, e);
                  var d = f.inboundNodes[h];
                  a.push(d.outputTensors[p]);
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  s && !s.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              a.length > 0 && t.apply(k(a), i);
            }
            function x(t) {
              var n = t.name,
                i = zu(t, null != e.customObjects ? e.customObjects : {});
              i.setFastWeightInitDuringBuild(r),
                (v[n] = i),
                t.inboundNodes.forEach(function (t) {
                  if (!(t instanceof Array))
                    throw new d(
                      "Corrupted configuration, expected array for nodeData: ".concat(
                        t,
                      ),
                    );
                  m(i, t);
                });
            }
            var S = e.name,
              N = e.layers;
            try {
              for (var I = l(N), A = I.next(); !A.done; A = I.next()) {
                x((T = A.value));
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                A && !A.done && (a = I.return) && a.call(I);
              } finally {
                if (i) throw i.error;
              }
            }
            for (; !F(y); )
              try {
                for (
                  var z = ((o = void 0), l(N)), E = z.next();
                  !E.done;
                  E = z.next()
                ) {
                  var T = E.value;
                  if ((K = v[T.name]).name in y) {
                    var C = y[K.name];
                    delete y[K.name];
                    try {
                      for (
                        var D = ((u = void 0), l(C)), _ = D.next();
                        !_.done;
                        _ = D.next()
                      ) {
                        w(K, _.value);
                      }
                    } catch (t) {
                      u = { error: t };
                    } finally {
                      try {
                        _ && !_.done && (c = D.return) && c.call(D);
                      } finally {
                        if (u) throw u.error;
                      }
                    }
                  }
                }
              } catch (t) {
                o = { error: t };
              } finally {
                try {
                  E && !E.done && (s = z.return) && s.call(z);
                } finally {
                  if (o) throw o.error;
                }
              }
            var L = [],
              R = [],
              O = e.inputLayers;
            try {
              for (var M = l(O), B = M.next(); !B.done; B = M.next()) {
                var P = (T = B.value)[0],
                  j = T[1],
                  U = T[2];
                b(P in v);
                var W = (K = v[P]).inboundNodes[j].outputTensors;
                L.push(W[U]);
              }
            } catch (t) {
              h = { error: t };
            } finally {
              try {
                B && !B.done && (p = M.return) && p.call(M);
              } finally {
                if (h) throw h.error;
              }
            }
            var V = e.outputLayers;
            try {
              for (var q = l(V), G = q.next(); !G.done; G = q.next()) {
                (P = (T = G.value)[0]), (j = T[1]), (U = T[2]);
                b(P in v);
                var K;
                W = (K = v[P]).inboundNodes[j].outputTensors;
                R.push(W[U]);
              }
            } catch (t) {
              f = { error: t };
            } finally {
              try {
                G && !G.done && (g = q.return) && g.call(q);
              } finally {
                if (f) throw f.error;
              }
            }
            return new t({ inputs: L, outputs: R, name: S });
          }),
          Object.defineProperty(n.prototype, "stateful", {
            get: function () {
              var t, e;
              if (this._stateful)
                throw new d(
                  "Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.",
                );
              try {
                for (
                  var n = l(this.layers), r = n.next();
                  !r.done;
                  r = n.next()
                ) {
                  if (r.value.stateful) return !0;
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  r && !r.done && (e = n.return) && e.call(n);
                } finally {
                  if (t) throw t.error;
                }
              }
              return !1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.resetStates = function () {
            var t = this;
            e.tidy(function () {
              t.layers.forEach(function (t) {
                t.stateful && t.resetStates();
              });
            });
          }),
          n
        );
      })(oe);
    function sl(t, e) {
      return (function (t, e, n) {
        var r = e.length;
        if (null == t || (Array.isArray(t) && 0 === t.length))
          return e.map(function (t) {
            return null;
          });
        if (1 === r)
          return Array.isArray(t) && 1 === t.length
            ? t
            : "object" == typeof t && e[0] in t
              ? [t[e[0]]]
              : [t];
        if (Array.isArray(t)) {
          if (t.length !== r)
            throw new Error(
              "Provided ".concat(n, " is an array of ").concat(t.length, " ") +
                "element(s), but the model has ".concat(r, " outputs. ") +
                "Make sure a set of weights is provided for each model output.",
            );
          return t;
        }
        if (
          "object" == typeof t &&
          Object.keys(t).length > 0 &&
          "object" == typeof t[Object.keys(t)[0]]
        ) {
          var i = [];
          return (
            e.forEach(function (e) {
              e in t ? i.push(t[e]) : i.push(null);
            }),
            i
          );
        }
        throw new Error(
          "The model has multiple (".concat(r, ") outputs, ") +
            "so ".concat(n, " must be either an array with ") +
            "".concat(r, " elements or an object with ").concat(e, " keys. ") +
            "Provided ".concat(n, " not understood: ").concat(JSON.stringify(t)),
        );
      })(t, e, "classWeight");
    }
    function ul(t, n, r, i) {
      return s(this, void 0, void 0, function () {
        var a, o, s, l, c;
        return u(this, function (u) {
          switch (u.label) {
            case 0:
              if (null != n || null != i)
                throw new Error("Support sampleWeight is not implemented yet");
              return null == r
                ? [3, 2]
                : ((a = e.tidy(function () {
                    if (1 === t.shape.length) return e.clone(t);
                    if (2 === t.shape.length) {
                      if (t.shape[1] > 1) {
                        return e.argMax(t, 1);
                      }
                      if (1 === t.shape[1]) return e.reshape(t, [t.shape[0]]);
                      throw new Error(
                        "Encountered unexpected last-dimension size (".concat(
                          t.shape[1],
                          ") ",
                        ) +
                          "during handling of class weights. The size is expected to be >= 1.",
                      );
                    }
                    throw new Error(
                      "Unexpected rank of target (y) tensor (".concat(
                        t.rank,
                        ") during ",
                      ) +
                        "handling of class weights. The rank is expected to be 1 or 2.",
                    );
                  })),
                  (l = (s = Array).from),
                  [4, a.data()]);
            case 1:
              return (
                (o = l.apply(s, [u.sent()])),
                e.dispose(a),
                (c = []),
                o.forEach(function (t) {
                  if (null == r[t])
                    throw new Error(
                      "classWeight must contain all classes in the training data. " +
                        "The class ".concat(
                          t,
                          " exists in the data but not in ",
                        ) +
                        "classWeight",
                    );
                  c.push(r[t]);
                }),
                [2, e.tensor1d(c, "float32")]
              );
            case 2:
              return [2, null];
          }
        });
      });
    }
    function ll(t, n) {
      return e.mul(t, n);
    }
    function cl(t, e) {
      var n,
        r,
        a = e;
      (n = a.xs),
        (r = a.ys),
        i.util.assert(null != n && null != r, function () {
          return (
            "A Dataset iterator for fitDataset() is expected to generate objects of the form `{xs: xVal, ys: yVal}`, where the two values may be `tf.Tensor`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates " +
            "".concat(e)
          );
        });
      var o = hl("input", t.inputNames, n),
        s = hl("output", t.outputNames, r),
        u = o[0].shape[0];
      i.util.assert(o.length === t.inputs.length, function () {
        return (
          "LayersModel has ".concat(
            t.inputs.length,
            " inputs, but the dataset ",
          ) +
          "provides ".concat(o.length, " inputs.  (Expected input keys: ") +
          "".concat(JSON.stringify(t.inputNames), ")")
        );
      }),
        i.util.assert(s.length === t.outputs.length, function () {
          return (
            "LayersModel has ".concat(
              t.outputs.length,
              " outputs, but the dataset ",
            ) +
            "provides ".concat(s.length, " outputs.  (Expected output keys: ") +
            "".concat(JSON.stringify(t.outputNames), ")")
          );
        });
      for (
        var l = function (e) {
            i.util.assert(o[e].shape[0] === u, function () {
              return (
                "Batch size mismatch: input " +
                "".concat(t.inputNames[e], " has ").concat(o[e].shape[0], "; ") +
                "expected  "
                  .concat(u, " based on input ")
                  .concat(t.inputNames[0], ".")
              );
            });
          },
          c = 0;
        c < o.length;
        c++
      )
        l(c);
      for (
        var h = function (e) {
            i.util.assert(s[e].shape[0] === u, function () {
              return (
                "Batch size mismatch: output " +
                "".concat(t.outputNames[e], " has ").concat(s[e].shape[0], "; ") +
                "expected  "
                  .concat(u, " based on input ")
                  .concat(t.inputNames[0], ".")
              );
            });
          },
          p = 0;
        p < s.length;
        p++
      )
        h(p);
      return { xs: o, ys: s };
    }
    function hl(t, e, n) {
      var r, a;
      if (n instanceof i.Tensor) return [n];
      if (Array.isArray(n))
        return (
          i.util.assert(n.length === e.length, function () {
            return "Received an array of "
              .concat(n.length, " Tensors, but expected ")
              .concat(e.length, " to match the ")
              .concat(t, " keys ")
              .concat(e, ".");
          }),
          n
        );
      var o = [];
      try {
        for (var s = l(e), u = s.next(); !u.done; u = s.next()) {
          var c = u.value;
          if (null == n[c])
            throw new d(
              "The feature data generated by the dataset lacks the required " +
                "".concat(t, " key '").concat(c, "'."),
            );
          o.push(n[c]);
        }
      } catch (t) {
        r = { error: t };
      } finally {
        try {
          u && !u.done && (a = s.return) && a.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      return o;
    }
    function pl(t, e, n) {
      return s(this, void 0, void 0, function () {
        var r,
          a,
          o,
          s,
          l,
          c,
          h,
          p,
          f,
          d,
          v,
          y,
          m,
          b,
          w,
          k,
          S,
          N,
          I,
          A,
          z,
          E,
          T,
          C,
          F,
          D,
          _,
          L,
          R,
          O,
          M,
          B,
          P,
          j;
        return u(this, function (u) {
          switch (u.label) {
            case 0:
              if (
                ((r = null != n.batchesPerEpoch),
                i.util.assert(null != t.optimizer, function () {
                  return "You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).";
                }),
                i.util.assert(null != n, function () {
                  return "For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.";
                }),
                i.util.assert(
                  null != n.epochs && n.epochs > 0 && Number.isInteger(n.epochs),
                  function () {
                    return (
                      "For fitDataset(), config.epochs is expected to be a positive " +
                      "integer, but got ".concat(n.epochs)
                    );
                  },
                ),
                i.util.assert(
                  !r ||
                    (n.batchesPerEpoch > 0 &&
                      Number.isInteger(n.batchesPerEpoch)),
                  function () {
                    return (
                      "For fitDataset(), config.batchesPerEpoch is expected to be a " +
                      "positive integer if specified, but got ".concat(
                        n.batchesPerEpoch,
                      )
                    );
                  },
                ),
                i.util.assert(null == n.validationSplit, function () {
                  return "`validationSplit` is not supported by `fitDataset()`. Use validationData instead.";
                }),
                t.isTraining)
              )
                throw new Error(
                  "Cannot start training because another fit() call is ongoing.",
                );
              (t.isTraining = !0), (u.label = 1);
            case 1:
              return (
                u.trys.push([1, , 26, 27]),
                (a = null != n.validationData),
                (o = void 0),
                (s = void 0),
                a &&
                  (fl(n.validationData)
                    ? i.util.assert(
                        null == n.validationBatches ||
                          (n.validationBatches > 0 &&
                            Number.isInteger(n.validationBatches)),
                        function () {
                          return (
                            "For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, " +
                            "but got ".concat(n.validationBatches)
                          );
                        },
                      )
                    : ((l = (function (t) {
                        if (3 === t.length)
                          throw new g(
                            "Validation with sample weights is not implemented yet.",
                          );
                        return { xs: t[0], ys: t[1] };
                      })(n.validationData)),
                      (o = l.xs),
                      (s = l.ys))),
                (c = t.makeTrainFunction()),
                (h = t.getDedupedMetricsNames()),
                (p = void 0),
                (p = a
                  ? h.slice().concat(
                      h.map(function (t) {
                        return "val_" + t;
                      }),
                    )
                  : h.slice()),
                (f = Nu(n.callbacks, n.yieldEvery)),
                (d = null == n.verbose ? 1 : n.verbose),
                (v = Au(
                  f,
                  d,
                  n.epochs,
                  null,
                  null,
                  (function (t, e) {
                    var n = null;
                    null != e.batchesPerEpoch
                      ? (n = e.batchesPerEpoch)
                      : Number.isFinite(t.size) && (n = t.size);
                    return n;
                  })(e, n),
                  null,
                  a,
                  p,
                )),
                (y = v.callbackList),
                (m = v.history),
                y.setModel(t),
                (t.history = m),
                [4, y.onTrainBegin()]
              );
            case 2:
              return (
                u.sent(),
                (t.stopTraining_ = !1),
                (b = null == n.initialEpoch ? 0 : n.initialEpoch),
                [4, e.iterator()]
              );
            case 3:
              (w = u.sent()), (u.label = 4);
            case 4:
              return b < n.epochs ? ((k = {}), [4, y.onEpochBegin(b)]) : [3, 23];
            case 5:
              return u.sent(), (S = 0), (N = 0), r ? [3, 7] : [4, e.iterator()];
            case 6:
              (w = u.sent()), (u.label = 7);
            case 7:
              return !r || S < n.batchesPerEpoch ? [4, w.next()] : [3, 21];
            case 8:
              return (
                (I = u.sent()),
                r && I.done
                  ? (console.warn(
                      "You provided `batchesPerEpoch` as " +
                        "".concat(n.batchesPerEpoch, ", ") +
                        "but your dataset iterator ran out of data after " +
                        "".concat(S, " batches; ") +
                        "interrupting training. Make sure that your dataset can generate at least `batchesPerEpoch * epochs` batches (in this case, " +
                        "".concat(n.batchesPerEpoch * n.epochs, " batches). ") +
                        "You may need to use the repeat() function when building your dataset.",
                    ),
                    [3, 21])
                  : null == I.value
                    ? [3, 15]
                    : ((A = cl(t, I.value)),
                      (z = A.xs),
                      (E = A.ys),
                      ((T = {}).batch = N),
                      (T.size = z[0].shape[0]),
                      [4, y.onBatchBegin(N, T)])
              );
            case 9:
              if ((u.sent(), (C = []), null == n.classWeight)) return [3, 13];
              (F = sl(n.classWeight, t.outputNames)), (j = 0), (u.label = 10);
            case 10:
              return j < F.length
                ? ((_ = (D = C).push), [4, ul(E[j], null, F[j])])
                : [3, 13];
            case 11:
              _.apply(D, [u.sent()]), (u.label = 12);
            case 12:
              return ++j, [3, 10];
            case 13:
              for (
                L = z.concat(E).concat(C), R = c(L), i.dispose(L), j = 0;
                j < h.length;
                ++j
              )
                (O = h[j]), (M = R[j]), (T[O] = M), i.keep(M);
              return [4, y.onBatchEnd(N, T)];
            case 14:
              u.sent(), mu(T), N++, S++, (u.label = 15);
            case 15:
              return (r ? S >= n.batchesPerEpoch : I.done)
                ? a
                  ? ((B = void 0),
                    fl(n.validationData)
                      ? ((P = x),
                        [
                          4,
                          t.evaluateDataset(n.validationData, {
                            batches: n.validationBatches,
                          }),
                        ])
                      : [3, 17])
                  : [3, 19]
                : [3, 20];
            case 16:
              return (B = P.apply(void 0, [u.sent()])), [3, 18];
            case 17:
              (B = x(
                t.evaluate(o, s, {
                  batchSize:
                    null == n.validationBatchSize ? 32 : n.validationBatchSize,
                  verbose: 0,
                }),
              )),
                (u.label = 18);
            case 18:
              for (j = 0; j < t.metricsNames.length; ++j)
                k["val_".concat(t.metricsNames[j])] = B[j];
              u.label = 19;
            case 19:
              return [3, 21];
            case 20:
              return t.stopTraining_ ? [3, 21] : [3, 7];
            case 21:
              return [4, y.onEpochEnd(b, k)];
            case 22:
              return u.sent(), b++, t.stopTraining_ ? [3, 23] : [3, 4];
            case 23:
              return [4, y.onTrainEnd()];
            case 24:
              return u.sent(), [4, t.history.syncData()];
            case 25:
              return u.sent(), [2, t.history];
            case 26:
              return (t.isTraining = !1), [7];
            case 27:
              return [2];
          }
        });
      });
    }
    function fl(t) {
      return "function" == typeof t.iterator;
    }
    function dl(t, n, r) {
      return s(this, void 0, void 0, function () {
        var a, o, s, l, c, h, p, f, d, v;
        return u(this, function (y) {
          switch (y.label) {
            case 0:
              if (
                ((a = null != (r = r || {}).batches),
                (o = t.testFunction),
                (s = []),
                r.verbose > 0)
              )
                throw new g("Verbose mode is not implemented yet.");
              return (
                i.util.assert(
                  !a || (r.batches > 0 && Number.isInteger(r.batches)),
                  function () {
                    return (
                      "Test loop expects `batches` to be a positive integer, but " +
                      "received ".concat(JSON.stringify(r.batches))
                    );
                  },
                ),
                "function" != typeof n.next ? [3, 1] : ((c = n), [3, 3])
              );
            case 1:
              return [4, n.iterator()];
            case 2:
              (c = y.sent()), (y.label = 3);
            case 3:
              (l = c),
                (h = 0),
                (p = 0),
                (f = function () {
                  var n;
                  return u(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return [4, l.next()];
                      case 1:
                        return (
                          (n = u.sent()),
                          (s = i.tidy(function () {
                            if (n.value) {
                              var r = cl(t, n.value),
                                a = r.xs,
                                u = r.ys,
                                l = a.concat(u),
                                c = i.tidy(function () {
                                  return o(l);
                                });
                              if ((i.dispose(l), 0 === p))
                                for (var f = 0; f < c.length; ++f)
                                  s.push(e.scalar(0));
                              var d = l[0].shape[0],
                                g = function (t) {
                                  var e = c[t],
                                    n = s[t];
                                  (s[t] = i.tidy(function () {
                                    return i.add(s[t], i.mul(d, e));
                                  })),
                                    p > 0 && i.dispose(n);
                                };
                              for (f = 0; f < c.length; ++f) g(f);
                              i.dispose(c), (h += d), ++p;
                            }
                            return s;
                          })),
                          n.done
                            ? (a &&
                                console.warn(
                                  "Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least `batches` " +
                                    "batches (in this case, ".concat(
                                      r.batches,
                                      " batches). ",
                                    ) +
                                    "You may need to use the repeat() function when building your dataset.",
                                ),
                              [2, "break"])
                            : [2]
                        );
                    }
                  });
                }),
                (y.label = 4);
            case 4:
              return !a || p < r.batches ? [5, f()] : [3, 6];
            case 5:
              return "break" === y.sent() ? [3, 6] : [3, 4];
            case 6:
              for (d = 0; d < s.length; ++d)
                (v = s[d]), (s[d] = i.div(s[d], h)), i.dispose(v);
              return [2, k(s)];
          }
        });
      });
    }
    function gl(t) {
      i.util.assert(t > 0 && Number.isInteger(t), function () {
        return "batchSize is required to be a positive integer, but got ".concat(
          t,
        );
      });
    }
    function vl(t, e, n) {
      return null == t
        ? [null]
        : Array.isArray(t)
          ? t.map(function (t) {
              return ct(t, e, n - e);
            })
          : ct(t, e, n - e);
    }
    function yl(t, e) {
      return i.tidy(function () {
        return null == t
          ? null
          : Array.isArray(t)
            ? t.map(function (t) {
                return yl(t, e);
              })
            : mt(t, "int32" === e.dtype ? e : i.cast(e, "int32"));
      });
    }
    function ml(t, e) {
      for (var n = [], r = 0, i = null; r < t; )
        (i = r + e) >= t && (i = t), n.push([r, i]), (r = i);
      return n;
    }
    function bl(t) {
      var n = [];
      t instanceof e.Tensor && (t = [t]);
      for (var r = 0; r < t.length; ++r) {
        var i = t[r];
        if (1 === i.rank) n.push(lt(i, 1));
        else {
          if (0 === i.rank)
            throw new Error(
              "Expected tensor to be at least 1D, but received a 0D tensor (scalar).",
            );
          n.push(i);
        }
      }
      return n;
    }
    function wl(t, n) {
      if (null != t) {
        var r = [];
        if (n instanceof e.Tensor) r.push(n.id);
        else if (Array.isArray(n))
          n.forEach(function (t) {
            return r.push(t.id);
          });
        else if (null != n)
          for (var i in n) {
            var a = n[i];
            r.push(a.id);
          }
        var o = [];
        if (t instanceof e.Tensor) -1 === r.indexOf(t.id) && o.push(t);
        else if (Array.isArray(t))
          t.forEach(function (t) {
            -1 === r.indexOf(t.id) && o.push(t);
          });
        else if (null != t)
          for (var i in t) {
            var s = t[i];
            -1 === r.indexOf(s.id) && o.push(s);
          }
        o.forEach(function (t) {
          t.isDisposed || t.dispose();
        });
      }
    }
    function kl(t) {
      return Array.isArray(t);
    }
    function xl(t) {
      return (
        !(function (t) {
          return t instanceof e.Tensor;
        })(t) && !kl(t)
      );
    }
    function Sl(t, e, n, r, i) {
      var a, o, s;
      if (
        (void 0 === r && (r = !0),
        void 0 === i && (i = ""),
        null == e || 0 === e.length)
      ) {
        if (null != t) {
          var u = !1;
          if (kl(t) && t.length > 0) u = !0;
          else if (xl(t)) {
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                u = !0;
                break;
              }
          } else u = !0;
          if (u)
            throw new d(
              "Error when checking model ".concat(i, " expected no data, ") +
                "but got ".concat(t),
            );
        }
        return [];
      }
      if (null == t)
        return e.map(function (t) {
          return null;
        });
      if (xl(t)) {
        s = [];
        try {
          for (var h = l(e), p = h.next(); !p.done; p = h.next()) {
            var f = p.value;
            if (null == t[f])
              throw new d(
                'No data provided for "'.concat(
                  f,
                  '". Need data for each key in: ',
                ) + "".concat(e),
              );
            s.push(t[f]);
          }
        } catch (t) {
          a = { error: t };
        } finally {
          try {
            p && !p.done && (o = h.return) && o.call(h);
          } finally {
            if (a) throw a.error;
          }
        }
      } else if (kl(t)) {
        if (t.length !== e.length)
          throw new d(
            "Error when checking model ".concat(i, ": the Array of ") +
              "Tensors that you are passing to your model is not the size the " +
              "model expected. Expected to see ".concat(
                e.length,
                " Tensor(s), but ",
              ) +
              "instead got the following list of Tensor(s): ".concat(t),
          );
        s = t;
      } else {
        if (e.length > 1)
          throw new d(
            "The model ".concat(i, " expects ").concat(e.length, " Tensor(s), ") +
              "but only received one Tensor. Found: Tensor with shape ".concat(
                t.shape,
              ),
          );
        s = [t];
      }
      if (((s = bl(s)), null != n))
        for (var g = 0; g < e.length; ++g)
          if (null != n[g]) {
            var v = s[g];
            if (v.shape.length !== n[g].length)
              throw new d(
                "Error when checking "
                  .concat(i, ": expected ")
                  .concat(e[g], " ") +
                  "to have ".concat(
                    n[g].length,
                    " dimension(s). but got array with ",
                  ) +
                  "shape ".concat(v.shape),
              );
            for (var y = 0; y < n[g].length; ++y)
              if (0 !== y || r) {
                var m = v.shape[y],
                  b = n[g][y];
                if (null != b && b >= 0 && m !== b)
                  throw new d(
                    "".concat(i, " expected a batch of elements where each ") +
                      "example has shape [".concat(
                        n[g].slice(1, n[g].length),
                        "] ",
                      ) +
                      "(i.e.,tensor shape [*,".concat(
                        n[g].slice(1, n[g].length),
                        "])",
                      ) +
                      " but the "
                        .concat(i, " received an input with ")
                        .concat(v.shape[0]) +
                      " examples, each with shape [".concat(
                        v.shape.slice(1, v.shape.length),
                        "]",
                      ) +
                      " (tensor shape [".concat(v.shape, "])"),
                  );
              }
          }
      return s;
    }
    function Nl(t, e, n, r, i) {
      var a;
      if (
        (void 0 === r && (r = !0), void 0 === i && (i = ""), Array.isArray(t))
      ) {
        if (t.length !== e.length)
          throw new d(
            "Error when checking model ".concat(i, ": the Array of ") +
              "Tensors that you are passing to your model is not the size the " +
              "the model expected. Expected to see ".concat(
                e.length,
                " Tensor(s),",
              ) +
              " but instead got ".concat(t.length, " Tensors(s)."),
          );
        a = t;
      } else {
        if (e.length > 1)
          throw new d(
            "The model expects ".concat(e.length, " ").concat(i, " Tensors, ") +
              "but only received one Tensor. Found: array with shape " +
              "".concat(JSON.stringify(t.shape), "."),
          );
        a = [t];
      }
      if (null != n)
        for (var o = 0; o < e.length; ++o)
          if (null != n[o]) {
            var s = a[o];
            if (s.shape.length !== n[o].length)
              throw new d(
                "Error when checking "
                  .concat(i, ": expected ")
                  .concat(e[o], " ") +
                  "to have ".concat(
                    n[o].length,
                    " dimension(s), but got array with ",
                  ) +
                  "shape ".concat(JSON.stringify(s.shape)),
              );
            for (var u = 0; u < n[o].length; ++u)
              if (0 !== u || r) {
                var l = s.shape[u],
                  c = n[o][u];
                if (null != c && c !== l)
                  throw new d(
                    "Error when checking ".concat(i, ": expected ") +
                      ""
                        .concat(e[o], " to have shape ")
                        .concat(JSON.stringify(n[o]), " but ") +
                      "got array with shape ".concat(
                        JSON.stringify(s.shape),
                        ".",
                      ),
                  );
              }
          }
    }
    var Il = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.isTraining = !1), n;
      }
      return (
        o(n, t),
        (n.prototype.summary = function (t, e, n) {
          if ((void 0 === n && (n = console.log), !this.built))
            throw new d(
              "This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).",
            );
          $u(this, t, e, n);
        }),
        (n.prototype.compile = function (t) {
          var n,
            r,
            i = this;
          if (
            (null == t.loss && (t.loss = []),
            (this.loss = t.loss),
            "string" == typeof t.optimizer)
          )
            (this.optimizer_ = (function (t) {
              var n = {
                Adagrad: function () {
                  return e.train.adagrad(0.01);
                },
                Adadelta: function () {
                  return e.train.adadelta(1, 0.95, st());
                },
                Adam: function () {
                  return e.train.adam(0.001, 0.9, 0.999, st());
                },
                Adamax: function () {
                  return e.train.adamax(0.002, 0.9, 0.999, st(), 0);
                },
                RMSProp: function () {
                  return e.train.rmsprop(0.001, 0.9, 0, st());
                },
                SGD: function () {
                  return e.train.sgd(0.01);
                },
              };
              if (
                ((n.adagrad = n.Adagrad),
                (n.adadelta = n.Adadelta),
                (n.adam = n.Adam),
                (n.adamax = n.Adamax),
                (n.rmsprop = n.RMSProp),
                (n.sgd = n.SGD),
                t in n)
              )
                return n[t]();
              throw new d("Unknown Optimizer ".concat(t));
            })(t.optimizer)),
              (this.isOptimizerOwned = !0);
          else {
            if (!(t.optimizer instanceof e.Optimizer))
              throw new d(
                "User-defined optimizer must be an instance of tf.Optimizer.",
              );
            (this.optimizer_ = t.optimizer), (this.isOptimizerOwned = !1);
          }
          var a = [];
          if (
            Array.isArray(t.loss) ||
            "string" == typeof t.loss ||
            "function" == typeof t.loss
          )
            if (Array.isArray(t.loss)) {
              if (t.loss.length !== this.outputs.length)
                throw new d(
                  "When passing an Array as loss, it should have one entry per " +
                    "model output. The model has ".concat(
                      this.outputs.length,
                      " output(s), ",
                    ) +
                    "but you passed loss=".concat(t.loss, "."),
                );
              var o = t.loss;
              a = o.map(function (t) {
                return Mu(t);
              });
            } else {
              var s = Mu(t.loss);
              this.outputs.forEach(function (t) {
                a.push(s);
              });
            }
          else {
            for (var u in ((t.loss = t.loss), t.loss))
              if (-1 === this.outputNames.indexOf(u))
                throw new d(
                  'Unknown entry in loss dictionary: "'.concat(u, '". ') +
                    "Only expected the following keys: ".concat(this.outputNames),
                );
            try {
              for (
                var c = l(this.outputNames), h = c.next();
                !h.done;
                h = c.next()
              ) {
                u = h.value;
                null == t.loss[u] &&
                  console.warn(
                    'Output "'.concat(
                      u,
                      '" is missing from loss dictionary. We assume ',
                    ) +
                      "this was done on purpose, and we will not be expecting data " +
                      "to be passed to ".concat(u, " during training"),
                  ),
                  a.push(Mu(t.loss[u]));
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                h && !h.done && (r = c.return) && r.call(c);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          (this.lossFunctions = a),
            (this.feedOutputNames = []),
            (this.feedOutputShapes = []),
            (this.feedLossFns = []);
          for (var p = 0; p < this.outputs.length; ++p) {
            var f = this.internalOutputShapes[p];
            u = this.outputNames[p];
            this.feedOutputNames.push(u),
              this.feedOutputShapes.push(f),
              this.feedLossFns.push(this.lossFunctions[p]);
          }
          var g = [];
          (this.metrics = t.metrics),
            (this.metricsNames = ["loss"]),
            (this.metricsTensors = []),
            X("loss", function () {
              for (var t = 0; t < i.outputs.length; ++t)
                if (-1 === g.indexOf(t)) {
                  var e = i.lossFunctions[t];
                  i.outputs.length > 1 &&
                    (i.metricsTensors.push([e, t]),
                    i.metricsNames.push(i.outputNames[t] + "_loss"));
                }
            });
          var v = (function (t, e) {
            var n, r, i;
            if (null == t || (Array.isArray(t) && 0 === t.length))
              return e.map(function (t) {
                return [];
              });
            if ("string" == typeof t || "function" == typeof t) i = [t];
            else {
              if (!Array.isArray(t) && "object" != typeof t)
                throw new TypeError(
                  "Type of metrics argument not understood. Expected an string," +
                    "function, Array, or Object, found: ".concat(t),
                );
              i = t;
            }
            if (Array.isArray(i))
              return e.map(function (t) {
                return i;
              });
            var a = [];
            try {
              for (var o = l(e), s = o.next(); !s.done; s = o.next()) {
                var u = s.value,
                  c = i.hasOwnProperty(u) ? i[u] : [];
                Array.isArray(c) || (c = [c]), a.push(c);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return a;
          })(t.metrics, this.outputNames);
          X("metric", function () {
            for (
              var t = function (t) {
                  if (-1 !== g.indexOf(t)) return "continue";
                  !(function (e) {
                    var n,
                      r,
                      a,
                      o,
                      s,
                      u = function (e) {
                        if (
                          "string" == typeof e &&
                          -1 !==
                            ["accuracy", "acc", "crossentropy", "ce"].indexOf(e)
                        ) {
                          var n = i.internalOutputShapes[t];
                          1 === n[n.length - 1] || i.lossFunctions[t] === Lu
                            ? -1 !== ["accuracy", "acc"].indexOf(e)
                              ? (o = Bu)
                              : -1 !== ["crossentropy", "ce"].indexOf(e) &&
                                (o = Vu)
                            : i.lossFunctions[t] === _u
                              ? -1 !== ["accuracy", "acc"].indexOf(e)
                                ? (o = qu)
                                : -1 !== ["crossentropy", "ce"].indexOf(e) &&
                                  (o = Ku)
                              : -1 !== ["accuracy", "acc"].indexOf(e)
                                ? (o = Pu)
                                : -1 !== ["crossentropy", "ce"].indexOf(e) &&
                                  (o = Gu);
                          var r = void 0;
                          -1 !== ["accuracy", "acc"].indexOf(e)
                            ? (r = "acc")
                            : -1 !== ["crossentropy", "ce"].indexOf(e) &&
                              (r = "ce"),
                            (s = o),
                            (a = "" + r);
                        } else {
                          var u = (function (t) {
                            if ("string" == typeof t && (t in Hu)) return Hu[t];
                            if ("string" != typeof t && null != t) return t;
                            throw new d("Unknown metric ".concat(t));
                          })(e);
                          (s = u), (a = "" + Ju(e));
                        }
                        var l;
                        X(a, function () {
                          l = s;
                        }),
                          (function (t, e, n) {
                            i.outputNames.length > 1 &&
                              (e = i.outputNames[t] + "_" + e),
                              i.metricsNames.push(e),
                              i.metricsTensors.push([n, t]);
                          })(t, a, l);
                      };
                    try {
                      for (
                        var c = ((n = void 0), l(e)), h = c.next();
                        !h.done;
                        h = c.next()
                      ) {
                        u(h.value);
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        h && !h.done && (r = c.return) && r.call(c);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  })(v[t]);
                },
                e = 0;
              e < i.outputs.length;
              ++e
            )
              t(e);
          }),
            (this.collectedTrainableWeights = this.trainableWeights);
        }),
        (n.prototype.checkTrainableWeightsConsistency = function () {
          null != this.collectedTrainableWeights &&
            this.trainableWeights.length !==
              this.collectedTrainableWeights.length &&
            console.warn(
              "Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?",
            );
        }),
        (n.prototype.evaluate = function (t, e, n) {
          void 0 === n && (n = {});
          var r = null == n.batchSize ? 32 : n.batchSize;
          gl(r);
          var i = this.standardizeUserDataXY(t, e, !0, r);
          try {
            var a = i[0].concat(i[1]);
            this.makeTestFunction();
            var o = this.testFunction;
            return k(this.testLoop(o, a, r, n.verbose, n.steps));
          } finally {
            wl(i[0], t), wl(i[1], e);
          }
        }),
        (n.prototype.evaluateDataset = function (t, e) {
          return s(this, void 0, void 0, function () {
            return u(this, function (n) {
              return this.makeTestFunction(), [2, dl(this, t, e)];
            });
          });
        }),
        (n.prototype.checkNumSamples = function (t, e, n, r) {
          var i;
          if ((void 0 === r && (r = "steps"), null != n)) {
            if (((i = null), null != e))
              throw new d(
                "If ".concat(r, " is set, batchSize must be null or undefined.") +
                  "Got batchSize = ".concat(e),
              );
          } else {
            if (null == t)
              throw new d(
                "Either the input data should have a defined shape, or " +
                  "".concat(r, " shoud be specified."),
              );
            i = Array.isArray(t) ? t[0].shape[0] : t.shape[0];
          }
          return i;
        }),
        (n.prototype.execute = function (t, n) {
          var r, i;
          if (Array.isArray(n) && 0 === n.length)
            throw new d("`outputs` is an empty Array, which is not allowed.");
          var a = Array.isArray(n),
            o = a ? n : [n],
            s = this.retrieveSymbolicTensors(o),
            u = new ce();
          if ((t instanceof e.Tensor && (t = [t]), Array.isArray(t))) {
            if (t.length !== this.inputs.length)
              throw new d(
                "The number of inputs provided (".concat(t.length, ") ") +
                  "does not match the number of inputs of this model " +
                  "(".concat(this.inputs.length, ")."),
              );
            for (var c = 0; c < this.inputs.length; ++c)
              u.add(this.inputs[c], t[c]);
          } else
            try {
              for (var h = l(this.inputs), p = h.next(); !p.done; p = h.next()) {
                var f = p.value,
                  g = t[f.name];
                if (null == g)
                  throw new d(
                    "No value is provided for the model's input ".concat(f.name),
                  );
                u.add(f, g);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                p && !p.done && (i = h.return) && i.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
          var v = fe(s, u);
          return a ? v : v[0];
        }),
        (n.prototype.retrieveSymbolicTensors = function (t) {
          var e,
            n,
            r = m(null, t.length),
            i = t.length;
          try {
            for (var a = l(this.layers), o = a.next(); !o.done; o = a.next()) {
              for (
                var s = o.value,
                  u = Array.isArray(s.output) ? s.output : [s.output],
                  c = u.map(function (t) {
                    return t.name;
                  }),
                  h = 0;
                h < t.length;
                ++h
              ) {
                var p = c.indexOf(t[h]);
                if ((-1 !== p && ((r[h] = u[p]), i--), 0 === i)) break;
              }
              if (0 === i) break;
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (n = a.return) && n.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          if (i > 0) {
            var f = [];
            throw (
              (r.forEach(function (e, n) {
                null == e && f.push(t[n]);
              }),
              new d(
                "Cannot find SymbolicTensors for output name(s): " +
                  "".concat(JSON.stringify(f)),
              ))
            );
          }
          return r;
        }),
        (n.prototype.predictLoop = function (t, e, n) {
          var r = this;
          return (
            void 0 === e && (e = 32),
            void 0 === n && (n = !1),
            i.tidy(function () {
              var a = r.checkNumSamples(t);
              if (n) throw new g("Verbose predictLoop() is not implemented yet.");
              for (
                var o = ml(a, e),
                  s = r.outputs.map(function (t) {
                    return [];
                  }),
                  u = function (e) {
                    i.tidy(function () {
                      var n = o[e][0],
                        i = o[e][1],
                        a = vl(t, n, i),
                        s = [];
                      if (Array.isArray(a))
                        for (var u = 0; u < a.length; ++u)
                          s.push({ key: r.inputs[u], value: a[u] });
                      else s.push({ key: r.inputs[0], value: a });
                      var l = new ce(s);
                      return fe(r.outputs, l);
                    }).forEach(function (t, e) {
                      return s[e].push(t);
                    });
                  },
                  l = 0;
                l < o.length;
                ++l
              )
                u(l);
              return k(
                s.map(function (t) {
                  return i.concat(t, 0);
                }),
              );
            })
          );
        }),
        (n.prototype.predict = function (t, e) {
          void 0 === e && (e = {});
          var n = bl(t);
          Nl(n, this.inputNames, this.feedInputShapes, !1);
          try {
            var r = null == e.batchSize ? 32 : e.batchSize;
            return gl(r), this.predictLoop(n, r);
          } finally {
            wl(n, t);
          }
        }),
        (n.prototype.predictOnBatch = function (t) {
          Nl(t, this.inputNames, this.feedInputShapes, !0);
          var e = (Array.isArray(t) ? t[0] : t).shape[0];
          return this.predictLoop(t, e);
        }),
        (n.prototype.standardizeUserDataXY = function (t, n, r, i) {
          if (null == this.optimizer_)
            throw new f(
              "You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).",
            );
          for (var a = [], o = 0; o < this.feedOutputShapes.length; ++o) {
            var s = this.feedOutputShapes[o];
            this.feedLossFns[o] === _u
              ? a.push(s.slice(0, s.length - 1).concat([1]))
              : a.push(s);
          }
          if (
            ((function (t, n, r) {
              var i = C(
                t.map(function (t) {
                  return t.shape[0];
                }),
              );
              i.sort();
              var a = C(
                n.map(function (t) {
                  return t.shape[0];
                }),
              );
              if ((a.sort(), i.length > 1))
                throw new d(
                  "All input Tensors (x) should have the same number of samples. Got array shapes: " +
                    "".concat(
                      JSON.stringify(
                        t.map(function (t) {
                          return t.shape;
                        }),
                      ),
                    ),
                );
              if (a.length > 1)
                throw new d(
                  "All target Tensors (y) should have the same number of samples. Got array shapes: " +
                    "".concat(
                      JSON.stringify(
                        n.map(function (t) {
                          return t.shape;
                        }),
                      ),
                    ),
                );
              if (i.length > 0 && a.length > 0 && !e.util.arraysEqual(i, a))
                throw new d(
                  "Input Tensors should have the same number of samples as target " +
                    "Tensors. Found "
                      .concat(i[0], " input sample(s) and ")
                      .concat(a[0], " target ") +
                    "sample(s).",
                );
            })(
              (t = Sl(t, this.feedInputNames, this.feedInputShapes, !1, "input")),
              (n = Sl(n, this.feedOutputNames, a, !1, "target")),
            ),
            (function (t, e, n) {
              for (var r = [Tu, Lu, Du], i = 0; i < t.length; ++i) {
                var a = t[i],
                  o = e[i],
                  s = n[i];
                if (null != o) {
                  if (o === Du && 1 === a.shape[a.shape.length - 1])
                    throw new d(
                      "You are passing a target array of shape ".concat(
                        a.shape,
                        " while using ",
                      ) +
                        "a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].",
                    );
                  if (-1 !== r.indexOf(o))
                    for (
                      var u = a.shape.slice(1), l = s.slice(1), c = 0;
                      c < u.length;
                      ++c
                    ) {
                      var h = u[c],
                        p = l[c];
                      if (null != p && h !== p)
                        throw new d(
                          "A target Tensor with shape ".concat(
                            a.shape,
                            " was passed for an ",
                          ) +
                            "output of shape ".concat(
                              s,
                              ", while using a loss function that ",
                            ) +
                            "expects targets to have the same shape as the output.",
                        );
                    }
                }
              }
            })(n, this.feedLossFns, this.feedOutputShapes),
            this.stateful && null != i && i > 0 && t[0].shape[0] % i != 0)
          )
            throw new d(
              "In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size " +
                "".concat(i, ". Found: ").concat(t[0].shape[0], " sample(s)."),
            );
          return [t, n];
        }),
        (n.prototype.standardizeUserData = function (t, e, n, r, i, a) {
          return (
            void 0 === i && (i = !0),
            s(this, void 0, void 0, function () {
              var o, s, l, h, p, f, d, g;
              return u(this, function (u) {
                switch (u.label) {
                  case 0:
                    if (
                      ((o = c(this.standardizeUserDataXY(t, e, i, a), 2)),
                      (s = o[0]),
                      (l = o[1]),
                      null != n)
                    )
                      throw new Error("sample weight is not supported yet.");
                    if (((h = null), null == r)) return [3, 4];
                    (p = sl(r, this.outputNames)),
                      (h = []),
                      (f = 0),
                      (u.label = 1);
                  case 1:
                    return f < p.length
                      ? ((g = (d = h).push), [4, ul(l[f], null, p[f])])
                      : [3, 4];
                  case 2:
                    g.apply(d, [u.sent()]), (u.label = 3);
                  case 3:
                    return ++f, [3, 1];
                  case 4:
                    return [2, [s, l, h]];
                }
              });
            })
          );
        }),
        (n.prototype.testLoop = function (t, n, r, a, o) {
          var s = this;
          return (
            void 0 === a && (a = 0),
            i.tidy(function () {
              var u = s.checkNumSamples(n, r, o, "steps"),
                l = [];
              if (a > 0) throw new g("Verbose mode is not implemented yet.");
              if (null != o)
                throw new g("steps mode in testLoop() is not implemented yet");
              for (
                var c = ml(u, r), h = e.tensor1d(ot(0, u)), p = 0;
                p < c.length;
                ++p
              ) {
                var f = c[p][0],
                  d = c[p][1],
                  v = ct(h, f, d - f),
                  y = yl(n, v),
                  m = t(y);
                if (0 === p)
                  for (var b = 0; b < m.length; ++b) l.push(e.scalar(0));
                for (b = 0; b < m.length; ++b) {
                  var w = m[b];
                  l[b] = i.add(l[b], i.mul(d - f, w));
                }
              }
              for (b = 0; b < l.length; ++b) l[b] = i.div(l[b], u);
              return l;
            })
          );
        }),
        (n.prototype.getDedupedMetricsNames = function () {
          for (var t = this.metricsNames, e = [], n = 0; n < t.length; ++n) {
            var r = t[n],
              i = r;
            if (w(t, r) > 1) {
              var a = w(t.slice(0, n), r);
              i += "_".concat(a);
            }
            e.push(i);
          }
          return e;
        }),
        (n.prototype.makeTrainFunction = function () {
          var t = this;
          return function (e) {
            var n = [],
              r = e.slice(0, t.inputs.length),
              a = e.slice(t.inputs.length, t.inputs.length + t.outputs.length),
              o = e.slice(
                t.inputs.length + t.outputs.length,
                t.inputs.length + 2 * t.outputs.length,
              ),
              s = [],
              u = t.collectedTrainableWeights.map(function (t) {
                return t.read();
              });
            return [
              t.optimizer_.minimize(
                function () {
                  for (var e = [], u = 0; u < t.inputs.length; ++u)
                    e.push({ key: t.inputs[u], value: r[u] });
                  var l,
                    c = new ce(e),
                    h = fe(t.outputs, c, { training: !0 });
                  for (u = 0; u < t.lossFunctions.length; ++u) {
                    var p = (0, t.lossFunctions[u])(a[u], h[u]);
                    null != o[u] && (p = ll(p, o[u]));
                    var f = i.mean(p);
                    n.push(f), (l = 0 === u ? p : i.add(l, p));
                  }
                  for (u = 0; u < t.metricsTensors.length; ++u) {
                    var d = void 0;
                    if (t.outputs.length > 1 && u < t.outputs.length) d = n[u];
                    else {
                      var g = t.metricsTensors[u][0],
                        v = t.metricsTensors[u][1];
                      d = i.mean(g(a[v], h[v]));
                    }
                    i.keep(d), s.push(d);
                  }
                  return (
                    (l = i.mean(l)),
                    t.calculateLosses().forEach(function (t) {
                      l = i.add(l, t);
                    }),
                    l
                  );
                },
                !0,
                u,
              ),
            ].concat(s);
          };
        }),
        (n.prototype.makeTestFunction = function () {
          var t = this;
          this.testFunction = function (e) {
            return i.tidy(function () {
              for (
                var n,
                  r = [],
                  a = e.slice(0, t.inputs.length),
                  o = e.slice(
                    t.inputs.length,
                    t.inputs.length + t.outputs.length,
                  ),
                  s = [],
                  u = 0;
                u < t.inputs.length;
                ++u
              )
                s.push({ key: t.inputs[u], value: a[u] });
              var l = new ce(s),
                c = fe(t.outputs, l);
              for (u = 0; u < t.lossFunctions.length; ++u) {
                var h = t.lossFunctions[u],
                  p = i.mean(h(o[u], c[u]));
                (n = 0 === u ? p : i.add(n, p)), r.push(n);
              }
              for (u = 0; u < t.metricsTensors.length; ++u) {
                var f = t.metricsTensors[u][0],
                  d = t.metricsTensors[u][1],
                  g = i.mean(f(o[d], c[d]));
                r.push(g);
              }
              return r;
            });
          };
        }),
        (n.prototype.fit = function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            s(this, void 0, void 0, function () {
              var r,
                a,
                o,
                s,
                l,
                c,
                h,
                p,
                f,
                v,
                y,
                m,
                b,
                w,
                k,
                x,
                S,
                N,
                I,
                A,
                z,
                E;
              return u(this, function (u) {
                switch (u.label) {
                  case 0:
                    if (this.isTraining)
                      throw new Error(
                        "Cannot start training because another fit() call is ongoing.",
                      );
                    (this.isTraining = !0), (u.label = 1);
                  case 1:
                    return (
                      u.trys.push([1, , 7, 8]),
                      gl((v = null == n.batchSize ? 32 : n.batchSize)),
                      !1,
                      [
                        4,
                        this.standardizeUserData(
                          t,
                          e,
                          n.sampleWeight,
                          n.classWeight,
                          false,
                          v,
                        ),
                      ]
                    );
                  case 2:
                    if (
                      ((y = u.sent()),
                      (r = y[0]),
                      (a = y[1]),
                      (f = y[2]),
                      (m = !1),
                      (b = void 0),
                      !(null != n.validationData && n.validationData.length > 0))
                    )
                      return [3, 4];
                    if (((m = !0), 2 !== n.validationData.length))
                      throw 3 === n.validationData.length
                        ? new g(
                            "validationData including sample weights is not supported yet.",
                          )
                        : new d(
                            "When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; " +
                              "".concat(n.validationData, " is invalid."),
                          );
                    return (
                      (l = n.validationData[0]),
                      (c = n.validationData[1]),
                      !0,
                      [4, this.standardizeUserData(l, c, null, null, true, v)]
                    );
                  case 3:
                    return (
                      (w = u.sent()),
                      (h = w[0]),
                      (p = w[1]),
                      (b = h.concat(p)),
                      [3, 5]
                    );
                  case 4:
                    null != n.validationSplit &&
                    n.validationSplit > 0 &&
                    n.validationSplit < 1
                      ? ((m = !0),
                        (k = Math.floor(r[0].shape[0] * (1 - n.validationSplit))),
                        (x = r[0].shape[0]),
                        (h = vl(r, k, x)),
                        (o = r),
                        (r = vl(r, 0, k)),
                        (p = vl(a, k, x)),
                        (s = a),
                        (a = vl(a, 0, k)),
                        (b = h.concat(p)))
                      : null != n.validationSteps && (m = !0),
                      (u.label = 5);
                  case 5:
                    return (
                      (S = r.concat(a).concat(f)),
                      this.checkTrainableWeightsConsistency(),
                      (N = this.makeTrainFunction()),
                      (I = this.getDedupedMetricsNames()),
                      (A = void 0),
                      (z = void 0),
                      m
                        ? (this.makeTestFunction(),
                          (A = this.testFunction),
                          (z = I.slice().concat(
                            I.map(function (t) {
                              return "val_" + t;
                            }),
                          )))
                        : ((A = null), (b = []), (z = I.slice())),
                      (E = Nu(n.callbacks, n.yieldEvery)),
                      [
                        4,
                        this.fitLoop(
                          N,
                          S,
                          I,
                          v,
                          n.epochs,
                          n.verbose,
                          E,
                          A,
                          b,
                          n.shuffle,
                          z,
                          n.initialEpoch,
                          null,
                          null,
                        ),
                      ]
                    );
                  case 6:
                    return [2, u.sent()];
                  case 7:
                    return (
                      (this.isTraining = !1),
                      wl(r, t),
                      wl(a, e),
                      wl(o, t),
                      wl(s, e),
                      wl(h, l),
                      wl(p, c),
                      null != f && i.dispose(f),
                      [7]
                    );
                  case 8:
                    return [2];
                }
              });
            })
          );
        }),
        (n.prototype.fitLoop = function (
          t,
          n,
          r,
          a,
          o,
          l,
          c,
          h,
          p,
          f,
          v,
          y,
          m,
          b,
        ) {
          return s(this, void 0, void 0, function () {
            var s,
              w,
              k,
              x,
              S,
              N,
              I,
              A,
              z,
              E = this;
            return u(this, function (T) {
              switch (T.label) {
                case 0:
                  if (
                    (null == a && (a = 32),
                    null == o && (o = 1),
                    null == f && (f = !0),
                    null == y && (y = 0),
                    (s = !1),
                    null != h && null != p && (s = !0),
                    null != b && ((s = !0), null == m))
                  )
                    throw new d(
                      "Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.",
                    );
                  return (
                    null !=
                      (w = this.checkNumSamples(n, a, m, "steps_per_epoch")) &&
                      (k = ot(0, w)),
                    null == l && (l = 1),
                    (x = Au(c, l, o, y, w, m, a, s, v)),
                    (S = x.callbackList),
                    (N = x.history),
                    S.setModel(this),
                    (this.history = N),
                    [4, S.onTrainBegin()]
                  );
                case 1:
                  T.sent(),
                    (this.stopTraining_ = !1),
                    (I = function (o) {
                      var l, c, d, v, y;
                      return u(this, function (b) {
                        switch (b.label) {
                          case 0:
                            return [4, S.onEpochBegin(o)];
                          case 1:
                            if ((b.sent(), (l = {}), null == m)) return [3, 2];
                            throw new g(
                              "stepsPerEpoch mode is not implemented yet.",
                            );
                          case 2:
                            if ("batch" === f)
                              throw new g(
                                "batch shuffling is not implemneted yet",
                              );
                            f && e.util.shuffle(k),
                              (c = e.tensor1d(k)),
                              (d = ml(w, a)),
                              (v = function (e) {
                                var o;
                                return u(this, function (u) {
                                  switch (u.label) {
                                    case 0:
                                      return (o = {}), [4, S.onBatchBegin(e, o)];
                                    case 1:
                                      return (
                                        u.sent(),
                                        i.tidy(function () {
                                          var u = d[e][0],
                                            f = d[e][1],
                                            g = ct(c, u, f - u);
                                          (o.batch = e), (o.size = f - u);
                                          for (
                                            var v = yl(n, g), y = t(v), m = 0;
                                            m < r.length;
                                            ++m
                                          ) {
                                            var b = r[m],
                                              w = y[m];
                                            (o[b] = w), i.keep(w);
                                          }
                                          if (e === d.length - 1 && s) {
                                            var k = E.testLoop(h, p, a);
                                            for (m = 0; m < r.length; ++m) {
                                              (b = r[m]), (w = k[m]);
                                              i.keep(w), (l["val_" + b] = w);
                                            }
                                          }
                                        }),
                                        [4, S.onBatchEnd(e, o)]
                                      );
                                    case 2:
                                      return (
                                        u.sent(),
                                        mu(o),
                                        A.stopTraining_ ? [2, "break"] : [2]
                                      );
                                  }
                                });
                              }),
                              (y = 0),
                              (b.label = 3);
                          case 3:
                            return y < d.length ? [5, v(y)] : [3, 6];
                          case 4:
                            if ("break" === b.sent()) return [3, 6];
                            b.label = 5;
                          case 5:
                            return ++y, [3, 3];
                          case 6:
                            c.dispose(), (b.label = 7);
                          case 7:
                            return [4, S.onEpochEnd(o, l)];
                          case 8:
                            return b.sent(), A.stopTraining_ ? [2, "break"] : [2];
                        }
                      });
                    }),
                    (A = this),
                    (z = y),
                    (T.label = 2);
                case 2:
                  return z < o ? [5, I(z)] : [3, 5];
                case 3:
                  if ("break" === T.sent()) return [3, 5];
                  T.label = 4;
                case 4:
                  return ++z, [3, 2];
                case 5:
                  return [4, S.onTrainEnd()];
                case 6:
                  return T.sent(), [4, this.history.syncData()];
                case 7:
                  return T.sent(), [2, this.history];
              }
            });
          });
        }),
        (n.prototype.fitDataset = function (t, e) {
          return s(this, void 0, void 0, function () {
            return u(this, function (n) {
              return [2, pl(this, t, e)];
            });
          });
        }),
        (n.prototype.trainOnBatch = function (t, e) {
          return s(this, void 0, void 0, function () {
            var n, r, a, o, s, c, h, p, f, d, g, v;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  return [4, this.standardizeUserData(t, e)];
                case 1:
                  (n = u.sent()),
                    (r = n[0]),
                    (a = n[1]),
                    (o = this.makeTrainFunction()),
                    (s = o(r.concat(a))),
                    (c = []),
                    (u.label = 2);
                case 2:
                  u.trys.push([2, 7, 8, 9]),
                    (h = l(s)),
                    (p = h.next()),
                    (u.label = 3);
                case 3:
                  return p.done ? [3, 6] : [4, p.value.data()];
                case 4:
                  (f = u.sent()), c.push(f[0]), (u.label = 5);
                case 5:
                  return (p = h.next()), [3, 3];
                case 6:
                  return [3, 9];
                case 7:
                  return (d = u.sent()), (g = { error: d }), [3, 9];
                case 8:
                  try {
                    p && !p.done && (v = h.return) && v.call(h);
                  } finally {
                    if (g) throw g.error;
                  }
                  return [7];
                case 9:
                  return i.dispose(s), wl(n[0], t), wl(n[1], e), [2, k(c)];
              }
            });
          });
        }),
        (n.prototype.getNamedWeights = function (t) {
          for (
            var e = [],
              n = null != t && t.trainableOnly,
              r = n ? this.trainableWeights : this.weights,
              i = this.getWeights(n),
              a = 0;
            a < r.length;
            ++a
          )
            (n && !r[a].trainable) ||
              e.push({ name: r[a].originalName, tensor: i[a] });
          return e;
        }),
        Object.defineProperty(n.prototype, "stopTraining", {
          get: function () {
            return this.stopTraining_;
          },
          set: function (t) {
            this.stopTraining_ = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "optimizer", {
          get: function () {
            return this.optimizer_;
          },
          set: function (t) {
            this.optimizer_ !== t &&
              ((this.optimizer_ = t), (this.isOptimizerOwned = !1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.dispose = function () {
          var e = t.prototype.dispose.call(this);
          if (
            0 === e.refCountAfterDispose &&
            null != this.optimizer &&
            this.isOptimizerOwned
          ) {
            var n = i.memory().numTensors;
            this.optimizer_.dispose(),
              (e.numDisposedVariables += n - i.memory().numTensors);
          }
          return e;
        }),
        (n.prototype.getLossIdentifiers = function () {
          var t, e, n, r, i;
          if ("string" == typeof this.loss) i = S(this.loss);
          else if (Array.isArray(this.loss)) {
            try {
              for (var a = l(this.loss), o = a.next(); !o.done; o = a.next()) {
                if ("string" != typeof o.value)
                  throw new Error(
                    "Serialization of non-string loss is not supported.",
                  );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = a.return) && e.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            i = this.loss.map(function (t) {
              return S(t);
            });
          } else {
            var s = Object.keys(this.loss);
            i = {};
            var u = this.loss;
            try {
              for (var c = l(s), h = c.next(); !h.done; h = c.next()) {
                var p = h.value;
                if ("string" != typeof u[p])
                  throw new Error(
                    "Serialization of non-string loss is not supported.",
                  );
                i[p] = S(u[p]);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                h && !h.done && (r = c.return) && r.call(c);
              } finally {
                if (n) throw n.error;
              }
            }
          }
          return i;
        }),
        (n.prototype.getMetricIdentifiers = function () {
          if (
            "string" == typeof this.metrics ||
            "function" == typeof this.metrics
          )
            return [S(Ju(this.metrics))];
          if (Array.isArray(this.metrics))
            return this.metrics.map(function (t) {
              return S(Ju(t));
            });
          var t = {};
          for (var e in this.metrics) t[e] = S(Ju(this.metrics[e]));
          return t;
        }),
        (n.prototype.getTrainingConfig = function () {
          return {
            loss: this.getLossIdentifiers(),
            metrics: this.getMetricIdentifiers(),
            optimizer_config: {
              class_name: this.optimizer.getClassName(),
              config: this.optimizer.getConfig(),
            },
          };
        }),
        (n.prototype.loadTrainingConfig = function (t) {
          if (null != t.weighted_metrics)
            throw new Error("Loading weight_metrics is not supported yet.");
          if (null != t.loss_weights)
            throw new Error("Loading loss_weights is not supported yet.");
          if (null != t.sample_weight_mode)
            throw new Error("Loading sample_weight_mode is not supported yet.");
          var e,
            n,
            r = zu(rl(t.optimizer_config));
          if ("string" == typeof t.loss) e = N(t.loss);
          else if (Array.isArray(t.loss))
            e = t.loss.map(function (t) {
              return N(t);
            });
          else if (null != t.loss)
            for (var i in ((e = {}), t.loss)) e[i] = N(t.loss[i]);
          if (Array.isArray(t.metrics))
            n = t.metrics.map(function (t) {
              return N(t);
            });
          else if (null != t.metrics)
            for (var i in ((n = {}), t.metrics)) n[i] = N(t.metrics[i]);
          this.compile({ loss: e, metrics: n, optimizer: r });
        }),
        (n.prototype.save = function (t, n) {
          return s(this, void 0, void 0, function () {
            var r, i, a, o, s, l, p, f, g, v, y;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  if ("string" == typeof t) {
                    if (0 === (r = e.io.getSaveHandlers(t)).length)
                      throw new d(
                        "Cannot find any save handlers for URL '".concat(t, "'"),
                      );
                    if (r.length > 1)
                      throw new d(
                        "Found more than one (".concat(
                          r.length,
                          ") save handlers for ",
                        ) + "URL '".concat(t, "'"),
                      );
                    t = r[0];
                  }
                  if (null == t.save)
                    throw new d(
                      "LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.",
                    );
                  return [4, e.io.encodeWeights(this.getNamedWeights(n))];
                case 1:
                  return (
                    (i = u.sent()),
                    !1,
                    null,
                    (a = this.toJSON(null, false)),
                    (o = {
                      modelTopology: a,
                      format: "layers-model",
                      generatedBy: "TensorFlow.js tfjs-layers v".concat(al),
                      convertedBy: null,
                    }),
                    null != n && n.includeOptimizer && null != this.optimizer
                      ? ((o.trainingConfig = this.getTrainingConfig()),
                        (s = "optimizer"),
                        (v = (g = e.io).encodeWeights),
                        [4, this.optimizer.getWeights()])
                      : [3, 4]
                  );
                case 2:
                  return [4, v.apply(g, [u.sent(), s])];
                case 3:
                  (l = u.sent()),
                    (p = l.data),
                    (f = l.specs),
                    (y = i.specs).push.apply(y, h([], c(f), !1)),
                    (i.data = e.io.concatenateArrayBuffers([i.data, p])),
                    (u.label = 4);
                case 4:
                  return (
                    null != this.userDefinedMetadata &&
                      (!0,
                      Yu(this.userDefinedMetadata, this.name, true),
                      (o.userDefinedMetadata = this.userDefinedMetadata)),
                    (o.weightData = i.data),
                    (o.weightSpecs = i.specs),
                    [2, t.save(o)]
                  );
              }
            });
          });
        }),
        (n.prototype.setUserDefinedMetadata = function (t) {
          Yu(t, this.name), (this.userDefinedMetadata = t);
        }),
        (n.prototype.getUserDefinedMetadata = function () {
          return this.userDefinedMetadata;
        }),
        n
      );
    })(ol);
    (Il.className = "Model"), e.serialization.registerClass(Il);
    var Al = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return o(e, t), e;
    })(Il);
    function zl(t, n, r) {
      return s(this, void 0, void 0, function () {
        var i, a, o, s, l, c, h, p, f;
        return u(this, function (u) {
          switch (u.label) {
            case 0:
              if ((null == r && (r = {}), null == t.load))
                throw new d(
                  "Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.",
                );
              return [4, t.load()];
            case 1:
              if (
                ((i = u.sent()),
                null != (a = i.modelTopology).model_config &&
                  (a = a.model_config),
                (o = null == r.strict || r.strict),
                (s = null != i.weightData && null != i.weightSpecs && o),
                (l = zu(rl(a), n, s)),
                null != (c = i.trainingConfig) && l.loadTrainingConfig(c),
                null != i.userDefinedMetadata &&
                  l.setUserDefinedMetadata(i.userDefinedMetadata),
                null == i.weightData)
              )
                return [3, 4];
              if (null == i.weightSpecs)
                throw new d(
                  "LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.",
                );
              return (
                (h = (function (t, n) {
                  var r = e.io.decodeWeights(t, n),
                    i = {},
                    a = [];
                  return (
                    n.forEach(function (t) {
                      "optimizer" === t.group
                        ? a.push({ name: t.name, tensor: r[t.name] })
                        : (i[t.name] = r[t.name]);
                    }),
                    { modelWeights: i, optimizerWeights: a }
                  );
                })(i.weightData, i.weightSpecs)),
                (p = h.modelWeights),
                (f = h.optimizerWeights),
                l.loadWeights(p, o),
                null != l.optimizer && f.length > 0
                  ? [4, l.optimizer.setWeights(f)]
                  : [3, 3]
              );
            case 2:
              u.sent(), (u.label = 3);
            case 3:
              e.dispose(p),
                e.dispose(
                  f.map(function (t) {
                    return t.tensor;
                  }),
                ),
                (u.label = 4);
            case 4:
              return [2, l];
          }
        });
      });
    }
    (Al.className = "Functional"), e.serialization.registerClass(Al);
    var El = (function (t) {
      function n(e) {
        var n,
          r,
          i = t.call(this, { inputs: [], outputs: [] }) || this;
        if (
          ((e = e || {}),
          (i.trainable = !0),
          (i.built = !1),
          (i.name = null != e.name ? e.name : j("sequential_")),
          null != e.layers)
        )
          try {
            for (var a = l(e.layers), o = a.next(); !o.done; o = a.next()) {
              var s = o.value;
              i.add(s);
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              o && !o.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        return i;
      }
      return (
        o(n, t),
        (n.prototype.checkShape = function (t) {
          if (
            t.inboundNodes[0].outputTensors[0].shape.some(function (t) {
              return t < 0;
            })
          )
            throw new d(
              "Negative dimension size caused by adding layer " +
                "".concat(t.name, " with input shape [") +
                "".concat(t.inboundNodes[0].inputTensors[0].shape, "]"),
            );
        }),
        (n.prototype.add = function (t) {
          var e,
            r = t instanceof n || t instanceof Il;
          if (r) {
            if (1 !== (e = t).outputs.length)
              throw new d(
                "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.",
              );
            if (1 !== e.inputs.length)
              throw new d(
                "All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.",
              );
          }
          if (0 === this.outputs.length) {
            if (0 === t.inboundNodes.length) {
              if (null == t.batchInputShape)
                throw new d(
                  "The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.",
                );
              var i = le({
                batchShape: t.batchInputShape,
                dtype: t.dtype,
                name: t.name + "_input",
              });
              t.apply(i);
            }
            if (r) (this.outputs = e.outputs), (this.inputs = e.inputs);
            else {
              if (1 !== t.inboundNodes.length)
                throw new d(
                  "A layer added to a Sequential model must not already be " +
                    "connected somewhere else. LayersModel received layer ".concat(
                      t.name,
                      " ",
                    ) +
                    "which has ".concat(
                      t.inboundNodes.length,
                      " pre-existing inbound ",
                    ) +
                    "connections.",
                );
              if (1 !== t.inboundNodes[0].outputTensors.length)
                throw new d(
                  "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.",
                );
              this.checkShape(t),
                (this.outputs = [t.inboundNodes[0].outputTensors[0]]),
                (this.inputs = se(this.outputs[0]));
            }
            (this.inboundNodes = []),
              new ie({
                outboundLayer: this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: this.inputs,
                outputTensors: this.outputs,
                inputMasks: m(null, this.inputs.length),
                outputMasks: [null],
                inputShapes: this.inputs.map(function (t) {
                  return t.shape;
                }),
                outputShapes: this.outputs[0].shape,
              });
          } else {
            var a = t.apply(this.outputs[0]);
            if (Array.isArray(a))
              throw new TypeError(
                "All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.",
              );
            this.checkShape(t),
              (this.outputs = [a]),
              (this.inboundNodes[0].outputTensors = this.outputs),
              (this.inboundNodes[0].outputShapes = [this.outputs[0].shape]);
          }
          this.layers.push(t), (this.built = !1);
        }),
        (n.prototype.pop = function () {
          if (0 === this.layers.length)
            throw new TypeError("There are no layers in the model.");
          if ((this.layers.pop(), 0 === this.layers.length))
            (this.outputs = []),
              (this.inboundNodes = []),
              (this.outboundNodes = []);
          else {
            var t = this.layers.length - 1;
            (this.layers[t].outboundNodes = []),
              (this.outputs = [this.layers[t].output]),
              (this.inboundNodes[0].outputTensors = this.outputs),
              (this.inboundNodes[0].outputShapes = [this.outputs[0].shape]);
          }
        }),
        (n.prototype.call = function (t, e) {
          return null == this.model && this.build(), this.model.call(t, e);
        }),
        (n.prototype.build = function (t) {
          if ((Zt(t), 0 === this.inputs.length || 0 === this.outputs.length))
            throw new TypeError(
              "Sequential model cannot be built: model is empty. Add some layers first.",
            );
          (this.model = new Il({
            inputs: this.inputs,
            outputs: this.outputs[0],
            name: this.name + "_model",
          })),
            (this.model.trainable = this.trainable),
            (this.supportsMasking = this.model.supportsMasking),
            (this.inputLayers = this.model.inputLayers),
            (this.inputLayersNodeIndices = this.model.inputLayersNodeIndices),
            (this.inputLayersTensorIndices = this.model.inputLayersTensorIndices),
            (this.outputLayers = this.model.outputLayers),
            (this.outputLayersNodeIndices = this.model.outputLayersNodeIndices),
            (this.outputLayersTensorIndices =
              this.model.outputLayersTensorIndices),
            (this.nodesByDepth = this.model.nodesByDepth),
            (this.containerNodes = this.model.containerNodes),
            (this.outputNames = this.model.outputNames),
            (this.inputNames = this.model.inputNames),
            (this.built = !0);
        }),
        (n.prototype.countParams = function () {
          return this.built || this.build(), t.prototype.countParams.call(this);
        }),
        (n.prototype.summary = function (e, n, r) {
          void 0 === r && (r = console.log),
            this.built || this.build(),
            t.prototype.summary.call(this, e, n, r);
        }),
        (n.prototype.setWeights = function (t) {
          null == this.model && this.build(), this.model.setWeights(t);
        }),
        (n.prototype.evaluate = function (t, e, n) {
          if ((void 0 === n && (n = {}), !this.built))
            throw new f("The model needs to be compiled before being used.");
          return this.model.evaluate(t, e, n);
        }),
        (n.prototype.evaluateDataset = function (t, e) {
          return s(this, void 0, void 0, function () {
            return u(this, function (n) {
              if (!this.built)
                throw new f("The model needs to be compiled before being used.");
              return [2, this.model.evaluateDataset(t, e)];
            });
          });
        }),
        (n.prototype.predict = function (t, e) {
          return (
            void 0 === e && (e = {}),
            null == this.model && this.build(),
            this.model.predict(t, e)
          );
        }),
        (n.prototype.predictOnBatch = function (t) {
          return null == this.model && this.build(), this.model.predictOnBatch(t);
        }),
        (n.prototype.compile = function (t) {
          this.build(),
            this.model.compile(t),
            (this.optimizer_ = this.model.optimizer),
            (this.isOptimizerOwned = this.model.isOptimizerOwned),
            (this.loss = this.model.loss),
            (this.metrics = this.model.metrics),
            (this.metricsTensors = this.model.metricsTensors),
            (this.metricsNames = this.model.metricsNames);
        }),
        Object.defineProperty(n.prototype, "optimizer", {
          get: function () {
            return null == this.model ? void 0 : this.model.optimizer;
          },
          set: function (t) {
            this.model.optimizer = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.fit = function (t, e, n) {
          return (
            void 0 === n && (n = {}),
            s(this, void 0, void 0, function () {
              return u(this, function (r) {
                if (!this.built)
                  throw new f(
                    "The model needs to be compiled before being used.",
                  );
                return [2, this.model.fit(t, e, n)];
              });
            })
          );
        }),
        (n.prototype.fitDataset = function (t, e) {
          return s(this, void 0, void 0, function () {
            return u(this, function (n) {
              if (!this.built)
                throw new f("The model needs to be compiled before being used.");
              return [2, this.model.fitDataset(t, e)];
            });
          });
        }),
        (n.prototype.trainOnBatch = function (t, e) {
          return s(this, void 0, void 0, function () {
            return u(this, function (n) {
              return [2, this.model.trainOnBatch(t, e)];
            });
          });
        }),
        (n.fromConfig = function (t, r, i, a) {
          var o, s, u;
          void 0 === a && (a = !1);
          var c = {};
          if (r instanceof Array) {
            if (null == r[0].className || "Merge" === r[0].className)
              throw new d("Legacy serialization format not supported yet.");
            u = r;
          } else
            e.util.assert(null != r.layers, function () {
              return "When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.";
            }),
              (u = r.layers),
              delete r.layers,
              (c = r);
          var h = new t(c);
          if (!(h instanceof n))
            throw new g(
              "Sequential.fromConfig called on non-Sequential input: ".concat(h),
            );
          try {
            for (var p = l(u), f = p.next(); !f.done; f = p.next()) {
              var v = f.value,
                y = zu(v, undefined, a);
              a && y.setFastWeightInitDuringBuild(!0), h.add(y);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              f && !f.done && (s = p.return) && s.call(p);
            } finally {
              if (o) throw o.error;
            }
          }
          return h;
        }),
        Object.defineProperty(n.prototype, "stopTraining", {
          get: function () {
            if (null == this.model)
              throw new d(
                "Cannot get the stopTraining property of a sequential model before it is compiled.",
              );
            return this.model.stopTraining;
          },
          set: function (t) {
            if (null == this.model)
              throw new d(
                "Cannot set the stopTraining property of a sequential model before it is compiled.",
              );
            this.model.stopTraining = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.getConfig = function () {
          var t,
            e,
            n = [];
          try {
            for (var r = l(this.layers), i = r.next(); !i.done; i = r.next()) {
              var a = i.value,
                o = {};
              (o.className = a.getClassName()),
                (o.config = a.getConfig()),
                n.push(o);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (e = r.return) && e.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
          return { name: this.name, layers: n };
        }),
        n
      );
    })(Il);
    function Tl(t) {
      return le(t);
    }
    (El.className = "Sequential"), e.serialization.registerClass(El);
    var Cl = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.getConfig = function () {
            return {};
          }),
          e
        );
      })(e.serialization.Serializable),
      Fl = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(e, t),
          (e.prototype.apply = function (t, e) {
            return (
              void 0 === e && (e = 1),
              (function (t, e) {
                if ((void 0 === e && (e = 1), 1 !== e))
                  throw new g(
                    "Support for alpha values other than 1 (".concat(
                      e,
                      ") is not implemented ",
                    ) + "yet.",
                  );
                return i.elu(t);
              })(t, e)
            );
          }),
          e
        );
      })(Cl);
    (Fl.className = "elu"), e.serialization.registerClass(Fl);
    var Dl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.selu(t);
        }),
        e
      );
    })(Cl);
    (Dl.className = "selu"), e.serialization.registerClass(Dl);
    var _l = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.relu(t);
        }),
        e
      );
    })(Cl);
    (_l.className = "relu"), e.serialization.registerClass(_l);
    var Ll = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          return e.tidy(function () {
            return i.minimum(6, i.relu(t));
          });
        }),
        n
      );
    })(Cl);
    (Ll.className = "relu6"), e.serialization.registerClass(Ll);
    var Rl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return t;
        }),
        e
      );
    })(Cl);
    (Rl.className = "linear"), e.serialization.registerClass(Rl);
    var Ol = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.sigmoid(t);
        }),
        e
      );
    })(Cl);
    (Ol.className = "sigmoid"), e.serialization.registerClass(Ol);
    var Ml = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          return (function (t) {
            return e.tidy(function () {
              var e = i.add(0.5, i.mul(0.2, t));
              return i.clipByValue(e, 0, 1);
            });
          })(t);
        }),
        n
      );
    })(Cl);
    (Ml.className = "hardSigmoid"), e.serialization.registerClass(Ml);
    var Bl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.softplus(t);
        }),
        e
      );
    })(Cl);
    (Bl.className = "softplus"), e.serialization.registerClass(Bl);
    var Pl = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          return (function (t) {
            return e.tidy(function () {
              return i.div(t, i.add(i.abs(t), 1));
            });
          })(t);
        }),
        n
      );
    })(Cl);
    (Pl.className = "softsign"), e.serialization.registerClass(Pl);
    var jl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t) {
          return i.tanh(t);
        }),
        e
      );
    })(Cl);
    (jl.className = "tanh"), e.serialization.registerClass(jl);
    var Ul = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t, e) {
          return void 0 === e && (e = -1), i.softmax(t, e);
        }),
        e
      );
    })(Cl);
    (Ul.className = "softmax"), e.serialization.registerClass(Ul);
    var Wl = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(e, t),
        (e.prototype.apply = function (t, e) {
          return void 0 === e && (e = -1), i.logSoftmax(t, e);
        }),
        e
      );
    })(Cl);
    (Wl.className = "logSoftmax"), e.serialization.registerClass(Wl);
    var Vl = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t, n) {
          return (
            void 0 === n && (n = 1),
            e.tidy(function () {
              return i.mul(i.sigmoid(i.mul(t, n)), t);
            })
          );
        }),
        n
      );
    })(Cl);
    (Vl.className = "swish"), e.serialization.registerClass(Vl);
    var ql = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.apply = function (t) {
          return e.tidy(function () {
            return i.mul(t, i.tanh(i.softplus(t)));
          });
        }),
        n
      );
    })(Cl);
    function Gl(t) {
      return t.getClassName();
    }
    function Kl(t, n) {
      return (
        void 0 === n && (n = {}),
        E(
          t,
          e.serialization.SerializationMap.getMap().classNameMap,
          n,
          "activation",
        )
      );
    }
    function Hl(t) {
      var e;
      return null == t
        ? Kl((e = { className: "linear", config: {} }))
        : "string" == typeof t
          ? (((e = {}).className = t), (e.config = {}), Kl(e))
          : t instanceof Cl
            ? t
            : Kl(t);
    }
    function Jl(t) {
      if (null != t && "object" != typeof t)
        throw new Error(
          "Argument to L1L2 regularizer's constructor is expected to be an " +
            "object, but received: ".concat(t),
        );
    }
    (ql.className = "mish"), e.serialization.registerClass(ql);
    var Zl = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return o(e, t), e;
      })(e.serialization.Serializable),
      Yl = (function (t) {
        function n(e) {
          var n = t.call(this) || this;
          return (
            Jl(e),
            (n.l1 = null == e || null == e.l1 ? 0.01 : e.l1),
            (n.l2 = null == e || null == e.l2 ? 0.01 : e.l2),
            (n.hasL1 = 0 !== n.l1),
            (n.hasL2 = 0 !== n.l2),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.apply = function (t) {
            var n = this;
            return e.tidy(function () {
              var r = e.zeros([1]);
              return (
                n.hasL1 && (r = e.add(r, e.sum(i.mul(n.l1, e.abs(t))))),
                n.hasL2 && (r = e.add(r, e.sum(i.mul(n.l2, bt(t))))),
                i.reshape(r, [])
              );
            });
          }),
          (n.prototype.getConfig = function () {
            return { l1: this.l1, l2: this.l2 };
          }),
          (n.fromConfig = function (t, e) {
            return new t({ l1: e.l1, l2: e.l2 });
          }),
          n
        );
      })(Zl);
    (Yl.className = "L1L2"), e.serialization.registerClass(Yl);
    var Xl = { l1l2: "L1L2" };
    function $l(t) {
      return A(t);
    }
    function Ql(t, n) {
      return (
        void 0 === n && (n = {}),
        E(
          t,
          e.serialization.SerializationMap.getMap().classNameMap,
          n,
          "regularizer",
        )
      );
    }
    function tc(t) {
      return null == t
        ? null
        : "string" == typeof t
          ? Ql({ className: t in Xl ? Xl[t] : t, config: {} })
          : t instanceof Zl
            ? t
            : Ql(t);
    }
    var ec = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        return (
          (n.supportsMasking = !0), null != e && (n.maxValue = e.maxValue), n
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          t = Jt(t);
          var r = e.relu(t);
          return (
            null != this.maxValue && (r = e.clipByValue(r, 0, this.maxValue)), r
          );
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = { maxValue: this.maxValue },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (ec.className = "ReLU"), e.serialization.registerClass(ec);
    var nc = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        return (
          (n.DEFAULT_ALPHA = 0.3),
          null == e && (e = {}),
          (n.alpha = null == e.alpha ? n.DEFAULT_ALPHA : e.alpha),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = Jt(t);
          return e.leakyRelu(r, this.alpha);
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = { alpha: this.alpha },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (nc.className = "LeakyReLU"), e.serialization.registerClass(nc);
    var rc = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        if (
          ((n.DEFAULT_ALPHA_INITIALIZER = "zeros"),
          null == e && (e = {}),
          (n.supportsMasking = !0),
          (n.alphaInitializer = Gt(
            e.alphaInitializer || n.DEFAULT_ALPHA_INITIALIZER,
          )),
          (n.alphaRegularizer = tc(e.alphaRegularizer)),
          (n.alphaConstraint = fu(e.alphaConstraint)),
          null == e.sharedAxes)
        )
          n.sharedAxes = null;
        else if (Array.isArray(e.sharedAxes)) n.sharedAxes = e.sharedAxes;
        else {
          if ("number" != typeof e.sharedAxes)
            throw new d(
              "Expected sharedAxes to be a number or an array of numbers, " +
                "but got ".concat(e.sharedAxes),
            );
          n.sharedAxes = [e.sharedAxes];
        }
        return n;
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e,
            n,
            r = (t = Zt(t)).slice(1);
          if (null != this.sharedAxes)
            try {
              for (
                var i = l(this.sharedAxes), a = i.next();
                !a.done;
                a = i.next()
              ) {
                r[(s = a.value) - 1] = 1;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (n = i.return) && n.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
          this.alpha = this.addWeight(
            "alpha",
            r,
            "float32",
            this.alphaInitializer,
            this.alphaRegularizer,
            !0,
            this.alphaConstraint,
          );
          var o = {};
          if (null != this.sharedAxes)
            for (var s = 1; s < t.length; ++s) o[s] = t[s];
          (this.inputSpec = [new ee({ ndim: t.length, axes: o })]),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          return (t = Jt(t)), e.prelu(t, this.alpha.read());
        }),
        (n.prototype.getConfig = function () {
          var e = {
              alphaInitializer: qt(this.alphaInitializer),
              alphaRegularizer: $l(this.alphaRegularizer),
              alphaConstraint: hu(this.alphaConstraint),
              sharedAxes: this.sharedAxes,
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (rc.className = "PReLU"), e.serialization.registerClass(rc);
    var ic = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        if (
          ((n.DEFAULT_ALPHA = 1),
          null == e && (e = {}),
          null != e.alpha && e.alpha !== n.DEFAULT_ALPHA)
        )
          throw new g(
            "Non-default alpha value (".concat(
              e.alpha,
              ") is not supported by the ",
            ) + "ELU layer yet.",
          );
        return (n.alpha = null == e.alpha ? n.DEFAULT_ALPHA : e.alpha), n;
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = Jt(t);
          return e.elu(r);
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = { alpha: this.alpha },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (ic.className = "ELU"), e.serialization.registerClass(ic);
    var ac = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        return (
          (n.DEFAULT_THETA = 1),
          null == e && (e = {}),
          (n.theta = null == e.theta ? n.DEFAULT_THETA : e.theta),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = Jt(t);
          return e.mul(r, e.cast(e.greater(r, this.theta), "float32"));
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = { theta: this.theta },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (ac.className = "ThresholdedReLU"), e.serialization.registerClass(ac);
    var oc = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        return (
          (n.DEFAULT_AXIS = 1),
          null == e && (e = {}),
          (n.softmax = new Ul().apply),
          (n.axis = null == e.axis ? n.DEFAULT_AXIS : e.axis),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var i = Jt(t),
              a = n.mask;
            if (null != a) {
              var o = e.mul(
                e.sub(e.ones(i.shape), e.cast(a, i.dtype)),
                e.scalar(-1e9),
              );
              i = e.add(i, o);
            }
            return r.axis instanceof Array
              ? r.axis.length > 1
                ? e.exp(e.sub(i, e.logSumExp(i, r.axis, !0)))
                : r.softmax(i, r.axis[0])
              : r.softmax(i, r.axis);
          });
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = { axis: this.axis },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    function sc(t, e, n) {
      if ("number" == typeof t) return m(t, e);
      if (t.length !== e)
        throw new d(
          "The "
            .concat(n, " argument must be an integer or tuple of ")
            .concat(e, " integers.") +
            " Received: ".concat(t.length, " elements."),
        );
      for (var r = 0; r < e; ++r) {
        var i = t[r];
        if ((a = i) !== parseInt(a.toString(), 10))
          throw new d(
            "The "
              .concat(n, " argument must be an integer or tuple of ")
              .concat(e) +
              " integers. Received: ".concat(JSON.stringify(t), " including a") +
              " non-integer number ".concat(i),
          );
      }
      return t;
      var a;
    }
    function uc(t, e, n, r, i) {
      return (
        void 0 === i && (i = 1),
        null == t
          ? t
          : ((a = "same" === n ? t : t - (e + (e - 1) * (i - 1)) + 1),
            Math.floor((a + r - 1) / r))
      );
      var a;
    }
    function lc(t, e, n, r) {
      if (null == t) return null;
      if ("valid" === r) t = t * e + at([n - e, 0]);
      else {
        if ("same" !== r) throw new d("Unsupport padding mode: ".concat(r, "."));
        t *= e;
      }
      return t;
    }
    function cc(t, n) {
      return e.tidy(function () {
        return H(n), "channelsFirst" === n ? i.transpose(t, [0, 2, 3, 1]) : t;
      });
    }
    function hc(t, n) {
      return e.tidy(function () {
        return H(n), "channelsFirst" === n ? i.transpose(t, [0, 2, 3, 4, 1]) : t;
      });
    }
    function pc(t, n, r, a, o, s, u, l) {
      return (
        void 0 === a && (a = [1, 1]),
        void 0 === o && (o = "valid"),
        void 0 === l && (l = null),
        e.tidy(function () {
          if (
            (null == s && (s = "channelsLast"),
            H(s),
            3 !== t.rank && 4 !== t.rank)
          )
            throw new d(
              "conv2dWithBiasActivation expects input to be of rank 3 or 4, " +
                "but received ".concat(t.rank, "."),
            );
          if (3 !== n.rank && 4 !== n.rank)
            throw new d(
              "conv2dWithBiasActivation expects kernel to be of rank 3 or 4, " +
                "but received ".concat(t.rank, "."),
            );
          var e = cc(t, s);
          if ("causal" === o)
            throw new g(
              "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.",
            );
          return (
            (e = i.fused.conv2d({
              x: e,
              filter: n,
              strides: a,
              pad: "same" === o ? "same" : "valid",
              dilations: u,
              dataFormat: "NHWC",
              bias: r,
              activation: l,
            })),
            "channelsFirst" === s && (e = i.transpose(e, [0, 3, 1, 2])),
            e
          );
        })
      );
    }
    (oc.className = "Softmax"), e.serialization.registerClass(oc);
    var fc = (function (t) {
        function e(n, r) {
          var i = t.call(this, r) || this;
          if (
            ((i.bias = null),
            (i.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (i.DEFAULT_BIAS_INITIALIZER = "zeros"),
            e.verifyArgs(r),
            (i.rank = n),
            L(i.rank, "rank"),
            1 !== i.rank && 2 !== i.rank && 3 !== i.rank)
          )
            throw new g(
              "Convolution layer for rank other than 1, 2, or 3 (".concat(
                i.rank,
                ") is ",
              ) + "not implemented yet.",
            );
          if (
            ((i.kernelSize = sc(r.kernelSize, n, "kernelSize")),
            (i.strides = sc(null == r.strides ? 1 : r.strides, n, "strides")),
            (i.padding = null == r.padding ? "valid" : r.padding),
            J(i.padding),
            (i.dataFormat = null == r.dataFormat ? "channelsLast" : r.dataFormat),
            H(i.dataFormat),
            (i.activation = Hl(r.activation)),
            (i.useBias = null == r.useBias || r.useBias),
            (i.biasInitializer = Gt(
              r.biasInitializer || i.DEFAULT_BIAS_INITIALIZER,
            )),
            (i.biasConstraint = fu(r.biasConstraint)),
            (i.biasRegularizer = tc(r.biasRegularizer)),
            (i.activityRegularizer = tc(r.activityRegularizer)),
            (i.dilationRate = sc(
              null == r.dilationRate ? 1 : r.dilationRate,
              n,
              "dilationRate",
            )),
            1 === i.rank &&
              Array.isArray(i.dilationRate) &&
              1 !== i.dilationRate.length)
          )
            throw new d(
              "dilationRate must be a number or an array of a single number for 1D convolution, but received " +
                "".concat(JSON.stringify(i.dilationRate)),
            );
          if (2 === i.rank) {
            if ("number" == typeof i.dilationRate)
              i.dilationRate = [i.dilationRate, i.dilationRate];
            else if (2 !== i.dilationRate.length)
              throw new d(
                "dilationRate must be a number or array of two numbers for 2D " +
                  "convolution, but received ".concat(
                    JSON.stringify(i.dilationRate),
                  ),
              );
          } else if (3 === i.rank)
            if ("number" == typeof i.dilationRate)
              i.dilationRate = [i.dilationRate, i.dilationRate, i.dilationRate];
            else if (3 !== i.dilationRate.length)
              throw new d(
                "dilationRate must be a number or array of three numbers for 3D " +
                  "convolution, but received ".concat(
                    JSON.stringify(i.dilationRate),
                  ),
              );
          return i;
        }
        return (
          o(e, t),
          (e.verifyArgs = function (t) {
            if (
              (b("kernelSize" in t, "required key 'kernelSize' not in config"),
              "number" != typeof t.kernelSize && !_(t.kernelSize, "number", 1, 3))
            )
              throw new d(
                "BaseConv expects config.kernelSize to be number or number[] with " +
                  "length 1, 2, or 3, but received ".concat(
                    JSON.stringify(t.kernelSize),
                    ".",
                  ),
              );
          }),
          (e.prototype.getConfig = function () {
            var e = {
                kernelSize: this.kernelSize,
                strides: this.strides,
                padding: this.padding,
                dataFormat: this.dataFormat,
                dilationRate: this.dilationRate,
                activation: Gl(this.activation),
                useBias: this.useBias,
                biasInitializer: qt(this.biasInitializer),
                biasRegularizer: $l(this.biasRegularizer),
                activityRegularizer: $l(this.activityRegularizer),
                biasConstraint: hu(this.biasConstraint),
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          e
        );
      })(oe),
      dc = (function (t) {
        function n(e, r) {
          var i = t.call(this, e, r) || this;
          return (
            (i.kernel = null),
            n.verifyArgs(r),
            (i.filters = r.filters),
            L(i.filters, "filters"),
            (i.kernelInitializer = Gt(
              r.kernelInitializer || i.DEFAULT_KERNEL_INITIALIZER,
            )),
            (i.kernelConstraint = fu(r.kernelConstraint)),
            (i.kernelRegularizer = tc(r.kernelRegularizer)),
            i
          );
        }
        return (
          o(n, t),
          (n.prototype.build = function (t) {
            var e;
            t = Zt(t);
            var n = "channelsFirst" === this.dataFormat ? 1 : t.length - 1;
            if (null == t[n])
              throw new d(
                "The channel dimension of the input should be defined. " +
                  "Found ".concat(t[n]),
              );
            var r = t[n],
              i = this.kernelSize.concat([r, this.filters]);
            (this.kernel = this.addWeight(
              "kernel",
              i,
              null,
              this.kernelInitializer,
              this.kernelRegularizer,
              !0,
              this.kernelConstraint,
            )),
              this.useBias &&
                (this.bias = this.addWeight(
                  "bias",
                  [this.filters],
                  null,
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint,
                )),
              (this.inputSpec = [
                { ndim: this.rank + 2, axes: ((e = {}), (e[n] = r), e) },
              ]),
              (this.built = !0);
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var n;
              t = Jt(t);
              var a,
                o,
                s,
                u,
                l,
                c,
                h,
                p = null == r.bias ? null : r.bias.read(),
                f = O(r.activation.getClassName());
              if (null != f && 2 === r.rank)
                n = pc(
                  t,
                  r.kernel.read(),
                  p,
                  r.strides,
                  r.padding,
                  r.dataFormat,
                  r.dilationRate,
                  f,
                );
              else {
                if (1 === r.rank)
                  (a = t),
                    (o = r.kernel.read()),
                    (s = p),
                    (u = r.strides[0]),
                    (l = r.padding),
                    (c = r.dataFormat),
                    (h = r.dilationRate[0]),
                    void 0 === u && (u = 1),
                    void 0 === l && (l = "valid"),
                    void 0 === h && (h = 1),
                    (n = e.tidy(function () {
                      if (
                        (null == c && (c = "channelsLast"),
                        H(c),
                        3 !== a.shape.length)
                      )
                        throw new d(
                          "The input of a conv1dWithBias operation should be 3, but is " +
                            "".concat(a.shape.length, " instead."),
                        );
                      if (3 !== o.shape.length)
                        throw new d(
                          "The kernel for a conv1dWithBias operation should be 3, but is " +
                            "".concat(o.shape.length, " instead"),
                        );
                      if (null != s && 1 !== s.shape.length)
                        throw new d(
                          "The bias for a conv1dWithBias operation should be 1, but is " +
                            "".concat(o.shape.length, " instead"),
                        );
                      if (
                        ("channelsFirst" === c && (a = i.transpose(a, [0, 2, 1])),
                        "causal" === l)
                      )
                        throw new g(
                          "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.",
                        );
                      var t = i.conv1d(
                        a,
                        o,
                        u,
                        "same" === l ? "same" : "valid",
                        "NWC",
                        h,
                      );
                      return null != s && (t = kt(t, s)), t;
                    }));
                else if (2 === r.rank)
                  n = pc(
                    t,
                    r.kernel.read(),
                    p,
                    r.strides,
                    r.padding,
                    r.dataFormat,
                    r.dilationRate,
                  );
                else {
                  if (3 !== r.rank)
                    throw new g(
                      "convolutions greater than 3D are not implemented yet.",
                    );
                  n = (function (t, n, r, a, o, s, u) {
                    return (
                      void 0 === a && (a = [1, 1, 1]),
                      void 0 === o && (o = "valid"),
                      e.tidy(function () {
                        if (
                          (null == s && (s = "channelsLast"),
                          H(s),
                          4 !== t.rank && 5 !== t.rank)
                        )
                          throw new d(
                            "conv3dWithBias expects input to be of rank 4 or 5, but received " +
                              "".concat(t.rank, "."),
                          );
                        if (4 !== n.rank && 5 !== n.rank)
                          throw new d(
                            "conv3dWithBias expects kernel to be of rank 4 or 5, but received " +
                              "".concat(t.rank, "."),
                          );
                        var e = hc(t, s);
                        if ("causal" === o)
                          throw new g(
                            "The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.",
                          );
                        return (
                          (e = i.conv3d(
                            e,
                            n,
                            a,
                            "same" === o ? "same" : "valid",
                            "NDHWC",
                            u,
                          )),
                          null != r && (e = kt(e, r)),
                          "channelsFirst" === s &&
                            (e = i.transpose(e, [0, 4, 1, 2, 3])),
                          e
                        );
                      })
                    );
                  })(
                    t,
                    r.kernel.read(),
                    p,
                    r.strides,
                    r.padding,
                    r.dataFormat,
                    r.dilationRate,
                  );
                }
                null != r.activation && (n = r.activation.apply(n));
              }
              return n;
            });
          }),
          (n.prototype.computeOutputShape = function (t) {
            t = Zt(t);
            for (
              var e = [],
                n =
                  "channelsLast" === this.dataFormat
                    ? t.slice(1, t.length - 1)
                    : t.slice(2),
                r = 0;
              r < n.length;
              ++r
            ) {
              var i = uc(
                n[r],
                this.kernelSize[r],
                this.padding,
                this.strides[r],
                "number" == typeof this.dilationRate
                  ? this.dilationRate
                  : this.dilationRate[r],
              );
              e.push(i);
            }
            var a = [t[0]];
            return (
              "channelsLast" === this.dataFormat
                ? (a = a.concat(e)).push(this.filters)
                : (a.push(this.filters), (a = a.concat(e))),
              a
            );
          }),
          (n.prototype.getConfig = function () {
            var e = {
                filters: this.filters,
                kernelInitializer: qt(this.kernelInitializer),
                kernelRegularizer: $l(this.kernelRegularizer),
                kernelConstraint: hu(this.kernelConstraint),
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          (n.verifyArgs = function (t) {
            if (
              !("filters" in t) ||
              "number" != typeof t.filters ||
              t.filters < 1
            )
              throw new d(
                "Convolution layer expected config.filters to be a 'number' > 0 " +
                  "but got ".concat(JSON.stringify(t.filters)),
              );
          }),
          n
        );
      })(fc),
      gc = (function (t) {
        function e(n) {
          var r = t.call(this, 2, n) || this;
          return e.verifyArgs(n), r;
        }
        return (
          o(e, t),
          (e.prototype.getConfig = function () {
            var e = t.prototype.getConfig.call(this);
            return delete e.rank, e;
          }),
          (e.verifyArgs = function (t) {
            if (
              "number" != typeof t.kernelSize &&
              !_(t.kernelSize, "number", 1, 2)
            )
              throw new d(
                "Conv2D expects config.kernelSize to be number or number[] with " +
                  "length 1 or 2, but received ".concat(
                    JSON.stringify(t.kernelSize),
                    ".",
                  ),
              );
          }),
          e
        );
      })(dc);
    (gc.className = "Conv2D"), e.serialization.registerClass(gc);
    var vc = (function (t) {
      function e(n) {
        var r = t.call(this, 3, n) || this;
        return e.verifyArgs(n), r;
      }
      return (
        o(e, t),
        (e.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return delete e.rank, e;
        }),
        (e.verifyArgs = function (t) {
          if (
            "number" != typeof t.kernelSize &&
            (!Array.isArray(t.kernelSize) ||
              (1 !== t.kernelSize.length && 3 !== t.kernelSize.length))
          )
            throw new d(
              "Conv3D expects config.kernelSize to be number or" +
                " [number, number, number], but received ".concat(
                  JSON.stringify(t.kernelSize),
                  ".",
                ),
            );
        }),
        e
      );
    })(dc);
    (vc.className = "Conv3D"), e.serialization.registerClass(vc);
    var yc = (function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        if (
          ((n.inputSpec = [new ee({ ndim: 4 })]),
          "same" !== n.padding && "valid" !== n.padding)
        )
          throw new d(
            "Conv2DTranspose currently supports only padding modes 'same' " +
              "and 'valid', but received padding mode ".concat(n.padding),
          );
        return n;
      }
      return (
        o(e, t),
        (e.prototype.build = function (t) {
          var e;
          if (4 !== (t = Zt(t)).length)
            throw new d(
              "Input should have rank 4; Received input shape: " +
                JSON.stringify(t),
            );
          var n = "channelsFirst" === this.dataFormat ? 1 : t.length - 1;
          if (null == t[n])
            throw new d(
              "The channel dimension of the inputs should be defined. Found `None`.",
            );
          var r = t[n],
            i = this.kernelSize.concat([this.filters, r]);
          (this.kernel = this.addWeight(
            "kernel",
            i,
            "float32",
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint,
          )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.filters],
                "float32",
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint,
              )),
            (this.inputSpec = [
              new ee({ ndim: 4, axes: ((e = {}), (e[n] = r), e) }),
            ]),
            (this.built = !0);
        }),
        (e.prototype.call = function (t, e) {
          var n = this;
          return i.tidy(function () {
            var e = Jt(t);
            if (4 !== e.shape.length)
              throw new d(
                "Conv2DTranspose.call() expects input tensor to be rank-4, but " +
                  "received a tensor of rank-".concat(e.shape.length),
              );
            var r,
              a,
              o = e.shape,
              s = o[0];
            "channelsFirst" === n.dataFormat
              ? ((r = 2), (a = 3))
              : ((r = 1), (a = 2));
            var u = o[r],
              l = o[a],
              c = n.kernelSize[0],
              h = n.kernelSize[1],
              p = n.strides[0],
              f = n.strides[1],
              g = [s, lc(u, p, c, n.padding), lc(l, f, h, n.padding), n.filters];
            "channelsLast" !== n.dataFormat && (e = i.transpose(e, [0, 2, 3, 1]));
            var v = i.conv2dTranspose(
              e,
              n.kernel.read(),
              g,
              n.strides,
              n.padding,
            );
            return (
              "channelsLast" !== n.dataFormat &&
                (v = i.transpose(v, [0, 3, 1, 2])),
              null != n.bias && (v = kt(v, n.bias.read(), n.dataFormat)),
              null != n.activation && (v = n.activation.apply(v)),
              v
            );
          });
        }),
        (e.prototype.computeOutputShape = function (t) {
          var e,
            n,
            r,
            i = (t = Zt(t)).slice();
          "channelsFirst" === this.dataFormat
            ? ((e = 1), (n = 2), (r = 3))
            : ((e = 3), (n = 1), (r = 2));
          var a = this.kernelSize[0],
            o = this.kernelSize[1],
            s = this.strides[0],
            u = this.strides[1];
          return (
            (i[e] = this.filters),
            (i[n] = lc(i[n], s, a, this.padding)),
            (i[r] = lc(i[r], u, o, this.padding)),
            i
          );
        }),
        (e.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return delete e.dilationRate, e;
        }),
        e
      );
    })(gc);
    (yc.className = "Conv2DTranspose"), e.serialization.registerClass(yc);
    var mc = (function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        if (
          ((n.inputSpec = [new ee({ ndim: 5 })]),
          "same" !== n.padding && "valid" !== n.padding)
        )
          throw new d(
            "Conv3DTranspose currently supports only padding modes 'same' " +
              "and 'valid', but received padding mode ".concat(n.padding),
          );
        return n;
      }
      return (
        o(e, t),
        (e.prototype.build = function (t) {
          var e;
          if (5 !== (t = Zt(t)).length)
            throw new d(
              "Input should have rank 5; Received input shape: " +
                JSON.stringify(t),
            );
          var n = "channelsFirst" === this.dataFormat ? 1 : t.length - 1;
          if (null == t[n])
            throw new d(
              "The channel dimension of the inputs should be defined. Found `None`.",
            );
          var r = t[n],
            i = this.kernelSize.concat([this.filters, r]);
          (this.kernel = this.addWeight(
            "kernel",
            i,
            "float32",
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint,
          )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.filters],
                "float32",
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint,
              )),
            (this.inputSpec = [
              new ee({ ndim: 5, axes: ((e = {}), (e[n] = r), e) }),
            ]),
            (this.built = !0);
        }),
        (e.prototype.call = function (t, e) {
          var n = this;
          return i.tidy(function () {
            var e = Jt(t);
            if (5 !== e.shape.length)
              throw new d(
                "Conv3DTranspose.call() expects input tensor to be rank-4, but " +
                  "received a tensor of rank-".concat(e.shape.length),
              );
            var r,
              a,
              o,
              s = e.shape,
              u = s[0];
            "channelsFirst" === n.dataFormat
              ? ((o = 2), (r = 3), (a = 4))
              : ((o = 1), (r = 2), (a = 3));
            var l = s[o],
              c = s[r],
              h = s[a],
              p = n.kernelSize[0],
              f = n.kernelSize[1],
              g = n.kernelSize[2],
              v = n.strides[0],
              y = n.strides[1],
              m = n.strides[2],
              b = [
                u,
                lc(l, v, p, n.padding),
                lc(c, y, f, n.padding),
                lc(h, m, g, n.padding),
                n.filters,
              ];
            "channelsLast" !== n.dataFormat &&
              (e = i.transpose(e, [0, 2, 3, 4, 1]));
            var w = i.conv3dTranspose(
              e,
              n.kernel.read(),
              b,
              n.strides,
              n.padding,
            );
            return (
              "channelsLast" !== n.dataFormat &&
                (w = i.transpose(w, [0, 4, 1, 2, 3])),
              null !== n.bias && (w = kt(w, n.bias.read(), n.dataFormat)),
              null !== n.activation && (w = n.activation.apply(w)),
              w
            );
          });
        }),
        (e.prototype.computeOutputShape = function (t) {
          var e,
            n,
            r,
            i,
            a = (t = Zt(t)).slice();
          "channelsFirst" === this.dataFormat
            ? ((e = 1), (n = 2), (r = 3), (i = 4))
            : ((e = 4), (n = 1), (r = 2), (i = 3));
          var o = this.kernelSize[0],
            s = this.kernelSize[1],
            u = this.kernelSize[2],
            l = this.strides[0],
            c = this.strides[1],
            h = this.strides[2];
          return (
            (a[e] = this.filters),
            (a[n] = lc(a[n], l, o, this.padding)),
            (a[r] = lc(a[r], c, s, this.padding)),
            (a[i] = lc(a[i], h, u, this.padding)),
            a
          );
        }),
        (e.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return delete e.dilationRate, e;
        }),
        e
      );
    })(vc);
    (mc.className = "Conv3DTranspose"), e.serialization.registerClass(mc);
    var bc = (function (t) {
      function n(e, n) {
        var r = t.call(this, e, n) || this;
        if (
          ((r.DEFAULT_DEPTHWISE_INITIALIZER = "glorotUniform"),
          (r.DEFAULT_POINTWISE_INITIALIZER = "glorotUniform"),
          (r.depthwiseKernel = null),
          (r.pointwiseKernel = null),
          null == n.filters)
        )
          throw new d(
            "The `filters` configuration field is required by SeparableConv, but is unspecified.",
          );
        if (
          null != n.kernelInitializer ||
          null != n.kernelRegularizer ||
          null != n.kernelConstraint
        )
          throw new d(
            "Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.",
          );
        if (null != n.padding && "same" !== n.padding && "valid" !== n.padding)
          throw new d(
            "SeparableConv".concat(r.rank, "D supports only padding modes: ") +
              "'same' and 'valid', but received ".concat(
                JSON.stringify(n.padding),
              ),
          );
        return (
          (r.depthMultiplier = null == n.depthMultiplier ? 1 : n.depthMultiplier),
          (r.depthwiseInitializer = Gt(
            n.depthwiseInitializer || r.DEFAULT_DEPTHWISE_INITIALIZER,
          )),
          (r.depthwiseRegularizer = tc(n.depthwiseRegularizer)),
          (r.depthwiseConstraint = fu(n.depthwiseConstraint)),
          (r.pointwiseInitializer = Gt(
            n.depthwiseInitializer || r.DEFAULT_POINTWISE_INITIALIZER,
          )),
          (r.pointwiseRegularizer = tc(n.pointwiseRegularizer)),
          (r.pointwiseConstraint = fu(n.pointwiseConstraint)),
          r
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e;
          if ((t = Zt(t)).length < this.rank + 2)
            throw new d(
              "Inputs to SeparableConv".concat(this.rank, "D should have rank ") +
                "".concat(this.rank + 2, ", but received input shape: ") +
                "".concat(JSON.stringify(t)),
            );
          var n = "channelsFirst" === this.dataFormat ? 1 : t.length - 1;
          if (null == t[n] || t[n] < 0)
            throw new d(
              "The channel dimension of the inputs should be defined, " +
                "but found ".concat(JSON.stringify(t[n])),
            );
          for (
            var r = t[n],
              i = this.kernelSize.concat([r, this.depthMultiplier]),
              a = [],
              o = 0;
            o < this.rank;
            ++o
          )
            a.push(1);
          a.push(r * this.depthMultiplier, this.filters);
          var s = !0;
          (this.depthwiseKernel = this.addWeight(
            "depthwise_kernel",
            i,
            "float32",
            this.depthwiseInitializer,
            this.depthwiseRegularizer,
            s,
            this.depthwiseConstraint,
          )),
            (this.pointwiseKernel = this.addWeight(
              "pointwise_kernel",
              a,
              "float32",
              this.pointwiseInitializer,
              this.pointwiseRegularizer,
              s,
              this.pointwiseConstraint,
            )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [this.filters],
                  "float32",
                  this.biasInitializer,
                  this.biasRegularizer,
                  s,
                  this.biasConstraint,
                ))
              : (this.bias = null),
            (this.inputSpec = [
              new ee({ ndim: this.rank + 2, axes: ((e = {}), (e[n] = r), e) }),
            ]),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e;
            if (((t = Jt(t)), 1 === r.rank))
              throw new g("1D separable convolution is not implemented yet.");
            return (
              2 === r.rank &&
                ("channelsFirst" === r.dataFormat &&
                  (t = i.transpose(t, [0, 2, 3, 1])),
                (e = i.separableConv2d(
                  t,
                  r.depthwiseKernel.read(),
                  r.pointwiseKernel.read(),
                  r.strides,
                  r.padding,
                  r.dilationRate,
                  "NHWC",
                ))),
              r.useBias && (e = kt(e, r.bias.read(), r.dataFormat)),
              null != r.activation && (e = r.activation.apply(e)),
              "channelsFirst" === r.dataFormat &&
                (e = i.transpose(e, [0, 3, 1, 2])),
              e
            );
          });
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return (
            delete e.rank,
            delete e.kernelInitializer,
            delete e.kernelRegularizer,
            delete e.kernelConstraint,
            (e.depthwiseInitializer = qt(this.depthwiseInitializer)),
            (e.pointwiseInitializer = qt(this.pointwiseInitializer)),
            (e.depthwiseRegularizer = $l(this.depthwiseRegularizer)),
            (e.pointwiseRegularizer = $l(this.pointwiseRegularizer)),
            (e.depthwiseConstraint = hu(this.depthwiseConstraint)),
            (e.pointwiseConstraint = hu(this.pointwiseConstraint)),
            e
          );
        }),
        n
      );
    })(dc);
    bc.className = "SeparableConv";
    var wc = (function (t) {
      function e(e) {
        return t.call(this, 2, e) || this;
      }
      return o(e, t), e;
    })(bc);
    (wc.className = "SeparableConv2D"), e.serialization.registerClass(wc);
    var kc = (function (t) {
      function e(n) {
        var r = t.call(this, 1, n) || this;
        return e.verifyArgs(n), (r.inputSpec = [{ ndim: 3 }]), r;
      }
      return (
        o(e, t),
        (e.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return delete e.rank, delete e.dataFormat, e;
        }),
        (e.verifyArgs = function (t) {
          if ("number" != typeof t.kernelSize && !_(t.kernelSize, "number", 1, 1))
            throw new d(
              "Conv1D expects config.kernelSize to be number or number[] with " +
                "length 1, but received ".concat(
                  JSON.stringify(t.kernelSize),
                  ".",
                ),
            );
        }),
        e
      );
    })(dc);
    (kc.className = "Conv1D"), e.serialization.registerClass(kc);
    var xc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          "number" == typeof e.cropping
            ? (n.cropping = [
                [e.cropping, e.cropping],
                [e.cropping, e.cropping],
              ])
            : "number" == typeof e.cropping[0]
              ? (n.cropping = [
                  [e.cropping[0], e.cropping[0]],
                  [e.cropping[1], e.cropping[1]],
                ])
              : (n.cropping = e.cropping),
          (n.dataFormat =
            void 0 === e.dataFormat ? "channelsLast" : e.dataFormat),
          (n.inputSpec = [{ ndim: 4 }]),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          return "channelsFirst" === this.dataFormat
            ? [
                t[0],
                t[1],
                t[2] - this.cropping[0][0] - this.cropping[0][1],
                t[3] - this.cropping[1][0] - this.cropping[1][1],
              ]
            : [
                t[0],
                t[1] - this.cropping[0][0] - this.cropping[0][1],
                t[2] - this.cropping[1][0] - this.cropping[1][1],
                t[3],
              ];
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            if (((t = Jt(t)), "channelsLast" === r.dataFormat)) {
              var e = pt(
                t,
                r.cropping[0][0],
                t.shape[1] - r.cropping[0][0] - r.cropping[0][1],
                2,
              );
              return pt(
                e,
                r.cropping[1][0],
                t.shape[2] - r.cropping[1][1] - r.cropping[1][0],
                3,
              );
            }
            e = pt(
              t,
              r.cropping[0][0],
              t.shape[2] - r.cropping[0][0] - r.cropping[0][1],
              3,
            );
            return pt(
              e,
              r.cropping[1][0],
              t.shape[3] - r.cropping[1][1] - r.cropping[1][0],
              4,
            );
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { cropping: this.cropping, dataFormat: this.dataFormat },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (xc.className = "Cropping2D"), e.serialization.registerClass(xc);
    var Sc = (function (t) {
      function e(e) {
        var n,
          r = t.call(this, e) || this;
        return (
          (r.DEFAULT_SIZE = [2, 2]),
          (r.inputSpec = [{ ndim: 4 }]),
          (r.size = null == e.size ? r.DEFAULT_SIZE : e.size),
          (r.dataFormat = null == e.dataFormat ? "channelsLast" : e.dataFormat),
          H(r.dataFormat),
          (r.interpolation =
            null == e.interpolation ? "nearest" : e.interpolation),
          (n = r.interpolation),
          D(W, "InterpolationFormat", n),
          r
        );
      }
      return (
        o(e, t),
        (e.prototype.computeOutputShape = function (t) {
          if ("channelsFirst" === this.dataFormat) {
            var e = null == t[2] ? null : this.size[0] * t[2],
              n = null == t[3] ? null : this.size[1] * t[3];
            return [t[0], t[1], e, n];
          }
          (e = null == t[1] ? null : this.size[0] * t[1]),
            (n = null == t[2] ? null : this.size[1] * t[2]);
          return [t[0], e, n, t[3]];
        }),
        (e.prototype.call = function (t, e) {
          var n = this;
          return i.tidy(function () {
            var e = Jt(t),
              r = e.shape;
            if ("channelsFirst" === n.dataFormat) {
              e = i.transpose(e, [0, 2, 3, 1]);
              var a = n.size[0] * r[2],
                o = n.size[1] * r[3],
                s =
                  "nearest" === n.interpolation
                    ? i.image.resizeNearestNeighbor(e, [a, o])
                    : i.image.resizeBilinear(e, [a, o]);
              return i.transpose(s, [0, 3, 1, 2]);
            }
            (a = n.size[0] * r[1]), (o = n.size[1] * r[2]);
            return "nearest" === n.interpolation
              ? i.image.resizeNearestNeighbor(e, [a, o])
              : i.image.resizeBilinear(e, [a, o]);
          });
        }),
        (e.prototype.getConfig = function () {
          var e = {
              size: this.size,
              dataFormat: this.dataFormat,
              interpolation: this.interpolation,
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        e
      );
    })(oe);
    (Sc.className = "UpSampling2D"), e.serialization.registerClass(Sc);
    var Nc = (function (t) {
      function n(e) {
        var n = t.call(this, 2, e) || this;
        return (
          (n.depthwiseKernel = null),
          (n.depthMultiplier = null == e.depthMultiplier ? 1 : e.depthMultiplier),
          (n.depthwiseInitializer = Gt(
            e.depthwiseInitializer || n.DEFAULT_KERNEL_INITIALIZER,
          )),
          (n.depthwiseConstraint = fu(e.depthwiseConstraint)),
          (n.depthwiseRegularizer = tc(e.depthwiseRegularizer)),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          if ((t = Zt(t)).length < 4)
            throw new d(
              "Inputs to DepthwiseConv2D should have rank 4. " +
                "Received input shape: ".concat(JSON.stringify(t), "."),
            );
          var e = "channelsFirst" === this.dataFormat ? 1 : 3;
          if (null == t[e] || t[e] < 0)
            throw new d(
              "The channel dimension of the inputs to DepthwiseConv2D should " +
                "be defined, but is not (".concat(t[e], ")."),
            );
          var n = t[e],
            r = [this.kernelSize[0], this.kernelSize[1], n, this.depthMultiplier];
          (this.depthwiseKernel = this.addWeight(
            "depthwise_kernel",
            r,
            null,
            this.depthwiseInitializer,
            this.depthwiseRegularizer,
            !0,
            this.depthwiseConstraint,
          )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [n * this.depthMultiplier],
                  null,
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint,
                ))
              : (this.bias = null),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            t = Jt(t);
            var n,
              a,
              o,
              s,
              u,
              l,
              c =
                ((n = t),
                (a = r.depthwiseKernel.read()),
                (o = r.strides),
                (s = r.padding),
                (u = r.dataFormat),
                (l = null),
                void 0 === o && (o = [1, 1]),
                void 0 === s && (s = "valid"),
                e.tidy(function () {
                  null == u && (u = "channelsLast"), H(u);
                  var t = cc(n, u);
                  if (4 !== n.rank)
                    throw new d(
                      "Input for depthwiseConv2d is required to be 4-D, but is instead " +
                        "".concat(n.rank, "-D"),
                    );
                  if (4 !== a.rank)
                    throw new d(
                      "depthwiseKernel is required to be 4-D, but is instead " +
                        "".concat(a.rank, "-D"),
                    );
                  return (
                    (t = i.depthwiseConv2d(
                      t,
                      a,
                      o,
                      "same" === s ? "same" : "valid",
                      "NHWC",
                      l,
                    )),
                    "channelsFirst" === u && (t = i.transpose(t, [0, 3, 1, 2])),
                    t
                  );
                }));
            return (
              r.useBias && (c = kt(c, r.bias.read(), r.dataFormat)),
              null != r.activation && (c = r.activation.apply(c)),
              c
            );
          });
        }),
        (n.prototype.computeOutputShape = function (t) {
          t = Zt(t);
          var e = "channelsFirst" === this.dataFormat ? t[2] : t[1],
            n = "channelsFirst" === this.dataFormat ? t[3] : t[2],
            r =
              "channelsFirst" === this.dataFormat
                ? t[1] * this.depthMultiplier
                : t[3] * this.depthMultiplier,
            i = uc(e, this.kernelSize[0], this.padding, this.strides[0]),
            a = uc(n, this.kernelSize[1], this.padding, this.strides[1]);
          return "channelsFirst" === this.dataFormat
            ? [t[0], r, i, a]
            : [t[0], i, a, r];
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          return (
            (e.depthMultiplier = this.depthMultiplier),
            (e.depthwiseInitializer = qt(this.depthwiseInitializer)),
            (e.depthwiseRegularizer = $l(this.depthwiseRegularizer)),
            (e.depthwiseConstraint = hu(this.depthwiseRegularizer)),
            e
          );
        }),
        n
      );
    })(fc);
    function Ic(t, e, n, r) {
      if (Array.isArray(t)) {
        if (null != e || null != n)
          throw new d(
            "When inputs is an array, neither initialState or constants should be provided",
          );
        null != r &&
          ((n = t.slice(t.length - r, t.length)), (t = t.slice(0, t.length - r))),
          t.length > 1 && (e = t.slice(1, t.length)),
          (t = t[0]);
      }
      function i(t) {
        return null == t || Array.isArray(t) ? t : [t];
      }
      return { inputs: t, initialState: (e = i(e)), constants: (n = i(n)) };
    }
    function Ac(t, e, n, r, a, o, s, u) {
      return (
        void 0 === r && (r = !1),
        void 0 === s && (s = !1),
        void 0 === u && (u = !1),
        i.tidy(function () {
          var l = e.shape.length;
          if (l < 3)
            throw new d("Input should be at least 3D, but is ".concat(l, "D."));
          var c = [1, 0].concat(ot(2, l));
          if (((e = i.transpose(e, c)), null != o))
            throw new g(
              "The rnn() functoin of the deeplearn.js backend does not support constants yet.",
            );
          s &&
            console.warn(
              "Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.",
            ),
            null != a &&
              ((a = i.cast(i.cast(a, "bool"), "float32")).rank === l - 1 &&
                (a = i.expandDims(a, -1)),
              (a = i.transpose(a, c))),
            r && ((e = i.reverse(e, 0)), null != a && (a = i.reverse(a, 0)));
          var h,
            p,
            f = [],
            v = n,
            y = e.shape[0],
            m = i.unstack(e);
          null != a && (p = i.unstack(a));
          for (
            var b,
              w = function (e) {
                var n = m[e],
                  r = i.tidy(function () {
                    return t(n, v);
                  });
                if (null == a) (h = r[0]), (v = r[1]);
                else {
                  var o = i.tidy(function () {
                    var t = p[e],
                      n = i.sub(i.onesLike(t), t);
                    return {
                      output: i.add(i.mul(r[0], t), i.mul(v[0], n)),
                      newStates: v.map(function (e, a) {
                        return i.add(i.mul(r[1][a], t), i.mul(e, n));
                      }),
                    };
                  });
                  (h = o.output), (v = o.newStates);
                }
                u && f.push(h);
              },
              k = 0;
            k < y;
            ++k
          )
            w(k);
          if (u) {
            b = i.stack(f, 1);
          }
          return [h, b, v];
        })
      );
    }
    (Nc.className = "DepthwiseConv2D"), e.serialization.registerClass(Nc);
    var zc = (function (t) {
      function n(e) {
        var n,
          r = t.call(this, e) || this;
        if (null == e.cell)
          throw new d("cell property is missing for the constructor of RNN.");
        if (
          null ==
          (n = Array.isArray(e.cell) ? new Rc({ cells: e.cell }) : e.cell)
            .stateSize
        )
          throw new d(
            "The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).",
          );
        return (
          (r.cell = n),
          (r.returnSequences = null != e.returnSequences && e.returnSequences),
          (r.returnState = null != e.returnState && e.returnState),
          (r.goBackwards = null != e.goBackwards && e.goBackwards),
          (r._stateful = null != e.stateful && e.stateful),
          (r.unroll = null != e.unroll && e.unroll),
          (r.supportsMasking = !0),
          (r.inputSpec = [new ee({ ndim: 3 })]),
          (r.stateSpec = null),
          (r.states_ = null),
          (r.numConstants = null),
          (r.keptStates = []),
          r
        );
      }
      return (
        o(n, t),
        (n.prototype.getStates = function () {
          return null == this.states_
            ? ot(
                0,
                Array.isArray(this.cell.stateSize)
                  ? this.cell.stateSize.length
                  : 1,
              ).map(function (t) {
                return null;
              })
            : this.states_;
        }),
        (n.prototype.setStates = function (t) {
          this.states_ = t;
        }),
        (n.prototype.computeOutputShape = function (t) {
          var e, n;
          Kt(t) && (t = t[0]);
          var r = this.cell.stateSize;
          Array.isArray(r) || (r = [r]);
          var i,
            a = r[0];
          if (
            ((i = this.returnSequences ? [t[0], t[1], a] : [t[0], a]),
            this.returnState)
          ) {
            var o = [];
            try {
              for (var s = l(r), u = s.next(); !u.done; u = s.next()) {
                var c = u.value;
                o.push([t[0], c]);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                u && !u.done && (n = s.return) && n.call(s);
              } finally {
                if (e) throw e.error;
              }
            }
            return [i].concat(o);
          }
          return i;
        }),
        (n.prototype.computeMask = function (t, e) {
          var n = this;
          return i.tidy(function () {
            Array.isArray(e) && (e = e[0]);
            var t = n.returnSequences ? e : null;
            if (n.returnState) {
              var r = n.states.map(function (t) {
                return null;
              });
              return [t].concat(r);
            }
            return t;
          });
        }),
        Object.defineProperty(n.prototype, "states", {
          get: function () {
            if (null == this.states_) {
              for (
                var t = Array.isArray(this.cell.stateSize)
                    ? this.cell.stateSize.length
                    : 1,
                  e = [],
                  n = 0;
                n < t;
                ++n
              )
                e.push(null);
              return e;
            }
            return this.states_;
          },
          set: function (t) {
            this.states_ = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.build = function (t) {
          if (null != this.numConstants)
            throw new g("Constants support is not implemented in RNN yet.");
          Kt(t) && (t = t[0]);
          var n = this.stateful ? t[0] : null,
            r = t.slice(2);
          this.inputSpec[0] = new ee({ shape: h([n, null], c(r), !1) });
          var i,
            a = [t[0]].concat(t.slice(2));
          if (
            (this.cell.build(a),
            (i = Array.isArray(this.cell.stateSize)
              ? this.cell.stateSize
              : [this.cell.stateSize]),
            null != this.stateSpec)
          ) {
            if (
              !e.util.arraysEqual(
                this.stateSpec.map(function (t) {
                  return t.shape[t.shape.length - 1];
                }),
                i,
              )
            )
              throw new d(
                "An initialState was passed that is not compatible with " +
                  "cell.stateSize. Received stateSpec=".concat(
                    this.stateSpec,
                    "; ",
                  ) +
                  "However cell.stateSize is ".concat(this.cell.stateSize),
              );
          } else
            this.stateSpec = i.map(function (t) {
              return new ee({ shape: [null, t] });
            });
          this.stateful && this.resetStates();
        }),
        (n.prototype.resetStates = function (t, n) {
          var r = this;
          void 0 === n && (n = !1),
            e.tidy(function () {
              if (!r.stateful)
                throw new p(
                  "Cannot call resetStates() on an RNN Layer that is not stateful.",
                );
              var a = r.inputSpec[0].shape[0];
              if (null == a)
                throw new d(
                  "If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.",
                );
              if (null == r.states_)
                Array.isArray(r.cell.stateSize)
                  ? (r.states_ = r.cell.stateSize.map(function (t) {
                      return i.zeros([a, t]);
                    }))
                  : (r.states_ = [i.zeros([a, r.cell.stateSize])]);
              else if (null == t)
                i.dispose(r.states_),
                  null != r.keptStates &&
                    (i.dispose(r.keptStates), (r.keptStates = [])),
                  Array.isArray(r.cell.stateSize)
                    ? (r.states_ = r.cell.stateSize.map(function (t) {
                        return i.zeros([a, t]);
                      }))
                    : (r.states_[0] = i.zeros([a, r.cell.stateSize]));
              else {
                if (
                  (Array.isArray(t) || (t = [t]), t.length !== r.states_.length)
                )
                  throw new d(
                    "Layer "
                      .concat(r.name, " expects ")
                      .concat(r.states_.length, " state(s), ") +
                      "but it received ".concat(
                        t.length,
                        " state value(s). Input ",
                      ) +
                      "received: ".concat(t),
                  );
                !0 === n
                  ? r.keptStates.push(r.states_.slice())
                  : i.dispose(r.states_);
                for (var o = 0; o < r.states_.length; ++o) {
                  var s = t[o],
                    u = Array.isArray(r.cell.stateSize)
                      ? r.cell.stateSize[o]
                      : r.cell.stateSize,
                    l = [a, u];
                  if (!e.util.arraysEqual(s.shape, l))
                    throw new d(
                      "State "
                        .concat(o, " is incompatible with layer ")
                        .concat(r.name, ": ") +
                        "expected shape="
                          .concat(l, ", received shape=")
                          .concat(s.shape),
                    );
                  r.states_[o] = s;
                }
              }
              r.states_ = r.states_.map(function (t) {
                return i.keep(t.clone());
              });
            });
        }),
        (n.prototype.apply = function (e, n) {
          var r,
            i,
            a = null == n ? null : n.initialState,
            o = null == n ? null : n.constants;
          null == n && (n = {});
          var s = Ic(e, a, o, this.numConstants);
          (e = s.inputs), (a = s.initialState), (o = s.constants);
          var u = [],
            c = [];
          if (null != a) {
            (n.initialState = a), (u = u.concat(a)), (this.stateSpec = []);
            try {
              for (var h = l(a), p = h.next(); !p.done; p = h.next()) {
                var f = p.value;
                this.stateSpec.push(new ee({ shape: f.shape }));
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                p && !p.done && (i = h.return) && i.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
            c = c.concat(this.stateSpec);
          }
          if (
            (null != o &&
              ((n.constants = o),
              (u = u.concat(o)),
              (this.numConstants = o.length)),
            u[0] instanceof ne)
          ) {
            var d = [e].concat(u),
              g = this.inputSpec.concat(c),
              v = this.inputSpec;
            this.inputSpec = g;
            var y = t.prototype.apply.call(this, d, n);
            return (this.inputSpec = v), y;
          }
          return t.prototype.apply.call(this, e, n);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e = null == n ? null : n.mask,
              i = null == n ? null : n.training,
              a = null == n ? null : n.initialState;
            (t = Jt(t)),
              null == a && (a = r.stateful ? r.states_ : r.getInitialState(t));
            var o = Array.isArray(r.cell.stateSize) ? r.cell.stateSize.length : 1;
            if (a.length !== o)
              throw new d(
                "RNN Layer has ".concat(o, " state(s) but was passed ") +
                  "".concat(a.length, " initial state(s)."),
              );
            r.unroll &&
              console.warn(
                "Ignoring unroll = true for RNN layer, due to imperative backend.",
              );
            var s = { training: i },
              u = Ac(
                function (t, e) {
                  var n = r.cell.call([t].concat(e), s);
                  return [n[0], n.slice(1)];
                },
                t,
                a,
                r.goBackwards,
                e,
                null,
                r.unroll,
                r.returnSequences,
              ),
              l = u[0],
              c = u[1],
              h = u[2];
            r.stateful && r.resetStates(h, i);
            var p = r.returnSequences ? c : l;
            return r.returnState ? [p].concat(h) : p;
          });
        }),
        (n.prototype.getInitialState = function (t) {
          var n = this;
          return e.tidy(function () {
            var e = i.zeros(t.shape);
            return (
              (e = lt((e = i.sum(e, [1, 2])))),
              Array.isArray(n.cell.stateSize)
                ? n.cell.stateSize.map(function (t) {
                    return t > 1 ? gt(e, [1, t]) : e;
                  })
                : n.cell.stateSize > 1
                  ? [gt(e, [1, n.cell.stateSize])]
                  : [e]
            );
          });
        }),
        Object.defineProperty(n.prototype, "trainableWeights", {
          get: function () {
            return this.trainable ? this.cell.trainableWeights : [];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "nonTrainableWeights", {
          get: function () {
            return this.trainable
              ? this.cell.nonTrainableWeights
              : this.cell.weights;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.setFastWeightInitDuringBuild = function (e) {
          t.prototype.setFastWeightInitDuringBuild.call(this, e),
            null != this.cell && this.cell.setFastWeightInitDuringBuild(e);
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            r = {
              returnSequences: this.returnSequences,
              returnState: this.returnState,
              goBackwards: this.goBackwards,
              stateful: this.stateful,
              unroll: this.unroll,
            };
          null != this.numConstants && (r.numConstants = this.numConstants);
          var i = this.cell.getConfig();
          return (
            this.getClassName() === n.className &&
              (r.cell = { className: this.cell.getClassName(), config: i }),
            Object.assign(Object.assign(Object.assign({}, i), e), r)
          );
        }),
        (n.fromConfig = function (t, e, n) {
          void 0 === n && (n = {});
          var r = zu(e.cell, n);
          return new t(Object.assign(e, { cell: r }));
        }),
        n
      );
    })(oe);
    (zc.className = "RNN"), e.serialization.registerClass(zc);
    var Ec = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return o(e, t), e;
      })(oe),
      Tc = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return (
            (n.DEFAULT_ACTIVATION = "tanh"),
            (n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
            (n.DEFAULT_BIAS_INITIALIZER = "zeros"),
            (n.units = e.units),
            L(n.units, "units"),
            (n.activation = Hl(
              null == e.activation ? n.DEFAULT_ACTIVATION : e.activation,
            )),
            (n.useBias = null == e.useBias || e.useBias),
            (n.kernelInitializer = Gt(
              e.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER,
            )),
            (n.recurrentInitializer = Gt(
              e.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER,
            )),
            (n.biasInitializer = Gt(
              e.biasInitializer || n.DEFAULT_BIAS_INITIALIZER,
            )),
            (n.kernelRegularizer = tc(e.kernelRegularizer)),
            (n.recurrentRegularizer = tc(e.recurrentRegularizer)),
            (n.biasRegularizer = tc(e.biasRegularizer)),
            (n.kernelConstraint = fu(e.kernelConstraint)),
            (n.recurrentConstraint = fu(e.recurrentConstraint)),
            (n.biasConstraint = fu(e.biasConstraint)),
            (n.dropout = it([1, at([0, null == e.dropout ? 0 : e.dropout])])),
            (n.recurrentDropout = it([
              1,
              at([0, null == e.recurrentDropout ? 0 : e.recurrentDropout]),
            ])),
            (n.dropoutFunc = e.dropoutFunc),
            (n.stateSize = n.units),
            (n.dropoutMask = null),
            (n.recurrentDropoutMask = null),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.build = function (t) {
            (t = Zt(t)),
              (this.kernel = this.addWeight(
                "kernel",
                [t[t.length - 1], this.units],
                null,
                this.kernelInitializer,
                this.kernelRegularizer,
                !0,
                this.kernelConstraint,
              )),
              (this.recurrentKernel = this.addWeight(
                "recurrent_kernel",
                [this.units, this.units],
                null,
                this.recurrentInitializer,
                this.recurrentRegularizer,
                !0,
                this.recurrentConstraint,
              )),
              this.useBias
                ? (this.bias = this.addWeight(
                    "bias",
                    [this.units],
                    null,
                    this.biasInitializer,
                    this.biasRegularizer,
                    !0,
                    this.biasConstraint,
                  ))
                : (this.bias = null),
              (this.built = !0);
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              if (2 !== t.length)
                throw new d(
                  "SimpleRNNCell expects 2 input Tensors, got ".concat(
                    t.length,
                    ".",
                  ),
                );
              var e = t[1];
              t = t[0];
              var a,
                o = null != n.training && n.training;
              0 < r.dropout &&
                r.dropout < 1 &&
                null == r.dropoutMask &&
                (r.dropoutMask = Oc({
                  ones: function () {
                    return i.onesLike(t);
                  },
                  rate: r.dropout,
                  training: o,
                  dropoutFunc: r.dropoutFunc,
                })),
                0 < r.recurrentDropout &&
                  r.recurrentDropout < 1 &&
                  null == r.recurrentDropoutMask &&
                  (r.recurrentDropoutMask = Oc({
                    ones: function () {
                      return i.onesLike(e);
                    },
                    rate: r.recurrentDropout,
                    training: o,
                    dropoutFunc: r.dropoutFunc,
                  }));
              var s = r.dropoutMask,
                u = r.recurrentDropoutMask;
              (a = yt(null != s ? i.mul(t, s) : t, r.kernel.read())),
                null != r.bias && (a = kt(a, r.bias.read())),
                null != u && (e = i.mul(e, u));
              var l = i.add(a, yt(e, r.recurrentKernel.read()));
              return null != r.activation && (l = r.activation.apply(l)), [l, l];
            });
          }),
          (n.prototype.getConfig = function () {
            var e = t.prototype.getConfig.call(this),
              n = {
                units: this.units,
                activation: Gl(this.activation),
                useBias: this.useBias,
                kernelInitializer: qt(this.kernelInitializer),
                recurrentInitializer: qt(this.recurrentInitializer),
                biasInitializer: qt(this.biasInitializer),
                kernelRegularizer: $l(this.kernelRegularizer),
                recurrentRegularizer: $l(this.recurrentRegularizer),
                biasRegularizer: $l(this.biasRegularizer),
                activityRegularizer: $l(this.activityRegularizer),
                kernelConstraint: hu(this.kernelConstraint),
                recurrentConstraint: hu(this.recurrentConstraint),
                biasConstraint: hu(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
              };
            return Object.assign(Object.assign({}, e), n);
          }),
          n
        );
      })(Ec);
    (Tc.className = "SimpleRNNCell"), e.serialization.registerClass(Tc);
    var Cc = (function (t) {
      function n(e) {
        return (e.cell = new Tc(e)), t.call(this, e) || this;
      }
      return (
        o(n, t),
        (n.prototype.call = function (n, r) {
          var a = this;
          return e.tidy(function () {
            null != a.cell.dropoutMask &&
              (i.dispose(a.cell.dropoutMask), (a.cell.dropoutMask = null)),
              null != a.cell.recurrentDropoutMask &&
                (i.dispose(a.cell.recurrentDropoutMask),
                (a.cell.recurrentDropoutMask = null));
            var e = null == r ? null : r.mask,
              o = null == r ? null : r.training,
              s = null == r ? null : r.initialState;
            return t.prototype.call.call(a, n, {
              mask: e,
              training: o,
              initialState: s,
            });
          });
        }),
        (n.fromConfig = function (t, e) {
          return new t(e);
        }),
        n
      );
    })(zc);
    (Cc.className = "SimpleRNN"), e.serialization.registerClass(Cc);
    var Fc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        if (
          ((n.DEFAULT_ACTIVATION = "tanh"),
          (n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid"),
          (n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
          (n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
          (n.DEFAULT_BIAS_INITIALIZER = "zeros"),
          e.resetAfter)
        )
          throw new d(
            "GRUCell does not support reset_after parameter set to true.",
          );
        return (
          (n.units = e.units),
          L(n.units, "units"),
          (n.activation = Hl(
            void 0 === e.activation ? n.DEFAULT_ACTIVATION : e.activation,
          )),
          (n.recurrentActivation = Hl(
            void 0 === e.recurrentActivation
              ? n.DEFAULT_RECURRENT_ACTIVATION
              : e.recurrentActivation,
          )),
          (n.useBias = null == e.useBias || e.useBias),
          (n.kernelInitializer = Gt(
            e.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER,
          )),
          (n.recurrentInitializer = Gt(
            e.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER,
          )),
          (n.biasInitializer = Gt(
            e.biasInitializer || n.DEFAULT_BIAS_INITIALIZER,
          )),
          (n.kernelRegularizer = tc(e.kernelRegularizer)),
          (n.recurrentRegularizer = tc(e.recurrentRegularizer)),
          (n.biasRegularizer = tc(e.biasRegularizer)),
          (n.kernelConstraint = fu(e.kernelConstraint)),
          (n.recurrentConstraint = fu(e.recurrentConstraint)),
          (n.biasConstraint = fu(e.biasConstraint)),
          (n.dropout = it([1, at([0, null == e.dropout ? 0 : e.dropout])])),
          (n.recurrentDropout = it([
            1,
            at([0, null == e.recurrentDropout ? 0 : e.recurrentDropout]),
          ])),
          (n.dropoutFunc = e.dropoutFunc),
          (n.implementation = e.implementation),
          (n.stateSize = n.units),
          (n.dropoutMask = null),
          (n.recurrentDropoutMask = null),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e = (t = Zt(t))[t.length - 1];
          (this.kernel = this.addWeight(
            "kernel",
            [e, 3 * this.units],
            null,
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint,
          )),
            (this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              [this.units, 3 * this.units],
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint,
            )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [3 * this.units],
                  null,
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint,
                ))
              : (this.bias = null),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            if (2 !== t.length)
              throw new d(
                "GRUCell expects 2 input Tensors (inputs, h, c), got " +
                  "".concat(t.length, "."),
              );
            var e = null != n.training && n.training,
              a = t[1];
            (t = t[0]),
              0 < r.dropout &&
                r.dropout < 1 &&
                null == r.dropoutMask &&
                (r.dropoutMask = Oc({
                  ones: function () {
                    return i.onesLike(t);
                  },
                  rate: r.dropout,
                  training: e,
                  count: 3,
                  dropoutFunc: r.dropoutFunc,
                })),
              0 < r.recurrentDropout &&
                r.recurrentDropout < 1 &&
                null == r.recurrentDropoutMask &&
                (r.recurrentDropoutMask = Oc({
                  ones: function () {
                    return i.onesLike(a);
                  },
                  rate: r.recurrentDropout,
                  training: e,
                  count: 3,
                  dropoutFunc: r.dropoutFunc,
                }));
            var o,
              s,
              u,
              l = r.dropoutMask,
              h = r.recurrentDropoutMask;
            0 < r.dropout && r.dropout < 1 && (t = i.mul(t, l[0]));
            var p = yt(t, r.kernel.read());
            r.useBias && (p = kt(p, r.bias.read())),
              0 < r.recurrentDropout &&
                r.recurrentDropout < 1 &&
                (a = i.mul(a, h[0]));
            var f = r.recurrentKernel.read(),
              g = c(i.split(f, [2 * r.units, r.units], f.rank - 1), 2),
              v = g[0],
              y = g[1],
              m = yt(a, v),
              b = c(i.split(p, 3, p.rank - 1), 3),
              w = b[0],
              k = b[1],
              x = b[2],
              S = c(i.split(m, 2, m.rank - 1), 2),
              N = S[0],
              I = S[1];
            (o = r.recurrentActivation.apply(i.add(w, N))),
              (s = r.recurrentActivation.apply(i.add(k, I)));
            var A = yt(i.mul(s, a), y);
            u = r.activation.apply(i.add(x, A));
            var z = i.add(i.mul(o, a), i.mul(i.add(1, i.neg(o)), u));
            return [z, z];
          });
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = {
              units: this.units,
              activation: Gl(this.activation),
              recurrentActivation: Gl(this.recurrentActivation),
              useBias: this.useBias,
              kernelInitializer: qt(this.kernelInitializer),
              recurrentInitializer: qt(this.recurrentInitializer),
              biasInitializer: qt(this.biasInitializer),
              kernelRegularizer: $l(this.kernelRegularizer),
              recurrentRegularizer: $l(this.recurrentRegularizer),
              biasRegularizer: $l(this.biasRegularizer),
              activityRegularizer: $l(this.activityRegularizer),
              kernelConstraint: hu(this.kernelConstraint),
              recurrentConstraint: hu(this.recurrentConstraint),
              biasConstraint: hu(this.biasConstraint),
              dropout: this.dropout,
              recurrentDropout: this.recurrentDropout,
              implementation: this.implementation,
              resetAfter: !1,
            };
          return Object.assign(Object.assign({}, e), n);
        }),
        n
      );
    })(Ec);
    (Fc.className = "GRUCell"), e.serialization.registerClass(Fc);
    var Dc = (function (t) {
      function n(e) {
        return (
          0 === e.implementation &&
            console.warn(
              "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call.",
            ),
          (e.cell = new Fc(e)),
          t.call(this, e) || this
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (n, r) {
          var a = this;
          return e.tidy(function () {
            null != a.cell.dropoutMask &&
              (i.dispose(a.cell.dropoutMask), (a.cell.dropoutMask = null)),
              null != a.cell.recurrentDropoutMask &&
                (i.dispose(a.cell.recurrentDropoutMask),
                (a.cell.recurrentDropoutMask = null));
            var e = null == r ? null : r.mask,
              o = null == r ? null : r.training,
              s = null == r ? null : r.initialState;
            return t.prototype.call.call(a, n, {
              mask: e,
              training: o,
              initialState: s,
            });
          });
        }),
        (n.fromConfig = function (t, e) {
          return 0 === e.implmentation && (e.implementation = 1), new t(e);
        }),
        n
      );
    })(zc);
    (Dc.className = "GRU"), e.serialization.registerClass(Dc);
    var _c = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.DEFAULT_ACTIVATION = "tanh"),
          (n.DEFAULT_RECURRENT_ACTIVATION = "hardSigmoid"),
          (n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
          (n.DEFAULT_RECURRENT_INITIALIZER = "orthogonal"),
          (n.DEFAULT_BIAS_INITIALIZER = "zeros"),
          (n.units = e.units),
          L(n.units, "units"),
          (n.activation = Hl(
            void 0 === e.activation ? n.DEFAULT_ACTIVATION : e.activation,
          )),
          (n.recurrentActivation = Hl(
            void 0 === e.recurrentActivation
              ? n.DEFAULT_RECURRENT_ACTIVATION
              : e.recurrentActivation,
          )),
          (n.useBias = null == e.useBias || e.useBias),
          (n.kernelInitializer = Gt(
            e.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER,
          )),
          (n.recurrentInitializer = Gt(
            e.recurrentInitializer || n.DEFAULT_RECURRENT_INITIALIZER,
          )),
          (n.biasInitializer = Gt(
            e.biasInitializer || n.DEFAULT_BIAS_INITIALIZER,
          )),
          (n.unitForgetBias = e.unitForgetBias),
          (n.kernelRegularizer = tc(e.kernelRegularizer)),
          (n.recurrentRegularizer = tc(e.recurrentRegularizer)),
          (n.biasRegularizer = tc(e.biasRegularizer)),
          (n.kernelConstraint = fu(e.kernelConstraint)),
          (n.recurrentConstraint = fu(e.recurrentConstraint)),
          (n.biasConstraint = fu(e.biasConstraint)),
          (n.dropout = it([1, at([0, null == e.dropout ? 0 : e.dropout])])),
          (n.recurrentDropout = it([
            1,
            at([0, null == e.recurrentDropout ? 0 : e.recurrentDropout]),
          ])),
          (n.dropoutFunc = e.dropoutFunc),
          (n.implementation = e.implementation),
          (n.stateSize = [n.units, n.units]),
          (n.dropoutMask = null),
          (n.recurrentDropoutMask = null),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e,
            n,
            r = (t = Zt(t))[t.length - 1];
          if (
            ((this.kernel = this.addWeight(
              "kernel",
              [r, 4 * this.units],
              null,
              this.kernelInitializer,
              this.kernelRegularizer,
              !0,
              this.kernelConstraint,
            )),
            (this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              [this.units, 4 * this.units],
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint,
            )),
            this.useBias)
          ) {
            if (this.unitForgetBias) {
              var i = this.biasInitializer,
                a = this.units;
              n = new ((e = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  o(e, t),
                  (e.prototype.apply = function (t, e) {
                    var n = i.apply([a]),
                      r = new Et().apply([a]),
                      o = i.apply([2 * a]);
                    return dt(dt(n, r), o);
                  }),
                  e
                );
              })(At)),
              (e.className = "CustomInit"),
              e)();
            } else n = this.biasInitializer;
            this.bias = this.addWeight(
              "bias",
              [4 * this.units],
              null,
              n,
              this.biasRegularizer,
              !0,
              this.biasConstraint,
            );
          } else this.bias = null;
          this.built = !0;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e = null != n.training && n.training;
            if (3 !== t.length)
              throw new d(
                "LSTMCell expects 3 input Tensors (inputs, h, c), got " +
                  "".concat(t.length, "."),
              );
            var a = t[1],
              o = t[2];
            (t = t[0]),
              0 < r.dropout &&
                r.dropout < 1 &&
                null == r.dropoutMask &&
                (r.dropoutMask = Oc({
                  ones: function () {
                    return i.onesLike(t);
                  },
                  rate: r.dropout,
                  training: e,
                  count: 4,
                  dropoutFunc: r.dropoutFunc,
                })),
              0 < r.recurrentDropout &&
                r.recurrentDropout < 1 &&
                null == r.recurrentDropoutMask &&
                (r.recurrentDropoutMask = Oc({
                  ones: function () {
                    return i.onesLike(a);
                  },
                  rate: r.recurrentDropout,
                  training: e,
                  count: 4,
                  dropoutFunc: r.dropoutFunc,
                }));
            var s,
              u,
              l,
              h,
              p = r.dropoutMask,
              f = r.recurrentDropoutMask;
            0 < r.dropout && r.dropout < 1 && (t = i.mul(t, p[0]));
            var g = yt(t, r.kernel.read());
            0 < r.recurrentDropout &&
              r.recurrentDropout < 1 &&
              (a = i.mul(a, f[0])),
              (g = i.add(g, yt(a, r.recurrentKernel.read()))),
              r.useBias && (g = kt(g, r.bias.read()));
            var v = c(i.split(g, 4, g.rank - 1), 4),
              y = v[0],
              m = v[1],
              b = v[2],
              w = v[3];
            (s = r.recurrentActivation.apply(y)),
              (u = r.recurrentActivation.apply(m)),
              (l = i.add(i.mul(u, o), i.mul(s, r.activation.apply(b)))),
              (h = r.recurrentActivation.apply(w));
            var k = i.mul(h, r.activation.apply(l));
            return [k, k, l];
          });
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = {
              units: this.units,
              activation: Gl(this.activation),
              recurrentActivation: Gl(this.recurrentActivation),
              useBias: this.useBias,
              kernelInitializer: qt(this.kernelInitializer),
              recurrentInitializer: qt(this.recurrentInitializer),
              biasInitializer: qt(this.biasInitializer),
              unitForgetBias: this.unitForgetBias,
              kernelRegularizer: $l(this.kernelRegularizer),
              recurrentRegularizer: $l(this.recurrentRegularizer),
              biasRegularizer: $l(this.biasRegularizer),
              activityRegularizer: $l(this.activityRegularizer),
              kernelConstraint: hu(this.kernelConstraint),
              recurrentConstraint: hu(this.recurrentConstraint),
              biasConstraint: hu(this.biasConstraint),
              dropout: this.dropout,
              recurrentDropout: this.recurrentDropout,
              implementation: this.implementation,
            };
          return Object.assign(Object.assign({}, e), n);
        }),
        n
      );
    })(Ec);
    (_c.className = "LSTMCell"), e.serialization.registerClass(_c);
    var Lc = (function (t) {
      function n(e) {
        return (
          0 === e.implementation &&
            console.warn(
              "`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call.",
            ),
          (e.cell = new _c(e)),
          t.call(this, e) || this
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (n, r) {
          var a = this;
          return e.tidy(function () {
            null != a.cell.dropoutMask &&
              (i.dispose(a.cell.dropoutMask), (a.cell.dropoutMask = null)),
              null != a.cell.recurrentDropoutMask &&
                (i.dispose(a.cell.recurrentDropoutMask),
                (a.cell.recurrentDropoutMask = null));
            var e = null == r ? null : r.mask,
              o = null == r ? null : r.training,
              s = null == r ? null : r.initialState;
            return t.prototype.call.call(a, n, {
              mask: e,
              training: o,
              initialState: s,
            });
          });
        }),
        (n.fromConfig = function (t, e) {
          return 0 === e.implmentation && (e.implementation = 1), new t(e);
        }),
        n
      );
    })(zc);
    (Lc.className = "LSTM"), e.serialization.registerClass(Lc);
    var Rc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.cells = e.cells), n;
      }
      return (
        o(n, t),
        Object.defineProperty(n.prototype, "stateSize", {
          get: function () {
            var t,
              e,
              n = [];
            try {
              for (
                var r = l(this.cells.slice().reverse()), i = r.next();
                !i.done;
                i = r.next()
              ) {
                var a = i.value;
                Array.isArray(a.stateSize)
                  ? n.push.apply(n, h([], c(a.stateSize), !1))
                  : n.push(a.stateSize);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = r.return) && e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            return n;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e,
              i,
              a,
              o,
              s = t.slice(1),
              u = [];
            try {
              for (
                var p = l(r.cells.slice().reverse()), f = p.next();
                !f.done;
                f = p.next()
              ) {
                var d = f.value;
                Array.isArray(d.stateSize)
                  ? u.push(s.splice(0, d.stateSize.length))
                  : u.push(s.splice(0, 1));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                f && !f.done && (i = p.return) && i.call(p);
              } finally {
                if (e) throw e.error;
              }
            }
            u.reverse();
            for (var g, v = [], y = 0; y < r.cells.length; ++y) {
              d = r.cells[y];
              (s = u[y]),
                (g = 0 === y ? [t[0]].concat(s) : [g[0]].concat(s)),
                (g = d.call(g, n)),
                v.push(g.slice(1));
            }
            s = [];
            try {
              for (
                var m = l(v.slice().reverse()), b = m.next();
                !b.done;
                b = m.next()
              ) {
                var w = b.value;
                s.push.apply(s, h([], c(w), !1));
              }
            } catch (t) {
              a = { error: t };
            } finally {
              try {
                b && !b.done && (o = m.return) && o.call(m);
              } finally {
                if (a) throw a.error;
              }
            }
            return [g[0]].concat(s);
          });
        }),
        (n.prototype.build = function (t) {
          var e;
          Kt(t) && (t = t[0]),
            this.cells.forEach(function (n, r) {
              X("RNNCell_".concat(r), function () {
                n.build(t),
                  (e = Array.isArray(n.stateSize) ? n.stateSize[0] : n.stateSize),
                  (t = [t[0], e]);
              });
            }),
            (this.built = !0);
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = {
              cells: this.cells.map(function (t) {
                return { className: t.getClassName(), config: t.getConfig() };
              }),
            };
          return Object.assign(Object.assign({}, e), n);
        }),
        (n.fromConfig = function (t, e, n) {
          var r, i;
          void 0 === n && (n = {});
          var a = [];
          try {
            for (var o = l(e.cells), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              a.push(zu(u, n));
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              s && !s.done && (i = o.return) && i.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return new t({ cells: a });
        }),
        Object.defineProperty(n.prototype, "trainableWeights", {
          get: function () {
            var t, e;
            if (!this.trainable) return [];
            var n = [];
            try {
              for (var r = l(this.cells), i = r.next(); !i.done; i = r.next()) {
                var a = i.value;
                n.push.apply(n, h([], c(a.trainableWeights), !1));
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = r.return) && e.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            return n;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "nonTrainableWeights", {
          get: function () {
            var t,
              e,
              n,
              r,
              i = [];
            try {
              for (var a = l(this.cells), o = a.next(); !o.done; o = a.next()) {
                var s = o.value;
                i.push.apply(i, h([], c(s.nonTrainableWeights), !1));
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (e = a.return) && e.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
            if (!this.trainable) {
              var u = [];
              try {
                for (var p = l(this.cells), f = p.next(); !f.done; f = p.next()) {
                  s = f.value;
                  u.push.apply(u, h([], c(s.trainableWeights), !1));
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  f && !f.done && (r = p.return) && r.call(p);
                } finally {
                  if (n) throw n.error;
                }
              }
              return u.concat(i);
            }
            return i;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.getWeights = function () {
          var t,
            e,
            n = [];
          try {
            for (var r = l(this.cells), i = r.next(); !i.done; i = r.next()) {
              var a = i.value;
              n.push.apply(n, h([], c(a.weights), !1));
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              i && !i.done && (e = r.return) && e.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
          return Qt(n);
        }),
        (n.prototype.setWeights = function (t) {
          var e,
            n,
            r = [];
          try {
            for (var i = l(this.cells), a = i.next(); !a.done; a = i.next())
              for (
                var o = a.value, s = o.weights.length, u = t.splice(s), c = 0;
                c < o.weights.length;
                ++c
              )
                r.push([o.weights[c], u[c]]);
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = i.return) && n.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          te(r);
        }),
        n
      );
    })(Ec);
    function Oc(t) {
      var e = t.ones,
        n = t.rate,
        r = t.training,
        a = void 0 !== r && r,
        o = t.count,
        s = void 0 === o ? 1 : o,
        u = t.dropoutFunc,
        l = function () {
          return null != u ? u(e(), n) : xt(e(), n);
        },
        c = function () {
          return St(l, e, a);
        };
      return !s || s <= 1
        ? i.keep(c().clone())
        : Array(s)
            .fill(void 0)
            .map(c)
            .map(function (t) {
              return i.keep(t.clone());
            });
    }
    (Rc.className = "StackedRNNCells"), e.serialization.registerClass(Rc);
    var Mc = function (t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]]);
      }
      return n;
    };
    !(function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      o(e, t);
    })(Ec);
    var Bc = (function (t) {
      function n(e) {
        var n = this;
        if (e.unroll)
          throw new g("Unrolling is not possible with convolutional RNNs.");
        if (Array.isArray(e.cell))
          throw new g(
            "It is not possible at the moment to stack convolutional cells.",
          );
        return (
          ((n = t.call(this, e) || this).inputSpec = [new ee({ ndim: 5 })]), n
        );
      }
      return (
        o(n, t),
        (n.prototype.call = function (e, n) {
          var r = this;
          return i.tidy(function () {
            if (
              (null != r.cell.dropoutMask &&
                (i.dispose(r.cell.dropoutMask), (r.cell.dropoutMask = null)),
              null != r.cell.recurrentDropoutMask &&
                (i.dispose(r.cell.recurrentDropoutMask),
                (r.cell.recurrentDropoutMask = null)),
              n && n.constants)
            )
              throw new d("ConvRNN2D cell does not support constants");
            var a = null == n ? null : n.mask,
              o = null == n ? null : n.training,
              s = null == n ? null : n.initialState;
            return t.prototype.call.call(r, e, {
              mask: a,
              training: o,
              initialState: s,
            });
          });
        }),
        (n.prototype.computeOutputShape = function (t) {
          var e = this.computeSingleOutputShape(t);
          return (
            this.returnSequences || (e = h([e[0]], c(e.slice(2)), !1)),
            this.returnState &&
              (e = h([e], c(Array(2).fill(h([t[0]], c(e.slice(-3)), !1))), !1)),
            e
          );
        }),
        (n.prototype.getInitialState = function (t) {
          var e = this;
          return i.tidy(function () {
            var n = e.cell.stateSize,
              r = t.shape,
              a = e.computeSingleOutputShape(r),
              o = h([a[0]], c(a.slice(2)), !1),
              s = i.zeros(o);
            return Array.isArray(n) ? Array(n.length).fill(s) : [s];
          });
        }),
        (n.prototype.resetStates = function (t, n) {
          var r = this;
          void 0 === n && (n = !1),
            i.tidy(function () {
              if (!r.stateful)
                throw new p(
                  "Cannot call resetStates() on an RNN Layer that is not stateful.",
                );
              var a = r.inputSpec[0].shape,
                o = r.computeSingleOutputShape(a),
                s = h([o[0]], c(o.slice(2)), !1);
              if (null == a[0])
                throw new d(
                  "If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.",
                );
              if (null == r.getStates())
                Array.isArray(r.cell.stateSize)
                  ? (r.states_ = r.cell.stateSize.map(function () {
                      return i.zeros(s);
                    }))
                  : (r.states_ = [i.zeros(s)]);
              else if (null == t)
                i.dispose(r.states_),
                  null != r.keptStates &&
                    (i.dispose(r.keptStates), (r.keptStates = [])),
                  Array.isArray(r.cell.stateSize)
                    ? (r.states_ = r.cell.stateSize.map(function () {
                        return i.zeros(s);
                      }))
                    : (r.states_[0] = i.zeros(s));
              else {
                if (
                  (Array.isArray(t) || (t = [t]), t.length !== r.states_.length)
                )
                  throw new d(
                    "Layer "
                      .concat(r.name, " expects ")
                      .concat(r.states_.length, " state(s), ") +
                      "but it received ".concat(
                        t.length,
                        " state value(s). Input ",
                      ) +
                      "received: ".concat(t),
                  );
                n ? r.keptStates.push(r.states_.slice()) : i.dispose(r.states_);
                for (var u = 0; u < r.states_.length; ++u) {
                  var l = t[u],
                    f = s;
                  if (!e.util.arraysEqual(l.shape, f))
                    throw new d(
                      "State "
                        .concat(u, " is incompatible with layer ")
                        .concat(r.name, ": ") +
                        "expected shape="
                          .concat(f, ", received shape=")
                          .concat(l.shape),
                    );
                  r.states_[u] = l;
                }
              }
              r.states_ = r.states_.map(function (t) {
                return i.keep(t.clone());
              });
            });
        }),
        (n.prototype.computeSingleOutputShape = function (t) {
          var e = this.cell,
            n = e.dataFormat,
            r = e.filters,
            i = e.kernelSize,
            a = e.padding,
            o = e.strides,
            s = e.dilationRate,
            u = "channelsFirst" === n,
            l = t[u ? 3 : 2],
            p = t[u ? 4 : 3],
            f = uc(l, i[0], a, o[0], s[0]),
            d = uc(p, i[1], a, o[1], s[1]);
          return h(h([], c(t.slice(0, 2)), !1), c(u ? [r, f, d] : [f, d, r]), !1);
        }),
        n
      );
    })(zc);
    Bc.className = "ConvRNN2D";
    var Pc = (function (t) {
      function e(e) {
        var n = this,
          r = e.filters,
          i = e.kernelSize,
          a = e.strides,
          o = e.padding,
          s = e.dataFormat,
          u = e.dilationRate;
        return (
          ((n =
            t.call(this, Object.assign(Object.assign({}, e), { units: r })) ||
            this).filters = r),
          L(n.filters, "filters"),
          (n.kernelSize = sc(i, 2, "kernelSize")),
          n.kernelSize.forEach(function (t) {
            return L(t, "kernelSize");
          }),
          (n.strides = sc(a || 1, 2, "strides")),
          n.strides.forEach(function (t) {
            return L(t, "strides");
          }),
          (n.padding = o || "valid"),
          J(n.padding),
          (n.dataFormat = s || "channelsLast"),
          H(n.dataFormat),
          (n.dilationRate = sc(u || 1, 2, "dilationRate")),
          n.dilationRate.forEach(function (t) {
            return L(t, "dilationRate");
          }),
          n
        );
      }
      return (
        o(e, t),
        (e.prototype.build = function (t) {
          var e;
          t = Zt(t);
          var n = "channelsFirst" === this.dataFormat ? 1 : t.length - 1;
          if (null == t[n])
            throw new d(
              "The channel dimension of the input should be defined. " +
                "Found ".concat(t[n]),
            );
          var r = t[n],
            a = this.kernelSize.concat([r, 4 * this.filters]);
          this.kernel = this.addWeight(
            "kernel",
            a,
            null,
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint,
          );
          var s = this.kernelSize.concat([this.filters, 4 * this.filters]);
          if (
            ((this.recurrentKernel = this.addWeight(
              "recurrent_kernel",
              s,
              null,
              this.recurrentInitializer,
              this.recurrentRegularizer,
              !0,
              this.recurrentConstraint,
            )),
            this.useBias)
          ) {
            var u = void 0;
            if (this.unitForgetBias) {
              var l = this.biasInitializer,
                c = this.filters;
              u = new ((e = (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  o(e, t),
                  (e.prototype.apply = function (t, e) {
                    return ft([l.apply([c]), i.ones([c]), l.apply([2 * c])]);
                  }),
                  e
                );
              })(At)),
              (e.className = "CustomInit"),
              e)();
            } else u = this.biasInitializer;
            this.bias = this.addWeight(
              "bias",
              [4 * this.filters],
              null,
              u,
              this.biasRegularizer,
              !0,
              this.biasConstraint,
            );
          }
          this.built = !0;
        }),
        (e.prototype.call = function (t, e) {
          var n = this;
          return i.tidy(function () {
            if (3 !== t.length)
              throw new d(
                "ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got " +
                  "".concat(t.length, "."),
              );
            var r = e.training || !1,
              a = t[0],
              o = t[1],
              s = t[2];
            0 < n.dropout &&
              n.dropout < 1 &&
              null == n.dropoutMask &&
              (n.dropoutMask = Oc({
                ones: function () {
                  return i.onesLike(a);
                },
                rate: n.dropout,
                training: r,
                count: 4,
                dropoutFunc: n.dropoutFunc,
              }));
            var u = n.dropoutMask,
              l = function (t, e, n) {
                return e && e[n] ? i.mul(e[n], t) : t;
              },
              h = l(a, u, 0),
              p = l(a, u, 1),
              f = l(a, u, 2),
              g = l(a, u, 3);
            0 < n.recurrentDropout &&
              n.recurrentDropout < 1 &&
              null == n.recurrentDropoutMask &&
              (n.recurrentDropoutMask = Oc({
                ones: function () {
                  return i.onesLike(o);
                },
                rate: n.recurrentDropout,
                training: r,
                count: 4,
                dropoutFunc: n.dropoutFunc,
              }));
            var v = n.recurrentDropoutMask,
              y = l(o, v, 0),
              m = l(o, v, 1),
              b = l(o, v, 2),
              w = l(o, v, 3),
              k = c(i.split(n.kernel.read(), 4, 3), 4),
              x = k[0],
              S = k[1],
              N = k[2],
              I = k[3],
              A = c(
                n.useBias ? i.split(n.bias.read(), 4) : [null, null, null, null],
                4,
              ),
              z = A[0],
              E = A[1],
              T = A[2],
              C = A[3];
            (h = n.inputConv(h, x, z, n.padding)),
              (p = n.inputConv(p, S, E, n.padding)),
              (f = n.inputConv(f, N, T, n.padding)),
              (g = n.inputConv(g, I, C, n.padding));
            var F = c(i.split(n.recurrentKernel.read(), 4, 3), 4),
              D = F[0],
              _ = F[1],
              L = F[2],
              R = F[3];
            (y = n.recurrentConv(y, D)),
              (m = n.recurrentConv(m, _)),
              (b = n.recurrentConv(b, L)),
              (w = n.recurrentConv(w, R));
            var O = n.recurrentActivation.apply(i.add(h, y)),
              M = n.recurrentActivation.apply(i.add(p, m)),
              B = i.add(i.mul(M, s), i.mul(O, n.activation.apply(i.add(f, b)))),
              P = i.mul(
                n.recurrentActivation.apply(i.add(g, w)),
                n.activation.apply(B),
              );
            return [P, P, B];
          });
        }),
        (e.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this);
          e.units;
          var n = Mc(e, ["units"]),
            r = {
              filters: this.filters,
              kernelSize: this.kernelSize,
              padding: this.padding,
              dataFormat: this.dataFormat,
              dilationRate: this.dilationRate,
              strides: this.strides,
            };
          return Object.assign(Object.assign({}, n), r);
        }),
        (e.prototype.inputConv = function (t, e, n, r) {
          var a = i.conv2d(
            t,
            e,
            this.strides,
            r || "valid",
            "channelsFirst" === this.dataFormat ? "NCHW" : "NHWC",
            this.dilationRate,
          );
          return n ? kt(a, n, this.dataFormat) : a;
        }),
        (e.prototype.recurrentConv = function (t, e) {
          return i.conv2d(
            t,
            e,
            1,
            "same",
            "channelsFirst" === this.dataFormat ? "NCHW" : "NHWC",
          );
        }),
        e
      );
    })(_c);
    (Pc.className = "ConvLSTM2DCell"), i.serialization.registerClass(Pc);
    var jc = (function (t) {
      function e(e) {
        var n = new Pc(e);
        return (
          t.call(this, Object.assign(Object.assign({}, e), { cell: n })) || this
        );
      }
      return (
        o(e, t),
        (e.fromConfig = function (t, e) {
          return new t(e);
        }),
        e
      );
    })(Bc);
    (jc.className = "ConvLSTM2D"), i.serialization.registerClass(jc);
    var Uc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.rate = Math.max(Math.min(e.rate, 1), 0)),
          (n.noiseShape = e.noiseShape),
          (n.seed = e.seed),
          (n.supportsMasking = !0),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.getNoiseShape = function (t) {
          if (null == this.noiseShape) return this.noiseShape;
          for (var e = t.shape, n = [], r = 0; r < this.noiseShape.length; ++r)
            n.push(null == this.noiseShape[r] ? e[r] : this.noiseShape[r]);
          return n;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var e = Jt(t);
            if (0 < r.rate && r.rate < 1) {
              var i = null != n.training && n.training,
                a = r.getNoiseShape(e);
              return St(
                function () {
                  return xt(e, r.rate, a, r.seed);
                },
                function () {
                  return e;
                },
                i,
              );
            }
            return t;
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {
              rate: this.rate,
              noiseShape: this.noiseShape,
              seed: this.seed,
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        (n.prototype.dispose = function () {
          return t.prototype.dispose.call(this);
        }),
        n
      );
    })(oe);
    (Uc.className = "Dropout"), e.serialization.registerClass(Uc);
    var Wc = (function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return (n.inputSpec = [{ ndim: 3 }]), n;
      }
      return (
        o(e, t),
        (e.prototype.getNoiseShape = function (t) {
          var e = t.shape;
          return [e[0], 1, e[2]];
        }),
        e
      );
    })(Uc);
    (Wc.className = "SpatialDropout1D"), e.serialization.registerClass(Wc);
    var Vc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        if (
          ((n.activation = null),
          (n.useBias = !0),
          (n.kernel = null),
          (n.bias = null),
          (n.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
          (n.DEFAULT_BIAS_INITIALIZER = "zeros"),
          null == e.batchInputShape && null == e.inputShape && null != e.inputDim)
        ) {
          var r = null;
          null != e.batchSize && (r = e.batchSize),
            (n.batchInputShape = [r, e.inputDim]);
        }
        return (
          (n.units = e.units),
          L(n.units, "units"),
          (n.activation = Hl(e.activation)),
          null != e.useBias && (n.useBias = e.useBias),
          (n.kernelInitializer = Gt(
            e.kernelInitializer || n.DEFAULT_KERNEL_INITIALIZER,
          )),
          (n.biasInitializer = Gt(
            e.biasInitializer || n.DEFAULT_BIAS_INITIALIZER,
          )),
          (n.kernelConstraint = fu(e.kernelConstraint)),
          (n.biasConstraint = fu(e.biasConstraint)),
          (n.kernelRegularizer = tc(e.kernelRegularizer)),
          (n.biasRegularizer = tc(e.biasRegularizer)),
          (n.activityRegularizer = tc(e.activityRegularizer)),
          (n.supportsMasking = !0),
          (n.inputSpec = [{ minNDim: 2 }]),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e,
            n = (t = Zt(t))[t.length - 1];
          null == this.kernel &&
            ((this.kernel = this.addWeight(
              "kernel",
              [n, this.units],
              null,
              this.kernelInitializer,
              this.kernelRegularizer,
              !0,
              this.kernelConstraint,
            )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.units],
                null,
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint,
              ))),
            (this.inputSpec = [{ minNDim: 2, axes: ((e = {}), (e[-1] = n), e) }]),
            (this.built = !0);
        }),
        (n.prototype.computeOutputShape = function (t) {
          var e = (t = Zt(t)).slice();
          return (e[e.length - 1] = this.units), e;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var e,
              i = Jt(t),
              a = O(r.activation.getClassName());
            return (
              null != a
                ? (e = yt(i, r.kernel.read(), a, r.bias ? r.bias.read() : null))
                : ((e = yt(i, r.kernel.read())),
                  null != r.bias && (e = kt(e, r.bias.read())),
                  null != r.activation && (e = r.activation.apply(e))),
              e
            );
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {
              units: this.units,
              activation: Gl(this.activation),
              useBias: this.useBias,
              kernelInitializer: qt(this.kernelInitializer),
              biasInitializer: qt(this.biasInitializer),
              kernelRegularizer: $l(this.kernelRegularizer),
              biasRegularizer: $l(this.biasRegularizer),
              activityRegularizer: $l(this.activityRegularizer),
              kernelConstraint: hu(this.kernelConstraint),
              biasConstraint: hu(this.biasConstraint),
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Vc.className = "Dense"), e.serialization.registerClass(Vc);
    var qc = (function (t) {
      function n(e) {
        var n = this;
        return (
          (e = e || {}),
          ((n = t.call(this, e) || this).inputSpec = [{ minNDim: 3 }]),
          (n.dataFormat = e.dataFormat),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          var e, n;
          t = Zt(t);
          try {
            for (var r = l(t.slice(1)), i = r.next(); !i.done; i = r.next()) {
              if (null == i.value)
                throw new d(
                  'The shape of the input to "Flatten" is not fully defined ' +
                    "(got ".concat(
                      t.slice(1),
                      "). Make sure to pass a complete ",
                    ) +
                    '"input_shape" or "batch_input_shape" argument to the first layer in your model.',
                );
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              i && !i.done && (n = r.return) && n.call(r);
            } finally {
              if (e) throw e.error;
            }
          }
          return [t[0], rt(t, 1)];
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var a = Jt(t);
            if ("channelsFirst" === r.dataFormat && a.rank > 1) {
              for (var o = [0], s = 2; s < a.rank; ++s) o.push(s);
              o.push(1), (a = e.transpose(a, o));
            }
            return (function (t) {
              if (t.rank <= 1)
                throw new d(
                  "batchFlatten requires a minimum rank of 2. Got rank: ".concat(
                    t.rank,
                    ".",
                  ),
                );
              var e = [t.shape[0], rt(t.shape, 1)];
              return i.reshape(t, e);
            })(a);
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {};
          null != this.dataFormat && (e.dataFormat = this.dataFormat);
          var n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (qc.className = "Flatten"), e.serialization.registerClass(qc);
    var Gc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.supportsMasking = !0), (n.activation = Hl(e.activation)), n;
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var e = Jt(t);
            return r.activation.apply(e);
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { activation: Gl(this.activation) },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Gc.className = "Activation"), e.serialization.registerClass(Gc);
    var Kc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.n = e.n), (n.inputSpec = [{ ndim: 2 }]), n;
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          return [t[0], this.n, t[1]];
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            return (
              (t = Jt(t)),
              (n = t),
              (i = r.n),
              e.tidy(function () {
                if (2 !== n.shape.length)
                  throw new d(
                    "repeat() expects a rank-2 tensor, but received a " +
                      "rank-".concat(n.shape.length, " tensor."),
                  );
                return gt(lt(n, 1), [1, i, 1]);
              })
            );
            var n, i;
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { n: this.n },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Kc.className = "RepeatVector"), e.serialization.registerClass(Kc);
    var Hc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        n.targetShape = e.targetShape;
        for (var r = 0; r < n.targetShape.length; ++r)
          n.isUnknown(n.targetShape[r]) && (n.targetShape[r] = null);
        return n;
      }
      return (
        o(n, t),
        (n.prototype.isUnknown = function (t) {
          return t < 0 || null == t;
        }),
        (n.prototype.fixUnknownDimension = function (t, e) {
          for (
            var n = "Total size of new array must be unchanged.",
              r = e.slice(),
              i = 1,
              a = null,
              o = 0;
            o < r.length;
            ++o
          ) {
            var s = r[o];
            if (this.isUnknown(s)) {
              if (null !== a)
                throw new d("Can only specifiy one unknown dimension.");
              a = o;
            } else i *= s;
          }
          var u = rt(t);
          if (null !== a) {
            if (0 === i || u % i != 0) throw new d(n);
            r[a] = u / i;
          } else if (u !== i) throw new d(n);
          return r;
        }),
        (n.prototype.computeOutputShape = function (t) {
          for (var e = !1, n = 0; n < t.length; ++n)
            if (this.isUnknown(t[n])) {
              e = !0;
              break;
            }
          return e
            ? t.slice(0, 1).concat(this.targetShape)
            : t
                .slice(0, 1)
                .concat(this.fixUnknownDimension(t.slice(1), this.targetShape));
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var i = Jt(t),
              a = i.shape,
              o = a
                .slice(0, 1)
                .concat(r.fixUnknownDimension(a.slice(1), r.targetShape));
            return e.reshape(i, o);
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { targetShape: this.targetShape },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Hc.className = "Reshape"), e.serialization.registerClass(Hc);
    var Jc = (function (t) {
      function n(n) {
        var r = t.call(this, n) || this;
        if (null == n.dims)
          throw new Error(
            "Required configuration field `dims` is missing during Permute constructor call.",
          );
        if (!Array.isArray(n.dims))
          throw new Error(
            "Permute constructor requires `dims` to be an Array, but received " +
              "".concat(n.dims, " instead."),
          );
        var i = ot(1, n.dims.length + 1);
        if (!e.util.arraysEqual(n.dims.slice().sort(), i))
          throw new Error(
            "Invalid permutation `dims`: " +
              JSON.stringify(n.dims) +
              " `dims` must contain consecutive integers starting from 1.",
          );
        return (
          (r.dims = n.dims),
          (r.dimsIncludingBatch = [0].concat(r.dims)),
          (r.inputSpec = [new ee({ ndim: r.dims.length + 1 })]),
          r
        );
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          var e = (t = Zt(t)).slice();
          return (
            this.dims.forEach(function (n, r) {
              e[r + 1] = t[n];
            }),
            e
          );
        }),
        (n.prototype.call = function (t, n) {
          return e.transpose(Jt(t), this.dimsIncludingBatch);
        }),
        (n.prototype.getConfig = function () {
          var e = { dims: this.dims },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Jc.className = "Permute"), e.serialization.registerClass(Jc);
    var Zc = (function (t) {
      function n(e) {
        var n = t.call(this, null == e ? {} : e) || this;
        return (
          (n.supportsMasking = !0),
          (n.maskValue = null != e ? (null == e.maskValue ? 0 : e.maskValue) : 0),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = { maskValue: this.maskValue };
          return Object.assign(n, e), n;
        }),
        (n.prototype.computeMask = function (t, n) {
          var r = Jt(t);
          return e.any(e.notEqual(r, this.maskValue), -1);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var i = Jt(t),
              a = e.any(e.notEqual(i, r.maskValue), -1, !0);
            return e.mul(i, e.cast(a, i.dtype));
          });
        }),
        n
      );
    })(oe);
    (Zc.className = "Masking"), e.serialization.registerClass(Zc);
    var Yc = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        if (
          ((n.embeddings = null),
          (n.DEFAULT_EMBEDDINGS_INITIALIZER = "randomUniform"),
          null == e.batchInputShape && null == e.inputShape)
        ) {
          var r = null;
          null != e.batchSize && (r = e.batchSize),
            null == e.inputLength
              ? (n.batchInputShape = [r, null])
              : (n.batchInputShape = [r].concat(x(e.inputLength)));
        }
        return (
          (n.inputDim = e.inputDim),
          L(n.inputDim, "inputDim"),
          (n.outputDim = e.outputDim),
          L(n.outputDim, "outputDim"),
          (n.embeddingsInitializer = Gt(
            e.embeddingsInitializer || n.DEFAULT_EMBEDDINGS_INITIALIZER,
          )),
          (n.embeddingsRegularizer = tc(e.embeddingsRegularizer)),
          (n.activityRegularizer = tc(e.activityRegularizer)),
          (n.embeddingsConstraint = fu(e.embeddingsConstraint)),
          (n.maskZero = e.maskZero),
          (n.supportsMasking = e.maskZero),
          (n.inputLength = e.inputLength),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          (this.embeddings = this.addWeight(
            "embeddings",
            [this.inputDim, this.outputDim],
            this.dtype,
            this.embeddingsInitializer,
            this.embeddingsRegularizer,
            !0,
            this.embeddingsConstraint,
          )),
            (this.built = !0);
        }),
        (n.prototype.warnOnIncompatibleInputShape = function (t) {}),
        (n.prototype.computeMask = function (t, n) {
          var r = this;
          return e.tidy(function () {
            return r.maskZero
              ? ((t = Jt(t)), e.notEqual(t, e.zerosLike(t)))
              : null;
          });
        }),
        (n.prototype.computeOutputShape = function (t) {
          if (((t = Zt(t)), null == this.inputLength))
            return h(h([], c(t), !1), [this.outputDim], !1);
          var e = x(this.inputLength);
          if (e.length !== t.length - 1)
            throw new d(
              '"inputLength" is '.concat(this.inputLength, ", but received ") +
                "input shape has shape ".concat(t),
            );
          for (var n = 0, r = 0; r < e.length; ++r) {
            var i = e[r],
              a = t[r + 1];
            if (null != i && null != a && i !== a)
              throw new d(
                '"inputLength" is '.concat(this.inputLength, ", but received ") +
                  "input shape has shape ".concat(t),
              );
            null == i && (e[n] = a), n++;
          }
          return h(h([t[0]], c(e), !1), [this.outputDim], !1);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var i = Jt(t);
            "int32" !== i.dtype && (i = ut(i, "int32"));
            var a = mt(r.embeddings.read(), e.reshape(i, [i.size]));
            return e.reshape(a, Zt(r.computeOutputShape(i.shape)));
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {
              inputDim: this.inputDim,
              outputDim: this.outputDim,
              embeddingsInitializer: qt(this.embeddingsInitializer),
              embeddingsRegularizer: $l(this.embeddingsRegularizer),
              activityRegularizer: $l(this.activityRegularizer),
              embeddingsConstraint: hu(this.embeddingsConstraint),
              maskZero: this.maskZero,
              inputLength: this.inputLength,
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (Yc.className = "Embedding"), e.serialization.registerClass(Yc);
    var Xc = (function (t) {
        function n(e) {
          var n = t.call(this, e || {}) || this;
          return (n.supportsMasking = !0), n;
        }
        return (
          o(n, t),
          (n.prototype.mergeFunction = function (t) {
            throw new g();
          }),
          (n.prototype.computeElementwiseOpOutputShape = function (t, e) {
            if (null == t || null == e) return null;
            if (t.length < e.length)
              return this.computeElementwiseOpOutputShape(e, t);
            if (0 === e.length) return t;
            for (
              var n = t.slice(0, t.length - e.length), r = 0;
              r < e.length;
              ++r
            ) {
              var i = t[t.length - e.length + r],
                a = e[r];
              if (null == i || null == a || i < 0 || a < 0) n.push(null);
              else if (1 === i) n.push(a);
              else if (1 === a) n.push(i);
              else {
                if (i !== a)
                  throw new d(
                    "Operands could not be broadcast together with shapes " +
                      JSON.stringify(t) +
                      " " +
                      JSON.stringify(e),
                  );
                n.push(i);
              }
            }
            return n;
          }),
          (n.prototype.build = function (t) {
            var e, n;
            if (
              (Array.isArray(t) && !Array.isArray(t[0]) && (t = [Zt(t)]),
              t.length < 2)
            )
              throw new d(
                "A merge layer should be called on an Array of at least 2 inputs." +
                  " Got ".concat(t.length, " input(s)."),
              );
            var r = [];
            try {
              for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
                null != (u = a.value) && null !== u[0] && r.push(u[0]);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                a && !a.done && (n = i.return) && n.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            if ((r = C(r)).length > 1)
              throw new d(
                "Can not merge tensors with different batch sizes. " +
                  "Got tensors with shapes: ".concat(JSON.stringify(t), "."),
              );
            for (
              var o = null == t[0] ? null : t[0].slice(1), s = 1;
              s < t.length;
              ++s
            ) {
              var u = null == t[s] ? null : t[s].slice(1);
              o = this.computeElementwiseOpOutputShape(o, u);
            }
            var c = t.map(function (t) {
              return t.length;
            });
            -1 === t.indexOf(null) && 1 === C(c).length
              ? (this.reshapeRequired = !1)
              : (this.reshapeRequired = !0);
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var e, n, a, o;
              if (r.reshapeRequired) {
                var s = [],
                  u = t.map(function (t) {
                    return t.rank;
                  });
                if (-1 === u.indexOf(null)) {
                  var c = at(u);
                  try {
                    for (var h = l(t), p = h.next(); !p.done; p = h.next()) {
                      for (var f = (m = p.value).rank, d = 0; d < c - f; ++d)
                        m = lt(m, 1);
                      s.push(m);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      p && !p.done && (n = h.return) && n.call(h);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  return r.mergeFunction(s);
                }
                var g = !1;
                try {
                  for (var v = l(t), y = v.next(); !y.done; y = v.next()) {
                    var m;
                    if (null == (f = (m = y.value).rank)) {
                      var b = m.shape,
                        w = b[0],
                        k = b.slice(1).concat([w]),
                        x = i.reshape(m, [w].concat(rt(b.slice(1))));
                      (x = i.transpose(x, [1, 0])),
                        (x = i.reshape(x, k)),
                        s.push(x),
                        (g = !0);
                    } else if (f > 1) {
                      var S = ot(1, f).concat([0]);
                      s.push(i.transpose(m, S)), (g = !0);
                    } else s.push(m);
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    y && !y.done && (o = v.return) && o.call(v);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                var N = r.mergeFunction(s),
                  I = N.rank;
                if (g)
                  if (null == I) {
                    var A = N.shape;
                    k = [(w = A[A.length - 1])].concat(A.slice(0, A.length - 1));
                    N = i.reshape(i.transpose(i.reshape(N, [-1, w]), [1, 0]), k);
                  } else if (I > 1) {
                    S = [I - 1].concat(ot(0, I - 1));
                    N = i.transpose(N, S);
                  }
                return N;
              }
              return r.mergeFunction(t);
            });
          }),
          (n.prototype.computeOutputShape = function (t) {
            var e, n, r;
            r = null == t[0] ? null : t[0].slice(1);
            for (var i = 1; i < t.length; ++i) {
              var a = null == t[i] ? null : t[i].slice(1);
              r = this.computeElementwiseOpOutputShape(r, a);
            }
            var o = [];
            try {
              for (var s = l(t), u = s.next(); !u.done; u = s.next()) {
                null != (a = u.value) && null !== a[0] && o.push(a[0]);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                u && !u.done && (n = s.return) && n.call(s);
              } finally {
                if (e) throw e.error;
              }
            }
            return (r = 1 === (o = C(o)).length ? o.concat(r) : [null].concat(r));
          }),
          (n.prototype.computeMask = function (t, e) {
            return i.tidy(function () {
              if (null == e) return null;
              if (!Array.isArray(e)) throw new d("`mask` should be an Array");
              if (!Array.isArray(t)) throw new d("`inputs` should be an Array");
              if (e.length !== t.length)
                throw new d(
                  "The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths " +
                    "(".concat(t.length, " vs ").concat(e.length, ")"),
                );
              if (
                e.every(function (t) {
                  return null == t;
                })
              )
                return null;
              for (
                var n = (e = e.map(function (t) {
                    return null == t ? t : i.expandDims(t, 0);
                  }))[0],
                  r = 1;
                r < e.length - 1;
                ++r
              )
                n = i.logicalAnd(n, e[r]);
              return n;
            });
          }),
          n
        );
      })(oe),
      $c = (function (t) {
        function n(e) {
          return t.call(this, e) || this;
        }
        return (
          o(n, t),
          (n.prototype.mergeFunction = function (t) {
            return e.tidy(function () {
              for (var e = t[0].clone(), n = 1; n < t.length; ++n)
                e = i.add(e, t[n]);
              return e;
            });
          }),
          n
        );
      })(Xc);
    ($c.className = "Add"), e.serialization.registerClass($c);
    var Qc = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        o(n, t),
        (n.prototype.mergeFunction = function (t) {
          return e.tidy(function () {
            for (var e = t[0].clone(), n = 1; n < t.length; ++n)
              e = i.mul(e, t[n]);
            return e;
          });
        }),
        n
      );
    })(Xc);
    (Qc.className = "Multiply"), e.serialization.registerClass(Qc);
    var th = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        o(n, t),
        (n.prototype.mergeFunction = function (t) {
          return e.tidy(function () {
            for (var e = t[0].clone(), n = 1; n < t.length; ++n)
              e = i.add(e, t[n]);
            return i.mul(1 / t.length, e);
          });
        }),
        n
      );
    })(Xc);
    (th.className = "Average"), e.serialization.registerClass(th);
    var eh = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        o(n, t),
        (n.prototype.mergeFunction = function (t) {
          return e.tidy(function () {
            for (var e = t[0], n = 1; n < t.length; ++n) e = i.maximum(e, t[n]);
            return e;
          });
        }),
        n
      );
    })(Xc);
    (eh.className = "Maximum"), e.serialization.registerClass(eh);
    var nh = (function (t) {
      function n(e) {
        return t.call(this, e) || this;
      }
      return (
        o(n, t),
        (n.prototype.mergeFunction = function (t) {
          return e.tidy(function () {
            for (var e = t[0], n = 1; n < t.length; ++n) e = i.minimum(e, t[n]);
            return e;
          });
        }),
        n
      );
    })(Xc);
    (nh.className = "Minimum"), e.serialization.registerClass(nh);
    var rh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.DEFAULT_AXIS = -1),
          null == e && (e = {}),
          (n.axis = null == e.axis ? n.DEFAULT_AXIS : e.axis),
          (n.supportsMasking = !0),
          (n.reshapeRequired = !1),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var n, r, i, a;
          if (!Array.isArray(t) || !Array.isArray(t[0]) || 1 === t.length)
            throw new d(
              "A `Concatenate` layer should be called on a list of at least 2 inputs",
            );
          var o = !0;
          try {
            for (var s = l(t), u = s.next(); !u.done; u = s.next()) {
              if (null != (y = u.value)) {
                o = !1;
                break;
              }
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              u && !u.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          if (!o) {
            for (var c = [], h = 0; h < t.length; ++h) {
              var p = t[h].slice();
              p.splice(this.axis, 1);
              var f = !1;
              try {
                for (
                  var g = ((i = void 0), l(c)), v = g.next();
                  !v.done;
                  v = g.next()
                ) {
                  var y = v.value;
                  if (e.util.arraysEqual(y, p)) {
                    f = !0;
                    break;
                  }
                }
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  v && !v.done && (a = g.return) && a.call(g);
                } finally {
                  if (i) throw i.error;
                }
              }
              f || c.push(p);
            }
            if (c.length > 1)
              throw new d(
                "A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: " +
                  JSON.stringify(t),
              );
          }
        }),
        (n.prototype.mergeFunction = function (t) {
          var n = this;
          return e.tidy(function () {
            return ft(t, n.axis);
          });
        }),
        (n.prototype.computeOutputShape = function (t) {
          var e, n;
          if (!Array.isArray(t) || !Array.isArray(t[0]))
            throw new d(
              "A `Concatenate` layer should be called on a list of inputs.",
            );
          var r = t,
            i = r[0].slice(),
            a = this.axis < 0 ? i.length + this.axis : this.axis;
          try {
            for (var o = l(r.slice(1)), s = o.next(); !s.done; s = o.next()) {
              var u = s.value;
              if (null == i[a] || null == u[a]) {
                i[a] = null;
                break;
              }
              i[a] += u[a];
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          return i;
        }),
        (n.prototype.computeMask = function (t, e) {
          var n = this;
          if (null == e) return null;
          if (!Array.isArray(e))
            throw new d("`mask` should be an array for Concatenate");
          if (!Array.isArray(t))
            throw new d("`inputs` should be an array for Concatenate");
          if (e.length !== t.length)
            throw new d(
              "Mismatch in the length of mask (".concat(e.length, ") ") +
                "and the legnth of inputs (".concat(t.length, ")"),
            );
          return i.tidy(function () {
            var r = !0;
            if (
              (e.forEach(function (t) {
                null == t || (r = !1);
              }),
              r)
            )
              return null;
            for (var a = [], o = 0; o < t.length; ++o)
              null == e[o]
                ? a.push(i.cast(i.onesLike(t[o]), "bool"))
                : e[o].rank < t[o].rank
                  ? a.push(i.expandDims(e[o], -1))
                  : a.push(e[o]);
            var s = i.concat(a, n.axis);
            return i.all(s, -1, !1);
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { axis: this.axis },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(Xc);
    function ih(t, e) {
      for (; t < 0; ) t += e;
      return t;
    }
    (rh.className = "Concatenate"), e.serialization.registerClass(rh);
    var ah = (function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return (
          (n.axes = e.axes),
          (n.normalize = null != e.normalize && e.normalize),
          (n.supportsMasking = !0),
          (n.reshapeRequired = !1),
          n
        );
      }
      return (
        o(e, t),
        (e.prototype.build = function (t) {
          i.util.assert(
            Array.isArray(t) &&
              2 === t.length &&
              Array.isArray(t[0]) &&
              Array.isArray(t[1]),
            function () {
              return "A `Dot` layer should be called on a list of exactly 2 inputs.";
            },
          );
          var e = t[0],
            n = t[1];
          if (e.length > 3 || n.length > 3)
            throw new g(
              "Dot layer does not support tensors of 4D or higher rank yet.",
            );
          var r = this.interpretAxes(e, n);
          if (e[r[0]] !== n[r[1]])
            throw new d(
              "Dimension incompatibility: " +
                "".concat(e[r[0]], " !== ").concat(n[r[1]]),
            );
        }),
        (e.prototype.mergeFunction = function (t) {
          if (2 !== t.length)
            throw new d(
              "A `Dot` layer must be called on exactly 2 inputs, " +
                "but received ".concat(t.length, " input(s)."),
            );
          var e,
            n = t[0],
            r = t[1];
          return (
            (e = Array.isArray(this.axes)
              ? this.axes.map(function (e, n) {
                  return ih(e, t[n].shape.length);
                })
              : [ih(this.axes, n.shape.length), ih(this.axes, r.shape.length)]),
            this.normalize && ((n = Eu(n, e[0])), (r = Eu(r, e[1]))),
            (function (t, e, n) {
              if (t.shape.length > 3 || e.shape.length > 3)
                throw new g(
                  "batchDot is not implemented for tensors of 4D or higher rank yet",
                );
              if (
                (i.util.assert(t.shape.length >= 2, function () {
                  return (
                    "batchDot requires the rank of x to be >= 2, " +
                    "but got ".concat(t.shape.length)
                  );
                }),
                i.util.assert(t.shape.length >= 2, function () {
                  return (
                    "batchDot requires the rank of y to be >= 2, " +
                    "but got ".concat(e.shape.length)
                  );
                }),
                "number" == typeof n && (n = [n, n]),
                "complex64" === t.dtype || "complex64" === e.dtype)
              )
                throw new g(
                  "batchDot is not implemented for complex64-type Tensors yet.",
                );
              var r = t.shape.length,
                a = e.shape.length;
              null == n && (n = [r - 1, a - 2]);
              var o = n;
              return i.tidy(function () {
                var n, s;
                if (r > a) {
                  n = r - a;
                  for (var u = [], l = 0; l < n; ++l) u.push(1);
                  e = i.reshape(e, e.shape.concat(u));
                } else if (a > r) {
                  for (n = a - r, u = [], l = 0; l < n; ++l) u.push(1);
                  t = i.reshape(t, t.shape.concat(u));
                } else n = 0;
                if (2 === t.shape.length && 2 === e.shape.length)
                  s =
                    o[0] === o[1]
                      ? i.sum(i.mul(t, e), o[0])
                      : i.sum(i.mul(i.transpose(t, [1, 0]), e), o[1]);
                else {
                  var c = o[0] !== t.shape.length - 1,
                    h = o[1] === e.shape.length - 1;
                  s = i.matMul(t, e, c, h);
                }
                if (n > 0) {
                  var p = void 0,
                    f = [];
                  for (l = p = r > a ? r + a - 3 : r - 1; l < p + n; ++l)
                    f.push(l);
                  s = i.squeeze(s, f);
                }
                return 1 === s.shape.length && (s = i.expandDims(s, 1)), s;
              });
            })(n, r, e)
          );
        }),
        (e.prototype.interpretAxes = function (t, e) {
          return Array.isArray(this.axes)
            ? this.axes
            : [ih(this.axes, t.length), ih(this.axes, e.length)];
        }),
        (e.prototype.computeOutputShape = function (t) {
          i.util.assert(
            Array.isArray(t) &&
              2 === t.length &&
              Array.isArray(t[0]) &&
              Array.isArray(t[1]),
            function () {
              return "A `Dot` layer should be called on a list of exactly 2 inputs.";
            },
          );
          var e = t[0].slice(),
            n = t[1].slice();
          if (e.length > 3 || n.length > 3)
            throw new g(
              "Dot layer does not support tensors of 4D or higher rank yet.",
            );
          var r = this.interpretAxes(e, n);
          e.splice(r[0], 1), n.splice(r[1], 1), n.splice(0, 1);
          var a = e.concat(n);
          return 1 === a.length && a.push(1), a;
        }),
        (e.prototype.computeMask = function (t, e) {
          return null;
        }),
        (e.prototype.getConfig = function () {
          var e = { axes: this.axes, normalize: this.normalize },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        e
      );
    })(Xc);
    (ah.className = "Dot"), e.serialization.registerClass(ah);
    var oh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.supportsMasking = !0), (n.stddev = e.stddev), n;
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = { stddev: this.stddev };
          return Object.assign(n, e), n;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var i = Jt(t);
            return St(
              function () {
                return e.add(vt(i.shape, 0, r.stddev), i);
              },
              function () {
                return i;
              },
              n.training || !1,
            );
          });
        }),
        n
      );
    })(oe);
    (oh.className = "GaussianNoise"), e.serialization.registerClass(oh);
    var sh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (n.supportsMasking = !0), (n.rate = e.rate), n;
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = { rate: this.rate };
          return Object.assign(n, e), n;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            r.invokeCallHook(t, n);
            var i = Jt(t);
            if (r.rate > 0 && r.rate < 1) {
              return St(
                function () {
                  var t = Math.sqrt(r.rate / (1 - r.rate));
                  return e.mul(i, vt(i.shape, 1, t));
                },
                function () {
                  return i;
                },
                n.training || !1,
              );
            }
            return i;
          });
        }),
        n
      );
    })(oe);
    (sh.className = "GaussianDropout"), e.serialization.registerClass(sh);
    var uh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.supportsMasking = !0),
          (n.rate = e.rate),
          (n.noiseShape = e.noiseShape),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype._getNoiseShape = function (t) {
          return this.noiseShape || Jt(t).shape;
        }),
        (n.prototype.computeOutputShape = function (t) {
          return t;
        }),
        (n.prototype.getConfig = function () {
          var e = t.prototype.getConfig.call(this),
            n = { rate: this.rate };
          return Object.assign(n, e), n;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            if (r.rate < 1 && r.rate > 0) {
              var i = r._getNoiseShape(t);
              return St(
                function () {
                  var n = Jt(t),
                    a = -1.7580993408473766,
                    o = e.greaterEqual(e.randomUniform(i), r.rate);
                  o = ut(o, "float32");
                  var s = Math.pow(
                      (1 - r.rate) * (1 + r.rate * Math.pow(a, 2)),
                      -0.5,
                    ),
                    u = -s * a * r.rate,
                    l = e.add(e.mul(n, o), e.mul(e.add(o, -1), a));
                  return e.add(e.mul(l, s), u);
                },
                function () {
                  return Jt(t);
                },
                n.training || !1,
              );
            }
            return t;
          });
        }),
        n
      );
    })(oe);
    function lh(t, e, n, r, a, o) {
      var s;
      if ((void 0 === o && (o = 0.001), 2 === t.rank))
        s = i.batchNorm2d(t, e, n, r, a, o);
      else if (3 === t.rank) s = i.batchNorm3d(t, e, n, r, a, o);
      else {
        if (4 !== t.rank)
          throw new g(
            "batchNormalization is not implemented for array of rank ".concat(
              t.rank,
              " ",
            ) + "yet",
          );
        s = i.batchNorm4d(t, e, n, r, a, o);
      }
      return s;
    }
    function ch(t, n, r, a, o) {
      return (
        void 0 === o && (o = 0.001),
        e.util.arraysEqual(a.slice().sort(), ot(0, t.rank - 1))
          ? (function (t, n, r, a, o) {
              return (
                void 0 === o && (o = 0.001),
                e.tidy(function () {
                  var e = i.moments(t, a),
                    s = e.mean,
                    u = e.variance;
                  return [lh(t, s, u, r, n, o), s, u];
                })
              );
            })(t, n, r, a, o)
          : (function (t, n, r, a, o) {
              return (
                void 0 === o && (o = 0.001),
                e.tidy(function () {
                  var s,
                    u,
                    c = i.moments(t, a),
                    h = c.mean,
                    p = c.variance,
                    f = [];
                  try {
                    for (
                      var d = l(ot(0, t.rank)), g = d.next();
                      !g.done;
                      g = d.next()
                    ) {
                      var v = g.value;
                      -1 !== a.indexOf(v) ? f.push(1) : f.push(t.shape[v]);
                    }
                  } catch (t) {
                    s = { error: t };
                  } finally {
                    try {
                      g && !g.done && (u = d.return) && u.call(d);
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                  var y = e.reshape(h, f),
                    m = e.reshape(p, f),
                    b = null == n ? null : e.reshape(n, f),
                    w = null == r ? null : e.reshape(r, f);
                  return [lh(t, y, m, w, b, o), h, p];
                })
              );
            })(t, n, r, a, o)
      );
    }
    (uh.className = "AlphaDropout"), e.serialization.registerClass(uh);
    var hh = (function (t) {
      function n(e) {
        var n = this;
        return (
          null == e && (e = {}),
          ((n = t.call(this, e) || this).supportsMasking = !0),
          (n.axis = null == e.axis ? -1 : e.axis),
          (n.momentum = null == e.momentum ? 0.99 : e.momentum),
          (n.epsilon = null == e.epsilon ? 0.001 : e.epsilon),
          (n.center = null == e.center || e.center),
          (n.scale = null == e.scale || e.scale),
          (n.betaInitializer = Gt(e.betaInitializer || "zeros")),
          (n.gammaInitializer = Gt(e.gammaInitializer || "ones")),
          (n.movingMeanInitializer = Gt(e.movingMeanInitializer || "zeros")),
          (n.movingVarianceInitializer = Gt(
            e.movingVarianceInitializer || "ones",
          )),
          (n.betaConstraint = fu(e.betaConstraint)),
          (n.gammaConstraint = fu(e.gammaConstraint)),
          (n.betaRegularizer = tc(e.betaRegularizer)),
          (n.gammaRegularizer = tc(e.gammaRegularizer)),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e;
          t = Zt(t);
          var n = this.axis >= 0 ? this.axis : this.axis + t.length,
            r = t[n];
          if (null == r)
            throw new d(
              "Axis ".concat(
                n,
                " of input tensor should have a defined dimension but ",
              ) +
                "the layer received an input with shape " +
                "".concat(JSON.stringify(t), "."),
            );
          this.inputSpec = [
            new ee({ ndim: t.length, axes: ((e = {}), (e[n] = r), e) }),
          ];
          var i = [r];
          this.scale &&
            (this.gamma = this.addWeight(
              "gamma",
              i,
              null,
              this.gammaInitializer,
              this.gammaRegularizer,
              !0,
              this.gammaConstraint,
            )),
            this.center &&
              (this.beta = this.addWeight(
                "beta",
                i,
                null,
                this.betaInitializer,
                this.betaRegularizer,
                !0,
                this.betaConstraint,
              )),
            (this.movingMean = this.addWeight(
              "moving_mean",
              i,
              null,
              this.movingMeanInitializer,
              null,
              !1,
            )),
            (this.movingVariance = this.addWeight(
              "moving_variance",
              i,
              null,
              this.movingVarianceInitializer,
              null,
              !1,
            )),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var a = null != n.training && n.training,
              o = Jt(t),
              s = o.shape,
              u = s.length,
              l = ot(0, u),
              h = r.axis >= 0 ? r.axis : r.axis + u;
            l.splice(h, 1);
            var p = m(1, u);
            p[h] = s[h];
            var f = l.slice();
            f.sort();
            var d = !e.util.arraysEqual(f, ot(0, u).slice(0, u - 1));
            if (!a)
              return (function () {
                if (d) {
                  var t = e.reshape(r.movingMean.read(), p),
                    n = e.reshape(r.movingVariance.read(), p),
                    i = r.center ? e.reshape(r.beta.read(), p) : null,
                    a = r.scale ? e.reshape(r.gamma.read(), p) : null;
                  return lh(o, t, n, i, a, r.epsilon);
                }
                return lh(
                  o,
                  r.movingMean.read(),
                  r.movingVariance.read(),
                  null == r.beta ? null : r.beta.read(),
                  null == r.gamma ? null : r.gamma.read(),
                  r.epsilon,
                );
              })();
            var g = c(ch(o, r.gamma.read(), r.beta.read(), l, r.epsilon), 3),
              v = g[0],
              y = g[1],
              b = g[2],
              w = function (t, e, n) {
                i.tidy(function () {
                  var r = 1 - n,
                    a = t.read(),
                    o = i.mul(i.sub(a, e), r);
                  t.write(i.sub(a, o));
                });
              };
            return (
              w(r.movingMean, y, r.momentum),
              w(r.movingVariance, b, r.momentum),
              v
            );
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {
              axis: this.axis,
              momentum: this.momentum,
              epsilon: this.epsilon,
              center: this.center,
              scale: this.scale,
              betaInitializer: qt(this.betaInitializer),
              gammaInitializer: qt(this.gammaInitializer),
              movingMeanInitializer: qt(this.movingMeanInitializer),
              movingVarianceInitializer: qt(this.movingVarianceInitializer),
              betaRegularizer: $l(this.betaRegularizer),
              gammaRegularizer: $l(this.gammaRegularizer),
              betaConstraint: hu(this.betaConstraint),
              gammaConstraint: hu(this.gammaConstraint),
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (hh.className = "BatchNormalization"), e.serialization.registerClass(hh);
    var ph = (function (t) {
      function n(e) {
        var n,
          r,
          i = this;
        if (
          (null == e && (e = {}),
          ((i = t.call(this, e) || this).axis = null == e.axis ? -1 : e.axis),
          "number" == typeof i.axis)
        ) {
          if (!Number.isInteger(i.axis))
            throw new Error(
              "Expected axis to be an integer, but received ".concat(i.axis),
            );
        } else {
          if (!Array.isArray(i.axis))
            throw new Error(
              "Expected axis to be an integer or an array of integers, " +
                "but received ".concat(JSON.stringify(i.axis)),
            );
          try {
            for (var a = l(i.axis), o = a.next(); !o.done; o = a.next()) {
              var s = o.value;
              if (!Number.isInteger(s))
                throw new Error(
                  "Expected axis to be an array of integers, " +
                    "but received ".concat(JSON.stringify(i.axis)),
                );
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              o && !o.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        return (
          (i.epsilon = null == e.epsilon ? 0.001 : e.epsilon),
          (i.center = null == e.center || e.center),
          (i.scale = null == e.scale || e.scale),
          (i.betaInitializer = Gt(e.betaInitializer || "zeros")),
          (i.gammaInitializer = Gt(e.gammaInitializer || "ones")),
          (i.betaRegularizer = tc(e.betaRegularizer)),
          (i.gammaRegularizer = tc(e.gammaRegularizer)),
          (i.supportsMasking = !0),
          i
        );
      }
      return (
        o(n, t),
        (n.prototype.build = function (t) {
          var e,
            n,
            r = (t = Zt(t)).length;
          "number" == typeof this.axis && (this.axis = [this.axis]);
          for (var i = 0; i < this.axis.length; ++i)
            this.axis[i] < 0 && (this.axis[i] += r);
          try {
            for (var a = l(this.axis), o = a.next(); !o.done; o = a.next()) {
              var s = o.value;
              if (s < 0 || s >= r) throw new Error("Invalid axis: ".concat(s));
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (n = a.return) && n.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
          if (this.axis.length !== C(this.axis).length)
            throw new Error("Found duplicate axes in: ".concat(this.axis));
          var u = this.axis.map(function (e) {
            return t[e];
          });
          this.scale
            ? (this.gamma = this.addWeight(
                "gamma",
                u,
                "float32",
                this.gammaInitializer,
                this.gammaRegularizer,
                true,
              ))
            : (this.gamma = null),
            this.center
              ? (this.beta = this.addWeight(
                  "beta",
                  u,
                  "float32",
                  this.betaInitializer,
                  this.betaRegularizer,
                  true,
                ))
              : (this.beta = null),
            (this.built = !0);
        }),
        (n.prototype.call = function (t, n) {
          var r = this,
            a = Jt(t),
            o = a.shape,
            s = o.length;
          return e.tidy(function () {
            var t,
              n,
              u = e.moments(a, r.axis, !0),
              c = u.mean,
              h = u.variance,
              p = m(1, s);
            try {
              for (var f = l(r.axis), d = f.next(); !d.done; d = f.next()) {
                var g = d.value;
                p[g] = o[g];
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                d && !d.done && (n = f.return) && n.call(f);
              } finally {
                if (t) throw t.error;
              }
            }
            for (
              var v = function (t) {
                  return null != t && t.shape.length !== s ? i.reshape(t, p) : t;
                },
                y = r.scale ? v(r.gamma.read()) : null,
                b = r.center ? v(r.beta.read()) : null,
                w = [],
                k = [],
                x = 0;
              x < s;
              ++x
            )
              -1 !== r.axis.indexOf(x)
                ? (w.push(o[x]), k.push(1))
                : (w.push(1), k.push(o[x]));
            return (
              (c = i.tile(c, w)),
              (h = i.tile(h, w)),
              null != y && (y = i.tile(y, k)),
              null != b && (b = i.tile(b, k)),
              lh(a, c, h, b, y, r.epsilon)
            );
          });
        }),
        (n.prototype.getConfig = function () {
          var e = {
              axis: this.axis,
              epsilon: this.epsilon,
              center: this.center,
              scale: this.scale,
              betaInitializer: qt(this.betaInitializer),
              gammaInitializer: qt(this.gammaInitializer),
              betaRegularizer: $l(this.betaRegularizer),
              gammaRegularizer: $l(this.gammaRegularizer),
            },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    (ph.className = "LayerNormalization"), e.serialization.registerClass(ph);
    var fh = (function (t) {
      function n(e) {
        var n = this;
        if (
          (null == e && (e = {}),
          ((n = t.call(this, e) || this).dataFormat =
            null == e.dataFormat ? "channelsLast" : e.dataFormat),
          null == e.padding)
        )
          n.padding = [
            [1, 1],
            [1, 1],
          ];
        else if ("number" == typeof e.padding)
          n.padding = [
            [e.padding, e.padding],
            [e.padding, e.padding],
          ];
        else {
          if (((e.padding = e.padding), 2 !== e.padding.length))
            throw new d(
              "ZeroPadding2D expects padding to be a length-2 array, but " +
                "received a length-".concat(e.padding.length, " array."),
            );
          var r = void 0,
            i = void 0;
          if ("number" == typeof e.padding[0])
            (r = [e.padding[0], e.padding[0]]),
              (i = [e.padding[1], e.padding[1]]);
          else {
            if (((e.padding = e.padding), 2 !== e.padding[0].length))
              throw new d(
                "ZeroPadding2D expects height padding to be a length-2 array, " +
                  "but received a length-".concat(e.padding[0].length, " array."),
              );
            if (((r = e.padding[0]), 2 !== e.padding[1].length))
              throw new d(
                "ZeroPadding2D expects width padding to be a length-2 array, " +
                  "but received a length-".concat(e.padding[1].length, " array."),
              );
            i = e.padding[1];
          }
          n.padding = [r, i];
        }
        return (n.inputSpec = [new ee({ ndim: 4 })]), n;
      }
      return (
        o(n, t),
        (n.prototype.computeOutputShape = function (t) {
          var e, n;
          return (
            (t = Zt(t)),
            "channelsFirst" === this.dataFormat
              ? ((e =
                  null != t[2] && t[2] >= 0
                    ? t[2] + this.padding[0][0] + this.padding[0][1]
                    : null),
                (n =
                  null != t[3] && t[3] >= 0
                    ? t[3] + this.padding[1][0] + this.padding[1][1]
                    : null),
                [t[0], t[1], e, n])
              : ((e =
                  null != t[1] && t[1] >= 0
                    ? t[1] + this.padding[0][0] + this.padding[0][1]
                    : null),
                (n =
                  null != t[2] && t[2] >= 0
                    ? t[2] + this.padding[1][0] + this.padding[1][1]
                    : null),
                [t[0], e, n, t[3]])
          );
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            return (
              (n = Jt(t)),
              (a = r.padding),
              (o = r.dataFormat),
              e.tidy(function () {
                if (4 !== n.rank)
                  throw new d(
                    "temporalPadding expects input tensor to be 4-D, but received a " +
                      "".concat(n.rank, "-D tensor."),
                  );
                if (
                  (null == a &&
                    (a = [
                      [1, 1],
                      [1, 1],
                    ]),
                  2 !== a.length || 2 !== a[0].length || 2 !== a[1].length)
                )
                  throw new d(
                    "spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.",
                  );
                if (
                  (null == o && (o = "channelsLast"),
                  "channelsLast" !== o && "channelsFirst" !== o)
                )
                  throw new d(
                    "Unknown data format: ".concat(o, ". ") +
                      "Supported data formats are 'channelsLast' and 'channelsFirst.",
                  );
                var t;
                return (
                  (t =
                    "channelsFirst" === o
                      ? [[0, 0], [0, 0], a[0], a[1]]
                      : [[0, 0], a[0], a[1], [0, 0]]),
                  i.pad(n, t)
                );
              })
            );
            var n, a, o;
          });
        }),
        (n.prototype.getConfig = function () {
          var e = { padding: this.padding, dataFormat: this.dataFormat },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        n
      );
    })(oe);
    function dh(t, n, r, a, o, s) {
      return e.tidy(function () {
        var e;
        H(o),
          Z(s),
          J(a),
          null == r && (r = [1, 1]),
          null == a && (a = "valid"),
          null == o && (o = "channelsLast"),
          null == s && (s = "max"),
          (t = cc(t, o));
        var u = "same" === a ? "same" : "valid";
        return (
          (e = "max" === s ? i.maxPool(t, n, r, u) : i.avgPool(t, n, r, u)),
          "channelsFirst" === o && (e = i.transpose(e, [0, 3, 1, 2])),
          e
        );
      });
    }
    function gh(t, n, r, a, o, s) {
      return e.tidy(function () {
        var e;
        H(o),
          Z(s),
          J(a),
          null == r && (r = [1, 1, 1]),
          null == a && (a = "valid"),
          null == o && (o = "channelsLast"),
          null == s && (s = "max"),
          (t = hc(t, o));
        var u = "same" === a ? "same" : "valid";
        return (
          (e = "max" === s ? i.maxPool3d(t, n, r, u) : i.avgPool3d(t, n, r, u)),
          "channelsFirst" === o && (e = i.transpose(e, [0, 4, 1, 2, 3])),
          e
        );
      });
    }
    (fh.className = "ZeroPadding2D"), e.serialization.registerClass(fh);
    var vh = (function (t) {
        function n(e) {
          var n = this;
          if (
            (null == e.poolSize && (e.poolSize = 2),
            (n = t.call(this, e) || this),
            "number" == typeof e.poolSize)
          )
            n.poolSize = [e.poolSize];
          else {
            if (
              !Array.isArray(e.poolSize) ||
              1 !== e.poolSize.length ||
              "number" != typeof e.poolSize[0]
            )
              throw new d(
                "poolSize for 1D convolutional layer must be a number or an Array of a single number, but received " +
                  "".concat(JSON.stringify(e.poolSize)),
              );
            n.poolSize = e.poolSize;
          }
          if ((L(n.poolSize, "poolSize"), null == e.strides))
            n.strides = n.poolSize;
          else if ("number" == typeof e.strides) n.strides = [e.strides];
          else {
            if (
              !Array.isArray(e.strides) ||
              1 !== e.strides.length ||
              "number" != typeof e.strides[0]
            )
              throw new d(
                "strides for 1D convolutional layer must be a number or an Array of a single number, but received " +
                  "".concat(JSON.stringify(e.strides)),
              );
            n.strides = e.strides;
          }
          return (
            L(n.strides, "strides"),
            (n.padding = null == e.padding ? "valid" : e.padding),
            J(n.padding),
            (n.inputSpec = [new ee({ ndim: 3 })]),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.computeOutputShape = function (t) {
            var e = uc(
              (t = Zt(t))[1],
              this.poolSize[0],
              this.padding,
              this.strides[0],
            );
            return [t[0], e, t[2]];
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              r.invokeCallHook(t, n), (t = lt(Jt(t), 2));
              var e = r.poolingFunction(
                Jt(t),
                [r.poolSize[0], 1],
                [r.strides[0], 1],
                r.padding,
                "channelsLast",
              );
              return i.squeeze(e, [2]);
            });
          }),
          (n.prototype.getConfig = function () {
            var e = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          n
        );
      })(oe),
      yh = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          o(e, t),
          (e.prototype.poolingFunction = function (t, e, n, r, i) {
            return H(i), J(r), dh(t, e, n, r, i, "max");
          }),
          e
        );
      })(vh);
    (yh.className = "MaxPooling1D"), e.serialization.registerClass(yh);
    var mh = (function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }
      return (
        o(e, t),
        (e.prototype.poolingFunction = function (t, e, n, r, i) {
          return H(i), J(r), dh(t, e, n, r, i, "avg");
        }),
        e
      );
    })(vh);
    (mh.className = "AveragePooling1D"), e.serialization.registerClass(mh);
    var bh = (function (t) {
        function n(e) {
          var n = this;
          if (
            (null == e.poolSize && (e.poolSize = [2, 2]),
            ((n = t.call(this, e) || this).poolSize = Array.isArray(e.poolSize)
              ? e.poolSize
              : [e.poolSize, e.poolSize]),
            null == e.strides)
          )
            n.strides = n.poolSize;
          else if (Array.isArray(e.strides)) {
            if (2 !== e.strides.length)
              throw new d(
                "If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length " +
                  "".concat(e.strides.length, "."),
              );
            n.strides = e.strides;
          } else n.strides = [e.strides, e.strides];
          return (
            L(n.poolSize, "poolSize"),
            L(n.strides, "strides"),
            (n.padding = null == e.padding ? "valid" : e.padding),
            (n.dataFormat = null == e.dataFormat ? "channelsLast" : e.dataFormat),
            H(n.dataFormat),
            J(n.padding),
            (n.inputSpec = [new ee({ ndim: 4 })]),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.computeOutputShape = function (t) {
            t = Zt(t);
            var e = "channelsFirst" === this.dataFormat ? t[2] : t[1],
              n = "channelsFirst" === this.dataFormat ? t[3] : t[2];
            return (
              (e = uc(e, this.poolSize[0], this.padding, this.strides[0])),
              (n = uc(n, this.poolSize[1], this.padding, this.strides[1])),
              "channelsFirst" === this.dataFormat
                ? [t[0], t[1], e, n]
                : [t[0], e, n, t[3]]
            );
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              return (
                r.invokeCallHook(t, n),
                r.poolingFunction(
                  Jt(t),
                  r.poolSize,
                  r.strides,
                  r.padding,
                  r.dataFormat,
                )
              );
            });
          }),
          (n.prototype.getConfig = function () {
            var e = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
                dataFormat: this.dataFormat,
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          n
        );
      })(oe),
      wh = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          o(e, t),
          (e.prototype.poolingFunction = function (t, e, n, r, i) {
            return H(i), J(r), dh(t, e, n, r, i, "max");
          }),
          e
        );
      })(bh);
    (wh.className = "MaxPooling2D"), e.serialization.registerClass(wh);
    var kh = (function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }
      return (
        o(e, t),
        (e.prototype.poolingFunction = function (t, e, n, r, i) {
          return H(i), J(r), dh(t, e, n, r, i, "avg");
        }),
        e
      );
    })(bh);
    (kh.className = "AveragePooling2D"), e.serialization.registerClass(kh);
    var xh = (function (t) {
        function n(e) {
          var n = this;
          if (
            (null == e.poolSize && (e.poolSize = [2, 2, 2]),
            ((n = t.call(this, e) || this).poolSize = Array.isArray(e.poolSize)
              ? e.poolSize
              : [e.poolSize, e.poolSize, e.poolSize]),
            null == e.strides)
          )
            n.strides = n.poolSize;
          else if (Array.isArray(e.strides)) {
            if (3 !== e.strides.length)
              throw new d(
                "If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length " +
                  "".concat(e.strides.length, "."),
              );
            n.strides = e.strides;
          } else n.strides = [e.strides, e.strides, e.strides];
          return (
            L(n.poolSize, "poolSize"),
            L(n.strides, "strides"),
            (n.padding = null == e.padding ? "valid" : e.padding),
            (n.dataFormat = null == e.dataFormat ? "channelsLast" : e.dataFormat),
            H(n.dataFormat),
            J(n.padding),
            (n.inputSpec = [new ee({ ndim: 5 })]),
            n
          );
        }
        return (
          o(n, t),
          (n.prototype.computeOutputShape = function (t) {
            t = Zt(t);
            var e = "channelsFirst" === this.dataFormat ? t[2] : t[1],
              n = "channelsFirst" === this.dataFormat ? t[3] : t[2],
              r = "channelsFirst" === this.dataFormat ? t[4] : t[3];
            return (
              (e = uc(e, this.poolSize[0], this.padding, this.strides[0])),
              (n = uc(n, this.poolSize[1], this.padding, this.strides[1])),
              (r = uc(r, this.poolSize[2], this.padding, this.strides[2])),
              "channelsFirst" === this.dataFormat
                ? [t[0], t[1], e, n, r]
                : [t[0], e, n, r, t[4]]
            );
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              return (
                r.invokeCallHook(t, n),
                r.poolingFunction(
                  Jt(t),
                  r.poolSize,
                  r.strides,
                  r.padding,
                  r.dataFormat,
                )
              );
            });
          }),
          (n.prototype.getConfig = function () {
            var e = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
                dataFormat: this.dataFormat,
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          n
        );
      })(oe),
      Sh = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          o(e, t),
          (e.prototype.poolingFunction = function (t, e, n, r, i) {
            return H(i), J(r), gh(t, e, n, r, i, "max");
          }),
          e
        );
      })(xh);
    (Sh.className = "MaxPooling3D"), e.serialization.registerClass(Sh);
    var Nh = (function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }
      return (
        o(e, t),
        (e.prototype.poolingFunction = function (t, e, n, r, i) {
          return H(i), J(r), gh(t, e, n, r, i, "avg");
        }),
        e
      );
    })(xh);
    (Nh.className = "AveragePooling3D"), e.serialization.registerClass(Nh);
    var Ih = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (n.inputSpec = [new ee({ ndim: 3 })]), n;
        }
        return (
          o(e, t),
          (e.prototype.computeOutputShape = function (t) {
            return [t[0], t[2]];
          }),
          (e.prototype.call = function (t, e) {
            throw new g();
          }),
          e
        );
      })(oe),
      Ah = (function (t) {
        function n(e) {
          return t.call(this, e || {}) || this;
        }
        return (
          o(n, t),
          (n.prototype.call = function (t, n) {
            return e.tidy(function () {
              var e = Jt(t);
              return i.mean(e, 1);
            });
          }),
          n
        );
      })(Ih);
    (Ah.className = "GlobalAveragePooling1D"), e.serialization.registerClass(Ah);
    var zh = (function (t) {
      function n(e) {
        return t.call(this, e || {}) || this;
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          return e.tidy(function () {
            var e = Jt(t);
            return i.max(e, 1);
          });
        }),
        n
      );
    })(Ih);
    (zh.className = "GlobalMaxPooling1D"), e.serialization.registerClass(zh);
    var Eh = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (
            (n.dataFormat = null == e.dataFormat ? "channelsLast" : e.dataFormat),
            H(n.dataFormat),
            (n.inputSpec = [new ee({ ndim: 4 })]),
            n
          );
        }
        return (
          o(e, t),
          (e.prototype.computeOutputShape = function (t) {
            return "channelsLast" === this.dataFormat
              ? [t[0], t[3]]
              : [t[0], t[1]];
          }),
          (e.prototype.call = function (t, e) {
            throw new g();
          }),
          (e.prototype.getConfig = function () {
            var e = { dataFormat: this.dataFormat },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          e
        );
      })(oe),
      Th = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          o(n, t),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var e = Jt(t);
              return "channelsLast" === r.dataFormat
                ? i.mean(e, [1, 2])
                : i.mean(e, [2, 3]);
            });
          }),
          n
        );
      })(Eh);
    (Th.className = "GlobalAveragePooling2D"), e.serialization.registerClass(Th);
    var Ch = (function (t) {
      function n() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        o(n, t),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e = Jt(t);
            return "channelsLast" === r.dataFormat
              ? i.max(e, [1, 2])
              : i.max(e, [2, 3]);
          });
        }),
        n
      );
    })(Eh);
    (Ch.className = "GlobalMaxPooling2D"), e.serialization.registerClass(Ch);
    var Fh = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (n.layer = e.layer), n;
        }
        return (
          o(e, t),
          (e.prototype.build = function (t) {
            this.built = !0;
          }),
          Object.defineProperty(e.prototype, "trainable", {
            get: function () {
              return null != this.layer && this.layer.trainable;
            },
            set: function (t) {
              null != this.layer && (this.layer.trainable = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "trainableWeights", {
            get: function () {
              return this.layer.trainableWeights;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "nonTrainableWeights", {
            get: function () {
              return this.layer.nonTrainableWeights;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "updates", {
            get: function () {
              return this.layer._updates;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "losses", {
            get: function () {
              return this.layer.losses;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.getWeights = function () {
            return this.layer.getWeights();
          }),
          (e.prototype.setWeights = function (t) {
            this.layer.setWeights(t);
          }),
          (e.prototype.getConfig = function () {
            var e = {
                layer: {
                  className: this.layer.getClassName(),
                  config: this.layer.getConfig(),
                },
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          (e.prototype.setFastWeightInitDuringBuild = function (e) {
            t.prototype.setFastWeightInitDuringBuild.call(this, e),
              null != this.layer && this.layer.setFastWeightInitDuringBuild(e);
          }),
          (e.fromConfig = function (t, e, n) {
            void 0 === n && (n = {});
            var r = zu(e.layer, n);
            delete e.layer;
            var i = { layer: r };
            return Object.assign(i, e), new t(i);
          }),
          e
        );
      })(oe),
      Dh = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return (n.supportsMasking = !0), n;
        }
        return (
          o(n, t),
          (n.prototype.build = function (e) {
            if ((e = Zt(e)).length < 3)
              throw new d(
                "TimeDistributed layer expects an input shape >= 3D, but received " +
                  "input shape ".concat(JSON.stringify(e)),
              );
            this.inputSpec = [{ shape: e }];
            var n = [e[0]].concat(e.slice(2));
            this.layer.built || (this.layer.build(n), (this.layer.built = !0)),
              t.prototype.build.call(this, e);
          }),
          (n.prototype.computeOutputShape = function (t) {
            var e = [(t = Zt(t))[0]].concat(t.slice(2)),
              n = this.layer.computeOutputShape(e),
              r = t[1];
            return [n[0], r].concat(n.slice(1));
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              return Ac(
                function (t, e) {
                  return [Jt(r.layer.call(t, n)), []];
                },
                (t = Jt(t)),
                [],
                !1,
                null,
                null,
                !1,
                !0,
              )[1];
            });
          }),
          n
        );
      })(Fh);
    (Dh.className = "TimeDistributed"), e.serialization.registerClass(Dh);
    var _h = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this,
          r = e.layer.getConfig(),
          i = {};
        (i.className = e.layer.getClassName()),
          (i.config = r),
          (n.forwardLayer = zu(i)),
          (r.goBackwards = !0 !== r.goBackwards);
        var a,
          o = {};
        if (
          ((o.className = e.layer.getClassName()),
          (o.config = r),
          (n.backwardLayer = zu(o)),
          (n.forwardLayer.name = "forward_" + n.forwardLayer.name),
          (n.backwardLayer.name = "backward_" + n.backwardLayer.name),
          (n.mergeMode = void 0 === e.mergeMode ? "concat" : e.mergeMode),
          (a = n.mergeMode),
          D(G, "BidirectionalMergeMode", a),
          e.weights)
        )
          throw new g(
            "weights support is not implemented for Bidirectional layer yet.",
          );
        return (
          (n._stateful = e.layer.stateful),
          (n.returnSequences = e.layer.returnSequences),
          (n.returnState = e.layer.returnState),
          (n.supportsMasking = !0),
          (n._trainable = !0),
          (n.inputSpec = e.layer.inputSpec),
          (n.numConstants = null),
          n
        );
      }
      return (
        o(n, t),
        Object.defineProperty(n.prototype, "trainable", {
          get: function () {
            return this._trainable;
          },
          set: function (t) {
            (this._trainable = t),
              null != this.forwardLayer && (this.forwardLayer.trainable = t),
              null != this.backwardLayer && (this.backwardLayer.trainable = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.getWeights = function () {
          return this.forwardLayer
            .getWeights()
            .concat(this.backwardLayer.getWeights());
        }),
        (n.prototype.setWeights = function (t) {
          var e = t.length,
            n = Math.floor(e / 2);
          this.forwardLayer.setWeights(t.slice(0, n)),
            this.backwardLayer.setWeights(t.slice(n));
        }),
        (n.prototype.computeOutputShape = function (t) {
          var e,
            n,
            r,
            i = this.forwardLayer.computeOutputShape(t);
          return (
            (Array.isArray(i) && Array.isArray(i[0])) || (i = [i]),
            this.returnState ? ((r = i.slice(1)), (e = i[0])) : (e = i[0]),
            "concat" === this.mergeMode
              ? ((e[e.length - 1] *= 2), (n = [e]))
              : (n = null == this.mergeMode ? [e, e.slice()] : [e]),
            this.returnState
              ? null == this.mergeMode
                ? n.concat(r).concat(r.slice())
                : [e].concat(r).concat(r.slice())
              : k(n)
          );
        }),
        (n.prototype.apply = function (e, n) {
          var r,
            i,
            a = null == n ? null : n.initialState,
            o = null == n ? null : n.constants;
          null == n && (n = {});
          var s = Ic(e, a, o, this.numConstants);
          if (
            ((e = s.inputs),
            (a = s.initialState),
            (o = s.constants),
            Array.isArray(e) && ((a = e.slice(1)), (e = e[0])),
            (null == a || 0 === a.length) && null == o)
          )
            return t.prototype.apply.call(this, e, n);
          var u = [],
            p = [];
          if (null != a) {
            var f = a.length;
            if (f % 2 > 0)
              throw new d(
                "When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.",
              );
            (n.initialState = a), u.push.apply(u, h([], c(a), !1));
            var v = a.map(function (t) {
              return new ee({ shape: t.shape });
            });
            (this.forwardLayer.stateSpec = v.slice(0, f / 2)),
              (this.backwardLayer.stateSpec = v.slice(f / 2)),
              p.push.apply(p, h([], c(v), !1));
          }
          if (null != o)
            throw new g(
              "Support for constants in Bidirectional layers is not implemented yet.",
            );
          var y = u[0] instanceof ne;
          try {
            for (var m = l(u), b = m.next(); !b.done; b = m.next()) {
              if (b.value instanceof ne !== y)
                throw new d(
                  "The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors",
                );
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              b && !b.done && (i = m.return) && i.call(m);
            } finally {
              if (r) throw r.error;
            }
          }
          if (y) {
            var w = [e].concat(u),
              k = this.inputSpec.concat(p),
              x = this.inputSpec;
            this.inputSpec = k;
            var S = t.prototype.apply.call(this, w, n);
            return (this.inputSpec = x), S;
          }
          return t.prototype.apply.call(this, e, n);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var e,
              a,
              o,
              s,
              u = n.initialState;
            if (null == u)
              (e = r.forwardLayer.call(t, n)), (a = r.backwardLayer.call(t, n));
            else {
              var l = u.slice(0, u.length / 2),
                c = u.slice(u.length / 2);
              (e = r.forwardLayer.call(t, Object.assign(n, { initialState: l }))),
                (a = r.backwardLayer.call(
                  t,
                  Object.assign(n, { initialState: c }),
                ));
            }
            return (
              r.returnState &&
                (Array.isArray(e) && (o = e.slice(1).concat(a.slice(1))),
                (e = e[0]),
                (a = a[0])),
              r.returnSequences && (a = i.reverse(a, 1)),
              "concat" === r.mergeMode
                ? (s = ft([e, a]))
                : "sum" === r.mergeMode
                  ? (s = i.add(e, a))
                  : "ave" === r.mergeMode
                    ? (s = i.mul(0.5, i.add(e, a)))
                    : "mul" === r.mergeMode
                      ? (s = i.mul(e, a))
                      : null == r.mergeMode && (s = [e, a]),
              r.returnState
                ? null == r.mergeMode
                  ? s.concat(o)
                  : [s].concat(o)
                : s
            );
          });
        }),
        (n.prototype.resetStates = function (t) {
          this.forwardLayer.resetStates(), this.backwardLayer.resetStates();
        }),
        (n.prototype.build = function (t) {
          var e = this;
          X(this.forwardLayer.name, function () {
            e.forwardLayer.build(t);
          }),
            X(this.backwardLayer.name, function () {
              e.backwardLayer.build(t);
            }),
            (this.built = !0);
        }),
        (n.prototype.computeMask = function (t, e) {
          var n;
          if (
            (Array.isArray(e) && (e = e[0]),
            (n = this.returnSequences
              ? null == this.mergeMode
                ? [e, e]
                : e
              : null == this.mergeMode
                ? [null, null]
                : null),
            this.returnState)
          ) {
            var r = this.forwardLayer.states.map(function (t) {
              return null;
            });
            return Array.isArray(n)
              ? n.concat(r).concat(r)
              : [n].concat(r).concat(r);
          }
          return n;
        }),
        Object.defineProperty(n.prototype, "trainableWeights", {
          get: function () {
            return this.forwardLayer.trainableWeights.concat(
              this.backwardLayer.trainableWeights,
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(n.prototype, "nonTrainableWeights", {
          get: function () {
            return this.forwardLayer.nonTrainableWeights.concat(
              this.backwardLayer.nonTrainableWeights,
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype.setFastWeightInitDuringBuild = function (e) {
          t.prototype.setFastWeightInitDuringBuild.call(this, e),
            null != this.forwardLayer &&
              this.forwardLayer.setFastWeightInitDuringBuild(e),
            null != this.backwardLayer &&
              this.backwardLayer.setFastWeightInitDuringBuild(e);
        }),
        (n.prototype.getConfig = function () {
          var e = { mergeMode: this.mergeMode },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        (n.fromConfig = function (t, e) {
          var n = zu(e.layer);
          if ((delete e.layer, null != e.numConstants))
            throw new g(
              "Deserialization of a Bidirectional layer with numConstants present is not supported yet.",
            );
          var r = e;
          return (r.layer = n), new t(r);
        }),
        n
      );
    })(Fh);
    (_h.className = "Bidirectional"), e.serialization.registerClass(_h);
    var Lh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.scale = e.scale),
          e.offset ? (n.offset = e.offset) : (n.offset = 0),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.getConfig = function () {
          var e = { scale: this.scale, offset: this.offset },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            return (
              "float32" !== (t = Jt(t)).dtype && (t = ut(t, "float32")),
              e.add(e.mul(t, r.scale), r.offset)
            );
          });
        }),
        n
      );
    })(oe);
    (Lh.className = "Rescaling"), e.serialization.registerClass(Lh);
    var Rh = e.image.resizeBilinear,
      Oh = e.image.cropAndResize,
      Mh = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          return (n.height = e.height), (n.width = e.width), n;
        }
        return (
          o(n, t),
          (n.prototype.centerCrop = function (t, n, r, i, a, o, s, u) {
            return e.tidy(function () {
              var l,
                c = !1,
                h = [n / o, r / s, (i + n) / o, (a + r) / s],
                p = [];
              3 === t.rank ? ((c = !0), (l = e.stack([t]))) : (l = t);
              for (var f = 0; f < l.shape[0]; f++) p.push(h);
              var d = e.tensor(p, [p.length, 4]),
                g = e.range(0, p.length, 1, "int32"),
                v = Oh(l, d, g, [i, a], "nearest");
              return ut(c ? Jt(e.unstack(v)) : v, u);
            });
          }),
          (n.prototype.upsize = function (t, n, r, i) {
            return e.tidy(function () {
              return ut(Rh(t, [n, r]), i);
            });
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var e = Jt(t),
                n = e.dtype,
                i = e.shape,
                a = i[i.length - 3],
                o = i[i.length - 2],
                s = 0;
              a !== r.height && (s = Math.floor((a - r.height) / 2));
              var u = 0;
              return (
                o !== r.width &&
                  0 === (u = Math.floor((o - r.width) / 2)) &&
                  (u = 1),
                s >= 0 && u >= 0
                  ? r.centerCrop(e, s, u, r.height, r.width, a, o, n)
                  : r.upsize(t, r.height, r.width, n)
              );
            });
          }),
          (n.prototype.getConfig = function () {
            var e = { height: this.height, width: this.width },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          (n.prototype.computeOutputShape = function (t) {
            var e = (t = Zt(t)).length - 3,
              n = t.length - 2;
            return (t[e] = this.height), (t[n] = this.width), t;
          }),
          n
        );
      })(oe);
    (Mh.className = "CenterCrop"), e.serialization.registerClass(Mh);
    var Bh = (function (t) {
      function n(e) {
        var n = t.call(this, e) || this;
        return (
          (n.numTokens = e.numTokens),
          e.outputMode
            ? (n.outputMode = e.outputMode)
            : (n.outputMode = "multiHot"),
          n
        );
      }
      return (
        o(n, t),
        (n.prototype.getConfig = function () {
          var e = { numTokens: this.numTokens, outputMode: this.outputMode },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        (n.prototype.computeOutputShape = function (t) {
          return null == (t = Zt(t))
            ? [this.numTokens]
            : "oneHot" === this.outputMode && 1 !== t[t.length - 1]
              ? (t.push(this.numTokens), t)
              : ((t[t.length - 1] = this.numTokens), t);
        }),
        (n.prototype.call = function (t, n) {
          var r = this;
          return e.tidy(function () {
            var i;
            if (
              ("int32" !== (t = Jt(t)).dtype && (t = ut(t, "int32")),
              "undefined" != typeof n.countWeights)
            ) {
              if ("count" !== r.outputMode)
                throw new d(
                  "countWeights is not used when outputMode !== count.\n              Received countWeights=".concat(
                    n.countWeights,
                  ),
                );
              i = Jt(n.countWeights);
            }
            var a = e.max(t),
              o = e.min(t),
              s = e.greater(r.numTokens, a).bufferSync().get(0),
              u = e.greaterEqual(o, 0).bufferSync().get(0);
            if (!s || !u)
              throw new d(
                "Input values must be between 0 < values <=" +
                  " numTokens with numTokens=".concat(r.numTokens),
              );
            return (function (t, n, r, i) {
              var a = Jt(t);
              if (("int32" !== a.dtype && (a = ut(a, "int32")), "int" === n))
                return a;
              var o = a.shape;
              if (
                (0 === a.rank && (a = e.expandDims(a, -1)),
                "oneHot" === n &&
                  1 !== a.shape[a.shape.length - 1] &&
                  (a = e.expandDims(a, -1)),
                a.rank > 2)
              )
                throw new d(
                  "When outputMode is not int, maximum output rank is 2" +
                    " Received outputMode "
                      .concat(n, " and input shape ")
                      .concat(o) +
                    " which would result in output rank ".concat(a.rank, "."),
                );
              var s,
                u = ["multiHot", "oneHot"].includes(n),
                l = a;
              if (
                ((s =
                  "undefined" != typeof i && "count" === n
                    ? e.denseBincount(l, i, r, u)
                    : e.denseBincount(l, [], r, u)),
                "tfIdf" !== n)
              )
                return s;
              if (i) return e.mul(s, i);
              throw new d(
                "When outputMode is 'tfIdf', weights must be provided.",
              );
            })(t, r.outputMode, r.numTokens, i);
          });
        }),
        n
      );
    })(oe);
    (Bh.className = "CategoryEncoding"), e.serialization.registerClass(Bh);
    var Ph = new Set(["bilinear", "nearest"]),
      jh = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this;
          if (((n.height = e.height), (n.width = e.width), e.interpolation)) {
            if (!Ph.has(e.interpolation))
              throw new d(
                "Invalid interpolation parameter: ".concat(
                  e.interpolation,
                  " is not implemented",
                ),
              );
            n.interpolation = e.interpolation;
          } else n.interpolation = "bilinear";
          return (n.cropToAspectRatio = Boolean(e.cropToAspectRatio)), n;
        }
        return (
          o(n, t),
          (n.prototype.computeOutputShape = function (t) {
            var e = (t = Zt(t))[2];
            return [this.height, this.width, e];
          }),
          (n.prototype.getConfig = function () {
            var e = {
                height: this.height,
                width: this.width,
                interpolation: this.interpolation,
                cropToAspectRatio: this.cropToAspectRatio,
              },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var n = [r.height, r.width];
              if ("bilinear" === r.interpolation)
                return e.image.resizeBilinear(t, n, !r.cropToAspectRatio);
              if ("nearest" === r.interpolation)
                return e.image.resizeNearestNeighbor(t, n, !r.cropToAspectRatio);
              throw new Error(
                "Interpolation is "
                  .concat(r.interpolation, " but only ")
                  .concat(h([], c(Ph), !1), " are supported"),
              );
            });
          }),
          n
        );
      })(oe);
    (jh.className = "Resizing"), e.serialization.registerClass(jh);
    var Uh = (function () {
      function t(t) {
        this.seed = t;
      }
      return (
        (t.prototype.next = function () {
          if (void 0 !== this.seed) return this.seed++;
        }),
        t
      );
    })();
    Uh.className = "RandomSeed";
    var Wh = (function (t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return (n.randomGenerator = new Uh(e.seed)), n;
      }
      return (
        o(e, t),
        (e.prototype.getConfig = function () {
          var e = { seed: this.randomGenerator.seed },
            n = t.prototype.getConfig.call(this);
          return Object.assign(e, n), e;
        }),
        e
      );
    })(oe);
    Wh.className = "BaseRandomLayer";
    var Vh = new Set(["bilinear", "nearest"]),
      qh = (function (t) {
        function n(e) {
          var n = t.call(this, e) || this,
            r = e.factor,
            i = e.interpolation,
            a = void 0 === i ? "bilinear" : i;
          if (((n.factor = r), Array.isArray(n.factor) && 2 === n.factor.length))
            (n.widthLower = n.factor[0]), (n.widthUpper = n.factor[1]);
          else {
            if (Array.isArray(n.factor) || !(n.factor > 0))
              throw new d(
                "Invalid factor: ".concat(
                  n.factor,
                  ". Must be positive number or tuple of 2 numbers",
                ),
              );
            (n.widthLower = -n.factor), (n.widthUpper = n.factor);
          }
          if (n.widthLower < -1 || n.widthUpper < -1)
            throw new d(
              "factor must have values larger than -1. Got: ".concat(n.factor),
            );
          if (n.widthUpper < n.widthLower)
            throw new d(
              "factor cannot have upper bound less than lower bound.\n        Got upper bound: "
                .concat(n.widthUpper, ".\n        Got lower bound: ")
                .concat(n.widthLower, "\n      "),
            );
          if (a) {
            if (!Vh.has(a))
              throw new d(
                "Invalid interpolation parameter: ".concat(
                  a,
                  " is not implemented",
                ),
              );
            n.interpolation = a;
          }
          return n;
        }
        return (
          o(n, t),
          (n.prototype.getConfig = function () {
            var e = { factor: this.factor, interpolation: this.interpolation },
              n = t.prototype.getConfig.call(this);
            return Object.assign(e, n), e;
          }),
          (n.prototype.computeOutputShape = function (t) {
            var e = (t = Zt(t))[2];
            return [this.imgHeight, -1, e];
          }),
          (n.prototype.call = function (t, n) {
            var r = this;
            return e.tidy(function () {
              var n = Jt(t);
              r.imgHeight = n.shape[n.shape.length - 3];
              var i = n.shape[n.shape.length - 2];
              r.widthFactor = e.randomUniform(
                [1],
                1 + r.widthLower,
                1 + r.widthUpper,
                "float32",
                r.randomGenerator.next(),
              );
              var a = r.widthFactor.dataSync()[0] * i;
              a = Math.round(a);
              var o = [r.imgHeight, a];
              switch (r.interpolation) {
                case "bilinear":
                  return e.image.resizeBilinear(t, o);
                case "nearest":
                  return e.image.resizeNearestNeighbor(t, o);
                default:
                  throw new Error(
                    "Interpolation is "
                      .concat(r.interpolation, "\n          but only ")
                      .concat(h([], c(Vh), !1), " are supported"),
                  );
              }
            });
          }),
          n
        );
      })(Wh);
    function Gh(t) {
      return new mh(t);
    }
    function Kh(t) {
      return new kh(t);
    }
    function Hh(t) {
      return new Nh(t);
    }
    function Jh(t) {
      return new zh(t);
    }
    function Zh(t) {
      return new Ch(t);
    }
    function Yh(t) {
      return new yh(t);
    }
    function Xh(t) {
      return new wh(t);
    }
    (qh.className = "RandomWidth"), e.serialization.registerClass(qh);
    var $h = {
      __proto__: null,
      Layer: oe,
      RNN: zc,
      RNNCell: Ec,
      activation: function (t) {
        return new Gc(t);
      },
      add: function (t) {
        return new $c(t);
      },
      alphaDropout: function (t) {
        return new uh(t);
      },
      average: function (t) {
        return new th(t);
      },
      averagePooling1d: Gh,
      averagePooling2d: Kh,
      averagePooling3d: Hh,
      avgPool1d: function (t) {
        return Gh(t);
      },
      avgPool2d: function (t) {
        return Kh(t);
      },
      avgPool3d: function (t) {
        return Hh(t);
      },
      avgPooling1d: function (t) {
        return Gh(t);
      },
      avgPooling2d: function (t) {
        return Kh(t);
      },
      avgPooling3d: function (t) {
        return Hh(t);
      },
      batchNormalization: function (t) {
        return new hh(t);
      },
      bidirectional: function (t) {
        return new _h(t);
      },
      categoryEncoding: function (t) {
        return new Bh(t);
      },
      centerCrop: function (t) {
        return new Mh(t);
      },
      concatenate: function (t) {
        return new rh(t);
      },
      conv1d: function (t) {
        return new kc(t);
      },
      conv2d: function (t) {
        return new gc(t);
      },
      conv2dTranspose: function (t) {
        return new yc(t);
      },
      conv3d: function (t) {
        return new vc(t);
      },
      conv3dTranspose: function (t) {
        return new mc(t);
      },
      convLstm2d: function (t) {
        return new jc(t);
      },
      convLstm2dCell: function (t) {
        return new Pc(t);
      },
      cropping2D: function (t) {
        return new xc(t);
      },
      dense: function (t) {
        return new Vc(t);
      },
      depthwiseConv2d: function (t) {
        return new Nc(t);
      },
      dot: function (t) {
        return new ah(t);
      },
      dropout: function (t) {
        return new Uc(t);
      },
      elu: function (t) {
        return new ic(t);
      },
      embedding: function (t) {
        return new Yc(t);
      },
      flatten: function (t) {
        return new qc(t);
      },
      gaussianDropout: function (t) {
        return new sh(t);
      },
      gaussianNoise: function (t) {
        return new oh(t);
      },
      globalAveragePooling1d: function (t) {
        return new Ah(t);
      },
      globalAveragePooling2d: function (t) {
        return new Th(t);
      },
      globalMaxPool1d: Jh,
      globalMaxPool2d: Zh,
      globalMaxPooling1d: Jh,
      globalMaxPooling2d: Zh,
      gru: function (t) {
        return new Dc(t);
      },
      gruCell: function (t) {
        return new Fc(t);
      },
      input: Tl,
      inputLayer: function (t) {
        return new ue(t);
      },
      layerNormalization: function (t) {
        return new ph(t);
      },
      leakyReLU: function (t) {
        return new nc(t);
      },
      lstm: function (t) {
        return new Lc(t);
      },
      lstmCell: function (t) {
        return new _c(t);
      },
      masking: function (t) {
        return new Zc(t);
      },
      maxPool1d: Yh,
      maxPool2d: Xh,
      maxPooling1d: Yh,
      maxPooling2d: Xh,
      maxPooling3d: function (t) {
        return new Sh(t);
      },
      maximum: function (t) {
        return new eh(t);
      },
      minimum: function (t) {
        return new nh(t);
      },
      multiply: function (t) {
        return new Qc(t);
      },
      permute: function (t) {
        return new Jc(t);
      },
      prelu: function (t) {
        return new rc(t);
      },
      randomWidth: function (t) {
        return new qh(t);
      },
      reLU: function (t) {
        return new ec(t);
      },
      repeatVector: function (t) {
        return new Kc(t);
      },
      rescaling: function (t) {
        return new Lh(t);
      },
      reshape: function (t) {
        return new Hc(t);
      },
      resizing: function (t) {
        return new jh(t);
      },
      rnn: function (t) {
        return new zc(t);
      },
      separableConv2d: function (t) {
        return new wc(t);
      },
      simpleRNN: function (t) {
        return new Cc(t);
      },
      simpleRNNCell: function (t) {
        return new Tc(t);
      },
      softmax: function (t) {
        return new oc(t);
      },
      spatialDropout1d: function (t) {
        return new Wc(t);
      },
      stackedRNNCells: function (t) {
        return new Rc(t);
      },
      thresholdedReLU: function (t) {
        return new ac(t);
      },
      timeDistributed: function (t) {
        return new Dh(t);
      },
      upSampling2d: function (t) {
        return new Sc(t);
      },
      zeroPadding2d: function (t) {
        return new fh(t);
      },
    };
    var Qh = {
        __proto__: null,
        MAPE: function (t, e) {
          return Fu(t, e);
        },
        MSE: function (t, e) {
          return Tu(t, e);
        },
        binaryAccuracy: function (t, e) {
          return Bu(t, e);
        },
        binaryCrossentropy: function (t, e) {
          return Vu(t, e);
        },
        categoricalAccuracy: function (t, e) {
          return Pu(t, e);
        },
        categoricalCrossentropy: function (t, e) {
          return Gu(t, e);
        },
        cosineProximity: function (t, e) {
          return Ru(t, e);
        },
        mape: function (t, e) {
          return Fu(t, e);
        },
        meanAbsoluteError: function (t, e) {
          return Cu(t, e);
        },
        meanAbsolutePercentageError: function (t, e) {
          return Fu(t, e);
        },
        meanSquaredError: function (t, e) {
          return Tu(t, e);
        },
        mse: function (t, e) {
          return Tu(t, e);
        },
        precision: function (t, e) {
          return Uu(t, e);
        },
        recall: function (t, e) {
          return Wu(t, e);
        },
        sparseCategoricalAccuracy: function (t, e) {
          return qu(t, e);
        },
      },
      tp = {
        __proto__: null,
        modelFromJSON: function (t, n) {
          return s(this, void 0, void 0, function () {
            var r, i, a, o, s, c, h, p, f, d;
            return u(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    "modelTopology" in t || (t = { modelTopology: t }),
                    null != (r = t.modelTopology).model_config &&
                      (r = r.model_config),
                    (i = rl(r)),
                    (a = zu(i, n)),
                    null == t.weightsManifest
                      ? [3, 2]
                      : [
                          4,
                          e.io.loadWeights(
                            t.weightsManifest,
                            t.pathPrefix,
                            a.weights.map(function (t) {
                              return t.originalName;
                            }),
                          ),
                        ]
                  );
                case 1:
                  (o = u.sent()), (s = {});
                  try {
                    for (c = l(a.weights), h = c.next(); !h.done; h = c.next())
                      (p = h.value), (s[p.originalName] = o[p.originalName]);
                  } catch (t) {
                    f = { error: t };
                  } finally {
                    try {
                      h && !h.done && (d = c.return) && d.call(c);
                    } finally {
                      if (f) throw f.error;
                    }
                  }
                  a.loadWeights(s), e.dispose(o), (u.label = 2);
                case 2:
                  return [2, a];
              }
            });
          });
        },
      };
    var ep = {
        __proto__: null,
        l1: function (t) {
          return Jl((e = t)), new Yl({ l1: null != e ? e.l1 : null, l2: 0 });
          var e;
        },
        l1l2: function (t) {
          return new Yl(t);
        },
        l2: function (t) {
          return Jl((e = t)), new Yl({ l2: null != e ? e.l2 : null, l1: 0 });
          var e;
        },
      },
      np = (function (t) {
        function e() {
          var e = t.apply(this, h([], c(arguments), !1)) || this;
          return (e.model = null), e;
        }
        return (
          o(e, t),
          (e.prototype.setModel = function (t) {
            if (!(t instanceof Il))
              throw new Error(
                "model must be a LayersModel, not some other Container",
              );
            this.model = t;
          }),
          e
        );
      })(bu);
    function rp(t, e) {
      return t < e;
    }
    function ip(t, e) {
      return t > e;
    }
    var ap = (function (t) {
      function e(e) {
        var n = t.call(this) || this;
        if ((null == e && (e = {}), e.restoreBestWeights))
          throw new g(
            "restoreBestWeights = True is not implemented in EarlyStopping yet.",
          );
        return (
          (n.monitor = e.monitor || "val_loss"),
          (n.minDelta = Math.abs(e.minDelta || 0)),
          (n.patience = e.patience || 0),
          (n.verbose = e.verbose || 0),
          (n.mode = e.mode || "auto"),
          (n.baseline = e.baseline),
          -1 === ["auto", "min", "max"].indexOf(n.mode) &&
            (console.warn(
              "EarlyStopping mode '".concat(n.mode, "' is invalid. ") +
                "Falling back to mode 'auto'.",
            ),
            (n.mode = "auto")),
          "min" === n.mode
            ? (n.monitorFunc = rp)
            : "max" === n.mode || -1 !== n.monitor.indexOf("acc")
              ? (n.monitorFunc = ip)
              : (n.monitorFunc = rp),
          n.monitorFunc === rp && (n.minDelta *= -1),
          n
        );
      }
      return (
        o(e, t),
        (e.prototype.onTrainBegin = function (t) {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              return (
                (this.wait = 0),
                (this.stoppedEpoch = 0),
                null != this.baseline
                  ? (this.best = this.baseline)
                  : (this.best = this.monitorFunc === rp ? 1 / 0 : -1 / 0),
                [2]
              );
            });
          });
        }),
        (e.prototype.onEpochEnd = function (t, e) {
          return s(this, void 0, void 0, function () {
            var n;
            return u(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, yu(e)];
                case 1:
                  return (
                    r.sent(),
                    null == (n = this.getMonitorValue(e))
                      ? [2]
                      : (this.monitorFunc(n - this.minDelta, this.best)
                          ? ((this.best = n), (this.wait = 0))
                          : (this.wait++,
                            this.wait >= this.patience &&
                              ((this.stoppedEpoch = t),
                              (this.model.stopTraining = !0))),
                        [2])
                  );
              }
            });
          });
        }),
        (e.prototype.onTrainEnd = function (t) {
          return s(this, void 0, void 0, function () {
            return u(this, function (t) {
              return (
                this.stoppedEpoch > 0 &&
                  this.verbose &&
                  console.log(
                    "Epoch ".concat(this.stoppedEpoch, ": early stopping."),
                  ),
                [2]
              );
            });
          });
        }),
        (e.prototype.getMonitorValue = function (t) {
          null == t && (t = {});
          var e = t[this.monitor];
          return (
            null == e &&
              console.warn(
                "Metric for EarlyStopping ".concat(
                  this.monitor,
                  " is not available. ",
                ) + "Available metrics are: ".concat(Object.keys(t)),
              ),
            e
          );
        }),
        e
      );
    })(np);
    var op = {
      earlyStopping: function (t) {
        return new ap(t);
      },
    };
    (t.Callback = np),
      (t.CallbackList = wu),
      (t.CustomCallback = Su),
      (t.EarlyStopping = ap),
      (t.History = xu),
      (t.InputSpec = ee),
      (t.LayerVariable = $t),
      (t.LayersModel = Il),
      (t.RNN = zc),
      (t.Sequential = El),
      (t.SymbolicTensor = ne),
      (t.callbacks = op),
      (t.constraints = du),
      (t.initializers = vu),
      (t.input = Tl),
      (t.layers = $h),
      (t.loadLayersModel = function (t, n) {
        return s(this, void 0, void 0, function () {
          var r;
          return u(this, function (i) {
            if ((null == n && (n = {}), "string" == typeof t)) {
              if (0 === (r = e.io.getLoadHandlers(t, n)).length)
                r.push(e.io.browserHTTPRequest(t, n));
              else if (r.length > 1)
                throw new d(
                  "Found more than one (".concat(
                    r.length,
                    ") load handlers for ",
                  ) + "URL '".concat(t, "'"),
                );
              t = r[0];
            }
            return [2, zl(t, void 0, n)];
          });
        });
      }),
      (t.metrics = Qh),
      (t.model = function (t) {
        return new Il(t);
      }),
      (t.models = tp),
      (t.registerCallbackConstructor = function (t, e) {
        Iu.registerCallbackConstructor(t, e);
      }),
      (t.regularizers = ep),
      (t.sequential = function (t) {
        return new El(t);
      }),
      (t.version_layers = al);
  });
  //# sourceMappingURL=tf-layers.min.js.map
  