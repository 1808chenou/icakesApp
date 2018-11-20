// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//路由
import  router from  './router'
//引入全局配置样式
// import  './styls/reset.less'
import './styls/reset.less'
//引入动画样式
import '../node_modules/animate.css/animate.css'
// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios=Axios// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios
//vuex全局
import  store from './store'
// mint-ui的使用
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
