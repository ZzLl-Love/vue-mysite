<!--布局组件-->
<template>
  <div class="layout-container">

    <div class="left">
        <slot name="left"></slot>
    </div>

    <div class="main">
        <slot></slot>
    </div>

    <div class="right">
      <slot name="right"/>
     </div>
  </div>
</template>

<script>

export default {

}

</script>


<style scoped lang="less">
  .layout-container {
    width: 100%;
    height:100%;
    display: flex;

    .left, .right {
      flex: 0 0 auto; //保持宽度，不能增长，不能压缩
    }

    .main {
      flex: 1 1 auto;
      overflow: hidden;
    }
  }
</style>