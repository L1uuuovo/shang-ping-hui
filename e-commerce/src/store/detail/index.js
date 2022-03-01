import {
    reqGoodInfo,reqAddOrUpdateShopCart
} from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state = {
    skuid:{},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state,skuid){
        state.skuid = skuid
    }
}
const actions = {
    async getGoodInfo({commit},skuId) {
        let res = await reqGoodInfo(skuId)
        if (res.code == 200) {
            commit('GETGOODINFO', res.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let res = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(res.code == 200){
            return 'OK'
        }else{
            return Promise.reject(new Error("faile"));
        }
    }
    
}
const getters = {
    categoryView(state){
        return state.skuid.categoryView || {}
    },
    skuInfo(state){
        return state.skuid.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.skuid.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}