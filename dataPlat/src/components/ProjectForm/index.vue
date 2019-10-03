<template>
  <div class="form-container">
    <!--查看-->
    <a-modal
      :title='title'
      v-model="visible"
      @ok="hideModal"
      @cancel="cancel"
      okText="确定"
      cancelText="取消"
       :footer="footer"
      v-if="dataflag===0"
    >
      <span class="blue" @click="dataflag=1">编辑信息</span>
     <projectinfo ref="projectInfo" :dataflag="dataflag"></projectinfo>
    </a-modal>
    <!--编辑-->
    <a-modal
      :title='title'
      v-model="visible"
      @ok="hideModal"
      @cancel="cancel"
      okText="确定"
      cancelText="取消"
      v-else>
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
        footer:null

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
        },

    }
  }
</script>

<style scoped>
  .form-container .ant-modal-content{
    position:relative;
  }
  .blue{
    cursor:pointer;
    color:dodgerblue;
    position:absolute;
    top:0;
    left:13rem;
    line-height:54px;
  }
</style>
