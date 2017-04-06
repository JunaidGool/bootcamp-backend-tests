const yearsAgo = require('./yearsAgo');
const assert = require('assert');

describe('yearsAgo function', function(){

    it('returns yearsAgo', function(){
        assert.equal(3, yearsAgo(2014));
    });
    it('returns yearsAgo', function(){
        assert.equal(17, yearsAgo(2000));
    });
});
