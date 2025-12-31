(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-ebnf.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.ebnf = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: {
        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
        greedy: !0
    },
    special: {
        pattern: /\?[^?\r\n]*\?/,
        greedy: !0,
        alias: "class-name"
    },
    definition: {
        pattern: /^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,
        lookbehind: !0,
        alias: [
            "rule",
            "keyword"
        ]
    },
    rule: /\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,
    punctuation: /\([:/]|[:/]\)|[.,;()[\]{}]/,
    operator: /[-=|*/!]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-ebnf_min_7dd3880a.js.map