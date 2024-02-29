const request = require('request');
const { expect } = require('chai');

describe('api.js API Tests', () => {
  it('correct status code and result test', () => new Promise((done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
    done();
  }));
});
