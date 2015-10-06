## Basics

- Let's first look at `example1.js` and `announce.js` files. This example is to show, how to import a file in nodeJS
		
		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node example1.js
		Announcing: Node Essential Training

- Next, look at `example2.js` and `relay/index.js` files. This example is to show: 
	- how to import file from a folder
	- affect of local and global variable

- outputs:
		
		//example with prefix as global variable
		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node example2.js
		Attention: Ticket counter closes at 10PM
		
		//example with prefix as local variable
		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node example2.js
		Relaying: Ticket counter closes at 10PM

- Next, look at `example3.js` and `proclaim.js` files. This examples shows how we can return multiple functions from a module 'proclaim.js'
		
		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node example3.js
		proclaiming: we have extra seats available
		PROCLAIMING: ALL FLIGHTS CANCELLED.

- Next, look at `example4.js`. Here we will import core module that came with nodeJS installation:

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node example4.js
		This code is running on: Darwin

- Next, look at a simple `server.js` file. When node program is run, the event loop is started and it keep looking for http requests. If a request is received, the `handleRequest` method is called. Run the server and see the output on browser <http://localhost:3000/> 

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter02 (master●)
		$ node server.js