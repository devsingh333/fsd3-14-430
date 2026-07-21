import { log } from "node:console";
import {EventEmitter} from "node:events";

const task = new EventEmitter();


const sayHi = (name) =>{
    console.log(`loggedIn ${name}`);  
};

task.on('greet',sayHi);

task.emit('greet',"rahul");

task.on('greet', ()=>{
    console.log("loggedOut")
});

// task.once('greet',()=>{
//     console.log("system started...");
    
// });

task.off('greet',sayHi);

task.emit('greet','Aman');
// task.off('greet',sayHi)
task.emit('greet','manager');

// task.once('exit',(name)=>{
//     console.log(`system stopped by ${name}`);  
// });

// task.emit('exit',"devil");