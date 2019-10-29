const path = require('path')
const dotenv = require('dotenv')
const MiniCss_WP = require('mini-css-extract-plugin')
const HTML_WP = require('html-webpack-plugin')
dotenv.config();

const { NODE_ENV,
        PORT } = process.env

const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'

module.exports= {


  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: MiniCss_WP.loader,
            options: {
              hmr: isDev
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: PORT || 9000,
    hot: true,

  },
  plugins: [
    new MiniCss_WP({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new HTML_WP({
      template: './src/index.html'
    })
  ]
};