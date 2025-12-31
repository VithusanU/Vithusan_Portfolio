(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-rip.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.rip = {
    comment: {
        pattern: /#.*/,
        greedy: !0
    },
    char: {
        pattern: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
        greedy: !0
    },
    string: {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    regex: {
        pattern: /(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    },
    keyword: /(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,
    builtin: /@|\bSystem\b/,
    boolean: /\b(?:false|true)\b/,
    date: /\b\d{4}-\d{2}-\d{2}\b/,
    time: /\b\d{2}:\d{2}:\d{2}\b/,
    datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
    symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
    number: /[+-]?\b(?:\d+\.\d+|\d+)\b/,
    punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
    reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-rip_min_a441b4f4.js.map