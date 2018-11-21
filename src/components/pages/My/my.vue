<template>
	<div class='my'>
		 <!-- 这是我的界面 -->
     <!-- <My></My> -->
     <router-view></router-view>
	</div>
</template>

<script>

export default{
	name:'My',
	components:{},
    data(){
    	return {
          
    	}
    },
    computed:{
    	
    },
    created(){
    //   let isLogin=true
    //   if (isLogin) {
    //       console.log(111)
    //       this.$router.replace('/my/reg')
    //   }else{
    //     this.$router.replace('/my/login')
    //   }
    }
  }	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
    .padding(45,0,0,0);
	
}
</style>