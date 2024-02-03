const {test, expect} = require('@jest/globals')
const {normalizeURL} = require('./crawl.js')

test('returns normalized version of the URL as string', () => {
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})