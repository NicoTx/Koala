async function getFamily(ctx) {
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection({host: process.env.DB_HOST, 
                                                     user: process.env.DB_USER,
                                                     password: process.env.DB_PASS,
                                                     database: process.env.DB_NAME});
    const [results] = await connection.execute('SELECT * FROM `koala`')
    console.log(results)
    ctx.body = results
}

module.exports = getFamily