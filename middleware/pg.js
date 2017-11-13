const { Pool } = require('pg')

const DATABASE_URL = process.env.DATABASE_URL ||
  'postgresql://localhost:5432/security-demos'

const pg = new Pool({ connectionString: DATABASE_URL })

module.exports.connect = async (ctx, next) => {
  ctx.state.psql = await pg.connect()
  console.log('Connected to pg')
  await next()
}

module.exports.release = async (ctx, next) => {
  ctx.state.psql && ctx.state.psql.release()
  console.log('Released pg connection')
  await next()
}
