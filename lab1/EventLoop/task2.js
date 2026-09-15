import fs from "fs/promises";

// PROMISE : it will finish the task and come back even when it fails...first priority
const writeData = async() => {
    try {
        console.log("about to write...");
        
        await fs.writeFile("stud.txt","Name : dev singh")
        console.log("file written");
        
    } catch (error) {
        console.log(error);
        
    }
}




const f1 = () => {
    console.log("f1");
    
};
const f2 = () => {
    console.log("f2");
    
};

const f3 = () => {
    console.log("f3");
    
};

const main = () => {
    console.log("main");
    setTimeout(f1,5000); 
    // setTimeout(f2,0);
    // setInterval : runs every time in the given interval
    // setInterval(f2,1000); 

    // to execute immediately :
    setImmediate(f2);  
    
    process.nextTick(f3);
    // f2();

    // promise: 1st priority : goes in job queue
    writeData();
    console.log("end");
    

};

main();

