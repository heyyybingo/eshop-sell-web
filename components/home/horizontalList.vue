<template>
  <div class="eshop-horizontalList">
      <div @click="pos>0?pos=pos-1:null" class="eshop-horizontalList-left">
          <a-icon type="left" />
      </div>
        <div class="eshop-horizontalList-content">
             <div  :style="{marginLeft:`calc(${-pos} * 100%)`}" class="eshop-horizontalList-content-container">
                <div :key="item.id" v-for="(item) in productList" class="eshop-horizontalList-item">
                   <Product :img="getAvatar(item.product)" :product="item.product" width="100%"/>
                </div>
            </div>
        </div>
      <div @click="pos<Math.ceil(productList.length/4)-1?pos=pos+1:pos=0" class="eshop-horizontalList-right">
          <a-icon type="right" />
      </div>
  </div>
</template>

<script>
import Product from '~/components/generalComp/product.vue'
export default {
  name: 'Hello',
  props:['productList'],
  data() {
    return {
        pos:0,
        list:[1,2,3,4,5,6,7,8,9,10,11,12]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      getAvatar:function(product){
          console.log("HOR",product)
           if(!product){
              return ''
          }
          if(!product.slideshow){
              return ''
          }
          return product.slideshow.avatar
      }
  },
  components: {
      Product
  },
};
</script>

<style lang="less" scoped>

.eshop-horizontalList{
    display: flex;
    height:100%;
    &-left,&-right{
        flex-grow: 1;
        display: flex;
        align-items: center;
        font-size: 32px;
        width:44px;
        cursor: pointer;
    }
    &-content{
        width: calc(1440px - 88px);
        overflow: hidden;
        
        &-container{
            // display: flex;
            // flex-flow: row nowrap;
            height:100%;
            width:max-content;
            transition: .5s all ease;
        }
    }

    &-item{
        height:100%;
        display: inline-block;
        width:calc((1440px - 88px)  / 4) ;
        padding:0 10px;
       

    }
}
</style>
