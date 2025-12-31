(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-ignore.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(Prism1) {
    Prism1.languages.ignore = {
        // https://git-scm.com/docs/gitignore
        'comment': /^#.*/m,
        'entry': {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: 'string',
            inside: {
                'operator': /^!|\*\*?|\?/,
                'regex': {
                    pattern: /(^|[^\\])\[[^\[\]]*\]/,
                    lookbehind: true
                },
                'punctuation': /\//
            }
        }
    };
    Prism1.languages.gitignore = Prism1.languages.ignore;
    Prism1.languages.hgignore = Prism1.languages.ignore;
    Prism1.languages.npmignore = Prism1.languages.ignore;
})(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-ignore_82f904a7.js.map