// //try catch basics
// //Reference error
// const error = document.getElementById("error");
// try{
//     console.log("Trying to access undefined variable",error);
//     console.log(notDefinded);
// }
// catch(err){
// console.log("Error caught",err.name,"-",err.message);
// error.innerHTML = "Error caught: "+ err.name + "-" + err.message;
// }
// console.log("program excecution continues");

// try catch basics
// Reference error

// const error = document.getElementById("error");

// try {
//     console.log("Trying to access undefined variable");
//     console.log(notDefined);   // this variable does not exist
// }
// catch (err) {
//     console.log("Error caught", err.name, "-", err.message);

//     error.innerHTML = "Error caught: " + err.name + " - " + err.message;
// }

// console.log("Program execution continues");

//JSON parsing error

// let jsonText = "{ json }";
// try{
//     let data = JSON.parse(jsonText);
//     console.log(data);
// }
// catch{
//     console.log("JSON parse error",err.message);
// }


let jsonText = "{ json }";
try{
    let num = 10;
    num();
}
catch{
    console.log("Caught error",err.name);
}