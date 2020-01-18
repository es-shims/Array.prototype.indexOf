'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayIndexOf() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ indexOf: polyfill },
		{ indexOf: function () { return Array.prototype.indexOf !== polyfill; } }
	);
	return polyfill;
};
