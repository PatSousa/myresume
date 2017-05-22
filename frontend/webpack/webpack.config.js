//require our dependencies
const path = require('path')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context = path.join(__dirname, 'static', 'frontend'),

  entry: {
    "app": './src/js/index.jsx',
  },
  
  output: {
    filename: 'app.js',
      path: path.resolve(__dirname, 'static', 'frontend'),
  },

  plugins: require('./plugins')
  
  [
      // new BundleTracker({filename: './webpack-stats.json'}),
      // new webpack.optimize.CommonsChunkPlugin({
      //           name: ['vendor', 'manifest'], // Specify the common bundle's name.
      //            minChunks: function (module) {
      //              // this assumes your vendor imports exist in the node_modules directory
      //              return module.context && module.context.indexOf('node_modules') !== -1;
      //            }
      //         }),
      // //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      // new webpack.optimize.CommonsChunkPlugin({ 
      //     name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      // })
  ],

  module: {
      rules: require('./rules')
},

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx'] 
  }

};