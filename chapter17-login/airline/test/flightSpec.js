var app = require('./helpers/app');

var should = require('should'),
    supertest = require('supertest');

describe('Flight Test Suite', function(){
    
    it('should pass',function(done){
        done(); //this will exit the test
    });

    it('should not pass',function(done){
        //throw "don't pass"; //uncomment to see test failing
        done();
    });
    
    it('should return valid flights data for flight 01',function(done){
        
        supertest(app)
        .get('/flight/01')
        .expect(200)
        .end(function(err,res){ 
            //console.log(res) //uncomment to see complete response
            res.status.should.equal(200);
            done(); //complete the test only when the response is received
        });
    });

    it('should return an error for an invalid flight', function(done){  
        supertest(app)
        .get('/flight/999')
        .expect(404)
        .end(function(err,res){
            //console.log(res);
            res.status.should.equal(404);
            done();
        });
    });

    //following tests first makes put request, after the response is received, it again makes get request
    it('should mark the flight as arrived',function(done){

        supertest(app)
        .put('/flight/01/arrived')
        .expect(200)
        .end(function(err,res){

            res.status.should.equal(200);
            res.body.status.should.equal('done');

            supertest(app)
            .get('/flight/01')
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200);
                res.body.actualArrive.should.not.equal(undefined);
                done();
            });
        });
    });


});