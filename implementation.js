'use strict';

var Get = require('es-abstract/2023/Get');
var HasProperty = require('es-abstract/2023/HasProperty');
var LengthOfArrayLike = require('es-abstract/2023/LengthOfArrayLike');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2023/ToString');

var callBound = require('call-bind/callBound');
var isNegativeZero = require('is-negative-zero');
var isString = require('is-string');
var $Object = require('es-object-atoms');

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var $split = callBound('String.prototype.split');

module.exports = function indexOf(searchElement) {
	var OO = ToObject(this);
	var O = splitString && isString(OO) ? $split(OO, '') : OO;
	var len = LengthOfArrayLike(O, 'length');

	if (len === 0) {
		return -1;
	}

	var fromIndex;
	if (arguments.length > 1) {
		fromIndex = arguments[1];
	}
	var n = ToIntegerOrInfinity(fromIndex);
	if (n >= len) {
		return -1;
	}
	var k;
	if (n >= 0) {
		k = isNegativeZero(n) ? 0 : n;
	} else {
		k = len + n;
		if (k < 0) {
			k = 0;
		}
	}

	while (k < len) {
		var kPresent = HasProperty(O, ToString(k));
		if (kPresent) {
			var elementK = Get(O, ToString(k));
			var same = searchElement === elementK;
			if (same) {
				return k;
			}
		}
		k += 1;
	}
	return -1;
};
