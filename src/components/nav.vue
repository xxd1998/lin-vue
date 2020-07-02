
<template>
    <div class="nav">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">物料管家</el-menu-item>
   <el-menu-item index="2">个人中心</el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4">订单管理  </el-menu-item>
</el-menu>
    </div>
</template>
<script>
  export default {
      name:'MyNav',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.nav{
  width: 100%;
  position: absolute;
  top: 0;
}
</style>