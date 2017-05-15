// webpack.config.js
/// minification warnings
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;
///
var path = require('path');

module.exports = {
  entry: './frontend/halalhub.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  /// minification warnings
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin()
  ],
  ///
};
