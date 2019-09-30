var express = require('express')
var router = express.Router()

var con = require('../db/database')

router.get('/elements', function (req, res) {
  try {
    const sql = `SELECT * FROM elements JOIN colors ON elements.color = colors.idColor;`
    con.query(sql, function (__err, result) {
      res.send(result)
    })
  } catch ({ err }) {
    console.log(err)
  }
})

module.exports = router
