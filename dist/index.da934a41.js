// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2pWbc":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "ea89840f563c036b9db1a3d9da934a41";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"DpxeY":[function(require,module,exports) {
var global = arguments[3];
!(function () {
  return function e(t, n, o) {
    function i(a, c) {
      if (!n[a]) {
        if (!t[a]) {
          var d = "function" == typeof require && require;
          if (!c && d) return d(a, !0);
          if (r) return r(a, !0);
          var s = new Error("Cannot find module '" + a + "'");
          throw (s.code = "MODULE_NOT_FOUND", s);
        }
        var l = n[a] = {
          exports: {}
        };
        t[a][0].call(l.exports, function (e) {
          return i(t[a][1][e] || e);
        }, l, l.exports, e, t, n, o);
      }
      return n[a].exports;
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i;
  };
})()({
  1: [function (e, t, n) {
    var o = e("dragula");
    !(function () {
      this.jKanban = function () {
        var e = this, t = {
          enabled: !1
        }, n = {
          enabled: !1
        };
        (this._disallowedItemProperties = ["id", "title", "click", "context", "drag", "dragend", "drop", "order"], this.element = "", this.container = "", this.boardContainer = [], this.handlers = [], this.dragula = o, this.drake = "", this.drakeBoard = "", this.itemAddOptions = n, this.itemHandleOptions = t);
        var i = {
          element: "",
          gutter: "15px",
          widthBoard: "250px",
          responsive: "700",
          responsivePercentage: !1,
          boards: [],
          dragBoards: !0,
          dragItems: !0,
          itemAddOptions: n,
          itemHandleOptions: t,
          dragEl: function (e, t) {},
          dragendEl: function (e) {},
          dropEl: function (e, t, n, o) {},
          dragBoard: function (e, t) {},
          dragendBoard: function (e) {},
          dropBoard: function (e, t, n, o) {},
          click: function (e) {},
          context: function (e, t) {},
          buttonClick: function (e, t) {}
        };
        function r(t, n) {
          t.addEventListener("click", function (t) {
            (t.preventDefault(), e.options.click(this), "function" == typeof this.clickfn && this.clickfn(this));
          });
        }
        function a(t, n) {
          t.addEventListener ? t.addEventListener("contextmenu", function (t) {
            (t.preventDefault(), e.options.context(this, t), "function" == typeof this.contextfn && this.contextfn(this, t));
          }, !1) : t.attachEvent("oncontextmenu", function () {
            (e.options.context(this), "function" == typeof this.contextfn && this.contextfn(this), window.event.returnValue = !1);
          });
        }
        function c(t, n) {
          t.addEventListener("click", function (t) {
            (t.preventDefault(), e.options.buttonClick(this, n));
          });
        }
        function d(t) {
          var n = [];
          return (e.options.boards.map(function (e) {
            if (e.id === t) return n.push(e);
          }), n[0]);
        }
        function s(t, n) {
          for (var o in n) e._disallowedItemProperties.indexOf(o) > -1 || t.setAttribute("data-" + o, n[o]);
        }
        function l(t) {
          var n = ("title" in t) ? t.title : "";
          if (e.options.itemHandleOptions.enabled) {
            if (void 0 !== (e.options.itemHandleOptions.customHandler || void 0)) return n = "<div> " + e.options.itemHandleOptions.customHandler.replace(/%([^%]+)%/g, (e, n) => void 0 !== t[n] ? t[n] : "") + " </div>";
            var o = e.options.itemHandleOptions.customCssHandler, i = e.options.itemHandleOptions.customCssIconHandler, r = e.options.itemHandleOptions.customItemLayout;
            (void 0 === (o || void 0) && (o = "drag_handler"), void 0 === (i || void 0) && (i = o + "_icon"), void 0 === (r || void 0) && (r = ""), n = "<div class='item_handle " + o + "'><i class='item_handle " + i + "'></i></div><div>" + n + "</div>");
          }
          return n;
        }
        (arguments[0] && "object" == typeof arguments[0] && (this.options = (function (e, t) {
          var n;
          for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          return e;
        })(i, arguments[0])), this.__getCanMove = function (t) {
          return e.options.itemHandleOptions.enabled ? e.options.itemHandleOptions.handleClass ? t.classList.contains(e.options.itemHandleOptions.handleClass) : t.classList.contains("item_handle") : !!e.options.dragItems;
        }, this.init = function () {
          (!(function () {
            e.element = document.querySelector(e.options.element);
            var t = document.createElement("div");
            (t.classList.add("kanban-container"), e.container = t, document.querySelector(e.options.element).dataset.hasOwnProperty("board") ? (url = document.querySelector(e.options.element).dataset.board, window.fetch(url, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }).then(t => {
              t.json().then(function (t) {
                (e.options.boards = t, e.addBoards(e.options.boards, !0));
              });
            }).catch(e => {
              console.log("Error: ", e);
            })) : e.addBoards(e.options.boards, !0));
            e.element.appendChild(e.container);
          })(), window.innerWidth > e.options.responsive && (e.drakeBoard = e.dragula([e.container], {
            moves: function (t, n, o, i) {
              return !!e.options.dragBoards && (o.classList.contains("kanban-board-header") || o.classList.contains("kanban-title-board"));
            },
            accepts: function (e, t, n, o) {
              return t.classList.contains("kanban-container");
            },
            revertOnSpill: !0,
            direction: "horizontal"
          }).on("drag", function (t, n) {
            (t.classList.add("is-moving"), e.options.dragBoard(t, n), "function" == typeof t.dragfn && t.dragfn(t, n));
          }).on("dragend", function (t) {
            (!(function () {
              for (var t = 1, n = 0; n < e.container.childNodes.length; n++) e.container.childNodes[n].dataset.order = t++;
            })(), t.classList.remove("is-moving"), e.options.dragendBoard(t), "function" == typeof t.dragendfn && t.dragendfn(t));
          }).on("drop", function (t, n, o, i) {
            (t.classList.remove("is-moving"), e.options.dropBoard(t, n, o, i), "function" == typeof t.dropfn && t.dropfn(t, n, o, i));
          }), e.drake = e.dragula(e.boardContainer, {
            moves: function (t, n, o, i) {
              return e.__getCanMove(o);
            },
            revertOnSpill: !0
          }).on("cancel", function (t, n, o) {
            e.enableAllBoards();
          }).on("drag", function (t, n) {
            var o = t.getAttribute("class");
            if ("" !== o && o.indexOf("not-draggable") > -1) e.drake.cancel(!0); else {
              (t.classList.add("is-moving"), e.options.dragEl(t, n));
              var i = d(n.parentNode.dataset.id);
              (void 0 !== i.dragTo && e.options.boards.map(function (t) {
                -1 === i.dragTo.indexOf(t.id) && t.id !== n.parentNode.dataset.id && e.findBoard(t.id).classList.add("disabled-board");
              }), null !== t && "function" == typeof t.dragfn && t.dragfn(t, n));
            }
          }).on("dragend", function (t) {
            (e.options.dragendEl(t), null !== t && "function" == typeof t.dragendfn && t.dragendfn(t));
          }).on("drop", function (t, n, o, i) {
            e.enableAllBoards();
            var r = d(o.parentNode.dataset.id);
            (void 0 !== r.dragTo && -1 === r.dragTo.indexOf(n.parentNode.dataset.id) && n.parentNode.dataset.id !== o.parentNode.dataset.id && e.drake.cancel(!0), null !== t) && (!1 === e.options.dropEl(t, n, o, i) && e.drake.cancel(!0), t.classList.remove("is-moving"), "function" == typeof t.dropfn && t.dropfn(t, n, o, i));
          })));
        }, this.enableAllBoards = function () {
          var e = document.querySelectorAll(".kanban-board");
          if (e.length > 0 && void 0 !== e) for (var t = 0; t < e.length; t++) e[t].classList.remove("disabled-board");
        }, this.addElement = function (t, n) {
          var o = e.element.querySelector('[data-id="' + t + '"] .kanban-drag'), i = document.createElement("div");
          return (i.classList.add("kanban-item"), void 0 !== n.id && "" !== n.id && i.setAttribute("data-eid", n.id), n.class && Array.isArray(n.class) && n.class.forEach(function (e) {
            i.classList.add(e);
          }), i.innerHTML = l(n), i.clickfn = n.click, i.contextfn = n.context, i.dragfn = n.drag, i.dragendfn = n.dragend, i.dropfn = n.drop, s(i, n), r(i), a(i), e.options.itemHandleOptions.enabled && (i.style.cursor = "default"), o.appendChild(i), e);
        }, this.addForm = function (t, n) {
          var o = e.element.querySelector('[data-id="' + t + '"] .kanban-drag'), i = n.getAttribute("class");
          return (n.setAttribute("class", i + " not-draggable"), o.appendChild(n), e);
        }, this.addBoards = function (t, n) {
          if (e.options.responsivePercentage) if ((e.container.style.width = "100%", e.options.gutter = "1%", window.innerWidth > e.options.responsive)) var o = (100 - 2 * t.length) / t.length; else o = 100 - 2 * t.length; else o = e.options.widthBoard;
          var i = e.options.itemAddOptions.enabled, d = e.options.itemAddOptions.content, u = e.options.itemAddOptions.class, f = e.options.itemAddOptions.footer;
          for (var p in t) {
            var v = t[p];
            (n || e.options.boards.push(v), e.options.responsivePercentage || ("" === e.container.style.width ? e.container.style.width = parseInt(o) + 2 * parseInt(e.options.gutter) + "px" : e.container.style.width = parseInt(e.container.style.width) + parseInt(o) + 2 * parseInt(e.options.gutter) + "px"));
            var m = document.createElement("div");
            (m.dataset.id = v.id, m.dataset.order = e.container.childNodes.length + 1, m.classList.add("kanban-board"), e.options.responsivePercentage ? m.style.width = o + "%" : m.style.width = o, m.style.marginLeft = e.options.gutter, m.style.marginRight = e.options.gutter);
            var h = document.createElement("header");
            if ("" !== v.class && void 0 !== v.class) var g = v.class.split(","); else g = [];
            (h.classList.add("kanban-board-header"), g.map(function (e) {
              (e = e.replace(/^[ ]+/g, ""), h.classList.add(e));
            }), h.innerHTML = '<div class="kanban-title-board">' + v.title + "</div>");
            var y = document.createElement("main");
            if ((y.classList.add("kanban-drag"), "" !== v.bodyClass && void 0 !== v.bodyClass)) var b = v.bodyClass.split(","); else b = [];
            for (var w in (b.map(function (e) {
              y.classList.add(e);
            }), e.boardContainer.push(y), v.item)) {
              var E = v.item[w], T = document.createElement("div");
              (T.classList.add("kanban-item"), E.id && (T.dataset.eid = E.id), E.class && Array.isArray(E.class) && E.class.forEach(function (e) {
                T.classList.add(e);
              }), T.innerHTML = l(E), T.clickfn = E.click, T.contextfn = E.context, T.dragfn = E.drag, T.dragendfn = E.dragend, T.dropfn = E.drop, s(T, E), r(T), a(T), e.options.itemHandleOptions.enabled && (T.style.cursor = "default"), y.appendChild(T));
            }
            var x = document.createElement("footer");
            if (i) {
              var C = document.createElement("BUTTON"), O = document.createTextNode(d || "+");
              (C.setAttribute("class", u || "kanban-title-button btn btn-default btn-xs"), C.appendChild(O), f ? x.appendChild(C) : h.appendChild(C), c(C, v.id));
            }
            (m.appendChild(h), m.appendChild(y), m.appendChild(x), e.container.appendChild(m));
          }
          return e;
        }, this.findBoard = function (t) {
          return e.element.querySelector('[data-id="' + t + '"]');
        }, this.getParentBoardID = function (t) {
          return ("string" == typeof t && (t = e.element.querySelector('[data-eid="' + t + '"]')), null === t ? null : t.parentNode.parentNode.dataset.id);
        }, this.moveElement = function (e, t, n) {
          if (e !== this.getParentBoardID(t)) return (this.removeElement(t), this.addElement(e, n));
        }, this.replaceElement = function (t, n) {
          var o = t;
          return ("string" == typeof o && (o = e.element.querySelector('[data-eid="' + t + '"]')), o.innerHTML = l(n), o.clickfn = n.click, o.contextfn = n.context, o.dragfn = n.drag, o.dragendfn = n.dragend, o.dropfn = n.drop, s(o, n), r(o), a(o), e);
        }, this.findElement = function (t) {
          return e.element.querySelector('[data-eid="' + t + '"]');
        }, this.getBoardElements = function (t) {
          return e.element.querySelector('[data-id="' + t + '"] .kanban-drag').childNodes;
        }, this.removeElement = function (t) {
          return ("string" == typeof t && (t = e.element.querySelector('[data-eid="' + t + '"]')), null !== t && ("function" == typeof t.remove ? t.remove() : t.parentNode.removeChild(t)), e);
        }, this.removeBoard = function (t) {
          var n = null;
          ("string" == typeof t && (n = e.element.querySelector('[data-id="' + t + '"]')), null !== n && ("function" == typeof n.remove ? n.remove() : n.parentNode.removeChild(n)));
          for (var o = 0; o < e.options.boards.length; o++) if (e.options.boards[o].id === t) {
            e.options.boards.splice(o, 1);
            break;
          }
          return e;
        }, this.onButtonClick = function (e) {}, this.init());
      };
    })();
  }, {
    dragula: 9
  }],
  2: [function (e, t, n) {
    t.exports = function (e, t) {
      return Array.prototype.slice.call(e, t);
    };
  }, {}],
  3: [function (e, t, n) {
    "use strict";
    var o = e("ticky");
    t.exports = function (e, t, n) {
      e && o(function () {
        e.apply(n || null, t || []);
      });
    };
  }, {
    ticky: 11
  }],
  4: [function (e, t, n) {
    "use strict";
    var o = e("atoa"), i = e("./debounce");
    t.exports = function (e, t) {
      var n = t || ({}), r = {};
      return (void 0 === e && (e = {}), e.on = function (t, n) {
        return (r[t] ? r[t].push(n) : r[t] = [n], e);
      }, e.once = function (t, n) {
        return (n._once = !0, e.on(t, n), e);
      }, e.off = function (t, n) {
        var o = arguments.length;
        if (1 === o) delete r[t]; else if (0 === o) r = {}; else {
          var i = r[t];
          if (!i) return e;
          i.splice(i.indexOf(n), 1);
        }
        return e;
      }, e.emit = function () {
        var t = o(arguments);
        return e.emitterSnapshot(t.shift()).apply(this, t);
      }, e.emitterSnapshot = function (t) {
        var a = (r[t] || []).slice(0);
        return function () {
          var r = o(arguments), c = this || e;
          if ("error" === t && !1 !== n.throws && !a.length) throw 1 === r.length ? r[0] : r;
          return (a.forEach(function (o) {
            (n.async ? i(o, r, c) : o.apply(c, r), o._once && e.off(t, o));
          }), e);
        };
      }, e);
    };
  }, {
    "./debounce": 3,
    atoa: 2
  }],
  5: [function (e, t, n) {
    (function (n) {
      (function () {
        "use strict";
        var o = e("custom-event"), i = e("./eventmap"), r = n.document, a = function (e, t, n, o) {
          return e.addEventListener(t, n, o);
        }, c = function (e, t, n, o) {
          return e.removeEventListener(t, n, o);
        }, d = [];
        function s(e, t, n) {
          var o = (function (e, t, n) {
            var o, i;
            for (o = 0; o < d.length; o++) if ((i = d[o]).element === e && i.type === t && i.fn === n) return o;
          })(e, t, n);
          if (o) {
            var i = d[o].wrapper;
            return (d.splice(o, 1), i);
          }
        }
        (n.addEventListener || (a = function (e, t, o) {
          return e.attachEvent("on" + t, (function (e, t, o) {
            var i = s(e, t, o) || (function (e, t, o) {
              return function (t) {
                var i = t || n.event;
                (i.target = i.target || i.srcElement, i.preventDefault = i.preventDefault || (function () {
                  i.returnValue = !1;
                }), i.stopPropagation = i.stopPropagation || (function () {
                  i.cancelBubble = !0;
                }), i.which = i.which || i.keyCode, o.call(e, i));
              };
            })(e, 0, o);
            return (d.push({
              wrapper: i,
              element: e,
              type: t,
              fn: o
            }), i);
          })(e, t, o));
        }, c = function (e, t, n) {
          var o = s(e, t, n);
          if (o) return e.detachEvent("on" + t, o);
        }), t.exports = {
          add: a,
          remove: c,
          fabricate: function (e, t, n) {
            var a = -1 === i.indexOf(t) ? new o(t, {
              detail: n
            }) : (function () {
              var e;
              r.createEvent ? (e = r.createEvent("Event")).initEvent(t, !0, !0) : r.createEventObject && (e = r.createEventObject());
              return e;
            })();
            e.dispatchEvent ? e.dispatchEvent(a) : e.fireEvent("on" + t, a);
          }
        });
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {
    "./eventmap": 6,
    "custom-event": 7
  }],
  6: [function (e, t, n) {
    (function (e) {
      (function () {
        "use strict";
        var n = [], o = "", i = /^on/;
        for (o in e) i.test(o) && n.push(o.slice(2));
        t.exports = n;
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  7: [function (e, t, n) {
    (function (e) {
      (function () {
        var n = e.CustomEvent;
        t.exports = (function () {
          try {
            var e = new n("cat", {
              detail: {
                foo: "bar"
              }
            });
            return "cat" === e.type && "bar" === e.detail.foo;
          } catch (e) {}
          return !1;
        })() ? n : "undefined" != typeof document && "function" == typeof document.createEvent ? function (e, t) {
          var n = document.createEvent("CustomEvent");
          return (t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0), n);
        } : function (e, t) {
          var n = document.createEventObject();
          return (n.type = e, t ? (n.bubbles = Boolean(t.bubbles), n.cancelable = Boolean(t.cancelable), n.detail = t.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n);
        };
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  8: [function (e, t, n) {
    "use strict";
    var o = {}, i = "(?:^|\\s)", r = "(?:\\s|$)";
    function a(e) {
      var t = o[e];
      return (t ? t.lastIndex = 0 : o[e] = t = new RegExp(i + e + r, "g"), t);
    }
    t.exports = {
      add: function (e, t) {
        var n = e.className;
        n.length ? a(t).test(n) || (e.className += " " + t) : e.className = t;
      },
      rm: function (e, t) {
        e.className = e.className.replace(a(t), " ").trim();
      }
    };
  }, {}],
  9: [function (e, t, n) {
    (function (n) {
      (function () {
        "use strict";
        var o = e("contra/emitter"), i = e("crossvent"), r = e("./classes"), a = document, c = a.documentElement;
        function d(e, t, o, r) {
          n.navigator.pointerEnabled ? i[t](e, ({
            mouseup: "pointerup",
            mousedown: "pointerdown",
            mousemove: "pointermove"
          })[o], r) : n.navigator.msPointerEnabled ? i[t](e, ({
            mouseup: "MSPointerUp",
            mousedown: "MSPointerDown",
            mousemove: "MSPointerMove"
          })[o], r) : (i[t](e, ({
            mouseup: "touchend",
            mousedown: "touchstart",
            mousemove: "touchmove"
          })[o], r), i[t](e, o, r));
        }
        function s(e) {
          if (void 0 !== e.touches) return e.touches.length;
          if (void 0 !== e.which && 0 !== e.which) return e.which;
          if (void 0 !== e.buttons) return e.buttons;
          var t = e.button;
          return void 0 !== t ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : void 0;
        }
        function l(e, t) {
          return void 0 !== n[t] ? n[t] : c.clientHeight ? c[e] : a.body[e];
        }
        function u(e, t, n) {
          var o, i = (e = e || ({})).className || "";
          return (e.className += " gu-hide", o = a.elementFromPoint(t, n), e.className = i, o);
        }
        function f() {
          return !1;
        }
        function p() {
          return !0;
        }
        function v(e) {
          return e.width || e.right - e.left;
        }
        function m(e) {
          return e.height || e.bottom - e.top;
        }
        function h(e) {
          return e.parentNode === a ? null : e.parentNode;
        }
        function g(e) {
          return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName || (function e(t) {
            if (!t) return !1;
            if ("false" === t.contentEditable) return !1;
            if ("true" === t.contentEditable) return !0;
            return e(h(t));
          })(e);
        }
        function y(e) {
          return e.nextElementSibling || (function () {
            var t = e;
            do {
              t = t.nextSibling;
            } while (t && 1 !== t.nodeType);
            return t;
          })();
        }
        function b(e, t) {
          var n = (function (e) {
            return e.targetTouches && e.targetTouches.length ? e.targetTouches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
          })(t), o = {
            pageX: "clientX",
            pageY: "clientY"
          };
          return ((e in o) && !((e in n)) && (o[e] in n) && (e = o[e]), n[e]);
        }
        t.exports = function (e, t) {
          var n, w, E, T, x, C, O, k, S, L, B;
          1 === arguments.length && !1 === Array.isArray(e) && (t = e, e = []);
          var N, I = null, A = t || ({});
          (void 0 === A.moves && (A.moves = p), void 0 === A.accepts && (A.accepts = p), void 0 === A.invalid && (A.invalid = function () {
            return !1;
          }), void 0 === A.containers && (A.containers = e || []), void 0 === A.isContainer && (A.isContainer = f), void 0 === A.copy && (A.copy = !1), void 0 === A.copySortSource && (A.copySortSource = !1), void 0 === A.revertOnSpill && (A.revertOnSpill = !1), void 0 === A.removeOnSpill && (A.removeOnSpill = !1), void 0 === A.direction && (A.direction = "vertical"), void 0 === A.ignoreInputTextSelection && (A.ignoreInputTextSelection = !0), void 0 === A.mirrorContainer && (A.mirrorContainer = a.body));
          var _ = o({
            containers: A.containers,
            start: function (e) {
              var t = j(e);
              t && F(t);
            },
            end: R,
            cancel: W,
            remove: V,
            destroy: function () {
              (P(!0), K({}));
            },
            canMove: function (e) {
              return !!j(e);
            },
            dragging: !1
          });
          return (!0 === A.removeOnSpill && _.on("over", function (e) {
            r.rm(e, "gu-hide");
          }).on("out", function (e) {
            _.dragging && r.add(e, "gu-hide");
          }), P(), _);
          function H(e) {
            return -1 !== _.containers.indexOf(e) || A.isContainer(e);
          }
          function P(e) {
            var t = e ? "remove" : "add";
            (d(c, t, "mousedown", X), d(c, t, "mouseup", K));
          }
          function q(e) {
            d(c, e ? "remove" : "add", "mousemove", Y);
          }
          function M(e) {
            var t = e ? "remove" : "add";
            (i[t](c, "selectstart", D), i[t](c, "click", D));
          }
          function D(e) {
            N && e.preventDefault();
          }
          function X(e) {
            if ((C = e.clientX, O = e.clientY, 1 === s(e) && !e.metaKey && !e.ctrlKey)) {
              var t = e.target, n = j(t);
              n && (N = n, q(), "mousedown" === e.type && (g(t) ? t.focus() : e.preventDefault()));
            }
          }
          function Y(e) {
            if (N) if (0 !== s(e)) {
              if (!(void 0 !== e.clientX && Math.abs(e.clientX - C) <= (A.slideFactorX || 0) && void 0 !== e.clientY && Math.abs(e.clientY - O) <= (A.slideFactorY || 0))) {
                if (A.ignoreInputTextSelection) {
                  var t = b("clientX", e) || 0, o = b("clientY", e) || 0;
                  if (g(a.elementFromPoint(t, o))) return;
                }
                var i = N;
                (q(!0), M(), R(), F(i));
                var u, f = {
                  left: (u = E.getBoundingClientRect()).left + l("scrollLeft", "pageXOffset"),
                  top: u.top + l("scrollTop", "pageYOffset")
                };
                (T = b("pageX", e) - f.left, x = b("pageY", e) - f.top, r.add(L || E, "gu-transit"), (function () {
                  if (!n) {
                    var e = E.getBoundingClientRect();
                    ((n = E.cloneNode(!0)).style.width = v(e) + "px", n.style.height = m(e) + "px", r.rm(n, "gu-transit"), r.add(n, "gu-mirror"), A.mirrorContainer.appendChild(n), d(c, "add", "mousemove", Q), r.add(A.mirrorContainer, "gu-unselectable"), _.emit("cloned", n, E, "mirror"));
                  }
                })(), Q(e));
              }
            } else K({});
          }
          function j(e) {
            if (!(_.dragging && n || H(e))) {
              for (var t = e; h(e) && !1 === H(h(e)); ) {
                if (A.invalid(e, t)) return;
                if (!(e = h(e))) return;
              }
              var o = h(e);
              if (o && !A.invalid(e, t) && A.moves(e, o, t, y(e))) return {
                item: e,
                source: o
              };
            }
          }
          function F(e) {
            var t, n;
            (t = e.item, n = e.source, ("boolean" == typeof A.copy ? A.copy : A.copy(t, n)) && (L = e.item.cloneNode(!0), _.emit("cloned", L, e.item, "copy")), w = e.source, E = e.item, k = S = y(e.item), _.dragging = !0, _.emit("drag", E, w));
          }
          function R() {
            if (_.dragging) {
              var e = L || E;
              z(e, h(e));
            }
          }
          function U() {
            (N = !1, q(!0), M(!0));
          }
          function K(e) {
            if ((U(), _.dragging)) {
              var t = L || E, o = b("clientX", e) || 0, i = b("clientY", e) || 0, r = J(u(n, o, i), o, i);
              r && (L && A.copySortSource || !L || r !== w) ? z(t, r) : A.removeOnSpill ? V() : W();
            }
          }
          function z(e, t) {
            var n = h(e);
            (L && A.copySortSource && t === w && n.removeChild(E), $(t) ? _.emit("cancel", e, w, w) : _.emit("drop", e, t, w, S), G());
          }
          function V() {
            if (_.dragging) {
              var e = L || E, t = h(e);
              (t && t.removeChild(e), _.emit(L ? "cancel" : "remove", e, t, w), G());
            }
          }
          function W(e) {
            if (_.dragging) {
              var t = arguments.length > 0 ? e : A.revertOnSpill, n = L || E, o = h(n), i = $(o);
              (!1 === i && t && (L ? o && o.removeChild(L) : w.insertBefore(n, k)), i || t ? _.emit("cancel", n, w, w) : _.emit("drop", n, o, w, S), G());
            }
          }
          function G() {
            var e = L || E;
            (U(), n && (r.rm(A.mirrorContainer, "gu-unselectable"), d(c, "remove", "mousemove", Q), h(n).removeChild(n), n = null), e && r.rm(e, "gu-transit"), B && clearTimeout(B), _.dragging = !1, I && _.emit("out", e, I, w), _.emit("dragend", e), w = E = L = k = S = B = I = null);
          }
          function $(e, t) {
            var o;
            return (o = void 0 !== t ? t : n ? S : y(L || E), e === w && o === k);
          }
          function J(e, t, n) {
            for (var o = e; o && !i(); ) o = h(o);
            return o;
            function i() {
              if (!1 === H(o)) return !1;
              var i = Z(o, e), r = ee(o, i, t, n);
              return !!$(o, r) || A.accepts(E, o, w, r);
            }
          }
          function Q(e) {
            if (n) {
              e.preventDefault();
              var t = b("clientX", e) || 0, o = b("clientY", e) || 0, i = t - T, r = o - x;
              (n.style.left = i + "px", n.style.top = r + "px");
              var a = L || E, c = u(n, t, o), d = J(c, t, o), s = null !== d && d !== I;
              (s || null === d) && (I && v("out"), I = d, s && v("over"));
              var l = h(a);
              if (d !== w || !L || A.copySortSource) {
                var f, p = Z(d, c);
                if (null !== p) f = ee(d, p, t, o); else {
                  if (!0 !== A.revertOnSpill || L) return void (L && l && l.removeChild(a));
                  (f = k, d = w);
                }
                (null === f && s || f !== a && f !== y(a)) && (S = f, d.insertBefore(a, f), _.emit("shadow", a, d, w));
              } else l && l.removeChild(a);
            }
            function v(e) {
              _.emit(e, a, I, w);
            }
          }
          function Z(e, t) {
            for (var n = t; n !== e && h(n) !== e; ) n = h(n);
            return n === c ? null : n;
          }
          function ee(e, t, n, o) {
            var i, r = "horizontal" === A.direction;
            return t !== e ? (i = t.getBoundingClientRect(), a(r ? n > i.left + v(i) / 2 : o > i.top + m(i) / 2)) : (function () {
              var t, i, a, c = e.children.length;
              for (t = 0; t < c; t++) {
                if ((i = e.children[t], a = i.getBoundingClientRect(), r && a.left + a.width / 2 > n)) return i;
                if (!r && a.top + a.height / 2 > o) return i;
              }
              return null;
            })();
            function a(e) {
              return e ? y(t) : t;
            }
          }
        };
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {
    "./classes": 8,
    "contra/emitter": 4,
    crossvent: 5
  }],
  10: [function (e, t, n) {
    var o, i, r = t.exports = {};
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function c() {
      throw new Error("clearTimeout has not been defined");
    }
    function d(e) {
      if (o === setTimeout) return setTimeout(e, 0);
      if ((o === a || !o) && setTimeout) return (o = setTimeout, setTimeout(e, 0));
      try {
        return o(e, 0);
      } catch (t) {
        try {
          return o.call(null, e, 0);
        } catch (t) {
          return o.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        o = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        o = a;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : c;
      } catch (e) {
        i = c;
      }
    })();
    var s, l = [], u = !1, f = -1;
    function p() {
      u && s && (u = !1, s.length ? l = s.concat(l) : f = -1, l.length && v());
    }
    function v() {
      if (!u) {
        var e = d(p);
        u = !0;
        for (var t = l.length; t; ) {
          for ((s = l, l = []); ++f < t; ) s && s[f].run();
          (f = -1, t = l.length);
        }
        (s = null, u = !1, (function (e) {
          if (i === clearTimeout) return clearTimeout(e);
          if ((i === c || !i) && clearTimeout) return (i = clearTimeout, clearTimeout(e));
          try {
            i(e);
          } catch (t) {
            try {
              return i.call(null, e);
            } catch (t) {
              return i.call(this, e);
            }
          }
        })(e));
      }
    }
    function m(e, t) {
      (this.fun = e, this.array = t);
    }
    function h() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      (l.push(new m(e, t)), 1 !== l.length || u || d(v));
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function (e) {
      return [];
    }, r.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, r.cwd = function () {
      return "/";
    }, r.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, r.umask = function () {
      return 0;
    });
  }, {}],
  11: [function (e, t, n) {
    (function (e) {
      (function () {
        var n;
        (n = "function" == typeof e ? function (t) {
          e(t);
        } : function (e) {
          setTimeout(e, 0);
        }, t.exports = n);
      }).call(this);
    }).call(this, e("timers").setImmediate);
  }, {
    timers: 12
  }],
  12: [function (e, t, n) {
    (function (t, o) {
      (function () {
        var i = e("process/browser.js").nextTick, r = Function.prototype.apply, a = Array.prototype.slice, c = {}, d = 0;
        function s(e, t) {
          (this._id = e, this._clearFn = t);
        }
        (n.setTimeout = function () {
          return new s(r.call(setTimeout, window, arguments), clearTimeout);
        }, n.setInterval = function () {
          return new s(r.call(setInterval, window, arguments), clearInterval);
        }, n.clearTimeout = n.clearInterval = function (e) {
          e.close();
        }, s.prototype.unref = s.prototype.ref = function () {}, s.prototype.close = function () {
          this._clearFn.call(window, this._id);
        }, n.enroll = function (e, t) {
          (clearTimeout(e._idleTimeoutId), e._idleTimeout = t);
        }, n.unenroll = function (e) {
          (clearTimeout(e._idleTimeoutId), e._idleTimeout = -1);
        }, n._unrefActive = n.active = function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout();
          }, t));
        }, n.setImmediate = "function" == typeof t ? t : function (e) {
          var t = d++, o = !(arguments.length < 2) && a.call(arguments, 1);
          return (c[t] = !0, i(function () {
            c[t] && (o ? e.apply(null, o) : e.call(null), n.clearImmediate(t));
          }), t);
        }, n.clearImmediate = "function" == typeof o ? o : function (e) {
          delete c[e];
        });
      }).call(this);
    }).call(this, e("timers").setImmediate, e("timers").clearImmediate);
  }, {
    "process/browser.js": 10,
    timers: 12
  }]
}, {}, [1]);

},{}]},["2pWbc","DpxeY"], "DpxeY", "parcelRequirec526")

//# sourceMappingURL=index.da934a41.js.map
