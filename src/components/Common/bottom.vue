<template>
  <div id="bottom">
   	<ul class="bottom">
      <li>
        <p><i class="fa fa-university" aria-hidden="true"></i></p>
        <p>首页</p>
      </li>
      <li>
        <p><i class="fa fa-th-large" aria-hidden="true"></i></p>
        <p>分类列表</p>
      </li>
      <li>
        <p><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></p>
        <p>购物车</p>
      </li>
      <li>
        <p><i class="fa fa-user" aria-hidden="true"></i></p>
        <p>我</p>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'bottom',
  components: {
    
  }
}
</script>

<style lang="less" scoped>
@import url(../../styls/main.less);
.bottom {
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
  z-index: 9999;
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
