'use strict';

/*
 * var canDistinguishSparseFromUndefined = 0 in [undefined]; // IE 6 - 8 have a bug where this returns false.
 * var undefinedIfNoSparseBug = canDistinguishSparseFromUndefined ? undefined : { valueOf: function () { return 0; } };
 */

module.exports = function (indexOf, t) {
	t.equal(indexOf([], undefined), -1, 'empty array + undefined yields -1');
	t.equal(indexOf([1], 1), 0, 'array + only item yields its index');
	t.equal(indexOf([NaN], NaN), -1, 'array with NaN + NaN yields -1');
	// eslint-disable-next-line no-sparse-arrays
	t.equal(indexOf([1, , 3], undefined), -1, 'sparse array + undefined yields -1');
};
