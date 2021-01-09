export const state = () => ({
    total: 0,
    cartItems:[]
  })
  
export const mutations = {
    setTotal:function(state,payload){
        state.total=payload.total
    },
    setCartItems:function(state,payload){
        state.cartItems=payload.cartItems
    }
}

export const actions={
    fetchCartData:async function({ commit },payload){
        
        try{
            let res=await this.$axios.post("/shopping/getall",{userid:payload.userId})
            console.log("cartdata",res)
            let carts=res.data.data
            commit('setTotal',{total:carts?.length})
        commit('setCartItems',{cartItems:carts})
        }catch(err){
            console.log(err)
        }
    }
}