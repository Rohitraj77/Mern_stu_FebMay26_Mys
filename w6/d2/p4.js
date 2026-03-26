// Usage of the event emitter class
const EventEmitter = require("events"); // if it s bulit in no need to installbut if it is a third party like lodash we need to install by using npm install lodash

// create a new event emitter instance
// This object can publish events and allow listeners
// to subscribe

const orderEmitter = new EventEmitter();

// Register a listener for the "order placed" event.
// whenever the event is emmitted the function will exceute


orderEmitter.on("orderPlaced",
    function (orderId, customerName) {
        console.log("Hello ", customerName);
        console.log("hello rohit , wiating for resturant to accept the order", orderId);
    }
);

orderEmitter.on("orderPlaced",
    function (orderId, customerName) {
        console.log("Hello ", customerName);
        console.log("Resturant accepted the order.", orderId);

    }
);
// once() registers a listener that automatically removes itself after running for the first time.
orderEmitter.once("orderPlaced",
    function (orderId, customerName, orderValue) {

        console.log("Hello ", customerName);
        console.log("Bill amount", orderValue);

        console.log("Assigning delivery partner.");
    }
);

orderEmitter.on("orderPlaced",
    function (orderId, customerName) {
        console.log("Hello ", customerName);
        console.log("Hii i am jeevan N.S friend of gangasandra one of the delivery partner i am delivering your order.", orderId);
    }
);

// Emmit the event with extra data.
// The listener recives the orderId value.
orderEmitter.emit("orderPlaced", "ORD-2403001", "Rohit Raj", 1000);
orderEmitter.emit("orderPlaced", "ORD-2403001", "Rohit Raj", 1000);