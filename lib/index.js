'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.Hello = void 0;
const Hello = /** @class */ (function () {
	function Hello() {}

	Hello.prototype.say = function () {
		console.log('Hello');
	};

	return Hello;
})();
exports.Hello = Hello;
new Hello().say();
