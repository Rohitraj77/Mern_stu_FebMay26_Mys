// Reading & writing files asynchronously with fs/promises

const fs = require("fs/promises");
const path = require("path");

async function runPromisesFileFlow() {
    const filePath = path.join(__dirname,"promise-note.txt");

    try{
        await fs.writeFile(filePath,"Written using fs/promises. This works with async/await");
        console.log("File written using fs/promises");

        const content = await fs.readFile(filePath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promise-based fs error:",error.message);
    }
}
runPromisesFileFlow();