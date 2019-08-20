var express = require('express')
var router = express.Router()

var con = require('../db/database')

router.post('/saveGame', function (req, res) {
  try {
    const game = req.body.game
    const user = req.body.user
    const puntutation = req.body.puntutation
    const time = req.body.time

    var query = `INSERT INTO games (games_idgames, user_iduser, puntutation, time) VALUES ('${game}', '${user}', '${puntutation}','${time}')`
    con.query(query, function (__err, result) {
      if (__err !== null) {
        res.send('Succefully')
      } else {
        res.send('Error')
      }
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/viewGames', function (req, res) {
  try {
    const id = req.body.id
    var query = `SELECT user.iduser, user.name, games_idgames, puntutation, time FROM (profile JOIN user ON profile.iduser = ${id}) JOIN puntuation ON puntuation.user_iduser = ${id}`
    con.query(query, function (__err, result) {
      if (__err !== null) {
        res.send(result)
      } else {
        res.send('Error')
      }
    })
  } catch ({ error }) {
    res.send(error)
  }
})

module.exports = router
