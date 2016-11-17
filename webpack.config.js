module.exports = {
  context: __dirname,
  entry: [
    './src/index.js',
  ],
  output: {
    path: './dist/dist',
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader?modules' },
      { test: /\.js$/,   loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?name=[path][name].[ext]?[hash]' }
    ]
  }
}
