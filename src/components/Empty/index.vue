<!-- 没有数据为空组件-->
<template>
  <div class="empty-container">
    <Icon type="empty"/>
    {{text}}
  </div>
</template>

<script >

import Icon from '@/components/Icon.vue'

  export default {
    components: {
      Icon
    },
    props: {
      text: {
        type:String,
        default: "无数据"
      }
    }
  }
</script>


<style scoped lang="less">

@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
   color: @gray;
   text-align: center;
}
.iconfont {
  font-size: 72px;
}
</style>