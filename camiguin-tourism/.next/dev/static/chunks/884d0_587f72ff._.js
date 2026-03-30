(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/camiguin-tourism/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/camiguin-tourism/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/camiguin-tourism/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/camiguin-tourism/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTEXT_VERSION",
    ()=>CONTEXT_VERSION,
    "LeafletContext",
    ()=>LeafletContext,
    "createLeafletContext",
    ()=>createLeafletContext,
    "extendContext",
    ()=>extendContext,
    "useLeafletContext",
    ()=>useLeafletContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const CONTEXT_VERSION = 1;
function createLeafletContext(map) {
    return Object.freeze({
        __version: CONTEXT_VERSION,
        map
    });
}
function extendContext(source, extra) {
    return Object.freeze({
        ...source,
        ...extra
    });
}
const LeafletContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useLeafletContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(LeafletContext);
    if (context == null) {
        throw new Error('No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>');
    }
    return context;
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createElementHook",
    ()=>createElementHook,
    "createElementObject",
    ()=>createElementObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function createElementObject(instance, context, container) {
    return Object.freeze({
        instance,
        context,
        container
    });
}
function createElementHook(createElement, updateElement) {
    if (updateElement == null) {
        return function useImmutableLeafletElement(props, context) {
            const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
            if (!elementRef.current) elementRef.current = createElement(props, context);
            return elementRef;
        };
    }
    return function useMutableLeafletElement(props, context) {
        const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
        if (!elementRef.current) elementRef.current = createElement(props, context);
        const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
        const { instance } = elementRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function updateElementProps() {
            if (propsRef.current !== props) {
                updateElement(instance, props, propsRef.current);
                propsRef.current = props;
            }
        }, [
            instance,
            props,
            updateElement
        ]);
        return elementRef;
    };
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContainerComponent",
    ()=>createContainerComponent,
    "createDivOverlayComponent",
    ()=>createDivOverlayComponent,
    "createLeafComponent",
    ()=>createLeafComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
;
;
;
function createContainerComponent(useElement) {
    function ContainerComponent(props, forwardedRef) {
        const { instance, context } = useElement(props).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
            "createContainerComponent.ContainerComponent.useImperativeHandle": ()=>instance
        }["createContainerComponent.ContainerComponent.useImperativeHandle"]);
        const { children } = props;
        return children == null ? null : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeafletContext"], {
            value: context
        }, children);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ContainerComponent);
}
function createDivOverlayComponent(useElement) {
    function OverlayComponent(props, forwardedRef) {
        const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const { instance } = useElement(props, setOpen).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
            "createDivOverlayComponent.OverlayComponent.useImperativeHandle": ()=>instance
        }["createDivOverlayComponent.OverlayComponent.useImperativeHandle"]);
        // biome-ignore lint/correctness/useExhaustiveDependencies: update overlay when children change
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function updateOverlay() {
            if (isOpen) {
                instance.update();
            }
        }, [
            instance,
            isOpen,
            props.children
        ]);
        // @ts-ignore _contentNode missing in type definition
        const contentNode = instance._contentNode;
        return contentNode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(props.children, contentNode) : null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(OverlayComponent);
}
function createLeafComponent(useElement) {
    function LeafComponent(props, forwardedRef) {
        const { instance } = useElement(props).current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
            "createLeafComponent.LeafComponent.useImperativeHandle": ()=>instance
        }["createLeafComponent.LeafComponent.useImperativeHandle"]);
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(LeafComponent);
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/control.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControlHook",
    ()=>createControlHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
