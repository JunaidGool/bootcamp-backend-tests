const isWeekday = require('./isWeekDay');
const assert = require('assert');

describe('isWeekday function', function(){

    it('returns isWeekday', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('returns isWeekday', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});
