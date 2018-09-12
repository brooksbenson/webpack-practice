const MiniCssExtract = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

const config = {
  entry: './src/client',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtract.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtract({
      filename: 'styles.css'
    })
  ]
};

module.exports = merge(baseConfig, config);
