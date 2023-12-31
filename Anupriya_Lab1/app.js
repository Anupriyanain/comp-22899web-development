let createError=require('http-errors');
let espress=require('express');
let path=require('path');
let cookieParser=require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter= require('./routes/user');

let app = express();

// view engine setup
app.set('views',path.join(__dirname, 'views'));
//configured view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
//includes node_modules folder as a static path
app.use(express.static(path.join(__dirname, 'node_modules')));
//added static path to directly access the assests folder contents
app.use(express.static(path.join(__dirname, 'Assets')));

app.use('/',indexRouter);
app.use('/users', usersRouter);

//catch 404 and forward to error handler
app.use(function(req,res,next){
    next(createError(404));
});

//error handler
app.use(function(err, req, res, next){
    //set locals, only providing error in development
    res.locals.message =err.message;
    res.locals.error =req.app.get('env') === 'development' ? err:{};
    
    //render the error page
    res.status(err.status || 500);
    res.render('error', {title: 'Error'});
});
module.exports =app;