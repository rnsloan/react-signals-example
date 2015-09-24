module.exports = {
  entry: "./app.js",
  output: {
    filename: "./bundle.js"
  },
  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?stage=1'
      }
    ]
  }
};

