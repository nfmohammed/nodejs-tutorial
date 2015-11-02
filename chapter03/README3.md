### Building own module

- Previous documentation in [README.md](README.md) and [README2.md](README2.md)

- Let's start to create our own module **flight** using command `npm init`

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03/flight (master)
        $ npm init
        //as we saw earlier, this will create package.json file
        
        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03/flight (master●)
        $ ls -al
        total 8
        drwxr-xr-x  3 Nmohammed  staff  102 Oct 12 00:05 .
        drwxr-xr-x  8 Nmohammed  staff  272 Oct 12 00:03 ..
        -rw-r--r--  1 Nmohammed  staff  278 Oct 12 00:05 package.json
        
- Now lets create index.js file inside flight folder. It is **index.js** that gets loaded when this module is loaded by other application.

- Checkout the code inside *index.js*, it contains simple code that allows users to set its local variable and print them out

- Let's create a app **flight-app.js** that will make use of **flight** module

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03 (master●)
        $ cat flight-app.js
        var flight = require('./flight') //this loads index.js file inside flight folder

        flight.setOrigin('LAX')
        flight.setDestination('DCA')
        flight.setNumber(462)

        console.log(flight.getInfo())

- Lastly, run the app:

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03 (master●)
		$ node flight-app.js
		{ number: 462, origin: 'LAX', destination: 'DCA' }
		
#### Notes

- In above we have seen that - when a module is loaded, the **index.js** is loaded. If we want to change that, then we can do the following:

	- rename *index.js* file to something else like *module.js*
	- edit *package.json* file and change *main* property from `index.js` to `module.js`
	- now, whenever *flight* module is loaded, the **module.js** file is gets called

#### Continue

- Read [chapter04/README4.md](../chapter04/README.md) to learn module caching and how to avoid it.