const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  console.log(`Mode ${argv.mode}`)
  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist/docs'),
      filename: 'bundle.js',
      publicPath: ''
    },
    devServer: {
      static: path.resolve(__dirname, './dist/docs'),
      compress: true,
      port: 8080,
      open: ['/rules']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules'
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `rules/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/rules/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `license/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/license/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `content/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/content/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `policy/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/policy/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `agreement/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/agreement/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `confidentiality/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/confidentiality/index.html',
        publicPath: '../'
      }),
      new HtmlWebpackPlugin({
        filename: `agency/index.${argv.mode === 'development' ? 'html' : 'php'}`,
        template: './src/agency/index.html',
        publicPath: '../'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin()
    ]
  }
}
