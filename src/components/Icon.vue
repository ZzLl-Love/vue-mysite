<template>
    <i class="iconfont" :class="fontClass"/>
</template>

<script>
// 给图标起一个别名
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsignqq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
}
  export default {
    props: {
      type: {
        type: String,
        required: true,
      }
    },
    computed:{
      fontClass(){
        return classMap[this.type]
      }
    },
  }
</script>


<style scoped >
  @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>