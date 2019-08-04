const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin({ parallel: true })]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false
    })
  ],
  externals: {
    // not include react in the bundle
    react: "React",
    "react-dom": "ReactDOM"
  }
});
