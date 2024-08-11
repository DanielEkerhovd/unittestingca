import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  // Base Configuration
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      jest: pluginJest,
    },
    linterOptions: {
      // Ensures ESLint only targets JS files
      files: ["**/*.js"],
    },
    ...pluginJs.configs.recommended,
  },

  // Overrides for test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
    ...pluginJest.configs.recommended,
  },
];
