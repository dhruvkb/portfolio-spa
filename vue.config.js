module.exports = {
  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.content\.html$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'content/[name].[hash:8].[ext]'
      })
  }
}
