(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding_Projects/New Projects/Vithusan_Portfolio/node_modules/prismjs/components/prism-git.min.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s--?\w+/
        }
    },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
};
}),
]);

//# sourceMappingURL=f6652_prismjs_components_prism-git_min_435e826e.js.map