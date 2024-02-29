const chai = require('chai');

const { expect } = chai;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('6-payment_token.js getPaymentTokenFromAPI Tests', () => {
  it('should return the correct response', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  }));
});
