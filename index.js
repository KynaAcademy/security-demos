const Koa = require('koa')
const errors = require('./middleware/errors')
const pg = require('./middleware/pg')
const setupViews = require('./middleware/views')

const PORT = process.env.PORT || 5000

const app = new Koa()
setupViews(app)

const overview = require('./routes/overview')
const brokenAuth = require('./routes/broken-auth')
const sensitiveExp = require('./routes/sensitive-exposure')
const brokenAc = require('./routes/broken-ac')
const injection = require('./routes/injection')

app.use(errors)

app.use(pg.connect)

app.use(overview.routes())
app.use(brokenAuth.routes())
app.use(sensitiveExp.routes())
app.use(brokenAc.routes())
app.use(injection.routes())
app.use(overview.allowedMethods())
app.use(brokenAuth.allowedMethods())
app.use(sensitiveExp.allowedMethods())
app.use(brokenAc.allowedMethods())
app.use(injection.allowedMethods())

app.use(pg.release)

app.listen(PORT)
