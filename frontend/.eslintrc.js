module.exports = {
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
  rules: {
    // TODO: Move the following to .eslintrc.base.js
    'import/no-relative-parent-imports': ['warn'],
    'no-restricted-imports': [
      'warn',
      {
        patterns: ['.*'],
      },
    ],
  },
};
