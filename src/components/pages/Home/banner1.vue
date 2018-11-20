<template>
  <div class="banner">
   	   <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://asset.ibanquan.com/asset/5b75955920663d67c6000158/index_slide_2?v=1534432601" alt="">
            </div>
            <div class="swiper-slide">
              <img src="http://asset.ibanquan.com/asset/5bc963ef53f4e32535000064/index_slide_1?v=1539924975" alt="">
            </div>
            <div class="swiper-slide">
              <img src="http://asset.ibanquan.com/asset/5bc962bd26a801265b000040/index_slide_3?v=1539924669" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  components: {
    
  },
  data(){
    return {
      name:'这里是banner'
    }
  },
  methods:{
    
  },
  mounted(){
     var swiper1 = new Swiper('#swiper1', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
.banner {
  border-bottom: 1px solid #f0f0f0;
  .w(375);
    .h(236);
  img{
    .w(375);
    .h(236);
  }
}
</style>
