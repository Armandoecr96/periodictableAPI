var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes

/**
 * @author Armando Carvajal
 * @description Access to authentication functions
 */
app.use(require('./auth/auth'))

/**
 * @description Access to games funtions, leaderboards and dictionaries
 */
app.use(require('./games/games'))
app.use(require('./games/leaderboards'))
app.use(require('./games/periodicTable'))

/**
 * @description Access to profile functions
 */
app.use(require('./auth/profile'))

app.listen(3000, function () {
  console.log('... listening on port 3000!')
})
