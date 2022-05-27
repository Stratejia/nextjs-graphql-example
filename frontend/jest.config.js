module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', './.storybook'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!./node_modules/**', '!./.next/**', '!./.storybook/**'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
};
