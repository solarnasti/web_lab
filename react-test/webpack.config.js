const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.jsx",
    output:{
        path:path.join(__dirname, "/dist"),
        filename:"index_bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.jsx$/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
}