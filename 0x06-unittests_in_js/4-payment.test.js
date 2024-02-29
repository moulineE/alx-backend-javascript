const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
calculateNumberStub.returns(10);
const spy = sinon.spy(console, 'log');

sendPaymentRequestToApi(100, 20);

sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
sinon.assert.callCount(calculateNumberStub, 1);
sinon.assert.calledWith(spy, 'The total is: 10');

spy.restore();
