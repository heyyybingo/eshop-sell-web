<template>
  <div class="eshop-product">
      <div class="eshop-product-content">
          <div class="eshop-breadcrumb">
          <a-breadcrumb separator=">">
              <a-breadcrumb-item><nuxt-link to="/home">首页</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="/allProduct">所有产品</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="">xxxxx</nuxt-link></a-breadcrumb-item>
          </a-breadcrumb>
    </div>


    <div class="eshop-product-item">
        <div class="eshop-product-img">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
            <a class='eshop-product-img-slot' slot="customPaging" slot-scope="props">
            <img :src="getImgUrl(props.i)" />
            </a>
            <div >
            <img src="~/assets/images/other/img11.png" />
            </div>
            <div >
            <img src="~/assets/images/other/img12.png" />
            </div>
            <div >
            <img src="~/assets/images/other/img13.png" />
            </div>
        </a-carousel>
        </div>

        <div class="eshop-product-buy">
            <h1>xxxxxx</h1>
            <p>介绍介绍介绍</p>
            <div>
                <span class="eshop-product-buy-price">￥450</span>
                <span class="eshop-product-buy-selled">已售出xxx</span>
            </div>

            <div class="eshop-product-buy-form">
                <a-form-model layout="vertical">
                <a-form-model-item label="选择数量">
                    <a-input :style="{width:'120px'}" type="number"></a-input>
                    <span>件</span>
                    <span>（库存xxxxxx）</span>
                </a-form-model-item>

                <a-form-model-item>
                    <a-button :style="{width:'220px'}" type="primary">加入购物车</a-button>
                    
                </a-form-model-item>
            </a-form-model>
            </div>
        </div>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
        imgs:["/_nuxt/assets/images/other/img11.png","/_nuxt/assets/images/other/img12.png","/_nuxt/assets/images/other/img13.png"]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
      getImgUrl(i) {
            
        return this.imgs[i];
        },
  },
  components: {},
};
</script>

<style lang="less" >
.eshop-product{
   background-color: @eshop-bg-grey;
   margin-top:@eshop-header-height;
   min-height: calc(100vh - @eshop-header-height);
   &-content{
    background-color: #fff;
    overflow: hidden;
    max-width:@eshop-max-content;
    margin:0 auto;
    padding:@eshop-content-pad-10;
    min-height: 1000px;
  }
  &-item{

  }
  &-img{
      float: left;
    //   width: 700px;
    //   height:500px;
      padding:@eshop-content-pad-10;

      .ant-carousel{
           width: 700px;
           height:500px;
           .slick-slider{
               width:100%;
                height:100%;
                .slick-list{
                    width:100%;
                    height:100%;
                }
               .slick-track{
                width:100%;
                height:100%;
                .slick-slide{
                    width:100%;
                    height:100%;
                    & div{
                        width:100%;
                        height:100%;
                    }
                }
               }
           }
           
      }
        &-slot{
           
            display: inline-block;
             width:80px;
            height:80px;
        }

        }
        .slick-thumb{
            bottom: -25px;
        }
        .slick-dots{
            .slick-active img{
            border: 3px solid grey;
        }
        
  }
  .eshop-product-buy{
      overflow: hidden;
      padding-left: 140px;
      &-price{
          font-size: 20px;
          font-weight: 700;
          color:red
      }
      &-selled{
          color:#555;
      }
      &-form{
          margin-top: 20px;
          font-size: 16px;
      }
  }
}
</style>
