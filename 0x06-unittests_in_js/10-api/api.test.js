const request = require('request');
const { expect } = require('chai');

describe('api.js API Tests', () => {
  it('gET / teste', () => new Promise((done) => {
    request.get('http://localhost:7865/', (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
  it('gET /:d teste when d is an int', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/12', (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  }));
  it('gET /:d teste when d is not an int', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/hello', (_err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }));
  it('gET /available_payments teste', () => new Promise((done) => {
    const expectedJson = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get('http://localhost:7865/available_payments', (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedJson);
      done();
    });
  }));
  it('pOST /login teste', () => new Promise((done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: {
        userName: 'testUser',
      },
    };
    request.post(options, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome testUser');
      done();
    });
  }));
});
