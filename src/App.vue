<template>
  <div id="app">
    <div class="test-container">
      <Empty/>
    </div>
  </div>
</template>

<script>

import Layout from "@/components/Layout/"
import Empty from "@/components/Empty/index.vue";
export default {

  components: {
    Layout,
    Empty,
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



//布局样式
.test-container {
  width: 620px;
  height: 400px;
  border: 2px solid;
  margin: 0  auto;
  position: relative;
}

//.left{
//  width: 200px;
//  height: 100%;
//  background-color: lightcoral;
//}
//
//.main  {
//  width: 100%;
//  height: 100%;
//  background-color: lightseagreen ;
//}
//
//.right{
//  width: 150px;
//  height: 100%;
//  background-color: yellow;
//}
</style>
