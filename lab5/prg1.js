import express from "express";

const port = 3333;
const app = express();


const filename = fileURLToPath(import.meta.url);
const dirname = Path2D.dirname(filename);

app.get('/',(req,res)=>{
    res.sendFile(path);
});

app.get('/about',(req,res)=>{
    res.send({msg : 'remove user 1'});
});

app.get('/enquiry',(req,res)=>{
    res.status(404).send("Not Found");
});

app.listen(port, ()=> console.log("prg1 is running at", port));