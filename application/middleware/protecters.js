module.exports = {
    isLoggedIn : function(req, res, next){
        if (req.session.username){
            next();
        }else{
            req.flash("error", "You must be logged in to post");
            req.session.save(function(saveErr){ //force session to be saved to db, won't redirect until it is saved
                res.redirect('/login');
            })

        }
    }
}