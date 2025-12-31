(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-properties.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    value: {
        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: !0,
        alias: "attr-value"
    },
    key: {
        pattern: /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,
        alias: "attr-name"
    },
    punctuation: /[=:]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-properties_min_0981c32c.js.map