<template>
  <div class="eshop-allProducts">
    <div class="eshop-allProducts-content">

        <div class="eshop-breadcrumb">
          <a-breadcrumb separator=">">
              <a-breadcrumb-item><nuxt-link to="/home">首页</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="">所有产品</nuxt-link></a-breadcrumb-item>
              
          </a-breadcrumb>
        </div>

        <div class="eshop-allProducts-types">
            <Types/>
        </div>

        <div class="eshop-allProducts-filter">
            <a-form-model :form="form" layout="inline">
                <a-form-model-item label="排序">
                  <a-form-model-item name="sell" noStyle>
                    <a-button @click="form.sell=!form.sell">销量

                      <a-icon v-if="form.sell" type="arrow-up" />
                      <a-icon v-if="!form.sell" type="arrow-down" />
                    </a-button>
                  </a-form-model-item>
                  <a-form-model-item name="price" noStyle>
                    <a-button @click="form.price=!form.price">价格

                      <a-icon v-if="form.price" type="arrow-up" />
                      <a-icon v-if="!form.price" type="arrow-down" />
                    </a-button>
                    
                  </a-form-model-item>
                  <a-form-model-item name="time" noStyle>
                    <a-button @click="form.time=!form.time">上架时间

                      <a-icon v-if="form.time" type="arrow-up" />
                      <a-icon v-if="!form.time" type="arrow-down" />
                    </a-button>
                    
                  </a-form-model-item>
                 
                  <!-- <a-radio-button value="a">
                    销量
                    <a-icon type="arrow-up" />
                  </a-radio-button>
                  <a-radio-button value="b">
                    价格
                    <a-icon type="arrow-down" />
                  </a-radio-button>
                  <a-radio-button value="c">
                    Beijing
                  </a-radio-button>
                  <a-radio-button value="d">
                    上架时间
                  </a-radio-button> -->
                </a-form-model-item>

                <a-form-model-item  label="仅显示有货" name="exist">
                  <a-switch v-model="form.exist" />
                </a-form-model-item>
            </a-form-model>

            <div class="eshop-allProducts-sum">
              <span>共</span>
              <span class="number">xxx</span>
              <span>件商品</span>
            </div>
        </div>

        <div class="eshop-allProducts-products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  </div>
</template>

<script>
import Types from '~/components/allProducts/types.vue'
import Product from '~/components/generalComp/product.vue'
export default {
  name: 'Hello',
  data() {
    return {
      form:{
        sell:true,
        price:true,
        time:true,
        exist:true
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch:{
    form:{
      handler:function(newValue,oldValue) {   //特别注意，不能用箭头函数，箭头函数，this指向全局
 
            console.log(newValue,oldValue)
 
      },
 
      deep: true    
    }
  },
  components: {
    Types,
    Product
  },
}
    Types;
</script>

<style lang="less" >

.eshop-allProducts{
   background-color: @eshop-bg-grey;
   margin-top:@eshop-header-height;
   min-height: calc(100vh - @eshop-header-height);
   
  &-content{
    background-color: #fff;
    overflow: hidden;
    max-width:@eshop-max-content;
    margin:0 auto;
    padding:@eshop-content-pad-10;
  }
  &-types{
    margin: @eshop-content-m-10;
  }
  &-filter{
    display:flex;
    justify-content: space-between;
    align-items: center;


  }
  &-sum{
    &>span{
      font-weight: 600;

    }
    &>.number{
      color:#dddddd;
    }
  }
  &-products{
    display: grid;
    width:100%;
    grid-template-columns: repeat(4, calc((100% - 60px ) / 4));
    grid-gap: 20px 20px;
    // grid-template-rows: 25% 25% 25% 25%;
  }
}
</style>
