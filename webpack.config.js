const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html"
    })]
}