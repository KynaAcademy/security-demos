const request = require('request-promise-native')

let res

module.exports = async () => {
  if (!res) {
    res = await request.get('https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/10_million_password_list_top_100.txt')
  }
  const passwords = res.split('\n')

  return passwords[Math.round(Math.random() * passwords.length)]
}
