const Koa = require('koa')
const router = require('koa-router')()
const parseBody = require('koa-body')
const errors = require('./middleware/errors')
const pg = require('./middleware/pg')
const setupViews = require('./middleware/views')

const app = new Koa()
setupViews(app, 'injection')

router.get('/', async (ctx, next) => {
  ctx.render('index')
})

router.post('/', parseBody(), async (ctx, next) => {
  const { email, password } = ctx.request.body

  const query = `SELECT *
    FROM users
    WHERE email = '${email}'
    AND password = '${password}'`

  let authorized = false
  let error = null

  try {
    const result = await ctx.state.psql.query(query)
    authorized = result.rowCount > 0
  } catch (err) {
    error = err.message
  }

  if (!error && !authorized) error = 'No user matches query!'

  ctx.render('result', { authorized, error, query })
})

app.use(errors)

app.use(pg.connect)

app.use(router.routes())
app.use(router.allowedMethods())

app.use(pg.release)

module.exports = app
