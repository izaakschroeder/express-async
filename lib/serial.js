
'use strict';

var util = require('./util');

function serial(middlewares) {

	util.checkMiddlewareList(middlewares);

	return function dispatch(req, res, next) {
		function handle(i) {
			if (i >= middlewares.length) {
				next();
			} else {
				middlewares[i](req, res, function done(err) {
					if (err) {
						next(err);
					} else {
						handle(i + 1);
					}
				});
			}
		}
		handle(0);
	};
}

module.exports = serial;
