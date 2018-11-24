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
      // let isLogin=true
      let storage=window.localStorage
      let yonghuming = storage.getItem("name")
      if(yonghuming==null){

       this.$router.replace('/my/login')

      }else{
        this.$router.replace('/my/user')
      }
    }
  }	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
    .padding(45,0,0,0);
	
}
</style>