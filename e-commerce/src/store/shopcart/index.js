import {
    reqCartList,reqDeleteCartById,reqUpdateCheckedByid
} from '@/api'
const state = {
    cartList:[]
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({
        commit
    }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let res = await reqDeleteCartById(skuId)
        if(res.code == 200){
            return 'OK'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let res = await reqUpdateCheckedByid(skuId,isChecked)
        if(res.code = 200){
            return 'OK'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(element => {
            let promise = element.isChecked == 1 ? dispatch('deleteCartListBySkuId',element.skuId):''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({dispatch,state},isChecked){
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}