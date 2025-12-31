(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-gcode.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gcode = {
    comment: /;.*|\B\(.*?\)\B/,
    string: {
        pattern: /"(?:""|[^"])*"/,
        greedy: !0
    },
    keyword: /\b[GM]\d+(?:\.\d+)?\b/,
    property: /\b[A-Z]/,
    checksum: {
        pattern: /(\*)\d+/,
        lookbehind: !0,
        alias: "number"
    },
    punctuation: /[:*]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-gcode_min_92b7679c.js.map