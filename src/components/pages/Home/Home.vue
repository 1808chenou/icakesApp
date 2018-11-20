<template>
  <div id="Home">
    <Banner></Banner>
  </div>
</template>

<script>
import Banner from './banner1.vue'
export default {
  name: 'Home',
  components: {
    Banner
  },
  data(){
  	return{
  		name:'这是home'
  	}
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
#Home {
  .padding(45,0,0,0);
}
</style>
