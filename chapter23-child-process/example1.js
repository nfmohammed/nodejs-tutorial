//child_process.spawn(command, [args], {options})

var cp = require("child_process");

var progs = {
    list: "ls",
    copy: "cp",
    folder: "mkdir",
    remove: "rm"
}

//executing command (ls - l) inside child process
var child1 = cp.spawn(progs.list, ["-l"])

//subscribe to child process's output
child1.stdout.on("data", data => {
    console.log(`data output from child process 1:\n${data}`);
})


//executing command (ls -l ..) inside child process
var child2 = cp.spawn(progs.list, ["-l"], {cwd: ".."})
child2.stdout.on("data", data => {
    console.log(`data output from child process 2:\n${data}`)
})


//executing incorrect command (ls pub) inside child process
var child3 = cp.spawn(progs.list, ["pub"])
child3.stderr.on("data", err => {
    console.log(`error output from child process 3:\n ${err}`)
})

//create new directory using child process
var child4 = cp.spawn(progs.folder, ["dummy"]);
child4.on("exit", ()=>{
    console.log("finished creating directory from child process 4\n")
})

//copy file dummy.txt into new file dummy2.txt inside dummy directory, using child process
var child5 = cp.spawn(progs.copy, ["dummy.txt", "dummy2.txt"], {cwd: "dummy"});
child5.on("exit", ()=>{
    console.log("copying finished from child process 5\n");
})

// //delete file dummy2.txt inside dummy directory, using child process
// var child6 = cp.spawn(progs.remove, ["dummy2.txt"], {cwd: "dummy"});
// child6.on("exit", ()=>{
//     console.log("deleting finished from child process 6\n");
// })

//Important: listening for errors
//spawning a new child process in an unknown directory will result in error
var child7 = cp.spawn(progs.list, ["-l"], {cwd: "pub"})
child7.on("error", (err) =>{
    console.log(`Error occured from child process 7:\n ${err}\n`)
})