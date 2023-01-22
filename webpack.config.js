const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
      hot: true,
    },
  },
  mode: "development",
};
