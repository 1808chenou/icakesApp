<template>
	<div class='login'>
         <div action="javascript:void(0);" class="jibai">
          <label class='haha'>账号<input type="text" name="" placeholder="手机" class="uname" v-model="userName"></label><br>
           <label class='haha'>密码<input type="password" name="" v-model="password" placeholder="请输入密码" class="upassword"></label><br>
           </div>
            <p class="shuoming">{{shuoming}}</p>

            <input type="button" name="" value="登录" class="loginBtn"   @click="login">
         
         <div class="laji">
             <div class="wang"><span>忘记密码?</span></div>
             <div class="gologin">
                 <span @click="change">立即注册</span>
             </div>
         </div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default{
	name:'Login',
	components:{},
    data(){
    	return {
            userName: '',
            password: '',
            shuoming:'',
    	}
    },
    methods:{
         login(){
            this.shuoming='';
            if(this.userName == "" && this.password == ""){
            this.shuoming = '请输入账号名密码'
             return;
            }else{     
                 if (!this.userName){
                      console.log('请输入用户名');
                      this.shuoming = '请输入用户名'
                      return;
                    }else{
                      if (this.userName !== ''){ 
                            if (!/^1[3456789]\d{9}$/.test(this.userName)){
                                this.shuoming = '手机号码不正确'
                            }
                      }
                    }
                      if (this.password === '') {
                         this.shuoming = '请输入密码'
                        } else if(!/^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password)){
                          this.shuoming = '密码不合法'
                        }

                        if(/^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.password) && /^1[3456789]\d{9}$/.test(this.userName)) {


                            this.$axios.post('/api/admin/getlogin',this.$qs.stringify({
                                    name:this.userName,
                                    pass:this.password,

                                })
                            )
                           .then((res)=> {
                              console.log(res);
                              if(res.data.err==0){
                                      console.log('登录成功')
                                      console.log(res.data.data[0].name)
                                      let storage = window.localStorage
                                  storage.setItem("name",res.data.data[0].name)
                                  // storage.setItem("password",res.data.data[0].pass)
                                     Toast({
                                      message: '登陆成功',
                                      duration: 1000,
                                      iconClass: 'fa fa-check'
                                    });
                                     this.$router.replace('/my/user')
                                  }else if(res.data.err==-1){
                                       console.log('登录失败')
                                        Toast({
                                      message: '账号或密码错误',
                                      duration: 1000,
                                      iconClass: 'fa fa-check'
                                    });
                                  }          
              
                          })
 
                        }
            }           
        },
         change(){
            this.$router.push('/my/reg');
        },
        getlogin(){
              

        }
        // this.$axios.post('/api/admin/getlogin',this.$qs.stringify({
        //             name:this.userName,
        //             pass:this.password,
        //             mail:this.umail,
        //             code:this.ucode
        //           })
            // )
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
.login{
    background: #EEEFF0;
   .padding(45,0,0,0);
   // .h(230);
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
        .uname{
                .padding(0,0,0,15);
                // float: right;
                .w(300);
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
                .w(300);
                .h(40);
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
            color:#333;
            float:left;
            text-align: center;

        }
        .loginBtn{
             .margin(15,0,15,15);
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
        .gologin{
            float: right;
        }
    }
}
</style>