/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub"
  }
};