import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project/index.vue";
import Message from "@/views/Message/index.vue";
import BlogDetail from "@/views/Blog/Datail.vue"

//单独将路由规则写在一个js文件中
export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {name:"Blog" ,path: '/article', component: Blog},
    {name: "CategoryBlog",path: '/article/cate/:categoryId', component: Blog},
    {name: "BlogDetail",path: '/article/:id', component: BlogDetail },
    {path: '/project', component: Project},
    {path: '/message', component: Message},
]