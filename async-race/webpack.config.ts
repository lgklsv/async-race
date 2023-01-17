/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entryPath = path.join(__dirname, 'src', 'index.ts');
const bundlePath = path.join(__dirname, 'dist');
const htmlTemplatePath = path.join(__dirname, 'src', 'index.html');
const assetsPath = path.resolve(__dirname, 'src', 'assets');
// const faviconPath = path.join(__dirname, 'src', 'assets', 'favicon.png'); //TODO

module.exports = {
  entry: entryPath,
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: bundlePath,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async Race',
      alwaysWriteToDisk: true,
      template: htmlTemplatePath,
      inject: 'body',
      // favicon: faviconPath,
      clean: true,
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
        // options: { module: true },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(html)$/i,
        use: ['html-loader'],
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss'],
    alias: { assets: assetsPath },
  },
};
