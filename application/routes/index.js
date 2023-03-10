var express = require('express');
var router = express.Router();
const {isLoggedIn} = require('../middleware/protecters')
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts');

/* GET home page. */
router.get('/', getRecentPosts ,function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Andre Flores" });
});

// router.get('/',function(req, res, next) {
//   res.render('index', { title: 'CSC 317 App', name:"Andre Flores" });
// });

router.get('/login', function(req, res){
  //res.send('respond from login get in index.js')
  res.render('login');
})

//route protectors, use these to protect post image from unauthorized users posting images
router.use('/postimage', function( req, res, next){
  if('user is logged in'){
    next();
  } else{
    res.json({status: 401, message: "Must be logged in to post image"})
  }
})

//was postimage
router.get('/postimage', isLoggedIn, function(req, res){
  //res.send('respond from postimage get in index.js')
  res.render('postimage');
})

router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostById , function(req, res) {
  res.render('viewpost', {js:["viewpost.js"]});
})

//METHOD: GET
//localhost:3000/register
router.get('/register', function(req, res){
  //res.send('respond from register get in index.js')
  res.render('registration', {js: ["validation.js"]});
})



module.exports = router;
