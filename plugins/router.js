export default function({ store, app }) {

    app.router.beforeEach((to, from, next) => {
  
      // 如果是账号设置，或者我的钱包页面模块，就判断用户是否登录了
      //console.log(to)


      if((to.path==="/product")&&!to.query.id){
        next('/404')
        return;
      }
      if((to.path==="/orderInfo")&&!to.query.orderId){
        next('/404')
        return;
      }
      if((to.path==="/me"||to.path==="/cart"||to.path==="/orderList"||to.path==="/orderInfo")&&!store.state.user.loginStatus){
        next('/login');
        return;
      }
      // 其他页面模块，放行
      next()
    })
  }