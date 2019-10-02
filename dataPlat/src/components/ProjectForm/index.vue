<template>
  <div>
    <a-modal
      :title='title'
      v-model="visible"
      @ok="hideModal"
      @cancel="cancel"
      okText="确认"
      cancelText="取消"
    >
     <projectinfo ref="projectInfo" :dataflag="dataflag"></projectinfo>
    </a-modal>
    <br />


  </div>
</template>
<script>
  import projectinfo from './projectinfo.vue'
  export default {
    props:['dataflag'],
    components:{projectinfo},
    data() {
      return {
        visible: false,

      }
    },
    methods: {

      hideModal() {
        // this.visible = false;
        this.$refs.projectInfo.submit();
      },
      cancel(){

      },
      confirm() {
        this.$confirm({
          title: 'Confirm',
          content: 'Bla bla ...',
          okText: '确认',
          cancelText: '取消',
        });
      }
    },
    computed:{
        title(){
          //查看0，编辑1，新增2，删除3
          switch (this.dataflag){
            case 0: return '查看项目信息';
            case 1:return '编辑项目信息';
            case 2:return '新建项目信息';
          }
        }
    }
  }
</script>

<style scoped>

</style>
