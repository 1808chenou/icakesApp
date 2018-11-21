<template>
  <div id="bottom">
   	<ul class="bottom">
      {{name}}
    </ul>
  </div>
</template>

<script>


export default {
  name: 'bottom',
  components: {
    
  },
  data(){
    return {
      name:'这里是banner'
    }
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.bottom {
  .h(50);
  background: pink;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
 