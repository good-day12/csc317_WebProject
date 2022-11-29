const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const db = require('../conf/database');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/images/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // image/jpeg
        let fileExt = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExt}`)
    }
})

const upload = multer({ storage: storage })

//can add midware function to check if user is logged in
router.post("/create", upload.singe("uploadImage"), function(req,res,next){
    console.log(req);
    res.send();
    /*let uploadedFile = req.file.path;
    * let thumbnailName = `thumbnail-${req.file.filename}`
    * let destinationOfThumbnail = `${req.file.destination}/${thumbnailName}`
    * const {title, description} = req.body;
    * const userID = req.session.userId; //can add if statement to check if logged in
    * sharp(uploadedFile)
    * .resize(200)
    * .toFile(destinationOfThumbnail)
    * .then(function(){
    *   let baseSQL = `
    *   INSERT INTO  posts( title, description, image, thumbnail, fk_authorId) VALUE ( ?, ?, ?, ?, ?)
    *   `
    * //need to return something to continue the promise chain
    *   return db.query(baseSQL, [title, description, uploadedFile, destinationOfThumbnail, userID])
    * })
    * .then(function([results,fields]){
    *   if(results && results.affectedRows){
    *       req.flash("success", "Your post has been created!");
    *       req.session.save(function(saveErr){
    *           res.redirect('/');
    *       })
    *   }
    * })
    * .catch(err => next(err));*/
})

module.exports = router;