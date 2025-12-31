(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-json.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// https://www.json.org/json-en.html
Prism.languages.json = {
    'property': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /:/,
    'boolean': /\b(?:false|true)\b/,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    }
};
Prism.languages.webmanifest = Prism.languages.json;
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-json_846616d2.js.map