export const state = () => ({
    fetching:false,
    total: 0,
    orderItems:[],
    current:1,
    size:10
  })
  
export const mutations = {
    setFetching:function(state,fetching){
        state.fetching=fetching;
    },
    setTotal:function(state,payload){
        state.total=payload.total
    },
    setSize:function(state,payload){
        state.size=payload.size
    },
    setCurrent:function(state,payload){
        state.current=payload.current
    },
    setOrderItems:function(state,payload){
        state.orderItems=payload.orderItems
    }
}

export const actions={
    fetchOrderData:async function({ commit },payload){
        
        try{
            commit('setFetching',true);
            let res=await this.$axios.post("/ordering/all",{userid:payload.userId,current:payload.current,size:payload.size})
            console.log("cartdata",res)
            let orders=res.data.data
            
            commit('setSize',{size:payload.size})
            commit('setCurrent',{current:payload.current})
            commit('setOrderItems',{orderItems:orders})
            commit('setFetching',false);
        }catch(err){
            console.log(err)
            
        }
    },
    fetchOrderTotal:async function({commit},payload){
        try{
            let res=await this.$axios.post("/ordering/total",{userid:payload.userId})
            commit('setTotal',{total:res.data.data})
        }catch(err){
            console.log(err)
        }
    }
}