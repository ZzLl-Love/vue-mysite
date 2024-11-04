<!--博客目录-->
<template>
  <div class="blog-toc-container">
      <h2>目录</h2>
      <RightList :list="tocWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
import { debounce} from "@/utils";
export default {

  data(){
     return {
       activeAnchor: '',
     }
   },

   props: {
      toc: {
        type:Array,
      },
   },

   computed: {
      //根据toc属性得到带有isSelect数组的toc数组
      tocWithSelect(){
        const getToc = (toc = [])=>{
          return  toc.map(t => ({
            ...t,
            isSelect:t.anchor == this.activeAnchor,
            children:getToc(t.children)
          }))
        }
        return getToc(this.toc);
      },

     //根据toc得到他们对应的元素数组
     doms(){
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children && t.children.length > 0){
            addToDoms(t.children)
          }
        }
      };
      addToDoms(this.toc);
      return doms;
     },


   },

   components: {
     RightList,
   },

   created() {
     this.setSelectDebounce = debounce(this.setSelect,50);
     this.$bus.$on("mainScroll",this.setSelectDebounce ) //监听事件总线
   },

  destroyed(){
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },

   methods: {
     handleSelect(item){
       location.hash = item.anchor;
     },
     //控制activeAnchor正确值
     setSelect(){
       console.log("我是BlogToc,我被触发了")
       this.activeAnchor = '';
       const range = 200;
       for (const dom of this.doms) {
          if(!dom){
            continue;
          }
          //得到元素离视口顶部的距离
          const top = dom.getBoundingClientRect().top;
          if(top >=0 && top <=range){
            //在规定的范围内
            this.activeAnchor = dom.id;
            return;
          }else if (top > range){
            return;
          }else {
            this.activeAnchor = dom.id;
          }

       }
     },
   },
 }
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  //overflow-y:auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }

}
</style>