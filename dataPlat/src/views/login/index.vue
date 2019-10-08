<template>
 <div class="container">
    <div class="box-top">
     <p class="logo">平行数据平台</p>
      <p class="action"><span>客户端下载</span>|<span>关于PST</span>|<span>联系我们</span></p>
    </div>
   <div class="box-body">
        <div class="login-box">
          <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="登录" key="1">

              <login v-show="loginType==='001'"></login>
              <loginmobile v-show="loginType==='002'"></loginmobile>
            </a-tab-pane>
            <a-tab-pane tab="注册" key="2" forceRender><register></register></a-tab-pane>
          </a-tabs>
          <div class="action-box" v-if="loginType==='001'||loginType==='002'">
            <span @click="forgetPsd"  v-show="loginType==='001'"  >忘记密码？</span>
            <span @click="loginMobile"  v-show="loginType==='001'">验证码快速登录</span>
            <span  v-show="loginType==='002'"></span>
            <span @click="loginType='001'"  v-show="loginType==='002'" >账号密码登录</span>
          </div>
        </div>
   </div>
   <div class="box-foot">
     <p>
       copyright@2019平行系统（北京）信息技术有限公司
     </p>
   </div>
 </div>
</template>

<script>
  import login from '@/components/Login'
  import register from '@/components/Register'
  import loginmobile from  '@/components/Login/Login-phone'
    export default {
        name: "index",
      components:{login ,register,loginmobile},
      data(){
            return{
              //001  账号登陆，默认
              //002  快速登陆
              //000 注册
              loginType:'001'
            }
      },
      mounted(){
        //  this.$store.commit('setLogin',true);
          console.log(this.$store.state.isLogin)
      },
      methods:{
          callback(val){
             if(val==='2'){
               this.loginType='000'
             }else{
               this.loginType='001';
             }
          },
        forgetPsd(){

        },
        loginMobile(){
           this.loginType='002'
        },
      }
    }
</script>
<style scoped>
  .container p{
    margin-bottom: 0;
  }
 .container{
   background:url("../../assets/images/bg-dl@2x.png") fixed center;
   background-size:cover;
   height:100%;
   width:100%;
   position:relative;
 }
  .box-top{
      display:flex;
    padding-top:2.2rem;
    padding-right:7rem;
    color: #ffffff;
    justify-content: space-between;
    z-index: 1000;
  }
  .logo{
    width: 19.2rem;
    line-height: 3.3rem;
    font-family: PingFangSC-Semibold;
    font-size: 2.4rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;

  }
  .action{
    font-size:1.6rem;
    line-height: 3.3rem;
  }
  .action span{
    padding:0 1rem;
    cursor:pointer;
  }
  .box-body{
    width:100%;
  height:100%;
    position:absolute;
    top:0;
  }
  .login-box{
    position:absolute;
    top:10.2rem;
    right:7rem;
    width: 44.4rem;
    /*height: 45rem;*/
    max-height:600px;
    overflow: auto;
    background-color: #ffffff;
    border-radius: 1.2rem;
    padding:25px;
  }
  .box-foot{
    width:100%;
     position:fixed;
    bottom: 2.4rem;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 0.65);
    text-align:center;
  }
  .action-box{
    display:flex;
    justify-content: space-between;
    width: 100%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #1890ff;
    margin-top:24px;
  }
  .action-box span{
    cursor:pointer;
  }
</style>
