// secure cookies with httpOnly and secure flags
const express = require("express");
const cookieParser = require("cookie-parser");
const { message } = require("statuses");
const app = express();

app.get("/set-session",function(req,res){
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("sessionid","demo-session-123",{
        httpOnly:true,
        secure:isProduction,
        maxAge: 30*60*1000
    });
    res.send("Session cookie set with httpOnly & environment secure flag");
    });

    app.get("/read-session",function(req,res){
        res.json({
            message: "Server can read the cookie value from the request",sessionId:req.cookies.sessionId || "No session cookie found"
        });
    });
    app.listen(4000,function(){
        console.log("JWT demo server running at http://localhost:4000");
    });

