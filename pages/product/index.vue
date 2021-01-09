<template>
  <div class="eshop-product">
      <div class="eshop-product-content">
          <div class="eshop-breadcrumb">
          <a-breadcrumb separator=">">
              <a-breadcrumb-item><nuxt-link to="/home">首页</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="/allProduct">所有产品</nuxt-link></a-breadcrumb-item>
              <a-breadcrumb-item><nuxt-link to="">{{productInfo.name?productInfo.name:'--'}}</nuxt-link></a-breadcrumb-item>
          </a-breadcrumb>
    </div>


    <div class="eshop-product-item">
        <div class="eshop-product-img">
            <a-carousel arrows dots-class="slick-dots slick-thumb">
            <a class='eshop-product-img-slot' slot="customPaging" slot-scope="props">
            <img :src="getImgUrl(props.i)" />
            </a>
            <div v-for="(item,i) in slideshow" :key="i"  >
            <img :src="item" />
            </div>
            <!-- <div >
            <img v-if="getAvatars(productInfo,0)" :src="getAvatars(productInfo,0)" />
            </div>
            <div >
            <img :src="getAvatars(productInfo,1)" />
            </div>
            <div >
            <img :src="getAvatars(productInfo,2)" />
            </div>
            <div >
            <img :src="getAvatars(productInfo,3)" />
            </div>
            <div >
            <img :src="getAvatars(productInfo,4)" />
            </div> -->
        </a-carousel>
        </div>

        <div class="eshop-product-buy">
            <h1>{{productInfo.name?productInfo.name:'--'}}</h1>
            <p>类型：{{productInfo.brand?productInfo.brand.brand:'--'}}</p>
            <p>品牌：{{productInfo.type?productInfo.type.type:'--'}}</p>
            <p>详情:{{productInfo.detail?productInfo.detail:'--'}}</p>
            <div>
                <span class="eshop-product-buy-price">￥{{productInfo.price?productInfo.price:0}}</span>
                <span class="eshop-product-buy-selled">已售出{{productInfo.sales?productInfo.sales:0}}</span>
            </div>

            <div class="eshop-product-buy-form">
                <a-form-model layout="vertical">
                <a-form-model-item label="选择数量">
                    <a-input :min="0" :max="productInfo.stock?productInfo.stock:0" v-model="amount" :style="{width:'120px'}" type="number"></a-input>
                    <span>件</span>
                    <span>（库存{{productInfo.stock?productInfo.stock:0}}）</span>
                </a-form-model-item>

                <a-form-model-item>
                    <a-button @click="addToCart" :style="{width:'220px'}" type="primary">加入购物车</a-button>
                    
                </a-form-model-item>
            </a-form-model>
            </div>
        </div>
    </div>

    </div>

  </div>
</template>

<script>
import normal from '~/assets/images/other/img13.png'
export default {
  name: 'Hello',
  data() {
    return {
        normal,
        productInfo:{

        },
        amount:1,
        imgs:["/_nuxt/assets/images/other/img11.png","/_nuxt/assets/images/other/img12.png","/_nuxt/assets/images/other/img13.png"]
    };
  },
  computed: {
      productId:function(){
          return this.$route.query.id;
      },
      userId:function(){
         return  this.$store.state.user.userInfo?.id
      },
      slideshow:function(){
          let result=[];
          let slideshows=this.productInfo.slideshow
          if(slideshows){
              console.log("SLIDESHOW",slideshows)
              for(let i=1;i<=5;i++){
                  let index='avatar'+i
                  if(slideshows[index]){
                      result.push(slideshows[index]);
                  }
              }
          }
          if(result.length==0){
              result.push(this.normal)
          }
          console.log(result)
          return result;
      }
  },
  created() {
       this.refresh();
  },
  
  methods: {
      getAvatars:function(product,i){
          if(!product){
              return this.normal
          }
          if(!product.slideshow){
              return this.normal
          }
          let index='avatar'+i>0?i:'';
          return product.slideshow[index]
      },
      addToCart:async function(){
         try{
             if(!this.userId){
              this.$router.push('/login')
          }
             if(this.amount===0){
                return;
             }
          
          const amount=this.amount;
          const payload={
              productid:this.productId,
              number:this.amount,
              userid:this.userId
          }
          let res=await this.$axios.post('/shopping/addshopping',payload)
          let flag=res.data.data;
          if(res&&flag){
              this.$message.success('添加成功');
              this.amount=0;
          }else{
              this.$message.error('添加失败')
          }
         }catch(err){
             this.$message.error('添加失败')
             console.log(err)
         }finally{
             this.$store.dispatch('cart/fetchCartData',{userId:this.userId})
         }
      },
      refresh:async function(){
          try{
              if(this.productId===undefined||this.productId===null){
            //   console.log("redirect to 404")
            //   this.$router.replace({path:'/404'})
            return;
          }
          let payload={
              id:this.productId
          }
          console.log(this.productId)
         let res= await this.$axios.post('/product/getproduct',payload)
         let data=res.data.data;
         this.productInfo=data;
         console.log(this.productInfo)
          }catch(err){
              console.log(err)
          }
          //console.log(res)
      },
      getImgUrl(i) {
    
        return this.slideshow[i];
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
