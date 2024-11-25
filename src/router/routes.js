import Home from "@/views/Home/index.vue";
import About from "@/views/About/index.vue";
import Blog from "@/views/Blog/index.vue";
import Project from "@/views/Project/index.vue";
import Message from "@/views/Message/index.vue";
import BlogDetail from "@/views/Blog/Datail.vue"

//单独将路由规则写在一个js文件中
export default [
    {
        path: '/',
        component: Home,
        meta: {
            title: "首页"
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于我'
        }
    },
    {
        name: "Blog",
        path: '/article',
        component: Blog,
        meta: {
            title: '文章'
        }
    },
    {
        name: "CategoryBlog",
        path: '/article/cate/:categoryId',
        component: Blog,
        meta: {
            title: '1234'
        }
    },
    {
        name: "BlogDetail",
        path: '/article/:id',
        component: BlogDetail,
        meta: {
            title: '文章详情'
        }
    },
    {
        path: '/project',
        component: Project,
        meta: {
            title: '项目&效果'
        }
    },
    {
        path: '/message',
        component: Message,
        meta: {
            title: '留言板'
        }
    },
]