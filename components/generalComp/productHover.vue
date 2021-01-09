<template>
    
        <div class="eshop-productHover" @click="toProduct">
            <div class="eshop-productHover-img" >
                <img :src="img?img:normal"/>
            </div>
        </div>
   
</template>

<script>
import normal from '~/assets/images/other/img33.jpg'
export default {
  name: 'Hello',
  props:['img','productId'],
  data() {
    return {
        normal
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      toProduct:function(){
          console.log(this.productId)
          if(this.productId){
              this.$router.push({
              path:'/product',
              query:{
                  id:this.productId
              }
          })
          }
      }
  },
  components: {},
};
</script>

<style lang="less" scoped>
.eshop-productHover{
    position: relative;
    width:100%;
    height:100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items:center;
    &-img{
        transition: 1s all ease;
        width:100%;
        height:100%;
        
    }
    &::before{
        transition:  1s all ease;
        content:"";
        position: absolute;
        width:100%;
        height:100%;
       
    }
    
    &:hover{
         &::before{

                transform: scale(0.95);
                border:3px solid white;
                z-index: 100;
            }
        .eshop-productHover-img{
             transform: scale(1.1);
            
        }
    }
    
}
</style>
