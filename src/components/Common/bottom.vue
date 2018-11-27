<template>
  <div id="bottom">
   	<ul class="bottom">
      <li v-for='(item,idx) in bottomlist' :key='idx' @click='change(item)'>
        <p><i :class="item.icon" aria-hidden="true"></i></p>
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
      bottomlist:[{name:'首页',path:'/home',icon:'fa fa-university'},{name:'分类列表',path:'/good',icon:'fa fa-th-large'},{name:'购物车',path:'/car',icon:'fa fa-cart-arrow-down'},{name:'我',path:'/my',icon:'fa fa-user'}]
    }
  },
  methods:{
    change(item){
      if(item.name=='分类列表'){
        this.$router.push({name:'GoodList',params:{
          path:'http://icak.es/api/v1/type/view?handle=bdcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713382991'
        }})
      }else{
        this.$router.push(item.path);
      }
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
