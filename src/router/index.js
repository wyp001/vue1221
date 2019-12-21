import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import A from '@/components/componentA'
import B from '@/components/componentB'
import C from '@/components/componentC'
import  VantCom from '@/components/VantComponent'
import  TableMain from '@/components/TableMain'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VantCom',
      component: VantCom
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/c',
      name: 'C',
      component: C
    },
    {
      path: '/tableData',
      name: 'TableMain',
      component: TableMain
    }

  ]
})
