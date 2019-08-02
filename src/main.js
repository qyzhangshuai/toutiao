import Vue from 'vue'
import App from './App.vue'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'

// 引入axios
import axios from 'axios'
// 引入公共样式
import '@/style/reset.min.css'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
