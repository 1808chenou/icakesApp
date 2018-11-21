<template>
	<div class='backtop' @click='goTop'>
    <transition
      enter-active-class='animated fadeIn'
      leave-active-class='animated fadeOut'
    >
      <div class='contain' v-show='show'>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </transition>
	</div>
</template>

<script>
let timer = null
export default{
	name:'home',
	components:{},
    data(){
    	return {
         show:false,
         distance:250,
         isTop: true
    	}
    },
      mounted(){
    this.needScroll()
  },
    methods:{
      needScroll () {
      let clientHeight = document.documentElement.clientHeight
      let obtn = this.$refs.btn
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        
        if (!this.isTop) {
          clearInterval(timer)
        }
        this.isTop = false
      }
    },
      goTop(){
        // window.scrollTo(0,0);
        timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)

      },

    },
    computed:{

    },
    created(){
      window.addEventListener('scroll',()=>{
 
        let y=window.scrollY
        if (y>=this.distance) {
          if (this.show==false) {
            this.show=true
          }
          
        }else{
          if (this.show==true) {
              this.show=false
          }
          
        }
      })
    },
    updated(){
      console.log(11111)
    }
}	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.contain{
  position: fixed;
  bottom: 60px;
  right: 20px;
  .w(60);
  .h(60);
  border-radius: 50%;
  background: #000;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items:center;

}

</style>