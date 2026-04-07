// writing & reading bookings and its logs

const { rejects } = require("assert");
const { log } = require("console");
const { resolve } = require("dns");
const fs = require("fs");
const path = require("path");
const { buffer } = require("stream/consumers");

const dataDir = path.join(__dirname, "data");
const logsDir = path.join(dataDir, "logs");
const bookingsFile = path.join(dataDir, "bookings.json");
const logFile = path.join(logsDir, "booking.log");
const archivedLogFile = path.join(logsDir, "booking-archived.log");

function ensureDirectories() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
}

function listDataFilesSync() {
    ensureDirectories();
    return fs.readdirSync(dataDir);

}

function removeLogsDirectorySync() {
    if (fs.existsSync(logsDir)) {
        fs.rmdirSync(logsDir, { recursive: true });
    }
}


// Reading and writing of the bookings

function initalizeBookingsFileSync() {
    ensureDirectories();
    if (!fs.existsSync(bookingsFile)) {
        fs.writeFileSync(bookingsFile, JSON.stringify([], null, 2), "utf-8");
    }
}


function readBookingSync() {
    initalizeBookingsFileSync();

    // Read synchronoulsy using buffer first,then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}


function readBookingAsync() {
    initalizeBookingsFileSync();

    return new promise((resolve, reject) => {
        fs.readFile(bookingsFile, (err, bufferData) => {
            if (err) {
                return reject(err);
            }
            try {
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            }
            catch(parseError){
                reject(parseError);
            }
        });
    });
}

function writeBookingsAsync(bookings){
    initalizeBookingsFileSync();
    return new Promise((resolve,reject)=>{
        const jsonString = JSON.stringify(bookings,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString);

        fs.writeFile(bookingsFile,buffer,(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Bookings file written successfully");
        });
    })
}

async function appendLogAsync(bookings) {
    const booking = await readBookingAsync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}


function appendBookingAsync(message){
    ensureDirectories();
    return new promise((resolve,reject)=>{
        const timeStamp = new Date().toISOString();
        const finalMessage = `[${timeStamp}]${message}\n`
        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended successfully");
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();
    if(fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogFile);
        return true;
    }
    return false;
}

function deleteArchivedLogSync(){
    if(fs.existsSync(archivedLogFile)){
        fs.unlinkSync(logFile,archivedLogFile);
        return true;
    }
    return false;
}

module.exports = {
    dataDir,
    logsDir,
    bookingsFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFilesSync,
    removeLogsDirectorySync,
    initalizeBookingsFileSync,
    readBookingAsync,
    readBookingSync,
    writeBookingsAsync,
    writeFileSync,
    appendBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync,
    appendLogAsync
};