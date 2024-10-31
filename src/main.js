import "./mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from '@/router'
import "./api/banner"
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// import * as blogApi from './api/blog'
//
// blogApi.getBlogType().then(res => console.log("分类",res))
// blogApi.getBlogs(2, 28, 3).then(res => console.log("博客数据",res))

//测试获取单个博客评论信息
import * as api from './api/blog'
// api.getBlog('123').then(res => {
//   console.log("单个博客信息:",res)
// })

// 测试 提交博客
// api.emitComment({
//   nickname: '昵称',
//   content: '评论内容',
//   blogId: '123',
// }).then(res => {
//   console.log('提交博客',res);
// })

//测试获取博客评论
api.getComments('123').then(res => {
  console.log('获取博客评论',res);
})