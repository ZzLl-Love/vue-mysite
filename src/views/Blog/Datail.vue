<!--博客详情父组件-->
<template>
  <Layout>
    <div class="main-container">
      <BlogDetail :blog="data"/>
<!--      isLoading 为false-->
      <BlogComment/>
    </div>
    <template #right>
<!--      todo 自定义指定v-loading 加载中的效果-->
      <div class="right-container">
        <BlogToc :toc="data.toc" v-if="data.toc"/>
      </div>
    </template>
  </Layout>
</template>

<script >
 import fectchData from "@/mixins/fectchData";
 import {getBlog} from '@/api/blog';
 import Layout from "@/components/Layout/index.vue";
 import BlogDetail from "@/views/Blog/components/BlogDetail.vue";
 import BlogToc from "@/views/Blog/components/BlogToc.vue";
 import BlogComment from "@/views/Blog/components/BlogComment.vue";
 export default {
  mixins: [fectchData({})],
  components: {
    Layout,
    BlogDetail, //子组件 具体博客详情
    BlogToc,     // 博客目录
    BlogComment  //评论组件
  },
   methods: {
      async fetchData(){
        console.log( await getBlog(this.$route.params.id))
        return await getBlog(this.$route.params.id)
      }
   },
   created(){

   },
 }
</script>



<style scoped lang="less">
  .main-container {
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    width: 95%;
    scroll-behavior: smooth;
  }
  right-container{
    width:  300px;
    height: 100%;
    overflow-y:scroll;
    box-sizing: border-box;
    position: relative;
    padding:10px;

  }
</style>