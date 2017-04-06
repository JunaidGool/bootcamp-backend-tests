const countAllFromTown = require('../AllFromTown');
const assert = require('assert');

describe('countAllFromTown function', function(){

    it('takes regNumbers and returns how many regNumbers for Stellies', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('takes regNumbers and returns how many regNumbers for Stellies', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
});
