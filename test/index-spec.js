const assert = require('assert');
const calculator = require('../index');
describe('calculator', function(){
    describe('add function', function(){
        it('adds numbers', function() {
            let result = calculator.add(1,1);
            assert.equal(result,2);
        });
    });
    describe('subtract function', function(){
        it('subtract numbers', function(){
            let subres = calculator.subtract(5,3);
            assert.equal(subres,3);
        });
    });
});
