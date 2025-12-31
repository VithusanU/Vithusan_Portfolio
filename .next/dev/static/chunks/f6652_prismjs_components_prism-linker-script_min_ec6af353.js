(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-linker-script.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages["linker-script"] = {
    comment: {
        pattern: /(^|\s)\/\*[\s\S]*?(?:$|\*\/)/,
        lookbehind: !0,
        greedy: !0
    },
    identifier: {
        pattern: /"[^"\r\n]*"/,
        greedy: !0
    },
    "location-counter": {
        pattern: /\B\.\B/,
        alias: "important"
    },
    section: {
        pattern: /(^|[^\w*])\.\w+\b/,
        lookbehind: !0,
        alias: "keyword"
    },
    function: /\b[A-Z][A-Z_]*(?=\s*\()/,
    number: /\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,
    operator: />>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,
    punctuation: /[(){},;]/
}, Prism.languages.ld = Prism.languages["linker-script"];
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-linker-script_min_ec6af353.js.map