module.exports = {
  plugins: ['react'],
  extends: ['../.eslintrc.base', 'next/core-web-vitals', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['**/__stories__/**'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/immutable-data': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
