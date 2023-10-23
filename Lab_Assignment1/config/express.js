const express = require ('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require ('compression')
const methodOverride = require ('method-override');
var path = require("path")
module.exports = ()=>
{
   const app = express();
   
   if(process.env.NODE_ENV  === 'development')
   {
      app.use(morgan('dev'));
   }else if(process.env.NODE_ENV  === 'production')
   {
         app.use(compression());
   }

   app.use(bodyParser.urlencoded({
       extended:true
   }))
   app.use(bodyParser.json());

   app.use(methodOverride());

   app.set('views' , './app/views')

   app.set('view engine' , 'ejs');
   app.use('/' ,require('../App/routes/index.server.route'))

   app.use(express.static('./public'));

   

   app.use(express.static('./node_modules'));

   return app;
}

