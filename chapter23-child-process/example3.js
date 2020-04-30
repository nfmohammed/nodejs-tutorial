//child_process.execFile(file, [args], {options}, callback)

//In this example, we will compile cpp program and run it

const cp = require("child_process");
const compiler = "g++"; //compiler to compile c++
const version = "-std=c++11"; //compiler arg
const out = "-o";
const infile = "hello.cpp";
const outfile = "hello.out";


//command: g++ -std=c++11 -o hello.out hello.cpp

var child1 = cp.execFile(compiler, [version, out, outfile, infile], (error, out, err)=> {
    if (error) {
        throw error
    } else {
        console.log("compilation successful!");
        console.log("executing now...");
        var executable = `./${outfile}`
        var runner = cp.execFile(executable, ["Naseer"], (error, out, err)=> {
            if (error) {
                throw error;
            } else {
                console.log(out);
            }
        })
    }
})