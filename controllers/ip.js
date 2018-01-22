const rp = require('request-promise')

async function getIP (ctx) {
    try {
        const htmlString = await rp('http://icanhazip.com')
        ctx.body = htmlString
    } catch (e) {
        console.error(e)
    }
}

module.exports = getIP