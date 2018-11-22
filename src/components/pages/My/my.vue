<template>
	<div class='my'>
     <router-view></router-view>
     <bottom></bottom>
	</div>

</template>

<script>
import bottom from '../../Common/bottom.vue'
export default{
	name:'My',
	components:{bottom},
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