;
;
function createControlHook(useElement) {
    return function useLeafletControl(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement(props, context);
        const { instance } = elementRef.current;
        const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props.position);
        const { position } = props;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addControl() {
            instance.addTo(context.map);
            return function removeControl() {
                instance.remove();
            };
        }, [
            context.map,
            instance
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function updateControl() {
            if (position != null && position !== positionRef.current) {
                instance.setPosition(position);
                positionRef.current = position;
            }
        }, [
            instance,
            position
        ]);
        return elementRef;
    };
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/attribution.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAttribution",
    ()=>useAttribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useAttribution(map, attribution) {
    const attributionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(attribution);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function updateAttribution() {
        if (attribution !== attributionRef.current && map.attributionControl != null) {
            if (attributionRef.current != null) {
                map.attributionControl.removeAttribution(attributionRef.current);
            }
            if (attribution != null) {
                map.attributionControl.addAttribution(attribution);
            }
        }
        attributionRef.current = attribution;
    }, [
        map,
        attribution
    ]);
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/events.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEventHandlers",
    ()=>useEventHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useEventHandlers(element, eventHandlers) {
    const eventHandlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addEventHandlers() {
        if (eventHandlers != null) {
            element.instance.on(eventHandlers);
        }
        eventHandlersRef.current = eventHandlers;
        return function removeEventHandlers() {
            if (eventHandlersRef.current != null) {
                element.instance.off(eventHandlersRef.current);
            }
            eventHandlersRef.current = null;
        };
    }, [
        element,
        eventHandlers
    ]);
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/pane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withPane",
    ()=>withPane
]);
function withPane(props, context) {
    const pane = props.pane ?? context.pane;
    return pane ? {
        ...props,
        pane
    } : props;
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/div-overlay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDivOverlayHook",
    ()=>createDivOverlayHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/attribution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/pane.js [app-client] (ecmascript)");
;
;
;
;
function createDivOverlayHook(useElement, useLifecycle) {
    return function useDivOverlay(props, setOpen) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttribution"])(context.map, props.attribution);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        useLifecycle(elementRef.current, context, props, setOpen);
        return elementRef;
    };
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/layer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLayerHook",
    ()=>createLayerHook,
    "useLayerLifecycle",
    ()=>useLayerLifecycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/attribution.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/pane.js [app-client] (ecmascript)");
;
;
;
;
;
function useLayerLifecycle(element, context) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addLayer() {
        const container = context.layerContainer ?? context.map;
        container.addLayer(element.instance);
        return function removeLayer() {
            context.layerContainer?.removeLayer(element.instance);
            context.map.removeLayer(element.instance);
        };
    }, [
        context,
        element
    ]);
}
function createLayerHook(useElement) {
    return function useLayer(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$attribution$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttribution"])(context.map, props.attribution);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        useLayerLifecycle(elementRef.current, context);
        return elementRef;
    };
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/path.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPathHook",
    ()=>createPathHook,
    "usePathOptions",
    ()=>usePathOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/pane.js [app-client] (ecmascript)");
;
;
;
;
;
function usePathOptions(element, props) {
    const optionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function updatePathOptions() {
        if (props.pathOptions !== optionsRef.current) {
            const options = props.pathOptions ?? {};
            element.instance.setStyle(options);
            optionsRef.current = options;
        }
    }, [
        element,
        props
    ]);
}
function createPathHook(useElement) {
    return function usePath(props) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeafletContext"])();
        const elementRef = useElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPane"])(props, context), context);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEventHandlers"])(elementRef.current, props.eventHandlers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayerLifecycle"])(elementRef.current, context);
        usePathOptions(elementRef.current, props);
        return elementRef;
    };
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createControlComponent",
    ()=>createControlComponent,
    "createLayerComponent",
    ()=>createLayerComponent,
    "createOverlayComponent",
    ()=>createOverlayComponent,
    "createPathComponent",
    ()=>createPathComponent,
    "createTileLayerComponent",
    ()=>createTileLayerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/control.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$div$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/div-overlay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/path.js [app-client] (ecmascript)");
