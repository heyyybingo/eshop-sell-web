<template>
  <div class="eshop-login">
      <div class="eshop-login-content">
          
          <a-form-model :style="{width:'80%'}">
            <h3>登录</h3>
            <a-form-model-item>
              <a-input></a-input>
            </a-form-model-item>

            <a-form-model-item>
              <a-input></a-input>
            </a-form-model-item>
            <a-form-model-item>
              <div class="eshop-login-account">
                <nuxt-link to="/register">注册</nuxt-link>

                <nuxt-link to="/forget">忘记密码</nuxt-link>
              </div>
            </a-form-model-item>
            <a-form-model-item>
              <a-button :style="{width:'100%'}" type="primary">登录</a-button>
              <a-button :style="{width:'100%'}">用短信登录</a-button>
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
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
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
