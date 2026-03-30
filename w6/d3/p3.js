// Reading and writing files asynchronouslyr= with callbacks
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"async-note.txt");

// To write to a file
fs.writeFile(filePath,"This is written asynchronously using writeFile().",function(writeError){
    if(writeError){
        console.log("write error: ",writeError.message);
        return;
    }
    
    console.log("File read asynchronously. ");
        
});

const content = fs.readFile(filePath,"utf-8",function(readError){
    if(readError){
    console.log("Read error: ",readError.message);
    return;
    }
    console.log(content)

},
);

console.log("Script continues while file operations are in progress.");