const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('5-payment.test.js', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    sinon.assert.callCount(consoleLogSpy, 1);
  });

  it('should call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
    sinon.assert.callCount(consoleLogSpy, 1);
  });
});
