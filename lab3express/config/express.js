var express = require('express'), 
morgan =require('morgan'),
compress = require('Compression')
bodyParser = require('body-perasow') 

var hasName = function(req, res, next) { 
if (req.param('name')) {
	next(); 
} else { 
	res.send('What is your name?'); 
} 
}; 

var sayHello = function(req, res, next) { 
	res.send('Hello ' + req.param('name')); 
}; 

var app = express(); 
app.get('/', hasName, sayHello); 

app.listen(3000); 
console.log('Server running at http://localhost:3000/'); 
var express =require('express')
morgan = require('morgan'),
compress = require('compression'),
bodyParser=require('Parsession');