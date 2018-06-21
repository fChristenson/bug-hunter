const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "public", "main"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "public", "index.html")
    })
  ],
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/,
        exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      }
    ]
  }
};
