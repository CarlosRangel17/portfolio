const { pathsToModuleNameMapper } = require('ts-jest/utils')
const {
  compilerOptions: { paths }
} = require('./tsconfig')

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/cypress/**',
    '!**/consts/**',
    '!**/images/**',
    '!**/svg/**',
    '!**/pages/**',
    '!**/interfaces/**',
    '!src/react-app-env.d.ts',
    '!src/variables.scss.d.ts',
    '!src/layout/**',
    '!src/polyfills.js',
    '!src/utils/logger.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>testSetup/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(css|scss)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$', '/cypress/'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src', '<rootDir>'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths),
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@*/(.*)': './src/^$1'
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75
    }
  }
}
