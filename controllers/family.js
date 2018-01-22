async function getFamily(ctx) {
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection({host:DB_HOST, 
                                                     user:DB_USER,
                                                     password:DB_PASS,
                                                     database:DB_NAME});
    const [results] = await connection.execute('SELECT * FROM `koala`')
    console.log(results)
    ctx.body = results
}

module.exports = getFamily