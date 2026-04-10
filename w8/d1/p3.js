// Apply filters to the query using comparison operators 
const mongoose = require("mongoose");
async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const productSchema = mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            status: String
        });
        const Product = mongoose.model.shop || mongoose.model("product", productSchema);

        const firstProduct = await Product.create([{
            name: "rice",
            price: 45,
            category: "sonamasuri",
            status: "active"
        },
        {
            name: "rave",
            price: 25,
            category: "bansirave",
            status: "inactive"
        },
        {
            name: "tomato",
            price: 60,
            category: "redtomato",
            status: "active"
        },
        {
            name: "onion",
            price: 80,
            category: "blackonion",
            status: "inactive"
        },
        {
            name: "pen",
            price: 10,
            category: "blue",
            status: "active"
        }
        ]);

        const equalQuery = await Product.find({ status: { $eq: "active" } });
        console.log("Products which are active", equalQuery);

         const greaterQuery = await Product.find({ price: { $gte: 30 } });
        console.log("Products which are greater than 30 are ", greaterQuery);

        const lesserQuery = await Product.find({ price: { $lt: 60 } });
        console.log("Products which are lesser than 60 are ", lesserQuery);

        const notequal = await Product.find({ name: { $ne: "rice"} });
        console.log("Products that is not equal to rice",notequal);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Filter demo error:",error.message);
    }
}
runFilterDemo();