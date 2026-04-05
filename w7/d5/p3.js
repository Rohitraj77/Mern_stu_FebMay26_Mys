// // session security,regeneration, and expiration and logout
// const express = require("express");
// const session = require("express-session");

// const app = express();

// app.use(session({
//     secret: "Mysecretkey",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 60 * 60 * 1000, // 1 hour
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production"
//     }
// }));

// // Login route
// app.get("/login", function (req, res) {
//     req.session.regenerate(function (error) {
//         if (error) {
//             return next(error);
//         }
//     }
//     );
// })
// req.session.user = {
//     id: 201,
//     name: "Raj",
//     role: "admin"
// };
// res.send("Session regenerated & details stored after login");
// });









// session security, regeneration, expiration and logout
const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "Mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}));

// Login route
app.get("/login", function (req, res, next) {
    req.session.regenerate(function (error) {
        if (error) {
            return next(error);
        }

        req.session.user = {
            id: 201,
            name: "Raj",
            role: "admin"
        };

        res.send("Session regenerated & details stored after login");
    });
});

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

app.get("/logout",function(req,res){
    req.session.destroy(function(error){
        if(error){
            return next(error);
        }
        res.clearCookie("connect.sid");
        res.send("Session destroyed & cookie cleared.");
    });     
});

app.use(function(err,req,res,next){
    res.status(500).json({
        success: false,
        message: "Error message"
    });
});

app.listen(4000, function () {
    console.log("Express-session demo running at http://localhost:4000");
}
);