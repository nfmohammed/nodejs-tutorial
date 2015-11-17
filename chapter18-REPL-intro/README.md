## Command Line Tool - REPL

- Node comes with command line tool called REPL

- REPL = Read Eval Print Loop

- REPL allows you to test javascript code one line at a time and see the results

- To start REPL CLI, just type `node` in terminal. Now you can write javascritp code and REPL will evaluate and show the result

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter18-REPL (master●)
        $ node
        >
- let's begin with typing `global` and see the output. REPL will print all the global properties and function. 

- next, let's type `require` and it will show that `require` is a function with several properties and methods
        
        > require
        { [Function: require]
          resolve: [Function],
          main: undefined,
          extensions:
           { '.js': [Function],
             '.json': [Function],
             '.node': [Function: dlopen] },
          registerExtension: [Function],
          cache: {} }

- we can define variables in REPL and they will be stored in memory

        > a = 10
        10
        
        > b = 20
        20
        
        > a + b
        30
        
        > c = "Flights"
        'Flights'
        
        > a + c
        '10Flights'
        
        > a / c
        NaN
        
        > d
        ReferenceError: d is not defined
            at repl:1:1
            at REPLServer.defaultEval (repl.js:132:27)
            at bound (domain.js:254:14)
            at REPLServer.runBound [as eval] (domain.js:267:12)
            at REPLServer.<anonymous> (repl.js:279:12)
            at REPLServer.emit (events.js:107:17)
            at REPLServer.Interface._onLine (readline.js:214:10)
            at REPLServer.Interface._line (readline.js:553:8)
            at REPLServer.Interface._ttyWrite (readline.js:830:14)
            at ReadStream.onkeypress (readline.js:109:10)

- we can define functions in REPL. 

        > d = function(value){ console.log(value + 10) };
        [Function]
        > d(a)
        20
        undefined    //This returns `undefined` because nothing is return in the function

        > e = function(value){ console.log(value+10); return 'finished' };
        [Function]
        > e(a)
        20
        'finished'

        > f = function(value){ return (value+10) };
        [Function]
        > f(a)
        20      //returning only value