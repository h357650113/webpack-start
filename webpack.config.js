const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: "development",
  entry: {
      app: './src/index.js',
      // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // 对象化元素 
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    }),
    new HtmlWebpackPlugin({
        title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  }
};
