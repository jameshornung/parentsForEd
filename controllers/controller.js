var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var db = mongoose.connection;

var Member = require('./../models/Member.js');



// ROUTES====================================================
router.get('/', function(req, res, body){
	res.render('index');
})

router.get('/benefits', function(req, res, body){
  res.render('benefits');
})

router.get('/tech', function(req, res, body){
  res.render('tech');
})

router.get('/involvement', function(req, res, body){
  res.render('involvement');
})

router.get('/admin', function(req, res, body){
  res.render('admin');
})

router.post('/members', function(req, res, body){
	console.log(req.body);
	var newMember = new Member({firstname: req.body.firstName, lastname: req.body.lastName, email: req.body.address});
	newMember.save(function(err, doc) {
    if(err) {
      console.log('save error', err);
    } else {
      console.log('saved', doc)
      return res.redirect('/');
      };
  });
});


module.exports = router;