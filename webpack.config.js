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
      { test: /\.(svg|pdf)$/i, loaders: [
          'file?name=[path][name].[ext]?[hash]'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i, loaders: [
          'file?name=[path][name].[ext]?[hash]',
          process.env.NODE_ENV === 'production' ? 'resize?1600' : 'null'
        ]
      }
    ]
  }
}
