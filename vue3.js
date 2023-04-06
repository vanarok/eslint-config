/* eslint-env node */

module.exports = {
  plugins: ["vue"],
  extends: [
    "./javascript",
    "plugin:vue/vue3-recommended",
    "@unocss",
    "prettier",
  ],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/define-macros-order": ["error"],
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/no-unsupported-features": [
      "error",
      {
        version: "^3.2.0",
        ignores: [],
      },
    ],
    "vue/component-name-in-template-casing": ["error"],
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "js",
        },
      },
    ],
    "vue/component-api-style": ["error", ["script-setup"]],
    "vue/no-ref-object-destructure": ["error"],
    "vue/no-static-inline-styles": ["error"],
    "vue/require-expose": ["error"],
    "vue/prefer-true-attribute-shorthand": ["error"],
    "vue/no-template-target-blank": ["error"],
    "vue/no-multiple-objects-in-class": ["error"],
    "vue/html-button-has-type": ["error"],
    "vue/no-boolean-default": ["error", "default-false"],
  },
};
