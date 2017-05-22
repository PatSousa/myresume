const webpack = require('webpack');
/**
 * Optimize moment for webpack
 */

module.exports = new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nl/);
