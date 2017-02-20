import webpack from 'webpack';
const bourbon = require('bourbon');

export default {
  entry: `${__dirname}/source/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?includePaths[]=" + bourbon.includePaths + "&sourceMap"]
      },
      {
        test: /\.woff$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
