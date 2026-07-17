import { log } from "node:console";
import {EventEmitter} from "node:events";

const task = new EventEmitter();


const sayHi = (name) =>{
    console.log(`loggedIn ${name}`);  
};

task.on('greet',sayHi);

task.on('greet', ()=>{
    console.log("loggedOut")
});

task.once('greet',()=>{
    console.log("system started...");
    
});

task.off('greet',(name)=>{
    console.log(`system is shutting down... ${name}`);
});

task.emit('greet','Aman');
task.emit('greet','manager');