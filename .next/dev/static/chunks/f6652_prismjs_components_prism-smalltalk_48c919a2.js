(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-smalltalk.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.smalltalk = {
    'comment': {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
    },
    'char': {
        pattern: /\$./,
        greedy: true
    },
    'string': {
        pattern: /'(?:''|[^'])*'/,
        greedy: true
    },
    'symbol': /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    'block-arguments': {
        pattern: /(\[\s*):[^\[|]*\|/,
        lookbehind: true,
        inside: {
            'variable': /:[\da-z]+/i,
            'punctuation': /\|/
        }
    },
    'temporary-variables': {
        pattern: /\|[^|]+\|/,
        inside: {
            'variable': /[\da-z]+/i,
            'punctuation': /\|/
        }
    },
    'keyword': /\b(?:new|nil|self|super)\b/,
    'boolean': /\b(?:false|true)\b/,
    'number': [
        /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
        /\b\d+(?:\.\d+)?(?:e-?\d+)?/
    ],
    'operator': /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    'punctuation': /[.;:?\[\](){}]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-smalltalk_48c919a2.js.map