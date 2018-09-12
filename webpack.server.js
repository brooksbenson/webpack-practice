const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/server',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'build')
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, config);
