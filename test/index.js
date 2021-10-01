'use strict';

var indexOf = require('..');
var callBind = require('call-bind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](callBind(indexOf, null, undefined, 'a'), TypeError, 'undefined is not an object');
		st['throws'](callBind(indexOf, null, null, 'a'), TypeError, 'null is not an object');
		st.end();
	});

	runTests(indexOf, t);

	t.end();
});
