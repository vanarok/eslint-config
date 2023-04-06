/* eslint-env node */

module.exports = {
  extends: [
    "./typescript",
    "./vue3",
    "@vue/eslint-config-typescript/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "vue/define-emits-declaration": ["error"],
    "vue/define-props-declaration": ["error"],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
  },
};
