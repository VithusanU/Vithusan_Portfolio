(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-rego.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.rego = {
    comment: /#.*/,
    property: {
        pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,
    boolean: /\b(?:false|true)\b/,
    function: {
        pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,
        inside: {
            namespace: /\b\w+\b(?=\s*\.)/,
            punctuation: /\./
        }
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/,
    punctuation: /[,;.\[\]{}()]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-rego_min_c9479a84.js.map