//child_process.fork(modulePath, [args], {options})

//Creating child process using JS modules.

const cp = require('child_process');
const path = require('path');

const names = ["naseer", "chicago"];

var child1 = cp.fork("./modules/forkchild.js", names);
child1.on("exit", ()=>{
    console.log("child1 terminated");
})

var child2 = cp.fork("forkchild.js", names, {cwd: "./modules"});

//print message before ending main process
process.on("exit", () => {
    console.log("Now ending main process.......");
})