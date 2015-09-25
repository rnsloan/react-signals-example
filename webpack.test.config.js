const fs = require('fs');
const webpack = require('webpack');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  name: "test",
  entry: './tests/LoadingBar.js',
  target: 'node',
  output: {
    path: './tests/',
    filename: 'test-bundle.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel'
      }
    ]
  }
}

