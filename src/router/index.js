import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
// 一级路由
import Home from '@/views/home'
// home下的二级路由
import Welcome from '@/views/welcome'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome }
      ]
    }
  ]
})

export default router
