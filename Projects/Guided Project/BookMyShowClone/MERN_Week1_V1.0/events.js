// This file creates and exports custom event emitter instance
const EventEmitter = require("events");
// Custom event emitter object
const bookingEmitter = new EventEmitter();

module.exports = bookingEmitter;