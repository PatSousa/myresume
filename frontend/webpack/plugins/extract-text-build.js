const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Export module css and create a css with [name] and the build [hash].
 */
module.exports = new ExtractTextPlugin({
    filename: '../styles/[name].[hash].css',
    allChunks: true,
    ignoreOrder: true
});
