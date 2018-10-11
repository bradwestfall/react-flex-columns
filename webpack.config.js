const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackDevServerConfig = require('./webpack.devserver.js')

module.exports = {
  devServer: webpackDevServerConfig,
  devtool: 'source-map',
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      // Path to HTML file
      template: './public/index.html'
    })
  ]
}
