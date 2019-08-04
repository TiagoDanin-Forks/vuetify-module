module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.js',
    '!lib/templates/**'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!vuetify)'
  ]
}
