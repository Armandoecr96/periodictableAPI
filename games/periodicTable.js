var express = require('express')
var router = express.Router()

var con = require('../db/database')

router.get('/elements', function (req, res) {
  //JOIN colors ON elements.color = colors.idColor
  try {
    const sql = `SELECT * FROM elements;`
    con.query(sql, function (__err, result) {
      res.send(result)
    })
  } catch ({ err }) {
    console.log(err)
  }
})
router.get('/elements/group1A', function (req, res) {
  //JOIN colors ON elements.color = colors.idColor
  try {
    const sql = `SELECT * FROM elements WHERE elements.group = 'I-A';`
    con.query(sql, function (__err, result) {
      res.send(result)
    })
  } catch ({ err }) {
    console.log(err)
  }
})

router.get('/elements/level1', function (req, res) {
  //JOIN colors ON elements.color = colors.idColor
  try {
    const sql = `SELECT * FROM elements WHERE elements.group = 'I-A' OR elements.group = 'II-A';`
    con.query(sql, function (__err, result) {
      res.send(result)
    })
  } catch ({ err }) {
    console.log(err)
  }
})

router.get('/elements/level2', function (req, res) {
  //JOIN colors ON elements.color = colors.idColor
  try {
    const sql = `SELECT * FROM elements WHERE elements.group = 'III-A' OR elements.group = 'IV-A' OR elements.group = 'V-A' OR elements.group = 'VI-A' 
    OR elements.group = 'VII-A' OR elements.group = 'VIII-A';`
    con.query(sql, function (__err, result) {
      res.send(result)
    })
  } catch ({ err }) {
    console.log(err)
  }
})

module.exports = router
