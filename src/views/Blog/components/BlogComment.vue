<template>
    <div class="blog-comment-container">
      <MessageArea title="评论列表"
                   :sub-title="`(${data.total})`"
                   :list="data.rows"
                   @submit="handleSubmit"
      />
    </div>
</template>

<script >
  import MessageArea from "@/components/MessageArea/index.vue" ;
  import fetchData from '@/mixins/fectchData';
  import {getComments,emitComment} from "@/api/blog";

  export default {
    mixins:[fetchData({total:0, rows: []})],
    data(){
      return {
        page: 1,
        limit:10
      }
    },
    components: {
      MessageArea,
    },
    methods: {
      async fetchData(){
       return await getComments(this.$route.params.id, this.page, this.limit);
      },
      async handleSubmit(formData, callBack) {
      const resp = await emitComment({
          blogId:this.$route.params.id,
         ...formData,
      })
        this.data.rows.unshift(resp);
        this.data.total++;
        callBack(); //告诉后代组件，我这边处理完，子组件继续
      },
    },
  }
</script>


<style scoped lang="less">

</style>