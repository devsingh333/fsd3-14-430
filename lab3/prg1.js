import { log } from "console";
import http from "http";

const server = http.createServer();
server.on('request',(req,res) =>{
    console.log("welcome to node js");
    console.log(req.url);
    console.log("request method");
    console.log(req.method);
    console.log("request header");
    console.log(req.headers);
    // console.log("socket info");
    // console.log(req.socket);
    console.log(req.headers.host);
    
    res.end("hello");
    
    
});

const PORT = 4444;

server.listen(PORT, () =>{
    console.log("server is running");
    
});