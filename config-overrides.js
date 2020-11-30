/* config-overrides.js */
const { override, adjustStyleLoaders } = require('customize-cra')
const loaderUtils = require('loader-utils')
const path = require('path')
const createMinifier = require('css-loader-minify-class')

module.exports = override(
  process.env.NODE_ENV === 'production' &&
  adjustStyleLoaders(({ use: [, css] }) => {
    if (css.options.modules) {
      css.options.modules.getLocalIdent = createMinifier()
    }
  })
)
