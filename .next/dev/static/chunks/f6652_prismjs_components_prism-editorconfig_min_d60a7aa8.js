(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-editorconfig.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.editorconfig = {
    comment: /[;#].*/,
    section: {
        pattern: /(^[ \t]*)\[.+\]/m,
        lookbehind: !0,
        alias: "selector",
        inside: {
            regex: /\\\\[\[\]{},!?.*]/,
            operator: /[!?]|\.\.|\*{1,2}/,
            punctuation: /[\[\]{},]/
        }
    },
    key: {
        pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    value: {
        pattern: /=.*/,
        alias: "attr-value",
        inside: {
            punctuation: /^=/
        }
    }
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-editorconfig_min_d60a7aa8.js.map