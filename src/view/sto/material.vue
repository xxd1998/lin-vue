<template>
    <div>
        <my-nav/>
        <side-bar/>
         <div class="title">
             {{title}}
         </div>
         <div class="select">
             <div class="selected">
                 <el-input v-model="input" placeholder="物料id"></el-input>
             </div>
             <div class="selected"><el-input v-model="input" placeholder="物料名称"></el-input></div>
             <div class="selected">
                 <el-button type="primary">查询</el-button>
             </div>
                 <div class="selected">
                 <el-button type="primary" @click="$router.push('addmaterial')">添加</el-button>
             </div>
             
         </div>
        <div class="content">
             <el-table :data="tableData" style="width: 100%">
      
        <el-table-column prop="no" label="编号" ></el-table-column>
         <el-table-column prop="m_name" label="物料名"></el-table-column>
          <el-table-column prop="Pur_unit" label="采购单位"></el-table-column>
           <el-table-column prop="Sto_unit" label="库存单位" ></el-table-column>
             <el-table-column prop="Specs" label="产品规格" ></el-table-column>
             <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="$router.push('upmaterial')">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
     
    </el-table>

        </div>
    </div>
</template>
<script>
import SideBar from '../../components/sidebar'
import MyNav from '../../components/nav'
export default {
     components: {
        MyNav,
        SideBar
    },
      data() {
    return {
        title:'物料档案',
      input: '',
    tableData: [{
            
            no: '2016-05-02',
            m_name: '北京',
            Pur_unit: '2斤',
            Sto_unit:'300斤',
            Sto_unit:'200斤',
            Specs:'1斤'
          },
          {
            action:'',
            no: '2016-05-02',
            m_name: '北京',
            Pur_unit: '2斤',
            Sto_unit:'300斤',
            Sto_unit:'200斤',
            Specs:'1斤'
          },
          {
            action:'',
            no: '2016-05-02',
            m_name: '北京',
            Pur_unit: '2斤',
            Sto_unit:'300斤',
            Sto_unit:'200斤',
            Specs:'1斤'
          },
          {
            action:'',
            no: '2016-05-02',
            m_name: '北京',
            Pur_unit: '2斤',
            Sto_unit:'300斤',
            Sto_unit:'200斤',
            Specs:'1斤'
          },]
    }
    
    
  },
   methods: {
      handleDelete() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  

}
</script>
<style scoped>
.content{
   display: flex;
  
}
.title{
    line-height: 46px;
   width: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
    height: 46px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
}
.select{
   display: flex;
   position: relative;
   left: 20%;

}
.selected{
    margin: 20px;
}

</style>