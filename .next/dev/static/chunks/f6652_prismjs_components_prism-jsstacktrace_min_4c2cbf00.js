(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-jsstacktrace.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.jsstacktrace = {
    "error-message": {
        pattern: /^\S.*/m,
        alias: "string"
    },
    "stack-frame": {
        pattern: /(^[ \t]+)at[ \t].*/m,
        lookbehind: !0,
        inside: {
            "not-my-code": {
                pattern: /^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
                alias: "comment"
            },
            filename: {
                pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                lookbehind: !0,
                alias: "url"
            },
            function: {
                pattern: /(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                lookbehind: !0,
                inside: {
                    punctuation: /\./
                }
            },
            punctuation: /[()]/,
            keyword: /\b(?:at|new)\b/,
            alias: {
                pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                alias: "variable"
            },
            "line-number": {
                pattern: /:\d+(?::\d+)?\b/,
                alias: "number",
                inside: {
                    punctuation: /:/
                }
            }
        }
    }
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-jsstacktrace_min_4c2cbf00.js.map