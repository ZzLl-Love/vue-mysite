<!--具体的博客详情-->
<template>
<!--  <h1> 博客具体详情页</h1>-->
  <div class="blog-detail-container" v-if="blog">
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span>日期:{{formatDate(blog.createDate)}}</span>
      <span>浏览量:{{blog.scanNumber}}</span>
      <span>
          <a href="#">评论:{{blog.commentNumber}}</a>
      </span>
      <RouterLink :to="{
        name: 'CategoryBlog',
        params: {
          categoryId: blog.category.id
        }
      }">
        {{blog.category.name}}
      </RouterLink>
<!--      <span>-->
<!--         <a href="#">分类:{{blog.category.name}}</a>-->
<!--      </span>-->
    </div>.
<!--    内容区域-->
    <div v-html="blog.htmlContent">

    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/utils";
  export default  {
     props: {
       blog: {
         type:Object,
         required: true
       }
     },
    methods: {
      formatDate,
    },
  }
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
  .blog-detail-container {
    .aside {
      font-size: 12px;
      color: @gray;
      span{
        margin-right: 15px;
      }
    }
  }
</style>