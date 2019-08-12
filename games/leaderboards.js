var express = require('express')
var router = express.Router()
var con = require('../db/database')
var jwt = require('jwt-simple');

router.get('/friendsLeaderbaord', function (req, res) {
    try {
        let facebookId = req.body[0].fbid
        let facebookToken = req.body[0].fbToken
    } catch (err) {
        console.log(err)
    }
})

router.get('/worldLeaderbard', function (req, res) {
    try {
        var query = `SELECT * FROM puntuation JOIN user;`
        con.query(query, function (err, result) {
            res.send(result)
        });
    } catch (err) {
        console.log(err)
    }
})

module.exports = router