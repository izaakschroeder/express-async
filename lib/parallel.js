
'use strict';

var util = require('./util');

function parallel(middlewares) {

	util.checkMiddlewareList(middlewares);

	return function run(req, res, next) {
		// Count how many middlewares there are.
		var remaining = middlewares.length;
		// Called after each middleware has run.
		function ran(err) {
			if (err || --remaining <= 0) {
				next(err);
			}
		}
		// Loop through all the middlewares and call them.
		for (var i = 0; i < middlewares.length; ++i) {
			middlewares[i](req, res, ran);
		}
	};
}

module.exports = parallel;
