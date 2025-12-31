(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-phpdoc.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(a) {
    var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
    a.languages.phpdoc = a.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
            lookbehind: !0
        }
    }), a.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [
            {
                pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
                lookbehind: !0,
                inside: {
                    keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
                    punctuation: /[|\\[\]()]/
                }
            }
        ]
    }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc);
}(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-phpdoc_min_09e89f0f.js.map