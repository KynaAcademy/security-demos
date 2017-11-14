const pg = require('./pg')

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    await pg.release(ctx)
    console.error(error)
    ctx.throw(500, error)
  }
}
