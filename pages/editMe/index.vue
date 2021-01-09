<template>
  <div class="eshop-register">
      <div class="eshop-register-content">
          <div class="eshop-register-back">
              <nuxt-link to="/me">
                <a-icon type="arrow-left" />
                返回</nuxt-link>
          </div>
          <a-form-model ref="registerForm" :rules="rules"  :model="form" :style="{width:'80%'}">
            
            <h3>修改信息</h3>
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
              <a-button @click="updateUser" :style="{width:'100%'}" type="primary">确认</a-button>
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
      operating:false,
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
  computed: {
    userInfo:function(){
      return this.$store.state.user.userInfo
    }
  },
  created() {
    let userInfo=this.userInfo;
    this.form={
      accountName:userInfo.accountname,
      password:userInfo.password,
      userName:userInfo.username,
      phone:userInfo.phone,
      mail:userInfo.mail
    }

  },
  mounted() {},
  methods: {
    updateUser:async function(){
     try{
       let valid=await this.$refs.registerForm.validate();
       this.operating=true;
        let form=this.form;
        let userInfo=this.userInfo;
      let payload={
        id:userInfo.id,
        accountname:form.accountname,
        password:form.password,
        username:form.username,
        phone:form.phone,
        mail:form.mail,
        avatar:this.userInfo.avatar
      }
      let res=await this.$axios.post("/user/update",payload);
      if(res&&res.data.data){
        this.$message.success('修改信息成功')
        //this.$store.dispatch('user/fetchUserInfo',{id:userInfo.id});
      }else{
        throw 1;
        this.$message.error('修改信息失败')
      }
     }catch(err){
       console.log(err);
       
     }finally{
       this.operating=false
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
