<template>
<div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-submenu>
      <el-menu-item index="2" @click="$router.push('material')">
        <i class="el-icon-menu"></i>
        <span slot="title">物料档案</span>
      </el-menu-item>
       <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title"  @click="$router.push('bill')" >采购订单</span>
      </el-menu-item>
       <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">直售</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">菜本成品</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">报料员</span>
      </el-menu-item>
       <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">配送</span>
      </el-menu-item>
       <el-menu-item index="8">
        <i class="el-icon-menu"></i>
        <span slot="title">加工</span>
      </el-menu-item>
       <el-menu-item index="9">
        <i class="el-icon-menu"></i>
        <span slot="title">进货</span>
      </el-menu-item>
      <el-menu-item index="10" >
        <i class="el-icon-document"></i>
        <span slot="title">每日任务</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
</div>
    
</template>
<script>
  export default {
   
     
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.sidebar{
    height: 100%;
    width: 15%;
    float: left;
}
</style>