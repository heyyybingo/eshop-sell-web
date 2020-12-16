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
            <a-checkbox-group v-model="checkedList" :style="{width:'100%'}" @change="onChange">
            <div class="eshop-cart-tbody">
              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="1"></a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      1
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">小计</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col> -->
              </a-row>

              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="2"></a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      1
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">小计</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col> -->
              </a-row>

              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox value="3"></a-checkbox>
                  </a-col> -->
                  <a-col class="eshop-cart-tcol" :span="4">图片</a-col>
                  <a-col class="eshop-cart-tcol" :span="10">商品名称</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">单价</a-col>
                  <a-col class="eshop-cart-tcol" :span="3">
                      1
                  </a-col>
                  
                  <a-col class="eshop-cart-tcol" :span="4">小计</a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a class="eshop-danger">删除</a>
                  </a-col> -->
              </a-row>
              </div>
            </a-checkbox-group>
          </div>

          <div class="eshop-cart-tfooter">
              <a-row class="eshop-cart-trow">
                  <!-- <a-col class="eshop-cart-tcol" :span="2">
                      <a-checkbox :checked="checkAll" :indeterminate="indeterminate" @change="onCheckAllChange">全选</a-checkbox>
                  </a-col>
                  <a-col class="eshop-cart-tcol" :span="2"><a class="eshop-danger">删除</a></a-col>
                  <a-col class="eshop-cart-tcol" :span="10"><a>清除下架商品</a></a-col> -->
                  <a-col class="eshop-cart-tcol" :span="24">
                      <div class="eshop-flexCenter" :style="{height:'100%'}">
                         <div :style="{width:'100%'}">
                              <div class="eshop-cart-textRight">
                              <span class="eshop-cart-number">0</span>件 合计(不含运费) : <span class="eshop-cart-number">0</span>元
                            </div>
                            <!-- <br/> -->
                            <div class="eshop-cart-textRight">
                                已优惠 : ¥<span class="eshop-cart-number">0</span>
                            </div>
                         </div>
                      </div>
                  </a-col>
                  <!-- <a-col class="eshop-cart-tcol" :span="5">
                      <div class="eshop-flexCenter" :style="{height:'100%'}">
                          <a-button :style="{width:'100%',height:'72px',fontSize:'28px'}" type="danger">确认结算</a-button>
                      </div>
                  </a-col> -->
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
        checkedList: [],
        indeterminate: false,
        checkAll: false,
        plainOptions
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {

    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
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