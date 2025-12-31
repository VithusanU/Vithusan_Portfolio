(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-nginx.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(Prism1) {
    var variable = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
    Prism1.languages.nginx = {
        'comment': {
            pattern: /(^|[\s{};])#.*/,
            lookbehind: true,
            greedy: true
        },
        'directive': {
            pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
            lookbehind: true,
            greedy: true,
            inside: {
                'string': {
                    pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
                    lookbehind: true,
                    greedy: true,
                    inside: {
                        'escape': {
                            pattern: /\\["'\\nrt]/,
                            alias: 'entity'
                        },
                        'variable': variable
                    }
                },
                'comment': {
                    pattern: /(\s)#.*/,
                    lookbehind: true,
                    greedy: true
                },
                'keyword': {
                    pattern: /^\S+/,
                    greedy: true
                },
                // other patterns
                'boolean': {
                    pattern: /(\s)(?:off|on)(?!\S)/,
                    lookbehind: true
                },
                'number': {
                    pattern: /(\s)\d+[a-z]*(?!\S)/i,
                    lookbehind: true
                },
                'variable': variable
            }
        },
        'punctuation': /[{};]/
    };
})(Prism);
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-nginx_49492326.js.map