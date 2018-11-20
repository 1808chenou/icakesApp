<template>
<<<<<<< HEAD
  <div id='Home'>
    <div class="home_nav">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for='(item,index) in navlist'
              @click='toggle(item.path)'>{{item.title}}</li>
        </ul>
    <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
  </div>
     <div class="list">
    <HomeList :path="selInit"></HomeList>
    <BackTop></BackTop>
=======
  <div id="Home">
    <Banner></Banner>
    <list></list>
    <Ad v-for='(item,idx) in num' :key='idx' :test=item></Ad>
>>>>>>> 4016c761ece921d6ed76a07449ec11dccf26e7da
  </div>

  </div>
  </template>
<!--  :class='selInit==item.path?"sel":""' -->
 <!-- @click='toggle(item.path)' -->
<script>
<<<<<<< HEAD
import Swiper from 'swiper'
import HomeList from './HomeList.vue'
import BackTop from './BackTop.vue'
export default{
  name:'Home',
  components:{HomeList,BackTop},
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

=======
import Banner from './banner1.vue'
import List from './list.vue'
import Ad from './ad.vue'


export default {
  name: 'Home',
  components: {
    Banner,List,Ad
  },
  data(){
  	return{
  		num:[{path:'http://asset.ibanquan.com/image/5a38e429b1b9575cd9000319/s.jpeg?v=1513677865',pm:1},{path:'http://asset.ibanquan.com/image/5a38da3c0dd76c175d0002dc/s.jpeg?v=1513675325',pm:3}]
  	}
  }
}
>>>>>>> 4016c761ece921d6ed76a07449ec11dccf26e7da
</script>

<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import url(../../../styls/main.less);
#Home {
<<<<<<< HEAD
  
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
      .sel{
        border-bottom:2px solid #000;
        color:#000;

        
      }
     }
   }
=======
  .margin(45,0,50,0);
>>>>>>> 4016c761ece921d6ed76a07449ec11dccf26e7da
}
</style>
