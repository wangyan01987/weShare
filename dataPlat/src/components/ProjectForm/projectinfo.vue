<template>
  <a-form :form="formData">
    <a-form-item label="项目名称" :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="请输入项目名称，支持中英文字符，字数为6-20" v-decorator="[ 'name',
            {rules: [{message:'项目名称'},{ required: true, message: '项目名称不可为空' },{validator:checkName}]}
        ]" v-if="dataflag===1||dataflag===2" ></a-input>
      <span v-else>{{obj.name}}</span>
    </a-form-item>
    <a-form-item label="项目简称" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="请输入项目名称，支持中英文字符，字数为6-20" v-decorator="['nickname', {rules: [{validator:checkName}]} ]" v-if="dataflag===1||dataflag===2"></a-input>
      <span v-else>{{obj.nickname}}</span>
    </a-form-item>
    <a-form-item :label-col="formItemLayout.labelCol":wrapper-col="formItemLayout.wrapperCol" label="项目编号">
      <a-input v-decorator="[ 'projectNumber', {rules:[{validator:checkNumber}]}]" placeholder="请输入项目名称，支持中英文字符，字数为6-20" v-if="dataflag===1||dataflag===2"/>
      <span v-else>{{obj.projectNumber}}</span>
    </a-form-item>
    <a-form-item label="项目类型" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-select @change="handleChange" placeholder="请选择项目类型" v-decorator="[ 'type']">
        <a-select-option v-for="item in arr" :key="item.value" :value="item.value">{{item.label}}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="项目所在地" :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol">
      <a-row :gutter="4">
        <a-col :span="8">
          <a-form-item>
            <a-select @change="handleChange" placeholder="省市" v-decorator="[ 'province']">
              <a-select-option v-for="item in arr" :key="item.value" :value="item.value">{{item.label}}</a-select-option>
            </a-select>

          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-select @change="handleChange" placeholder="城市" v-decorator="[ 'city']">
              <a-select-option v-for="item in arr" :key="item.value" :value="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-select @change="handleChange" placeholder="区县" v-decorator="[
          'county']">
              <a-select-option v-for="item in arr" :key="item.value" :value="item.value">{{item.label}}</a-select-option>
            </a-select>

          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item class="special">
        <a-input placeholder="请输入详细地址，支持中英文字符，字数为6-20"  v-decorator="['address', {rules: [{validator:checkName}]}]"  v-if="dataflag===1||dataflag===2"></a-input>
          <span v-else>{{obj.address}}</span>
      </a-form-item>
    </a-form-item>
    <a-form-item label="项目公司" :label-col="formItemLayout.labelCol":wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="请输入项目公司，支持中英文字符，字数为6-20" v-decorator="['company',{rules: [{validator:checkName}]}]" v-if="dataflag===1||dataflag===2"></a-input>
        <span v-else>{{obj.company}}</span>
    </a-form-item>
    <a-form-item label="建设单位" :label-col="formItemLayout.labelCol":wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="请输入建设单位，支持中英文字符，字数为6-20" v-decorator="[
          'developer',
            {rules: [{validator:checkName}]}
        ]" v-if="dataflag===1||dataflag===2"></a-input>
        <span v-else>{{obj.developer}}</span>
    </a-form-item>
    <a-form-item v-bind="formItemLayout"
      label="立项时间"><a-date-picker v-decorator="['date-picker']" placeholder="请选择日期" v-if="dataflag===1"/>
      <span v-else>{{obj.createTime}}</span>
    </a-form-item>
    <a-form-item label="栋数" :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol" v-if="dataflag===1">
      <a-input v-decorator="[
           'buildingNumber' ]" disabled></a-input>

    </a-form-item>
    <a-form-item label="项目简介" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-textarea v-if="dataflag===1" placeholder=" 请输入项目简介，支持中英文字符" :autosize="{ minRows: 3, maxRows: 6 }"v-decorator="[ 'projectInfo',{rules: [{validator:checkName}]}]"/>
         <span v-else>{{obj.projectInfo}}</span>
    </a-form-item>
    <a-form-item label="合同名称" :label-col="formItemLayout.labelCol"
                 :wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="请输入合同名称，支持中英文字符，字数为6-20" v-decorator="[
          'assign',
            {rules: [{validator:checkName}]}
        ]" v-if="dataflag===1||dataflag===2"></a-input>
       <span v-else>{{obj.assign}}</span>
    </a-form-item>
  </a-form>
</template>

<script>
  import {isName,isNum} from '@/utils/common.js'

  export default {
    name: 'HelloWorld',
    data() {
      const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 18},
      };
      const formTailLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 8, offset: 4},
      };
      return {
        obj:{},
        formItemLayout,
        formTailLayout,
        formData: this.$form.createForm(this),
        arr:[{label:'工程',value:'001'},{label:'工程2',value:'002'}]
      }

    },
    components: {},
    props: ['dataflag'],
    methods: {
      checkNumber(rule, value, callback){
            if(value&&!isNum(value)){
              callback('项目编号不符合规范，请重新输入');
            }
            else{
              callback();
            }
      },
      checkName(rule, value, callback) {
        let str;
        switch(rule.field){
          case 'nickname': str='项目简称' ;break;
          case 'address':str='项目详细地址';break;
          case 'company':str='项目公司';break;
          case 'projectInfo':str='项目简介';break;
          case 'developer':str='建设单位';break;
          case 'assign':str='合同名称';break;
          default :str='项目名称';
        };
        if (!value) {
          callback()
        }
        else {
          if (!isName(value)) {
            callback(str+"不符合规范，请重新输入")
          } else {
            callback();
          }
        }
      },
      submit() {
        this.formData.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
          this.$message.success('编辑成功！', 10);
        })
      },
      handleChange(val) {
        console.log(val)
      },
      setMsg(obj) {
        if (obj instanceof Object) {
          for (var item in obj) {
            this.formData.setFieldsValue({item: obj[item]});
          }
        }

      }
    },
    mounted() {
      console.log('------------出现')
      var obj = {
        name: 'lalallalla',
        nickname: 'ahahhaaha',
        buildingNumber: 5,

      };
      this.obj=Object.assign({},obj);
      if (obj instanceof Object&&this.dataflag!==0) {
        this.formData.setFieldsValue(obj);

      }

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

  .special.ant-form-item {
    margin-bottom: 0;
  }
</style>
