<!--CarouseItem 组件负责呈现当张轮播图-->
<template>
  <div class="carousel-item-container"
       ref="container"
       @mousemove="handleMouseMove($event)"
       @mouseleave = "handleMouseLeave">
    <div class="carousel-img" :style="imagePosition" ref="img">
      <ImageLoader
          :src="carousel.bigImg"
          :placeholder="carousel.midImg"
          @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";

export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,

      containerSize: null, //外层容器的尺寸 carousel-item-container
      innerSize: null,  // 里层图片的尺寸

      mouseX: 0, //鼠标横坐标
      mouseY: 0, //鼠标纵坐标
    }
  },

  methods: {
    //显示文字
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强制浏览器渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + 'px';


      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //强制浏览器渲染
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + 'px';
    },

    //设置各种尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      }

      this.innerSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight,
      }
    },

    //鼠标移动事件 记录鼠标在容器类的移动位置
    handleMouseMove(e){

      //获取容器相对于视口的位置
      const rect =  this.$refs.container.getBoundingClientRect();


      //鼠标在容器中的位置
      this.mouseX = e.clientX  - rect.left;
      this.mouseY = e.clientY  - rect.top;

      console.log(this.mouseX, this.mouseY);

    },

    //鼠标移出事件
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },

  },

  computed: {
    // 获取图片的位置
    imagePosition() {
      if(!(this.innerSize || this.containerSize)) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度

      //确定图片位置
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
          left: left + 'px',
          top: top + 'px',
      }
    },

    //中心位置
    center(){
      console.log("test1",this.containerSize)
      return {
        x: this.containerSize.width/2,
        y: this.containerSize.height/2,
      }
    },
  },

  mounted() {

    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;  //containerSize
    this.mouseY = this.center.y;
    window.addEventListener('resize', this.setSize);

    // this.containerSize = {
    //   width: this.$refs.container.clientWidth,
    //   height: this.$refs.container.clientHeight
    // }
    //
    // this.innerSize = {
    //   width: this.$refs.img.clientWidth,
    //   height: this.$refs.img.clientHeight,
    // }
    // console.log("out", this.containerSize)
    // console.log("inner", this.innerSize)
  },

  destroyed() {
    window.removeEventListener('resize', this.setSize);
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  transition: 0.3s;
}

.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  left: 30px;
  color: #fff;
  text-shadow: 1px 0 0 rgba(0, 0, 0, .5),
  -1px 0 0 rgba(0, 0, 0, .5),
  0px 1px 0 rgba(0, 0, 0, .5),
    0px -1px 0 rgba(0, 0, 0, .5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}

.title {
  top: calc(50% - 30px);
  font-size: 2em;
}

.desc {
  top: calc(50% + 20px);
  font-size: 0.8em;
  color: lighten(@gray, 20%);
}

</style>