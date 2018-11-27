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
    methods:{

    },
    created(){
      // let isLogin=true
      // this.$router.replace('/my/login')
      this.$store.commit('setName');
      this.username= this.$store.state.name;

      console.log(this.username)

      console.log(111)

      if(this.username==null){

       this.$router.replace('/my/login')

      }else{
        this.$router.replace('/my/user')
      }
      
    },

    // beforeMount(){
    //   this.$router.replace('/my/login')

    // beforeUpdate(){

    //   this.$store.commit('setName');
    //   this.username= this.$store.state.name;
    //   if(this.username==null){

    //    this.$router.replace('/my/login')

    //   }else{
    //     this.$router.replace('/my/user')
    //   }

    // }
  }	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.my{
    .padding(45,0,51,0);
	
}
</style>