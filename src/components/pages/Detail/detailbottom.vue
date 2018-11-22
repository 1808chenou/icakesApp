<template>
  <div id="bottom">
   	<ul class="bottom">
      <li class="shou" @click='gohome'>
          <p>
            <i class="fa fa-university" aria-hidden="true"></i>
          </p>
          <p>首页</p>
      </li>
      <li class="car" @click='gocar'>
        <p>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </p>
        <p>购物车</p>
      </li>
      <li class="back" @click='back'>
        <p>
          <i class="fa fa-reply" aria-hidden="true"></i>
        </p>
        <p>返回</p>
      </li>
      <li class="add">加入购物车</li>
      <li class="buy">立即购买</li>
    </ul>
      <Size></Size>
  </div>
</template>

<script>
import Size from './size.vue'

export default {
  name: 'bottom',
  components: {
    Size
  },
  data(){
    return {
      name:'这里是bottom'
    }
  },
  methods:{
    gohome(){
      this.$router.push('/home');
    },
    gocar(){
      
    },
    back(){
      this.$router.go(-1)
    }

  },
  created(){
    console.log(this.$route);
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
#bottom{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  .bottom {
  background: #fff;
  .h(50);
  display: flex;
  .fs(12);
  color: #999;
  text-align: center;
  li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .shou,.car,.back{
    .w(45);
  }
  //.w(45);
  .add{
    .fs(14);
    color:#fff;
    background-color: #000;
    opacity: 0.5;
    .w(120);
  }
  .buy{
    .fs(14);
    color:#fff;
    background-color: #000;
    .w(120);
  }
}
}

</style>
 