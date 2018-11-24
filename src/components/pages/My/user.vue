<template>
    <div class='user'>
          {{name}}
          <ul>
            <li>头像烂</li>
            <li>订单</li>
            <li>全部订单</li>
            <li>会员等级</li>
            <li>优惠券</li>
            <li>积分</li>
            <li>个人资料</li>
            <li>安全设置</li>        
            <li>收货地址</li>
            <li @click="exit">退出当前账号</li>
          </ul>
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
    
}
</style>