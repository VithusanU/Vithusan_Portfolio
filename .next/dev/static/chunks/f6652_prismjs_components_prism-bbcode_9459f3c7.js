(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-bbcode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.bbcode = {
    'tag': {
        pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,
        inside: {
            'tag': {
                pattern: /^\[\/?[^\s=\]]+/,
                inside: {
                    'punctuation': /^\[\/?/
                }
            },
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,
                inside: {
                    'punctuation': [
                        /^=/,
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            'punctuation': /\]/,
            'attr-name': /[^\s=\]]+/
        }
    }
};
Prism.languages.shortcode = Prism.languages.bbcode;
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-bbcode_9459f3c7.js.map