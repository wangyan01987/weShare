<template>
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
     {{projectName}}  <a-icon type="down" />
    </a>
  <a-menu slot="overlay" >
    <a-menu-item v-for="item in menuList" :key="item.id">
      <a  :href="'#/projectDetail/'+item.id">{{item.name}}</a>
    </a-menu-item>
  </a-menu>
  </a-dropdown>
</template>

<script>
    export default {
        name: "index",
      props:['menuList'],
      computed:{
           projectName(){
             return this.$store.state.projectName;
           }
      }
    }
</script>
nnn
<style scoped>

</style>
