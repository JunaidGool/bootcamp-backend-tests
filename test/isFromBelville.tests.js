const isFromBelville = require('./isFromBelville');
const assert = require('assert');


describe('isFromBelville function', function(){

    it('should return all registrations from Belville', function(){
        assert.equal(true, isFromBelville('CY 123'));
    });
    it('should return all registrations from Bellville', function(){
        assert.equal(false, isFromBelville('CA 456'));
    });
});


//
// function isFromBellville(reg)
// {
//   var regPlt = reg.startsWith ("CY");
//   return regPlt;
// };

// isFromBellville ("CY 123")
