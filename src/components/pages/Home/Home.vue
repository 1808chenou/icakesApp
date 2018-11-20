<template>
  <div id="Home">
    <Banner></Banner>
    <list></list>
    <Ad v-for='(item,idx) in num' :key='idx' :test=item></Ad>
  </div>
</template>

<script>
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
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
#Home {
  .margin(45,0,50,0);
}
</style>
