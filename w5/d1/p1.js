// Introduction to node.js
const runtimeName = "Node.js";
console.log("Introdcution to node.js");
console.log(`${runtimeName} runs javascript outside browser`);


//array destructuring
const commonUses = ["server-side app","automation scripts can be created"];
// console.log(commonUses[0],commonUses[1])
commonUses.forEach((commonUse,index)=>{
    console.log(`${index+1}.${commonUse}`);
})