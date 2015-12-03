module.exports = {
  entry: "./app/App.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  devServer: {
    inline: true,
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
