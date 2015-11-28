module.exports = {
  entry: "./index.jsx",
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/, loaders: ['babel?stage=0', 'jsx-loader']
      }
    ]
  }
};