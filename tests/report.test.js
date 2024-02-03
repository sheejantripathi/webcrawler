const {test, expect} = require('@jest/globals')
const {sortPages} = require('../report.js')

test('sortpages 2 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortpages 5 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3,
        'https://wagslane.dev/path1': 7,
        'https://wagslane.dev/path2': 2,
        'https://wagslane.dev/path3': 5
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev/path1', 7],
        ['https://wagslane.dev/path3', 5],
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path2', 2],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})
