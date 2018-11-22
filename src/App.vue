<template>
  <div id="app">
  	<Header></Header>
    <!-- <Home></Home> -->
    <!-- <My></My> -->
      <!-- <router-view></router-view>	 -->
      <keep-alive include="good">
          <router-view></router-view>
      </keep-alive>
      
     <!--  <router-view v-if="!$route.meta.keepAlive"></router-view> -->
	<!-- <bottom></bottom> -->
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import Home from './components/pages/Home/Home.vue'
import bottom from './components/Common/bottom.vue'
import My from './components/pages/My/my.vue'




export default {
  name: 'App',
  components: {
    Home,Header,bottom,My
  }
}
</script>

<style>
#app {
  
}
</style>
