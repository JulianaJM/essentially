const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

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
            loader: "css-loader"
            // hack pour les images en background en attendant fix url-loader
            /* options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true
            } */
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jp(e*)g|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "assets/images/[hash]-[name].[ext]"
            }
          }
        ]
      },
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
    new CopyWebpackPlugin([{ from: "src/assets/images", to: "assets/images" }]),
    new ImageminPlugin({
      pngquant: { quality: 10 - 15 },
      plugins: [imageminMozjpeg({ quality: 20, progressive: true })]
    })
  ]
};
