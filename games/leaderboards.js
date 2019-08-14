var express = require('express')
var router = express.Router()
var con = require('../db/database')

router.get('/friendsLeaderbaord', function (req, res) {
  try {

  } catch (err) {
    console.log(err)
  }
})

router.get('/worldLeaderbard', function (req, res) {
  try {
    const query = `SELECT puntutation, profile.name FROM (puntuation JOIN games ON games.idgames = puntuation.games_idgames) JOIN (user JOIN profile ON user.iduser = profile.iduser) WHERE games.idgames = 1 ORDER BY puntutation DESC;`
    con.query(query, function (__err, result) {
      console.log({ result })
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
