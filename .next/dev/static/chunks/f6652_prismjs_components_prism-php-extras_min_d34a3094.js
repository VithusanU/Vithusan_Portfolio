(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-php-extras.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.insertBefore("php", "variable", {
    this: {
        pattern: /\$this\b/,
        alias: "keyword"
    },
    global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
    scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
            keyword: /\b(?:parent|self|static)\b/,
            punctuation: /::|\\/
        }
    }
});
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-php-extras_min_d34a3094.js.map