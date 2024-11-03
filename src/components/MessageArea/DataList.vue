<template>
    <ul class="data-list-container">
      <li v-for="item in list" :key="item.id">
        <Avatar
            :img-url="item.avatar"
            :size="44"/>
        <div class="data">
          <div class="nickname">{{item.nickName}}</div>
          <div class="content">{{item.content}}</div>
          <div class="time">{{formatDate(item.creatDate,true)}}</div>
        </div>
      </li>
    </ul>
</template>

<script>
  import Avatar from  '@/components/Avatar.vue'
  import {formatDate} from '@/utils/index';
  export default {
    components: {
      Avatar
    },
    props: {
      list: {type:Array, default: ()=>{}}
    },
    methods: {
      formatDate,
    },
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .data-list-container {
    list-style: none;
    margin: 0;
    padding: 0;
  }



  li {
    display:flex;
    border-bottom: 1px solid ;
    padding: 15px 0;
  }

  .avatar-container {
    margin-left: 15px;
 }

  .nickname {
    color: darken(@success, 10%);
    margin-bottom: 10px;
  }

  conten {
    font-size: 14px
  }

  .data {
    margin-left: 15px;
    flex: 1 1 auto;
    position: relative;
  }

  .time {
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 12px;
    color: #b4b8bc;
  }
</style>