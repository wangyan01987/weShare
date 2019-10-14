<template>
  <div class="container">
    <a-modal
      :destroyOnClose=true
      v-model="visible"
      @cancel="cancel"
      okText="确定"
      cancelText="取消"
      :footer="null"
      :width=580
    >
      <div class="content-box">
       <div v-if="isValid">
         <p class="title">{{title}}</p>
         <p class="project-content">{{projectName}}</p>
         <p><a-button type="primary" @click="goInvite">接受邀请</a-button></p>
       </div>
        <div v-else>
           <p><a-icon type="close-circle" theme="filled" style="color:#f5222d"/>邀请链接已经失效</p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){

          return{
               name:'杨乐乐',
              visible:true,
            projectName:'大数据第一期项目',
            isValid:false,
            bodyStyle:{height:500}
          }
      },
      computed:{
             title(){
               return this.name+'邀请你加入项目'
             }
      },
      methods:{
          cancel(){

          },
        goInvite(){
            this.visible=false;
        }
      }

    }
</script>

<style scoped>
  .title{
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgba(0, 0, 0, 0.85);
  }
   .project-content{
     font-size: 16px;
     font-weight: normal;
     font-stretch: normal;
     letter-spacing: 0px;
     color: rgba(0, 0, 0, 0.65);
     margin-bottom: 129px;
   }
  .content-box{
    margin:60px auto 20px;
    text-align:center;
  }

</style>