;
;
;
;
;
;
function createControlComponent(createInstance) {
    function createElement(props, context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(createInstance(props), context);
    }
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementHook"])(createElement);
    const useControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$control$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createControlHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLeafComponent"])(useControl);
}
function createLayerComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const useLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLayerHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContainerComponent"])(useLayer);
}
function createOverlayComponent(createElement, useLifecycle) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementHook"])(createElement);
    const useOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$div$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDivOverlayHook"])(useElement, useLifecycle);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDivOverlayComponent"])(useOverlay);
}
function createPathComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const usePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPathHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContainerComponent"])(usePath);
}
function createTileLayerComponent(createElement, updateElement) {
    const useElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementHook"])(createElement, updateElement);
    const useLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLayerHook"])(useElement);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLeafComponent"])(useLayer);
}
}),
"[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/grid-layer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateGridLayer",
    ()=>updateGridLayer
]);
function updateGridLayer(layer, props, prevProps) {
    const { opacity, zIndex } = props;
    if (opacity != null && opacity !== prevProps.opacity) {
        layer.setOpacity(opacity);
    }
    if (zIndex != null && zIndex !== prevProps.zIndex) {
        layer.setZIndex(zIndex);
    }
}
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapContainer",
    ()=>MapContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function MapContainerComponent({ bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
    const [props] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        className,
        id,
        style
    });
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(forwardedRef, {
        "MapContainerComponent.useImperativeHandle": ()=>context?.map ?? null
    }["MapContainerComponent.useImperativeHandle"], [
        context
    ]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: ref callback
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapContainerComponent.useCallback[mapRef]": (node)=>{
            if (node !== null && !mapInstanceRef.current) {
                const map = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"](node, options);
                mapInstanceRef.current = map;
                if (center != null && zoom != null) {
                    map.setView(center, zoom);
                } else if (bounds != null) {
                    map.fitBounds(bounds, boundsOptions);
                }
                if (whenReady != null) {
                    map.whenReady(whenReady);
                }
                setContext((0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLeafletContext"])(map));
            }
        }
    }["MapContainerComponent.useCallback[mapRef]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapContainerComponent.useEffect": ()=>{
            return ({
                "MapContainerComponent.useEffect": ()=>{
                    context?.map.remove();
                }
            })["MapContainerComponent.useEffect"];
        }
    }["MapContainerComponent.useEffect"], [
        context
    ]);
    const contents = context ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeafletContext"], {
        value: context
    }, children) : placeholder ?? null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...props,
        ref: mapRef
    }, contents);
}
const MapContainer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(MapContainerComponent);
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TileLayer",
    ()=>TileLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$grid$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/grid-layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/pane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTileLayerComponent"])(function createTileLayer({ url, ...options }, context) {
    const layer = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"](url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withPane"])(options, context));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(layer, context);
}, function updateTileLayer(layer, props, prevProps) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$grid$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateGridLayer"])(layer, props, prevProps);
    const { url } = props;
    if (url != null && url !== prevProps.url) {
        layer.setUrl(url);
    }
});
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marker",
    ()=>Marker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLayerComponent"])(function createMarker({ position, ...options }, ctx) {
    const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"](position, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(marker, (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendContext"])(ctx, {
        overlayContainer: marker
    }));
}, function updateMarker(marker, props, prevProps) {
    if (props.position !== prevProps.position) {
        marker.setLatLng(props.position);
    }
    if (props.icon != null && props.icon !== prevProps.icon) {
        marker.setIcon(props.icon);
    }
    if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {
        marker.setZIndexOffset(props.zIndexOffset);
    }
    if (props.opacity != null && props.opacity !== prevProps.opacity) {
        marker.setOpacity(props.opacity);
    }
    if (marker.dragging != null && props.draggable !== prevProps.draggable) {
        if (props.draggable === true) {
            marker.dragging.enable();
        } else {
            marker.dragging.disable();
        }
    }
});
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popup",
    ()=>Popup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOverlayComponent"])(function createPopup(props, context) {
    const popup = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"](props, context.overlayContainer);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(popup, context);
}, function usePopupLifecycle(element, context, { position }, setOpen) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addPopup() {
        const { instance } = element;
        function onPopupOpen(event) {
            if (event.popup === instance) {
                instance.update();
                setOpen(true);
            }
        }
        function onPopupClose(event) {
            if (event.popup === instance) {
                setOpen(false);
            }
        }
        context.map.on({
            popupopen: onPopupOpen,
            popupclose: onPopupClose
        });
        if (context.overlayContainer == null) {
            // Attach to a Map
            if (position != null) {
                instance.setLatLng(position);
            }
            instance.openOn(context.map);
        } else {
            // Attach to container component
            context.overlayContainer.bindPopup(instance);
        }
        return function removePopup() {
            context.map.off({
                popupopen: onPopupOpen,
                popupclose: onPopupClose
            });
            context.overlayContainer?.unbindPopup();
            context.map.removeLayer(instance);
        };
    }, [
        element,
        context,
        setOpen,
        position
    ]);
});
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMap",
    ()=>useMap,
    "useMapEvent",
    ()=>useMapEvent,
    "useMapEvents",
    ()=>useMapEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLeafletContext"])().map;
}
function useMapEvent(type, handler) {
    const map = useMap();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addMapEventHandler() {
        // @ts-ignore event type
        map.on(type, handler);
        return function removeMapEventHandler() {
            // @ts-ignore event type
            map.off(type, handler);
        };
    }, [
        map,
        type,
        handler
    ]);
    return map;
}
function useMapEvents(handlers) {
    const map = useMap();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addMapEventHandlers() {
        map.on(handlers);
        return function removeMapEventHandlers() {
            map.off(handlers);
        };
    }, [
        map,
        handlers
    ]);
    return map;
}
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Polyline",
    ()=>Polyline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
