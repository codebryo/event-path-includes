const createFakeNode = require('./support/createFakeNode').default
const times = require('lodash/times')

const eventPathIncludes = require('../dist/index').default
const { parseSelector } = require('../dist/index')

const simpleClassMatch = '.custom'
const simpleIdMatch = '#custom'

describe('parseSelector', () => {
  test('parses a class', () => {
    expect(parseSelector(simpleClassMatch)).toEqual({ key: 'className', val: 'custom' })
  })

  test('parses a id', () => {
    expect(parseSelector(simpleIdMatch)).toEqual({ key: 'id', val: 'custom' })
  })
})

test('returns false if no path is present', () => {
  expect(eventPathIncludes({}, '')).toBe(false)
})

test('returns true if className is in the path', () => {
  const event = {
    path: [
      createFakeNode({ className: 'custom element with classes' })
    ]
  }
  expect(eventPathIncludes(event, simpleClassMatch)).toBe(true)
})
