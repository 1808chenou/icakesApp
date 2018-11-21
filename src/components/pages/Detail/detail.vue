<template>
  <div class="detail">
    <detailBanner></detailBanner>
    <Descdetail :test ='detailData'></Descdetail>
    <detailbottom></detailbottom>
  </div>
</template>

<script>
import detailBanner from './detailBanner'
import Descdetail from './desc.vue'
import detailbottom from './detailbottom.vue'



export default {
  name: 'detail',
  components: {
    detailBanner,Descdetail,detailbottom
  },
  data(){
    return {
      detailData:''
    }
  },
  methods:{
    getdata(path,idx){
      this.$axios.get(path)
      .then( (res)=> {
        console.log(res.data.products[idx]);
        this.detailData=res.data.products[idx];
      })
      .catch((error)=> {
        console.log(error);
      });
    }
  },
  created(){
    this.getdata(this.$route.params.detailpath,this.$route.params.idx);
    console.log(this.$route.params)
  }
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.detail {
  .padding(45,0,50,0);
}
</style>
