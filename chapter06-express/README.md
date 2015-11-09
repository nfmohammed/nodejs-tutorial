### Chapter06 - Express

- In previous tutorial we have seen how to create URL routes and associate them with flight objects. 

- What if, there is large number of flights data ? Creating them manually will NOT be feasible. 

- The solution is to use URL pattern matching provided by **Express**

#### Code Changes

- We have created flights data inside *airline/data/index.js*. When we gonna start the application, we will load this data and convert it into flight objects

- File: **airline/routes/index.js** contains the main logic of loading flights data, flights module and converting flightData to flightObject.  
    Based on the flight number from input URL, this module will return corresponding flight object

-  File changes in  **airline/app.js**:

                app.get('/flight/:number', routes.flight);

#### Commands

- Download dependencies using the command `$ node install`

- To start the app `$ node app` and make sure the following links work fine:

        - <http://localhost:3000/flight/13>
        - <http://localhost:3000/flight/18>
        - <http://localhost:3000/flight/15>  (this should return error page)

