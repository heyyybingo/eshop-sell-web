<template>
  <div class="eshop-cart">
      <div class="eshop-cart-content">
          <h1 class="eshop-cart-title">订单</h1>
          <div>
              <div class="eshop-cart-thead">
              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      数量
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">小计</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">操作</a-col> -->
              </a-row>
              </div>
            <!-- <a-checkbox-group v-model="checkedList" :style="{width:'100%'}" @change="onChange"> -->
            <div class="eshop-cart-tbody">
              <a-row v-for="(item) in orderItems" :key="item.product.id" class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="1"></a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">{{item.product.name}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">{{item.product.price}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      {{item.number}}
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">{{item.product.price*item.number}}</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col> -->
              </a-row>

   
              </div>
            <!-- </a-checkbox-group> -->
          </div>

          <div class="eshop-cart-tfooter">
              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="2"><a class="eshop-danger">删除</a></a-col>
                  <a-col class="eshop-cart-tcol" :span="10"><a>清除下架商品</a></a-col> -->
                  <a-col class="eshop-cart-tcol" :span="19">
                      <div v-if="orderInfo.pay==0" class="eshop-flexCenter" :style="{height:'100%'}">
                         <div :style="{width:'100%'}">
                             
                            <div class="eshop-cart-textRight">
                                <span >待支付</span>
                                <span class="eshop-cart-number">{{orderInfo.price}}</span>
                                <span>元</span>
                            </div>
                            
                         </div>
                      </div>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="5">
                      <div v-if="orderInfo.pay==0" class="eshop-flexCenter" :style="{height:'100%'}">
                          <a-button :style="{width:'100%',height:'72px',fontSize:'28px'}" type="danger" @click="pay">确认支付</a-button>
                      </div>
                      <div v-if="!orderInfo.pay==0" class="eshop-flexCenter" :style="{height:'100%'}">
                          <span :style="{width:'100%',height:'72px',lineHeight:'72px',fontSize:'28px',color:'#c78a49'}">已支付</span>
                          <span :style="{width:'100%',height:'72px',lineHeight:'72px',fontSize:'28px'}">（{{orderInfo.price}}元）</span>
                      </div>
                  </a-col>
              </a-row>
          </div>
      </div>
  </div>
</template>

<script>
const plainOptions = ['1', '2', '3'];
export default {
  name: 'Hello',
  data() {
    return {
        orderInfo:{},
        orderItems:[],
        orderItemsFetching:false,
        // checkedList: [],
        // indeterminate: false,
        // checkAll: false,
        // plainOptions
    };
  },
  computed: {
      orderId:function(){
          return this.$route.query.orderId;
      },
      userId:function(){
          return this.$store.state.user.id;
      }
  },
  created() {
      this.refresh();
  },
  mounted() {},
  methods: {
      refresh:async function(){
         try{
             this.orderItemsFetching=true;
              let payload={
              id:this.orderId
          }
          let res=await this.$axios.post("/ordering/getordering",payload)
          if(res&&res.data.data){
              this.orderInfo=res.data.data
              this.orderItems=this.orderInfo.orderdetailList;
              
          }else{
              throw 1;
          }
         }catch(err){
             console.log(err);
             this.$message.error("获取信息失败")
         }finally{
             this.orderItemsFetching=false
         }
      },
      pay:async function(){
          try{  
              let payload={
                  userid:this.userId,orderingid:this.orderId
              }
              let res=await this.$axios.post("/paymentlog/pay",payload);
              if(res&&res.data.data){
                  this.$message.success("下单成功")
                  this.refresh();
              }
          }catch(err){
              console.log(err)
              this.$message.error("操作失败，请重试")
          }finally{

          }
      }
    // onChange(checkedList) {
    //   this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
    //   this.checkAll = checkedList.length === plainOptions.length;
    // },
    // onCheckAllChange(e) {
    //   Object.assign(this, {
    //     checkedList: e.target.checked ? plainOptions : [],
    //     indeterminate: false,
    //     checkAll: e.target.checked,
    //   });
    // },
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