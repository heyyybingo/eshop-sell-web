export const state = () => ({
    addressFetching:false,
    address:[]
  })
  
export const mutations = {
    setAddressFetching:function(state,fetching){
        state.addressFetching=fetching;
    },
    setAddress:function(state,address){
        state.address=address;
    }
}

export const actions={
    fetchAddressData:async function({ commit },payload){
        let userId=payload.userId;
        try{
            commit('setAddressFetching',true);
            let res= await this.$axios.post("/address/all",{userid:userId})
            let info=res.data.data
            commit('setAddress',info)
            
        }catch(err){
            this.$message.error("获取用户信息失败")
            commit('setAddress',[])
            console.log(err)
        }finally{
            commit('setAddressFetching',false);
        }
    },
    // clearUserInfo:function({ commit }){
        
          
    //         commit('setLoginStatus',{loginStatus:false})
    //         commit('setUserInfo',{userInfo:null})
        
    // }
}