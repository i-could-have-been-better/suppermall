//封装请求函数
import axios from 'axios'
export function request(config) {
  //创建实例对象：
  const template01 = axios.create({
    timeout:5000,
    baseURL:'http://152.136.185.210:8000/api/w6'
  })
  //请求拦截器
  template01.interceptors.request.use((request)=>{
    return request;
  },(ero)=>{
    console.log(ero)
  })
  //响应拦截器
  template01.interceptors.response.use((response)=>{
    return response;
  },(ero)=>{
    console.log(ero)
  })

  return template01(config);
}
