'use strict';

var index = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array', function (st) {
		st['throws'](function () { index(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { index(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(index, t);

	t.end();
});
