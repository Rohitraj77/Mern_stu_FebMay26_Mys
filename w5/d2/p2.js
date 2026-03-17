// // Basic callback variations
// // 1.a callback with no input data
// // 2.a callback that recives data from main function

// function runTask(callback){
//     console.log("Task is running.");
//     callback();
// }

// function runTaskWithResult(taskName){
//     console.log("Processing Task:"+taskName);
//     callback("Task"+taskName+"finished successfully.");
// }

// function showSimpleDemoMessage(){
//     console.log("Simple callback excecuted.");
// }

// function showDetailedMessage(message){
// console.log(message);
// }

// // runTask(showSimpleDemoMessage);
// runTaskWithResult("send monthly report",showDetailedMessage)


// Basic callback variations
// 1. a callback with no input data
// 2. a callback that receives data from main function

function runTask(callback){
    console.log("Task is running.");
    callback();
}

function runTaskWithResult(taskName, callback){
    console.log("Processing Task: " + taskName);
    callback("Task " + taskName + " finished successfully.");
}

function showSimpleDemoMessage(){
    console.log("Simple callback executed.");
}

function showDetailedMessage(message){
    console.log(message);
}

// runTask(showSimpleDemoMessage);
runTaskWithResult("send monthly report", showDetailedMessage);