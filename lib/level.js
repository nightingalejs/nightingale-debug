'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = level;

var _minimatch = require('minimatch');

var _nightingaleLevels = require('nightingale-levels');

var _nightingaleLevels2 = _interopRequireDefault(_nightingaleLevels);

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function
 * @param debugValue
*/function level(debugValue) {
    debugValue = debugValue || '';

    if (!Array.isArray(debugValue)) {
        debugValue = debugValue.trim().split(',');
    }

    if (debugValue.length === 0) {
        return function () {
            let minLevel = arguments.length <= 0 || arguments[0] === undefined ? _nightingaleLevels2.default.INFO : arguments[0];
            return minLevel;
        };
    }

    const minimatchPatterns = debugValue.map(pattern => new _minimatch.Minimatch(pattern));

    return function () {
        let minLevel = arguments.length <= 0 || arguments[0] === undefined ? _nightingaleLevels2.default.INFO : arguments[0];
        let key = arguments[1];
        return minLevel <= _nightingaleLevels2.default.TRACE ? minLevel : minimatchPatterns.some(p => p.match(key)) ? _nightingaleLevels2.default.ALL : minLevel;
    };
}
//# sourceMappingURL=level.js.map