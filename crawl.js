const jsdom = require('jsdom');
const {JSDOM} = jsdom

function normalizeURL(urlString) {
    const urlObj = new URL(urlString);
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length > 0 && hostPath.slice(-1) === "/") {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

function getURLsFromHTML(htmlInputString, rootURL) {
    const urls = []
    const dom = new JSDOM(htmlInputString)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const element of linkElements) {
        if(element.href.slice(0,1) === '/') {
            //relative
            try {
                const urlObject = new URL(`${rootURL}${element.href}`)
                urls.push(urlObject.href)
            } catch (error) {
                console.log(`Error with relative URl: ${error.message}`)
            }
        }
        else {
            //absolute
            try {
                const urlObject = new URL(element.href)
                urls.push(urlObject.href)
            } catch (error) {
                console.log(`Error with absolute URl: ${error.message}`)
            }
        }
    }
    return urls
}

module.exports = {
    normalizeURL, getURLsFromHTML
}