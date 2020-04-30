//send message from child process to parent process


const cp = require('child_process');
const path = require('path');

const names = ["naseer", "audi", "honda"];

var child1 = cp.fork("forkchild.js", names, {cwd: './modules'});

child1.on("message", (data) => {
    console.log(`parent received ${data}`);
})
.on("exit", ()=>{
    console.log("child1 terminated");
})

//print message before ending main process
process.on("exit", () => {
    console.log("Now ending main process.......");
})