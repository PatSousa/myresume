const ExtractTextPlugin = require('extract-text-webpack-plugin');
const process = require('process');

/**
 * PostCSS tester and extractor
 * This rule searches for component css files and combines them in one big css file.
 */
module.exports = {
    test: /.(scss|css)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            'css-loader?importLoaders=2&modules&localIdentName=[local]--[hash:base64:5]',
            'postcss-loader?parser=postcss-scss',
            'sass-loader'
        ]
    }),
};
