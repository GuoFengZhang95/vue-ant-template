import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // url = base url + request url
  crossDomain: true, // 跨域
  withCredentials: true, // 跨域请求发送cookie
  timeout: 10000 // 超时时间
})
// console.log(process.env.VUE_APP_BASE_API)
// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
