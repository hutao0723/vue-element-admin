import API from '@/http/api'
import { post,get} from '@/http/http'
import {setToken} from '@/public/locationData'
import { asyncRouterMap,constantRouterMap } from '@/router'
import {
    SAVE_USERPOWERINFO,
    USER_ROUTERS,
    USER_BASICUROUTERS
} from './user-types.js'

const user = {
    state:{
        // 最基础的路由
        userBasicRouter:constantRouterMap,
        // 后台请求回来的数据权限
        userPowerInfo:[],
        // 根据权限生成相对应的路由
        userRouters:[],
    },
    mutations:{
        // 保存从后台请求回来的权限数据
        [SAVE_USERPOWERINFO](state,data){
            state.userPowerInfo = data  
        },
        // 保存用户路由
        [USER_ROUTERS](state,data){
            state.userRouters = data
        },
        // 
        [USER_BASICUROUTERS](state,data){
            state.userBasicRouter = state.userBasicRouter.concat(data)
        }
        
    },
    actions:{
        // 用户登录，
        userLogin({commit},loginInfo){
            return new Promise((resolve,reject)=>{
                // 登录请求
                post(API.userLogin,loginInfo).then((res)=>{
                    // 用户如果登录成功，设置token
                    if(res.data.code == 200){
                        setToken('userLogin',new Date())
                        resolve()    
                    }else{
                        reject()
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 获取用户权限信息，带上token验证请求，获取的信息直接resolve出去
        getUserPowerInfo({commit}){
            return new Promise((resolve,reject)=>{
                // 权限请求
                post(API.getUserPowerInfo).then((res)=>{
                    if(res.data.code == 200){
                        commit('SAVE_USERPOWERINFO',asyncRouterMap)
                        resolve(asyncRouterMap)    
                    }else{
                        reject()
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 权限对照过滤，后台给的数据转换成用户路由
        filterRoutes({commit},data){
            return new Promise(resolve => {
                // 拿到的权限信息data与constantRouterMap对比过滤
                let accessedRouters = data
                commit('USER_ROUTERS', accessedRouters)
                commit('USER_BASICUROUTERS', accessedRouters)
                resolve(accessedRouters)
            })
        },
    },
    getters:{
        userBasicRouter:state=>state.userBasicRouter,
        // 用户权限信息
        userPowerInfo:state=>state.userPowerInfo,
        // 用户路由
        userRouters:state=>state.userRouters,
    }
}
export default user   