const transportFee = require('../transportFee');
const assert = require('assert');

describe('transportFee', function(){

    it('takes shift inputs and returns transportFee', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('takes shift inputs and returns transportFee', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
});
