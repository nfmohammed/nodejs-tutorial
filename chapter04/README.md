## NodeJS Tutorial - chapter 04

### Module Caching and how to avoid it

- Let's see how the module gets cached. For this, we are using the flight module from previous chapter and created a new app.js file like below:

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter04 (master●●)
        $ cat app.js
        var flight = require('./flight');

        flight.setOrigin('LAX')
        flight.setDestination('DCA')
        flight.setNumber(462)

        console.log(flight.getInfo());

        var anotherFlight = require('./flight');

        console.log(anotherFlight.getInfo());

- If we run app.js then ideally we should expect the *flight* details should be printed out and NULLs should be printed for *anotherFlight*. But checkout the output below:

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter04 (master●●)
        $ node app.js
        { number: 462, origin: 'LAX', destination: 'DCA' }
        { number: 462, origin: 'LAX', destination: 'DCA' }
        
- Above behavior is due to the fact that we have declared  three variables in index.js {*number, origin,destination* } and regardless of how many times we require *flight* module, these three variables are referenced each time. This will NOT work if we want to re-use flight module for serveral different flights.

### Creating Multiple Objects from same Module

- To make flight module reusable, we have re-written flight module as **flight2/index.js**.   		
	- Everything in this file is within *function* scope.
	- The *for loop* is used instead of setter methods

- Rerun the program and observe that different instances of *flight* objects were created: 
        
        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter04 (master●●)
        $ node app2.js
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1446422946973,
          actualArrive: 1446422946973 }
        Second Flight Information:
        { number: 382,
          origin: 'AUS',
          destination: 'DCA',
          departs: undefined,
          arrives: undefined,
          actualDepart: undefined,
          actualArrive: undefined }
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1446422946973,
          actualArrive: 1446422946973 }

### Creating Multiple Objects from same Module - 2

- Here, we will look at even better way to create multiple object and avoid module caching.

- Checkout the code in **flight3/index.js**. In this example, the module creates a new object and returns to the calling program (i.e. app.js)

- Rerun the program:

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter04 (master●●)
        $ node app3.js
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1446433231350,
          actualArrive: 1446433231350 }
        Second Flight Information:
        { number: 382,
          origin: 'AUS',
          destination: 'DCA',
          departs: undefined,
          arrives: undefined,
          actualDepart: undefined,
          actualArrive: undefined }
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1446433231350,
          actualArrive: 1446433231350 }


### Creating Multiple Objects from same module - 3

- Based on above program, we can even return the base object **Flight** and create new instances of it in the main program (app.js). So, the only changes needed are : instead of return **instance** object, we will return **Flight** object. Checkout the code in ***flight4/index.js***

- Rerun the program: **I am getting error here**

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter04 (master●●)
        $ node app4.js
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1476595133413,
          actualArrive: 1476595133413 }
        Second Flight Information:
        { number: 382,
          origin: 'AUS',
          destination: 'DCA',
          departs: undefined,
          arrives: undefined,
          actualDepart: undefined,
          actualArrive: undefined }
        First Flight Information:
        { number: 847,
          origin: 'PDX',
          destination: 'LAX',
          departs: undefined,
          arrives: undefined,
          actualDepart: 1476595133413,
          actualArrive: 1476595133413 }


#### Exercise

- Based on the Module tutorial above, modify the code such that the program should:
	- track the number of flights 
	- track all destinations served
	- export multiple functinos from the module
	






 
        
 

