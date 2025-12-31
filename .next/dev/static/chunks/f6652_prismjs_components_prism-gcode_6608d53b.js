(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-gcode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gcode = {
    'comment': /;.*|\B\(.*?\)\B/,
    'string': {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
    },
    'keyword': /\b[GM]\d+(?:\.\d+)?\b/,
    'property': /\b[A-Z]/,
    'checksum': {
        pattern: /(\*)\d+/,
        lookbehind: true,
        alias: 'number'
    },
    // T0:0:0
    'punctuation': /[:*]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-gcode_6608d53b.js.map