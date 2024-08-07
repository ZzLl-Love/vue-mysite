
<!-- npm i -g @vue/cli-service-global 安装启动单个组件的依赖
  启动  vue serve .\src\components\Pager\test.vue

-->
<template>
  <div>
    <Pager
        :total="total"
        :current="current"
        @pageChange="handlePageChange"/>
    <h1>1111</h1>
  </div>

</template>

<script >
  import Pager from "./index.vue"
  export default {
    comments: {
      Pager,
    },

    data(){
      return{
        current: 1,
        total: 302,
      }
    },

    methods: {
      handlePageChange(newPage){
        console.log("父组件")
        console.log("我是父组件App,我收到了子组件抛出的事件,子组件改变的页码为:",newPage)
        this.current  = newPage;
      }
    }
  }
</script>


<style scoped lang="less">

</style>