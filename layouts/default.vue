<template>
  <div>

    <Header :cartTotal="cartTotal" :loginStatus="loginStatus"/>
    <Nuxt />
  </div>
</template>
<script>
import Header from '~/components/generalComp/Header.vue' 
export default {
  components: {
    Header
  },
  computed:{
    cartTotal:function(){
      return this.$store.state.cart.total
    },
    loginStatus:function(){
      return this.$store.state.user.loginStatus
    },
    userId:function(){
      return this.$store.state.user.userInfo?.id
    }
  },
  created(){
    console.log(this.loginStatus)
  },
  updated(){

  },
  watch:{
      userId:{
        
      handler:function(newVal,oldVal){
        if(newVal){
          this.$store.dispatch('cart/fetchCartData',{userId:newVal});
        }
      },
 
      immediate:true   
       } 
      // $route:function(to,from){
      //     console.log("router changed")
      //     console.log(to)
      //     let body=document.getElementsByTagName("body")[0]
      //     if(to.fullPath!=="home"){
      //       body.classList.contains("")
      //       body.classList.add("")
      //     }
      // }
  }
}
</script>
<style>
html,body{
  height:auto;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
img{
  height:100%;
  width:100%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
