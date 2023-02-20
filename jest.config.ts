import type { Config } from 'jest';

const jestConfig: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text', 'html'],
  testMatch: ['**/test/**/*.test.ts?(x)', '**/evaluator/**/*.test.ts?(x)'],
  collectCoverageFrom: [
    '**/src/handlerElephants.ts',
    '**/src/getOpeningHours.ts'
  ],
  testTimeout: 30000,
  preset: 'ts-jest',
  testEnvironment: 'node'
};

export default jestConfig;
