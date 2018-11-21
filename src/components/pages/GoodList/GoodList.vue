<template>
<ul class='homeList'>
  <!-- text-transform:capitalize; -->
       <li  v-for='(item,index) in homeList' :key='index'>
        <div class="hezi">
          <img v-lazy="item.feature_image.src" alt="">
        </div>
        <div class="paiban">
          <p class="ename"><b>{{item.vendor.name}}</b></p>
          <p class="cname">{{item.name}}</p>
          <p class="miaoshu">{{item.short_desc}}</p>
          <div class="haha">
            <span class="jiage"><b>￥{{item.price|getDate}}</b></span>
            <span class="buya">购买</span>
          </div>
        </div> 
      </li>
      
  </ul>
</template>

<script>
  import  Vue from 'vue';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(InfiniteScroll);

export default{
	name:'GoodList',
	components:{},
  props:['path'],
    data(){
    	return {
        homeList:[],
        name:112,
        // path:''
      }
    },
   methods:{
      getData(){
        console.log(123);
  //     // http://icak.es/api/v1/type/view?handle=cupcakes&token=9dd5934c294149a8aaba5a3540d7f709&rnd=1542698947024
      this.$axios.get(`${this.path}`)
      .then((res)=>{
        console.log(res.data.products)
        // console.log(res.data.products[0].images[0].src)
        this.homeList=this.homeList.concat(res.data.products)
        console.log(this.homeList)
      })
      .catch((err)=>{
        console.log(err)
      })
      }
  },
  watch:{
    path:function(newVal,oldVal){
      this.homeList=[]
      this.getData()
    }
  },
    created(){
        this.getData(),
        console.log(this.$route.params.total);
        this.path=this.$route.params.total;
      }
}	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.homeList{
    .w(375);
    margin: 0px auto;
  li{
    float:left;
    .w(175);
    .padding(15,5,15,5);
    border-top: 2px solid #EDEDED;
    border-left: 1px solid #EDEDED;
    border-right: 1px solid #EDEDED;
    border-bottom: 1px solid #EDEDED;

    .hezi{
      .w(175);
      .h(175);
      img{
       width: 100%;
       height: 100%;
      } 
    }
    .paiban{

      .w(170);
      .ename{
        display: block;
        overflow: hidden;
        .w(170);
        .h(20);
        .fs(14);
        .lh(20);
        color: #000;
      }
      .cname{
        .h(20);
        .fs(12);
        .lh(20);
        color: #333;
      }
      .miaoshu{
        .h(20);
        overflow: hidden;
        .fs(13);
        .lh(22);
        color: #999;

      }
      .haha{
        .h(22);
        .jiage{
          display: block;
           float:left;
        .w(130);
        .h(22);
        .fs(12);
        .lh(22);
        height: auto;
        color:#919191;
        }
        .buya{
          display: block;
          float:left;
        .w(40);
        .h(22);
        background: #000;
        text-align:center;
        color:#FFF;
        .fs(12);
        .lh(20);
        height: auto;
        }
      }
      
    }
    
  }
   
}
</style>