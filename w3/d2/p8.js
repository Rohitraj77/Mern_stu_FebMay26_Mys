//Default parameters
function product(a,b=1){
    return a*b;
}
console.log("Product of 15 and 4",product(15,4));
console.log("Product of 15 and 4",product(15));
//here of b it takes the default parameter as 15 itself

//Rest parameters
function sumOfAll(...numbers){
console.log(...numbers);
sumOfAll(1,2,3,4);
sumOfAll(10);
}