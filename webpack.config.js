const webpack = require('webpack');
const path = require('path');


module.exports = {
  devServer: {
  contentBase: path.join(__dirname, "app"),
  compress: true,
  port: 9000
  },

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:9000',
    path.resolve(__dirname, 'app')
  ],

  output: {
    path: path.resolve(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [ 
    {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'app'),
      query: {
        cacheDirectory: true,      
        presets: [ ['es2015', {'modules': false} ], 'stage-0', 'react']
      },
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: [".js", ".jsx"],

    alias: {
      components: path.resolve(__dirname, 'app/components/'),
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ],
};