<template>
  <div>
    <div class="size">
    
    
    </div>
   
  </div>
  
</template>

<script>


export default {
  name: 'size',
  components: {
    
  },
  data(){
    return {
      name:'这里是bottom'
    }
  },
  methods:{
   
  },
  created(){

  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.size {
  position: fixed;
  .bottom(0);
  left: 0px;
  right: 0px;
  background: pink;
  .h(236);
  z-index:9999;
}

</style>
 