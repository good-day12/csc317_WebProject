var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Andre Flores" });
});

// router.get("/login", function(req, res){
//   res.render('login', {css:["style.css"]});
// });
router.get("/login", function(req, res){
  res.render('login');
});

router.get("/register", function(req, res){
  res.render('registration', {js:["validation.js"]});
});

router.get("/postimage", function(req, res){
  res.render('postimage')
});

router.get("/posts/:id", function(req, res){
  res.render('viewposts')
});

module.exports = router;
