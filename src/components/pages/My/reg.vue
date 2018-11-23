<template>
    <div class='reg'>
         <div action="javascript:void(0);" class="jibai">
          <label class='xixi '>账号<input type="text" name="" placeholder="手机" class="uname" v-model="userName"></label><br>
           <label class='haha'>设置密码<input type="password" name="" placeholder="请输入密码" class="upassword" v-model="password"></label><br>
           <label class='haha'>确认密码<input type="password" name="" placeholder="请输入密码" class="enterword" v-model="enterword"></label><br>
           </div>
            <p class="shuoming">{{shuoming}}</p>

            <input type="button" name="" value="注册" class="loginBtn" @click="login" >
         
         <div class="laji">
             <div class="wang"><span @click="change">直接登录</span></div>
         </div>
    </div>
</template>

<script>

export default{
    name:'Reg',
    components:{},
    data(){
        return {
           userName: '',
            password: '',
            enterword:'',
            shuoming:''
        }
    },
    methods:{
        login(){
            if(this.userName == "" && this.password == ""){
            this.shuoming = '请输入账号名密码'
             return;
            }else{     
                if (!this.userName){
                      console.log('请输入用户名');
                      this.shuoming = '请输入用户名'
                      return;
                    }else{                    
                        if (!/^1[3456789]\d{9}$/.test(this.userName)){
                            this.shuoming = '手机号码不正确'
                        }                   
                    }
                if (this.password === ''){
                     this.shuoming = '请输入密码'
                    } else if(!/^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password)){
                      this.shuoming = '密码不合法'
                    }
                if (this.enterword === ''){
                     this.shuoming = '请输入密码'
                    } else if(this.password !== this.enterword){
                      this.shuoming = '密码不一样'
                    }
            }

            if(this.password == this.enterword && /^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password) && /^1[3456789]\d{9}$/.test(this.userName) ){
                // http://127.0.0.1:4000/admin/getsign

                  this.$axios.post('/api/admin/getsign',this.$qs.stringify({
                    name:this.userName,
                    pass:this.password
                  })
                    )
                  .then((res)=> {
                    console.log(res.data)
                          console.log(456)    
                  })
                  .catch((err)=> {
                    console.log(err);
                    console.log(8963)
                  });
                // console.log('注册成功')
            }else{
                console.log('注册失败')
            }          
        },
        change(){
            this.$router.push('/my/login');
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
   // height: 100%;
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

            .h(45);
            .fs(14);
            .lh(45);
            border-top:1px solid #DDDDDD;

        }
        .xixi{
             float:left;
            .h(45);
            .fs(14);
            .lh(45);
            border-top:1px solid #DDDDDD;
            // .padding(0,15,0,15);
        }
        .uname{
                .padding(0,0,0,42);
                // float: right;
                .w(270);
                .h(40);
                // .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
                 border-radius:0px;
        }
        .upassword{
                .padding(0,0,0,15);
             // float: right;
                .w(270);
                .h(38);
                // .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
                border-radius:0px;
        }
        .enterword{
                .padding(0,0,0,15);
             // float: right;
                .w(270);
                .h(38);
                // .lh(45);
                .fs(15);
                color: #333;
                border: none;
                // border-bottom:1px solid #DDDDDD;
                outline:none;
                 border-radius:0px;
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
             .margin(0,0,15,15);
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