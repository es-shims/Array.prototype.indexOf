# array.prototype.indexof <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2015 spec-compliant `Array.prototype.indexof` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://www.ecma-international.org/ecma-262/6.0/).

Because `Array.prototype.indexOf` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var indexOf = require('array.prototype.indexof');
var assert = require('assert');

assert.equal(indexOf([1, 2, 3], 2), 1);
assert.equal(indexOf([1, 0, 1], 1), 0);
assert.equal(indexOf([1, 2, 3], 4), -1);
assert.equal(indexOf([NaN], NaN), -1);
```

```js
var indexOf = require('array.prototype.indexof');
var assert = require('assert');
/* when Array#indexOf is not present */
delete Array.prototype.indexOf;
var shimmedMap = indexOf.shim();
assert.equal(shimmedMap, indexOf.getPolyfill());
assert.equal([1, 2, 3].indexOf(2), 1);
assert.equal([1, 0, 1].indexOf(1), 0);
assert.equal([1, 2, 3].indexOf(4), -1);
assert.equal([NaN].indexOf(NaN), -1);
```

```js
var indexOf = require('array.prototype.indexof');
var assert = require('assert');
/* when Array#indexOf is present */
var shimmedMap = indexOf.shim();
assert.equal(shimmedMap, Array.prototype.indexOf);
assert.equal([1, 2, 3].indexOf(2), 1);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.indexof
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.indexOf.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.indexOf.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.indexOf
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.indexOf/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.indexOf#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.indexof.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.indexof.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.indexof.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.indexof
[codecov-image]: https://codecov.io/gh/es-shims/Array.prototype.indexOf/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Array.prototype.indexOf/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Array.prototype.indexOf
[actions-url]: https://github.com/es-shims/Array.prototype.indexOf/actions
