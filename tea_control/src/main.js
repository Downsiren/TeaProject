/*
 * @Description: main.js
 * @Author: zhangxin
 * @Date: 2021-02-15 15:09:32
 * @LastEditTime: 2021-02-24 19:44:13
 * @LastEditors: zhangxin
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// // 引入vue-Echarts
// import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

// // 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'


// // 注册组件后即可使用
// Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
