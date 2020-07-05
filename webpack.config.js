const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: {
    index: [path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].bundle.js?[chunkhash]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          // options: {
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './',
          limit: 100000,
        },
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // }
    ],
  },
  plugins: [
    // new ManifestPlugin(),
    new ManifestPlugin({
      fileName: 'webpackManifest.json',
      // basePath: __dirname,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/**.*.css', '**/**.*.css.map', '**/precache-manifest.*.js'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
  ],
  optimization: {
    // removeEmptyChunks 비어있는 청크를 감지하고 제거
    removeEmptyChunks: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap : true,
        // cache: true,
        // parallel: true,
        uglifyOptions: {
          mangle: {
            safari10: true,
          },
        },
      }),
      // css 압축
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  resolve: {
    modules: [
      './node_modules',
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
      // contentBase: __dirname + "./",
      // inline: true,
      // hot: true,
      host: "localhost",
      port: 8800
  },
};
