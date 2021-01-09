<template>
  <div class="eshop-login">
      <div class="eshop-login-content">
          
          <a-form-model ref="loginForm" :rules="rules"  :model="form" :style="{width:'80%'}">
            <h3>登录</h3>
            <a-form-model-item label="账号" prop="userName">
              <a-input v-model="form.userName"></a-input>
            </a-form-model-item>

            <a-form-model-item label="密码" prop="password">
              <a-input v-model="form.password"></a-input>
            </a-form-model-item>
            <a-form-model-item>
              <div class="eshop-login-account">
                <nuxt-link to="/register">注册</nuxt-link>

                <nuxt-link to="/forget">忘记密码</nuxt-link>
              </div>
            </a-form-model-item>
            <a-form-model-item>
              <a-button :style="{width:'100%'}" type="primary" @click="login">登录</a-button>
              <!-- <a-button :style="{width:'100%'}">用短信登录</a-button> -->
            </a-form-model-item>

            <!-- <a-form-model-item>
              
            </a-form-model-item> -->
          </a-form-model>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
       form:{
         userName:'',
         password:''
       },
        rules: {
        userName: [
          { required: true, message: '请输入账号'},
        ],
        password:[
          { required: true, message: '请输入密码'},
        ],
      },
   
    };
  },
  computed: {},
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    login:async function(){
      try{
        let valid=await this.$refs.loginForm.validate();
        const form=this.form
        let payload={
          username:form.userName,
          password:form.password
        }
        let res=await this.$axios.post("/user/login",payload)
        console.log(res)
        if(res){
          // console.log(res)
          let id=res.data.data;
          if(id){
            this.$store.dispatch('user/fetchUserInfo',{id});
            this.$router.push('/home')
          }else{
            this.$message.error('登录失败')
          }
          
        }
        
      }catch(err){
        this.$message.error('登录异常')
        console.log(err)
      }
    }
  },
  components: {},
};
</script>

<style lang="less" scoped>

.eshop-login{
    width:100%;
    margin-top:@eshop-header-height;
    height: calc(100vh - @eshop-header-height);
    background-color: @eshop-bg-grey;
    display: flex;
    justify-content: center;
    align-items: center;

    &-content{
      background-color: #fff;
      width:20%;
      height:70%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-account{
      display: flex;
      justify-content: space-between;
    }
}
</style>
