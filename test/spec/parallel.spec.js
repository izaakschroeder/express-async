
'use strict';

var parallel = require('parallel');

describe('parallel', function() {
	it('should fail if an array is not given', function() {
		expect(function() {
			parallel(true);
		}).to.throw(TypeError);
	});

	it('should call all middlewares', function() {

	});

	it('should bubble up errors', function() {

	});

});
