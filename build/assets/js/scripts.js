// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kCkDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _asyncToGeneratorMjs = require("@swc/helpers/src/_async_to_generator.mjs");
var _asyncToGeneratorMjsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjs);
var _toConsumableArrayMjs = require("@swc/helpers/src/_to_consumable_array.mjs");
var _toConsumableArrayMjsDefault = parcelHelpers.interopDefault(_toConsumableArrayMjs);
var _tsGeneratorMjs = require("@swc/helpers/src/_ts_generator.mjs");
var _tsGeneratorMjsDefault = parcelHelpers.interopDefault(_tsGeneratorMjs);
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "617ef148647c2fe5";
module.bundle.HMR_BUNDLE_ID = "f8e426cf428e318e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = function() {
        var _ref = (0, _asyncToGeneratorMjsDefault.default)(function(event) {
            var data, assets, handled, i, id, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ansiDiagnostic, stack, overlay;
            return (0, _tsGeneratorMjsDefault.default)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        checkedAssets = {} /*: {|[string]: boolean|} */ ;
                        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
                        assetsToAccept = [];
                        data = JSON.parse(event.data);
                        if (!(data.type === "update")) return [
                            3,
                            3
                        ];
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        assets = data.assets.filter(function(asset) {
                            return asset.envHash === HMR_ENV_HASH;
                        }); // Handle HMR Update
                        handled = assets.every(function(asset) {
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (!handled) return [
                            3,
                            2
                        ];
                        console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                        return [
                            4,
                            hmrApplyUpdates(assets)
                        ];
                    case 1:
                        _state.sent();
                        for(i = 0; i < assetsToAccept.length; i++){
                            id = assetsToAccept[i][1];
                            if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                        }
                        return [
                            3,
                            3
                        ];
                    case 2:
                        fullReload();
                        _state.label = 3;
                    case 3:
                        if (data.type === "error") {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                // Log parcel errors to console
                                for(_iterator = data.diagnostics.ansi[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    ansiDiagnostic = _step.value;
                                    stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                                    console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            if (typeof document !== "undefined") {
                                // Render the fancy html overlay
                                removeErrorOverlay();
                                overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                                document.body.appendChild(overlay);
                            }
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(event) {
            return _ref.apply(this, arguments);
        };
    }();
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var diagnostic = _step.value;
            var stack = diagnostic.frames.length ? diagnostic.frames.reduce(function(p, frame) {
                return "".concat(p, '\n<a href="/__parcel_launch_editor?file=').concat(encodeURIComponent(frame.location), '" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">').concat(frame.location, "</a>\n").concat(frame.code);
            }, "") : diagnostic.stack;
            errorHTML += '\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          \uD83D\uDEA8 '.concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return "<div>\uD83D\uDCA1 " + hint + "</div>";
            }).join(""), "\n        </div>\n        ").concat(diagnostic.documentation ? '<div>\uD83D\uDCDD <a style="color: violet" href="'.concat(diagnostic.documentation, '" target="_blank">Learn more</a></div>') : "", "\n      </div>\n    ");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            var script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise(function(resolve, reject) {
                var _document$head;
                script.onload = function() {
                    return resolve(script);
                };
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise(function(resolve, reject) {
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
function hmrApplyUpdates(assets) {
    return _hmrApplyUpdates.apply(this, arguments);
}
function _hmrApplyUpdates() {
    _hmrApplyUpdates = (0, _asyncToGeneratorMjsDefault.default)(function(assets) {
        var scriptsToRemove, promises;
        return (0, _tsGeneratorMjsDefault.default)(this, function(_state) {
            switch(_state.label){
                case 0:
                    global.parcelHotUpdate = Object.create(null);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        4,
                        5
                    ]);
                    if (!!supportsSourceURL) return [
                        3,
                        3
                    ];
                    promises = assets.map(function(asset) {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch(function(err) {
                            // Web extension bugfix for Chromium
                            // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                            if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                                if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                                    extCtx.runtime.reload();
                                    return;
                                }
                                asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                                return hmrDownload(asset);
                            }
                            throw err;
                        });
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 2:
                    scriptsToRemove = _state.sent();
                    _state.label = 3;
                case 3:
                    assets.forEach(function(asset) {
                        hmrApply(module.bundle.root, asset);
                    });
                    return [
                        3,
                        5
                    ];
                case 4:
                    delete global.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach(function(script) {
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                    return [
                        7
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _hmrApplyUpdates.apply(this, arguments);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            var fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            var _parents;
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            (_parents = parents).push.apply(_parents, (0, _toConsumableArrayMjsDefault.default)(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{"@swc/helpers/src/_async_to_generator.mjs":"1nSiC","@swc/helpers/src/_to_consumable_array.mjs":"3e8KJ","@swc/helpers/src/_ts_generator.mjs":"hcbbl","@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"1nSiC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"3TXmZ":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3e8KJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHolesMjs = require("./_array_without_holes.mjs");
var _arrayWithoutHolesMjsDefault = parcelHelpers.interopDefault(_arrayWithoutHolesMjs);
var _iterableToArrayMjs = require("./_iterable_to_array.mjs");
var _iterableToArrayMjsDefault = parcelHelpers.interopDefault(_iterableToArrayMjs);
var _nonIterableSpreadMjs = require("./_non_iterable_spread.mjs");
var _nonIterableSpreadMjsDefault = parcelHelpers.interopDefault(_nonIterableSpreadMjs);
var _unsupportedIterableToArrayMjs = require("./_unsupported_iterable_to_array.mjs");
var _unsupportedIterableToArrayMjsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayMjs);
function _toConsumableArray(arr) {
    return (0, _arrayWithoutHolesMjsDefault.default)(arr) || (0, _iterableToArrayMjsDefault.default)(arr) || (0, _unsupportedIterableToArrayMjsDefault.default)(arr) || (0, _nonIterableSpreadMjsDefault.default)();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes.mjs":"bLzyV","./_iterable_to_array.mjs":"23Cnd","./_non_iterable_spread.mjs":"i2Dx7","./_unsupported_iterable_to_array.mjs":"6Ilpl","@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"bLzyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayMjs = require("./_array_like_to_array.mjs");
var _arrayLikeToArrayMjsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayMjs);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArrayMjsDefault.default)(arr);
}
exports.default = _arrayWithoutHoles;

},{"./_array_like_to_array.mjs":"3LjnH","@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"3LjnH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"23Cnd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"i2Dx7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"6Ilpl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArrayMjs = require("./_array_like_to_array.mjs");
var _arrayLikeToArrayMjsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayMjs);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _arrayLikeToArrayMjsDefault.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArrayMjsDefault.default)(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./_array_like_to_array.mjs":"3LjnH","@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"hcbbl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", function() {
    return 0, _tslib.__generator;
});
var _tslib = require("tslib");

},{"tslib":"86MVX","@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"86MVX":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", function() {
    return __extends;
});
parcelHelpers.export(exports, "__assign", function() {
    return __assign;
});
parcelHelpers.export(exports, "__rest", function() {
    return __rest;
});
parcelHelpers.export(exports, "__decorate", function() {
    return __decorate;
});
parcelHelpers.export(exports, "__param", function() {
    return __param;
});
parcelHelpers.export(exports, "__metadata", function() {
    return __metadata;
});
parcelHelpers.export(exports, "__awaiter", function() {
    return __awaiter;
});
parcelHelpers.export(exports, "__generator", function() {
    return __generator;
});
parcelHelpers.export(exports, "__createBinding", function() {
    return __createBinding;
});
parcelHelpers.export(exports, "__exportStar", function() {
    return __exportStar;
});
parcelHelpers.export(exports, "__values", function() {
    return __values;
});
parcelHelpers.export(exports, "__read", function() {
    return __read;
});
/** @deprecated */ parcelHelpers.export(exports, "__spread", function() {
    return __spread;
});
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", function() {
    return __spreadArrays;
});
parcelHelpers.export(exports, "__spreadArray", function() {
    return __spreadArray;
});
parcelHelpers.export(exports, "__await", function() {
    return __await;
});
parcelHelpers.export(exports, "__asyncGenerator", function() {
    return __asyncGenerator;
});
parcelHelpers.export(exports, "__asyncDelegator", function() {
    return __asyncDelegator;
});
parcelHelpers.export(exports, "__asyncValues", function() {
    return __asyncValues;
});
parcelHelpers.export(exports, "__makeTemplateObject", function() {
    return __makeTemplateObject;
});
parcelHelpers.export(exports, "__importStar", function() {
    return __importStar;
});
parcelHelpers.export(exports, "__importDefault", function() {
    return __importDefault;
});
parcelHelpers.export(exports, "__classPrivateFieldGet", function() {
    return __classPrivateFieldGet;
});
parcelHelpers.export(exports, "__classPrivateFieldSet", function() {
    return __classPrivateFieldSet;
});
parcelHelpers.export(exports, "__classPrivateFieldIn", function() {
    return __classPrivateFieldIn;
});
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    var __ = function __() {
        this.constructor = d;
    };
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var verb = function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    };
    var step = function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    };
    var _ = {
        label: 0,
        sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function get() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    var verb = function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    };
    var resume = function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    };
    var step = function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    };
    var fulfill = function fulfill(value) {
        resume("next", value);
    };
    var reject = function reject(value) {
        resume("throw", value);
    };
    var settle = function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    };
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var verb = function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    };
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    var verb = function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    };
    var settle = function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    };
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function __setModuleDefault(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"3TXmZ"}],"PZ93j":[function(require,module,exports) {
/**
 * Load components.
 */ require("./after-libs/color-scheme");
require("./after-libs/modal");
require("./after-libs/web-fonts");

},{"./after-libs/color-scheme":"14lTz","./after-libs/modal":"gEbtT","./after-libs/web-fonts":"4xX1P"}],"14lTz":[function(require,module,exports) {
// Check for OS color scheme setting, switch to dark mode if needed.
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) document.body.classList.add("dark-mode");
// Let the button toggle the dark-mode class on and off of the <body> element.
var color_scheme_toggle = document.querySelector(".controls-color-scheme");
color_scheme_toggle.addEventListener("click", color_scheme_toggle_onClick);
function color_scheme_toggle_onClick(e) {
    e.preventDefault();
    if (document.body.classList.contains("dark-mode")) document.body.classList.remove("dark-mode");
    else document.body.classList.add("dark-mode");
}

},{}],"gEbtT":[function(require,module,exports) {
var show_modal = function show_modal(e) {
    // console.log(e);
    try {
        var target = e.target;
        var modal = document.getElementById("modal");
        // console.log(modal);
        if (!modal.classList.contains("is-active")) modal.classList.add("is-active");
        var modal_image = document.getElementById("modal-image");
        // console.log(modal_image);
        var image_src = "" + target.dataset.screenshot;
        // console.log(image_src);
        modal_image.src = image_src;
    } catch (error) {
        console.log("Error showing modal: ", error);
    }
};
var modal_links = document.querySelectorAll(".modal-link");
try {
    for(i = 0; i < modal_links.length; i++)modal_links[i].addEventListener("click", show_modal);
} catch (error) {
    console.log("Error setting modal link click: ", error);
}

},{}],"4xX1P":[function(require,module,exports) {
var WebFont = require("webfontloader");
WebFont.load({
    google: {
        families: [
            "Montserrat:400,700"
        ]
    }
});

},{"webfontloader":"9Z02j"}],"9Z02j":[function(require,module,exports) {
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */ (function() {
    var aa = function aa(a, b, c) {
        return a.call.apply(a.bind, arguments);
    };
    var ba = function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c);
            };
        }
        return function() {
            return a.apply(b, arguments);
        };
    };
    var ca = function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document;
    };
    var t = function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c) for(var e in c)c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b;
    };
    var u = function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild);
    };
    var v = function v(a) {
        a.parentNode && a.parentNode.removeChild(a);
    };
    var w = function w(a, b, c) {
        b = b || [];
        c = c || [];
        for(var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1){
            for(var f = !1, g = 0; g < d.length; g += 1)if (b[e] === d[g]) {
                f = !0;
                break;
            }
            f || d.push(b[e]);
        }
        b = [];
        for(e = 0; e < d.length; e += 1){
            f = !1;
            for(g = 0; g < c.length; g += 1)if (d[e] === c[g]) {
                f = !0;
                break;
            }
            f || b.push(d[e]);
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    };
    var y = function y(a, b) {
        for(var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)if (c[d] == b) return !0;
        return !1;
    };
    var ea = function ea(a) {
        return a.o.location.hostname || a.a.location.hostname;
    };
    var z = function z(a, b, c) {
        function d() {
            m && e && f && (m(g), m = null);
        }
        b = t(a, "link", {
            rel: "stylesheet",
            href: b,
            media: "all"
        });
        var e = !1, f = !0, g = null, m = c || null;
        da ? (b.onload = function() {
            e = !0;
            d();
        }, b.onerror = function() {
            e = !0;
            g = Error("Stylesheet failed to load");
            d();
        }) : setTimeout(function() {
            e = !0;
            d();
        }, 0);
        u(a, "head", b);
    };
    var A = function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
            var f = t(a, "script", {
                src: b
            }), g = !1;
            f.onload = f.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
            };
            e.appendChild(f);
            setTimeout(function() {
                g || (g = !0, c && c(Error("Script load timeout")));
            }, d || 5E3);
            return f;
        }
        return null;
    };
    var B = function B() {
        this.a = 0;
        this.c = null;
    };
    var C = function C(a) {
        a.a++;
        return function() {
            a.a--;
            D(a);
        };
    };
    var E = function E(a, b) {
        a.c = b;
        D(a);
    };
    var D = function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null);
    };
    var F = function F(a) {
        this.a = a || "-";
    };
    var G = function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10));
    };
    var fa = function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
    };
    var I = function I(a) {
        var b = [];
        a = a.split(/,\s*/);
        for(var c = 0; c < a.length; c++){
            var d = a[c].replace(/['"]/g, "");
            -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
        }
        return b.join(",");
    };
    var J = function J(a) {
        return a.a + a.f;
    };
    var H = function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b;
    };
    var ga = function ga(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b;
    };
    var ha = function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes;
    };
    var ia = function ia(a) {
        a.g && w(a.f, [
            a.a.c("wf", "loading")
        ]);
        K(a, "loading");
    };
    var L = function L(a) {
        if (a.g) {
            var b = y(a.f, a.a.c("wf", "active")), c = [], d = [
                a.a.c("wf", "loading")
            ];
            b || c.push(a.a.c("wf", "inactive"));
            w(a.f, c, d);
        }
        K(a, "inactive");
    };
    var K = function K(a, b, c) {
        if (a.j && a.h[b]) {
            if (c) a.h[b](c.c, J(c));
            else a.h[b]();
        }
    };
    var ja = function ja() {
        this.c = {};
    };
    var ka = function ka(a, b, c) {
        var d = [], e;
        for(e in b)if (b.hasOwnProperty(e)) {
            var f = a.c[e];
            f && d.push(f(b[e], c));
        }
        return d;
    };
    var M = function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", {
            "aria-hidden": "true"
        }, this.f);
    };
    var N = function N(a) {
        u(a.c, "body", a.a);
    };
    var O = function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
    };
    var P = function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3E3;
        this.h = f || void 0;
    };
    var Q = function Q(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3E3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
    };
    var T = function T() {
        if (null === S) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
        }
        return S;
    };
    var la = function la(a, b, c) {
        for(var d in R)if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
        return !1;
    };
    var U = function U(a) {
        var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
    };
    var ma = function ma(a) {
        setTimeout(p(function() {
            U(this);
        }, a), 50);
    };
    var V = function V(a, b) {
        setTimeout(p(function() {
            v(this.g.a);
            v(this.h.a);
            v(this.j.a);
            v(this.m.a);
            b(this.a);
        }, a), 0);
    };
    var W = function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = !1;
        this.s = c;
    };
    var na = function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [
            a.a.c("wf", "active")
        ], [
            a.a.c("wf", "loading"),
            a.a.c("wf", "inactive")
        ]), K(a, "active")) : L(a.a));
    };
    var oa = function oa(a) {
        this.j = a;
        this.a = new ja;
        this.h = 0;
        this.f = this.g = !0;
    };
    var qa = function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
            var _$a = e || null, m = d || null || {};
            if (0 === c.length && f) L(b.a);
            else {
                b.f += c.length;
                f && (b.j = f);
                var h, l = [];
                for(h = 0; h < c.length; h++){
                    var k = c[h], n = m[k.c], r = b.a, x = k;
                    r.g && w(r.f, [
                        r.a.c("wf", x.c, J(x).toString(), "loading")
                    ]);
                    K(r, "fontloading", x);
                    r = null;
                    if (null === X) {
                        if (window.FontFace) {
                            var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                            X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
                        } else X = !1;
                    }
                    X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, _$a, n);
                    l.push(r);
                }
                for(h = 0; h < l.length; h++)l[h].start();
            }
        }, 0);
    };
    var pa = function pa(a, b, c) {
        var d = [], e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for(c = d.length; b < c; b++)d[b].load(function(b, d, c) {
            qa(a, f, b, d, c);
        });
    };
    var ra = function ra(a, b) {
        this.c = a;
        this.a = b;
    };
    var sa = function sa(a, b) {
        this.c = a;
        this.a = b;
    };
    var ta = function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || "";
    };
    var va = function va(a, b) {
        for(var c = b.length, d = 0; d < c; d++){
            var e = b[d].split(":");
            3 == e.length && a.f.push(e.pop());
            var f = "";
            2 == e.length && "" != e[1] && (f = ":");
            a.a.push(e.join(f));
        }
    };
    var wa = function wa(a) {
        if (0 == a.a.length) throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit=")) return a.c;
        for(var b = a.a.length, c = [], d = 0; d < b; d++)c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b;
    };
    var ya = function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {};
    };
    var Da = function Da(a) {
        for(var b = a.f.length, c = 0; c < b; c++){
            var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = [
                "n4"
            ];
            if (2 <= d.length) {
                var g;
                var m = d[1];
                g = [];
                if (m) for(var m = m.split(","), h = m.length, l = 0; l < h; l++){
                    var k;
                    k = m[l];
                    if (k.match(/^[\w-]+$/)) {
                        var n = Ca.exec(k.toLowerCase());
                        if (null == n) k = "";
                        else {
                            k = n[2];
                            k = null == k || "" == k ? "n" : Ba[k];
                            n = n[1];
                            if (null == n || "" == n) n = "4";
                            else var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                            k = [
                                k,
                                n
                            ].join("");
                        }
                    } else k = "";
                    k && g.push(k);
                }
                0 < g.length && (f = g);
                3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
            }
            a.c[e] || (d = za[e]) && (a.c[e] = d);
            for(d = 0; d < f.length; d += 1)a.a.push(new G(e, f[d]));
        }
    };
    var Ea = function Ea(a, b) {
        this.c = a;
        this.a = b;
    };
    var Ga = function Ga(a, b) {
        this.c = a;
        this.a = b;
    };
    var Ha = function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = [];
    };
    function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments);
    }
    var q = Date.now || function() {
        return +new Date;
    };
    var da = !!window.FontFace;
    F.prototype.c = function(a) {
        for(var b = [], c = 0; c < arguments.length; c++)b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a);
    };
    P.prototype.start = function() {
        var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d, e) {
            function f() {
                q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function(a) {
                    1 <= a.length ? d() : setTimeout(f, 25);
                }, function() {
                    e();
                });
            }
            f();
        }), e = null, f = new Promise(function(a, d) {
            e = setTimeout(d, b.f);
        });
        Promise.race([
            f,
            d
        ]).then(function() {
            e && (clearTimeout(e), e = null);
            b.g(b.a);
        }, function() {
            b.j(b.a);
        });
    };
    var R = {
        D: "serif",
        C: "sans-serif"
    }, S = null;
    Q.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
    };
    var X = null;
    W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [
            b.a.c("wf", a.c, J(a).toString(), "active")
        ], [
            b.a.c("wf", a.c, J(a).toString(), "loading"),
            b.a.c("wf", a.c, J(a).toString(), "inactive")
        ]);
        K(b, "fontactive", a);
        this.m = !0;
        na(this);
    };
    W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
            var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [
                b.a.c("wf", a.c, J(a).toString(), "loading")
            ];
            c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
            w(b.f, d, e);
        }
        K(b, "fontinactive", a);
        na(this);
    };
    oa.prototype.load = function(a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = !1 !== a.events;
        this.f = !1 !== a.classes;
        pa(this, new ha(this.c, a), a);
    };
    ra.prototype.load = function(a) {
        function b() {
            if (f["__mti_fntLst" + d]) {
                var c = f["__mti_fntLst" + d](), e = [], h;
                if (c) for(var l = 0; l < c.length; l++){
                    var k = c[l].fontfamily;
                    void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
                }
                a(e);
            } else setTimeout(function() {
                b();
            }, 50);
        }
        var c = this, d = c.a.projectId, e = c.a.version;
        if (d) {
            var f = c.c.o;
            A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e) {
                e ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
                    return c.a;
                }, b());
            }).id = "__MonotypeAPIScript__" + d;
        } else a([]);
    };
    sa.prototype.load = function(a) {
        var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B;
        b = 0;
        for(c = d.length; b < c; b++)z(this.c, d[b], C(g));
        var m = [];
        b = 0;
        for(c = e.length; b < c; b++)if (d = e[b].split(":"), d[1]) for(var h = d[1].split(","), l = 0; l < h.length; l += 1)m.push(new G(d[0], h[l]));
        else m.push(new G(d[0]));
        E(g, function() {
            a(m, f);
        });
    };
    var ua = "https://fonts.googleapis.com/css";
    var za = {
        latin: "BESbswy",
        "latin-ext": "\xe7\xf6\xfcğş",
        cyrillic: "йяЖ",
        greek: "αβΣ",
        khmer: "កខគ",
        Hanuman: "កខគ"
    }, Aa = {
        thin: "1",
        extralight: "2",
        "extra-light": "2",
        ultralight: "2",
        "ultra-light": "2",
        light: "3",
        regular: "4",
        book: "4",
        medium: "5",
        "semi-bold": "6",
        semibold: "6",
        "demi-bold": "6",
        demibold: "6",
        bold: "7",
        "extra-bold": "8",
        extrabold: "8",
        "ultra-bold": "8",
        ultrabold: "8",
        black: "9",
        heavy: "9",
        l: "3",
        r: "4",
        b: "7"
    }, Ba = {
        i: "i",
        italic: "i",
        n: "n",
        normal: "n"
    }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    var Fa = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    Ea.prototype.load = function(a) {
        var b = new B, c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function() {
            a(f.a, f.c, Fa);
        });
    };
    Ga.prototype.load = function(a) {
        var b = this.a.id, c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b) {
            if (b) a([]);
            else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                b = c.Typekit.config.fn;
                for(var e = [], f = 0; f < b.length; f += 2)for(var g = b[f], m = b[f + 1], h = 0; h < m.length; h++)e.push(new G(g, m[h]));
                try {
                    c.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    });
                } catch (l) {}
                a(e);
            }
        }, 2E3) : a([]);
    };
    Ha.prototype.load = function(a) {
        var b = this.f.id, c = this.c.o, d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
            for(var g = 0, m = c.fonts.length; g < m; ++g){
                var h = c.fonts[g];
                d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
            }
            a(d.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b) {
            b && a([]);
        })) : a([]);
    };
    var Y = new oa(window);
    Y.a.c.custom = function(a, b) {
        return new sa(b, a);
    };
    Y.a.c.fontdeck = function(a, b) {
        return new Ha(b, a);
    };
    Y.a.c.monotype = function(a, b) {
        return new ra(b, a);
    };
    Y.a.c.typekit = function(a, b) {
        return new Ga(b, a);
    };
    Y.a.c.google = function(a, b) {
        return new Ea(b, a);
    };
    var Z = {
        load: p(Y.load, Y)
    };
    "function" === typeof define && define.amd ? define(function() {
        return Z;
    }) : module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
})();

},{}]},["kCkDd","PZ93j"], "PZ93j", "parcelRequire7c38")

//# sourceMappingURL=scripts.js.map
