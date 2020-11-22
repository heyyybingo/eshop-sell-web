<template>
  <div class="eshop-header">
      <div class="eshop-header-inner">
         <div class="eshop-header-logo">
             <img src="~/assets/images/logo.png" />
         </div>
          <div class="eshop-header-menu">
              <a-menu v-model="current" mode="horizontal">
                <a-menu-item key="/allTypes">
                    查看所有类别
                </a-menu-item>

                <a-menu-item key="/home" >
                    首页
                </a-menu-item>

                <a-menu-item key="/allProducts">
                    所有产品
                </a-menu-item>

                <a-menu-item key="/blog">
                    博客
                </a-menu-item>

                <a-menu-item key="/articles">
                    文章列表
                 </a-menu-item>


            </a-menu>
          </div>
     

     
        <div class="eshop-header-search">
                
                <a-input  style="width:180px">
                    <a-icon slot="prefix" :style="{fontSize:'18px',color:'grey'}" type="search" />
                </a-input>
                
        </div>
        <div class="eshop-header-status">
                <nuxt-link to="/login">登录</nuxt-link>
                <!-- <span>登录</span> -->
                <span class='eshop-header-status-seperator'></span>
                <nuxt-link to="/register">注册</nuxt-link>
                <!-- <span>注册</span> -->
        </div>
        <div class="eshop-header-cart">
                <a-icon :style="{fontSize:'22px',color:'grey'}" type="shopping-cart" />
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
        current:[]
    };
  },
  computed: {},
  created() {
    //  console.log(this.$route.fullPath)
     this.current=[this.$route.fullPath]
  },
  mounted() {},
  methods: {},
  watch:{
      current:function(newPath,oldPath){
          //console.log(oldPath,newPath)
          const path=newPath[0];
          console.log("current changed")
          this.$router.push(path)
      },
    //   $route:function(to,from){
    //       console.log("router changed")
    //       this.current=[to.fullPath]
    //   }
  },
  components: {},
};
</script>

<style lang="less" scoped>

.eshop-header{
    width: 100vw;
    height: @eshop-header-height;
    line-height:@eshop-header-height;
    position: fixed;
    top:0;
    z-index: 999;
    background-color: #fff;
    &-logo{
        padding:16px;
    }
    &-inner{
        max-width: @eshop-header-width;
        height:100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
    &-search{
        width:300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-status{
        width:150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &-seperator{
            height:calc(@eshop-header-height / 3);
            width:1px;
            background-color: #222222;
        }
    }
    &-cart{
        width:100px;
        text-align: center;
    }
    .ant-menu{
        border:none;
    }
    .ant-menu-item{
        height:@eshop-header-height;
        line-height:@eshop-header-height;
        padding:@eshop-header-link-padding;
        transition: inherit;
        &-active{
            color:inherit;
            border:none;
            background-color: #E6D6C6;
            
        }
        &-selected{
            border:none;
            color:inherit;
            background-color: #E6D6C6;
        }
    
    }
    
}
</style>
