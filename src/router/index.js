import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
// 一级路由
import Home from '@/views/home'
// home下的二级路由
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/notFound'
import Setting from '@/views/setting'
// 导入存储在浏览器中的信息
import store from '@/store'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article },
        { path: '/setting', name: 'setting', component: Setting }

      ]
    },
    { path: '*', name: 'notFound', component: NotFound }
  ]
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
