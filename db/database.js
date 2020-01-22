var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'pt-fiq',
  insecureAuth: true
})

con.connect(function (err) {
  console.log('[mysql error]', err)
})

module.exports = con
