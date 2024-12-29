/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/*
https://typescript-eslint.io/
*/

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    // 变量不能定义了但是不实用
    "@typescript-eslint/no-unused-vars": "off",
    // 多单词组件名
    "vue/multi-word-component-names": "off"
  }
};
