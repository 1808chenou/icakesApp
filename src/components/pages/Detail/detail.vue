<template>
  <div class="detail">
    <detailBanner></detailBanner>
    <Descdetail :test ='detailData'></Descdetail>
    <!-- <detailbottom></detailbottom> -->
    <div id="bottom">
    <ul class="bottom">
      <li class="shou" @click='gohome'>
          <p>
            <i class="fa fa-university" aria-hidden="true"></i>
          </p>
          <p>首页</p>
      </li>
      <li class="car" @click='gocar'>
        <p>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </p>
        <p>购物车</p>
      </li>
      <li class="back" @click='back'>
        <p>
          <i class="fa fa-reply" aria-hidden="true"></i>
        </p>
        <p>返回</p>
      </li>
      <li class="add" @click='changeAppear'>加入购物车</li>
      <li class="buy" @click='changeAppear'>立即购买</li>
    </ul>
  </div>
  <transition
    enter-active-class='animated fadeIn'
  >
  <div class="box" v-if='appear'>
    
  </div>
</transition>
  <transition
    enter-active-class='animated slideInUp'
  >
  <div class="size" v-if='appear'>
    <div class="top">
      <img :src="detailData.images[0].src" alt="">
      <p class="price">￥{{price}}</p>
      <p class="close" @click='appear=false'><i class="fa fa-times" aria-hidden="true"></i></p>
    </div>
    <div class="center" v-if='chicun'>
      <p class="like">尺寸,口味:</p>
      <p>
      <span class="xiao" v-for='(item,idx) in detailData.variants' :class='item.option_1==highlight?"addlight":""' :key='idx' @click='addclass(item)'>{{item.option_1}}</span>
        
      </p>
    </div>
    <div class="bottom">
      <span class="addnum">购买数量</span>&nbsp;&nbsp;&nbsp;
      <span class="jian" @click='jianiyi'>-</span>&nbsp;&nbsp;&nbsp;<input type="number" name="" :value="buynum" @blur='changenum($event)'>&nbsp;&nbsp;&nbsp;<span class="jia" @click='jiayi'>+</span>
      <span>(库存为</span><span>{{stock}}</span><span>件)</span>
    </div>
    <div class="bb">
      <p class="b1" @click='gobuy($event)'>加入购物车</p>
    <p class="b2" @click='gobuy($event)'>立即购买</p>
    </div>
  </div>
  </transition>
  </div>
</template>

<script>
import detailBanner from './detailBanner'
import Descdetail from './desc.vue'
import detailbottom from './detailbottom.vue'
import Size from './size.vue'
import { Toast } from 'mint-ui';
import $ from "jquery"

