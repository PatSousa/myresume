/**
 * Search for font files and provide them for use in css
 */
module.exports = {
    test:  /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader?prefix=fonts/&name=../fonts/[name].[ext]'
};
