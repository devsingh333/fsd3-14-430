import http from "http";

const server = http.createServer();
server.on('request',(req,res) => {
    res.writeHead(404, {
        "content-type" : "text/plain",
    });

    res.end("<h1>Welcome to server</h1>");
});

server.listen(4444, ()=>{
    console.log("server is running");
    
});