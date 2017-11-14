const router = require('koa-router')()
const parseBody = require('koa-body')
const hashPass = require('../utils/hashpass')

router.get('/broken-ac', async (ctx, next) => {
  const { flash } = ctx.query
  ctx.render('broken-ac/index', { flash, title: 'Broken Access Controll' })
  await next()
})

router.post('/broken-ac', parseBody(), async (ctx, next) => {
  let authorized = false
  const { email, password } = ctx.request.body

  const query = `SELECT users.id AS user_id, accounts.id AS account_id
    FROM users
    INNER JOIN accounts ON accounts.user_id = users.id
    WHERE email = $1::text
    AND password = $2::text
    LIMIT 1`

  const passwd = await hashPass(password)

  const result = await ctx.state.psql.query({
    rowMode: 'array',
    text: query,
    values: [ email, passwd ]
  })
  authorized = result.rowCount > 0

  if (authorized) {
    const user = result.rows.map(u => ({ id: u[0], accountId: u[1] }))[0]
    ctx.redirect(`accounts/${user.accountId}`)
  } else {
    ctx.redirect('/broken-ac?flash=Username%20or%20password%20incorrect')
  }

  await next()
})

router.get('/accounts/:id', parseBody(), async (ctx, next) => {
  const { id } = ctx.params

  const query = `SELECT *
    FROM accounts
    WHERE id = $1::integer
    LIMIT 1`

  const results = await ctx.state.psql.query({
    rowMode: 'array',
    values: [id],
    text: query
  })

  const account = results.rows.map(u => ({ id: u[0], userId: u[1], name: u[2], homeAddress: u[3] }))[0]

  if (!account) return ctx.render('not-found', { message: `Account with id: ${id} not found!`, title: '404 Not Found' })

  ctx.render('broken-ac/account', { account, title: account.name })
  await next()
})

module.exports = router
