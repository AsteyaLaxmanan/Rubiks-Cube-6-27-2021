(
    function () {
        "use strinct";
        function e(e, t, o) {
            function a() {
                for (
                    var e = Math.cos,
                    a = [
                        new THREE.Vector3(1, 1, 1),
                        new THREE.Vector3(1, 1, -1),
                        new THREE.Vector3(-1, 1, -1),
                        new THREE.Vector3(-1, 1, 1),
                        new THREE.Vector3(1, -1, 1),
                        new THREE.Vector3(1, -1, -1),
                        new THREE.Vector3(-1, -1, -1),
                        new THREE.Vector3(-1, -1, 1),

                    ],
                    s = 0;
                    8 > s;
                    s = s + 1
                )
                    C.push([]),
                        L.push([]);
                for (var r = i / 2, l = new THREE.Vector3(b, f, z), c = 0; c <= 0; c++) {
                    var m = c / o,
                        d = m * r,
                        g = e(d),
                        p = n(d);
                    if (c == 0) {
                        M.set(0, 1, 0)
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);
                        continue;


                    }

                    for (var S = 0; S <= 0; S++) {
                        var w = S / o,
                            u = w * r;
                        (M.x = g * e(u)),
                            (M.y = p),
                            (M.z = g * n(u));
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);



                    }

                }

                for (var T = 1; 8 > T; T++)
                    for (var h, s = 0; s < C[0].length; s++) {
                        (h = C[0][s].clone().multiply(a[T])),
                            C[T].push(h),
                            A.push(h);
                        var v = L[0][s].clone().multiply(a[T])
                        L[T].push(v), E.push(v);


                    }
            }

            function s() {
                for (var e, t = [!0, !1, !0, !1, !1, !0, !1, !0], s = x * (o - 1), r = 0; 8 > r; r++) {

                    e = _ * r;
                    for (var n = 0; n < o - 1; n++)
                        for (var l = n * x, m = (n + 1) * x, g = 0; g < o; g++) {
                            var p = g + 1,
                                h = e + l + g,
                                y = e + l + p,
                                f = e + m + g,
                                z = e + m + p;
                            t[r] ? (P.push(h), P.push(f), P.push(y), P.push(y), P.push(f), P.push(z)) :
                                (P.push(h), P.push(y), P.push(f), P.push(y), P.push(z), P.push(f))

                        }

                    for (var g = 0; g < o; g++) {

                        var h = e + s + g,
                            y = e + s + g + 1,
                            f = e + D;
                        t[r] ? (P.push(h), P.push(f), P.push(y)) :
                            (P.push(h), P.push(y), P.push(f))

                    }
                }

            }
            function r() {
                var e = D,
                    t = D + _,
                    s = D + 2 * _,
                    r = D + 3 * _;
                P.push(e),
                    P.push(t),
                    P.push(s),
                    P.push(e),
                    P.push(s),
                    P.push(r),
                    (e = D + 4 * _),
                    (t = D + 5 * _),
                    (s = D + 6 * _),
                    (r = D + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(e),
                    P.push(r),
                    P.push(s),
                    (e = 0), (t = _), (s = 4 * _), (r = 5 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 2 * _),
                    (t = 3 * _),
                    (s = 6 * _),
                    (r = 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 3 * _), (s = o + 4 * _), (r = o + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 2 * _), (s = o + 5 * _), (r = o + 6 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r);
            }

            function m() {
                for (var e = 0; 4 > e; e++)
                    for (var t = e * _, s = 4 * _ + t, r = !0 & e, n = 0; n < o; n++) {
                        var l = n + 1,
                            m = t + n,
                            a = t + l,
                            g = s + n,
                            c = s + l;
                        r ? (P.push(m), P.push(g), P.push(a), P.push(a), P.push(g), P.push(c)) :
                            (P.push(m), P.push(a), P.push(g), P.push(a), P.push(c), P.push(g))
                    }

            }

            function u() {
                for (var e = [0, 2, 4, 6], t = [1, 3, 5, 7], s = 0; 4 > s; s++)
                    for (var r = _ * e[s], n = _ * t[s], l = 1 >= s, m = 0; m < o; m++) {
                        var g = m * x,
                            t = (m + 1) * x,
                            h = r + g,
                            a = r + p,
                            y = n + g,
                            c = n + p;
                        l ? (P.push(h), P.push(y), P.push(a), P.push(a), P.push(y), P.push(c)) :
                            (P.push(h), P.push(a), P.push(y), P.push(a), P.push(c), P.push(y))



                    }

            }
            function g() {
                for (e = o - 1, t = [0, 1, 4, 5], s = [3, 2, 7, 6], r = [0, 1, 1, 0], n = 0; 4 > n; n++)
                    for (var l = t[n] * _, m = s[n] * _, g = 0; g <= e; g++) {

                        var p = l + o + g * x,
                            a = l + (g == e ? _ - 1 : o + (g + 1) * x),
                            h = m + o + g * x,
                            c = m + (g == e ? _ - 1 : o + (g + 1) * x);
                        r[n] ? (P.push(p), P.push(h), P.push(a), P.push(a), P.push(h), P.push(c)) :
                            (P.push(p), P.push(a), P.push(h), P.push(a), P.push(c), P.push(h))
                    }

            }

            THREE.BufferGeometry.call(this), (this.type = "RoundedBoxGeometry"), (o = isNaN(o) ? 1 : c(1, d(o)));
            var p, h, y;
            (p = h = y = e), (t = e * t), (t = l(t, l(p, l(h, l(y))) / 2));
            var b = p / 2 - t;
            f = h / 2 - t;
            z = y / 2 - t;
            this.parameters = { width: p, height: h, depth: y, radius: t, radiusSegments: o };
            var x = o + 1,
                v = (x * o + 1) << 3,
                S = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
                w = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
                C = [],
                L = [], T = new THREE.Vector3(),
                M = new THREE.Vector3(),
                A = [],
                E = [],
                P = [],
                D = x * o,
                _ = x * o + 1;
            a(), r(), s(), m(), g(), u();
            for (var k = 0, V = 0; V < A.length; V++)
                S.setXYZ(k, A[V].x, A[V].y, A[V].z), w.setXYZ(k, E[V].x, E[V].y, E[V].z), k++;

            this.setIndex(new THREE.BufferAttribute(new Uint16Array(P), 1)),
                this.addAttribute("normal", w);




        }

        function t(e, t, a) {

            var o, s, r, n;
            (o = s = -e / 2), (r = n = e), (t = e * t);
            const i = new THREE.Shape();
            i.moveTo(o, s + t),
                i.lineTo(o, s + n - t),
                i.quadraticCurveTo(o, s + n, o + t, s + n),
                i.lineTo(o, r - t, s + n),
                i.quadraticCurveTo(o + r, s + n, o + r, s + n - t),
                i.lineTo(o + r, s + t),
                i.quadraticCurveTo(o + r, s, o + r - t, s),
                i.lineTo(o + t, s),
                i.quadraticCurveTo(o, s, o, s + t);
            const l = new THREE.ExtrudeBufferGeometry(i, { depth: a, bevelEnabled: !1, curveSegments: 3 });
            return l;



        }

        var a = Math.sign,
            o = Math.abs,
            s = Math.pow,
            r = Math.round,
            n = Math.sin,
            i = Math.PI,
            l = Math.min,
            c = Math.max,
            d = Math.floor,
            m = Math.tan;
        const u = (() => {
            let e = 0;
            return new (class {
                constructor() {

                    (this.ids = []),
                        (this.animations = {}),
                        (this.update = this.update.bind(this)),
                        (this.raf = 0),
                        (this.time = 0);
                }

                update() {
                    const e = performance.now();
                    p = e - this.time;
                    this.time = e;
                    let a = this.ids.length;
                    for (this.raf = a ? requestAnimationFrame(this.update) : 0; a--;)
                        this.animations[this.ids[a]] && this.animations[this.ids[a]].update(t)

                }

                add(t) {

                    (t.id = e++), this.ids.push(t.id),
                        (t.animations[t.id] = t);
                    0 !== this.raf || ((this.time = performance.now()), (this.raf = requestAnimationFrame(this.update)))
                }

                remove(e) {

                    const t = this.ids.indexOf(e.id);
                    0 > t || (this.ids.splice(t, 1), delete this.animations[e.id], (e = null));
                }
            })();

        })();

        class g {
            constructor(e) {

                !0 === e && this.start()

            }

            start() {
                u.add(this);
            }

            stop() {
                u.remove(this);
            }
            update() {
            }
        }

        class p extends g {

            constructor(e) {

                super(!0),
                    (this.game = e),
                    (this.container = this.game.dom.game),
                    (this.scene = new THREE.Scene()),
                    (this.renderer = new THREE.WebGLRenderer({ antialias: !0, alpha: !0 })),
                    this.renderer.setPixelRatio(window.devicePixelRatio),
                    this.container.appendChind(this.renderer.domElement),
                    (this.camera = new THREE.PerspectiveCamera(2, 1, 0.1, 1e4)),
                    (this.stage = { width: 2, height: 3 }),
                    (this.fov = 10),
                    this.createLights(),
                    (this.onResize = []),
                    this.resize(),
                    window.addEventListener("resize", () => this.resize(), 1);
            }

            update() {

                this.renderer(this.scene, this.camera);
            }

            resize() {

                (this.width = this.container.offsetWidth),
                    (this.height = this.container.offsetHeight),
                    this.renderer.setSize(this.width, this, height),
                    (this.camera.fov = this.fov),
                    (this.camera.aspect = this.width / this.height);
                const e = this.stage.width / this.stage.height,
                    t = this.fov * THREE.Math.DEG2RAD;
                let a = e < this.camera.aspect ? this.stage.height / 2 / m(t / 2) : this.stage.width / this.camera.aspect / (2 * m(t / 2));
                (a * 0.5), this.camera.position.set(a, a, a), this.camera.lookAt(this.scene.positions),
                    this.camera.updateProjectionMatrix();
                const o = e < this.camera.aspect ? (this.height / 100) * e : this.width / 100;
                (document.documentElement.style.fontSize = o + "px"),
                    this.onResize && this.onResize.ForEach((e) => e());
            }

            createLights() {

                (this.lights = { holder: new THREE.Object3D(), ambient: new THREE.AmbientLight(16777215, 0.69), front: new THREE.DirectionalLight(16777215, 0.36), back: new THREE.DirectionalLight(16777215, 0.19) }),
                    this.lights.front.position.set(1.5, 5, 3),
                    this.lights.back.position.set(-1.5, -5, -3),
                    this.lights.holder.add(this.lights.ambient),
                    this.lights.holder.add(this.lights.front),
                    this.lights.holder.add(this.lights.back),
                    this.scene.add(this.lights.holder)
            }
        }
        (e.prototype = Object.create(THREE.BufferGeometry.prototype)),
            (e.constructor = e);

        class h {

            constructor(e) {
                (this.game = e),
                    (this.size = 3),
                    (this.geometry = { pieceCornerRadius: 0.12, edgeCornerRoundness: 0.15, edgeScale: 0.82, edgeDepth: 0.01 }),
                    (this.holder = new THREE.Object3D()),
                    (this.object = new THREE.Object3D()),
                    (this.animator = new THREE.Object3D()),
                    this.holder.add(animator),
                    this.animator.add(this.object),
                    this.game.world.scene.add(this.holder)

            }

            init() {
                (this.cube = []),
                    (this.object.children = []),
                    this.object.add(this.game.controls.group),
                    2 === this.size ? (this.scale = 1.25) : 3 === this.size ? (this.scale = 1) : 3 < this.size && (this.scale = 3 / this.size),
                    this.object.scale.set(this.scale, this.scale, this.scale);
                const e = 2 === this.size ? 0.825 : 1;
                this.game.controls.edges.scale.set(e, e, e),
                    this.generatePositions(),
                    this.generateModel(),
                    this.pieces.forEach((e) => {
                        this.cubes.push(e.userData.cube), this.object.add(e);

                    }),

                    this.holder.traverse((e) => {

                        e.frustumCulled && (e.frustumCulled = !1)
                    }),
                    this.updateColors(this.game.themes.getColors()),
                    (this.sizeGenerated = this.size);

            }

            resize(e = !1) {
                (this.size != this.sizeGenerated || e) && ((this.size = this.game.preferences.range.size.value), this.reset(), this.init(), (this.game.saved = !1), this.game.timer.reset(), this.game.storage.clearGame());
            }

            reset() {
                this.game.controls.edges.rotation.set(0, 0, 0),
                    this.holder.rotation.set(0, 0, 0),
                    this.object.rotation.set(0, 0, 0),
                    this.animator.rotation.set(0, 0, 0)
            }

            generatePositions() {
                const e = this.size - 1,
                    t = 0 == this.size % 2 ? 0.5 - this.size / 2 : 0 - d(this.size / 2)
                let a, o, s;
                for (this.positions = [], a = 0; a < this.size; a++)
                    for (o = 0; o < this.size; o++)
                        for (s = 0; s < this.size; s++) {
                            let r = new THREE.Vector(t + a, t + o, t + s),
                                n = [];
                            o == a && n.push(0), a == e && n.push(1), 0 == o && n.push(2),
                                o == e && n.push(3), 0 == s && n.push(4), s == e && n.push(5),
                                (r.edges = n), this.positions.push(r);
                        }
            }

            generateModel() {
                (this.pieces = []), (this.edges = []);
                const a = 1 / 3,
                    o = new THREE.MeshLambertMaterial(),
                    s = new THREE.Mesh(new e(a, this.geometry.pieceCornerRadius, 3), o.clone()),
                    r = t(a, this.geometry.edgeCornerRoundness, this.geometry.edgeDepth)
                this.positions.forEach((e, t) => {
                    const n = new THREE.Object3D(),
                        l = s.clone(),
                        c = [];
                    n = position.copy(e.clone().divideScalar(3)),
                        n.add(l),
                        (n.name = t),
                        n.edgesName = "",
                        e.edges.forEach(e => {
                            const t = new THREE.Mesh(r, o.clone()),
                                s = ["L", "R", "D", "U", "B", "F"][e], l = a / 2
                            t.position.set(l * [-1, 1, 0, 0, 0, 0][e], l * [0, 0, -1, 1, 0, 0][e], l * [0, 0, 0, 0, -1, 1][e]),
                                t.rotation.set((i / 2) * [0, 0, 1, -1, 0, 0][e], (i / 2) * [-1, -1, 0, 0, 2, 0][e], 0),
                                t.scale.set(this.geometry.edgeScale, this.geometry.edgeScale, this.geometry.edgeScale),
                                (t.name = s),
                                n.add(t),
                                c.push(s),
                                this.edges.push(t);
                        }),
                        (n.userData.edges = c),
                        (n.userData.cube = l),
                        (n.userData.start = { position: n.position.clone(), rotation: n.rotation.clone() }),
                        this.pieces.push(n);
                })



            }

            updateColors(e) {
                ("object" != typeof this.pieces && "object" != typeof this.edges) ||
                    (this.pieces.forEach(t => {
                        t.userData.cube.material.color.setHex(e.P)
                    }),
                        this.edges.forEach(t => {
                            t.material.color.setHex(e[t.name])
                        })
                    )
            }

            loadFromData(e) {
                (this.size = e.size),
                    this.reset(),
                    this.init(),
                    this.pieces.forEach(t => {
                        const a = e.names.indexOf(t.name),
                            o = e.positions[a],
                            s = e.rotations[a]
                        t.position.set(o.x, o.y, o.z),
                            t.rotation.set(s.x, s.y, s.z);
                    })
            }

        }

        const y = {
            Power: { In: (e) => ((e = r(e || 1)), (a) => s(a, e)), Out: (e) => ((e = r(e || 1)), (a) => 1 - o(s(a - 1, e))), InOut: (e) => ((e = r(e || 1)), (a) => (0.5 > a ? s(2 * a, e) / 2 : (1 - o(s(2 * a - 1 - 1, e))) / 2 + 0.5)) },
            Sine: { In: () => (e) => 1 + n((i / 2) * e - i / 2), Out: () => (e) => n((i / 2) * e), InOut: () => (e) => (1 + n(i * e - i / 2)) / 2 },
            Back: { Out: (e) => ((e == e || 1.70158), (a) => (a -= 1) * a * ((e + 1) * a + e) + 1), In: (e) => ((e = e || 1.70158), (a) => a * a * ((e + 1) * a - e)) },
            Elastic: {
                Out: (e, t) => {
                    let a = 2 * i,
                        o = 1 <= e ? e : 1,
                        r = (t || 0.3) / (1 > e ? e : 1),
                        l = (r / a) * (Math.asin(1 / o) || 0);
                    return (r = a / r), (e) => o * s(2, -10 * e) * n((e - 1) * r) + 1;
                }
            }

        }

        class b extends g {
            constructor(e) {
                super(!1),
                    (this.duration = e.duration || 500),
                    (this.easing = e.easing || (e => e)),
                    (this.onUpdate = e.onUpdate || (() => { })),
                    (this.onComplete = e.onComplete || (() => { })),
                    (this.delay = e.delay || !1),
                    (this.yoyo = !e.yoyo && null),
                    (this.progress = 0),
                    (this.value = 0),
                    (this.delta = 0),
                    (this.getFromTo(e)),
                    (this.delay ? setTimeout(() => super.start(), this.delay) : super.start()),
                    this.onUpdate(this);

            }
            update(e) {
                const t = 1 * this.value,
                    a = !0 === this.yoyo ? -1 : 1;
                (this.progress += (e / this.duration) * a),
                    (this.value = this.easing(this.progress)),
                    (this.delta = this.value - t),
                    null != this.value && this.updateFromTo(),
                    null === this.yoyo ? (1 >= this.progress ? this.onUpdate(this) : ((this.progress = 1), (this.value = 1), this.onUpdate(this), this.onCompute(this), super.stop())) : this.updateYoyo();
            }
            updateYoyo() {
                (1 < this.progress || 0 > this.progress) && ((this.value = this.progress = 1 < this.progress ? 1 : 0), (this.yoyo = !this.yoyo)), this.onUpdate(this)
            }

            updateFromTo() {
                this.values.forEach(e => {
                    this.target[e] = this.from[e] + (this.to[e] - this.from[e]) * this.value
                })
            }

            getFromTo(e) {

                return e.target && e.to ?
                    void ((this.target = e.target || null),
                        (this.from = e.from || {}),
                        (this.to = e.to || null),
                        (this.value = []),
                        1 > Object.keys(this.from).length &&
                        Object.keys(this.to).forEach(e => {
                            this.from[e] = this.target[e];
                        }),
                        Object.keys(this.to).forEach(e => {
                            this.values.push(e);
                        }))
                    : void (this.values = null);
            }
        }
        window.addEventListener("touchmove", () => { }),
            document.addEventListener("touchmove", (e) => { e.preventDefault() },
                { passive: !1 })

        class v {
            constructor(e, t) {
                return (
                    (this.position = { current: new THREE.Vector2(), start: new THREE.Vector2(), delta: new THREE.Vector2(), old: new THREE.Vector2(), drag: new THREE.Vector2() }),
                    (this.options = Object.assign({ calcDelta: !1 }, t || {})),
                    (this.element = e),
                    (this.touch = null),
                    (this.drag = {
                        start: (e) => {
                            ("mousedown" == e.type && 1 != e.which) ||
                                ("touchstart" == e.type && 1 < e.touches.length) ||
                                (this.getPositionCurrent(e),
                                    this.position.calcDelta && ((this.position.start = this.position.current.clone()), this.position.delta.set(0, 0), this.position.drag.set(0, 0))
                                        (this.touch = "touchstart" == e.type),
                                    this.onDragStart(this.position),
                                    window.addEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1),
                                    window.addEventListener(this.touch ? "touchend" : "moveup", this.drag.end, !1));

                        },
                        move: (e) => {
                            this.options.calcDelta && (this.position.old = this.position.current.clone()),
                                this.getPositionCurrent(e),
                                this.options.calcDelta((this.position.delta = this.position.current.clone().sub(this.position.old)), (this.position.drag = this.position.current.clone().sub(this.position.start))),
                                this.onDragMove(this.position)
                        },
                        end: (e) => {
                            this.getPositionCurrent(e),
                                this.onDragEnd(this.position),
                                window.removeEventListener(this.touch ? "touchmove" : "mousemove", this.drag.move, !1),
                                window.removeEventListener(this.touch ? "touchend" : "moveup", this.drag.end, !1);
                        },



                    }
                    ),
                    (this.onDragStart = () => { }),
                    (this.onDragMove = () => { }),
                    (this.onDragEnd = () => { }),
                    this.enable(),
                    this
                )

            }

            enable() {
                return this.element.addEventListener("touchstart", this.drag.start, !1), this.addEventListener("mousedown", this.drag.start, !1), this;
            }
            disable() {
                return this.element.removeEventListener("touchstart", this.drag.start, !1), this.removeEventListener("mousedown", this.drag.start, !1), this;
            }

            getPositionCurrent(e) {
                const t = e.touches ? e.touches[0] || e.changeTouches[0] : e
                this.position.current.set(t.pageX, t.pageY)
            }
            convertPosition(e) {
                return (e.x = 2 * (e.x / this.element.offsetWidth) - 1), (e.y = -(2 * (e.y / this.element.offsetHeight) - 1)), e
            }


        }
        const f = 0;
    }

)