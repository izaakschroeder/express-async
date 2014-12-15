
'use strict';

var serial = require('serial');

describe('serial', function() {
	it('should fail if an array is not given', function() {
		expect(function() {
			serial(true);
		}).to.throw(TypeError);
	});

	it('should call all middlewares in order', function() {

	});

	it('should bubble up errors', function() {

	});

});
