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
                                <img :src="userInfo.avatar?userInfo.avatar:normal"/>
                            </div>
                            <ul class="eshop-infoList">
                                <li>
                                    <span class="eshop-info-label">用户名：</span>
                                    <span class="eshop-info-content">{{userInfo.username?userInfo.username:'--'}}</span>
                                </li>
                                <li>
                                    <span class="eshop-info-label">姓名：</span>
                                    <span class="eshop-info-content">{{userInfo.accountname?userInfo.accountname:'--'}}</span>
                                </li>
                                <li>
                                    <span class="eshop-info-label">手机：</span>
                                    <span class="eshop-info-content">{{userInfo.phone?userInfo.phone:'--'}}</span>
                                </li>
                                <li>
                                    <span class="eshop-info-label">邮件：</span>
                                    <span class="eshop-info-content">{{userInfo.mail?userInfo.mail:'--'}}</span>
                                </li>
                                <li @click="addressVisible=true;$store.dispatch('address/fetchAddressData',{userId:userInfo.id})">
                                    <nuxt-link to="" >
                                        查看地址
                                    </nuxt-link>
                                </li>
                                <li >
                                     <a-upload
                                        name="file"
                                        :multiple="false"
                                        action="/api/api/upload"
                                        :before-upload="beforeUpload"
                                        @change="handleChange"
                                        :show-upload-list="false"
                                    >
                                        <a-button> <a-icon type="upload" /> 上传头像 </a-button>
                                    </a-upload>
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
                            <div @click="$router.push('/orderList')">
                                <div >订单</div>
                                <div>{{orderTotal}}</div>
                            </div>
                            <div @click="$router.push('/cart')">
                                <div >购物车</div>
                                <div>{{cart.total}}</div>
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
                        
                        <Product :key="item.id" v-for="(item) in recommendList" :img="getAvatar(item.product)" :product="item.product"/>
                        
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
    <a-modal
      title="地址"
      :visible="addressVisible"
      :footer="null"
      @cancel="addressVisible=false"
    >
    <a-spin :spinning="addressFetching">
    <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      <div :style="{display:'flex',justifyContent:'center'}">
         <div :style="{width:'70%'}">
             <div  v-for="(item,i) in address" :key="item.id">
                 <span class="eshop-info-label">地址{{i}}:</span>
                 <span class="eshop-info-content">{{item.address}}</span>
                 <a-icon type="minus" :style="{cursor:'pointer',float:'right'}" @click="removeAddress(item)"/>
            </div>
            <div>
                <a-input v-model="inputAddress" :style="{width:'70%'}" ></a-input>
                <a-icon type="plus" :style="{cursor:'pointer',float:'right'}" @click="addAddress"/>
            </div>
         </div>
      </div>
    </a-spin>
    </a-modal>
  </div>
</template>

<script>
import Product from '~/components/generalComp/product.vue'
import normal from '~/assets/images/avatar.jpg'
export default {
  name: 'Hello',
  data() {
    return {
        inputAddress:'',
        addressVisible:false,
        recommendList:[],
        imageUrl: '',
        normal
    };
  },
  computed: {
      address:function(){
          return this.$store.state.address.address;
      },
      addressFetching:function(){
            return this.$store.state.address.addressFetching;
      },
      userInfo:function(){
          return this.$store.state.user.userInfo?this.$store.state.user.userInfo:{}
      },
      orderTotal:function(){
          return this.$store.state.order.total
      },
      cart:function(){
          return this.$store.state.cart
      }
  },
  created() {
      this.$store.dispatch('user/fetchUserInfo',{id:this.userInfo.id});
      this.$store.dispatch("order/fetchOrderData",{userId:this.userInfo.id,current:1,size:10});
      this.$store.dispatch("order/fetchOrderTotal",{userId:this.userInfo.id});
      this.refreshRec();
      
  },
  mounted() {},
  methods: {
      updateUser:async function(){
        try{
        // let valid=await this.$refs.registerForm.validate();
        //this.operating=true;
            // let form=this.form;
            let userInfo=this.userInfo;
        let payload={
            id:userInfo.id,
            accountname:userInfo.accountname,
            password:userInfo.password,
            username:userInfo.username,
            phone:userInfo.phone,
            mail:userInfo.mail,
            avatar:this.imageUrl
        }
        let res=await this.$axios.post("/user/update",payload);
        if(res&&res.data.data){
            this.$message.success('修改信息成功')
            this.$store.dispatch('user/fetchUserInfo',{id:userInfo.id});
        }else{
            throw 1;
            this.$message.error('修改信息失败')
        }
        }catch(err){
        console.log(err);
        
        }finally{
       // this.operating=false
        }
        
        },
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
      refreshRec:async function(){
      try{

       let recRes=await this.$axios.get("/recommend/getall")
  
        if(recRes&&recRes.data.data){
            this.recommendList=recRes.data.data;
        }else{
            throw 1;
        }
        }catch(err){
            console.log(err);
            this.$message.error('获取首页信息失败')
        }finally{

        }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('只能上传jpg,png格式！');
      }
      const isLt5M = file.size / 1024 / 1024 < 10;
      if (!isLt5M) {
        this.$message.error('图片不能大于10M！');
      }
      return isJpgOrPng && isLt5M;
    },
       handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.imageUrl=info.file.response.data;
                this.updateUser();
                this.$message.success(`${info.file.name}上传成功`);
            } else if (info.file.status === 'error') {
                this.$message.error(`${info.file.name}上传失败.`);
            }
       },
      refreshAddress:async function(){
          this.$store.dispatch('address/fetchAddressData')
      },
      removeAddress:async function(address){
          try{
              
              let payload=[address]
              let res=await this.$axios.post('/address/delete',payload)
              if(res&&res.data.data){
                  this.$message.success('删除成功')
                  
              }else{
                  throw 1;
              }
          }catch(err){
              console.log(err)
              this.$message.error('删除失败')
          }finally{
              this.$store.dispatch('address/fetchAddressData',{userId:this.userInfo.id})
          }
      },
      addAddress:async function(){
          try{
              if(!this.inputAddress){
                  this.$message.error('请输入地址')
                  return;
              }
              let payload={
                  address:this.inputAddress,
                  userid:this.userInfo.id
              }
              let res=await this.$axios.post('/address/add',payload)
              if(res&&res.data.data){
                  this.$message.success('添加成功')
                  this.inputAddress=''
              }else{
                  throw 1;
              }
          }catch(err){
              console.log(err)
              this.$message.error('新增失败')
          }finally{
              this.$store.dispatch('address/fetchAddressData',{userId:this.userInfo.id})
          }
      },
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
    cursor: pointer;
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
