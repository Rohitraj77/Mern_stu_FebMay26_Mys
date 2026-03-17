
console.log("Node JS Architecture demo");
console.log("1. Script started");

// setTimeout
setTimeout(()=>{
    console.log("3. Timer callback finished after waiting");
},3000);

console.log("2.Script continued without waiting for timer callback");