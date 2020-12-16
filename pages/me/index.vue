<template>
  <div class="eshop-me">
      <div class="eshop-me-content">
      <div class="eshop-myinfo eshop-me-myinfo">
                    <div  class="eshop-baseinfo">
                        <div class="eshop-my eshop-me-my">
                            <a class="eshop-me-edit">
                                <a-icon type="edit"  @click="toEditMe"/>
                            </a>
                            <div class="eshop-avatar">
                                <img />
                            </div>
                            <ul class="eshop-infoList">
                                <li>
                                    <span class="eshop-info-label">用户名：</span>
                                    <span class="eshop-info-content">xxx</span>
                                </li>
                                <li>
                                    <span class="eshop-info-label">手机：</span>
                                    <span class="eshop-info-content">xxx</span>
                                </li>
                                <li>
                                    <span class="eshop-info-label">邮件：</span>
                                    <span class="eshop-info-content">xxx</span>
                                </li>
                            </ul>
                        <div class="eshop-vip">
                            <a>
                                <span>
                                    开通会员
                                </span>
                            </a>
                        </div>
                        </div>
                        <div class="eshop-mywallet">
                            <div>
                                <div>订单</div>
                                <div>0</div>
                            </div>
                            <div>
                                <div>待收货</div>
                                <div>0</div>
                            </div>
                            <!-- <div>
                                <div>待还</div>
                                <div>0</div>
                            </div> -->
                        </div>
                    </div>

                    <div class="eshop-me-recommend">
                        <h3>商品推荐</h3>
                        <div class="eshop-me-products">
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
                    <!-- <div class="eshop-options">
                        <div>
                            <img />
                            <div>待支付</div>
                        </div>
                        <div>
                            <img />
                            <div>待收货</div>
                        </div>
                        <div>
                            <img />
                            <div>待评价</div>
                        </div>
                        <div>
                            <img />
                            <div>待退换</div>
                        </div>
                    </div>
                </div> -->
  </div>
  </div>
</template>

<script>
import Product from '~/components/generalComp/product.vue'
export default {
  name: 'Hello',
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {

      toEditMe:function(){
          this.$router.push('/editMe')
      }
  },
  components: {
      Product
  },
};
</script>

<style lang="less" scoped>

.eshop-me{
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
  &-myinfo{
      margin:@eshop-content-m-10;
  }

  &-my{
      position: relative;
  }
  &-edit{
      position: absolute;
      top:10px;
      right:10px;
  }
  &-recommend{
      margin:@eshop-content-m-10;
  }
  &-products{
    margin:@eshop-content-m-10;
    display: grid;
    width:100%;
    grid-template-columns: repeat(4, calc((100% - 60px ) / 4));
    grid-gap: 20px 20px;
    // grid-template-rows: 25% 25% 25% 25%;
  }
}

.eshop-head{
    padding:20px 0 20px 0;
}
.eshop-self{
    width:100%;
    overflow: hidden;
    min-height: 100%;
}
.eshop-selfList{
    float: left;
    margin-right: 20px;
    background-color: #fff;
}
.eshop-selfList ul{
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}
.eshop-selfList ul li{
    position: relative;
    cursor: pointer;
    height:60px;
    width:160px;
    line-height:60px;
    padding:0 16px 0 16px;
    border-bottom: 1px solid #cccccc;
}
.eshop-selfList ul li:hover{
   background-color: #E6D6C6;
}
.eshop-selfList ul li:hover::after{
    content:"";
    position: absolute;
    width: 0;
    height:0;
    border:5px solid transparent;
    border-left:5px solid #fff;
    right:16px;
    top:50%;
    transform: translateY(-50%);
}
.eshop-selfShow{
    
    /* min-height:calc(100vh - 80px); */
    padding:16px;
    overflow: hidden;
    background-color: #fff;
}
.eshop-baseinfo{
    display: flex;
}
.eshop-my{
    flex-grow: 1;
    display: flex;
    align-items: center;
    border-right: 1px solid #cccccc;
}
.eshop-vip{
    flex-grow: 1;
}
.eshop-vip>a{
    display: inline-block;
    cursor: pointer;
    border-radius: 14px;
    background-color: #f4ca3a;
    padding:0 10px;
    height:26px;
    width:85px;
    font-weight: 500;
    text-align: center;
    line-height: 26px;
}
.eshop-vip>a:hover>span{
    position: relative;
    animation:jump 2s ease;
}
@keyframes jump{
    0%{
        top:0;
    }
    50%{
        font-size: 1.05em;
        top:-20px;
    }
    75%{
        font-size: .8em;
        top:5px;;
    }
    100%{
        top:0;
    }
}
.eshop-avatar{
    border-radius: 100%;
    border:4px solid  #cccccc;
    overflow: hidden;
    box-shadow:3px 2px 10px 0 rgba(79,5,1,.84)
}
.eshop-avatar>img{
    height:120px;
    width:120px; 
}
.eshop-infoList{
    flex-grow: 2;
    padding:16px;
    padding-left: 32px;

}
.eshop-infoList li{
    padding:4px;
}
.eshop-info-label{
    font-weight: 600;
}
.eshop-info-content{
    font-weight: 400;
}
.eshop-mywallet{
    flex-grow: 3;
    display: flex;
    align-items: center;
}
.eshop-mywallet>div{
    text-align: center;
}
.eshop-mywallet div{
    flex-grow: 1;
}

.eshop-mywallet>div:not(:last-child){
    border-right:1px solid  #cccccc;
}

.eshop-options{
    display: flex;
    align-items: center;
    height:180px;
}
.eshop-options>div{
    flex-grow: 1;
    text-align: center;
    padding:16px;
    font-size: .8em;
    transition: 1s all ease;
}
.eshop-options>div:hover{
    cursor: pointer;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
}
.eshop-options div  img{
    height:48px;
    width: 48px;
    padding:16px;
    margin:0 auto;
}
.eshop-options div div{
    margin:0 auto;
}
</style>
