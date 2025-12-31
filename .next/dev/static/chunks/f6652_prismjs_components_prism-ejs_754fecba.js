(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-ejs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(Prism1) {
    Prism1.languages.ejs = {
        'delimiter': {
            pattern: /^<%[-_=]?|[-_]?%>$/,
            alias: 'punctuation'
        },
        'comment': /^#[\s\S]*/,
        'language-javascript': {
            pattern: /[\s\S]+/,
            inside: Prism1.languages.javascript
        }
    };
    Prism1.hooks.add('before-tokenize', function(env) {
        var ejsPattern = /<%(?!%)[\s\S]+?%>/g;
        Prism1.languages['markup-templating'].buildPlaceholders(env, 'ejs', ejsPattern);
    });
    Prism1.hooks.add('after-tokenize', function(env) {
        Prism1.languages['markup-templating'].tokenizePlaceholders(env, 'ejs');
    });
    Prism1.languages.eta = Prism1.languages.ejs;
})(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-ejs_754fecba.js.map