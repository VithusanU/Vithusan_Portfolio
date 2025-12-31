(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-bison.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.bison = Prism.languages.extend("c", {}), Prism.languages.insertBefore("bison", "comment", {
    bison: {
        pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
        inside: {
            c: {
                pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                inside: {
                    delimiter: {
                        pattern: /^%?\{|%?\}$/,
                        alias: "punctuation"
                    },
                    "bison-variable": {
                        pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                        alias: "variable",
                        inside: {
                            punctuation: /<|>/
                        }
                    },
                    rest: Prism.languages.c
                }
            },
            comment: Prism.languages.c.comment,
            string: Prism.languages.c.string,
            property: /\S+(?=:)/,
            keyword: /%\w+/,
            number: {
                pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                lookbehind: !0
            },
            punctuation: /%[%?]|[|:;\[\]<>]/
        }
    }
});
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-bison_min_f324dd05.js.map