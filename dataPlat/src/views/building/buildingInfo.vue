<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="楼栋名称"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-if="dataflag!=='000'"
        v-decorator="[
          'name',
          {rules: [{ max:20,message:'最大长度为20个字符' }]}
        ]"
      />
      <span v-else>{{buildingInfo.name}}</span>
    </a-form-item>
    <a-form-item
      label="楼栋号"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-if="dataflag!=='000'"
        v-decorator="[
          'number',
          {rules: [{ required: true, message: '请输入楼栋号' },{pattern:/^[\w]+$/,message:'楼栋号输入格式不正确'}]}
        ]"
        placeholder="请输入楼栋号"
      >
      </a-input>
      <span v-else>{{buildingInfo.number}}</span>
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="关联栋号"
    >
      <a-input-number :min="0" :max="15"  v-if="associateNumEdit&&dataflag!=='000'" :precision="1"  v-decorator="[
          'associateNum',
          {rules: [{}]}
        ]" />
      <span v-else>{{buildingInfo.associateNum}}</span>
      <a-icon type="plus-circle" @click="associateNumEdit=true" v-if="dataflag!=='000'" />
    </a-form-item>
    <a-form-item
      label="建筑层数"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol">
      <a-input-number :min="0" :max="15"  v-decorator="[
          'floor',
        ]" v-if="dataflag!=='000' "/>
      <span v-else>{{buildingInfo.floor}}</span>
    </a-form-item>
    <a-form-item
      label="预制层数"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol">
      <a-input-number :min="0" :max="15"  v-decorator="[
          'prefloor'
        ]"  v-if="dataflag!=='000'"/>
      <span v-else>{{buildingInfo.prefloor}}</span>
    </a-form-item>
    <a-form-item
      label="抗震等级"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol">
      <a-select
        v-if="dataflag!=='000'"
        v-decorator="[
          'protectLevel',
          {rules: []}
        ]"
        placeholder="请选择抗震等级"
        @change="handleSelectChange"
      >
        <a-select-option value="001">
          一级
        </a-select-option>
        <a-select-option value="002">
          二级
        </a-select-option>
        <a-select-option value="003">
          三级
        </a-select-option>
        <a-select-option value="004">
          四级
        </a-select-option>
        <a-select-option value="000">
         无
        </a-select-option>
      </a-select>
      <span v-else>{{buildingInfo.protectLevel}}</span>
    </a-form-item>
    <a-form-item
      label="单层建筑面积"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol">
      <a-input-number  v-decorator="[ 'area' ]" v-if="dataflag!=='000'"/>
      <span v-else>{{buildingInfo.prefloor}}</span>
    </a-form-item>
    <a-form-item
      label="备注"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol">
      <a-textarea  v-decorator="[
          'addition',
          {rules: [{}]}
        ]" v-if="dataflag!=='000'"/>
      <span v-else>{{buildingInfo.addition}}</span>
    </a-form-item>
    <p>构建类型</p>
    <a-table :columns="columns" :dataSource="dataSource" :rowKey=getKey :pagination=false  >
      <template slot="numberArrange" slot-scope="text, record, index">
        <div key="numberArrange">
          <a-input
            v-if="isEditable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.index,'numberArrange')"
          />
          <template v-else>{{text}}</template>
        </div>
      </template>
      <template slot="buildingType" slot-scope="text, record, index">
        <div key="buildingType">
          <a-select
            v-if="isEditable"
            :value="text"
            style="margin: -5px 0"
            @change="value=> handleSelectChange(value,record.index,'buildingType')"
          >
            <a-select-option value="001">
              结构
            </a-select-option>
            <a-select-option value="002">
              结构2
            </a-select-option>
          </a-select>
          <template v-else>{{text}}</template>
        </div>
      </template>
       <span slot="action" slot-scope="record" class="action" v-if="dataflag!=='000'">
         <img :src="require('../../assets/images/shanchu@2x.png')" alt="" @click="deleteBuilding(record)" style="width:14px;cursor:pointer;"/>
       </span>
    </a-table>

  </a-form>
</template>

<script>
  export default {
    props:['dataflag'],
    data () {
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12},
      };
      const columns = [
        { title: '序号', dataIndex: 'index', key: 'index'  },
        { title: '楼层段', dataIndex: 'numberArrange', key: 'numberArrange',scopedSlots: { customRender: 'numberArrange' } },
        { title: '构件类型', dataIndex: 'buildingType', key: 'buildingType',scopedSlots: { customRender: 'buildingType' } },
        { title: '操作', dataIndex: 'action', key: 'action', scopedSlots: { customRender: 'action' } },
      ];
      const dataSource = [
        { index:1, numberArrange: '——', buildingType:'001' },
        { index:2, numberArrange: '——', buildingType:'002' },
        { index:3, numberArrange: '——', buildingType:'002' },
      ];
      return {
        isEditable:true,
        buildingInfo:{},
        formLayout: 'horizontal',
        formItemLayout,
        form: this.$form.createForm(this),
        associateNumEdit:false,
        columns,
        dataSource:[]
      };
    },
    methods: {
      deleteBuilding(record) {

      },
      getKey(record) {
        return record.index;
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleSelectChange(value,index,column){
        const newData = [...this.dataSource];
        const  target= newData.filter(item=>item.index===index)[0];
        if(target){
          target[column]=value;
          this.dataSource=newData;

        }
      },
      handleChange(value, index, column) {
        const newData = [...this.dataSource];
         const  target= newData.filter(item=>item.index===index)[0];
               if(target){
                 target[column]=value;
                 this.dataSource=newData;

               }
      },
    },
    mounted(){

    }
  };
</script>
