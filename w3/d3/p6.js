// Nested Object and methods
const student = {
    firstName: "Rohit",
    lastName:"Raj",
    scores:{
        math:80,
        science:83,
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstName +" "+this.lastName;
    },
    greet(){
        console.log("Hi,",this.fullname());
    }
};
console.log(student.fullname());
console.log("student",student);
console.log("math marks",student.scores.math);
console.log("student Raj hobbies",student.hobbies);
// console.log(student.fullname.greet);
student.greet();