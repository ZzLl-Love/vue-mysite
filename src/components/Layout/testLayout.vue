<template>
   <div class="test-container">
     <Layout>
       <!--         左边区域-->
       <template #left>

         <div class="left">

         </div>
       </template>

       <!--         中间区域-->
       <template >

         <div class="main">

         </div>
       </template>

       <template #right>
         <!--         右边区域-->
         <div class="right">

         </div>
       </template>
     </Layout>
   </div>
</template>

<script >
import Layout from "@/components/Layout/index.vue";
 export default {
   components: {
      Layout,
   }
 }
</script>


<style scoped lang="less">
  .test-container {

    width: 1000px;
    height: 600px;
    border: 2px solid red;
    margin: 0 auto;
  }

  .left {
    width: 200px;
    height: 100%;
    background-color: lightcoral;
  }

  .main  {
    width: 100%;
    height: 100%;
    background-color: lightseagreen;
  }

  .right {
    width: 150px;
    height: 100%;
    background-color:lightsalmon;
  }
</style>