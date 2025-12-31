(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-gedcom.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.gedcom = {
    "line-value": {
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
        lookbehind: !0,
        inside: {
            pointer: {
                pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
                alias: "variable"
            }
        }
    },
    record: {
        pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
        lookbehind: !0,
        alias: "tag"
    },
    level: {
        pattern: /(^[\t ]*)\d+/m,
        lookbehind: !0,
        alias: "number"
    },
    pointer: {
        pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
        alias: "variable"
    }
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-gedcom_min_5f0f1ccd.js.map