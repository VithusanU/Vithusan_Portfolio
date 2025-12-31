(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-ignore.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(n) {
    n.languages.ignore = {
        comment: /^#.*/m,
        entry: {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: "string",
            inside: {
                operator: /^!|\*\*?|\?/,
                regex: {
                    pattern: /(^|[^\\])\[[^\[\]]*\]/,
                    lookbehind: !0
                },
                punctuation: /\//
            }
        }
    }, n.languages.gitignore = n.languages.ignore, n.languages.hgignore = n.languages.ignore, n.languages.npmignore = n.languages.ignore;
}(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-ignore_min_a5429f46.js.map