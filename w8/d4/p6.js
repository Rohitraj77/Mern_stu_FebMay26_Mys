// // const crypto = require('crypto');
// // const mongoose = require("mongoose");
// // const { type } = require('os');

// // mongoose.connect('mongodb://127.0.0.1:27017/datedb1')
// //     .then(() => console.log("MongoDB connected"))
// //     .catch((err) => console.log(err))

// // const otpSchema = new mongoose.Schema({
// //     userId: {
// //         type: String,
// //         required: true,
// //         unique: true
// //     },
// //     otp: {
// //         type: String,
// //         required: true
// //     },
// //     expiresAt: {
// //         type: Date,
// //         required: true,
// //         index: { expires: 0 }
// //     },
// //     attempts: {
// //         type: Number,
// //         default: 0
// //     }

// // });
// // async function generateOTP(userId) {
// //     const otp = crypto.randomInt(100000, 999999).toString();
// //     await otp = findOneAndUpdate(
// //         {userId},
// //         {
// //             userId,
// //             otp,
// //             expiresAt:new Date(Date.now() + 6000),
// //             attempts:0
// //         },
// //         {
// //             upsert: true,
// //             returnDocument: 'after'
// //         }
// //     );
// //     console.log("OTP: ",otp);
// // }

// // async function verifyOtp(userId, enteredOtp) {
// //     const record = await otp.findOneAndUpdate({userId});

// //     if(Date.now()>record.expiresAt) return "Expired";
// //     if(record.attempts >= 3) return "Blocked";

// //     record.attempts++;
// //     if(record.otp === String(enteredOtp)){
// //         await otp.deleteOne({userId});
// //         return "Valid";
// //     }
// //     await record.save();
// //     return"Invalid";
// // }
// // async function main() {
// //     await generateOTP("user1");
// //     const storedRecord = await otp.findOneAndUpdate({userId:"user1"});
// //     const userEnteredOtp = storedRecord.otp;

// //     const result = await verifyOtp("user1",userEnteredOtp);
// //     console.log(result);
// //     await mongoose.connection.close();
// // }
// // main()

// const crypto = require('crypto');
// const mongoose = require("mongoose");
// const { type } = require('os'); // kept as it is

// mongoose.connect('mongodb://127.0.0.1:27017/datedb1')
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log(err))

// const otpSchema = new mongoose.Schema({
//     userId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     otp: {
//         type: String,
//         required: true
//     },
//     expiresAt: {
//         type: Date,
//         required: true,
//         expires: 0   
//     },
//     attempts: {
//         type: Number,
//         default: 0
//     }
// });

// const otp = mongoose.model("otp", otpSchema); 

// async function generateOTP(userId) {
//     const generatedOtp = crypto.randomInt(100000, 999999).toString();

//     await otp.findOneAndUpdate(   
//         { userId },
//         {
//             userId,
//             otp: generatedOtp,
//             expiresAt: new Date(Date.now() + 6000),
//             attempts: 0
//         },
//         {
//             upsert: true,
//             new: true 
//         }
//     );

//     console.log("OTP: ", generatedOtp);
// }

// async function verifyOtp(userId, enteredOtp) {
//     const record = await otp.findOne({ userId }); 

//     if (!record) return "No OTP";

//     if (Date.now() > record.expiresAt) return "Expired";
//     if (record.attempts >= 3) return "Blocked";

//     record.attempts++;

//     if (record.otp === String(enteredOtp)) {
//         await otp.deleteOne({ userId });
//         return "Valid";
//     }

//     await record.save();
//     return "Invalid";
// }

// async function main() {
//     await generateOTP("user1");

//     const storedRecord = await otp.findOne({ userId: "user1" }); 
//     const userEnteredOtp = storedRecord.otp;

//     const result = await verifyOtp("user1", userEnteredOtp);
//     console.log(result);

//     await mongoose.connection.close();
// }

// main();

const crypto = require('crypto');
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/datedb1')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Schema
const otpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        expires: 0   // TTL index (auto delete after expiry)
    },
    attempts: {
        type: Number,
        default: 0
    }
});

// Model
const otp = mongoose.model("otp", otpSchema);

// Generate OTP
async function generateOTP(userId) {
    const generatedOtp = crypto.randomInt(100000, 999999).toString();

    await otp.findOneAndUpdate(
        { userId },
        {
            userId,
            otp: generatedOtp,
            expiresAt: new Date(Date.now() + 6000), // 6 sec expiry
            attempts: 0
        },
        {
            upsert: true,
            new: true
        }
    );

    console.log("Generated OTP:", generatedOtp);
}

// Verify OTP
async function verifyOtp(userId, enteredOtp) {
    const record = await otp.findOne({ userId });

    if (!record) return "No OTP";

    if (Date.now() > record.expiresAt) return "Expired";

    if (record.attempts >= 3) return "Blocked";

    record.attempts++;

    if (record.otp === String(enteredOtp)) {
        await otp.deleteOne({ userId });
        return "Valid";
    }

    await record.save();
    return "Invalid";
}

// Main function (test all scenarios)
async function main() {

    // 1. No OTP scenario
    console.log("1:", await verifyOtp("user2", "123456")); // No OTP

    // 2. Generate OTP
    await generateOTP("user1");

    const storedRecord = await otp.findOne({ userId: "user1" });
    const correctOtp = storedRecord.otp;

    // 3. Invalid attempts
    console.log("2:", await verifyOtp("user1", "111111"));
    console.log("3:", await verifyOtp("user1", "222222"));
    console.log("4:", await verifyOtp("user1", "333333"));

    // 4. Try after blocked
    console.log("5:", await verifyOtp("user1", correctOtp));

    // 5. Expired scenario (WITHOUT setTimeout)
    await generateOTP("user3");

    // Force expiry in DB
    await otp.updateOne(
        { userId: "user3" },
        { expiresAt: new Date(Date.now() - 1000) }
    );

    console.log("6:", await verifyOtp("user3", "123456")); // Expired

    await mongoose.connection.close();
}

// Run
main();