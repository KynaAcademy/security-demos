const pg = require('./pg')
const logger = require('../utils/logger');

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    await pg.release(ctx)
    logger.error(error)
    ctx.throw(500, error)
  }
}
