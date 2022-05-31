module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['functional', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'no-restricted-imports': ['warn', { patterns: ['.*'] }],
    'import/order': 'warn',
    'functional/no-class': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statement': 'off',
    'functional/functional-parameters': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/immutable-data': 'off',
      }
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        'functional/no-expression-statement': 'off',
      }
    }
  ]
};
