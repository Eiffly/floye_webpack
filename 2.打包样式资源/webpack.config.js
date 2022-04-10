const { resolve } = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                //匹配哪些文件
                test: /\.css$/,
                //使用哪些 loader进行处理
                use: [
                    // use数组中 loader执行顺序：从右到左，从下到上依次执行
                    //创建 style标签，将 js中的样式资源插入进行，添加到 head中生效
                    'style-loader',
                    //将 css文件变成 commonjs模块加载 js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //将 less文件编译成 css文件
                    //需要下载 less-loader和 less
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [],
    mode: "development"
}