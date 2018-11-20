<template>
  <div id="Header">
   	<img src="http://asset.ibanquan.com/asset/5a32190422bd3406c000224d/logo" alt="">
  </div>
</template>

<script>


export default {
  name: 'Header',
  components: {
    
  }
}
</script>

<style lang="less" scoped>
@import url(../../styls/main.less);
#Header {
  .h(45);
  position: fixed;
  top:0px;
  left:0px;
  right:0px;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  background: #FFF;
  z-index: 9999;
=======
  z-index:999;
  background: #fff;
>>>>>>> 4016c761ece921d6ed76a07449ec11dccf26e7da
  img{
  	.w(65);
  	.h(30);
    
  }
}
</style>
