(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-apl.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.apl = {
    comment: /(?:⍝|#[! ]).*$/m,
    string: {
        pattern: /'(?:[^'\r\n]|'')*'/,
        greedy: !0
    },
    number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    "system-function": {
        pattern: /⎕[A-Z]+/i,
        alias: "function"
    },
    constant: /[⍬⌾#⎕⍞]/,
    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
    "monadic-operator": {
        pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
        alias: "operator"
    },
    "dyadic-operator": {
        pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
        alias: "operator"
    },
    assignment: {
        pattern: /←/,
        alias: "keyword"
    },
    punctuation: /[\[;\]()◇⋄]/,
    dfn: {
        pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
        alias: "builtin"
    }
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-apl_min_55157728.js.map