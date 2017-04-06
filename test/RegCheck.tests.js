const regCheck = require('../RegCheck');
const assert = require('assert');


describe('regCheck function', function(){

    it('checks if a regNum is for GP,L,EC,MP', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should return all registrations from Bellville', function(){
        assert.equal(false, regCheck('DV 23 NB GP', 'EC'));
    });
});
