var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DEBUG = (process.argv.indexOf('--release') === -1);

module.exports = {
  entry: {
    app: ['babel-polyfill', 'isomorphic-fetch', './src/main.jsx']
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: DEBUG ? '/js/bundle.js' : '/js/bundle.[hash].js'
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
      },
      {
        test: /\.(eot|svg|png|ttf|woff|woff2)$/,
        loader: "url-loader?limit=100000&name=images/[name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(DEBUG ? '/css/style.css' : '/css/style.[hash].css'),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify(DEBUG ? "development" : "production")
       }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: DEBUG ? false : true,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: DEBUG ? false : true
      }
    })
  ]
};
