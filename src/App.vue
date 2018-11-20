<template>
  <div id="app">
  	<Header></Header>
    <Home></Home>
	<bottom></bottom>
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
import Home from './components/pages/Home/Home.vue'
import bottom from './components/Common/bottom.vue'

export default {
  name: 'App',
  components: {
    Home,Header,bottom
  }
}
</script>

<style>
#app {
  
}
</style>
