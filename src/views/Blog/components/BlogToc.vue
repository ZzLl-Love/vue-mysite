<!--博客目录-->
<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="toc" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
 export default {

   props: {
      toc: {
        type:Array,
      },
   },

   components: {
     RightList,
   },
   methods: {
     handleSelect(item){
       location.hash = item.anchor;
     },
   },
 }
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  //overflow-y:auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }

}
</style>