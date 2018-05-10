const request = require('request-promise-native')

let res

module.exports = async () => {
  res = res || await request.get('https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-100.txt')

  const passwords = res.split('\n')

  return passwords[Math.round(Math.random() * passwords.length)]
}
