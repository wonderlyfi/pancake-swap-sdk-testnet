
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pancake-swap-sdk-testnet.cjs.production.min.js')
} else {
  module.exports = require('./pancake-swap-sdk-testnet.cjs.development.js')
}
