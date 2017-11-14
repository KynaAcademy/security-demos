const crypto = require('crypto')
const randomPass = require('./randompass')

module.exports = async () => {
  const shasum = crypto.createHash('sha1')
  const pass = await randomPass()
  shasum.update(pass)
  return shasum.digest('hex')
}
