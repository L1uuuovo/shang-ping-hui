import {reqSearchInfo} from '@/api'
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({commit},params={}){
        let res = await reqSearchInfo(params)
        if(res.code == 200){
            commit('GETSEARCHLIST',res.data)
        }
    }
}
const getters = {
    goodList(state){
        return state.searchList.goodsList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}