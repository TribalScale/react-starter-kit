var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/main.jsx']
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'js/bundle.js'
  },
  resolve: {extensions: ['', '.js', '.jsx']},
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ]
};
