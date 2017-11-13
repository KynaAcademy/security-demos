const Koa = require('koa')
const errors = require('./middleware/errors')
const pg = require('./middleware/pg')

const app = new Koa()

app.use(errors)

app.use(pg.connect)

app.use(async (ctx, next) => {
  ctx.body = 'Hello World'
  await next()
})

app.use(pg.release)

module.exports = app
