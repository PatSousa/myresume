var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://127.0.0.1:3000/',
      'webpack/hot/only-dev-server',
      './src/js/index'
  ],
  output: {
      path: path.resolve(__dirname, 'static', 'frontend'),
      filename: "[name]-[hash].js",
      publicPath: '/static/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  devServer: {
		noInfo: true,
		hot: true,
    inline: true,
    proxy: {
      "**": "http://127.0.0.1:3000"
    }
  },

plugins:[
  require('./plugins/hot-module-replacement'),
  require('./plugins/define-dev'),
  require('./plugins/dashboard'),
  require('./plugins/extract-text')
]

});

