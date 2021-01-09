export const state = () => ({
    loginStatus:false,
    userInfo:null
  })
  
export const mutations = {
    setUserInfo:function(state,payload){
        state.userInfo=payload.userInfo;
    },
    setLoginStatus:function(state,payload){
        state.loginStatus=payload.loginStatus;
    }
}

export const actions={
    fetchUserInfo:async function({ commit },payload){
        let id=payload.id;
        try{
            let res= await this.$axios.post("/user/getuser",{id})
            let info=res.data.data
            commit('setLoginStatus',{loginStatus:true})
            commit('setUserInfo',{userInfo:info})
        }catch(err){
            this.$message.error("获取用户信息失败")
            console.log(err)
        }
    },
    clearUserInfo:function({ commit }){
        
          
            commit('setLoginStatus',{loginStatus:false})
            commit('setUserInfo',{userInfo:null})
        
    }
}