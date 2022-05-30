module.exports = {
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    // TODO: Move the above to .eslint.rc.base
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'array-element-newline': ['error', { minItems: 3 }],
    'no-restricted-imports': ['warn', { patterns: ['.*'] }],
    'import/order': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
