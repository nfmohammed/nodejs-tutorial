var app = require('./helpers/app');

var should = require('should'),
    supertest = require('supertest');

describe('Flight Test Suite', function(){

    it('should pass',function(done){
        done();
    });

    it('should not pass',function(done){
        //throw "don't pass";
        done();
    });
});