'use strict';

module.exports = function (t, a) {
	a.deep(t.call({ 1: 1, 2: 2, 3: 3, 4: 4 },
		function (value, key) { return !!(value%2); }), { 1: 1, 3: 3 });
};
