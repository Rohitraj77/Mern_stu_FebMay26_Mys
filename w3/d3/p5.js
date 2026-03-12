//Basics of Objects
const person = {
    name:"Rohit",
    age:22,
    isStudent: false
};
console.log("person",person);
console.log("name",person.name);//dot notation
console.log("age",person["age"]);//bracket notation


//Add a new property
person.city = "Mysore";
console.log("Person",person);
//Modify
person.age=30;
console.log("Person",person);
//delete
delete person.isStudent;
console.log("Person",person);


//Object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log("car",car);