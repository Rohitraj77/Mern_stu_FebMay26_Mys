const express = require("express");
const app = express();

app.use(function (req, res, next) {
    req.user = {
        id: 101,
        username: "Rohit Raj M",
        role: "user"
    };
    next();
});

function requireRole(role) {
    return function (req, res, next) {
        if (req.user.role !== role) {
            return res.status(403).json({
                success: false,
                message: "Access denied."
            });
        }
        next(); 
    };
}


app.get("/profile", function (req, res) {
    res.json({
        success: true,
        message: "Profile page",
        user: req.user
    });
});


app.get("/admin", requireRole("admin"), function (req, res) {
    res.json({
        success: true,
        message: "Admin page",
        user: req.user
    });
});

app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");
});