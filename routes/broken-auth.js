const router = require('koa-router')()
const parseBody = require('koa-body')

router.get('/broken-auth', async (ctx, next) => {
  const results = await ctx.state.psql.query({
    rowMode: 'array',
    text: 'SELECT id, email FROM users'
  })
  const users = results.rows.map(u => ({ id: u[0], email: u[1] }))
  ctx.render('broken-auth/index', { users })
})

router.get('/broken-auth/:id', parseBody(), async (ctx, next) => {
  const { id } = ctx.params

  const query = `SELECT *
    FROM users
    WHERE id = '${id}'
    LIMIT 1`

  const results = await ctx.state.psql.query({
    rowMode: 'array',
    text: query
  })

  const user = results.rows.map(u => ({ id: u[0], email: u[1], password: u[2] }))[0]

  if (!user) return ctx.render('not-found', { message: `User with id: ${id} not found!`})

  console.log(user)

  ctx.render('broken-auth/user', { user })
})

module.exports = router
