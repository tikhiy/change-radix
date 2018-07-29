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
