<template>
    <div class="test-container">
      <Contact/>
    </div>
</template>

<script >
  import Contact from "@/components/SiteAside/Contact/index.vue";
  export default {
    components: {
      Contact,
    }
  }
</script>


<style scoped lang="less">
  .test-container {
    width: 400px;
    height: 600px;
    border: 2px solid red;
    background-color: #000;
    margin: 0 auto;
    padding-top: 200px;
  }
</style>