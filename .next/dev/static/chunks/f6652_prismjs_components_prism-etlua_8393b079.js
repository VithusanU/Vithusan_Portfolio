(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-etlua.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(Prism1) {
    Prism1.languages.etlua = {
        'delimiter': {
            pattern: /^<%[-=]?|-?%>$/,
            alias: 'punctuation'
        },
        'language-lua': {
            pattern: /[\s\S]+/,
            inside: Prism1.languages.lua
        }
    };
    Prism1.hooks.add('before-tokenize', function(env) {
        var pattern = /<%[\s\S]+?%>/g;
        Prism1.languages['markup-templating'].buildPlaceholders(env, 'etlua', pattern);
    });
    Prism1.hooks.add('after-tokenize', function(env) {
        Prism1.languages['markup-templating'].tokenizePlaceholders(env, 'etlua');
    });
})(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-etlua_8393b079.js.map