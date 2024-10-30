<!-- 图片 + 描述 组件-->
<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin"/>
        </div>
        <span>501058587</span>
      </a>
      <div class="pop">
        <img src="https://www.wdu.edu.cn/images/dhxy_07.png" alt=""/>
      </div>
    </li>
    <li>
      <a href="mailto:501058587@qq.com">
        <div class="icon">
          <Icon type="mail"/>
        </div>
        <span>501058587@qq.com</span>
      </a>
      <div class="pop">
        <img src="https://www.wdu.edu.cn/images/dhxy_07.png" alt=""/>
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon.vue";
import "@/styles/global.less"

// todo 没有写完 进度为1小时12分钟
export default {
  components: {
    Icon,
  }
}
</script>


<style scoped lang="less">
@import "~@/styles/var.less";

.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    position: relative;
    &:hover{
      .pop{
        transform: scaleY(1);
      }

    }
  }

  a {
    display: flex;
    align-items: center;
  }

  .iconfont {
    font-size: 28px;
    width: 36px;
  }

  .pop{
    position: absolute;
    left: 0;
    bottom:@itemHeight + 5px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #fff;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }

    &::after{
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background:#fff;
      bottom: -4px;


    }
  }


}
</style>