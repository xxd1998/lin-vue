import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'
import material from '@/view/sto/material.vue'
import bill from '@/view/order/bill.vue'
import addmaterial from '@/view/sto/addmaterial.vue'
import upmaterial from '@/view/sto/upmaterial.vue'
import goods from '@/view/order/goods.vue'
import updataOrder from "../view/order/updataOrder";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/material',
      name: 'material',
      component: material
    },
    {
      path: '/updataOrder',
      name: 'updataOrder',
      component: updataOrder
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/addmaterial',
      name: 'addmaterial',
      component: addmaterial
    },
    {
      path: '/upmaterial',
      name: 'upmaterial',
      component: upmaterial
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },


  ]
})
