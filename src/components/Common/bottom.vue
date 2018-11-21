<template>
  <div id="bottom">
   	<ul class="bottom">
      <li v-for='(item,idx) in bottomlist' :key='idx' @click='change(item.path)'>
        <p><i class="fa fa-university" aria-hidden="true"></i></p>
        <p>{{item.name}}</p>
      </li>
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
      bottomlist:[{name:'首页',path:'/home'},{name:'分类列表',path:'/good'}]
    }
  },
  methods:{
    change(path){
      this.$router.push(path);
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../styls/main.less);
.bottom {
    z-index: 9999;
  background: #fff;
  border-top: 1px solid #d5d5d5;
  position: fixed;
  bottom: 0px;
  left:0px;
  right: 0px;
  .h(50);
  display: flex;
  .fs(12);
  justify-content: space-around;
   background: #FFF;

  li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #d5d5d5;
    i{
      .fs(16);
    }
  }
}
</style>
