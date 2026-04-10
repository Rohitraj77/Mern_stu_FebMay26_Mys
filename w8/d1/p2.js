// CRUD operation in mongoDB using Moongoose
const mongoose = require("mongoose");
async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully");

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });
        const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
        // clearing the previous demo data
        await Student.deleteMany({ role: "demo-student" });
        // create using save()
        const firstStudent = new Student({
            name: "Raj",
            age: 22,
            role: "admin"
        });
        await firstStudent.save();
        // console.log("Created new student with save()",firstStudent);

        // create using create()
        const secondStudent = await Student.create({
            name: "sharath",
            age: 27,
            role: "demo-student"
        });
        // console.log("Created new student with create()",secondStudent);
        // Read using the function of find()
        const allDemoStudents = await Student.find({role:"demo-student"});
        // console.log("Read with find(): ",allDemoStudents)
        // Read using findOne()
        const oneDemoStudent = await Student.findOne({role: "demo-student"});
        console.log("Read with findOne():",oneDemoStudent) 
        
        // update using the findByIdAndUpdate()
        const updatedStudent = await Student.findByIdAndUpdate(
            secondStudent._id,{age:30},
            {new:true}
        );
console.log("Updated with findByIdAndUpdate():",updatedStudent)

        // Delete using findByIdAndDelete()
        const deletedStudent = await Student.findByIdAndDelete(firstStudent._id);
        console.log("Deleted with findByIdDelete():",deletedStudent);
        await mongoose.connection.close();
        console.log("Connection closed");

    }
    catch(error){
        console.log("Crud demo error: ",error.message);
    }
    
}
runCrudDemo();