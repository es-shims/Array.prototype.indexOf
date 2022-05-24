'use strict';

var implementation = require('../implementation');
var callBind = require('call-bind');
var test = require('tape');
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad receiver', { skip: !hasStrictMode }, function (st) {
		/* eslint no-useless-call: 1 */
		st['throws'](function () { implementation.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { implementation.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(implementation), t);

	t.end();
});
