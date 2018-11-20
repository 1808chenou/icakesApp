// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/pages/Home/Home'
const router = new VueRouter({
  routes:[
   // {  path: '/',redirect:'/home'},//重定向
   { path: '/home', component: Home ,name:'Home'}
  ]
})

// router.beforeEach((to, from, next) => {
// 	console.log('aaaaa')
//     console.log(to)
//     console.log(from)
//     console.log('bbbb')
//    next()
// })

 export default router