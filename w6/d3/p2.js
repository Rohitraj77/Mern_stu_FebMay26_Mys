// // Reading and writing files synchronously

// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname,"sync-note.txt");
// // Syntax for function usage in the module
// // moduleName.functionName()

// // fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block");
// // Append to a file
// fs.appendFile(filePath,"New text added using fs.appendFile",
//     function(error){
//         console.log("Append error: ",error.message);
//         return;
//     }
// );

// console.log("File written synchronously.");

// const content = fs.readFileSync(filePath,"utf-8");

// console.log("File read synchronously. ");
// console.log(content);








// Reading and writing files synchronously
const { error } = require("console");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sync-note.txt");

// Write to file synchronously
// fs.writeFileSync(filePath, "This file was written using writeFileSync().\n");

// Append synchronously
fs.appendFileSync(filePath, "New text added using fs.appendFileSync().\n",
function(error) {
    if (error) {
        console.log("Append error:", error.message);
        return;
    }
    console.log("File written synchronously.");
});
// Read synchronously
const content = fs.readFileSync(filePath, "utf-8");

console.log("File read synchronously.");
console.log("File content: ", content);