const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    //development server setting
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true,
        open:true,
        host:'localhost',
        port :port
    },

    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js' // helps to cache.
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },

            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
          }),
    ]
}   