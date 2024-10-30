<template>
    <div class="test-container">
      <Menu/>
    </div>
</template>

<script >
import Menu from "@/components/SiteAside/Menu/index.vue";
    export default {
      components: {
        Menu,
      }
    }
</script>


<style scoped lang="less">
.test-container{
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>