<template>
  <div class="eshop-brand">
      <div class="eshop-brand-row">
          <div :key="index" v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10]" class="eshop-brand-col">
              <Product />
          </div>
      </div>
          

    
  </div>
</template>

<script>
import Product from '~/components/generalComp/product.vue'
export default {
  name: 'Hello',
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
      Product
  },
};
</script>

<style lang="less" scoped>

.eshop-brand{
    width:100%;
    .eshop-brand-row{
      display: flex;
      flex-wrap: wrap;
    }
    .eshop-brand-col{
        &:not(:nth-child(5n)){
          margin-right: 16px;
        }
        width:calc((100% - 4 * 16px)/ 5)
    }
}
</style>
