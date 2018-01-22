const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const rp = require('request-promise')
const render = require('koa-ejs')
const serve = require('koa-static')
const time = require('./time')
const controller = require('./controllers')
const mysql = require('mysql2')

const app = new Koa()
const router = new Router()

render(app, {
  root: path.join(__dirname, 'views'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: true
});

router.get('/', controller.start)
router.get('/about', controller.about)
router.get('/time', controller.time)
router.get('/ip', controller.ip)
router.get('/images', controller.images)
router.get('/family', controller.family )

app
  .use(serve('images'))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
