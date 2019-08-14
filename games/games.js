var express = require('express')
var router = express.Router()

var con = require('../db/database')

router.post('/saveGame', function (req, res) {
  try {
    let query = ``
    con.query(query, function (__err, result) {
      console.log({ result })
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
