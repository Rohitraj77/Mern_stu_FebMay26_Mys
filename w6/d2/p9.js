// Removing EventEmitter listeners

const EventEmiter = require("events");
const jobEmiter = new EventEmiter();

function showJobProgress(status){
    console.log("Job Status: ",status);
}

// Add listener
jobEmiter.on("Progress",showJobProgress);

// Emit the event
jobEmiter.emit("Progress","50% completed");

// Remove listener
jobEmiter.off("Progress",showJobProgress);

// emit the event
jobEmiter.emit("Progress","100% completed");