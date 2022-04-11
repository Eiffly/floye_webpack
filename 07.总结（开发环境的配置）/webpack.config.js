const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 打包css资源
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //打包less资源
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 打包图片资源
            {
                // 问题：默认处理不了html中img图片
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 使用一个loader
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    esModule: false,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs'
                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader',
            },
            // 打包其他资源(除了html/js/css/png资源以外的资源)
            {
                // 排除css/js/html资源
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        //开发服务器devserver ：自动编译、自动打开浏览器、自动刷新浏览器
        // 特点：只会在内存中编译打包，不会有任何输出
        //项目构建后路径
        contentBase: resolve(__dirname, 'build'),
        //启动 gzip压缩
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器
        open: true
    }
};
