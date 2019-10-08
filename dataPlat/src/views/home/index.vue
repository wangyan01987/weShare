<template>
  <div class="container">
   <p class="changeItem"><img src="../../assets/images/zhanshi@2x.png" alt=""><img src="../../assets/images/suolue@2x.png" alt=""></p>
    <div class="box">
         <div class="box-wrapper" v-for="item in itemList" @click="goToDetail(item.id)">
           <div class="box-item">
             <div class="item-img" >
               <img :src="item.img" style="width:100%;height:100%;"/>
               <p class="item-title" :title="item.title">{{item.title}}</p>
             </div>
             <p class="editor" >
               <img src="../../assets/images/bianji@2x.png" alt="编辑" @click="editItem(item.id,$event)">
               <img src="../../assets/images/shanchu@2x.png" alt="删除" @click="deleteItem(item.id,$event)" v-show="item.isEdit">
             </p>
           </div>
         </div>
       <div class="box-wrapper">
         <div class="box-item ">
           <div class="add-item">
             <a-icon type="plus"  @click="addItem" class="icon"/>
             <p>创建新项目</p>
           </div>
           <p class="editor"></p>
         </div>
       </div>

    </div>
    <div class="slide-item" @click='loadItem'>
      <p>滑动加载更多</p>
      <p><a-icon type="down" /></p>
    </div>
    <projectform ref="projectform" :dataflag="dataflag"></projectform>
  </div>
</template>

<script>
  import projectform from '@/components/ProjectForm'
    export default {
      name: "index",
      components:{projectform},
      data: function () {
        return {
          dataflag:0,
          itemList: [{
            id:'001',
            title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
            isEdit: true
          },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: false
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: false
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: true
            }],
          addItemList: [{
            title: '111111111111111',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
            isEdit: false
          },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: false
            },
            {
              title: '一号建筑设施一号建筑设施一号建筑设施一号建筑设施一号建筑设施',
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569918794415&di=73899c57a4a3a6b222ca52bad317026e&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20111006%2F6239936_092702973000_2.jpg',
              isEdit: false
            }]
        }
      },
      methods: {
        goToDetail(id){

          this.$router.push({name:'projectDetail',params:{projectId:id}});
        },
        loadItem() {
          //获取新的数据
          this.itemList=this.itemList.concat(this.addItemList);
        },
        editItem(id,e){
          //编辑信息 flag=1
          e.stopPropagation();
          this.dataflag=1;

         this.$refs.projectform.visible=true;


        },
        deleteItem(id,e){
         e.stopPropagation();
         let self=this;
          this.$confirm({
            title: '删除项目',
            content: '确认删除此项目？',
            okText: '确认',
            cancelText: '取消',
            okButtonProps: {
              props: {type:'danger'},
            },
            onOk(){
                  //删除信息操作
              self.$message.success('操作成功', 10)
            },
            onCancel(){

            }
          });

        },
        addItem(){
          //添加信息 flag=2
          this.dataflag=2;
          this.$refs.projectform.visible=true;
          console.log(this.dataflag)

        }
      },
      mounted() {

        var that = this;
        window.addEventListener("scroll", function () {
          if (document.body.scrollHeight <= window.screen.height + document.body.scrollTop) {

          //  that.loadItem();
          }
          else{

          }
        })

      }
    }
</script>

<style scoped>
    .box-item{
     width:100%;
      height: 18rem;
      background-color: #fafafa;
      box-shadow: 0 2px 6px 0
      #c8cacc;
      border-radius: 4px;

    }
    .box-wrapper{
      width:22rem;
      padding-right:20px;
      padding-bottom:20px;
     }
  .item-title{

      width: 100%;
      height: 48px;
      letter-spacing: 0;
      color: #ffffff;
      position:absolute;
    top:0;
       overflow: hidden;
    text-overflow: ellipsis;
    text-align:left;
    padding:4px 14px 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  background-color:rgba(100,100,100,0.5);

  }
  .item-img{

      width:100%;
      height: 14rem;
      background-color: rgba(229, 229, 229, 0.64);
      border-radius: 4px;
    position:relative;

  }
  .box{
    padding:0 13rem;
    display:flex;
    flex-wrap: wrap;
  }
  .box-item:hover{
  cursor:pointer;
  }
  .editor{
    height:4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 16px;
    opacity:0;
    transition:all 500ms ease-in-out;
  }
  .editor:hover{
    opacity:1;
  }
  .editor img{
    width:14px;
    height:14px;
    cursor:pointer;
  }
  .box-item .add-item{
    width: 100%;
    height: 14rem;
    background-color: #ebebeb;
    border-radius: 4px;
    padding-top:3rem;
  }
  .add-item .icon{
    font-size:3.2rem;
  }
  .slide-item{
    color:dodgerblue;
    cursor:pointer;
    width:100%;
  }
  .changeItem{
    text-align:right;
    margin-top:24px;
    margin-bottom: 24px;
    padding-right:2.4rem;
  }
  .changeItem img{
cursor:pointer;
    width:3.2rem;
  }
</style>
