/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
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
        ? e(
            exports,
            require("@mediapipe/pose"),
            require("@tensorflow/tfjs-core"),
            require("@tensorflow/tfjs-converter"),
            require("@tensorflow/tfjs-backend-webgpu"),
        )
        : "function" == typeof define && define.amd
            ? define(
                [
                    "exports",
                    "@mediapipe/pose",
                    "@tensorflow/tfjs-core",
                    "@tensorflow/tfjs-converter",
                    "@tensorflow/tfjs-backend-webgpu",
                ],
                e,
            )
            : e(
                ((t = t || self).poseDetection = {}),
                t.globalThis,
                t.tf,
                t.tf,
                t.tfwebgpu,
            );
})(this, function (t, e, n, i, r) {
    "use strict";
    var o = function (t, e) {
        return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                    t.__proto__ = e;
                }) ||
            function (t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
    };
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError(
                "Class extends value " + String(e) + " is not a constructor or null",
            );
        function n() {
            this.constructor = t;
        }
        o(t, e),
            (t.prototype =
                null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    }
    var s = function () {
        return (s =
            Object.assign ||
            function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t;
            }).apply(this, arguments);
    };
    function u(t, e, n, i) {
        return new (n || (n = Promise))(function (r, o) {
            function a(t) {
                try {
                    u(i.next(t));
                } catch (t) {
                    o(t);
                }
            }
            function s(t) {
                try {
                    u(i.throw(t));
                } catch (t) {
                    o(t);
                }
            }
            function u(t) {
                var e;
                t.done
                    ? r(t.value)
                    : ((e = t.value),
                        e instanceof n
                            ? e
                            : new n(function (t) {
                                t(e);
                            })).then(a, s);
            }
            u((i = i.apply(t, e || [])).next());
        });
    }
    function l(t, e) {
        var n,
            i,
            r,
            o,
            a = {
                label: 0,
                sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
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
                    for (; a;)
                        try {
                            if (
                                ((n = 1),
                                    i &&
                                    (r =
                                        2 & o[0]
                                            ? i.return
                                            : o[0]
                                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                                : i.next) &&
                                    !(r = r.call(i, o[1])).done)
                            )
                                return r;
                            switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, { value: o[1], done: !1 };
                                case 5:
                                    a.label++, (i = o[1]), (o = [0]);
                                    continue;
                                case 7:
                                    (o = a.ops.pop()), a.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !((r = a.trys),
                                            (r = r.length > 0 && r[r.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0]))
                                    ) {
                                        a = 0;
                                        continue;
                                    }
                                    if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                                        a.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        (a.label = r[1]), (r = o);
                                        break;
                                    }
                                    if (r && a.label < r[2]) {
                                        (a.label = r[2]), a.ops.push(o);
                                        break;
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                            }
                            o = e.call(t, a);
                        } catch (t) {
                            (o = [6, t]), (i = 0);
                        } finally {
                            n = r = 0;
                        }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
            };
        }
    }
    function h(t, e, n) {
        if (n || 2 === arguments.length)
            for (var i, r = 0, o = e.length; r < o; r++)
                (!i && r in e) ||
                    (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
        return t.concat(i || Array.prototype.slice.call(e));
    }
    var c = [
        "nose",
        "left_eye",
        "right_eye",
        "left_ear",
        "right_ear",
        "left_shoulder",
        "right_shoulder",
        "left_elbow",
        "right_elbow",
        "left_wrist",
        "right_wrist",
        "left_hip",
        "right_hip",
        "left_knee",
        "right_knee",
        "left_ankle",
        "right_ankle",
    ],
        p = [
            "nose",
            "left_eye_inner",
            "left_eye",
            "left_eye_outer",
            "right_eye_inner",
            "right_eye",
            "right_eye_outer",
            "left_ear",
            "right_ear",
            "mouth_left",
            "mouth_right",
            "left_shoulder",
            "right_shoulder",
            "left_elbow",
            "right_elbow",
            "left_wrist",
            "right_wrist",
            "left_pinky",
            "right_pinky",
            "left_index",
            "right_index",
            "left_thumb",
            "right_thumb",
            "left_hip",
            "right_hip",
            "left_knee",
            "right_knee",
            "left_ankle",
            "right_ankle",
            "left_heel",
            "right_heel",
            "left_foot_index",
            "right_foot_index",
        ],
        d = {
            left: [1, 2, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
            right: [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
            middle: [0],
        },
        f = {
            left: [1, 3, 5, 7, 9, 11, 13, 15],
            right: [2, 4, 6, 8, 10, 12, 14, 16],
            middle: [0],
        },
        m = [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [5, 6],
            [5, 7],
            [5, 11],
            [6, 8],
            [6, 12],
            [7, 9],
            [8, 10],
            [11, 12],
            [11, 13],
            [12, 14],
            [13, 15],
            [14, 16],
        ],
        g = [
            [0, 1],
            [0, 4],
            [1, 2],
            [2, 3],
            [3, 7],
            [4, 5],
            [5, 6],
            [6, 8],
            [9, 10],
            [11, 12],
            [11, 13],
            [11, 23],
            [12, 14],
            [14, 16],
            [12, 24],
            [13, 15],
            [15, 17],
            [16, 18],
            [16, 20],
            [15, 17],
            [15, 19],
            [15, 21],
            [16, 22],
            [17, 19],
            [18, 20],
            [23, 25],
            [23, 24],
            [24, 26],
            [25, 27],
            [26, 28],
            [27, 29],
            [28, 30],
            [27, 31],
            [28, 32],
            [29, 31],
            [30, 32],
        ];
    function y(t) {
        return t instanceof SVGAnimatedLength ? t.baseVal.value : t;
    }
    function v(t) {
        return u(this, void 0, void 0, function () {
            var e, i;
            return l(this, function (r) {
                switch (r.label) {
                    case 0:
                        return (
                            (e = document.createElement("canvas")),
                            t instanceof n.Tensor ? [4, n.browser.toPixels(t, e)] : [3, 2]
                        );
                    case 1:
                        return r.sent(), [3, 3];
                    case 2:
                        (e.width = y(t.width)),
                            (e.height = y(t.height)),
                            (i = e.getContext("2d")),
                            t instanceof ImageData
                                ? i.putImageData(t, 0, 0)
                                : i.drawImage(t, 0, 0),
                            (r.label = 3);
                    case 3:
                        return [2, e];
                }
            });
        });
    }
    function x(t) {
        return u(this, void 0, void 0, function () {
            var e, i, r, o, a, s;
            return l(this, function (u) {
                switch (u.label) {
                    case 0:
                        return t instanceof n.Tensor
                            ? ((e = t.shape.slice(0, 2)),
                                (i = e[0]),
                                (r = e[1]),
                                (o = ImageData.bind),
                                [4, n.browser.toPixels(t)])
                            : [3, 2];
                    case 1:
                        return [2, new (o.apply(ImageData, [void 0, u.sent(), r, i]))()];
                    case 2:
                        return (
                            (a = document.createElement("canvas")),
                            (s = a.getContext("2d")),
                            (a.width = y(t.width)),
                            (a.height = y(t.height)),
                            s.drawImage(t, 0, 0),
                            [2, s.getImageData(0, 0, a.width, a.height)]
                        );
                }
            });
        });
    }
    function w(t) {
        return u(this, void 0, void 0, function () {
            var e, i;
            return l(this, function (r) {
                switch (r.label) {
                    case 0:
                        return t instanceof SVGImageElement || t instanceof OffscreenCanvas
                            ? [4, v(t)]
                            : [3, 2];
                    case 1:
                        return (i = r.sent()), [3, 3];
                    case 2:
                        (i = t), (r.label = 3);
                    case 3:
                        return (e = i), [2, n.browser.fromPixels(e, 4)];
                }
            });
        });
    }
    function k(t) {
        if (t < 0 || t >= 256)
            throw new Error(
                "Mask value must be in range [0, 255] but got ".concat(t),
            );
        if (!Number.isInteger(t))
            throw new Error("Mask value must be an integer but got ".concat(t));
    }
    var b = {
        runtime: "mediapipe",
        enableSmoothing: !0,
        enableSegmentation: !1,
        smoothSegmentation: !0,
        modelType: "full",
    };
    var M = (function () {
        function t(t) {
            this.mask = t;
        }
        return (
            (t.prototype.toCanvasImageSource = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, this.mask];
                    });
                });
            }),
            (t.prototype.toImageData = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, x(this.mask)];
                    });
                });
            }),
            (t.prototype.toTensor = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, w(this.mask)];
                    });
                });
            }),
            (t.prototype.getUnderlyingType = function () {
                return "canvasimagesource";
            }),
            t
        );
    })();
    function S(t) {
        return k(t), "person";
    }
    var T = (function () {
        function t(t) {
            var n,
                i = this;
            switch (
            ((this.width = 0),
                (this.height = 0),
                (this.selfieMode = !1),
                (this.poseSolution = new e.Pose({
                    locateFile: function (e, n) {
                        if (t.solutionPath) {
                            var i = t.solutionPath.replace(/\/+$/, "");
                            return "".concat(i, "/").concat(e);
                        }
                        return "".concat(n, "/").concat(e);
                    },
                })),
                t.modelType)
            ) {
                case "lite":
                    n = 0;
                    break;
                case "heavy":
                    n = 2;
                    break;
                case "full":
                default:
                    n = 1;
            }
            this.poseSolution.setOptions({
                modelComplexity: n,
                smoothLandmarks: t.enableSmoothing,
                enableSegmentation: t.enableSegmentation,
                smoothSegmentation: t.smoothSegmentation,
                selfieMode: this.selfieMode,
            }),
                this.poseSolution.onResults(function (t) {
                    if (
                        ((i.height = t.image.height),
                            (i.width = t.image.width),
                            null == t.poseLandmarks)
                    )
                        i.poses = [];
                    else {
                        var e = i.translateOutput(t.poseLandmarks, t.poseWorldLandmarks);
                        t.segmentationMask &&
                            (e.segmentation = {
                                maskValueToLabel: S,
                                mask: new M(t.segmentationMask),
                            }),
                            (i.poses = [e]);
                    }
                });
        }
        return (
            (t.prototype.translateOutput = function (t, e) {
                var n = this,
                    i = {
                        keypoints: t.map(function (t, e) {
                            return {
                                x: t.x * n.width,
                                y: t.y * n.height,
                                z: t.z,
                                score: t.visibility,
                                name: p[e],
                            };
                        }),
                    };
                return (
                    null != e &&
                    (i.keypoints3D = e.map(function (t, e) {
                        return {
                            x: t.x,
                            y: t.y,
                            z: t.z,
                            score: t.visibility,
                            name: p[e],
                        };
                    })),
                    i
                );
            }),
            (t.prototype.estimatePoses = function (t, e, i) {
                return u(this, void 0, void 0, function () {
                    var r, o;
                    return l(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (
                                    e &&
                                    e.flipHorizontal &&
                                    e.flipHorizontal !== this.selfieMode &&
                                    ((this.selfieMode = e.flipHorizontal),
                                        this.poseSolution.setOptions({
                                            selfieMode: this.selfieMode,
                                        })),
                                    t instanceof n.Tensor
                                        ? ((o = ImageData.bind), [4, n.browser.toPixels(t)])
                                        : [3, 2]
                                );
                            case 1:
                                return (
                                    (r = new (o.apply(ImageData, [
                                        void 0,
                                        a.sent(),
                                        t.shape[1],
                                        t.shape[0],
                                    ]))()),
                                    [3, 3]
                                );
                            case 2:
                                (r = t), (a.label = 3);
                            case 3:
                                return (t = r), [4, this.poseSolution.send({ image: t }, i)];
                            case 4:
                                return a.sent(), [2, this.poses];
                        }
                    });
                });
            }),
            (t.prototype.dispose = function () {
                this.poseSolution.close();
            }),
            (t.prototype.reset = function () {
                this.poseSolution.reset();
            }),
            (t.prototype.initialize = function () {
                return this.poseSolution.initialize();
            }),
            t
        );
    })();
    function P(t) {
        return u(this, void 0, void 0, function () {
            var e, n;
            return l(this, function (i) {
                switch (i.label) {
                    case 0:
                        return (
                            (e = (function (t) {
                                if (null == t) return s({}, b);
                                var e = s({}, t);
                                return (
                                    (e.runtime = "mediapipe"),
                                    null == e.enableSegmentation &&
                                    (e.enableSegmentation = b.enableSegmentation),
                                    null == e.enableSmoothing &&
                                    (e.enableSmoothing = b.enableSmoothing),
                                    null == e.smoothSegmentation &&
                                    (e.smoothSegmentation = b.smoothSegmentation),
                                    null == e.modelType && (e.modelType = b.modelType),
                                    e
                                );
                            })(t)),
                            [4, (n = new T(e)).initialize()]
                        );
                    case 1:
                        return i.sent(), [2, n];
                }
            });
        });
    }
    function F(t) {
        return t instanceof n.Tensor
            ? { height: t.shape[0], width: t.shape[1] }
            : { height: t.height, width: t.width };
    }
    function _(t) {
        return t - 2 * Math.PI * Math.floor((t + Math.PI) / (2 * Math.PI));
    }
    function z(t) {
        return t instanceof n.Tensor ? t : n.browser.fromPixels(t);
    }
    function O(t, e, n) {
        return (
            I(n, "inputResolution"),
            [
                (1 / n.width) * t[0][0] * e.width,
                (1 / n.height) * t[0][1] * e.width,
                t[0][3] * e.width,
                (1 / n.width) * t[1][0] * e.height,
                (1 / n.height) * t[1][1] * e.height,
                t[1][3] * e.height,
                0,
                0,
            ]
        );
    }
    function I(t, e) {
        n.util.assert(0 !== t.width, function () {
            return "".concat(e, " width cannot be 0.");
        }),
            n.util.assert(0 !== t.height, function () {
                return "".concat(e, " height cannot be 0.");
            });
    }
    function A(t, e, n) {
        var i = n.rotationVectorStartKeypointIndex,
            r = n.rotationVectorEndKeypointIndex,
            o = t.locationData,
            a = o.relativeKeypoints[i].x * e.width,
            s = o.relativeKeypoints[i].y * e.height,
            u = o.relativeKeypoints[r].x * e.width,
            l = o.relativeKeypoints[r].y * e.height,
            h = 2 * Math.sqrt((u - a) * (u - a) + (l - s) * (l - s)),
            c = (function (t, e, n) {
                var i,
                    r = t.locationData,
                    o = n.rotationVectorStartKeypointIndex,
                    a = n.rotationVectorEndKeypointIndex;
                i = n.rotationVectorTargetAngle
                    ? n.rotationVectorTargetAngle
                    : (Math.PI * n.rotationVectorTargetAngleDegree) / 180;
                var s = r.relativeKeypoints[o].x * e.width,
                    u = r.relativeKeypoints[o].y * e.height,
                    l = r.relativeKeypoints[a].x * e.width,
                    h = r.relativeKeypoints[a].y * e.height;
                return _(i - Math.atan2(-(h - u), l - s));
            })(t, e, n);
        return {
            xCenter: a / e.width,
            yCenter: s / e.height,
            width: h / e.width,
            height: h / e.height,
            rotation: c,
        };
    }
    function C(t) {
        if (16 !== t.length)
            throw new Error("Array length must be 16 but got ".concat(t.length));
        return [
            [t[0], t[1], t[2], t[3]],
            [t[4], t[5], t[6], t[7]],
            [t[8], t[9], t[10], t[11]],
            [t[12], t[13], t[14], t[15]],
        ];
    }
    function E(t, e, n, i, r, o, a) {
        return t[e][r] * (t[n][o] * t[i][a] - t[n][a] * t[i][o]);
    }
    function R(t, e, n) {
        var i = (e + 1) % 4,
            r = (e + 2) % 4,
            o = (e + 3) % 4,
            a = (n + 1) % 4,
            s = (n + 2) % 4,
            u = (n + 3) % 4;
        return (
            E(t, i, r, o, a, s, u) + E(t, r, o, i, a, s, u) + E(t, o, i, r, a, s, u)
        );
    }
    function L(t, e, n) {
        void 0 === n && (n = { ignoreRotation: !1 });
        for (var i = [], r = 0, o = t; r < o.length; r++) {
            var a = o[r],
                u = a.x - 0.5,
                l = a.y - 0.5,
                h = n.ignoreRotation ? 0 : e.rotation,
                c = Math.cos(h) * u - Math.sin(h) * l,
                p = Math.sin(h) * u + Math.cos(h) * l;
            (c = c * e.width + e.xCenter), (p = p * e.height + e.yCenter);
            var d = a.z * e.width,
                f = s({}, a);
            (f.x = c), (f.y = p), (f.z = d), i.push(f);
        }
        return i;
    }
    function B(t, e) {
        var i = (function (t, e, n, i) {
            var r = e - t,
                o = i - n;
            if (0 === r)
                throw new Error(
                    "Original min and max are both ".concat(t, ", range cannot be 0."),
                );
            var a = o / r;
            return { scale: a, offset: n - t * a };
        })(0, 255, e[0], e[1]);
        return n.tidy(function () {
            return n.add(n.mul(t, i.scale), i.offset);
        });
    }
    function V(t, e, i) {
        var r,
            o,
            a,
            s,
            u,
            l,
            h,
            c,
            p,
            d,
            f,
            m,
            g,
            y,
            v = e.outputTensorSize,
            x = e.keepAspectRatio,
            w = e.borderMode,
            k = e.outputTensorFloatRange,
            b = F(t),
            M = (function (t, e) {
                return e
                    ? {
                        xCenter: e.xCenter * t.width,
                        yCenter: e.yCenter * t.height,
                        width: e.width * t.width,
                        height: e.height * t.height,
                        rotation: e.rotation,
                    }
                    : {
                        xCenter: 0.5 * t.width,
                        yCenter: 0.5 * t.height,
                        width: t.width,
                        height: t.height,
                        rotation: 0,
                    };
            })(b, i),
            S = (function (t, e, n) {
                if ((void 0 === n && (n = !1), !n))
                    return { top: 0, left: 0, right: 0, bottom: 0 };
                var i = e.height,
                    r = e.width;
                I(e, "targetSize"), I(t, "roi");
                var o,
                    a,
                    s = i / r,
                    u = t.height / t.width,
                    l = 0,
                    h = 0;
                return (
                    s > u
                        ? ((o = t.width), (a = t.width * s), (h = (1 - u / s) / 2))
                        : ((o = t.height / s), (a = t.height), (l = (1 - s / u) / 2)),
                    (t.width = o),
                    (t.height = a),
                    { top: h, left: l, right: l, bottom: h }
                );
            })(M, v, x),
            T =
                ((r = M),
                    (o = b.width),
                    (a = b.height),
                    (s = !1),
                    (u = r.width),
                    (l = r.height),
                    (h = s ? -1 : 1),
                    (c = Math.cos(r.rotation)),
                    (p = Math.sin(r.rotation)),
                    (d = r.xCenter),
                    (f = r.yCenter),
                    (m = 1 / o),
                    (g = 1 / a),
                    ((y = new Array(16))[0] = u * c * h * m),
                    (y[1] = -l * p * m),
                    (y[2] = 0),
                    (y[3] = (-0.5 * u * c * h + 0.5 * l * p + d) * m),
                    (y[4] = u * p * h * g),
                    (y[5] = l * c * g),
                    (y[6] = 0),
                    (y[7] = (-0.5 * l * c - 0.5 * u * p * h + f) * g),
                    (y[8] = 0),
                    (y[9] = 0),
                    (y[10] = u * m),
                    (y[11] = 0),
                    (y[12] = 0),
                    (y[13] = 0),
                    (y[14] = 0),
                    (y[15] = 1),
                    C(y));
        return {
            imageTensor: n.tidy(function () {
                var e = z(t),
                    i = n.tensor2d(O(T, b, v), [1, 8]),
                    r = "zero" === w ? "constant" : "nearest",
                    o = n.image.transform(
                        n.expandDims(n.cast(e, "float32")),
                        i,
                        "bilinear",
                        r,
                        0,
                        [v.height, v.width],
                    );
                return null != k ? B(o, k) : o;
            }),
            padding: S,
            transformationMatrix: T,
        };
    }
    function D(t, e, n, i) {
        return 1 === i ? 0.5 * (t + e) : t + ((e - t) * n) / (i - 1);
    }
    function N(t) {
        return n.tidy(function () {
            var e = (function (t) {
                return n.tidy(function () {
                    return [
                        n.slice(t, [0, 0, 0], [1, -1, 1]),
                        n.slice(t, [0, 0, 1], [1, -1, -1]),
                    ];
                });
            })(t),
                i = e[0],
                r = e[1];
            return { boxes: n.squeeze(r), logits: n.squeeze(i) };
        });
    }
    function q(t) {
        return null != t && null != t.currentTime;
    }
    function K(t) {
        for (
            var e = { locationData: { relativeKeypoints: [] } },
            n = Number.MAX_SAFE_INTEGER,
            i = Number.MIN_SAFE_INTEGER,
            r = Number.MAX_SAFE_INTEGER,
            o = Number.MIN_SAFE_INTEGER,
            a = 0;
            a < t.length;
            ++a
        ) {
            var s = t[a];
            (n = Math.min(n, s.x)),
                (i = Math.max(i, s.x)),
                (r = Math.min(r, s.y)),
                (o = Math.max(o, s.y)),
                e.locationData.relativeKeypoints.push({ x: s.x, y: s.y });
        }
        return (
            (e.locationData.relativeBoundingBox = {
                xMin: n,
                yMin: r,
                xMax: i,
                yMax: o,
                width: i - n,
                height: o - r,
            }),
            e
        );
    }
    function U(t, e, i, r) {
        return u(this, void 0, void 0, function () {
            var r, o, a, s, u;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (
                            t.sort(function (t, e) {
                                return (
                                    Math.max.apply(Math, e.score) - Math.max.apply(Math, t.score)
                                );
                            }),
                            (r = n.tensor2d(
                                t.map(function (t) {
                                    return [
                                        t.locationData.relativeBoundingBox.yMin,
                                        t.locationData.relativeBoundingBox.xMin,
                                        t.locationData.relativeBoundingBox.yMax,
                                        t.locationData.relativeBoundingBox.xMax,
                                    ];
                                }),
                            )),
                            (o = n.tensor1d(
                                t.map(function (t) {
                                    return t.score[0];
                                }),
                            )),
                            [4, n.image.nonMaxSuppressionAsync(r, o, e, i)]
                        );
                    case 1:
                        return [4, (a = l.sent()).array()];
                    case 2:
                        return (
                            (s = l.sent()),
                            (u = t.filter(function (t, e) {
                                return s.indexOf(e) > -1;
                            })),
                            n.dispose([r, o, a]),
                            [2, u]
                        );
                }
            });
        });
    }
    function j(t, e) {
        return t.map(function (t) {
            var n = s(s({}, t), { x: t.x * e.width, y: t.y * e.height });
            return null != t.z && (n.z = t.z * e.width), n;
        });
    }
    function H(t, e, i) {
        return u(this, void 0, void 0, function () {
            var r,
                o,
                a,
                u,
                h,
                c,
                p,
                d,
                f,
                m,
                g,
                y,
                v,
                x,
                w,
                k,
                b,
                M,
                S,
                T,
                P,
                F,
                _,
                z;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        if (
                            ((r = n.squeeze(e, [0])),
                                (o = r.shape),
                                (a = o[0]),
                                (u = o[1]),
                                (h = o[2]),
                                t.length !== h)
                        )
                            throw new Error(
                                "Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: " +
                                "".concat(t.length, ", heatmap length: ").concat(h),
                            );
                        return (c = []), [4, r.buffer()];
                    case 1:
                        for (p = l.sent(), d = 0; d < t.length; d++)
                            if (
                                ((f = t[d]),
                                    (m = s({}, f)),
                                    c.push(m),
                                    (g = Math.trunc(m.x * u)),
                                    (y = Math.trunc(m.y * a)),
                                    !(g < 0 || g >= u || y < 0 || g >= a))
                            ) {
                                for (
                                    v = Math.trunc((i.kernelSize - 1) / 2),
                                    x = Math.max(0, g - v),
                                    w = Math.min(u, g + v + 1),
                                    k = Math.max(0, y - v),
                                    b = Math.min(a, y + v + 1),
                                    M = 0,
                                    S = 0,
                                    T = 0,
                                    P = 0,
                                    F = k;
                                    F < b;
                                    ++F
                                )
                                    for (_ = x; _ < w; ++_)
                                        (z = p.get(F, _, d)),
                                            (M += z),
                                            (P = Math.max(P, z)),
                                            (S += _ * z),
                                            (T += F * z);
                                P >= i.minConfidenceToRefine &&
                                    M > 0 &&
                                    ((m.x = S / u / M), (m.y = T / a / M));
                            }
                        return r.dispose(), [2, c];
                }
            });
        });
    }
    function G(t, e) {
        var n = e.left,
            i = e.top,
            r = e.left + e.right,
            o = e.top + e.bottom;
        return t.map(function (t) {
            return s(s({}, t), {
                x: (t.x - n) / (1 - r),
                y: (t.y - i) / (1 - o),
                z: t.z / (1 - r),
            });
        });
    }
    function X(t, e, i) {
        return "webgl" === n.getBackend()
            ? (function (t, e, i) {
                var r = i.combineWithPreviousRatio.toFixed(2),
                    o = {
                        variableNames: ["prevMask", "newMask"],
                        outputShape: t.shape,
                        userCode:
                            "\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * ".concat(
                                r,
                                ");\n\n      setOutput(outputValue);\n    }\n",
                            ),
                    },
                    a = n.backend();
                return n.tidy(function () {
                    var i = a.compileAndRun(o, [t, e]);
                    return n.engine().makeTensorFromDataId(i.dataId, i.shape, i.dtype);
                });
            })(t, e, i)
            : n.tidy(function () {
                var r = n.sub(e, 0.5),
                    o = n.square(r),
                    a = n.sub(
                        1,
                        n.minimum(
                            1,
                            n.mul(
                                o,
                                n.add(
                                    5.68842,
                                    n.mul(
                                        o,
                                        n.add(
                                            -0.748699,
                                            n.mul(
                                                o,
                                                n.add(
                                                    -57.8051,
                                                    n.mul(o, n.add(291.309, n.mul(o, -624.717))),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    );
                return n.add(
                    e,
                    n.mul(n.sub(t, e), n.mul(a, i.combineWithPreviousRatio)),
                );
            });
    }
    function Y(t, e, i) {
        return u(this, void 0, void 0, function () {
            var r, o, a, s, u;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (
                            (r = t[0]),
                            (o = t[1]),
                            (a = (function (t, e, i) {
                                return n.tidy(function () {
                                    var r, o, a, s;
                                    i.reverseOutputOrder
                                        ? ((o = n.squeeze(
                                            n.slice(t, [0, i.boxCoordOffset + 0], [-1, 1]),
                                        )),
                                            (r = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 1], [-1, 1]),
                                            )),
                                            (s = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 2], [-1, 1]),
                                            )),
                                            (a = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 3], [-1, 1]),
                                            )))
                                        : ((r = n.squeeze(
                                            n.slice(t, [0, i.boxCoordOffset + 0], [-1, 1]),
                                        )),
                                            (o = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 1], [-1, 1]),
                                            )),
                                            (a = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 2], [-1, 1]),
                                            )),
                                            (s = n.squeeze(
                                                n.slice(t, [0, i.boxCoordOffset + 3], [-1, 1]),
                                            ))),
                                        (o = n.add(n.mul(n.div(o, i.xScale), e.w), e.x)),
                                        (r = n.add(n.mul(n.div(r, i.yScale), e.h), e.y)),
                                        i.applyExponentialOnBoxSize
                                            ? ((a = n.mul(n.exp(n.div(a, i.hScale)), e.h)),
                                                (s = n.mul(n.exp(n.div(s, i.wScale)), e.w)))
                                            : ((a = n.mul(n.div(a, i.hScale), e.h)),
                                                (s = n.mul(n.div(s, i.wScale), e.h)));
                                    var u = n.sub(r, n.div(a, 2)),
                                        l = n.sub(o, n.div(s, 2)),
                                        h = n.add(r, n.div(a, 2)),
                                        c = n.add(o, n.div(s, 2)),
                                        p = n.concat(
                                            [
                                                n.reshape(u, [i.numBoxes, 1]),
                                                n.reshape(l, [i.numBoxes, 1]),
                                                n.reshape(h, [i.numBoxes, 1]),
                                                n.reshape(c, [i.numBoxes, 1]),
                                            ],
                                            1,
                                        );
                                    if (i.numKeypoints)
                                        for (var d = 0; d < i.numKeypoints; ++d) {
                                            var f =
                                                i.keypointCoordOffset + d * i.numValuesPerKeypoint,
                                                m = void 0,
                                                g = void 0;
                                            i.reverseOutputOrder
                                                ? ((m = n.squeeze(n.slice(t, [0, f], [-1, 1]))),
                                                    (g = n.squeeze(n.slice(t, [0, f + 1], [-1, 1]))))
                                                : ((g = n.squeeze(n.slice(t, [0, f], [-1, 1]))),
                                                    (m = n.squeeze(n.slice(t, [0, f + 1], [-1, 1]))));
                                            var y = n.add(n.mul(n.div(m, i.xScale), e.w), e.x),
                                                v = n.add(n.mul(n.div(g, i.yScale), e.h), e.y);
                                            p = n.concat(
                                                [
                                                    p,
                                                    n.reshape(y, [i.numBoxes, 1]),
                                                    n.reshape(v, [i.numBoxes, 1]),
                                                ],
                                                1,
                                            );
                                        }
                                    return p;
                                });
                            })(o, e, i)),
                            (s = n.tidy(function () {
                                var t = r;
                                return i.sigmoidScore
                                    ? (null != i.scoreClippingThresh &&
                                        (t = n.clipByValue(
                                            r,
                                            -i.scoreClippingThresh,
                                            i.scoreClippingThresh,
                                        )),
                                        (t = n.sigmoid(t)))
                                    : t;
                            })),
                            [4, W(a, s, i)]
                        );
                    case 1:
                        return (u = l.sent()), n.dispose([a, s]), [2, u];
                }
            });
        });
    }
    function W(t, e, n) {
        return u(this, void 0, void 0, function () {
            var i, r, o, a, s, u, h, c, p, d, f, m;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (i = []), [4, t.data()];
                    case 1:
                        return (r = l.sent()), [4, e.data()];
                    case 2:
                        for (o = l.sent(), a = 0; a < n.numBoxes; ++a)
                            if (
                                !(
                                    (null != n.minScoreThresh && o[a] < n.minScoreThresh) ||
                                    ((s = a * n.numCoords),
                                        (u = Q(
                                            r[s + 0],
                                            r[s + 1],
                                            r[s + 2],
                                            r[s + 3],
                                            o[a],
                                            n.flipVertically,
                                            a,
                                        )),
                                        (h = u.locationData.relativeBoundingBox).width < 0 ||
                                        h.height < 0)
                                )
                            ) {
                                if (n.numKeypoints > 0)
                                    for (
                                        (c = u.locationData).relativeKeypoints = [],
                                        p = n.numKeypoints * n.numValuesPerKeypoint,
                                        d = 0;
                                        d < p;
                                        d += n.numValuesPerKeypoint
                                    )
                                        (f = s + n.keypointCoordOffset + d),
                                            (m = {
                                                x: r[f + 0],
                                                y: n.flipVertically ? 1 - r[f + 1] : r[f + 1],
                                            }),
                                            c.relativeKeypoints.push(m);
                                i.push(u);
                            }
                        return [2, i];
                }
            });
        });
    }
    function Q(t, e, n, i, r, o, a) {
        return {
            score: [r],
            ind: a,
            locationData: {
                relativeBoundingBox: {
                    xMin: e,
                    yMin: o ? 1 - n : t,
                    xMax: i,
                    yMax: o ? 1 - t : n,
                    width: i - e,
                    height: n - t,
                },
            },
        };
    }
    function Z(t, e) {
        return "none" === t
            ? e
            : (function (t) {
                return 1 / (1 + Math.exp(-t));
            })(e);
    }
    function $(t, e, n, i) {
        return u(this, void 0, void 0, function () {
            var r, o, a, s, u, h, c, p;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (
                            (n = n || e.flipHorizontally || !1),
                            (i = i || e.flipVertically || !1),
                            (r = t.size),
                            (o = r / e.numLandmarks),
                            [4, t.data()]
                        );
                    case 1:
                        for (a = l.sent(), s = [], u = 0; u < e.numLandmarks; ++u)
                            (h = u * o),
                                ((p = { x: 0, y: 0 }).x = n ? e.inputImageWidth - a[h] : a[h]),
                                o > 1 && (p.y = i ? e.inputImageHeight - a[h + 1] : a[h + 1]),
                                o > 2 && (p.z = a[h + 2]),
                                o > 3 && (p.score = Z(e.visibilityActivation, a[h + 3])),
                                s.push(p);
                        for (c = 0; c < s.length; ++c)
                            ((p = s[c]).x = p.x / e.inputImageWidth),
                                (p.y = p.y / e.inputImageHeight),
                                (p.z = p.z / e.inputImageWidth / (e.normalizeZ || 1));
                        return [2, s];
                }
            });
        });
    }
    function J(t, e, n) {
        var i = t.width,
            r = t.height,
            o = t.rotation;
        if (
            ((null == n.rotation && null == n.rotationDegree) ||
                (o = (function (t, e) {
                    null != e.rotation
                        ? (t += e.rotation)
                        : null != e.rotationDegree &&
                        (t += (Math.PI * e.rotationDegree) / 180);
                    return _(t);
                })(o, n)),
                0 === o)
        )
            (t.xCenter = t.xCenter + i * n.shiftX),
                (t.yCenter = t.yCenter + r * n.shiftY);
        else {
            var a =
                (e.width * i * n.shiftX * Math.cos(o) -
                    e.height * r * n.shiftY * Math.sin(o)) /
                e.width,
                s =
                    (e.width * i * n.shiftX * Math.sin(o) +
                        e.height * r * n.shiftY * Math.cos(o)) /
                    e.height;
            (t.xCenter = t.xCenter + a), (t.yCenter = t.yCenter + s);
        }
        if (n.squareLong) {
            var u = Math.max(i * e.width, r * e.height);
            (i = u / e.width), (r = u / e.height);
        } else if (n.squareShort) {
            var l = Math.min(i * e.width, r * e.height);
            (i = l / e.width), (r = l / e.height);
        }
        return (t.width = i * n.scaleX), (t.height = r * n.scaleY), t;
    }
    function tt(t, e) {
        return t.map(function (t) {
            var n = s(s({}, t), { x: t.x / e.width, y: t.y / e.height });
            return null != t.z && (t.z = t.z / e.width), n;
        });
    }
    var et = (function () {
        function t(t) {
            (this.alpha = t), (this.initialized = !1);
        }
        return (
            (t.prototype.apply = function (t, e) {
                var n;
                return (
                    this.initialized
                        ? (n =
                            null == e
                                ? this.storedValue + this.alpha * (t - this.storedValue)
                                : this.storedValue +
                                this.alpha * e * Math.asinh((t - this.storedValue) / e))
                        : ((n = t), (this.initialized = !0)),
                    (this.rawValue = t),
                    (this.storedValue = n),
                    n
                );
            }),
            (t.prototype.applyWithAlpha = function (t, e, n) {
                return (this.alpha = e), this.apply(t, n);
            }),
            (t.prototype.hasLastRawValue = function () {
                return this.initialized;
            }),
            (t.prototype.lastRawValue = function () {
                return this.rawValue;
            }),
            (t.prototype.reset = function () {
                this.initialized = !1;
            }),
            t
        );
    })(),
        nt = (function () {
            function t(t) {
                (this.frequency = t.frequency),
                    (this.minCutOff = t.minCutOff),
                    (this.beta = t.beta),
                    (this.thresholdCutOff = t.thresholdCutOff),
                    (this.thresholdBeta = t.thresholdBeta),
                    (this.derivateCutOff = t.derivateCutOff),
                    (this.x = new et(this.getAlpha(this.minCutOff))),
                    (this.dx = new et(this.getAlpha(this.derivateCutOff))),
                    (this.lastTimestamp = 0);
            }
            return (
                (t.prototype.apply = function (t, e, n) {
                    if (null == t) return t;
                    var i = Math.trunc(e);
                    if (this.lastTimestamp >= i) return t;
                    0 !== this.lastTimestamp &&
                        0 !== i &&
                        (this.frequency = 1 / (1e-6 * (i - this.lastTimestamp))),
                        (this.lastTimestamp = i);
                    var r = this.x.hasLastRawValue()
                        ? (t - this.x.lastRawValue()) * n * this.frequency
                        : 0,
                        o = this.dx.applyWithAlpha(r, this.getAlpha(this.derivateCutOff)),
                        a = this.minCutOff + this.beta * Math.abs(o),
                        s =
                            null != this.thresholdCutOff
                                ? this.thresholdCutOff + this.thresholdBeta * Math.abs(o)
                                : null;
                    return this.x.applyWithAlpha(t, this.getAlpha(a), s);
                }),
                (t.prototype.getAlpha = function (t) {
                    return 1 / (1 + this.frequency / (2 * Math.PI * t));
                }),
                t
            );
        })(),
        it = (function () {
            function t(t) {
                this.config = t;
            }
            return (
                (t.prototype.apply = function (t, e, n) {
                    var i = this;
                    if (null == t) return this.reset(), null;
                    this.initializeFiltersIfEmpty(t);
                    var r = 1;
                    if (!this.config.disableValueScaling) {
                        if (n < this.config.minAllowedObjectScale) return h([], t, !0);
                        r = 1 / n;
                    }
                    return t.map(function (t, n) {
                        var o = s(s({}, t), {
                            x: i.xFilters[n].apply(t.x, e, r),
                            y: i.yFilters[n].apply(t.y, e, r),
                        });
                        return null != t.z && (o.z = i.zFilters[n].apply(t.z, e, r)), o;
                    });
                }),
                (t.prototype.reset = function () {
                    (this.xFilters = null),
                        (this.yFilters = null),
                        (this.zFilters = null);
                }),
                (t.prototype.initializeFiltersIfEmpty = function (t) {
                    var e = this;
                    (null != this.xFilters && this.xFilters.length === t.length) ||
                        ((this.xFilters = t.map(function (t) {
                            return new nt(e.config);
                        })),
                            (this.yFilters = t.map(function (t) {
                                return new nt(e.config);
                            })),
                            (this.zFilters = t.map(function (t) {
                                return new nt(e.config);
                            })));
                }),
                t
            );
        })(),
        rt = (function () {
            function t(t) {
                (this.config = t),
                    (this.window = []),
                    (this.lowPassFilter = new et(1)),
                    (this.lastValue = 0),
                    (this.lastValueScale = 1),
                    (this.lastTimestamp = -1);
            }
            return (
                (t.prototype.apply = function (t, e, n) {
                    if (null == t) return t;
                    var i,
                        r = Math.trunc(e);
                    if (this.lastTimestamp >= r) return t;
                    if (-1 === this.lastTimestamp) i = 1;
                    else {
                        for (
                            var o = t * n - this.lastValue * this.lastValueScale,
                            a = r - this.lastTimestamp,
                            s = o,
                            u = a,
                            l = (1 + this.window.length) * (1e6 / 30),
                            h = 0,
                            c = this.window;
                            h < c.length;
                            h++
                        ) {
                            var p = c[h];
                            if (u + p.duration > l) break;
                            (s += p.distance), (u += p.duration);
                        }
                        var d = s / (1e-6 * u);
                        (i = 1 - 1 / (1 + this.config.velocityScale * Math.abs(d))),
                            this.window.unshift({ distance: o, duration: a }),
                            this.window.length > this.config.windowSize && this.window.pop();
                    }
                    return (
                        (this.lastValue = t),
                        (this.lastValueScale = n),
                        (this.lastTimestamp = r),
                        this.lowPassFilter.applyWithAlpha(t, i)
                    );
                }),
                t
            );
        })(),
        ot = (function () {
            function t(t) {
                this.config = t;
            }
            return (
                (t.prototype.apply = function (t, e, n) {
                    var i = this;
                    if (null == t) return this.reset(), null;
                    var r = 1;
                    if (!this.config.disableValueScaling) {
                        if (n < this.config.minAllowedObjectScale) return h([], t, !0);
                        r = 1 / n;
                    }
                    return (
                        this.initializeFiltersIfEmpty(t),
                        t.map(function (t, n) {
                            var o = s(s({}, t), {
                                x: i.xFilters[n].apply(t.x, e, r),
                                y: i.yFilters[n].apply(t.y, e, r),
                            });
                            return null != t.z && (o.z = i.zFilters[n].apply(t.z, e, r)), o;
                        })
                    );
                }),
                (t.prototype.reset = function () {
                    (this.xFilters = null),
                        (this.yFilters = null),
                        (this.zFilters = null);
                }),
                (t.prototype.initializeFiltersIfEmpty = function (t) {
                    var e = this;
                    (null != this.xFilters && this.xFilters.length === t.length) ||
                        ((this.xFilters = t.map(function (t) {
                            return new rt(e.config);
                        })),
                            (this.yFilters = t.map(function (t) {
                                return new rt(e.config);
                            })),
                            (this.zFilters = t.map(function (t) {
                                return new rt(e.config);
                            })));
                }),
                t
            );
        })(),
        at = (function () {
            function t(t) {
                if (null != t.velocityFilter)
                    this.keypointsFilter = new ot(t.velocityFilter);
                else {
                    if (null == t.oneEuroFilter)
                        throw new Error(
                            "Either configure velocityFilter or oneEuroFilter, but got " +
                            "".concat(t, "."),
                        );
                    this.keypointsFilter = new it(t.oneEuroFilter);
                }
            }
            return (
                (t.prototype.apply = function (t, e, n, i, r) {
                    if ((void 0 === i && (i = !1), null == t))
                        return this.keypointsFilter.reset(), null;
                    var o =
                        null != r
                            ? (function (t, e) {
                                return (t.width * e.width + t.height * e.height) / 2;
                            })(r, n)
                            : 1,
                        a = i ? j(t, n) : t,
                        s = this.keypointsFilter.apply(a, e, o);
                    return i ? tt(s, n) : s;
                }),
                t
            );
        })(),
        st = (function () {
            function t(t) {
                this.alpha = t.alpha;
            }
            return (
                (t.prototype.apply = function (t) {
                    var e = this;
                    if (null == t) return (this.visibilityFilters = null), null;
                    (null != this.visibilityFilters &&
                        this.visibilityFilters.length === t.length) ||
                        (this.visibilityFilters = t.map(function (t) {
                            return new et(e.alpha);
                        }));
                    for (var n = [], i = 0; i < t.length; ++i) {
                        var r = t[i],
                            o = s({}, r);
                        (o.score = this.visibilityFilters[i].apply(r.score)), n.push(o);
                    }
                    return n;
                }),
                t
            );
        })(),
        ut = {
            reduceBoxesInLowestlayer: !1,
            interpolatedScaleAspectRatio: 1,
            featureMapHeight: [],
            featureMapWidth: [],
            numLayers: 5,
            minScale: 0.1484375,
            maxScale: 0.75,
            inputSizeHeight: 224,
            inputSizeWidth: 224,
            anchorOffsetX: 0.5,
            anchorOffsetY: 0.5,
            strides: [8, 16, 32, 32, 32],
            aspectRatios: [1],
            fixedAnchorSize: !0,
        },
        lt = {
            runtime: "tfjs",
            modelType: "full",
            enableSmoothing: !0,
            enableSegmentation: !1,
            smoothSegmentation: !0,
            detectorModelUrl:
                "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",
            landmarkModelUrl:
                "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2",
        },
        ht = { maxPoses: 1, flipHorizontal: !1 },
        ct = {
            applyExponentialOnBoxSize: !1,
            flipVertically: !1,
            ignoreClasses: [],
            numClasses: 1,
            numBoxes: 2254,
            numCoords: 12,
            boxCoordOffset: 0,
            keypointCoordOffset: 4,
            numKeypoints: 4,
            numValuesPerKeypoint: 2,
            sigmoidScore: !0,
            scoreClippingThresh: 100,
            reverseOutputOrder: !0,
            xScale: 224,
            yScale: 224,
            hScale: 224,
            wScale: 224,
            minScoreThresh: 0.5,
        },
        pt = 0.3,
        dt = { shiftX: 0, shiftY: 0, scaleX: 1.25, scaleY: 1.25, squareLong: !0 },
        ft = {
            outputTensorSize: { width: 224, height: 224 },
            keepAspectRatio: !0,
            outputTensorFloatRange: [-1, 1],
            borderMode: "zero",
        },
        mt = {
            outputTensorSize: { width: 256, height: 256 },
            keepAspectRatio: !0,
            outputTensorFloatRange: [0, 1],
            borderMode: "zero",
        },
        gt = {
            numLandmarks: 39,
            inputImageWidth: 256,
            inputImageHeight: 256,
            visibilityActivation: "sigmoid",
            flipHorizontally: !1,
            flipVertically: !1,
        },
        yt = {
            numLandmarks: 39,
            inputImageWidth: 1,
            inputImageHeight: 1,
            visibilityActivation: "sigmoid",
            flipHorizontally: !1,
            flipVertically: !1,
        },
        vt = { kernelSize: 7, minConfidenceToRefine: 0.5 },
        xt = { alpha: 0.1 },
        wt = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: 0.05,
                beta: 80,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6,
            },
        },
        kt = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: 0.01,
                beta: 10,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6,
            },
        },
        bt = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: 0.1,
                beta: 40,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6,
                disableValueScaling: !0,
            },
        },
        Mt = { activation: "none" },
        St = { combineWithPreviousRatio: 0.7 };
    var Tt = (function () {
        function t(t) {
            this.mask = t;
        }
        return (
            (t.prototype.toCanvasImageSource = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, v(this.mask)];
                    });
                });
            }),
            (t.prototype.toImageData = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, x(this.mask)];
                    });
                });
            }),
            (t.prototype.toTensor = function () {
                return u(this, void 0, void 0, function () {
                    return l(this, function (t) {
                        return [2, this.mask];
                    });
                });
            }),
            (t.prototype.getUnderlyingType = function () {
                return "tensor";
            }),
            t
        );
    })();
    function Pt(t) {
        return k(t), "person";
    }
    var Ft = (function () {
        function t(t, e, i, r, o, a) {
            (this.detectorModel = t),
                (this.landmarkModel = e),
                (this.enableSmoothing = i),
                (this.enableSegmentation = r),
                (this.smoothSegmentation = o),
                (this.modelType = a),
                (this.regionOfInterest = null),
                (this.prevFilteredSegmentationMask = null),
                (this.anchors = (function (t) {
                    null == t.reduceBoxesInLowestLayer &&
                        (t.reduceBoxesInLowestLayer = !1),
                        null == t.interpolatedScaleAspectRatio &&
                        (t.interpolatedScaleAspectRatio = 1),
                        null == t.fixedAnchorSize && (t.fixedAnchorSize = !1);
                    for (var e = [], n = 0; n < t.numLayers;) {
                        for (
                            var i = [], r = [], o = [], a = [], s = n;
                            s < t.strides.length && t.strides[s] === t.strides[n];

                        ) {
                            var u = D(t.minScale, t.maxScale, s, t.strides.length);
                            if (0 === s && t.reduceBoxesInLowestLayer)
                                o.push(1),
                                    o.push(2),
                                    o.push(0.5),
                                    a.push(0.1),
                                    a.push(u),
                                    a.push(u);
                            else {
                                for (var l = 0; l < t.aspectRatios.length; ++l)
                                    o.push(t.aspectRatios[l]), a.push(u);
                                if (t.interpolatedScaleAspectRatio > 0) {
                                    var h =
                                        s === t.strides.length - 1
                                            ? 1
                                            : D(t.minScale, t.maxScale, s + 1, t.strides.length);
                                    a.push(Math.sqrt(u * h)),
                                        o.push(t.interpolatedScaleAspectRatio);
                                }
                            }
                            s++;
                        }
                        for (var c = 0; c < o.length; ++c) {
                            var p = Math.sqrt(o[c]);
                            i.push(a[c] / p), r.push(a[c] * p);
                        }
                        var d = 0,
                            f = 0;
                        if (t.featureMapHeight.length > 0)
                            (d = t.featureMapHeight[n]), (f = t.featureMapWidth[n]);
                        else {
                            var m = t.strides[n];
                            (d = Math.ceil(t.inputSizeHeight / m)),
                                (f = Math.ceil(t.inputSizeWidth / m));
                        }
                        for (var g = 0; g < d; ++g)
                            for (var y = 0; y < f; ++y)
                                for (var v = 0; v < i.length; ++v) {
                                    var x = {
                                        xCenter: (y + t.anchorOffsetX) / f,
                                        yCenter: (g + t.anchorOffsetY) / d,
                                        width: 0,
                                        height: 0,
                                    };
                                    t.fixedAnchorSize
                                        ? ((x.width = 1), (x.height = 1))
                                        : ((x.width = r[v]), (x.height = i[v])),
                                        e.push(x);
                                }
                        n = s;
                    }
                    return e;
                })(ut));
            var s = n.tensor1d(
                this.anchors.map(function (t) {
                    return t.width;
                }),
            ),
                u = n.tensor1d(
                    this.anchors.map(function (t) {
                        return t.height;
                    }),
                ),
                l = n.tensor1d(
                    this.anchors.map(function (t) {
                        return t.xCenter;
                    }),
                ),
                h = n.tensor1d(
                    this.anchors.map(function (t) {
                        return t.yCenter;
                    }),
                );
            (this.anchorTensor = { x: l, y: h, w: s, h: u }),
                (this.prevFilteredSegmentationMask = this.enableSegmentation
                    ? n.tensor2d([], [0, 0])
                    : null);
        }
        return (
            (t.prototype.estimatePoses = function (t, e, i) {
                return u(this, void 0, void 0, function () {
                    var r,
                        o,
                        a,
                        u,
                        h,
                        c,
                        d,
                        f,
                        m,
                        g,
                        y,
                        v,
                        x,
                        w,
                        k,
                        b,
                        M,
                        S,
                        T,
                        P,
                        _,
                        O,
                        I;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    (r = (function (t) {
                                        var e;
                                        if (
                                            (null == (e = null == t ? ht : s({}, t)).maxPoses &&
                                                (e.maxPoses = 1),
                                                e.maxPoses <= 0)
                                        )
                                            throw new Error(
                                                "Invalid maxPoses ".concat(
                                                    e.maxPoses,
                                                    ". Should be > 0.",
                                                ),
                                            );
                                        if (e.maxPoses > 1)
                                            throw new Error(
                                                "Multi-pose detection is not implemented yet. Please set maxPoses to 1.",
                                            );
                                        return e;
                                    })(e)),
                                    null == t
                                        ? (this.reset(), [2, []])
                                        : ((this.maxPoses = r.maxPoses),
                                            (this.timestamp =
                                                null != i
                                                    ? 1e3 * i
                                                    : q(t)
                                                        ? 1e6 * t.currentTime
                                                        : null),
                                            (o = F(t)),
                                            (a = n.tidy(function () {
                                                return n.cast(z(t), "float32");
                                            })),
                                            null != (u = this.regionOfInterest)
                                                ? [3, 2]
                                                : [4, this.detectPose(a)])
                                );
                            case 1:
                                if (0 === (h = l.sent()).length)
                                    return this.reset(), a.dispose(), [2, []];
                                (c = h[0]), (u = this.poseDetectionToRoi(c, o)), (l.label = 2);
                            case 2:
                                return [4, this.poseLandmarksByRoi(u, a)];
                            case 3:
                                return (
                                    (d = l.sent()),
                                    a.dispose(),
                                    null == d
                                        ? (this.reset(), [2, []])
                                        : ((f = d.landmarks),
                                            (m = d.auxiliaryLandmarks),
                                            (g = d.poseScore),
                                            (y = d.worldLandmarks),
                                            (v = d.segmentationMask),
                                            (x = this.poseLandmarkFiltering(f, m, y, o)),
                                            (w = x.actualLandmarksFiltered),
                                            (k = x.auxiliaryLandmarksFiltered),
                                            (b = x.actualWorldLandmarksFiltered),
                                            (M = this.poseLandmarksToRoi(k, o)),
                                            (this.regionOfInterest = M),
                                            (S =
                                                this.smoothSegmentation && null != v
                                                    ? this.poseSegmentationFiltering(v)
                                                    : v),
                                            null != (T = null != w ? j(w, o) : null) &&
                                            T.forEach(function (t, e) {
                                                t.name = p[e];
                                            }),
                                            null != (P = b) &&
                                            P.forEach(function (t, e) {
                                                t.name = p[e];
                                            }),
                                            (_ = { score: g, keypoints: T, keypoints3D: P }),
                                            null !== S &&
                                            ((O = n.tidy(function () {
                                                var t = n.expandDims(S, 2),
                                                    e = n.pad(t, [
                                                        [0, 0],
                                                        [0, 0],
                                                        [0, 1],
                                                    ]);
                                                return n.mirrorPad(
                                                    e,
                                                    [
                                                        [0, 0],
                                                        [0, 0],
                                                        [0, 2],
                                                    ],
                                                    "symmetric",
                                                );
                                            })),
                                                this.smoothSegmentation || n.dispose(S),
                                                (I = { maskValueToLabel: Pt, mask: new Tt(O) }),
                                                (_.segmentation = I)),
                                            [2, [_]])
                                );
                        }
                    });
                });
            }),
            (t.prototype.poseSegmentationFiltering = function (t) {
                var e = this.prevFilteredSegmentationMask;
                return (
                    0 === e.size
                        ? (this.prevFilteredSegmentationMask = t)
                        : ((this.prevFilteredSegmentationMask = X(e, t, St)), n.dispose(t)),
                    n.dispose(e),
                    this.prevFilteredSegmentationMask
                );
            }),
            (t.prototype.dispose = function () {
                this.detectorModel.dispose(),
                    this.landmarkModel.dispose(),
                    n.dispose([
                        this.anchorTensor.x,
                        this.anchorTensor.y,
                        this.anchorTensor.w,
                        this.anchorTensor.h,
                        this.prevFilteredSegmentationMask,
                    ]);
            }),
            (t.prototype.reset = function () {
                (this.regionOfInterest = null),
                    this.enableSegmentation &&
                    (n.dispose(this.prevFilteredSegmentationMask),
                        (this.prevFilteredSegmentationMask = n.tensor2d([], [0, 0]))),
                    (this.visibilitySmoothingFilterActual = null),
                    (this.visibilitySmoothingFilterAuxiliary = null),
                    (this.landmarksSmoothingFilterActual = null),
                    (this.landmarksSmoothingFilterAuxiliary = null);
            }),
            (t.prototype.detectPose = function (t) {
                return u(this, void 0, void 0, function () {
                    var e, i, r, o, a, s, u, h, c, p;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    (e = V(t, ft)),
                                    (i = e.imageTensor),
                                    (r = e.padding),
                                    (o = this.detectorModel.predict(i)),
                                    (a = N(o)),
                                    (s = a.boxes),
                                    [4, Y([(u = a.logits), s], this.anchorTensor, ct)]
                                );
                            case 1:
                                return 0 === (h = l.sent()).length
                                    ? (n.dispose([i, o, u, s]), [2, h])
                                    : [4, U(h, this.maxPoses, pt)];
                            case 2:
                                return (
                                    (c = l.sent()),
                                    (p = (function (t, e) {
                                        void 0 === t && (t = []);
                                        for (
                                            var n = e.left,
                                            i = e.top,
                                            r = e.left + e.right,
                                            o = e.top + e.bottom,
                                            a = 0;
                                            a < t.length;
                                            a++
                                        ) {
                                            var s = t[a],
                                                u = s.locationData.relativeBoundingBox,
                                                l = (u.xMin - n) / (1 - r),
                                                h = (u.yMin - i) / (1 - o),
                                                c = u.width / (1 - r),
                                                p = u.height / (1 - o);
                                            (u.xMin = l),
                                                (u.yMin = h),
                                                (u.width = c),
                                                (u.height = p),
                                                (u.xMax = l + c),
                                                (u.yMax = h + p);
                                            var d = s.locationData.relativeKeypoints;
                                            d &&
                                                d.forEach(function (t) {
                                                    var e = (t.x - n) / (1 - r),
                                                        a = (t.y - i) / (1 - o);
                                                    (t.x = e), (t.y = a);
                                                });
                                        }
                                        return t;
                                    })(c, r)),
                                    n.dispose([i, o, u, s]),
                                    [2, p]
                                );
                        }
                    });
                });
            }),
            (t.prototype.poseDetectionToRoi = function (t, e) {
                return (
                    0,
                    1,
                    J(
                        A(t, e, {
                            rotationVectorEndKeypointIndex: 1,
                            rotationVectorStartKeypointIndex: 0,
                            rotationVectorTargetAngleDegree: 90,
                        }),
                        e,
                        dt,
                    )
                );
            }),
            (t.prototype.poseLandmarksByRoi = function (t, e) {
                return u(this, void 0, void 0, function () {
                    var i, r, o, a, u, h, c, p, d, f, m, g, y, v;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                if (
                                    ((i = F(e)),
                                        (r = V(e, mt, t)),
                                        (o = r.imageTensor),
                                        (a = r.padding),
                                        (u = r.transformationMatrix),
                                        "lite" !== this.modelType &&
                                        "full" !== this.modelType &&
                                        "heavy" !== this.modelType)
                                )
                                    throw new Error(
                                        "Model type must be one of lite, full or heavy," +
                                        "but got ".concat(this.modelType),
                                    );
                                return (
                                    (h = [
                                        "ld_3d",
                                        "output_poseflag",
                                        "activation_heatmap",
                                        "world_3d",
                                    ]),
                                    this.enableSegmentation && h.push("activation_segmentation"),
                                    (c = this.landmarkModel.execute(o, h)),
                                    [4, this.tensorsToPoseLandmarksAndSegmentation(c)]
                                );
                            case 1:
                                return null == (p = l.sent())
                                    ? (n.dispose(c), n.dispose(o), [2, null])
                                    : ((d = p.landmarks),
                                        (f = p.auxiliaryLandmarks),
                                        (m = p.poseScore),
                                        (g = p.worldLandmarks),
                                        (y = p.segmentationMask),
                                        [
                                            4,
                                            this.poseLandmarksAndSegmentationInverseProjection(
                                                i,
                                                t,
                                                a,
                                                u,
                                                d,
                                                f,
                                                g,
                                                y,
                                            ),
                                        ]);
                            case 2:
                                return (
                                    (v = l.sent()),
                                    n.dispose(c),
                                    n.dispose(o),
                                    [2, s({ poseScore: m }, v)]
                                );
                        }
                    });
                });
            }),
            (t.prototype.poseLandmarksAndSegmentationInverseProjection = function (
                t,
                e,
                i,
                r,
                o,
                a,
                h,
                c,
            ) {
                return u(this, void 0, void 0, function () {
                    var u, p, d, f, m, g;
                    return l(this, function (l) {
                        return (
                            (u = G(o, i)),
                            (p = G(a, i)),
                            (d = L(u, e)),
                            (f = L(p, e)),
                            (m = (function (t, e) {
                                for (var n = [], i = 0, r = t; i < r.length; i++) {
                                    var o = r[i],
                                        a = o.x,
                                        u = o.y,
                                        l = e.rotation,
                                        h = Math.cos(l) * a - Math.sin(l) * u,
                                        c = Math.sin(l) * a + Math.cos(l) * u,
                                        p = s({}, o);
                                    (p.x = h), (p.y = c), n.push(p);
                                }
                                return n;
                            })(h, e)),
                            (g = null),
                            this.enableSegmentation &&
                            ((g = n.tidy(function () {
                                var e = c.shape,
                                    i = e[0],
                                    o = e[1],
                                    a = (function (t) {
                                        var e = C(new Array(16).fill(0));
                                        (e[0][0] = R(t, 0, 0)),
                                            (e[1][0] = -R(t, 0, 1)),
                                            (e[2][0] = R(t, 0, 2)),
                                            (e[3][0] = -R(t, 0, 3)),
                                            (e[0][2] = R(t, 2, 0)),
                                            (e[1][2] = -R(t, 2, 1)),
                                            (e[2][2] = R(t, 2, 2)),
                                            (e[3][2] = -R(t, 2, 3)),
                                            (e[0][1] = -R(t, 1, 0)),
                                            (e[1][1] = R(t, 1, 1)),
                                            (e[2][1] = -R(t, 1, 2)),
                                            (e[3][1] = R(t, 1, 3)),
                                            (e[0][3] = -R(t, 3, 0)),
                                            (e[1][3] = R(t, 3, 1)),
                                            (e[2][3] = -R(t, 3, 2)),
                                            (e[3][3] = R(t, 3, 3));
                                        for (
                                            var n =
                                                t[0][0] * e[0][0] +
                                                t[1][0] * e[0][1] +
                                                t[2][0] * e[0][2] +
                                                t[3][0] * e[0][3],
                                            i = 0;
                                            i < e.length;
                                            i++
                                        )
                                            for (var r = 0; r < e.length; r++) e[i][r] /= n;
                                        return e;
                                    })(r),
                                    s = n.tensor2d(O(a, { width: o, height: i }, t), [1, 8]),
                                    u = [1, i, o, 1];
                                return n.squeeze(
                                    n.image.transform(
                                        n.reshape(c, u),
                                        s,
                                        "bilinear",
                                        "constant",
                                        0,
                                        [t.height, t.width],
                                    ),
                                    [0, 3],
                                );
                            })),
                                n.dispose(c)),
                            [
                                2,
                                {
                                    landmarks: d,
                                    auxiliaryLandmarks: f,
                                    worldLandmarks: m,
                                    segmentationMask: g,
                                },
                            ]
                        );
                    });
                });
            }),
            (t.prototype.tensorsToPoseLandmarksAndSegmentation = function (t) {
                return u(this, void 0, void 0, function () {
                    var e, i, r, o, a, u, h, c, p, d, f, m, g;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    (e = t[0]),
                                    (i = t[1]),
                                    (r = t[2]),
                                    (o = t[3]),
                                    (a = this.enableSegmentation ? t[4] : null),
                                    [4, i.data()]
                                );
                            case 1:
                                return (u = l.sent()[0]) < 0.5 ? [2, null] : [4, $(e, gt)];
                            case 2:
                                return [4, H(l.sent(), r, vt)];
                            case 3:
                                return (
                                    (h = l.sent()),
                                    (c = h.slice(0, 33)),
                                    (p = h.slice(33, 35)),
                                    [4, $(o, yt)]
                                );
                            case 4:
                                return (
                                    (d = l.sent()),
                                    (f = d.slice(0, 33)),
                                    (m = (function (t, e, n) {
                                        void 0 === n && (n = !0);
                                        for (var i = [], r = 0; r < t.length; r++) {
                                            var o = s({}, e[r]);
                                            n && (o.score = t[r].score), i.push(o);
                                        }
                                        return i;
                                    })(c, f, !0)),
                                    (g = this.enableSegmentation
                                        ? (function (t, e, i) {
                                            return n.tidy(function () {
                                                var r = n.squeeze(t, [0]),
                                                    o = r.shape[2];
                                                if (1 === o) {
                                                    var a = r;
                                                    switch (e.activation) {
                                                        case "none":
                                                            break;
                                                        case "sigmoid":
                                                            a = n.sigmoid(a);
                                                            break;
                                                        case "softmax":
                                                            throw new Error(
                                                                "Softmax activation requires two channels.",
                                                            );
                                                        default:
                                                            throw new Error(
                                                                "Activation not supported (".concat(
                                                                    e.activation,
                                                                    ")",
                                                                ),
                                                            );
                                                    }
                                                    var s = i
                                                        ? n.image.resizeBilinear(a, [i.height, i.width])
                                                        : a;
                                                    return n.squeeze(s, [2]);
                                                }
                                                throw new Error(
                                                    "Unsupported number of tensor channels ".concat(o),
                                                );
                                            });
                                        })(a, Mt)
                                        : null),
                                    [
                                        2,
                                        {
                                            landmarks: c,
                                            auxiliaryLandmarks: p,
                                            poseScore: u,
                                            worldLandmarks: m,
                                            segmentationMask: g,
                                        },
                                    ]
                                );
                        }
                    });
                });
            }),
            (t.prototype.poseLandmarksToRoi = function (t, e) {
                return J(
                    A(K(t), e, {
                        rotationVectorStartKeypointIndex: 0,
                        rotationVectorEndKeypointIndex: 1,
                        rotationVectorTargetAngleDegree: 90,
                    }),
                    e,
                    dt,
                );
            }),
            (t.prototype.poseLandmarkFiltering = function (t, e, n, i) {
                var r, o, a;
                if (null != this.timestamp && this.enableSmoothing) {
                    var s = A(K(e), i, {
                        rotationVectorEndKeypointIndex: 0,
                        rotationVectorStartKeypointIndex: 1,
                        rotationVectorTargetAngleDegree: 90,
                    });
                    null == this.visibilitySmoothingFilterActual &&
                        (this.visibilitySmoothingFilterActual = new st(xt)),
                        (r = this.visibilitySmoothingFilterActual.apply(t)),
                        null == this.visibilitySmoothingFilterAuxiliary &&
                        (this.visibilitySmoothingFilterAuxiliary = new st(xt)),
                        (o = this.visibilitySmoothingFilterAuxiliary.apply(e)),
                        (a = this.visibilitySmoothingFilterActual.apply(n)),
                        null == this.landmarksSmoothingFilterActual &&
                        (this.landmarksSmoothingFilterActual = new at(wt)),
                        (r = this.landmarksSmoothingFilterActual.apply(
                            r,
                            this.timestamp,
                            i,
                            !0,
                            s,
                        )),
                        null == this.landmarksSmoothingFilterAuxiliary &&
                        (this.landmarksSmoothingFilterAuxiliary = new at(kt)),
                        (o = this.landmarksSmoothingFilterAuxiliary.apply(
                            o,
                            this.timestamp,
                            i,
                            !0,
                            s,
                        )),
                        null == this.worldLandmarksSmoothingFilterActual &&
                        (this.worldLandmarksSmoothingFilterActual = new at(bt)),
                        (a = this.worldLandmarksSmoothingFilterActual.apply(
                            n,
                            this.timestamp,
                        ));
                } else (r = t), (o = e), (a = n);
                return {
                    actualLandmarksFiltered: r,
                    auxiliaryLandmarksFiltered: o,
                    actualWorldLandmarksFiltered: a,
                };
            }),
            t
        );
    })();
    function _t(t) {
        return u(this, void 0, void 0, function () {
            var e, n, r, o, a, u;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (
                            (e = (function (t) {
                                var e = s({}, null == t ? lt : t);
                                if (
                                    (null == e.enableSmoothing &&
                                        (e.enableSmoothing = lt.enableSmoothing),
                                        null == e.enableSegmentation &&
                                        (e.enableSegmentation = lt.enableSegmentation),
                                        null == e.smoothSegmentation &&
                                        (e.smoothSegmentation = lt.smoothSegmentation),
                                        null == e.modelType && (e.modelType = lt.modelType),
                                        null == e.detectorModelUrl &&
                                        (e.detectorModelUrl = lt.detectorModelUrl),
                                        null == e.landmarkModelUrl)
                                )
                                    switch (e.modelType) {
                                        case "lite":
                                            e.landmarkModelUrl =
                                                "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";
                                            break;
                                        case "heavy":
                                            e.landmarkModelUrl =
                                                "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";
                                            break;
                                        case "full":
                                        default:
                                            e.landmarkModelUrl =
                                                "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2";
                                    }
                                return e;
                            })(t)),
                            (n =
                                "string" == typeof e.detectorModelUrl &&
                                e.detectorModelUrl.indexOf("https://tfhub.dev") > -1),
                            (r =
                                "string" == typeof e.landmarkModelUrl &&
                                e.landmarkModelUrl.indexOf("https://tfhub.dev") > -1),
                            [
                                4,
                                Promise.all([
                                    i.loadGraphModel(e.detectorModelUrl, { fromTFHub: n }),
                                    i.loadGraphModel(e.landmarkModelUrl, { fromTFHub: r }),
                                ]),
                            ]
                        );
                    case 1:
                        return (
                            (o = l.sent()),
                            (a = o[0]),
                            (u = o[1]),
                            [
                                2,
                                new Ft(
                                    a,
                                    u,
                                    e.enableSmoothing,
                                    e.enableSegmentation,
                                    e.smoothSegmentation,
                                    e.modelType,
                                ),
                            ]
                        );
                }
            });
        });
    }
    var zt,
        Ot,
        It = (function () {
            function t(t) {
                !(function (t) {
                    if (t.maxTracks < 1)
                        throw new Error(
                            "Must specify 'maxTracks' to be at least 1, but " +
                            "encountered ".concat(t.maxTracks),
                        );
                    if (t.maxAge <= 0)
                        throw new Error(
                            "Must specify 'maxAge' to be positive, but " +
                            "encountered ".concat(t.maxAge),
                        );
                    if (void 0 !== t.keypointTrackerParams) {
                        if (
                            t.keypointTrackerParams.keypointConfidenceThreshold < 0 ||
                            t.keypointTrackerParams.keypointConfidenceThreshold > 1
                        )
                            throw new Error(
                                "Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered " +
                                "".concat(
                                    t.keypointTrackerParams.keypointConfidenceThreshold,
                                ),
                            );
                        if (t.keypointTrackerParams.minNumberOfKeypoints < 1)
                            throw new Error(
                                "Must specify 'minNumberOfKeypoints' to be at least 1, but " +
                                "encountered ".concat(
                                    t.keypointTrackerParams.minNumberOfKeypoints,
                                ),
                            );
                        for (
                            var e = 0, n = t.keypointTrackerParams.keypointFalloff;
                            e < n.length;
                            e++
                        ) {
                            var i = n[e];
                            if (i <= 0)
                                throw new Error(
                                    "Must specify each keypoint falloff parameterto be positive " +
                                    "but encountered ".concat(i),
                                );
                        }
                    }
                })(t),
                    (this.tracks = []),
                    (this.maxTracks = t.maxTracks),
                    (this.maxAge = 1e3 * t.maxAge),
                    (this.minSimilarity = t.minSimilarity),
                    (this.nextID = 1);
            }
            return (
                (t.prototype.apply = function (t, e) {
                    this.filterOldTracks(e);
                    var n = this.computeSimilarity(t);
                    return this.assignTracks(t, n, e), this.updateTracks(e), t;
                }),
                (t.prototype.getTracks = function () {
                    return this.tracks.slice();
                }),
                (t.prototype.getTrackIDs = function () {
                    return new Set(
                        this.tracks.map(function (t) {
                            return t.id;
                        }),
                    );
                }),
                (t.prototype.filterOldTracks = function (t) {
                    var e = this;
                    this.tracks = this.tracks.filter(function (n) {
                        return t - n.lastTimestamp <= e.maxAge;
                    });
                }),
                (t.prototype.assignTracks = function (t, e, n) {
                    for (
                        var i = Array.from(Array(e[0].length).keys()),
                        r = [],
                        o = 0,
                        a = Array.from(Array(t.length).keys());
                        o < a.length;
                        o++
                    ) {
                        var s = a[o];
                        if (0 !== i.length) {
                            for (var u = -1, l = -1, h = 0, c = i; h < c.length; h++) {
                                var p = c[h],
                                    d = e[s][p];
                                d >= this.minSimilarity && d > l && ((u = p), (l = d));
                            }
                            if (u >= 0) {
                                var f = this.tracks[u];
                                (f = Object.assign(f, this.createTrack(t[s], n, f.id))),
                                    (t[s].id = f.id);
                                var m = i.indexOf(u);
                                i.splice(m, 1);
                            } else r.push(s);
                        } else r.push(s);
                    }
                    for (var g = 0, y = r; g < y.length; g++) {
                        s = y[g];
                        var v = this.createTrack(t[s], n);
                        this.tracks.push(v), (t[s].id = v.id);
                    }
                }),
                (t.prototype.updateTracks = function (t) {
                    this.tracks.sort(function (t, e) {
                        return e.lastTimestamp - t.lastTimestamp;
                    }),
                        (this.tracks = this.tracks.slice(0, this.maxTracks));
                }),
                (t.prototype.createTrack = function (t, e, n) {
                    var i = {
                        id: n || this.nextTrackID(),
                        lastTimestamp: e,
                        keypoints: h([], t.keypoints, !0).map(function (t) {
                            return s({}, t);
                        }),
                    };
                    return void 0 !== t.box && (i.box = s({}, t.box)), i;
                }),
                (t.prototype.nextTrackID = function () {
                    var t = this.nextID;
                    return (this.nextID += 1), t;
                }),
                (t.prototype.remove = function () {
                    for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                    this.tracks = this.tracks.filter(function (e) {
                        return !t.includes(e.id);
                    });
                }),
                (t.prototype.reset = function () {
                    this.tracks = [];
                }),
                t
            );
        })(),
        At = (function (t) {
            function e(e) {
                return t.call(this, e) || this;
            }
            return (
                a(e, t),
                (e.prototype.computeSimilarity = function (t) {
                    var e = this;
                    return 0 === t.length || 0 === this.tracks.length
                        ? [[]]
                        : t.map(function (t) {
                            return e.tracks.map(function (n) {
                                return e.iou(t, n);
                            });
                        });
                }),
                (e.prototype.iou = function (t, e) {
                    var n = Math.max(t.box.xMin, e.box.xMin),
                        i = Math.max(t.box.yMin, e.box.yMin),
                        r = Math.min(t.box.xMax, e.box.xMax),
                        o = Math.min(t.box.yMax, e.box.yMax);
                    if (n >= r || i >= o) return 0;
                    var a = (r - n) * (o - i);
                    return (
                        a / (t.box.width * t.box.height + e.box.width * e.box.height - a)
                    );
                }),
                e
            );
        })(It),
        Ct = (function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                return (
                    (n.keypointThreshold =
                        e.keypointTrackerParams.keypointConfidenceThreshold),
                    (n.keypointFalloff = e.keypointTrackerParams.keypointFalloff),
                    (n.minNumKeyoints = e.keypointTrackerParams.minNumberOfKeypoints),
                    n
                );
            }
            return (
                a(e, t),
                (e.prototype.computeSimilarity = function (t) {
                    if (0 === t.length || 0 === this.tracks.length) return [[]];
                    for (var e = [], n = 0, i = t; n < i.length; n++) {
                        for (
                            var r = i[n], o = [], a = 0, s = this.tracks;
                            a < s.length;
                            a++
                        ) {
                            var u = s[a];
                            o.push(this.oks(r, u));
                        }
                        e.push(o);
                    }
                    return e;
                }),
                (e.prototype.oks = function (t, e) {
                    for (
                        var n = this.area(e.keypoints) + 1e-6, i = 0, r = 0, o = 0;
                        o < t.keypoints.length;
                        ++o
                    ) {
                        var a = t.keypoints[o],
                            s = e.keypoints[o];
                        if (
                            !(
                                a.score < this.keypointThreshold ||
                                s.score < this.keypointThreshold
                            )
                        ) {
                            r += 1;
                            var u = Math.pow(a.x - s.x, 2) + Math.pow(a.y - s.y, 2),
                                l = 2 * this.keypointFalloff[o];
                            i += Math.exp((-1 * u) / (2 * n * Math.pow(l, 2)));
                        }
                    }
                    return r < this.minNumKeyoints ? 0 : i / r;
                }),
                (e.prototype.area = function (t) {
                    var e = this,
                        n = t.filter(function (t) {
                            return t.score > e.keypointThreshold;
                        }),
                        i = Math.min.apply(
                            Math,
                            h(
                                [1],
                                n.map(function (t) {
                                    return t.x;
                                }),
                                !1,
                            ),
                        ),
                        r = Math.max.apply(
                            Math,
                            h(
                                [0],
                                n.map(function (t) {
                                    return t.x;
                                }),
                                !1,
                            ),
                        ),
                        o = Math.min.apply(
                            Math,
                            h(
                                [1],
                                n.map(function (t) {
                                    return t.y;
                                }),
                                !1,
                            ),
                        );
                    return (
                        (r - i) *
                        (Math.max.apply(
                            Math,
                            h(
                                [0],
                                n.map(function (t) {
                                    return t.y;
                                }),
                                !1,
                            ),
                        ) -
                            o)
                    );
                }),
                e
            );
        })(It);
    function Et(e) {
        switch (e) {
            case t.SupportedModels.BlazePose:
                return p.reduce(function (t, e, n) {
                    return (t[e] = n), t;
                }, {});
            case t.SupportedModels.PoseNet:
            case t.SupportedModels.MoveNet:
                return c.reduce(function (t, e, n) {
                    return (t[e] = n), t;
                }, {});
            default:
                throw new Error("Model ".concat(e, " is not supported."));
        }
    }
    ((zt = t.TrackerType || (t.TrackerType = {})).Keypoint = "keypoint"),
        (zt.BoundingBox = "boundingBox"),
        ((Ot = t.SupportedModels || (t.SupportedModels = {})).MoveNet = "MoveNet"),
        (Ot.BlazePose = "BlazePose"),
        (Ot.PoseNet = "PoseNet");
    var Rt = Object.freeze({
        __proto__: null,
        getKeypointIndexBySide: function (e) {
            switch (e) {
                case t.SupportedModels.BlazePose:
                    return d;
                case t.SupportedModels.PoseNet:
                case t.SupportedModels.MoveNet:
                    return f;
                default:
                    throw new Error("Model ".concat(e, " is not supported."));
            }
        },
        getAdjacentPairs: function (e) {
            switch (e) {
                case t.SupportedModels.BlazePose:
                    return g;
                case t.SupportedModels.PoseNet:
                case t.SupportedModels.MoveNet:
                    return m;
                default:
                    throw new Error("Model ".concat(e, " is not supported."));
            }
        },
        getKeypointIndexByName: Et,
    }),
        Lt = ["SinglePose.Lightning", "SinglePose.Thunder", "MultiPose.Lightning"],
        Bt = { modelType: "SinglePose.Lightning", enableSmoothing: !0 },
        Vt = {},
        Dt = {
            frequency: 30,
            minCutOff: 2.5,
            beta: 300,
            derivateCutOff: 2.5,
            thresholdCutOff: 0.5,
            thresholdBeta: 5,
            disableValueScaling: !0,
        },
        Nt = {
            maxTracks: 18,
            maxAge: 1e3,
            minSimilarity: 0.2,
            keypointTrackerParams: {
                keypointConfidenceThreshold: 0.3,
                keypointFalloff: [
                    0.026, 0.025, 0.025, 0.035, 0.035, 0.079, 0.079, 0.072, 0.072, 0.062,
                    0.062, 0.107, 0.107, 0.087, 0.087, 0.089, 0.089,
                ],
                minNumberOfKeypoints: 4,
            },
        },
        qt = { maxTracks: 18, maxAge: 1e3, minSimilarity: 0.15, trackerParams: {} };
    function Kt(t, e, n, i) {
        for (var r = {}, o = 0, a = c; o < a.length; o++) {
            var s = a[o];
            r[s] = [e[n[s]].y * i.height, e[n[s]].x * i.width];
        }
        if (
            (function (t, e) {
                return (
                    (t[e.left_hip].score > 0.2 || t[e.right_hip].score > 0.2) &&
                    (t[e.left_shoulder].score > 0.2 || t[e.right_shoulder].score > 0.2)
                );
            })(e, n)
        ) {
            var u = (r.left_hip[0] + r.right_hip[0]) / 2,
                l = (r.left_hip[1] + r.right_hip[1]) / 2,
                h = (function (t, e, n, i, r) {
                    for (
                        var o = [
                            "left_shoulder",
                            "right_shoulder",
                            "left_hip",
                            "right_hip",
                        ],
                        a = 0,
                        s = 0,
                        u = 0;
                        u < o.length;
                        u++
                    ) {
                        (d = Math.abs(i - n[o[u]][0])) > a && (a = d),
                            (f = Math.abs(r - n[o[u]][1])) > s && (s = f);
                    }
                    for (var l = 0, h = 0, c = 0, p = Object.keys(n); c < p.length; c++) {
                        var d,
                            f,
                            m = p[c];
                        if (!(t[e[m]].score < 0.2))
                            (d = Math.abs(i - n[m][0])) > l && (l = d),
                                (f = Math.abs(r - n[m][1])) > h && (h = f);
                    }
                    return [a, s, l, h];
                })(e, n, r, u, l),
                p = h[0],
                d = h[1],
                f = h[2],
                m = h[3],
                g = Math.max(1.9 * d, 1.9 * p, 1.2 * f, 1.2 * m),
                y = [
                    u - (g = Math.min(g, Math.max(l, i.width - l, u, i.height - u))),
                    l - g,
                ];
            if (g > Math.max(i.width, i.height) / 2) return Ut(null == t, i);
            var v = 2 * g;
            return {
                yMin: y[0] / i.height,
                xMin: y[1] / i.width,
                yMax: (y[0] + v) / i.height,
                xMax: (y[1] + v) / i.width,
                height: (y[0] + v) / i.height - y[0] / i.height,
                width: (y[1] + v) / i.width - y[1] / i.width,
            };
        }
        return Ut(null == t, i);
    }
    function Ut(t, e) {
        var n, i, r, o;
        return (
            t
                ? e.width > e.height
                    ? ((n = 1),
                        (i = e.height / e.width),
                        (r = 0),
                        (o = (e.width / 2 - e.height / 2) / e.width))
                    : ((n = e.width / e.height),
                        (i = 1),
                        (r = (e.height / 2 - e.width / 2) / e.height),
                        (o = 0))
                : e.width > e.height
                    ? ((n = e.width / e.height),
                        (i = 1),
                        (r = (e.height / 2 - e.width / 2) / e.height),
                        (o = 0))
                    : ((n = 1),
                        (i = e.height / e.width),
                        (r = 0),
                        (o = (e.width / 2 - e.height / 2) / e.width)),
            { yMin: r, xMin: o, yMax: r + n, xMax: o + i, height: n, width: i }
        );
    }
    function jt(e) {
        var n,
            i = null == e ? Bt : s({}, e);
        if (null == i.modelType) i.modelType = "SinglePose.Lightning";
        else if (Lt.indexOf(i.modelType) < 0)
            throw new Error(
                "Invalid architecture ".concat(i.modelType, ". ") +
                "Should be one of ".concat(Lt),
            );
        if (
            (null == i.enableSmoothing && (i.enableSmoothing = !0),
                null != i.minPoseScore && (i.minPoseScore < 0 || i.minPoseScore > 1))
        )
            throw new Error("minPoseScore should be between 0.0 and 1.0");
        if (
            null != i.multiPoseMaxDimension &&
            (i.multiPoseMaxDimension % 32 != 0 || i.multiPoseMaxDimension < 32)
        )
            throw new Error(
                "multiPoseMaxDimension must be a multiple of 32 and higher than 0",
            );
        if (
            ("MultiPose.Lightning" === i.modelType &&
                null == i.enableTracking &&
                (i.enableTracking = !0),
                "MultiPose.Lightning" === i.modelType && !0 === i.enableTracking)
        )
            if (
                (null == i.trackerType && (i.trackerType = t.TrackerType.BoundingBox),
                    i.trackerType === t.TrackerType.Keypoint)
            )
                null != i.trackerConfig
                    ? (i.trackerConfig = (function (t) {
                        var e = Ht(Nt, t);
                        (e.keypointTrackerParams = s({}, Nt.keypointTrackerParams)),
                            null != t.keypointTrackerParams &&
                            (null !=
                                t.keypointTrackerParams.keypointConfidenceThreshold &&
                                (e.keypointTrackerParams.keypointConfidenceThreshold =
                                    t.keypointTrackerParams.keypointConfidenceThreshold),
                                null != t.keypointTrackerParams.keypointFalloff &&
                                (e.keypointTrackerParams.keypointFalloff =
                                    t.keypointTrackerParams.keypointFalloff),
                                null != t.keypointTrackerParams.minNumberOfKeypoints &&
                                (e.keypointTrackerParams.minNumberOfKeypoints =
                                    t.keypointTrackerParams.minNumberOfKeypoints));
                        return e;
                    })(i.trackerConfig))
                    : (i.trackerConfig = Nt);
            else {
                if (i.trackerType !== t.TrackerType.BoundingBox)
                    throw new Error("Tracker type not supported by MoveNet");
                null != i.trackerConfig
                    ? (i.trackerConfig = ((n = i.trackerConfig), Ht(qt, n)))
                    : (i.trackerConfig = qt);
            }
        return i;
    }
    function Ht(t, e) {
        var n = {
            maxTracks: t.maxTracks,
            maxAge: t.maxAge,
            minSimilarity: t.minSimilarity,
        };
        return (
            null != e.maxTracks && (n.maxTracks = e.maxTracks),
            null != e.maxAge && (n.maxAge = e.maxAge),
            null != e.minSimilarity && (n.minSimilarity = e.minSimilarity),
            n
        );
    }
    var Gt = (function () {
        function e(e, n) {
            (this.moveNetModel = e),
                (this.modelInputResolution = { height: 0, width: 0 }),
                (this.keypointIndexByName = Et(t.SupportedModels.MoveNet)),
                "SinglePose.Lightning" === n.modelType
                    ? ((this.modelInputResolution.width = 192),
                        (this.modelInputResolution.height = 192))
                    : "SinglePose.Thunder" === n.modelType &&
                    ((this.modelInputResolution.width = 256),
                        (this.modelInputResolution.height = 256)),
                (this.multiPoseModel = "MultiPose.Lightning" === n.modelType),
                this.multiPoseModel ||
                ((this.keypointFilter = new it(Dt)),
                    (this.cropRegionFilterYMin = new et(0.9)),
                    (this.cropRegionFilterXMin = new et(0.9)),
                    (this.cropRegionFilterYMax = new et(0.9)),
                    (this.cropRegionFilterXMax = new et(0.9))),
                (this.enableSmoothing = n.enableSmoothing),
                n.minPoseScore
                    ? (this.minPoseScore = n.minPoseScore)
                    : (this.minPoseScore = 0.25),
                n.multiPoseMaxDimension
                    ? (this.multiPoseMaxDimension = n.multiPoseMaxDimension)
                    : (this.multiPoseMaxDimension = 256),
                (this.enableTracking = n.enableTracking),
                this.multiPoseModel &&
                this.enableTracking &&
                (n.trackerType === t.TrackerType.Keypoint
                    ? (this.tracker = new Ct(n.trackerConfig))
                    : n.trackerType === t.TrackerType.BoundingBox &&
                    (this.tracker = new At(n.trackerConfig)),
                    this.enableSmoothing && (this.keypointFilterMap = new Map()));
        }
        return (
            (e.prototype.runSinglePersonPoseModel = function (t) {
                return u(this, void 0, void 0, function () {
                    var e, i, r, o, a;
                    return l(this, function (s) {
                        switch (s.label) {
                            case 0:
                                if (
                                    4 !== (e = this.moveNetModel.execute(t)).shape.length ||
                                    1 !== e.shape[0] ||
                                    1 !== e.shape[1] ||
                                    17 !== e.shape[2] ||
                                    3 !== e.shape[3]
                                )
                                    throw (
                                        (e.dispose(),
                                            new Error(
                                                "Unexpected output shape from model: [".concat(
                                                    e.shape,
                                                    "]",
                                                ),
                                            ))
                                    );
                                return "webgpu" === n.getBackend()
                                    ? [3, 1]
                                    : ((i = e.dataSync()), [3, 3]);
                            case 1:
                                return [4, e.data()];
                            case 2:
                                (i = s.sent()), (s.label = 3);
                            case 3:
                                for (
                                    e.dispose(), r = { keypoints: [], score: 0 }, o = 0, a = 0;
                                    a < 17;
                                    ++a
                                )
                                    (r.keypoints[a] = {
                                        y: i[3 * a],
                                        x: i[3 * a + 1],
                                        score: i[3 * a + 2],
                                    }),
                                        r.keypoints[a].score > 0.2 &&
                                        (++o, (r.score += r.keypoints[a].score));
                                return o > 0 && (r.score /= o), [2, r];
                        }
                    });
                });
            }),
            (e.prototype.runMultiPersonPoseModel = function (t) {
                return u(this, void 0, void 0, function () {
                    var e, i, r, o, a, s, u, h;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                if (
                                    3 !== (e = this.moveNetModel.execute(t)).shape.length ||
                                    1 !== e.shape[0] ||
                                    56 !== e.shape[2]
                                )
                                    throw (
                                        (e.dispose(),
                                            new Error(
                                                "Unexpected output shape from model: [".concat(
                                                    e.shape,
                                                    "]",
                                                ),
                                            ))
                                    );
                                return "webgpu" === n.getBackend()
                                    ? [3, 1]
                                    : ((i = e.dataSync()), [3, 3]);
                            case 1:
                                return [4, e.data()];
                            case 2:
                                (i = l.sent()), (l.label = 3);
                            case 3:
                                for (e.dispose(), r = [], o = i.length / 56, a = 0; a < o; ++a)
                                    for (
                                        r[a] = { keypoints: [] },
                                        s = 56 * a + 51,
                                        r[a].box = {
                                            yMin: i[s],
                                            xMin: i[s + 1],
                                            yMax: i[s + 2],
                                            xMax: i[s + 3],
                                            width: i[s + 3] - i[s + 1],
                                            height: i[s + 2] - i[s],
                                        },
                                        u = 56 * a + 55,
                                        r[a].score = i[u],
                                        r[a].keypoints = [],
                                        h = 0;
                                        h < 17;
                                        ++h
                                    )
                                        r[a].keypoints[h] = {
                                            y: i[56 * a + 3 * h],
                                            x: i[56 * a + 3 * h + 1],
                                            score: i[56 * a + 3 * h + 2],
                                        };
                                return [2, r];
                        }
                    });
                });
            }),
            (e.prototype.estimatePoses = function (t, e, i) {
                return (
                    void 0 === e && (e = Vt),
                    u(this, void 0, void 0, function () {
                        var r, o, a, u, h, p;
                        return l(this, function (l) {
                            switch (l.label) {
                                case 0:
                                    return (
                                        (e = (function (t) {
                                            return null == t ? Vt : s({}, t);
                                        })(e)),
                                        null == t
                                            ? (this.reset(), [2, []])
                                            : (null == i
                                                ? q(t) && (i = 1e6 * t.currentTime)
                                                : (i *= 1e3),
                                                (r = z(t)),
                                                (o = F(r)),
                                                (a = n.expandDims(r, 0)),
                                                t instanceof n.Tensor || r.dispose(),
                                                (u = []),
                                                this.multiPoseModel
                                                    ? [3, 2]
                                                    : [4, this.estimateSinglePose(a, o, i)])
                                    );
                                case 1:
                                    return (u = l.sent()), [3, 4];
                                case 2:
                                    return [4, this.estimateMultiplePoses(a, o, i)];
                                case 3:
                                    (u = l.sent()), (l.label = 4);
                                case 4:
                                    for (h = 0; h < u.length; ++h)
                                        for (p = 0; p < u[h].keypoints.length; ++p)
                                            (u[h].keypoints[p].name = c[p]),
                                                (u[h].keypoints[p].y *= o.height),
                                                (u[h].keypoints[p].x *= o.width);
                                    return [2, u];
                            }
                        });
                    })
                );
            }),
            (e.prototype.estimateSinglePose = function (t, e, i) {
                return u(this, void 0, void 0, function () {
                    var r,
                        o,
                        a,
                        s,
                        u = this;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    this.cropRegion ||
                                    (this.cropRegion = Ut(null == this.cropRegion, e)),
                                    (r = n.tidy(function () {
                                        var e = n.tensor2d([
                                            [
                                                u.cropRegion.yMin,
                                                u.cropRegion.xMin,
                                                u.cropRegion.yMax,
                                                u.cropRegion.xMax,
                                            ],
                                        ]),
                                            i = n.zeros([1], "int32"),
                                            r = [
                                                u.modelInputResolution.height,
                                                u.modelInputResolution.width,
                                            ];
                                        return n.cast(
                                            n.image.cropAndResize(t, e, i, r, "bilinear", 0),
                                            "int32",
                                        );
                                    })),
                                    t.dispose(),
                                    [4, this.runSinglePersonPoseModel(r)]
                                );
                            case 1:
                                if (((o = l.sent()), r.dispose(), o.score < this.minPoseScore))
                                    return this.reset(), [2, []];
                                for (a = 0; a < o.keypoints.length; ++a)
                                    (o.keypoints[a].y =
                                        this.cropRegion.yMin +
                                        o.keypoints[a].y * this.cropRegion.height),
                                        (o.keypoints[a].x =
                                            this.cropRegion.xMin +
                                            o.keypoints[a].x * this.cropRegion.width);
                                return (
                                    null != i &&
                                    this.enableSmoothing &&
                                    (o.keypoints = this.keypointFilter.apply(
                                        o.keypoints,
                                        i,
                                        1,
                                    )),
                                    (s = Kt(
                                        this.cropRegion,
                                        o.keypoints,
                                        this.keypointIndexByName,
                                        e,
                                    )),
                                    (this.cropRegion = this.filterCropRegion(s)),
                                    [2, [o]]
                                );
                        }
                    });
                });
            }),
            (e.prototype.estimateMultiplePoses = function (t, e, i) {
                return u(this, void 0, void 0, function () {
                    var r,
                        o,
                        a,
                        s,
                        u,
                        h,
                        c,
                        p,
                        d,
                        f,
                        m,
                        g = this;
                    return l(this, function (l) {
                        switch (l.label) {
                            case 0:
                                return (
                                    32,
                                    e.width > e.height
                                        ? ((o = this.multiPoseMaxDimension),
                                            (a = Math.round(
                                                (this.multiPoseMaxDimension * e.height) / e.width,
                                            )),
                                            (r = n.image.resizeBilinear(t, [a, o])),
                                            (u = o),
                                            (h = 32 * Math.ceil(a / 32)),
                                            (s = n.pad(r, [
                                                [0, 0],
                                                [0, h - a],
                                                [0, 0],
                                                [0, 0],
                                            ])))
                                        : ((o = Math.round(
                                            (this.multiPoseMaxDimension * e.width) / e.height,
                                        )),
                                            (a = this.multiPoseMaxDimension),
                                            (r = n.image.resizeBilinear(t, [a, o])),
                                            (u = 32 * Math.ceil(o / 32)),
                                            (h = a),
                                            (s = n.pad(r, [
                                                [0, 0],
                                                [0, 0],
                                                [0, u - o],
                                                [0, 0],
                                            ]))),
                                    r.dispose(),
                                    t.dispose(),
                                    (c = n.cast(s, "int32")),
                                    s.dispose(),
                                    [4, this.runMultiPersonPoseModel(c)]
                                );
                            case 1:
                                for (
                                    p = l.sent(),
                                    c.dispose(),
                                    p = p.filter(function (t) {
                                        return t.score >= g.minPoseScore;
                                    }),
                                    f = 0;
                                    f < p.length;
                                    ++f
                                )
                                    for (d = 0; d < p[f].keypoints.length; ++d)
                                        (p[f].keypoints[d].y *= h / a),
                                            (p[f].keypoints[d].x *= u / o);
                                if (
                                    this.enableTracking &&
                                    (this.tracker.apply(p, i), this.enableSmoothing)
                                ) {
                                    for (f = 0; f < p.length; ++f)
                                        this.keypointFilterMap.has(p[f].id) ||
                                            this.keypointFilterMap.set(p[f].id, new it(Dt)),
                                            (p[f].keypoints = this.keypointFilterMap
                                                .get(p[f].id)
                                                .apply(p[f].keypoints, i, 1));
                                    (m = this.tracker.getTrackIDs()),
                                        this.keypointFilterMap.forEach(function (t, e) {
                                            m.has(e) || g.keypointFilterMap.delete(e);
                                        });
                                }
                                return [2, p];
                        }
                    });
                });
            }),
            (e.prototype.filterCropRegion = function (t) {
                if (t) {
                    var e = this.cropRegionFilterYMin.apply(t.yMin),
                        n = this.cropRegionFilterXMin.apply(t.xMin),
                        i = this.cropRegionFilterYMax.apply(t.yMax),
                        r = this.cropRegionFilterXMax.apply(t.xMax);
                    return {
                        yMin: e,
                        xMin: n,
                        yMax: i,
                        xMax: r,
                        height: i - e,
                        width: r - n,
                    };
                }
                return (
                    this.cropRegionFilterYMin.reset(),
                    this.cropRegionFilterXMin.reset(),
                    this.cropRegionFilterYMax.reset(),
                    this.cropRegionFilterXMax.reset(),
                    null
                );
            }),
            (e.prototype.dispose = function () {
                this.moveNetModel.dispose();
            }),
            (e.prototype.reset = function () {
                (this.cropRegion = null), this.resetFilters();
            }),
            (e.prototype.resetFilters = function () {
                this.keypointFilter.reset(),
                    this.cropRegionFilterYMin.reset(),
                    this.cropRegionFilterXMin.reset(),
                    this.cropRegionFilterYMax.reset(),
                    this.cropRegionFilterXMax.reset();
            }),
            e
        );
    })();
    function Xt(t) {
        return (
            void 0 === t && (t = Bt),
            u(this, void 0, void 0, function () {
                var e, r, o, a;
                return l(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return (
                                (e = jt(t)),
                                (o = !0),
                                e.modelUrl
                                    ? ((o =
                                        "string" == typeof e.modelUrl &&
                                        e.modelUrl.indexOf("https://tfhub.dev") > -1),
                                        [4, i.loadGraphModel(e.modelUrl, { fromTFHub: o })])
                                    : [3, 2]
                            );
                        case 1:
                            return (r = s.sent()), [3, 4];
                        case 2:
                            return (
                                (a = void 0),
                                "SinglePose.Lightning" === e.modelType
                                    ? (a =
                                        "https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4")
                                    : "SinglePose.Thunder" === e.modelType
                                        ? (a =
                                            // "https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4")
                                            //baran
                                            "/singlepose_thunder")
                                        : "MultiPose.Lightning" === e.modelType &&
                                        (a =
                                            "https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),
                                [4, i.loadGraphModel(a, { fromTFHub: o })]
                            );
                        case 3:
                            (r = s.sent()), (s.label = 4);
                        case 4:
                            return (
                                "webgl" === n.getBackend() &&
                                n.env().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", 0),
                                [2, new Gt(r, e)]
                            );
                    }
                });
            })
        );
    }
    var Yt = {
        architecture: "MobileNetV1",
        outputStride: 16,
        multiplier: 0.75,
        inputResolution: { height: 257, width: 257 },
    },
        Wt = ["MobileNetV1", "ResNet50"],
        Qt = { MobileNetV1: [8, 16], ResNet50: [16] },
        Zt = [8, 16, 32],
        $t = { MobileNetV1: [0.5, 0.75, 1], ResNet50: [1] },
        Jt = [1, 2, 4],
        te = { maxPoses: 1, flipHorizontal: !1 },
        ee = {
            maxPoses: 5,
            flipHorizontal: !1,
            scoreThreshold: 0.5,
            nmsRadius: 20,
        },
        ne = [-123.15, -115.9, -103.06];
    function ie(t) {
        return Math.floor(t / 2);
    }
    var re = (function () {
        function t(t, e) {
            (this.priorityQueue = new Array(t)),
                (this.numberOfElements = -1),
                (this.getElementValue = e);
        }
        return (
            (t.prototype.enqueue = function (t) {
                (this.priorityQueue[++this.numberOfElements] = t),
                    this.swim(this.numberOfElements);
            }),
            (t.prototype.dequeue = function () {
                var t = this.priorityQueue[0];
                return (
                    this.exchange(0, this.numberOfElements--),
                    this.sink(0),
                    (this.priorityQueue[this.numberOfElements + 1] = null),
                    t
                );
            }),
            (t.prototype.empty = function () {
                return -1 === this.numberOfElements;
            }),
            (t.prototype.size = function () {
                return this.numberOfElements + 1;
            }),
            (t.prototype.all = function () {
                return this.priorityQueue.slice(0, this.numberOfElements + 1);
            }),
            (t.prototype.max = function () {
                return this.priorityQueue[0];
            }),
            (t.prototype.swim = function (t) {
                for (; t > 0 && this.less(ie(t), t);)
                    this.exchange(t, ie(t)), (t = ie(t));
            }),
            (t.prototype.sink = function (t) {
                for (; 2 * t <= this.numberOfElements;) {
                    var e = 2 * t;
                    if (
                        (e < this.numberOfElements && this.less(e, e + 1) && e++,
                            !this.less(t, e))
                    )
                        break;
                    this.exchange(t, e), (t = e);
                }
            }),
            (t.prototype.getValueAt = function (t) {
                return this.getElementValue(this.priorityQueue[t]);
            }),
            (t.prototype.less = function (t, e) {
                return this.getValueAt(t) < this.getValueAt(e);
            }),
            (t.prototype.exchange = function (t, e) {
                var n = this.priorityQueue[t];
                (this.priorityQueue[t] = this.priorityQueue[e]),
                    (this.priorityQueue[e] = n);
            }),
            t
        );
    })();
    function oe(t, e, n, i, r, o) {
        for (
            var a = o.shape,
            s = a[0],
            u = a[1],
            l = !0,
            h = Math.max(n - r, 0),
            c = Math.min(n + r + 1, s),
            p = h;
            p < c;
            ++p
        ) {
            for (
                var d = Math.max(i - r, 0), f = Math.min(i + r + 1, u), m = d;
                m < f;
                ++m
            )
                if (o.get(p, m, t) > e) {
                    l = !1;
                    break;
                }
            if (!l) break;
        }
        return l;
    }
    function ae(t) {
        return u(this, void 0, void 0, function () {
            return l(this, function (e) {
                return [
                    2,
                    Promise.all(
                        t.map(function (t) {
                            return t.buffer();
                        }),
                    ),
                ];
            });
        });
    }
    function se(t, e, n, i) {
        return { y: i.get(t, e, n), x: i.get(t, e, n + 17) };
    }
    function ue(t, e, n) {
        var i = se(t.heatmapY, t.heatmapX, t.id, n),
            r = i.y,
            o = i.x;
        return { x: t.heatmapX * e + o, y: t.heatmapY * e + r };
    }
    function le(t, e, n, i) {
        var r = n.x,
            o = n.y;
        return t.some(function (t) {
            var n,
                a,
                s,
                u,
                l,
                h,
                c = t.keypoints;
            return (
                (n = o),
                (a = r),
                (s = c[i].y),
                (u = c[i].x),
                (l = s - n) * l + (h = u - a) * h <= e
            );
        });
    }
    var he = c.reduce(function (t, e, n) {
        return (t[e] = n), t;
    }, {}),
        ce = [
            ["nose", "left_eye"],
            ["left_eye", "left_ear"],
            ["nose", "right_eye"],
            ["right_eye", "right_ear"],
            ["nose", "left_shoulder"],
            ["left_shoulder", "left_elbow"],
            ["left_elbow", "left_wrist"],
            ["left_shoulder", "left_hip"],
            ["left_hip", "left_knee"],
            ["left_knee", "left_ankle"],
            ["nose", "right_shoulder"],
            ["right_shoulder", "right_elbow"],
            ["right_elbow", "right_wrist"],
            ["right_shoulder", "right_hip"],
            ["right_hip", "right_knee"],
            ["right_knee", "right_ankle"],
        ].map(function (t) {
            var e = t[0],
                n = t[1];
            return [he[e], he[n]];
        }),
        pe = ce.map(function (t) {
            return t[1];
        }),
        de = ce.map(function (t) {
            return t[0];
        });
    function fe(t, e, n) {
        return t < e ? e : t > n ? n : t;
    }
    function me(t, e, n, i) {
        return {
            y: fe(Math.round(t.y / e), 0, n - 1),
            x: fe(Math.round(t.x / e), 0, i - 1),
        };
    }
    function ge(t, e) {
        return { x: t.x + e.x, y: t.y + e.y };
    }
    function ye(t, e, n, i, r, o, a, s) {
        void 0 === s && (s = 2);
        for (
            var u = i.shape,
            l = u[0],
            h = u[1],
            p = { y: e.y, x: e.x },
            d = ge(
                p,
                (function (t, e, n) {
                    var i = n.shape[2] / 2;
                    return { y: n.get(e.y, e.x, t), x: n.get(e.y, e.x, i + t) };
                })(t, me(p, o, l, h), a),
            ),
            f = 0;
            f < s;
            f++
        ) {
            var m = me(d, o, l, h),
                g = se(m.y, m.x, n, r);
            d = ge({ x: m.x * o, y: m.y * o }, { x: g.x, y: g.y });
        }
        var y = me(d, o, l, h),
            v = i.get(y.y, y.x, n);
        return { y: d.y, x: d.x, name: c[n], score: v };
    }
    function ve(t, e, n, i, r, o) {
        var a = e.shape[2],
            s = pe.length,
            u = new Array(a),
            l = t.part,
            h = t.score,
            p = ue(l, i, n);
        u[l.id] = { score: h, name: c[l.id], y: p.y, x: p.x };
        for (var d = s - 1; d >= 0; --d) {
            var f = pe[d],
                m = de[d];
            u[f] && !u[m] && (u[m] = ye(d, u[f], m, e, n, i, o));
        }
        for (d = 0; d < s; ++d) {
            (f = de[d]), (m = pe[d]);
            u[f] && !u[m] && (u[m] = ye(d, u[f], m, e, n, i, r));
        }
        return u;
    }
    function xe(t, e, n) {
        return (
            n.reduce(function (n, i, r) {
                var o = i.y,
                    a = i.x,
                    s = i.score;
                return le(t, e, { y: o, x: a }, r) || (n += s), n;
            }, 0) / n.length
        );
    }
    function we(t, e, n, i, r, o, a, s) {
        return (
            void 0 === a && (a = 0.5),
            void 0 === s && (s = 20),
            u(this, void 0, void 0, function () {
                var u, h, c, p, d, f, m, g, y, v, x, w;
                return l(this, function (l) {
                    switch (l.label) {
                        case 0:
                            return [4, ae([t, e, n, i])];
                        case 1:
                            for (
                                u = l.sent(),
                                h = u[0],
                                c = u[1],
                                p = u[2],
                                d = u[3],
                                f = [],
                                m = (function (t, e, n) {
                                    for (
                                        var i = n.shape,
                                        r = i[0],
                                        o = i[1],
                                        a = i[2],
                                        s = new re(r * o * a, function (t) {
                                            return t.score;
                                        }),
                                        u = 0;
                                        u < r;
                                        ++u
                                    )
                                        for (var l = 0; l < o; ++l)
                                            for (var h = 0; h < a; ++h) {
                                                var c = n.get(u, l, h);
                                                c < t ||
                                                    (oe(h, c, u, l, e, n) &&
                                                        s.enqueue({
                                                            score: c,
                                                            part: { heatmapY: u, heatmapX: l, id: h },
                                                        }));
                                            }
                                    return s;
                                })(a, 1, h),
                                g = s * s;
                                f.length < o && !m.empty();

                            )
                                (y = m.dequeue()),
                                    (v = ue(y.part, r, c)),
                                    le(f, g, v, y.part.id) ||
                                    ((x = ve(y, h, c, r, p, d)),
                                        (w = xe(f, g, x)),
                                        f.push({ keypoints: x, score: w }));
                            return [2, f];
                    }
                });
            })
        );
    }
    function ke() {
        for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        switch (e.length) {
            case 0:
                t = "fn main() ";
                break;
            case 1:
                t = "fn main(".concat(e[0], " : i32)");
                break;
            default:
                throw Error("Unreachable");
        }
        return t;
    }
    var be = (function () {
        function t(t) {
            (this.variableNames = ["A", "B"]), (this.size = !0);
            (this.workgroupSize = [32, 1, 1]),
                (this.outputShape = [t[0], 1]),
                (this.dispatchLayout = r.webgpu_util.flatDispatchLayout(
                    this.outputShape,
                )),
                (this.dispatch = r.webgpu_util.computeDispatch(
                    this.dispatchLayout,
                    this.outputShape,
                    this.workgroupSize,
                )),
                (this.shaderKey = "getpointsConfidenceOp");
        }
        return (
            (t.prototype.getUserCode = function () {
                return "\n        ".concat(
                    ke("index"),
                    " {\n          if (index < uniforms.size) {\n            let y = B[index * 2];\n            let x = B[index * 2 + 1];\n            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;\n            result[index] = A[outIndex];\n          }\n        }\n        ",
                );
            }),
            t
        );
    })();
    function Me(t, e) {
        if (n.backend() instanceof r.WebGPUBackend)
            return (function (t, e) {
                var i = n.backend(),
                    r = new be(e.shape),
                    o = i.runWebGPUProgram(r, [t, e], "float32");
                return n.engine().makeTensorFromTensorInfo(o);
            })(t, e);
        throw new Error(
            "getPointsConfidenceWebGPU is not supported in this backend!",
        );
    }
    var Se = (function () {
        function t(t) {
            if (
                ((this.variableNames = ["A", "B"]),
                    (this.size = !0),
                    (this.supportedLastDimension = 2),
                    2 !== t.length || t[1] !== this.supportedLastDimension)
            )
                throw new Error(
                    "GetOffsetVectorsProgram only supports shape of [x, "
                        .concat(this.supportedLastDimension, "], but current shape is ")
                        .concat(t),
                );
            (this.workgroupSize = [32, 1, 1]), (this.outputShape = t);
            var e = [t[0], 1];
            (this.dispatchLayout = r.webgpu_util.flatDispatchLayout(e)),
                (this.dispatch = r.webgpu_util.computeDispatch(
                    this.dispatchLayout,
                    e,
                    this.workgroupSize,
                )),
                (this.shaderKey = "GetOffsetVectors");
        }
        return (
            (t.prototype.getUserCode = function () {
                return "\n    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {\n      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;\n      let outIndexX = outIndexY + uniforms.bShape.z;\n      let outY = i32(B[outIndexY]);\n      let outX = i32(B[outIndexX]);\n      return vec2<i32>(outY, outX);\n    }\n\n    "
                    .concat(
                        ke("index"),
                        " {\n      if (index < uniforms.size) {\n        let indexY = index * ",
                    )
                    .concat(
                        this.supportedLastDimension,
                        ";\n        let indexX = indexY + 1;\n        let heatmapY = A[indexY];\n        let heatmapX = A[indexX];\n        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);\n        result[indexY] = f32(out[0]);\n        result[indexX] = f32(out[1]);\n      }\n    }\n    ",
                    );
            }),
            t
        );
    })();
    function Te(t, e) {
        if (n.backend() instanceof r.WebGPUBackend)
            return (function (t, e) {
                var i = n.backend(),
                    r = new Se(t.shape),
                    o = i.runWebGPUProgram(r, [t, e], "float32");
                return n.engine().makeTensorFromTensorInfo(o);
            })(t, e);
        throw new Error("getOffsetVectorsGPU is not supported in this backend!");
    }
    function Pe(t) {
        var e = t.shape,
            i = e[0],
            r = e[1],
            o = e[2];
        return n.tidy(function () {
            var e,
                a,
                s = n.reshape(t, [i * r, o]),
                u = n.argMax(s, 0),
                l = n.expandDims(n.div(u, n.scalar(r, "int32")), 1),
                h = n.expandDims(
                    ((e = u),
                        (a = r),
                        n.tidy(function () {
                            var t = n.div(e, n.scalar(a, "int32"));
                            return n.sub(e, n.mul(t, n.scalar(a, "int32")));
                        })),
                    1,
                );
            return n.concat([l, h], 1);
        });
    }
    function Fe(t, e, i) {
        return n.tidy(function () {
            var r = (function (t, e) {
                for (var i = [], r = 0; r < c.length; r++) {
                    var o = t.get(r, 0).valueOf(),
                        a = t.get(r, 1).valueOf(),
                        s = _e(o, a, r, e),
                        u = s.x,
                        l = s.y;
                    i.push(l), i.push(u);
                }
                return n.tensor2d(i, [c.length, 2]);
            })(t, i);
            return n.add(
                n.cast(n.mul(t.toTensor(), n.scalar(e, "int32")), "float32"),
                r,
            );
        });
    }
    function _e(t, e, n, i) {
        return { y: i.get(t, e, n), x: i.get(t, e, n + c.length) };
    }
    function ze(t, e, n) {
        return u(this, void 0, void 0, function () {
            var i, r, o, a, s, u, h, p, d, f;
            return l(this, function (l) {
                switch (l.label) {
                    case 0:
                        return (
                            (i = 0),
                            (r = Pe(t)),
                            [4, Promise.all([t.buffer(), e.buffer(), r.buffer()])]
                        );
                    case 1:
                        return (
                            (o = l.sent()),
                            (a = o[0]),
                            (s = o[1]),
                            (u = o[2]),
                            [4, (h = Fe(u, n, s)).buffer()]
                        );
                    case 2:
                        return (
                            (p = l.sent()),
                            (d = Array.from(
                                (function (t, e) {
                                    for (
                                        var n = e.shape[0], i = new Float32Array(n), r = 0;
                                        r < n;
                                        r++
                                    ) {
                                        var o = e.get(r, 0),
                                            a = e.get(r, 1);
                                        i[r] = t.get(o, a, r);
                                    }
                                    return i;
                                })(a, u),
                            )),
                            (f = d.map(function (t, e) {
                                return (
                                    (i += t),
                                    { y: p.get(e, 0), x: p.get(e, 1), score: t, name: c[e] }
                                );
                            })),
                            r.dispose(),
                            h.dispose(),
                            [2, { keypoints: f, score: i / f.length }]
                        );
                }
            });
        });
    }
    function Oe(t, e, i) {
        return u(this, void 0, void 0, function () {
            var r, o, a;
            return l(this, function (s) {
                return (
                    (r = Pe(t)),
                    (o = (function (t, e, i) {
                        return n.tidy(function () {
                            var r = Te(t, i);
                            return n.add(
                                n.cast(n.mul(t, n.scalar(e, "int32")), "float32"),
                                r,
                            );
                        });
                    })(r, i, e)),
                    (a = Me(t, r)),
                    [2, [o, a]]
                );
            });
        });
    }
    function Ie(t, e) {
        return (t - 1) % e == 0;
    }
    var Ae =
        "https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",
        Ce =
            "https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";
    function Ee(t, e) {
        return (function (t, e) {
            return (t - 1) % e == 0;
        })(t, e)
            ? t
            : Math.floor(t / e) * e + 1;
    }
    var Re = (function () {
        function t(t, e) {
            this.posenetModel = t;
            var i = this.posenetModel.inputs[0].shape;
            n.util.assert(-1 === i[1] && -1 === i[2], function () {
                return (
                    "Input shape [".concat(i[1], ", ").concat(i[2], "] ") +
                    "must both be equal to or -1"
                );
            });
            var r,
                o,
                a =
                    ((r = e.inputResolution),
                        (o = e.outputStride),
                        { height: Ee(r.height, o), width: Ee(r.width, o) });
            !(function (t) {
                n.util.assert(Zt.indexOf(t) >= 0, function () {
                    return (
                        "outputStride of ".concat(t, " is invalid. ") +
                        "It must be either 8 or 16."
                    );
                });
            })(e.outputStride),
                (function (t, e) {
                    n.util.assert(Ie(t.height, e), function () {
                        return (
                            "height of ".concat(t.height, " is invalid for output stride ") +
                            "".concat(e, ".")
                        );
                    }),
                        n.util.assert(Ie(t.width, e), function () {
                            return (
                                "width of ".concat(t.width, " is invalid for output stride ") +
                                "".concat(e, ".")
                            );
                        });
                })(a, e.outputStride),
                (this.inputResolution = a),
                (this.outputStride = e.outputStride),
                (this.architecture = e.architecture);
        }
        return (
            (t.prototype.estimatePoses = function (t, e) {
                return (
                    void 0 === e && (e = te),
                    u(this, void 0, void 0, function () {
                        return l(this, function (n) {
                            return [2, this.estimatePosesGPU(t, e, !1)];
                        });
                    })
                );
            }),
            (t.prototype.estimatePosesGPU = function (t, e, i) {
                return (
                    void 0 === e && (e = te),
                    void 0 === i && (i = !1),
                    u(this, void 0, void 0, function () {
                        var r, o, a, u, h, c, p, d, f, m, g, y, v, x, w, k, b, M;
                        return l(this, function (l) {
                            switch (l.label) {
                                case 0:
                                    return (
                                        (r = (function (t) {
                                            var e = t;
                                            if (
                                                (null == e.maxPoses && (e.maxPoses = 1),
                                                    e.maxPoses <= 0)
                                            )
                                                throw new Error(
                                                    "Invalid maxPoses ".concat(
                                                        e.maxPoses,
                                                        ". Should be > 0.",
                                                    ),
                                                );
                                            if (e.maxPoses > 1) {
                                                if (
                                                    (e = s(s({}, ee), e)).scoreThreshold < 0 ||
                                                    e.scoreThreshold > 1
                                                )
                                                    throw new Error(
                                                        "Invalid scoreThreshold ".concat(
                                                            e.scoreThreshold,
                                                            ". ",
                                                        ) + "Should be in range [0.0, 1.0]",
                                                    );
                                                if (e.nmsRadius <= 0)
                                                    throw new Error(
                                                        "Invalid nmsRadius ".concat(e.nmsRadius, "."),
                                                    );
                                            }
                                            return e;
                                        })(e)),
                                        null == t
                                            ? [2, i ? [[], []] : []]
                                            : ((this.maxPoses = r.maxPoses),
                                                (o = V(t, {
                                                    outputTensorSize: this.inputResolution,
                                                    keepAspectRatio: !0,
                                                    borderMode: "replicate",
                                                })),
                                                (a = o.imageTensor),
                                                (u = o.padding),
                                                (h =
                                                    "ResNet50" === this.architecture
                                                        ? n.add(a, ne)
                                                        : B(a, [-1, 1])),
                                                (c = this.posenetModel.predict(h)),
                                                "ResNet50" === this.architecture
                                                    ? ((p = n.squeeze(c[2], [0])),
                                                        (d = n.squeeze(c[3], [0])),
                                                        (f = n.squeeze(c[0], [0])),
                                                        (m = n.squeeze(c[1], [0])))
                                                    : ((p = n.squeeze(c[0], [0])),
                                                        (d = n.squeeze(c[1], [0])),
                                                        (f = n.squeeze(c[2], [0])),
                                                        (m = n.squeeze(c[3], [0]))),
                                                (g = n.sigmoid(d)),
                                                1 !== this.maxPoses
                                                    ? [3, 5]
                                                    : i
                                                        ? [4, Oe(g, p, this.outputStride)]
                                                        : [3, 2])
                                    );
                                case 1:
                                    return (
                                        (v = l.sent()), (w = v[0]), (x = v[1]), (y = [w, x]), [3, 4]
                                    );
                                case 2:
                                    return [4, ze(g, p, this.outputStride)];
                                case 3:
                                    (w = l.sent()), (y = [w]), (l.label = 4);
                                case 4:
                                    return [3, 7];
                                case 5:
                                    if (i)
                                        throw new Error("GPU renderer only supports single pose!");
                                    return [
                                        4,
                                        we(
                                            g,
                                            p,
                                            f,
                                            m,
                                            this.outputStride,
                                            this.maxPoses,
                                            r.scoreThreshold,
                                            r.nmsRadius,
                                        ),
                                    ];
                                case 6:
                                    (y = l.sent()), (l.label = 7);
                                case 7:
                                    if (i) {
                                        if (!0 === r.flipHorizontal)
                                            throw new Error("flipHorizontal is not supported!");
                                        k = this.getCanvasInfo(F(t), this.inputResolution, u);
                                    } else
                                        (M = F(t)),
                                            (b = (function (t, e, n, i) {
                                                var r = e.height,
                                                    o = e.width,
                                                    a = r / (n.height * (1 - i.top - i.bottom)),
                                                    s = o / (n.width * (1 - i.left - i.right)),
                                                    u = -i.top * n.height,
                                                    l = -i.left * n.width;
                                                if (1 === s && 1 === a && 0 === u && 0 === l) return t;
                                                for (var h = 0, c = t; h < c.length; h++)
                                                    for (
                                                        var p = 0, d = c[h].keypoints;
                                                        p < d.length;
                                                        p++
                                                    ) {
                                                        var f = d[p];
                                                        (f.x = (f.x + l) * s), (f.y = (f.y + u) * a);
                                                    }
                                                return t;
                                            })(y, M, this.inputResolution, u)),
                                            r.flipHorizontal &&
                                            (b = (function (t, e) {
                                                for (var n = 0, i = t; n < i.length; n++)
                                                    for (
                                                        var r = 0, o = i[n].keypoints;
                                                        r < o.length;
                                                        r++
                                                    ) {
                                                        var a = o[r];
                                                        a.x = e.width - 1 - a.x;
                                                    }
                                                return t;
                                            })(b, M));
                                    return (
                                        a.dispose(),
                                        h.dispose(),
                                        n.dispose(c),
                                        p.dispose(),
                                        d.dispose(),
                                        f.dispose(),
                                        m.dispose(),
                                        g.dispose(),
                                        [2, i ? [y, k] : b]
                                    );
                            }
                        });
                    })
                );
            }),
            (t.prototype.getCanvasInfo = function (t, e, n) {
                var i = t.height,
                    r = t.width,
                    o = i / (e.height * (1 - n.top - n.bottom)),
                    a = r / (e.width * (1 - n.left - n.right)),
                    s = -n.top * e.height;
                return [-n.left * e.width, s, a, o, t.width, t.height];
            }),
            (t.prototype.dispose = function () {
                this.posenetModel.dispose();
            }),
            (t.prototype.reset = function () { }),
            t
        );
    })();
    function Le(t) {
        return (
            void 0 === t && (t = Yt),
            u(this, void 0, void 0, function () {
                var e, n, r, o, a;
                return l(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return "ResNet50" !==
                                (e = (function (t) {
                                    var e = t || Yt;
                                    if (
                                        (null == e.architecture && (e.architecture = "MobileNetV1"),
                                            Wt.indexOf(e.architecture) < 0)
                                    )
                                        throw new Error(
                                            "Invalid architecture ".concat(e.architecture, ". ") +
                                            "Should be one of ".concat(Wt),
                                        );
                                    if (
                                        (null == e.inputResolution &&
                                            (e.inputResolution = { height: 257, width: 257 }),
                                            null == e.outputStride && (e.outputStride = 16),
                                            Qt[e.architecture].indexOf(e.outputStride) < 0)
                                    )
                                        throw new Error(
                                            "Invalid outputStride ".concat(e.outputStride, ". ") +
                                            "Should be one of ".concat(Qt[e.architecture], " ") +
                                            "for architecture ".concat(e.architecture, "."),
                                        );
                                    if (
                                        (null == e.multiplier && (e.multiplier = 1),
                                            $t[e.architecture].indexOf(e.multiplier) < 0)
                                    )
                                        throw new Error(
                                            "Invalid multiplier ".concat(e.multiplier, ". ") +
                                            "Should be one of ".concat($t[e.architecture], " ") +
                                            "for architecture ".concat(e.architecture, "."),
                                        );
                                    if (
                                        (null == e.quantBytes && (e.quantBytes = 4),
                                            Jt.indexOf(e.quantBytes) < 0)
                                    )
                                        throw new Error(
                                            "Invalid quantBytes ".concat(e.quantBytes, ". ") +
                                            "Should be one of ".concat(Jt, " ") +
                                            "for architecture ".concat(e.architecture, "."),
                                        );
                                    if (
                                        "MobileNetV1" === e.architecture &&
                                        32 === e.outputStride &&
                                        1 !== e.multiplier
                                    )
                                        throw new Error(
                                            "When using an output stride of 32, you must select 1 as the multiplier.",
                                        );
                                    return e;
                                })(t)).architecture
                                ? [3, 2]
                                : ((u = e.outputStride),
                                    (l = e.quantBytes),
                                    (h = "model-stride".concat(u, ".json")),
                                    (n =
                                        4 === l
                                            ? Ce + "float/" + h
                                            : Ce + "quant".concat(l, "/") + h),
                                    [4, i.loadGraphModel(e.modelUrl || n)]);
                        case 1:
                            return (r = s.sent()), [2, new Re(r, e)];
                        case 2:
                            return (
                                (o = (function (t, e, n) {
                                    var i = { 1: "100", 0.75: "075", 0.5: "050" },
                                        r = "model-stride".concat(t, ".json");
                                    return 4 === n
                                        ? Ae + "float/".concat(i[e], "/") + r
                                        : Ae + "quant".concat(n, "/").concat(i[e], "/") + r;
                                })(e.outputStride, e.multiplier, e.quantBytes)),
                                [4, i.loadGraphModel(e.modelUrl || o)]
                            );
                        case 3:
                            return (a = s.sent()), [2, new Re(a, e)];
                    }
                    var u, l, h;
                });
            })
        );
    }
    var Be = { keypointsToNormalizedKeypoints: tt },
        Ve = {
            modelType: {
                SINGLEPOSE_LIGHTNING: "SinglePose.Lightning",
                SINGLEPOSE_THUNDER: "SinglePose.Thunder",
                MULTIPOSE_LIGHTNING: "MultiPose.Lightning",
            },
        };
    (t.calculators = Be),
        (t.createDetector = function (e, n) {
            return u(this, void 0, void 0, function () {
                var i, r;
                return l(this, function (o) {
                    switch (e) {
                        case t.SupportedModels.PoseNet:
                            return [2, Le(n)];
                        case t.SupportedModels.BlazePose:
                            if (((r = void 0), null != (i = n))) {
                                if ("tfjs" === i.runtime) return [2, _t(n)];
                                if ("mediapipe" === i.runtime) return [2, P(n)];
                                r = i.runtime;
                            }
                            throw new Error(
                                "Expect modelConfig.runtime to be either 'tfjs' " +
                                "or 'mediapipe', but got ".concat(r),
                            );
                        case t.SupportedModels.MoveNet:
                            return [2, Xt(n)];
                        default:
                            throw new Error("".concat(e, " is not a supported model name."));
                    }
                });
            });
        }),
        (t.movenet = Ve),
        (t.util = Rt),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
