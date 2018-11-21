<template>
  <div id='Home'>
    <div class="home_nav">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for='(item,index) in navlist'
              @click='toggle(item.path)' :id='item.path==selInit?"sel":""'>{{item.title}}</li>
        </ul>
    <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
  </div>
     <div class="list">
    <GoodList :path="selInit"></GoodList>
    <BackTop></BackTop>
  </div>

  </div>
  </template>
<!--  :class='selInit==item.path?"sel":""' -->
 <!-- @click='toggle(item.path)' -->
<script>
import Swiper from 'swiper'
import GoodList from './GoodList.vue'
import BackTop from './BackTop.vue'
export default{
  name:'Home',
  components:{GoodList,BackTop},
    data(){
      return {
        navlist:[{title:"生日蛋糕",path:'http://icak.es/api/v1/type/view?handle=bdcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713382991'},
        {title:"纸杯蛋糕",path:'http://icak.es/api/v1/type/view?handle=cupcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713424389'},
        {title:"盒子蛋糕",path:'http://icak.es/api/v1/type/view?handle=boxes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713440278'},
        {title:"蛋卷切片",path:'http://icak.es/api/v1/type/view?handle=cuts&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713459460'},
        {title:"附件配饰",path:'http://icak.es/api/v1/type/view?handle=accessories&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713473517'}],
        selInit:'http://icak.es/api/v1/type/view?handle=bdcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713382991'
      }
    },
    methods:{
      initSwiper(){
         var swiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          // spaceBetween: 5,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });
      },
      toggle(item){
        this.selInit = item 

      }
    },
    mounted(){
    this.initSwiper()
    }


    
} 

</script>

<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import url(../../../styls/main.less);
#Home {
  
  .padding(45,0,0,0);
  .home_nav{
     ul{
       // .w(350);
       // margin: 0px auto;
      li{
        // .w(84);
        .h(29);
          margin: 0 auto;
          color: #666;
          display: block;
          float: none;
         .fs(14);
         border-bottom:2px solid #FFF;
         .lh(29);
         text-align:center;
      }
      #sel{
        border-bottom:2px solid #000;
        color:#000;
      }
      
     }
   }
}
</style>
