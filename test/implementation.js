'use strict';

var indexOf = require('../implementation');
var callBind = require('call-bind');
var bind = require('function-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](bind.call(indexOf, null, undefined, 'a'), TypeError, 'undefined is not an object');
		st['throws'](bind.call(indexOf, null, null, 'a'), TypeError, 'null is not an object');
		st.end();
	});

	runTests(callBind(indexOf), t);

	t.end();
});
