(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-jsonp.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.jsonp = Prism.languages.extend('json', {
    'punctuation': /[{}[\]();,.]/
});
Prism.languages.insertBefore('jsonp', 'punctuation', {
    'function': /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
});
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-jsonp_a31b3f8e.js.map