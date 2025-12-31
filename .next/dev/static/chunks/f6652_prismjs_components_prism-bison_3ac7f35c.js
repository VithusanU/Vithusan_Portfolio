(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-bison.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.bison = Prism.languages.extend('c', {});
Prism.languages.insertBefore('bison', 'comment', {
    'bison': {
        // This should match all the beginning of the file
        // including the prologue(s), the bison declarations and
        // the grammar rules.
        pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
        inside: {
            'c': {
                // Allow for one level of nested braces
                pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                inside: {
                    'delimiter': {
                        pattern: /^%?\{|%?\}$/,
                        alias: 'punctuation'
                    },
                    'bison-variable': {
                        pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                        alias: 'variable',
                        inside: {
                            'punctuation': /<|>/
                        }
                    },
                    rest: Prism.languages.c
                }
            },
            'comment': Prism.languages.c.comment,
            'string': Prism.languages.c.string,
            'property': /\S+(?=:)/,
            'keyword': /%\w+/,
            'number': {
                pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                lookbehind: true
            },
            'punctuation': /%[%?]|[|:;\[\]<>]/
        }
    }
});
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-bison_3ac7f35c.js.map