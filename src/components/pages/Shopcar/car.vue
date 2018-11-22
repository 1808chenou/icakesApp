<template>
  <div class="car">
    <bottom></bottom>
  </div>
  

  
  </template>
<script>
import bottom from '../../Common/bottom.vue'


export default {
  name: 'car',
  components: {
    bottom
  },
  data(){
  	return{
  		
  	}
  },
  
   
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.car {

  .margin(45,0,50,0);
}
</style>
