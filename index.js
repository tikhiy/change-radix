'use strict'

/**
 * @module change-radix
 */

if (typeof self !== 'undefined') {
  self.radix = exports
}

exports.radix   = require('./radix')
exports.parse   = require('./parse')
exports.convert = require('./convert')
