<template>
  <div class="car">
    <div class="top">
      <p class="topleft">
        <input type="checkbox" @click='allchecked($event)' :checked='isCheckedAll'>
        <span>全选</span>
        <span @click='alldel'>删除</span>
      </p>
      <p class="topright">清除下架商品</p>
    </div>
    <ul class="hat">
      <li v-for='(item,idx) in gift' :key='idx'>
        <img :src="item.path" alt="">
        <span>{{item.giftname}}</span>
        <input type="button" value="添加"></input>
      </li>
    </ul>
    <ul class="goodslist">
      <li v-for ='(item,idx) in cardata' :key='idx'>
        <input type="checkbox" name="" @click='schecked(item._id,$event)' :checked='goodsid.indexOf(item._id)>=0'>
        <div class="center">
          <div class="centertop">
            <img :src="item.imgpath" alt="">
            <p>{{item.goodsname}}</p>
          </div>
          <div class="centerbottom">
            种类:{{item.type}}
          <i class="fa fa-sort-desc" aria-hidden="true"></i>
        </div>
        </div>
        <div class="carright">
          <span class="danjia">{{item.price}}</span>
          <span @click='remove(item._id)'>删除</span>
          <p>
            <span class="btn1" @click='jiayi(item)'>+</span>
            <input @blur='changenum($event,item)' type="num" :value='item.num'>
            <span class="btn1" @click='jianiyi(item)'>-</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="jiesuan">
      <div class="jieleft">
        <p class="zongji"><span>总计:￥</span><span>{{dollar}}</span></p>
        <p>(不含运费)</p>
      </div>
      <div class="jieright">下单</div>
    </div>
    <bottom></bottom>
    <p v-if='!username'>请先登录</p>
  </div>
  

  
  </template>
<script>
import bottom from '../../Common/bottom.vue'
import { Toast } from 'mint-ui';
import $ from "jquery"

export default {
  name: 'car',
  components: {
    bottom
  },
  data(){
  	return{
  		gift:[{path:'http://asset.ibanquan.com/image/5895f7bfb1b9571423001958/s_120x120.jpeg?epoch=1486',giftname:'环保数字蜡烛'},{path:'http://asset.ibanquan.com/image/5895f5259bedc407dc001ab2/s_120x120.jpeg?epoch=1486',giftname:'生日派对帽'}],
      cardata:[],
      isCheckedAll:true,
      goodsid:[],
      obj:{},
      dollar:0,
      alldollar:0,
      username:''
  	}
  },
  methods:{
    changenum(event,item){
      let inputel= event.currentTarget;
      console.log($(inputel).val());
      if($(inputel).val()>=1){
        this.numupdata($(inputel).val(),item._id)
      }else{
        $(inputel).val(item.num)
      }
    },
    getdata(){
      this.$store.commit('setName');
    this.username= this.$store.state.name;
      console.log(this.username)
       this.$axios.post('./api/goods/getGoods',this.$qs.stringify({
        username:this.username,
       }))
      .then( (res)=> {
        if(res.data.data.length ==0){
          this.dollar=0;
        }
        console.log(res.data)
        console.log('feifei')
        this.cardata =res.data.data;
        this.goodsid=[];
        this.cardata.map((item)=>{
          this.goodsid.push(item._id);
          return this.goodsid;
        })
        res.data.data.map((item)=>{
          this.dollar += (item.num*item.price);
          this.alldollar = this.dollar;
          return this.dollar;
        })
        console.log(this.dollar)

      })
      .catch((error)=> {
        console.log(error);
      });
    },
    remove(id){
      //console.log(id)
      this.$axios.post('./api/goods/delGood',this.$qs.stringify({
        id:id
       }))
      .then( (res)=> {
        console.log(res.data)
        this.getdata();
        Toast({
            message: '删除成功',
            duration: 1000,
            iconClass: 'fa fa-check'
          });
      })
      .catch((error)=> {
        console.log(error);
      });
    },
    allchecked(event){
      var allel = event.currentTarget;
      if(allel.checked == false){
        this.dollar = 0;
      }else{
        this.dollar= this.alldollar;
      }
        this.isCheckedAll =!this.isCheckedAll;
        if(!this.isCheckedAll){
          this.goodsid=[];
          console.log(this.goodsid)
        }else{
          this.goodsid=[];
          this.cardata.map((item)=>{
              this.goodsid.push(item._id);
              return this.goodsid;
            })
          console.log(this.goodsid)
        }

 
    },
    schecked(id,event){
      console.log(id)
      if(this.goodsid.indexOf(id)>=0){
          this.goodsid.map((item,idx)=>{
              if(item == id){
              this.goodsid.splice(idx,1);
              //console.log(this.goodsid)
            }
          })
      }else{
        this.goodsid.push(id);
        //console.log(this.goodsid)
      }
      if(this.cardata.length===this.goodsid.length){
          this.isCheckedAll=true;
        }else{
          this.isCheckedAll=false;
        }
        var el=event.currentTarget;
        let danjiael =Number( $(el).next().next().find('span').filter('.danjia').text());
        let numel=Number($(el).next().next().find('p').find('input').val());
        console.log(el.checked);
        if(el.checked ==true){
            this.dollar += numel*danjiael;
        }else{
          this.dollar -= numel*danjiael;
        }
        console.log(this.dollar);
    },
    alldel(){
      console.log(this.goodsid);
      this.goodsid.map((item,idx)=>{
        //console.log(item)
        this.obj[idx] =item;
        return this.obj;
      })
      this.$axios.post('./api/goods/alldelGood',this.$qs.stringify({
          idArr:this.obj,
         }))
        .then( (res)=> {
          console.log(res.data);
          this.getdata();
          Toast({
              message: '删除成功',
              duration: 1000,
              iconClass: 'fa fa-check'
            });
        })
        .catch((error)=> {
          console.log(error);
        });
    },
    numupdata(num,id){
            this.$axios.post('./api/goods/updateNum',this.$qs.stringify({
              id:id,
              num:num
             }))
            .then( (res)=> {
              console.log(res.data)
              this.getdata();
              Toast({
                  message: '修改成功',
                  duration: 1000,
                  iconClass: 'fa fa-check'
                });
            })
            .catch((error)=> {
              console.log(error);
            });
    },
    jianiyi(item){
      if(item.num <=1 ){
        this.remove(item._id);
      }else{
        item.num--;
      }
      this.numupdata(item.num,item._id);
    },
    jiayi(item){
      item.num++;
      this.numupdata(item.num,item._id);
    },
  },
  created(){
    this.getdata();

  },
  // watch:{
  //   goodsid:function(newval,oldval){
  //     console.log(this.goodsid)
  //   }
  // }

  
   
}
</script>

