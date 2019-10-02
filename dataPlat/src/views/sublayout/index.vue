<template>
  <div>
    <a-menu
      v-model="current"
      mode="horizontal"
    >
      <a-menu-item key="building">
        <router-link to="building">单体</router-link>
      </a-menu-item>
      <a-menu-item key="BOM" >
        <router-link to="BOM">BOM</router-link>
      </a-menu-item>

      <a-menu-item key="file">
     <router-link to="file">文件</router-link>
      </a-menu-item>
      <a-menu-item key="issue">
        <router-link to="issue">任务</router-link>
      </a-menu-item>
      <a-menu-item key="statics">
        <router-link to="statics">统计</router-link>
      </a-menu-item>
      <a-menu-item key="member">
        <router-link to="member">成员</router-link>
      </a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        current: ['mail'],
      }
    },
  }
</script>

<style scoped>

</style>
