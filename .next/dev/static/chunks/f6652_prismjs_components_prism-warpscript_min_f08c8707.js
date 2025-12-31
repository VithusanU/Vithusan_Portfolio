(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-warpscript.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.warpscript = {
    comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
        greedy: !0
    },
    variable: /\$\S+/,
    macro: {
        pattern: /@\S+/,
        alias: "property"
    },
    keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
    number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
    boolean: /\b(?:F|T|false|true)\b/,
    punctuation: /<%|%>|[{}[\]()]/,
    operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-warpscript_min_f08c8707.js.map