const { Pool } = require('pg')
const logger = require("../utils/logger");

const DATABASE_URL = process.env.DATABASE_URL ||
  'postgresql://localhost:5432/security-demos'

const cloudsql_pool = () => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";
  return new Pool({
    user: process.env.DB_USER, // e.g. 'my-user'
    password: process.env.DB_PASS, // e.g. 'my-user-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    host: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
  });
}

const pg = process.env.CLOUD_SQL_CONNECTION_NAME ? cloudsql_pool() : new Pool({ connectionString: DATABASE_URL, debug: true });

module.exports.pg = pg

module.exports.connect = async (ctx, next) => {
  try {
    ctx.state.psql = await pg.connect()
    logger.info('Connected to pg')
  } catch (err) {
    logger.error(err)
    await next(err)
  }
  await next()
}

module.exports.release = async (ctx, next) => {
  ctx.state.psql && ctx.state.psql.release()
  logger.info('Released pg connection')
  next && await next()
}
