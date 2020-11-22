<template>
  <div class="eshop-activity">
      <div class="eshop-activity-left">

         <ProductHover/>
      </div>
      <div class="eshop-activity-right">
          <div class="eshop-activity-right-item">
              <ProductHover/>
          </div>

          <div class="eshop-activity-right-item">
              <ProductHover/>
          </div>
      </div>

      <div v-if="imgs[3]" class="eshop-activity-next">
          <ProductHover/>
      </div>
  </div>
</template>

<script>
import ProductHover from '~/components/generalComp/productHover.vue'
export default {
  name: 'Hello',
  props:['imgs'],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
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
