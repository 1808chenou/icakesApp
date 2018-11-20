<template>
  <div class="banner">
   	   <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
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
    getdata(){
      this.$axios.get('/api/api/v1/cart/?token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542697760605', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted(){
     var swiper = new Swiper('.swiper-container', {
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
  .w(375);
  .h(236);
  background: pink;
}
</style>
