<template>
  <div class="banner">
   	 <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,idx) in img'>
              <img :src="item.src" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Vue from 'vue'
export default {
  name: 'banner',
  components: {
    
  },
  data(){
    return {
      img:''
    }
  },
  methods:{
    getdata(path,idx){
      this.$axios.get(path)
      .then( (res)=> {
        console.log(res.data.products[idx].images);
        this.img=res.data.products[idx].images;
        Vue.nextTick(()=>{
            this.lunbo();
        })
      })
      .catch((error)=> {
        console.log(error);
      });
    },
    lunbo(){
      var swiper1 = new Swiper('#swiper1', {
      loop: true,
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
  },
  created(){
    this.getdata(this.$route.params.detailpath,this.$route.params.idx);
    console.log(this.$route.params)
  },
  mounted(){
    // this.lunbo();
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

.banner {
    img{
      .w(375);
      .h(300);
    }
  
}
</style>
