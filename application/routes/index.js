var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"[Insert your name here]" });
});

router.get('/login', function(req, res){
  res.send('respond from login get in index.js')
})

//route protectors, use these to protect post image from unauthorized users posting images
router.use('/postimage', function( req, res, next){
  if('user is logged in'){
    next();
  } else{
    res.json({status: 401, message: "Must be logged in to post image"})
  }
})

router.get('/postimage', function(req, res){
  res.send('respond from postimage get in index.js')
})

router.get('/register', function(req, res){
  res.send('respond from register get in index.js')
})



module.exports = router;
