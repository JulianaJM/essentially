const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    // if not defined default port is 8080
    port: 8000,
    proxy: {
      "/search": "http://localhost:3000",
      "/searchByName": "http://localhost:3000"
    }
  },
  devtool: "source-map"
});
