module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['./.next/', './node_modules/', './.storybook'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!./*',
    '!./.next/**',
    '!./.storybook/**',
    '!./coverage/**',
    '!./node_modules/**',
    '!./pages/_app.page.tsx',
    '!./types/**',
    '!./**/__stories__/**',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
};
