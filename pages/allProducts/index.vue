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
            <Types :itemKey="'id'" :brand="brand" :brandSelectedKeys="brandSelectedKeys" :typesSelectedKeys="typesSelectedKeys" :types="types" @brandChange="brandChange" @typesChange="typesChange"/>
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
              <span class="number">{{total}}</span>
              <span>件商品</span>
            </div>
        </div>
        <a-spin :spinning="fetching">
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        <div class="eshop-allProducts-products">
            <Product v-for="(product) in products" :key="product.id" :img="getAvatar(product)" :product="product" width="100%"/>
            <!-- <Product @click="toProduct"/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/> -->
        </div>
        </a-spin>
        <div :style="{display:'flex',justifyContent:'flex-end'}">
          <a-pagination
            v-model="current"
            show-size-changer
            :page-size.sync="size"
            :total="total"
            
            @change="onPageChange"
            @showSizeChange="onShowSizeChange"
          />
    </div>
        </div>
  </div>
</template>

<script>
import Types from '~/components/allProducts/types.vue'
import Product from '~/components/generalComp/product.vue'
import axios from 'axios'
let cancelList=null;
export default {
  name: 'Hello',
  data() {
    return {
      fetching:false,
      form:{
        sell:true,
        price:true,
        time:true,
        exist:true
      },
      current:1,
      size:10,
      total:0,
      brand:[],
      brandSelectedKeys:[],
      types:[],
      typesSelectedKeys:[],
      products:[]
    };
  },
  computed: {},
  created() {
    this.refreshTop();
    this.refreshList();
  },
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
      },
    refreshTop:async function(){
      try{
        let typesRes=await this.$axios.get("/type/all");
        let brandRes=await this.$axios.get("/brand/all");


        console.log(typesRes)
        console.log(brandRes);

        let brandArr=brandRes.data.data;
        let typesArr=typesRes.data.data;
        this.brand=brandArr;
        this.types=typesArr;
      }catch(err){
        console.log(err)
      }
    },
    refreshList:async function(){
      try{
        this.fetching=true;
        const form=this.form;
      let payload={
        current:this.current,
        size:this.size,
        brand:this.brandSelectedKeys.map((item)=>String(item)),
        type:this.typesSelectedKeys.map((item)=>String(item)),
        sales:form.sell?1:0,
        price:form.price?1:0,
        rackingtime:form.time?1:0,
        stock:form.exist?1:0
      }
      cancelList&&cancelList();
      let res= await this.$axios.post("/product/getallbycondition",payload,{cancelToken: new axios.CancelToken(function executor(c) {
        cancelList = c;
      })})
      let totalRes=await this.$axios.post("/product/getallbyconditiontotal",payload);
      if(res&&res.data.data){
        this.products=res.data.data;
      }else{
        this.products=[];
      }
      if(totalRes&&totalRes.data.data>=0){
          
          this.total=totalRes.data.data
      }else{
        this.products=[];
        this.total=0;
        throw 1;
      }

      }catch(err){
        console.log(err);
        this.$message.error('获取信息失败')
      }finally{
        this.fetching=false;
      }
    },

    onPageChange:async function(page, pageSize){
        console.log(page,pageSize)
        this.refreshList();
    },
    onShowSizeChange:async function(page, pageSize){
        console.log(page,pageSize)
        this.current=1;
        this.refreshList();
    },
    brandChange:async function(selectedKeys,selectedItem){
      console.log('brandchange',selectedKeys)
      this.brandSelectedKeys=selectedKeys
      this.current=1;
      this.refreshList();
    },
    typesChange:async function(selectedKeys,selectedItem){
      console.log('brandchange',selectedKeys)
      this.typesSelectedKeys=selectedKeys
      this.current=1;
      this.refreshList();
    },
    toProduct:function(product){
      console.log("toProduct")
      this.$router.push({
        path:'/product',
        query:{
          id:1
        }
      })
    }
  },
  watch:{
    form:{
      handler:function(newValue,oldValue) {   //特别注意，不能用箭头函数，箭头函数，this指向全局
            this.current=1;
            console.log(newValue,oldValue)
            this.refreshList();
 
      },
 
      deep: true    
    }
  },
  components: {
    Types,
    Product
  },
}
    
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
