module.exports = {
  preset: 'ts-jest',
  projects: [
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/__tests__/jsdom/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/__mocks__/obsidian.ts'],
      moduleNameMapper: {
        '^obsidian$': '<rootDir>/__mocks__/obsidian.ts',
      },
    },
    {
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/node/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/__mocks__/obsidian.ts'],
      moduleNameMapper: {
        '^obsidian$': '<rootDir>/__mocks__/obsidian.ts',
      },
    },
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
