const path = require('path')
const baseConfig = require('./webpack.base.config')
const WebpackMerge = require('webpack-merge')
const webpack = require('webpack')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')//压缩css
const TerserWebpackPlugin = require('terser-webpack-plugin')//压缩js 支持es6

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name][hash].js'
  },
  optimization: {
    minimize: true,//生产模式下默认为true 执行优化操作
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // 如果生产环境开启了sourceMap 那么必须设置为true
      }),
    ],
    splitChunks:{
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // only package third parties that are initially dependent
        },
        antDesignVue: {
          name: 'chunk-ant-design-vue', // 单独打包 ant-design-vue
          test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/,// 兼容cnpm
          priority: 20, // 
        },
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BASE_URL:'/'
      })
    })
  ]
}

module.exports = WebpackMerge(baseConfig, prodConfig)