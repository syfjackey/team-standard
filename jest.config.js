// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost/',
  testEnvironment: 'jest-environment-jsdom-fifteen',
  transform: {
    '^.+\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.svg$': '<rootDir>/node_modules/jest-transform-stub',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transformIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
