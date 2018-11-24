<template>
  <div class="descdetail">
   	<div class="paiban">
          <p class="ename"><b>{{test.handle}}</b></p>
          <p class="cname">{{test.name}}</p>
          <p class="miaoshu">{{test.short_desc}}</p>
          <p class="jiage"><b>{{price}}</b></p>
    </div>
    <div class="time">
       <div class="left">
         送达时间
         <i class="fa fa-clock-o" aria-hidden="true"></i>
       </div>
       <div class="right">
         现在下单,最早<span>{{day}}</span>日<span>{{hours}}</span>时<span>{{minute}}</span>分送达
       </div>
     </div> 
     <div v-for='(item,idx) in test.images' :key='idx'>
       <img :src="item.src" alt="" >
     </div>
  </div>
</template>

<script>


export default {
  name: 'descdetail',
  components: {
   
  },
  data(){
    return {
      hours:'',
      minute:'',
      day:'今',
      price:0,
    }
  },
  props:['test'],
  methods:{
    getTime(){
      if(new Date().getHours()+2>=23){
        this.hours=9;
        this.day='明';
        this.minute=0;

      }else{
        this.hours=new Date().getHours()+2;
        this.day='今';
        this.minute=new Date().getMinutes();
      }
    },
    getprice(){
          if(this.test.price_min == this.test.price_max){

            this.price ='￥'+  this.test.price_min;
          }else{
            this.price = '￥'+ this.test.price_min +'-￥'+this.test.price_max;
          }
    }
  },
  created(){
    this.getTime();
    this.getprice();
  },
  watch:{
    test:function(newval,oldval){
    this.getprice();
      
    }
  }
  
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.descdetail {
  .paiban{
  .margin(0,0,0,15);
  .h(130);
    display: flex;
  flex-direction: column;
  justify-content: space-around; 
    .ename{
    .fs(24);
  }
  .cname{
    .fs(14);
    color:#333;
  }
  .miaoshu{
    color: #c3c3c3;
    .fs(13);
  }
  .jiage{
    color: #919191;
    .fs(18);
  }
  }
  .time{
    .h(55);
    .fs(12);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#888;
    border-bottom: 8px solid #eee;
    border-top: 8px solid #eee;
    box-sizing: border-box;
    i{
      color:#000;
    }
  }
  img{
    .w(355);
    .h(355);
  }
}
</style>
