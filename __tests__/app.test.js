// some.test.js
require = require('esm')(module)
require('@babel/register')
const { someFunc } = require('../app.js')

test('some test', () => {
  expect(true).toBe(true)
})
