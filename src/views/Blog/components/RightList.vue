<!--
    带有层级关系的列表
    涉及知识点:怎么在组件内部进行自我递归
-->
<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list"
        :key="index">
            <span @click="handleClick(item)" :class="{active: item.isSelect}">{{item.name}}</span>
            <span v-if="item.aside" class="aside">{{item.aside}}</span>
      <!-- 递归显示 子列表      -->
      <RightList :list = "item.children" @select="handleClick"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  //example [name: 'xxx‘ , children: [{name" yyyy}]]
  props: {
    list: {
      type: Array,
      default: ()=>[]
    }
  },
  methods: {
    handleClick (item) {
      if(!item.isSelect){
        this.$emit('select',item); //抛出事件
      }
    }
  }
}
</script>


<style scoped lang="less">
@import "~@/styles/var.less";

.right-list-container {
  list-style: none;
  padding: 0;
  /* 子列表缩进 */
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}

</style>