<style lang="less" scoped>
@import url(../../../styls/main.less);
.car {
  .margin(45,0,50,0);
  .top{
    display: flex;
    justify-content: space-between;
    .padding(0,20,0,20);
    .h(36);
    .lh(36);
    color: #777;
    .fs(12);
    .topleft{
      .w(100);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .hat{
      .h(30);
      border-top: 5px solid #f0f0f0;
      display: flex;
      justify-content: space-between;
      background: #f0f0f0;
      .fs(12);
      li{
        .w(183);
        .h(25);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img{
          .w(24);
          .h(24);
        }
      }
    }
    .goodslist{
      .padding(0,0,42,0);
      li{
        display: flex;
        //justify-content: space-between;
        .h(112);
        .fs(12);
        .padding(6,15,6,15);
        input{
          .margin(25,20,0,0);
        }
        .center{
          .margin(10,60,0,0);
          .w(160);
          .centertop{
            display: flex;
            justify-content: space-around;
            img{
              .w(79);
              .h(70);
            }
          }
          .centerbottom{
            .lh(24);
            .w(212);
            .h(24);
            border:1px solid #d5d5d5;
            box-sizing: border-box;
            position: relative;
            i{
              color:#ccc;
              .fs(20);
              position: absolute;
              .right(10);
              .bottom(6);
            }
          }
        }
        .carright{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-end;
          input{
            text-align: center;
            .w(38);
            .h(20);
            .margin(0,0,0,0);
            border:1px solid #ccc;
          }
          button{
            .w(20);
            .h(20);
          }
        }
      }
      
    }
    .jiesuan{
      .h(42);
      position: fixed;
      left: 0px;
      right:0px;
      .bottom(51);
      background: #fff;
      border-top: 1px solid #d5d5d5;
      display: flex;
      justify-content: space-between;
      .jieright{
        .w(91);
        .h(42);
        color: #fff;
        background-color: #000;
        .fs(16);
        .lh(42);
        text-align: center;
      }
      .jieleft{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-end;
        .w(270);
        .fs(14);
        .zongji{
            color: #f71;
        }
      }
      
    }
}
</style>
