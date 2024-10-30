<!--
     图片加载组件
    原图 opactity=0  =>原图加载完成 ===>opactity=1 ==>删除占位图

-->
<template>
    <div class="image-loader-container">
      <img v-if="!everythingDone"  class="placeholder" :src="placeholder" alt=""/>
      <img @load="handleLoad"
           class="origin"
           :src="src" alt=""
           :style="{opacity: originOpacity, transition: `${duration}ms`}"
            />
    </div>
</template>

<script >
    export default {

      //属性
      props: {
        src: {  //原始图片的路径
          type:String,
          required: true
        },

        placeholder:{ //原始图片 加载前的占位图片
          type:String,
          require: true,
        },

        duration: { //延迟加载的时间，单位为秒
          type:Number,
          default: 5000
        }
      },

      //data
      data(){
        return{
          originLoaded: false, //原图是否加载完成
          everythingDone: false,  //是否全部完成
        }
      },

      computed: {
        originOpacity(){
          return this.originLoaded ? 1 : 0;
        }
      },

      //方法
      methods: {
        handleLoad(){  //原图加载完成
          this.originLoaded = true;
          setTimeout(()=>{
             this.everythingDone = true
             this.$emit('load')
          },this.duration)


        }
      },
    }
</script>


<style scoped lang="less">
@import "~@/styles/mixin";

  .image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
      .self-fill();
      object-fit: cover;
    }
    .origin{
      opacity: 0;
    }

    .placeholder{
      filter: blur(2vw);
    }

  }
</style>