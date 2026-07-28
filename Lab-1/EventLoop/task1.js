// const f1 = () => {
//     console.log("f1");
// };
// const f2 = () => {
//     console.log("f2");
// };
// const f3 = () => {
//     console.log("f3"); 
// };

// function main(){
//     console.log("main");
//     f1();
//     f2();
//     f3();
//     console.log("end main");  
// };

// main();


const f1 = () => {
    console.log("f1 start");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};

const f2 = () => {
    console.log("f2 start");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};

const f3 = () => {
    console.log("f3 start");
    console.log("f3 running");
    console.log("f3 end");
};

function main(){
    console.log("main start");
    f1();
    console.log("main running");
    console.log("main ends");    
};

main();   

//Js is synchronous call and single threaded
// in asynchronous we use eventloop to manage call stack

// asynchronous call using timers :
// 1. set timeout
// 2. set Immediate
// 3. process.nextTick
// 4. set Interval

