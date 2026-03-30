(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/camiguin-tourism/components/MapComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-leaflet/lib/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Component to handle map center updates
function ChangeView(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "c3cb3204b8265850bb37d5c4c3a717c12e7b14f2d867602fbad3938f380edc23") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3cb3204b8265850bb37d5c4c3a717c12e7b14f2d867602fbad3938f380edc23";
    }
    const { center, zoom } = t0;
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    let t1;
    let t2;
    if ($[1] !== center || $[2] !== map || $[3] !== zoom) {
        t1 = ({
            "ChangeView[useEffect()]": ()=>{
                map.setView(center, zoom);
                setTimeout({
                    "ChangeView[useEffect() > setTimeout()]": ()=>{
                        map.invalidateSize();
                    }
                }["ChangeView[useEffect() > setTimeout()]"], 100);
            }
        })["ChangeView[useEffect()]"];
        t2 = [
            center,
            zoom,
            map
        ];
        $[1] = center;
        $[2] = map;
        $[3] = zoom;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return null;
}
_s(ChangeView, "IoceErwr5KVGS9kN4RQ1bOkYMAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = ChangeView;
// Create custom marker icons
const createCustomIcon = (color)=>{
    const iconMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderToStaticMarkup"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color: color,
            filter: 'drop-shadow(0px 3px 2px rgba(0,0,0,0.3))',
            transform: 'translate(-50%, -100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
            size: 40
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
        lineNumber: 55,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0)));
    return __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        html: iconMarkup,
        className: 'custom-marker-icon',
        // distinct class to avoid default styles
        iconSize: [
            40,
            40
        ],
        iconAnchor: [
            20,
            40
        ],
        // Point of the icon which will correspond to marker's location
        popupAnchor: [
            0,
            -40
        ] // Point from which the popup should open relative to the iconAnchor
    });
};
const defaultIcon = createCustomIcon('#00a8cc'); // Primary color
const selectedIcon = createCustomIcon('#ff6b6b'); // Accent color
const userLocationIcon = __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
    html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderToStaticMarkup"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color: '#ffa500',
            filter: 'drop-shadow(0px 3px 2px rgba(0,0,0,0.3))',
            transform: 'translate(-50%, -100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStreetView"], {
            size: 40
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
        lineNumber: 75,
        columnNumber: 30
    }, ("TURBOPACK compile-time value", void 0))),
    className: 'custom-user-icon',
    iconSize: [
        40,
        40
    ],
    iconAnchor: [
        20,
        40
    ],
    popupAnchor: [
        0,
        -40
    ]
});
function MapComponent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "c3cb3204b8265850bb37d5c4c3a717c12e7b14f2d867602fbad3938f380edc23") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3cb3204b8265850bb37d5c4c3a717c12e7b14f2d867602fbad3938f380edc23";
    }
    const { center, zoom, destinations, selectedId, userLocation } = t0;
    let t1;
    if ($[1] !== destinations || $[2] !== selectedId) {
        let t2;
        if ($[4] !== selectedId) {
            t2 = ({
                "MapComponent[destinations.find()]": (d)=>d.id === selectedId
            })["MapComponent[destinations.find()]"];
            $[4] = selectedId;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = destinations.find(t2);
        $[1] = destinations;
        $[2] = selectedId;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const selectedDest = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            height: "100%",
            width: "100%",
            borderRadius: "inherit",
            zIndex: 1
        };
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== center || $[8] !== zoom) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChangeView, {
            center: center,
            zoom: zoom
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[7] = center;
        $[8] = zoom;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
            attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors \xA9 <a href=\"https://carto.com/attributions\">CARTO</a>",
            url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== selectedDest || $[12] !== userLocation) {
        t5 = userLocation && selectedDest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: userLocation,
                    icon: userLocationIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                        className: "custom-popup",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fw-bold text-center p-2",
                            children: "You are here"
                        }, void 0, false, {
                            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                            lineNumber: 159,
                            columnNumber: 132
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                        lineNumber: 159,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                    lineNumber: 159,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                    positions: [
                        userLocation,
                        [
                            selectedDest.latitude,
                            selectedDest.longitude
                        ]
                    ],
                    pathOptions: {
                        color: "#00a8cc",
                        dashArray: "10, 10",
                        weight: 4,
                        opacity: 0.8
                    }
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                    lineNumber: 159,
                    columnNumber: 208
                }, this)
            ]
        }, void 0, true);
        $[11] = selectedDest;
        $[12] = userLocation;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== destinations || $[15] !== selectedId) {
        let t7;
        if ($[17] !== selectedId) {
            t7 = ({
                "MapComponent[destinations.map()]": (dest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        position: [
                            dest.latitude,
                            dest.longitude
                        ],
                        icon: selectedId === dest.id ? selectedIcon : defaultIcon,
                        opacity: selectedId && selectedId !== dest.id ? 0.6 : 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                direction: "top",
                                offset: [
                                    0,
                                    -45
                                ],
                                opacity: 1,
                                className: "fw-bold px-2 py-1 rounded shadow-sm border-0",
                                children: dest.name
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                lineNumber: 176,
                                columnNumber: 234
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                className: "custom-popup",
                                closeButton: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card border-0 shadow-none",
                                    style: {
                                        width: "200px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "position-relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: dest.imageUrl,
                                                    alt: dest.name,
                                                    className: "card-img-top rounded-top",
                                                    style: {
                                                        height: "120px",
                                                        objectFit: "cover"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 51
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge bg-white text-primary position-absolute top-0 end-0 m-2 shadow-sm",
                                                    children: dest.category
                                                }, void 0, false, {
                                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                            lineNumber: 178,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-body p-3 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                    className: "card-title fw-bold mb-1",
                                                    children: dest.name
                                                }, void 0, false, {
                                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 183
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-warning small mb-2",
                                                    children: "★★★★☆"
                                                }, void 0, false, {
                                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 239
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `/destination/${dest.id}`,
                                                    className: "btn btn-sm btn-outline-primary w-100 rounded-pill fw-bold",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 291
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                            lineNumber: 181,
                                            columnNumber: 140
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                    lineNumber: 176,
                                    columnNumber: 419
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                                lineNumber: 176,
                                columnNumber: 367
                            }, this)
                        ]
                    }, dest.id, true, {
                        fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
                        lineNumber: 176,
                        columnNumber: 53
                    }, this)
            })["MapComponent[destinations.map()]"];
            $[17] = selectedId;
            $[18] = t7;
        } else {
            t7 = $[18];
        }
        t6 = destinations.map(t7);
        $[14] = destinations;
        $[15] = selectedId;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "f43957db95e5956",
            children: ".leaflet-popup-content-wrapper{border-radius:1rem;padding:0;overflow:hidden;box-shadow:0 10px 25px #00000026}.leaflet-popup-content{margin:0;width:201px!important}.leaflet-container{font-family:var(--font-sans)}"
        }, void 0, false, void 0, this);
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== center || $[21] !== t3 || $[22] !== t5 || $[23] !== t6 || $[24] !== zoom) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            center: center,
            zoom: zoom,
            scrollWheelZoom: false,
            style: t2,
            className: "rounded-4",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/camiguin-tourism/components/MapComponent.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[20] = center;
        $[21] = t3;
        $[22] = t5;
        $[23] = t6;
        $[24] = zoom;
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    return t8;
}
_c1 = MapComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChangeView");
__turbopack_context__.k.register(_c1, "MapComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/camiguin-tourism/components/MapComponent.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/camiguin-tourism/components/MapComponent.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=camiguin-tourism_components_MapComponent_tsx_808148d4._.js.map