export default {
  name: 'detail',
  components: {
    detailBanner,Descdetail,Size
  },
  data(){
    return {
      detailData:'',
      appear:false,
      chicun:false,
      highlight:'',
      stock:0,
      buynum:1,
      price:0,
      username:'',
      nowpath:'',
      nowid:''
    }
  },
  methods:{
    // lijibuy(){
    //   console.log(111)
    //   this.gobuy();
    //   if(this.highlight=='' && this.chicun==true){
    //     Toast({
    //   message: '请选择商品属性',
    //   duration: 1000,
    //   //iconClass: 'fa fa-check'
    // });
    //   }else{
    //     this.$router.push('/car');
    //   }
    // },
    changenum(event){
      let el = event.currentTarget;
      if($(el).val()>=1){
        this.buynum = $(el).val();
        console.log($(el).val())
      }else{
        $(el).val(this.buynum);
      }
      
    },
    getdata(path,idx){
      this.$axios.get(path)
      .then( (res)=> {
       console.log(res.data)
        this.detailData=res.data.products[idx];
         this.getstock();
        //this.stock=this.detailData.variants[0].stock;
        if(this.detailData.options[0].values){
          this.chicun=true
        }
      })
      .catch((error)=> {
        console.log(error);
      })
    },
    getstock(){
       
       this.detailData.variants.map((item)=>{
           this.stock += Number(item.stock)
          return this.stock;
        })
    },
    gohome(){
      this.$router.push('/home');
    },
    gocar(){
      this.$router.push('/car');
    },
    back(){
      this.$router.go(-1)
    },
    changeAppear(){
      this.appear=true
    },
    addclass(val){
      this.highlight=val.option_1;
      this.stock=val.stock;
      this.price= val.price;
    },
    jianiyi(){
      if(this.buynum <=1 ){
        this.buynum=1;
      }else{
        this.buynum--;
      }
    },
    jiayi(){
      if(this.buynum >= this.stock){
        this.buynum =this.stock;
      }else{
        this.buynum++;
      }
    },
    gobuy(event){
      let btnel=$(event.currentTarget).text()
      if(this.highlight=='' && this.chicun==true){
        Toast({
      message: '请选择商品属性',
      duration: 1000,
      //iconClass: 'fa fa-check'
    });
      }else{
        console.log(this.chicun)
      this.appear=false;
      //console.log(this.detailData.options[0].values)
      if(this.username !== '' && this.chicun==true){
      this.$axios.post('./api/goods/getOne',this.$qs.stringify({
          goodsname:this.detailData.name,
          type:this.highlight,
          price:this.price,
          imgpath:this.detailData.images[0].src,
          //num:this.buynum,
          username:this.username
         }))
          .then( (res)=> {
           console.log(res.data.data.length);
           // var nnum =res.data.data[0].num;
           // var goodsid = res.data.data[0]._id;
           if(res.data.data.length ==0){
            console.log(111)
              this.$axios.post('./api/goods/addGoods',this.$qs.stringify({
          goodsname:this.detailData.name,
          type:this.highlight,
          price:this.price,
          imgpath:this.detailData.images[0].src,
          num:this.buynum,
          username:this.username
         }))
            .then( (res1)=> {
             console.log(res1.data)
             console.log(666);
             console.log(btnel)
             if( btnel =='立即购买'){
              this.$router.push('/car')
             }else{
              if(res1.data.err==-1){
                Toast({
                    message: '加入失败',
                    duration: 1000,
                    iconClass: 'fa fa-frown-o'
                  });
              }else{
                Toast({
                    message: '已加入购物车',
                    duration: 1000,
                    iconClass: 'fa fa-check'
                  });
              }
             }
            })
            .catch((error)=> {
              console.log(error);

            })
           }else{
            var nnum =res.data.data[0].num;
           var goodsid = res.data.data[0]._id;
            var nnnum =nnum+this.buynum;
            this.$axios.post('./api/goods/addOne',this.$qs.stringify({
          num:nnnum,
          id:goodsid
         }))
            .then( (res2)=> {
             console.log(res2.data)
             console.log(666);
             if( btnel =='立即购买'){
              this.$router.push('/car')
             }else{
                if(res1.data.err==-1){
                Toast({
                    message: '加入失败',
                    duration: 1000,
                    iconClass: 'fa fa-frown-o'
                  });
              }else{
                Toast({
                    message: '已加入购物车',
                    duration: 1000,
                    iconClass: 'fa fa-check'
                  });
              }
             }
            })
            .catch((error)=> {
              console.log(error);
            })
           }
          })
          .catch((error)=> {
            console.log(error);
          })
        

        
      }else if(this.username !== '' && this.chicun==false){
        console.log(this.detailData.name,this.price,this.detailData.images[0].src,this.username)
        this.$axios.post('./api/goods/getnotype',this.$qs.stringify({
          goodsname:this.detailData.name,
          //type:'',
          price:this.price,
          imgpath:this.detailData.images[0].src,
          //num:this.buynum,
          username:this.username
         }))
          .then( (res)=> {
           console.log(res.data);
           // var nnum =res.data.data[0].num;
           // var goodsid = res.data.data[0]._id;
           if(res.data.data.length==0){
            console.log(111)
              this.$axios.post('./api/goods/addGoods',this.$qs.stringify({
          goodsname:this.detailData.name,
          //type:this.highlight,
          price:this.price,
          imgpath:this.detailData.images[0].src,
          num:this.buynum,
          username:this.username
         }))
            .then( (res1)=> {
             console.log(res1.data)
             console.log(666);
              if( btnel =='立即购买'){
              this.$router.push('/car')
             }else{
                if(res1.data.err==-1){
                Toast({
                    message: '加入失败',
                    duration: 1000,
                    iconClass: 'fa fa-frown-o'
                  });
              }else{
                Toast({
                    message: '已加入购物车',
                    duration: 1000,
                    iconClass: 'fa fa-check'
                  });
              }
             }
            })
            .catch((error)=> {
              console.log(error);
            })
           }else{
            var nnum =res.data.data[0].num;
           var goodsid = res.data.data[0]._id;
            var nnnum =nnum+this.buynum;
            this.$axios.post('./api/goods/addOne',this.$qs.stringify({
          num:nnnum,
          id:goodsid
         }))
            .then( (res2)=> {
             console.log(res2.data)
             console.log(666);
             if( btnel =='立即购买'){
              this.$router.push('/car')
             }else{
                Toast({
                    message: '已加入购物车',
                    duration: 1000,
                    iconClass: 'fa fa-check'
                  });
             }
            })
            .catch((error)=> {
              console.log(error);
            })
           }
          })
          .catch((error)=> {
            console.log(error);
          })
        
      }
      }
      
    },
    getprice(){
          if(this.detailData.price_min == this.detailData.price_max){
            this.price =  this.detailData.price_min;
          }else{
            this.price =this.detailData.price_min +'-￥'+this.detailData.price_max;
          }
    },
  },

  created(){
     this.nowpath=this.$route.params.detailpath;
    this.nowid=this.$route.params.idx;
        if(!this.nowpath){
          let storagepath =JSON.parse(localStorage.getItem("pathid")).path;
          let storageid =JSON.parse(localStorage.getItem("pathid")).nowid;
          this.getdata(storagepath,storageid);
        }else{

    console.log(this.nowpath)
     let obj ={};
        obj.path=this.nowpath;
        obj.nowid=this.nowid;
        let storage = window.localStorage;
        storage.setItem("pathid", JSON.stringify(obj));
        console.log(JSON.parse(localStorage.getItem("pathid")));

          this.getdata(this.nowpath,this.nowid);

        }
    this.getprice();
    this.$store.commit('setName');
    this.username= this.$store.state.name;
    console.log(this.username)
  },
  watch:{
    detailData:function(newval,oldval){
    this.getprice();
    console.log(this.nowpath,this.nowid)
      
    },
    

  },
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.detail {
  .padding(45,0,50,0);
  #bottom{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  .bottom {
  background: #fff;
  .h(50);
  display: flex;
  .fs(12);
  color: #999;
  text-align: center;
  li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .shou,.car,.back{
    .w(45);
  }
  //.w(45);
  .add{
    .fs(14);
    color:#fff;
    background-color: #000;
    opacity: 0.5;
    .w(120);
  }
  .buy{
    .fs(14);
    color:#fff;
    background-color: #000;
    .w(120);
  }
}
}
.box{
  position: fixed;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  background-color: rgba(0,0,0,.5);
  z-index:999;
}
.size {
  position: fixed;
  .bottom(0);
  left: 0px;
  right: 0px;
  background: #fff;
  .h(270);
  z-index:9999;
  .top{
    .h(60);
    border-bottom: 1px solid #ddd;
    position: relative;
    img{
      .w(68);
      .h(68);
      border: 1px solid #ccc;
      position: absolute;
      top: -26px;
      left: 20px;
    }
    .price{
        color: #f44;
        .fs(14);
        .w(229);
        .padding(18,0,0,100);
    }
    .close{
      .fs(20);
      position: absolute;
      .top(16);
      .right(20);
    }
  }
  .center{
    .w(304);
    .padding(0,0,0,30);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .h(102);
    .fs(12);
    color: #606060;
    .xiao{
      box-sizing: border-box;
      border-color: #f7f7f7;
      background: #f7f7f7;
      .h(28);
      .padding(4,8,4,8);
      display: inline-block;
      text-align: center;
      .lh(22);
      .margin(0,6,0,0)
    }
    .addlight{
      border: 1px solid #000;
    }
    .like{
      .padding(10,0,0,12);
    }
  }
  .bottom{
    .w(260);
    .h(58);
    .fs(12);
    .lh(58);
    .padding(0,0,0,30);
    input{
      .w(26);
      .h(26);
      border: none;
      text-align: center;
    }
    .addnum,.jian,.jia{
      font-weight: 600;
    }
  }
  .bb{
    .h(50);
    .fs(14);
    color:#fff;
    text-align: center;
    .lh(50);
    .b1{
      .w(188);
      background: #000;
      opacity: 0.5;
      position: fixed;
      bottom: 0px;
      .h(50);
      left: 0px;
    }
    .b2{
      .w(188);
      background: #000;
      position: fixed;
      bottom: 0px;
      .h(50);
      right: 0px;
    }
  }
}
}
</style>
