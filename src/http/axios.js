import axios  from "axios";


export const request = axios.create({
    baseURL: 'http://localhost:5000',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    // baseURL: 'http://58.87.94.169:8083',
    timeout: 10000000
})

request.interceptors.request.use(
  (config) => {
    console.log('请求拦截:', config);
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
);

export default request