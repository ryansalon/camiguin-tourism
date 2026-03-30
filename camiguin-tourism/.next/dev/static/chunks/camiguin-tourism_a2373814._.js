(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/camiguin-tourism/data/destinations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "destinations",
    ()=>destinations
]);
const destinations = [
    {
        id: "1",
        name: "White Island",
        category: "Spot",
        description: "A pristine white sandbar located off the shore of Mambajao. The sandbar changes shape with the tide and offers a stunning view of Mt. Hibok-Hibok.",
        address: "Mambajao, Camiguin",
        rating: 4.8,
        imageUrl: "/images/white-island-camiguin-2.jpg",
        latitude: 9.25778,
        longitude: 124.65583,
        operatingHours: "5:00 AM - 5:00 PM"
    },
    {
        id: "2",
        name: "Sunken Cemetery",
        category: "Spot",
        description: "A unique diving and snorkeling site marked by a large cross rising from the sea. The cemetery sunk during the volcanic birth of Mt. Vulcan.",
        address: "Catarman, Camiguin",
        rating: 4.7,
        imageUrl: "/images/sunken.jpg",
        latitude: 9.20676,
        longitude: 124.63291,
        operatingHours: "24 Hours"
    },
    {
        id: "3",
        name: "Katibawasan Falls",
        category: "Spot",
        description: "A towering 250-foot waterfall cascading into a rock pool surrounded by ground orchids, wild ferns, and trees.",
        address: "Mambajao, Camiguin",
        rating: 4.6,
        imageUrl: "/images/katibawasan better.jpg",
        latitude: 9.20833,
        longitude: 124.72667,
        operatingHours: "8:00 AM - 5:00 PM"
    },
    {
        id: "4",
        name: "Tuasan Falls",
        category: "Spot",
        description: "A beautiful, less crowded waterfall with clear blue waters, accessible via a short trek.",
        address: "Catarman, Camiguin",
        rating: 4.5,
        imageUrl: "/images/tuasan.avif",
        latitude: 9.17683,
        longitude: 124.68097,
        operatingHours: "8:00 AM - 5:00 PM"
    },
    {
        id: "5",
        name: "Guerrera Rice Paddy Villas",
        category: "Hotel",
        description: "Asian fusion restaurant and villas set right in the middle of rice paddies with ocean views.",
        address: "Mambajao, Camiguin",
        rating: 4.9,
        imageUrl: "/images/guerrera entrance.jpg",
        latitude: 9.24565,
        longitude: 124.66464,
        priceLevel: "$$$",
        operatingHours: "Check-in 2:00 PM"
    },
    {
        id: "6",
        name: "CheckPoint Food Park",
        category: "Restaurant",
        description: "A popular food park offering a variety of local and international cuisines.",
        address: "Mambajao, Camiguin",
        rating: 4.4,
        imageUrl: "/images/images (2).jpg",
        latitude: 9.24212,
        longitude: 124.66350,
        priceLevel: "$",
        operatingHours: "10:00 AM - 10:00 PM"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/camiguin-tourism/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$data$2f$destinations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/data/destinations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-bootstrap/esm/Form.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/react-icons/gi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/camiguin-tourism/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
;
;
const MapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/camiguin-tourism/components/MapComponent.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/camiguin-tourism/components/MapComponent.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-light d-flex align-items-center justify-content-center rounded-4 shadow-sm",
            style: {
                width: "100%",
                height: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted fw-bold animate-pulse",
                children: "Loading Map..."
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 14,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = MapComponent;
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "27b84fcc8de0e81adfc3d95ab4aa959d27c51c4cf13c4792fabc5422831def77") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "27b84fcc8de0e81adfc3d95ab4aa959d27c51c4cf13c4792fabc5422831def77";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const featuredDestinations = __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$data$2f$destinations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destinations"].slice(0, 3);
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero-section",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "hero-content",
                    initial: "hidden",
                    animate: "visible",
                    variants: staggerContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "display-2 text-white mb-4",
                            variants: fadeInUp,
                            children: [
                                "Experience ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-warning",
                                    children: "Camiguin"
                                }, void 0, false, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 235
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "lead text-white-50 mb-5 mx-auto",
                            variants: fadeInUp,
                            children: "The Island Born of Fire awaits. Discover pristine beaches, lush waterfalls, and timeless adventures in a tropical paradise."
                        }, void 0, false, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 293
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "d-flex justify-content-center gap-3",
                            variants: fadeInUp,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/search",
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "primary",
                                        size: "lg",
                                        className: "shadow-lg px-5 py-3 fs-6 border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                                                className: "me-2"
                                            }, void 0, false, {
                                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 100
                                            }, this),
                                            " Start Exploring"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 640
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 581
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 501
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 59,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 59,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            className: "position-relative",
            style: {
                marginTop: "-80px",
                zIndex: 10
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                className: "justify-content-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    md: 10,
                    lg: 9,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "glass-card rounded-4 p-5 d-flex justify-content-around text-center flex-wrap gap-4",
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "px-3",
                                whileHover: {
                                    y: -5
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 text-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUmbrellaBeach"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 110
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fw-bold fs-5 text-dark",
                                        children: "Pristine Spots"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 145
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "text-muted",
                                        children: "Top Rated Places"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 78,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vr d-none d-md-block my-2 opacity-25"
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 272
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "px-3",
                                whileHover: {
                                    y: -5
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 d-inline-block p-3 rounded-circle bg-warning bg-opacity-10 text-warning",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUtensils"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 110
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fw-bold fs-5 text-dark",
                                        children: "Local Taste"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 140
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "text-muted",
                                        children: "Authentic Food"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 197
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 83,
                                columnNumber: 328
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vr d-none d-md-block my-2 opacity-25"
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 262
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "px-3",
                                whileHover: {
                                    y: -5
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 d-inline-block p-3 rounded-circle bg-success bg-opacity-10 text-success",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCompass"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 110
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fw-bold fs-5 text-dark",
                                        children: "7 Volcanoes"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "text-muted",
                                        children: "Island Adventure"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 196
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 318
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 68
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 67,
                    columnNumber: 48
                }, this)
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 67,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-100 bg-light-subtle",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "section-title text-center mb-5",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "fw-bold display-6",
                                children: "Featured Destinations"
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted lead mx-auto",
                                style: {
                                    maxWidth: "600px"
                                },
                                children: "Hand-picked experiences for your perfect getaway. Discover the magic of Camiguin."
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 72
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                        className: "g-4",
                        children: featuredDestinations.map(_HomeFeaturedDestinationsMap)
                    }, void 0, false, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 94,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            scale: 0.95
        };
        t4 = {
            opacity: 1,
            scale: 1
        };
        t5 = {
            once: true
        };
        t6 = {
            duration: 0.8
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
            lg: 6,
            className: "order-lg-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "map-container position-relative",
                initial: t3,
                whileInView: t4,
                viewport: t5,
                transition: t6,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponent, {
                    center: [
                        9.17,
                        124.72
                    ],
                    zoom: 11,
                    destinations: __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$data$2f$destinations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destinations"]
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 161
                }, this)
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 146,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            once: true
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h6, {
            variants: fadeInUp,
            className: "text-primary fw-bold text-uppercase ls-wide mb-3",
            children: "Island Navigation"
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 162,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            variants: fadeInUp,
            className: "display-5 fw-bold mb-4 text-dark",
            children: [
                "Discover the ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary",
                    children: "Island Born of Fire"
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 170,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: fadeInUp,
            className: "lead text-muted mb-5",
            children: "Camiguin is a small pear-shaped volcanic island in the northern tip of Mindanao. Though tiny, it's packed with natural wonders from mountains to sea."
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-unstyled mb-5",
            children: [
                "7 Unique Volcanoes within a single island",
                "Crystal Clear Springs and emerald waterfalls",
                "Historic Landmarks preserved under the sea"
            ].map(_HomeAnonymous)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-5 my-5 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    className: "align-items-center g-5",
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            lg: 6,
                            className: "order-lg-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: t8,
                                variants: staggerContainer,
                                children: [
                                    t9,
                                    t10,
                                    t11,
                                    t12,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeInUp,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/search",
                                            passHref: true,
                                            legacyBehavior: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                variant: "dark",
                                                size: "lg",
                                                className: "rounded-pill px-5 py-3 shadow-lg hover-scale",
                                                children: "View All Locations"
                                            }, void 0, false, {
                                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 351
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 292
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 260
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 148
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 113
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 187,
                    columnNumber: 69
                }, this)
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 187,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            opacity: 0,
            y: 60
        };
        t15 = {
            opacity: 1,
            y: 0
        };
        t16 = {
            once: true
        };
        t17 = {
            duration: 0.8,
            type: "spring",
            bounce: 0.3
        };
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
        $[18] = t17;
    } else {
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
        t17 = $[18];
    }
    let t18;
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mb-4 d-inline-flex align-items-center justify-content-center gap-3 p-3 rounded-pill bg-white bg-opacity-20 backdrop-blur-sm",
            animate: {
                y: [
                    0,
                    -8,
                    0
                ]
            },
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiPalmTree"], {
                    size: 32,
                    className: "text-white"
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 232,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white fw-bold",
                    children: "Summer 2026"
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 232,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSun"], {
                    size: 24,
                    className: "text-warning"
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 232,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "fw-900 mb-3 display-4 text-white",
            children: "Catch the Summer Wave!"
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, this);
        $[19] = t18;
        $[20] = t19;
    } else {
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "lead mb-5 text-white opacity-90 mx-auto",
            style: {
                maxWidth: "600px"
            },
            children: "Join our community to get the hottest travel deals, secret island tips, and exclusive offers."
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"].Control, {
            placeholder: "Your email address...",
            className: "rounded-pill border-0 px-4 py-3 bg-transparent shadow-none",
            style: {
                fontSize: "1.1rem"
            }
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-relative z-1",
            children: [
                t18,
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                    className: "justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                        md: 8,
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                            className: "d-flex flex-column flex-sm-row gap-2 p-2 bg-white rounded-pill shadow-lg",
                            children: [
                                t21,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                        variant: "dark",
                                        className: "rounded-pill px-4 py-3 fw-bold w-100 w-sm-auto h-100 text-nowrap",
                                        children: "Join the Fun"
                                    }, void 0, false, {
                                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 260,
                            columnNumber: 124
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 260,
                        columnNumber: 105
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 260,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "position-absolute bg-white opacity-10 rounded-circle",
            style: {
                width: "400px",
                height: "400px",
                top: "-100px",
                right: "-100px"
            },
            animate: {
                rotate: 360
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                t1,
                t2,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-5 mb-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "summer-vibe-cta rounded-5 p-5 text-center position-relative shadow-2xl border-0 overflow-hidden",
                            initial: t14,
                            whileInView: t15,
                            viewport: t16,
                            transition: t17,
                            children: [
                                t22,
                                t23,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "position-absolute bg-warning opacity-20 rounded-circle",
                                    style: {
                                        width: "300px",
                                        height: "300px",
                                        bottom: "-50px",
                                        left: "-50px"
                                    },
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 266
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 72
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 289,
                        columnNumber: 61
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 289,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    return t24;
}
_c1 = Home;
function _HomeAnonymous(text, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
        className: "mb-4 d-flex align-items-start",
        variants: fadeInUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-circle bg-success bg-opacity-10 text-success p-1 me-3 mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "20 6 9 17 4 12"
                    }, void 0, false, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 308,
                        columnNumber: 318
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                    lineNumber: 308,
                    columnNumber: 175
                }, this)
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 308,
                columnNumber: 91
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "fs-5 text-secondary",
                children: text
            }, void 0, false, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 308,
                columnNumber: 366
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/camiguin-tourism/app/page.tsx",
        lineNumber: 308,
        columnNumber: 10
    }, this);
}
function _HomeFeaturedDestinationsMap(dest, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
        md: 4,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 40
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true
            },
            transition: {
                duration: 0.5,
                delay: index * 0.15
            },
            className: "h-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                className: "h-100 hover-shadow border-0 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden position-relative",
                        style: {
                            borderTopLeftRadius: "24px",
                            borderTopRightRadius: "24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Img, {
                                variant: "top",
                                src: dest.imageUrl,
                                className: "card-img-top",
                                alt: dest.name
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "position-absolute top-0 end-0 m-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-bold",
                                    children: [
                                        "⭐ ",
                                        dest.rating
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 150
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 99
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 322,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Body, {
                        className: "p-4 d-flex flex-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge bg-info bg-opacity-10 text-primary border border-primary border-opacity-10",
                                    children: dest.category
                                }, void 0, false, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 336
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 314
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Title, {
                                className: "fw-bold fs-4 mb-3 text-dark",
                                children: dest.name
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 463
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"].Text, {
                                className: "text-muted mb-4 flex-grow-1",
                                style: {
                                    lineHeight: "1.6"
                                },
                                children: [
                                    dest.description.substring(0, 100),
                                    "..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 539
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/destination/${dest.id}`,
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    variant: "outline-primary",
                                    className: "w-100 d-flex align-items-center justify-content-center gap-2 py-2",
                                    children: [
                                        "Explore Details ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$camiguin$2d$tourism$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronRight"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/camiguin-tourism/app/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 270
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/camiguin-tourism/app/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 142
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/camiguin-tourism/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 65
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/camiguin-tourism/app/page.tsx",
                        lineNumber: 325,
                        columnNumber: 268
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/camiguin-tourism/app/page.tsx",
                lineNumber: 322,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/camiguin-tourism/app/page.tsx",
            lineNumber: 311,
            columnNumber: 36
        }, this)
    }, dest.id, false, {
        fileName: "[project]/camiguin-tourism/app/page.tsx",
        lineNumber: 311,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "MapComponent");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=camiguin-tourism_a2373814._.js.map