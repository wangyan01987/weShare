<template>
   <div class="box-container">
     <p style="text-align:right;" class="action-btn"><a-button  type="primary" @click="addBuilding">+新建单体</a-button></p>
     <a-table :columns="columns" :dataSource="dataSource" :rowKey='getKey' :pagination="pagination" :customRow="click" :locale="{emptyText: '暂无数据'}">
       <span slot="action" slot-scope="record,index" class="action">
         <img :src="require('../../assets/images/bianji@2x.png')" alt="" @click="editBuilding(record,$event,index)"/>
         <img :src="require('../../assets/images/shanchu@2x.png')" alt="" @click="deleteBuilding($event,record.index,index)" />
       </span>
     </a-table>
     <info-form :dataflag="dataflag" ref="infoform"></info-form>
   </div>
</template>

<script>
  import  InfoForm from './infoForm'
    export default {
        name: "index",
       components:{InfoForm},
      data(){
        const columns = [
          { title: '序号', dataIndex: 'index', key: 'index',customRender:(text, record, index)=>`${index+1}`},
          { title: '楼栋名称', dataIndex: 'name', key: 'name' },
          { title: '楼栋号', dataIndex: 'number', key: 'number' },
          { title: '关联栋号', dataIndex: 'assiocateNum', key: 'assiocateNum' },
          { title: '建筑层数', dataIndex: 'floor', key: 'floor' },
          { title: '预制层数', dataIndex: 'preFloor', key: 'preFloor' },
          { title: '抗震等级', dataIndex: 'protectLevel', key: 'protectLevel' },
          { title: '单层建筑面积m²', dataIndex: 'area', key: 'area' },
          { title: '构建类型', dataIndex: 'buildType', key: 'buildType' },
          { title: '操作', dataIndex: '', key: 'x', scopedSlots: { customRender: 'action' } },
        ];
        const dataSource = [
          { index:1, name: '——', number:'001', assiocateNmu: '002', floor: '14',preFloor:'14',protectLevel:'三级',area:112,buildType:'楼板、墙、梁' },
          {index:2, name: '——', number:'002', assiocateNmu: '002', floor: '14',preFloor:'14',protectLevel:'三级',area:112,buildType:'楼板、墙、梁' },
          { index:3, name: '——', number:'003', assiocateNmu: '002', floor: '14',preFloor:'14',protectLevel:'三级',area:112,buildType:'楼板、墙、梁' },
          {index:4, name: '——', number:'004', assiocateNmu: '002', floor: '14',preFloor:'14',protectLevel:'三级',area:112,buildType:'楼板、墙、梁' },

        ];
          return{
            dataSource,
            columns,
            pagination:{},
            dataflag:'000'
          }
      },
      methods:{
        deleteBuilding(e,index){
            e.stopPropagation();
          this.$confirm({
            title: '删除单体',
            iconType:'close-circle',
            content: '确认删除此单体？一旦将单体删除，所有与此单体相关信息、文件将会被清除。',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
              let dataSource=[...this.dataSource];
              this.dataSource=dataSource.filter(item=>item.index!==index);
              this.$message.success('删除成功！');
            }
          });
        },
        editBuilding(record,e){
          e.stopPropagation();
          this.$refs.infoform.visible=true;
          this.dataflag='001';
        },
          addBuilding(){
   this.$refs.infoform.visible=true;
   this.dataflag='002';
          },
          getKey(record){
               return record.index;
          },
        click(record,index){
          let self=this;
            return{
              props:{
                    style:'cursor:pointer'
              },
              on:{
                click(){
                  self.$refs.infoform.visible=true;
                  self.dataflag='000';
                }
              }
            }
        },
        fetch (params = {}) {
          // console.log('params:', params);
          // reqwest({
          //   url: 'https://randomuser.me/api',
          //   method: 'get',
          //   data: {
          //     results: 10,
          //     ...params,
          //   },
          //   type: 'json',
          // }).then((data) => {
          //   const pagination = { ...this.pagination };
          //   // Read total count from server
          //   // pagination.total = data.totalCount;
          //   pagination.total = 200;
          //pagination.pageSize='20'
          //   this.loading = false;
          //   this.data = data.results;
          //   this.pagination = pagination;
           //
          // });
        }
      },
      mounted(){
          this.fetch();
      }
    }
</script>

<style scoped>
   .box-container{
     width: 82%;
     height: 57.7rem;
     background-color: #ffffff;
     border: solid 1px #d9d9d9;
     margin:2rem auto;
   }
  .action-btn{
    padding:2rem;
  }
  .action img{
    width:14px;
    cursor:pointer;
    margin-left:1rem;
  }
</style>
