<template>
  <div class="eshop-register">
      <div class="eshop-register-content">
          <div class="eshop-register-back">
              <nuxt-link to="/login">
                <a-icon type="arrow-left" />
                返回</nuxt-link>
          </div>
          <a-form-model ref="registerForm" :rules="rules"  :model="form" :style="{width:'80%'}">
            
            <h3>注册</h3>
            <a-form-model-item label="账号" prop="userName">
              <a-input v-model="form.userName"></a-input>
            </a-form-model-item>

            <a-form-model-item label="密码" prop="password">
              <a-input  v-model="form.password"></a-input>
            </a-form-model-item>
            
            <a-form-model-item label="姓名" prop="accountName">
              <a-input  v-model="form.accountName"></a-input>
            </a-form-model-item>
            

            <a-form-model-item label="电话">
              <a-input v-model="form.phone"></a-input>
            </a-form-model-item>

            <a-form-model-item label="邮箱">
              <a-input v-model="form.mail"></a-input>
            </a-form-model-item>

            <!-- <a-form-model-item label="邮箱">
              <a-input></a-input>
            </a-form-model-item> -->
            <!-- <a-form-model-item>
                
              <div class="eshop-register-account">
                <nuxt-link to="/register">注册</nuxt-link>

                <nuxt-link to="/forget">忘记密码</nuxt-link>
              </div>
            </a-form-model-item> -->
            <a-form-model-item>
              <a-button @click="register" :style="{width:'100%'}" type="primary">注册</a-button>
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
          accountName:'',
          password:'',
          userName:'',
          phone:'',
          mail:''
        },
        rules: {
        accountName:[
          { required: true, message: '请输入姓名'},
        ],
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
  created() {},
  mounted() {},
  methods: {
    register:async function(){
      try{
        let valid=await this.$refs.registerForm.validate();
        const form=this.form;
        let payload={
          accountname:form.accountName,
          password:form.password,
          username:form.userName,
          phone:form.phone,
          mail:form.mail,
          avatar:null
        }
        let res= await this.$axios.post("/user/registered",payload)
        if(res){   
           this.$message.success('注册成功');
           this.$router.push('/login')
        }
      }catch(err){
        console.log(err)
      }
    }
  },
  components: {},
};
</script>

<style lang="less" scoped>

.eshop-register{
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
      position: relative;
      padding-top: 60px;
      // padding-bottom: 60px;
      min-width: 400px;
      min-height:500px;
    }
    &-account{
      display: flex;
      justify-content: space-between;
    }

    &-back{
        position: absolute;
        left:10px;
        top:10px;
    }
}
</style>
