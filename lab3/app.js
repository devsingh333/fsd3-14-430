import http from "http";

const server = http.createServer();
server.on('request',(req,res) => {
    // res.write("<h1>welcome to server side programming</h1>");
    // res.write("<h2>nodemon is tracking the files</h2>");
    res.end("<h1>SIH Interal</h1>");
});

server.listen(5000, () =>{
    console.log("server is running"); 
});