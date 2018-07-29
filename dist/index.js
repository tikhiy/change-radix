(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'

const radix = require('./radix')
const parse = require('./parse')

/**
 * @memberof module:change-radix
 * @param {string} string A number.
 * @param {number} oldBase A current base of the number.
 * @param {number} newBase The base you want.
 * @returns {string}
 * @example
 * convert('1010', 2, 5); // -> '20'
 * convert('200', 8, 62); // -> '24'
 */
const convert = (string, oldBase, newBase) => {
  return radix(parse(string, oldBase), newBase)
}

module.exports = convert

},{"./parse":4,"./radix":5}],2:[function(require,module,exports){
'use strict'

/**
 * @module change-radix
 * @wiki
 * const radix = require('change-radix')
 * radix.convert('78xyXY', 62, 2)
 * // -> '110000101110000110101101010100110'
 * radix.radix(5.43e21, 51)
 * // -> 'hrjOqqmhvwyAO'
 * radix.parse('hrjOqqmhvwyAO', 51)
 * // -> 5.43e21
 */

exports.radix   = require('./radix')
exports.parse   = require('./parse')
exports.convert = require('./convert')

},{"./convert":1,"./parse":4,"./radix":5}],3:[function(require,module,exports){
'use strict'

module.exports = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

},{}],4:[function(require,module,exports){
'use strict'

const inverted = require('./map').reduce((inverted, char, number) => {
  return (inverted[char] = number), inverted
}, {})

/**
 * @memberof module:change-radix
 * @param {string} string A number in a 'radix' base.
 * @param {number} radix The radix.
 * @returns {number} A number converted from 'radix' to decimal base.
 * @example
 * parse('NK7qkfsZSrqYB7KGPtq9zoolE4Te', 62); // -> 1.234e+50
 * parse('5bc', 13);                          // -> 1000
 * parse('112', 5);                           // -> 32
 */
const parse = (string, radix) => {
  string += ''

  if (radix < 2 || radix > 62) {
    return NaN
  }

  let result = 0

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] in inverted && inverted[string[i]] < radix) {
      result += inverted[string[i]] * Math.pow(radix, string.length - i - 1)
    } else {
      return NaN
    }
  }

  return result
}

module.exports = parse

},{"./map":3}],5:[function(require,module,exports){
'use strict'

const map = require('./map')

/**
 * @memberof module:change-radix
 * @param {number} number An unsigned number.
 * @param {number} radix The new radix you want, between 2 and 62.
 * @returns {string}
 * @example
 * radix(1.234e50, 62); // -> 'NK7qkfsZSrqYB7KGPtq9zoolE4Te'
 * radix(1000, 13);     // -> '5bc'
 * radix(32, 5);        // -. '112'
 */
const radix = (number, radix) => {
  if (number !== number || number < 0 || radix < 2 || radix > 62) {
    return NaN
  }

  let power = 1

  while (true) {
    const test = Math.pow(radix, power += 1)

    if (test > number) {
      power -= 1
      break
    }
  }

  let result = ''

  for (let i = power; i >= 0; i -= 1) {
    const temp      = Math.pow(radix, i)
    const remaining = Math.floor(number / temp)
    number -= remaining * temp
    result += map[remaining]
  }

  return result
}

module.exports = radix

},{"./map":3}]},{},[2]);
