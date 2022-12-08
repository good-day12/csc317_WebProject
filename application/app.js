const createError = require("http-errors");
const express = require("express");
const favicon = require('serve-favicon');
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const handlebars = require("express-handlebars");

const session = require('express-session');
const MySQLStore = require('express-mysql-session') (session); //the (session) calls the function to link these two statements

const flash = require('express-flash'); //needs to come after session

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const commentsRouter = require('./routes/comments')

//const postsRouter = require("./")

const app = express();

app.engine(
  "hbs",
  handlebars({
    layoutsDir: path.join(__dirname, "views/layouts"), //where to look for layouts
    partialsDir: path.join(__dirname, "views/partials"), // where to look for partials
    extname: ".hbs", //expected file extension for handlebars files
    defaultLayout: "layout", //default layout for app, general template for all pages in app
    helpers: {
        nonEmptyObject: function(obj){
            return !(obj && obj.constructor === Object && Object.keys(obj).length === 0);
        },
        formatDate: function(dateString){
            return new Date(dateString).toLocaleString();
        }
    }, //adding new helpers to handlebars for extra functionality
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//pass empty object to first because something must be passed,
//pass connection to database for the next parameter so we can use our database for this data
const sessionStore = new MySQLStore({}, require('./conf/database'));
app.use(session({
    key: "csid",
    secret: "csc317 secret", //use this secret for cookie parser to avoid bugs
    store: sessionStore, //where to sore session data, if we remove this it'll be in memory
    resave: false, //force resaves on every session even if not modified (actively saving it)
    saveUninitialized: false //if unmodified, do you want to save to db?
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("csc317 secret"));

//put after sessions and cookieParser to be safe
app.use(flash());

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use("/public", express.static(path.join(__dirname, "public"))); //will only run if request starts w/ /public

app.use(function(req,res,next){
    console.log(req.session);
    if(req.session.username){
        res.locals.isLoggedIn = true;
        res.locals.username = req.session.username;
    }
    next();
});

app.use("/", indexRouter); // route middleware from ./routes/index.js
app.use("/users", usersRouter); // route middleware from ./routes/users.js
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);


/**
 * Catch all route, if we get to here then the 
 * resources requested could not be found.
 */
app.use((req,res,next) => {
  next(createError(404, `The route ${req.method} : ${req.url} does not exist.`));
})
  

/**
 * Error Handler, used to render the error html file
 * with relevant error information.
 */
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

//Office hours questions:
// search images will not load
//clicking on search results does not work to view posts
//new comment will not appear when i submit, only after refresh
//posts.js line 45