const Pug = require('koa-pug')

module.exports = (app, name) => {
  const pug = new Pug({
    viewPath: __dirname + `/../views/${name}`
  })
  pug.use(app)
}
