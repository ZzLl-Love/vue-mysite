<!--展示博客列表-->
<template>
  <div class="blog-list-container" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
          <div class="thumb" v-if="item.thumb">
            <RouterLink
                :to="{name: 'BlogDetail',
                params: {id:item.id}
              }">
              <img v-lazy="item.thumb"
                   :alt="item.title"
                   :title="item.title"
              />
            </RouterLink>
          </div>
          <div class="main">
            <a href="">
              <RouterLink
                  :to="{name: 'BlogDetail',
                params: {id:item.id}
              }">
                <h2>{{item.title}}</h2>
              </RouterLink>
            </a>
            <div class="aside">
              <span> 日期：{{formatDate(item.createDate)}}</span>
              <span> 浏览：{{item.scanNumber}}</span>
             <span> 评论：{{item.commonentNumber}}</span>
             <RouterLink :to="{
               name: 'CategoryBlog',
               params: {
                 categoryId:item.category.id
               }
             }">
               {{item.category.name}}
             </RouterLink>
            </div>
            <div class="desc">
              {{item.description}}
            </div>
          </div>
      </li>
    </ul>
    <!--分页  -->
    <Pager v-if="data.total"
           :current="routerInfo.page"
           :total="data.total"
           :limit="routerInfo.limit"
           :visible="10"
           @pageChange="handlePageChange"
    />
  </div>
</template>


<script >
import Pager from "@/components/Pager/index.vue";
import fetchData from "@/mixins/fectchData.js";
import {getBlogs} from "@/api/blog";
import {formatDate} from '@/utils'
export default {
   mixins:[fetchData({})],

  created(){
      // console.log(this.routerInfo)
  },

  mounted(){
    this.$refs.container.addEventListener("scroll",this.handleScroll);
    this.$bus.$on("setMainScroll", this.handleScrollToZero);
  },

  //监控路由信息 分页导致路由信息改变  路由信息改变导致 重新请求远程数据
  watch: {
   async $route(newVal,oldVal) {
     this.isLoading = true;
     //新的远程数据  => 新的博客列表的滚动高度为0
     this.$refs.container.scrollTop = 0;
     this.data = await this.fetchData();
     this.isLoading = false;
   }
  },


  computed:{
     //获取地址栏中的路由信息
     routerInfo(){
        const categoryId = +this.$route.params.categoryId || -1; // 分类id
        const page = +this.$route.query.page || 1; //第几页
        const limit = +this.$route.query.limit || 10; // 页容量
        return {
          categoryId,
          page,
          limit,
        };
     },
  },

   components: {
     Pager,
   },

   methods: {
     formatDate,
     async fetchData() {
         return await getBlogs(this.routerInfo.page, this.routerInfo.limit,this.routerInfo.categoryId);
     },

     //处理滚动条事件
     handleScroll() {
       this.$bus.$emit("mainScroll", this.$refs.container); //提交事件给事件总线
     },

     handleScrollToZero(scrollTop){
       this.$refs.container.scrollTop = scrollTop;
     },

     //分页组件点击分页时处理
     handlePageChange(newPage){
       const query = {
         page: newPage,
         limit:this.routerInfo.limit,
       }

       //跳转到 当前的分类id 当前的页容量  newPage 新页码
       if(this.routerInfo.categoryId === -1){
         //无分类
         this.$router.push({
           name: 'Blog',
           query,
         })
       }else {
         //有分类
         this.$router.push({
           name: 'CategoryBlog',
           params:{
             categoryId:this.routerInfo.categoryId,
           },
           query,
         })
       }
     },

   },


 };
</script>
<style scoped lang="less">
  @import "~@/styles/var.less";
  .blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y:scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;
    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;
      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }
      .main{
        flex: 1 1 auto;
        h2 {
          margin: 0;
        }
      }
      .aside {
        font-size: 12px;
        color: @gray;
        span {
          margin-right: 15px
        }
      }
      .desc {
        margin: 15px 0;
        font-size: 14px
      }
    }

</style>