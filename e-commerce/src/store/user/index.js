import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import {setToken, getToken,removeToken} from "@/utils/token";
const state = {
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = '',
        state.userInfo = {}
        removeToken()
    }
}
const actions = {
    async getCode({commit},phone){
        let res = await reqGetCode(phone)
        if(res.code == 200){
            commit('GETCODE',res.data)
            return 'OK'
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async userRegister({commit},user){
        let res = await reqUserRegister(user)
        console.log(res)
        if(res.code == 200){
            return 'OK'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({commit},data){
        let res = await reqUserLogin(data)
        if(res.code = 200){
            commit('USERLOGIN',res.data.token)
            setToken(res.data.token);
            return 'OK'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getUserInfo({commit}){
        let res= await reqUserInfo()
        if(res.code == 200){
            commit('GETUSERINFO',res.data)
            return 'OK'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogout({commit}){
        let res = await reqLogout()
        if(res.code == 200){
            commit('CLEAR')
            return 'OK'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}