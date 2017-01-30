var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var db = mongoose.connection;
var passport = require('passport');

var User = require('./../models/User.js');
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
  var user = req.user;

   Member.find().then(function(data){
    var memberList = data;
    res.render('admin', { user, memberList });
  })
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

router.post('/register', function(req, res){
  var path = req.body.pathName;
  var newUser = new User({ username: req.body.username, password: req.body.password });
  console.log('New User', newUser);
  newUser.save(function(err, doc) {
    if(err) {
      console.log('save error', err);
    } else {
      console.log('saved', doc)
      req.login(newUser, function(err) {
        if (err) {
          console.log('login error', err);
        }
        return res.redirect('/admin');
      });
    }
  });
})

//PASSPORT LOG IN / LOG OUT
router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/admin' }),
  function(req, res) {
    // var path = req.body.pathName;
    res.redirect('/admin');
})

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });


module.exports = router;