import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 配置默认项
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 设置默认请求头里面的信息
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers = {
    Authorization: `Bearer ${store.getUser().token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  if (error.response.status) {
    router.push('/login')
  }
  // 对响应错误做点什么
  // 如果错误，那么我们就跳转到login页面，进行重新登录，因为是token实现了
  return Promise.reject(error)
})

export default axios
