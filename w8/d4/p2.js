// Timestamp and advanced queries
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/datedb');
        console.log("MongoDB connected ");

        const DemoSchema = new mongoose.Schema(
            {
                name: String,

            },
            {
                timestamps: true
            }
        );
        const Model = mongoose.model('LogTime', DemoSchema);
        // await Model.deleteMany();
        // await Model.create([{ name: "Rohit" }   ,{ name: "bhujanga" },
        //     { name: "ashwin" },{ name: "Amogh" }
        // ]);

        const recent = await Model.find({
            createdAt: {
                $gte: new Date(Date.now() - 1500000)
            }
        }).sort({ createdAt: -1 });

        console.log("Recent:", recent);

    }
    catch (err) {
        console.log("Error", err.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("DB disconnected");
    }
}
main()