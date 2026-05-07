// Sorting, limiting and pagination
const mongoose = require("mongoose");

async function sortPaginationDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const sortedAscending = await Product.find({category: "sonamasuri"}).sort({price:1});
        console.log("Sorted ascending",sortedAscending);

        await mongoose.connection.close();
                console.log("connection closed");
    }    
    catch(error){
        console.log("Filter demo error:",error.message);
    }
}
sortPaginationDemo();