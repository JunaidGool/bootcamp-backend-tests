const fromWhere = require('../fromWhere');
const assert = require('assert');

describe('fromWhere function', function(){

    it('takes a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('takes a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('takes a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });

});
