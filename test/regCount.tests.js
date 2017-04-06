const countRegNumber = require('./regCount');
const assert = require('assert');

describe('countRegNumber function', function(){

    it('counts regNum in array', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('counts regNum in array', function(){
        assert.equal(5, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});
