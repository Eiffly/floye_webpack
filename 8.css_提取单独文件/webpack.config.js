

const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //创建 style标签，将样式放入
                    // 'style-loader',
                    //这个 loader取代 style-loader。作用：提取 js中的 css成单独文件
                    MiniCssExtractPlugin.loader,
                    //将 css文件整合到 js文件中
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            //对输出的 css文件进行重命名
            filename: 'css/built.css'
        })
    ],
    mode: "development"
}