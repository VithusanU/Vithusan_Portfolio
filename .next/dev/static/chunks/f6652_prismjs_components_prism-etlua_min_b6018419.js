(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-etlua.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(a) {
    a.languages.etlua = {
        delimiter: {
            pattern: /^<%[-=]?|-?%>$/,
            alias: "punctuation"
        },
        "language-lua": {
            pattern: /[\s\S]+/,
            inside: a.languages.lua
        }
    }, a.hooks.add("before-tokenize", function(e) {
        a.languages["markup-templating"].buildPlaceholders(e, "etlua", /<%[\s\S]+?%>/g);
    }), a.hooks.add("after-tokenize", function(e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "etlua");
    });
}(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-etlua_min_b6018419.js.map