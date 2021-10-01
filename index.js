'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2021/RequireObjectCoercible');
var callBound = require('call-bind/callBound');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var $slice = callBound('Array.prototype.slice');

// eslint-disable-next-line no-unused-vars
var boundIndexOf = function indexOf(array, searchElement) {
	RequireObjectCoercible(array);
	return polyfill.apply(array, $slice(arguments, 1));
};
define(boundIndexOf, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundIndexOf;
