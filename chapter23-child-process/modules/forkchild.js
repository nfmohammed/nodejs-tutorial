var data = process.argv.splice(2);
console.log(data);

//$ node ./modules/forkchild.js hello1 hello2
//output: ["hello1", "hello2"]

function sayHello(names) {
    names.forEach(function(name){
        process.send(`Greetings ${name}`)
    }, this);
}

sayHello(data);

