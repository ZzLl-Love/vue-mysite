<template>
  <div class="message-area-container">
    <DataForm  v-on="$listeners"/>
    <h3>{{title}}</h3>
    <span>{{subTitle}}</span>
    <DateList :list ="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script >
    import DataForm from '@/components/MessageArea/DateForm.vue'
    import DateList from '@/components/MessageArea/DataList.vue'
    export default {

      props: {
        title: {type: String, default: ""},
        subTitle:{type:String,default:""},
        list:{type:Array,default: ()=>{}},
        isListLoading:{type:Boolean,default:false},
      },

      components: {
        DataForm,
        DateList,
      },

      methods: {

      }
    }
</script>

<style scoped lang="less">

</style>