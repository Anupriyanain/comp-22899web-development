// create server.js then the package.json by command of npm init -y
// then npm install

var express = require('express'); 
module.exports = function() { 
	var app = express(); 
	require('../app/routes/index.server.routes.js')(app); 
	return app; 
};