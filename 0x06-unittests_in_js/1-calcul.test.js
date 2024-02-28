const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('0-calcul.js calculateNumber Tests', () => {
  describe('sum teste', () => {
    it('should return the correct rounded sum', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', -1, -2.5), -3);
      assert.strictEqual(calculateNumber('SUM', -1, -2.6), -4);
    });
  });
  describe('subtract teste', () => {
    it('should return the correct rounded subtract', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -2.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -2.6), 2);
    });
  });
  describe('divide teste', () => {
    it('should return the correct rounded divide', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1, -2.5), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', -1, -2.6), 0.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', -1, -0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1, -0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1, 0.4), 'Error');
    });
  });
});
