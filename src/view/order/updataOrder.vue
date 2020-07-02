<template>
  <div>
    <my-nav/>
    <side-bar/>
    <div class="up-head">
      <div>
        <el-button type="primary"><i class="el-icon-check"></i>保存</el-button>
        <el-button type="primary"><<</el-button>
        <el-button type="primary">>></el-button>
      </div>
      <div>
        {{title}}
      </div>
      <div>
        <el-button>列表</el-button>
        <el-button>列定义</el-button>
        <el-button>打印 <i class="el-icon-caret-bottom"></i></el-button>
        <el-button>更多 <i class="el-icon-caret-bottom"></i></el-button>
      </div>
    </div>
    <div>

    </div>


  </div>
</template>

<script>
  import SideBar from '../../components/sidebar'
  import MyNav from '../../components/nav'

  export default {
    name: "updataOrder",
    components: {
      MyNav,
      SideBar
    },
    data() {
      return {
        title: '采购订单--编辑'
      }
    }
  }
</script>

<style scoped>
  .up-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f5f5f5;
    height: 46px;
    line-height: 46px;
  }

  .up-middle {
    height: 50px;
    display: flex;
    flex-direction: row;
    line-height: 50px;
  }
  .up-middle-border{
    border: 1px solid rgba(0, 0, 0, 0.39);
  }
</style>
<style>

</style>
