<template>
  <div class="eshop-cart">
      <div class="eshop-cart-content">
          <h1 class="eshop-cart-title">订单列表</h1>
          <a-spin :spinning="orders.fetching">
        <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />

          <div>
              <div class="eshop-cart-thead">
              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">订单号</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">收获地址</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">收货人</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      总价
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">支付状态</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">操作</a-col> -->
              </a-row>
              </div>
           
            <div class="eshop-cart-tbody">
              <div v-for="(item) in orders.orderItems" :key="item.id" class="eshop-cart-trow" @click="toOrderInfo(item.id)">
                  <a-row  >
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="1"></a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">{{item.id}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">{{item.address}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">{{item.name}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      {{item.price}}
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">{{item.pay?'已支付':'未支付'}}</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col> -->
              </a-row>
              </div>

              
              </div>
          
          </div>
        </a-spin>
          <div class="eshop-cart-tfooter" :style="{display:'flex',justifyContent:'flex-end'}">
             <a-pagination :current="orders.current" :total="orders.total"  />
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data() {
    return {

    };
  },
  computed: {
      orders:function(){
          return this.$store.state.order
      },
       userInfo:function(){
          return this.$store.state.user.userInfo?this.$store.state.user.userInfo:{}
      },
  },
  created() {
       this.$store.dispatch("order/fetchOrderData",{userId:this.userInfo.id,current:1,size:10});
       this.$store.dispatch("order/fetchOrderTotal",{userId:this.userInfo.id});
  },
  mounted() {},
  methods: {
      toOrderInfo:function(orderId){
          this.$router.push({
              path:'/orderInfo',
              query:{
                orderId
              }
          })
      }

   
  },
  components: {},
};
</script>

<style lang="less" scoped>

.eshop-cart{
   background-color: @eshop-bg-grey;
   margin-top:@eshop-header-height;
   min-height: calc(100vh - @eshop-header-height);
   
  &-content{
    // background-color: #fff;
    overflow: hidden;
    max-width:@eshop-max-content;
    margin:0 auto;
    padding:@eshop-content-pad-10;
  }

  &-title{
      margin:@eshop-content-m-10;
      
  }
  &-trow{
      background-color:#fff;
      margin:@eshop-content-m-10;
      cursor: pointer;
  }
  &-tcol{
      padding:@eshop-content-pad-10;
      height:100%;
  }
  &-thead,&-tbody,&-tfooter{
      overflow: hidden;
  }
  &-thead>&-trow{
      
          height:56px;
          line-height: 56px;
     
  }
  &-tbody>&-trow,&-tfooter>&-trow{

          height:100px;
          line-height: 100px;
        
  }
  &-textRight{
      text-align: right;
      line-height: initial;
  }
  &-number{
      color:red;
      font-size: 1.3em;
  }
}
</style>