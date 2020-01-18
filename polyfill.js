'use strict';

var callBind = require('es-abstract/helpers/callBind');
var callBound = require('es-abstract/helpers/callBound');
var $indexOf = callBound('Array.prototype.indexOf', true);
var $arrayIndexOfApply = callBind.apply(Array.prototype.indexOf);

var implementation = require('./implementation');

var patch = function indexOf(searchElement) { // eslint-disable-line no-unused-vars
	var value = $arrayIndexOfApply(this, arguments); // eslint-disable-line no-invalid-this
	if (value === 0 && (1 / value) < 0) {
		return 0;
	}
	return value;
};

module.exports = function getPolyfill() {
	// indexOf when given a position arg of -0 should return +0: https://github.com/tc39/ecma262/pull/316
	if ($indexOf && (1 / $indexOf([true], true, -0)) < 0) {
		return patch;
	}

	return Array.prototype.indexOf || implementation;
};
