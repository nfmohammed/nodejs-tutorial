## Customer REPL for inspecting App

- In the previous tutorial we have seen the REPL provided by node

- In this lesson, we will see how we can use REPL to inspect our application and make modification to data-set without `http` route

- The starting code has been taken from chapter-17

#### building custome repl

- to create custom repl, just create a file like `repl.js` with following 2 lines of code:
        
        var repl = require('repl');
        repl.start({prompt: 'prompt> '});

- to start custom repl:

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter19-REPL-for-app (master●)
        $ node repl.js
        prompt> a = 10
        10
        prompt> b = 10
        10
        prompt> c = a+b
        20
        prompt>

#### using repl in app

- To use `repl` in our application, include the following code in `server.js`. By adding flight-data to repl context, the data is available for us to modify

        repl = require('repl'), 
        var prompt = repl.start({prompt: 'flight> '});
        prompt.context.data = flightsData; 

- start the application with `node server` command

- on browser, check the flight <http://localhost:3000/flight/13>. Note this flight does not have arrival information

- instead of triggering arrival thru browser get request, we will use repl to invoke arrival method

- checkout the property `data` in repl command lines

        flight> data
        { '13':
           { number: 13,
             origin: 'MKE',
             destination: 'LAX',
             departs: '10:00 AM',
             arrives: '12:00 PM' },
          '16':
           { number: 16,
             origin: 'ORD',
             destination: 'EWR',
             departs: '01:55 PM',
             arrives: '04:00 PM' },
          '18':
           { number: 18,
             origin: 'LAX',
             destination: 'PHX',
             departs: '09:00 AM',
             arrives: '09:30 AM' },
          '33':
           { number: 33,
             origin: 'LAX',
             destination: 'DEN',
             departs: '05:00 PM',
             arrives: '08:00 PM' } }
- we can even checkout specific flight in repl like below:

        flight> data[13]
        { number: 13,
          origin: 'MKE',
          destination: 'LAX',
          departs: '10:00 AM',
          arrives: '12:00 PM' }

- let's invoke `triggerArrive()` method on above data[13] with command `data[13].triggerArrive()`. Note: this is not working for us because author is using different data version than mine

- 