;
const Polyline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPathComponent"])(function createPolyline({ positions, ...options }, ctx) {
    const polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"](positions, options);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(polyline, (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendContext"])(ctx, {
        overlayContainer: polyline
    }));
}, function updatePolyline(layer, props, prevProps) {
    if (props.positions !== prevProps.positions) {
        layer.setLatLngs(props.positions);
    }
});
}),
"[project]/camiguin-tourism/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/@react-leaflet/core/lib/generic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$generic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOverlayComponent"])(function createTooltip(props, context) {
    const tooltip = new __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"](props, context.overlayContainer);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f40$react$2d$leaflet$2f$core$2f$lib$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementObject"])(tooltip, context);
}, function useTooltipLifecycle(element, context, { position }, setOpen) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function addTooltip() {
        const container = context.overlayContainer;
        if (container == null) {
            return;
        }
        const { instance } = element;
        const onTooltipOpen = {
            "Tooltip.useTooltipLifecycle.useEffect.addTooltip.onTooltipOpen": (event)=>{
                if (event.tooltip === instance) {
                    if (position != null) {
                        instance.setLatLng(position);
                    }
                    instance.update();
                    setOpen(true);
                }
            }
        }["Tooltip.useTooltipLifecycle.useEffect.addTooltip.onTooltipOpen"];
        const onTooltipClose = {
            "Tooltip.useTooltipLifecycle.useEffect.addTooltip.onTooltipClose": (event)=>{
                if (event.tooltip === instance) {
                    setOpen(false);
                }
            }
        }["Tooltip.useTooltipLifecycle.useEffect.addTooltip.onTooltipClose"];
        container.on({
            tooltipopen: onTooltipOpen,
            tooltipclose: onTooltipClose
        });
        container.bindTooltip(instance);
        return function removeTooltip() {
            container.off({
                tooltipopen: onTooltipOpen,
                tooltipclose: onTooltipClose
            });
            // @ts-ignore protected property
            if (container._map != null) {
                container.unbindTooltip();
            }
        };
    }, [
        element,
        context,
        setOpen,
        position
    ]);
});
}),
]);

//# sourceMappingURL=884d0_587f72ff._.js.map