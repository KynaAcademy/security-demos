const crypto = require('crypto')
const randomPass = require('./randompass')

module.exports = async (passwd) => {
  const shasum = crypto.createHash('sha1')
  const pass = await randomPass()
  passwd = passwd || pass
  shasum.update(passwd)
  return shasum.digest('hex')
}
