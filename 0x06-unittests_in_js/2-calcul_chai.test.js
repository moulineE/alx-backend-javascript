const chai = require('chai');

const { expect } = chai;

const calculateNumber = require('./2-calcul_chai');

describe('0-calcul.js calculateNumber Tests', () => {
  describe('sum teste', () => {
    it('should return the correct rounded sum', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', -1, -2.5)).to.equal(-3);
      expect(calculateNumber('SUM', -1, -2.6)).to.equal(-4);
    });
  });
  describe('subtract teste', () => {
    it('should return the correct rounded subtract', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', -1, -2.5)).to.equal(1);
      expect(calculateNumber('SUBTRACT', -1, -2.6)).to.equal(2);
    });
  });
  describe('divide teste', () => {
    it('should return the correct rounded divide', () => {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', -1, -2.5)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', -1, -2.6)).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', -1, -0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1, -0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1, 0.4)).to.equal('Error');
    });
  });
});
