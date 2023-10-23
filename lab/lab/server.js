const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Routers
const studentRoutes = express.Router();
const students = require('./model/student.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://arshilshingala10:5i497UeKvA3BrNJ7@cluster0.kzzc6my.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("DB connected......")
});




app.use(studentRoutes);
app.listen(8083,()=>{
    console.log("Server is running on 8081....");
});
