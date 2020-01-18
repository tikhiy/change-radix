'use strict'

const map = require('./map')

/**
 * @memberof module:change-radix
 * @param   {number} number A typical JavaScript unsigned number.
 * @param   {number} base   The new base you want. Must be between 2 and 62.
 * @returns {string}
 * @example
 * radix(1.234e50, 62); // -> 'NK7qkfsZSrqYB7KGPtq9zoolE4Te'
 * radix(1000, 13);     // -> '5bc'
 * radix(32, 5);        // -. '112'
 */
const radix = (number, base) => {
  if (number !== number || number < 0 || base < 2 || base > 62) {
    return NaN
  }

  let power = 1

  while (true) {
    const test = Math.pow(base, power += 1)

    if (test > number) {
      power -= 1
      break
    }
  }

  let result = ''

  for (let i = power; i >= 0; i -= 1) {
    const temp      = Math.pow(base, i)
    const remaining = Math.floor(number / temp)
    number -= remaining * temp
    result += map[remaining]
  }

  return result
}

module.exports = radix
