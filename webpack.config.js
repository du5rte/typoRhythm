// WEBPACK CONFIGURATION

// For instructions about this file refer to:
// http://webpack.github.io
var webpack  = require('webpack')

// Development Settings
var settings = require('./settings')

module.exports = {

  debug: true,

  devtool: settings.development ? '#eval-source-map' : null,

  context: settings.development ? `${__dirname}/${settings.paths.demo}` : `${__dirname}/${settings.paths.source}`,

  entry: {
    typorhythm: settings.development ? ['webpack-hot-middleware/client?reload=true', './'] : [`./${settings.name}`]
  },

  output: {
    filename: `[name].min.js`,
    path: settings.development ? `${__dirname}/${settings.paths.demo}` : `${__dirname}/${settings.paths.source}`
  },

  resolve: {
    extensions: ['', '.js','.jsx']
  },

  plugins: settings.development ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

  module: {
    preLoaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      // Scripts
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
