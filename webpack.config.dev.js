const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    // if not defined default port is 8080
    port: 8000,
    // proxy: {
    //   "/api": process.env.API_URL, // be careful with api prefix if you let empty "/" it breaks the react-router and believe it's a api call
    // },
    historyApiFallback: true, // handle react-router-dom browser history on reload page
    hot: true,
    // writeToDisk: true // instead of memory read
  },
  devtool: "eval-source-map",
});
