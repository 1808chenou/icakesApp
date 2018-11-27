<template>
  <div id='Home'>
    <div class="home_nav">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for='(item,index) in navlist'
              @click='toggle(item.path)' :id='item.path==selInit?"sel":""'>{{item.title}}</li>
         
        </ul>
        <i class="fa fa-caret-right jiantou" aria-hidden="true" ></i>
    <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
         
  </div>
  <div class="list">
    <GoodList :path="selInit"></GoodList>
    <BackTop></BackTop>
     <img src="http://asset.ibanquan.com/asset/5a32190722bd3406c000226f/footer_have_none?design_theme_id=0&v=1513232647" alt="">
  </div>

  <bottom></bottom>

  
   


  </div>
  </template>
<!--  :class='selInit==item.path?"sel":""' -->
 <!-- @click='toggle(item.path)' -->
<script>
import Swiper from 'swiper'
import GoodList from './GoodList.vue'
import BackTop from './BackTop.vue'
import bottom from '../../Common/bottom.vue'
export default{
  name:'good',
  components:{GoodList,BackTop,bottom},
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
        console.log(this.selInit)

      },
      leave(){

      }
    },
    //  beforeRouteLeave(to, from, next) {
    //    if (from.path == "/detail") {
    //     from.meta.keepAlive = true;
    //   } else {
    //     from.meta.keepAlive = false;
    //   }
    //   next();
    // },
    created(){
  


        if(this.$route.params.path){
          this.selInit=this.$route.params.path;
        }else if(this.$route.params.total){
          this.selInit=this.$route.params.total;
          console.log(this.selInit)
          // console.log(0)
        }else if(!this.$route.params.total){
          let storage = window.localStorage;
          console.log(0)
          this.selInit=storage.getItem('tabname');
        }else{
          console.log(852)
              this.selInit='http://icak.es/api/v1/type/view?handle=bdcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542713382991'
        }
      },
      activated(){
        // console.log('hhhh')
        if(this.$route.params.path){
        this.selInit=this.$route.params.path;
        console.log(this.selInit)
      }else if(this.$route.params.total){
        this.selInit=this.$route.params.total;
        // console.log(this.selInit)
        // console.log(0)
      }else if(!this.$route.params.total){
        let storage = window.localStorage;
        this.selInit=storage.getItem('tabname');
      }
    },
    watch:{
      selInit:function(newval,oldval){
        let storage = window.localStorage;
        storage.setItem('tabname', this.selInit);
        console.log(storage.getItem('tabname'))
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
  // .margin(45,0,50,0);
  .padding(45,0,0,0);
  .home_nav{
    .jiantou{
      position: fixed;
      .right(2);   
      .top(50);
      .fs(20);
    }
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
   .list{
    .margin(0,0,51,0);
      img{
      // .w(318);
      .h(150);
          text-align: center;
    }
   } 
}
</style>
