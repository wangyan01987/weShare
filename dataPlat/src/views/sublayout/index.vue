<template>
  <div class="sub-container">
    <a-menu v-model="current" mode="horizontal">
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
    <span class="blue" @click="showProjectInfo">查看项目信息</span>
    <projectform  :dataflag="0" ref="projectform"></projectform>
    <router-view></router-view>
  </div>
</template>
<script>
  import projectform from '@/components/ProjectForm'
  export default {
    components:{projectform},
    data () {
      return {
        current: ['mail'],
      }
    },
    methods:{
      showProjectInfo(){
        this.$refs.projectform.visible=true;
      }
    }
  }
</script>

<style scoped>
  .sub-container{
    position:relative;
  }
  .blue{
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #1890ff;
    cursor: pointer;
    position:absolute;
    right:5rem;
    top:0;
    line-height: 4.7rem;
  }
</style>
