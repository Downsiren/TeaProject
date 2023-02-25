/*
 * @Description: 
 * @Author: zhangxin
 * @Date: 2021-02-15 15:09:32
 * @LastEditTime: 2021-02-17 21:36:46
 * @LastEditors: zhangxin
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ControlBoard from '../components/controlBoard.vue'
import Body from '../components/main/body.vue'
import Data from '../components/show/data/data.vue'
import Statistics from '../components/show/statistics/statistics.vue'
import Test from '../components/show/test/test.vue'
import AboutSoft from '../components/show/aboutsoft/aboutsoft.vue'
import Location from '../components/show/location/location.vue'
import Operation from '../components/show/operation/operation.vue'
import Tools from '../components/show/tools/tools.vue'
import Setting from '../components/show/setting/setting.vue'


//导入全局样式表
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/controlBoard'
  },
  {
    path: '/controlBoard',
    component: ControlBoard,
    // redirect: '/body',
    redirect: '/data',
    children: [
               {path: '/data', component: Data},
               {path: '/statistics', component: Statistics},
               {path: '/test', component: Test},
               {path: '/aboutsoft', component: AboutSoft},
               {path: '/location', component: Location},
               {path: '/operation', component: Operation},
               {path: '/tools', component: Tools},
               {path: '/setting', component: Setting},
              //  {path: '/body', component: Body},
              ]
  }
 
]

const router = new VueRouter({
  routes
})

export default router
