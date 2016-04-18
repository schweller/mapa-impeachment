var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: __dirname + "/js/map.js",
  output: {
    path: __dirname + "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "./js/")
        ],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}
