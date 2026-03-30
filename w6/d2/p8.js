// Handling of error event in EventEmiter
const { log, error } = require("console");
const EventEmiter = require("events");
const fileEmitter = new EventEmiter();

// Register an error listener
fileEmitter.on("error",function(errorMessage){
    console.log("Emiter handler error",errorMessage);
});
// Normal event listener : Happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("File processed successfully. ",fileName);
});

fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processing failed.");