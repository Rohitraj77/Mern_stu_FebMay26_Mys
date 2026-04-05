// // Managing sessions with express-session
// const express = require("express");
// const session = require("express-session");

// const app = express();
// app.use(session({
//     secret:"Mysecretkey",
//     resave: false,
//     saveUninitialized: false,
//     cookie:{
//         maxAge:60*60*1000 // 1 hour
//     }
// }));

// // after the signin complete, we can store the user data in the session

// app.get("/login",function(req,res){
//     req.session.userId = {id: 201,
//          name: "Raj",
//           role: "admin"
//         };
//         res.send("session details stored after login");
//     });

//     app.get("/profile",function(req,res){
//         if(!req.session.user){
//             return res.status(401).json({
//                 success: false,
//                 message:"No active login session found."
//             });
            
//         }
//         res.json({
//             success: true,
//             sessionUser: req.session.user
//         });
        
//     });

//     app.listen(4000,function(){
//         console.log("Express-session deomo running at http://localhost:4000");
//     });






const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "Mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000 // 1 hour
    }
}));

// Login route
app.get("/login", function (req, res) {
    req.session.user = {
        id: 201,
        name: "Raj",
        role: "admin"
    };
    res.send("Session details stored after login");
});

// Profile route
app.get("/profile", function (req, res) {
    if (!req.session.user) {
        return res.status(401).json({
            success: false,
            message: "No active login session found."
        });
    }

    res.json({
        success: true,
        sessionUser: req.session.user
    });
});

// Start server
    app.listen(4000,function(){
        console.log("Express-session deomo running at http://localhost:4000");
    });

