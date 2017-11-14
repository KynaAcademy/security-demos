const Pug = require('koa-pug')

module.exports = (app) => {
  const pug = new Pug({
    viewPath: __dirname + '/../views/'
  })
  pug.use(app)
}
