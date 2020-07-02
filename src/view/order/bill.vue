<template>
  <div>
    <my-nav/>
    <side-bar/>
    <div class="title">
      {{title}}
    </div>
    <div class="select">
      <div class="selected">
        <el-select v-model="value" filterable placeholder="请选择编号">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="selected">
        <el-select v-model="value" filterable placeholder="请选择名称">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="selected">
        <el-button type="primary">查询</el-button>
      </div>
      <div class="selected">
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
        <el-dialog title="添加采购订单" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item :label-width="formLabelWidth">
              <div class="dig">

                <el-input v-model="form.name" autocomplete="off" suffix-icon="el-icon-truck">
                  <template slot="prepend">仓库</template>
                </el-input>
              </div>

              <div class="dig">
                <el-input v-model="form.name" autocomplete="off" suffix-icon="el-icon-s-check">
                  <template slot="prepend">供应商</template>
                </el-input>
              </div>
              <div class="dig">
                <el-input v-model="form.name" autocomplete="off" suffix-icon="el-icon-s-custom">
                  <template slot="prepend">创建人</template>

                </el-input>
              </div>
              <div class="dig">
                <el-date-picker
                  v-model="c_date"
                  type="date"
                  placeholder="创建日期">
                </el-date-picker>

              </div>
              <div class="dig">
                <el-date-picker
                  v-model="c_date"
                  type="date"
                  placeholder="送达日期">
                </el-date-picker>
              </div>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="$router.push('goods')">确 定</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
    <div class="content">
      <el-table :data="tableData" style="width: 100%">

        <el-table-column prop="no" label="订单号"></el-table-column>
        <el-table-column prop="status" label="订单状态"></el-table-column>
        <el-table-column prop="s_name" label="供应商"></el-table-column>
        <el-table-column prop="c_date" label="订单创建日期"></el-table-column>
        <el-table-column prop="c_name" label="订单创建人"></el-table-column>
        <el-table-column prop="type" label="仓库"></el-table-column>
        <el-table-column prop="pric" label="订单价格"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
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
        title: '采购订单',
        input: '',
        value: '',
        c_date: '',
        a_date: '',

        tableData: [
          {

            no: '2016-05-02',
            status: '已发送',
            s_name: '阿里巴吧',
            c_date: '2020-02-02',
            c_name: 'lin',
            type: '北京',
            pric: '1元/斤'
          },
          {

            no: '2016-05-02',
            status: '已发送',
            s_name: '阿里巴吧',
            c_date: '2020-02-02',
            c_name: 'lin',
            type: '北京',
            pric: '1元/斤'
          },
          {

            no: '2016-05-02',
            status: '已发送',
            s_name: '阿里巴吧',
            c_date: '2020-02-02',
            c_name: 'lin',
            type: '北京',
            pric: '1元/斤'
          },
          {

            no: '2016-05-02',
            status: '已发送',
            s_name: '阿里巴吧',
            c_date: '2020-02-02',
            c_name: 'lin',
            type: '北京',
            pric: '1元/斤'
          },
        ],
        options: [{
          value: '选项1',
          label: '黄金糕'
        },
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
      },
      addbill() {

      },
      handleEdit(){
        this.$router.push({
          name:'updataOrder'
        })
      }
    }


  }
</script>
<style scoped>
  .content {
    display: flex;

  }

  .title {
    line-height: 46px;
    width: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
    height: 46px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
  }

  .select {
    display: flex;
    position: relative;
    left: 20%;

  }

  .selected {
    margin: 20px;
  }

  .dig {
    float: left;
    margin: 20px;
    width: 220px;
  }

</style>
