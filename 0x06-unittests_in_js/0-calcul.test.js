const calculateNumber = require("./0-calcul");
const assert = require('assert');

describe('0-calcul.js calculateNumber Tests', function() {
    describe('sum teste', function() {
        it('should return the correct rounded sum', function() {
            assert.strictEqual(calculateNumber(1, 3), 4);
            assert.strictEqual(calculateNumber(1, 3.7), 5);
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
            assert.strictEqual(calculateNumber(-1, -2.5), -3);
            assert.strictEqual(calculateNumber(-1, -2.6), -4);
        });
    });
});