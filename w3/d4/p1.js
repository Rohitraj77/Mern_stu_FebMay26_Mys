// Array basics
console.log("Array basics");
// Creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"Gola"},[4,2]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);


// using constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//push
fruits.push("cherry");
console.log(fruits);

//pop : remove
fruits.pop();

//unshift : adds to the beginning
fruits.unshift("Orange");
console.log(fruits);

//shift is to remove from the begining
fruits.shift();
console.log(fruits);