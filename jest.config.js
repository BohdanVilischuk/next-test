const {defaults: tsjPreset} = require('ts-jest/presets');
module.exports = {
  ...tsjPreset,
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1" 
  },
}
