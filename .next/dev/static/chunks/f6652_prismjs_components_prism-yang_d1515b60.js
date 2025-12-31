(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-yang.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.yang = {
    // https://tools.ietf.org/html/rfc6020#page-34
    // http://www.yang-central.org/twiki/bin/view/Main/YangExamples
    'comment': /\/\*[\s\S]*?\*\/|\/\/.*/,
    'string': {
        pattern: /"(?:[^\\"]|\\.)*"|'[^']*'/,
        greedy: true
    },
    'keyword': {
        pattern: /(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,
        lookbehind: true
    },
    'namespace': {
        pattern: /(\s)[a-z_][\w.-]*(?=:)/i,
        lookbehind: true
    },
    'boolean': /\b(?:false|true)\b/,
    'operator': /\+/,
    'punctuation': /[{};:]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-yang_d1515b60.js.map