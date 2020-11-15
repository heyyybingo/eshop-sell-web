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
  </div>
</template>

<script>
import ProductHover from '~/components/generalComp/productHover.vue'
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
      ProductHover
  },
};
</script>

<style lang="less" scoped>

.eshop-activity{
    height:380px;
    width: 100%;
    overflow: hidden;
    &-left{
        margin-right:16px;
        float:left;
        width: 55%;
        height:100%;
    }
    &-right{
        
        height:100%;
        display: flex;
        flex-direction: column;

        &-item{
            height:calc((100% - 16px) / 2 );
        }
        &-item:not(:last-child){
            margin-bottom: 16px;;
        }
    }
}
</style>
