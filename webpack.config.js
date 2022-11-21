const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    index: path.resolve(__dirname, './src/index.js') 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: devMode ? '[name].bunde.js' : '[name].bunde.[contenthash].js'
  },
  devServer: {
    allowedHosts: [
      'all'
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body'
      // favicon: path.resolve(__dirname, './src/assets/images/favicon.png')
      // minify: false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader', options: {
              importLoaders: 1,
              modules: {
                loacalIdentName: '[name]__[local]__[hash:base64:5]'
              }
            } 
          },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss', 
              plugins: () => [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  }
}