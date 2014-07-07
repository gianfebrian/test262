// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path
 * @description thisArg should be undefined if not provided
 */

var globalThis = this;

[1].find(function () {
	if (this !== globalThis) {
	  $ERROR('#1: this !== globalThis');
	}
});
