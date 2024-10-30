const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: [true] 单元测试开启这个
  transpileDependencies: true,   //npm run serve 开启这个

  //碰到有url 中有以 api开头,就代理到后端服务器中()
  //代理具体事情： 1.改变ip+port 2.请求资源路径不变
  devServer: {
    proxy: {
      '/api': {
         target: 'http://www.test-mysite.com' // 后端测试服务器,目前随便写一个
      }
    }
  }

})
