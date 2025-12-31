(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-monkey.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.monkey = {
    comment: {
        pattern: /^#Rem\s[\s\S]*?^#End|'.+/im,
        greedy: !0
    },
    string: {
        pattern: /"[^"\r\n]*"/,
        greedy: !0
    },
    preprocessor: {
        pattern: /(^[ \t]*)#.+/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    },
    function: /\b\w+(?=\()/,
    "type-char": {
        pattern: /\b[?%#$]/,
        alias: "class-name"
    },
    number: {
        pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
        lookbehind: !0
    },
    keyword: /\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,
    operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
    punctuation: /[.,:;()\[\]]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-monkey_min_0d873993.js.map