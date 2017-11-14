const router = require('koa-router')()
const parseBody = require('koa-body')
const hashPass = require('../utils/hashpass')

router.get('/broken-auth', async (ctx, next) => {
  ctx.render('broken-auth/index', { title: 'Broken Authentication Example' })
  await next()
})

router.post('/broken-auth', parseBody(), async (ctx, next) => {
  let authorized = false
  const { email, password } = ctx.request.body

  const query = `SELECT *
    FROM users
    WHERE email = $1::text
    AND password = $2::text`

  const passwd = await hashPass(password)

  const result = await ctx.state.psql.query(query, [ email, passwd ])
  authorized = result.rowCount > 0

  ctx.render('broken-auth/result', { authorized, title: 'Authentication Result' })

  await next()
})

module.exports = router
