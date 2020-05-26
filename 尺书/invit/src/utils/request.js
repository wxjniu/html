import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['apptype'] = '1';
axios.defaults.headers['version'] = '2.0.0';
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/api';}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://testapi.postotime.com';
}
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: '/api',
  // 超时
  timeout: 10000
});
// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(res => {
    // const code = res.data.code
    // if (code !== 200) {
    //   console.log(res.data.message);
    //   return Promise.reject('error')
    // } else {
    //   return res.data
    // }
    return res.data
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
