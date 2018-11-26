import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    name:'韩梅梅',
    slider:false
  },
  mutations: {
    setName(state){
      let storage = window.localStorage;
    	state.name =storage.getItem('name')
    },
    sliderShow(state,val){
    	state.slider=val
    }
  } 
})
//state 存放所有全局状态值（全局变量） 这里的数据只能通过mutation里的方法修改
//mutations 里面有一堆方法  方法的作用是修改  state 里的值
export default store