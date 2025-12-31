(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-editorconfig.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.editorconfig = {
    // https://editorconfig-specification.readthedocs.io
    'comment': /[;#].*/,
    'section': {
        pattern: /(^[ \t]*)\[.+\]/m,
        lookbehind: true,
        alias: 'selector',
        inside: {
            'regex': /\\\\[\[\]{},!?.*]/,
            'operator': /[!?]|\.\.|\*{1,2}/,
            'punctuation': /[\[\]{},]/
        }
    },
    'key': {
        pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
        lookbehind: true,
        alias: 'attr-name'
    },
    'value': {
        pattern: /=.*/,
        alias: 'attr-value',
        inside: {
            'punctuation': /^=/
        }
    }
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-editorconfig_8cdd1021.js.map