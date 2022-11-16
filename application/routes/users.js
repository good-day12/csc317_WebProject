var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/register', function (req, res, next){
  if ('is valid data'){
    next();
  }else{
    res.send('invalid user info');
  }
})

router.use('/register', function (req, res, next){
  if ('username does not exist'){
    next();
  }else{
    res.send('username exists already');
  }
})

router.use('/register', function (req, res, next){
  if ('email does not exist'){
    next();
  }else{
    res.send('email exists');
  }
})

//
// function validateDAta (req, res, next){
//   if ('is valid data'){
//     next();
//   }else{
//     res.send('invalid user info');
//   }
// }
//
// function usernameUniqueness (req, res, next){
//   if ('username does not exist'){
//     next();
//   }else{
//     res.send('username exists already');
//   }
// }
//
// function emailUniqueness (req, res, next){
//   if ('email does not exist'){
//     next();
//   }else{
//     res.send('email exists');
//   }
// }
//
// router.post('/register',
//                   validateDAta,
//                   usernameUniqueness,
//                   emailUniqueness,
//     function (req, res){
//       res.json({status: 201, message: 'user has been made'});
//     })

//data should be validated and sanitized, "clean data"
router.post('/register', function (req, res){
  res.json({status: 201, message: 'user has been made'});
})

module.exports = router;
