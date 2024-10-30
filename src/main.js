import "./mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from '@/router'
import "./api/banner"
Vue.config.productionTip = false

// import * as blogApi from './api/blog'
//
// blogApi.getBlogType().then(res => console.log("分类",res))
// blogApi.getBlogs(2, 28, 3).then(res => console.log("博客数据",res))


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



