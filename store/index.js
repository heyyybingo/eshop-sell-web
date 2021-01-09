export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  export const actions={
    nuxtServerInit({commit}, {req}) {
       // let cookie = req.headers.cookie;
        // 将cookie转成json对象
        // let token = cookieparse('token', req);
        //console.log("req",req,cookie)
      } 
  }