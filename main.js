const {crawlPage} = require('./crawl.js')

async function main() {
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
    const pages = await crawlPage(baseURL, baseURL, {})
    for (const page of Object.entries(pages)) {
        console.log(page)
    }
}

main()