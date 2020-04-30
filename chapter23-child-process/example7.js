//understanding data streams between parent and child process

const fs = require("fs");
const cp = require("child_process");

let progs = "ls";

//method1: listening to child's stdout 
let child1 = cp.spawn(progs, ["-a"]);
child1.stdout.on("data", (data)=>{
    console.log("child1 proces.....");
    console.log(`data: ${data}`);
})


//method2: child process automatically sends data/error to parent process
console.log("child2 proces.....");
let child2 = cp.spawn(progs, ["-a"], {stdio: "inherit"});

//following throws error because stdout will be null when we use "inherit"
// child2.stdout.on("data", (data)=>{
//     console.log(`data: ${data}`);
// })

//method3: "pipe" is the default behavior, so parent process will have to listen to child.
let child3 = cp.spawn(progs, ["-a"], {stdio: "pipe"});

child3.stdout.on("data", (data)=>{
    console.log("child3 proces.....");
    console.log(`data: ${data}`);
})


//method4: using "ignore" option
let child4 = cp.spawn(progs, ["-a"], {stdio: "ignore"});

//following throws error because stdout is set to null when "ignore" is used.
// child4.stdout.on("data", (data)=>{
//     console.log(`data: ${data}`);
// })

//method5: specifying stdin, stdout and stderr as options
//stdin messages are ignored, stdout messages are inherited and stderr message are written to a file.
let err = fs.openSync("./logs/err.txt", "a"); //open file for append
let child5 = cp.spawn(progs, ["-a", "child5-pub"], {stdio: ["ignore", "inherit", err]});
//since child5-pub directory is not present, error is written to a file

//method6: writing stdout and stderr to file
let out = fs.openSync("./logs/out.txt", "a");
let child6 = cp.spawn(progs, ["-a"], {stdio: ["ignore", out, err]});


//print message before ending main process
process.on("exit", () => {
    console.log("Now ending main process.......");
})