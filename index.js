'use strict'

const Koa = require('koa')
const dotenv = require('dotenv').config()
const path = require('path')
const Router = require('koa-router')
const rp = require('request-promise')
const render = require('koa-ejs')
const serve = require('koa-static')
const controller = require('./controllers')
const mysql = require('mysql2/promise')

function connection() {
  return mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  })
}

async function startServer() {
  const app = new Koa()
  const router = new Router()
  
  app.context.connection = await connection()
  
  render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true
  })
  
  router.get('/', controller.start)
  router.get('/about', controller.about)
  router.get('/time', controller.time)
  router.get('/ip', controller.ip)
  router.get('/images', controller.images)
  router.get('/family', controller.family.getFamily)
  router.get('/family/:koalaName', controller.family.getFamilyMember)
  
  app 
    .use(serve('images'))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
}

startServer()