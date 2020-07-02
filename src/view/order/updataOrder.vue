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
    <div class="up-middle">
      <div class="up-middle-border">
        <div class="up-middle-font">单号</div>
        <div>
          <el-input v-model="danhao"></el-input>
        </div>
      </div>
      <div class="up-middle-border">
        <div class="up-middle-font">批号</div>
        <div>
          <el-input v-model="pihao"></el-input>
        </div>
        <div><i class="el-input__icon el-icon-search"></i></div>
      </div>
      <div class="up-middle-border">
        <div class="up-middle-font">供应商</div>
        <div>
          <el-input v-model="gongyingshang"></el-input>
        </div>
        <div><i class="el-input__icon el-icon-search"></i></div>
      </div>
      <div class="up-middle-border">
        <div class="up-middle-font">日期</div>
        <div>
          <el-date-picker type="date" v-model="datatime"></el-date-picker>
        </div>
      </div>
      <div class="up-middle-border">
        <div class="up-middle-font">预期到货</div>
        <div>
          <el-date-picker type="date" v-model="paperdata"></el-date-picker>
        </div>
      </div>
      <div class="up-middle-border">
        <div class="up-middle-font">备注</div>
        <div>
          <el-input v-model="beizhu"></el-input>
        </div>
      </div>
    </div>
    <div class="up-middle-select">
      <div>
        <el-input placeholder="请输入物料" suffix-icon="el-icon-search"></el-input>
      </div>
      <div style="padding-left: 10px">
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="padding-left: 10px">
        <el-input placeholder="输入数量"></el-input>
      </div>
      <div style="padding-left: 10px">
        <el-input placeholder="输入价格"></el-input>
      </div>
      <div style="padding-left: 10px">
        <el-button type="primary">添加明细</el-button>
      </div>
      <div style="align-self: center;color: #808080;padding-left: 5px">
        删除明细请在表内点击右键
      </div>
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
        title: '采购订单--编辑',
        danhao: 'magenimasi12',
        pihao: '批号一',
        gongyingshang: '马哥你妈死了',
        datatime: '',
        paperdata: '',
        beizhu: '马哥你妈死了',
        selectValue: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
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
    padding-top: 10px;
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .up-middle-border {
    display: flex;
    flex-direction: row;
    line-height: 40px;
    margin-right: 10px;
    border: 1px solid rgba(128, 128, 128, 0.35);
    border-radius: 2px;
    -moz-box-shadow: 2px 2px 5px #333333;
    -webkit-box-shadow: 2px 2px 5px #333333;
    box-shadow: 2px 2px 5px #333333;
    cursor: pointer;
  }

  .up-middle-font {
    padding-left: 5px;
  }

  .up-middle-select {
    display: flex;
    flex-direction: row;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #cdcdcd;
  }

</style>
<style>
  .up-middle-border .el-input__inner {
    border: none;
    width: 200px;
  }
</style>
