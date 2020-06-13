const baseConfig = require('./webpack.base.config')
const WebpackMerge = require('webpack-merge')
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    stats: "errors-only",
    proxy: {
      "/dev-api": {
        target: "http://mycms.mumuxili.com",
        changeOrigin: true,
        pathRewrite: { "^/dev-api": "" }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        BASE_URL: '/dev-api'
      })
    })
  ]
}

module.exports = WebpackMerge(baseConfig, devConfig)