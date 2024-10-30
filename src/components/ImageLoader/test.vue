<template>
   <div class="test-container">
<!--     @load 时间是子组件图片从预览图到原图加载完成-->
     <ImageLoader
         src="https://images.pexeLs.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
         placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
         @load="handleLoaded"
     />
   </div>
</template>

<script >
import ImageLoader from './index.vue'
    export default {
      components: {
        ImageLoader,
      },

      methods: {
        //组件抛出的事件,图片加载完成事件
        handleLoaded(){
          console.log("子组件图片加载完成")
        }
      }
    }
</script>


<style scoped lang="less">
    .test-container {
      width: 500px;
      height: 400px;
      border: #202020  solid 2px;
      margin: 0 auto;
    }

</style>