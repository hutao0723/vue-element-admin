
import router from '@/router'
import store from '@/store'
import { getToken } from '@/public/locationData'
// 页面进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })


router.beforeEach((to, from, next) => {
    /**
     * 获取是否有这个token
     */
    NProgress.start();
    if (getToken('user_token')) {
        // 已经登录过的用户，无需再登录
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done() // 需要手动触发
        }else{
            // 判断当前用户是否已拉取完权限信息
            if(store.getters.userPowerInfo.length === 0) { 
                // 获取用户权限信息
                store.dispatch('getUserPowerInfo').then(res => {
                    const roles = res
                    store.dispatch('filterRoutes', roles).then((res) => { 
                        router.addRoutes(store.getters.userRouters) 
                        next({...to, replace: true })
                    })
                }).catch((err) => {
                    // store.dispatch('FedLogOut').then(() => {
                    //    // Message.error(err || 'Verification failed, please login again')
                    //     next({ path: '/' })
                    // })
                })
            }else{
                // // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
                // if(hasPermission(store.getters.roles, to.meta.roles)) {
                //     next()
                // } else {
                //     next({ path: '/401', replace: true, query: { noGoBack: true }})
                // }
                // 可删 ↑
                next()
            }
            next()
        }
    } else {
        if (to.path === '/login') { //这就是跳出循环的关键
            next()
        }else{
             next('/login')
        }
    }   
})

router.afterEach(() => {
    NProgress.done() 
})