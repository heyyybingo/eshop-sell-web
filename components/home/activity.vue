<template>
  <div class="eshop-activity">
      <div class="eshop-activity-left">

         <ProductHover :img="getAvatar(productList[0])" :productId="getId(productList[0])"/>
      </div>
      <div class="eshop-activity-right">
          <div class="eshop-activity-right-item">
              <ProductHover :img="getAvatar(productList[1])" :productId="getId(productList[1])"/>
          </div>

          <div class="eshop-activity-right-item">
              <ProductHover :img="getAvatar(productList[2])" :productId="getId(productList[2])"/>
          </div>
      </div>

      <div v-if="productList[3]" class="eshop-activity-next">
          <ProductHover :img="getAvatar(productList[3])" :productId="getId(productList[3])"/>
      </div>
  </div>
</template>

<script>
import ProductHover from '~/components/generalComp/productHover.vue'
export default {
  name: 'Hello',
  props:['imgs','productList'],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      getAvatar(product){
          if(!product){
              return ''
          }
          if(!product.slideshow){
              return ''
          }
          return product.slideshow.avatar
      },
      getId(product){
          if(!product){
              return null
          }
          return product.id
      }
  },
  components: {
      ProductHover
  },
};
</script>

<style lang="less" scoped>

.eshop-activity{
    height:380px;
    width: 100%;
    display: flex;
    overflow: hidden;
    &>div:not(:last-child){
        margin-right:16px;
    }
    &-left{
        
        // float:left;
        width: 3%;
        flex-grow: 3;
        height:100%;
    }
    &-right{
        
        height:100%;
        display: flex;
        flex-direction: column;
         width: 1%;
        flex-grow: 2;
        &-item{
            height:calc((100% - 16px) / 2 );
        }
        &-item:not(:last-child){
            margin-bottom: 16px;;
        }
    }

    &-next{
         width: 1%;
        flex-grow: 1;
    }
}
</style>
