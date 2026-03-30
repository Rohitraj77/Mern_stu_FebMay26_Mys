// Handling different GET routes
const http = require("http");
const { endianness } = require("os");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("Home page / Dashboard");
       return;
    }
    if(req.method === "GET" && req.url === "/about"){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("About Route.welcome to About Us page.");
       return;
    }
    if(req.method === "GET" && req.url === "/products"){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("About Route.welcome to Products page.");
       return;
    }
    if(req.method === "GET" && req.url === "/users"){
       res.writeHead(200,{"content-type":"text/plain"});
       res.end("Returning all  users");
       return;
    }
    // POST = create
    // curl -X POST http://localhost:3001/users 
    // curl: Client URL: it is a free open source CLI(command line interface) tool used to transfer data
    // to or from a server using various network protocol.
        if(req.method === "POST" && req.url === "/users"){
       res.writeHead(201,{"content-type":"text/plain"});
       res.end("New user created.");
       return;
    }
    // unkown route fallback
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("Route not found.");
});
server.listen(3001 ,function(){
    console.log("Server is running at http://localhost:3001");
});