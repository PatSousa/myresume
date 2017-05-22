
const webpack = require('webpack');

module.exports = new webpack.optimize.UglifyJsPlugin({
  extractComments: true,
  compress: {
    warnings: false,
    drop_console: true,
    unsafe: true
  }
});
