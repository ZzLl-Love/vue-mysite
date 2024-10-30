<template>
  <div  v-if="pageNumber > 1" class="pager-container">
    <a @click="handleClick(1)" :class="{disabled: current ==1}">首页</a>
    <a @click="handleClick(current-1)" :class="{disabled: current ==1}">&lt;&lt;</a>
    <a  v-for="(n,i) in numbers" @click="handleClick(n)" :key="i" :class="{active:n ===current}" >{{n}}</a>
    <a  @click="handleClick(current + 1)" :class="{disabled: current === pageNumber}"> &gt;&gt; </a>
    <a  @click="handleClick(pageNumber)">末页</a>
  </div>
</template>

<script>
export default {
  computed: {
    pageNumber() { //总页数
      return Math.ceil(this.total / this.limit)
    },

    numbers(){ //显示的页面数
      let nums = [];
      for (let i = this.visibleMin; i <=this.visibleMax ; i++) {
        nums.push(i);
      }
      return nums;
    },

    visibleMin(){//显示的最小页码
      let min  = this.current - Math.floor(this.visibleNumber/2);
      if(min <=1){min =1;}
      return min;
    },

    visibleMax() { //显示最大的页码
      let max = this.visibleMin  + this.visibleNumber -1;
      if(max >this.pageNumber) {max = this.pageNumber}
      return max;
    },
  },
  props: {
    current: {  //当前页码数
      type: Number,
      default: 1
    },
    total: { //总数据量
      type: Number,
      default: 0
    },
    limit: { //每页显示数量
      type: Number,
      default: 10
    },
    visibleNumber: { //当前可见页码数量
      type: Number,
      default: 10
    },
  },
  methods: {
    handleClick(newPage){
      if(newPage < 1){
        newPage = 1;
      }

      if(newPage > this.pageNumber){
        newPage = this.pageNumber;
      }

      if(newPage ==this.current){
        return;
      }

      // console.log(newPage);
      //抛出事件，
      this.$emit('pageChange',newPage) //newPage 事件总线
    }
  }
}
</script>


<style scoped lang="less">
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }


}
</style>