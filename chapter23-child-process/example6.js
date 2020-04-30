//send messages from parent to child process


const cp = require('child_process');

const path = require('path');

var child2 = cp.fork("forkchild2.js", {cwd: './modules'});

child2.on("exit", ()=>{
    console.log("child2 terminated");
})

//send message to child every second
let interval = setInterval(()=>{
    child2.send({name:"Naseer", city: "Chicago"});
}, 1000)

//terminate child process after 5 sec.
setTimeout(function(){
    clearInterval(interval);
    child2.kill()
}, 5000);

//print message before ending main process
process.on("exit", () => {
    console.log("Now ending main process.......");
})