<template>
  <div id="app">
  	<Header></Header>
    <!-- <Home></Home> -->
      <router-view></router-view>
	
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import Home from './components/pages/Home/Home.vue'

export default {
  name: 'App',
  components: {
    Home,Header
  }
}
</script>

<style>
#app {
  
}
</style>
