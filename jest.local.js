module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './html-report',
      filename: 'report.html',
      openReport: true,
    }],
  ],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/*.spec.*'],
  testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['jest-allure/dist/setup'],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
