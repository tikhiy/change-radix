'use strict'

const inverted = require('./map').reduce((inverted, char, number) => {
  return (inverted[char] = number), inverted
}, {})

/**
 * @memberof module:change-radix
 * @param   {string} string A number to convert to the decimal base.
 * @param   {number} base   Original base of the number.
 * @returns {number}        Decimal representation of the number.
 * @example
 * parse('NK7qkfsZSrqYB7KGPtq9zoolE4Te', 62); // -> 1.234e+50
 * parse('5bc', 13);                          // -> 1000
 * parse('112', 5);                           // -> 32
 */
const parse = (string, base) => {
  string += ''

  if (base < 2 || base > 62) {
    return NaN
  }

  let result = 0

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] in inverted && inverted[string[i]] < base) {
      result += inverted[string[i]] * Math.pow(base, string.length - i - 1)
    } else {
      return NaN
    }
  }

  return result
}

module.exports = parse
