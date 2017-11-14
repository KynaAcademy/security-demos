const router = require('koa-router')()
const parseBody = require('koa-body')
const hashPass = require('../utils/hashpass')

router.get('/unsafe-xss', async (ctx, next) => {
  const { flash } = ctx.query
  console.log(flash)
  ctx.render('unsafe-xss/index', { flash })
  await next()
})

module.exports = router
