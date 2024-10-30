<!--
  首页
  负责循环单个轮播图以及整体的布局
-->
<template>
  <div class="home-container" ref="container" @wheel="hanldeWheel">
    <ul class="carouse-container"
        :style="{marginTop,}"
        @transitionend = 'hanleTransitioned'
    >
      <li v-for="item in data" :key="item.id">

          <CarouseItem :carousel="item"/>
      </li>
    </ul>
  <!-- 向上向下箭头    -->
     <div class="icon icon-up"
          v-show="index >=1"
          @click="switchTo(index-1 )"
     >
       <Icon type="arrowUp"  />
     </div>
      <div class="icon icon-down"
           v-show = "index <= data.length - 1"
           @click="switchTo(index+1 )"
      >
        <Icon type="arrowDown"   />
      </div>
  <!--  右边三个小点  指示器 -->
      <ul  class="indicator">
          <li
              v-for="(item,i) in data" :key="item.id"
              :class="{active:  i=== index}"
              @click="switchTo(i)"
          >
          </li>
      </ul>
  </div>
</template>

<script>
 import {getBanners} from "@/api/banner";
 import CarouseItem from './CarouseItem.vue'
 import Icon from  '@/components/Icon.vue'
 import fectchData from "@/mixins/fectchData";
 export  default {
  mixins: [fectchData([])],
   components: {
     Icon,
     CarouseItem,
   },

   computed: {
     marginTop(){
      return -this.index *this.containerHeight + 'px';
     }
   },

   data() {
    return {
        // banners: [],
        index: 0,  //第几张轮播图
        containerHeight: 0,  //容器的高度
        switching: false, //是否正在翻页中
    }
   },

   methods: {
      //切换轮播图
      switchTo(i){
        this.index = i;
      },
      //滚动切换图片
     hanldeWheel(e){
        if(this.switching || e.deltaY <=5 && e.deltaY>=-5){
          return;
        }
        console.log(e)
        this.switching = true; //正在翻页中
        if(e.deltaY < -5 && this.index > 0 ){
          console.log('上')
         this.index--;
        }else if(e.deltaY > 5 && this.index < this.data.length - 1){
          console.log('下')
          this.index++;
        }
      },

     //过渡效果结束(翻动完成), 将翻页标识设为false 即未翻页
     hanleTransitioned(){
       this.switching = false
     },

     //处理浏览器视口变化后重新计算容器的高度
     handleResize(){
       this.containerHeight = this.$refs.container.clientHeight
     },

     async fetchData(){
       return await getBanners();
     },


   },

   // async created() {
   //   this.banners = await getBanners();
   // },

   mounted() {
     this.containerHeight = this.$refs.container.clientHeight
     window.addEventListener('resize',this.handleResize);
   },

   destroyed(){
      window.removeEventListener('resize',this.handleResize);
   },


 }

</script>


<style lang="less" scoped>
    @import "~@/styles/mixin.less";
    @import "~@/styles/var.less";
     .home-container {
       width: 100%;
       height: 100%;
       position: relative;
       overflow: hidden;

     }
    .carouse-container {
      width: 100%;
      height: 100%;
      transition:500ms;
      li {
        width: 100%;
        height: 100%;
      }
    }

     ul {
       margin: 0;
       list-style: none;
       padding: 0;
     }

     //图标居中
     .icon {
        font-size: 30px;
        color: @gray;
       .self-center();
       cursor: pointer;
       transform: translateX(-50%);
       &.icon-up {
         top: 25px;
         animation: jump-up 2s infinite;
       }
       &.icon-down {
         top:auto;
         bottom: 25px;
         animation: jump-down 2s infinite;
       }
       @jump: 5px;
       @keyframes jump-up {
         0%{
           transform: translate(-50%,@jump);
         }
         50%{
           transform: translate(-50%, -@jump);
         }
         100% {
           transform: translate(-50%,@jump)
         }
       }

       @keyframes jump-down {
         0%{
           transform: translate(-50%,-@jump);
         }
         50%{
           transform: translate(-50%, @jump);
         }
         100% {
           transform: translate(-50%, -@jump)
         }
       }
     }


     // 指示器样式
     .indicator {
      .self-center();
       transform: translateY(-50%);
       left: auto;
       right: 20px;

       li {
         width:7px;
         height: 7px;
         border-radius: 50%;
         background: #333;
         margin-bottom: 10px;
         border: 1px solid #fff;
         box-sizing: border-box;
         transition:  0.5s;
         &.active {
           background: #fff;
         }
       }
     }



</style>