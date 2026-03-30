// Introduction to buffers in NodeJS
// A buffer stores raw bytes(means binary data)

const { text } = require("node:stream/consumers");

// Here we create buffer directly from the string
const textBuffer = Buffer.from("A");
// The value in the buffer is the encode form of the text
console.log("Buffer object: ",textBuffer);
console.log("Buffer object: ",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);

// Each character is stored internally as byte data for standard ascii letters will be the equivalent code
// Buffer stores numeric values between 0 to 255