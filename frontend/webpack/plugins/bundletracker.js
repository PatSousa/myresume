const BundleTracker = require('webpack-bundle-tracker');

module.exports = new BundleTracker({filename: 'webpack-stats.json'});
