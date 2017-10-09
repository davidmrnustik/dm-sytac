require('dotenv').config();
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production' ? true:false

const plugins = () => {
  let plugin = [extractSass,HtmlWebpackPluginConfig];
  if(PROD){
    plugin.push(UglifyJSPluginConfig);
  }
  return plugin;
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const UglifyJSPluginConfig = new UglifyJSPlugin({
  test: /\.js/,
  sourceMap: true
});

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: PROD
});



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
  plugins: plugins()
}