const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            // hack pour les images en background
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      /*  { // FIXME ne fonctionne pas avec les images en background
        test: /\.(jp(e*)g|png)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }, */
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[hash:8].[ext]",
            outputPath: "assets/images"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([{ from: "src/assets/images", to: "assets/images" }])
  ]
};
