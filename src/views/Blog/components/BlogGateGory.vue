<!--博客分类-->

<template>
  <div class="blog-category-container">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelec"/>
  </div>
</template>

<script>
  import RightList from "@/views/Blog/components/RightList.vue";
  import fetchData from "@/mixins/fectchData.js";
  import {getBlogType} from '@/api/blog'
  export default {
    mixins: [fetchData([])],
    components: {
      RightList,
    },

    computed: {
      categoryId(){
        return +this.$route.params.categoryId || -1;
      },

      limit(){
        return +this.$route.query.limit || 10;
      },

      list(){
        const totalArticleCount =  this.data.reduce(
            (a, b) => a + b.articleCount, 0);
        const result = [
            {name: '全部', id: -1, articleCount: totalArticleCount},
            ...this.data
        ];

        return  result.map(item => ({
         ...item,
          isSelect: item.id === this.categoryId,
          aside: `${item.articleCount}篇`
        })
       )
      },

    },

    methods: {
      async fetchData(){
        return await getBlogType();
      },

      handleSelec(item){

        console.log(item)
        const query = {
          page: 1,
          limit:this.limit,
        }

        //跳转到 当前的分类id 当前的页容量  newPage 新页码
        if(item.id === -1){
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
              categoryId:item.id,
            },
            query,
          })
        }
      }
    },
  }
</script>


<style scoped lang="less">
 .blog-category-container {
   width: 300px;
   height: 100%;
   box-sizing:border-box;
   padding: 20px;
   overflow-y:auto;
   h2 {
     font-weight: bold;
     letter-spacing: 2px;
     font-size: 1em;
     margin: 0;
   }
 }
</style>