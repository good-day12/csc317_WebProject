var express = require('express');
var router = express.Router();
const db = require('../conf/database');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//METHOD : POST
//localhost:3000/users/register
router.post("/register", function(req, res, next){
  const {username, email, password} = req.body;
  //serverside validation
  //check for duplicates
  db.query('select id from users where username =?',
      [username])
      .then(function([results, fields]){
        if(results && results.length === 0){
          //res.send('username does not exits');
          return db.query('select id from users where email =?',
              [email])
        }else{
          throw new Error('username already exists');
        }
      }).then(function([results, fields]){
        if(results && results.length === 0){
          //res.send('username does not exits');
          return db.query('insert into users (username,email,password) value (?,?,?)',
              [username, email, password])
        }else{
          throw new Error('email already exists');
        }
      }).then(function([results, fields]){
        if(results && results.affectedRows === 1){
          res.redirect('/login'); //if we succeed go to login page
        }else{
          throw new Error('user could not be made');
        }

      }).catch(function(err){
        res.redirect('/register'); //if we fail go back to register page
        next(err);
  })
  //insert into db
  //respond
})

//locoalhost:3000/users/login
router.post("/login", function(req, res, next){
  const {username, password} = req.body;

  db.query('select id, username, email from users where username =? AND password = ?',
      [username, password])
      .then(function([results,fields]){

        if(results && results.length ===1){
          res.redirect('/');
        }else{
          throw new Error('Invalid user credentials');
        }
      }).catch(function(err){
        next(err);
  })
})

router.delete('/login')

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
