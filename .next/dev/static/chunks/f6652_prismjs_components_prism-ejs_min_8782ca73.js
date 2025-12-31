(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-ejs.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(a) {
    a.languages.ejs = {
        delimiter: {
            pattern: /^<%[-_=]?|[-_]?%>$/,
            alias: "punctuation"
        },
        comment: /^#[\s\S]*/,
        "language-javascript": {
            pattern: /[\s\S]+/,
            inside: a.languages.javascript
        }
    }, a.hooks.add("before-tokenize", function(e) {
        a.languages["markup-templating"].buildPlaceholders(e, "ejs", /<%(?!%)[\s\S]+?%>/g);
    }), a.hooks.add("after-tokenize", function(e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "ejs");
    }), a.languages.eta = a.languages.ejs;
}(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-ejs_min_8782ca73.js.map