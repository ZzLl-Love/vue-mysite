
<!--侧边栏组件-->
<template>
    <div class="site-aside-container">
      <template v-if="data">
        <div class="avatar-container">
          <Avatar :img-url="  data.avatar"/>
        </div>
        <h1 class="title">{{data.siteTitle}}</h1>
      </template>
      <Menu/>
      <Contact v-if="data"/>
      <p class="footer" v-if="data">{{data.icp}}</p>
    </div>

</template>

<script >
import Avatar from "@/components/Avatar.vue";
import Contact from "@/components/SiteAside/Contact/index.vue";
import Menu from "@/components/SiteAside/Menu/index.vue";
import {mapState} from "vuex";

export default {
        components: {
          Avatar,
          Menu,
          Contact,
        },
        computed: {
          ...mapState('setting', ['data'])
        },
    }
</script>


<style scoped lang="less">
    @import "~@/styles/var.less";
    .site-aside-container {
      width: 100%;
      height: 100%;
      background-color: @dark;
      padding: 20px;
      box-sizing: border-box;
      overflow-x : hidden;
      overflow-y : scroll;
    }

    .avatar-container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    .footer {
      text-align: center;
      font-size: 12px ;
      color: #b4b8bc;
    }

    .title{
      font-size: 1.2em;
      color: #fff;
      text-align: center;
    }
</style>