const {crawlPage} = require('./crawl.js')

function main() {
    if(process.argv.length < 3) {
        console.log("No website provided to crawl")
        process.exit(1)
    }
    if(process.argv.length > 3 ) {
        console.log("Too many command line arguments passed. Limit it to 3")
        process.exit(1)
    }

    const baseURL = process.argv[2]
    console.log(`Starting crawl of ${baseURL}`)
    crawlPage(baseURL)
}

main()