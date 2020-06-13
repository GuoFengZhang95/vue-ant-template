const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//生成dist文件夹下的html模板
const { CleanWebpackPlugin } = require('clean-webpack-plugin')//打包前删除dist文件夹
const VueLoaderPlugin = require('vue-loader/lib/plugin')//将定义过的其它规则复制并应用到 .vue 文件里相应语言块
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')//加块第二次构建时间
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')//优化打包日志
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")//分析打包速度

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'../src')
    },
    extensions: [".vue",".js", ".scss", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(c|sc|le|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // 注意 style-loader 和 MiniCssExtractPlugin.loader 不能同时使用，效果相冲
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 22,
              fallback: 'file-loader',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',//生成的文件名称
      template: path.resolve(__dirname, '../public/index.html'),//模版源绝对路径
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][hash].css',
    }),
    new VueLoaderPlugin(),
    new HardSourceWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new SpeedMeasurePlugin()
  ]
}