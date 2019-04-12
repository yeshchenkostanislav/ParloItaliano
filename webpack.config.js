const path = require('path');

module.exports = {
  mode: "development",
  watch: true,

  context: path.resolve(__dirname, 'src/js'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'src/js'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env",
              {
                "targets": {
                  "browsers": ['last 2 versions', 'ie >= 11']
                }
              }
            ]
          ]
        }
      }
    }]
  }
};