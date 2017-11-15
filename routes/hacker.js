const router = require('koa-router')()
const parseBody = require('koa-body')

router.get('/hacker', async (ctx, next) => {
  const { jar } = ctx.query
  ctx.render('hacker/index', { jar })
  await next()
})

module.exports = router
