### Unit Testing HTTP End Points

- The following is an example of testing http end point

         it('should return valid flights data for flight 01',function(done){
                
                supertest(app)
                .get('/flight/01')
                .expect(200)
                .end(function(err,res){
                    res.status.should.equal(200);
                    done(); //complete the test only when the response is received
                });
            });
- In the above test, we are sending Get request to get test flight information. 

- The `end` method is actually responsible for sending the Get request and when server response is received, the function within is invoked.

- Command: `mocha` command should be given at the root of the project

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter13-testing-http/airline (master●●)
        $ mocha
        loading flight data for - 01
        loading flight data for - 02
        loading flight data for - 03


          Flight Test Suite
            ✓ should pass
            ✓ should not pass
        GET /flight/01 200 5ms - 110b
            ✓ should return valid flights data for flight 01
        GET /flight/999 404 1ms - 23b
            ✓ should return an error for an invalid flight
        PUT /flight/01/arrived 200 1ms - 22b
        GET /flight/01 200 1ms - 143b
            ✓ should mark the flight as arrived


          5 passing (42ms)

- In the above tests, we are asserting for valid and error responses. The last test is interesting, it contains 2nd http request within 1st http response 

#### Challenge

- I was giving incorrect get path and was not receiving any response. 

        get('flight/999') - incorrect get request
        get('/flight/999') - correct get request