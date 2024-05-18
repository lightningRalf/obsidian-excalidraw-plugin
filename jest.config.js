module.exports = {
  preset: 'ts-jest',
  projects: [
    {
      displayName: 'jsdom',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/__tests__/jsdom/*.test.ts'],
      setupFilesAfterEnv: ['<rootDir>/__mocks__/obsidian.ts'],
      moduleNameMapper: {
        '^obsidian$': '<rootDir>/__mocks__/obsidian.ts',
      },
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
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
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
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
