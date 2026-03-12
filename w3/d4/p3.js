//array map
let numArray = [1,2,3,4];
let squared=numArray.map(num=>num*num)
console.log(squared);

//array map
let prices = [100,200,300,400];
let pricewithGST = prices.map(price => price+price*0.18);
console.log("Price w/o tax",prices);
console.log("Price with tax",pricewithGST);

//using map to extract files
let users = [
    {name:"Raj", age:23},
    {name:"dini", age:24}
];

let names = users.map(user => user.name);
console.log("",names);