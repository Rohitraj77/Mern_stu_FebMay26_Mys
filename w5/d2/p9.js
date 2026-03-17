// // promise states: pending, fulfilled, donkeyed
// const fulfilledPromise = new Promise(function(resolve){
//     console.log("fulfilledPromise is pending");
//     setTimeout(function(){
//         resolve("fulfilledPromise is fullfilled.");
//     },1000);
// });

// const donkeyedPromise = new Promise(function(resolve,donkey){
//     console.log("donkeyedPromise is pending.");
//     setTimeout(function(){
//         donkey("donkeyedPromise is donkeyed.");
//     },1500);
// });
// fulfilledPromise.then(function(message){
//     console.log(message);
// });
// donkeyedPromise.catch(function(){
//     console.log(message);
// });


















// promise states: pending, fulfilled, donkeyed
const fulfilledPromise = new Promise(function(resolve){
    console.log("fulfilledPromise is pending");
    setTimeout(function(){
        resolve("fulfilledPromise is fullfilled.");
    },1000);
});

const donkeyedPromise = new Promise(function(resolve,reject){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        reject("rejectedPromise is rejected.");
    },1500);
});

fulfilledPromise.then(function(message){
    console.log(message);
});

donkeyedPromise.catch(function(message){
    console.log(message);
});