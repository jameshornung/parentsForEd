var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var db = mongoose.connection;



// ROUTES====================================================
router.get('/', function(req, res, body){
	res.render('index');
})



module.exports = router;