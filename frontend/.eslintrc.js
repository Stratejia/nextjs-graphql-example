module.exports = {
  plugins: ['react'],
  extends: [
    '../.eslintrc.base',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
