(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-bnf.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.bnf = {
    'string': {
        pattern: /"[^\r\n"]*"|'[^\r\n']*'/
    },
    'definition': {
        pattern: /<[^<>\r\n\t]+>(?=\s*::=)/,
        alias: [
            'rule',
            'keyword'
        ],
        inside: {
            'punctuation': /^<|>$/
        }
    },
    'rule': {
        pattern: /<[^<>\r\n\t]+>/,
        inside: {
            'punctuation': /^<|>$/
        }
    },
    'operator': /::=|[|()[\]{}*+?]|\.{3}/
};
Prism.languages.rbnf = Prism.languages.bnf;
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-bnf_fa8aa299.js.map