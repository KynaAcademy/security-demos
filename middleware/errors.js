module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.error(error)
    ctx.throw(500, error)
  }
}
