<template>
  <div class="form-container">
    <!--查看-->
    <a-modal
      :title='title'
      v-model="visible"
      @cancel="cancel"
      okText="确定"
      cancelText="取消"
      :footer="null"
     >
      <span class="blue" @click="currentDataflag=1" v-if="currentDataflag===0">编辑信息</span>
     <projectinfo ref="projectInfo" :dataflag="currentDataflag"  @cancel="cancel" @save="save"></projectinfo>
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
        footer:null,
        currentDataflag:this.dataflag


      }
    },
    methods: {

      save() {
        this.visible = false;

      },
      cancel(){
            this.visible=false;
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
          switch (this.currentDataflag){
            case 0: return '查看项目信息';
            case 1:return '编辑项目信息';
            case 2:return '新建项目信息';
          }
        },


    },
    watch:{
         dataflag(val){
             this.currentDataflag=val;
         }
    },
    mounted(){
       console.log('form')
      console.log(this.dataflag)
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
