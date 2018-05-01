import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Approval from '@/components/approval'
import OrderHistory from '@/components/OrderHistory'
import Apply from '@/components/applyTravel'
import Detail from '@/components/detail'
import addPeople from '@/components/addPeople'
import Test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/approval',
      name: 'approval',
      component: Approval
    },
    {
      path: '/orderHistory',
      name: 'orderHistory',
      component: OrderHistory
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
     },
     {
       path: '/addPeople',
       name: 'addPeople',
       component: addPeople,
       meta:{
         keepAlive:true
       }
      },
      {
        path: '/test',
        name: 'test',
        component: Test,
        meta:{
          keepAlive:true
        }
       }
  ]
})
