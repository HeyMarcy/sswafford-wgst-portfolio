module.exports = {
  context: __dirname,
  entry: [
    './src/index.js',
  ],
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader?modules' },
      { test: /\.js$/,   loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}
