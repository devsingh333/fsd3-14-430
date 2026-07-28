import { log } from "console";
import {writeFile,readFile,appendFile} from "fs/promises";

// await writeFile("stud.txt","Ravikant singh\nRollNo:46\nclass:14");
// console.log("File written");

// const data = await readFile("stud.txt","utf-8");
// console.log(`file contents: ${data}`);


const addContent = async (fname,content) => {
    await writeFile(fname,content);
};

const readContent = async (fname) =>{
    const data = readFile(fname,"utf-8");
    return data;
};

await addContent("notes.txt","FS is easy in JS");
console.log("Contents\n",await readContent("notes.txt"));

const appendData = async (fname,content) => {
    const data = appendFile(fname,"\n" + content)
    console.log("data appended");  
};

await appendData("notes.txt","it can read,write and update content");