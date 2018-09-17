import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login/login'

Vue.use(Router)
// 所有用户都能看到的路由
export const constantRouterMap = [
    {
        path: '/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'index',
        component: resolve =>  require(['views/pageLayout/layout'], resolve),
        meta:{title:'首页',icon:'icon-shouyeshouye'},
        redirect:'/index/index',
        hidden:false,
        children:[
            {
                path: 'index',
                name: '首页',
                component: resolve =>  require(['views/index/index'], resolve),
                meta:{title:'首页',icon:'el-icon-setting'},
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        hidden:false,
        meta:{title:'登录',icon:'el-icon-setting'},
    },
    {
        path: '/pageErr404',
        name: 'pageErr404',
        component: resolve =>  require(['views/errPage/pageErr'], resolve),
        hidden:true,
    },
    {
        path: '*',
        redirect:'/pageErr404'
    },
]
// 按权限加载的路由
export const asyncRouterMap = [
    {
        path: '/table',
        name: 'table',
        component: resolve =>  require(['views/pageLayout/layout'], resolve),
        meta:{title:'表格',icon:'icon-biaoge'},
        redirect:'/table/table',
        hidden:false,
        children:[
            {
                path: 'table0',
                name: 'table0',
                component: resolve =>  require(['views/table/table'], resolve),
                meta:{title:'表格',icon:'el-icon-setting'},
            },
            {
                path: 'table1',
                name: 'table1',
                component: resolve =>  require(['views/table/table'], resolve),
                meta:{title:'表格2',icon:'el-icon-setting'},
            },
            {
                path: 'table2',
                name: 'table2',
                component: resolve =>  require(['views/table/table'], resolve),
                meta:{title:'表格3',icon:'el-icon-setting'},
            },
            {
                path: 'table3',
                name: 'table3',
                component: resolve =>  require(['views/table/table'], resolve),
                meta:{title:'表格4',icon:'el-icon-setting'},
            },
        ]
    },
]
export default new Router({
    routes:constantRouterMap
})
