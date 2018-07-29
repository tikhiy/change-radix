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
