const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SCHEMA

const Student = new Schema({
    student_fname:{
        type: String
    },
    student_lname:{
        type: String
    },
    student_Id:{
        type: Number
    },
    student_subject:{
        type: [String]
    },
    student_year:{
        type: Number
    },
    student_grades:{
        type: String
    },

});

module.exports = mongoose.model('Students',Student);