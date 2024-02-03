function normalizeURL() {
    return new URL({ toString: () => 'blog.boot.dev/path' });
}

module.exports = {
    normalizeURL
}