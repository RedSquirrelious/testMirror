'use strict';
var express = require('express');
var router = express.Router();
let file = require('./../../../constants')

let someValue = file ? file : 'meh'

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'testMirror', signal: someValue});
});

module.exports = router;
