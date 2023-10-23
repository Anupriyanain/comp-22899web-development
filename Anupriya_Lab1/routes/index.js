var express  = require('express');
var router = express.Router();

// Get home page. 
router.get('/', function(req, res, next){
    res.render('index', {title: 'Home'});
});

//Get home page.
router.get('/home',function(req, res, next){
    res.render('index',{title: 'Home'});
});

//Get About Me Page
router.get('/about',function(req,res,next){
    res.render('index',{title: 'About'});
});

//Get services Page
router.get('/services',function(req, res, next){
    res.render('index',{title: 'Services'});
});

//Get Project page
router.get('/projects',function(req, res, next){
    res.render('index',{title: 'Projects'});
});

//Get contact page
router.get('/contact',function(req, res, next){
    res.render('index',{title: 'Contact'});
});

/*Post method */
router.post('/contact', function(req,res,next){
    const post = { 
        fullname:req.body.fullname,
        contactNum:req.body.contactNum,
        email:req.body.email,
        msg:req.body.message
    };
    post.push(post);
    res.redirect('/home') 
        
});

module.exports = router;