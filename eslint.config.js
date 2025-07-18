import js from "@eslint/js";
import globals from "globals";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", languageOptions: { tolerant: true, }, rules: {
            "css/no-duplicate-imports": "error",
            "css/no-empty-blocks": "error",
            "css/no-invalid-at-rules": "error",
            "css/no-invalid-properties": "warn",
        },},
]);
