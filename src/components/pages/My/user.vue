<template>
    <div class='user'>    
          <ul>
            <li class="u1"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span>{{name}}</span></li>
            <li class="u2"><i class="fa fa-universal-access" aria-hidden="true"></i><span>我的订单</span></li>
            <li class="u3">
              <span><i class="fa fa-id-badge" aria-hidden="true"></i><br>全部订单</span>
              <span><i class="fa fa-list-alt" aria-hidden="true"></i><br>待付款</span>
              <span><i class="fa fa-truck" aria-hidden="true"></i><br>待收货</span>
              <span><i class="fa fa-check-square" aria-hidden="true"></i><br>已完成</span>
            </li>
            <li class="u4"><i class="fa fa-address-card" aria-hidden="true"></i><span>会员等级</span></li>
            <li class="u5"><i class="fa fa-cc" aria-hidden="true"></i><span>优惠券</span></li>
            <li class="u6"><i class="fa fa-database" aria-hidden="true"></i><span>积分</span></li>
            <li class="u7"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span>个人资料</span></li>
            <li class="u8"><i class="fa fa-deaf" aria-hidden="true"></i><span>安全设置</span></li>        
            <li class="u9"><i class="fa fa-truck" aria-hidden="true"></i><span>收货地址</span></li>
            <li @click="exit" class="u10">退出当前账号</li>
          </ul>
          <div class="u11">
            
          </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default{
    name:'user',
    components:{},
    data(){
        return {
           name:''
        }
    },
    methods:{
        exit(){
          window.localStorage.clear()
            this.$router.replace('/my/login')
        },
        showname(){
          let storage=window.localStorage
          let yonghuming = storage.getItem("name")
          this.name=yonghuming
        }
    },
    computed:{
        
    },
    created(){
      // let isLogin=true

      let storage=window.localStorage
      let yonghuming = storage.getItem("name")
      if(yonghuming==null){

       this.$router.replace('/my/login')

      }else{
        console.log(456)
        this.showname();
        
      }
    }
}   

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.user{
    background: #EEEFF0;
   // .padding(45,0,0,0);
    .u1{
      .padding(15,15,15,15);
      .h(70);
      background:#FFF;
      .lh(70);
      .fs(70);
       color: #999999;
      position: relative;
      .margin(0,0,15,0);
      border-bottom:1px solid #DCDCDC;
      span{
        position: absolute;
        .top(17);
        .left(100);
        display: inline-block;
        color: #333;
        .fs(18);
      }
    }
    .u2{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
      color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u3{
      .h(50);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
      color: #333;
      background:#FFF;
      display: flex;
      justify-content: space-around;
      span{
        i{
          .fs(28);
           color: #B7B7B7;
           .margin(0,0,5,0);
        }
        text-align: center;
        color: #333;
        .fs(14);
      }
    }
    .u4{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
       color: #999999;
      background:#FFF;
      .margin(15,0,15,0);
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u5{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      // .margin(15,0,15,0);
      .fs(22);
       color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u6{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .margin(0,0,15,0);
      .fs(22);
       color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,20);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u7{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
       color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u8{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
      color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u9{
      .h(23.5);
      border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
      .padding(10,15,10,15);
      .fs(22);
       color: #999999;
      background:#FFF;
      span{
        .margin(0,0,0,15);
        display: inline-block;
        color: #333;
        .fs(14);
      }
    }
    .u10{
      .margin(15,0,10,0);
      .padding(10,15,10,15);
       background:#FFF;
      .h(16);
      text-align:center;
      .fs(12);
      .lh(16);
       border-bottom:1px solid #DCDCDC;
      border-top:1px solid #DCDCDC;
    }
    .u11{
      .h(100);
      background: #EEEFF0;
    }
}
</style>