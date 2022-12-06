const db = require('../conf/database');

//for index page
module.exports = {
    getRecentPosts: function(req, res, next){
        db.query('select id, title, description, thumbnail from posts ORDER BY createAt DESC LIMIT 8')
            .then(function([results, fields]){
                if(results && results.length){
                    res.locals.results = results;
                }
                next();
        })
            .catch(err => next(err));
    },

    getPostById: function(req, res, next){
        let postId = req.params.id;
        let baseSQL = `
            SELECT p.title, p.description, p.image, p.createAt, u.username
            FROM posts p
            JOIN users u
            ON p.fk_authorId = u.id
            WHERE p.id = ?;
            `;
        db.query(baseSQL, [postId])
            //TODO: need to do error checking here! If id doesn't exist can't crash our app!
            //if id doesn't exist, will return empty row set, use if to check, render diff page or don't submit, flash message?
            .then(function([results, field]){
                if (results && results.length == 1){
                    res.locals.currentPost = results[0];
                }
                next();
            })
    }
}