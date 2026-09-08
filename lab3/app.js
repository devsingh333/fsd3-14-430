import http from "http";
// import * as teams from 'teams.js'
import { getAllTeams } from "./teams.js";

const PORT = 5000;

const sendJson = (res, statusCode, data)=>{
    res.writehead(statusCode,{"content-type":"application/json"});
    res.end(data === "undefined" ? "" : JSON.stringify(data));
};

const parseJSONBody = (req)=>{
    new Promise((reqsolve,reject)=>{
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk.toString();
        });
        req.on("end",()=>{
            try {
                resolve(body ? JSON.parse(body) : {});
            }
            catch (error){
                reject(error);
            }
        });
    });
};
const server = http.createServer();
server.on('request',(req,res) => {
    if(req.url ==='/' && req.method == 'GET'){
        const teams = getAllTeams();
        console.log("Teams:", teams);
        
        res.write(JSON.stringify(teams));
    }
    else{
        res.statusCode = 404;
    }

    res.end();
});

server.listen(PORT, () =>{
    console.log("SIH server is running at", PORT); 
});