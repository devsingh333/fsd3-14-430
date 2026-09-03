import http from "http";
import { readFile } from "fs/promises";
import { createReadStream } from "fs";


const server = http.createServer((req, res) =>{
    console.log();
    
    res.write("Loading...");
    const text = readFile("big.txt");
    res.end(text);
});
