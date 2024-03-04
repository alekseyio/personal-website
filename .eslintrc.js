/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js', '*.config.mjs', 'tailwind.config.ts'],
};

module.exports = config;
