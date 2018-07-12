const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/summary.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Custom template'
    }),

    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ],
  resolve: {
    alias: {
      'src': path.resolve('src')
    }
  }
};
