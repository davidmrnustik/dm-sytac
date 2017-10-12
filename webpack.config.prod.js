require('dotenv').config();
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var UglifyJSPluginConfig = new UglifyJSPlugin({
  test: /\.js/,
  sourceMap: true
});

var extractSass = new ExtractTextPlugin({
  filename: '[name].css'
});

var GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.scss?$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          },{
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })

      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    extractSass,
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin(GLOBALS),
    UglifyJSPluginConfig
  ]
};