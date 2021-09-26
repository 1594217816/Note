//创建webpack配置文件，并初始化基本配置

// 1. 导入 HTML 插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin');

const path = require('path');

// 2. 创建 HTML 插件的示例对象
const htmlplugin = new HtmlPlugin({
    template: './src/index.html', // 指定源文件的存放路径
    filename: './index.html' // 指定生成的文件的存放路径
})
module.exports = {
    // 代表webpack 运行的模式， 可选值有两个 development 和 production
    // 结论：开发的时候用 development，因为追求的是打包的速度而不是体积
    // 反过来，发布上线的时候一定要使用production，因为上线追求的是体积小，而不是打包速度快
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'js/bundle.js' // 输出文件的名称
    },
    plugins: [htmlplugin],   // 指定生成的文件的存放路径
    devServer: {
        open: true, // 初次打包完成后，自动打开浏览器
        host: '127.0.0.1', // 实时打包所使用的主机地址
        port: 80  // 实时打包时所使用的端口号
    },
    module: { // 所有第三方文件模块的匹配规则
        rules: [ // 文件后缀名的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|.png|.gif$/, use: 'url-loader?limit=1&outputPath=images' } // 如果loader只有一个，可以直接写成字符串
        ]
    }
}