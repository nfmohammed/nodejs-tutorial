//running child process in detached mode

const fs = require("fs");
const cp = require("child_process");

//g++ -std=c++11 -o longrunning.out longrunning.cpp
let prog = "./longrunning.out";

let out = fs.openSync("./logs/out_detached.txt", "a");
let err = fs.openSync("./logs/err_detached.txt", "a");

//Starting child process in detached mode.
//Make sure to ignore stdin stream.
//Do not use "pipe" or "inherit" option when using detached mode
//It takes about a second to finish running cpp program and the output is written to a file.
let child1 = cp.spawn(prog, ["naseer"], {detached: true, stdio: ["ignore", out, err]});
child1.unref();

//print message before ending main process
process.on("exit", () => {
    console.log("Now ending main process.......");
})