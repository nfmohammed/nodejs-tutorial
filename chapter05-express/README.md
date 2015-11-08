### Chapter05 - Express Framework

- Express is a framework for writing server applications

- To install specific verison of Express
    
        $ npm install -g express@3.4.x

- To create application **airline**, run following commands:
        
        //this will create all the necessary files
        $ express airline 
        
        //this will download all the dependencies
        $ cd airline && npm install
        
        //this will start the app
        $ node app

- The application will be up and running at <http://localhost:3000/>

- Let's re-use the **flight2** project that was created in **chapter04**. Copy and paste flight2 inside **airlines** folder

- Inside *routes/index.js*, create two instances of flights - *flightA and flightB* and export them. Here we are sending out json responses

- Inside *airline/app.js*, create two paths and associate them with routes module:

		app.get('/flightA', routes.flightA);
		app.get('/flightB', routes.flightB);

- Start the app:

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter05-express/airline
		$ node app
		
- The flights information will be available with:
	-  <http://localhost:3000/flightA>
	-  <http://localhost:3000/flightB>	