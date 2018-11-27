<template>
  <div class="ad">
   	<img :src="test.path" alt="">
    <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(item,idx) in cakedetail' :key='idx'>
        <img :src="item.images[0].src" alt="">
        <p>{{item.name}}</p>
        <p class="desc">{{item.short_desc}}</p>
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
import { Toast } from 'mint-ui';
export default {
  name: 'ad',
  components: {
    
  },
  data(){
    return{
      cakedetail:[]
    }
  },
  props:['test'],
  methods:{
    getdata(test){
      this.$axios.get('http://icak.es/api/v1/page/view?handle=front&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542705308375')
      .then( (res)=> {
        // console.log(this.num)
        this.cakedetail = res.data.page.snippets[test.pm].products;
        // console.log(res.data.page.snippets[test.pm].products);
        console.log(this.cakedetail);
        Vue.nextTick(()=>{
          this.lunbo();
        })
      })
      .catch((error)=> {
        console.log(error);
      });
    },
    lunbo(){
      var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    },
    
  },
  created(){
    this.getdata(this.test);
    
  },
  mounted(){
    window.onscroll = function(){
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      // console.log(scrollTop,windowHeight,scrollHeight)
      // console.log(scrollTop+windowHeight)
      if(scrollTop+windowHeight===scrollHeight){
        Toast({
            message: '到底啦',
            position: 'bottom',
            duration: 1000
          });
      }

    }
//     window.onscroll = function(){
//       let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
//       let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
//       let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
//       // console.log(scrollTop,windowHeight,scrollHeight)
//       // console.log(scrollTop+windowHeight)
//       if(scrollTop+windowHeight===scrollHeight){
//         Toast({
//             message: '到底啦',
//             position: 'bottom',
//             duration: 1000
//           });
//       }

//     }
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

.ad{
  img{
    .h(236);
    .w(374);
  }
  .swiper-container{
    .h(155);
    .swiper-slide{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .w(150);
      margin:0px;
      .fs(12);
      color: #666;
      img{
        .w(90);
        .h(90);
      }
      .desc{
        color: #b9b9b9;
      }
    }
  }
}
</style>
