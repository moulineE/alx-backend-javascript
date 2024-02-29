const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const spy = sinon.spy(Utils, 'calculateNumber');

sendPaymentRequestToApi(100, 20);

sinon.assert.calledWith(spy, 'SUM', 100, 20);
sinon.assert.callCount(spy, 1);

spy.restore();
