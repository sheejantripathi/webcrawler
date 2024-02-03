const {test, expect} = require('@jest/globals')
const {normalizeURL} = require('../crawl.js')

test('normalize URL strip the protocols', () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalize URL trim trailing slashes', () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalize URL remove capitals', () => {
    const input = 'https://BLOG.boot.dev/path/';
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalize URL remove http', () => {
    const input = 'http://blog.boot.dev/path/';
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})