var path = require("path");
module.exports = {
  entry: {
    app: ["./src/main.jsx"]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
