const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = new WebpackShellPlugin({
  onBuildStart: ['node render-server']
});
