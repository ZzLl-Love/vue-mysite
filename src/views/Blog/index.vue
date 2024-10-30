<!-文章页--->
<template>
  <Layout>
     <BlogList/>
    <template #right>
      <BlogGateGory/>
    </template>
  </Layout>
</template>
<script >
import Layout from '@/components/Layout/index.vue'
import BlogList from "./components/BlogList.vue";
import BlogGateGory from "./components/BlogGateGory";
export default {
  components: {
    Layout,
    BlogList,
    BlogGateGory,
  }
}
</script>


<style scoped lang="less">

</style>