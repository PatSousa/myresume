module.exports = {
  test: /\.jsx?$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /node_modules|bower_components|build|gh-pages/
};