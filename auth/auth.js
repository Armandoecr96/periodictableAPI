var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var con = require('../db/database')
var jwt = require('jwt-simple')

const secret = 'projectperiodictable'

/**
 * @author Armando Carvajal
 *
 */
router.post('/signup', async function (req, res) {
  try {
    const username = req.body[0].username
    const pass = req.body[0].password
    const image = req.body[0].image
    const facebookId = req.body[0].fbid
    const facebookToken = req.body[0].fbToken

    var saltV = ''
    var passEncrypted = ''
    await bcrypt.genSalt(0).then((salt) => saltV = salt)
    await bcrypt.hash(pass, saltV).then((res) => passEncrypted = res)

    var sql = `INSERT INTO user (name, password, image, facebookId, facebookToken, type) VALUES ('${username}', '${passEncrypted}', '${image}', ${facebookId}, '${facebookToken}', 'student')`

    con.query(sql, function (err, result) {
      if (err) {
        res.send('Failed')
        throw err
      } else {
        var payload = { token: passEncrypted }
        var generatedToken = jwt.encode(payload, secret, 'HS512')
        res.send(generatedToken)
      }
    })
  } catch (err) {
    console.log(err)
  }
})

router.post('/login', function (req, res) {
  try {
    const username = req.body.username
    const pass = req.body.password
    var query = `SELECT * FROM user WHERE name = '${username}';`
    con.query(query, function (_err, result) {
      bcrypt.compare(pass, result[0].password).then(function (compare) {
        if (compare !== false) {
          var payload = { token: result[0].password }
          var generatedToken = jwt.encode(payload, secret, 'HS512')
          var updateQuery = `UPDATE user SET token = '${generatedToken}' WHERE (iduser = '${result[0].iduser}');`
          con.query(updateQuery, function (err, result) {
            if (err) {
              res.send('Failed')
              throw err
            } else {
              res.send(generatedToken)
            }
          })
        } else {
          res.send('Invalid password')
        }
      })
    })
  } catch (err) {
    res.send('Invalid user')
    console.log(err)
  }
})

router.post('/loginFacebook', function (req, res) {
  try {
    const facebookId = req.body.fbid
    const facebookToken = req.body.fbToken
    var query = `SELECT * FROM user WHERE facebookId='${facebookId}' AND facebookToken='${facebookToken}'`
    con.query(query, function (_err, result) {
      console.log({ result })
      if (result.length === 1) {
        var payload = { token: result[0].password }
        var generatedToken = jwt.encode(payload, secret, 'HS512')
        var updateQuery = `UPDATE user SET token = '${generatedToken}' WHERE (iduser = '${result[0].iduser}');`
        con.query(updateQuery, function (err, result) {
          if (err) {
            res.send('Failed')
            throw err
          } else {
            res.send(generatedToken)
          }
        })
      }
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
