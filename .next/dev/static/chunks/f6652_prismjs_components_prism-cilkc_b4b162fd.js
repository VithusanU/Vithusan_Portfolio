(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-cilkc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.cilkc = Prism.languages.insertBefore('c', 'function', {
    'parallel-keyword': {
        pattern: /\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,
        alias: 'keyword'
    }
});
Prism.languages['cilk-c'] = Prism.languages['cilkc'];
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-cilkc_b4b162fd.js.map