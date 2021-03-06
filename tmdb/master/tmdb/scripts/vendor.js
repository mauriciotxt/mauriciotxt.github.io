!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(_e, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? oe.parseJSON(n) : n)
            } catch (r) {
            }
            Ee.set(e, t, n)
        } else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function () {
                return i.cur()
            } : function () {
                return oe.css(e, t, "")
            }, u = a(), c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            l = (oe.cssNumber[t] || "px" !== c && +u) && Ne.exec(oe.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do o = o || ".5", l /= o, oe.style(e, t, l + c); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = l, i.end = r)), r
    }

    function l(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
    }

    function p(e, t, n, i, r) {
        for (var o, s, a, u, c, p, h = t.createDocumentFragment(), d = [], g = 0, m = e.length; g < m; g++) if (o = e[g], o || 0 === o) if ("object" === oe.type(o)) oe.merge(d, o.nodeType ? [o] : o); else if (Re.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (He.exec(o) || ["", ""])[1].toLowerCase(), u = Fe[a] || Fe._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--;) s = s.lastChild;
            oe.merge(d, s.childNodes), s = h.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(o));
        for (h.textContent = "", g = 0; o = d[g++];) if (i && oe.inArray(o, i) > -1) r && r.push(o); else if (c = oe.contains(o.ownerDocument, o), s = l(h.appendChild(o), "script"), c && f(s), n) for (p = 0; o = s[p++];) $e.test(o.type || "") && n.push(o);
        return h
    }

    function h() {
        return !0
    }

    function d() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (e) {
        }
    }

    function m(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) m(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = d; else if (!r) return e;
        return 1 === o && (s = r, r = function (e) {
            return oe().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = oe.guid++)), e.each(function () {
            oe.event.add(this, t, r, i, n)
        })
    }

    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, i, r, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (Se.hasData(e) && (o = Se.access(e), s = Se.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (r in c) for (n = 0, i = c[r].length; n < i; n++) oe.event.add(t, r, c[r][n])
            }
            Ee.hasData(e) && (a = Ee.access(e), u = oe.extend({}, a), Ee.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, i) {
        t = G.apply([], t);
        var r, o, s, a, u, c, f = 0, h = e.length, d = h - 1, g = t[0], m = oe.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !ie.checkClone && We.test(g)) return e.each(function (r) {
            var o = e.eq(r);
            m && (t[0] = g.call(this, r, o.html())), T(o, t, n, i)
        });
        if (h && (r = p(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = oe.map(l(r, "script"), y), a = s.length; f < h; f++) u = r, f !== d && (u = oe.clone(u, !0, !0), a && oe.merge(s, l(u, "script"))), n.call(e[f], u, f);
            if (a) for (c = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; f < a; f++) u = s[f], $e.test(u.type || "") && !Se.access(u, "globalEval") && oe.contains(c, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Ve, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(l(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(l(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function k(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body), i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function S(e) {
        var t = Q, n = Ue[e];
        return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ke[0].contentDocument, t.write(), t.close(), n = k(e, t), Ke.detach()), Ue[e] = n), n
    }

    function E(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Ye(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), n && !ie.pixelMarginRight() && Qe.test(s) && Xe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function D(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function _(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if (e = nt[n] + t, e in it) return e
    }

    function A(e, t, n) {
        var i = Ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function N(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += oe.css(e, n + je[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + je[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + je[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + je[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + je[o] + "Width", !0, r)));
        return s
    }

    function j(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ye(e),
            s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = E(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Qe.test(r)) return r;
            i = s && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function q(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = Se.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && qe(i) && (o[s] = Se.access(i, "olddisplay", S(i.nodeName)))) : (r = qe(i), "none" === n && r || Se.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function L(e, t, n, i, r) {
        return new L.prototype.init(e, t, n, i, r)
    }

    function H() {
        return e.setTimeout(function () {
            rt = void 0
        }), rt = oe.now()
    }

    function $(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = je[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
        for (var i, r = (O.tweeners[t] || []).concat(O.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
    }

    function R(e, t, n) {
        var i, r, o, s, a, u, c, l, f = this, p = {}, h = e.style, d = e.nodeType && qe(e), g = Se.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = oe.css(e, "display"), l = "none" === c ? Se.get(e, "olddisplay") || S(e.nodeName) : c, "inline" === l && "none" === oe.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t) if (r = t[i], st.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[i]) continue;
                d = !0
            }
            p[i] = g && g[i] || oe.style(e, i)
        } else c = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === c ? S(e.nodeName) : c) && (h.display = c); else {
            g ? "hidden" in g && (d = g.hidden) : g = Se.access(e, "fxshow", {}), o && (g.hidden = !d), d ? oe(e).show() : f.done(function () {
                oe(e).hide()
            }), f.done(function () {
                var t;
                Se.remove(e, "fxshow");
                for (t in p) oe.style(e, t, p[t])
            });
            for (i in p) s = F(d ? g[i] : 0, i, f), i in g || (g[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function I(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function O(e, t, n) {
        var i, r, o = 0, s = O.prefilters.length, a = oe.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (r) return !1;
            for (var t = rt || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
            return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {specialEasing: {}, easing: oe.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || H(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), l = c.props;
        for (I(l, c.opts.specialEasing); o < s; o++) if (i = O.prefilters[o].call(c, e, l, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(l, F, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function M(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function B(e, t, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), u
        }

        var o = {}, s = e === Et;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function W(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function z(e, t, n) {
        for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            u.unshift(r);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function V(e, t, n, i) {
        var r, o, s, a, u, c = {}, l = e.dataTypes.slice();
        if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (s = c[u + " " + o] || c["* " + o], !s) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], l.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t)
            } catch (f) {
                return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function K(e, t, n, i) {
        var r;
        if (oe.isArray(t)) oe.each(t, function (t, r) {
            n || Nt.test(e) ? i(e, r) : K(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== oe.type(t)) i(e, t); else for (r in t) K(e + "[" + r + "]", t[r], n, i)
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var X = [], Q = e.document, Y = X.slice, G = X.concat, J = X.push, Z = X.indexOf, ee = {}, te = ee.toString,
        ne = ee.hasOwnProperty, ie = {}, re = "2.2.4", oe = function (e, t) {
            return new oe.fn.init(e, t)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, ue = /-([\da-z])/gi, ce = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re, constructor: oe, selector: "", length: 0, toArray: function () {
            return Y.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Y.call(this)
        }, pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return oe.each(this, e)
        }, map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: J, sort: X.sort, splice: X.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === oe.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e) ;
            return void 0 === t || ne.call(e, t)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(ae, "ms-").replace(ue, ce)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var i, r = 0;
            if (n(e)) for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++) ; else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(se, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
        }, inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        }, map: function (e, t, i) {
            var r, o, s = 0, a = [];
            if (n(e)) for (r = e.length; s < r; s++) o = t(e[s], s, i), null != o && a.push(o); else for (s in e) o = t(e[s], s, i), null != o && a.push(o);
            return G.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return i = Y.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r
        }, now: Date.now, support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = X[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var le = function (e) {
        function t(e, t, n, i) {
            var r, o, s, a, u, c, f, h, d = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== q && j(t), t = t || q, H)) {
                if (11 !== g && (c = ve.exec(e))) if (r = c[1]) {
                    if (9 === g) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n
                    } else if (d && (s = d.getElementById(r)) && I(t, s) && s.id === r) return n.push(s), n
                } else {
                    if (c[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                }
                if (w.qsa && !V[e + " "] && (!$ || !$.test(e))) {
                    if (1 !== g) d = t, h = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = O), f = S(e), o = f.length, u = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + p(f[o]);
                        h = f.join(","), d = ye.test(e) && l(t.parentNode) || t
                    }
                    if (h) try {
                        return J.apply(n, d.querySelectorAll(h)), n
                    } catch (m) {
                    } finally {
                        a === O && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[O] = !0, e
        }

        function r(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
            } : function (t, n, s) {
                var a, u, c, l = [M, o];
                if (s) {
                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || r) {
                    if (c = t[O] || (t[O] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = u[i]) && a[0] === M && a[1] === o) return l[2] = a[2];
                    if (u[i] = l, l[2] = e(t, n, s)) return !0
                }
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function v(e, t, n, r, o, s) {
            return r && !r[O] && (r = v(r)), o && !o[O] && (o = v(o, s)), i(function (i, s, a, u) {
                var c, l, f, p = [], h = [], d = s.length, v = i || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : m(v, p, e, a, u), x = n ? o || (i ? e : d || r) ? [] : s : y;
                if (n && n(y, x, a, u), r) for (c = m(x, h), r(c, [], a, u), l = c.length; l--;) (f = c[l]) && (x[h[l]] = !(y[h[l]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = x.length; l--;) (f = x[l]) && c.push(y[l] = f);
                            o(null, x = [], c, u)
                        }
                        for (l = x.length; l--;) (f = x[l]) && (c = o ? ee(i, f) : p[l]) > -1 && (i[c] = !(s[c] = f))
                    }
                } else x = m(x === s ? x.splice(d, x.length) : x), o ? o(null, s, x, u) : J.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = h(function (e) {
                return e === t
            }, s, !0), c = h(function (e) {
                return ee(t, e) > -1
            }, s, !0), l = [function (e, n, i) {
                var r = !o && (i || n !== _) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                return t = null, r
            }]; a < r; a++) if (n = T.relative[e[a].type]) l = [h(d(l), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[O]) {
                    for (i = ++a; i < r && !T.relative[e[i].type]; i++) ;
                    return v(a > 1 && d(l), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && p(e))
                }
                l.push(n)
            }
            return d(l)
        }

        function x(e, n) {
            var r = n.length > 0, o = e.length > 0, s = function (i, s, a, u, c) {
                var l, f, p, h = 0, d = "0", g = i && [], v = [], y = _, x = i || o && T.find.TAG("*", c),
                    b = M += null == y ? 1 : Math.random() || .1, w = x.length;
                for (c && (_ = s === q || s || c); d !== w && null != (l = x[d]); d++) {
                    if (o && l) {
                        for (f = 0, s || l.ownerDocument === q || (j(l), a = !H); p = e[f++];) if (p(l, s || q, a)) {
                            u.push(l);
                            break
                        }
                        c && (M = b)
                    }
                    r && ((l = !p && l) && h--, i && g.push(l))
                }
                if (h += d, r && d !== h) {
                    for (f = 0; p = n[f++];) p(g, v, s, a);
                    if (i) {
                        if (h > 0) for (; d--;) g[d] || v[d] || (v[d] = Y.call(u));
                        v = m(v)
                    }
                    J.apply(u, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return c && (M = b, _ = y), g
            };
            return r ? i(s) : s
        }

        var b, w, T, C, k, S, E, D, _, A, N, j, q, L, H, $, F, R, I, O = "sizzle" + 1 * new Date, P = e.document, M = 0,
            B = 0, W = n(), z = n(), V = n(), K = function (e, t) {
                return e === t && (N = !0), 0
            }, U = 1 << 31, X = {}.hasOwnProperty, Q = [], Y = Q.pop, G = Q.push, J = Q.push, Z = Q.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe),
            pe = new RegExp("^" + ie + "$"), he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, de = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Te = function () {
                j()
            };
        try {
            J.apply(Q = Z.call(P.childNodes), P.childNodes), Q[P.childNodes.length].nodeType
        } catch (Ce) {
            J = {
                apply: Q.length ? function (e, t) {
                    G.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, j = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== q && 9 === i.nodeType && i.documentElement ? (q = i, L = q.documentElement, H = !k(q), (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(q.getElementsByClassName), w.getById = r(function (e) {
                return L.appendChild(e).id = O, !q.getElementsByName || !q.getElementsByName(O).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, F = [], $ = [], (w.qsa = me.test(q.querySelectorAll)) && (r(function (e) {
                L.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || $.push("~="), e.querySelectorAll(":checked").length || $.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || $.push(".#.+[+~]")
            }), r(function (e) {
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:")
            })), (w.matchesSelector = me.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), F.push("!=", oe)
            }), $ = $.length && new RegExp($.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(L.compareDocumentPosition), I = t || me.test(L.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, K = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === P && I(P, e) ? -1 : t === q || t.ownerDocument === P && I(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!r || !o) return e === q ? -1 : t === q ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[i] === u[i];) i++;
                return i ? s(a[i], u[i]) : a[i] === P ? -1 : u[i] === P ? 1 : 0
            }, q) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && j(e), n = n.replace(le, "='$1']"), w.matchesSelector && H && !V[n + " "] && (!F || !F.test(n)) && (!$ || !$.test(n))) try {
                var i = R.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && j(e), I(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && j(e);
            var n = T.attrHandle[t.toLowerCase()],
                i = n && X.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : w.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (N = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(K), N) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, C = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var c, l, f, p, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(), y = !u && !a, x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && y) {
                                for (p = m, f = p[O] || (p[O] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], h = c[0] === M && c[1], x = h && c[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (x = h = 0) || d.pop();) if (1 === p.nodeType && ++x && p === t) {
                                    l[e] = [M, h, x];
                                    break
                                }
                            } else if (y && (p = t, f = p[O] || (p[O] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], h = c[0] === M && c[1], x = h), x === !1) for (; (p = ++h && p && p[g] || (x = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[O] || (p[O] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[e] = [M, x]), p !== t));) ;
                            return x -= r, x === i || x % i === 0 && x / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = E(e.replace(ae, "$1"));
                    return r[O] ? i(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(be, we), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === L
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return de.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) T.pseudos[b] = a(b);
        for (b in {submit: !0, reset: !0}) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, S = t.tokenize = function (e, n) {
            var i, r, o, s, a, u, c, l = z[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = e, u = [], c = T.preFilter; a;) {
                i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in T.filter) !(r = he[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, i = [], r = [], o = V[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[O] ? i.push(o) : r.push(o);
                o = V(e, x(r, i)), o.selector = e
            }
            return o
        }, D = t.select = function (e, t, n, i) {
            var r, o, s, a, u, c = "function" == typeof e && e, f = !i && S(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);) if ((u = T.find[a]) && (i = u(s.matches[0].replace(be, we), ye.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(r, 1), e = i.length && p(o), !e) return J.apply(n, i), n;
                    break
                }
            }
            return (c || E(e, f))(i, t, !H, n, !t || ye.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = O.split("").sort(K).join("") === O, w.detectDuplicates = !!N, j(), w.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = le, oe.expr = le.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = le.uniqueSort, oe.text = le.getText, oe.isXMLDoc = le.isXML, oe.contains = le.contains;
    var fe = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && oe(e).is(n)) break;
            i.push(e)
        }
        return i
    }, pe = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, he = oe.expr.match.needsContext, de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ge = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; t < n; t++) if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < n; t++) oe.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && he.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var me, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = oe.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), de.test(i[1]) && oe.isPlainObject(t)) for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = Q.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    };
    ye.prototype = oe.fn, me = oe(Q);
    var xe = /^(?:parents|prev(?:Until|All))/, be = {children: !0, contents: !0, next: !0, prev: !0};
    oe.fn.extend({
        has: function (e) {
            var t = oe(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (oe.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], s = he.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return fe(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return fe(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return fe(e, "nextSibling")
        }, prevAll: function (e) {
            return fe(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return fe(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return fe(e, "previousSibling", n)
        }, siblings: function (e) {
            return pe((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return pe(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[e] || oe.uniqueSort(r), xe.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, s = [], a = [], u = -1, c = function () {
            for (r = e.once, i = t = !0; a.length; u = -1) for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
            e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
        }, l = {
            add: function () {
                return s && (n && !t && (u = s.length - 1, a.push(n)), function i(t) {
                    oe.each(t, function (t, n) {
                        oe.isFunction(n) ? e.unique && l.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                    })
                }(arguments), n && !t && c()), this
            }, remove: function () {
                return oe.each(arguments, function (e, t) {
                    for (var n; (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? oe.inArray(e, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return r = a = [], s = n = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return r = a = [], n || (s = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return l
    }, oe.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, oe.each(t, function (e, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = Y.call(arguments), s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0, u = 1 === a ? e : oe.Deferred(),
                c = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(u.reject) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var Te;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(Q, [oe]), oe.fn.triggerHandler && (oe(Q).triggerHandler("ready"), oe(Q).off("ready"))))
        }
    }), oe.ready.promise = function (t) {
        return Te || (Te = oe.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(oe.ready) : (Q.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
    }, oe.ready.promise();
    var Ce = function (e, t, n, i, r, o, s) {
        var a = 0, u = e.length, c = null == n;
        if ("object" === oe.type(n)) {
            r = !0;
            for (a in n) Ce(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(oe(e), n)
        })), t)) for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }, ke = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1, a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        }, cache: function (e) {
            if (!ke(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n; else for (i in t) r[i] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e); else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(we) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Se = new a, Ee = new a, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /[A-Z]/g;
    oe.extend({
        hasData: function (e) {
            return Ee.hasData(e) || Se.hasData(e)
        }, data: function (e, t, n) {
            return Ee.access(e, t, n)
        }, removeData: function (e, t) {
            Ee.remove(e, t)
        }, _data: function (e, t, n) {
            return Se.access(e, t, n)
        }, _removeData: function (e, t) {
            Se.remove(e, t)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ee.get(o), 1 === o.nodeType && !Se.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), u(o, i, r[i])));
                    Se.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                Ee.set(this, e)
            }) : Ce(this, function (t) {
                var n, i;
                if (o && void 0 === t) {
                    if (n = Ee.get(o, e) || Ee.get(o, e.replace(_e, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = oe.camelCase(e), n = Ee.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else i = oe.camelCase(e), this.each(function () {
                    var n = Ee.get(this, i);
                    Ee.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Ee.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Se.get(e, t), n && (!i || oe.isArray(n) ? i = Se.access(e, t, oe.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t), i = n.length, r = n.shift(), o = oe._queueHooks(e, t), s = function () {
                oe.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Se.get(e, n) || Se.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    Se.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = oe.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Se.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ne = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        je = ["Top", "Right", "Bottom", "Left"], qe = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        }, Le = /^(?:checkbox|radio)$/i, He = /<([\w:-]+)/, $e = /^$|\/(?:java|ecma)script/i, Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
    var Re = /<|&#?\w+;/;
    !function () {
        var e = Q.createDocumentFragment(), t = e.appendChild(Q.createElement("div")), n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ie = /^key/, Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Pe = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, u, c, l, f, p, h, d, g, m = Se.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(we) || [""], c = t.length; c--;) a = Pe.exec(t[c]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h && (f = oe.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = oe.event.special[h] || {}, l = oe.extend({
                type: h,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && oe.expr.match.needsContext.test(r),
                namespace: d.join(".")
            }, o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, i, d, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, l) : p.push(l), oe.event.global[h] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, s, a, u, c, l, f, p, h, d, g, m = Se.hasData(e) && Se.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(we) || [""], c = t.length; c--;) if (a = Pe.exec(t[c]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                    for (f = oe.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, p = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) l = p[o], !r && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                    s && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || oe.removeEvent(e, h, m.handle), delete u[h])
                } else for (h in u) oe.event.remove(e, h + t[c], n, i, !0);
                oe.isEmptyObject(u) && Se.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, s = [], a = Y.call(arguments), u = (Se.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0; (r = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(u) > -1 : oe.find(r, this, null, [u]).length), i[r] && i.push(o);
                i.length && s.push({elem: u, handlers: i})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Oe.test(r) ? this.mouseHooks : Ie.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== g() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === g() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : d) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void (this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, i) {
            return m(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return m(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = d), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Be = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i, ze = /^true\/(.*)/, Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Me, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), u = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) for (s = l(a), o = l(e), i = 0, r = o.length; i < r; i++) w(o[i], s[i]);
            if (t) if (n) for (o = o || l(e), s = s || l(a), i = 0, r = o.length; i < r; i++) b(o[i], s[i]); else b(e, a);
            return s = l(a, "script"), s.length > 0 && f(s, !u && l(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++) if (ke(n)) {
                if (t = n[Se.expando]) {
                    if (t.events) for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                    n[Se.expando] = void 0
                }
                n[Ee.expando] && (n[Ee.expando] = void 0)
            }
        }
    }), oe.fn.extend({
        domManip: T, detach: function (e) {
            return C(this, e, !0)
        }, remove: function (e) {
            return C(this, e)
        }, text: function (e) {
            return Ce(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(l(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        }, html: function (e) {
            return Ce(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Be.test(e) && !Fe[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(l(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(l(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), oe(r[s])[t](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ke, Ue = {HTML: "block", BODY: "block"}, Xe = /^margin/, Qe = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        Ye = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, Ge = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        }, Je = Q.documentElement;
    !function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Je.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(s)
        }

        var n, i, r, o, s = Q.createElement("div"), a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == i && t(), i
            }, pixelMarginRight: function () {
                return null == i && t(), r
            }, reliableMarginLeft: function () {
                return null == i && t(), o
            }, reliableMarginRight: function () {
                var t, n = a.appendChild(Q.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Je.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Je.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/, et = {position: "absolute", visibility: "hidden", display: "block"},
        tt = {letterSpacing: "0", fontWeight: "400"}, nt = ["Webkit", "O", "Moz", "ms"],
        it = Q.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = E(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = oe.camelCase(t), u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = _(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : (o = typeof n, "string" === o && (r = Ne.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n)), void 0)
            }
        },
        css: function (e, t, n, i) {
            var r, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = _(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = E(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, et, function () {
                    return j(e, t, i)
                }) : j(e, t, i)
            }, set: function (e, n, i) {
                var r, o = i && Ye(e), s = i && N(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (r = Ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), A(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = D(ie.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(E(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), oe.cssHooks.marginRight = D(ie.reliableMarginRight, function (e, t) {
        if (t) return Ge(e, {display: "inline-block"}, E, [e, "marginRight"])
    }), oe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + je[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Xe.test(e) || (oe.cssHooks[e + t].set = A)
    }), oe.fn.extend({
        css: function (e, t) {
            return Ce(this, function (e, t, n) {
                var i, r, o = {}, s = 0;
                if (oe.isArray(t)) {
                    for (i = Ye(e), r = t.length; s < r; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return q(this, !0)
        }, hide: function () {
            return q(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = L, L.prototype = {
        constructor: L, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, oe.fx = L.prototype.init, oe.fx.step = {};
    var rt, ot, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    oe.Animation = oe.extend(O, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return c(n.elem, e, Ne.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], O.tweeners[n] = O.tweeners[n] || [], O.tweeners[n].unshift(t)
        }, prefilters: [R], prefilter: function (e, t) {
            t ? O.prefilters.unshift(e) : O.prefilters.push(e)
        }
    }), oe.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
        }, i
    }, oe.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(qe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = oe.isEmptyObject(e), o = oe.speed(t, n, i), s = function () {
                var t = O(this, oe.extend({}, e), o);
                (r || Se.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = oe.timers, s = Se.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                !t && n || oe.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = Se.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = oe.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function (e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
        }
    }), oe.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        oe.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), oe.timers = [], oe.fx.tick = function () {
        var e, t = 0, n = oe.timers;
        for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(), rt = void 0
    }, oe.fx.timer = function (e) {
        oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
        e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e = Q.createElement("input"), t = Q.createElement("select"), n = t.appendChild(Q.createElement("option"));
        e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
    }();
    var ut, ct = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function (e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(we);
            if (o && 1 === e.nodeType) for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), ut = {
        set: function (e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ct[t] || oe.find.attr;
        ct[t] = function (e, t, i) {
            var r, o;
            return i || (o = ct[t], ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = o), r
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, P(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[u++];) if (r = P(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                a = oe.trim(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, P(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[u++];) if (r = P(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                a = oe.trim(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
                oe(this).toggleClass(e.call(this, n, P(this), t), t)
            }) : this.each(function () {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = oe(this), o = e.match(we) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || (t = P(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Se.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + P(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g, dt = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length) return i = oe.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ht, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(dt, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, u = r < 0 ? a : o ? r : 0; u < a; u++) if (n = i[u], (n.selected || u === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = oe(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, ie.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function (t, n, i, r) {
            var o, s, a, u, c, l, f, p = [i || Q], h = ne.call(t, "type") ? t.type : t,
                d = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(h + oe.event.triggered) && (h.indexOf(".") > -1 && (d = h.split("."), h = d.shift(), d.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[oe.expando] ? t : new oe.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[h] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !oe.isWindow(i)) {
                    for (u = f.delegateType || h, gt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, l = (Se.get(s, "events") || {})[t.type] && Se.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && ke(s) && (t.result = l.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !ke(i) || c && oe.isFunction(i[h]) && !oe.isWindow(i) && (a = i[c], a && (i[c] = null), oe.event.triggered = h, i[h](), oe.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var i = oe.extend(new oe.Event, n, {type: e, isSimulated: !0});
            oe.event.trigger(i, null, t)
        }
    }), oe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = Se.access(i, t);
                r || i.addEventListener(e, n, !0), Se.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = Se.access(i, t) - 1;
                r ? Se.access(i, t, r) : (i.removeEventListener(e, n, !0), Se.remove(i, t))
            }
        }
    });
    var mt = e.location, vt = oe.now(), yt = /\?/;
    oe.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var xt = /#.*$/, bt = /([?&])_=[^&]*/, wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ct = /^(?:GET|HEAD)$/, kt = /^\/\//, St = {},
        Et = {}, Dt = "*/".concat("*"), _t = Q.createElement("a");
    _t.href = mt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: Tt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: M(St),
        ajaxTransport: M(Et),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var c, f, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = z(p, T, i)), x = V(p, x, T, c), c ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, y = x.error, c = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? g.resolveWith(h, [f, C, T]) : g.rejectWith(h, [T, C, y]), T.statusCode(v), v = void 0, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : y]), m.fireWith(h, [T, C]), l && (d.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, u, c, l, f, p = oe.ajaxSetup({}, n), h = p.context || p,
                d = p.context && (h.nodeType || h.jquery) ? oe(h) : oe.event, g = oe.Deferred(),
                m = oe.Callbacks("once memory"), v = p.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!a) for (a = {}; t = wt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (b < 2) for (t in e) v[t] = [v[t], e[t]]; else T.always(e[T.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || mt.href) + "").replace(xt, "").replace(kt, mt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = _t.protocol + "//" + _t.host != c.protocol + "//" + c.host
                } catch (C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), B(St, p, n, T), 2 === b) return T;
            l = oe.event && p.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ct.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (yt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = bt.test(o) ? o.replace(bt, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)), p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(h, T, p) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (f in {success: 1, error: 1, complete: 1}) T[f](p[f]);
            if (r = B(Et, p, n, T)) {
                if (T.readyState = 1, l && d.trigger("ajaxSend", [T, p]), 2 === b) return T;
                p.async && p.timeout > 0 && (u = e.setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, r.send(y, i)
                } catch (C) {
                    if (!(b < 2)) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, oe.fn.extend({
        wrapAll: function (e) {
            var t;
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return oe.isFunction(e) ? this.each(function (t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = oe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var At = /%20/g, Nt = /\[\]$/, jt = /\r?\n/g, qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) K(n, e[n], t, r);
        return i.join("&").replace(At, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !Le.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {name: t.name, value: e.replace(jt, "\r\n")}
                }) : {name: t.name, value: n.replace(jt, "\r\n")}
            }).get()
        }
    }), oe.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    };
    var Ht = {0: 200, 1223: 204}, $t = oe.ajaxSettings.xhr();
    ie.cors = !!$t && "withCredentials" in $t, ie.ajax = $t = !!$t, oe.ajaxTransport(function (t) {
        var n, i;
        if (ie.cors || $t && !t.crossDomain) return {
            send: function (r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ht[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (n) throw u
                }
            }, abort: function () {
                n && n()
            }
        }
    }), oe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = oe("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Ft = [], Rt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ft.pop() || oe.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, s,
            a = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Rt, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || oe.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ft.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Q;
        var i = de.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var It = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, s, a, u, c, l = oe.css(e, "position"), f = oe(e), p = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
            if (o) return t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = U(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (i) {
            return Ce(this, function (e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = D(ie.pixelPosition, function (e, n) {
            if (n) return n = E(e, t), Qe.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({Height: "height", Width: "width"}, function (e, t) {
        oe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            oe.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ce(this, function (t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var Ot = e.jQuery, Pt = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = Pt), t && e.jQuery === oe && (e.jQuery = Ot), oe
    }, t || (e.jQuery = e.$ = oe), oe
}), !function (e) {
    var t = function () {
        "use strict";
        return {
            isMsie: function () {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            }, isBlankString: function (e) {
                return !e || /^\s*$/.test(e)
            }, escapeRegExChars: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (e) {
                return "string" == typeof e
            }, isNumber: function (e) {
                return "number" == typeof e
            }, isArray: e.isArray, isFunction: e.isFunction, isObject: e.isPlainObject, isUndefined: function (e) {
                return "undefined" == typeof e
            }, toStr: function (e) {
                return t.isUndefined(e) || null === e ? "" : e + ""
            }, bind: e.proxy, each: function (t, n) {
                function i(e, t) {
                    return n(t, e)
                }

                e.each(t, i)
            }, map: e.map, filter: e.grep, every: function (t, n) {
                var i = !0;
                return t ? (e.each(t, function (e, r) {
                    return !!(i = n.call(null, r, e, t)) && void 0
                }), !!i) : i
            }, some: function (t, n) {
                var i = !1;
                return t ? (e.each(t, function (e, r) {
                    return !(i = n.call(null, r, e, t)) && void 0
                }), !!i) : i
            }, mixin: e.extend, getUniqueId: function () {
                var e = 0;
                return function () {
                    return e++
                }
            }(), templatify: function (t) {
                function n() {
                    return String(t)
                }

                return e.isFunction(t) ? t : n
            }, defer: function (e) {
                setTimeout(e, 0)
            }, debounce: function (e, t, n) {
                var i, r;
                return function () {
                    var o, s, a = this, u = arguments;
                    return o = function () {
                        i = null, n || (r = e.apply(a, u))
                    }, s = n && !i, clearTimeout(i), i = setTimeout(o, t), s && (r = e.apply(a, u)), r
                }
            }, throttle: function (e, t) {
                var n, i, r, o, s, a;
                return s = 0, a = function () {
                    s = new Date, r = null, o = e.apply(n, i)
                }, function () {
                    var u = new Date, c = t - (u - s);
                    return n = this, i = arguments, 0 >= c ? (clearTimeout(r), r = null, s = u, o = e.apply(n, i)) : r || (r = setTimeout(a, c)), o
                }
            }, noop: function () {
            }
        }
    }(), n = "0.10.5", i = function () {
        "use strict";

        function e(e) {
            return e = t.toStr(e), e ? e.split(/\s+/) : []
        }

        function n(e) {
            return e = t.toStr(e), e ? e.split(/\W+/) : []
        }

        function i(e) {
            return function () {
                var n = [].slice.call(arguments, 0);
                return function (i) {
                    var r = [];
                    return t.each(n, function (n) {
                        r = r.concat(e(t.toStr(i[n])))
                    }), r
                }
            }
        }

        return {nonword: n, whitespace: e, obj: {nonword: i(n), whitespace: i(e)}}
    }(), r = function () {
        "use strict";

        function n(n) {
            this.maxSize = t.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = e.noop)
        }

        function i() {
            this.head = this.tail = null
        }

        function r(e, t) {
            this.key = e, this.val = t, this.prev = this.next = null
        }

        return t.mixin(n.prototype, {
            set: function (e, t) {
                var n, i = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[e]) ? (n.val = t, this.list.moveToFront(n)) : (n = new r(e, t), this.list.add(n), this.hash[e] = n, this.size++)
            }, get: function (e) {
                var t = this.hash[e];
                return t ? (this.list.moveToFront(t), t.val) : void 0
            }, reset: function () {
                this.size = 0, this.hash = {}, this.list = new i
            }
        }), t.mixin(i.prototype, {
            add: function (e) {
                this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
            }, remove: function (e) {
                e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
            }, moveToFront: function (e) {
                this.remove(e), this.add(e)
            }
        }), n
    }(), o = function () {
        "use strict";

        function e(e) {
            this.prefix = ["__", e, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + t.escapeRegExChars(this.prefix))
        }

        function n() {
            return (new Date).getTime()
        }

        function i(e) {
            return JSON.stringify(t.isUndefined(e) ? null : e)
        }

        function r(e) {
            return JSON.parse(e)
        }

        var o, s;
        try {
            o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
        } catch (a) {
            o = null
        }
        return s = o && window.JSON ? {
            _prefix: function (e) {
                return this.prefix + e
            }, _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            }, get: function (e) {
                return this.isExpired(e) && this.remove(e), r(o.getItem(this._prefix(e)))
            }, set: function (e, r, s) {
                return t.isNumber(s) ? o.setItem(this._ttlKey(e), i(n() + s)) : o.removeItem(this._ttlKey(e)), o.setItem(this._prefix(e), i(r))
            }, remove: function (e) {
                return o.removeItem(this._ttlKey(e)), o.removeItem(this._prefix(e)), this
            }, clear: function () {
                var e, t, n = [], i = o.length;
                for (e = 0; i > e; e++) (t = o.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                for (e = n.length; e--;) this.remove(n[e]);
                return this
            }, isExpired: function (e) {
                var i = r(o.getItem(this._ttlKey(e)));
                return !!(t.isNumber(i) && n() > i)
            }
        } : {get: t.noop, set: t.noop, remove: t.noop, clear: t.noop, isExpired: t.noop}, t.mixin(e.prototype, s), e
    }(), s = function () {
        "use strict";

        function n(t) {
            t = t || {}, this.cancelled = !1, this.lastUrl = null, this._send = t.transport ? i(t.transport) : e.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get, this._cache = t.cache === !1 ? new r(0) : u
        }

        function i(n) {
            return function (i, r) {
                function o(e) {
                    t.defer(function () {
                        a.resolve(e)
                    })
                }

                function s(e) {
                    t.defer(function () {
                        a.reject(e)
                    })
                }

                var a = e.Deferred();
                return n(i, r, o, s), a
            }
        }

        var o = 0, s = {}, a = 6, u = new r(10);
        return n.setMaxPendingRequests = function (e) {
            a = e
        }, n.resetCache = function () {
            u.reset()
        }, t.mixin(n.prototype, {
            _get: function (e, t, n) {
                function i(t) {
                    n && n(null, t), l._cache.set(e, t)
                }

                function r() {
                    n && n(!0)
                }

                function u() {
                    o--, delete s[e], l.onDeckRequestArgs && (l._get.apply(l, l.onDeckRequestArgs), l.onDeckRequestArgs = null)
                }

                var c, l = this;
                this.cancelled || e !== this.lastUrl || ((c = s[e]) ? c.done(i).fail(r) : a > o ? (o++, s[e] = this._send(e, t).done(i).fail(r).always(u)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
            }, get: function (e, n, i) {
                var r;
                return t.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = e, (r = this._cache.get(e)) ? t.defer(function () {
                    i && i(null, r)
                }) : this._get(e, n, i), !!r
            }, cancel: function () {
                this.cancelled = !0
            }
        }), n
    }(), a = function () {
        "use strict";

        function n(t) {
            t = t || {}, t.datumTokenizer && t.queryTokenizer || e.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.reset()
        }

        function i(e) {
            return e = t.filter(e, function (e) {
                return !!e
            }), e = t.map(e, function (e) {
                return e.toLowerCase()
            })
        }

        function r() {
            return {ids: [], children: {}}
        }

        function o(e) {
            for (var t = {}, n = [], i = 0, r = e.length; r > i; i++) t[e[i]] || (t[e[i]] = !0, n.push(e[i]));
            return n
        }

        function s(e, t) {
            function n(e, t) {
                return e - t
            }

            var i = 0, r = 0, o = [];
            e = e.sort(n), t = t.sort(n);
            for (var s = e.length, a = t.length; s > i && a > r;) e[i] < t[r] ? i++ : e[i] > t[r] ? r++ : (o.push(e[i]), i++, r++);
            return o
        }

        return t.mixin(n.prototype, {
            bootstrap: function (e) {
                this.datums = e.datums, this.trie = e.trie
            }, add: function (e) {
                var n = this;
                e = t.isArray(e) ? e : [e], t.each(e, function (e) {
                    var o, s;
                    o = n.datums.push(e) - 1, s = i(n.datumTokenizer(e)), t.each(s, function (e) {
                        var t, i, s;
                        for (t = n.trie, i = e.split(""); s = i.shift();) t = t.children[s] || (t.children[s] = r()), t.ids.push(o)
                    })
                })
            }, get: function (e) {
                var n, r, a = this;
                return n = i(this.queryTokenizer(e)), t.each(n, function (e) {
                    var t, n, i, o;
                    if (r && 0 === r.length) return !1;
                    for (t = a.trie, n = e.split(""); t && (i = n.shift());) t = t.children[i];
                    return t && 0 === n.length ? (o = t.ids.slice(0), void (r = r ? s(r, o) : o)) : (r = [], !1)
                }), r ? t.map(o(r), function (e) {
                    return a.datums[e]
                }) : []
            }, reset: function () {
                this.datums = [], this.trie = r()
            }, serialize: function () {
                return {datums: this.datums, trie: this.trie}
            }
        }), n
    }(), u = function () {
        "use strict";

        function i(e) {
            return e.local || null
        }

        function r(i) {
            var r, o;
            return o = {
                url: null,
                thumbprint: "",
                ttl: 864e5,
                filter: null,
                ajax: {}
            }, (r = i.prefetch || null) && (r = t.isString(r) ? {url: r} : r, r = t.mixin(o, r), r.thumbprint = n + r.thumbprint, r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", !r.url && e.error("prefetch requires url to be set")), r
        }

        function o(n) {
            function i(e) {
                return function (n) {
                    return t.debounce(n, e)
                }
            }

            function r(e) {
                return function (n) {
                    return t.throttle(n, e)
                }
            }

            var o, s;
            return s = {
                url: null,
                cache: !0,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            }, (o = n.remote || null) && (o = t.isString(o) ? {url: o} : o, o = t.mixin(s, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? r(o.rateLimitWait) : i(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && e.error("remote requires url to be set")), o
        }

        return {local: i, prefetch: r, remote: o}
    }();
    !function (n) {
        "use strict";

        function r(t) {
            t && (t.local || t.prefetch || t.remote) || e.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = c(t.sorter), this.dupDetector = t.dupDetector || l, this.local = u.local(t), this.prefetch = u.prefetch(t), this.remote = u.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), this.storage = this.cacheKey ? new o(this.cacheKey) : null
        }

        function c(e) {
            function n(t) {
                return t.sort(e)
            }

            function i(e) {
                return e
            }

            return t.isFunction(e) ? n : i
        }

        function l() {
            return !1
        }

        var f, p;
        return f = n.Bloodhound, p = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, n.Bloodhound = r, r.noConflict = function () {
            return n.Bloodhound = f, r
        }, r.tokenizers = i, t.mixin(r.prototype, {
            _loadPrefetch: function (t) {
                function n(e) {
                    o.clear(), o.add(t.filter ? t.filter(e) : e), o._saveToStorage(o.index.serialize(), t.thumbprint, t.ttl)
                }

                var i, r, o = this;
                return (i = this._readFromStorage(t.thumbprint)) ? (this.index.bootstrap(i), r = e.Deferred().resolve()) : r = e.ajax(t.url, t.ajax).done(n), r
            }, _getFromRemote: function (e, t) {
                function n(e, n) {
                    t(e ? [] : o.remote.filter ? o.remote.filter(n) : n)
                }

                var i, r, o = this;
                if (this.transport) return e = e || "", r = encodeURIComponent(e), i = this.remote.replace ? this.remote.replace(this.remote.url, e) : this.remote.url.replace(this.remote.wildcard, r), this.transport.get(i, this.remote.ajax, n)
            }, _cancelLastRemoteRequest: function () {
                this.transport && this.transport.cancel()
            }, _saveToStorage: function (e, t, n) {
                this.storage && (this.storage.set(p.data, e, n), this.storage.set(p.protocol, location.protocol, n), this.storage.set(p.thumbprint, t, n))
            }, _readFromStorage: function (e) {
                var t, n = {};
                return this.storage && (n.data = this.storage.get(p.data), n.protocol = this.storage.get(p.protocol), n.thumbprint = this.storage.get(p.thumbprint)), t = n.thumbprint !== e || n.protocol !== location.protocol, n.data && !t ? n.data : null
            }, _initialize: function () {
                function n() {
                    r.add(t.isFunction(o) ? o() : o)
                }

                var i, r = this, o = this.local;
                return i = this.prefetch ? this._loadPrefetch(this.prefetch) : e.Deferred().resolve(), o && i.done(n), this.transport = this.remote ? new s(this.remote) : null, this.initPromise = i.promise()
            }, initialize: function (e) {
                return !this.initPromise || e ? this._initialize() : this.initPromise
            }, add: function (e) {
                this.index.add(e)
            }, get: function (e, n) {
                function i(e) {
                    var i = o.slice(0);
                    t.each(e, function (e) {
                        var n;
                        return n = t.some(i, function (t) {
                            return r.dupDetector(e, t)
                        }), !n && i.push(e), i.length < r.limit
                    }), n && n(r.sorter(i));
                }

                var r = this, o = [], s = !1;
                o = this.index.get(e), o = this.sorter(o).slice(0, this.limit), o.length < this.limit ? s = this._getFromRemote(e, i) : this._cancelLastRemoteRequest(), s || (o.length > 0 || !this.transport) && n && n(o)
            }, clear: function () {
                this.index.reset()
            }, clearPrefetchCache: function () {
                this.storage && this.storage.clear()
            }, clearRemoteCache: function () {
                this.transport && s.resetCache()
            }, ttAdapter: function () {
                return t.bind(this.get, this)
            }
        }), r
    }(this);
    var c = function () {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        }
    }(), l = function () {
        "use strict";
        var e = {
            wrapper: {position: "relative", display: "inline-block"},
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
            inputWithNoHint: {position: "relative", verticalAlign: "top"},
            dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
            suggestions: {display: "block"},
            suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
            suggestionChild: {whiteSpace: "normal"},
            ltr: {left: "0", right: "auto"},
            rtl: {left: "auto", right: " 0"}
        };
        return t.isMsie() && t.mixin(e.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), t.isMsie() && t.isMsie() <= 7 && t.mixin(e.input, {marginTop: "-1px"}), e
    }(), f = function () {
        "use strict";

        function n(t) {
            t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
        }

        var i = "typeahead:";
        return t.mixin(n.prototype, {
            trigger: function (e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger(i + e, t)
            }
        }), n
    }(), p = function () {
        "use strict";

        function e(e, t, n, i) {
            var r;
            if (!n) return this;
            for (t = t.split(u), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; r = t.shift();) this._callbacks[r] = this._callbacks[r] || {
                sync: [],
                async: []
            }, this._callbacks[r][e].push(n);
            return this
        }

        function t(t, n, i) {
            return e.call(this, "async", t, n, i)
        }

        function n(t, n, i) {
            return e.call(this, "sync", t, n, i)
        }

        function i(e) {
            var t;
            if (!this._callbacks) return this;
            for (e = e.split(u); t = e.shift();) delete this._callbacks[t];
            return this
        }

        function r(e) {
            var t, n, i, r, s;
            if (!this._callbacks) return this;
            for (e = e.split(u), i = [].slice.call(arguments, 1); (t = e.shift()) && (n = this._callbacks[t]);) r = o(n.sync, this, [t].concat(i)), s = o(n.async, this, [t].concat(i)), r() && c(s);
            return this
        }

        function o(e, t, n) {
            function i() {
                for (var i, r = 0, o = e.length; !i && o > r; r += 1) i = e[r].apply(t, n) === !1;
                return !i
            }

            return i
        }

        function s() {
            var e;
            return e = window.setImmediate ? function (e) {
                setImmediate(function () {
                    e()
                })
            } : function (e) {
                setTimeout(function () {
                    e()
                }, 0)
            }
        }

        function a(e, t) {
            return e.bind ? e.bind(t) : function () {
                e.apply(t, [].slice.call(arguments, 0))
            }
        }

        var u = /\s+/, c = s();
        return {onSync: n, onAsync: t, off: i, trigger: r}
    }(), h = function (e) {
        "use strict";

        function n(e, n, i) {
            for (var r, o = [], s = 0, a = e.length; a > s; s++) o.push(t.escapeRegExChars(e[s]));
            return r = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
        }

        var i = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
        return function (r) {
            function o(t) {
                var n, i, o;
                return (n = a.exec(t.data)) && (o = e.createElement(r.tagName), r.className && (o.className = r.className), i = t.splitText(n.index), i.splitText(n[0].length), o.appendChild(i.cloneNode(!0)), t.parentNode.replaceChild(o, i)), !!n
            }

            function s(e, t) {
                for (var n, i = 3, r = 0; r < e.childNodes.length; r++) n = e.childNodes[r], n.nodeType === i ? r += t(n) ? 1 : 0 : s(n, t)
            }

            var a;
            r = t.mixin({}, i, r), r.node && r.pattern && (r.pattern = t.isArray(r.pattern) ? r.pattern : [r.pattern], a = n(r.pattern, r.caseSensitive, r.wordsOnly), s(r.node, o))
        }
    }(window.document), d = function () {
        "use strict";

        function n(n) {
            var r, o, a, u, c = this;
            n = n || {}, n.input || e.error("input is missing"), r = t.bind(this._onBlur, this), o = t.bind(this._onFocus, this), a = t.bind(this._onKeydown, this), u = t.bind(this._onInput, this), this.$hint = e(n.hint), this.$input = e(n.input).on("blur.tt", r).on("focus.tt", o).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop), t.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                s[e.which || e.keyCode] || t.defer(t.bind(c._onInput, c, e))
            }) : this.$input.on("input.tt", u), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
        }

        function i(t) {
            return e('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }

        function r(e, t) {
            return n.normalizeQuery(e) === n.normalizeQuery(t)
        }

        function o(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        var s;
        return s = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, n.normalizeQuery = function (e) {
            return (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, t.mixin(n.prototype, p, {
            _onBlur: function () {
                this.resetInputValue(), this.trigger("blurred")
            }, _onFocus: function () {
                this.trigger("focused")
            }, _onKeydown: function (e) {
                var t = s[e.which || e.keyCode];
                this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e)
            }, _onInput: function () {
                this._checkInputValue()
            }, _managePreventDefault: function (e, t) {
                var n, i, r;
                switch (e) {
                    case"tab":
                        i = this.getHint(), r = this.getInputValue(), n = i && i !== r && !o(t);
                        break;
                    case"up":
                    case"down":
                        n = !o(t);
                        break;
                    default:
                        n = !1
                }
                n && t.preventDefault()
            }, _shouldTrigger: function (e, t) {
                var n;
                switch (e) {
                    case"tab":
                        n = !o(t);
                        break;
                    default:
                        n = !0
                }
                return n
            }, _checkInputValue: function () {
                var e, t, n;
                e = this.getInputValue(), t = r(e, this.query), n = !!t && this.query.length !== e.length, this.query = e, t ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            }, focus: function () {
                this.$input.focus()
            }, blur: function () {
                this.$input.blur()
            }, getQuery: function () {
                return this.query
            }, setQuery: function (e) {
                this.query = e
            }, getInputValue: function () {
                return this.$input.val()
            }, setInputValue: function (e, t) {
                this.$input.val(e), t ? this.clearHint() : this._checkInputValue()
            }, resetInputValue: function () {
                this.setInputValue(this.query, !0)
            }, getHint: function () {
                return this.$hint.val()
            }, setHint: function (e) {
                this.$hint.val(e)
            }, clearHint: function () {
                this.setHint("")
            }, clearHintIfInvalid: function () {
                var e, t, n, i;
                e = this.getInputValue(), t = this.getHint(), n = e !== t && 0 === t.indexOf(e), i = "" !== e && n && !this.hasOverflow(), !i && this.clearHint()
            }, getLanguageDirection: function () {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            }, hasOverflow: function () {
                var e = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
            }, isCursorAtEnd: function () {
                var e, n, i;
                return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : !document.selection || (i = document.selection.createRange(), i.moveStart("character", -e), e === i.text.length)
            }, destroy: function () {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
            }
        }), n
    }(), g = function () {
        "use strict";

        function n(n) {
            n = n || {}, n.templates = n.templates || {}, n.source || e.error("missing source"), n.name && !o(n.name) && e.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || t.getUniqueId(), this.source = n.source, this.displayFn = i(n.display || n.displayKey), this.templates = r(n.templates, this.displayFn), this.$el = e(c.dataset.replace("%CLASS%", this.name))
        }

        function i(e) {
            function n(t) {
                return t[e]
            }

            return e = e || "value", t.isFunction(e) ? e : n
        }

        function r(e, n) {
            function i(e) {
                return "<p>" + n(e) + "</p>"
            }

            return {
                empty: e.empty && t.templatify(e.empty),
                header: e.header && t.templatify(e.header),
                footer: e.footer && t.templatify(e.footer),
                suggestion: e.suggestion || i
            }
        }

        function o(e) {
            return /^[_a-zA-Z0-9-]+$/.test(e)
        }

        var s = "ttDataset", a = "ttValue", u = "ttDatum";
        return n.extractDatasetName = function (t) {
            return e(t).data(s)
        }, n.extractValue = function (t) {
            return e(t).data(a)
        }, n.extractDatum = function (t) {
            return e(t).data(u)
        }, t.mixin(n.prototype, p, {
            _render: function (n, i) {
                function r() {
                    return g.templates.empty({query: n, isEmpty: !0})
                }

                function o() {
                    function r(t) {
                        var n;
                        return n = e(c.suggestion).append(g.templates.suggestion(t)).data(s, g.name).data(a, g.displayFn(t)).data(u, t), n.children().each(function () {
                            e(this).css(l.suggestionChild)
                        }), n
                    }

                    var o, f;
                    return o = e(c.suggestions).css(l.suggestions), f = t.map(i, r), o.append.apply(o, f), g.highlight && h({
                        className: "tt-highlight",
                        node: o[0],
                        pattern: n
                    }), o
                }

                function f() {
                    return g.templates.header({query: n, isEmpty: !d})
                }

                function p() {
                    return g.templates.footer({query: n, isEmpty: !d})
                }

                if (this.$el) {
                    var d, g = this;
                    this.$el.empty(), d = i && i.length, !d && this.templates.empty ? this.$el.html(r()).prepend(g.templates.header ? f() : null).append(g.templates.footer ? p() : null) : d && this.$el.html(o()).prepend(g.templates.header ? f() : null).append(g.templates.footer ? p() : null), this.trigger("rendered")
                }
            }, getRoot: function () {
                return this.$el
            }, update: function (e) {
                function t(t) {
                    n.canceled || e !== n.query || n._render(e, t)
                }

                var n = this;
                this.query = e, this.canceled = !1, this.source(e, t)
            }, cancel: function () {
                this.canceled = !0
            }, clear: function () {
                this.cancel(), this.$el.empty(), this.trigger("rendered")
            }, isEmpty: function () {
                return this.$el.is(":empty")
            }, destroy: function () {
                this.$el = null
            }
        }), n
    }(), m = function () {
        "use strict";

        function n(n) {
            var r, o, s, a = this;
            n = n || {}, n.menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = t.map(n.datasets, i), r = t.bind(this._onSuggestionClick, this), o = t.bind(this._onSuggestionMouseEnter, this), s = t.bind(this._onSuggestionMouseLeave, this), this.$menu = e(n.menu).on("click.tt", ".tt-suggestion", r).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", s), t.each(this.datasets, function (e) {
                a.$menu.append(e.getRoot()), e.onSync("rendered", a._onRendered, a)
            })
        }

        function i(e) {
            return new g(e)
        }

        return t.mixin(n.prototype, p, {
            _onSuggestionClick: function (t) {
                this.trigger("suggestionClicked", e(t.currentTarget))
            }, _onSuggestionMouseEnter: function (t) {
                this._removeCursor(), this._setCursor(e(t.currentTarget), !0)
            }, _onSuggestionMouseLeave: function () {
                this._removeCursor()
            }, _onRendered: function () {
                function e(e) {
                    return e.isEmpty()
                }

                this.isEmpty = t.every(this.datasets, e), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
            }, _hide: function () {
                this.$menu.hide()
            }, _show: function () {
                this.$menu.css("display", "block")
            }, _getSuggestions: function () {
                return this.$menu.find(".tt-suggestion")
            }, _getCursor: function () {
                return this.$menu.find(".tt-cursor").first()
            }, _setCursor: function (e, t) {
                e.first().addClass("tt-cursor"), !t && this.trigger("cursorMoved")
            }, _removeCursor: function () {
                this._getCursor().removeClass("tt-cursor")
            }, _moveCursor: function (e) {
                var t, n, i, r;
                if (this.isOpen) {
                    if (n = this._getCursor(), t = this._getSuggestions(), this._removeCursor(), i = t.index(n) + e, i = (i + 1) % (t.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved");
                    -1 > i && (i = t.length - 1), this._setCursor(r = t.eq(i)), this._ensureVisible(r)
                }
            }, _ensureVisible: function (e) {
                var t, n, i, r;
                t = e.position().top, n = t + e.outerHeight(!0), i = this.$menu.scrollTop(), r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > t ? this.$menu.scrollTop(i + t) : n > r && this.$menu.scrollTop(i + (n - r))
            }, close: function () {
                this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
            }, open: function () {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            }, setLanguageDirection: function (e) {
                this.$menu.css("ltr" === e ? l.ltr : l.rtl)
            }, moveCursorUp: function () {
                this._moveCursor(-1)
            }, moveCursorDown: function () {
                this._moveCursor(1)
            }, getDatumForSuggestion: function (e) {
                var t = null;
                return e.length && (t = {
                    raw: g.extractDatum(e),
                    value: g.extractValue(e),
                    datasetName: g.extractDatasetName(e)
                }), t
            }, getDatumForCursor: function () {
                return this.getDatumForSuggestion(this._getCursor().first())
            }, getDatumForTopSuggestion: function () {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            }, update: function (e) {
                function n(t) {
                    t.update(e)
                }

                t.each(this.datasets, n)
            }, empty: function () {
                function e(e) {
                    e.clear()
                }

                t.each(this.datasets, e), this.isEmpty = !0
            }, isVisible: function () {
                return this.isOpen && !this.isEmpty
            }, destroy: function () {
                function e(e) {
                    e.destroy()
                }

                this.$menu.off(".tt"), this.$menu = null, t.each(this.datasets, e)
            }
        }), n
    }(), v = function () {
        "use strict";

        function n(n) {
            var r, o, s;
            n = n || {}, n.input || e.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), r = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), s = this.$node.find(".tt-hint"), o.on("blur.tt", function (e) {
                var n, i, s;
                n = document.activeElement, i = r.is(n), s = r.has(n).length > 0, t.isMsie() && (i || s) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function () {
                    o.focus()
                }))
            }), r.on("mousedown.tt", function (e) {
                e.preventDefault()
            }), this.eventBus = n.eventBus || new f({el: o}), this.dropdown = new m({
                menu: r,
                datasets: n.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new d({
                input: o,
                hint: s
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
        }

        function i(t, n) {
            var i, o, a, u;
            i = e(t), o = e(c.wrapper).css(l.wrapper), a = e(c.dropdown).css(l.dropdown), u = i.clone().css(l.hint).css(r(i)), u.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            }), i.data(s, {
                dir: i.attr("dir"),
                autocomplete: i.attr("autocomplete"),
                spellcheck: i.attr("spellcheck"),
                style: i.attr("style")
            }), i.addClass("tt-input").attr({autocomplete: "off", spellcheck: !1}).css(n ? l.input : l.inputWithNoHint);
            try {
                !i.attr("dir") && i.attr("dir", "auto")
            } catch (f) {
            }
            return i.wrap(o).parent().prepend(n ? u : null).append(a)
        }

        function r(e) {
            return {
                backgroundAttachment: e.css("background-attachment"),
                backgroundClip: e.css("background-clip"),
                backgroundColor: e.css("background-color"),
                backgroundImage: e.css("background-image"),
                backgroundOrigin: e.css("background-origin"),
                backgroundPosition: e.css("background-position"),
                backgroundRepeat: e.css("background-repeat"),
                backgroundSize: e.css("background-size")
            }
        }

        function o(e) {
            var n = e.find(".tt-input");
            t.each(n.data(s), function (e, i) {
                t.isUndefined(e) ? n.removeAttr(i) : n.attr(i, e)
            }), n.detach().removeData(s).removeClass("tt-input").insertAfter(e), e.remove()
        }

        var s = "ttAttrs";
        return t.mixin(n.prototype, {
            _onSuggestionClicked: function (e, t) {
                var n;
                (n = this.dropdown.getDatumForSuggestion(t)) && this._select(n)
            }, _onCursorMoved: function () {
                var e = this.dropdown.getDatumForCursor();
                this.input.setInputValue(e.value, !0), this.eventBus.trigger("cursorchanged", e.raw, e.datasetName)
            }, _onCursorRemoved: function () {
                this.input.resetInputValue(), this._updateHint()
            }, _onDatasetRendered: function () {
                this._updateHint()
            }, _onOpened: function () {
                this._updateHint(), this.eventBus.trigger("opened")
            }, _onClosed: function () {
                this.input.clearHint(), this.eventBus.trigger("closed")
            }, _onFocused: function () {
                this.isActivated = !0, this.dropdown.open()
            }, _onBlurred: function () {
                this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
            }, _onEnterKeyed: function (e, t) {
                var n, i;
                n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), t.preventDefault()) : this.autoselect && i && (this._select(i), t.preventDefault())
            }, _onTabKeyed: function (e, t) {
                var n;
                (n = this.dropdown.getDatumForCursor()) ? (this._select(n), t.preventDefault()) : this._autocomplete(!0)
            }, _onEscKeyed: function () {
                this.dropdown.close(), this.input.resetInputValue()
            }, _onUpKeyed: function () {
                var e = this.input.getQuery();
                this.dropdown.isEmpty && e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.moveCursorUp(), this.dropdown.open()
            }, _onDownKeyed: function () {
                var e = this.input.getQuery();
                this.dropdown.isEmpty && e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.moveCursorDown(), this.dropdown.open()
            }, _onLeftKeyed: function () {
                "rtl" === this.dir && this._autocomplete()
            }, _onRightKeyed: function () {
                "ltr" === this.dir && this._autocomplete()
            }, _onQueryChanged: function (e, t) {
                this.input.clearHintIfInvalid(), t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
            }, _onWhitespaceChanged: function () {
                this._updateHint(), this.dropdown.open()
            }, _setLanguageDirection: function () {
                var e;
                this.dir !== (e = this.input.getLanguageDirection()) && (this.dir = e, this.$node.css("direction", e), this.dropdown.setLanguageDirection(e))
            }, _updateHint: function () {
                var e, n, i, r, o, s;
                e = this.dropdown.getDatumForTopSuggestion(), e && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = d.normalizeQuery(n), r = t.escapeRegExChars(i), o = new RegExp("^(?:" + r + ")(.+$)", "i"), s = o.exec(e.value), s ? this.input.setHint(n + s[1]) : this.input.clearHint()) : this.input.clearHint()
            }, _autocomplete: function (e) {
                var t, n, i, r;
                t = this.input.getHint(), n = this.input.getQuery(), i = e || this.input.isCursorAtEnd(), t && n !== t && i && (r = this.dropdown.getDatumForTopSuggestion(), r && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
            }, _select: function (e) {
                this.input.setQuery(e.value), this.input.setInputValue(e.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", e.raw, e.datasetName), this.dropdown.close(), t.defer(t.bind(this.dropdown.empty, this.dropdown))
            }, open: function () {
                this.dropdown.open()
            }, close: function () {
                this.dropdown.close()
            }, setVal: function (e) {
                e = t.toStr(e), this.isActivated ? this.input.setInputValue(e) : (this.input.setQuery(e), this.input.setInputValue(e, !0)), this._setLanguageDirection()
            }, getVal: function () {
                return this.input.getQuery()
            }, destroy: function () {
                this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
            }
        }), n
    }();
    !function () {
        "use strict";
        var n, i, r;
        n = e.fn.typeahead, i = "ttTypeahead", r = {
            initialize: function (n, r) {
                function o() {
                    var o, s, a = e(this);
                    t.each(r, function (e) {
                        e.highlight = !!n.highlight
                    }), s = new v({
                        input: a,
                        eventBus: o = new f({el: a}),
                        withHint: !!t.isUndefined(n.hint) || !!n.hint,
                        minLength: n.minLength,
                        autoselect: n.autoselect,
                        datasets: r
                    }), a.data(i, s)
                }

                return r = t.isArray(r) ? r : [].slice.call(arguments, 1), n = n || {}, this.each(o)
            }, open: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && t.open()
                }

                return this.each(t)
            }, close: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && t.close()
                }

                return this.each(t)
            }, val: function (t) {
                function n() {
                    var n, r = e(this);
                    (n = r.data(i)) && n.setVal(t)
                }

                function r(e) {
                    var t, n;
                    return (t = e.data(i)) && (n = t.getVal()), n
                }

                return arguments.length ? this.each(n) : r(this.first())
            }, destroy: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && (t.destroy(), n.removeData(i))
                }

                return this.each(t)
            }
        }, e.fn.typeahead = function (t) {
            var n;
            return r[t] && "initialize" !== t ? (n = this.filter(function () {
                return !!e(this).data(i)
            }), r[t].apply(n, [].slice.call(arguments, 1))) : r.initialize.apply(this, arguments)
        }, e.fn.typeahead.noConflict = function () {
            return e.fn.typeahead = n, this
        }
    }()
}(window.jQuery);