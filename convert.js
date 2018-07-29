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
