'use strict'

module.exports = {
    getFamily,
    getFamilyMember
}

async function getFamily (ctx) {
    const [results] = await ctx.connection.execute('SELECT nom, taille, poids, age FROM koala')
    ctx.body = results
}

async function getFamilyMember (ctx) {
    const [results] = await ctx.connection.execute(`SELECT nom, taille, poids, age FROM koala WHERE nom = ?`, [ctx.params.koalaName])
    ctx.body = results
}