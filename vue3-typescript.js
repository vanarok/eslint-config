/* eslint-env node */

module.exports = {
  extends: [
    "./vue3",
    "./typescript",
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
    "no-unused-vars": "off",
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
