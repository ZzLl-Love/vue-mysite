<!--博客详情父组件-->
<template>
  <Layout>
    <div class="main-container" ref="mainContainer">
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
        // console.log( await getBlog(this.$route.params.id))
        return await getBlog(this.$route.params.id)
      },

     //处理滚动条事件
     handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer); //提交事件给事件总线
     },

     handleScrollToZero(scrollTop){
       console.log(scrollTop);
      this.$refs.mainContainer.scrollTop = scrollTop;
     }
   },

   created() {
     this.$bus.$on("setMainScroll", this.handleScrollToZero);
   },

   mounted(){
      //注册滚动条事件
      this.$refs.mainContainer.addEventListener("scroll",this.handleScroll);
   },

   updated(){
      const hash = location.hash;
      location.hash = '';
      setTimeout(()=>{location.hash = hash},50);
   },

   //移除事件
   beforeDestroy(){
      this.$refs.mainContainer.removeEventListener("scroll",this.handleScroll);
     this.$bus.$off("setMainScroll", this.handleScrollToZero);

   }
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