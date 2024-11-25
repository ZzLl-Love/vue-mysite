import VueRouter from 'vue-router'
import Vue from "vue";
import routes from './routes'

Vue.use(VueRouter); //使用路由插件

//配置路由规则
 const router = new VueRouter({
    // routes: [
    //     // {path: '/', component: Home},
    //     // {path: '/about', component: About},
    //     // {path: '/blog', component: Blog},
    //     // {path: '/project', component: Project},
    //     // {path: '/message', component: Message},
    //     routers,
    // ]
     routes, //
     //配置路由模式，默认为hash
     mode: 'hash'
})

// 路由守卫
router.afterEach((to, from) => {
   if(to.meta.title){
       document.title = to.meta.title;
   }
})

export default  router;
