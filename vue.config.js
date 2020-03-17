const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join( __dirname, './src' ))
      .set('assets', path.join( __dirname, './src/assets' ))
      .set('components', path.join( __dirname, './src/components' ))
  },
  devServer: {
    open: true,
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true 
      },
      '/index.php': {
        target: 'http://www.qinqin.net',
        changeOrigin: true 
      }
    }
  }
}