<template>
  <div>
    <my-nav/>
    <side-bar/>
    <div class="title">
      {{title}}
    </div>

    <div class="content">
      <div class="content-child">
        <el-input placeholder="请输入内容" v-model="m_name">
          <template slot="prepend">物料名称</template>
        </el-input>
      </div>
      <div class="content-child">
        <el-input placeholder="请输入内容" v-model="pur_unit">
          <template slot="prepend">采购单位</template>
        </el-input>
      </div>
    </div>


    <div class="content">
      <div class="content-child">
        <el-input placeholder="请输入内容" v-model="sto_unit">
          <template slot="prepend">库存单位</template>
        </el-input>
      </div>
      <div class="content-child">
        <el-input placeholder="请输入内容" v-model="specs">
          <template slot="prepend">产品规格</template>
        </el-input>
      </div>
    </div>
    <div class="content">
      <div class="content-child">
        <el-input placeholder="请输入内容" v-model="m_name">
          <template slot="prepend">物料编号</template>
        </el-input>
      </div>
    </div>
    <el-button type="primary">保存</el-button>

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
        title: '物料档案修改',
        m_name: '',
        pur_unit: '',
        sto_unit: '',
        specs: ''

      }
    }
  }

</script>
<style scoped>
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

  .content {

    display: flex;
    justify-content: space-around
  }

  .content-child {
    flex: 1;
    margin: 20px;
  }
</style>
