const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    // if not defined default port is 8080
    port: 8000,
    proxy: {
      "/": "http://localhost:3000",
    },
    // contentBase: "./dist",
    hot: true,
  },
  devtool: "eval-source-map",
});