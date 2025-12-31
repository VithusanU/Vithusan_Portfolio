(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-racket.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.racket = Prism.languages.extend("scheme", {
    "lambda-parameter": {
        pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("racket", "string", {
    lang: {
        pattern: /^#lang.+/m,
        greedy: !0,
        alias: "keyword"
    }
}), Prism.languages.rkt = Prism.languages.racket;
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-racket_min_a298c513.js.map