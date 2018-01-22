const rp = require('request-promise')

rp('http://icanhazip.com')
    .then(function (htmlString) {
        console.log(htmlString)
    })
    .catch(function (err) {
        console.error(err)
    })