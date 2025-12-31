(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-j.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.j = {
    comment: {
        pattern: /\bNB\..*/,
        greedy: !0
    },
    string: {
        pattern: /'(?:''|[^'\r\n])*'/,
        greedy: !0
    },
    keyword: /\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
    verb: {
        pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
        alias: "keyword"
    },
    number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
    adverb: {
        pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
        alias: "builtin"
    },
    operator: /[=a][.:]|_\./,
    conjunction: {
        pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
        alias: "variable"
    },
    punctuation: /[()]/
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-j_min_aff4d682.js.map