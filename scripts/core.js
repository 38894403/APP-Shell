!function e(t, n, o) {
	function r(a, s) {
		if (!n[a]) {
			if (!t[a]) {
				var u = "function" == typeof require && require;
				if (!s && u) return u(a, !0);
				if (i) return i(a, !0);
				var l = new Error("Cannot find module '" + a + "'");
				throw l.code = "MODULE_NOT_FOUND", l
			}
			var c = n[a] = {
				exports: {}
			};
			t[a][0].call(c.exports, function(e) {
				var n = t[a][1][e];
				return r(n ? n : e)
			}, c, c.exports, e, t, n, o)
		}
		return n[a].exports
	}
	for (var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
	return r
}({
	1: [function(e, t, n) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}();
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
				function e() {
					o(this, e), this.loader = document.querySelector(".js-global-loader"), this.mainContainer = document.querySelector(".js-global-main")
				}
				return r(e, [{
					key: "onUpdate",
					value: function() {
						console.log("onUpdate: ", this.path)
					}
				}, {
					key: "onStart",
					value: function(e) {
						var t = this;
						console.log("onStart: ", e), this.loader.classList.remove("is-hidden"), this.updateNavDrawer(e), fetch("/partials" + e).then(function(e) {
							return 404 === e.status ? (t.show404(), null) : e.text()
						}).then(function(e) {
							null !== e && (t.mainContainer.innerHTML = e), t.loader.classList.add("is-hidden")
						})["catch"](function(e) {
							t.showError("There was a problem loading this page")
						})
					}
				}, {
					key: "onFinish",
					value: function() {
						console.log("onFinish: ", this.path)
					}
				}, {
					key: "show404",
					value: function() {
						var e = document.createElement("h1");
						e.textContent = "404.", this.mainContainer.appendChild(e);
						var t = document.createElement("p");
						t.textContent = "Oops - looks like this page isn't valid.", this.mainContainer.appendChild(t)
					}
				}, {
					key: "showError",
					value: function(e) {
						var t = document.createElement("h1");
						t.textContent = "Ooopps.", this.mainContainer.appendChild(t);
						var n = document.createElement("p");
						n.textContent = "There was a problem displaying this page , sorry about that.", this.mainContainer.appendChild(n)
					}
				}, {
					key: "updateNavDrawer",
					value: function(e) {
						var t = document.querySelectorAll(".side-nav__body a");
						[].forEach.call(t, function(e) {
							e.classList.remove("active"), e.href === document.location.href && e.classList.add("active")
						})
					}
				}]), e
			}();
		n["default"] = i
	}, {}],
	2: [function(e, t, n) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = e("./Controller"),
			u = o(s),
			l = e("../libs/RouterSingleton"),
			c = o(l),
			f = e("./ActivityController"),
			d = o(f),
			v = e("./../view/NavDrawerView"),
			h = o(v),
			p = function(e) {
				function t() {
					r(this, t);
					var e = i(this, Object.getPrototypeOf(t).call(this)),
						n = new h["default"],
						o = document.querySelector(".js-toggle-menu");
					o.addEventListener("click", function() {
						n.toggle()
					});
					for (var a = n.sideNavContent.querySelectorAll("a"), s = 0; s < a.length; s++) a[s].href && a[s].addEventListener("click", function(e) {
						e.preventDefault(), n.close();
						var t = c["default"].getRouter();
						t.goToPath(e.target.href)
					});
					var u = c["default"].getRouter();
					return u.addRoute("/", new d["default"]), u.addRoute("/url-1", new d["default"]), u.addRoute("/url-2", new d["default"]), u.setDefaultRoute(new d["default"]), u.requestStateUpdate(), e
				}
				return a(t, e), t
			}(u["default"]);
		n["default"] = p
	}, {
		"../libs/RouterSingleton": 5,
		"./../view/NavDrawerView": 7,
		"./ActivityController": 1,
		"./Controller": 3
	}],
	3: [function(e, t, n) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}();
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var a = e("../libs/ToasterSingleton"),
			s = o(a),
			u = function() {
				function e() {
					r(this, e);
					var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
					t && this.registerServiceWorker()
				}
				return i(e, [{
					key: "registerServiceWorker",
					value: function() {
						"serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js", {
							scope: "/"
						}).then(function(e) {
							console.log("Service worker is registered.");
							var t = !1;
							e.active && (t = !0), e.onupdatefound = function(n) {
								console.log("A new Service Worker version has been found..."), e.installing.onstatechange = function(e) {
									"installed" === this.state && (t ? s["default"].getToaster().toast("App updated. Restart for the new version.") : s["default"].getToaster().toast("App ready for offline use."))
								}
							}
						})["catch"](function(e) {
							console.log("Unable to register service worker.", e)
						})
					}
				}, {
					key: "loadScript",
					value: function(e) {
						return new Promise(function(t, n) {
							var o = document.createElement("script");
							o.async = !0, o.src = e, o.onload = t, o.onerror = n, document.head.appendChild(o)
						})
					}
				}, {
					key: "loadCSS",
					value: function(e) {
						return new Promise(function(t, n) {
							var o = new XMLHttpRequest;
							o.open("GET", e), o.responseType = "text", o.onload = function(e) {
								if (200 === this.status) {
									var r = document.createElement("style");
									r.textContent = o.response, document.head.appendChild(r), t()
								} else n()
							}, o.send()
						})
					}
				}]), e
			}();
		n["default"] = u
	}, {
		"../libs/ToasterSingleton": 6
	}],
	4: [function(e, t, n) {
		"use strict";

		function o(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		var r = e("./controller/ApplicationController"),
			i = o(r);
		new i["default"]
	}, {
		"./controller/ApplicationController": 2
	}],
	5: [function(e, t, n) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}();
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
				function e() {
					o(this, e)
				}
				return r(e, null, [{
					key: "getRouter",
					value: function() {
						return "undefined" != typeof window.RouterInstance_ ? window.RouterInstance_ : (window.RouterInstance_ = new a, window.RouterInstance_)
					}
				}]), e
			}();
		n["default"] = i;
		var a = function() {
				function e() {
					var t = this;
					o(this, e), this.routes = {}, this.currentPath = null, this.defaultActivity = null, window.addEventListener("popstate", function(e) {
						t.onPopState(e)
					})
				}
				return r(e, [{
					key: "addRoute",
					value: function(e, t) {
						if (this.routes[e]) throw "A handler already exists for this path: " + e;
						this.routes[e] = t
					}
				}, {
					key: "setDefaultRoute",
					value: function(e) {
						if (this.defaultActivity) throw "A default handler already exists";
						this.defaultActivity = e
					}
				}, {
					key: "removeRoute",
					value: function(e) {
						this.routes[e] && delete this.routes[e]
					}
				}, {
					key: "requestStateUpdate",
					value: function() {
						var e = this;
						requestAnimationFrame(function() {
							e.manageState()
						})
					}
				}, {
					key: "manageState",
					value: function() {
						var e = document.location.pathname,
							t = this.routes[e],
							n = this.routes[this.currentPath];
						return !t && this.defaultActivity && (t = this.defaultActivity), this.currentPath === e ? "function" == typeof t.onUpdate ? (t.onUpdate(), !0) : !1 : (n && n.onFinish(), t ? (t.onStart(e), this.currentPath = e) : this.currentPath = null, !0)
					}
				}, {
					key: "goToPath",
					value: function(e) {
						var t = this,
							n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
						console.log("goToPath() path = " + e), e !== window.location.pathname && (history.pushState(void 0, n, e), requestAnimationFrame(function() {
							t.manageState()
						}))
					}
				}, {
					key: "onPopState",
					value: function(e) {
						e.preventDefault(), this.requestStateUpdate()
					}
				}]), e
			}()
	}, {}],
	6: [function(e, t, n) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}();
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
				function e() {
					o(this, e)
				}
				return r(e, null, [{
					key: "getToaster",
					value: function() {
						return "undefined" != typeof window.ToasterInstance_ ? window.ToasterInstance_ : (window.ToasterInstance_ = new a, window.ToasterInstance_)
					}
				}]), e
			}();
		n["default"] = i;
		var a = function() {
				function e() {
					o(this, e), this.view = document.querySelector(".js-toast-view"), this.hideTimeout = 0
				}
				return r(e, [{
					key: "toast",
					value: function(e) {
						var t = this;
						this.view.textContent = e, this.view.classList.add("toast-view--visible"), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function() {
							t.hide()
						}, 3e3)
					}
				}, {
					key: "hide",
					value: function() {
						this.view.classList.remove("toast-view--visible")
					}
				}]), e
			}()
	}, {}],
	7: [function(e, t, n) {
		"use strict";

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var r = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var o = t[n];
						o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
					}
				}
				return function(t, n, o) {
					return n && e(t.prototype, n), o && e(t, o), t
				}
			}();
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = function() {
				function e() {
					var t = this;
					o(this, e), this.rootElement = document.querySelector(".js-side-nav"), this.sideNavContent = this.rootElement.querySelector(".js-side-nav-content");
					var n, r, i = function(e) {
							n = e.touches[0].pageX
						},
						a = function(e) {
							var o = e.touches[0].pageX;
							r = Math.min(0, o - n), 0 > r && e.preventDefault(), t.sideNavContent.style.transform = "translateX(" + r + "px)"
						},
						s = function(e) {
							-1 > r && t.closeSideNav()
						};
					this.rootElement.addEventListener("click", function() {
						t.close()
					}), this.sideNavContent.addEventListener("click", function(e) {
						e.stopPropagation()
					}), this.sideNavContent.addEventListener("touchstart", i), this.sideNavContent.addEventListener("touchmove", a), this.sideNavContent.addEventListener("touchend", s)
				}
				return r(e, [{
					key: "isOpen",
					value: function() {
						return this.rootElement.classList.contains("side-nav--visible")
					}
				}, {
					key: "toggle",
					value: function() {
						this.isOpen() ? this.close() : this.open()
					}
				}, {
					key: "close",
					value: function() {
						this.rootElement.classList.remove("side-nav--visible"), this.sideNavContent.classList.add("side-nav__content--animatable"), this.sideNavContent.style.transform = "translateX(-102%)"
					}
				}, {
					key: "open",
					value: function() {
						var e = this;
						this.rootElement.classList.add("side-nav--visible");
						var t = function n(t) {
								e.sideNavContent.tabIndex = 0, e.sideNavContent.focus(), e.sideNavContent.removeAttribute("tabIndex"), e.sideNavContent.classList.remove("side-nav__content--animatable"), e.sideNavContent.removeEventListener("transitionend", n)
							};
						this.sideNavContent.classList.add("side-nav__content--animatable"), this.sideNavContent.addEventListener("transitionend", t), requestAnimationFrame(function() {
							e.sideNavContent.style.transform = "translateX(0px)"
						})
					}
				}]), e
			}();
		n["default"] = i
	}, {}]
}, {}, [4]);