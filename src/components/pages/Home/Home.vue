<template>
  <div id="Home">
    {{name}}
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
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
