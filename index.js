const injection = require('./injection')
const PORT = process.env.PORT || 5000

const run = async (command, opts) => {
  if (command === 'injection') {
    console.log('Starting app "injection"...')
    return injection.listen(PORT)
  }
}

const args = process.argv.slice(2)
const cmd = args.shift() || ''

run(cmd, args)
