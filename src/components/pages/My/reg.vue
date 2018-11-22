<template>
    <div class='reg'>
         <div action="javascript:void(0);" class="jibai">
          <label class='haha'>账号<input type="text" name="" placeholder="手机" class="uname"></label><br>
           <label class='haha'>设置密码<input type="password" name="" placeholder="请输入密码" class="upassword"></label><br>
           <label class='haha'>确认密码<input type="enterword" name="" placeholder="请输入密码" class="upassword"></label><br>
           </div>
            <p class="shuoming">请输入账号</p>

            <input type="button" name="" value="注册" class="loginBtn" >
         
         <div class="laji">
             <div class="wang"><span>直接登录</span></div>
         </div>
    </div>
</template>

<script>

export default{
    name:'Reg',
    components:{},
    data(){
        return {
          
        }
    },
    computed:{
        
    },
    ceated(){
      // let isLogin=true
    }
}   

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.reg{
    background: #EEEFF0;
   .padding(45,0,0,0);
   .h(220);
    .jibai{
        .padding(0,15,0,15);
        text-align: center;
        // .h(170);
        background: #FFF;
        border:1px solid #DDDDDD;
        border-bottom:none;
        border-left:none;
        border-right:none;
        .haha{
            float:left;
            .h(50);
            .fs(14);
            .lh(50);
            border-top:1px solid #DDDDDD;

        }
        .uname{
                .padding(0,0,0,15);
                // float: right;
                .w(270);
                .h(45);
                .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
        }
        .upassword{
                .padding(0,0,0,15);
             // float: right;
                .w(270);
                .h(45);
                .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
        }
        .enterword{
                .padding(0,0,0,15);
             // float: right;
                .w(270);
                .h(45);
                .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
        }
        
    }
        .shuoming{
            display: block;
            width: 100%;
            .h(25);
            .fs(14);
            .lh(25);
            float:left;
            text-align: center;
        }
        .loginBtn{
             .margin(0,0,0,15);
            .w(345);
            .h(42);
            .fs(16);
            background: #000;
            color:#FFF;
        }
    .laji{
        .margin(10,0,0,0);
        .padding(0,10,0,10);
            color: #4685ee;
            text-decoration: none;
            .fs(14);
        .wang{
            float: left;
        }
    }
}
</style>