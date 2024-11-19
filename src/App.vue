<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="aside">
           <SiteAside/>
        </div>
      </template>
      <template #default>
        <RouterView/>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>

import Layout from "@/components/Layout/"
import SiteAside from "@/components/SiteAside/index.vue";
import ToTop from "@/components/ToTop";
export default {

  components: {
    Layout,
    SiteAside,
    ToTop,
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin";
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
  .self-fill();
  background-color: gray;
}

.aside{
  width: 250px;
  height: 100%;
}


</style>
