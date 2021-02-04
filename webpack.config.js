const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
//     optimization: {
//     minimize: false
//   },
  mode: "production",
  devtool: 'inline-source-map',
  
  
};