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
    const username = req.body.username
    const pass = req.body.password
    const name = req.body.name

    var saltV = ''
    var passEncrypted = ''
    await bcrypt.genSalt(0).then((salt) => saltV = salt)
    await bcrypt.hash(pass, saltV).then((res) => passEncrypted = res)

    var sql = `INSERT INTO user (name, password, type) VALUES ('${username}', '${passEncrypted}', 'student')`

    con.query(sql, function (err, result) {
      if (err) {
        res.send('Failed')
      } else {
        var payload = { token: passEncrypted }
        var generatedToken = jwt.encode(payload, secret, 'HS512')
        const generateName = name.split(' ')
        var query = `INSERT INTO profile (iduser, name, lastName) VALUES ('${result.insertId}', '${generateName[0]})', '${generateName[1]}')`
        con.query(query, function (__err, result) {
          if (!__err) {
            console.log({ __err })
            res.send(generatedToken)
          } else {
            res.send('Signup fail')
          }
        })
      }
    })
  } catch (err) {
    console.log(err)
    res.send('Signup fail')
  }
})

router.post('/sigupWithFacebook', function (req, res) {
  try {
    const name = req.body.name
    const facebookId = req.body.fbid
    const facebookToken = req.body.fbToken

    var sql = `INSERT INTO user (name, password, facebookId, facebookToken, type) VALUES ('${name}', '${facebookId}', '${facebookId}', '${facebookToken}', 'student')`
    con.query(sql, function (err, result) {
      if (err) {
        console.log({ err })
        res.send('Failed')
      } else {
        var payload = { token: facebookToken }
        var generatedToken = jwt.encode(payload, secret, 'HS512')
        var query = `INSERT INTO profile (iduser) VALUES ('${result.insertId}')`
        con.query(query, function (__err, result) {
          if (!__err) {
            console.log({ __err })
            res.send(generatedToken)
          } else {
            res.send('Signup fail')
          }
        })
      }
    })
  } catch (err) {
    res.send(err)
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
      if (result.length === 1) {
        var payload = { token: result[0].password }
        var generatedToken = jwt.encode(payload, secret, 'HS512')
        var updateQuery = `UPDATE user SET token = '${generatedToken}' WHERE (iduser = '${result[0].iduser}');`
        con.query(updateQuery, function (err, result) {
          if (err) {
            res.send('Failed')
          } else {
            res.send(generatedToken)
          }
        })
      } else {
        res.send('NoRegister')
      }
    })
  } catch (err) {
    res.send('Fail')
    console.log(err)
  }
})

module.exports = router
