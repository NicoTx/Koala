'use strict'

async function getKoala(ctx) {
    const mysql = require('mysql2/promise')
    
    const [results] = await connection.execute(`SELECT * FROM 'koala' where nom =${kName}`)
    ctx.body = results
}

module.exports = getFamily 