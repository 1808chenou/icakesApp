// 路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router';

 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/pages/Home/Home'
import GoodList  from '../components/pages/GoodList/Good.vue'
import Detail  from '../components/pages/Detail/detail.vue'
import My  from '../components/pages/My/my.vue'
import Login  from '../components/pages/My/login.vue'
import Reg  from '../components/pages/My/reg.vue'
import Car from '../components/pages/Shopcar/car.vue'
const router = new VueRouter({
  routes:[
   {  path: '/',redirect:'/home'},//重定向
   { path: '/home', component: Home ,name:'Home'},
   { path: '/car', component: Car ,name:'Car'},
   { path: '/good', component: GoodList ,name:'GoodList'},
   { path: '/detail', component: Detail ,name:'Detail'},
   { path:'/my',component:My, name:'my',children:[
   			{ path:'login',component:Login, name:'login'},
   			{ path:'reg',component:Reg, name:'reg'},
   ]}
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