studentRoutes.route('/').get((req,res) =>{
    Students.find({})
    .then(students=>res.json(students)
    .catch (err => console.log(err)
    ))
});

studentRoutes.route('/:id').get((req,res)=>{
const id = req.params.id;

    Students.findbyId(id)
    .then (students=>res.json(students)
    .catch (err => console.log(err)
    ))
});

studentRoutes.route('/students').post((req,res) =>
{
    let students= new students(req.body);
    
    students.save().
     then(students => 
        {
            res.status(200).json({'Student':'saved Successfully'})
        }).
        catch(err =>{
            res.status(400).json({'error':err})
        })
});

studentRoutes.route('/students/:id').post((req,res)=>{
    let id =req.params.id;

    Students.findById(id,(students, err)=>{
    if (err)
    res.status(400).json({'error':err})
   else{
    //
    students.students_fname = req.body.students_fname; 
    students.students_lname = req.body.students_lname;
    students.students_Id = req.body.students_Id;
    students.students_subject = req.body.students_subject;
    students.students_year = req.body.students_year; 
    students.students_grades = req.body.students_grades;

    // updating values in mongo
        // updating values in mongo
        studentsRoutes.route('/student').post((req,res)=>{
            let students = new Student(req.body);
        
            students.save()
            .then(students =>{
                res.status(200).json({'student':'saved Successfully'})
            })
                .catch(err =>{
                    res.status(400).json({'error':err})
                })
        });  
   }
})
});
