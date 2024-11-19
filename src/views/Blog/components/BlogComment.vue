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

    created(){
      this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed(){
      this.$bus.$off("mainScroll", this.handleScroll);
    },

    components: {
      MessageArea,
    },

    computed:{
      hasMore(){
        return this.data.rows.length < this.data.total; //是否有更多的数据
      },
    },
    methods: {
      async fetchData(){
       return await getComments(this.$route.params.id, this.page, this.limit);
      },

      //处理滚动事件
      async handleScroll(dom){
        const range = 100;
        const dec = Math.abs((dom.scrollTop + dom.clientHeight -dom.scrollHeight));
        if(dec <range){
         this.fetchMore();
        }
      },

      // 加载下一页
      async fetchMore(){
        if(!this.hasMore){
          return; //没有更多的数据
        }
        this.page++;
        const resp = await this.fetchData();
        this.data.rows = this.data.rows.concat(resp.rows);
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