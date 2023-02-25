/*
 * @Description: 
 * @Author: zhangxin
 * @Date: 2021-01-27 20:52:58
 * @LastEditTime: 2021-01-29 15:24:15
 * @LastEditors: zhangxin
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import axios from 'axios'
//配置的请求区域
axios.defaults.baseURL = 'http://localhost:3000/'
Vue.prototype.$http = axios



Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
