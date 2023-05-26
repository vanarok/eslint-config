/* eslint-env node */

module.exports = {
  extends: ["./javascript", "xo-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-unused-vars": "off",
  },
};
