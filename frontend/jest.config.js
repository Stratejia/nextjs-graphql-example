module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['./.next/', './node_modules/', './.storybook'],
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./*',
    '!./.next/**',
    '!./.storybook/**',
    '!./coverage/**',
    '!./node_modules/**',
    '!./src/pages/_app.page.tsx',
    '!./src/types/**',
    '!./src/**/__stories__/**',
    '!./src/**/__stubs__/**',
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
