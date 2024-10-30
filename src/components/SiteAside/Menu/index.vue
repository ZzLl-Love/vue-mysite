<!--
  home + 首页
         文章
         关于我
-->
<template>
  <div class="menu-container">
<!--  todo 这里selected: true a 标签有selected样式，否则就没有，怎么回事  -->
    <RouterLink
        v-for="item in items"
        :key="item.link"
        :to="item.link"
        :exact="item.exact"
    >
      <div class="icon selected">
        <Icon :type="item.icon"/>
      </div>
      <span>{{item.title}}</span>
    </RouterLink>
  </div>
</template>

<script>
 import Icon from '@/components/Icon.vue'
    export default {
      components: {
        Icon,
      },

      data(){
        return {
          items: [
            {
              link: "/",
              title: "首页",
              icon: 'home',
              exact: true,
            },
            {
              link: "/article",
              title: "文章",
              icon: 'blog',
              // startWith: true, //只要当前路径以link开头，当前菜单就是选中的状态
              exact: false, //激活状态是否要精确匹配
            },
            {
              link: "/about",
              title: "关于我",
              icon: 'about',
              exact: true,
            },
            {
              link: "/project",
              title: "项目&效果",
              icon: 'code',
              exact: true,
            },
            {
              link: "/message",
              title: "留言板",
              icon: 'chat',
              exact: true,
            },

          ]
        }
      },

      methods: {
        // isSelected(item){
        //   var link = item.link.toLowerCase(); //菜单的链接地址
        //   var curPathname = location.pathname.toLowerCase(); //当前浏览器的访问路径
        //
        //    //处理文档的选中逻辑
        //   if(item.startWith){
        //     return curPathname.startsWith(link)
        //   }
        //
        //   return curPathname == link;
        // }
      }

    }
</script>


<style scoped lang="less">
    @import "~@/styles/var.less";
    @import "~@/styles/global.less";
    .menu-container{
      color: #b4b8bc;
      margin: 24px 0;

      a {
        //&.selected{
        //  background: darken(@words, 3%);
        //}
        &.router-link-active{
          background: darken(@words, 3%);
        }
        display: block;
        display: flex;
        padding:0 50px;
        align-items: center;
        height: 45px;

        white-space: nowrap;

        .icon {
          width: 24px;
        }

        &:hover{
          color: #fff;
        }
      }


    }
</style>