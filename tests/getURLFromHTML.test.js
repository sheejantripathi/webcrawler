const {test, expect, describe} = require('@jest/globals')
const {getURLsFromHTML} = require('../crawl.js')


describe('find all <a> tags', () => {
    test('It should find all <a> tags in HTML body', () => {
        const inputHTMLString = `
        <html>
          <body>
            <a href="https://example.com">Link 1</a>
            <p>This is a paragraph.</p>
            <a href="https://example.org">Link 2</a>
            <div>
              <a href="https://example.net">Link 3</a>
            </div>
          </body>
        </html>
      `;
      const inputBaseURL = "https://example.com"
        const expected = [
            "https://example.com/",
            "https://example.org/",
            "https://example.net/"
          ];
     
        expect(getURLsFromHTML(inputHTMLString, inputBaseURL)).toEqual(expected)
     });

     test('It should return an empty array if no <a> tag is found', () => {
        const input = `
            <html>
                <body>
                <p>This is a paragraph.</p>
                <div>
                    <span>Some text</span>
                </div>
                </body>
            </html>
            `;
        const inputBaseURL = "https://example.com"
        expect(getURLsFromHTML(input, inputBaseURL)).toEqual([])
     })
})

describe('check absolute or relative URLs', () => {
    test('checking if the url returned is absolute', () => {
        const inputHTMLString = `
        <html>
          <body>
            <a href="/path1/">Link 1</a>
            <p>This is a paragraph.</p>
            <a href="https://example.com/path2/">Link 2</a>
            <div>
              <a href="/path3/">Link 3</a>
            </div>
          </body>
        </html>
      `;
      const inputBaseURL = "https://example.com"
      const expected = [
        "https://example.com/path1/",
        "https://example.com/path2/",
        "https://example.com/path3/",       
      ];
    expect(getURLsFromHTML(inputHTMLString, inputBaseURL)).toEqual(expected)
    })

    test('check the invalid url', () => {
        const inputHTMLString = `
        <html>
          <body>
            <a href="invalid">Link 1</a>
            <p>This is a paragraph.</p>
            <a href="sike">Link 2</a>
            <div>
              <a href="boots">Link 3</a>
            </div>
          </body>
        </html>
      `;
      const inputBaseURL = "https://example.com"
      const expected = [];
    expect(getURLsFromHTML(inputHTMLString, inputBaseURL)).toEqual(expected)
    })
    
})