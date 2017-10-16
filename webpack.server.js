var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'server/server.js'),
  output: {
    path: path.resolve(__dirname, 'server/build'),
    filename: 'server.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  // plugins: [
  //   new webpack.DefinePlugin({ //<--key to reduce React's size
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new webpack.optimize.AggressiveMergingPlugin(),
  //   new CompressionPlugin({
  //     asset: "[path].gz[query]",
  //     algorithm: "gzip",
  //     test: /\.js$|\.css$|\.html$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // ],
  // node: {
  //   __dirname: true,
  // }
};