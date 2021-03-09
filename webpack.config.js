const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.join(paths.JS, 'index.js')],
  output: {
    path: paths.DIST,
    filename: 'js/app.bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    open: true,
  },
  // webpack is using html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.bundle.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(paths.SRC, 'images'),
          to: path.join(paths.DIST, 'images'),
        },
      ],
    }),
  ],
  // webpack is using loader
  module: {
    rules: [
      // babel-loader for .js and .jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  // enable importing JS files
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
