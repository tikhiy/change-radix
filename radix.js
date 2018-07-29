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
