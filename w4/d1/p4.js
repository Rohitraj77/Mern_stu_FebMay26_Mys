//Logging
// console.log("console logging");
// console.warn("Warning");
// console.error("Error message");
let users = [
    {id:1,name:"Amit"},
    {id:2,name:"bankiputra"},
];
console.log(users);
console.table(users);


// Group the related logs
console.group("Grouped logs");
console.log("Log1");
console.log("Log2");
console.log("Log3");
console.groupEnd();
console.log("Log4");


//measure the excdecution time
console.time("LoopTimer");
for(let i = 0; i<1000; i++){

}
console.timeEnd("LoopTimer");