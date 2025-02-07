import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: 
    { globals: {...globals.browser, ...globals.node} },
    rules: {
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": "const", "next": "let" },
        { "blankLine": "always", "prev": "let", "next": "const" },
      ],
      "newline-before-return": "error",
      "newline-after-var": "error",
    },
  },
  pluginJs.configs.recommended,
];