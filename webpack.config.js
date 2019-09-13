const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};
