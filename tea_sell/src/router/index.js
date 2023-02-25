/*
 * @Description: 路由
 * @Author: zhangxin
 * @Date: 2021-01-27 20:52:58
 * @LastEditTime: 2021-02-05 17:40:03
 * @LastEditors: zhangxin
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import HomePage from '../components/HomePage.vue'
import Selects from '../components/Selects.vue'
import Goods from '../components/Goods.vue'


//导入全局样式表
import '../assets/css/global.css'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   redirect:'/login'
  // },
  // {
  //   path:'/login',
  //   component: Login
  // },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home,
    redirect:'/homePage',
    children: [{path: '/homePage',component: HomePage},
               {path: '/selects',component: Selects},
               {path: '/goods',component: Goods}]
  }
]

const router = new VueRouter({
  routes
})

// //挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行 next() 放行  next('/login')强制跳转
  
//   if(to.path === '/login') return next();
//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token');
//   if(!tokenStr) return next('/login')
//   next()
// })

export default router
