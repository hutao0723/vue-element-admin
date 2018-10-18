
/**
 * 状态码：
 * 200----请求正常
 * 401----未登录状态
 * 403----token过期
 * 404----请求资源不存在
 * 
 */
import axios from 'axios';
import qs from 'qs';
import { Loading, Message } from 'element-ui'
import Router from '@/router'
import { removeToken, getToken } from '@/public/locationData'

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'api';
} else if(process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5b9219ec0e67d640e401dd41/vue_element_admin';
}

// 请求超时
axios.defaults.timeout = 3000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// request 拦截
axios.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        const token = getToken('token');        
        token && (config.headers.Authorization = token);        
        return config;   
    },
    error => {
        return Promise.reject(err);
    } 
);

// response 拦截器

const errorHandle = (code, other) => {
    // 状态码判断
    switch (code) {
        // 401: 未登录状态，跳转登录页
        case 401:
            router.push({
                path:"/login",
                querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            });
            break;
        // 403 token过期 ，清除token并跳转登录页
        case 403:
            Message.err('登录过期，请重新登录');
            // 移除token，重新登录
            removeToken('token');
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        // 404请求不存在
        case 404:
            Message.error('请求的资源不存在'); 
            break;
        default:
            Message.error(other); 
            break;  
    }
}

/*
    这里返回数据拦截，err拦截的是后端返回错误（指的是端口返回状态的错误，不是自己规定的错误）
*/
axios.interceptors.response.use(
    // 请求成功
    res => {
      return new Promise((resolve, reject) => {
            if(res.data.data.code == 200 ){
                resolve(res.data)
            }else{
                // 处理错误信息
                errorHandle(res.data.code,res.data.msg)
                reject(res.data)
            }
        })
    },   
    /*
        这里是服务器报错的时候才会从这里走的
    */ 
    // 请求失败
    error => {
        console.log(error);
        // const { response } = error;
        // if (response.data) {
        //     // 请求已发出，但是不在2xx的范围 
        //     errorHandle(response.data.code, response.data.data.msg);
        //     return Promise.reject(response.data);
        // } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
       // }
    }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,qs.stringify(data)).then(response => {
            resolve(response.data);
        },err => {
            reject(err)
        })
        .catch(err => {
            reject(err)
        })
    })
 }