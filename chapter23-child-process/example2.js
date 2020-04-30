//child_process.exec(command, {options}, {callback})

const cp = require("child_process");

var progs = {
    list: "ls",
    remove: "rm",
    add: "touch"
}
var child1 = cp.exec(progs.add + " dummy2.txt", {cwd: "dummy"}, (error, stdout, stderr) => {
    if (error) {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    } else {
        console.log("created dummy2.txt inside dummy folder using child 1");
        console.log(stdout);
    }
})

var child2 = cp.exec(progs.remove + " -r dummy2.txt", {cwd: "dummy"}, (error, stdout, stderr) => {
    if (error) {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    } else {
        console.log("removed dummy2.txt from dummy folder using child 2");
        console.log(stdout);
    }
})

var child3 = cp.exec(progs.remove + " -r unknown.txt", {cwd: "dummy"}, (error, stdout, stderr) => {
    if (error) {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    } else {
        console.log("removed dummy2.txt from dummy folder using child 2");
        console.log(stdout);
    }
})