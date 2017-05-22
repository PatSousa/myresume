const ExtractTextPlugin = require('extract-text-webpack-plugin');
const process = require('process');

/**
 * PostCSS tester and extractor
 * This rule searches for component css files and combines them in one big css file.
 */
module.exports = {
    test: /.(css)$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[local]-[hash:base64:5]',
                    sourceMap: true
                }
            },
            'sass-loader',
            'postcss-loader'
        ]
    }),
};
