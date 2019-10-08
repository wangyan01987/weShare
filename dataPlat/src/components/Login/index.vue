<template>
  <div class="register">
    <a-form :form="formData" >
      <a-form-item >
        <a-input placeholder="请输入姓名"   v-decorator="[
           'name',
            {rules: [{validator:checkName}]}
        ]">
          <a-icon type="mobile"  slot="prefix"/>
        </a-input>
      </a-form-item>
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
            <span>验证码</span>
            <span><a-icon type="redo" @click="updateCode" /></span>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item>
        <a-input
          placeholder="请输入密码"
          v-decorator="[
          'password',
          {
            rules: [{
              validator: validPass,
            }],
          }
        ]"
          type="password"
        >
          <a-icon type="lock"  slot="prefix"/>
        </a-input>

      </a-form-item>
      <a-button @click='submit' type="primary" style="width:100%" size="large">登录</a-button>

    </a-form>

  </div>
</template>

<script>
  import {isOnlyMobile} from '@/utils/common.js'
  export default {
    name: 'HelloWorld',
    data () {

      const formTailLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8, offset: 4 },
      };
      return {
        formTailLayout,
        formData:this.$form.createForm(this),
        arr:[1,2,3]

      }

    },
    components:{

    },
    methods:{
      updateCode(){

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
          console.log(fieldsValue)

        })
      },
      handleChange(val){
        console.log(val)
      },
      setMsg(obj){
        if(obj instanceof Object){
          for(var item in obj){
            this.formData.setFieldsValue({item:obj[item]});
          }
        }

      }
    },
    mounted(){
      // var obj={
      //   name:'lalallalla',
      //   nickname:'ahahhaaha',
      // };
      // if(obj instanceof Object){
      //   this.formData.setFieldsValue(obj);
      //
      // }

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


</style>
