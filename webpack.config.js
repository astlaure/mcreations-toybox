const path = require('path');
const NodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {webpack.Configuration} */
const clientConfig = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('bin/public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { test: /\.s?css$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // sourceMapContents: false
            }
          }
        ],
      },
      { test: /\.(png|svg|jpe?g|gif)$/, use: 'file-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/assets/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}

/** @type {webpack.Configuration} */
const serverConfig = {
  entry: './src/server/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('bin'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  externals: [NodeExternals()],
  mode: 'development',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ]
  },
  plugins: [],
  devtool: 'source-map',
}

module.exports = [clientConfig, serverConfig];
