### Chapter12 - Unit Testing

- To get started, take code from previous chapter.

- To install dependencies `npm install`

#### Setting up Test Helper App

- We will create `airline/test` folder to contain all the test data and test code

- The `airline/test/data` folder will contain test-data different that the main-data being used by the application

- The `test/helper/app.js` binds the application with the test data

- The file `flightSpec.js` will import the test-app from helper folder

#### Unit Testing Tools

- We will use three testing tools i.e. *Mocha, Should and SuperTest*.
    - Mocha: Java Script based unit testing framework
    - Should: This is used for assertions
    - SuperTest: This is used to simulate http requests. This module directly tests the routes defined in an application, so there is no need to start up the web-app

- To install these dependencies for testing, use the following command

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter12-unit-testing/airline (master●)
        $ npm install --save-dev mocha


        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter12-unit-testing/airline (master●)
        $ npm install --save-dev should


        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter12-unit-testing/airline (master●)
        $ npm install --save-dev supertest

- Now open *package.json* file and checkout what node has added to it. For me, it is following, it could be different for you

        {
          "name": "application-name",
          "version": "0.0.1",
          "private": true,
          "scripts": {
            "start": "node app.js"
          },
          "dependencies": {
            "express": "3.4.8",
            "jade": "*"
          },
          "devDependencies": {
            "mocha": "^2.3.3",
            "should": "^7.1.1",
            "supertest": "^1.1.0"
          }
        }
- Install **mocha** as global module for running unit test

        $ sudo npm install -g mocha

#### Writing unit tests

- The file 'airline/test/flightSpec.js' contains the unit tests. 

- The `describe` function contains all the tests. You can define a description for your tests, for me *Flight Test Suite*

- Each test is written using **it** function which takes **done** object as argument. You can call *done()* when you want to finish the test

- Code:

        var app = require('./helpers/app');

        var should = require('shoud'),
            supertest = require('supertest');

        describe('Flight Test Suite', function(){

            it('should pass',function(done){
                done();
            });

            it('should not pass',function(done){
                throw "don't pass";
                done();
            });
        });

- To run the tests, run command `mocha` from the root of the project. We should have 1 passing and 1 failing test.
    - if you comment out the `throw` keywork then both tests should pass

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter12-unit-testing/airline (master●)
        $ mocha
        loading flight data for - 01
        loading flight data for - 02
        loading flight data for - 03


          Flight Test Suite
            ✓ should pass
            1) should not pass


          1 passing (7ms)
          1 failing

          1) Flight Test Suite should not pass:
             Error: the string "don't pass" was thrown, throw an Error :)