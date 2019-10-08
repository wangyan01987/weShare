<template>
  <div class="hello">
    <a-form :form="formData" >
      <a-form-item >
        <a-input placeholder="请输入手机号"   v-decorator="[
           'name',
            {rules: [{validator:checkName}]}
        ]">
          <a-icon type="mobile"  slot="prefix"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-row :gutter="8">
          <a-col :span="16">
            <a-input placeholder="请输入验证码" id="success"  v-decorator="[
          'assignCode',
            {rules: [{validator:assignCode}]}
        ]">
              <a-icon type="safety"  slot="prefix" />
            </a-input>
          </a-col>
          <a-col :span="8">
           <a-button  :type="btnType" @click="sendCode" :disabled="btnabled">{{codeText}}</a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <p class="error-msg">{{errorMsg}}</p>
      <a-button @click='submit' type="primary" style="width:100%;margin-bottom: 10px;margin-top: 30px;" size="large">登录</a-button>

    </a-form>

  </div>
</template>

<script>
  import {isOnlyMobile} from '@/utils/common.js'
  export default {
    name: 'login',
    data () {

      const formTailLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8, offset: 4 },
      };
      return {
        formTailLayout,
        formData:this.$form.createForm(this),
        arr:[1,2,3],
        btnType:'default',
        btnabled:true,
        codeText:'获取验证码',
        errorMsg:''

      }

    },
    components:{

    },
    methods:{
      initData(){
         this.codeText='获取验证码';
        this.btnabled = false;
         this.btnType='primary'
      },

      sendCode(){
        //获取验证码
         //发送请求
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.codeText = `剩余${this.count}s`;
              this.btnabled = true;
              this.btnType = 'default';
            } else {
              this.initData()
            }
          }, 1000)
        }

      },

      checkName(rule, value, callback){
        if(!value){
          callback('请输入手机号')
        }
        else {
          if(!isOnlyMobile(value)){
            callback('手机号输入格式不正确')
          }else{
            callback();
            this.initData();
          }
        }
      },
      assignCode(rule, value, callback){
        if(!value){
          callback('请输入验证码');
          //验证码验证
        }
        else {
          callback();
        }
      },
      validPass(rule, value, callback){
        if(!value){
          callback('请输入密码')
        }
        else {
          callback();
        }
      },
      submit(){
        this.formData.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          };
          //提交表单
         if(true){
           this.errorMsg='手机号或验证码错误';
           console.log(document.querySelectorAll('.ant-input-affix-wrapper .ant-input'))
           document.querySelectorAll('.ant-input-affix-wrapper .ant-input')[3].style.cssText='border:1px solid red';
           document.querySelectorAll('.ant-input-affix-wrapper .ant-input')[4].style.cssText='border:1px solid red'
         }

        })
      },
      handleChange(val){
        console.log(val)
      },

    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .error-msg{
    text-align: left;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #f5222d;
  }


</style>
