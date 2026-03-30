// Directory operations : mkdir, readdir and rmdir/rm
const fs = require("fs");
const path = require("path");
const originalPath = path.join(__dirname,"demo-folder");
const demoDir = path.join(__dirname,"demo-folder");
// to create folder
fs.mkdirSync(demoDir, {recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 content");
// To check folder contents
const enteries = fs.readdirSync(demoDir);
console.log("Directory contents: ",enteries);
// recursive:true => It is used to check the folder name is present or not
fs.rmSync(demoDir,{recursive:true, force:true});// force:true => it is used to handle the error if the folder is missing
console.log("Directory exists?",fs.existsSync(demoDir));