async function getFamily(ctx) {
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection({host:'localhost', 
                                                     user:'root',
                                                     password:'root',
                                                     database:'dbKoala'});
    const [results] = await connection.execute('SELECT * FROM `koala`')
    console.log(results)
    ctx.body = results
}

module.exports = getFamily