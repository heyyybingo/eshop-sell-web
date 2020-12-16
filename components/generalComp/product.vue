<template>
    <div :style="{width}" class="eshop-product">
        <div class="eshop-product-img">
            <img src="~/assets/images/other/img23.png"/>
        </div>
        <div class="eshop-product-name">"这是商品“</div>

        <div class="eshop-product-mask">
            <a-button type="primary">查看详情</a-button>
        </div>
    </div>
</template>

<script>
export default {
  props:['width'],
  name: 'Hello',
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="less" scoped>
.eshop-product{
        height:100%;
        position: relative;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        cursor: pointer;
        &-img{
           
            width:100%;
            height:75%;
        }
        &-name{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 600;
            height:calc(100% / 4);
            //line-height: calc(100% / 4);
            
        }
    &:hover{
        .eshop-product-mask{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }    
    &-mask{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.2);
        display: none;
    }
}
</style>
