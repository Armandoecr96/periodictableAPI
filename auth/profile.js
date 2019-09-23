var express = require('express')
var router = express.Router()

var con = require('../db/database')

router.get('/profile', function (req, res) {
  const token = req.headers.authorization
  var query = `SELECT * FROM (user JOIN profile) JOIN puntuation WHERE token='${token}';`
  con.query(query, function (err, result) {
    if (err) {
      res.send('Failed')
      throw err
    } else {
      res.send(result[0])
    }
  })
})

router.put('/editProfile', function (req, res) {
  const token = req.body[0].token
  var query = `UPDATE profile SET WHERE token= '${token}'`
  con.query(query, function (err, result) {
    if (err) {
      res.send('')
    }
  })
})

module.exports = router
