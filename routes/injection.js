const router = require('koa-router')()
const parseBody = require('koa-body')
const hashPass = require('../utils/hashpass')

router.get('/injection', async (ctx, next) => {
  ctx.render('injection/index', { title: 'Injection Example' })
  await next()
})

router.post('/injection', parseBody(), async (ctx, next) => {
  const { email, password } = ctx.request.body
  const passwd = await hashPass(password)

  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${passwd}'`

  let authorized = false
  let error = null

  try {
    const result = await ctx.state.psql.query(query)
    authorized = result.rowCount > 0
  } catch (err) {
    error = err.message
  }

  if (!error && !authorized) error = 'No user matches query!'

  ctx.render('injection/result', { authorized, error, query, title: 'Injection Result' })

  await next()
})

module.exports = router
