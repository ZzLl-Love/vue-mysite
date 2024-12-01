<!--项目页面-->
<template>
  <div class="project-container">
    <div v-for='item in data ' :key="item.id"
         class="project-item">
      <a :href="item.url ? item.url : `javascript:alert(‘该项目无法通过外网访问’)` "
         target="item.url ? '_blank' : '_self' ">
        <img class="thumb" v-lazy="item.thumb" alt=""/>
      </a>
      <div class="info">
        <h2>{{ item.name }}</h2>
        <a class="github" :href="item.github"
           v-if="item.github"
           target="_blank">
          github
                  </a>
        <p v-for="(desc,i ) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: mapState("project", ["data"]),

  created() {
    this.$store.dispatch("project/fetchProjects");
  }
}
</script>


<style scoped lang="less">
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
}

.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;

  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px -3px);
    color: inherit;
  }

  .thumb {
    width: 250px;
    min-height: 100px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;

  }

  .info {
    line-height: 1.7;
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }

    .github {
      font-size: 12px;
      color: white;
    }
  }
}
</style>