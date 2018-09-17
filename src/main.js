// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 饿了吗UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 修改样式
import './assets/css/element.less'

import {post,get} from './http/http'

Vue.use(ElementUI, { size: 'small' });

//定义全局变量
// post请求
Vue.prototype.$post = post;
// get请求
Vue.prototype.$get = get;

import './public/powerFilter'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
