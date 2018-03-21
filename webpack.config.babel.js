/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
      entry: ['./src/index'],
      output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
      },
      module: {
            rules: [
                  {
                        test: /\.tsx?$/,
                        use: ['babel-loader', 'awesome-typescript-loader'],
                        exclude: /node-modules/,
                  },
                  {
                        test: /\.css$/,
                        loader: ['style-loader', 'css-loader'],
                        exclude: /node-modules/,
                  }
            ]
      },
      resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
      devtool: 'eval-source-map'
}
