
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./biswap-org-sdk.cjs.production.min.js')
} else {
  module.exports = require('./biswap-org-sdk.cjs.development.js')
}
