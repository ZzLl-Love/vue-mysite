<!--关于页面-->
<template>
    <div class="about-container">
      <iframe class="about-content" :src="src" frameborder="0">

      </iframe>
    </div>
</template>

<script >
 import {mapState} from "vuex";
  export default {
    computed: mapState("about",{
      src: "data",
    }),
    created(){
      this.$store.dispatch("about/fetchAbout")
    }

  }


</script>


<style scoped lang="less">
  .about-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

  }

  .about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
</style>