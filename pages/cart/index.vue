<template>
  <div class="eshop-cart">
      <div class="eshop-cart-content">
          <h1 class="eshop-cart-title">购物车</h1>
           <a-spin :indicator="indicator" :spinning="operating" >
          <div>
              <div class="eshop-cart-thead">
              <a-row class="eshop-cart-trow">
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="8">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">数量</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">库存</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">小计</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">操作</a-col>
              </a-row>
              </div>
            <a-checkbox-group v-model="checkedList" :style="{width:'100%'}" @change="onChange">
            <div class="eshop-cart-tbody">
              <a-row v-for="(cartItem) in carts" :key="cartItem.id" class="eshop-cart-trow">
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :value="cartItem.id"></a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="4">
                      <img :src="getAvatar(cartItem,product)"/>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="8">{{cartItem.product.name}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">{{cartItem.product.price}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-input-number :defaultValue="cartItem.number" id="inputNumber" :min="1"  :max="cartItem.product.stock" @change="(e)=>cartItemChange(e,cartItem)"/>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="2">{{cartItem.product.stock}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">{{cartItem.number*cartItem.product.price}}</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger" @click="deleteItems([cartItem])">删除</a>
                  </a-col>
              </a-row>

              <!-- <a-row class="eshop-cart-trow">
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="2"></a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-input-number id="inputNumber"  :min="1"  />
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="2">小计</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col>
              </a-row>

              <a-row class="eshop-cart-trow">
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="3"></a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-input-number id="inputNumber"  :min="1"  />
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="2">小计</a-col>
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col>
              </a-row> -->
              </div>
            </a-checkbox-group>
          </div>

          <div class="eshop-cart-tfooter">
              <a-row class="eshop-cart-trow">
                  <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="2"><a class="eshop-danger" @click="deleteItems(checkedListItems)">删除</a></a-col>
                  <a-col class="eshop-cart-tcol" :span="10"><a>清除下架商品</a></a-col>
                  <a-col class="eshop-cart-tcol" :span="5">
                      <div class="eshop-flexCenter" :style="{height:'100%'}">
                         <div >
                              <div class="eshop-cart-textRight">
                              已选<span class="eshop-cart-number">{{totalNumber}}</span>件 合计(不含运费) : <span class="eshop-cart-number">{{totalPrice}}</span>元
                            </div>
                            <!-- <br/> -->
                            <!-- <div class="eshop-cart-textRight">
                                已优惠 : ¥<span class="eshop-cart-number">0</span>
                            </div> -->
                         </div>
                      </div>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="5">
                      <div class="eshop-flexCenter" :style="{height:'100%'}">
                          <a-button :style="{width:'100%',height:'72px',fontSize:'28px'}" type="danger" @click="addressVisible=true">确认结算</a-button>
                      </div>
                  </a-col>
              </a-row>
          </div>
          </a-spin>
      </div>

       <a-modal
      title="请选择地址"
      :visible="addressVisible"
      :confirm-loading="operating"
      @ok="submitOrder"
      @cancel="addressVisible=false"
    >
      <div :style="{display:'flex',justifyContent:'center'}">
          <a-select v-model="selectAddress" :options="addressOptions" :style="{width:'220px'}"></a-select>
      </div>
    </a-modal>
  </div>
</template>

<script>
import normal from '~/assets/images/other/img23.png'
import moment from 'moment'
import _ from 'lodash'
// const plainOptions = ['1', '2', '3'];
export default {
  name: 'Hello',
  data() {
    return {
        indicator: <a-icon type="loading" style="font-size: 24px" spin />,
        checkedList: [],
        indeterminate: false,
        checkAll: false,
        normal,
        operating:false,
        selectAddress:null,
        addressVisible:false
    };
  },
  computed: {
      addressOptions:function(){
          return this.$store.state.address.address.map((item)=>{return {value:item.id,label:item.address}})
      },
      address:function(){
          return this.$store.state.address.address
      },
      carts:function(){
          return this.$store.state.cart.cartItems
      },
      userId:function(){
          return this.$store.state.user.userInfo?.id
      },
      userInfo:function(){

          return this.$store.state.user.userInfo
      },
      checkedListItems:function(){
          let m=new Map(this.checkedList.map((item)=>[item,true]));
          return this.carts.filter((item)=>m.get(item.id))
      },
      totalNumber:function(){
          let n=this.checkedListItems?.reduce((ac,cur)=>ac+cur.number,0)
          //console.log(n)
          return n
      },
      totalPrice:function(){
          return this.checkedListItems?.reduce((ac,cur)=>ac+cur.number*cur.product.price,0)
      }
    //   plainOptions:function(){
    //       return this.carts.map((item)=>item.id)
    //   }
  },
  created() {
      this.$store.dispatch('cart/fetchCartData',{userId:this.userId})
  },
  mounted() {},
  methods: {
       getAvatar:function(product){
          console.log("HOR",product)
           if(!product){
              return this.normal
          }
          if(!product.slideshow){
              return this.normal
          }
          return product.slideshow.avatar
      },
      submitOrder:async function(){
          try{
              
              if(this.checkedListItems.length===0){
                  this.$message.error("请至少选择一项");
                  return;
              }
              if(!this.selectAddress){
                  this.$message.error("请选择地址");
                  return;
              }
              let targetAddress=this.address.find((item)=>item.id=this.selectAddress)
              console.log(this.selectAddress)
              this.operating=true
              let payload={
                  time:moment().format('YYYY-MM-DD HH:mm:ss'),
                  userid:this.userId,
                  name:this.userInfo?.accountname,
                  phone:this.userInfo?.phone,
                  addressAddress:targetAddress,
                  orderdetailList:this.checkedListItems.map((item)=>{return {productid:item.productid,number:item.number}})
              }
              let res=await this.$axios.post("/ordering/submit",payload);
              if(res&&res.data.data){
                  this.$message.success('提交成功')
                  this.deleteItems(this.checkedListItems);
                  this.$router.push({
                      path:'/orderInfo',
                      query:{
                          orderId:res.data.data
                      }
                  })
              }else{
                  throw 1
              }
          }catch(err){ 
              console.log(err)
              this.$message.error('提交订单失败')
          }finally{
              this.operating=false
          }
      },
      deleteItems:async function(cartItems){
          console.log(cartItems)
          try{

          this.operating=true;
          let res= await this.$axios.post("/shopping/delete ",cartItems);
          this.$store.dispatch('cart/fetchCartData',{userId:this.userId})
          }catch(err){
              console.log(err);
              this.$message.error("删除失败！")
              //this.$router.go(0)
          }finally{
              this.operating=false
          }
      },
      cartItemChange:_.debounce(async function(value,cartItem){
          console.log("CART_CHANGE")
            try{
                if(value<0||value>cartItem.product.stock){
                return;
                }
            let profit=value-cartItem.number;
            if(profit==0){
                return;
            }
            this.operating=true;
            let res=null;
            if(profit>0){
                let payload={
                    productid:cartItem.productid,
                    number:profit,
                    userid:this.userId
                }
                res=await this.$axios.post("/shopping/addshopping",payload);
                if(res&&res.data.data){

                }else{
                    throw 1;
                }
            }else{
                let payload={
                    productid:cartItem.productid,
                    number:-profit,
                    userid:this.userId
                }
                 res=await this.$axios.post("/shopping/deleteshopping",payload);
                if(res&&res.data.data){
                    
                }else{
                    throw 1;
                }
            }
            
            }catch(err){
                console.log(err)
                this.$message.error('处理失败！')
                this.$router.go(0)
                //  
            }finally{
                this.operating=false;
                this.$store.dispatch('cart/fetchCartData',{userId:this.userId})
            }

      },1000),
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < this.carts.length;
      this.checkAll = checkedList.length === this.carts.length;
      console.log(checkedList)
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.carts.map((item)=>item.id) : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
  },
  components: {},
};
</script>

<style lang="less" >

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
      &>img{
          height:80px;
          width:80px;
      }
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