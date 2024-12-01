<!--留言板页面-->
<template>
  <div class="message-container" ref="messageContainer">
    <div class="message">
      <MessageArea
         title="留言板"
        :subTitle="`(${data.total})`"
        :list="data.rows"
         isListLoading="isLoading"
         @submit ="handleSumbit"
      />
    </div>
  </div>
</template>

<script >
  import MessageArea from "@/components/MessageArea/index.vue";
  import fectchData from "@/mixins/fectchData";
  import * as msgApi from '@/api/message'
  export default {
    mixins:[fectchData({total:0, rows: [] })],
    components: {
      MessageArea
    },

    data(){
      return {
        page: 1,
        limit:10
      }
    },
    methods: {
      async fetchData(){
        return msgApi.getMessage(this.page, this.limit);
      },

     async handleSumbit(data,callback){
      const resp =  await  msgApi.postMessage(data);
        callback('感谢您的留言');
        this.data.rows.unshift(resp);
      }
    },
  }
</script>


<style scoped lang="less">
 .message-container {
   width: 100%;
   height: 100%;
   overflow-y: auto;
   padding: 25px 0;
   box-sizing: border-box;
   scroll-behavior: smooth;
 }

 .message-area-container{
    width: 700px;
    margin: 0 auto;
 }
</style>