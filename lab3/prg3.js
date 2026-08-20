import http from "http";

const server = http.createServer();
server.on('request',(req,res)=>{
    console.log("welcome to the server");
    if(req.url=='/'){
        res.end('<h1>home page</h1>')
    }
    else if(req.url=='/about'){
        res.end("<h2>about us page</h2>")
    }
    else if(req.url=="/product"){
        res.end(`<h1>mobile phone</h1>
            <h2>price:25000</h2>
            <p>discount : 5%</p>
            <a href='#>buy now</a>
            `);
    }
    else{
        res.statusCode = 404;
        res.end(`
            <h1>404, not found</h1>
            <p>page not found</p>
            <a href='/'>home</a>
            `);
    }
});

server.listen(5000,()=>{
    console.log("server is running");
    
});