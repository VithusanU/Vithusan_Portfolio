(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-roboconf.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.roboconf = {
    comment: /#.*/,
    keyword: {
        pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
        lookbehind: !0
    },
    component: {
        pattern: /[\w-]+(?=[ \t]*\{)/,
        alias: "variable"
    },
    property: /[\w.-]+(?=[ \t]*:)/,
    value: {
        pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
        lookbehind: !0,
        alias: "attr-value"
    },
    optional: {
        pattern: /\(optional\)/,
        alias: "builtin"
    },
    wildcard: {
        pattern: /(\.)\*/,
        lookbehind: !0,
        alias: "operator"
    },
    punctuation: /[{},.;:=]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-roboconf_min_11adbdf6.js.map