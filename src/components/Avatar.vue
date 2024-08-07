<template>
<!-- v-bind 绑定的要是style时必须绑定为一个对象 -->
    <img
        class="avatar-img"
        :src="imgUrl" :style= "{
          width: size    + 'px',
          height: size  + 'px',
    }"/>
</template>

<script >
    export default {
      // 数组写法
      // props: ['imgUrl']
      //对象类型
      props:{
        imgUrl: {
          type: String,//imgUrl 图片地址必须为一个字符串
          required: true,
        },

        size: {  //图片大小
          type: Number,
          default: 150,
        }
      }

    }
</script>


<style scoped>
  .avatar-img {
    border-radius: 50% ;
    object-fit: cover;
    display: block;
  }
</style>