const url = require('url')

const address = 'https://www.google.com/search?q=hello'
const parsedAddress = url.parse(address, true)

console.log(parsedAddress.host) // www.google.com
console.log(parsedAddress.pathname) // /search
console.log(parsedAddress.search) // ?q=hello
console.log(parsedAddress.query) // { q: 'hello' }
const queryData = parsedAddress.query
console.log(queryData.q) // hello
