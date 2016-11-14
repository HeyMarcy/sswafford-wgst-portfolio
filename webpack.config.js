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
      { test: /\.js$/,   loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
