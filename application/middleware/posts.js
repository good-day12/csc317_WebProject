const db = require('../conf/database');

//for index page
module.exports = {
    getRecentPosts: function(req, res, next){
        db.query('select id, title, description, thumbnail from posts LIMIT 8')
            .then(function([results, fields])){
                if(results && results.length){
                    res.locals.results = results;
                }
                next();
        }
    }
}