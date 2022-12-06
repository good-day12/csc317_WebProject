const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const db = require('../conf/database');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // image/jpeg
        let fileExt = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExt}`)
    }
})

const upload = multer({ storage: storage })

//upload.single("uploadImage"),
//can add midware function to check if user is logged in
router.post("/create", upload.single("uploadImage"), function(req,res,next){
    res.send();
    let uploadedFile = req.file.path;//if multer works, will have file object that contains path directory
     let thumbnailName = `thumbnail-${req.file.filename}`
     let destinationOfThumbnail = `${req.file.destination}/${thumbnailName}`
     const {title, description} = req.body;
     const userID = req.session.userId; //can add if statement to check if logged in
     sharp(uploadedFile)
     .resize(200)
     .toFile(destinationOfThumbnail)
     .then(function(){
       let baseSQL = `
       INSERT INTO  posts( title, description, image, thumbnail, fk_authorId) VALUE ( ?, ?, ?, ?, ?)
       `
     //need to return something to continue the promise chain
       return db.query(baseSQL, [title, description, uploadedFile, destinationOfThumbnail, userID])
     })
     .then(function([results,fields]){
       if(results && results.affectedRows){
           req.flash("success", "Your post has been created!");
           req.session.save(function(saveErr){ //ensure session data is saved before redirect, redirect is faster than save
               res.redirect('/');
           })
           res.redirect('/');
       }
     })
     .catch(err => next(err));
})


// app.post("/users/register", function(req,res){
//  const {username, email, password} = req.body
//     promisePool
//     .execute('insert into users (usernmae, email, password) value (?,?,?);',[username, email,password])
//     .then(function([results, fields]){
//        console.log(results);
//     });
//  })

//if we can't find anything, don't show nothing, tell them there were no results and show recent posts again
//TODO: add searchTerm to searchBar afterwards
router.get("/search", function (req, res, next){
    let searchTerm = `%${req.query.searchTerm}%`
    let originalSearchTerm = req.query.searchTerm;
    let baseSQL = `
            select id, title, description, thumbnail, concat_ws(" ", title, description) as haystack
            FROM posts
            HAVING haystack like ?;
            `
    db.execute(baseSQL, [searchTerm])
        .then(function([results, fields]){
            //error checking here
            res.locals.results = results;
            res.locals.searchValue = originalSearchTerm;
            //can do an info category
            req.flash("success", `${results.lengt} results found`);
            req.session.save(function(saveErr){
                res.render('index');
            })
        })
})

module.exports = router;